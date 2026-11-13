(window["advancedSettings_bundle_jsonpfunction"] = window["advancedSettings_bundle_jsonpfunction"] || []).push([[0],{

/***/ "./public/management_app/components/field/field.tsx":
/*!**********************************************************!*\
  !*** ./public/management_app/components/field/field.tsx ***!
  \**********************************************************/
/*! exports provided: getEditableValue, Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditableValue", function() { return getEditableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var brace_theme_textmate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! brace/theme/textmate */ "../../../node_modules/brace/theme/textmate.js");
/* harmony import */ var brace_theme_textmate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(brace_theme_textmate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brace_mode_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! brace/mode/markdown */ "../../../node_modules/brace/mode/markdown.js");
/* harmony import */ var brace_mode_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brace_mode_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var brace_mode_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! brace/mode/json */ "../../../node_modules/brace/mode/json.js");
/* harmony import */ var brace_mode_json__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(brace_mode_json__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib */ "./public/management_app/lib/index.ts");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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










const getEditableValue = (type, value, defVal) => {
  const val = value === null || value === undefined ? defVal : value;
  switch (type) {
    case 'array':
      return val.join(', ');
    case 'boolean':
      return !!val;
    case 'number':
      return Number(val);
    case 'image':
      return val;
    default:
      return val || '';
  }
};
class Field extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "changeImageForm", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());
    _defineProperty(this, "handleChange", unsavedChanges => {
      this.props.handleChange(this.props.setting.name, unsavedChanges);
    });
    _defineProperty(this, "resetField", () => {
      const {
        type,
        defVal
      } = this.props.setting;
      if (type === 'image') {
        this.cancelChangeImage();
        return this.handleChange({
          value: getEditableValue(type, defVal),
          changeImage: true
        });
      }
      return this.handleChange({
        value: getEditableValue(type, defVal)
      });
    });
    _defineProperty(this, "onCodeEditorChange", value => {
      const {
        defVal,
        type
      } = this.props.setting;
      let newUnsavedValue;
      let errorParams = {};
      switch (type) {
        case 'json':
          const isJsonArray = Array.isArray(JSON.parse(defVal || '{}'));
          newUnsavedValue = value.trim() || (isJsonArray ? '[]' : '{}');
          try {
            JSON.parse(newUnsavedValue);
          } catch (e) {
            errorParams = {
              error: _osd_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('advancedSettings.field.codeEditorSyntaxErrorMessage', {
                defaultMessage: 'Invalid JSON syntax'
              }),
              isInvalid: true
            };
          }
          break;
        default:
          newUnsavedValue = value;
      }
      this.handleChange({
        value: newUnsavedValue,
        ...errorParams
      });
    });
    _defineProperty(this, "onFieldChangeSwitch", e => {
      return this.onFieldChange(e.target.checked);
    });
    _defineProperty(this, "onFieldChangeEvent", e => this.onFieldChange(e.target.value));
    _defineProperty(this, "onFieldChange", targetValue => {
      const {
        type,
        validation,
        value,
        defVal
      } = this.props.setting;
      let newUnsavedValue;
      switch (type) {
        case 'boolean':
          const {
            unsavedChanges
          } = this.props;
          const currentValue = unsavedChanges ? unsavedChanges.value : getEditableValue(type, value, defVal);
          newUnsavedValue = !currentValue;
          break;
        case 'number':
          newUnsavedValue = Number(targetValue);
          break;
        default:
          newUnsavedValue = targetValue;
      }
      let errorParams = {};
      if (validation !== null && validation !== void 0 && validation.regex) {
        if (!validation.regex.test(newUnsavedValue.toString())) {
          errorParams = {
            error: validation.message,
            isInvalid: true
          };
        }
      }
      this.handleChange({
        value: newUnsavedValue,
        ...errorParams
      });
    });
    _defineProperty(this, "onImageChange", async files => {
      if (files == null) return;
      if (!files.length) {
        this.setState({
          unsavedValue: null
        });
        return;
      }
      const file = files[0];
      const {
        maxSize
      } = this.props.setting.validation;
      try {
        let base64Image = '';
        if (file instanceof File) {
          base64Image = await this.getImageAsBase64(file);
        }
        let errorParams = {};
        const isInvalid = !!(maxSize !== null && maxSize !== void 0 && maxSize.length && base64Image.length > maxSize.length);
        if (isInvalid) {
          errorParams = {
            isInvalid,
            error: _osd_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('advancedSettings.field.imageTooLargeErrorMessage', {
              defaultMessage: 'Image is too large, maximum size is {maxSizeDescription}',
              values: {
                maxSizeDescription: maxSize.description
              }
            })
          };
        }
        this.handleChange({
          changeImage: true,
          value: base64Image,
          ...errorParams
        });
      } catch (err) {
        this.props.toasts.addDanger(_osd_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('advancedSettings.field.imageChangeErrorMessage', {
          defaultMessage: 'Image could not be saved'
        }));
        this.cancelChangeImage();
      }
    });
    _defineProperty(this, "changeImage", () => {
      this.handleChange({
        value: null,
        changeImage: true
      });
    });
    _defineProperty(this, "cancelChangeImage", () => {
      var _this$changeImageForm;
      if ((_this$changeImageForm = this.changeImageForm.current) !== null && _this$changeImageForm !== void 0 && _this$changeImageForm.fileInput) {
        this.changeImageForm.current.fileInput.value = '';
        this.changeImageForm.current.handleChange();
      }
      if (this.props.clearChange) {
        this.props.clearChange(this.props.setting.name);
      }
    });
  }
  getDisplayedDefaultValue(type, defVal, optionLabels = {}) {
    if (defVal === undefined || defVal === null || defVal === '') {
      return 'null';
    }
    switch (type) {
      case 'array':
        return defVal.join(', ');
      case 'select':
        return optionLabels.hasOwnProperty(String(defVal)) ? optionLabels[String(defVal)] : String(defVal);
      default:
        return String(defVal);
    }
  }
  componentDidUpdate(prevProps) {
    var _prevProps$unsavedCha, _this$props$unsavedCh;
    if (prevProps.setting.type === 'image' && (_prevProps$unsavedCha = prevProps.unsavedChanges) !== null && _prevProps$unsavedCha !== void 0 && _prevProps$unsavedCha.value && !((_this$props$unsavedCh = this.props.unsavedChanges) !== null && _this$props$unsavedCh !== void 0 && _this$props$unsavedCh.value)) {
      this.cancelChangeImage();
    }
  }
  async getImageAsBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve, reject) => {
      reader.onload = () => {
        resolve(reader.result || undefined);
      };
      reader.onerror = err => {
        reject(err);
      };
    });
  }
  renderField(setting, ariaDescribedBy) {
    const {
      enableSaving,
      unsavedChanges,
      loading
    } = this.props;
    const {
      name,
      value,
      type,
      options,
      optionLabels = {},
      isOverridden,
      defVal,
      ariaName
    } = setting;
    const a11yProps = ariaDescribedBy ? {
      'aria-label': ariaName,
      'aria-describedby': ariaDescribedBy
    } : {
      'aria-label': ariaName
    };
    const currentValue = unsavedChanges ? unsavedChanges.value : getEditableValue(type, value, defVal);
    switch (type) {
      case 'boolean':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiCompressedSwitch"], _extends({
          label: !!currentValue ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
            id: "advancedSettings.field.onLabel",
            defaultMessage: "On"
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
            id: "advancedSettings.field.offLabel",
            defaultMessage: "Off"
          }),
          checked: !!currentValue,
          onChange: this.onFieldChangeSwitch,
          disabled: loading || isOverridden || !enableSaving,
          "data-test-subj": `advancedSetting-editField-${name}`
        }, a11yProps));
      case 'markdown':
      case 'json':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          "data-test-subj": `advancedSetting-editField-${name}`
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiCodeEditor"], _extends({}, a11yProps, {
          mode: type,
          theme: "textmate",
          value: currentValue,
          onChange: this.onCodeEditorChange,
          width: "100%",
          height: "auto",
          minLines: 6,
          maxLines: 30,
          isReadOnly: isOverridden || !enableSaving,
          setOptions: {
            showLineNumbers: false,
            tabSize: 2
          },
          editorProps: {
            $blockScrolling: Infinity
          },
          showGutter: false
        })));
      case 'image':
        const changeImage = unsavedChanges === null || unsavedChanges === void 0 ? void 0 : unsavedChanges.changeImage;
        if (!Object(_lib__WEBPACK_IMPORTED_MODULE_8__["isDefaultValue"])(setting) && !changeImage) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiImage"], _extends({}, a11yProps, {
            allowFullScreen: true,
            url: value,
            alt: name
          }));
        } else {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiCompressedFilePicker"], {
            disabled: loading || isOverridden || !enableSaving,
            onChange: this.onImageChange,
            accept: ".jpg,.jpeg,.png",
            ref: this.changeImageForm,
            fullWidth: true,
            "data-test-subj": `advancedSetting-editField-${name}`,
            "aria-label": name
          });
        }
      case 'select':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiCompressedSelect"], _extends({}, a11yProps, {
          value: currentValue,
          options: options.map(option => {
            return {
              text: optionLabels.hasOwnProperty(option) ? optionLabels[option] : option,
              value: option
            };
          }),
          onChange: this.onFieldChangeEvent,
          isLoading: loading,
          disabled: loading || isOverridden || !enableSaving,
          fullWidth: true,
          "data-test-subj": `advancedSetting-editField-${name}`
        }));
      case 'number':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiCompressedFieldNumber"], _extends({}, a11yProps, {
          value: currentValue,
          onChange: this.onFieldChangeEvent,
          isLoading: loading,
          disabled: loading || isOverridden || !enableSaving,
          fullWidth: true,
          "data-test-subj": `advancedSetting-editField-${name}`
        }));
      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiCompressedFieldText"], _extends({}, a11yProps, {
          value: currentValue,
          onChange: this.onFieldChangeEvent,
          isLoading: loading,
          disabled: loading || isOverridden || !enableSaving,
          fullWidth: true,
          "data-test-subj": `advancedSetting-editField-${name}`
        }));
    }
  }
  renderLabel(setting) {
    return setting.name;
  }
  renderHelpText(setting) {
    if (setting.isOverridden) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiText"], {
        size: "xs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "advancedSettings.field.helpText",
        defaultMessage: "This setting is overridden by the OpenSearch Dashboards server and can not be changed."
      }));
    }
    const canUpdateSetting = this.props.enableSaving;
    const defaultLink = this.renderResetToDefaultLink(setting);
    const imageLink = this.renderChangeImageLink(setting);
    if (canUpdateSetting && (defaultLink || imageLink)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, defaultLink, imageLink);
    }
    return null;
  }
  renderTitle(setting) {
    const {
      unsavedChanges
    } = this.props;
    const isInvalid = unsavedChanges === null || unsavedChanges === void 0 ? void 0 : unsavedChanges.isInvalid;
    const unsavedIconLabel = unsavedChanges ? isInvalid ? _osd_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('advancedSettings.field.invalidIconLabel', {
      defaultMessage: 'Invalid'
    }) : _osd_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('advancedSettings.field.unsavedIconLabel', {
      defaultMessage: 'Unsaved'
    }) : undefined;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mgtAdvancedSettings__fieldTitle"
    }, setting.displayName || setting.name), setting.isCustom ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiIconTip"], {
      type: "asterisk",
      color: "primary",
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('advancedSettings.field.customSettingAriaLabel', {
        defaultMessage: 'Custom setting'
      }),
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "advancedSettings.field.customSettingTooltip",
        defaultMessage: "Custom setting"
      })
    }) : '', unsavedChanges ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiIconTip"], {
      anchorClassName: "mgtAdvancedSettings__fieldTitleUnsavedIcon",
      type: isInvalid ? 'alert' : 'dot',
      color: isInvalid ? 'danger' : 'warning',
      "aria-label": unsavedIconLabel,
      content: unsavedIconLabel
    }) : '');
  }
  renderDescription(setting) {
    let description;
    let deprecation;
    if (setting.deprecation) {
      const links = this.props.dockLinks;
      deprecation = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiToolTip"], {
        content: setting.deprecation.message
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiBadge"], {
        color: "warning",
        onClick: () => {
          window.open(links.noDocumentation.management[setting.deprecation.docLinksKey], '_blank');
        },
        onClickAriaLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('advancedSettings.field.deprecationClickAreaLabel', {
          defaultMessage: 'Click to view deprecation documentation for {settingName}.',
          values: {
            settingName: setting.name
          }
        })
      }, "Deprecated")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiSpacer"], {
        size: "s"
      }));
    }
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(setting.description)) {
      description = setting.description;
    } else {
      description = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        /*
         * Justification for dangerouslySetInnerHTML:
         * Setting description may contain formatting and links to documentation.
         */
        dangerouslySetInnerHTML: {
          __html: setting.description || ''
        } // eslint-disable-line react/no-danger
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, deprecation, description, this.renderDefaultValue(setting));
  }
  renderDefaultValue(setting) {
    const {
      type,
      defVal,
      optionLabels
    } = setting;
    if (Object(_lib__WEBPACK_IMPORTED_MODULE_8__["isDefaultValue"])(setting)) {
      return;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiSpacer"], {
      size: "s"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiText"], {
      size: "xs"
    }, type === 'json' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
      id: "advancedSettings.field.defaultValueTypeJsonText",
      defaultMessage: "Default: {value}",
      values: {
        value: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiCodeBlock"], {
          language: "json",
          paddingSize: "s",
          overflowHeight: defVal.length >= 500 ? 300 : undefined
        }, this.getDisplayedDefaultValue(type, defVal))
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
      id: "advancedSettings.field.defaultValueText",
      defaultMessage: "Default: {value}",
      values: {
        value: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiCode"], null, this.getDisplayedDefaultValue(type, defVal, optionLabels))
      }
    }))));
  }
  renderResetToDefaultLink(setting) {
    var _this$props$unsavedCh2;
    const {
      defVal,
      ariaName,
      name
    } = setting;
    if (defVal === ((_this$props$unsavedCh2 = this.props.unsavedChanges) === null || _this$props$unsavedCh2 === void 0 ? void 0 : _this$props$unsavedCh2.value) || Object(_lib__WEBPACK_IMPORTED_MODULE_8__["isDefaultValue"])(setting) || this.props.loading) {
      return;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiLink"], {
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('advancedSettings.field.resetToDefaultLinkAriaLabel', {
        defaultMessage: 'Reset {ariaName} to default',
        values: {
          ariaName
        }
      }),
      onClick: this.resetField,
      "data-test-subj": `advancedSetting-resetField-${name}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
      id: "advancedSettings.field.resetToDefaultLinkText",
      defaultMessage: "Reset to default"
    })), "\xA0\xA0\xA0");
  }
  renderChangeImageLink(setting) {
    var _this$props$unsavedCh3;
    const changeImage = (_this$props$unsavedCh3 = this.props.unsavedChanges) === null || _this$props$unsavedCh3 === void 0 ? void 0 : _this$props$unsavedCh3.changeImage;
    const {
      type,
      value,
      ariaName,
      name
    } = setting;
    if (type !== 'image' || !value || changeImage) {
      return;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiLink"], {
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('advancedSettings.field.changeImageLinkAriaLabel', {
        defaultMessage: 'Change {ariaName}',
        values: {
          ariaName
        }
      }),
      onClick: this.changeImage,
      "data-test-subj": `advancedSetting-changeImage-${name}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
      id: "advancedSettings.field.changeImageLinkText",
      defaultMessage: "Change image"
    })));
  }
  render() {
    const {
      setting,
      unsavedChanges
    } = this.props;
    const error = unsavedChanges === null || unsavedChanges === void 0 ? void 0 : unsavedChanges.error;
    const isInvalid = unsavedChanges === null || unsavedChanges === void 0 ? void 0 : unsavedChanges.isInvalid;
    const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()('mgtAdvancedSettings__field', {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'mgtAdvancedSettings__field--unsaved': unsavedChanges,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'mgtAdvancedSettings__field--invalid': isInvalid
    });
    const groupId = `${setting.name}-group`;
    const unsavedId = `${setting.name}-unsaved`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiDescribedFormGroup"], {
      id: groupId,
      className: className,
      title: this.renderTitle(setting),
      description: this.renderDescription(setting),
      fullWidth: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiCompressedFormRow"], {
      isInvalid: isInvalid,
      error: error,
      label: this.renderLabel(setting),
      helpText: this.renderHelpText(setting),
      className: "mgtAdvancedSettings__fieldRow",
      hasChildLabel: setting.type !== 'boolean',
      fullWidth: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.renderField(setting, unsavedChanges ? `${groupId} ${unsavedId}` : undefined), unsavedChanges && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiScreenReaderOnly"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      id: `${unsavedId}`
    }, unsavedChanges.error ? unsavedChanges.error : _osd_i18n__WEBPACK_IMPORTED_MODULE_6__["i18n"].translate('advancedSettings.field.settingIsUnsaved', {
      defaultMessage: 'Setting is currently not saved.'
    }))))));
  }
}

