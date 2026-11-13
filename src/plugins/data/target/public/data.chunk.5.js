(window["data_bundle_jsonpfunction"] = window["data_bundle_jsonpfunction"] || []).push([[5],{

/***/ "./public/ui/shard_failure_modal/shard_failure_description.tsx":
/*!*********************************************************************!*\
  !*** ./public/ui/shard_failure_modal/shard_failure_description.tsx ***!
  \*********************************************************************/
/*! exports provided: formatKey, formatValueByKey, ShardFailureDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatKey", function() { return formatKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatValueByKey", function() { return formatValueByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShardFailureDescription", function() { return ShardFailureDescription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_std__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/std */ "../../../packages/osd-std/target/web/index.js");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shard_failure_description_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shard_failure_description_header */ "./public/ui/shard_failure_modal/shard_failure_description_header.tsx");
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
 * Provides pretty formatting of a given key string
 * e.g. formats "this_key.is_nice" to "This key is nice"
 * @param key
 */
function formatKey(key) {
  const nameCapitalized = key.charAt(0).toUpperCase() + key.slice(1);
  return nameCapitalized.replace(/[\._]/g, ' ');
}
/**
 * Adds a EuiCodeBlock to values of  `script` and `script_stack` key
 * Values of other keys are handled a strings
 * @param value
 * @param key
 */
function formatValueByKey(value, key) {
  if (key === 'script' || key === 'script_stack') {
    const valueScript = Array.isArray(value) ? value.join('\n') : String(value);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCodeBlock"], {
      language: "java",
      paddingSize: "s",
      isCopyable: true
    }, valueScript);
  } else {
    return String(value);
  }
}
function ShardFailureDescription(props) {
  const flattendReason = Object(_osd_std__WEBPACK_IMPORTED_MODULE_1__["getFlattenedObject"])(props.reason);
  const listItems = Object.entries(flattendReason).map(([key, value]) => ({
    title: formatKey(key),
    description: formatValueByKey(value, key)
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shard_failure_description_header__WEBPACK_IMPORTED_MODULE_3__["ShardFailureDescriptionHeader"], props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiDescriptionList"], {
    listItems: listItems,
    type: "column",
    compressed: true,
    className: "shardFailureModal__desc",
    "data-test-subj": "shardFailureModalDescription",
    titleProps: {
      className: 'shardFailureModal__descTitle'
    },
    descriptionProps: {
      className: 'shardFailureModal__descValue'
    }
  }));
}

/***/ }),

/***/ "./public/ui/shard_failure_modal/shard_failure_description_header.tsx":
/*!****************************************************************************!*\
  !*** ./public/ui/shard_failure_modal/shard_failure_description_header.tsx ***!
  \****************************************************************************/
/*! exports provided: getFailurePropsForSummary, getFailureSummaryText, getFailureSummaryDetailsText, ShardFailureDescriptionHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFailurePropsForSummary", function() { return getFailurePropsForSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFailureSummaryText", function() { return getFailureSummaryText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFailureSummaryDetailsText", function() { return getFailureSummaryDetailsText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShardFailureDescriptionHeader", function() { return ShardFailureDescriptionHeader; });
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




function getFailurePropsForSummary(failure) {
  const failureDetailProps = ['shard', 'index', 'node'];
  return failureDetailProps.filter(key => typeof failure[key] === 'number' || typeof failure[key] === 'string').map(key => ({
    key,
    value: String(failure[key])
  }));
}
function getFailureSummaryText(failure, failureDetails) {
  const failureName = failure.reason.type;
  const displayDetails = typeof failureDetails === 'string' ? failureDetails : getFailureSummaryDetailsText(failure);
  return _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchSource.fetch.shardsFailedModal.failureHeader', {
    defaultMessage: '{failureName} at {failureDetails}',
    values: {
      failureName,
      failureDetails: displayDetails
    },
    description: 'Summary of shard failures, e.g. "IllegalArgumentException at shard 0 node xyz"'
  });
}
function getFailureSummaryDetailsText(failure) {
  return getFailurePropsForSummary(failure).map(({
    key,
    value
  }) => `${key}: ${value}`).join(', ');
}
function ShardFailureDescriptionHeader(props) {
  const failureDetails = getFailurePropsForSummary(props).map(kv => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "shardFailureModal__keyValueTitle",
    key: kv.key,
    "data-test-subj": "shardFailureModalKeyValueTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCode"], null, kv.key), " ", kv.value));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, getFailureSummaryText(props, ''), failureDetails));
}

/***/ }),

