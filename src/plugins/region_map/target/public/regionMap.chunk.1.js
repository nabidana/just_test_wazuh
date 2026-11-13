(window["regionMap_bundle_jsonpfunction"] = window["regionMap_bundle_jsonpfunction"] || []).push([[1],{

/***/ "./public/choropleth_layer.js":
/*!************************************!*\
  !*** ./public/choropleth_layer.js ***!
  \************************************/
/*! exports provided: ChoroplethLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoroplethLayer", function() { return ChoroplethLayer; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "../../../node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/ui-shared-deps/theme */ "@osd/ui-shared-deps/theme");
/* harmony import */ var _osd_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! topojson-client */ "../../../node_modules/topojson-client/dist/topojson-client.js");
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(topojson_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./opensearch_dashboards_services */ "./public/opensearch_dashboards_services.ts");
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../maps_legacy/public */ "plugin/mapsLegacy/public");
/* harmony import */ var _maps_legacy_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_maps_legacy_public__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../charts/public */ "plugin/charts/public");
/* harmony import */ var _charts_public__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_charts_public__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services */ "./public/services.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common */ "./common/index.ts");
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












const EMPTY_STYLE = {
  weight: 1,
  opacity: 0.6,
  color: _osd_ui_shared_deps_theme__WEBPACK_IMPORTED_MODULE_4__["euiThemeVars"].euiColorMediumShade,
  fillOpacity: 0
};
class ChoroplethLayer extends _maps_legacy_public__WEBPACK_IMPORTED_MODULE_7__["OpenSearchDashboardsMapLayer"] {
  static _doInnerJoin(sortedMetrics, sortedGeojsonFeatures, joinField) {
    let j = 0;
    for (let i = 0; i < sortedGeojsonFeatures.length; i++) {
      const property = sortedGeojsonFeatures[i].properties[joinField];
      sortedGeojsonFeatures[i].__osdJoinedMetric = null;
      const position = sortedMetrics.length ? compareLexicographically(property, sortedMetrics[j].term) : -1;
      if (position === -1) {
        //just need to cycle on
      } else if (position === 0) {
        sortedGeojsonFeatures[i].__osdJoinedMetric = sortedMetrics[j];
      } else if (position === 1) {
        //needs to catch up
        while (j < sortedMetrics.length) {
          const newTerm = sortedMetrics[j].term;
          const newPosition = compareLexicographically(newTerm, property);
          if (newPosition === -1) {
            //not far enough
          } else if (newPosition === 0) {
            sortedGeojsonFeatures[i].__osdJoinedMetric = sortedMetrics[j];
            break;
          } else if (newPosition === 1) {
            //too far!
            break;
          }
          if (j === sortedMetrics.length - 1) {
            //always keep a reference to the last metric
            break;
          } else {
            j++;
          }
        }
      }
    }
  }
  constructor(name, attribution, format, showAllShapes, meta, layerConfig, serviceSettings, leaflet, layerChosenByUser, http, uiSettings, dataSourceRefId) {
    super();
    this._serviceSettings = serviceSettings;
    this._metrics = null;
    this._joinField = null;
    this._colorRamp = _charts_public__WEBPACK_IMPORTED_MODULE_8__["truncatedColorMaps"][Object.keys(_charts_public__WEBPACK_IMPORTED_MODULE_8__["truncatedColorMaps"])[0]].value;
    this._lineWeight = 1;
    this._tooltipFormatter = () => '';
    this._attribution = attribution;
    this._boundsOfData = null;
    this._showAllShapes = showAllShapes;
    this._layerName = name;
    this._layerConfig = layerConfig;
    this._leaflet = leaflet;
    this._layerChosenByUser = layerChosenByUser;
    this._http = http;
    this._visParams = null;
    this._uiSettings = uiSettings;
    this._dataSourceRefId = dataSourceRefId;

    // eslint-disable-next-line no-undef
    this._leafletLayer = this._leaflet.geoJson(null, {
      onEachFeature: (feature, layer) => {
        layer.on('click', () => {
          this.emit('select', feature.properties[this._joinField]);
        });
        let location = null;
        layer.on({
          mouseover: () => {
            const tooltipContents = this._tooltipFormatter(feature);
            if (!location) {
              // eslint-disable-next-line no-undef
              const leafletGeojson = this._leaflet.geoJson(feature);
              location = leafletGeojson.getBounds().getCenter();
            }
            this.emit('showTooltip', {
              content: tooltipContents,
              position: location
            });
          },
          mouseout: () => {
            this.emit('hideTooltip');
          }
        });
      },
      style: this._makeEmptyStyleFunction()
    });
    this._loaded = false;
    this._error = false;
    this._isJoinValid = false;
    this._whenDataLoaded = new Promise(async resolve => {
      try {
        let data;
        if (_common__WEBPACK_IMPORTED_MODULE_10__["DEFAULT_MAP_CHOICE"] === this._layerChosenByUser) {
          data = await this._makeJsonAjaxCall();
        } else if (_common__WEBPACK_IMPORTED_MODULE_10__["CUSTOM_MAP_CHOICE"] === this._layerChosenByUser) {
          data = await this._fetchCustomLayerData();
        } else {
          return;
        }
        let featureCollection;
        let formatType;
        if (typeof format === 'string') {
          formatType = format;
        } else if (format && format.type) {
          formatType = format.type;
        } else {
          formatType = 'geojson';
        }
        if (formatType === 'geojson') {
          featureCollection = data;
        } else if (formatType === 'topojson') {
          const features = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(data, 'objects.' + meta.feature_collection_path);
          featureCollection = topojson_client__WEBPACK_IMPORTED_MODULE_5__["feature"](data, features); //conversion to geojson
        } else {
          //should never happen
          throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('regionMap.choroplethLayer.unrecognizedFormatErrorMessage', {
            defaultMessage: 'Unrecognized format {formatType}',
            values: {
              formatType
            }
          }));
        }
        this._sortedFeatures = featureCollection.features.slice();
        this._sortFeatures();
        if (showAllShapes) {
          this._leafletLayer.addData(featureCollection);
        } else {
          //we need to delay adding the data until we have performed the join and know which features
          //should be displayed
        }
        this._loaded = true;
        this._setStyle();
        resolve();
      } catch (e) {
        this._loaded = true;
        this._error = true;
        let errorMessage;
        if (e.status === 404) {
          errorMessage = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('regionMap.choroplethLayer.downloadingVectorData404ErrorMessage', {
            defaultMessage: "Server responding with '404' when attempting to fetch {name}. \
Make sure the file exists at that location.",
            values: {
              name: name
            }
          });
        } else {
          errorMessage = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('regionMap.choroplethLayer.downloadingVectorDataErrorMessage', {
            defaultMessage: 'The vector map {name} is not available. Please ensure the \
CORS configuration of the server permits requests from the OpenSearch Dashboards application on this host.',
            values: {
              name: name
            }
          });
        }
        Object(_opensearch_dashboards_services__WEBPACK_IMPORTED_MODULE_6__["getNotifications"])().toasts.addDanger({
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('regionMap.choroplethLayer.downloadingVectorDataErrorMessageTitle', {
            defaultMessage: 'Error downloading vector data'
          }),
          text: errorMessage
        });
        resolve();
      }
    });
  }

  //This method is stubbed in the tests to avoid network request during unit tests.
  async _makeJsonAjaxCall() {
    return this._serviceSettings.getJsonForRegionLayer(this._layerConfig);
  }
  async _fetchCustomLayerData() {
    // fetch data from index and transform it to feature collection
    try {
      const services = Object(_services__WEBPACK_IMPORTED_MODULE_9__["getServices"])(this._http);
      const indexSize = this._uiSettings.get(_common__WEBPACK_IMPORTED_MODULE_10__["CUSTOM_VECTOR_MAP_MAX_SIZE_SETTING"]);
      const result = await services.getIndexData(this._layerName, indexSize, this._dataSourceRefId);
      const finalResult = {
        type: 'FeatureCollection',
        features: []
      };
      for (let featureCount = 0; featureCount < result.resp.hits.hits.length; featureCount++) {
        finalResult.features.push({
          geometry: result.resp.hits.hits[featureCount]._source.location,
          properties: removeKeys(result.resp.hits.hits[featureCount]._source),
          type: 'Feature'
        });
      }
      return finalResult;
    } catch (e) {
      return false;
    }
  }
  _invalidateJoin() {
    this._isJoinValid = false;
  }
  _doInnerJoin() {
    ChoroplethLayer._doInnerJoin(this._metrics, this._sortedFeatures, this._joinField);
    this._isJoinValid = true;
  }
  _setStyle() {
    if (this._error || !this._loaded || !this._metrics || !this._joinField) {
      return;
    }
    if (!this._isJoinValid) {
      this._doInnerJoin();
      if (!this._showAllShapes) {
        const featureCollection = {
          type: 'FeatureCollection',
          features: this._sortedFeatures.filter(feature => feature.__osdJoinedMetric)
        };
        this._leafletLayer.addData(featureCollection);
      }
    }
    const styler = this._makeChoroplethStyler();
    this._leafletLayer.setStyle(styler.leafletStyleFunction);
    if (this._metrics && this._metrics.length > 0) {
      const {
        min,
        max
      } = getMinMax(this._metrics);
      this._legendColors = _maps_legacy_public__WEBPACK_IMPORTED_MODULE_7__["colorUtil"].getLegendColors(this._colorRamp);
      const quantizeDomain = min !== max ? [min, max] : d3__WEBPACK_IMPORTED_MODULE_2___default.a.scale.quantize().domain();
      this._legendQuantizer = d3__WEBPACK_IMPORTED_MODULE_2___default.a.scale.quantize().domain(quantizeDomain).range(this._legendColors);
    }
    this._boundsOfData = styler.getLeafletBounds();
    this.emit('styleChanged', {
      mismatches: styler.getMismatches()
    });
  }
  getUrl() {
    return this._layerName;
  }
  setTooltipFormatter(tooltipFormatter, fieldFormatter, fieldName, metricLabel) {
    this._tooltipFormatter = geojsonFeature => {
      if (!this._metrics) {
        return '';
      }
      const match = this._metrics.find(bucket => {
        return compareLexicographically(bucket.term, geojsonFeature.properties[this._joinField]) === 0;
      });
      return tooltipFormatter(match, fieldFormatter, fieldName, metricLabel);
    };
  }
  setJoinField(joinfield) {
    if (joinfield === this._joinField) {
      return;
    }
    this._joinField = joinfield;
    this._sortFeatures();
    this._setStyle();
  }
  cloneChoroplethLayerForNewData(name, attribution, format, showAllData, meta, layerConfig, serviceSettings, leaflet, layerChosenByUser, http, uiSettings, dataSourceRefId) {
    const clonedLayer = new ChoroplethLayer(name, attribution, format, showAllData, meta, layerConfig, serviceSettings, leaflet, layerChosenByUser, http, uiSettings, dataSourceRefId);
    clonedLayer.setJoinField(this._joinField);
    clonedLayer.setColorRamp(this._colorRamp);
    clonedLayer.setLineWeight(this._lineWeight);
    clonedLayer.setTooltipFormatter(this._tooltipFormatter);
    if (this._metrics) {
      clonedLayer.setMetrics(this._metrics, this._valueFormatter, this._metricTitle);
    }
    return clonedLayer;
  }
  _sortFeatures() {
    if (this._sortedFeatures && this._joinField) {
      this._sortedFeatures.sort((a, b) => {
        const termA = a.properties[this._joinField];
        const termB = b.properties[this._joinField];
        return compareLexicographically(termA, termB);
      });
      this._invalidateJoin();
    }
  }
  whenDataLoaded() {
    return this._whenDataLoaded;
  }
  setLayerChosenByUser(layerChosenByUser) {
    this._layerChosenByUser = layerChosenByUser;
  }
  setVisParams(visParams) {
    this._visParams = visParams;
  }
  setMetrics(metrics, fieldFormatter, metricTitle) {
    this._metrics = metrics.slice();
    this._valueFormatter = fieldFormatter;
    this._metricTitle = metricTitle;
    this._metrics.sort((a, b) => compareLexicographically(a.term, b.term));
    this._invalidateJoin();
    this._setStyle();
  }
  setColorRamp(colorRamp) {
    if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEqual(colorRamp, this._colorRamp)) {
      return;
    }
    this._colorRamp = colorRamp;
    this._setStyle();
  }
  setLineWeight(lineWeight) {
    if (this._lineWeight === lineWeight) {
      return;
    }
    this._lineWeight = lineWeight;
    this._setStyle();
  }
  canReuseInstance(name, showAllShapes) {
    return this._layerName === name && this._showAllShapes === showAllShapes;
  }
  canReuseInstanceForNewMetrics(name, showAllShapes, newMetrics) {
    if (this._layerName !== name) {
      return false;
    }
    if (showAllShapes) {
      return this._showAllShapes === showAllShapes;
    }
    if (!this._metrics) {
      return;
    }
    const currentKeys = Object.keys(this._metrics);
    const newKeys = Object.keys(newMetrics);
    return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEqual(currentKeys, newKeys);
  }
  getBounds() {
    const bounds = super.getBounds();
    return this._boundsOfData ? this._boundsOfData : bounds;
  }
  appendLegendContents(jqueryDiv) {
    if (!this._legendColors || !this._legendQuantizer) {
      return;
    }
    const titleText = this._metricTitle;
    const $title = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>').addClass('visMapLegend__title').text(titleText);
    jqueryDiv.append($title);
    this._legendColors.forEach(color => {
      const labelText = this._legendQuantizer.invertExtent(color).map(val => {
        return this._valueFormatter.convert(val);
      }).join(' – ');
      const label = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div>');
      const icon = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<i>').css({
        background: color,
        'border-color': makeColorDarker(color)
      });
      const text = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<span>').text(labelText);
      label.append(icon);
      label.append(text);
      jqueryDiv.append(label);
    });
  }
  _makeEmptyStyleFunction() {
    const emptyStyle = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.assign({}, EMPTY_STYLE, {
      weight: this._lineWeight
    });
    return () => {
      return emptyStyle;
    };
  }
  _makeChoroplethStyler() {
    const emptyStyle = this._makeEmptyStyleFunction();
    if (this._metrics.length === 0) {
      return {
        leafletStyleFunction: () => {
          return emptyStyle();
        },
        getMismatches: () => {
          return [];
        },
        getLeafletBounds: () => {
          return null;
        }
      };
    }
    const {
      min,
      max
    } = getMinMax(this._metrics);

    // eslint-disable-next-line no-undef
    const boundsOfAllFeatures = new this._leaflet.LatLngBounds();
    return {
      leafletStyleFunction: geojsonFeature => {
        const match = geojsonFeature.__osdJoinedMetric;
        if (!match) {
          return emptyStyle();
        }
        // eslint-disable-next-line no-undef
        const boundsOfFeature = this._leaflet.geoJson(geojsonFeature).getBounds();
        boundsOfAllFeatures.extend(boundsOfFeature);
        return {
          fillColor: getChoroplethColor(match.value, min, max, this._colorRamp),
          weight: this._lineWeight,
          opacity: 1,
          color: 'white',
          fillOpacity: 0.7
        };
      },
      /**
       * should not be called until getLeafletStyleFunction has been called
       * @return {Array}
       */
      getMismatches: () => {
        const mismatches = this._metrics.slice();
        this._sortedFeatures.forEach(feature => {
          const index = mismatches.indexOf(feature.__osdJoinedMetric);
          if (index >= 0) {
            mismatches.splice(index, 1);
          }
        });
        return mismatches.map(b => b.term);
      },
      getLeafletBounds: function () {
        return boundsOfAllFeatures.isValid() ? boundsOfAllFeatures : null;
      }
    };
  }
}