/***/ }),

/***/ "./public/management_app/components/field/index.ts":
/*!*********************************************************!*\
  !*** ./public/management_app/components/field/index.ts ***!
  \*********************************************************/
/*! exports provided: Field, getEditableValue, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field */ "./public/management_app/components/field/field.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return _field__WEBPACK_IMPORTED_MODULE_0__["Field"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEditableValue", function() { return _field__WEBPACK_IMPORTED_MODULE_0__["getEditableValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _field__WEBPACK_IMPORTED_MODULE_0__["Field"]; });

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



// eslint-disable-next-line import/no-default-export


/***/ }),

/***/ "./public/management_app/lib/default_category.ts":
/*!*******************************************************!*\
  !*** ./public/management_app/lib/default_category.ts ***!
  \*******************************************************/
/*! exports provided: DEFAULT_CATEGORY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CATEGORY", function() { return DEFAULT_CATEGORY; });
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

const DEFAULT_CATEGORY = 'general';

/***/ }),

/***/ "./public/management_app/lib/get_aria_name.ts":
/*!****************************************************!*\
  !*** ./public/management_app/lib/get_aria_name.ts ***!
  \****************************************************/
/*! exports provided: getAriaName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAriaName", function() { return getAriaName; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
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
 * @name {string} the name of the configuration object
 * @returns {string} a space delimited, lowercase string with
 *          special characters removed.
 *
 * Example: 'doc_table:highlight' -> 'doc table highlight'
 */
