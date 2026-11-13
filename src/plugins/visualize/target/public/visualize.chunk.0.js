(window["visualize_bundle_jsonpfunction"] = window["visualize_bundle_jsonpfunction"] || []).push([[0],{

/***/ "../../../node_modules/@xobotyi/scrollbar-width/dist/index.js":
/*!*********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/@xobotyi/scrollbar-width/dist/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var e=function(t){if("undefined"==typeof document)return 0;if(document.body&&(!document.readyState||"loading"!==document.readyState)){if(!0!==t&&"number"==typeof e.__cache)return e.__cache;var o=document.createElement("div"),d=o.style;d.display="block",d.position="absolute",d.width="100px",d.height="100px",d.left="-999px",d.top="-999px",d.overflow="scroll",document.body.insertBefore(o,null);var r=o.clientWidth;if(0!==r)return e.__cache=100-r,document.body.removeChild(o),e.__cache;document.body.removeChild(o)}};exports.scrollbarWidth=e;


/***/ }),

/***/ "../../../node_modules/copy-to-clipboard/index.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/copy-to-clipboard/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "../../../node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/runtime/api.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/runtime/api.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!********************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "../../../node_modules/decode-uri-component/index.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/decode-uri-component/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp('(' + token + ')|([^%]+?)', 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return [decodeURIComponent(components.join(''))];
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher) || [];

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher) || [];
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "../../../node_modules/fast-deep-equal/react.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/fast-deep-equal/react.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "../../../node_modules/fast-shallow-equal/index.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/fast-shallow-equal/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var keyList = Object.keys;

exports.equal = function equal (a, b) {
  if (a === b) return true;
  if (!(a instanceof Object) || !(b instanceof Object)) return false;

  var keys = keyList(a);
  var length = keys.length;

  for (var i = 0; i < length; i++)
    if (!(keys[i] in b)) return false;

  for (var i = 0; i < length; i++)
    if (a[keys[i]] !== b[keys[i]]) return false;

  return length === keyList(b).length;
};


/***/ }),

/***/ "../../../node_modules/filter-obj/index.js":
/*!**************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/filter-obj/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (obj, predicate) {
	var ret = {};
	var keys = Object.keys(obj);
	var isArr = Array.isArray(predicate);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = obj[key];

		if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
			ret[key] = val;
		}
	}

	return ret;
};


/***/ }),

/***/ "../../../node_modules/js-cookie/src/js.cookie.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/js-cookie/src/js.cookie.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "../../../node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js":
/*!**********************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pkgName = 'nano-css';

module.exports = function warnOnMissingDependencies (addon, renderer, deps) {
    var missing = [];

    for (var i = 0; i < deps.length; i++) {
        var name = deps[i];

        if (!renderer[name]) {
            missing.push(name);
        }
    }

    if (missing.length) {
        var str = 'Addon "' + addon + '" is missing the following dependencies:';

        for (var j = 0; j < missing.length; j++) {
            str += '\n require("' + pkgName + '/addon/' + missing[j] + '").addon(nano);';
        }

        throw new Error(str);
    }
};


/***/ }),

/***/ "../../../node_modules/nano-css/addon/cssom.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/addon/cssom.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.addon = function (renderer) {
    // CSSOM support only browser environment.
    if (!renderer.client) return;

    if (true) {
        __webpack_require__(/*! ./__dev__/warnOnMissingDependencies */ "../../../node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js")('cssom', renderer, ['sh']);
    }

    // Style sheet for media queries.
    document.head.appendChild(renderer.msh = document.createElement('style'));

    renderer.createRule = function (selector, prelude) {
        var rawCss = selector + '{}';
        if (prelude) rawCss = prelude + '{' + rawCss + '}';
        var sheet = prelude ? renderer.msh.sheet : renderer.sh.sheet;
        var index = sheet.insertRule(rawCss, sheet.cssRules.length);
        var rule = (sheet.cssRules || sheet.rules)[index];

        // Keep track of `index` where rule was inserted in the sheet. This is
        // needed for rule deletion.
        rule.index = index;

        if (prelude) {
            // If rule has media query (it has prelude), move style (CSSStyleDeclaration)
            // object to the "top" to normalize it with a rule without the media
            // query, so that both rules have `.style` property available.
            var selectorRule = (rule.cssRules || rule.rules)[0];
            rule.style = selectorRule.style;
            rule.styleMap = selectorRule.styleMap;
        }

        return rule;
    };
};


/***/ }),

/***/ "../../../node_modules/nano-css/addon/vcssom.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/addon/vcssom.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var removeRule = __webpack_require__(/*! ./vcssom/removeRule */ "../../../node_modules/nano-css/addon/vcssom/removeRule.js").removeRule;

exports.addon = function (renderer) {
    // VCSSOM support only browser environment.
    if (!renderer.client) return;

    if (true) {
        __webpack_require__(/*! ./__dev__/warnOnMissingDependencies */ "../../../node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js")('cssom', renderer, ['createRule']); // cssom
    }

    var kebab = renderer.kebab;

    function VRule (selector, prelude) {
        this.rule = renderer.createRule(selector, prelude);
        this.decl = {};
    }
    VRule.prototype.diff = function (newDecl) {
        var oldDecl = this.decl;
        var style = this.rule.style;
        var property;
        for (property in oldDecl)
            if (newDecl[property] === undefined)
                style.removeProperty(property);
        for (property in newDecl)
            if (newDecl[property] !== oldDecl[property])
                style.setProperty(kebab(property), newDecl[property]);
        this.decl = newDecl;
    };
    VRule.prototype.del = function () {
        removeRule(this.rule);
    };

    function VSheet () {
        /**
         * {
         *   '<at-rule-prelude>': {
         *     '<selector>': {
         *       color: 'red
         *     }
         *   }
         * }
         */
        this.tree = {};
    }
    VSheet.prototype.diff = function (newTree) {
        var oldTree = this.tree;

        // Remove media queries not present in new tree.
        for (var prelude in oldTree) {
            if (newTree[prelude] === undefined) {
                var rules = oldTree[prelude];
                for (var selector in rules)
                    rules[selector].del();
            }
        }

        for (var prelude in newTree) {
            if (oldTree[prelude] === undefined) {
                // Whole media query is new.
                for (var selector in newTree[prelude]) {
                    var rule = new VRule(selector, prelude);
                    rule.diff(newTree[prelude][selector]);
                    newTree[prelude][selector] = rule;
                }
            } else {
                // Old tree already has rules with this media query.
                var oldRules = oldTree[prelude];
                var newRules = newTree[prelude];

                // Remove rules not present in new tree.
                for (var selector in oldRules)
                    if (!newRules[selector])
                        oldRules[selector].del();

                // Apply new rules.
                for (var selector in newRules) {
                    var rule = oldRules[selector];
                    if (rule) {
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    } else {
                        rule = new VRule(selector, prelude);
                        rule.diff(newRules[selector]);
                        newRules[selector] = rule;
                    }
                }
            }
        }

        this.tree = newTree;
    };

    renderer.VRule = VRule;
    renderer.VSheet = VSheet;
};


/***/ }),

/***/ "../../../node_modules/nano-css/addon/vcssom/cssToTree.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/addon/vcssom/cssToTree.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function cssToTree (tree, css, selector, prelude) {
    var declarations = {};
    var hasDeclarations = false;
    var key, value;

    for (key in css) {
        value = css[key];
        if (typeof value !== 'object') {
            hasDeclarations = true;
            declarations[key] = value;
        }
    }

    if (hasDeclarations) {
        if (!tree[prelude]) tree[prelude] = {};
        tree[prelude][selector] = declarations;
    }

    for (key in css) {
        value = css[key];
        if (typeof value === 'object') {
            if (key[0] === '@') {
                cssToTree(tree, value, selector, key);
            } else {
                var hasCurrentSymbol = key.indexOf('&') > -1;
                var selectorParts = selector.split(',');
                if (hasCurrentSymbol) {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = key.replace(/&/g, selectorParts[i]);
                    }
                } else {
                    for (var i = 0; i < selectorParts.length; i++) {
                        selectorParts[i] = selectorParts[i] + ' ' + key;
                    }
                }
                cssToTree(tree, value, selectorParts.join(','), prelude);
            }
        }
    }
};

exports.cssToTree = cssToTree;


/***/ }),

/***/ "../../../node_modules/nano-css/addon/vcssom/removeRule.js":
/*!******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/addon/vcssom/removeRule.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function removeRule (rule) {
    var maxIndex = rule.index;
    var sh = rule.parentStyleSheet;
    var rules = sh.cssRules || sh.rules;
    maxIndex = Math.max(maxIndex, rules.length - 1);
    while (maxIndex >= 0) {
        if (rules[maxIndex] === rule) {
            sh.deleteRule(maxIndex);
            break;
        }
        maxIndex--;
    }
}

exports.removeRule = removeRule;


/***/ }),

/***/ "../../../node_modules/nano-css/index.js":
/*!************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/nano-css/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KEBAB_REGEX = /[A-Z]/g;

var hash = function (str) {
    var h = 5381, i = str.length;

    while (i) h = (h * 33) ^ str.charCodeAt(--i);

    return '_' + (h >>> 0).toString(36);
};

exports.create = function (config) {
    config = config || {};
    var assign = config.assign || Object.assign;
    var client = typeof window === 'object';

    // Check if we are really in browser environment.
    if (true) {
        if (client) {
            if ((typeof document !== 'object') || !document.getElementsByTagName('HTML')) {
                console.error(
                    'nano-css detected browser environment because of "window" global, but ' +
                    '"document" global seems to be defective.'
                );
            }
        }
    }

    var renderer = assign({
        raw: '',
        pfx: '_',
        client: client,
        assign: assign,
        stringify: JSON.stringify,
        kebab: function (prop) {
            return prop.replace(KEBAB_REGEX, '-$&').toLowerCase();
        },
        decl: function (key, value) {
            key = renderer.kebab(key);
            return key + ':' + value + ';';
        },
        hash: function (obj) {
            return hash(renderer.stringify(obj));
        },
        selector: function (parent, selector) {
            return parent + (selector[0] === ':' ? ''  : ' ') + selector;
        },
        putRaw: function (rawCssRule) {
            renderer.raw += rawCssRule;
        }
    }, config);

    if (renderer.client) {
        if (!renderer.sh)
            document.head.appendChild(renderer.sh = document.createElement('style'));

        if (true) {
            renderer.sh.setAttribute('data-nano-css-dev', '');

            // Test style sheet used in DEV mode to test if .insetRule() would throw.
            renderer.shTest = document.createElement('style');
            renderer.shTest.setAttribute('data-nano-css-dev-tests', '');
            document.head.appendChild(renderer.shTest);
        }

        renderer.putRaw = function (rawCssRule) {
            // .insertRule() is faster than .appendChild(), that's why we use it in PROD.
            // But CSS injected using .insertRule() is not displayed in Chrome Devtools,
            // that's why we use .appendChild in DEV.
            if (false) { var sheet; } else {
                // Test if .insertRule() works in dev mode. Unknown pseudo-selectors will throw when
                // .insertRule() is used, but .appendChild() will not throw.
                try {
                    renderer.shTest.sheet.insertRule(rawCssRule, renderer.shTest.sheet.cssRules.length);
                } catch (error) {
                    if (config.verbose) {
                        console.error(error);
                    }
                }

                // Insert pretty-printed CSS for dev mode.
                renderer.sh.appendChild(document.createTextNode(rawCssRule));
            }
        };
    }

    renderer.put = function (selector, decls, atrule) {
        var str = '';
        var prop, value;
        var postponed = [];

        for (prop in decls) {
            value = decls[prop];

            if ((value instanceof Object) && !(value instanceof Array)) {
                postponed.push(prop);
            } else {
                if (( true) && !renderer.sourcemaps) {
                    str += '    ' + renderer.decl(prop, value, selector, atrule) + '\n';
                } else {
                    str += renderer.decl(prop, value, selector, atrule);
                }
            }
        }

        if (str) {
            if (( true) && !renderer.sourcemaps) {
                str = '\n' + selector + ' {\n' + str + '}\n';
            } else {
                str = selector + '{' + str + '}';
            }
            renderer.putRaw(atrule ? atrule + '{' + str + '}' : str);
        }

        for (var i = 0; i < postponed.length; i++) {
            prop = postponed[i];

            if (prop[0] === '@' && prop !== '@font-face') {
                renderer.putAt(selector, decls[prop], prop);
            } else {
                renderer.put(renderer.selector(selector, prop), decls[prop], atrule);
            }
        }
    };

    renderer.putAt = renderer.put;

    return renderer;
};


/***/ }),

/***/ "../../../node_modules/node-libs-browser/node_modules/events/events.js":
/*!******************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/node-libs-browser/node_modules/events/events.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "../../../node_modules/query-string/index.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/query-string/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "../../../node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__(/*! decode-uri-component */ "../../../node_modules/decode-uri-component/index.js");
const splitOnFirst = __webpack_require__(/*! split-on-first */ "../../../node_modules/split-on-first/index.js");
const filterObject = __webpack_require__(/*! filter-obj */ "../../../node_modules/filter-obj/index.js");

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(query, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof query !== 'string') {
		return ret;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return ret;
	}

	for (const param of query.split('&')) {
		if (param === '') {
			continue;
		}

		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (url, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url_, hash] = splitOnFirst(url, '#');

	return Object.assign(
		{
			url: url_.split('?')[0] || '',
			query: parse(extract(url), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (object, options) => {
	options = Object.assign({
		encode: true,
		strict: true
	}, options);

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(object.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, object.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(object.url);
	if (object.fragmentIdentifier) {
		hash = `#${encode(object.fragmentIdentifier, options)}`;
	}

	return `${url}${queryString}${hash}`;
};

exports.pick = (input, filter, options) => {
	options = Object.assign({
		parseFragmentIdentifier: true
	}, options);

	const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
	return exports.stringifyUrl({
		url,
		query: filterObject(query, filter),
		fragmentIdentifier
	}, options);
};

exports.exclude = (input, filter, options) => {
	const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

	return exports.pick(input, exclusionFilter, options);
};


/***/ }),

/***/ "../../../node_modules/react-use/lib/createBreakpoint.js":
/*!****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createBreakpoint.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var createBreakpoint = function (breakpoints) {
    if (breakpoints === void 0) { breakpoints = { laptopL: 1440, laptop: 1024, tablet: 768 }; }
    return function () {
        var _a = react_1.useState(0), screen = _a[0], setScreen = _a[1];
        react_1.useEffect(function () {
            var setSideScreen = function () {
                setScreen(window.innerWidth);
            };
            setSideScreen();
            window.addEventListener('resize', setSideScreen);
            return function () {
                window.removeEventListener('resize', setSideScreen);
            };
        });
        var sortedBreakpoints = react_1.useMemo(function () { return Object.entries(breakpoints).sort(function (a, b) { return (a[1] >= b[1] ? 1 : -1); }); }, [
            breakpoints,
        ]);
        var result = sortedBreakpoints.reduce(function (acc, _a) {
            var name = _a[0], width = _a[1];
            if (screen >= width) {
                return name;
            }
            else {
                return acc;
            }
        }, sortedBreakpoints[0][0]);
        return result;
    };
};
exports.default = createBreakpoint;


/***/ }),

/***/ "../../../node_modules/react-use/lib/createGlobalState.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createGlobalState.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useEffectOnce */ "../../../node_modules/react-use/lib/useEffectOnce.js"));
function createGlobalState(initialState) {
    var store = {
        state: initialState,
        setState: function (state) {
            store.state = state;
            store.setters.forEach(function (setter) { return setter(store.state); });
        },
        setters: [],
    };
    return function () {
        var _a = react_1.useState(store.state), globalState = _a[0], stateSetter = _a[1];
        useEffectOnce_1.default(function () { return function () {
            store.setters = store.setters.filter(function (setter) { return setter !== stateSetter; });
        }; });
        react_1.useLayoutEffect(function () {
            if (!store.setters.includes(stateSetter)) {
                store.setters.push(stateSetter);
            }
        });
        return [globalState, store.setState];
    };
}
exports.createGlobalState = createGlobalState;
exports.default = createGlobalState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/createMemo.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createMemo.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var createMemo = function (fn) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return react_1.useMemo(function () { return fn.apply(void 0, args); }, args);
}; };
exports.default = createMemo;


/***/ }),

/***/ "../../../node_modules/react-use/lib/createReducer.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createReducer.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdateEffect */ "../../../node_modules/react-use/lib/useUpdateEffect.js"));
function composeMiddleware(chain) {
    return function (context, dispatch) {
        return chain.reduceRight(function (res, middleware) {
            return middleware(context)(res);
        }, dispatch);
    };
}
var createReducer = function () {
    var middlewares = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        middlewares[_i] = arguments[_i];
    }
    var composedMiddleware = composeMiddleware(middlewares);
    return function (reducer, initialState, initializer) {
        if (initializer === void 0) { initializer = function (value) { return value; }; }
        var ref = react_1.useRef(initializer(initialState));
        var _a = react_1.useState(ref.current), setState = _a[1];
        var dispatch = react_1.useCallback(function (action) {
            ref.current = reducer(ref.current, action);
            setState(ref.current);
            return action;
        }, [reducer]);
        var dispatchRef = react_1.useRef(composedMiddleware({
            getState: function () { return ref.current; },
            dispatch: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return dispatchRef.current.apply(dispatchRef, args);
            },
        }, dispatch));
        useUpdateEffect_1.default(function () {
            dispatchRef.current = composedMiddleware({
                getState: function () { return ref.current; },
                dispatch: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return dispatchRef.current.apply(dispatchRef, args);
                },
            }, dispatch);
        }, [dispatch]);
        return [ref.current, dispatchRef.current];
    };
};
exports.default = createReducer;


/***/ }),

/***/ "../../../node_modules/react-use/lib/createReducerContext.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createReducerContext.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var createReducerContext = function (reducer, defaultInitialState) {
    var context = react_1.createContext(undefined);
    var providerFactory = react_1.createFactory(context.Provider);
    var ReducerProvider = function (_a) {
        var children = _a.children, initialState = _a.initialState;
        var state = react_1.useReducer(reducer, initialState !== undefined ? initialState : defaultInitialState);
        return providerFactory({ value: state }, children);
    };
    var useReducerContext = function () {
        var state = react_1.useContext(context);
        if (state == null) {
            throw new Error("useReducerContext must be used inside a ReducerProvider.");
        }
        return state;
    };
    return [useReducerContext, ReducerProvider, context];
};
exports.default = createReducerContext;


/***/ }),

/***/ "../../../node_modules/react-use/lib/createStateContext.js":
/*!******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/createStateContext.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var createStateContext = function (defaultInitialValue) {
    var context = react_1.createContext(undefined);
    var providerFactory = react_1.createFactory(context.Provider);
    var StateProvider = function (_a) {
        var children = _a.children, initialValue = _a.initialValue;
        var state = react_1.useState(initialValue !== undefined ? initialValue : defaultInitialValue);
        return providerFactory({ value: state }, children);
    };
    var useStateContext = function () {
        var state = react_1.useContext(context);
        if (state == null) {
            throw new Error("useStateContext must be used inside a StateProvider.");
        }
        return state;
    };
    return [useStateContext, StateProvider, context];
};
exports.default = createStateContext;


/***/ }),

