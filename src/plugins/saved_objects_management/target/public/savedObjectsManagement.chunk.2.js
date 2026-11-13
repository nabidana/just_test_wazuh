(window["savedObjectsManagement_bundle_jsonpfunction"] = window["savedObjectsManagement_bundle_jsonpfunction"] || []).push([[2],{

/***/ "./public/management_section/saved_objects_table_page.tsx":
/*!****************************************************************!*\
  !*** ./public/management_section/saved_objects_table_page.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SavedObjectsTablePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use */ "../../../node_modules/react-use/lib/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _objects_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objects_table */ "./public/management_section/objects_table/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./public/utils.ts");
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







const SavedObjectsTablePage = ({
  coreStart,
  dataStart,
  allowedTypes,
  serviceRegistry,
  actionRegistry,
  columnRegistry,
  namespaceRegistry,
  setBreadcrumbs,
  dataSourceEnabled,
  dataSourceManagement,
  navigation,
  useUpdatedUX
}) => {
  const capabilities = coreStart.application.capabilities;
  const itemsPerPage = coreStart.uiSettings.get('savedObjects:perPage', 50);
  const dateFormat = coreStart.uiSettings.get('dateFormat');
  const currentWorkspace = Object(react_use__WEBPACK_IMPORTED_MODULE_3__["useObservable"])(coreStart.workspaces.currentWorkspace$);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setBreadcrumbs([useUpdatedUX ? currentWorkspace ? {
      text: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.updatedUX.workspace.title', {
        defaultMessage: 'Workspace assets'
      })
    } : {
      text: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.updatedUX.title', {
        defaultMessage: 'Assets'
      })
    } : {
      text: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.breadcrumb.index', {
        defaultMessage: 'Saved objects'
      }),
      href: '/'
    }]);
  }, [setBreadcrumbs, useUpdatedUX, currentWorkspace]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_objects_table__WEBPACK_IMPORTED_MODULE_4__["SavedObjectsTable"], {
    allowedTypes: allowedTypes,
    serviceRegistry: serviceRegistry,
    actionRegistry: actionRegistry,
    columnRegistry: columnRegistry,
    namespaceRegistry: namespaceRegistry,
    savedObjectsClient: coreStart.savedObjects.client,
    indexPatterns: dataStart.indexPatterns,
    search: dataStart.search,
    http: coreStart.http,
    overlays: coreStart.overlays,
    notifications: coreStart.notifications,
    applications: coreStart.application,
    workspaces: coreStart.workspaces,
    perPageConfig: itemsPerPage,
    goInspectObject: savedObject => {
      const inAppUrl = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["formatInspectUrl"])(savedObject, coreStart);
      if (inAppUrl) {
        return coreStart.application.navigateToUrl(inAppUrl);
      }
    },
    dateFormat: dateFormat,
    canGoInApp: savedObject => {
      const {
        inAppUrl
      } = savedObject.meta;
      return inAppUrl ? Boolean(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(capabilities, inAppUrl.uiCapabilitiesPath)) : false;
    },
    dataSourceEnabled: dataSourceEnabled,
    dataSourceManagement: dataSourceManagement,
    navigationUI: navigation.ui,
    useUpdatedUX: useUpdatedUX
  });
};
// eslint-disable-next-line import/no-default-export


/***/ })

}]);
//# sourceMappingURL=savedObjectsManagement.chunk.2.js.map