function getAriaName(name) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["words"])(name || '').map(word => word.toLowerCase()).join(' ');
}

/***/ }),

/***/ "./public/management_app/lib/get_category_name.ts":
/*!********************************************************!*\
  !*** ./public/management_app/lib/get_category_name.ts ***!
  \********************************************************/
/*! exports provided: getCategoryName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryName", function() { return getCategoryName; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
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


const upperFirst = (str = '') => str.replace(/^./, strng => strng.toUpperCase());
const names = {
  general: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('advancedSettings.categoryNames.generalLabel', {
    defaultMessage: 'General'
  }),
  appearance: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('advancedSettings.categoryNames.appearanceLabel', {
    defaultMessage: 'Appearance'
  }),
  timeline: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('advancedSettings.categoryNames.timelineLabel', {
    defaultMessage: 'Timeline'
  }),
  notifications: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('advancedSettings.categoryNames.notificationsLabel', {
    defaultMessage: 'Notifications'
  }),
  visualizations: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('advancedSettings.categoryNames.visualizationsLabel', {
    defaultMessage: 'Visualizations'
  }),
  visbuilder: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('advancedSettings.categoryNames.visbuilderLabel', {
    defaultMessage: 'VisBuilder'
  }),
  discover: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('advancedSettings.categoryNames.discoverLabel', {
    defaultMessage: 'Discover'
  }),
  dashboard: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('advancedSettings.categoryNames.dashboardLabel', {
    defaultMessage: 'Dashboard'
  }),
  reporting: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('advancedSettings.categoryNames.reportingLabel', {
    defaultMessage: 'Reporting'
  }),
  search: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('advancedSettings.categoryNames.searchLabel', {
    defaultMessage: 'Search'
  }),
  securitySolution: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('advancedSettings.categoryNames.securitySolutionLabel', {
    defaultMessage: 'Security Solution'
  })
};
function getCategoryName(category) {
  return category ? names[category] || upperFirst(category) : '';
}

/***/ }),

