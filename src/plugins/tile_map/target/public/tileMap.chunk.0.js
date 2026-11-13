(window["tileMap_bundle_jsonpfunction"] = window["tileMap_bundle_jsonpfunction"] || []).push([[0],{

/***/ "./public/geohash_layer.js":
/*!*********************************!*\
  !*** ./public/geohash_layer.js ***!
  \*********************************/
/*! exports provided: GeohashLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeohashLayer", function() { return GeohashLayer; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../maps_legacy/public */ "plugin/mapsLegacy/public");
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _markers_heatmap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markers/heatmap */ "./public/markers/heatmap.js");
/* harmony import */ var _markers_scaled_circles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markers/scaled_circles */ "./public/markers/scaled_circles.js");
/* harmony import */ var _markers_shaded_circles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markers/shaded_circles */ "./public/markers/shaded_circles.js");
/* harmony import */ var _markers_geohash_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./markers/geohash_grid */ "./public/markers/geohash_grid.js");
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








class GeohashLayer extends _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__["OpenSearchDashboardsMapLayer"] {
  constructor(featureCollection, featureCollectionMetaData, options, zoom, opensearchDashboardsMap, leaflet) {
    super();
    this._featureCollection = featureCollection;
    this._featureCollectionMetaData = featureCollectionMetaData;
    this._geohashOptions = options;
    this._zoom = zoom;
    this._opensearchDashboardsMap = opensearchDashboardsMap;
    this._leaflet = leaflet;
    const geojson = this._leaflet.geoJson(this._featureCollection);
    this._bounds = geojson.getBounds();
    this._createGeohashMarkers();
    this._lastBounds = null;
  }
  _createGeohashMarkers() {
    const markerOptions = {
      isFilteredByCollar: this._geohashOptions.isFilteredByCollar,
      valueFormatter: this._geohashOptions.valueFormatter,
      tooltipFormatter: this._geohashOptions.tooltipFormatter,
      label: this._geohashOptions.label,
      colorRamp: this._geohashOptions.colorRamp
    };
    switch (this._geohashOptions.mapType) {
      case _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__["MapTypes"].ScaledCircleMarkers:
        this._geohashMarkers = new _markers_scaled_circles__WEBPACK_IMPORTED_MODULE_4__["ScaledCirclesMarkers"](this._featureCollection, this._featureCollectionMetaData, markerOptions, this._zoom, this._opensearchDashboardsMap, this._leaflet);
        break;
      case _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__["MapTypes"].ShadedCircleMarkers:
        this._geohashMarkers = new _markers_shaded_circles__WEBPACK_IMPORTED_MODULE_5__["ShadedCirclesMarkers"](this._featureCollection, this._featureCollectionMetaData, markerOptions, this._zoom, this._opensearchDashboardsMap, this._leaflet);
        break;
      case _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__["MapTypes"].ShadedGeohashGrid:
        this._geohashMarkers = new _markers_geohash_grid__WEBPACK_IMPORTED_MODULE_6__["GeohashGridMarkers"](this._featureCollection, this._featureCollectionMetaData, markerOptions, this._zoom, this._opensearchDashboardsMap, this._leaflet);
        break;
      case _maps_legacy_public__WEBPACK_IMPORTED_MODULE_2__["MapTypes"].Heatmap:
        let radius = 15;
        if (this._featureCollectionMetaData.geohashGridDimensionsAtEquator) {
          const minGridLength = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["min"])(this._featureCollectionMetaData.geohashGridDimensionsAtEquator);
          const metersPerPixel = this._opensearchDashboardsMap.getMetersPerPixel();
          radius = minGridLength / metersPerPixel / 2;
        }
        radius = radius * parseFloat(this._geohashOptions.heatmap.heatClusterSize);
        this._geohashMarkers = new _markers_heatmap__WEBPACK_IMPORTED_MODULE_3__["HeatmapMarkers"](this._featureCollection, {
          radius: radius,
          blur: radius,
          maxZoom: this._opensearchDashboardsMap.getZoomLevel(),
          minOpacity: 0.1,
          tooltipFormatter: this._geohashOptions.tooltipFormatter
        }, this._zoom, this._featureCollectionMetaData.max, this._leaflet);
        break;
      default:
        throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('tileMap.geohashLayer.mapTitle', {
          defaultMessage: '{mapType} mapType not recognized',
          values: {
            mapType: this._geohashOptions.mapType
          }
        }));
    }
    this._geohashMarkers.on('showTooltip', event => this.emit('showTooltip', event));
    this._geohashMarkers.on('hideTooltip', event => this.emit('hideTooltip', event));
    this._leafletLayer = this._geohashMarkers.getLeafletLayer();
  }
  appendLegendContents(jqueryDiv) {
    return this._geohashMarkers.appendLegendContents(jqueryDiv);
  }
  movePointer(...args) {
    this._geohashMarkers.movePointer(...args);
  }
  async getBounds() {
    if (this._geohashOptions.fetchBounds) {
      const geoHashBounds = await this._geohashOptions.fetchBounds();
      if (geoHashBounds) {
        const northEast = this._leaflet.latLng(geoHashBounds.top_left.lat, geoHashBounds.bottom_right.lon);
        const southWest = this._leaflet.latLng(geoHashBounds.bottom_right.lat, geoHashBounds.top_left.lon);
        return this._leaflet.latLngBounds(southWest, northEast);
      }
    }
    return this._bounds;
  }
  updateExtent() {
    // Client-side filtering is only enabled when server-side filter is not used
    if (!this._geohashOptions.isFilteredByCollar) {
      const bounds = this._opensearchDashboardsMap.getLeafletBounds();
      if (!this._lastBounds || !this._lastBounds.equals(bounds)) {
        //this removal is required to trigger the bounds filter again
        this._opensearchDashboardsMap.removeLayer(this);
        this._createGeohashMarkers();
        this._opensearchDashboardsMap.addLayer(this);
      }
      this._lastBounds = bounds;
    }
  }
  isReusable(options) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(this._geohashOptions, options)) {
      return true;
    }

    //check if any impacts leaflet styler function
    if (this._geohashOptions.colorRamp !== options.colorRamp) {
      return false;
    } else if (this._geohashOptions.mapType !== options.mapType) {
      return false;
    } else if (this._geohashOptions.mapType === 'Heatmap' && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(this._geohashOptions.heatmap, options)) {
      return false;
    } else {
      return true;
    }
  }
}

