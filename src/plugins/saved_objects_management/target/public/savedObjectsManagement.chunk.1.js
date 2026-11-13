(window["savedObjectsManagement_bundle_jsonpfunction"] = window["savedObjectsManagement_bundle_jsonpfunction"] || []).push([[1],{

/***/ "../../../packages/opensearch-safer-lodash-set/index.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/opensearch-safer-lodash-set/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

exports.set = __webpack_require__(/*! ./lodash/set */ "../../../packages/opensearch-safer-lodash-set/lodash/set.js");
exports.setWith = __webpack_require__(/*! ./lodash/setWith */ "../../../packages/opensearch-safer-lodash-set/lodash/setWith.js");

/***/ }),

/***/ "../../../packages/opensearch-safer-lodash-set/lodash/_baseSet.js":
/*!*************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/opensearch-safer-lodash-set/lodash/_baseSet.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/* eslint-disable */

var assignValue = __webpack_require__(/*! lodash/_assignValue */ "../../../node_modules/lodash/_assignValue.js"),
  castPath = __webpack_require__(/*! lodash/_castPath */ "../../../node_modules/lodash/_castPath.js"),
  isFunction = __webpack_require__(/*! lodash/isFunction */ "../../../node_modules/lodash/isFunction.js"),
  isIndex = __webpack_require__(/*! lodash/_isIndex */ "../../../node_modules/lodash/_isIndex.js"),
  isObject = __webpack_require__(/*! lodash/isObject */ "../../../node_modules/lodash/isObject.js"),
  toKey = __webpack_require__(/*! lodash/_toKey */ "../../../node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);
  var index = -1,
    length = path.length,
    lastIndex = length - 1,
    nested = object;
  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
      newValue = value;
    if (key == 'prototype' && isFunction(nested)) {
      throw new Error('Illegal access of function prototype');
    }
    if (index != lastIndex) {
      var objValue = hasOwnProperty.call(nested, key) ? nested[key] : undefined;
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
module.exports = baseSet;

/***/ }),

/***/ "../../../packages/opensearch-safer-lodash-set/lodash/set.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/opensearch-safer-lodash-set/lodash/set.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/* eslint-disable */

var baseSet = __webpack_require__(/*! ./_baseSet */ "../../../packages/opensearch-safer-lodash-set/lodash/_baseSet.js");

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}
module.exports = set;

/***/ }),

/***/ "../../../packages/opensearch-safer-lodash-set/lodash/setWith.js":
/*!************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/opensearch-safer-lodash-set/lodash/setWith.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/* eslint-disable */

var baseSet = __webpack_require__(/*! ./_baseSet */ "../../../packages/opensearch-safer-lodash-set/lodash/_baseSet.js");

/**
 * This method is like `_.set` except that it accepts `customizer` which is
 * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
 * path creation is handled by the method instead. The `customizer` is invoked
 * with three arguments: (nsValue, key, nsObject).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {};
 *
 * _.setWith(object, '[0][1]', 'a', Object);
 * // => { '0': { '1': 'a' } }
 */
function setWith(object, path, value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return object == null ? object : baseSet(object, path, value, customizer);
}
module.exports = setWith;

/***/ }),

