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

/***/ "../../../node_modules/val-loader/dist/cjs.js?key=uiActions!../../../packages/osd-ui-shared-deps/public_path_module_creator.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/val-loader/dist/cjs.js?key=uiActions!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ui-shared-deps/public_path_module_creator.js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__osdPublicPath__['uiActions']

/***/ }),

/***/ "../../../packages/osd-optimizer/target/worker/entry_point_creator.js":
/*!*****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-optimizer/target/worker/entry_point_creator.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_uiActions_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/val-loader/dist/cjs.js?key=uiActions!../../../osd-ui-shared-deps/public_path_module_creator.js */ "../../../node_modules/val-loader/dist/cjs.js?key=uiActions!../../../packages/osd-ui-shared-deps/public_path_module_creator.js");
/* harmony import */ var _node_modules_val_loader_dist_cjs_js_key_uiActions_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_val_loader_dist_cjs_js_key_uiActions_osd_ui_shared_deps_public_path_module_creator_js__WEBPACK_IMPORTED_MODULE_0__);
__osdBundles__.define('plugin/uiActions/public', __webpack_require__, /*require.resolve*/(/*! ../../../../src/plugins/ui_actions/public */ "./public/index.ts"))

/***/ }),

/***/ "./public/actions/action.ts":
/*!**********************************!*\
  !*** ./public/actions/action.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/actions/action_internal.ts":
/*!*******************************************!*\
  !*** ./public/actions/action_internal.ts ***!
  \*******************************************/
/*! exports provided: ActionInternal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionInternal", function() { return ActionInternal; });
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_0__);
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

// @ts-ignore


/**
 * @internal
 */
class ActionInternal {
  constructor(definition) {
    this.definition = definition;
    _defineProperty(this, "id", this.definition.id);
    _defineProperty(this, "type", this.definition.type || '');
    _defineProperty(this, "order", this.definition.order || 0);
    _defineProperty(this, "MenuItem", this.definition.MenuItem);
    _defineProperty(this, "ReactMenuItem", this.MenuItem ? Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_0__["uiToReactComponent"])(this.MenuItem) : undefined);
    _defineProperty(this, "grouping", this.definition.grouping);
  }
  execute(context) {
    return this.definition.execute(context);
  }
  getIconType(context) {
    if (!this.definition.getIconType) return undefined;
    return this.definition.getIconType(context);
  }
  getDisplayName(context) {
    if (!this.definition.getDisplayName) return `Action: ${this.id}`;
    return this.definition.getDisplayName(context);
  }
  getDisplayNameTooltip(context) {
    if (!this.definition.getDisplayNameTooltip) return '';
    return this.definition.getDisplayNameTooltip(context);
  }
  async isCompatible(context) {
    if (!this.definition.isCompatible) return true;
    return await this.definition.isCompatible(context);
  }
  async getHref(context) {
    if (!this.definition.getHref) return undefined;
    return await this.definition.getHref(context);
  }
  async shouldAutoExecute(context) {
    if (!this.definition.shouldAutoExecute) return false;
    return this.definition.shouldAutoExecute(context);
  }
}

/***/ }),

/***/ "./public/actions/create_action.ts":
/*!*****************************************!*\
  !*** ./public/actions/create_action.ts ***!
  \*****************************************/
/*! exports provided: createAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return createAction; });
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

function createAction(action) {
  return {
    getIconType: () => undefined,
    order: 0,
    id: action.type,
    isCompatible: () => Promise.resolve(true),
    getDisplayName: () => '',
    ...action
  };
}

/***/ }),

/***/ "./public/actions/incompatible_action_error.ts":
/*!*****************************************************!*\
  !*** ./public/actions/incompatible_action_error.ts ***!
  \*****************************************************/
/*! exports provided: IncompatibleActionError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncompatibleActionError", function() { return IncompatibleActionError; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
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


class IncompatibleActionError extends Error {
  constructor() {
    super(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('uiActions.errors.incompatibleAction', {
      defaultMessage: 'Action is incompatible'
    }));
    _defineProperty(this, "code", 'INCOMPATIBLE_ACTION');
  }
}

/***/ }),

/***/ "./public/actions/index.ts":
/*!*********************************!*\
  !*** ./public/actions/index.ts ***!
  \*********************************/
/*! exports provided: ActionInternal, createAction, IncompatibleActionError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./public/actions/action.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _action_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action_internal */ "./public/actions/action_internal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionInternal", function() { return _action_internal__WEBPACK_IMPORTED_MODULE_1__["ActionInternal"]; });

/* harmony import */ var _create_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_action */ "./public/actions/create_action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return _create_action__WEBPACK_IMPORTED_MODULE_2__["createAction"]; });

/* harmony import */ var _incompatible_action_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./incompatible_action_error */ "./public/actions/incompatible_action_error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IncompatibleActionError", function() { return _incompatible_action_error__WEBPACK_IMPORTED_MODULE_3__["IncompatibleActionError"]; });

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

/***/ "./public/context_menu/build_eui_context_menu_panels.tsx":
/*!***************************************************************!*\
  !*** ./public/context_menu/build_eui_context_menu_panels.tsx ***!
  \***************************************************************/
/*! exports provided: defaultTitle, txtMore, buildContextMenuForActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTitle", function() { return defaultTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "txtMore", function() { return txtMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildContextMenuForActions", function() { return buildContextMenuForActions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__);
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





const defaultTitle = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('uiActions.actionPanel.title', {
  defaultMessage: '옵션'
});
const txtMore = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('uiActions.actionPanel.more', {
  defaultMessage: 'More'
});
const onClick = (action, context, close) => event => {
  if (event.currentTarget instanceof HTMLAnchorElement) {
    // from react-router's <Link/>
    if (!event.defaultPrevented &&
    // onClick prevented default
    event.button === 0 && (
    // ignore everything but left clicks
    !event.currentTarget.target || event.currentTarget.target === '_self') &&
    // let browser handle "target=_blank" etc.
    !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) // ignore clicks with modifier keys
    ) {
      event.preventDefault();
      action.execute(context);
    }
  } else action.execute(context);
  close();
};

/**
 * This method adds "More" item to panels, which have more than 4 items; and
 * moves all items after the thrird one into that "More" sub-menu.
 */
