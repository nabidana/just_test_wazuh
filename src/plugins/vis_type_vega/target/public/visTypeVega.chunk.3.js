(window["visTypeVega_bundle_jsonpfunction"] = window["visTypeVega_bundle_jsonpfunction"] || []).push([[3],{

/***/ "./public/vega_view/vega_map_layer.js":
/*!********************************************!*\
  !*** ./public/vega_view/vega_map_layer.js ***!
  \********************************************/
/*! exports provided: VegaMapLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VegaMapLayer", function() { return VegaMapLayer; });
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../maps_legacy/public */ "plugin/mapsLegacy/public");
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_0__);
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


class VegaMapLayer extends _maps_legacy_public__WEBPACK_IMPORTED_MODULE_0__["OpenSearchDashboardsMapLayer"] {
  constructor(spec, options, leaflet) {
    super();

    // Used by super.getAttributions()
    this._attribution = options.attribution;
    delete options.attribution;
    this._leafletLayer = leaflet.vega(spec, options);
  }
  getVegaView() {
    return this._leafletLayer._view;
  }
  getVegaSpec() {
    return this._leafletLayer._spec;
  }
}

/***/ }),

/***/ "./public/vega_view/vega_map_view.js":
/*!*******************************************!*\
  !*** ./public/vega_view/vega_map_view.js ***!
  \*******************************************/
/*! exports provided: VegaMapView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VegaMapView", function() { return VegaMapView; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_vega__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/vega */ "./public/lib/vega.js");
/* harmony import */ var _vega_base_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vega_base_view */ "./public/vega_view/vega_base_view.js");
/* harmony import */ var _vega_map_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vega_map_layer */ "./public/vega_view/vega_map_layer.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./public/services.ts");
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../maps_legacy/public */ "plugin/mapsLegacy/public");
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_5__);
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







class VegaMapView extends _vega_base_view__WEBPACK_IMPORTED_MODULE_2__["VegaBaseView"] {
  constructor(opts) {
    super(opts);
  }
  async _initViewCustomizations() {
    const mapConfig = this._parser.mapConfig;
    let baseMapOpts;
    let limitMinZ = 0;
    let limitMaxZ = 25;
    if (mapConfig.mapStyle !== false) {
      const tmsServices = await this._serviceSettings.getTMSServices();
      // In some cases, Vega may be initialized twice, e.g. after awaiting...
      if (!this._$container) return;
      const emsTileLayerId = Object(_services__WEBPACK_IMPORTED_MODULE_4__["getEmsTileLayerId"])();
      const mapStyle = mapConfig.mapStyle === 'default' ? emsTileLayerId.bright : mapConfig.mapStyle;
      const isDarkMode = Object(_services__WEBPACK_IMPORTED_MODULE_4__["getUISettings"])().get('theme:darkMode');
      baseMapOpts = tmsServices.find(s => s.id === mapStyle);
      baseMapOpts = {
        ...baseMapOpts,
        ...(await this._serviceSettings.getAttributesForTMSLayer(baseMapOpts, true, isDarkMode)),
        showRegionDeniedWarning: Object(_services__WEBPACK_IMPORTED_MODULE_4__["getShowRegionDeniedWarning"])()
      };
      if (!baseMapOpts) {
        this.onWarn(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVega.mapView.mapStyleNotFoundWarningMessage', {
          defaultMessage: '{mapStyleParam} was not found',
          values: {
            mapStyleParam: `"mapStyle": ${JSON.stringify(mapStyle)}`
          }
        }));
      } else {
        limitMinZ = baseMapOpts.minZoom;
        limitMaxZ = baseMapOpts.maxZoom;
      }
    }
    const validate = (name, value, dflt, min, max) => {
      if (value === undefined) {
        value = dflt;
      } else if (value < min) {
        this.onWarn(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVega.mapView.resettingPropertyToMinValueWarningMessage', {
          defaultMessage: 'Resetting {name} to {min}',
          values: {
            name: `"${name}"`,
            min
          }
        }));
        value = min;
      } else if (value > max) {
        this.onWarn(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVega.mapView.resettingPropertyToMaxValueWarningMessage', {
          defaultMessage: 'Resetting {name} to {max}',
          values: {
            name: `"${name}"`,
            max
          }
        }));
        value = max;
      }
      return value;
    };
    let minZoom = validate('minZoom', mapConfig.minZoom, limitMinZ, limitMinZ, limitMaxZ);
    let maxZoom = validate('maxZoom', mapConfig.maxZoom, limitMaxZ, limitMinZ, limitMaxZ);
    if (minZoom > maxZoom) {
      this.onWarn(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('visTypeVega.mapView.minZoomAndMaxZoomHaveBeenSwappedWarningMessage', {
        defaultMessage: '{minZoomPropertyName} and {maxZoomPropertyName} have been swapped',
        values: {
          minZoomPropertyName: '"minZoom"',
          maxZoomPropertyName: '"maxZoom"'
        }
      }));
      [minZoom, maxZoom] = [maxZoom, minZoom];
    }
    const zoom = validate('zoom', mapConfig.zoom, 2, minZoom, maxZoom);

    // let maxBounds = null;
    // if (mapConfig.maxBounds) {
    //   const b = mapConfig.maxBounds;
    // eslint-disable-next-line no-undef
    //   maxBounds = L.latLngBounds(L.latLng(b[1], b[0]), L.latLng(b[3], b[2]));
    // }

    const modules = await Object(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_5__["lazyLoadMapsLegacyModules"])();
    this._opensearchDashboardsMap = new modules.OpenSearchDashboardsMap(this._$container.get(0), {
      zoom,
      minZoom,
      maxZoom,
      center: [mapConfig.latitude, mapConfig.longitude],
      zoomControl: mapConfig.zoomControl,
      scrollWheelZoom: mapConfig.scrollWheelZoom
    });
    if (baseMapOpts) {
      this._opensearchDashboardsMap.setBaseLayer({
        baseLayerType: 'tms',
        options: baseMapOpts
      });
    }
    const vegaMapLayer = new _vega_map_layer__WEBPACK_IMPORTED_MODULE_3__["VegaMapLayer"](this._parser.spec, {
      vega: _lib_vega__WEBPACK_IMPORTED_MODULE_1__["vega"],
      bindingsContainer: this._$controls.get(0),
      delayRepaint: mapConfig.delayRepaint,
      viewConfig: this._vegaViewConfig,
      parseConfig: null,
      parseOptions: this._vegaViewOptions,
      onWarning: this.onWarn.bind(this),
      onError: this.onError.bind(this)
    }, modules.L);
    this._opensearchDashboardsMap.addLayer(vegaMapLayer);
    this._addDestroyHandler(() => {
      this._opensearchDashboardsMap.removeLayer(vegaMapLayer);
      if (baseMapOpts) {
        this._opensearchDashboardsMap.setBaseLayer(null);
      }
      this._opensearchDashboardsMap.destroy();
    });
    const vegaView = vegaMapLayer.getVegaView();
    await this.setView(vegaView);
    this.setDebugValues(vegaView, this._parser.spec, this._parser.vlspec);
  }
}

/***/ })

}]);
//# sourceMappingURL=visTypeVega.chunk.3.js.map