/***/ "./public/management_section/object_view/components/field.tsx":
/*!********************************************************************!*\
  !*** ./public/management_section/object_view/components/field.tsx ***!
  \********************************************************************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
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




class Field extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      name
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFormRow"], {
      fullWidth: true,
      label: name
    }, this.renderField());
  }
  onCodeEditorChange(targetValue) {
    const {
      name,
      onChange
    } = this.props;
    let invalid = false;
    try {
      JSON.parse(targetValue);
    } catch (e) {
      invalid = true;
    }
    onChange(name, {
      value: targetValue,
      invalid
    });
  }
  onFieldChange(targetValue) {
    const {
      name,
      type,
      onChange
    } = this.props;
    let newParsedValue = targetValue;
    let invalid = false;
    if (type === 'number') {
      try {
        newParsedValue = Number(newParsedValue);
      } catch (e) {
        invalid = true;
      }
    }
    onChange(name, {
      value: newParsedValue,
      invalid
    });
  }
  renderField() {
    var _state$value;
    const {
      type,
      name,
      state,
      disabled
    } = this.props;
    const currentValue = (_state$value = state === null || state === void 0 ? void 0 : state.value) !== null && _state$value !== void 0 ? _state$value : this.props.value;
    switch (type) {
      case 'number':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldNumber"], {
          name: name,
          id: this.fieldId,
          value: currentValue,
          onChange: e => this.onFieldChange(e.target.value),
          disabled: disabled,
          "data-test-subj": `savedObjects-editField-${name}`
        });
      case 'boolean':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedSwitch"], {
          name: name,
          id: this.fieldId,
          label: !!currentValue ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
            id: "savedObjectsManagement.field.onLabel",
            defaultMessage: "On"
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
            id: "savedObjectsManagement.field.offLabel",
            defaultMessage: "Off"
          }),
          checked: !!currentValue,
          onChange: e => this.onFieldChange(e.target.checked),
          disabled: disabled,
          "data-test-subj": `savedObjects-editField-${name}`
        });
      case 'json':
      case 'array':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "data-test-subj": `savedObjects-editField-${name}`
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCodeEditor"], {
          name: `savedObjects-editField-${name}-aceEditor`,
          mode: "json",
          theme: "textmate",
          value: currentValue,
          onChange: value => this.onCodeEditorChange(value),
          width: "100%",
          height: "auto",
          minLines: 6,
          maxLines: 30,
          isReadOnly: disabled,
          setOptions: {
            showLineNumbers: true,
            tabSize: 2,
            useSoftTabs: true
          },
          editorProps: {
            $blockScrolling: Infinity
          },
          showGutter: true
        }));
      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedFieldText"], {
          id: this.fieldId,
          name: name,
          value: currentValue,
          onChange: e => this.onFieldChange(e.target.value),
          disabled: disabled,
          "data-test-subj": `savedObjects-editField-${name}`
        });
    }
  }
  get fieldId() {
    const {
      name
    } = this.props;
    return `savedObjects-editField-${name}`;
  }
}

/***/ }),

/***/ "./public/management_section/object_view/components/form.tsx":
/*!*******************************************************************!*\
  !*** ./public/management_section/object_view/components/form.tsx ***!
  \*******************************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/safer-lodash-set */ "../../../packages/opensearch-safer-lodash-set/index.js");
/* harmony import */ var _elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./field */ "./public/management_section/object_view/components/field.tsx");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib */ "./public/lib/index.ts");
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









