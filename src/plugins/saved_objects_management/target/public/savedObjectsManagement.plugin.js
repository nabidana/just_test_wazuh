/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"savedObjectsManagement": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "savedObjectsManagement.chunk." + chunkId + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["savedObjectsManagement_bundle_jsonpfunction"] = window["savedObjectsManagement_bundle_jsonpfunction"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../packages/osd-optimizer/target/worker/entry_point_creator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/@elastic/filesaver/file-saver.js":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/@elastic/filesaver/file-saver.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.1.20150716
 *
 * By Eli Grey, http://eligrey.com
 * License: X11/MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, webkit_req_fs = view.webkitRequestFileSystem
		, req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		, fs_min_size = 0
		// See https://code.google.com/p/chromium/issues/detail?id=375297#c7 and
		// https://github.com/eligrey/FileSaver.js/commit/485930a#commitcomment-8768047
		// for the reasoning behind the timeout and revocation flow
		, arbitrary_revoke_timeout = 500 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			if (view.chrome) {
				revoker();
			} else {
				setTimeout(revoker, arbitrary_revoke_timeout);
			}
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob(["\ufeff", blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, blob_changed = false
				, object_url
				, target_view
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					// don't create more object URLs than needed
					if (blob_changed || !object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (target_view) {
						target_view.location.href = object_url;
					} else {
						var new_tab = view.open(object_url, "_blank");
						if (new_tab == undefined && typeof safari !== "undefined") {
							//Apple do not allow window.open, see http://bit.ly/1kZffRI
							view.location.href = object_url
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
				, abortable = function(func) {
					return function() {
						if (filesaver.readyState !== filesaver.DONE) {
							return func.apply(this, arguments);
						}
					};
				}
				, create_if_not_found = {create: true, exclusive: false}
				, slice
			;
			filesaver.readyState = filesaver.INIT;
			if (!name) {
				name = "download";
			}
			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				save_link.href = object_url;
				save_link.download = name;
				setTimeout(function() {
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}
			// Object and web filesystem URLs have a problem saving in Google Chrome when
			// viewed in a tab, so I force save with application/octet-stream
			// http://code.google.com/p/chromium/issues/detail?id=91158
			// Update: Google errantly closed 91158, I submitted it again:
			// https://code.google.com/p/chromium/issues/detail?id=389642
			if (view.chrome && type && type !== force_saveable_type) {
				slice = blob.slice || blob.webkitSlice;
				blob = slice.call(blob, 0, blob.size, force_saveable_type);
				blob_changed = true;
			}
			// Since I can't be sure that the guessed media type will trigger a download
			// in WebKit, I append .download to the filename.
			// https://bugs.webkit.org/show_bug.cgi?id=65440
			if (webkit_req_fs && name !== "download") {
				name += ".download";
			}
			if (type === force_saveable_type || webkit_req_fs) {
				target_view = view;
			}
			if (!req_fs) {
				fs_error();
				return;
			}
			fs_min_size += blob.size;
			req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
				fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
					var save = function() {
						dir.getFile(name, create_if_not_found, abortable(function(file) {
							file.createWriter(abortable(function(writer) {
								writer.onwriteend = function(event) {
									target_view.location.href = file.toURL();
									filesaver.readyState = filesaver.DONE;
									dispatch(filesaver, "writeend", event);
									revoke(file);
								};
								writer.onerror = function() {
									var error = writer.error;
									if (error.code !== error.ABORT_ERR) {
										fs_error();
									}
								};
								"writestart progress write abort".split(" ").forEach(function(event) {
									writer["on" + event] = filesaver["on" + event];
								});
								writer.write(blob);
								filesaver.abort = function() {
									writer.abort();
									filesaver.readyState = filesaver.DONE;
								};
								filesaver.readyState = filesaver.WRITING;
							}), fs_error);
						}), fs_error);
					};
					dir.getFile(name, {create: false}, abortable(function(file) {
						// delete file if it already exists
						file.remove();
						save();
					}), abortable(function(ex) {
						if (ex.code === ex.NOT_FOUND_ERR) {
							save();
						} else {
							fs_error();
						}
					}));
				}), fs_error);
			}), fs_error);
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name, no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name || "download");
		};
	}

	FS_proto.abort = function() {
		var filesaver = this;
		filesaver.readyState = filesaver.DONE;
		dispatch(filesaver, "abort");
	};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if ( true && module.exports) {
  module.exports.saveAs = saveAs;
} else if (( true && __webpack_require__(/*! !webpack amd define */ "../../../node_modules/webpack/buildin/amd-define.js") !== null) && (__webpack_require__(/*! !webpack amd options */ "../../../node_modules/webpack/buildin/amd-options.js") != null)) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    return saveAs;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


/***/ }),

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

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/management_section/objects_table/components/import_summary.scss?v7dark":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-0-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./public/management_section/objects_table/components/import_summary.scss?v7dark ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.savedObjectsManagementImportSummary__row{margin-bottom:4px}.savedObjectsManagementImportSummary__title{min-width:0}.savedObjectsManagementImportSummary__createdCount{color:#7de2d1}.savedObjectsManagementImportSummary__errorCount{color:#f66}\n", "",{"version":3,"sources":["webpack://./public/management_section/objects_table/components/import_summary.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,0CAA0C,iBAAiB,CAAC,4CAA4C,WAAW,CAAC,mDAAmD,aAAa,CAAC,iDAAiD,UAAU","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.savedObjectsManagementImportSummary__row{margin-bottom:4px}.savedObjectsManagementImportSummary__title{min-width:0}.savedObjectsManagementImportSummary__createdCount{color:#7de2d1}.savedObjectsManagementImportSummary__errorCount{color:#f66}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/management_section/objects_table/components/import_summary.scss?v7light":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-1-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./public/management_section/objects_table/components/import_summary.scss?v7light ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.savedObjectsManagementImportSummary__row{margin-bottom:4px}.savedObjectsManagementImportSummary__title{min-width:0}.savedObjectsManagementImportSummary__createdCount{color:#017d73}.savedObjectsManagementImportSummary__errorCount{color:#bd271e}\n", "",{"version":3,"sources":["webpack://./public/management_section/objects_table/components/import_summary.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,0CAA0C,iBAAiB,CAAC,4CAA4C,WAAW,CAAC,mDAAmD,aAAa,CAAC,iDAAiD,aAAa","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.savedObjectsManagementImportSummary__row{margin-bottom:4px}.savedObjectsManagementImportSummary__title{min-width:0}.savedObjectsManagementImportSummary__createdCount{color:#017d73}.savedObjectsManagementImportSummary__errorCount{color:#bd271e}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/management_section/objects_table/components/import_summary.scss?v8dark":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-2-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./public/management_section/objects_table/components/import_summary.scss?v8dark ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.savedObjectsManagementImportSummary__row{margin-bottom:4px}.savedObjectsManagementImportSummary__title{min-width:0}.savedObjectsManagementImportSummary__createdCount{color:#7de2d1}.savedObjectsManagementImportSummary__errorCount{color:#f66}\n", "",{"version":3,"sources":["webpack://./public/management_section/objects_table/components/import_summary.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,0CAA0C,iBAAiB,CAAC,4CAA4C,WAAW,CAAC,mDAAmD,aAAa,CAAC,iDAAiD,UAAU","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.savedObjectsManagementImportSummary__row{margin-bottom:4px}.savedObjectsManagementImportSummary__title{min-width:0}.savedObjectsManagementImportSummary__createdCount{color:#7de2d1}.savedObjectsManagementImportSummary__errorCount{color:#f66}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/management_section/objects_table/components/import_summary.scss?v8light":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-3-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./public/management_section/objects_table/components/import_summary.scss?v8light ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.savedObjectsManagementImportSummary__row{margin-bottom:4px}.savedObjectsManagementImportSummary__title{min-width:0}.savedObjectsManagementImportSummary__createdCount{color:#01786f}.savedObjectsManagementImportSummary__errorCount{color:#bd271e}\n", "",{"version":3,"sources":["webpack://./public/management_section/objects_table/components/import_summary.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,0CAA0C,iBAAiB,CAAC,4CAA4C,WAAW,CAAC,mDAAmD,aAAa,CAAC,iDAAiD,aAAa","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.savedObjectsManagementImportSummary__row{margin-bottom:4px}.savedObjectsManagementImportSummary__title{min-width:0}.savedObjectsManagementImportSummary__createdCount{color:#01786f}.savedObjectsManagementImportSummary__errorCount{color:#bd271e}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/management_section/objects_table/components/import_summary.scss?v9dark":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-4-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./public/management_section/objects_table/components/import_summary.scss?v9dark ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.savedObjectsManagementImportSummary__row{margin-bottom:4px}.savedObjectsManagementImportSummary__title{min-width:0}.savedObjectsManagementImportSummary__createdCount{color:#129079}.savedObjectsManagementImportSummary__errorCount{color:#cd5d56}\n", "",{"version":3,"sources":["webpack://./public/management_section/objects_table/components/import_summary.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,0CAA0C,iBAAiB,CAAC,4CAA4C,WAAW,CAAC,mDAAmD,aAAa,CAAC,iDAAiD,aAAa","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.savedObjectsManagementImportSummary__row{margin-bottom:4px}.savedObjectsManagementImportSummary__title{min-width:0}.savedObjectsManagementImportSummary__createdCount{color:#129079}.savedObjectsManagementImportSummary__errorCount{color:#cd5d56}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/management_section/objects_table/components/import_summary.scss?v9light":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!/home/ubuntu/wazuh-dashboard-cert/node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!/home/ubuntu/wazuh-dashboard-cert/node_modules/comment-stripper??ref--6-oneOf-5-3!/home/ubuntu/wazuh-dashboard-cert/node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./public/management_section/objects_table/components/import_summary.scss?v9light ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.savedObjectsManagementImportSummary__row{margin-bottom:4px}.savedObjectsManagementImportSummary__title{min-width:0}.savedObjectsManagementImportSummary__createdCount{color:#0f7b68}.savedObjectsManagementImportSummary__errorCount{color:#c43d35}\n", "",{"version":3,"sources":["webpack://./public/management_section/objects_table/components/import_summary.scss"],"names":[],"mappings":"AAAA;;;;;;;;;EASE;;AAEF,0CAA0C,iBAAiB,CAAC,4CAA4C,WAAW,CAAC,mDAAmD,aAAa,CAAC,iDAAiD,aAAa","sourcesContent":["/*!\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n.savedObjectsManagementImportSummary__row{margin-bottom:4px}.savedObjectsManagementImportSummary__title{min-width:0}.savedObjectsManagementImportSummary__createdCount{color:#0f7b68}.savedObjectsManagementImportSummary__errorCount{color:#c43d35}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=savedObjectsManagement!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=savedObjectsManagement!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['savedObjectsManagement']

/***/ }),

/***/ "../../../node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "../../../node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

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


/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_savedObjectsManagement_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=savedObjectsManagement!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=savedObjectsManagement!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_savedObjectsManagement_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_savedObjectsManagement_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/savedObjectsManagement/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/saved_objects_management/public */ "./public/index.ts"))
__osdBundles__.define('plugin/savedObjectsManagement/public/lib', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/saved_objects_management/public/lib */ "./public/lib/index.ts"))

/***/ }),

/***/ "./common/index.ts":
/*!*************************!*\
  !*** ./common/index.ts ***!
  \*************************/
/*! exports provided: SavedObjectRelation, SavedObjectWithMetadata, SavedObjectMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./common/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectRelation", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["SavedObjectRelation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectWithMetadata", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["SavedObjectWithMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectMetadata", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["SavedObjectMetadata"]; });

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

/***/ "./common/types.ts":
/*!*************************!*\
  !*** ./common/types.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: SavedObjectsManagementPluginSetup, SavedObjectsManagementPluginStart, SavedObjectsManagementActionServiceSetup, SavedObjectsManagementActionServiceStart, SavedObjectsManagementAction, SavedObjectsManagementColumnServiceSetup, SavedObjectsManagementColumnServiceStart, SavedObjectsManagementColumn, SavedObjectsManagementNamespaceServiceSetup, SavedObjectsManagementNamespaceServiceStart, SavedObjectsManagementNamespace, SavedObjectsManagementRecord, ISavedObjectsManagementServiceRegistry, SavedObjectsManagementServiceRegistryEntry, ProcessedImportResponse, processImportResponse, FailedImport, getSavedObjectLabel, SavedObjectRelation, SavedObjectWithMetadata, SavedObjectMetadata, SAVED_OBJECT_DELETE_TRIGGER, savedObjectDeleteTrigger, SavedObjectDeleteContext, SavedObjectsDuplicateModal, plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementPluginSetup", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["SavedObjectsManagementPluginSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementPluginStart", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["SavedObjectsManagementPluginStart"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./public/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementActionServiceSetup", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["SavedObjectsManagementActionServiceSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementActionServiceStart", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["SavedObjectsManagementActionServiceStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementAction", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["SavedObjectsManagementAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementColumnServiceSetup", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["SavedObjectsManagementColumnServiceSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementColumnServiceStart", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["SavedObjectsManagementColumnServiceStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementColumn", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["SavedObjectsManagementColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementNamespaceServiceSetup", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["SavedObjectsManagementNamespaceServiceSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementNamespaceServiceStart", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["SavedObjectsManagementNamespaceServiceStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementNamespace", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["SavedObjectsManagementNamespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementRecord", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["SavedObjectsManagementRecord"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ISavedObjectsManagementServiceRegistry", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["ISavedObjectsManagementServiceRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementServiceRegistryEntry", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["SavedObjectsManagementServiceRegistryEntry"]; });

/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib */ "./public/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProcessedImportResponse", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["ProcessedImportResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processImportResponse", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["processImportResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FailedImport", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["FailedImport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedObjectLabel", function() { return _lib__WEBPACK_IMPORTED_MODULE_2__["getSavedObjectLabel"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./public/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectRelation", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["SavedObjectRelation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectWithMetadata", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["SavedObjectWithMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectMetadata", function() { return _types__WEBPACK_IMPORTED_MODULE_3__["SavedObjectMetadata"]; });

/* harmony import */ var _triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./triggers */ "./public/triggers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAVED_OBJECT_DELETE_TRIGGER", function() { return _triggers__WEBPACK_IMPORTED_MODULE_4__["SAVED_OBJECT_DELETE_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "savedObjectDeleteTrigger", function() { return _triggers__WEBPACK_IMPORTED_MODULE_4__["savedObjectDeleteTrigger"]; });

/* harmony import */ var _ui_actions_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui_actions_bootstrap */ "./public/ui_actions_bootstrap.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectDeleteContext", function() { return _ui_actions_bootstrap__WEBPACK_IMPORTED_MODULE_5__["SavedObjectDeleteContext"]; });

/* harmony import */ var _management_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./management_section */ "./public/management_section/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsDuplicateModal", function() { return _management_section__WEBPACK_IMPORTED_MODULE_6__["SavedObjectsDuplicateModal"]; });

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
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["SavedObjectsManagementPlugin"]();
}

/***/ }),

/***/ "./public/lib/case_conversion.ts":
/*!***************************************!*\
  !*** ./public/lib/case_conversion.ts ***!
  \***************************************/
/*! exports provided: keysToCamelCaseShallow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keysToCamelCaseShallow", function() { return keysToCamelCaseShallow; });
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


function keysToCamelCaseShallow(object) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["mapKeys"])(object, (value, key) => Object(lodash__WEBPACK_IMPORTED_MODULE_0__["camelCase"])(key));
}

/***/ }),

/***/ "./public/lib/create_field_list.ts":
/*!*****************************************!*\
  !*** ./public/lib/create_field_list.ts ***!
  \*****************************************/
/*! exports provided: createFieldList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFieldList", function() { return createFieldList; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_1__);
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



const maxRecursiveIterations = 20;
function createFieldList(object, service) {
  let fields = Object.entries(object.attributes).reduce((objFields, [key, value]) => {
    return [...objFields, ...createFields(key, value)];
  }, []);
  // Special handling for references which isn't within "attributes"
  fields = [...fields, ...createFields('references', object.references)];
  if (service && service.Class) {
    addFieldsFromClass(service.Class, fields);
  }
  return fields;
}

/**
 * Creates a field definition and pushes it to the memo stack. This function
 * is designed to be used in conjunction with _.reduce(). If the
 * values is plain object it will recurse through all the keys till it hits
 * a string, number or an array.
 *
 * @param {string} key The key of the field
 * @param {mixed} value The value of the field
 * @param {array} parents The parent keys to the field
 * @returns {array}
 */
const createFields = (key, value, parents = []) => {
  const path = [...parents, key];
  if (path.length > maxRecursiveIterations) {
    return [];
  }
  const field = {
    type: 'text',
    name: path.join('.'),
    value
  };
  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isString"])(field.value)) {
    try {
      field.value = JSON.stringify(JSON.parse(field.value), undefined, 2);
      field.type = 'json';
    } catch (err) {
      field.type = 'text';
    }
  } else if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(field.value)) {
    field.type = 'number';
  } else if (Array.isArray(field.value)) {
    field.type = 'array';
    field.value = JSON.stringify(field.value, undefined, 2);
  } else if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isBoolean"])(field.value)) {
    field.type = 'boolean';
  } else if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(field.value)) {
    let fields = [];
    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["forOwn"])(field.value, (childValue, childKey) => {
      fields = [...fields, ...createFields(childKey, childValue, path)];
    });
    return fields;
  }
  return [field];
};
const addFieldsFromClass = function (Class, fields) {
  const fieldMap = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["keyBy"])(fields, 'name');
  Object(lodash__WEBPACK_IMPORTED_MODULE_0__["forOwn"])(Class.mapping, (opensearchType, name) => {
    if (!name || fieldMap[name]) {
      return;
    }
    const getFieldTypeFromOpenSearchType = () => {
      switch (Object(_data_public__WEBPACK_IMPORTED_MODULE_1__["castOpenSearchToOsdFieldTypeName"])(opensearchType)) {
        case 'string':
          return 'text';
        case 'number':
          return 'number';
        case 'boolean':
          return 'boolean';
        default:
          return 'json';
      }
    };
    fields.push({
      name,
      type: getFieldTypeFromOpenSearchType(),
      value: undefined
    });
  });
  if (Class.searchSource && !fieldMap['kibanaSavedObjectMeta.searchSourceJSON']) {
    fields.push({
      name: 'kibanaSavedObjectMeta.searchSourceJSON',
      type: 'json',
      value: '{}'
    });
  }
  if (!fieldMap.references) {
    fields.push({
      name: 'references',
      type: 'array',
      value: '[]'
    });
  }
};

/***/ }),

/***/ "./public/lib/extract_export_details.ts":
/*!**********************************************!*\
  !*** ./public/lib/extract_export_details.ts ***!
  \**********************************************/
/*! exports provided: extractExportDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractExportDetails", function() { return extractExportDetails; });
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

async function extractExportDetails(blob) {
  const reader = new FileReader();
  const content = await new Promise((resolve, reject) => {
    reader.addEventListener('loadend', e => {
      resolve(e.target.result);
    });
    reader.addEventListener('error', e => {
      reject(e);
    });
    reader.readAsText(blob, 'utf-8');
  });
  const lines = content.split('\n').filter(l => l.length > 0);
  const maybeDetails = JSON.parse(lines[lines.length - 1]);
  if (isExportDetails(maybeDetails)) {
    return maybeDetails;
  }
}
function isExportDetails(object) {
  return 'exportedCount' in object && 'missingRefCount' in object && 'missingReferences' in object;
}

/***/ }),

/***/ "./public/lib/fetch_export_by_type_and_search.ts":
/*!*******************************************************!*\
  !*** ./public/lib/fetch_export_by_type_and_search.ts ***!
  \*******************************************************/
/*! exports provided: fetchExportByTypeAndSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchExportByTypeAndSearch", function() { return fetchExportByTypeAndSearch; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./public/utils.ts");
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


async function fetchExportByTypeAndSearch(http, types, search, includeReferencesDeep = false, workspaces) {
  return http.post('/api/saved_objects/_export', {
    body: JSON.stringify(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["formatWorkspaceIdParams"])({
      workspaces,
      type: types,
      search,
      includeReferencesDeep
    }))
  });
}

/***/ }),

/***/ "./public/lib/fetch_export_objects.ts":
/*!********************************************!*\
  !*** ./public/lib/fetch_export_objects.ts ***!
  \********************************************/
/*! exports provided: fetchExportObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchExportObjects", function() { return fetchExportObjects; });
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

async function fetchExportObjects(http, objects, includeReferencesDeep = false) {
  return http.post('/api/saved_objects/_export', {
    body: JSON.stringify({
      objects,
      includeReferencesDeep
    })
  });
}

/***/ }),

/***/ "./public/lib/filter_query.ts":
/*!************************************!*\
  !*** ./public/lib/filter_query.ts ***!
  \************************************/
/*! exports provided: filterQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterQuery", function() { return filterQuery; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

function filterQuery(allowedVals, requestedVals) {
  const filteredVals = requestedVals ? allowedVals.filter(val => requestedVals.includes(val)) : allowedVals;
  return filteredVals;
}

/***/ }),

/***/ "./public/lib/find_objects.ts":
/*!************************************!*\
  !*** ./public/lib/find_objects.ts ***!
  \************************************/
/*! exports provided: findObjects, findObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findObjects", function() { return findObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findObject", function() { return findObject; });
/* harmony import */ var _case_conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./case_conversion */ "./public/lib/case_conversion.ts");
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


async function findObjects(http, findOptions) {
  const response = await http.get('/api/opensearch-dashboards/management/saved_objects/_find', {
    query: findOptions
  });
  return Object(_case_conversion__WEBPACK_IMPORTED_MODULE_0__["keysToCamelCaseShallow"])(response);
}
async function findObject(http, type, id) {
  return await http.get(`/api/opensearch-dashboards/management/saved_objects/${encodeURIComponent(type)}/${encodeURIComponent(id)}`);
}

/***/ }),

/***/ "./public/lib/get_allowed_types.ts":
/*!*****************************************!*\
  !*** ./public/lib/get_allowed_types.ts ***!
  \*****************************************/
/*! exports provided: getAllowedTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllowedTypes", function() { return getAllowedTypes; });
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

async function getAllowedTypes(http) {
  const response = await http.get('/api/opensearch-dashboards/management/saved_objects/_allowed_types');
  return response.types;
}

/***/ }),

/***/ "./public/lib/get_default_title.ts":
/*!*****************************************!*\
  !*** ./public/lib/get_default_title.ts ***!
  \*****************************************/
/*! exports provided: getDefaultTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultTitle", function() { return getDefaultTitle; });
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

function getDefaultTitle(object) {
  return `${object.type} [id=${object.id}]`;
}

/***/ }),

/***/ "./public/lib/get_relationships.ts":
/*!*****************************************!*\
  !*** ./public/lib/get_relationships.ts ***!
  \*****************************************/
/*! exports provided: getRelationships */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelationships", function() { return getRelationships; });
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


async function getRelationships(http, type, id, savedObjectTypes) {
  const url = `/api/opensearch-dashboards/management/saved_objects/relationships/${encodeURIComponent(type)}/${encodeURIComponent(id)}`;
  try {
    return await http.get(url, {
      query: {
        savedObjectTypes
      }
    });
  } catch (respError) {
    const respBody = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(respError, 'data', {});
    const err = new Error(respBody.message || respBody.error || `${respError.status} Response`);
    err.statusCode = respBody.statusCode || respError.status;
    err.body = respBody;
    throw err;
  }
}

/***/ }),

/***/ "./public/lib/get_saved_object_counts.ts":
/*!***********************************************!*\
  !*** ./public/lib/get_saved_object_counts.ts ***!
  \***********************************************/
/*! exports provided: getSavedObjectCounts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedObjectCounts", function() { return getSavedObjectCounts; });
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

async function getSavedObjectCounts(http, options) {
  return await http.post(`/api/opensearch-dashboards/management/saved_objects/scroll/counts`, {
    body: JSON.stringify(options)
  });
}

/***/ }),

/***/ "./public/lib/get_saved_object_label.ts":
/*!**********************************************!*\
  !*** ./public/lib/get_saved_object_label.ts ***!
  \**********************************************/
/*! exports provided: getSavedObjectLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedObjectLabel", function() { return getSavedObjectLabel; });
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

function getSavedObjectLabel(type) {
  switch (type) {
    case 'index-pattern':
    case 'index-patterns':
    case 'indexPatterns':
      return 'index patterns';
    default:
      return type;
  }
}

/***/ }),

/***/ "./public/lib/import_file.ts":
/*!***********************************!*\
  !*** ./public/lib/import_file.ts ***!
  \***********************************/
/*! exports provided: importFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importFile", function() { return importFile; });
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

async function importFile(http, file, {
  createNewCopies,
  overwrite
}, selectedDataSourceId, dataSourceEnabled) {
  const formData = new FormData();
  formData.append('file', file);
  const query = createNewCopies ? {
    createNewCopies
  } : {
    overwrite
  };
  if (selectedDataSourceId) {
    query.dataSourceId = selectedDataSourceId;
  }
  if (dataSourceEnabled) {
    query.dataSourceEnabled = dataSourceEnabled;
  }
  return await http.post('/api/saved_objects/_import', {
    body: formData,
    headers: {
      // Important to be undefined, it forces proper headers to be set for FormData
      'Content-Type': undefined
    },
    query
  });
}

/***/ }),

/***/ "./public/lib/import_legacy_file.ts":
/*!******************************************!*\
  !*** ./public/lib/import_legacy_file.ts ***!
  \******************************************/
/*! exports provided: importLegacyFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importLegacyFile", function() { return importLegacyFile; });
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

async function importLegacyFile(file) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = event => {
      const result = event.target.result;
      try {
        resolve(JSON.parse(result));
      } catch (e) {
        reject(e);
      }
    };
    fr.readAsText(file);
  });
}

/***/ }),

/***/ "./public/lib/in_app_url.ts":
/*!**********************************!*\
  !*** ./public/lib/in_app_url.ts ***!
  \**********************************/
/*! exports provided: canViewInApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewInApp", function() { return canViewInApp; });
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

function canViewInApp(uiCapabilities, type) {
  switch (type) {
    case 'search':
    case 'searches':
      return uiCapabilities.discover.show;
    case 'visualization':
    case 'visualizations':
      return uiCapabilities.visualize.show;
    case 'augment-vis':
      return uiCapabilities.visAugmenter.show;
    case 'index-pattern':
    case 'index-patterns':
    case 'indexPatterns':
      return uiCapabilities.management.opensearchDashboards.indexPatterns;
    case 'dashboard':
    case 'dashboards':
      return uiCapabilities.dashboard.show;
    case 'homepage':
      return uiCapabilities.home.show;
    default:
      return uiCapabilities[type].show;
  }
}

/***/ }),