/***/ "../../../node_modules/react-use/lib/index.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var createMemo_1 = __webpack_require__(/*! ./createMemo */ "../../../node_modules/react-use/lib/createMemo.js");
exports.createMemo = createMemo_1.default;
var createReducerContext_1 = __webpack_require__(/*! ./createReducerContext */ "../../../node_modules/react-use/lib/createReducerContext.js");
exports.createReducerContext = createReducerContext_1.default;
var createReducer_1 = __webpack_require__(/*! ./createReducer */ "../../../node_modules/react-use/lib/createReducer.js");
exports.createReducer = createReducer_1.default;
var createStateContext_1 = __webpack_require__(/*! ./createStateContext */ "../../../node_modules/react-use/lib/createStateContext.js");
exports.createStateContext = createStateContext_1.default;
var useAsync_1 = __webpack_require__(/*! ./useAsync */ "../../../node_modules/react-use/lib/useAsync.js");
exports.useAsync = useAsync_1.default;
var useAsyncFn_1 = __webpack_require__(/*! ./useAsyncFn */ "../../../node_modules/react-use/lib/useAsyncFn.js");
exports.useAsyncFn = useAsyncFn_1.default;
var useAsyncRetry_1 = __webpack_require__(/*! ./useAsyncRetry */ "../../../node_modules/react-use/lib/useAsyncRetry.js");
exports.useAsyncRetry = useAsyncRetry_1.default;
var useAudio_1 = __webpack_require__(/*! ./useAudio */ "../../../node_modules/react-use/lib/useAudio.js");
exports.useAudio = useAudio_1.default;
var useBattery_1 = __webpack_require__(/*! ./useBattery */ "../../../node_modules/react-use/lib/useBattery.js");
exports.useBattery = useBattery_1.default;
var useBeforeUnload_1 = __webpack_require__(/*! ./useBeforeUnload */ "../../../node_modules/react-use/lib/useBeforeUnload.js");
exports.useBeforeUnload = useBeforeUnload_1.default;
var useBoolean_1 = __webpack_require__(/*! ./useBoolean */ "../../../node_modules/react-use/lib/useBoolean.js");
exports.useBoolean = useBoolean_1.default;
var useClickAway_1 = __webpack_require__(/*! ./useClickAway */ "../../../node_modules/react-use/lib/useClickAway.js");
exports.useClickAway = useClickAway_1.default;
var useCookie_1 = __webpack_require__(/*! ./useCookie */ "../../../node_modules/react-use/lib/useCookie.js");
exports.useCookie = useCookie_1.default;
var useCopyToClipboard_1 = __webpack_require__(/*! ./useCopyToClipboard */ "../../../node_modules/react-use/lib/useCopyToClipboard.js");
exports.useCopyToClipboard = useCopyToClipboard_1.default;
var useCounter_1 = __webpack_require__(/*! ./useCounter */ "../../../node_modules/react-use/lib/useCounter.js");
exports.useCounter = useCounter_1.default;
var useCss_1 = __webpack_require__(/*! ./useCss */ "../../../node_modules/react-use/lib/useCss.js");
exports.useCss = useCss_1.default;
var useCustomCompareEffect_1 = __webpack_require__(/*! ./useCustomCompareEffect */ "../../../node_modules/react-use/lib/useCustomCompareEffect.js");
exports.useCustomCompareEffect = useCustomCompareEffect_1.default;
var useDebounce_1 = __webpack_require__(/*! ./useDebounce */ "../../../node_modules/react-use/lib/useDebounce.js");
exports.useDebounce = useDebounce_1.default;
var useDeepCompareEffect_1 = __webpack_require__(/*! ./useDeepCompareEffect */ "../../../node_modules/react-use/lib/useDeepCompareEffect.js");
exports.useDeepCompareEffect = useDeepCompareEffect_1.default;
var useDefault_1 = __webpack_require__(/*! ./useDefault */ "../../../node_modules/react-use/lib/useDefault.js");
exports.useDefault = useDefault_1.default;
var useDrop_1 = __webpack_require__(/*! ./useDrop */ "../../../node_modules/react-use/lib/useDrop.js");
exports.useDrop = useDrop_1.default;
var useDropArea_1 = __webpack_require__(/*! ./useDropArea */ "../../../node_modules/react-use/lib/useDropArea.js");
exports.useDropArea = useDropArea_1.default;
var useEffectOnce_1 = __webpack_require__(/*! ./useEffectOnce */ "../../../node_modules/react-use/lib/useEffectOnce.js");
exports.useEffectOnce = useEffectOnce_1.default;
var useEnsuredForwardedRef_1 = __webpack_require__(/*! ./useEnsuredForwardedRef */ "../../../node_modules/react-use/lib/useEnsuredForwardedRef.js");
exports.useEnsuredForwardedRef = useEnsuredForwardedRef_1.default;
exports.ensuredForwardRef = useEnsuredForwardedRef_1.ensuredForwardRef;
var useEvent_1 = __webpack_require__(/*! ./useEvent */ "../../../node_modules/react-use/lib/useEvent.js");
exports.useEvent = useEvent_1.default;
var useError_1 = __webpack_require__(/*! ./useError */ "../../../node_modules/react-use/lib/useError.js");
exports.useError = useError_1.default;
var useFavicon_1 = __webpack_require__(/*! ./useFavicon */ "../../../node_modules/react-use/lib/useFavicon.js");
exports.useFavicon = useFavicon_1.default;
var useFullscreen_1 = __webpack_require__(/*! ./useFullscreen */ "../../../node_modules/react-use/lib/useFullscreen.js");
exports.useFullscreen = useFullscreen_1.default;
var useGeolocation_1 = __webpack_require__(/*! ./useGeolocation */ "../../../node_modules/react-use/lib/useGeolocation.js");
exports.useGeolocation = useGeolocation_1.default;
var useGetSet_1 = __webpack_require__(/*! ./useGetSet */ "../../../node_modules/react-use/lib/useGetSet.js");
exports.useGetSet = useGetSet_1.default;
var useGetSetState_1 = __webpack_require__(/*! ./useGetSetState */ "../../../node_modules/react-use/lib/useGetSetState.js");
exports.useGetSetState = useGetSetState_1.default;
var useHarmonicIntervalFn_1 = __webpack_require__(/*! ./useHarmonicIntervalFn */ "../../../node_modules/react-use/lib/useHarmonicIntervalFn.js");
exports.useHarmonicIntervalFn = useHarmonicIntervalFn_1.default;
var useHover_1 = __webpack_require__(/*! ./useHover */ "../../../node_modules/react-use/lib/useHover.js");
exports.useHover = useHover_1.default;
var useHoverDirty_1 = __webpack_require__(/*! ./useHoverDirty */ "../../../node_modules/react-use/lib/useHoverDirty.js");
exports.useHoverDirty = useHoverDirty_1.default;
var useIdle_1 = __webpack_require__(/*! ./useIdle */ "../../../node_modules/react-use/lib/useIdle.js");
exports.useIdle = useIdle_1.default;
var useIntersection_1 = __webpack_require__(/*! ./useIntersection */ "../../../node_modules/react-use/lib/useIntersection.js");
exports.useIntersection = useIntersection_1.default;
var useInterval_1 = __webpack_require__(/*! ./useInterval */ "../../../node_modules/react-use/lib/useInterval.js");
exports.useInterval = useInterval_1.default;
var useIsomorphicLayoutEffect_1 = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "../../../node_modules/react-use/lib/useIsomorphicLayoutEffect.js");
exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect_1.default;
var useKey_1 = __webpack_require__(/*! ./useKey */ "../../../node_modules/react-use/lib/useKey.js");
exports.useKey = useKey_1.default;
var createBreakpoint_1 = __webpack_require__(/*! ./createBreakpoint */ "../../../node_modules/react-use/lib/createBreakpoint.js");
exports.createBreakpoint = createBreakpoint_1.default;
// not exported because of peer dependency
// export { default as useKeyboardJs } from './useKeyboardJs';
var useKeyPress_1 = __webpack_require__(/*! ./useKeyPress */ "../../../node_modules/react-use/lib/useKeyPress.js");
exports.useKeyPress = useKeyPress_1.default;
var useKeyPressEvent_1 = __webpack_require__(/*! ./useKeyPressEvent */ "../../../node_modules/react-use/lib/useKeyPressEvent.js");
exports.useKeyPressEvent = useKeyPressEvent_1.default;
var useLifecycles_1 = __webpack_require__(/*! ./useLifecycles */ "../../../node_modules/react-use/lib/useLifecycles.js");
exports.useLifecycles = useLifecycles_1.default;
var useList_1 = __webpack_require__(/*! ./useList */ "../../../node_modules/react-use/lib/useList.js");
exports.useList = useList_1.default;
var useLocalStorage_1 = __webpack_require__(/*! ./useLocalStorage */ "../../../node_modules/react-use/lib/useLocalStorage.js");
exports.useLocalStorage = useLocalStorage_1.default;
var useLocation_1 = __webpack_require__(/*! ./useLocation */ "../../../node_modules/react-use/lib/useLocation.js");
exports.useLocation = useLocation_1.default;
var useLockBodyScroll_1 = __webpack_require__(/*! ./useLockBodyScroll */ "../../../node_modules/react-use/lib/useLockBodyScroll.js");
exports.useLockBodyScroll = useLockBodyScroll_1.default;
var useLogger_1 = __webpack_require__(/*! ./useLogger */ "../../../node_modules/react-use/lib/useLogger.js");
exports.useLogger = useLogger_1.default;
var useLongPress_1 = __webpack_require__(/*! ./useLongPress */ "../../../node_modules/react-use/lib/useLongPress.js");
exports.useLongPress = useLongPress_1.default;
var useMap_1 = __webpack_require__(/*! ./useMap */ "../../../node_modules/react-use/lib/useMap.js");
exports.useMap = useMap_1.default;
var useMedia_1 = __webpack_require__(/*! ./useMedia */ "../../../node_modules/react-use/lib/useMedia.js");
exports.useMedia = useMedia_1.default;
var useMediaDevices_1 = __webpack_require__(/*! ./useMediaDevices */ "../../../node_modules/react-use/lib/useMediaDevices.js");
exports.useMediaDevices = useMediaDevices_1.default;
var useMediatedState_1 = __webpack_require__(/*! ./useMediatedState */ "../../../node_modules/react-use/lib/useMediatedState.js");
exports.useMediatedState = useMediatedState_1.useMediatedState;
var useMethods_1 = __webpack_require__(/*! ./useMethods */ "../../../node_modules/react-use/lib/useMethods.js");
exports.useMethods = useMethods_1.default;
var useMotion_1 = __webpack_require__(/*! ./useMotion */ "../../../node_modules/react-use/lib/useMotion.js");
exports.useMotion = useMotion_1.default;
var useMount_1 = __webpack_require__(/*! ./useMount */ "../../../node_modules/react-use/lib/useMount.js");
exports.useMount = useMount_1.default;
var useMountedState_1 = __webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js");
exports.useMountedState = useMountedState_1.default;
var useMouse_1 = __webpack_require__(/*! ./useMouse */ "../../../node_modules/react-use/lib/useMouse.js");
exports.useMouse = useMouse_1.default;
var useMouseHovered_1 = __webpack_require__(/*! ./useMouseHovered */ "../../../node_modules/react-use/lib/useMouseHovered.js");
exports.useMouseHovered = useMouseHovered_1.default;
var useNetwork_1 = __webpack_require__(/*! ./useNetwork */ "../../../node_modules/react-use/lib/useNetwork.js");
exports.useNetwork = useNetwork_1.default;
var useNumber_1 = __webpack_require__(/*! ./useNumber */ "../../../node_modules/react-use/lib/useNumber.js");
exports.useNumber = useNumber_1.default;
var useObservable_1 = __webpack_require__(/*! ./useObservable */ "../../../node_modules/react-use/lib/useObservable.js");
exports.useObservable = useObservable_1.default;
var useOrientation_1 = __webpack_require__(/*! ./useOrientation */ "../../../node_modules/react-use/lib/useOrientation.js");
exports.useOrientation = useOrientation_1.default;
var usePageLeave_1 = __webpack_require__(/*! ./usePageLeave */ "../../../node_modules/react-use/lib/usePageLeave.js");
exports.usePageLeave = usePageLeave_1.default;
var usePermission_1 = __webpack_require__(/*! ./usePermission */ "../../../node_modules/react-use/lib/usePermission.js");
exports.usePermission = usePermission_1.default;
var usePrevious_1 = __webpack_require__(/*! ./usePrevious */ "../../../node_modules/react-use/lib/usePrevious.js");
exports.usePrevious = usePrevious_1.default;
var usePreviousDistinct_1 = __webpack_require__(/*! ./usePreviousDistinct */ "../../../node_modules/react-use/lib/usePreviousDistinct.js");
exports.usePreviousDistinct = usePreviousDistinct_1.default;
var usePromise_1 = __webpack_require__(/*! ./usePromise */ "../../../node_modules/react-use/lib/usePromise.js");
exports.usePromise = usePromise_1.default;
var useQueue_1 = __webpack_require__(/*! ./useQueue */ "../../../node_modules/react-use/lib/useQueue.js");
exports.useQueue = useQueue_1.default;
var useRaf_1 = __webpack_require__(/*! ./useRaf */ "../../../node_modules/react-use/lib/useRaf.js");
exports.useRaf = useRaf_1.default;
var useRafLoop_1 = __webpack_require__(/*! ./useRafLoop */ "../../../node_modules/react-use/lib/useRafLoop.js");
exports.useRafLoop = useRafLoop_1.default;
var useRafState_1 = __webpack_require__(/*! ./useRafState */ "../../../node_modules/react-use/lib/useRafState.js");
exports.useRafState = useRafState_1.default;
var useSearchParam_1 = __webpack_require__(/*! ./useSearchParam */ "../../../node_modules/react-use/lib/useSearchParam.js");
exports.useSearchParam = useSearchParam_1.default;
var useScroll_1 = __webpack_require__(/*! ./useScroll */ "../../../node_modules/react-use/lib/useScroll.js");
exports.useScroll = useScroll_1.default;
var useScrolling_1 = __webpack_require__(/*! ./useScrolling */ "../../../node_modules/react-use/lib/useScrolling.js");
exports.useScrolling = useScrolling_1.default;
var useSessionStorage_1 = __webpack_require__(/*! ./useSessionStorage */ "../../../node_modules/react-use/lib/useSessionStorage.js");
exports.useSessionStorage = useSessionStorage_1.default;
var useSetState_1 = __webpack_require__(/*! ./useSetState */ "../../../node_modules/react-use/lib/useSetState.js");
exports.useSetState = useSetState_1.default;
var useShallowCompareEffect_1 = __webpack_require__(/*! ./useShallowCompareEffect */ "../../../node_modules/react-use/lib/useShallowCompareEffect.js");
exports.useShallowCompareEffect = useShallowCompareEffect_1.default;
var useSize_1 = __webpack_require__(/*! ./useSize */ "../../../node_modules/react-use/lib/useSize.js");
exports.useSize = useSize_1.default;
var useSlider_1 = __webpack_require__(/*! ./useSlider */ "../../../node_modules/react-use/lib/useSlider.js");
exports.useSlider = useSlider_1.default;
var useSpeech_1 = __webpack_require__(/*! ./useSpeech */ "../../../node_modules/react-use/lib/useSpeech.js");
exports.useSpeech = useSpeech_1.default;
// not exported because of peer dependency
// export { default as useSpring } from './useSpring';
var useStartTyping_1 = __webpack_require__(/*! ./useStartTyping */ "../../../node_modules/react-use/lib/useStartTyping.js");
exports.useStartTyping = useStartTyping_1.default;
var useStateWithHistory_1 = __webpack_require__(/*! ./useStateWithHistory */ "../../../node_modules/react-use/lib/useStateWithHistory.js");
exports.useStateWithHistory = useStateWithHistory_1.useStateWithHistory;
var useStateList_1 = __webpack_require__(/*! ./useStateList */ "../../../node_modules/react-use/lib/useStateList.js");
exports.useStateList = useStateList_1.default;
var useThrottle_1 = __webpack_require__(/*! ./useThrottle */ "../../../node_modules/react-use/lib/useThrottle.js");
exports.useThrottle = useThrottle_1.default;
var useThrottleFn_1 = __webpack_require__(/*! ./useThrottleFn */ "../../../node_modules/react-use/lib/useThrottleFn.js");
exports.useThrottleFn = useThrottleFn_1.default;
var useTimeout_1 = __webpack_require__(/*! ./useTimeout */ "../../../node_modules/react-use/lib/useTimeout.js");
exports.useTimeout = useTimeout_1.default;
var useTimeoutFn_1 = __webpack_require__(/*! ./useTimeoutFn */ "../../../node_modules/react-use/lib/useTimeoutFn.js");
exports.useTimeoutFn = useTimeoutFn_1.default;
var useTitle_1 = __webpack_require__(/*! ./useTitle */ "../../../node_modules/react-use/lib/useTitle.js");
exports.useTitle = useTitle_1.default;
var useToggle_1 = __webpack_require__(/*! ./useToggle */ "../../../node_modules/react-use/lib/useToggle.js");
exports.useToggle = useToggle_1.default;
var useTween_1 = __webpack_require__(/*! ./useTween */ "../../../node_modules/react-use/lib/useTween.js");
exports.useTween = useTween_1.default;
var useUnmount_1 = __webpack_require__(/*! ./useUnmount */ "../../../node_modules/react-use/lib/useUnmount.js");
exports.useUnmount = useUnmount_1.default;
var useUnmountPromise_1 = __webpack_require__(/*! ./useUnmountPromise */ "../../../node_modules/react-use/lib/useUnmountPromise.js");
exports.useUnmountPromise = useUnmountPromise_1.default;
var useUpdate_1 = __webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js");
exports.useUpdate = useUpdate_1.default;
var useUpdateEffect_1 = __webpack_require__(/*! ./useUpdateEffect */ "../../../node_modules/react-use/lib/useUpdateEffect.js");
exports.useUpdateEffect = useUpdateEffect_1.default;
var useUpsert_1 = __webpack_require__(/*! ./useUpsert */ "../../../node_modules/react-use/lib/useUpsert.js");
exports.useUpsert = useUpsert_1.default;
var useVibrate_1 = __webpack_require__(/*! ./useVibrate */ "../../../node_modules/react-use/lib/useVibrate.js");
exports.useVibrate = useVibrate_1.default;
var useVideo_1 = __webpack_require__(/*! ./useVideo */ "../../../node_modules/react-use/lib/useVideo.js");
exports.useVideo = useVideo_1.default;
var useStateValidator_1 = __webpack_require__(/*! ./useStateValidator */ "../../../node_modules/react-use/lib/useStateValidator.js");
exports.useStateValidator = useStateValidator_1.default;
var useScrollbarWidth_1 = __webpack_require__(/*! ./useScrollbarWidth */ "../../../node_modules/react-use/lib/useScrollbarWidth.js");
exports.useScrollbarWidth = useScrollbarWidth_1.useScrollbarWidth;
var useMultiStateValidator_1 = __webpack_require__(/*! ./useMultiStateValidator */ "../../../node_modules/react-use/lib/useMultiStateValidator.js");
exports.useMultiStateValidator = useMultiStateValidator_1.useMultiStateValidator;
var useWindowScroll_1 = __webpack_require__(/*! ./useWindowScroll */ "../../../node_modules/react-use/lib/useWindowScroll.js");
exports.useWindowScroll = useWindowScroll_1.default;
var useWindowSize_1 = __webpack_require__(/*! ./useWindowSize */ "../../../node_modules/react-use/lib/useWindowSize.js");
exports.useWindowSize = useWindowSize_1.default;
var useMeasure_1 = __webpack_require__(/*! ./useMeasure */ "../../../node_modules/react-use/lib/useMeasure.js");
exports.useMeasure = useMeasure_1.default;
var useRendersCount_1 = __webpack_require__(/*! ./useRendersCount */ "../../../node_modules/react-use/lib/useRendersCount.js");
exports.useRendersCount = useRendersCount_1.useRendersCount;
var useFirstMountState_1 = __webpack_require__(/*! ./useFirstMountState */ "../../../node_modules/react-use/lib/useFirstMountState.js");
exports.useFirstMountState = useFirstMountState_1.useFirstMountState;
var useSet_1 = __webpack_require__(/*! ./useSet */ "../../../node_modules/react-use/lib/useSet.js");
exports.useSet = useSet_1.default;
var createGlobalState_1 = __webpack_require__(/*! ./createGlobalState */ "../../../node_modules/react-use/lib/createGlobalState.js");
exports.createGlobalState = createGlobalState_1.createGlobalState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useAsync.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useAsync.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useAsyncFn_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useAsyncFn */ "../../../node_modules/react-use/lib/useAsyncFn.js"));
function useAsync(fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = useAsyncFn_1.default(fn, deps, {
        loading: true,
    }), state = _a[0], callback = _a[1];
    react_1.useEffect(function () {
        callback();
    }, [callback]);
    return state;
}
exports.default = useAsync;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useAsyncFn.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useAsyncFn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
function useAsyncFn(fn, deps, initialState) {
    if (deps === void 0) { deps = []; }
    if (initialState === void 0) { initialState = { loading: false }; }
    var lastCallId = react_1.useRef(0);
    var _a = react_1.useState(initialState), state = _a[0], set = _a[1];
    var isMounted = useMountedState_1.default();
    var callback = react_1.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callId = ++lastCallId.current;
        set({ loading: true });
        return fn.apply(void 0, args).then(function (value) {
            isMounted() && callId === lastCallId.current && set({ value: value, loading: false });
            return value;
        }, function (error) {
            isMounted() && callId === lastCallId.current && set({ error: error, loading: false });
            return error;
        });
    }, deps);
    return [state, callback];
}
exports.default = useAsyncFn;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useAsyncRetry.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useAsyncRetry.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useAsync_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useAsync */ "../../../node_modules/react-use/lib/useAsync.js"));
var useAsyncRetry = function (fn, deps) {
    if (deps === void 0) { deps = []; }
    var _a = react_1.useState(0), attempt = _a[0], setAttempt = _a[1];
    var state = useAsync_1.default(fn, tslib_1.__spreadArrays(deps, [attempt]));
    var stateLoading = state.loading;
    var retry = react_1.useCallback(function () {
        if (stateLoading) {
            if (true) {
                console.log('You are calling useAsyncRetry hook retry() method while loading in progress, this is a no-op.');
            }
            return;
        }
        setAttempt(function (currentAttempt) { return currentAttempt + 1; });
    }, tslib_1.__spreadArrays(deps, [stateLoading]));
    return tslib_1.__assign(tslib_1.__assign({}, state), { retry: retry });
};
exports.default = useAsyncRetry;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useAudio.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useAudio.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var createHTMLMediaHook_1 = tslib_1.__importDefault(__webpack_require__(/*! ./util/createHTMLMediaHook */ "../../../node_modules/react-use/lib/util/createHTMLMediaHook.js"));
var useAudio = createHTMLMediaHook_1.default('audio');
exports.default = useAudio;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useBattery.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useBattery.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useState = React.useState, useEffect = React.useEffect;
var nav = typeof navigator === 'object' ? navigator : undefined;
var isBatteryApiSupported = nav && typeof nav.getBattery === 'function';
function useBatteryMock() {
    return { isSupported: false };
}
function useBattery() {
    var _a = useState({ isSupported: true, fetched: false }), state = _a[0], setState = _a[1];
    useEffect(function () {
        var isMounted = true;
        var battery = null;
        var handleChange = function () {
            if (!isMounted || !battery) {
                return;
            }
            var newState = {
                isSupported: true,
                fetched: true,
                level: battery.level,
                charging: battery.charging,
                dischargingTime: battery.dischargingTime,
                chargingTime: battery.chargingTime,
            };
            !util_1.isDeepEqual(state, newState) && setState(newState);
        };
        nav.getBattery().then(function (bat) {
            if (!isMounted) {
                return;
            }
            battery = bat;
            util_1.on(battery, 'chargingchange', handleChange);
            util_1.on(battery, 'chargingtimechange', handleChange);
            util_1.on(battery, 'dischargingtimechange', handleChange);
            util_1.on(battery, 'levelchange', handleChange);
            handleChange();
        });
        return function () {
            isMounted = false;
            if (battery) {
                util_1.off(battery, 'chargingchange', handleChange);
                util_1.off(battery, 'chargingtimechange', handleChange);
                util_1.off(battery, 'dischargingtimechange', handleChange);
                util_1.off(battery, 'levelchange', handleChange);
            }
        };
    }, []);
    return state;
}
exports.default = isBatteryApiSupported ? useBattery : useBatteryMock;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useBeforeUnload.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useBeforeUnload.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useBeforeUnload = function (enabled, message) {
    if (enabled === void 0) { enabled = true; }
    var handler = react_1.useCallback(function (event) {
        var finalEnabled = typeof enabled === 'function' ? enabled() : true;
        if (!finalEnabled) {
            return;
        }
        event.preventDefault();
        if (message) {
            event.returnValue = message;
        }
        return message;
    }, [enabled, message]);
    react_1.useEffect(function () {
        if (!enabled) {
            return;
        }
        window.addEventListener('beforeunload', handler);
        return function () { return window.removeEventListener('beforeunload', handler); };
    }, [enabled, handler]);
};
exports.default = useBeforeUnload;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useBoolean.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useBoolean.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useToggle_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useToggle */ "../../../node_modules/react-use/lib/useToggle.js"));
exports.default = useToggle_1.default;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useClickAway.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useClickAway.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var defaultEvents = ['mousedown', 'touchstart'];
var useClickAway = function (ref, onClickAway, events) {
    if (events === void 0) { events = defaultEvents; }
    var savedCallback = react_1.useRef(onClickAway);
    react_1.useEffect(function () {
        savedCallback.current = onClickAway;
    }, [onClickAway]);
    react_1.useEffect(function () {
        var handler = function (event) {
            var el = ref.current;
            el && !el.contains(event.target) && savedCallback.current(event);
        };
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var eventName = events_1[_i];
            util_1.on(document, eventName, handler);
        }
        return function () {
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var eventName = events_2[_i];
                util_1.off(document, eventName, handler);
            }
        };
    }, [events, ref]);
};
exports.default = useClickAway;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useCookie.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useCookie.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var js_cookie_1 = tslib_1.__importDefault(__webpack_require__(/*! js-cookie */ "../../../node_modules/js-cookie/src/js.cookie.js"));
var useCookie = function (cookieName) {
    var _a = react_1.useState(function () { return js_cookie_1.default.get(cookieName) || null; }), value = _a[0], setValue = _a[1];
    var updateCookie = react_1.useCallback(function (newValue, options) {
        js_cookie_1.default.set(cookieName, newValue, options);
        setValue(newValue);
    }, [cookieName]);
    var deleteCookie = react_1.useCallback(function () {
        js_cookie_1.default.remove(cookieName);
        setValue(null);
    }, [cookieName]);
    return [value, updateCookie, deleteCookie];
};
exports.default = useCookie;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useCopyToClipboard.js":
/*!******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useCopyToClipboard.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var copy_to_clipboard_1 = tslib_1.__importDefault(__webpack_require__(/*! copy-to-clipboard */ "../../../node_modules/copy-to-clipboard/index.js"));
var react_1 = __webpack_require__(/*! react */ "react");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useSetState */ "../../../node_modules/react-use/lib/useSetState.js"));
var useCopyToClipboard = function () {
    var isMounted = useMountedState_1.default();
    var _a = useSetState_1.default({
        value: undefined,
        error: undefined,
        noUserInteraction: true,
    }), state = _a[0], setState = _a[1];
    var copyToClipboard = react_1.useCallback(function (value) {
        try {
            if (true) {
                if (typeof value !== 'string') {
                    console.error("Cannot copy typeof " + typeof value + " to clipboard, must be a string");
                }
            }
            var noUserInteraction = copy_to_clipboard_1.default(value);
            if (!isMounted()) {
                return;
            }
            setState({
                value: value,
                error: undefined,
                noUserInteraction: noUserInteraction,
            });
        }
        catch (error) {
            if (!isMounted()) {
                return;
            }
            setState({
                value: undefined,
                error: error,
                noUserInteraction: true,
            });
        }
    }, []);
    return [state, copyToClipboard];
};
exports.default = useCopyToClipboard;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useCounter.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useCounter.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useGetSet_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useGetSet */ "../../../node_modules/react-use/lib/useGetSet.js"));
var resolveHookState_1 = __webpack_require__(/*! ./util/resolveHookState */ "../../../node_modules/react-use/lib/util/resolveHookState.js");
function useCounter(initialValue, max, min) {
    if (initialValue === void 0) { initialValue = 0; }
    if (max === void 0) { max = null; }
    if (min === void 0) { min = null; }
    var init = resolveHookState_1.resolveHookState(initialValue);
    typeof init !== 'number' && console.error('initialValue has to be a number, got ' + typeof initialValue);
    if (typeof min === 'number') {
        init = Math.max(init, min);
    }
    else if (min !== null) {
        console.error('min has to be a number, got ' + typeof min);
    }
    if (typeof max === 'number') {
        init = Math.min(init, max);
    }
    else if (max !== null) {
        console.error('max has to be a number, got ' + typeof max);
    }
    var _a = useGetSet_1.default(init), get = _a[0], setInternal = _a[1];
    return [
        get(),
        react_1.useMemo(function () {
            var set = function (newState) {
                var prevState = get();
                var rState = resolveHookState_1.resolveHookState(newState, prevState);
                if (prevState !== rState) {
                    if (typeof min === 'number') {
                        rState = Math.max(rState, min);
                    }
                    if (typeof max === 'number') {
                        rState = Math.min(rState, max);
                    }
                    prevState !== rState && setInternal(rState);
                }
            };
            return {
                get: get,
                set: set,
                inc: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = resolveHookState_1.resolveHookState(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num + rDelta; });
                },
                dec: function (delta) {
                    if (delta === void 0) { delta = 1; }
                    var rDelta = resolveHookState_1.resolveHookState(delta, get());
                    if (typeof rDelta !== 'number') {
                        console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
                    }
                    set(function (num) { return num - rDelta; });
                },
                reset: function (value) {
                    if (value === void 0) { value = init; }
                    var rValue = resolveHookState_1.resolveHookState(value, get());
                    if (typeof rValue !== 'number') {
                        console.error('value has to be a number or function returning a number, got ' + typeof rValue);
                    }
                    init = rValue;
                    set(rValue);
                },
            };
        }, [init, min, max]),
    ];
}
exports.default = useCounter;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useCss.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useCss.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nano_css_1 = __webpack_require__(/*! nano-css */ "../../../node_modules/nano-css/index.js");
var cssom_1 = __webpack_require__(/*! nano-css/addon/cssom */ "../../../node_modules/nano-css/addon/cssom.js");
var vcssom_1 = __webpack_require__(/*! nano-css/addon/vcssom */ "../../../node_modules/nano-css/addon/vcssom.js");
var cssToTree_1 = __webpack_require__(/*! nano-css/addon/vcssom/cssToTree */ "../../../node_modules/nano-css/addon/vcssom/cssToTree.js");
var react_1 = __webpack_require__(/*! react */ "react");
var nano = nano_css_1.create();
cssom_1.addon(nano);
vcssom_1.addon(nano);
var counter = 0;
var useCss = function (css) {
    var className = react_1.useMemo(function () { return 'react-use-css-' + (counter++).toString(36); }, []);
    var sheet = react_1.useMemo(function () { return new nano.VSheet(); }, []);
    react_1.useLayoutEffect(function () {
        var tree = {};
        cssToTree_1.cssToTree(tree, css, '.' + className, '');
        sheet.diff(tree);
        return function () {
            sheet.diff({});
        };
    });
    return className;
};
exports.default = useCss;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useCustomCompareEffect.js":
/*!**********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useCustomCompareEffect.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var isPrimitive = function (val) { return val !== Object(val); };
var useCustomCompareEffect = function (effect, deps, depsEqual) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useCustomCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useCustomCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
        if (typeof depsEqual !== 'function') {
            console.warn('`useCustomCompareEffect` should be used with depsEqual callback for comparing deps list');
        }
    }
    var ref = react_1.useRef(undefined);
    if (!ref.current || !depsEqual(deps, ref.current)) {
        ref.current = deps;
    }
    react_1.useEffect(effect, ref.current);
};
exports.default = useCustomCompareEffect;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useDebounce.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useDebounce.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useTimeoutFn_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useTimeoutFn */ "../../../node_modules/react-use/lib/useTimeoutFn.js"));
function useDebounce(fn, ms, deps) {
    if (ms === void 0) { ms = 0; }
    if (deps === void 0) { deps = []; }
    var _a = useTimeoutFn_1.default(fn, ms), isReady = _a[0], cancel = _a[1], reset = _a[2];
    react_1.useEffect(reset, deps);
    return [isReady, cancel];
}
exports.default = useDebounce;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useDeepCompareEffect.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useDeepCompareEffect.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useCustomCompareEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useCustomCompareEffect */ "../../../node_modules/react-use/lib/useCustomCompareEffect.js"));
var isPrimitive = function (val) { return val !== Object(val); };
var useDeepCompareEffect = function (effect, deps) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useDeepCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useDeepCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
    }
    useCustomCompareEffect_1.default(effect, deps, util_1.isDeepEqual);
};
exports.default = useDeepCompareEffect;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useDefault.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useDefault.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useDefault = function (defaultValue, initialValue) {
    var _a = react_1.useState(initialValue), value = _a[0], setValue = _a[1];
    if (value === undefined || value === null) {
        return [defaultValue, setValue];
    }
    return [value, setValue];
};
exports.default = useDefault;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useDrop.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useDrop.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var useState = React.useState, useMemo = React.useMemo, useCallback = React.useCallback, useEffect = React.useEffect;
var noop = function () { };
/*
const defaultState: DropAreaState = {
  over: false,
};
*/
var createProcess = function (options, mounted) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || noop)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || noop)(Array.from(dataTransfer.files), event);
        return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
        dataTransfer.items[0].getAsString(function (text) {
            if (mounted) {
                (options.onText || noop)(text, event);
            }
        });
    }
}; };
var useDrop = function (options, args) {
    if (options === void 0) { options = {}; }
    if (args === void 0) { args = []; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var isMounted = useMountedState_1.default();
    var _a = useState(false), over = _a[0], setOverRaw = _a[1];
    var setOver = useCallback(setOverRaw, []);
    var process = useMemo(function () { return createProcess(options, isMounted()); }, [onFiles, onText, onUri]);
    useEffect(function () {
        var onDragOver = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragEnter = function (event) {
            event.preventDefault();
            setOver(true);
        };
        var onDragLeave = function () {
            setOver(false);
        };
        var onDragExit = function () {
            setOver(false);
        };
        var onDrop = function (event) {
            event.preventDefault();
            setOver(false);
            process(event.dataTransfer, event);
        };
        var onPaste = function (event) {
            process(event.clipboardData, event);
        };
        document.addEventListener('dragover', onDragOver);
        document.addEventListener('dragenter', onDragEnter);
        document.addEventListener('dragleave', onDragLeave);
        document.addEventListener('dragexit', onDragExit);
        document.addEventListener('drop', onDrop);
        if (onText) {
            document.addEventListener('paste', onPaste);
        }
        return function () {
            document.removeEventListener('dragover', onDragOver);
            document.removeEventListener('dragenter', onDragEnter);
            document.removeEventListener('dragleave', onDragLeave);
            document.removeEventListener('dragexit', onDragExit);
            document.removeEventListener('drop', onDrop);
            document.removeEventListener('paste', onPaste);
        };
    }, tslib_1.__spreadArrays([process], args));
    return { over: over };
};
exports.default = useDrop;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useDropArea.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useDropArea.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var noop = function () { };
/*
const defaultState: DropAreaState = {
  over: false,
};
*/
var createProcess = function (options, mounted) { return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
        (options.onUri || noop)(uri, event);
        return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
        (options.onFiles || noop)(Array.from(dataTransfer.files), event);
        return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
        dataTransfer.items[0].getAsString(function (text) {
            if (mounted) {
                (options.onText || noop)(text, event);
            }
        });
    }
}; };
var createBond = function (process, setOver) { return ({
    onDragOver: function (event) {
        event.preventDefault();
    },
    onDragEnter: function (event) {
        event.preventDefault();
        setOver(true);
    },
    onDragLeave: function () {
        setOver(false);
    },
    onDrop: function (event) {
        event.preventDefault();
        event.persist();
        setOver(false);
        process(event.dataTransfer, event);
    },
    onPaste: function (event) {
        event.persist();
        process(event.clipboardData, event);
    },
}); };
var useDropArea = function (options) {
    if (options === void 0) { options = {}; }
    var onFiles = options.onFiles, onText = options.onText, onUri = options.onUri;
    var isMounted = useMountedState_1.default();
    var _a = react_1.useState(false), over = _a[0], setOver = _a[1];
    var process = react_1.useMemo(function () { return createProcess(options, isMounted()); }, [onFiles, onText, onUri]);
    var bond = react_1.useMemo(function () { return createBond(process, setOver); }, [process, setOver]);
    return [bond, { over: over }];
};
exports.default = useDropArea;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useEffectOnce.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useEffectOnce.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useEffectOnce = function (effect) {
    react_1.useEffect(effect, []);
};
exports.default = useEffectOnce;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useEnsuredForwardedRef.js":
/*!**********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useEnsuredForwardedRef.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
function useEnsuredForwardedRef(forwardedRef) {
    var ensuredRef = react_1.useRef(forwardedRef && forwardedRef.current);
    react_1.useEffect(function () {
        if (!forwardedRef) {
            return;
        }
        forwardedRef.current = ensuredRef.current;
    }, [forwardedRef]);
    return ensuredRef;
}
exports.default = useEnsuredForwardedRef;
function ensuredForwardRef(Component) {
    return react_1.forwardRef(function (props, ref) {
        var ensuredRef = useEnsuredForwardedRef(ref);
        return Component(props, ensuredRef);
    });
}
exports.ensuredForwardRef = ensuredForwardRef;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useError.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useError.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useError = function () {
    var _a = react_1.useState(null), error = _a[0], setError = _a[1];
    react_1.useEffect(function () {
        if (error) {
            throw error;
        }
    }, [error]);
    var dispatchError = react_1.useCallback(function (err) {
        setError(err);
    }, []);
    return dispatchError;
};
exports.default = useError;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useEvent.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useEvent.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var defaultTarget = util_1.isClient ? window : null;
var isListenerType1 = function (target) {
    return !!target.addEventListener;
};
var isListenerType2 = function (target) {
    return !!target.on;
};
var useEvent = function (name, handler, target, options) {
    if (target === void 0) { target = defaultTarget; }
    react_1.useEffect(function () {
        if (!handler) {
            return;
        }
        if (!target) {
            return;
        }
        if (isListenerType1(target)) {
            target.addEventListener(name, handler, options);
        }
        else if (isListenerType2(target)) {
            target.on(name, handler, options);
        }
        return function () {
            if (isListenerType1(target)) {
                target.removeEventListener(name, handler, options);
            }
            else if (isListenerType2(target)) {
                target.off(name, handler, options);
            }
        };
    }, [name, handler, target, JSON.stringify(options)]);
};
exports.default = useEvent;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useFavicon.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useFavicon.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useFavicon = function (href) {
    react_1.useEffect(function () {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = href;
        document.getElementsByTagName('head')[0].appendChild(link);
    }, [href]);
};
exports.default = useFavicon;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useFirstMountState.js":
/*!******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useFirstMountState.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
function useFirstMountState() {
    var isFirst = react_1.useRef(true);
    if (isFirst.current) {
        isFirst.current = false;
        return true;
    }
    return isFirst.current;
}
exports.useFirstMountState = useFirstMountState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useFullscreen.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useFullscreen.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var screenfull_1 = tslib_1.__importDefault(__webpack_require__(/*! screenfull */ "../../../node_modules/screenfull/dist/screenfull.js"));
var noop = function () { };
var useFullscreen = function (ref, on, options) {
    if (options === void 0) { options = {}; }
    var video = options.video, _a = options.onClose, onClose = _a === void 0 ? noop : _a;
    var _b = react_1.useState(on), isFullscreen = _b[0], setIsFullscreen = _b[1];
    react_1.useLayoutEffect(function () {
        if (!on) {
            return;
        }
        if (!ref.current) {
            return;
        }
        var onWebkitEndFullscreen = function () {
            video.current.removeEventListener('webkitendfullscreen', onWebkitEndFullscreen);
            onClose();
        };
        var onChange = function () {
            if (screenfull_1.default.isEnabled) {
                var isScreenfullFullscreen = screenfull_1.default.isFullscreen;
                setIsFullscreen(isScreenfullFullscreen);
                if (!isScreenfullFullscreen) {
                    onClose();
                }
            }
        };
        if (screenfull_1.default.isEnabled) {
            try {
                screenfull_1.default.request(ref.current);
                setIsFullscreen(true);
            }
            catch (error) {
                onClose(error);
                setIsFullscreen(false);
            }
            screenfull_1.default.on('change', onChange);
        }
        else if (video && video.current && video.current.webkitEnterFullscreen) {
            video.current.webkitEnterFullscreen();
            video.current.addEventListener('webkitendfullscreen', onWebkitEndFullscreen);
            setIsFullscreen(true);
        }
        else {
            onClose();
            setIsFullscreen(false);
        }
        return function () {
            setIsFullscreen(false);
            if (screenfull_1.default.isEnabled) {
                try {
                    screenfull_1.default.off('change', onChange);
                    screenfull_1.default.exit();
                }
                catch (_a) { }
            }
            else if (video && video.current && video.current.webkitExitFullscreen) {
                video.current.removeEventListener('webkitendfullscreen', onWebkitEndFullscreen);
                video.current.webkitExitFullscreen();
            }
        };
    }, [on, video, ref]);
    return isFullscreen;
};
exports.default = useFullscreen;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useGeolocation.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useGeolocation.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useGeolocation = function (options) {
    var _a = react_1.useState({
        loading: true,
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: null,
        longitude: null,
        speed: null,
        timestamp: Date.now(),
    }), state = _a[0], setState = _a[1];
    var mounted = true;
    var watchId;
    var onEvent = function (event) {
        if (mounted) {
            setState({
                loading: false,
                accuracy: event.coords.accuracy,
                altitude: event.coords.altitude,
                altitudeAccuracy: event.coords.altitudeAccuracy,
                heading: event.coords.heading,
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
                speed: event.coords.speed,
                timestamp: event.timestamp,
            });
        }
    };
    var onEventError = function (error) {
        return mounted && setState(function (oldState) { return (tslib_1.__assign(tslib_1.__assign({}, oldState), { loading: false, error: error })); });
    };
    react_1.useEffect(function () {
        navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
        watchId = navigator.geolocation.watchPosition(onEvent, onEventError, options);
        return function () {
            mounted = false;
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);
    return state;
};
exports.default = useGeolocation;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useGetSet.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useGetSet.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js"));
var resolveHookState_1 = __webpack_require__(/*! ./util/resolveHookState */ "../../../node_modules/react-use/lib/util/resolveHookState.js");
function useGetSet(initialState) {
    var state = react_1.useRef(resolveHookState_1.resolveHookState(initialState));
    var update = useUpdate_1.default();
    return react_1.useMemo(function () { return [
        // get
        function () { return state.current; },
        // set
        function (newState) {
            state.current = resolveHookState_1.resolveHookState(newState, state.current);
            update();
        },
    ]; }, []);
}
exports.default = useGetSet;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useGetSetState.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useGetSetState.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js"));
var useGetSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    if (true) {
        if (typeof initialState !== 'object') {
            console.error('useGetSetState initial state must be an object.');
        }
    }
    var update = useUpdate_1.default();
    var state = react_1.useRef(tslib_1.__assign({}, initialState));
    var get = react_1.useCallback(function () { return state.current; }, []);
    var set = react_1.useCallback(function (patch) {
        if (!patch) {
            return;
        }
        if (true) {
            if (typeof patch !== 'object') {
                console.error('useGetSetState setter patch must be an object.');
            }
        }
        Object.assign(state.current, patch);
        update();
    }, []);
    return [get, set];
};
exports.default = useGetSetState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useHarmonicIntervalFn.js":
/*!*********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useHarmonicIntervalFn.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var set_harmonic_interval_1 = __webpack_require__(/*! set-harmonic-interval */ "../../../node_modules/set-harmonic-interval/lib/index.js");
var useHarmonicIntervalFn = function (fn, delay) {
    if (delay === void 0) { delay = 0; }
    var latestCallback = react_1.useRef(function () { });
    react_1.useEffect(function () {
        latestCallback.current = fn;
    });
    react_1.useEffect(function () {
        if (delay !== null) {
            var interval_1 = set_harmonic_interval_1.setHarmonicInterval(function () { return latestCallback.current(); }, delay);
            return function () { return set_harmonic_interval_1.clearHarmonicInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
exports.default = useHarmonicIntervalFn;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useHover.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useHover.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var useState = React.useState;
var noop = function () { };
var useHover = function (element) {
    var _a = useState(false), state = _a[0], setState = _a[1];
    var onMouseEnter = function (originalOnMouseEnter) { return function (event) {
        (originalOnMouseEnter || noop)(event);
        setState(true);
    }; };
    var onMouseLeave = function (originalOnMouseLeave) { return function (event) {
        (originalOnMouseLeave || noop)(event);
        setState(false);
    }; };
    if (typeof element === 'function') {
        element = element(state);
    }
    var el = React.cloneElement(element, {
        onMouseEnter: onMouseEnter(element.props.onMouseEnter),
        onMouseLeave: onMouseLeave(element.props.onMouseLeave),
    });
    return [el, state];
};
exports.default = useHover;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useHoverDirty.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useHoverDirty.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
// kudos: https://usehooks.com/
var useHoverDirty = function (ref, enabled) {
    if (enabled === void 0) { enabled = true; }
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('useHoverDirty expects a single ref argument.');
        }
    }
    var _a = react_1.useState(false), value = _a[0], setValue = _a[1];
    react_1.useEffect(function () {
        var onMouseOver = function () { return setValue(true); };
        var onMouseOut = function () { return setValue(false); };
        if (enabled && ref && ref.current) {
            ref.current.addEventListener('mouseover', onMouseOver);
            ref.current.addEventListener('mouseout', onMouseOut);
        }
        // fixes react-hooks/exhaustive-deps warning about stale ref elements
        var current = ref.current;
        return function () {
            if (enabled && current) {
                current.removeEventListener('mouseover', onMouseOver);
                current.removeEventListener('mouseout', onMouseOut);
            }
        };
    }, [enabled, ref]);
    return value;
};
exports.default = useHoverDirty;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useIdle.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useIdle.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var throttle_debounce_1 = __webpack_require__(/*! throttle-debounce */ "../../../node_modules/throttle-debounce/index.umd.js");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var defaultEvents = ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel'];
var oneMinute = 60e3;
var useIdle = function (ms, initialState, events) {
    if (ms === void 0) { ms = oneMinute; }
    if (initialState === void 0) { initialState = false; }
    if (events === void 0) { events = defaultEvents; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var timeout;
        var localState = state;
        var set = function (newState) {
            if (mounted) {
                localState = newState;
                setState(newState);
            }
        };
        var onEvent = throttle_debounce_1.throttle(50, function () {
            if (localState) {
                set(false);
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () { return set(true); }, ms);
        });
        var onVisibility = function () {
            if (!document.hidden) {
                onEvent();
            }
        };
        for (var i = 0; i < events.length; i++) {
            util_1.on(window, events[i], onEvent);
        }
        util_1.on(document, 'visibilitychange', onVisibility);
        timeout = setTimeout(function () { return set(true); }, ms);
        return function () {
            mounted = false;
            for (var i = 0; i < events.length; i++) {
                util_1.off(window, events[i], onEvent);
            }
            util_1.off(document, 'visibilitychange', onVisibility);
        };
    }, [ms, events]);
    return state;
};
exports.default = useIdle;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useIntersection.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useIntersection.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useIntersection = function (ref, options) {
    var _a = react_1.useState(null), intersectionObserverEntry = _a[0], setIntersectionObserverEntry = _a[1];
    react_1.useEffect(function () {
        if (ref.current && typeof IntersectionObserver === 'function') {
            var handler = function (entries) {
                setIntersectionObserverEntry(entries[0]);
            };
            var observer_1 = new IntersectionObserver(handler, options);
            observer_1.observe(ref.current);
            return function () {
                setIntersectionObserverEntry(null);
                observer_1.disconnect();
            };
        }
        return function () { };
    }, [ref.current, options.threshold, options.root, options.rootMargin]);
    return intersectionObserverEntry;
};
exports.default = useIntersection;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useInterval.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useInterval.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useInterval = function (callback, delay) {
    var savedCallback = react_1.useRef(function () { });
    react_1.useEffect(function () {
        savedCallback.current = callback;
    });
    react_1.useEffect(function () {
        if (delay !== null) {
            var interval_1 = setInterval(function () { return savedCallback.current(); }, delay || 0);
            return function () { return clearInterval(interval_1); };
        }
        return undefined;
    }, [delay]);
};
exports.default = useInterval;


/***/ }),

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