/***/ "./public/management_app/lib/get_val_type.ts":
/*!***************************************************!*\
  !*** ./public/management_app/lib/get_val_type.ts ***!
  \***************************************************/
/*! exports provided: getValType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValType", function() { return getValType; });
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
 * @param {object} advanced setting definition object
 * @param {?} current value of the setting
 * @returns {string} the type to use for determining the display and editor
 */

function getValType(def, value) {
  if (def.type) {
    return def.type;
  }
  if (Array.isArray(value) || Array.isArray(def.value)) {
    return 'array';
  }
  const typeofVal = def.value != null ? typeof def.value : typeof value;
  if (typeofVal === 'bigint') {
    return 'number';
  }
  if (typeofVal === 'symbol' || typeofVal === 'object' || typeofVal === 'function') {
    throw new Error(`incompatible UiSettingsType: '${def.name}' type ${typeofVal} | ${JSON.stringify(def)}`);
  }
  return typeofVal;
}

/***/ }),

/***/ "./public/management_app/lib/index.ts":
/*!********************************************!*\
  !*** ./public/management_app/lib/index.ts ***!
  \********************************************/
/*! exports provided: isDefaultValue, toEditableConfig, getCategoryName, DEFAULT_CATEGORY, getAriaName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is_default_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is_default_value */ "./public/management_app/lib/is_default_value.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefaultValue", function() { return _is_default_value__WEBPACK_IMPORTED_MODULE_0__["isDefaultValue"]; });