/***/ "./public/lib/index.ts":
/*!*****************************!*\
  !*** ./public/lib/index.ts ***!
  \*****************************/
/*! exports provided: fetchExportByTypeAndSearch, fetchExportObjects, canViewInApp, getRelationships, getSavedObjectCounts, SavedObjectCountOptions, getSavedObjectLabel, importFile, importLegacyFile, parseQuery, resolveImportErrors, resolveIndexPatternConflicts, resolveSavedObjects, resolveSavedSearches, saveObject, saveObjects, logLegacyImport, processImportResponse, ProcessedImportResponse, FailedImport, getDefaultTitle, findObjects, findObject, extractExportDetails, SavedObjectsExportResultDetails, createFieldList, getAllowedTypes, filterQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_export_by_type_and_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch_export_by_type_and_search */ "./public/lib/fetch_export_by_type_and_search.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchExportByTypeAndSearch", function() { return _fetch_export_by_type_and_search__WEBPACK_IMPORTED_MODULE_0__["fetchExportByTypeAndSearch"]; });

/* harmony import */ var _fetch_export_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch_export_objects */ "./public/lib/fetch_export_objects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchExportObjects", function() { return _fetch_export_objects__WEBPACK_IMPORTED_MODULE_1__["fetchExportObjects"]; });

/* harmony import */ var _in_app_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./in_app_url */ "./public/lib/in_app_url.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canViewInApp", function() { return _in_app_url__WEBPACK_IMPORTED_MODULE_2__["canViewInApp"]; });

/* harmony import */ var _get_relationships__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get_relationships */ "./public/lib/get_relationships.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRelationships", function() { return _get_relationships__WEBPACK_IMPORTED_MODULE_3__["getRelationships"]; });

/* harmony import */ var _get_saved_object_counts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get_saved_object_counts */ "./public/lib/get_saved_object_counts.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedObjectCounts", function() { return _get_saved_object_counts__WEBPACK_IMPORTED_MODULE_4__["getSavedObjectCounts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectCountOptions", function() { return _get_saved_object_counts__WEBPACK_IMPORTED_MODULE_4__["SavedObjectCountOptions"]; });

/* harmony import */ var _get_saved_object_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get_saved_object_label */ "./public/lib/get_saved_object_label.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSavedObjectLabel", function() { return _get_saved_object_label__WEBPACK_IMPORTED_MODULE_5__["getSavedObjectLabel"]; });

/* harmony import */ var _import_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./import_file */ "./public/lib/import_file.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "importFile", function() { return _import_file__WEBPACK_IMPORTED_MODULE_6__["importFile"]; });

/* harmony import */ var _import_legacy_file__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./import_legacy_file */ "./public/lib/import_legacy_file.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "importLegacyFile", function() { return _import_legacy_file__WEBPACK_IMPORTED_MODULE_7__["importLegacyFile"]; });

/* harmony import */ var _parse_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse_query */ "./public/lib/parse_query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseQuery", function() { return _parse_query__WEBPACK_IMPORTED_MODULE_8__["parseQuery"]; });

/* harmony import */ var _resolve_import_errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolve_import_errors */ "./public/lib/resolve_import_errors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveImportErrors", function() { return _resolve_import_errors__WEBPACK_IMPORTED_MODULE_9__["resolveImportErrors"]; });

/* harmony import */ var _resolve_saved_objects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resolve_saved_objects */ "./public/lib/resolve_saved_objects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveIndexPatternConflicts", function() { return _resolve_saved_objects__WEBPACK_IMPORTED_MODULE_10__["resolveIndexPatternConflicts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveSavedObjects", function() { return _resolve_saved_objects__WEBPACK_IMPORTED_MODULE_10__["resolveSavedObjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveSavedSearches", function() { return _resolve_saved_objects__WEBPACK_IMPORTED_MODULE_10__["resolveSavedSearches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveObject", function() { return _resolve_saved_objects__WEBPACK_IMPORTED_MODULE_10__["saveObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveObjects", function() { return _resolve_saved_objects__WEBPACK_IMPORTED_MODULE_10__["saveObjects"]; });

/* harmony import */ var _log_legacy_import__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./log_legacy_import */ "./public/lib/log_legacy_import.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logLegacyImport", function() { return _log_legacy_import__WEBPACK_IMPORTED_MODULE_11__["logLegacyImport"]; });

/* harmony import */ var _process_import_response__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./process_import_response */ "./public/lib/process_import_response.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "processImportResponse", function() { return _process_import_response__WEBPACK_IMPORTED_MODULE_12__["processImportResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProcessedImportResponse", function() { return _process_import_response__WEBPACK_IMPORTED_MODULE_12__["ProcessedImportResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FailedImport", function() { return _process_import_response__WEBPACK_IMPORTED_MODULE_12__["FailedImport"]; });

/* harmony import */ var _get_default_title__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./get_default_title */ "./public/lib/get_default_title.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultTitle", function() { return _get_default_title__WEBPACK_IMPORTED_MODULE_13__["getDefaultTitle"]; });

/* harmony import */ var _find_objects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./find_objects */ "./public/lib/find_objects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findObjects", function() { return _find_objects__WEBPACK_IMPORTED_MODULE_14__["findObjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findObject", function() { return _find_objects__WEBPACK_IMPORTED_MODULE_14__["findObject"]; });

/* harmony import */ var _extract_export_details__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./extract_export_details */ "./public/lib/extract_export_details.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractExportDetails", function() { return _extract_export_details__WEBPACK_IMPORTED_MODULE_15__["extractExportDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsExportResultDetails", function() { return _extract_export_details__WEBPACK_IMPORTED_MODULE_15__["SavedObjectsExportResultDetails"]; });

/* harmony import */ var _create_field_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./create_field_list */ "./public/lib/create_field_list.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFieldList", function() { return _create_field_list__WEBPACK_IMPORTED_MODULE_16__["createFieldList"]; });

/* harmony import */ var _get_allowed_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./get_allowed_types */ "./public/lib/get_allowed_types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllowedTypes", function() { return _get_allowed_types__WEBPACK_IMPORTED_MODULE_17__["getAllowedTypes"]; });

/* harmony import */ var _filter_query__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./filter_query */ "./public/lib/filter_query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterQuery", function() { return _filter_query__WEBPACK_IMPORTED_MODULE_18__["filterQuery"]; });

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

/***/ "./public/lib/log_legacy_import.ts":
/*!*****************************************!*\
  !*** ./public/lib/log_legacy_import.ts ***!
  \*****************************************/
/*! exports provided: logLegacyImport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logLegacyImport", function() { return logLegacyImport; });
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

async function logLegacyImport(http) {
  return http.post('/api/saved_objects/_log_legacy_import');
}

/***/ }),

/***/ "./public/lib/parse_query.ts":
/*!***********************************!*\
  !*** ./public/lib/parse_query.ts ***!
  \***********************************/
/*! exports provided: parseQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQuery", function() { return parseQuery; });
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

function parseQuery(query) {
  let queryText;
  let visibleTypes;
  let visibleNamespaces;
  let visibleWorkspaces;
  if (query) {
    if (query.ast.getTermClauses().length) {
      queryText = query.ast.getTermClauses().map(clause => clause.value).join(' ');
    }
    if (query.ast.getFieldClauses('type')) {
      visibleTypes = query.ast.getFieldClauses('type')[0].value;
    }
    if (query.ast.getFieldClauses('namespaces')) {
      visibleNamespaces = query.ast.getFieldClauses('namespaces')[0].value;
    }
    if (query.ast.getFieldClauses('workspaces')) {
      visibleWorkspaces = query.ast.getFieldClauses('workspaces')[0].value;
    }
  }
  return {
    queryText,
    visibleTypes,
    visibleNamespaces,
    visibleWorkspaces
  };
}

/***/ }),

/***/ "./public/lib/process_import_response.ts":
/*!***********************************************!*\
  !*** ./public/lib/process_import_response.ts ***!
  \***********************************************/
/*! exports provided: processImportResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processImportResponse", function() { return processImportResponse; });
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

const isAnyConflict = ({
  type
}) => type === 'conflict' || type === 'ambiguous_conflict';
function processImportResponse(response) {
  var _response$successResu;
  // Go through the failures and split between unmatchedReferences and failedImports
  const failedImports = [];
  const unmatchedReferences = new Map();
  for (const {
    error,
    ...obj
  } of response.errors || []) {
    failedImports.push({
      obj,
      error
    });
    if (error.type !== 'missing_references') {
      continue;
    }
    // Currently only supports resolving references on index patterns
    const indexPatternRefs = error.references.filter(ref => ref.type === 'index-pattern');
    for (const missingReference of indexPatternRefs) {
      const conflict = unmatchedReferences.get(`${missingReference.type}:${missingReference.id}`) || {
        existingIndexPatternId: missingReference.id,
        list: [],
        newIndexPatternId: undefined
      };
      if (!conflict.list.some(({
        type,
        id
      }) => type === obj.type && id === obj.id)) {
        conflict.list.push(obj);
        unmatchedReferences.set(`${missingReference.type}:${missingReference.id}`, conflict);
      }
    }
  }
  return {
    failedImports,
    successfulImports: (_response$successResu = response.successResults) !== null && _response$successResu !== void 0 ? _response$successResu : [],
    unmatchedReferences: Array.from(unmatchedReferences.values()),
    // Import won't be successful in the scenario unmatched references exist, import API returned errors of type unknown or import API
    // returned errors of type missing_references.
    status: unmatchedReferences.size === 0 && !failedImports.some(issue => isAnyConflict(issue.error)) ? 'success' : 'idle',
    importCount: response.successCount,
    conflictedSavedObjectsLinkedToSavedSearches: undefined,
    conflictedSearchDocs: undefined
  };
}

/***/ }),

/***/ "./public/lib/resolve_import_errors.ts":
/*!*********************************************!*\
  !*** ./public/lib/resolve_import_errors.ts ***!
  \*********************************************/
/*! exports provided: resolveImportErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveImportErrors", function() { return resolveImportErrors; });
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

// the HTTP route requires type and ID; all other field are optional

const RESOLVABLE_ERRORS = ['conflict', 'ambiguous_conflict', 'missing_references'];
const isConflict = failure => failure.error.type === 'conflict';
const isAmbiguousConflict = failure => failure.error.type === 'ambiguous_conflict';
const isAnyConflict = failure => isConflict(failure) || isAmbiguousConflict(failure);

/**
 * The server-side code was updated to include missing_references errors and conflict/ambiguous_conflict errors for the same object in the
 * same response. This client-side code was not built to handle multiple errors for a single import object, though. We simply filter out any
 * conflicts if a missing_references error for the same object is present. This means that the missing_references error will get resolved
 * or skipped first, and any conflicts still present will be returned again and resolved with another API call.
 */
const filterFailedImports = failures => {
  const missingReferences = failures.filter(({
    error: {
      type
    }
  }) => type === 'missing_references').reduce((acc, {
    obj: {
      type,
      id
    }
  }) => acc.add(`${type}:${id}`), new Set());
  return failures.filter(failure => !isAnyConflict(failure) || isAnyConflict(failure) && !missingReferences.has(`${failure.obj.type}:${failure.obj.id}`));
};
async function callResolveImportErrorsApi(http, file, retries, createNewCopies, selectedDataSourceId) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('retries', JSON.stringify(retries));
  const query = createNewCopies ? {
    createNewCopies
  } : {};
  if (selectedDataSourceId) {
    query.dataSourceId = selectedDataSourceId;
  }
  return http.post('/api/saved_objects/_resolve_import_errors', {
    headers: {
      // Important to be undefined, it forces proper headers to be set for FormData
      'Content-Type': undefined
    },
    body: formData,
    query
  });
}
function mapImportFailureToRetryObject({
  failure,
  retryDecisionCache,
  replaceReferencesCache,
  state
}) {
  const {
    unmatchedReferences = []
  } = state;
  const retryDecision = retryDecisionCache.get(`${failure.obj.type}:${failure.obj.id}`);

  // Conflicts without a resolution are skipped
  if (!(retryDecision !== null && retryDecision !== void 0 && retryDecision.retry) && (failure.error.type === 'conflict' || failure.error.type === 'ambiguous_conflict')) {
    return;
  }

  // Replace references if user chose a new reference
  if (failure.error.type === 'missing_references') {
    const objReplaceReferences = replaceReferencesCache.get(`${failure.obj.type}:${failure.obj.id}`) || [];
    const indexPatternRefs = failure.error.references.filter(obj => obj.type === 'index-pattern');
    for (const reference of indexPatternRefs) {
      for (const {
        existingIndexPatternId: from,
        newIndexPatternId: to
      } of unmatchedReferences) {
        const matchesIndexPatternId = from === reference.id;
        if (!to || !matchesIndexPatternId) {
          continue;
        }
        const type = 'index-pattern';
        if (!objReplaceReferences.some(ref => ref.type === type && ref.from === from && ref.to === to)) {
          objReplaceReferences.push({
            type,
            from,
            to
          });
        }
      }
    }
    replaceReferencesCache.set(`${failure.obj.type}:${failure.obj.id}`, objReplaceReferences);
    // Skip if nothing to replace, the UI option selected would be --Skip Import--
    if (objReplaceReferences.length === 0) {
      return;
    }
  }
  return {
    id: failure.obj.id,
    type: failure.obj.type,
    ...((retryDecision === null || retryDecision === void 0 ? void 0 : retryDecision.retry) && retryDecision.options),
    replaceReferences: replaceReferencesCache.get(`${failure.obj.type}:${failure.obj.id}`)
  };
}
async function resolveImportErrors({
  http,
  getConflictResolutions,
  state,
  selectedDataSourceId
}) {
  const retryDecisionCache = new Map();
  const replaceReferencesCache = new Map();
  let {
    importCount,
    failedImports = [],
    successfulImports = []
  } = state;
  const {
    file,
    importMode: {
      createNewCopies,
      overwrite: isOverwriteAllChecked
    }
  } = state;
  const doesntHaveRetryDecision = ({
    obj
  }) => {
    return !retryDecisionCache.has(`${obj.type}:${obj.id}`);
  };
  const getRetryDecision = ({
    obj
  }) => {
    return retryDecisionCache.get(`${obj.type}:${obj.id}`);
  };
  const callMapImportFailure = failure => mapImportFailureToRetryObject({
    failure,
    retryDecisionCache,
    replaceReferencesCache,
    state
  });
  const isNotSkipped = failure => {
    var _getRetryDecision;
    const {
      type
    } = failure.error;
    return !RESOLVABLE_ERRORS.includes(type) || ((_getRetryDecision = getRetryDecision(failure)) === null || _getRetryDecision === void 0 ? void 0 : _getRetryDecision.retry);
  };

  // Loop until all issues are resolved
  while (failedImports.some(failure => RESOLVABLE_ERRORS.includes(failure.error.type))) {
    // Filter out multiple errors for the same object
    const filteredFailures = filterFailedImports(failedImports);

    // Resolve regular conflicts
    if (isOverwriteAllChecked) {
      filteredFailures.filter(isConflict).forEach(({
        obj: {
          type,
          id
        },
        error: {
          destinationId
        }
      }) => retryDecisionCache.set(`${type}:${id}`, {
        retry: true,
        options: {
          overwrite: true,
          ...(destinationId && {
            destinationId
          })
        }
      }));
    }

    // prompt the user for each conflict
    const result = await getConflictResolutions(isOverwriteAllChecked ? filteredFailures.filter(isAmbiguousConflict).filter(doesntHaveRetryDecision) : filteredFailures.filter(isAnyConflict).filter(doesntHaveRetryDecision));
    for (const key of Object.keys(result)) {
      retryDecisionCache.set(key, result[key]);
    }

    // Build retries array
    const failRetries = filteredFailures.map(callMapImportFailure).filter(obj => !!obj);
    const successRetries = successfulImports.map(({
      type,
      id,
      overwrite,
      destinationId,
      createNewCopy
    }) => {
      const replaceReferences = replaceReferencesCache.get(`${type}:${id}`);
      return {
        type,
        id,
        ...(overwrite && {
          overwrite
        }),
        ...(replaceReferences && {
          replaceReferences
        }),
        destinationId,
        createNewCopy
      };
    });
    const retries = [...failRetries, ...successRetries];

    // Scenario where there were no success results, all errors were skipped, and nothing to retry
    if (retries.length === 0) {
      // Cancelled overwrites aren't failures anymore
      failedImports = filteredFailures.filter(isNotSkipped);
      break;
    }

    // Call API
    const response = await callResolveImportErrorsApi(http, file, retries, createNewCopies, selectedDataSourceId);
    importCount = response.successCount; // reset the success count since we retry all successful results each time
    failedImports = [];
    for (const {
      error,
      ...obj
    } of response.errors || []) {
      failedImports.push({
        error,
        obj
      });
    }
    successfulImports = response.successResults || [];
  }
  return {
    status: 'success',
    importCount,
    failedImports,
    successfulImports
  };
}

/***/ }),

/***/ "./public/lib/resolve_saved_objects.ts":
/*!*********************************************!*\
  !*** ./public/lib/resolve_saved_objects.ts ***!
  \*********************************************/
/*! exports provided: resolveIndexPatternConflicts, saveObjects, saveObject, resolveSavedSearches, resolveSavedObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveIndexPatternConflicts", function() { return resolveIndexPatternConflicts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveObjects", function() { return saveObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveObject", function() { return saveObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveSavedSearches", function() { return resolveSavedSearches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveSavedObjects", function() { return resolveSavedObjects; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/public */ "plugin/data/public");
/* harmony import */ var _data_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_public__WEBPACK_IMPORTED_MODULE_2__);
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





async function getSavedObject(doc, services) {
  const service = services.find(s => s.type === doc._type);
  if (!service) {
    return;
  }
  const obj = await service.get();
  obj.id = doc._id;
  obj.migrationVersion = doc._migrationVersion;
  return obj;
}
function addJsonFieldToIndexPattern(target, sourceString, fieldName, indexName) {
  if (sourceString) {
    try {
      target[fieldName] = JSON.parse(sourceString);
    } catch (error) {
      throw new Error(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('savedObjectsManagement.parsingFieldErrorMessage', {
        defaultMessage: 'Error encountered parsing {fieldName} for index pattern {indexName}: {errorMessage}',
        values: {
          fieldName,
          indexName,
          errorMessage: error.message
        }
      }));
    }
  }
}
async function importIndexPattern(doc, indexPatterns, overwriteAll = false, openConfirm) {
  // TODO: consolidate this is the code in create_index_pattern_wizard.js
  const {
    title,
    timeFieldName,
    fields,
    fieldFormatMap,
    sourceFilters,
    type,
    typeMeta
  } = doc._source;
  const indexPatternSpec = {
    id: doc._id,
    title,
    timeFieldName
  };
  let emptyPattern;
  if (type) {
    indexPatternSpec.type = type;
  }
  addJsonFieldToIndexPattern(indexPatternSpec, fields, 'fields', title);
  addJsonFieldToIndexPattern(indexPatternSpec, fieldFormatMap, 'fieldFormatMap', title);
  addJsonFieldToIndexPattern(indexPatternSpec, sourceFilters, 'sourceFilters', title);
  addJsonFieldToIndexPattern(indexPatternSpec, typeMeta, 'typeMeta', title);
  try {
    emptyPattern = await indexPatterns.createAndSave(indexPatternSpec, overwriteAll, true);
  } catch (err) {
    if (err instanceof _data_public__WEBPACK_IMPORTED_MODULE_2__["DuplicateIndexPatternError"]) {
      // We can override and we want to prompt for confirmation
      const isConfirmed = await openConfirm(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('savedObjectsManagement.indexPattern.confirmOverwriteLabel', {
        values: {
          title
        },
        defaultMessage: "Are you sure you want to overwrite '{title}'?"
      }), {
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('savedObjectsManagement.indexPattern.confirmOverwriteTitle', {
          defaultMessage: 'Overwrite {type}?',
          values: {
            type
          }
        }),
        confirmButtonText: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('savedObjectsManagement.indexPattern.confirmOverwriteButton', {
          defaultMessage: 'Overwrite'
        })
      });
      if (isConfirmed) {
        emptyPattern = await indexPatterns.createAndSave(indexPatternSpec, true, true);
      } else {
        return;
      }
    }
  }
  indexPatterns.clearCache(emptyPattern.id);
  return emptyPattern.id;
}
async function importDocument(obj, doc, overwriteAll) {
  await obj.applyOpenSearchResp({
    references: doc._references || [],
    ...Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(doc)
  });
  return await obj.save({
    confirmOverwrite: !overwriteAll
  });
}
function groupByType(docs) {
  const defaultDocTypes = {
    searches: [],
    indexPatterns: [],
    other: []
  };
  return docs.reduce((types, doc) => {
    switch (doc._type) {
      case 'search':
        types.searches.push(doc);
        break;
      case 'index-pattern':
        types.indexPatterns.push(doc);
        break;
      default:
        types.other.push(doc);
    }
    return types;
  }, defaultDocTypes);
}
async function resolveIndexPatternConflicts(resolutions, conflictedIndexPatterns, overwriteAll, dependencies) {
  let importCount = 0;
  for (const {
    obj,
    doc
  } of conflictedIndexPatterns) {
    var _doc$_source$kibanaSa;
    const serializedSearchSource = JSON.parse(((_doc$_source$kibanaSa = doc._source.kibanaSavedObjectMeta) === null || _doc$_source$kibanaSa === void 0 ? void 0 : _doc$_source$kibanaSa.searchSourceJSON) || '{}');
    const oldIndexId = serializedSearchSource.index;
    let allResolved = true;
    const inlineResolution = resolutions.find(({
      oldId
    }) => oldId === oldIndexId);
    if (inlineResolution) {
      serializedSearchSource.index = inlineResolution.newId;
    } else {
      allResolved = false;
    }

    // Resolve filter index reference:
    const filter = (serializedSearchSource.filter || []).map(f => {
      if (!(f.meta && f.meta.index)) {
        return f;
      }
      const resolution = resolutions.find(({
        oldId
      }) => oldId === f.meta.index);
      return resolution ? {
        ...f,
        ...{
          meta: {
            ...f.meta,
            index: resolution.newId
          }
        }
      } : f;
    });
    if (filter.length > 0) {
      serializedSearchSource.filter = filter;
    }
    const replacedReferences = (doc._references || []).map(reference => {
      const resolution = resolutions.find(({
        oldId
      }) => oldId === reference.id);
      if (resolution) {
        return {
          ...reference,
          id: resolution.newId
        };
      } else {
        allResolved = false;
      }
      return reference;
    });
    const serializedSearchSourceWithInjectedReferences = Object(_data_public__WEBPACK_IMPORTED_MODULE_2__["injectSearchSourceReferences"])(serializedSearchSource, replacedReferences);
    if (!allResolved) {
      // The user decided to skip this conflict so do nothing
      continue;
    }
    obj.searchSource = await dependencies.search.searchSource.create(serializedSearchSourceWithInjectedReferences);
    if (await saveObject(obj, overwriteAll)) {
      importCount++;
    }
  }
  return importCount;
}
async function saveObjects(objs, overwriteAll) {
  let importCount = 0;
  for (const obj of objs) {
    if (await saveObject(obj, overwriteAll)) {
      importCount++;
    }
  }
  return importCount;
}
async function saveObject(obj, overwriteAll) {
  return await obj.save({
    confirmOverwrite: !overwriteAll
  });
}
async function resolveSavedSearches(savedSearches, services, indexPatterns, overwriteAll) {
  let importCount = 0;
  for (const searchDoc of savedSearches) {
    const obj = await getSavedObject(searchDoc, services);
    if (!obj) {
      // Just ignore?
      continue;
    }
    if (await importDocument(obj, searchDoc, overwriteAll)) {
      importCount++;
    }
  }
  return importCount;
}
async function resolveSavedObjects(savedObjects, overwriteAll, services, indexPatterns, confirmModalPromise) {
  const docTypes = groupByType(savedObjects);

  // Keep track of how many we actually import because the user
  // can cancel an override
  let importedObjectCount = 0;
  const failedImports = [];
  // Start with the index patterns since everything is dependent on them
  // As the confirmation opens a modal, and as we only allow one modal at a time
  // (opening a new one close the previous with a rejection)
  // we can't do that in parallel
  for (const indexPatternDoc of docTypes.indexPatterns) {
    try {
      const importedIndexPatternId = await importIndexPattern(indexPatternDoc, indexPatterns, overwriteAll, confirmModalPromise);
      if (importedIndexPatternId) {
        importedObjectCount++;
      }
    } catch (error) {
      failedImports.push({
        obj: indexPatternDoc,
        error
      });
    }
  }

  // We want to do the same for saved searches, but we want to keep them separate because they need
  // to be applied _first_ because other saved objects can be dependent on those saved searches existing
  const conflictedSearchDocs = [];
  // Keep a record of the index patterns assigned to our imported saved objects that do not
  // exist. We will provide a way for the user to manually select a new index pattern for those
  // saved objects.
  const conflictedIndexPatterns = [];
  // Keep a record of any objects which fail to import for unknown reasons.

  // It's possible to have saved objects that link to saved searches which then link to index patterns
  // and those could error out, but the error comes as an index pattern not found error. We can't resolve
  // those the same as way as normal index pattern not found errors, but when those are fixed, it's very
  // likely that these saved objects will work once resaved so keep them around to resave them.
  const conflictedSavedObjectsLinkedToSavedSearches = [];
  for (const searchDoc of docTypes.searches) {
    const obj = await getSavedObject(searchDoc, services);
    try {
      if (await importDocument(obj, searchDoc, overwriteAll)) {
        importedObjectCount++;
      }
    } catch (error) {
      if (error.constructor.name === 'SavedObjectNotFound') {
        if (error.savedObjectType === 'index-pattern') {
          conflictedIndexPatterns.push({
            obj,
            doc: searchDoc
          });
        } else {
          conflictedSearchDocs.push(searchDoc);
        }
      } else {
        failedImports.push({
          obj,
          error
        });
      }
    }
  }
  for (const otherDoc of docTypes.other) {
    const obj = await getSavedObject(otherDoc, services);
    try {
      if (await importDocument(obj, otherDoc, overwriteAll)) {
        importedObjectCount++;
      }
    } catch (error) {
      const isIndexPatternNotFound = error.constructor.name === 'SavedObjectNotFound' && error.savedObjectType === 'index-pattern';
      if (isIndexPatternNotFound && obj.savedSearchId) {
        conflictedSavedObjectsLinkedToSavedSearches.push(obj);
      } else if (isIndexPatternNotFound) {
        conflictedIndexPatterns.push({
          obj,
          doc: otherDoc
        });
      } else {
        failedImports.push({
          obj,
          error
        });
      }
    }
  }
  return {
    conflictedIndexPatterns,
    conflictedSavedObjectsLinkedToSavedSearches,
    conflictedSearchDocs,
    importedObjectCount,
    failedImports
  };
}

