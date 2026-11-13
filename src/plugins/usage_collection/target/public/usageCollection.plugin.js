/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../packages/osd-optimizer/target/worker/entry_point_creator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=usageCollection!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=usageCollection!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['usageCollection']

/***/ }),

/***/ "../../../packages/osd-analytics/target/web/index.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/index.js ***!
  \************************************************************************************/
/*! exports provided: ReportHTTP, Reporter, ReporterConfig, UiStatsMetricType, METRIC_TYPE, Report, ReportManager, Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reporter */ "../../../packages/osd-analytics/target/web/reporter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportHTTP", function() { return _reporter__WEBPACK_IMPORTED_MODULE_0__["ReportHTTP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reporter", function() { return _reporter__WEBPACK_IMPORTED_MODULE_0__["Reporter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReporterConfig", function() { return _reporter__WEBPACK_IMPORTED_MODULE_0__["ReporterConfig"]; });

/* harmony import */ var _metrics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metrics */ "../../../packages/osd-analytics/target/web/metrics/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiStatsMetricType", function() { return _metrics__WEBPACK_IMPORTED_MODULE_1__["UiStatsMetricType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "METRIC_TYPE", function() { return _metrics__WEBPACK_IMPORTED_MODULE_1__["METRIC_TYPE"]; });

/* harmony import */ var _report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report */ "../../../packages/osd-analytics/target/web/report.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return _report__WEBPACK_IMPORTED_MODULE_2__["Report"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReportManager", function() { return _report__WEBPACK_IMPORTED_MODULE_2__["ReportManager"]; });

/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "../../../packages/osd-analytics/target/web/storage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]; });

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






/***/ }),

/***/ "../../../packages/osd-analytics/target/web/metrics/application_usage.js":
/*!********************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/metrics/application_usage.js ***!
  \********************************************************************************************************/
/*! exports provided: ApplicationUsage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationUsage", function() { return ApplicationUsage; });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "../../../packages/osd-analytics/target/web/metrics/index.js");
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
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



class ApplicationUsage {
  constructor() {
    _defineProperty(this, "currentUsage", void 0);
  }
  start() {
    // Count any clicks and assign it to the current app
    if (window) window.addEventListener('click', () => this.currentUsage && this.currentUsage.numberOfClicks++);
  }
  appChanged(appId) {
    const currentUsage = this.currentUsage;
    if (appId) {
      this.currentUsage = {
        type: ___WEBPACK_IMPORTED_MODULE_1__["METRIC_TYPE"].APPLICATION_USAGE,
        appId,
        startTime: moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()(),
        numberOfClicks: 0
      };
    } else {
      this.currentUsage = void 0;
    }
    return currentUsage;
  }
}

/***/ }),

/***/ "../../../packages/osd-analytics/target/web/metrics/index.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/metrics/index.js ***!
  \********************************************************************************************/
/*! exports provided: UiStatsMetric, createUiStatsMetric, UiStatsMetricType, Stats, trackUsageAgent, ApplicationUsage, ApplicationUsageCurrent, METRIC_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METRIC_TYPE", function() { return METRIC_TYPE; });
/* harmony import */ var _ui_stats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui_stats */ "../../../packages/osd-analytics/target/web/metrics/ui_stats.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiStatsMetric", function() { return _ui_stats__WEBPACK_IMPORTED_MODULE_0__["UiStatsMetric"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUiStatsMetric", function() { return _ui_stats__WEBPACK_IMPORTED_MODULE_0__["createUiStatsMetric"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiStatsMetricType", function() { return _ui_stats__WEBPACK_IMPORTED_MODULE_0__["UiStatsMetricType"]; });

/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats */ "../../../packages/osd-analytics/target/web/metrics/stats.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stats", function() { return _stats__WEBPACK_IMPORTED_MODULE_1__["Stats"]; });

/* harmony import */ var _user_agent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user_agent */ "../../../packages/osd-analytics/target/web/metrics/user_agent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trackUsageAgent", function() { return _user_agent__WEBPACK_IMPORTED_MODULE_2__["trackUsageAgent"]; });