/***/ }),

/***/ "./public/markers/geohash_grid.js":
/*!****************************************!*\
  !*** ./public/markers/geohash_grid.js ***!
  \****************************************/
/*! exports provided: GeohashGridMarkers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeohashGridMarkers", function() { return GeohashGridMarkers; });
/* harmony import */ var _scaled_circles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scaled_circles */ "./public/markers/scaled_circles.js");
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


class GeohashGridMarkers extends _scaled_circles__WEBPACK_IMPORTED_MODULE_0__["ScaledCirclesMarkers"] {
  getMarkerFunction() {
    return feature => {
      const geohashRect = feature.properties.geohash_meta.rectangle;
      // get bounds from northEast[3] and southWest[1]
      // corners in geohash rectangle
      const corners = [[geohashRect[3][0], geohashRect[3][1]], [geohashRect[1][0], geohashRect[1][1]]];
      return this._leaflet.rectangle(corners);
    };
  }
}

/***/ }),

/***/ "./public/markers/heatmap.js":
/*!***********************************!*\
  !*** ./public/markers/heatmap.js ***!
  \***********************************/
/*! exports provided: HeatmapMarkers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatmapMarkers", function() { return HeatmapMarkers; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! events */ "../../../node_modules/node-libs-browser/node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_2__);
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
 * Map overlay: canvas layer with leaflet.heat plugin
 *
 * @param map {Leaflet Object}
 * @param geoJson {geoJson Object}
 * @param params {Object}
 */