/***/ }),

/***/ "./public/management_section/index.ts":
/*!********************************************!*\
  !*** ./public/management_section/index.ts ***!
  \********************************************/
/*! exports provided: mountManagementSection, SavedObjectsDuplicateModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mount_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mount_section */ "./public/management_section/mount_section.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mountManagementSection", function() { return _mount_section__WEBPACK_IMPORTED_MODULE_0__["mountManagementSection"]; });

/* harmony import */ var _objects_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects_table */ "./public/management_section/objects_table/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsDuplicateModal", function() { return _objects_table__WEBPACK_IMPORTED_MODULE_1__["SavedObjectsDuplicateModal"]; });

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

/***/ "./public/management_section/mount_section.tsx":
/*!*****************************************************!*\
  !*** ./public/management_section/mount_section.tsx ***!
  \*****************************************************/
/*! exports provided: mountManagementSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mountManagementSection", function() { return mountManagementSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../lib */ "./public/lib/index.ts");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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








let allowedObjectTypes;
const savedObjectsTitle = _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objects.savedObjectsTitle', {
  defaultMessage: 'Saved Objects'
});
const workspaceAssetsTitle = _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objects.workspaceAssetsTitle', {
  defaultMessage: 'Workspace assets'
});
const assetsTitle = _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objects.assetsTitle', {
  defaultMessage: 'Assets'
});
const SavedObjectsEditionPage = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./saved_objects_edition_page */ "./public/management_section/saved_objects_edition_page.tsx")));
const SavedObjectsTablePage = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./saved_objects_table_page */ "./public/management_section/saved_objects_table_page.tsx")));
const mountManagementSection = async ({
  core,
  mountParams,
  serviceRegistry,
  dataSourceEnabled,
  dataSourceManagement
}) => {
  var _coreStart$applicatio;
  const [coreStart, {
    data,
    uiActions,
    navigation
  }, pluginStart] = await core.getStartServices();
  const {
    element,
    history,
    setBreadcrumbs
  } = mountParams;
  if (allowedObjectTypes === undefined) {
    allowedObjectTypes = await Object(_lib__WEBPACK_IMPORTED_MODULE_6__["getAllowedTypes"])(coreStart.http);
  }
  // Restrict user to manage data source in the saved object management page according the manageableBy flag.
  const showDataSource = !!((_coreStart$applicatio = coreStart.application.capabilities) !== null && _coreStart$applicatio !== void 0 && (_coreStart$applicatio = _coreStart$applicatio.dataSource) !== null && _coreStart$applicatio !== void 0 && _coreStart$applicatio.canManage);
  allowedObjectTypes = showDataSource ? allowedObjectTypes : allowedObjectTypes.filter(type => type !== 'data-source');
  const useUpdatedUX = coreStart.uiSettings.get('home:useNewHomePage');
  const currentWorkspaceId = coreStart.workspaces.currentWorkspaceId$.getValue();
  const getDocTitle = () => {
    if (currentWorkspaceId) {
      return workspaceAssetsTitle;
    }
    if (useUpdatedUX) {
      return assetsTitle;
    }
    return savedObjectsTitle;
  };
  coreStart.chrome.docTitle.change(getDocTitle());
  const capabilities = coreStart.application.capabilities;
  const RedirectToHomeIfUnauthorized = ({
    children
  }) => {
    var _capabilities$managem, _capabilities$managem2;
    const allowed = (_capabilities$managem = capabilities === null || capabilities === void 0 || (_capabilities$managem2 = capabilities.management) === null || _capabilities$managem2 === void 0 || (_capabilities$managem2 = _capabilities$managem2.opensearchDashboards) === null || _capabilities$managem2 === void 0 ? void 0 : _capabilities$managem2.objects) !== null && _capabilities$managem !== void 0 ? _capabilities$managem : false;
    if (!allowed) {
      coreStart.application.navigateToApp('home');
      return null;
    }
    return children;
  };
  const content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Router"], {
    history: history
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: '/:service/:id',
    exact: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RedirectToHomeIfUnauthorized, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiLoadingSpinner"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SavedObjectsEditionPage, {
    coreStart: coreStart,
    uiActionsStart: uiActions,
    serviceRegistry: serviceRegistry,
    setBreadcrumbs: setBreadcrumbs,
    history: history,
    useUpdatedUX: useUpdatedUX,
    navigation: navigation
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: '/',
    exact: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RedirectToHomeIfUnauthorized, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiLoadingSpinner"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SavedObjectsTablePage, {
    coreStart: coreStart,
    dataStart: data,
    serviceRegistry: serviceRegistry,
    actionRegistry: pluginStart.actions,
    columnRegistry: pluginStart.columns,
    namespaceRegistry: pluginStart.namespaces,
    allowedTypes: allowedObjectTypes,
    setBreadcrumbs: setBreadcrumbs,
    dataSourceEnabled: dataSourceEnabled,
    dataSourceManagement: dataSourceManagement,
    navigation: navigation,
    useUpdatedUX: useUpdatedUX
  }))))));
  const pageContentPaddingSize = useUpdatedUX ?
  // align with new header
  {
    paddingSize: 'm'
  } : {};
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["I18nProvider"], null, mountParams.wrapInPage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_5__["EuiPageContent"], _extends({
    hasShadow: false,
    hasBorder: false,
    color: "transparent"
  }, pageContentPaddingSize), content) : content), element);
  return () => {
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(element);
  };
};

/***/ }),

/***/ "./public/management_section/objects_table/components/duplicate_modal.tsx":
/*!********************************************************************************!*\
  !*** ./public/management_section/objects_table/components/duplicate_modal.tsx ***!
  \********************************************************************************/
/*! exports provided: SavedObjectsDuplicateModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsDuplicateModal", function() { return SavedObjectsDuplicateModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./public/management_section/objects_table/components/utils.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */






class SavedObjectsDuplicateModal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "isMounted", false);
    _defineProperty(this, "duplicateSavedObjects", async savedObjects => {
      const selectedWorkspace = this.state.targetWorkspaceOption[0];
      if (!selectedWorkspace) {
        return;
      }
      const targetWorkspace = selectedWorkspace.key;
      const targetWorkspaceName = selectedWorkspace.label;
      this.setState({
        isLoading: true
      });
      await this.props.onDuplicate(savedObjects, this.state.isIncludeReferencesDeepChecked, targetWorkspace, targetWorkspaceName);
      if (this.isMounted) {
        this.setState({
          isLoading: false
        });
      }
    });
    _defineProperty(this, "onTargetWorkspaceChange", targetWorkspaceOption => {
      this.setState({
        targetWorkspaceOption
      });
    });
    _defineProperty(this, "changeIncludeReferencesDeep", e => {
      this.setState({
        isIncludeReferencesDeepChecked: e.target.checked
      });
    });
    const {
      workspaces
    } = props;
    const currentWorkspace = workspaces.currentWorkspace$.value;
    const targetWorkspacesOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getTargetWorkspacesOptions"])(workspaces, currentWorkspace);
    this.state = {
      allSelectedObjects: props.selectedSavedObjects,
      workspaceOptions: targetWorkspacesOptions,
      targetWorkspaceOption: [],
      isLoading: false,
      isIncludeReferencesDeepChecked: true
    };
    this.isMounted = true;
  }
  componentWillUnmount() {
    this.isMounted = false;
  }
  render() {
    var _targetWorkspaceOptio, _allSelectedObjects$;
    const {
      workspaceOptions,
      targetWorkspaceOption,
      isIncludeReferencesDeepChecked,
      allSelectedObjects
    } = this.state;
    const {
      onClose
    } = this.props;
    const targetWorkspaceId = targetWorkspaceOption === null || targetWorkspaceOption === void 0 || (_targetWorkspaceOptio = targetWorkspaceOption.at(0)) === null || _targetWorkspaceOptio === void 0 ? void 0 : _targetWorkspaceOptio.key;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiModal"], {
      "data-test-subj": "savedObjectsDuplicateModal",
      className: "savedObjectsModal",
      onClose: onClose
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiModalHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiModalHeaderTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "savedObjectsManagement.objectsTable.duplicateModal.title",
      defaultMessage: "Copy {objectCount, plural, =1 {{objectName}} other {# {useUpdatedUX, select, true {assets} other {objects}}}} to another workspace?",
      values: {
        objectName: (_allSelectedObjects$ = allSelectedObjects[0]) === null || _allSelectedObjects$ === void 0 ? void 0 : _allSelectedObjects$.meta.title,
        objectCount: allSelectedObjects.length,
        useUpdatedUX: this.props.useUpdatedUX
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFormRow"], {
      fullWidth: true,
      label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.duplicateModal.targetWorkspaceLabel', {
        defaultMessage: 'Target workspace'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiComboBox"], {
      options: workspaceOptions,
      onChange: this.onTargetWorkspaceChange,
      selectedOptions: targetWorkspaceOption,
      singleSelection: {
        asPlainText: true
      },
      isClearable: false,
      isInvalid: !targetWorkspaceId,
      placeholder: "Select a workspace"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFormRow"], {
      fullWidth: true,
      label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.duplicateModal.relatedObjects', {
        defaultMessage: 'Copy related {useUpdatedUX, select, true {assets} other {objects}}',
        values: {
          useUpdatedUX: this.props.useUpdatedUX
        }
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
      size: "s"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCheckbox"], {
      id: 'includeReferencesDeep',
      label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.duplicateModal.includeReferencesDeepLabel', {
        defaultMessage: 'Copy the selected {useUpdatedUX, select, true {asset} other {object}} and any related {useUpdatedUX, select, true {assets} other {objects}} (recommended).',
        values: {
          useUpdatedUX: this.props.useUpdatedUX
        }
      }),
      checked: isIncludeReferencesDeepChecked,
      onChange: this.changeIncludeReferencesDeep
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonEmpty"], {
      "data-test-subj": "duplicateCancelButton",
      onClick: this.props.onClose
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "savedObjectsManagement.objectsTable.duplicateModal.duplicateCancelButton",
      defaultMessage: "Cancel"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButton"], {
      fill: true,
      "data-test-subj": "duplicateConfirmButton",
      onClick: () => this.duplicateSavedObjects(allSelectedObjects),
      isLoading: this.state.isLoading,
      disabled: !targetWorkspaceId
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "savedObjectsManagement.objectsTable.duplicateModal.confirmButtonLabel",
      defaultMessage: "Copy"
    }))));
  }
}

/***/ }),

/***/ "./public/management_section/objects_table/components/duplicate_result_flyout.tsx":
/*!****************************************************************************************!*\
  !*** ./public/management_section/objects_table/components/duplicate_result_flyout.tsx ***!
  \****************************************************************************************/
/*! exports provided: DuplicateResultFlyout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuplicateResultFlyout", function() { return DuplicateResultFlyout; });
/* harmony import */ var _import_summary_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import_summary.scss */ "./public/management_section/objects_table/components/import_summary.scss");
/* harmony import */ var _import_summary_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_summary_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../.. */ "./public/index.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib */ "./public/lib/index.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */









const DEFAULT_ICON = 'apps';
const unsupportedTypeErrorMessage = _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.copyResult.unsupportedTypeError', {
  defaultMessage: 'Unsupported object type'
});
const getErrorMessage = ({
  error
}) => {
  if (error.type === 'unknown') {
    return error.message;
  } else if (error.type === 'unsupported_type') {
    return unsupportedTypeErrorMessage;
  } else if (error.type === 'missing_data_source') {
    return _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.copyResult.missingDataSourceError', {
      defaultMessage: 'Missing data source: {ds}',
      values: {
        ds: error.dataSource
      }
    });
  } else if (error.type === 'missing_references') {
    return _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.copyResult.missingReferencesError', {
      defaultMessage: 'Missing references.'
    });
  }
};
class DuplicateResultFlyout extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "indexPatternConflictsWarning", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCallOut"], {
      "data-test-subj": "importSavedObjectsConflictsWarning",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.copyResult.indexPatternConflictsTitle",
        defaultMessage: "Index Pattern Conflicts"
      }),
      color: "danger",
      iconType: "alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "savedObjectsManagement.objectsTable.copyResult.indexPatternConflictsDescription",
      defaultMessage: "The following {useUpdatedUX, select, true {assets} other {saved objects}} use index patterns that do not exist. Please select the index patterns you'd like re-associated with them. You can create a new index pattern if necessary.",
      values: {
        useUpdatedUX: this.props.useUpdatedUX
      }
    }))));
    _defineProperty(this, "missingDataSourceWarning", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCallOut"], {
      "data-test-subj": "missingDataSourceWarning",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.copyResult.missingDataSourceTitle",
        defaultMessage: "Missing Data Source"
      }),
      color: "danger",
      iconType: "alert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "savedObjectsManagement.objectsTable.copyResult.missingDataSourceDescription",
      defaultMessage: "The following {useUpdatedUX, select, true {assets} other {saved objects}} can not be copied, some of the data sources they use are not associated with {targetWorkspaceDataSourceLink}.",
      values: {
        useUpdatedUX: this.props.useUpdatedUX,
        targetWorkspaceDataSourceLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
          href: this.props.dataSourceUrlForTargetWorkspace,
          target: "_blank"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
          id: "savedObjectsManagement.objectsTable.copyResult.missingDataSourceCalloutLinkText",
          defaultMessage: "{targetWorkspace}",
          values: {
            targetWorkspace: this.props.workspaceName
          }
        }))
      }
    }))));
    _defineProperty(this, "duplicateSavedObjects", async () => {
      const {
        successfulCopies,
        workspaceName,
        onCopy,
        targetWorkspace
      } = this.props;
      const savedObjects = successfulCopies.map(({
        id,
        meta,
        type
      }) => {
        return {
          id,
          meta,
          type
        };
      });
      this.setState({
        isLoading: true
      });
      await onCopy(savedObjects, false, targetWorkspace, workspaceName);
      this.setState({
        isLoading: false
      });
    });
    this.state = {
      isLoading: false
    };
  }
  get isShowRemainingButton() {
    return this.props.successfulCopies.length > 0 && !!this.props.failedCopies.find(({
      error
    }) => error.type === 'missing_references' || error.type === 'missing_data_source');
  }
  getCountIndicators(copyItems) {
    if (!copyItems.length) {
      return null;
    }
    const outcomeCounts = copyItems.reduce((acc, {
      outcome
    }) => {
      var _acc$get;
      return acc.set(outcome, ((_acc$get = acc.get(outcome)) !== null && _acc$get !== void 0 ? _acc$get : 0) + 1);
    }, new Map());
    const copiedCount = outcomeCounts.get('copied');
    const errorCount = outcomeCounts.get('error');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], null, copiedCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
      size: "xs"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
      className: "savedObjectsManagementImportSummary__createdCount"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "savedObjectsManagement.copyResult.copiedCountHeader",
      defaultMessage: "{copiedCount} Successful",
      values: {
        copiedCount
      }
    })))), errorCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
      size: "xs"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
      className: "savedObjectsManagementImportSummary__errorCount"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "savedObjectsManagement.copyResult.errorCountHeader",
      defaultMessage: "{errorCount} Error copying file",
      values: {
        errorCount
      }
    })))));
  }
  getStatusIndicator({
    outcome,
    errorMessage = 'Error'
  }) {
    switch (outcome) {
      case 'copied':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIconTip"], {
          type: 'checkInCircleFilled',
          color: 'success',
          content: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.copyResult.copiedOutcomeLabel', {
            defaultMessage: 'copied'
          })
        });
      case 'error':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIconTip"], {
          type: 'alert',
          color: 'danger',
          content: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.copyResult.errorOutcomeLabel', {
            defaultMessage: '{errorMessage}',
            values: {
              errorMessage
            }
          })
        });
    }
  }
  mapFailedCopy(failure) {
    const {
      type,
      id,
      meta
    } = failure;
    const title = meta.title || Object(_lib__WEBPACK_IMPORTED_MODULE_7__["getDefaultTitle"])({
      type,
      id
    });
    const icon = meta.icon || DEFAULT_ICON;
    const errorMessage = getErrorMessage(failure);
    return {
      type,
      id,
      title,
      icon,
      outcome: 'error',
      errorMessage
    };
  }
  mapCopySuccess(obj) {
    const {
      type,
      id,
      meta
    } = obj;
    const title = meta.title || Object(_lib__WEBPACK_IMPORTED_MODULE_7__["getDefaultTitle"])(obj);
    const icon = meta.icon || DEFAULT_ICON;
    return {
      type,
      id,
      title,
      icon,
      outcome: 'copied'
    };
  }
  renderItems(items) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, items.map((item, index) => {
      const {
        type,
        title,
        icon
      } = item;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
        responsive: false,
        key: index,
        alignItems: "center",
        gutterSize: "s",
        className: "savedObjectsManagementImportSummary__row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
        grow: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
        position: "top",
        content: Object(___WEBPACK_IMPORTED_MODULE_6__["getSavedObjectLabel"])(type)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
        "aria-label": Object(___WEBPACK_IMPORTED_MODULE_6__["getSavedObjectLabel"])(type),
        type: icon,
        size: "s"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
        className: "savedObjectsManagementImportSummary__title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
        size: "s"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: "eui-textTruncate",
        title: title
      }, title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
        grow: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "eui-textRight"
      }, this.getStatusIndicator(item))));
    }));
  }
  copyResult({
    failedCopies,
    successfulCopies
  }) {
    const missingDataSourceItems = failedCopies.filter(({
      error
    }) => error.type === 'missing_data_source').map(object => this.mapFailedCopy(object));
    const missingReferencesItems = failedCopies.filter(({
      error
    }) => error.type === 'missing_references').map(object => this.mapFailedCopy(object));
    if (missingReferencesItems.length > 0 || missingDataSourceItems.length > 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, missingReferencesItems.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, this.indexPatternConflictsWarning, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
        size: "s"
      }), this.renderItems(missingReferencesItems), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHorizontalRule"], null)), missingDataSourceItems.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, this.missingDataSourceWarning, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
        size: "s"
      }), this.renderItems(missingDataSourceItems)));
    }
    const copyItems = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.sortBy([...failedCopies.map(object => this.mapFailedCopy(object)), ...successfulCopies.map(object => this.mapCopySuccess(object))], ['type', 'title']);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
      size: "s",
      "data-test-subj": "copySavedObjectsSuccess"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "savedObjectsManagement.copyResult.headerLabelPlural",
      defaultMessage: "{itemsCount, plural, one {# {useUpdatedUX, select, true {asset} other {saved object}}}  other {# {useUpdatedUX, select, true {assets} other {saved objects}}}} copied",
      values: {
        itemsCount: copyItems.length,
        useUpdatedUX: this.props.useUpdatedUX
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "m"
    }), this.getCountIndicators(copyItems), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHorizontalRule"], null), this.renderItems(copyItems));
  }
  render() {
    const {
      onClose,
      failedCopies,
      successfulCopies,
      workspaceName,
      useUpdatedUX
    } = this.props;
    const {
      isLoading
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyout"], {
      ownFocus: true,
      onClose: onClose,
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyoutHeader"], {
      hasBorder: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "savedObjectsManagement.copyResult.title",
      defaultMessage: "Copy {useUpdatedUX, select, true {assets} other {saved objects}} to {workspaceName}",
      values: {
        workspaceName,
        useUpdatedUX
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyoutBody"], null, this.copyResult({
      failedCopies,
      successfulCopies
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyoutFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
      justifyContent: "spaceBetween"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonEmpty"], {
      onClick: onClose,
      flush: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "savedObjectsManagement.copyResult.closeButton",
      defaultMessage: "Close"
    }))), this.isShowRemainingButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButton"], {
      fill: true,
      onClick: () => this.duplicateSavedObjects(),
      isLoading: isLoading
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "savedObjectsManagement.copyResult.copyRemainingButton",
      defaultMessage: "Copy remaining {itemsCount, plural, one {# {useUpdatedUX, select, true {asset} other {saved object}}}  other {# {useUpdatedUX, select, true {assets} other {saved objects}}}}",
      values: {
        useUpdatedUX,
        itemsCount: successfulCopies.length
      }
    }))))));
  }
}

/***/ }),

/***/ "./public/management_section/objects_table/components/flyout.tsx":
/*!***********************************************************************!*\
  !*** ./public/management_section/objects_table/components/flyout.tsx ***!
  \***********************************************************************/
/*! exports provided: Flyout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flyout", function() { return Flyout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib */ "./public/lib/index.ts");
/* harmony import */ var _lib_resolve_saved_objects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/resolve_saved_objects */ "./public/lib/resolve_saved_objects.ts");
/* harmony import */ var _overwrite_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overwrite_modal */ "./public/management_section/objects_table/components/overwrite_modal.tsx");
/* harmony import */ var _import_mode_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./import_mode_control */ "./public/management_section/objects_table/components/import_mode_control.tsx");
/* harmony import */ var _import_summary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./import_summary */ "./public/management_section/objects_table/components/import_summary.tsx");
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