//lexicographic compare
function compareLexicographically(termA, termB) {
  termA = typeof termA === 'string' ? termA : termA.toString();
  termB = typeof termB === 'string' ? termB : termB.toString();
  return termA.localeCompare(termB);
}
function makeColorDarker(color) {
  const amount = 1.3; //magic number, carry over from earlier
  return d3__WEBPACK_IMPORTED_MODULE_2___default.a.hcl(color).darker(amount).toString();
}
function getMinMax(data) {
  let min = data[0].value;
  let max = data[0].value;
  for (let i = 1; i < data.length; i += 1) {
    min = Math.min(data[i].value, min);
    max = Math.max(data[i].value, max);
  }
  return {
    min,
    max
  };
}
function getChoroplethColor(value, min, max, colorRamp) {
  if (min === max) {
    return _maps_legacy_public__WEBPACK_IMPORTED_MODULE_7__["colorUtil"].getColor(colorRamp, colorRamp.length - 1);
  }
  const fraction = (value - min) / (max - min);
  const index = Math.round(colorRamp.length * fraction) - 1;
  const i = Math.max(Math.min(colorRamp.length - 1, index), 0);
  return _maps_legacy_public__WEBPACK_IMPORTED_MODULE_7__["colorUtil"].getColor(colorRamp, i);
}
function removeKeys(myObj) {
  const array = ['id', 'location'];
  for (let index = 0; index < array.length; index++) {
    delete myObj[array[index]];
  }
  return myObj;
}

/***/ })

}]);
//# sourceMappingURL=regionMap.chunk.1.js.map