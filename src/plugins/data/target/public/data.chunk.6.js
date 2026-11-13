(window["data_bundle_jsonpfunction"] = window["data_bundle_jsonpfunction"] || []).push([[6],{

/***/ "../../../node_modules/classnames/index.js":
/*!**************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/classnames/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./public/ui/typeahead/constants.ts":
/*!******************************************!*\
  !*** ./public/ui/typeahead/constants.ts ***!
  \******************************************/
/*! exports provided: SUGGESTIONS_LIST_REQUIRED_WIDTH, SUGGESTIONS_LIST_REQUIRED_BOTTOM_SPACE, SUGGESTIONS_LIST_REQUIRED_TOP_OFFSET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUGGESTIONS_LIST_REQUIRED_WIDTH", function() { return SUGGESTIONS_LIST_REQUIRED_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUGGESTIONS_LIST_REQUIRED_BOTTOM_SPACE", function() { return SUGGESTIONS_LIST_REQUIRED_BOTTOM_SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUGGESTIONS_LIST_REQUIRED_TOP_OFFSET", function() { return SUGGESTIONS_LIST_REQUIRED_TOP_OFFSET; });
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
 * Minimum width in px to display suggestion description correctly
 * @public
 */
const SUGGESTIONS_LIST_REQUIRED_WIDTH = 600;

/**
 * Minimum bottom distance in px to display list of suggestions
 * @public
 */
const SUGGESTIONS_LIST_REQUIRED_BOTTOM_SPACE = 250;

/**
 * A distance in px to display suggestions list right under the query input without a gap
 * @public
 */
const SUGGESTIONS_LIST_REQUIRED_TOP_OFFSET = 1;

/***/ }),

/***/ "./public/ui/typeahead/suggestion_component.tsx":
/*!******************************************************!*\
  !*** ./public/ui/typeahead/suggestion_component.tsx ***!
  \******************************************************/
/*! exports provided: SuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionComponent", function() { return SuggestionComponent; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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




function getEuiIconType(type) {
  switch (type) {
    case 'field':
      return 'kqlField';
    case 'value':
      return 'kqlValue';
    case 'recentSearch':
      return 'search';
    case 'conjunction':
      return 'kqlSelector';
    case 'operator':
      return 'kqlOperand';
    default:
      throw new Error(`Unknown type: ${type}`);
  }
}
function SuggestionComponent(props) {
  // Removing empty suggestions from the history is for maintaining a clean user experience.
  // Empty suggestions, which typically result from inadvertent keystrokes or incomplete queries,
  // do not provide value to the user.
  if (!props.suggestion.text.trim()) {
    return null;
  }
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        osdTypeahead__item: true,
        active: props.selected
      }),
      role: "option",
      onClick: () => props.onClick(props.suggestion),
      onMouseEnter: props.onMouseEnter,
      ref: props.innerRef,
      id: props.ariaId,
      "aria-selected": props.selected,
      "data-test-subj": `autocompleteSuggestion-${props.suggestion.type}-${props.suggestion.text.replace(/\s/g, '-')}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: 'osdSuggestionItem osdSuggestionItem--' + props.suggestion.type
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "osdSuggestionItem__type",
      "data-test-subj": "osdSuggestionType"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiIcon"], {
      type: getEuiIconType(props.suggestion.type)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "osdSuggestionItem__text",
      "data-test-subj": "autoCompleteSuggestionText"
    }, props.suggestion.text), props.shouldDisplayDescription && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "osdSuggestionItem__description",
      "data-test-subj": "osdSuggestionDescription"
    }, props.suggestion.description)))
  );
}

/***/ }),

/***/ "./public/ui/typeahead/suggestions_component.tsx":
/*!*******************************************************!*\
  !*** ./public/ui/typeahead/suggestions_component.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SuggestionsComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _suggestion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./suggestion_component */ "./public/ui/typeahead/suggestion_component.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./public/ui/typeahead/constants.ts");
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