/***/ "./public/ui/shard_failure_modal/shard_failure_modal.tsx":
/*!***************************************************************!*\
  !*** ./public/ui/shard_failure_modal/shard_failure_modal.tsx ***!
  \***************************************************************/
/*! exports provided: ShardFailureModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShardFailureModal", function() { return ShardFailureModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shard_failure_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shard_failure_table */ "./public/ui/shard_failure_modal/shard_failure_table.tsx");
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






function ShardFailureModal({
  request,
  response,
  title,
  onClose
}) {
  if (!response || !response._shards || !Array.isArray(response._shards.failures) || !request) {
    // this should never ever happen, but just in case
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiCallOut"], {
      title: "Sorry, there was an error",
      color: "danger",
      iconType: "alert"
    }, "The ShardFailureModal component received invalid properties");
  }
  const failures = response._shards.failures;
  const requestJSON = JSON.stringify(request, null, 2);
  const responseJSON = JSON.stringify(response, null, 2);
  const tabs = [{
    id: 'table',
    name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchSource.fetch.shardsFailedModal.tabHeaderShardFailures', {
      defaultMessage: 'Shard failures',
      description: 'Name of the tab displaying shard failures'
    }),
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shard_failure_table__WEBPACK_IMPORTED_MODULE_4__["ShardFailureTable"], {
      failures: failures
    })
  }, {
    id: 'json-request',
    name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchSource.fetch.shardsFailedModal.tabHeaderRequest', {
      defaultMessage: 'Request',
      description: 'Name of the tab displaying the JSON request'
    }),
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiCodeBlock"], {
      language: "json",
      isCopyable: true
    }, requestJSON)
  }, {
    id: 'json-response',
    name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('data.search.searchSource.fetch.shardsFailedModal.tabHeaderResponse', {
      defaultMessage: 'Response',
      description: 'Name of the tab displaying the JSON response'
    }),
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiCodeBlock"], {
      language: "json",
      isCopyable: true
    }, responseJSON)
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiModalHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiModalHeaderTitle"], null, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiTabbedContent"], {
    tabs: tabs,
    initialSelectedTab: tabs[0],
    autoFocus: "selected"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiCopy"], {
    textToCopy: responseJSON
  }, copy => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSmallButtonEmpty"], {
    onClick: copy
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "data.search.searchSource.fetch.shardsFailedModal.copyToClipboard",
    defaultMessage: "Copy response to clipboard"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSmallButton"], {
    onClick: () => onClose(),
    fill: true,
    "data-test-sub": "closeShardFailureModal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "data.search.searchSource.fetch.shardsFailedModal.close",
    defaultMessage: "Close",
    description: "Closing the Modal"
  }))));
}

/***/ }),

/***/ "./public/ui/shard_failure_modal/shard_failure_open_modal_button.tsx":
/*!***************************************************************************!*\
  !*** ./public/ui/shard_failure_modal/shard_failure_open_modal_button.tsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShardFailureOpenModalButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./public/services.ts");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shard_failure_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shard_failure_modal */ "./public/ui/shard_failure_modal/shard_failure_modal.tsx");
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
function ShardFailureOpenModalButton({
  request,
  response,
  title
}) {
  function onClick() {
    const modal = Object(_services__WEBPACK_IMPORTED_MODULE_3__["getOverlays"])().openModal(Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__["toMountPoint"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shard_failure_modal__WEBPACK_IMPORTED_MODULE_5__["ShardFailureModal"], {
      request: request,
      response: response,
      title: title,
      onClose: () => modal.close()
    })), {
      className: 'shardFailureModal'
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiTextAlign"], {
    textAlign: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButton"], {
    color: "warning",
    size: "s",
    onClick: onClick,
    "data-test-subj": "openShardFailureModalBtn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "data.search.searchSource.fetch.shardsFailedModal.showDetails",
    defaultMessage: "Show details",
    description: "Open the modal to show details"
  })));
}