const CREATE_NEW_COPIES_DEFAULT = true;
const OVERWRITE_ALL_DEFAULT = true;
const getErrorMessage = e => {
  var _e$body, _e$body2;
  const errorMessage = (_e$body = e.body) !== null && _e$body !== void 0 && _e$body.error && (_e$body2 = e.body) !== null && _e$body2 !== void 0 && _e$body2.message ? `${e.body.error}: ${e.body.message}` : e.message;
  return _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.flyout.importFileErrorMessage', {
    defaultMessage: 'The file could not be processed due to error: "{error}"',
    values: {
      error: errorMessage
    }
  });
};
class Flyout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    _defineProperty(this, "fetchIndexPatterns", async () => {
      var _await$this$props$ind;
      const indexPatterns = (_await$this$props$ind = await this.props.indexPatterns.getCache()) === null || _await$this$props$ind === void 0 ? void 0 : _await$this$props$ind.map(savedObject => ({
        id: savedObject.id,
        title: savedObject.attributes.title
      }));
      this.setState({
        indexPatterns
      });
    });
    _defineProperty(this, "changeImportMode", importMode => {
      this.setState(() => ({
        importMode
      }));
    });
    _defineProperty(this, "setImportFile", files => {
      if (!files || !files[0]) {
        this.setState({
          file: undefined,
          isLegacyFile: false
        });
        return;
      }
      const file = files[0];
      this.setState({
        file,
        isLegacyFile: /\.json$/i.test(file.name) || file.type === 'application/json'
      });
    });
    /**
     * Import
     *
     * Does the initial import of a file, resolveImportErrors then handles errors and retries
     */
    _defineProperty(this, "import", async () => {
      const {
        http,
        dataSourceEnabled
      } = this.props;
      const {
        file,
        importMode,
        selectedDataSourceId
      } = this.state;
      this.setState({
        status: 'loading',
        error: undefined
      });

      // Import the file
      try {
        const response = await Object(_lib__WEBPACK_IMPORTED_MODULE_5__["importFile"])(http, file, importMode, selectedDataSourceId, dataSourceEnabled);
        this.setState(Object(_lib__WEBPACK_IMPORTED_MODULE_5__["processImportResponse"])(response), () => {
          var _this$state$unmatched;
          // Resolve import errors right away if there's no index patterns to match
          // This will ask about overwriting each object, etc
          if (((_this$state$unmatched = this.state.unmatchedReferences) === null || _this$state$unmatched === void 0 ? void 0 : _this$state$unmatched.length) === 0) {
            this.resolveImportErrors();
          }
        });
      } catch (e) {
        this.setState({
          status: 'error',
          error: getErrorMessage(e)
        });
        return;
      }
    });
    /**
     * Get Conflict Resolutions
     *
     * Function iterates through the objects, displays a modal for each asking the user if they wish to overwrite it or not.
     *
     * @param {array} failures List of objects to request the user if they wish to overwrite it
     * @return {Promise<array>} An object with the key being "type:id" and value the resolution chosen by the user
     */
    _defineProperty(this, "getConflictResolutions", async failures => {
      const resolutions = {};
      for (const conflict of failures) {
        const [overwrite, destinationId] = await new Promise(done => {
          this.setState({
            conflictingRecord: {
              conflict,
              done
            }
          });
        });
        if (overwrite) {
          const {
            type,
            id
          } = conflict.obj;
          resolutions[`${type}:${id}`] = {
            retry: true,
            options: {
              overwrite: true,
              ...(destinationId && {
                destinationId
              })
            }
          };
        }
        this.setState({
          conflictingRecord: undefined
        });
      }
      return resolutions;
    });
    /**
     * Resolve Import Errors
     *
     * Function goes through the failedImports and tries to resolve the issues.
     */
    _defineProperty(this, "resolveImportErrors", async () => {
      this.setState({
        error: undefined,
        status: 'loading',
        loadingMessage: undefined
      });
      try {
        const updatedState = await Object(_lib__WEBPACK_IMPORTED_MODULE_5__["resolveImportErrors"])({
          http: this.props.http,
          state: this.state,
          getConflictResolutions: this.getConflictResolutions,
          selectedDataSourceId: this.state.selectedDataSourceId
        });
        this.setState(updatedState);
      } catch (e) {
        this.setState({
          status: 'error',
          error: getErrorMessage(e)
        });
      }
    });
    _defineProperty(this, "legacyImport", async () => {
      const {
        serviceRegistry,
        indexPatterns,
        overlays,
        http,
        allowedTypes,
        useUpdatedUX
      } = this.props;
      const {
        file,
        importMode
      } = this.state;
      this.setState({
        status: 'loading',
        error: undefined
      });

      // Log warning on server, don't wait for response
      Object(_lib__WEBPACK_IMPORTED_MODULE_5__["logLegacyImport"])(http);
      let contents;
      try {
        contents = await Object(_lib__WEBPACK_IMPORTED_MODULE_5__["importLegacyFile"])(file);
      } catch (e) {
        this.setState({
          status: 'error',
          error: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.flyout.importLegacyFileErrorMessage', {
            defaultMessage: 'The file could not be processed.'
          })
        });
        return;
      }
      if (!Array.isArray(contents)) {
        this.setState({
          status: 'error',
          error: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.flyout.invalidFormatOfImportedFileErrorMessage', {
            defaultMessage: '{useUpdatedUX, select, true {Assets} other {Saved objects}} file format is invalid and cannot be imported.',
            values: {
              useUpdatedUX
            }
          })
        });
        return;
      }
      contents = contents.filter(content => allowedTypes.includes(content._type)).map(doc => ({
        ...doc,
        // The server assumes that documents with no migrationVersion are up to date.
        // That assumption enables OpenSearch Dashboards and other API consumers to not have to build
        // up migrationVersion prior to creating new objects. But it means that imports
        // need to set migrationVersion to something other than undefined, so that imported
        // docs are not seen as automatically up-to-date.
        _migrationVersion: doc._migrationVersion || {}
      }));
      const {
        conflictedIndexPatterns,
        conflictedSavedObjectsLinkedToSavedSearches,
        conflictedSearchDocs,
        importedObjectCount,
        failedImports
      } = await Object(_lib_resolve_saved_objects__WEBPACK_IMPORTED_MODULE_6__["resolveSavedObjects"])(contents, importMode.overwrite, serviceRegistry.all().map(e => e.service), indexPatterns, overlays.openConfirm);
      const byId = {};
      conflictedIndexPatterns.map(({
        doc,
        obj
      }) => {
        return {
          doc,
          obj: obj._serialize()
        };
      }).forEach(({
        doc,
        obj
      }) => obj.references.forEach(ref => {
        byId[ref.id] = byId[ref.id] != null ? byId[ref.id].concat({
          doc,
          obj
        }) : [{
          doc,
          obj
        }];
      }));
      const unmatchedReferences = Object.entries(byId).reduce((accum, [existingIndexPatternId, list]) => {
        accum.push({
          existingIndexPatternId,
          newIndexPatternId: undefined,
          list: list.map(({
            doc
          }) => ({
            id: existingIndexPatternId,
            type: doc._type,
            title: doc._source.title
          }))
        });
        return accum;
      }, []);
      this.setState({
        conflictedIndexPatterns,
        conflictedSavedObjectsLinkedToSavedSearches,
        conflictedSearchDocs,
        failedImports,
        unmatchedReferences,
        importCount: importedObjectCount,
        status: unmatchedReferences.length === 0 ? 'success' : 'idle'
      });
    });
    _defineProperty(this, "confirmLegacyImport", async () => {
      const {
        conflictedIndexPatterns,
        importMode,
        conflictedSavedObjectsLinkedToSavedSearches,
        conflictedSearchDocs,
        failedImports
      } = this.state;
      const {
        serviceRegistry,
        indexPatterns,
        search,
        useUpdatedUX
      } = this.props;
      this.setState({
        error: undefined,
        status: 'loading',
        loadingMessage: undefined
      });
      let importCount = this.state.importCount;
      if (this.hasUnmatchedReferences) {
        try {
          const resolutions = this.resolutions;

          // Do not Promise.all these calls as the order matters
          this.setState({
            loadingMessage: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.flyout.confirmLegacyImport.resolvingConflictsLoadingMessage', {
              defaultMessage: 'Resolving conflicts…'
            })
          });
          if (resolutions.length) {
            importCount += await Object(_lib_resolve_saved_objects__WEBPACK_IMPORTED_MODULE_6__["resolveIndexPatternConflicts"])(resolutions, conflictedIndexPatterns, importMode.overwrite, {
              indexPatterns,
              search
            });
          }
          this.setState({
            loadingMessage: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.flyout.confirmLegacyImport.savingConflictsLoadingMessage', {
              defaultMessage: 'Saving conflicts…'
            })
          });
          importCount += await Object(_lib_resolve_saved_objects__WEBPACK_IMPORTED_MODULE_6__["saveObjects"])(conflictedSavedObjectsLinkedToSavedSearches, importMode.overwrite);
          this.setState({
            loadingMessage: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.flyout.confirmLegacyImport.savedSearchAreLinkedProperlyLoadingMessage', {
              defaultMessage: 'Ensure saved searches are linked properly…'
            })
          });
          importCount += await Object(_lib_resolve_saved_objects__WEBPACK_IMPORTED_MODULE_6__["resolveSavedSearches"])(conflictedSearchDocs, serviceRegistry.all().map(e => e.service), indexPatterns, importMode.overwrite);
          this.setState({
            loadingMessage: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.flyout.confirmLegacyImport.retryingFailedObjectsLoadingMessage', {
              defaultMessage: 'Retrying failed {useUpdatedUX, select, true {assets} other {objects}}…',
              values: {
                useUpdatedUX
              }
            })
          });
          importCount += await Object(_lib_resolve_saved_objects__WEBPACK_IMPORTED_MODULE_6__["saveObjects"])(failedImports.map(({
            obj
          }) => obj), importMode.overwrite);
        } catch (e) {
          this.setState({
            status: 'error',
            error: getErrorMessage(e),
            loadingMessage: undefined
          });
          return;
        }
      }
      this.setState({
        status: 'success',
        importCount
      });
    });
    _defineProperty(this, "onIndexChanged", (id, e) => {
      const value = e.target.value;
      this.setState(state => {
        var _state$unmatchedRefer;
        const conflictIndex = (_state$unmatchedRefer = state.unmatchedReferences) === null || _state$unmatchedRefer === void 0 ? void 0 : _state$unmatchedRefer.findIndex(conflict => conflict.existingIndexPatternId === id);
        if (conflictIndex === undefined || conflictIndex === -1) {
          return state;
        }
        return {
          unmatchedReferences: [...state.unmatchedReferences.slice(0, conflictIndex), {
            ...state.unmatchedReferences[conflictIndex],
            newIndexPatternId: value
          }, ...state.unmatchedReferences.slice(conflictIndex + 1)]
        };
      });
    });
    _defineProperty(this, "onSelectedDataSourceChange", e => {
      const dataSourceId = e[0] ? e[0].id : undefined;
      this.setState({
        selectedDataSourceId: dataSourceId
      });
    });
    this.state = {
      conflictedIndexPatterns: undefined,
      conflictedSavedObjectsLinkedToSavedSearches: undefined,
      conflictedSearchDocs: undefined,
      unmatchedReferences: undefined,
      conflictingRecord: undefined,
      error: undefined,
      file: undefined,
      importCount: 0,
      indexPatterns: undefined,
      importMode: {
        createNewCopies: CREATE_NEW_COPIES_DEFAULT,
        overwrite: OVERWRITE_ALL_DEFAULT
      },
      loadingMessage: undefined,
      isLegacyFile: false,
      status: 'idle'
    };
  }
  componentDidMount() {
    this.fetchIndexPatterns();
  }
  get hasUnmatchedReferences() {
    return this.state.unmatchedReferences && this.state.unmatchedReferences.length > 0;
  }
  get resolutions() {
    return this.state.unmatchedReferences.reduce((accum, {
      existingIndexPatternId,
      newIndexPatternId
    }) => {
      if (newIndexPatternId) {
        accum.push({
          oldId: existingIndexPatternId,
          newId: newIndexPatternId
        });
      }
      return accum;
    }, []);
  }
  renderUnmatchedReferences() {
    const {
      unmatchedReferences
    } = this.state;
    if (!unmatchedReferences) {
      return null;
    }
    const columns = [{
      field: 'existingIndexPatternId',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.flyout.renderConflicts.columnIdName', {
        defaultMessage: 'ID'
      }),
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.flyout.renderConflicts.columnIdDescription', {
        defaultMessage: 'ID of the index pattern'
      }),
      sortable: true
    }, {
      field: 'list',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.flyout.renderConflicts.columnCountName', {
        defaultMessage: 'Count'
      }),
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.flyout.renderConflicts.columnCountDescription', {
        defaultMessage: 'How many affected {useUpdatedUX, select, true {assets} other {objects}}',
        values: {
          useUpdatedUX: this.props.useUpdatedUX
        }
      }),
      render: list => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, list.length);
      }
    }, {
      field: 'list',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.flyout.renderConflicts.columnSampleOfAffectedObjectsName', {
        defaultMessage: 'Sample of affected {useUpdatedUX, select, true {assets} other {objects}}',
        values: {
          useUpdatedUX: this.props.useUpdatedUX
        }
      }),
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.flyout.renderConflicts.columnSampleOfAffectedObjectsDescription', {
        defaultMessage: 'Sample of affected {useUpdatedUX, select, true {assets} other {objects}}',
        values: {
          useUpdatedUX: this.props.useUpdatedUX
        }
      }),
      render: list => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          style: {
            listStyle: 'none'
          }
        }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["take"])(list, 3).map((obj, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: key
        }, obj.title)));
      }
    }, {
      field: 'existingIndexPatternId',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.flyout.renderConflicts.columnNewIndexPatternName', {
        defaultMessage: 'New index pattern'
      }),
      render: id => {
        const options = this.state.indexPatterns.map(indexPattern => ({
          text: indexPattern.title,
          value: indexPattern.id,
          'data-test-subj': `indexPatternOption-${indexPattern.title}`
        }));
        options.unshift({
          text: '-- Skip Import --',
          value: ''
        });
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedSelect"], {
          "data-test-subj": `managementChangeIndexSelection-${id}`,
          onChange: e => this.onIndexChanged(id, e),
          options: options
        });
      }
    }];
    const pagination = {
      pageSizeOptions: [5, 10, 25]
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiInMemoryTable"], {
      items: unmatchedReferences,
      columns: columns,
      pagination: pagination
    });
  }
  renderError() {
    const {
      error,
      status
    } = this.state;
    if (status !== 'error') {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCallOut"], {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.flyout.errorCalloutTitle",
        defaultMessage: "Sorry, there was an error"
      }),
      color: "danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      "data-test-subj": "importSavedObjectsErrorText"
    }, error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
      size: "s"
    }));
  }
  renderBody() {
    const {
      status,
      loadingMessage,
      importCount,
      failedImports = [],
      successfulImports = [],
      isLegacyFile,
      importMode
    } = this.state;
    const {
      dataSourceEnabled,
      useUpdatedUX
    } = this.props;
    if (status === 'loading') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
        justifyContent: "spaceAround"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
        grow: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLoadingSpinner"], {
        size: "xl"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
        size: "m"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
        size: "s"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, loadingMessage))));
    }
    if (isLegacyFile === false && status === 'success') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_import_summary__WEBPACK_IMPORTED_MODULE_9__["ImportSummary"], {
        failedImports: failedImports,
        successfulImports: successfulImports,
        useUpdatedUX: useUpdatedUX
      });
    }

    // Import summary for failed legacy import
    if (failedImports.length && !this.hasUnmatchedReferences) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCallOut"], {
        "data-test-subj": "importSavedObjectsFailedWarning",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "savedObjectsManagement.objectsTable.flyout.importFailedTitle",
          defaultMessage: "Import failed"
        }),
        color: "warning",
        iconType: "help"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.flyout.importFailedDescription",
        defaultMessage: "Failed to import {failedImportCount} of {totalImportCount} {useUpdatedUX, select, true {assets} other {objects}}. Import failed",
        values: {
          failedImportCount: failedImports.length,
          totalImportCount: importCount + failedImports.length,
          useUpdatedUX
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, failedImports.map(({
        error,
        obj
      }) => {
        var _message;
        if (error.type === 'missing_references') {
          return error.references.map(reference => {
            return _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.flyout.importFailedMissingReference', {
              defaultMessage: '{type} [id={id}] could not locate {refType} [id={refId}]',
              values: {
                id: obj.id,
                type: obj.type,
                refId: reference.id,
                refType: reference.type
              }
            });
          });
        } else if (error.type === 'unsupported_type') {
          return _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.flyout.importFailedUnsupportedType', {
            defaultMessage: '{type} [id={id}] unsupported type',
            values: {
              id: obj.id,
              type: obj.type
            }
          });
        }
        return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(error, 'body.message', (_message = error.message) !== null && _message !== void 0 ? _message : '');
      }).join(' ')));
    }

    // Import summary for completed legacy import
    if (status === 'success') {
      if (importCount === 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCallOut"], {
          "data-test-subj": "importSavedObjectsSuccessNoneImported",
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "savedObjectsManagement.objectsTable.flyout.importSuccessfulCallout.noObjectsImportedTitle",
            defaultMessage: "No {useUpdatedUX, select, true {assets} other {objects}} imported",
            values: {
              useUpdatedUX
            }
          }),
          color: "primary"
        });
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCallOut"], {
        "data-test-subj": "importSavedObjectsSuccess",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "savedObjectsManagement.objectsTable.flyout.importSuccessfulTitle",
          defaultMessage: "Import successful"
        }),
        color: "success",
        iconType: "check"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.flyout.importSuccessfulDescription",
        defaultMessage: "Successfully imported {importCount} {useUpdatedUX, select, true {assets} other {objects}}.",
        values: {
          importCount,
          useUpdatedUX
        }
      })));
    }
    if (this.hasUnmatchedReferences) {
      return this.renderUnmatchedReferences();
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiForm"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFormRow"], {
      fullWidth: true,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.flyout.selectFileToImportFormRowLabel",
        defaultMessage: "Select file"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFilePicker"], {
      accept: ".ndjson, .json",
      fullWidth: true,
      initialPromptText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.flyout.importPromptText",
        defaultMessage: "Import"
      }),
      onChange: this.setImportFile
    })), this.renderImportControl(importMode, isLegacyFile, dataSourceEnabled));
  }
  renderImportControl(importMode, isLegacyFile, dataSourceEnabled) {
    if (dataSourceEnabled) {
      return this.renderImportControlForDataSource(importMode, isLegacyFile);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFormRow"], {
      fullWidth: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_import_mode_control__WEBPACK_IMPORTED_MODULE_8__["ImportModeControl"], {
      initialValues: importMode,
      isLegacyFile: isLegacyFile,
      updateSelection: newValues => this.changeImportMode(newValues),
      optionLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.importModeControl.importOptionsTitle', {
        defaultMessage: 'Import options'
      })
    }));
  }
  renderImportControlForDataSource(importMode, isLegacyFile) {
    const DataSourceSelector = this.props.dataSourceManagement.ui.DataSourceSelector;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "savedObjectImportControlForDataSource"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFormFieldset"], {
      legend: {
        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiTitle"], {
          size: "xs"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Import options"))
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DataSourceSelector, {
      savedObjectsClient: this.props.savedObjects,
      notifications: this.props.notifications.toasts,
      onSelectedDataSource: this.onSelectedDataSourceChange,
      disabled: !this.props.dataSourceEnabled,
      fullWidth: true,
      isClearable: false,
      compressed: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFormRow"], {
      fullWidth: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_import_mode_control__WEBPACK_IMPORTED_MODULE_8__["ImportModeControl"], {
      initialValues: importMode,
      isLegacyFile: isLegacyFile,
      updateSelection: newValues => this.changeImportMode(newValues),
      optionLabel: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.importModeControl.conflictManagementTitle', {
        defaultMessage: 'Conflict management'
      }),
      useUpdatedUX: this.props.useUpdatedUX
    })));
  }
  renderFooter() {
    const {
      isLegacyFile,
      status,
      selectedDataSourceId
    } = this.state;
    const {
      done,
      close
    } = this.props;
    let confirmButton;
    let importButtonDisabled = false;
    // If a data source is enabled, the import button should be disabled when there's no selected data source
    if (this.props.dataSourceEnabled && selectedDataSourceId === undefined) {
      importButtonDisabled = true;
    }
    if (status === 'success') {
      confirmButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButton"], {
        onClick: done,
        size: "s",
        fill: true,
        "data-test-subj": "importSavedObjectsDoneBtn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.flyout.importSuccessful.confirmButtonLabel",
        defaultMessage: "Done"
      }));
    } else if (this.hasUnmatchedReferences) {
      confirmButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButton"], {
        onClick: isLegacyFile ? this.confirmLegacyImport : this.resolveImportErrors,
        size: "s",
        fill: true,
        isLoading: status === 'loading',
        "data-test-subj": "importSavedObjectsConfirmBtn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.flyout.importSuccessful.confirmAllChangesButtonLabel",
        defaultMessage: "Confirm all changes"
      }));
    } else {
      confirmButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButton"], {
        onClick: isLegacyFile ? this.legacyImport : this.import,
        size: "s",
        fill: true,
        isLoading: status === 'loading',
        disabled: importButtonDisabled,
        "data-test-subj": "importSavedObjectsImportBtn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.flyout.import.confirmButtonLabel",
        defaultMessage: "Import"
      }));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
      justifyContent: "spaceBetween"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonEmpty"], {
      onClick: close,
      size: "s",
      disabled: status === 'loading' || isLegacyFile === false && status === 'success',
      "data-test-subj": "importSavedObjectsCancelBtn"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "savedObjectsManagement.objectsTable.flyout.import.cancelButtonLabel",
      defaultMessage: "Cancel"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
      grow: false
    }, confirmButton));
  }
  renderSubheader() {
    if (this.state.status === 'loading' || this.state.status === 'success') {
      return null;
    }
    let legacyFileWarning;
    if (this.state.isLegacyFile) {
      legacyFileWarning = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCallOut"], {
        "data-test-subj": "importSavedObjectsLegacyWarning",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "savedObjectsManagement.objectsTable.flyout.legacyFileUsedTitle",
          defaultMessage: "Support for JSON files is going away"
        }),
        color: "warning",
        iconType: "help"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.flyout.legacyFileUsedBody",
        defaultMessage: "Use our updated export to generate NDJSON files, and you'll be all set."
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
        size: "m"
      }));
    }
    let indexPatternConflictsWarning;
    if (this.hasUnmatchedReferences) {
      indexPatternConflictsWarning = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCallOut"], {
        "data-test-subj": "importSavedObjectsConflictsWarning",
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "savedObjectsManagement.objectsTable.flyout.indexPatternConflictsTitle",
          defaultMessage: "Index Pattern Conflicts"
        }),
        color: "warning",
        iconType: "help"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.flyout.indexPatternConflictsDescription",
        defaultMessage: "The following {useUpdatedUX, select, true {assets} other {saved objects}} use index patterns that do not exist. Please select the index patterns you'd like re-associated with them. You can {indexPatternLink} if necessary.",
        values: {
          indexPatternLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLink"], {
            href: this.props.newIndexPatternUrl
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
            id: "savedObjectsManagement.objectsTable.flyout.indexPatternConflictsCalloutLinkText",
            defaultMessage: "create a new index pattern"
          })),
          useUpdatedUX: this.props.useUpdatedUX
        }
      })));
    }
    if (!legacyFileWarning && !indexPatternConflictsWarning) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, legacyFileWarning && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
      size: "s"
    }), legacyFileWarning, indexPatternConflictsWarning && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
      size: "s"
    }), indexPatternConflictsWarning);
  }
  render() {
    const {
      close,
      useUpdatedUX
    } = this.props;
    let confirmOverwriteModal;
    const {
      conflictingRecord
    } = this.state;
    if (conflictingRecord) {
      const {
        conflict
      } = conflictingRecord;
      const onFinish = (overwrite, destinationId) => conflictingRecord.done([overwrite, destinationId]);
      confirmOverwriteModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_overwrite_modal__WEBPACK_IMPORTED_MODULE_7__["OverwriteModal"], {
        conflict,
        onFinish
      });
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlyout"], {
      onClose: close,
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlyoutHeader"], {
      hasBorder: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "savedObjectsManagement.objectsTable.flyout.importSavedObjectTitle",
      defaultMessage: "Import {useUpdatedUX, select, true {assets} other {saved objects}}",
      values: {
        useUpdatedUX
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlyoutBody"], null, this.renderSubheader(), this.renderError(), this.renderBody()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlyoutFooter"], null, this.renderFooter()), confirmOverwriteModal);
  }
}

/***/ }),

/***/ "./public/management_section/objects_table/components/header.tsx":
/*!***********************************************************************!*\
  !*** ./public/management_section/objects_table/components/header.tsx ***!
  \***********************************************************************/
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
  onExportAll,
  onImport,
  onDuplicate,
  onRefresh,
  objectCount,
  showDuplicateAll = false,
  useUpdatedUX,
  navigationUI: {
    HeaderControl
  },
  applications,
  currentWorkspaceName,
  showImportButton
}) => {
  const title = useUpdatedUX ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "savedObjectsManagement.objectsTable.header.savedObjectsTitle",
    defaultMessage: "Saved Objects"
  }))));
  const description = useUpdatedUX ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderControl, {
    controls: [currentWorkspaceName ? {
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.workspace.objectsTable.table.description', {
        defaultMessage: 'Manage and share assets for {workspace}.',
        values: {
          workspace: currentWorkspaceName
        }
      })
    } : {
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.table.description', {
        defaultMessage: 'Manage and share your assets.'
      })
    }],
    setMountPoint: applications.setAppDescriptionControls
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTextColor"], {
    color: "subdued"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "savedObjectsManagement.objectsTable.howToDeleteSavedObjectsDescription",
    defaultMessage: "Manage and share your saved objects. To edit the underlying data of an object, go to its associated application."
  }))));
  const rightControls = useUpdatedUX ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderControl, {
    controls: [...(showDuplicateAll ? [{
      testId: 'duplicateObjects',
      run: onDuplicate,
      controlType: 'button',
      isDisabled: objectCount === 0,
      iconType: 'copy',
      label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.header.duplicateAllAssetsButtonLabel', {
        defaultMessage: 'Copy all assets to...'
      })
    }] : []), {
      testId: 'exportAllObjects',
      run: onExportAll,
      controlType: 'button',
      iconType: 'exportAction',
      label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.header.exportAssetsButtonLabel', {
        defaultMessage: 'Export all assets'
      })
    }, ...(showImportButton ? [{
      testId: 'importObjects',
      run: onImport,
      controlType: 'button',
      iconType: 'importAction',
      label: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.header.importButtonLabel', {
        defaultMessage: 'Import'
      })
    }] : [])],
    setMountPoint: applications.setAppRightControls
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    alignItems: "baseline",
    gutterSize: "m",
    responsive: false
  }, showDuplicateAll && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
    size: "s",
    "data-test-subj": "duplicateObjects",
    onClick: onDuplicate,
    disabled: objectCount === 0,
    iconType: "copy"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "savedObjectsManagement.objectsTable.header.duplicateAllButtonLabel",
    defaultMessage: "Copy all objects to..."
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
    size: "s",
    iconType: "exportAction",
    "data-test-subj": "exportAllObjects",
    onClick: onExportAll
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "savedObjectsManagement.objectsTable.header.exportButtonLabel",
    defaultMessage: "Export all objects"
  }))), showImportButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
    size: "s",
    iconType: "importAction",
    "data-test-subj": "importObjects",
    onClick: onImport
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "savedObjectsManagement.objectsTable.header.importButtonLabel",
    defaultMessage: "Import"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButtonEmpty"], {
    size: "s",
    iconType: "refresh",
    onClick: onRefresh
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "savedObjectsManagement.objectsTable.header.refreshButtonLabel",
    defaultMessage: "Refresh"
  })))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
    justifyContent: "spaceBetween",
    alignItems: "baseline"
  }, title, rightControls), !useUpdatedUX ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "l"
  }), description, !useUpdatedUX && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "m"
  }));
};

/***/ }),

/***/ "./public/management_section/objects_table/components/import_mode_control.tsx":
/*!************************************************************************************!*\
  !*** ./public/management_section/objects_table/components/import_mode_control.tsx ***!
  \************************************************************************************/
/*! exports provided: ImportModeControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportModeControl", function() { return ImportModeControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
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




const generateCreateNewCopiesDisabled = useUpdatedUX => ({
  id: 'createNewCopiesDisabled',
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.importModeControl.createNewCopies.disabledTitle', {
    defaultMessage: 'Check for existing {useUpdatedUX, select, true {assets} other {objects}}',
    values: {
      useUpdatedUX
    }
  }),
  tooltip: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.importModeControl.createNewCopies.disabledText', {
    defaultMessage: 'Check if {useUpdatedUX, select, true {assets} other {objects}} were previously copied or imported.',
    values: {
      useUpdatedUX
    }
  })
});
const generateCreateNewCopiesEnabled = useUpdatedUX => ({
  id: 'createNewCopiesEnabled',
  text: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.importModeControl.createNewCopies.enabledTitle', {
    defaultMessage: 'Create new {useUpdatedUX, select, true {assets} other {objects}} with unique IDs',
    values: {
      useUpdatedUX
    }
  }),
  tooltip: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.importModeControl.createNewCopies.enabledText', {
    defaultMessage: 'Use this option to create one or more copies of the {useUpdatedUX, select, true {asset} other {object}}.',
    values: {
      useUpdatedUX
    }
  })
});
const overwriteEnabled = {
  id: 'overwriteEnabled',
  label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.importModeControl.overwrite.enabledLabel', {
    defaultMessage: 'Automatically overwrite conflicts'
  })
};
const overwriteDisabled = {
  id: 'overwriteDisabled',
  label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.importModeControl.overwrite.disabledLabel', {
    defaultMessage: 'Request action on conflict'
  })
};
const createLabel = ({
  text,
  tooltip
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], null, text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
  grow: false
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIconTip"], {
  content: tooltip,
  position: "left",
  type: "iInCircle"
})));
const overwriteRadio = (disabled, overwrite, onChange) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedRadioGroup"], {
    options: [overwriteEnabled, overwriteDisabled],
    idSelected: overwrite ? overwriteEnabled.id : overwriteDisabled.id,
    onChange: id => onChange({
      overwrite: id === overwriteEnabled.id
    }),
    disabled: disabled,
    "data-test-subj": 'savedObjectsManagement-importModeControl-overwriteRadioGroup'
  });
};
const ImportModeControl = ({
  initialValues,
  isLegacyFile,
  updateSelection,
  optionLabel,
  useUpdatedUX
}) => {
  const [createNewCopies, setCreateNewCopies] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValues.createNewCopies);
  const [overwrite, setOverwrite] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValues.overwrite);
  const createNewCopiesEnabled = generateCreateNewCopiesEnabled(useUpdatedUX);
  const createNewCopiesDisabled = generateCreateNewCopiesDisabled(useUpdatedUX);
  const onChange = partial => {
    if (partial.createNewCopies !== undefined) {
      setCreateNewCopies(partial.createNewCopies);
    } else if (partial.overwrite !== undefined) {
      setOverwrite(partial.overwrite);
    }
    updateSelection({
      createNewCopies,
      overwrite,
      ...partial
    });
  };
  if (isLegacyFile) {
    return overwriteRadio(false, overwrite, onChange);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormFieldset"], {
    legend: {
      children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
        size: "xs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, optionLabel))
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCheckableCard"], {
    id: createNewCopiesEnabled.id,
    label: createLabel(createNewCopiesEnabled),
    checked: createNewCopies,
    onChange: () => onChange({
      createNewCopies: true
    }),
    "data-test-subj": 'savedObjectsManagement-importModeControl-createNewCopiesEnabled'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCheckableCard"], {
    id: createNewCopiesDisabled.id,
    label: createLabel(createNewCopiesDisabled),
    checked: !createNewCopies,
    onChange: () => onChange({
      createNewCopies: false
    }),
    "data-test-subj": 'savedObjectsManagement-importModeControl-createNewCopiesDisabled'
  }, overwriteRadio(createNewCopies, overwrite, onChange)));
};

/***/ }),