/***/ "../../../node_modules/react-use/lib/useKey.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useKey.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useEvent_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useEvent */ "../../../node_modules/react-use/lib/useEvent.js"));
var noop = function () { };
var createKeyPredicate = function (keyFilter) {
    return typeof keyFilter === 'function'
        ? keyFilter
        : typeof keyFilter === 'string'
            ? function (event) { return event.key === keyFilter; }
            : keyFilter
                ? function () { return true; }
                : function () { return false; };
};
var useKey = function (key, fn, opts, deps) {
    if (fn === void 0) { fn = noop; }
    if (opts === void 0) { opts = {}; }
    if (deps === void 0) { deps = [key]; }
    var _a = opts.event, event = _a === void 0 ? 'keydown' : _a, target = opts.target, options = opts.options;
    var useMemoHandler = react_1.useMemo(function () {
        var predicate = createKeyPredicate(key);
        var handler = function (handlerEvent) {
            if (predicate(handlerEvent)) {
                return fn(handlerEvent);
            }
        };
        return handler;
    }, deps);
    useEvent_1.default(event, useMemoHandler, target, options);
};
exports.default = useKey;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useKeyPress.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useKeyPress.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useKey_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useKey */ "../../../node_modules/react-use/lib/useKey.js"));
var useKeyPress = function (keyFilter) {
    var _a = react_1.useState([false, null]), state = _a[0], set = _a[1];
    useKey_1.default(keyFilter, function (event) { return set([true, event]); }, { event: 'keydown' }, [state]);
    useKey_1.default(keyFilter, function (event) { return set([false, event]); }, { event: 'keyup' }, [state]);
    return state;
};
exports.default = useKeyPress;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useKeyPressEvent.js":
/*!****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useKeyPressEvent.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useKeyPress_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useKeyPress */ "../../../node_modules/react-use/lib/useKeyPress.js"));
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdateEffect */ "../../../node_modules/react-use/lib/useUpdateEffect.js"));
var useKeyPressEvent = function (key, keydown, keyup, useKeyPress) {
    if (useKeyPress === void 0) { useKeyPress = useKeyPress_1.default; }
    var _a = useKeyPress(key), pressed = _a[0], event = _a[1];
    useUpdateEffect_1.default(function () {
        if (!pressed && keyup) {
            keyup(event);
        }
        else if (pressed && keydown) {
            keydown(event);
        }
    }, [pressed]);
};
exports.default = useKeyPressEvent;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLifecycles.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLifecycles.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useLifecycles = function (mount, unmount) {
    react_1.useEffect(function () {
        if (mount) {
            mount();
        }
        return function () {
            if (unmount) {
                unmount();
            }
        };
    }, []);
};
exports.default = useLifecycles;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useList.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useList.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js"));
var resolveHookState_1 = __webpack_require__(/*! ./util/resolveHookState */ "../../../node_modules/react-use/lib/util/resolveHookState.js");
function useList(initialList) {
    if (initialList === void 0) { initialList = []; }
    var list = react_1.useRef(resolveHookState_1.resolveHookState(initialList));
    var update = useUpdate_1.default();
    var actions = react_1.useMemo(function () {
        var a = {
            set: function (newList) {
                list.current = resolveHookState_1.resolveHookState(newList, list.current);
                update();
            },
            push: function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i] = arguments[_i];
                }
                items.length && actions.set(function (curr) { return curr.concat(items); });
            },
            updateAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr[index] = item;
                    return arr;
                });
            },
            insertAt: function (index, item) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    index > arr.length ? (arr[index] = item) : arr.splice(index, 0, item);
                    return arr;
                });
            },
            update: function (predicate, newItem) {
                actions.set(function (curr) { return curr.map(function (item) { return (predicate(item, newItem) ? newItem : item); }); });
            },
            updateFirst: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 && actions.updateAt(index, newItem);
            },
            upsert: function (predicate, newItem) {
                var index = list.current.findIndex(function (item) { return predicate(item, newItem); });
                index >= 0 ? actions.updateAt(index, newItem) : actions.push(newItem);
            },
            sort: function (compareFn) {
                actions.set(function (curr) { return curr.slice().sort(compareFn); });
            },
            filter: function (callbackFn, thisArg) {
                actions.set(function (curr) { return curr.slice().filter(callbackFn, thisArg); });
            },
            removeAt: function (index) {
                actions.set(function (curr) {
                    var arr = curr.slice();
                    arr.splice(index, 1);
                    return arr;
                });
            },
            clear: function () {
                actions.set([]);
            },
            reset: function () {
                actions.set(resolveHookState_1.resolveHookState(initialList).slice());
            },
        };
        /**
         * @deprecated Use removeAt method instead
         */
        a.remove = a.removeAt;
        return a;
    }, []);
    return [list.current, actions];
}
exports.default = useList;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLocalStorage.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLocalStorage.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useLocalStorage = function (key, initialValue, options) {
    if (!util_1.isClient) {
        return [initialValue, function () { }];
    }
    // Use provided serializer/deserializer or the default ones
    var serializer = options ? (options.raw ? String : options.serializer) : JSON.stringify;
    var deserializer = options ? (options.raw ? String : options.deserializer) : JSON.parse;
    var _a = react_1.useState(function () {
        try {
            var localStorageValue = localStorage.getItem(key);
            if (localStorageValue !== null) {
                return deserializer(localStorageValue);
            }
            else {
                initialValue && localStorage.setItem(key, serializer(initialValue));
                return initialValue;
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. JSON.parse and JSON.stringify
            // can throw, too.
            return initialValue;
        }
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        try {
            localStorage.setItem(key, serializer(state));
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // localStorage can throw. Also JSON.stringify can throw.
        }
    }, [state]);
    return [state, setState];
};
exports.default = useLocalStorage;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLocation.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLocation.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var patchHistoryMethod = function (method) {
    var original = history[method];
    history[method] = function (state) {
        var result = original.apply(this, arguments);
        var event = new Event(method.toLowerCase());
        event.state = state;
        window.dispatchEvent(event);
        return result;
    };
};
if (util_1.isClient) {
    patchHistoryMethod('pushState');
    patchHistoryMethod('replaceState');
}
var useLocationServer = function () { return ({
    trigger: 'load',
    length: 1,
}); };
var buildState = function (trigger) {
    var state = history.state, length = history.length;
    var hash = location.hash, host = location.host, hostname = location.hostname, href = location.href, origin = location.origin, pathname = location.pathname, port = location.port, protocol = location.protocol, search = location.search;
    return {
        trigger: trigger,
        state: state,
        length: length,
        hash: hash,
        host: host,
        hostname: hostname,
        href: href,
        origin: origin,
        pathname: pathname,
        port: port,
        protocol: protocol,
        search: search,
    };
};
var useLocationBrowser = function () {
    var _a = react_1.useState(buildState('load')), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var onPopstate = function () { return setState(buildState('popstate')); };
        var onPushstate = function () { return setState(buildState('pushstate')); };
        var onReplacestate = function () { return setState(buildState('replacestate')); };
        util_1.on(window, 'popstate', onPopstate);
        util_1.on(window, 'pushstate', onPushstate);
        util_1.on(window, 'replacestate', onReplacestate);
        return function () {
            util_1.off(window, 'popstate', onPopstate);
            util_1.off(window, 'pushstate', onPushstate);
            util_1.off(window, 'replacestate', onReplacestate);
        };
    }, []);
    return state;
};
var hasEventConstructor = typeof Event === 'function';
exports.default = util_1.isClient && hasEventConstructor ? useLocationBrowser : useLocationServer;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLockBodyScroll.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLockBodyScroll.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function getClosestBody(el) {
    if (!el) {
        return null;
    }
    else if (el.tagName === 'BODY') {
        return el;
    }
    else if (el.tagName === 'IFRAME') {
        var document_1 = el.contentDocument;
        return document_1 ? document_1.body : null;
    }
    else if (!el.offsetParent) {
        return null;
    }
    return getClosestBody(el.offsetParent);
}
exports.getClosestBody = getClosestBody;
function preventDefault(rawEvent) {
    var e = rawEvent || window.event;
    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
    if (e.touches.length > 1)
        return true;
    if (e.preventDefault)
        e.preventDefault();
    return false;
}
var isIosDevice = typeof window !== 'undefined' &&
    window.navigator &&
    window.navigator.platform &&
    /iP(ad|hone|od)/.test(window.navigator.platform);