class HeatmapMarkers extends events__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"] {
  constructor(featureCollection, options, zoom, max, leaflet) {
    super();
    this._geojsonFeatureCollection = featureCollection;
    const points = dataToHeatArray(featureCollection, max);
    this._leafletLayer = new leaflet.HeatLayer(points, options);
    this._tooltipFormatter = options.tooltipFormatter;
    this._zoom = zoom;
    this._disableTooltips = false;
    this._getLatLng = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.memoize(function (feature) {
      return leaflet.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
    }, function (feature) {
      // turn coords into a string for the memoize cache
      return [feature.geometry.coordinates[1], feature.geometry.coordinates[0]].join(',');
    });
    this._addTooltips();
  }
  getBounds() {
    return this._leafletLayer.getBounds();
  }
  getLeafletLayer() {
    return this._leafletLayer;
  }
  appendLegendContents() {}
  movePointer(type, event) {
    if (type === 'mousemove') {
      this._debounceMoveMoveLocation(event);
    } else if (type === 'mouseout') {
      this.emit('hideTooltip');
    } else if (type === 'mousedown') {
      this._disableTooltips = true;
      this.emit('hideTooltip');
    } else if (type === 'mouseup') {
      this._disableTooltips = false;
    }
  }
  _addTooltips() {
    const mouseMoveLocation = e => {
      if (!this._geojsonFeatureCollection.features.length || this._disableTooltips) {
        this.emit('hideTooltip');
        return;
      }
      const feature = this._nearestFeature(e.latlng);
      if (this._tooltipProximity(e.latlng, feature)) {
        const content = this._tooltipFormatter(feature);
        if (!content) {
          return;
        }
        this.emit('showTooltip', {
          content: content,
          position: e.latlng
        });
      } else {
        this.emit('hideTooltip');
      }
    };
    this._debounceMoveMoveLocation = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(mouseMoveLocation.bind(this), 15, {
      leading: true,
      trailing: false
    });
  }

  /**
   * Finds nearest feature in mapData to event latlng
   *
   * @method _nearestFeature
   * @param latLng {Leaflet latLng}
   * @return nearestPoint {Leaflet latLng}
   */
  _nearestFeature(latLng) {
    const self = this;
    let nearest;
    if (latLng.lng < -180 || latLng.lng > 180) {
      return;
    }
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(this._geojsonFeatureCollection.features, function (distance, feature) {
      const featureLatLng = self._getLatLng(feature);
      const dist = latLng.distanceTo(featureLatLng);
      if (dist < distance) {
        nearest = feature;
        return dist;
      }
      return distance;
    }, Infinity);
    return nearest;
  }

  /**
   * display tooltip if feature is close enough to event latlng
   *
   * @method _tooltipProximity
   * @param latlng {Leaflet latLng  Object}
   * @param feature {geoJson Object}
   * @return {Boolean}
   */
  _tooltipProximity(latlng, feature) {
    if (!feature) return;
    let showTip = false;
    const featureLatLng = this._getLatLng(feature);

    // zoomScale takes map zoom and returns proximity value for tooltip display
    // domain (input values) is map zoom (min 1 and max 18)
    // range (output values) is distance in meters
    // used to compare proximity of event latlng to feature latlng
    const zoomScale = d3__WEBPACK_IMPORTED_MODULE_1___default.a.scale.linear().domain([1, 4, 7, 10, 13, 16, 18]).range([1000000, 300000, 100000, 15000, 2000, 150, 50]);
    const proximity = zoomScale(this._zoom);
    const distance = latlng.distanceTo(featureLatLng);

    // maxLngDif is max difference in longitudes
    // to prevent feature tooltip from appearing 360°
    // away from event latlng
    const maxLngDif = 40;
    const lngDif = Math.abs(latlng.lng - featureLatLng.lng);
    if (distance < proximity && lngDif < maxLngDif) {
      showTip = true;
    }
    d3__WEBPACK_IMPORTED_MODULE_1___default.a.scale.pow().exponent(0.2).domain([1, 18]).range([1500000, 50]);
    return showTip;
  }
}

/**
 * returns normalized data for heat map intensity
 *
 * @method dataToHeatArray
 * @param featureCollection {Array}
 * @return {Array}
 */
function dataToHeatArray(featureCollection, max) {
  return featureCollection.features.map(feature => {
    const lat = feature.geometry.coordinates[1];
    const lng = feature.geometry.coordinates[0];
    // show bucket value normalized to max value
    const heatIntensity = feature.properties.value / max;
    return [lat, lng, heatIntensity];
  });
}

/***/ }),

/***/ "./public/markers/scaled_circles.js":
/*!******************************************!*\
  !*** ./public/markers/scaled_circles.js ***!
  \******************************************/