// @internal

// Needed for React.lazy
// eslint-disable-next-line import/no-default-export
class SuggestionsComponent extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "childNodes", []);
    _defineProperty(this, "parentNode", null);
    _defineProperty(this, "scrollIntoView", () => {
      if (this.props.index === null) {
        return;
      }
      const parent = this.parentNode;
      const child = this.childNodes[this.props.index];
      if (this.props.index == null || !parent || !child) {
        return;
      }
      const scrollTop = Math.max(Math.min(parent.scrollTop, child.offsetTop), child.offsetTop + child.offsetHeight - parent.offsetHeight);
      parent.scrollTop = scrollTop;
    });
    _defineProperty(this, "handleScroll", () => {
      if (!this.props.loadMore || !this.parentNode) {
        return;
      }
      const position = this.parentNode.scrollTop + this.parentNode.offsetHeight;
      const height = this.parentNode.scrollHeight;
      const remaining = height - position;
      const margin = 50;
      if (!height || !position) {
        return;
      }
      if (remaining <= margin) {
        this.props.loadMore();
      }
    });
  }
  render() {
    if (!this.props.queryBarRect || !this.props.show || Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(this.props.suggestions)) {
      return null;
    }
    const suggestions = this.props.suggestions.map((suggestion, index) => {
      const isDescriptionFittable = this.props.queryBarRect.width >= _constants__WEBPACK_IMPORTED_MODULE_5__["SUGGESTIONS_LIST_REQUIRED_WIDTH"];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_suggestion_component__WEBPACK_IMPORTED_MODULE_4__["SuggestionComponent"], {
        innerRef: node => this.childNodes[index] = node,
        selected: index === this.props.index,
        suggestion: suggestion,
        onClick: this.props.onClick,
        onMouseEnter: () => this.props.onMouseEnter(index),
        ariaId: 'suggestion-' + index,
        key: `${suggestion.type} - ${suggestion.text}`,
        shouldDisplayDescription: isDescriptionFittable
      });
    });
    const documentHeight = document.documentElement.clientHeight || window.innerHeight;
    const {
      queryBarRect
    } = this.props;

    // reflects if the suggestions list has enough space below to be opened down
    const isSuggestionsListFittable = documentHeight - (queryBarRect.top + queryBarRect.height) > _constants__WEBPACK_IMPORTED_MODULE_5__["SUGGESTIONS_LIST_REQUIRED_BOTTOM_SPACE"];
    const verticalListPosition = isSuggestionsListFittable ? `top: ${window.scrollY + queryBarRect.bottom - _constants__WEBPACK_IMPORTED_MODULE_5__["SUGGESTIONS_LIST_REQUIRED_TOP_OFFSET"]}px;` : `bottom: ${documentHeight - (window.scrollY + queryBarRect.top)}px;`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSuggestionsListDiv, {
      queryBarRect: queryBarRect,
      verticalListPosition: verticalListPosition
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('osdTypeahead', {
        'osdTypeahead--small': this.props.size === 's'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('osdTypeahead__popover', {
        ['osdTypeahead__popover--bottom']: isSuggestionsListFittable,
        ['osdTypeahead__popover--top']: !isSuggestionsListFittable
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "osdTypeahead__items",
      role: "listbox",
      ref: node => this.parentNode = node,
      onScroll: this.handleScroll
    }, suggestions))));
  }
  componentDidUpdate(prevProps) {
    if (prevProps.index !== this.props.index) {
      this.scrollIntoView();
    }
  }
}
const StyledSuggestionsListDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "StyledSuggestionsListDiv",
  componentId: "sc-b1tlry-0"
})(["", ""], props => `
      position: absolute;
      z-index: 4001;
      left: ${props.queryBarRect.left}px;
      width: ${props.queryBarRect.width}px;
      ${props.verticalListPosition}`);

/***/ })

}]);
//# sourceMappingURL=data.chunk.6.js.map