const wrapMainPanelItemsIntoSubmenu = (panels, id) => {
  const panel = panels[id];
  if (!panel) return;
  const maxItemsBeforeWrapping = 4;
  if (!panel.items) return;
  if (panel.items.length <= maxItemsBeforeWrapping) return;
  const visibleItems = panel.items.slice(0, 3);
  const itemsInSubmenu = panel.items.slice(3);
  const morePanelId = panel.id + '__more';
  const more = {
    name: txtMore,
    panel: morePanelId,
    icon: 'boxesHorizontal',
    'data-test-subj': `embeddablePanelMore-${id}`,
    _order: -1
  };
  panel.items = [...visibleItems, more];
  const subPanel = {
    id: morePanelId,
    title: panel.title || defaultTitle,
    items: itemsInSubmenu
  };
  panels[morePanelId] = subPanel;
};
const removeItemMetaFields = items => {
  const euiItems = [];
  for (const item of items) {
    const {
      _order: omit,
      _title: omit2,
      ...rest
    } = item;
    euiItems.push(rest);
  }
  return euiItems;
};
const removePanelMetaFields = panels => {
  const euiPanels = [];
  for (const panel of panels) {
    const {
      _level: omit,
      _icon: omit2,
      _category: omit3,
      _order: omit4,
      ...rest
    } = panel;
    euiPanels.push({
      ...rest,
      items: removeItemMetaFields(rest.items)
    });
  }
  return euiPanels;
};
/**
 * Transforms an array of Actions to the shape EuiContextMenuPanel expects.
 */
async function buildContextMenuForActions({
  actions,
  title = defaultTitle,
  closeMenu = () => {}
}) {
  const panels = {
    // This is the first panel which links out to all others via items property
    mainMenu: {
      id: 'mainMenu',
      title,
      items: []
    }
  };
  const promises = actions.map(async item => {
    const {
      action
    } = item;
    const context = {
      ...item.context,
      trigger: item.trigger
    };
    const isCompatible = await item.action.isCompatible(context);
    if (!isCompatible) return;

    // Reference to the last/parent/upper group.
    // Groups are provided in order of parent to children.
    let parentGroupId = '';
    if (action.grouping) {
      for (let i = 0; i < action.grouping.length; i++) {
        const group = action.grouping[i];
        const groupId = group.id;

        // If a panel does not exist for the current group, then create it
        if (!panels[groupId]) {
          const name = group.getDisplayName ? group.getDisplayName(context) : group.id;

          // Create panel for group
          panels[groupId] = {
            id: groupId,
            title: name,
            items: [],
            _level: i,
            _icon: group.getIconType ? group.getIconType(context) : 'empty',
            _category: group.category,
            _order: group.order
          };

          // If there are multiple groups and this is not the first group,
          // then add an item to the parent group relating to this group
          if (parentGroupId) {
            panels[parentGroupId].items.push({
              name,
              panel: groupId,
              icon: group.getIconType ? group.getIconType(context) : 'empty',
              _order: group.order || 0,
              _title: group.getDisplayName ? group.getDisplayName(context) : ''
            });
          }
        }

        // Save the current group, because it will be used as the parent group
        // for adding items to it for any additional groups in the array
        parentGroupId = groupId;
      }
    }

    // Add a context menu item for this action so it shows up on a context menu panel.
    // We add this within the parent group or default to the mainMenu panel.
    panels[parentGroupId || 'mainMenu'].items.push({
      name: action.MenuItem ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Object(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_3__["uiToReactComponent"])(action.MenuItem), {
        context
      }) : action.getDisplayName(context),
      icon: action.getIconType(context),
      'data-test-subj': `embeddablePanelAction-${action.id}`,
      onClick: onClick(action, context, closeMenu),
      href: action.getHref ? await action.getHref(context) : undefined,
      _order: action.order || 0,
      _title: action.getDisplayName(context)
    });
  });
  await Promise.all(promises);

  // For each panel, sort items by order and title
  for (const panel of Object.values(panels)) {
    const items = panel.items.filter(Boolean);
    panel.items = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.sortBy(items, a => {
      var _a$_order;
      return -1 * ((_a$_order = a._order) !== null && _a$_order !== void 0 ? _a$_order : 0);
    }, a => a._title);
  }

  // On the mainMenu, before adding in items for other groups, the first 4 items are shown.
  // Any additional items are hidden behind a "more" item
  wrapMainPanelItemsIntoSubmenu(panels, 'mainMenu');

  // This will be used to store items that eventually are placed into the
  // mainMenu panel. Specifying a category allows for placing groups into the
  // mainMenu so they appear without the separator between them.
  const categories = {};
  for (const panel of Object.values(panels)) {
    // Do nothing if not root-level panel, such as the parent of a group
    if (panel._level !== 0) {
      continue;
    }

    // Proceed to create mainMenu item for this panel

    // If a category is specified, store either a link to the panel or the
    // item within to that category. We will deal with the category after
    // looping through all panels.
    if (panel._category) {
      // Create array to store category items
      if (!categories[panel._category]) {
        categories[panel._category] = [];
      }

      // If multiple items in the panel, store a link to this panel into the category.
      // Otherwise, just store the single item into the category.
      if (panel.items.length > 1) {
        categories[panel._category].push({
          order: panel._order,
          items: [{
            name: panel.title || panel.id,
            icon: panel._icon || 'empty',
            panel: panel.id
          }]
        });
      } else {
        categories[panel._category].push({
          order: panel._order || 0,
          items: panel.items
        });
      }
    } else {
      // If no category, continue with adding items to the mainMenu

      // Add separator with unique key if needed
      if (panels.mainMenu.items.length) {
        panels.mainMenu.items.push({
          isSeparator: true,
          key: `${panel.id}separator`
        });
      }

      // If a panel has more than one child, then allow items to be grouped
      // and link to it in the mainMenu. Otherwise, link to the single item.
      // Note: this only happens on the root level panels, not for inner groups.
      if (panel.items.length > 1) {
        panels.mainMenu.items.push({
          name: panel.title || panel.id,
          icon: panel._icon || 'empty',
          panel: panel.id
        });
      } else {
        panels.mainMenu.items.push(...panel.items);
      }
    }
  }

  // For each category, add a separator before each one and then add category items.
  // This is for the mainMenu panel.
  Object.keys(categories).forEach(key => {
    // Get the items sorted by group order, allowing for groups within categories
    // to be ordered. A category consists of an order and its items.
    // Higher orders are sorted to the top.
    const sortedEntries = categories[key].sort((a, b) => b.order - a.order);
    const sortedItems = sortedEntries.reduce((items, category) => [...items, ...category.items], []);

    // Add separator with unique key if needed
    if (panels.mainMenu.items.length) {
      panels.mainMenu.items.push({
        isSeparator: true,
        key: `${key}separator`
      });
    }
    panels.mainMenu.items.push(...sortedItems);
  });
  const panelList = Object.values(panels);
  return removePanelMetaFields(panelList);
}