/***/ "./public/management_section/objects_table/components/import_summary.scss":
/*!********************************************************************************!*\
  !*** ./public/management_section/objects_table/components/import_summary.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


switch (window.__osdThemeTag__) {
  case 'v7dark':
    return __webpack_require__(/*! ./import_summary.scss?v7dark */ "./public/management_section/objects_table/components/import_summary.scss?v7dark");

  case 'v7light':
    return __webpack_require__(/*! ./import_summary.scss?v7light */ "./public/management_section/objects_table/components/import_summary.scss?v7light");

  case 'v8dark':
    return __webpack_require__(/*! ./import_summary.scss?v8dark */ "./public/management_section/objects_table/components/import_summary.scss?v8dark");

  case 'v8light':
    return __webpack_require__(/*! ./import_summary.scss?v8light */ "./public/management_section/objects_table/components/import_summary.scss?v8light");

  case 'v9dark':
    return __webpack_require__(/*! ./import_summary.scss?v9dark */ "./public/management_section/objects_table/components/import_summary.scss?v9dark");

  case 'v9light':
    return __webpack_require__(/*! ./import_summary.scss?v9light */ "./public/management_section/objects_table/components/import_summary.scss?v9light");
}

/***/ }),

/***/ "./public/management_section/objects_table/components/import_summary.scss?v7dark":
/*!***************************************************************************************!*\
  !*** ./public/management_section/objects_table/components/import_summary.scss?v7dark ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-0-2!../../../../../../../node_modules/comment-stripper??ref--6-oneOf-0-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-0-4!./import_summary.scss?v7dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/management_section/objects_table/components/import_summary.scss?v7dark");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/management_section/objects_table/components/import_summary.scss?v7light":
/*!****************************************************************************************!*\
  !*** ./public/management_section/objects_table/components/import_summary.scss?v7light ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-1-2!../../../../../../../node_modules/comment-stripper??ref--6-oneOf-1-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-1-4!./import_summary.scss?v7light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/management_section/objects_table/components/import_summary.scss?v7light");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/management_section/objects_table/components/import_summary.scss?v8dark":
/*!***************************************************************************************!*\
  !*** ./public/management_section/objects_table/components/import_summary.scss?v8dark ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-2-1!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-2-2!../../../../../../../node_modules/comment-stripper??ref--6-oneOf-2-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-2-4!./import_summary.scss?v8dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/management_section/objects_table/components/import_summary.scss?v8dark");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/management_section/objects_table/components/import_summary.scss?v8light":
/*!****************************************************************************************!*\
  !*** ./public/management_section/objects_table/components/import_summary.scss?v8light ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-3-2!../../../../../../../node_modules/comment-stripper??ref--6-oneOf-3-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-3-4!./import_summary.scss?v8light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/management_section/objects_table/components/import_summary.scss?v8light");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/management_section/objects_table/components/import_summary.scss?v9dark":
/*!***************************************************************************************!*\
  !*** ./public/management_section/objects_table/components/import_summary.scss?v9dark ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-4-1!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-4-2!../../../../../../../node_modules/comment-stripper??ref--6-oneOf-4-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-4-4!./import_summary.scss?v9dark */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/management_section/objects_table/components/import_summary.scss?v9dark");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/management_section/objects_table/components/import_summary.scss?v9light":
/*!****************************************************************************************!*\
  !*** ./public/management_section/objects_table/components/import_summary.scss?v9light ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-oneOf-5-2!../../../../../../../node_modules/comment-stripper??ref--6-oneOf-5-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./import_summary.scss?v9light */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../node_modules/comment-stripper/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./public/management_section/objects_table/components/import_summary.scss?v9light");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./public/management_section/objects_table/components/import_summary.tsx":
/*!*******************************************************************************!*\
  !*** ./public/management_section/objects_table/components/import_summary.tsx ***!
  \*******************************************************************************/
/*! exports provided: ImportSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportSummary", function() { return ImportSummary; });
/* harmony import */ var _import_summary_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import_summary.scss */ "./public/management_section/objects_table/components/import_summary.scss");
/* harmony import */ var _import_summary_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_summary_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib */ "./public/lib/index.ts");
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








const DEFAULT_ICON = 'apps';
const unsupportedTypeErrorMessage = _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.importSummary.unsupportedTypeError', {
  defaultMessage: 'Unsupported object type'
});
const getErrorMessage = ({
  error
}) => {
  if (error.type === 'unknown') {
    return error.message;
  } else if (error.type === 'unsupported_type') {
    return unsupportedTypeErrorMessage;
  }
};
const mapFailedImport = failure => {
  const {
    obj
  } = failure;
  const {
    type,
    id,
    meta
  } = obj;
  const title = meta.title || Object(_lib__WEBPACK_IMPORTED_MODULE_6__["getDefaultTitle"])(obj);
  const icon = meta.icon || DEFAULT_ICON;
  const errorMessage = getErrorMessage(failure);
  return {
    type,
    id,
    title,
    icon,
    outcome: 'error',
    errorMessage
  };
};
const mapImportSuccess = obj => {
  const {
    type,
    id,
    meta,
    overwrite
  } = obj;
  const title = meta.title || Object(_lib__WEBPACK_IMPORTED_MODULE_6__["getDefaultTitle"])(obj);
  const icon = meta.icon || DEFAULT_ICON;
  const outcome = overwrite ? 'overwritten' : 'created';
  return {
    type,
    id,
    title,
    icon,
    outcome
  };
};
const getCountIndicators = importItems => {
  if (!importItems.length) {
    return null;
  }
  const outcomeCounts = importItems.reduce((acc, {
    outcome
  }) => {
    var _acc$get;
    return acc.set(outcome, ((_acc$get = acc.get(outcome)) !== null && _acc$get !== void 0 ? _acc$get : 0) + 1);
  }, new Map());
  const createdCount = outcomeCounts.get('created');
  const overwrittenCount = outcomeCounts.get('overwritten');
  const errorCount = outcomeCounts.get('error');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], null, createdCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    className: "savedObjectsManagementImportSummary__createdCount"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "savedObjectsManagement.importSummary.createdCountHeader",
    defaultMessage: "{createdCount} new",
    values: {
      createdCount
    }
  })))), overwrittenCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    className: "savedObjectsManagementImportSummary__overwrittenCount"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "savedObjectsManagement.importSummary.overwrittenCountHeader",
    defaultMessage: "{overwrittenCount} overwritten",
    values: {
      overwrittenCount
    }
  })))), errorCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiTitle"], {
    size: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    className: "savedObjectsManagementImportSummary__errorCount"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "savedObjectsManagement.importSummary.errorCountHeader",
    defaultMessage: "{errorCount} error",
    values: {
      errorCount
    }
  })))));
};
const getStatusIndicator = ({
  outcome,
  errorMessage = 'Error'
}) => {
  switch (outcome) {
    case 'created':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiIconTip"], {
        type: 'checkInCircleFilled',
        color: 'success',
        content: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.importSummary.createdOutcomeLabel', {
          defaultMessage: 'Created'
        })
      });
    case 'overwritten':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiIconTip"], {
        type: 'check',
        content: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.importSummary.overwrittenOutcomeLabel', {
          defaultMessage: 'Overwritten'
        })
      });
    case 'error':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiIconTip"], {
        type: 'alert',
        color: 'danger',
        content: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.importSummary.errorOutcomeLabel', {
          defaultMessage: '{errorMessage}',
          values: {
            errorMessage
          }
        })
      });
  }
};
const ImportSummary = ({
  failedImports,
  successfulImports,
  useUpdatedUX
}) => {
  const importItems = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.sortBy([...failedImports.map(x => mapFailedImport(x)), ...successfulImports.map(x => mapImportSuccess(x))], ['type', 'title']);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiTitle"], {
    size: "s",
    "data-test-subj": importItems.length ? 'importSavedObjectsSuccess' : 'importSavedObjectsSuccessNoneImported'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, importItems.length === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "savedObjectsManagement.importSummary.headerLabelSingular",
    defaultMessage: "1 {useUpdatedUX, select, true {asset} other {object}} imported",
    values: {
      useUpdatedUX
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "savedObjectsManagement.importSummary.headerLabelPlural",
    defaultMessage: "{importCount} {useUpdatedUX, select, true {assets} other {objects}} imported",
    values: {
      importCount: importItems.length,
      useUpdatedUX
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
    size: "m"
  }), getCountIndicators(importItems), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiHorizontalRule"], null), importItems.map((item, index) => {
    const {
      type,
      title,
      icon
    } = item;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
      responsive: false,
      key: index,
      alignItems: "center",
      gutterSize: "s",
      className: "savedObjectsManagementImportSummary__row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiToolTip"], {
      position: "top",
      content: Object(_lib__WEBPACK_IMPORTED_MODULE_6__["getSavedObjectLabel"])(type)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiIcon"], {
      "aria-label": Object(_lib__WEBPACK_IMPORTED_MODULE_6__["getSavedObjectLabel"])(type),
      type: icon,
      size: "s"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
      className: "savedObjectsManagementImportSummary__title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "eui-textTruncate",
      title: title
    }, title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "eui-textRight"
    }, getStatusIndicator(item))));
  }));
};

/***/ }),

/***/ "./public/management_section/objects_table/components/index.ts":
/*!*********************************************************************!*\
  !*** ./public/management_section/objects_table/components/index.ts ***!
  \*********************************************************************/
/*! exports provided: Header, Table, Flyout, Relationships, SavedObjectsDuplicateModal, DuplicateResultFlyout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./public/management_section/objects_table/components/header.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_0__["Header"]; });

/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./public/management_section/objects_table/components/table.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _table__WEBPACK_IMPORTED_MODULE_1__["Table"]; });

/* harmony import */ var _flyout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flyout */ "./public/management_section/objects_table/components/flyout.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flyout", function() { return _flyout__WEBPACK_IMPORTED_MODULE_2__["Flyout"]; });

/* harmony import */ var _relationships__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./relationships */ "./public/management_section/objects_table/components/relationships.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Relationships", function() { return _relationships__WEBPACK_IMPORTED_MODULE_3__["Relationships"]; });

/* harmony import */ var _duplicate_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duplicate_modal */ "./public/management_section/objects_table/components/duplicate_modal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsDuplicateModal", function() { return _duplicate_modal__WEBPACK_IMPORTED_MODULE_4__["SavedObjectsDuplicateModal"]; });

/* harmony import */ var _duplicate_result_flyout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duplicate_result_flyout */ "./public/management_section/objects_table/components/duplicate_result_flyout.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DuplicateResultFlyout", function() { return _duplicate_result_flyout__WEBPACK_IMPORTED_MODULE_5__["DuplicateResultFlyout"]; });

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

/***/ "./public/management_section/objects_table/components/overwrite_modal.tsx":
/*!********************************************************************************!*\
  !*** ./public/management_section/objects_table/components/overwrite_modal.tsx ***!
  \********************************************************************************/
/*! exports provided: OverwriteModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverwriteModal", function() { return OverwriteModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib */ "./public/lib/index.ts");
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






const OverwriteModal = ({
  conflict,
  onFinish
}) => {
  const {
    obj,
    error
  } = conflict;
  let initialDestinationId;
  let selectControl = null;
  if (error.type === 'conflict') {
    initialDestinationId = error.destinationId;
  } else {
    // ambiguous conflict must have at least two destinations; default to the first one
    initialDestinationId = error.destinations[0].id;
  }
  const [destinationId, setDestinationId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialDestinationId);
  if (error.type === 'ambiguous_conflict') {
    const selectProps = {
      options: error.destinations.map(destination => {
        var _destination$title;
        const header = (_destination$title = destination.title) !== null && _destination$title !== void 0 ? _destination$title : `${type} [id=${destination.id}]`;
        const lastUpdated = destination.updatedAt ? moment__WEBPACK_IMPORTED_MODULE_3___default()(destination.updatedAt).fromNow() : 'never';
        const idText = `ID: ${destination.id}`;
        const lastUpdatedText = `Last updated: ${lastUpdated}`;
        return {
          value: destination.id,
          inputDisplay: destination.id,
          dropdownDisplay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
            size: "s",
            color: "subdued"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            className: "euiTextColor--subdued"
          }, idText, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), lastUpdatedText)))
        };
      }),
      onChange: value => {
        setDestinationId(value);
      }
    };
    selectControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSuperSelect"], {
      options: selectProps.options,
      valueOfSelected: destinationId,
      onChange: selectProps.onChange,
      prepend: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.overwriteModal.selectControlLabel', {
        defaultMessage: 'Object ID'
      }),
      hasDividers: true,
      fullWidth: true,
      compressed: true
    });
  }
  const {
    type,
    meta
  } = obj;
  const title = meta.title || Object(_lib__WEBPACK_IMPORTED_MODULE_4__["getDefaultTitle"])(obj);
  const bodyText = error.type === 'conflict' ? _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.overwriteModal.body.conflict', {
    defaultMessage: '"{title}" conflicts with an existing object. Overwrite it?',
    values: {
      title
    }
  }) : _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.overwriteModal.body.ambiguousConflict', {
    defaultMessage: '"{title}" conflicts with multiple existing objects. Overwrite one?',
    values: {
      title
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiConfirmModal"], {
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.overwriteModal.title', {
      defaultMessage: 'Overwrite {type}?',
      values: {
        type
      }
    }),
    cancelButtonText: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.overwriteModal.cancelButtonText', {
      defaultMessage: 'Skip'
    }),
    confirmButtonText: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.overwriteModal.overwriteButtonText', {
      defaultMessage: 'Overwrite'
    }),
    buttonColor: "danger",
    onCancel: () => onFinish(false),
    onConfirm: () => onFinish(true, destinationId),
    defaultFocusedButton: _elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EUI_MODAL_CONFIRM_BUTTON"],
    maxWidth: "500px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, bodyText)), selectControl);
};

/***/ }),

/***/ "./public/management_section/objects_table/components/relationships.tsx":
/*!******************************************************************************!*\
  !*** ./public/management_section/objects_table/components/relationships.tsx ***!
  \******************************************************************************/
/*! exports provided: Relationships */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Relationships", function() { return Relationships; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib */ "./public/lib/index.ts");
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






class Relationships extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      relationships: [],
      isLoading: false,
      error: undefined
    };
  }
  UNSAFE_componentWillMount() {
    this.getRelationshipData();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.savedObject.id !== this.props.savedObject.id) {
      this.getRelationshipData();
    }
  }
  async getRelationshipData() {
    const {
      savedObject,
      getRelationships
    } = this.props;
    this.setState({
      isLoading: true
    });
    try {
      const relationships = await getRelationships(savedObject.type, savedObject.id);
      this.setState({
        relationships,
        isLoading: false,
        error: undefined
      });
    } catch (err) {
      this.setState({
        error: err.message,
        isLoading: false
      });
    }
  }
  renderError() {
    const {
      error
    } = this.state;
    if (!error) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCallOut"], {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.relationships.renderErrorMessage",
        defaultMessage: "Error"
      }),
      color: "danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, error));
  }
  renderRelationships() {
    const {
      goInspectObject,
      savedObject,
      basePath
    } = this.props;
    const {
      relationships,
      isLoading,
      error
    } = this.state;
    if (error) {
      return this.renderError();
    }
    if (isLoading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLoadingSpinner"], {
        size: "xl"
      });
    }
    const columns = [{
      field: 'type',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.relationships.columnTypeName', {
        defaultMessage: 'Type'
      }),
      width: '50px',
      align: 'center',
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.relationships.columnTypeDescription', {
        defaultMessage: 'Type of the saved object'
      }),
      sortable: false,
      render: (type, object) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
          position: "top",
          content: Object(_lib__WEBPACK_IMPORTED_MODULE_4__["getSavedObjectLabel"])(type)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
          "aria-label": Object(_lib__WEBPACK_IMPORTED_MODULE_4__["getSavedObjectLabel"])(type),
          type: object.meta.icon || 'apps',
          size: "s",
          "data-test-subj": "relationshipsObjectType"
        }));
      }
    }, {
      field: 'relationship',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.relationships.columnRelationshipName', {
        defaultMessage: 'Direct relationship'
      }),
      dataType: 'string',
      sortable: false,
      width: '125px',
      'data-test-subj': 'directRelationship',
      render: relationship => {
        if (relationship === 'parent') {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
            size: "s"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "savedObjectsManagement.objectsTable.relationships.columnRelationship.parentAsValue",
            defaultMessage: "Parent"
          }));
        }
        if (relationship === 'child') {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
            size: "s"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
            id: "savedObjectsManagement.objectsTable.relationships.columnRelationship.childAsValue",
            defaultMessage: "Child"
          }));
        }
      }
    }, {
      field: 'meta.title',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.relationships.columnTitleName', {
        defaultMessage: 'Title'
      }),
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.relationships.columnTitleDescription', {
        defaultMessage: 'Title of the saved object'
      }),
      dataType: 'string',
      sortable: false,
      render: (title, object) => {
        const {
          path = ''
        } = object.meta.inAppUrl || {};
        const canGoInApp = this.props.canGoInApp(object);
        let finalPath = path;
        if (this.props.useUpdatedUX && finalPath) {
          finalPath = finalPath.replace(/^\/app\/management\/opensearch-dashboards/, '/app');
        }
        if (!canGoInApp) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
            size: "s",
            "data-test-subj": "relationshipsTitle"
          }, title || Object(_lib__WEBPACK_IMPORTED_MODULE_4__["getDefaultTitle"])(object));
        }
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLink"], {
          href: basePath.prepend(finalPath),
          "data-test-subj": "relationshipsTitle"
        }, title || Object(_lib__WEBPACK_IMPORTED_MODULE_4__["getDefaultTitle"])(object));
      }
    }, {
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.relationships.columnActionsName', {
        defaultMessage: 'Actions'
      }),
      actions: [{
        name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.relationships.columnActions.inspectActionName', {
          defaultMessage: 'Inspect'
        }),
        description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.relationships.columnActions.inspectActionDescription', {
          defaultMessage: 'Inspect this saved object'
        }),
        type: 'icon',
        icon: 'inspect',
        'data-test-subj': 'relationshipsTableAction-inspect',
        onClick: object => goInspectObject(object),
        available: object => !!object.meta.editUrl
      }]
    }];
    const filterTypesMap = new Map(relationships.map(relationship => [relationship.type, {
      value: relationship.type,
      name: relationship.type,
      view: relationship.type
    }]));
    const search = {
      filters: [{
        type: 'field_value_selection',
        field: 'relationship',
        name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.relationships.search.filters.relationship.name', {
          defaultMessage: 'Direct relationship'
        }),
        multiSelect: 'or',
        options: [{
          value: 'parent',
          name: 'parent',
          view: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.relationships.search.filters.relationship.parentAsValue.view', {
            defaultMessage: 'Parent'
          })
        }, {
          value: 'child',
          name: 'child',
          view: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.relationships.search.filters.relationship.childAsValue.view', {
            defaultMessage: 'Child'
          })
        }]
      }, {
        type: 'field_value_selection',
        field: 'type',
        name: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.relationships.search.filters.type.name', {
          defaultMessage: 'Type'
        }),
        multiSelect: 'or',
        options: [...filterTypesMap.values()]
      }]
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCallOut"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('savedObjectsManagement.objectsTable.relationships.relationshipsTitle', {
      defaultMessage: 'Here are the saved objects related to {title}. ' + 'Deleting this {type} affects its parent objects, but not its children.',
      values: {
        type: savedObject.type,
        title: savedObject.meta.title || Object(_lib__WEBPACK_IMPORTED_MODULE_4__["getDefaultTitle"])(savedObject)
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiInMemoryTable"], {
      items: relationships,
      columns: columns,
      pagination: true,
      search: search,
      rowProps: () => ({
        'data-test-subj': `relationshipsTableRow`
      })
    }));
  }
  render() {
    const {
      close,
      savedObject
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyout"], {
      onClose: close
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyoutHeader"], {
      hasBorder: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiText"], {
      size: "s",
      className: "eui-textBreakWord"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, savedObject.meta.title || Object(_lib__WEBPACK_IMPORTED_MODULE_4__["getDefaultTitle"])(savedObject)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlyoutBody"], null, this.renderRelationships()));
  }
}

/***/ }),

/***/ "./public/management_section/objects_table/components/table.tsx":
/*!**********************************************************************!*\
  !*** ./public/management_section/objects_table/components/table.tsx ***!
  \**********************************************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib */ "./public/lib/index.ts");
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/public/utils */ "entry/core/public/utils");
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_core_public_utils__WEBPACK_IMPORTED_MODULE_6__);
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








