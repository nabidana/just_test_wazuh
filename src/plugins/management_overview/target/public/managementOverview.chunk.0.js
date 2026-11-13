(window["managementOverview_bundle_jsonpfunction"] = window["managementOverview_bundle_jsonpfunction"] || []).push([[0],{

/***/ "../../../node_modules/react-use/lib/useIsomorphicLayoutEffect.js":
/*!*************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useIsomorphicLayoutEffect.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react_1.useLayoutEffect : react_1.useEffect;
exports.default = useIsomorphicLayoutEffect;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useObservable.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useObservable.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useIsomorphicLayoutEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../../../node_modules/react-use/lib/useIsomorphicLayoutEffect.js"));
function useObservable(observable$, initialValue) {
    var _a = react_1.useState(initialValue), value = _a[0], update = _a[1];
    useIsomorphicLayoutEffect_1.default(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
exports.default = useObservable;


/***/ }),

/***/ "./public/application.tsx":
/*!********************************!*\
  !*** ./public/application.tsx ***!
  \********************************/
/*! exports provided: ManagementOverviewWrapper, renderApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementOverviewWrapper", function() { return ManagementOverviewWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderApp", function() { return renderApp; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-use/lib/useObservable */ "../../../node_modules/react-use/lib/useObservable.js");
/* harmony import */ var react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/public */ "entry/core/public");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_core_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_overview_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/overview_card */ "./public/components/overview_card/index.ts");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */








function ManagementOverviewWrapper(props) {
  const {
    application,
    overviewApps
  } = props;
  const applications = react_use_lib_useObservable__WEBPACK_IMPORTED_MODULE_4___default()(application.applications$);
  const availableApps = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    return overviewApps === null || overviewApps === void 0 ? void 0 : overviewApps.filter(overviewApp => {
      const app = applications === null || applications === void 0 ? void 0 : applications.get(overviewApp.id);
      return app && app.navLinkStatus !== _core_public__WEBPACK_IMPORTED_MODULE_5__["AppNavLinkStatus"].hidden;
    });
  }, [applications, overviewApps]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPage"], {
    restrictWidth: 1200
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPageBody"], {
    component: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "management.overview.overviewTitle",
    defaultMessage: "Overview"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGrid"], {
    columns: 3
  }, availableApps === null || availableApps === void 0 ? void 0 : availableApps.map(app => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    key: app.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_overview_card__WEBPACK_IMPORTED_MODULE_6__["OverviewCard"], _extends({}, app, {
    onClick: () => {
      application.navigateToApp(app.id);
    }
  })))))));
}
function renderApp({
  application,
  chrome
}, overviewApps, element) {
  react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["I18nProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ManagementOverviewWrapper, {
    application: application,
    overviewApps: overviewApps
  })), element);
  return () => {
    chrome.docTitle.reset();
    react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.unmountComponentAtNode(element);
  };
}

/***/ }),

/***/ "./public/components/overview_card/index.ts":
/*!**************************************************!*\
  !*** ./public/components/overview_card/index.ts ***!
  \**************************************************/
/*! exports provided: OverviewCard, OverviewCardProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overview_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview_card */ "./public/components/overview_card/overview_card.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverviewCard", function() { return _overview_card__WEBPACK_IMPORTED_MODULE_0__["OverviewCard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverviewCardProps", function() { return _overview_card__WEBPACK_IMPORTED_MODULE_0__["OverviewCardProps"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./public/components/overview_card/overview_card.tsx":
/*!***********************************************************!*\
  !*** ./public/components/overview_card/overview_card.tsx ***!
  \***********************************************************/
/*! exports provided: OverviewCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewCard", function() { return OverviewCard; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



function OverviewCard(props) {
  const {
    id,
    title,
    description,
    onClick
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCard"], {
    layout: "horizontal",
    titleSize: "xs",
    title: title,
    description: description,
    onClick: onClick,
    "data-test-subj": `link-${id.toLowerCase()}`,
    titleElement: "h3"
  });
}

/***/ })

}]);
//# sourceMappingURL=managementOverview.chunk.0.js.map