/***/ }),

/***/ "./public/context_menu/index.ts":
/*!**************************************!*\
  !*** ./public/context_menu/index.ts ***!
  \**************************************/
/*! exports provided: buildContextMenuForActions, openContextMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _build_eui_context_menu_panels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build_eui_context_menu_panels */ "./public/context_menu/build_eui_context_menu_panels.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildContextMenuForActions", function() { return _build_eui_context_menu_panels__WEBPACK_IMPORTED_MODULE_0__["buildContextMenuForActions"]; });

/* harmony import */ var _open_context_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./open_context_menu */ "./public/context_menu/open_context_menu.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openContextMenu", function() { return _open_context_menu__WEBPACK_IMPORTED_MODULE_1__["openContextMenu"]; });

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

/***/ "./public/context_menu/open_context_menu.tsx":
/*!***************************************************!*\
  !*** ./public/context_menu/open_context_menu.tsx ***!
  \***************************************************/
/*! exports provided: createInteractionPositionTracker, openContextMenu, ContextMenuSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInteractionPositionTracker", function() { return createInteractionPositionTracker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openContextMenu", function() { return openContextMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuSession", function() { return ContextMenuSession; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! events */ "../../../node_modules/node-libs-browser/node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
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





let activeSession = null;
const CONTAINER_ID = 'contextMenu-container';

/**
 * Tries to find best position for opening context menu using mousemove and click event
 * Returned position is relative to document
 */
function createInteractionPositionTracker() {
  let lastMouseX = 0;
  let lastMouseY = 0;
  const lastClicks = [];
  const MAX_LAST_CLICKS = 10;

  /**
   * Track both `mouseup` and `click`
   * `mouseup` is for clicks and brushes with mouse
   * `click` is a fallback for keyboard interactions
   */
  document.addEventListener('mouseup', onClick, true);
  document.addEventListener('click', onClick, true);
  document.addEventListener('mousemove', onMouseUpdate, {
    passive: true
  });
  document.addEventListener('mouseenter', onMouseUpdate, {
    passive: true
  });
  function onClick(event) {
    lastClicks.push({
      el: event.target,
      mouseX: event.clientX,
      mouseY: event.clientY
    });
    if (lastClicks.length > MAX_LAST_CLICKS) {
      lastClicks.shift();
    }
  }
  function onMouseUpdate(event) {
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
  }
  return {
    resolveLastPosition: () => {
      const lastClick = [...lastClicks].reverse().find(({
        el
      }) => el && document.body.contains(el));
      if (!lastClick) {
        // fallback to last mouse position
        return {
          x: lastMouseX,
          y: lastMouseY
        };
      }
      const {
        top,
        left,
        bottom,
        right
      } = lastClick.el.getBoundingClientRect();
      const mouseX = lastClick.mouseX;
      const mouseY = lastClick.mouseY;
      if (top <= mouseY && bottom >= mouseY && left <= mouseX && right >= mouseX) {
        // click was inside target element
        return {
          x: mouseX,
          y: mouseY
        };
      } else {
        // keyboard edge case. no cursor position. use target element position instead
        return {
          x: left + (right - left) / 2,
          y: bottom
        };
      }
    }
  };
}
const {
  resolveLastPosition
} = createInteractionPositionTracker();
function getOrCreateContainerElement() {
  let container = document.getElementById(CONTAINER_ID);
  let {
    x,
    y
  } = resolveLastPosition();
  y = y + window.scrollY;
  x = x + window.scrollX;
  if (!container) {
    container = document.createElement('div');
    container.style.left = x + 'px';
    container.style.top = y + 'px';
    container.style.position = 'absolute';

    // EUI tooltip uses 9000
    // have to make it larger to display menu on top of tooltips from charts
    container.style.zIndex = '9999';
    container.id = CONTAINER_ID;
    document.body.appendChild(container);
  } else {
    container.style.left = x + 'px';
    container.style.top = y + 'px';
  }
  return container;
}

/**
 * A FlyoutSession describes the session of one opened flyout panel. It offers
 * methods to close the flyout panel again. If you open a flyout panel you should make
 * sure you call {@link ContextMenuSession#close} when it should be closed.
 * Since a flyout could also be closed without calling this method (e.g. because
 * the user closes it), you must listen to the "closed" event on this instance.
 * It will be emitted whenever the flyout will be closed and you should throw
 * away your reference to this instance whenever you receive that event.
 * @extends EventEmitter
 */
class ContextMenuSession extends events__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"] {
  /**
   * Closes the opened flyout as long as it's still the open one.
   * If this is not the active session anymore, this method won't do anything.
   * If this session was still active and a flyout was closed, the 'closed'
   * event will be emitted on this FlyoutSession instance.
   */
  close() {
    if (activeSession === this) {
      const container = document.getElementById(CONTAINER_ID);
      if (container) {
        react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.unmountComponentAtNode(container);
        this.emit('closed');
      }
    }
  }
}

/**
 * Opens a flyout panel with the given component inside. You can use
 * {@link ContextMenuSession#close} on the return value to close the flyout.
 *
 * @param flyoutChildren - Mounts the children inside a fly out panel
 * @return {FlyoutSession} The session instance for the opened flyout panel.
 */