class Table extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    _defineProperty(this, "state", {
      isSearchTextValid: true,
      parseErrorMessage: null,
      isExportPopoverOpen: false,
      isIncludeReferencesDeepChecked: true,
      activeAction: undefined,
      isColumnDataLoaded: false
    });
    _defineProperty(this, "loadColumnData", async () => {
      await Promise.all(this.props.columnRegistry.getAll().map(column => column.loadData()));
      this.setState({
        isColumnDataLoaded: true
      });
    });
    _defineProperty(this, "onChange", ({
      query,
      error
    }) => {
      if (error) {
        this.setState({
          isSearchTextValid: false,
          parseErrorMessage: error.message
        });
        return;
      }
      this.setState({
        isSearchTextValid: true,
        parseErrorMessage: null
      });
      this.props.onQueryChange({
        query
      });
    });
    _defineProperty(this, "closeExportPopover", () => {
      this.setState({
        isExportPopoverOpen: false
      });
    });
    _defineProperty(this, "toggleExportPopoverVisibility", () => {
      this.setState(state => ({
        isExportPopoverOpen: !state.isExportPopoverOpen
      }));
    });
    _defineProperty(this, "toggleIsIncludeReferencesDeepChecked", () => {
      this.setState(state => ({
        isIncludeReferencesDeepChecked: !state.isIncludeReferencesDeepChecked
      }));
    });
    _defineProperty(this, "onExportClick", () => {
      const {
        onExport
      } = this.props;
      const {
        isIncludeReferencesDeepChecked
      } = this.state;
      onExport(isIncludeReferencesDeepChecked);
      this.setState({
        isExportPopoverOpen: false
      });
    });
  }
  componentDidMount() {
    this.loadColumnData();
  }
  render() {
    var _this$state$activeAct, _this$state$activeAct2;
    const {
      pageIndex,
      pageSize,
      itemId,
      items,
      totalItemCount,
      isSearching,
      columnRegistry,
      filters,
      selectionConfig: selection,
      onDelete,
      onDuplicate,
      onDuplicateSingle,
      onActionRefresh,
      selectedSavedObjects,
      onTableChange,
      goInspectObject,
      onShowRelationships,
      basePath,
      actionRegistry,
      dateFormat,
      availableWorkspaces,
      currentWorkspaceId,
      showDuplicate,
      useUpdatedUX,
      onRefresh
    } = this.props;
    const visibleWsIds = (availableWorkspaces === null || availableWorkspaces === void 0 ? void 0 : availableWorkspaces.map(ws => ws.id)) || [];
    const pagination = {
      pageIndex,
      pageSize,
      totalItemCount,
      pageSizeOptions: [5, 10, 20, 50]
    };
    const columns = [{
      field: 'type',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.table.columnTypeName', {
        defaultMessage: 'Type'
      }),
      width: '50px',
      align: 'center',
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.table.columnTypeDescription', {
        defaultMessage: 'Type of the saved object'
      }),
      sortable: false,
      'data-test-subj': 'savedObjectsTableRowType',
      render: (type, object) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiToolTip"], {
          position: "top",
          content: Object(_lib__WEBPACK_IMPORTED_MODULE_5__["getSavedObjectLabel"])(type)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiIcon"], {
          "aria-label": Object(_lib__WEBPACK_IMPORTED_MODULE_5__["getSavedObjectLabel"])(type),
          type: object.meta.icon || 'apps',
          size: "s",
          "data-test-subj": "objectType"
        }));
      }
    }, {
      field: 'meta.title',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.table.columnTitleName', {
        defaultMessage: 'Title'
      }),
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.table.columnTitleDescription', {
        defaultMessage: 'Title of the saved object'
      }),
      dataType: 'string',
      sortable: false,
      'data-test-subj': 'savedObjectsTableRowTitle',
      render: (title, object) => {
        var _object$workspaces;
        const {
          path = ''
        } = object.meta.inAppUrl || {};
        const canGoInApp = this.props.canGoInApp(object);
        if (!canGoInApp) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
            size: "s"
          }, title || Object(_lib__WEBPACK_IMPORTED_MODULE_5__["getDefaultTitle"])(object));
        }
        let finalPath = path;
        if (this.props.useUpdatedUX && finalPath) {
          finalPath = finalPath.replace(/^\/app\/management\/opensearch-dashboards/, '/app');
        }
        let inAppUrl = basePath.prepend(finalPath);
        if ((_object$workspaces = object.workspaces) !== null && _object$workspaces !== void 0 && _object$workspaces.length) {
          if (currentWorkspaceId) {
            inAppUrl = Object(_core_public_utils__WEBPACK_IMPORTED_MODULE_6__["formatUrlWithWorkspaceId"])(finalPath, currentWorkspaceId, basePath);
          } else {
            // find first workspace user have permission
            const workspaceId = object.workspaces.find(wsId => visibleWsIds.includes(wsId));
            if (workspaceId) {
              inAppUrl = Object(_core_public_utils__WEBPACK_IMPORTED_MODULE_6__["formatUrlWithWorkspaceId"])(finalPath, workspaceId, basePath);
            }
          }
        }
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLink"], {
          href: inAppUrl
        }, title || Object(_lib__WEBPACK_IMPORTED_MODULE_5__["getDefaultTitle"])(object));
      }
    }, {
      field: `updated_at`,
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.table.columnUpdatedAtName', {
        defaultMessage: 'Last updated'
      }),
      dataType: 'date',
      sortable: true,
      description: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.table.columnUpdatedAtDescription', {
        defaultMessage: 'Last update of the saved object'
      }),
      'data-test-subj': 'updated-at',
      render: updatedAt => updatedAt && moment__WEBPACK_IMPORTED_MODULE_1___default()(updatedAt).format(dateFormat)
    }, ...columnRegistry.getAll().map(column => {
      return {
        ...column.euiColumn,
        sortable: false,
        'data-test-subj': `savedObjectsTableColumn-${column.id}`
      };
    }), {
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.table.columnActionsName', {
        defaultMessage: 'Actions'
      }),
      width: '80px',
      actions: [{
        name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.table.columnActions.inspectActionName', {
          defaultMessage: 'Inspect'
        }),
        description: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.table.columnActions.inspectActionDescription', {
          defaultMessage: 'Inspect this saved object'
        }),
        type: 'icon',
        icon: 'inspect',
        onClick: object => goInspectObject(object),
        available: object => !!object.meta.editUrl,
        'data-test-subj': 'savedObjectsTableAction-inspect'
      }, {
        name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.table.columnActions.viewRelationshipsActionName', {
          defaultMessage: 'Relationships'
        }),
        description: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.table.columnActions.viewRelationshipsActionDescription', {
          defaultMessage: 'View the relationships this saved object has to other saved objects'
        }),
        type: 'icon',
        icon: 'kqlSelector',
        onClick: object => onShowRelationships(object),
        'data-test-subj': 'savedObjectsTableAction-relationships'
      }, ...(showDuplicate ? [{
        name: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.table.columnActions.duplicateActionName', {
          defaultMessage: 'Copy to...'
        }),
        description: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.table.columnActions.duplicateActionDescription', {
          defaultMessage: 'Copy this saved object'
        }),
        type: 'icon',
        icon: 'copy',
        onClick: object => onDuplicateSingle(object),
        available: object => object.type !== 'config',
        'data-test-subj': 'savedObjectsTableAction-duplicate'
      }] : []), ...actionRegistry.getAll().map(action => {
        return {
          ...action.euiAction,
          'data-test-subj': `savedObjectsTableAction-${action.id}`,
          onClick: object => {
            this.setState({
              activeAction: action
            });
            action.registerOnFinishCallback(() => {
              this.setState({
                activeAction: undefined
              });
              const {
                refreshOnFinish = () => false
              } = action;
              if (refreshOnFinish()) {
                onActionRefresh(object);
              }
            });
            if (action.euiAction.onClick) {
              action.euiAction.onClick(object);
            }
          }
        };
      })]
    }];
    let queryParseError;
    if (!this.state.isSearchTextValid) {
      const parseErrorMsg = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.searchBar.unableToParseQueryErrorMessage', {
        defaultMessage: 'Unable to parse query'
      });
      queryParseError = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFormErrorText"], null, `${parseErrorMsg}. ${this.state.parseErrorMessage}`);
    }
    const button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSmallButton"], {
      iconType: "arrowDown",
      iconSide: "right",
      onClick: this.toggleExportPopoverVisibility,
      isDisabled: selectedSavedObjects.length === 0
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "savedObjectsManagement.objectsTable.table.exportPopoverButtonLabel",
      defaultMessage: "Export"
    }));
    const activeActionContents = (_this$state$activeAct = (_this$state$activeAct2 = this.state.activeAction) === null || _this$state$activeAct2 === void 0 ? void 0 : _this$state$activeAct2.render()) !== null && _this$state$activeAct !== void 0 ? _this$state$activeAct : null;
    const duplicateButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSmallButton"], {
      key: "duplicateSO",
      iconType: "copy",
      onClick: onDuplicate,
      isDisabled: selectedSavedObjects.length === 0,
      "data-test-subj": "savedObjectsManagementDuplicate"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "savedObjectsManagement.objectsTable.table.duplicateSOButtonLabel",
      defaultMessage: "Copy to..."
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, activeActionContents, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSearchBar"], {
      box: {
        'data-test-subj': 'savedObjectSearchBar'
      },
      compressed: true,
      filters: filters,
      onChange: this.onChange,
      toolsRight: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, useUpdatedUX && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiToolTip"], {
        content: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.table.refreshButtonTooltip', {
          defaultMessage: 'Refresh'
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButtonIcon"], {
        iconType: "refresh",
        size: "s",
        display: "base",
        type: "base",
        onClick: onRefresh
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, showDuplicate && duplicateButton), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSmallButton"], {
        key: "deleteSO",
        iconType: "trash",
        color: "danger",
        onClick: onDelete,
        isDisabled: selectedSavedObjects.length === 0 || !this.props.canDelete,
        title: this.props.canDelete ? undefined : _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.objectsTable.table.deleteButtonTitle', {
          defaultMessage: 'Unable to delete saved objects'
        }),
        "data-test-subj": "savedObjectsManagementDelete"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.table.deleteButtonLabel",
        defaultMessage: "Delete"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPopover"], {
        key: "exportSOOptions",
        button: button,
        isOpen: this.state.isExportPopoverOpen,
        closePopover: this.closeExportPopover,
        panelPaddingSize: "s"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFormRow"], {
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "savedObjectsManagement.objectsTable.exportObjectsConfirmModal.exportOptionsLabel",
          defaultMessage: "Options"
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedSwitch"], {
        name: "includeReferencesDeep",
        label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
          id: "savedObjectsManagement.objectsTable.exportObjectsConfirmModal.includeReferencesDeepLabel",
          defaultMessage: "Include related {useUpdatedUX, select, true {assets} other {objects}}",
          values: {
            useUpdatedUX: this.props.useUpdatedUX
          }
        }),
        checked: this.state.isIncludeReferencesDeepChecked,
        onChange: this.toggleIsIncludeReferencesDeepChecked
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCompressedFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSmallButton"], {
        key: "exportSO",
        iconType: "exportAction",
        onClick: this.onExportClick,
        fill: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.table.exportButtonLabel",
        defaultMessage: "Export"
      }))))]
    }), queryParseError, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
      size: useUpdatedUX ? 'm' : 's'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "data-test-subj": "savedObjectsTable"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiBasicTable"], {
      loading: isSearching,
      itemId: itemId,
      items: items,
      columns: columns,
      pagination: pagination,
      selection: selection,
      onChange: onTableChange,
      rowProps: item => ({
        'data-test-subj': `savedObjectsTableRow row-${item.id}`
      })
    })));
  }
}

/***/ }),

/***/ "./public/management_section/objects_table/components/utils.ts":
/*!*********************************************************************!*\
  !*** ./public/management_section/objects_table/components/utils.ts ***!
  \*********************************************************************/
/*! exports provided: workspaceToOption, getTargetWorkspacesOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workspaceToOption", function() { return workspaceToOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTargetWorkspacesOptions", function() { return getTargetWorkspacesOptions; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// Convert workspace to option which can be displayed in the drop-down box.
function workspaceToOption(workspace, currentWorkspaceId) {
  // add (current) after current workspace name
  let workspaceName = workspace.name;
  if (workspace.id === currentWorkspaceId) {
    workspaceName += ' (current)';
  }
  return {
    label: workspaceName,
    key: workspace.id,
    value: workspace
  };
}
function getTargetWorkspacesOptions(workspaces, currentWorkspace) {
  const currentWorkspaceId = currentWorkspace === null || currentWorkspace === void 0 ? void 0 : currentWorkspace.id;
  const workspaceList = workspaces.workspaceList$.value;
  const targetWorkspaces = workspaceList.filter(workspace => workspace.id !== currentWorkspaceId && !workspace.readonly);
  // current workspace is the first option
  if (currentWorkspace && !currentWorkspace.readonly) targetWorkspaces.unshift(currentWorkspace);
  return targetWorkspaces.map(workspace => workspaceToOption(workspace, currentWorkspaceId));
}

/***/ }),

/***/ "./public/management_section/objects_table/index.ts":
/*!**********************************************************!*\
  !*** ./public/management_section/objects_table/index.ts ***!
  \**********************************************************/
/*! exports provided: SavedObjectsTable, SavedObjectsDuplicateModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saved_objects_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saved_objects_table */ "./public/management_section/objects_table/saved_objects_table.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsTable", function() { return _saved_objects_table__WEBPACK_IMPORTED_MODULE_0__["SavedObjectsTable"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./public/management_section/objects_table/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsDuplicateModal", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["SavedObjectsDuplicateModal"]; });

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

/***/ "./public/management_section/objects_table/saved_objects_table.tsx":
/*!*************************************************************************!*\
  !*** ./public/management_section/objects_table/saved_objects_table.tsx ***!
  \*************************************************************************/
/*! exports provided: SavedObjectsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsTable", function() { return SavedObjectsTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_filesaver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/filesaver */ "../../../node_modules/@elastic/filesaver/file-saver.js");
/* harmony import */ var _elastic_filesaver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_filesaver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/public/utils */ "entry/core/public/utils");
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_core_public_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib */ "./public/lib/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components */ "./public/management_section/objects_table/components/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils */ "./public/utils.ts");
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



// @ts-expect-error









class SavedObjectsTable extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    _defineProperty(this, "_isMounted", false);
    _defineProperty(this, "currentWorkspaceSubscription", void 0);
    _defineProperty(this, "workspacesSubscription", void 0);
    _defineProperty(this, "fetchCounts", async () => {
      var _namespaceRegistry$ge, _this$state$available, _this$state$available2;
      const {
        allowedTypes,
        namespaceRegistry
      } = this.props;
      const {
        queryText,
        visibleTypes,
        visibleNamespaces,
        visibleWorkspaces
      } = Object(_lib__WEBPACK_IMPORTED_MODULE_8__["parseQuery"])(this.state.activeQuery);
      const filteredTypes = Object(_lib__WEBPACK_IMPORTED_MODULE_8__["filterQuery"])(allowedTypes, visibleTypes);
      const availableNamespaces = ((_namespaceRegistry$ge = namespaceRegistry.getAll()) === null || _namespaceRegistry$ge === void 0 ? void 0 : _namespaceRegistry$ge.map(ns => ns.id)) || [];
      const filteredCountOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["formatWorkspaceIdParams"])({
        typesToInclude: filteredTypes,
        searchString: queryText,
        workspaces: this.workspaceIdQuery,
        availableWorkspaces: (_this$state$available = this.state.availableWorkspaces) === null || _this$state$available === void 0 ? void 0 : _this$state$available.map(ws => ws.id)
      });
      if (availableNamespaces.length) {
        const filteredNamespaces = Object(_lib__WEBPACK_IMPORTED_MODULE_8__["filterQuery"])(availableNamespaces, visibleNamespaces);
        filteredCountOptions.namespacesToInclude = filteredNamespaces;
      }
      if (visibleWorkspaces !== null && visibleWorkspaces !== void 0 && visibleWorkspaces.length) {
        filteredCountOptions.workspaces = this.workspaceNamesToIds(visibleWorkspaces);
      }

      // These are the saved objects visible in the table.
      const filteredSavedObjectCounts = await Object(_lib__WEBPACK_IMPORTED_MODULE_8__["getSavedObjectCounts"])(this.props.http, filteredCountOptions);
      const exportAllOptions = [];
      const exportAllSelectedOptions = {};
      const filteredTypeCounts = filteredSavedObjectCounts.type || {};
      Object.keys(filteredTypeCounts).forEach(id => {
        // Add this type as a bulk-export option.
        exportAllOptions.push({
          id,
          label: `${id} (${filteredTypeCounts[id] || 0})`
        });

        // Select it by default.
        exportAllSelectedOptions[id] = true;
      });
      const countOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["formatWorkspaceIdParams"])({
        typesToInclude: allowedTypes,
        searchString: queryText,
        workspaces: this.workspaceIdQuery,
        availableWorkspaces: (_this$state$available2 = this.state.availableWorkspaces) === null || _this$state$available2 === void 0 ? void 0 : _this$state$available2.map(ws => ws.id)
      });
      if (availableNamespaces.length) {
        countOptions.namespacesToInclude = availableNamespaces;
      }

      // Fetch all the saved objects that exist so we can accurately populate the counts within
      // the table filter dropdown.
      const savedObjectCounts = await Object(_lib__WEBPACK_IMPORTED_MODULE_8__["getSavedObjectCounts"])(this.props.http, countOptions);
      this.setState(state => ({
        ...state,
        savedObjectCounts,
        exportAllOptions,
        exportAllSelectedOptions
      }));
    });
    _defineProperty(this, "fetchSavedObjects", () => {
      this.setState({
        isSearching: true
      }, this.debouncedFetchObjects);
    });
    _defineProperty(this, "subscribeWorkspace", () => {
      const workspace = this.props.workspaces;
      this.currentWorkspaceSubscription = workspace.currentWorkspace$.subscribe(newValue => this.setState({
        currentWorkspace: newValue
      }));
      this.workspacesSubscription = workspace.workspaceList$.subscribe(workspaceList => {
        this.setState({
          availableWorkspaces: workspaceList
        });
      });
    });
    _defineProperty(this, "unSubscribeWorkspace", () => {
      var _this$currentWorkspac, _this$workspacesSubsc;
      (_this$currentWorkspac = this.currentWorkspaceSubscription) === null || _this$currentWorkspac === void 0 || _this$currentWorkspac.unsubscribe();
      (_this$workspacesSubsc = this.workspacesSubscription) === null || _this$workspacesSubsc === void 0 || _this$workspacesSubsc.unsubscribe();
    });
    _defineProperty(this, "fetchSavedObject", (type, id) => {
      this.setState({
        isSearching: true
      }, () => this.debouncedFetchObject(type, id));
    });
    _defineProperty(this, "debouncedFetchObjects", Object(lodash__WEBPACK_IMPORTED_MODULE_1__["debounce"])(async () => {
      const {
        activeQuery: query
      } = this.state;
      const {
        notifications,
        http,
        useUpdatedUX
      } = this.props;
      try {
        const resp = await Object(_lib__WEBPACK_IMPORTED_MODULE_8__["findObjects"])(http, this.findOptions);
        if (!this._isMounted) {
          return;
        }
        this.setState(({
          activeQuery
        }) => {
          // ignore results for old requests
          if (activeQuery.text !== query.text) {
            return null;
          }
          return {
            savedObjects: resp.savedObjects,
            filteredItemCount: resp.total,
            isSearching: false
          };
        });
      } catch (error) {
        if (this._isMounted) {
          this.setState({
            isSearching: false
          });
        }
        notifications.toasts.addDanger({
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.unableFindSavedObjectsNotificationMessage', {
            defaultMessage: 'Unable find {useUpdatedUX, select, true {assets} other {saved objects}}',
            values: {
              useUpdatedUX
            }
          }),
          text: `${error}`
        });
      }
    }, 300));
    _defineProperty(this, "debouncedFetchObject", Object(lodash__WEBPACK_IMPORTED_MODULE_1__["debounce"])(async (type, id) => {
      const {
        notifications,
        http,
        useUpdatedUX
      } = this.props;
      try {
        const resp = await Object(_lib__WEBPACK_IMPORTED_MODULE_8__["findObject"])(http, type, id);
        if (!this._isMounted) {
          return;
        }
        this.setState(({
          savedObjects,
          filteredItemCount
        }) => {
          const refreshedSavedObjects = savedObjects.map(object => object.type === type && object.id === id ? resp : object);
          return {
            savedObjects: refreshedSavedObjects,
            filteredItemCount,
            isSearching: false
          };
        });
      } catch (error) {
        if (this._isMounted) {
          this.setState({
            isSearching: false
          });
        }
        notifications.toasts.addDanger({
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.unableFindSavedObjectNotificationMessage', {
            defaultMessage: 'Unable to find {useUpdatedUX, select, true {asset} other {saved object}}',
            values: {
              useUpdatedUX
            }
          }),
          text: `${error}`
        });
      }
    }, 300));
    _defineProperty(this, "refreshObjects", async () => {
      await Promise.all([this.fetchSavedObjects(), this.fetchCounts()]);
    });
    _defineProperty(this, "refreshObject", async ({
      type,
      id
    }) => {
      await this.fetchSavedObject(type, id);
    });
    _defineProperty(this, "onSelectionChanged", selection => {
      this.setState({
        selectedSavedObjects: selection
      });
    });
    _defineProperty(this, "onQueryChange", ({
      query
    }) => {
      // TODO: Use isSameQuery to compare new query with state.activeQuery to avoid re-fetching the
      // same data we already have.
      this.setState({
        activeQuery: query,
        page: 0,
        // Reset this on each query change
        selectedSavedObjects: []
      }, () => {
        this.fetchSavedObjects();
        this.fetchCounts();
      });
    });
    _defineProperty(this, "onTableChange", async table => {
      const {
        index: page,
        size: perPage
      } = table.page || {};
      this.setState({
        page,
        perPage,
        selectedSavedObjects: []
      }, this.fetchSavedObjects);
    });
    _defineProperty(this, "onShowRelationships", object => {
      this.setState({
        isShowingRelationships: true,
        relationshipObject: object
      });
    });
    _defineProperty(this, "onHideRelationships", () => {
      this.setState({
        isShowingRelationships: false,
        relationshipObject: undefined
      });
    });
    _defineProperty(this, "onExport", async includeReferencesDeep => {
      const {
        selectedSavedObjects
      } = this.state;
      const {
        notifications,
        http
      } = this.props;
      const objectsToExport = selectedSavedObjects.map(obj => ({
        id: obj.id,
        type: obj.type
      }));
      let blob;
      try {
        blob = await Object(_lib__WEBPACK_IMPORTED_MODULE_8__["fetchExportObjects"])(http, objectsToExport, includeReferencesDeep);
      } catch (e) {
        notifications.toasts.addDanger({
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.export.dangerNotification', {
            defaultMessage: 'Unable to generate export'
          })
        });
        throw e;
      }
      Object(_elastic_filesaver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, 'export.ndjson');
      const exportDetails = await Object(_lib__WEBPACK_IMPORTED_MODULE_8__["extractExportDetails"])(blob);
      this.showExportSuccessMessage(exportDetails);
    });
    _defineProperty(this, "onExportAll", async () => {
      const {
        exportAllSelectedOptions,
        isIncludeReferencesDeepChecked,
        activeQuery
      } = this.state;
      const {
        notifications,
        http
      } = this.props;
      const {
        queryText,
        visibleWorkspaces
      } = Object(_lib__WEBPACK_IMPORTED_MODULE_8__["parseQuery"])(activeQuery);
      const exportTypes = Object.entries(exportAllSelectedOptions).reduce((accum, [id, selected]) => {
        if (selected) {
          accum.push(id);
        }
        return accum;
      }, []);
      const filteredWorkspaceIds = this.workspaceNamesToIds(visibleWorkspaces);
      const workspaces = filteredWorkspaceIds || this.workspaceIdQuery;
      let blob;
      try {
        blob = await Object(_lib__WEBPACK_IMPORTED_MODULE_8__["fetchExportByTypeAndSearch"])(http, exportTypes, queryText ? `${queryText}*` : undefined, isIncludeReferencesDeepChecked, workspaces);
      } catch (e) {
        notifications.toasts.addDanger({
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.export.dangerNotification', {
            defaultMessage: 'Unable to generate export'
          })
        });
        throw e;
      }
      Object(_elastic_filesaver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, 'export.ndjson');
      const exportDetails = await Object(_lib__WEBPACK_IMPORTED_MODULE_8__["extractExportDetails"])(blob);
      this.showExportSuccessMessage(exportDetails);
      this.setState({
        isShowingExportAllOptionsModal: false
      });
    });
    _defineProperty(this, "showExportSuccessMessage", exportDetails => {
      const {
        notifications,
        useUpdatedUX
      } = this.props;
      if (exportDetails && exportDetails.missingReferences.length > 0) {
        notifications.toasts.addWarning({
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.export.successWithMissingRefsNotification', {
            defaultMessage: 'Your file is downloading in the background. ' + 'Some related {useUpdatedUX, select, true {assets} other {objects}} could not be found. ' + 'Please see the last line in the exported file for a list of missing objects.',
            values: {
              useUpdatedUX
            }
          })
        });
      } else {
        notifications.toasts.addSuccess({
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.export.successNotification', {
            defaultMessage: 'Your file is downloading in the background'
          })
        });
      }
    });
    _defineProperty(this, "finishImport", () => {
      this.hideImportFlyout();
      this.fetchSavedObjects();
      this.fetchCounts();
    });
    _defineProperty(this, "showImportFlyout", () => {
      this.setState({
        isShowingImportFlyout: true
      });
    });
    _defineProperty(this, "hideImportFlyout", () => {
      this.setState({
        isShowingImportFlyout: false
      });
    });
    _defineProperty(this, "onDelete", () => {
      this.setState({
        isShowingDeleteConfirmModal: true
      });
    });
    _defineProperty(this, "delete", async () => {
      const {
        savedObjectsClient,
        notifications,
        useUpdatedUX
      } = this.props;
      const {
        selectedSavedObjects,
        isDeleting
      } = this.state;
      if (isDeleting) {
        return;
      }
      this.setState({
        isDeleting: true
      });
      const indexPatterns = selectedSavedObjects.filter(object => object.type === 'index-pattern');
      try {
        if (indexPatterns.length) {
          await this.props.indexPatterns.clearCache();
        }
        const objects = await savedObjectsClient.bulkGet(selectedSavedObjects);
        const deletes = objects.savedObjects.map(object => savedObjectsClient.delete(object.type, object.id, {
          force: true
        }));
        await Promise.all(deletes);
        // Unset this
        this.setState({
          selectedSavedObjects: []
        });
        // Fetching all data
        await this.fetchSavedObjects();
        await this.fetchCounts();

        // Allow the user to interact with the table once the saved objects have been re-fetched.
        // If the user fails to delete the saved objects, the delete modal will continue to display.
        this.setState({
          isShowingDeleteConfirmModal: false
        });
      } catch (error) {
        notifications.toasts.addDanger({
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.unableDeleteSavedObjectsNotificationMessage', {
            defaultMessage: 'Unable to delete {useUpdatedUX, select, true {assets} other {saved objects}}',
            values: {
              useUpdatedUX
            }
          }),
          text: `${error}`
        });
      }
      this.setState({
        isDeleting: false
      });
    });
    _defineProperty(this, "getRelationships", async (type, id) => {
      const {
        allowedTypes,
        http
      } = this.props;
      return await Object(_lib__WEBPACK_IMPORTED_MODULE_8__["getRelationships"])(http, type, id, allowedTypes);
    });
    _defineProperty(this, "hideDuplicateModal", () => {
      this.setState({
        isShowingDuplicateModal: false
      });
    });
    _defineProperty(this, "onDuplicateAll", async () => {
      const {
        notifications,
        http,
        useUpdatedUX
      } = this.props;
      const findOptions = this.findOptions;
      findOptions.perPage = 9999;
      findOptions.page = 1;
      try {
        const resp = await Object(_lib__WEBPACK_IMPORTED_MODULE_8__["findObjects"])(http, findOptions);
        const duplicateObjects = resp.savedObjects.map(obj => ({
          id: obj.id,
          type: obj.type,
          meta: obj.meta,
          workspaces: obj.workspaces
        }));
        this.setState({
          duplicateSelectedSavedObjects: duplicateObjects,
          isShowingDuplicateModal: true
        });
      } catch (error) {
        notifications.toasts.addDanger({
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.unableFindSavedObjectsNotificationMessage', {
            defaultMessage: 'Unable find {useUpdatedUX, select, true {assets} other {saved objects}}',
            values: {
              useUpdatedUX
            }
          }),
          text: `${error}`
        });
      }
    });
    _defineProperty(this, "onDuplicate", async (savedObjects, includeReferencesDeep, targetWorkspace, targetWorkspaceName) => {
      const {
        notifications,
        workspaces,
        useUpdatedUX
      } = this.props;
      const workspaceClient = workspaces.client$.getValue();
      const showErrorNotification = () => {
        notifications.toasts.addDanger({
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.duplicate.dangerNotification', {
            defaultMessage: 'Unable to copy {useUpdatedUX, select, true {{errorCount, plural, one {# asset} other {# assets}}} other {{errorCount, plural, one {# saved object} other {# saved objects}}}}.',
            values: {
              errorCount: savedObjects.length,
              useUpdatedUX
            }
          })
        });
      };
      if (!workspaceClient) {
        showErrorNotification();
        return;
      }
      const objectsToDuplicate = savedObjects.map(obj => ({
        id: obj.id,
        type: obj.type
      }));
      try {
        const result = await workspaceClient.copy(objectsToDuplicate, targetWorkspace, includeReferencesDeep);
        this.setState({
          isShowingDuplicateResultFlyout: true,
          failedCopies: (result === null || result === void 0 ? void 0 : result.errors) || [],
          successfulCopies: (result === null || result === void 0 ? void 0 : result.successResults) || [],
          targetWorkspace,
          targetWorkspaceName
        });
      } catch (e) {
        showErrorNotification();
      } finally {
        this.hideDuplicateModal();
        await this.refreshObjects();
      }
    });
    _defineProperty(this, "hideDuplicateResultFlyout", () => {
      this.setState({
        isShowingDuplicateResultFlyout: false
      });
    });
    _defineProperty(this, "changeIncludeReferencesDeep", () => {
      this.setState(state => ({
        isIncludeReferencesDeepChecked: !state.isIncludeReferencesDeepChecked
      }));
    });
    _defineProperty(this, "closeExportAllModal", () => {
      this.setState({
        isShowingExportAllOptionsModal: false
      });
    });
    const typeCounts = props.allowedTypes.reduce((typeToCountMap, type) => {
      typeToCountMap[type] = 0;
      return typeToCountMap;
    }, {});
    this.state = {
      totalCount: 0,
      page: 0,
      perPage: props.perPageConfig || 50,
      savedObjects: [],
      savedObjectCounts: {
        type: typeCounts
      },
      activeQuery: _elastic_eui__WEBPACK_IMPORTED_MODULE_3__["Query"].parse(''),
      selectedSavedObjects: [],
      duplicateSelectedSavedObjects: [],
      isShowingImportFlyout: false,
      isShowingDuplicateModal: false,
      isSearching: false,
      filteredItemCount: 0,
      isShowingRelationships: false,
      relationshipObject: undefined,
      isShowingDeleteConfirmModal: false,
      isShowingExportAllOptionsModal: false,
      isDeleting: false,
      exportAllOptions: [],
      exportAllSelectedOptions: {},
      isIncludeReferencesDeepChecked: true,
      currentWorkspace: this.props.workspaces.currentWorkspace$.getValue(),
      availableWorkspaces: this.props.workspaces.workspaceList$.getValue(),
      workspaceEnabled: this.props.applications.capabilities.workspaces.enabled,
      isShowingDuplicateResultFlyout: false,
      failedCopies: [],
      successfulCopies: [],
      targetWorkspaceName: '',
      targetWorkspace: ''
    };
  }
  get findOptions() {
    var _namespaceRegistry$ge2;
    const {
      activeQuery: query,
      page,
      perPage
    } = this.state;
    const {
      allowedTypes,
      namespaceRegistry
    } = this.props;
    const {
      queryText,
      visibleTypes,
      visibleNamespaces,
      visibleWorkspaces
    } = Object(_lib__WEBPACK_IMPORTED_MODULE_8__["parseQuery"])(query);
    const filteredTypes = Object(_lib__WEBPACK_IMPORTED_MODULE_8__["filterQuery"])(allowedTypes, visibleTypes);
    // "searchFields" is missing from the "findOptions" but gets injected via the API.
    // The API extracts the fields from each uiExports.savedObjectsManagement "defaultSearchField" attribute
    const findOptions = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["formatWorkspaceIdParams"])({
      search: queryText ? `${queryText}*` : undefined,
      perPage,
      page: page + 1,
      fields: ['id'],
      type: filteredTypes,
      workspaces: this.workspaceIdQuery
    });
    const availableNamespaces = ((_namespaceRegistry$ge2 = namespaceRegistry.getAll()) === null || _namespaceRegistry$ge2 === void 0 ? void 0 : _namespaceRegistry$ge2.map(ns => ns.id)) || [];
    if (availableNamespaces.length) {
      const filteredNamespaces = Object(_lib__WEBPACK_IMPORTED_MODULE_8__["filterQuery"])(availableNamespaces, visibleNamespaces);
      findOptions.namespaces = filteredNamespaces;
    }
    if (visibleWorkspaces !== null && visibleWorkspaces !== void 0 && visibleWorkspaces.length) {
      findOptions.workspaces = this.workspaceNamesToIds(visibleWorkspaces);
    }
    if (findOptions.type.length > 1) {
      findOptions.sortField = 'type';
    }
    return findOptions;
  }
  get workspaceIdQuery() {
    const {
      currentWorkspace,
      workspaceEnabled
    } = this.state;
    // workspace is turned off
    if (!workspaceEnabled) {
      return undefined;
    } else {
      // not in any workspace
      if (!currentWorkspace) {
        return undefined;
      } else {
        return [currentWorkspace.id];
      }
    }
  }
  get workspaceNameIdLookup() {
    const {
      availableWorkspaces
    } = this.state;
    const workspaceNameIdMap = new Map();
    // workspace name is unique across the system
    availableWorkspaces === null || availableWorkspaces === void 0 || availableWorkspaces.forEach(workspace => {
      workspaceNameIdMap.set(workspace.name, workspace.id);
    });
    return workspaceNameIdMap;
  }

  /**
   * convert workspace names to ids
   * @param workspaceNames workspace name list
   * @returns workspace id list
   */
  workspaceNamesToIds(workspaceNames) {
    return workspaceNames === null || workspaceNames === void 0 ? void 0 : workspaceNames.map(wsName => this.workspaceNameIdLookup.get(wsName) || '').filter(wsId => !!wsId);
  }
  componentDidMount() {
    this._isMounted = true;
    this.subscribeWorkspace();
    this.fetchSavedObjects();
    this.fetchCounts();
  }
  componentWillUnmount() {
    this._isMounted = false;
    this.debouncedFetchObjects.cancel();
    this.unSubscribeWorkspace();
  }
  renderFlyout() {
    if (!this.state.isShowingImportFlyout) {
      return null;
    }
    const {
      applications
    } = this.props;
    const newIndexPatternUrl = applications.getUrlForApp('management', {
      path: 'opensearch-dashboards/indexPatterns'
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["Flyout"], {
      close: this.hideImportFlyout,
      done: this.finishImport,
      http: this.props.http,
      serviceRegistry: this.props.serviceRegistry,
      indexPatterns: this.props.indexPatterns,
      newIndexPatternUrl: newIndexPatternUrl,
      allowedTypes: this.props.allowedTypes,
      overlays: this.props.overlays,
      search: this.props.search,
      dataSourceEnabled: this.props.dataSourceEnabled,
      savedObjects: this.props.savedObjectsClient,
      notifications: this.props.notifications,
      dataSourceManagement: this.props.dataSourceManagement,
      useUpdatedUX: this.props.useUpdatedUX
    });
  }
  renderDuplicateModal() {
    const {
      isShowingDuplicateModal,
      duplicateSelectedSavedObjects
    } = this.state;
    if (!isShowingDuplicateModal) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["SavedObjectsDuplicateModal"], {
      http: this.props.http,
      workspaces: this.props.workspaces,
      onDuplicate: this.onDuplicate,
      notifications: this.props.notifications,
      onClose: this.hideDuplicateModal,
      selectedSavedObjects: duplicateSelectedSavedObjects,
      useUpdatedUX: this.props.useUpdatedUX
    });
  }
  renderDuplicateResultFlyout() {
    const {
      isShowingDuplicateResultFlyout,
      targetWorkspaceName,
      failedCopies,
      successfulCopies,
      targetWorkspace
    } = this.state;
    const {
      applications,
      http
    } = this.props;
    if (!isShowingDuplicateResultFlyout) {
      return null;
    }
    const dataSourceUrlForTargetWorkspace = Object(_core_public_utils__WEBPACK_IMPORTED_MODULE_6__["formatUrlWithWorkspaceId"])(applications.getUrlForApp('dataSources', {
      absolute: false
    }), targetWorkspace, http.basePath);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["DuplicateResultFlyout"], {
      workspaceName: targetWorkspaceName,
      failedCopies: failedCopies,
      successfulCopies: successfulCopies,
      onClose: this.hideDuplicateResultFlyout,
      onCopy: this.onDuplicate,
      targetWorkspace: targetWorkspace,
      useUpdatedUX: this.props.useUpdatedUX,
      dataSourceUrlForTargetWorkspace: dataSourceUrlForTargetWorkspace
    });
  }
  renderRelationships() {
    if (!this.state.isShowingRelationships) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["Relationships"], {
      basePath: this.props.http.basePath,
      savedObject: this.state.relationshipObject,
      getRelationships: this.getRelationships,
      close: this.onHideRelationships,
      goInspectObject: this.props.goInspectObject,
      canGoInApp: this.props.canGoInApp,
      useUpdatedUX: this.props.useUpdatedUX
    });
  }
  renderDeleteConfirmModal() {
    const {
      isShowingDeleteConfirmModal,
      isDeleting,
      selectedSavedObjects
    } = this.state;
    if (!isShowingDeleteConfirmModal) {
      return null;
    }
    let modal;
    if (isDeleting) {
      // Block the user from interacting with the table while its contents are being deleted.
      modal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiOverlayMask"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiLoadingSpinner"], {
        size: "xl"
      }));
    } else {
      const onCancel = () => {
        this.setState({
          isShowingDeleteConfirmModal: false
        });
      };
      const onConfirm = () => {
        this.delete();
      };
      modal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiModal"], {
        onClose: onCancel,
        maxWidth: "50vw"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiModalHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiModalHeaderTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.deleteSavedObjectsConfirmModalTitle",
        defaultMessage: "Delete assets"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
        size: "s"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "savedObjectsManagement.deleteSavedObjectsConfirmModalDescription",
        defaultMessage: "This action will delete the following assets:"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiInMemoryTable"], {
        items: selectedSavedObjects,
        columns: [{
          field: 'type',
          name: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.deleteSavedObjectsConfirmModal.typeColumnName', {
            defaultMessage: 'Type'
          }),
          width: '50px',
          render: (type, object) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiToolTip"], {
            position: "top",
            content: Object(_lib__WEBPACK_IMPORTED_MODULE_8__["getSavedObjectLabel"])(type)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiIcon"], {
            type: object.meta.icon || 'apps'
          }))
        }, {
          field: 'meta.title',
          name: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.deleteSavedObjectsConfirmModal.titleColumnName', {
            defaultMessage: 'Title'
          })
        }, {
          field: 'id',
          name: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.deleteSavedObjectsConfirmModal.idColumnName', {
            defaultMessage: 'ID'
          })
        }],
        pagination: true,
        sorting: false
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiButtonEmpty"], {
        onClick: onCancel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.deleteSavedObjectsConfirmModal.cancelButtonLabel",
        defaultMessage: "Cancel"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiButton"], {
        type: "submit",
        onClick: onConfirm,
        fill: true,
        color: "danger",
        "data-test-subj": "confirmModalConfirmButton",
        disabled: !!isDeleting
      }, isDeleting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.deleteSavedObjectsConfirmModal.deleteProcessButtonLabel",
        defaultMessage: "Deleting\u2026"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.deleteSavedObjectsConfirmModal.deleteButtonLabel",
        defaultMessage: "Delete"
      }))));
    }
    return modal;
  }
  renderExportAllOptionsModal() {
    const {
      isShowingExportAllOptionsModal,
      filteredItemCount,
      exportAllOptions,
      exportAllSelectedOptions,
      isIncludeReferencesDeepChecked
    } = this.state;
    if (!isShowingExportAllOptionsModal) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiModal"], {
      onClose: this.closeExportAllModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiModalHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiModalHeaderTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "savedObjectsManagement.objectsTable.exportObjectsConfirmModalTitle",
      defaultMessage: "Export {useUpdatedUX, select, true {{filteredItemCount, plural, one{# asset} other {# assets}}} other {{filteredItemCount, plural, one{# object} other {# objects}}}}",
      values: {
        useUpdatedUX: this.props.useUpdatedUX,
        filteredItemCount
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiCompressedFormRow"], {
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.exportObjectsConfirmModalDescription",
        defaultMessage: "Select which types to export"
      }),
      labelType: "legend"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiCompressedCheckboxGroup"], {
      options: exportAllOptions,
      idToSelectedMap: exportAllSelectedOptions,
      onChange: optionId => {
        const newExportAllSelectedOptions = {
          ...exportAllSelectedOptions,
          ...{
            [optionId]: !exportAllSelectedOptions[optionId]
          }
        };
        this.setState({
          exportAllSelectedOptions: newExportAllSelectedOptions
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
      size: "m"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiCompressedSwitch"], {
      name: "includeReferencesDeep",
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
        id: "savedObjectsManagement.objectsTable.exportObjectsConfirmModal.includeReferencesDeepLabel",
        defaultMessage: "Include related {useUpdatedUX, select, true {assets} other {objects}}",
        values: {
          useUpdatedUX: this.props.useUpdatedUX
        }
      }),
      checked: isIncludeReferencesDeepChecked,
      onChange: this.changeIncludeReferencesDeep
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
      justifyContent: "flexEnd"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSmallButtonEmpty"], {
      onClick: this.closeExportAllModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "savedObjectsManagement.objectsTable.exportObjectsConfirmModal.cancelButtonLabel",
      defaultMessage: "Cancel"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSmallButton"], {
      fill: true,
      onClick: this.onExportAll
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: "savedObjectsManagement.objectsTable.exportObjectsConfirmModal.exportAllButtonLabel",
      defaultMessage: "Export all"
    }))))))));
  }
  render() {
    const {
      selectedSavedObjects,
      page,
      perPage,
      savedObjects,
      filteredItemCount,
      isSearching,
      savedObjectCounts,
      availableWorkspaces,
      workspaceEnabled,
      currentWorkspace
    } = this.state;
    const {
      http,
      allowedTypes,
      applications,
      namespaceRegistry,
      useUpdatedUX,
      navigationUI
    } = this.props;
    const selectionConfig = {
      onSelectionChange: this.onSelectionChanged
    };
    const typeCounts = savedObjectCounts.type || {};
    const filterOptions = allowedTypes.map(type => ({
      value: type,
      name: type,
      view: `${type} (${typeCounts[type] || 0})`
    }));
    const filters = [{
      type: 'field_value_selection',
      field: 'type',
      name: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.table.typeFilterName', {
        defaultMessage: 'Type'
      }),
      multiSelect: 'or',
      options: filterOptions,
      searchThreshold: 1
    }];
    const availableNamespaces = namespaceRegistry.getAll() || [];
    if (availableNamespaces.length) {
      const nsCounts = savedObjectCounts.namespaces || {};
      const nsFilterOptions = availableNamespaces.map(ns => {
        return {
          name: ns.name,
          value: ns.id,
          view: `${ns.name} (${nsCounts[ns.id] || 0})`
        };
      });
      filters.push({
        type: 'field_value_selection',
        field: 'namespaces',
        name: namespaceRegistry.getAlias() || _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.table.namespaceFilterName', {
          defaultMessage: 'Namespaces'
        }),
        multiSelect: 'or',
        options: nsFilterOptions
      });
    }

    // Add workspace filter when out of workspace
    if (workspaceEnabled && availableWorkspaces !== null && availableWorkspaces !== void 0 && availableWorkspaces.length && !currentWorkspace) {
      const wsCounts = savedObjectCounts.workspaces || {};
      const wsFilterOptions = availableWorkspaces.map(ws => {
        return {
          name: ws.name,
          value: ws.name,
          view: `${ws.name} (${wsCounts[ws.id] || 0})`
        };
      });
      filters.push({
        type: 'field_value_selection',
        field: 'workspaces',
        name: _osd_i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].translate('savedObjectsManagement.objectsTable.table.workspaceFilterName', {
          defaultMessage: 'Workspace'
        }),
        multiSelect: 'or',
        options: wsFilterOptions,
        searchThreshold: 1
      });
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPageContent"], {
      horizontalPosition: "center",
      paddingSize: useUpdatedUX ? 'm' : undefined
    }, this.renderFlyout(), this.renderRelationships(), this.renderDeleteConfirmModal(), this.renderExportAllOptionsModal(), this.renderDuplicateModal(), this.renderDuplicateResultFlyout(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["Header"], {
      onExportAll: () => this.setState({
        isShowingExportAllOptionsModal: true
      }),
      onImport: this.showImportFlyout,
      showDuplicateAll: this.state.workspaceEnabled,
      onDuplicate: this.onDuplicateAll,
      onRefresh: this.refreshObjects,
      objectCount: savedObjects.length,
      useUpdatedUX: useUpdatedUX,
      navigationUI: navigationUI,
      applications: applications,
      currentWorkspaceName: currentWorkspace === null || currentWorkspace === void 0 ? void 0 : currentWorkspace.name,
      showImportButton: !workspaceEnabled || !!currentWorkspace
    }), !useUpdatedUX && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
      size: "xs"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_7__["RedirectAppLinks"], {
      application: applications
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["Table"], {
      basePath: http.basePath,
      itemId: 'id',
      actionRegistry: this.props.actionRegistry,
      columnRegistry: this.props.columnRegistry,
      selectionConfig: selectionConfig,
      selectedSavedObjects: selectedSavedObjects,
      onQueryChange: this.onQueryChange,
      onTableChange: this.onTableChange,
      filters: filters,
      onExport: this.onExport,
      canDelete: applications.capabilities.savedObjectsManagement.delete,
      onDelete: this.onDelete,
      onDuplicate: () => this.setState({
        isShowingDuplicateModal: true,
        duplicateSelectedSavedObjects: selectedSavedObjects
      }),
      onDuplicateSingle: object => this.setState({
        duplicateSelectedSavedObjects: [object],
        isShowingDuplicateModal: true
      }),
      onActionRefresh: this.refreshObject,
      goInspectObject: this.props.goInspectObject,
      pageIndex: page,
      pageSize: perPage,
      items: savedObjects,
      totalItemCount: filteredItemCount,
      isSearching: isSearching,
      onShowRelationships: this.onShowRelationships,
      canGoInApp: this.props.canGoInApp,
      dateFormat: this.props.dateFormat,
      availableWorkspaces: availableWorkspaces,
      currentWorkspaceId: currentWorkspace === null || currentWorkspace === void 0 ? void 0 : currentWorkspace.id,
      showDuplicate: this.state.workspaceEnabled,
      onRefresh: this.refreshObjects,
      useUpdatedUX: useUpdatedUX
    })));
  }
}