/* harmony import */ var _application_usage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application_usage */ "../../../packages/osd-analytics/target/web/metrics/application_usage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationUsage", function() { return _application_usage__WEBPACK_IMPORTED_MODULE_3__["ApplicationUsage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationUsageCurrent", function() { return _application_usage__WEBPACK_IMPORTED_MODULE_3__["ApplicationUsageCurrent"]; });

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





let METRIC_TYPE = /*#__PURE__*/function (METRIC_TYPE) {
  METRIC_TYPE["COUNT"] = "count";
  METRIC_TYPE["LOADED"] = "loaded";
  METRIC_TYPE["CLICK"] = "click";
  METRIC_TYPE["USER_AGENT"] = "user_agent";
  METRIC_TYPE["APPLICATION_USAGE"] = "application_usage";
  return METRIC_TYPE;
}({});

/***/ }),

/***/ "../../../packages/osd-analytics/target/web/metrics/stats.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/metrics/stats.js ***!
  \********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "../../../packages/osd-analytics/target/web/metrics/ui_stats.js":
/*!***********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/metrics/ui_stats.js ***!
  \***********************************************************************************************/
/*! exports provided: createUiStatsMetric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUiStatsMetric", function() { return createUiStatsMetric; });
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

function createUiStatsMetric(_ref) {
  let {
    type,
    appName,
    eventName,
    count = 1
  } = _ref;
  return {
    type,
    appName,
    eventName,
    count
  };
}

/***/ }),

/***/ "../../../packages/osd-analytics/target/web/metrics/user_agent.js":
/*!*************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/metrics/user_agent.js ***!
  \*************************************************************************************************/
/*! exports provided: trackUsageAgent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackUsageAgent", function() { return trackUsageAgent; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "../../../packages/osd-analytics/target/web/metrics/index.js");
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


function trackUsageAgent(appName) {
  const userAgent = window && window.navigator && window.navigator.userAgent || '';
  return {
    type: ___WEBPACK_IMPORTED_MODULE_0__["METRIC_TYPE"].USER_AGENT,
    appName,
    userAgent
  };
}

/***/ }),

/***/ "../../../packages/osd-analytics/target/web/report.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/report.js ***!
  \*************************************************************************************/
/*! exports provided: ReportManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportManager", function() { return ReportManager; });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "moment-timezone");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "../../../packages/osd-analytics/target/web/util.js");
/* harmony import */ var _metrics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metrics */ "../../../packages/osd-analytics/target/web/metrics/index.js");
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
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




const REPORT_VERSION = 1;
class ReportManager {
  constructor(report) {
    _defineProperty(this, "report", void 0);
    this.report = report || ReportManager.createReport();
  }
  static createReport() {
    return {
      reportVersion: REPORT_VERSION
    };
  }
  clearReport() {
    this.report = ReportManager.createReport();
  }
  isReportEmpty() {
    const {
      uiStatsMetrics,
      userAgent,
      application_usage: appUsage
    } = this.report;
    const noUiStats = !uiStatsMetrics || Object.keys(uiStatsMetrics).length === 0;
    const noUserAgent = !userAgent || Object.keys(userAgent).length === 0;
    const noAppUsage = !appUsage || Object.keys(appUsage).length === 0;
    return noUiStats && noUserAgent && noAppUsage;
  }
  incrementStats(count, stats) {
    const {
      min = 0,
      max = 0,
      sum = 0
    } = stats || {};
    const newMin = Math.min(min, count);
    const newMax = Math.max(max, count);
    const newAvg = newMin + newMax / 2;
    const newSum = sum + count;
    return {
      min: newMin,
      max: newMax,
      avg: newAvg,
      sum: newSum
    };
  }
  assignReports(newMetrics) {
    Object(_util__WEBPACK_IMPORTED_MODULE_1__["wrapArray"])(newMetrics).forEach(newMetric => this.assignReport(this.report, newMetric));
    return {
      report: this.report
    };
  }
  static createMetricKey(metric) {
    switch (metric.type) {
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].USER_AGENT:
        {
          const {
            appName,
            type
          } = metric;
          return `${appName}-${type}`;
        }
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].CLICK:
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].LOADED:
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].COUNT:
        {
          const {
            appName,
            eventName,
            type
          } = metric;
          return `${appName}-${type}-${eventName}`;
        }
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].APPLICATION_USAGE:
        return metric.appId;
      default:
        throw new _util__WEBPACK_IMPORTED_MODULE_1__["UnreachableCaseError"](metric);
    }
  }
  assignReport(report, metric) {
    const key = ReportManager.createMetricKey(metric);
    switch (metric.type) {
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].USER_AGENT:
        {
          const {
            appName,
            type,
            userAgent
          } = metric;
          if (userAgent) {
            report.userAgent = {
              [key]: {
                key,
                appName,
                type,
                userAgent: metric.userAgent
              }
            };
          }
          return;
        }
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].CLICK:
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].LOADED:
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].COUNT:
        {
          const {
            appName,
            type,
            eventName,
            count
          } = metric;
          report.uiStatsMetrics = report.uiStatsMetrics || {};
          const existingStats = (report.uiStatsMetrics[key] || {}).stats;
          report.uiStatsMetrics[key] = {
            key,
            appName,
            eventName,
            type,
            stats: this.incrementStats(count, existingStats)
          };
          return;
        }
      case _metrics__WEBPACK_IMPORTED_MODULE_2__["METRIC_TYPE"].APPLICATION_USAGE:
        const {
          numberOfClicks,
          startTime
        } = metric;
        const minutesOnScreen = moment_timezone__WEBPACK_IMPORTED_MODULE_0___default()().diff(startTime, 'minutes', true);
        report.application_usage = report.application_usage || {};
        const appExistingData = report.application_usage[key] || {
          minutesOnScreen: 0,
          numberOfClicks: 0
        };
        report.application_usage[key] = {
          minutesOnScreen: appExistingData.minutesOnScreen + minutesOnScreen,
          numberOfClicks: appExistingData.numberOfClicks + numberOfClicks
        };
        break;
      default:
        throw new _util__WEBPACK_IMPORTED_MODULE_1__["UnreachableCaseError"](metric);
    }
  }
}
_defineProperty(ReportManager, "REPORT_VERSION", REPORT_VERSION);