/***/ }),

/***/ "./public/ui/shard_failure_modal/shard_failure_table.tsx":
/*!***************************************************************!*\
  !*** ./public/ui/shard_failure_modal/shard_failure_table.tsx ***!
  \***************************************************************/
/*! exports provided: ShardFailureTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShardFailureTable", function() { return ShardFailureTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui/lib/services */ "@elastic/eui/lib/services");
/* harmony import */ var _elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shard_failure_description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shard_failure_description */ "./public/ui/shard_failure_modal/shard_failure_description.tsx");
/* harmony import */ var _shard_failure_description_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shard_failure_description_header */ "./public/ui/shard_failure_modal/shard_failure_description_header.tsx");
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

// @ts-ignore




function ShardFailureTable({
  failures
}) {
  const itemList = failures.map((failure, idx) => ({
    ...{
      id: String(idx)
    },
    ...failure
  }));
  const initalMap = {};
  const [expandMap, setExpandMap] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initalMap);
  const columns = [{
    align: _elastic_eui_lib_services__WEBPACK_IMPORTED_MODULE_2__["RIGHT_ALIGNMENT"],
    width: '40px',
    isExpander: true,
    render: item => {
      const failureSummeryText = Object(_shard_failure_description_header__WEBPACK_IMPORTED_MODULE_5__["getFailureSummaryText"])(item);
      const collapseLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('data.search.searchSource.fetch.shardsFailedModal.tableRowCollapse', {
        defaultMessage: 'Collapse {rowDescription}',
        description: 'Collapse a row of a table with failures',
        values: {
          rowDescription: failureSummeryText
        }
      });
      const expandLabel = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('data.search.searchSource.fetch.shardsFailedModal.tableRowExpand', {
        defaultMessage: 'Expand {rowDescription}',
        description: 'Expand a row of a table with failures',
        values: {
          rowDescription: failureSummeryText
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonIcon"], {
        onClick: () => {
          // toggle displaying the expanded view of the given list item
          const map = Object.assign({}, expandMap);
          if (map[item.id]) {
            delete map[item.id];
          } else {
            map[item.id] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shard_failure_description__WEBPACK_IMPORTED_MODULE_4__["ShardFailureDescription"], item);
          }
          setExpandMap(map);
        },
        "aria-label": expandMap[item.id] ? collapseLabel : expandLabel,
        iconType: expandMap[item.id] ? 'arrowUp' : 'arrowDown'
      });
    }
  }, {
    field: 'shard',
    name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('data.search.searchSource.fetch.shardsFailedModal.tableColShard', {
      defaultMessage: 'Shard'
    }),
    sortable: true,
    truncateText: true,
    width: '80px'
  }, {
    field: 'index',
    name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('data.search.searchSource.fetch.shardsFailedModal.tableColIndex', {
      defaultMessage: 'Index'
    }),
    sortable: true,
    truncateText: true
  }, {
    field: 'node',
    name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('data.search.searchSource.fetch.shardsFailedModal.tableColNode', {
      defaultMessage: 'Node'
    }),
    sortable: true,
    truncateText: true
  }, {
    field: 'reason.type',
    name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('data.search.searchSource.fetch.shardsFailedModal.tableColReason', {
      defaultMessage: 'Reason'
    }),
    truncateText: true
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiInMemoryTable"], {
    itemId: "id",
    items: itemList,
    columns: columns,
    pagination: true,
    sorting: {
      sort: {
        field: 'index',
        direction: 'desc'
      }
    },
    itemIdToExpandedRowMap: expandMap
  });
}

/***/ })

}]);
//# sourceMappingURL=data.chunk.5.js.map