/***/ }),

/***/ "./public/management_section/recent_work.tsx":
/*!***************************************************!*\
  !*** ./public/management_section/recent_work.tsx ***!
  \***************************************************/
/*! exports provided: RecentWork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentWork", function() { return RecentWork; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-use */ "../../../node_modules/react-use/lib/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/public/utils */ "entry/core/public/utils");
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_core_public_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../plugin */ "./public/plugin.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib */ "./public/lib/index.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */









const allOption = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.recentWorkSection.all.items', {
  defaultMessage: 'All items'
});
const recentlyViewed = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.recentWorkSection.recentlyViewed', {
  defaultMessage: 'Recently viewed'
});
const recentlyUpdated = _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.recentWorkSection.recentlyUpdated', {
  defaultMessage: 'Recently updated'
});
const sortKeyMap = {
  [recentlyViewed]: 'lastAccessedTime',
  [recentlyUpdated]: 'updatedAt'
};
function sortBy(key) {
  return (a, b) => a[key] > b[key] ? -1 : b[key] > a[key] ? 1 : 0;
}
const bulkGetDetail = (savedObjects, http) => {
  return Promise.all(savedObjects.map(obj => http.get(`/api/opensearch-dashboards/management/saved_objects/${encodeURIComponent(obj.type)}/${encodeURIComponent(obj.id)}`).catch(error => ({
    id: obj.id,
    type: obj.type,
    error,
    attributes: {},
    references: [],
    meta: {},
    updated_at: ''
  }))));
};
const widthForTypeSelector = 220;
const widthForRightMargin = 4;
const MAX_ITEMS_DISPLAY = 6;
const RecentWork = props => {
  const {
    core,
    workspaceEnabled
  } = props;
  const recently$Ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(core.chrome.recentlyAccessed.get$());
  const recentAccessed = Object(react_use__WEBPACK_IMPORTED_MODULE_4__["useObservable"])(recently$Ref.current, []);
  const workspaceList = Object(react_use__WEBPACK_IMPORTED_MODULE_4__["useObservable"])(core.workspaces.workspaceList$, []);
  const currentWorkspace = Object(react_use__WEBPACK_IMPORTED_MODULE_4__["useObservable"])(core.workspaces.currentWorkspace$, null);
  const [selectedType, setSelectedType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(allOption);
  const [selectedSort, setSelectedSort] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(recentlyViewed);
  const [detailedSavedObjects, setDetailedSavedObjects] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const useUpdatedUX = core.chrome.navGroup.getNavGroupEnabled();
  const allOptions = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    const options = [allOption];
    detailedSavedObjects.filter(item => !item.error).forEach(recentAccessItem => {
      if (recentAccessItem !== null && recentAccessItem !== void 0 && recentAccessItem.type && options.indexOf(recentAccessItem === null || recentAccessItem === void 0 ? void 0 : recentAccessItem.type) === -1) {
        options.push(recentAccessItem === null || recentAccessItem === void 0 ? void 0 : recentAccessItem.type);
      }
    });
    return options.map(option => ({
      label: option,
      value: option
    }));
  }, [detailedSavedObjects]);
  const capitalTheFirstLetter = function (str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
  };
  const itemsForDisplay = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return [...detailedSavedObjects].filter(item => {
      if (item.error) return false;
      if (selectedType === allOption) return true;
      return item.type === selectedType;
    });
  }, [detailedSavedObjects, selectedType]);
  const constructInAppUrl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(object => {
    var _object$workspaces;
    const {
      path = ''
    } = object.meta.inAppUrl || {};
    let finalPath = path;
    // index pattern has been move out of dashboard management to be a standalone application,
    // the path changed from `/app/management/opensearch-dashboards/indexPatterns` to `/app/indexPatterns`
    if (useUpdatedUX && finalPath) {
      finalPath = finalPath.replace(/^\/app\/management\/opensearch-dashboards/, '/app');
    }
    const basePath = core.http.basePath;
    let inAppUrl = basePath.prepend(finalPath);
    if ((_object$workspaces = object.workspaces) !== null && _object$workspaces !== void 0 && _object$workspaces.length) {
      if (currentWorkspace) {
        inAppUrl = Object(_core_public_utils__WEBPACK_IMPORTED_MODULE_5__["formatUrlWithWorkspaceId"])(finalPath, currentWorkspace.id, basePath);
      } else {
        const workspace = workspaceList.find(item => {
          var _object$workspaces2;
          return (_object$workspaces2 = object.workspaces) === null || _object$workspaces2 === void 0 ? void 0 : _object$workspaces2.includes(item.id);
        });
        if (workspace) {
          inAppUrl = Object(_core_public_utils__WEBPACK_IMPORTED_MODULE_5__["formatUrlWithWorkspaceId"])(finalPath, workspace.id, basePath);
        }
      }
    }
    return inAppUrl;
  }, [core.http.basePath, currentWorkspace, useUpdatedUX, workspaceList]);
  const getRecentlyUpdated = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async () => {
    try {
      const allowedTypes = ['dashboard', 'visualization', 'search', 'query', 'index-pattern', 'visualization-visbuilder'];
      const findOptions = {
        type: allowedTypes,
        sortField: 'updated_at',
        sortOrder: 'desc',
        workspaces: currentWorkspace ? [currentWorkspace.id] : undefined,
        page: 1
      };
      const res = await Object(_lib__WEBPACK_IMPORTED_MODULE_7__["findObjects"])(core.http, findOptions);
      const savedObjects = res.savedObjects.map(obj => {
        const findWorkspace = workspaceList.find(workspace => {
          var _obj$workspaces;
          return (_obj$workspaces = obj.workspaces) === null || _obj$workspaces === void 0 ? void 0 : _obj$workspaces.includes(workspace.id);
        });
        return {
          ...obj,
          updatedAt: moment__WEBPACK_IMPORTED_MODULE_1___default()(obj === null || obj === void 0 ? void 0 : obj.updated_at).valueOf(),
          lastAccessedTime: moment__WEBPACK_IMPORTED_MODULE_1___default()(obj === null || obj === void 0 ? void 0 : obj.updated_at).valueOf(),
          workspaceName: findWorkspace === null || findWorkspace === void 0 ? void 0 : findWorkspace.name,
          label: obj.meta.title,
          link: constructInAppUrl(obj)
        };
      }).sort(sortBy(sortKeyMap[recentlyUpdated]));
      setDetailedSavedObjects(savedObjects);
    } finally {
      setIsLoading(false);
    }
  }, [constructInAppUrl, core.http, currentWorkspace, workspaceList]);
  const getRecentAccessed = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setIsLoading(true);
    try {
      const savedObjects = recentAccessed.filter(item => {
        var _item$meta;
        return ((_item$meta = item.meta) === null || _item$meta === void 0 ? void 0 : _item$meta.type) && (!currentWorkspace || currentWorkspace && item.workspaceId === currentWorkspace.id);
      }).map(item => {
        var _item$meta2;
        return {
          type: ((_item$meta2 = item.meta) === null || _item$meta2 === void 0 ? void 0 : _item$meta2.type) || '',
          id: item.id
        };
      });
      if (savedObjects.length) {
        bulkGetDetail(savedObjects, core.http).then(res => {
          const formatDetailedSavedObjects = res.map(obj => {
            const recentAccessItem = recentAccessed.find(item => item.id === obj.id);
            const findWorkspace = workspaceList.find(workspace => workspace.id === recentAccessItem.workspaceId);
            const {
              link,
              label,
              workspaceId
            } = recentAccessItem;
            const basePath = core.http.basePath;
            const href = Object(_core_public_utils__WEBPACK_IMPORTED_MODULE_5__["formatUrlWithWorkspaceId"])(link, workspaceId || '', basePath);
            return {
              ...recentAccessItem,
              ...obj,
              ...recentAccessItem.meta,
              workspaceName: findWorkspace === null || findWorkspace === void 0 ? void 0 : findWorkspace.name,
              updatedAt: moment__WEBPACK_IMPORTED_MODULE_1___default()(obj === null || obj === void 0 ? void 0 : obj.updated_at).valueOf(),
              link: workspaceEnabled ? href : link,
              label: label || obj.meta.title
            };
          }).sort(sortBy(sortKeyMap[recentlyViewed]));
          setDetailedSavedObjects(formatDetailedSavedObjects);
        });
      } else {
        setDetailedSavedObjects([]);
      }
    } finally {
      setIsLoading(false);
    }
  }, [core.http, currentWorkspace, recentAccessed, workspaceList, workspaceEnabled]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // reset to allOption
    setSelectedType(allOption);
    if (selectedSort === recentlyUpdated) {
      getRecentlyUpdated();
    } else {
      getRecentAccessed();
    }
  }, [getRecentlyUpdated, getRecentAccessed, selectedSort]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiPanel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    justifyContent: "spaceBetween"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    justifyContent: "flexStart",
    alignItems: "center",
    gutterSize: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiTitle"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.recentWorkSection.title', {
    defaultMessage: 'Assets'
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiToolTip"], {
    display: "inlineBlock",
    position: "right",
    content: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.recentWorkSection.assetsInfo', {
      defaultMessage: 'Dashboards, visualizations, saved queries, and other assets within your Workspaces.'
    }),
    "data-test-subj": "assetsTooltip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiIcon"], {
    type: "iInCircle"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFilterGroup"], null, [recentlyViewed, recentlyUpdated].map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFilterButton"], {
    hasActiveFilters: selectedSort === item,
    key: item,
    onClick: () => setSelectedSort(item),
    "data-test-subj": `filterButton-${encodeURIComponent(item)}`
  }, item)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiComboBox"], {
    style: {
      width: widthForTypeSelector
    },
    isClearable: false,
    options: allOptions,
    singleSelection: {
      asPlainText: true
    },
    onChange: options => setSelectedType(options[0].value || ''),
    selectedOptions: [{
      label: selectedType,
      value: selectedType
    }]
  }))))), itemsForDisplay.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], null, Array.from({
    length: MAX_ITEMS_DISPLAY
  }).map((item, itemIndexInRow) => {
    const recentAccessItem = itemsForDisplay[itemIndexInRow];
    let content = null;
    if (recentAccessItem) {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiCard"], {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
          justifyContent: "flexStart",
          alignItems: "center",
          gutterSize: "none"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
          grow: false
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiIcon"], {
          style: {
            marginRight: widthForRightMargin
          },
          type: recentAccessItem.meta.icon || 'apps',
          color: "subdued"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
          grow: false
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
          size: "xs",
          color: "subdued"
        }, capitalTheFirstLetter(recentAccessItem.type)))),
        "data-test-subj": "recentlyCard",
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          className: "eui-textBreakAll"
        }, recentAccessItem.label),
        textAlign: "left",
        href: recentAccessItem.link,
        footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
          justifyContent: "spaceBetween",
          direction: "column",
          gutterSize: "none"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGrid"], {
          columns: 2,
          gutterSize: "s"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
          grow: false
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
          size: "xs",
          color: "default"
        }, selectedSort === recentlyViewed ? _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.recentWorkSection.viewedAt', {
          defaultMessage: 'Viewed'
        }) : _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.recentWorkSection.updatedAt', {
          defaultMessage: 'Updated'
        }), ":", ' ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
          grow: 1,
          className: "eui-textRight"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
          size: "xs",
          color: "default"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, selectedSort === recentlyViewed ? moment__WEBPACK_IMPORTED_MODULE_1___default()(recentAccessItem === null || recentAccessItem === void 0 ? void 0 : recentAccessItem.lastAccessedTime).fromNow() : moment__WEBPACK_IMPORTED_MODULE_1___default()(recentAccessItem === null || recentAccessItem === void 0 ? void 0 : recentAccessItem.updatedAt).fromNow()))))), workspaceEnabled && !currentWorkspace && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGrid"], {
          columns: 2,
          gutterSize: "s"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
          grow: false
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
          size: "xs",
          color: "default"
        }, _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.recentWorkSection.workspace', {
          defaultMessage: 'Workspace'
        }), ":")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
          grow: 1,
          className: "eui-textRight"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
          size: "xs",
          color: "default"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, recentAccessItem.workspaceName || 'N/A', " "))))))
      });
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
      key: (recentAccessItem === null || recentAccessItem === void 0 ? void 0 : recentAccessItem.id) || itemIndexInRow
    }, content);
  })) : isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiEmptyPrompt"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLoadingLogo"], {
      logo: "savedObjectsApp",
      size: "xl"
    }),
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Loading Assets")
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiEmptyPrompt"], {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.recentWorkSection.empty.title', {
      defaultMessage: 'No assets to display'
    })),
    body: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
      gutterSize: "s",
      justifyContent: "spaceBetween",
      alignItems: "center",
      direction: "column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
      color: "subdued",
      size: "s"
    }, _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.recentWorkSection.empty.body', {
      defaultMessage: 'The recent assets will appear here.'
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSmallButton"], {
      iconType: "popout",
      iconSide: "right",
      iconGap: "none",
      target: "_blank",
      href: core.application.getUrlForApp(_plugin__WEBPACK_IMPORTED_MODULE_6__["APP_ID"])
    }, _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.recentWorkSection.empty.manageAssets', {
      defaultMessage: 'Manage assets'
    }))))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiLink"], {
    target: "_blank",
    onClick: () => core.application.navigateToApp(_plugin__WEBPACK_IMPORTED_MODULE_6__["APP_ID"])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
    size: "s",
    className: "eui-displayInline"
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('savedObjectsManagement.recentWorkSection.view_all', {
    defaultMessage: 'View all'
  }))));
};

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: APP_ID, SavedObjectsManagementPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ID", function() { return APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementPlugin", function() { return SavedObjectsManagementPlugin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/public */ "plugin/home/public");
/* harmony import */ var _home_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./public/services/index.ts");
/* harmony import */ var _register_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register_services */ "./public/register_services.ts");
/* harmony import */ var _ui_actions_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui_actions_bootstrap */ "./public/ui_actions_bootstrap.ts");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/public */ "entry/core/public");
/* harmony import */ var _core_public__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_core_public__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _management_section_recent_work__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./management_section/recent_work */ "./public/management_section/recent_work.tsx");
/* harmony import */ var _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../plugins/content_management/public */ "plugin/contentManagement/public");
/* harmony import */ var _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_plugins_content_management_public__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_9__);
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











