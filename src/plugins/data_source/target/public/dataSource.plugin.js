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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=dataSource!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=dataSource!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['dataSource']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_dataSource_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=dataSource!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=dataSource!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_dataSource_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_dataSource_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/dataSource/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/data_source/public */ "./public/index.ts"))
__osdBundles__.define('plugin/dataSource/common', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/data_source/common */ "./common/index.ts"))
__osdBundles__.define('plugin/dataSource/common/data_sources', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/data_source/common/data_sources */ "./common/data_sources/index.ts"))
__osdBundles__.define('plugin/dataSource/common/data_connections', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/data_source/common/data_connections */ "./common/data_connections/index.ts"))
__osdBundles__.define('plugin/dataSource/common/util', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/data_source/common/util */ "./common/util/index.ts"))

/***/ }),

/***/ "./common/data_connections/data_connection_saved_object_attributes.ts":
/*!****************************************************************************!*\
  !*** ./common/data_connections/data_connection_saved_object_attributes.ts ***!
  \****************************************************************************/
/*! exports provided: DATA_CONNECTION_SAVED_OBJECT_TYPE, DataConnectionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_CONNECTION_SAVED_OBJECT_TYPE", function() { return DATA_CONNECTION_SAVED_OBJECT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataConnectionType", function() { return DataConnectionType; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const DATA_CONNECTION_SAVED_OBJECT_TYPE = 'data-connection';

/**
 * Represents the attributes of a data connection saved object.
 * @property connectionId: The name of the data connection.
 * @property type: The type of the data connection based on enum DataConnectionType
 * @property meta: Additional metadata associated with the data connection.
 */

let DataConnectionType = /*#__PURE__*/function (DataConnectionType) {
  DataConnectionType["CloudWatch"] = "AWS CloudWatch";
  DataConnectionType["SecurityLake"] = "AWS Security Lake";
  DataConnectionType["NA"] = "None";
  return DataConnectionType;
}({});

/***/ }),

/***/ "./common/data_connections/index.ts":
/*!******************************************!*\
  !*** ./common/data_connections/index.ts ***!
  \******************************************/
/*! exports provided: DATA_CONNECTION_SAVED_OBJECT_TYPE, DataConnectionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_connection_saved_object_attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_connection_saved_object_attributes */ "./common/data_connections/data_connection_saved_object_attributes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_CONNECTION_SAVED_OBJECT_TYPE", function() { return _data_connection_saved_object_attributes__WEBPACK_IMPORTED_MODULE_0__["DATA_CONNECTION_SAVED_OBJECT_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataConnectionType", function() { return _data_connection_saved_object_attributes__WEBPACK_IMPORTED_MODULE_0__["DataConnectionType"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./common/data_sources/error.ts":
/*!**************************************!*\
  !*** ./common/data_sources/error.ts ***!
  \**************************************/
/*! exports provided: DataSourceError, isResponseError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceError", function() { return DataSourceError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isResponseError", function() { return isResponseError; });
/* harmony import */ var _opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../opensearch_dashboards_utils/common */ "plugin/opensearchDashboardsUtils/common");
/* harmony import */ var _opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


class DataSourceError extends _opensearch_dashboards_utils_common__WEBPACK_IMPORTED_MODULE_0__["OsdError"] {
  constructor(error, context, statusCode) {
    let message;
    if (context) {
      message = context;
    } else if (isResponseError(error)) {
      message = JSON.stringify(error.meta.body);
    } else {
      message = error.message;
    }
    super('Data Source Error: ' + message);
    // must have statusCode to avoid route handler in search.ts to return 500
    _defineProperty(this, "statusCode", void 0);
    _defineProperty(this, "body", void 0);
    if (error.body) {
      this.body = error.body;
    }
    if (statusCode) {
      this.statusCode = statusCode;
    } else if (error.statusCode) {
      this.statusCode = error.statusCode;
    } else {
      this.statusCode = 400;
    }
  }
}
const isResponseError = error => {
  return Boolean(error.body && error.statusCode && error.headers);
};

/***/ }),

/***/ "./common/data_sources/index.ts":
/*!**************************************!*\
  !*** ./common/data_sources/index.ts ***!
  \**************************************/
/*! exports provided: AuthType, SigV4ServiceName, DataSourceError, DataSourceEngineType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./common/data_sources/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthType", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["AuthType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SigV4ServiceName", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["SigV4ServiceName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceError", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["DataSourceError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceEngineType", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["DataSourceEngineType"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./common/data_sources/types.ts":
/*!**************************************!*\
  !*** ./common/data_sources/types.ts ***!
  \**************************************/
/*! exports provided: AuthType, SigV4ServiceName, DataSourceError, DataSourceEngineType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthType", function() { return AuthType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigV4ServiceName", function() { return SigV4ServiceName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceEngineType", function() { return DataSourceEngineType; });
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./common/data_sources/error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceError", function() { return _error__WEBPACK_IMPORTED_MODULE_0__["DataSourceError"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Multiple datasource supports authenticating as IAM user, it doesn't support IAM role.
 * Because IAM role session requires temporary security credentials through assuming role,
 * which makes no sense to store the credentials.
 */

let AuthType = /*#__PURE__*/function (AuthType) {
  AuthType["NoAuth"] = "no_auth";
  AuthType["UsernamePasswordType"] = "username_password";
  AuthType["SigV4"] = "sigv4";
  return AuthType;
}({});

// src/plugins/workspace/public/utils.ts Workspace plugin depends on this to do use case limitation.
let SigV4ServiceName = /*#__PURE__*/function (SigV4ServiceName) {
  SigV4ServiceName["OpenSearch"] = "es";
  SigV4ServiceName["OpenSearchServerless"] = "aoss";
  return SigV4ServiceName;
}({});

let DataSourceEngineType = /*#__PURE__*/function (DataSourceEngineType) {
  DataSourceEngineType["OpenSearch"] = "OpenSearch";
  DataSourceEngineType["OpenSearchServerless"] = "OpenSearch Serverless";
  DataSourceEngineType["Elasticsearch"] = "Elasticsearch";
  DataSourceEngineType["NA"] = "No Engine Type Available";
  return DataSourceEngineType;
}({});

/***/ }),