var bodies = new Map();
var doc = typeof document === 'object' ? document : undefined;
var documentListenerAdded = false;
exports.default = !doc
    ? function useLockBodyMock(_locked, _elementRef) {
        if (_locked === void 0) { _locked = true; }
    }
    : function useLockBody(locked, elementRef) {
        if (locked === void 0) { locked = true; }
        elementRef = elementRef || react_1.useRef(doc.body);
        react_1.useEffect(function () {
            var body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            var bodyInfo = bodies.get(body);
            if (locked) {
                if (!bodyInfo) {
                    bodies.set(body, { counter: 1, initialOverflow: body.style.overflow });
                    if (isIosDevice) {
                        if (!documentListenerAdded) {
                            document.addEventListener('touchmove', preventDefault, { passive: false });
                            documentListenerAdded = true;
                        }
                    }
                    else {
                        body.style.overflow = 'hidden';
                    }
                }
                else {
                    bodies.set(body, { counter: bodyInfo.counter + 1, initialOverflow: bodyInfo.initialOverflow });
                }
            }
            else {
                if (bodyInfo) {
                    if (bodyInfo.counter === 1) {
                        bodies.delete(body);
                        if (isIosDevice) {
                            body.ontouchmove = null;
                            if (documentListenerAdded) {
                                document.removeEventListener('touchmove', preventDefault);
                                documentListenerAdded = false;
                            }
                        }
                        else {
                            body.style.overflow = bodyInfo.initialOverflow;
                        }
                    }
                    else {
                        bodies.set(body, { counter: bodyInfo.counter - 1, initialOverflow: bodyInfo.initialOverflow });
                    }
                }
            }
        }, [locked, elementRef.current]);
    };


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLogger.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLogger.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useEffectOnce */ "../../../node_modules/react-use/lib/useEffectOnce.js"));
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdateEffect */ "../../../node_modules/react-use/lib/useUpdateEffect.js"));
var useLogger = function (componentName) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    useEffectOnce_1.default(function () {
        console.log.apply(console, tslib_1.__spreadArrays([componentName + " mounted"], rest));
        return function () { return console.log(componentName + " unmounted"); };
    });
    useUpdateEffect_1.default(function () {
        console.log.apply(console, tslib_1.__spreadArrays([componentName + " updated"], rest));
    });
};
exports.default = useLogger;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useLongPress.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useLongPress.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var isTouchEvent = function (event) {
    return 'touches' in event;
};
var preventDefault = function (event) {
    if (!isTouchEvent(event))
        return;
    if (event.touches.length < 2 && event.preventDefault) {
        event.preventDefault();
    }
};
var useLongPress = function (callback, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.isPreventDefault, isPreventDefault = _c === void 0 ? true : _c, _d = _b.delay, delay = _d === void 0 ? 300 : _d;
    var timeout = react_1.useRef();
    var target = react_1.useRef();
    var start = react_1.useCallback(function (event) {
        // prevent ghost click on mobile devices
        if (isPreventDefault && event.target) {
            event.target.addEventListener('touchend', preventDefault, { passive: false });
            target.current = event.target;
        }
        timeout.current = setTimeout(function () { return callback(event); }, delay);
    }, [callback, delay]);
    var clear = react_1.useCallback(function () {
        // clearTimeout and removeEventListener
        timeout.current && clearTimeout(timeout.current);
        if (isPreventDefault && target.current) {
            target.current.removeEventListener('touchend', preventDefault);
        }
    }, []);
    return {
        onMouseDown: function (e) { return start(e); },
        onTouchStart: function (e) { return start(e); },
        onMouseUp: clear,
        onMouseLeave: clear,
        onTouchEnd: clear,
    };
};
exports.default = useLongPress;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMap.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMap.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useMap = function (initialMap) {
    if (initialMap === void 0) { initialMap = {}; }
    var _a = react_1.useState(initialMap), map = _a[0], set = _a[1];
    var stableActions = react_1.useMemo(function () { return ({
        set: function (key, entry) {
            set(function (prevMap) {
                var _a;
                return (tslib_1.__assign(tslib_1.__assign({}, prevMap), (_a = {}, _a[key] = entry, _a)));
            });
        },
        setAll: function (newMap) {
            set(newMap);
        },
        remove: function (key) {
            set(function (prevMap) {
                var _a = prevMap, _b = key, omit = _a[_b], rest = tslib_1.__rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                return rest;
            });
        },
        reset: function () { return set(initialMap); },
    }); }, [set]);
    var utils = tslib_1.__assign({ get: react_1.useCallback(function (key) { return map[key]; }, [map]) }, stableActions);
    return [map, utils];
};
exports.default = useMap;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMeasure.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMeasure.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var resize_observer_polyfill_1 = tslib_1.__importDefault(__webpack_require__(/*! resize-observer-polyfill */ "../../../node_modules/resize-observer-polyfill/dist/ResizeObserver.js"));
var useMeasure = function () {
    var _a = react_1.useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }), rect = _a[0], set = _a[1];
    var observer = react_1.useState(function () {
        return new resize_observer_polyfill_1.default(function (entries) {
            var entry = entries[0];
            if (entry) {
                set(entry.contentRect);
            }
        });
    })[0];
    var ref = react_1.useCallback(function (node) {
        observer.disconnect();
        if (node) {
            observer.observe(node);
        }
    }, [observer]);
    return [ref, rect];
};
exports.default = useMeasure;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMedia.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMedia.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useMedia = function (query, defaultState) {
    if (defaultState === void 0) { defaultState = false; }
    var _a = react_1.useState(util_1.isClient ? function () { return window.matchMedia(query).matches; } : defaultState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var mql = window.matchMedia(query);
        var onChange = function () {
            if (!mounted) {
                return;
            }
            setState(!!mql.matches);
        };
        mql.addListener(onChange);
        setState(mql.matches);
        return function () {
            mounted = false;
            mql.removeListener(onChange);
        };
    }, [query]);
    return state;
};
exports.default = useMedia;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMediaDevices.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMediaDevices.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var noop = function () { };
var useMediaDevices = function () {
    var _a = react_1.useState({}), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var onChange = function () {
            navigator.mediaDevices
                .enumerateDevices()
                .then(function (devices) {
                if (mounted) {
                    setState({
                        devices: devices.map(function (_a) {
                            var deviceId = _a.deviceId, groupId = _a.groupId, kind = _a.kind, label = _a.label;
                            return ({ deviceId: deviceId, groupId: groupId, kind: kind, label: label });
                        }),
                    });
                }
            })
                .catch(noop);
        };
        util_1.on(navigator.mediaDevices, 'devicechange', onChange);
        onChange();
        return function () {
            mounted = false;
            util_1.off(navigator.mediaDevices, 'devicechange', onChange);
        };
    }, []);
    return state;
};
var useMediaDevicesMock = function () { return ({}); };
exports.default = typeof navigator === 'object' && !!navigator.mediaDevices ? useMediaDevices : useMediaDevicesMock;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMediatedState.js":
/*!****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMediatedState.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function useMediatedState(mediator, initialState) {
    var mediatorFn = react_1.useRef(mediator);
    var _a = react_1.useState(initialState), state = _a[0], setMediatedState = _a[1];
    var setState = react_1.useCallback(function (newState) {
        if (mediatorFn.current.length === 2) {
            mediatorFn.current(newState, setMediatedState);
        }
        else {
            setMediatedState(mediatorFn.current(newState));
        }
    }, [state]);
    return [state, setState];
}
exports.useMediatedState = useMediatedState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMethods.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMethods.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useMethods = function (createMethods, initialState) {
    var reducer = react_1.useMemo(function () { return function (reducerState, action) {
        var _a;
        return (_a = createMethods(reducerState))[action.type].apply(_a, action.payload);
    }; }, [createMethods]);
    var _a = react_1.useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    var wrappedMethods = react_1.useMemo(function () {
        var actionTypes = Object.keys(createMethods(initialState));
        return actionTypes.reduce(function (acc, type) {
            acc[type] = function () {
                var payload = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    payload[_i] = arguments[_i];
                }
                return dispatch({ type: type, payload: payload });
            };
            return acc;
        }, {});
    }, [createMethods, initialState]);
    return [state, wrappedMethods];
};
exports.default = useMethods;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMotion.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMotion.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var defaultState = {
    acceleration: {
        x: null,
        y: null,
        z: null,
    },
    accelerationIncludingGravity: {
        x: null,
        y: null,
        z: null,
    },
    rotationRate: {
        alpha: null,
        beta: null,
        gamma: null,
    },
    interval: 16,
};
var useMotion = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handler = function (event) {
            var acceleration = event.acceleration, accelerationIncludingGravity = event.accelerationIncludingGravity, rotationRate = event.rotationRate, interval = event.interval;
            setState({
                acceleration: {
                    x: acceleration.x,
                    y: acceleration.y,
                    z: acceleration.z,
                },
                accelerationIncludingGravity: {
                    x: accelerationIncludingGravity.x,
                    y: accelerationIncludingGravity.y,
                    z: accelerationIncludingGravity.z,
                },
                rotationRate: {
                    alpha: rotationRate.alpha,
                    beta: rotationRate.beta,
                    gamma: rotationRate.gamma,
                },
                interval: interval,
            });
        };
        util_1.on(window, 'devicemotion', handler);
        return function () {
            util_1.off(window, 'devicemotion', handler);
        };
    }, []);
    return state;
};
exports.default = useMotion;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMount.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMount.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useEffectOnce */ "../../../node_modules/react-use/lib/useEffectOnce.js"));
var useMount = function (fn) {
    useEffectOnce_1.default(function () {
        fn();
    });
};
exports.default = useMount;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMountedState.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMountedState.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
function useMountedState() {
    var mountedRef = react_1.useRef(false);
    var get = react_1.useCallback(function () { return mountedRef.current; }, []);
    react_1.useEffect(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
        };
    });
    return get;
}
exports.default = useMountedState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMouse.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMouse.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useRafState */ "../../../node_modules/react-use/lib/useRafState.js"));
var useMouse = function (ref) {
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('useMouse expects a single ref argument.');
        }
    }
    var _a = useRafState_1.default({
        docX: 0,
        docY: 0,
        posX: 0,
        posY: 0,
        elX: 0,
        elY: 0,
        elH: 0,
        elW: 0,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var moveHandler = function (event) {
            if (ref && ref.current) {
                var _a = ref.current.getBoundingClientRect(), left = _a.left, top_1 = _a.top, elW = _a.width, elH = _a.height;
                var posX = left + window.pageXOffset;
                var posY = top_1 + window.pageYOffset;
                var elX = event.pageX - posX;
                var elY = event.pageY - posY;
                setState({
                    docX: event.pageX,
                    docY: event.pageY,
                    posX: posX,
                    posY: posY,
                    elX: elX,
                    elY: elY,
                    elH: elH,
                    elW: elW,
                });
            }
        };
        document.addEventListener('mousemove', moveHandler);
        return function () {
            document.removeEventListener('mousemove', moveHandler);
        };
    }, [ref]);
    return state;
};
exports.default = useMouse;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMouseHovered.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMouseHovered.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useHoverDirty_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useHoverDirty */ "../../../node_modules/react-use/lib/useHoverDirty.js"));
var useMouse_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMouse */ "../../../node_modules/react-use/lib/useMouse.js"));
var nullRef = { current: null };
var useMouseHovered = function (ref, options) {
    if (options === void 0) { options = {}; }
    var whenHovered = !!options.whenHovered;
    var bound = !!options.bound;
    var isHovered = useHoverDirty_1.default(ref, whenHovered);
    var state = useMouse_1.default(whenHovered && !isHovered ? nullRef : ref);
    if (bound) {
        state.elX = Math.max(0, Math.min(state.elX, state.elW));
        state.elY = Math.max(0, Math.min(state.elY, state.elH));
    }
    return state;
};
exports.default = useMouseHovered;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useMultiStateValidator.js":
/*!**********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useMultiStateValidator.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function useMultiStateValidator(states, validator, initialValidity) {
    if (initialValidity === void 0) { initialValidity = [undefined]; }
    if (typeof states !== 'object') {
        throw new Error('states expected to be an object or array, got ' + typeof states);
    }
    var validatorInner = react_1.useRef(validator);
    var statesInner = react_1.useRef(states);
    validatorInner.current = validator;
    statesInner.current = states;
    var _a = react_1.useState(initialValidity), validity = _a[0], setValidity = _a[1];
    var validate = react_1.useCallback(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(statesInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(statesInner.current));
        }
    }, [setValidity]);
    react_1.useEffect(function () {
        validate();
    }, Object.values(states));
    return [validity, validate];
}
exports.useMultiStateValidator = useMultiStateValidator;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useNetwork.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useNetwork.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var getConnection = function () {
    if (typeof navigator !== 'object') {
        return null;
    }
    var nav = navigator;
    return nav.connection || nav.mozConnection || nav.webkitConnection;
};
var getConnectionState = function () {
    var connection = getConnection();
    if (!connection) {
        return {};
    }
    var downlink = connection.downlink, downlinkMax = connection.downlinkMax, effectiveType = connection.effectiveType, type = connection.type, rtt = connection.rtt;
    return {
        downlink: downlink,
        downlinkMax: downlinkMax,
        effectiveType: effectiveType,
        type: type,
        rtt: rtt,
    };
};
var useNetwork = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var localState = state;
        var localSetState = function (patch) {
            localState = tslib_1.__assign(tslib_1.__assign({}, localState), patch);
            setState(localState);
        };
        var connection = getConnection();
        var onOnline = function () {
            localSetState({
                online: true,
                since: new Date(),
            });
        };
        var onOffline = function () {
            localSetState({
                online: false,
                since: new Date(),
            });
        };
        var onConnectionChange = function () {
            localSetState(getConnectionState());
        };
        util_1.on(window, 'online', onOnline);
        util_1.on(window, 'offline', onOffline);
        if (connection) {
            util_1.on(connection, 'change', onConnectionChange);
            localSetState(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, state), { online: navigator.onLine, since: undefined }), getConnectionState()));
        }
        return function () {
            util_1.off(window, 'online', onOnline);
            util_1.off(window, 'offline', onOffline);
            if (connection) {
                util_1.off(connection, 'change', onConnectionChange);
            }
        };
    }, []);
    return state;
};
exports.default = useNetwork;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useNumber.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useNumber.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useCounter_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useCounter */ "../../../node_modules/react-use/lib/useCounter.js"));
exports.default = useCounter_1.default;


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

