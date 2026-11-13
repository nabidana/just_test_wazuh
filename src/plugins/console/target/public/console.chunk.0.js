(window["console_bundle_jsonpfunction"] = window["console_bundle_jsonpfunction"] || []).push([[0],{

/***/ "../../../node_modules/raw-loader/dist/cjs.js!../../../packages/osd-ace/target/web/ace/modes/x_json/worker/x_json.ace.worker.js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/raw-loader/dist/cjs.js!/home/ubuntu/wazuh-dashboard-cert/packages/osd-ace/target/web/ace/modes/x_json/worker/x_json.ace.worker.js ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Any modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n/*\n * Licensed to Elasticsearch B.V. under one or more contributor\n * license agreements. See the NOTICE file distributed with\n * this work for additional information regarding copyright\n * ownership. Elasticsearch B.V. licenses this file to you under\n * the Apache License, Version 2.0 (the \"License\"); you may\n * not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *    http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n/* @notice\n *\n * This product includes code that is based on Ace editor, which was available\n * under a \"BSD\" license.\n *\n * Distributed under the BSD license:\n *\n * Copyright (c) 2010, Ajax.org B.V.\n * All rights reserved.\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions are met:\n *     * Redistributions of source code must retain the above copyright\n *       notice, this list of conditions and the following disclaimer.\n *     * Redistributions in binary form must reproduce the above copyright\n *       notice, this list of conditions and the following disclaimer in the\n *       documentation and/or other materials provided with the distribution.\n *     * Neither the name of Ajax.org B.V. nor the\n *       names of its contributors may be used to endorse or promote products\n *       derived from this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND\n * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED\n * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\n * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY\n * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES\n * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;\n * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND\n * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS\n * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n/* eslint-disable */\n/*\n  This file is loaded up as a blob by Brace to hand to Ace to load as Jsonp\n  (hence the redefining of everything).  It is based on the json\n  mode from the brace distro.\n\n  It is very likely that this file will be removed in future but for now it enables\n  extended JSON parsing, like e.g. \"\"\"{}\"\"\" (triple quotes)\n*/\n\"no use strict\";\n\n!function (window) {\n  function resolveModuleId(id, paths) {\n    for (var testPath = id, tail = \"\"; testPath;) {\n      var alias = paths[testPath];\n      if (\"string\" == typeof alias) return alias + tail;\n      if (alias) return alias.location.replace(/\\/*$/, \"/\") + (tail || alias.main || alias.name);\n      if (alias === !1) return \"\";\n      var i = testPath.lastIndexOf(\"/\");\n      if (-1 === i) break;\n      tail = testPath.substr(i) + tail, testPath = testPath.slice(0, i);\n    }\n    return id;\n  }\n  if (!(void 0 !== window.window && window.document || window.acequire && window.define)) {\n    window.console || (window.console = function () {\n      var msgs = Array.prototype.slice.call(arguments, 0);\n      postMessage({\n        type: \"log\",\n        data: msgs\n      });\n    }, window.console.error = window.console.warn = window.console.log = window.console.trace = window.console), window.window = window, window.ace = window, window.onerror = function (message, file, line, col, err) {\n      postMessage({\n        type: \"error\",\n        data: {\n          message: message,\n          data: err.data,\n          file: file,\n          line: line,\n          col: col,\n          stack: err.stack\n        }\n      });\n    }, window.normalizeModule = function (parentId, moduleName) {\n      if (-1 !== moduleName.indexOf(\"!\")) {\n        var chunks = moduleName.split(\"!\");\n        return window.normalizeModule(parentId, chunks[0]) + \"!\" + window.normalizeModule(parentId, chunks[1]);\n      }\n      if (\".\" == moduleName.charAt(0)) {\n        var base = parentId.split(\"/\").slice(0, -1).join(\"/\");\n        for (moduleName = (base ? base + \"/\" : \"\") + moduleName; -1 !== moduleName.indexOf(\".\") && previous != moduleName;) {\n          var previous = moduleName;\n          moduleName = moduleName.replace(/^\\.\\//, \"\").replace(/\\/\\.\\//, \"/\").replace(/[^\\/]+\\/\\.\\.\\//, \"\");\n        }\n      }\n      return moduleName;\n    }, window.acequire = function acequire(parentId, id) {\n      if (id || (id = parentId, parentId = null), !id.charAt) throw Error(\"worker.js acequire() accepts only (parentId, id) as arguments\");\n      id = window.normalizeModule(parentId, id);\n      var module = window.acequire.modules[id];\n      if (module) return module.initialized || (module.initialized = !0, module.exports = module.factory().exports), module.exports;\n      if (!window.acequire.tlns) return console.log(\"unable to load \" + id);\n      var path = resolveModuleId(id, window.acequire.tlns);\n      return \".js\" != path.slice(-3) && (path += \".js\"), window.acequire.id = id, window.acequire.modules[id] = {}, importScripts(path), window.acequire(parentId, id);\n    }, window.acequire.modules = {}, window.acequire.tlns = {}, window.define = function (id, deps, factory) {\n      if (2 == arguments.length ? (factory = deps, \"string\" != typeof id && (deps = id, id = window.acequire.id)) : 1 == arguments.length && (factory = id, deps = [], id = window.acequire.id), \"function\" != typeof factory) return window.acequire.modules[id] = {\n        exports: factory,\n        initialized: !0\n      }, void 0;\n      deps.length || (deps = [\"require\", \"exports\", \"module\"]);\n      var req = function (childId) {\n        return window.acequire(id, childId);\n      };\n      window.acequire.modules[id] = {\n        exports: {},\n        factory: function () {\n          var module = this,\n            returnExports = factory.apply(this, deps.map(function (dep) {\n              switch (dep) {\n                case \"require\":\n                  return req;\n                case \"exports\":\n                  return module.exports;\n                case \"module\":\n                  return module;\n                default:\n                  return req(dep);\n              }\n            }));\n          return returnExports && (module.exports = returnExports), module;\n        }\n      };\n    }, window.define.amd = {}, acequire.tlns = {}, window.initBaseUrls = function (topLevelNamespaces) {\n      for (var i in topLevelNamespaces) acequire.tlns[i] = topLevelNamespaces[i];\n    }, window.initSender = function () {\n      var EventEmitter = window.acequire(\"ace/lib/event_emitter\").EventEmitter,\n        oop = window.acequire(\"ace/lib/oop\"),\n        Sender = function () {};\n      return function () {\n        oop.implement(this, EventEmitter), this.callback = function (data, callbackId) {\n          postMessage({\n            type: \"call\",\n            id: callbackId,\n            data: data\n          });\n        }, this.emit = function (name, data) {\n          postMessage({\n            type: \"event\",\n            name: name,\n            data: data\n          });\n        };\n      }.call(Sender.prototype), new Sender();\n    };\n    var main = window.main = null,\n      sender = window.sender = null;\n    window.onmessage = function (e) {\n      var msg = e.data;\n      if (msg.event && sender) sender._signal(msg.event, msg.data);else if (msg.command) {\n        if (main[msg.command]) main[msg.command].apply(main, msg.args);else {\n          if (!window[msg.command]) throw Error(\"Unknown command:\" + msg.command);\n          window[msg.command].apply(window, msg.args);\n        }\n      } else if (msg.init) {\n        window.initBaseUrls(msg.tlns), acequire(\"ace/lib/es5-shim\"), sender = window.sender = window.initSender();\n        var clazz = acequire(msg.module)[msg.classname];\n        main = window.main = new clazz(sender);\n      }\n    };\n  }\n}(this), ace.define(\"ace/lib/oop\", [\"require\", \"exports\", \"module\"], function (acequire, exports) {\n  \"use strict\";\n\n  exports.inherits = function (ctor, superCtor) {\n    ctor.super_ = superCtor, ctor.prototype = Object.create(superCtor.prototype, {\n      constructor: {\n        value: ctor,\n        enumerable: !1,\n        writable: !0,\n        configurable: !0\n      }\n    });\n  }, exports.mixin = function (obj, mixin) {\n    for (var key in mixin) obj[key] = mixin[key];\n    return obj;\n  }, exports.implement = function (proto, mixin) {\n    exports.mixin(proto, mixin);\n  };\n}), ace.define(\"ace/range\", [\"require\", \"exports\", \"module\"], function (acequire, exports) {\n  \"use strict\";\n\n  var comparePoints = function (p1, p2) {\n      return p1.row - p2.row || p1.column - p2.column;\n    },\n    Range = function (startRow, startColumn, endRow, endColumn) {\n      this.start = {\n        row: startRow,\n        column: startColumn\n      }, this.end = {\n        row: endRow,\n        column: endColumn\n      };\n    };\n  (function () {\n    this.isEqual = function (range) {\n      return this.start.row === range.start.row && this.end.row === range.end.row && this.start.column === range.start.column && this.end.column === range.end.column;\n    }, this.toString = function () {\n      return \"Range: [\" + this.start.row + \"/\" + this.start.column + \"] -> [\" + this.end.row + \"/\" + this.end.column + \"]\";\n    }, this.contains = function (row, column) {\n      return 0 == this.compare(row, column);\n    }, this.compareRange = function (range) {\n      var cmp,\n        end = range.end,\n        start = range.start;\n      return cmp = this.compare(end.row, end.column), 1 == cmp ? (cmp = this.compare(start.row, start.column), 1 == cmp ? 2 : 0 == cmp ? 1 : 0) : -1 == cmp ? -2 : (cmp = this.compare(start.row, start.column), -1 == cmp ? -1 : 1 == cmp ? 42 : 0);\n    }, this.comparePoint = function (p) {\n      return this.compare(p.row, p.column);\n    }, this.containsRange = function (range) {\n      return 0 == this.comparePoint(range.start) && 0 == this.comparePoint(range.end);\n    }, this.intersects = function (range) {\n      var cmp = this.compareRange(range);\n      return -1 == cmp || 0 == cmp || 1 == cmp;\n    }, this.isEnd = function (row, column) {\n      return this.end.row == row && this.end.column == column;\n    }, this.isStart = function (row, column) {\n      return this.start.row == row && this.start.column == column;\n    }, this.setStart = function (row, column) {\n      \"object\" == typeof row ? (this.start.column = row.column, this.start.row = row.row) : (this.start.row = row, this.start.column = column);\n    }, this.setEnd = function (row, column) {\n      \"object\" == typeof row ? (this.end.column = row.column, this.end.row = row.row) : (this.end.row = row, this.end.column = column);\n    }, this.inside = function (row, column) {\n      return 0 == this.compare(row, column) ? this.isEnd(row, column) || this.isStart(row, column) ? !1 : !0 : !1;\n    }, this.insideStart = function (row, column) {\n      return 0 == this.compare(row, column) ? this.isEnd(row, column) ? !1 : !0 : !1;\n    }, this.insideEnd = function (row, column) {\n      return 0 == this.compare(row, column) ? this.isStart(row, column) ? !1 : !0 : !1;\n    }, this.compare = function (row, column) {\n      return this.isMultiLine() || row !== this.start.row ? this.start.row > row ? -1 : row > this.end.row ? 1 : this.start.row === row ? column >= this.start.column ? 0 : -1 : this.end.row === row ? this.end.column >= column ? 0 : 1 : 0 : this.start.column > column ? -1 : column > this.end.column ? 1 : 0;\n    }, this.compareStart = function (row, column) {\n      return this.start.row == row && this.start.column == column ? -1 : this.compare(row, column);\n    }, this.compareEnd = function (row, column) {\n      return this.end.row == row && this.end.column == column ? 1 : this.compare(row, column);\n    }, this.compareInside = function (row, column) {\n      return this.end.row == row && this.end.column == column ? 1 : this.start.row == row && this.start.column == column ? -1 : this.compare(row, column);\n    }, this.clipRows = function (firstRow, lastRow) {\n      if (this.end.row > lastRow) var end = {\n        row: lastRow + 1,\n        column: 0\n      };else if (firstRow > this.end.row) var end = {\n        row: firstRow,\n        column: 0\n      };\n      if (this.start.row > lastRow) var start = {\n        row: lastRow + 1,\n        column: 0\n      };else if (firstRow > this.start.row) var start = {\n        row: firstRow,\n        column: 0\n      };\n      return Range.fromPoints(start || this.start, end || this.end);\n    }, this.extend = function (row, column) {\n      var cmp = this.compare(row, column);\n      if (0 == cmp) return this;\n      if (-1 == cmp) var start = {\n        row: row,\n        column: column\n      };else var end = {\n        row: row,\n        column: column\n      };\n      return Range.fromPoints(start || this.start, end || this.end);\n    }, this.isEmpty = function () {\n      return this.start.row === this.end.row && this.start.column === this.end.column;\n    }, this.isMultiLine = function () {\n      return this.start.row !== this.end.row;\n    }, this.clone = function () {\n      return Range.fromPoints(this.start, this.end);\n    }, this.collapseRows = function () {\n      return 0 == this.end.column ? new Range(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new Range(this.start.row, 0, this.end.row, 0);\n    }, this.toScreenRange = function (session) {\n      var screenPosStart = session.documentToScreenPosition(this.start),\n        screenPosEnd = session.documentToScreenPosition(this.end);\n      return new Range(screenPosStart.row, screenPosStart.column, screenPosEnd.row, screenPosEnd.column);\n    }, this.moveBy = function (row, column) {\n      this.start.row += row, this.start.column += column, this.end.row += row, this.end.column += column;\n    };\n  }).call(Range.prototype), Range.fromPoints = function (start, end) {\n    return new Range(start.row, start.column, end.row, end.column);\n  }, Range.comparePoints = comparePoints, Range.comparePoints = function (p1, p2) {\n    return p1.row - p2.row || p1.column - p2.column;\n  }, exports.Range = Range;\n}), ace.define(\"ace/apply_delta\", [\"require\", \"exports\", \"module\"], function (acequire, exports) {\n  \"use strict\";\n\n  exports.applyDelta = function (docLines, delta) {\n    var row = delta.start.row,\n      startColumn = delta.start.column,\n      line = docLines[row] || \"\";\n    switch (delta.action) {\n      case \"insert\":\n        var lines = delta.lines;\n        if (1 === lines.length) docLines[row] = line.substring(0, startColumn) + delta.lines[0] + line.substring(startColumn);else {\n          var args = [row, 1].concat(delta.lines);\n          docLines.splice.apply(docLines, args), docLines[row] = line.substring(0, startColumn) + docLines[row], docLines[row + delta.lines.length - 1] += line.substring(startColumn);\n        }\n        break;\n      case \"remove\":\n        var endColumn = delta.end.column,\n          endRow = delta.end.row;\n        row === endRow ? docLines[row] = line.substring(0, startColumn) + line.substring(endColumn) : docLines.splice(row, endRow - row + 1, line.substring(0, startColumn) + docLines[endRow].substring(endColumn));\n    }\n  };\n}), ace.define(\"ace/lib/event_emitter\", [\"require\", \"exports\", \"module\"], function (acequire, exports) {\n  \"use strict\";\n\n  var EventEmitter = {},\n    stopPropagation = function () {\n      this.propagationStopped = !0;\n    },\n    preventDefault = function () {\n      this.defaultPrevented = !0;\n    };\n  EventEmitter._emit = EventEmitter._dispatchEvent = function (eventName, e) {\n    this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});\n    var listeners = this._eventRegistry[eventName] || [],\n      defaultHandler = this._defaultHandlers[eventName];\n    if (listeners.length || defaultHandler) {\n      \"object\" == typeof e && e || (e = {}), e.type || (e.type = eventName), e.stopPropagation || (e.stopPropagation = stopPropagation), e.preventDefault || (e.preventDefault = preventDefault), listeners = listeners.slice();\n      for (var i = 0; listeners.length > i && (listeners[i](e, this), !e.propagationStopped); i++);\n      return defaultHandler && !e.defaultPrevented ? defaultHandler(e, this) : void 0;\n    }\n  }, EventEmitter._signal = function (eventName, e) {\n    var listeners = (this._eventRegistry || {})[eventName];\n    if (listeners) {\n      listeners = listeners.slice();\n      for (var i = 0; listeners.length > i; i++) listeners[i](e, this);\n    }\n  }, EventEmitter.once = function (eventName, callback) {\n    var _self = this;\n    callback && this.addEventListener(eventName, function newCallback() {\n      _self.removeEventListener(eventName, newCallback), callback.apply(null, arguments);\n    });\n  }, EventEmitter.setDefaultHandler = function (eventName, callback) {\n    var handlers = this._defaultHandlers;\n    if (handlers || (handlers = this._defaultHandlers = {\n      _disabled_: {}\n    }), handlers[eventName]) {\n      var old = handlers[eventName],\n        disabled = handlers._disabled_[eventName];\n      disabled || (handlers._disabled_[eventName] = disabled = []), disabled.push(old);\n      var i = disabled.indexOf(callback);\n      -1 != i && disabled.splice(i, 1);\n    }\n    handlers[eventName] = callback;\n  }, EventEmitter.removeDefaultHandler = function (eventName, callback) {\n    var handlers = this._defaultHandlers;\n    if (handlers) {\n      var disabled = handlers._disabled_[eventName];\n      if (handlers[eventName] == callback) handlers[eventName], disabled && this.setDefaultHandler(eventName, disabled.pop());else if (disabled) {\n        var i = disabled.indexOf(callback);\n        -1 != i && disabled.splice(i, 1);\n      }\n    }\n  }, EventEmitter.on = EventEmitter.addEventListener = function (eventName, callback, capturing) {\n    this._eventRegistry = this._eventRegistry || {};\n    var listeners = this._eventRegistry[eventName];\n    return listeners || (listeners = this._eventRegistry[eventName] = []), -1 == listeners.indexOf(callback) && listeners[capturing ? \"unshift\" : \"push\"](callback), callback;\n  }, EventEmitter.off = EventEmitter.removeListener = EventEmitter.removeEventListener = function (eventName, callback) {\n    this._eventRegistry = this._eventRegistry || {};\n    var listeners = this._eventRegistry[eventName];\n    if (listeners) {\n      var index = listeners.indexOf(callback);\n      -1 !== index && listeners.splice(index, 1);\n    }\n  }, EventEmitter.removeAllListeners = function (eventName) {\n    this._eventRegistry && (this._eventRegistry[eventName] = []);\n  }, exports.EventEmitter = EventEmitter;\n}), ace.define(\"ace/anchor\", [\"require\", \"exports\", \"module\", \"ace/lib/oop\", \"ace/lib/event_emitter\"], function (acequire, exports) {\n  \"use strict\";\n\n  var oop = acequire(\"./lib/oop\"),\n    EventEmitter = acequire(\"./lib/event_emitter\").EventEmitter,\n    Anchor = exports.Anchor = function (doc, row, column) {\n      this.$onChange = this.onChange.bind(this), this.attach(doc), column === void 0 ? this.setPosition(row.row, row.column) : this.setPosition(row, column);\n    };\n  (function () {\n    function $pointsInOrder(point1, point2, equalPointsInOrder) {\n      var bColIsAfter = equalPointsInOrder ? point1.column <= point2.column : point1.column < point2.column;\n      return point1.row < point2.row || point1.row == point2.row && bColIsAfter;\n    }\n    function $getTransformedPoint(delta, point, moveIfEqual) {\n      var deltaIsInsert = \"insert\" == delta.action,\n        deltaRowShift = (deltaIsInsert ? 1 : -1) * (delta.end.row - delta.start.row),\n        deltaColShift = (deltaIsInsert ? 1 : -1) * (delta.end.column - delta.start.column),\n        deltaStart = delta.start,\n        deltaEnd = deltaIsInsert ? deltaStart : delta.end;\n      return $pointsInOrder(point, deltaStart, moveIfEqual) ? {\n        row: point.row,\n        column: point.column\n      } : $pointsInOrder(deltaEnd, point, !moveIfEqual) ? {\n        row: point.row + deltaRowShift,\n        column: point.column + (point.row == deltaEnd.row ? deltaColShift : 0)\n      } : {\n        row: deltaStart.row,\n        column: deltaStart.column\n      };\n    }\n    oop.implement(this, EventEmitter), this.getPosition = function () {\n      return this.$clipPositionToDocument(this.row, this.column);\n    }, this.getDocument = function () {\n      return this.document;\n    }, this.$insertRight = !1, this.onChange = function (delta) {\n      if (!(delta.start.row == delta.end.row && delta.start.row != this.row || delta.start.row > this.row)) {\n        var point = $getTransformedPoint(delta, {\n          row: this.row,\n          column: this.column\n        }, this.$insertRight);\n        this.setPosition(point.row, point.column, !0);\n      }\n    }, this.setPosition = function (row, column, noClip) {\n      var pos;\n      if (pos = noClip ? {\n        row: row,\n        column: column\n      } : this.$clipPositionToDocument(row, column), this.row != pos.row || this.column != pos.column) {\n        var old = {\n          row: this.row,\n          column: this.column\n        };\n        this.row = pos.row, this.column = pos.column, this._signal(\"change\", {\n          old: old,\n          value: pos\n        });\n      }\n    }, this.detach = function () {\n      this.document.removeEventListener(\"change\", this.$onChange);\n    }, this.attach = function (doc) {\n      this.document = doc || this.document, this.document.on(\"change\", this.$onChange);\n    }, this.$clipPositionToDocument = function (row, column) {\n      var pos = {};\n      return row >= this.document.getLength() ? (pos.row = Math.max(0, this.document.getLength() - 1), pos.column = this.document.getLine(pos.row).length) : 0 > row ? (pos.row = 0, pos.column = 0) : (pos.row = row, pos.column = Math.min(this.document.getLine(pos.row).length, Math.max(0, column))), 0 > column && (pos.column = 0), pos;\n    };\n  }).call(Anchor.prototype);\n}), ace.define(\"ace/document\", [\"require\", \"exports\", \"module\", \"ace/lib/oop\", \"ace/apply_delta\", \"ace/lib/event_emitter\", \"ace/range\", \"ace/anchor\"], function (acequire, exports) {\n  \"use strict\";\n\n  var oop = acequire(\"./lib/oop\"),\n    applyDelta = acequire(\"./apply_delta\").applyDelta,\n    EventEmitter = acequire(\"./lib/event_emitter\").EventEmitter,\n    Range = acequire(\"./range\").Range,\n    Anchor = acequire(\"./anchor\").Anchor,\n    Document = function (textOrLines) {\n      this.$lines = [\"\"], 0 === textOrLines.length ? this.$lines = [\"\"] : Array.isArray(textOrLines) ? this.insertMergedLines({\n        row: 0,\n        column: 0\n      }, textOrLines) : this.insert({\n        row: 0,\n        column: 0\n      }, textOrLines);\n    };\n  (function () {\n    oop.implement(this, EventEmitter), this.setValue = function (text) {\n      var len = this.getLength() - 1;\n      this.remove(new Range(0, 0, len, this.getLine(len).length)), this.insert({\n        row: 0,\n        column: 0\n      }, text);\n    }, this.getValue = function () {\n      return this.getAllLines().join(this.getNewLineCharacter());\n    }, this.createAnchor = function (row, column) {\n      return new Anchor(this, row, column);\n    }, this.$split = 0 === \"aaa\".split(/a/).length ? function (text) {\n      return text.replace(/\\r\\n|\\r/g, \"\\n\").split(\"\\n\");\n    } : function (text) {\n      return text.split(/\\r\\n|\\r|\\n/);\n    }, this.$detectNewLine = function (text) {\n      var match = text.match(/^.*?(\\r\\n|\\r|\\n)/m);\n      this.$autoNewLine = match ? match[1] : \"\\n\", this._signal(\"changeNewLineMode\");\n    }, this.getNewLineCharacter = function () {\n      switch (this.$newLineMode) {\n        case \"windows\":\n          return \"\\r\\n\";\n        case \"unix\":\n          return \"\\n\";\n        default:\n          return this.$autoNewLine || \"\\n\";\n      }\n    }, this.$autoNewLine = \"\", this.$newLineMode = \"auto\", this.setNewLineMode = function (newLineMode) {\n      this.$newLineMode !== newLineMode && (this.$newLineMode = newLineMode, this._signal(\"changeNewLineMode\"));\n    }, this.getNewLineMode = function () {\n      return this.$newLineMode;\n    }, this.isNewLine = function (text) {\n      return \"\\r\\n\" == text || \"\\r\" == text || \"\\n\" == text;\n    }, this.getLine = function (row) {\n      return this.$lines[row] || \"\";\n    }, this.getLines = function (firstRow, lastRow) {\n      return this.$lines.slice(firstRow, lastRow + 1);\n    }, this.getAllLines = function () {\n      return this.getLines(0, this.getLength());\n    }, this.getLength = function () {\n      return this.$lines.length;\n    }, this.getTextRange = function (range) {\n      return this.getLinesForRange(range).join(this.getNewLineCharacter());\n    }, this.getLinesForRange = function (range) {\n      var lines;\n      if (range.start.row === range.end.row) lines = [this.getLine(range.start.row).substring(range.start.column, range.end.column)];else {\n        lines = this.getLines(range.start.row, range.end.row), lines[0] = (lines[0] || \"\").substring(range.start.column);\n        var l = lines.length - 1;\n        range.end.row - range.start.row == l && (lines[l] = lines[l].substring(0, range.end.column));\n      }\n      return lines;\n    }, this.insertLines = function (row, lines) {\n      return console.warn(\"Use of document.insertLines is deprecated. Use the insertFullLines method instead.\"), this.insertFullLines(row, lines);\n    }, this.removeLines = function (firstRow, lastRow) {\n      return console.warn(\"Use of document.removeLines is deprecated. Use the removeFullLines method instead.\"), this.removeFullLines(firstRow, lastRow);\n    }, this.insertNewLine = function (position) {\n      return console.warn(\"Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.\"), this.insertMergedLines(position, [\"\", \"\"]);\n    }, this.insert = function (position, text) {\n      return 1 >= this.getLength() && this.$detectNewLine(text), this.insertMergedLines(position, this.$split(text));\n    }, this.insertInLine = function (position, text) {\n      var start = this.clippedPos(position.row, position.column),\n        end = this.pos(position.row, position.column + text.length);\n      return this.applyDelta({\n        start: start,\n        end: end,\n        action: \"insert\",\n        lines: [text]\n      }, !0), this.clonePos(end);\n    }, this.clippedPos = function (row, column) {\n      var length = this.getLength();\n      void 0 === row ? row = length : 0 > row ? row = 0 : row >= length && (row = length - 1, column = void 0);\n      var line = this.getLine(row);\n      return void 0 == column && (column = line.length), column = Math.min(Math.max(column, 0), line.length), {\n        row: row,\n        column: column\n      };\n    }, this.clonePos = function (pos) {\n      return {\n        row: pos.row,\n        column: pos.column\n      };\n    }, this.pos = function (row, column) {\n      return {\n        row: row,\n        column: column\n      };\n    }, this.$clipPosition = function (position) {\n      var length = this.getLength();\n      return position.row >= length ? (position.row = Math.max(0, length - 1), position.column = this.getLine(length - 1).length) : (position.row = Math.max(0, position.row), position.column = Math.min(Math.max(position.column, 0), this.getLine(position.row).length)), position;\n    }, this.insertFullLines = function (row, lines) {\n      row = Math.min(Math.max(row, 0), this.getLength());\n      var column = 0;\n      this.getLength() > row ? (lines = lines.concat([\"\"]), column = 0) : (lines = [\"\"].concat(lines), row--, column = this.$lines[row].length), this.insertMergedLines({\n        row: row,\n        column: column\n      }, lines);\n    }, this.insertMergedLines = function (position, lines) {\n      var start = this.clippedPos(position.row, position.column),\n        end = {\n          row: start.row + lines.length - 1,\n          column: (1 == lines.length ? start.column : 0) + lines[lines.length - 1].length\n        };\n      return this.applyDelta({\n        start: start,\n        end: end,\n        action: \"insert\",\n        lines: lines\n      }), this.clonePos(end);\n    }, this.remove = function (range) {\n      var start = this.clippedPos(range.start.row, range.start.column),\n        end = this.clippedPos(range.end.row, range.end.column);\n      return this.applyDelta({\n        start: start,\n        end: end,\n        action: \"remove\",\n        lines: this.getLinesForRange({\n          start: start,\n          end: end\n        })\n      }), this.clonePos(start);\n    }, this.removeInLine = function (row, startColumn, endColumn) {\n      var start = this.clippedPos(row, startColumn),\n        end = this.clippedPos(row, endColumn);\n      return this.applyDelta({\n        start: start,\n        end: end,\n        action: \"remove\",\n        lines: this.getLinesForRange({\n          start: start,\n          end: end\n        })\n      }, !0), this.clonePos(start);\n    }, this.removeFullLines = function (firstRow, lastRow) {\n      firstRow = Math.min(Math.max(0, firstRow), this.getLength() - 1), lastRow = Math.min(Math.max(0, lastRow), this.getLength() - 1);\n      var deleteFirstNewLine = lastRow == this.getLength() - 1 && firstRow > 0,\n        deleteLastNewLine = this.getLength() - 1 > lastRow,\n        startRow = deleteFirstNewLine ? firstRow - 1 : firstRow,\n        startCol = deleteFirstNewLine ? this.getLine(startRow).length : 0,\n        endRow = deleteLastNewLine ? lastRow + 1 : lastRow,\n        endCol = deleteLastNewLine ? 0 : this.getLine(endRow).length,\n        range = new Range(startRow, startCol, endRow, endCol),\n        deletedLines = this.$lines.slice(firstRow, lastRow + 1);\n      return this.applyDelta({\n        start: range.start,\n        end: range.end,\n        action: \"remove\",\n        lines: this.getLinesForRange(range)\n      }), deletedLines;\n    }, this.removeNewLine = function (row) {\n      this.getLength() - 1 > row && row >= 0 && this.applyDelta({\n        start: this.pos(row, this.getLine(row).length),\n        end: this.pos(row + 1, 0),\n        action: \"remove\",\n        lines: [\"\", \"\"]\n      });\n    }, this.replace = function (range, text) {\n      if (range instanceof Range || (range = Range.fromPoints(range.start, range.end)), 0 === text.length && range.isEmpty()) return range.start;\n      if (text == this.getTextRange(range)) return range.end;\n      this.remove(range);\n      var end;\n      return end = text ? this.insert(range.start, text) : range.start;\n    }, this.applyDeltas = function (deltas) {\n      for (var i = 0; deltas.length > i; i++) this.applyDelta(deltas[i]);\n    }, this.revertDeltas = function (deltas) {\n      for (var i = deltas.length - 1; i >= 0; i--) this.revertDelta(deltas[i]);\n    }, this.applyDelta = function (delta, doNotValidate) {\n      var isInsert = \"insert\" == delta.action;\n      (isInsert ? 1 >= delta.lines.length && !delta.lines[0] : !Range.comparePoints(delta.start, delta.end)) || (isInsert && delta.lines.length > 2e4 && this.$splitAndapplyLargeDelta(delta, 2e4), applyDelta(this.$lines, delta, doNotValidate), this._signal(\"change\", delta));\n    }, this.$splitAndapplyLargeDelta = function (delta, MAX) {\n      for (var lines = delta.lines, l = lines.length, row = delta.start.row, column = delta.start.column, from = 0, to = 0;;) {\n        from = to, to += MAX - 1;\n        var chunk = lines.slice(from, to);\n        if (to > l) {\n          delta.lines = chunk, delta.start.row = row + from, delta.start.column = column;\n          break;\n        }\n        chunk.push(\"\"), this.applyDelta({\n          start: this.pos(row + from, column),\n          end: this.pos(row + to, column = 0),\n          action: delta.action,\n          lines: chunk\n        }, !0);\n      }\n    }, this.revertDelta = function (delta) {\n      this.applyDelta({\n        start: this.clonePos(delta.start),\n        end: this.clonePos(delta.end),\n        action: \"insert\" == delta.action ? \"remove\" : \"insert\",\n        lines: delta.lines.slice()\n      });\n    }, this.indexToPosition = function (index, startRow) {\n      for (var lines = this.$lines || this.getAllLines(), newlineLength = this.getNewLineCharacter().length, i = startRow || 0, l = lines.length; l > i; i++) if (index -= lines[i].length + newlineLength, 0 > index) return {\n        row: i,\n        column: index + lines[i].length + newlineLength\n      };\n      return {\n        row: l - 1,\n        column: lines[l - 1].length\n      };\n    }, this.positionToIndex = function (pos, startRow) {\n      for (var lines = this.$lines || this.getAllLines(), newlineLength = this.getNewLineCharacter().length, index = 0, row = Math.min(pos.row, lines.length), i = startRow || 0; row > i; ++i) index += lines[i].length + newlineLength;\n      return index + pos.column;\n    };\n  }).call(Document.prototype), exports.Document = Document;\n}), ace.define(\"ace/lib/lang\", [\"require\", \"exports\", \"module\"], function (acequire, exports) {\n  \"use strict\";\n\n  exports.last = function (a) {\n    return a[a.length - 1];\n  }, exports.stringReverse = function (string) {\n    return string.split(\"\").reverse().join(\"\");\n  }, exports.stringRepeat = function (string, count) {\n    for (var result = \"\"; count > 0;) 1 & count && (result += string), (count >>= 1) && (string += string);\n    return result;\n  };\n  var trimBeginRegexp = /^\\s\\s*/,\n    trimEndRegexp = /\\s\\s*$/;\n  exports.stringTrimLeft = function (string) {\n    return string.replace(trimBeginRegexp, \"\");\n  }, exports.stringTrimRight = function (string) {\n    return string.replace(trimEndRegexp, \"\");\n  }, exports.copyObject = function (obj) {\n    var copy = {};\n    for (var key in obj) copy[key] = obj[key];\n    return copy;\n  }, exports.copyArray = function (array) {\n    for (var copy = [], i = 0, l = array.length; l > i; i++) copy[i] = array[i] && \"object\" == typeof array[i] ? this.copyObject(array[i]) : array[i];\n    return copy;\n  }, exports.deepCopy = function deepCopy(obj) {\n    if (\"object\" != typeof obj || !obj) return obj;\n    var copy;\n    if (Array.isArray(obj)) {\n      copy = [];\n      for (var key = 0; obj.length > key; key++) copy[key] = deepCopy(obj[key]);\n      return copy;\n    }\n    if (\"[object Object]\" !== Object.prototype.toString.call(obj)) return obj;\n    copy = {};\n    for (var key in obj) copy[key] = deepCopy(obj[key]);\n    return copy;\n  }, exports.arrayToMap = function (arr) {\n    for (var map = {}, i = 0; arr.length > i; i++) map[arr[i]] = 1;\n    return map;\n  }, exports.createMap = function (props) {\n    var map = Object.create(null);\n    for (var i in props) map[i] = props[i];\n    return map;\n  }, exports.arrayRemove = function (array, value) {\n    for (var i = 0; array.length >= i; i++) value === array[i] && array.splice(i, 1);\n  }, exports.escapeRegExp = function (str) {\n    return str.replace(/([.*+?^${}()|[\\]\\/\\\\])/g, \"\\\\$1\");\n  }, exports.escapeHTML = function (str) {\n    return str.replace(/&/g, \"&#38;\").replace(/\"/g, \"&#34;\").replace(/'/g, \"&#39;\").replace(/</g, \"&#60;\");\n  }, exports.getMatchOffsets = function (string, regExp) {\n    var matches = [];\n    return string.replace(regExp, function (str) {\n      matches.push({\n        offset: arguments[arguments.length - 2],\n        length: str.length\n      });\n    }), matches;\n  }, exports.deferredCall = function (fcn) {\n    var timer = null,\n      callback = function () {\n        timer = null, fcn();\n      },\n      deferred = function (timeout) {\n        return deferred.cancel(), timer = setTimeout(callback, timeout || 0), deferred;\n      };\n    return deferred.schedule = deferred, deferred.call = function () {\n      return this.cancel(), fcn(), deferred;\n    }, deferred.cancel = function () {\n      return clearTimeout(timer), timer = null, deferred;\n    }, deferred.isPending = function () {\n      return timer;\n    }, deferred;\n  }, exports.delayedCall = function (fcn, defaultTimeout) {\n    var timer = null,\n      callback = function () {\n        timer = null, fcn();\n      },\n      _self = function (timeout) {\n        null == timer && (timer = setTimeout(callback, timeout || defaultTimeout));\n      };\n    return _self.delay = function (timeout) {\n      timer && clearTimeout(timer), timer = setTimeout(callback, timeout || defaultTimeout);\n    }, _self.schedule = _self, _self.call = function () {\n      this.cancel(), fcn();\n    }, _self.cancel = function () {\n      timer && clearTimeout(timer), timer = null;\n    }, _self.isPending = function () {\n      return timer;\n    }, _self;\n  };\n}), ace.define(\"ace/worker/mirror\", [\"require\", \"exports\", \"module\", \"ace/range\", \"ace/document\", \"ace/lib/lang\"], function (acequire, exports) {\n  \"use strict\";\n\n  acequire(\"../range\").Range;\n  var Document = acequire(\"../document\").Document,\n    lang = acequire(\"../lib/lang\"),\n    Mirror = exports.Mirror = function (sender) {\n      this.sender = sender;\n      var doc = this.doc = new Document(\"\"),\n        deferredUpdate = this.deferredUpdate = lang.delayedCall(this.onUpdate.bind(this)),\n        _self = this;\n      sender.on(\"change\", function (e) {\n        var data = e.data;\n        if (data[0].start) doc.applyDeltas(data);else for (var i = 0; data.length > i; i += 2) {\n          if (Array.isArray(data[i + 1])) var d = {\n            action: \"insert\",\n            start: data[i],\n            lines: data[i + 1]\n          };else var d = {\n            action: \"remove\",\n            start: data[i],\n            end: data[i + 1]\n          };\n          doc.applyDelta(d, !0);\n        }\n        return _self.$timeout ? deferredUpdate.schedule(_self.$timeout) : (_self.onUpdate(), void 0);\n      });\n    };\n  (function () {\n    this.$timeout = 500, this.setTimeout = function (timeout) {\n      this.$timeout = timeout;\n    }, this.setValue = function (value) {\n      this.doc.setValue(value), this.deferredUpdate.schedule(this.$timeout);\n    }, this.getValue = function (callbackId) {\n      this.sender.callback(this.doc.getValue(), callbackId);\n    }, this.onUpdate = function () {}, this.isPending = function () {\n      return this.deferredUpdate.isPending();\n    };\n  }).call(Mirror.prototype);\n}), ace.define(\"ace/mode/json/json_parse\", [\"require\", \"exports\", \"module\"], function () {\n  \"use strict\";\n\n  var at,\n    ch,\n    text,\n    value,\n    escapee = {\n      '\"': '\"',\n      \"\\\\\": \"\\\\\",\n      \"/\": \"/\",\n      b: \"\\b\",\n      f: \"\\f\",\n      n: \"\\n\",\n      r: \"\\r\",\n      t: \"\t\"\n    },\n    error = function (m) {\n      throw {\n        name: \"SyntaxError\",\n        message: m,\n        at: at,\n        text: text\n      };\n    },\n    reset = function (newAt) {\n      ch = text.charAt(newAt);\n      at = newAt + 1;\n    },\n    next = function (c) {\n      return c && c !== ch && error(\"Expected '\" + c + \"' instead of '\" + ch + \"'\"), ch = text.charAt(at), at += 1, ch;\n    },\n    nextUpTo = function (upTo, errorMessage) {\n      let currentAt = at,\n        i = text.indexOf(upTo, currentAt);\n      if (i < 0) {\n        error(errorMessage || 'Expected \\'' + upTo + '\\'');\n      }\n      reset(i + upTo.length);\n      return text.substring(currentAt, i);\n    },\n    peek = function (c) {\n      return text.substr(at, c.length) === c; // nocommit - double check\n    },\n    number = function () {\n      var number,\n        string = \"\";\n      for (\"-\" === ch && (string = \"-\", next(\"-\")); ch >= \"0\" && \"9\" >= ch;) string += ch, next();\n      if (\".\" === ch) for (string += \".\"; next() && ch >= \"0\" && \"9\" >= ch;) string += ch;\n      if (\"e\" === ch || \"E\" === ch) for (string += ch, next(), (\"-\" === ch || \"+\" === ch) && (string += ch, next()); ch >= \"0\" && \"9\" >= ch;) string += ch, next();\n      return number = +string, isNaN(number) ? (error(\"Bad number\"), void 0) : number;\n    },\n    string = function () {\n      var hex,\n        i,\n        uffff,\n        string = \"\";\n      if ('\"' === ch) {\n        if (peek('\"\"')) {\n          // literal\n          next('\"');\n          next('\"');\n          return nextUpTo('\"\"\"', 'failed to find closing \\'\"\"\"\\'');\n        } else {\n          for (; next();) {\n            if ('\"' === ch) return next(), string;\n            if (\"\\\\\" === ch) {\n              if (next(), \"u\" === ch) {\n                for (uffff = 0, i = 0; 4 > i && (hex = parseInt(next(), 16), isFinite(hex)); i += 1) uffff = 16 * uffff + hex;\n                string += String.fromCharCode(uffff);\n              } else {\n                if (\"string\" != typeof escapee[ch]) break;\n                string += escapee[ch];\n              }\n            } else string += ch;\n          }\n        }\n      }\n      error(\"Bad string\");\n    },\n    white = function () {\n      for (; ch && \" \" >= ch;) next();\n    },\n    word = function () {\n      switch (ch) {\n        case \"t\":\n          return next(\"t\"), next(\"r\"), next(\"u\"), next(\"e\"), !0;\n        case \"f\":\n          return next(\"f\"), next(\"a\"), next(\"l\"), next(\"s\"), next(\"e\"), !1;\n        case \"n\":\n          return next(\"n\"), next(\"u\"), next(\"l\"), next(\"l\"), null;\n      }\n      error(\"Unexpected '\" + ch + \"'\");\n    },\n    array = function () {\n      var array = [];\n      if (\"[\" === ch) {\n        if (next(\"[\"), white(), \"]\" === ch) return next(\"]\"), array;\n        for (; ch;) {\n          if (array.push(value()), white(), \"]\" === ch) return next(\"]\"), array;\n          next(\",\"), white();\n        }\n      }\n      error(\"Bad array\");\n    },\n    object = function () {\n      var key,\n        object = {};\n      if (\"{\" === ch) {\n        if (next(\"{\"), white(), \"}\" === ch) return next(\"}\"), object;\n        for (; ch;) {\n          if (key = string(), white(), next(\":\"), Object.hasOwnProperty.call(object, key) && error('Duplicate key \"' + key + '\"'), object[key] = value(), white(), \"}\" === ch) return next(\"}\"), object;\n          next(\",\"), white();\n        }\n      }\n      error(\"Bad object\");\n    };\n  return value = function () {\n    switch (white(), ch) {\n      case \"{\":\n        return object();\n      case \"[\":\n        return array();\n      case '\"':\n        return string();\n      case \"-\":\n        return number();\n      default:\n        return ch >= \"0\" && \"9\" >= ch ? number() : word();\n    }\n  }, function (source, reviver) {\n    var result;\n    return text = source, at = 0, ch = \" \", result = value(), white(), ch && error(\"Syntax error\"), \"function\" == typeof reviver ? function walk(holder, key) {\n      var k,\n        v,\n        value = holder[key];\n      if (value && \"object\" == typeof value) for (k in value) Object.hasOwnProperty.call(value, k) && (v = walk(value, k), void 0 !== v ? value[k] = v : delete value[k]);\n      return reviver.call(holder, key, value);\n    }({\n      \"\": result\n    }, \"\") : result;\n  };\n}), ace.define(\"ace/mode/json_worker\", [\"require\", \"exports\", \"module\", \"ace/lib/oop\", \"ace/worker/mirror\", \"ace/mode/json/json_parse\"], function (acequire, exports) {\n  \"use strict\";\n\n  var oop = acequire(\"../lib/oop\"),\n    Mirror = acequire(\"../worker/mirror\").Mirror,\n    parse = acequire(\"./json/json_parse\"),\n    JsonWorker = exports.JsonWorker = function (sender) {\n      Mirror.call(this, sender), this.setTimeout(200);\n    };\n  oop.inherits(JsonWorker, Mirror), function () {\n    this.onUpdate = function () {\n      var value = this.doc.getValue(),\n        errors = [];\n      try {\n        value && parse(value);\n      } catch (e) {\n        var pos = this.doc.indexToPosition(e.at - 1);\n        errors.push({\n          row: pos.row,\n          column: pos.column,\n          text: e.message,\n          type: \"error\"\n        });\n      }\n      this.sender.emit(\"annotate\", errors);\n    };\n  }.call(JsonWorker.prototype);\n}), ace.define(\"ace/lib/es5-shim\", [\"require\", \"exports\", \"module\"], function () {\n  function Empty() {}\n  function doesDefinePropertyWork(object) {\n    try {\n      return Object.defineProperty(object, \"sentinel\", {}), \"sentinel\" in object;\n    } catch (exception) {}\n  }\n  function toInteger(n) {\n    return n = +n, n !== n ? n = 0 : 0 !== n && n !== 1 / 0 && n !== -(1 / 0) && (n = (n > 0 || -1) * Math.floor(Math.abs(n))), n;\n  }\n  Function.prototype.bind || (Function.prototype.bind = function (that) {\n    var target = this;\n    if (\"function\" != typeof target) throw new TypeError(\"Function.prototype.bind called on incompatible \" + target);\n    var args = slice.call(arguments, 1),\n      bound = function () {\n        if (this instanceof bound) {\n          var result = target.apply(this, args.concat(slice.call(arguments)));\n          return Object(result) === result ? result : this;\n        }\n        return target.apply(that, args.concat(slice.call(arguments)));\n      };\n    return target.prototype && (Empty.prototype = target.prototype, bound.prototype = new Empty(), Empty.prototype = null), bound;\n  });\n  var defineGetter,\n    defineSetter,\n    lookupGetter,\n    lookupSetter,\n    supportsAccessors,\n    call = Function.prototype.call,\n    prototypeOfArray = Array.prototype,\n    prototypeOfObject = Object.prototype,\n    slice = prototypeOfArray.slice,\n    _toString = call.bind(prototypeOfObject.toString),\n    owns = call.bind(prototypeOfObject.hasOwnProperty);\n  if ((supportsAccessors = owns(prototypeOfObject, \"__defineGetter__\")) && (defineGetter = call.bind(prototypeOfObject.__defineGetter__), defineSetter = call.bind(prototypeOfObject.__defineSetter__), lookupGetter = call.bind(prototypeOfObject.__lookupGetter__), lookupSetter = call.bind(prototypeOfObject.__lookupSetter__)), 2 != [1, 2].splice(0).length) if (function () {\n    function makeArray(l) {\n      var a = Array(l + 2);\n      return a[0] = a[1] = 0, a;\n    }\n    var lengthBefore,\n      array = [];\n    return array.splice.apply(array, makeArray(20)), array.splice.apply(array, makeArray(26)), lengthBefore = array.length, array.splice(5, 0, \"XXX\"), lengthBefore + 1 == array.length, lengthBefore + 1 == array.length ? !0 : void 0;\n  }()) {\n    var array_splice = Array.prototype.splice;\n    Array.prototype.splice = function (start, deleteCount) {\n      return arguments.length ? array_splice.apply(this, [void 0 === start ? 0 : start, void 0 === deleteCount ? this.length - start : deleteCount].concat(slice.call(arguments, 2))) : [];\n    };\n  } else Array.prototype.splice = function (pos, removeCount) {\n    var length = this.length;\n    pos > 0 ? pos > length && (pos = length) : void 0 == pos ? pos = 0 : 0 > pos && (pos = Math.max(length + pos, 0)), length > pos + removeCount || (removeCount = length - pos);\n    var removed = this.slice(pos, pos + removeCount),\n      insert = slice.call(arguments, 2),\n      add = insert.length;\n    if (pos === length) add && this.push.apply(this, insert);else {\n      var remove = Math.min(removeCount, length - pos),\n        tailOldPos = pos + remove,\n        tailNewPos = tailOldPos + add - remove,\n        tailCount = length - tailOldPos,\n        lengthAfterRemove = length - remove;\n      if (tailOldPos > tailNewPos) for (var i = 0; tailCount > i; ++i) this[tailNewPos + i] = this[tailOldPos + i];else if (tailNewPos > tailOldPos) for (i = tailCount; i--;) this[tailNewPos + i] = this[tailOldPos + i];\n      if (add && pos === lengthAfterRemove) this.length = lengthAfterRemove, this.push.apply(this, insert);else for (this.length = lengthAfterRemove + add, i = 0; add > i; ++i) this[pos + i] = insert[i];\n    }\n    return removed;\n  };\n  Array.isArray || (Array.isArray = function (obj) {\n    return \"[object Array]\" == _toString(obj);\n  });\n  var boxedString = Object(\"a\"),\n    splitString = \"a\" != boxedString[0] || !(0 in boxedString);\n  if (Array.prototype.forEach || (Array.prototype.forEach = function (fun) {\n    var object = toObject(this),\n      self = splitString && \"[object String]\" == _toString(this) ? this.split(\"\") : object,\n      thisp = arguments[1],\n      i = -1,\n      length = self.length >>> 0;\n    if (\"[object Function]\" != _toString(fun)) throw new TypeError();\n    for (; length > ++i;) i in self && fun.call(thisp, self[i], i, object);\n  }), Array.prototype.map || (Array.prototype.map = function (fun) {\n    var object = toObject(this),\n      self = splitString && \"[object String]\" == _toString(this) ? this.split(\"\") : object,\n      length = self.length >>> 0,\n      result = Array(length),\n      thisp = arguments[1];\n    if (\"[object Function]\" != _toString(fun)) throw new TypeError(fun + \" is not a function\");\n    for (var i = 0; length > i; i++) i in self && (result[i] = fun.call(thisp, self[i], i, object));\n    return result;\n  }), Array.prototype.filter || (Array.prototype.filter = function (fun) {\n    var value,\n      object = toObject(this),\n      self = splitString && \"[object String]\" == _toString(this) ? this.split(\"\") : object,\n      length = self.length >>> 0,\n      result = [],\n      thisp = arguments[1];\n    if (\"[object Function]\" != _toString(fun)) throw new TypeError(fun + \" is not a function\");\n    for (var i = 0; length > i; i++) i in self && (value = self[i], fun.call(thisp, value, i, object) && result.push(value));\n    return result;\n  }), Array.prototype.every || (Array.prototype.every = function (fun) {\n    var object = toObject(this),\n      self = splitString && \"[object String]\" == _toString(this) ? this.split(\"\") : object,\n      length = self.length >>> 0,\n      thisp = arguments[1];\n    if (\"[object Function]\" != _toString(fun)) throw new TypeError(fun + \" is not a function\");\n    for (var i = 0; length > i; i++) if (i in self && !fun.call(thisp, self[i], i, object)) return !1;\n    return !0;\n  }), Array.prototype.some || (Array.prototype.some = function (fun) {\n    var object = toObject(this),\n      self = splitString && \"[object String]\" == _toString(this) ? this.split(\"\") : object,\n      length = self.length >>> 0,\n      thisp = arguments[1];\n    if (\"[object Function]\" != _toString(fun)) throw new TypeError(fun + \" is not a function\");\n    for (var i = 0; length > i; i++) if (i in self && fun.call(thisp, self[i], i, object)) return !0;\n    return !1;\n  }), Array.prototype.reduce || (Array.prototype.reduce = function (fun) {\n    var object = toObject(this),\n      self = splitString && \"[object String]\" == _toString(this) ? this.split(\"\") : object,\n      length = self.length >>> 0;\n    if (\"[object Function]\" != _toString(fun)) throw new TypeError(fun + \" is not a function\");\n    if (!length && 1 == arguments.length) throw new TypeError(\"reduce of empty array with no initial value\");\n    var result,\n      i = 0;\n    if (arguments.length >= 2) result = arguments[1];else for (;;) {\n      if (i in self) {\n        result = self[i++];\n        break;\n      }\n      if (++i >= length) throw new TypeError(\"reduce of empty array with no initial value\");\n    }\n    for (; length > i; i++) i in self && (result = fun.call(void 0, result, self[i], i, object));\n    return result;\n  }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function (fun) {\n    var object = toObject(this),\n      self = splitString && \"[object String]\" == _toString(this) ? this.split(\"\") : object,\n      length = self.length >>> 0;\n    if (\"[object Function]\" != _toString(fun)) throw new TypeError(fun + \" is not a function\");\n    if (!length && 1 == arguments.length) throw new TypeError(\"reduceRight of empty array with no initial value\");\n    var result,\n      i = length - 1;\n    if (arguments.length >= 2) result = arguments[1];else for (;;) {\n      if (i in self) {\n        result = self[i--];\n        break;\n      }\n      if (0 > --i) throw new TypeError(\"reduceRight of empty array with no initial value\");\n    }\n    do i in this && (result = fun.call(void 0, result, self[i], i, object)); while (i--);\n    return result;\n  }), Array.prototype.indexOf && -1 == [0, 1].indexOf(1, 2) || (Array.prototype.indexOf = function (sought) {\n    var self = splitString && \"[object String]\" == _toString(this) ? this.split(\"\") : toObject(this),\n      length = self.length >>> 0;\n    if (!length) return -1;\n    var i = 0;\n    for (arguments.length > 1 && (i = toInteger(arguments[1])), i = i >= 0 ? i : Math.max(0, length + i); length > i; i++) if (i in self && self[i] === sought) return i;\n    return -1;\n  }), Array.prototype.lastIndexOf && -1 == [0, 1].lastIndexOf(0, -3) || (Array.prototype.lastIndexOf = function (sought) {\n    var self = splitString && \"[object String]\" == _toString(this) ? this.split(\"\") : toObject(this),\n      length = self.length >>> 0;\n    if (!length) return -1;\n    var i = length - 1;\n    for (arguments.length > 1 && (i = Math.min(i, toInteger(arguments[1]))), i = i >= 0 ? i : length - Math.abs(i); i >= 0; i--) if (i in self && sought === self[i]) return i;\n    return -1;\n  }), Object.getPrototypeOf || (Object.getPrototypeOf = function (object) {\n    return object.__proto__ || (object.constructor ? object.constructor.prototype : prototypeOfObject);\n  }), !Object.getOwnPropertyDescriptor) {\n    var ERR_NON_OBJECT = \"Object.getOwnPropertyDescriptor called on a non-object: \";\n    Object.getOwnPropertyDescriptor = function (object, property) {\n      if (\"object\" != typeof object && \"function\" != typeof object || null === object) throw new TypeError(ERR_NON_OBJECT + object);\n      if (owns(object, property)) {\n        var descriptor, getter, setter;\n        if (descriptor = {\n          enumerable: !0,\n          configurable: !0\n        }, supportsAccessors) {\n          var prototype = object.__proto__;\n          object.__proto__ = prototypeOfObject;\n          var getter = lookupGetter(object, property),\n            setter = lookupSetter(object, property);\n          if (object.__proto__ = prototype, getter || setter) return getter && (descriptor.get = getter), setter && (descriptor.set = setter), descriptor;\n        }\n        return descriptor.value = object[property], descriptor;\n      }\n    };\n  }\n  if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function (object) {\n    return Object.keys(object);\n  }), !Object.create) {\n    var createEmpty;\n    createEmpty = null === Object.prototype.__proto__ ? function () {\n      return {\n        __proto__: null\n      };\n    } : function () {\n      var empty = {};\n      for (var i in empty) empty[i] = null;\n      return empty.constructor = empty.hasOwnProperty = empty.propertyIsEnumerable = empty.isPrototypeOf = empty.toLocaleString = empty.toString = empty.valueOf = empty.__proto__ = null, empty;\n    }, Object.create = function (prototype, properties) {\n      var object;\n      if (null === prototype) object = createEmpty();else {\n        if (\"object\" != typeof prototype) throw new TypeError(\"typeof prototype[\" + typeof prototype + \"] != 'object'\");\n        var Type = function () {};\n        Type.prototype = prototype, object = new Type(), object.__proto__ = prototype;\n      }\n      return void 0 !== properties && Object.defineProperties(object, properties), object;\n    };\n  }\n  if (Object.defineProperty) {\n    var definePropertyWorksOnObject = doesDefinePropertyWork({}),\n      definePropertyWorksOnDom = \"undefined\" == typeof document || doesDefinePropertyWork(document.createElement(\"div\"));\n    if (!definePropertyWorksOnObject || !definePropertyWorksOnDom) var definePropertyFallback = Object.defineProperty;\n  }\n  if (!Object.defineProperty || definePropertyFallback) {\n    var ERR_NON_OBJECT_DESCRIPTOR = \"Property description must be an object: \",\n      ERR_NON_OBJECT_TARGET = \"Object.defineProperty called on non-object: \",\n      ERR_ACCESSORS_NOT_SUPPORTED = \"getters & setters can not be defined on this javascript engine\";\n    Object.defineProperty = function (object, property, descriptor) {\n      if (\"object\" != typeof object && \"function\" != typeof object || null === object) throw new TypeError(ERR_NON_OBJECT_TARGET + object);\n      if (\"object\" != typeof descriptor && \"function\" != typeof descriptor || null === descriptor) throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);\n      if (definePropertyFallback) try {\n        return definePropertyFallback.call(Object, object, property, descriptor);\n      } catch (exception) {}\n      if (owns(descriptor, \"value\")) {\n        if (supportsAccessors && (lookupGetter(object, property) || lookupSetter(object, property))) {\n          var prototype = object.__proto__;\n          object.__proto__ = prototypeOfObject, delete object[property], object[property] = descriptor.value, object.__proto__ = prototype;\n        } else object[property] = descriptor.value;\n      } else {\n        if (!supportsAccessors) throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);\n        owns(descriptor, \"get\") && defineGetter(object, property, descriptor.get), owns(descriptor, \"set\") && defineSetter(object, property, descriptor.set);\n      }\n      return object;\n    };\n  }\n  Object.defineProperties || (Object.defineProperties = function (object, properties) {\n    for (var property in properties) owns(properties, property) && Object.defineProperty(object, property, properties[property]);\n    return object;\n  }), Object.seal || (Object.seal = function (object) {\n    return object;\n  }), Object.freeze || (Object.freeze = function (object) {\n    return object;\n  });\n  try {\n    Object.freeze(function () {});\n  } catch (exception) {\n    Object.freeze = function (freezeObject) {\n      return function (object) {\n        return \"function\" == typeof object ? object : freezeObject(object);\n      };\n    }(Object.freeze);\n  }\n  if (Object.preventExtensions || (Object.preventExtensions = function (object) {\n    return object;\n  }), Object.isSealed || (Object.isSealed = function () {\n    return !1;\n  }), Object.isFrozen || (Object.isFrozen = function () {\n    return !1;\n  }), Object.isExtensible || (Object.isExtensible = function (object) {\n    if (Object(object) === object) throw new TypeError();\n    for (var name = \"\"; owns(object, name);) name += \"?\";\n    object[name] = !0;\n    var returnValue = owns(object, name);\n    return delete object[name], returnValue;\n  }), !Object.keys) {\n    var hasDontEnumBug = !0,\n      dontEnums = [\"toString\", \"toLocaleString\", \"valueOf\", \"hasOwnProperty\", \"isPrototypeOf\", \"propertyIsEnumerable\", \"constructor\"],\n      dontEnumsLength = dontEnums.length;\n    for (var key in {\n      toString: null\n    }) hasDontEnumBug = !1;\n    Object.keys = function (object) {\n      if (\"object\" != typeof object && \"function\" != typeof object || null === object) throw new TypeError(\"Object.keys called on a non-object\");\n      var keys = [];\n      for (var name in object) owns(object, name) && keys.push(name);\n      if (hasDontEnumBug) for (var i = 0, ii = dontEnumsLength; ii > i; i++) {\n        var dontEnum = dontEnums[i];\n        owns(object, dontEnum) && keys.push(dontEnum);\n      }\n      return keys;\n    };\n  }\n  Date.now || (Date.now = function () {\n    return new Date().getTime();\n  });\n  var ws = \"\t\\n\u000b\\f\\r   ᠎             　\\u2028\\u2029﻿\";\n  if (!String.prototype.trim || ws.trim()) {\n    ws = \"[\" + ws + \"]\";\n    var trimBeginRegexp = RegExp(\"^\" + ws + ws + \"*\"),\n      trimEndRegexp = RegExp(ws + ws + \"*$\");\n    String.prototype.trim = function () {\n      return (this + \"\").replace(trimBeginRegexp, \"\").replace(trimEndRegexp, \"\");\n    };\n  }\n  var toObject = function (o) {\n    if (null == o) throw new TypeError(\"can't convert \" + o + \" to object\");\n    return Object(o);\n  };\n});");

/***/ }),

/***/ "../../../node_modules/raw-loader/dist/cjs.js!./public/application/models/legacy_core_editor/mode/worker/worker.js":
/*!**************************************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/node_modules/raw-loader/dist/cjs.js!./public/application/models/legacy_core_editor/mode/worker/worker.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * SPDX-License-Identifier: Apache-2.0\n *\n * The OpenSearch Contributors require contributions made to\n * this file be licensed under the Apache-2.0 license or a\n * compatible open source license.\n *\n * Any modifications Copyright OpenSearch Contributors. See\n * GitHub history for details.\n */\n\n/*\n * Licensed to Elasticsearch B.V. under one or more contributor\n * license agreements. See the NOTICE file distributed with\n * this work for additional information regarding copyright\n * ownership. Elasticsearch B.V. licenses this file to you under\n * the Apache License, Version 2.0 (the \"License\"); you may\n * not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *    http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n/* @notice\n *\n * This product includes code that is based on Ace editor, which was available\n * under a \"BSD\" license.\n *\n * Distributed under the BSD license:\n *\n * Copyright (c) 2010, Ajax.org B.V.\n * All rights reserved.\n *\n *  Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions are met:\n *     * Redistributions of source code must retain the above copyright\n *       notice, this list of conditions and the following disclaimer.\n *     * Redistributions in binary form must reproduce the above copyright\n *       notice, this list of conditions and the following disclaimer in the\n *       documentation and/or other materials provided with the distribution.\n *     * Neither the name of Ajax.org B.V. nor the\n *       names of its contributors may be used to endorse or promote products\n *       derived from this software without specific prior written permission.\n *\n *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND\n * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED\n * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\n * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY\n * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES\n * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;\n * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND\n * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS\n * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n/* eslint-disable */\n/*\n  This file is loaded up as a blob by Brace to hand to Ace to load as Jsonp\n  (hence the redefining of everything).  It is based on the javascript\n  mode from the brace distro.\n*/\n\n(function (window) {\n  function resolveModuleId(id, paths) {\n    for (let testPath = id, tail = ''; testPath;) {\n      let alias = paths[testPath];\n      if ('string' === typeof alias) return alias + tail;\n      if (alias)\n        {return (\n          alias.location.replace(/\\/*$/, '/') +\n          (tail || alias.main || alias.name)\n        );}\n      if (alias === !1) return '';\n      let i = testPath.lastIndexOf('/');\n      if (-1 === i) break;\n      (tail = testPath.substr(i) + tail), (testPath = testPath.slice(0, i));\n    }\n    return id;\n  }\n  if (\n    !(\n      (void 0 !== window.window && window.document) ||\n      (window.acequire && window.define)\n    )\n  ) {\n    window.console ||\n      ((window.console = function () {\n        let msgs = Array.prototype.slice.call(arguments, 0);\n        postMessage({ type: 'log', data: msgs });\n      }),\n        (window.console.error = window.console.warn = window.console.log = window.console.trace =\n        window.console)),\n    (window.window = window),\n    (window.ace = window),\n    (window.onerror = function (message, file, line, col, err) {\n      postMessage({\n        type: 'error',\n        data: {\n          message: message,\n          data: err.data,\n          file: file,\n          line: line,\n          col: col,\n          stack: err.stack,\n        },\n      });\n    }),\n    (window.normalizeModule = function (parentId, moduleName) {\n      if (-1 !== moduleName.indexOf('!')) {\n        let chunks = moduleName.split('!');\n        return (\n          window.normalizeModule(parentId, chunks[0]) +\n            '!' +\n            window.normalizeModule(parentId, chunks[1])\n        );\n      }\n      if ('.' == moduleName.charAt(0)) {\n        let base = parentId\n          .split('/')\n          .slice(0, -1)\n          .join('/');\n        for (\n          moduleName = (base ? base + '/' : '') + moduleName;\n          -1 !== moduleName.indexOf('.') && previous != moduleName;\n\n        ) {\n          var previous = moduleName;\n          moduleName = moduleName\n            .replace(/^\\.\\//, '')\n            .replace(/\\/\\.\\//, '/')\n            .replace(/[^\\/]+\\/\\.\\.\\//, '');\n        }\n      }\n      return moduleName;\n    }),\n    (window.acequire = function acequire(parentId, id) {\n      if ((id || ((id = parentId), (parentId = null)), !id.charAt))\n        {throw Error(\n            'worker.js acequire() accepts only (parentId, id) as arguments'\n          );}\n      id = window.normalizeModule(parentId, id);\n      let module = window.acequire.modules[id];\n      if (module)\n        {return (\n            module.initialized ||\n              ((module.initialized = !0),\n              (module.exports = module.factory().exports)),\n            module.exports\n          );}\n      if (!window.acequire.tlns) return console.log('unable to load ' + id);\n      let path = resolveModuleId(id, window.acequire.tlns);\n      return (\n        '.js' != path.slice(-3) && (path += '.js'),\n        (window.acequire.id = id),\n        (window.acequire.modules[id] = {}),\n        importScripts(path),\n        window.acequire(parentId, id)\n      );\n    }),\n    (window.acequire.modules = {}),\n    (window.acequire.tlns = {}),\n    (window.define = function (id, deps, factory) {\n      if (\n        (2 == arguments.length\n          ? ((factory = deps),\n            'string' !== typeof id && ((deps = id), (id = window.acequire.id)))\n          : 1 == arguments.length &&\n              ((factory = id), (deps = []), (id = window.acequire.id)),\n          'function' !== typeof factory)\n      )\n        {return (\n            (window.acequire.modules[id] = {\n              exports: factory,\n              initialized: !0,\n            }),\n            void 0\n          );}\n      deps.length || (deps = ['require', 'exports', 'module']);\n      let req = function (childId) {\n        return window.acequire(id, childId);\n      };\n      window.acequire.modules[id] = {\n        exports: {},\n        factory: function () {\n          let module = this,\n            returnExports = factory.apply(\n              this,\n              deps.map(function (dep) {\n                switch (dep) {\n                  case 'require':\n                    return req;\n                  case 'exports':\n                    return module.exports;\n                  case 'module':\n                    return module;\n                  default:\n                    return req(dep);\n                }\n              })\n            );\n          return returnExports && (module.exports = returnExports), module;\n        },\n      };\n    }),\n    (window.define.amd = {}),\n    (acequire.tlns = {}),\n    (window.initBaseUrls = function (topLevelNamespaces) {\n      for (let i in topLevelNamespaces)\n        {acequire.tlns[i] = topLevelNamespaces[i];}\n    }),\n    (window.initSender = function () {\n      let EventEmitter = window.acequire('ace/lib/event_emitter')\n          .EventEmitter,\n        oop = window.acequire('ace/lib/oop'),\n        Sender = function () {};\n      return (\n        function () {\n          oop.implement(this, EventEmitter),\n          (this.callback = function (data, callbackId) {\n            postMessage({ type: 'call', id: callbackId, data: data });\n          }),\n          (this.emit = function (name, data) {\n            postMessage({ type: 'event', name: name, data: data });\n          });\n        }.call(Sender.prototype),\n        new Sender()\n      );\n    });\n    let main = (window.main = null),\n      sender = (window.sender = null);\n    window.onmessage = function (e) {\n      let msg = e.data;\n      if (msg.event && sender) sender._signal(msg.event, msg.data);\n      else if (msg.command)\n        {if (main[msg.command]) main[msg.command].apply(main, msg.args);\n        else {\n          if (!window[msg.command])\n            throw Error('Unknown command:' + msg.command);\n          window[msg.command].apply(window, msg.args);\n        }}\n      else if (msg.init) {\n        window.initBaseUrls(msg.tlns),\n        acequire('ace/lib/es5-shim'),\n        (sender = window.sender = window.initSender());\n        let clazz = acequire(msg.module)[msg.classname];\n        main = window.main = new clazz(sender);\n      }\n    };\n  }\n}(this)),\nace.define('ace/lib/oop', ['require', 'exports', 'module'], function (\n  acequire,\n  exports\n) {\n  (exports.inherits = function (ctor, superCtor) {\n    (ctor.super_ = superCtor),\n    (ctor.prototype = Object.create(superCtor.prototype, {\n      constructor: {\n        value: ctor,\n        enumerable: !1,\n        writable: !0,\n        configurable: !0,\n      },\n    }));\n  }),\n  (exports.mixin = function (obj, mixin) {\n    for (let key in mixin) obj[key] = mixin[key];\n    return obj;\n  }),\n  (exports.implement = function (proto, mixin) {\n    exports.mixin(proto, mixin);\n  });\n}),\nace.define('ace/range', ['require', 'exports', 'module'], function (\n  acequire,\n  exports\n) {\n  let comparePoints = function (p1, p2) {\n      return p1.row - p2.row || p1.column - p2.column;\n    },\n    Range = function (startRow, startColumn, endRow, endColumn) {\n      (this.start = { row: startRow, column: startColumn }),\n      (this.end = { row: endRow, column: endColumn });\n    };\n  (function () {\n    (this.isEqual = function (range) {\n      return (\n        this.start.row === range.start.row &&\n          this.end.row === range.end.row &&\n          this.start.column === range.start.column &&\n          this.end.column === range.end.column\n      );\n    }),\n    (this.toString = function () {\n      return (\n        'Range: [' +\n            this.start.row +\n            '/' +\n            this.start.column +\n            '] -> [' +\n            this.end.row +\n            '/' +\n            this.end.column +\n            ']'\n      );\n    }),\n    (this.contains = function (row, column) {\n      return 0 == this.compare(row, column);\n    }),\n    (this.compareRange = function (range) {\n      let cmp,\n        end = range.end,\n        start = range.start;\n      return (\n        (cmp = this.compare(end.row, end.column)),\n        1 == cmp\n          ? ((cmp = this.compare(start.row, start.column)),\n            1 == cmp ? 2 : 0 == cmp ? 1 : 0)\n          : -1 == cmp\n            ? -2\n            : ((cmp = this.compare(start.row, start.column)),\n              -1 == cmp ? -1 : 1 == cmp ? 42 : 0)\n      );\n    }),\n    (this.comparePoint = function (p) {\n      return this.compare(p.row, p.column);\n    }),\n    (this.containsRange = function (range) {\n      return (\n        0 == this.comparePoint(range.start) &&\n            0 == this.comparePoint(range.end)\n      );\n    }),\n    (this.intersects = function (range) {\n      let cmp = this.compareRange(range);\n      return -1 == cmp || 0 == cmp || 1 == cmp;\n    }),\n    (this.isEnd = function (row, column) {\n      return this.end.row == row && this.end.column == column;\n    }),\n    (this.isStart = function (row, column) {\n      return this.start.row == row && this.start.column == column;\n    }),\n    (this.setStart = function (row, column) {\n      'object' === typeof row\n        ? ((this.start.column = row.column), (this.start.row = row.row))\n        : ((this.start.row = row), (this.start.column = column));\n    }),\n    (this.setEnd = function (row, column) {\n      'object' === typeof row\n        ? ((this.end.column = row.column), (this.end.row = row.row))\n        : ((this.end.row = row), (this.end.column = column));\n    }),\n    (this.inside = function (row, column) {\n      return 0 == this.compare(row, column)\n        ? this.isEnd(row, column) || this.isStart(row, column)\n          ? !1\n          : !0\n        : !1;\n    }),\n    (this.insideStart = function (row, column) {\n      return 0 == this.compare(row, column)\n        ? this.isEnd(row, column)\n          ? !1\n          : !0\n        : !1;\n    }),\n    (this.insideEnd = function (row, column) {\n      return 0 == this.compare(row, column)\n        ? this.isStart(row, column)\n          ? !1\n          : !0\n        : !1;\n    }),\n    (this.compare = function (row, column) {\n      return this.isMultiLine() || row !== this.start.row\n        ? this.start.row > row\n          ? -1\n          : row > this.end.row\n            ? 1\n            : this.start.row === row\n              ? column >= this.start.column\n                ? 0\n                : -1\n              : this.end.row === row\n                ? this.end.column >= column\n                  ? 0\n                  : 1\n                : 0\n        : this.start.column > column\n          ? -1\n          : column > this.end.column\n            ? 1\n            : 0;\n    }),\n    (this.compareStart = function (row, column) {\n      return this.start.row == row && this.start.column == column\n        ? -1\n        : this.compare(row, column);\n    }),\n    (this.compareEnd = function (row, column) {\n      return this.end.row == row && this.end.column == column\n        ? 1\n        : this.compare(row, column);\n    }),\n    (this.compareInside = function (row, column) {\n      return this.end.row == row && this.end.column == column\n        ? 1\n        : this.start.row == row && this.start.column == column\n          ? -1\n          : this.compare(row, column);\n    }),\n    (this.clipRows = function (firstRow, lastRow) {\n      if (this.end.row > lastRow) var end = { row: lastRow + 1, column: 0 };\n      else if (firstRow > this.end.row)\n        {var end = { row: firstRow, column: 0 };}\n      if (this.start.row > lastRow)\n        {var start = { row: lastRow + 1, column: 0 };}\n      else if (firstRow > this.start.row)\n        {var start = { row: firstRow, column: 0 };}\n      return Range.fromPoints(start || this.start, end || this.end);\n    }),\n    (this.extend = function (row, column) {\n      let cmp = this.compare(row, column);\n      if (0 == cmp) return this;\n      if (-1 == cmp) var start = { row: row, column: column };\n      else var end = { row: row, column: column };\n      return Range.fromPoints(start || this.start, end || this.end);\n    }),\n    (this.isEmpty = function () {\n      return (\n        this.start.row === this.end.row &&\n            this.start.column === this.end.column\n      );\n    }),\n    (this.isMultiLine = function () {\n      return this.start.row !== this.end.row;\n    }),\n    (this.clone = function () {\n      return Range.fromPoints(this.start, this.end);\n    }),\n    (this.collapseRows = function () {\n      return 0 == this.end.column\n        ? new Range(\n          this.start.row,\n          0,\n          Math.max(this.start.row, this.end.row - 1),\n          0\n        )\n        : new Range(this.start.row, 0, this.end.row, 0);\n    }),\n    (this.toScreenRange = function (session) {\n      let screenPosStart = session.documentToScreenPosition(this.start),\n        screenPosEnd = session.documentToScreenPosition(this.end);\n      return new Range(\n        screenPosStart.row,\n        screenPosStart.column,\n        screenPosEnd.row,\n        screenPosEnd.column\n      );\n    }),\n    (this.moveBy = function (row, column) {\n      (this.start.row += row),\n      (this.start.column += column),\n      (this.end.row += row),\n      (this.end.column += column);\n    });\n  }.call(Range.prototype),\n    (Range.fromPoints = function (start, end) {\n      return new Range(start.row, start.column, end.row, end.column);\n    }),\n    (Range.comparePoints = comparePoints),\n    (Range.comparePoints = function (p1, p2) {\n      return p1.row - p2.row || p1.column - p2.column;\n    }),\n    (exports.Range = Range));\n}),\nace.define('ace/apply_delta', ['require', 'exports', 'module'], function (\n  acequire,\n  exports\n) {\n  exports.applyDelta = function (docLines, delta) {\n    let row = delta.start.row,\n      startColumn = delta.start.column,\n      line = docLines[row] || '';\n    switch (delta.action) {\n      case 'insert':\n        var lines = delta.lines;\n        if (1 === lines.length)\n          {docLines[row] =\n              line.substring(0, startColumn) +\n              delta.lines[0] +\n              line.substring(startColumn);}\n        else {\n          let args = [row, 1].concat(delta.lines);\n          docLines.splice.apply(docLines, args),\n          (docLines[row] = line.substring(0, startColumn) + docLines[row]),\n          (docLines[row + delta.lines.length - 1] += line.substring(\n            startColumn\n          ));\n        }\n        break;\n      case 'remove':\n        var endColumn = delta.end.column,\n          endRow = delta.end.row;\n        row === endRow\n          ? (docLines[row] =\n                line.substring(0, startColumn) + line.substring(endColumn))\n          : docLines.splice(\n            row,\n            endRow - row + 1,\n            line.substring(0, startColumn) +\n                  docLines[endRow].substring(endColumn)\n          );\n    }\n  };\n}),\nace.define(\n  'ace/lib/event_emitter',\n  ['require', 'exports', 'module'],\n  function (acequire, exports) {\n    let EventEmitter = {},\n      stopPropagation = function () {\n        this.propagationStopped = !0;\n      },\n      preventDefault = function () {\n        this.defaultPrevented = !0;\n      };\n    (EventEmitter._emit = EventEmitter._dispatchEvent = function (\n      eventName,\n      e\n    ) {\n      this._eventRegistry || (this._eventRegistry = {}),\n      this._defaultHandlers || (this._defaultHandlers = {});\n      let listeners = this._eventRegistry[eventName] || [],\n        defaultHandler = this._defaultHandlers[eventName];\n      if (listeners.length || defaultHandler) {\n        ('object' === typeof e && e) || (e = {}),\n        e.type || (e.type = eventName),\n        e.stopPropagation || (e.stopPropagation = stopPropagation),\n        e.preventDefault || (e.preventDefault = preventDefault),\n        (listeners = listeners.slice());\n        for (\n          let i = 0;\n          listeners.length > i &&\n            (listeners[i](e, this), !e.propagationStopped);\n          i++\n        );\n        return defaultHandler && !e.defaultPrevented\n          ? defaultHandler(e, this)\n          : void 0;\n      }\n    }),\n    (EventEmitter._signal = function (eventName, e) {\n      let listeners = (this._eventRegistry || {})[eventName];\n      if (listeners) {\n        listeners = listeners.slice();\n        for (let i = 0; listeners.length > i; i++) listeners[i](e, this);\n      }\n    }),\n    (EventEmitter.once = function (eventName, callback) {\n      let _self = this;\n      callback &&\n            this.addEventListener(eventName, function newCallback() {\n              _self.removeEventListener(eventName, newCallback),\n              callback.apply(null, arguments);\n            });\n    }),\n    (EventEmitter.setDefaultHandler = function (eventName, callback) {\n      let handlers = this._defaultHandlers;\n      if (\n        (handlers ||\n              (handlers = this._defaultHandlers = { _disabled_: {} }),\n          handlers[eventName])\n      ) {\n        let old = handlers[eventName],\n          disabled = handlers._disabled_[eventName];\n        disabled || (handlers._disabled_[eventName] = disabled = []),\n        disabled.push(old);\n        let i = disabled.indexOf(callback);\n        -1 != i && disabled.splice(i, 1);\n      }\n      handlers[eventName] = callback;\n    }),\n    (EventEmitter.removeDefaultHandler = function (eventName, callback) {\n      let handlers = this._defaultHandlers;\n      if (handlers) {\n        let disabled = handlers._disabled_[eventName];\n        if (handlers[eventName] == callback)\n          {handlers[eventName],\n                disabled && this.setDefaultHandler(eventName, disabled.pop());}\n        else if (disabled) {\n          let i = disabled.indexOf(callback);\n          -1 != i && disabled.splice(i, 1);\n        }\n      }\n    }),\n    (EventEmitter.on = EventEmitter.addEventListener = function (\n      eventName,\n      callback,\n      capturing\n    ) {\n      this._eventRegistry = this._eventRegistry || {};\n      let listeners = this._eventRegistry[eventName];\n      return (\n        listeners || (listeners = this._eventRegistry[eventName] = []),\n        -1 == listeners.indexOf(callback) &&\n              listeners[capturing ? 'unshift' : 'push'](callback),\n        callback\n      );\n    }),\n    (EventEmitter.off = EventEmitter.removeListener = EventEmitter.removeEventListener = function (\n      eventName,\n      callback\n    ) {\n      this._eventRegistry = this._eventRegistry || {};\n      let listeners = this._eventRegistry[eventName];\n      if (listeners) {\n        let index = listeners.indexOf(callback);\n        -1 !== index && listeners.splice(index, 1);\n      }\n    }),\n    (EventEmitter.removeAllListeners = function (eventName) {\n      this._eventRegistry && (this._eventRegistry[eventName] = []);\n    }),\n    (exports.EventEmitter = EventEmitter);\n  }\n),\nace.define(\n  'ace/anchor',\n  ['require', 'exports', 'module', 'ace/lib/oop', 'ace/lib/event_emitter'],\n  function (acequire, exports) {\n    let oop = acequire('./lib/oop'),\n      EventEmitter = acequire('./lib/event_emitter').EventEmitter,\n      Anchor = (exports.Anchor = function (doc, row, column) {\n        (this.$onChange = this.onChange.bind(this)),\n        this.attach(doc),\n        column === void 0\n          ? this.setPosition(row.row, row.column)\n          : this.setPosition(row, column);\n      });\n    (function () {\n      function $pointsInOrder(point1, point2, equalPointsInOrder) {\n        let bColIsAfter = equalPointsInOrder\n          ? point1.column <= point2.column\n          : point1.column < point2.column;\n        return (\n          point1.row < point2.row || (point1.row == point2.row && bColIsAfter)\n        );\n      }\n      function $getTransformedPoint(delta, point, moveIfEqual) {\n        let deltaIsInsert = 'insert' == delta.action,\n          deltaRowShift =\n              (deltaIsInsert ? 1 : -1) * (delta.end.row - delta.start.row),\n          deltaColShift =\n              (deltaIsInsert ? 1 : -1) *\n              (delta.end.column - delta.start.column),\n          deltaStart = delta.start,\n          deltaEnd = deltaIsInsert ? deltaStart : delta.end;\n        return $pointsInOrder(point, deltaStart, moveIfEqual)\n          ? { row: point.row, column: point.column }\n          : $pointsInOrder(deltaEnd, point, !moveIfEqual)\n            ? {\n              row: point.row + deltaRowShift,\n              column:\n                    point.column +\n                    (point.row == deltaEnd.row ? deltaColShift : 0),\n            }\n            : { row: deltaStart.row, column: deltaStart.column };\n      }\n      oop.implement(this, EventEmitter),\n      (this.getPosition = function () {\n        return this.$clipPositionToDocument(this.row, this.column);\n      }),\n      (this.getDocument = function () {\n        return this.document;\n      }),\n      (this.$insertRight = !1),\n      (this.onChange = function (delta) {\n        if (\n          !(\n            (delta.start.row == delta.end.row &&\n                  delta.start.row != this.row) ||\n                delta.start.row > this.row\n          )\n        ) {\n          let point = $getTransformedPoint(\n            delta,\n            { row: this.row, column: this.column },\n            this.$insertRight\n          );\n          this.setPosition(point.row, point.column, !0);\n        }\n      }),\n      (this.setPosition = function (row, column, noClip) {\n        let pos;\n        if (\n          ((pos = noClip\n            ? { row: row, column: column }\n            : this.$clipPositionToDocument(row, column)),\n            this.row != pos.row || this.column != pos.column)\n        ) {\n          let old = { row: this.row, column: this.column };\n          (this.row = pos.row),\n          (this.column = pos.column),\n          this._signal('change', { old: old, value: pos });\n        }\n      }),\n      (this.detach = function () {\n        this.document.removeEventListener('change', this.$onChange);\n      }),\n      (this.attach = function (doc) {\n        (this.document = doc || this.document),\n        this.document.on('change', this.$onChange);\n      }),\n      (this.$clipPositionToDocument = function (row, column) {\n        let pos = {};\n        return (\n          row >= this.document.getLength()\n            ? ((pos.row = Math.max(0, this.document.getLength() - 1)),\n              (pos.column = this.document.getLine(pos.row).length))\n            : 0 > row\n              ? ((pos.row = 0), (pos.column = 0))\n              : ((pos.row = row),\n                (pos.column = Math.min(\n                  this.document.getLine(pos.row).length,\n                  Math.max(0, column)\n                ))),\n          0 > column && (pos.column = 0),\n          pos\n        );\n      });\n    }.call(Anchor.prototype));\n  }\n),\nace.define(\n  'ace/document',\n  [\n    'require',\n    'exports',\n    'module',\n    'ace/lib/oop',\n    'ace/apply_delta',\n    'ace/lib/event_emitter',\n    'ace/range',\n    'ace/anchor',\n  ],\n  function (acequire, exports) {\n    let oop = acequire('./lib/oop'),\n      applyDelta = acequire('./apply_delta').applyDelta,\n      EventEmitter = acequire('./lib/event_emitter').EventEmitter,\n      Range = acequire('./range').Range,\n      Anchor = acequire('./anchor').Anchor,\n      Document = function (textOrLines) {\n        (this.$lines = ['']),\n        0 === textOrLines.length\n          ? (this.$lines = [''])\n          : Array.isArray(textOrLines)\n            ? this.insertMergedLines({ row: 0, column: 0 }, textOrLines)\n            : this.insert({ row: 0, column: 0 }, textOrLines);\n      };\n    (function () {\n      oop.implement(this, EventEmitter),\n      (this.setValue = function (text) {\n        let len = this.getLength() - 1;\n        this.remove(new Range(0, 0, len, this.getLine(len).length)),\n        this.insert({ row: 0, column: 0 }, text);\n      }),\n      (this.getValue = function () {\n        return this.getAllLines().join(this.getNewLineCharacter());\n      }),\n      (this.createAnchor = function (row, column) {\n        return new Anchor(this, row, column);\n      }),\n      (this.$split =\n            0 === 'aaa'.split(/a/).length\n              ? function (text) {\n                return text.replace(/\\r\\n|\\r/g, '\\n').split('\\n');\n              }\n              : function (text) {\n                return text.split(/\\r\\n|\\r|\\n/);\n              }),\n      (this.$detectNewLine = function (text) {\n        let match = text.match(/^.*?(\\r\\n|\\r|\\n)/m);\n        (this.$autoNewLine = match ? match[1] : '\\n'),\n        this._signal('changeNewLineMode');\n      }),\n      (this.getNewLineCharacter = function () {\n        switch (this.$newLineMode) {\n          case 'windows':\n            return '\\r\\n';\n          case 'unix':\n            return '\\n';\n          default:\n            return this.$autoNewLine || '\\n';\n        }\n      }),\n      (this.$autoNewLine = ''),\n      (this.$newLineMode = 'auto'),\n      (this.setNewLineMode = function (newLineMode) {\n        this.$newLineMode !== newLineMode &&\n              ((this.$newLineMode = newLineMode),\n                this._signal('changeNewLineMode'));\n      }),\n      (this.getNewLineMode = function () {\n        return this.$newLineMode;\n      }),\n      (this.isNewLine = function (text) {\n        return '\\r\\n' == text || '\\r' == text || '\\n' == text;\n      }),\n      (this.getLine = function (row) {\n        return this.$lines[row] || '';\n      }),\n      (this.getLines = function (firstRow, lastRow) {\n        return this.$lines.slice(firstRow, lastRow + 1);\n      }),\n      (this.getAllLines = function () {\n        return this.getLines(0, this.getLength());\n      }),\n      (this.getLength = function () {\n        return this.$lines.length;\n      }),\n      (this.getTextRange = function (range) {\n        return this.getLinesForRange(range).join(\n          this.getNewLineCharacter()\n        );\n      }),\n      (this.getLinesForRange = function (range) {\n        let lines;\n        if (range.start.row === range.end.row)\n          {lines = [\n                this.getLine(range.start.row).substring(\n                  range.start.column,\n                  range.end.column\n                ),\n              ];}\n        else {\n          (lines = this.getLines(range.start.row, range.end.row)),\n          (lines[0] = (lines[0] || '').substring(range.start.column));\n          let l = lines.length - 1;\n          range.end.row - range.start.row == l &&\n                (lines[l] = lines[l].substring(0, range.end.column));\n        }\n        return lines;\n      }),\n      (this.insertLines = function (row, lines) {\n        return (\n          console.warn(\n            'Use of document.insertLines is deprecated. Use the insertFullLines method instead.'\n          ),\n          this.insertFullLines(row, lines)\n        );\n      }),\n      (this.removeLines = function (firstRow, lastRow) {\n        return (\n          console.warn(\n            'Use of document.removeLines is deprecated. Use the removeFullLines method instead.'\n          ),\n          this.removeFullLines(firstRow, lastRow)\n        );\n      }),\n      (this.insertNewLine = function (position) {\n        return (\n          console.warn(\n            'Use of document.insertNewLine is deprecated. Use insertMergedLines(position, [\\'\\', \\'\\']) instead.'\n          ),\n          this.insertMergedLines(position, ['', ''])\n        );\n      }),\n      (this.insert = function (position, text) {\n        return (\n          1 >= this.getLength() && this.$detectNewLine(text),\n          this.insertMergedLines(position, this.$split(text))\n        );\n      }),\n      (this.insertInLine = function (position, text) {\n        let start = this.clippedPos(position.row, position.column),\n          end = this.pos(position.row, position.column + text.length);\n        return (\n          this.applyDelta(\n            { start: start, end: end, action: 'insert', lines: [text] },\n            !0\n          ),\n          this.clonePos(end)\n        );\n      }),\n      (this.clippedPos = function (row, column) {\n        let length = this.getLength();\n        void 0 === row\n          ? (row = length)\n          : 0 > row\n            ? (row = 0)\n            : row >= length && ((row = length - 1), (column = void 0));\n        let line = this.getLine(row);\n        return (\n          void 0 == column && (column = line.length),\n          (column = Math.min(Math.max(column, 0), line.length)),\n          { row: row, column: column }\n        );\n      }),\n      (this.clonePos = function (pos) {\n        return { row: pos.row, column: pos.column };\n      }),\n      (this.pos = function (row, column) {\n        return { row: row, column: column };\n      }),\n      (this.$clipPosition = function (position) {\n        let length = this.getLength();\n        return (\n          position.row >= length\n            ? ((position.row = Math.max(0, length - 1)),\n              (position.column = this.getLine(length - 1).length))\n            : ((position.row = Math.max(0, position.row)),\n              (position.column = Math.min(\n                Math.max(position.column, 0),\n                this.getLine(position.row).length\n              ))),\n          position\n        );\n      }),\n      (this.insertFullLines = function (row, lines) {\n        row = Math.min(Math.max(row, 0), this.getLength());\n        let column = 0;\n        this.getLength() > row\n          ? ((lines = lines.concat([''])), (column = 0))\n          : ((lines = [''].concat(lines)),\n            row--,\n            (column = this.$lines[row].length)),\n        this.insertMergedLines({ row: row, column: column }, lines);\n      }),\n      (this.insertMergedLines = function (position, lines) {\n        let start = this.clippedPos(position.row, position.column),\n          end = {\n            row: start.row + lines.length - 1,\n            column:\n                  (1 == lines.length ? start.column : 0) +\n                  lines[lines.length - 1].length,\n          };\n        return (\n          this.applyDelta({\n            start: start,\n            end: end,\n            action: 'insert',\n            lines: lines,\n          }),\n          this.clonePos(end)\n        );\n      }),\n      (this.remove = function (range) {\n        let start = this.clippedPos(range.start.row, range.start.column),\n          end = this.clippedPos(range.end.row, range.end.column);\n        return (\n          this.applyDelta({\n            start: start,\n            end: end,\n            action: 'remove',\n            lines: this.getLinesForRange({ start: start, end: end }),\n          }),\n          this.clonePos(start)\n        );\n      }),\n      (this.removeInLine = function (row, startColumn, endColumn) {\n        let start = this.clippedPos(row, startColumn),\n          end = this.clippedPos(row, endColumn);\n        return (\n          this.applyDelta(\n            {\n              start: start,\n              end: end,\n              action: 'remove',\n              lines: this.getLinesForRange({ start: start, end: end }),\n            },\n            !0\n          ),\n          this.clonePos(start)\n        );\n      }),\n      (this.removeFullLines = function (firstRow, lastRow) {\n        (firstRow = Math.min(Math.max(0, firstRow), this.getLength() - 1)),\n        (lastRow = Math.min(Math.max(0, lastRow), this.getLength() - 1));\n        let deleteFirstNewLine =\n                lastRow == this.getLength() - 1 && firstRow > 0,\n          deleteLastNewLine = this.getLength() - 1 > lastRow,\n          startRow = deleteFirstNewLine ? firstRow - 1 : firstRow,\n          startCol = deleteFirstNewLine ? this.getLine(startRow).length : 0,\n          endRow = deleteLastNewLine ? lastRow + 1 : lastRow,\n          endCol = deleteLastNewLine ? 0 : this.getLine(endRow).length,\n          range = new Range(startRow, startCol, endRow, endCol),\n          deletedLines = this.$lines.slice(firstRow, lastRow + 1);\n        return (\n          this.applyDelta({\n            start: range.start,\n            end: range.end,\n            action: 'remove',\n            lines: this.getLinesForRange(range),\n          }),\n          deletedLines\n        );\n      }),\n      (this.removeNewLine = function (row) {\n        this.getLength() - 1 > row &&\n              row >= 0 &&\n              this.applyDelta({\n                start: this.pos(row, this.getLine(row).length),\n                end: this.pos(row + 1, 0),\n                action: 'remove',\n                lines: ['', ''],\n              });\n      }),\n      (this.replace = function (range, text) {\n        if (\n          (range instanceof Range ||\n                (range = Range.fromPoints(range.start, range.end)),\n            0 === text.length && range.isEmpty())\n        )\n          {return range.start;}\n        if (text == this.getTextRange(range)) return range.end;\n        this.remove(range);\n        let end;\n        return (end = text ? this.insert(range.start, text) : range.start);\n      }),\n      (this.applyDeltas = function (deltas) {\n        for (let i = 0; deltas.length > i; i++) this.applyDelta(deltas[i]);\n      }),\n      (this.revertDeltas = function (deltas) {\n        for (let i = deltas.length - 1; i >= 0; i--)\n          {this.revertDelta(deltas[i]);}\n      }),\n      (this.applyDelta = function (delta, doNotValidate) {\n        let isInsert = 'insert' == delta.action;\n        (isInsert\n          ? 1 >= delta.lines.length && !delta.lines[0]\n          : !Range.comparePoints(delta.start, delta.end)) ||\n              (isInsert &&\n                delta.lines.length > 2e4 &&\n                this.$splitAndapplyLargeDelta(delta, 2e4),\n                applyDelta(this.$lines, delta, doNotValidate),\n                this._signal('change', delta));\n      }),\n      (this.$splitAndapplyLargeDelta = function (delta, MAX) {\n        for (\n          let lines = delta.lines,\n            l = lines.length,\n            row = delta.start.row,\n            column = delta.start.column,\n            from = 0,\n            to = 0;\n          ;\n\n        ) {\n          (from = to), (to += MAX - 1);\n          let chunk = lines.slice(from, to);\n          if (to > l) {\n            (delta.lines = chunk),\n            (delta.start.row = row + from),\n            (delta.start.column = column);\n            break;\n          }\n          chunk.push(''),\n          this.applyDelta(\n            {\n              start: this.pos(row + from, column),\n              end: this.pos(row + to, (column = 0)),\n              action: delta.action,\n              lines: chunk,\n            },\n            !0\n          );\n        }\n      }),\n      (this.revertDelta = function (delta) {\n        this.applyDelta({\n          start: this.clonePos(delta.start),\n          end: this.clonePos(delta.end),\n          action: 'insert' == delta.action ? 'remove' : 'insert',\n          lines: delta.lines.slice(),\n        });\n      }),\n      (this.indexToPosition = function (index, startRow) {\n        for (\n          var lines = this.$lines || this.getAllLines(),\n            newlineLength = this.getNewLineCharacter().length,\n            i = startRow || 0,\n            l = lines.length;\n          l > i;\n          i++\n        )\n          {if (((index -= lines[i].length + newlineLength), 0 > index))\n                return {\n                  row: i,\n                  column: index + lines[i].length + newlineLength,\n                };}\n        return { row: l - 1, column: lines[l - 1].length };\n      }),\n      (this.positionToIndex = function (pos, startRow) {\n        for (\n          var lines = this.$lines || this.getAllLines(),\n            newlineLength = this.getNewLineCharacter().length,\n            index = 0,\n            row = Math.min(pos.row, lines.length),\n            i = startRow || 0;\n          row > i;\n          ++i\n        )\n          {index += lines[i].length + newlineLength;}\n        return index + pos.column;\n      });\n    }.call(Document.prototype),\n      (exports.Document = Document));\n  }\n),\nace.define('ace/lib/lang', ['require', 'exports', 'module'], function (\n  acequire,\n  exports\n) {\n  (exports.last = function (a) {\n    return a[a.length - 1];\n  }),\n  (exports.stringReverse = function (string) {\n    return string\n      .split('')\n      .reverse()\n      .join('');\n  }),\n  (exports.stringRepeat = function (string, count) {\n    for (var result = ''; count > 0;)\n      {1 & count && (result += string), (count >>= 1) && (string += string);}\n    return result;\n  });\n  let trimBeginRegexp = /^\\s\\s*/,\n    trimEndRegexp = /\\s\\s*$/;\n  (exports.stringTrimLeft = function (string) {\n    return string.replace(trimBeginRegexp, '');\n  }),\n  (exports.stringTrimRight = function (string) {\n    return string.replace(trimEndRegexp, '');\n  }),\n  (exports.copyObject = function (obj) {\n    let copy = {};\n    for (let key in obj) copy[key] = obj[key];\n    return copy;\n  }),\n  (exports.copyArray = function (array) {\n    for (var copy = [], i = 0, l = array.length; l > i; i++)\n      {copy[i] =\n            array[i] && 'object' == typeof array[i]\n              ? this.copyObject(array[i])\n              : array[i];}\n    return copy;\n  }),\n  (exports.deepCopy = function deepCopy(obj) {\n    if ('object' !== typeof obj || !obj) return obj;\n    let copy;\n    if (Array.isArray(obj)) {\n      copy = [];\n      for (var key = 0; obj.length > key; key++)\n        {copy[key] = deepCopy(obj[key]);}\n      return copy;\n    }\n    if ('[object Object]' !== Object.prototype.toString.call(obj))\n      {return obj;}\n    copy = {};\n    for (var key in obj) copy[key] = deepCopy(obj[key]);\n    return copy;\n  }),\n  (exports.arrayToMap = function (arr) {\n    for (var map = {}, i = 0; arr.length > i; i++) map[arr[i]] = 1;\n    return map;\n  }),\n  (exports.createMap = function (props) {\n    let map = Object.create(null);\n    for (let i in props) map[i] = props[i];\n    return map;\n  }),\n  (exports.arrayRemove = function (array, value) {\n    for (let i = 0; array.length >= i; i++)\n      {value === array[i] && array.splice(i, 1);}\n  }),\n  (exports.escapeRegExp = function (str) {\n    return str.replace(/([.*+?^${}()|[\\]\\/\\\\])/g, '\\\\$1');\n  }),\n  (exports.escapeHTML = function (str) {\n    return str\n      .replace(/&/g, '&#38;')\n      .replace(/\"/g, '&#34;')\n      .replace(/'/g, '&#39;')\n      .replace(/</g, '&#60;');\n  }),\n  (exports.getMatchOffsets = function (string, regExp) {\n    let matches = [];\n    return (\n      string.replace(regExp, function (str) {\n        matches.push({\n          offset: arguments[arguments.length - 2],\n          length: str.length,\n        });\n      }),\n      matches\n    );\n  }),\n  (exports.deferredCall = function (fcn) {\n    var timer = null,\n      callback = function () {\n        (timer = null), fcn();\n      },\n      deferred = function (timeout) {\n        return (\n          deferred.cancel(),\n          (timer = setTimeout(callback, timeout || 0)),\n          deferred\n        );\n      };\n    return (\n      (deferred.schedule = deferred),\n      (deferred.call = function () {\n        return this.cancel(), fcn(), deferred;\n      }),\n      (deferred.cancel = function () {\n        return clearTimeout(timer), (timer = null), deferred;\n      }),\n      (deferred.isPending = function () {\n        return timer;\n      }),\n      deferred\n    );\n  }),\n  (exports.delayedCall = function (fcn, defaultTimeout) {\n    let timer = null,\n      callback = function () {\n        (timer = null), fcn();\n      },\n      _self = function (timeout) {\n        null == timer &&\n              (timer = setTimeout(callback, timeout || defaultTimeout));\n      };\n    return (\n      (_self.delay = function (timeout) {\n        timer && clearTimeout(timer),\n        (timer = setTimeout(callback, timeout || defaultTimeout));\n      }),\n      (_self.schedule = _self),\n      (_self.call = function () {\n        this.cancel(), fcn();\n      }),\n      (_self.cancel = function () {\n        timer && clearTimeout(timer), (timer = null);\n      }),\n      (_self.isPending = function () {\n        return timer;\n      }),\n      _self\n    );\n  });\n}),\nace.define(\n  'ace/worker/mirror',\n  [\n    'require',\n    'exports',\n    'module',\n    'ace/range',\n    'ace/document',\n    'ace/lib/lang',\n  ],\n  function (acequire, exports) {\n    acequire('../range').Range;\n    let Document = acequire('../document').Document,\n      lang = acequire('../lib/lang'),\n      Mirror = (exports.Mirror = function (sender) {\n        this.sender = sender;\n        let doc = (this.doc = new Document('')),\n          deferredUpdate = (this.deferredUpdate = lang.delayedCall(\n            this.onUpdate.bind(this)\n          )),\n          _self = this;\n        sender.on('change', function (e) {\n          let data = e.data;\n          if (data[0].start) doc.applyDeltas(data);\n          else\n            {for (var i = 0; data.length > i; i += 2) {\n                if (Array.isArray(data[i + 1]))\n                  var d = {\n                    action: 'insert',\n                    start: data[i],\n                    lines: data[i + 1],\n                  };\n                else\n                  var d = {\n                    action: 'remove',\n                    start: data[i],\n                    end: data[i + 1],\n                  };\n                doc.applyDelta(d, !0);\n              }}\n          return _self.$timeout\n            ? deferredUpdate.schedule(_self.$timeout)\n            : (_self.onUpdate(), void 0);\n        });\n      });\n    (function () {\n      (this.$timeout = 500),\n      (this.setTimeout = function (timeout) {\n        this.$timeout = timeout;\n      }),\n      (this.setValue = function (value) {\n        this.doc.setValue(value),\n        this.deferredUpdate.schedule(this.$timeout);\n      }),\n      (this.getValue = function (callbackId) {\n        this.sender.callback(this.doc.getValue(), callbackId);\n      }),\n      (this.onUpdate = function () {}),\n      (this.isPending = function () {\n        return this.deferredUpdate.isPending();\n      });\n    }.call(Mirror.prototype));\n  }\n),\nace.define('ace/lib/es5-shim', ['require', 'exports', 'module'], function () {\n  function Empty() {}\n  function doesDefinePropertyWork(object) {\n    try {\n      return (\n        Object.defineProperty(object, 'sentinel', {}), 'sentinel' in object\n      );\n    } catch (exception) {}\n  }\n  function toInteger(n) {\n    return (\n      (n = +n),\n      n !== n\n        ? (n = 0)\n        : 0 !== n &&\n            n !== 1 / 0 &&\n            n !== -(1 / 0) &&\n            (n = (n > 0 || -1) * Math.floor(Math.abs(n))),\n      n\n    );\n  }\n  Function.prototype.bind ||\n      (Function.prototype.bind = function (that) {\n        let target = this;\n        if ('function' !== typeof target)\n          {throw new TypeError(\n            'Function.prototype.bind called on incompatible ' + target\n          );}\n        var args = slice.call(arguments, 1),\n          bound = function () {\n            if (this instanceof bound) {\n              let result = target.apply(\n                this,\n                args.concat(slice.call(arguments))\n              );\n              return Object(result) === result ? result : this;\n            }\n            return target.apply(that, args.concat(slice.call(arguments)));\n          };\n        return (\n          target.prototype &&\n            ((Empty.prototype = target.prototype),\n              (bound.prototype = new Empty()),\n              (Empty.prototype = null)),\n          bound\n        );\n      });\n  var defineGetter,\n    defineSetter,\n    lookupGetter,\n    lookupSetter,\n    supportsAccessors,\n    call = Function.prototype.call,\n    prototypeOfArray = Array.prototype,\n    prototypeOfObject = Object.prototype,\n    slice = prototypeOfArray.slice,\n    _toString = call.bind(prototypeOfObject.toString),\n    owns = call.bind(prototypeOfObject.hasOwnProperty);\n  if (\n    ((supportsAccessors = owns(prototypeOfObject, '__defineGetter__')) &&\n        ((defineGetter = call.bind(prototypeOfObject.__defineGetter__)),\n          (defineSetter = call.bind(prototypeOfObject.__defineSetter__)),\n          (lookupGetter = call.bind(prototypeOfObject.__lookupGetter__)),\n          (lookupSetter = call.bind(prototypeOfObject.__lookupSetter__))),\n      2 != [1, 2].splice(0).length)\n  )\n    {if (\n        (function() {\n          function makeArray(l) {\n            var a = Array(l + 2);\n            return (a[0] = a[1] = 0), a;\n          }\n          var lengthBefore,\n            array = [];\n          return (\n            array.splice.apply(array, makeArray(20)),\n            array.splice.apply(array, makeArray(26)),\n            (lengthBefore = array.length),\n            array.splice(5, 0, 'XXX'),\n            lengthBefore + 1 == array.length,\n            lengthBefore + 1 == array.length ? !0 : void 0\n          );\n        })()\n      ) {\n        var array_splice = Array.prototype.splice;\n        Array.prototype.splice = function(start, deleteCount) {\n          return arguments.length\n            ? array_splice.apply(\n                this,\n                [\n                  void 0 === start ? 0 : start,\n                  void 0 === deleteCount ? this.length - start : deleteCount,\n                ].concat(slice.call(arguments, 2))\n              )\n            : [];\n        };\n      } else\n        Array.prototype.splice = function(pos, removeCount) {\n          var length = this.length;\n          pos > 0\n            ? pos > length && (pos = length)\n            : void 0 == pos\n              ? (pos = 0)\n              : 0 > pos && (pos = Math.max(length + pos, 0)),\n            length > pos + removeCount || (removeCount = length - pos);\n          var removed = this.slice(pos, pos + removeCount),\n            insert = slice.call(arguments, 2),\n            add = insert.length;\n          if (pos === length) add && this.push.apply(this, insert);\n          else {\n            var remove = Math.min(removeCount, length - pos),\n              tailOldPos = pos + remove,\n              tailNewPos = tailOldPos + add - remove,\n              tailCount = length - tailOldPos,\n              lengthAfterRemove = length - remove;\n            if (tailOldPos > tailNewPos)\n              for (var i = 0; tailCount > i; ++i)\n                this[tailNewPos + i] = this[tailOldPos + i];\n            else if (tailNewPos > tailOldPos)\n              for (i = tailCount; i--; )\n                this[tailNewPos + i] = this[tailOldPos + i];\n            if (add && pos === lengthAfterRemove)\n              (this.length = lengthAfterRemove), this.push.apply(this, insert);\n            else\n              for (this.length = lengthAfterRemove + add, i = 0; add > i; ++i)\n                this[pos + i] = insert[i];\n          }\n          return removed;\n        };}\n  Array.isArray ||\n      (Array.isArray = function (obj) {\n        return '[object Array]' == _toString(obj);\n      });\n  let boxedString = Object('a'),\n    splitString = 'a' != boxedString[0] || !(0 in boxedString);\n  if (\n    (Array.prototype.forEach ||\n        (Array.prototype.forEach = function (fun) {\n          let object = toObject(this),\n            self =\n              splitString && '[object String]' == _toString(this)\n                ? this.split('')\n                : object,\n            thisp = arguments[1],\n            i = -1,\n            length = self.length >>> 0;\n          if ('[object Function]' != _toString(fun)) throw new TypeError();\n          for (; length > ++i;)\n            {i in self && fun.call(thisp, self[i], i, object);}\n        }),\n      Array.prototype.map ||\n        (Array.prototype.map = function (fun) {\n          let object = toObject(this),\n            self =\n              splitString && '[object String]' == _toString(this)\n                ? this.split('')\n                : object,\n            length = self.length >>> 0,\n            result = Array(length),\n            thisp = arguments[1];\n          if ('[object Function]' != _toString(fun))\n            {throw new TypeError(fun + ' is not a function');}\n          for (let i = 0; length > i; i++)\n            {i in self && (result[i] = fun.call(thisp, self[i], i, object));}\n          return result;\n        }),\n      Array.prototype.filter ||\n        (Array.prototype.filter = function (fun) {\n          let value,\n            object = toObject(this),\n            self =\n              splitString && '[object String]' == _toString(this)\n                ? this.split('')\n                : object,\n            length = self.length >>> 0,\n            result = [],\n            thisp = arguments[1];\n          if ('[object Function]' != _toString(fun))\n            {throw new TypeError(fun + ' is not a function');}\n          for (let i = 0; length > i; i++)\n            {i in self &&\n              ((value = self[i]),\n              fun.call(thisp, value, i, object) && result.push(value));}\n          return result;\n        }),\n      Array.prototype.every ||\n        (Array.prototype.every = function (fun) {\n          let object = toObject(this),\n            self =\n              splitString && '[object String]' == _toString(this)\n                ? this.split('')\n                : object,\n            length = self.length >>> 0,\n            thisp = arguments[1];\n          if ('[object Function]' != _toString(fun))\n            {throw new TypeError(fun + ' is not a function');}\n          for (let i = 0; length > i; i++)\n            {if (i in self && !fun.call(thisp, self[i], i, object)) return !1;}\n          return !0;\n        }),\n      Array.prototype.some ||\n        (Array.prototype.some = function (fun) {\n          let object = toObject(this),\n            self =\n              splitString && '[object String]' == _toString(this)\n                ? this.split('')\n                : object,\n            length = self.length >>> 0,\n            thisp = arguments[1];\n          if ('[object Function]' != _toString(fun))\n            {throw new TypeError(fun + ' is not a function');}\n          for (let i = 0; length > i; i++)\n            {if (i in self && fun.call(thisp, self[i], i, object)) return !0;}\n          return !1;\n        }),\n      Array.prototype.reduce ||\n        (Array.prototype.reduce = function (fun) {\n          let object = toObject(this),\n            self =\n              splitString && '[object String]' == _toString(this)\n                ? this.split('')\n                : object,\n            length = self.length >>> 0;\n          if ('[object Function]' != _toString(fun))\n            {throw new TypeError(fun + ' is not a function');}\n          if (!length && 1 == arguments.length)\n            {throw new TypeError('reduce of empty array with no initial value');}\n          let result,\n            i = 0;\n          if (arguments.length >= 2) result = arguments[1];\n          else\n            {for (;;) {\n              if (i in self) {\n                result = self[i++];\n                break;\n              }\n              if (++i >= length)\n                throw new TypeError(\n                  'reduce of empty array with no initial value'\n                );\n            }}\n          for (; length > i; i++)\n            {i in self &&\n              (result = fun.call(void 0, result, self[i], i, object));}\n          return result;\n        }),\n      Array.prototype.reduceRight ||\n        (Array.prototype.reduceRight = function (fun) {\n          let object = toObject(this),\n            self =\n              splitString && '[object String]' == _toString(this)\n                ? this.split('')\n                : object,\n            length = self.length >>> 0;\n          if ('[object Function]' != _toString(fun))\n            {throw new TypeError(fun + ' is not a function');}\n          if (!length && 1 == arguments.length)\n            {throw new TypeError(\n              'reduceRight of empty array with no initial value'\n            );}\n          let result,\n            i = length - 1;\n          if (arguments.length >= 2) result = arguments[1];\n          else\n            {for (;;) {\n              if (i in self) {\n                result = self[i--];\n                break;\n              }\n              if (0 > --i)\n                throw new TypeError(\n                  'reduceRight of empty array with no initial value'\n                );\n            }}\n          do\n            {i in this &&\n              (result = fun.call(void 0, result, self[i], i, object));}\n          while (i--);\n          return result;\n        }),\n      (Array.prototype.indexOf && -1 == [0, 1].indexOf(1, 2)) ||\n        (Array.prototype.indexOf = function (sought) {\n          let self =\n              splitString && '[object String]' == _toString(this)\n                ? this.split('')\n                : toObject(this),\n            length = self.length >>> 0;\n          if (!length) return -1;\n          let i = 0;\n          for (\n            arguments.length > 1 && (i = toInteger(arguments[1])),\n            i = i >= 0 ? i : Math.max(0, length + i);\n            length > i;\n            i++\n          )\n            {if (i in self && self[i] === sought) return i;}\n          return -1;\n        }),\n      (Array.prototype.lastIndexOf && -1 == [0, 1].lastIndexOf(0, -3)) ||\n        (Array.prototype.lastIndexOf = function (sought) {\n          let self =\n              splitString && '[object String]' == _toString(this)\n                ? this.split('')\n                : toObject(this),\n            length = self.length >>> 0;\n          if (!length) return -1;\n          let i = length - 1;\n          for (\n            arguments.length > 1 && (i = Math.min(i, toInteger(arguments[1]))),\n            i = i >= 0 ? i : length - Math.abs(i);\n            i >= 0;\n            i--\n          )\n            {if (i in self && sought === self[i]) return i;}\n          return -1;\n        }),\n      Object.getPrototypeOf ||\n        (Object.getPrototypeOf = function (object) {\n          return (\n            object.__proto__ ||\n            (object.constructor\n              ? object.constructor.prototype\n              : prototypeOfObject)\n          );\n        }),\n      !Object.getOwnPropertyDescriptor)\n  ) {\n    let ERR_NON_OBJECT =\n        'Object.getOwnPropertyDescriptor called on a non-object: ';\n    Object.getOwnPropertyDescriptor = function (object, property) {\n      if (\n        ('object' !== typeof object && 'function' !== typeof object) ||\n          null === object\n      )\n        {throw new TypeError(ERR_NON_OBJECT + object);}\n      if (owns(object, property)) {\n        var descriptor, getter, setter;\n        if (\n          ((descriptor = { enumerable: !0, configurable: !0 }),\n            supportsAccessors)\n        ) {\n          let prototype = object.__proto__;\n          object.__proto__ = prototypeOfObject;\n          var getter = lookupGetter(object, property),\n            setter = lookupSetter(object, property);\n          if (((object.__proto__ = prototype), getter || setter))\n            {return (\n                getter && (descriptor.get = getter),\n                setter && (descriptor.set = setter),\n                descriptor\n              );}\n        }\n        return (descriptor.value = object[property]), descriptor;\n      }\n    };\n  }\n  if (\n    (Object.getOwnPropertyNames ||\n        (Object.getOwnPropertyNames = function (object) {\n          return Object.keys(object);\n        }),\n      !Object.create)\n  ) {\n    let createEmpty;\n    (createEmpty =\n        null === Object.prototype.__proto__\n          ? function () {\n            return { __proto__: null };\n          }\n          : function () {\n            let empty = {};\n            for (let i in empty) empty[i] = null;\n            return (\n              (empty.constructor = empty.hasOwnProperty = empty.propertyIsEnumerable = empty.isPrototypeOf = empty.toLocaleString = empty.toString = empty.valueOf = empty.__proto__ = null),\n              empty\n            );\n          }),\n    (Object.create = function (prototype, properties) {\n      let object;\n      if (null === prototype) object = createEmpty();\n      else {\n        if ('object' !== typeof prototype)\n          {throw new TypeError(\n                'typeof prototype[' + typeof prototype + \"] != 'object'\"\n              );}\n        let Type = function () {};\n        (Type.prototype = prototype),\n        (object = new Type()),\n        (object.__proto__ = prototype);\n      }\n      return (\n        void 0 !== properties &&\n              Object.defineProperties(object, properties),\n        object\n      );\n    });\n  }\n  if (Object.defineProperty) {\n    let definePropertyWorksOnObject = doesDefinePropertyWork({}),\n      definePropertyWorksOnDom =\n          'undefined' === typeof document ||\n          doesDefinePropertyWork(document.createElement('div'));\n    if (!definePropertyWorksOnObject || !definePropertyWorksOnDom)\n      {var definePropertyFallback = Object.defineProperty;}\n  }\n  if (!Object.defineProperty || definePropertyFallback) {\n    let ERR_NON_OBJECT_DESCRIPTOR =\n          'Property description must be an object: ',\n      ERR_NON_OBJECT_TARGET = 'Object.defineProperty called on non-object: ',\n      ERR_ACCESSORS_NOT_SUPPORTED =\n          'getters & setters can not be defined on this javascript engine';\n    Object.defineProperty = function (object, property, descriptor) {\n      if (\n        ('object' !== typeof object && 'function' !== typeof object) ||\n          null === object\n      )\n        {throw new TypeError(ERR_NON_OBJECT_TARGET + object);}\n      if (\n        ('object' !== typeof descriptor && 'function' !== typeof descriptor) ||\n          null === descriptor\n      )\n        {throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);}\n      if (definePropertyFallback)\n        {try {\n            return definePropertyFallback.call(\n              Object,\n              object,\n              property,\n              descriptor\n            );\n          } catch (exception) {}}\n      if (owns(descriptor, 'value'))\n        {if (\n            supportsAccessors &&\n            (lookupGetter(object, property) || lookupSetter(object, property))\n          ) {\n            var prototype = object.__proto__;\n            (object.__proto__ = prototypeOfObject),\n              delete object[property],\n              (object[property] = descriptor.value),\n              (object.__proto__ = prototype);\n          } else object[property] = descriptor.value;}\n      else {\n        if (!supportsAccessors)\n          {throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);}\n        owns(descriptor, 'get') &&\n            defineGetter(object, property, descriptor.get),\n        owns(descriptor, 'set') &&\n              defineSetter(object, property, descriptor.set);\n      }\n      return object;\n    };\n  }\n  Object.defineProperties ||\n      (Object.defineProperties = function (object, properties) {\n        for (let property in properties)\n          {owns(properties, property) &&\n            Object.defineProperty(object, property, properties[property]);}\n        return object;\n      }),\n  Object.seal ||\n        (Object.seal = function (object) {\n          return object;\n        }),\n  Object.freeze ||\n        (Object.freeze = function (object) {\n          return object;\n        });\n  try {\n    Object.freeze(function () {});\n  } catch (exception) {\n    Object.freeze = (function (freezeObject) {\n      return function (object) {\n        return 'function' === typeof object ? object : freezeObject(object);\n      };\n    }(Object.freeze));\n  }\n  if (\n    (Object.preventExtensions ||\n        (Object.preventExtensions = function (object) {\n          return object;\n        }),\n      Object.isSealed ||\n        (Object.isSealed = function () {\n          return !1;\n        }),\n      Object.isFrozen ||\n        (Object.isFrozen = function () {\n          return !1;\n        }),\n      Object.isExtensible ||\n        (Object.isExtensible = function (object) {\n          if (Object(object) === object) throw new TypeError();\n          for (var name = ''; owns(object, name);) name += '?';\n          object[name] = !0;\n          let returnValue = owns(object, name);\n          return delete object[name], returnValue;\n        }),\n      !Object.keys)\n  ) {\n    let hasDontEnumBug = !0,\n      dontEnums = [\n        'toString',\n        'toLocaleString',\n        'valueOf',\n        'hasOwnProperty',\n        'isPrototypeOf',\n        'propertyIsEnumerable',\n        'constructor',\n      ],\n      dontEnumsLength = dontEnums.length;\n    for (let key in { toString: null }) hasDontEnumBug = !1;\n    Object.keys = function (object) {\n      if (\n        ('object' !== typeof object && 'function' !== typeof object) ||\n          null === object\n      )\n        {throw new TypeError('Object.keys called on a non-object');}\n      let keys = [];\n      for (let name in object) owns(object, name) && keys.push(name);\n      if (hasDontEnumBug)\n        {for (var i = 0, ii = dontEnumsLength; ii > i; i++) {\n            var dontEnum = dontEnums[i];\n            owns(object, dontEnum) && keys.push(dontEnum);\n          }}\n      return keys;\n    };\n  }\n  Date.now ||\n      (Date.now = function () {\n        return new Date().getTime();\n      });\n  let ws = '\t\\nv\\f\\r   ᠎             　\\u2028\\u2029﻿';\n  if (!String.prototype.trim || ws.trim()) {\n    ws = '[' + ws + ']';\n    let trimBeginRegexp = RegExp('^' + ws + ws + '*'),\n      trimEndRegexp = RegExp(ws + ws + '*$');\n    String.prototype.trim = function () {\n      return (this + '')\n        .replace(trimBeginRegexp, '')\n        .replace(trimEndRegexp, '');\n    };\n  }\n  var toObject = function (o) {\n    if (null == o) throw new TypeError('can\\'t convert ' + o + ' to object');\n    return Object(o);\n  };\n});\nace.define(\n  'sense_editor/mode/worker_parser',\n  ['require', 'exports', 'module'],\n  function () {\n    let at, // The index of the current character\n      ch, // The current character\n      annos, // annotations\n      escapee = {\n        '\"': '\"',\n        '\\\\': '\\\\',\n        '/': '/',\n        b: '\\b',\n        f: '\\f',\n        n: '\\n',\n        r: '\\r',\n        t: '\\t',\n      },\n      text,\n      annotate = function (type, text) {\n        annos.push({ type: type, text: text, at: at });\n      },\n      error = function (m) {\n        throw {\n          name: 'SyntaxError',\n          message: m,\n          at: at,\n          text: text,\n        };\n      },\n      reset = function (newAt) {\n        ch = text.charAt(newAt);\n        at = newAt + 1;\n      },\n      next = function (c) {\n        if (c && c !== ch) {\n          error('Expected \\'' + c + '\\' instead of \\'' + ch + '\\'');\n        }\n\n        ch = text.charAt(at);\n        at += 1;\n        return ch;\n      },\n      nextUpTo = function (upTo, errorMessage) {\n        let currentAt = at,\n          i = text.indexOf(upTo, currentAt);\n        if (i < 0) {\n          error(errorMessage || 'Expected \\'' + upTo + '\\'');\n        }\n        reset(i + upTo.length);\n        return text.substring(currentAt, i);\n      },\n      peek = function (c) {\n        return text.substr(at, c.length) === c; // nocommit - double check\n      },\n      number = function () {\n        let number,\n          string = '';\n\n        if (ch === '-') {\n          string = '-';\n          next('-');\n        }\n        while (ch >= '0' && ch <= '9') {\n          string += ch;\n          next();\n        }\n        if (ch === '.') {\n          string += '.';\n          while (next() && ch >= '0' && ch <= '9') {\n            string += ch;\n          }\n        }\n        if (ch === 'e' || ch === 'E') {\n          string += ch;\n          next();\n          if (ch === '-' || ch === '+') {\n            string += ch;\n            next();\n          }\n          while (ch >= '0' && ch <= '9') {\n            string += ch;\n            next();\n          }\n        }\n        number = +string;\n        if (isNaN(number)) {\n          error('Bad number');\n        } else {\n          return number;\n        }\n      },\n      string = function () {\n        let hex,\n          i,\n          string = '',\n          uffff;\n\n        if (ch === '\"') {\n          if (peek('\"\"')) {\n            // literal\n            next('\"');\n            next('\"');\n            return nextUpTo('\"\"\"', 'failed to find closing \\'\"\"\"\\'');\n          } else {\n            while (next()) {\n              if (ch === '\"') {\n                next();\n                return string;\n              } else if (ch === '\\\\') {\n                next();\n                if (ch === 'u') {\n                  uffff = 0;\n                  for (i = 0; i < 4; i += 1) {\n                    hex = parseInt(next(), 16);\n                    if (!isFinite(hex)) {\n                      break;\n                    }\n                    uffff = uffff * 16 + hex;\n                  }\n                  string += String.fromCharCode(uffff);\n                } else if (typeof escapee[ch] === 'string') {\n                  string += escapee[ch];\n                } else {\n                  break;\n                }\n              } else {\n                string += ch;\n              }\n            }\n          }\n        }\n        error('Bad string');\n      },\n      white = function () {\n        while (ch && ch <= ' ') {\n          next();\n        }\n      },\n      strictWhite = function () {\n        while (ch && (ch == ' ' || ch == '\\t')) {\n          next();\n        }\n      },\n      newLine = function () {\n        if (ch == '\\n') next();\n      },\n      word = function () {\n        switch (ch) {\n          case 't':\n            next('t');\n            next('r');\n            next('u');\n            next('e');\n            return true;\n          case 'f':\n            next('f');\n            next('a');\n            next('l');\n            next('s');\n            next('e');\n            return false;\n          case 'n':\n            next('n');\n            next('u');\n            next('l');\n            next('l');\n            return null;\n        }\n        error('Unexpected \\'' + ch + '\\'');\n      },\n      // parses and returns the method\n      method = function () {\n        switch (ch) {\n          case 'G':\n            next('G');\n            next('E');\n            next('T');\n            return 'GET';\n          case 'H':\n            next('H');\n            next('E');\n            next('A');\n            next('D');\n            return 'HEAD';\n          case 'D':\n            next('D');\n            next('E');\n            next('L');\n            next('E');\n            next('T');\n            next('E');\n            return 'DELETE';\n          case 'P':\n            next('P');\n            switch (ch) {\n              case 'U':\n                next('U');\n                next('T');\n                return 'PUT';\n              case 'O':\n                next('O');\n                next('S');\n                next('T');\n                return 'POST';\n              default:\n                error('Unexpected \\'' + ch + '\\'');\n            }\n            break;\n          default:\n            error('Expected one of GET/POST/PUT/DELETE/HEAD');\n        }\n      },\n      value, // Place holder for the value function.\n      array = function () {\n        const array = [];\n\n        if (ch === '[') {\n          next('[');\n          white();\n          if (ch === ']') {\n            next(']');\n            return array; // empty array\n          }\n          while (ch) {\n            array.push(value());\n            white();\n            if (ch === ']') {\n              next(']');\n              return array;\n            }\n            next(',');\n            white();\n          }\n        }\n        error('Bad array');\n      },\n      object = function () {\n        let key,\n          object = {};\n\n        if (ch === '{') {\n          next('{');\n          white();\n          if (ch === '}') {\n            next('}');\n            return object; // empty object\n          }\n          while (ch) {\n            key = string();\n            white();\n            next(':');\n            if (Object.hasOwnProperty.call(object, key)) {\n              error('Duplicate key \"' + key + '\"');\n            }\n            object[key] = value();\n            white();\n            if (ch === '}') {\n              next('}');\n              return object;\n            }\n            next(',');\n            white();\n          }\n        }\n        error('Bad object');\n      };\n\n    value = function () {\n      white();\n      switch (ch) {\n        case '{':\n          return object();\n        case '[':\n          return array();\n        case '\"':\n          return string();\n        case '-':\n          return number();\n        default:\n          return ch >= '0' && ch <= '9' ? number() : word();\n      }\n    };\n\n    let url = function () {\n        let url = '';\n        while (ch && ch != '\\n') {\n          url += ch;\n          next();\n        }\n        if (url == '') {\n          error('Missing url');\n        }\n        return url;\n      },\n      request = function () {\n        white();\n        method();\n        strictWhite();\n        url();\n        strictWhite(); // advance to one new line\n        newLine();\n        strictWhite();\n        if (ch == '{') {\n          object();\n        }\n        // multi doc request\n        strictWhite(); // advance to one new line\n        newLine();\n        strictWhite();\n        while (ch == '{') {\n          // another object\n          object();\n          strictWhite();\n          newLine();\n          strictWhite();\n        }\n      },\n      comment = function () {\n        while (ch == '#') {\n          while (ch && ch !== '\\n') {\n            next();\n          }\n          white();\n        }\n      },\n      multi_request = function () {\n        while (ch && ch != '') {\n          white();\n          if (!ch) {\n            continue;\n          }\n          try {\n            comment();\n            white();\n            if (!ch) {\n              continue;\n            }\n            request();\n            white();\n          } catch (e) {\n            annotate('error', e.message);\n            // snap\n            const substring = text.substr(at);\n            const nextMatch = substring.search(/^POST|HEAD|GET|PUT|DELETE/m);\n            if (nextMatch < 1) return;\n            reset(at + nextMatch);\n          }\n        }\n      };\n\n    return function (source, reviver) {\n      let result;\n\n      text = source;\n      at = 0;\n      annos = [];\n      next();\n      multi_request();\n      white();\n      if (ch) {\n        annotate('error', 'Syntax error');\n      }\n\n      result = { annotations: annos };\n\n      return typeof reviver === 'function'\n        ? (function walk(holder, key) {\n          let k,\n            v,\n            value = holder[key];\n          if (value && typeof value === 'object') {\n            for (k in value) {\n              if (Object.hasOwnProperty.call(value, k)) {\n                v = walk(value, k);\n                if (v !== undefined) {\n                  value[k] = v;\n                } else {\n                  delete value[k];\n                }\n              }\n            }\n          }\n          return reviver.call(holder, key, value);\n        }({ '': result }, ''))\n        : result;\n    };\n  }\n);\n\nace.define(\n  'sense_editor/mode/worker',\n  [\n    'require',\n    'exports',\n    'module',\n    'ace/lib/oop',\n    'ace/worker/mirror',\n    'sense_editor/mode/worker_parser',\n  ],\n  function (require, exports) {\n    const oop = require('ace/lib/oop');\n    const Mirror = require('ace/worker/mirror').Mirror;\n    const parse = require('sense_editor/mode/worker_parser');\n\n    const SenseWorker = (exports.SenseWorker = function (sender) {\n      Mirror.call(this, sender);\n      this.setTimeout(200);\n    });\n\n    oop.inherits(SenseWorker, Mirror);\n\n    (function () {\n      this.id = 'senseWorker';\n      this.onUpdate = function () {\n        const value = this.doc.getValue();\n        let pos, result;\n        try {\n          result = parse(value);\n        } catch (e) {\n          pos = this.charToDocumentPosition(e.at - 1);\n          this.sender.emit('error', {\n            row: pos.row,\n            column: pos.column,\n            text: e.message,\n            type: 'error',\n          });\n          return;\n        }\n        for (let i = 0; i < result.annotations.length; i++) {\n          pos = this.charToDocumentPosition(result.annotations[i].at - 1);\n          result.annotations[i].row = pos.row;\n          result.annotations[i].column = pos.column;\n        }\n        this.sender.emit('ok', result.annotations);\n      };\n\n      this.charToDocumentPosition = function (charPos) {\n        let i = 0;\n        const len = this.doc.getLength();\n        const nl = this.doc.getNewLineCharacter().length;\n\n        if (!len) {\n          return { row: 0, column: 0 };\n        }\n\n        let lineStart = 0,\n          line;\n        while (i < len) {\n          line = this.doc.getLine(i);\n          const lineLength = line.length + nl;\n          if (lineStart + lineLength > charPos) {\n            return {\n              row: i,\n              column: charPos - lineStart,\n            };\n          }\n\n          lineStart += lineLength;\n          i += 1;\n        }\n\n        return {\n          row: i - 1,\n          column: line.length,\n        };\n      };\n    }.call(SenseWorker.prototype));\n  }\n);\n");

/***/ }),

/***/ "../../../packages/osd-ace/target/web/ace/modes/index.js":
/*!****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-ace/target/web/ace/modes/index.js ***!
  \****************************************************************************************/
/*! exports provided: OpenSearchSqlHighlightRules, ScriptHighlightRules, XJsonHighlightRules, addXJsonToRules, installXJsonMode, XJsonMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lexer_rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lexer_rules */ "../../../packages/osd-ace/target/web/ace/modes/lexer_rules/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchSqlHighlightRules", function() { return _lexer_rules__WEBPACK_IMPORTED_MODULE_0__["OpenSearchSqlHighlightRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptHighlightRules", function() { return _lexer_rules__WEBPACK_IMPORTED_MODULE_0__["ScriptHighlightRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XJsonHighlightRules", function() { return _lexer_rules__WEBPACK_IMPORTED_MODULE_0__["XJsonHighlightRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addXJsonToRules", function() { return _lexer_rules__WEBPACK_IMPORTED_MODULE_0__["addXJsonToRules"]; });

/* harmony import */ var _x_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./x_json */ "../../../packages/osd-ace/target/web/ace/modes/x_json/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installXJsonMode", function() { return _x_json__WEBPACK_IMPORTED_MODULE_1__["installXJsonMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XJsonMode", function() { return _x_json__WEBPACK_IMPORTED_MODULE_1__["XJsonMode"]; });

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

/***/ "../../../packages/osd-ace/target/web/ace/modes/lexer_rules/index.js":
/*!****************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-ace/target/web/ace/modes/lexer_rules/index.js ***!
  \****************************************************************************************************/
/*! exports provided: OpenSearchSqlHighlightRules, ScriptHighlightRules, XJsonHighlightRules, addXJsonToRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _opensearch_sql_highlight_rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./opensearch_sql_highlight_rules */ "../../../packages/osd-ace/target/web/ace/modes/lexer_rules/opensearch_sql_highlight_rules.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchSqlHighlightRules", function() { return _opensearch_sql_highlight_rules__WEBPACK_IMPORTED_MODULE_0__["OpenSearchSqlHighlightRules"]; });

/* harmony import */ var _script_highlight_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script_highlight_rules */ "../../../packages/osd-ace/target/web/ace/modes/lexer_rules/script_highlight_rules.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptHighlightRules", function() { return _script_highlight_rules__WEBPACK_IMPORTED_MODULE_1__["ScriptHighlightRules"]; });

/* harmony import */ var _x_json_highlight_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./x_json_highlight_rules */ "../../../packages/osd-ace/target/web/ace/modes/lexer_rules/x_json_highlight_rules.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XJsonHighlightRules", function() { return _x_json_highlight_rules__WEBPACK_IMPORTED_MODULE_2__["XJsonHighlightRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addXJsonToRules", function() { return _x_json_highlight_rules__WEBPACK_IMPORTED_MODULE_2__["addToRules"]; });

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

/***/ "../../../packages/osd-ace/target/web/ace/modes/lexer_rules/opensearch_sql_highlight_rules.js":
/*!*****************************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-ace/target/web/ace/modes/lexer_rules/opensearch_sql_highlight_rules.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: OpenSearchSqlHighlightRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSearchSqlHighlightRules", function() { return OpenSearchSqlHighlightRules; });
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! brace */ "../../../node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_0__);
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


const {
  TextHighlightRules
} = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/text_highlight_rules');
const oop = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/lib/oop');
const OpenSearchSqlHighlightRules = function () {
  // See https://opensearch.org/docs/latest/search-plugins/sql/index/
  const keywords = 'describe|between|in|like|not|and|or|desc|select|from|where|having|group|by|order' + 'asc|desc|pivot|for|in|as|show|columns|include|frozen|tables|escape|limit|rlike|all|distinct|is';
  const builtinConstants = 'true|false';

  // See https://opensearch.org/docs/latest/search-plugins/sql/functions/
  const builtinFunctions = 'avg|count|first|first_value|last|last_value|max|min|sum|kurtosis|mad|percentile|percentile_rank|skewness' + '|stddev_pop|sum_of_squares|var_pop|histogram|case|coalesce|greatest|ifnull|iif|isnull|least|nullif|nvl' + '|curdate|current_date|current_time|current_timestamp|curtime|dateadd|datediff|datepart|datetrunc|date_add' + '|date_diff|date_part|date_trunc|day|dayname|dayofmonth|dayofweek|dayofyear|day_name|day_of_month|day_of_week' + '|day_of_year|dom|dow|doy|hour|hour_of_day|idow|isodayofweek|isodow|isoweek|isoweekofyear|iso_day_of_week|iso_week_of_year' + '|iw|iwoy|minute|minute_of_day|minute_of_hour|month|monthname|month_name|month_of_year|now|quarter|second|second_of_minute' + '|timestampadd|timestampdiff|timestamp_add|timestamp_diff|today|week|week_of_year|year|abs|acos|asin|atan|atan2|cbrt' + '|ceil|ceiling|cos|cosh|cot|degrees|e|exp|expm1|floor|log|log10|mod|pi|power|radians|rand|random|round|sign|signum|sin' + '|sinh|sqrt|tan|truncate|ascii|bit_length|char|character_length|char_length|concat|insert|lcase|left|length|locate' + '|ltrim|octet_length|position|repeat|replace|right|rtrim|space|substring|ucase|cast|convert|database|user|st_astext|st_aswkt' + '|st_distance|st_geometrytype|st_geomfromtext|st_wkttosql|st_x|st_y|st_z|score';

  // See https://opensearch.org/docs/latest/search-plugins/sql/datatypes/
  const dataTypes = 'null|boolean|byte|short|integer|long|double|float|half_float|scaled_float|keyword|text|binary|date|ip|object|nested|time' + '|interval_year|interval_month|interval_day|interval_hour|interval_minute|interval_second|interval_year_to_month' + 'inteval_day_to_hour|interval_day_to_minute|interval_day_to_second|interval_hour_to_minute|interval_hour_to_second' + 'interval_minute_to_second|geo_point|geo_shape|shape';
  const keywordMapper = this.createKeywordMapper({
    keyword: [keywords, builtinFunctions, builtinConstants, dataTypes].join('|')
  }, 'identifier', true);
  this.$rules = {
    start: [{
      token: 'comment',
      regex: '--.*$'
    }, {
      token: 'comment',
      start: '/\\*',
      end: '\\*/'
    }, {
      token: 'string',
      // " string
      regex: '".*?"'
    }, {
      token: 'constant',
      // ' string
      regex: "'.*?'"
    }, {
      token: 'string',
      // ` string (apache drill)
      regex: '`.*?`'
    }, {
      token: 'entity.name.function',
      // float
      regex: '[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b'
    }, {
      token: keywordMapper,
      regex: '[a-zA-Z_$][a-zA-Z0-9_$]*\\b'
    }, {
      token: 'keyword.operator',
      regex: '⇐|<⇒|\\*|\\.|\\:\\:|\\+|\\-|\\/|\\/\\/|%|&|\\^|~|<|>|<=|=>|==|!=|<>|='
    }, {
      token: 'paren.lparen',
      regex: '[\\(]'
    }, {
      token: 'paren.rparen',
      regex: '[\\)]'
    }, {
      token: 'text',
      regex: '\\s+'
    }]
  };
  this.normalizeRules();
};
oop.inherits(OpenSearchSqlHighlightRules, TextHighlightRules);

/***/ }),

/***/ "../../../packages/osd-ace/target/web/ace/modes/lexer_rules/script_highlight_rules.js":
/*!*********************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-ace/target/web/ace/modes/lexer_rules/script_highlight_rules.js ***!
  \*********************************************************************************************************************/
/*! exports provided: ScriptHighlightRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptHighlightRules", function() { return ScriptHighlightRules; });
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! brace */ "../../../node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_0__);
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


const oop = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/lib/oop');
const {
  TextHighlightRules
} = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/text_highlight_rules');
const painlessKeywords = 'def|int|long|byte|String|float|double|char|null|if|else|while|do|for|continue|break|new|try|catch|throw|this|instanceof|return|ctx';
function ScriptHighlightRules() {
  this.name = 'ScriptHighlightRules';
  this.$rules = {
    start: [{
      token: 'script.comment',
      regex: '\\/\\/.*$'
    }, {
      token: 'script.string.regexp',
      regex: '[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)'
    }, {
      token: 'script.string',
      // single line
      regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
    }, {
      token: 'script.constant.numeric',
      // hex
      regex: '0[xX][0-9a-fA-F]+\\b'
    }, {
      token: 'script.constant.numeric',
      // float
      regex: '[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b'
    }, {
      token: 'script.constant.language.boolean',
      regex: '(?:true|false)\\b'
    }, {
      token: 'script.keyword',
      regex: painlessKeywords
    }, {
      token: 'script.text',
      regex: '[a-zA-Z_$][a-zA-Z0-9_$]*\\b'
    }, {
      token: 'script.keyword.operator',
      regex: '\\?\\.|\\*\\.|=~|==~|!|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|->|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|typeof|void)'
    }, {
      token: 'script.lparen',
      regex: '[[({]'
    }, {
      token: 'script.rparen',
      regex: '[\\])}]'
    }, {
      token: 'script.text',
      regex: '\\s+'
    }]
  };
}
oop.inherits(ScriptHighlightRules, TextHighlightRules);

/***/ }),

/***/ "../../../packages/osd-ace/target/web/ace/modes/lexer_rules/x_json_highlight_rules.js":
/*!*********************************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-ace/target/web/ace/modes/lexer_rules/x_json_highlight_rules.js ***!
  \*********************************************************************************************************************/
/*! exports provided: XJsonHighlightRules, addToRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XJsonHighlightRules", function() { return XJsonHighlightRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToRules", function() { return addToRules; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! brace */ "../../../node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var brace_mode_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! brace/mode/json */ "../../../node_modules/brace/mode/json.js");
/* harmony import */ var brace_mode_json__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(brace_mode_json__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _opensearch_sql_highlight_rules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opensearch_sql_highlight_rules */ "../../../packages/osd-ace/target/web/ace/modes/lexer_rules/opensearch_sql_highlight_rules.js");
/* harmony import */ var _script_highlight_rules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./script_highlight_rules */ "../../../packages/osd-ace/target/web/ace/modes/lexer_rules/script_highlight_rules.js");
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






const {
  JsonHighlightRules
} = brace__WEBPACK_IMPORTED_MODULE_1___default.a.acequire('ace/mode/json_highlight_rules');
const oop = brace__WEBPACK_IMPORTED_MODULE_1___default.a.acequire('ace/lib/oop');
const jsonRules = function (root) {
  root = root ? root : 'json';
  const rules = {};
  const xJsonRules = [{
    token: ['variable', 'whitespace', 'ace.punctuation.colon', 'whitespace', 'punctuation.start_triple_quote'],
    regex: '("(?:[^"]*_)?script"|"inline"|"source")(\\s*?)(:)(\\s*?)(""")',
    next: 'script-start',
    merge: false,
    push: true
  }, {
    token: 'variable',
    // single line
    regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'
  }, {
    token: 'punctuation.start_triple_quote',
    regex: '"""',
    next: 'string_literal',
    merge: false,
    push: true
  }, {
    token: 'string',
    // single line
    regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
  }, {
    token: 'constant.numeric',
    // hex
    regex: '0[xX][0-9a-fA-F]+\\b'
  }, {
    token: 'constant.numeric',
    // float
    regex: '[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b'
  }, {
    token: 'constant.language.boolean',
    regex: '(?:true|false)\\b'
  }, {
    token: 'invalid.illegal',
    // single quoted strings are not allowed
    regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
  }, {
    token: 'invalid.illegal',
    // comments are not allowed
    regex: '\\/\\/.*$'
  }, {
    token: 'paren.lparen',
    merge: false,
    regex: '{',
    next: root,
    push: true
  }, {
    token: 'paren.lparen',
    merge: false,
    regex: '[[(]'
  }, {
    token: 'paren.rparen',
    merge: false,
    regex: '[\\])]'
  }, {
    token: 'paren.rparen',
    regex: '}',
    merge: false,
    next: 'pop'
  }, {
    token: 'punctuation.comma',
    regex: ','
  }, {
    token: 'punctuation.colon',
    regex: ':'
  }, {
    token: 'whitespace',
    regex: '\\s+'
  }, {
    token: 'text',
    regex: '.+?'
  }];
  rules[root] = xJsonRules;
  rules[root + '-sql'] = [{
    token: ['variable', 'whitespace', 'ace.punctuation.colon', 'whitespace', 'punctuation.start_triple_quote'],
    regex: '("query")(\\s*?)(:)(\\s*?)(""")',
    next: 'sql-start',
    merge: false,
    push: true
  }].concat(xJsonRules);
  rules.string_literal = [{
    token: 'punctuation.end_triple_quote',
    regex: '"""',
    next: 'pop'
  }, {
    token: 'multi_string',
    regex: '.'
  }];
  return rules;
};
function XJsonHighlightRules() {
  this.$rules = {
    ...jsonRules('start')
  };
  this.embedRules(_script_highlight_rules__WEBPACK_IMPORTED_MODULE_4__["ScriptHighlightRules"], 'script-', [{
    token: 'punctuation.end_triple_quote',
    regex: '"""',
    next: 'pop'
  }]);
  this.embedRules(_opensearch_sql_highlight_rules__WEBPACK_IMPORTED_MODULE_3__["OpenSearchSqlHighlightRules"], 'sql-', [{
    token: 'punctuation.end_triple_quote',
    regex: '"""',
    next: 'pop'
  }]);
}
oop.inherits(XJsonHighlightRules, JsonHighlightRules);
function addToRules(otherRules, embedUnder) {
  otherRules.$rules = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["defaultsDeep"])(otherRules.$rules, jsonRules(embedUnder));
  otherRules.embedRules(_script_highlight_rules__WEBPACK_IMPORTED_MODULE_4__["ScriptHighlightRules"], 'script-', [{
    token: 'punctuation.end_triple_quote',
    regex: '"""',
    next: 'pop'
  }]);
  otherRules.embedRules(_opensearch_sql_highlight_rules__WEBPACK_IMPORTED_MODULE_3__["OpenSearchSqlHighlightRules"], 'sql-', [{
    token: 'punctuation.end_triple_quote',
    regex: '"""',
    next: 'pop'
  }]);
}

/***/ }),

/***/ "../../../packages/osd-ace/target/web/ace/modes/x_json/index.js":
/*!***********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-ace/target/web/ace/modes/x_json/index.js ***!
  \***********************************************************************************************/
/*! exports provided: installXJsonMode, XJsonMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _x_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x_json */ "../../../packages/osd-ace/target/web/ace/modes/x_json/x_json.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installXJsonMode", function() { return _x_json__WEBPACK_IMPORTED_MODULE_0__["installXJsonMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XJsonMode", function() { return _x_json__WEBPACK_IMPORTED_MODULE_0__["XJsonMode"]; });

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

/***/ "../../../packages/osd-ace/target/web/ace/modes/x_json/worker/index.js":
/*!******************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-ace/target/web/ace/modes/x_json/worker/index.js ***!
  \******************************************************************************************************/
/*! exports provided: workerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workerModule", function() { return workerModule; });
/* harmony import */ var _raw_loader_x_json_ace_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./x_json.ace.worker.js */ "../../../node_modules/raw-loader/dist/cjs.js!../../../packages/osd-ace/target/web/ace/modes/x_json/worker/x_json.ace.worker.js");
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

const workerModule = {
  id: 'ace/mode/json_worker',
  src: _raw_loader_x_json_ace_worker_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "../../../packages/osd-ace/target/web/ace/modes/x_json/x_json.js":
/*!************************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-ace/target/web/ace/modes/x_json/x_json.js ***!
  \************************************************************************************************/
/*! exports provided: XJsonMode, installXJsonMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XJsonMode", function() { return XJsonMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installXJsonMode", function() { return installXJsonMode; });
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! brace */ "../../../node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "../../../packages/osd-ace/target/web/ace/modes/index.js");
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./worker */ "../../../packages/osd-ace/target/web/ace/modes/x_json/worker/index.js");
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




const {
  WorkerClient
} = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/worker/worker_client');
const oop = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/lib/oop');
const {
  Mode: JSONMode
} = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/json');
const {
  Tokenizer: AceTokenizer
} = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/tokenizer');
const {
  MatchingBraceOutdent
} = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/matching_brace_outdent');
const {
  CstyleBehaviour
} = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/behaviour/cstyle');
const {
  FoldMode: CStyleFoldMode
} = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/folding/cstyle');
const XJsonMode = function XJsonMode() {
  const ruleset = new _index__WEBPACK_IMPORTED_MODULE_1__["XJsonHighlightRules"]();
  ruleset.normalizeRules();
  this.$tokenizer = new AceTokenizer(ruleset.getRules());
  this.$outdent = new MatchingBraceOutdent();
  this.$behaviour = new CstyleBehaviour();
  this.foldingRules = new CStyleFoldMode();
};
oop.inherits(XJsonMode, JSONMode);

// Then clobber `createWorker` method to install our worker source. Per ace's wiki: https://github.com/ajaxorg/ace/wiki/Syntax-validation
XJsonMode.prototype.createWorker = function (session) {
  const xJsonWorker = new WorkerClient(['ace'], _worker__WEBPACK_IMPORTED_MODULE_2__["workerModule"], 'JsonWorker');
  xJsonWorker.attachToDocument(session.getDocument());
  xJsonWorker.on('annotate', function (e) {
    session.setAnnotations(e.data);
  });
  xJsonWorker.on('terminate', function () {
    session.clearAnnotations();
  });
  return xJsonWorker;
};

function installXJsonMode(editor) {
  const session = editor.getSession();
  session.setMode(new XJsonMode());
}

/***/ }),

/***/ "../../../packages/osd-ace/target/web/index.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-ace/target/web/index.js ***!
  \******************************************************************************/
/*! exports provided: OpenSearchSqlHighlightRules, ScriptHighlightRules, XJsonHighlightRules, addXJsonToRules, XJsonMode, installXJsonMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ace_modes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ace/modes */ "../../../packages/osd-ace/target/web/ace/modes/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchSqlHighlightRules", function() { return _ace_modes__WEBPACK_IMPORTED_MODULE_0__["OpenSearchSqlHighlightRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptHighlightRules", function() { return _ace_modes__WEBPACK_IMPORTED_MODULE_0__["ScriptHighlightRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XJsonHighlightRules", function() { return _ace_modes__WEBPACK_IMPORTED_MODULE_0__["XJsonHighlightRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addXJsonToRules", function() { return _ace_modes__WEBPACK_IMPORTED_MODULE_0__["addXJsonToRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XJsonMode", function() { return _ace_modes__WEBPACK_IMPORTED_MODULE_0__["XJsonMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "installXJsonMode", function() { return _ace_modes__WEBPACK_IMPORTED_MODULE_0__["installXJsonMode"]; });

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

/***/ "../../../packages/osd-std/target/web/assert_never.js":
/*!*************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/assert_never.js ***!
  \*************************************************************************************/
/*! exports provided: assertNever */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNever", function() { return assertNever; });
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
 * Can be used in switch statements to ensure we perform exhaustive checks, see
 * https://www.typescriptlang.org/docs/handbook/advanced-types.html#exhaustiveness-checking
 *
 * @public
 */
function assertNever(x) {
  throw new Error(`Unexpected object: ${x}`);
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/clean.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/clean.js ***!
  \******************************************************************************/
/*! exports provided: cleanControlSequences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanControlSequences", function() { return cleanControlSequences; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* Replaces a bunch of characters that should not be printed:
 *    0x03  ETX: End of Text
 *    0x04  EOT: End of Transmission
 *    0x05  ENQ: Enquiry
 *    0x07  BEL: Bell
 *    0x08  BS:  Backspace
 *    0x0B  VT:  Vertical Tabulation
 *    0x0C  FF:  Form Feed
 *    0x0D  CR:  Carriage Return
 *    0x0E  SO:  Shift Out
 *    0x0F  SI:  Shift In
 *    0x10  DLE: Data Link Escape
 *    0x11  DC1: Device Control One
 *    0x12  DC2: Device Control Two
 *    0x13  DC3: Device Control Three
 *    0x14  DC4: Device Control Four
 *    0x15  NAK: Negative Acknowledge
 *    0x16  SYN: Synchronous Idle
 *    0x17  ETB: End of Transmission Block
 *    0x18  CAN: Cancel
 *    0x19  EM:  End of Medium
 *    0x1A  SUB: EoF on Windows
 *    0x1B  ESC: Starts all the escape sequences
 *    0x1C  FS:  File Separator
 *    0x1D  GS:  Group Separator
 *    0x1E  RS:  Record Separator
 *    0x1F  US:  Unit Separator
 *    0x7F  Del
 *    0x90  DCS: Device Control String
 *    0x9B  CSI: Control Sequence Introducer
 *    0x9C  OSC: Operating System Command
 *
 * Ref: https://en.wikipedia.org/wiki/Control_character
 */
const cleanControlSequences = text => {
  return text.replace(/[\x03-\x05\x07\x08\x0B-\x1F\x7F\x90\x9B\x9C]/g, char => `(U+${char.charCodeAt(0).toString(16).padStart(4, '0')})`);
};

/***/ }),

/***/ "../../../packages/osd-std/target/web/deep_freeze.js":
/*!************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/deep_freeze.js ***!
  \************************************************************************************/
/*! exports provided: deepFreeze */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepFreeze", function() { return deepFreeze; });
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

/** @public */

/**
 * Apply Object.freeze to a value recursively and convert the return type to
 * Readonly variant recursively
 *
 * @public
 */
function deepFreeze(object) {
  // for any properties that reference an object, makes sure that object is
  // recursively frozen as well
  for (const value of Object.values(object)) {
    if (value !== null && typeof value === 'object') {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/get.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/get.js ***!
  \****************************************************************************/
/*! exports provided: get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
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
 * Retrieve the value for the specified path
 *
 * Note that dot is _not_ allowed to specify a deeper key, it will assume that
 * the dot is part of the key itself.
 */

function get(obj, path) {
  if (typeof path === 'string') {
    if (path.includes('.')) {
      throw new Error('Using dots in `get` with a string is not allowed, use array instead');
    }
    return obj[path];
  }
  for (const key of path) {
    obj = obj[key];
  }
  return obj;
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/get_flattened_object.js":
/*!*********************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/get_flattened_object.js ***!
  \*********************************************************************************************/
/*! exports provided: getFlattenedObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlattenedObject", function() { return getFlattenedObject; });
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

function shouldReadKeys(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 *  Flattens a deeply nested object to a map of dot-separated
 *  paths pointing to all primitive values **and arrays**
 *  from `rootValue`.
 *
 *  example:
 *    getFlattenedObject({ a: { b: 1, c: [2,3] } })
 *    // => { 'a.b': 1, 'a.c': [2,3] }
 *
 *  @public
 */
function getFlattenedObject(rootValue) {
  if (!shouldReadKeys(rootValue)) {
    throw new TypeError(`Root value is not flatten-able, received ${rootValue}`);
  }
  const result = {};
  (function flatten(prefix, object) {
    for (const [key, value] of Object.entries(object)) {
      const path = prefix ? `${prefix}.${key}` : key;
      if (shouldReadKeys(value)) {
        flatten(path, value);
      } else {
        result[path] = value;
      }
    }
  })('', rootValue);
  return result;
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/index.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/index.js ***!
  \******************************************************************************/
/*! exports provided: assertNever, deepFreeze, get, mapToObject, merge, pick, withTimeout, isRelativeUrl, modifyUrl, getUrlOrigin, unset, getFlattenedObject, validateObject, firstValueFrom, lastValueFrom, parse, stringify, cleanControlSequences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assert_never__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert_never */ "../../../packages/osd-std/target/web/assert_never.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNever", function() { return _assert_never__WEBPACK_IMPORTED_MODULE_0__["assertNever"]; });

/* harmony import */ var _deep_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deep_freeze */ "../../../packages/osd-std/target/web/deep_freeze.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepFreeze", function() { return _deep_freeze__WEBPACK_IMPORTED_MODULE_1__["deepFreeze"]; });

/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get */ "../../../packages/osd-std/target/web/get.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _get__WEBPACK_IMPORTED_MODULE_2__["get"]; });

/* harmony import */ var _map_to_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map_to_object */ "../../../packages/osd-std/target/web/map_to_object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapToObject", function() { return _map_to_object__WEBPACK_IMPORTED_MODULE_3__["mapToObject"]; });

/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./merge */ "../../../packages/osd-std/target/web/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge__WEBPACK_IMPORTED_MODULE_4__["merge"]; });

/* harmony import */ var _pick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pick */ "../../../packages/osd-std/target/web/pick.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _pick__WEBPACK_IMPORTED_MODULE_5__["pick"]; });

/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promise */ "../../../packages/osd-std/target/web/promise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTimeout", function() { return _promise__WEBPACK_IMPORTED_MODULE_6__["withTimeout"]; });

/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./url */ "../../../packages/osd-std/target/web/url.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRelativeUrl", function() { return _url__WEBPACK_IMPORTED_MODULE_7__["isRelativeUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifyUrl", function() { return _url__WEBPACK_IMPORTED_MODULE_7__["modifyUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUrlOrigin", function() { return _url__WEBPACK_IMPORTED_MODULE_7__["getUrlOrigin"]; });

/* harmony import */ var _unset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./unset */ "../../../packages/osd-std/target/web/unset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unset", function() { return _unset__WEBPACK_IMPORTED_MODULE_8__["unset"]; });

/* harmony import */ var _get_flattened_object__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get_flattened_object */ "../../../packages/osd-std/target/web/get_flattened_object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFlattenedObject", function() { return _get_flattened_object__WEBPACK_IMPORTED_MODULE_9__["getFlattenedObject"]; });

/* harmony import */ var _validate_object__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validate_object */ "../../../packages/osd-std/target/web/validate_object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateObject", function() { return _validate_object__WEBPACK_IMPORTED_MODULE_10__["validateObject"]; });

/* harmony import */ var _rxjs_7__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rxjs_7 */ "../../../packages/osd-std/target/web/rxjs_7.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "firstValueFrom", function() { return _rxjs_7__WEBPACK_IMPORTED_MODULE_11__["firstValueFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastValueFrom", function() { return _rxjs_7__WEBPACK_IMPORTED_MODULE_11__["lastValueFrom"]; });

/* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./json */ "../../../packages/osd-std/target/web/json.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _json__WEBPACK_IMPORTED_MODULE_12__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _json__WEBPACK_IMPORTED_MODULE_12__["stringify"]; });

/* harmony import */ var _clean__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clean */ "../../../packages/osd-std/target/web/clean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanControlSequences", function() { return _clean__WEBPACK_IMPORTED_MODULE_13__["cleanControlSequences"]; });

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

/***/ "../../../packages/osd-std/target/web/json.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/json.js ***!
  \*****************************************************************************/
/*! exports provided: stringify, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var json11__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! json11 */ "../../../node_modules/json11/dist/umd/index.js");
/* harmony import */ var json11__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json11__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


const stringify = (obj, replacer, space) => {
  let text;
  let numeralsAreNumbers = true;
  /* For better performance, instead of testing for existence of `replacer` on each value, two almost
   * identical functions are used.
   *
   * Note: Converting BigInt values to numbers, `Number()` is much faster that `parseInt()`. Since we
   * check the `type`, it is safe to just use `Number()`.
   */
  const checkForBigInts = replacer ? function (key, val) {
    if (typeof val === 'bigint') {
      numeralsAreNumbers = false;
      return replacer.call(this, key, Number(val));
    }
    return replacer.call(this, key, val);
  } : (key, val) => {
    if (typeof val === 'bigint') {
      numeralsAreNumbers = false;
      return Number(val);
    }
    return val;
  };

  /* While this is a check for possibly having BigInt values, if none were found, the results is
   * sufficient to fulfill the purpose of the function. However, if BigInt values were found, we will
   * use `stringifyObjectWithBigInts` to do this again.
   *
   * The goal was not to punish every object that doesn't have a BigInt with the more expensive
   * `stringifyObjectWithBigInts`. Those with BigInt values are also not unduly burdened because we
   * still need it in its string form to find a suitable marker.
   */
  text = JSON.stringify(obj, checkForBigInts, space);
  if (!numeralsAreNumbers) {
    const temp = json11__WEBPACK_IMPORTED_MODULE_0___default.a.stringify(obj, {
      replacer,
      space,
      withBigInt: false,
      quote: '"',
      quoteNames: true
    });
    if (temp) text = temp;
  }
  return text;
};
const parse = (text, reviver) => {
  let obj;
  let numeralsAreNumbers = true;
  const inspectValueForLargeNumerals = val => {
    if (numeralsAreNumbers && typeof val === 'number' && isFinite(val) && (val < Number.MIN_SAFE_INTEGER || val > Number.MAX_SAFE_INTEGER)) {
      numeralsAreNumbers = false;
    }

    // This function didn't have to have a return value but having it makes the rest cleaner
    return val;
  };

  /* For better performance, instead of testing for existence of `reviver` on each value, two almost
   * identical functions are used.
   */
  const checkForLargeNumerals = reviver ? function (key, val) {
    return inspectValueForLargeNumerals(reviver.call(this, key, val));
  } : (key, val) => inspectValueForLargeNumerals(val);

  /* While this is a check for possibly having BigInt values, if none were found, the results is
   * sufficient to fulfill the purpose of the function. However, if BigInt values were found, we will
   * use `stringifyObjectWithBigInts` to do this again.
   *
   * The goal was not to punish every object that doesn't have a BigInt with the more expensive
   * `stringifyObjectWithBigInts`. Those with BigInt values are also not unduly burdened because we
   * still need it in its string form to find a suitable marker.
   */
  obj = JSON.parse(text, checkForLargeNumerals);
  if (!numeralsAreNumbers) {
    const temp = json11__WEBPACK_IMPORTED_MODULE_0___default.a.parse(text, reviver, {
      withLongNumerals: true
    });
    if (temp) obj = temp;
  }
  return obj;
};

/***/ }),

/***/ "../../../packages/osd-std/target/web/map_to_object.js":
/*!**************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/map_to_object.js ***!
  \**************************************************************************************/
/*! exports provided: mapToObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapToObject", function() { return mapToObject; });
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

function mapToObject(map) {
  const result = Object.create(null);
  for (const [key, value] of map) {
    result[key] = value;
  }
  return result;
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/merge.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/merge.js ***!
  \******************************************************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
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
 * Deeply merges two objects, omitting undefined values, and not deeply merging Arrays.
 *
 * @remarks
 * Should behave identically to lodash.merge, however it will not merge Array values like lodash does.
 * Any properties with `undefined` values on both objects will be ommitted from the returned object.
 */

function merge(baseObj) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  const firstSource = sources[0];
  if (firstSource === undefined) {
    return baseObj;
  }
  return sources.slice(1).reduce((merged, nextSource) => mergeObjects(merged, nextSource), mergeObjects(baseObj, firstSource));
}
const isMergable = obj => Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(obj);
const mergeObjects = (baseObj, overrideObj) => [...new Set([...Object.keys(baseObj), ...Object.keys(overrideObj)])].reduce((merged, key) => {
  const baseVal = baseObj[key];
  const overrideVal = overrideObj[key];
  if (isMergable(baseVal) && isMergable(overrideVal)) {
    merged[key] = mergeObjects(baseVal, overrideVal);
  } else if (overrideVal !== undefined) {
    merged[key] = overrideVal;
  } else if (baseVal !== undefined) {
    merged[key] = baseVal;
  }
  return merged;
}, {});

/***/ }),

/***/ "../../../packages/osd-std/target/web/pick.js":
/*!*****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/pick.js ***!
  \*****************************************************************************/
/*! exports provided: pick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
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

function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/promise.js":
/*!********************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/promise.js ***!
  \********************************************************************************/
/*! exports provided: withTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTimeout", function() { return withTimeout; });
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

function withTimeout(_ref) {
  let {
    promise,
    timeout,
    errorMessage
  } = _ref;
  return Promise.race([promise, new Promise((resolve, reject) => setTimeout(() => reject(new Error(errorMessage)), timeout))]);
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/rxjs_7.js":
/*!*******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/rxjs_7.js ***!
  \*******************************************************************************/
/*! exports provided: firstValueFrom, lastValueFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstValueFrom", function() { return firstValueFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastValueFrom", function() { return lastValueFrom; });
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


function firstValueFrom(source) {
  // we can't use SafeSubscriber the same way that RxJS 7 does, so instead we
  return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])()).toPromise();
}
function lastValueFrom(source) {
  return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["last"])()).toPromise();
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/unset.js":
/*!******************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/unset.js ***!
  \******************************************************************************/
/*! exports provided: unset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unset", function() { return unset; });
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get */ "../../../packages/osd-std/target/web/get.js");
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
 * Unset a (potentially nested) key from given object.
 * This mutates the original object.
 *
 * @example
 * ```
 * unset(myObj, 'someRootProperty');
 * unset(myObj, 'some.nested.path');
 * ```
 */
function unset(obj, atPath) {
  const paths = atPath.split('.').map(s => s.trim()).filter(v => v !== '');
  if (paths.length === 0) {
    return;
  }
  if (paths.length === 1) {
    delete obj[paths[0]];
    return;
  }
  const property = paths.pop();
  const parent = Object(_get__WEBPACK_IMPORTED_MODULE_0__["get"])(obj, paths);
  if (parent !== undefined) {
    delete parent[property];
  }
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/url.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/url.js ***!
  \****************************************************************************/
/*! exports provided: modifyUrl, isRelativeUrl, getUrlOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyUrl", function() { return modifyUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRelativeUrl", function() { return isRelativeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlOrigin", function() { return getUrlOrigin; });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "../../../node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
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
 * We define our own typings because the current version of @types/node
 * declares properties to be optional "hostname?: string".
 * Although, parse call returns "hostname: null | string".
 *
 * @public
 */

/**
 *  Takes a URL and a function that takes the meaningful parts
 *  of the URL as a key-value object, modifies some or all of
 *  the parts, and returns the modified parts formatted again
 *  as a url.
 *
 *  Url Parts sent:
 *    - protocol
 *    - slashes (does the url have the //)
 *    - auth
 *    - hostname (just the name of the host, no port or auth information)
 *    - port
 *    - pathname (the path after the hostname, no query or hash, starts
 *        with a slash if there was a path)
 *    - query (always an object, even when no query on original url)
 *    - hash
 *
 *  Why?
 *    - The default url library in node produces several conflicting
 *      properties on the "parsed" output. Modifying any of these might
 *      lead to the modifications being ignored (depending on which
 *      property was modified)
 *    - It's not always clear whether to use path/pathname, host/hostname,
 *      so this tries to add helpful constraints
 *
 *  @param url The string url to parse.
 *  @param urlModifier A function that will modify the parsed url, or return a new one.
 *  @returns The modified and reformatted url
 *  @public
 */
function modifyUrl(url, urlModifier) {
  const parsed = Object(url__WEBPACK_IMPORTED_MODULE_0__["parse"])(url, true);

  // Copy over the most specific version of each property. By default, the parsed url includes several
  // conflicting properties (like path and pathname + search, or search and query) and keeping track
  // of which property is actually used when they are formatted is harder than necessary.
  const meaningfulParts = {
    auth: parsed.auth,
    hash: parsed.hash,
    hostname: parsed.hostname,
    pathname: parsed.pathname,
    port: parsed.port,
    protocol: parsed.protocol,
    query: parsed.query || {},
    slashes: parsed.slashes
  };

  // The urlModifier modifies the meaningfulParts object, or returns a new one.
  const modifiedParts = urlModifier(meaningfulParts) || meaningfulParts;

  // Format the modified/replaced meaningfulParts back into a url.
  return Object(url__WEBPACK_IMPORTED_MODULE_0__["format"])({
    auth: modifiedParts.auth,
    hash: modifiedParts.hash,
    hostname: modifiedParts.hostname,
    pathname: modifiedParts.pathname,
    port: modifiedParts.port,
    protocol: modifiedParts.protocol,
    query: modifiedParts.query,
    slashes: modifiedParts.slashes
  });
}

/**
 * Determine if a url is relative. Any url including a protocol, hostname, or
 * port is not considered relative. This means that absolute *paths* are considered
 * to be relative *urls*
 * @public
 */
function isRelativeUrl(candidatePath) {
  // validate that `candidatePath` is not attempting a redirect to somewhere
  // outside of this OpenSearch Dashboards install
  const all = Object(url__WEBPACK_IMPORTED_MODULE_0__["parse"])(candidatePath, false /* parseQueryString */, true /* slashesDenoteHost */);
  const {
    protocol,
    hostname,
    port
  } = all;
  // We should explicitly compare `protocol`, `port` and `hostname` to null to make sure these are not
  // detected in the URL at all. For example `hostname` can be empty string for Node URL parser, but
  // browser (because of various bwc reasons) processes URL differently (e.g. `///abc.com` - for browser
  // hostname is `abc.com`, but for Node hostname is an empty string i.e. everything between schema (`//`)
  // and the first slash that belongs to path.
  if (protocol !== null || hostname !== null || port !== null) {
    return false;
  }
  return true;
}

/**
 * Returns the origin (protocol + host + port) from given `url` if `url` is a valid absolute url, or null otherwise
 */
function getUrlOrigin(url) {
  const obj = Object(url__WEBPACK_IMPORTED_MODULE_0__["parse"])(url);
  if (!obj.protocol && !obj.hostname) {
    return null;
  }
  return `${obj.protocol}//${obj.hostname}${obj.port ? `:${obj.port}` : ''}`;
}

/***/ }),

/***/ "../../../packages/osd-std/target/web/validate_object.js":
/*!****************************************************************************************!*\
  !*** /home/ubuntu/wazuh-dashboard-cert/packages/osd-std/target/web/validate_object.js ***!
  \****************************************************************************************/
/*! exports provided: validateObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateObject", function() { return validateObject; });
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// we have to do Object.prototype.hasOwnProperty because when you create an object using
// Object.create(null), and I assume other methods, you get an object without a prototype,
// so you can't use current.hasOwnProperty
const hasOwnProperty = (obj, property) => Object.prototype.hasOwnProperty.call(obj, property);
const isObject = obj => typeof obj === 'object' && obj !== null;

// we're using a stack instead of recursion so we aren't limited by the call stack
function validateObject(obj) {
  if (!isObject(obj)) {
    return;
  }
  const stack = [{
    value: obj,
    previousKey: null
  }];
  const seen = new WeakSet([obj]);
  while (stack.length > 0) {
    const {
      value,
      previousKey
    } = stack.pop();
    if (!isObject(value)) {
      continue;
    }
    if (hasOwnProperty(value, '__proto__')) {
      throw new Error(`'__proto__' is an invalid key`);
    }
    if (hasOwnProperty(value, 'prototype') && previousKey === 'constructor') {
      throw new Error(`'constructor.prototype' is an invalid key`);
    }

    // iterating backwards through an array is reportedly more performant
    const entries = Object.entries(value);
    for (let i = entries.length - 1; i >= 0; --i) {
      const [key, childValue] = entries[i];
      if (isObject(childValue)) {
        if (seen.has(childValue)) {
          throw new Error('circular reference detected');
        }
        seen.add(childValue);
      }
      stack.push({
        value: childValue,
        previousKey: key
      });
    }
  }
}

/***/ }),

/***/ "./common/text_object.ts":
/*!*******************************!*\
  !*** ./common/text_object.ts ***!
  \*******************************/
/*! exports provided: textObjectTypeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textObjectTypeName", function() { return textObjectTypeName; });
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

const textObjectTypeName = 'text-object';

/**
 * Describes the shape of persisted objects that contain information about the current text in the
 * text editor.
 */

/***/ }),

/***/ "./public/application/components/console_menu.tsx":
/*!********************************************************!*\
  !*** ./public/application/components/console_menu.tsx ***!
  \********************************************************/
/*! exports provided: ConsoleMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleMenu", function() { return ConsoleMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_3__);
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





class ConsoleMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    _defineProperty(this, "mouseEnter", () => {
      if (this.state.isPopoverOpen) return;
      this.props.getCurl().then(text => {
        this.setState({
          curlCode: text
        });
      });
    });
    _defineProperty(this, "onButtonClick", () => {
      this.setState(prevState => ({
        isPopoverOpen: !prevState.isPopoverOpen
      }));
    });
    _defineProperty(this, "closePopover", () => {
      this.setState({
        isPopoverOpen: false
      });
    });
    _defineProperty(this, "openDocs", async () => {
      this.closePopover();
      const documentation = await this.props.getDocumentation();
      if (!documentation) {
        return;
      }
      window.open(documentation, '_blank');
    });
    // Using `any` here per this issue: https://github.com/elastic/eui/issues/2265
    _defineProperty(this, "autoIndent", event => {
      this.closePopover();
      this.props.autoIndent(event);
    });
    this.state = {
      curlCode: '',
      isPopoverOpen: false
    };
  }
  async copyAsCurl() {
    await this.copyText(this.state.curlCode);
    const {
      addNotification
    } = this.props;
    if (addNotification) {
      addNotification({
        title: _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('console.consoleMenu.copyAsCurlMessage', {
          defaultMessage: 'Request copied as cURL'
        })
      });
    }
  }
  async copyText(text) {
    var _window$navigator;
    if ((_window$navigator = window.navigator) !== null && _window$navigator !== void 0 && _window$navigator.clipboard) {
      /**
       * Browser Compatibility Chart
       *
       * Chrome: 66
       * Edge: 79
       * Firefox: 63
       * Opera: 53
       * Internet Explorer: Not supported
       *
       */
      await window.navigator.clipboard.writeText(text);
    }
  }
  render() {
    var _window$navigator2;
    const button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "euiButtonIcon--primary",
      onClick: this.onButtonClick,
      "data-test-subj": "toggleConsoleMenu",
      "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_3__["i18n"].translate('console.requestOptionsButtonAriaLabel', {
        defaultMessage: 'Request options'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
      type: "wrench"
    }));
    const items = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuItem"], {
      key: "Copy as cURL",
      id: "ConCopyAsCurl",
      "data-test-subj": "copyAsCurl",
      disabled: !((_window$navigator2 = window.navigator) !== null && _window$navigator2 !== void 0 && _window$navigator2.clipboard),
      onClick: () => {
        this.closePopover();
        this.copyAsCurl();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "console.requestOptions.copyAsUrlButtonLabel",
      defaultMessage: "Copy as cURL"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuItem"], {
      key: "Open documentation",
      "data-test-subj": "consoleMenuOpenDocs",
      onClick: () => {
        this.openDocs();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "console.requestOptions.openDocumentationButtonLabel",
      defaultMessage: "Open documentation"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuItem"], {
      "data-test-subj": "consoleMenuAutoIndent",
      key: "Auto indent",
      onClick: this.autoIndent
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
      id: "console.requestOptions.autoIndentButtonLabel",
      defaultMessage: "Auto indent"
    }))];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      onMouseEnter: this.mouseEnter
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPopover"], {
      id: "contextMenu",
      button: button,
      isOpen: this.state.isPopoverOpen,
      closePopover: this.closePopover,
      panelPaddingSize: "none",
      anchorPosition: "downLeft"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiContextMenuPanel"], {
      items: items,
      size: "s"
    })));
  }
}

/***/ }),

/***/ "./public/application/components/editor_content_spinner.tsx":
/*!******************************************************************!*\
  !*** ./public/application/components/editor_content_spinner.tsx ***!
  \******************************************************************/
/*! exports provided: EditorContentSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorContentSpinner", function() { return EditorContentSpinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
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



const EditorContentSpinner = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiPageContent"], {
    className: "conApp__editor__spinner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiLoadingContent"], {
    lines: 10
  }));
};

/***/ }),

/***/ "./public/application/components/editor_example.tsx":
/*!**********************************************************!*\
  !*** ./public/application/components/editor_example.tsx ***!
  \**********************************************************/
/*! exports provided: EditorExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorExample", function() { return EditorExample; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_legacy_core_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/legacy_core_editor */ "./public/application/models/legacy_core_editor/index.ts");
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





const exampleText = `
# index a doc
PUT index/_doc/1
{
  "body": "here"
}

# and get it ...
GET index/_doc/1
`;
function EditorExample(props) {
  const elemId = `help-example-${props.panel}`;
  const inputId = `help-example-${props.panel}-input`;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const el = document.getElementById(elemId);
    el.textContent = exampleText.trim();
    const editor = Object(_models_legacy_core_editor__WEBPACK_IMPORTED_MODULE_3__["createReadOnlyAceEditor"])(el);
    const textarea = el.querySelector('textarea');
    textarea.setAttribute('id', inputId);
    textarea.setAttribute('readonly', 'true');
    return () => {
      editor.destroy();
    };
  }, [elemId, inputId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiScreenReaderOnly"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: inputId
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.exampleOutputTextarea', {
    defaultMessage: 'Dev Tools Console editor example'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: elemId,
    className: "conHelp__example"
  }));
}

/***/ }),

/***/ "./public/application/components/help_panel.tsx":
/*!******************************************************!*\
  !*** ./public/application/components/help_panel.tsx ***!
  \******************************************************/
/*! exports provided: HelpPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPanel", function() { return HelpPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_example__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor_example */ "./public/application/components/editor_example.tsx");
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





function HelpPanel(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlyout"], {
    onClose: props.onClose,
    "data-test-subj": "helpFlyout",
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlyoutHeader"], {
    hasBorder: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.helpPage.pageTitle",
    defaultMessage: "Help"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlyoutBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    defaultMessage: "Request format",
    id: "console.helpPage.requestFormatTitle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.helpPage.requestFormatDescription",
    defaultMessage: "You can type one or more requests in the white editor. Console understands requests in a compact format:"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editor_example__WEBPACK_IMPORTED_MODULE_3__["EditorExample"], {
    panel: "help"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.helpPage.keyboardCommandsTitle",
    defaultMessage: "Keyboard commands"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSpacer"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Ctrl/Cmd + I"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.helpPage.keyboardCommands.autoIndentDescription",
    defaultMessage: "Auto indent current request"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Ctrl/Cmd + /"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.helpPage.keyboardCommands.openDocumentationDescription",
    defaultMessage: "Open documentation for current request"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Ctrl + Space"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.helpPage.keyboardCommands.openAutoCompleteDescription",
    defaultMessage: "Open Auto complete (even if not typing)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Ctrl/Cmd + Enter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.helpPage.keyboardCommands.submitRequestDescription",
    defaultMessage: "Submit request"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Ctrl/Cmd + Up/Down"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.helpPage.keyboardCommands.jumpToPreviousNextRequestDescription",
    defaultMessage: "Jump to the previous/next request start or end."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Ctrl/Cmd + Alt + L"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.helpPage.keyboardCommands.collapseExpandCurrentScopeDescription",
    defaultMessage: "Collapse/expand current scope."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Ctrl/Cmd + Option + 0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.helpPage.keyboardCommands.collapseAllScopesDescription",
    defaultMessage: "Collapse all scopes but the current one. Expand by adding a shift."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Down arrow"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.helpPage.keyboardCommands.switchFocusToAutoCompleteMenuDescription",
    defaultMessage: "Switch focus to auto-complete menu. Use arrows to further select a term"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Enter/Tab"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.helpPage.keyboardCommands.selectCurrentlySelectedInAutoCompleteMenuDescription",
    defaultMessage: "Select the currently selected or the top most term in auto-complete menu"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Esc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.helpPage.keyboardCommands.closeAutoCompleteMenuDescription",
    defaultMessage: "Close auto-complete menu"
  })))))));
}

/***/ }),

/***/ "./public/application/components/import_flyout.tsx":
/*!*********************************************************!*\
  !*** ./public/application/components/import_flyout.tsx ***!
  \*********************************************************/
/*! exports provided: ImportFlyout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportFlyout", function() { return ImportFlyout; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _import_mode_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./import_mode_control */ "./public/application/components/import_mode_control.tsx");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts */ "./public/application/contexts/index.ts");
/* harmony import */ var _overwrite_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overwrite_modal */ "./public/application/components/overwrite_modal.tsx");
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */









const OVERWRITE_ALL_DEFAULT = false;
const getErrorMessage = e => {
  var _e$body, _e$body2;
  const errorMessage = (_e$body = e.body) !== null && _e$body !== void 0 && _e$body.error && (_e$body2 = e.body) !== null && _e$body2 !== void 0 && _e$body2.message ? `${e.body.error}: ${e.body.message}` : e.message;
  return _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.ImportFlyout.importFileErrorMessage', {
    defaultMessage: 'The file could not be processed due to error: "{error}"',
    values: {
      error: errorMessage
    }
  });
};
const ImportFlyout = ({
  close,
  refresh
}) => {
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])();
  const [status, setStatus] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('idle');
  const [loadingMessage, setLoadingMessage] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])();
  const [file, setFile] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])();
  const [jsonData, setJsonData] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])();
  const [showOverwriteModal, setShowOverwriteModal] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const [importMode, setImportMode] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    overwrite: OVERWRITE_ALL_DEFAULT
  });
  const {
    services: {
      objectStorageClient,
      uiSettings,
      notifications: {
        toasts
      }
    }
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_6__["useServicesContext"])();
  const dateFormat = uiSettings.get('dateFormat');
  const setImportFile = files => {
    const isFirstFileMissing = !(files !== null && files !== void 0 && files[0]);
    if (isFirstFileMissing) {
      setFile(undefined);
      return;
    }
    const fileContent = files[0];
    const reader = new FileReader();
    reader.onload = event => {
      var _event$target;
      const fileData = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result;
      if (typeof fileData === 'string') {
        const parsedData = JSON.parse(fileData);
        setJsonData(parsedData);
      }
    };
    reader.readAsText(fileContent);
    setFile(fileContent);
    setStatus('idle');
  };
  const renderError = () => {
    if (status !== 'error') {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCallOut"], {
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "console.importFlyout.errorCalloutTitle",
        defaultMessage: "Sorry, there was an error"
      }),
      color: "danger"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      "data-test-subj": "importSenseObjectsErrorText"
    }, error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
      size: "s"
    }));
  };
  const renderBody = () => {
    if (status === 'loading') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
        justifyContent: "spaceAround"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
        grow: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiLoadingSpinner"], {
        size: "xl"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiSpacer"], {
        size: "m"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiText"], {
        size: "s"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, loadingMessage))));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiForm"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedFormRow"], {
      fullWidth: true,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "console.ImportFlyout.selectFileToImportFormRowLabel",
        defaultMessage: "Select a file to import"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedFilePicker"], {
      accept: ".ndjson, .json",
      name: "queryFileImport",
      fullWidth: true,
      initialPromptText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
        id: "console.ImportFlyout.importPromptText",
        defaultMessage: "Import"
      }),
      onChange: setImportFile,
      "data-test-subj": "queryFilePicker"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiCompressedFormRow"], {
      fullWidth: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_import_mode_control__WEBPACK_IMPORTED_MODULE_5__["ImportModeControl"], {
      initialValues: importMode,
      updateSelection: newValues => setImportMode(newValues)
    })));
  };
  const importFile = async isOverwriteConfirmed => {
    setStatus('loading');
    setError(undefined);
    try {
      const results = await objectStorageClient.text.findAll();
      const currentText = results.sort((a, b) => a.createdAt - b.createdAt)[0];
      if (jsonData !== null && jsonData !== void 0 && jsonData.text) {
        if (importMode.overwrite) {
          if (!isOverwriteConfirmed) {
            setShowOverwriteModal(true);
            return;
          } else {
            setLoadingMessage('Importing queries and overwriting existing ones...');
            const newObject = {
              createdAt: Date.now(),
              updatedAt: Date.now(),
              text: jsonData.text
            };
            if (results.length) {
              await objectStorageClient.text.update({
                ...currentText,
                ...newObject
              });
            } else {
              await objectStorageClient.text.create({
                ...newObject
              });
            }
          }
          toasts.addSuccess('Queries overwritten.');
        } else {
          setLoadingMessage('Importing queries and merging with existing ones...');
          if (results.length) {
            await objectStorageClient.text.update({
              ...currentText,
              createdAt: Date.now(),
              updatedAt: Date.now(),
              text: currentText.text.concat(`\n\n#Imported on ${moment__WEBPACK_IMPORTED_MODULE_1___default()(Date.now()).format(dateFormat)}\n\n${jsonData.text}`)
            });
            toasts.addSuccess('Queries merged.');
          }
        }
        refresh();
        setLoadingMessage(undefined);
        setStatus('idle');
        close();
      } else {
        setStatus('error');
        setError(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.ImportFlyout.importFileErrorMessage.notJSON', {
          defaultMessage: 'The selected file is not valid. Please select a valid JSON file.'
        }));
        return;
      }
    } catch (e) {
      setStatus('error');
      setError(getErrorMessage(e));
    }
  };
  const onConfirm = () => {
    setShowOverwriteModal(false);
    importFile(true);
  };
  const onSkip = () => {
    setShowOverwriteModal(false);
    setStatus('idle');
  };
  const renderFooter = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
      justifyContent: "spaceBetween"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiButtonEmpty"], {
      onClick: close,
      size: "s",
      disabled: status === 'loading' || status === 'success',
      "data-test-subj": "importQueriesCancelBtn"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "console.importFlyout.import.cancelButtonLabel",
      defaultMessage: "Cancel"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiButton"], {
      disabled: !file,
      onClick: () => importFile(false),
      size: "s",
      fill: true,
      isLoading: status === 'loading',
      "data-test-subj": "importQueriesConfirmBtn"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "console.importFlyout.import.confirmButtonLabel",
      defaultMessage: "Import"
    }))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlyout"], {
    onClose: close,
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlyoutHeader"], {
    hasBorder: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiText"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "console.ImportFlyout.importQueriesTitle",
    defaultMessage: "Import queries"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlyoutBody"], null, renderError(), renderBody()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlyoutFooter"], null, renderFooter()), showOverwriteModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_overwrite_modal__WEBPACK_IMPORTED_MODULE_7__["OverwriteModal"], {
    onSkip: onSkip,
    onConfirm: onConfirm
  }));
};

/***/ }),

/***/ "./public/application/components/import_mode_control.tsx":
/*!***************************************************************!*\
  !*** ./public/application/components/import_mode_control.tsx ***!
  \***************************************************************/
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
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




const overwriteEnabled = {
  id: 'overwriteEnabled',
  label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.importModeControl.overwrite.enabledLabel', {
    defaultMessage: 'Overwrite existing queries'
  })
};
const overwriteDisabled = {
  id: 'overwriteDisabled',
  label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.importModeControl.overwrite.disabledLabel', {
    defaultMessage: 'Merge with existing queries'
  })
};
const importOptionsTitle = _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.importModeControl.importOptionsTitle', {
  defaultMessage: 'Import options'
});
const ImportModeControl = ({
  initialValues,
  updateSelection
}) => {
  const [overwrite, setOverwrite] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValues.overwrite);
  const onChange = partial => {
    if (partial.overwrite !== undefined) {
      setOverwrite(partial.overwrite);
    }
    updateSelection({
      overwrite,
      ...partial
    });
  };
  const overwriteRadio = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiCompressedRadioGroup"], {
    options: [overwriteDisabled, overwriteEnabled],
    idSelected: overwrite ? overwriteEnabled.id : overwriteDisabled.id,
    onChange: id => onChange({
      overwrite: id === overwriteEnabled.id
    })
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFormFieldset"], {
    legend: {
      children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTitle"], {
        size: "xs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, importOptionsTitle))
    }
  }, overwriteRadio);
};

/***/ }),

/***/ "./public/application/components/index.ts":
/*!************************************************!*\
  !*** ./public/application/components/index.ts ***!
  \************************************************/
/*! exports provided: NetworkRequestStatusBar, SomethingWentWrongCallout, TopNavMenuItem, TopNavMenu, ConsoleMenu, WelcomePanel, AutocompleteOptions, DevToolsSettingsModal, HelpPanel, EditorContentSpinner, ImportFlyout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _network_request_status_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network_request_status_bar */ "./public/application/components/network_request_status_bar/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkRequestStatusBar", function() { return _network_request_status_bar__WEBPACK_IMPORTED_MODULE_0__["NetworkRequestStatusBar"]; });

/* harmony import */ var _something_went_wrong_callout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./something_went_wrong_callout */ "./public/application/components/something_went_wrong_callout.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SomethingWentWrongCallout", function() { return _something_went_wrong_callout__WEBPACK_IMPORTED_MODULE_1__["SomethingWentWrongCallout"]; });

/* harmony import */ var _top_nav_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top_nav_menu */ "./public/application/components/top_nav_menu.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenuItem", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_2__["TopNavMenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopNavMenu", function() { return _top_nav_menu__WEBPACK_IMPORTED_MODULE_2__["TopNavMenu"]; });

/* harmony import */ var _console_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./console_menu */ "./public/application/components/console_menu.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleMenu", function() { return _console_menu__WEBPACK_IMPORTED_MODULE_3__["ConsoleMenu"]; });

/* harmony import */ var _welcome_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome_panel */ "./public/application/components/welcome_panel.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WelcomePanel", function() { return _welcome_panel__WEBPACK_IMPORTED_MODULE_4__["WelcomePanel"]; });

/* harmony import */ var _settings_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings_modal */ "./public/application/components/settings_modal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteOptions", function() { return _settings_modal__WEBPACK_IMPORTED_MODULE_5__["AutocompleteOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevToolsSettingsModal", function() { return _settings_modal__WEBPACK_IMPORTED_MODULE_5__["DevToolsSettingsModal"]; });

/* harmony import */ var _help_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help_panel */ "./public/application/components/help_panel.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HelpPanel", function() { return _help_panel__WEBPACK_IMPORTED_MODULE_6__["HelpPanel"]; });

/* harmony import */ var _editor_content_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor_content_spinner */ "./public/application/components/editor_content_spinner.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorContentSpinner", function() { return _editor_content_spinner__WEBPACK_IMPORTED_MODULE_7__["EditorContentSpinner"]; });

/* harmony import */ var _import_flyout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./import_flyout */ "./public/application/components/import_flyout.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImportFlyout", function() { return _import_flyout__WEBPACK_IMPORTED_MODULE_8__["ImportFlyout"]; });

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

/***/ "./public/application/components/network_request_status_bar/index.ts":
/*!***************************************************************************!*\
  !*** ./public/application/components/network_request_status_bar/index.ts ***!
  \***************************************************************************/
/*! exports provided: NetworkRequestStatusBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _network_request_status_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network_request_status_bar */ "./public/application/components/network_request_status_bar/network_request_status_bar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkRequestStatusBar", function() { return _network_request_status_bar__WEBPACK_IMPORTED_MODULE_0__["NetworkRequestStatusBar"]; });

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

/***/ "./public/application/components/network_request_status_bar/network_request_status_bar.tsx":
/*!*************************************************************************************************!*\
  !*** ./public/application/components/network_request_status_bar/network_request_status_bar.tsx ***!
  \*************************************************************************************************/
/*! exports provided: NetworkRequestStatusBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkRequestStatusBar", function() { return NetworkRequestStatusBar; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
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




const mapStatusCodeToBadgeColor = statusCode => {
  if (statusCode <= 199) {
    return 'default';
  }
  if (statusCode <= 299) {
    return 'secondary';
  }
  if (statusCode <= 399) {
    return 'primary';
  }
  if (statusCode <= 499) {
    return 'warning';
  }
  return 'danger';
};
const NetworkRequestStatusBar = ({
  requestInProgress,
  requestResult
}) => {
  let content = null;
  if (requestInProgress) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiBadge"], {
      color: "hollow"
    }, _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('console.requestInProgressBadgeText', {
      defaultMessage: 'Request in progress'
    })));
  } else if (requestResult) {
    const {
      endpoint,
      method,
      statusCode,
      statusText,
      timeElapsedMs
    } = requestResult;
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiToolTip"], {
      position: "top",
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
        size: "s"
      }, `${method} ${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiBadge"], {
      color: mapStatusCodeToBadgeColor(statusCode)
    }, statusCode, "\xA0-\xA0", statusText))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiToolTip"], {
      position: "top",
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
        size: "s"
      }, _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('console.requestTimeElapasedBadgeTooltipContent', {
        defaultMessage: 'Time Elapsed'
      }))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
      size: "s"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiBadge"], {
      color: "default"
    }, timeElapsedMs, "\xA0", 'ms')))));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlexGroup"], {
    justifyContent: "flexEnd",
    alignItems: "center",
    direction: "row",
    gutterSize: "s",
    responsive: false
  }, content);
};

/***/ }),

/***/ "./public/application/components/overwrite_modal.tsx":
/*!***********************************************************!*\
  !*** ./public/application/components/overwrite_modal.tsx ***!
  \***********************************************************/
/*! exports provided: OverwriteModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverwriteModal", function() { return OverwriteModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */




const OverwriteModal = ({
  onSkip,
  onConfirm
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiConfirmModal"], {
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.overwriteModal.title', {
      defaultMessage: 'Confirm Overwrite'
    }),
    cancelButtonText: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.overwriteModal.cancelButtonText', {
      defaultMessage: 'Skip'
    }),
    confirmButtonText: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.overwriteModal.overwriteButtonText', {
      defaultMessage: 'Overwrite'
    }),
    buttonColor: "danger",
    onCancel: onSkip,
    onConfirm: onConfirm,
    defaultFocusedButton: _elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EUI_MODAL_CONFIRM_BUTTON"],
    maxWidth: "500px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.overwriteModal.body.conflict', {
    defaultMessage: 'Are you sure you want to overwrite the existing queries? This action cannot be undone. All existing queries will be deleted and replaced with the imported queries. If you are unsure, please choose the "{option}" option instead',
    values: {
      option: 'Merge with existing queries'
    }
  }))));
};

/***/ }),

/***/ "./public/application/components/settings_modal.tsx":
/*!**********************************************************!*\
  !*** ./public/application/components/settings_modal.tsx ***!
  \**********************************************************/
/*! exports provided: DevToolsSettingsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevToolsSettingsModal", function() { return DevToolsSettingsModal; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
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






function DevToolsSettingsModal(props) {
  const [fontSize, setFontSize] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.settings.fontSize);
  const [wrapMode, setWrapMode] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.settings.wrapMode);
  const [fields, setFields] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.settings.autocomplete.fields);
  const [indices, setIndices] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.settings.autocomplete.indices);
  const [templates, setTemplates] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.settings.autocomplete.templates);
  const [polling, setPolling] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.settings.polling);
  const [tripleQuotes, setTripleQuotes] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.settings.tripleQuotes);
  const autoCompleteCheckboxes = [{
    id: 'fields',
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.settingsPage.fieldsLabelText', {
      defaultMessage: 'Fields'
    }),
    stateSetter: setFields
  }, {
    id: 'indices',
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.settingsPage.indicesAndAliasesLabelText', {
      defaultMessage: 'Indices & Aliases'
    }),
    stateSetter: setIndices
  }, {
    id: 'templates',
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.settingsPage.templatesLabelText', {
      defaultMessage: 'Templates'
    }),
    stateSetter: setTemplates
  }];
  const checkboxIdToSelectedMap = {
    fields,
    indices,
    templates
  };
  const onAutocompleteChange = optionId => {
    const option = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(autoCompleteCheckboxes, item => item.id === optionId);
    if (option) {
      option.stateSetter(!checkboxIdToSelectedMap[optionId]);
    }
  };
  function saveSettings() {
    props.onSaveSettings({
      fontSize,
      wrapMode,
      autocomplete: {
        fields,
        indices,
        templates
      },
      polling,
      tripleQuotes
    });
  }

  // It only makes sense to show polling options if the user needs to fetch any data.
  const pollingFields = fields || indices || templates ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiCompressedFormRow"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "console.settingsPage.refreshingDataLabel",
      defaultMessage: "Refreshing autocomplete suggestions"
    }),
    helpText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "console.settingsPage.refreshingDataDescription",
      defaultMessage: "Console refreshes autocomplete suggestions by querying OpenSearch. Automatic refreshes may be an issue if you have a large cluster or if you have network limitations."
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiCompressedSwitch"], {
    checked: polling,
    "data-test-subj": "autocompletePolling",
    id: "autocompletePolling",
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      defaultMessage: "Automatically refresh autocomplete suggestions",
      id: "console.settingsPage.pollingLabelText"
    }),
    onChange: e => setPolling(e.target.checked)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSmallButton"], {
    "data-test-subj": "autocompletePolling",
    id: "autocompletePolling",
    onClick: () => {
      // Only refresh the currently selected settings.
      props.refreshAutocompleteSettings({
        fields,
        indices,
        templates
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    defaultMessage: "Refresh autocomplete suggestions",
    id: "console.settingsPage.refreshButtonLabel"
  }))) : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiModal"], {
    "data-test-subj": "devToolsSettingsModal",
    className: "conApp__settingsModal",
    onClose: props.onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiModalHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiModalHeaderTitle"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "console.settingsPage.pageTitle",
    defaultMessage: "Console Settings"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiCompressedFormRow"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "console.settingsPage.fontSizeLabel",
      defaultMessage: "Font Size"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiCompressedFieldNumber"], {
    autoFocus: true,
    "data-test-subj": "setting-font-size-input",
    value: fontSize,
    min: 6,
    max: 50,
    onChange: e => {
      const val = parseInt(e.target.value, 10);
      if (!val) return;
      setFontSize(val);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiCompressedFormRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiCompressedSwitch"], {
    checked: wrapMode,
    "data-test-subj": "settingsWrapLines",
    id: "wrapLines",
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      defaultMessage: "Wrap long lines",
      id: "console.settingsPage.wrapLongLinesLabelText"
    }),
    onChange: e => setWrapMode(e.target.checked)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiCompressedFormRow"], {
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "console.settingsPage.jsonSyntaxLabel",
      defaultMessage: "JSON syntax"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiCompressedSwitch"], {
    checked: tripleQuotes,
    "data-test-subj": "tripleQuotes",
    id: "tripleQuotes",
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      defaultMessage: "Use triple quotes in output pane",
      id: "console.settingsPage.tripleQuotesMessage"
    }),
    onChange: e => setTripleQuotes(e.target.checked)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiCompressedFormRow"], {
    labelType: "legend",
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "console.settingsPage.autocompleteLabel",
      defaultMessage: "Autocomplete"
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiCompressedCheckboxGroup"], {
    options: autoCompleteCheckboxes.map(opts => {
      const {
        stateSetter,
        ...rest
      } = opts;
      return rest;
    }),
    idToSelectedMap: checkboxIdToSelectedMap,
    onChange: e => {
      onAutocompleteChange(e);
    }
  })), pollingFields), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSmallButtonEmpty"], {
    "data-test-subj": "settingsCancelButton",
    onClick: props.onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "console.settingsPage.cancelButtonLabel",
    defaultMessage: "Cancel"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSmallButton"], {
    fill: true,
    "data-test-subj": "settings-save-button",
    onClick: saveSettings
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "console.settingsPage.saveButtonLabel",
    defaultMessage: "Save"
  }))));
}

/***/ }),

/***/ "./public/application/components/something_went_wrong_callout.tsx":
/*!************************************************************************!*\
  !*** ./public/application/components/something_went_wrong_callout.tsx ***!
  \************************************************************************/
/*! exports provided: SomethingWentWrongCallout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomethingWentWrongCallout", function() { return SomethingWentWrongCallout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
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





const SomethingWentWrongCallout = ({
  error,
  onButtonClick
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiCallOut"], {
    iconType: "alert",
    color: "danger",
    title: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.loadingError.title', {
      defaultMessage: 'Cannot load Console'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiText"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.loadingError.message",
    defaultMessage: "Try reloading to get the latest data."
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSpacer"], {
    size: "m"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiSmallButton"], {
    color: "danger",
    onClick: () => onButtonClick()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.loadingError.buttonLabel",
    defaultMessage: "Reload Console"
  })));
};

/***/ }),

/***/ "./public/application/components/top_nav_menu.tsx":
/*!********************************************************!*\
  !*** ./public/application/components/top_nav_menu.tsx ***!
  \********************************************************/
/*! exports provided: MenuItemPosition, TopNavMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemPosition", function() { return MenuItemPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavMenu", function() { return TopNavMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
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



let MenuItemPosition = /*#__PURE__*/function (MenuItemPosition) {
  MenuItemPosition["LEFT"] = "left";
  MenuItemPosition["RIGHT"] = "right";
  return MenuItemPosition;
}({});
const TopNavMenu = ({
  items,
  disabled,
  useUpdatedUX,
  rightContainerChildren
}) => {
  if (useUpdatedUX) {
    const leftMenus = items.filter(item => item.position === MenuItemPosition.LEFT);
    const rightMenus = items.filter(item => item.position === MenuItemPosition.RIGHT);
    const renderMenus = (item, idx) => {
      var _item$render;
      const commonProps = {
        disabled: !!disabled,
        onClick: item.onClick,
        ['data-test-subj']: item.testId
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
        grow: false,
        key: idx
      }, ((_item$render = item.render) === null || _item$render === void 0 ? void 0 : _item$render.call(item, commonProps)) || null);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], {
      size: "s"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
      justifyContent: "spaceBetween"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
      gutterSize: "m"
    }, leftMenus.map((item, index) => renderMenus(item, index)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexItem"], {
      grow: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiFlexGroup"], {
      gutterSize: "m"
    }, rightContainerChildren, rightMenus.map((item, index) => renderMenus(item, index))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSpacer"], null));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTabs"], {
    size: "s"
  }, items.map((item, idx) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiTab"], {
      key: idx,
      disabled: disabled,
      onClick: item.onClick,
      title: item.label,
      "data-test-subj": item.testId
    }, item.label);
  }));
};

/***/ }),

/***/ "./public/application/components/welcome_panel.tsx":
/*!*********************************************************!*\
  !*** ./public/application/components/welcome_panel.tsx ***!
  \*********************************************************/
/*! exports provided: WelcomePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePanel", function() { return WelcomePanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n/react */ "@osd/i18n/react");
/* harmony import */ var _osd_i18n_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_example__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor_example */ "./public/application/components/editor_example.tsx");
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


function WelcomePanel(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlyout"], {
    onClose: props.onDismiss,
    "data-test-subj": "welcomePanel",
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlyoutHeader"], {
    hasBorder: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiTitle"], {
    size: "m"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.welcomePage.pageTitle",
    defaultMessage: "Welcome to Console"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlyoutBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiText"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.welcomePage.quickIntroTitle",
    defaultMessage: "Quick intro to the UI"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.welcomePage.quickIntroDescription",
    defaultMessage: "The Console UI is split into two panes: an editor pane (left) and a response pane (right). Use the editor to type requests and submit them to OpenSearch. The results will be displayed in the response pane on the right side."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.welcomePage.supportedRequestFormatTitle",
    defaultMessage: "Console understands requests in a compact format, similar to cURL:"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editor_example__WEBPACK_IMPORTED_MODULE_3__["EditorExample"], {
    panel: "welcome"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.welcomePage.supportedRequestFormatDescription",
    defaultMessage: "While typing a request, Console will make suggestions which you can then accept by hitting Enter/Tab. These suggestions are made based on the request structure as well as your indices and types."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.welcomePage.quickTipsTitle",
    defaultMessage: "A few quick tips, while I have your attention"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.welcomePage.quickTips.submitRequestDescription",
    defaultMessage: "Submit requests to OpenSearch using the green triangle button."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.welcomePage.quickTips.useWrenchMenuDescription",
    defaultMessage: "Use the wrench menu for other useful things."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.welcomePage.quickTips.cUrlFormatForRequestsDescription",
    defaultMessage: "You can paste requests in cURL format and they will be translated to the Console syntax."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.welcomePage.quickTips.resizeEditorDescription",
    defaultMessage: "You can resize the editor and output panes by dragging the separator between them."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.welcomePage.quickTips.keyboardShortcutsDescription",
    defaultMessage: "Study the keyboard shortcuts under the Help button. Good stuff in there!"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiFlyoutFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiSmallButton"], {
    fill: true,
    fullWidth: false,
    "data-test-subj": "help-close-button",
    onClick: props.onDismiss
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_osd_i18n_react__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "console.welcomePage.closeButtonLabel",
    defaultMessage: "Dismiss"
  }))));
}

/***/ }),

/***/ "./public/application/containers/console_history/console_history.tsx":
/*!***************************************************************************!*\
  !*** ./public/application/containers/console_history/console_history.tsx ***!
  \***************************************************************************/
/*! exports provided: ConsoleHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleHistory", function() { return ConsoleHistory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts */ "./public/application/contexts/index.ts");
/* harmony import */ var _history_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history_viewer */ "./public/application/containers/console_history/history_viewer.tsx");
/* harmony import */ var _contexts_editor_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/editor_context */ "./public/application/contexts/editor_context/index.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks */ "./public/application/hooks/index.ts");
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










const CHILD_ELEMENT_PREFIX = 'historyReq';
function ConsoleHistory({
  close
}) {
  const {
    services: {
      history
    }
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_5__["useServicesContext"])();
  const {
    settings: readOnlySettings
  } = Object(_contexts_editor_context__WEBPACK_IMPORTED_MODULE_7__["useEditorReadContext"])();
  const [requests, setPastRequests] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(history.getHistory());
  const clearHistory = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    history.clearHistory();
    setPastRequests(history.getHistory());
  }, [history]);
  const listRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [viewingReq, setViewingReq] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [selectedIndex, setSelectedIndex] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const selectedReq = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const describeReq = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    const _describeReq = req => {
      const endpoint = req.endpoint;
      const date = moment__WEBPACK_IMPORTED_MODULE_3___default()(req.time);
      let formattedDate = date.format('MMM D');
      if (date.diff(moment__WEBPACK_IMPORTED_MODULE_3___default()(), 'days') > -7) {
        formattedDate = date.fromNow();
      }
      return `${endpoint} (${formattedDate})`;
    };
    _describeReq.cache = new WeakMap();
    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["memoize"])(_describeReq);
  }, []);
  const scrollIntoView = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(idx => {
    const activeDescendant = listRef.current.querySelector(`#${CHILD_ELEMENT_PREFIX}${idx}`);
    if (activeDescendant) {
      activeDescendant.scrollIntoView();
    }
  }, []);
  const initialize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const nextSelectedIndex = 0;
    describeReq.cache = new WeakMap();
    setViewingReq(requests[nextSelectedIndex]);
    selectedReq.current = requests[nextSelectedIndex];
    setSelectedIndex(nextSelectedIndex);
    scrollIntoView(nextSelectedIndex);
  }, [describeReq, requests, scrollIntoView]);
  const clear = () => {
    clearHistory();
    initialize();
  };
  const restoreRequestFromHistory = Object(_hooks__WEBPACK_IMPORTED_MODULE_8__["useRestoreRequestFromHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    initialize();
  }, [initialize]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const done = history.change(setPastRequests);
    return () => done();
  }, [history]);

  /* eslint-disable */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "conHistory"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiTitle"], {
    size: "s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.historyPage.pageTitle', {
    defaultMessage: 'History'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "conHistory__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    ref: listRef,
    onKeyDown: ev => {
      if (ev.key === _elastic_eui__WEBPACK_IMPORTED_MODULE_4__["keys"].ENTER) {
        restoreRequestFromHistory(selectedReq.current);
        return;
      }
      let currentIdx = selectedIndex;
      if (ev.key === _elastic_eui__WEBPACK_IMPORTED_MODULE_4__["keys"].ARROW_UP) {
        ev.preventDefault();
        --currentIdx;
      } else if (ev.key === _elastic_eui__WEBPACK_IMPORTED_MODULE_4__["keys"].ARROW_DOWN) {
        ev.preventDefault();
        ++currentIdx;
      }
      const nextSelectedIndex = Math.min(Math.max(0, currentIdx), requests.length - 1);
      setViewingReq(requests[nextSelectedIndex]);
      selectedReq.current = requests[nextSelectedIndex];
      setSelectedIndex(nextSelectedIndex);
      scrollIntoView(nextSelectedIndex);
    },
    role: "listbox",
    className: "list-group conHistory__reqs",
    tabIndex: 0,
    "aria-activedescendant": `${CHILD_ELEMENT_PREFIX}${selectedIndex}`,
    "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.historyPage.requestListAriaLabel', {
      defaultMessage: 'History of sent requests'
    })
  }, requests.map((req, idx) => {
    const reqDescription = describeReq(req);
    const isSelected = viewingReq === req;
    return (
      /*#__PURE__*/
      // Ignore a11y issues on li's
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: idx,
        id: `${CHILD_ELEMENT_PREFIX}${idx}`,
        className: `list-group-item conHistory__req ${isSelected ? 'conHistory__req-selected' : ''}`,
        onClick: () => {
          setViewingReq(req);
          selectedReq.current = req;
          setSelectedIndex(idx);
        },
        role: "option",
        onMouseEnter: () => setViewingReq(req),
        onMouseLeave: () => setViewingReq(selectedReq.current),
        onDoubleClick: () => restoreRequestFromHistory(selectedReq.current),
        "aria-label": _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.historyPage.itemOfRequestListAriaLabel', {
          defaultMessage: 'Request: {historyItem}',
          values: {
            historyItem: reqDescription
          }
        }),
        "aria-selected": isSelected
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiText"], {
        size: "s"
      }, reqDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "conHistory__reqIcon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiIcon"], {
        type: "arrowRight"
      })))
    );
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "conHistory__body__spacer"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_history_viewer__WEBPACK_IMPORTED_MODULE_6__["HistoryViewer"], {
    settings: readOnlySettings,
    req: viewingReq
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
    size: "s"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
    justifyContent: "spaceBetween",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSmallButtonEmpty"], {
    color: "danger",
    onClick: () => clear()
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.historyPage.clearHistoryButtonLabel', {
    defaultMessage: 'Clear'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexGroup"], {
    justifyContent: "flexEnd",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSmallButtonEmpty"], {
    color: "primary",
    onClick: () => close()
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.historyPage.closehistoryButtonLabel', {
    defaultMessage: 'Close'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSmallButton"], {
    color: "primary",
    disabled: !selectedReq,
    onClick: () => restoreRequestFromHistory(selectedReq.current)
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.historyPage.applyHistoryButtonLabel', {
    defaultMessage: 'Apply'
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_4__["EuiSpacer"], {
    size: "s"
  }));
}

/***/ }),

/***/ "./public/application/containers/console_history/history_viewer.tsx":
/*!**************************************************************************!*\
  !*** ./public/application/containers/console_history/history_viewer.tsx ***!
  \**************************************************************************/
/*! exports provided: HistoryViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryViewer", function() { return HistoryViewer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_legacy_subscribe_console_resize_checker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editor/legacy/subscribe_console_resize_checker */ "./public/application/containers/editor/legacy/subscribe_console_resize_checker.ts");
/* harmony import */ var _models_legacy_core_editor_mode_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/legacy_core_editor/mode/input */ "./public/application/models/legacy_core_editor/mode/input.js");
/* harmony import */ var _models_legacy_core_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/legacy_core_editor */ "./public/application/models/legacy_core_editor/index.ts");
/* harmony import */ var _editor_legacy_console_editor_apply_editor_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editor/legacy/console_editor/apply_editor_settings */ "./public/application/containers/editor/legacy/console_editor/apply_editor_settings.ts");
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

const inputMode = new _models_legacy_core_editor_mode_input__WEBPACK_IMPORTED_MODULE_3__["Mode"]();


function HistoryViewer({
  settings,
  req
}) {
  const divRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const viewerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const viewer = _models_legacy_core_editor__WEBPACK_IMPORTED_MODULE_4__["createReadOnlyAceEditor"](divRef.current);
    viewerRef.current = viewer;
    const unsubscribe = Object(_editor_legacy_subscribe_console_resize_checker__WEBPACK_IMPORTED_MODULE_2__["subscribeResizeChecker"])(divRef.current, viewer);
    return () => unsubscribe();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_editor_legacy_console_editor_apply_editor_settings__WEBPACK_IMPORTED_MODULE_5__["applyCurrentSettings"])(viewerRef.current, settings);
  }, [settings]);
  if (viewerRef.current) {
    const {
      current: viewer
    } = viewerRef;
    if (req) {
      const s = req.method + ' ' + req.endpoint + '\n' + (req.data || '');
      viewer.update(s, inputMode);
      viewer.clearSelection();
    } else {
      viewer.update(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.historyPage.noHistoryTextMessage', {
        defaultMessage: 'No history available'
      }), inputMode);
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "conHistory__viewer",
    ref: divRef
  });
}

/***/ }),

/***/ "./public/application/containers/console_history/index.ts":
/*!****************************************************************!*\
  !*** ./public/application/containers/console_history/index.ts ***!
  \****************************************************************/
/*! exports provided: ConsoleHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _console_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./console_history */ "./public/application/containers/console_history/console_history.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleHistory", function() { return _console_history__WEBPACK_IMPORTED_MODULE_0__["ConsoleHistory"]; });

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

/***/ "./public/application/containers/editor/editor.tsx":
/*!*********************************************************!*\
  !*** ./public/application/containers/editor/editor.tsx ***!
  \*********************************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./public/application/components/index.ts");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../opensearch_dashboards_react/public */ "plugin/opensearchDashboardsReact/public");
/* harmony import */ var _opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _legacy_console_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./legacy/console_editor */ "./public/application/containers/editor/legacy/console_editor/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services */ "./public/services/index.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts */ "./public/application/contexts/index.ts");
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









const INITIAL_PANEL_WIDTH = 50;
const PANEL_MIN_WIDTH = '100px';
const Editor = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(({
  loading,
  dataSourceId,
  useUpdatedUX
}) => {
  const {
    services: {
      storage
    }
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_7__["useServicesContext"])();
  const {
    currentTextObject
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_7__["useEditorReadContext"])();
  const {
    requestInFlight
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_7__["useRequestReadContext"])();
  const dispatch = Object(_contexts__WEBPACK_IMPORTED_MODULE_7__["useRequestActionContext"])();
  const [firstPanelWidth, secondPanelWidth] = storage.get(_services__WEBPACK_IMPORTED_MODULE_6__["StorageKeys"].WIDTH, [INITIAL_PANEL_WIDTH, INITIAL_PANEL_WIDTH]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: 'resetLastResult',
      payload: undefined
    });
  }, [dispatch, dataSourceId]);

  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  const onPanelWidthChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["debounce"])(widths => {
    storage.set(_services__WEBPACK_IMPORTED_MODULE_6__["StorageKeys"].WIDTH, widths);
  }, 300), []);
  if (!currentTextObject) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, requestInFlight ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "conApp__requestProgressBarContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiProgress"], {
    size: "xs",
    color: "accent",
    position: "absolute"
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__["PanelsContainer"], {
    onPanelWidthChange: onPanelWidthChange,
    resizerClassName: "conApp__resizer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__["Panel"], {
    style: {
      height: '100%',
      position: 'relative',
      minWidth: PANEL_MIN_WIDTH
    },
    initialWidth: firstPanelWidth
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["EditorContentSpinner"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_legacy_console_editor__WEBPACK_IMPORTED_MODULE_5__["Editor"], {
    initialTextValue: currentTextObject.text,
    dataSourceId: dataSourceId
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_opensearch_dashboards_react_public__WEBPACK_IMPORTED_MODULE_4__["Panel"], {
    style: {
      height: '100%',
      position: 'relative',
      minWidth: PANEL_MIN_WIDTH,
      flexGrow: useUpdatedUX ? 1 : 0
    },
    initialWidth: secondPanelWidth
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["EditorContentSpinner"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_legacy_console_editor__WEBPACK_IMPORTED_MODULE_5__["EditorOutput"], null))));
});

/***/ }),

/***/ "./public/application/containers/editor/index.ts":
/*!*******************************************************!*\
  !*** ./public/application/containers/editor/index.ts ***!
  \*******************************************************/
/*! exports provided: autoIndent, getDocumentation, Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legacy */ "./public/application/containers/editor/legacy/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autoIndent", function() { return _legacy__WEBPACK_IMPORTED_MODULE_0__["autoIndent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocumentation", function() { return _legacy__WEBPACK_IMPORTED_MODULE_0__["getDocumentation"]; });

/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor */ "./public/application/containers/editor/editor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _editor__WEBPACK_IMPORTED_MODULE_1__["Editor"]; });

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

/***/ "./public/application/containers/editor/legacy/console_editor/apply_editor_settings.ts":
/*!*********************************************************************************************!*\
  !*** ./public/application/containers/editor/legacy/console_editor/apply_editor_settings.ts ***!
  \*********************************************************************************************/
/*! exports provided: applyCurrentSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyCurrentSettings", function() { return applyCurrentSettings; });
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

function applyCurrentSettings(editor, settings) {
  if (editor.setStyles) {
    editor.setStyles({
      wrapLines: settings.wrapMode,
      fontSize: settings.fontSize + 'px'
    });
  } else {
    editor.getSession().setUseWrapMode(settings.wrapMode);
    editor.container.style.fontSize = settings.fontSize + 'px';
  }
}

/***/ }),

/***/ "./public/application/containers/editor/legacy/console_editor/editor.tsx":
/*!*******************************************************************************!*\
  !*** ./public/application/containers/editor/legacy/console_editor/editor.tsx ***!
  \*******************************************************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "../../../node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../opensearch_ui_shared/public */ "plugin/opensearchUiShared/public");
/* harmony import */ var _opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_mappings_mappings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../lib/mappings/mappings */ "./public/lib/mappings/mappings.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components */ "./public/application/components/index.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../contexts */ "./public/application/contexts/index.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks */ "./public/application/hooks/index.ts");
/* harmony import */ var _models_sense_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../models/sense_editor */ "./public/application/models/sense_editor/index.ts");
/* harmony import */ var _console_menu_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../console_menu_actions */ "./public/application/containers/editor/legacy/console_menu_actions.ts");
/* harmony import */ var _subscribe_console_resize_checker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../subscribe_console_resize_checker */ "./public/application/containers/editor/legacy/subscribe_console_resize_checker.ts");
/* harmony import */ var _apply_editor_settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./apply_editor_settings */ "./public/application/containers/editor/legacy/console_editor/apply_editor_settings.ts");
/* harmony import */ var _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./keyboard_shortcuts */ "./public/application/containers/editor/legacy/console_editor/keyboard_shortcuts.ts");
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









const {
  useUIAceKeyboardMode
} = _opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_5__["ace"];
const abs = {
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0'
};
const DEFAULT_INPUT_VALUE = `GET _search
{
  "query": {
    "match_all": {}
  }
}`;
const inputId = 'ConAppInputTextarea';
function EditorUI({
  initialTextValue,
  dataSourceId
}) {
  const {
    services: {
      history,
      notifications,
      settings: settingsService,
      opensearchHostService,
      http
    },
    docLinkVersion
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_8__["useServicesContext"])();
  const {
    settings
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_8__["useEditorReadContext"])();
  const setInputEditor = Object(_hooks__WEBPACK_IMPORTED_MODULE_9__["useSetInputEditor"])();
  const sendCurrentRequestToOpenSearch = Object(_hooks__WEBPACK_IMPORTED_MODULE_9__["useSendCurrentRequestToOpenSearch"])(dataSourceId);
  const saveCurrentTextObject = Object(_hooks__WEBPACK_IMPORTED_MODULE_9__["useSaveCurrentTextObject"])();
  const editorRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  const editorInstanceRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  const [textArea, setTextArea] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);
  useUIAceKeyboardMode(textArea);
  const openDocumentation = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(async () => {
    const documentation = await Object(_console_menu_actions__WEBPACK_IMPORTED_MODULE_11__["getDocumentation"])(editorInstanceRef.current, docLinkVersion);
    if (!documentation) {
      return;
    }
    window.open(documentation, '_blank');
  }, [docLinkVersion]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    editorInstanceRef.current = _models_sense_editor__WEBPACK_IMPORTED_MODULE_10__["create"](editorRef.current);
    const editor = editorInstanceRef.current;
    const textareaElement = editorRef.current.querySelector('textarea');
    if (textareaElement) {
      textareaElement.setAttribute('id', inputId);
    }
    const readQueryParams = () => {
      const [, queryString] = (window.location.hash || '').split('?');
      return Object(query_string__WEBPACK_IMPORTED_MODULE_3__["parse"])(queryString || '', {
        sort: false
      });
    };
    const loadBufferFromRemote = url => {
      if (/^https?:\/\//.test(url)) {
        const loadFrom = {
          url,
          // Having dataType here is required as it doesn't allow jQuery to `eval` content
          // coming from the external source thereby preventing XSS attack.
          dataType: 'text',
          osdXsrfToken: false
        };
        if (/https?:\/\/api\.github\.com/.test(url)) {
          loadFrom.headers = {
            Accept: 'application/vnd.github.v3.raw'
          };
        }

        // Fire and forget.
        $.ajax(loadFrom).done(async data => {
          const coreEditor = editor.getCoreEditor();
          await editor.update(data, true);
          editor.moveToNextRequestEdge(false);
          coreEditor.clearSelection();
          editor.highlightCurrentRequestsAndUpdateActionBar();
          coreEditor.getContainer().focus();
        });
      }
    };

    // Support for loading a console snippet from a remote source, like support docs.
    const onHashChange = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => {
      const {
        load_from: url
      } = readQueryParams();
      if (!url) {
        return;
      }
      loadBufferFromRemote(url);
    }, 200);
    window.addEventListener('hashchange', onHashChange);
    const initialQueryParams = readQueryParams();
    if (initialQueryParams.load_from) {
      loadBufferFromRemote(initialQueryParams.load_from);
    } else {
      editor.update(initialTextValue || DEFAULT_INPUT_VALUE);
    }
    function setupAutosave() {
      let timer;
      const saveDelay = 500;
      editor.getCoreEditor().on('change', () => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = window.setTimeout(saveCurrentState, saveDelay);
      });
    }
    function saveCurrentState() {
      try {
        const content = editor.getCoreEditor().getValue();
        saveCurrentTextObject(content);
      } catch (e) {
        // Ignoring saving error
      }
    }
    setInputEditor(editor);
    setTextArea(editorRef.current.querySelector('textarea'));
    Object(_lib_mappings_mappings__WEBPACK_IMPORTED_MODULE_6__["retrieveAutoCompleteInfo"])(http, settingsService, settingsService.getAutocomplete(), dataSourceId);
    const unsubscribeResizer = Object(_subscribe_console_resize_checker__WEBPACK_IMPORTED_MODULE_12__["subscribeResizeChecker"])(editorRef.current, editor);
    setupAutosave();
    return () => {
      unsubscribeResizer();
      Object(_lib_mappings_mappings__WEBPACK_IMPORTED_MODULE_6__["clearSubscriptions"])();
      window.removeEventListener('hashchange', onHashChange);
      if (editorInstanceRef.current) {
        editorInstanceRef.current.getCoreEditor().destroy();
      }
    };
  }, [saveCurrentTextObject, initialTextValue, history, setInputEditor, settingsService, http, dataSourceId]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    const {
      current: editor
    } = editorInstanceRef;
    Object(_apply_editor_settings__WEBPACK_IMPORTED_MODULE_13__["applyCurrentSettings"])(editor.getCoreEditor(), settings);
    // Preserve legacy focus behavior after settings have updated.
    editor.getCoreEditor().getContainer().focus();
  }, [settings]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    Object(_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_14__["registerCommands"])({
      senseEditor: editorInstanceRef.current,
      sendCurrentRequestToOpenSearch,
      openDocumentation
    });
  }, [sendCurrentRequestToOpenSearch, openDocumentation]);
  const toolTipButtonDisabled = dataSourceId === undefined;
  const sendLabel = toolTipButtonDisabled ? _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.sendRequestButtonTooltip.withoutDataSourceId', {
    defaultMessage: 'Select a data source'
  }) : _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.sendRequestButtonTooltip', {
    defaultMessage: 'Send request'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: abs,
    className: "conApp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "conApp__editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
    className: "conApp__autoComplete",
    id: "autocomplete"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexGroup"], {
    className: "conApp__editorActions",
    id: "ConAppEditorActions",
    gutterSize: "none",
    responsive: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiToolTip"], {
    content: sendLabel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    onClick: sendCurrentRequestToOpenSearch,
    "data-test-subj": "sendRequestButton",
    "aria-label": sendLabel,
    className: "conApp__editorActionButton conApp__editorActionButton--success",
    disabled: toolTipButtonDisabled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiIcon"], {
    type: "play"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["ConsoleMenu"], {
    getCurl: () => {
      return editorInstanceRef.current.getRequestsAsCURL(opensearchHostService.getHost());
    },
    getDocumentation: () => {
      return Object(_console_menu_actions__WEBPACK_IMPORTED_MODULE_11__["getDocumentation"])(editorInstanceRef.current, docLinkVersion);
    },
    autoIndent: event => {
      Object(_console_menu_actions__WEBPACK_IMPORTED_MODULE_11__["autoIndent"])(editorInstanceRef.current, event);
    },
    addNotification: ({
      title
    }) => notifications.toasts.add({
      title
    })
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiScreenReaderOnly"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: inputId
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.inputTextarea', {
    defaultMessage: 'Dev Tools Console'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    ref: editorRef,
    id: "ConAppEditor",
    className: "conApp__editorContent",
    "data-test-subj": "request-editor"
  })));
}
const Editor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(EditorUI);

/***/ }),

/***/ "./public/application/containers/editor/legacy/console_editor/editor_output.tsx":
/*!**************************************************************************************!*\
  !*** ./public/application/containers/editor/legacy/console_editor/editor_output.tsx ***!
  \**************************************************************************************/
/*! exports provided: EditorOutput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorOutput", function() { return EditorOutput; });
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_imports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared_imports */ "./public/shared_imports.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../contexts */ "./public/application/contexts/index.ts");
/* harmony import */ var _models_legacy_core_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/legacy_core_editor */ "./public/application/models/legacy_core_editor/index.ts");
/* harmony import */ var _subscribe_console_resize_checker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subscribe_console_resize_checker */ "./public/application/containers/editor/legacy/subscribe_console_resize_checker.ts");
/* harmony import */ var _apply_editor_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apply_editor_settings */ "./public/application/containers/editor/legacy/console_editor/apply_editor_settings.ts");
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









function modeForContentType(contentType) {
  if (!contentType) {
    return 'ace/mode/text';
  }
  if (contentType.indexOf('application/json') >= 0) {
    return 'ace/mode/json';
  } else if (contentType.indexOf('application/yaml') >= 0) {
    return 'ace/mode/yaml';
  }
  return 'ace/mode/text';
}
function EditorOutputUI() {
  const editorRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const editorInstanceRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const {
    services
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_4__["useServicesContext"])();
  const {
    settings: readOnlySettings
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_4__["useEditorReadContext"])();
  const {
    lastResult: {
      data,
      error
    }
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_4__["useRequestReadContext"])();
  const inputId = 'ConAppOutputTextarea';
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    editorInstanceRef.current = Object(_models_legacy_core_editor__WEBPACK_IMPORTED_MODULE_5__["createReadOnlyAceEditor"])(editorRef.current);
    const unsubscribe = Object(_subscribe_console_resize_checker__WEBPACK_IMPORTED_MODULE_6__["subscribeResizeChecker"])(editorRef.current, editorInstanceRef.current);
    const textarea = editorRef.current.querySelector('textarea');
    textarea.setAttribute('id', inputId);
    textarea.setAttribute('readonly', 'true');
    return () => {
      unsubscribe();
      editorInstanceRef.current.destroy();
    };
  }, [services.settings]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const editor = editorInstanceRef.current;
    if (data) {
      const mode = modeForContentType(data[0].response.contentType);
      editor.session.setMode(mode);
      editor.update(data.map(d => d.response.value).map(readOnlySettings.tripleQuotes ? _shared_imports__WEBPACK_IMPORTED_MODULE_3__["expandLiteralStrings"] : a => a).join('\n'));
    } else if (error) {
      editor.session.setMode(modeForContentType(error.response.contentType));
      editor.update(error.response.value);
    } else {
      editor.update('');
    }
  }, [readOnlySettings, data, error]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    Object(_apply_editor_settings__WEBPACK_IMPORTED_MODULE_7__["applyCurrentSettings"])(editorInstanceRef.current, readOnlySettings);
  }, [readOnlySettings]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_0__["EuiScreenReaderOnly"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: inputId
  }, _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.outputTextarea', {
    defaultMessage: 'Dev Tools Console output'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    ref: editorRef,
    className: "conApp__output",
    "data-test-subj": "response-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "conApp__outputContent",
    id: "ConAppOutput"
  })));
}
const EditorOutput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(EditorOutputUI);

/***/ }),

/***/ "./public/application/containers/editor/legacy/console_editor/index.ts":
/*!*****************************************************************************!*\
  !*** ./public/application/containers/editor/legacy/console_editor/index.ts ***!
  \*****************************************************************************/
/*! exports provided: Editor, EditorOutput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor */ "./public/application/containers/editor/legacy/console_editor/editor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _editor__WEBPACK_IMPORTED_MODULE_0__["Editor"]; });

/* harmony import */ var _editor_output__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor_output */ "./public/application/containers/editor/legacy/console_editor/editor_output.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorOutput", function() { return _editor_output__WEBPACK_IMPORTED_MODULE_1__["EditorOutput"]; });

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

/***/ "./public/application/containers/editor/legacy/console_editor/keyboard_shortcuts.ts":
/*!******************************************************************************************!*\
  !*** ./public/application/containers/editor/legacy/console_editor/keyboard_shortcuts.ts ***!
  \******************************************************************************************/
/*! exports provided: registerCommands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerCommands", function() { return registerCommands; });
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


function registerCommands({
  senseEditor,
  sendCurrentRequestToOpenSearch,
  openDocumentation
}) {
  const throttledAutoIndent = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["throttle"])(() => senseEditor.autoIndent(), 500, {
    leading: true,
    trailing: true
  });
  const coreEditor = senseEditor.getCoreEditor();
  coreEditor.registerKeyboardShortcut({
    keys: {
      win: 'Ctrl-Enter',
      mac: 'Command-Enter'
    },
    name: 'send to OpenSearch',
    fn: () => sendCurrentRequestToOpenSearch()
  });
  coreEditor.registerKeyboardShortcut({
    name: 'open documentation',
    keys: {
      win: 'Ctrl-/',
      mac: 'Command-/'
    },
    fn: () => {
      openDocumentation();
    }
  });
  coreEditor.registerKeyboardShortcut({
    name: 'auto indent request',
    keys: {
      win: 'Ctrl-I',
      mac: 'Command-I'
    },
    fn: () => {
      throttledAutoIndent();
    }
  });
  coreEditor.registerKeyboardShortcut({
    name: 'move to previous request start or end',
    keys: {
      win: 'Ctrl-Up',
      mac: 'Command-Up'
    },
    fn: () => {
      senseEditor.moveToPreviousRequestEdge();
    }
  });
  coreEditor.registerKeyboardShortcut({
    name: 'move to next request start or end',
    keys: {
      win: 'Ctrl-Down',
      mac: 'Command-Down'
    },
    fn: () => {
      senseEditor.moveToNextRequestEdge(false);
    }
  });
}

/***/ }),

/***/ "./public/application/containers/editor/legacy/console_menu_actions.ts":
/*!*****************************************************************************!*\
  !*** ./public/application/containers/editor/legacy/console_menu_actions.ts ***!
  \*****************************************************************************/
/*! exports provided: autoIndent, getDocumentation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoIndent", function() { return autoIndent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocumentation", function() { return getDocumentation; });
/* harmony import */ var _lib_autocomplete_get_endpoint_from_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/autocomplete/get_endpoint_from_position */ "./public/lib/autocomplete/get_endpoint_from_position.ts");
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


async function autoIndent(editor, event) {
  event.preventDefault();
  await editor.autoIndent();
  editor.getCoreEditor().getContainer().focus();
}
function getDocumentation(editor, docLinkVersion) {
  return editor.getRequestsInRange().then(requests => {
    if (!requests || requests.length === 0) {
      return null;
    }
    const position = requests[0].range.end;
    position.column = position.column - 1;
    const endpoint = Object(_lib_autocomplete_get_endpoint_from_position__WEBPACK_IMPORTED_MODULE_0__["getEndpointFromPosition"])(editor.getCoreEditor(), position, editor.parser);
    if (endpoint && endpoint.documentation && endpoint.documentation.indexOf('http') !== -1) {
      return endpoint.documentation.replace('/master/', `/${docLinkVersion}/`).replace('/current/', `/${docLinkVersion}/`);
    } else {
      return null;
    }
  });
}

/***/ }),

/***/ "./public/application/containers/editor/legacy/index.ts":
/*!**************************************************************!*\
  !*** ./public/application/containers/editor/legacy/index.ts ***!
  \**************************************************************/
/*! exports provided: EditorOutput, Editor, getDocumentation, autoIndent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _console_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./console_editor */ "./public/application/containers/editor/legacy/console_editor/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorOutput", function() { return _console_editor__WEBPACK_IMPORTED_MODULE_0__["EditorOutput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return _console_editor__WEBPACK_IMPORTED_MODULE_0__["Editor"]; });

/* harmony import */ var _console_menu_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./console_menu_actions */ "./public/application/containers/editor/legacy/console_menu_actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocumentation", function() { return _console_menu_actions__WEBPACK_IMPORTED_MODULE_1__["getDocumentation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autoIndent", function() { return _console_menu_actions__WEBPACK_IMPORTED_MODULE_1__["autoIndent"]; });

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

/***/ "./public/application/containers/editor/legacy/subscribe_console_resize_checker.ts":
/*!*****************************************************************************************!*\
  !*** ./public/application/containers/editor/legacy/subscribe_console_resize_checker.ts ***!
  \*****************************************************************************************/
/*! exports provided: subscribeResizeChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeResizeChecker", function() { return subscribeResizeChecker; });
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../opensearch_dashboards_utils/public */ "plugin/opensearchDashboardsUtils/public");
/* harmony import */ var _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__);
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


function subscribeResizeChecker(el, ...editors) {
  const checker = new _opensearch_dashboards_utils_public__WEBPACK_IMPORTED_MODULE_0__["ResizeChecker"](el);
  checker.on('resize', () => editors.forEach(e => {
    if (e.getCoreEditor) {
      e.getCoreEditor().resize();
    } else {
      e.resize();
    }
    if (e.updateActionsBar) {
      e.updateActionsBar();
    }
  }));
  return () => checker.destroy();
}

/***/ }),

/***/ "./public/application/containers/index.ts":
/*!************************************************!*\
  !*** ./public/application/containers/index.ts ***!
  \************************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./public/application/containers/main/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["Main"]; });

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

/***/ "./public/application/containers/main/get_top_nav.tsx":
/*!************************************************************!*\
  !*** ./public/application/containers/main/get_top_nav.tsx ***!
  \************************************************************/
/*! exports provided: getTopNavConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopNavConfig", function() { return getTopNavConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_top_nav_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/top_nav_menu */ "./public/application/components/top_nav_menu.tsx");
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





function getTopNavConfig({
  onClickHistory,
  onClickSettings,
  onClickHelp,
  onClickExport,
  onClickImport,
  useUpdatedUX
}) {
  const helpItem = {
    id: 'help',
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.topNav.helpTabLabel', {
      defaultMessage: 'Help'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.topNav.helpTabDescription', {
      defaultMessage: 'Help'
    }),
    onClick: () => {
      onClickHelp();
    },
    testId: 'consoleHelpButton',
    render: commonProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
      content: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.topNav.helpTabLabel', {
        defaultMessage: 'Help'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonIcon"], _extends({
      iconType: "questionInCircle",
      display: "base"
    }, commonProps))),
    position: _components_top_nav_menu__WEBPACK_IMPORTED_MODULE_3__["MenuItemPosition"].RIGHT
  };
  const settingsItem = {
    id: 'settings',
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.topNav.settingsTabLabel', {
      defaultMessage: 'Settings'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.topNav.settingsTabDescription', {
      defaultMessage: 'Settings'
    }),
    onClick: () => {
      onClickSettings();
    },
    testId: 'consoleSettingsButton',
    render: commonProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiToolTip"], {
      content: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.topNav.settingsToolTipContent', {
        defaultMessage: 'Console settings'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonIcon"], _extends({
      iconType: "gear",
      display: "base"
    }, commonProps))),
    position: _components_top_nav_menu__WEBPACK_IMPORTED_MODULE_3__["MenuItemPosition"].RIGHT
  };
  return [{
    id: 'history',
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.topNav.historyTabLabel', {
      defaultMessage: 'History'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.topNav.historyTabDescription', {
      defaultMessage: 'History'
    }),
    onClick: () => {
      onClickHistory();
    },
    testId: 'consoleHistoryButton',
    render: commonProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButtonEmpty"], _extends({}, commonProps, {
      flush: "both",
      iconType: "arrowDown",
      iconSide: "right"
    }), _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.topNav.historyTabLabel', {
      defaultMessage: 'History'
    })),
    position: _components_top_nav_menu__WEBPACK_IMPORTED_MODULE_3__["MenuItemPosition"].LEFT
  }, ...(useUpdatedUX ? [helpItem, settingsItem] : [settingsItem, helpItem]), {
    id: 'export',
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.topNav.exportTabLabel', {
      defaultMessage: 'Export'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.topNav.exportTabDescription', {
      defaultMessage: 'Export'
    }),
    onClick: () => {
      onClickExport();
    },
    testId: 'consoleExportButton',
    render: commonProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButton"], _extends({
      minWidth: "unset"
    }, commonProps), _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.topNav.exportTabLabel', {
      defaultMessage: 'Export'
    })),
    position: _components_top_nav_menu__WEBPACK_IMPORTED_MODULE_3__["MenuItemPosition"].RIGHT
  }, {
    id: 'import',
    label: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.topNav.importTabLabel', {
      defaultMessage: 'Import'
    }),
    description: _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.topNav.importTabDescription', {
      defaultMessage: 'Import'
    }),
    onClick: () => {
      onClickImport();
    },
    testId: 'consoleImportButton',
    render: commonProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiSmallButton"], _extends({
      minWidth: "unset",
      fill: true
    }, commonProps), _osd_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].translate('console.topNav.importButtonLabel', {
      defaultMessage: 'Import query'
    })),
    position: _components_top_nav_menu__WEBPACK_IMPORTED_MODULE_3__["MenuItemPosition"].RIGHT
  }];
}

/***/ }),

/***/ "./public/application/containers/main/index.ts":
/*!*****************************************************!*\
  !*** ./public/application/containers/main/index.ts ***!
  \*****************************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./public/application/containers/main/main.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return _main__WEBPACK_IMPORTED_MODULE_0__["Main"]; });

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

/***/ "./public/application/containers/main/main.tsx":
/*!*****************************************************!*\
  !*** ./public/application/containers/main/main.tsx ***!
  \*****************************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_filesaver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/filesaver */ "../../../node_modules/@elastic/filesaver/file-saver.js");
/* harmony import */ var _elastic_filesaver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elastic_filesaver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _console_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../console_history */ "./public/application/containers/console_history/index.ts");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editor */ "./public/application/containers/editor/index.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../settings */ "./public/application/containers/settings.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components */ "./public/application/components/index.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts */ "./public/application/contexts/index.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks */ "./public/application/hooks/index.ts");
/* harmony import */ var _get_top_nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./get_top_nav */ "./public/application/containers/main/get_top_nav.tsx");
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









function Main({
  dataSourceId
}) {
  var _requestData;
  const {
    services: {
      storage,
      objectStorageClient,
      uiSettings
    }
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_8__["useServicesContext"])();
  const {
    ready: editorsReady
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_8__["useEditorReadContext"])();
  const {
    requestInFlight: requestInProgress,
    lastResult: {
      data: requestData,
      error: requestError
    }
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_8__["useRequestReadContext"])();
  const [showWelcome, setShowWelcomePanel] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => storage.get('version_welcome_shown') !== '@@SENSE_REVISION');
  const [showingHistory, setShowHistory] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [showSettings, setShowSettings] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [showHelp, setShowHelp] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [showImportFlyout, setShowImportFlyout] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const onExport = async () => {
    const results = await objectStorageClient.text.findAll();
    const senseData = results.sort((a, b) => a.createdAt - b.createdAt)[0];
    const blob = new Blob([JSON.stringify(senseData || {})], {
      type: 'application/json'
    });
    Object(_elastic_filesaver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, 'sense.json');
  };
  const renderConsoleHistory = () => {
    return editorsReady ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_console_history__WEBPACK_IMPORTED_MODULE_4__["ConsoleHistory"], {
      close: () => setShowHistory(false)
    }) : null;
  };
  const {
    done,
    error,
    retry
  } = Object(_hooks__WEBPACK_IMPORTED_MODULE_9__["useDataInit"])();
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiPageContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["SomethingWentWrongCallout"], {
      onButtonClick: retry,
      error: error
    }));
  }
  const lastDatum = (_requestData = requestData === null || requestData === void 0 ? void 0 : requestData[requestData.length - 1]) !== null && _requestData !== void 0 ? _requestData : requestError;
  const useUpdatedUX = uiSettings.get('home:useNewHomePage');
  const networkRequestStatusBarContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false,
    className: useUpdatedUX ? '' : 'conApp__tabsExtension'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["NetworkRequestStatusBar"], {
    requestInProgress: requestInProgress,
    requestResult: lastDatum ? {
      method: lastDatum.request.method.toUpperCase(),
      endpoint: lastDatum.request.path,
      statusCode: lastDatum.response.statusCode,
      statusText: lastDatum.response.statusText,
      timeElapsedMs: lastDatum.response.timeMs
    } : undefined
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "consoleRoot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
    className: `consoleContainer useUpdatedUX-${!!useUpdatedUX}`,
    gutterSize: "none",
    direction: "column",
    responsive: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiTitle"], {
    className: "euiScreenReaderOnly"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.pageHeading', {
    defaultMessage: 'Console'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexGroup"], {
    gutterSize: "none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["TopNavMenu"], {
    disabled: !done,
    useUpdatedUX: useUpdatedUX,
    items: Object(_get_top_nav__WEBPACK_IMPORTED_MODULE_10__["getTopNavConfig"])({
      useUpdatedUX,
      onClickHistory: () => setShowHistory(!showingHistory),
      onClickSettings: () => setShowSettings(true),
      onClickHelp: () => setShowHelp(!showHelp),
      onClickExport: () => onExport(),
      onClickImport: () => setShowImportFlyout(!showImportFlyout)
    }),
    rightContainerChildren: networkRequestStatusBarContent
  })), useUpdatedUX ? null : networkRequestStatusBarContent)), showingHistory ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], {
    grow: false
  }, renderConsoleHistory()) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiFlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editor__WEBPACK_IMPORTED_MODULE_5__["Editor"], {
    useUpdatedUX: useUpdatedUX,
    loading: !done,
    dataSourceId: dataSourceId
  }))), done && showWelcome ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["WelcomePanel"], {
    onDismiss: () => {
      storage.set('version_welcome_shown', '@@SENSE_REVISION');
      setShowWelcomePanel(false);
    }
  }) : null, showSettings ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], {
    onClose: () => setShowSettings(false),
    dataSourceId: dataSourceId
  }) : null, showHelp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["HelpPanel"], {
    onClose: () => setShowHelp(false)
  }) : null, showImportFlyout ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["ImportFlyout"], {
    refresh: retry,
    close: () => setShowImportFlyout(false)
  }) : null);
}

/***/ }),

/***/ "./public/application/containers/settings.tsx":
/*!****************************************************!*\
  !*** ./public/application/containers/settings.tsx ***!
  \****************************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./public/application/components/index.ts");
/* harmony import */ var _lib_mappings_mappings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/mappings/mappings */ "./public/lib/mappings/mappings.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts */ "./public/application/contexts/index.ts");
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


const getAutocompleteDiff = (newSettings, prevSettings) => {
  return Object.keys(newSettings.autocomplete).filter(key => {
    // @ts-ignore
    return prevSettings.autocomplete[key] !== newSettings.autocomplete[key];
  });
};
const refreshAutocompleteSettings = (http, settings, selectedSettings, dataSourceId) => {
  Object(_lib_mappings_mappings__WEBPACK_IMPORTED_MODULE_2__["retrieveAutoCompleteInfo"])(http, settings, selectedSettings, dataSourceId);
};
const fetchAutocompleteSettingsIfNeeded = (http, settings, newSettings, prevSettings) => {
  // We'll only retrieve settings if polling is on. The expectation here is that if the user
  // disables polling it's because they want manual control over the fetch request (possibly
  // because it's a very expensive request given their cluster and bandwidth). In that case,
  // they would be unhappy with any request that's sent automatically.
  if (newSettings.polling) {
    const autocompleteDiff = getAutocompleteDiff(newSettings, prevSettings);
    const isSettingsChanged = autocompleteDiff.length > 0;
    const isPollingChanged = prevSettings.polling !== newSettings.polling;
    if (isSettingsChanged) {
      // If the user has changed one of the autocomplete settings, then we'll fetch just the
      // ones which have changed.
      const changedSettings = autocompleteDiff.reduce((changedSettingsAccum, setting) => {
        changedSettingsAccum[setting] = newSettings.autocomplete[setting];
        return changedSettingsAccum;
      }, {});
      Object(_lib_mappings_mappings__WEBPACK_IMPORTED_MODULE_2__["retrieveAutoCompleteInfo"])(http, settings, changedSettings, dataSourceId);
    } else if (isPollingChanged && newSettings.polling) {
      // If the user has turned polling on, then we'll fetch all selected autocomplete settings.
      Object(_lib_mappings_mappings__WEBPACK_IMPORTED_MODULE_2__["retrieveAutoCompleteInfo"])(http, settings, settings.getAutocomplete(), dataSourceId);
    }
  }
};
function Settings({
  onClose,
  dataSourceId
}) {
  const {
    services: {
      settings,
      http
    }
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_3__["useServicesContext"])();
  const dispatch = Object(_contexts__WEBPACK_IMPORTED_MODULE_3__["useEditorActionContext"])();
  const onSaveSettings = newSettings => {
    const prevSettings = settings.toJSON();
    fetchAutocompleteSettingsIfNeeded(http, settings, newSettings, prevSettings);

    // Update the new settings in localStorage
    settings.updateSettings(newSettings);

    // Let the rest of the application know settings have updated.
    dispatch({
      type: 'updateSettings',
      payload: newSettings
    });
    onClose();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["DevToolsSettingsModal"], {
    onClose: onClose,
    onSaveSettings: onSaveSettings,
    refreshAutocompleteSettings: selectedSettings => refreshAutocompleteSettings(http, settings, selectedSettings, dataSourceId),
    settings: settings.toJSON()
  });
}

/***/ }),

/***/ "./public/application/contexts/create_use_context.ts":
/*!***********************************************************!*\
  !*** ./public/application/contexts/create_use_context.ts ***!
  \***********************************************************/
/*! exports provided: createUseContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUseContext", function() { return createUseContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


const createUseContext = (Ctx, name) => {
  return () => {
    const ctx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(Ctx);
    if (!ctx) {
      throw new Error(`${name} should be used inside of ${name}Provider!`);
    }
    return ctx;
  };
};

/***/ }),

/***/ "./public/application/contexts/editor_context/editor_context.tsx":
/*!***********************************************************************!*\
  !*** ./public/application/contexts/editor_context/editor_context.tsx ***!
  \***********************************************************************/
/*! exports provided: EditorContextProvider, useEditorReadContext, useEditorActionContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorContextProvider", function() { return EditorContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEditorReadContext", function() { return useEditorReadContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEditorActionContext", function() { return useEditorActionContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stores_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stores/editor */ "./public/application/stores/editor.ts");
/* harmony import */ var _create_use_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create_use_context */ "./public/application/contexts/create_use_context.ts");
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




const EditorReadContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
const EditorActionContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
function EditorContextProvider({
  children,
  settings
}) {
  const [state, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_stores_editor__WEBPACK_IMPORTED_MODULE_1__["reducer"], _stores_editor__WEBPACK_IMPORTED_MODULE_1__["initialValue"], value => ({
    ...value,
    settings
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EditorReadContext.Provider, {
    value: state
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EditorActionContext.Provider, {
    value: dispatch
  }, children));
}
const useEditorReadContext = Object(_create_use_context__WEBPACK_IMPORTED_MODULE_2__["createUseContext"])(EditorReadContext, 'EditorReadContext');
const useEditorActionContext = Object(_create_use_context__WEBPACK_IMPORTED_MODULE_2__["createUseContext"])(EditorActionContext, 'EditorActionContext');

/***/ }),

/***/ "./public/application/contexts/editor_context/editor_registry.ts":
/*!***********************************************************************!*\
  !*** ./public/application/contexts/editor_context/editor_registry.ts ***!
  \***********************************************************************/
/*! exports provided: EditorRegistry, instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorRegistry", function() { return EditorRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instance", function() { return instance; });
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

class EditorRegistry {
  constructor() {
    _defineProperty(this, "inputEditor", void 0);
  }
  setInputEditor(inputEditor) {
    this.inputEditor = inputEditor;
  }
  getInputEditor() {
    return this.inputEditor;
  }
}

// Create a single instance of this and use as private state.
const instance = new EditorRegistry();

/***/ }),

/***/ "./public/application/contexts/editor_context/index.ts":
/*!*************************************************************!*\
  !*** ./public/application/contexts/editor_context/index.ts ***!
  \*************************************************************/
/*! exports provided: EditorContextProvider, useEditorReadContext, useEditorActionContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor_context */ "./public/application/contexts/editor_context/editor_context.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorContextProvider", function() { return _editor_context__WEBPACK_IMPORTED_MODULE_0__["EditorContextProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEditorReadContext", function() { return _editor_context__WEBPACK_IMPORTED_MODULE_0__["useEditorReadContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEditorActionContext", function() { return _editor_context__WEBPACK_IMPORTED_MODULE_0__["useEditorActionContext"]; });

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

/***/ "./public/application/contexts/index.ts":
/*!**********************************************!*\
  !*** ./public/application/contexts/index.ts ***!
  \**********************************************/
/*! exports provided: useServicesContext, ServicesContextProvider, ContextValue, useRequestActionContext, useRequestReadContext, RequestContextProvider, useEditorActionContext, useEditorReadContext, EditorContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services_context */ "./public/application/contexts/services_context.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useServicesContext", function() { return _services_context__WEBPACK_IMPORTED_MODULE_0__["useServicesContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicesContextProvider", function() { return _services_context__WEBPACK_IMPORTED_MODULE_0__["ServicesContextProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextValue", function() { return _services_context__WEBPACK_IMPORTED_MODULE_0__["ContextValue"]; });

/* harmony import */ var _request_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request_context */ "./public/application/contexts/request_context.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRequestActionContext", function() { return _request_context__WEBPACK_IMPORTED_MODULE_1__["useRequestActionContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRequestReadContext", function() { return _request_context__WEBPACK_IMPORTED_MODULE_1__["useRequestReadContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestContextProvider", function() { return _request_context__WEBPACK_IMPORTED_MODULE_1__["RequestContextProvider"]; });

/* harmony import */ var _editor_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor_context */ "./public/application/contexts/editor_context/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEditorActionContext", function() { return _editor_context__WEBPACK_IMPORTED_MODULE_2__["useEditorActionContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEditorReadContext", function() { return _editor_context__WEBPACK_IMPORTED_MODULE_2__["useEditorReadContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorContextProvider", function() { return _editor_context__WEBPACK_IMPORTED_MODULE_2__["EditorContextProvider"]; });

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

/***/ "./public/application/contexts/request_context.tsx":
/*!*********************************************************!*\
  !*** ./public/application/contexts/request_context.tsx ***!
  \*********************************************************/
/*! exports provided: RequestContextProvider, useRequestReadContext, useRequestActionContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestContextProvider", function() { return RequestContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRequestReadContext", function() { return useRequestReadContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRequestActionContext", function() { return useRequestActionContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _create_use_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_use_context */ "./public/application/contexts/create_use_context.ts");
/* harmony import */ var _stores_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/request */ "./public/application/stores/request.ts");
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




const RequestReadContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
const RequestActionContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
function RequestContextProvider({
  children
}) {
  const [state, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_stores_request__WEBPACK_IMPORTED_MODULE_2__["reducer"], _stores_request__WEBPACK_IMPORTED_MODULE_2__["initialValue"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RequestReadContext.Provider, {
    value: state
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RequestActionContext.Provider, {
    value: dispatch
  }, children));
}
const useRequestReadContext = Object(_create_use_context__WEBPACK_IMPORTED_MODULE_1__["createUseContext"])(RequestReadContext, 'RequestReadContext');
const useRequestActionContext = Object(_create_use_context__WEBPACK_IMPORTED_MODULE_1__["createUseContext"])(RequestActionContext, 'RequestActionContext');

/***/ }),

/***/ "./public/application/contexts/services_context.tsx":
/*!**********************************************************!*\
  !*** ./public/application/contexts/services_context.tsx ***!
  \**********************************************************/
/*! exports provided: ServicesContextProvider, useServicesContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesContextProvider", function() { return ServicesContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useServicesContext", function() { return useServicesContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


const ServicesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
function ServicesContextProvider({
  children,
  value
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Fire and forget, we attempt to init the host service once.
    value.services.opensearchHostService.init();
  }, [value.services.opensearchHostService]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServicesContext.Provider, {
    value: value
  }, children);
}
const useServicesContext = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ServicesContext);
  if (context === undefined) {
    throw new Error('useServicesContext must be used inside the ServicesContextProvider.');
  }
  return context;
};

/***/ }),

/***/ "./public/application/factories/index.ts":
/*!***********************************************!*\
  !*** ./public/application/factories/index.ts ***!
  \***********************************************/
/*! exports provided: createTokenIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _token_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token_iterator */ "./public/application/factories/token_iterator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTokenIterator", function() { return _token_iterator__WEBPACK_IMPORTED_MODULE_0__["createTokenIterator"]; });

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

/***/ "./public/application/factories/token_iterator.ts":
/*!********************************************************!*\
  !*** ./public/application/factories/token_iterator.ts ***!
  \********************************************************/
/*! exports provided: createTokenIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTokenIterator", function() { return createTokenIterator; });
/* harmony import */ var _lib_token_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/token_iterator */ "./public/lib/token_iterator/index.ts");
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


function createTokenIterator({
  editor,
  position
}) {
  const provider = editor.getTokenProvider();
  return new _lib_token_iterator__WEBPACK_IMPORTED_MODULE_0__["TokenIterator"](provider, position);
}

/***/ }),

/***/ "./public/application/hooks/index.ts":
/*!*******************************************!*\
  !*** ./public/application/hooks/index.ts ***!
  \*******************************************/
/*! exports provided: useSetInputEditor, useRestoreRequestFromHistory, useSendCurrentRequestToOpenSearch, useSaveCurrentTextObject, useDataInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_set_input_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use_set_input_editor */ "./public/application/hooks/use_set_input_editor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSetInputEditor", function() { return _use_set_input_editor__WEBPACK_IMPORTED_MODULE_0__["useSetInputEditor"]; });

/* harmony import */ var _use_restore_request_from_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use_restore_request_from_history */ "./public/application/hooks/use_restore_request_from_history/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRestoreRequestFromHistory", function() { return _use_restore_request_from_history__WEBPACK_IMPORTED_MODULE_1__["useRestoreRequestFromHistory"]; });

/* harmony import */ var _use_send_current_request_to_opensearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use_send_current_request_to_opensearch */ "./public/application/hooks/use_send_current_request_to_opensearch/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSendCurrentRequestToOpenSearch", function() { return _use_send_current_request_to_opensearch__WEBPACK_IMPORTED_MODULE_2__["useSendCurrentRequestToOpenSearch"]; });

/* harmony import */ var _use_save_current_text_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use_save_current_text_object */ "./public/application/hooks/use_save_current_text_object.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSaveCurrentTextObject", function() { return _use_save_current_text_object__WEBPACK_IMPORTED_MODULE_3__["useSaveCurrentTextObject"]; });

/* harmony import */ var _use_data_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use_data_init */ "./public/application/hooks/use_data_init/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDataInit", function() { return _use_data_init__WEBPACK_IMPORTED_MODULE_4__["useDataInit"]; });

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

/***/ "./public/application/hooks/use_data_init/data_migration.ts":
/*!******************************************************************!*\
  !*** ./public/application/hooks/use_data_init/data_migration.ts ***!
  \******************************************************************/
/*! exports provided: migrateToTextObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "migrateToTextObjects", function() { return migrateToTextObjects; });
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
 * Once off migration to new text object data structure
 */
async function migrateToTextObjects({
  history,
  objectStorageClient: objectStorageClient
}) {
  const legacyTextContent = history.getLegacySavedEditorState();
  if (!legacyTextContent) return;
  await objectStorageClient.text.create({
    createdAt: Date.now(),
    updatedAt: Date.now(),
    text: legacyTextContent.content
  });
  history.deleteLegacySavedEditorState();
}

/***/ }),

/***/ "./public/application/hooks/use_data_init/index.ts":
/*!*********************************************************!*\
  !*** ./public/application/hooks/use_data_init/index.ts ***!
  \*********************************************************/
/*! exports provided: useDataInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_data_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use_data_init */ "./public/application/hooks/use_data_init/use_data_init.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDataInit", function() { return _use_data_init__WEBPACK_IMPORTED_MODULE_0__["useDataInit"]; });

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

/***/ "./public/application/hooks/use_data_init/use_data_init.ts":
/*!*****************************************************************!*\
  !*** ./public/application/hooks/use_data_init/use_data_init.ts ***!
  \*****************************************************************/
/*! exports provided: useDataInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDataInit", function() { return useDataInit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_migration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data_migration */ "./public/application/hooks/use_data_init/data_migration.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts */ "./public/application/contexts/index.ts");
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




const DEFAULT_INPUT_VALUE = `GET _search
{
  "query": {
    "match_all": {}
  }
}`;
const useDataInit = () => {
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [done, setDone] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [retryToken, setRetryToken] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const retry = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setRetryToken({});
    setDone(false);
    setError(null);
  }, []);
  const {
    services: {
      objectStorageClient,
      history
    }
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_2__["useServicesContext"])();
  const dispatch = Object(_contexts__WEBPACK_IMPORTED_MODULE_2__["useEditorActionContext"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const load = async () => {
      try {
        await Object(_data_migration__WEBPACK_IMPORTED_MODULE_1__["migrateToTextObjects"])({
          history,
          objectStorageClient
        });
        const results = await objectStorageClient.text.findAll();
        if (!results.length) {
          const newObject = await objectStorageClient.text.create({
            createdAt: Date.now(),
            updatedAt: Date.now(),
            text: DEFAULT_INPUT_VALUE
          });
          dispatch({
            type: 'setCurrentTextObject',
            payload: newObject
          });
        } else {
          dispatch({
            type: 'setCurrentTextObject',
            // For backwards compatibility, we sort here according to date created to
            // always take the first item created.
            payload: results.sort((a, b) => a.createdAt - b.createdAt)[0]
          });
        }
      } catch (e) {
        setError(e);
      } finally {
        setDone(true);
      }
    };
    load();
  }, [dispatch, objectStorageClient, history, retryToken]);
  return {
    error,
    done,
    retry
  };
};

/***/ }),

/***/ "./public/application/hooks/use_restore_request_from_history/index.ts":
/*!****************************************************************************!*\
  !*** ./public/application/hooks/use_restore_request_from_history/index.ts ***!
  \****************************************************************************/
/*! exports provided: useRestoreRequestFromHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_restore_request_from_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use_restore_request_from_history */ "./public/application/hooks/use_restore_request_from_history/use_restore_request_from_history.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRestoreRequestFromHistory", function() { return _use_restore_request_from_history__WEBPACK_IMPORTED_MODULE_0__["useRestoreRequestFromHistory"]; });

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

/***/ "./public/application/hooks/use_restore_request_from_history/restore_request_from_history.ts":
/*!***************************************************************************************************!*\
  !*** ./public/application/hooks/use_restore_request_from_history/restore_request_from_history.ts ***!
  \***************************************************************************************************/
/*! exports provided: restoreRequestFromHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreRequestFromHistory", function() { return restoreRequestFromHistory; });
/* harmony import */ var _lib_row_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/row_parser */ "./public/lib/row_parser.ts");
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
 * This function is considered legacy and should not be changed or updated before we have editor
 * interfaces in place (it's using a customized version of Ace directly).
 */
function restoreRequestFromHistory(editor, req) {
  const coreEditor = editor.getCoreEditor();
  let pos = coreEditor.getCurrentPosition();
  let prefix = '';
  let suffix = '\n';
  const parser = new _lib_row_parser__WEBPACK_IMPORTED_MODULE_0__["default"](coreEditor);
  if (parser.isStartRequestRow(pos.lineNumber)) {
    pos.column = 1;
    suffix += '\n';
  } else if (parser.isEndRequestRow(pos.lineNumber)) {
    const line = coreEditor.getLineValue(pos.lineNumber);
    pos.column = line.length + 1;
    prefix = '\n\n';
  } else if (parser.isInBetweenRequestsRow(pos.lineNumber)) {
    pos.column = 1;
  } else {
    pos = editor.nextRequestEnd(pos);
    prefix = '\n\n';
  }
  let s = prefix + req.method + ' ' + req.endpoint;
  if (req.data) {
    s += '\n' + req.data;
  }
  s += suffix;
  coreEditor.insert(pos, s);
  coreEditor.moveCursorToPosition({
    lineNumber: pos.lineNumber + prefix.length,
    column: 1
  });
  coreEditor.clearSelection();
  coreEditor.getContainer().focus();
}

/***/ }),

/***/ "./public/application/hooks/use_restore_request_from_history/use_restore_request_from_history.ts":
/*!*******************************************************************************************************!*\
  !*** ./public/application/hooks/use_restore_request_from_history/use_restore_request_from_history.ts ***!
  \*******************************************************************************************************/
/*! exports provided: useRestoreRequestFromHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRestoreRequestFromHistory", function() { return useRestoreRequestFromHistory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_editor_context_editor_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/editor_context/editor_registry */ "./public/application/contexts/editor_context/editor_registry.ts");
/* harmony import */ var _restore_request_from_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restore_request_from_history */ "./public/application/hooks/use_restore_request_from_history/restore_request_from_history.ts");
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




const useRestoreRequestFromHistory = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(req => {
    const editor = _contexts_editor_context_editor_registry__WEBPACK_IMPORTED_MODULE_1__["instance"].getInputEditor();
    Object(_restore_request_from_history__WEBPACK_IMPORTED_MODULE_2__["restoreRequestFromHistory"])(editor, req);
  }, []);
};

/***/ }),

/***/ "./public/application/hooks/use_save_current_text_object.ts":
/*!******************************************************************!*\
  !*** ./public/application/hooks/use_save_current_text_object.ts ***!
  \******************************************************************/
/*! exports provided: useSaveCurrentTextObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSaveCurrentTextObject", function() { return useSaveCurrentTextObject; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts */ "./public/application/contexts/index.ts");
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




const WAIT_MS = 500;
const useSaveCurrentTextObject = () => {
  const promiseChainRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(Promise.resolve());
  const {
    services: {
      objectStorageClient
    }
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_2__["useServicesContext"])();
  const {
    currentTextObject
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_2__["useEditorReadContext"])();

  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["throttle"])(text => {
    const {
      current: promise
    } = promiseChainRef;
    if (!currentTextObject) return;
    promise.finally(() => objectStorageClient.text.update({
      ...currentTextObject,
      text,
      updatedAt: Date.now()
    }));
  }, WAIT_MS, {
    trailing: true
  }), [objectStorageClient, currentTextObject]);
};

/***/ }),

/***/ "./public/application/hooks/use_send_current_request_to_opensearch/index.ts":
/*!**********************************************************************************!*\
  !*** ./public/application/hooks/use_send_current_request_to_opensearch/index.ts ***!
  \**********************************************************************************/
/*! exports provided: useSendCurrentRequestToOpenSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_send_current_request_to_opensearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use_send_current_request_to_opensearch */ "./public/application/hooks/use_send_current_request_to_opensearch/use_send_current_request_to_opensearch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSendCurrentRequestToOpenSearch", function() { return _use_send_current_request_to_opensearch__WEBPACK_IMPORTED_MODULE_0__["useSendCurrentRequestToOpenSearch"]; });

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

/***/ "./public/application/hooks/use_send_current_request_to_opensearch/send_request_to_opensearch.ts":
/*!*******************************************************************************************************!*\
  !*** ./public/application/hooks/use_send_current_request_to_opensearch/send_request_to_opensearch.ts ***!
  \*******************************************************************************************************/
/*! exports provided: sendRequestToOpenSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequestToOpenSearch", function() { return sendRequestToOpenSearch; });
/* harmony import */ var _osd_std__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/std */ "../../../packages/osd-std/target/web/index.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/utils */ "./public/lib/utils/index.ts");
/* harmony import */ var _opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../opensearch_ui_shared/public */ "plugin/opensearchUiShared/public");
/* harmony import */ var _opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_opensearch_opensearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/opensearch/opensearch */ "./public/lib/opensearch/opensearch.ts");
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




const {
  collapseLiteralStrings
} = _opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_2__["XJson"];
// @ts-ignore

let CURRENT_REQ_ID = 0;
function sendRequestToOpenSearch(args) {
  const requests = args.requests.slice();
  return new Promise((resolve, reject) => {
    const reqId = ++CURRENT_REQ_ID;
    const results = [];
    if (reqId !== CURRENT_REQ_ID) {
      return;
    }
    if (requests.length === 0) {
      return;
    }
    const isMultiRequest = requests.length > 1;
    const sendNextRequest = async () => {
      if (reqId !== CURRENT_REQ_ID) {
        resolve(results);
        return;
      }
      if (requests.length === 0) {
        resolve(results);
        return;
      }
      const req = requests.shift();
      const opensearchPath = req.url;
      const opensearchMethod = req.method;
      let opensearchData = collapseLiteralStrings(req.data.join('\n'));
      if (opensearchData) {
        opensearchData += '\n';
      } // append a new line for bulk requests.

      const startTime = Date.now();
      try {
        var _httpResponse$respons;
        const httpResponse = await _lib_opensearch_opensearch__WEBPACK_IMPORTED_MODULE_3__["send"](args.http, opensearchMethod, opensearchPath, opensearchData, args.dataSourceId, args.withLongNumeralsSupport);
        if (reqId !== CURRENT_REQ_ID) {
          return;
        }
        const statusCode = (_httpResponse$respons = httpResponse.response) === null || _httpResponse$respons === void 0 ? void 0 : _httpResponse$respons.status;
        const isSuccess =
        // Things like DELETE index where the index is not there are OK.
        statusCode && (statusCode >= 200 && statusCode < 300 || statusCode === 404);
        if (isSuccess) {
          const contentType = httpResponse.response.headers.get('Content-Type');
          let value = '';
          if (contentType.includes('application/json')) {
            value = Object(_osd_std__WEBPACK_IMPORTED_MODULE_0__["stringify"])(httpResponse.body, null, 2);
          } else {
            value = httpResponse.body;
          }
          const warnings = httpResponse.response.headers.get('warning');
          if (warnings) {
            const deprecationMessages = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["extractDeprecationMessages"])(warnings);
            value = deprecationMessages.join('\n') + '\n' + value;
          }
          if (isMultiRequest) {
            value = '# ' + req.method + ' ' + req.url + '\n' + value;
          }
          results.push({
            response: {
              timeMs: Date.now() - startTime,
              statusCode,
              statusText: httpResponse.response.statusText,
              contentType,
              value
            },
            request: {
              data: opensearchData,
              method: opensearchMethod,
              path: opensearchPath
            }
          });

          // single request terminate via sendNextRequest as well
          await sendNextRequest();
        }
      } catch (error) {
        const httpError = error;
        const httpResponse = httpError.response;
        let value;
        let contentType;
        if (httpResponse) {
          if (httpError.body) {
            var _contentType;
            contentType = httpResponse.headers.get('Content-Type');
            if ((_contentType = contentType) !== null && _contentType !== void 0 && _contentType.includes('application/json')) {
              value = Object(_osd_std__WEBPACK_IMPORTED_MODULE_0__["stringify"])(httpError.body, null, 2);
            } else {
              value = httpError.body;
            }
          } else {
            value = 'Request failed to get to the server (status code: ' + httpResponse.status + ')';
            contentType = 'text/plain';
          }
        } else {
          value = "\n\nFailed to connect to Console's backend.\nPlease check the OpenSearch Dashboards server is up and running";
          contentType = 'text/plain';
        }
        if (isMultiRequest) {
          value = '# ' + req.method + ' ' + req.url + '\n' + value;
        }
        reject({
          response: {
            value,
            contentType,
            timeMs: Date.now() - startTime,
            statusCode: httpResponse === null || httpResponse === void 0 ? void 0 : httpResponse.status,
            statusText: httpResponse === null || httpResponse === void 0 ? void 0 : httpResponse.statusText
          },
          request: {
            data: opensearchData,
            method: opensearchMethod,
            path: opensearchPath
          }
        });
      }
    };
    sendNextRequest();
  });
}

/***/ }),

/***/ "./public/application/hooks/use_send_current_request_to_opensearch/track.ts":
/*!**********************************************************************************!*\
  !*** ./public/application/hooks/use_send_current_request_to_opensearch/track.ts ***!
  \**********************************************************************************/
/*! exports provided: track */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "track", function() { return track; });
/* harmony import */ var _lib_autocomplete_get_endpoint_from_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/autocomplete/get_endpoint_from_position */ "./public/lib/autocomplete/get_endpoint_from_position.ts");
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


const track = (requests, editor, trackUiMetric) => {
  const coreEditor = editor.getCoreEditor();
  // `getEndpointFromPosition` gets values from the server-side generated JSON files which
  // are a combination of JS, automatically generated JSON and manual overrides. That means
  // the metrics reported from here will be tied to the definitions in those files.
  // See src/legacy/core_plugins/console/server/api_server/spec
  const endpointDescription = Object(_lib_autocomplete_get_endpoint_from_position__WEBPACK_IMPORTED_MODULE_0__["getEndpointFromPosition"])(coreEditor, coreEditor.getCurrentPosition(), editor.parser);
  if (requests[0] && endpointDescription) {
    var _endpointDescription$;
    const eventName = `${requests[0].method}_${(_endpointDescription$ = endpointDescription.id) !== null && _endpointDescription$ !== void 0 ? _endpointDescription$ : 'unknown'}`;
    trackUiMetric.count(eventName);
  }
};

/***/ }),

/***/ "./public/application/hooks/use_send_current_request_to_opensearch/use_send_current_request_to_opensearch.ts":
/*!*******************************************************************************************************************!*\
  !*** ./public/application/hooks/use_send_current_request_to_opensearch/use_send_current_request_to_opensearch.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: useSendCurrentRequestToOpenSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSendCurrentRequestToOpenSearch", function() { return useSendCurrentRequestToOpenSearch; });
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_editor_context_editor_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/editor_context/editor_registry */ "./public/application/contexts/editor_context/editor_registry.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts */ "./public/application/contexts/index.ts");
/* harmony import */ var _send_request_to_opensearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./send_request_to_opensearch */ "./public/application/hooks/use_send_current_request_to_opensearch/send_request_to_opensearch.ts");
/* harmony import */ var _track__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./track */ "./public/application/hooks/use_send_current_request_to_opensearch/track.ts");
/* harmony import */ var _lib_mappings_mappings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/mappings/mappings */ "./public/lib/mappings/mappings.ts");
/* harmony import */ var _data_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../data/common */ "plugin/data/common");
/* harmony import */ var _data_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_common__WEBPACK_IMPORTED_MODULE_7__);
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


const useSendCurrentRequestToOpenSearch = dataSourceId => {
  const {
    services: {
      history,
      settings,
      notifications,
      trackUiMetric,
      http,
      uiSettings
    }
  } = Object(_contexts__WEBPACK_IMPORTED_MODULE_3__["useServicesContext"])();
  const dispatch = Object(_contexts__WEBPACK_IMPORTED_MODULE_3__["useRequestActionContext"])();
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async () => {
    try {
      const editor = _contexts_editor_context_editor_registry__WEBPACK_IMPORTED_MODULE_2__["instance"].getInputEditor();
      const requests = await editor.getRequestsInRange();
      if (!requests.length) {
        notifications.toasts.add(_osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('console.notification.error.noRequestSelectedTitle', {
          defaultMessage: 'No request selected. Select a request by placing the cursor inside it.'
        }));
        return;
      }
      dispatch({
        type: 'sendRequest',
        payload: undefined
      });

      // Fire and forget
      setTimeout(() => Object(_track__WEBPACK_IMPORTED_MODULE_5__["track"])(requests, editor, trackUiMetric), 0);
      const withLongNumeralsSupport = await uiSettings.get(_data_common__WEBPACK_IMPORTED_MODULE_7__["UI_SETTINGS"].DATA_WITH_LONG_NUMERALS);
      const results = await Object(_send_request_to_opensearch__WEBPACK_IMPORTED_MODULE_4__["sendRequestToOpenSearch"])({
        http,
        requests,
        dataSourceId,
        withLongNumeralsSupport
      });
      results.forEach(({
        request: {
          path,
          method,
          data
        }
      }) => {
        try {
          history.addToHistory(path, method, data);
        } catch (e) {
          // Best effort, but notify the user.
          notifications.toasts.addError(e, {
            title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('console.notification.error.couldNotSaveRequestTitle', {
              defaultMessage: 'Could not save request to history.'
            })
          });
        }
      });
      const {
        polling
      } = settings.toJSON();
      if (polling) {
        // If the user has submitted a request against OpenSearch, something in the fields, indices, aliases,
        // or templates may have changed, so we'll need to update this data. Assume that if
        // the user disables polling they're trying to optimize performance or otherwise
        // preserve resources, so they won't want this request sent either.
        Object(_lib_mappings_mappings__WEBPACK_IMPORTED_MODULE_6__["retrieveAutoCompleteInfo"])(http, settings, settings.getAutocomplete(), dataSourceId);
      }
      dispatch({
        type: 'requestSuccess',
        payload: {
          data: results
        }
      });
    } catch (e) {
      if (e !== null && e !== void 0 && e.response) {
        dispatch({
          type: 'requestFail',
          payload: e
        });
      } else {
        dispatch({
          type: 'requestFail',
          payload: undefined
        });
        notifications.toasts.addError(e, {
          title: _osd_i18n__WEBPACK_IMPORTED_MODULE_0__["i18n"].translate('console.notification.error.unknownErrorTitle', {
            defaultMessage: 'Unknown Request Error'
          })
        });
      }
    }
  }, [dispatch, http, dataSourceId, settings, notifications.toasts, trackUiMetric, history, uiSettings]);
};

/***/ }),

/***/ "./public/application/hooks/use_set_input_editor.ts":
/*!**********************************************************!*\
  !*** ./public/application/hooks/use_set_input_editor.ts ***!
  \**********************************************************/
/*! exports provided: useSetInputEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSetInputEditor", function() { return useSetInputEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_editor_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/editor_context */ "./public/application/contexts/editor_context/index.ts");
/* harmony import */ var _contexts_editor_context_editor_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/editor_context/editor_registry */ "./public/application/contexts/editor_context/editor_registry.ts");
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




const useSetInputEditor = () => {
  const dispatch = Object(_contexts_editor_context__WEBPACK_IMPORTED_MODULE_1__["useEditorActionContext"])();
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(editor => {
    dispatch({
      type: 'setInputEditor',
      payload: editor
    });
    _contexts_editor_context_editor_registry__WEBPACK_IMPORTED_MODULE_2__["instance"].setInputEditor(editor);
  }, [dispatch]);
};

/***/ }),

/***/ "./public/application/index.tsx":
/*!**************************************!*\
  !*** ./public/application/index.tsx ***!
  \**************************************/
/*! exports provided: renderApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderApp", function() { return renderApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contexts */ "./public/application/contexts/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./public/application/containers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./public/services/index.ts");
/* harmony import */ var _lib_local_storage_object_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/local_storage_object_client */ "./public/lib/local_storage_object_client/index.ts");
/* harmony import */ var _services_tracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/tracker */ "./public/services/tracker.ts");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib */ "./public/application/lib/index.ts");
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









function renderApp({
  I18nContext,
  notifications,
  docLinkVersion,
  usageCollection,
  element,
  http,
  dataSourceId,
  uiSettings
}) {
  const trackUiMetric = Object(_services_tracker__WEBPACK_IMPORTED_MODULE_6__["createUsageTracker"])(usageCollection);
  trackUiMetric.load('opened_app');
  const storage = Object(_services__WEBPACK_IMPORTED_MODULE_4__["createStorage"])({
    engine: window.localStorage,
    prefix: 'sense:'
  });
  const history = Object(_services__WEBPACK_IMPORTED_MODULE_4__["createHistory"])({
    storage
  });
  const settings = Object(_services__WEBPACK_IMPORTED_MODULE_4__["createSettings"])({
    storage
  });
  const objectStorageClient = _lib_local_storage_object_client__WEBPACK_IMPORTED_MODULE_5__["create"](storage);
  const api = Object(_lib__WEBPACK_IMPORTED_MODULE_7__["createApi"])({
    http
  });
  const opensearchHostService = Object(_lib__WEBPACK_IMPORTED_MODULE_7__["createOpenSearchHostService"])({
    api
  });
  Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I18nContext, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts__WEBPACK_IMPORTED_MODULE_2__["ServicesContextProvider"], {
    value: {
      docLinkVersion,
      services: {
        opensearchHostService,
        storage,
        history,
        settings,
        notifications,
        trackUiMetric,
        objectStorageClient,
        http,
        uiSettings
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts__WEBPACK_IMPORTED_MODULE_2__["RequestContextProvider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts__WEBPACK_IMPORTED_MODULE_2__["EditorContextProvider"], {
    settings: settings.toJSON()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers__WEBPACK_IMPORTED_MODULE_3__["Main"], {
    dataSourceId: dataSourceId
  }))))), element);
  return () => Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"])(element);
}

/***/ }),

/***/ "./public/application/lib/api.ts":
/*!***************************************!*\
  !*** ./public/application/lib/api.ts ***!
  \***************************************/
/*! exports provided: createApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApi", function() { return createApi; });
/* harmony import */ var _shared_imports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared_imports */ "./public/shared_imports.ts");
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


const createApi = ({
  http
}) => {
  return {
    getOpenSearchConfig: () => {
      return Object(_shared_imports__WEBPACK_IMPORTED_MODULE_0__["sendRequest"])(http, {
        path: '/api/console/opensearch_config',
        method: 'get'
      });
    }
  };
};

/***/ }),

/***/ "./public/application/lib/index.ts":
/*!*****************************************!*\
  !*** ./public/application/lib/index.ts ***!
  \*****************************************/
/*! exports provided: createApi, Api, createOpenSearchHostService, OpenSearchHostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./public/application/lib/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createApi", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["createApi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["Api"]; });

/* harmony import */ var _opensearch_host_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opensearch_host_service */ "./public/application/lib/opensearch_host_service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOpenSearchHostService", function() { return _opensearch_host_service__WEBPACK_IMPORTED_MODULE_1__["createOpenSearchHostService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenSearchHostService", function() { return _opensearch_host_service__WEBPACK_IMPORTED_MODULE_1__["OpenSearchHostService"]; });

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

/***/ "./public/application/lib/opensearch_host_service.ts":
/*!***********************************************************!*\
  !*** ./public/application/lib/opensearch_host_service.ts ***!
  \***********************************************************/
/*! exports provided: OpenSearchHostService, createOpenSearchHostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSearchHostService", function() { return OpenSearchHostService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOpenSearchHostService", function() { return createOpenSearchHostService; });
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
 * Very simple state for holding the current OpenSearch host.
 *
 * This is used to power the copy as cURL functionality.
 */
class OpenSearchHostService {
  constructor(api) {
    this.api = api;
    _defineProperty(this, "host", 'http://localhost:9200');
  }
  setHost(host) {
    this.host = host;
  }

  /**
   * Initialize the host value based on the value set on the server.
   *
   * This call is necessary because this value can only be retrieved at
   * runtime.
   */
  async init() {
    const {
      data
    } = await this.api.getOpenSearchConfig();
    if (data && data.host) {
      this.setHost(data.host);
    }
  }
  getHost() {
    return this.host;
  }
}
const createOpenSearchHostService = ({
  api
}) => new OpenSearchHostService(api);

/***/ }),

/***/ "./public/application/models/legacy_core_editor/create.ts":
/*!****************************************************************!*\
  !*** ./public/application/models/legacy_core_editor/create.ts ***!
  \****************************************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! brace */ "../../../node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _legacy_core_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy_core_editor */ "./public/application/models/legacy_core_editor/legacy_core_editor.ts");
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



const create = el => {
  const actions = document.querySelector('#ConAppEditorActions');
  if (!actions) {
    throw new Error('Could not find ConAppEditorActions element!');
  }
  const aceEditor = brace__WEBPACK_IMPORTED_MODULE_0___default.a.edit(el);
  return new _legacy_core_editor__WEBPACK_IMPORTED_MODULE_1__["LegacyCoreEditor"](aceEditor, actions);
};

/***/ }),

/***/ "./public/application/models/legacy_core_editor/create_readonly.ts":
/*!*************************************************************************!*\
  !*** ./public/application/models/legacy_core_editor/create_readonly.ts ***!
  \*************************************************************************/
/*! exports provided: createReadOnlyAceEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReadOnlyAceEditor", function() { return createReadOnlyAceEditor; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! brace */ "../../../node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mode_output__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mode/output */ "./public/application/models/legacy_core_editor/mode/output.js");
/* harmony import */ var _smart_resize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smart_resize */ "./public/application/models/legacy_core_editor/smart_resize.ts");
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
 * Note: using read-only ace editor leaks the Ace editor API - use this as sparingly as possible or
 * create an interface for it so that we don't rely directly on vendor APIs.
 */
function createReadOnlyAceEditor(element) {
  const output = brace__WEBPACK_IMPORTED_MODULE_1___default.a.acequire('ace/ace').edit(element);
  const outputMode = new _mode_output__WEBPACK_IMPORTED_MODULE_2__["Mode"]();
  output.$blockScrolling = Infinity;
  output.resize = Object(_smart_resize__WEBPACK_IMPORTED_MODULE_3__["default"])(output);
  output.update = (val, mode, cb) => {
    if (typeof mode === 'function') {
      cb = mode;
      mode = void 0;
    }
    const session = output.getSession();
    session.setMode(val ? mode || outputMode : 'ace/mode/text');
    session.setValue(val);
    if (typeof cb === 'function') {
      setTimeout(cb);
    }
  };
  output.append = (val, foldPrevious, cb) => {
    if (typeof foldPrevious === 'function') {
      cb = foldPrevious;
      foldPrevious = true;
    }
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isUndefined(foldPrevious)) {
      foldPrevious = true;
    }
    const session = output.getSession();
    const lastLine = session.getLength();
    if (foldPrevious) {
      output.moveCursorTo(Math.max(0, lastLine - 1), 0);
    }
    session.insert({
      row: lastLine,
      column: 0
    }, '\n' + val);
    output.moveCursorTo(lastLine + 1, 0);
    if (typeof cb === 'function') {
      setTimeout(cb);
    }
  };
  (function setupSession(session) {
    session.setMode('ace/mode/text');
    session.setFoldStyle('markbeginend');
    session.setTabSize(2);
    session.setUseWrapMode(true);
  })(output.getSession());
  output.setShowPrintMargin(false);
  output.setReadOnly(true);
  return output;
}

/***/ }),

/***/ "./public/application/models/legacy_core_editor/index.ts":
/*!***************************************************************!*\
  !*** ./public/application/models/legacy_core_editor/index.ts ***!
  \***************************************************************/
/*! exports provided: LegacyCoreEditor, createReadOnlyAceEditor, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! brace */ "../../../node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var brace_ext_language_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! brace/ext/language_tools */ "../../../node_modules/brace/ext/language_tools.js");
/* harmony import */ var brace_ext_language_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(brace_ext_language_tools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var brace_ext_searchbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! brace/ext/searchbox */ "../../../node_modules/brace/ext/searchbox.js");
/* harmony import */ var brace_ext_searchbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(brace_ext_searchbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brace_mode_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! brace/mode/json */ "../../../node_modules/brace/mode/json.js");
/* harmony import */ var brace_mode_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brace_mode_json__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var brace_mode_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! brace/mode/text */ "../../../node_modules/brace/mode/text.js");
/* harmony import */ var brace_mode_text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(brace_mode_text__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _legacy_core_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./legacy_core_editor */ "./public/application/models/legacy_core_editor/legacy_core_editor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LegacyCoreEditor", function() { return _legacy_core_editor__WEBPACK_IMPORTED_MODULE_5__["LegacyCoreEditor"]; });

/* harmony import */ var _create_readonly__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create_readonly */ "./public/application/models/legacy_core_editor/create_readonly.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReadOnlyAceEditor", function() { return _create_readonly__WEBPACK_IMPORTED_MODULE_6__["createReadOnlyAceEditor"]; });

/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create */ "./public/application/models/legacy_core_editor/create.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create__WEBPACK_IMPORTED_MODULE_7__["create"]; });

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

/***/ "./public/application/models/legacy_core_editor/legacy_core_editor.ts":
/*!****************************************************************************!*\
  !*** ./public/application/models/legacy_core_editor/legacy_core_editor.ts ***!
  \****************************************************************************/
/*! exports provided: LegacyCoreEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegacyCoreEditor", function() { return LegacyCoreEditor; });
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! brace */ "../../../node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_ace_token_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/ace_token_provider */ "./public/lib/ace_token_provider/index.ts");
/* harmony import */ var _sense_editor_curl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sense_editor/curl */ "./public/application/models/sense_editor/curl.ts");
/* harmony import */ var _smart_resize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smart_resize */ "./public/application/models/legacy_core_editor/smart_resize.ts");
/* harmony import */ var _mode_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mode/input */ "./public/application/models/legacy_core_editor/mode/input.js");
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

const _AceRange = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/range').Range;
const rangeToAceRange = ({
  start,
  end
}) => new _AceRange(start.lineNumber - 1, start.column - 1, end.lineNumber - 1, end.column - 1);
class LegacyCoreEditor {
  constructor(editor, actions) {
    this.editor = editor;
    _defineProperty(this, "_aceOnPaste", void 0);
    _defineProperty(this, "$actions", void 0);
    _defineProperty(this, "resize", void 0);
    _defineProperty(this, "setActionsBar", (value, topOrBottom = 'top') => {
      if (value === null) {
        this.$actions.css('visibility', 'hidden');
      } else {
        if (topOrBottom === 'top') {
          this.$actions.css({
            bottom: 'auto',
            top: value,
            visibility: 'visible'
          });
        } else {
          this.$actions.css({
            top: 'auto',
            bottom: value,
            visibility: 'visible'
          });
        }
      }
    });
    _defineProperty(this, "hideActionsBar", () => {
      this.setActionsBar();
    });
    this.$actions = jquery__WEBPACK_IMPORTED_MODULE_1___default()(actions);
    this.editor.setShowPrintMargin(false);
    const session = this.editor.getSession();
    session.setMode(new _mode_input__WEBPACK_IMPORTED_MODULE_5__["Mode"]());
    session.setFoldStyle('markbeginend');
    session.setTabSize(2);
    session.setUseWrapMode(true);
    this.resize = Object(_smart_resize__WEBPACK_IMPORTED_MODULE_4__["default"])(this.editor);

    // Intercept ace on paste handler.
    this._aceOnPaste = this.editor.onPaste;
    this.editor.onPaste = this.DO_NOT_USE_onPaste.bind(this);
    this.editor.setOptions({
      enableBasicAutocompletion: true
    });
    this.editor.$blockScrolling = Infinity;
    this.hideActionsBar();
    this.editor.focus();
  }

  // dirty check for tokenizer state, uses a lot less cycles
  // than listening for tokenizerUpdate
  waitForLatestTokens() {
    return new Promise(resolve => {
      const session = this.editor.getSession();
      const checkInterval = 25;
      const check = () => {
        // If the bgTokenizer doesn't exist, we can assume that the underlying editor has been
        // torn down, e.g. by closing the History tab, and we don't need to do anything further.
        if (session.bgTokenizer) {
          // Wait until the bgTokenizer is done running before executing the callback.
          if (session.bgTokenizer.running) {
            setTimeout(check, checkInterval);
          } else {
            resolve();
          }
        }
      };
      setTimeout(check, 0);
    });
  }
  getLineState(lineNumber) {
    const session = this.editor.getSession();
    return session.getState(lineNumber - 1);
  }
  getValueInRange(range) {
    return this.editor.getSession().getTextRange(rangeToAceRange(range));
  }
  getTokenProvider() {
    return new _lib_ace_token_provider__WEBPACK_IMPORTED_MODULE_2__["AceTokensProvider"](this.editor.getSession());
  }
  getValue() {
    return this.editor.getValue();
  }
  async setValue(text, forceRetokenize) {
    const session = this.editor.getSession();
    session.setValue(text);
    if (forceRetokenize) {
      await this.forceRetokenize();
    }
  }
  getLineValue(lineNumber) {
    const session = this.editor.getSession();
    return session.getLine(lineNumber - 1);
  }
  getCurrentPosition() {
    const cursorPosition = this.editor.getCursorPosition();
    return {
      lineNumber: cursorPosition.row + 1,
      column: cursorPosition.column + 1
    };
  }
  clearSelection() {
    this.editor.clearSelection();
  }
  getTokenAt(pos) {
    const provider = this.getTokenProvider();
    return provider.getTokenAt(pos);
  }
  insert(valueOrPos, value) {
    if (typeof valueOrPos === 'string') {
      this.editor.insert(valueOrPos);
      return;
    }
    const document = this.editor.getSession().getDocument();
    document.insert({
      column: valueOrPos.column - 1,
      row: valueOrPos.lineNumber - 1
    }, value || '');
  }
  moveCursorToPosition(pos) {
    this.editor.moveCursorToPosition({
      row: pos.lineNumber - 1,
      column: pos.column - 1
    });
  }
  replace(range, value) {
    const session = this.editor.getSession();
    session.replace(rangeToAceRange(range), value);
  }
  getLines(startLine, endLine) {
    const session = this.editor.getSession();
    return session.getLines(startLine - 1, endLine - 1);
  }
  replaceRange(range, value) {
    const pos = this.editor.getCursorPosition();
    this.editor.getSession().replace(rangeToAceRange(range), value);
    const maxRow = Math.max(range.start.lineNumber - 1 + value.split('\n').length - 1, 1);
    pos.row = Math.min(pos.row, maxRow);
    this.editor.moveCursorToPosition(pos);
    // ACE UPGRADE - check if needed - at the moment the above may trigger a selection.
    this.editor.clearSelection();
  }
  getSelectionRange() {
    const result = this.editor.getSelectionRange();
    return {
      start: {
        lineNumber: result.start.row + 1,
        column: result.start.column + 1
      },
      end: {
        lineNumber: result.end.row + 1,
        column: result.end.column + 1
      }
    };
  }
  getLineCount() {
    // Only use this function to return line count as it uses
    // a cache.
    return this.editor.getSession().getLength();
  }
  addMarker(range) {
    return this.editor.getSession().addMarker(rangeToAceRange(range), 'ace_snippet-marker', 'fullLine', false);
  }
  removeMarker(ref) {
    this.editor.getSession().removeMarker(ref);
  }
  getWrapLimit() {
    return this.editor.getSession().getWrapLimit();
  }
  on(event, listener) {
    if (event === 'changeCursor') {
      this.editor.getSession().selection.on(event, listener);
    } else if (event === 'changeSelection') {
      this.editor.on(event, listener);
    } else {
      this.editor.getSession().on(event, listener);
    }
  }
  off(event, listener) {
    if (event === 'changeSelection') {
      this.editor.off(event, listener);
    }
  }
  isCompleterActive() {
    // Secrets of the arcane here.
    return Boolean(this.editor.completer && this.editor.completer.activated);
  }
  forceRetokenize() {
    const session = this.editor.getSession();
    return new Promise(resolve => {
      // force update of tokens, but not on this thread to allow for ace rendering.
      setTimeout(function () {
        let i;
        for (i = 0; i < session.getLength(); i++) {
          session.getTokens(i);
        }
        resolve();
      });
    });
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  DO_NOT_USE_onPaste(text) {
    if (text && _sense_editor_curl__WEBPACK_IMPORTED_MODULE_3__["detectCURL"](text)) {
      const curlInput = _sense_editor_curl__WEBPACK_IMPORTED_MODULE_3__["parseCURL"](text);
      this.editor.insert(curlInput);
      return;
    }
    this._aceOnPaste.call(this.editor, text);
  }
  execCommand(cmd) {
    this.editor.execCommand(cmd);
  }
  getContainer() {
    return this.editor.container;
  }
  setStyles(styles) {
    this.editor.getSession().setUseWrapMode(styles.wrapLines);
    this.editor.container.style.fontSize = styles.fontSize;
  }
  registerKeyboardShortcut(opts) {
    this.editor.commands.addCommand({
      exec: opts.fn,
      name: opts.name,
      bindKey: opts.keys
    });
  }
  legacyUpdateUI(range) {
    if (!this.$actions) {
      return;
    }
    if (range) {
      // elements are positioned relative to the editor's container
      // pageY is relative to page, so subtract the offset
      // from pageY to get the new top value
      const offsetFromPage = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.editor.container).offset().top;
      const startLine = range.start.lineNumber;
      const startColumn = range.start.column;
      const firstLine = this.getLineValue(startLine);
      const maxLineLength = this.getWrapLimit() - 5;
      const isWrapping = firstLine.length > maxLineLength;
      const totalOffset = offsetFromPage - (window.pageYOffset || 0);
      const getScreenCoords = line => this.editor.renderer.textToScreenCoordinates(line - 1, startColumn).pageY - totalOffset;
      const topOfReq = getScreenCoords(startLine);
      if (topOfReq >= 0) {
        const {
          bottom: maxBottom
        } = this.editor.container.getBoundingClientRect();
        if (topOfReq > maxBottom - totalOffset) {
          this.setActionsBar(0, 'bottom');
          return;
        }
        let offset = 0;
        if (isWrapping) {
          // Try get the line height of the text area in pixels.
          const textArea = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.editor.container.querySelector('textArea'));
          const hasRoomOnNextLine = this.getLineValue(startLine).length < maxLineLength;
          if (textArea && hasRoomOnNextLine) {
            // Line height + the number of wraps we have on a line.
            offset += this.getLineValue(startLine).length * textArea.height();
          } else {
            if (startLine > 1) {
              this.setActionsBar(getScreenCoords(startLine - 1));
              return;
            }
            this.setActionsBar(getScreenCoords(startLine + 1));
            return;
          }
        }
        this.setActionsBar(topOfReq + offset);
        return;
      }
      const bottomOfReq = this.editor.renderer.textToScreenCoordinates(range.end.lineNumber, range.end.column).pageY - offsetFromPage;
      if (bottomOfReq >= 0) {
        this.setActionsBar(0);
        return;
      }
    }
  }
  registerAutocompleter(autocompleter) {
    // Hook into Ace

    // disable standard context based autocompletion.
    // @ts-ignore
    brace__WEBPACK_IMPORTED_MODULE_0___default.a.define('ace/autocomplete/text_completer', ['require', 'exports', 'module'], function (require, exports) {
      exports.getCompletions = function (innerEditor, session, pos, prefix, callback) {
        callback(null, []);
      };
    });
    const langTools = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/ext/language_tools');
    langTools.setCompleters([{
      identifierRegexps: [/[a-zA-Z_0-9\.\$\-\u00A2-\uFFFF]/ // adds support for dot character
      ],

      getCompletions: (DO_NOT_USE_1, DO_NOT_USE_2, pos, prefix, callback) => {
        const position = {
          lineNumber: pos.row + 1,
          column: pos.column + 1
        };
        autocompleter(position, prefix, callback);
      }
    }]);
  }
  destroy() {
    this.editor.destroy();
  }
}

/***/ }),

/***/ "./public/application/models/legacy_core_editor/mode/input.js":
/*!********************************************************************!*\
  !*** ./public/application/models/legacy_core_editor/mode/input.js ***!
  \********************************************************************/
/*! exports provided: Mode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mode", function() { return Mode; });
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! brace */ "../../../node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worker */ "./public/application/models/legacy_core_editor/mode/worker/index.js");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script */ "./public/application/models/legacy_core_editor/mode/script.js");
/* harmony import */ var _input_highlight_rules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input_highlight_rules */ "./public/application/models/legacy_core_editor/mode/input_highlight_rules.js");
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




const oop = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/lib/oop');
const TextMode = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/text').Mode;
const MatchingBraceOutdent = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/matching_brace_outdent').MatchingBraceOutdent;
const CstyleBehaviour = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/behaviour/cstyle').CstyleBehaviour;
const CStyleFoldMode = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/folding/cstyle').FoldMode;
const WorkerClient = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/worker/worker_client').WorkerClient;
const AceTokenizer = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/tokenizer').Tokenizer;

function Mode() {
  this.$tokenizer = new AceTokenizer(new _input_highlight_rules__WEBPACK_IMPORTED_MODULE_3__["InputHighlightRules"]().getRules());
  this.$outdent = new MatchingBraceOutdent();
  this.$behaviour = new CstyleBehaviour();
  this.foldingRules = new CStyleFoldMode();
  this.createModeDelegates({
    'script-': _script__WEBPACK_IMPORTED_MODULE_2__["ScriptMode"]
  });
}
oop.inherits(Mode, TextMode);
(function () {
  this.getCompletions = function () {
    // autocomplete is done by the autocomplete module.
    return [];
  };
  this.getNextLineIndent = function (state, line, tab) {
    let indent = this.$getIndent(line);
    if (state !== 'string_literal') {
      const match = line.match(/^.*[\{\(\[]\s*$/);
      if (match) {
        indent += tab;
      }
    }
    return indent;
  };
  this.checkOutdent = function (state, line, input) {
    return this.$outdent.checkOutdent(line, input);
  };
  this.autoOutdent = function (state, doc, row) {
    this.$outdent.autoOutdent(doc, row);
  };
  this.createWorker = function (session) {
    const worker = new WorkerClient(['ace', 'sense_editor'], _worker__WEBPACK_IMPORTED_MODULE_1__["workerModule"], 'SenseWorker');
    worker.attachToDocument(session.getDocument());
    worker.on('error', function (e) {
      session.setAnnotations([e.data]);
    });
    worker.on('ok', function (anno) {
      session.setAnnotations(anno.data);
    });
    return worker;
  };
}).call(Mode.prototype);

/***/ }),

/***/ "./public/application/models/legacy_core_editor/mode/input_highlight_rules.js":
/*!************************************************************************************!*\
  !*** ./public/application/models/legacy_core_editor/mode/input_highlight_rules.js ***!
  \************************************************************************************/
/*! exports provided: addEOL, mergeTokens, InputHighlightRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEOL", function() { return addEOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeTokens", function() { return mergeTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputHighlightRules", function() { return InputHighlightRules; });
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! brace */ "../../../node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_ace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/ace */ "../../../packages/osd-ace/target/web/index.js");
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



function addEOL(tokens, reg, nextIfEOL, normalNext) {
  if (typeof reg === 'object') {
    reg = reg.source;
  }
  return [{
    token: tokens.concat(['whitespace']),
    regex: reg + '(\\s*)$',
    next: nextIfEOL
  }, {
    token: tokens,
    regex: reg,
    next: normalNext
  }];
}
function mergeTokens( /* ... */
) {
  return [].concat.apply([], arguments);
}
const oop = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/lib/oop');
const {
  TextHighlightRules
} = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/text_highlight_rules');
function InputHighlightRules() {
  // regexp must not have capturing parentheses. Use (?:) instead.
  // regexps are ordered -> the first match is used
  /*jshint -W015 */
  this.$rules = {
    'start-sql': [{
      token: 'whitespace',
      regex: '\\s+'
    }, {
      token: 'paren.lparen',
      regex: '{',
      next: 'json-sql',
      push: true
    }, {
      regex: '',
      next: 'start'
    }],
    start: mergeTokens([{
      token: 'warning',
      regex: '#!.*$'
    }, {
      token: 'comment',
      regex: /^#.*$/
    }, {
      token: 'paren.lparen',
      regex: '{',
      next: 'json',
      push: true
    }], addEOL(['method'], /([a-zA-Z]+)/, 'start', 'method_sep'), [{
      token: 'whitespace',
      regex: '\\s+'
    }, {
      token: 'text',
      regex: '.+?'
    }]),
    method_sep: mergeTokens(addEOL(['whitespace', 'url.protocol_host', 'url.slash'], /(\s+)(https?:\/\/[^?\/,]+)(\/)/, 'start', 'url'), addEOL(['whitespace', 'url.protocol_host'], /(\s+)(https?:\/\/[^?\/,]+)/, 'start', 'url'), addEOL(['whitespace', 'url.slash'], /(\s+)(\/)/, 'start', 'url'), addEOL(['whitespace'], /(\s+)/, 'start', 'url')),
    url: mergeTokens(addEOL(['url.part'], /(_sql)/, 'start-sql', 'url-sql'), addEOL(['url.part'], /([^?\/,\s]+)/, 'start'), addEOL(['url.comma'], /(,)/, 'start'), addEOL(['url.slash'], /(\/)/, 'start'), addEOL(['url.questionmark'], /(\?)/, 'start', 'urlParams')),
    urlParams: mergeTokens(addEOL(['url.param', 'url.equal', 'url.value'], /([^&=]+)(=)([^&]*)/, 'start'), addEOL(['url.param'], /([^&=]+)/, 'start'), addEOL(['url.amp'], /(&)/, 'start')),
    'url-sql': mergeTokens(addEOL(['url.part'], /([^?\/,\s]+)/, 'start-sql'), addEOL(['url.comma'], /(,)/, 'start-sql'), addEOL(['url.slash'], /(\/)/, 'start-sql'), addEOL(['url.questionmark'], /(\?)/, 'start-sql', 'urlParams-sql')),
    'urlParams-sql': mergeTokens(addEOL(['url.param', 'url.equal', 'url.value'], /([^&=]+)(=)([^&]*)/, 'start-sql'), addEOL(['url.param'], /([^&=]+)/, 'start-sql'), addEOL(['url.amp'], /(&)/, 'start-sql'))
  };
  Object(_osd_ace__WEBPACK_IMPORTED_MODULE_1__["addXJsonToRules"])(this);
  if (this.constructor === InputHighlightRules) {
    this.normalizeRules();
  }
}
oop.inherits(InputHighlightRules, TextHighlightRules);

/***/ }),

/***/ "./public/application/models/legacy_core_editor/mode/output.js":
/*!*********************************************************************!*\
  !*** ./public/application/models/legacy_core_editor/mode/output.js ***!
  \*********************************************************************/
/*! exports provided: Mode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mode", function() { return Mode; });
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! brace */ "../../../node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _output_highlight_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./output_highlight_rules */ "./public/application/models/legacy_core_editor/mode/output_highlight_rules.js");
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



const oop = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/lib/oop');
const JSONMode = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/json').Mode;
const MatchingBraceOutdent = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/matching_brace_outdent').MatchingBraceOutdent;
const CstyleBehaviour = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/behaviour/cstyle').CstyleBehaviour;
const CStyleFoldMode = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/folding/cstyle').FoldMode;
brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/worker/worker_client');
const AceTokenizer = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/tokenizer').Tokenizer;
function Mode() {
  this.$tokenizer = new AceTokenizer(new _output_highlight_rules__WEBPACK_IMPORTED_MODULE_1__["OutputJsonHighlightRules"]().getRules());
  this.$outdent = new MatchingBraceOutdent();
  this.$behaviour = new CstyleBehaviour();
  this.foldingRules = new CStyleFoldMode();
}
oop.inherits(Mode, JSONMode);
(function () {
  this.createWorker = function () {
    return null;
  };
  this.$id = 'sense/mode/input';
}).call(Mode.prototype);

/***/ }),

/***/ "./public/application/models/legacy_core_editor/mode/output_highlight_rules.js":
/*!*************************************************************************************!*\
  !*** ./public/application/models/legacy_core_editor/mode/output_highlight_rules.js ***!
  \*************************************************************************************/
/*! exports provided: OutputJsonHighlightRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputJsonHighlightRules", function() { return OutputJsonHighlightRules; });
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! brace */ "../../../node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var brace_mode_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! brace/mode/json */ "../../../node_modules/brace/mode/json.js");
/* harmony import */ var brace_mode_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(brace_mode_json__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_ace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osd/ace */ "../../../packages/osd-ace/target/web/index.js");
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




const oop = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/lib/oop');
const JsonHighlightRules = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/json_highlight_rules').JsonHighlightRules;
function OutputJsonHighlightRules() {
  this.$rules = {};
  Object(_osd_ace__WEBPACK_IMPORTED_MODULE_2__["addXJsonToRules"])(this, 'start');
  this.$rules.start.unshift({
    token: 'warning',
    regex: '#!.*$'
  }, {
    token: 'comment',
    regex: '#.*$'
  });
  if (this.constructor === OutputJsonHighlightRules) {
    this.normalizeRules();
  }
}
oop.inherits(OutputJsonHighlightRules, JsonHighlightRules);

/***/ }),

/***/ "./public/application/models/legacy_core_editor/mode/script.js":
/*!*********************************************************************!*\
  !*** ./public/application/models/legacy_core_editor/mode/script.js ***!
  \*********************************************************************/
/*! exports provided: ScriptMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptMode", function() { return ScriptMode; });
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! brace */ "../../../node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_ace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/ace */ "../../../packages/osd-ace/target/web/index.js");
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



const oop = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/lib/oop');
const TextMode = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/text').Mode;
const MatchingBraceOutdent = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/matching_brace_outdent').MatchingBraceOutdent;
const CstyleBehaviour = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/behaviour/cstyle').CstyleBehaviour;
const CStyleFoldMode = brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/mode/folding/cstyle').FoldMode;
brace__WEBPACK_IMPORTED_MODULE_0___default.a.acequire('ace/tokenizer');
function ScriptMode() {
  this.$outdent = new MatchingBraceOutdent();
  this.$behaviour = new CstyleBehaviour();
  this.foldingRules = new CStyleFoldMode();
}
oop.inherits(ScriptMode, TextMode);
(function () {
  this.HighlightRules = _osd_ace__WEBPACK_IMPORTED_MODULE_1__["ScriptHighlightRules"];
  this.getNextLineIndent = function (state, line, tab) {
    let indent = this.$getIndent(line);
    const match = line.match(/^.*[\{\[]\s*$/);
    if (match) {
      indent += tab;
    }
    return indent;
  };
  this.checkOutdent = function (state, line, input) {
    return this.$outdent.checkOutdent(line, input);
  };
  this.autoOutdent = function (state, doc, row) {
    this.$outdent.autoOutdent(doc, row);
  };
}).call(ScriptMode.prototype);

/***/ }),

/***/ "./public/application/models/legacy_core_editor/mode/worker/index.js":
/*!***************************************************************************!*\
  !*** ./public/application/models/legacy_core_editor/mode/worker/index.js ***!
  \***************************************************************************/
/*! exports provided: workerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workerModule", function() { return workerModule; });
/* harmony import */ var _raw_loader_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./worker.js */ "../../../node_modules/raw-loader/dist/cjs.js!./public/application/models/legacy_core_editor/mode/worker/worker.js");
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


const workerModule = {
  id: 'sense_editor/mode/worker',
  src: _raw_loader_worker_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./public/application/models/legacy_core_editor/smart_resize.ts":
/*!**********************************************************************!*\
  !*** ./public/application/models/legacy_core_editor/smart_resize.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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



// eslint-disable-next-line import/no-default-export
/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  const resize = editor.resize;
  const throttledResize = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["throttle"])(() => {
    resize.call(editor, false);

    // Keep current top line in view when resizing to avoid losing user context
    const userRow = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(throttledResize, 'topRow', 0);
    if (userRow !== 0) {
      editor.renderer.scrollToLine(userRow, false, false, () => {});
    }
  }, 35);
  return throttledResize;
});

/***/ }),

/***/ "./public/application/models/sense_editor/create.ts":
/*!**********************************************************!*\
  !*** ./public/application/models/sense_editor/create.ts ***!
  \**********************************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _sense_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sense_editor */ "./public/application/models/sense_editor/sense_editor.ts");
/* harmony import */ var _legacy_core_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../legacy_core_editor */ "./public/application/models/legacy_core_editor/index.ts");
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



function create(element) {
  const coreEditor = _legacy_core_editor__WEBPACK_IMPORTED_MODULE_1__["create"](element);
  const senseEditor = new _sense_editor__WEBPACK_IMPORTED_MODULE_0__["SenseEditor"](coreEditor);

  /**
   * Init the editor
   */
  senseEditor.highlightCurrentRequestsAndUpdateActionBar();
  return senseEditor;
}

/***/ }),

/***/ "./public/application/models/sense_editor/curl.ts":
/*!********************************************************!*\
  !*** ./public/application/models/sense_editor/curl.ts ***!
  \********************************************************/
/*! exports provided: detectCURL, parseCURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectCURL", function() { return detectCURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCURL", function() { return parseCURL; });
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

function detectCURLinLine(line) {
  // returns true if text matches a curl request
  return line.match(/^\s*?curl\s+(-X[A-Z]+)?\s*['"]?.*?['"]?(\s*$|\s+?-d\s*?['"])/);
}
function detectCURL(text) {
  // returns true if text matches a curl request
  if (!text) return false;
  for (const line of text.split('\n')) {
    if (detectCURLinLine(line)) {
      return true;
    }
  }
  return false;
}
function parseCURL(text) {
  let state = 'NONE';
  const out = [];
  let body = [];
  let line = '';
  const lines = text.trim().split('\n');
  let matches;
  const EmptyLine = /^\s*$/;
  const Comment = /^\s*(?:#|\/{2,})(.*)\n?$/;
  const ExecutionComment = /^\s*#!/;
  const ClosingSingleQuote = /^([^']*)'/;
  const ClosingDoubleQuote = /^((?:[^\\"]|\\.)*)"/;
  const EscapedQuotes = /^((?:[^\\"']|\\.)+)/;
  const LooksLikeCurl = /^\s*curl\s+/;
  const CurlVerb = /-X ?(GET|HEAD|POST|PUT|DELETE)/;
  const HasProtocol = /[\s"']https?:\/\//;
  const CurlRequestWithProto = /[\s"']https?:\/\/[^\/ ]+\/+([^\s"']+)/;
  const CurlRequestWithoutProto = /[\s"'][^\/ ]+\/+([^\s"']+)/;
  const CurlData = /^.+\s(--data|-d)\s*/;
  const SenseLine = /^\s*(GET|HEAD|POST|PUT|DELETE)\s+\/?(.+)/;
  if (lines.length > 0 && ExecutionComment.test(lines[0])) {
    lines.shift();
  }
  function nextLine() {
    if (line.length > 0) {
      return true;
    }
    if (lines.length === 0) {
      return false;
    }
    line = lines.shift().replace(/[\r\n]+/g, '\n') + '\n';
    return true;
  }
  function unescapeLastBodyEl() {
    const str = body.pop().replace(/\\([\\"'])/g, '$1');
    body.push(str);
  }

  // Is the next char a single or double quote?
  // If so remove it
  function detectQuote() {
    if (line.substr(0, 1) === "'") {
      line = line.substr(1);
      state = 'SINGLE_QUOTE';
    } else if (line.substr(0, 1) === '"') {
      line = line.substr(1);
      state = 'DOUBLE_QUOTE';
    } else {
      state = 'UNQUOTED';
    }
  }

  // Body is finished - append to output with final LF
  function addBodyToOut() {
    if (body.length > 0) {
      out.push(body.join(''));
      body = [];
    }
    state = 'LF';
    out.push('\n');
  }

  // If the pattern matches, then the state is about to change,
  // so add the capture to the body and detect the next state
  // Otherwise add the whole line
  function consumeMatching(pattern) {
    const result = line.match(pattern);
    if (result) {
      body.push(result[1]);
      line = line.substr(result[0].length);
      detectQuote();
    } else {
      body.push(line);
      line = '';
    }
  }
  function parseCurlLine() {
    let verb = 'GET';
    let request = '';
    let result;
    if (result = line.match(CurlVerb)) {
      verb = result[1];
    }

    // JS regexen don't support possessive quantifiers, so
    // we need two distinct patterns
    const pattern = HasProtocol.test(line) ? CurlRequestWithProto : CurlRequestWithoutProto;
    if (result = line.match(pattern)) {
      request = result[1];
    }
    out.push(verb + ' /' + request + '\n');
    if (result = line.match(CurlData)) {
      line = line.substr(result[0].length);
      detectQuote();
      if (EmptyLine.test(line)) {
        line = '';
      }
    } else {
      state = 'NONE';
      line = '';
      out.push('');
    }
  }
  while (nextLine()) {
    if (state === 'SINGLE_QUOTE') {
      consumeMatching(ClosingSingleQuote);
    } else if (state === 'DOUBLE_QUOTE') {
      consumeMatching(ClosingDoubleQuote);
      unescapeLastBodyEl();
    } else if (state === 'UNQUOTED') {
      consumeMatching(EscapedQuotes);
      if (body.length) {
        unescapeLastBodyEl();
      }
      if (state === 'UNQUOTED') {
        addBodyToOut();
        line = '';
      }
    }

    // the BODY state (used to match the body of a Sense request)
    // can be terminated early if it encounters
    // a comment or an empty line
    else if (state === 'BODY') {
      if (Comment.test(line) || EmptyLine.test(line)) {
        addBodyToOut();
      } else {
        body.push(line);
        line = '';
      }
    } else if (EmptyLine.test(line)) {
      if (state !== 'LF') {
        out.push('\n');
        state = 'LF';
      }
      line = '';
    } else if (matches = line.match(Comment)) {
      out.push('#' + matches[1] + '\n');
      state = 'NONE';
      line = '';
    } else if (LooksLikeCurl.test(line)) {
      parseCurlLine();
    } else if (matches = line.match(SenseLine)) {
      out.push(matches[1] + ' /' + matches[2] + '\n');
      line = '';
      state = 'BODY';
    }

    // Nothing else matches, so output with a prefix of ### for debugging purposes
    else {
      out.push('### ' + line);
      line = '';
    }
  }
  addBodyToOut();
  return out.join('').trim();
}

/***/ }),

/***/ "./public/application/models/sense_editor/index.ts":
/*!*********************************************************!*\
  !*** ./public/application/models/sense_editor/index.ts ***!
  \*********************************************************/
/*! exports provided: create, createReadOnlyAceEditor, MODE, SenseEditor, getEndpointFromPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./public/application/models/sense_editor/create.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create__WEBPACK_IMPORTED_MODULE_0__["create"]; });

/* harmony import */ var _legacy_core_editor_create_readonly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../legacy_core_editor/create_readonly */ "./public/application/models/legacy_core_editor/create_readonly.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReadOnlyAceEditor", function() { return _legacy_core_editor_create_readonly__WEBPACK_IMPORTED_MODULE_1__["createReadOnlyAceEditor"]; });

/* harmony import */ var _lib_row_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/row_parser */ "./public/lib/row_parser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MODE", function() { return _lib_row_parser__WEBPACK_IMPORTED_MODULE_2__["MODE"]; });

/* harmony import */ var _sense_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sense_editor */ "./public/application/models/sense_editor/sense_editor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SenseEditor", function() { return _sense_editor__WEBPACK_IMPORTED_MODULE_3__["SenseEditor"]; });

/* harmony import */ var _lib_autocomplete_get_endpoint_from_position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/autocomplete/get_endpoint_from_position */ "./public/lib/autocomplete/get_endpoint_from_position.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEndpointFromPosition", function() { return _lib_autocomplete_get_endpoint_from_position__WEBPACK_IMPORTED_MODULE_4__["getEndpointFromPosition"]; });

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

/***/ "./public/application/models/sense_editor/sense_editor.ts":
/*!****************************************************************!*\
  !*** ./public/application/models/sense_editor/sense_editor.ts ***!
  \****************************************************************/
/*! exports provided: SenseEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenseEditor", function() { return SenseEditor; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_row_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/row_parser */ "./public/lib/row_parser.ts");
/* harmony import */ var _opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../opensearch_ui_shared/public */ "plugin/opensearchUiShared/public");
/* harmony import */ var _opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/utils */ "./public/lib/utils/index.ts");
/* harmony import */ var _lib_opensearch_opensearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/opensearch/opensearch */ "./public/lib/opensearch/opensearch.ts");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../factories */ "./public/application/factories/index.ts");
/* harmony import */ var _lib_autocomplete_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/autocomplete/autocomplete */ "./public/lib/autocomplete/autocomplete.ts");
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



const {
  collapseLiteralStrings
} = _opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_2__["XJson"];
class SenseEditor {
  constructor(coreEditor) {
    this.coreEditor = coreEditor;
    _defineProperty(this, "currentReqRange", void 0);
    _defineProperty(this, "parser", void 0);
    // @ts-ignore
    _defineProperty(this, "autocomplete", void 0);
    _defineProperty(this, "prevRequestStart", rowOrPos => {
      let curRow;
      if (rowOrPos == null) {
        curRow = this.coreEditor.getCurrentPosition().lineNumber;
      } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(rowOrPos)) {
        curRow = rowOrPos.lineNumber;
      } else {
        curRow = rowOrPos;
      }
      while (curRow > 0 && !this.parser.isStartRequestRow(curRow, this.coreEditor)) curRow--;
      return {
        lineNumber: curRow,
        column: 1
      };
    });
    _defineProperty(this, "nextRequestStart", rowOrPos => {
      let curRow;
      if (rowOrPos == null) {
        curRow = this.coreEditor.getCurrentPosition().lineNumber;
      } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(rowOrPos)) {
        curRow = rowOrPos.lineNumber;
      } else {
        curRow = rowOrPos;
      }
      const maxLines = this.coreEditor.getLineCount();
      for (; curRow < maxLines - 1; curRow++) {
        if (this.parser.isStartRequestRow(curRow, this.coreEditor)) {
          break;
        }
      }
      return {
        row: curRow,
        column: 0
      };
    });
    _defineProperty(this, "autoIndent", lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(async () => {
      await this.coreEditor.waitForLatestTokens();
      const reqRange = await this.getRequestRange();
      if (!reqRange) {
        return;
      }
      const parsedReq = await this.getRequest();
      if (!parsedReq) {
        return;
      }
      if (parsedReq.data && parsedReq.data.length > 0) {
        let indent = parsedReq.data.length === 1; // unindent multi docs by default
        let formattedData = _lib_utils__WEBPACK_IMPORTED_MODULE_3__["formatRequestBodyDoc"](parsedReq.data, indent);
        if (!formattedData.changed) {
          // toggle.
          indent = !indent;
          formattedData = _lib_utils__WEBPACK_IMPORTED_MODULE_3__["formatRequestBodyDoc"](parsedReq.data, indent);
        }
        parsedReq.data = formattedData.data;
        this.replaceRequestRange(parsedReq, reqRange);
      }
    }, 25));
    _defineProperty(this, "update", async (data, reTokenizeAll = false) => {
      return this.coreEditor.setValue(data, reTokenizeAll);
    });
    _defineProperty(this, "replaceRequestRange", (newRequest, requestRange) => {
      const text = _lib_utils__WEBPACK_IMPORTED_MODULE_3__["textFromRequest"](newRequest);
      if (requestRange) {
        this.coreEditor.replaceRange(requestRange, text);
      } else {
        // just insert where we are
        this.coreEditor.insert(this.coreEditor.getCurrentPosition(), text);
      }
    });
    _defineProperty(this, "getRequestRange", async lineNumber => {
      await this.coreEditor.waitForLatestTokens();
      if (this.parser.isInBetweenRequestsRow(lineNumber)) {
        return null;
      }
      const reqStart = this.prevRequestStart(lineNumber);
      const reqEnd = this.nextRequestEnd(reqStart);
      return {
        start: {
          ...reqStart
        },
        end: {
          ...reqEnd
        }
      };
    });
    _defineProperty(this, "expandRangeToRequestEdges", async (range = this.coreEditor.getSelectionRange()) => {
      await this.coreEditor.waitForLatestTokens();
      let startLineNumber = range.start.lineNumber;
      let endLineNumber = range.end.lineNumber;
      const maxLine = Math.max(1, this.coreEditor.getLineCount());
      if (this.parser.isInBetweenRequestsRow(startLineNumber)) {
        /* Do nothing... */
      } else {
        for (; startLineNumber >= 1; startLineNumber--) {
          if (this.parser.isStartRequestRow(startLineNumber)) {
            break;
          }
        }
      }
      if (startLineNumber < 1 || startLineNumber > endLineNumber) {
        return null;
      }
      // move end row to the previous request end if between requests, otherwise walk forward
      if (this.parser.isInBetweenRequestsRow(endLineNumber)) {
        for (; endLineNumber >= startLineNumber; endLineNumber--) {
          if (this.parser.isEndRequestRow(endLineNumber)) {
            break;
          }
        }
      } else {
        for (; endLineNumber <= maxLine; endLineNumber++) {
          if (this.parser.isEndRequestRow(endLineNumber)) {
            break;
          }
        }
      }
      if (endLineNumber < startLineNumber || endLineNumber > maxLine) {
        return null;
      }
      const endColumn = (this.coreEditor.getLineValue(endLineNumber) || '').replace(/\s+$/, '').length + 1;
      return {
        start: {
          lineNumber: startLineNumber,
          column: 1
        },
        end: {
          lineNumber: endLineNumber,
          column: endColumn
        }
      };
    });
    _defineProperty(this, "getRequestInRange", async range => {
      await this.coreEditor.waitForLatestTokens();
      if (!range) {
        return null;
      }
      const request = {
        method: '',
        data: [],
        url: null,
        range
      };
      const pos = range.start;
      const tokenIter = Object(_factories__WEBPACK_IMPORTED_MODULE_5__["createTokenIterator"])({
        editor: this.coreEditor,
        position: pos
      });
      let t = tokenIter.getCurrentToken();
      if (this.parser.isEmptyToken(t)) {
        // if the row starts with some spaces, skip them.
        t = this.parser.nextNonEmptyToken(tokenIter);
      }
      if (t == null) {
        return null;
      }
      request.method = t.value;
      t = this.parser.nextNonEmptyToken(tokenIter);
      if (!t || t.type === 'method') {
        return null;
      }
      request.url = '';
      while (t && t.type && t.type.indexOf('url') === 0) {
        request.url += t.value;
        t = tokenIter.stepForward();
      }
      if (this.parser.isEmptyToken(t)) {
        // if the url row ends with some spaces, skip them.
        t = this.parser.nextNonEmptyToken(tokenIter);
      }
      let bodyStartLineNumber = (t ? 0 : 1) + tokenIter.getCurrentPosition().lineNumber; // artificially increase end of docs.
      let dataEndPos;
      while (bodyStartLineNumber < range.end.lineNumber || bodyStartLineNumber === range.end.lineNumber && 1 < range.end.column) {
        dataEndPos = this.nextDataDocEnd({
          lineNumber: bodyStartLineNumber,
          column: 1
        });
        const bodyRange = {
          start: {
            lineNumber: bodyStartLineNumber,
            column: 1
          },
          end: dataEndPos
        };
        const data = this.coreEditor.getValueInRange(bodyRange);
        request.data.push(data.trim());
        bodyStartLineNumber = dataEndPos.lineNumber + 1;
      }
      return request;
    });
    _defineProperty(this, "getRequestsInRange", async (range = this.coreEditor.getSelectionRange(), includeNonRequestBlocks = false) => {
      await this.coreEditor.waitForLatestTokens();
      if (!range) {
        return [];
      }
      const expandedRange = await this.expandRangeToRequestEdges(range);
      if (!expandedRange) {
        return [];
      }
      const requests = [];
      let rangeStartCursor = expandedRange.start.lineNumber;
      const endLineNumber = expandedRange.end.lineNumber;

      // move to the next request start (during the second iterations this may not be exactly on a request
      let currentLineNumber = expandedRange.start.lineNumber;
      const flushNonRequestBlock = () => {
        if (includeNonRequestBlocks) {
          const nonRequestPrefixBlock = this.coreEditor.getLines(rangeStartCursor, currentLineNumber - 1).join('\n');
          if (nonRequestPrefixBlock) {
            requests.push(nonRequestPrefixBlock);
          }
        }
      };
      while (currentLineNumber <= endLineNumber) {
        if (this.parser.isStartRequestRow(currentLineNumber)) {
          flushNonRequestBlock();
          const request = await this.getRequest(currentLineNumber);
          if (!request) {
            // Something has probably gone wrong.
            return requests;
          } else {
            requests.push(request);
            rangeStartCursor = currentLineNumber = request.range.end.lineNumber + 1;
          }
        } else {
          ++currentLineNumber;
        }
      }
      flushNonRequestBlock();
      return requests;
    });
    _defineProperty(this, "getRequest", async row => {
      await this.coreEditor.waitForLatestTokens();
      if (this.parser.isInBetweenRequestsRow(row)) {
        return null;
      }
      const range = await this.getRequestRange(row);
      return this.getRequestInRange(range);
    });
    _defineProperty(this, "moveToPreviousRequestEdge", async () => {
      await this.coreEditor.waitForLatestTokens();
      const pos = this.coreEditor.getCurrentPosition();
      for (pos.lineNumber--; pos.lineNumber > 1 && !this.parser.isRequestEdge(pos.lineNumber); pos.lineNumber--) {
        // loop for side effects
      }
      this.coreEditor.moveCursorToPosition({
        lineNumber: pos.lineNumber,
        column: 1
      });
    });
    _defineProperty(this, "moveToNextRequestEdge", async moveOnlyIfNotOnEdge => {
      await this.coreEditor.waitForLatestTokens();
      const pos = this.coreEditor.getCurrentPosition();
      const maxRow = this.coreEditor.getLineCount();
      if (!moveOnlyIfNotOnEdge) {
        pos.lineNumber++;
      }
      for (; pos.lineNumber < maxRow && !this.parser.isRequestEdge(pos.lineNumber); pos.lineNumber++) {
        // loop for side effects
      }
      this.coreEditor.moveCursorToPosition({
        lineNumber: pos.lineNumber,
        column: 1
      });
    });
    _defineProperty(this, "nextRequestEnd", pos => {
      pos = pos || this.coreEditor.getCurrentPosition();
      const maxLines = this.coreEditor.getLineCount();
      let curLineNumber = pos.lineNumber;
      for (; curLineNumber <= maxLines; ++curLineNumber) {
        const curRowMode = this.parser.getRowParseMode(curLineNumber);
        // eslint-disable-next-line no-bitwise
        if ((curRowMode & this.parser.MODE.REQUEST_END) > 0) {
          break;
        }
        // eslint-disable-next-line no-bitwise
        if (curLineNumber !== pos.lineNumber && (curRowMode & this.parser.MODE.REQUEST_START) > 0) {
          break;
        }
      }
      const column = (this.coreEditor.getLineValue(curLineNumber) || '').replace(/\s+$/, '').length + 1;
      return {
        lineNumber: curLineNumber,
        column
      };
    });
    _defineProperty(this, "nextDataDocEnd", pos => {
      pos = pos || this.coreEditor.getCurrentPosition();
      let curLineNumber = pos.lineNumber;
      const maxLines = this.coreEditor.getLineCount();
      for (; curLineNumber < maxLines; curLineNumber++) {
        const curRowMode = this.parser.getRowParseMode(curLineNumber);
        // eslint-disable-next-line no-bitwise
        if ((curRowMode & this.parser.MODE.REQUEST_END) > 0) {
          break;
        }
        // eslint-disable-next-line no-bitwise
        if ((curRowMode & this.parser.MODE.MULTI_DOC_CUR_DOC_END) > 0) {
          break;
        }
        // eslint-disable-next-line no-bitwise
        if (curLineNumber !== pos.lineNumber && (curRowMode & this.parser.MODE.REQUEST_START) > 0) {
          break;
        }
      }
      const column = (this.coreEditor.getLineValue(curLineNumber) || '').length + 1; /* Range goes to 1 after last char */

      return {
        lineNumber: curLineNumber,
        column
      };
    });
    _defineProperty(this, "highlightCurrentRequestsAndUpdateActionBar", lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(async () => {
      await this.coreEditor.waitForLatestTokens();
      const expandedRange = await this.expandRangeToRequestEdges();
      if (expandedRange === null && this.currentReqRange === null) {
        return;
      }
      if (expandedRange !== null && this.currentReqRange !== null && expandedRange.start.lineNumber === this.currentReqRange.start.lineNumber && expandedRange.end.lineNumber === this.currentReqRange.end.lineNumber) {
        // same request, now see if we are on the first line and update the action bar
        const cursorLineNumber = this.coreEditor.getCurrentPosition().lineNumber;
        if (cursorLineNumber === this.currentReqRange.start.lineNumber) {
          this.updateActionsBar();
        }
        return; // nothing to do..
      }

      if (this.currentReqRange) {
        this.coreEditor.removeMarker(this.currentReqRange.markerRef);
      }
      this.currentReqRange = expandedRange;
      if (this.currentReqRange) {
        this.currentReqRange.markerRef = this.coreEditor.addMarker(this.currentReqRange);
      }
      this.updateActionsBar();
    }, 25));
    _defineProperty(this, "getRequestsAsCURL", async (opensearchBaseUrl, range) => {
      const requests = await this.getRequestsInRange(range, true);
      const result = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(requests, req => {
        if (typeof req === 'string') {
          // no request block
          return req;
        }
        const opensearchPath = req.url;
        const opensearchMethod = req.method;
        const opensearchData = req.data;

        // this is the first url defined in opensearch.hosts
        const url = _lib_opensearch_opensearch__WEBPACK_IMPORTED_MODULE_4__["constructOpenSearchUrl"](opensearchBaseUrl, opensearchPath);
        let ret = 'curl -X' + opensearchMethod + ' "' + url + '"';
        if (opensearchData && opensearchData.length) {
          ret += " -H 'Content-Type: application/json' -d'\n";
          const dataAsString = collapseLiteralStrings(opensearchData.join('\n'));

          // We escape single quoted strings that that are wrapped in single quoted strings
          ret += dataAsString.replace(/'/g, "'\\''");
          if (opensearchData.length > 1) {
            ret += '\n';
          } // end with a new line
          ret += "'";
        }
        return ret;
      });
      return result.join('\n');
    });
    _defineProperty(this, "updateActionsBar", () => this.coreEditor.legacyUpdateUI(this.currentReqRange));
    this.currentReqRange = null;
    this.parser = new _lib_row_parser__WEBPACK_IMPORTED_MODULE_1__["default"](this.coreEditor);
    this.autocomplete = new _lib_autocomplete_autocomplete__WEBPACK_IMPORTED_MODULE_6__["default"]({
      coreEditor,
      parser: this.parser
    });
    this.coreEditor.registerAutocompleter(this.autocomplete.getCompletions);
    this.coreEditor.on('tokenizerUpdate', this.highlightCurrentRequestsAndUpdateActionBar.bind(this));
    this.coreEditor.on('changeCursor', this.highlightCurrentRequestsAndUpdateActionBar.bind(this));
    this.coreEditor.on('changeScrollTop', this.updateActionsBar.bind(this));
  }
  getCoreEditor() {
    return this.coreEditor;
  }
}

/***/ }),

/***/ "./public/application/stores/editor.ts":
/*!*********************************************!*\
  !*** ./public/application/stores/editor.ts ***!
  \*********************************************/
/*! exports provided: initialValue, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialValue", function() { return initialValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "../../../node_modules/immer/dist/index.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fp-ts/lib/function */ "../../../node_modules/fp-ts/lib/function.js");
/* harmony import */ var fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_1__);
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



const initialValue = Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])({
  ready: false,
  settings: null,
  currentTextObject: null
}, fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_1__["identity"]);
const reducer = (state, action) => Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(state, draft => {
  if (action.type === 'setInputEditor') {
    if (action.payload) {
      draft.ready = true;
    }
    return;
  }
  if (action.type === 'updateSettings') {
    draft.settings = action.payload;
    return;
  }
  if (action.type === 'setCurrentTextObject') {
    draft.currentTextObject = action.payload;
    return;
  }
  return draft;
});

/***/ }),

/***/ "./public/application/stores/request.ts":
/*!**********************************************!*\
  !*** ./public/application/stores/request.ts ***!
  \**********************************************/
/*! exports provided: initialValue, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialValue", function() { return initialValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "../../../node_modules/immer/dist/index.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fp-ts/lib/function */ "../../../node_modules/fp-ts/lib/function.js");
/* harmony import */ var fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_1__);
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



const initialResultValue = {
  data: null,
  type: 'unknown'
};
const initialValue = Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])({
  requestInFlight: false,
  lastResult: initialResultValue
}, fp_ts_lib_function__WEBPACK_IMPORTED_MODULE_1__["identity"]);
const reducer = (state, action) => Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(state, draft => {
  if (action.type === 'sendRequest') {
    draft.requestInFlight = true;
    draft.lastResult = initialResultValue;
    return;
  }
  if (action.type === 'requestSuccess') {
    draft.requestInFlight = false;
    draft.lastResult = action.payload;
    return;
  }
  if (action.type === 'requestFail') {
    draft.requestInFlight = false;
    draft.lastResult = {
      ...initialResultValue,
      error: action.payload
    };
    return;
  }
  if (action.type === 'resetLastResult') {
    draft.lastResult = initialResultValue;
    return;
  }
  return draft;
});

/***/ }),

/***/ "./public/lib/ace_token_provider/index.ts":
/*!************************************************!*\
  !*** ./public/lib/ace_token_provider/index.ts ***!
  \************************************************/
/*! exports provided: AceTokensProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _token_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token_provider */ "./public/lib/ace_token_provider/token_provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AceTokensProvider", function() { return _token_provider__WEBPACK_IMPORTED_MODULE_0__["AceTokensProvider"]; });

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

/***/ "./public/lib/ace_token_provider/token_provider.ts":
/*!*********************************************************!*\
  !*** ./public/lib/ace_token_provider/token_provider.ts ***!
  \*********************************************************/
/*! exports provided: AceTokensProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceTokensProvider", function() { return AceTokensProvider; });
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

// Brace's token information types are not accurate.

const toToken = (lineNumber, column, token) => ({
  type: token.type,
  value: token.value,
  position: {
    lineNumber,
    column
  }
});
const toTokens = (lineNumber, tokens) => {
  let acc = '';
  return tokens.map(token => {
    const column = acc.length + 1;
    acc += token.value;
    return toToken(lineNumber, column, token);
  });
};
const extractTokenFromAceTokenRow = (lineNumber, column, aceTokens) => {
  let acc = '';
  for (const token of aceTokens) {
    const start = acc.length + 1;
    acc += token.value;
    const end = acc.length;
    if (column < start) continue;
    if (column > end + 1) continue;
    return toToken(lineNumber, start, token);
  }
  return null;
};
class AceTokensProvider {
  constructor(session) {
    this.session = session;
  }
  getTokens(lineNumber) {
    if (lineNumber < 1) return null;

    // Important: must use a .session.getLength because this is a cached value.
    // Calculating line length here will lead to performance issues because this function
    // may be called inside of tight loops.
    const lineCount = this.session.getLength();
    if (lineNumber > lineCount) {
      return null;
    }
    const tokens = this.session.getTokens(lineNumber - 1);
    if (!tokens || !tokens.length) {
      // We are inside of the document but have no tokens for this line. Return an empty
      // array to represent this empty line.
      return [];
    }
    return toTokens(lineNumber, tokens);
  }
  getTokenAt(pos) {
    const tokens = this.session.getTokens(pos.lineNumber - 1);
    if (tokens) {
      return extractTokenFromAceTokenRow(pos.lineNumber, pos.column, tokens);
    }
    return null;
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/autocomplete.ts":
/*!*************************************************!*\
  !*** ./public/lib/autocomplete/autocomplete.ts ***!
  \*************************************************/
/*! exports provided: getCurrentMethodAndTokenPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentMethodAndTokenPaths", function() { return getCurrentMethodAndTokenPaths; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/i18n */ "@osd/i18n");
/* harmony import */ var _osd_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osd_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osd_osd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../osd/osd */ "./public/lib/osd/osd.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./public/lib/utils/index.ts");
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine */ "./public/lib/autocomplete/engine.ts");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/index */ "./public/lib/autocomplete/components/index.ts");
/* harmony import */ var _application_factories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../application/factories */ "./public/application/factories/index.ts");
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




// TODO: All of these imports need to be moved to the core editor so that it can inject components from there.



// @ts-ignore

// @ts-ignore


let lastEvaluatedToken = null;
function isUrlParamsToken(token) {
  switch ((token || {}).type) {
    case 'url.param':
    case 'url.equal':
    case 'url.value':
    case 'url.questionmark':
    case 'url.amp':
      return true;
    default:
      return false;
  }
}

/**
 * Get the method and token paths for a specific position in the current editor buffer.
 *
 * This function can be used for getting autocomplete information or for getting more information
 * about the endpoint associated with autocomplete. In future, these concerns should be better
 * separated.
 *
 */
function getCurrentMethodAndTokenPaths(editor, pos, parser, forceEndOfUrl) {
  const tokenIter = Object(_application_factories__WEBPACK_IMPORTED_MODULE_6__["createTokenIterator"])({
    editor,
    position: pos
  });
  const startPos = pos;
  let bodyTokenPath = [];
  const ret = {};
  const STATES = {
    looking_for_key: 0,
    // looking for a key but without jumping over anything but white space and colon.
    looking_for_scope_start: 1,
    // skip everything until scope start
    start: 3
  };
  let state = STATES.start;

  // initialization problems -
  let t = tokenIter.getCurrentToken();
  if (t) {
    if (startPos.column === 1) {
      // if we are at the beginning of the line, the current token is the one after cursor, not before which
      // deviates from the standard.
      t = tokenIter.stepBackward();
      state = STATES.looking_for_scope_start;
    }
  } else {
    if (startPos.column === 1) {
      // empty lines do no have tokens, move one back
      t = tokenIter.stepBackward();
      state = STATES.start;
    }
  }
  let walkedSomeBody = false;

  // climb one scope at a time and get the scope key
  for (; t && t.type.indexOf('url') === -1 && t.type !== 'method'; t = tokenIter.stepBackward()) {
    if (t.type !== 'whitespace') {
      walkedSomeBody = true;
    } // marks we saw something

    switch (t.type) {
      case 'variable':
        if (state === STATES.looking_for_key) {
          bodyTokenPath.unshift(t.value.trim().replace(/"/g, ''));
        }
        state = STATES.looking_for_scope_start; // skip everything until the beginning of this scope
        break;
      case 'paren.lparen':
        bodyTokenPath.unshift(t.value);
        if (state === STATES.looking_for_scope_start) {
          // found it. go look for the relevant key
          state = STATES.looking_for_key;
        }
        break;
      case 'paren.rparen':
        // reset he search for key
        state = STATES.looking_for_scope_start;
        // and ignore this sub scope..
        let parenCount = 1;
        t = tokenIter.stepBackward();
        while (t && parenCount > 0) {
          switch (t.type) {
            case 'paren.lparen':
              parenCount--;
              break;
            case 'paren.rparen':
              parenCount++;
              break;
          }
          if (parenCount > 0) {
            t = tokenIter.stepBackward();
          }
        }
        if (!t) {
          // oops we run out.. we don't know what's up return null;
          return {};
        }
        continue;
      case 'punctuation.end_triple_quote':
        // reset the search for key
        state = STATES.looking_for_scope_start;
        for (t = tokenIter.stepBackward(); t; t = tokenIter.stepBackward()) {
          if (t.type === 'punctuation.start_triple_quote') {
            t = tokenIter.stepBackward();
            break;
          }
        }
        if (!t) {
          // oops we run out.. we don't know what's up return null;
          return {};
        }
        continue;
      case 'punctuation.start_triple_quote':
        if (state === STATES.start) {
          state = STATES.looking_for_key;
        } else if (state === STATES.looking_for_key) {
          state = STATES.looking_for_scope_start;
        }
        bodyTokenPath.unshift('"""');
        continue;
      case 'string':
      case 'constant.numeric':
      case 'constant.language.boolean':
      case 'text':
        if (state === STATES.start) {
          state = STATES.looking_for_key;
        } else if (state === STATES.looking_for_key) {
          state = STATES.looking_for_scope_start;
        }
        break;
      case 'punctuation.comma':
        if (state === STATES.start) {
          state = STATES.looking_for_scope_start;
        }
        break;
      case 'punctuation.colon':
      case 'whitespace':
        if (state === STATES.start) {
          state = STATES.looking_for_key;
        }
        break;
      // skip white space
    }
  }

  if (walkedSomeBody && (!bodyTokenPath || bodyTokenPath.length === 0) && !forceEndOfUrl) {
    // we had some content and still no path -> the cursor is position after a closed body -> no auto complete
    return {};
  }
  ret.urlTokenPath = [];
  if (tokenIter.getCurrentPosition().lineNumber === startPos.lineNumber) {
    if (t && (t.type === 'url.part' || t.type === 'url.param' || t.type === 'url.value')) {
      // we are forcing the end of the url for the purposes of determining an endpoint
      if (forceEndOfUrl && t.type === 'url.part') {
        ret.urlTokenPath.push(t.value);
        ret.urlTokenPath.push(_components_index__WEBPACK_IMPORTED_MODULE_5__["URL_PATH_END_MARKER"]);
      }
      // we are on the same line as cursor and dealing with a url. Current token is not part of the context
      t = tokenIter.stepBackward();
      // This will force method parsing
      while (t.type === 'whitespace') {
        t = tokenIter.stepBackward();
      }
    }
    bodyTokenPath = null; // no not on a body line.
  }

  ret.bodyTokenPath = bodyTokenPath;
  ret.urlParamsTokenPath = null;
  ret.requestStartRow = tokenIter.getCurrentPosition().lineNumber;
  let curUrlPart;
  while (t && isUrlParamsToken(t)) {
    switch (t.type) {
      case 'url.value':
        if (Array.isArray(curUrlPart)) {
          curUrlPart.unshift(t.value);
        } else if (curUrlPart) {
          curUrlPart = [t.value, curUrlPart];
        } else {
          curUrlPart = t.value;
        }
        break;
      case 'url.comma':
        if (!curUrlPart) {
          curUrlPart = [];
        } else if (!Array.isArray(curUrlPart)) {
          curUrlPart = [curUrlPart];
        }
        break;
      case 'url.param':
        const v = curUrlPart;
        curUrlPart = {};
        curUrlPart[t.value] = v;
        break;
      case 'url.amp':
      case 'url.questionmark':
        if (!ret.urlParamsTokenPath) {
          ret.urlParamsTokenPath = [];
        }
        ret.urlParamsTokenPath.unshift(curUrlPart || {});
        curUrlPart = null;
        break;
    }
    t = tokenIter.stepBackward();
  }
  curUrlPart = null;
  while (t && t.type.indexOf('url') !== -1) {
    switch (t.type) {
      case 'url.part':
        if (Array.isArray(curUrlPart)) {
          curUrlPart.unshift(t.value);
        } else if (curUrlPart) {
          curUrlPart = [t.value, curUrlPart];
        } else {
          curUrlPart = t.value;
        }
        break;
      case 'url.comma':
        if (!curUrlPart) {
          curUrlPart = [];
        } else if (!Array.isArray(curUrlPart)) {
          curUrlPart = [curUrlPart];
        }
        break;
      case 'url.slash':
        if (curUrlPart) {
          ret.urlTokenPath.unshift(curUrlPart);
          curUrlPart = null;
        }
        break;
    }
    t = parser.prevNonEmptyToken(tokenIter);
  }
  if (curUrlPart) {
    ret.urlTokenPath.unshift(curUrlPart);
  }
  if (!ret.bodyTokenPath && !ret.urlParamsTokenPath) {
    if (ret.urlTokenPath.length > 0) {
      //   // started on the url, first token is current token
      ret.otherTokenValues = ret.urlTokenPath[0];
    }
  } else {
    // mark the url as completed.
    ret.urlTokenPath.push(_components_index__WEBPACK_IMPORTED_MODULE_5__["URL_PATH_END_MARKER"]);
  }
  if (t && t.type === 'method') {
    ret.method = t.value;
  }
  return ret;
}

// eslint-disable-next-line
/* harmony default export */ __webpack_exports__["default"] = (function ({
  coreEditor: editor,
  parser
}) {
  function isUrlPathToken(token) {
    switch ((token || {}).type) {
      case 'url.slash':
      case 'url.comma':
      case 'url.part':
        return true;
      default:
        return false;
    }
  }
  function addMetaToTermsList(list, meta, template) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(list, function (t) {
      if (typeof t !== 'object') {
        t = {
          name: t
        };
      }
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(t, {
        meta,
        template
      });
    });
  }
  function applyTerm(term) {
    const context = term.context;

    // make sure we get up to date replacement info.
    addReplacementInfoToContext(context, editor.getCurrentPosition(), term.insertValue);
    let termAsString;
    if (context.autoCompleteType === 'body') {
      termAsString = typeof term.insertValue === 'string' ? '"' + term.insertValue + '"' : term.insertValue + '';
      if (term.insertValue === '[' || term.insertValue === '{') {
        termAsString = '';
      }
    } else {
      termAsString = term.insertValue + '';
    }
    let valueToInsert = termAsString;
    let templateInserted = false;
    if (context.addTemplate && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isUndefined(term.template) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNull(term.template)) {
      let indentedTemplateLines;
      // In order to allow triple quoted strings in template completion we check the `__raw_`
      // attribute to determine whether this template should go through JSON formatting.
      if (term.template.__raw && term.template.value) {
        indentedTemplateLines = term.template.value.split('\n');
      } else {
        indentedTemplateLines = _utils__WEBPACK_IMPORTED_MODULE_3__["jsonToString"](term.template, true).split('\n');
      }
      let currentIndentation = editor.getLineValue(context.rangeToReplace.start.lineNumber);
      currentIndentation = currentIndentation.match(/^\s*/)[0];
      for (let i = 1; i < indentedTemplateLines.length; i++ // skip first line
      ) {
        indentedTemplateLines[i] = currentIndentation + indentedTemplateLines[i];
      }
      valueToInsert += ': ' + indentedTemplateLines.join('\n');
      templateInserted = true;
    } else {
      templateInserted = true;
      if (term.value === '[') {
        valueToInsert += '[]';
      } else if (term.value === '{') {
        valueToInsert += '{}';
      } else {
        templateInserted = false;
      }
    }
    valueToInsert = context.prefixToAdd + valueToInsert + context.suffixToAdd;

    // disable listening to the changes we are making.
    editor.off('changeSelection', editorChangeListener);
    if (context.rangeToReplace.start.column !== context.rangeToReplace.end.column) {
      editor.replace(context.rangeToReplace, valueToInsert);
    } else {
      editor.insert(valueToInsert);
    }
    editor.clearSelection(); // for some reason the above changes selection

    // go back to see whether we have one of ( : { & [ do not require a comma. All the rest do.
    let newPos = {
      lineNumber: context.rangeToReplace.start.lineNumber,
      column: context.rangeToReplace.start.column + termAsString.length + context.prefixToAdd.length + (templateInserted ? 0 : context.suffixToAdd.length)
    };
    const tokenIter = Object(_application_factories__WEBPACK_IMPORTED_MODULE_6__["createTokenIterator"])({
      editor,
      position: newPos
    });
    if (context.autoCompleteType === 'body') {
      // look for the next place stand, just after a comma, {
      let nonEmptyToken = parser.nextNonEmptyToken(tokenIter);
      switch (nonEmptyToken ? nonEmptyToken.type : 'NOTOKEN') {
        case 'paren.rparen':
          newPos = tokenIter.getCurrentPosition();
          break;
        case 'punctuation.colon':
          nonEmptyToken = parser.nextNonEmptyToken(tokenIter);
          if ((nonEmptyToken || {}).type === 'paren.lparen') {
            nonEmptyToken = parser.nextNonEmptyToken(tokenIter);
            newPos = tokenIter.getCurrentPosition();
            if (nonEmptyToken && nonEmptyToken.value.indexOf('"') === 0) {
              newPos.column++;
            } // don't stand on "
          }

          break;
        case 'paren.lparen':
        case 'punctuation.comma':
          tokenIter.stepForward();
          newPos = tokenIter.getCurrentPosition();
          break;
      }
      editor.moveCursorToPosition(newPos);
    }

    // re-enable listening to typing
    editor.on('changeSelection', editorChangeListener);
  }
  function getAutoCompleteContext(ctxEditor, pos) {
    // deduces all the parameters need to position and insert the auto complete
    const context = {
      autoCompleteSet: null,
      // instructions for what can be here
      endpoint: null,
      urlPath: null,
      method: null,
      activeScheme: null,
      editor: ctxEditor
    };

    //  context.updatedForToken = session.getTokenAt(pos.row, pos.column);
    //
    //  if (!context.updatedForToken)
    //    context.updatedForToken = { value: "", start: pos.column }; // empty line
    //
    //  context.updatedForToken.row = pos.row; // extend

    context.autoCompleteType = getAutoCompleteType(pos);
    switch (context.autoCompleteType) {
      case 'path':
        addPathAutoCompleteSetToContext(context, pos);
        break;
      case 'url_params':
        addUrlParamsAutoCompleteSetToContext(context, pos);
        break;
      case 'method':
        addMethodAutoCompleteSetToContext(context);
        break;
      case 'body':
        addBodyAutoCompleteSetToContext(context, pos);
        break;
      default:
        return null;
    }
    if (!context.autoCompleteSet) {
      return null; // nothing to do..
    }

    addReplacementInfoToContext(context, pos);
    context.createdWithToken = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.clone(context.updatedForToken);
    return context;
  }
  function getAutoCompleteType(pos) {
    // return "method", "path" or "body" to determine auto complete type.

    let rowMode = parser.getRowParseMode();

    // eslint-disable-next-line no-bitwise
    if (rowMode & parser.MODE.IN_REQUEST) {
      return 'body';
    }
    // eslint-disable-next-line no-bitwise
    if (rowMode & parser.MODE.REQUEST_START) {
      // on url path, url params or method.
      const tokenIter = Object(_application_factories__WEBPACK_IMPORTED_MODULE_6__["createTokenIterator"])({
        editor,
        position: pos
      });
      let t = tokenIter.getCurrentToken();
      while (t.type === 'url.comma') {
        t = tokenIter.stepBackward();
      }
      switch (t.type) {
        case 'method':
          return 'method';
        case 'whitespace':
          t = parser.prevNonEmptyToken(tokenIter);
          switch ((t || {}).type) {
            case 'method':
              // we moved one back
              return 'path';
              break;
            default:
              if (isUrlPathToken(t)) {
                return 'path';
              }
              if (isUrlParamsToken(t)) {
                return 'url_params';
              }
              return null;
          }
          break;
        default:
          if (isUrlPathToken(t)) {
            return 'path';
          }
          if (isUrlParamsToken(t)) {
            return 'url_params';
          }
          return null;
      }
    }

    // after start to avoid single line url only requests
    // eslint-disable-next-line no-bitwise
    if (rowMode & parser.MODE.REQUEST_END) {
      return 'body';
    }

    // in between request on an empty
    if (editor.getLineValue(pos.lineNumber).trim() === '') {
      // check if the previous line is a single line beginning of a new request
      rowMode = parser.getRowParseMode(pos.lineNumber - 1);
      if (
      // eslint-disable-next-line no-bitwise
      rowMode & parser.MODE.REQUEST_START &&
      // eslint-disable-next-line no-bitwise
      rowMode & parser.MODE.REQUEST_END) {
        return 'body';
      }
      // o.w suggest a method
      return 'method';
    }
    return null;
  }
  function addReplacementInfoToContext(context, pos, replacingTerm) {
    // extract the initial value, rangeToReplace & textBoxPosition

    // Scenarios for current token:
    //   -  Nice token { "bla|"
    //   -  Broken text token {   bla|
    //   -  No token : { |
    //   - Broken scenario { , bla|
    //   - Nice token, broken before: {, "bla"

    context.updatedForToken = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.clone(editor.getTokenAt({
      lineNumber: pos.lineNumber,
      column: pos.column
    }));
    if (!context.updatedForToken) {
      context.updatedForToken = {
        value: '',
        type: '',
        position: {
          column: pos.column,
          lineNumber: pos.lineNumber
        }
      };
    } // empty line

    let anchorToken = context.createdWithToken;
    if (!anchorToken) {
      anchorToken = context.updatedForToken;
    }
    switch (context.updatedForToken.type) {
      case 'variable':
      case 'string':
      case 'text':
      case 'constant.numeric':
      case 'constant.language.boolean':
      case 'method':
      case 'url.index':
      case 'url.type':
      case 'url.id':
      case 'url.method':
      case 'url.endpoint':
      case 'url.part':
      case 'url.param':
      case 'url.value':
        context.rangeToReplace = {
          start: {
            lineNumber: pos.lineNumber,
            column: anchorToken.position.column
          },
          end: {
            lineNumber: pos.lineNumber,
            column: context.updatedForToken.position.column + context.updatedForToken.value.length
          }
        };
        context.replacingToken = true;
        break;
      default:
        if (replacingTerm && context.updatedForToken.value === replacingTerm) {
          context.rangeToReplace = {
            start: {
              lineNumber: pos.lineNumber,
              column: anchorToken.column
            },
            end: {
              lineNumber: pos.lineNumber,
              column: context.updatedForToken.position.column + context.updatedForToken.value.length
            }
          };
          context.replacingToken = true;
        } else {
          // standing on white space, quotes or another punctuation - no replacing
          context.rangeToReplace = {
            start: {
              lineNumber: pos.lineNumber,
              column: pos.column
            },
            end: {
              lineNumber: pos.lineNumber,
              column: pos.column
            }
          };
          context.replacingToken = false;
        }
        break;
    }
    context.textBoxPosition = {
      lineNumber: context.rangeToReplace.start.lineNumber,
      column: context.rangeToReplace.start.column
    };
    switch (context.autoCompleteType) {
      case 'path':
        addPathPrefixSuffixToContext(context);
        break;
      case 'url_params':
        addUrlParamsPrefixSuffixToContext(context);
        break;
      case 'method':
        addMethodPrefixSuffixToContext(context);
        break;
      case 'body':
        addBodyPrefixSuffixToContext(context);
        break;
    }
  }
  function addBodyPrefixSuffixToContext(context) {
    // Figure out what happens next to the token to see whether it needs trailing commas etc.

    // Templates will be used if not destroying existing structure.
    // -> token : {} or token ]/} or token , but not token : SOMETHING ELSE

    context.prefixToAdd = '';
    context.suffixToAdd = '';
    let tokenIter = Object(_application_factories__WEBPACK_IMPORTED_MODULE_6__["createTokenIterator"])({
      editor,
      position: editor.getCurrentPosition()
    });
    let nonEmptyToken = parser.nextNonEmptyToken(tokenIter);
    switch (nonEmptyToken ? nonEmptyToken.type : 'NOTOKEN') {
      case 'NOTOKEN':
      case 'paren.lparen':
      case 'paren.rparen':
      case 'punctuation.comma':
        context.addTemplate = true;
        break;
      case 'punctuation.colon':
        // test if there is an empty object - if so we replace it
        context.addTemplate = false;
        nonEmptyToken = parser.nextNonEmptyToken(tokenIter);
        if (!(nonEmptyToken && nonEmptyToken.value === '{')) {
          break;
        }
        nonEmptyToken = parser.nextNonEmptyToken(tokenIter);
        if (!(nonEmptyToken && nonEmptyToken.value === '}')) {
          break;
        }
        context.addTemplate = true;
        // extend range to replace to include all up to token
        context.rangeToReplace.end.lineNumber = tokenIter.getCurrentTokenLineNumber();
        context.rangeToReplace.end.column = tokenIter.getCurrentTokenColumn() + nonEmptyToken.value.length;

        // move one more time to check if we need a trailing comma
        nonEmptyToken = parser.nextNonEmptyToken(tokenIter);
        switch (nonEmptyToken ? nonEmptyToken.type : 'NOTOKEN') {
          case 'NOTOKEN':
          case 'paren.rparen':
          case 'punctuation.comma':
          case 'punctuation.colon':
            break;
          default:
            context.suffixToAdd = ', ';
        }
        break;
      default:
        context.addTemplate = true;
        context.suffixToAdd = ', ';
        break;
      // for now play safe and do nothing. May be made smarter.
    }

    // go back to see whether we have one of ( : { & [ do not require a comma. All the rest do.
    tokenIter = Object(_application_factories__WEBPACK_IMPORTED_MODULE_6__["createTokenIterator"])({
      editor,
      position: editor.getCurrentPosition()
    });
    nonEmptyToken = tokenIter.getCurrentToken();
    let insertingRelativeToToken; // -1 is before token, 0 middle, +1 after token
    if (context.replacingToken) {
      insertingRelativeToToken = 0;
    } else {
      const pos = editor.getCurrentPosition();
      if (pos.column === context.updatedForToken.position.column) {
        insertingRelativeToToken = -1;
      } else if (pos.column < context.updatedForToken.position.column + context.updatedForToken.value.length) {
        insertingRelativeToToken = 0;
      } else {
        insertingRelativeToToken = 1;
      }
    }
    // we should actually look at what's happening before this token
    if (parser.isEmptyToken(nonEmptyToken) || insertingRelativeToToken <= 0) {
      nonEmptyToken = parser.prevNonEmptyToken(tokenIter);
    }
    switch (nonEmptyToken ? nonEmptyToken.type : 'NOTOKEN') {
      case 'NOTOKEN':
      case 'paren.lparen':
      case 'punctuation.comma':
      case 'punctuation.colon':
      case 'method':
        break;
      default:
        if (nonEmptyToken && nonEmptyToken.type.indexOf('url') < 0) {
          context.prefixToAdd = ', ';
        }
    }
    return context;
  }
  function addUrlParamsPrefixSuffixToContext(context) {
    context.prefixToAdd = '';
    context.suffixToAdd = '';
  }
  function addMethodPrefixSuffixToContext(context) {
    context.prefixToAdd = '';
    context.suffixToAdd = '';
    const tokenIter = Object(_application_factories__WEBPACK_IMPORTED_MODULE_6__["createTokenIterator"])({
      editor,
      position: editor.getCurrentPosition()
    });
    const lineNumber = tokenIter.getCurrentPosition().lineNumber;
    const t = parser.nextNonEmptyToken(tokenIter);
    if (tokenIter.getCurrentPosition().lineNumber !== lineNumber || !t) {
      // we still have nothing next to the method, add a space..
      context.suffixToAdd = ' ';
    }
  }
  function addPathPrefixSuffixToContext(context) {
    context.prefixToAdd = '';
    context.suffixToAdd = '';
  }
  function addMethodAutoCompleteSetToContext(context) {
    context.autoCompleteSet = ['GET', 'PUT', 'POST', 'DELETE', 'HEAD'].map((m, i) => ({
      name: m,
      score: -i,
      meta: _osd_i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].translate('console.autocomplete.addMethodMetaText', {
        defaultMessage: 'method'
      })
    }));
  }
  function addPathAutoCompleteSetToContext(context, pos) {
    const ret = getCurrentMethodAndTokenPaths(editor, pos, parser);
    context.method = ret.method;
    context.token = ret.token;
    context.otherTokenValues = ret.otherTokenValues;
    context.urlTokenPath = ret.urlTokenPath;
    const components = Object(_osd_osd__WEBPACK_IMPORTED_MODULE_2__["getTopLevelUrlCompleteComponents"])(context.method);
    Object(_engine__WEBPACK_IMPORTED_MODULE_4__["populateContext"])(ret.urlTokenPath, context, editor, true, components);
    context.autoCompleteSet = addMetaToTermsList(context.autoCompleteSet, 'endpoint');
  }
  function addUrlParamsAutoCompleteSetToContext(context, pos) {
    const ret = getCurrentMethodAndTokenPaths(editor, pos, parser);
    context.method = ret.method;
    context.otherTokenValues = ret.otherTokenValues;
    context.urlTokenPath = ret.urlTokenPath;
    if (!ret.urlTokenPath) {
      // zero length tokenPath is true

      return context;
    }
    Object(_engine__WEBPACK_IMPORTED_MODULE_4__["populateContext"])(ret.urlTokenPath, context, editor, false, Object(_osd_osd__WEBPACK_IMPORTED_MODULE_2__["getTopLevelUrlCompleteComponents"])(context.method));
    if (!context.endpoint) {
      return context;
    }
    if (!ret.urlParamsTokenPath) {
      // zero length tokenPath is true
      return context;
    }
    let tokenPath = [];
    const currentParam = ret.urlParamsTokenPath.pop();
    if (currentParam) {
      tokenPath = Object.keys(currentParam); // single key object
      context.otherTokenValues = currentParam[tokenPath[0]];
    }
    Object(_engine__WEBPACK_IMPORTED_MODULE_4__["populateContext"])(tokenPath, context, editor, true, context.endpoint.paramsAutocomplete.getTopLevelComponents(context.method));
    return context;
  }
  function addBodyAutoCompleteSetToContext(context, pos) {
    const ret = getCurrentMethodAndTokenPaths(editor, pos, parser);
    context.method = ret.method;
    context.otherTokenValues = ret.otherTokenValues;
    context.urlTokenPath = ret.urlTokenPath;
    context.requestStartRow = ret.requestStartRow;
    if (!ret.urlTokenPath) {
      // zero length tokenPath is true
      return context;
    }
    Object(_engine__WEBPACK_IMPORTED_MODULE_4__["populateContext"])(ret.urlTokenPath, context, editor, false, Object(_osd_osd__WEBPACK_IMPORTED_MODULE_2__["getTopLevelUrlCompleteComponents"])(context.method));
    context.bodyTokenPath = ret.bodyTokenPath;
    if (!ret.bodyTokenPath) {
      // zero length tokenPath is true

      return context;
    }

    // needed for scope linking + global term resolving
    context.endpointComponentResolver = _osd_osd__WEBPACK_IMPORTED_MODULE_2__["getEndpointBodyCompleteComponents"];
    context.globalComponentResolver = _osd_osd__WEBPACK_IMPORTED_MODULE_2__["getGlobalAutocompleteComponents"];
    let components;
    if (context.endpoint) {
      components = context.endpoint.bodyAutocompleteRootComponents;
    } else {
      components = Object(_osd_osd__WEBPACK_IMPORTED_MODULE_2__["getUnmatchedEndpointComponents"])();
    }
    Object(_engine__WEBPACK_IMPORTED_MODULE_4__["populateContext"])(ret.bodyTokenPath, context, editor, true, components);
    return context;
  }
  const evaluateCurrentTokenAfterAChange = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(function evaluateCurrentTokenAfterAChange(pos) {
    let currentToken = editor.getTokenAt(pos);
    if (!currentToken) {
      if (pos.lineNumber === 1) {
        lastEvaluatedToken = null;
        return;
      }
      currentToken = {
        position: {
          column: 0,
          lineNumber: 0
        },
        value: '',
        type: ''
      }; // empty row
    }

    currentToken.position.lineNumber = pos.lineNumber; // extend token with row. Ace doesn't supply it by default
    if (parser.isEmptyToken(currentToken)) {
      // empty token. check what's coming next
      const nextToken = editor.getTokenAt({
        ...pos,
        column: pos.column + 1
      });
      if (parser.isEmptyToken(nextToken)) {
        // Empty line, or we're not on the edge of current token. Save the current position as base
        currentToken.position.column = pos.column;
        lastEvaluatedToken = currentToken;
      } else {
        nextToken.position.lineNumber = pos.lineNumber;
        lastEvaluatedToken = nextToken;
      }
      return;
    }
    if (!lastEvaluatedToken) {
      lastEvaluatedToken = currentToken;
      return; // wait for the next typing.
    }

    if (lastEvaluatedToken.position.column !== currentToken.position.column || lastEvaluatedToken.position.lineNumber !== currentToken.position.lineNumber || lastEvaluatedToken.value === currentToken.value) {
      // not on the same place or nothing changed, cache and wait for the next time
      lastEvaluatedToken = currentToken;
      return;
    }

    // don't automatically open the auto complete if some just hit enter (new line) or open a parentheses
    switch (currentToken.type || 'UNKNOWN') {
      case 'paren.lparen':
      case 'paren.rparen':
      case 'punctuation.colon':
      case 'punctuation.comma':
      case 'UNKNOWN':
        return;
    }
    lastEvaluatedToken = currentToken;
    editor.execCommand('startAutocomplete');
  }, 100);
  function editorChangeListener() {
    const position = editor.getCurrentPosition();
    if (position && !editor.isCompleterActive()) {
      evaluateCurrentTokenAfterAChange(position);
    }
  }
  function getCompletions(position, prefix, callback) {
    try {
      const context = getAutoCompleteContext(editor, position);
      if (!context) {
        callback(null, []);
      } else {
        const terms = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(context.autoCompleteSet.filter(term => Boolean(term) && term.name != null), function (term) {
          if (typeof term !== 'object') {
            term = {
              name: term
            };
          } else {
            term = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.clone(term);
          }
          const defaults = {
            value: term.name,
            meta: 'API',
            score: 0,
            context
          };
          // we only need our custom insertMatch behavior for the body
          if (context.autoCompleteType === 'body') {
            defaults.completer = {
              insertMatch() {
                return applyTerm(term);
              }
            };
          }
          return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(term, defaults);
        });
        terms.sort(function (t1, t2) {
          /* score sorts from high to low */
          if (t1.score > t2.score) {
            return -1;
          }
          if (t1.score < t2.score) {
            return 1;
          }
          /* names sort from low to high */
          if (t1.name < t2.name) {
            return -1;
          }
          if (t1.name === t2.name) {
            return 0;
          }
          return 1;
        });
        callback(null, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(terms, function (t, i) {
          t.insertValue = t.insertValue || t.value;
          t.value = '' + t.value; // normalize to strings
          t.score = -i;
          return t;
        }));
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      callback(e, null);
    }
  }
  editor.on('changeSelection', editorChangeListener);
  return {
    getCompletions,
    // TODO: This needs to be cleaned up
    _test: {
      getCompletions: (_editor, _editSession, pos, prefix, callback) => getCompletions(pos, prefix, callback),
      addReplacementInfoToContext,
      addChangeListener: () => editor.on('changeSelection', editorChangeListener),
      removeChangeListener: () => editor.off('changeSelection', editorChangeListener)
    }
  };
});

/***/ }),

/***/ "./public/lib/autocomplete/body_completer.ts":
/*!***************************************************!*\
  !*** ./public/lib/autocomplete/body_completer.ts ***!
  \***************************************************/
/*! exports provided: CompilingContext, globalsOnlyAutocompleteComponents, compileBodyDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompilingContext", function() { return CompilingContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalsOnlyAutocompleteComponents", function() { return globalsOnlyAutocompleteComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compileBodyDescription", function() { return compileBodyDescription; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine */ "./public/lib/autocomplete/engine.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./public/lib/autocomplete/components/index.ts");
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

// eslint-disable-next-line max-classes-per-file



class CompilingContext {
  constructor(endpointId, parametrizedComponentFactories) {
    _defineProperty(this, "parametrizedComponentFactories", void 0);
    _defineProperty(this, "endpointId", void 0);
    this.parametrizedComponentFactories = parametrizedComponentFactories;
    this.endpointId = endpointId;
  }
}
/**
 * An object to resolve scope links (syntax endpoint.path1.path2)
 * @param link the link either string (endpoint.path1.path2, or .path1.path2) or a function (context,editor)
 * which returns a description to be compiled
 * @constructor
 * @param compilingContext
 *
 *
 * For this to work we expect the context to include a method context.endpointComponentResolver(endpoint)
 * which should return the top level components for the given endpoint
 */

function resolvePathToComponents(tokenPath, context, editor, components) {
  const walkStates = Object(_engine__WEBPACK_IMPORTED_MODULE_1__["walkTokenPath"])(tokenPath, [new _engine__WEBPACK_IMPORTED_MODULE_1__["WalkingState"]('ROOT', components, [])], context, editor);
  const result = [].concat.apply([], lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(walkStates, 'components'));
  return result;
}
class ScopeResolver extends _components__WEBPACK_IMPORTED_MODULE_2__["SharedComponent"] {
  constructor(link, compilingContext) {
    super('__scope_link');
    _defineProperty(this, "link", void 0);
    _defineProperty(this, "compilingContext", void 0);
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(link) && link[0] === '.') {
      // relative link, inject current endpoint
      if (link === '.') {
        link = compilingContext.endpointId;
      } else {
        link = compilingContext.endpointId + link;
      }
    }
    this.link = link;
    this.compilingContext = compilingContext;
  }
  resolveLinkToComponents(context, editor) {
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(this.link)) {
      const desc = this.link(context, editor);
      return compileDescription(desc, this.compilingContext);
    }
    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(this.link)) {
      throw new Error('unsupported link format', this.link);
    }
    let path = this.link.replace(/\./g, '{').split(/(\{)/);
    const endpoint = path[0];
    let components;
    try {
      if (endpoint === 'GLOBAL') {
        // global rules need an extra indirection
        if (path.length < 3) {
          throw new Error('missing term in global link: ' + this.link);
        }
        const term = path[2];
        components = context.globalComponentResolver(term);
        path = path.slice(3);
      } else {
        path = path.slice(1);
        components = context.endpointComponentResolver(endpoint);
      }
    } catch (e) {
      throw new Error('failed to resolve link [' + this.link + ']: ' + e);
    }
    return resolvePathToComponents(path, context, editor, components);
  }
  getTerms(context, editor) {
    const options = [];
    const components = this.resolveLinkToComponents(context, editor);
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(components, function (component) {
      const option = component.getTerms(context, editor);
      if (option) {
        options.push.apply(options, option);
      }
    });
    return options;
  }
  match(token, context, editor) {
    const result = {
      next: []
    };
    const components = this.resolveLinkToComponents(context, editor);
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(components, function (component) {
      const componentResult = component.match(token, context, editor);
      if (componentResult && componentResult.next) {
        var _result$next;
        (_result$next = result.next) === null || _result$next === void 0 || _result$next.push.apply(result.next, componentResult.next);
      }
    });
    return result;
  }
}
function getTemplate(description) {
  if (Array.isArray(description)) {
    if (description.length === 1) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(description[0])) {
        // shortcut to save typing
        const innerTemplate = getTemplate(description[0]);
        return innerTemplate != null ? [innerTemplate] : [];
      }
    }
    return [];
  } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(description)) {
    return description;
  } else if (description.__template) {
    if (description.__raw && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(description.__template)) {
      return {
        // This is a special secret attribute that gets passed through to indicate that
        // the raw value should be passed through to the console without JSON.stringifying it
        // first.
        //
        // Primary use case is to allow __templates to contain extended JSON special values like
        // triple quotes.
        __raw: true,
        value: description.__template
      };
    }
    return description.__template;
  } else if (description.__one_of) {
    return getTemplate(description.__one_of[0]);
  } else if (description.__any_of) {
    return [];
  } else if (description.__scope_link) {
    // assume an object for now.
    return {};
  } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(description)) {
    return {};
  } else {
    return description;
  }
}
function getOptions(description) {
  const options = {};
  const template = getTemplate(description);
  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isUndefined(template)) {
    options.template = template;
  }
  return options;
}

/**
 * @param description a json dict describing the endpoint
 * @param compilingContext
 */
function compileDescription(description, compilingContext) {
  if (Array.isArray(description)) {
    return [compileList(description, compilingContext)];
  } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(description)) {
    // test for objects list as arrays are also objects
    if (description.__scope_link) {
      return [new ScopeResolver(description.__scope_link, compilingContext)];
    }
    if (description.__any_of) {
      return [compileList(description.__any_of, compilingContext)];
    }
    if (description.__one_of) {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(description.__one_of, function (d) {
        return compileDescription(d, compilingContext);
      }));
    }
    const obj = compileObject(description, compilingContext);
    if (description.__condition) {
      return [compileCondition(description.__condition, obj)];
    } else {
      return [obj];
    }
  } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(description) && /^\{.*\}$/.test(description)) {
    return [compileParametrizedValue(description, compilingContext)];
  } else {
    return [new _components__WEBPACK_IMPORTED_MODULE_2__["ConstantComponent"](description)];
  }
}
function compileParametrizedValue(value, compilingContext, template) {
  var _compilingContext$par;
  value = value.substr(1, value.length - 2).toLowerCase();
  const componentFactory = (_compilingContext$par = compilingContext.parametrizedComponentFactories) === null || _compilingContext$par === void 0 ? void 0 : _compilingContext$par.getComponent(value, true);
  if (!componentFactory) {
    throw new Error("no factory found for '" + value + "'");
  }
  let component = componentFactory(value, null, !!template);
  if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isUndefined(template)) {
    component = Object(_engine__WEBPACK_IMPORTED_MODULE_1__["wrapComponentWithDefaults"])(component, {
      template
    });
  }
  return component;
}
function compileObject(objDescription, compilingContext) {
  const objectC = new _components__WEBPACK_IMPORTED_MODULE_2__["ConstantComponent"]('{');
  const constants = [];
  const patterns = [];
  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(objDescription, function (desc, key) {
    if (key.indexOf('__') === 0) {
      // meta key
      return;
    }
    const options = getOptions(desc);
    let component;
    if (/^\{.*\}$/.test(key)) {
      component = compileParametrizedValue(key, compilingContext, options.template);
      patterns.push(component);
    } else if (key === '*') {
      component = new _components__WEBPACK_IMPORTED_MODULE_2__["SharedComponent"](key);
      patterns.push(component);
    } else {
      options.name = key;
      component = new _components__WEBPACK_IMPORTED_MODULE_2__["ConstantComponent"](key, null, [options]);
      constants.push(component);
    }
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(compileDescription(desc, compilingContext), function (subComponent) {
      component.addComponent(subComponent);
    });
  });
  objectC.addComponent(new _components__WEBPACK_IMPORTED_MODULE_2__["ObjectComponent"]('inner', constants, patterns));
  return objectC;
}
function compileList(listRule, compilingContext) {
  const listC = new _components__WEBPACK_IMPORTED_MODULE_2__["ConstantComponent"]('[');
  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(listRule, function (desc) {
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(compileDescription(desc, compilingContext), function (component) {
      listC.addComponent(component);
    });
  });
  return listC;
}

/** takes a compiled object and wraps in a {@link ConditionalProxy }*/
function compileCondition(description, compiledObject) {
  if (description.lines_regex) {
    return new _components__WEBPACK_IMPORTED_MODULE_2__["ConditionalProxy"](function (context, editor) {
      const lines = editor.getLines(context.requestStartRow, editor.getCurrentPosition().lineNumber).join('\n');
      return new RegExp(description.lines_regex, 'm').test(lines);
    }, compiledObject);
  } else {
    throw new Error('unknown condition type - got: ' + JSON.stringify(description));
  }
}

// a list of component that match anything but give auto complete suggestions based on global API entries.
function globalsOnlyAutocompleteComponents() {
  return [new _components__WEBPACK_IMPORTED_MODULE_2__["GlobalOnlyComponent"]('__global__')];
}

/**
 * @param endpointId id of the endpoint being compiled.
 * @param description a json dict describing the endpoint
 * @param parametrizedComponentFactories an object containing factories for different types of autocomplete components.
 * It is used as a fallback for pattern keys (e.g., `{type}`, resolved without the `$s`)
 * and has the following structure:
 * {
 *   TYPE: (part, parent) => new SharedComponent(part, parent)
 * }
 */
function compileBodyDescription(endpointId, description, parametrizedComponentFactories) {
  return compileDescription(description, new CompilingContext(endpointId, parametrizedComponentFactories));
}

/***/ }),

/***/ "./public/lib/autocomplete/components/accept_endpoint_component.ts":
/*!*************************************************************************!*\
  !*** ./public/lib/autocomplete/components/accept_endpoint_component.ts ***!
  \*************************************************************************/
/*! exports provided: URL_PATH_END_MARKER, AcceptEndpointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_PATH_END_MARKER", function() { return URL_PATH_END_MARKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptEndpointComponent", function() { return AcceptEndpointComponent; });
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared_component */ "./public/lib/autocomplete/components/shared_component.ts");
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


const URL_PATH_END_MARKER = '__url_path_end__';
class AcceptEndpointComponent extends _shared_component__WEBPACK_IMPORTED_MODULE_0__["SharedComponent"] {
  constructor(endpoint, parent) {
    super(endpoint.id, parent);
    _defineProperty(this, "endpoint", void 0);
    this.endpoint = endpoint;
  }
  match(token, context, editor) {
    if (token !== URL_PATH_END_MARKER) {
      return null;
    }
    if (this.endpoint.methods && !this.endpoint.methods.includes(context.method)) {
      return null;
    }
    const r = super.match(token, context, editor);
    if (r) {
      r.context_values = r.context_values || {};
      r.context_values.endpoint = this.endpoint;
      if (typeof this.endpoint.priority === 'number') {
        r.priority = this.endpoint.priority;
      }
    }
    return r;
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/components/autocomplete_component.ts":
/*!**********************************************************************!*\
  !*** ./public/lib/autocomplete/components/autocomplete_component.ts ***!
  \**********************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
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

// A partial context object that can be merged into an AutoCompleteContext

class AutocompleteComponent {
  constructor(name) {
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "next", void 0);
    this.name = name;
    this.next = [];
  }
  /** called to get the possible suggestions for tokens, when this object is at the end of
   * the resolving chain (and thus can suggest possible continuation paths)
   */
  getTerms(context, editor) {
    return [];
  }
  /*
  if the current matcher matches this term, this method should return an object with the following keys
  {
  context_values: {
  values extract from term that should be added to the context
  }
  next: AutocompleteComponent(s) to use next
  priority: optional priority to solve collisions between multiple paths. Min value is used across entire chain
  }
  */
  match(token, context, editor) {
    return {
      next: this.next
    };
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/components/conditional_proxy.ts":
/*!*****************************************************************!*\
  !*** ./public/lib/autocomplete/components/conditional_proxy.ts ***!
  \*****************************************************************/
/*! exports provided: ConditionalProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionalProxy", function() { return ConditionalProxy; });
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared_component */ "./public/lib/autocomplete/components/shared_component.ts");
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


class ConditionalProxy extends _shared_component__WEBPACK_IMPORTED_MODULE_0__["SharedComponent"] {
  constructor(predicate, delegate) {
    super('__condition');
    _defineProperty(this, "predicate", void 0);
    _defineProperty(this, "delegate", void 0);
    this.predicate = predicate;
    this.delegate = delegate;
  }
  getTerms(context, editor) {
    if (this.predicate(context, editor)) {
      return this.delegate.getTerms(context, editor);
    } else {
      return null;
    }
  }
  match(token, context, editor) {
    if (this.predicate(context, editor)) {
      return this.delegate.match(token, context, editor);
    } else {
      return false;
    }
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/components/constant_component.ts":
/*!******************************************************************!*\
  !*** ./public/lib/autocomplete/components/constant_component.ts ***!
  \******************************************************************/
/*! exports provided: ConstantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantComponent", function() { return ConstantComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared_component */ "./public/lib/autocomplete/components/shared_component.ts");
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



class ConstantComponent extends _shared_component__WEBPACK_IMPORTED_MODULE_1__["SharedComponent"] {
  constructor(name, parent, options) {
    super(name, parent);
    _defineProperty(this, "options", void 0);
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(options)) {
      options = [options];
    }
    this.options = options || [name];
  }
  getTerms(context, editor) {
    return this.options;
  }
  addOption(options) {
    if (!Array.isArray(options)) {
      options = [options];
    }
    this.options.push(...options);
    this.options = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniq(this.options);
  }
  match(token, context, editor) {
    if (token !== this.name) {
      return null;
    }
    return super.match(token, context, editor);
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/components/field_autocomplete_component.ts":
/*!****************************************************************************!*\
  !*** ./public/lib/autocomplete/components/field_autocomplete_component.ts ***!
  \****************************************************************************/
/*! exports provided: FieldAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldAutocompleteComponent", function() { return FieldAutocompleteComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mappings_mappings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mappings/mappings */ "./public/lib/mappings/mappings.ts");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list_component */ "./public/lib/autocomplete/components/list_component.ts");
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




function FieldGenerator(context) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(Object(_mappings_mappings__WEBPACK_IMPORTED_MODULE_1__["getFields"])(context.indices, context.types), function (field) {
    return {
      name: field.name,
      meta: field.type
    };
  });
}
class FieldAutocompleteComponent extends _list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"] {
  constructor(name, parent, multiValued) {
    super(name, FieldGenerator, parent, multiValued);
  }
  validateTokens(tokens) {
    if (!this.multiValued && tokens.length > 1) {
      return false;
    }
    return !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(tokens, function (token) {
      return token.match(/[^\w.?*]/);
    });
  }
  getDefaultTermMeta() {
    return 'field';
  }
  getContextKey() {
    return 'fields';
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/components/full_request_component.ts":
/*!**********************************************************************!*\
  !*** ./public/lib/autocomplete/components/full_request_component.ts ***!
  \**********************************************************************/
/*! exports provided: FullRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullRequestComponent", function() { return FullRequestComponent; });
/* harmony import */ var _constant_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant_component */ "./public/lib/autocomplete/components/constant_component.ts");
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


class FullRequestComponent extends _constant_component__WEBPACK_IMPORTED_MODULE_0__["ConstantComponent"] {
  constructor(name, parent, template) {
    super(name, parent);
    this.template = template;
    _defineProperty(this, "name", void 0);
    this.name = name;
  }
  getTerms() {
    return [{
      name: this.name,
      snippet: this.template
    }];
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/components/global_only_component.ts":
/*!*********************************************************************!*\
  !*** ./public/lib/autocomplete/components/global_only_component.ts ***!
  \*********************************************************************/
/*! exports provided: GlobalOnlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalOnlyComponent", function() { return GlobalOnlyComponent; });
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared_component */ "./public/lib/autocomplete/components/shared_component.ts");
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


class GlobalOnlyComponent extends _shared_component__WEBPACK_IMPORTED_MODULE_0__["SharedComponent"] {
  getTerms() {
    return null;
  }
  match(token, context) {
    const result = {
      next: []
    };

    // try to link to GLOBAL rules
    const globalRules = context.globalComponentResolver(token, false);
    if (globalRules) {
      result.next.push.apply(result.next, globalRules);
    }
    if (result.next.length) {
      return result;
    }
    // just loop back to us
    result.next = [this];
    return result;
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/components/id_autocomplete_component.ts":
/*!*************************************************************************!*\
  !*** ./public/lib/autocomplete/components/id_autocomplete_component.ts ***!
  \*************************************************************************/
/*! exports provided: IdAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdAutocompleteComponent", function() { return IdAutocompleteComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared_component */ "./public/lib/autocomplete/components/shared_component.ts");
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



class IdAutocompleteComponent extends _shared_component__WEBPACK_IMPORTED_MODULE_1__["SharedComponent"] {
  constructor(name, parent, multi = false) {
    super(name, parent);
    _defineProperty(this, "multi_match", void 0);
    this.multi_match = multi;
  }
  match(token, context, editor) {
    if (!token) {
      return null;
    }
    if (!this.multi_match && Array.isArray(token)) {
      return null;
    }
    token = Array.isArray(token) ? token : [token];
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(token, function (t) {
      return t.match(/[\/,]/);
    })) {
      return null;
    }
    const r = super.match(token, context, editor);
    if (r) {
      r.context_values = r.context_values || {};
      r.context_values.id = token;
    }
    return r;
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/components/index.ts":
/*!*****************************************************!*\
  !*** ./public/lib/autocomplete/components/index.ts ***!
  \*****************************************************/
/*! exports provided: AutocompleteComponent, SharedComponent, ConstantComponent, ListComponent, SimpleParamComponent, ConditionalProxy, GlobalOnlyComponent, ObjectComponent, AcceptEndpointComponent, URL_PATH_END_MARKER, UrlPatternMatcher, IndexAutocompleteComponent, FieldAutocompleteComponent, TypeAutocompleteComponent, IdAutocompleteComponent, TemplateAutocompleteComponent, UsernameAutocompleteComponent, ParamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autocomplete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete_component */ "./public/lib/autocomplete/components/autocomplete_component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return _autocomplete_component__WEBPACK_IMPORTED_MODULE_0__["AutocompleteComponent"]; });

/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared_component */ "./public/lib/autocomplete/components/shared_component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedComponent", function() { return _shared_component__WEBPACK_IMPORTED_MODULE_1__["SharedComponent"]; });

/* harmony import */ var _constant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant_component */ "./public/lib/autocomplete/components/constant_component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConstantComponent", function() { return _constant_component__WEBPACK_IMPORTED_MODULE_2__["ConstantComponent"]; });

/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list_component */ "./public/lib/autocomplete/components/list_component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return _list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]; });

/* harmony import */ var _simple_param_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple_param_component */ "./public/lib/autocomplete/components/simple_param_component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleParamComponent", function() { return _simple_param_component__WEBPACK_IMPORTED_MODULE_4__["SimpleParamComponent"]; });

/* harmony import */ var _conditional_proxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conditional_proxy */ "./public/lib/autocomplete/components/conditional_proxy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConditionalProxy", function() { return _conditional_proxy__WEBPACK_IMPORTED_MODULE_5__["ConditionalProxy"]; });

/* harmony import */ var _global_only_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global_only_component */ "./public/lib/autocomplete/components/global_only_component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalOnlyComponent", function() { return _global_only_component__WEBPACK_IMPORTED_MODULE_6__["GlobalOnlyComponent"]; });

/* harmony import */ var _object_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./object_component */ "./public/lib/autocomplete/components/object_component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectComponent", function() { return _object_component__WEBPACK_IMPORTED_MODULE_7__["ObjectComponent"]; });

/* harmony import */ var _accept_endpoint_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accept_endpoint_component */ "./public/lib/autocomplete/components/accept_endpoint_component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AcceptEndpointComponent", function() { return _accept_endpoint_component__WEBPACK_IMPORTED_MODULE_8__["AcceptEndpointComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "URL_PATH_END_MARKER", function() { return _accept_endpoint_component__WEBPACK_IMPORTED_MODULE_8__["URL_PATH_END_MARKER"]; });

/* harmony import */ var _url_pattern_matcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./url_pattern_matcher */ "./public/lib/autocomplete/components/url_pattern_matcher.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlPatternMatcher", function() { return _url_pattern_matcher__WEBPACK_IMPORTED_MODULE_9__["UrlPatternMatcher"]; });

/* harmony import */ var _index_autocomplete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index_autocomplete_component */ "./public/lib/autocomplete/components/index_autocomplete_component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexAutocompleteComponent", function() { return _index_autocomplete_component__WEBPACK_IMPORTED_MODULE_10__["IndexAutocompleteComponent"]; });

/* harmony import */ var _field_autocomplete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./field_autocomplete_component */ "./public/lib/autocomplete/components/field_autocomplete_component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldAutocompleteComponent", function() { return _field_autocomplete_component__WEBPACK_IMPORTED_MODULE_11__["FieldAutocompleteComponent"]; });

/* harmony import */ var _type_autocomplete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./type_autocomplete_component */ "./public/lib/autocomplete/components/type_autocomplete_component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeAutocompleteComponent", function() { return _type_autocomplete_component__WEBPACK_IMPORTED_MODULE_12__["TypeAutocompleteComponent"]; });

/* harmony import */ var _id_autocomplete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./id_autocomplete_component */ "./public/lib/autocomplete/components/id_autocomplete_component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdAutocompleteComponent", function() { return _id_autocomplete_component__WEBPACK_IMPORTED_MODULE_13__["IdAutocompleteComponent"]; });

/* harmony import */ var _template_autocomplete_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./template_autocomplete_component */ "./public/lib/autocomplete/components/template_autocomplete_component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateAutocompleteComponent", function() { return _template_autocomplete_component__WEBPACK_IMPORTED_MODULE_14__["TemplateAutocompleteComponent"]; });

/* harmony import */ var _username_autocomplete_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./username_autocomplete_component */ "./public/lib/autocomplete/components/username_autocomplete_component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsernameAutocompleteComponent", function() { return _username_autocomplete_component__WEBPACK_IMPORTED_MODULE_15__["UsernameAutocompleteComponent"]; });

/* harmony import */ var _param_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./param_component */ "./public/lib/autocomplete/components/param_component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParamComponent", function() { return _param_component__WEBPACK_IMPORTED_MODULE_16__["ParamComponent"]; });

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

/***/ "./public/lib/autocomplete/components/index_autocomplete_component.ts":
/*!****************************************************************************!*\
  !*** ./public/lib/autocomplete/components/index_autocomplete_component.ts ***!
  \****************************************************************************/
/*! exports provided: IndexAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexAutocompleteComponent", function() { return IndexAutocompleteComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mappings_mappings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mappings/mappings */ "./public/lib/mappings/mappings.ts");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list_component */ "./public/lib/autocomplete/components/list_component.ts");
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




function nonValidIndexType(token) {
  return !(token === '_all' || token[0] !== '_');
}
class IndexAutocompleteComponent extends _list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"] {
  constructor(name, parent, multiValued) {
    super(name, _mappings_mappings__WEBPACK_IMPORTED_MODULE_1__["getIndices"], parent, multiValued);
  }
  validateTokens(tokens) {
    if (!this.multiValued && tokens.length > 1) {
      return false;
    }
    return !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(tokens, nonValidIndexType);
  }
  getDefaultTermMeta() {
    return 'index';
  }
  getContextKey() {
    return 'indices';
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/components/list_component.ts":
/*!**************************************************************!*\
  !*** ./public/lib/autocomplete/components/list_component.ts ***!
  \**************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared_component */ "./public/lib/autocomplete/components/shared_component.ts");
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



/** A component that suggests one of the give options, but accepts anything */
class ListComponent extends _shared_component__WEBPACK_IMPORTED_MODULE_1__["SharedComponent"] {
  constructor(name, list, parent, multiValued, allowNonValidValues) {
    super(name, parent);
    _defineProperty(this, "listGenerator", void 0);
    _defineProperty(this, "multiValued", void 0);
    _defineProperty(this, "allowNonValidValues", void 0);
    this.listGenerator = Array.isArray(list) ? function () {
      return list;
    } : list;
    this.multiValued = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isUndefined(multiValued) ? true : multiValued;
    this.allowNonValidValues = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isUndefined(allowNonValidValues) ? false : allowNonValidValues;
  }
  getTerms(context, editor) {
    if (!this.multiValued && context.otherTokenValues) {
      // already have a value -> no suggestions
      return [];
    }
    let alreadySet = context.otherTokenValues || [];
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(alreadySet)) {
      alreadySet = [alreadySet];
    }
    let ret = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.difference(this.listGenerator(context, editor), alreadySet);
    if (this.getDefaultTermMeta()) {
      const meta = this.getDefaultTermMeta();
      ret = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(ret, function (term) {
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(term)) {
          term = {
            name: term
          };
        }
        return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(term, {
          meta
        });
      });
    }
    return ret;
  }
  validateTokens(tokens) {
    if (!this.multiValued && tokens.length > 1) {
      return false;
    }

    // verify we have all tokens
    const list = this.listGenerator();
    const notFound = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.some(tokens, function (token) {
      return list.indexOf(token) === -1;
    });
    if (notFound) {
      return false;
    }
    return true;
  }
  getContextKey() {
    return this.name;
  }
  getDefaultTermMeta() {
    return this.name;
  }
  match(token, context, editor) {
    if (!Array.isArray(token)) {
      token = [token];
    }
    if (!this.allowNonValidValues && !this.validateTokens(token)) {
      return null;
    }
    const result = super.match(token, context, editor);
    if (result) {
      result.context_values = result.context_values || {};
      result.context_values[this.getContextKey()] = token;
    }
    return result;
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/components/object_component.ts":
/*!****************************************************************!*\
  !*** ./public/lib/autocomplete/components/object_component.ts ***!
  \****************************************************************/
/*! exports provided: ObjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectComponent", function() { return ObjectComponent; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./public/lib/autocomplete/components/index.ts");
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
 * @param constants list of components that represent constant keys
 * @param patternsAndWildCards list of components that represent patterns and should be matched only if
 * there is no constant matches
 */
class ObjectComponent extends _index__WEBPACK_IMPORTED_MODULE_0__["SharedComponent"] {
  constructor(name, constants, patternsAndWildCards) {
    super(name);
    _defineProperty(this, "constants", void 0);
    _defineProperty(this, "patternsAndWildCards", void 0);
    this.constants = constants;
    this.patternsAndWildCards = patternsAndWildCards;
  }
  getTerms(context, editor) {
    const options = [];
    this.constants.forEach(component => {
      options.push(...component.getTerms(context, editor));
    });
    this.patternsAndWildCards.forEach(component => {
      const option = component.getTerms(context, editor);
      if (option) {
        options.push(...option);
      }
    });
    return options;
  }
  match(token, context, editor) {
    const result = {
      next: []
    };
    this.constants.forEach(component => {
      const componentResult = component.match(token, context, editor);
      if (componentResult && componentResult.next) {
        result.next.push(...componentResult.next);
      }
    });

    // try to link to GLOBAL rules
    const globalRules = context.globalComponentResolver(token, false);
    if (globalRules) {
      result.next.push.apply(result.next, globalRules);
    }
    if (result.next.length) {
      return result;
    }
    this.patternsAndWildCards.forEach(component => {
      const componentResult = component.match(token, context, editor);
      if (componentResult && componentResult.next) {
        result.next.push(...componentResult.next);
      }
    });
    return result;
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/components/param_component.ts":
/*!***************************************************************!*\
  !*** ./public/lib/autocomplete/components/param_component.ts ***!
  \***************************************************************/
/*! exports provided: ParamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamComponent", function() { return ParamComponent; });
/* harmony import */ var _constant_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant_component */ "./public/lib/autocomplete/components/constant_component.ts");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */


class ParamComponent extends _constant_component__WEBPACK_IMPORTED_MODULE_0__["ConstantComponent"] {
  constructor(name, parent, description) {
    super(name, parent);
    _defineProperty(this, "description", void 0);
    this.description = description;
  }
  getTerms() {
    const t = {
      name: this.name
    };
    if (this.description === '__flag__') {
      t.meta = 'flag';
    } else {
      t.meta = 'param';
      t.insertValue = this.name + '=';
    }
    return [t];
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/components/shared_component.ts":
/*!****************************************************************!*\
  !*** ./public/lib/autocomplete/components/shared_component.ts ***!
  \****************************************************************/
/*! exports provided: SharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponent", function() { return SharedComponent; });
/* harmony import */ var _autocomplete_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete_component */ "./public/lib/autocomplete/components/autocomplete_component.ts");
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


class SharedComponent extends _autocomplete_component__WEBPACK_IMPORTED_MODULE_0__["AutocompleteComponent"] {
  constructor(name, parent) {
    super(name);
    _defineProperty(this, "_nextDict", void 0);
    _defineProperty(this, "_parent", void 0);
    this._nextDict = {};
    if (parent) {
      parent.addComponent(this);
    }
    // for debugging purposes
    this._parent = parent;
  }
  /* return the first component with a given name */
  getComponent(name) {
    return (this._nextDict[name] || [undefined])[0];
  }
  addComponent(component) {
    const current = this._nextDict[component.name] || [];
    current.push(component);
    this._nextDict[component.name] = current;
    this.next = [].concat(...Object.values(this._nextDict));
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/components/simple_param_component.ts":
/*!**********************************************************************!*\
  !*** ./public/lib/autocomplete/components/simple_param_component.ts ***!
  \**********************************************************************/
/*! exports provided: SimpleParamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleParamComponent", function() { return SimpleParamComponent; });
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared_component */ "./public/lib/autocomplete/components/shared_component.ts");
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


class SimpleParamComponent extends _shared_component__WEBPACK_IMPORTED_MODULE_0__["SharedComponent"] {
  constructor(name, parent) {
    super(name, parent);
  }
  match(token, context, editor) {
    const result = super.match(token, context, editor);
    if (result) {
      result.context_values = result.context_values || {};
      result.context_values[this.name] = token;
    }
    return result;
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/components/template_autocomplete_component.ts":
/*!*******************************************************************************!*\
  !*** ./public/lib/autocomplete/components/template_autocomplete_component.ts ***!
  \*******************************************************************************/
/*! exports provided: TemplateAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateAutocompleteComponent", function() { return TemplateAutocompleteComponent; });
/* harmony import */ var _mappings_mappings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mappings/mappings */ "./public/lib/mappings/mappings.ts");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list_component */ "./public/lib/autocomplete/components/list_component.ts");
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



class TemplateAutocompleteComponent extends _list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"] {
  constructor(name, parent) {
    super(name, _mappings_mappings__WEBPACK_IMPORTED_MODULE_0__["getTemplates"], parent, true, true);
  }
  getContextKey() {
    return 'template';
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/components/type_autocomplete_component.ts":
/*!***************************************************************************!*\
  !*** ./public/lib/autocomplete/components/type_autocomplete_component.ts ***!
  \***************************************************************************/
/*! exports provided: TypeAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeAutocompleteComponent", function() { return TypeAutocompleteComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list_component */ "./public/lib/autocomplete/components/list_component.ts");
/* harmony import */ var _mappings_mappings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mappings/mappings */ "./public/lib/mappings/mappings.ts");
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




function TypeGenerator(context) {
  return Object(_mappings_mappings__WEBPACK_IMPORTED_MODULE_2__["getTypes"])(context.indices);
}
function nonValidIndexType(token) {
  return !(token === '_all' || token[0] !== '_');
}
class TypeAutocompleteComponent extends _list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"] {
  constructor(name, parent, multiValued) {
    super(name, TypeGenerator, parent, multiValued);
  }
  validateTokens(tokens) {
    if (!this.multiValued && tokens.length > 1) {
      return false;
    }
    return !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(tokens, nonValidIndexType);
  }
  getDefaultTermMeta() {
    return 'type';
  }
  getContextKey() {
    return 'types';
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/components/url_pattern_matcher.ts":
/*!*******************************************************************!*\
  !*** ./public/lib/autocomplete/components/url_pattern_matcher.ts ***!
  \*******************************************************************/
/*! exports provided: UrlPatternMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlPatternMatcher", function() { return UrlPatternMatcher; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./public/lib/autocomplete/components/index.ts");
/* harmony import */ var _full_request_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./full_request_component */ "./public/lib/autocomplete/components/full_request_component.ts");
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
 * @param parametrizedComponentFactories a dict of the following structure
 * that will be used as a fall back for pattern parameters (i.e.: {indices})
 * {
 *   indices: function (part, parent) {
 *      return new SharedComponent(part, parent)
 *   }
 * }
 * @constructor
 */
class UrlPatternMatcher {
  // This is not really a component, just a handy container to make iteration logic simpler
  constructor(parametrizedComponentFactories) {
    _defineProperty(this, "methodsData", void 0);
    _defineProperty(this, "getTopLevelComponents", method => {
      const methodRoot = this.methodsData[method];
      if (!methodRoot) {
        return [];
      }
      return methodRoot.rootComponent.next;
    });
    // We'll group endpoints by the methods which are attached to them,
    // to avoid suggesting endpoints that are incompatible with the
    // method that the user has entered.
    this.methodsData = {};
    ['HEAD', 'GET', 'PUT', 'POST', 'DELETE'].forEach(method => {
      this.methodsData[method] = {
        rootComponent: new _index__WEBPACK_IMPORTED_MODULE_1__["SharedComponent"]('ROOT'),
        parametrizedComponentFactories: parametrizedComponentFactories || {
          getComponent: () => {}
        }
      };
    });
  }
  addEndpoint(pattern, endpoint) {
    endpoint.methods.forEach(method => {
      let c;
      let activeComponent = this.methodsData[method].rootComponent;
      if (endpoint.template) {
        new _full_request_component__WEBPACK_IMPORTED_MODULE_2__["FullRequestComponent"](pattern + '[body]', activeComponent, endpoint.template);
      }
      const endpointComponents = endpoint.url_components || {};
      const partList = pattern.split('/');
      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(partList, (part, partIndex) => {
        if (part.search(/^{.+}$/) >= 0) {
          part = part.substr(1, part.length - 2);
          if (activeComponent.getComponent(part)) {
            // we already have something for this, reuse
            activeComponent = activeComponent.getComponent(part);
            return;
          }
          // a new path, resolve.

          if (c = endpointComponents[part]) {
            // endpoint specific. Support list
            if (Array.isArray(c)) {
              c = new _index__WEBPACK_IMPORTED_MODULE_1__["ListComponent"](part, c, activeComponent);
            } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(c)) {
              const objComponent = c;
              if (objComponent.type === 'list') {
                c = new _index__WEBPACK_IMPORTED_MODULE_1__["ListComponent"](part, objComponent.list, activeComponent, objComponent.multiValued, objComponent.allow_non_valid);
              }
            } else {
              // eslint-disable-next-line no-console
              console.warn('incorrectly configured url component ', part, ' in endpoint', endpoint);
              c = new _index__WEBPACK_IMPORTED_MODULE_1__["SharedComponent"](part);
            }
          } else if (this.methodsData[method].parametrizedComponentFactories.getComponent(part)) {
            // c is a f
            c = this.methodsData[method].parametrizedComponentFactories.getComponent(part);
            c = c(part, activeComponent);
          } else {
            // just accept whatever with not suggestions
            c = new _index__WEBPACK_IMPORTED_MODULE_1__["SimpleParamComponent"](part, activeComponent);
          }
          activeComponent = c;
        } else {
          // not pattern
          let lookAhead = part;
          let s;
          for (partIndex++; partIndex < partList.length; partIndex++) {
            s = partList[partIndex];
            if (s.indexOf('{') >= 0) {
              break;
            }
            lookAhead += '/' + s;
          }
          if (activeComponent.getComponent(part)) {
            // we already have something for this, reuse
            activeComponent = activeComponent.getComponent(part);
            activeComponent.addOption(lookAhead);
          } else {
            c = new _index__WEBPACK_IMPORTED_MODULE_1__["ConstantComponent"](part, activeComponent, lookAhead);
            activeComponent = c;
          }
        }
      });
      // mark end of endpoint path
      new _index__WEBPACK_IMPORTED_MODULE_1__["AcceptEndpointComponent"](endpoint, activeComponent);
    });
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/components/username_autocomplete_component.ts":
/*!*******************************************************************************!*\
  !*** ./public/lib/autocomplete/components/username_autocomplete_component.ts ***!
  \*******************************************************************************/
/*! exports provided: UsernameAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameAutocompleteComponent", function() { return UsernameAutocompleteComponent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mappings_mappings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mappings/mappings */ "./public/lib/mappings/mappings.ts");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list_component */ "./public/lib/autocomplete/components/list_component.ts");
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




function nonValidUsernameType(token) {
  return token[0] === '_';
}
class UsernameAutocompleteComponent extends _list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"] {
  constructor(name, parent, multiValued) {
    super(name, _mappings_mappings__WEBPACK_IMPORTED_MODULE_1__["getIndices"], parent, multiValued);
  }
  validateTokens(tokens) {
    if (!this.multiValued && tokens.length > 1) {
      return false;
    }
    return !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(tokens, nonValidUsernameType);
  }
  getDefaultTermMeta() {
    return 'username';
  }
  getContextKey() {
    return 'username';
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/engine.ts":
/*!*******************************************!*\
  !*** ./public/lib/autocomplete/engine.ts ***!
  \*******************************************/
/*! exports provided: wrapComponentWithDefaults, WalkingState, walkTokenPath, populateContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapComponentWithDefaults", function() { return wrapComponentWithDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkingState", function() { return WalkingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walkTokenPath", function() { return walkTokenPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populateContext", function() { return populateContext; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
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


function wrapComponentWithDefaults(component, defaults) {
  const originalGetTerms = component.getTerms;
  component.getTerms = function (context, editor) {
    let result = originalGetTerms.call(component, context, editor);
    if (!result) {
      return result;
    }
    result = result.map(term => {
      if (typeof term !== 'object') {
        term = {
          name: term
        };
      }
      return {
        ...defaults,
        ...term
      };
    });
    return result;
  };
  return component;
}
const tracer = function (...args) {
  if (window.engine_trace) {
    // eslint-disable-next-line no-console
    console.log(...args);
  }
};
function passThroughContext(context, extensionList) {
  const result = Object.create(context);
  if (extensionList) {
    Object.assign(result, ...extensionList);
  }
  return result;
}
class WalkingState {
  constructor(parentName, components, contextExtensionList, depth = 0, priority) {
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "parentName", void 0);
    _defineProperty(this, "components", void 0);
    _defineProperty(this, "contextExtensionList", void 0);
    _defineProperty(this, "depth", void 0);
    _defineProperty(this, "priority", void 0);
    this.parentName = parentName;
    this.components = components;
    this.contextExtensionList = contextExtensionList;
    this.depth = depth;
    this.priority = priority;
  }
}
function walkTokenPath(tokenPath, walkingStates, context, editor) {
  if (!tokenPath || tokenPath.length === 0) {
    return walkingStates;
  }
  const token = tokenPath[0];
  const nextWalkingStates = [];
  tracer('starting token evaluation [' + token + ']');
  walkingStates.forEach(ws => {
    const contextForState = passThroughContext(context, ws.contextExtensionList);
    ws.components.forEach(component => {
      tracer('evaluating [' + token + '] with [' + component.name + ']', component);
      const result = component.match(token, contextForState, editor);
      if (result && Object.keys(result).length !== 0) {
        tracer('matched [' + token + '] with:', result);
        let next;
        let extensionList;
        if (result.next && !Array.isArray(result.next)) {
          next = [result.next];
        } else {
          next = result.next;
        }
        if (result.context_values) {
          extensionList = [];
          extensionList = [...extensionList, ...ws.contextExtensionList];
          extensionList.push(result.context_values);
        } else {
          extensionList = ws.contextExtensionList;
        }
        let priority = ws.priority;
        if (typeof result.priority === 'number') {
          if (typeof priority === 'number') {
            priority = Math.min(priority, result.priority);
          } else {
            priority = result.priority;
          }
        }
        nextWalkingStates.push(new WalkingState(component.name, next, extensionList, ws.depth + 1, priority));
      }
    });
  });
  if (nextWalkingStates.length === 0) {
    // no where to go, still return context variables returned so far..
    return walkingStates.map(ws => {
      var _ws$name;
      return new WalkingState((_ws$name = ws.name) !== null && _ws$name !== void 0 ? _ws$name : '', [], ws.contextExtensionList);
    });
  }
  return walkTokenPath(tokenPath.slice(1), nextWalkingStates, context, editor);
}
function populateContext(tokenPath, context, editor, includeAutoComplete, components) {
  let walkStates = walkTokenPath(tokenPath, [new WalkingState('ROOT', components, [])], context, editor);
  if (includeAutoComplete) {
    let autoCompleteSet = [];
    walkStates.forEach(ws => {
      const contextForState = passThroughContext(context, ws.contextExtensionList);
      ws.components.forEach(component => {
        const terms = component.getTerms(contextForState, editor);
        if (terms) {
          terms.forEach(term => {
            if (typeof term !== 'object') {
              term = {
                name: term
              };
            }
            autoCompleteSet.push(term);
          });
        }
      });
    });
    autoCompleteSet = [...new Set(autoCompleteSet)];
    context.autoCompleteSet = autoCompleteSet;
  }

  // apply what values were set so far to context, selecting the deepest on which sets the context
  if (walkStates.length !== 0) {
    let wsToUse;
    walkStates = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(walkStates, function (ws) {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(ws.priority) ? ws.priority : Number.MAX_VALUE;
    });
    wsToUse = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(walkStates, function (ws) {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(ws.components);
    });
    if (!wsToUse && walkStates.length > 1 && !includeAutoComplete) {
      // eslint-disable-next-line no-console
      console.info("more then one context active for current path, but autocomplete isn't requested", walkStates);
    }
    if (!wsToUse) {
      wsToUse = walkStates[0];
    }
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(wsToUse.contextExtensionList, function (extension) {
      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign(context, extension);
    });
  }
}

/***/ }),

/***/ "./public/lib/autocomplete/get_endpoint_from_position.ts":
/*!***************************************************************!*\
  !*** ./public/lib/autocomplete/get_endpoint_from_position.ts ***!
  \***************************************************************/
/*! exports provided: getEndpointFromPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndpointFromPosition", function() { return getEndpointFromPosition; });
/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete */ "./public/lib/autocomplete/autocomplete.ts");
/* harmony import */ var _osd_osd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../osd/osd */ "./public/lib/osd/osd.ts");
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine */ "./public/lib/autocomplete/engine.ts");
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

// @ts-ignore

function getEndpointFromPosition(editor, pos, parser) {
  const lineValue = editor.getLineValue(pos.lineNumber);
  const context = {
    ...Object(_autocomplete__WEBPACK_IMPORTED_MODULE_0__["getCurrentMethodAndTokenPaths"])(editor, {
      column: lineValue.length + 1 /* Go to the very end of the line */,
      lineNumber: pos.lineNumber
    }, parser, true)
  };
  const components = Object(_osd_osd__WEBPACK_IMPORTED_MODULE_1__["getTopLevelUrlCompleteComponents"])(context.method);
  Object(_engine__WEBPACK_IMPORTED_MODULE_2__["populateContext"])(context.urlTokenPath, context, editor, true, components);
  return context.endpoint;
}

/***/ }),

/***/ "./public/lib/autocomplete/url_params.ts":
/*!***********************************************!*\
  !*** ./public/lib/autocomplete/url_params.ts ***!
  \***********************************************/
/*! exports provided: UrlParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlParams", function() { return UrlParams; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./public/lib/autocomplete/components/index.ts");
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


class UrlParams {
  constructor(description, defaults) {
    _defineProperty(this, "rootComponent", void 0);
    // This is not really a component, just a handy container to make iteration logic simpler
    this.rootComponent = new _components__WEBPACK_IMPORTED_MODULE_0__["SharedComponent"]('ROOT');
    if (defaults === undefined) {
      defaults = {
        pretty: '__flag__',
        format: ['json', 'yaml'],
        filter_path: ''
      };
    }
    description = {
      ...(description || {}),
      ...defaults
    };
    Object.entries(description).forEach(([param, pDescription]) => {
      const component = new _components__WEBPACK_IMPORTED_MODULE_0__["ParamComponent"](param, this.rootComponent, pDescription);
      if (Array.isArray(pDescription)) {
        new _components__WEBPACK_IMPORTED_MODULE_0__["ListComponent"](param, pDescription, component);
      } else if (pDescription === '__flag__') {
        new _components__WEBPACK_IMPORTED_MODULE_0__["ListComponent"](param, ['true', 'false'], component);
      }
    });
  }
  getTopLevelComponents() {
    return this.rootComponent.next;
  }
}

/***/ }),

/***/ "./public/lib/local_storage_object_client/create.ts":
/*!**********************************************************!*\
  !*** ./public/lib/local_storage_object_client/create.ts ***!
  \**********************************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _common_text_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/text_object */ "./common/text_object.ts");
/* harmony import */ var _local_storage_object_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local_storage_object_client */ "./public/lib/local_storage_object_client/local_storage_object_client.ts");
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



const create = storage => {
  return {
    text: new _local_storage_object_client__WEBPACK_IMPORTED_MODULE_1__["LocalObjectStorage"](storage, _common_text_object__WEBPACK_IMPORTED_MODULE_0__["textObjectTypeName"])
  };
};

/***/ }),

/***/ "./public/lib/local_storage_object_client/index.ts":
/*!*********************************************************!*\
  !*** ./public/lib/local_storage_object_client/index.ts ***!
  \*********************************************************/
/*! exports provided: create, LocalObjectStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./public/lib/local_storage_object_client/create.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create__WEBPACK_IMPORTED_MODULE_0__["create"]; });

/* harmony import */ var _local_storage_object_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local_storage_object_client */ "./public/lib/local_storage_object_client/local_storage_object_client.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalObjectStorage", function() { return _local_storage_object_client__WEBPACK_IMPORTED_MODULE_1__["LocalObjectStorage"]; });

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

/***/ "./public/lib/local_storage_object_client/local_storage_object_client.ts":
/*!*******************************************************************************!*\
  !*** ./public/lib/local_storage_object_client/local_storage_object_client.ts ***!
  \*******************************************************************************/
/*! exports provided: LocalObjectStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalObjectStorage", function() { return LocalObjectStorage; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "../../../node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
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


class LocalObjectStorage {
  constructor(client, type) {
    this.client = client;
    _defineProperty(this, "prefix", void 0);
    this.prefix = `console_local_${type}`;
  }
  async create(obj) {
    const id = uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4();
    const newObj = {
      id,
      ...obj
    };
    this.client.set(`${this.prefix}_${id}`, newObj);
    return newObj;
  }
  async update(obj) {
    this.client.set(`${this.prefix}_${obj.id}`, obj);
  }
  async findAll() {
    const allLocalKeys = this.client.keys().filter(key => {
      return key.includes(this.prefix);
    });
    const result = [];
    for (const key of allLocalKeys) {
      result.push(this.client.get(key));
    }
    return result;
  }
}

/***/ }),

/***/ "./public/lib/mappings/mappings.ts":
/*!*****************************************!*\
  !*** ./public/lib/mappings/mappings.ts ***!
  \*****************************************/
/*! exports provided: POLL_INTERVAL, expandAliases, getTemplates, getFields, getTypes, getIndices, loadMappings, loadAliases, clear, clearSubscriptions, retrieveAutoCompleteInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POLL_INTERVAL", function() { return POLL_INTERVAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandAliases", function() { return expandAliases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplates", function() { return getTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFields", function() { return getFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypes", function() { return getTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndices", function() { return getIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMappings", function() { return loadMappings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAliases", function() { return loadAliases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSubscriptions", function() { return clearSubscriptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveAutoCompleteInfo", function() { return retrieveAutoCompleteInfo; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _opensearch_opensearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../opensearch/opensearch */ "./public/lib/opensearch/opensearch.ts");
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



const SETTING_KEY_TO_PATH_MAP = {
  fields: '_mapping',
  indices: '_aliases',
  templates: '_template'
};

// NOTE: If this value ever changes to be a few seconds or less, it might introduce flakiness
// due to timing issues in our app.js tests.
const POLL_INTERVAL = 60000;
let pollTimeoutId;
let perIndexTypes = {};
let perAliasIndices = {};
let templates = [];
function expandAliases(indicesOrAliases) {
  // takes a list of indices or aliases or a string which may be either and returns a list of indices
  // returns a list for multiple values or a string for a single.

  if (!indicesOrAliases) {
    return indicesOrAliases;
  }
  if (typeof indicesOrAliases === 'string') {
    indicesOrAliases = [indicesOrAliases];
  }
  const mappedIndicesOrAliases = indicesOrAliases.map(iOrA => {
    if (perAliasIndices[iOrA]) {
      return perAliasIndices[iOrA];
    }
    return [iOrA];
  });
  let ret = [].concat(...mappedIndicesOrAliases);
  ret.sort();
  ret = ret.reduce((result, value, index, array) => {
    const last = array[index - 1];
    if (last !== value) {
      result.push(value);
    }
    return result;
  }, []);
  return ret.length > 1 ? ret : ret[0];
}
function getTemplates() {
  return [...templates];
}
function getFields(indices, types) {
  // get fields for indices and types. Both can be a list, a string or null (meaning all).
  let ret = [];
  indices = expandAliases(indices);
  if (typeof indices === 'string') {
    const typeDict = perIndexTypes[indices];
    if (!typeDict) {
      return [];
    }
    if (typeof types === 'string') {
      const f = typeDict[types];
      ret = f ? f : [];
    } else {
      // filter what we need
      Object.entries(typeDict).forEach(([type, fields]) => {
        if (!types || types.length === 0 || types.includes(type)) {
          ret.push(fields);
        }
      });
    }
  } else {
    // multi index mode.
    Object.keys(perIndexTypes).forEach(index => {
      if (!indices || indices.length === 0 || indices.includes(index)) {
        ret.push(getFields(index, types));
      }
    });
  }
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniqBy(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.flatten(ret), f => f.name + ':' + f.type);
}
function getTypes(indices) {
  let ret = [];
  indices = expandAliases(indices);
  if (typeof indices === 'string') {
    const typeDict = perIndexTypes[indices];
    if (!typeDict) {
      return [];
    }

    // filter what we need
    if (Array.isArray(typeDict)) {
      typeDict.forEach(type => {
        ret.push(type);
      });
    } else if (typeof typeDict === 'object') {
      Object.keys(typeDict).forEach(type => {
        ret.push(type);
      });
    }
  } else {
    // multi index mode.
    Object.keys(perIndexTypes).forEach(index => {
      if (!indices || indices.includes(index)) {
        ret.push(...getTypes(index));
      }
    });
    ret = [].concat.apply([], ret);
  }
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniq(ret);
}
function getIndices(includeAliases) {
  const ret = [];
  Object.keys(perIndexTypes).forEach(index => {
    ret.push(index);
  });
  if (typeof includeAliases === 'undefined' ? true : includeAliases) {
    Object.keys(perAliasIndices).forEach(alias => {
      ret.push(alias);
    });
  }
  return ret;
}
function getFieldNamesFromFieldMapping(fieldName, fieldMapping) {
  if (fieldMapping.enabled === false) {
    return [];
  }
  let nestedFields;
  function applyPathSettings(nestedFieldNames) {
    const pathType = fieldMapping.path || 'full';
    if (pathType === 'full') {
      return nestedFieldNames.map(f => {
        f.name = fieldName + '.' + f.name;
        return f;
      });
    }
    return nestedFieldNames;
  }
  if (fieldMapping.properties) {
    // derived object type
    nestedFields = getFieldNamesFromProperties(fieldMapping.properties);
    return applyPathSettings(nestedFields);
  }
  const fieldType = fieldMapping.type;
  const ret = {
    name: fieldName,
    type: fieldType
  };
  if (fieldMapping.index_name) {
    ret.name = fieldMapping.index_name;
  }
  if (fieldMapping.fields) {
    nestedFields = Object.entries(fieldMapping.fields).flatMap(([nestedFieldName, nestedFieldMapping]) => {
      return getFieldNamesFromFieldMapping(nestedFieldName, nestedFieldMapping);
    });
    nestedFields = applyPathSettings(nestedFields);
    nestedFields.unshift(ret);
    return nestedFields;
  }
  return [ret];
}
function getFieldNamesFromProperties(properties = {}) {
  const fieldList = Object.entries(properties).flatMap(([fieldName, fieldMapping]) => {
    return getFieldNamesFromFieldMapping(fieldName, fieldMapping);
  });

  // deduping
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniqBy(fieldList, function (f) {
    return f.name + ':' + f.type;
  });
}
function loadTemplates(templatesObject = {}) {
  templates = Object.keys(templatesObject);
}
function loadMappings(mappings) {
  perIndexTypes = {};
  if (mappings === '{}') return;
  Object.entries(mappings).forEach(([index, indexMapping]) => {
    const normalizedIndexMappings = {};

    // Migrate 1.0.0 mappings. This format has changed, so we need to extract the underlying mapping.
    if (indexMapping.mappings && Object.keys(indexMapping).length === 1) {
      indexMapping = indexMapping.mappings;
    }
    Object.entries(indexMapping).forEach(([typeName, typeMapping]) => {
      if (typeName === 'properties') {
        const fieldList = getFieldNamesFromProperties(typeMapping);
        normalizedIndexMappings[typeName] = fieldList;
      } else {
        normalizedIndexMappings[typeName] = [];
      }
    });
    perIndexTypes[index] = normalizedIndexMappings;
  });
}
function loadAliases(aliases) {
  perAliasIndices = {};
  Object.entries(aliases).forEach(([index, indexAliases]) => {
    // verify we have an index defined. useful when mapping loading is disabled
    perIndexTypes[index] = perIndexTypes[index] || {};
    Object.keys(indexAliases.aliases || {}).forEach(alias => {
      if (alias === index) {
        return;
      } // alias which is identical to index means no index.
      let curAliases = perAliasIndices[alias];
      if (!curAliases) {
        curAliases = [];
        perAliasIndices[alias] = curAliases;
      }
      curAliases.push(index);
    });
  });
  perAliasIndices._all = getIndices(false);
}
function clear() {
  perIndexTypes = {};
  perAliasIndices = {};
  templates = [];
}
function retrieveSettings(http, settingsKey, settingsToRetrieve, dataSourceId) {
  // Fetch autocomplete info if setting is set to true, and if user has made changes.
  if (settingsToRetrieve[settingsKey] === true) {
    return _opensearch_opensearch__WEBPACK_IMPORTED_MODULE_1__["send"](http, 'GET', SETTING_KEY_TO_PATH_MAP[settingsKey], null, dataSourceId);
  } else {
    // If the user doesn't want autocomplete suggestions, then clear any that exist
    return Promise.resolve();
  }
}

// Retrieve all selected settings by default.
// TODO: We should refactor this to be easier to consume. Ideally this function should retrieve
// whatever settings are specified, otherwise just use the saved settings. This requires changing
// the behavior to not *clear* whatever settings have been unselected, but it's hard to tell if
// this is possible without altering the autocomplete behavior. These are the scenarios we need to
// support:
//   1. Manual refresh. Specify what we want. Fetch specified, leave unspecified alone.
//   2. Changed selection and saved: Specify what we want. Fetch changed and selected, leave
//      unchanged alone (both selected and unselected).
//   3. Poll: Use saved. Fetch selected. Ignore unselected.

function clearSubscriptions() {
  if (pollTimeoutId) {
    clearTimeout(pollTimeoutId);
  }
}

// Type guard function
function isHttpResponse(object) {
  return object && typeof object === 'object' && 'body' in object;
}
const retrieveMappings = async (http, settingsToRetrieve, dataSourceId) => {
  const response = await retrieveSettings(http, 'fields', settingsToRetrieve, dataSourceId);
  if (isHttpResponse(response) && response.body) {
    const mappings = response.body;
    const maxMappingSize = Object.keys(mappings).length > 10 * 1024 * 1024;
    let mappingsResponse;
    if (maxMappingSize) {
      // eslint-disable-next-line no-console
      console.warn(`Mapping size is larger than 10MB (${Object.keys(mappings).length / 1024 / 1024} MB). Ignoring...`);
      mappingsResponse = '{}';
    } else {
      mappingsResponse = mappings;
    }
    loadMappings(mappingsResponse);
  }
};
const retrieveAliases = async (http, settingsToRetrieve, dataSourceId) => {
  const response = await retrieveSettings(http, 'indices', settingsToRetrieve, dataSourceId);
  if (isHttpResponse(response) && response.body) {
    const aliases = response.body;
    loadAliases(aliases);
  }
};
const retrieveTemplates = async (http, settingsToRetrieve, dataSourceId) => {
  const response = await retrieveSettings(http, 'templates', settingsToRetrieve, dataSourceId);
  if (isHttpResponse(response) && response.body) {
    const resTemplates = response.body;
    loadTemplates(resTemplates);
  }
};

/**
 *
 * @param settings Settings A way to retrieve the current settings
 * @param settingsToRetrieve any
 */
function retrieveAutoCompleteInfo(http, settings, settingsToRetrieve, dataSourceId) {
  clearSubscriptions();
  Promise.allSettled([retrieveMappings(http, settingsToRetrieve, dataSourceId), retrieveAliases(http, settingsToRetrieve, dataSourceId), retrieveTemplates(http, settingsToRetrieve, dataSourceId)]).then(() => {
    // Schedule next request.
    pollTimeoutId = setTimeout(() => {
      // This looks strange/inefficient, but it ensures correct behavior because we don't want to send
      // a scheduled request if the user turns off polling.
      if (settings.getPolling()) {
        retrieveAutoCompleteInfo(http, settings, settings.getAutocomplete(), dataSourceId);
      }
    }, POLL_INTERVAL);
  });
}

/***/ }),

/***/ "./public/lib/opensearch/opensearch.ts":
/*!*********************************************!*\
  !*** ./public/lib/opensearch/opensearch.ts ***!
  \*********************************************/
/*! exports provided: getVersion, getContentType, send, constructOpenSearchUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVersion", function() { return getVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContentType", function() { return getContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructOpenSearchUrl", function() { return constructOpenSearchUrl; });
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

const opensearchVersion = [];
function getVersion() {
  return opensearchVersion;
}
function getContentType(body) {
  if (!body) return;
  return 'application/json';
}
async function send(http, method, path, data, dataSourceId, withLongNumeralsSupport) {
  return await http.post('/api/console/proxy', {
    query: {
      path,
      method,
      dataSourceId
    },
    body: data,
    prependBasePath: true,
    asResponse: true,
    withLongNumeralsSupport
  });
}
function constructOpenSearchUrl(baseUri, path) {
  baseUri = baseUri.replace(/\/+$/, '');
  path = path.replace(/^\/+/, '');
  return baseUri + '/' + path;
}

/***/ }),

/***/ "./public/lib/osd/api.ts":
/*!*******************************!*\
  !*** ./public/lib/osd/api.ts ***!
  \*******************************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _autocomplete_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../autocomplete/components */ "./public/lib/autocomplete/components/index.ts");
/* harmony import */ var _autocomplete_url_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autocomplete/url_params */ "./public/lib/autocomplete/url_params.ts");
/* harmony import */ var _autocomplete_body_completer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autocomplete/body_completer */ "./public/lib/autocomplete/body_completer.ts");
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
 *
 * @param urlParametrizedComponentFactories a dictionary of factory functions
 * that will be used as fallback for parametrized path part (i.e., {indices} )
 * see UrlPatternMatcher
 * @constructor
 * @param bodyParametrizedComponentFactories same as urlParametrizedComponentFactories but used for body compilation
 */
class Api {
  constructor(urlParametrizedComponentFactories, bodyParametrizedComponentFactories) {
    _defineProperty(this, "globalRules", void 0);
    _defineProperty(this, "endpoints", void 0);
    _defineProperty(this, "urlPatternMatcher", void 0);
    _defineProperty(this, "globalBodyComponentFactories", void 0);
    _defineProperty(this, "name", void 0);
    this.globalRules = Object.create(null);
    this.endpoints = Object.create(null);
    this.urlPatternMatcher = new _autocomplete_components__WEBPACK_IMPORTED_MODULE_1__["UrlPatternMatcher"](urlParametrizedComponentFactories);
    this.globalBodyComponentFactories = bodyParametrizedComponentFactories;
    this.name = '';
  }
  addGlobalAutocompleteRules(parentNode, rules) {
    this.globalRules[parentNode] = Object(_autocomplete_body_completer__WEBPACK_IMPORTED_MODULE_3__["compileBodyDescription"])('GLOBAL.' + parentNode, rules, this.globalBodyComponentFactories);
  }
  getGlobalAutocompleteComponents(term, throwOnMissing) {
    const result = this.globalRules[term];
    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isUndefined(result) && (throwOnMissing || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isUndefined(throwOnMissing))) {
      throw new Error("failed to resolve global components for  ['" + term + "']");
    }
    return result;
  }
  addEndpointDescription(endpoint, description) {
    const copiedDescription = {};
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign(copiedDescription, description || {});
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(copiedDescription, {
      id: endpoint,
      patterns: [endpoint],
      methods: ['GET']
    });
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(copiedDescription.patterns, p => {
      this.urlPatternMatcher.addEndpoint(p, copiedDescription);
    });
    copiedDescription.paramsAutocomplete = new _autocomplete_url_params__WEBPACK_IMPORTED_MODULE_2__["UrlParams"](copiedDescription.url_params);
    copiedDescription.bodyAutocompleteRootComponents = Object(_autocomplete_body_completer__WEBPACK_IMPORTED_MODULE_3__["compileBodyDescription"])(copiedDescription.id, copiedDescription.data_autocomplete_rules, this.globalBodyComponentFactories);
    this.endpoints[endpoint] = copiedDescription;
  }
  getEndpointDescriptionByEndpoint(endpoint) {
    return this.endpoints[endpoint];
  }
  getTopLevelUrlCompleteComponents(method) {
    return this.urlPatternMatcher.getTopLevelComponents(method);
  }
  getUnmatchedEndpointComponents() {
    return Object(_autocomplete_body_completer__WEBPACK_IMPORTED_MODULE_3__["globalsOnlyAutocompleteComponents"])();
  }
  clear() {
    this.endpoints = {};
    this.globalRules = {};
  }
}

/***/ }),

/***/ "./public/lib/osd/osd.ts":
/*!*******************************!*\
  !*** ./public/lib/osd/osd.ts ***!
  \*******************************/
/*! exports provided: getUnmatchedEndpointComponents, getEndpointDescriptionByEndpoint, getEndpointBodyCompleteComponents, getTopLevelUrlCompleteComponents, getGlobalAutocompleteComponents, setActiveApi, _test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnmatchedEndpointComponents", function() { return getUnmatchedEndpointComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndpointDescriptionByEndpoint", function() { return getEndpointDescriptionByEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndpointBodyCompleteComponents", function() { return getEndpointBodyCompleteComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopLevelUrlCompleteComponents", function() { return getTopLevelUrlCompleteComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalAutocompleteComponents", function() { return getGlobalAutocompleteComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveApi", function() { return setActiveApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_test", function() { return _test; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _autocomplete_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autocomplete/components */ "./public/lib/autocomplete/components/index.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./public/lib/osd/api.ts");
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





let ACTIVE_API = new _api__WEBPACK_IMPORTED_MODULE_3__["Api"]();
const isNotAnIndexName = name => name[0] === '_' && name !== '_all';
const idAutocompleteComponentFactory = (name, parent) => {
  return new _autocomplete_components__WEBPACK_IMPORTED_MODULE_2__["IdAutocompleteComponent"](name, parent);
};
const parametrizedComponentFactories = {
  getComponent(name, parent, provideDefault) {
    if (this[name]) {
      return this[name];
    } else if (provideDefault) {
      return idAutocompleteComponentFactory;
    }
  },
  index(name, parent) {
    if (isNotAnIndexName(name)) return;
    return new _autocomplete_components__WEBPACK_IMPORTED_MODULE_2__["IndexAutocompleteComponent"](name, parent, false);
  },
  indices(name, parent) {
    if (isNotAnIndexName(name)) return;
    return new _autocomplete_components__WEBPACK_IMPORTED_MODULE_2__["IndexAutocompleteComponent"](name, parent, true);
  },
  type(name, parent) {
    return new _autocomplete_components__WEBPACK_IMPORTED_MODULE_2__["TypeAutocompleteComponent"](name, parent, false);
  },
  types(name, parent) {
    return new _autocomplete_components__WEBPACK_IMPORTED_MODULE_2__["TypeAutocompleteComponent"](name, parent, true);
  },
  id(name, parent) {
    return idAutocompleteComponentFactory(name, parent);
  },
  transform_id(name, parent) {
    return idAutocompleteComponentFactory(name, parent);
  },
  username(name, parent) {
    return new _autocomplete_components__WEBPACK_IMPORTED_MODULE_2__["UsernameAutocompleteComponent"](name, parent);
  },
  user(name, parent) {
    return new _autocomplete_components__WEBPACK_IMPORTED_MODULE_2__["UsernameAutocompleteComponent"](name, parent);
  },
  template(name, parent) {
    return new _autocomplete_components__WEBPACK_IMPORTED_MODULE_2__["TemplateAutocompleteComponent"](name, parent);
  },
  task_id(name, parent) {
    return idAutocompleteComponentFactory(name, parent);
  },
  ids(name, parent) {
    return idAutocompleteComponentFactory(name, parent, true);
  },
  fields(name, parent) {
    return new _autocomplete_components__WEBPACK_IMPORTED_MODULE_2__["FieldAutocompleteComponent"](name, parent, true);
  },
  field(name, parent) {
    return new _autocomplete_components__WEBPACK_IMPORTED_MODULE_2__["FieldAutocompleteComponent"](name, parent, false);
  },
  nodes(name, parent) {
    return new _autocomplete_components__WEBPACK_IMPORTED_MODULE_2__["ListComponent"](name, ['_local', '_master', '_cluster_manager', 'data:true', 'data:false', 'master:true', 'cluster_manager:true', 'master:false', 'cluster_manager:false'], parent);
  },
  node(name, parent) {
    return new _autocomplete_components__WEBPACK_IMPORTED_MODULE_2__["ListComponent"](name, [], parent, false);
  }
};
function getUnmatchedEndpointComponents() {
  return ACTIVE_API.getUnmatchedEndpointComponents();
}
function getEndpointDescriptionByEndpoint(endpoint) {
  return ACTIVE_API.getEndpointDescriptionByEndpoint(endpoint);
}
function getEndpointBodyCompleteComponents(endpoint) {
  const desc = getEndpointDescriptionByEndpoint(endpoint);
  if (!desc) {
    throw new Error("failed to resolve endpoint ['" + endpoint + "']");
  }
  return desc.bodyAutocompleteRootComponents;
}
function getTopLevelUrlCompleteComponents(method) {
  return ACTIVE_API.getTopLevelUrlCompleteComponents(method);
}
function getGlobalAutocompleteComponents(term, throwOnMissing) {
  return ACTIVE_API.getGlobalAutocompleteComponents(term, throwOnMissing);
}
function loadApisFromJson(json, urlParametrizedComponentFactories, bodyParametrizedComponentFactories) {
  urlParametrizedComponentFactories = urlParametrizedComponentFactories || parametrizedComponentFactories;
  bodyParametrizedComponentFactories = bodyParametrizedComponentFactories || urlParametrizedComponentFactories;
  const api = new _api__WEBPACK_IMPORTED_MODULE_3__["Api"](urlParametrizedComponentFactories, bodyParametrizedComponentFactories);
  const names = [];
  lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(json, function (apiJson, name) {
    names.unshift(name);
    lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(apiJson.globals || {}, function (globalJson, globalName) {
      api.addGlobalAutocompleteRules(globalName, globalJson);
    });
    lodash__WEBPACK_IMPORTED_MODULE_1___default.a.each(apiJson.endpoints || {}, function (endpointJson, endpointName) {
      api.addEndpointDescription(endpointName, endpointJson);
    });
  });
  api.name = names.join(',');
  return api;
}

// TODO: clean up setting up of active API and use of jQuery.
// This function should be attached to a class that holds the current state, not setup
// when the file is required. Also, jQuery should not be used to make network requests
// like this, it looks like a minor security issue.
function setActiveApi(api) {
  if (!api) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
      url: '../api/console/api_server',
      dataType: 'json',
      // disable automatic guessing
      headers: {
        'osd-xsrf': 'opensearch-dashboards'
      }
    }).then(function (data) {
      setActiveApi(loadApisFromJson(data));
    }, function (jqXHR) {
      // eslint-disable-next-line no-console
      console.log("failed to load API '" + api + "': " + jqXHR.responseText);
    });
    return;
  }
  ACTIVE_API = api;
}
setActiveApi();
const _test = {
  loadApisFromJson
};

/***/ }),

/***/ "./public/lib/row_parser.ts":
/*!**********************************!*\
  !*** ./public/lib/row_parser.ts ***!
  \**********************************/
/*! exports provided: MODE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE", function() { return MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RowParser; });
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

const MODE = {
  REQUEST_START: 2,
  IN_REQUEST: 4,
  MULTI_DOC_CUR_DOC_END: 8,
  REQUEST_END: 16,
  BETWEEN_REQUESTS: 32
};

// eslint-disable-next-line import/no-default-export
class RowParser {
  constructor(editor) {
    this.editor = editor;
    _defineProperty(this, "MODE", MODE);
  }
  getRowParseMode(lineNumber = this.editor.getCurrentPosition().lineNumber) {
    const linesCount = this.editor.getLineCount();
    if (lineNumber > linesCount || lineNumber < 1) {
      return MODE.BETWEEN_REQUESTS;
    }
    const mode = this.editor.getLineState(lineNumber);
    if (!mode) {
      return MODE.BETWEEN_REQUESTS;
    } // shouldn't really happen

    // If another "start" mode is added here because we want to allow for new language highlighting
    // please see https://github.com/elastic/kibana/pull/51446 for a discussion on why
    // should consider a different approach.
    if (mode !== 'start' && mode !== 'start-sql') {
      return MODE.IN_REQUEST;
    }
    let line = (this.editor.getLineValue(lineNumber) || '').trim();
    if (!line || line[0] === '#') {
      return MODE.BETWEEN_REQUESTS;
    } // empty line or a comment waiting for a new req to start

    if (line.indexOf('}', line.length - 1) >= 0) {
      // check for a multi doc request (must start a new json doc immediately after this one end.
      lineNumber++;
      if (lineNumber < linesCount + 1) {
        line = (this.editor.getLineValue(lineNumber) || '').trim();
        if (line.indexOf('{') === 0) {
          // next line is another doc in a multi doc
          // eslint-disable-next-line no-bitwise
          return MODE.MULTI_DOC_CUR_DOC_END | MODE.IN_REQUEST;
        }
      }
      // eslint-disable-next-line no-bitwise
      return MODE.REQUEST_END | MODE.MULTI_DOC_CUR_DOC_END; // end of request
    }

    // check for single line requests
    lineNumber++;
    if (lineNumber >= linesCount + 1) {
      // eslint-disable-next-line no-bitwise
      return MODE.REQUEST_START | MODE.REQUEST_END;
    }
    line = (this.editor.getLineValue(lineNumber) || '').trim();
    if (line.indexOf('{') !== 0) {
      // next line is another request
      // eslint-disable-next-line no-bitwise
      return MODE.REQUEST_START | MODE.REQUEST_END;
    }
    return MODE.REQUEST_START;
  }
  rowPredicate(lineNumber, editor, value) {
    const mode = this.getRowParseMode(lineNumber);
    // eslint-disable-next-line no-bitwise
    return (mode & value) > 0;
  }
  isEndRequestRow(row, _e) {
    const editor = _e || this.editor;
    return this.rowPredicate(row, editor, MODE.REQUEST_END);
  }
  isRequestEdge(row, _e) {
    const editor = _e || this.editor;
    // eslint-disable-next-line no-bitwise
    return this.rowPredicate(row, editor, MODE.REQUEST_END | MODE.REQUEST_START);
  }
  isStartRequestRow(row, _e) {
    const editor = _e || this.editor;
    return this.rowPredicate(row, editor, MODE.REQUEST_START);
  }
  isInBetweenRequestsRow(row, _e) {
    const editor = _e || this.editor;
    return this.rowPredicate(row, editor, MODE.BETWEEN_REQUESTS);
  }
  isInRequestsRow(row, _e) {
    const editor = _e || this.editor;
    return this.rowPredicate(row, editor, MODE.IN_REQUEST);
  }
  isMultiDocDocEndRow(row, _e) {
    const editor = _e || this.editor;
    return this.rowPredicate(row, editor, MODE.MULTI_DOC_CUR_DOC_END);
  }
  isEmptyToken(tokenOrTokenIter) {
    const token = tokenOrTokenIter && tokenOrTokenIter.getCurrentToken ? tokenOrTokenIter.getCurrentToken() : tokenOrTokenIter;
    return !token || token.type === 'whitespace';
  }
  isUrlOrMethodToken(tokenOrTokenIter) {
    var _getCurrentToken;
    const t = (_getCurrentToken = tokenOrTokenIter === null || tokenOrTokenIter === void 0 ? void 0 : tokenOrTokenIter.getCurrentToken()) !== null && _getCurrentToken !== void 0 ? _getCurrentToken : tokenOrTokenIter;
    return t && t.type && (t.type === 'method' || t.type.indexOf('url') === 0);
  }
  nextNonEmptyToken(tokenIter) {
    let t = tokenIter.stepForward();
    while (t && this.isEmptyToken(t)) {
      t = tokenIter.stepForward();
    }
    return t;
  }
  prevNonEmptyToken(tokenIter) {
    let t = tokenIter.stepBackward();
    // empty rows return null token.
    while ((t || tokenIter.getCurrentPosition().lineNumber > 1) && this.isEmptyToken(t)) t = tokenIter.stepBackward();
    return t;
  }
}

/***/ }),

/***/ "./public/lib/token_iterator/index.ts":
/*!********************************************!*\
  !*** ./public/lib/token_iterator/index.ts ***!
  \********************************************/
/*! exports provided: TokenIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _token_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token_iterator */ "./public/lib/token_iterator/token_iterator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenIterator", function() { return _token_iterator__WEBPACK_IMPORTED_MODULE_0__["TokenIterator"]; });

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

/***/ "./public/lib/token_iterator/token_iterator.ts":
/*!*****************************************************!*\
  !*** ./public/lib/token_iterator/token_iterator.ts ***!
  \*****************************************************/
/*! exports provided: TokenIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenIterator", function() { return TokenIterator; });
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

function isColumnInTokenRange(column, token) {
  if (column < token.position.column) {
    return false;
  }
  return column <= token.position.column + token.value.length;
}
class TokenIterator {
  constructor(provider, startPosition) {
    this.provider = provider;
    _defineProperty(this, "currentTokenIdx", -1);
    _defineProperty(this, "currentPosition", {
      lineNumber: -1,
      column: -1
    });
    _defineProperty(this, "tokensLineCache", void 0);
    this.tokensLineCache = this.provider.getTokens(startPosition.lineNumber) || [];
    const tokenIdx = this.tokensLineCache.findIndex(token => isColumnInTokenRange(startPosition.column, token));
    if (tokenIdx > -1) {
      this.updatePosition({
        tokenIdx,
        position: this.tokensLineCache[tokenIdx].position
      });
    } else {
      this.updatePosition({
        tokenIdx: -1,
        position: startPosition
      });
    }
  }
  updateLineTokens(tokens) {
    this.tokensLineCache = tokens;
  }
  updatePosition(info) {
    this.currentTokenIdx = info.tokenIdx;
    this.currentPosition = {
      ...info.position
    };
  }
  step(direction) {
    const nextIdx = this.currentTokenIdx + direction;
    let nextToken = this.tokensLineCache[nextIdx];
    // Check current row
    if (nextToken) {
      this.updatePosition({
        tokenIdx: nextIdx,
        position: nextToken.position
      });
      return nextToken;
    }

    // Check next line
    const nextLineNumber = this.currentPosition.lineNumber + direction;
    const nextLineTokens = this.provider.getTokens(nextLineNumber);
    if (nextLineTokens) {
      this.updateLineTokens(nextLineTokens);
      let idx;
      if (direction > 0) {
        nextToken = nextLineTokens[0];
        idx = 0;
      } else {
        nextToken = nextLineTokens[nextLineTokens.length - 1];
        idx = nextToken ? nextLineTokens.length - 1 : 0;
      }
      const nextPosition = nextToken ? nextToken.position : {
        column: 1,
        lineNumber: nextLineNumber
      };
      this.updatePosition({
        tokenIdx: idx,
        position: nextPosition
      });
      return nextToken || null;
    }

    // We have reached the beginning or the end
    return null;
  }

  /**
   * Report the token under the iterator's internal cursor.
   */
  getCurrentToken() {
    return this.tokensLineCache[this.currentTokenIdx] || null;
  }

  /**
   * Return the current position in the document.
   *
   * This will correspond to the position of a token.
   *
   * Note: this method may not be that useful given {@link getCurrentToken}.
   */
  getCurrentPosition() {
    return this.currentPosition;
  }

  /**
   * Go to the previous token in the document.
   *
   * Stepping to the previous token can return null under the following conditions:
   *
   * 1. We are at the beginning of the document.
   * 2. The preceding line is empty - no tokens.
   * 3. We are in an empty document - not text, so no tokens.
   */
  stepBackward() {
    return this.step(-1);
  }

  /**
   * See documentation for {@link stepBackward}.
   *
   * Steps forward.
   */
  stepForward() {
    return this.step(1);
  }

  /**
   * Get the line number of the current token.
   *
   * Can be considered a convenience method for:
   *
   * ```ts
   * it.getCurrentToken().lineNumber;
   * ```
   */
  getCurrentTokenLineNumber() {
    const currentToken = this.getCurrentToken();
    if (currentToken) {
      return currentToken.position.lineNumber;
    }
    return null;
  }

  /**
   * See documentation for {@link getCurrentTokenLineNumber}.
   *
   * Substitutes `column` for `lineNumber`.
   */
  getCurrentTokenColumn() {
    const currentToken = this.getCurrentToken();
    if (currentToken) {
      return currentToken.position.column;
    }
    return null;
  }
}

/***/ }),

/***/ "./public/lib/utils/index.ts":
/*!***********************************!*\
  !*** ./public/lib/utils/index.ts ***!
  \***********************************/
/*! exports provided: textFromRequest, jsonToString, formatRequestBodyDoc, extractDeprecationMessages, unescape, splitOnUnquotedCommaSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textFromRequest", function() { return textFromRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonToString", function() { return jsonToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatRequestBodyDoc", function() { return formatRequestBodyDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractDeprecationMessages", function() { return extractDeprecationMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return unescape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitOnUnquotedCommaSpace", function() { return splitOnUnquotedCommaSpace; });
/* harmony import */ var _osd_std__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @osd/std */ "../../../packages/osd-std/target/web/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../opensearch_ui_shared/public */ "plugin/opensearchUiShared/public");
/* harmony import */ var _opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_2__);
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




const {
  collapseLiteralStrings,
  expandLiteralStrings
} = _opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_2__["XJson"];
function textFromRequest(request) {
  let data = request.data;
  if (typeof data !== 'string') {
    data = data.join('\n');
  }
  return request.method + ' ' + request.url + '\n' + data;
}
function jsonToString(data, indent) {
  return Object(_osd_std__WEBPACK_IMPORTED_MODULE_0__["stringify"])(data, null, indent ? 2 : 0);
}
function formatRequestBodyDoc(data, indent) {
  let changed = false;
  const formattedData = [];
  for (let i = 0; i < data.length; i++) {
    const curDoc = data[i];
    try {
      let newDoc = jsonToString(Object(_osd_std__WEBPACK_IMPORTED_MODULE_0__["parse"])(collapseLiteralStrings(curDoc)), indent);
      if (indent) {
        newDoc = expandLiteralStrings(newDoc);
      }
      changed = changed || newDoc !== curDoc;
      formattedData.push(newDoc);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      formattedData.push(curDoc);
    }
  }
  return {
    changed,
    data: formattedData
  };
}
function extractDeprecationMessages(warnings) {
  // pattern for valid warning header
  const re = /\d{3} [0-9a-zA-Z!#$%&'*+-.^_`|~]+ \"((?:\t| |!|[\x23-\x5b]|[\x5d-\x7e]|[\x80-\xff]|\\\\|\\")*)\"(?: \"[^"]*\")?/;
  // split on any comma that is followed by an even number of quotes
  return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(splitOnUnquotedCommaSpace(warnings), warning => {
    const match = re.exec(warning);
    // extract the actual warning if there was a match
    return '#! Deprecation: ' + (match !== null ? unescape(match[1]) : warning);
  });
}
function unescape(s) {
  return s.replace(/\\\\/g, '\\').replace(/\\"/g, '"');
}
function splitOnUnquotedCommaSpace(s) {
  let quoted = false;
  const arr = [];
  let buffer = '';
  let i = 0;
  while (i < s.length) {
    let token = s.charAt(i++);
    if (token === '\\' && i < s.length) {
      token += s.charAt(i++);
    } else if (token === ',' && i < s.length && s.charAt(i) === ' ') {
      token += s.charAt(i++);
    }
    if (token === '"') {
      quoted = !quoted;
    } else if (!quoted && token === ', ') {
      arr.push(buffer);
      buffer = '';
      continue;
    }
    buffer += token;
  }
  arr.push(buffer);
  return arr;
}

/***/ }),

/***/ "./public/services/history.ts":
/*!************************************!*\
  !*** ./public/services/history.ts ***!
  \************************************/
/*! exports provided: History, createHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "History", function() { return History; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHistory", function() { return createHistory; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
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


class History {
  constructor(storage) {
    this.storage = storage;
    _defineProperty(this, "changeEmitter", new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.getHistory() || []));
  }
  getHistoryKeys() {
    return this.storage.keys().filter(key => key.indexOf('hist_elem') === 0).sort().reverse();
  }
  getHistory() {
    return this.getHistoryKeys().map(key => this.storage.get(key));
  }

  // This is used as an optimization mechanism so that different components
  // can listen for changes to history and update because changes to history can
  // be triggered from different places in the app. The alternative would be to store
  // this in state so that we hook into the React model, but it would require loading history
  // every time the application starts even if a user is not going to view history.
  change(listener) {
    const subscription = this.changeEmitter.subscribe(listener);
    return () => subscription.unsubscribe();
  }
  addToHistory(endpoint, method, data) {
    const keys = this.getHistoryKeys();
    keys.splice(0, 500); // only maintain most recent X;
    keys.forEach(key => {
      this.storage.delete(key);
    });
    const timestamp = new Date().getTime();
    const k = 'hist_elem_' + timestamp;
    this.storage.set(k, {
      time: timestamp,
      endpoint,
      method,
      data
    });
    this.changeEmitter.next(this.getHistory());
  }
  updateCurrentState(content) {
    const timestamp = new Date().getTime();
    this.storage.set('editor_state', {
      time: timestamp,
      content
    });
  }
  getLegacySavedEditorState() {
    const saved = this.storage.get('editor_state');
    if (!saved) return;
    const {
      time,
      content
    } = saved;
    return {
      time,
      content
    };
  }

  /**
   * This function should only ever be called once for a user if they had legacy state.
   */
  deleteLegacySavedEditorState() {
    this.storage.delete('editor_state');
  }
  clearHistory() {
    this.getHistoryKeys().forEach(key => this.storage.delete(key));
  }
}
function createHistory(deps) {
  return new History(deps.storage);
}

/***/ }),

/***/ "./public/services/index.ts":
/*!**********************************!*\
  !*** ./public/services/index.ts ***!
  \**********************************/
/*! exports provided: createHistory, History, createStorage, Storage, StorageKeys, createSettings, Settings, DevToolsSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history */ "./public/services/history.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHistory", function() { return _history__WEBPACK_IMPORTED_MODULE_0__["createHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "History", function() { return _history__WEBPACK_IMPORTED_MODULE_0__["History"]; });

/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./public/services/storage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStorage", function() { return _storage__WEBPACK_IMPORTED_MODULE_1__["createStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageKeys", function() { return _storage__WEBPACK_IMPORTED_MODULE_1__["StorageKeys"]; });

/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./public/services/settings.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSettings", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__["createSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__["Settings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevToolsSettings", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__["DevToolsSettings"]; });

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

/***/ "./public/services/settings.ts":
/*!*************************************!*\
  !*** ./public/services/settings.ts ***!
  \*************************************/
/*! exports provided: Settings, createSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSettings", function() { return createSettings; });
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

class Settings {
  constructor(storage) {
    this.storage = storage;
  }
  getFontSize() {
    return this.storage.get('font_size', 14);
  }
  setFontSize(size) {
    this.storage.set('font_size', size);
    return true;
  }
  getWrapMode() {
    return this.storage.get('wrap_mode', true);
  }
  setWrapMode(mode) {
    this.storage.set('wrap_mode', mode);
    return true;
  }
  setTripleQuotes(tripleQuotes) {
    this.storage.set('triple_quotes', tripleQuotes);
    return true;
  }
  getTripleQuotes() {
    return this.storage.get('triple_quotes', true);
  }
  getAutocomplete() {
    return this.storage.get('autocomplete_settings', {
      fields: true,
      indices: true,
      templates: true
    });
  }
  setAutocomplete(settings) {
    this.storage.set('autocomplete_settings', settings);
    return true;
  }
  getPolling() {
    return this.storage.get('console_polling', true);
  }
  setPolling(polling) {
    this.storage.set('console_polling', polling);
    return true;
  }
  toJSON() {
    return {
      autocomplete: this.getAutocomplete(),
      wrapMode: this.getWrapMode(),
      tripleQuotes: this.getTripleQuotes(),
      fontSize: parseFloat(this.getFontSize()),
      polling: Boolean(this.getPolling())
    };
  }
  updateSettings({
    fontSize,
    wrapMode,
    tripleQuotes,
    autocomplete,
    polling
  }) {
    this.setFontSize(fontSize);
    this.setWrapMode(wrapMode);
    this.setTripleQuotes(tripleQuotes);
    this.setAutocomplete(autocomplete);
    this.setPolling(polling);
  }
}
function createSettings({
  storage
}) {
  return new Settings(storage);
}

/***/ }),

/***/ "./public/services/storage.ts":
/*!************************************!*\
  !*** ./public/services/storage.ts ***!
  \************************************/
/*! exports provided: StorageKeys, Storage, createStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageKeys", function() { return StorageKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStorage", function() { return createStorage; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osd_std__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osd/std */ "../../../packages/osd-std/target/web/index.js");
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



let StorageKeys = /*#__PURE__*/function (StorageKeys) {
  StorageKeys["WIDTH"] = "widths";
  return StorageKeys;
}({});
class Storage {
  constructor(engine, prefix) {
    this.engine = engine;
    this.prefix = prefix;
  }
  encode(val) {
    return Object(_osd_std__WEBPACK_IMPORTED_MODULE_1__["stringify"])(val);
  }
  decode(val) {
    if (typeof val === 'string') {
      return Object(_osd_std__WEBPACK_IMPORTED_MODULE_1__["parse"])(val);
    }
  }
  encodeKey(key) {
    return `${this.prefix}${key}`;
  }
  decodeKey(key) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["startsWith"])(key, this.prefix)) {
      return `${key.slice(this.prefix.length)}`;
    }
  }
  set(key, val) {
    this.engine.setItem(this.encodeKey(key), this.encode(val));
    return val;
  }
  has(key) {
    return this.engine.getItem(this.encodeKey(key)) != null;
  }
  get(key, _default) {
    if (this.has(key)) {
      return this.decode(this.engine.getItem(this.encodeKey(key)));
    } else {
      return _default;
    }
  }
  delete(key) {
    return this.engine.removeItem(this.encodeKey(key));
  }
  keys() {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["transform"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["keys"])(this.engine), (ours, key) => {
      const ourKey = this.decodeKey(key);
      if (ourKey != null) ours.push(ourKey);
    });
  }
}
function createStorage(deps) {
  return new Storage(deps.engine, deps.prefix);
}

/***/ }),

/***/ "./public/services/tracker.ts":
/*!************************************!*\
  !*** ./public/services/tracker.ts ***!
  \************************************/
/*! exports provided: createUsageTracker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUsageTracker", function() { return createUsageTracker; });
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


const APP_TRACKER_NAME = 'console';
const createUsageTracker = usageCollection => {
  const track = (type, name) => usageCollection === null || usageCollection === void 0 ? void 0 : usageCollection.reportUiStats(APP_TRACKER_NAME, type, name);
  return {
    count: eventName => {
      track(_osd_analytics__WEBPACK_IMPORTED_MODULE_0__["METRIC_TYPE"].COUNT, eventName);
    },
    load: eventName => {
      track(_osd_analytics__WEBPACK_IMPORTED_MODULE_0__["METRIC_TYPE"].LOADED, eventName);
    }
  };
};

/***/ }),

/***/ "./public/shared_imports.ts":
/*!**********************************!*\
  !*** ./public/shared_imports.ts ***!
  \**********************************/
/*! exports provided: sendRequest, collapseLiteralStrings, expandLiteralStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseLiteralStrings", function() { return collapseLiteralStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandLiteralStrings", function() { return expandLiteralStrings; });
/* harmony import */ var _opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../opensearch_ui_shared/public */ "plugin/opensearchUiShared/public");
/* harmony import */ var _opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendRequest", function() { return _opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_0__["sendRequest"]; });

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


const {
  collapseLiteralStrings,
  expandLiteralStrings
} = _opensearch_ui_shared_public__WEBPACK_IMPORTED_MODULE_0__["XJson"];


/***/ }),

/***/ 0:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=console.chunk.0.js.map