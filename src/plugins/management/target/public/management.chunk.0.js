(window["management_bundle_jsonpfunction"] = window["management_bundle_jsonpfunction"] || []).push([[0],{

/***/ "./public/components/feature_cards/feature_cards.tsx":
/*!***********************************************************!*\
  !*** ./public/components/feature_cards/feature_cards.tsx ***!
  \***********************************************************/
/*! exports provided: FeatureCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureCards", function() { return FeatureCards; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



const FeatureCards = ({
  navLinks,
  navigateToApp,
  setAppDescriptionControls,
  pageDescription,
  navigationUI: {
    HeaderControl
  }
}) => {
  const groupedCardForDisplay = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    const grouped = [];
    let lastGroup;
    // The navLinks has already been sorted based on link / category's order,
    // so it is safe to group the links here.
    navLinks.forEach(link => {
      var _lastGroup$category, _link$category;
      if (!lastGroup || ((_lastGroup$category = lastGroup.category) === null || _lastGroup$category === void 0 ? void 0 : _lastGroup$category.id) !== ((_link$category = link.category) === null || _link$category === void 0 ? void 0 : _link$category.id)) {
        lastGroup = {
          category: link.category,
          navLinks: []
        };
        grouped.push(lastGroup);
      }
      lastGroup.navLinks.push(link);
    });
    return grouped;
  }, [navLinks]);
  if (!navLinks.length) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderControl, {
    controls: [{
      description: pageDescription
    }],
    setMountPoint: setAppDescriptionControls
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiPageContent"], {
    hasShadow: false,
    hasBorder: false,
    color: "transparent",
    paddingSize: "m"
  }, groupedCardForDisplay.map((group, groupIndex) => {
    var _group$category;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: ((_group$category = group.category) === null || _group$category === void 0 ? void 0 : _group$category.id) || groupIndex
    }, group.category && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, group.category.label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
      size: "m"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
      wrap: true
    }, group.navLinks.map((link, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
        key: (link === null || link === void 0 ? void 0 : link.id) || index,
        grow: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCard"], {
        "data-test-subj": `landingPageFeature_${link.id}`,
        textAlign: "left",
        title: link.title,
        description: link.description || '',
        onClick: () => navigateToApp(link.id),
        titleSize: "xs",
        style: {
          width: 240
        }
      }));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], null));
  })));
};

/***/ }),

/***/ "./public/landing_page_application.tsx":
/*!*********************************************!*\
  !*** ./public/landing_page_application.tsx ***!
  \*********************************************/
/*! exports provided: renderApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderApp", function() { return renderApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_feature_cards_feature_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/feature_cards/feature_cards */ "./public/components/feature_cards/feature_cards.tsx");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




const renderApp = ({
  mountElement,
  props
}) => {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_feature_cards_feature_cards__WEBPACK_IMPORTED_MODULE_2__["FeatureCards"], props), mountElement);
  return () => react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(mountElement);
};

/***/ })

}]);
//# sourceMappingURL=management.chunk.0.js.map