/* harmony import */ var _to_editable_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to_editable_config */ "./public/management_app/lib/to_editable_config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toEditableConfig", function() { return _to_editable_config__WEBPACK_IMPORTED_MODULE_1__["toEditableConfig"]; });

/* harmony import */ var _get_category_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get_category_name */ "./public/management_app/lib/get_category_name.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCategoryName", function() { return _get_category_name__WEBPACK_IMPORTED_MODULE_2__["getCategoryName"]; });

/* harmony import */ var _default_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default_category */ "./public/management_app/lib/default_category.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CATEGORY", function() { return _default_category__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_CATEGORY"]; });

/* harmony import */ var _get_aria_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get_aria_name */ "./public/management_app/lib/get_aria_name.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAriaName", function() { return _get_aria_name__WEBPACK_IMPORTED_MODULE_4__["getAriaName"]; });

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

/***/ "./public/management_app/lib/is_default_value.ts":
/*!*******************************************************!*\
  !*** ./public/management_app/lib/is_default_value.ts ***!
  \*******************************************************/
/*! exports provided: isDefaultValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefaultValue", function() { return isDefaultValue; });
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

function isDefaultValue(setting) {
  return setting.isCustom || setting.value === undefined || setting.value === '' || String(setting.value) === String(setting.defVal);
}

/***/ }),

