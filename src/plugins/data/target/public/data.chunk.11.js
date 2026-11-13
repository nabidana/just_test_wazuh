(window["data_bundle_jsonpfunction"] = window["data_bundle_jsonpfunction"] || []).push([[11],{

/***/ "./public/ui/query_editor/query_editor_extensions/query_editor_extensions.tsx":
/*!************************************************************************************!*\
  !*** ./public/ui/query_editor/query_editor_extensions/query_editor_extensions.tsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _query_editor_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query_editor_extension */ "./public/ui/query_editor/query_editor_extensions/query_editor_extension.tsx");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



const QueryEditorExtensions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const {
    configMap,
    componentContainer,
    bannerContainer,
    bottomPanelContainer,
    queryControlsContainer,
    ...dependencies
  } = props;
  const sortedConfigs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (!configMap || Object.keys(configMap).length === 0) return [];
    return Object.values(configMap).sort((a, b) => a.order - b.order);
  }, [configMap]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, sortedConfigs.map(config => {
    const extensionComponentId = `osdQueryEditorExtensionComponent-${config.id}`;
    const extensionQueryControlsId = `osdQueryEditorExtensionQueryControls-${config.id}`;

    // Make sure extension components are rendered in order
    let extensionComponentContainer = document.getElementById(extensionComponentId);
    if (!extensionComponentContainer) {
      extensionComponentContainer = document.createElement('div');
      extensionComponentContainer.className = `osdQueryEditorExtensionComponent osdQueryEditorExtensionComponent__${config.id}`;
      extensionComponentContainer.id = extensionComponentId;
      componentContainer.appendChild(extensionComponentContainer);
    }

    // Make sure extension query controls are rendered in order
    let extensionQueryControlsContainer = document.getElementById(extensionQueryControlsId);
    if (!extensionQueryControlsContainer) {
      extensionQueryControlsContainer = document.createElement('div');
      extensionQueryControlsContainer.className = `osdQueryEditorExtensionQueryControls osdQueryEditorExtensionQueryControls__${config.id}`;
      extensionQueryControlsContainer.id = extensionQueryControlsId;
      queryControlsContainer.appendChild(extensionQueryControlsContainer);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_query_editor_extension__WEBPACK_IMPORTED_MODULE_1__["QueryEditorExtension"], {
      key: config.id,
      config: config,
      dependencies: dependencies,
      componentContainer: extensionComponentContainer,
      bannerContainer: bannerContainer,
      bottomPanelContainer: bottomPanelContainer,
      queryControlsContainer: extensionQueryControlsContainer
    });
  }));
});

// Needed for React.lazy
// eslint-disable-next-line import/no-default-export
/* harmony default export */ __webpack_exports__["default"] = (QueryEditorExtensions);

/***/ })

}]);
//# sourceMappingURL=data.chunk.11.js.map