/***/ }),

/***/ "../../../packages/osd-analytics/target/web/reporter.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/reporter.js ***!
  \***************************************************************************************/
/*! exports provided: Reporter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reporter", function() { return Reporter; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../../../packages/osd-analytics/target/web/util.js");
/* harmony import */ var _metrics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metrics */ "../../../packages/osd-analytics/target/web/metrics/index.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "../../../packages/osd-analytics/target/web/storage.js");
/* harmony import */ var _report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report */ "../../../packages/osd-analytics/target/web/report.js");
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
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






class Reporter {
  constructor(config) {
    _defineProperty(this, "checkInterval", void 0);
    _defineProperty(this, "interval", void 0);
    _defineProperty(this, "lastAppId", void 0);
    _defineProperty(this, "http", void 0);
    _defineProperty(this, "reportManager", void 0);
    _defineProperty(this, "storageManager", void 0);
    _defineProperty(this, "applicationUsage", void 0);
    _defineProperty(this, "debug", void 0);
    _defineProperty(this, "retryCount", 0);
    _defineProperty(this, "maxRetries", 3);
    _defineProperty(this, "started", false);
    _defineProperty(this, "start", () => {
      if (!this.interval) {
        this.interval = setTimeout(() => {
          this.interval = undefined;
          this.sendReports();
        }, this.checkInterval);
      }
      if (this.started) {
        return;
      }
      if (window && document) {
        // Before leaving the page, make sure we store the current usage
        window.addEventListener('beforeunload', () => this.reportApplicationUsage());

        // Monitoring dashboards might be open in background and we are fine with that
        // but we don't want to report hours if the user goes to another tab and OpenSearch Dashboards is not shown
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible' && this.lastAppId) {
            this.reportApplicationUsage(this.lastAppId);
          } else if (document.visibilityState === 'hidden') {
            this.reportApplicationUsage();

            // We also want to send the report now because intervals and timeouts be stalled when too long in the "hidden" state
            this.sendReports();
          }
        });
      }
      this.started = true;
      this.applicationUsage.start();
    });
    _defineProperty(this, "reportUiStats", (appName, type, eventNames, count) => {
      const metrics = Object(_util__WEBPACK_IMPORTED_MODULE_0__["wrapArray"])(eventNames).map(eventName => {
        this.log(`${type} Metric -> (${appName}:${eventName}):`);
        const report = Object(_metrics__WEBPACK_IMPORTED_MODULE_1__["createUiStatsMetric"])({
          type,
          appName,
          eventName,
          count
        });
        this.log(report);
        return report;
      });
      this.saveToReport(metrics);
    });
    _defineProperty(this, "reportUserAgent", appName => {
      this.log(`Reporting user-agent.`);
      const report = Object(_metrics__WEBPACK_IMPORTED_MODULE_1__["trackUsageAgent"])(appName);
      this.saveToReport([report]);
    });
    _defineProperty(this, "sendReports", async () => {
      if (!this.reportManager.isReportEmpty()) {
        try {
          await this.http(this.reportManager.report);
          this.flushReport();
        } catch (err) {
          this.log(`Error Sending Metrics Report ${err}`);
          this.retryCount = this.retryCount + 1;
          const versionMismatch = this.reportManager.report.reportVersion !== _report__WEBPACK_IMPORTED_MODULE_3__["ReportManager"].REPORT_VERSION;
          if (versionMismatch || this.retryCount > this.maxRetries) {
            this.flushReport();
          }
        }
      }
      this.start();
    });
    const {
      http,
      storage,
      debug,
      checkInterval = 90000,
      storageKey = 'analytics'
    } = config;
    this.http = http;
    this.checkInterval = checkInterval;
    this.applicationUsage = new _metrics__WEBPACK_IMPORTED_MODULE_1__["ApplicationUsage"]();
    this.storageManager = new _storage__WEBPACK_IMPORTED_MODULE_2__["ReportStorageManager"](storageKey, storage);
    const storedReport = this.storageManager.get();
    this.reportManager = new _report__WEBPACK_IMPORTED_MODULE_3__["ReportManager"](storedReport);
    this.debug = !!debug;
  }
  saveToReport(newMetrics) {
    this.reportManager.assignReports(newMetrics);
    this.storageManager.store(this.reportManager.report);
  }
  flushReport() {
    this.retryCount = 0;
    this.reportManager.clearReport();
    this.storageManager.store(this.reportManager.report);
  }
  log(message) {
    if (this.debug) {
      // eslint-disable-next-line
      console.debug(message);
    }
  }
  reportApplicationUsage(appId) {
    this.log(`Reporting application changed to ${appId}`);
    this.lastAppId = appId || this.lastAppId;
    const appChangedReport = this.applicationUsage.appChanged(appId);
    if (appChangedReport) this.saveToReport([appChangedReport]);
  }
}