/***/ "./public/management_app/lib/to_editable_config.ts":
/*!*********************************************************!*\
  !*** ./public/management_app/lib/to_editable_config.ts ***!
  \*********************************************************/
/*! exports provided: toEditableConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toEditableConfig", function() { return toEditableConfig; });
/* harmony import */ var _get_val_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_val_type */ "./public/management_app/lib/get_val_type.ts");
/* harmony import */ var _get_aria_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_aria_name */ "./public/management_app/lib/get_aria_name.ts");
/* harmony import */ var _default_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default_category */ "./public/management_app/lib/default_category.ts");
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
 * @param {object} advanced setting definition object
 * @param {object} name of setting
 * @param {object} current value of setting
 * @returns {object} the editable config object
 */
function toEditableConfig({
  def,
  name,
  value,
  isCustom,
  isOverridden
}) {
  if (!def) {
    def = {};
  }
  const validationTyped = def.validation;
  const conf = {
    name,
    displayName: def.name || name,
    ariaName: def.name || Object(_get_aria_name__WEBPACK_IMPORTED_MODULE_1__["getAriaName"])(name),
    value,
    category: def.category && def.category.length ? def.category : [_default_category__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CATEGORY"]],
    isCustom,
    isOverridden,
    readonly: !!def.readonly,
    defVal: def.value,
    type: Object(_get_val_type__WEBPACK_IMPORTED_MODULE_0__["getValType"])(def, value),
    description: def.description,
    deprecation: def.deprecation,
    validation: validationTyped && validationTyped.regexString ? {
      regex: new RegExp(validationTyped.regexString),
      message: validationTyped.message
    } : def.validation,
    options: def.options,
    optionLabels: def.optionLabels,
    requiresPageReload: !!def.requiresPageReload
  };
  return conf;
}

/***/ })

}]);
//# sourceMappingURL=advancedSettings.chunk.0.js.map