class Form extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    _defineProperty(this, "handleFieldChange", (name, newState) => {
      this.setState({
        fieldStates: {
          ...this.state.fieldStates,
          [name]: newState
        }
      });
    });
    _defineProperty(this, "onCancel", () => {
      window.history.back();
    });
    _defineProperty(this, "onSubmit", async () => {
      const {
        object,
        onSave
      } = this.props;
      const {
        fields,
        fieldStates
      } = this.state;
      if (!this.isFormValid()) {
        return;
      }
      this.setState({
        submitting: true
      });
      const source = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(object.attributes);
      fields.forEach(field => {
        var _fieldStates$field$na, _fieldStates$field$na2;
        let value = (_fieldStates$field$na = (_fieldStates$field$na2 = fieldStates[field.name]) === null || _fieldStates$field$na2 === void 0 ? void 0 : _fieldStates$field$na2.value) !== null && _fieldStates$field$na !== void 0 ? _fieldStates$field$na : field.value;
        if (field.type === 'array' && typeof value === 'string') {
          value = JSON.parse(value);
        }
        Object(_elastic_safer_lodash_set__WEBPACK_IMPORTED_MODULE_2__["set"])(source, field.name, value);
      });

      // we extract the `references` field that does not belong to attributes
      const {
        references,
        ...attributes
      } = source;
      await onSave({
        attributes,
        references
      });
      this.setState({
        submitting: false
      });
    });
    this.state = {
      fields: [],
      fieldStates: {},
      submitting: false
    };
  }
  componentDidMount() {
    const {
      object,
      service
    } = this.props;
    const fields = Object(_lib__WEBPACK_IMPORTED_MODULE_7__["createFieldList"])(object, service);
    this.setState({
      fields
    });
  }
  render() {
    const {
      editionEnabled,
      service
    } = this.props;
    const {
      fields,
      fieldStates,
      submitting
    } = this.state;
    const isValid = this.isFormValid();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiForm"], {
      "data-test-subj": "savedObjectEditForm",
      role: "form"
    }, fields.map(field => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_field__WEBPACK_IMPORTED_MODULE_6__["Field"], {
      key: `${field.type}-${field.name}`,
      type: field.type,
      name: field.name,
      value: field.value,
      state: fieldStates[field.name],
      disabled: !editionEnabled,
      onChange: this.handleFieldChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: 'l'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
      responsive: false,
      gutterSize: 'm'
    }, editionEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButton"], {
      fill: true,
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.view.saveButtonAriaLabel', {
        defaultMessage: 'Save { title } object',
        values: {
          title: service.type
        }
      }),
      onClick: this.onSubmit,
      disabled: !isValid || submitting,
      "data-test-subj": "savedObjectEditSave"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "savedObjectsManagement.view.saveButtonLabel",
      defaultMessage: "Save { title } object",
      values: {
        title: service.type
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonEmpty"], {
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.view.cancelButtonAriaLabel', {
        defaultMessage: 'Cancel'
      }),
      onClick: this.onCancel,
      "data-test-subj": "savedObjectEditCancel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "savedObjectsManagement.view.cancelButtonLabel",
      defaultMessage: "Cancel"
    })))));
  }
  isFormValid() {
    const {
      fieldStates
    } = this.state;
    return !Object.values(fieldStates).some(state => state.invalid === true);
  }
}

/***/ }),

/***/ "./public/management_section/object_view/components/header.tsx":
/*!*********************************************************************!*\
  !*** ./public/management_section/object_view/components/header.tsx ***!
  \*********************************************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
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





const Header = ({
  canEdit,
  canDelete,
  canViewInApp,
  type,
  viewUrl,
  onDeleteClick,
  useUpdatedUX,
  navigationUI: {
    HeaderControl
  },
  application
}) => {
  return useUpdatedUX ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderControl, {
    controls: [...(canDelete ? [{
      controlType: 'icon',
      iconType: 'trash',
      ariaLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.view.deleteItemButtonLabel', {
        defaultMessage: 'Delete {title}',
        values: {
          title: type
        }
      }),
      run: onDeleteClick,
      testId: 'savedObjectEditDelete',
      display: 'base',
      color: 'danger'
    }] : []), ...(canViewInApp ? [{
      controlType: 'button',
      iconType: 'popout',
      label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.view.viewItemButtonLabel', {
        defaultMessage: 'View {title}',
        values: {
          title: type
        }
      }),
      href: viewUrl,
      testId: 'savedObjectEditViewInApp',
      fill: true,
      iconSide: 'right'
    }] : [])],
    setMountPoint: application.setAppRightControls
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPageContentHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPageContentHeaderSection"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "s"
  }, canEdit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "savedObjectsManagement.view.editItemTitle",
    defaultMessage: "Edit {title}",
    values: {
      title: type
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "savedObjectsManagement.view.viewItemTitle",
    defaultMessage: "View {title}",
    values: {
      title: type
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPageContentHeaderSection"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    responsive: false
  }, canViewInApp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButton"], {
    size: "s",
    href: viewUrl,
    iconType: "eye",
    "data-test-subj": "savedObjectEditViewInApp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "savedObjectsManagement.view.viewItemButtonLabel",
    defaultMessage: "View {title}",
    values: {
      title: type
    }
  }))), canDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButton"], {
    color: "danger",
    size: "s",
    iconType: "trash",
    onClick: () => onDeleteClick(),
    "data-test-subj": "savedObjectEditDelete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "savedObjectsManagement.view.deleteItemButtonLabel",
    defaultMessage: "Delete {title}",
    values: {
      title: type
    }
  }))))));
};

/***/ }),