/*! exports provided: ScaledCirclesMarkers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaledCirclesMarkers", function() { return ScaledCirclesMarkers; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! events */ "../../../node_modules/node-libs-browser/node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../maps_legacy/public */ "plugin/mapsLegacy/public");
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_5__);
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







class ScaledCirclesMarkers extends events__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"] {
  constructor(featureCollection, featureCollectionMetaData, options, targetZoom, opensearchDasbhoardsMap, leaflet) {
    super();
    this._featureCollection = featureCollection;
    this._featureCollectionMetaData = featureCollectionMetaData;
    this._zoom = targetZoom;
    this._valueFormatter = options.valueFormatter || (x => {
      x;
    });
    this._tooltipFormatter = options.tooltipFormatter || (x => {
      x;
    });
    this._label = options.label;
    this._colorRamp = options.colorRamp;
    this._legendColors = null;
    this._legendQuantizer = null;
    this._leaflet = leaflet;
    this._popups = [];
    const layerOptions = {
      pointToLayer: this.getMarkerFunction(),
      style: this.getStyleFunction(),
      onEachFeature: (feature, layer) => {
        this._bindPopup(feature, layer);
      }
    };
    // Filter leafletlayer on client when results are not filtered on the server
    if (!options.isFilteredByCollar) {
      layerOptions.filter = feature => {
        const bucketRectBounds = feature.properties.geohash_meta.rectangle;
        return opensearchDasbhoardsMap.isInside(bucketRectBounds);
      };
    }
    this._leafletLayer = this._leaflet.geoJson(null, layerOptions);
    this._leafletLayer.addData(this._featureCollection);
  }
  getLeafletLayer() {
    return this._leafletLayer;
  }
  getStyleFunction() {
    const min = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(this._featureCollectionMetaData, 'min', 0);
    const max = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(this._featureCollectionMetaData, 'max', 1);
    const quantizeDomain = min !== max ? [min, max] : d3__WEBPACK_IMPORTED_MODULE_1___default.a.scale.quantize().domain();
    this._legendColors = this.getLegendColors();
    this._legendQuantizer = d3__WEBPACK_IMPORTED_MODULE_1___default.a.scale.quantize().domain(quantizeDomain).range(this._legendColors);
    return makeStyleFunction(this._legendColors, quantizeDomain);
  }
  movePointer() {}
  getLabel() {
    if (this._popups.length) {
      return this._label;
    }
    return '';
  }
  appendLegendContents(jqueryDiv) {
    if (!this._legendColors || !this._legendQuantizer) {
      return;
    }
    const titleText = this.getLabel();
    const $title = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<div>').addClass('visMapLegend__title').text(titleText);
    jqueryDiv.append($title);
    this._legendColors.forEach(color => {
      const labelText = this._legendQuantizer.invertExtent(color).map(this._valueFormatter).join(' – ');
      const label = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<div>');
      const icon = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<i>').css({
        background: color,
        'border-color': makeColorDarker(color)
      });
      const text = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<span>').text(labelText);
      label.append(icon);
      label.append(text);
      jqueryDiv.append(label);
    });
  }

  /**
   * Binds popup and events to each feature on map
   *
   * @method bindPopup
   * @param feature {Object}
   * @param layer {Object}
   * return {undefined}
   */
  _bindPopup(feature, layer) {
    const popup = layer.on({
      mouseover: e => {
        const layer = e.target;
        // bring layer to front if not older browser
        if (!this._leaflet.Browser.ie && !this._leaflet.Browser.opera) {
          layer.bringToFront();
        }
        this._showTooltip(feature);
      },
      mouseout: () => {
        this.emit('hideTooltip');
      }
    });
    this._popups.push(popup);
  }

  /**
   * Checks if event latlng is within bounds of mapData
   * features and shows tooltip for that feature
   *
   * @method _showTooltip
   * @param feature {LeafletFeature}
   * @return undefined
   */
  _showTooltip(feature) {
    const content = this._tooltipFormatter(feature);
    if (!content) {
      return;
    }
    const latLng = this._leaflet.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
    this.emit('showTooltip', {
      content: content,
      position: latLng
    });
  }
  getMarkerFunction() {
    const scaleFactor = 0.6;
    return (feature, latlng) => {
      const value = feature.properties.value;
      const scaledRadius = this._radiusScale(value) * scaleFactor;
      return this._leaflet.circleMarker(latlng).setRadius(scaledRadius);
    };
  }

  /**
   * radiusScale returns a number for scaled circle markers
   * for relative sizing of markers
   *
   * @method _radiusScale
   * @param value {Number}
   * @return {Number}
   */
  _radiusScale(value) {
    //magic numbers
    const precisionBiasBase = 5;
    const precisionBiasNumerator = 200;
    const precision = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.max(this._featureCollection.features.map(feature => {
      return String(feature.properties.geohash).length;
    }));
    const pct = Math.abs(value) / Math.abs(this._featureCollectionMetaData.max);
    const zoomRadius = 0.5 * Math.pow(2, this._zoom);
    const precisionScale = precisionBiasNumerator / Math.pow(precisionBiasBase, precision);

    // square root value percentage
    return Math.pow(pct, 0.5) * zoomRadius * precisionScale;
  }
  getBounds() {
    return this._leafletLayer.getBounds();
  }
  getLegendColors() {
    const colorRamp = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(_charts_public__WEBPACK_IMPORTED_MODULE_5__["truncatedColorMaps"][this._colorRamp], 'value');
    return _maps_legacy_public__WEBPACK_IMPORTED_MODULE_4__["colorUtil"].getLegendColors(colorRamp);
  }
}
function makeColorDarker(color) {
  const amount = 1.3; //magic number, carry over from earlier
  return d3__WEBPACK_IMPORTED_MODULE_1___default.a.hcl(color).darker(amount).toString();
}
function makeStyleFunction(legendColors, quantizeDomain) {
  const legendQuantizer = d3__WEBPACK_IMPORTED_MODULE_1___default.a.scale.quantize().domain(quantizeDomain).range(legendColors);
  return feature => {
    const value = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(feature, 'properties.value');
    const color = legendQuantizer(value);
    return {
      fillColor: color,
      color: makeColorDarker(color),
      weight: 1.5,
      opacity: 1,
      fillOpacity: 0.75
    };
  };
}