/***/ "../../../node_modules/react-use/lib/useOrientation.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useOrientation.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var defaultState = {
    angle: 0,
    type: 'landscape-primary',
};
var useOrientation = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var mounted = true;
        var onChange = function () {
            if (mounted) {
                var orientation_1 = screen.orientation;
                if (orientation_1) {
                    var angle = orientation_1.angle, type = orientation_1.type;
                    setState({ angle: angle, type: type });
                }
                else if (window.orientation) {
                    setState({
                        angle: typeof window.orientation === 'number' ? window.orientation : 0,
                        type: '',
                    });
                }
                else {
                    setState(initialState);
                }
            }
        };
        util_1.on(window, 'orientationchange', onChange);
        onChange();
        return function () {
            mounted = false;
            util_1.off(window, 'orientationchange', onChange);
        };
    }, []);
    return state;
};
exports.default = useOrientation;


/***/ }),

/***/ "../../../node_modules/react-use/lib/usePageLeave.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/usePageLeave.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var usePageLeave = function (onPageLeave, args) {
    if (args === void 0) { args = []; }
    react_1.useEffect(function () {
        if (!onPageLeave) {
            return;
        }
        var handler = function (event) {
            event = event ? event : window.event;
            var from = event.relatedTarget || event.toElement;
            if (!from || from.nodeName === 'HTML') {
                onPageLeave();
            }
        };
        document.addEventListener('mouseout', handler);
        return function () {
            document.removeEventListener('mouseout', handler);
        };
    }, args);
};
exports.default = usePageLeave;


/***/ }),

/***/ "../../../node_modules/react-use/lib/usePermission.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/usePermission.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var noop = function () { };
var usePermission = function (permissionDesc) {
    var mounted = true;
    var permissionStatus = null;
    var _a = react_1.useState(''), state = _a[0], setState = _a[1];
    var onChange = function () {
        if (mounted && permissionStatus) {
            setState(permissionStatus.state);
        }
    };
    var changeState = function () {
        onChange();
        util_1.on(permissionStatus, 'change', onChange);
    };
    react_1.useEffect(function () {
        navigator.permissions
            .query(permissionDesc)
            .then(function (status) {
            permissionStatus = status;
            changeState();
        })
            .catch(noop);
        return function () {
            mounted = false;
            permissionStatus && util_1.off(permissionStatus, 'change', onChange);
        };
    }, []);
    return state;
};
exports.default = usePermission;


/***/ }),

/***/ "../../../node_modules/react-use/lib/usePrevious.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/usePrevious.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var usePrevious = function (state) {
    var ref = react_1.useRef();
    react_1.useEffect(function () {
        ref.current = state;
    });
    return ref.current;
};
exports.default = usePrevious;


/***/ }),

/***/ "../../../node_modules/react-use/lib/usePreviousDistinct.js":
/*!*******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/usePreviousDistinct.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useFirstMountState_1 = __webpack_require__(/*! ./useFirstMountState */ "../../../node_modules/react-use/lib/useFirstMountState.js");
var strictEquals = function (prev, next) { return prev === next; };
function usePreviousDistinct(value, compare) {
    if (compare === void 0) { compare = strictEquals; }
    var prevRef = react_1.useRef();
    var curRef = react_1.useRef(value);
    var isFirstMount = useFirstMountState_1.useFirstMountState();
    if (!isFirstMount && !compare(curRef.current, value)) {
        prevRef.current = curRef.current;
        curRef.current = value;
    }
    return prevRef.current;
}
exports.default = usePreviousDistinct;


/***/ }),