/***/ "./common/index.ts":
/*!*************************!*\
  !*** ./common/index.ts ***!
  \*************************/
/*! exports provided: PLUGIN_ID, PLUGIN_NAME, DATA_SOURCE_SAVED_OBJECT_TYPE, DATA_CONNECTION_SAVED_OBJECT_TYPE, DataConnectionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_ID", function() { return PLUGIN_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_NAME", function() { return PLUGIN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_SOURCE_SAVED_OBJECT_TYPE", function() { return DATA_SOURCE_SAVED_OBJECT_TYPE; });
/* harmony import */ var _data_connections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_connections */ "./common/data_connections/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_CONNECTION_SAVED_OBJECT_TYPE", function() { return _data_connections__WEBPACK_IMPORTED_MODULE_0__["DATA_CONNECTION_SAVED_OBJECT_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataConnectionType", function() { return _data_connections__WEBPACK_IMPORTED_MODULE_0__["DataConnectionType"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const PLUGIN_ID = 'dataSource';
const PLUGIN_NAME = 'data_source';
const DATA_SOURCE_SAVED_OBJECT_TYPE = 'data-source';


/***/ }),

/***/ "./common/util/decide_client.ts":
/*!**************************************!*\
  !*** ./common/util/decide_client.ts ***!
  \**************************************/
/*! exports provided: decideClient, decideLegacyClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decideClient", function() { return decideClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decideLegacyClient", function() { return decideLegacyClient; });
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

// eslint-disable-next-line @osd/eslint/no-restricted-paths

const decideClient = async (context, request, withLongNumeralsSupport = false) => {
  const defaultOpenSearchClient = withLongNumeralsSupport ? context.core.opensearch.client.asCurrentUserWithLongNumeralsSupport : context.core.opensearch.client.asCurrentUser;
  return request.dataSourceId && context.dataSource ? await context.dataSource.opensearch.getClient(request.dataSourceId) : defaultOpenSearchClient;
};
const decideLegacyClient = async (context, request) => {
  const dataSourceId = request.query.data_source;
  return dataSourceId ? context.dataSource.opensearch.legacy.getClient(dataSourceId).callAPI : context.core.opensearch.legacy.client.callAsCurrentUser;
};

/***/ }),

/***/ "./common/util/index.ts":
/*!******************************!*\
  !*** ./common/util/index.ts ***!
  \******************************/
/*! exports provided: decideClient, decideLegacyClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decide_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decide_client */ "./common/util/decide_client.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decideClient", function() { return _decide_client__WEBPACK_IMPORTED_MODULE_0__["decideClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decideLegacyClient", function() { return _decide_client__WEBPACK_IMPORTED_MODULE_0__["decideLegacyClient"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: plugin, DataSourcePluginSetup, DataSourcePluginStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./public/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourcePluginSetup", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["DataSourcePluginSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourcePluginStart", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["DataSourcePluginStart"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



// This exports static code and TypeScript types,
// as well as, OpenSearch Dashboards Platform `plugin()` initializer.
function plugin(initializerContext) {
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["DataSourcePlugin"](initializerContext);
}


/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: DataSourcePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourcePlugin", function() { return DataSourcePlugin; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

class DataSourcePlugin {
  constructor(initializerContext) {
    this.initializerContext = initializerContext;
  }
  setup(core) {
    const config = this.initializerContext.config.get();
    return {
      dataSourceEnabled: config.enabled,
      hideLocalCluster: config.hideLocalCluster,
      noAuthenticationTypeEnabled: config.authTypes.NoAuthentication.enabled,
      usernamePasswordAuthEnabled: config.authTypes.UsernamePassword.enabled,
      awsSigV4AuthEnabled: config.authTypes.AWSSigV4.enabled
    };
  }
  start(core) {
    const config = this.initializerContext.config.get();
    return {
      dataSourceEnabled: config.enabled,
      hideLocalCluster: config.hideLocalCluster,
      noAuthenticationTypeEnabled: config.authTypes.NoAuthentication.enabled,
      usernamePasswordAuthEnabled: config.authTypes.UsernamePassword.enabled,
      awsSigV4AuthEnabled: config.authTypes.AWSSigV4.enabled
    };
  }
  stop() {}
}

/***/ }),

/***/ "./public/types.ts":
/*!*************************!*\
  !*** ./public/types.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "plugin/opensearchDashboardsUtils/common":
/*!****************************************************************!*\
  !*** @osd/bundleRef "plugin/opensearchDashboardsUtils/common" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/opensearchDashboardsUtils/common');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ })

/******/ });
//# sourceMappingURL=dataSource.plugin.js.map