/**
 * The id is used in src/plugins/workspace/public/plugin.ts and please change that accordingly if you change the id here.
 */
const APP_ID = 'objects';
class SavedObjectsManagementPlugin {
  constructor() {
    _defineProperty(this, "actionService", new _services__WEBPACK_IMPORTED_MODULE_3__["SavedObjectsManagementActionService"]());
    _defineProperty(this, "columnService", new _services__WEBPACK_IMPORTED_MODULE_3__["SavedObjectsManagementColumnService"]());
    _defineProperty(this, "namespaceService", new _services__WEBPACK_IMPORTED_MODULE_3__["SavedObjectsManagementNamespaceService"]());
    _defineProperty(this, "serviceRegistry", new _services__WEBPACK_IMPORTED_MODULE_3__["SavedObjectsManagementServiceRegistry"]());
  }
  setup(core, {
    home,
    management,
    uiActions,
    dataSource,
    dataSourceManagement
  }) {
    const actionSetup = this.actionService.setup();
    const columnSetup = this.columnService.setup();
    const namespaceSetup = this.namespaceService.setup();
    if (home) {
      home.featureCatalogue.register({
        id: 'saved_objects',
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('savedObjectsManagement.objects.savedObjectsTitle', {
          defaultMessage: 'Saved Objects'
        }),
        description: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('savedObjectsManagement.objects.savedObjectsDescription', {
          defaultMessage: 'Import, export, and manage your saved searches, visualizations, and dashboards.'
        }),
        icon: 'savedObjectsApp',
        path: '/app/management/opensearch-dashboards/objects',
        showOnHomePage: false,
        category: _home_public__WEBPACK_IMPORTED_MODULE_2__["FeatureCatalogueCategory"].ADMIN
      });
    }
    const opensearchDashboardsSection = management.sections.section.opensearchDashboards;
    opensearchDashboardsSection.registerApp({
      id: APP_ID,
      title: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('savedObjectsManagement.managementSectionLabel', {
        defaultMessage: 'Saved objects'
      }),
      order: 1,
      mount: async mountParams => {
        const {
          mountManagementSection
        } = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./management_section */ "./public/management_section/index.ts"));
        return mountManagementSection({
          core,
          serviceRegistry: this.serviceRegistry,
          mountParams,
          dataSourceEnabled: !!dataSource,
          dataSourceManagement
        });
      }
    });
    if (core.chrome.navGroup.getNavGroupEnabled()) {
      core.application.register({
        id: APP_ID,
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('savedObjectsManagement.assets.label', {
          defaultMessage: 'Assets'
        }),
        description: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('savedObjectsManagement.assets.description', {
          defaultMessage: 'Manage and share your global assets.'
        }),
        mount: async params => {
          const {
            mountManagementSection
          } = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./management_section */ "./public/management_section/index.ts"));
          const [coreStart] = await core.getStartServices();
          return mountManagementSection({
            core,
            serviceRegistry: this.serviceRegistry,
            mountParams: {
              ...params,
              basePath: core.http.basePath.get(),
              setBreadcrumbs: breadCrumbs => coreStart.chrome.setBreadcrumbs(Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_9__["getScopedBreadcrumbs"])(breadCrumbs, params.history)),
              wrapInPage: true
            },
            dataSourceEnabled: !!dataSource,
            dataSourceManagement
          });
        }
      });
    }
    core.chrome.navGroup.addNavLinksToGroup(_core_public__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_NAV_GROUPS"].settingsAndSetup, [{
      id: APP_ID,
      order: 400
    }]);

    // sets up the context mappings and registers any triggers/actions for the plugin
    Object(_ui_actions_bootstrap__WEBPACK_IMPORTED_MODULE_5__["bootstrap"])(uiActions);

    // depends on `getStartServices`, should not be awaited
    Object(_register_services__WEBPACK_IMPORTED_MODULE_4__["registerServices"])(this.serviceRegistry, core.getStartServices);
    return {
      actions: actionSetup,
      columns: columnSetup,
      namespaces: namespaceSetup,
      serviceRegistry: this.serviceRegistry
    };
  }
  start(core, {
    data,
    uiActions,
    contentManagement
  }) {
    const actionStart = this.actionService.start();
    const columnStart = this.columnService.start();
    const namespaceStart = this.namespaceService.start();
    const workspaceEnabled = core.application.capabilities.workspaces.enabled;
    contentManagement === null || contentManagement === void 0 || contentManagement.registerContentProvider({
      id: 'recent',
      getContent: () => {
        return {
          order: 1,
          id: 'recent',
          kind: 'custom',
          render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_management_section_recent_work__WEBPACK_IMPORTED_MODULE_7__["RecentWork"], {
            core,
            workspaceEnabled
          })
        };
      },
      getTargetArea: () => [_plugins_content_management_public__WEBPACK_IMPORTED_MODULE_8__["HOME_CONTENT_AREAS"].RECENTLY_VIEWED, _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_8__["ESSENTIAL_OVERVIEW_CONTENT_AREAS"].RECENTLY_VIEWED, _plugins_content_management_public__WEBPACK_IMPORTED_MODULE_8__["ANALYTICS_ALL_OVERVIEW_CONTENT_AREAS"].RECENTLY_VIEWED]
    });
    return {
      actions: actionStart,
      columns: columnStart,
      namespaces: namespaceStart
    };
  }
}

/***/ }),

/***/ "./public/register_services.ts":
/*!*************************************!*\
  !*** ./public/register_services.ts ***!
  \*************************************/
/*! exports provided: registerServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerServices", function() { return registerServices; });
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

const registerServices = async (registry, getStartServices) => {
  const [, {
    home,
    dashboard,
    visualizations,
    visAugmenter,
    discover,
    visBuilder
  }] = await getStartServices();
  if (home) {
    registry.register({
      id: 'savedHomepage',
      title: 'homepage',
      service: home.getSavedHomepageLoader()
    });
  }
  if (dashboard) {
    registry.register({
      id: 'savedDashboards',
      title: 'dashboards',
      service: dashboard.getSavedDashboardLoader()
    });
  }
  if (visualizations) {
    registry.register({
      id: 'savedVisualizations',
      title: 'visualizations',
      service: visualizations.savedVisualizationsLoader
    });
  }
  if (visAugmenter) {
    registry.register({
      id: 'savedAugmentVis',
      title: 'augmentVis',
      service: visAugmenter.savedAugmentVisLoader
    });
  }
  if (discover) {
    registry.register({
      id: 'savedSearches',
      title: 'searches',
      service: discover.savedSearchLoader
    });
  }
  if (visBuilder) {
    registry.register({
      id: 'savedVisBuilder',
      title: 'visBuilder',
      service: visBuilder.savedVisBuilderLoader
    });
  }
};

/***/ }),

/***/ "./public/services/action_service.ts":
/*!*******************************************!*\
  !*** ./public/services/action_service.ts ***!
  \*******************************************/
/*! exports provided: SavedObjectsManagementActionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementActionService", function() { return SavedObjectsManagementActionService; });
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

class SavedObjectsManagementActionService {
  constructor() {
    _defineProperty(this, "actions", new Map());
  }
  setup() {
    return {
      register: action => {
        if (this.actions.has(action.id)) {
          throw new Error(`Saved Objects Management Action with id '${action.id}' already exists`);
        }
        this.actions.set(action.id, action);
      }
    };
  }
  start() {
    return {
      has: actionId => this.actions.has(actionId),
      getAll: () => [...this.actions.values()]
    };
  }
}

/***/ }),

/***/ "./public/services/column_service.ts":
/*!*******************************************!*\
  !*** ./public/services/column_service.ts ***!
  \*******************************************/
/*! exports provided: SavedObjectsManagementColumnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementColumnService", function() { return SavedObjectsManagementColumnService; });
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

class SavedObjectsManagementColumnService {
  constructor() {
    _defineProperty(this, "columns", new Map());
  }
  setup() {
    return {
      register: column => {
        if (this.columns.has(column.id)) {
          throw new Error(`Saved Objects Management Column with id '${column.id}' already exists`);
        }
        this.columns.set(column.id, column);
      }
    };
  }
  start() {
    return {
      getAll: () => [...this.columns.values()]
    };
  }
}

/***/ }),

/***/ "./public/services/index.ts":
/*!**********************************!*\
  !*** ./public/services/index.ts ***!
  \**********************************/
/*! exports provided: SavedObjectsManagementActionService, SavedObjectsManagementActionServiceStart, SavedObjectsManagementActionServiceSetup, SavedObjectsManagementColumnService, SavedObjectsManagementColumnServiceStart, SavedObjectsManagementColumnServiceSetup, SavedObjectsManagementNamespaceService, SavedObjectsManagementNamespaceServiceStart, SavedObjectsManagementNamespaceServiceSetup, SavedObjectsManagementServiceRegistry, ISavedObjectsManagementServiceRegistry, SavedObjectsManagementServiceRegistryEntry, SavedObjectsManagementAction, SavedObjectsManagementColumn, SavedObjectsManagementNamespace, SavedObjectsManagementRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action_service */ "./public/services/action_service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementActionService", function() { return _action_service__WEBPACK_IMPORTED_MODULE_0__["SavedObjectsManagementActionService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementActionServiceStart", function() { return _action_service__WEBPACK_IMPORTED_MODULE_0__["SavedObjectsManagementActionServiceStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementActionServiceSetup", function() { return _action_service__WEBPACK_IMPORTED_MODULE_0__["SavedObjectsManagementActionServiceSetup"]; });

/* harmony import */ var _column_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column_service */ "./public/services/column_service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementColumnService", function() { return _column_service__WEBPACK_IMPORTED_MODULE_1__["SavedObjectsManagementColumnService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementColumnServiceStart", function() { return _column_service__WEBPACK_IMPORTED_MODULE_1__["SavedObjectsManagementColumnServiceStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementColumnServiceSetup", function() { return _column_service__WEBPACK_IMPORTED_MODULE_1__["SavedObjectsManagementColumnServiceSetup"]; });

/* harmony import */ var _namespace_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./namespace_service */ "./public/services/namespace_service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementNamespaceService", function() { return _namespace_service__WEBPACK_IMPORTED_MODULE_2__["SavedObjectsManagementNamespaceService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementNamespaceServiceStart", function() { return _namespace_service__WEBPACK_IMPORTED_MODULE_2__["SavedObjectsManagementNamespaceServiceStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementNamespaceServiceSetup", function() { return _namespace_service__WEBPACK_IMPORTED_MODULE_2__["SavedObjectsManagementNamespaceServiceSetup"]; });

/* harmony import */ var _service_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service_registry */ "./public/services/service_registry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementServiceRegistry", function() { return _service_registry__WEBPACK_IMPORTED_MODULE_3__["SavedObjectsManagementServiceRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ISavedObjectsManagementServiceRegistry", function() { return _service_registry__WEBPACK_IMPORTED_MODULE_3__["ISavedObjectsManagementServiceRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementServiceRegistryEntry", function() { return _service_registry__WEBPACK_IMPORTED_MODULE_3__["SavedObjectsManagementServiceRegistryEntry"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./public/services/types/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementAction", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["SavedObjectsManagementAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementColumn", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["SavedObjectsManagementColumn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementNamespace", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["SavedObjectsManagementNamespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementRecord", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["SavedObjectsManagementRecord"]; });

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

/***/ "./public/services/namespace_service.ts":
/*!**********************************************!*\
  !*** ./public/services/namespace_service.ts ***!
  \**********************************************/
/*! exports provided: SavedObjectsManagementNamespaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementNamespaceService", function() { return SavedObjectsManagementNamespaceService; });
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

class SavedObjectsManagementNamespaceService {
  constructor() {
    _defineProperty(this, "namespaces", new Map());
    _defineProperty(this, "alias", void 0);
  }
  setup() {
    return {
      register: ns => {
        if (this.namespaces.has(ns.id)) {
          throw new Error(`Saved Objects Management Namespace with id '${ns.id}' already exists`);
        }
        this.namespaces.set(ns.id, ns);
      },
      registerAlias: alias => {
        if (!!this.alias) {
          throw new Error(`An alias has already been registered. Cannot register more than one alias.`);
        }
        this.alias = alias;
      }
    };
  }
  start() {
    return {
      getAll: () => [...this.namespaces.values()],
      getAlias: () => this.alias
    };
  }
}

/***/ }),

/***/ "./public/services/service_registry.ts":
/*!*********************************************!*\
  !*** ./public/services/service_registry.ts ***!
  \*********************************************/
/*! exports provided: SavedObjectsManagementServiceRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementServiceRegistry", function() { return SavedObjectsManagementServiceRegistry; });
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

class SavedObjectsManagementServiceRegistry {
  constructor() {
    _defineProperty(this, "registry", new Map());
  }
  register(entry) {
    if (this.registry.has(entry.id)) {
      throw new Error('');
    }
    this.registry.set(entry.id, entry);
  }
  all() {
    return [...this.registry.values()];
  }
  get(id) {
    return this.registry.get(id);
  }
}

/***/ }),

/***/ "./public/services/types/action.ts":
/*!*****************************************!*\
  !*** ./public/services/types/action.ts ***!
  \*****************************************/
/*! exports provided: SavedObjectsManagementAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementAction", function() { return SavedObjectsManagementAction; });
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

class SavedObjectsManagementAction {
  constructor() {
    _defineProperty(this, "render", void 0);
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "euiAction", void 0);
    _defineProperty(this, "refreshOnFinish", void 0);
    _defineProperty(this, "callbacks", []);
    _defineProperty(this, "record", null);
  }
  registerOnFinishCallback(callback) {
    this.callbacks.push(callback);
  }
  start(record) {
    this.record = record;
  }
  finish() {
    this.record = null;
    this.callbacks.forEach(callback => callback());
  }
}

/***/ }),

/***/ "./public/services/types/column.ts":
/*!*****************************************!*\
  !*** ./public/services/types/column.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/services/types/index.ts":
/*!****************************************!*\
  !*** ./public/services/types/index.ts ***!
  \****************************************/
/*! exports provided: SavedObjectsManagementAction, SavedObjectsManagementColumn, SavedObjectsManagementRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./public/services/types/action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementAction", function() { return _action__WEBPACK_IMPORTED_MODULE_0__["SavedObjectsManagementAction"]; });

/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column */ "./public/services/types/column.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementColumn", function() { return _column__WEBPACK_IMPORTED_MODULE_1__["SavedObjectsManagementColumn"]; });

/* harmony import */ var _record__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./record */ "./public/services/types/record.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectsManagementRecord", function() { return _record__WEBPACK_IMPORTED_MODULE_2__["SavedObjectsManagementRecord"]; });

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

/***/ "./public/services/types/record.ts":
/*!*****************************************!*\
  !*** ./public/services/types/record.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/triggers/index.ts":
/*!**********************************!*\
  !*** ./public/triggers/index.ts ***!
  \**********************************/
/*! exports provided: SAVED_OBJECT_DELETE_TRIGGER, savedObjectDeleteTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saved_object_delete_trigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saved_object_delete_trigger */ "./public/triggers/saved_object_delete_trigger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAVED_OBJECT_DELETE_TRIGGER", function() { return _saved_object_delete_trigger__WEBPACK_IMPORTED_MODULE_0__["SAVED_OBJECT_DELETE_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "savedObjectDeleteTrigger", function() { return _saved_object_delete_trigger__WEBPACK_IMPORTED_MODULE_0__["savedObjectDeleteTrigger"]; });

/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */



/***/ }),

/***/ "./public/triggers/saved_object_delete_trigger.ts":
/*!********************************************************!*\
  !*** ./public/triggers/saved_object_delete_trigger.ts ***!
  \********************************************************/
/*! exports provided: SAVED_OBJECT_DELETE_TRIGGER, savedObjectDeleteTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVED_OBJECT_DELETE_TRIGGER", function() { return SAVED_OBJECT_DELETE_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savedObjectDeleteTrigger", function() { return savedObjectDeleteTrigger; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


/**
 * TODO: This action is currently being used behind-the-scenes in the vis_augmenter plugin
 * to clean up related augment-vis saved objects when a visualization is deleted.
 * This should be moved and maintained by the saved objects plugin. Tracking issue:
 * https://github.com/opensearch-project/OpenSearch-Dashboards/issues/4499
 */
const SAVED_OBJECT_DELETE_TRIGGER = 'SAVED_OBJECT_DELETE_TRIGGER';
const savedObjectDeleteTrigger = {
  id: SAVED_OBJECT_DELETE_TRIGGER,
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('savedObjectsManagement.triggers.savedObjectDeleteTitle', {
    defaultMessage: 'Saved object delete'
  }),
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('savedObjectsManagement.triggers.savedObjectDeleteDescription', {
    defaultMessage: 'Perform additional actions after deleting a saved object'
  })
};

/***/ }),

/***/ "./public/types.ts":
/*!*************************!*\
  !*** ./public/types.ts ***!
  \*************************/
/*! exports provided: SavedObjectMetadata, SavedObjectWithMetadata, SavedObjectRelation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./common/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectMetadata", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["SavedObjectMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectWithMetadata", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["SavedObjectWithMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SavedObjectRelation", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["SavedObjectRelation"]; });

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

/***/ "./public/ui_actions_bootstrap.ts":
/*!****************************************!*\
  !*** ./public/ui_actions_bootstrap.ts ***!
  \****************************************/
/*! exports provided: bootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony import */ var _triggers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./triggers */ "./public/triggers/index.ts");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


const bootstrap = uiActions => {
  uiActions.registerTrigger(_triggers__WEBPACK_IMPORTED_MODULE_0__["savedObjectDeleteTrigger"]);
};

/***/ }),

/***/ "./public/utils.ts":
/*!*************************!*\
  !*** ./public/utils.ts ***!
  \*************************/
/*! exports provided: formatWorkspaceIdParams, formatInspectUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatWorkspaceIdParams", function() { return formatWorkspaceIdParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatInspectUrl", function() { return formatInspectUrl; });
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/public/utils */ "entry/core/public/utils");
/* harmony import */ var _core_public_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_public_utils__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


function formatWorkspaceIdParams(obj) {
  const {
    workspaces,
    availableWorkspaces,
    ...others
  } = obj;
  if (workspaces || availableWorkspaces && availableWorkspaces.length) {
    return obj;
  }
  return others;
}
function formatInspectUrl(savedObject, coreStart) {
  const {
    editUrl
  } = savedObject.meta;
  const useUpdatedUX = !!coreStart.uiSettings.get('home:useNewHomePage');
  let finalEditUrl = editUrl;
  if (useUpdatedUX && finalEditUrl) {
    finalEditUrl = finalEditUrl.replace(/^\/management\/opensearch-dashboards/, '');
  }
  if (finalEditUrl) {
    finalEditUrl = `/app${finalEditUrl}`;
    const basePath = coreStart.http.basePath;
    let inAppUrl = basePath.prepend(finalEditUrl);
    const workspaceEnabled = coreStart.application.capabilities.workspaces.enabled;
    if (workspaceEnabled) {
      const currentWorkspace = coreStart.workspaces.currentWorkspace$.value;
      if (currentWorkspace) {
        inAppUrl = Object(_core_public_utils__WEBPACK_IMPORTED_MODULE_0__["formatUrlWithWorkspaceId"])(finalEditUrl, currentWorkspace.id, basePath);
      } else {
        var _coreStart$workspaces, _savedObject$workspac;
        const visibleWsIds = ((_coreStart$workspaces = coreStart.workspaces.workspaceList$.value) === null || _coreStart$workspaces === void 0 ? void 0 : _coreStart$workspaces.map(ws => ws.id)) || [];

        // find first workspace user have permission
        const workspaceId = savedObject === null || savedObject === void 0 || (_savedObject$workspac = savedObject.workspaces) === null || _savedObject$workspac === void 0 ? void 0 : _savedObject$workspac.find(wsId => visibleWsIds.includes(wsId));
        if (workspaceId) {
          inAppUrl = Object(_core_public_utils__WEBPACK_IMPORTED_MODULE_0__["formatUrlWithWorkspaceId"])(finalEditUrl, workspaceId, basePath);
        }
      }
    }
    return inAppUrl;
  }
}

/***/ }),

/***/ "@elastic/eui":
/*!***********************************************!*\
  !*** external "__osdSharedDeps__.ElasticEui" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.ElasticEui;

/***/ }),

/***/ "@osd/i18n":
/*!********************************************!*\
  !*** external "__osdSharedDeps__.OsdI18n" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.OsdI18n;

/***/ }),

/***/ "@osd/i18n/react":
/*!*************************************************!*\
  !*** external "__osdSharedDeps__.OsdI18nReact" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.OsdI18nReact;

/***/ }),

/***/ "entry/core/public":
/*!******************************************!*\
  !*** @osd/bundleRef "entry/core/public" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('entry/core/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "entry/core/public/utils":
/*!************************************************!*\
  !*** @osd/bundleRef "entry/core/public/utils" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('entry/core/public/utils');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "lodash":
/*!*******************************************!*\
  !*** external "__osdSharedDeps__.Lodash" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Lodash;

/***/ }),

/***/ "moment":
/*!*******************************************!*\
  !*** external "__osdSharedDeps__.Moment" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Moment;

/***/ }),

/***/ "plugin/contentManagement/public":
/*!********************************************************!*\
  !*** @osd/bundleRef "plugin/contentManagement/public" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/contentManagement/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/data/public":
/*!*******************************************!*\
  !*** @osd/bundleRef "plugin/data/public" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/data/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/home/public":
/*!*******************************************!*\
  !*** @osd/bundleRef "plugin/home/public" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/home/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "plugin/opensearchDashboardsReact/public":
/*!****************************************************************!*\
  !*** @osd/bundleRef "plugin/opensearchDashboardsReact/public" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);
      var ns = __osdBundles__.get('plugin/opensearchDashboardsReact/public');
      Object.defineProperties(__webpack_exports__, Object.getOwnPropertyDescriptors(ns))
    

/***/ }),

/***/ "react":
/*!******************************************!*\
  !*** external "__osdSharedDeps__.React" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.React;

/***/ }),

/***/ "react-dom":
/*!*********************************************!*\
  !*** external "__osdSharedDeps__.ReactDom" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.ReactDom;

/***/ }),

/***/ "react-router-dom":
/*!***************************************************!*\
  !*** external "__osdSharedDeps__.ReactRouterDom" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.ReactRouterDom;

/***/ }),

/***/ "tslib":
/*!******************************************!*\
  !*** external "__osdSharedDeps__.TsLib" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.TsLib;

/***/ })

/******/ });
//# sourceMappingURL=savedObjectsManagement.plugin.js.map