function openContextMenu(panels, props = {}) {
  // If there is an active inspector session close it before opening a new one.
  if (activeSession) {
    activeSession.close();
  }
  const container = getOrCreateContainerElement();
  const session = activeSession = new ContextMenuSession();
  const onClose = () => {
    if (props.onClose) {
      props.onClose();
    }
    session.close();
  };
  react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPopover"], {
    className: "embPanel__optionsMenuPopover",
    button: container,
    isOpen: true,
    closePopover: onClose,
    panelPaddingSize: "none",
    anchorPosition: "downRight",
    ownFocus: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenu"], {
    initialPanelId: "mainMenu",
    panels: panels,
    "data-test-subj": props['data-test-subj']
  })), container);
  return session;
}


/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! exports provided: plugin, UiActionsSetup, UiActionsStart, UiActionsServiceParams, UiActionsService, Action, UiActionsActionDefinition, createAction, IncompatibleActionError, buildContextMenuForActions, UiActionsPresentable, UiActionsPresentableGrouping, Trigger, TriggerContext, SELECT_RANGE_TRIGGER, selectRangeTrigger, VALUE_CLICK_TRIGGER, valueClickTrigger, APPLY_FILTER_TRIGGER, applyFilterTrigger, VISUALIZE_FIELD_TRIGGER, visualizeFieldTrigger, VISUALIZE_GEO_FIELD_TRIGGER, visualizeGeoFieldTrigger, EXTERNAL_ACTION_TRIGGER, externalActionTrigger, TriggerContextMapping, TriggerId, ActionContextMapping, ActionType, VisualizeFieldContext, ACTION_VISUALIZE_FIELD, ACTION_VISUALIZE_GEO_FIELD, ACTION_VISUALIZE_LENS_FIELD, ActionByType, ActionDefinitionByType, ActionExecutionContext, ActionExecutionMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiActionsSetup", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["UiActionsSetup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiActionsStart", function() { return _plugin__WEBPACK_IMPORTED_MODULE_0__["UiActionsStart"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service */ "./public/service/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiActionsServiceParams", function() { return _service__WEBPACK_IMPORTED_MODULE_1__["UiActionsServiceParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiActionsService", function() { return _service__WEBPACK_IMPORTED_MODULE_1__["UiActionsService"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./public/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["Action"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiActionsActionDefinition", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["ActionDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAction", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["createAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IncompatibleActionError", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["IncompatibleActionError"]; });