/***/ "../../../node_modules/react-use/lib/usePromise.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/usePromise.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var usePromise = function () {
    var isMounted = useMountedState_1.default();
    return react_1.useCallback(function (promise) {
        return new Promise(function (resolve, reject) {
            var onValue = function (value) {
                isMounted() && resolve(value);
            };
            var onError = function (error) {
                isMounted() && reject(error);
            };
            promise.then(onValue, onError);
        });
    }, []);
};
exports.default = usePromise;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useQueue.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useQueue.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useQueue = function (initialValue) {
    if (initialValue === void 0) { initialValue = []; }
    var _a = react_1.useState(initialValue), state = _a[0], set = _a[1];
    return {
        add: function (value) {
            set(function (queue) { return tslib_1.__spreadArrays(queue, [value]); });
        },
        remove: function () {
            var result;
            set(function (_a) {
                var first = _a[0], rest = _a.slice(1);
                result = first;
                return rest;
            });
            return result;
        },
        get first() {
            return state[0];
        },
        get last() {
            return state[state.length - 1];
        },
        get size() {
            return state.length;
        },
    };
};
exports.default = useQueue;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useRaf.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useRaf.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useRaf = function (ms, delay) {
    if (ms === void 0) { ms = 1e12; }
    if (delay === void 0) { delay = 0; }
    var _a = react_1.useState(0), elapsed = _a[0], set = _a[1];
    react_1.useLayoutEffect(function () {
        var raf;
        var timerStop;
        var start;
        var onFrame = function () {
            var time = Math.min(1, (Date.now() - start) / ms);
            set(time);
            loop();
        };
        var loop = function () {
            raf = requestAnimationFrame(onFrame);
        };
        var onStart = function () {
            timerStop = setTimeout(function () {
                cancelAnimationFrame(raf);
                set(1);
            }, ms);
            start = Date.now();
            loop();
        };
        var timerDelay = setTimeout(onStart, delay);
        return function () {
            clearTimeout(timerStop);
            clearTimeout(timerDelay);
            cancelAnimationFrame(raf);
        };
    }, [ms, delay]);
    return elapsed;
};
exports.default = useRaf;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useRafLoop.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useRafLoop.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function useRafLoop(callback) {
    var raf = react_1.useRef(null);
    var _a = react_1.useState(true), isActive = _a[0], setIsActive = _a[1];
    function loopStep() {
        callback();
        raf.current = requestAnimationFrame(loopStep);
    }
    function loopStop() {
        setIsActive(false);
    }
    function loopStart() {
        setIsActive(true);
    }
    function clearCurrentLoop() {
        raf.current && cancelAnimationFrame(raf.current);
    }
    react_1.useEffect(function () { return clearCurrentLoop; }, []);
    react_1.useEffect(function () {
        clearCurrentLoop();
        isActive && (raf.current = requestAnimationFrame(loopStep));
        return clearCurrentLoop;
    }, [isActive, callback]);
    return [loopStop, isActive, loopStart];
}
exports.default = useRafLoop;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useRafState.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useRafState.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useUnmount_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUnmount */ "../../../node_modules/react-use/lib/useUnmount.js"));
var useRafState = function (initialState) {
    var frame = react_1.useRef(0);
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    var setRafState = react_1.useCallback(function (value) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function () {
            setState(value);
        });
    }, []);
    useUnmount_1.default(function () {
        cancelAnimationFrame(frame.current);
    });
    return [state, setRafState];
};
exports.default = useRafState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useRendersCount.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useRendersCount.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
function useRendersCount() {
    return ++react_1.useRef(0).current;
}
exports.useRendersCount = useRendersCount;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useScroll.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useScroll.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useRafState */ "../../../node_modules/react-use/lib/useRafState.js"));
var useScroll = function (ref) {
    if (true) {
        if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
            console.error('`useScroll` expects a single ref argument.');
        }
    }
    var _a = useRafState_1.default({
        x: 0,
        y: 0,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handler = function () {
            if (ref.current) {
                setState({
                    x: ref.current.scrollLeft,
                    y: ref.current.scrollTop,
                });
            }
        };
        if (ref.current) {
            ref.current.addEventListener('scroll', handler, {
                capture: false,
                passive: true,
            });
        }
        return function () {
            if (ref.current) {
                ref.current.removeEventListener('scroll', handler);
            }
        };
    }, [ref]);
    return state;
};
exports.default = useScroll;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useScrollbarWidth.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useScrollbarWidth.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var scrollbar_width_1 = __webpack_require__(/*! @xobotyi/scrollbar-width */ "../../../node_modules/@xobotyi/scrollbar-width/dist/index.js");
var react_1 = __webpack_require__(/*! react */ "react");
function useScrollbarWidth() {
    var _a = react_1.useState(scrollbar_width_1.scrollbarWidth()), sbw = _a[0], setSbw = _a[1];
    // this needed to ensure the scrollbar width in case hook called before the DOM is ready
    react_1.useEffect(function () {
        if (typeof sbw !== 'undefined') {
            return;
        }
        var raf = requestAnimationFrame(function () {
            setSbw(scrollbar_width_1.scrollbarWidth());
        });
        return function () { return cancelAnimationFrame(raf); };
    }, []);
    return sbw;
}
exports.useScrollbarWidth = useScrollbarWidth;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useScrolling.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useScrolling.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useScrolling = function (ref) {
    var _a = react_1.useState(false), scrolling = _a[0], setScrolling = _a[1];
    react_1.useEffect(function () {
        if (ref.current) {
            var scrollingTimeout_1;
            var handleScrollEnd_1 = function () {
                setScrolling(false);
            };
            var handleScroll_1 = function () {
                setScrolling(true);
                clearTimeout(scrollingTimeout_1);
                scrollingTimeout_1 = setTimeout(function () { return handleScrollEnd_1(); }, 150);
            };
            ref.current.addEventListener('scroll', handleScroll_1, false);
            return function () {
                if (ref.current) {
                    ref.current.removeEventListener('scroll', handleScroll_1, false);
                }
            };
        }
        return function () { };
    }, [ref]);
    return scrolling;
};
exports.default = useScrolling;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSearchParam.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSearchParam.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var getValue = function (search, param) { return new URLSearchParams(search).get(param); };
var useSearchParam = function (param) {
    var _a = react_1.useState(function () { return getValue(location.search, param); }), value = _a[0], setValue = _a[1];
    react_1.useEffect(function () {
        var onChange = function () {
            setValue(getValue(location.search, param));
        };
        window.addEventListener('popstate', onChange);
        window.addEventListener('pushstate', onChange);
        window.addEventListener('replacestate', onChange);
        return function () {
            window.removeEventListener('popstate', onChange);
            window.removeEventListener('pushstate', onChange);
            window.removeEventListener('replacestate', onChange);
        };
    }, []);
    return value;
};
var useSearchParamServer = function () { return null; };
exports.default = typeof window === 'object' ? useSearchParam : useSearchParamServer;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSessionStorage.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSessionStorage.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useSessionStorage = function (key, initialValue, raw) {
    if (!util_1.isClient) {
        return [initialValue, function () { }];
    }
    var _a = react_1.useState(function () {
        try {
            var sessionStorageValue = sessionStorage.getItem(key);
            if (typeof sessionStorageValue !== 'string') {
                sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
                return initialValue;
            }
            else {
                return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || 'null');
            }
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. JSON.parse and JSON.stringify
            // cat throw, too.
            return initialValue;
        }
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        try {
            var serializedState = raw ? String(state) : JSON.stringify(state);
            sessionStorage.setItem(key, serializedState);
        }
        catch (_a) {
            // If user is in private mode or has storage restriction
            // sessionStorage can throw. Also JSON.stringify can throw.
        }
    });
    return [state, setState];
};
exports.default = useSessionStorage;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSet.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSet.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useSet = function (initialSet) {
    if (initialSet === void 0) { initialSet = new Set(); }
    var _a = react_1.useState(initialSet), set = _a[0], setSet = _a[1];
    var stableActions = react_1.useMemo(function () {
        var add = function (item) { return setSet(function (prevSet) { return new Set(tslib_1.__spreadArrays(Array.from(prevSet), [item])); }); };
        var remove = function (item) { return setSet(function (prevSet) { return new Set(Array.from(prevSet).filter(function (i) { return i !== item; })); }); };
        var toggle = function (item) {
            return setSet(function (prevSet) {
                return prevSet.has(item)
                    ? new Set(Array.from(prevSet).filter(function (i) { return i !== item; }))
                    : new Set(tslib_1.__spreadArrays(Array.from(prevSet), [item]));
            });
        };
        return { add: add, remove: remove, toggle: toggle, reset: function () { return setSet(initialSet); } };
    }, [setSet]);
    var utils = tslib_1.__assign({ has: react_1.useCallback(function (item) { return set.has(item); }, [set]) }, stableActions);
    return [set, utils];
};
exports.default = useSet;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSetState.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSetState.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = react_1.useState(initialState), state = _a[0], set = _a[1];
    var setState = react_1.useCallback(function (patch) {
        set(function (prevState) { return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch); });
    }, [set]);
    return [state, setState];
};
exports.default = useSetState;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useShallowCompareEffect.js":
/*!***********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useShallowCompareEffect.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var fast_shallow_equal_1 = __webpack_require__(/*! fast-shallow-equal */ "../../../node_modules/fast-shallow-equal/index.js");
var useCustomCompareEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useCustomCompareEffect */ "../../../node_modules/react-use/lib/useCustomCompareEffect.js"));
var isPrimitive = function (val) { return val !== Object(val); };
var shallowEqualDepsList = function (prevDeps, nextDeps) {
    return prevDeps.every(function (dep, index) { return fast_shallow_equal_1.equal(dep, nextDeps[index]); });
};
var useShallowCompareEffect = function (effect, deps) {
    if (true) {
        if (!(deps instanceof Array) || !deps.length) {
            console.warn('`useShallowCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
        }
        if (deps.every(isPrimitive)) {
            console.warn('`useShallowCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
        }
    }
    useCustomCompareEffect_1.default(effect, deps, shallowEqualDepsList);
};
exports.default = useShallowCompareEffect;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSize.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSize.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useState = React.useState, useEffect = React.useEffect, useRef = React.useRef;
var DRAF = function (callback) { return setTimeout(callback, 35); };
var useSize = function (element, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.width, width = _c === void 0 ? Infinity : _c, _d = _b.height, height = _d === void 0 ? Infinity : _d;
    if (!util_1.isClient) {
        return [typeof element === 'function' ? element({ width: width, height: height }) : element, { width: width, height: height }];
    }
    var _e = useState({ width: width, height: height }), state = _e[0], setState = _e[1];
    if (typeof element === 'function') {
        element = element(state);
    }
    var style = element.props.style || {};
    var ref = useRef(null);
    var window = null;
    var setSize = function () {
        var iframe = ref.current;
        var size = iframe
            ? {
                width: iframe.offsetWidth,
                height: iframe.offsetHeight,
            }
            : { width: width, height: height };
        setState(size);
    };
    var onWindow = function (windowToListenOn) {
        windowToListenOn.addEventListener('resize', setSize);
        DRAF(setSize);
    };
    useEffect(function () {
        var iframe = ref.current;
        if (!iframe) {
            // iframe will be undefined if component is already unmounted
            return;
        }
        if (iframe.contentWindow) {
            window = iframe.contentWindow;
            onWindow(window);
        }
        else {
            var onLoad_1 = function () {
                iframe.removeEventListener('load', onLoad_1);
                window = iframe.contentWindow;
                onWindow(window);
            };
            iframe.addEventListener('load', onLoad_1);
        }
        return function () {
            if (window && window.removeEventListener) {
                window.removeEventListener('resize', setSize);
            }
        };
    }, []);
    style.position = 'relative';
    var sized = React.cloneElement.apply(React, tslib_1.__spreadArrays([element,
        { style: style }], tslib_1.__spreadArrays([
        React.createElement('iframe', {
            ref: ref,
            style: {
                background: 'transparent',
                border: 'none',
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: -1,
            },
        })
    ], React.Children.toArray(element.props.children))));
    return [sized, state];
};
exports.default = useSize;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSlider.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSlider.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useSetState */ "../../../node_modules/react-use/lib/useSetState.js"));
var noop = function () { };
var useSlider = function (ref, options) {
    if (options === void 0) { options = {}; }
    var isMounted = useMountedState_1.default();
    var isSliding = react_1.useRef(false);
    var frame = react_1.useRef(0);
    var _a = useSetState_1.default({
        isSliding: false,
        value: 0,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        if (util_1.isClient) {
            var styles = options.styles === undefined ? true : options.styles;
            var reverse_1 = options.reverse === undefined ? false : options.reverse;
            if (ref.current && styles) {
                ref.current.style.userSelect = 'none';
            }
            var startScrubbing_1 = function () {
                if (!isSliding.current && isMounted()) {
                    (options.onScrubStart || noop)();
                    isSliding.current = true;
                    setState({ isSliding: true });
                    bindEvents_1();
                }
            };
            var stopScrubbing_1 = function () {
                if (isSliding.current && isMounted()) {
                    (options.onScrubStop || noop)();
                    isSliding.current = false;
                    setState({ isSliding: false });
                    unbindEvents_1();
                }
            };
            var onMouseDown_1 = function (event) {
                startScrubbing_1();
                onMouseMove_1(event);
            };
            var onMouseMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.clientY); }
                : function (event) { return onScrub_1(event.clientX); };
            var onTouchStart_1 = function (event) {
                startScrubbing_1();
                onTouchMove_1(event);
            };
            var onTouchMove_1 = options.vertical
                ? function (event) { return onScrub_1(event.changedTouches[0].clientY); }
                : function (event) { return onScrub_1(event.changedTouches[0].clientX); };
            var bindEvents_1 = function () {
                util_1.on(document, 'mousemove', onMouseMove_1);
                util_1.on(document, 'mouseup', stopScrubbing_1);
                util_1.on(document, 'touchmove', onTouchMove_1);
                util_1.on(document, 'touchend', stopScrubbing_1);
            };
            var unbindEvents_1 = function () {
                util_1.off(document, 'mousemove', onMouseMove_1);
                util_1.off(document, 'mouseup', stopScrubbing_1);
                util_1.off(document, 'touchmove', onTouchMove_1);
                util_1.off(document, 'touchend', stopScrubbing_1);
            };
            var onScrub_1 = function (clientXY) {
                cancelAnimationFrame(frame.current);
                frame.current = requestAnimationFrame(function () {
                    if (isMounted() && ref.current) {
                        var rect = ref.current.getBoundingClientRect();
                        var pos = options.vertical ? rect.top : rect.left;
                        var length_1 = options.vertical ? rect.height : rect.width;
                        // Prevent returning 0 when element is hidden by CSS
                        if (!length_1) {
                            return;
                        }
                        var value = (clientXY - pos) / length_1;
                        if (value > 1) {
                            value = 1;
                        }
                        else if (value < 0) {
                            value = 0;
                        }
                        if (reverse_1) {
                            value = 1 - value;
                        }
                        setState({
                            value: value,
                        });
                        (options.onScrub || noop)(value);
                    }
                });
            };
            util_1.on(ref.current, 'mousedown', onMouseDown_1);
            util_1.on(ref.current, 'touchstart', onTouchStart_1);
            return function () {
                util_1.off(ref.current, 'mousedown', onMouseDown_1);
                util_1.off(ref.current, 'touchstart', onTouchStart_1);
            };
        }
        else {
            return undefined;
        }
    }, [ref, options.vertical]);
    return state;
};
exports.default = useSlider;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useSpeech.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useSpeech.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useMount_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMount */ "../../../node_modules/react-use/lib/useMount.js"));
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useSetState */ "../../../node_modules/react-use/lib/useSetState.js"));
var voices = typeof window === 'object' && typeof window.speechSynthesis === 'object' ? window.speechSynthesis.getVoices() : [];
var useSpeech = function (text, opts) {
    if (opts === void 0) { opts = {}; }
    var _a = useSetState_1.default({
        isPlaying: false,
        lang: opts.lang || 'default',
        voice: opts.voice || voices[0],
        rate: opts.rate || 1,
        pitch: opts.pitch || 1,
        volume: opts.volume || 1,
    }), state = _a[0], setState = _a[1];
    var uterranceRef = react_1.useRef(null);
    useMount_1.default(function () {
        var utterance = new SpeechSynthesisUtterance(text);
        opts.lang && (utterance.lang = opts.lang);
        opts.voice && (utterance.voice = opts.voice);
        utterance.rate = opts.rate || 1;
        utterance.pitch = opts.pitch || 1;
        utterance.volume = opts.volume || 1;
        utterance.onstart = function () { return setState({ isPlaying: true }); };
        utterance.onresume = function () { return setState({ isPlaying: true }); };
        utterance.onend = function () { return setState({ isPlaying: false }); };
        utterance.onpause = function () { return setState({ isPlaying: false }); };
        uterranceRef.current = utterance;
        window.speechSynthesis.speak(uterranceRef.current);
    });
    return state;
};
exports.default = useSpeech;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useStartTyping.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useStartTyping.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var isFocusedElementEditable = function () {
    var activeElement = document.activeElement, body = document.body;
    if (!activeElement) {
        return false;
    }
    // If not element has focus, we assume it is not editable, too.
    if (activeElement === body) {
        return false;
    }
    // Assume <input> and <textarea> elements are editable.
    switch (activeElement.tagName) {
        case 'INPUT':
        case 'TEXTAREA':
            return true;
    }
    // Check if any other focused element id editable.
    return activeElement.hasAttribute('contenteditable');
};
var isTypedCharGood = function (_a) {
    var keyCode = _a.keyCode, metaKey = _a.metaKey, ctrlKey = _a.ctrlKey, altKey = _a.altKey;
    if (metaKey || ctrlKey || altKey) {
        return false;
    }
    // 0...9
    if (keyCode >= 48 && keyCode <= 57) {
        return true;
    }
    // a...z
    if (keyCode >= 65 && keyCode <= 90) {
        return true;
    }
    // All other keys.
    return false;
};
var useStartTyping = function (onStartTyping) {
    react_1.useLayoutEffect(function () {
        var keydown = function (event) {
            !isFocusedElementEditable() && isTypedCharGood(event) && onStartTyping(event);
        };
        document.addEventListener('keydown', keydown);
        return function () {
            document.removeEventListener('keydown', keydown);
        };
    }, []);
};
exports.default = useStartTyping;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useStateList.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useStateList.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useMountedState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useMountedState */ "../../../node_modules/react-use/lib/useMountedState.js"));
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js"));
var useUpdateEffect_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdateEffect */ "../../../node_modules/react-use/lib/useUpdateEffect.js"));
function useStateList(stateSet) {
    if (stateSet === void 0) { stateSet = []; }
    var isMounted = useMountedState_1.default();
    var update = useUpdate_1.default();
    var index = react_1.useRef(0);
    // If new state list is shorter that before - switch to the last element
    useUpdateEffect_1.default(function () {
        if (stateSet.length <= index.current) {
            index.current = stateSet.length - 1;
            update();
        }
    }, [stateSet.length]);
    var actions = react_1.useMemo(function () { return ({
        next: function () { return actions.setStateAt(index.current + 1); },
        prev: function () { return actions.setStateAt(index.current - 1); },
        setStateAt: function (newIndex) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            // do nothing on empty states list
            if (!stateSet.length)
                return;
            // in case new index is equal current - do nothing
            if (newIndex === index.current)
                return;
            // it gives the ability to travel through the left and right borders.
            // 4ex: if list contains 5 elements, attempt to set index 9 will bring use to 5th element
            // in case of negative index it will start counting from the right, so -17 will bring us to 4th element
            index.current = newIndex >= 0 ? newIndex % stateSet.length : stateSet.length + (newIndex % stateSet.length);
            update();
        },
        setState: function (state) {
            // do nothing on unmounted component
            if (!isMounted())
                return;
            var newIndex = stateSet.length ? stateSet.indexOf(state) : -1;
            if (newIndex === -1) {
                throw new Error("State '" + state + "' is not a valid state (does not exist in state list)");
            }
            index.current = newIndex;
            update();
        },
    }); }, [stateSet]);
    return tslib_1.__assign({ state: stateSet[index.current], currentIndex: index.current }, actions);
}
exports.default = useStateList;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useStateValidator.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useStateValidator.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function useStateValidator(state, validator, initialState) {
    if (initialState === void 0) { initialState = [undefined]; }
    var validatorInner = react_1.useRef(validator);
    var stateInner = react_1.useRef(state);
    validatorInner.current = validator;
    stateInner.current = state;
    var _a = react_1.useState(initialState), validity = _a[0], setValidity = _a[1];
    var validate = react_1.useCallback(function () {
        if (validatorInner.current.length >= 2) {
            validatorInner.current(stateInner.current, setValidity);
        }
        else {
            setValidity(validatorInner.current(stateInner.current));
        }
    }, [setValidity]);
    react_1.useEffect(function () {
        validate();
    }, [state]);
    return [validity, validate];
}
exports.default = useStateValidator;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useStateWithHistory.js":
/*!*******************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useStateWithHistory.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useFirstMountState_1 = __webpack_require__(/*! ./useFirstMountState */ "../../../node_modules/react-use/lib/useFirstMountState.js");
var resolveHookState_1 = __webpack_require__(/*! ./util/resolveHookState */ "../../../node_modules/react-use/lib/util/resolveHookState.js");
function useStateWithHistory(initialState, capacity, initialHistory) {
    if (capacity === void 0) { capacity = 10; }
    if (capacity < 1) {
        throw new Error("Capacity has to be greater than 1, got '" + capacity + "'");
    }
    var isFirstMount = useFirstMountState_1.useFirstMountState();
    var _a = react_1.useState(initialState), state = _a[0], innerSetState = _a[1];
    var history = react_1.useRef((initialHistory !== null && initialHistory !== void 0 ? initialHistory : []));
    var historyPosition = react_1.useRef(0);
    // do the states manipulation only on first mount, no sense to load re-renders with useless calculations
    if (isFirstMount) {
        if (history.current.length) {
            // if last element of history !== initial - push initial to history
            if (history.current[history.current.length - 1] !== initialState) {
                history.current.push(initialState);
            }
            // if initial history bigger that capacity - crop the first elements out
            if (history.current.length > capacity) {
                history.current = history.current.slice(history.current.length - capacity);
            }
        }
        else {
            // initiate the history with initial state
            history.current.push(initialState);
        }
        historyPosition.current = history.current.length && history.current.length - 1;
    }
    var setState = react_1.useCallback(function (newState) {
        innerSetState(function (currentState) {
            newState = resolveHookState_1.resolveHookState(newState);
            // is state has changed
            if (newState !== currentState) {
                // if current position is not the last - pop element to the right
                if (historyPosition.current < history.current.length - 1) {
                    history.current = history.current.slice(0, historyPosition.current + 1);
                }
                historyPosition.current = history.current.push(newState) - 1;
                // if capacity is reached - shift first elements
                if (history.current.length > capacity) {
                    history.current = history.current.slice(history.current.length - capacity);
                }
            }
            return newState;
        });
    }, [state, capacity]);
    var historyState = react_1.useMemo(function () { return ({
        history: history.current,
        position: historyPosition.current,
        capacity: capacity,
        back: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the left border
            if (!historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current -= Math.min(amount, historyPosition.current);
                return history.current[historyPosition.current];
            });
        },
        forward: function (amount) {
            if (amount === void 0) { amount = 1; }
            // don't do anything if we already at the right border
            if (historyPosition.current === history.current.length - 1) {
                return;
            }
            innerSetState(function () {
                historyPosition.current = Math.min(historyPosition.current + amount, history.current.length - 1);
                return history.current[historyPosition.current];
            });
        },
        go: function (position) {
            if (position === historyPosition.current) {
                return;
            }
            innerSetState(function () {
                historyPosition.current =
                    position < 0
                        ? Math.max(history.current.length + position, 0)
                        : Math.min(history.current.length - 1, position);
                return history.current[historyPosition.current];
            });
        },
    }); }, [state]);
    return [state, setState, historyState];
}
exports.useStateWithHistory = useStateWithHistory;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useThrottle.js":
/*!***********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useThrottle.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useUnmount_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUnmount */ "../../../node_modules/react-use/lib/useUnmount.js"));
var useThrottle = function (value, ms) {
    if (ms === void 0) { ms = 200; }
    var _a = react_1.useState(value), state = _a[0], setState = _a[1];
    var timeout = react_1.useRef();
    var nextValue = react_1.useRef(null);
    var hasNextValue = react_1.useRef(0);
    react_1.useEffect(function () {
        if (!timeout.current) {
            setState(value);
            var timeoutCallback_1 = function () {
                if (hasNextValue.current) {
                    hasNextValue.current = false;
                    setState(nextValue.current);
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextValue.current = value;
            hasNextValue.current = true;
        }
    }, [value]);
    useUnmount_1.default(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
exports.default = useThrottle;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useThrottleFn.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useThrottleFn.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useUnmount_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUnmount */ "../../../node_modules/react-use/lib/useUnmount.js"));
var useThrottleFn = function (fn, ms, args) {
    if (ms === void 0) { ms = 200; }
    var _a = react_1.useState(null), state = _a[0], setState = _a[1];
    var timeout = react_1.useRef();
    var nextArgs = react_1.useRef();
    react_1.useEffect(function () {
        if (!timeout.current) {
            setState(fn.apply(void 0, args));
            var timeoutCallback_1 = function () {
                if (nextArgs.current) {
                    setState(fn.apply(void 0, nextArgs.current));
                    nextArgs.current = undefined;
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextArgs.current = args;
        }
    }, args);
    useUnmount_1.default(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
exports.default = useThrottleFn;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useTimeout.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useTimeout.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useTimeoutFn_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useTimeoutFn */ "../../../node_modules/react-use/lib/useTimeoutFn.js"));
var useUpdate_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useUpdate */ "../../../node_modules/react-use/lib/useUpdate.js"));
function useTimeout(ms) {
    if (ms === void 0) { ms = 0; }
    var update = useUpdate_1.default();
    return useTimeoutFn_1.default(update, ms);
}
exports.default = useTimeout;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useTimeoutFn.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useTimeoutFn.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
function useTimeoutFn(fn, ms) {
    if (ms === void 0) { ms = 0; }
    var ready = react_1.useRef(false);
    var timeout = react_1.useRef();
    var callback = react_1.useRef(fn);
    var isReady = react_1.useCallback(function () { return ready.current; }, []);
    var set = react_1.useCallback(function () {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);
        timeout.current = setTimeout(function () {
            ready.current = true;
            callback.current();
        }, ms);
    }, [ms]);
    var clear = react_1.useCallback(function () {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);
    // update ref when function changes
    react_1.useEffect(function () {
        callback.current = fn;
    }, [fn]);
    // set on mount, clear on unmount
    react_1.useEffect(function () {
        set();
        return clear;
    }, [ms]);
    return [isReady, clear, set];
}
exports.default = useTimeoutFn;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useTitle.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useTitle.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var DEFAULT_USE_TITLE_OPTIONS = {
    restoreOnUnmount: false,
};
function useTitle(title, options) {
    if (options === void 0) { options = DEFAULT_USE_TITLE_OPTIONS; }
    var prevTitleRef = react_1.useRef(document.title);
    document.title = title;
    react_1.useEffect(function () {
        if (options && options.restoreOnUnmount) {
            return function () {
                document.title = prevTitleRef.current;
            };
        }
        else {
            return;
        }
    }, []);
}
exports.default = typeof document !== 'undefined' ? useTitle : function (_title) { };


/***/ }),

/***/ "../../../node_modules/react-use/lib/useToggle.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useToggle.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useToggle = function (initialValue) {
    var _a = react_1.useState(initialValue), value = _a[0], setValue = _a[1];
    var toggle = react_1.useCallback(function (nextValue) {
        if (typeof nextValue === 'boolean') {
            setValue(nextValue);
        }
        else {
            setValue(function (currentValue) { return !currentValue; });
        }
    }, [setValue]);
    return [value, toggle];
};
exports.default = useToggle;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useTween.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useTween.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var ts_easing_1 = __webpack_require__(/*! ts-easing */ "../../../node_modules/ts-easing/lib/index.js");
var useRaf_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useRaf */ "../../../node_modules/react-use/lib/useRaf.js"));
var useTween = function (easingName, ms, delay) {
    if (easingName === void 0) { easingName = 'inCirc'; }
    if (ms === void 0) { ms = 200; }
    if (delay === void 0) { delay = 0; }
    var fn = ts_easing_1.easing[easingName];
    var t = useRaf_1.default(ms, delay);
    if (true) {
        if (typeof fn !== 'function') {
            console.error('useTween() expected "easingName" property to be a valid easing function name, like:' +
                '"' +
                Object.keys(ts_easing_1.easing).join('", "') +
                '".');
            console.trace();
            return 0;
        }
    }
    return fn(t);
};
exports.default = useTween;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useUnmount.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useUnmount.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var react_1 = __webpack_require__(/*! react */ "react");
var useEffectOnce_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useEffectOnce */ "../../../node_modules/react-use/lib/useEffectOnce.js"));
var useUnmount = function (fn) {
    var fnRef = react_1.useRef(fn);
    // update the ref each render so if it change the newest callback will be invoked
    fnRef.current = fn;
    useEffectOnce_1.default(function () { return function () { return fnRef.current(); }; });
};
exports.default = useUnmount;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useUnmountPromise.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useUnmountPromise.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var useUnmountPromise = function () {
    var refUnmounted = react_1.useRef(false);
    react_1.useEffect(function () { return function () {
        refUnmounted.current = true;
    }; });
    var wrapper = react_1.useMemo(function () {
        var race = function (promise, onError) {
            var newPromise = new Promise(function (resolve, reject) {
                promise.then(function (result) {
                    if (!refUnmounted.current)
                        resolve(result);
                }, function (error) {
                    if (!refUnmounted.current)
                        reject(error);
                    else if (onError)
                        onError(error);
                    else
                        console.error('useUnmountPromise', error);
                });
            });
            return newPromise;
        };
        return race;
    }, []);
    return wrapper;
};
exports.default = useUnmountPromise;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useUpdate.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useUpdate.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __webpack_require__(/*! react */ "react");
var incrementParameter = function (num) { return ++num % 1000000; };
var useUpdate = function () {
    var _a = react_1.useState(0), setState = _a[1];
    // useCallback with empty deps as we only want to define updateCb once
    return react_1.useCallback(function () { return setState(incrementParameter); }, []);
};
exports.default = useUpdate;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useUpdateEffect.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useUpdateEffect.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useFirstMountState_1 = __webpack_require__(/*! ./useFirstMountState */ "../../../node_modules/react-use/lib/useFirstMountState.js");
var useUpdateEffect = function (effect, deps) {
    var isFirstMount = useFirstMountState_1.useFirstMountState();
    react_1.useEffect(function () {
        if (!isFirstMount) {
            return effect();
        }
    }, deps);
};
exports.default = useUpdateEffect;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useUpsert.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useUpsert.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var useList_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useList */ "../../../node_modules/react-use/lib/useList.js"));
/**
 * @deprecated Use `useList` hook's upsert action instead
 */
