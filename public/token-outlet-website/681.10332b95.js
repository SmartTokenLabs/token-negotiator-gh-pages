/*! For license information please see 681.10332b95.js.LICENSE.txt */
(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 681 ], {
  4052: function(e, t, n) {
    !function(e, r) {
      !function(e) {
        "use strict";
        function t(e) {
          if (Array.isArray(e)) return e;
        }
        function r(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function a(e, t) {
          if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
          }
        }
        function o() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function u(e, n) {
          return t(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
              var r, a, o = [], u = !0, i = !1;
              try {
                for (n = n.call(e); !(u = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); u = !0) ;
              } catch (e) {
                i = !0, a = e;
              } finally {
                try {
                  u || null == n.return || n.return();
                } finally {
                  if (i) throw a;
                }
              }
              return o;
            }
          }(e, n) || a(e, n) || o();
        }
        function i(e, t, n, r, a, o, u) {
          try {
            var i = e[o](u), s = i.value;
          } catch (e) {
            return void n(e);
          }
          i.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        function s(e) {
          return function() {
            var t = this, n = arguments;
            return new Promise((function(r, a) {
              var o = e.apply(t, n);
              function u(e) {
                i(o, r, a, u, s, "next", e);
              }
              function s(e) {
                i(o, r, a, u, s, "throw", e);
              }
              u(void 0);
            }));
          };
        }
        function c(e) {
          return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, c(e);
        }
        var f = {
          exports: {}
        }, l = {
          exports: {}
        };
        !function(e) {
          function t(n) {
            return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e;
            } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n);
          }
          e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
        }(l), function(e) {
          var t = l.exports.default;
          function n() {
            e.exports = n = function() {
              return r;
            }, e.exports.__esModule = !0, e.exports.default = e.exports;
            var r = {}, a = Object.prototype, o = a.hasOwnProperty, u = "function" == typeof Symbol ? Symbol : {}, i = u.iterator || "@@iterator", s = u.asyncIterator || "@@asyncIterator", c = u.toStringTag || "@@toStringTag";
            function f(e, t, n) {
              return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }), e[t];
            }
            try {
              f({}, "");
            } catch (e) {
              f = function(e, t, n) {
                return e[t] = n;
              };
            }
            function l(e, t, n, r) {
              var a = t && t.prototype instanceof h ? t : h, o = Object.create(a.prototype), u = new A(r || []);
              return o._invoke = function(e, t, n) {
                var r = "suspendedStart";
                return function(a, o) {
                  if ("executing" === r) throw new Error("Generator is already running");
                  if ("completed" === r) {
                    if ("throw" === a) throw o;
                    return T();
                  }
                  for (n.method = a, n.arg = o; ;) {
                    var u = n.delegate;
                    if (u) {
                      var i = E(u, n);
                      if (i) {
                        if (i === d) continue;
                        return i;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                      if ("suspendedStart" === r) throw r = "completed", n.arg;
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = "executing";
                    var s = p(e, t, n);
                    if ("normal" === s.type) {
                      if (r = n.done ? "completed" : "suspendedYield", s.arg === d) continue;
                      return {
                        value: s.arg,
                        done: n.done
                      };
                    }
                    "throw" === s.type && (r = "completed", n.method = "throw", n.arg = s.arg);
                  }
                };
              }(e, n, u), o;
            }
            function p(e, t, n) {
              try {
                return {
                  type: "normal",
                  arg: e.call(t, n)
                };
              } catch (e) {
                return {
                  type: "throw",
                  arg: e
                };
              }
            }
            r.wrap = l;
            var d = {};
            function h() {}
            function v() {}
            function y() {}
            var g = {};
            f(g, i, (function() {
              return this;
            }));
            var m = Object.getPrototypeOf, b = m && m(m(R([])));
            b && b !== a && o.call(b, i) && (g = b);
            var w = y.prototype = h.prototype = Object.create(g);
            function x(e) {
              [ "next", "throw", "return" ].forEach((function(t) {
                f(e, t, (function(e) {
                  return this._invoke(t, e);
                }));
              }));
            }
            function k(e, n) {
              function r(a, u, i, s) {
                var c = p(e[a], e, u);
                if ("throw" !== c.type) {
                  var f = c.arg, l = f.value;
                  return l && "object" == t(l) && o.call(l, "__await") ? n.resolve(l.__await).then((function(e) {
                    r("next", e, i, s);
                  }), (function(e) {
                    r("throw", e, i, s);
                  })) : n.resolve(l).then((function(e) {
                    f.value = e, i(f);
                  }), (function(e) {
                    return r("throw", e, i, s);
                  }));
                }
                s(c.arg);
              }
              var a;
              this._invoke = function(e, t) {
                function o() {
                  return new n((function(n, a) {
                    r(e, t, n, a);
                  }));
                }
                return a = a ? a.then(o, o) : o();
              };
            }
            function E(e, t) {
              var n = e.iterator[t.method];
              if (void 0 === n) {
                if (t.delegate = null, "throw" === t.method) {
                  if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return d;
                  t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return d;
              }
              var r = p(n, e.iterator, t.arg);
              if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, d;
              var a = r.arg;
              return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), 
              t.delegate = null, d) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, 
              d);
            }
            function I(e) {
              var t = {
                tryLoc: e[0]
              };
              1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
            }
            function S(e) {
              var t = e.completion || {};
              t.type = "normal", delete t.arg, e.completion = t;
            }
            function A(e) {
              this.tryEntries = [ {
                tryLoc: "root"
              } ], e.forEach(I, this), this.reset(!0);
            }
            function R(e) {
              if (e) {
                var t = e[i];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                  var n = -1, r = function t() {
                    for (;++n < e.length; ) if (o.call(e, n)) return t.value = e[n], t.done = !1, t;
                    return t.value = void 0, t.done = !0, t;
                  };
                  return r.next = r;
                }
              }
              return {
                next: T
              };
            }
            function T() {
              return {
                value: void 0,
                done: !0
              };
            }
            return v.prototype = y, f(w, "constructor", y), f(y, "constructor", v), v.displayName = f(y, c, "GeneratorFunction"), r.isGeneratorFunction = function(e) {
              var t = "function" == typeof e && e.constructor;
              return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name));
            }, r.mark = function(e) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, f(e, c, "GeneratorFunction")), e.prototype = Object.create(w), 
              e;
            }, r.awrap = function(e) {
              return {
                __await: e
              };
            }, x(k.prototype), f(k.prototype, s, (function() {
              return this;
            })), r.AsyncIterator = k, r.async = function(e, t, n, a, o) {
              void 0 === o && (o = Promise);
              var u = new k(l(e, t, n, a), o);
              return r.isGeneratorFunction(t) ? u : u.next().then((function(e) {
                return e.done ? e.value : u.next();
              }));
            }, x(w), f(w, c, "Generator"), f(w, i, (function() {
              return this;
            })), f(w, "toString", (function() {
              return "[object Generator]";
            })), r.keys = function(e) {
              var t = [];
              for (var n in e) t.push(n);
              return t.reverse(), function n() {
                for (;t.length; ) {
                  var r = t.pop();
                  if (r in e) return n.value = r, n.done = !1, n;
                }
                return n.done = !0, n;
              };
            }, r.values = R, A.prototype = {
              constructor: A,
              reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", 
                this.arg = void 0, this.tryEntries.forEach(S), !e) for (var t in this) "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
              },
              stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function(e) {
                if (this.done) throw e;
                var t = this;
                function n(n, r) {
                  return u.type = "throw", u.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r;
                }
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var a = this.tryEntries[r], u = a.completion;
                  if ("root" === a.tryLoc) return n("end");
                  if (a.tryLoc <= this.prev) {
                    var i = o.call(a, "catchLoc"), s = o.call(a, "finallyLoc");
                    if (i && s) {
                      if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                    } else if (i) {
                      if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    } else {
                      if (!s) throw new Error("try statement without catch or finally");
                      if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var r = this.tryEntries[n];
                  if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                    var a = r;
                    break;
                  }
                }
                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                var u = a ? a.completion : {};
                return u.type = e, u.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, d) : this.complete(u);
              },
              complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d;
              },
              finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), d;
                }
              },
              catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var a = r.arg;
                      S(n);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function(e, t, n) {
                return this.delegate = {
                  iterator: R(e),
                  resultName: t,
                  nextLoc: n
                }, "next" === this.method && (this.arg = void 0), d;
              }
            }, r;
          }
          e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
        }(f);
        var p, d = f.exports(), h = d;
        try {
          regeneratorRuntime = d;
        } catch (e) {
          "object" === ("undefined" == typeof globalThis ? "undefined" : c(globalThis)) ? globalThis.regeneratorRuntime = d : Function("r", "regeneratorRuntime = r")(d);
        }
        function v(e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }
        function y(e) {
          return t(e) || v(e) || a(e) || o();
        }
        function g(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e;
        }
        function m(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            }))), n.push.apply(n, r);
          }
          return n;
        }
        function b(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? m(Object(n), !0).forEach((function(t) {
              g(e, t, n[t]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            }));
          }
          return e;
        }
        function w(e, t) {
          var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (!n) {
            if (Array.isArray(e) || (n = a(e)) || t && e && "number" == typeof e.length) {
              n && (e = n);
              var r = 0, o = function() {};
              return {
                s: o,
                n: function() {
                  return r >= e.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: e[r++]
                  };
                },
                e: function(e) {
                  throw e;
                },
                f: o
              };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var u, i = !0, s = !1;
          return {
            s: function() {
              n = n.call(e);
            },
            n: function() {
              var e = n.next();
              return i = e.done, e;
            },
            e: function(e) {
              s = !0, u = e;
            },
            f: function() {
              try {
                i || null == n.return || n.return();
              } finally {
                if (s) throw u;
              }
            }
          };
        }
        var x = "function" == typeof queueMicrotask ? queueMicrotask : function(e) {
          return (p || (p = Promise.resolve())).then(e).catch((function(e) {
            return setTimeout((function() {
              throw e;
            }), 0);
          }));
        }, k = function() {
          var e, t = [];
          return {
            deliver: function(n) {
              return s(h.mark((function r() {
                return h.wrap((function(r) {
                  for (;;) switch (r.prev = r.next) {
                   case 0:
                    t.push(n), e && (e(t.shift()), e = void 0);

                   case 2:
                   case "end":
                    return r.stop();
                  }
                }), r);
              })))();
            },
            receive: function() {
              return new Promise((function(n) {
                var r = t.shift();
                if (r) return n(r);
                e = n;
              }));
            }
          };
        }, E = "INIT", I = "SUBSCRIBE", S = "UNSUBSCRIBE", A = "UPDATED", R = "SNAPSHOT", T = "EXIT", _ = "object" === ("undefined" == typeof self ? "undefined" : c(self)) && self.self === self && self || "object" === (void 0 === n.g ? "undefined" : c(n.g)) && n.g.global === n.g && n.g || "object" === ("undefined" == typeof window ? "undefined" : c(window)) && window.window === window && window;
        _.FCL_REGISTRY = null == _.FCL_REGISTRY ? {} : _.FCL_REGISTRY;
        var C, O = 0, P = function(e, t, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return new Promise((function(a, o) {
            var u = r.expectReply || !1, i = null != r.timeout ? r.timeout : 5e3;
            u && i && setTimeout((function() {
              return o(new Error("Timeout: ".concat(i, "ms passed without a response.")));
            }), i);
            var s = {
              to: e,
              from: r.from,
              tag: t,
              data: n,
              timeout: i,
              reply: a,
              reject: o
            };
            try {
              _.FCL_REGISTRY[e] && _.FCL_REGISTRY[e].mailbox.deliver(s), u || a(!0);
            } catch (t) {
              console.error("FCL.Actor -- Could Not Deliver Message", s, _.FCL_REGISTRY[e], t);
            }
          }));
        }, N = function(e) {
          delete _.FCL_REGISTRY[e];
        }, B = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function() {
            var t = s(h.mark((function t(n) {
              var r;
              return h.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                 case 0:
                  if ("function" != typeof e.INIT) {
                    t.next = 3;
                    break;
                  }
                  return t.next = 3, e.INIT(n);

                 case 3:
                  return t.next = 6, n.receive();

                 case 6:
                  if (r = t.sent, t.prev = 7, r.tag !== T) {
                    t.next = 13;
                    break;
                  }
                  if ("function" != typeof e.TERMINATE) {
                    t.next = 12;
                    break;
                  }
                  return t.next = 12, e.TERMINATE(n, r, r.data || {});

                 case 12:
                  return t.abrupt("break", 25);

                 case 13:
                  return t.next = 15, e[r.tag](n, r, r.data || {});

                 case 15:
                  t.next = 20;
                  break;

                 case 17:
                  t.prev = 17, t.t0 = t.catch(7), console.error("".concat(n.self(), " Error"), r, t.t0);

                 case 20:
                  return t.prev = 20, t.abrupt("continue", 3);

                 case 23:
                  t.next = 3;
                  break;

                 case 25:
                 case "end":
                  return t.stop();
                }
              }), t, null, [ [ 7, 17, 20, 23 ] ]);
            })));
            return function(e) {
              return t.apply(this, arguments);
            };
          }();
        }, L = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (null == t && (t = ++O), null != _.FCL_REGISTRY[t]) return t;
          _.FCL_REGISTRY[t] = {
            addr: t,
            mailbox: k(),
            subs: new Set,
            kvs: {},
            error: null
          };
          var n = {
            self: function() {
              return t;
            },
            receive: function() {
              return _.FCL_REGISTRY[t].mailbox.receive();
            },
            send: function(e, n, r) {
              var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              return a.from = t, P(e, n, r, a);
            },
            sendSelf: function(e, n, r) {
              _.FCL_REGISTRY[t] && P(t, e, n, r);
            },
            broadcast: function(e, n) {
              var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              r.from = t;
              var a, o = w(_.FCL_REGISTRY[t].subs);
              try {
                for (o.s(); !(a = o.n()).done; ) {
                  var u = a.value;
                  P(u, e, n, r);
                }
              } catch (e) {
                o.e(e);
              } finally {
                o.f();
              }
            },
            subscribe: function(e) {
              return null != e && _.FCL_REGISTRY[t].subs.add(e);
            },
            unsubscribe: function(e) {
              return null != e && _.FCL_REGISTRY[t].subs.delete(e);
            },
            subscriberCount: function() {
              return _.FCL_REGISTRY[t].subs.size;
            },
            hasSubs: function() {
              return !!_.FCL_REGISTRY[t].subs.size;
            },
            put: function(e, n) {
              null != e && (_.FCL_REGISTRY[t].kvs[e] = n);
            },
            get: function(e, n) {
              var r = _.FCL_REGISTRY[t].kvs[e];
              return null == r ? n : r;
            },
            delete: function(e) {
              delete _.FCL_REGISTRY[t].kvs[e];
            },
            update: function(e, n) {
              null != e && (_.FCL_REGISTRY[t].kvs[e] = n(_.FCL_REGISTRY[t].kvs[e]));
            },
            keys: function() {
              return Object.keys(_.FCL_REGISTRY[t].kvs);
            },
            all: function() {
              return _.FCL_REGISTRY[t].kvs;
            },
            where: function(e) {
              return Object.keys(_.FCL_REGISTRY[t].kvs).reduce((function(n, r) {
                return e.test(r) ? b(b({}, n), {}, g({}, r, _.FCL_REGISTRY[t].kvs[r])) : n;
              }), {});
            },
            merge: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              Object.keys(e).forEach((function(n) {
                return _.FCL_REGISTRY[t].kvs[n] = e[n];
              }));
            },
            fatalError: function(e) {
              _.FCL_REGISTRY[t].error = e;
              var n, r = w(_.FCL_REGISTRY[t].subs);
              try {
                for (r.s(); !(n = r.n()).done; ) {
                  var a = n.value;
                  P(a, A);
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
            }
          };
          return "object" === c(e) && (e = B(e)), x(s(h.mark((function r() {
            return h.wrap((function(r) {
              for (;;) switch (r.prev = r.next) {
               case 0:
                return r.next = 2, e(n);

               case 2:
                N(t);

               case 3:
               case "end":
                return r.stop();
              }
            }), r);
          })))), t;
        };
        function U(e, t, n) {
          t(e);
          var r = "@EXIT", a = L(function() {
            var t = s(h.mark((function t(a) {
              var o, u;
              return h.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                 case 0:
                  a.send(e, I);

                 case 1:
                  return t.next = 4, a.receive();

                 case 4:
                  if (o = t.sent, u = _.FCL_REGISTRY[e].error, o.tag !== r) {
                    t.next = 9;
                    break;
                  }
                  return a.send(e, S), t.abrupt("return");

                 case 9:
                  if (!u) {
                    t.next = 13;
                    break;
                  }
                  return n(null, u), a.send(e, S), t.abrupt("return");

                 case 13:
                  n(o.data, null), t.next = 1;
                  break;

                 case 16:
                 case "end":
                  return t.stop();
                }
              }), t);
            })));
            return function(e) {
              return t.apply(this, arguments);
            };
          }());
          return function() {
            return P(a, r);
          };
        }
        function F(e, t) {
          return t(e), P(e, R, null, {
            expectReply: !0,
            timeout: 0
          });
        }
        var j = "config", D = "PUT_CONFIG", G = "GET_CONFIG", M = "GET_ALL_CONFIG", z = "UPDATE_CONFIG", Y = "DELETE_CONFIG", q = "CLEAR_CONFIG", K = "WHERE_CONFIG", H = "CONFIG/UPDATED", W = function(e) {
          return e;
        }, V = (g(C = {}, D, (function(e, t, n) {
          var r = n.key, a = n.value;
          if (null == r) throw new Error("Missing 'key' for config/put.");
          e.put(r, a), e.broadcast(H, b({}, e.all()));
        })), g(C, G, (function(e, t, n) {
          var r = n.key, a = n.fallback;
          if (null == r) throw new Error("Missing 'key' for config/get");
          t.reply(e.get(r, a));
        })), g(C, M, (function(e, t) {
          t.reply(b({}, e.all()));
        })), g(C, z, (function(e, t, n) {
          var r = n.key, a = n.fn;
          if (null == r) throw new Error("Missing 'key' for config/update");
          e.update(r, a || W), e.broadcast(H, b({}, e.all()));
        })), g(C, Y, (function(e, t, n) {
          var r = n.key;
          if (null == r) throw new Error("Missing 'key' for config/delete");
          e.delete(r), e.broadcast(H, b({}, e.all()));
        })), g(C, q, (function(e, t) {
          for (var n = 0, r = Object.keys(e.all()); n < r.length; n++) {
            var a = r[n];
            e.delete(a);
          }
          e.broadcast(H, b({}, e.all()));
        })), g(C, K, (function(e, t, n) {
          var r = n.pattern;
          if (null == r) throw new Error("Missing 'pattern' for config/where");
          t.reply(e.where(r));
        })), g(C, I, (function(e, t) {
          e.subscribe(t.from), e.send(t.from, H, b({}, e.all()));
        })), g(C, S, (function(e, t) {
          e.unsubscribe(t.from);
        })), C);
        function J(e, t) {
          return P(j, D, {
            key: e,
            value: t
          }), oe();
        }
        function X(e, t) {
          return P(j, G, {
            key: e,
            fallback: t
          }, {
            expectReply: !0,
            timeout: 10
          });
        }
        function Z() {
          return $.apply(this, arguments);
        }
        function $() {
          return $ = s(h.mark((function e() {
            var t, n, r, a, o, u, i = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (t = i.length > 0 && void 0 !== i[0] ? i[0] : [], n = i.length > 1 ? i[1] : void 0, t.length) {
                  e.next = 4;
                  break;
                }
                return e.abrupt("return", n);

               case 4:
                return r = y(t), a = r[0], o = r.slice(1), e.next = 7, X(a);

               case 7:
                if (null != (u = e.sent)) {
                  e.next = 10;
                  break;
                }
                return e.abrupt("return", Z(o, n));

               case 10:
                return e.abrupt("return", u);

               case 11:
               case "end":
                return e.stop();
              }
            }), e);
          }))), $.apply(this, arguments);
        }
        function Q() {
          return P(j, M, null, {
            expectReply: !0,
            timeout: 10
          });
        }
        function ee(e) {
          return P(j, z, {
            key: e,
            fn: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W
          }), oe();
        }
        function te(e) {
          return P(j, Y, {
            key: e
          }), oe();
        }
        function ne(e) {
          return P(j, K, {
            pattern: e
          }, {
            expectReply: !0,
            timeout: 10
          });
        }
        function re(e) {
          return U(j, (function() {
            return L(V, j);
          }), e);
        }
        function ae(e) {
          return P(j, q).then(oe(e));
        }
        function oe(e) {
          return null != e && "object" === c(e) && Object.keys(e).map((function(t) {
            return J(t, e[t]);
          })), {
            put: J,
            get: X,
            all: Q,
            first: Z,
            update: ee,
            delete: te,
            where: ne,
            subscribe: re,
            overload: ie
          };
        }
        L(V, j), oe.put = J, oe.get = X, oe.all = Q, oe.first = Z, oe.update = ee, oe.delete = te, oe.where = ne, oe.subscribe = re, 
        oe.overload = ie;
        var ue = function(e) {
          return e;
        };
        function ie() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ue;
          return new Promise(function() {
            var n = s(h.mark((function n(r, a) {
              var o, u;
              return h.wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                 case 0:
                  return n.next = 2, Q();

                 case 2:
                  return o = n.sent, n.prev = 3, oe(e), n.t0 = t, n.next = 8, Q();

                 case 8:
                  return n.t1 = n.sent, n.next = 11, (0, n.t0)(n.t1);

                 case 11:
                  return u = n.sent, n.next = 14, ae(o);

                 case 14:
                  r(u), n.next = 22;
                  break;

                 case 17:
                  return n.prev = 17, n.t2 = n.catch(3), n.next = 21, ae(o);

                 case 21:
                  a(n.t2);

                 case 22:
                 case "end":
                  return n.stop();
                }
              }), n, null, [ [ 3, 17 ] ]);
            })));
            return function(e, t) {
              return n.apply(this, arguments);
            };
          }());
        }
        var se, ce, fe = {
          can: !("undefined" == typeof window),
          get: (ce = s(h.mark((function e(t) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.abrupt("return", JSON.parse(sessionStorage.getItem(t)));

               case 1:
               case "end":
                return e.stop();
              }
            }), e);
          }))), function(e) {
            return ce.apply(this, arguments);
          }),
          put: (se = s(h.mark((function e(t, n) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.abrupt("return", sessionStorage.setItem(t, JSON.stringify(n)));

               case 1:
               case "end":
                return e.stop();
              }
            }), e);
          }))), function(e, t) {
            return se.apply(this, arguments);
          })
        };
        function le(e) {
          return pe.apply(this, arguments);
        }
        function pe() {
          return (pe = s(h.mark((function e(t) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.t0 = Object, e.t1 = Object, e.next = 4, oe().where(t);

               case 4:
                return e.t2 = e.sent, e.t3 = e.t1.entries.call(e.t1, e.t2).map((function(e) {
                  var n = u(e, 2), r = n[0], a = n[1];
                  return [ r.replace(t, ""), a ];
                })), e.abrupt("return", e.t0.fromEntries.call(e.t0, e.t3));

               case 7:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        oe({
          "discovery.wallet.method.default": "IFRAME/RPC",
          "fcl.storage.default": fe
        });
        var de = "1.3.2";
        function he(e, t) {
          if (!e) {
            var n, r = new Error("INVARIANT ".concat(t));
            r.stack = r.stack.split("\n").filter((function(e) {
              return !/at invariant/.test(e);
            })).join("\n");
            for (var a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), u = 2; u < a; u++) o[u - 2] = arguments[u];
            throw (n = console).error.apply(n, [ "\n\n---\n\n", r, "\n\n" ].concat(o, [ "\n\n---\n\n" ])), r;
          }
        }
        function ve(e) {
          return function(e) {
            if (Array.isArray(e)) return r(e);
          }(e) || v(e) || a(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        var ye = Object.freeze({
          debug: 5,
          info: 4,
          log: 3,
          warn: 2,
          error: 1
        }), ge = function(e) {
          var t = e.title, n = e.message;
          return [ "\n    %c".concat(t, "\n    ============================\n\n    ").concat(n, "\n\n    ============================\n    ").replace(/\n[^\S\r\n]+/g, "\n").trim(), , "font-weight:bold;font-family:monospace;" ];
        }, me = function() {
          var e = s(h.mark((function e(t) {
            var n, r, a, o, u, i, s, c, f, l, p, d;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return i = t.title, s = t.message, c = t.level, f = t.always, l = void 0 !== f && f, e.next = 3, oe.get("logger.level", ye.warn);

               case 3:
                if (p = e.sent, l || !(p < c)) {
                  e.next = 6;
                  break;
                }
                return e.abrupt("return");

               case 6:
                d = ge({
                  title: i,
                  message: s
                }), e.t0 = c, e.next = e.t0 === ye.debug ? 10 : e.t0 === ye.info ? 12 : e.t0 === ye.warn ? 14 : e.t0 === ye.error ? 16 : 18;
                break;

               case 10:
                return (n = console).debug.apply(n, ve(d)), e.abrupt("break", 19);

               case 12:
                return (r = console).info.apply(r, ve(d)), e.abrupt("break", 19);

               case 14:
                return (a = console).warn.apply(a, ve(d)), e.abrupt("break", 19);

               case 16:
                return (o = console).error.apply(o, ve(d)), e.abrupt("break", 19);

               case 18:
                (u = console).log.apply(u, ve(d));

               case 19:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }();
        function be(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function we(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        function xe(e, t, n) {
          return t && we(e.prototype, t), n && we(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
          }), e;
        }
        function ke(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }
        function Ee(e, t) {
          return Ee = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t, e;
          }, Ee(e, t);
        }
        function Ie(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t && Ee(e, t);
        }
        function Se(e) {
          return Se = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }, Se(e);
        }
        function Ae() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
          } catch (e) {
            return !1;
          }
        }
        function Re(e, t) {
          if (t && ("object" === c(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return ke(e);
        }
        function Te(e) {
          var t = Ae();
          return function() {
            var n, r = Se(e);
            if (t) {
              var a = Se(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return Re(this, n);
          };
        }
        me.deprecate = function(e) {
          var t = e.pkg, n = e.subject, r = e.transition, a = e.level, o = void 0 === a ? ye.warn : a, u = e.message, i = void 0 === u ? "" : u, c = e.callback, f = void 0 === c ? null : c, l = function() {
            return me({
              title: "".concat(t ? t + " " : "", "Deprecation Notice"),
              message: "\n      ".concat(n ? "".concat((e = n, e.charAt(0).toUpperCase() + e.slice(1)), " is deprecated and will cease to work in future releases").concat(t ? " of " + t : "", ".") : "").concat(i ? "\n" + i : "").concat(r ? "\nYou can learn more (including a guide on common transition paths) here: ".concat(r) : "", "\n    ").trim(),
              level: o
            });
            var e;
          };
          return "function" == typeof f ? s(h.mark((function e() {
            var t = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.next = 2, l();

               case 2:
                return e.next = 4, f.apply(void 0, t);

               case 4:
                return e.abrupt("return", e.sent);

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          }))) : l();
        };
        for (var _e = {}, Ce = {
          byteLength: function(e) {
            var t = Fe(e), n = t[0], r = t[1];
            return 3 * (n + r) / 4 - r;
          },
          toByteArray: function(e) {
            var t, n, r = Fe(e), a = r[0], o = r[1], u = new Ne(function(e, t, n) {
              return 3 * (t + n) / 4 - n;
            }(0, a, o)), i = 0, s = o > 0 ? a - 4 : a;
            for (n = 0; n < s; n += 4) t = Pe[e.charCodeAt(n)] << 18 | Pe[e.charCodeAt(n + 1)] << 12 | Pe[e.charCodeAt(n + 2)] << 6 | Pe[e.charCodeAt(n + 3)], 
            u[i++] = t >> 16 & 255, u[i++] = t >> 8 & 255, u[i++] = 255 & t;
            return 2 === o && (t = Pe[e.charCodeAt(n)] << 2 | Pe[e.charCodeAt(n + 1)] >> 4, u[i++] = 255 & t), 1 === o && (t = Pe[e.charCodeAt(n)] << 10 | Pe[e.charCodeAt(n + 1)] << 4 | Pe[e.charCodeAt(n + 2)] >> 2, 
            u[i++] = t >> 8 & 255, u[i++] = 255 & t), u;
          },
          fromByteArray: function(e) {
            for (var t, n = e.length, r = n % 3, a = [], o = 16383, u = 0, i = n - r; u < i; u += o) a.push(je(e, u, u + o > i ? i : u + o));
            return 1 === r ? (t = e[n - 1], a.push(Oe[t >> 2] + Oe[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], 
            a.push(Oe[t >> 10] + Oe[t >> 4 & 63] + Oe[t << 2 & 63] + "=")), a.join("");
          }
        }, Oe = [], Pe = [], Ne = "undefined" != typeof Uint8Array ? Uint8Array : Array, Be = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Le = 0, Ue = Be.length; Le < Ue; ++Le) Oe[Le] = Be[Le], 
        Pe[Be.charCodeAt(Le)] = Le;
        function Fe(e) {
          var t = e.length;
          if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
          var n = e.indexOf("=");
          return -1 === n && (n = t), [ n, n === t ? 0 : 4 - n % 4 ];
        }
        function je(e, t, n) {
          for (var r, a, o = [], u = t; u < n; u += 3) r = (e[u] << 16 & 16711680) + (e[u + 1] << 8 & 65280) + (255 & e[u + 2]), o.push(Oe[(a = r) >> 18 & 63] + Oe[a >> 12 & 63] + Oe[a >> 6 & 63] + Oe[63 & a]);
          return o.join("");
        }
        Pe["-".charCodeAt(0)] = 62, Pe["_".charCodeAt(0)] = 63;
        var De = {};
        function Ge(e) {
          if (Array.isArray(e)) {
            for (var t = [], n = 0; n < e.length; n++) t.push(Ge(e[n]));
            var r = _e.Buffer.concat(t);
            return _e.Buffer.concat([ Me(r.length, 192), r ]);
          }
          var a = function(e) {
            if (!_e.Buffer.isBuffer(e)) {
              if ("string" == typeof e) return ze(e) ? _e.Buffer.from((r = "string" != typeof (n = e) ? n : ze(n) ? n.slice(2) : n).length % 2 ? "0" + r : r, "hex") : _e.Buffer.from(e);
              if ("number" == typeof e) return e ? (t = Ye(e), _e.Buffer.from(t, "hex")) : _e.Buffer.from([]);
              if (null == e) return _e.Buffer.from([]);
              if (e instanceof Uint8Array) return _e.Buffer.from(e);
              throw new Error("invalid type");
            }
            var t;
            var n;
            var r;
            return e;
          }(e);
          return 1 === a.length && a[0] < 128 ? a : _e.Buffer.concat([ Me(a.length, 128), a ]);
        }
        function Me(e, t) {
          if (e < 56) return _e.Buffer.from([ e + t ]);
          var n = Ye(e), r = Ye(t + 55 + n.length / 2);
          return _e.Buffer.from(r + n, "hex");
        }
        function ze(e) {
          return "0x" === e.slice(0, 2);
        }
        function Ye(e) {
          if (e < 0) throw new Error("Invalid integer as argument, must be unsigned!");
          var t = e.toString(16);
          return t.length % 2 ? "0" + t : t;
        }
        function qe(e, t, n) {
          return qe = Ae() ? Reflect.construct.bind() : function(e, t, n) {
            var r = [ null ];
            r.push.apply(r, t);
            var a = new (Function.bind.apply(e, r));
            return n && Ee(a, n.prototype), a;
          }, qe.apply(null, arguments);
        }
        function Ke(e) {
          var t = "function" == typeof Map ? new Map : void 0;
          return Ke = function(e) {
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            var n;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return qe(e, arguments, Se(this).constructor);
            }
            return r.prototype = Object.create(e.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), Ee(r, e);
          }, Ke(e);
        }
        De.read = function(e, t, n, r, a) {
          var o, u, i = 8 * a - r - 1, s = (1 << i) - 1, c = s >> 1, f = -7, l = n ? a - 1 : 0, p = n ? -1 : 1, d = e[t + l];
          for (l += p, o = d & (1 << -f) - 1, d >>= -f, f += i; f > 0; o = 256 * o + e[t + l], l += p, f -= 8) ;
          for (u = o & (1 << -f) - 1, o >>= -f, f += r; f > 0; u = 256 * u + e[t + l], l += p, f -= 8) ;
          if (0 === o) o = 1 - c; else {
            if (o === s) return u ? NaN : 1 / 0 * (d ? -1 : 1);
            u += Math.pow(2, r), o -= c;
          }
          return (d ? -1 : 1) * u * Math.pow(2, o - r);
        }, De.write = function(e, t, n, r, a, o) {
          var u, i, s, c = 8 * o - a - 1, f = (1 << c) - 1, l = f >> 1, p = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = r ? 0 : o - 1, h = r ? 1 : -1, v = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
          for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (i = isNaN(t) ? 1 : 0, u = f) : (u = Math.floor(Math.log(t) / Math.LN2), 
          t * (s = Math.pow(2, -u)) < 1 && (u--, s *= 2), (t += u + l >= 1 ? p / s : p * Math.pow(2, 1 - l)) * s >= 2 && (u++, s /= 2), 
          u + l >= f ? (i = 0, u = f) : u + l >= 1 ? (i = (t * s - 1) * Math.pow(2, a), u += l) : (i = t * Math.pow(2, l - 1) * Math.pow(2, a), 
          u = 0)); a >= 8; e[n + d] = 255 & i, d += h, i /= 256, a -= 8) ;
          for (u = u << a | i, c += a; c > 0; e[n + d] = 255 & u, d += h, u /= 256, c -= 8) ;
          e[n + d - h] |= 128 * v;
        }, function(e) {
          var t = Ce, n = De, r = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
          e.Buffer = u, e.SlowBuffer = function(e) {
            return +e != e && (e = 0), u.alloc(+e);
          }, e.INSPECT_MAX_BYTES = 50;
          var a = 2147483647;
          function o(e) {
            if (e > a) throw new RangeError('The value "' + e + '" is invalid for option "size"');
            var t = new Uint8Array(e);
            return Object.setPrototypeOf(t, u.prototype), t;
          }
          function u(e, t, n) {
            if ("number" == typeof e) {
              if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
              return f(e);
            }
            return i(e, t, n);
          }
          function i(e, t, n) {
            if ("string" == typeof e) return function(e, t) {
              if ("string" == typeof t && "" !== t || (t = "utf8"), !u.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
              var n = 0 | h(e, t), r = o(n), a = r.write(e, t);
              return a !== n && (r = r.slice(0, a)), r;
            }(e, t);
            if (ArrayBuffer.isView(e)) return function(e) {
              if (V(e, Uint8Array)) {
                var t = new Uint8Array(e);
                return p(t.buffer, t.byteOffset, t.byteLength);
              }
              return l(e);
            }(e);
            if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + c(e));
            if (V(e, ArrayBuffer) || e && V(e.buffer, ArrayBuffer)) return p(e, t, n);
            if ("undefined" != typeof SharedArrayBuffer && (V(e, SharedArrayBuffer) || e && V(e.buffer, SharedArrayBuffer))) return p(e, t, n);
            if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
            var r = e.valueOf && e.valueOf();
            if (null != r && r !== e) return u.from(r, t, n);
            var a = function(e) {
              if (u.isBuffer(e)) {
                var t = 0 | d(e.length), n = o(t);
                return 0 === n.length || e.copy(n, 0, 0, t), n;
              }
              return void 0 !== e.length ? "number" != typeof e.length || J(e.length) ? o(0) : l(e) : "Buffer" === e.type && Array.isArray(e.data) ? l(e.data) : void 0;
            }(e);
            if (a) return a;
            if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return u.from(e[Symbol.toPrimitive]("string"), t, n);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + c(e));
          }
          function s(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
            if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
          }
          function f(e) {
            return s(e), o(e < 0 ? 0 : 0 | d(e));
          }
          function l(e) {
            for (var t = e.length < 0 ? 0 : 0 | d(e.length), n = o(t), r = 0; r < t; r += 1) n[r] = 255 & e[r];
            return n;
          }
          function p(e, t, n) {
            if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
            if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
            var r;
            return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), 
            Object.setPrototypeOf(r, u.prototype), r;
          }
          function d(e) {
            if (e >= a) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
            return 0 | e;
          }
          function h(e, t) {
            if (u.isBuffer(e)) return e.length;
            if (ArrayBuffer.isView(e) || V(e, ArrayBuffer)) return e.byteLength;
            if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + c(e));
            var n = e.length, r = arguments.length > 2 && !0 === arguments[2];
            if (!r && 0 === n) return 0;
            for (var a = !1; ;) switch (t) {
             case "ascii":
             case "latin1":
             case "binary":
              return n;

             case "utf8":
             case "utf-8":
              return K(e).length;

             case "ucs2":
             case "ucs-2":
             case "utf16le":
             case "utf-16le":
              return 2 * n;

             case "hex":
              return n >>> 1;

             case "base64":
              return H(e).length;

             default:
              if (a) return r ? -1 : K(e).length;
              t = ("" + t).toLowerCase(), a = !0;
            }
          }
          function v(e, t, n) {
            var r = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
            if ((n >>>= 0) <= (t >>>= 0)) return "";
            for (e || (e = "utf8"); ;) switch (e) {
             case "hex":
              return _(this, t, n);

             case "utf8":
             case "utf-8":
              return S(this, t, n);

             case "ascii":
              return R(this, t, n);

             case "latin1":
             case "binary":
              return T(this, t, n);

             case "base64":
              return I(this, t, n);

             case "ucs2":
             case "ucs-2":
             case "utf16le":
             case "utf-16le":
              return C(this, t, n);

             default:
              if (r) throw new TypeError("Unknown encoding: " + e);
              e = (e + "").toLowerCase(), r = !0;
            }
          }
          function y(e, t, n) {
            var r = e[t];
            e[t] = e[n], e[n] = r;
          }
          function g(e, t, n, r, a) {
            if (0 === e.length) return -1;
            if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), J(n = +n) && (n = a ? 0 : e.length - 1), 
            n < 0 && (n = e.length + n), n >= e.length) {
              if (a) return -1;
              n = e.length - 1;
            } else if (n < 0) {
              if (!a) return -1;
              n = 0;
            }
            if ("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, n, r, a);
            if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : m(e, [ t ], n, r, a);
            throw new TypeError("val must be string, number or Buffer");
          }
          function m(e, t, n, r, a) {
            var o, u = 1, i = e.length, s = t.length;
            if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
              if (e.length < 2 || t.length < 2) return -1;
              u = 2, i /= 2, s /= 2, n /= 2;
            }
            function c(e, t) {
              return 1 === u ? e[t] : e.readUInt16BE(t * u);
            }
            if (a) {
              var f = -1;
              for (o = n; o < i; o++) if (c(e, o) === c(t, -1 === f ? 0 : o - f)) {
                if (-1 === f && (f = o), o - f + 1 === s) return f * u;
              } else -1 !== f && (o -= o - f), f = -1;
            } else for (n + s > i && (n = i - s), o = n; o >= 0; o--) {
              for (var l = !0, p = 0; p < s; p++) if (c(e, o + p) !== c(t, p)) {
                l = !1;
                break;
              }
              if (l) return o;
            }
            return -1;
          }
          function b(e, t, n, r) {
            n = Number(n) || 0;
            var a = e.length - n;
            r ? (r = Number(r)) > a && (r = a) : r = a;
            var o, u = t.length;
            for (r > u / 2 && (r = u / 2), o = 0; o < r; ++o) {
              var i = parseInt(t.substr(2 * o, 2), 16);
              if (J(i)) return o;
              e[n + o] = i;
            }
            return o;
          }
          function w(e, t, n, r) {
            return W(K(t, e.length - n), e, n, r);
          }
          function x(e, t, n, r) {
            return W(function(e) {
              for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
              return t;
            }(t), e, n, r);
          }
          function k(e, t, n, r) {
            return W(H(t), e, n, r);
          }
          function E(e, t, n, r) {
            return W(function(e, t) {
              for (var n, r, a, o = [], u = 0; u < e.length && !((t -= 2) < 0); ++u) r = (n = e.charCodeAt(u)) >> 8, a = n % 256, o.push(a), 
              o.push(r);
              return o;
            }(t, e.length - n), e, n, r);
          }
          function I(e, n, r) {
            return 0 === n && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
          }
          function S(e, t, n) {
            n = Math.min(e.length, n);
            for (var r = [], a = t; a < n; ) {
              var o = e[a], u = null, i = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
              if (a + i <= n) {
                var s = void 0, c = void 0, f = void 0, l = void 0;
                switch (i) {
                 case 1:
                  o < 128 && (u = o);
                  break;

                 case 2:
                  128 == (192 & (s = e[a + 1])) && (l = (31 & o) << 6 | 63 & s) > 127 && (u = l);
                  break;

                 case 3:
                  s = e[a + 1], c = e[a + 2], 128 == (192 & s) && 128 == (192 & c) && (l = (15 & o) << 12 | (63 & s) << 6 | 63 & c) > 2047 && (l < 55296 || l > 57343) && (u = l);
                  break;

                 case 4:
                  s = e[a + 1], c = e[a + 2], f = e[a + 3], 128 == (192 & s) && 128 == (192 & c) && 128 == (192 & f) && (l = (15 & o) << 18 | (63 & s) << 12 | (63 & c) << 6 | 63 & f) > 65535 && l < 1114112 && (u = l);
                }
              }
              null === u ? (u = 65533, i = 1) : u > 65535 && (u -= 65536, r.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), r.push(u), 
              a += i;
            }
            return function(e) {
              var t = e.length;
              if (t <= A) return String.fromCharCode.apply(String, e);
              var n = "", r = 0;
              for (;r < t; ) n += String.fromCharCode.apply(String, e.slice(r, r += A));
              return n;
            }(r);
          }
          e.kMaxLength = a, u.TYPED_ARRAY_SUPPORT = function() {
            try {
              var e = new Uint8Array(1), t = {
                foo: function() {
                  return 42;
                }
              };
              return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
            } catch (e) {
              return !1;
            }
          }(), u.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), 
          Object.defineProperty(u.prototype, "parent", {
            enumerable: !0,
            get: function() {
              if (u.isBuffer(this)) return this.buffer;
            }
          }), Object.defineProperty(u.prototype, "offset", {
            enumerable: !0,
            get: function() {
              if (u.isBuffer(this)) return this.byteOffset;
            }
          }), u.poolSize = 8192, u.from = function(e, t, n) {
            return i(e, t, n);
          }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array), u.alloc = function(e, t, n) {
            return function(e, t, n) {
              return s(e), e <= 0 ? o(e) : void 0 !== t ? "string" == typeof n ? o(e).fill(t, n) : o(e).fill(t) : o(e);
            }(e, t, n);
          }, u.allocUnsafe = function(e) {
            return f(e);
          }, u.allocUnsafeSlow = function(e) {
            return f(e);
          }, u.isBuffer = function(e) {
            return null != e && !0 === e._isBuffer && e !== u.prototype;
          }, u.compare = function(e, t) {
            if (V(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), V(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), 
            !u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (e === t) return 0;
            for (var n = e.length, r = t.length, a = 0, o = Math.min(n, r); a < o; ++a) if (e[a] !== t[a]) {
              n = e[a], r = t[a];
              break;
            }
            return n < r ? -1 : r < n ? 1 : 0;
          }, u.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
             case "hex":
             case "utf8":
             case "utf-8":
             case "ascii":
             case "latin1":
             case "binary":
             case "base64":
             case "ucs2":
             case "ucs-2":
             case "utf16le":
             case "utf-16le":
              return !0;

             default:
              return !1;
            }
          }, u.concat = function(e, t) {
            if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return u.alloc(0);
            var n;
            if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            var r = u.allocUnsafe(t), a = 0;
            for (n = 0; n < e.length; ++n) {
              var o = e[n];
              if (V(o, Uint8Array)) a + o.length > r.length ? (u.isBuffer(o) || (o = u.from(o)), o.copy(r, a)) : Uint8Array.prototype.set.call(r, o, a); else {
                if (!u.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                o.copy(r, a);
              }
              a += o.length;
            }
            return r;
          }, u.byteLength = h, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) y(this, t, t + 1);
            return this;
          }, u.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
            return this;
          }, u.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
            return this;
          }, u.prototype.toString = function() {
            var e = this.length;
            return 0 === e ? "" : 0 === arguments.length ? S(this, 0, e) : v.apply(this, arguments);
          }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(e) {
            if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === u.compare(this, e);
          }, u.prototype.inspect = function() {
            var t = "", n = e.INSPECT_MAX_BYTES;
            return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
          }, r && (u.prototype[r] = u.prototype.inspect), u.prototype.compare = function(e, t, n, r, a) {
            if (V(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), !u.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + c(e));
            if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === a && (a = this.length), 
            t < 0 || n > e.length || r < 0 || a > this.length) throw new RangeError("out of range index");
            if (r >= a && t >= n) return 0;
            if (r >= a) return -1;
            if (t >= n) return 1;
            if (this === e) return 0;
            for (var o = (a >>>= 0) - (r >>>= 0), i = (n >>>= 0) - (t >>>= 0), s = Math.min(o, i), f = this.slice(r, a), l = e.slice(t, n), p = 0; p < s; ++p) if (f[p] !== l[p]) {
              o = f[p], i = l[p];
              break;
            }
            return o < i ? -1 : i < o ? 1 : 0;
          }, u.prototype.includes = function(e, t, n) {
            return -1 !== this.indexOf(e, t, n);
          }, u.prototype.indexOf = function(e, t, n) {
            return g(this, e, t, n, !0);
          }, u.prototype.lastIndexOf = function(e, t, n) {
            return g(this, e, t, n, !1);
          }, u.prototype.write = function(e, t, n, r) {
            if (void 0 === t) r = "utf8", n = this.length, t = 0; else if (void 0 === n && "string" == typeof t) r = t, n = this.length, 
            t = 0; else {
              if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
            }
            var a = this.length - t;
            if ((void 0 === n || n > a) && (n = a), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var o = !1; ;) switch (r) {
             case "hex":
              return b(this, e, t, n);

             case "utf8":
             case "utf-8":
              return w(this, e, t, n);

             case "ascii":
             case "latin1":
             case "binary":
              return x(this, e, t, n);

             case "base64":
              return k(this, e, t, n);

             case "ucs2":
             case "ucs-2":
             case "utf16le":
             case "utf-16le":
              return E(this, e, t, n);

             default:
              if (o) throw new TypeError("Unknown encoding: " + r);
              r = ("" + r).toLowerCase(), o = !0;
            }
          }, u.prototype.toJSON = function() {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0)
            };
          };
          var A = 4096;
          function R(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var a = t; a < n; ++a) r += String.fromCharCode(127 & e[a]);
            return r;
          }
          function T(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var a = t; a < n; ++a) r += String.fromCharCode(e[a]);
            return r;
          }
          function _(e, t, n) {
            var r = e.length;
            (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
            for (var a = "", o = t; o < n; ++o) a += X[e[o]];
            return a;
          }
          function C(e, t, n) {
            for (var r = e.slice(t, n), a = "", o = 0; o < r.length - 1; o += 2) a += String.fromCharCode(r[o] + 256 * r[o + 1]);
            return a;
          }
          function O(e, t, n) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
          }
          function P(e, t, n, r, a, o) {
            if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > a || t < o) throw new RangeError('"value" argument is out of bounds');
            if (n + r > e.length) throw new RangeError("Index out of range");
          }
          function N(e, t, n, r, a) {
            M(t, r, a, e, n, 7);
            var o = Number(t & BigInt(4294967295));
            e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o;
            var u = Number(t >> BigInt(32) & BigInt(4294967295));
            return e[n++] = u, u >>= 8, e[n++] = u, u >>= 8, e[n++] = u, u >>= 8, e[n++] = u, n;
          }
          function B(e, t, n, r, a) {
            M(t, r, a, e, n, 7);
            var o = Number(t & BigInt(4294967295));
            e[n + 7] = o, o >>= 8, e[n + 6] = o, o >>= 8, e[n + 5] = o, o >>= 8, e[n + 4] = o;
            var u = Number(t >> BigInt(32) & BigInt(4294967295));
            return e[n + 3] = u, u >>= 8, e[n + 2] = u, u >>= 8, e[n + 1] = u, u >>= 8, e[n] = u, n + 8;
          }
          function L(e, t, n, r, a, o) {
            if (n + r > e.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range");
          }
          function U(e, t, r, a, o) {
            return t = +t, r >>>= 0, o || L(e, 0, r, 4), n.write(e, t, r, a, 23, 4), r + 4;
          }
          function F(e, t, r, a, o) {
            return t = +t, r >>>= 0, o || L(e, 0, r, 8), n.write(e, t, r, a, 52, 8), r + 8;
          }
          u.prototype.slice = function(e, t) {
            var n = this.length;
            (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), 
            t < e && (t = e);
            var r = this.subarray(e, t);
            return Object.setPrototypeOf(r, u.prototype), r;
          }, u.prototype.readUintLE = u.prototype.readUIntLE = function(e, t, n) {
            e >>>= 0, t >>>= 0, n || O(e, t, this.length);
            for (var r = this[e], a = 1, o = 0; ++o < t && (a *= 256); ) r += this[e + o] * a;
            return r;
          }, u.prototype.readUintBE = u.prototype.readUIntBE = function(e, t, n) {
            e >>>= 0, t >>>= 0, n || O(e, t, this.length);
            for (var r = this[e + --t], a = 1; t > 0 && (a *= 256); ) r += this[e + --t] * a;
            return r;
          }, u.prototype.readUint8 = u.prototype.readUInt8 = function(e, t) {
            return e >>>= 0, t || O(e, 1, this.length), this[e];
          }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(e, t) {
            return e >>>= 0, t || O(e, 2, this.length), this[e] | this[e + 1] << 8;
          }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(e, t) {
            return e >>>= 0, t || O(e, 2, this.length), this[e] << 8 | this[e + 1];
          }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(e, t) {
            return e >>>= 0, t || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
          }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(e, t) {
            return e >>>= 0, t || O(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
          }, u.prototype.readBigUInt64LE = Z((function(e) {
            z(e >>>= 0, "offset");
            var t = this[e], n = this[e + 7];
            void 0 !== t && void 0 !== n || Y(e, this.length - 8);
            var r = t + this[++e] * Math.pow(2, 8) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 24), a = this[++e] + this[++e] * Math.pow(2, 8) + this[++e] * Math.pow(2, 16) + n * Math.pow(2, 24);
            return BigInt(r) + (BigInt(a) << BigInt(32));
          })), u.prototype.readBigUInt64BE = Z((function(e) {
            z(e >>>= 0, "offset");
            var t = this[e], n = this[e + 7];
            void 0 !== t && void 0 !== n || Y(e, this.length - 8);
            var r = t * Math.pow(2, 24) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 8) + this[++e], a = this[++e] * Math.pow(2, 24) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 8) + n;
            return (BigInt(r) << BigInt(32)) + BigInt(a);
          })), u.prototype.readIntLE = function(e, t, n) {
            e >>>= 0, t >>>= 0, n || O(e, t, this.length);
            for (var r = this[e], a = 1, o = 0; ++o < t && (a *= 256); ) r += this[e + o] * a;
            return r >= (a *= 128) && (r -= Math.pow(2, 8 * t)), r;
          }, u.prototype.readIntBE = function(e, t, n) {
            e >>>= 0, t >>>= 0, n || O(e, t, this.length);
            for (var r = t, a = 1, o = this[e + --r]; r > 0 && (a *= 256); ) o += this[e + --r] * a;
            return o >= (a *= 128) && (o -= Math.pow(2, 8 * t)), o;
          }, u.prototype.readInt8 = function(e, t) {
            return e >>>= 0, t || O(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
          }, u.prototype.readInt16LE = function(e, t) {
            e >>>= 0, t || O(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n;
          }, u.prototype.readInt16BE = function(e, t) {
            e >>>= 0, t || O(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n;
          }, u.prototype.readInt32LE = function(e, t) {
            return e >>>= 0, t || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
          }, u.prototype.readInt32BE = function(e, t) {
            return e >>>= 0, t || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
          }, u.prototype.readBigInt64LE = Z((function(e) {
            z(e >>>= 0, "offset");
            var t = this[e], n = this[e + 7];
            void 0 !== t && void 0 !== n || Y(e, this.length - 8);
            var r = this[e + 4] + this[e + 5] * Math.pow(2, 8) + this[e + 6] * Math.pow(2, 16) + (n << 24);
            return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * Math.pow(2, 8) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 24));
          })), u.prototype.readBigInt64BE = Z((function(e) {
            z(e >>>= 0, "offset");
            var t = this[e], n = this[e + 7];
            void 0 !== t && void 0 !== n || Y(e, this.length - 8);
            var r = (t << 24) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 8) + this[++e];
            return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * Math.pow(2, 24) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 8) + n);
          })), u.prototype.readFloatLE = function(e, t) {
            return e >>>= 0, t || O(e, 4, this.length), n.read(this, e, !0, 23, 4);
          }, u.prototype.readFloatBE = function(e, t) {
            return e >>>= 0, t || O(e, 4, this.length), n.read(this, e, !1, 23, 4);
          }, u.prototype.readDoubleLE = function(e, t) {
            return e >>>= 0, t || O(e, 8, this.length), n.read(this, e, !0, 52, 8);
          }, u.prototype.readDoubleBE = function(e, t) {
            return e >>>= 0, t || O(e, 8, this.length), n.read(this, e, !1, 52, 8);
          }, u.prototype.writeUintLE = u.prototype.writeUIntLE = function(e, t, n, r) {
            e = +e, t >>>= 0, n >>>= 0, r || P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var a = 1, o = 0;
            for (this[t] = 255 & e; ++o < n && (a *= 256); ) this[t + o] = e / a & 255;
            return t + n;
          }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(e, t, n, r) {
            e = +e, t >>>= 0, n >>>= 0, r || P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var a = n - 1, o = 1;
            for (this[t + a] = 255 & e; --a >= 0 && (o *= 256); ) this[t + a] = e / o & 255;
            return t + n;
          }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(e, t, n) {
            return e = +e, t >>>= 0, n || P(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1;
          }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(e, t, n) {
            return e = +e, t >>>= 0, n || P(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
          }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(e, t, n) {
            return e = +e, t >>>= 0, n || P(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
          }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(e, t, n) {
            return e = +e, t >>>= 0, n || P(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, 
            this[t] = 255 & e, t + 4;
          }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(e, t, n) {
            return e = +e, t >>>= 0, n || P(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, 
            this[t + 3] = 255 & e, t + 4;
          }, u.prototype.writeBigUInt64LE = Z((function(e) {
            return N(this, e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, BigInt(0), BigInt("0xffffffffffffffff"));
          })), u.prototype.writeBigUInt64BE = Z((function(e) {
            return B(this, e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, BigInt(0), BigInt("0xffffffffffffffff"));
          })), u.prototype.writeIntLE = function(e, t, n, r) {
            if (e = +e, t >>>= 0, !r) {
              var a = Math.pow(2, 8 * n - 1);
              P(this, e, t, n, a - 1, -a);
            }
            var o = 0, u = 1, i = 0;
            for (this[t] = 255 & e; ++o < n && (u *= 256); ) e < 0 && 0 === i && 0 !== this[t + o - 1] && (i = 1), this[t + o] = (e / u >> 0) - i & 255;
            return t + n;
          }, u.prototype.writeIntBE = function(e, t, n, r) {
            if (e = +e, t >>>= 0, !r) {
              var a = Math.pow(2, 8 * n - 1);
              P(this, e, t, n, a - 1, -a);
            }
            var o = n - 1, u = 1, i = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (u *= 256); ) e < 0 && 0 === i && 0 !== this[t + o + 1] && (i = 1), this[t + o] = (e / u >> 0) - i & 255;
            return t + n;
          }, u.prototype.writeInt8 = function(e, t, n) {
            return e = +e, t >>>= 0, n || P(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
          }, u.prototype.writeInt16LE = function(e, t, n) {
            return e = +e, t >>>= 0, n || P(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
          }, u.prototype.writeInt16BE = function(e, t, n) {
            return e = +e, t >>>= 0, n || P(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
          }, u.prototype.writeInt32LE = function(e, t, n) {
            return e = +e, t >>>= 0, n || P(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, 
            this[t + 3] = e >>> 24, t + 4;
          }, u.prototype.writeInt32BE = function(e, t, n) {
            return e = +e, t >>>= 0, n || P(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, 
            this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
          }, u.prototype.writeBigInt64LE = Z((function(e) {
            return N(this, e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
          })), u.prototype.writeBigInt64BE = Z((function(e) {
            return B(this, e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
          })), u.prototype.writeFloatLE = function(e, t, n) {
            return U(this, e, t, !0, n);
          }, u.prototype.writeFloatBE = function(e, t, n) {
            return U(this, e, t, !1, n);
          }, u.prototype.writeDoubleLE = function(e, t, n) {
            return F(this, e, t, !0, n);
          }, u.prototype.writeDoubleBE = function(e, t, n) {
            return F(this, e, t, !1, n);
          }, u.prototype.copy = function(e, t, n, r) {
            if (!u.isBuffer(e)) throw new TypeError("argument should be a Buffer");
            if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), 
            r === n) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
            var a = r - n;
            return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), 
            a;
          }, u.prototype.fill = function(e, t, n, r) {
            if ("string" == typeof e) {
              if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
              if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
              if (1 === e.length) {
                var a = e.charCodeAt(0);
                ("utf8" === r && a < 128 || "latin1" === r) && (e = a);
              }
            } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
            if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
            if (n <= t) return this;
            var o;
            if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e) for (o = t; o < n; ++o) this[o] = e; else {
              var i = u.isBuffer(e) ? e : u.from(e, r), s = i.length;
              if (0 === s) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
              for (o = 0; o < n - t; ++o) this[o + t] = i[o % s];
            }
            return this;
          };
          var j = {};
          function D(e, t, n) {
            j[e] = function(n) {
              Ie(a, n);
              var r = Te(a);
              function a() {
                var n;
                return be(this, a), n = r.call(this), Object.defineProperty(ke(n), "message", {
                  value: t.apply(ke(n), arguments),
                  writable: !0,
                  configurable: !0
                }), n.name = "".concat(n.name, " [").concat(e, "]"), n.stack, delete n.name, n;
              }
              return xe(a, [ {
                key: "code",
                get: function() {
                  return e;
                },
                set: function(e) {
                  Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: e,
                    writable: !0
                  });
                }
              }, {
                key: "toString",
                value: function() {
                  return "".concat(this.name, " [").concat(e, "]: ").concat(this.message);
                }
              } ]), a;
            }(n);
          }
          function G(e) {
            for (var t = "", n = e.length, r = "-" === e[0] ? 1 : 0; n >= r + 4; n -= 3) t = "_".concat(e.slice(n - 3, n)).concat(t);
            return "".concat(e.slice(0, n)).concat(t);
          }
          function M(e, t, n, r, a, o) {
            if (e > n || e < t) {
              var u, i = "bigint" == typeof t ? "n" : "";
              throw u = o > 3 ? 0 === t || t === BigInt(0) ? ">= 0".concat(i, " and < 2").concat(i, " ** ").concat(8 * (o + 1)).concat(i) : ">= -(2".concat(i, " ** ").concat(8 * (o + 1) - 1).concat(i, ") and < 2 ** ") + "".concat(8 * (o + 1) - 1).concat(i) : ">= ".concat(t).concat(i, " and <= ").concat(n).concat(i), 
              new j.ERR_OUT_OF_RANGE("value", u, e);
            }
            !function(e, t, n) {
              z(t, "offset"), void 0 !== e[t] && void 0 !== e[t + n] || Y(t, e.length - (n + 1));
            }(r, a, o);
          }
          function z(e, t) {
            if ("number" != typeof e) throw new j.ERR_INVALID_ARG_TYPE(t, "number", e);
          }
          function Y(e, t, n) {
            if (Math.floor(e) !== e) throw z(e, n), new j.ERR_OUT_OF_RANGE(n || "offset", "an integer", e);
            if (t < 0) throw new j.ERR_BUFFER_OUT_OF_BOUNDS;
            throw new j.ERR_OUT_OF_RANGE(n || "offset", ">= ".concat(n ? 1 : 0, " and <= ").concat(t), e);
          }
          D("ERR_BUFFER_OUT_OF_BOUNDS", (function(e) {
            return e ? "".concat(e, " is outside of buffer bounds") : "Attempt to access memory outside buffer bounds";
          }), RangeError), D("ERR_INVALID_ARG_TYPE", (function(e, t) {
            return 'The "'.concat(e, '" argument must be of type number. Received type ').concat(c(t));
          }), TypeError), D("ERR_OUT_OF_RANGE", (function(e, t, n) {
            var r = 'The value of "'.concat(e, '" is out of range.'), a = n;
            return Number.isInteger(n) && Math.abs(n) > Math.pow(2, 32) ? a = G(String(n)) : "bigint" == typeof n && (a = String(n), 
            (n > Math.pow(BigInt(2), BigInt(32)) || n < -Math.pow(BigInt(2), BigInt(32))) && (a = G(a)), a += "n"), r + " It must be ".concat(t, ". Received ").concat(a);
          }), RangeError);
          var q = /[^+/0-9A-Za-z-_]/g;
          function K(e, t) {
            var n;
            t = t || 1 / 0;
            for (var r = e.length, a = null, o = [], u = 0; u < r; ++u) {
              if ((n = e.charCodeAt(u)) > 55295 && n < 57344) {
                if (!a) {
                  if (n > 56319) {
                    (t -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  if (u + 1 === r) {
                    (t -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  a = n;
                  continue;
                }
                if (n < 56320) {
                  (t -= 3) > -1 && o.push(239, 191, 189), a = n;
                  continue;
                }
                n = 65536 + (a - 55296 << 10 | n - 56320);
              } else a && (t -= 3) > -1 && o.push(239, 191, 189);
              if (a = null, n < 128) {
                if ((t -= 1) < 0) break;
                o.push(n);
              } else if (n < 2048) {
                if ((t -= 2) < 0) break;
                o.push(n >> 6 | 192, 63 & n | 128);
              } else if (n < 65536) {
                if ((t -= 3) < 0) break;
                o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
              } else {
                if (!(n < 1114112)) throw new Error("Invalid code point");
                if ((t -= 4) < 0) break;
                o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
              }
            }
            return o;
          }
          function H(e) {
            return t.toByteArray(function(e) {
              if ((e = (e = e.split("=")[0]).trim().replace(q, "")).length < 2) return "";
              for (;e.length % 4 != 0; ) e += "=";
              return e;
            }(e));
          }
          function W(e, t, n, r) {
            var a;
            for (a = 0; a < r && !(a + n >= t.length || a >= e.length); ++a) t[a + n] = e[a];
            return a;
          }
          function V(e, t) {
            return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name;
          }
          function J(e) {
            return e != e;
          }
          var X = function() {
            for (var e = "0123456789abcdef", t = new Array(256), n = 0; n < 16; ++n) for (var r = 16 * n, a = 0; a < 16; ++a) t[r + a] = e[n] + e[a];
            return t;
          }();
          function Z(e) {
            return "undefined" == typeof BigInt ? $ : e;
          }
          function $() {
            throw new Error("BigInt not supported");
          }
        }(_e);
        var He = {
          exports: {}
        };
        !function(e, t) {
          var n = function() {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if (void 0 !== n) return n;
            throw new Error("unable to locate global object");
          }();
          e.exports = t = n.fetch, n.fetch && (t.default = n.fetch.bind(n)), t.Headers = n.Headers, t.Request = n.Request, t.Response = n.Response;
        }(He, He.exports);
        var We = He.exports;
        function Ve(e) {
          return null == e ? null : e.replace(/^0x/, "").replace(/^Fx/, "");
        }
        function Je(e) {
          return null == e ? null : "0x" + Ve(e);
        }
        var Xe = function(e) {
          Ie(n, e);
          var t = Te(n);
          function n(e) {
            var r, a = e.error, o = e.hostname, u = e.path, i = e.method, s = e.requestBody, c = e.responseBody, f = e.responseStatusText, l = e.statusCode;
            be(this, n);
            var p = "\n      HTTP Request Error: An error occurred when interacting with the Access API.\n      ".concat(a ? "error=".concat(a) : "", "\n      ").concat(o ? "hostname=".concat(o) : "", "\n      ").concat(u ? "path=".concat(u) : "", "\n      ").concat(i ? "method=".concat(i) : "", "\n      ").concat(s ? "requestBody=".concat(s) : "", "\n      ").concat(c ? "responseBody=".concat(c) : "", "\n      ").concat(f ? "responseStatusText=".concat(f) : "", "\n      ").concat(l ? "statusCode=".concat(l) : "", "\n    ");
            return (r = t.call(this, p)).name = "HTTP Request Error", r.statusCode = l, r.errorMessage = a, r;
          }
          return xe(n);
        }(Ke(Error));
        function Ze(e) {
          return $e.apply(this, arguments);
        }
        function $e() {
          return $e = s(h.mark((function e(t) {
            var n, r, a, o, u, i, c, f, l, p, d, v, y;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return y = function() {
                  return y = s(h.mark((function e() {
                    var t, n, r = arguments;
                    return h.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                       case 0:
                        return t = r.length > 0 && void 0 !== r[0] ? r[0] : 0, e.prev = 1, e.next = 4, d();

                       case 4:
                        return n = e.sent, e.abrupt("return", n);

                       case 8:
                        if (e.prev = 8, e.t0 = e.catch(1), ![ 408, 429, 500, 502, 503, 504 ].includes(e.t0.statusCode)) {
                          e.next = 17;
                          break;
                        }
                        return e.next = 14, new Promise((function(n, r) {
                          t < c ? (console.warn("Access node unavailable, retrying in ".concat(l, " ms...")), setTimeout((function() {
                            n(v(t + 1));
                          }), l)) : r(e.t0);
                        }));

                       case 14:
                        return e.abrupt("return", e.sent);

                       case 17:
                        throw e.t0;

                       case 18:
                       case "end":
                        return e.stop();
                      }
                    }), e, null, [ [ 1, 8 ] ]);
                  }))), y.apply(this, arguments);
                }, v = function() {
                  return y.apply(this, arguments);
                }, d = function() {
                  return We("".concat(n).concat(r), {
                    method: a,
                    body: p,
                    headers: u
                  }).then(function() {
                    var e = s(h.mark((function e(t) {
                      var o, u;
                      return h.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                         case 0:
                          if (!t.ok) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return", t.json());

                         case 2:
                          if (!t.body) {
                            e.next = 8;
                            break;
                          }
                          return e.next = 5, t.text();

                         case 5:
                          e.t0 = e.sent, e.next = 9;
                          break;

                         case 8:
                          e.t0 = null;

                         case 9:
                          throw o = e.t0, u = Qe(o), new Xe({
                            error: null == u ? void 0 : u.message,
                            hostname: n,
                            path: r,
                            method: a,
                            requestBody: p,
                            responseBody: o,
                            responseStatusText: t.statusText,
                            statusCode: t.status
                          });

                         case 12:
                         case "end":
                          return e.stop();
                        }
                      }), e);
                    })));
                    return function(t) {
                      return e.apply(this, arguments);
                    };
                  }()).catch(function() {
                    var e = s(h.mark((function e(t) {
                      return h.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                         case 0:
                          if (!(t instanceof Xe)) {
                            e.next = 2;
                            break;
                          }
                          throw t;

                         case 2:
                          return e.next = 4, me({
                            title: "Access Node Error",
                            message: "The provided access node ".concat(n, " does not appear to be a valid REST/HTTP access node.\nPlease verify that you are not unintentionally using a GRPC access node.\nSee more here: https://docs.onflow.org/fcl/reference/sdk-guidelines/#connect"),
                            level: ye.error
                          });

                         case 4:
                          throw new Xe({
                            error: null == t ? void 0 : t.message,
                            hostname: n,
                            path: r,
                            method: a,
                            requestBody: p
                          });

                         case 5:
                         case "end":
                          return e.stop();
                        }
                      }), e);
                    })));
                    return function(t) {
                      return e.apply(this, arguments);
                    };
                  }());
                }, n = t.hostname, r = t.path, a = t.method, o = t.body, u = t.headers, i = t.retryLimit, c = void 0 === i ? 5 : i, f = t.retryIntervalMs, 
                l = void 0 === f ? 1e3 : f, p = o ? JSON.stringify(o) : null, e.next = 7, v();

               case 7:
                return e.abrupt("return", e.sent);

               case 8:
               case "end":
                return e.stop();
              }
            }), e);
          }))), $e.apply(this, arguments);
        }
        function Qe(e) {
          try {
            return JSON.parse(e);
          } catch (e) {
            return null;
          }
        }
        function et(e, t, n) {
          return tt.apply(this, arguments);
        }
        function tt() {
          return tt = s(h.mark((function e(t, n, r) {
            var a, o;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return a = r.httpRequest || Ze, e.next = 3, a({
                  hostname: r.node,
                  path: "/v1/scripts?block_id=".concat(t.block.id),
                  method: "POST",
                  body: {
                    script: n.Buffer.from(t.message.cadence).toString("base64"),
                    arguments: t.message.arguments.map((function(e) {
                      return n.Buffer.from(JSON.stringify(t.arguments[e].asArgument)).toString("base64");
                    }))
                  }
                });

               case 3:
                return o = e.sent, e.abrupt("return", ut(t, n, o));

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          }))), tt.apply(this, arguments);
        }
        function nt(e, t, n) {
          return rt.apply(this, arguments);
        }
        function rt() {
          return rt = s(h.mark((function e(t, n, r) {
            var a, o;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return a = r.httpRequest || Ze, e.next = 3, a({
                  hostname: r.node,
                  path: "/v1/scripts?block_height=".concat(t.block.height),
                  method: "POST",
                  body: {
                    script: n.Buffer.from(t.message.cadence).toString("base64"),
                    arguments: t.message.arguments.map((function(e) {
                      return n.Buffer.from(JSON.stringify(t.arguments[e].asArgument)).toString("base64");
                    }))
                  }
                });

               case 3:
                return o = e.sent, e.abrupt("return", ut(t, n, o));

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          }))), rt.apply(this, arguments);
        }
        function at(e, t, n) {
          return ot.apply(this, arguments);
        }
        function ot() {
          return ot = s(h.mark((function e(t, n, r) {
            var a, o;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return a = r.httpRequest || Ze, e.next = 3, a({
                  hostname: r.node,
                  path: "/v1/scripts?block_height=sealed",
                  method: "POST",
                  body: {
                    script: n.Buffer.from(t.message.cadence).toString("base64"),
                    arguments: t.message.arguments.map((function(e) {
                      return n.Buffer.from(JSON.stringify(t.arguments[e].asArgument)).toString("base64");
                    }))
                  }
                });

               case 3:
                return o = e.sent, e.abrupt("return", ut(t, n, o));

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          }))), ot.apply(this, arguments);
        }
        function ut(e, t, n) {
          var r = t.response();
          return r.tag = e.tag, r.encodedData = JSON.parse(t.Buffer.from(n, "base64").toString()), r;
        }
        function it(e) {
          return st.apply(this, arguments);
        }
        function st() {
          return st = s(h.mark((function e(t) {
            var n, r, a = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = a.length > 1 && void 0 !== a[1] ? a[1] : {}, he((r = a.length > 2 && void 0 !== a[2] ? a[2] : {}).node, "SDK Send Execute Script Error: opts.node must be defined."), 
                he(n.response, "SDK Send Execute Script Error: context.response must be defined."), he(n.Buffer, "SDK Send Execute Script Error: context.Buffer must be defined."), 
                e.next = 7, t;

               case 7:
                if (!(t = e.sent).block.id) {
                  e.next = 14;
                  break;
                }
                return e.next = 11, et(t, n, r);

               case 11:
               case 17:
               case 22:
                return e.abrupt("return", e.sent);

               case 14:
                if (!t.block.height) {
                  e.next = 20;
                  break;
                }
                return e.next = 17, nt(t, n, r);

               case 20:
                return e.next = 22, at(t, n, r);

               case 23:
               case "end":
                return e.stop();
              }
            }), e);
          }))), st.apply(this, arguments);
        }
        var ct = {
          SHA2_256: 1,
          SHA2_384: 2,
          SHA3_256: 3,
          SHA3_384: 4,
          KMAC128_BLS_BLS12_381: 5
        }, ft = {
          ECDSA_P256: 1,
          ECDSA_secp256k1: 2,
          BLS_BLS12_381: 3
        };
        function lt(e, t, n) {
          return pt.apply(this, arguments);
        }
        function pt() {
          return (pt = s(h.mark((function e(t, n, r) {
            var a, o;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return a = r.httpRequest || Ze, e.next = 3, a({
                  hostname: r.node,
                  path: "/v1/accounts/".concat(t.account.addr, "?block_height=").concat(t.block.height, "&expand=contracts,keys"),
                  method: "GET",
                  body: null
                });

               case 3:
                return o = e.sent, e.abrupt("return", vt(t, n, o));

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function dt(e, t, n) {
          return ht.apply(this, arguments);
        }
        function ht() {
          return (ht = s(h.mark((function e(t, n, r) {
            var a, o;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return a = r.httpRequest || Ze, e.next = 3, a({
                  hostname: r.node,
                  path: "/v1/accounts/".concat(t.account.addr, "?block_height=sealed&expand=contracts,keys"),
                  method: "GET",
                  body: null
                });

               case 3:
                return o = e.sent, e.abrupt("return", vt(t, n, o));

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function vt(e, t, n) {
          var r, a, o = t.response();
          return o.tag = e.tag, o.account = {
            address: n.address,
            balance: Number(n.balance),
            code: "",
            contracts: function(e) {
              var n = {};
              if (!e) return n;
              for (var r = 0, a = Object.keys(e); r < a.length; r++) {
                var o = a[r];
                n[o] = t.Buffer.from(e[o], "base64").toString();
              }
              return n;
            }(n.contracts),
            keys: null !== (r = null === (a = n.keys) || void 0 === a ? void 0 : a.map((function(e) {
              return {
                index: Number(e.index),
                publicKey: e.public_key.replace(/^0x/, ""),
                signAlgo: ft[e.signing_algorithm],
                signAlgoString: e.signing_algorithm,
                hashAlgo: ct[e.hashing_algorithm],
                hashAlgoString: e.hashing_algorithm,
                sequenceNumber: Number(e.sequence_number),
                weight: Number(e.weight),
                revoked: e.revoked
              };
            }))) && void 0 !== r ? r : []
          }, o;
        }
        function yt(e) {
          return gt.apply(this, arguments);
        }
        function gt() {
          return gt = s(h.mark((function e(t) {
            var n, r, a = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = a.length > 1 && void 0 !== a[1] ? a[1] : {}, he((r = a.length > 2 && void 0 !== a[2] ? a[2] : {}).node, "SDK Send Get Account Error: opts.node must be defined."), 
                he(n.response, "SDK Send Get Account Error: context.response must be defined."), he(n.Buffer, "SDK Send Get Account Error: context.Buffer must be defined."), 
                e.next = 7, t;

               case 7:
                if (null === (t = e.sent).block.height) {
                  e.next = 14;
                  break;
                }
                return e.next = 11, lt(t, n, r);

               case 11:
               case 16:
                return e.abrupt("return", e.sent);

               case 14:
                return e.next = 16, dt(t, n, r);

               case 17:
               case "end":
                return e.stop();
              }
            }), e);
          }))), gt.apply(this, arguments);
        }
        function mt(e, t, n) {
          return bt.apply(this, arguments);
        }
        function bt() {
          return (bt = s(h.mark((function e(t, n, r) {
            var a, o;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return a = r.httpRequest || Ze, e.next = 3, a({
                  hostname: r.node,
                  path: "/v1/blocks/".concat(t.block.id),
                  method: "GET",
                  body: null
                });

               case 3:
                return o = e.sent, e.abrupt("return", It(t, n, o));

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function wt(e, t, n) {
          return xt.apply(this, arguments);
        }
        function xt() {
          return (xt = s(h.mark((function e(t, n, r) {
            var a, o;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return a = r.httpRequest || Ze, e.next = 3, a({
                  hostname: r.node,
                  path: "/v1/blocks?height=".concat(t.block.height),
                  method: "GET",
                  body: null
                });

               case 3:
                return o = e.sent, e.abrupt("return", It(t, n, o));

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function kt(e, t, n) {
          return Et.apply(this, arguments);
        }
        function Et() {
          return (Et = s(h.mark((function e(t, n, r) {
            var a, o, u, i;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return o = r.httpRequest || Ze, u = null !== (a = t.block) && void 0 !== a && a.isSealed ? "sealed" : "finalized", e.next = 4, 
                o({
                  hostname: r.node,
                  path: "/v1/blocks?height=".concat(u),
                  method: "GET",
                  body: null
                });

               case 4:
                return i = e.sent, e.abrupt("return", It(t, n, i));

               case 6:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function It(e, t, n) {
          var r = n.length ? n[0] : null, a = t.response();
          return a.tag = e.tag, a.blockHeader = {
            id: r.header.id,
            parentId: r.header.parent_id,
            height: Number(r.header.height),
            timestamp: r.header.timestamp
          }, a;
        }
        function St(e) {
          return At.apply(this, arguments);
        }
        function At() {
          return At = s(h.mark((function e(t) {
            var n, r, a, o, u = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = u.length > 1 && void 0 !== u[1] ? u[1] : {}, he((r = u.length > 2 && void 0 !== u[2] ? u[2] : {}).node, "SDK Send Get Block Header Error: opts.node must be defined."), 
                he(n.response, "SDK Send Get Block Header Error: context.response must be defined."), e.next = 6, t;

               case 6:
                if (t = e.sent, a = null !== t.block.id, o = null !== t.block.height, !a) {
                  e.next = 15;
                  break;
                }
                return e.next = 12, mt(t, n, r);

               case 12:
               case 18:
               case 23:
                return e.abrupt("return", e.sent);

               case 15:
                if (!o) {
                  e.next = 21;
                  break;
                }
                return e.next = 18, wt(t, n, r);

               case 21:
                return e.next = 23, kt(t, n, r);

               case 24:
               case "end":
                return e.stop();
              }
            }), e);
          }))), At.apply(this, arguments);
        }
        function Rt(e, t, n) {
          return Tt.apply(this, arguments);
        }
        function Tt() {
          return (Tt = s(h.mark((function e(t, n, r) {
            var a, o;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return a = r.httpRequest || Ze, e.next = 3, a({
                  hostname: r.node,
                  path: "/v1/blocks/".concat(t.block.id, "?expand=payload"),
                  method: "GET",
                  body: null
                });

               case 3:
                return o = e.sent, e.abrupt("return", Nt(t, n, o));

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function _t(e, t, n) {
          return Ct.apply(this, arguments);
        }
        function Ct() {
          return (Ct = s(h.mark((function e(t, n, r) {
            var a, o;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return a = r.httpRequest || Ze, e.next = 3, a({
                  hostname: r.node,
                  path: "/v1/blocks?height=".concat(t.block.height, "&expand=payload"),
                  method: "GET",
                  body: null
                });

               case 3:
                return o = e.sent, e.abrupt("return", Nt(t, n, o));

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function Ot(e, t, n) {
          return Pt.apply(this, arguments);
        }
        function Pt() {
          return (Pt = s(h.mark((function e(t, n, r) {
            var a, o, u, i;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return o = r.httpRequest || Ze, u = null !== (a = t.block) && void 0 !== a && a.isSealed ? "sealed" : "final", e.next = 4, 
                o({
                  hostname: r.node,
                  path: "/v1/blocks?height=".concat(u, "&expand=payload"),
                  method: "GET",
                  body: null
                });

               case 4:
                return i = e.sent, e.abrupt("return", Nt(t, n, i));

               case 6:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function Nt(e, t, n) {
          var r = n.length ? n[0] : null, a = t.response();
          return a.tag = e.tag, a.block = {
            id: r.header.id,
            parentId: r.header.parent_id,
            height: Number(r.header.height),
            timestamp: r.header.timestamp,
            collectionGuarantees: r.payload.collection_guarantees.map((function(e) {
              return {
                collectionId: e.collection_id,
                signerIds: e.signer_ids
              };
            })),
            blockSeals: r.payload.block_seals.map((function(e) {
              return {
                blockId: e.block_id,
                executionReceiptId: e.result_id
              };
            }))
          }, a;
        }
        function Bt(e) {
          return Lt.apply(this, arguments);
        }
        function Lt() {
          return Lt = s(h.mark((function e(t) {
            var n, r, a, o, u = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = u.length > 1 && void 0 !== u[1] ? u[1] : {}, he((r = u.length > 2 && void 0 !== u[2] ? u[2] : {}).node, "SDK Send Get Block Error: opts.node must be defined."), 
                he(n.response, "SDK Send Get Block Error: context.response must be defined."), e.next = 6, t;

               case 6:
                if (t = e.sent, a = null !== t.block.id, o = null !== t.block.height, !a) {
                  e.next = 15;
                  break;
                }
                return e.next = 12, Rt(t, n, r);

               case 12:
               case 18:
               case 23:
                return e.abrupt("return", e.sent);

               case 15:
                if (!o) {
                  e.next = 21;
                  break;
                }
                return e.next = 18, _t(t, n, r);

               case 21:
                return e.next = 23, Ot(t, n, r);

               case 24:
               case "end":
                return e.stop();
              }
            }), e);
          }))), Lt.apply(this, arguments);
        }
        function Ut(e) {
          return Ft.apply(this, arguments);
        }
        function Ft() {
          return Ft = s(h.mark((function e(t) {
            var n, r, a, o, u, i = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = i.length > 1 && void 0 !== i[1] ? i[1] : {}, he((r = i.length > 2 && void 0 !== i[2] ? i[2] : {}).node, "SDK Send Get Collection Error: opts.node must be defined."), 
                he(n.response, "SDK Send Get Collection Error: context.response must be defined."), a = r.httpRequest || Ze, e.next = 7, 
                a({
                  hostname: r.node,
                  path: "/v1/collections/".concat(t.collection.id, "?expand=transactions"),
                  method: "GET",
                  body: null
                });

               case 7:
                return o = e.sent, (u = n.response()).tag = t.tag, u.collection = {
                  id: o.id,
                  transactionIds: o.transactions.map((function(e) {
                    return e.id;
                  }))
                }, e.abrupt("return", u);

               case 12:
               case "end":
                return e.stop();
              }
            }), e);
          }))), Ft.apply(this, arguments);
        }
        function jt(e, t, n) {
          return Dt.apply(this, arguments);
        }
        function Dt() {
          return (Dt = s(h.mark((function e(t, n, r) {
            var a, o;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return a = r.httpRequest || Ze, e.next = 3, a({
                  hostname: r.node,
                  path: "/v1/events?type=".concat(t.events.eventType, "&start_height=").concat(t.events.start, "&end_height=").concat(t.events.end),
                  method: "GET",
                  body: null
                });

               case 3:
                return o = e.sent, e.abrupt("return", zt(t, n, o));

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function Gt(e, t, n) {
          return Mt.apply(this, arguments);
        }
        function Mt() {
          return (Mt = s(h.mark((function e(t, n, r) {
            var a, o;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return a = r.httpRequest || Ze, e.next = 3, a({
                  hostname: r.node,
                  path: "/v1/events?type=".concat(t.events.eventType, "&block_ids=").concat(t.events.blockIds.join(",")),
                  method: "GET",
                  body: null
                });

               case 3:
                return o = e.sent, e.abrupt("return", zt(t, n, o));

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function zt(e, t, n) {
          var r = t.response();
          return r.tag = e.tag, r.events = [], n.forEach((function(e) {
            return e.events ? e.events.forEach((function(n) {
              return r.events.push({
                blockId: e.block_id,
                blockHeight: Number(e.block_height),
                blockTimestamp: e.block_timestamp,
                type: n.type,
                transactionId: n.transaction_id,
                transactionIndex: Number(n.transaction_index),
                eventIndex: Number(n.event_index),
                payload: JSON.parse(t.Buffer.from(n.payload, "base64").toString())
              });
            })) : null;
          })), r;
        }
        function Yt(e) {
          return qt.apply(this, arguments);
        }
        function qt() {
          return qt = s(h.mark((function e(t) {
            var n, r, a, o, u = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = u.length > 1 && void 0 !== u[1] ? u[1] : {}, he((r = u.length > 2 && void 0 !== u[2] ? u[2] : {}).node, "SDK Send Get Events Error: opts.node must be defined."), 
                he(n.response, "SDK Send Get Events Error: context.response must be defined."), he(n.Buffer, "SDK Send Get Events Error: context.Buffer must be defined."), 
                e.next = 7, t;

               case 7:
                if (t = e.sent, a = null !== t.events.start, o = Array.isArray(t.events.blockIds) && t.events.blockIds.length > 0, he(a || o, "SendGetEventsError: Unable to determine which get events request to send. Either a block height range, or block IDs must be specified."), 
                !a) {
                  e.next = 17;
                  break;
                }
                return e.next = 14, jt(t, n, r);

               case 14:
               case 19:
                return e.abrupt("return", e.sent);

               case 17:
                return e.next = 19, Gt(t, n, r);

               case 20:
               case "end":
                return e.stop();
              }
            }), e);
          }))), qt.apply(this, arguments);
        }
        function Kt(e) {
          return Ht.apply(this, arguments);
        }
        function Ht() {
          return Ht = s(h.mark((function e(t) {
            var n, r, a, o, u, i, s, c, f = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = f.length > 1 && void 0 !== f[1] ? f[1] : {}, he((r = f.length > 2 && void 0 !== f[2] ? f[2] : {}).node, "SDK Send Get Transaction Error: opts.node must be defined."), 
                he(n.response, "SDK Send Get Transaction Error: context.response must be defined."), he(n.Buffer, "SDK Send Get Transaction Error: context.Buffer must be defined."), 
                a = r.httpRequest || Ze, e.next = 8, t;

               case 8:
                return t = e.sent, e.next = 11, a({
                  hostname: r.node,
                  path: "/v1/transactions/".concat(t.transaction.id),
                  method: "GET",
                  body: null
                });

               case 11:
                return o = e.sent, u = function(e) {
                  return {
                    address: e.address,
                    keyId: Number(e.key_id),
                    sequenceNumber: Number(e.sequence_number)
                  };
                }, i = function(e) {
                  return {
                    address: e.address,
                    keyId: Number(e.key_index),
                    signature: e.signature
                  };
                }, s = function(e) {
                  return JSON.parse(n.Buffer.from(e, "base64").toString());
                }, (c = n.response()).tag = t.tag, c.transaction = {
                  script: n.Buffer.from(o.script, "base64").toString(),
                  args: ve(o.arguments.map(s)),
                  referenceBlockId: o.reference_block_id,
                  gasLimit: Number(o.gas_limit),
                  payer: o.payer,
                  proposalKey: o.proposal_key ? u(o.proposal_key) : o.proposal_key,
                  authorizers: o.authorizers,
                  payloadSignatures: ve(o.payload_signatures.map(i)),
                  envelopeSignatures: ve(o.envelope_signatures.map(i))
                }, e.abrupt("return", c);

               case 19:
               case "end":
                return e.stop();
              }
            }), e);
          }))), Ht.apply(this, arguments);
        }
        var Wt = {
          UNKNOWN: 0,
          PENDING: 1,
          FINALIZED: 2,
          EXECUTED: 3,
          SEALED: 4,
          EXPIRED: 5
        };
        function Vt(e) {
          return Jt.apply(this, arguments);
        }
        function Jt() {
          return Jt = s(h.mark((function e(t) {
            var n, r, a, o, u, i = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = i.length > 1 && void 0 !== i[1] ? i[1] : {}, he((r = i.length > 2 && void 0 !== i[2] ? i[2] : {}).node, "SDK Send Get Transaction Status Error: opts.node must be defined."), 
                he(n.response, "SDK Send Get Transaction Status Error: context.response must be defined."), he(n.Buffer, "SDK Send Get Transaction Status Error: context.Buffer must be defined."), 
                a = r.httpRequest || Ze, e.next = 8, t;

               case 8:
                return t = e.sent, e.next = 11, a({
                  hostname: r.node,
                  path: "/v1/transaction_results/".concat(t.transaction.id),
                  method: "GET",
                  body: null
                });

               case 11:
                return o = e.sent, (u = n.response()).tag = t.tag, u.transactionStatus = {
                  blockId: o.block_id,
                  status: Wt[o.status.toUpperCase()] || "",
                  statusString: o.status.toUpperCase(),
                  statusCode: o.status_code,
                  errorMessage: o.error_message,
                  events: o.events.map((function(e) {
                    return {
                      type: e.type,
                      transactionId: e.transaction_id,
                      transactionIndex: Number(e.transaction_index),
                      eventIndex: Number(e.event_index),
                      payload: JSON.parse(n.Buffer.from(e.payload, "base64").toString())
                    };
                  }))
                }, e.abrupt("return", u);

               case 16:
               case "end":
                return e.stop();
              }
            }), e);
          }))), Jt.apply(this, arguments);
        }
        function Xt(e) {
          return Zt.apply(this, arguments);
        }
        function Zt() {
          return Zt = s(h.mark((function e(t) {
            var n, r, a, o, u = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = u.length > 1 && void 0 !== u[1] ? u[1] : {}, he((r = u.length > 2 && void 0 !== u[2] ? u[2] : {}).node, "SDK Send Ping Error: opts.node must be defined."), 
                he(n.response, "SDK Send Ping Error: context.response must be defined."), a = r.httpRequest || Ze, e.next = 7, a({
                  hostname: r.node,
                  path: "/v1/blocks?height=sealed",
                  method: "GET",
                  body: null
                });

               case 7:
                return (o = n.response()).tag = t.tag, e.abrupt("return", o);

               case 10:
               case "end":
                return e.stop();
              }
            }), e);
          }))), Zt.apply(this, arguments);
        }
        var $t = function(e) {
          return "".concat(withPrefix(e.addr), "-").concat(e.keyId);
        };
        function Qt(e) {
          return en.apply(this, arguments);
        }
        function en() {
          return en = s(h.mark((function e(t) {
            var n, r, a, o, u, i, s, c, f, l, p, d, v, y, g, m, b = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = b.length > 1 && void 0 !== b[1] ? b[1] : {}, he((r = b.length > 2 && void 0 !== b[2] ? b[2] : {}).node, "SDK Send Transaction Error: opts.node must be defined."), 
                he(n.response, "SDK Send Transaction Error: context.response must be defined."), he(n.Buffer, "SDK Send Transaction Error: context.Buffer must be defined."), 
                a = r.httpRequest || Ze, e.next = 8, t;

               case 8:
                t = e.sent, o = [], u = 0, i = Object.values(t.accounts);

               case 11:
                if (!(u < i.length)) {
                  e.next = 24;
                  break;
                }
                s = i[u], e.prev = 13, s.role.payer || null == s.signature || o.push({
                  address: Ve(s.addr),
                  key_index: String(s.keyId),
                  signature: n.Buffer.from(s.signature, "hex").toString("base64")
                }), e.next = 21;
                break;

               case 17:
                throw e.prev = 17, e.t0 = e.catch(13), console.error("SDK HTTP Send Error: Trouble applying payload signature", {
                  acct: s,
                  ix: t
                }), e.t0;

               case 21:
                u++, e.next = 11;
                break;

               case 24:
                c = {}, f = 0, l = Object.values(t.accounts);

               case 26:
                if (!(f < l.length)) {
                  e.next = 39;
                  break;
                }
                p = l[f], e.prev = 28, p.role.payer && null != p.signature && (d = p.tempId || $t(p), c[d] = c[d] || {
                  address: Ve(p.addr),
                  key_index: String(p.keyId),
                  signature: n.Buffer.from(p.signature, "hex").toString("base64")
                }), e.next = 36;
                break;

               case 32:
                throw e.prev = 32, e.t1 = e.catch(28), console.error("SDK HTTP Send Error: Trouble applying envelope signature", {
                  acct: p,
                  ix: t
                }), e.t1;

               case 36:
                f++, e.next = 26;
                break;

               case 39:
                return c = Object.values(c), v = Date.now(), e.next = 43, a({
                  hostname: r.node,
                  path: "/v1/transactions",
                  method: "POST",
                  body: {
                    script: n.Buffer.from(t.message.cadence).toString("base64"),
                    arguments: ve(t.message.arguments.map((function(e) {
                      return n.Buffer.from(JSON.stringify(t.arguments[e].asArgument)).toString("base64");
                    }))),
                    reference_block_id: t.message.refBlock ? t.message.refBlock : null,
                    gas_limit: String(t.message.computeLimit),
                    payer: Ve(t.accounts[Array.isArray(t.payer) ? t.payer[0] : t.payer].addr),
                    proposal_key: {
                      address: Ve(t.accounts[t.proposer].addr),
                      key_index: String(t.accounts[t.proposer].keyId),
                      sequence_number: String(t.accounts[t.proposer].sequenceNum)
                    },
                    authorizers: t.authorizations.map((function(e) {
                      return t.accounts[e].addr;
                    })).reduce((function(e, t) {
                      return e.find((function(e) {
                        return e === t;
                      })) ? e : [].concat(ve(e), [ t ]);
                    }), []).map(Ve),
                    payload_signatures: o,
                    envelope_signatures: c
                  }
                });

               case 43:
                return y = e.sent, g = Date.now(), (m = n.response()).tag = t.tag, m.transactionId = y.id, "undefined" != typeof window && window.dispatchEvent(new CustomEvent("FLOW::TX", {
                  detail: {
                    txId: m.transactionId,
                    delta: g - v
                  }
                })), e.abrupt("return", m);

               case 50:
               case "end":
                return e.stop();
              }
            }), e, null, [ [ 13, 17 ], [ 28, 32 ] ]);
          }))), en.apply(this, arguments);
        }
        var tn = function() {
          var e = s(h.mark((function e(t) {
            var n, r, a = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = a.length > 1 && void 0 !== a[1] ? a[1] : {}, he((r = a.length > 2 && void 0 !== a[2] ? a[2] : {}).node, 'SDK Send Error: Either opts.node or "accessNode.api" in config must be defined.'), 
                he(n.ix, "SDK Send Error: context.ix must be defined."), e.next = 6, t;

               case 6:
                t = e.sent, e.t0 = !0, e.next = e.t0 === n.ix.isTransaction(t) ? 10 : e.t0 === n.ix.isGetTransactionStatus(t) ? 11 : e.t0 === n.ix.isGetTransaction(t) ? 12 : e.t0 === n.ix.isScript(t) ? 13 : e.t0 === n.ix.isGetAccount(t) ? 14 : e.t0 === n.ix.isGetEvents(t) ? 15 : e.t0 === n.ix.isGetBlock(t) ? 16 : e.t0 === n.ix.isGetBlockHeader(t) ? 17 : e.t0 === n.ix.isGetCollection(t) ? 18 : e.t0 === n.ix.isPing(t) ? 19 : 20;
                break;

               case 10:
                return e.abrupt("return", r.sendTransaction ? r.sendTransaction(t, n, r) : Qt(t, n, r));

               case 11:
                return e.abrupt("return", r.sendGetTransactionStatus ? r.sendGetTransactionStatus(t, n, r) : Vt(t, n, r));

               case 12:
                return e.abrupt("return", r.sendGetTransaction ? r.sendGetTransaction(t, n, r) : Kt(t, n, r));

               case 13:
                return e.abrupt("return", r.sendExecuteScript ? r.sendExecuteScript(t, n, r) : it(t, n, r));

               case 14:
                return e.abrupt("return", r.sendGetAccount ? r.sendGetAccount(t, n, r) : yt(t, n, r));

               case 15:
                return e.abrupt("return", r.sendGetEvents ? r.sendGetEvents(t, n, r) : Yt(t, n, r));

               case 16:
                return e.abrupt("return", r.sendGetBlock ? r.sendGetBlock(t, n, r) : Bt(t, n, r));

               case 17:
                return e.abrupt("return", r.sendGetBlockHeader ? r.sendGetBlockHeader(t, n, r) : St(t, n, r));

               case 18:
                return e.abrupt("return", r.sendGetCollection ? r.sendGetCollection(t, n, r) : Ut(t, n, r));

               case 19:
                return e.abrupt("return", r.sendPing ? r.sendPing(t, n, r) : Xt(t, n, r));

               case 20:
                return e.abrupt("return", t);

               case 21:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }(), nn = {}, rn = {}, an = {}, on = {}, un = function(e, t) {
          return function(n, r) {
            var a = 2 * r, o = 2 * t;
            n[a] = e[o], n[a + 1] = e[o + 1];
          };
        };
        !function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var t, n = (t = un) && t.__esModule ? t : {
            default: t
          };
          var r = function(e) {
            for (var t = e.A, r = e.C, a = 0; a < 25; a += 5) {
              for (var o = 0; o < 5; o++) (0, n.default)(t, a + o)(r, o);
              for (var u = 0; u < 5; u++) {
                var i = 2 * (a + u), s = (u + 1) % 5 * 2, c = (u + 2) % 5 * 2;
                t[i] ^= ~r[s] & r[c], t[i + 1] ^= ~r[s + 1] & r[c + 1];
              }
            }
          };
          e.default = r;
        }(on);
        var sn = {}, cn = {};
        !function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var t = new Uint32Array([ 0, 1, 0, 32898, 2147483648, 32906, 2147483648, 2147516416, 0, 32907, 0, 2147483649, 2147483648, 2147516545, 2147483648, 32777, 0, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 2147483648, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 0, 32778, 2147483648, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 0, 2147483649, 2147483648, 2147516424 ]);
          e.default = t;
        }(cn), function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var t, n = (t = cn) && t.__esModule ? t : {
            default: t
          };
          var r = function(e) {
            var t = e.A, r = 2 * e.roundIndex;
            t[0] ^= n.default[r], t[1] ^= n.default[r + 1];
          };
          e.default = r;
        }(sn);
        var fn = {}, ln = {};
        !function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var t = [ 10, 7, 11, 17, 18, 3, 5, 16, 8, 21, 24, 4, 15, 23, 19, 13, 12, 2, 20, 14, 22, 9, 6, 1 ];
          e.default = t;
        }(ln);
        var pn = {};
        !function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var t = [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 2, 14, 27, 41, 56, 8, 25, 43, 62, 18, 39, 61, 20, 44 ];
          e.default = t;
        }(pn), function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var t = a(ln), n = a(pn), r = a(un);
          function a(e) {
            return e && e.__esModule ? e : {
              default: e
            };
          }
          var o = function(e) {
            var a = e.A, o = e.C, u = e.W;
            (0, r.default)(a, 1)(u, 0);
            for (var i = 0, s = 0, c = 0, f = 32, l = 0; l < 24; l++) {
              var p = t.default[l], d = n.default[l];
              (0, r.default)(a, p)(o, 0), i = u[0], s = u[1], f = 32 - d, u[c = d < 32 ? 0 : 1] = i << d | s >>> f, u[(c + 1) % 2] = s << d | i >>> f, 
              (0, r.default)(u, 0)(a, p), (0, r.default)(o, 0)(u, 0);
            }
          };
          e.default = o;
        }(fn);
        var dn = {};
        function hn() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (!e.length && !t.length) return n;
          if (!e.length) return n;
          if (!t.length) return [].concat(ve(n), [ e[0] ]);
          var r = y(e), a = r[0], o = r.slice(1), u = y(t), i = u[0], s = u.slice(1);
          return void 0 !== a && n.push(a), void 0 !== i && n.push(i), hn(o, s, n);
        }
        function vn(e) {
          return function(t) {
            return "function" == typeof t ? (me.deprecate({
              pkg: "FCL/SDK",
              subject: "Interopolation of functions into template literals",
              transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0001-deprecate-params"
            }), vn(e)(t(e))) : String(t);
          };
        }
        function yn(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return "string" == typeof e ? function() {
            return e;
          } : Array.isArray(e) ? function(t) {
            return hn(e, n.map(vn(t))).join("").trim();
          } : e;
        }
        function gn(e, t) {
          if (null == e) return {};
          var n, r, a = function(e, t) {
            if (null == e) return {};
            var n, r, a = {}, o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
          }
          return a;
        }
        !function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var t, n = (t = un) && t.__esModule ? t : {
            default: t
          };
          var r = function(e) {
            for (var t = e.A, r = e.C, a = e.D, o = e.W, u = 0, i = 0, s = 0; s < 5; s++) {
              var c = 2 * s, f = 2 * (s + 5), l = 2 * (s + 10), p = 2 * (s + 15), d = 2 * (s + 20);
              r[c] = t[c] ^ t[f] ^ t[l] ^ t[p] ^ t[d], r[c + 1] = t[c + 1] ^ t[f + 1] ^ t[l + 1] ^ t[p + 1] ^ t[d + 1];
            }
            for (var h = 0; h < 5; h++) {
              (0, n.default)(r, (h + 1) % 5)(o, 0), u = o[0], i = o[1], o[0] = u << 1 | i >>> 31, o[1] = i << 1 | u >>> 31, a[2 * h] = r[(h + 4) % 5 * 2] ^ o[0], 
              a[2 * h + 1] = r[(h + 4) % 5 * 2 + 1] ^ o[1];
              for (var v = 0; v < 25; v += 5) t[2 * (v + h)] ^= a[2 * h], t[2 * (v + h) + 1] ^= a[2 * h + 1];
            }
          };
          e.default = r;
        }(dn), function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var t = o(on), n = o(sn), r = o(fn), a = o(dn);
          function o(e) {
            return e && e.__esModule ? e : {
              default: e
            };
          }
          var u = function() {
            var e = new Uint32Array(10), o = new Uint32Array(10), u = new Uint32Array(2);
            return function(i) {
              for (var s = 0; s < 24; s++) (0, a.default)({
                A: i,
                C: e,
                D: o,
                W: u
              }), (0, r.default)({
                A: i,
                C: e,
                W: u
              }), (0, t.default)({
                A: i,
                C: e
              }), (0, n.default)({
                A: i,
                roundIndex: s
              });
              e.fill(0), o.fill(0), u.fill(0);
            };
          };
          e.default = u;
        }(an), function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var t, n = _e, r = (t = an) && t.__esModule ? t : {
            default: t
          };
          var a = function(e, t) {
            for (var n = 0; n < e.length; n += 8) {
              var r = n / 4;
              t[r] ^= e[n + 7] << 24 | e[n + 6] << 16 | e[n + 5] << 8 | e[n + 4], t[r + 1] ^= e[n + 3] << 24 | e[n + 2] << 16 | e[n + 1] << 8 | e[n];
            }
            return t;
          }, o = function(e, t) {
            for (var n = 0; n < t.length; n += 8) {
              var r = n / 4;
              t[n] = e[r + 1], t[n + 1] = e[r + 1] >>> 8, t[n + 2] = e[r + 1] >>> 16, t[n + 3] = e[r + 1] >>> 24, t[n + 4] = e[r], t[n + 5] = e[r] >>> 8, 
              t[n + 6] = e[r] >>> 16, t[n + 7] = e[r] >>> 24;
            }
            return t;
          }, u = function(e) {
            var t = this, u = e.capacity, i = e.padding, s = (0, r.default)(), c = u / 8, f = 200 - u / 4, l = 0, p = new Uint32Array(50), d = n.Buffer.allocUnsafe(f);
            return this.absorb = function(e) {
              for (var n = 0; n < e.length; n++) d[l] = e[n], (l += 1) >= f && (a(d, p), s(p), l = 0);
              return t;
            }, this.squeeze = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = {
                buffer: e.buffer || n.Buffer.allocUnsafe(c),
                padding: e.padding || i,
                queue: n.Buffer.allocUnsafe(d.length),
                state: new Uint32Array(p.length)
              };
              d.copy(t.queue);
              for (var r = 0; r < p.length; r++) t.state[r] = p[r];
              t.queue.fill(0, l), t.queue[l] |= t.padding, t.queue[f - 1] |= 128, a(t.queue, t.state);
              for (var u = 0; u < t.buffer.length; u += f) s(t.state), o(t.state, t.buffer.slice(u, u + f));
              return t.buffer;
            }, this.reset = function() {
              return d.fill(0), p.fill(0), l = 0, t;
            }, this;
          };
          e.default = u;
        }(rn), function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = e.SHAKE = e.SHA3Hash = e.SHA3 = e.Keccak = void 0;
          var t, n = _e, r = (t = rn) && t.__esModule ? t : {
            default: t
          };
          var a = function(e) {
            var t = e.allowedSizes, a = e.defaultSize, o = e.padding;
            return function e() {
              var u = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
              if (!this || this.constructor !== e) return new e(i);
              if (t && !t.includes(i)) throw new Error("Unsupported hash length");
              var s = new r.default({
                capacity: i
              });
              return this.update = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8";
                if (n.Buffer.isBuffer(e)) return s.absorb(e), u;
                if ("string" == typeof e) return u.update(n.Buffer.from(e, t));
                throw new TypeError("Not a string or buffer");
              }, this.digest = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "binary", t = "string" == typeof e ? {
                  format: e
                } : e, n = s.squeeze({
                  buffer: t.buffer,
                  padding: t.padding || o
                });
                return t.format && "binary" !== t.format ? n.toString(t.format) : n;
              }, this.reset = function() {
                return s.reset(), u;
              }, this;
            };
          }, o = a({
            allowedSizes: [ 224, 256, 384, 512 ],
            defaultSize: 512,
            padding: 1
          });
          e.Keccak = o;
          var u = a({
            allowedSizes: [ 224, 256, 384, 512 ],
            defaultSize: 512,
            padding: 6
          });
          e.SHA3 = u;
          var i = a({
            allowedSizes: [ 128, 256 ],
            defaultSize: 256,
            padding: 31
          });
          e.SHAKE = i;
          var s = o;
          e.SHA3Hash = s, u.SHA3Hash = s;
          var c = u;
          e.default = c;
        }(nn);
        var mn = "UNKNOWN", bn = "SCRIPT", wn = "TRANSACTION", xn = "GET_TRANSACTION_STATUS", kn = "GET_ACCOUNT", En = "GET_EVENTS", In = "PING", Sn = "GET_TRANSACTION", An = "GET_BLOCK", Rn = "GET_BLOCK_HEADER", Tn = "GET_COLLECTION", _n = "BAD", Cn = "OK", On = "ACCOUNT", Pn = "PARAM", Nn = "ARGUMENT", Bn = "authorizer", Ln = "payer", Un = "proposer", Fn = '{\n  "kind":"'.concat(On, '",\n  "tempId":null,\n  "addr":null,\n  "keyId":null,\n  "sequenceNum":null,\n  "signature":null,\n  "signingFunction":null,\n  "resolve":null,\n  "role": {\n    "proposer":false,\n    "authorizer":false,\n    "payer":false,\n    "param":false\n  }\n}'), jn = '{\n  "kind":"'.concat(Nn, '",\n  "tempId":null,\n  "value":null,\n  "asArgument":null,\n  "xform":null,\n  "resolve": null,\n  "resolveArgument": null\n}'), Dn = '{\n  "tag":"'.concat(mn, '",\n  "assigns":{},\n  "status":"').concat(Cn, '",\n  "reason":null,\n  "accounts":{},\n  "params":{},\n  "arguments":{},\n  "message": {\n    "cadence":null,\n    "refBlock":null,\n    "computeLimit":null,\n    "proposer":null,\n    "payer":null,\n    "authorizations":[],\n    "params":[],\n    "arguments":[]\n  },\n  "proposer":null,\n  "authorizations":[],\n  "payer":[],\n  "events": {\n    "eventType":null,\n    "start":null,\n    "end":null,\n    "blockIds":[]\n  },\n  "transaction": {\n    "id":null\n  },\n  "block": {\n    "id":null,\n    "height":null,\n    "isSealed":null\n  },\n  "account": {\n    "addr":null\n  },\n  "collection": {\n    "id":null\n  }\n}'), Gn = new Set(Object.keys(JSON.parse(Dn))), Mn = function() {
          return JSON.parse(Dn);
        }, zn = "abcdefghijklmnopqrstuvwxyz0123456789".split(""), Yn = function() {
          return zn[~~(Math.random() * zn.length)];
        }, qn = function() {
          return Array.from({
            length: 10
          }, Yn).join("");
        }, Kn = function(e) {
          return "number" == typeof e;
        }, Hn = function(e) {
          return Array.isArray(e);
        }, Wn = function(e) {
          return null !== e && "object" === c(e);
        }, Vn = function(e) {
          return null == e;
        }, Jn = function(e) {
          return "function" == typeof e;
        }, Xn = function(e) {
          if (!Wn(e) || Vn(e) || Kn(e)) return !1;
          var t, n = w(Gn);
          try {
            for (n.s(); !(t = n.n()).done; ) {
              var r = t.value;
              if (!e.hasOwnProperty(r)) return !1;
            }
          } catch (e) {
            n.e(e);
          } finally {
            n.f();
          }
          return !0;
        }, Zn = function(e) {
          return e.status = Cn, e;
        }, $n = function(e, t) {
          return e.status = _n, e.reason = t, e;
        }, Qn = function(e) {
          return function(t) {
            return t.tag = e, Zn(t);
          };
        }, er = function(e) {
          return null == e.keyId ? e : (he(!isNaN(parseInt(e.keyId)), "account.keyId must be an integer"), b(b({}, e), {}, {
            keyId: parseInt(e.keyId)
          }));
        }, tr = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return function(n) {
            he("function" == typeof e || "object" === c(e), "prepAccount must be passed an authorization function or an account object"), 
            he(null != t.role, "Account must have a role");
            var r = JSON.parse(Fn), a = t.role, o = qn();
            e.authorization && Jn(e.authorization) && (e = {
              resolve: e.authorization
            }), !e.authorization && Jn(e) && (e = {
              resolve: e
            });
            var u = e.resolve;
            return u && (e.resolve = function(e) {
              for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
              return [ u, er ].reduce(function() {
                var e = s(h.mark((function e(t, r) {
                  return h.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                     case 0:
                      return e.t0 = r, e.t1 = void 0, e.next = 4, t;

                     case 4:
                      return e.t2 = e.sent, e.t3 = [ e.t2 ].concat(n), e.abrupt("return", e.t0.apply.call(e.t0, e.t1, e.t3));

                     case 7:
                     case "end":
                      return e.stop();
                    }
                  }), e);
                })));
                return function(t, n) {
                  return e.apply(this, arguments);
                };
              }(), e);
            }), e = er(e), n.accounts[o] = b(b(b({}, r), {}, {
              tempId: o
            }, e), {}, {
              role: b(b(b({}, r.role), "object" === c(e.role) ? e.role : {}), {}, g({}, a, !0))
            }), a === Bn ? n.authorizations.push(o) : a === Ln ? n.payer.push(o) : n[a] = o, n;
          };
        }, nr = function(e) {
          return function(t) {
            var n = qn();
            return t.message.arguments.push(n), t.arguments[n] = JSON.parse(jn), t.arguments[n].tempId = n, t.arguments[n].value = e.value, 
            t.arguments[n].asArgument = e.asArgument, t.arguments[n].xform = e.xform, t.arguments[n].resolve = e.resolve, t.arguments[n].resolveArgument = Jn(e.resolveArgument) ? e.resolveArgument.bind(e) : e.resolveArgument, 
            Zn(t);
          };
        }, rr = Qn(mn), ar = Qn(bn), or = Qn(wn), ur = Qn(xn), ir = Qn(Sn), sr = Qn(kn), cr = Qn(En), fr = Qn(In), lr = Qn(An), pr = Qn(Rn), dr = Qn(Tn), hr = function(e) {
          return function(t) {
            return t.tag === e;
          };
        }, vr = hr(mn), yr = hr(bn), gr = hr(wn), mr = hr(xn), br = hr(Sn), wr = hr(kn), xr = hr(En), kr = hr(In), Er = hr(An), Ir = hr(Rn), Sr = hr(Tn), Ar = function(e) {
          return e.status === Cn;
        }, Rr = function(e) {
          return e.status === _n;
        }, Tr = function(e) {
          return e.reason;
        }, _r = function(e) {
          for (var t = 0, n = Object.keys(e); t < n.length; t++) {
            var r = n[t];
            if (!Gn.has(r)) throw new Error('"'.concat(r, '" is an invalid root level Interaction property.'));
          }
          return e;
        }, Cr = function() {
          var e = s(h.mark((function e(t) {
            var n, r, a, o, u, i = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = i.length > 1 && void 0 !== i[1] ? i[1] : [], e.prev = 1, e.t0 = _r, e.next = 5, t;

               case 5:
                if (e.t1 = e.sent, t = (0, e.t0)(e.t1), !Rr(t)) {
                  e.next = 9;
                  break;
                }
                throw new Error("Interaction Error: ".concat(t.reason));

               case 9:
                if (n.length) {
                  e.next = 11;
                  break;
                }
                return e.abrupt("return", t);

               case 11:
                return r = y(n), a = r[0], o = r.slice(1), e.next = 14, a;

               case 14:
                if (u = e.sent, !Jn(u)) {
                  e.next = 17;
                  break;
                }
                return e.abrupt("return", Cr(u(t), o));

               case 17:
                if (!Vn(u) && u) {
                  e.next = 19;
                  break;
                }
                return e.abrupt("return", Cr(t, o));

               case 19:
                if (!Xn(u)) {
                  e.next = 21;
                  break;
                }
                return e.abrupt("return", Cr(u, o));

               case 21:
                throw new Error("Invalid Interaction Composition");

               case 24:
                throw e.prev = 24, e.t2 = e.catch(1), e.t2;

               case 27:
               case "end":
                return e.stop();
              }
            }), e, null, [ [ 1, 24 ] ]);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }(), Or = function e() {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
          var a = n[0], o = n[1];
          return Hn(a) && null == o ? function(t) {
            return e(t, a);
          } : Cr(a, o);
        }, Pr = function(e) {
          return e;
        }, Nr = function(e, t, n) {
          return null == e.assigns[t] ? n : e.assigns[t];
        }, Br = function(e, t) {
          return function(n) {
            return n.assigns[e] = t, Zn(n);
          };
        }, Lr = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pr;
          return function(n) {
            return n.assigns[e] = t(n.assigns[e], n), Zn(n);
          };
        }, Ur = Object.freeze({
          __proto__: null,
          UNKNOWN: mn,
          SCRIPT: bn,
          TRANSACTION: wn,
          GET_TRANSACTION_STATUS: xn,
          GET_ACCOUNT: kn,
          GET_EVENTS: En,
          PING: In,
          GET_TRANSACTION: Sn,
          GET_BLOCK: An,
          GET_BLOCK_HEADER: Rn,
          GET_COLLECTION: Tn,
          BAD: _n,
          OK: Cn,
          ACCOUNT: On,
          PARAM: Pn,
          ARGUMENT: Nn,
          AUTHORIZER: Bn,
          PAYER: Ln,
          PROPOSER: Un,
          interaction: Mn,
          uuid: qn,
          isNumber: Kn,
          isArray: Hn,
          isObj: Wn,
          isNull: Vn,
          isFn: Jn,
          isInteraction: Xn,
          Ok: Zn,
          Bad: $n,
          prepAccount: tr,
          makeArgument: nr,
          makeUnknown: rr,
          makeScript: ar,
          makeTransaction: or,
          makeGetTransactionStatus: ur,
          makeGetTransaction: ir,
          makeGetAccount: sr,
          makeGetEvents: cr,
          makePing: fr,
          makeGetBlock: lr,
          makeGetBlockHeader: pr,
          makeGetCollection: dr,
          isUnknown: vr,
          isScript: yr,
          isTransaction: gr,
          isGetTransactionStatus: mr,
          isGetTransaction: br,
          isGetAccount: wr,
          isGetEvents: xr,
          isPing: kr,
          isGetBlock: Er,
          isGetBlockHeader: Ir,
          isGetCollection: Sr,
          isOk: Ar,
          isBad: Rr,
          why: Tr,
          isAccount: function(e) {
            return e.kind === On;
          },
          isParam: function(e) {
            return e.kind === Pn;
          },
          isArgument: function(e) {
            return e.kind === Nn;
          },
          pipe: Or,
          get: Nr,
          put: Br,
          update: Lr,
          destroy: function(e) {
            return function(t) {
              return delete t.assigns[e], Zn(t);
            };
          }
        });
        function Fr() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return Or(Mn(), e);
        }
        var jr = function() {
          return JSON.parse('{\n    "tag":null,\n    "transaction":null,\n    "transactionStatus":null,\n    "transactionId":null,\n    "encodedData":null,\n    "events":null,\n    "account":null,\n    "block":null,\n    "blockHeader":null,\n    "latestBlock":null,\n    "collection":null\n}');
        };
        function Dr() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return Or([ lr, function(t) {
            return t.block.isSealed = e, Zn(t);
          } ]);
        }
        function Gr(e) {
          return Or([ sr, function(t) {
            return t.account.addr = Ve(e), Zn(t);
          } ]);
        }
        var Mr = function() {
          me.deprecate({
            pkg: "@onflow/decode",
            subject: "Operating upon data of the latestBlock field of the response object",
            transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/decode/WARNINGS.md#0001-Deprecating-latestBlock-field"
          });
        }, zr = function() {
          var e = s(h.mark((function e(t) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.abrupt("return", t);

               case 1:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }(), Yr = function() {
          var e = s(h.mark((function e() {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.abrupt("return", null);

               case 1:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function() {
            return e.apply(this, arguments);
          };
        }(), qr = function() {
          var e = s(h.mark((function e(t) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.abrupt("return", t.staticType);

               case 1:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }(), Kr = function() {
          var e = s(h.mark((function e(t) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.abrupt("return", {
                  domain: t.domain,
                  identifier: t.identifier
                });

               case 1:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }(), Hr = function() {
          var e = s(h.mark((function e(t) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.abrupt("return", {
                  path: t.path,
                  address: t.address,
                  borrowType: t.borrowType
                });

               case 1:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }(), Wr = function() {
          var e = s(h.mark((function e(t, n, r) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (!t) {
                  e.next = 6;
                  break;
                }
                return e.next = 3, ea(t, n, r);

               case 3:
                e.t0 = e.sent, e.next = 7;
                break;

               case 6:
                e.t0 = null;

               case 7:
                return e.abrupt("return", e.t0);

               case 8:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t, n, r) {
            return e.apply(this, arguments);
          };
        }(), Vr = function() {
          var e = s(h.mark((function e(t) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.abrupt("return", {
                  address: t.address,
                  type: t.type
                });

               case 1:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }(), Jr = function() {
          var e = s(h.mark((function e(t, n, r) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.next = 2, Promise.all(t.map((function(e) {
                  return new Promise(function() {
                    var t = s(h.mark((function t(a) {
                      return h.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                         case 0:
                          return t.t0 = a, t.next = 3, ea(e, n, [].concat(ve(r), [ e.type ]));

                         case 3:
                          return t.t1 = t.sent, t.abrupt("return", (0, t.t0)(t.t1));

                         case 5:
                         case "end":
                          return t.stop();
                        }
                      }), t);
                    })));
                    return function(e) {
                      return t.apply(this, arguments);
                    };
                  }());
                })));

               case 2:
                return e.abrupt("return", e.sent);

               case 3:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t, n, r) {
            return e.apply(this, arguments);
          };
        }(), Xr = function() {
          var e = s(h.mark((function e(t, n, r) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.next = 2, t.reduce(function() {
                  var e = s(h.mark((function e(t, a) {
                    return h.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                       case 0:
                        return e.next = 2, t;

                       case 2:
                        return t = e.sent, e.next = 5, ea(a.key, n, [].concat(ve(r), [ a.key ]));

                       case 5:
                        return e.t0 = e.sent, e.next = 8, ea(a.value, n, [].concat(ve(r), [ a.key ]));

                       case 8:
                        return t[e.t0] = e.sent, e.abrupt("return", t);

                       case 10:
                       case "end":
                        return e.stop();
                      }
                    }), e);
                  })));
                  return function(t, n) {
                    return e.apply(this, arguments);
                  };
                }(), Promise.resolve({}));

               case 2:
                return e.abrupt("return", e.sent);

               case 3:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t, n, r) {
            return e.apply(this, arguments);
          };
        }(), Zr = function() {
          var e = s(h.mark((function e(t, n, r) {
            var a, o;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.next = 2, t.fields.reduce(function() {
                  var e = s(h.mark((function e(t, a) {
                    return h.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                       case 0:
                        return e.next = 2, t;

                       case 2:
                        return t = e.sent, e.next = 5, ea(a.value, n, [].concat(ve(r), [ a.name ]));

                       case 5:
                        return t[a.name] = e.sent, e.abrupt("return", t);

                       case 7:
                       case "end":
                        return e.stop();
                      }
                    }), e);
                  })));
                  return function(t, n) {
                    return e.apply(this, arguments);
                  };
                }(), Promise.resolve({}));

               case 2:
                if (a = e.sent, !(o = t.id && Qr(n, t.id))) {
                  e.next = 10;
                  break;
                }
                return e.next = 7, o(a);

               case 7:
                e.t0 = e.sent, e.next = 11;
                break;

               case 10:
                e.t0 = a;

               case 11:
                return e.abrupt("return", e.t0);

               case 12:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t, n, r) {
            return e.apply(this, arguments);
          };
        }(), $r = {
          UInt: zr,
          Int: zr,
          UInt8: zr,
          Int8: zr,
          UInt16: zr,
          Int16: zr,
          UInt32: zr,
          Int32: zr,
          UInt64: zr,
          Int64: zr,
          UInt128: zr,
          Int128: zr,
          UInt256: zr,
          Int256: zr,
          Word8: zr,
          Word16: zr,
          Word32: zr,
          Word64: zr,
          UFix64: zr,
          Fix64: zr,
          String: zr,
          Character: zr,
          Bool: zr,
          Address: zr,
          Void: Yr,
          Optional: Wr,
          Reference: Vr,
          Array: Jr,
          Dictionary: Xr,
          Event: Zr,
          Resource: Zr,
          Struct: Zr,
          Enum: Zr,
          Type: qr,
          Path: Kr,
          Capability: Hr
        }, Qr = function(e, t) {
          var n = Object.keys(e).find((function(e) {
            return /^\/.*\/$/.test(e) ? new RegExp(e.substring(1, e.length - 1)).test(t) : e === t;
          }));
          return t && n && e[n];
        }, ea = function() {
          var e = s(h.mark((function e(t, n, r) {
            var a;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (a = Qr(n, t.type)) {
                  e.next = 3;
                  break;
                }
                throw new Error("Undefined Decoder Error: ".concat(t.type, "@").concat(r.join(".")));

               case 3:
                return e.next = 5, a(t.value, n, r);

               case 5:
                return e.abrupt("return", e.sent);

               case 6:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t, n, r) {
            return e.apply(this, arguments);
          };
        }(), ta = function() {
          var e = s(h.mark((function e(t) {
            var n, r, a, o, u = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = u.length > 1 && void 0 !== u[1] ? u[1] : {}, r = u.length > 2 && void 0 !== u[2] ? u[2] : [], a = Object.keys($r).filter((function(e) {
                  return !Object.keys(n).find((function(t) {
                    return new RegExp(t).test(e);
                  }));
                })).reduce((function(e, t) {
                  return e[t] = $r[t], e;
                }), n), o = b(b({}, a), n), e.abrupt("return", ea(t, o, r));

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }(), na = function() {
          var e = s(h.mark((function e(t) {
            var n, r = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}, !t.encodedData) {
                  e.next = 5;
                  break;
                }
                return e.abrupt("return", ta(t.encodedData, n));

               case 5:
                if (!t.transactionStatus) {
                  e.next = 16;
                  break;
                }
                return e.t0 = b, e.t1 = b({}, t.transactionStatus), e.t2 = {}, e.next = 11, Promise.all(t.transactionStatus.events.map(function() {
                  var e = s(h.mark((function e(t) {
                    return h.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                       case 0:
                        return e.t0 = t.type, e.t1 = t.transactionId, e.t2 = t.transactionIndex, e.t3 = t.eventIndex, e.next = 6, ta(t.payload, n);

                       case 6:
                        return e.t4 = e.sent, e.abrupt("return", {
                          type: e.t0,
                          transactionId: e.t1,
                          transactionIndex: e.t2,
                          eventIndex: e.t3,
                          data: e.t4
                        });

                       case 8:
                       case "end":
                        return e.stop();
                      }
                    }), e);
                  })));
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                }()));

               case 11:
                return e.t3 = e.sent, e.t4 = {
                  events: e.t3
                }, e.abrupt("return", (0, e.t0)(e.t1, e.t2, e.t4));

               case 16:
                if (!t.transaction) {
                  e.next = 20;
                  break;
                }
                return e.abrupt("return", t.transaction);

               case 20:
                if (!t.events) {
                  e.next = 26;
                  break;
                }
                return e.next = 23, Promise.all(t.events.map(function() {
                  var e = s(h.mark((function e(t) {
                    return h.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                       case 0:
                        return e.t0 = t.blockId, e.t1 = t.blockHeight, e.t2 = t.blockTimestamp, e.t3 = t.type, e.t4 = t.transactionId, e.t5 = t.transactionIndex, 
                        e.t6 = t.eventIndex, e.next = 9, ta(t.payload, n);

                       case 9:
                        return e.t7 = e.sent, e.abrupt("return", {
                          blockId: e.t0,
                          blockHeight: e.t1,
                          blockTimestamp: e.t2,
                          type: e.t3,
                          transactionId: e.t4,
                          transactionIndex: e.t5,
                          eventIndex: e.t6,
                          data: e.t7
                        });

                       case 11:
                       case "end":
                        return e.stop();
                      }
                    }), e);
                  })));
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                }()));

               case 23:
                return e.abrupt("return", e.sent);

               case 26:
                if (!t.account) {
                  e.next = 30;
                  break;
                }
                return e.abrupt("return", t.account);

               case 30:
                if (!t.block) {
                  e.next = 34;
                  break;
                }
                return e.abrupt("return", t.block);

               case 34:
                if (!t.blockHeader) {
                  e.next = 38;
                  break;
                }
                return e.abrupt("return", t.blockHeader);

               case 38:
                if (!t.latestBlock) {
                  e.next = 43;
                  break;
                }
                return Mr(), e.abrupt("return", t.latestBlock);

               case 43:
                if (!t.transactionId) {
                  e.next = 47;
                  break;
                }
                return e.abrupt("return", t.transactionId);

               case 47:
                if (!t.collection) {
                  e.next = 49;
                  break;
                }
                return e.abrupt("return", t.collection);

               case 49:
                return e.abrupt("return", null);

               case 50:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }(), ra = function(e) {
          return "function" == typeof e;
        }, aa = function(e) {
          return "string" == typeof e;
        };
        function oa() {
          return (oa = s(h.mark((function e(t) {
            var n;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (!gr(t) && !yr(t)) {
                  e.next = 11;
                  break;
                }
                if (n = Nr(t, "ix.cadence"), he(ra(n) || aa(n), "Cadence needs to be a function or a string."), !ra(n)) {
                  e.next = 7;
                  break;
                }
                return e.next = 6, n({});

               case 6:
                n = e.sent;

               case 7:
                return he(aa(n), "Cadence needs to be a string at this point."), e.next = 10, oe().where(/^0x/).then((function(e) {
                  return Object.entries(e).reduce((function(e, t) {
                    var n = u(t, 2), r = n[0], a = n[1], o = new RegExp("(\\b" + r + "\\b)", "g");
                    return e.replace(o, a);
                  }), n);
                }));

               case 10:
                t.message.cadence = e.sent;

               case 11:
                return e.abrupt("return", t);

               case 12:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        var ua = function(e) {
          return "function" == typeof e;
        };
        function ia(e) {
          return he(null != c(e.xform), "No type specified for argument: ".concat(e.value)), ua(e.xform) ? e.xform(e.value) : ua(e.xform.asArgument) ? e.xform.asArgument(e.value) : void he(!1, "Invalid Argument", e);
        }
        function sa(e) {
          return ca.apply(this, arguments);
        }
        function ca() {
          return ca = s(h.mark((function e(t) {
            var n, r, a = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (he((n = a.length > 1 && void 0 !== a[1] ? a[1] : 3) > 0, "Argument Resolve Recursion Limit Exceeded for Arg: ".concat(t.tempId)), 
                !ua(t.resolveArgument)) {
                  e.next = 9;
                  break;
                }
                return e.next = 5, t.resolveArgument();

               case 5:
                return r = e.sent, e.abrupt("return", sa(r, n - 1));

               case 9:
                return e.abrupt("return", t);

               case 10:
               case "end":
                return e.stop();
              }
            }), e);
          }))), ca.apply(this, arguments);
        }
        function fa() {
          return fa = s(h.mark((function e(t) {
            var n, r, a, o, i, s;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (!gr(t) && !yr(t)) {
                  e.next = 11;
                  break;
                }
                n = 0, r = Object.entries(t.arguments);

               case 2:
                if (!(n < r.length)) {
                  e.next = 11;
                  break;
                }
                return a = u(r[n], 2), o = a[0], i = a[1], e.next = 6, sa(i);

               case 6:
                s = e.sent, t.arguments[o].asArgument = ia(s);

               case 8:
                n++, e.next = 2;
                break;

               case 11:
                return e.abrupt("return", t);

               case 12:
               case "end":
                return e.stop();
              }
            }), e);
          }))), fa.apply(this, arguments);
        }
        var la, pa, da = function(e) {
          return ga(Ea(Sa(e)));
        }, ha = function(e) {
          return ga(Ea(Aa(e)));
        }, va = function(e, t) {
          return _e.Buffer.from(e.padStart(2 * t, 0), "hex");
        }, ya = (la = _e.Buffer.from("FLOW-V0.0-transaction").toString("hex"), pa = 32, _e.Buffer.from(la.padEnd(2 * pa, 0), "hex")).toString("hex"), ga = function(e) {
          return ya + e;
        }, ma = function(e) {
          return va(e, 8);
        }, ba = function(e) {
          return va(e, 32);
        }, wa = function(e) {
          return _e.Buffer.from(JSON.stringify(e), "utf8");
        }, xa = function(e) {
          return _e.Buffer.from(e, "utf8");
        }, ka = function(e) {
          return _e.Buffer.from(e, "hex");
        }, Ea = function(e) {
          return Ge(e).toString("hex");
        }, Ia = function(e) {
          var t = new nn.SHA3(256);
          return t.update(_e.Buffer.from(e, "hex")), t.digest().toString("hex");
        }, Sa = function(e) {
          return Ca(e), [ xa(e.cadence), e.arguments.map(wa), ba(e.refBlock), e.computeLimit, ma(Ve(e.proposalKey.address)), e.proposalKey.keyId, e.proposalKey.sequenceNum, ma(Ve(e.payer)), e.authorizers.map((function(e) {
            return ma(Ve(e));
          })) ];
        }, Aa = function(e) {
          return Oa(e), [ Sa(e), Ra(e) ];
        }, Ra = function(e) {
          var t = Ta(e);
          return e.payloadSigs.map((function(e) {
            return {
              signerIndex: t.get(e.address),
              keyId: e.keyId,
              sig: e.sig
            };
          })).sort((function(e, t) {
            return e.signerIndex > t.signerIndex ? 1 : e.signerIndex < t.signerIndex ? -1 : e.keyId > t.keyId ? 1 : e.keyId < t.keyId ? -1 : void 0;
          })).map((function(e) {
            return [ e.signerIndex, e.keyId, ka(e.sig) ];
          }));
        }, Ta = function(e) {
          var t = new Map, n = 0, r = function(e) {
            t.has(e) || (t.set(e, n), n++);
          };
          return r(e.proposalKey.address), r(e.payer), e.authorizers.forEach(r), t;
        }, _a = function(e) {
          Pa(e);
          var t = Ta(e), n = function(e) {
            return e.map((function(e) {
              var n = e.address, r = e.keyId, a = e.sig;
              return {
                signerIndex: t.get(n),
                keyId: r,
                sig: a
              };
            })).sort((function(e, t) {
              return e.signerIndex > t.signerIndex ? 1 : e.signerIndex < t.signerIndex ? -1 : e.keyId > t.keyId ? 1 : e.keyId < t.keyId ? -1 : void 0;
            })).map((function(e) {
              return [ e.signerIndex, e.keyId, ka(e.sig) ];
            }));
          };
          return [ [ xa(e.cadence), e.arguments.map(wa), ba(e.refBlock), e.computeLimit, ma(Ve(e.proposalKey.address)), e.proposalKey.keyId, e.proposalKey.sequenceNum, ma(Ve(e.payer)), e.authorizers.map((function(e) {
            return ma(Ve(e));
          })) ], n(e.payloadSigs), n(e.envelopeSigs) ];
        }, Ca = function(e) {
          Fa.forEach((function(t) {
            return Ya(e, t);
          })), ja.forEach((function(t) {
            return Ya(e.proposalKey, t, "proposalKey");
          }));
        }, Oa = function(e) {
          Da.forEach((function(t) {
            return Ya(e, t);
          })), e.payloadSigs.forEach((function(e, t) {
            Ga.forEach((function(n) {
              return Ya(e, n, "payloadSigs", t);
            }));
          }));
        }, Pa = function(e) {
          Fa.forEach((function(t) {
            return Ya(e, t);
          })), ja.forEach((function(t) {
            return Ya(e.proposalKey, t, "proposalKey");
          })), Da.forEach((function(t) {
            return Ya(e, t);
          })), e.payloadSigs.forEach((function(e, t) {
            Ga.forEach((function(n) {
              return Ya(e, n, "payloadSigs", t);
            }));
          })), Ma.forEach((function(t) {
            return Ya(e, t);
          })), e.envelopeSigs.forEach((function(e, t) {
            za.forEach((function(n) {
              return Ya(e, n, "envelopeSigs", t);
            }));
          }));
        }, Na = function(e) {
          return "number" == typeof e;
        }, Ba = function(e) {
          return "string" == typeof e;
        }, La = function(e) {
          return null !== e && "object" === c(e);
        }, Ua = function(e) {
          return La(e) && e instanceof Array;
        }, Fa = [ {
          name: "cadence",
          check: Ba
        }, {
          name: "arguments",
          check: Ua
        }, {
          name: "refBlock",
          check: Ba,
          defaultVal: "0"
        }, {
          name: "computeLimit",
          check: Na
        }, {
          name: "proposalKey",
          check: La
        }, {
          name: "payer",
          check: Ba
        }, {
          name: "authorizers",
          check: Ua
        } ], ja = [ {
          name: "address",
          check: Ba
        }, {
          name: "keyId",
          check: Na
        }, {
          name: "sequenceNum",
          check: Na
        } ], Da = [ {
          name: "payloadSigs",
          check: Ua
        } ], Ga = [ {
          name: "address",
          check: Ba
        }, {
          name: "keyId",
          check: Na
        }, {
          name: "sig",
          check: Ba
        } ], Ma = [ {
          name: "envelopeSigs",
          check: Ua
        } ], za = [ {
          name: "address",
          check: Ba
        }, {
          name: "keyId",
          check: Na
        }, {
          name: "sig",
          check: Ba
        } ], Ya = function(e, t, n, r) {
          var a = t.name, o = t.check, u = t.defaultVal;
          if (null == e[a] && null != u && (e[a] = u), null == e[a]) throw Ka(a, n, r);
          if (!o(e[a])) throw Ha(a, n, r);
        }, qa = function(e, t, n) {
          return t ? null == n ? "".concat(t, ".").concat(e) : "".concat(t, ".").concat(n, ".").concat(e) : e;
        }, Ka = function(e, t, n) {
          return new Error("Missing field ".concat(qa(e, t, n)));
        }, Ha = function(e, t, n) {
          return new Error("Invalid field ".concat(qa(e, t, n)));
        };
        function Wa(e) {
          var t = new Set(e.authorizations);
          return t.add(e.proposer), Array.isArray(e.payer) ? e.payer.forEach((function(e) {
            return t.delete(e);
          })) : t.delete(e.payer), Array.from(t);
        }
        function Va(e) {
          var t = new Set(Array.isArray(e.payer) ? e.payer : [ e.payer ]);
          return Array.from(t);
        }
        var Ja = function(e) {
          return {
            cadence: e.message.cadence,
            refBlock: e.message.refBlock || null,
            computeLimit: e.message.computeLimit,
            arguments: e.message.arguments.map((function(t) {
              return e.arguments[t].asArgument;
            })),
            proposalKey: {
              address: Je(e.accounts[e.proposer].addr),
              keyId: e.accounts[e.proposer].keyId,
              sequenceNum: e.accounts[e.proposer].sequenceNum
            },
            payer: Je(e.accounts[Array.isArray(e.payer) ? e.payer[0] : e.payer].addr),
            authorizers: function() {
              var t = e.authorizations.map((function(t) {
                return Je(e.accounts[t].addr);
              })).reduce((function(e, t) {
                return e.find((function(e) {
                  return e === t;
                })) ? e : [].concat(ve(e), [ t ]);
              }), []);
              return t[0] ? t : [];
            }(),
            payloadSigs: Wa(e).map((function(t) {
              return {
                address: Je(e.accounts[t].addr),
                keyId: e.accounts[t].keyId,
                sig: e.accounts[t].signature
              };
            })),
            envelopeSigs: Va(e).map((function(t) {
              return {
                address: Je(e.accounts[t].addr),
                keyId: e.accounts[t].keyId,
                sig: e.accounts[t].signature
              };
            }))
          };
        }, Xa = function(e) {
          return "".concat(Je(e.addr), "-").concat(e.keyId);
        }, Za = function(e) {
          return "function" == typeof e;
        };
        function $a(e, t) {
          try {
            return {
              f_type: "PreSignable",
              f_vsn: "1.0.1",
              roles: e.role,
              cadence: t.message.cadence,
              args: t.message.arguments.map((function(e) {
                return t.arguments[e].asArgument;
              })),
              data: {},
              interaction: t,
              voucher: Ja(t)
            };
          } catch (e) {
            throw console.error("buildPreSignable", e), e;
          }
        }
        function Qa(e, t, n) {
          return eo.apply(this, arguments);
        }
        function eo() {
          return eo = s(h.mark((function e(t, n, r) {
            var a, o, u, i, s, c, f = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                he(a = f.length > 3 && void 0 !== f[3] ? f[3] : 3, "Account Resolve Recursion Limit Exceeded", {
                  ix: t,
                  accounts: n
                }), o = [], u = w(n), e.prev = 4, s = h.mark((function e() {
                  var n, u, s, f;
                  return h.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                     case 0:
                      if (n = i.value, u = n.resolve, n.resolve = null, c = r || n, !Za(u)) {
                        e.next = 8;
                        break;
                      }
                      return e.next = 7, u(n, $a(n, t));

                     case 7:
                      n = e.sent;

                     case 8:
                      if (!Array.isArray(n)) {
                        e.next = 13;
                        break;
                      }
                      return e.next = 11, Qa(t, n, c, a - 1);

                     case 11:
                      e.next = 30;
                      break;

                     case 13:
                      if (n.addr && (n.addr = Ve(n.addr)), null != n.addr && null != n.keyId && (n.tempId = Xa(n)), t.accounts[n.tempId] = t.accounts[n.tempId] || n, 
                      t.accounts[n.tempId].role.proposer = t.accounts[n.tempId].role.proposer || n.role.proposer, t.accounts[n.tempId].role.payer = t.accounts[n.tempId].role.payer || n.role.payer, 
                      t.accounts[n.tempId].role.authorizer = t.accounts[n.tempId].role.authorizer || n.role.authorizer, t.accounts[n.tempId].role.proposer && t.proposer === c.tempId && (t.proposer = n.tempId), 
                      !t.accounts[n.tempId].role.payer) {
                        e.next = 29;
                        break;
                      }
                      if (Array.isArray(t.payer) ? t.payer = Array.from(new Set([].concat(ve(t.payer), [ n.tempId ]).map((function(e) {
                        return e === c.tempId ? n.tempId : e;
                      })))) : t.payer = Array.from(new Set([ t.payer, n.tempId ].map((function(e) {
                        return e === c.tempId ? n.tempId : e;
                      })))), !(t.payer.length > 1)) {
                        e.next = 29;
                        break;
                      }
                      if (s = [], f = [], t.payer = t.payer.reduce((function(e, n) {
                        var r = t.accounts[n].addr, a = Xa(t.accounts[n]);
                        return f.push(r), s.includes(a) ? e : (s.push(a), [].concat(ve(e), [ n ]));
                      }), []), !(Array.from(new Set(f)).length > 1)) {
                        e.next = 29;
                        break;
                      }
                      throw new Error("Payer can not be different accounts");

                     case 29:
                      t.accounts[n.tempId].role.authorizer && (r ? o = Array.from(new Set([].concat(ve(o), [ n.tempId ]))) : t.authorizations = t.authorizations.map((function(e) {
                        return e === c.tempId ? n.tempId : e;
                      })));

                     case 30:
                      c.tempId != n.tempId && delete t.accounts[c.tempId];

                     case 31:
                     case "end":
                      return e.stop();
                    }
                  }), e);
                })), u.s();

               case 7:
                if ((i = u.n()).done) {
                  e.next = 11;
                  break;
                }
                return e.delegateYield(s(), "t0", 9);

               case 9:
                e.next = 7;
                break;

               case 11:
                e.next = 16;
                break;

               case 13:
                e.prev = 13, e.t1 = e.catch(4), u.e(e.t1);

               case 16:
                return e.prev = 16, u.f(), e.finish(16);

               case 19:
                r && (t.authorizations = t.authorizations.map((function(e) {
                  return e === r.tempId ? o : e;
                })).reduce((function(e, t) {
                  return Array.isArray(t) ? [].concat(ve(e), ve(t)) : [].concat(ve(e), [ t ]);
                }), []));

               case 20:
               case "end":
                return e.stop();
              }
            }), e, null, [ [ 4, 13, 16, 19 ] ]);
          }))), eo.apply(this, arguments);
        }
        function to() {
          return (to = s(h.mark((function e(t) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (!gr(t)) {
                  e.next = 13;
                  break;
                }
                return Array.isArray(t.payer) || me.deprecate({
                  pkg: "FCL",
                  subject: '"ix.payer" must be an array. Support for ix.payer as a singular',
                  message: "See changelog for more info."
                }), e.prev = 2, e.next = 5, Qa(t, Object.values(t.accounts));

               case 5:
                return e.next = 7, Qa(t, Object.values(t.accounts));

               case 7:
                e.next = 13;
                break;

               case 9:
                throw e.prev = 9, e.t0 = e.catch(2), console.error("=== SAD PANDA ===\n\n", e.t0, "\n\n=== SAD PANDA ==="), e.t0;

               case 13:
                return e.abrupt("return", t);

               case 14:
               case "end":
                return e.stop();
              }
            }), e, null, [ [ 2, 9 ] ]);
          })))).apply(this, arguments);
        }
        function no() {
          return (no = s(h.mark((function e(t) {
            var n, r, a, o;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (!gr(t)) {
                  e.next = 16;
                  break;
                }
                return e.prev = 1, n = Wa(t), r = da(oo(t)), e.next = 6, Promise.all(n.map(ro(t, r)));

               case 6:
                return a = Va(t), o = ha(b(b({}, oo(t)), {}, {
                  payloadSigs: n.map((function(e) {
                    return {
                      address: t.accounts[e].addr,
                      keyId: t.accounts[e].keyId,
                      sig: t.accounts[e].signature
                    };
                  }))
                })), e.next = 10, Promise.all(a.map(ro(t, o)));

               case 10:
                e.next = 16;
                break;

               case 12:
                throw e.prev = 12, e.t0 = e.catch(1), console.error("Signatures", e.t0, {
                  ix: t
                }), e.t0;

               case 16:
                return e.abrupt("return", t);

               case 17:
               case "end":
                return e.stop();
              }
            }), e, null, [ [ 1, 12 ] ]);
          })))).apply(this, arguments);
        }
        function ro(e, t) {
          return function() {
            var n = s(h.mark((function n(r) {
              var a, o, u;
              return h.wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                 case 0:
                  if (null == (a = e.accounts[r]).signature) {
                    n.next = 3;
                    break;
                  }
                  return n.abrupt("return");

                 case 3:
                  return n.next = 5, a.signingFunction(ao(a, t, e));

                 case 5:
                  o = n.sent, u = o.signature, e.accounts[r].signature = u;

                 case 8:
                 case "end":
                  return n.stop();
                }
              }), n);
            })));
            return function(e) {
              return n.apply(this, arguments);
            };
          }();
        }
        function ao(e, t, n) {
          try {
            return {
              f_type: "Signable",
              f_vsn: "1.0.1",
              message: t,
              addr: Ve(e.addr),
              keyId: e.keyId,
              roles: e.role,
              cadence: n.message.cadence,
              args: n.message.arguments.map((function(e) {
                return n.arguments[e].asArgument;
              })),
              data: {},
              interaction: n,
              voucher: Ja(n)
            };
          } catch (e) {
            throw console.error("buildSignable", e), e;
          }
        }
        function oo(e) {
          var t = Ve((Array.isArray(e.payer) ? e.accounts[e.payer[0]] : e.accounts[e.payer]).addr);
          return {
            cadence: e.message.cadence,
            refBlock: e.message.refBlock || null,
            computeLimit: e.message.computeLimit,
            arguments: e.message.arguments.map((function(t) {
              return e.arguments[t].asArgument;
            })),
            proposalKey: {
              address: Ve(e.accounts[e.proposer].addr),
              keyId: e.accounts[e.proposer].keyId,
              sequenceNum: e.accounts[e.proposer].sequenceNum
            },
            payer: t,
            authorizers: e.authorizations.map((function(t) {
              return Ve(e.accounts[t].addr);
            })).reduce((function(e, t) {
              return e.find((function(e) {
                return e === t;
              })) ? e : [].concat(ve(e), [ t ]);
            }), [])
          };
        }
        function uo() {
          return (uo = s(h.mark((function e(t) {
            var n;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = Nr(t, "ix.validators", []), e.abrupt("return", Or(t, n.map((function(e) {
                  return function(t) {
                    return e(t, {
                      Ok: Zn,
                      Bad: $n
                    });
                  };
                }))));

               case 2:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function io() {
          return (io = s(h.mark((function e(t) {
            var n, r, a;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                for (n = 0, r = Object.keys(t.accounts); n < r.length; n++) a = r[n], t.accounts[a].addr = Ve(t.accounts[a].addr);
                return e.abrupt("return", t);

               case 2:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function so() {
          return (so = s(h.mark((function e(t) {
            var n;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (n = Nr(t, "ix.voucher-intercept"), !Jn(n)) {
                  e.next = 4;
                  break;
                }
                return e.next = 4, n(Ja(t));

               case 4:
                return e.abrupt("return", t);

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function co() {
          return (co = s(h.mark((function e(t) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (!gr(t)) {
                  e.next = 8;
                  break;
                }
                if (e.t0 = t.message.computeLimit, e.t0) {
                  e.next = 6;
                  break;
                }
                return e.next = 5, oe.get("fcl.limit");

               case 5:
                e.t0 = e.sent;

               case 6:
                t.message.computeLimit = e.t0, t.message.computeLimit || (me.deprecate({
                  pkg: "FCL/SDK",
                  subject: "The built-in default compute limit (DEFAULT_COMPUTE_LIMIT=10)",
                  transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0009-deprecate-default-compute-limit"
                }), t.message.computeLimit = 100);

               case 8:
                return e.abrupt("return", t);

               case 9:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        var fo = function(e) {
          return e;
        }, lo = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fo;
          return function() {
            var n = s(h.mark((function n(r) {
              var a, o;
              return h.wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                 case 0:
                  return a = function(e) {
                    return [ "\nAccounts:", {
                      proposer: e.proposer,
                      authorizations: e.authorizations,
                      payer: e.payer
                    }, "\n\nDetails:", e.accounts ].filter(Boolean);
                  }, o = function() {
                    for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                    (t = console).log.apply(t, [ "debug[".concat(e, "] ---\n") ].concat(r, [ "\n\n\n---" ]));
                  }, n.next = 5, oe.get("debug.".concat(e));

                 case 5:
                  if (!n.sent) {
                    n.next = 8;
                    break;
                  }
                  return n.next = 8, t(r, o, a);

                 case 8:
                  return n.abrupt("return", r);

                 case 9:
                 case "end":
                  return n.stop();
                }
              }), n);
            })));
            return function(e) {
              return n.apply(this, arguments);
            };
          }();
        }, po = Or([ function(e) {
          return oa.apply(this, arguments);
        }, lo("cadence", (function(e, t) {
          return t(e.message.cadence);
        })), function(e) {
          return co.apply(this, arguments);
        }, lo("compute limit", (function(e, t) {
          return t(e.message.computeLimit);
        })), function(e) {
          return fa.apply(this, arguments);
        }, lo("arguments", (function(e, t) {
          return t(e.message.arguments, e.message);
        })), function(e) {
          return to.apply(this, arguments);
        }, lo("accounts", (function(e, t, n) {
          return t.apply(void 0, ve(n(e)));
        })), function(e) {
          return ho.apply(this, arguments);
        }, function(e) {
          return vo.apply(this, arguments);
        }, function(e) {
          return no.apply(this, arguments);
        }, lo("signatures", (function(e, t, n) {
          return t.apply(void 0, ve(n(e)));
        })), function(e) {
          return io.apply(this, arguments);
        }, function(e) {
          return uo.apply(this, arguments);
        }, function(e) {
          return so.apply(this, arguments);
        }, lo("resolved", (function(e, t) {
          return t(e);
        })) ]);
        function ho() {
          return (ho = s(h.mark((function e(t) {
            var n, r;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (!gr(t) || null != t.message.refBlock) {
                  e.next = 11;
                  break;
                }
                return e.next = 3, oe().get("accessNode.api");

               case 3:
                return n = e.sent, e.next = 6, oe.first([ "sdk.transport", "sdk.send" ], tn);

               case 6:
                return he(r = e.sent, "Required value for sdk.transport is not defined in config. See: ".concat("https://github.com/onflow/fcl-js/blob/master/packages/sdk/CHANGELOG.md#0057-alpha1----2022-01-21")), 
                e.next = 10, r(Fr([ Dr() ]), {
                  config: oe,
                  response: jr,
                  Buffer: _e.Buffer,
                  ix: Ur
                }, {
                  node: n
                }).then(na);

               case 10:
                t.message.refBlock = e.sent.id;

               case 11:
                return e.abrupt("return", t);

               case 12:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function vo() {
          return (vo = s(h.mark((function e(t) {
            var n, r, a;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (!gr(t)) {
                  e.next = 20;
                  break;
                }
                if (he(n = Object.values(t.accounts).find((function(e) {
                  return e.role.proposer;
                })), "Transactions require a proposer"), null != n.sequenceNum) {
                  e.next = 20;
                  break;
                }
                return e.next = 6, oe().get("accessNode.api");

               case 6:
                return r = e.sent, e.next = 9, oe.first([ "sdk.transport", "sdk.send" ], tn);

               case 9:
                return he(a = e.sent, "Required value for sdk.transport is not defined in config. See: ".concat("https://github.com/onflow/fcl-js/blob/master/packages/sdk/CHANGELOG.md#0057-alpha1----2022-01-21")), 
                e.t0 = a, e.next = 14, Fr([ Gr(n.addr) ]);

               case 14:
                return e.t1 = e.sent, e.t2 = {
                  config: oe,
                  response: jr,
                  Buffer: _e.Buffer,
                  ix: Ur
                }, e.t3 = {
                  node: r
                }, e.next = 19, (0, e.t0)(e.t1, e.t2, e.t3).then(na).then((function(e) {
                  return e.keys;
                })).then((function(e) {
                  return e.find((function(e) {
                    return e.index === n.keyId;
                  }));
                })).then((function(e) {
                  return e.sequenceNumber;
                }));

               case 19:
                t.accounts[n.tempId].sequenceNum = e.sent;

               case 20:
                return e.abrupt("return", t);

               case 21:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function yo() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          if (t.length > 1) {
            var r = t[0], a = t[1];
            return yo((function(e, t) {
              var n = t.Ok, o = t.Bad;
              return r ? n(e) : o(e, a);
            }));
          }
          var o = t[0];
          return function(e) {
            return o(e, {
              Ok: Zn,
              Bad: $n
            });
          };
        }
        var go = function() {
          var e = s(h.mark((function e() {
            var t, n, r, a, o = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return t = o.length > 0 && void 0 !== o[0] ? o[0] : [], n = o.length > 1 && void 0 !== o[1] ? o[1] : {}, e.next = 4, oe.first([ "sdk.transport", "sdk.send" ], n.send || tn);

               case 4:
                return yo(r = e.sent, "Required value for sdk.transport is not defined in config. See: ".concat("https://github.com/onflow/fcl-js/blob/master/packages/sdk/CHANGELOG.md#0057-alpha1----2022-01-21")), 
                e.next = 8, oe.first([ "sdk.resolve" ], n.resolve || po);

               case 8:
                if (a = e.sent, e.t0 = n.node, e.t0) {
                  e.next = 14;
                  break;
                }
                return e.next = 13, oe().get("accessNode.api");

               case 13:
                e.t0 = e.sent;

               case 14:
                return n.node = e.t0, Array.isArray(t) && (t = Or(Mn(), t)), e.t1 = r, e.next = 19, a(t);

               case 19:
                return e.t2 = e.sent, e.t3 = {
                  config: oe,
                  response: jr,
                  ix: Ur,
                  Buffer: _e.Buffer
                }, e.t4 = n, e.abrupt("return", (0, e.t1)(e.t2, e.t3, e.t4));

               case 23:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function() {
            return e.apply(this, arguments);
          };
        }();
        function mo(e) {
          return bo.apply(this, arguments);
        }
        function bo() {
          return bo = s(h.mark((function e(t) {
            var n, r;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.next = 2, oe().where(/^decoder\./);

               case 2:
                return n = e.sent, r = Object.entries(n).map((function(e) {
                  var t = u(e, 2), n = t[0], r = t[1];
                  return [ n = "/".concat(n.replace(/^decoder\./, ""), "$/"), r ];
                })), e.abrupt("return", na(t, Object.fromEntries(r)));

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          }))), bo.apply(this, arguments);
        }
        var wo = function(e) {
          Ie(n, e);
          var t = Te(n);
          function n(e) {
            var r;
            be(this, n);
            var a = "\n        Encode Message From Signable Error: Unable to determine message encoding for signer addresss: ".concat(e, ". \n        Please ensure the address: ").concat(e, " is intended to sign the given transaction as specified by the transaction signable.\n      ").trim();
            return (r = t.call(this, a)).name = "Unable To Determine Message Encoding For Signer Addresss", r;
          }
          return xe(n);
        }(Ke(Error));
        function xo(e) {
          return Lr("ix.validators", (function(t) {
            return Array.isArray(t) ? t.push(e) : [ e ];
          }));
        }
        function ko(e) {
          return Or([ function(t) {
            return t.block.height = e, t;
          }, xo((function(e) {
            if ("boolean" == typeof e.block.isSealed) throw new Error("Unable to specify both block height and isSealed.");
            if (e.block.id) throw new Error("Unable to specify both block height and block id.");
            return e;
          })) ]);
        }
        function Eo(e) {
          return Or([ function(t) {
            return t.block.id = e, Zn(t);
          }, xo((function(e, t) {
            var n = t.Ok, r = t.Bad;
            return wr(e) ? r(e, "Unable to specify a block id with a Get Account interaction.") : "boolean" == typeof e.block.isSealed ? r(e, "Unable to specify both block id and isSealed.") : e.block.height ? r(e, "Unable to specify both block id and block height.") : n(e);
          })) ]);
        }
        function Io() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.sealed, n = void 0 !== t && t, r = e.id, a = e.height, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return he(!(n && r || n && a), 'Method: block -- Cannot pass "sealed" with "id" or "height"'), he(!(r && a), 'Method: block -- Cannot pass "id" and "height" simultaneously'), 
          r ? go([ Dr(), Eo(r) ], o).then(na) : a ? go([ Dr(), ko(a) ], o).then(na) : go([ Dr(n) ], o).then(na);
        }
        function So() {
          return Or((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map((function(e) {
            return tr(e, {
              role: Bn
            });
          })));
        }
        function Ao(e, t, n) {
          return Or([ cr, function(r) {
            return r.events.eventType = e, r.events.start = t, r.events.end = n, Zn(r);
          } ]);
        }
        function Ro(e) {
          return Or([ ur, function(t) {
            return t.transaction.id = e, Zn(t);
          } ]);
        }
        function To(e) {
          return function(t) {
            return t.message.computeLimit = e, t;
          };
        }
        function _o() {
          return Or((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(nr));
        }
        function Co(e, t) {
          return {
            value: e,
            xform: t
          };
        }
        function Oo(e) {
          return Po.apply(this, arguments);
        }
        function Po() {
          return Po = s(h.mark((function e(t) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.abrupt("return", tr(t, {
                  role: Un
                }));

               case 1:
               case "end":
                return e.stop();
              }
            }), e);
          }))), Po.apply(this, arguments);
        }
        function No(e) {
          return Bo.apply(this, arguments);
        }
        function Bo() {
          return Bo = s(h.mark((function e(t) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.abrupt("return", tr(t, {
                  role: Ln
                }));

               case 1:
               case "end":
                return e.stop();
              }
            }), e);
          }))), Bo.apply(this, arguments);
        }
        function Lo(e) {
          return Or([ function(t) {
            return t.message.refBlock = e, Zn(t);
          } ]);
        }
        function Uo() {
          return Or([ ar, Br("ix.cadence", yn.apply(void 0, arguments)) ]);
        }
        var Fo = [];
        function jo() {
          return Or([ or, Br("ix.cadence", yn.apply(void 0, arguments)), function(e) {
            return e.message.refBlock = e.message.refBlock || null, e.authorizations = e.authorizations || Fo, Zn(e);
          } ]);
        }
        function Do(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
          return he(e.account, "mockAccountResponse(ix) -- ix.account is missing", e), he(e.account.addr, "mockAccountResponse(ix) -- ix.account.addr is missing", e), 
          {
            account: {
              addr: e.account.addr,
              keys: Array.from({
                length: t
              }, (function(e, t) {
                return {
                  index: t,
                  sequenceNumber: 42
                };
              }))
            }
          };
        }
        var Go = function(e) {
          return e;
        };
        var Mo = [ "tempId" ];
        function zo(e) {
          return [ "SIGNATURE", e.addr, e.keyId ].join(".");
        }
        function Yo() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(t) {
            var n = b(b(b({}, t), e), {}, {
              signingFunction: e.signingFunction || t.signingFunction || function(e) {
                return {
                  addr: n.addr,
                  keyId: n.keyId,
                  signature: zo(n)
                };
              }
            });
            return n;
          };
        }
        var qo = {
          proposer: !1,
          authorizer: !1,
          payer: !1
        };
        var Ko, Ho = Object.freeze({
          __proto__: null,
          mockSend: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Go;
            return function() {
              var t = s(h.mark((function t(n) {
                return h.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                   case 0:
                    return t.next = 2, n;

                   case 2:
                    n = t.sent, t.t0 = !0, t.next = t.t0 === wr(n) ? 6 : t.t0 === Er(n) ? 7 : 8;
                    break;

                   case 6:
                    return t.abrupt("return", Do(n));

                   case 7:
                    return t.abrupt("return", {
                      tag: "GET_BLOCK",
                      block: {
                        id: "32"
                      }
                    });

                   case 8:
                    return t.abrupt("return", e(n));

                   case 9:
                   case "end":
                    return t.stop();
                  }
                }), t);
              })));
              return function(e) {
                return t.apply(this, arguments);
              };
            }();
          },
          authzFn: Yo,
          authzResolve: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return function(t) {
              var n = e.tempId, r = gn(e, Mo);
              return b(b({}, t), {}, {
                tempId: n || "WITH_RESOLVE",
                resolve: Yo(r)
              });
            };
          },
          authzResolveMany: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return function(t) {
              var n = e.tempId || "AUTHZ_RESOLVE_MANY";
              return b(b({}, t), {}, {
                tempId: n,
                resolve: function() {
                  return [ e.proposer && Yo(e.proposer)({
                    role: b(b({}, qo), {}, {
                      proposer: !0
                    })
                  }) ].concat(ve(e.authorizations.map(Yo).map((function(e) {
                    return e({
                      role: b(b({}, qo), {}, {
                        authorizer: !0
                      })
                    });
                  }))), [ e.payer && Yo(e.payer)({
                    role: b(b({}, qo), {}, {
                      payer: !0
                    })
                  }) ]).filter(Boolean);
                }
              });
            };
          },
          sig: zo,
          idof: function(e) {
            return "".concat(Je(e.addr), "-").concat(e.keyId);
          },
          run: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return Fr([ Lo("123") ].concat(ve(e))).then(po);
          }
        }), Wo = function(e) {
          return function(t) {
            return c(t) === e;
          };
        }, Vo = function(e) {
          return null != e;
        }, Jo = Wo("object"), Xo = Wo("string"), Zo = Wo("function"), $o = Wo("number"), Qo = "function" == typeof queueMicrotask ? queueMicrotask : function(e) {
          return (Ko || (Ko = Promise.resolve())).then(e).catch((function(e) {
            return setTimeout((function() {
              throw e;
            }), 0);
          }));
        }, eu = function() {
          var e, t = [];
          return {
            deliver: function(n) {
              return s(h.mark((function r() {
                return h.wrap((function(r) {
                  for (;;) switch (r.prev = r.next) {
                   case 0:
                    t.push(n), e && (e(t.shift()), e = void 0);

                   case 2:
                   case "end":
                    return r.stop();
                  }
                }), r);
              })))();
            },
            receive: function() {
              return new Promise((function(n) {
                var r = t.shift();
                if (r) return n(r);
                e = n;
              }));
            }
          };
        }, tu = "SUBSCRIBE", nu = "UNSUBSCRIBE", ru = "UPDATED", au = "EXIT", ou = "object" === ("undefined" == typeof self ? "undefined" : c(self)) && self.self === self && self || "object" === (void 0 === n.g ? "undefined" : c(n.g)) && n.g.global === n.g && n.g || "object" === ("undefined" == typeof window ? "undefined" : c(window)) && window.window === window && window;
        ou.FCL_REGISTRY = null == ou.FCL_REGISTRY ? {} : ou.FCL_REGISTRY;
        var uu, iu = 0, su = function(e, t, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return new Promise((function(a, o) {
            var u = r.expectReply || !1, i = null != r.timeout ? r.timeout : 5e3;
            u && i && setTimeout((function() {
              return o(new Error("Timeout: ".concat(i, "ms passed without a response.")));
            }), i);
            var s = {
              to: e,
              from: r.from,
              tag: t,
              data: n,
              timeout: i,
              reply: a,
              reject: o
            };
            try {
              ou.FCL_REGISTRY[e] && ou.FCL_REGISTRY[e].mailbox.deliver(s), u || a(!0);
            } catch (t) {
              console.error("FCL.Actor -- Could Not Deliver Message", s, ou.FCL_REGISTRY[e], t);
            }
          }));
        }, cu = function(e) {
          delete ou.FCL_REGISTRY[e];
        }, fu = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function() {
            var t = s(h.mark((function t(n) {
              var r;
              return h.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                 case 0:
                  if ("function" != typeof e.INIT) {
                    t.next = 3;
                    break;
                  }
                  return t.next = 3, e.INIT(n);

                 case 3:
                  return t.next = 6, n.receive();

                 case 6:
                  if (r = t.sent, t.prev = 7, r.tag !== au) {
                    t.next = 13;
                    break;
                  }
                  if ("function" != typeof e.TERMINATE) {
                    t.next = 12;
                    break;
                  }
                  return t.next = 12, e.TERMINATE(n, r, r.data || {});

                 case 12:
                  return t.abrupt("break", 25);

                 case 13:
                  return t.next = 15, e[r.tag](n, r, r.data || {});

                 case 15:
                  t.next = 20;
                  break;

                 case 17:
                  t.prev = 17, t.t0 = t.catch(7), console.error("".concat(n.self(), " Error"), r, t.t0);

                 case 20:
                  return t.prev = 20, t.abrupt("continue", 3);

                 case 23:
                  t.next = 3;
                  break;

                 case 25:
                 case "end":
                  return t.stop();
                }
              }), t, null, [ [ 7, 17, 20, 23 ] ]);
            })));
            return function(e) {
              return t.apply(this, arguments);
            };
          }();
        }, lu = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (null == t && (t = ++iu), null != ou.FCL_REGISTRY[t]) return t;
          ou.FCL_REGISTRY[t] = {
            addr: t,
            mailbox: eu(),
            subs: new Set,
            kvs: {},
            error: null
          };
          var n = {
            self: function() {
              return t;
            },
            receive: function() {
              return ou.FCL_REGISTRY[t].mailbox.receive();
            },
            send: function(e, n, r) {
              var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
              return a.from = t, su(e, n, r, a);
            },
            sendSelf: function(e, n, r) {
              ou.FCL_REGISTRY[t] && su(t, e, n, r);
            },
            broadcast: function(e, n) {
              var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              r.from = t;
              var a, o = w(ou.FCL_REGISTRY[t].subs);
              try {
                for (o.s(); !(a = o.n()).done; ) {
                  var u = a.value;
                  su(u, e, n, r);
                }
              } catch (e) {
                o.e(e);
              } finally {
                o.f();
              }
            },
            subscribe: function(e) {
              return null != e && ou.FCL_REGISTRY[t].subs.add(e);
            },
            unsubscribe: function(e) {
              return null != e && ou.FCL_REGISTRY[t].subs.delete(e);
            },
            subscriberCount: function() {
              return ou.FCL_REGISTRY[t].subs.size;
            },
            hasSubs: function() {
              return !!ou.FCL_REGISTRY[t].subs.size;
            },
            put: function(e, n) {
              null != e && (ou.FCL_REGISTRY[t].kvs[e] = n);
            },
            get: function(e, n) {
              var r = ou.FCL_REGISTRY[t].kvs[e];
              return null == r ? n : r;
            },
            delete: function(e) {
              delete ou.FCL_REGISTRY[t].kvs[e];
            },
            update: function(e, n) {
              null != e && (ou.FCL_REGISTRY[t].kvs[e] = n(ou.FCL_REGISTRY[t].kvs[e]));
            },
            keys: function() {
              return Object.keys(ou.FCL_REGISTRY[t].kvs);
            },
            all: function() {
              return ou.FCL_REGISTRY[t].kvs;
            },
            where: function(e) {
              return Object.keys(ou.FCL_REGISTRY[t].kvs).reduce((function(n, r) {
                return e.test(r) ? b(b({}, n), {}, g({}, r, ou.FCL_REGISTRY[t].kvs[r])) : n;
              }), {});
            },
            merge: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              Object.keys(e).forEach((function(n) {
                return ou.FCL_REGISTRY[t].kvs[n] = e[n];
              }));
            },
            fatalError: function(e) {
              ou.FCL_REGISTRY[t].error = e;
              var n, r = w(ou.FCL_REGISTRY[t].subs);
              try {
                for (r.s(); !(n = r.n()).done; ) {
                  var a = n.value;
                  su(a, ru);
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
            }
          };
          return "object" === c(e) && (e = fu(e)), Qo(s(h.mark((function r() {
            return h.wrap((function(r) {
              for (;;) switch (r.prev = r.next) {
               case 0:
                return r.next = 2, e(n);

               case 2:
                cu(t);

               case 3:
               case "end":
                return r.stop();
              }
            }), r);
          })))), t;
        };
        var pu = "config", du = "PUT_CONFIG", hu = "GET_CONFIG", vu = "GET_ALL_CONFIG", yu = "UPDATE_CONFIG", gu = "DELETE_CONFIG", mu = "CLEAR_CONFIG", bu = "WHERE_CONFIG", wu = "CONFIG/UPDATED", xu = function(e) {
          return e;
        }, ku = (g(uu = {}, du, (function(e, t, n) {
          var r = n.key, a = n.value;
          if (null == r) throw new Error("Missing 'key' for config/put.");
          e.put(r, a), e.broadcast(wu, b({}, e.all()));
        })), g(uu, hu, (function(e, t, n) {
          var r = n.key, a = n.fallback;
          if (null == r) throw new Error("Missing 'key' for config/get");
          t.reply(e.get(r, a));
        })), g(uu, vu, (function(e, t) {
          t.reply(b({}, e.all()));
        })), g(uu, yu, (function(e, t, n) {
          var r = n.key, a = n.fn;
          if (null == r) throw new Error("Missing 'key' for config/update");
          e.update(r, a || xu), e.broadcast(wu, b({}, e.all()));
        })), g(uu, gu, (function(e, t, n) {
          var r = n.key;
          if (null == r) throw new Error("Missing 'key' for config/delete");
          e.delete(r), e.broadcast(wu, b({}, e.all()));
        })), g(uu, mu, (function(e, t) {
          for (var n = 0, r = Object.keys(e.all()); n < r.length; n++) {
            var a = r[n];
            e.delete(a);
          }
          e.broadcast(wu, b({}, e.all()));
        })), g(uu, bu, (function(e, t, n) {
          var r = n.pattern;
          if (null == r) throw new Error("Missing 'pattern' for config/where");
          t.reply(e.where(r));
        })), g(uu, tu, (function(e, t) {
          e.subscribe(t.from), e.send(t.from, wu, b({}, e.all()));
        })), g(uu, nu, (function(e, t) {
          e.unsubscribe(t.from);
        })), uu);
        function Eu(e, t) {
          return su(pu, du, {
            key: e,
            value: t
          }), Nu();
        }
        function Iu(e, t) {
          return su(pu, hu, {
            key: e,
            fallback: t
          }, {
            expectReply: !0,
            timeout: 10
          });
        }
        function Su() {
          return Au.apply(this, arguments);
        }
        function Au() {
          return Au = s(h.mark((function e() {
            var t, n, r, a, o, u, i = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (t = i.length > 0 && void 0 !== i[0] ? i[0] : [], n = i.length > 1 ? i[1] : void 0, t.length) {
                  e.next = 4;
                  break;
                }
                return e.abrupt("return", n);

               case 4:
                return r = y(t), a = r[0], o = r.slice(1), e.next = 7, Iu(a);

               case 7:
                if (null != (u = e.sent)) {
                  e.next = 10;
                  break;
                }
                return e.abrupt("return", Su(o, n));

               case 10:
                return e.abrupt("return", u);

               case 11:
               case "end":
                return e.stop();
              }
            }), e);
          }))), Au.apply(this, arguments);
        }
        function Ru() {
          return su(pu, vu, null, {
            expectReply: !0,
            timeout: 10
          });
        }
        function Tu(e) {
          return su(pu, yu, {
            key: e,
            fn: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xu
          }), Nu();
        }
        function _u(e) {
          return su(pu, gu, {
            key: e
          }), Nu();
        }
        function Cu(e) {
          return su(pu, bu, {
            pattern: e
          }, {
            expectReply: !0,
            timeout: 10
          });
        }
        function Ou(e) {
          return function(e, t, n) {
            t(e);
            var r = "@EXIT", a = lu(function() {
              var t = s(h.mark((function t(a) {
                var o, u;
                return h.wrap((function(t) {
                  for (;;) switch (t.prev = t.next) {
                   case 0:
                    a.send(e, tu);

                   case 1:
                    return t.next = 4, a.receive();

                   case 4:
                    if (o = t.sent, u = ou.FCL_REGISTRY[e].error, o.tag !== r) {
                      t.next = 9;
                      break;
                    }
                    return a.send(e, nu), t.abrupt("return");

                   case 9:
                    if (!u) {
                      t.next = 13;
                      break;
                    }
                    return n(null, u), a.send(e, nu), t.abrupt("return");

                   case 13:
                    n(o.data, null), t.next = 1;
                    break;

                   case 16:
                   case "end":
                    return t.stop();
                  }
                }), t);
              })));
              return function(e) {
                return t.apply(this, arguments);
              };
            }());
            return function() {
              return su(a, r);
            };
          }(pu, (function() {
            return lu(ku, pu);
          }), e);
        }
        function Pu(e) {
          return su(pu, mu).then(Nu(e));
        }
        function Nu(e) {
          return null != e && "object" === c(e) && Object.keys(e).map((function(t) {
            return Eu(t, e[t]);
          })), {
            put: Eu,
            get: Iu,
            all: Ru,
            first: Su,
            update: Tu,
            delete: _u,
            where: Cu,
            subscribe: Ou,
            overload: Lu
          };
        }
        lu(ku, pu), Nu.put = Eu, Nu.get = Iu, Nu.all = Ru, Nu.first = Su, Nu.update = Tu, Nu.delete = _u, Nu.where = Cu, Nu.subscribe = Ou, 
        Nu.overload = Lu;
        var Bu = function(e) {
          return e;
        };
        function Lu() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bu;
          return new Promise(function() {
            var n = s(h.mark((function n(r, a) {
              var o, u;
              return h.wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                 case 0:
                  return n.next = 2, Ru();

                 case 2:
                  return o = n.sent, n.prev = 3, Nu(e), n.t0 = t, n.next = 8, Ru();

                 case 8:
                  return n.t1 = n.sent, n.next = 11, (0, n.t0)(n.t1);

                 case 11:
                  return u = n.sent, n.next = 14, Pu(o);

                 case 14:
                  r(u), n.next = 22;
                  break;

                 case 17:
                  return n.prev = 17, n.t2 = n.catch(3), n.next = 21, Pu(o);

                 case 21:
                  a(n.t2);

                 case 22:
                 case "end":
                  return n.stop();
                }
              }), n, null, [ [ 3, 17 ] ]);
            })));
            return function(e, t) {
              return n.apply(this, arguments);
            };
          }());
        }
        var Uu = Object.freeze({
          debug: 5,
          info: 4,
          log: 3,
          warn: 2,
          error: 1
        }), Fu = function(e) {
          var t = e.title, n = e.message;
          return [ "\n    %c".concat(t, "\n    ============================\n\n    ").concat(n, "\n\n    ============================\n    ").replace(/\n[^\S\r\n]+/g, "\n").trim(), , "font-weight:bold;font-family:monospace;" ];
        }, ju = function() {
          var e = s(h.mark((function e(t) {
            var n, r, a, o, u, i, s, c, f, l, p, d;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return i = t.title, s = t.message, c = t.level, f = t.always, l = void 0 !== f && f, e.next = 3, Nu.get("logger.level", Uu.warn);

               case 3:
                if (p = e.sent, l || !(p < c)) {
                  e.next = 6;
                  break;
                }
                return e.abrupt("return");

               case 6:
                d = Fu({
                  title: i,
                  message: s
                }), e.t0 = c, e.next = e.t0 === Uu.debug ? 10 : e.t0 === Uu.info ? 12 : e.t0 === Uu.warn ? 14 : e.t0 === Uu.error ? 16 : 18;
                break;

               case 10:
                return (n = console).debug.apply(n, ve(d)), e.abrupt("break", 19);

               case 12:
                return (r = console).info.apply(r, ve(d)), e.abrupt("break", 19);

               case 14:
                return (a = console).warn.apply(a, ve(d)), e.abrupt("break", 19);

               case 16:
                return (o = console).error.apply(o, ve(d)), e.abrupt("break", 19);

               case 18:
                (u = console).log.apply(u, ve(d));

               case 19:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }();
        ju.deprecate = function(e) {
          var t = e.pkg, n = e.subject, r = e.transition, a = e.level, o = void 0 === a ? Uu.warn : a, u = e.message, i = void 0 === u ? "" : u, c = e.callback, f = void 0 === c ? null : c, l = function() {
            return ju({
              title: "".concat(t ? t + " " : "", "Deprecation Notice"),
              message: "\n      ".concat(n ? "".concat((e = n, e.charAt(0).toUpperCase() + e.slice(1)), " is deprecated and will cease to work in future releases").concat(t ? " of " + t : "", ".") : "").concat(i ? "\n" + i : "").concat(r ? "\nYou can learn more (including a guide on common transition paths) here: ".concat(r) : "", "\n    ").trim(),
              level: o
            });
            var e;
          };
          return "function" == typeof f ? s(h.mark((function e() {
            var t = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.next = 2, l();

               case 2:
                return e.next = 4, f.apply(void 0, t);

               case 4:
                return e.abrupt("return", e.sent);

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          }))) : l();
        };
        var Du = function(e, t, n) {
          return {
            label: e,
            asArgument: t,
            asInjection: n
          };
        }, Gu = function(e) {
          return Array.isArray(e);
        }, Mu = function(e) {
          return "object" === c(e);
        }, zu = function(e) {
          return null == e;
        }, Yu = function(e) {
          return "number" == typeof e;
        }, qu = function(e) {
          return Number.isInteger(e);
        }, Ku = function(e) {
          return "string" == typeof e;
        }, Hu = function(e) {
          throw new Error("Type Error: " + e);
        }, Wu = function(e) {
          ju.deprecate({
            pkg: "@onflow/types",
            subject: "Passing in Number as value for ".concat(e),
            message: "Going forward, use String as value for ".concat(e, "."),
            transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/types/WARNINGS.md#0002-[U]Int*-and-Word*-as-Number"
          });
        }, Vu = Du("Identity", (function(e) {
          return e;
        }), (function(e) {
          return e;
        })), Ju = Du("UInt", (function(e) {
          return Yu(e) && qu(e) ? (Wu("UInt"), {
            type: "UInt",
            value: e.toString()
          }) : Ku(e) ? {
            type: "UInt",
            value: e
          } : void Hu("Expected Positive Integer for type Unsigned Int");
        }), (function(e) {
          return e;
        })), Xu = Du("Int", (function(e) {
          return Yu(e) && qu(e) ? (Wu("Int"), {
            type: "Int",
            value: e.toString()
          }) : Ku(e) ? {
            type: "Int",
            value: e
          } : void Hu("Expected Integer for type Int");
        }), (function(e) {
          return e;
        })), Zu = Du("UInt8", (function(e) {
          return Yu(e) && qu(e) ? (Wu("UInt8"), {
            type: "UInt8",
            value: e.toString()
          }) : Ku(e) ? {
            type: "UInt8",
            value: e
          } : void Hu("Expected integer for UInt8");
        }), (function(e) {
          return e;
        })), $u = Du("Int8", (function(e) {
          return Yu(e) && qu(e) ? (Wu("Int8"), {
            type: "Int8",
            value: e.toString()
          }) : Ku(e) ? {
            type: "Int8",
            value: e
          } : void Hu("Expected positive integer for Int8");
        }), (function(e) {
          return e;
        })), Qu = Du("UInt16", (function(e) {
          return Yu(e) && qu(e) ? (Wu("UInt16"), {
            type: "UInt16",
            value: e.toString()
          }) : Ku(e) ? {
            type: "UInt16",
            value: e
          } : void Hu("Expected integer for UInt16");
        }), (function(e) {
          return e;
        })), ei = Du("Int16", (function(e) {
          return Yu(e) && qu(e) ? (Wu("Int16"), {
            type: "Int16",
            value: e.toString()
          }) : Ku(e) ? {
            type: "Int16",
            value: e
          } : void Hu("Expected positive integer for Int16");
        }), (function(e) {
          return e;
        })), ti = Du("UInt32", (function(e) {
          return Yu(e) && qu(e) ? (Wu("UInt32"), {
            type: "UInt32",
            value: e.toString()
          }) : Ku(e) ? {
            type: "UInt32",
            value: e
          } : void Hu("Expected integer for UInt32");
        }), (function(e) {
          return e;
        })), ni = Du("Int32", (function(e) {
          return Yu(e) && qu(e) ? (Wu("Int32"), {
            type: "Int32",
            value: e.toString()
          }) : Ku(e) ? {
            type: "Int32",
            value: e
          } : void Hu("Expected positive integer for Int32");
        }), (function(e) {
          return e;
        })), ri = Du("UInt64", (function(e) {
          return Yu(e) && qu(e) ? (Wu("UInt64"), {
            type: "UInt64",
            value: e.toString()
          }) : Ku(e) ? {
            type: "UInt64",
            value: e
          } : void Hu("Expected integer for UInt64");
        }), (function(e) {
          return e;
        })), ai = Du("Int64", (function(e) {
          return Yu(e) && qu(e) ? (Wu("Int64"), {
            type: "Int64",
            value: e.toString()
          }) : Ku(e) ? {
            type: "Int64",
            value: e
          } : void Hu("Expected positive integer for Int64");
        }), (function(e) {
          return e;
        })), oi = Du("UInt128", (function(e) {
          return Yu(e) && qu(e) ? (Wu("UInt128"), {
            type: "UInt128",
            value: e.toString()
          }) : Ku(e) ? {
            type: "UInt128",
            value: e
          } : void Hu("Expected integer for UInt128");
        }), (function(e) {
          return e;
        })), ui = Du("Int128", (function(e) {
          return Yu(e) && qu(e) ? (Wu("Int128"), {
            type: "Int128",
            value: e.toString()
          }) : Ku(e) ? {
            type: "Int128",
            value: e
          } : void Hu("Expected positive integer for Int128");
        }), (function(e) {
          return e;
        })), ii = Du("UInt256", (function(e) {
          return Yu(e) && qu(e) ? (Wu("UInt256"), {
            type: "UInt256",
            value: e.toString()
          }) : Ku(e) ? {
            type: "UInt256",
            value: e
          } : void Hu("Expected integer for UInt256");
        }), (function(e) {
          return e;
        })), si = Du("Int256", (function(e) {
          return Yu(e) && qu(e) ? (Wu("Int256"), {
            type: "Int256",
            value: e.toString()
          }) : Ku(e) ? {
            type: "Int256",
            value: e
          } : void Hu("Expected integer for Int256");
        }), (function(e) {
          return e;
        })), ci = Du("Word8", (function(e) {
          return Yu(e) && qu(e) ? (Wu("Word8"), {
            type: "Word8",
            value: e.toString()
          }) : Ku(e) ? {
            type: "Word8",
            value: e
          } : void Hu("Expected positive number for Word8");
        }), (function(e) {
          return e;
        })), fi = Du("Word16", (function(e) {
          return Yu(e) && qu(e) ? (Wu("Word16"), {
            type: "Word16",
            value: e.toString()
          }) : Ku(e) ? {
            type: "Word16",
            value: e
          } : void Hu("Expected positive number for Word16");
        }), (function(e) {
          return e;
        })), li = Du("Word32", (function(e) {
          return Yu(e) && qu(e) ? (Wu("Word32"), {
            type: "Word32",
            value: e.toString()
          }) : Ku(e) ? {
            type: "Word32",
            value: e
          } : void Hu("Expected positive number for Word32");
        }), (function(e) {
          return e;
        })), pi = Du("Word64", (function(e) {
          return Yu(e) && qu(e) ? (Wu("Word64"), {
            type: "Word64",
            value: e.toString()
          }) : Ku(e) ? {
            type: "Word64",
            value: e
          } : void Hu("Expected positive number for Word64");
        }), (function(e) {
          return e;
        })), di = function() {
          ju.deprecate({
            subject: "Passing in Numbers as values for Fix64 and UFix64 types",
            pkg: "@onflow/types",
            transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/types/WARNINGS.md#0001-[U]Fix64-as-Number"
          });
        }, hi = Du("UFix64", (function(e) {
          if (Ku(e)) {
            var t = e.split(".");
            return 2 !== t.length && Hu("Expected one decimal but found ".concat(t.length, " in the [U]Fix64 value. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers")), 
            (0 == t[1].length || t[1].length > 8) && Hu("Expected at least one digit, and at most 8 digits following the decimal of the [U]Fix64 value but found ".concat(t[1].length, " digits. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers")), 
            t[1] = t[1].padEnd(8, "0"), {
              type: "UFix64",
              value: e = t.join(".")
            };
          }
          if (Yu(e)) return di(), {
            type: "UFix64",
            value: e.toString()
          };
          Hu("Expected String for UFix64");
        }), (function(e) {
          return e;
        })), vi = Du("Fix64", (function(e) {
          if (Ku(e)) {
            var t = e.split(".");
            return 2 !== t.length && Hu("Expected one decimal but found ".concat(t.length, " in the [U]Fix64 value. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers")), 
            (0 == t[1].length || t[1].length > 8) && Hu("Expected at least one digit, and at most 8 digits following the decimal of the [U]Fix64 value but found ".concat(t[1].length, " digits. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers")), 
            t[1] = t[1].padEnd(8, "0"), {
              type: "Fix64",
              value: e = t.join(".")
            };
          }
          if (Yu(e)) return di(), {
            type: "Fix64",
            value: e.toString()
          };
          Hu("Expected String for Fix64");
        }), (function(e) {
          return e;
        })), yi = Du("String", (function(e) {
          if (Ku(e)) return {
            type: "String",
            value: e
          };
          Hu("Expected String for type String");
        }), (function(e) {
          return e;
        })), gi = Du("Character", (function(e) {
          if (Ku(e)) return {
            type: "Character",
            value: e
          };
          Hu("Expected Character for type Character");
        }), (function(e) {
          return e;
        })), mi = Du("Bool", (function(e) {
          if ("boolean" == typeof e) return {
            type: "Bool",
            value: e
          };
          Hu("Expected Boolean for type Bool");
        }), (function(e) {
          return e;
        })), bi = Du("Address", (function(e) {
          if (Ku(e)) return {
            type: "Address",
            value: e
          };
          Hu("Expected Address for type Address");
        }), (function(e) {
          return e;
        })), wi = Du("Void", (function(e) {
          if (!e || zu(e)) return {
            type: "Void"
          };
          Hu("Expected Void for type Void");
        }), (function(e) {
          return e;
        })), xi = Du("Reference", (function(e) {
          if (Mu(e)) return {
            type: "Reference",
            value: e
          };
          Hu("Expected Object for type Reference");
        }), (function(e) {
          return e;
        })), ki = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return Du("Array", (function(t) {
            return {
              type: "Array",
              value: Gu(e) ? e.map((function(e, n) {
                return e.asArgument(t[n]);
              })) : t.map((function(t) {
                return e.asArgument(t);
              }))
            };
          }), (function(e) {
            return e;
          }));
        }, Ei = Du("Path", (function(e) {
          if (Mu(e)) return Ku(e.domain) || Hu("Expected a string for the Path domain but found ".concat(e.domain, ". Find out more about the Path type here: https://docs.onflow.org/cadence/json-cadence-spec/#path")), 
          "storage" !== e.domain && "private" !== e.domain && "public" !== e.domain && Hu('Expected either "storage", "private" or "public" as the Path domain but found '.concat(e.domain, ". Find out more about the Path type here: https://docs.onflow.org/cadence/json-cadence-spec/#path")), 
          Ku(e.identifier) || Hu("Expected a string for the Path identifier but found ".concat(e.identifier, ". Find out more about the Path type here: https://docs.onflow.org/cadence/json-cadence-spec/#path")), 
          {
            type: "Path",
            value: {
              domain: e.domain,
              identifier: e.identifier
            }
          };
          Hu("Expected Object for type Path");
        }), (function(e) {
          return e;
        })), Ii = Object.freeze({
          __proto__: null,
          Address: bi,
          Array: ki,
          Bool: mi,
          Character: gi,
          Dictionary: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return Du("Dictionary", (function(t) {
              if (Mu(t)) return {
                type: "Dictionary",
                value: Gu(e) ? e.map((function(e, n) {
                  return {
                    key: e.key.asArgument(t[n].key),
                    value: e.value.asArgument(t[n].value)
                  };
                })) : Gu(t) ? t.map((function(t) {
                  return {
                    key: e.key.asArgument(t.key),
                    value: e.value.asArgument(t.value)
                  };
                })) : [ {
                  key: e.key.asArgument(t.key),
                  value: e.value.asArgument(t.value)
                } ]
              };
              Hu("Expected Object for type Dictionary");
            }), (function(e) {
              return e;
            }));
          },
          Enum: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return Du("Enum", (function(n) {
              if (Mu(n)) return {
                type: "Enum",
                value: {
                  id: e,
                  fields: Gu(t) ? t.map((function(e, t) {
                    return {
                      name: n.fields[t].name,
                      value: e.value.asArgument(n.fields[t].value)
                    };
                  })) : n.fields.map((function(e) {
                    return {
                      name: e.name,
                      value: t.value.asArgument(e.value)
                    };
                  }))
                }
              };
              Hu("Expected Object for type Enum");
            }), (function(e) {
              return e;
            }));
          },
          Event: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return Du("Event", (function(n) {
              if (Mu(n)) return {
                type: "Event",
                value: {
                  id: e,
                  fields: Gu(t) ? t.map((function(e, t) {
                    return {
                      name: n.fields[t].name,
                      value: e.value.asArgument(n.fields[t].value)
                    };
                  })) : n.fields.map((function(e) {
                    return {
                      name: e.name,
                      value: t.value.asArgument(e.value)
                    };
                  }))
                }
              };
              Hu("Expected Object for type Event");
            }), (function(e) {
              return e;
            }));
          },
          Fix64: vi,
          Identity: Vu,
          Int: Xu,
          Int128: ui,
          Int16: ei,
          Int256: si,
          Int32: ni,
          Int64: ai,
          Int8: $u,
          Optional: function(e) {
            return Du("Optional", (function(t) {
              return {
                type: "Optional",
                value: zu(t) ? null : e.asArgument(t)
              };
            }), (function(e) {
              return e;
            }));
          },
          Path: Ei,
          Reference: xi,
          Resource: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return Du("Resource", (function(n) {
              if (Mu(n)) return {
                type: "Resource",
                value: {
                  id: e,
                  fields: Gu(t) ? t.map((function(e, t) {
                    return {
                      name: n.fields[t].name,
                      value: e.value.asArgument(n.fields[t].value)
                    };
                  })) : n.fields.map((function(e) {
                    return {
                      name: e.name,
                      value: t.value.asArgument(e.value)
                    };
                  }))
                }
              };
              Hu("Expected Object for type Resource");
            }), (function(e) {
              return e;
            }));
          },
          String: yi,
          Struct: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return Du("Struct", (function(n) {
              if (Mu(n)) return {
                type: "Struct",
                value: {
                  id: e,
                  fields: Gu(t) ? t.map((function(e, t) {
                    return {
                      name: n.fields[t].name,
                      value: e.value.asArgument(n.fields[t].value)
                    };
                  })) : n.fields.map((function(e) {
                    return {
                      name: e.name,
                      value: t.value.asArgument(e.value)
                    };
                  }))
                }
              };
              Hu("Expected Object for type Struct");
            }), (function(e) {
              return e;
            }));
          },
          UFix64: hi,
          UInt: Ju,
          UInt128: oi,
          UInt16: Qu,
          UInt256: ii,
          UInt32: ti,
          UInt64: ri,
          UInt8: Zu,
          Void: wi,
          Word16: fi,
          Word32: li,
          Word64: pi,
          Word8: ci,
          _Array: ki
        });
        function Si(e) {
          return Zo(e) ? e(Co, Ii) : [];
        }
        function Ai(e) {
          return Ri.apply(this, arguments);
        }
        function Ri() {
          return (Ri = s(h.mark((function e(t) {
            var n, r, a;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return he(void 0 !== (n = t.url), "retrieve({ url }) -- url must be defined"), e.prev = 2, e.next = 5, We(n);

               case 5:
                r = e.sent, e.next = 11;
                break;

               case 8:
                throw e.prev = 8, e.t0 = e.catch(2), new Error("httpDocumentResolver Error: Failed to retrieve document.");

               case 11:
                if (!r.ok) {
                  e.next = 17;
                  break;
                }
                return e.next = 14, r.json();

               case 14:
                e.t1 = e.sent, e.next = 18;
                break;

               case 17:
                e.t1 = null;

               case 18:
                return a = e.t1, e.abrupt("return", a);

               case 20:
               case "end":
                return e.stop();
              }
            }), e, null, [ [ 2, 8 ] ]);
          })))).apply(this, arguments);
        }
        var Ti = new Map([ [ "http", Ai ], [ "https", Ai ] ]);
        function _i(e) {
          return Ci.apply(this, arguments);
        }
        function Ci() {
          return (Ci = s(h.mark((function e(t) {
            var n, r, a, o, u, i;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return he(void 0 !== (n = t.url), "retrieve({ url }) -- url must be defined"), he("string" == typeof n, "retrieve({ url }) -- url must be a string"), 
                e.next = 5, oe().where(/^document\.resolver\./);

               case 5:
                return r = e.sent, Object.keys(r).map((function(e) {
                  var t = r[e], n = e.replace(/^document\.resolver\./, "");
                  Ti.set(n, t);
                })), he(a = /^(.*):\/\/([A-Za-z0-9\-\.]+)(:[0-9]+)?(.*)$/.exec(n), "Failed to parse URL"), o = a[1], he(a, "Failed to parse URL protocol"), 
                he(u = Ti.get(o), "No resolver found for protcol=".concat(o)), e.next = 15, u({
                  url: n
                });

               case 15:
                return i = e.sent, e.abrupt("return", i);

               case 17:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function Oi(e) {
          if (null == e) return null;
          if ("1.0.0" === e.f_version) return e;
          throw new Error("normalizeInteractionTemplate Error: Invalid InteractionTemplate");
        }
        function Pi(e) {
          var t, n, r = e.network, a = e.template;
          if (yo(null != r, "deriveCadenceByNetwork({ network }) -- network must be defined"), yo("string" == typeof r, "deriveCadenceByNetwork({ network }) -- network must be a string"), 
          yo(null != a, "generateDependencyPin({ template }) -- template must be defined"), yo("object" === c(a), "generateDependencyPin({ template }) -- template must be an object"), 
          yo("InteractionTemplate" === a.f_type, "generateDependencyPin({ template }) -- template must be an InteractionTemplate"), 
          "1.0.0" === (a = Oi(a)).f_version) return Object.keys(null === (t = a) || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.dependencies).map((function(e) {
            var t, n, o, u = Object.values(null === (t = a) || void 0 === t || null === (n = t.data) || void 0 === n || null === (o = n.dependencies) || void 0 === o ? void 0 : o[e]);
            yo(u, "deriveCadenceByNetwork -- Could not find contracts for dependency placeholder: ".concat(e)), yo(0 === u.length, "deriveCadenceByNetwork -- Could not find contracts for dependency placeholder: ".concat(e));
            var i = u[0], s = null == i ? void 0 : i[r];
            return yo(s, "deriveCadenceByNetwork -- Could not find ".concat(r, " network information for dependency: ").concat(e)), 
            [ e, s.address ];
          })).reduce((function(e, t) {
            var n = u(t, 2), r = n[0], a = n[1], o = new RegExp("(\\b" + r + "\\b)", "g");
            return e.replace(o, a);
          }), a.data.cadence);
          throw new Error("deriveCadenceByNetwork Error: Unsupported template version");
        }
        function Ni(e) {
          return Bi.apply(this, arguments);
        }
        function Bi() {
          return Bi = s(h.mark((function e(t) {
            var n, r, a, o, u, i, s, c, f, l, p, d, v;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return r = t.template, e.next = 3, oe.get("flow.network");

               case 3:
                he(a = e.sent, "FCL configureDependencies Error: Missing configuration value for 'flow.network'"), o = {}, e.t0 = r.f_version, 
                e.next = "1.0.0" === e.t0 ? 9 : 12;
                break;

               case 9:
                for (u = Object.keys(null == r || null === (n = r.data) || void 0 === n ? void 0 : n.dependencies), i = 0, s = u; i < s.length; i++) f = s[i], 
                l = null == r || null === (c = r.data) || void 0 === c ? void 0 : c.dependencies[f], he((p = Object.keys(l)).length > 0, "FCL configureDependencies Error: No contracts found in template for placeholder=".concat(f)), 
                d = l[p[0]], he(v = d[a], "FCL configureDependencies Error: No dependency information for placeholder=".concat(f, " contract=").concat(p[0], " network=").concat(a)), 
                he(null == v ? void 0 : v.address, "FCL configureDependencies Error: No address information for placeholder=".concat(f, " contract=").concat(p[0], " network=").concat(a)), 
                o[f] = Je(null == v ? void 0 : v.address);
                return e.abrupt("return", o);

               case 12:
                throw new Error("FCL configureDependencies Error: Unsupported template version");

               case 13:
               case "end":
                return e.stop();
              }
            }), e);
          }))), Bi.apply(this, arguments);
        }
        function Li(e) {
          return Ui.apply(this, arguments);
        }
        function Ui() {
          return (Ui = s(h.mark((function e(t) {
            var n, r;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (!Xo(null == t ? void 0 : t.template)) {
                  e.next = 4;
                  break;
                }
                return e.next = 3, _i({
                  url: null == t ? void 0 : t.template
                });

               case 3:
                t.template = e.sent;

               case 4:
                if (n = {}, null == t || !t.template) {
                  e.next = 10;
                  break;
                }
                return t.template = Oi(null == t ? void 0 : t.template), e.next = 9, Ni({
                  template: t.template
                });

               case 9:
                n = e.sent;

               case 10:
                if (e.t0 = t.cadence, e.t0) {
                  e.next = 19;
                  break;
                }
                return e.t1 = Pi, e.t2 = t.template, e.next = 16, oe().get("flow.network");

               case 16:
                e.t3 = e.sent, e.t4 = {
                  template: e.t2,
                  network: e.t3
                }, e.t0 = (0, e.t1)(e.t4);

               case 19:
                return r = e.t0, t.cadence = r, t.dependencies = n, e.abrupt("return", t);

               case 23:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function Fi(e, t) {
          return ji.apply(this, arguments);
        }
        function ji() {
          return ji = s(h.mark((function e(t, n) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (he(Vo(n), "".concat(t, "(opts) -- opts is required")), he(Jo(n), "".concat(t, "(opts) -- opts must be an object")), 
                he(!(n.cadence && n.template), "".concat(t, "({ template, cadence }) -- cannot pass both cadence and template")), he(Vo(n.cadence || (null == n ? void 0 : n.template)), "".concat(t, "({ cadence }) -- cadence is required")), 
                he(Xo(n.cadence) || (null == n ? void 0 : n.template), "".concat(t, "({ cadence }) -- cadence must be a string")), e.t0 = he, 
                e.t1 = n.cadence, e.t1) {
                  e.next = 11;
                  break;
                }
                return e.next = 10, oe().get("flow.network");

               case 10:
                e.t1 = e.sent;

               case 11:
                return e.t2 = e.t1, e.t3 = "".concat(t, '(opts) -- Required value for "flow.network" not defined in config. See: ', "https://github.com/onflow/flow-js-sdk/blob/master/packages/fcl/src/exec/query.md#configuration"), 
                (0, e.t0)(e.t2, e.t3), e.t4 = he, e.next = 17, oe().get("accessNode.api");

               case 17:
                e.t5 = e.sent, e.t6 = "".concat(t, '(opts) -- Required value for "accessNode.api" not defined in config. See: ', "https://github.com/onflow/flow-js-sdk/blob/master/packages/fcl/src/exec/query.md#configuration"), 
                (0, e.t4)(e.t5, e.t6);

               case 20:
               case "end":
                return e.stop();
              }
            }), e);
          }))), ji.apply(this, arguments);
        }
        function Di(e) {
          return Gi.apply(this, arguments);
        }
        function Gi() {
          return (Gi = s(h.mark((function e(t) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.abrupt("return", Fi("mutate", t));

               case 1:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function Mi(e) {
          return zi.apply(this, arguments);
        }
        function zi() {
          return (zi = s(h.mark((function e(t) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.abrupt("return", Fi("query", t));

               case 1:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function Yi() {
          return qi.apply(this, arguments);
        }
        function qi() {
          return qi = s(h.mark((function e() {
            var t, n = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return t = n.length > 0 && void 0 !== n[0] ? n[0] : {}, e.next = 3, Mi(t);

               case 3:
                return e.next = 5, Li(t);

               case 5:
                return t = e.sent, e.abrupt("return", oe().overload(t.dependencies || {}, s(h.mark((function e() {
                  return h.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                     case 0:
                      return e.abrupt("return", go([ Uo(t.cadence), _o(Si(t.args || [])), t.limit && "number" == typeof t.limit && To(t.limit) ]).then(mo));

                     case 1:
                     case "end":
                      return e.stop();
                    }
                  }), e);
                })))));

               case 7:
               case "end":
                return e.stop();
              }
            }), e);
          }))), qi.apply(this, arguments);
        }
        function Ki(e, t) {
          return Hi.apply(this, arguments);
        }
        function Hi() {
          return Hi = s(h.mark((function e(t, n) {
            var r, a, o, u, i, s;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (null != t && null != n) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return", []);

               case 2:
                return (r = new URL(t)).searchParams.append("code", n), e.next = 6, fetch(r, {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json"
                  }
                }).then((function(e) {
                  return e.json();
                }));

               case 6:
                if (a = e.sent, !Array.isArray(a)) {
                  e.next = 9;
                  break;
                }
                return e.abrupt("return", a);

               case 9:
                if (o = [], Array.isArray(a.authorizations)) {
                  u = w(a.authorizations);
                  try {
                    for (u.s(); !(i = u.n()).done; ) s = i.value, o.push(b({
                      type: "authz",
                      keyId: a.keyId
                    }, s));
                  } catch (e) {
                    u.e(e);
                  } finally {
                    u.f();
                  }
                }
                return null != a.provider && o.push(b({
                  type: "authn",
                  id: "wallet-provider#authn"
                }, a.provider)), e.abrupt("return", o);

               case 13:
               case "end":
                return e.stop();
              }
            }), e);
          }))), Hi.apply(this, arguments);
        }
        function Wi() {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return [].concat(ve(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []), ve(e));
        }
        var Vi = {
          f_type: "Service",
          f_vsn: "1.0.0"
        }, Ji = {
          f_type: "Identity",
          f_vsn: "1.0.0"
        }, Xi = {
          f_type: "USER",
          f_vsn: "1.0.0"
        }, Zi = {
          f_type: "PollingResponse",
          f_vsn: "1.0.0"
        }, $i = {
          f_type: "CompositeSignature",
          f_vsn: "1.0.0"
        };
        function Qi(e) {
          return null == e ? null : "1.0.0" === e.f_vsn ? e : b(b({
            old: e
          }, Vi), {}, {
            type: "frame",
            endpoint: e.endpoint,
            params: e.params || {},
            data: e.data || {}
          });
        }
        function es(e) {
          return null == e ? null : "1.0.0" === e.f_vsn ? e : b(b({}, Vi), {}, {
            type: "back-channel-rpc",
            endpoint: e.endpoint,
            method: e.method,
            params: e.params || {},
            data: e.data || {}
          });
        }
        function ts(e) {
          return null == e ? null : (null == e.method && (e = b(b({}, e), {}, {
            type: "local-view",
            method: "VIEW/IFRAME"
          })), "1.0.0" === e.f_vsn ? e : b(b({}, Vi), {}, {
            type: e.type || "local-view",
            method: e.method,
            endpoint: e.endpoint,
            data: e.data || {},
            params: e.params || {}
          }));
        }
        var ns = {
          "back-channel-rpc": es,
          "pre-authz": function(e) {
            return null == e ? null : "1.0.0" === e.f_vsn ? e : b(b({}, Vi), {}, {
              type: e.type,
              uid: e.id,
              endpoint: e.endpoint,
              method: e.method,
              identity: b(b({}, Ji), {}, {
                address: Je(e.addr),
                keyId: e.keyId
              }),
              params: e.params,
              data: e.data
            });
          },
          authz: function(e) {
            return null == e ? null : "1.0.0" === e.f_vsn ? e : b(b({}, Vi), {}, {
              type: e.type,
              uid: e.id,
              endpoint: e.endpoint,
              method: e.method,
              identity: b(b({}, Ji), {}, {
                address: Je(e.addr),
                keyId: e.keyId
              }),
              params: e.params,
              data: e.data
            });
          },
          authn: function(e) {
            return null == e ? null : "1.0.0" === e.f_vsn ? e : b(b({}, Vi), {}, {
              type: e.type,
              uid: e.id,
              endpoint: e.authn,
              id: e.pid,
              provider: {
                address: Je(e.addr),
                name: e.name,
                icon: e.icon
              }
            });
          },
          frame: Qi,
          "open-id": function(e) {
            return null == e ? null : "1.0.0" === e.f_vsn ? e : null;
          },
          "user-signature": function(e) {
            if (null == e) return null;
            if ("1.0.0" === e.f_vsn) return e;
            throw new Error("Invalid user-signature service");
          },
          "local-view": ts,
          "account-proof": function(e) {
            if (null == e) return null;
            if ("1.0.0" === e.f_vsn) return e;
            throw new Error("FCL Normalizer Error: Invalid account-proof service");
          },
          "authn-refresh": function(e) {
            if (null == e) return null;
            if ("1.0.0" === e.f_vsn) return e;
            throw new Error("Invalid authn-refresh service");
          }
        };
        function rs(e, t) {
          try {
            return ns[e.type](e, t);
          } catch (t) {
            return console.error("Unrecognized FCL Service Type [".concat(e.type, "]"), e, t), e;
          }
        }
        function as(e) {
          return Ge([ e.provider.address || e.provider.name || "UNSPECIFIED", e.id ]).toString("hex");
        }
        function os(e) {
          return e.addr = e.addr ? Je(e.addr) : null, e.paddr = e.paddr ? Je(e.paddr) : null, e;
        }
        function us(e, t) {
          return t.find((function(t) {
            return t.type === e;
          }));
        }
        function is(e) {
          return ss.apply(this, arguments);
        }
        function ss() {
          return ss = s(h.mark((function e(t) {
            var n, r;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return t = os(t), e.t0 = Wi, e.t1 = t.services || [], e.next = 5, Ki(t.hks, t.code);

               case 5:
                return e.t2 = e.sent, n = (0, e.t0)(e.t1, e.t2).map((function(e) {
                  return rs(e, t);
                })), r = us("authn", n), e.abrupt("return", b(b({}, Xi), {}, {
                  addr: Je(t.addr),
                  cid: as(r),
                  loggedIn: !0,
                  services: n,
                  expiresAt: t.expires
                }));

               case 9:
               case "end":
                return e.stop();
              }
            }), e);
          }))), ss.apply(this, arguments);
        }
        function cs() {
          var e = arguments.length > 1 ? arguments[1] : void 0;
          return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).find((function(t) {
            return t.type === e;
          }));
        }
        function fs(e) {
          var t = new URL(e.endpoint);
          if (t.searchParams.append("l6n", window.location.origin), null != e.params) for (var n = 0, r = Object.entries(e.params || {}); n < r.length; n++) {
            var a = u(r[n], 2), o = a[0], i = a[1];
            t.searchParams.append(o, i);
          }
          return t;
        }
        function ls(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.method || "POST", r = "GET" === n ? void 0 : JSON.stringify(t.data || e.data || {});
          return fetch(fs(e), {
            method: n,
            headers: b(b(b({}, e.headers || {}), t.headers || {}), {}, {
              "Content-Type": "application/json"
            }),
            body: r
          }).then((function(e) {
            return e.json();
          }));
        }
        function ps(e) {
          var t, n;
          return null == e ? null : "1.0.0" === e.f_vsn ? e : b(b({}, Zi), {}, {
            status: null !== (t = e.status) && void 0 !== t ? t : "APPROVED",
            reason: null !== (n = e.reason) && void 0 !== n ? n : null,
            data: e.compositeSignature || e.data || b({}, e) || {},
            updates: es(e.authorizationUpdates),
            local: Qi((e.local || [])[0])
          });
        }
        var ds = {
          "HTTP/GET": "GET",
          "HTTP/POST": "POST"
        }, hs = function(e) {
          return he(ds[e.method], "Invalid Service Method for type back-channel-rpc", {
            service: e
          }), ds[e.method];
        };
        function vs(e) {
          return ys.apply(this, arguments);
        }
        function ys() {
          return ys = s(h.mark((function e(t) {
            var n, r, a = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (n = a.length > 1 && void 0 !== a[1] ? a[1] : function() {
                  return !0;
                }, he(t, "Missing Polling Service", {
                  service: t
                }), n()) {
                  e.next = 4;
                  break;
                }
                throw new Error("Externally Halted");

               case 4:
                return e.next = 6, ls(t, {
                  method: hs(t)
                }).then(ps);

               case 6:
                r = e.sent, e.t0 = r.status, e.next = "APPROVED" === e.t0 ? 10 : "DECLINED" === e.t0 ? 11 : 12;
                break;

               case 10:
                return e.abrupt("return", r.data);

               case 11:
                throw new Error("Declined: ".concat(r.reason || "No reason supplied."));

               case 12:
                return e.next = 14, new Promise((function(e) {
                  return setTimeout(e, 500);
                }));

               case 14:
                return e.abrupt("return", vs(r.updates, n));

               case 15:
               case "end":
                return e.stop();
              }
            }), e);
          }))), ys.apply(this, arguments);
        }
        var gs = "FCL_IFRAME";
        function ms(e) {
          he(!document.getElementById(gs), "Attempt at triggering multiple Frames", {
            src: e
          });
          var t = document.createElement("iframe");
          return t.src = e, t.id = gs, t.allow = "usb *; hid *", t.frameBorder = "0", t.style.cssText = "\n  position:fixed;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100vw;\n  display:block;\n  background:rgba(0,0,0,0.25);\n  z-index: 2147483647;\n  box-sizing: border-box;\n  color-scheme: light;\n", 
          document.body.append(t), [ t.contentWindow, function() {
            document.getElementById(gs) && document.getElementById(gs).remove();
          } ];
        }
        var bs = null, ws = null;
        function xs(e) {
          var t;
          return null == bs || null !== (t = bs) && void 0 !== t && t.closed ? bs = function(e, t, n, r, a) {
            var o = n.top.outerHeight / 2 + n.top.screenY - a / 2, u = n.top.outerWidth / 2 + n.top.screenX - r / 2, i = n.open(e, t, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=".concat(r, ", height=").concat(a, ", top=").concat(o, ", left=").concat(u));
            if (!i) throw new Error("Popup failed to open (was it blocked by a popup blocker?)");
            return i;
          }(e, "FCL_POP", window, 640, 770) : ws !== e ? (bs.location.replace(e), bs.focus()) : bs.focus(), ws = e, [ bs, function() {
            bs && !bs.closed && bs.close(), bs = null;
          } ];
        }
        var ks = null, Es = null;
        function Is(e) {
          var t;
          if (null == ks || null !== (t = ks) && void 0 !== t && t.closed) {
            if (!(ks = window.open(e, "_blank"))) throw new Error("Tab failed to open (was it blocked by the browser?)");
          } else Es !== e ? (ks.location.replace(e), ks.focus()) : ks.focus();
          return Es = e, [ ks, function() {
            ks && !ks.closed && ks.close(), ks = null;
          } ];
        }
        var Ss = {
          "VIEW/IFRAME": ms,
          "VIEW/POP": xs,
          "VIEW/TAB": Is
        };
        function As(e) {
          return Rs.apply(this, arguments);
        }
        function Rs() {
          return Rs = s(h.mark((function e(t) {
            var n, r = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = r.length > 1 && void 0 !== r[1] ? r[1] : {}, e.prev = 1, e.abrupt("return", Ss[t.method](fs(t), n));

               case 5:
                throw e.prev = 5, e.t0 = e.catch(1), console.error("execLocal({service, opts = {}})", e.t0, {
                  service: t,
                  opts: n
                }), e.t0;

               case 9:
               case "end":
                return e.stop();
              }
            }), e, null, [ [ 1, 5 ] ]);
          }))), Rs.apply(this, arguments);
        }
        function Ts(e) {
          return _s.apply(this, arguments);
        }
        function _s() {
          return _s = s(h.mark((function e(t) {
            var n, r, a, o, i, s, c, f, l;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = t.service, r = t.body, a = t.config, t.opts, e.next = 3, ls(n, {
                  data: b({
                    fclVersion: de,
                    service: {
                      params: n.params,
                      data: n.data,
                      type: n.type
                    },
                    config: a
                  }, r)
                }).then(ps);

               case 3:
                if ("APPROVED" !== (o = e.sent).status) {
                  e.next = 8;
                  break;
                }
                return e.abrupt("return", o.data);

               case 8:
                if ("DECLINED" !== o.status) {
                  e.next = 12;
                  break;
                }
                throw new Error("Declined: ".concat(o.reason || "No reason supplied."));

               case 12:
                if ("REDIRECT" !== o.status) {
                  e.next = 16;
                  break;
                }
                return e.abrupt("return", o);

               case 16:
                if ("PENDING" !== o.status) {
                  e.next = 28;
                  break;
                }
                return i = !0, e.next = 20, As(ts(o.local));

               case 20:
                return s = e.sent, (c = u(s, 2))[0], f = c[1], l = function() {
                  try {
                    f(), i = !1;
                  } catch (e) {
                    console.error("Frame Close Error", e);
                  }
                }, e.abrupt("return", vs(o.updates, (function() {
                  return i;
                })).then((function(e) {
                  return l(), e;
                })).catch((function(e) {
                  throw console.error(e), l(), e;
                })));

               case 28:
                throw console.error("Auto Decline: Invalid Response", {
                  service: n,
                  resp: o
                }), new Error("Auto Decline: Invalid Response");

               case 30:
               case "end":
                return e.stop();
              }
            }), e);
          }))), _s.apply(this, arguments);
        }
        var Cs = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", Os = Cs.length;
        function Ps() {
          for (var e = "", t = 32; t--; ) e += Cs[Math.random() * Os | 0];
          return e;
        }
        var Ns = "FCL:VIEW:CLOSE", Bs = "FCL:VIEW:READY", Ls = "FCL:VIEW:RESPONSE", Us = function(e) {
          return "string" == typeof e && e.toLowerCase();
        }, Fs = new Set([ "monetizationstart", "monetizationpending", "monetizationprogress", "monetizationstop" ]), js = function(e, t) {
          return console.warn("DEPRECATION NOTICE", "Received ".concat(e, ", please use ").concat(t, " for this and future versions of FCL"));
        }, Ds = function(e) {
          var t = e.close, n = e.send, r = e.onReady, a = e.onResponse, o = e.onMessage;
          return function(e) {
            try {
              if ("object" !== c(e.data)) return;
              if (Fs.has(e.data.type)) return;
              Us(e.data.type) === Us(Ns) && t(), Us(e.data.type) === Us(Bs) && r(e, {
                send: n,
                close: t
              }), Us(e.data.type) === Us(Ls) && a(e, {
                send: n,
                close: t
              }), o(e, {
                send: n,
                close: t
              }), Us(e.data.type) === Us("FCL:FRAME:READY") && (js(e.data.type, Bs), r(e, {
                send: n,
                close: t
              })), Us(e.data.type) === Us("FCL:FRAME:RESPONSE") && (js(e.data.type, Ls), a(e, {
                send: n,
                close: t
              })), Us(e.data.type) === Us("FCL:FRAME:CLOSE") && (js(e.data.type, Ns), t()), Us(e.data.type) === Us("FCL::CHALLENGE::RESPONSE") && (js(e.data.type, Ls), 
              a(e, {
                send: n,
                close: t
              })), Us(e.data.type) === Us("FCL::AUTHZ_READY") && (js(e.data.type, Bs), r(e, {
                send: n,
                close: t
              })), Us(e.data.type) === Us("FCL::CHALLENGE::CANCEL") && (js(e.data.type, Ns), t()), Us(e.data.type) === Us("FCL::CANCEL") && (js(e.data.type, Ns), 
              t());
            } catch (e) {
              console.error("Frame Callback Error", e), t();
            }
          };
        }, Gs = function() {};
        var Ms = function() {};
        var zs = function() {};
        var Ys = function() {};
        var qs, Ks, Hs, Ws, Vs = {
          "HTTP/RPC": Ts,
          "HTTP/POST": Ts,
          "IFRAME/RPC": function(e) {
            var t = e.service, n = e.body, r = e.config, a = e.opts;
            return new Promise((function(e, o) {
              var i = Ps(), f = a.includeOlderJsonRpcCall;
              !function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null == e) return {
                  send: Gs,
                  close: Gs
                };
                var n = t.onClose || Gs, r = t.onMessage || Gs, a = t.onReady || Gs, o = t.onResponse || Gs, i = Ds({
                  close: l,
                  send: p,
                  onReady: a,
                  onResponse: o,
                  onMessage: r
                });
                window.addEventListener("message", i);
                var s = u(ms(fs(e)), 2), c = s[0], f = s[1];
                return {
                  send: p,
                  close: l
                };
                function l() {
                  try {
                    window.removeEventListener("message", i), f(), n();
                  } catch (e) {
                    console.error("Frame Close Error", e);
                  }
                }
                function p(e) {
                  try {
                    c.postMessage(JSON.parse(JSON.stringify(e || {})), "*");
                  } catch (t) {
                    console.error("Frame Send Error", e, t);
                  }
                }
              }(t, {
                onReady: function(e, a) {
                  return s(h.mark((function e() {
                    var o;
                    return h.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                       case 0:
                        o = a.send, e.prev = 1, o({
                          type: "FCL:VIEW:READY:RESPONSE",
                          fclVersion: de,
                          body: n,
                          service: {
                            params: t.params,
                            data: t.data,
                            type: t.type
                          },
                          config: r
                        }), o({
                          fclVersion: de,
                          type: "FCL:FRAME:READY:RESPONSE",
                          body: n,
                          service: {
                            params: t.params,
                            data: t.data,
                            type: t.type
                          },
                          config: r,
                          deprecated: {
                            message: "FCL:FRAME:READY:RESPONSE is deprecated and replaced with type: FCL:VIEW:READY:RESPONSE"
                          }
                        }), f && o({
                          jsonrpc: "2.0",
                          id: i,
                          method: "fcl:sign",
                          params: [ n, t.params ],
                          deprecated: {
                            message: "jsonrpc is deprecated and replaced with type: FCL:VIEW:READY:RESPONSE"
                          }
                        }), e.next = 10;
                        break;

                       case 7:
                        throw e.prev = 7, e.t0 = e.catch(1), e.t0;

                       case 10:
                       case "end":
                        return e.stop();
                      }
                    }), e, null, [ [ 1, 7 ] ]);
                  })))();
                },
                onResponse: function(t, n) {
                  var r = n.close;
                  try {
                    if ("object" !== c(t.data)) return;
                    var a = ps(t.data);
                    switch (a.status) {
                     case "APPROVED":
                      e(a.data), r();
                      break;

                     case "DECLINED":
                      o("Declined: ".concat(a.reason || "No reason supplied")), r();
                      break;

                     case "REDIRECT":
                      e(a), r();
                      break;

                     default:
                      o("Declined: No reason supplied"), r();
                    }
                  } catch (e) {
                    throw console.error("execIframeRPC onResponse error", e), e;
                  }
                },
                onMessage: function(t, n) {
                  var r = n.close;
                  try {
                    if ("object" !== c(t.data)) return;
                    if ("2.0" !== t.data.jsonrpc) return;
                    if (t.data.id !== i) return;
                    var a = ps(t.data.result);
                    switch (a.status) {
                     case "APPROVED":
                      e(a.data), r();
                      break;

                     case "DECLINED":
                      o("Declined: ".concat(a.reason || "No reason supplied")), r();
                      break;

                     case "REDIRECT":
                      e(a), r();
                      break;

                     default:
                      o("Declined: No reason supplied"), r();
                    }
                  } catch (e) {
                    throw console.error("execIframeRPC onMessage error", e), e;
                  }
                },
                onClose: function() {
                  o("Declined: Externally Halted");
                }
              });
            }));
          },
          "POP/RPC": function(e) {
            var t = e.service, n = e.body, r = e.config, a = e.opts;
            return new Promise((function(e, o) {
              var i = Ps(), f = a.redir, l = a.includeOlderJsonRpcCall;
              !function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null == e) return {
                  send: Ms,
                  close: Ms
                };
                var n = t.onClose || Ms, r = t.onMessage || Ms, a = t.onReady || Ms, o = t.onResponse || Ms, i = Ds({
                  close: p,
                  send: d,
                  onReady: a,
                  onResponse: o,
                  onMessage: r
                });
                window.addEventListener("message", i);
                var s = u(xs(fs(e)), 2), c = s[0], f = s[1], l = setInterval((function() {
                  c && c.closed && p();
                }), 500);
                return {
                  send: d,
                  close: p
                };
                function p() {
                  try {
                    window.removeEventListener("message", i), clearInterval(l), f(), n();
                  } catch (e) {
                    console.error("Popup Close Error", e);
                  }
                }
                function d(e) {
                  try {
                    c.postMessage(JSON.parse(JSON.stringify(e || {})), "*");
                  } catch (t) {
                    console.error("Popup Send Error", e, t);
                  }
                }
              }(t, {
                onReady: function(e, a) {
                  return s(h.mark((function e() {
                    var o;
                    return h.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                       case 0:
                        o = a.send, e.prev = 1, o({
                          fclVersion: de,
                          type: "FCL:VIEW:READY:RESPONSE",
                          body: n,
                          service: {
                            params: t.params,
                            data: t.data,
                            type: t.type
                          },
                          config: r
                        }), o({
                          fclVersion: de,
                          type: "FCL:FRAME:READY:RESPONSE",
                          body: n,
                          service: {
                            params: t.params,
                            data: t.data,
                            type: t.type
                          },
                          config: r,
                          deprecated: {
                            message: "FCL:FRAME:READY:RESPONSE is deprecated and replaced with type: FCL:VIEW:READY:RESPONSE"
                          }
                        }), l && o({
                          jsonrpc: "2.0",
                          id: i,
                          method: "fcl:sign",
                          params: [ n, t.params ]
                        }), e.next = 10;
                        break;

                       case 7:
                        throw e.prev = 7, e.t0 = e.catch(1), e.t0;

                       case 10:
                       case "end":
                        return e.stop();
                      }
                    }), e, null, [ [ 1, 7 ] ]);
                  })))();
                },
                onResponse: function(t, n) {
                  var r = n.close;
                  try {
                    if ("object" !== c(t.data)) return;
                    var a = ps(t.data);
                    switch (a.status) {
                     case "APPROVED":
                      e(a.data), !f && r();
                      break;

                     case "DECLINED":
                      o("Declined: ".concat(a.reason || "No reason supplied")), r();
                      break;

                     case "REDIRECT":
                      e(a), r();
                      break;

                     default:
                      o("Declined: No reason supplied"), r();
                    }
                  } catch (e) {
                    throw console.error("execPopRPC onResponse error", e), e;
                  }
                },
                onMessage: function(t, n) {
                  var r = n.close;
                  try {
                    if ("object" !== c(t.data)) return;
                    if ("2.0" !== t.data.jsonrpc) return;
                    if (t.data.id !== i) return;
                    var a = ps(t.data.result);
                    switch (a.status) {
                     case "APPROVED":
                      e(a.data), !f && r();
                      break;

                     case "DECLINED":
                      o("Declined: ".concat(a.reason || "No reason supplied")), r();
                      break;

                     case "REDIRECT":
                      e(a), r();
                      break;

                     default:
                      o("Declined: No reason supplied"), r();
                    }
                  } catch (e) {
                    throw console.error("execPopRPC onMessage error", e), e;
                  }
                },
                onClose: function() {
                  o("Declined: Externally Halted");
                }
              });
            }));
          },
          "TAB/RPC": function(e) {
            var t = e.service, n = e.body, r = e.config, a = e.opts;
            return new Promise((function(e, o) {
              var i = Ps(), f = a.redir, l = a.includeOlderJsonRpcCall;
              !function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null == e) return {
                  send: zs,
                  close: zs
                };
                var n = t.onClose || zs, r = t.onMessage || zs, a = t.onReady || zs, o = t.onResponse || zs, i = Ds({
                  close: p,
                  send: d,
                  onReady: a,
                  onResponse: o,
                  onMessage: r
                });
                window.addEventListener("message", i);
                var s = u(Is(fs(e)), 2), c = s[0], f = s[1], l = setInterval((function() {
                  c && c.closed && p();
                }), 500);
                return {
                  send: d,
                  close: p
                };
                function p() {
                  try {
                    window.removeEventListener("message", i), clearInterval(l), f(), n();
                  } catch (e) {
                    console.error("Tab Close Error", e);
                  }
                }
                function d(e) {
                  try {
                    c.postMessage(JSON.parse(JSON.stringify(e || {})), "*");
                  } catch (t) {
                    console.error("Tab Send Error", e, t);
                  }
                }
              }(t, {
                onReady: function(e, a) {
                  return s(h.mark((function e() {
                    var o;
                    return h.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                       case 0:
                        o = a.send, e.prev = 1, o({
                          fclVersion: de,
                          type: "FCL:VIEW:READY:RESPONSE",
                          body: n,
                          service: {
                            params: t.params,
                            data: t.data,
                            type: t.type
                          },
                          config: r
                        }), o({
                          fclVersion: de,
                          type: "FCL:FRAME:READY:RESPONSE",
                          body: n,
                          service: {
                            params: t.params,
                            data: t.data,
                            type: t.type
                          },
                          config: r,
                          deprecated: {
                            message: "FCL:FRAME:READY:RESPONSE is deprecated and replaced with type: FCL:VIEW:READY:RESPONSE"
                          }
                        }), l && o({
                          jsonrpc: "2.0",
                          id: i,
                          method: "fcl:sign",
                          params: [ n, t.params ]
                        }), e.next = 10;
                        break;

                       case 7:
                        throw e.prev = 7, e.t0 = e.catch(1), e.t0;

                       case 10:
                       case "end":
                        return e.stop();
                      }
                    }), e, null, [ [ 1, 7 ] ]);
                  })))();
                },
                onResponse: function(t, n) {
                  var r = n.close;
                  try {
                    if ("object" !== c(t.data)) return;
                    var a = ps(t.data);
                    switch (a.status) {
                     case "APPROVED":
                      e(a.data), !f && r();
                      break;

                     case "DECLINED":
                      o("Declined: ".concat(a.reason || "No reason supplied")), r();
                      break;

                     case "REDIRECT":
                      e(a), r();
                      break;

                     default:
                      o("Declined: No reason supplied"), r();
                    }
                  } catch (e) {
                    throw console.error("execPopRPC onResponse error", e), e;
                  }
                },
                onMessage: function(t, n) {
                  var r = n.close;
                  try {
                    if ("object" !== c(t.data)) return;
                    if ("2.0" !== t.data.jsonrpc) return;
                    if (t.data.id !== i) return;
                    var a = ps(t.data.result);
                    switch (a.status) {
                     case "APPROVED":
                      e(a.data), !f && r();
                      break;

                     case "DECLINED":
                      o("Declined: ".concat(a.reason || "No reason supplied")), r();
                      break;

                     case "REDIRECT":
                      e(a), r();
                      break;

                     default:
                      o("Declined: No reason supplied"), r();
                    }
                  } catch (e) {
                    throw console.error("execPopRPC onMessage error", e), e;
                  }
                },
                onClose: function() {
                  o("Declined: Externally Halted");
                }
              });
            }));
          },
          "EXT/RPC": function(e) {
            var t = e.service, n = e.body, r = e.config;
            return e.opts, new Promise((function(e, a) {
              !function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null == e) return {
                  send: Ys,
                  close: Ys
                };
                var n = t.onClose || Ys, r = t.onMessage || Ys, a = t.onReady || Ys, o = t.onResponse || Ys, u = Ds({
                  close: i,
                  send: s,
                  onReady: a,
                  onResponse: o,
                  onMessage: r
                });
                return window.addEventListener("message", u), s({
                  service: e
                }), {
                  send: s,
                  close: i
                };
                function i() {
                  try {
                    window.removeEventListener("message", u), n();
                  } catch (e) {
                    console.error("Ext Close Error", e);
                  }
                }
                function s(e) {
                  try {
                    window && window.postMessage(JSON.parse(JSON.stringify(e || {})), "*");
                  } catch (t) {
                    console.error("Ext Send Error", e, t);
                  }
                }
              }(t, {
                onReady: function(e, a) {
                  return s(h.mark((function e() {
                    var o;
                    return h.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                       case 0:
                        o = a.send, e.prev = 1, o({
                          fclVersion: de,
                          type: "FCL:VIEW:READY:RESPONSE",
                          body: n,
                          service: {
                            params: t.params,
                            data: t.data,
                            type: t.type
                          },
                          config: r
                        }), e.next = 8;
                        break;

                       case 5:
                        throw e.prev = 5, e.t0 = e.catch(1), e.t0;

                       case 8:
                       case "end":
                        return e.stop();
                      }
                    }), e, null, [ [ 1, 5 ] ]);
                  })))();
                },
                onResponse: function(t, n) {
                  var r = n.close;
                  try {
                    if ("object" !== c(t.data)) return;
                    var o = ps(t.data);
                    switch (o.status) {
                     case "APPROVED":
                      e(o.data), r();
                      break;

                     case "DECLINED":
                      a("Declined: ".concat(o.reason || "No reason supplied")), r();
                      break;

                     case "REDIRECT":
                      e(o), r();
                      break;

                     default:
                      a("Declined: No reason supplied"), r();
                    }
                  } catch (e) {
                    throw console.error("execExtRPC onResponse error", e), e;
                  }
                },
                onClose: function() {
                  a("Declined: Externally Halted");
                }
              });
            }));
          }
        }, Js = [ "ServicePlugin" ], Xs = [ "discovery-service" ], Zs = (qs = new Set, Ks = new Map(Object.entries(Vs)), Hs = function(e) {
          return qs = new Set(ve(e));
        }, Object.freeze({
          add: function(e) {
            if (he(Xs.includes(e.type), "Service Plugin type ".concat(e.type, " is not supported")), "discovery-service" === e.type) {
              var t = function(e) {
                var t = e.services, n = e.serviceStrategy;
                he(Array.isArray(t) && t.length, "Array of Discovery Services is required");
                var r, a = w(t);
                try {
                  for (a.s(); !(r = a.n()).done; ) {
                    var o = r.value;
                    he(Vo(o.f_type) && "Service" === o.f_type, "Service is required"), he(Vo(o.type) && "authn" === o.type, "Service must be type authn. Received ".concat(o.type)), 
                    he(o.method in Vs || n.method === o.method, "Service method ".concat(o.method, " is not supported"));
                  }
                } catch (e) {
                  a.e(e);
                } finally {
                  a.f();
                }
                return he(Vo(n), "Service strategy is required"), he(Vo(n.method) && Xo(n.method), "Service strategy method is required"), 
                he(Vo(n.exec) && Zo(n.exec), "Service strategy exec function is required"), {
                  discoveryServices: t,
                  serviceStrategy: n
                };
              }(e), n = t.discoveryServices, r = t.serviceStrategy;
              Hs(n), Ks.has(r.method) ? me({
                title: "Add Service Plugin",
                message: "Service strategy for ".concat(r.method, " already exists"),
                level: ye.warn
              }) : Ks.set(r.method, r.exec);
            }
          },
          getServices: function() {
            return ve(qs);
          },
          getStrategy: function(e) {
            return Ks.get(e);
          },
          getStrategies: function() {
            return ve(Ks.keys());
          }
        })), $s = (Ws = new Map, Object.freeze({
          add: function(e) {
            var t, n = function(e) {
              var t;
              he(e, "No plugins supplied");
              var n, r = w(t = Array.isArray(e) ? ve(e) : [ e ]);
              try {
                for (r.s(); !(n = r.n()).done; ) {
                  var a = n.value;
                  he(Vo(a.name), "Plugin name is required"), he(Vo(a.f_type), "Plugin f_type is required"), he(Js.includes(a.f_type), "Plugin type ".concat(a.f_type, " is not supported"));
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
              return t;
            }(e), r = w(n);
            try {
              for (r.s(); !(t = r.n()).done; ) {
                var a = t.value;
                Ws.set(a.name, a), "ServicePlugin" === a.f_type && Zs.add(a);
              }
            } catch (e) {
              r.e(e);
            } finally {
              r.f();
            }
          },
          getPlugins: function() {
            return Ws;
          }
        })), Qs = function() {
          var e = s(h.mark((function e(t) {
            var n, r, a, o, u;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = t.service, r = t.body, a = t.config, o = t.opts, u = Zs.getStrategy(n.method), e.abrupt("return", u({
                  service: n,
                  body: r,
                  config: a,
                  opts: o
                }));

               case 3:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }();
        function ec(e) {
          return tc.apply(this, arguments);
        }
        function tc() {
          return tc = s(h.mark((function e(t) {
            var n, r, a, o, u, i, s, c, f, l, p, d;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return o = t.service, u = t.msg, i = void 0 === u ? {} : u, s = t.config, c = void 0 === s ? {} : s, f = t.opts, l = void 0 === f ? {} : f, 
                i.data = o.data, e.next = 4, le(/^service\./);

               case 4:
                return e.t0 = e.sent, e.next = 7, le(/^app\.detail\./);

               case 7:
                return e.t1 = e.sent, e.t2 = b(b({}, c.client), {}, {
                  fclVersion: de,
                  fclLibrary: "https://github.com/onflow/fcl-js",
                  hostname: null !== (n = null === (r = window) || void 0 === r || null === (a = r.location) || void 0 === a ? void 0 : a.hostname) && void 0 !== n ? n : null
                }), p = {
                  services: e.t0,
                  app: e.t1,
                  client: e.t2
                }, e.prev = 10, e.next = 13, Qs({
                  service: o,
                  body: i,
                  config: p,
                  opts: l
                });

               case 13:
                if ("REDIRECT" !== (d = e.sent).status) {
                  e.next = 21;
                  break;
                }
                return he(o.type === d.data.type, "Cannot shift recursive service type in execService"), e.next = 18, ec({
                  service: d.data,
                  msg: i,
                  config: p,
                  opts: l
                });

               case 18:
                return e.abrupt("return", e.sent);

               case 21:
                return e.abrupt("return", d);

               case 22:
                e.next = 28;
                break;

               case 24:
                throw e.prev = 24, e.t3 = e.catch(10), me({
                  title: "Error on execService ".concat(null == o ? void 0 : o.type),
                  message: e.t3,
                  level: ye.error
                }), e.t3;

               case 28:
               case "end":
                return e.stop();
              }
            }), e, null, [ [ 10, 24 ] ]);
          }))), tc.apply(this, arguments);
        }
        function nc(e) {
          return null == e ? null : "1.0.0" === e.f_vsn ? e : b(b({}, $i), {}, {
            addr: Ve(e.addr || e.address),
            signature: e.signature || e.sig,
            keyId: e.keyId
          });
        }
        var rc, ac = function() {
          var e = s(h.mark((function e() {
            var t, n;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = (null === (t = window) || void 0 === t ? void 0 : t.fcl_extensions) || [], e.abrupt("return", [].concat(ve(n), ve(Zs.getServices())));

               case 2:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function() {
            return e.apply(this, arguments);
          };
        }();
        function oc(e) {
          return uc.apply(this, arguments);
        }
        function uc() {
          return (uc = s(h.mark((function e(t) {
            var n, r, a, o, u;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.next = 2, oe.get("discovery.authn.include", []);

               case 2:
                return r = e.sent, e.next = 5, oe.first([ "discovery.wallet.method", "discovery.wallet.method.default" ]);

               case 5:
                if (a = e.sent, o = null != t && t.method ? t.method : a, null === (n = null == t ? void 0 : t.endpoint) || void 0 === n) {
                  e.next = 11;
                  break;
                }
                e.t0 = n, e.next = 14;
                break;

               case 11:
                return e.next = 13, oe.first([ "discovery.wallet", "challenge.handshake" ]);

               case 13:
                e.t0 = e.sent;

               case 14:
                return he(u = e.t0, '\n    If no service is passed to "authenticate," then "discovery.wallet" must be defined in fcl config.\n    See: "https://docs.onflow.org/fcl/reference/api/#setting-configuration-values"\n    '), 
                e.abrupt("return", b(b({}, t), {}, {
                  type: "authn",
                  endpoint: u,
                  method: o,
                  discoveryAuthnInclude: r
                }));

               case 17:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function ic(e) {
          return sc.apply(this, arguments);
        }
        function sc() {
          return sc = s(h.mark((function e(t) {
            var n, r, a, o, u, i;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return a = t.types, e.next = 3, oe.get("discovery.authn.endpoint");

               case 3:
                return o = e.sent, he(Boolean(o), '"discovery.authn.endpoint" in config must be defined.'), e.next = 7, oe.get("discovery.authn.include", []);

               case 7:
                return u = e.sent, i = new URL(o), e.t0 = fetch, e.t1 = i, e.t2 = {
                  "Content-Type": "application/json"
                }, e.t3 = JSON, e.t4 = a, e.t5 = de, e.t6 = u, e.next = 18, ac();

               case 18:
                return e.t7 = e.sent, e.t8 = Zs.getStrategies(), e.t9 = null === (n = window) || void 0 === n || null === (r = n.navigator) || void 0 === r ? void 0 : r.userAgent, 
                e.t10 = {
                  type: e.t4,
                  fclVersion: e.t5,
                  include: e.t6,
                  clientServices: e.t7,
                  supportedStrategies: e.t8,
                  userAgent: e.t9
                }, e.t11 = e.t3.stringify.call(e.t3, e.t10), e.t12 = {
                  method: "POST",
                  headers: e.t2,
                  body: e.t11
                }, e.abrupt("return", (0, e.t0)(e.t1, e.t12).then((function(e) {
                  return e.json();
                })));

               case 25:
               case "end":
                return e.stop();
              }
            }), e);
          }))), sc.apply(this, arguments);
        }
        var cc, fc, lc, pc = "authn", dc = "SNAPSHOT", hc = "UPDATED", vc = "UPDATE_RESULTS", yc = function() {
          var e = s(h.mark((function e() {
            var t;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.prev = 0, e.next = 3, ic({
                  types: [ pc ]
                });

               case 3:
                t = e.sent, P(pc, vc, {
                  results: t
                }), e.next = 10;
                break;

               case 7:
                e.prev = 7, e.t0 = e.catch(0), me({
                  title: "".concat(e.t0.name, " Error fetching Discovery API services."),
                  message: e.t0.message,
                  level: ye.error
                });

               case 10:
               case "end":
                return e.stop();
              }
            }), e, null, [ [ 0, 7 ] ]);
          })));
          return function() {
            return e.apply(this, arguments);
          };
        }(), gc = (g(rc = {}, E, (fc = s(h.mark((function e(t) {
          return h.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
             case 0:
              t = '"fcl.discovery" is only available in the browser.', "undefined" == typeof window && console.warn("\n      %cFCL Warning\n      ============================\n      ".concat(t, "\n      For more info, please see the docs: https://docs.onflow.org/fcl/\n      ============================\n      "), "font-weight:bold;font-family:monospace;"), 
              "complete" === document.readyState ? yc() : window.onload = s(h.mark((function e() {
                return h.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                   case 0:
                    yc();

                   case 1:
                   case "end":
                    return e.stop();
                  }
                }), e);
              })));

             case 2:
             case "end":
              return e.stop();
            }
            var t;
          }), e);
        }))), function(e) {
          return fc.apply(this, arguments);
        })), g(rc, vc, (function(e, t, n) {
          e.merge(n), e.broadcast(hc, b({}, e.all()));
        })), g(rc, I, (function(e, t) {
          e.subscribe(t.from), e.send(t.from, hc, b({}, e.all()));
        })), g(rc, S, (function(e, t) {
          return e.unsubscribe(t.from);
        })), g(rc, dc, (cc = s(h.mark((function e(t, n) {
          return h.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
             case 0:
              return e.abrupt("return", n.reply(b({}, t.all())));

             case 1:
             case "end":
              return e.stop();
            }
          }), e);
        }))), function(e, t) {
          return cc.apply(this, arguments);
        })), rc), mc = function() {
          return L(gc, pc);
        }, bc = {
          authn: {
            subscribe: function(e) {
              return U(pc, mc, e);
            },
            snapshot: function() {
              return F(pc, mc);
            },
            update: function() {
              return yc();
            }
          }
        };
        function wc() {
          return "undefined" != typeof navigator && /iPhone|iPod/.test(navigator.userAgent) || "undefined" != typeof navigator && /iPad/.test(navigator.userAgent);
        }
        function xc() {
          return "undefined" != typeof navigator && /android/i.test(navigator.userAgent) || wc();
        }
        var kc, Ec, Ic = function(e) {
          return "function" == typeof e;
        }, Sc = "CURRENT_USER", Ac = "CURRENT_USER/UPDATED", Rc = "SNAPSHOT", Tc = "SET_CURRENT_USER", _c = "DEL_CURRENT_USER", Cc = '{\n  "f_type": "User",\n  "f_vsn": "1.0.0",\n  "addr":null,\n  "cid":null,\n  "loggedIn":null,\n  "expiresAt":null,\n  "services":[]\n}', Oc = function() {
          var e = s(h.mark((function e(t) {
            var n, r;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = JSON.parse(Cc), e.next = 3, t.get(Sc);

               case 3:
                if (null == (r = e.sent) || n.f_vsn === r.f_vsn) {
                  e.next = 7;
                  break;
                }
                return t.removeItem(Sc), e.abrupt("return", n);

               case 7:
                return e.abrupt("return", r || n);

               case 8:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }(), Pc = (g(lc = {}, E, function() {
          var e = s(h.mark((function e(t) {
            var n, r;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return "undefined" == typeof window && console.warn('\n        %cFCL Warning\n        ============================\n        "currentUser" is only available in the browser.\n        For more info, please see the docs: https://docs.onflow.org/fcl/\n        ============================\n        ', "font-weight:bold;font-family:monospace;"), 
                t.merge(JSON.parse(Cc)), e.next = 4, oe.first([ "fcl.storage", "fcl.storage.default" ]);

               case 4:
                if (!(n = e.sent).can) {
                  e.next = 10;
                  break;
                }
                return e.next = 8, Oc(n);

               case 8:
                Bc(r = e.sent) && t.merge(r);

               case 10:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }()), g(lc, I, (function(e, t) {
          e.subscribe(t.from), e.send(t.from, Ac, b({}, e.all()));
        })), g(lc, S, (function(e, t) {
          e.unsubscribe(t.from);
        })), g(lc, Rc, (Ec = s(h.mark((function e(t, n) {
          return h.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
             case 0:
              n.reply(b({}, t.all()));

             case 1:
             case "end":
              return e.stop();
            }
          }), e);
        }))), function(e, t) {
          return Ec.apply(this, arguments);
        })), g(lc, Tc, function() {
          var e = s(h.mark((function e(t, n, r) {
            var a;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return t.merge(r), e.next = 3, oe.first([ "fcl.storage", "fcl.storage.default" ]);

               case 3:
                (a = e.sent).can && a.put(Sc, t.all()), t.broadcast(Ac, b({}, t.all()));

               case 6:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t, n, r) {
            return e.apply(this, arguments);
          };
        }()), g(lc, _c, (kc = s(h.mark((function e(t, n) {
          var r;
          return h.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
             case 0:
              return t.merge(JSON.parse(Cc)), e.next = 3, oe.first([ "fcl.storage", "fcl.storage.default" ]);

             case 3:
              (r = e.sent).can && r.put(Sc, t.all()), t.broadcast(Ac, b({}, t.all()));

             case 6:
             case "end":
              return e.stop();
            }
          }), e);
        }))), function(e, t) {
          return kc.apply(this, arguments);
        })), lc), Nc = function() {
          return L(Pc, Sc);
        };
        function Bc(e) {
          return null == e.expiresAt || 0 === e.expiresAt || e.expiresAt > Date.now();
        }
        function Lc() {
          return Uc.apply(this, arguments);
        }
        function Uc() {
          return (Uc = s(h.mark((function e() {
            var t, n;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.next = 2, oe.get("fcl.accountProof.resolver");

               case 2:
                if (t = e.sent, Ic(t)) {
                  e.next = 5;
                  break;
                }
                return e.abrupt("return");

               case 5:
                return e.next = 7, t();

               case 7:
                if (null != (n = e.sent)) {
                  e.next = 10;
                  break;
                }
                return e.abrupt("return");

               case 10:
                return he("string" == typeof n.appIdentifier, "appIdentifier must be a string"), he(/^[0-9a-f]+$/i.test(n.nonce), "Nonce must be a hex string"), 
                e.abrupt("return", n);

               case 13:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        var Fc = function() {
          var e = s(h.mark((function e(t) {
            var n;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = t.discoveryAuthnInclude, e.t0 = n, e.next = 4, ac();

               case 4:
                return e.t1 = e.sent, e.t2 = Zs.getStrategies(), e.t3 = {
                  discoveryAuthnInclude: e.t0,
                  clientServices: e.t1,
                  supportedStrategies: e.t2
                }, e.abrupt("return", {
                  client: e.t3
                });

               case 8:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }();
        function jc() {
          return Dc.apply(this, arguments);
        }
        function Dc() {
          return Dc = s(h.mark((function e() {
            var t, n, r, a, o, u, i, c = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (r = c.length > 0 && void 0 !== c[0] ? c[0] : {}, a = r.service, o = r.redir, u = void 0 !== o && o, !a || null != a && null !== (t = a.provider) && void 0 !== t && t.is_installed || null == a || null === (n = a.provider) || void 0 === n || !n.requires_install) {
                  e.next = 4;
                  break;
                }
                return window.location.href = null == a || null === (i = a.provider) || void 0 === i ? void 0 : i.install_link, e.abrupt("return");

               case 4:
                return e.abrupt("return", new Promise(function() {
                  var e = s(h.mark((function e(t, n) {
                    var r, o, i, s, c, f, l;
                    return h.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                       case 0:
                        return Nc(), r = {
                          redir: u
                        }, e.next = 4, Kc();

                       case 4:
                        return o = e.sent, e.next = 7, oc(a);

                       case 7:
                        return i = e.sent, s = cs(o.services, "authn-refresh"), e.prev = 9, e.next = 12, Lc();

                       case 12:
                        c = e.sent, e.next = 19;
                        break;

                       case 15:
                        return e.prev = 15, e.t0 = e.catch(9), console.error("Error During Authentication: Could not resolve account proof data.\n        ".concat(e.t0)), 
                        e.abrupt("return", n(e.t0));

                       case 19:
                        if (!o.loggedIn) {
                          e.next = 47;
                          break;
                        }
                        if (!s) {
                          e.next = 46;
                          break;
                        }
                        return e.prev = 21, e.next = 24, ec({
                          service: s,
                          msg: c,
                          opts: r
                        });

                       case 24:
                        return f = e.sent, e.t1 = P, e.t2 = Sc, e.t3 = Tc, e.next = 30, is(f);

                       case 30:
                        e.t4 = e.sent, (0, e.t1)(e.t2, e.t3, e.t4), e.next = 37;
                        break;

                       case 34:
                        e.prev = 34, e.t5 = e.catch(21), console.error("Error: Could not refresh authentication.", e.t5);

                       case 37:
                        return e.prev = 37, e.t6 = t, e.next = 41, Kc();

                       case 41:
                        return e.t7 = e.sent, e.abrupt("return", (0, e.t6)(e.t7));

                       case 44:
                        e.next = 47;
                        break;

                       case 46:
                        return e.abrupt("return", t(o));

                       case 47:
                        return e.prev = 47, e.t8 = ec, e.t9 = i, e.t10 = c, e.next = 53, Fc(i);

                       case 53:
                        return e.t11 = e.sent, e.t12 = r, e.t13 = {
                          service: e.t9,
                          msg: e.t10,
                          config: e.t11,
                          opts: e.t12
                        }, e.next = 58, (0, e.t8)(e.t13);

                       case 58:
                        return l = e.sent, e.t14 = P, e.t15 = Sc, e.t16 = Tc, e.next = 64, is(l);

                       case 64:
                        e.t17 = e.sent, (0, e.t14)(e.t15, e.t16, e.t17), e.next = 71;
                        break;

                       case 68:
                        e.prev = 68, e.t18 = e.catch(47), console.error("Error while authenticating", e.t18);

                       case 71:
                        return e.prev = 71, e.t19 = t, e.next = 75, Kc();

                       case 75:
                        return e.t20 = e.sent, (0, e.t19)(e.t20), e.finish(71);

                       case 78:
                       case "end":
                        return e.stop();
                      }
                    }), e, null, [ [ 9, 15 ], [ 21, 34, 37, 44 ], [ 47, 68, 71, 78 ] ]);
                  })));
                  return function(t, n) {
                    return e.apply(this, arguments);
                  };
                }()));

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          }))), Dc.apply(this, arguments);
        }
        function Gc() {
          Nc(), P(Sc, _c);
        }
        function Mc(e) {
          var t = function(e) {
            return {
              f_type: "PreAuthzResponse",
              f_vsn: "1.0.0",
              proposer: (e || {}).proposer,
              payer: (e || {}).payer || [],
              authorization: (e || {}).authorization || []
            };
          }(e), n = [];
          null != t.proposer && n.push([ "PROPOSER", t.proposer ]);
          var r, a = w(t.payer || []);
          try {
            for (a.s(); !(r = a.n()).done; ) {
              var o = r.value;
              n.push([ "PAYER", o ]);
            }
          } catch (e) {
            a.e(e);
          } finally {
            a.f();
          }
          var i, s = w(t.authorization || []);
          try {
            for (s.s(); !(i = s.n()).done; ) {
              var c = i.value;
              n.push([ "AUTHORIZER", c ]);
            }
          } catch (e) {
            s.e(e);
          } finally {
            s.f();
          }
          var f = n.map((function(e) {
            var t = u(e, 2), n = t[0], r = t[1];
            return {
              tempId: [ r.identity.address, r.identity.keyId ].join("|"),
              addr: r.identity.address,
              keyId: r.identity.keyId,
              signingFunction: function(e) {
                return ec({
                  service: r,
                  msg: e
                });
              },
              role: {
                proposer: "PROPOSER" === n,
                payer: "PAYER" === n,
                authorizer: "AUTHORIZER" === n
              }
            };
          }));
          return f;
        }
        function zc(e) {
          return Yc.apply(this, arguments);
        }
        function Yc() {
          return Yc = s(h.mark((function e(t) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return Nc(), e.abrupt("return", b(b({}, t), {}, {
                  tempId: "CURRENT_USER",
                  resolve: function(e, t) {
                    return s(h.mark((function n() {
                      var r, a, o, u;
                      return h.wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                         case 0:
                          return n.next = 2, jc({
                            redir: !0
                          });

                         case 2:
                          if (r = n.sent, a = cs(r.services, "authz"), !(o = cs(r.services, "pre-authz"))) {
                            n.next = 11;
                            break;
                          }
                          return n.t0 = Mc, n.next = 9, ec({
                            service: o,
                            msg: t
                          });

                         case 9:
                          return n.t1 = n.sent, n.abrupt("return", (0, n.t0)(n.t1));

                         case 11:
                          if (!a) {
                            n.next = 14;
                            break;
                          }
                          return xc() && "WC/RPC" === a.method && (u = window.open("", "_blank")), n.abrupt("return", b(b({}, e), {}, {
                            tempId: "CURRENT_USER",
                            resolve: null,
                            addr: Ve(a.identity.address),
                            keyId: a.identity.keyId,
                            sequenceNum: null,
                            signature: null,
                            signingFunction: function(e) {
                              return s(h.mark((function t() {
                                return h.wrap((function(t) {
                                  for (;;) switch (t.prev = t.next) {
                                   case 0:
                                    return t.t0 = nc, t.next = 3, ec({
                                      service: a,
                                      msg: e,
                                      opts: {
                                        includeOlderJsonRpcCall: !0,
                                        windowRef: u
                                      }
                                    });

                                   case 3:
                                    return t.t1 = t.sent, t.abrupt("return", (0, t.t0)(t.t1));

                                   case 5:
                                   case "end":
                                    return t.stop();
                                  }
                                }), t);
                              })))();
                            }
                          }));

                         case 14:
                          throw new Error("No Authz or PreAuthz Service configured for CURRENT_USER");

                         case 15:
                         case "end":
                          return n.stop();
                        }
                      }), n);
                    })))();
                  }
                }));

               case 2:
               case "end":
                return e.stop();
              }
            }), e);
          }))), Yc.apply(this, arguments);
        }
        function qc(e) {
          Nc();
          var t = "@EXIT", n = L(function() {
            var n = s(h.mark((function n(r) {
              var a;
              return h.wrap((function(n) {
                for (;;) switch (n.prev = n.next) {
                 case 0:
                  r.send(Sc, I);

                 case 1:
                  return n.next = 4, r.receive();

                 case 4:
                  if ((a = n.sent).tag !== t) {
                    n.next = 8;
                    break;
                  }
                  return r.send(Sc, S), n.abrupt("return");

                 case 8:
                  e(a.data), n.next = 1;
                  break;

                 case 11:
                 case "end":
                  return n.stop();
                }
              }), n);
            })));
            return function(e) {
              return n.apply(this, arguments);
            };
          }());
          return function() {
            return P(n, t);
          };
        }
        function Kc() {
          return Nc(), P(Sc, Rc, null, {
            expectReply: !0,
            timeout: 0
          });
        }
        function Hc() {
          return Wc.apply(this, arguments);
        }
        function Wc() {
          return (Wc = s(h.mark((function e() {
            var t, n;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.next = 2, jc();

               case 2:
                return t = e.sent, n = t.addr, e.abrupt("return", Co(Je(n), bi));

               case 5:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        var Vc = function(e) {
          return he(/^[0-9a-f]+$/i.test(e), "Message must be a hex string"), {
            message: e
          };
        };
        function Jc(e) {
          return Xc.apply(this, arguments);
        }
        function Xc() {
          return Xc = s(h.mark((function e(t) {
            var n, r, a;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return Nc(), e.next = 3, jc({
                  redir: !0
                });

               case 3:
                return n = e.sent, he(r = cs(n.services, "user-signature"), "Current user must have authorized a signing service."), e.prev = 6, 
                e.next = 9, ec({
                  service: r,
                  msg: Vc(t)
                });

               case 9:
                if (a = e.sent, !Array.isArray(a)) {
                  e.next = 14;
                  break;
                }
                return e.abrupt("return", a.map((function(e) {
                  return nc(e);
                })));

               case 14:
                return e.abrupt("return", [ nc(a) ]);

               case 15:
                e.next = 20;
                break;

               case 17:
                return e.prev = 17, e.t0 = e.catch(6), e.abrupt("return", e.t0);

               case 20:
               case "end":
                return e.stop();
              }
            }), e, null, [ [ 6, 17 ] ]);
          }))), Xc.apply(this, arguments);
        }
        var Zc = function() {
          return {
            authenticate: jc,
            unauthenticate: Gc,
            authorization: zc,
            signUserMessage: Jc,
            subscribe: qc,
            snapshot: Kc,
            resolveArgument: Hc
          };
        };
        function $c() {
          return $c = s(h.mark((function e() {
            var t, n, r, a = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, e.prev = 1, e.next = 4, Di(t);

               case 4:
                return e.next = 6, Li(t);

               case 6:
                return t = e.sent, e.next = 9, oe().get("fcl.authz", Zc().authorization);

               case 9:
                return r = e.sent, n = oe().overload(t.dependencies || {}, s(h.mark((function e() {
                  return h.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                     case 0:
                      return e.abrupt("return", go([ jo(t.cadence), _o(Si(t.args || [])), t.limit && $o(t.limit) && To(t.limit), Oo(t.proposer || t.authz || r), No(t.payer || t.authz || r), So(t.authorizations || [ t.authz || r ]) ]).then(mo));

                     case 1:
                     case "end":
                      return e.stop();
                    }
                  }), e);
                })))), e.abrupt("return", n);

               case 14:
                throw e.prev = 14, e.t0 = e.catch(1), e.t0;

               case 17:
               case "end":
                return e.stop();
              }
            }), e, null, [ [ 1, 14 ] ]);
          }))), $c.apply(this, arguments);
        }
        Zc.authenticate = jc, Zc.unauthenticate = Gc, Zc.authorization = zc, Zc.signUserMessage = Jc, Zc.subscribe = qc, Zc.snapshot = Kc, 
        Zc.resolveArgument = Hc;
        var Qc = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}, n = function(e) {
            var t;
            return e.deprecated && console.warn("DEPRECATION NOTICE", e.deprecated.message), null == e || null === (t = e.body) || void 0 === t || delete t.interaction, 
            e;
          }, r = function(r) {
            var a = r.data;
            "object" === c(a) && null != c(a) && a.type === e && t(n(a));
          };
          return window.addEventListener("message", r), function() {
            return window.removeEventListener("message", r);
          };
        }, ef = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (window.location !== window.parent.location) window.parent.postMessage(b(b({}, t), {}, {
            type: e
          }), "*"); else {
            if (!window.opener) throw new Error("Unable to communicate with parent FCL instance");
            window.opener.postMessage(b(b({}, t), {}, {
              type: e
            }), "*");
          }
        };
        var tf = function(e, t) {
          return _e.Buffer.from(e.padEnd(2 * t, "0"), "hex");
        }, nf = function(e) {
          return function(e, t) {
            return _e.Buffer.from(e.padStart(2 * t, "0"), "hex");
          }(e, 8);
        }, rf = function(e) {
          return _e.Buffer.from(e, "hex");
        }, af = function(e) {
          var t = e.address, n = e.nonce, r = e.appIdentifier, a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          he(t, "Encode Message For Provable Authn Error: address must be defined"), he(n, "Encode Message For Provable Authn Error: nonce must be defined"), 
          he(r, "Encode Message For Provable Authn Error: appIdentifier must be defined"), he(n.length >= 64, "Encode Message For Provable Authn Error: nonce must be minimum of 32 bytes");
          var o = tf(_e.Buffer.from("FCL-ACCOUNT-PROOF-V0.0").toString("hex"), 32);
          return a ? _e.Buffer.concat([ o, Ge([ r, nf(Ve(t)), rf(n) ]) ]).toString("hex") : Ge([ r, nf(Ve(t)), rf(n) ]).toString("hex");
        };
        var of = Object.freeze({
          __proto__: null,
          sendMsgToFCL: ef,
          ready: function(e) {
            Qc("FCL:VIEW:READY:RESPONSE", e), ef("FCL:VIEW:READY");
          },
          close: function() {
            ef("FCL:VIEW:CLOSE");
          },
          approve: function(e) {
            ef("FCL:VIEW:RESPONSE", {
              f_type: "PollingResponse",
              f_vsn: "1.0.0",
              status: "APPROVED",
              reason: null,
              data: e
            });
          },
          decline: function(e) {
            ef("FCL:VIEW:RESPONSE", {
              f_type: "PollingResponse",
              f_vsn: "1.0.0",
              status: "DECLINED",
              reason: e,
              data: null
            });
          },
          redirect: function(e) {
            ef("FCL:VIEW:RESPONSE", {
              f_type: "PollingResponse",
              f_vsn: "1.0.0",
              status: "REDIRECT",
              reason: null,
              data: e
            });
          },
          onMessageFromFCL: Qc,
          encodeMessageFromSignable: function(e, t) {
            var n, r, a = (n = e.voucher, (r = new Set(n.authorizers)).add(n.proposalKey.address), r.delete(n.payer), Array.from(r).map(Je)), o = function(e) {
              var t = new Set([ e.payer ]);
              return Array.from(t).map(Je);
            }(e.voucher), u = a.includes(Je(t)), i = o.includes(Je(t));
            if (!u && !i) throw new wo(t);
            var s = {
              cadence: e.voucher.cadence,
              refBlock: e.voucher.refBlock,
              computeLimit: e.voucher.computeLimit,
              arguments: e.voucher.arguments,
              proposalKey: b(b({}, e.voucher.proposalKey), {}, {
                address: Ve(e.voucher.proposalKey.address)
              }),
              payer: Ve(e.voucher.payer),
              authorizers: e.voucher.authorizers.map(Ve),
              payloadSigs: e.voucher.payloadSigs.map((function(e) {
                return b(b({}, e), {}, {
                  address: Ve(e.address)
                });
              }))
            };
            return u ? da(s) : ha(s);
          },
          CompositeSignature: function(e, t, n) {
            this.f_type = $i.f_type, this.f_vsn = $i.f_vsn, this.addr = Je(e), this.keyId = Number(t), this.signature = n;
          },
          encodeAccountProof: af,
          injectExtService: function(e) {
            "authn" === e.type && null != e.endpoint ? (Array.isArray(window.fcl_extensions) || (window.fcl_extensions = []), window.fcl_extensions.push(e)) : console.warn("Authn service is required");
          }
        }), uf = "ACCOUNT_PROOF", sf = "USER_SIGNATURE", cf = function(e) {
          if (e.appIdentifier) {
            var t = e.appIdentifier, n = e.address, r = e.nonce, a = e.signatures;
            return he(Xo(t), "verifyAccountProof({ appIdentifier }) -- appIdentifier must be a string"), he(Xo(n) && 16 === Ve(n).length, "verifyAccountProof({ address }) -- address must be a valid address"), 
            he(/^[0-9a-f]+$/i.test(r), "nonce must be a hex string"), he(Array.isArray(a) && a.every((function(e, t, n) {
              return "CompositeSignature" === e.f_type;
            })), "Must include an Array of CompositeSignatures to verify"), he(a.map((function(e) {
              return e.addr;
            })).every((function(e, t, n) {
              return e === n[0];
            })), "User signatures to be verified must be from a single account address"), !0;
          }
          var o = e.message, u = e.address, i = e.compSigs;
          return he(/^[0-9a-f]+$/i.test(o), "Signed message must be a hex string"), he(Xo(u) && 16 === Ve(u).length, "verifyUserSignatures({ address }) -- address must be a valid address"), 
          he(Array.isArray(i) && i.every((function(e, t, n) {
            return "CompositeSignature" === e.f_type;
          })), "Must include an Array of CompositeSignatures to verify"), he(i.map((function(e) {
            return e.addr;
          })).every((function(e, t, n) {
            return e === n[0];
          })), "User signatures to be verified must be from a single account address"), !0;
        }, ff = function() {
          var e = s(h.mark((function e(t, n) {
            var r, a, o;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return r = "ACCOUNT_PROOF" === t ? "verifyAccountProofSignatures" : "verifyUserSignatures", e.next = 3, oe.get("flow.network");

               case 3:
                if (a = e.sent) {
                  e.next = 9;
                  break;
                }
                return e.next = 7, oe.get("env");

               case 7:
                (a = e.sent) && me.deprecate({
                  pkg: "FCL",
                  subject: 'Using the "env" configuration key for specifying the flow network',
                  message: 'Please use "flow.network" instead.',
                  transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/fcl/TRANSITIONS.md#0001-deprecate-env-config-key"
                });

               case 9:
                return he(n.fclCryptoContract || "testnet" === a || "mainnet" === a, "${verifyFunction}({ fclCryptoContract }) -- config.flow.network must be specified (testnet || mainnet) or contract address provided via opts.fclCryptoContract"), 
                o = n.fclCryptoContract ? n.fclCryptoContract : "testnet" === a ? "0x74daa6f9c7ef24b1" : "0xb4b82a1c9d21d284", e.abrupt("return", "\n      import FCLCrypto from ".concat(o, "\n\n      pub fun main(\n          address: Address, \n          message: String, \n          keyIndices: [Int], \n          signatures: [String]\n      ): Bool {\n        return FCLCrypto.").concat(r, "(address: address, message: message, keyIndices: keyIndices, signatures: signatures)\n      }\n    "));

               case 12:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t, n) {
            return e.apply(this, arguments);
          };
        }();
        function lf() {
          return lf = s(h.mark((function e(t, n) {
            var r, a, o, u, i, s, c, f, l, p, d = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                r = n.address, a = n.nonce, o = n.signatures, u = d.length > 2 && void 0 !== d[2] ? d[2] : {}, cf({
                  appIdentifier: t,
                  address: r,
                  nonce: a,
                  signatures: o
                }), i = af({
                  address: r,
                  nonce: a,
                  appIdentifier: t
                }, !1), s = [], c = [], f = w(o);
                try {
                  for (f.s(); !(l = f.n()).done; ) p = l.value, s.push(p.signature), c.push(p.keyId.toString());
                } catch (e) {
                  f.e(e);
                } finally {
                  f.f();
                }
                return e.t0 = Yi, e.next = 11, ff(uf, u);

               case 11:
                return e.t1 = e.sent, e.t2 = function(e, t) {
                  return [ e(Je(r), t.Address), e(i, t.String), e(c, t.Array(t.Int)), e(s, t.Array(t.String)) ];
                }, e.t3 = {
                  cadence: e.t1,
                  args: e.t2
                }, e.abrupt("return", (0, e.t0)(e.t3));

               case 15:
               case "end":
                return e.stop();
              }
            }), e);
          }))), lf.apply(this, arguments);
        }
        function pf(e, t) {
          return df.apply(this, arguments);
        }
        function df() {
          return df = s(h.mark((function e(t, n) {
            var r, a, o, u, i, s, c, f = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                r = f.length > 2 && void 0 !== f[2] ? f[2] : {}, a = Je(n[0].addr), cf({
                  message: t,
                  address: a,
                  compSigs: n
                }), o = [], u = [], i = w(n);
                try {
                  for (i.s(); !(s = i.n()).done; ) c = s.value, o.push(c.signature), u.push(c.keyId.toString());
                } catch (e) {
                  i.e(e);
                } finally {
                  i.f();
                }
                return e.t0 = Yi, e.next = 10, ff(sf, r);

               case 10:
                return e.t1 = e.sent, e.t2 = function(e, n) {
                  return [ e(a, n.Address), e(t, n.String), e(u, n.Array(n.Int)), e(o, n.Array(n.String)) ];
                }, e.t3 = {
                  cadence: e.t1,
                  args: e.t2
                }, e.abrupt("return", (0, e.t0)(e.t3));

               case 14:
               case "end":
                return e.stop();
              }
            }), e);
          }))), df.apply(this, arguments);
        }
        var hf, vf, yf = Object.freeze({
          __proto__: null,
          verifyAccountProof: function(e, t) {
            return lf.apply(this, arguments);
          },
          verifyUserSignatures: pf
        }), gf = me.deprecate({
          pkg: "FCL",
          subject: "fcl.verifyUserSignatures()",
          message: "Please use fcl.AppUtils.verifyUserSignatures()",
          callback: function(e, t) {
            return pf(e, t);
          }
        }), mf = function() {
          var e = s(h.mark((function e() {
            var t, n, r, a = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return t = a.length > 0 && void 0 !== a[0] ? a[0] : [], n = a.length > 1 && void 0 !== a[1] ? a[1] : {}, e.next = 4, oe.first([ "sdk.resolve" ], n.resolve || po);

               case 4:
                if (r = e.sent, !Array.isArray(t)) {
                  e.next = 9;
                  break;
                }
                return e.next = 8, Or(Mn(), t);

               case 8:
                t = e.sent;

               case 9:
                return e.t0 = JSON, e.t1 = Ja, e.next = 13, r(t);

               case 13:
                return e.t2 = e.sent, e.t3 = (0, e.t1)(e.t2), e.abrupt("return", e.t0.stringify.call(e.t0, e.t3, null, 2));

               case 16:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function() {
            return e.apply(this, arguments);
          };
        }(), bf = "POLL", wf = function() {
          var e = s(h.mark((function e(t) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.abrupt("return", go([ Ro(t) ]).then(mo));

               case 1:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }(), xf = function(e) {
          return e.status >= 4;
        }, kf = function(e) {
          return e.status >= 3;
        }, Ef = function(e) {
          return e.status >= 2;
        }, If = (g(hf = {}, E, function() {
          var e = s(h.mark((function e(t) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                t.sendSelf(bf);

               case 1:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }()), g(hf, I, (function(e, t) {
          e.subscribe(t.from), e.send(t.from, A, e.all());
        })), g(hf, S, (function(e, t) {
          e.unsubscribe(t.from);
        })), g(hf, R, function() {
          var e = s(h.mark((function e(t, n) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                n.reply(t.all());

               case 1:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t, n) {
            return e.apply(this, arguments);
          };
        }()), g(hf, bf, function() {
          var e = s(h.mark((function e(t) {
            var n;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.prev = 0, e.next = 3, wf(t.self());

               case 3:
                n = e.sent, e.next = 9;
                break;

               case 6:
                return e.prev = 6, e.t0 = e.catch(0), e.abrupt("return", t.fatalError(e.t0));

               case 9:
                xf(n) || setTimeout((function() {
                  return t.sendSelf(bf);
                }), 2500), r = t.all(), a = n, JSON.stringify(r) !== JSON.stringify(a) && t.broadcast(A, n), t.merge(n);

               case 12:
               case "end":
                return e.stop();
              }
              var r, a;
            }), e, null, [ [ 0, 6 ] ]);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }()), hf), Sf = function(e) {
          if ("object" === c(e) && (e = e.transactionId), null == e) throw new Error("transactionId required");
          return e;
        }, Af = function(e) {
          return L(If, Sf(e));
        };
        function Rf(e) {
          function t(t) {
            return U(Sf(e), Af, t);
          }
          function n(e) {
            return function() {
              var n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).suppress || !1;
              return new Promise((function(r, a) {
                var o = t((function(t, u) {
                  !u && !t.statusCode || n ? e(t) && (r(t), o()) : (a(u || t.errorMessage), o());
                }));
              }));
            };
          }
          return {
            snapshot: function() {
              return F(e, Af);
            },
            subscribe: t,
            onceFinalized: n(Ef),
            onceExecuted: n(kf),
            onceSealed: n(xf)
          };
        }
        Rf.isUnknown = function(e) {
          return e.status >= 0;
        }, Rf.isPending = function(e) {
          return e.status >= 1;
        }, Rf.isFinalized = Ef, Rf.isExecuted = kf, Rf.isSealed = xf, Rf.isExpired = function(e) {
          return 5 === e.status;
        };
        var Tf = "TICK", _f = "hwm", Cf = function() {
          var e = s(h.mark((function e(t) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.t0 = setTimeout, e.t1 = function() {
                  return t.sendSelf(Tf);
                }, e.next = 4, oe().get("fcl.eventPollRate", 1e4);

               case 4:
                return e.t2 = e.sent, e.abrupt("return", (0, e.t0)(e.t1, e.t2));

               case 6:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }(), Of = (g(vf = {}, Tf, function() {
          var e = s(h.mark((function e(t) {
            var n, r, a, o, u, i;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (t.hasSubs()) {
                  e.next = 2;
                  break;
                }
                return e.abrupt("return");

               case 2:
                if (null != (n = t.get(_f))) {
                  e.next = 18;
                  break;
                }
                return e.t0 = t, e.t1 = _f, e.next = 8, Io();

               case 8:
                return e.t2 = e.sent, e.t0.put.call(e.t0, e.t1, e.t2), e.t3 = t, e.t4 = Tf, e.next = 14, Cf(t);

               case 14:
                e.t5 = e.sent, e.t3.put.call(e.t3, e.t4, e.t5), e.next = 34;
                break;

               case 18:
                return e.next = 20, Io();

               case 20:
                if (r = e.sent, t.put(_f, r), !(n.height < r.height)) {
                  e.next = 28;
                  break;
                }
                return e.next = 25, go([ Ao(t.self(), n.height + 1, r.height) ]).then(mo);

               case 25:
                a = e.sent, o = w(a);
                try {
                  for (o.s(); !(u = o.n()).done; ) i = u.value, t.broadcast("UPDATED", i.data);
                } catch (e) {
                  o.e(e);
                } finally {
                  o.f();
                }

               case 28:
                return e.t6 = t, e.t7 = Tf, e.next = 32, Cf(t);

               case 32:
                e.t8 = e.sent, e.t6.put.call(e.t6, e.t7, e.t8);

               case 34:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }()), g(vf, I, function() {
          var e = s(h.mark((function e(t, n) {
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                if (t.hasSubs()) {
                  e.next = 7;
                  break;
                }
                return e.t0 = t, e.t1 = Tf, e.next = 5, Cf(t);

               case 5:
                e.t2 = e.sent, e.t0.put.call(e.t0, e.t1, e.t2);

               case 7:
                t.subscribe(n.from);

               case 8:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t, n) {
            return e.apply(this, arguments);
          };
        }()), g(vf, S, (function(e, t) {
          e.unsubscribe(t.from), e.hasSubs() || (clearTimeout(e.get(Tf)), e.delete(Tf), e.delete(_f));
        })), vf), Pf = function(e) {
          return L(Of, e);
        };
        function Nf(e) {
          return Bf.apply(this, arguments);
        }
        function Bf() {
          return (Bf = s(h.mark((function e(t) {
            var n;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return (n = new nn.SHA3(256)).update(_e.Buffer.from(t, "utf8")), e.abrupt("return", n.digest("hex"));

               case 3:
               case "end":
                return e.stop();
              }
            }), e);
          })))).apply(this, arguments);
        }
        function Lf(e) {
          return Uf.apply(this, arguments);
        }
        function Uf() {
          return Uf = s(h.mark((function e(t) {
            var n, r, a, o, u, i;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                yo(null != (n = t.template), "generateTemplateId({ template }) -- template must be defined"), yo("object" === c(n), "generateTemplateId({ template }) -- template must be an object"), 
                yo("InteractionTemplate" == typeof n.f_type, "generateTemplateId({ template }) -- template object must be an InteractionTemplate"), 
                n = Oi(n), e.t0 = n.f_version, e.next = "1.0.0" === e.t0 ? 8 : 40;
                break;

               case 8:
                return r = n.data, e.next = 11, Promise.all(Object.keys(r.messages).map(function() {
                  var e = s(h.mark((function e(t) {
                    var n, a;
                    return h.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                       case 0:
                        return e.next = 2, Nf(t);

                       case 2:
                        return e.t0 = e.sent, e.next = 5, Promise.all(Object.keys(null === (n = r.messages) || void 0 === n || null === (a = n[t]) || void 0 === a ? void 0 : a.i18n).map(function() {
                          var e = s(h.mark((function e(n) {
                            var a, o, u;
                            return h.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                               case 0:
                                return e.next = 2, Nf(n);

                               case 2:
                                return e.t0 = e.sent, e.next = 5, Nf(null === (a = r.messages) || void 0 === a || null === (o = a[t]) || void 0 === o || null === (u = o.i18n) || void 0 === u ? void 0 : u[n]);

                               case 5:
                                return e.t1 = e.sent, e.abrupt("return", [ e.t0, e.t1 ]);

                               case 7:
                               case "end":
                                return e.stop();
                              }
                            }), e);
                          })));
                          return function(t) {
                            return e.apply(this, arguments);
                          };
                        }()));

                       case 5:
                        return e.t1 = e.sent, e.abrupt("return", [ e.t0, e.t1 ]);

                       case 7:
                       case "end":
                        return e.stop();
                      }
                    }), e);
                  })));
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                }()));

               case 11:
                return a = e.sent, e.next = 14, Promise.all(Object.keys(null == r ? void 0 : r.dependencies).map(function() {
                  var e = s(h.mark((function e(t) {
                    var n;
                    return h.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                       case 0:
                        return e.next = 2, Nf(t);

                       case 2:
                        return e.t0 = e.sent, e.next = 5, Promise.all(Object.keys(null == r || null === (n = r.dependencies) || void 0 === n ? void 0 : n[t]).map(function() {
                          var e = s(h.mark((function e(n) {
                            var a, o;
                            return h.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                               case 0:
                                return e.next = 2, Nf(n);

                               case 2:
                                return e.t0 = e.sent, e.next = 5, Promise.all(Object.keys(null == r || null === (a = r.dependencies) || void 0 === a || null === (o = a[t]) || void 0 === o ? void 0 : o[n]).map(function() {
                                  var e = s(h.mark((function e(a) {
                                    var o, u, i, s, c, f, l, p, d, v, y, g, m, b, w;
                                    return h.wrap((function(e) {
                                      for (;;) switch (e.prev = e.next) {
                                       case 0:
                                        return e.next = 2, Nf(a);

                                       case 2:
                                        return e.t0 = e.sent, e.next = 5, Nf(null == r || null === (o = r.dependencies) || void 0 === o || null === (u = o[t]) || void 0 === u || null === (i = u[n]) || void 0 === i ? void 0 : i[a].address);

                                       case 5:
                                        return e.t1 = e.sent, e.next = 8, Nf(null == r || null === (s = r.dependencies) || void 0 === s || null === (c = s[t]) || void 0 === c || null === (f = c[n]) || void 0 === f ? void 0 : f[a].contract);

                                       case 8:
                                        return e.t2 = e.sent, e.next = 11, Nf(null == r || null === (l = r.dependencies) || void 0 === l || null === (p = l[t]) || void 0 === p || null === (d = p[n]) || void 0 === d ? void 0 : d[a].fq_address);

                                       case 11:
                                        return e.t3 = e.sent, e.next = 14, Nf(null == r || null === (v = r.dependencies) || void 0 === v || null === (y = v[t]) || void 0 === y || null === (g = y[n]) || void 0 === g ? void 0 : g[a].pin);

                                       case 14:
                                        return e.t4 = e.sent, e.next = 17, Nf(String(null == r || null === (m = r.dependencies) || void 0 === m || null === (b = m[t]) || void 0 === b || null === (w = b[n]) || void 0 === w ? void 0 : w[a].pin_block_height));

                                       case 17:
                                        return e.t5 = e.sent, e.t6 = [ e.t1, e.t2, e.t3, e.t4, e.t5 ], e.abrupt("return", [ e.t0, e.t6 ]);

                                       case 20:
                                       case "end":
                                        return e.stop();
                                      }
                                    }), e);
                                  })));
                                  return function(t) {
                                    return e.apply(this, arguments);
                                  };
                                }()));

                               case 5:
                                return e.t1 = e.sent, e.abrupt("return", [ e.t0, e.t1 ]);

                               case 7:
                               case "end":
                                return e.stop();
                              }
                            }), e);
                          })));
                          return function(t) {
                            return e.apply(this, arguments);
                          };
                        }()));

                       case 5:
                        return e.t1 = e.sent, e.abrupt("return", [ e.t0, e.t1 ]);

                       case 7:
                       case "end":
                        return e.stop();
                      }
                    }), e);
                  })));
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                }()));

               case 14:
                return o = e.sent, e.next = 17, Promise.all(Object.keys(null == r ? void 0 : r.arguments).map(function() {
                  var e = s(h.mark((function e(t) {
                    var n, a, o, u;
                    return h.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                       case 0:
                        return e.next = 2, Nf(t);

                       case 2:
                        return e.t0 = e.sent, e.next = 5, Nf(String(null == r || null === (n = r.arguments) || void 0 === n ? void 0 : n[t].index));

                       case 5:
                        return e.t1 = e.sent, e.next = 8, Nf(null == r || null === (a = r.arguments) || void 0 === a ? void 0 : a[t].type);

                       case 8:
                        return e.t2 = e.sent, e.next = 11, Nf((null == r || null === (o = r.arguments) || void 0 === o ? void 0 : o[t].balance) || "");

                       case 11:
                        return e.t3 = e.sent, e.next = 14, Promise.all(Object.keys(null == r || null === (u = r.arguments) || void 0 === u ? void 0 : u[t].messages).map(function() {
                          var e = s(h.mark((function e(n) {
                            var a, o;
                            return h.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                               case 0:
                                return e.next = 2, Nf(n);

                               case 2:
                                return e.t0 = e.sent, e.next = 5, Promise.all(Object.keys(null == r || null === (a = r.arguments) || void 0 === a || null === (o = a[t].messages) || void 0 === o ? void 0 : o[n].i18n).map(function() {
                                  var e = s(h.mark((function e(a) {
                                    var o, u, i;
                                    return h.wrap((function(e) {
                                      for (;;) switch (e.prev = e.next) {
                                       case 0:
                                        return e.next = 2, Nf(a);

                                       case 2:
                                        return e.t0 = e.sent, e.next = 5, Nf(null == r || null === (o = r.arguments) || void 0 === o || null === (u = o[t].messages) || void 0 === u || null === (i = u[n].i18n) || void 0 === i ? void 0 : i[a]);

                                       case 5:
                                        return e.t1 = e.sent, e.abrupt("return", [ e.t0, e.t1 ]);

                                       case 7:
                                       case "end":
                                        return e.stop();
                                      }
                                    }), e);
                                  })));
                                  return function(t) {
                                    return e.apply(this, arguments);
                                  };
                                }()));

                               case 5:
                                return e.t1 = e.sent, e.abrupt("return", [ e.t0, e.t1 ]);

                               case 7:
                               case "end":
                                return e.stop();
                              }
                            }), e);
                          })));
                          return function(t) {
                            return e.apply(this, arguments);
                          };
                        }()));

                       case 14:
                        return e.t4 = e.sent, e.t5 = [ e.t1, e.t2, e.t3, e.t4 ], e.abrupt("return", [ e.t0, e.t5 ]);

                       case 17:
                       case "end":
                        return e.stop();
                      }
                    }), e);
                  })));
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                }()));

               case 17:
                return u = e.sent, e.t1 = Ge, e.next = 21, Nf("InteractionTemplate");

               case 21:
                return e.t2 = e.sent, e.next = 24, Nf("1.0.0");

               case 24:
                return e.t3 = e.sent, e.next = 27, Nf(null == r ? void 0 : r.type);

               case 27:
                return e.t4 = e.sent, e.next = 30, Nf(null == r ? void 0 : r.interface);

               case 30:
                return e.t5 = e.sent, e.t6 = a, e.next = 34, Nf(null == r ? void 0 : r.cadence);

               case 34:
                return e.t7 = e.sent, e.t8 = o, e.t9 = u, e.t10 = [ e.t2, e.t3, e.t4, e.t5, e.t6, e.t7, e.t8, e.t9 ], i = (0, e.t1)(e.t10).toString("hex"), 
                e.abrupt("return", Nf(i));

               case 40:
                throw new Error("generateTemplateId Error: Unsupported template version");

               case 41:
               case "end":
                return e.stop();
              }
            }), e);
          }))), Uf.apply(this, arguments);
        }
        function Ff() {
          return Ff = s(h.mark((function e(t) {
            var n, r, a, o, u, i, s, c, f = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = t.template, r = t.auditors, a = f.length > 1 && void 0 !== f[1] ? f[1] : {}, yo(null != n, "getInteractionTemplateAudits({ template }) -- template must be defined"), 
                yo("InteractionTemplate" === (n = Oi(n)).f_type, "getInteractionTemplateAudits({ template }) -- template must be an InteractionTemplate"), 
                e.next = 7, Lf({
                  template: n
                });

               case 7:
                if ((o = e.sent) === n.id) {
                  e.next = 11;
                  break;
                }
                throw me({
                  title: "getInteractionTemplateAudits Debug Error",
                  message: "Could not recompute and match template ID\n                computed: ".concat(o, "\n                template: ").concat(n.id, "\n            "),
                  level: ye.debug
                }), new Error("getInteractionTemplateAudits Error: Could not recompute and match template ID");

               case 11:
                e.t0 = n.f_version, e.next = "1.0.0" === e.t0 ? 14 : 33;
                break;

               case 14:
                if (e.t1 = r, e.t1) {
                  e.next = 19;
                  break;
                }
                return e.next = 18, oe().get("flow.auditors");

               case 18:
                e.t1 = e.sent;

               case 19:
                if (yo(u = e.t1, "getInteractionTemplateAudits Error: Required configuration for 'fcl.auditors' is not set"), yo(Array.isArray(u), "getInteractionTemplateAudits Error: Required configuration for 'fcl.auditors' is not an array"), 
                i = a.flowInteractionAuditContract) {
                  e.next = 29;
                  break;
                }
                return e.next = 26, oe().get("flow.network");

               case 26:
                yo("mainnet" === (s = e.sent) || "testnet" === s, "getInteractionTemplateAudits Error: Unable to determine address for FlowInteractionTemplateAudit contract. Set configuration for 'fcl.network' to 'mainnet' or 'testnet'"), 
                i = "mainnet" === s ? "0xfd100e39d50a13e6" : "0xf78bfc12d0a786dc";

               case 29:
                return e.next = 31, Yi({
                  cadence: "\n        import FlowInteractionTemplateAudit from ".concat(i, "\n        pub fun main(templateId: String, auditors: [Address]): {Address:Bool} {\n          return FlowInteractionTemplateAudit.getHasTemplateBeenAuditedByAuditors(templateId: templateId, auditors: auditors)\n        }\n        "),
                  args: function(e, t) {
                    return [ e(o, t.String), e(u, t.Array(t.Address)) ];
                  }
                });

               case 31:
                return c = e.sent, e.abrupt("return", c);

               case 33:
                throw new Error("getInteractionTemplateAudits Error: Unsupported template version");

               case 34:
               case "end":
                return e.stop();
              }
            }), e);
          }))), Ff.apply(this, arguments);
        }
        function jf(e) {
          return {
            contractName: e.contractName,
            address: e.address,
            contract: ""
          };
        }
        function Df(e) {
          var t, n = [], r = w(e.match(/import ((\w|,| )+)* from 0x\w+/g) || []);
          try {
            for (r.s(); !(t = r.n()).done; ) {
              var a, o = t.value, u = /import ((\w+|, |)*) from (0x\w+)/g.exec(o), i = w(u[1].match(/((?:\w+)+),?/g) || []);
              try {
                for (i.s(); !(a = i.n()).done; ) {
                  var s = a.value;
                  n.push(jf({
                    address: u[3],
                    contractName: s.replace(/,/g, "")
                  }));
                }
              } catch (e) {
                i.e(e);
              } finally {
                i.f();
              }
            }
          } catch (e) {
            r.e(e);
          } finally {
            r.f();
          }
          return n;
        }
        function Gf(e) {
          return Mf.apply(this, arguments);
        }
        function Mf() {
          return Mf = s(h.mark((function e(t) {
            var n, r, a, o, u, i, s, c, f, l, p, d, v, y = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                n = t.address, r = t.contractName, a = t.blockHeight, o = y.length > 1 && void 0 !== y[1] ? y[1] : {}, yo(null != n, "generateDependencyPin({ address }) -- address must be defined"), 
                yo(null != r, "generateDependencyPin({ contractName }) -- contractName must be defined"), yo(null != a, "generateDependencyPin({ blockHeight }) -- blockHeight must be defined"), 
                yo("string" == typeof n, "generateDependencyPin({ address }) -- address must be a string"), yo("string" == typeof r, "generateDependencyPin({ contractName }) -- contractName must be a string"), 
                yo("number" == typeof a, "generateDependencyPin({ blockHeight }) -- blockHeight must be a number"), u = [ jf({
                  contractName: r,
                  address: n
                }) ], i = 0, s = u;

               case 10:
                if (!(i < s.length)) {
                  e.next = 33;
                  break;
                }
                return f = s[i], e.t0 = go, e.t1 = Gr, e.next = 16, oe().get(f.address, f.address);

               case 16:
                return e.t2 = e.sent, e.t3 = (0, e.t1)(e.t2), e.t4 = ko(a), e.t5 = [ e.t3, e.t4 ], e.t6 = o, e.next = 23, (0, e.t0)(e.t5, e.t6).then(mo);

               case 23:
                if (l = e.sent, f.contract = null === (c = l.contracts) || void 0 === c ? void 0 : c[f.contractName], f.contract) {
                  e.next = 28;
                  break;
                }
                throw console.error("Did not find expected contract", f, l), new Error("Did not find expected contract");

               case 28:
                p = Df(f.contract), u.push.apply(u, ve(p));

               case 30:
                i++, e.next = 10;
                break;

               case 33:
                return d = u.map((function(e) {
                  return Nf(e.contract);
                })), v = d.join(""), e.abrupt("return", Nf(v));

               case 36:
               case "end":
                return e.stop();
              }
            }), e);
          }))), Mf.apply(this, arguments);
        }
        function zf() {
          return zf = s(h.mark((function e(t) {
            var n, r, a, o, u, i = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = t.address, r = t.contractName, a = i.length > 1 && void 0 !== i[1] ? i[1] : {}, e.next = 4, Io({
                  sealed: !0
                }, a);

               case 4:
                return o = e.sent, u = null == o ? void 0 : o.height, e.abrupt("return", Gf({
                  address: n,
                  contractName: r,
                  blockHeight: u
                }, a));

               case 7:
               case "end":
                return e.stop();
              }
            }), e);
          }))), zf.apply(this, arguments);
        }
        function Yf(e) {
          if (null == e) return null;
          if ("1.0.0" === e.f_version) return e;
          throw new Error("normalizeInteractionTemplateInterface Error: Invalid InteractionTemplateInterface");
        }
        function qf() {
          return qf = s(h.mark((function e(t) {
            var n, r, a;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                yo(null != (n = t.templateInterface), "generateTemplateInterfaceId({ templateInterface }) -- templateInterface must be defined"), 
                yo("object" === c(n), "generateTemplateInterfaceId({ templateInterface }) -- templateInterface must be an object"), yo("InteractionTemplateInterface" == typeof n.f_type, "generateTemplateInterfaceId({ templateInterface }) -- templateInterface object must be an InteractionTemplate"), 
                n = Yf(n), e.t0 = n.f_version, e.next = "1.0.0" === e.t0 ? 8 : 25;
                break;

               case 8:
                return r = n.data, e.t1 = Ge, e.next = 12, Nf("InteractionTemplateInterface");

               case 12:
                return e.t2 = e.sent, e.next = 15, Nf("1.0.0");

               case 15:
                return e.t3 = e.sent, e.next = 18, Nf(r.flip);

               case 18:
                return e.t4 = e.sent, e.next = 21, Promise.all(Object.keys(r.arguments).map(function() {
                  var e = s(h.mark((function e(t) {
                    return h.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                       case 0:
                        return e.next = 2, Nf(t);

                       case 2:
                        return e.t0 = e.sent, e.next = 5, Nf(String(r.arguments[t].index));

                       case 5:
                        return e.t1 = e.sent, e.next = 8, Nf(r.arguments[t].type);

                       case 8:
                        return e.t2 = e.sent, e.abrupt("return", [ e.t0, e.t1, e.t2 ]);

                       case 10:
                       case "end":
                        return e.stop();
                      }
                    }), e);
                  })));
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                }()));

               case 21:
                return e.t5 = e.sent, e.t6 = [ e.t2, e.t3, e.t4, e.t5 ], a = (0, e.t1)(e.t6).toString("hex"), e.abrupt("return", Nf(a));

               case 25:
                throw new Error("generateTemplateInterfaceId Error: Unsupported templateInterface version");

               case 26:
               case "end":
                return e.stop();
              }
            }), e);
          }))), qf.apply(this, arguments);
        }
        function Kf(e) {
          return Hf.apply(this, arguments);
        }
        function Hf() {
          return Hf = s(h.mark((function e(t) {
            var n, r, a, o, u, i, s, f, l, p, d, v, y, g, m, b, w = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                n = t.template, r = t.blockHeight, a = t.network, o = w.length > 1 && void 0 !== w[1] ? w[1] : {}, yo(null != n, "generateDependencyPin({ template }) -- template must be defined"), 
                yo("object" === c(n), "generateDependencyPin({ template }) -- template must be an object"), yo("InteractionTemplate" === n.f_type, "generateDependencyPin({ template }) -- template must be an InteractionTemplate"), 
                n = Oi(n), yo(null != a, "generateDependencyPin({ network }) network must be defined"), yo(null != r, "generateDependencyPin({ blockHeight }) blockHeight must be defined"), 
                yo("number" == typeof r, "generateDependencyPin({ blockHeight }) blockHeight must be a number"), e.t0 = n.f_version, e.next = "1.0.0" === e.t0 ? 12 : 38;
                break;

               case 12:
                u = Object.keys(n.data.dependencies), i = 0, s = u;

               case 14:
                if (!(i < s.length)) {
                  e.next = 37;
                  break;
                }
                f = s[i], l = n.data.dependencies[f], p = Object.keys(l), d = 0, v = p;

               case 19:
                if (!(d < v.length)) {
                  e.next = 34;
                  break;
                }
                if (y = v[d], g = n.data.dependencies[f][y], void 0 !== (m = g[a])) {
                  e.next = 25;
                  break;
                }
                return e.abrupt("continue", 31);

               case 25:
                return e.next = 27, Gf({
                  address: m.address,
                  contractName: m.contract,
                  blockHeight: r
                }, o);

               case 27:
                if ((b = e.sent) === m.pin) {
                  e.next = 31;
                  break;
                }
                return me({
                  title: "verifyDependencyPinsSame Debug Error",
                  message: "Could not recompute and match dependency pin.\n                                address: ".concat(m.address, " | contract: ").concat(m.contract, "\n                                computed: ").concat(b, "\n                                template: ").concat(m.pin, "\n                            "),
                  level: ye.debug
                }), e.abrupt("return", !1);

               case 31:
                d++, e.next = 19;
                break;

               case 34:
                i++, e.next = 14;
                break;

               case 37:
                return e.abrupt("return", !0);

               case 38:
                throw new Error("verifyDependencyPinsSame Error: Unsupported template version");

               case 39:
               case "end":
                return e.stop();
              }
            }), e);
          }))), Hf.apply(this, arguments);
        }
        function Wf() {
          return Wf = s(h.mark((function e(t) {
            var n, r, a, o, u, i = arguments;
            return h.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return n = t.template, r = t.network, a = i.length > 1 && void 0 !== i[1] ? i[1] : {}, e.next = 4, Io({
                  sealed: !0
                });

               case 4:
                return o = e.sent, u = null == o ? void 0 : o.height, e.abrupt("return", Kf({
                  template: n,
                  network: r,
                  blockHeight: u
                }, a));

               case 7:
               case "end":
                return e.stop();
              }
            }), e);
          }))), Wf.apply(this, arguments);
        }
        var Vf = Object.freeze({
          __proto__: null,
          getInteractionTemplateAudits: function(e) {
            return Ff.apply(this, arguments);
          },
          generateDependencyPin: Gf,
          generateDependencyPinAtLatestSealedBlock: function(e) {
            return zf.apply(this, arguments);
          },
          generateTemplateId: Lf,
          generateTemplateInterfaceId: function(e) {
            return qf.apply(this, arguments);
          },
          verifyDependencyPinsSame: Kf,
          verifyDependencyPinsSameAtLatestSealedBlock: function(e) {
            return Wf.apply(this, arguments);
          },
          deriveCadenceByNetwork: Pi,
          getTemplateMessage: function(e) {
            var t, n, r, a = e.localization, o = void 0 === a ? "en-US" : a, u = e.messageKey, i = e.template;
            yo(u, "getMessage({ messageKey }) -- messageKey must be defined"), yo("stirng" == typeof u, "getMessage({ messageKey }) -- messageKey must be a string"), 
            yo(o, "getMessage({ localization }) -- localization must be defined"), yo("stirng" == typeof o, "getMessage({ localization }) -- localization must be a string"), 
            yo(null != i, "generateTemplateId({ template }) -- template must be defined"), yo("object" === c(i), "generateTemplateId({ template }) -- template must be an object"), 
            yo("InteractionTemplate" == typeof i.f_type, "generateTemplateId({ template }) -- template object must be an InteractionTemplate");
            var s = null == i || null === (t = i.data) || void 0 === t ? void 0 : t.messages;
            return null == s || null === (n = s[u]) || void 0 === n || null === (r = n.i18n) || void 0 === r ? void 0 : r[o];
          },
          getTemplateArgumentMessage: function(e) {
            var t, n, r, a, o, u = e.localization, i = void 0 === u ? "en-US" : u, s = e.argumentLabel, f = e.messageKey, l = e.template;
            yo(f, "getMessage({ messageKey }) -- messageKey must be defined"), yo("stirng" == typeof f, "getMessage({ messageKey }) -- messageKey must be a string"), 
            yo(s, "getMessage({ argumentLabel }) -- argumentLabel must be defined"), yo("stirng" == typeof f, "getMessage({ argumentLabel }) -- argumentLabel must be a string"), 
            yo(i, "getMessage({ localization }) -- localization must be defined"), yo("stirng" == typeof i, "getMessage({ localization }) -- localization must be a string"), 
            yo(null != l, "generateTemplateId({ template }) -- template must be defined"), yo("object" === c(l), "generateTemplateId({ template }) -- template must be an object"), 
            yo("InteractionTemplate" == typeof l.f_type, "generateTemplateId({ template }) -- template object must be an InteractionTemplate");
            var p = null == l || null === (t = l.data) || void 0 === t ? void 0 : t.arguments;
            return null == p || null === (n = p[s]) || void 0 === n || null === (r = n.messages) || void 0 === r || null === (a = r[f]) || void 0 === a || null === (o = a.i18n) || void 0 === o ? void 0 : o[i];
          }
        }), Jf = Zc().authorization, Xf = Ii;
        e.AppUtils = yf, e.InteractionTemplateUtils = Vf, e.TestUtils = Ho, e.VERSION = de, e.WalletUtils = of, e.account = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.height, r = t.id, a = arguments.length > 2 ? arguments[2] : void 0;
          return he(!(r && n), 'Method: account -- Cannot pass "id" and "height" simultaneously'), r ? go([ Gr(e), Eo(r) ], a).then(na) : n ? go([ Gr(e), ko(n) ], a).then(na) : go([ Gr(e) ], a).then(na);
        }, e.arg = Co, e.args = _o, e.atBlockHeight = ko, e.atBlockId = Eo, e.authenticate = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Zc().authenticate(e);
        }, e.authorization = function(e, t, n, r) {
          return {
            addr: e,
            signingFunction: t,
            keyId: n,
            sequenceNum: r
          };
        }, e.authorizations = So, e.authz = Jf, e.block = Io, e.build = Fr, e.cadence = yn, e.cdc = yn, e.config = oe, e.createSignableVoucher = Ja, 
        e.currentUser = Zc, e.decode = mo, e.discovery = bc, e.display = function(e) {
          return Je(e);
        }, e.events = function(e) {
          return {
            subscribe: function(t) {
              return U(e, Pf, t);
            }
          };
        }, e.getAccount = Gr, e.getBlock = Dr, e.getBlockHeader = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return Or([ pr, function(t) {
            return t.block.isSealed = e, Zn(t);
          } ]);
        }, e.getCollection = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return Or([ dr, function(t) {
            return t.collection.id = e, t;
          } ]);
        }, e.getEvents = function(e, t, n) {
          return void 0 === t && void 0 === n || me.deprecate({
            pkg: "FCL/SDK",
            subject: "Passing a start and end into getEvents",
            transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0005-deprecate-start-end-get-events-builder"
          }), Or([ cr, function(r) {
            return r.events.eventType = e, r.events.start = t, r.events.end = n, Zn(r);
          } ]);
        }, e.getEventsAtBlockHeightRange = Ao, e.getEventsAtBlockIds = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return Or([ cr, function(n) {
            return n.events.eventType = e, n.events.blockIds = t, Zn(n);
          } ]);
        }, e.getTransaction = function(e) {
          return Or([ ir, function(t) {
            return t.transaction.id = e, Zn(t);
          } ]);
        }, e.getTransactionStatus = Ro, e.invariant = yo, e.isBad = Rr, e.isOk = Ar, e.limit = To, e.logIn = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Zc().authenticate(e);
        }, e.mutate = function() {
          return $c.apply(this, arguments);
        }, e.param = function(e) {
          return me.deprecate({
            pkg: "FCL/SDK",
            message: "The param builder has been removed from the Flow JS-SDK/FCL.",
            transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0001-deprecate-params",
            level: ye.error
          });
        }, e.params = function(e) {
          return me.deprecate({
            pkg: "FCL/SDK",
            message: "The params builder has been removed from the Flow JS-SDK/FCL.",
            transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0001-deprecate-params",
            level: ye.error
          });
        }, e.payer = No, e.ping = function() {
          return fr;
        }, e.pipe = Or, e.pluginRegistry = $s, e.proposer = Oo, e.query = Yi, e.reauthenticate = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Zc().unauthenticate(), Zc().authenticate(e);
        }, e.ref = Lo, e.sansPrefix = Ve, e.script = Uo, e.send = go, e.serialize = mf, e.signUp = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Zc().authenticate(e);
        }, e.t = Xf, e.transaction = jo, e.tx = Rf, e.unauthenticate = function() {
          return Zc().unauthenticate();
        }, e.validator = xo, e.verifyUserSignatures = gf, e.voucherIntercept = function(e) {
          return Br("ix.voucher-intercept", e);
        }, e.voucherToTxId = function(e) {
          return function(e) {
            return Ia(Ea(_a(e)));
          }(e);
        }, e.why = Tr, e.withPrefix = Je, Object.defineProperty(e, "__esModule", {
          value: !0
        });
      }(t);
    }();
  },
  637: (e, t, n) => {
    "use strict";
    n.r(t), n.d(t, {
      getFlowProvider: () => a
    });
    var r = n(4052);
    r.config({
      'accessNode.api': 'https://rest-mainnet.onflow.org',
      'discovery.wallet': 'https://fcl-discovery.onflow.org/authn'
    });
    var a = function() {
      return r;
    };
  }
} ]);
//# sourceMappingURL=681.10332b95.js.map