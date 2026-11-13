(window["visTypeVega_bundle_jsonpfunction"] = window["visTypeVega_bundle_jsonpfunction"] || []).push([[4],{

/***/ "./public/vega_view/vega_view.js":
/*!***************************************!*\
  !*** ./public/vega_view/vega_view.js ***!
  \***************************************/
/*! exports provided: VegaView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VegaView", function() { return VegaView; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vis_augmenter_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../vis_augmenter/public */ "plugin/visAugmenter/public");
/* harmony import */ var _vis_augmenter_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_vega__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/vega */ "./public/lib/vega.js");
/* harmony import */ var _vega_base_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vega_base_view */ "./public/vega_view/vega_base_view.js");
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





class VegaView extends _vega_base_view__WEBPACK_IMPORTED_MODULE_3__["VegaBaseView"] {
  async _initViewCustomizations() {
    var _this$_parser$visible;
    // In some cases, Vega may be initialized twice... TBD
    if (!this._$container) return;
    const view = new _lib_vega__WEBPACK_IMPORTED_MODULE_2__["vega"].View(_lib_vega__WEBPACK_IMPORTED_MODULE_2__["vega"].parse(this._parser.spec, null, this._vegaViewOptions), this._vegaViewConfig);
    view.warn = this.onWarn.bind(this);
    view.error = this.onError.bind(this);
    if (this._parser.useResize) this.updateVegaSize(view);
    const showPointInTimeEvents = ((_this$_parser$visible = this._parser.visibleVisLayers) === null || _this$_parser$visible === void 0 ? void 0 : _this$_parser$visible.get(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_1__["VisLayerTypes"].PointInTimeEvents)) === true;
    if (showPointInTimeEvents) {
      this.addPointInTimeEventPadding(view);
      const inFlyout = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this, '_parser.visAugmenterConfig.inFlyout', false);
      const flyoutContext = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this, '_parser.visAugmenterConfig.flyoutContext', _vis_augmenter_public__WEBPACK_IMPORTED_MODULE_1__["VisFlyoutContext"].BASE_VIS);
      const leftValueAxisPadding = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this, '_parser.visAugmenterConfig.leftValueAxisPadding', false);
      const rightValueAxisPadding = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this, '_parser.visAugmenterConfig.rightValueAxisPadding', false);
      const yAxisConfig = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this, '_parser.vlspec.config.axisY', {});

      // Autosizing is needed here since autosize won't be set correctly when there is PointInTimeEventLayers.
      // This is because these layers cause the spec to use `vconcat` under the hood to stack the base chart
      // with the event chart. Autosize doesn't work at the vega-lite level, so we set here at the vega level.
      // Details here: https://github.com/opensearch-project/OpenSearch-Dashboards/issues/3485#issuecomment-1507442348
      view.autosize({
        type: 'fit',
        contains: 'padding'
      });
      if (inFlyout) {
        const yAxisPadding = Object(_vis_augmenter_public__WEBPACK_IMPORTED_MODULE_1__["calculateYAxisPadding"])(yAxisConfig);
        view.padding({
          ...view.padding(),
          // If we are displaying an event chart (no vis data), then we need to offset the chart
          // to align the data / events. We do this by checking if padding is needed on the left
          // and/or right, and adding padding based on the y axis config.
          left: leftValueAxisPadding && (flyoutContext === _vis_augmenter_public__WEBPACK_IMPORTED_MODULE_1__["VisFlyoutContext"].EVENT_VIS || flyoutContext === _vis_augmenter_public__WEBPACK_IMPORTED_MODULE_1__["VisFlyoutContext"].TIMELINE_VIS) ? yAxisPadding : 0,
          right: rightValueAxisPadding && flyoutContext === _vis_augmenter_public__WEBPACK_IMPORTED_MODULE_1__["VisFlyoutContext"].EVENT_VIS ? yAxisPadding : 0
        });
      }
    }
    view.initialize(this._$container.get(0), this._$controls.get(0));
    if (this._parser.useHover) view.hover();
    await this.setView(view);
    this.setDebugValues(view, this._parser.spec, this._parser.vlspec);
  }
}

/***/ })

}]);
//# sourceMappingURL=visTypeVega.chunk.4.js.map