function useUpsert(predicate, initialList) {
    if (initialList === void 0) { initialList = []; }
    var _a = useList_1.default(initialList), list = _a[0], listActions = _a[1];
    return [
        list,
        tslib_1.__assign(tslib_1.__assign({}, listActions), { upsert: function (newItem) {
                listActions.upsert(predicate, newItem);
            } }),
    ];
}
exports.default = useUpsert;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useVibrate.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useVibrate.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var isVibrationApiSupported = typeof navigator === 'object' && 'vibrate' in navigator;
var useVibrateMock = function () { };
function useVibrate(enabled, pattern, loop) {
    if (enabled === void 0) { enabled = true; }
    if (pattern === void 0) { pattern = [1000, 1000]; }
    if (loop === void 0) { loop = true; }
    react_1.useEffect(function () {
        var interval;
        if (enabled) {
            navigator.vibrate(pattern);
            if (loop) {
                var duration = pattern instanceof Array ? pattern.reduce(function (a, b) { return a + b; }) : pattern;
                interval = setInterval(function () {
                    navigator.vibrate(pattern);
                }, duration);
            }
        }
        return function () {
            if (enabled) {
                navigator.vibrate(0);
                if (loop) {
                    clearInterval(interval);
                }
            }
        };
    }, [enabled]);
}
exports.default = isVibrationApiSupported ? useVibrate : useVibrateMock;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useVideo.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useVideo.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var createHTMLMediaHook_1 = tslib_1.__importDefault(__webpack_require__(/*! ./util/createHTMLMediaHook */ "../../../node_modules/react-use/lib/util/createHTMLMediaHook.js"));
var useVideo = createHTMLMediaHook_1.default('video');
exports.default = useVideo;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useWindowScroll.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useWindowScroll.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useRafState */ "../../../node_modules/react-use/lib/useRafState.js"));
var useWindowScroll = function () {
    var _a = useRafState_1.default({
        x: util_1.isClient ? window.pageXOffset : 0,
        y: util_1.isClient ? window.pageYOffset : 0,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var handler = function () {
            setState({
                x: window.pageXOffset,
                y: window.pageYOffset,
            });
        };
        window.addEventListener('scroll', handler, {
            capture: false,
            passive: true,
        });
        return function () {
            window.removeEventListener('scroll', handler);
        };
    }, []);
    return state;
};
exports.default = useWindowScroll;


/***/ }),

/***/ "../../../node_modules/react-use/lib/useWindowSize.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/useWindowSize.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var react_1 = __webpack_require__(/*! react */ "react");
var useRafState_1 = tslib_1.__importDefault(__webpack_require__(/*! ./useRafState */ "../../../node_modules/react-use/lib/useRafState.js"));
var util_1 = __webpack_require__(/*! ./util */ "../../../node_modules/react-use/lib/util.js");
var useWindowSize = function (initialWidth, initialHeight) {
    if (initialWidth === void 0) { initialWidth = Infinity; }
    if (initialHeight === void 0) { initialHeight = Infinity; }
    var _a = useRafState_1.default({
        width: util_1.isClient ? window.innerWidth : initialWidth,
        height: util_1.isClient ? window.innerHeight : initialHeight,
    }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        if (util_1.isClient) {
            var handler_1 = function () {
                setState({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            window.addEventListener('resize', handler_1);
            return function () {
                window.removeEventListener('resize', handler_1);
            };
        }
    }, []);
    return state;
};
exports.default = useWindowSize;


/***/ }),

/***/ "../../../node_modules/react-use/lib/util.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/util.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isClient = typeof window === 'object';
exports.on = function (obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return obj.addEventListener.apply(obj, args);
};
exports.off = function (obj) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return obj.removeEventListener.apply(obj, args);
};
exports.isDeepEqual = __webpack_require__(/*! fast-deep-equal/react */ "../../../node_modules/fast-deep-equal/react.js");


/***/ }),

/***/ "../../../node_modules/react-use/lib/util/createHTMLMediaHook.js":
/*!************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/util/createHTMLMediaHook.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
/* eslint-disable */
var React = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
var react_1 = __webpack_require__(/*! react */ "react");
var useSetState_1 = tslib_1.__importDefault(__webpack_require__(/*! ../useSetState */ "../../../node_modules/react-use/lib/useSetState.js"));
var parseTimeRanges_1 = tslib_1.__importDefault(__webpack_require__(/*! ./parseTimeRanges */ "../../../node_modules/react-use/lib/util/parseTimeRanges.js"));
var createHTMLMediaHook = function (tag) {
    var hook = function (elOrProps) {
        var element;
        var props;
        if (React.isValidElement(elOrProps)) {
            element = elOrProps;
            props = element.props;
        }
        else {
            props = elOrProps;
        }
        var _a = useSetState_1.default({
            buffered: [],
            time: 0,
            duration: 0,
            paused: true,
            muted: false,
            volume: 1,
        }), state = _a[0], setState = _a[1];
        var ref = react_1.useRef(null);
        var wrapEvent = function (userEvent, proxyEvent) {
            return function (event) {
                try {
                    proxyEvent && proxyEvent(event);
                }
                finally {
                    userEvent && userEvent(event);
                }
            };
        };
        var onPlay = function () { return setState({ paused: false }); };
        var onPause = function () { return setState({ paused: true }); };
        var onVolumeChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({
                muted: el.muted,
                volume: el.volume,
            });
        };
        var onDurationChange = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            var duration = el.duration, buffered = el.buffered;
            setState({
                duration: duration,
                buffered: parseTimeRanges_1.default(buffered),
            });
        };
        var onTimeUpdate = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ time: el.currentTime });
        };
        var onProgress = function () {
            var el = ref.current;
            if (!el) {
                return;
            }
            setState({ buffered: parseTimeRanges_1.default(el.buffered) });
        };
        if (element) {
            element = React.cloneElement(element, tslib_1.__assign(tslib_1.__assign({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) }));
        }
        else {
            element = React.createElement(tag, tslib_1.__assign(tslib_1.__assign({ controls: false }, props), { ref: ref, onPlay: wrapEvent(props.onPlay, onPlay), onPause: wrapEvent(props.onPause, onPause), onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange), onDurationChange: wrapEvent(props.onDurationChange, onDurationChange), onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate), onProgress: wrapEvent(props.onProgress, onProgress) })); // TODO: fix this typing.
        }
        // Some browsers return `Promise` on `.play()` and may throw errors
        // if one tries to execute another `.play()` or `.pause()` while that
        // promise is resolving. So we prevent that with this lock.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=593273
        var lockPlay = false;
        var controls = {
            play: function () {
                var el = ref.current;
                if (!el) {
                    return undefined;
                }
                if (!lockPlay) {
                    var promise = el.play();
                    var isPromise = typeof promise === 'object';
                    if (isPromise) {
                        lockPlay = true;
                        var resetLock = function () {
                            lockPlay = false;
                        };
                        promise.then(resetLock, resetLock);
                    }
                    return promise;
                }
                return undefined;
            },
            pause: function () {
                var el = ref.current;
                if (el && !lockPlay) {
                    return el.pause();
                }
            },
            seek: function (time) {
                var el = ref.current;
                if (!el || state.duration === undefined) {
                    return;
                }
                time = Math.min(state.duration, Math.max(0, time));
                el.currentTime = time;
            },
            volume: function (volume) {
                var el = ref.current;
                if (!el) {
                    return;
                }
                volume = Math.min(1, Math.max(0, volume));
                el.volume = volume;
                setState({ volume: volume });
            },
            mute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = true;
            },
            unmute: function () {
                var el = ref.current;
                if (!el) {
                    return;
                }
                el.muted = false;
            },
        };
        react_1.useEffect(function () {
            var el = ref.current;
            if (!el) {
                if (true) {
                    console.error('useAudio() ref to <audio> element is empty at mount. ' +
                        'It seem you have not rendered the audio element, which is ' +
                        'returns as the first argument const [audio] = useAudio(...).');
                }
                return;
            }
            setState({
                volume: el.volume,
                muted: el.muted,
                paused: el.paused,
            });
            // Start media, if autoPlay requested.
            if (props.autoPlay && el.paused) {
                controls.play();
            }
        }, [props.src]);
        return [element, state, controls, ref];
    };
    return hook;
};
exports.default = createHTMLMediaHook;


/***/ }),

/***/ "../../../node_modules/react-use/lib/util/parseTimeRanges.js":
/*!********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/util/parseTimeRanges.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var parseTimeRanges = function (ranges) {
    var result = [];
    for (var i = 0; i < ranges.length; i++) {
        result.push({
            start: ranges.start(i),
            end: ranges.end(i),
        });
    }
    return result;
};
exports.default = parseTimeRanges;


/***/ }),

/***/ "../../../node_modules/react-use/lib/util/resolveHookState.js":
/*!*********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/react-use/lib/util/resolveHookState.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function resolveHookState(newState, currentState) {
    if (typeof newState === 'function') {
        return newState(currentState);
    }
    return newState;
}
exports.resolveHookState = resolveHookState;


/***/ }),