/* harmony import */ var _context_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context_menu */ "./public/context_menu/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildContextMenuForActions", function() { return _context_menu__WEBPACK_IMPORTED_MODULE_3__["buildContextMenuForActions"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./public/util/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiActionsPresentable", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["Presentable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiActionsPresentableGrouping", function() { return _util__WEBPACK_IMPORTED_MODULE_4__["PresentableGrouping"]; });

/* harmony import */ var _triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./triggers */ "./public/triggers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return _triggers__WEBPACK_IMPORTED_MODULE_5__["Trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TriggerContext", function() { return _triggers__WEBPACK_IMPORTED_MODULE_5__["TriggerContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_RANGE_TRIGGER", function() { return _triggers__WEBPACK_IMPORTED_MODULE_5__["SELECT_RANGE_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRangeTrigger", function() { return _triggers__WEBPACK_IMPORTED_MODULE_5__["selectRangeTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VALUE_CLICK_TRIGGER", function() { return _triggers__WEBPACK_IMPORTED_MODULE_5__["VALUE_CLICK_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueClickTrigger", function() { return _triggers__WEBPACK_IMPORTED_MODULE_5__["valueClickTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APPLY_FILTER_TRIGGER", function() { return _triggers__WEBPACK_IMPORTED_MODULE_5__["APPLY_FILTER_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyFilterTrigger", function() { return _triggers__WEBPACK_IMPORTED_MODULE_5__["applyFilterTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VISUALIZE_FIELD_TRIGGER", function() { return _triggers__WEBPACK_IMPORTED_MODULE_5__["VISUALIZE_FIELD_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visualizeFieldTrigger", function() { return _triggers__WEBPACK_IMPORTED_MODULE_5__["visualizeFieldTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VISUALIZE_GEO_FIELD_TRIGGER", function() { return _triggers__WEBPACK_IMPORTED_MODULE_5__["VISUALIZE_GEO_FIELD_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visualizeGeoFieldTrigger", function() { return _triggers__WEBPACK_IMPORTED_MODULE_5__["visualizeGeoFieldTrigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXTERNAL_ACTION_TRIGGER", function() { return _triggers__WEBPACK_IMPORTED_MODULE_5__["EXTERNAL_ACTION_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "externalActionTrigger", function() { return _triggers__WEBPACK_IMPORTED_MODULE_5__["externalActionTrigger"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./public/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TriggerContextMapping", function() { return _types__WEBPACK_IMPORTED_MODULE_6__["TriggerContextMapping"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TriggerId", function() { return _types__WEBPACK_IMPORTED_MODULE_6__["TriggerId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionContextMapping", function() { return _types__WEBPACK_IMPORTED_MODULE_6__["ActionContextMapping"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return _types__WEBPACK_IMPORTED_MODULE_6__["ActionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VisualizeFieldContext", function() { return _types__WEBPACK_IMPORTED_MODULE_6__["VisualizeFieldContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_VISUALIZE_FIELD", function() { return _types__WEBPACK_IMPORTED_MODULE_6__["ACTION_VISUALIZE_FIELD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_VISUALIZE_GEO_FIELD", function() { return _types__WEBPACK_IMPORTED_MODULE_6__["ACTION_VISUALIZE_GEO_FIELD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACTION_VISUALIZE_LENS_FIELD", function() { return _types__WEBPACK_IMPORTED_MODULE_6__["ACTION_VISUALIZE_LENS_FIELD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionByType", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["ActionByType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionDefinitionByType", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["ActionDefinitionByType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionExecutionContext", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["ActionExecutionContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionExecutionMeta", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["ActionExecutionMeta"]; });

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
  return new _plugin__WEBPACK_IMPORTED_MODULE_0__["UiActionsPlugin"](initializerContext);
}









/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! exports provided: UiActionsPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiActionsPlugin", function() { return UiActionsPlugin; });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ "./public/service/index.ts");
/* harmony import */ var _triggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./triggers */ "./public/triggers/index.ts");
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



class UiActionsPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "service", new _service__WEBPACK_IMPORTED_MODULE_0__["UiActionsService"]());
  }
  setup(core) {
    this.service.registerTrigger(_triggers__WEBPACK_IMPORTED_MODULE_1__["selectRangeTrigger"]);
    this.service.registerTrigger(_triggers__WEBPACK_IMPORTED_MODULE_1__["valueClickTrigger"]);
    this.service.registerTrigger(_triggers__WEBPACK_IMPORTED_MODULE_1__["applyFilterTrigger"]);
    this.service.registerTrigger(_triggers__WEBPACK_IMPORTED_MODULE_1__["visualizeFieldTrigger"]);
    this.service.registerTrigger(_triggers__WEBPACK_IMPORTED_MODULE_1__["visualizeGeoFieldTrigger"]);
    return this.service;
  }
  start(core) {
    return this.service;
  }
  stop() {
    this.service.clear();
  }
}

/***/ }),

/***/ "./public/service/index.ts":
/*!*********************************!*\
  !*** ./public/service/index.ts ***!
  \*********************************/
/*! exports provided: UiActionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_actions_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui_actions_service */ "./public/service/ui_actions_service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiActionsService", function() { return _ui_actions_service__WEBPACK_IMPORTED_MODULE_0__["UiActionsService"]; });

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

/***/ "./public/service/ui_actions_execution_service.ts":
/*!********************************************************!*\
  !*** ./public/service/ui_actions_execution_service.ts ***!
  \********************************************************/
/*! exports provided: UiActionsExecutionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiActionsExecutionService", function() { return UiActionsExecutionService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../opensearch_dashboards_utils/public */ "plugin/opensearchDashboardsUtils/public");
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context_menu */ "./public/context_menu/index.ts");
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




class UiActionsExecutionService {
  constructor() {
    _defineProperty(this, "batchingQueue", []);
    _defineProperty(this, "pendingTasks", new Set());
  }
  async execute({
    action,
    context,
    trigger
  }) {
    var _await$action$shouldA, _action$shouldAutoExe;
    const shouldBatch = (_await$action$shouldA = !(await ((_action$shouldAutoExe = action.shouldAutoExecute) === null || _action$shouldAutoExe === void 0 ? void 0 : _action$shouldAutoExe.call(action, {
      ...context,
      trigger
    })))) !== null && _await$action$shouldA !== void 0 ? _await$action$shouldA : false;
    const task = {
      action,
      context,
      trigger,
      defer: Object(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_1__["defer"])()
    };
    if (shouldBatch) {
      this.batchingQueue.push(task);
    } else {
      this.pendingTasks.add(task);
      try {
        await action.execute({
          ...context,
          trigger
        });
        this.pendingTasks.delete(task);
      } catch (e) {
        this.pendingTasks.delete(task);
        throw new Error(e);
      }
    }
    this.scheduleFlush();
    return task.defer.promise;
  }
  scheduleFlush() {
    /**
     * Have to delay at least until next macro task
     * Otherwise chain:
     * Trigger -> await action.execute() -> trigger -> action
     * isn't batched
     *
     * This basically needed to support a chain of scheduled micro tasks (async/awaits) within uiActions code
     */
    setTimeout(() => {
      if (this.pendingTasks.size === 0) {
        const tasks = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniqBy"])(this.batchingQueue, t => t.action.id);
        if (tasks.length === 1) {
          this.executeSingleTask(tasks[0]);
        }
        if (tasks.length > 1) {
          this.executeMultipleActions(tasks);
        }
        this.batchingQueue.splice(0, this.batchingQueue.length);
      }
    }, 0);
  }
  async executeSingleTask({
    context,
    action,
    defer,
    trigger
  }) {
    try {
      await action.execute({
        ...context,
        trigger
      });
      defer.resolve();
    } catch (e) {
      defer.reject(e);
    }
  }
  async executeMultipleActions(tasks) {
    const panels = await Object(_context_menu__WEBPACK_IMPORTED_MODULE_2__["buildContextMenuForActions"])({
      actions: tasks.map(({
        action,
        context,
        trigger
      }) => ({
        action,
        context,
        trigger
      })),
      title: '',
      // intentionally don't have any title
      closeMenu: () => {
        tasks.forEach(t => t.defer.resolve());
        session.close();
      }
    });
    const session = Object(_context_menu__WEBPACK_IMPORTED_MODULE_2__["openContextMenu"])(panels, {
      'data-test-subj': 'multipleActionsContextMenu'
    });
  }
}

/***/ }),

/***/ "./public/service/ui_actions_service.ts":
/*!**********************************************!*\
  !*** ./public/service/ui_actions_service.ts ***!
  \**********************************************/
/*! exports provided: UiActionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiActionsService", function() { return UiActionsService; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./public/actions/index.ts");
/* harmony import */ var _triggers_trigger_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../triggers/trigger_internal */ "./public/triggers/trigger_internal.ts");
/* harmony import */ var _ui_actions_execution_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui_actions_execution_service */ "./public/service/ui_actions_execution_service.ts");
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




class UiActionsService {
  constructor({
    triggers: _triggers = new Map(),
    actions: _actions = new Map(),
    triggerToActions: _triggerToActions = new Map()
  } = {}) {
    _defineProperty(this, "executionService", new _ui_actions_execution_service__WEBPACK_IMPORTED_MODULE_2__["UiActionsExecutionService"]());
    _defineProperty(this, "triggers", void 0);
    _defineProperty(this, "actions", void 0);
    _defineProperty(this, "triggerToActions", void 0);
    _defineProperty(this, "registerTrigger", trigger => {
      if (this.triggers.has(trigger.id)) {
        throw new Error(`Trigger [trigger.id = ${trigger.id}] already registered.`);
      }
      const triggerInternal = new _triggers_trigger_internal__WEBPACK_IMPORTED_MODULE_1__["TriggerInternal"](this, trigger);
      this.triggers.set(trigger.id, triggerInternal);
      this.triggerToActions.set(trigger.id, []);
    });
    _defineProperty(this, "getTrigger", triggerId => {
      const trigger = this.triggers.get(triggerId);
      if (!trigger) {
        throw new Error(`Trigger [triggerId = ${triggerId}] does not exist.`);
      }
      return trigger.contract;
    });
    _defineProperty(this, "getTriggers", () => {
      return this.triggers;
    });
    _defineProperty(this, "registerAction", definition => {
      if (this.actions.has(definition.id)) {
        throw new Error(`Action [action.id = ${definition.id}] already registered.`);
      }
      const action = new _actions__WEBPACK_IMPORTED_MODULE_0__["ActionInternal"](definition);
      this.actions.set(action.id, action);
      return action;
    });
    _defineProperty(this, "unregisterAction", actionId => {
      if (!this.actions.has(actionId)) {
        throw new Error(`Action [action.id = ${actionId}] is not registered.`);
      }
      this.actions.delete(actionId);
    });
    _defineProperty(this, "hasAction", actionId => {
      return this.actions.has(actionId);
    });
    _defineProperty(this, "attachAction", (triggerId, actionId) => {
      const trigger = this.triggers.get(triggerId);
      if (!trigger) {
        throw new Error(`No trigger [triggerId = ${triggerId}] exists, for attaching action [actionId = ${actionId}].`);
      }
      const actionIds = this.triggerToActions.get(triggerId);
      if (!actionIds.find(id => id === actionId)) {
        this.triggerToActions.set(triggerId, [...actionIds, actionId]);
      }
    });
    _defineProperty(this, "detachAction", (triggerId, actionId) => {
      const trigger = this.triggers.get(triggerId);
      if (!trigger) {
        throw new Error(`No trigger [triggerId = ${triggerId}] exists, for detaching action [actionId = ${actionId}].`);
      }
      const actionIds = this.triggerToActions.get(triggerId);
      this.triggerToActions.set(triggerId, actionIds.filter(id => id !== actionId));
    });
    /**
     * `addTriggerAction` is similar to `attachAction` as it attaches action to a
     * trigger, but it also registers the action, if it has not been registered, yet.
     *
     * `addTriggerAction` also infers better typing of the `action` argument.
     */
    _defineProperty(this, "addTriggerAction", (triggerId, action) => {
      if (!this.actions.has(action.id)) this.registerAction(action);
      this.attachAction(triggerId, action.id);
    });
    _defineProperty(this, "getAction", id => {
      if (!this.actions.has(id)) {
        throw new Error(`Action [action.id = ${id}] not registered.`);
      }
      return this.actions.get(id);
    });
    _defineProperty(this, "getTriggerActions", triggerId => {
      // This line checks if trigger exists, otherwise throws.
      this.getTrigger(triggerId);
      const actionIds = this.triggerToActions.get(triggerId);
      const actions = actionIds.map(actionId => this.actions.get(actionId)).filter(Boolean);
      return actions;
    });
    _defineProperty(this, "getTriggerCompatibleActions", async (triggerId, context) => {
      const actions = this.getTriggerActions(triggerId);
      const isCompatibles = await Promise.all(actions.map(action => action.isCompatible({
        ...context,
        trigger: this.getTrigger(triggerId)
      })));
      return actions.reduce((acc, action, i) => isCompatibles[i] ? [...acc, action] : acc, []);
    });
    /**
     * @deprecated
     *
     * Use `plugins.uiActions.getTrigger(triggerId).exec(params)` instead.
     */
    _defineProperty(this, "executeTriggerActions", async (triggerId, context) => {
      const trigger = this.getTrigger(triggerId);
      await trigger.exec(context);
    });
    /**
     * Removes all registered triggers and actions.
     */
    _defineProperty(this, "clear", () => {
      this.actions.clear();
      this.triggers.clear();
      this.triggerToActions.clear();
    });
    /**
     * "Fork" a separate instance of `UiActionsService` that inherits all existing
     * triggers and actions, but going forward all new triggers and actions added
     * to this instance of `UiActionsService` are only available within this instance.
     */
    _defineProperty(this, "fork", () => {
      const triggers = new Map();
      const actions = new Map();
      const triggerToActions = new Map();
      for (const [key, value] of this.triggers.entries()) triggers.set(key, value);
      for (const [key, value] of this.actions.entries()) actions.set(key, value);
      for (const [key, value] of this.triggerToActions.entries()) triggerToActions.set(key, [...value]);
      return new UiActionsService({
        triggers,
        actions,
        triggerToActions
      });
    });
    this.triggers = _triggers;
    this.actions = _actions;
    this.triggerToActions = _triggerToActions;
  }
}

/***/ }),

/***/ "./public/triggers/apply_filter_trigger.ts":
/*!*************************************************!*\
  !*** ./public/triggers/apply_filter_trigger.ts ***!
  \*************************************************/
/*! exports provided: APPLY_FILTER_TRIGGER, applyFilterTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLY_FILTER_TRIGGER", function() { return APPLY_FILTER_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyFilterTrigger", function() { return applyFilterTrigger; });
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


const APPLY_FILTER_TRIGGER = 'FILTER_TRIGGER';
const applyFilterTrigger = {
  id: APPLY_FILTER_TRIGGER,
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('uiActions.triggers.applyFilterTitle', {
    defaultMessage: 'Apply filter'
  }),
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('uiActions.triggers.applyFilterDescription', {
    defaultMessage: 'When OpenSearch Dashboards filter is applied. Could be a single value or a range filter.'
  })
};

/***/ }),