/***/ }),

/***/ "./public/markers/shaded_circles.js":
/*!******************************************!*\
  !*** ./public/markers/shaded_circles.js ***!
  \******************************************/
/*! exports provided: ShadedCirclesMarkers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadedCirclesMarkers", function() { return ShadedCirclesMarkers; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scaled_circles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scaled_circles */ "./public/markers/scaled_circles.js");
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



class ShadedCirclesMarkers extends _scaled_circles__WEBPACK_IMPORTED_MODULE_1__["ScaledCirclesMarkers"] {
  getMarkerFunction() {
    // multiplier to reduce size of all circles
    const scaleFactor = 0.8;
    return (feature, latlng) => {
      const radius = this._geohashMinDistance(feature) * scaleFactor;
      return this._leaflet.circle(latlng, radius);
    };
  }

  /**
   * _geohashMinDistance returns a min distance in meters for sizing
   * circle markers to fit within geohash grid rectangle
   *
   * @method _geohashMinDistance
   * @param feature {Object}
   * @return {Number}
   */
  _geohashMinDistance(feature) {
    const centerPoint = feature.properties.geohash_meta.center;
    const geohashRect = feature.properties.geohash_meta.rectangle;

    // centerPoint is an array of [lat, lng]
    // geohashRect is the 4 corners of the geoHash rectangle
    //   an array that starts at the southwest corner and proceeds
    //   clockwise, each value being an array of [lat, lng]

    // center lat and southeast lng
    const east = this._leaflet.latLng([centerPoint[0], geohashRect[2][1]]);
    // southwest lat and center lng
    const north = this._leaflet.latLng([geohashRect[3][0], centerPoint[1]]);

    // get latLng of geohash center point
    const center = this._leaflet.latLng([centerPoint[0], centerPoint[1]]);

    // get smallest radius at center of geohash grid rectangle
    const eastRadius = Math.floor(center.distanceTo(east));
    const northRadius = Math.floor(center.distanceTo(north));
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.min([eastRadius, northRadius]);
  }
}

/***/ })

}]);
//# sourceMappingURL=tileMap.chunk.0.js.map