/***/ "./public/management_section/object_view/components/index.ts":
/*!*******************************************************************!*\
  !*** ./public/management_section/object_view/components/index.ts ***!
  \*******************************************************************/
/*! exports provided: Header, NotFoundErrors, Intro, Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./public/management_section/object_view/components/header.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_0__["Header"]; });

/* harmony import */ var _not_found_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not_found_errors */ "./public/management_section/object_view/components/not_found_errors.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundErrors", function() { return _not_found_errors__WEBPACK_IMPORTED_MODULE_1__["NotFoundErrors"]; });

/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro */ "./public/management_section/object_view/components/intro.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Intro", function() { return _intro__WEBPACK_IMPORTED_MODULE_2__["Intro"]; });

/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./public/management_section/object_view/components/form.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _form__WEBPACK_IMPORTED_MODULE_3__["Form"]; });

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

/***/ "./public/management_section/object_view/components/intro.tsx":
/*!********************************************************************!*\
  !*** ./public/management_section/object_view/components/intro.tsx ***!
  \********************************************************************/
/*! exports provided: Intro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro", function() { return Intro; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
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




const Intro = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCallOut"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "savedObjectsManagement.view.howToModifyObjectTitle",
      defaultMessage: "Proceed with caution!"
    }),
    iconType: "alert",
    color: "warning"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "savedObjectsManagement.view.howToModifyObjectDescription",
    defaultMessage: "Modifying objects is for advanced users only. Object properties are not validated and invalid objects could cause errors, data loss, or worse. Unless someone with intimate knowledge of the code told you to be in here, you probably shouldn\u2019t be."
  })));
};

/***/ }),

/***/ "./public/management_section/object_view/components/not_found_errors.tsx":
/*!*******************************************************************************!*\
  !*** ./public/management_section/object_view/components/not_found_errors.tsx ***!
  \*******************************************************************************/
/*! exports provided: NotFoundErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundErrors", function() { return NotFoundErrors; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
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




const NotFoundErrors = ({
  type
}) => {
  const getMessage = () => {
    switch (type) {
      case 'search':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "savedObjectsManagement.view.savedSearchDoesNotExistErrorMessage",
          defaultMessage: "The saved search associated with this object no longer exists."
        });
      case 'index-pattern':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "savedObjectsManagement.view.indexPatternDoesNotExistErrorMessage",
          defaultMessage: "The index pattern associated with this object no longer exists."
        });
      case 'index-pattern-field':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
          id: "savedObjectsManagement.view.fieldDoesNotExistErrorMessage",
          defaultMessage: "A field associated with this object no longer exists in the index pattern."
        });
      default:
        return null;
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCallOut"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "savedObjectsManagement.view.savedObjectProblemErrorMessage",
      defaultMessage: "There is a problem with this saved object"
    }),
    iconType: "alert",
    color: "danger"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, getMessage()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "savedObjectsManagement.view.howToFixErrorDescription",
    defaultMessage: "If you know what this error means, go ahead and fix it \u2014 otherwise click the delete button above."
  })));
};

/***/ }),

/***/ "./public/management_section/object_view/index.ts":
/*!********************************************************!*\
  !*** ./public/management_section/object_view/index.ts ***!
  \********************************************************/