/***/ "./public/triggers/default_trigger.ts":
/*!********************************************!*\
  !*** ./public/triggers/default_trigger.ts ***!
  \********************************************/
/*! exports provided: DEFAULT_TRIGGER, defaultTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TRIGGER", function() { return DEFAULT_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTrigger", function() { return defaultTrigger; });
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

const DEFAULT_TRIGGER = '';
const defaultTrigger = {
  id: DEFAULT_TRIGGER,
  title: 'Unknown',
  description: 'Unknown trigger.'
};

/***/ }),

/***/ "./public/triggers/external_action_trigger.ts":
/*!****************************************************!*\
  !*** ./public/triggers/external_action_trigger.ts ***!
  \****************************************************/
/*! exports provided: EXTERNAL_ACTION_TRIGGER, externalActionTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTERNAL_ACTION_TRIGGER", function() { return EXTERNAL_ACTION_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "externalActionTrigger", function() { return externalActionTrigger; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


const EXTERNAL_ACTION_TRIGGER = 'EXTERNAL_ACTION_TRIGGER';
const externalActionTrigger = {
  id: EXTERNAL_ACTION_TRIGGER,
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('uiActions.triggers.externalActionTitle', {
    defaultMessage: 'Single click'
  }),
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('uiActions.triggers.externalActionDescription', {
    defaultMessage: 'A data point click on the visualization used to trigger external action like show flyout, etc.'
  })
};

/***/ }),