/***/ }),

/***/ "../../../packages/osd-analytics/target/web/storage.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/storage.js ***!
  \**************************************************************************************/
/*! exports provided: ReportStorageManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportStorageManager", function() { return ReportStorageManager; });
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
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

class ReportStorageManager {
  constructor(storageKey, storage) {
    _defineProperty(this, "storageKey", void 0);
    _defineProperty(this, "storage", void 0);
    this.storageKey = storageKey;
    this.storage = storage;
  }
  get() {
    if (!this.storage) return;
    return this.storage.get(this.storageKey);
  }
  store(report) {
    if (!this.storage) return;
    this.storage.set(this.storageKey, report);
  }
}

/***/ }),

/***/ "../../../packages/osd-analytics/target/web/util.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-analytics/target/web/util.js ***!
  \***********************************************************************************/
/*! exports provided: wrapArray, UnreachableCaseError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapArray", function() { return wrapArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnreachableCaseError", function() { return UnreachableCaseError; });
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

function wrapArray(subj) {
  return Array.isArray(subj) ? subj : [subj];
}
class UnreachableCaseError extends Error {
  constructor(val) {
    super(`Unreachable case: ${val}`);
  }
}

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_usageCollection_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=usageCollection!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=usageCollection!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_usageCollection_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_usageCollection_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/usageCollection/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/usage_collection/public */ "./public/index.ts"))

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: METRIC_TYPE, UsageCollectionSetup, UsageCollectionStart, plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony import */ var _osd_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/analytics */ "../../../packages/osd-analytics/target/web/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "METRIC_TYPE", function() { return _osd_analytics__WEBPACK_IMPORTED_MODULE_1__["METRIC_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsageCollectionSetup", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["UsageCollectionSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsageCollectionStart", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["UsageCollectionStart"]; });

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




function plugin(initializerContext) {
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["UsageCollectionPlugin"](initializerContext);
}

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: isUnauthenticated, UsageCollectionPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnauthenticated", function() { return isUnauthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsageCollectionPlugin", function() { return UsageCollectionPlugin; });
/* harmony import */ var _osd_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/analytics */ "../../../packages/osd-analytics/target/web/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../opensearch_dashboards_utils/public */ "plugin/opensearchDashboardsUtils/public");
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./public/services/index.ts");
/* harmony import */ var _services_application_usage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/application_usage */ "./public/services/application_usage.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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