/*! exports provided: SavedObjectEdition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saved_object_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saved_object_view */ "./public/management_section/object_view/saved_object_view.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectEdition", function() { return _saved_object_view__WEBPACK_IMPORTED_MODULE_0__["SavedObjectEdition"]; });

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

/***/ "./public/management_section/object_view/saved_object_view.tsx":
/*!*********************************************************************!*\
  !*** ./public/management_section/object_view/saved_object_view.tsx ***!
  \*********************************************************************/
/*! exports provided: SavedObjectEdition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedObjectEdition", function() { return SavedObjectEdition; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./public/management_section/object_view/components/index.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "./public/lib/index.ts");
/* harmony import */ var _triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../triggers */ "./public/triggers/index.ts");
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







class SavedObjectEdition extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    _defineProperty(this, "saveChanges", async ({
      attributes,
      references
    }) => {
      const {
        savedObjectsClient,
        notifications
      } = this.props;
      const {
        object,
        type
      } = this.state;
      await savedObjectsClient.update(object.type, object.id, attributes, {
        references
      });
      notifications.toasts.addSuccess(`Updated ${this.formatTitle(object)} ${type} object`);
      this.redirectToListing();
    });
    _defineProperty(this, "formatTitle", object => {
      var _object$attributes$ti, _object$attributes;
      return (_object$attributes$ti = object === null || object === void 0 || (_object$attributes = object.attributes) === null || _object$attributes === void 0 ? void 0 : _object$attributes.title) !== null && _object$attributes$ti !== void 0 ? _object$attributes$ti : '';
    });
    const {
      serviceRegistry,
      serviceName
    } = props;
    const _type = serviceRegistry.get(serviceName).service.type;
    this.state = {
      object: undefined,
      type: _type
    };
  }
  componentDidMount() {
    const {
      id,
      savedObjectsClient
    } = this.props;
    const {
      type
    } = this.state;
    savedObjectsClient.get(type, id).then(object => {
      this.setState({
        object
      });
    });
  }
  render() {
    const {
      application,
      notFoundType,
      serviceRegistry,
      id,
      serviceName,
      savedObjectsClient,
      useUpdatedUX,
      navigationUI
    } = this.props;
    const {
      type
    } = this.state;
    const {
      object
    } = this.state;
    const {
      edit: canEdit,
      delete: canDelete
    } = application.capabilities.savedObjectsManagement;
    const canView = Object(_lib__WEBPACK_IMPORTED_MODULE_4__["canViewInApp"])(application.capabilities, type);
    const service = serviceRegistry.get(serviceName).service;
    const {
      HeaderControl
    } = navigationUI;
    const typeWithFirstLetterToUpperCase = type.charAt(0).toUpperCase() + type.slice(1);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPageContent"], {
      horizontalPosition: "center",
      "data-test-subj": "savedObjectsEdit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      canEdit: canEdit,
      canDelete: canDelete,
      canViewInApp: canView,
      type: type,
      onDeleteClick: () => this.delete(),
      viewUrl: service.urlFor(id),
      useUpdatedUX: useUpdatedUX,
      navigationUI: navigationUI,
      application: application
    }), notFoundType && (useUpdatedUX ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderControl, {
      controls: [{
        renderComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["NotFoundErrors"], {
          type: notFoundType
        })
      }],
      setMountPoint: application.setAppBottomControls
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
      size: "s"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["NotFoundErrors"], {
      type: notFoundType
    }))), canEdit && (useUpdatedUX ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderControl, {
      controls: [{
        renderComponent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Intro"], null)
      }],
      setMountPoint: application.setAppBottomControls
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
      size: "s"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Intro"], null))), object && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, useUpdatedUX ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiTitle"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('savedObjectsManagement.view.form.title', {
      defaultMessage: '{type} details',
      values: {
        type: typeWithFirstLetterToUpperCase
      }
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
      size: "m"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      object: object,
      savedObjectsClient: savedObjectsClient,
      service: service,
      editionEnabled: canEdit,
      onSave: this.saveChanges
    })));
  }
  async delete() {
    var _object$attributes2;
    const {
      id,
      savedObjectsClient,
      overlays,
      notifications
    } = this.props;
    const {
      type,
      object
    } = this.state;
    const confirmed = await overlays.openConfirm(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('savedObjectsManagement.deleteConfirm.modalDescription', {
      defaultMessage: 'This action permanently removes the object from OpenSearch Dashboards.'
    }), {
      confirmButtonText: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('savedObjectsManagement.deleteConfirm.modalDeleteButtonLabel', {
        defaultMessage: 'Delete'
      }),
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('savedObjectsManagement.deleteConfirm.modalTitle', {
        defaultMessage: `Delete '{title}'?`,
        values: {
          title: (object === null || object === void 0 || (_object$attributes2 = object.attributes) === null || _object$attributes2 === void 0 ? void 0 : _object$attributes2.title) || 'saved OpenSearch Dashboards object'
        }
      }),
      buttonColor: 'danger'
    });
    // TODO: This trigger should be maintained and emitted by the saved objects plugin
    // when an obj is deleted. Tracking issue:
    // https://github.com/opensearch-project/OpenSearch-Dashboards/issues/4499
    if (confirmed) {
      this.props.uiActions.getTrigger(_triggers__WEBPACK_IMPORTED_MODULE_5__["SAVED_OBJECT_DELETE_TRIGGER"]).exec({
        type,
        savedObjectId: id
      });
      await savedObjectsClient.delete(type, id);
      notifications.toasts.addSuccess(`Deleted ${this.formatTitle(object)} ${type} object`);
      this.redirectToListing();
    }
  }
  redirectToListing() {
    this.props.history.push('/');
  }
}