/***/ "./public/triggers/index.ts":
/*!**********************************!*\
  !*** ./public/triggers/index.ts ***!
  \**********************************/
/*! exports provided: TriggerContract, TriggerInternal, SELECT_RANGE_TRIGGER, selectRangeTrigger, VALUE_CLICK_TRIGGER, valueClickTrigger, APPLY_FILTER_TRIGGER, applyFilterTrigger, VISUALIZE_FIELD_TRIGGER, visualizeFieldTrigger, VISUALIZE_GEO_FIELD_TRIGGER, visualizeGeoFieldTrigger, EXTERNAL_ACTION_TRIGGER, externalActionTrigger, DEFAULT_TRIGGER, defaultTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trigger */ "./public/triggers/trigger.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _trigger_contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trigger_contract */ "./public/triggers/trigger_contract.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TriggerContract", function() { return _trigger_contract__WEBPACK_IMPORTED_MODULE_1__["TriggerContract"]; });

/* harmony import */ var _trigger_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trigger_internal */ "./public/triggers/trigger_internal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TriggerInternal", function() { return _trigger_internal__WEBPACK_IMPORTED_MODULE_2__["TriggerInternal"]; });

/* harmony import */ var _select_range_trigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select_range_trigger */ "./public/triggers/select_range_trigger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_RANGE_TRIGGER", function() { return _select_range_trigger__WEBPACK_IMPORTED_MODULE_3__["SELECT_RANGE_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRangeTrigger", function() { return _select_range_trigger__WEBPACK_IMPORTED_MODULE_3__["selectRangeTrigger"]; });

/* harmony import */ var _value_click_trigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./value_click_trigger */ "./public/triggers/value_click_trigger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VALUE_CLICK_TRIGGER", function() { return _value_click_trigger__WEBPACK_IMPORTED_MODULE_4__["VALUE_CLICK_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueClickTrigger", function() { return _value_click_trigger__WEBPACK_IMPORTED_MODULE_4__["valueClickTrigger"]; });

/* harmony import */ var _apply_filter_trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apply_filter_trigger */ "./public/triggers/apply_filter_trigger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APPLY_FILTER_TRIGGER", function() { return _apply_filter_trigger__WEBPACK_IMPORTED_MODULE_5__["APPLY_FILTER_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyFilterTrigger", function() { return _apply_filter_trigger__WEBPACK_IMPORTED_MODULE_5__["applyFilterTrigger"]; });

/* harmony import */ var _visualize_field_trigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visualize_field_trigger */ "./public/triggers/visualize_field_trigger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VISUALIZE_FIELD_TRIGGER", function() { return _visualize_field_trigger__WEBPACK_IMPORTED_MODULE_6__["VISUALIZE_FIELD_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visualizeFieldTrigger", function() { return _visualize_field_trigger__WEBPACK_IMPORTED_MODULE_6__["visualizeFieldTrigger"]; });

/* harmony import */ var _visualize_geo_field_trigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visualize_geo_field_trigger */ "./public/triggers/visualize_geo_field_trigger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VISUALIZE_GEO_FIELD_TRIGGER", function() { return _visualize_geo_field_trigger__WEBPACK_IMPORTED_MODULE_7__["VISUALIZE_GEO_FIELD_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visualizeGeoFieldTrigger", function() { return _visualize_geo_field_trigger__WEBPACK_IMPORTED_MODULE_7__["visualizeGeoFieldTrigger"]; });

/* harmony import */ var _external_action_trigger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./external_action_trigger */ "./public/triggers/external_action_trigger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EXTERNAL_ACTION_TRIGGER", function() { return _external_action_trigger__WEBPACK_IMPORTED_MODULE_8__["EXTERNAL_ACTION_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "externalActionTrigger", function() { return _external_action_trigger__WEBPACK_IMPORTED_MODULE_8__["externalActionTrigger"]; });

/* harmony import */ var _default_trigger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./default_trigger */ "./public/triggers/default_trigger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TRIGGER", function() { return _default_trigger__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_TRIGGER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTrigger", function() { return _default_trigger__WEBPACK_IMPORTED_MODULE_9__["defaultTrigger"]; });

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

/***/ "./public/triggers/select_range_trigger.ts":
/*!*************************************************!*\
  !*** ./public/triggers/select_range_trigger.ts ***!
  \*************************************************/
/*! exports provided: SELECT_RANGE_TRIGGER, selectRangeTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_RANGE_TRIGGER", function() { return SELECT_RANGE_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRangeTrigger", function() { return selectRangeTrigger; });
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


const SELECT_RANGE_TRIGGER = 'SELECT_RANGE_TRIGGER';
const selectRangeTrigger = {
  id: SELECT_RANGE_TRIGGER,
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('uiActions.triggers.selectRangeTitle', {
    defaultMessage: 'Range selection'
  }),
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('uiActions.triggers.selectRangeDescription', {
    defaultMessage: 'A range of values on the visualization'
  })
};

/***/ }),

/***/ "./public/triggers/trigger.ts":
/*!************************************!*\
  !*** ./public/triggers/trigger.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/triggers/trigger_contract.ts":
/*!*********************************************!*\
  !*** ./public/triggers/trigger_contract.ts ***!
  \*********************************************/
/*! exports provided: TriggerContract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriggerContract", function() { return TriggerContract; });
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
 * This is a public representation of a trigger that is provided to other plugins.
 */
class TriggerContract {
  constructor(internal) {
    this.internal = internal;
    /**
     * Unique name of the trigger as identified in `ui_actions` plugin trigger
     * registry, such as "SELECT_RANGE_TRIGGER" or "VALUE_CLICK_TRIGGER".
     */
    _defineProperty(this, "id", void 0);
    /**
     * User friendly name of the trigger.
     */
    _defineProperty(this, "title", void 0);
    /**
     * A longer user friendly description of the trigger.
     */
    _defineProperty(this, "description", void 0);
    /**
     * Use this method to execute action attached to this trigger.
     */
    _defineProperty(this, "exec", async context => {
      await this.internal.execute(context);
    });
    this.id = this.internal.trigger.id;
    this.title = this.internal.trigger.title;
    this.description = this.internal.trigger.description;
  }
}

/***/ }),

/***/ "./public/triggers/trigger_internal.ts":
/*!*********************************************!*\
  !*** ./public/triggers/trigger_internal.ts ***!
  \*********************************************/
/*! exports provided: TriggerInternal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriggerInternal", function() { return TriggerInternal; });
/* harmony import */ var _trigger_contract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trigger_contract */ "./public/triggers/trigger_contract.ts");
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
 * Internal representation of a trigger kept for consumption only internally
 * within `ui_actions` plugin.
 */
class TriggerInternal {
  constructor(service, trigger) {
    this.service = service;
    this.trigger = trigger;
    _defineProperty(this, "contract", new _trigger_contract__WEBPACK_IMPORTED_MODULE_0__["TriggerContract"](this));
  }
  async execute(context) {
    const triggerId = this.trigger.id;
    const actions = await this.service.getTriggerCompatibleActions(triggerId, context);
    await Promise.all([actions.map(action => this.service.executionService.execute({
      action,
      context,
      trigger: this.trigger
    }))]);
  }
}

/***/ }),

/***/ "./public/triggers/value_click_trigger.ts":
/*!************************************************!*\
  !*** ./public/triggers/value_click_trigger.ts ***!
  \************************************************/
/*! exports provided: VALUE_CLICK_TRIGGER, valueClickTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUE_CLICK_TRIGGER", function() { return VALUE_CLICK_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueClickTrigger", function() { return valueClickTrigger; });
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


const VALUE_CLICK_TRIGGER = 'VALUE_CLICK_TRIGGER';
const valueClickTrigger = {
  id: VALUE_CLICK_TRIGGER,
  title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('uiActions.triggers.valueClickTitle', {
    defaultMessage: 'Single click'
  }),
  description: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('uiActions.triggers.valueClickDescription', {
    defaultMessage: 'A data point click on the visualization'
  })
};

/***/ }),