/***/ "../../../node_modules/resize-observer-polyfill/dist/ResizeObserver.js":
/*!******************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/resize-observer-polyfill/dist/ResizeObserver.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

    /**
     * A collection of shims that provide minimal functionality of the ES6 collections.
     *
     * These implementations are not meant to be used outside of the ResizeObserver
     * modules as they cover only a limited range of use cases.
     */
    /* eslint-disable require-jsdoc, valid-jsdoc */
    var MapShim = (function () {
        if (typeof Map !== 'undefined') {
            return Map;
        }
        /**
         * Returns index in provided array that matches the specified key.
         *
         * @param {Array<Array>} arr
         * @param {*} key
         * @returns {number}
         */
        function getIndex(arr, key) {
            var result = -1;
            arr.some(function (entry, index) {
                if (entry[0] === key) {
                    result = index;
                    return true;
                }
                return false;
            });
            return result;
        }
        return /** @class */ (function () {
            function class_1() {
                this.__entries__ = [];
            }
            Object.defineProperty(class_1.prototype, "size", {
                /**
                 * @returns {boolean}
                 */
                get: function () {
                    return this.__entries__.length;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {*} key
             * @returns {*}
             */
            class_1.prototype.get = function (key) {
                var index = getIndex(this.__entries__, key);
                var entry = this.__entries__[index];
                return entry && entry[1];
            };
            /**
             * @param {*} key
             * @param {*} value
             * @returns {void}
             */
            class_1.prototype.set = function (key, value) {
                var index = getIndex(this.__entries__, key);
                if (~index) {
                    this.__entries__[index][1] = value;
                }
                else {
                    this.__entries__.push([key, value]);
                }
            };
            /**
             * @param {*} key
             * @returns {void}
             */
            class_1.prototype.delete = function (key) {
                var entries = this.__entries__;
                var index = getIndex(entries, key);
                if (~index) {
                    entries.splice(index, 1);
                }
            };
            /**
             * @param {*} key
             * @returns {void}
             */
            class_1.prototype.has = function (key) {
                return !!~getIndex(this.__entries__, key);
            };
            /**
             * @returns {void}
             */
            class_1.prototype.clear = function () {
                this.__entries__.splice(0);
            };
            /**
             * @param {Function} callback
             * @param {*} [ctx=null]
             * @returns {void}
             */
            class_1.prototype.forEach = function (callback, ctx) {
                if (ctx === void 0) { ctx = null; }
                for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    callback.call(ctx, entry[1], entry[0]);
                }
            };
            return class_1;
        }());
    })();

    /**
     * Detects whether window and document objects are available in current environment.
     */
    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

    // Returns global object of a current environment.
    var global$1 = (function () {
        if (typeof global !== 'undefined' && global.Math === Math) {
            return global;
        }
        if (typeof self !== 'undefined' && self.Math === Math) {
            return self;
        }
        if (typeof window !== 'undefined' && window.Math === Math) {
            return window;
        }
        // eslint-disable-next-line no-new-func
        return Function('return this')();
    })();

    /**
     * A shim for the requestAnimationFrame which falls back to the setTimeout if
     * first one is not supported.
     *
     * @returns {number} Requests' identifier.
     */
    var requestAnimationFrame$1 = (function () {
        if (typeof requestAnimationFrame === 'function') {
            // It's required to use a bounded function because IE sometimes throws
            // an "Invalid calling object" error if rAF is invoked without the global
            // object on the left hand side.
            return requestAnimationFrame.bind(global$1);
        }
        return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
    })();

    // Defines minimum timeout before adding a trailing call.
    var trailingTimeout = 2;
    /**
     * Creates a wrapper function which ensures that provided callback will be
     * invoked only once during the specified delay period.
     *
     * @param {Function} callback - Function to be invoked after the delay period.
     * @param {number} delay - Delay after which to invoke callback.
     * @returns {Function}
     */
    function throttle (callback, delay) {
        var leadingCall = false, trailingCall = false, lastCallTime = 0;
        /**
         * Invokes the original callback function and schedules new invocation if
         * the "proxy" was called during current request.
         *
         * @returns {void}
         */
        function resolvePending() {
            if (leadingCall) {
                leadingCall = false;
                callback();
            }
            if (trailingCall) {
                proxy();
            }
        }
        /**
         * Callback invoked after the specified delay. It will further postpone
         * invocation of the original function delegating it to the
         * requestAnimationFrame.
         *
         * @returns {void}
         */
        function timeoutCallback() {
            requestAnimationFrame$1(resolvePending);
        }
        /**
         * Schedules invocation of the original function.
         *
         * @returns {void}
         */
        function proxy() {
            var timeStamp = Date.now();
            if (leadingCall) {
                // Reject immediately following calls.
                if (timeStamp - lastCallTime < trailingTimeout) {
                    return;
                }
                // Schedule new call to be in invoked when the pending one is resolved.
                // This is important for "transitions" which never actually start
                // immediately so there is a chance that we might miss one if change
                // happens amids the pending invocation.
                trailingCall = true;
            }
            else {
                leadingCall = true;
                trailingCall = false;
                setTimeout(timeoutCallback, delay);
            }
            lastCallTime = timeStamp;
        }
        return proxy;
    }

    // Minimum delay before invoking the update of observers.
    var REFRESH_DELAY = 20;
    // A list of substrings of CSS properties used to find transition events that
    // might affect dimensions of observed elements.
    var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
    // Check if MutationObserver is available.
    var mutationObserverSupported = typeof MutationObserver !== 'undefined';
    /**
     * Singleton controller class which handles updates of ResizeObserver instances.
     */
    var ResizeObserverController = /** @class */ (function () {
        /**
         * Creates a new instance of ResizeObserverController.
         *
         * @private
         */
        function ResizeObserverController() {
            /**
             * Indicates whether DOM listeners have been added.
             *
             * @private {boolean}
             */
            this.connected_ = false;
            /**
             * Tells that controller has subscribed for Mutation Events.
             *
             * @private {boolean}
             */
            this.mutationEventsAdded_ = false;
            /**
             * Keeps reference to the instance of MutationObserver.
             *
             * @private {MutationObserver}
             */
            this.mutationsObserver_ = null;
            /**
             * A list of connected observers.
             *
             * @private {Array<ResizeObserverSPI>}
             */
            this.observers_ = [];
            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
            this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
        }
        /**
         * Adds observer to observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be added.
         * @returns {void}
         */
        ResizeObserverController.prototype.addObserver = function (observer) {
            if (!~this.observers_.indexOf(observer)) {
                this.observers_.push(observer);
            }
            // Add listeners if they haven't been added yet.
            if (!this.connected_) {
                this.connect_();
            }
        };
        /**
         * Removes observer from observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be removed.
         * @returns {void}
         */
        ResizeObserverController.prototype.removeObserver = function (observer) {
            var observers = this.observers_;
            var index = observers.indexOf(observer);
            // Remove observer if it's present in registry.
            if (~index) {
                observers.splice(index, 1);
            }
            // Remove listeners if controller has no connected observers.
            if (!observers.length && this.connected_) {
                this.disconnect_();
            }
        };
        /**
         * Invokes the update of observers. It will continue running updates insofar
         * it detects changes.
         *
         * @returns {void}
         */
        ResizeObserverController.prototype.refresh = function () {
            var changesDetected = this.updateObservers_();
            // Continue running updates if changes have been detected as there might
            // be future ones caused by CSS transitions.
            if (changesDetected) {
                this.refresh();
            }
        };
        /**
         * Updates every observer from observers list and notifies them of queued
         * entries.
         *
         * @private
         * @returns {boolean} Returns "true" if any observer has detected changes in
         *      dimensions of it's elements.
         */
        ResizeObserverController.prototype.updateObservers_ = function () {
            // Collect observers that have active observations.
            var activeObservers = this.observers_.filter(function (observer) {
                return observer.gatherActive(), observer.hasActive();
            });
            // Deliver notifications in a separate cycle in order to avoid any
            // collisions between observers, e.g. when multiple instances of
            // ResizeObserver are tracking the same element and the callback of one
            // of them changes content dimensions of the observed target. Sometimes
            // this may result in notifications being blocked for the rest of observers.
            activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
            return activeObservers.length > 0;
        };
        /**
         * Initializes DOM listeners.
         *
         * @private
         * @returns {void}
         */
        ResizeObserverController.prototype.connect_ = function () {
            // Do nothing if running in a non-browser environment or if listeners
            // have been already added.
            if (!isBrowser || this.connected_) {
                return;
            }
            // Subscription to the "Transitionend" event is used as a workaround for
            // delayed transitions. This way it's possible to capture at least the
            // final state of an element.
            document.addEventListener('transitionend', this.onTransitionEnd_);
            window.addEventListener('resize', this.refresh);
            if (mutationObserverSupported) {
                this.mutationsObserver_ = new MutationObserver(this.refresh);
                this.mutationsObserver_.observe(document, {
                    attributes: true,
                    childList: true,
                    characterData: true,
                    subtree: true
                });
            }
            else {
                document.addEventListener('DOMSubtreeModified', this.refresh);
                this.mutationEventsAdded_ = true;
            }
            this.connected_ = true;
        };
        /**
         * Removes DOM listeners.
         *
         * @private
         * @returns {void}
         */
        ResizeObserverController.prototype.disconnect_ = function () {
            // Do nothing if running in a non-browser environment or if listeners
            // have been already removed.
            if (!isBrowser || !this.connected_) {
                return;
            }
            document.removeEventListener('transitionend', this.onTransitionEnd_);
            window.removeEventListener('resize', this.refresh);
            if (this.mutationsObserver_) {
                this.mutationsObserver_.disconnect();
            }
            if (this.mutationEventsAdded_) {
                document.removeEventListener('DOMSubtreeModified', this.refresh);
            }
            this.mutationsObserver_ = null;
            this.mutationEventsAdded_ = false;
            this.connected_ = false;
        };
        /**
         * "Transitionend" event handler.
         *
         * @private
         * @param {TransitionEvent} event
         * @returns {void}
         */
        ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
            var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
            // Detect whether transition may affect dimensions of an element.
            var isReflowProperty = transitionKeys.some(function (key) {
                return !!~propertyName.indexOf(key);
            });
            if (isReflowProperty) {
                this.refresh();
            }
        };
        /**
         * Returns instance of the ResizeObserverController.
         *
         * @returns {ResizeObserverController}
         */
        ResizeObserverController.getInstance = function () {
            if (!this.instance_) {
                this.instance_ = new ResizeObserverController();
            }
            return this.instance_;
        };
        /**
         * Holds reference to the controller's instance.
         *
         * @private {ResizeObserverController}
         */
        ResizeObserverController.instance_ = null;
        return ResizeObserverController;
    }());

    /**
     * Defines non-writable/enumerable properties of the provided target object.
     *
     * @param {Object} target - Object for which to define properties.
     * @param {Object} props - Properties to be defined.
     * @returns {Object} Target object.
     */
    var defineConfigurable = (function (target, props) {
        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
            var key = _a[_i];
            Object.defineProperty(target, key, {
                value: props[key],
                enumerable: false,
                writable: false,
                configurable: true
            });
        }
        return target;
    });

    /**
     * Returns the global object associated with provided element.
     *
     * @param {Object} target
     * @returns {Object}
     */
    var getWindowOf = (function (target) {
        // Assume that the element is an instance of Node, which means that it
        // has the "ownerDocument" property from which we can retrieve a
        // corresponding global object.
        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
        // Return the local global object if it's not possible extract one from
        // provided element.
        return ownerGlobal || global$1;
    });

    // Placeholder of an empty content rectangle.
    var emptyRect = createRectInit(0, 0, 0, 0);
    /**
     * Converts provided string to a number.
     *
     * @param {number|string} value
     * @returns {number}
     */
    function toFloat(value) {
        return parseFloat(value) || 0;
    }
    /**
     * Extracts borders size from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @param {...string} positions - Borders positions (top, right, ...)
     * @returns {number}
     */
    function getBordersSize(styles) {
        var positions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            positions[_i - 1] = arguments[_i];
        }
        return positions.reduce(function (size, position) {
            var value = styles['border-' + position + '-width'];
            return size + toFloat(value);
        }, 0);
    }
    /**
     * Extracts paddings sizes from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @returns {Object} Paddings box.
     */
    function getPaddings(styles) {
        var positions = ['top', 'right', 'bottom', 'left'];
        var paddings = {};
        for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
            var position = positions_1[_i];
            var value = styles['padding-' + position];
            paddings[position] = toFloat(value);
        }
        return paddings;
    }
    /**
     * Calculates content rectangle of provided SVG element.
     *
     * @param {SVGGraphicsElement} target - Element content rectangle of which needs
     *      to be calculated.
     * @returns {DOMRectInit}
     */
    function getSVGContentRect(target) {
        var bbox = target.getBBox();
        return createRectInit(0, 0, bbox.width, bbox.height);
    }
    /**
     * Calculates content rectangle of provided HTMLElement.
     *
     * @param {HTMLElement} target - Element for which to calculate the content rectangle.
     * @returns {DOMRectInit}
     */
    function getHTMLElementContentRect(target) {
        // Client width & height properties can't be
        // used exclusively as they provide rounded values.
        var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
        // By this condition we can catch all non-replaced inline, hidden and
        // detached elements. Though elements with width & height properties less
        // than 0.5 will be discarded as well.
        //
        // Without it we would need to implement separate methods for each of
        // those cases and it's not possible to perform a precise and performance
        // effective test for hidden elements. E.g. even jQuery's ':visible' filter
        // gives wrong results for elements with width & height less than 0.5.
        if (!clientWidth && !clientHeight) {
            return emptyRect;
        }
        var styles = getWindowOf(target).getComputedStyle(target);
        var paddings = getPaddings(styles);
        var horizPad = paddings.left + paddings.right;
        var vertPad = paddings.top + paddings.bottom;
        // Computed styles of width & height are being used because they are the
        // only dimensions available to JS that contain non-rounded values. It could
        // be possible to utilize the getBoundingClientRect if only it's data wasn't
        // affected by CSS transformations let alone paddings, borders and scroll bars.
        var width = toFloat(styles.width), height = toFloat(styles.height);
        // Width & height include paddings and borders when the 'border-box' box
        // model is applied (except for IE).
        if (styles.boxSizing === 'border-box') {
            // Following conditions are required to handle Internet Explorer which
            // doesn't include paddings and borders to computed CSS dimensions.
            //
            // We can say that if CSS dimensions + paddings are equal to the "client"
            // properties then it's either IE, and thus we don't need to subtract
            // anything, or an element merely doesn't have paddings/borders styles.
            if (Math.round(width + horizPad) !== clientWidth) {
                width -= getBordersSize(styles, 'left', 'right') + horizPad;
            }
            if (Math.round(height + vertPad) !== clientHeight) {
                height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
            }
        }
        // Following steps can't be applied to the document's root element as its
        // client[Width/Height] properties represent viewport area of the window.
        // Besides, it's as well not necessary as the <html> itself neither has
        // rendered scroll bars nor it can be clipped.
        if (!isDocumentElement(target)) {
            // In some browsers (only in Firefox, actually) CSS width & height
            // include scroll bars size which can be removed at this step as scroll
            // bars are the only difference between rounded dimensions + paddings
            // and "client" properties, though that is not always true in Chrome.
            var vertScrollbar = Math.round(width + horizPad) - clientWidth;
            var horizScrollbar = Math.round(height + vertPad) - clientHeight;
            // Chrome has a rather weird rounding of "client" properties.
            // E.g. for an element with content width of 314.2px it sometimes gives
            // the client width of 315px and for the width of 314.7px it may give
            // 314px. And it doesn't happen all the time. So just ignore this delta
            // as a non-relevant.
            if (Math.abs(vertScrollbar) !== 1) {
                width -= vertScrollbar;
            }
            if (Math.abs(horizScrollbar) !== 1) {
                height -= horizScrollbar;
            }
        }
        return createRectInit(paddings.left, paddings.top, width, height);
    }
    /**
     * Checks whether provided element is an instance of the SVGGraphicsElement.
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */
    var isSVGGraphicsElement = (function () {
        // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
        // interface.
        if (typeof SVGGraphicsElement !== 'undefined') {
            return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
        }
        // If it's so, then check that element is at least an instance of the
        // SVGElement and that it has the "getBBox" method.
        // eslint-disable-next-line no-extra-parens
        return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
            typeof target.getBBox === 'function'); };
    })();
    /**
     * Checks whether provided element is a document element (<html>).
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */
    function isDocumentElement(target) {
        return target === getWindowOf(target).document.documentElement;
    }
    /**
     * Calculates an appropriate content rectangle for provided html or svg element.
     *
     * @param {Element} target - Element content rectangle of which needs to be calculated.
     * @returns {DOMRectInit}
     */
    function getContentRect(target) {
        if (!isBrowser) {
            return emptyRect;
        }
        if (isSVGGraphicsElement(target)) {
            return getSVGContentRect(target);
        }
        return getHTMLElementContentRect(target);
    }
    /**
     * Creates rectangle with an interface of the DOMRectReadOnly.
     * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
     *
     * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
     * @returns {DOMRectReadOnly}
     */
    function createReadOnlyRect(_a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        // If DOMRectReadOnly is available use it as a prototype for the rectangle.
        var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
        var rect = Object.create(Constr.prototype);
        // Rectangle's properties are not writable and non-enumerable.
        defineConfigurable(rect, {
            x: x, y: y, width: width, height: height,
            top: y,
            right: x + width,
            bottom: height + y,
            left: x
        });
        return rect;
    }
    /**
     * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
     * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
     *
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} width - Rectangle's width.
     * @param {number} height - Rectangle's height.
     * @returns {DOMRectInit}
     */
    function createRectInit(x, y, width, height) {
        return { x: x, y: y, width: width, height: height };
    }

    /**
     * Class that is responsible for computations of the content rectangle of
     * provided DOM element and for keeping track of it's changes.
     */
    var ResizeObservation = /** @class */ (function () {
        /**
         * Creates an instance of ResizeObservation.
         *
         * @param {Element} target - Element to be observed.
         */
        function ResizeObservation(target) {
            /**
             * Broadcasted width of content rectangle.
             *
             * @type {number}
             */
            this.broadcastWidth = 0;
            /**
             * Broadcasted height of content rectangle.
             *
             * @type {number}
             */
            this.broadcastHeight = 0;
            /**
             * Reference to the last observed content rectangle.
             *
             * @private {DOMRectInit}
             */
            this.contentRect_ = createRectInit(0, 0, 0, 0);
            this.target = target;
        }
        /**
         * Updates content rectangle and tells whether it's width or height properties
         * have changed since the last broadcast.
         *
         * @returns {boolean}
         */
        ResizeObservation.prototype.isActive = function () {
            var rect = getContentRect(this.target);
            this.contentRect_ = rect;
            return (rect.width !== this.broadcastWidth ||
                rect.height !== this.broadcastHeight);
        };
        /**
         * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
         * from the corresponding properties of the last observed content rectangle.
         *
         * @returns {DOMRectInit} Last observed content rectangle.
         */
        ResizeObservation.prototype.broadcastRect = function () {
            var rect = this.contentRect_;
            this.broadcastWidth = rect.width;
            this.broadcastHeight = rect.height;
            return rect;
        };
        return ResizeObservation;
    }());

    var ResizeObserverEntry = /** @class */ (function () {
        /**
         * Creates an instance of ResizeObserverEntry.
         *
         * @param {Element} target - Element that is being observed.
         * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
         */
        function ResizeObserverEntry(target, rectInit) {
            var contentRect = createReadOnlyRect(rectInit);
            // According to the specification following properties are not writable
            // and are also not enumerable in the native implementation.
            //
            // Property accessors are not being used as they'd require to define a
            // private WeakMap storage which may cause memory leaks in browsers that
            // don't support this type of collections.
            defineConfigurable(this, { target: target, contentRect: contentRect });
        }
        return ResizeObserverEntry;
    }());

    var ResizeObserverSPI = /** @class */ (function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback function that is invoked
         *      when one of the observed elements changes it's content dimensions.
         * @param {ResizeObserverController} controller - Controller instance which
         *      is responsible for the updates of observer.
         * @param {ResizeObserver} callbackCtx - Reference to the public
         *      ResizeObserver instance which will be passed to callback function.
         */
        function ResizeObserverSPI(callback, controller, callbackCtx) {
            /**
             * Collection of resize observations that have detected changes in dimensions
             * of elements.
             *
             * @private {Array<ResizeObservation>}
             */
            this.activeObservations_ = [];
            /**
             * Registry of the ResizeObservation instances.
             *
             * @private {Map<Element, ResizeObservation>}
             */
            this.observations_ = new MapShim();
            if (typeof callback !== 'function') {
                throw new TypeError('The callback provided as parameter 1 is not a function.');
            }
            this.callback_ = callback;
            this.controller_ = controller;
            this.callbackCtx_ = callbackCtx;
        }
        /**
         * Starts observing provided element.
         *
         * @param {Element} target - Element to be observed.
         * @returns {void}
         */
        ResizeObserverSPI.prototype.observe = function (target) {
            if (!arguments.length) {
                throw new TypeError('1 argument required, but only 0 present.');
            }
            // Do nothing if current environment doesn't have the Element interface.
            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
                return;
            }
            if (!(target instanceof getWindowOf(target).Element)) {
                throw new TypeError('parameter 1 is not of type "Element".');
            }
            var observations = this.observations_;
            // Do nothing if element is already being observed.
            if (observations.has(target)) {
                return;
            }
            observations.set(target, new ResizeObservation(target));
            this.controller_.addObserver(this);
            // Force the update of observations.
            this.controller_.refresh();
        };
        /**
         * Stops observing provided element.
         *
         * @param {Element} target - Element to stop observing.
         * @returns {void}
         */
        ResizeObserverSPI.prototype.unobserve = function (target) {
            if (!arguments.length) {
                throw new TypeError('1 argument required, but only 0 present.');
            }
            // Do nothing if current environment doesn't have the Element interface.
            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
                return;
            }
            if (!(target instanceof getWindowOf(target).Element)) {
                throw new TypeError('parameter 1 is not of type "Element".');
            }
            var observations = this.observations_;
            // Do nothing if element is not being observed.
            if (!observations.has(target)) {
                return;
            }
            observations.delete(target);
            if (!observations.size) {
                this.controller_.removeObserver(this);
            }
        };
        /**
         * Stops observing all elements.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.disconnect = function () {
            this.clearActive();
            this.observations_.clear();
            this.controller_.removeObserver(this);
        };
        /**
         * Collects observation instances the associated element of which has changed
         * it's content rectangle.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.gatherActive = function () {
            var _this = this;
            this.clearActive();
            this.observations_.forEach(function (observation) {
                if (observation.isActive()) {
                    _this.activeObservations_.push(observation);
                }
            });
        };
        /**
         * Invokes initial callback function with a list of ResizeObserverEntry
         * instances collected from active resize observations.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.broadcastActive = function () {
            // Do nothing if observer doesn't have active observations.
            if (!this.hasActive()) {
                return;
            }
            var ctx = this.callbackCtx_;
            // Create ResizeObserverEntry instance for every active observation.
            var entries = this.activeObservations_.map(function (observation) {
                return new ResizeObserverEntry(observation.target, observation.broadcastRect());
            });
            this.callback_.call(ctx, entries, ctx);
            this.clearActive();
        };
        /**
         * Clears the collection of active observations.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.clearActive = function () {
            this.activeObservations_.splice(0);
        };
        /**
         * Tells whether observer has active observations.
         *
         * @returns {boolean}
         */
        ResizeObserverSPI.prototype.hasActive = function () {
            return this.activeObservations_.length > 0;
        };
        return ResizeObserverSPI;
    }());

    // Registry of internal observers. If WeakMap is not available use current shim
    // for the Map collection as it has all required methods and because WeakMap
    // can't be fully polyfilled anyway.
    var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
    /**
     * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
     * exposing only those methods and properties that are defined in the spec.
     */
    var ResizeObserver = /** @class */ (function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback that is invoked when
         *      dimensions of the observed elements change.
         */
        function ResizeObserver(callback) {
            if (!(this instanceof ResizeObserver)) {
                throw new TypeError('Cannot call a class as a function.');
            }
            if (!arguments.length) {
                throw new TypeError('1 argument required, but only 0 present.');
            }
            var controller = ResizeObserverController.getInstance();
            var observer = new ResizeObserverSPI(callback, controller, this);
            observers.set(this, observer);
        }
        return ResizeObserver;
    }());
    // Expose public methods of ResizeObserver.
    [
        'observe',
        'unobserve',
        'disconnect'
    ].forEach(function (method) {
        ResizeObserver.prototype[method] = function () {
            var _a;
            return (_a = observers.get(this))[method].apply(_a, arguments);
        };
    });

    var index = (function () {
        // Export existing implementation if available.
        if (typeof global$1.ResizeObserver !== 'undefined') {
            return global$1.ResizeObserver;
        }
        return ResizeObserver;
    })();

    return index;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../node_modules/screenfull/dist/screenfull.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/screenfull/dist/screenfull.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs =  true && module.exports;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (element, options) {
			return new Promise(function (resolve, reject) {
				var onFullScreenEntered = function () {
					this.off('change', onFullScreenEntered);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenEntered);

				element = element || document.documentElement;

				var returnPromise = element[fn.requestFullscreen](options);

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenEntered).catch(reject);
				}
			}.bind(this));
		},
		exit: function () {
			return new Promise(function (resolve, reject) {
				if (!this.isFullscreen) {
					resolve();
					return;
				}

				var onFullScreenExit = function () {
					this.off('change', onFullScreenExit);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenExit);

				var returnPromise = document[fn.exitFullscreen]();

				if (returnPromise instanceof Promise) {
					returnPromise.then(onFullScreenExit).catch(reject);
				}
			}.bind(this));
		},
		toggle: function (element, options) {
			return this.isFullscreen ? this.exit() : this.request(element, options);
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = {isEnabled: false};
		} else {
			window.screenfull = {isEnabled: false};
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		isEnabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ "../../../node_modules/set-harmonic-interval/lib/index.js":
/*!*****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/set-harmonic-interval/lib/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var counter = 0;
var buckets = {};
var setHarmonicInterval = function (fn, ms) {
    var _a;
    var id = counter++;
    if (buckets[ms]) {
        buckets[ms].listeners[id] = fn;
    }
    else {
        var timer = setInterval(function () {
            var listeners = buckets[ms].listeners;
            var didThrow = false;
            var lastError;
            for (var _i = 0, _a = Object.values(listeners); _i < _a.length; _i++) {
                var listener = _a[_i];
                try {
                    listener();
                }
                catch (error) {
                    didThrow = true;
                    lastError = error;
                }
            }
            if (didThrow)
                throw lastError;
        }, ms);
        buckets[ms] = {
            ms: ms,
            timer: timer,
            listeners: (_a = {},
                _a[id] = fn,
                _a),
        };
    }
    return {
        bucket: buckets[ms],
        id: id,
    };
};
var clearHarmonicInterval = function (_a) {
    var bucket = _a.bucket, id = _a.id;
    delete bucket.listeners[id];
    var hasListeners = false;
    for (var listener in bucket.listeners) {
        hasListeners = true;
        break;
    }
    if (!hasListeners) {
        clearInterval(bucket.timer);
        delete buckets[bucket.ms];
    }
};

exports.clearHarmonicInterval = clearHarmonicInterval;
exports.setHarmonicInterval = setHarmonicInterval;


/***/ }),

/***/ "../../../node_modules/split-on-first/index.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/split-on-first/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ "../../../node_modules/strict-uri-encode/index.js":
/*!*********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/strict-uri-encode/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../../node_modules/throttle-debounce/index.umd.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/throttle-debounce/index.umd.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset).
	 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @returns {Function}  A new, throttled, function.
	 */
	function throttle (delay, noTrailing, callback, debounceMode) {
	  /*
	   * After wrapper has stopped being called, this timeout ensures that
	   * `callback` is executed at the proper times in `throttle` and `end`
	   * debounce modes.
	   */
	  var timeoutID;
	  var cancelled = false; // Keep track of the last time `callback` was executed.

	  var lastExec = 0; // Function to clear existing timeout

	  function clearExistingTimeout() {
	    if (timeoutID) {
	      clearTimeout(timeoutID);
	    }
	  } // Function to cancel next exec


	  function cancel() {
	    clearExistingTimeout();
	    cancelled = true;
	  } // `noTrailing` defaults to falsy.


	  if (typeof noTrailing !== 'boolean') {
	    debounceMode = callback;
	    callback = noTrailing;
	    noTrailing = undefined;
	  }
	  /*
	   * The `wrapper` function encapsulates all of the throttling / debouncing
	   * functionality and when executed will limit the rate at which `callback`
	   * is executed.
	   */


	  function wrapper() {
	    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
	      arguments_[_key] = arguments[_key];
	    }

	    var self = this;
	    var elapsed = Date.now() - lastExec;

	    if (cancelled) {
	      return;
	    } // Execute `callback` and update the `lastExec` timestamp.


	    function exec() {
	      lastExec = Date.now();
	      callback.apply(self, arguments_);
	    }
	    /*
	     * If `debounceMode` is true (at begin) this is used to clear the flag
	     * to allow future `callback` executions.
	     */


	    function clear() {
	      timeoutID = undefined;
	    }

	    if (debounceMode && !timeoutID) {
	      /*
	       * Since `wrapper` is being called for the first time and
	       * `debounceMode` is true (at begin), execute `callback`.
	       */
	      exec();
	    }

	    clearExistingTimeout();

	    if (debounceMode === undefined && elapsed > delay) {
	      /*
	       * In throttle mode, if `delay` time has been exceeded, execute
	       * `callback`.
	       */
	      exec();
	    } else if (noTrailing !== true) {
	      /*
	       * In trailing throttle mode, since `delay` time has not been
	       * exceeded, schedule `callback` to execute `delay` ms after most
	       * recent execution.
	       *
	       * If `debounceMode` is true (at begin), schedule `clear` to execute
	       * after `delay` ms.
	       *
	       * If `debounceMode` is false (at end), schedule `callback` to
	       * execute after `delay` ms.
	       */
	      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
	    }
	  }

	  wrapper.cancel = cancel; // Return the wrapper function.

	  return wrapper;
	}

	/* eslint-disable no-undefined */
	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
	 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                  to `callback` when the debounced-function is executed.
	 *
	 * @returns {Function} A new, debounced function.
	 */

	function debounce (delay, atBegin, callback) {
	  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
	}

	exports.debounce = debounce;
	exports.throttle = throttle;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map


/***/ }),

/***/ "../../../node_modules/toggle-selection/index.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/toggle-selection/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ "../../../node_modules/ts-easing/lib/index.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/ts-easing/lib/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.easing = {
    // No easing, no acceleration
    linear: function (t) { return t; },
    // Accelerates fast, then slows quickly towards end.
    quadratic: function (t) { return t * (-(t * t) * t + 4 * t * t - 6 * t + 4); },
    // Overshoots over 1 and then returns to 1 towards end.
    cubic: function (t) { return t * (4 * t * t - 9 * t + 6); },
    // Overshoots over 1 multiple times - wiggles around 1.
    elastic: function (t) { return t * (33 * t * t * t * t - 106 * t * t * t + 126 * t * t - 67 * t + 15); },
    // Accelerating from zero velocity
    inQuad: function (t) { return t * t; },
    // Decelerating to zero velocity
    outQuad: function (t) { return t * (2 - t); },
    // Acceleration until halfway, then deceleration
    inOutQuad: function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
    // Accelerating from zero velocity
    inCubic: function (t) { return t * t * t; },
    // Decelerating to zero velocity
    outCubic: function (t) { return (--t) * t * t + 1; },
    // Acceleration until halfway, then deceleration
    inOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
    // Accelerating from zero velocity
    inQuart: function (t) { return t * t * t * t; },
    // Decelerating to zero velocity
    outQuart: function (t) { return 1 - (--t) * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuart: function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; },
    // Accelerating from zero velocity
    inQuint: function (t) { return t * t * t * t * t; },
    // Decelerating to zero velocity
    outQuint: function (t) { return 1 + (--t) * t * t * t * t; },
    // Acceleration until halfway, then deceleration
    inOutQuint: function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; },
    // Accelerating from zero velocity
    inSine: function (t) { return -Math.cos(t * (Math.PI / 2)) + 1; },
    // Decelerating to zero velocity
    outSine: function (t) { return Math.sin(t * (Math.PI / 2)); },
    // Accelerating until halfway, then decelerating
    inOutSine: function (t) { return -(Math.cos(Math.PI * t) - 1) / 2; },
    // Exponential accelerating from zero velocity
    inExpo: function (t) { return Math.pow(2, 10 * (t - 1)); },
    // Exponential decelerating to zero velocity
    outExpo: function (t) { return -Math.pow(2, -10 * t) + 1; },
    // Exponential accelerating until halfway, then decelerating
    inOutExpo: function (t) {
        t /= .5;
        if (t < 1)
            return Math.pow(2, 10 * (t - 1)) / 2;
        t--;
        return (-Math.pow(2, -10 * t) + 2) / 2;
    },
    // Circular accelerating from zero velocity
    inCirc: function (t) { return -Math.sqrt(1 - t * t) + 1; },
    // Circular decelerating to zero velocity Moves VERY fast at the beginning and
    // then quickly slows down in the middle. This tween can actually be used
    // in continuous transitions where target value changes all the time,
    // because of the very quick start, it hides the jitter between target value changes.
    outCirc: function (t) { return Math.sqrt(1 - (t = t - 1) * t); },
    // Circular acceleration until halfway, then deceleration
    inOutCirc: function (t) {
        t /= .5;
        if (t < 1)
            return -(Math.sqrt(1 - t * t) - 1) / 2;
        t -= 2;
        return (Math.sqrt(1 - t * t) + 1) / 2;
    }
};


/***/ }),

/***/ "../../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=visualize.chunk.0.js.map