/*! For license information please see 387.97c0d790.js.LICENSE.txt */
(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 387 ], {
  9387: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, {
      CUSTOM_RPCS_FOR_WC_V2: () => a,
      WC_V2_CHAINS: () => c,
      getWalletConnectV2ProviderInstance: () => h
    });
    var i = r(841);
    var n = r.n(i);
    var s = function(e, t, r, i) {
      return new (r || (r = Promise))((function(n, s) {
        function o(e) {
          try {
            c(i.next(e));
          } catch (t) {
            s(t);
          }
        }
        function a(e) {
          try {
            c(i.throw(e));
          } catch (t) {
            s(t);
          }
        }
        function c(e) {
          e.done ? n(e.value) : function(e) {
            return e instanceof r ? e : new r((function(t) {
              t(e);
            }));
          }(e.value).then(o, a);
        }
        c((i = i.apply(e, t || [])).next());
      }));
    };
    var o = function(e, t) {
      var r, i, n, s, o = {
        label: 0,
        sent: function() {
          if (1 & n[0]) throw n[1];
          return n[1];
        },
        trys: [],
        ops: []
      };
      return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this;
      }), s;
      function a(a) {
        return function(c) {
          return function(a) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;s && (s = 0, a[0] && (o = 0)), o; ) try {
              if (r = 1, i && (n = 2 & a[0] ? i.return : a[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, a[1])).done) return n;
              switch (i = 0, n && (a = [ 2 & a[0], n.value ]), a[0]) {
               case 0:
               case 1:
                n = a;
                break;

               case 4:
                return o.label++, {
                  value: a[1],
                  done: !1
                };

               case 5:
                o.label++, i = a[1], a = [ 0 ];
                continue;

               case 7:
                a = o.ops.pop(), o.trys.pop();
                continue;

               default:
                if (!(n = o.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                  o = 0;
                  continue;
                }
                if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                  o.label = a[1];
                  break;
                }
                if (6 === a[0] && o.label < n[1]) {
                  o.label = n[1], n = a;
                  break;
                }
                if (n && o.label < n[2]) {
                  o.label = n[2], o.ops.push(a);
                  break;
                }
                n[2] && o.ops.pop(), o.trys.pop();
                continue;
              }
              a = t.call(e, o);
            } catch (c) {
              a = [ 6, c ], i = 0;
            } finally {
              r = n = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([ a, c ]);
        };
      }
    };
    var a = {
      1: 'https://ethereum.publicnode.com',
      5: 'https://eth-goerli.g.alchemy.com/v2/yVhq9zPJorAWsw-F87fEabSUl7cCU6z4',
      137: 'https://polygon-rpc.com/',
      80001: 'https://polygon-mumbai.g.alchemy.com/v2/rVI6pOV4irVsrw20cJxc1fxK_1cSeiY0',
      56: 'https://bsc-dataseed.binance.org/',
      43114: 'https://api.avax.network/ext/bc/C/rpc',
      250: 'https://rpc.fantom.network/',
      25: 'https://evm-cronos.crypto.org',
      42161: 'https://arb1.arbitrum.io/rpc',
      10: 'https://mainnet.optimism.io'
    };
    var c = [ 'eip155:1', 'eip155:137', 'eip155:250', 'eip155:25', 'eip155:42161', 'eip155:10' ];
    var h = function() {
      return s(void 0, void 0, void 0, (function() {
        return o(this, (function(e) {
          switch (e.label) {
           case 0:
            return [ 4, n().init({
              projectId: '2ec7ead81da1226703ad789c0b2f7b30',
              logger: 'debug',
              relayUrl: 'wss://relay.walletconnect.com'
            }) ];

           case 1:
            return [ 2, e.sent() ];
          }
        }));
      }));
    };
  },
  841: function(e, t, r) {
    !function(e, i) {
      !function(e) {
        "use strict";
        var t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof r.g < "u" ? r.g : typeof self < "u" ? self : {};
        function i(e) {
          return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
        }
        function n(e) {
          var t = e.default;
          if ("function" == typeof t) {
            var r = function() {
              return t.apply(this, arguments);
            };
            r.prototype = t.prototype;
          } else r = {};
          return Object.defineProperty(r, "__esModule", {
            value: !0
          }), Object.keys(e).forEach((function(t) {
            var i = Object.getOwnPropertyDescriptor(e, t);
            Object.defineProperty(r, t, i.get ? i : {
              enumerable: !0,
              get: function() {
                return e[t];
              }
            });
          })), r;
        }
        function s(e) {
          try {
            return JSON.stringify(e);
          } catch {
            return '"[Circular]"';
          }
        }
        function o(e, t, r) {
          var i = r && r.stringify || s, n = 1;
          if ("object" == typeof e && null !== e) {
            var o = t.length + n;
            if (1 === o) return e;
            var a = new Array(o);
            a[0] = i(e);
            for (var c = 1; c < o; c++) a[c] = i(t[c]);
            return a.join(" ");
          }
          if ("string" != typeof e) return e;
          var h = t.length;
          if (0 === h) return e;
          for (var u = "", l = 1 - n, p = -1, f = e && e.length || 0, d = 0; d < f; ) {
            if (37 === e.charCodeAt(d) && d + 1 < f) {
              switch (p = p > -1 ? p : 0, e.charCodeAt(d + 1)) {
               case 100:
               case 102:
                if (l >= h || null == t[l]) break;
                p < d && (u += e.slice(p, d)), u += Number(t[l]), p = d + 2, d++;
                break;

               case 105:
                if (l >= h || null == t[l]) break;
                p < d && (u += e.slice(p, d)), u += Math.floor(Number(t[l])), p = d + 2, d++;
                break;

               case 79:
               case 111:
               case 106:
                if (l >= h || void 0 === t[l]) break;
                p < d && (u += e.slice(p, d));
                var y = typeof t[l];
                if ("string" === y) {
                  u += "'" + t[l] + "'", p = d + 2, d++;
                  break;
                }
                if ("function" === y) {
                  u += t[l].name || "<anonymous>", p = d + 2, d++;
                  break;
                }
                u += i(t[l]), p = d + 2, d++;
                break;

               case 115:
                if (l >= h) break;
                p < d && (u += e.slice(p, d)), u += String(t[l]), p = d + 2, d++;
                break;

               case 37:
                p < d && (u += e.slice(p, d)), u += "%", p = d + 2, d++, l--;
              }
              ++l;
            }
            ++d;
          }
          return -1 === p ? e : (p < f && (u += e.slice(p)), u);
        }
        const a = o;
        var c = p;
        const h = T().console || {}, u = {
          mapHttpRequest: E,
          mapHttpResponse: E,
          wrapRequestSerializer: S,
          wrapResponseSerializer: S,
          wrapErrorSerializer: S,
          req: E,
          res: E,
          err: w
        };
        function l(e, t) {
          return Array.isArray(e) ? e.filter((function(e) {
            return "!stdSerializers.err" !== e;
          })) : !0 === e && Object.keys(t);
        }
        function p(e) {
          (e = e || {}).browser = e.browser || {};
          const t = e.browser.transmit;
          if (t && "function" != typeof t.send) throw Error("pino: transmit option must have a send function");
          const r = e.browser.write || h;
          e.browser.write && (e.browser.asObject = !0);
          const i = e.serializers || {}, n = l(e.browser.serialize, i);
          let s = e.browser.serialize;
          Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (s = !1);
          const o = [ "error", "fatal", "warn", "info", "debug", "trace" ];
          "function" == typeof r && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r), !1 === e.enabled && (e.level = "silent");
          const a = e.level || "info", c = Object.create(r);
          c.log || (c.log = O), Object.defineProperty(c, "levelVal", {
            get: d
          }), Object.defineProperty(c, "level", {
            get: y,
            set: v
          });
          const u = {
            transmit: t,
            serialize: n,
            asObject: e.browser.asObject,
            levels: o,
            timestamp: _(e)
          };
          function d() {
            return "silent" === this.level ? 1 / 0 : this.levels.values[this.level];
          }
          function y() {
            return this._level;
          }
          function v(e) {
            if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
            this._level = e, f(u, c, "error", "log"), f(u, c, "fatal", "error"), f(u, c, "warn", "error"), f(u, c, "info", "log"), f(u, c, "debug", "log"), 
            f(u, c, "trace", "log");
          }
          function w(r, s) {
            if (!r) throw new Error("missing bindings for child Pino");
            s = s || {}, n && r.serializers && (s.serializers = r.serializers);
            const o = s.serializers;
            if (n && o) {
              var a = Object.assign({}, i, o), c = !0 === e.browser.serialize ? Object.keys(a) : n;
              delete r.serializers, g([ r ], c, a, this._stdErrSerialize);
            }
            function h(e) {
              this._childLevel = 1 + (0 | e._childLevel), this.error = b(e, r, "error"), this.fatal = b(e, r, "fatal"), this.warn = b(e, r, "warn"), 
              this.info = b(e, r, "info"), this.debug = b(e, r, "debug"), this.trace = b(e, r, "trace"), a && (this.serializers = a, this._serialize = c), 
              t && (this._logEvent = m([].concat(e._logEvent.bindings, r)));
            }
            return h.prototype = this, new h(this);
          }
          return c.levels = p.levels, c.level = a, c.setMaxListeners = c.getMaxListeners = c.emit = c.addListener = c.on = c.prependListener = c.once = c.prependOnceListener = c.removeListener = c.removeAllListeners = c.listeners = c.listenerCount = c.eventNames = c.write = c.flush = O, 
          c.serializers = i, c._serialize = n, c._stdErrSerialize = s, c.child = w, t && (c._logEvent = m()), c;
        }
        function f(e, t, r, i) {
          const n = Object.getPrototypeOf(t);
          t[r] = t.levelVal > t.levels.values[r] ? O : n[r] ? n[r] : h[r] || h[i] || O, d(e, t, r);
        }
        function d(e, t, r) {
          !e.transmit && t[r] === O || (t[r] = function(i) {
            return function() {
              const n = e.timestamp(), s = new Array(arguments.length), o = Object.getPrototypeOf && Object.getPrototypeOf(this) === h ? h : this;
              for (var a = 0; a < s.length; a++) s[a] = arguments[a];
              if (e.serialize && !e.asObject && g(s, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? i.call(o, y(this, r, s, n)) : i.apply(o, s), 
              e.transmit) {
                const i = e.transmit.level || t.level, o = p.levels.values[i], a = p.levels.values[r];
                if (a < o) return;
                v(this, {
                  ts: n,
                  methodLevel: r,
                  methodValue: a,
                  transmitLevel: i,
                  transmitValue: p.levels.values[e.transmit.level || t.level],
                  send: e.transmit.send,
                  val: t.levelVal
                }, s);
              }
            };
          }(t[r]));
        }
        function y(e, t, r, i) {
          e._serialize && g(r, e._serialize, e.serializers, e._stdErrSerialize);
          const n = r.slice();
          let s = n[0];
          const o = {};
          i && (o.time = i), o.level = p.levels.values[t];
          let c = 1 + (0 | e._childLevel);
          if (c < 1 && (c = 1), null !== s && "object" == typeof s) {
            for (;c-- && "object" == typeof n[0]; ) Object.assign(o, n.shift());
            s = n.length ? a(n.shift(), n) : void 0;
          } else "string" == typeof s && (s = a(n.shift(), n));
          return void 0 !== s && (o.msg = s), o;
        }
        function g(e, t, r, i) {
          for (const n in e) if (i && e[n] instanceof Error) e[n] = p.stdSerializers.err(e[n]); else if ("object" == typeof e[n] && !Array.isArray(e[n])) for (const i in e[n]) t && t.indexOf(i) > -1 && i in r && (e[n][i] = r[i](e[n][i]));
        }
        function b(e, t, r) {
          return function() {
            const i = new Array(1 + arguments.length);
            i[0] = t;
            for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
            return e[r].apply(this, i);
          };
        }
        function v(e, t, r) {
          const i = t.send, n = t.ts, s = t.methodLevel, o = t.methodValue, a = t.val, c = e._logEvent.bindings;
          g(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize), e._logEvent.ts = n, 
          e._logEvent.messages = r.filter((function(e) {
            return -1 === c.indexOf(e);
          })), e._logEvent.level.label = s, e._logEvent.level.value = o, i(s, e._logEvent, a), e._logEvent = m(c);
        }
        function m(e) {
          return {
            ts: 0,
            messages: [],
            bindings: e || [],
            level: {
              label: "",
              value: 0
            }
          };
        }
        function w(e) {
          const t = {
            type: e.constructor.name,
            msg: e.message,
            stack: e.stack
          };
          for (const r in e) void 0 === t[r] && (t[r] = e[r]);
          return t;
        }
        function _(e) {
          return "function" == typeof e.timestamp ? e.timestamp : !1 === e.timestamp ? I : P;
        }
        function E() {
          return {};
        }
        function S(e) {
          return e;
        }
        function O() {}
        function I() {
          return !1;
        }
        function P() {
          return Date.now();
        }
        function x() {
          return Math.round(Date.now() / 1e3);
        }
        function N() {
          return new Date(Date.now()).toISOString();
        }
        function T() {
          function e(e) {
            return typeof e < "u" && e;
          }
          try {
            return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
              get: function() {
                return delete Object.prototype.globalThis, this.globalThis = this;
              },
              configurable: !0
            }), globalThis;
          } catch {
            return e(self) || e(window) || e(this) || {};
          }
        }
        p.levels = {
          values: {
            fatal: 60,
            error: 50,
            warn: 40,
            info: 30,
            debug: 20,
            trace: 10
          },
          labels: {
            10: "trace",
            20: "debug",
            30: "info",
            40: "warn",
            50: "error",
            60: "fatal"
          }
        }, p.stdSerializers = u, p.stdTimeFunctions = Object.assign({}, {
          nullTime: I,
          epochTime: P,
          unixTime: x,
          isoTime: N
        });
        var A, R = {
          exports: {}
        }, j = "object" == typeof Reflect ? Reflect : null, L = j && "function" == typeof j.apply ? j.apply : function(e, t, r) {
          return Function.prototype.apply.call(e, t, r);
        };
        function C(e) {
          console && console.warn && console.warn(e);
        }
        A = j && "function" == typeof j.ownKeys ? j.ownKeys : Object.getOwnPropertySymbols ? function(e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        } : function(e) {
          return Object.getOwnPropertyNames(e);
        };
        var U = Number.isNaN || function(e) {
          return e != e;
        };
        function M() {
          M.init.call(this);
        }
        R.exports = M, R.exports.once = W, M.EventEmitter = M, M.prototype._events = void 0, M.prototype._eventsCount = 0, M.prototype._maxListeners = void 0;
        var D = 10;
        function k(e) {
          if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
        }
        function z(e) {
          return void 0 === e._maxListeners ? M.defaultMaxListeners : e._maxListeners;
        }
        function H(e, t, r, i) {
          var n, s, o;
          if (k(r), void 0 === (s = e._events) ? (s = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), 
          s = e._events), o = s[t]), void 0 === o) o = s[t] = r, ++e._eventsCount; else if ("function" == typeof o ? o = s[t] = i ? [ r, o ] : [ o, r ] : i ? o.unshift(r) : o.push(r), 
          (n = z(e)) > 0 && o.length > n && !o.warned) {
            o.warned = !0;
            var a = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = o.length, C(a);
          }
          return e;
        }
        function $() {
          if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
        }
        function q(e, t, r) {
          var i = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: t,
            listener: r
          }, n = $.bind(i);
          return n.listener = r, i.wrapFn = n, n;
        }
        function K(e, t, r) {
          var i = e._events;
          if (void 0 === i) return [];
          var n = i[t];
          return void 0 === n ? [] : "function" == typeof n ? r ? [ n.listener || n ] : [ n ] : r ? G(n) : B(n, n.length);
        }
        function V(e) {
          var t = this._events;
          if (void 0 !== t) {
            var r = t[e];
            if ("function" == typeof r) return 1;
            if (void 0 !== r) return r.length;
          }
          return 0;
        }
        function B(e, t) {
          for (var r = new Array(t), i = 0; i < t; ++i) r[i] = e[i];
          return r;
        }
        function F(e, t) {
          for (;t + 1 < e.length; t++) e[t] = e[t + 1];
          e.pop();
        }
        function G(e) {
          for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
          return t;
        }
        function W(e, t) {
          return new Promise((function(r, i) {
            function n(r) {
              e.removeListener(t, s), i(r);
            }
            function s() {
              "function" == typeof e.removeListener && e.removeListener("error", n), r([].slice.call(arguments));
            }
            J(e, t, s, {
              once: !0
            }), "error" !== t && Y(e, n, {
              once: !0
            });
          }));
        }
        function Y(e, t, r) {
          "function" == typeof e.on && J(e, "error", t, r);
        }
        function J(e, t, r, i) {
          if ("function" == typeof e.on) i.once ? e.once(t, r) : e.on(t, r); else {
            if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
            e.addEventListener(t, (function n(s) {
              i.once && e.removeEventListener(t, n), r(s);
            }));
          }
        }
        Object.defineProperty(M, "defaultMaxListeners", {
          enumerable: !0,
          get: function() {
            return D;
          },
          set: function(e) {
            if ("number" != typeof e || e < 0 || U(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            D = e;
          }
        }), M.init = function() {
          (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), 
          this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
        }, M.prototype.setMaxListeners = function(e) {
          if ("number" != typeof e || e < 0 || U(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
          return this._maxListeners = e, this;
        }, M.prototype.getMaxListeners = function() {
          return z(this);
        }, M.prototype.emit = function(e) {
          for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
          var i = "error" === e, n = this._events;
          if (void 0 !== n) i = i && void 0 === n.error; else if (!i) return !1;
          if (i) {
            var s;
            if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
            var o = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
            throw o.context = s, o;
          }
          var a = n[e];
          if (void 0 === a) return !1;
          if ("function" == typeof a) L(a, this, t); else {
            var c = a.length, h = B(a, c);
            for (r = 0; r < c; ++r) L(h[r], this, t);
          }
          return !0;
        }, M.prototype.addListener = function(e, t) {
          return H(this, e, t, !1);
        }, M.prototype.on = M.prototype.addListener, M.prototype.prependListener = function(e, t) {
          return H(this, e, t, !0);
        }, M.prototype.once = function(e, t) {
          return k(t), this.on(e, q(this, e, t)), this;
        }, M.prototype.prependOnceListener = function(e, t) {
          return k(t), this.prependListener(e, q(this, e, t)), this;
        }, M.prototype.removeListener = function(e, t) {
          var r, i, n, s, o;
          if (k(t), void 0 === (i = this._events)) return this;
          if (void 0 === (r = i[e])) return this;
          if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || t)); else if ("function" != typeof r) {
            for (n = -1, s = r.length - 1; s >= 0; s--) if (r[s] === t || r[s].listener === t) {
              o = r[s].listener, n = s;
              break;
            }
            if (n < 0) return this;
            0 === n ? r.shift() : F(r, n), 1 === r.length && (i[e] = r[0]), void 0 !== i.removeListener && this.emit("removeListener", e, o || t);
          }
          return this;
        }, M.prototype.off = M.prototype.removeListener, M.prototype.removeAllListeners = function(e) {
          var t, r, i;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), 
          this;
          if (0 === arguments.length) {
            var n, s = Object.keys(r);
            for (i = 0; i < s.length; ++i) "removeListener" !== (n = s[i]) && this.removeAllListeners(n);
            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
          }
          if ("function" == typeof (t = r[e])) this.removeListener(e, t); else if (void 0 !== t) for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
          return this;
        }, M.prototype.listeners = function(e) {
          return K(this, e, !0);
        }, M.prototype.rawListeners = function(e) {
          return K(this, e, !1);
        }, M.listenerCount = function(e, t) {
          return "function" == typeof e.listenerCount ? e.listenerCount(t) : V.call(e, t);
        }, M.prototype.listenerCount = V, M.prototype.eventNames = function() {
          return this._eventsCount > 0 ? A(this._events) : [];
        };
        var X = {};
        var Z = function(e, t) {
          return (Z = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(e, t) {
            e.__proto__ = t;
          } || function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
        };
        function Q(e, t) {
          function r() {
            this.constructor = e;
          }
          Z(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
        }
        var ee = function() {
          return ee = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++) for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }, ee.apply(this, arguments);
        };
        function te(e, t) {
          var r = {};
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
          }
          return r;
        }
        function re(e, t, r, i) {
          var n, s = arguments.length, o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
          return s > 3 && o && Object.defineProperty(t, r, o), o;
        }
        function ie(e, t) {
          return function(r, i) {
            t(r, i, e);
          };
        }
        function ne(e, t) {
          if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
        }
        function se(e, t, r, i) {
          function n(e) {
            return e instanceof r ? e : new r((function(t) {
              t(e);
            }));
          }
          return new (r || (r = Promise))((function(r, s) {
            function o(e) {
              try {
                c(i.next(e));
              } catch (t) {
                s(t);
              }
            }
            function a(e) {
              try {
                c(i.throw(e));
              } catch (t) {
                s(t);
              }
            }
            function c(e) {
              e.done ? r(e.value) : n(e.value).then(o, a);
            }
            c((i = i.apply(e, t || [])).next());
          }));
        }
        function oe(e, t) {
          var r, i, n, s, o = {
            label: 0,
            sent: function() {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: []
          };
          return s = {
            next: a(0),
            throw: a(1),
            return: a(2)
          }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this;
          }), s;
          function a(e) {
            return function(t) {
              return c([ e, t ]);
            };
          }
          function c(s) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;o; ) try {
              if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
              switch (i = 0, n && (s = [ 2 & s[0], n.value ]), s[0]) {
               case 0:
               case 1:
                n = s;
                break;

               case 4:
                return o.label++, {
                  value: s[1],
                  done: !1
                };

               case 5:
                o.label++, i = s[1], s = [ 0 ];
                continue;

               case 7:
                s = o.ops.pop(), o.trys.pop();
                continue;

               default:
                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                  o = 0;
                  continue;
                }
                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                  o.label = s[1];
                  break;
                }
                if (6 === s[0] && o.label < n[1]) {
                  o.label = n[1], n = s;
                  break;
                }
                if (n && o.label < n[2]) {
                  o.label = n[2], o.ops.push(s);
                  break;
                }
                n[2] && o.ops.pop(), o.trys.pop();
                continue;
              }
              s = t.call(e, o);
            } catch (a) {
              s = [ 6, a ], i = 0;
            } finally {
              r = n = 0;
            }
            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }
        }
        function ae(e, t, r, i) {
          void 0 === i && (i = r), e[i] = t[r];
        }
        function ce(e, t) {
          for (var r in e) "default" !== r && !t.hasOwnProperty(r) && (t[r] = e[r]);
        }
        function he(e) {
          var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], i = 0;
          if (r) return r.call(e);
          if (e && "number" == typeof e.length) return {
            next: function() {
              return e && i >= e.length && (e = void 0), {
                value: e && e[i++],
                done: !e
              };
            }
          };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function ue(e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var i, n, s = r.call(e), o = [];
          try {
            for (;(void 0 === t || t-- > 0) && !(i = s.next()).done; ) o.push(i.value);
          } catch (a) {
            n = {
              error: a
            };
          } finally {
            try {
              i && !i.done && (r = s.return) && r.call(s);
            } finally {
              if (n) throw n.error;
            }
          }
          return o;
        }
        function le() {
          for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(ue(arguments[t]));
          return e;
        }
        function pe() {
          for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
          var i = Array(e), n = 0;
          for (t = 0; t < r; t++) for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
          return i;
        }
        function fe(e) {
          return this instanceof fe ? (this.v = e, this) : new fe(e);
        }
        function de(e, t, r) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var i, n = r.apply(e, t || []), s = [];
          return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function o(e) {
            n[e] && (i[e] = function(t) {
              return new Promise((function(r, i) {
                s.push([ e, t, r, i ]) > 1 || a(e, t);
              }));
            });
          }
          function a(e, t) {
            try {
              c(n[e](t));
            } catch (r) {
              l(s[0][3], r);
            }
          }
          function c(e) {
            e.value instanceof fe ? Promise.resolve(e.value.v).then(h, u) : l(s[0][2], e);
          }
          function h(e) {
            a("next", e);
          }
          function u(e) {
            a("throw", e);
          }
          function l(e, t) {
            e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
          }
        }
        function ye(e) {
          var t, r;
          return t = {}, i("next"), i("throw", (function(e) {
            throw e;
          })), i("return"), t[Symbol.iterator] = function() {
            return this;
          }, t;
          function i(i, n) {
            t[i] = e[i] ? function(t) {
              return (r = !r) ? {
                value: fe(e[i](t)),
                done: "return" === i
              } : n ? n(t) : t;
            } : n;
          }
        }
        function ge(e) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var t, r = e[Symbol.asyncIterator];
          return r ? r.call(e) : (e = "function" == typeof he ? he(e) : e[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), 
          t[Symbol.asyncIterator] = function() {
            return this;
          }, t);
          function i(r) {
            t[r] = e[r] && function(t) {
              return new Promise((function(i, s) {
                n(i, s, (t = e[r](t)).done, t.value);
              }));
            };
          }
          function n(e, t, r, i) {
            Promise.resolve(i).then((function(t) {
              e({
                value: t,
                done: r
              });
            }), t);
          }
        }
        function be(e, t) {
          return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
          }) : e.raw = t, e;
        }
        function ve(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t.default = e, t;
        }
        function me(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }
        function we(e, t) {
          if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
          return t.get(e);
        }
        function _e(e, t, r) {
          if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
          return t.set(e, r), r;
        }
        var Ee = n(Object.freeze({
          __proto__: null,
          __extends: Q,
          get __assign() {
            return ee;
          },
          __rest: te,
          __decorate: re,
          __param: ie,
          __metadata: ne,
          __awaiter: se,
          __generator: oe,
          __createBinding: ae,
          __exportStar: ce,
          __values: he,
          __read: ue,
          __spread: le,
          __spreadArrays: pe,
          __await: fe,
          __asyncGenerator: de,
          __asyncDelegator: ye,
          __asyncValues: ge,
          __makeTemplateObject: be,
          __importStar: ve,
          __importDefault: me,
          __classPrivateFieldGet: we,
          __classPrivateFieldSet: _e
        })), Se = {};
        function Oe(e) {
          if ("string" != typeof e) throw new Error("Cannot safe json parse value of type " + typeof e);
          try {
            return JSON.parse(e);
          } catch {
            return e;
          }
        }
        function Ie(e) {
          return "string" == typeof e ? e : JSON.stringify(e, ((e, t) => typeof t > "u" ? null : t));
        }
        Object.defineProperty(Se, "__esModule", {
          value: !0
        }), Se.safeJsonParse = Oe, Se.safeJsonStringify = Ie;
        var Pe, xe = {
          exports: {}
        };
        function Ne() {
          return Pe || (Pe = 1, function() {
            let e;
            function r() {}
            e = r, e.prototype.getItem = function(e) {
              return this.hasOwnProperty(e) ? String(this[e]) : null;
            }, e.prototype.setItem = function(e, t) {
              this[e] = String(t);
            }, e.prototype.removeItem = function(e) {
              delete this[e];
            }, e.prototype.clear = function() {
              const e = this;
              Object.keys(e).forEach((function(t) {
                e[t] = void 0, delete e[t];
              }));
            }, e.prototype.key = function(e) {
              return e = e || 0, Object.keys(this)[e];
            }, e.prototype.__defineGetter__("length", (function() {
              return Object.keys(this).length;
            })), typeof t < "u" && t.localStorage ? xe.exports = t.localStorage : typeof window < "u" && window.localStorage ? xe.exports = window.localStorage : xe.exports = new r;
          }()), xe.exports;
        }
        var Te, Ae = {}, Re = {};
        function je() {
          if (Te) return Re;
          Te = 1, Object.defineProperty(Re, "__esModule", {
            value: !0
          }), Re.IKeyValueStorage = void 0;
          class e {}
          return Re.IKeyValueStorage = e, Re;
        }
        var Le, Ce = {};
        function Ue() {
          if (Le) return Ce;
          Le = 1, Object.defineProperty(Ce, "__esModule", {
            value: !0
          }), Ce.parseEntry = void 0;
          const e = Se;
          function t(t) {
            var r;
            return [ t[0], e.safeJsonParse(null !== (r = t[1]) && void 0 !== r ? r : "") ];
          }
          return Ce.parseEntry = t, Ce;
        }
        var Me;
        function De() {
          return Me || (Me = 1, function(e) {
            Object.defineProperty(e, "__esModule", {
              value: !0
            });
            const t = Ee;
            t.__exportStar(je(), e), t.__exportStar(Ue(), e);
          }(Ae)), Ae;
        }
        Object.defineProperty(X, "__esModule", {
          value: !0
        }), X.KeyValueStorage = void 0;
        const ke = Ee, ze = Se, He = ke.__importDefault(Ne()), $e = De();
        class qe {
          constructor() {
            this.localStorage = He.default;
          }
          getKeys() {
            return ke.__awaiter(this, void 0, void 0, (function*() {
              return Object.keys(this.localStorage);
            }));
          }
          getEntries() {
            return ke.__awaiter(this, void 0, void 0, (function*() {
              return Object.entries(this.localStorage).map($e.parseEntry);
            }));
          }
          getItem(e) {
            return ke.__awaiter(this, void 0, void 0, (function*() {
              const t = this.localStorage.getItem(e);
              if (null !== t) return ze.safeJsonParse(t);
            }));
          }
          setItem(e, t) {
            return ke.__awaiter(this, void 0, void 0, (function*() {
              this.localStorage.setItem(e, ze.safeJsonStringify(t));
            }));
          }
          removeItem(e) {
            return ke.__awaiter(this, void 0, void 0, (function*() {
              this.localStorage.removeItem(e);
            }));
          }
        }
        X.KeyValueStorage = qe;
        var Ke = X.default = qe, Ve = {};
        var Be = function(e, t) {
          return (Be = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(e, t) {
            e.__proto__ = t;
          } || function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
        };
        function Fe(e, t) {
          function r() {
            this.constructor = e;
          }
          Be(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
        }
        var Ge = function() {
          return Ge = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++) for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }, Ge.apply(this, arguments);
        };
        function We(e, t) {
          var r = {};
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
          }
          return r;
        }
        function Ye(e, t, r, i) {
          var n, s = arguments.length, o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
          return s > 3 && o && Object.defineProperty(t, r, o), o;
        }
        function Je(e, t) {
          return function(r, i) {
            t(r, i, e);
          };
        }
        function Xe(e, t) {
          if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
        }
        function Ze(e, t, r, i) {
          function n(e) {
            return e instanceof r ? e : new r((function(t) {
              t(e);
            }));
          }
          return new (r || (r = Promise))((function(r, s) {
            function o(e) {
              try {
                c(i.next(e));
              } catch (t) {
                s(t);
              }
            }
            function a(e) {
              try {
                c(i.throw(e));
              } catch (t) {
                s(t);
              }
            }
            function c(e) {
              e.done ? r(e.value) : n(e.value).then(o, a);
            }
            c((i = i.apply(e, t || [])).next());
          }));
        }
        function Qe(e, t) {
          var r, i, n, s, o = {
            label: 0,
            sent: function() {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: []
          };
          return s = {
            next: a(0),
            throw: a(1),
            return: a(2)
          }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this;
          }), s;
          function a(e) {
            return function(t) {
              return c([ e, t ]);
            };
          }
          function c(s) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;o; ) try {
              if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
              switch (i = 0, n && (s = [ 2 & s[0], n.value ]), s[0]) {
               case 0:
               case 1:
                n = s;
                break;

               case 4:
                return o.label++, {
                  value: s[1],
                  done: !1
                };

               case 5:
                o.label++, i = s[1], s = [ 0 ];
                continue;

               case 7:
                s = o.ops.pop(), o.trys.pop();
                continue;

               default:
                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                  o = 0;
                  continue;
                }
                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                  o.label = s[1];
                  break;
                }
                if (6 === s[0] && o.label < n[1]) {
                  o.label = n[1], n = s;
                  break;
                }
                if (n && o.label < n[2]) {
                  o.label = n[2], o.ops.push(s);
                  break;
                }
                n[2] && o.ops.pop(), o.trys.pop();
                continue;
              }
              s = t.call(e, o);
            } catch (a) {
              s = [ 6, a ], i = 0;
            } finally {
              r = n = 0;
            }
            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }
        }
        function et(e, t, r, i) {
          void 0 === i && (i = r), e[i] = t[r];
        }
        function tt(e, t) {
          for (var r in e) "default" !== r && !t.hasOwnProperty(r) && (t[r] = e[r]);
        }
        function rt(e) {
          var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], i = 0;
          if (r) return r.call(e);
          if (e && "number" == typeof e.length) return {
            next: function() {
              return e && i >= e.length && (e = void 0), {
                value: e && e[i++],
                done: !e
              };
            }
          };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function it(e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var i, n, s = r.call(e), o = [];
          try {
            for (;(void 0 === t || t-- > 0) && !(i = s.next()).done; ) o.push(i.value);
          } catch (a) {
            n = {
              error: a
            };
          } finally {
            try {
              i && !i.done && (r = s.return) && r.call(s);
            } finally {
              if (n) throw n.error;
            }
          }
          return o;
        }
        function nt() {
          for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(it(arguments[t]));
          return e;
        }
        function st() {
          for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
          var i = Array(e), n = 0;
          for (t = 0; t < r; t++) for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
          return i;
        }
        function ot(e) {
          return this instanceof ot ? (this.v = e, this) : new ot(e);
        }
        function at(e, t, r) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var i, n = r.apply(e, t || []), s = [];
          return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function o(e) {
            n[e] && (i[e] = function(t) {
              return new Promise((function(r, i) {
                s.push([ e, t, r, i ]) > 1 || a(e, t);
              }));
            });
          }
          function a(e, t) {
            try {
              c(n[e](t));
            } catch (r) {
              l(s[0][3], r);
            }
          }
          function c(e) {
            e.value instanceof ot ? Promise.resolve(e.value.v).then(h, u) : l(s[0][2], e);
          }
          function h(e) {
            a("next", e);
          }
          function u(e) {
            a("throw", e);
          }
          function l(e, t) {
            e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
          }
        }
        function ct(e) {
          var t, r;
          return t = {}, i("next"), i("throw", (function(e) {
            throw e;
          })), i("return"), t[Symbol.iterator] = function() {
            return this;
          }, t;
          function i(i, n) {
            t[i] = e[i] ? function(t) {
              return (r = !r) ? {
                value: ot(e[i](t)),
                done: "return" === i
              } : n ? n(t) : t;
            } : n;
          }
        }
        function ht(e) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var t, r = e[Symbol.asyncIterator];
          return r ? r.call(e) : (e = "function" == typeof rt ? rt(e) : e[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), 
          t[Symbol.asyncIterator] = function() {
            return this;
          }, t);
          function i(r) {
            t[r] = e[r] && function(t) {
              return new Promise((function(i, s) {
                n(i, s, (t = e[r](t)).done, t.value);
              }));
            };
          }
          function n(e, t, r, i) {
            Promise.resolve(i).then((function(t) {
              e({
                value: t,
                done: r
              });
            }), t);
          }
        }
        function ut(e, t) {
          return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
          }) : e.raw = t, e;
        }
        function lt(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t.default = e, t;
        }
        function pt(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }
        function ft(e, t) {
          if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
          return t.get(e);
        }
        function dt(e, t, r) {
          if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
          return t.set(e, r), r;
        }
        var yt = n(Object.freeze({
          __proto__: null,
          __extends: Fe,
          get __assign() {
            return Ge;
          },
          __rest: We,
          __decorate: Ye,
          __param: Je,
          __metadata: Xe,
          __awaiter: Ze,
          __generator: Qe,
          __createBinding: et,
          __exportStar: tt,
          __values: rt,
          __read: it,
          __spread: nt,
          __spreadArrays: st,
          __await: ot,
          __asyncGenerator: at,
          __asyncDelegator: ct,
          __asyncValues: ht,
          __makeTemplateObject: ut,
          __importStar: lt,
          __importDefault: pt,
          __classPrivateFieldGet: ft,
          __classPrivateFieldSet: dt
        })), gt = {}, bt = {};
        var vt = function(e, t) {
          return (vt = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(e, t) {
            e.__proto__ = t;
          } || function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
        };
        function mt(e, t) {
          function r() {
            this.constructor = e;
          }
          vt(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
        }
        var wt = function() {
          return wt = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++) for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }, wt.apply(this, arguments);
        };
        function _t(e, t) {
          var r = {};
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
          }
          return r;
        }
        function Et(e, t, r, i) {
          var n, s = arguments.length, o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
          return s > 3 && o && Object.defineProperty(t, r, o), o;
        }
        function St(e, t) {
          return function(r, i) {
            t(r, i, e);
          };
        }
        function Ot(e, t) {
          if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
        }
        function It(e, t, r, i) {
          function n(e) {
            return e instanceof r ? e : new r((function(t) {
              t(e);
            }));
          }
          return new (r || (r = Promise))((function(r, s) {
            function o(e) {
              try {
                c(i.next(e));
              } catch (t) {
                s(t);
              }
            }
            function a(e) {
              try {
                c(i.throw(e));
              } catch (t) {
                s(t);
              }
            }
            function c(e) {
              e.done ? r(e.value) : n(e.value).then(o, a);
            }
            c((i = i.apply(e, t || [])).next());
          }));
        }
        function Pt(e, t) {
          var r, i, n, s, o = {
            label: 0,
            sent: function() {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: []
          };
          return s = {
            next: a(0),
            throw: a(1),
            return: a(2)
          }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this;
          }), s;
          function a(e) {
            return function(t) {
              return c([ e, t ]);
            };
          }
          function c(s) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;o; ) try {
              if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
              switch (i = 0, n && (s = [ 2 & s[0], n.value ]), s[0]) {
               case 0:
               case 1:
                n = s;
                break;

               case 4:
                return o.label++, {
                  value: s[1],
                  done: !1
                };

               case 5:
                o.label++, i = s[1], s = [ 0 ];
                continue;

               case 7:
                s = o.ops.pop(), o.trys.pop();
                continue;

               default:
                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                  o = 0;
                  continue;
                }
                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                  o.label = s[1];
                  break;
                }
                if (6 === s[0] && o.label < n[1]) {
                  o.label = n[1], n = s;
                  break;
                }
                if (n && o.label < n[2]) {
                  o.label = n[2], o.ops.push(s);
                  break;
                }
                n[2] && o.ops.pop(), o.trys.pop();
                continue;
              }
              s = t.call(e, o);
            } catch (a) {
              s = [ 6, a ], i = 0;
            } finally {
              r = n = 0;
            }
            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }
        }
        function xt(e, t, r, i) {
          void 0 === i && (i = r), e[i] = t[r];
        }
        function Nt(e, t) {
          for (var r in e) "default" !== r && !t.hasOwnProperty(r) && (t[r] = e[r]);
        }
        function Tt(e) {
          var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], i = 0;
          if (r) return r.call(e);
          if (e && "number" == typeof e.length) return {
            next: function() {
              return e && i >= e.length && (e = void 0), {
                value: e && e[i++],
                done: !e
              };
            }
          };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function At(e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var i, n, s = r.call(e), o = [];
          try {
            for (;(void 0 === t || t-- > 0) && !(i = s.next()).done; ) o.push(i.value);
          } catch (a) {
            n = {
              error: a
            };
          } finally {
            try {
              i && !i.done && (r = s.return) && r.call(s);
            } finally {
              if (n) throw n.error;
            }
          }
          return o;
        }
        function Rt() {
          for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(At(arguments[t]));
          return e;
        }
        function jt() {
          for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
          var i = Array(e), n = 0;
          for (t = 0; t < r; t++) for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
          return i;
        }
        function Lt(e) {
          return this instanceof Lt ? (this.v = e, this) : new Lt(e);
        }
        function Ct(e, t, r) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var i, n = r.apply(e, t || []), s = [];
          return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function o(e) {
            n[e] && (i[e] = function(t) {
              return new Promise((function(r, i) {
                s.push([ e, t, r, i ]) > 1 || a(e, t);
              }));
            });
          }
          function a(e, t) {
            try {
              c(n[e](t));
            } catch (r) {
              l(s[0][3], r);
            }
          }
          function c(e) {
            e.value instanceof Lt ? Promise.resolve(e.value.v).then(h, u) : l(s[0][2], e);
          }
          function h(e) {
            a("next", e);
          }
          function u(e) {
            a("throw", e);
          }
          function l(e, t) {
            e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
          }
        }
        function Ut(e) {
          var t, r;
          return t = {}, i("next"), i("throw", (function(e) {
            throw e;
          })), i("return"), t[Symbol.iterator] = function() {
            return this;
          }, t;
          function i(i, n) {
            t[i] = e[i] ? function(t) {
              return (r = !r) ? {
                value: Lt(e[i](t)),
                done: "return" === i
              } : n ? n(t) : t;
            } : n;
          }
        }
        function Mt(e) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var t, r = e[Symbol.asyncIterator];
          return r ? r.call(e) : (e = "function" == typeof Tt ? Tt(e) : e[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), 
          t[Symbol.asyncIterator] = function() {
            return this;
          }, t);
          function i(r) {
            t[r] = e[r] && function(t) {
              return new Promise((function(i, s) {
                n(i, s, (t = e[r](t)).done, t.value);
              }));
            };
          }
          function n(e, t, r, i) {
            Promise.resolve(i).then((function(t) {
              e({
                value: t,
                done: r
              });
            }), t);
          }
        }
        function Dt(e, t) {
          return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
          }) : e.raw = t, e;
        }
        function kt(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t.default = e, t;
        }
        function zt(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }
        function Ht(e, t) {
          if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
          return t.get(e);
        }
        function $t(e, t, r) {
          if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
          return t.set(e, r), r;
        }
        var qt, Kt = n(Object.freeze({
          __proto__: null,
          __extends: mt,
          get __assign() {
            return wt;
          },
          __rest: _t,
          __decorate: Et,
          __param: St,
          __metadata: Ot,
          __awaiter: It,
          __generator: Pt,
          __createBinding: xt,
          __exportStar: Nt,
          __values: Tt,
          __read: At,
          __spread: Rt,
          __spreadArrays: jt,
          __await: Lt,
          __asyncGenerator: Ct,
          __asyncDelegator: Ut,
          __asyncValues: Mt,
          __makeTemplateObject: Dt,
          __importStar: kt,
          __importDefault: zt,
          __classPrivateFieldGet: Ht,
          __classPrivateFieldSet: $t
        })), Vt = {}, Bt = {};
        function Ft() {
          if (qt) return Bt;
          function e(e) {
            return new Promise((t => {
              setTimeout((() => {
                t(!0);
              }), e);
            }));
          }
          return qt = 1, Object.defineProperty(Bt, "__esModule", {
            value: !0
          }), Bt.delay = void 0, Bt.delay = e, Bt;
        }
        var Gt, Wt = {}, Yt = {}, Jt = {};
        function Xt() {
          return Gt || (Gt = 1, Object.defineProperty(Jt, "__esModule", {
            value: !0
          }), Jt.ONE_THOUSAND = Jt.ONE_HUNDRED = void 0, Jt.ONE_HUNDRED = 100, Jt.ONE_THOUSAND = 1e3), Jt;
        }
        var Zt, Qt = {};
        function er() {
          return Zt || (Zt = 1, function(e) {
            Object.defineProperty(e, "__esModule", {
              value: !0
            }), e.ONE_YEAR = e.FOUR_WEEKS = e.THREE_WEEKS = e.TWO_WEEKS = e.ONE_WEEK = e.THIRTY_DAYS = e.SEVEN_DAYS = e.FIVE_DAYS = e.THREE_DAYS = e.ONE_DAY = e.TWENTY_FOUR_HOURS = e.TWELVE_HOURS = e.SIX_HOURS = e.THREE_HOURS = e.ONE_HOUR = e.SIXTY_MINUTES = e.THIRTY_MINUTES = e.TEN_MINUTES = e.FIVE_MINUTES = e.ONE_MINUTE = e.SIXTY_SECONDS = e.THIRTY_SECONDS = e.TEN_SECONDS = e.FIVE_SECONDS = e.ONE_SECOND = void 0, 
            e.ONE_SECOND = 1, e.FIVE_SECONDS = 5, e.TEN_SECONDS = 10, e.THIRTY_SECONDS = 30, e.SIXTY_SECONDS = 60, e.ONE_MINUTE = e.SIXTY_SECONDS, 
            e.FIVE_MINUTES = 5 * e.ONE_MINUTE, e.TEN_MINUTES = 10 * e.ONE_MINUTE, e.THIRTY_MINUTES = 30 * e.ONE_MINUTE, e.SIXTY_MINUTES = 60 * e.ONE_MINUTE, 
            e.ONE_HOUR = e.SIXTY_MINUTES, e.THREE_HOURS = 3 * e.ONE_HOUR, e.SIX_HOURS = 6 * e.ONE_HOUR, e.TWELVE_HOURS = 12 * e.ONE_HOUR, 
            e.TWENTY_FOUR_HOURS = 24 * e.ONE_HOUR, e.ONE_DAY = e.TWENTY_FOUR_HOURS, e.THREE_DAYS = 3 * e.ONE_DAY, e.FIVE_DAYS = 5 * e.ONE_DAY, 
            e.SEVEN_DAYS = 7 * e.ONE_DAY, e.THIRTY_DAYS = 30 * e.ONE_DAY, e.ONE_WEEK = e.SEVEN_DAYS, e.TWO_WEEKS = 2 * e.ONE_WEEK, e.THREE_WEEKS = 3 * e.ONE_WEEK, 
            e.FOUR_WEEKS = 4 * e.ONE_WEEK, e.ONE_YEAR = 365 * e.ONE_DAY;
          }(Qt)), Qt;
        }
        var tr;
        function rr() {
          return tr || (tr = 1, function(e) {
            Object.defineProperty(e, "__esModule", {
              value: !0
            });
            const t = Kt;
            t.__exportStar(Xt(), e), t.__exportStar(er(), e);
          }(Yt)), Yt;
        }
        var ir;
        function nr() {
          if (ir) return Wt;
          ir = 1, Object.defineProperty(Wt, "__esModule", {
            value: !0
          }), Wt.fromMiliseconds = Wt.toMiliseconds = void 0;
          const e = rr();
          function t(t) {
            return t * e.ONE_THOUSAND;
          }
          function r(t) {
            return Math.floor(t / e.ONE_THOUSAND);
          }
          return Wt.toMiliseconds = t, Wt.fromMiliseconds = r, Wt;
        }
        var sr;
        function or() {
          return sr || (sr = 1, function(e) {
            Object.defineProperty(e, "__esModule", {
              value: !0
            });
            const t = Kt;
            t.__exportStar(Ft(), e), t.__exportStar(nr(), e);
          }(Vt)), Vt;
        }
        var ar, cr = {};
        function hr() {
          if (ar) return cr;
          ar = 1, Object.defineProperty(cr, "__esModule", {
            value: !0
          }), cr.Watch = void 0;
          class e {
            constructor() {
              this.timestamps = new Map;
            }
            start(e) {
              if (this.timestamps.has(e)) throw new Error(`Watch already started for label: ${e}`);
              this.timestamps.set(e, {
                started: Date.now()
              });
            }
            stop(e) {
              const t = this.get(e);
              if (typeof t.elapsed < "u") throw new Error(`Watch already stopped for label: ${e}`);
              const r = Date.now() - t.started;
              this.timestamps.set(e, {
                started: t.started,
                elapsed: r
              });
            }
            get(e) {
              const t = this.timestamps.get(e);
              if (typeof t > "u") throw new Error(`No timestamp found for label: ${e}`);
              return t;
            }
            elapsed(e) {
              const t = this.get(e);
              return t.elapsed || Date.now() - t.started;
            }
          }
          return cr.Watch = e, cr.default = e, cr;
        }
        var ur, lr = {}, pr = {};
        function fr() {
          if (ur) return pr;
          ur = 1, Object.defineProperty(pr, "__esModule", {
            value: !0
          }), pr.IWatch = void 0;
          class e {}
          return pr.IWatch = e, pr;
        }
        var dr;
        function yr() {
          return dr || (dr = 1, function(e) {
            Object.defineProperty(e, "__esModule", {
              value: !0
            }), Kt.__exportStar(fr(), e);
          }(lr)), lr;
        }
        !function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          const t = Kt;
          t.__exportStar(or(), e), t.__exportStar(hr(), e), t.__exportStar(yr(), e), t.__exportStar(rr(), e);
        }(bt);
        var gr = {}, br = {};
        class vr {}
        var mr, wr = n(Object.freeze({
          __proto__: null,
          IEvents: vr
        }));
        function _r() {
          if (mr) return br;
          mr = 1, Object.defineProperty(br, "__esModule", {
            value: !0
          }), br.IHeartBeat = void 0;
          const e = wr;
          class t extends e.IEvents {
            constructor(e) {
              super();
            }
          }
          return br.IHeartBeat = t, br;
        }
        var Er;
        function Sr() {
          return Er || (Er = 1, function(e) {
            Object.defineProperty(e, "__esModule", {
              value: !0
            }), yt.__exportStar(_r(), e);
          }(gr)), gr;
        }
        var Or, Ir = {}, Pr = {};
        function xr() {
          if (Or) return Pr;
          Or = 1, Object.defineProperty(Pr, "__esModule", {
            value: !0
          }), Pr.HEARTBEAT_EVENTS = Pr.HEARTBEAT_INTERVAL = void 0;
          const e = bt;
          return Pr.HEARTBEAT_INTERVAL = e.FIVE_SECONDS, Pr.HEARTBEAT_EVENTS = {
            pulse: "heartbeat_pulse"
          }, Pr;
        }
        var Nr;
        function Tr() {
          return Nr || (Nr = 1, function(e) {
            Object.defineProperty(e, "__esModule", {
              value: !0
            }), yt.__exportStar(xr(), e);
          }(Ir)), Ir;
        }
        var Ar;
        function Rr() {
          if (Ar) return gt;
          Ar = 1, Object.defineProperty(gt, "__esModule", {
            value: !0
          }), gt.HeartBeat = void 0;
          const e = yt, t = R.exports, r = bt, i = Sr(), n = Tr();
          class s extends i.IHeartBeat {
            constructor(e) {
              super(e), this.events = new t.EventEmitter, this.interval = n.HEARTBEAT_INTERVAL, this.interval = e?.interval || n.HEARTBEAT_INTERVAL;
            }
            static init(t) {
              return e.__awaiter(this, void 0, void 0, (function*() {
                const e = new s(t);
                return yield e.init(), e;
              }));
            }
            init() {
              return e.__awaiter(this, void 0, void 0, (function*() {
                yield this.initialize();
              }));
            }
            stop() {
              clearInterval(this.intervalRef);
            }
            on(e, t) {
              this.events.on(e, t);
            }
            once(e, t) {
              this.events.once(e, t);
            }
            off(e, t) {
              this.events.off(e, t);
            }
            removeListener(e, t) {
              this.events.removeListener(e, t);
            }
            initialize() {
              return e.__awaiter(this, void 0, void 0, (function*() {
                this.intervalRef = setInterval((() => this.pulse()), r.toMiliseconds(this.interval));
              }));
            }
            pulse() {
              this.events.emit(n.HEARTBEAT_EVENTS.pulse);
            }
          }
          return gt.HeartBeat = s, gt;
        }
        !function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          const t = yt;
          t.__exportStar(Rr(), e), t.__exportStar(Sr(), e), t.__exportStar(Tr(), e);
        }(Ve);
        var jr = {};
        var Lr = function(e, t) {
          return (Lr = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(e, t) {
            e.__proto__ = t;
          } || function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
        };
        function Cr(e, t) {
          function r() {
            this.constructor = e;
          }
          Lr(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
        }
        var Ur = function() {
          return Ur = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++) for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }, Ur.apply(this, arguments);
        };
        function Mr(e, t) {
          var r = {};
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
          }
          return r;
        }
        function Dr(e, t, r, i) {
          var n, s = arguments.length, o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
          return s > 3 && o && Object.defineProperty(t, r, o), o;
        }
        function kr(e, t) {
          return function(r, i) {
            t(r, i, e);
          };
        }
        function zr(e, t) {
          if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
        }
        function Hr(e, t, r, i) {
          function n(e) {
            return e instanceof r ? e : new r((function(t) {
              t(e);
            }));
          }
          return new (r || (r = Promise))((function(r, s) {
            function o(e) {
              try {
                c(i.next(e));
              } catch (t) {
                s(t);
              }
            }
            function a(e) {
              try {
                c(i.throw(e));
              } catch (t) {
                s(t);
              }
            }
            function c(e) {
              e.done ? r(e.value) : n(e.value).then(o, a);
            }
            c((i = i.apply(e, t || [])).next());
          }));
        }
        function $r(e, t) {
          var r, i, n, s, o = {
            label: 0,
            sent: function() {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: []
          };
          return s = {
            next: a(0),
            throw: a(1),
            return: a(2)
          }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this;
          }), s;
          function a(e) {
            return function(t) {
              return c([ e, t ]);
            };
          }
          function c(s) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;o; ) try {
              if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
              switch (i = 0, n && (s = [ 2 & s[0], n.value ]), s[0]) {
               case 0:
               case 1:
                n = s;
                break;

               case 4:
                return o.label++, {
                  value: s[1],
                  done: !1
                };

               case 5:
                o.label++, i = s[1], s = [ 0 ];
                continue;

               case 7:
                s = o.ops.pop(), o.trys.pop();
                continue;

               default:
                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                  o = 0;
                  continue;
                }
                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                  o.label = s[1];
                  break;
                }
                if (6 === s[0] && o.label < n[1]) {
                  o.label = n[1], n = s;
                  break;
                }
                if (n && o.label < n[2]) {
                  o.label = n[2], o.ops.push(s);
                  break;
                }
                n[2] && o.ops.pop(), o.trys.pop();
                continue;
              }
              s = t.call(e, o);
            } catch (a) {
              s = [ 6, a ], i = 0;
            } finally {
              r = n = 0;
            }
            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }
        }
        function qr(e, t, r, i) {
          void 0 === i && (i = r), e[i] = t[r];
        }
        function Kr(e, t) {
          for (var r in e) "default" !== r && !t.hasOwnProperty(r) && (t[r] = e[r]);
        }
        function Vr(e) {
          var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], i = 0;
          if (r) return r.call(e);
          if (e && "number" == typeof e.length) return {
            next: function() {
              return e && i >= e.length && (e = void 0), {
                value: e && e[i++],
                done: !e
              };
            }
          };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function Br(e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var i, n, s = r.call(e), o = [];
          try {
            for (;(void 0 === t || t-- > 0) && !(i = s.next()).done; ) o.push(i.value);
          } catch (a) {
            n = {
              error: a
            };
          } finally {
            try {
              i && !i.done && (r = s.return) && r.call(s);
            } finally {
              if (n) throw n.error;
            }
          }
          return o;
        }
        function Fr() {
          for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Br(arguments[t]));
          return e;
        }
        function Gr() {
          for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
          var i = Array(e), n = 0;
          for (t = 0; t < r; t++) for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
          return i;
        }
        function Wr(e) {
          return this instanceof Wr ? (this.v = e, this) : new Wr(e);
        }
        function Yr(e, t, r) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var i, n = r.apply(e, t || []), s = [];
          return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function o(e) {
            n[e] && (i[e] = function(t) {
              return new Promise((function(r, i) {
                s.push([ e, t, r, i ]) > 1 || a(e, t);
              }));
            });
          }
          function a(e, t) {
            try {
              c(n[e](t));
            } catch (r) {
              l(s[0][3], r);
            }
          }
          function c(e) {
            e.value instanceof Wr ? Promise.resolve(e.value.v).then(h, u) : l(s[0][2], e);
          }
          function h(e) {
            a("next", e);
          }
          function u(e) {
            a("throw", e);
          }
          function l(e, t) {
            e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
          }
        }
        function Jr(e) {
          var t, r;
          return t = {}, i("next"), i("throw", (function(e) {
            throw e;
          })), i("return"), t[Symbol.iterator] = function() {
            return this;
          }, t;
          function i(i, n) {
            t[i] = e[i] ? function(t) {
              return (r = !r) ? {
                value: Wr(e[i](t)),
                done: "return" === i
              } : n ? n(t) : t;
            } : n;
          }
        }
        function Xr(e) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var t, r = e[Symbol.asyncIterator];
          return r ? r.call(e) : (e = "function" == typeof Vr ? Vr(e) : e[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), 
          t[Symbol.asyncIterator] = function() {
            return this;
          }, t);
          function i(r) {
            t[r] = e[r] && function(t) {
              return new Promise((function(i, s) {
                n(i, s, (t = e[r](t)).done, t.value);
              }));
            };
          }
          function n(e, t, r, i) {
            Promise.resolve(i).then((function(t) {
              e({
                value: t,
                done: r
              });
            }), t);
          }
        }
        function Zr(e, t) {
          return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
          }) : e.raw = t, e;
        }
        function Qr(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t.default = e, t;
        }
        function ei(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }
        function ti(e, t) {
          if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
          return t.get(e);
        }
        function ri(e, t, r) {
          if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
          return t.set(e, r), r;
        }
        var ii, ni = n(Object.freeze({
          __proto__: null,
          __extends: Cr,
          get __assign() {
            return Ur;
          },
          __rest: Mr,
          __decorate: Dr,
          __param: kr,
          __metadata: zr,
          __awaiter: Hr,
          __generator: $r,
          __createBinding: qr,
          __exportStar: Kr,
          __values: Vr,
          __read: Br,
          __spread: Fr,
          __spreadArrays: Gr,
          __await: Wr,
          __asyncGenerator: Yr,
          __asyncDelegator: Jr,
          __asyncValues: Xr,
          __makeTemplateObject: Zr,
          __importStar: Qr,
          __importDefault: ei,
          __classPrivateFieldGet: ti,
          __classPrivateFieldSet: ri
        })), si = {};
        function oi() {
          return ii || (ii = 1, Object.defineProperty(si, "__esModule", {
            value: !0
          }), si.PINO_CUSTOM_CONTEXT_KEY = si.PINO_LOGGER_DEFAULTS = void 0, si.PINO_LOGGER_DEFAULTS = {
            level: "info"
          }, si.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), si;
        }
        var ai, ci = {};
        function hi() {
          if (ai) return ci;
          ai = 1, Object.defineProperty(ci, "__esModule", {
            value: !0
          }), ci.generateChildLogger = ci.formatChildLoggerContext = ci.getLoggerContext = ci.setBrowserLoggerContext = ci.getBrowserLoggerContext = ci.getDefaultLoggerOptions = void 0;
          const e = oi();
          function t(t) {
            return Object.assign(Object.assign({}, t), {
              level: t?.level || e.PINO_LOGGER_DEFAULTS.level
            });
          }
          function r(t, r = e.PINO_CUSTOM_CONTEXT_KEY) {
            return t[r] || "";
          }
          function i(t, r, i = e.PINO_CUSTOM_CONTEXT_KEY) {
            return t[i] = r, t;
          }
          function n(t, i = e.PINO_CUSTOM_CONTEXT_KEY) {
            let n = "";
            return n = typeof t.bindings > "u" ? r(t, i) : t.bindings().context || "", n;
          }
          function s(t, r, i = e.PINO_CUSTOM_CONTEXT_KEY) {
            const s = n(t, i);
            return s.trim() ? `${s}/${r}` : r;
          }
          function o(t, r, n = e.PINO_CUSTOM_CONTEXT_KEY) {
            const o = s(t, r, n);
            return i(t.child({
              context: o
            }), o, n);
          }
          return ci.getDefaultLoggerOptions = t, ci.getBrowserLoggerContext = r, ci.setBrowserLoggerContext = i, ci.getLoggerContext = n, 
          ci.formatChildLoggerContext = s, ci.generateChildLogger = o, ci;
        }
        !function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.pino = void 0;
          const t = ni, r = t.__importDefault(c);
          Object.defineProperty(e, "pino", {
            enumerable: !0,
            get: function() {
              return r.default;
            }
          }), t.__exportStar(oi(), e), t.__exportStar(hi(), e);
        }(jr);
        class ui extends vr {
          constructor(e) {
            super(), this.opts = e, this.protocol = "wc", this.version = 2;
          }
        }
        class li extends vr {
          constructor(e, t) {
            super(), this.core = e, this.logger = t, this.records = new Map;
          }
        }
        class pi {
          constructor(e, t) {
            this.logger = e, this.core = t;
          }
        }
        class fi extends vr {
          constructor(e, t) {
            super(), this.relayer = e, this.logger = t;
          }
        }
        class di extends vr {
          constructor(e) {
            super();
          }
        }
        class yi {
          constructor(e, t, r, i) {
            this.core = e, this.logger = t, this.name = r;
          }
        }
        class gi extends vr {
          constructor(e, t) {
            super(), this.relayer = e, this.logger = t;
          }
        }
        class bi extends vr {
          constructor(e, t) {
            super(), this.core = e, this.logger = t;
          }
        }
        class vi {
          constructor(e) {
            this.opts = e, this.protocol = "wc", this.version = 2;
          }
        }
        class mi {
          constructor(e) {
            this.client = e;
          }
        }
        function wi(e) {
          if ("string" != typeof e) throw new Error("Cannot safe json parse value of type " + typeof e);
          try {
            return JSON.parse(e);
          } catch {
            return e;
          }
        }
        function _i(e) {
          return "string" == typeof e ? e : JSON.stringify(e);
        }
        var Ei = {}, Si = {}, Oi = {}, Ii = {};
        Object.defineProperty(Ii, "__esModule", {
          value: !0
        }), Ii.BrowserRandomSource = void 0;
        const Pi = 65536;
        class xi {
          constructor() {
            this.isAvailable = !1, this.isInstantiated = !1;
            const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
            e && void 0 !== e.getRandomValues && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
          }
          randomBytes(e) {
            if (!this.isAvailable || !this._crypto) throw new Error("Browser random byte generator is not available.");
            const t = new Uint8Array(e);
            for (let r = 0; r < t.length; r += Pi) this._crypto.getRandomValues(t.subarray(r, r + Math.min(t.length - r, Pi)));
            return t;
          }
        }
        function Ni(e) {
          throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
        }
        Ii.BrowserRandomSource = xi;
        var Ti = {}, Ai = {};
        function Ri(e) {
          for (var t = 0; t < e.length; t++) e[t] = 0;
          return e;
        }
        Object.defineProperty(Ai, "__esModule", {
          value: !0
        }), Ai.wipe = Ri;
        var ji = {}, Li = n(Object.freeze({
          __proto__: null,
          default: ji
        }));
        Object.defineProperty(Ti, "__esModule", {
          value: !0
        }), Ti.NodeRandomSource = void 0;
        const Ci = Ai;
        class Ui {
          constructor() {
            if (this.isAvailable = !1, this.isInstantiated = !1, typeof Ni < "u") {
              const e = Li;
              e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0);
            }
          }
          randomBytes(e) {
            if (!this.isAvailable || !this._crypto) throw new Error("Node.js random byte generator is not available.");
            let t = this._crypto.randomBytes(e);
            if (t.length !== e) throw new Error("NodeRandomSource: got fewer bytes than requested");
            const r = new Uint8Array(e);
            for (let i = 0; i < r.length; i++) r[i] = t[i];
            return (0, Ci.wipe)(t), r;
          }
        }
        Ti.NodeRandomSource = Ui, Object.defineProperty(Oi, "__esModule", {
          value: !0
        }), Oi.SystemRandomSource = void 0;
        const Mi = Ii, Di = Ti;
        class ki {
          constructor() {
            return this.isAvailable = !1, this.name = "", this._source = new Mi.BrowserRandomSource, this._source.isAvailable ? (this.isAvailable = !0, 
            void (this.name = "Browser")) : (this._source = new Di.NodeRandomSource, this._source.isAvailable ? (this.isAvailable = !0, 
            void (this.name = "Node")) : void 0);
          }
          randomBytes(e) {
            if (!this.isAvailable) throw new Error("System random byte generator is not available.");
            return this._source.randomBytes(e);
          }
        }
        Oi.SystemRandomSource = ki;
        var zi = {}, Hi = {};
        (function(e) {
          function t(e, t) {
            var r = 65535 & e, i = 65535 & t;
            return r * i + ((e >>> 16 & 65535) * i + r * (t >>> 16 & 65535) << 16 >>> 0) | 0;
          }
          function r(e, t) {
            return e + t | 0;
          }
          function i(e, t) {
            return e - t | 0;
          }
          function n(e, t) {
            return e << t | e >>> 32 - t;
          }
          function s(e, t) {
            return e << 32 - t | e >>> t;
          }
          function o(e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
          }
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.mul = Math.imul || t, e.add = r, e.sub = i, e.rotl = n, e.rotr = s, e.isInteger = Number.isInteger || o, e.MAX_SAFE_INTEGER = 9007199254740991, 
          e.isSafeInteger = function(t) {
            return e.isInteger(t) && t >= -e.MAX_SAFE_INTEGER && t <= e.MAX_SAFE_INTEGER;
          };
        })(Hi), Object.defineProperty(zi, "__esModule", {
          value: !0
        });
        var $i = Hi;
        function qi(e, t) {
          return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16;
        }
        function Ki(e, t) {
          return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0;
        }
        function Vi(e, t) {
          return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16;
        }
        function Bi(e, t) {
          return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0;
        }
        function Fi(e, t, r) {
          return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), t[r + 0] = e >>> 8, t[r + 1] = e >>> 0, t;
        }
        function Gi(e, t, r) {
          return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t;
        }
        function Wi(e, t) {
          return void 0 === t && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
        }
        function Yi(e, t) {
          return void 0 === t && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
        }
        function Ji(e, t) {
          return void 0 === t && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
        }
        function Xi(e, t) {
          return void 0 === t && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0;
        }
        function Zi(e, t, r) {
          return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), t[r + 0] = e >>> 24, t[r + 1] = e >>> 16, t[r + 2] = e >>> 8, 
          t[r + 3] = e >>> 0, t;
        }
        function Qi(e, t, r) {
          return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t[r + 2] = e >>> 16, 
          t[r + 3] = e >>> 24, t;
        }
        function en(e, t) {
          void 0 === t && (t = 0);
          var r = Wi(e, t), i = Wi(e, t + 4);
          return 4294967296 * r + i - 4294967296 * (i >> 31);
        }
        function tn(e, t) {
          return void 0 === t && (t = 0), 4294967296 * Yi(e, t) + Yi(e, t + 4);
        }
        function rn(e, t) {
          void 0 === t && (t = 0);
          var r = Ji(e, t);
          return 4294967296 * Ji(e, t + 4) + r - 4294967296 * (r >> 31);
        }
        function nn(e, t) {
          void 0 === t && (t = 0);
          var r = Xi(e, t);
          return 4294967296 * Xi(e, t + 4) + r;
        }
        function sn(e, t, r) {
          return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), Zi(e / 4294967296 >>> 0, t, r), Zi(e >>> 0, t, r + 4), 
          t;
        }
        function on(e, t, r) {
          return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), Qi(e >>> 0, t, r), Qi(e / 4294967296 >>> 0, t, r + 4), 
          t;
        }
        function an(e, t, r) {
          if (void 0 === r && (r = 0), e % 8 != 0) throw new Error("readUintBE supports only bitLengths divisible by 8");
          if (e / 8 > t.length - r) throw new Error("readUintBE: array is too short for the given bitLength");
          for (var i = 0, n = 1, s = e / 8 + r - 1; s >= r; s--) i += t[s] * n, n *= 256;
          return i;
        }
        function cn(e, t, r) {
          if (void 0 === r && (r = 0), e % 8 != 0) throw new Error("readUintLE supports only bitLengths divisible by 8");
          if (e / 8 > t.length - r) throw new Error("readUintLE: array is too short for the given bitLength");
          for (var i = 0, n = 1, s = r; s < r + e / 8; s++) i += t[s] * n, n *= 256;
          return i;
        }
        function hn(e, t, r, i) {
          if (void 0 === r && (r = new Uint8Array(e / 8)), void 0 === i && (i = 0), e % 8 != 0) throw new Error("writeUintBE supports only bitLengths divisible by 8");
          if (!$i.isSafeInteger(t)) throw new Error("writeUintBE value must be an integer");
          for (var n = 1, s = e / 8 + i - 1; s >= i; s--) r[s] = t / n & 255, n *= 256;
          return r;
        }
        function un(e, t, r, i) {
          if (void 0 === r && (r = new Uint8Array(e / 8)), void 0 === i && (i = 0), e % 8 != 0) throw new Error("writeUintLE supports only bitLengths divisible by 8");
          if (!$i.isSafeInteger(t)) throw new Error("writeUintLE value must be an integer");
          for (var n = 1, s = i; s < i + e / 8; s++) r[s] = t / n & 255, n *= 256;
          return r;
        }
        function ln(e, t) {
          return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t);
        }
        function pn(e, t) {
          return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t, !0);
        }
        function fn(e, t) {
          return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t);
        }
        function dn(e, t) {
          return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t, !0);
        }
        function yn(e, t, r) {
          return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e), 
          t;
        }
        function gn(e, t, r) {
          return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e, !0), 
          t;
        }
        function bn(e, t, r) {
          return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e), 
          t;
        }
        function vn(e, t, r) {
          return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e, !0), 
          t;
        }
        zi.readInt16BE = qi, zi.readUint16BE = Ki, zi.readInt16LE = Vi, zi.readUint16LE = Bi, zi.writeUint16BE = Fi, zi.writeInt16BE = Fi, 
        zi.writeUint16LE = Gi, zi.writeInt16LE = Gi, zi.readInt32BE = Wi, zi.readUint32BE = Yi, zi.readInt32LE = Ji, zi.readUint32LE = Xi, 
        zi.writeUint32BE = Zi, zi.writeInt32BE = Zi, zi.writeUint32LE = Qi, zi.writeInt32LE = Qi, zi.readInt64BE = en, zi.readUint64BE = tn, 
        zi.readInt64LE = rn, zi.readUint64LE = nn, zi.writeUint64BE = sn, zi.writeInt64BE = sn, zi.writeUint64LE = on, zi.writeInt64LE = on, 
        zi.readUintBE = an, zi.readUintLE = cn, zi.writeUintBE = hn, zi.writeUintLE = un, zi.readFloat32BE = ln, zi.readFloat32LE = pn, 
        zi.readFloat64BE = fn, zi.readFloat64LE = dn, zi.writeFloat32BE = yn, zi.writeFloat32LE = gn, zi.writeFloat64BE = bn, zi.writeFloat64LE = vn, 
        function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.randomStringForEntropy = e.randomString = e.randomUint32 = e.randomBytes = e.defaultRandomSource = void 0;
          const t = Oi, r = zi, i = Ai;
          function n(t, r = e.defaultRandomSource) {
            return r.randomBytes(t);
          }
          function s(t = e.defaultRandomSource) {
            const s = n(4, t), o = (0, r.readUint32LE)(s);
            return (0, i.wipe)(s), o;
          }
          e.defaultRandomSource = new t.SystemRandomSource, e.randomBytes = n, e.randomUint32 = s;
          const o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          function a(t, r = o, s = e.defaultRandomSource) {
            if (r.length < 2) throw new Error("randomString charset is too short");
            if (r.length > 256) throw new Error("randomString charset is too long");
            let a = "";
            const c = r.length, h = 256 - 256 % c;
            for (;t > 0; ) {
              const e = n(Math.ceil(256 * t / h), s);
              for (let i = 0; i < e.length && t > 0; i++) {
                const n = e[i];
                n < h && (a += r.charAt(n % c), t--);
              }
              (0, i.wipe)(e);
            }
            return a;
          }
          function c(t, r = o, i = e.defaultRandomSource) {
            return a(Math.ceil(t / (Math.log(r.length) / Math.LN2)), r, i);
          }
          e.randomString = a, e.randomStringForEntropy = c;
        }(Si);
        var mn = {};
        (function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var t = zi, r = Ai;
          e.DIGEST_LENGTH = 64, e.BLOCK_SIZE = 128;
          var i = function() {
            function i() {
              this.digestLength = e.DIGEST_LENGTH, this.blockSize = e.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), 
              this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, 
              this._bytesHashed = 0, this._finished = !1, this.reset();
            }
            return i.prototype._initState = function() {
              this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, 
              this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, 
              this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, 
              this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
            }, i.prototype.reset = function() {
              return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
            }, i.prototype.clean = function() {
              r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset();
            }, i.prototype.update = function(t, r) {
              if (void 0 === r && (r = t.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
              var i = 0;
              if (this._bytesHashed += r, this._bufferLength > 0) {
                for (;this._bufferLength < e.BLOCK_SIZE && r > 0; ) this._buffer[this._bufferLength++] = t[i++], r--;
                this._bufferLength === this.blockSize && (s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), 
                this._bufferLength = 0);
              }
              for (r >= this.blockSize && (i = s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, t, i, r), r %= this.blockSize); r > 0; ) this._buffer[this._bufferLength++] = t[i++], 
              r--;
              return this;
            }, i.prototype.finish = function(e) {
              if (!this._finished) {
                var r = this._bytesHashed, i = this._bufferLength, n = r / 536870912 | 0, o = r << 3, a = r % 128 < 112 ? 128 : 256;
                this._buffer[i] = 128;
                for (var c = i + 1; c < a - 8; c++) this._buffer[c] = 0;
                t.writeUint32BE(n, this._buffer, a - 8), t.writeUint32BE(o, this._buffer, a - 4), s(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, a), 
                this._finished = !0;
              }
              for (c = 0; c < this.digestLength / 8; c++) t.writeUint32BE(this._stateHi[c], e, 8 * c), t.writeUint32BE(this._stateLo[c], e, 8 * c + 4);
              return this;
            }, i.prototype.digest = function() {
              var e = new Uint8Array(this.digestLength);
              return this.finish(e), e;
            }, i.prototype.saveState = function() {
              if (this._finished) throw new Error("SHA256: cannot save finished state");
              return {
                stateHi: new Int32Array(this._stateHi),
                stateLo: new Int32Array(this._stateLo),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
              };
            }, i.prototype.restoreState = function(e) {
              return this._stateHi.set(e.stateHi), this._stateLo.set(e.stateLo), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), 
              this._bytesHashed = e.bytesHashed, this._finished = !1, this;
            }, i.prototype.cleanSavedState = function(e) {
              r.wipe(e.stateHi), r.wipe(e.stateLo), e.buffer && r.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0;
            }, i;
          }();
          e.SHA512 = i;
          var n = new Int32Array([ 1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591 ]);
          function s(e, r, i, s, o, a, c) {
            for (var h, u, l, p, f, d, y, g, b = i[0], v = i[1], m = i[2], w = i[3], _ = i[4], E = i[5], S = i[6], O = i[7], I = s[0], P = s[1], x = s[2], N = s[3], T = s[4], A = s[5], R = s[6], j = s[7]; c >= 128; ) {
              for (var L = 0; L < 16; L++) {
                var C = 8 * L + a;
                e[L] = t.readUint32BE(o, C), r[L] = t.readUint32BE(o, C + 4);
              }
              for (L = 0; L < 80; L++) {
                var U = b, M = v, D = m, k = w, z = _, H = E, $ = S, q = O, K = I, V = P, B = x, F = N, G = T, W = A, Y = R, J = j;
                if (f = 65535 & (u = j), d = u >>> 16, y = 65535 & (h = O), g = h >>> 16, f += 65535 & (u = (T >>> 14 | _ << 18) ^ (T >>> 18 | _ << 14) ^ (_ >>> 9 | T << 23)), 
                d += u >>> 16, y += 65535 & (h = (_ >>> 14 | T << 18) ^ (_ >>> 18 | T << 14) ^ (T >>> 9 | _ << 23)), g += h >>> 16, f += 65535 & (u = T & A ^ ~T & R), 
                d += u >>> 16, y += 65535 & (h = _ & E ^ ~_ & S), g += h >>> 16, h = n[2 * L], f += 65535 & (u = n[2 * L + 1]), d += u >>> 16, 
                y += 65535 & h, g += h >>> 16, h = e[L % 16], d += (u = r[L % 16]) >>> 16, y += 65535 & h, g += h >>> 16, y += (d += (f += 65535 & u) >>> 16) >>> 16, 
                f = 65535 & (u = p = 65535 & f | d << 16), d = u >>> 16, y = 65535 & (h = l = 65535 & y | (g += y >>> 16) << 16), g = h >>> 16, 
                f += 65535 & (u = (I >>> 28 | b << 4) ^ (b >>> 2 | I << 30) ^ (b >>> 7 | I << 25)), d += u >>> 16, y += 65535 & (h = (b >>> 28 | I << 4) ^ (I >>> 2 | b << 30) ^ (I >>> 7 | b << 25)), 
                g += h >>> 16, d += (u = I & P ^ I & x ^ P & x) >>> 16, y += 65535 & (h = b & v ^ b & m ^ v & m), g += h >>> 16, q = 65535 & (y += (d += (f += 65535 & u) >>> 16) >>> 16) | (g += y >>> 16) << 16, 
                J = 65535 & f | d << 16, f = 65535 & (u = F), d = u >>> 16, y = 65535 & (h = k), g = h >>> 16, d += (u = p) >>> 16, y += 65535 & (h = l), 
                g += h >>> 16, v = U, m = M, w = D, _ = k = 65535 & (y += (d += (f += 65535 & u) >>> 16) >>> 16) | (g += y >>> 16) << 16, 
                E = z, S = H, O = $, b = q, P = K, x = V, N = B, T = F = 65535 & f | d << 16, A = G, R = W, j = Y, I = J, L % 16 == 15) for (C = 0; C < 16; C++) h = e[C], 
                f = 65535 & (u = r[C]), d = u >>> 16, y = 65535 & h, g = h >>> 16, h = e[(C + 9) % 16], f += 65535 & (u = r[(C + 9) % 16]), 
                d += u >>> 16, y += 65535 & h, g += h >>> 16, l = e[(C + 1) % 16], f += 65535 & (u = ((p = r[(C + 1) % 16]) >>> 1 | l << 31) ^ (p >>> 8 | l << 24) ^ (p >>> 7 | l << 25)), 
                d += u >>> 16, y += 65535 & (h = (l >>> 1 | p << 31) ^ (l >>> 8 | p << 24) ^ l >>> 7), g += h >>> 16, l = e[(C + 14) % 16], 
                d += (u = ((p = r[(C + 14) % 16]) >>> 19 | l << 13) ^ (l >>> 29 | p << 3) ^ (p >>> 6 | l << 26)) >>> 16, y += 65535 & (h = (l >>> 19 | p << 13) ^ (p >>> 29 | l << 3) ^ l >>> 6), 
                g += h >>> 16, g += (y += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, e[C] = 65535 & y | g << 16, r[C] = 65535 & f | d << 16;
              }
              f = 65535 & (u = I), d = u >>> 16, y = 65535 & (h = b), g = h >>> 16, h = i[0], d += (u = s[0]) >>> 16, y += 65535 & h, 
              g += h >>> 16, g += (y += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, i[0] = b = 65535 & y | g << 16, s[0] = I = 65535 & f | d << 16, 
              f = 65535 & (u = P), d = u >>> 16, y = 65535 & (h = v), g = h >>> 16, h = i[1], d += (u = s[1]) >>> 16, y += 65535 & h, 
              g += h >>> 16, g += (y += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, i[1] = v = 65535 & y | g << 16, s[1] = P = 65535 & f | d << 16, 
              f = 65535 & (u = x), d = u >>> 16, y = 65535 & (h = m), g = h >>> 16, h = i[2], d += (u = s[2]) >>> 16, y += 65535 & h, 
              g += h >>> 16, g += (y += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, i[2] = m = 65535 & y | g << 16, s[2] = x = 65535 & f | d << 16, 
              f = 65535 & (u = N), d = u >>> 16, y = 65535 & (h = w), g = h >>> 16, h = i[3], d += (u = s[3]) >>> 16, y += 65535 & h, 
              g += h >>> 16, g += (y += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, i[3] = w = 65535 & y | g << 16, s[3] = N = 65535 & f | d << 16, 
              f = 65535 & (u = T), d = u >>> 16, y = 65535 & (h = _), g = h >>> 16, h = i[4], d += (u = s[4]) >>> 16, y += 65535 & h, 
              g += h >>> 16, g += (y += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, i[4] = _ = 65535 & y | g << 16, s[4] = T = 65535 & f | d << 16, 
              f = 65535 & (u = A), d = u >>> 16, y = 65535 & (h = E), g = h >>> 16, h = i[5], d += (u = s[5]) >>> 16, y += 65535 & h, 
              g += h >>> 16, g += (y += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, i[5] = E = 65535 & y | g << 16, s[5] = A = 65535 & f | d << 16, 
              f = 65535 & (u = R), d = u >>> 16, y = 65535 & (h = S), g = h >>> 16, h = i[6], d += (u = s[6]) >>> 16, y += 65535 & h, 
              g += h >>> 16, g += (y += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, i[6] = S = 65535 & y | g << 16, s[6] = R = 65535 & f | d << 16, 
              f = 65535 & (u = j), d = u >>> 16, y = 65535 & (h = O), g = h >>> 16, h = i[7], d += (u = s[7]) >>> 16, y += 65535 & h, 
              g += h >>> 16, g += (y += (d += (f += 65535 & u) >>> 16) >>> 16) >>> 16, i[7] = O = 65535 & y | g << 16, s[7] = j = 65535 & f | d << 16, 
              a += 128, c -= 128;
            }
            return a;
          }
          function o(e) {
            var t = new i;
            t.update(e);
            var r = t.digest();
            return t.clean(), r;
          }
          e.hash = o;
        })(mn), function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.convertSecretKeyToX25519 = e.convertPublicKeyToX25519 = e.verify = e.sign = e.extractPublicKeyFromSecretKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.SEED_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = e.SIGNATURE_LENGTH = void 0;
          const t = Si, r = mn, i = Ai;
          function n(e) {
            const t = new Float64Array(16);
            if (e) for (let r = 0; r < e.length; r++) t[r] = e[r];
            return t;
          }
          e.SIGNATURE_LENGTH = 64, e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 64, e.SEED_LENGTH = 32;
          new Uint8Array(32)[0] = 9;
          const s = n(), o = n([ 1 ]), a = n([ 30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995 ]), c = n([ 61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222 ]), h = n([ 54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553 ]), u = n([ 26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214 ]), l = n([ 41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139 ]);
          function p(e, t) {
            for (let r = 0; r < 16; r++) e[r] = 0 | t[r];
          }
          function f(e) {
            let t = 1;
            for (let r = 0; r < 16; r++) {
              let i = e[r] + t + 65535;
              t = Math.floor(i / 65536), e[r] = i - 65536 * t;
            }
            e[0] += t - 1 + 37 * (t - 1);
          }
          function d(e, t, r) {
            const i = ~(r - 1);
            for (let n = 0; n < 16; n++) {
              const r = i & (e[n] ^ t[n]);
              e[n] ^= r, t[n] ^= r;
            }
          }
          function y(e, t) {
            const r = n(), i = n();
            for (let n = 0; n < 16; n++) i[n] = t[n];
            f(i), f(i), f(i);
            for (let n = 0; n < 2; n++) {
              r[0] = i[0] - 65517;
              for (let t = 1; t < 15; t++) r[t] = i[t] - 65535 - (r[t - 1] >> 16 & 1), r[t - 1] &= 65535;
              r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
              const e = r[15] >> 16 & 1;
              r[14] &= 65535, d(i, r, 1 - e);
            }
            for (let n = 0; n < 16; n++) e[2 * n] = 255 & i[n], e[2 * n + 1] = i[n] >> 8;
          }
          function g(e, t) {
            let r = 0;
            for (let i = 0; i < 32; i++) r |= e[i] ^ t[i];
            return (1 & r - 1 >>> 8) - 1;
          }
          function b(e, t) {
            const r = new Uint8Array(32), i = new Uint8Array(32);
            return y(r, e), y(i, t), g(r, i);
          }
          function v(e) {
            const t = new Uint8Array(32);
            return y(t, e), 1 & t[0];
          }
          function m(e, t) {
            for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
            e[15] &= 32767;
          }
          function w(e, t, r) {
            for (let i = 0; i < 16; i++) e[i] = t[i] + r[i];
          }
          function _(e, t, r) {
            for (let i = 0; i < 16; i++) e[i] = t[i] - r[i];
          }
          function E(e, t, r) {
            let i, n, s = 0, o = 0, a = 0, c = 0, h = 0, u = 0, l = 0, p = 0, f = 0, d = 0, y = 0, g = 0, b = 0, v = 0, m = 0, w = 0, _ = 0, E = 0, S = 0, O = 0, I = 0, P = 0, x = 0, N = 0, T = 0, A = 0, R = 0, j = 0, L = 0, C = 0, U = 0, M = r[0], D = r[1], k = r[2], z = r[3], H = r[4], $ = r[5], q = r[6], K = r[7], V = r[8], B = r[9], F = r[10], G = r[11], W = r[12], Y = r[13], J = r[14], X = r[15];
            i = t[0], s += i * M, o += i * D, a += i * k, c += i * z, h += i * H, u += i * $, l += i * q, p += i * K, f += i * V, d += i * B, 
            y += i * F, g += i * G, b += i * W, v += i * Y, m += i * J, w += i * X, i = t[1], o += i * M, a += i * D, c += i * k, h += i * z, 
            u += i * H, l += i * $, p += i * q, f += i * K, d += i * V, y += i * B, g += i * F, b += i * G, v += i * W, m += i * Y, 
            w += i * J, _ += i * X, i = t[2], a += i * M, c += i * D, h += i * k, u += i * z, l += i * H, p += i * $, f += i * q, d += i * K, 
            y += i * V, g += i * B, b += i * F, v += i * G, m += i * W, w += i * Y, _ += i * J, E += i * X, i = t[3], c += i * M, h += i * D, 
            u += i * k, l += i * z, p += i * H, f += i * $, d += i * q, y += i * K, g += i * V, b += i * B, v += i * F, m += i * G, 
            w += i * W, _ += i * Y, E += i * J, S += i * X, i = t[4], h += i * M, u += i * D, l += i * k, p += i * z, f += i * H, d += i * $, 
            y += i * q, g += i * K, b += i * V, v += i * B, m += i * F, w += i * G, _ += i * W, E += i * Y, S += i * J, O += i * X, 
            i = t[5], u += i * M, l += i * D, p += i * k, f += i * z, d += i * H, y += i * $, g += i * q, b += i * K, v += i * V, m += i * B, 
            w += i * F, _ += i * G, E += i * W, S += i * Y, O += i * J, I += i * X, i = t[6], l += i * M, p += i * D, f += i * k, d += i * z, 
            y += i * H, g += i * $, b += i * q, v += i * K, m += i * V, w += i * B, _ += i * F, E += i * G, S += i * W, O += i * Y, 
            I += i * J, P += i * X, i = t[7], p += i * M, f += i * D, d += i * k, y += i * z, g += i * H, b += i * $, v += i * q, m += i * K, 
            w += i * V, _ += i * B, E += i * F, S += i * G, O += i * W, I += i * Y, P += i * J, x += i * X, i = t[8], f += i * M, d += i * D, 
            y += i * k, g += i * z, b += i * H, v += i * $, m += i * q, w += i * K, _ += i * V, E += i * B, S += i * F, O += i * G, 
            I += i * W, P += i * Y, x += i * J, N += i * X, i = t[9], d += i * M, y += i * D, g += i * k, b += i * z, v += i * H, m += i * $, 
            w += i * q, _ += i * K, E += i * V, S += i * B, O += i * F, I += i * G, P += i * W, x += i * Y, N += i * J, T += i * X, 
            i = t[10], y += i * M, g += i * D, b += i * k, v += i * z, m += i * H, w += i * $, _ += i * q, E += i * K, S += i * V, O += i * B, 
            I += i * F, P += i * G, x += i * W, N += i * Y, T += i * J, A += i * X, i = t[11], g += i * M, b += i * D, v += i * k, m += i * z, 
            w += i * H, _ += i * $, E += i * q, S += i * K, O += i * V, I += i * B, P += i * F, x += i * G, N += i * W, T += i * Y, 
            A += i * J, R += i * X, i = t[12], b += i * M, v += i * D, m += i * k, w += i * z, _ += i * H, E += i * $, S += i * q, O += i * K, 
            I += i * V, P += i * B, x += i * F, N += i * G, T += i * W, A += i * Y, R += i * J, j += i * X, i = t[13], v += i * M, m += i * D, 
            w += i * k, _ += i * z, E += i * H, S += i * $, O += i * q, I += i * K, P += i * V, x += i * B, N += i * F, T += i * G, 
            A += i * W, R += i * Y, j += i * J, L += i * X, i = t[14], m += i * M, w += i * D, _ += i * k, E += i * z, S += i * H, O += i * $, 
            I += i * q, P += i * K, x += i * V, N += i * B, T += i * F, A += i * G, R += i * W, j += i * Y, L += i * J, C += i * X, 
            i = t[15], w += i * M, _ += i * D, E += i * k, S += i * z, O += i * H, I += i * $, P += i * q, x += i * K, N += i * V, T += i * B, 
            A += i * F, R += i * G, j += i * W, L += i * Y, C += i * J, U += i * X, s += 38 * _, o += 38 * E, a += 38 * S, c += 38 * O, 
            h += 38 * I, u += 38 * P, l += 38 * x, p += 38 * N, f += 38 * T, d += 38 * A, y += 38 * R, g += 38 * j, b += 38 * L, v += 38 * C, 
            m += 38 * U, n = 1, i = s + n + 65535, n = Math.floor(i / 65536), s = i - 65536 * n, i = o + n + 65535, n = Math.floor(i / 65536), 
            o = i - 65536 * n, i = a + n + 65535, n = Math.floor(i / 65536), a = i - 65536 * n, i = c + n + 65535, n = Math.floor(i / 65536), 
            c = i - 65536 * n, i = h + n + 65535, n = Math.floor(i / 65536), h = i - 65536 * n, i = u + n + 65535, n = Math.floor(i / 65536), 
            u = i - 65536 * n, i = l + n + 65535, n = Math.floor(i / 65536), l = i - 65536 * n, i = p + n + 65535, n = Math.floor(i / 65536), 
            p = i - 65536 * n, i = f + n + 65535, n = Math.floor(i / 65536), f = i - 65536 * n, i = d + n + 65535, n = Math.floor(i / 65536), 
            d = i - 65536 * n, i = y + n + 65535, n = Math.floor(i / 65536), y = i - 65536 * n, i = g + n + 65535, n = Math.floor(i / 65536), 
            g = i - 65536 * n, i = b + n + 65535, n = Math.floor(i / 65536), b = i - 65536 * n, i = v + n + 65535, n = Math.floor(i / 65536), 
            v = i - 65536 * n, i = m + n + 65535, n = Math.floor(i / 65536), m = i - 65536 * n, i = w + n + 65535, n = Math.floor(i / 65536), 
            w = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = 1, i = s + n + 65535, n = Math.floor(i / 65536), s = i - 65536 * n, i = o + n + 65535, 
            n = Math.floor(i / 65536), o = i - 65536 * n, i = a + n + 65535, n = Math.floor(i / 65536), a = i - 65536 * n, i = c + n + 65535, 
            n = Math.floor(i / 65536), c = i - 65536 * n, i = h + n + 65535, n = Math.floor(i / 65536), h = i - 65536 * n, i = u + n + 65535, 
            n = Math.floor(i / 65536), u = i - 65536 * n, i = l + n + 65535, n = Math.floor(i / 65536), l = i - 65536 * n, i = p + n + 65535, 
            n = Math.floor(i / 65536), p = i - 65536 * n, i = f + n + 65535, n = Math.floor(i / 65536), f = i - 65536 * n, i = d + n + 65535, 
            n = Math.floor(i / 65536), d = i - 65536 * n, i = y + n + 65535, n = Math.floor(i / 65536), y = i - 65536 * n, i = g + n + 65535, 
            n = Math.floor(i / 65536), g = i - 65536 * n, i = b + n + 65535, n = Math.floor(i / 65536), b = i - 65536 * n, i = v + n + 65535, 
            n = Math.floor(i / 65536), v = i - 65536 * n, i = m + n + 65535, n = Math.floor(i / 65536), m = i - 65536 * n, i = w + n + 65535, 
            n = Math.floor(i / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = h, 
            e[5] = u, e[6] = l, e[7] = p, e[8] = f, e[9] = d, e[10] = y, e[11] = g, e[12] = b, e[13] = v, e[14] = m, e[15] = w;
          }
          function S(e, t) {
            E(e, t, t);
          }
          function O(e, t) {
            const r = n();
            let i;
            for (i = 0; i < 16; i++) r[i] = t[i];
            for (i = 253; i >= 0; i--) S(r, r), 2 !== i && 4 !== i && E(r, r, t);
            for (i = 0; i < 16; i++) e[i] = r[i];
          }
          function I(e, t) {
            const r = n();
            let i;
            for (i = 0; i < 16; i++) r[i] = t[i];
            for (i = 250; i >= 0; i--) S(r, r), 1 !== i && E(r, r, t);
            for (i = 0; i < 16; i++) e[i] = r[i];
          }
          function P(e, t) {
            const r = n(), i = n(), s = n(), o = n(), a = n(), h = n(), u = n(), l = n(), p = n();
            _(r, e[1], e[0]), _(p, t[1], t[0]), E(r, r, p), w(i, e[0], e[1]), w(p, t[0], t[1]), E(i, i, p), E(s, e[3], t[3]), E(s, s, c), 
            E(o, e[2], t[2]), w(o, o, o), _(a, i, r), _(h, o, s), w(u, o, s), w(l, i, r), E(e[0], a, h), E(e[1], l, u), E(e[2], u, h), 
            E(e[3], a, l);
          }
          function x(e, t, r) {
            for (let i = 0; i < 4; i++) d(e[i], t[i], r);
          }
          function N(e, t) {
            const r = n(), i = n(), s = n();
            O(s, t[2]), E(r, t[0], s), E(i, t[1], s), y(e, i), e[31] ^= v(r) << 7;
          }
          function T(e, t, r) {
            p(e[0], s), p(e[1], o), p(e[2], o), p(e[3], s);
            for (let i = 255; i >= 0; --i) {
              const n = r[i / 8 | 0] >> (7 & i) & 1;
              x(e, t, n), P(t, e), P(e, e), x(e, t, n);
            }
          }
          function A(e, t) {
            const r = [ n(), n(), n(), n() ];
            p(r[0], h), p(r[1], u), p(r[2], o), E(r[3], h, u), T(e, r, t);
          }
          function R(t) {
            if (t.length !== e.SEED_LENGTH) throw new Error(`ed25519: seed must be ${e.SEED_LENGTH} bytes`);
            const i = (0, r.hash)(t);
            i[0] &= 248, i[31] &= 127, i[31] |= 64;
            const s = new Uint8Array(32), o = [ n(), n(), n(), n() ];
            A(o, i), N(s, o);
            const a = new Uint8Array(64);
            return a.set(t), a.set(s, 32), {
              publicKey: s,
              secretKey: a
            };
          }
          function j(e) {
            const r = (0, t.randomBytes)(32, e), n = R(r);
            return (0, i.wipe)(r), n;
          }
          function L(t) {
            if (t.length !== e.SECRET_KEY_LENGTH) throw new Error(`ed25519: secret key must be ${e.SECRET_KEY_LENGTH} bytes`);
            return new Uint8Array(t.subarray(32));
          }
          e.generateKeyPairFromSeed = R, e.generateKeyPair = j, e.extractPublicKeyFromSecretKey = L;
          const C = new Float64Array([ 237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16 ]);
          function U(e, t) {
            let r, i, n, s;
            for (i = 63; i >= 32; --i) {
              for (r = 0, n = i - 32, s = i - 12; n < s; ++n) t[n] += r - 16 * t[i] * C[n - (i - 32)], r = Math.floor((t[n] + 128) / 256), 
              t[n] -= 256 * r;
              t[n] += r, t[i] = 0;
            }
            for (r = 0, n = 0; n < 32; n++) t[n] += r - (t[31] >> 4) * C[n], r = t[n] >> 8, t[n] &= 255;
            for (n = 0; n < 32; n++) t[n] -= r * C[n];
            for (i = 0; i < 32; i++) t[i + 1] += t[i] >> 8, e[i] = 255 & t[i];
          }
          function M(e) {
            const t = new Float64Array(64);
            for (let r = 0; r < 64; r++) t[r] = e[r];
            for (let r = 0; r < 64; r++) e[r] = 0;
            U(e, t);
          }
          function D(e, t) {
            const i = new Float64Array(64), s = [ n(), n(), n(), n() ], o = (0, r.hash)(e.subarray(0, 32));
            o[0] &= 248, o[31] &= 127, o[31] |= 64;
            const a = new Uint8Array(64);
            a.set(o.subarray(32), 32);
            const c = new r.SHA512;
            c.update(a.subarray(32)), c.update(t);
            const h = c.digest();
            c.clean(), M(h), A(s, h), N(a, s), c.reset(), c.update(a.subarray(0, 32)), c.update(e.subarray(32)), c.update(t);
            const u = c.digest();
            M(u);
            for (let r = 0; r < 32; r++) i[r] = h[r];
            for (let r = 0; r < 32; r++) for (let e = 0; e < 32; e++) i[r + e] += u[r] * o[e];
            return U(a.subarray(32), i), a;
          }
          function k(e, t) {
            const r = n(), i = n(), c = n(), h = n(), u = n(), f = n(), d = n();
            return p(e[2], o), m(e[1], t), S(c, e[1]), E(h, c, a), _(c, c, e[2]), w(h, e[2], h), S(u, h), S(f, u), E(d, f, u), E(r, d, c), 
            E(r, r, h), I(r, r), E(r, r, c), E(r, r, h), E(r, r, h), E(e[0], r, h), S(i, e[0]), E(i, i, h), b(i, c) && E(e[0], e[0], l), 
            S(i, e[0]), E(i, i, h), b(i, c) ? -1 : (v(e[0]) === t[31] >> 7 && _(e[0], s, e[0]), E(e[3], e[0], e[1]), 0);
          }
          function z(t, i, s) {
            const o = new Uint8Array(32), a = [ n(), n(), n(), n() ], c = [ n(), n(), n(), n() ];
            if (s.length !== e.SIGNATURE_LENGTH) throw new Error(`ed25519: signature must be ${e.SIGNATURE_LENGTH} bytes`);
            if (k(c, t)) return !1;
            const h = new r.SHA512;
            h.update(s.subarray(0, 32)), h.update(t), h.update(i);
            const u = h.digest();
            return M(u), T(a, c, u), A(c, s.subarray(32)), P(a, c), N(o, a), !g(s, o);
          }
          function H(e) {
            let t = [ n(), n(), n(), n() ];
            if (k(t, e)) throw new Error("Ed25519: invalid public key");
            let r = n(), i = n(), s = t[1];
            w(r, o, s), _(i, o, s), O(i, i), E(r, r, i);
            let a = new Uint8Array(32);
            return y(a, r), a;
          }
          function $(e) {
            const t = (0, r.hash)(e.subarray(0, 32));
            t[0] &= 248, t[31] &= 127, t[31] |= 64;
            const n = new Uint8Array(t.subarray(0, 32));
            return (0, i.wipe)(t), n;
          }
          e.sign = D, e.verify = z, e.convertPublicKeyToX25519 = H, e.convertSecretKeyToX25519 = $;
        }(Ei);
        const wn = "EdDSA", _n = "JWT", En = ".", Sn = "base64url", On = "utf8", In = "utf8", Pn = ":", xn = "did", Nn = "key", Tn = "base58btc", An = "z", Rn = "K36", jn = 32;
        function Ln(e = 0) {
          return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? globalThis.Buffer.allocUnsafe(e) : new Uint8Array(e);
        }
        function Cn(e, t) {
          t || (t = e.reduce(((e, t) => e + t.length), 0));
          const r = Ln(t);
          let i = 0;
          for (const n of e) r.set(n, i), i += n.length;
          return r;
        }
        function Un(e, t) {
          if (e.length >= 255) throw new TypeError("Alphabet too long");
          for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
          for (var n = 0; n < e.length; n++) {
            var s = e.charAt(n), o = s.charCodeAt(0);
            if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
            r[o] = n;
          }
          var a = e.length, c = e.charAt(0), h = Math.log(a) / Math.log(256), u = Math.log(256) / Math.log(a);
          function l(t) {
            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), 
            !(t instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
            if (0 === t.length) return "";
            for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n]; ) n++, r++;
            for (var o = (s - n) * u + 1 >>> 0, h = new Uint8Array(o); n !== s; ) {
              for (var l = t[n], p = 0, f = o - 1; (0 !== l || p < i) && -1 !== f; f--, p++) l += 256 * h[f] >>> 0, h[f] = l % a >>> 0, 
              l = l / a >>> 0;
              if (0 !== l) throw new Error("Non-zero carry");
              i = p, n++;
            }
            for (var d = o - i; d !== o && 0 === h[d]; ) d++;
            for (var y = c.repeat(r); d < o; ++d) y += e.charAt(h[d]);
            return y;
          }
          function p(e) {
            if ("string" != typeof e) throw new TypeError("Expected String");
            if (0 === e.length) return new Uint8Array;
            var t = 0;
            if (" " !== e[t]) {
              for (var i = 0, n = 0; e[t] === c; ) i++, t++;
              for (var s = (e.length - t) * h + 1 >>> 0, o = new Uint8Array(s); e[t]; ) {
                var u = r[e.charCodeAt(t)];
                if (255 === u) return;
                for (var l = 0, p = s - 1; (0 !== u || l < n) && -1 !== p; p--, l++) u += a * o[p] >>> 0, o[p] = u % 256 >>> 0, u = u / 256 >>> 0;
                if (0 !== u) throw new Error("Non-zero carry");
                n = l, t++;
              }
              if (" " !== e[t]) {
                for (var f = s - n; f !== s && 0 === o[f]; ) f++;
                for (var d = new Uint8Array(i + (s - f)), y = i; f !== s; ) d[y++] = o[f++];
                return d;
              }
            }
          }
          function f(e) {
            var r = p(e);
            if (r) return r;
            throw new Error(`Non-${t} character`);
          }
          return {
            encode: l,
            decodeUnsafe: p,
            decode: f
          };
        }
        var Mn = Un;
        const Dn = e => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw new Error("Unknown type, must be binary type");
        }, kn = e => (new TextEncoder).encode(e), zn = e => (new TextDecoder).decode(e);
        class Hn {
          constructor(e, t, r) {
            this.name = e, this.prefix = t, this.baseEncode = r;
          }
          encode(e) {
            if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
            throw Error("Unknown type, must be binary type");
          }
        }
        class $n {
          constructor(e, t, r) {
            if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw new Error("Invalid prefix character");
            this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r;
          }
          decode(e) {
            if ("string" == typeof e) {
              if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
              return this.baseDecode(e.slice(this.prefix.length));
            }
            throw Error("Can only multibase decode strings");
          }
          or(e) {
            return Kn(this, e);
          }
        }
        class qn {
          constructor(e) {
            this.decoders = e;
          }
          or(e) {
            return Kn(this, e);
          }
          decode(e) {
            const t = e[0], r = this.decoders[t];
            if (r) return r.decode(e);
            throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
          }
        }
        const Kn = (e, t) => new qn({
          ...e.decoders || {
            [e.prefix]: e
          },
          ...t.decoders || {
            [t.prefix]: t
          }
        });
        class Vn {
          constructor(e, t, r, i) {
            this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new Hn(e, t, r), this.decoder = new $n(e, t, i);
          }
          encode(e) {
            return this.encoder.encode(e);
          }
          decode(e) {
            return this.decoder.decode(e);
          }
        }
        const Bn = ({name: e, prefix: t, encode: r, decode: i}) => new Vn(e, t, r, i), Fn = ({prefix: e, name: t, alphabet: r}) => {
          const {encode: i, decode: n} = Mn(r, t);
          return Bn({
            prefix: e,
            name: t,
            encode: i,
            decode: e => Dn(n(e))
          });
        }, Gn = (e, t, r, i) => {
          const n = {};
          for (let u = 0; u < t.length; ++u) n[t[u]] = u;
          let s = e.length;
          for (;"=" === e[s - 1]; ) --s;
          const o = new Uint8Array(s * r / 8 | 0);
          let a = 0, c = 0, h = 0;
          for (let u = 0; u < s; ++u) {
            const t = n[e[u]];
            if (void 0 === t) throw new SyntaxError(`Non-${i} character`);
            c = c << r | t, a += r, a >= 8 && (a -= 8, o[h++] = 255 & c >> a);
          }
          if (a >= r || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
          return o;
        }, Wn = (e, t, r) => {
          const i = "=" === t[t.length - 1], n = (1 << r) - 1;
          let s = "", o = 0, a = 0;
          for (let c = 0; c < e.length; ++c) for (a = a << 8 | e[c], o += 8; o > r; ) o -= r, s += t[n & a >> o];
          if (o && (s += t[n & a << r - o]), i) for (;s.length * r & 7; ) s += "=";
          return s;
        }, Yn = ({name: e, prefix: t, bitsPerChar: r, alphabet: i}) => Bn({
          prefix: t,
          name: e,
          encode(e) {
            return Wn(e, i, r);
          },
          decode(t) {
            return Gn(t, i, r, e);
          }
        }), Jn = Bn({
          prefix: "\0",
          name: "identity",
          encode: e => zn(e),
          decode: e => kn(e)
        });
        var Xn = Object.freeze({
          __proto__: null,
          identity: Jn
        });
        const Zn = Yn({
          prefix: "0",
          name: "base2",
          alphabet: "01",
          bitsPerChar: 1
        });
        var Qn = Object.freeze({
          __proto__: null,
          base2: Zn
        });
        const es = Yn({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3
        });
        var ts = Object.freeze({
          __proto__: null,
          base8: es
        });
        const rs = Fn({
          prefix: "9",
          name: "base10",
          alphabet: "0123456789"
        });
        var is = Object.freeze({
          __proto__: null,
          base10: rs
        });
        const ns = Yn({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4
        }), ss = Yn({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4
        });
        var os = Object.freeze({
          __proto__: null,
          base16: ns,
          base16upper: ss
        });
        const as = Yn({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5
        }), cs = Yn({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5
        }), hs = Yn({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5
        }), us = Yn({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5
        }), ls = Yn({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5
        }), ps = Yn({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5
        }), fs = Yn({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5
        }), ds = Yn({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5
        }), ys = Yn({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5
        });
        var gs = Object.freeze({
          __proto__: null,
          base32: as,
          base32upper: cs,
          base32pad: hs,
          base32padupper: us,
          base32hex: ls,
          base32hexupper: ps,
          base32hexpad: fs,
          base32hexpadupper: ds,
          base32z: ys
        });
        const bs = Fn({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
        }), vs = Fn({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        });
        var ms = Object.freeze({
          __proto__: null,
          base36: bs,
          base36upper: vs
        });
        const ws = Fn({
          name: "base58btc",
          prefix: "z",
          alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
        }), _s = Fn({
          name: "base58flickr",
          prefix: "Z",
          alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
        });
        var Es = Object.freeze({
          __proto__: null,
          base58btc: ws,
          base58flickr: _s
        });
        const Ss = Yn({
          prefix: "m",
          name: "base64",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6
        }), Os = Yn({
          prefix: "M",
          name: "base64pad",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6
        }), Is = Yn({
          prefix: "u",
          name: "base64url",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6
        }), Ps = Yn({
          prefix: "U",
          name: "base64urlpad",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6
        });
        var xs = Object.freeze({
          __proto__: null,
          base64: Ss,
          base64pad: Os,
          base64url: Is,
          base64urlpad: Ps
        });
        const Ns = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Ts = Ns.reduce(((e, t, r) => (e[r] = t, 
        e)), []), As = Ns.reduce(((e, t, r) => (e[t.codePointAt(0)] = r, e)), []);
        function Rs(e) {
          return e.reduce(((e, t) => e += Ts[t]), "");
        }
        function js(e) {
          const t = [];
          for (const r of e) {
            const e = As[r.codePointAt(0)];
            if (void 0 === e) throw new Error(`Non-base256emoji character: ${r}`);
            t.push(e);
          }
          return new Uint8Array(t);
        }
        const Ls = Bn({
          prefix: "🚀",
          name: "base256emoji",
          encode: Rs,
          decode: js
        });
        var Cs = Object.freeze({
          __proto__: null,
          base256emoji: Ls
        }), Us = zs, Ms = 128, Ds = -128, ks = Math.pow(2, 31);
        function zs(e, t, r) {
          t = t || [];
          for (var i = r = r || 0; e >= ks; ) t[r++] = 255 & e | Ms, e /= 128;
          for (;e & Ds; ) t[r++] = 255 & e | Ms, e >>>= 7;
          return t[r] = 0 | e, zs.bytes = r - i + 1, t;
        }
        var Hs = Ks, $s = 128, qs = 127;
        function Ks(e, t) {
          var r, i = 0, n = 0, s = t = t || 0, o = e.length;
          do {
            if (s >= o) throw Ks.bytes = 0, new RangeError("Could not decode varint");
            r = e[s++], i += n < 28 ? (r & qs) << n : (r & qs) * Math.pow(2, n), n += 7;
          } while (r >= $s);
          return Ks.bytes = s - t, i;
        }
        var Vs = Math.pow(2, 7), Bs = Math.pow(2, 14), Fs = Math.pow(2, 21), Gs = Math.pow(2, 28), Ws = Math.pow(2, 35), Ys = Math.pow(2, 42), Js = Math.pow(2, 49), Xs = Math.pow(2, 56), Zs = Math.pow(2, 63), Qs = {
          encode: Us,
          decode: Hs,
          encodingLength: function(e) {
            return e < Vs ? 1 : e < Bs ? 2 : e < Fs ? 3 : e < Gs ? 4 : e < Ws ? 5 : e < Ys ? 6 : e < Js ? 7 : e < Xs ? 8 : e < Zs ? 9 : 10;
          }
        };
        const eo = (e, t, r = 0) => (Qs.encode(e, t, r), t), to = e => Qs.encodingLength(e), ro = (e, t) => {
          const r = t.byteLength, i = to(e), n = i + to(r), s = new Uint8Array(n + r);
          return eo(e, s, 0), eo(r, s, i), s.set(t, n), new io(e, r, t, s);
        };
        class io {
          constructor(e, t, r, i) {
            this.code = e, this.size = t, this.digest = r, this.bytes = i;
          }
        }
        const no = ({name: e, code: t, encode: r}) => new so(e, t, r);
        class so {
          constructor(e, t, r) {
            this.name = e, this.code = t, this.encode = r;
          }
          digest(e) {
            if (e instanceof Uint8Array) {
              const t = this.encode(e);
              return t instanceof Uint8Array ? ro(this.code, t) : t.then((e => ro(this.code, e)));
            }
            throw Error("Unknown type, must be binary type");
          }
        }
        const oo = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)), ao = no({
          name: "sha2-256",
          code: 18,
          encode: oo("SHA-256")
        }), co = no({
          name: "sha2-512",
          code: 19,
          encode: oo("SHA-512")
        });
        Object.freeze({
          __proto__: null,
          sha256: ao,
          sha512: co
        });
        const ho = 0, uo = "identity", lo = Dn;
        Object.freeze({
          __proto__: null,
          identity: {
            code: ho,
            name: uo,
            encode: lo,
            digest: e => ro(ho, lo(e))
          }
        });
        new TextEncoder, new TextDecoder;
        const po = {
          ...Xn,
          ...Qn,
          ...ts,
          ...is,
          ...os,
          ...gs,
          ...ms,
          ...Es,
          ...xs,
          ...Cs
        };
        function fo(e, t, r, i) {
          return {
            name: e,
            prefix: t,
            encoder: {
              name: e,
              prefix: t,
              encode: r
            },
            decoder: {
              decode: i
            }
          };
        }
        const yo = fo("utf8", "u", (e => "u" + new TextDecoder("utf8").decode(e)), (e => (new TextEncoder).encode(e.substring(1)))), go = fo("ascii", "a", (e => {
          let t = "a";
          for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
          return t;
        }), (e => {
          const t = Ln((e = e.substring(1)).length);
          for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
          return t;
        })), bo = {
          utf8: yo,
          "utf-8": yo,
          hex: po.base16,
          latin1: go,
          ascii: go,
          binary: go,
          ...po
        };
        function vo(e, t = "utf8") {
          const r = bo[t];
          if (!r) throw new Error(`Unsupported encoding "${t}"`);
          return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.encoder.encode(e).substring(1) : globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8");
        }
        function mo(e, t = "utf8") {
          const r = bo[t];
          if (!r) throw new Error(`Unsupported encoding "${t}"`);
          return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${e}`) : globalThis.Buffer.from(e, "utf8");
        }
        function wo(e) {
          return vo(mo(_i(e), On), Sn);
        }
        function _o(e) {
          const t = mo(Rn, Tn), r = An + vo(Cn([ t, e ]), Tn);
          return [ xn, Nn, r ].join(Pn);
        }
        function Eo(e) {
          return vo(e, Sn);
        }
        function So(e) {
          return mo([ wo(e.header), wo(e.payload) ].join(En), In);
        }
        function Oo(e) {
          return [ wo(e.header), wo(e.payload), Eo(e.signature) ].join(En);
        }
        function Io(e = Si.randomBytes(jn)) {
          return Ei.generateKeyPairFromSeed(e);
        }
        async function Po(e, t, r, i, n = bt.fromMiliseconds(Date.now())) {
          const s = {
            alg: wn,
            typ: _n
          }, o = {
            iss: _o(i.publicKey),
            sub: e,
            aud: t,
            iat: n,
            exp: n + r
          }, a = So({
            header: s,
            payload: o
          });
          return Oo({
            header: s,
            payload: o,
            signature: Ei.sign(i.secretKey, a)
          });
        }
        var xo = {}, No = {};
        Object.defineProperty(No, "__esModule", {
          value: !0
        });
        var To = zi, Ao = Ai, Ro = 20;
        function jo(e, t, r) {
          for (var i = 1634760805, n = 857760878, s = 2036477234, o = 1797285236, a = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], c = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], h = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], u = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], l = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], p = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], f = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], d = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], y = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], g = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], b = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], v = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], m = i, w = n, _ = s, E = o, S = a, O = c, I = h, P = u, x = l, N = p, T = f, A = d, R = y, j = g, L = b, C = v, U = 0; U < Ro; U += 2) S = (S ^= x = x + (R = (R ^= m = m + S | 0) >>> 16 | R << 16) | 0) >>> 20 | S << 12, 
          O = (O ^= N = N + (j = (j ^= w = w + O | 0) >>> 16 | j << 16) | 0) >>> 20 | O << 12, I = (I ^= T = T + (L = (L ^= _ = _ + I | 0) >>> 16 | L << 16) | 0) >>> 20 | I << 12, 
          P = (P ^= A = A + (C = (C ^= E = E + P | 0) >>> 16 | C << 16) | 0) >>> 20 | P << 12, I = (I ^= T = T + (L = (L ^= _ = _ + I | 0) >>> 24 | L << 8) | 0) >>> 25 | I << 7, 
          P = (P ^= A = A + (C = (C ^= E = E + P | 0) >>> 24 | C << 8) | 0) >>> 25 | P << 7, O = (O ^= N = N + (j = (j ^= w = w + O | 0) >>> 24 | j << 8) | 0) >>> 25 | O << 7, 
          S = (S ^= x = x + (R = (R ^= m = m + S | 0) >>> 24 | R << 8) | 0) >>> 25 | S << 7, O = (O ^= T = T + (C = (C ^= m = m + O | 0) >>> 16 | C << 16) | 0) >>> 20 | O << 12, 
          I = (I ^= A = A + (R = (R ^= w = w + I | 0) >>> 16 | R << 16) | 0) >>> 20 | I << 12, P = (P ^= x = x + (j = (j ^= _ = _ + P | 0) >>> 16 | j << 16) | 0) >>> 20 | P << 12, 
          S = (S ^= N = N + (L = (L ^= E = E + S | 0) >>> 16 | L << 16) | 0) >>> 20 | S << 12, P = (P ^= x = x + (j = (j ^= _ = _ + P | 0) >>> 24 | j << 8) | 0) >>> 25 | P << 7, 
          S = (S ^= N = N + (L = (L ^= E = E + S | 0) >>> 24 | L << 8) | 0) >>> 25 | S << 7, I = (I ^= A = A + (R = (R ^= w = w + I | 0) >>> 24 | R << 8) | 0) >>> 25 | I << 7, 
          O = (O ^= T = T + (C = (C ^= m = m + O | 0) >>> 24 | C << 8) | 0) >>> 25 | O << 7;
          To.writeUint32LE(m + i | 0, e, 0), To.writeUint32LE(w + n | 0, e, 4), To.writeUint32LE(_ + s | 0, e, 8), To.writeUint32LE(E + o | 0, e, 12), 
          To.writeUint32LE(S + a | 0, e, 16), To.writeUint32LE(O + c | 0, e, 20), To.writeUint32LE(I + h | 0, e, 24), To.writeUint32LE(P + u | 0, e, 28), 
          To.writeUint32LE(x + l | 0, e, 32), To.writeUint32LE(N + p | 0, e, 36), To.writeUint32LE(T + f | 0, e, 40), To.writeUint32LE(A + d | 0, e, 44), 
          To.writeUint32LE(R + y | 0, e, 48), To.writeUint32LE(j + g | 0, e, 52), To.writeUint32LE(L + b | 0, e, 56), To.writeUint32LE(C + v | 0, e, 60);
        }
        function Lo(e, t, r, i, n) {
          if (void 0 === n && (n = 0), 32 !== e.length) throw new Error("ChaCha: key size must be 32 bytes");
          if (i.length < r.length) throw new Error("ChaCha: destination is shorter than source");
          var s, o;
          if (0 === n) {
            if (8 !== t.length && 12 !== t.length) throw new Error("ChaCha nonce must be 8 or 12 bytes");
            o = (s = new Uint8Array(16)).length - t.length, s.set(t, o);
          } else {
            if (16 !== t.length) throw new Error("ChaCha nonce with counter must be 16 bytes");
            s = t, o = n;
          }
          for (var a = new Uint8Array(64), c = 0; c < r.length; c += 64) {
            jo(a, s, e);
            for (var h = c; h < c + 64 && h < r.length; h++) i[h] = r[h] ^ a[h - c];
            Uo(s, 0, o);
          }
          return Ao.wipe(a), 0 === n && Ao.wipe(s), i;
        }
        function Co(e, t, r, i) {
          return void 0 === i && (i = 0), Ao.wipe(r), Lo(e, t, r, r, i);
        }
        function Uo(e, t, r) {
          for (var i = 1; r--; ) i = i + (255 & e[t]) | 0, e[t] = 255 & i, i >>>= 8, t++;
          if (i > 0) throw new Error("ChaCha: counter overflow");
        }
        No.streamXOR = Lo, No.stream = Co;
        var Mo = {}, Do = {};
        function ko(e, t, r) {
          return ~(e - 1) & t | e - 1 & r;
        }
        function zo(e, t) {
          return (0 | e) - (0 | t) - 1 >>> 31 & 1;
        }
        function Ho(e, t) {
          if (e.length !== t.length) return 0;
          for (var r = 0, i = 0; i < e.length; i++) r |= e[i] ^ t[i];
          return 1 & r - 1 >>> 8;
        }
        function $o(e, t) {
          return 0 !== e.length && 0 !== t.length && 0 !== Ho(e, t);
        }
        Object.defineProperty(Do, "__esModule", {
          value: !0
        }), Do.select = ko, Do.lessOrEqual = zo, Do.compare = Ho, Do.equal = $o, function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var t = Do, r = Ai;
          e.DIGEST_LENGTH = 16;
          var i = function() {
            function t(t) {
              this.digestLength = e.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), 
              this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
              var r = t[0] | t[1] << 8;
              this._r[0] = 8191 & r;
              var i = t[2] | t[3] << 8;
              this._r[1] = 8191 & (r >>> 13 | i << 3);
              var n = t[4] | t[5] << 8;
              this._r[2] = 7939 & (i >>> 10 | n << 6);
              var s = t[6] | t[7] << 8;
              this._r[3] = 8191 & (n >>> 7 | s << 9);
              var o = t[8] | t[9] << 8;
              this._r[4] = 255 & (s >>> 4 | o << 12), this._r[5] = o >>> 1 & 8190;
              var a = t[10] | t[11] << 8;
              this._r[6] = 8191 & (o >>> 14 | a << 2);
              var c = t[12] | t[13] << 8;
              this._r[7] = 8065 & (a >>> 11 | c << 5);
              var h = t[14] | t[15] << 8;
              this._r[8] = 8191 & (c >>> 8 | h << 8), this._r[9] = h >>> 5 & 127, this._pad[0] = t[16] | t[17] << 8, this._pad[1] = t[18] | t[19] << 8, 
              this._pad[2] = t[20] | t[21] << 8, this._pad[3] = t[22] | t[23] << 8, this._pad[4] = t[24] | t[25] << 8, this._pad[5] = t[26] | t[27] << 8, 
              this._pad[6] = t[28] | t[29] << 8, this._pad[7] = t[30] | t[31] << 8;
            }
            return t.prototype._blocks = function(e, t, r) {
              for (var i = this._fin ? 0 : 2048, n = this._h[0], s = this._h[1], o = this._h[2], a = this._h[3], c = this._h[4], h = this._h[5], u = this._h[6], l = this._h[7], p = this._h[8], f = this._h[9], d = this._r[0], y = this._r[1], g = this._r[2], b = this._r[3], v = this._r[4], m = this._r[5], w = this._r[6], _ = this._r[7], E = this._r[8], S = this._r[9]; r >= 16; ) {
                var O = e[t + 0] | e[t + 1] << 8;
                n += 8191 & O;
                var I = e[t + 2] | e[t + 3] << 8;
                s += 8191 & (O >>> 13 | I << 3);
                var P = e[t + 4] | e[t + 5] << 8;
                o += 8191 & (I >>> 10 | P << 6);
                var x = e[t + 6] | e[t + 7] << 8;
                a += 8191 & (P >>> 7 | x << 9);
                var N = e[t + 8] | e[t + 9] << 8;
                c += 8191 & (x >>> 4 | N << 12), h += N >>> 1 & 8191;
                var T = e[t + 10] | e[t + 11] << 8;
                u += 8191 & (N >>> 14 | T << 2);
                var A = e[t + 12] | e[t + 13] << 8;
                l += 8191 & (T >>> 11 | A << 5);
                var R = e[t + 14] | e[t + 15] << 8;
                var j = 0, L = j;
                L += n * d, L += s * (5 * S), L += o * (5 * E), L += a * (5 * _), j = (L += c * (5 * w)) >>> 13, L &= 8191, L += h * (5 * m), 
                L += u * (5 * v), L += l * (5 * b), L += (p += 8191 & (A >>> 8 | R << 8)) * (5 * g);
                var C = j += (L += (f += R >>> 5 | i) * (5 * y)) >>> 13;
                C += n * y, C += s * d, C += o * (5 * S), C += a * (5 * E), j = (C += c * (5 * _)) >>> 13, C &= 8191, C += h * (5 * w), 
                C += u * (5 * m), C += l * (5 * v), C += p * (5 * b), j += (C += f * (5 * g)) >>> 13, C &= 8191;
                var U = j;
                U += n * g, U += s * y, U += o * d, U += a * (5 * S), j = (U += c * (5 * E)) >>> 13, U &= 8191, U += h * (5 * _), U += u * (5 * w), 
                U += l * (5 * m), U += p * (5 * v);
                var M = j += (U += f * (5 * b)) >>> 13;
                M += n * b, M += s * g, M += o * y, M += a * d, j = (M += c * (5 * S)) >>> 13, M &= 8191, M += h * (5 * E), M += u * (5 * _), 
                M += l * (5 * w), M += p * (5 * m);
                var D = j += (M += f * (5 * v)) >>> 13;
                D += n * v, D += s * b, D += o * g, D += a * y, j = (D += c * d) >>> 13, D &= 8191, D += h * (5 * S), D += u * (5 * E), 
                D += l * (5 * _), D += p * (5 * w);
                var k = j += (D += f * (5 * m)) >>> 13;
                k += n * m, k += s * v, k += o * b, k += a * g, j = (k += c * y) >>> 13, k &= 8191, k += h * d, k += u * (5 * S), k += l * (5 * E), 
                k += p * (5 * _);
                var z = j += (k += f * (5 * w)) >>> 13;
                z += n * w, z += s * m, z += o * v, z += a * b, j = (z += c * g) >>> 13, z &= 8191, z += h * y, z += u * d, z += l * (5 * S), 
                z += p * (5 * E);
                var H = j += (z += f * (5 * _)) >>> 13;
                H += n * _, H += s * w, H += o * m, H += a * v, j = (H += c * b) >>> 13, H &= 8191, H += h * g, H += u * y, H += l * d, 
                H += p * (5 * S);
                var $ = j += (H += f * (5 * E)) >>> 13;
                $ += n * E, $ += s * _, $ += o * w, $ += a * m, j = ($ += c * v) >>> 13, $ &= 8191, $ += h * b, $ += u * g, $ += l * y, 
                $ += p * d;
                var q = j += ($ += f * (5 * S)) >>> 13;
                q += n * S, q += s * E, q += o * _, q += a * w, j = (q += c * m) >>> 13, q &= 8191, q += h * v, q += u * b, q += l * g, 
                q += p * y, n = L = 8191 & (j = (j = ((j += (q += f * d) >>> 13) << 2) + j | 0) + (L &= 8191) | 0), s = C += j >>>= 13, 
                o = U &= 8191, a = M &= 8191, c = D &= 8191, h = k &= 8191, u = z &= 8191, l = H &= 8191, p = $ &= 8191, f = q &= 8191, 
                t += 16, r -= 16;
              }
              this._h[0] = n, this._h[1] = s, this._h[2] = o, this._h[3] = a, this._h[4] = c, this._h[5] = h, this._h[6] = u, this._h[7] = l, 
              this._h[8] = p, this._h[9] = f;
            }, t.prototype.finish = function(e, t) {
              void 0 === t && (t = 0);
              var r, i, n, s, o = new Uint16Array(10);
              if (this._leftover) {
                for (s = this._leftover, this._buffer[s++] = 1; s < 16; s++) this._buffer[s] = 0;
                this._fin = 1, this._blocks(this._buffer, 0, 16);
              }
              for (r = this._h[1] >>> 13, this._h[1] &= 8191, s = 2; s < 10; s++) this._h[s] += r, r = this._h[s] >>> 13, this._h[s] &= 8191;
              for (this._h[0] += 5 * r, r = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += r, r = this._h[1] >>> 13, this._h[1] &= 8191, 
              this._h[2] += r, o[0] = this._h[0] + 5, r = o[0] >>> 13, o[0] &= 8191, s = 1; s < 10; s++) o[s] = this._h[s] + r, r = o[s] >>> 13, 
              o[s] &= 8191;
              for (o[9] -= 8192, i = (1 ^ r) - 1, s = 0; s < 10; s++) o[s] &= i;
              for (i = ~i, s = 0; s < 10; s++) this._h[s] = this._h[s] & i | o[s];
              for (this._h[0] = 65535 & (this._h[0] | this._h[1] << 13), this._h[1] = 65535 & (this._h[1] >>> 3 | this._h[2] << 10), this._h[2] = 65535 & (this._h[2] >>> 6 | this._h[3] << 7), 
              this._h[3] = 65535 & (this._h[3] >>> 9 | this._h[4] << 4), this._h[4] = 65535 & (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14), 
              this._h[5] = 65535 & (this._h[6] >>> 2 | this._h[7] << 11), this._h[6] = 65535 & (this._h[7] >>> 5 | this._h[8] << 8), this._h[7] = 65535 & (this._h[8] >>> 8 | this._h[9] << 5), 
              n = this._h[0] + this._pad[0], this._h[0] = 65535 & n, s = 1; s < 8; s++) n = (this._h[s] + this._pad[s] | 0) + (n >>> 16) | 0, 
              this._h[s] = 65535 & n;
              return e[t + 0] = this._h[0] >>> 0, e[t + 1] = this._h[0] >>> 8, e[t + 2] = this._h[1] >>> 0, e[t + 3] = this._h[1] >>> 8, 
              e[t + 4] = this._h[2] >>> 0, e[t + 5] = this._h[2] >>> 8, e[t + 6] = this._h[3] >>> 0, e[t + 7] = this._h[3] >>> 8, e[t + 8] = this._h[4] >>> 0, 
              e[t + 9] = this._h[4] >>> 8, e[t + 10] = this._h[5] >>> 0, e[t + 11] = this._h[5] >>> 8, e[t + 12] = this._h[6] >>> 0, e[t + 13] = this._h[6] >>> 8, 
              e[t + 14] = this._h[7] >>> 0, e[t + 15] = this._h[7] >>> 8, this._finished = !0, this;
            }, t.prototype.update = function(e) {
              var t, r = 0, i = e.length;
              if (this._leftover) {
                (t = 16 - this._leftover) > i && (t = i);
                for (var n = 0; n < t; n++) this._buffer[this._leftover + n] = e[r + n];
                if (i -= t, r += t, this._leftover += t, this._leftover < 16) return this;
                this._blocks(this._buffer, 0, 16), this._leftover = 0;
              }
              if (i >= 16 && (t = i - i % 16, this._blocks(e, r, t), r += t, i -= t), i) {
                for (n = 0; n < i; n++) this._buffer[this._leftover + n] = e[r + n];
                this._leftover += i;
              }
              return this;
            }, t.prototype.digest = function() {
              if (this._finished) throw new Error("Poly1305 was finished");
              var e = new Uint8Array(16);
              return this.finish(e), e;
            }, t.prototype.clean = function() {
              return r.wipe(this._buffer), r.wipe(this._r), r.wipe(this._h), r.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, 
              this;
            }, t;
          }();
          function n(e, t) {
            var r = new i(e);
            r.update(t);
            var n = r.digest();
            return r.clean(), n;
          }
          function s(r, i) {
            return r.length === e.DIGEST_LENGTH && i.length === e.DIGEST_LENGTH && t.equal(r, i);
          }
          e.Poly1305 = i, e.oneTimeAuth = n, e.equal = s;
        }(Mo), function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var t = No, r = Mo, i = Ai, n = zi, s = Do;
          e.KEY_LENGTH = 32, e.NONCE_LENGTH = 12, e.TAG_LENGTH = 16;
          var o = new Uint8Array(16), a = function() {
            function a(t) {
              if (this.nonceLength = e.NONCE_LENGTH, this.tagLength = e.TAG_LENGTH, t.length !== e.KEY_LENGTH) throw new Error("ChaCha20Poly1305 needs 32-byte key");
              this._key = new Uint8Array(t);
            }
            return a.prototype.seal = function(e, r, n, s) {
              if (e.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
              var o = new Uint8Array(16);
              o.set(e, o.length - e.length);
              var a = new Uint8Array(32);
              t.stream(this._key, o, a, 4);
              var c, h = r.length + this.tagLength;
              if (s) {
                if (s.length !== h) throw new Error("ChaCha20Poly1305: incorrect destination length");
                c = s;
              } else c = new Uint8Array(h);
              return t.streamXOR(this._key, o, r, c, 4), this._authenticate(c.subarray(c.length - this.tagLength, c.length), a, c.subarray(0, c.length - this.tagLength), n), 
              i.wipe(o), c;
            }, a.prototype.open = function(e, r, n, o) {
              if (e.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
              if (r.length < this.tagLength) return null;
              var a = new Uint8Array(16);
              a.set(e, a.length - e.length);
              var c = new Uint8Array(32);
              t.stream(this._key, a, c, 4);
              var h = new Uint8Array(this.tagLength);
              if (this._authenticate(h, c, r.subarray(0, r.length - this.tagLength), n), !s.equal(h, r.subarray(r.length - this.tagLength, r.length))) return null;
              var u, l = r.length - this.tagLength;
              if (o) {
                if (o.length !== l) throw new Error("ChaCha20Poly1305: incorrect destination length");
                u = o;
              } else u = new Uint8Array(l);
              return t.streamXOR(this._key, a, r.subarray(0, r.length - this.tagLength), u, 4), i.wipe(a), u;
            }, a.prototype.clean = function() {
              return i.wipe(this._key), this;
            }, a.prototype._authenticate = function(e, t, s, a) {
              var c = new r.Poly1305(t);
              a && (c.update(a), a.length % 16 > 0 && c.update(o.subarray(a.length % 16))), c.update(s), s.length % 16 > 0 && c.update(o.subarray(s.length % 16));
              var h = new Uint8Array(8);
              a && n.writeUint64LE(a.length, h), c.update(h), n.writeUint64LE(s.length, h), c.update(h);
              for (var u = c.digest(), l = 0; l < u.length; l++) e[l] = u[l];
              c.clean(), i.wipe(u), i.wipe(h);
            }, a;
          }();
          e.ChaCha20Poly1305 = a;
        }(xo);
        var qo = {}, Ko = {}, Vo = {};
        function Bo(e) {
          return typeof e.saveState < "u" && typeof e.restoreState < "u" && typeof e.cleanSavedState < "u";
        }
        Object.defineProperty(Vo, "__esModule", {
          value: !0
        }), Vo.isSerializableHash = Bo, Object.defineProperty(Ko, "__esModule", {
          value: !0
        });
        var Fo = Vo, Go = Do, Wo = Ai, Yo = function() {
          function e(e, t) {
            this._finished = !1, this._inner = new e, this._outer = new e, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
            var r = new Uint8Array(this.blockSize);
            t.length > this.blockSize ? this._inner.update(t).finish(r).clean() : r.set(t);
            for (var i = 0; i < r.length; i++) r[i] ^= 54;
            this._inner.update(r);
            for (i = 0; i < r.length; i++) r[i] ^= 106;
            this._outer.update(r), Fo.isSerializableHash(this._inner) && Fo.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), 
            this._outerKeyedState = this._outer.saveState()), Wo.wipe(r);
          }
          return e.prototype.reset = function() {
            if (!Fo.isSerializableHash(this._inner) || !Fo.isSerializableHash(this._outer)) throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
            return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, 
            this;
          }, e.prototype.clean = function() {
            Fo.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), Fo.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), 
            this._inner.clean(), this._outer.clean();
          }, e.prototype.update = function(e) {
            return this._inner.update(e), this;
          }, e.prototype.finish = function(e) {
            return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), 
            this._finished = !0, this);
          }, e.prototype.digest = function() {
            var e = new Uint8Array(this.digestLength);
            return this.finish(e), e;
          }, e.prototype.saveState = function() {
            if (!Fo.isSerializableHash(this._inner)) throw new Error("hmac: can't saveState() because hash doesn't implement it");
            return this._inner.saveState();
          }, e.prototype.restoreState = function(e) {
            if (!Fo.isSerializableHash(this._inner) || !Fo.isSerializableHash(this._outer)) throw new Error("hmac: can't restoreState() because hash doesn't implement it");
            return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
          }, e.prototype.cleanSavedState = function(e) {
            if (!Fo.isSerializableHash(this._inner)) throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
            this._inner.cleanSavedState(e);
          }, e;
        }();
        function Jo(e, t, r) {
          var i = new Yo(e, t);
          i.update(r);
          var n = i.digest();
          return i.clean(), n;
        }
        Ko.HMAC = Yo, Ko.hmac = Jo, Ko.equal = Go.equal, Object.defineProperty(qo, "__esModule", {
          value: !0
        });
        var Xo = Ko, Zo = Ai, Qo = function() {
          function e(e, t, r, i) {
            void 0 === r && (r = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = i;
            var n = Xo.hmac(this._hash, r, t);
            this._hmac = new Xo.HMAC(e, n), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
          }
          return e.prototype._fillBuffer = function() {
            this._counter[0]++;
            var e = this._counter[0];
            if (0 === e) throw new Error("hkdf: cannot expand more");
            this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), 
            this._hmac.finish(this._buffer), this._bufpos = 0;
          }, e.prototype.expand = function(e) {
            for (var t = new Uint8Array(e), r = 0; r < t.length; r++) this._bufpos === this._buffer.length && this._fillBuffer(), t[r] = this._buffer[this._bufpos++];
            return t;
          }, e.prototype.clean = function() {
            this._hmac.clean(), Zo.wipe(this._buffer), Zo.wipe(this._counter), this._bufpos = 0;
          }, e;
        }(), ea = qo.HKDF = Qo, ta = {};
        !function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var t = zi, r = Ai;
          e.DIGEST_LENGTH = 32, e.BLOCK_SIZE = 64;
          var i = function() {
            function i() {
              this.digestLength = e.DIGEST_LENGTH, this.blockSize = e.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), 
              this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
            }
            return i.prototype._initState = function() {
              this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, 
              this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
            }, i.prototype.reset = function() {
              return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
            }, i.prototype.clean = function() {
              r.wipe(this._buffer), r.wipe(this._temp), this.reset();
            }, i.prototype.update = function(e, t) {
              if (void 0 === t && (t = e.length), this._finished) throw new Error("SHA256: can't update because hash was finished.");
              var r = 0;
              if (this._bytesHashed += t, this._bufferLength > 0) {
                for (;this._bufferLength < this.blockSize && t > 0; ) this._buffer[this._bufferLength++] = e[r++], t--;
                this._bufferLength === this.blockSize && (s(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
              }
              for (t >= this.blockSize && (r = s(this._temp, this._state, e, r, t), t %= this.blockSize); t > 0; ) this._buffer[this._bufferLength++] = e[r++], 
              t--;
              return this;
            }, i.prototype.finish = function(e) {
              if (!this._finished) {
                var r = this._bytesHashed, i = this._bufferLength, n = r / 536870912 | 0, o = r << 3, a = r % 64 < 56 ? 64 : 128;
                this._buffer[i] = 128;
                for (var c = i + 1; c < a - 8; c++) this._buffer[c] = 0;
                t.writeUint32BE(n, this._buffer, a - 8), t.writeUint32BE(o, this._buffer, a - 4), s(this._temp, this._state, this._buffer, 0, a), 
                this._finished = !0;
              }
              for (c = 0; c < this.digestLength / 4; c++) t.writeUint32BE(this._state[c], e, 4 * c);
              return this;
            }, i.prototype.digest = function() {
              var e = new Uint8Array(this.digestLength);
              return this.finish(e), e;
            }, i.prototype.saveState = function() {
              if (this._finished) throw new Error("SHA256: cannot save finished state");
              return {
                state: new Int32Array(this._state),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
              };
            }, i.prototype.restoreState = function(e) {
              return this._state.set(e.state), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, 
              this._finished = !1, this;
            }, i.prototype.cleanSavedState = function(e) {
              r.wipe(e.state), e.buffer && r.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0;
            }, i;
          }();
          e.SHA256 = i;
          var n = new Int32Array([ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ]);
          function s(e, r, i, s, o) {
            for (;o >= 64; ) {
              for (var a = r[0], c = r[1], h = r[2], u = r[3], l = r[4], p = r[5], f = r[6], d = r[7], y = 0; y < 16; y++) {
                var g = s + 4 * y;
                e[y] = t.readUint32BE(i, g);
              }
              for (y = 16; y < 64; y++) {
                var b = e[y - 2], v = (b >>> 17 | b << 15) ^ (b >>> 19 | b << 13) ^ b >>> 10;
                var m = ((b = e[y - 15]) >>> 7 | b << 25) ^ (b >>> 18 | b << 14) ^ b >>> 3;
                e[y] = (v + e[y - 7] | 0) + (m + e[y - 16] | 0);
              }
              for (y = 0; y < 64; y++) {
                v = (((l >>> 6 | l << 26) ^ (l >>> 11 | l << 21) ^ (l >>> 25 | l << 7)) + (l & p ^ ~l & f) | 0) + (d + (n[y] + e[y] | 0) | 0) | 0, 
                m = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & c ^ a & h ^ c & h) | 0;
                d = f, f = p, p = l, l = u + v | 0, u = h, h = c, c = a, a = v + m | 0;
              }
              r[0] += a, r[1] += c, r[2] += h, r[3] += u, r[4] += l, r[5] += p, r[6] += f, r[7] += d, s += 64, o -= 64;
            }
            return s;
          }
          function o(e) {
            var t = new i;
            t.update(e);
            var r = t.digest();
            return t.clean(), r;
          }
          e.hash = o;
        }(ta);
        var ra = {};
        !function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.sharedKey = e.generateKeyPair = e.generateKeyPairFromSeed = e.scalarMultBase = e.scalarMult = e.SHARED_KEY_LENGTH = e.SECRET_KEY_LENGTH = e.PUBLIC_KEY_LENGTH = void 0;
          const t = Si, r = Ai;
          function i(e) {
            const t = new Float64Array(16);
            if (e) for (let r = 0; r < e.length; r++) t[r] = e[r];
            return t;
          }
          e.PUBLIC_KEY_LENGTH = 32, e.SECRET_KEY_LENGTH = 32, e.SHARED_KEY_LENGTH = 32;
          const n = new Uint8Array(32);
          n[0] = 9;
          const s = i([ 56129, 1 ]);
          function o(e) {
            let t = 1;
            for (let r = 0; r < 16; r++) {
              let i = e[r] + t + 65535;
              t = Math.floor(i / 65536), e[r] = i - 65536 * t;
            }
            e[0] += t - 1 + 37 * (t - 1);
          }
          function a(e, t, r) {
            const i = ~(r - 1);
            for (let n = 0; n < 16; n++) {
              const r = i & (e[n] ^ t[n]);
              e[n] ^= r, t[n] ^= r;
            }
          }
          function c(e, t) {
            const r = i(), n = i();
            for (let i = 0; i < 16; i++) n[i] = t[i];
            o(n), o(n), o(n);
            for (let i = 0; i < 2; i++) {
              r[0] = n[0] - 65517;
              for (let t = 1; t < 15; t++) r[t] = n[t] - 65535 - (r[t - 1] >> 16 & 1), r[t - 1] &= 65535;
              r[15] = n[15] - 32767 - (r[14] >> 16 & 1);
              const e = r[15] >> 16 & 1;
              r[14] &= 65535, a(n, r, 1 - e);
            }
            for (let i = 0; i < 16; i++) e[2 * i] = 255 & n[i], e[2 * i + 1] = n[i] >> 8;
          }
          function h(e, t) {
            for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
            e[15] &= 32767;
          }
          function u(e, t, r) {
            for (let i = 0; i < 16; i++) e[i] = t[i] + r[i];
          }
          function l(e, t, r) {
            for (let i = 0; i < 16; i++) e[i] = t[i] - r[i];
          }
          function p(e, t, r) {
            let i, n, s = 0, o = 0, a = 0, c = 0, h = 0, u = 0, l = 0, p = 0, f = 0, d = 0, y = 0, g = 0, b = 0, v = 0, m = 0, w = 0, _ = 0, E = 0, S = 0, O = 0, I = 0, P = 0, x = 0, N = 0, T = 0, A = 0, R = 0, j = 0, L = 0, C = 0, U = 0, M = r[0], D = r[1], k = r[2], z = r[3], H = r[4], $ = r[5], q = r[6], K = r[7], V = r[8], B = r[9], F = r[10], G = r[11], W = r[12], Y = r[13], J = r[14], X = r[15];
            i = t[0], s += i * M, o += i * D, a += i * k, c += i * z, h += i * H, u += i * $, l += i * q, p += i * K, f += i * V, d += i * B, 
            y += i * F, g += i * G, b += i * W, v += i * Y, m += i * J, w += i * X, i = t[1], o += i * M, a += i * D, c += i * k, h += i * z, 
            u += i * H, l += i * $, p += i * q, f += i * K, d += i * V, y += i * B, g += i * F, b += i * G, v += i * W, m += i * Y, 
            w += i * J, _ += i * X, i = t[2], a += i * M, c += i * D, h += i * k, u += i * z, l += i * H, p += i * $, f += i * q, d += i * K, 
            y += i * V, g += i * B, b += i * F, v += i * G, m += i * W, w += i * Y, _ += i * J, E += i * X, i = t[3], c += i * M, h += i * D, 
            u += i * k, l += i * z, p += i * H, f += i * $, d += i * q, y += i * K, g += i * V, b += i * B, v += i * F, m += i * G, 
            w += i * W, _ += i * Y, E += i * J, S += i * X, i = t[4], h += i * M, u += i * D, l += i * k, p += i * z, f += i * H, d += i * $, 
            y += i * q, g += i * K, b += i * V, v += i * B, m += i * F, w += i * G, _ += i * W, E += i * Y, S += i * J, O += i * X, 
            i = t[5], u += i * M, l += i * D, p += i * k, f += i * z, d += i * H, y += i * $, g += i * q, b += i * K, v += i * V, m += i * B, 
            w += i * F, _ += i * G, E += i * W, S += i * Y, O += i * J, I += i * X, i = t[6], l += i * M, p += i * D, f += i * k, d += i * z, 
            y += i * H, g += i * $, b += i * q, v += i * K, m += i * V, w += i * B, _ += i * F, E += i * G, S += i * W, O += i * Y, 
            I += i * J, P += i * X, i = t[7], p += i * M, f += i * D, d += i * k, y += i * z, g += i * H, b += i * $, v += i * q, m += i * K, 
            w += i * V, _ += i * B, E += i * F, S += i * G, O += i * W, I += i * Y, P += i * J, x += i * X, i = t[8], f += i * M, d += i * D, 
            y += i * k, g += i * z, b += i * H, v += i * $, m += i * q, w += i * K, _ += i * V, E += i * B, S += i * F, O += i * G, 
            I += i * W, P += i * Y, x += i * J, N += i * X, i = t[9], d += i * M, y += i * D, g += i * k, b += i * z, v += i * H, m += i * $, 
            w += i * q, _ += i * K, E += i * V, S += i * B, O += i * F, I += i * G, P += i * W, x += i * Y, N += i * J, T += i * X, 
            i = t[10], y += i * M, g += i * D, b += i * k, v += i * z, m += i * H, w += i * $, _ += i * q, E += i * K, S += i * V, O += i * B, 
            I += i * F, P += i * G, x += i * W, N += i * Y, T += i * J, A += i * X, i = t[11], g += i * M, b += i * D, v += i * k, m += i * z, 
            w += i * H, _ += i * $, E += i * q, S += i * K, O += i * V, I += i * B, P += i * F, x += i * G, N += i * W, T += i * Y, 
            A += i * J, R += i * X, i = t[12], b += i * M, v += i * D, m += i * k, w += i * z, _ += i * H, E += i * $, S += i * q, O += i * K, 
            I += i * V, P += i * B, x += i * F, N += i * G, T += i * W, A += i * Y, R += i * J, j += i * X, i = t[13], v += i * M, m += i * D, 
            w += i * k, _ += i * z, E += i * H, S += i * $, O += i * q, I += i * K, P += i * V, x += i * B, N += i * F, T += i * G, 
            A += i * W, R += i * Y, j += i * J, L += i * X, i = t[14], m += i * M, w += i * D, _ += i * k, E += i * z, S += i * H, O += i * $, 
            I += i * q, P += i * K, x += i * V, N += i * B, T += i * F, A += i * G, R += i * W, j += i * Y, L += i * J, C += i * X, 
            i = t[15], w += i * M, _ += i * D, E += i * k, S += i * z, O += i * H, I += i * $, P += i * q, x += i * K, N += i * V, T += i * B, 
            A += i * F, R += i * G, j += i * W, L += i * Y, C += i * J, U += i * X, s += 38 * _, o += 38 * E, a += 38 * S, c += 38 * O, 
            h += 38 * I, u += 38 * P, l += 38 * x, p += 38 * N, f += 38 * T, d += 38 * A, y += 38 * R, g += 38 * j, b += 38 * L, v += 38 * C, 
            m += 38 * U, n = 1, i = s + n + 65535, n = Math.floor(i / 65536), s = i - 65536 * n, i = o + n + 65535, n = Math.floor(i / 65536), 
            o = i - 65536 * n, i = a + n + 65535, n = Math.floor(i / 65536), a = i - 65536 * n, i = c + n + 65535, n = Math.floor(i / 65536), 
            c = i - 65536 * n, i = h + n + 65535, n = Math.floor(i / 65536), h = i - 65536 * n, i = u + n + 65535, n = Math.floor(i / 65536), 
            u = i - 65536 * n, i = l + n + 65535, n = Math.floor(i / 65536), l = i - 65536 * n, i = p + n + 65535, n = Math.floor(i / 65536), 
            p = i - 65536 * n, i = f + n + 65535, n = Math.floor(i / 65536), f = i - 65536 * n, i = d + n + 65535, n = Math.floor(i / 65536), 
            d = i - 65536 * n, i = y + n + 65535, n = Math.floor(i / 65536), y = i - 65536 * n, i = g + n + 65535, n = Math.floor(i / 65536), 
            g = i - 65536 * n, i = b + n + 65535, n = Math.floor(i / 65536), b = i - 65536 * n, i = v + n + 65535, n = Math.floor(i / 65536), 
            v = i - 65536 * n, i = m + n + 65535, n = Math.floor(i / 65536), m = i - 65536 * n, i = w + n + 65535, n = Math.floor(i / 65536), 
            w = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = 1, i = s + n + 65535, n = Math.floor(i / 65536), s = i - 65536 * n, i = o + n + 65535, 
            n = Math.floor(i / 65536), o = i - 65536 * n, i = a + n + 65535, n = Math.floor(i / 65536), a = i - 65536 * n, i = c + n + 65535, 
            n = Math.floor(i / 65536), c = i - 65536 * n, i = h + n + 65535, n = Math.floor(i / 65536), h = i - 65536 * n, i = u + n + 65535, 
            n = Math.floor(i / 65536), u = i - 65536 * n, i = l + n + 65535, n = Math.floor(i / 65536), l = i - 65536 * n, i = p + n + 65535, 
            n = Math.floor(i / 65536), p = i - 65536 * n, i = f + n + 65535, n = Math.floor(i / 65536), f = i - 65536 * n, i = d + n + 65535, 
            n = Math.floor(i / 65536), d = i - 65536 * n, i = y + n + 65535, n = Math.floor(i / 65536), y = i - 65536 * n, i = g + n + 65535, 
            n = Math.floor(i / 65536), g = i - 65536 * n, i = b + n + 65535, n = Math.floor(i / 65536), b = i - 65536 * n, i = v + n + 65535, 
            n = Math.floor(i / 65536), v = i - 65536 * n, i = m + n + 65535, n = Math.floor(i / 65536), m = i - 65536 * n, i = w + n + 65535, 
            n = Math.floor(i / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = h, 
            e[5] = u, e[6] = l, e[7] = p, e[8] = f, e[9] = d, e[10] = y, e[11] = g, e[12] = b, e[13] = v, e[14] = m, e[15] = w;
          }
          function f(e, t) {
            p(e, t, t);
          }
          function d(e, t) {
            const r = i();
            for (let i = 0; i < 16; i++) r[i] = t[i];
            for (let i = 253; i >= 0; i--) f(r, r), 2 !== i && 4 !== i && p(r, r, t);
            for (let i = 0; i < 16; i++) e[i] = r[i];
          }
          function y(e, t) {
            const r = new Uint8Array(32), n = new Float64Array(80), o = i(), y = i(), g = i(), b = i(), v = i(), m = i();
            for (let i = 0; i < 31; i++) r[i] = e[i];
            r[31] = 127 & e[31] | 64, r[0] &= 248, h(n, t);
            for (let i = 0; i < 16; i++) y[i] = n[i];
            o[0] = b[0] = 1;
            for (let i = 254; i >= 0; --i) {
              const e = r[i >>> 3] >>> (7 & i) & 1;
              a(o, y, e), a(g, b, e), u(v, o, g), l(o, o, g), u(g, y, b), l(y, y, b), f(b, v), f(m, o), p(o, g, o), p(g, y, v), u(v, o, g), 
              l(o, o, g), f(y, o), l(g, b, m), p(o, g, s), u(o, o, b), p(g, g, o), p(o, b, m), p(b, y, n), f(y, v), a(o, y, e), a(g, b, e);
            }
            for (let i = 0; i < 16; i++) n[i + 16] = o[i], n[i + 32] = g[i], n[i + 48] = y[i], n[i + 64] = b[i];
            const w = n.subarray(32), _ = n.subarray(16);
            d(w, w), p(_, _, w);
            const E = new Uint8Array(32);
            return c(E, _), E;
          }
          function g(e) {
            return y(e, n);
          }
          function b(t) {
            if (t.length !== e.SECRET_KEY_LENGTH) throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);
            const r = new Uint8Array(t);
            return {
              publicKey: g(r),
              secretKey: r
            };
          }
          function v(e) {
            const i = (0, t.randomBytes)(32, e), n = b(i);
            return (0, r.wipe)(i), n;
          }
          function m(t, r, i = !1) {
            if (t.length !== e.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect secret key length");
            if (r.length !== e.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect public key length");
            const n = y(t, r);
            if (i) {
              let e = 0;
              for (let t = 0; t < n.length; t++) e |= n[t];
              if (0 === e) throw new Error("X25519: invalid shared key");
            }
            return n;
          }
          e.scalarMult = y, e.scalarMultBase = g, e.generateKeyPairFromSeed = b, e.generateKeyPair = v, e.sharedKey = m;
        }(ra);
        var ia = function(e, t, r) {
          if (r || 2 === arguments.length) for (var i, n = 0, s = t.length; n < s; n++) (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), 
          i[n] = t[n]);
          return e.concat(i || Array.prototype.slice.call(t));
        }, na = function() {
          function e(e, t, r) {
            this.name = e, this.version = t, this.os = r, this.type = "browser";
          }
          return e;
        }(), sa = function() {
          function e(e) {
            this.version = e, this.type = "node", this.name = "node", this.os = process.platform;
          }
          return e;
        }(), oa = function() {
          function e(e, t, r, i) {
            this.name = e, this.version = t, this.os = r, this.bot = i, this.type = "bot-device";
          }
          return e;
        }(), aa = function() {
          function e() {
            this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null;
          }
          return e;
        }(), ca = function() {
          function e() {
            this.type = "react-native", this.name = "react-native", this.version = null, this.os = null;
          }
          return e;
        }(), ha = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/, ua = 3, la = [ [ "aol", /AOLShield\/([0-9\._]+)/ ], [ "edge", /Edge\/([0-9\._]+)/ ], [ "edge-ios", /EdgiOS\/([0-9\._]+)/ ], [ "yandexbrowser", /YaBrowser\/([0-9\._]+)/ ], [ "kakaotalk", /KAKAOTALK\s([0-9\.]+)/ ], [ "samsung", /SamsungBrowser\/([0-9\.]+)/ ], [ "silk", /\bSilk\/([0-9._-]+)\b/ ], [ "miui", /MiuiBrowser\/([0-9\.]+)$/ ], [ "beaker", /BeakerBrowser\/([0-9\.]+)/ ], [ "edge-chromium", /EdgA?\/([0-9\.]+)/ ], [ "chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ], [ "chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ], [ "phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/ ], [ "crios", /CriOS\/([0-9\.]+)(:?\s|$)/ ], [ "firefox", /Firefox\/([0-9\.]+)(?:\s|$)/ ], [ "fxios", /FxiOS\/([0-9\.]+)/ ], [ "opera-mini", /Opera Mini.*Version\/([0-9\.]+)/ ], [ "opera", /Opera\/([0-9\.]+)(?:\s|$)/ ], [ "opera", /OPR\/([0-9\.]+)(:?\s|$)/ ], [ "pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/ ], [ "pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/ ], [ "netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/ ], [ "ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/ ], [ "ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/ ], [ "ie", /MSIE\s(7\.0)/ ], [ "bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/ ], [ "android", /Android\s([0-9\.]+)/ ], [ "ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/ ], [ "safari", /Version\/([0-9\._]+).*Safari/ ], [ "facebook", /FB[AS]V\/([0-9\.]+)/ ], [ "instagram", /Instagram\s([0-9\.]+)/ ], [ "ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/ ], [ "ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/ ], [ "curl", /^curl\/([0-9\.]+)$/ ], [ "searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/ ] ], pa = [ [ "iOS", /iP(hone|od|ad)/ ], [ "Android OS", /Android/ ], [ "BlackBerry OS", /BlackBerry|BB10/ ], [ "Windows Mobile", /IEMobile/ ], [ "Amazon OS", /Kindle/ ], [ "Windows 3.11", /Win16/ ], [ "Windows 95", /(Windows 95)|(Win95)|(Windows_95)/ ], [ "Windows 98", /(Windows 98)|(Win98)/ ], [ "Windows 2000", /(Windows NT 5.0)|(Windows 2000)/ ], [ "Windows XP", /(Windows NT 5.1)|(Windows XP)/ ], [ "Windows Server 2003", /(Windows NT 5.2)/ ], [ "Windows Vista", /(Windows NT 6.0)/ ], [ "Windows 7", /(Windows NT 6.1)/ ], [ "Windows 8", /(Windows NT 6.2)/ ], [ "Windows 8.1", /(Windows NT 6.3)/ ], [ "Windows 10", /(Windows NT 10.0)/ ], [ "Windows ME", /Windows ME/ ], [ "Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/ ], [ "Open BSD", /OpenBSD/ ], [ "Sun OS", /SunOS/ ], [ "Chrome OS", /CrOS/ ], [ "Linux", /(Linux)|(X11)/ ], [ "Mac OS", /(Mac_PowerPC)|(Macintosh)/ ], [ "QNX", /QNX/ ], [ "BeOS", /BeOS/ ], [ "OS/2", /OS\/2/ ] ];
        function fa(e) {
          return e ? ya(e) : typeof document > "u" && typeof navigator < "u" && "ReactNative" === navigator.product ? new ca : typeof navigator < "u" ? ya(navigator.userAgent) : ba();
        }
        function da(e) {
          return "" !== e && la.reduce((function(t, r) {
            var i = r[0], n = r[1];
            if (t) return t;
            var s = n.exec(e);
            return !!s && [ i, s ];
          }), !1);
        }
        function ya(e) {
          var t = da(e);
          if (!t) return null;
          var r = t[0], i = t[1];
          if ("searchbot" === r) return new aa;
          var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
          n ? n.length < ua && (n = ia(ia([], n, !0), va(ua - n.length), !0)) : n = [];
          var s = n.join("."), o = ga(e), a = ha.exec(e);
          return a && a[1] ? new oa(r, s, o, a[1]) : new na(r, s, o);
        }
        function ga(e) {
          for (var t = 0, r = pa.length; t < r; t++) {
            var i = pa[t], n = i[0];
            if (i[1].exec(e)) return n;
          }
          return null;
        }
        function ba() {
          return typeof process < "u" && process.version ? new sa(process.version.slice(1)) : null;
        }
        function va(e) {
          for (var t = [], r = 0; r < e; r++) t.push("0");
          return t;
        }
        var ma = {};
        function wa(e) {
          let t;
          return typeof window < "u" && typeof window[e] < "u" && (t = window[e]), t;
        }
        function _a(e) {
          const t = wa(e);
          if (!t) throw new Error(`${e} is not defined in Window`);
          return t;
        }
        function Ea() {
          return _a("document");
        }
        function Sa() {
          return wa("document");
        }
        Object.defineProperty(ma, "__esModule", {
          value: !0
        }), ma.getLocalStorage = ma.getLocalStorageOrThrow = ma.getCrypto = ma.getCryptoOrThrow = Aa = ma.getLocation = ma.getLocationOrThrow = xa = ma.getNavigator = ma.getNavigatorOrThrow = Oa = ma.getDocument = ma.getDocumentOrThrow = ma.getFromWindowOrThrow = ma.getFromWindow = void 0, 
        ma.getFromWindow = wa, ma.getFromWindowOrThrow = _a, ma.getDocumentOrThrow = Ea;
        var Oa = ma.getDocument = Sa;
        function Ia() {
          return _a("navigator");
        }
        function Pa() {
          return wa("navigator");
        }
        ma.getNavigatorOrThrow = Ia;
        var xa = ma.getNavigator = Pa;
        function Na() {
          return _a("location");
        }
        function Ta() {
          return wa("location");
        }
        ma.getLocationOrThrow = Na;
        var Aa = ma.getLocation = Ta;
        function Ra() {
          return _a("crypto");
        }
        function ja() {
          return wa("crypto");
        }
        function La() {
          return _a("localStorage");
        }
        function Ca() {
          return wa("localStorage");
        }
        ma.getCryptoOrThrow = Ra, ma.getCrypto = ja, ma.getLocalStorageOrThrow = La, ma.getLocalStorage = Ca;
        var Ua = {};
        Object.defineProperty(Ua, "__esModule", {
          value: !0
        });
        var Ma = Ua.getWindowMetadata = void 0;
        const Da = ma;
        function ka() {
          let e, t;
          try {
            e = Da.getDocumentOrThrow(), t = Da.getLocationOrThrow();
          } catch {
            return null;
          }
          function r() {
            const r = e.getElementsByTagName("link"), i = [];
            for (let e = 0; e < r.length; e++) {
              const n = r[e], s = n.getAttribute("rel");
              if (s && s.toLowerCase().indexOf("icon") > -1) {
                const e = n.getAttribute("href");
                if (e) if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
                  let r = t.protocol + "//" + t.host;
                  if (0 === e.indexOf("/")) r += e; else {
                    const i = t.pathname.split("/");
                    i.pop();
                    r += i.join("/") + "/" + e;
                  }
                  i.push(r);
                } else if (0 === e.indexOf("//")) {
                  const r = t.protocol + e;
                  i.push(r);
                } else i.push(e);
              }
            }
            return i;
          }
          function i(...t) {
            const r = e.getElementsByTagName("meta");
            for (let e = 0; e < r.length; e++) {
              const i = r[e], n = [ "itemprop", "property", "name" ].map((e => i.getAttribute(e))).filter((e => !!e && t.includes(e)));
              if (n.length && n) {
                const e = i.getAttribute("content");
                if (e) return e;
              }
            }
            return "";
          }
          function n() {
            let t = i("name", "og:site_name", "og:title", "twitter:title");
            return t || (t = e.title), t;
          }
          function s() {
            return i("description", "og:description", "twitter:description", "keywords");
          }
          const o = n();
          return {
            description: s(),
            url: t.origin,
            icons: r(),
            name: o
          };
        }
        Ma = Ua.getWindowMetadata = ka;
        var za = {}, Ha = e => encodeURIComponent(e).replace(/[!'()*]/g, (e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`)), $a = "%[a-f0-9]{2}", qa = new RegExp("(" + $a + ")|([^%]+?)", "gi"), Ka = new RegExp("(" + $a + ")+", "gi");
        function Va(e, t) {
          try {
            return [ decodeURIComponent(e.join("")) ];
          } catch {}
          if (1 === e.length) return e;
          t = t || 1;
          var r = e.slice(0, t), i = e.slice(t);
          return Array.prototype.concat.call([], Va(r), Va(i));
        }
        function Ba(e) {
          try {
            return decodeURIComponent(e);
          } catch {
            for (var t = e.match(qa) || [], r = 1; r < t.length; r++) t = (e = Va(t, r).join("")).match(qa) || [];
            return e;
          }
        }
        function Fa(e) {
          for (var t = {
            "%FE%FF": "��",
            "%FF%FE": "��"
          }, r = Ka.exec(e); r; ) {
            try {
              t[r[0]] = decodeURIComponent(r[0]);
            } catch {
              var i = Ba(r[0]);
              i !== r[0] && (t[r[0]] = i);
            }
            r = Ka.exec(e);
          }
          t["%C2"] = "�";
          for (var n = Object.keys(t), s = 0; s < n.length; s++) {
            var o = n[s];
            e = e.replace(new RegExp(o, "g"), t[o]);
          }
          return e;
        }
        var Ga = function(e) {
          if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
          try {
            return e = e.replace(/\+/g, " "), decodeURIComponent(e);
          } catch {
            return Fa(e);
          }
        }, Wa = (e, t) => {
          if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
          if ("" === t) return [ e ];
          const r = e.indexOf(t);
          return -1 === r ? [ e ] : [ e.slice(0, r), e.slice(r + t.length) ];
        }, Ya = function(e, t) {
          for (var r = {}, i = Object.keys(e), n = Array.isArray(t), s = 0; s < i.length; s++) {
            var o = i[s], a = e[o];
            (n ? -1 !== t.indexOf(o) : t(o, a, e)) && (r[o] = a);
          }
          return r;
        };
        !function(e) {
          const t = Ha, r = Ga, i = Wa, n = Ya, s = e => null == e, o = Symbol("encodeFragmentIdentifier");
          function a(e) {
            switch (e.arrayFormat) {
             case "index":
              return t => (r, i) => {
                const n = r.length;
                return void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [ ...r, [ u(t, e), "[", n, "]" ].join("") ] : [ ...r, [ u(t, e), "[", u(n, e), "]=", u(i, e) ].join("") ];
              };

             case "bracket":
              return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [ ...r, [ u(t, e), "[]" ].join("") ] : [ ...r, [ u(t, e), "[]=", u(i, e) ].join("") ];

             case "colon-list-separator":
              return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [ ...r, [ u(t, e), ":list=" ].join("") ] : [ ...r, [ u(t, e), ":list=", u(i, e) ].join("") ];

             case "comma":
             case "separator":
             case "bracket-separator":
              {
                const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                return r => (i, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? i : (n = null === n ? "" : n, 
                0 === i.length ? [ [ u(r, e), t, u(n, e) ].join("") ] : [ [ i, u(n, e) ].join(e.arrayFormatSeparator) ]);
              }

             default:
              return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [ ...r, u(t, e) ] : [ ...r, [ u(t, e), "=", u(i, e) ].join("") ];
            }
          }
          function c(e) {
            let t;
            switch (e.arrayFormat) {
             case "index":
              return (e, r, i) => {
                t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === i[e] && (i[e] = {}), i[e][t[1]] = r) : i[e] = r;
              };

             case "bracket":
              return (e, r, i) => {
                t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== i[e] ? i[e] = [].concat(i[e], r) : i[e] = [ r ] : i[e] = r;
              };

             case "colon-list-separator":
              return (e, r, i) => {
                t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), t ? void 0 !== i[e] ? i[e] = [].concat(i[e], r) : i[e] = [ r ] : i[e] = r;
              };

             case "comma":
             case "separator":
              return (t, r, i) => {
                const n = "string" == typeof r && r.includes(e.arrayFormatSeparator), s = "string" == typeof r && !n && l(r, e).includes(e.arrayFormatSeparator);
                r = s ? l(r, e) : r;
                const o = n || s ? r.split(e.arrayFormatSeparator).map((t => l(t, e))) : null === r ? r : l(r, e);
                i[t] = o;
              };

             case "bracket-separator":
              return (t, r, i) => {
                const n = /(\[\])$/.test(t);
                if (t = t.replace(/\[\]$/, ""), !n) return void (i[t] = r && l(r, e));
                const s = null === r ? [] : r.split(e.arrayFormatSeparator).map((t => l(t, e)));
                void 0 !== i[t] ? i[t] = [].concat(i[t], s) : i[t] = s;
              };

             default:
              return (e, t, r) => {
                void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t;
              };
            }
          }
          function h(e) {
            if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string");
          }
          function u(e, r) {
            return r.encode ? r.strict ? t(e) : encodeURIComponent(e) : e;
          }
          function l(e, t) {
            return t.decode ? r(e) : e;
          }
          function p(e) {
            return Array.isArray(e) ? e.sort() : "object" == typeof e ? p(Object.keys(e)).sort(((e, t) => Number(e) - Number(t))).map((t => e[t])) : e;
          }
          function f(e) {
            const t = e.indexOf("#");
            return -1 !== t && (e = e.slice(0, t)), e;
          }
          function d(e) {
            let t = "";
            const r = e.indexOf("#");
            return -1 !== r && (t = e.slice(r)), t;
          }
          function y(e) {
            const t = (e = f(e)).indexOf("?");
            return -1 === t ? "" : e.slice(t + 1);
          }
          function g(e, t) {
            return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : t.parseBooleans && null !== e && ("true" === e.toLowerCase() || "false" === e.toLowerCase()) && (e = "true" === e.toLowerCase()), 
            e;
          }
          function b(e, t) {
            h((t = Object.assign({
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1
            }, t)).arrayFormatSeparator);
            const r = c(t), n = Object.create(null);
            if ("string" != typeof e || !(e = e.trim().replace(/^[?#&]/, ""))) return n;
            for (const s of e.split("&")) {
              if ("" === s) continue;
              let [e, o] = i(t.decode ? s.replace(/\+/g, " ") : s, "=");
              o = void 0 === o ? null : [ "comma", "separator", "bracket-separator" ].includes(t.arrayFormat) ? o : l(o, t), r(l(e, t), o, n);
            }
            for (const i of Object.keys(n)) {
              const e = n[i];
              if ("object" == typeof e && null !== e) for (const r of Object.keys(e)) e[r] = g(e[r], t); else n[i] = g(e, t);
            }
            return !1 === t.sort ? n : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce(((e, t) => {
              const r = n[t];
              return Boolean(r) && "object" == typeof r && !Array.isArray(r) ? e[t] = p(r) : e[t] = r, e;
            }), Object.create(null));
          }
          e.extract = y, e.parse = b, e.stringify = (e, t) => {
            if (!e) return "";
            h((t = Object.assign({
              encode: !0,
              strict: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ","
            }, t)).arrayFormatSeparator);
            const r = r => t.skipNull && s(e[r]) || t.skipEmptyString && "" === e[r], i = a(t), n = {};
            for (const s of Object.keys(e)) r(s) || (n[s] = e[s]);
            const o = Object.keys(n);
            return !1 !== t.sort && o.sort(t.sort), o.map((r => {
              const n = e[r];
              return void 0 === n ? "" : null === n ? u(r, t) : Array.isArray(n) ? 0 === n.length && "bracket-separator" === t.arrayFormat ? u(r, t) + "[]" : n.reduce(i(r), []).join("&") : u(r, t) + "=" + u(n, t);
            })).filter((e => e.length > 0)).join("&");
          }, e.parseUrl = (e, t) => {
            t = Object.assign({
              decode: !0
            }, t);
            const [r, n] = i(e, "#");
            return Object.assign({
              url: r.split("?")[0] || "",
              query: b(y(e), t)
            }, t && t.parseFragmentIdentifier && n ? {
              fragmentIdentifier: l(n, t)
            } : {});
          }, e.stringifyUrl = (t, r) => {
            r = Object.assign({
              encode: !0,
              strict: !0,
              [o]: !0
            }, r);
            const i = f(t.url).split("?")[0] || "", n = e.extract(t.url), s = e.parse(n, {
              sort: !1
            }), a = Object.assign(s, t.query);
            let c = e.stringify(a, r);
            c && (c = `?${c}`);
            let h = d(t.url);
            return t.fragmentIdentifier && (h = `#${r[o] ? u(t.fragmentIdentifier, r) : t.fragmentIdentifier}`), `${i}${c}${h}`;
          }, e.pick = (t, r, i) => {
            i = Object.assign({
              parseFragmentIdentifier: !0,
              [o]: !1
            }, i);
            const {url: s, query: a, fragmentIdentifier: c} = e.parseUrl(t, i);
            return e.stringifyUrl({
              url: s,
              query: n(a, r),
              fragmentIdentifier: c
            }, i);
          }, e.exclude = (t, r, i) => {
            const n = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
            return e.pick(t, n, i);
          };
        }(za);
        const Ja = {
          waku: {
            publish: "waku_publish",
            subscribe: "waku_subscribe",
            subscription: "waku_subscription",
            unsubscribe: "waku_unsubscribe"
          },
          irn: {
            publish: "irn_publish",
            subscribe: "irn_subscribe",
            subscription: "irn_subscription",
            unsubscribe: "irn_unsubscribe"
          },
          iridium: {
            publish: "iridium_publish",
            subscribe: "iridium_subscribe",
            subscription: "iridium_subscription",
            unsubscribe: "iridium_unsubscribe"
          }
        };
        function Xa(e, t) {
          return e.includes(":") ? [ e ] : t.chains || [];
        }
        const Za = "base10", Qa = "base16", ec = "base64pad", tc = "utf8", rc = 0, ic = 1, nc = 0, sc = 1, oc = 12, ac = 32;
        function cc() {
          const e = ra.generateKeyPair();
          return {
            privateKey: vo(e.secretKey, Qa),
            publicKey: vo(e.publicKey, Qa)
          };
        }
        function hc() {
          return vo(Si.randomBytes(ac), Qa);
        }
        function uc(e, t) {
          const r = ra.sharedKey(mo(e, Qa), mo(t, Qa));
          return vo(new ea(ta.SHA256, r).expand(ac), Qa);
        }
        function lc(e) {
          return vo(ta.hash(mo(e, Qa)), Qa);
        }
        function pc(e) {
          return vo(ta.hash(mo(e, tc)), Qa);
        }
        function fc(e) {
          return mo(`${e}`, Za);
        }
        function dc(e) {
          return Number(vo(e, Za));
        }
        function yc(e) {
          const t = fc(typeof e.type < "u" ? e.type : rc);
          if (dc(t) === ic && typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
          const r = typeof e.senderPublicKey < "u" ? mo(e.senderPublicKey, Qa) : void 0, i = typeof e.iv < "u" ? mo(e.iv, Qa) : Si.randomBytes(oc);
          return bc({
            type: t,
            sealed: new xo.ChaCha20Poly1305(mo(e.symKey, Qa)).seal(i, mo(e.message, tc)),
            iv: i,
            senderPublicKey: r
          });
        }
        function gc(e) {
          const t = new xo.ChaCha20Poly1305(mo(e.symKey, Qa)), {sealed: r, iv: i} = vc(e.encoded), n = t.open(i, r);
          if (null === n) throw new Error("Failed to decrypt");
          return vo(n, tc);
        }
        function bc(e) {
          if (dc(e.type) === ic) {
            if (typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
            return vo(Cn([ e.type, e.senderPublicKey, e.iv, e.sealed ]), ec);
          }
          return vo(Cn([ e.type, e.iv, e.sealed ]), ec);
        }
        function vc(e) {
          const t = mo(e, ec), r = t.slice(nc, sc), i = sc;
          if (dc(r) === ic) {
            const e = i + ac, n = e + oc, s = t.slice(i, e), o = t.slice(e, n);
            return {
              type: r,
              sealed: t.slice(n),
              iv: o,
              senderPublicKey: s
            };
          }
          const n = i + oc, s = t.slice(i, n);
          return {
            type: r,
            sealed: t.slice(n),
            iv: s
          };
        }
        function mc(e, t) {
          const r = vc(e);
          return wc({
            type: dc(r.type),
            senderPublicKey: typeof r.senderPublicKey < "u" ? vo(r.senderPublicKey, Qa) : void 0,
            receiverPublicKey: t?.receiverPublicKey
          });
        }
        function wc(e) {
          const t = e?.type || rc;
          if (t === ic) {
            if (typeof e?.senderPublicKey > "u") throw new Error("missing sender public key");
            if (typeof e?.receiverPublicKey > "u") throw new Error("missing receiver public key");
          }
          return {
            type: t,
            senderPublicKey: e?.senderPublicKey,
            receiverPublicKey: e?.receiverPublicKey
          };
        }
        function _c(e) {
          return e.type === ic && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey;
        }
        var Ec = Object.defineProperty, Sc = Object.getOwnPropertySymbols, Oc = Object.prototype.hasOwnProperty, Ic = Object.prototype.propertyIsEnumerable, Pc = (e, t, r) => t in e ? Ec(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r, xc = (e, t) => {
          for (var r in t || (t = {})) Oc.call(t, r) && Pc(e, r, t[r]);
          if (Sc) for (var r of Sc(t)) Ic.call(t, r) && Pc(e, r, t[r]);
          return e;
        };
        const Nc = "ReactNative", Tc = {
          reactNative: "react-native",
          node: "node",
          browser: "browser",
          unknown: "unknown"
        }, Ac = "js";
        function Rc() {
          return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
        }
        function jc() {
          return !Oa() && !!xa() && navigator.product === Nc;
        }
        function Lc() {
          return !Rc() && !!xa();
        }
        function Cc() {
          return jc() ? Tc.reactNative : Rc() ? Tc.node : Lc() ? Tc.browser : Tc.unknown;
        }
        function Uc(e, t) {
          let r = za.parse(e);
          return r = xc(xc({}, r), t), e = za.stringify(r);
        }
        function Mc() {
          return Ma() || {
            name: "",
            description: "",
            url: "",
            icons: [ "" ]
          };
        }
        function Dc() {
          const e = fa();
          if (null === e) return "unknown";
          const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
          return "browser" === e.type ? [ t, e.name, e.version ].join("-") : [ t, e.version ].join("-");
        }
        function kc() {
          var e;
          const t = Cc();
          return t === Tc.browser ? [ t, (null == (e = Aa()) ? void 0 : e.host) || "unknown" ].join(":") : t;
        }
        function zc(e, t, r) {
          const i = Dc(), n = kc();
          return [ [ e, t ].join("-"), [ Ac, r ].join("-"), i, n ].join("/");
        }
        function Hc({protocol: e, version: t, relayUrl: r, sdkVersion: i, auth: n, projectId: s}) {
          const o = r.split("?"), a = {
            auth: n,
            ua: zc(e, t, i),
            projectId: s
          }, c = Uc(o[1] || "", a);
          return o[0] + "?" + c;
        }
        function $c(e, t) {
          return e.filter((e => t.includes(e))).length === e.length;
        }
        function qc(e) {
          return Object.fromEntries(e.entries());
        }
        function Kc(e) {
          return new Map(Object.entries(e));
        }
        function Vc(e) {
          const t = bt.toMiliseconds(e || bt.FIVE_MINUTES);
          let r, i, n;
          return {
            resolve: e => {
              n && r && (clearTimeout(n), r(e));
            },
            reject: e => {
              n && i && (clearTimeout(n), i(e));
            },
            done: () => new Promise(((e, s) => {
              n = setTimeout(s, t), r = e, i = s;
            }))
          };
        }
        function Bc(e, t) {
          return new Promise((async (r, i) => {
            const n = setTimeout((() => i()), t), s = await e;
            clearTimeout(n), r(s);
          }));
        }
        function Fc(e, t) {
          if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
          if ("topic" === e.toLowerCase()) {
            if ("string" != typeof t) throw new Error('Value must be "string" for expirer target type: topic');
            return `topic:${t}`;
          }
          if ("id" === e.toLowerCase()) {
            if ("number" != typeof t) throw new Error('Value must be "number" for expirer target type: id');
            return `id:${t}`;
          }
          throw new Error(`Unknown expirer target type: ${e}`);
        }
        function Gc(e) {
          return Fc("topic", e);
        }
        function Wc(e) {
          return Fc("id", e);
        }
        function Yc(e) {
          const [t, r] = e.split(":"), i = {
            id: void 0,
            topic: void 0
          };
          if ("topic" === t && "string" == typeof r) i.topic = r; else {
            if ("id" !== t || !Number.isInteger(Number(r))) throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
            i.id = Number(r);
          }
          return i;
        }
        function Jc(e, t) {
          return bt.fromMiliseconds((t || Date.now()) + bt.toMiliseconds(e));
        }
        function Xc(e) {
          return Date.now() >= bt.toMiliseconds(e);
        }
        function Zc(e, t) {
          return `${e}${t ? `:${t}` : ""}`;
        }
        const Qc = "irn";
        function eh(e) {
          return e?.relay || {
            protocol: Qc
          };
        }
        function th(e) {
          const t = Ja[e];
          if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${e}`);
          return t;
        }
        var rh = Object.defineProperty, ih = Object.getOwnPropertySymbols, nh = Object.prototype.hasOwnProperty, sh = Object.prototype.propertyIsEnumerable, oh = (e, t, r) => t in e ? rh(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r, ah = (e, t) => {
          for (var r in t || (t = {})) nh.call(t, r) && oh(e, r, t[r]);
          if (ih) for (var r of ih(t)) sh.call(t, r) && oh(e, r, t[r]);
          return e;
        };
        function ch(e, t = "-") {
          const r = {}, i = "relay" + t;
          return Object.keys(e).forEach((t => {
            if (t.startsWith(i)) {
              const n = t.replace(i, ""), s = e[t];
              r[n] = s;
            }
          })), r;
        }
        function hh(e) {
          const t = e.indexOf(":"), r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0, i = e.substring(0, t), n = e.substring(t + 1, r).split("@"), s = typeof r < "u" ? e.substring(r) : "", o = za.parse(s);
          return {
            protocol: i,
            topic: n[0],
            version: parseInt(n[1], 10),
            symKey: o.symKey,
            relay: ch(o)
          };
        }
        function uh(e, t = "-") {
          const r = "relay", i = {};
          return Object.keys(e).forEach((n => {
            const s = r + t + n;
            e[n] && (i[s] = e[n]);
          })), i;
        }
        function lh(e) {
          return `${e.protocol}:${e.topic}@${e.version}?` + za.stringify(ah({
            symKey: e.symKey
          }, uh(e.relay)));
        }
        function ph(e) {
          const t = [];
          return e.forEach((e => {
            const [r, i] = e.split(":");
            t.push(`${r}:${i}`);
          })), t;
        }
        function fh(e) {
          const t = [];
          return Object.values(e).forEach((e => {
            t.push(...ph(e.accounts));
          })), t;
        }
        function dh(e, t) {
          const r = [];
          return Object.values(e).forEach((e => {
            ph(e.accounts).includes(t) && r.push(...e.methods);
          })), r;
        }
        function yh(e, t) {
          const r = [];
          return Object.values(e).forEach((e => {
            ph(e.accounts).includes(t) && r.push(...e.events);
          })), r;
        }
        function gh(e, t) {
          const r = $h(e, t);
          if (r) throw new Error(r.message);
          const i = {};
          for (const [n, s] of Object.entries(e)) i[n] = {
            methods: s.methods,
            events: s.events,
            chains: s.accounts.map((e => `${e.split(":")[0]}:${e.split(":")[1]}`))
          };
          return i;
        }
        const bh = {
          INVALID_METHOD: {
            message: "Invalid method.",
            code: 1001
          },
          INVALID_EVENT: {
            message: "Invalid event.",
            code: 1002
          },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005
          },
          UNAUTHORIZED_METHOD: {
            message: "Unauthorized method.",
            code: 3001
          },
          UNAUTHORIZED_EVENT: {
            message: "Unauthorized event.",
            code: 3002
          },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004
          },
          USER_REJECTED: {
            message: "User rejected.",
            code: 5e3
          },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003
          },
          UNSUPPORTED_CHAINS: {
            message: "Unsupported chains.",
            code: 5100
          },
          UNSUPPORTED_METHODS: {
            message: "Unsupported methods.",
            code: 5101
          },
          UNSUPPORTED_EVENTS: {
            message: "Unsupported events.",
            code: 5102
          },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104
          },
          USER_DISCONNECTED: {
            message: "User disconnected.",
            code: 6e3
          },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001
          }
        }, vh = {
          NOT_INITIALIZED: {
            message: "Not initialized.",
            code: 1
          },
          NO_MATCHING_KEY: {
            message: "No matching key.",
            code: 2
          },
          RESTORE_WILL_OVERRIDE: {
            message: "Restore will override.",
            code: 3
          },
          RESUBSCRIBED: {
            message: "Resubscribed.",
            code: 4
          },
          MISSING_OR_INVALID: {
            message: "Missing or invalid.",
            code: 5
          },
          EXPIRED: {
            message: "Expired.",
            code: 6
          },
          UNKNOWN_TYPE: {
            message: "Unknown type.",
            code: 7
          },
          MISMATCHED_TOPIC: {
            message: "Mismatched topic.",
            code: 8
          },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9
          }
        };
        function mh(e, t) {
          const {message: r, code: i} = vh[e];
          return {
            message: t ? `${r} ${t}` : r,
            code: i
          };
        }
        function wh(e, t) {
          const {message: r, code: i} = bh[e];
          return {
            message: t ? `${r} ${t}` : r,
            code: i
          };
        }
        function _h(e, t) {
          return !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t));
        }
        function Eh(e) {
          return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
        }
        function Sh(e) {
          return typeof e > "u";
        }
        function Oh(e, t) {
          return !(!t || !Sh(e)) || "string" == typeof e && Boolean(e.trim().length);
        }
        function Ih(e, t) {
          return !(!t || !Sh(e)) || "number" == typeof e && !isNaN(e);
        }
        function Ph(e, t) {
          const {requiredNamespaces: r} = t, i = Object.keys(e.namespaces), n = Object.keys(r);
          let s = !0;
          return !!$c(n, i) && (i.forEach((t => {
            const {accounts: i, methods: n, events: o} = e.namespaces[t], a = ph(i), c = r[t];
            $c(Xa(t, c), a) && $c(c.methods, n) && $c(c.events, o) || (s = !1);
          })), s);
        }
        function xh(e) {
          return !(!Oh(e, !1) || !e.includes(":")) && 2 === e.split(":").length;
        }
        function Nh(e) {
          if (Oh(e, !1) && e.includes(":")) {
            const t = e.split(":");
            if (3 === t.length) {
              const e = t[0] + ":" + t[1];
              return !!t[2] && xh(e);
            }
          }
          return !1;
        }
        function Th(e) {
          if (Oh(e, !1)) try {
            return typeof new URL(e) < "u";
          } catch {
            return !1;
          }
          return !1;
        }
        function Ah(e) {
          var t;
          return null == (t = e?.proposer) ? void 0 : t.publicKey;
        }
        function Rh(e) {
          return e?.topic;
        }
        function jh(e, t) {
          let r = null;
          return Oh(e?.publicKey, !1) || (r = mh("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r;
        }
        function Lh(e) {
          let t = !0;
          return _h(e) ? e.length && (t = e.every((e => Oh(e, !1)))) : t = !1, t;
        }
        function Ch(e, t, r) {
          let i = null;
          return _h(t) ? t.forEach((t => {
            i || (!xh(t) || !t.includes(e)) && (i = wh("UNSUPPORTED_CHAINS", `${r}, chain ${t} should be a string and conform to "namespace:chainId" format`));
          })) : i = wh("UNSUPPORTED_CHAINS", `${r}, chains ${t} should be an array of strings conforming to "namespace:chainId" format`), 
          i;
        }
        function Uh(e, t) {
          let r = null;
          return Object.entries(e).forEach((([e, i]) => {
            if (r) return;
            const n = Ch(e, Xa(e, i), `${t} requiredNamespace`);
            n && (r = n);
          })), r;
        }
        function Mh(e, t) {
          let r = null;
          return _h(e) ? e.forEach((e => {
            r || Nh(e) || (r = wh("UNSUPPORTED_ACCOUNTS", `${t}, account ${e} should be a string and conform to "namespace:chainId:address" format`));
          })) : r = wh("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), 
          r;
        }
        function Dh(e, t) {
          let r = null;
          return Object.values(e).forEach((e => {
            if (r) return;
            const i = Mh(e?.accounts, `${t} namespace`);
            i && (r = i);
          })), r;
        }
        function kh(e, t) {
          let r = null;
          return Lh(e?.methods) ? Lh(e?.events) || (r = wh("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = wh("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), 
          r;
        }
        function zh(e, t) {
          let r = null;
          return Object.values(e).forEach((e => {
            if (r) return;
            const i = kh(e, `${t}, namespace`);
            i && (r = i);
          })), r;
        }
        function Hh(e, t, r) {
          let i = null;
          if (e && Eh(e)) {
            const r = zh(e, t);
            r && (i = r);
            const n = Uh(e, t);
            n && (i = n);
          } else i = mh("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
          return i;
        }
        function $h(e, t) {
          let r = null;
          if (e && Eh(e)) {
            const i = zh(e, t);
            i && (r = i);
            const n = Dh(e, t);
            n && (r = n);
          } else r = mh("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
          return r;
        }
        function qh(e) {
          return Oh(e.protocol, !0);
        }
        function Kh(e, t) {
          let r = !1;
          return t && !e ? r = !0 : e && _h(e) && e.length && e.forEach((e => {
            r = qh(e);
          })), r;
        }
        function Vh(e) {
          return "number" == typeof e;
        }
        function Bh(e) {
          return typeof e < "u" && null !== typeof e;
        }
        function Fh(e) {
          return !!(e && "object" == typeof e && e.code && Ih(e.code, !1) && e.message && Oh(e.message, !1));
        }
        function Gh(e) {
          return !(Sh(e) || !Oh(e.method, !1));
        }
        function Wh(e) {
          return !(Sh(e) || Sh(e.result) && Sh(e.error) || !Ih(e.id, !1) || !Oh(e.jsonrpc, !1));
        }
        function Yh(e) {
          return !(Sh(e) || !Oh(e.name, !1));
        }
        function Jh(e, t) {
          return !(!xh(t) || !fh(e).includes(t));
        }
        function Xh(e, t, r) {
          return !!Oh(r, !1) && dh(e, t).includes(r);
        }
        function Zh(e, t, r) {
          return !!Oh(r, !1) && yh(e, t).includes(r);
        }
        function Qh(e, t, r, i) {
          let n = null;
          const s = Object.keys(e);
          return $c(s, Object.keys(t)) ? s.forEach((i => {
            if (n) return;
            const s = ph(t[i].accounts);
            $c(Xa(i, e[i]), s) ? $c(e[i].methods, t[i].methods) ? $c(e[i].events, t[i].events) || (n = mh("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${i}`)) : n = mh("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${i}`) : n = mh("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace chains for ${i}`);
          })) : n = mh("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy ${i}`), n;
        }
        function eu(e, t) {
          return Ih(e, !1) && e <= t.max && e >= t.min;
        }
        const tu = "INTERNAL_ERROR", ru = "SERVER_ERROR", iu = [ -32700, -32600, -32601, -32602, -32603 ], nu = {
          PARSE_ERROR: {
            code: -32700,
            message: "Parse error"
          },
          INVALID_REQUEST: {
            code: -32600,
            message: "Invalid Request"
          },
          METHOD_NOT_FOUND: {
            code: -32601,
            message: "Method not found"
          },
          INVALID_PARAMS: {
            code: -32602,
            message: "Invalid params"
          },
          [tu]: {
            code: -32603,
            message: "Internal error"
          },
          [ru]: {
            code: -32e3,
            message: "Server error"
          }
        }, su = ru;
        function ou(e) {
          return iu.includes(e);
        }
        function au(e) {
          return Object.keys(nu).includes(e) ? nu[e] : nu[su];
        }
        function cu(e) {
          return Object.values(nu).find((t => t.code === e)) || nu[su];
        }
        function hu(e, t, r) {
          return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : e;
        }
        var uu = {};
        var lu = function(e, t) {
          return (lu = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(e, t) {
            e.__proto__ = t;
          } || function(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
        };
        function pu(e, t) {
          function r() {
            this.constructor = e;
          }
          lu(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
        }
        var fu = function() {
          return fu = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++) for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }, fu.apply(this, arguments);
        };
        function du(e, t) {
          var r = {};
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
          }
          return r;
        }
        function yu(e, t, r, i) {
          var n, s = arguments.length, o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
          return s > 3 && o && Object.defineProperty(t, r, o), o;
        }
        function gu(e, t) {
          return function(r, i) {
            t(r, i, e);
          };
        }
        function bu(e, t) {
          if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
        }
        function vu(e, t, r, i) {
          function n(e) {
            return e instanceof r ? e : new r((function(t) {
              t(e);
            }));
          }
          return new (r || (r = Promise))((function(r, s) {
            function o(e) {
              try {
                c(i.next(e));
              } catch (t) {
                s(t);
              }
            }
            function a(e) {
              try {
                c(i.throw(e));
              } catch (t) {
                s(t);
              }
            }
            function c(e) {
              e.done ? r(e.value) : n(e.value).then(o, a);
            }
            c((i = i.apply(e, t || [])).next());
          }));
        }
        function mu(e, t) {
          var r, i, n, s, o = {
            label: 0,
            sent: function() {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: []
          };
          return s = {
            next: a(0),
            throw: a(1),
            return: a(2)
          }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this;
          }), s;
          function a(e) {
            return function(t) {
              return c([ e, t ]);
            };
          }
          function c(s) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;o; ) try {
              if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
              switch (i = 0, n && (s = [ 2 & s[0], n.value ]), s[0]) {
               case 0:
               case 1:
                n = s;
                break;

               case 4:
                return o.label++, {
                  value: s[1],
                  done: !1
                };

               case 5:
                o.label++, i = s[1], s = [ 0 ];
                continue;

               case 7:
                s = o.ops.pop(), o.trys.pop();
                continue;

               default:
                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                  o = 0;
                  continue;
                }
                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                  o.label = s[1];
                  break;
                }
                if (6 === s[0] && o.label < n[1]) {
                  o.label = n[1], n = s;
                  break;
                }
                if (n && o.label < n[2]) {
                  o.label = n[2], o.ops.push(s);
                  break;
                }
                n[2] && o.ops.pop(), o.trys.pop();
                continue;
              }
              s = t.call(e, o);
            } catch (a) {
              s = [ 6, a ], i = 0;
            } finally {
              r = n = 0;
            }
            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }
        }
        function wu(e, t, r, i) {
          void 0 === i && (i = r), e[i] = t[r];
        }
        function _u(e, t) {
          for (var r in e) "default" !== r && !t.hasOwnProperty(r) && (t[r] = e[r]);
        }
        function Eu(e) {
          var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], i = 0;
          if (r) return r.call(e);
          if (e && "number" == typeof e.length) return {
            next: function() {
              return e && i >= e.length && (e = void 0), {
                value: e && e[i++],
                done: !e
              };
            }
          };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function Su(e, t) {
          var r = "function" == typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var i, n, s = r.call(e), o = [];
          try {
            for (;(void 0 === t || t-- > 0) && !(i = s.next()).done; ) o.push(i.value);
          } catch (a) {
            n = {
              error: a
            };
          } finally {
            try {
              i && !i.done && (r = s.return) && r.call(s);
            } finally {
              if (n) throw n.error;
            }
          }
          return o;
        }
        function Ou() {
          for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Su(arguments[t]));
          return e;
        }
        function Iu() {
          for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
          var i = Array(e), n = 0;
          for (t = 0; t < r; t++) for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
          return i;
        }
        function Pu(e) {
          return this instanceof Pu ? (this.v = e, this) : new Pu(e);
        }
        function xu(e, t, r) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var i, n = r.apply(e, t || []), s = [];
          return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function o(e) {
            n[e] && (i[e] = function(t) {
              return new Promise((function(r, i) {
                s.push([ e, t, r, i ]) > 1 || a(e, t);
              }));
            });
          }
          function a(e, t) {
            try {
              c(n[e](t));
            } catch (r) {
              l(s[0][3], r);
            }
          }
          function c(e) {
            e.value instanceof Pu ? Promise.resolve(e.value.v).then(h, u) : l(s[0][2], e);
          }
          function h(e) {
            a("next", e);
          }
          function u(e) {
            a("throw", e);
          }
          function l(e, t) {
            e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
          }
        }
        function Nu(e) {
          var t, r;
          return t = {}, i("next"), i("throw", (function(e) {
            throw e;
          })), i("return"), t[Symbol.iterator] = function() {
            return this;
          }, t;
          function i(i, n) {
            t[i] = e[i] ? function(t) {
              return (r = !r) ? {
                value: Pu(e[i](t)),
                done: "return" === i
              } : n ? n(t) : t;
            } : n;
          }
        }
        function Tu(e) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var t, r = e[Symbol.asyncIterator];
          return r ? r.call(e) : (e = "function" == typeof Eu ? Eu(e) : e[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), 
          t[Symbol.asyncIterator] = function() {
            return this;
          }, t);
          function i(r) {
            t[r] = e[r] && function(t) {
              return new Promise((function(i, s) {
                n(i, s, (t = e[r](t)).done, t.value);
              }));
            };
          }
          function n(e, t, r, i) {
            Promise.resolve(i).then((function(t) {
              e({
                value: t,
                done: r
              });
            }), t);
          }
        }
        function Au(e, t) {
          return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
          }) : e.raw = t, e;
        }
        function Ru(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e) for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t.default = e, t;
        }
        function ju(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }
        function Lu(e, t) {
          if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
          return t.get(e);
        }
        function Cu(e, t, r) {
          if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
          return t.set(e, r), r;
        }
        var Uu, Mu = n(Object.freeze({
          __proto__: null,
          __extends: pu,
          get __assign() {
            return fu;
          },
          __rest: du,
          __decorate: yu,
          __param: gu,
          __metadata: bu,
          __awaiter: vu,
          __generator: mu,
          __createBinding: wu,
          __exportStar: _u,
          __values: Eu,
          __read: Su,
          __spread: Ou,
          __spreadArrays: Iu,
          __await: Pu,
          __asyncGenerator: xu,
          __asyncDelegator: Nu,
          __asyncValues: Tu,
          __makeTemplateObject: Au,
          __importStar: Ru,
          __importDefault: ju,
          __classPrivateFieldGet: Lu,
          __classPrivateFieldSet: Cu
        })), Du = {};
        function ku() {
          if (Uu) return Du;
          function e() {
            return t?.crypto || t?.msCrypto || {};
          }
          function r() {
            const t = e();
            return t.subtle || t.webkitSubtle;
          }
          function i() {
            return !!e() && !!r();
          }
          return Uu = 1, Object.defineProperty(Du, "__esModule", {
            value: !0
          }), Du.isBrowserCryptoAvailable = Du.getSubtleCrypto = Du.getBrowerCrypto = void 0, Du.getBrowerCrypto = e, Du.getSubtleCrypto = r, 
          Du.isBrowserCryptoAvailable = i, Du;
        }
        var zu, Hu = {};
        function $u() {
          if (zu) return Hu;
          function e() {
            return typeof document > "u" && typeof navigator < "u" && "ReactNative" === navigator.product;
          }
          function t() {
            return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
          }
          function r() {
            return !e() && !t();
          }
          return zu = 1, Object.defineProperty(Hu, "__esModule", {
            value: !0
          }), Hu.isBrowser = Hu.isNode = Hu.isReactNative = void 0, Hu.isReactNative = e, Hu.isNode = t, Hu.isBrowser = r, Hu;
        }
        function qu() {
          return Date.now() * Math.pow(10, 3) + Math.floor(Math.random() * Math.pow(10, 3));
        }
        function Ku(e, t, r) {
          return {
            id: r || qu(),
            jsonrpc: "2.0",
            method: e,
            params: t
          };
        }
        function Vu(e, t) {
          return {
            id: e,
            jsonrpc: "2.0",
            result: t
          };
        }
        function Bu(e, t, r) {
          return {
            id: e,
            jsonrpc: "2.0",
            error: Fu(t, r)
          };
        }
        function Fu(e, t) {
          return typeof e > "u" ? au(tu) : ("string" == typeof e && (e = Object.assign(Object.assign({}, au(ru)), {
            message: e
          })), typeof t < "u" && (e.data = t), ou(e.code) && (e = cu(e.code)), e);
        }
        !function(e) {
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          const t = Mu;
          t.__exportStar(ku(), e), t.__exportStar($u(), e);
        }(uu);
        class Gu {}
        class Wu extends Gu {
          constructor() {
            super();
          }
        }
        class Yu extends Wu {
          constructor(e) {
            super();
          }
        }
        const Ju = "^https?:", Xu = "^wss?:";
        function Zu(e) {
          const t = e.match(new RegExp(/^\w+:/, "gi"));
          if (t && t.length) return t[0];
        }
        function Qu(e, t) {
          const r = Zu(e);
          return !(typeof r > "u") && new RegExp(t).test(r);
        }
        function el(e) {
          return Qu(e, Ju);
        }
        function tl(e) {
          return Qu(e, Xu);
        }
        function rl(e) {
          return new RegExp("wss?://localhost(:d{2,5})?").test(e);
        }
        function il(e) {
          return "object" == typeof e && "id" in e && "jsonrpc" in e && "2.0" === e.jsonrpc;
        }
        function nl(e) {
          return il(e) && "method" in e;
        }
        function sl(e) {
          return il(e) && (ol(e) || al(e));
        }
        function ol(e) {
          return "result" in e;
        }
        function al(e) {
          return "error" in e;
        }
        class cl extends Yu {
          constructor(e) {
            super(e), this.events = new R.exports.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), 
            this.connection.connected && this.registerEventListeners();
          }
          async connect(e = this.connection) {
            await this.open(e);
          }
          async disconnect() {
            await this.close();
          }
          on(e, t) {
            this.events.on(e, t);
          }
          once(e, t) {
            this.events.once(e, t);
          }
          off(e, t) {
            this.events.off(e, t);
          }
          removeListener(e, t) {
            this.events.removeListener(e, t);
          }
          async request(e, t) {
            return this.requestStrict(Ku(e.method, e.params || []), t);
          }
          async requestStrict(e, t) {
            return new Promise((async (r, i) => {
              if (!this.connection.connected) try {
                await this.open();
              } catch (n) {
                i(n);
              }
              this.events.on(`${e.id}`, (e => {
                al(e) ? i(e.error) : r(e.result);
              }));
              try {
                await this.connection.send(e, t);
              } catch (n) {
                i(n);
              }
            }));
          }
          setConnection(e = this.connection) {
            return e;
          }
          onPayload(e) {
            this.events.emit("payload", e), sl(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
              type: e.method,
              data: e.params
            });
          }
          async open(e = this.connection) {
            this.connection === e && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof e && (await this.connection.open(e), 
            e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), 
            this.events.emit("connect"));
          }
          async close() {
            await this.connection.close();
          }
          registerEventListeners() {
            this.hasRegisteredEventListeners || (this.connection.on("payload", (e => this.onPayload(e))), this.connection.on("close", (() => this.events.emit("disconnect"))), 
            this.connection.on("error", (e => this.events.emit("error", e))), this.hasRegisteredEventListeners = !0);
          }
        }
        const hl = 10, ul = () => typeof window < "u", ll = (() => typeof r.g < "u" && typeof r.g.WebSocket < "u" ? r.g.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : r(7026))();
        class pl {
          constructor(e) {
            if (this.url = e, this.events = new R.exports.EventEmitter, this.registering = !1, !tl(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
            this.url = e;
          }
          get connected() {
            return typeof this.socket < "u";
          }
          get connecting() {
            return this.registering;
          }
          on(e, t) {
            this.events.on(e, t);
          }
          once(e, t) {
            this.events.once(e, t);
          }
          off(e, t) {
            this.events.off(e, t);
          }
          removeListener(e, t) {
            this.events.removeListener(e, t);
          }
          async open(e = this.url) {
            await this.register(e);
          }
          async close() {
            return new Promise(((e, t) => {
              typeof this.socket > "u" ? t(new Error("Connection already closed")) : (this.socket.onclose = () => {
                this.onClose(), e();
              }, this.socket.close());
            }));
          }
          async send(e, t) {
            typeof this.socket > "u" && (this.socket = await this.register());
            try {
              this.socket.send(_i(e));
            } catch (r) {
              this.onError(e.id, r);
            }
          }
          register(e = this.url) {
            if (!tl(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
            if (this.registering) {
              const e = this.events.getMaxListeners();
              return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), 
              new Promise(((e, t) => {
                this.events.once("register_error", (e => {
                  this.resetMaxListeners(), t(e);
                })), this.events.once("open", (() => {
                  if (this.resetMaxListeners(), typeof this.socket > "u") return t(new Error("WebSocket connection is missing or invalid"));
                  e(this.socket);
                }));
              }));
            }
            return this.url = e, this.registering = !0, new Promise(((t, r) => {
              const i = uu.isReactNative() ? void 0 : {
                rejectUnauthorized: !rl(e)
              }, n = new ll(e, [], i);
              ul() ? n.onerror = e => {
                const t = e;
                r(this.emitError(t.error));
              } : n.on("error", (e => {
                r(this.emitError(e));
              })), n.onopen = () => {
                this.onOpen(n), t(n);
              };
            }));
          }
          onOpen(e) {
            e.onmessage = e => this.onPayload(e), e.onclose = () => this.onClose(), this.socket = e, this.registering = !1, this.events.emit("open");
          }
          onClose() {
            this.socket = void 0, this.registering = !1, this.events.emit("close");
          }
          onPayload(e) {
            if (typeof e.data > "u") return;
            const t = "string" == typeof e.data ? wi(e.data) : e.data;
            this.events.emit("payload", t);
          }
          onError(e, t) {
            const r = this.parseError(t), i = Bu(e, r.message || r.toString());
            this.events.emit("payload", i);
          }
          parseError(e, t = this.url) {
            return hu(e, t, "WS");
          }
          resetMaxListeners() {
            this.events.getMaxListeners() > hl && this.events.setMaxListeners(hl);
          }
          emitError(e) {
            const t = this.parseError(new Error(e?.message || `WebSocket connection failed for URL: ${this.url}`));
            return this.events.emit("register_error", t), t;
          }
        }
        var fl = {
          exports: {}
        };
        !function(e, r) {
          var i = 200, n = "__lodash_hash_undefined__", s = 1, o = 2, a = 9007199254740991, c = "[object Arguments]", h = "[object Array]", u = "[object AsyncFunction]", l = "[object Boolean]", p = "[object Date]", f = "[object Error]", d = "[object Function]", y = "[object GeneratorFunction]", g = "[object Map]", b = "[object Number]", v = "[object Null]", m = "[object Object]", w = "[object Promise]", _ = "[object Proxy]", E = "[object RegExp]", S = "[object Set]", O = "[object String]", I = "[object Symbol]", P = "[object Undefined]", x = "[object WeakMap]", N = "[object ArrayBuffer]", T = "[object DataView]", A = "[object Float64Array]", R = "[object Int8Array]", j = "[object Int16Array]", L = "[object Int32Array]", C = "[object Uint8Array]", U = "[object Uint8ClampedArray]", M = "[object Uint16Array]", D = "[object Uint32Array]", k = /[\\^$.*+?()[\]{}|]/g, z = /^\[object .+?Constructor\]$/, H = /^(?:0|[1-9]\d*)$/, $ = {};
          $["[object Float32Array]"] = $[A] = $[R] = $[j] = $[L] = $[C] = $[U] = $[M] = $[D] = !0, $[c] = $[h] = $[N] = $[l] = $[T] = $[p] = $[f] = $[d] = $[g] = $[b] = $[m] = $[E] = $[S] = $[O] = $[x] = !1;
          var q = "object" == typeof t && t && t.Object === Object && t, K = "object" == typeof self && self && self.Object === Object && self, V = q || K || Function("return this")(), B = r && !r.nodeType && r, F = B && e && !e.nodeType && e, G = F && F.exports === B, W = G && q.process, Y = function() {
            try {
              return W && W.binding && W.binding("util");
            } catch {}
          }(), J = Y && Y.isTypedArray;
          function X(e, t) {
            for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i; ) {
              var o = e[r];
              t(o, r, e) && (s[n++] = o);
            }
            return s;
          }
          function Z(e, t) {
            for (var r = -1, i = t.length, n = e.length; ++r < i; ) e[n + r] = t[r];
            return e;
          }
          function Q(e, t) {
            for (var r = -1, i = null == e ? 0 : e.length; ++r < i; ) if (t(e[r], r, e)) return !0;
            return !1;
          }
          function ee(e, t) {
            for (var r = -1, i = Array(e); ++r < e; ) i[r] = t(r);
            return i;
          }
          function te(e) {
            return function(t) {
              return e(t);
            };
          }
          function re(e, t) {
            return e.has(t);
          }
          function ie(e, t) {
            return e?.[t];
          }
          function ne(e) {
            var t = -1, r = Array(e.size);
            return e.forEach((function(e, i) {
              r[++t] = [ i, e ];
            })), r;
          }
          function se(e, t) {
            return function(r) {
              return e(t(r));
            };
          }
          function oe(e) {
            var t = -1, r = Array(e.size);
            return e.forEach((function(e) {
              r[++t] = e;
            })), r;
          }
          var ae = Array.prototype, ce = Function.prototype, he = Object.prototype, ue = V["__core-js_shared__"], le = ce.toString, pe = he.hasOwnProperty, fe = function() {
            var e = /[^.]+$/.exec(ue && ue.keys && ue.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : "";
          }(), de = he.toString, ye = RegExp("^" + le.call(pe).replace(k, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ge = G ? V.Buffer : void 0, be = V.Symbol, ve = V.Uint8Array, me = he.propertyIsEnumerable, we = ae.splice, _e = be ? be.toStringTag : void 0, Ee = Object.getOwnPropertySymbols, Se = ge ? ge.isBuffer : void 0, Oe = se(Object.keys, Object), Ie = Pt(V, "DataView"), Pe = Pt(V, "Map"), xe = Pt(V, "Promise"), Ne = Pt(V, "Set"), Te = Pt(V, "WeakMap"), Ae = Pt(Object, "create"), Re = Ut(Ie), je = Ut(Pe), Le = Ut(xe), Ce = Ut(Ne), Ue = Ut(Te), Me = be ? be.prototype : void 0, De = Me ? Me.valueOf : void 0;
          function ke(e) {
            var t = -1, r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
              var i = e[t];
              this.set(i[0], i[1]);
            }
          }
          function ze() {
            this.__data__ = Ae ? Ae(null) : {}, this.size = 0;
          }
          function He(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t;
          }
          function $e(e) {
            var t = this.__data__;
            if (Ae) {
              var r = t[e];
              return r === n ? void 0 : r;
            }
            return pe.call(t, e) ? t[e] : void 0;
          }
          function qe(e) {
            var t = this.__data__;
            return Ae ? void 0 !== t[e] : pe.call(t, e);
          }
          function Ke(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = Ae && void 0 === t ? n : t, this;
          }
          function Ve(e) {
            var t = -1, r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
              var i = e[t];
              this.set(i[0], i[1]);
            }
          }
          function Be() {
            this.__data__ = [], this.size = 0;
          }
          function Fe(e) {
            var t = this.__data__, r = pt(t, e);
            return !(r < 0) && (r == t.length - 1 ? t.pop() : we.call(t, r, 1), --this.size, !0);
          }
          function Ge(e) {
            var t = this.__data__, r = pt(t, e);
            return r < 0 ? void 0 : t[r][1];
          }
          function We(e) {
            return pt(this.__data__, e) > -1;
          }
          function Ye(e, t) {
            var r = this.__data__, i = pt(r, e);
            return i < 0 ? (++this.size, r.push([ e, t ])) : r[i][1] = t, this;
          }
          function Je(e) {
            var t = -1, r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
              var i = e[t];
              this.set(i[0], i[1]);
            }
          }
          function Xe() {
            this.size = 0, this.__data__ = {
              hash: new ke,
              map: new (Pe || Ve),
              string: new ke
            };
          }
          function Ze(e) {
            var t = It(this, e).delete(e);
            return this.size -= t ? 1 : 0, t;
          }
          function Qe(e) {
            return It(this, e).get(e);
          }
          function et(e) {
            return It(this, e).has(e);
          }
          function tt(e, t) {
            var r = It(this, e), i = r.size;
            return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
          }
          function rt(e) {
            var t = -1, r = null == e ? 0 : e.length;
            for (this.__data__ = new Je; ++t < r; ) this.add(e[t]);
          }
          function it(e) {
            return this.__data__.set(e, n), this;
          }
          function nt(e) {
            return this.__data__.has(e);
          }
          function st(e) {
            var t = this.__data__ = new Ve(e);
            this.size = t.size;
          }
          function ot() {
            this.__data__ = new Ve, this.size = 0;
          }
          function at(e) {
            var t = this.__data__, r = t.delete(e);
            return this.size = t.size, r;
          }
          function ct(e) {
            return this.__data__.get(e);
          }
          function ht(e) {
            return this.__data__.has(e);
          }
          function ut(e, t) {
            var r = this.__data__;
            if (r instanceof Ve) {
              var n = r.__data__;
              if (!Pe || n.length < i - 1) return n.push([ e, t ]), this.size = ++r.size, this;
              r = this.__data__ = new Je(n);
            }
            return r.set(e, t), this.size = r.size, this;
          }
          function lt(e, t) {
            var r = kt(e), i = !r && Dt(e), n = !r && !i && Ht(e), s = !r && !i && !n && Ft(e), o = r || i || n || s, a = o ? ee(e.length, String) : [], c = a.length;
            for (var h in e) (t || pe.call(e, h)) && (!o || !("length" == h || n && ("offset" == h || "parent" == h) || s && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || At(h, c))) && a.push(h);
            return a;
          }
          function pt(e, t) {
            for (var r = e.length; r--; ) if (Mt(e[r][0], t)) return r;
            return -1;
          }
          function ft(e, t, r) {
            var i = t(e);
            return kt(e) ? i : Z(i, r(e));
          }
          function dt(e) {
            return null == e ? void 0 === e ? P : v : _e && _e in Object(e) ? xt(e) : Ct(e);
          }
          function yt(e) {
            return Bt(e) && dt(e) == c;
          }
          function gt(e, t, r, i, n) {
            return e === t || (null == e || null == t || !Bt(e) && !Bt(t) ? e != e && t != t : bt(e, t, r, i, gt, n));
          }
          function bt(e, t, r, i, n, o) {
            var a = kt(e), u = kt(t), l = a ? h : Tt(e), p = u ? h : Tt(t);
            var f = (l = l == c ? m : l) == m, d = (p = p == c ? m : p) == m, y = l == p;
            if (y && Ht(e)) {
              if (!Ht(t)) return !1;
              a = !0, f = !1;
            }
            if (y && !f) return o || (o = new st), a || Ft(e) ? _t(e, t, r, i, n, o) : Et(e, t, l, r, i, n, o);
            if (!(r & s)) {
              var g = f && pe.call(e, "__wrapped__"), b = d && pe.call(t, "__wrapped__");
              if (g || b) {
                var v = g ? e.value() : e, w = b ? t.value() : t;
                return o || (o = new st), n(v, w, r, i, o);
              }
            }
            return !!y && (o || (o = new st), St(e, t, r, i, n, o));
          }
          function vt(e) {
            return !(!Vt(e) || jt(e)) && (qt(e) ? ye : z).test(Ut(e));
          }
          function mt(e) {
            return Bt(e) && Kt(e.length) && !!$[dt(e)];
          }
          function wt(e) {
            if (!Lt(e)) return Oe(e);
            var t = [];
            for (var r in Object(e)) pe.call(e, r) && "constructor" != r && t.push(r);
            return t;
          }
          function _t(e, t, r, i, n, a) {
            var c = r & s, h = e.length, u = t.length;
            if (h != u && !(c && u > h)) return !1;
            var l = a.get(e);
            if (l && a.get(t)) return l == t;
            var p = -1, f = !0, d = r & o ? new rt : void 0;
            for (a.set(e, t), a.set(t, e); ++p < h; ) {
              var y = e[p], g = t[p];
              if (i) var b = c ? i(g, y, p, t, e, a) : i(y, g, p, e, t, a);
              if (void 0 !== b) {
                if (b) continue;
                f = !1;
                break;
              }
              if (d) {
                if (!Q(t, (function(e, t) {
                  if (!re(d, t) && (y === e || n(y, e, r, i, a))) return d.push(t);
                }))) {
                  f = !1;
                  break;
                }
              } else if (y !== g && !n(y, g, r, i, a)) {
                f = !1;
                break;
              }
            }
            return a.delete(e), a.delete(t), f;
          }
          function Et(e, t, r, i, n, a, c) {
            switch (r) {
             case T:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
              e = e.buffer, t = t.buffer;

             case N:
              return !(e.byteLength != t.byteLength || !a(new ve(e), new ve(t)));

             case l:
             case p:
             case b:
              return Mt(+e, +t);

             case f:
              return e.name == t.name && e.message == t.message;

             case E:
             case O:
              return e == t + "";

             case g:
              var h = ne;

             case S:
              var u = i & s;
              if (h || (h = oe), e.size != t.size && !u) return !1;
              var d = c.get(e);
              if (d) return d == t;
              i |= o, c.set(e, t);
              var y = _t(h(e), h(t), i, n, a, c);
              return c.delete(e), y;

             case I:
              if (De) return De.call(e) == De.call(t);
            }
            return !1;
          }
          function St(e, t, r, i, n, o) {
            var a = r & s, c = Ot(e), h = c.length;
            if (h != Ot(t).length && !a) return !1;
            for (var u = h; u--; ) {
              var l = c[u];
              if (!(a ? l in t : pe.call(t, l))) return !1;
            }
            var p = o.get(e);
            if (p && o.get(t)) return p == t;
            var f = !0;
            o.set(e, t), o.set(t, e);
            for (var d = a; ++u < h; ) {
              var y = e[l = c[u]], g = t[l];
              if (i) var b = a ? i(g, y, l, t, e, o) : i(y, g, l, e, t, o);
              if (!(void 0 === b ? y === g || n(y, g, r, i, o) : b)) {
                f = !1;
                break;
              }
              d || (d = "constructor" == l);
            }
            if (f && !d) {
              var v = e.constructor, m = t.constructor;
              v != m && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof m && m instanceof m) && (f = !1);
            }
            return o.delete(e), o.delete(t), f;
          }
          function Ot(e) {
            return ft(e, Gt, Nt);
          }
          function It(e, t) {
            var r = e.__data__;
            return Rt(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
          }
          function Pt(e, t) {
            var r = ie(e, t);
            return vt(r) ? r : void 0;
          }
          function xt(e) {
            var t = pe.call(e, _e), r = e[_e];
            try {
              e[_e] = void 0;
              var i = !0;
            } catch {}
            var n = de.call(e);
            return i && (t ? e[_e] = r : delete e[_e]), n;
          }
          ke.prototype.clear = ze, ke.prototype.delete = He, ke.prototype.get = $e, ke.prototype.has = qe, ke.prototype.set = Ke, 
          Ve.prototype.clear = Be, Ve.prototype.delete = Fe, Ve.prototype.get = Ge, Ve.prototype.has = We, Ve.prototype.set = Ye, 
          Je.prototype.clear = Xe, Je.prototype.delete = Ze, Je.prototype.get = Qe, Je.prototype.has = et, Je.prototype.set = tt, 
          rt.prototype.add = rt.prototype.push = it, rt.prototype.has = nt, st.prototype.clear = ot, st.prototype.delete = at, st.prototype.get = ct, 
          st.prototype.has = ht, st.prototype.set = ut;
          var Nt = Ee ? function(e) {
            return null == e ? [] : (e = Object(e), X(Ee(e), (function(t) {
              return me.call(e, t);
            })));
          } : Wt, Tt = dt;
          function At(e, t) {
            return !!(t = t ?? a) && ("number" == typeof e || H.test(e)) && e > -1 && e % 1 == 0 && e < t;
          }
          function Rt(e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
          }
          function jt(e) {
            return !!fe && fe in e;
          }
          function Lt(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || he);
          }
          function Ct(e) {
            return de.call(e);
          }
          function Ut(e) {
            if (null != e) {
              try {
                return le.call(e);
              } catch {}
              try {
                return e + "";
              } catch {}
            }
            return "";
          }
          function Mt(e, t) {
            return e === t || e != e && t != t;
          }
          (Ie && Tt(new Ie(new ArrayBuffer(1))) != T || Pe && Tt(new Pe) != g || xe && Tt(xe.resolve()) != w || Ne && Tt(new Ne) != S || Te && Tt(new Te) != x) && (Tt = function(e) {
            var t = dt(e), r = t == m ? e.constructor : void 0, i = r ? Ut(r) : "";
            if (i) switch (i) {
             case Re:
              return T;

             case je:
              return g;

             case Le:
              return w;

             case Ce:
              return S;

             case Ue:
              return x;
            }
            return t;
          });
          var Dt = yt(function() {
            return arguments;
          }()) ? yt : function(e) {
            return Bt(e) && pe.call(e, "callee") && !me.call(e, "callee");
          }, kt = Array.isArray;
          function zt(e) {
            return null != e && Kt(e.length) && !qt(e);
          }
          var Ht = Se || Yt;
          function $t(e, t) {
            return gt(e, t);
          }
          function qt(e) {
            if (!Vt(e)) return !1;
            var t = dt(e);
            return t == d || t == y || t == u || t == _;
          }
          function Kt(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= a;
          }
          function Vt(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t);
          }
          function Bt(e) {
            return null != e && "object" == typeof e;
          }
          var Ft = J ? te(J) : mt;
          function Gt(e) {
            return zt(e) ? lt(e) : wt(e);
          }
          function Wt() {
            return [];
          }
          function Yt() {
            return !1;
          }
          e.exports = $t;
        }(fl, fl.exports);
        var dl = fl.exports, yl = Object.defineProperty, gl = Object.getOwnPropertySymbols, bl = Object.prototype.hasOwnProperty, vl = Object.prototype.propertyIsEnumerable, ml = (e, t, r) => t in e ? yl(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r, wl = (e, t) => {
          for (var r in t || (t = {})) bl.call(t, r) && ml(e, r, t[r]);
          if (gl) for (var r of gl(t)) vl.call(t, r) && ml(e, r, t[r]);
          return e;
        };
        function _l(e, t) {
          if (e.length >= 255) throw new TypeError("Alphabet too long");
          for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
          for (var n = 0; n < e.length; n++) {
            var s = e.charAt(n), o = s.charCodeAt(0);
            if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
            r[o] = n;
          }
          var a = e.length, c = e.charAt(0), h = Math.log(a) / Math.log(256), u = Math.log(256) / Math.log(a);
          function l(t) {
            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), 
            !(t instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
            if (0 === t.length) return "";
            for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n]; ) n++, r++;
            for (var o = (s - n) * u + 1 >>> 0, h = new Uint8Array(o); n !== s; ) {
              for (var l = t[n], p = 0, f = o - 1; (0 !== l || p < i) && -1 !== f; f--, p++) l += 256 * h[f] >>> 0, h[f] = l % a >>> 0, 
              l = l / a >>> 0;
              if (0 !== l) throw new Error("Non-zero carry");
              i = p, n++;
            }
            for (var d = o - i; d !== o && 0 === h[d]; ) d++;
            for (var y = c.repeat(r); d < o; ++d) y += e.charAt(h[d]);
            return y;
          }
          function p(e) {
            if ("string" != typeof e) throw new TypeError("Expected String");
            if (0 === e.length) return new Uint8Array;
            var t = 0;
            if (" " !== e[t]) {
              for (var i = 0, n = 0; e[t] === c; ) i++, t++;
              for (var s = (e.length - t) * h + 1 >>> 0, o = new Uint8Array(s); e[t]; ) {
                var u = r[e.charCodeAt(t)];
                if (255 === u) return;
                for (var l = 0, p = s - 1; (0 !== u || l < n) && -1 !== p; p--, l++) u += a * o[p] >>> 0, o[p] = u % 256 >>> 0, u = u / 256 >>> 0;
                if (0 !== u) throw new Error("Non-zero carry");
                n = l, t++;
              }
              if (" " !== e[t]) {
                for (var f = s - n; f !== s && 0 === o[f]; ) f++;
                for (var d = new Uint8Array(i + (s - f)), y = i; f !== s; ) d[y++] = o[f++];
                return d;
              }
            }
          }
          function f(e) {
            var r = p(e);
            if (r) return r;
            throw new Error(`Non-${t} character`);
          }
          return {
            encode: l,
            decodeUnsafe: p,
            decode: f
          };
        }
        var El = _l;
        const Sl = e => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw new Error("Unknown type, must be binary type");
        }, Ol = e => (new TextEncoder).encode(e), Il = e => (new TextDecoder).decode(e);
        class Pl {
          constructor(e, t, r) {
            this.name = e, this.prefix = t, this.baseEncode = r;
          }
          encode(e) {
            if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
            throw Error("Unknown type, must be binary type");
          }
        }
        class xl {
          constructor(e, t, r) {
            if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw new Error("Invalid prefix character");
            this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r;
          }
          decode(e) {
            if ("string" == typeof e) {
              if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
              return this.baseDecode(e.slice(this.prefix.length));
            }
            throw Error("Can only multibase decode strings");
          }
          or(e) {
            return Tl(this, e);
          }
        }
        class Nl {
          constructor(e) {
            this.decoders = e;
          }
          or(e) {
            return Tl(this, e);
          }
          decode(e) {
            const t = e[0], r = this.decoders[t];
            if (r) return r.decode(e);
            throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
          }
        }
        const Tl = (e, t) => new Nl(wl(wl({}, e.decoders || {
          [e.prefix]: e
        }), t.decoders || {
          [t.prefix]: t
        }));
        class Al {
          constructor(e, t, r, i) {
            this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new Pl(e, t, r), this.decoder = new xl(e, t, i);
          }
          encode(e) {
            return this.encoder.encode(e);
          }
          decode(e) {
            return this.decoder.decode(e);
          }
        }
        const Rl = ({name: e, prefix: t, encode: r, decode: i}) => new Al(e, t, r, i), jl = ({prefix: e, name: t, alphabet: r}) => {
          const {encode: i, decode: n} = El(r, t);
          return Rl({
            prefix: e,
            name: t,
            encode: i,
            decode: e => Sl(n(e))
          });
        }, Ll = (e, t, r, i) => {
          const n = {};
          for (let u = 0; u < t.length; ++u) n[t[u]] = u;
          let s = e.length;
          for (;"=" === e[s - 1]; ) --s;
          const o = new Uint8Array(s * r / 8 | 0);
          let a = 0, c = 0, h = 0;
          for (let u = 0; u < s; ++u) {
            const t = n[e[u]];
            if (void 0 === t) throw new SyntaxError(`Non-${i} character`);
            c = c << r | t, a += r, a >= 8 && (a -= 8, o[h++] = 255 & c >> a);
          }
          if (a >= r || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
          return o;
        }, Cl = (e, t, r) => {
          const i = "=" === t[t.length - 1], n = (1 << r) - 1;
          let s = "", o = 0, a = 0;
          for (let c = 0; c < e.length; ++c) for (a = a << 8 | e[c], o += 8; o > r; ) o -= r, s += t[n & a >> o];
          if (o && (s += t[n & a << r - o]), i) for (;s.length * r & 7; ) s += "=";
          return s;
        }, Ul = ({name: e, prefix: t, bitsPerChar: r, alphabet: i}) => Rl({
          prefix: t,
          name: e,
          encode(e) {
            return Cl(e, i, r);
          },
          decode(t) {
            return Ll(t, i, r, e);
          }
        }), Ml = Rl({
          prefix: "\0",
          name: "identity",
          encode: e => Il(e),
          decode: e => Ol(e)
        });
        var Dl = Object.freeze({
          __proto__: null,
          identity: Ml
        });
        const kl = Ul({
          prefix: "0",
          name: "base2",
          alphabet: "01",
          bitsPerChar: 1
        });
        var zl = Object.freeze({
          __proto__: null,
          base2: kl
        });
        const Hl = Ul({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3
        });
        var $l = Object.freeze({
          __proto__: null,
          base8: Hl
        });
        const ql = jl({
          prefix: "9",
          name: "base10",
          alphabet: "0123456789"
        });
        var Kl = Object.freeze({
          __proto__: null,
          base10: ql
        });
        const Vl = Ul({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4
        }), Bl = Ul({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4
        });
        var Fl = Object.freeze({
          __proto__: null,
          base16: Vl,
          base16upper: Bl
        });
        const Gl = Ul({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5
        }), Wl = Ul({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5
        }), Yl = Ul({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5
        }), Jl = Ul({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5
        }), Xl = Ul({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5
        }), Zl = Ul({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5
        }), Ql = Ul({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5
        }), ep = Ul({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5
        }), tp = Ul({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5
        });
        var rp = Object.freeze({
          __proto__: null,
          base32: Gl,
          base32upper: Wl,
          base32pad: Yl,
          base32padupper: Jl,
          base32hex: Xl,
          base32hexupper: Zl,
          base32hexpad: Ql,
          base32hexpadupper: ep,
          base32z: tp
        });
        const ip = jl({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
        }), np = jl({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        });
        var sp = Object.freeze({
          __proto__: null,
          base36: ip,
          base36upper: np
        });
        const op = jl({
          name: "base58btc",
          prefix: "z",
          alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
        }), ap = jl({
          name: "base58flickr",
          prefix: "Z",
          alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
        });
        var cp = Object.freeze({
          __proto__: null,
          base58btc: op,
          base58flickr: ap
        });
        const hp = Ul({
          prefix: "m",
          name: "base64",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6
        }), up = Ul({
          prefix: "M",
          name: "base64pad",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6
        }), lp = Ul({
          prefix: "u",
          name: "base64url",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6
        }), pp = Ul({
          prefix: "U",
          name: "base64urlpad",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6
        });
        var fp = Object.freeze({
          __proto__: null,
          base64: hp,
          base64pad: up,
          base64url: lp,
          base64urlpad: pp
        });
        const dp = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), yp = dp.reduce(((e, t, r) => (e[r] = t, 
        e)), []), gp = dp.reduce(((e, t, r) => (e[t.codePointAt(0)] = r, e)), []);
        function bp(e) {
          return e.reduce(((e, t) => e += yp[t]), "");
        }
        function vp(e) {
          const t = [];
          for (const r of e) {
            const e = gp[r.codePointAt(0)];
            if (void 0 === e) throw new Error(`Non-base256emoji character: ${r}`);
            t.push(e);
          }
          return new Uint8Array(t);
        }
        const mp = Rl({
          prefix: "🚀",
          name: "base256emoji",
          encode: bp,
          decode: vp
        });
        var wp = Object.freeze({
          __proto__: null,
          base256emoji: mp
        }), _p = Ip, Ep = 128, Sp = -128, Op = Math.pow(2, 31);
        function Ip(e, t, r) {
          t = t || [];
          for (var i = r = r || 0; e >= Op; ) t[r++] = 255 & e | Ep, e /= 128;
          for (;e & Sp; ) t[r++] = 255 & e | Ep, e >>>= 7;
          return t[r] = 0 | e, Ip.bytes = r - i + 1, t;
        }
        var Pp = Tp, xp = 128, Np = 127;
        function Tp(e, t) {
          var r, i = 0, n = 0, s = t = t || 0, o = e.length;
          do {
            if (s >= o) throw Tp.bytes = 0, new RangeError("Could not decode varint");
            r = e[s++], i += n < 28 ? (r & Np) << n : (r & Np) * Math.pow(2, n), n += 7;
          } while (r >= xp);
          return Tp.bytes = s - t, i;
        }
        var Ap = Math.pow(2, 7), Rp = Math.pow(2, 14), jp = Math.pow(2, 21), Lp = Math.pow(2, 28), Cp = Math.pow(2, 35), Up = Math.pow(2, 42), Mp = Math.pow(2, 49), Dp = Math.pow(2, 56), kp = Math.pow(2, 63), zp = {
          encode: _p,
          decode: Pp,
          encodingLength: function(e) {
            return e < Ap ? 1 : e < Rp ? 2 : e < jp ? 3 : e < Lp ? 4 : e < Cp ? 5 : e < Up ? 6 : e < Mp ? 7 : e < Dp ? 8 : e < kp ? 9 : 10;
          }
        };
        const Hp = (e, t, r = 0) => (zp.encode(e, t, r), t), $p = e => zp.encodingLength(e), qp = (e, t) => {
          const r = t.byteLength, i = $p(e), n = i + $p(r), s = new Uint8Array(n + r);
          return Hp(e, s, 0), Hp(r, s, i), s.set(t, n), new Kp(e, r, t, s);
        };
        class Kp {
          constructor(e, t, r, i) {
            this.code = e, this.size = t, this.digest = r, this.bytes = i;
          }
        }
        const Vp = ({name: e, code: t, encode: r}) => new Bp(e, t, r);
        class Bp {
          constructor(e, t, r) {
            this.name = e, this.code = t, this.encode = r;
          }
          digest(e) {
            if (e instanceof Uint8Array) {
              const t = this.encode(e);
              return t instanceof Uint8Array ? qp(this.code, t) : t.then((e => qp(this.code, e)));
            }
            throw Error("Unknown type, must be binary type");
          }
        }
        const Fp = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)), Gp = Vp({
          name: "sha2-256",
          code: 18,
          encode: Fp("SHA-256")
        }), Wp = Vp({
          name: "sha2-512",
          code: 19,
          encode: Fp("SHA-512")
        });
        var Yp = Object.freeze({
          __proto__: null,
          sha256: Gp,
          sha512: Wp
        });
        const Jp = 0, Xp = "identity", Zp = Sl;
        var Qp = Object.freeze({
          __proto__: null,
          identity: {
            code: Jp,
            name: Xp,
            encode: Zp,
            digest: e => qp(Jp, Zp(e))
          }
        });
        new TextEncoder, new TextDecoder;
        const ef = wl(wl(wl(wl(wl(wl(wl(wl(wl(wl({}, Dl), zl), $l), Kl), Fl), rp), sp), cp), fp), wp);
        function tf(e = 0) {
          return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? globalThis.Buffer.allocUnsafe(e) : new Uint8Array(e);
        }
        function rf(e, t, r, i) {
          return {
            name: e,
            prefix: t,
            encoder: {
              name: e,
              prefix: t,
              encode: r
            },
            decoder: {
              decode: i
            }
          };
        }
        wl(wl({}, Yp), Qp);
        const nf = rf("utf8", "u", (e => "u" + new TextDecoder("utf8").decode(e)), (e => (new TextEncoder).encode(e.substring(1)))), sf = rf("ascii", "a", (e => {
          let t = "a";
          for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
          return t;
        }), (e => {
          const t = tf((e = e.substring(1)).length);
          for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
          return t;
        })), of = wl({
          utf8: nf,
          "utf-8": nf,
          hex: ef.base16,
          latin1: sf,
          ascii: sf,
          binary: sf
        }, ef);
        function af(e, t = "utf8") {
          const r = of[t];
          if (!r) throw new Error(`Unsupported encoding "${t}"`);
          return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${e}`) : globalThis.Buffer.from(e, "utf8");
        }
        const cf = "wc", hf = 2, uf = "core", lf = `${cf}@2:${uf}:`, pf = {
          name: uf,
          logger: "error"
        }, ff = {
          database: ":memory:"
        }, df = "crypto", yf = "client_ed25519_seed", gf = bt.ONE_DAY, bf = "keychain", vf = "0.3", mf = "messages", wf = "0.3", _f = bt.SIX_HOURS, Ef = "publisher", Sf = "irn", Of = "error", If = "wss://relay.walletconnect.com", Pf = "relayer", xf = {
          message: "relayer_message",
          connect: "relayer_connect",
          disconnect: "relayer_disconnect",
          error: "relayer_error",
          connection_stalled: "relayer_connection_stalled",
          transport_closed: "relayer_transport_closed",
          publish: "relayer_publish"
        }, Nf = "_subscription", Tf = {
          payload: "payload",
          connect: "connect",
          disconnect: "disconnect",
          error: "error"
        }, Af = bt.ONE_SECOND, Rf = "2.4.5", jf = "0.3", Lf = {
          created: "subscription_created",
          deleted: "subscription_deleted",
          expired: "subscription_expired",
          disabled: "subscription_disabled",
          sync: "subscription_sync",
          resubscribed: "subscription_resubscribed"
        }, Cf = "subscription", Uf = "0.3", Mf = 1e3 * bt.FIVE_SECONDS, Df = "pairing", kf = "0.3", zf = {
          wc_pairingDelete: {
            req: {
              ttl: bt.ONE_DAY,
              prompt: !1,
              tag: 1e3
            },
            res: {
              ttl: bt.ONE_DAY,
              prompt: !1,
              tag: 1001
            }
          },
          wc_pairingPing: {
            req: {
              ttl: bt.THIRTY_SECONDS,
              prompt: !1,
              tag: 1002
            },
            res: {
              ttl: bt.THIRTY_SECONDS,
              prompt: !1,
              tag: 1003
            }
          },
          unregistered_method: {
            req: {
              ttl: bt.ONE_DAY,
              prompt: !1,
              tag: 0
            },
            res: {
              ttl: bt.ONE_DAY,
              prompt: !1,
              tag: 0
            }
          }
        }, Hf = {
          created: "history_created",
          updated: "history_updated",
          deleted: "history_deleted",
          sync: "history_sync"
        }, $f = "history", qf = "0.3", Kf = "expirer", Vf = {
          created: "expirer_created",
          deleted: "expirer_deleted",
          expired: "expirer_expired",
          sync: "expirer_sync"
        }, Bf = "0.3";
        class Ff {
          constructor(e, t) {
            this.core = e, this.logger = t, this.keychain = new Map, this.name = bf, this.version = vf, this.initialized = !1, this.storagePrefix = lf, 
            this.init = async () => {
              if (!this.initialized) {
                const e = await this.getKeyChain();
                typeof e < "u" && (this.keychain = e), this.initialized = !0;
              }
            }, this.has = e => (this.isInitialized(), this.keychain.has(e)), this.set = async (e, t) => {
              this.isInitialized(), this.keychain.set(e, t), await this.persist();
            }, this.get = e => {
              this.isInitialized();
              const t = this.keychain.get(e);
              if (typeof t > "u") {
                const {message: t} = mh("NO_MATCHING_KEY", `${this.name}: ${e}`);
                throw new Error(t);
              }
              return t;
            }, this.del = async e => {
              this.isInitialized(), this.keychain.delete(e), await this.persist();
            }, this.core = e, this.logger = jr.generateChildLogger(t, this.name);
          }
          get context() {
            return jr.getLoggerContext(this.logger);
          }
          get storageKey() {
            return this.storagePrefix + this.version + "//" + this.name;
          }
          async setKeyChain(e) {
            await this.core.storage.setItem(this.storageKey, qc(e));
          }
          async getKeyChain() {
            const e = await this.core.storage.getItem(this.storageKey);
            return typeof e < "u" ? Kc(e) : void 0;
          }
          async persist() {
            await this.setKeyChain(this.keychain);
          }
          isInitialized() {
            if (!this.initialized) {
              const {message: e} = mh("NOT_INITIALIZED", this.name);
              throw new Error(e);
            }
          }
        }
        class Gf {
          constructor(e, t, r) {
            this.core = e, this.logger = t, this.name = df, this.initialized = !1, this.init = async () => {
              this.initialized || (await this.keychain.init(), this.initialized = !0);
            }, this.hasKeys = e => (this.isInitialized(), this.keychain.has(e)), this.getClientId = async () => {
              this.isInitialized();
              return _o(Io(await this.getClientSeed()).publicKey);
            }, this.generateKeyPair = () => {
              this.isInitialized();
              const e = cc();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }, this.signJWT = async e => {
              this.isInitialized();
              const t = Io(await this.getClientSeed()), r = hc();
              return await Po(r, e, gf, t);
            }, this.generateSharedKey = (e, t, r) => {
              this.isInitialized();
              const i = uc(this.getPrivateKey(e), t);
              return this.setSymKey(i, r);
            }, this.setSymKey = async (e, t) => {
              this.isInitialized();
              const r = t || lc(e);
              return await this.keychain.set(r, e), r;
            }, this.deleteKeyPair = async e => {
              this.isInitialized(), await this.keychain.del(e);
            }, this.deleteSymKey = async e => {
              this.isInitialized(), await this.keychain.del(e);
            }, this.encode = async (e, t, r) => {
              this.isInitialized();
              const i = wc(r), n = _i(t);
              if (_c(i)) {
                const t = i.senderPublicKey, r = i.receiverPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              const s = this.getSymKey(e), {type: o, senderPublicKey: a} = i;
              return yc({
                type: o,
                symKey: s,
                message: n,
                senderPublicKey: a
              });
            }, this.decode = async (e, t, r) => {
              this.isInitialized();
              const i = mc(t, r);
              if (_c(i)) {
                const t = i.receiverPublicKey, r = i.senderPublicKey;
                e = await this.generateSharedKey(t, r);
              }
              return wi(gc({
                symKey: this.getSymKey(e),
                encoded: t
              }));
            }, this.core = e, this.logger = jr.generateChildLogger(t, this.name), this.keychain = r || new Ff(this.core, this.logger);
          }
          get context() {
            return jr.getLoggerContext(this.logger);
          }
          getPayloadType(e) {
            return dc(vc(e).type);
          }
          async setPrivateKey(e, t) {
            return await this.keychain.set(e, t), e;
          }
          getPrivateKey(e) {
            return this.keychain.get(e);
          }
          async getClientSeed() {
            let e = "";
            try {
              e = this.keychain.get(yf);
            } catch {
              e = hc(), await this.keychain.set(yf, e);
            }
            return af(e, "base16");
          }
          getSymKey(e) {
            return this.keychain.get(e);
          }
          isInitialized() {
            if (!this.initialized) {
              const {message: e} = mh("NOT_INITIALIZED", this.name);
              throw new Error(e);
            }
          }
        }
        class Wf extends pi {
          constructor(e, t) {
            super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = mf, this.version = wf, this.initialized = !1, 
            this.storagePrefix = lf, this.init = async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  const e = await this.getRelayerMessages();
                  typeof e < "u" && (this.messages = e), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                    type: "method",
                    method: "restore",
                    size: this.messages.size
                  });
                } catch (e) {
                  this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }, this.set = async (e, t) => {
              this.isInitialized();
              const r = pc(t);
              let i = this.messages.get(e);
              return typeof i > "u" && (i = {}), typeof i[r] < "u" || (i[r] = t, this.messages.set(e, i), await this.persist()), r;
            }, this.get = e => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > "u" && (t = {}), t;
            }, this.has = (e, t) => {
              this.isInitialized();
              return typeof this.get(e)[pc(t)] < "u";
            }, this.del = async e => {
              this.isInitialized(), this.messages.delete(e), await this.persist();
            }, this.logger = jr.generateChildLogger(e, this.name), this.core = t;
          }
          get context() {
            return jr.getLoggerContext(this.logger);
          }
          get storageKey() {
            return this.storagePrefix + this.version + "//" + this.name;
          }
          async setRelayerMessages(e) {
            await this.core.storage.setItem(this.storageKey, qc(e));
          }
          async getRelayerMessages() {
            const e = await this.core.storage.getItem(this.storageKey);
            return typeof e < "u" ? Kc(e) : void 0;
          }
          async persist() {
            await this.setRelayerMessages(this.messages);
          }
          isInitialized() {
            if (!this.initialized) {
              const {message: e} = mh("NOT_INITIALIZED", this.name);
              throw new Error(e);
            }
          }
        }
        class Yf extends fi {
          constructor(e, t) {
            super(e, t), this.relayer = e, this.logger = t, this.events = new R.exports.EventEmitter, this.name = Ef, this.queue = new Map, 
            this.publishTimeout = 1e4, this.publish = async (e, t, r) => {
              this.logger.debug("Publishing Payload"), this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                  topic: e,
                  message: t,
                  opts: r
                }
              });
              try {
                const i = r?.ttl || _f, n = eh(r), s = r?.prompt || !1, o = r?.tag || 0, a = {
                  topic: e,
                  message: t,
                  opts: {
                    ttl: i,
                    relay: n,
                    prompt: s,
                    tag: o
                  }
                }, c = pc(t);
                this.queue.set(c, a);
                try {
                  await await Bc(this.rpcPublish(e, t, i, n, s, o), this.publishTimeout), this.relayer.events.emit(xf.publish, a);
                } catch {
                  return this.logger.debug("Publishing Payload stalled"), void this.relayer.events.emit(xf.connection_stalled);
                }
                this.onPublish(c, a), this.logger.debug("Successfully Published Payload"), this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: {
                    topic: e,
                    message: t,
                    opts: r
                  }
                });
              } catch (i) {
                throw this.logger.debug("Failed to Publish Payload"), this.logger.error(i), i;
              }
            }, this.on = (e, t) => {
              this.events.on(e, t);
            }, this.once = (e, t) => {
              this.events.once(e, t);
            }, this.off = (e, t) => {
              this.events.off(e, t);
            }, this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }, this.relayer = e, this.logger = jr.generateChildLogger(t, this.name), this.registerEventListeners();
          }
          get context() {
            return jr.getLoggerContext(this.logger);
          }
          rpcPublish(e, t, r, i, n, s) {
            var o, a, c, h;
            const u = {
              method: th(i.protocol).publish,
              params: {
                topic: e,
                message: t,
                ttl: r,
                prompt: n,
                tag: s
              }
            };
            return Sh(null == (o = u.params) ? void 0 : o.prompt) && (null == (a = u.params) || delete a.prompt), Sh(null == (c = u.params) ? void 0 : c.tag) && (null == (h = u.params) || delete h.tag), 
            this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: u
            }), this.relayer.provider.request(u);
          }
          onPublish(e, t) {
            this.queue.delete(e);
          }
          checkQueue() {
            this.queue.forEach((async e => {
              const {topic: t, message: r, opts: i} = e;
              await this.publish(t, r, i);
            }));
          }
          registerEventListeners() {
            this.relayer.core.heartbeat.on(Ve.HEARTBEAT_EVENTS.pulse, (() => {
              this.checkQueue();
            }));
          }
        }
        class Jf {
          constructor() {
            this.map = new Map, this.set = (e, t) => {
              const r = this.get(e);
              this.exists(e, t) || this.map.set(e, [ ...r, t ]);
            }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
              if (typeof t > "u") return void this.map.delete(e);
              if (!this.map.has(e)) return;
              const r = this.get(e);
              if (!this.exists(e, t)) return;
              const i = r.filter((e => e !== t));
              i.length ? this.map.set(e, i) : this.map.delete(e);
            }, this.clear = () => {
              this.map.clear();
            };
          }
          get topics() {
            return Array.from(this.map.keys());
          }
        }
        var Xf = Object.defineProperty, Zf = Object.defineProperties, Qf = Object.getOwnPropertyDescriptors, ed = Object.getOwnPropertySymbols, td = Object.prototype.hasOwnProperty, rd = Object.prototype.propertyIsEnumerable, id = (e, t, r) => t in e ? Xf(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r, nd = (e, t) => {
          for (var r in t || (t = {})) td.call(t, r) && id(e, r, t[r]);
          if (ed) for (var r of ed(t)) rd.call(t, r) && id(e, r, t[r]);
          return e;
        }, sd = (e, t) => Zf(e, Qf(t));
        class od extends gi {
          constructor(e, t) {
            super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new Jf, this.events = new R.exports.EventEmitter, 
            this.name = Cf, this.version = Uf, this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", 
            this.pollingInterval = 20, this.storagePrefix = lf, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.init = async () => {
              this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), 
              this.clientId = await this.relayer.core.crypto.getClientId());
            }, this.subscribe = async (e, t) => {
              await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                  topic: e,
                  opts: t
                }
              });
              try {
                const r = eh(t), i = {
                  topic: e,
                  relay: r
                };
                this.pending.set(e, i);
                const n = await this.rpcSubscribe(e, r);
                return this.onSubscribe(n, i), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: {
                    topic: e,
                    opts: t
                  }
                }), n;
              } catch (r) {
                throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(r), r;
              }
            }, this.unsubscribe = async (e, t) => {
              await this.restartToComplete(), this.isInitialized(), typeof t?.id < "u" ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t);
            }, this.isSubscribed = async e => !!this.topics.includes(e) || await new Promise(((t, r) => {
              const i = new bt.Watch;
              i.start(this.pendingSubscriptionWatchLabel);
              const n = setInterval((() => {
                !this.pending.has(e) && this.topics.includes(e) && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), t(!0)), 
                i.elapsed(this.pendingSubscriptionWatchLabel) >= Mf && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), r(!1));
              }), this.pollingInterval);
            })), this.on = (e, t) => {
              this.events.on(e, t);
            }, this.once = (e, t) => {
              this.events.once(e, t);
            }, this.off = (e, t) => {
              this.events.off(e, t);
            }, this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }, this.restart = async () => {
              this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
            }, this.relayer = e, this.logger = jr.generateChildLogger(t, this.name), this.clientId = "";
          }
          get context() {
            return jr.getLoggerContext(this.logger);
          }
          get storageKey() {
            return this.storagePrefix + this.version + "//" + this.name;
          }
          get length() {
            return this.subscriptions.size;
          }
          get ids() {
            return Array.from(this.subscriptions.keys());
          }
          get values() {
            return Array.from(this.subscriptions.values());
          }
          get topics() {
            return this.topicMap.topics;
          }
          hasSubscription(e, t) {
            let r = !1;
            try {
              r = this.getSubscription(e).topic === t;
            } catch {}
            return r;
          }
          onEnable() {
            this.cached = [], this.initialized = !0;
          }
          onDisable() {
            this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear(), this.initialized = !1;
          }
          async unsubscribeByTopic(e, t) {
            const r = this.topicMap.get(e);
            await Promise.all(r.map((async r => await this.unsubscribeById(e, r, t))));
          }
          async unsubscribeById(e, t, r) {
            this.logger.debug("Unsubscribing Topic"), this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: {
                topic: e,
                id: t,
                opts: r
              }
            });
            try {
              const i = eh(r);
              await this.rpcUnsubscribe(e, t, i);
              const n = wh("USER_DISCONNECTED", `${this.name}, ${e}`);
              await this.onUnsubscribe(e, t, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                  topic: e,
                  id: t,
                  opts: r
                }
              });
            } catch (i) {
              throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(i), i;
            }
          }
          async rpcSubscribe(e, t) {
            const r = {
              method: th(t.protocol).subscribe,
              params: {
                topic: e
              }
            };
            this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r
            });
            try {
              await await Bc(this.relayer.provider.request(r), this.subscribeTimeout);
            } catch {
              this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(xf.connection_stalled);
            }
            return pc(e + this.clientId);
          }
          rpcUnsubscribe(e, t, r) {
            const i = {
              method: th(r.protocol).unsubscribe,
              params: {
                topic: e,
                id: t
              }
            };
            return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: i
            }), this.relayer.provider.request(i);
          }
          onSubscribe(e, t) {
            this.setSubscription(e, sd(nd({}, t), {
              id: e
            })), this.pending.delete(t.topic);
          }
          onResubscribe(e, t) {
            this.addSubscription(e, sd(nd({}, t), {
              id: e
            })), this.pending.delete(t.topic);
          }
          async onUnsubscribe(e, t, r) {
            this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, r), await this.relayer.messages.del(e);
          }
          async setRelayerSubscriptions(e) {
            await this.relayer.core.storage.setItem(this.storageKey, e);
          }
          async getRelayerSubscriptions() {
            return await this.relayer.core.storage.getItem(this.storageKey);
          }
          setSubscription(e, t) {
            this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: e,
              subscription: t
            }), this.addSubscription(e, t));
          }
          addSubscription(e, t) {
            this.subscriptions.set(e, nd({}, t)), this.topicMap.set(t.topic, e), this.events.emit(Lf.created, t);
          }
          getSubscription(e) {
            this.logger.debug("Getting subscription"), this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: e
            });
            const t = this.subscriptions.get(e);
            if (!t) {
              const {message: t} = mh("NO_MATCHING_KEY", `${this.name}: ${e}`);
              throw new Error(t);
            }
            return t;
          }
          deleteSubscription(e, t) {
            this.logger.debug("Deleting subscription"), this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: e,
              reason: t
            });
            const r = this.getSubscription(e);
            this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(Lf.deleted, sd(nd({}, r), {
              reason: t
            }));
          }
          async persist() {
            await this.setRelayerSubscriptions(this.values), this.events.emit(Lf.sync);
          }
          async reset() {
            this.cached.length && await Promise.all(this.cached.map((async e => await this.resubscribe(e)))), this.events.emit(Lf.resubscribed);
          }
          async restore() {
            try {
              const e = await this.getRelayerSubscriptions();
              if (typeof e > "u" || !e.length) return;
              if (this.subscriptions.size) {
                const {message: e} = mh("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(e);
              }
              this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
              });
            } catch (e) {
              this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
            }
          }
          async resubscribe(e) {
            if (!this.ids.includes(e.id)) {
              const {topic: t, relay: r} = e, i = {
                topic: t,
                relay: r
              };
              this.pending.set(i.topic, i);
              const n = await this.rpcSubscribe(i.topic, i.relay);
              this.onResubscribe(n, i);
            }
          }
          async onConnect() {
            this.restartInProgress || (await this.restart(), this.onEnable());
          }
          onDisconnect() {
            this.onDisable();
          }
          checkPending() {
            this.relayer.transportExplicitlyClosed || this.pending.forEach((async e => {
              const t = await this.rpcSubscribe(e.topic, e.relay);
              this.onSubscribe(t, e);
            }));
          }
          registerEventListeners() {
            this.relayer.core.heartbeat.on(Ve.HEARTBEAT_EVENTS.pulse, (() => {
              this.checkPending();
            })), this.relayer.on(xf.connect, (async () => {
              await this.onConnect();
            })), this.relayer.on(xf.disconnect, (() => {
              this.onDisconnect();
            })), this.events.on(Lf.created, (async e => {
              const t = Lf.created;
              this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
              }), await this.persist();
            })), this.events.on(Lf.deleted, (async e => {
              const t = Lf.deleted;
              this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
              }), await this.persist();
            }));
          }
          isInitialized() {
            if (!this.initialized) {
              const {message: e} = mh("NOT_INITIALIZED", this.name);
              throw new Error(e);
            }
          }
          async restartToComplete() {
            this.restartInProgress && await new Promise((e => {
              const t = setInterval((() => {
                this.restartInProgress || (clearInterval(t), e());
              }), this.pollingInterval);
            }));
          }
        }
        var ad = Object.defineProperty, cd = Object.getOwnPropertySymbols, hd = Object.prototype.hasOwnProperty, ud = Object.prototype.propertyIsEnumerable, ld = (e, t, r) => t in e ? ad(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r, pd = (e, t) => {
          for (var r in t || (t = {})) hd.call(t, r) && ld(e, r, t[r]);
          if (cd) for (var r of cd(t)) ud.call(t, r) && ld(e, r, t[r]);
          return e;
        };
        class fd extends di {
          constructor(e) {
            super(e), this.protocol = "wc", this.version = 2, this.events = new R.exports.EventEmitter, this.name = Pf, this.transportExplicitlyClosed = !1, 
            this.initialized = !1, this.reconnecting = !1, this.core = e.core, this.logger = typeof e.logger < "u" && "string" != typeof e.logger ? jr.generateChildLogger(e.logger, this.name) : c(jr.getDefaultLoggerOptions({
              level: e.logger || Of
            })), this.messages = new Wf(this.logger, e.core), this.subscriber = new od(this, this.logger), this.publisher = new Yf(this, this.logger), 
            this.relayUrl = e?.relayUrl || If, this.projectId = e.projectId, this.provider = {};
          }
          async init() {
            this.logger.trace("Initialized"), this.provider = await this.createProvider(), await Promise.all([ this.messages.init(), this.transportOpen(), this.subscriber.init() ]), 
            this.registerEventListeners(), this.initialized = !0;
          }
          get context() {
            return jr.getLoggerContext(this.logger);
          }
          get connected() {
            return this.provider.connection.connected;
          }
          get connecting() {
            return this.provider.connection.connecting;
          }
          async publish(e, t, r) {
            this.isInitialized(), await this.publisher.publish(e, t, r), await this.recordMessageEvent({
              topic: e,
              message: t
            });
          }
          async subscribe(e, t) {
            this.isInitialized();
            let r = "";
            return await Promise.all([ new Promise((t => {
              this.subscriber.once(Lf.created, (r => {
                r.topic === e && t();
              }));
            })), new Promise((async i => {
              r = await this.subscriber.subscribe(e, t), i();
            })) ]), r;
          }
          async unsubscribe(e, t) {
            this.isInitialized(), await this.subscriber.unsubscribe(e, t);
          }
          on(e, t) {
            this.events.on(e, t);
          }
          once(e, t) {
            this.events.once(e, t);
          }
          off(e, t) {
            this.events.off(e, t);
          }
          removeListener(e, t) {
            this.events.removeListener(e, t);
          }
          async transportClose() {
            this.transportExplicitlyClosed = !0, this.connected && (await this.provider.disconnect(), this.events.emit(xf.transport_closed));
          }
          async transportOpen(e) {
            if (!this.reconnecting) {
              this.relayUrl = e || this.relayUrl, this.transportExplicitlyClosed = !1, this.reconnecting = !0;
              try {
                await Promise.all([ new Promise((e => {
                  this.initialized || e(), this.subscriber.once(Lf.resubscribed, (() => {
                    e();
                  }));
                })), await Promise.race([ new Promise((async e => {
                  await this.provider.connect(), this.removeListener(xf.transport_closed, this.rejectTransportOpen), e();
                })), new Promise((e => this.once(xf.transport_closed, this.rejectTransportOpen))) ]) ]);
              } catch (t) {
                if (!/socket hang up/i.test(t.message)) throw t;
                this.logger.error(t), this.events.emit(xf.transport_closed);
              } finally {
                this.reconnecting = !1;
              }
            }
          }
          async restartTransport(e) {
            this.transportExplicitlyClosed || (await this.transportClose(), await new Promise((e => setTimeout(e, Af))), await this.transportOpen(e));
          }
          rejectTransportOpen() {
            throw new Error("closeTransport called before connection was established");
          }
          async createProvider() {
            const e = await this.core.crypto.signJWT(this.relayUrl);
            return new cl(new pl(Hc({
              sdkVersion: Rf,
              protocol: this.protocol,
              version: this.version,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
              auth: e
            })));
          }
          async recordMessageEvent(e) {
            const {topic: t, message: r} = e;
            await this.messages.set(t, r);
          }
          async shouldIgnoreMessageEvent(e) {
            const {topic: t, message: r} = e;
            return !await this.subscriber.isSubscribed(t) || this.messages.has(t, r);
          }
          async onProviderPayload(e) {
            if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: e
            }), nl(e)) {
              if (!e.method.endsWith(Nf)) return;
              const t = e.params, {topic: r, message: i} = t.data, n = {
                topic: r,
                message: i
              };
              this.logger.debug("Emitting Relayer Payload"), this.logger.trace(pd({
                type: "event",
                event: t.id
              }, n)), this.events.emit(t.id, n), await this.acknowledgePayload(e), await this.onMessageEvent(n);
            }
          }
          async onMessageEvent(e) {
            await this.shouldIgnoreMessageEvent(e) || (this.events.emit(xf.message, e), await this.recordMessageEvent(e));
          }
          async acknowledgePayload(e) {
            const t = Vu(e.id, !0);
            await this.provider.connection.send(t);
          }
          registerEventListeners() {
            this.provider.on(Tf.payload, (e => this.onProviderPayload(e))), this.provider.on(Tf.connect, (() => {
              this.events.emit(xf.connect);
            })), this.provider.on(Tf.disconnect, (() => {
              this.events.emit(xf.disconnect), this.attemptToReconnect();
            })), this.provider.on(Tf.error, (e => this.events.emit(xf.error, e))), this.events.on(xf.connection_stalled, (async () => {
              await this.restartTransport();
            }));
          }
          attemptToReconnect() {
            this.transportExplicitlyClosed || setTimeout((async () => {
              await this.transportOpen();
            }), bt.toMiliseconds(Af));
          }
          isInitialized() {
            if (!this.initialized) {
              const {message: e} = mh("NOT_INITIALIZED", this.name);
              throw new Error(e);
            }
          }
        }
        var dd = Object.defineProperty, yd = Object.getOwnPropertySymbols, gd = Object.prototype.hasOwnProperty, bd = Object.prototype.propertyIsEnumerable, vd = (e, t, r) => t in e ? dd(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r, md = (e, t) => {
          for (var r in t || (t = {})) gd.call(t, r) && vd(e, r, t[r]);
          if (yd) for (var r of yd(t)) bd.call(t, r) && vd(e, r, t[r]);
          return e;
        };
        class wd extends yi {
          constructor(e, t, r, i = lf, n) {
            super(e, t, r, i), this.core = e, this.logger = t, this.name = r, this.map = new Map, this.version = jf, this.cached = [], 
            this.initialized = !1, this.storagePrefix = lf, this.init = async () => {
              this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => {
                Ah(e) ? this.map.set(e.id, e) : Rh(e) ? this.map.set(e.topic, e) : this.getKey && null !== e && !Sh(e) && this.map.set(this.getKey(e), e);
              })), this.cached = [], this.initialized = !0);
            }, this.set = async (e, t) => {
              this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
                type: "method",
                method: "set",
                key: e,
                value: t
              }), this.map.set(e, t), await this.persist());
            }, this.get = e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
              type: "method",
              method: "get",
              key: e
            }), this.getData(e)), this.getAll = e => (this.isInitialized(), e ? this.values.filter((t => Object.keys(e).every((r => dl(t[r], e[r]))))) : this.values), 
            this.update = async (e, t) => {
              this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                type: "method",
                method: "update",
                key: e,
                update: t
              });
              const r = md(md({}, this.getData(e)), t);
              this.map.set(e, r), await this.persist();
            }, this.delete = async (e, t) => {
              this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
                type: "method",
                method: "delete",
                key: e,
                reason: t
              }), this.map.delete(e), await this.persist());
            }, this.logger = jr.generateChildLogger(t, this.name), this.storagePrefix = i, this.getKey = n;
          }
          get context() {
            return jr.getLoggerContext(this.logger);
          }
          get storageKey() {
            return this.storagePrefix + this.version + "//" + this.name;
          }
          get length() {
            return this.map.size;
          }
          get keys() {
            return Array.from(this.map.keys());
          }
          get values() {
            return Array.from(this.map.values());
          }
          async setDataStore(e) {
            await this.core.storage.setItem(this.storageKey, e);
          }
          async getDataStore() {
            return await this.core.storage.getItem(this.storageKey);
          }
          getData(e) {
            const t = this.map.get(e);
            if (!t) {
              const {message: t} = mh("NO_MATCHING_KEY", `${this.name}: ${e}`);
              throw this.logger.error(t), new Error(t);
            }
            return t;
          }
          async persist() {
            await this.setDataStore(this.values);
          }
          async restore() {
            try {
              const e = await this.getDataStore();
              if (typeof e > "u" || !e.length) return;
              if (this.map.size) {
                const {message: e} = mh("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(e), new Error(e);
              }
              this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
              });
            } catch (e) {
              this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
            }
          }
          isInitialized() {
            if (!this.initialized) {
              const {message: e} = mh("NOT_INITIALIZED", this.name);
              throw new Error(e);
            }
          }
        }
        class _d {
          constructor(e, t) {
            this.core = e, this.logger = t, this.name = Df, this.version = kf, this.events = new R.exports, this.initialized = !1, this.storagePrefix = lf, 
            this.ignoredPayloadTypes = [ ic ], this.registeredMethods = [], this.init = async () => {
              this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), 
              this.initialized = !0, this.logger.trace("Initialized"));
            }, this.register = ({methods: e}) => {
              this.isInitialized(), this.registeredMethods = [ ...new Set([ ...this.registeredMethods, ...e ]) ];
            }, this.create = async () => {
              this.isInitialized();
              const e = hc(), t = await this.core.crypto.setSymKey(e), r = Jc(bt.FIVE_MINUTES), i = {
                protocol: Sf
              }, n = {
                topic: t,
                expiry: r,
                relay: i,
                active: !1
              }, s = lh({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: t,
                symKey: e,
                relay: i
              });
              return await this.pairings.set(t, n), await this.core.relayer.subscribe(t), this.core.expirer.set(t, r), {
                topic: t,
                uri: s
              };
            }, this.pair = async e => {
              this.isInitialized(), this.isValidPair(e);
              const {topic: t, symKey: r, relay: i} = hh(e.uri), n = Jc(bt.FIVE_MINUTES), s = {
                topic: t,
                relay: i,
                expiry: n,
                active: !1
              };
              return await this.pairings.set(t, s), await this.core.crypto.setSymKey(r, t), await this.core.relayer.subscribe(t, {
                relay: i
              }), this.core.expirer.set(t, n), e.activatePairing && await this.activate({
                topic: t
              }), s;
            }, this.activate = async ({topic: e}) => {
              this.isInitialized();
              const t = Jc(bt.THIRTY_DAYS);
              await this.pairings.update(e, {
                active: !0,
                expiry: t
              }), this.core.expirer.set(e, t);
            }, this.ping = async e => {
              this.isInitialized(), await this.isValidPing(e);
              const {topic: t} = e;
              if (this.pairings.keys.includes(t)) {
                const e = await this.sendRequest(t, "wc_pairingPing", {}), {done: r, resolve: i, reject: n} = Vc();
                this.events.once(Zc("pairing_ping", e), (({error: e}) => {
                  e ? n(e) : i();
                })), await r();
              }
            }, this.updateExpiry = async ({topic: e, expiry: t}) => {
              this.isInitialized(), await this.pairings.update(e, {
                expiry: t
              });
            }, this.updateMetadata = async ({topic: e, metadata: t}) => {
              this.isInitialized(), await this.pairings.update(e, {
                peerMetadata: t
              });
            }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async e => {
              this.isInitialized(), await this.isValidDisconnect(e);
              const {topic: t} = e;
              this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", wh("USER_DISCONNECTED")), await this.deletePairing(t));
            }, this.sendRequest = async (e, t, r) => {
              const i = Ku(t, r), n = await this.core.crypto.encode(e, i), s = zf[t].req;
              return this.core.history.set(e, i), await this.core.relayer.publish(e, n, s), i.id;
            }, this.sendResult = async (e, t, r) => {
              const i = Vu(e, r), n = await this.core.crypto.encode(t, i), s = await this.core.history.get(t, e), o = zf[s.request.method].res;
              await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i);
            }, this.sendError = async (e, t, r) => {
              const i = Bu(e, r), n = await this.core.crypto.encode(t, i), s = await this.core.history.get(t, e), o = zf[s.request.method] ? zf[s.request.method].res : zf.unregistered_method.res;
              await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i);
            }, this.deletePairing = async (e, t) => {
              await this.core.relayer.unsubscribe(e), await Promise.all([ this.pairings.delete(e, wh("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e) ]);
            }, this.cleanup = async () => {
              const e = this.pairings.getAll().filter((e => Xc(e.expiry)));
              await Promise.all(e.map((e => this.deletePairing(e.topic))));
            }, this.onRelayEventRequest = e => {
              const {topic: t, payload: r} = e, i = r.method;
              if (this.pairings.keys.includes(t)) switch (i) {
               case "wc_pairingPing":
                return this.onPairingPingRequest(t, r);

               case "wc_pairingDelete":
                return this.onPairingDeleteRequest(t, r);

               default:
                return this.onUnknownRpcMethodRequest(t, r);
              }
            }, this.onRelayEventResponse = async e => {
              const {topic: t, payload: r} = e, i = (await this.core.history.get(t, r.id)).request.method;
              if (this.pairings.keys.includes(t)) {
                if ("wc_pairingPing" === i) return this.onPairingPingResponse(t, r);
                return this.onUnknownRpcMethodResponse(i);
              }
            }, this.onPairingPingRequest = async (e, t) => {
              const {id: r} = t;
              try {
                this.isValidPing({
                  topic: e
                }), await this.sendResult(r, e, !0), this.events.emit("pairing_ping", {
                  id: r,
                  topic: e
                });
              } catch (i) {
                await this.sendError(r, e, i), this.logger.error(i);
              }
            }, this.onPairingPingResponse = (e, t) => {
              const {id: r} = t;
              setTimeout((() => {
                ol(t) ? this.events.emit(Zc("pairing_ping", r), {}) : al(t) && this.events.emit(Zc("pairing_ping", r), {
                  error: t.error
                });
              }), 500);
            }, this.onPairingDeleteRequest = async (e, t) => {
              const {id: r} = t;
              try {
                this.isValidDisconnect({
                  topic: e
                }), await this.deletePairing(e), this.events.emit("pairing_delete", {
                  id: r,
                  topic: e
                });
              } catch (i) {
                await this.sendError(r, e, i), this.logger.error(i);
              }
            }, this.onUnknownRpcMethodRequest = async (e, t) => {
              const {id: r, method: i} = t;
              try {
                if (this.registeredMethods.includes(i)) return;
                const t = wh("WC_METHOD_UNSUPPORTED", i);
                await this.sendError(r, e, t), this.logger.error(t);
              } catch (n) {
                await this.sendError(r, e, n), this.logger.error(n);
              }
            }, this.onUnknownRpcMethodResponse = e => {
              this.registeredMethods.includes(e) || this.logger.error(wh("WC_METHOD_UNSUPPORTED", e));
            }, this.isValidPair = e => {
              if (!Bh(e)) {
                const {message: t} = mh("MISSING_OR_INVALID", `pair() params: ${e}`);
                throw new Error(t);
              }
              if (!Th(e.uri)) {
                const {message: t} = mh("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
                throw new Error(t);
              }
            }, this.isValidPing = async e => {
              if (!Bh(e)) {
                const {message: t} = mh("MISSING_OR_INVALID", `ping() params: ${e}`);
                throw new Error(t);
              }
              const {topic: t} = e;
              await this.isValidPairingTopic(t);
            }, this.isValidDisconnect = async e => {
              if (!Bh(e)) {
                const {message: t} = mh("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                throw new Error(t);
              }
              const {topic: t} = e;
              await this.isValidPairingTopic(t);
            }, this.isValidPairingTopic = async e => {
              if (!Oh(e, !1)) {
                const {message: t} = mh("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                throw new Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                const {message: t} = mh("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                throw new Error(t);
              }
              if (Xc(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                const {message: t} = mh("EXPIRED", `pairing topic: ${e}`);
                throw new Error(t);
              }
            }, this.core = e, this.logger = jr.generateChildLogger(t, this.name), this.pairings = new wd(this.core, this.logger, this.name, this.storagePrefix);
          }
          get context() {
            return jr.getLoggerContext(this.logger);
          }
          isInitialized() {
            if (!this.initialized) {
              const {message: e} = mh("NOT_INITIALIZED", this.name);
              throw new Error(e);
            }
          }
          registerRelayerEvents() {
            this.core.relayer.on(xf.message, (async e => {
              const {topic: t, message: r} = e;
              if (this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
              const i = await this.core.crypto.decode(t, r);
              nl(i) ? (this.core.history.set(t, i), this.onRelayEventRequest({
                topic: t,
                payload: i
              })) : sl(i) && (await this.core.history.resolve(i), this.onRelayEventResponse({
                topic: t,
                payload: i
              }));
            }));
          }
          registerExpirerEvents() {
            this.core.expirer.on(Vf.expired, (async e => {
              const {topic: t} = Yc(e.target);
              t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit("pairing_expire", {
                topic: t
              }));
            }));
          }
        }
        class Ed extends li {
          constructor(e, t) {
            super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new R.exports.EventEmitter, this.name = $f, 
            this.version = qf, this.cached = [], this.initialized = !1, this.storagePrefix = lf, this.init = async () => {
              this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => this.records.set(e.id, e))), 
              this.cached = [], this.registerEventListeners(), this.initialized = !0);
            }, this.set = (e, t, r) => {
              if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                type: "method",
                method: "set",
                topic: e,
                request: t,
                chainId: r
              }), this.records.has(t.id)) return;
              const i = {
                id: t.id,
                topic: e,
                request: {
                  method: t.method,
                  params: t.params || null
                },
                chainId: r
              };
              this.records.set(i.id, i), this.events.emit(Hf.created, i);
            }, this.resolve = async e => {
              if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                type: "method",
                method: "update",
                response: e
              }), !this.records.has(e.id)) return;
              const t = await this.getRecord(e.id);
              typeof t.response > "u" && (t.response = al(e) ? {
                error: e.error
              } : {
                result: e.result
              }, this.records.set(t.id, t), this.events.emit(Hf.updated, t));
            }, this.get = async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
              type: "method",
              method: "get",
              topic: e,
              id: t
            }), await this.getRecord(t)), this.delete = (e, t) => {
              this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                type: "method",
                method: "delete",
                id: t
              }), this.values.forEach((r => {
                if (r.topic === e) {
                  if (typeof t < "u" && r.id !== t) return;
                  this.records.delete(r.id), this.events.emit(Hf.deleted, r);
                }
              }));
            }, this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e), 
            this.on = (e, t) => {
              this.events.on(e, t);
            }, this.once = (e, t) => {
              this.events.once(e, t);
            }, this.off = (e, t) => {
              this.events.off(e, t);
            }, this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }, this.logger = jr.generateChildLogger(t, this.name);
          }
          get context() {
            return jr.getLoggerContext(this.logger);
          }
          get storageKey() {
            return this.storagePrefix + this.version + "//" + this.name;
          }
          get size() {
            return this.records.size;
          }
          get keys() {
            return Array.from(this.records.keys());
          }
          get values() {
            return Array.from(this.records.values());
          }
          get pending() {
            const e = [];
            return this.values.forEach((t => {
              if (typeof t.response < "u") return;
              const r = {
                topic: t.topic,
                request: Ku(t.request.method, t.request.params, t.id),
                chainId: t.chainId
              };
              return e.push(r);
            })), e;
          }
          async setJsonRpcRecords(e) {
            await this.core.storage.setItem(this.storageKey, e);
          }
          async getJsonRpcRecords() {
            return await this.core.storage.getItem(this.storageKey);
          }
          getRecord(e) {
            this.isInitialized();
            const t = this.records.get(e);
            if (!t) {
              const {message: t} = mh("NO_MATCHING_KEY", `${this.name}: ${e}`);
              throw new Error(t);
            }
            return t;
          }
          async persist() {
            await this.setJsonRpcRecords(this.values), this.events.emit(Hf.sync);
          }
          async restore() {
            try {
              const e = await this.getJsonRpcRecords();
              if (typeof e > "u" || !e.length) return;
              if (this.records.size) {
                const {message: e} = mh("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(e), new Error(e);
              }
              this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
              });
            } catch (e) {
              this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
            }
          }
          registerEventListeners() {
            this.events.on(Hf.created, (e => {
              const t = Hf.created;
              this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
              }), this.persist();
            })), this.events.on(Hf.updated, (e => {
              const t = Hf.updated;
              this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
              }), this.persist();
            })), this.events.on(Hf.deleted, (e => {
              const t = Hf.deleted;
              this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
              }), this.persist();
            }));
          }
          isInitialized() {
            if (!this.initialized) {
              const {message: e} = mh("NOT_INITIALIZED", this.name);
              throw new Error(e);
            }
          }
        }
        class Sd extends bi {
          constructor(e, t) {
            super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new R.exports.EventEmitter, this.name = Kf, 
            this.version = Bf, this.cached = [], this.initialized = !1, this.storagePrefix = lf, this.init = async () => {
              this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((e => this.expirations.set(e.target, e))), 
              this.cached = [], this.registerEventListeners(), this.initialized = !0);
            }, this.has = e => {
              try {
                const t = this.formatTarget(e);
                return typeof this.getExpiration(t) < "u";
              } catch {
                return !1;
              }
            }, this.set = (e, t) => {
              this.isInitialized();
              const r = this.formatTarget(e), i = {
                target: r,
                expiry: t
              };
              this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(Vf.created, {
                target: r,
                expiration: i
              });
            }, this.get = e => {
              this.isInitialized();
              const t = this.formatTarget(e);
              return this.getExpiration(t);
            }, this.del = e => {
              if (this.isInitialized(), this.has(e)) {
                const t = this.formatTarget(e), r = this.getExpiration(t);
                this.expirations.delete(t), this.events.emit(Vf.deleted, {
                  target: t,
                  expiration: r
                });
              }
            }, this.on = (e, t) => {
              this.events.on(e, t);
            }, this.once = (e, t) => {
              this.events.once(e, t);
            }, this.off = (e, t) => {
              this.events.off(e, t);
            }, this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }, this.logger = jr.generateChildLogger(t, this.name);
          }
          get context() {
            return jr.getLoggerContext(this.logger);
          }
          get storageKey() {
            return this.storagePrefix + this.version + "//" + this.name;
          }
          get length() {
            return this.expirations.size;
          }
          get keys() {
            return Array.from(this.expirations.keys());
          }
          get values() {
            return Array.from(this.expirations.values());
          }
          formatTarget(e) {
            if ("string" == typeof e) return Gc(e);
            if ("number" == typeof e) return Wc(e);
            const {message: t} = mh("UNKNOWN_TYPE", "Target type: " + typeof e);
            throw new Error(t);
          }
          async setExpirations(e) {
            await this.core.storage.setItem(this.storageKey, e);
          }
          async getExpirations() {
            return await this.core.storage.getItem(this.storageKey);
          }
          async persist() {
            await this.setExpirations(this.values), this.events.emit(Vf.sync);
          }
          async restore() {
            try {
              const e = await this.getExpirations();
              if (typeof e > "u" || !e.length) return;
              if (this.expirations.size) {
                const {message: e} = mh("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(e), new Error(e);
              }
              this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
              });
            } catch (e) {
              this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
            }
          }
          getExpiration(e) {
            const t = this.expirations.get(e);
            if (!t) {
              const {message: t} = mh("NO_MATCHING_KEY", `${this.name}: ${e}`);
              throw this.logger.error(t), new Error(t);
            }
            return t;
          }
          checkExpiry(e, t) {
            const {expiry: r} = t;
            bt.toMiliseconds(r) - Date.now() <= 0 && this.expire(e, t);
          }
          expire(e, t) {
            this.expirations.delete(e), this.events.emit(Vf.expired, {
              target: e,
              expiration: t
            });
          }
          checkExpirations() {
            this.core.relayer.connected && this.expirations.forEach(((e, t) => this.checkExpiry(t, e)));
          }
          registerEventListeners() {
            this.core.heartbeat.on(Ve.HEARTBEAT_EVENTS.pulse, (() => this.checkExpirations())), this.events.on(Vf.created, (e => {
              const t = Vf.created;
              this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
              }), this.persist();
            })), this.events.on(Vf.expired, (e => {
              const t = Vf.expired;
              this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
              }), this.persist();
            })), this.events.on(Vf.deleted, (e => {
              const t = Vf.deleted;
              this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
              }), this.persist();
            }));
          }
          isInitialized() {
            if (!this.initialized) {
              const {message: e} = mh("NOT_INITIALIZED", this.name);
              throw new Error(e);
            }
          }
        }
        var Od = Object.defineProperty, Id = Object.getOwnPropertySymbols, Pd = Object.prototype.hasOwnProperty, xd = Object.prototype.propertyIsEnumerable, Nd = (e, t, r) => t in e ? Od(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r, Td = (e, t) => {
          for (var r in t || (t = {})) Pd.call(t, r) && Nd(e, r, t[r]);
          if (Id) for (var r of Id(t)) xd.call(t, r) && Nd(e, r, t[r]);
          return e;
        };
        class Ad extends ui {
          constructor(e) {
            super(e), this.protocol = cf, this.version = hf, this.name = uf, this.events = new R.exports.EventEmitter, this.initialized = !1, 
            this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), 
            this.removeListener = (e, t) => this.events.removeListener(e, t), this.projectId = e?.projectId, this.relayUrl = e?.relayUrl || If;
            const t = typeof e?.logger < "u" && "string" != typeof e?.logger ? e.logger : c(jr.getDefaultLoggerOptions({
              level: e?.logger || pf.logger
            }));
            this.logger = jr.generateChildLogger(t, this.name), this.heartbeat = new Ve.HeartBeat, this.crypto = new Gf(this, this.logger, e?.keychain), 
            this.history = new Ed(this, this.logger), this.expirer = new Sd(this, this.logger), this.storage = null != e && e.storage ? e.storage : new Ke(Td(Td({}, ff), e?.storageOptions)), 
            this.relayer = new fd({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId
            }), this.pairing = new _d(this, this.logger);
          }
          static async init(e) {
            const t = new Ad(e);
            return await t.initialize(), t;
          }
          get context() {
            return jr.getLoggerContext(this.logger);
          }
          async start() {
            this.initialized || await this.initialize();
          }
          async initialize() {
            this.logger.trace("Initialized");
            try {
              await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), 
              await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
            } catch (e) {
              throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
            }
          }
        }
        const Rd = Ad, jd = "wc", Ld = 2, Cd = "client", Ud = `${jd}@${Ld}:${Cd}:`, Md = {
          name: Cd,
          logger: "error",
          controller: !1,
          relayUrl: "wss://relay.walletconnect.com"
        }, Dd = "proposal", kd = "session", zd = bt.SEVEN_DAYS, Hd = "engine", $d = {
          wc_sessionPropose: {
            req: {
              ttl: bt.FIVE_MINUTES,
              prompt: !0,
              tag: 1100
            },
            res: {
              ttl: bt.FIVE_MINUTES,
              prompt: !1,
              tag: 1101
            }
          },
          wc_sessionSettle: {
            req: {
              ttl: bt.FIVE_MINUTES,
              prompt: !1,
              tag: 1102
            },
            res: {
              ttl: bt.FIVE_MINUTES,
              prompt: !1,
              tag: 1103
            }
          },
          wc_sessionUpdate: {
            req: {
              ttl: bt.ONE_DAY,
              prompt: !1,
              tag: 1104
            },
            res: {
              ttl: bt.ONE_DAY,
              prompt: !1,
              tag: 1105
            }
          },
          wc_sessionExtend: {
            req: {
              ttl: bt.ONE_DAY,
              prompt: !1,
              tag: 1106
            },
            res: {
              ttl: bt.ONE_DAY,
              prompt: !1,
              tag: 1107
            }
          },
          wc_sessionRequest: {
            req: {
              ttl: bt.FIVE_MINUTES,
              prompt: !0,
              tag: 1108
            },
            res: {
              ttl: bt.FIVE_MINUTES,
              prompt: !1,
              tag: 1109
            }
          },
          wc_sessionEvent: {
            req: {
              ttl: bt.FIVE_MINUTES,
              prompt: !0,
              tag: 1110
            },
            res: {
              ttl: bt.FIVE_MINUTES,
              prompt: !1,
              tag: 1111
            }
          },
          wc_sessionDelete: {
            req: {
              ttl: bt.ONE_DAY,
              prompt: !1,
              tag: 1112
            },
            res: {
              ttl: bt.ONE_DAY,
              prompt: !1,
              tag: 1113
            }
          },
          wc_sessionPing: {
            req: {
              ttl: bt.THIRTY_SECONDS,
              prompt: !1,
              tag: 1114
            },
            res: {
              ttl: bt.THIRTY_SECONDS,
              prompt: !1,
              tag: 1115
            }
          }
        }, qd = {
          min: bt.FIVE_MINUTES,
          max: bt.SEVEN_DAYS
        }, Kd = "request";
        var Vd = Object.defineProperty, Bd = Object.defineProperties, Fd = Object.getOwnPropertyDescriptors, Gd = Object.getOwnPropertySymbols, Wd = Object.prototype.hasOwnProperty, Yd = Object.prototype.propertyIsEnumerable, Jd = (e, t, r) => t in e ? Vd(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r, Xd = (e, t) => {
          for (var r in t || (t = {})) Wd.call(t, r) && Jd(e, r, t[r]);
          if (Gd) for (var r of Gd(t)) Yd.call(t, r) && Jd(e, r, t[r]);
          return e;
        }, Zd = (e, t) => Bd(e, Fd(t));
        class Qd extends mi {
          constructor(e) {
            super(e), this.name = Hd, this.events = new R.exports, this.initialized = !1, this.ignoredPayloadTypes = [ ic ], this.init = async () => {
              this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({
                methods: Object.keys($d)
              }), this.initialized = !0);
            }, this.connect = async e => {
              this.isInitialized();
              const t = Zd(Xd({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {}
              });
              await this.isValidConnect(t);
              const {pairingTopic: r, requiredNamespaces: i, optionalNamespaces: n, sessionProperties: s, relays: o} = t;
              let a, c = r, h = !1;
              if (c && (h = this.client.core.pairing.pairings.get(c).active), !c || !h) {
                const {topic: e, uri: t} = await this.client.core.pairing.create();
                c = e, a = t;
              }
              const u = await this.client.core.crypto.generateKeyPair(), l = Xd({
                requiredNamespaces: i,
                optionalNamespaces: n,
                relays: o ?? [ {
                  protocol: Sf
                } ],
                proposer: {
                  publicKey: u,
                  metadata: this.client.metadata
                }
              }, s && {
                sessionProperties: s
              }), {reject: p, resolve: f, done: d} = Vc();
              if (this.events.once(Zc("session_connect"), (async ({error: e, session: t}) => {
                if (e) p(e); else if (t) {
                  t.self.publicKey = u;
                  const e = Zd(Xd({}, t), {
                    requiredNamespaces: t.requiredNamespaces,
                    optionalNamespaces: t.optionalNamespaces
                  });
                  await this.client.session.set(t.topic, e), await this.setExpiry(t.topic, t.expiry), c && await this.client.core.pairing.updateMetadata({
                    topic: c,
                    metadata: t.peer.metadata
                  }), f(e);
                }
              })), !c) {
                const {message: e} = mh("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
                throw new Error(e);
              }
              const y = await this.sendRequest(c, "wc_sessionPropose", l), g = Jc(bt.FIVE_MINUTES);
              return await this.setProposal(y, Xd({
                id: y,
                expiry: g
              }, l)), {
                uri: a,
                approval: d
              };
            }, this.pair = async e => (this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async e => {
              this.isInitialized(), await this.isValidApprove(e);
              const {id: t, relayProtocol: r, namespaces: i, sessionProperties: n} = e, s = this.client.proposal.get(t);
              let {pairingTopic: o, proposer: a, requiredNamespaces: c, optionalNamespaces: h} = s;
              Eh(c) || (c = gh(i, "approve()"));
              const u = await this.client.core.crypto.generateKeyPair(), l = a.publicKey, p = await this.client.core.crypto.generateSharedKey(u, l);
              o && t && (await this.client.core.pairing.updateMetadata({
                topic: o,
                metadata: a.metadata
              }), await this.sendResult(t, o, {
                relay: {
                  protocol: r ?? "irn"
                },
                responderPublicKey: u
              }), await this.client.proposal.delete(t, wh("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                topic: o
              }));
              const f = Xd({
                relay: {
                  protocol: r ?? "irn"
                },
                namespaces: i,
                requiredNamespaces: c,
                optionalNamespaces: h,
                controller: {
                  publicKey: u,
                  metadata: this.client.metadata
                },
                expiry: Jc(zd)
              }, n && {
                sessionProperties: n
              });
              await this.client.core.relayer.subscribe(p);
              const d = await this.sendRequest(p, "wc_sessionSettle", f), {done: y, resolve: g, reject: b} = Vc();
              this.events.once(Zc("session_approve", d), (({error: e}) => {
                e ? b(e) : g(this.client.session.get(p));
              }));
              const v = Zd(Xd({}, f), {
                topic: p,
                acknowledged: !1,
                self: f.controller,
                peer: {
                  publicKey: a.publicKey,
                  metadata: a.metadata
                },
                controller: u
              });
              return await this.client.session.set(p, v), await this.setExpiry(p, Jc(zd)), {
                topic: p,
                acknowledged: y
              };
            }, this.reject = async e => {
              this.isInitialized(), await this.isValidReject(e);
              const {id: t, reason: r} = e, {pairingTopic: i} = this.client.proposal.get(t);
              i && (await this.sendError(t, i, r), await this.client.proposal.delete(t, wh("USER_DISCONNECTED")));
            }, this.update = async e => {
              this.isInitialized(), await this.isValidUpdate(e);
              const {topic: t, namespaces: r} = e, i = await this.sendRequest(t, "wc_sessionUpdate", {
                namespaces: r
              }), {done: n, resolve: s, reject: o} = Vc();
              return this.events.once(Zc("session_update", i), (({error: e}) => {
                e ? o(e) : s();
              })), await this.client.session.update(t, {
                namespaces: r
              }), {
                acknowledged: n
              };
            }, this.extend = async e => {
              this.isInitialized(), await this.isValidExtend(e);
              const {topic: t} = e, r = await this.sendRequest(t, "wc_sessionExtend", {}), {done: i, resolve: n, reject: s} = Vc();
              return this.events.once(Zc("session_extend", r), (({error: e}) => {
                e ? s(e) : n();
              })), await this.setExpiry(t, Jc(zd)), {
                acknowledged: i
              };
            }, this.request = async e => {
              this.isInitialized(), await this.isValidRequest(e);
              const {chainId: t, request: r, topic: i, expiry: n} = e, s = await this.sendRequest(i, "wc_sessionRequest", {
                request: r,
                chainId: t
              }, n), {done: o, resolve: a, reject: c} = Vc(n);
              return this.events.once(Zc("session_request", s), (({error: e, result: t}) => {
                e ? c(e) : a(t);
              })), this.client.events.emit("session_request_sent", {
                topic: i,
                request: r,
                chainId: t
              }), await o();
            }, this.respond = async e => {
              this.isInitialized(), await this.isValidRespond(e);
              const {topic: t, response: r} = e, {id: i} = r;
              ol(r) ? await this.sendResult(i, t, r.result) : al(r) && await this.sendError(i, t, r.error), this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0
              });
            }, this.ping = async e => {
              this.isInitialized(), await this.isValidPing(e);
              const {topic: t} = e;
              if (this.client.session.keys.includes(t)) {
                const e = await this.sendRequest(t, "wc_sessionPing", {}), {done: r, resolve: i, reject: n} = Vc();
                this.events.once(Zc("session_ping", e), (({error: e}) => {
                  e ? n(e) : i();
                })), await r();
              } else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                topic: t
              });
            }, this.emit = async e => {
              this.isInitialized(), await this.isValidEmit(e);
              const {topic: t, event: r, chainId: i} = e;
              await this.sendRequest(t, "wc_sessionEvent", {
                event: r,
                chainId: i
              });
            }, this.disconnect = async e => {
              this.isInitialized(), await this.isValidDisconnect(e);
              const {topic: t} = e;
              this.client.session.keys.includes(t) ? (await this.sendRequest(t, "wc_sessionDelete", wh("USER_DISCONNECTED")), await this.deleteSession(t)) : await this.client.core.pairing.disconnect({
                topic: t
              });
            }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter((t => Ph(t, e)))), this.getPendingSessionRequests = () => (this.isInitialized(), 
            this.client.pendingRequest.getAll()), this.deleteSession = async (e, t) => {
              const {self: r} = this.client.session.get(e);
              await this.client.core.relayer.unsubscribe(e), await Promise.all([ this.client.session.delete(e, wh("USER_DISCONNECTED")), this.client.core.crypto.deleteKeyPair(r.publicKey), this.client.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.client.core.expirer.del(e) ]);
            }, this.deleteProposal = async (e, t) => {
              await Promise.all([ this.client.proposal.delete(e, wh("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e) ]);
            }, this.deletePendingSessionRequest = async (e, t, r = !1) => {
              await Promise.all([ this.client.pendingRequest.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e) ]);
            }, this.setExpiry = async (e, t) => {
              this.client.session.keys.includes(e) && await this.client.session.update(e, {
                expiry: t
              }), this.client.core.expirer.set(e, t);
            }, this.setProposal = async (e, t) => {
              await this.client.proposal.set(e, t), this.client.core.expirer.set(e, t.expiry);
            }, this.setPendingSessionRequest = async e => {
              const t = $d.wc_sessionRequest.req.ttl, {id: r, topic: i, params: n} = e;
              await this.client.pendingRequest.set(r, {
                id: r,
                topic: i,
                params: n
              }), t && this.client.core.expirer.set(r, Jc(t));
            }, this.sendRequest = async (e, t, r, i) => {
              const n = Ku(t, r), s = await this.client.core.crypto.encode(e, n), o = $d[t].req;
              return i && (o.ttl = i), this.client.core.history.set(e, n), this.client.core.relayer.publish(e, s, o), n.id;
            }, this.sendResult = async (e, t, r) => {
              const i = Vu(e, r), n = await this.client.core.crypto.encode(t, i), s = await this.client.core.history.get(t, e), o = $d[s.request.method].res;
              this.client.core.relayer.publish(t, n, o), await this.client.core.history.resolve(i);
            }, this.sendError = async (e, t, r) => {
              const i = Bu(e, r), n = await this.client.core.crypto.encode(t, i), s = await this.client.core.history.get(t, e), o = $d[s.request.method].res;
              this.client.core.relayer.publish(t, n, o), await this.client.core.history.resolve(i);
            }, this.cleanup = async () => {
              const e = [], t = [];
              this.client.session.getAll().forEach((t => {
                Xc(t.expiry) && e.push(t.topic);
              })), this.client.proposal.getAll().forEach((e => {
                Xc(e.expiry) && t.push(e.id);
              })), await Promise.all([ ...e.map((e => this.deleteSession(e))), ...t.map((e => this.deleteProposal(e))) ]);
            }, this.onRelayEventRequest = e => {
              const {topic: t, payload: r} = e, i = r.method;
              switch (i) {
               case "wc_sessionPropose":
                return this.onSessionProposeRequest(t, r);

               case "wc_sessionSettle":
                return this.onSessionSettleRequest(t, r);

               case "wc_sessionUpdate":
                return this.onSessionUpdateRequest(t, r);

               case "wc_sessionExtend":
                return this.onSessionExtendRequest(t, r);

               case "wc_sessionPing":
                return this.onSessionPingRequest(t, r);

               case "wc_sessionDelete":
                return this.onSessionDeleteRequest(t, r);

               case "wc_sessionRequest":
                return this.onSessionRequest(t, r);

               case "wc_sessionEvent":
                return this.onSessionEventRequest(t, r);

               default:
                return this.client.logger.info(`Unsupported request method ${i}`);
              }
            }, this.onRelayEventResponse = async e => {
              const {topic: t, payload: r} = e, i = (await this.client.core.history.get(t, r.id)).request.method;
              switch (i) {
               case "wc_sessionPropose":
                return this.onSessionProposeResponse(t, r);

               case "wc_sessionSettle":
                return this.onSessionSettleResponse(t, r);

               case "wc_sessionUpdate":
                return this.onSessionUpdateResponse(t, r);

               case "wc_sessionExtend":
                return this.onSessionExtendResponse(t, r);

               case "wc_sessionPing":
                return this.onSessionPingResponse(t, r);

               case "wc_sessionRequest":
                return this.onSessionRequestResponse(t, r);

               default:
                return this.client.logger.info(`Unsupported response method ${i}`);
              }
            }, this.onSessionProposeRequest = async (e, t) => {
              const {params: r, id: i} = t;
              try {
                this.isValidConnect(Xd({}, t.params));
                const n = Jc(bt.FIVE_MINUTES), s = Xd({
                  id: i,
                  pairingTopic: e,
                  expiry: n
                }, r);
                await this.setProposal(i, s), this.client.events.emit("session_proposal", {
                  id: i,
                  params: s
                });
              } catch (n) {
                await this.sendError(i, e, n), this.client.logger.error(n);
              }
            }, this.onSessionProposeResponse = async (e, t) => {
              const {id: r} = t;
              if (ol(t)) {
                const {result: i} = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: i
                });
                const n = this.client.proposal.get(r);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: n
                });
                const s = n.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: s
                });
                const o = i.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: o
                });
                const a = await this.client.core.crypto.generateSharedKey(s, o);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  sessionTopic: a
                });
                const c = await this.client.core.relayer.subscribe(a);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: c
                }), await this.client.core.pairing.activate({
                  topic: e
                });
              } else al(t) && (await this.client.proposal.delete(r, wh("USER_DISCONNECTED")), this.events.emit(Zc("session_connect"), {
                error: t.error
              }));
            }, this.onSessionSettleRequest = async (e, t) => {
              const {id: r, params: i} = t;
              try {
                this.isValidSessionSettleRequest(i);
                const {relay: r, controller: n, expiry: s, namespaces: o, requiredNamespaces: a, optionalNamespaces: c, sessionProperties: h} = t.params, u = Xd({
                  topic: e,
                  relay: r,
                  expiry: s,
                  namespaces: o,
                  acknowledged: !0,
                  requiredNamespaces: a,
                  optionalNamespaces: c,
                  controller: n.publicKey,
                  self: {
                    publicKey: "",
                    metadata: this.client.metadata
                  },
                  peer: {
                    publicKey: n.publicKey,
                    metadata: n.metadata
                  }
                }, h && {
                  sessionProperties: h
                });
                await this.sendResult(t.id, e, !0), this.events.emit(Zc("session_connect"), {
                  session: u
                });
              } catch (n) {
                await this.sendError(r, e, n), this.client.logger.error(n);
              }
            }, this.onSessionSettleResponse = async (e, t) => {
              const {id: r} = t;
              ol(t) ? (await this.client.session.update(e, {
                acknowledged: !0
              }), this.events.emit(Zc("session_approve", r), {})) : al(t) && (await this.client.session.delete(e, wh("USER_DISCONNECTED")), 
              this.events.emit(Zc("session_approve", r), {
                error: t.error
              }));
            }, this.onSessionUpdateRequest = async (e, t) => {
              const {params: r, id: i} = t;
              try {
                this.isValidUpdate(Xd({
                  topic: e
                }, r)), await this.client.session.update(e, {
                  namespaces: r.namespaces
                }), await this.sendResult(i, e, !0), this.client.events.emit("session_update", {
                  id: i,
                  topic: e,
                  params: r
                });
              } catch (n) {
                await this.sendError(i, e, n), this.client.logger.error(n);
              }
            }, this.onSessionUpdateResponse = (e, t) => {
              const {id: r} = t;
              ol(t) ? this.events.emit(Zc("session_update", r), {}) : al(t) && this.events.emit(Zc("session_update", r), {
                error: t.error
              });
            }, this.onSessionExtendRequest = async (e, t) => {
              const {id: r} = t;
              try {
                this.isValidExtend({
                  topic: e
                }), await this.setExpiry(e, Jc(zd)), await this.sendResult(r, e, !0), this.client.events.emit("session_extend", {
                  id: r,
                  topic: e
                });
              } catch (i) {
                await this.sendError(r, e, i), this.client.logger.error(i);
              }
            }, this.onSessionExtendResponse = (e, t) => {
              const {id: r} = t;
              ol(t) ? this.events.emit(Zc("session_extend", r), {}) : al(t) && this.events.emit(Zc("session_extend", r), {
                error: t.error
              });
            }, this.onSessionPingRequest = async (e, t) => {
              const {id: r} = t;
              try {
                this.isValidPing({
                  topic: e
                }), await this.sendResult(r, e, !0), this.client.events.emit("session_ping", {
                  id: r,
                  topic: e
                });
              } catch (i) {
                await this.sendError(r, e, i), this.client.logger.error(i);
              }
            }, this.onSessionPingResponse = (e, t) => {
              const {id: r} = t;
              setTimeout((() => {
                ol(t) ? this.events.emit(Zc("session_ping", r), {}) : al(t) && this.events.emit(Zc("session_ping", r), {
                  error: t.error
                });
              }), 500);
            }, this.onSessionDeleteRequest = async (e, t) => {
              const {id: r} = t;
              try {
                this.isValidDisconnect({
                  topic: e,
                  reason: t.params
                }), this.client.core.relayer.once(xf.publish, (async () => {
                  await this.deleteSession(e);
                })), await this.sendResult(r, e, !0), this.client.events.emit("session_delete", {
                  id: r,
                  topic: e
                });
              } catch (i) {
                await this.sendError(r, e, i), this.client.logger.error(i);
              }
            }, this.onSessionRequest = async (e, t) => {
              const {id: r, params: i} = t;
              try {
                this.isValidRequest(Xd({
                  topic: e
                }, i)), await this.setPendingSessionRequest({
                  id: r,
                  topic: e,
                  params: i
                }), this.client.events.emit("session_request", {
                  id: r,
                  topic: e,
                  params: i
                });
              } catch (n) {
                await this.sendError(r, e, n), this.client.logger.error(n);
              }
            }, this.onSessionRequestResponse = (e, t) => {
              const {id: r} = t;
              ol(t) ? this.events.emit(Zc("session_request", r), {
                result: t.result
              }) : al(t) && this.events.emit(Zc("session_request", r), {
                error: t.error
              });
            }, this.onSessionEventRequest = async (e, t) => {
              const {id: r, params: i} = t;
              try {
                this.isValidEmit(Xd({
                  topic: e
                }, i)), this.client.events.emit("session_event", {
                  id: r,
                  topic: e,
                  params: i
                });
              } catch (n) {
                await this.sendError(r, e, n), this.client.logger.error(n);
              }
            }, this.isValidConnect = async e => {
              if (!Bh(e)) {
                const {message: t} = mh("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                throw new Error(t);
              }
              const {pairingTopic: t, requiredNamespaces: r, optionalNamespaces: i, sessionProperties: n, relays: s} = e;
              if (Sh(t) || await this.isValidPairingTopic(t), !Kh(s, !0)) {
                const {message: e} = mh("MISSING_OR_INVALID", `connect() relays: ${s}`);
                throw new Error(e);
              }
              !Sh(r) && 0 !== Eh(r) && this.validateNamespaces(r, "requiredNamespaces"), !Sh(i) && 0 !== Eh(i) && this.validateNamespaces(i, "optionalNamespaces"), 
              Sh(n) || this.validateSessionProps(n, "sessionProperties");
            }, this.validateNamespaces = (e, t) => {
              const r = Hh(e, "connect()", t);
              if (r) throw new Error(r.message);
            }, this.isValidApprove = async e => {
              if (!Bh(e)) throw new Error(mh("MISSING_OR_INVALID", `approve() params: ${e}`).message);
              const {id: t, namespaces: r, relayProtocol: i, sessionProperties: n} = e;
              await this.isValidProposalId(t);
              const s = this.client.proposal.get(t), o = $h(r, "approve()");
              if (o) throw new Error(o.message);
              const a = Qh(s.requiredNamespaces, r, "approve()", "requiredNamespaces");
              if (a) throw new Error(a.message);
              if (!Oh(i, !0)) {
                const {message: e} = mh("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                throw new Error(e);
              }
              if (Object.keys(r).length > Object.keys(s.requiredNamespaces).length) {
                const e = Object.keys(s.optionalNamespaces).filter((e => r[e])), t = {};
                for (const r in s.optionalNamespaces) e.includes(r) && (t[r] = s.optionalNamespaces[r]);
                const i = Qh(t, r, "approve()", "optionalNamespaces");
                if (i) throw new Error(i.message);
              }
              Sh(n) || this.validateSessionProps(n, "sessionProperties");
            }, this.isValidReject = async e => {
              if (!Bh(e)) {
                const {message: t} = mh("MISSING_OR_INVALID", `reject() params: ${e}`);
                throw new Error(t);
              }
              const {id: t, reason: r} = e;
              if (await this.isValidProposalId(t), !Fh(r)) {
                const {message: e} = mh("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                throw new Error(e);
              }
            }, this.isValidSessionSettleRequest = e => {
              if (!Bh(e)) {
                const {message: t} = mh("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                throw new Error(t);
              }
              const {relay: t, controller: r, namespaces: i, expiry: n} = e;
              if (!qh(t)) {
                const {message: e} = mh("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(e);
              }
              const s = jh(r, "onSessionSettleRequest()");
              if (s) throw new Error(s.message);
              const o = $h(i, "onSessionSettleRequest()");
              if (o) throw new Error(o.message);
              if (Xc(n)) {
                const {message: e} = mh("EXPIRED", "onSessionSettleRequest()");
                throw new Error(e);
              }
            }, this.isValidUpdate = async e => {
              if (!Bh(e)) {
                const {message: t} = mh("MISSING_OR_INVALID", `update() params: ${e}`);
                throw new Error(t);
              }
              const {topic: t, namespaces: r} = e;
              await this.isValidSessionTopic(t);
              const i = this.client.session.get(t), n = $h(r, "update()");
              if (n) throw new Error(n.message);
              const s = Qh(i.requiredNamespaces, r, "update()", "requiredNamespaces");
              if (s) throw new Error(s.message);
            }, this.isValidExtend = async e => {
              if (!Bh(e)) {
                const {message: t} = mh("MISSING_OR_INVALID", `extend() params: ${e}`);
                throw new Error(t);
              }
              const {topic: t} = e;
              await this.isValidSessionTopic(t);
            }, this.isValidRequest = async e => {
              if (!Bh(e)) {
                const {message: t} = mh("MISSING_OR_INVALID", `request() params: ${e}`);
                throw new Error(t);
              }
              const {topic: t, request: r, chainId: i, expiry: n} = e;
              await this.isValidSessionTopic(t);
              const {namespaces: s} = this.client.session.get(t);
              if (!Jh(s, i)) {
                const {message: e} = mh("MISSING_OR_INVALID", `request() chainId: ${i}`);
                throw new Error(e);
              }
              if (!Gh(r)) {
                const {message: e} = mh("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
                throw new Error(e);
              }
              if (!Xh(s, i, r.method)) {
                const {message: e} = mh("MISSING_OR_INVALID", `request() method: ${r.method}`);
                throw new Error(e);
              }
              if (n && !eu(n, qd)) {
                const {message: e} = mh("MISSING_OR_INVALID", `request() expiry: ${n}. Expiry must be a number (in seconds) between ${qd.min} and ${qd.max}`);
                throw new Error(e);
              }
            }, this.isValidRespond = async e => {
              if (!Bh(e)) {
                const {message: t} = mh("MISSING_OR_INVALID", `respond() params: ${e}`);
                throw new Error(t);
              }
              const {topic: t, response: r} = e;
              if (await this.isValidSessionTopic(t), !Wh(r)) {
                const {message: e} = mh("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
                throw new Error(e);
              }
            }, this.isValidPing = async e => {
              if (!Bh(e)) {
                const {message: t} = mh("MISSING_OR_INVALID", `ping() params: ${e}`);
                throw new Error(t);
              }
              const {topic: t} = e;
              await this.isValidSessionOrPairingTopic(t);
            }, this.isValidEmit = async e => {
              if (!Bh(e)) {
                const {message: t} = mh("MISSING_OR_INVALID", `emit() params: ${e}`);
                throw new Error(t);
              }
              const {topic: t, event: r, chainId: i} = e;
              await this.isValidSessionTopic(t);
              const {namespaces: n} = this.client.session.get(t);
              if (!Jh(n, i)) {
                const {message: e} = mh("MISSING_OR_INVALID", `emit() chainId: ${i}`);
                throw new Error(e);
              }
              if (!Yh(r)) {
                const {message: e} = mh("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                throw new Error(e);
              }
              if (!Zh(n, i, r.name)) {
                const {message: e} = mh("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                throw new Error(e);
              }
            }, this.isValidDisconnect = async e => {
              if (!Bh(e)) {
                const {message: t} = mh("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                throw new Error(t);
              }
              const {topic: t} = e;
              await this.isValidSessionOrPairingTopic(t);
            }, this.validateSessionProps = (e, t) => {
              Object.values(e).forEach((e => {
                if (!Oh(e, !1)) {
                  const {message: r} = mh("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
                  throw new Error(r);
                }
              }));
            };
          }
          isInitialized() {
            if (!this.initialized) {
              const {message: e} = mh("NOT_INITIALIZED", this.name);
              throw new Error(e);
            }
          }
          registerRelayerEvents() {
            this.client.core.relayer.on(xf.message, (async e => {
              const {topic: t, message: r} = e;
              if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
              const i = await this.client.core.crypto.decode(t, r);
              nl(i) ? (this.client.core.history.set(t, i), this.onRelayEventRequest({
                topic: t,
                payload: i
              })) : sl(i) && (await this.client.core.history.resolve(i), this.onRelayEventResponse({
                topic: t,
                payload: i
              }));
            }));
          }
          registerExpirerEvents() {
            this.client.core.expirer.on(Vf.expired, (async e => {
              const {topic: t, id: r} = Yc(e.target);
              if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, mh("EXPIRED"), !0);
              t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0), this.client.events.emit("session_expire", {
                topic: t
              })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                id: r
              }));
            }));
          }
          isValidPairingTopic(e) {
            if (!Oh(e, !1)) {
              const {message: t} = mh("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
              throw new Error(t);
            }
            if (!this.client.core.pairing.pairings.keys.includes(e)) {
              const {message: t} = mh("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
              throw new Error(t);
            }
            if (Xc(this.client.core.pairing.pairings.get(e).expiry)) {
              const {message: t} = mh("EXPIRED", `pairing topic: ${e}`);
              throw new Error(t);
            }
          }
          async isValidSessionTopic(e) {
            if (!Oh(e, !1)) {
              const {message: t} = mh("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
              throw new Error(t);
            }
            if (!this.client.session.keys.includes(e)) {
              const {message: t} = mh("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
              throw new Error(t);
            }
            if (Xc(this.client.session.get(e).expiry)) {
              await this.deleteSession(e);
              const {message: t} = mh("EXPIRED", `session topic: ${e}`);
              throw new Error(t);
            }
          }
          async isValidSessionOrPairingTopic(e) {
            if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e); else {
              if (!this.client.core.pairing.pairings.keys.includes(e)) {
                if (Oh(e, !1)) {
                  const {message: t} = mh("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                  throw new Error(t);
                }
                {
                  const {message: t} = mh("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                  throw new Error(t);
                }
              }
              this.isValidPairingTopic(e);
            }
          }
          async isValidProposalId(e) {
            if (!Vh(e)) {
              const {message: t} = mh("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
              throw new Error(t);
            }
            if (!this.client.proposal.keys.includes(e)) {
              const {message: t} = mh("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
              throw new Error(t);
            }
            if (Xc(this.client.proposal.get(e).expiry)) {
              await this.deleteProposal(e);
              const {message: t} = mh("EXPIRED", `proposal id: ${e}`);
              throw new Error(t);
            }
          }
        }
        class ey extends wd {
          constructor(e, t) {
            super(e, t, Dd, Ud), this.core = e, this.logger = t;
          }
        }
        class ty extends wd {
          constructor(e, t) {
            super(e, t, kd, Ud), this.core = e, this.logger = t;
          }
        }
        class ry extends wd {
          constructor(e, t) {
            super(e, t, Kd, Ud), this.core = e, this.logger = t;
          }
        }
        class iy extends vi {
          constructor(e) {
            super(e), this.protocol = jd, this.version = Ld, this.name = Md.name, this.events = new R.exports.EventEmitter, this.on = (e, t) => this.events.on(e, t), 
            this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), 
            this.removeAllListeners = e => this.events.removeAllListeners(e), this.connect = async e => {
              try {
                return await this.engine.connect(e);
              } catch (t) {
                throw this.logger.error(t.message), t;
              }
            }, this.pair = async e => {
              try {
                return await this.engine.pair(e);
              } catch (t) {
                throw this.logger.error(t.message), t;
              }
            }, this.approve = async e => {
              try {
                return await this.engine.approve(e);
              } catch (t) {
                throw this.logger.error(t.message), t;
              }
            }, this.reject = async e => {
              try {
                return await this.engine.reject(e);
              } catch (t) {
                throw this.logger.error(t.message), t;
              }
            }, this.update = async e => {
              try {
                return await this.engine.update(e);
              } catch (t) {
                throw this.logger.error(t.message), t;
              }
            }, this.extend = async e => {
              try {
                return await this.engine.extend(e);
              } catch (t) {
                throw this.logger.error(t.message), t;
              }
            }, this.request = async e => {
              try {
                return await this.engine.request(e);
              } catch (t) {
                throw this.logger.error(t.message), t;
              }
            }, this.respond = async e => {
              try {
                return await this.engine.respond(e);
              } catch (t) {
                throw this.logger.error(t.message), t;
              }
            }, this.ping = async e => {
              try {
                return await this.engine.ping(e);
              } catch (t) {
                throw this.logger.error(t.message), t;
              }
            }, this.emit = async e => {
              try {
                return await this.engine.emit(e);
              } catch (t) {
                throw this.logger.error(t.message), t;
              }
            }, this.disconnect = async e => {
              try {
                return await this.engine.disconnect(e);
              } catch (t) {
                throw this.logger.error(t.message), t;
              }
            }, this.find = e => {
              try {
                return this.engine.find(e);
              } catch (t) {
                throw this.logger.error(t.message), t;
              }
            }, this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw this.logger.error(e.message), e;
              }
            }, this.name = e?.name || Md.name, this.metadata = e?.metadata || Mc();
            const t = typeof e?.logger < "u" && "string" != typeof e?.logger ? e.logger : c(jr.getDefaultLoggerOptions({
              level: e?.logger || Md.logger
            }));
            this.core = e?.core || new Rd(e), this.logger = jr.generateChildLogger(t, this.name), this.session = new ty(this.core, this.logger), 
            this.proposal = new ey(this.core, this.logger), this.pendingRequest = new ry(this.core, this.logger), this.engine = new Qd(this);
          }
          static async init(e) {
            const t = new iy(e);
            return await t.initialize(), t;
          }
          get context() {
            return jr.getLoggerContext(this.logger);
          }
          get pairing() {
            return this.core.pairing.pairings;
          }
          async initialize() {
            this.logger.trace("Initialized");
            try {
              await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), 
              this.logger.info("SignClient Initialization Success");
            } catch (e) {
              throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e;
            }
          }
        }
        var ny = {
          exports: {}
        };
        !function(e, r) {
          var i = typeof self < "u" ? self : t, n = function() {
            function e() {
              this.fetch = !1, this.DOMException = i.DOMException;
            }
            return e.prototype = i, new e;
          }();
          (function(e) {
            !function(t) {
              var r = {
                searchParams: "URLSearchParams" in e,
                iterable: "Symbol" in e && "iterator" in Symbol,
                blob: "FileReader" in e && "Blob" in e && function() {
                  try {
                    return new Blob, !0;
                  } catch {
                    return !1;
                  }
                }(),
                formData: "FormData" in e,
                arrayBuffer: "ArrayBuffer" in e
              };
              function i(e) {
                return e && DataView.prototype.isPrototypeOf(e);
              }
              if (r.arrayBuffer) var n = [ "[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]" ], s = ArrayBuffer.isView || function(e) {
                return e && n.indexOf(Object.prototype.toString.call(e)) > -1;
              };
              function o(e) {
                if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                return e.toLowerCase();
              }
              function a(e) {
                return "string" != typeof e && (e = String(e)), e;
              }
              function c(e) {
                var t = {
                  next: function() {
                    var t = e.shift();
                    return {
                      done: void 0 === t,
                      value: t
                    };
                  }
                };
                return r.iterable && (t[Symbol.iterator] = function() {
                  return t;
                }), t;
              }
              function h(e) {
                this.map = {}, e instanceof h ? e.forEach((function(e, t) {
                  this.append(t, e);
                }), this) : Array.isArray(e) ? e.forEach((function(e) {
                  this.append(e[0], e[1]);
                }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
                  this.append(t, e[t]);
                }), this);
              }
              function u(e) {
                if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                e.bodyUsed = !0;
              }
              function l(e) {
                return new Promise((function(t, r) {
                  e.onload = function() {
                    t(e.result);
                  }, e.onerror = function() {
                    r(e.error);
                  };
                }));
              }
              function p(e) {
                var t = new FileReader, r = l(t);
                return t.readAsArrayBuffer(e), r;
              }
              function f(e) {
                var t = new FileReader, r = l(t);
                return t.readAsText(e), r;
              }
              function d(e) {
                for (var t = new Uint8Array(e), r = new Array(t.length), i = 0; i < t.length; i++) r[i] = String.fromCharCode(t[i]);
                return r.join("");
              }
              function y(e) {
                if (e.slice) return e.slice(0);
                var t = new Uint8Array(e.byteLength);
                return t.set(new Uint8Array(e)), t.buffer;
              }
              function g() {
                return this.bodyUsed = !1, this._initBody = function(e) {
                  this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : r.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : r.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : r.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : r.arrayBuffer && r.blob && i(e) ? (this._bodyArrayBuffer = y(e.buffer), 
                  this._bodyInit = new Blob([ this._bodyArrayBuffer ])) : r.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || s(e)) ? this._bodyArrayBuffer = y(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", 
                  this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
                }, r.blob && (this.blob = function() {
                  var e = u(this);
                  if (e) return e;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer) return Promise.resolve(new Blob([ this._bodyArrayBuffer ]));
                  if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([ this._bodyText ]));
                }, this.arrayBuffer = function() {
                  return this._bodyArrayBuffer ? u(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(p);
                }), this.text = function() {
                  var e = u(this);
                  if (e) return e;
                  if (this._bodyBlob) return f(this._bodyBlob);
                  if (this._bodyArrayBuffer) return Promise.resolve(d(this._bodyArrayBuffer));
                  if (this._bodyFormData) throw new Error("could not read FormData body as text");
                  return Promise.resolve(this._bodyText);
                }, r.formData && (this.formData = function() {
                  return this.text().then(w);
                }), this.json = function() {
                  return this.text().then(JSON.parse);
                }, this;
              }
              h.prototype.append = function(e, t) {
                e = o(e), t = a(t);
                var r = this.map[e];
                this.map[e] = r ? r + ", " + t : t;
              }, h.prototype.delete = function(e) {
                delete this.map[o(e)];
              }, h.prototype.get = function(e) {
                return e = o(e), this.has(e) ? this.map[e] : null;
              }, h.prototype.has = function(e) {
                return this.map.hasOwnProperty(o(e));
              }, h.prototype.set = function(e, t) {
                this.map[o(e)] = a(t);
              }, h.prototype.forEach = function(e, t) {
                for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
              }, h.prototype.keys = function() {
                var e = [];
                return this.forEach((function(t, r) {
                  e.push(r);
                })), c(e);
              }, h.prototype.values = function() {
                var e = [];
                return this.forEach((function(t) {
                  e.push(t);
                })), c(e);
              }, h.prototype.entries = function() {
                var e = [];
                return this.forEach((function(t, r) {
                  e.push([ r, t ]);
                })), c(e);
              }, r.iterable && (h.prototype[Symbol.iterator] = h.prototype.entries);
              var b = [ "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT" ];
              function v(e) {
                var t = e.toUpperCase();
                return b.indexOf(t) > -1 ? t : e;
              }
              function m(e, t) {
                var r = (t = t || {}).body;
                if (e instanceof m) {
                  if (e.bodyUsed) throw new TypeError("Already read");
                  this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new h(e.headers)), this.method = e.method, 
                  this.mode = e.mode, this.signal = e.signal, !r && null != e._bodyInit && (r = e._bodyInit, e.bodyUsed = !0);
                } else this.url = String(e);
                if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new h(t.headers)), 
                this.method = v(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, 
                this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(r);
              }
              function w(e) {
                var t = new FormData;
                return e.trim().split("&").forEach((function(e) {
                  if (e) {
                    var r = e.split("="), i = r.shift().replace(/\+/g, " "), n = r.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(i), decodeURIComponent(n));
                  }
                })), t;
              }
              function _(e) {
                var t = new h;
                return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(e) {
                  var r = e.split(":"), i = r.shift().trim();
                  if (i) {
                    var n = r.join(":").trim();
                    t.append(i, n);
                  }
                })), t;
              }
              function E(e, t) {
                t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, 
                this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new h(t.headers), this.url = t.url || "", this._initBody(e);
              }
              m.prototype.clone = function() {
                return new m(this, {
                  body: this._bodyInit
                });
              }, g.call(m.prototype), g.call(E.prototype), E.prototype.clone = function() {
                return new E(this._bodyInit, {
                  status: this.status,
                  statusText: this.statusText,
                  headers: new h(this.headers),
                  url: this.url
                });
              }, E.error = function() {
                var e = new E(null, {
                  status: 0,
                  statusText: ""
                });
                return e.type = "error", e;
              };
              var S = [ 301, 302, 303, 307, 308 ];
              E.redirect = function(e, t) {
                if (-1 === S.indexOf(t)) throw new RangeError("Invalid status code");
                return new E(null, {
                  status: t,
                  headers: {
                    location: e
                  }
                });
              }, t.DOMException = e.DOMException;
              try {
                new t.DOMException;
              } catch {
                t.DOMException = function(e, t) {
                  this.message = e, this.name = t;
                  var r = Error(e);
                  this.stack = r.stack;
                }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException;
              }
              function O(e, i) {
                return new Promise((function(n, s) {
                  var o = new m(e, i);
                  if (o.signal && o.signal.aborted) return s(new t.DOMException("Aborted", "AbortError"));
                  var a = new XMLHttpRequest;
                  function c() {
                    a.abort();
                  }
                  a.onload = function() {
                    var e = {
                      status: a.status,
                      statusText: a.statusText,
                      headers: _(a.getAllResponseHeaders() || "")
                    };
                    e.url = "responseURL" in a ? a.responseURL : e.headers.get("X-Request-URL");
                    var t = "response" in a ? a.response : a.responseText;
                    n(new E(t, e));
                  }, a.onerror = function() {
                    s(new TypeError("Network request failed"));
                  }, a.ontimeout = function() {
                    s(new TypeError("Network request failed"));
                  }, a.onabort = function() {
                    s(new t.DOMException("Aborted", "AbortError"));
                  }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), 
                  "responseType" in a && r.blob && (a.responseType = "blob"), o.headers.forEach((function(e, t) {
                    a.setRequestHeader(t, e);
                  })), o.signal && (o.signal.addEventListener("abort", c), a.onreadystatechange = function() {
                    4 === a.readyState && o.signal.removeEventListener("abort", c);
                  }), a.send(typeof o._bodyInit > "u" ? null : o._bodyInit);
                }));
              }
              O.polyfill = !0, e.fetch || (e.fetch = O, e.Headers = h, e.Request = m, e.Response = E), t.Headers = h, t.Request = m, t.Response = E, 
              t.fetch = O, Object.defineProperty(t, "__esModule", {
                value: !0
              });
            }({});
          })(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
          var s = n;
          (r = s.fetch).default = s.fetch, r.fetch = s.fetch, r.Headers = s.Headers, r.Request = s.Request, r.Response = s.Response, 
          e.exports = r;
        }(ny, ny.exports);
        var sy = i(ny.exports);
        const oy = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST"
        }, ay = 10;
        class cy {
          constructor(e) {
            if (this.url = e, this.events = new R.exports.EventEmitter, this.isAvailable = !1, this.registering = !1, !el(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
            this.url = e;
          }
          get connected() {
            return this.isAvailable;
          }
          get connecting() {
            return this.registering;
          }
          on(e, t) {
            this.events.on(e, t);
          }
          once(e, t) {
            this.events.once(e, t);
          }
          off(e, t) {
            this.events.off(e, t);
          }
          removeListener(e, t) {
            this.events.removeListener(e, t);
          }
          async open(e = this.url) {
            await this.register(e);
          }
          async close() {
            if (!this.isAvailable) throw new Error("Connection already closed");
            this.onClose();
          }
          async send(e, t) {
            this.isAvailable || await this.register();
            try {
              const t = _i(e), r = await (await sy(this.url, Object.assign(Object.assign({}, oy), {
                body: t
              }))).json();
              this.onPayload({
                data: r
              });
            } catch (r) {
              this.onError(e.id, r);
            }
          }
          async register(e = this.url) {
            if (!el(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
            if (this.registering) {
              const e = this.events.getMaxListeners();
              return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), 
              new Promise(((e, t) => {
                this.events.once("register_error", (e => {
                  this.resetMaxListeners(), t(e);
                })), this.events.once("open", (() => {
                  if (this.resetMaxListeners(), typeof this.isAvailable > "u") return t(new Error("HTTP connection is missing or invalid"));
                  e();
                }));
              }));
            }
            this.url = e, this.registering = !0;
            try {
              const t = _i({
                id: 1,
                jsonrpc: "2.0",
                method: "test",
                params: []
              });
              await sy(e, Object.assign(Object.assign({}, oy), {
                body: t
              })), this.onOpen();
            } catch (t) {
              const e = this.parseError(t);
              throw this.events.emit("register_error", e), this.onClose(), e;
            }
          }
          onOpen() {
            this.isAvailable = !0, this.registering = !1, this.events.emit("open");
          }
          onClose() {
            this.isAvailable = !1, this.registering = !1, this.events.emit("close");
          }
          onPayload(e) {
            if (typeof e.data > "u") return;
            const t = "string" == typeof e.data ? wi(e.data) : e.data;
            this.events.emit("payload", t);
          }
          onError(e, t) {
            const r = this.parseError(t), i = Bu(e, r.message || r.toString());
            this.events.emit("payload", i);
          }
          parseError(e, t = this.url) {
            return hu(e, t, "HTTP");
          }
          resetMaxListeners() {
            this.events.getMaxListeners() > ay && this.events.setMaxListeners(ay);
          }
        }
        const hy = "error", uy = "wss://relay.walletconnect.com", ly = "wc@2:universal_provider:", py = "https://rpc.walletconnect.com/v1", fy = {
          DEFAULT_CHAIN_CHANGED: "default_chain_changed"
        };
        function dy(e, t, r) {
          let i;
          const n = yy(e);
          return t.rpcMap && (i = t.rpcMap[n]), i || (i = `${py}?chainId=eip155:${n}&projectId=${r}`), i;
        }
        function yy(e) {
          return e.includes("eip155") ? Number(e.split(":")[1]) : Number(e);
        }
        function gy(e, t) {
          if (!t.includes(e)) throw new Error(`Chain '${e}' not approved. Please use one of the following: ${t.toString()}`);
        }
        function by(e) {
          return e.map((e => `${e.split(":")[0]}:${e.split(":")[1]}`));
        }
        const vy = (e, t) => {
          const r = i => {
            i.request !== t.request || i.topic !== t.topic || (e.events.removeListener("session_request_sent", r), my());
          };
          e.on("session_request_sent", r);
        };
        function my() {
          if (typeof window < "u") try {
            const e = window.localStorage.getItem("WALLETCONNECT_DEEPLINK_CHOICE");
            if (e) {
              const t = JSON.parse(e);
              window.open(t.href, "_self", "noreferrer noopener");
            }
          } catch (e) {
            console.error(e);
          }
        }
        class wy {
          constructor(e) {
            this.name = "eip155", this.namespace = e.namespace, this.client = e.client, this.events = e.events, this.httpProviders = this.createHttpProviders(), 
            this.chainId = parseInt(this.getDefaultChain());
          }
          async request(e) {
            var t;
            switch (e.request.method) {
             case "eth_requestAccounts":
             case "eth_accounts":
              return this.getAccounts();

             case "wallet_switchEthereumChain":
              return this.handleSwitchChain(e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0"), null;

             case "eth_chainId":
              return parseInt(this.getDefaultChain());
            }
            return this.namespace.methods.includes(e.request.method) ? (vy(this.client, e), await this.client.request(e)) : this.getHttpProvider().request(e.request);
          }
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          setDefaultChain(e, t) {
            const r = yy(e);
            if (!this.httpProviders[r]) {
              const e = t || dy(`${this.name}:${r}`, this.namespace, this.client.core.projectId);
              if (!e) throw new Error(`No RPC url provided for chainId: ${r}`);
              this.setHttpProvider(r, e);
            }
            this.chainId = r, this.events.emit(fy.DEFAULT_CHAIN_CHANGED, `${this.name}:${r}`);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId.toString();
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            const e = this.namespace.chains[0];
            if (!e) throw new Error("ChainId not found");
            return e.split(":")[1];
          }
          createHttpProvider(e, t) {
            const r = t || dy(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
            return typeof r > "u" ? void 0 : new cl(new cy(r));
          }
          setHttpProvider(e, t) {
            const r = this.createHttpProvider(e, t);
            r && (this.httpProviders[e] = r);
          }
          createHttpProviders() {
            const e = {};
            return this.namespace.chains.forEach((t => {
              const r = yy(t);
              e[r] = this.createHttpProvider(r);
            })), e;
          }
          getAccounts() {
            const e = this.namespace.accounts;
            return e && e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])) || [];
          }
          getHttpProvider() {
            const e = this.chainId, t = this.httpProviders[e];
            if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
            return t;
          }
          handleSwitchChain(e) {
            const t = parseInt(e, 16);
            gy(`${this.name}:${t}`, this.namespace.chains), this.setDefaultChain(`${t}`);
          }
        }
        class _y {
          constructor(e) {
            this.name = "solana", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), 
            this.httpProviders = this.createHttpProviders();
          }
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method) ? (vy(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            if (!this.httpProviders[e]) {
              const r = t || dy(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
              if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
              this.setHttpProvider(e, r);
            }
            this.chainId = e, this.events.emit(fy.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            const e = this.namespace.chains[0];
            if (!e) throw new Error("ChainId not found");
            return e.split(":")[1];
          }
          getAccounts() {
            const e = this.namespace.accounts;
            return e && e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])) || [];
          }
          createHttpProviders() {
            const e = {};
            return this.namespace.chains.forEach((t => {
              e[t] = this.createHttpProvider(t);
            })), e;
          }
          getHttpProvider() {
            const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
            if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
            return t;
          }
          setHttpProvider(e, t) {
            const r = this.createHttpProvider(e, t);
            r && (this.httpProviders[e] = r);
          }
          createHttpProvider(e, t) {
            const r = t || dy(e, this.namespace, this.client.core.projectId);
            return typeof r > "u" ? void 0 : new cl(new cy(r));
          }
        }
        class Ey {
          constructor(e) {
            this.name = "cosmos", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), 
            this.httpProviders = this.createHttpProviders();
          }
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            const e = this.namespace.chains[0];
            if (!e) throw new Error("ChainId not found");
            return e.split(":")[1];
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method) ? (vy(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            if (this.chainId = e, !this.httpProviders[e]) {
              const r = t || dy(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
              if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
              this.setHttpProvider(e, r);
            }
            this.events.emit(fy.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
          }
          getAccounts() {
            const e = this.namespace.accounts;
            return e && e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])) || [];
          }
          createHttpProviders() {
            const e = {};
            return this.namespace.chains.forEach((t => {
              e[t] = this.createHttpProvider(t);
            })), e;
          }
          getHttpProvider() {
            const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
            if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
            return t;
          }
          setHttpProvider(e, t) {
            const r = this.createHttpProvider(e, t);
            r && (this.httpProviders[e] = r);
          }
          createHttpProvider(e, t) {
            const r = t || dy(e, this.namespace, this.client.core.projectId);
            return typeof r > "u" ? void 0 : new cl(new cy(r));
          }
        }
        class Sy {
          constructor(e) {
            this.name = "cip34", this.namespace = e.namespace, this.events = e.events, this.client = e.client, this.chainId = this.getDefaultChain(), 
            this.httpProviders = this.createHttpProviders();
          }
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            const e = this.namespace.chains[0];
            if (!e) throw new Error("ChainId not found");
            return e.split(":")[1];
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method) ? (vy(this.client, e), this.client.request(e)) : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            if (this.chainId = e, !this.httpProviders[e]) {
              const r = t || dy(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
              if (!r) throw new Error(`No RPC url provided for chainId: ${e}`);
              this.setHttpProvider(e, r);
            }
            this.events.emit(fy.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
          }
          getAccounts() {
            const e = this.namespace.accounts;
            return e && e.filter((e => e.split(":")[1] === this.chainId.toString())).map((e => e.split(":")[2])) || [];
          }
          createHttpProviders() {
            const e = {};
            return this.namespace.chains.forEach((t => {
              e[t] = this.createHttpProvider(t);
            })), e;
          }
          getHttpProvider() {
            const e = `${this.name}:${this.chainId}`, t = this.httpProviders[e];
            if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
            return t;
          }
          setHttpProvider(e, t) {
            const r = this.createHttpProvider(e, t);
            r && (this.httpProviders[e] = r);
          }
          createHttpProvider(e, t) {
            const r = t || dy(e, this.namespace);
            return typeof r > "u" ? void 0 : new cl(new cy(r));
          }
        }
        var Oy = Object.defineProperty, Iy = Object.defineProperties, Py = Object.getOwnPropertyDescriptors, xy = Object.getOwnPropertySymbols, Ny = Object.prototype.hasOwnProperty, Ty = Object.prototype.propertyIsEnumerable, Ay = (e, t, r) => t in e ? Oy(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r, Ry = (e, t) => {
          for (var r in t || (t = {})) Ny.call(t, r) && Ay(e, r, t[r]);
          if (xy) for (var r of xy(t)) Ty.call(t, r) && Ay(e, r, t[r]);
          return e;
        }, jy = (e, t) => Iy(e, Py(t));
        class Ly {
          constructor(e) {
            this.events = new R.exports, this.rpcProviders = {}, this.providerOpts = e, this.logger = typeof e?.logger < "u" && "string" != typeof e?.logger ? e.logger : c(jr.getDefaultLoggerOptions({
              level: e?.logger || hy
            }));
          }
          static async init(e) {
            const t = new Ly(e);
            return await t.initialize(), t;
          }
          async request(e, t) {
            const [r, i] = this.validateChain(t);
            if (!this.session) throw new Error("Please call connect() before request()");
            return await this.getProvider(r).request({
              request: Ry({}, e),
              chainId: `${r}:${i}`,
              topic: this.session.topic
            });
          }
          sendAsync(e, t, r) {
            this.request(e, r).then((e => t(null, e))).catch((e => t(e, void 0)));
          }
          async enable() {
            if (!this.client) throw new Error("Sign Client not initialized");
            return this.session || await this.connect({
              namespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties
            }), await this.requestAccounts();
          }
          async disconnect() {
            var e;
            if (!this.session) throw new Error("Please call connect() before enable()");
            await this.client.disconnect({
              topic: null == (e = this.session) ? void 0 : e.topic,
              reason: wh("USER_DISCONNECTED")
            }), await this.cleanup();
          }
          async connect(e) {
            if (!this.client) throw new Error("Sign Client not initialized");
            if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic);
          }
          on(e, t) {
            this.events.on(e, t);
          }
          once(e, t) {
            this.events.once(e, t);
          }
          removeListener(e, t) {
            this.events.removeListener(e, t);
          }
          off(e, t) {
            this.events.off(e, t);
          }
          get isWalletConnect() {
            return !0;
          }
          async pair(e) {
            const {uri: t, approval: r} = await this.client.connect({
              pairingTopic: e,
              requiredNamespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties
            });
            return t && (this.uri = t, this.events.emit("display_uri", t)), this.session = await r(), this.createProviders(), this.onConnect(), 
            this.session;
          }
          setDefaultChain(e, t) {
            try {
              const [r, i] = this.validateChain(e);
              this.getProvider(r).setDefaultChain(i, t);
            } catch (r) {
              if (!/Please call connect/.test(r.message)) throw r;
            }
          }
          async cleanupPendingPairings(e = {}) {
            this.logger.info("Cleaning up inactive pairings...");
            const t = this.client.pairing.getAll();
            if (_h(t)) {
              for (const r of t) e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
              this.logger.info(`Inactive pairings cleared: ${t.length}`);
            }
          }
          async checkStorage() {
            if (this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, 
            this.client.session.length) {
              const e = this.client.session.keys.length - 1;
              this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders();
            }
          }
          async initialize() {
            this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
          }
          async createClient() {
            this.client = this.providerOpts.client || await iy.init({
              logger: this.providerOpts.logger || hy,
              relayUrl: this.providerOpts.relayUrl || uy,
              projectId: this.providerOpts.projectId,
              metadata: this.providerOpts.metadata,
              storageOptions: this.providerOpts.storageOptions,
              name: this.providerOpts.name
            }), this.logger.trace("SignClient Initialized");
          }
          createProviders() {
            if (!this.client) throw new Error("Sign Client not initialized");
            Object.keys(this.namespaces).forEach((e => {
              var t, r, i;
              const n = (null == (t = this.session) ? void 0 : t.namespaces[e].accounts) || [], s = by(n), o = jy(Ry({}, Object.assign(this.namespaces[e], null != (i = null == (r = this.optionalNamespaces) ? void 0 : r[e]) ? i : {})), {
                accounts: n,
                chains: s
              });
              switch (e) {
               case "eip155":
                this.rpcProviders[e] = new wy({
                  client: this.client,
                  namespace: o,
                  events: this.events
                });
                break;

               case "solana":
                this.rpcProviders[e] = new _y({
                  client: this.client,
                  namespace: o,
                  events: this.events
                });
                break;

               case "cosmos":
                this.rpcProviders[e] = new Ey({
                  client: this.client,
                  namespace: o,
                  events: this.events
                });
                break;

               case "polkadot":
                break;

               case "cip34":
                this.rpcProviders[e] = new Sy({
                  client: this.client,
                  namespace: o,
                  events: this.events
                });
              }
            }));
          }
          registerEventListeners() {
            if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
            this.client.on("session_ping", (e => {
              this.events.emit("session_ping", e);
            })), this.client.on("session_event", (e => {
              const {params: t} = e, {event: r} = t;
              "accountsChanged" === r.name ? this.events.emit("accountsChanged", r.data) : "chainChanged" === r.name ? this.onChainChanged(t.chainId) : this.events.emit(r.name, r.data), 
              this.events.emit("session_event", e);
            })), this.client.on("session_update", (({topic: e, params: t}) => {
              var r;
              const {namespaces: i} = t, n = null == (r = this.client) ? void 0 : r.session.get(e);
              this.session = jy(Ry({}, n), {
                namespaces: i
              }), this.onSessionUpdate(), this.events.emit("session_update", {
                topic: e,
                params: t
              });
            })), this.client.on("session_delete", (async e => {
              await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", jy(Ry({}, wh("USER_DISCONNECTED")), {
                data: e.topic
              }));
            })), this.on(fy.DEFAULT_CHAIN_CHANGED, (e => {
              this.onChainChanged(e, !0);
            }));
          }
          getProvider(e) {
            if (!this.rpcProviders[e]) throw new Error(`Provider not found: ${e}`);
            return this.rpcProviders[e];
          }
          onSessionUpdate() {
            Object.keys(this.rpcProviders).forEach((e => {
              var t;
              this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e]);
            }));
          }
          setNamespaces(e) {
            const {namespaces: t, optionalNamespaces: r, sessionProperties: i} = e;
            if (!t || !Object.keys(t).length) throw new Error("Namespaces must be not empty");
            this.namespaces = t, this.optionalNamespaces = r, this.sessionProperties = i, this.persist("namespaces", t), this.persist("optionalNamespaces", r);
          }
          validateChain(e) {
            const [t, r] = e?.split(":") || [ "", "" ];
            if (t && !Object.keys(this.namespaces).includes(t)) throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
            if (t && r) return [ t, r ];
            const i = Object.keys(this.namespaces)[0];
            return [ i, this.rpcProviders[i].getDefaultChain() ];
          }
          async requestAccounts() {
            const [e] = this.validateChain();
            return await this.getProvider(e).requestAccounts();
          }
          onChainChanged(e, t = !1) {
            const [r, i] = this.validateChain(e);
            t || this.getProvider(r).setDefaultChain(i), this.namespaces[r].defaultChain = i, this.persist("namespaces", this.namespaces), 
            this.events.emit("chainChanged", i);
          }
          onConnect() {
            this.events.emit("connect", {
              session: this.session
            });
          }
          async cleanup() {
            this.session = void 0, await this.cleanupPendingPairings({
              deletePairings: !0
            });
          }
          persist(e, t) {
            this.client.core.storage.setItem(`${ly}/${e}`, t);
          }
          async getFromStore(e) {
            return await this.client.core.storage.getItem(`${ly}/${e}`);
          }
        }
        const Cy = Ly;
        e.UniversalProvider = Cy, e.default = Ly, Object.defineProperty(e, "__esModule", {
          value: !0
        });
      }(t);
    }();
  },
  7026: e => {
    "use strict";
    e.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
    };
  }
} ]);