/***/ "./public/triggers/visualize_field_trigger.ts":
/*!****************************************************!*\
  !*** ./public/triggers/visualize_field_trigger.ts ***!
  \****************************************************/
/*! exports provided: VISUALIZE_FIELD_TRIGGER, visualizeFieldTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISUALIZE_FIELD_TRIGGER", function() { return VISUALIZE_FIELD_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualizeFieldTrigger", function() { return visualizeFieldTrigger; });
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

const VISUALIZE_FIELD_TRIGGER = 'VISUALIZE_FIELD_TRIGGER';
const visualizeFieldTrigger = {
  id: VISUALIZE_FIELD_TRIGGER,
  title: 'Visualize field',
  description: 'Triggered when user wants to visualize a field.'
};

/***/ }),

/***/ "./public/triggers/visualize_geo_field_trigger.ts":
/*!********************************************************!*\
  !*** ./public/triggers/visualize_geo_field_trigger.ts ***!
  \********************************************************/
/*! exports provided: VISUALIZE_GEO_FIELD_TRIGGER, visualizeGeoFieldTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISUALIZE_GEO_FIELD_TRIGGER", function() { return VISUALIZE_GEO_FIELD_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualizeGeoFieldTrigger", function() { return visualizeGeoFieldTrigger; });
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

const VISUALIZE_GEO_FIELD_TRIGGER = 'VISUALIZE_GEO_FIELD_TRIGGER';
const visualizeGeoFieldTrigger = {
  id: VISUALIZE_GEO_FIELD_TRIGGER,
  title: 'Visualize Geo field',
  description: 'Triggered when user wants to visualize a geo field.'
};

/***/ }),

/***/ "./public/types.ts":
/*!*************************!*\
  !*** ./public/types.ts ***!
  \*************************/
/*! exports provided: ACTION_VISUALIZE_FIELD, ACTION_VISUALIZE_GEO_FIELD, ACTION_VISUALIZE_LENS_FIELD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_VISUALIZE_FIELD", function() { return ACTION_VISUALIZE_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_VISUALIZE_GEO_FIELD", function() { return ACTION_VISUALIZE_GEO_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_VISUALIZE_LENS_FIELD", function() { return ACTION_VISUALIZE_LENS_FIELD; });
/* harmony import */ var _triggers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./triggers */ "./public/triggers/index.ts");
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


const DEFAULT_ACTION = '';
const ACTION_VISUALIZE_FIELD = 'ACTION_VISUALIZE_FIELD';
const ACTION_VISUALIZE_GEO_FIELD = 'ACTION_VISUALIZE_GEO_FIELD';
const ACTION_VISUALIZE_LENS_FIELD = 'ACTION_VISUALIZE_LENS_FIELD';

/***/ }),

/***/ "./public/util/index.ts":
/*!******************************!*\
  !*** ./public/util/index.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _presentable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presentable */ "./public/util/presentable.ts");
/* empty/unused harmony star reexport *//*
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

/***/ "./public/util/presentable.ts":
/*!************************************!*\
  !*** ./public/util/presentable.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


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

/***/ "lodash":
/*!*******************************************!*\
  !*** external "__osdSharedDeps__.Lodash" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __osdSharedDeps__.Lodash;

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

/***/ })

/******/ });
//# sourceMappingURL=uiActions.plugin.js.map