/***/ }),

/***/ "./public/management_section/saved_objects_edition_page.tsx":
/*!******************************************************************!*\
  !*** ./public/management_section/saved_objects_edition_page.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SavedObjectsEditionPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "../../../node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _object_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object_view */ "./public/management_section/object_view/index.ts");
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






const SavedObjectsEditionPage = ({
  coreStart,
  uiActionsStart,
  serviceRegistry,
  setBreadcrumbs,
  history,
  useUpdatedUX,
  navigation
}) => {
  const {
    service: serviceName,
    id
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])();
  const {
    search
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  const query = Object(query_string__WEBPACK_IMPORTED_MODULE_2__["parse"])(search);
  const service = serviceRegistry.get(serviceName);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    var _service$service$type;
    setBreadcrumbs([{
      text: useUpdatedUX ? _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.breadcrumb.updatedUX.index', {
        defaultMessage: 'Assets'
      }) : _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.breadcrumb.index', {
        defaultMessage: 'Saved objects'
      }),
      href: '/'
    }, {
      text: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.breadcrumb.edit', {
        defaultMessage: 'Edit {savedObjectType}',
        values: {
          savedObjectType: (_service$service$type = service === null || service === void 0 ? void 0 : service.service.type) !== null && _service$service$type !== void 0 ? _service$service$type : 'object'
        }
      })
    }]);
  }, [setBreadcrumbs, service, useUpdatedUX]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_object_view__WEBPACK_IMPORTED_MODULE_4__["SavedObjectEdition"], {
    id: id,
    serviceName: serviceName,
    serviceRegistry: serviceRegistry,
    savedObjectsClient: coreStart.savedObjects.client,
    overlays: coreStart.overlays,
    notifications: coreStart.notifications,
    uiActions: uiActionsStart,
    notFoundType: query.notFound,
    history: history,
    useUpdatedUX: useUpdatedUX,
    navigationUI: navigation.ui,
    application: coreStart.application
  });
};

// eslint-disable-next-line import/no-default-export


/***/ })

}]);
//# sourceMappingURL=savedObjectsManagement.chunk.1.js.map