function isUnauthenticated(http) {
  const {
    anonymousPaths
  } = http;
  return anonymousPaths.isAnonymous(window.location.pathname);
}
class UsageCollectionPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "legacyAppId$", new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]());
    _defineProperty(this, "trackUserAgent", true);
    _defineProperty(this, "reporter", void 0);
    _defineProperty(this, "config", void 0);
    this.config = initializerContext.config.get();
  }
  setup({
    http
  }) {
    const localStorage = new _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_2__["Storage"](window.localStorage);
    const debug = this.config.uiMetric.debug;
    this.reporter = Object(_services__WEBPACK_IMPORTED_MODULE_3__["createReporter"])({
      localStorage,
      debug,
      fetch: http
    });
    return {
      allowTrackUserAgent: allow => {
        this.trackUserAgent = allow;
      },
      reportUiStats: this.reporter.reportUiStats,
      METRIC_TYPE: _osd_analytics__WEBPACK_IMPORTED_MODULE_0__["METRIC_TYPE"],
      __LEGACY: {
        appChanged: appId => this.legacyAppId$.next(appId)
      }
    };
  }
  start({
    http,
    application
  }) {
    if (!this.reporter) {
      throw new Error('Usage collection reporter not set up correctly');
    }
    if (this.config.uiMetric.enabled && !isUnauthenticated(http)) {
      this.reporter.start();
    }
    if (this.trackUserAgent) {
      this.reporter.reportUserAgent('opensearchDashboards');
    }
    Object(_services_application_usage__WEBPACK_IMPORTED_MODULE_4__["reportApplicationUsage"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(application.currentAppId$, this.legacyAppId$), this.reporter);
    return {
      reportUiStats: this.reporter.reportUiStats,
      METRIC_TYPE: _osd_analytics__WEBPACK_IMPORTED_MODULE_0__["METRIC_TYPE"]
    };
  }
  stop() {}
}

/***/ }),

/***/ "./public/services/application_usage.ts":
/*!**********************************************!*\
  !*** ./public/services/application_usage.ts ***!
  \**********************************************/
/*! exports provided: reportApplicationUsage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportApplicationUsage", function() { return reportApplicationUsage; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
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
 * List of appIds not to report usage from (due to legacy hacks)
 */
const DO_NOT_REPORT = ['opensearchDashboards'];
function reportApplicationUsage(currentAppId$, reporter) {
  currentAppId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(appId => typeof appId === 'string' && !DO_NOT_REPORT.includes(appId)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])()).subscribe(appId => appId && reporter.reportApplicationUsage(appId));
}

/***/ }),

/***/ "./public/services/create_reporter.ts":
/*!********************************************!*\
  !*** ./public/services/create_reporter.ts ***!
  \********************************************/
/*! exports provided: createReporter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReporter", function() { return createReporter; });
/* harmony import */ var _osd_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/analytics */ "../../../packages/osd-analytics/target/web/index.js");
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


function createReporter(config) {
  const {
    localStorage,
    debug,
    fetch
  } = config;
  return new _osd_analytics__WEBPACK_IMPORTED_MODULE_0__["Reporter"]({
    debug,
    storage: localStorage,
    async http(report) {
      const response = await fetch.post('/api/ui_metric/report', {
        body: JSON.stringify({
          report
        })
      });
      if (response.status !== 'ok') {
        throw Error('Unable to store report.');
      }
      return response;
    }
  });
}

/***/ }),

/***/ "./public/services/index.ts":
/*!**********************************!*\
  !*** ./public/services/index.ts ***!
  \**********************************/
/*! exports provided: createReporter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_reporter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_reporter */ "./public/services/create_reporter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReporter", function() { return _create_reporter__WEBPACK_IMPORTED_MODULE_0__["createReporter"]; });

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



/***/ }),

/***/ "moment-timezone":
/*!***************************************************!*\
  !*** external "__osdSharedDeps__.MomentTimezone" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.MomentTimezone;

/***/ }),

/***/ "plugin/opensearchDashboardsUtils/public":
/*!****************************************************************!*\
  !*** @osd/bundleRef "plugin/opensearchDashboardsUtils/public" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/opensearchDashboardsUtils/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "rxjs":
/*!*****************************************!*\
  !*** external "__osdSharedDeps__.Rxjs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Rxjs;

/***/ }),

/***/ "rxjs/operators":
/*!**************************************************!*\
  !*** external "__osdSharedDeps__.RxjsOperators" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.RxjsOperators;

/***/ })

/******/ });
//# sourceMappingURL=usageCollection.plugin.js.map