/*! For license information please see 652.376977e9.js.LICENSE.txt */
(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 652 ], {
  3652: (e, t, n) => {
    "use strict";
    n.r(t), n.d(t, {
      getFlowProvider: () => Hl
    });
    var r = {};
    n.r(r), n.d(r, {
      Address: () => Mc,
      Array: () => Hc,
      Bool: () => Bc,
      Character: () => Uc,
      Dictionary: () => Kc,
      Enum: () => Xc,
      Event: () => Wc,
      Fix64: () => Gc,
      Identity: () => mc,
      Int: () => yc,
      Int128: () => Tc,
      Int16: () => kc,
      Int256: () => Cc,
      Int32: () => Ic,
      Int64: () => Rc,
      Int8: () => wc,
      Optional: () => Yc,
      Path: () => $c,
      Reference: () => qc,
      Resource: () => Vc,
      String: () => Dc,
      Struct: () => Jc,
      UFix64: () => jc,
      UInt: () => gc,
      UInt128: () => Ac,
      UInt16: () => xc,
      UInt256: () => _c,
      UInt32: () => Ec,
      UInt64: () => Sc,
      UInt8: () => bc,
      Void: () => zc,
      Word16: () => Pc,
      Word32: () => Nc,
      Word64: () => Lc,
      Word8: () => Oc,
      _Array: () => Hc
    });
    var a = {};
    function o(e) {
      if (Array.isArray(e)) return e;
    }
    function u(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function c(e, t) {
      if (e) {
        if ("string" == typeof e) return u(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0;
      }
    }
    function i() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function s(e, t) {
      return o(e) || function(e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
          var r = [];
          var a = !0;
          var o = !1;
          var u, c;
          try {
            for (n = n.call(e); !(a = (u = n.next()).done) && (r.push(u.value), !t || r.length !== t); a = !0) ;
          } catch (i) {
            o = !0, c = i;
          } finally {
            try {
              a || null == n.return || n.return();
            } finally {
              if (o) throw c;
            }
          }
          return r;
        }
      }(e, t) || c(e, t) || i();
    }
    function f(e, t, n, r, a, o, u) {
      try {
        var c = e[o](u);
        var i = c.value;
      } catch (s) {
        return void n(s);
      }
      c.done ? t(i) : Promise.resolve(i).then(r, a);
    }
    function l(e) {
      return function() {
        var t = this, n = arguments;
        return new Promise((function(r, a) {
          var o = e.apply(t, n);
          function u(e) {
            f(o, r, a, u, c, "next", e);
          }
          function c(e) {
            f(o, r, a, u, c, "throw", e);
          }
          u(void 0);
        }));
      };
    }
    n.r(a), n.d(a, {
      AppUtils: () => qf,
      InteractionTemplateUtils: () => Gl,
      TestUtils: () => gu,
      VERSION: () => ri,
      WalletUtils: () => jf,
      account: () => Bo,
      arg: () => Qo,
      args: () => Zo,
      atBlockHeight: () => Do,
      atBlockId: () => Uo,
      authenticate: () => Dl,
      authorization: () => Yo,
      authorizations: () => zo,
      authz: () => Yl,
      block: () => Mo,
      build: () => ea,
      cadence: () => Nn,
      cdc: () => Nn,
      config: () => ue,
      createSignableVoucher: () => fo,
      currentUser: () => Af,
      decode: () => Lo,
      discovery: () => Js,
      display: () => Fe,
      events: () => fl,
      getAccount: () => ra,
      getBlock: () => na,
      getBlockHeader: () => Wo,
      getCollection: () => Vo,
      getEvents: () => qo,
      getEventsAtBlockHeightRange: () => Ho,
      getEventsAtBlockIds: () => Ko,
      getTransaction: () => Xo,
      getTransactionStatus: () => Jo,
      invariant: () => Po,
      isBad: () => qr,
      isOk: () => Yr,
      limit: () => $o,
      logIn: () => zl,
      mutate: () => Tf,
      param: () => bu,
      params: () => yu,
      payer: () => nu,
      ping: () => au,
      pipe: () => Vr,
      pluginRegistry: () => Cs,
      proposer: () => eu,
      query: () => Ti,
      reauthenticate: () => Bl,
      ref: () => ou,
      sansPrefix: () => Ne,
      script: () => uu,
      send: () => No,
      serialize: () => Kf,
      signUp: () => Ml,
      t: () => ql,
      transaction: () => iu,
      tx: () => rl,
      unauthenticate: () => Ul,
      validator: () => Go,
      verifyUserSignatures: () => Hf,
      voucherIntercept: () => su,
      voucherToTxId: () => lo,
      why: () => Hr,
      withPrefix: () => Le
    });
    var p = n(4687);
    var d = n.n(p);
    function v(e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }
    function h(e) {
      return o(e) || v(e) || c(e) || i();
    }
    function m(e) {
      return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, m(e);
    }
    function g(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function y(e, t) {
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
        t % 2 ? y(Object(n), !0).forEach((function(t) {
          g(e, t, n[t]);
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        }));
      }
      return e;
    }
    function w(e, t) {
      var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = c(e)) || t && e && "number" == typeof e.length) {
          n && (e = n);
          var r = 0;
          var a = function() {};
          return {
            s: a,
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
            f: a
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var o, u = !0, i = !1;
      return {
        s: function() {
          n = n.call(e);
        },
        n: function() {
          var e = n.next();
          return u = e.done, e;
        },
        e: function(e) {
          i = !0, o = e;
        },
        f: function() {
          try {
            u || null == n.return || n.return();
          } finally {
            if (i) throw o;
          }
        }
      };
    }
    var x = n(4375);
    var k = n.n(x);
    var E = function() {
      var e = [];
      var t;
      return {
        deliver: function(n) {
          return l(d().mark((function r() {
            return d().wrap((function(r) {
              for (;;) switch (r.prev = r.next) {
               case 0:
                e.push(n), t && (t(e.shift()), t = void 0);

               case 2:
               case "end":
                return r.stop();
              }
            }), r);
          })))();
        },
        receive: function() {
          return new Promise((function(n) {
            var r = e.shift();
            if (r) return n(r);
            t = n;
          }));
        }
      };
    };
    var I = "INIT";
    var S = "SUBSCRIBE";
    var R = "UNSUBSCRIBE";
    var A = "UPDATED";
    var T = "SNAPSHOT";
    var _ = "EXIT";
    var C = "object" === ("undefined" == typeof self ? "undefined" : m(self)) && self.self === self && self || "object" === (void 0 === n.g ? "undefined" : m(n.g)) && n.g.global === n.g && n.g || "object" === ("undefined" == typeof window ? "undefined" : m(window)) && window.window === window && window;
    C.FCL_REGISTRY = null == C.FCL_REGISTRY ? {} : C.FCL_REGISTRY;
    var O = 0;
    var P = function(e, t, n) {
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return new Promise((function(a, o) {
        var u = r.expectReply || !1;
        var c = null != r.timeout ? r.timeout : 5e3;
        u && c && setTimeout((function() {
          return o(new Error("Timeout: ".concat(c, "ms passed without a response.")));
        }), c);
        var i = {
          to: e,
          from: r.from,
          tag: t,
          data: n,
          timeout: c,
          reply: a,
          reject: o
        };
        try {
          C.FCL_REGISTRY[e] && C.FCL_REGISTRY[e].mailbox.deliver(i), u || a(!0);
        } catch (s) {
          console.error("FCL.Actor -- Could Not Deliver Message", i, C.FCL_REGISTRY[e], s);
        }
      }));
    };
    var N = function(e) {
      delete C.FCL_REGISTRY[e];
    };
    var L = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return function() {
        var t = l(d().mark((function t(n) {
          var r;
          return d().wrap((function(t) {
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
              if (r = t.sent, t.prev = 7, r.tag !== _) {
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
    };
    var F = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (null == t && (t = ++O), null != C.FCL_REGISTRY[t]) return t;
      C.FCL_REGISTRY[t] = {
        addr: t,
        mailbox: E(),
        subs: new Set,
        kvs: {},
        error: null
      };
      var n = {
        self: function() {
          return t;
        },
        receive: function() {
          return C.FCL_REGISTRY[t].mailbox.receive();
        },
        send: function(e, n, r) {
          var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return a.from = t, P(e, n, r, a);
        },
        sendSelf: function(e, n, r) {
          C.FCL_REGISTRY[t] && P(t, e, n, r);
        },
        broadcast: function(e, n) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          r.from = t;
          var a, o = w(C.FCL_REGISTRY[t].subs);
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var u = a.value;
              P(u, e, n, r);
            }
          } catch (c) {
            o.e(c);
          } finally {
            o.f();
          }
        },
        subscribe: function(e) {
          return null != e && C.FCL_REGISTRY[t].subs.add(e);
        },
        unsubscribe: function(e) {
          return null != e && C.FCL_REGISTRY[t].subs.delete(e);
        },
        subscriberCount: function() {
          return C.FCL_REGISTRY[t].subs.size;
        },
        hasSubs: function() {
          return !!C.FCL_REGISTRY[t].subs.size;
        },
        put: function(e, n) {
          null != e && (C.FCL_REGISTRY[t].kvs[e] = n);
        },
        get: function(e, n) {
          var r = C.FCL_REGISTRY[t].kvs[e];
          return null == r ? n : r;
        },
        delete: function(e) {
          delete C.FCL_REGISTRY[t].kvs[e];
        },
        update: function(e, n) {
          null != e && (C.FCL_REGISTRY[t].kvs[e] = n(C.FCL_REGISTRY[t].kvs[e]));
        },
        keys: function() {
          return Object.keys(C.FCL_REGISTRY[t].kvs);
        },
        all: function() {
          return C.FCL_REGISTRY[t].kvs;
        },
        where: function(e) {
          return Object.keys(C.FCL_REGISTRY[t].kvs).reduce((function(n, r) {
            return e.test(r) ? b(b({}, n), {}, g({}, r, C.FCL_REGISTRY[t].kvs[r])) : n;
          }), {});
        },
        merge: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          Object.keys(e).forEach((function(n) {
            return C.FCL_REGISTRY[t].kvs[n] = e[n];
          }));
        },
        fatalError: function(e) {
          C.FCL_REGISTRY[t].error = e;
          var n, r = w(C.FCL_REGISTRY[t].subs);
          try {
            for (r.s(); !(n = r.n()).done; ) {
              var a = n.value;
              P(a, A);
            }
          } catch (o) {
            r.e(o);
          } finally {
            r.f();
          }
        }
      };
      return "object" === m(e) && (e = L(e)), k()(l(d().mark((function r() {
        return d().wrap((function(r) {
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
    function j(e, t, n) {
      t(e);
      var r = "@EXIT";
      var a = F(function() {
        var t = l(d().mark((function t(a) {
          var o, u;
          return d().wrap((function(t) {
            for (;;) switch (t.prev = t.next) {
             case 0:
              a.send(e, S);

             case 1:
              return t.next = 4, a.receive();

             case 4:
              if (o = t.sent, u = C.FCL_REGISTRY[e].error, o.tag !== r) {
                t.next = 9;
                break;
              }
              return a.send(e, R), t.abrupt("return");

             case 9:
              if (!u) {
                t.next = 13;
                break;
              }
              return n(null, u), a.send(e, R), t.abrupt("return");

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
    function G(e, t) {
      return t(e), P(e, T, null, {
        expectReply: !0,
        timeout: 0
      });
    }
    var D;
    var U = "config";
    var B = "PUT_CONFIG";
    var M = "GET_CONFIG";
    var z = "GET_ALL_CONFIG";
    var Y = "UPDATE_CONFIG";
    var q = "DELETE_CONFIG";
    var H = "CLEAR_CONFIG";
    var K = "WHERE_CONFIG";
    var W = "CONFIG/UPDATED";
    var V = function(e) {
      return e;
    };
    var J = (g(D = {}, B, (function(e, t, n) {
      var r = n.key, a = n.value;
      if (null == r) throw new Error("Missing 'key' for config/put.");
      e.put(r, a), e.broadcast(W, b({}, e.all()));
    })), g(D, M, (function(e, t, n) {
      var r = n.key, a = n.fallback;
      if (null == r) throw new Error("Missing 'key' for config/get");
      t.reply(e.get(r, a));
    })), g(D, z, (function(e, t) {
      t.reply(b({}, e.all()));
    })), g(D, Y, (function(e, t, n) {
      var r = n.key, a = n.fn;
      if (null == r) throw new Error("Missing 'key' for config/update");
      e.update(r, a || V), e.broadcast(W, b({}, e.all()));
    })), g(D, q, (function(e, t, n) {
      var r = n.key;
      if (null == r) throw new Error("Missing 'key' for config/delete");
      e.delete(r), e.broadcast(W, b({}, e.all()));
    })), g(D, H, (function(e, t) {
      for (var n = 0, r = Object.keys(e.all()); n < r.length; n++) {
        var a = r[n];
        e.delete(a);
      }
      e.broadcast(W, b({}, e.all()));
    })), g(D, K, (function(e, t, n) {
      var r = n.pattern;
      if (null == r) throw new Error("Missing 'pattern' for config/where");
      t.reply(e.where(r));
    })), g(D, S, (function(e, t) {
      e.subscribe(t.from), e.send(t.from, W, b({}, e.all()));
    })), g(D, R, (function(e, t) {
      e.unsubscribe(t.from);
    })), D);
    function X(e, t) {
      return P(U, B, {
        key: e,
        value: t
      }), ue();
    }
    function $(e, t) {
      return P(U, M, {
        key: e,
        fallback: t
      }, {
        expectReply: !0,
        timeout: 10
      });
    }
    function Z() {
      return Q.apply(this, arguments);
    }
    function Q() {
      return Q = l(d().mark((function e() {
        var t, n, r, a, o, u, c = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (t = c.length > 0 && void 0 !== c[0] ? c[0] : [], n = c.length > 1 ? c[1] : void 0, t.length) {
              e.next = 4;
              break;
            }
            return e.abrupt("return", n);

           case 4:
            return r = h(t), a = r[0], o = r.slice(1), e.next = 7, $(a);

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
      }))), Q.apply(this, arguments);
    }
    function ee() {
      return P(U, z, null, {
        expectReply: !0,
        timeout: 10
      });
    }
    function te(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V;
      return P(U, Y, {
        key: e,
        fn: t
      }), ue();
    }
    function ne(e) {
      return P(U, q, {
        key: e
      }), ue();
    }
    function re(e) {
      return P(U, K, {
        pattern: e
      }, {
        expectReply: !0,
        timeout: 10
      });
    }
    function ae(e) {
      return j(U, (function() {
        return F(J, U);
      }), e);
    }
    function oe(e) {
      return function() {
        return P(U, H);
      }().then(ue(e));
    }
    function ue(e) {
      return null != e && "object" === m(e) && Object.keys(e).map((function(t) {
        return X(t, e[t]);
      })), {
        put: X,
        get: $,
        all: ee,
        first: Z,
        update: te,
        delete: ne,
        where: re,
        subscribe: ae,
        overload: ie
      };
    }
    F(J, U), ue.put = X, ue.get = $, ue.all = ee, ue.first = Z, ue.update = te, ue.delete = ne, ue.where = re, ue.subscribe = ae, 
    ue.overload = ie;
    var ce = function(e) {
      return e;
    };
    function ie() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ce;
      return new Promise(function() {
        var n = l(d().mark((function n(r, a) {
          var o, u;
          return d().wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
             case 0:
              return n.next = 2, ee();

             case 2:
              return o = n.sent, n.prev = 3, ue(e), n.t0 = t, n.next = 8, ee();

             case 8:
              return n.t1 = n.sent, n.next = 11, (0, n.t0)(n.t1);

             case 11:
              return u = n.sent, n.next = 14, oe(o);

             case 14:
              r(u), n.next = 22;
              break;

             case 17:
              return n.prev = 17, n.t2 = n.catch(3), n.next = 21, oe(o);

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
    function se(e, t) {
      if (!e) {
        var n;
        var r = new Error("INVARIANT ".concat(t));
        r.stack = r.stack.split("\n").filter((function(e) {
          return !/at invariant/.test(e);
        })).join("\n");
        for (var a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), u = 2; u < a; u++) o[u - 2] = arguments[u];
        throw (n = console).error.apply(n, [ "\n\n---\n\n", r, "\n\n" ].concat(o, [ "\n\n---\n\n" ])), r;
      }
    }
    function fe(e) {
      return function(e) {
        if (Array.isArray(e)) return u(e);
      }(e) || v(e) || c(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    var le = Object.freeze({
      debug: 5,
      info: 4,
      log: 3,
      warn: 2,
      error: 1
    });
    var pe = function(e) {
      var t = e.title, n = e.message;
      return [ "\n    %c".concat(t, "\n    ============================\n\n    ").concat(n, "\n\n    ============================\n    ").replace(/\n[^\S\r\n]+/g, "\n").trim(), , "font-weight:bold;font-family:monospace;" ];
    };
    var de = function() {
      var e = l(d().mark((function e(t) {
        var n, r, a, o, u;
        var c, i, s, f, l, p, v;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return c = t.title, i = t.message, s = t.level, f = t.always, l = void 0 !== f && f, e.next = 3, ue.get("logger.level", le.warn);

           case 3:
            if (p = e.sent, l || !(p < s)) {
              e.next = 6;
              break;
            }
            return e.abrupt("return");

           case 6:
            v = pe({
              title: c,
              message: i
            }), e.t0 = s, e.next = e.t0 === le.debug ? 10 : e.t0 === le.info ? 12 : e.t0 === le.warn ? 14 : e.t0 === le.error ? 16 : 18;
            break;

           case 10:
            return (n = console).debug.apply(n, fe(v)), e.abrupt("break", 19);

           case 12:
            return (r = console).info.apply(r, fe(v)), e.abrupt("break", 19);

           case 14:
            return (a = console).warn.apply(a, fe(v)), e.abrupt("break", 19);

           case 16:
            return (o = console).error.apply(o, fe(v)), e.abrupt("break", 19);

           case 18:
            (u = console).log.apply(u, fe(v));

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
    de.deprecate = function(e) {
      var t = e.pkg, n = e.subject, r = e.transition, a = e.level, o = void 0 === a ? le.warn : a, u = e.message, c = void 0 === u ? "" : u, i = e.callback, s = void 0 === i ? null : i;
      var f = function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      };
      var p = function() {
        return de({
          title: "".concat(t ? t + " " : "", "Deprecation Notice"),
          message: "\n      ".concat(n ? "".concat(f(n), " is deprecated and will cease to work in future releases").concat(t ? " of " + t : "", ".") : "").concat(c ? "\n" + c : "").concat(r ? "\nYou can learn more (including a guide on common transition paths) here: ".concat(r) : "", "\n    ").trim(),
          level: o
        });
      };
      return "function" == typeof s ? l(d().mark((function e() {
        var t = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.next = 2, p();

           case 2:
            return e.next = 4, s.apply(void 0, t);

           case 4:
            return e.abrupt("return", e.sent);

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      }))) : p();
    };
    var ve = n(8764);
    function he(e) {
      if (Array.isArray(e)) {
        var t = [];
        for (var n = 0; n < e.length; n++) t.push(he(e[n]));
        var r = ve.Buffer.concat(t);
        return ve.Buffer.concat([ me(r.length, 192), r ]);
      }
      var a = be(e);
      return 1 === a.length && a[0] < 128 ? a : ve.Buffer.concat([ me(a.length, 128), a ]);
    }
    function me(e, t) {
      if (e < 56) return ve.Buffer.from([ e + t ]);
      var n = ye(e);
      var r = ye(t + 55 + n.length / 2);
      return ve.Buffer.from(r + n, "hex");
    }
    function ge(e) {
      return "0x" === e.slice(0, 2);
    }
    function ye(e) {
      if (e < 0) throw new Error("Invalid integer as argument, must be unsigned!");
      var t = e.toString(16);
      return t.length % 2 ? "0" + t : t;
    }
    function be(e) {
      if (!ve.Buffer.isBuffer(e)) {
        if ("string" == typeof e) return ge(e) ? ve.Buffer.from(function(e) {
          return e.length % 2 ? "0" + e : e;
        }(function(e) {
          return "string" != typeof e ? e : ge(e) ? e.slice(2) : e;
        }(e)), "hex") : ve.Buffer.from(e);
        if ("number" == typeof e) return e ? function(e) {
          var t = ye(e);
          return ve.Buffer.from(t, "hex");
        }(e) : ve.Buffer.from([]);
        if (null == e) return ve.Buffer.from([]);
        if (e instanceof Uint8Array) return ve.Buffer.from(e);
        throw new Error("invalid type");
      }
      return e;
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
    function ke(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
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
    function Re() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0;
      } catch (e) {
        return !1;
      }
    }
    function Ae(e, t) {
      if (t && ("object" === m(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e);
    }
    function Te(e) {
      var t = Re();
      return function() {
        var n, r = Se(e);
        if (t) {
          var a = Se(this).constructor;
          n = Reflect.construct(r, arguments, a);
        } else n = r.apply(this, arguments);
        return Ae(this, n);
      };
    }
    function _e(e, t, n) {
      return _e = Re() ? Reflect.construct.bind() : function(e, t, n) {
        var r = [ null ];
        r.push.apply(r, t);
        var a = new (Function.bind.apply(e, r));
        return n && Ee(a, n.prototype), a;
      }, _e.apply(null, arguments);
    }
    function Ce(e) {
      var t = "function" == typeof Map ? new Map : void 0;
      return Ce = function(e) {
        if (null === e || !function(e) {
          return -1 !== Function.toString.call(e).indexOf("[native code]");
        }(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, n);
        }
        function n() {
          return _e(e, arguments, Se(this).constructor);
        }
        return n.prototype = Object.create(e.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), Ee(n, e);
      }, Ce(e);
    }
    var Oe = n(3300);
    var Pe = n.n(Oe);
    function Ne(e) {
      return null == e ? null : e.replace(/^0x/, "").replace(/^Fx/, "");
    }
    function Le(e) {
      return null == e ? null : "0x" + Ne(e);
    }
    function Fe(e) {
      return Le(e);
    }
    var je = function(e) {
      Ie(n, e);
      var t = Te(n);
      function n(e) {
        var r;
        var a = e.error, o = e.hostname, u = e.path, c = e.method, i = e.requestBody, s = e.responseBody, f = e.responseStatusText, l = e.statusCode;
        ke(this, n);
        var p = "\n      HTTP Request Error: An error occurred when interacting with the Access API.\n      ".concat(a ? "error=".concat(a) : "", "\n      ").concat(o ? "hostname=".concat(o) : "", "\n      ").concat(u ? "path=".concat(u) : "", "\n      ").concat(c ? "method=".concat(c) : "", "\n      ").concat(i ? "requestBody=".concat(i) : "", "\n      ").concat(s ? "responseBody=".concat(s) : "", "\n      ").concat(f ? "responseStatusText=".concat(f) : "", "\n      ").concat(l ? "statusCode=".concat(l) : "", "\n    ");
        return (r = t.call(this, p)).name = "HTTP Request Error", r.statusCode = l, r.errorMessage = a, r;
      }
      return xe(n);
    }(Ce(Error));
    function Ge(e) {
      return De.apply(this, arguments);
    }
    function De() {
      return De = l(d().mark((function e(t) {
        var n, r, a, o, u, c, i, s, f, p, v, h, m;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return m = function() {
              return m = l(d().mark((function e() {
                var t, n, r = arguments;
                return d().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                   case 0:
                    return t = r.length > 0 && void 0 !== r[0] ? r[0] : 0, e.prev = 1, e.next = 4, v();

                   case 4:
                    return n = e.sent, e.abrupt("return", n);

                   case 8:
                    if (e.prev = 8, e.t0 = e.catch(1), ![ 408, 429, 500, 502, 503, 504 ].includes(e.t0.statusCode)) {
                      e.next = 17;
                      break;
                    }
                    return e.next = 14, new Promise((function(n, r) {
                      t < i ? (console.warn("Access node unavailable, retrying in ".concat(f, " ms...")), setTimeout((function() {
                        n(h(t + 1));
                      }), f)) : r(e.t0);
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
              }))), m.apply(this, arguments);
            }, h = function() {
              return m.apply(this, arguments);
            }, v = function() {
              return Pe()("".concat(n).concat(r), {
                method: a,
                body: p,
                headers: u
              }).then(function() {
                var e = l(d().mark((function e(t) {
                  var o, u;
                  return d().wrap((function(e) {
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
                      throw o = e.t0, u = Ue(o), new je({
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
                var e = l(d().mark((function e(t) {
                  return d().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                     case 0:
                      if (!(t instanceof je)) {
                        e.next = 2;
                        break;
                      }
                      throw t;

                     case 2:
                      return e.next = 4, de({
                        title: "Access Node Error",
                        message: "The provided access node ".concat(n, " does not appear to be a valid REST/HTTP access node.\nPlease verify that you are not unintentionally using a GRPC access node.\nSee more here: https://docs.onflow.org/fcl/reference/sdk-guidelines/#connect"),
                        level: le.error
                      });

                     case 4:
                      throw new je({
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
            }, n = t.hostname, r = t.path, a = t.method, o = t.body, u = t.headers, c = t.retryLimit, i = void 0 === c ? 5 : c, s = t.retryIntervalMs, 
            f = void 0 === s ? 1e3 : s, p = o ? JSON.stringify(o) : null, e.next = 7, h();

           case 7:
            return e.abrupt("return", e.sent);

           case 8:
           case "end":
            return e.stop();
          }
        }), e);
      }))), De.apply(this, arguments);
    }
    function Ue(e) {
      try {
        return JSON.parse(e);
      } catch (t) {
        return null;
      }
    }
    function Be(e, t, n) {
      return Me.apply(this, arguments);
    }
    function Me() {
      return Me = l(d().mark((function e(t, n, r) {
        var a, o;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return a = r.httpRequest || Ge, e.next = 3, a({
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
            return o = e.sent, e.abrupt("return", Ke(t, n, o));

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      }))), Me.apply(this, arguments);
    }
    function ze(e, t, n) {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return Ye = l(d().mark((function e(t, n, r) {
        var a, o;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return a = r.httpRequest || Ge, e.next = 3, a({
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
            return o = e.sent, e.abrupt("return", Ke(t, n, o));

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      }))), Ye.apply(this, arguments);
    }
    function qe(e, t, n) {
      return He.apply(this, arguments);
    }
    function He() {
      return He = l(d().mark((function e(t, n, r) {
        var a, o;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return a = r.httpRequest || Ge, e.next = 3, a({
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
            return o = e.sent, e.abrupt("return", Ke(t, n, o));

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      }))), He.apply(this, arguments);
    }
    function Ke(e, t, n) {
      var r = t.response();
      return r.tag = e.tag, r.encodedData = JSON.parse(t.Buffer.from(n, "base64").toString()), r;
    }
    function We(e) {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return Ve = l(d().mark((function e(t) {
        var n, r, a = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = a.length > 1 && void 0 !== a[1] ? a[1] : {}, se((r = a.length > 2 && void 0 !== a[2] ? a[2] : {}).node, "SDK Send Execute Script Error: opts.node must be defined."), 
            se(n.response, "SDK Send Execute Script Error: context.response must be defined."), se(n.Buffer, "SDK Send Execute Script Error: context.Buffer must be defined."), 
            e.next = 7, t;

           case 7:
            if (!(t = e.sent).block.id) {
              e.next = 14;
              break;
            }
            return e.next = 11, Be(t, n, r);

           case 11:
           case 17:
           case 22:
            return e.abrupt("return", e.sent);

           case 14:
            if (!t.block.height) {
              e.next = 20;
              break;
            }
            return e.next = 17, ze(t, n, r);

           case 20:
            return e.next = 22, qe(t, n, r);

           case 23:
           case "end":
            return e.stop();
          }
        }), e);
      }))), Ve.apply(this, arguments);
    }
    var Je = {
      SHA2_256: 1,
      SHA2_384: 2,
      SHA3_256: 3,
      SHA3_384: 4,
      KMAC128_BLS_BLS12_381: 5
    };
    var Xe = {
      ECDSA_P256: 1,
      ECDSA_secp256k1: 2,
      BLS_BLS12_381: 3
    };
    function $e(e, t, n) {
      return Ze.apply(this, arguments);
    }
    function Ze() {
      return (Ze = l(d().mark((function e(t, n, r) {
        var a, o;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return a = r.httpRequest || Ge, e.next = 3, a({
              hostname: r.node,
              path: "/v1/accounts/".concat(t.account.addr, "?block_height=").concat(t.block.height, "&expand=contracts,keys"),
              method: "GET",
              body: null
            });

           case 3:
            return o = e.sent, e.abrupt("return", tt(t, n, o));

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    function Qe(e, t, n) {
      return et.apply(this, arguments);
    }
    function et() {
      return (et = l(d().mark((function e(t, n, r) {
        var a, o;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return a = r.httpRequest || Ge, e.next = 3, a({
              hostname: r.node,
              path: "/v1/accounts/".concat(t.account.addr, "?block_height=sealed&expand=contracts,keys"),
              method: "GET",
              body: null
            });

           case 3:
            return o = e.sent, e.abrupt("return", tt(t, n, o));

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    function tt(e, t, n) {
      var r, a;
      var o = t.response();
      o.tag = e.tag;
      return o.account = {
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
            signAlgo: Xe[e.signing_algorithm],
            signAlgoString: e.signing_algorithm,
            hashAlgo: Je[e.hashing_algorithm],
            hashAlgoString: e.hashing_algorithm,
            sequenceNumber: Number(e.sequence_number),
            weight: Number(e.weight),
            revoked: e.revoked
          };
        }))) && void 0 !== r ? r : []
      }, o;
    }
    function nt(e) {
      return rt.apply(this, arguments);
    }
    function rt() {
      return rt = l(d().mark((function e(t) {
        var n, r, a = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = a.length > 1 && void 0 !== a[1] ? a[1] : {}, se((r = a.length > 2 && void 0 !== a[2] ? a[2] : {}).node, "SDK Send Get Account Error: opts.node must be defined."), 
            se(n.response, "SDK Send Get Account Error: context.response must be defined."), se(n.Buffer, "SDK Send Get Account Error: context.Buffer must be defined."), 
            e.next = 7, t;

           case 7:
            if (null === (t = e.sent).block.height) {
              e.next = 14;
              break;
            }
            return e.next = 11, $e(t, n, r);

           case 11:
           case 16:
            return e.abrupt("return", e.sent);

           case 14:
            return e.next = 16, Qe(t, n, r);

           case 17:
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
      return (ot = l(d().mark((function e(t, n, r) {
        var a, o;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return a = r.httpRequest || Ge, e.next = 3, a({
              hostname: r.node,
              path: "/v1/blocks/".concat(t.block.id),
              method: "GET",
              body: null
            });

           case 3:
            return o = e.sent, e.abrupt("return", ft(t, n, o));

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    function ut(e, t, n) {
      return ct.apply(this, arguments);
    }
    function ct() {
      return (ct = l(d().mark((function e(t, n, r) {
        var a, o;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return a = r.httpRequest || Ge, e.next = 3, a({
              hostname: r.node,
              path: "/v1/blocks?height=".concat(t.block.height),
              method: "GET",
              body: null
            });

           case 3:
            return o = e.sent, e.abrupt("return", ft(t, n, o));

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    function it(e, t, n) {
      return st.apply(this, arguments);
    }
    function st() {
      return (st = l(d().mark((function e(t, n, r) {
        var a;
        var o, u, c;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return o = r.httpRequest || Ge, u = null !== (a = t.block) && void 0 !== a && a.isSealed ? "sealed" : "finalized", e.next = 4, 
            o({
              hostname: r.node,
              path: "/v1/blocks?height=".concat(u),
              method: "GET",
              body: null
            });

           case 4:
            return c = e.sent, e.abrupt("return", ft(t, n, c));

           case 6:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    function ft(e, t, n) {
      var r = n.length ? n[0] : null;
      var a = t.response();
      return a.tag = e.tag, a.blockHeader = {
        id: r.header.id,
        parentId: r.header.parent_id,
        height: Number(r.header.height),
        timestamp: r.header.timestamp
      }, a;
    }
    function lt(e) {
      return pt.apply(this, arguments);
    }
    function pt() {
      return pt = l(d().mark((function e(t) {
        var n, r, a, o, u = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = u.length > 1 && void 0 !== u[1] ? u[1] : {}, se((r = u.length > 2 && void 0 !== u[2] ? u[2] : {}).node, "SDK Send Get Block Header Error: opts.node must be defined."), 
            se(n.response, "SDK Send Get Block Header Error: context.response must be defined."), e.next = 6, t;

           case 6:
            if (t = e.sent, a = null !== t.block.id, o = null !== t.block.height, !a) {
              e.next = 15;
              break;
            }
            return e.next = 12, at(t, n, r);

           case 12:
           case 18:
           case 23:
            return e.abrupt("return", e.sent);

           case 15:
            if (!o) {
              e.next = 21;
              break;
            }
            return e.next = 18, ut(t, n, r);

           case 21:
            return e.next = 23, it(t, n, r);

           case 24:
           case "end":
            return e.stop();
          }
        }), e);
      }))), pt.apply(this, arguments);
    }
    function dt(e, t, n) {
      return vt.apply(this, arguments);
    }
    function vt() {
      return (vt = l(d().mark((function e(t, n, r) {
        var a, o;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return a = r.httpRequest || Ge, e.next = 3, a({
              hostname: r.node,
              path: "/v1/blocks/".concat(t.block.id, "?expand=payload"),
              method: "GET",
              body: null
            });

           case 3:
            return o = e.sent, e.abrupt("return", bt(t, n, o));

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    function ht(e, t, n) {
      return mt.apply(this, arguments);
    }
    function mt() {
      return (mt = l(d().mark((function e(t, n, r) {
        var a, o;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return a = r.httpRequest || Ge, e.next = 3, a({
              hostname: r.node,
              path: "/v1/blocks?height=".concat(t.block.height, "&expand=payload"),
              method: "GET",
              body: null
            });

           case 3:
            return o = e.sent, e.abrupt("return", bt(t, n, o));

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    function gt(e, t, n) {
      return yt.apply(this, arguments);
    }
    function yt() {
      return (yt = l(d().mark((function e(t, n, r) {
        var a;
        var o, u, c;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return o = r.httpRequest || Ge, u = null !== (a = t.block) && void 0 !== a && a.isSealed ? "sealed" : "final", e.next = 4, 
            o({
              hostname: r.node,
              path: "/v1/blocks?height=".concat(u, "&expand=payload"),
              method: "GET",
              body: null
            });

           case 4:
            return c = e.sent, e.abrupt("return", bt(t, n, c));

           case 6:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    function bt(e, t, n) {
      var r = n.length ? n[0] : null;
      var a = t.response();
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
    function wt(e) {
      return xt.apply(this, arguments);
    }
    function xt() {
      return xt = l(d().mark((function e(t) {
        var n, r, a, o, u = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = u.length > 1 && void 0 !== u[1] ? u[1] : {}, se((r = u.length > 2 && void 0 !== u[2] ? u[2] : {}).node, "SDK Send Get Block Error: opts.node must be defined."), 
            se(n.response, "SDK Send Get Block Error: context.response must be defined."), e.next = 6, t;

           case 6:
            if (t = e.sent, a = null !== t.block.id, o = null !== t.block.height, !a) {
              e.next = 15;
              break;
            }
            return e.next = 12, dt(t, n, r);

           case 12:
           case 18:
           case 23:
            return e.abrupt("return", e.sent);

           case 15:
            if (!o) {
              e.next = 21;
              break;
            }
            return e.next = 18, ht(t, n, r);

           case 21:
            return e.next = 23, gt(t, n, r);

           case 24:
           case "end":
            return e.stop();
          }
        }), e);
      }))), xt.apply(this, arguments);
    }
    function kt(e) {
      return Et.apply(this, arguments);
    }
    function Et() {
      return Et = l(d().mark((function e(t) {
        var n, r, a, o, u, c = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = c.length > 1 && void 0 !== c[1] ? c[1] : {}, se((r = c.length > 2 && void 0 !== c[2] ? c[2] : {}).node, "SDK Send Get Collection Error: opts.node must be defined."), 
            se(n.response, "SDK Send Get Collection Error: context.response must be defined."), a = r.httpRequest || Ge, e.next = 7, 
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
      }))), Et.apply(this, arguments);
    }
    function It(e, t, n) {
      return St.apply(this, arguments);
    }
    function St() {
      return (St = l(d().mark((function e(t, n, r) {
        var a, o;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return a = r.httpRequest || Ge, e.next = 3, a({
              hostname: r.node,
              path: "/v1/events?type=".concat(t.events.eventType, "&start_height=").concat(t.events.start, "&end_height=").concat(t.events.end),
              method: "GET",
              body: null
            });

           case 3:
            return o = e.sent, e.abrupt("return", Tt(t, n, o));

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    function Rt(e, t, n) {
      return At.apply(this, arguments);
    }
    function At() {
      return (At = l(d().mark((function e(t, n, r) {
        var a, o;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return a = r.httpRequest || Ge, e.next = 3, a({
              hostname: r.node,
              path: "/v1/events?type=".concat(t.events.eventType, "&block_ids=").concat(t.events.blockIds.join(",")),
              method: "GET",
              body: null
            });

           case 3:
            return o = e.sent, e.abrupt("return", Tt(t, n, o));

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    function Tt(e, t, n) {
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
    function _t(e) {
      return Ct.apply(this, arguments);
    }
    function Ct() {
      return Ct = l(d().mark((function e(t) {
        var n, r, a, o, u = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = u.length > 1 && void 0 !== u[1] ? u[1] : {}, se((r = u.length > 2 && void 0 !== u[2] ? u[2] : {}).node, "SDK Send Get Events Error: opts.node must be defined."), 
            se(n.response, "SDK Send Get Events Error: context.response must be defined."), se(n.Buffer, "SDK Send Get Events Error: context.Buffer must be defined."), 
            e.next = 7, t;

           case 7:
            if (t = e.sent, a = null !== t.events.start, o = Array.isArray(t.events.blockIds) && t.events.blockIds.length > 0, se(a || o, "SendGetEventsError: Unable to determine which get events request to send. Either a block height range, or block IDs must be specified."), 
            !a) {
              e.next = 17;
              break;
            }
            return e.next = 14, It(t, n, r);

           case 14:
           case 19:
            return e.abrupt("return", e.sent);

           case 17:
            return e.next = 19, Rt(t, n, r);

           case 20:
           case "end":
            return e.stop();
          }
        }), e);
      }))), Ct.apply(this, arguments);
    }
    function Ot(e) {
      return Pt.apply(this, arguments);
    }
    function Pt() {
      return Pt = l(d().mark((function e(t) {
        var n, r, a, o, u, c, i, s, f = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = f.length > 1 && void 0 !== f[1] ? f[1] : {}, se((r = f.length > 2 && void 0 !== f[2] ? f[2] : {}).node, "SDK Send Get Transaction Error: opts.node must be defined."), 
            se(n.response, "SDK Send Get Transaction Error: context.response must be defined."), se(n.Buffer, "SDK Send Get Transaction Error: context.Buffer must be defined."), 
            a = r.httpRequest || Ge, e.next = 8, t;

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
            }, c = function(e) {
              return {
                address: e.address,
                keyId: Number(e.key_index),
                signature: e.signature
              };
            }, i = function(e) {
              return JSON.parse(n.Buffer.from(e, "base64").toString());
            }, (s = n.response()).tag = t.tag, s.transaction = {
              script: n.Buffer.from(o.script, "base64").toString(),
              args: fe(o.arguments.map(i)),
              referenceBlockId: o.reference_block_id,
              gasLimit: Number(o.gas_limit),
              payer: o.payer,
              proposalKey: o.proposal_key ? u(o.proposal_key) : o.proposal_key,
              authorizers: o.authorizers,
              payloadSignatures: fe(o.payload_signatures.map(c)),
              envelopeSignatures: fe(o.envelope_signatures.map(c))
            }, e.abrupt("return", s);

           case 19:
           case "end":
            return e.stop();
          }
        }), e);
      }))), Pt.apply(this, arguments);
    }
    var Nt = {
      UNKNOWN: 0,
      PENDING: 1,
      FINALIZED: 2,
      EXECUTED: 3,
      SEALED: 4,
      EXPIRED: 5
    };
    function Lt(e) {
      return Ft.apply(this, arguments);
    }
    function Ft() {
      return Ft = l(d().mark((function e(t) {
        var n, r, a, o, u, c = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = c.length > 1 && void 0 !== c[1] ? c[1] : {}, se((r = c.length > 2 && void 0 !== c[2] ? c[2] : {}).node, "SDK Send Get Transaction Status Error: opts.node must be defined."), 
            se(n.response, "SDK Send Get Transaction Status Error: context.response must be defined."), se(n.Buffer, "SDK Send Get Transaction Status Error: context.Buffer must be defined."), 
            a = r.httpRequest || Ge, e.next = 8, t;

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
              status: Nt[o.status.toUpperCase()] || "",
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
      }))), Ft.apply(this, arguments);
    }
    function jt(e) {
      return Gt.apply(this, arguments);
    }
    function Gt() {
      return Gt = l(d().mark((function e(t) {
        var n, r, a, o, u = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = u.length > 1 && void 0 !== u[1] ? u[1] : {}, se((r = u.length > 2 && void 0 !== u[2] ? u[2] : {}).node, "SDK Send Ping Error: opts.node must be defined."), 
            se(n.response, "SDK Send Ping Error: context.response must be defined."), a = r.httpRequest || Ge, e.next = 7, a({
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
      }))), Gt.apply(this, arguments);
    }
    var Dt = function(e) {
      return "".concat(withPrefix(e.addr), "-").concat(e.keyId);
    };
    function Ut(e) {
      return Bt.apply(this, arguments);
    }
    function Bt() {
      return Bt = l(d().mark((function e(t) {
        var n, r, a, o, u, c, i, s, f, l, p, v, h, m, g, y, b = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = b.length > 1 && void 0 !== b[1] ? b[1] : {}, se((r = b.length > 2 && void 0 !== b[2] ? b[2] : {}).node, "SDK Send Transaction Error: opts.node must be defined."), 
            se(n.response, "SDK Send Transaction Error: context.response must be defined."), se(n.Buffer, "SDK Send Transaction Error: context.Buffer must be defined."), 
            a = r.httpRequest || Ge, e.next = 8, t;

           case 8:
            t = e.sent, o = [], u = 0, c = Object.values(t.accounts);

           case 11:
            if (!(u < c.length)) {
              e.next = 24;
              break;
            }
            i = c[u], e.prev = 13, i.role.payer || null == i.signature || o.push({
              address: Ne(i.addr),
              key_index: String(i.keyId),
              signature: n.Buffer.from(i.signature, "hex").toString("base64")
            }), e.next = 21;
            break;

           case 17:
            throw e.prev = 17, e.t0 = e.catch(13), console.error("SDK HTTP Send Error: Trouble applying payload signature", {
              acct: i,
              ix: t
            }), e.t0;

           case 21:
            u++, e.next = 11;
            break;

           case 24:
            s = {}, f = 0, l = Object.values(t.accounts);

           case 26:
            if (!(f < l.length)) {
              e.next = 39;
              break;
            }
            p = l[f], e.prev = 28, p.role.payer && null != p.signature && (v = p.tempId || Dt(p), s[v] = s[v] || {
              address: Ne(p.addr),
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
            return s = Object.values(s), h = Date.now(), e.next = 43, a({
              hostname: r.node,
              path: "/v1/transactions",
              method: "POST",
              body: {
                script: n.Buffer.from(t.message.cadence).toString("base64"),
                arguments: fe(t.message.arguments.map((function(e) {
                  return n.Buffer.from(JSON.stringify(t.arguments[e].asArgument)).toString("base64");
                }))),
                reference_block_id: t.message.refBlock ? t.message.refBlock : null,
                gas_limit: String(t.message.computeLimit),
                payer: Ne(t.accounts[Array.isArray(t.payer) ? t.payer[0] : t.payer].addr),
                proposal_key: {
                  address: Ne(t.accounts[t.proposer].addr),
                  key_index: String(t.accounts[t.proposer].keyId),
                  sequence_number: String(t.accounts[t.proposer].sequenceNum)
                },
                authorizers: t.authorizations.map((function(e) {
                  return t.accounts[e].addr;
                })).reduce((function(e, t) {
                  return e.find((function(e) {
                    return e === t;
                  })) ? e : [].concat(fe(e), [ t ]);
                }), []).map(Ne),
                payload_signatures: o,
                envelope_signatures: s
              }
            });

           case 43:
            return m = e.sent, g = Date.now(), (y = n.response()).tag = t.tag, y.transactionId = m.id, "undefined" != typeof window && window.dispatchEvent(new CustomEvent("FLOW::TX", {
              detail: {
                txId: y.transactionId,
                delta: g - h
              }
            })), e.abrupt("return", y);

           case 50:
           case "end":
            return e.stop();
          }
        }), e, null, [ [ 13, 17 ], [ 28, 32 ] ]);
      }))), Bt.apply(this, arguments);
    }
    var Mt = function() {
      var e = l(d().mark((function e(t) {
        var n, r, a = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = a.length > 1 && void 0 !== a[1] ? a[1] : {}, se((r = a.length > 2 && void 0 !== a[2] ? a[2] : {}).node, "SDK Send Error: Either opts.node or \"accessNode.api\" in config must be defined."), 
            se(n.ix, "SDK Send Error: context.ix must be defined."), e.next = 6, t;

           case 6:
            t = e.sent, e.t0 = !0, e.next = e.t0 === n.ix.isTransaction(t) ? 10 : e.t0 === n.ix.isGetTransactionStatus(t) ? 11 : e.t0 === n.ix.isGetTransaction(t) ? 12 : e.t0 === n.ix.isScript(t) ? 13 : e.t0 === n.ix.isGetAccount(t) ? 14 : e.t0 === n.ix.isGetEvents(t) ? 15 : e.t0 === n.ix.isGetBlock(t) ? 16 : e.t0 === n.ix.isGetBlockHeader(t) ? 17 : e.t0 === n.ix.isGetCollection(t) ? 18 : e.t0 === n.ix.isPing(t) ? 19 : 20;
            break;

           case 10:
            return e.abrupt("return", r.sendTransaction ? r.sendTransaction(t, n, r) : Ut(t, n, r));

           case 11:
            return e.abrupt("return", r.sendGetTransactionStatus ? r.sendGetTransactionStatus(t, n, r) : Lt(t, n, r));

           case 12:
            return e.abrupt("return", r.sendGetTransaction ? r.sendGetTransaction(t, n, r) : Ot(t, n, r));

           case 13:
            return e.abrupt("return", r.sendExecuteScript ? r.sendExecuteScript(t, n, r) : We(t, n, r));

           case 14:
            return e.abrupt("return", r.sendGetAccount ? r.sendGetAccount(t, n, r) : nt(t, n, r));

           case 15:
            return e.abrupt("return", r.sendGetEvents ? r.sendGetEvents(t, n, r) : _t(t, n, r));

           case 16:
            return e.abrupt("return", r.sendGetBlock ? r.sendGetBlock(t, n, r) : wt(t, n, r));

           case 17:
            return e.abrupt("return", r.sendGetBlockHeader ? r.sendGetBlockHeader(t, n, r) : lt(t, n, r));

           case 18:
            return e.abrupt("return", r.sendGetCollection ? r.sendGetCollection(t, n, r) : kt(t, n, r));

           case 19:
            return e.abrupt("return", r.sendPing ? r.sendPing(t, n, r) : jt(t, n, r));

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
    }();
    var zt = n(5682);
    var Yt;
    var qt = 'function' == typeof queueMicrotask ? queueMicrotask : function(e) {
      return (Yt || (Yt = Promise.resolve())).then(e).catch((function(e) {
        return setTimeout((function() {
          throw e;
        }), 0);
      }));
    };
    var Ht = function() {
      var e = [];
      var t;
      return {
        deliver: function(n) {
          return l(d().mark((function r() {
            return d().wrap((function(r) {
              for (;;) switch (r.prev = r.next) {
               case 0:
                e.push(n), t && (t(e.shift()), t = void 0);

               case 2:
               case "end":
                return r.stop();
              }
            }), r);
          })))();
        },
        receive: function() {
          return new Promise((function(n) {
            var r = e.shift();
            if (r) return n(r);
            t = n;
          }));
        }
      };
    };
    var Kt = "SUBSCRIBE";
    var Wt = "UNSUBSCRIBE";
    var Vt = "UPDATED";
    var Jt = "EXIT";
    var Xt = "object" === ("undefined" == typeof self ? "undefined" : m(self)) && self.self === self && self || "object" === (void 0 === n.g ? "undefined" : m(n.g)) && n.g.global === n.g && n.g || "object" === ("undefined" == typeof window ? "undefined" : m(window)) && window.window === window && window;
    Xt.FCL_REGISTRY = null == Xt.FCL_REGISTRY ? {} : Xt.FCL_REGISTRY;
    var $t = 0;
    var Zt = function(e, t, n) {
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return new Promise((function(a, o) {
        var u = r.expectReply || !1;
        var c = null != r.timeout ? r.timeout : 5e3;
        u && c && setTimeout((function() {
          return o(new Error("Timeout: ".concat(c, "ms passed without a response.")));
        }), c);
        var i = {
          to: e,
          from: r.from,
          tag: t,
          data: n,
          timeout: c,
          reply: a,
          reject: o
        };
        try {
          Xt.FCL_REGISTRY[e] && Xt.FCL_REGISTRY[e].mailbox.deliver(i), u || a(!0);
        } catch (s) {
          console.error("FCL.Actor -- Could Not Deliver Message", i, Xt.FCL_REGISTRY[e], s);
        }
      }));
    };
    var Qt = function(e) {
      delete Xt.FCL_REGISTRY[e];
    };
    var en = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return function() {
        var t = l(d().mark((function t(n) {
          var r;
          return d().wrap((function(t) {
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
              if (r = t.sent, t.prev = 7, r.tag !== Jt) {
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
    };
    var tn = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (null == t && (t = ++$t), null != Xt.FCL_REGISTRY[t]) return t;
      Xt.FCL_REGISTRY[t] = {
        addr: t,
        mailbox: Ht(),
        subs: new Set,
        kvs: {},
        error: null
      };
      var n = {
        self: function() {
          return t;
        },
        receive: function() {
          return Xt.FCL_REGISTRY[t].mailbox.receive();
        },
        send: function(e, n, r) {
          var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return a.from = t, Zt(e, n, r, a);
        },
        sendSelf: function(e, n, r) {
          Xt.FCL_REGISTRY[t] && Zt(t, e, n, r);
        },
        broadcast: function(e, n) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          r.from = t;
          var a, o = w(Xt.FCL_REGISTRY[t].subs);
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var u = a.value;
              Zt(u, e, n, r);
            }
          } catch (c) {
            o.e(c);
          } finally {
            o.f();
          }
        },
        subscribe: function(e) {
          return null != e && Xt.FCL_REGISTRY[t].subs.add(e);
        },
        unsubscribe: function(e) {
          return null != e && Xt.FCL_REGISTRY[t].subs.delete(e);
        },
        subscriberCount: function() {
          return Xt.FCL_REGISTRY[t].subs.size;
        },
        hasSubs: function() {
          return !!Xt.FCL_REGISTRY[t].subs.size;
        },
        put: function(e, n) {
          null != e && (Xt.FCL_REGISTRY[t].kvs[e] = n);
        },
        get: function(e, n) {
          var r = Xt.FCL_REGISTRY[t].kvs[e];
          return null == r ? n : r;
        },
        delete: function(e) {
          delete Xt.FCL_REGISTRY[t].kvs[e];
        },
        update: function(e, n) {
          null != e && (Xt.FCL_REGISTRY[t].kvs[e] = n(Xt.FCL_REGISTRY[t].kvs[e]));
        },
        keys: function() {
          return Object.keys(Xt.FCL_REGISTRY[t].kvs);
        },
        all: function() {
          return Xt.FCL_REGISTRY[t].kvs;
        },
        where: function(e) {
          return Object.keys(Xt.FCL_REGISTRY[t].kvs).reduce((function(n, r) {
            return e.test(r) ? b(b({}, n), {}, g({}, r, Xt.FCL_REGISTRY[t].kvs[r])) : n;
          }), {});
        },
        merge: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          Object.keys(e).forEach((function(n) {
            return Xt.FCL_REGISTRY[t].kvs[n] = e[n];
          }));
        },
        fatalError: function(e) {
          Xt.FCL_REGISTRY[t].error = e;
          var n, r = w(Xt.FCL_REGISTRY[t].subs);
          try {
            for (r.s(); !(n = r.n()).done; ) {
              var a = n.value;
              Zt(a, Vt);
            }
          } catch (o) {
            r.e(o);
          } finally {
            r.f();
          }
        }
      };
      return "object" === m(e) && (e = en(e)), qt(l(d().mark((function r() {
        return d().wrap((function(r) {
          for (;;) switch (r.prev = r.next) {
           case 0:
            return r.next = 2, e(n);

           case 2:
            Qt(t);

           case 3:
           case "end":
            return r.stop();
          }
        }), r);
      })))), t;
    };
    var nn;
    var rn = "config";
    var an = "PUT_CONFIG";
    var on = "GET_CONFIG";
    var un = "GET_ALL_CONFIG";
    var cn = "UPDATE_CONFIG";
    var sn = "DELETE_CONFIG";
    var fn = "CLEAR_CONFIG";
    var ln = "WHERE_CONFIG";
    var pn = "CONFIG/UPDATED";
    var dn = function(e) {
      return e;
    };
    var vn = (g(nn = {}, an, (function(e, t, n) {
      var r = n.key, a = n.value;
      if (null == r) throw new Error("Missing 'key' for config/put.");
      e.put(r, a), e.broadcast(pn, b({}, e.all()));
    })), g(nn, on, (function(e, t, n) {
      var r = n.key, a = n.fallback;
      if (null == r) throw new Error("Missing 'key' for config/get");
      t.reply(e.get(r, a));
    })), g(nn, un, (function(e, t) {
      t.reply(b({}, e.all()));
    })), g(nn, cn, (function(e, t, n) {
      var r = n.key, a = n.fn;
      if (null == r) throw new Error("Missing 'key' for config/update");
      e.update(r, a || dn), e.broadcast(pn, b({}, e.all()));
    })), g(nn, sn, (function(e, t, n) {
      var r = n.key;
      if (null == r) throw new Error("Missing 'key' for config/delete");
      e.delete(r), e.broadcast(pn, b({}, e.all()));
    })), g(nn, fn, (function(e, t) {
      for (var n = 0, r = Object.keys(e.all()); n < r.length; n++) {
        var a = r[n];
        e.delete(a);
      }
      e.broadcast(pn, b({}, e.all()));
    })), g(nn, ln, (function(e, t, n) {
      var r = n.pattern;
      if (null == r) throw new Error("Missing 'pattern' for config/where");
      t.reply(e.where(r));
    })), g(nn, Kt, (function(e, t) {
      e.subscribe(t.from), e.send(t.from, pn, b({}, e.all()));
    })), g(nn, Wt, (function(e, t) {
      e.unsubscribe(t.from);
    })), nn);
    function hn(e, t) {
      return Zt(rn, an, {
        key: e,
        value: t
      }), Sn();
    }
    function mn(e, t) {
      return Zt(rn, on, {
        key: e,
        fallback: t
      }, {
        expectReply: !0,
        timeout: 10
      });
    }
    function gn() {
      return yn.apply(this, arguments);
    }
    function yn() {
      return yn = l(d().mark((function e() {
        var t, n, r, a, o, u, c = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (t = c.length > 0 && void 0 !== c[0] ? c[0] : [], n = c.length > 1 ? c[1] : void 0, t.length) {
              e.next = 4;
              break;
            }
            return e.abrupt("return", n);

           case 4:
            return r = h(t), a = r[0], o = r.slice(1), e.next = 7, mn(a);

           case 7:
            if (null != (u = e.sent)) {
              e.next = 10;
              break;
            }
            return e.abrupt("return", gn(o, n));

           case 10:
            return e.abrupt("return", u);

           case 11:
           case "end":
            return e.stop();
          }
        }), e);
      }))), yn.apply(this, arguments);
    }
    function bn() {
      return Zt(rn, un, null, {
        expectReply: !0,
        timeout: 10
      });
    }
    function wn(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dn;
      return Zt(rn, cn, {
        key: e,
        fn: t
      }), Sn();
    }
    function xn(e) {
      return Zt(rn, sn, {
        key: e
      }), Sn();
    }
    function kn(e) {
      return Zt(rn, ln, {
        pattern: e
      }, {
        expectReply: !0,
        timeout: 10
      });
    }
    function En(e) {
      return function(e, t, n) {
        t(e);
        var r = "@EXIT";
        var a = tn(function() {
          var t = l(d().mark((function t(a) {
            var o, u;
            return d().wrap((function(t) {
              for (;;) switch (t.prev = t.next) {
               case 0:
                a.send(e, Kt);

               case 1:
                return t.next = 4, a.receive();

               case 4:
                if (o = t.sent, u = Xt.FCL_REGISTRY[e].error, o.tag !== r) {
                  t.next = 9;
                  break;
                }
                return a.send(e, Wt), t.abrupt("return");

               case 9:
                if (!u) {
                  t.next = 13;
                  break;
                }
                return n(null, u), a.send(e, Wt), t.abrupt("return");

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
          return Zt(a, r);
        };
      }(rn, (function() {
        return tn(vn, rn);
      }), e);
    }
    function In() {
      return Zt(rn, fn);
    }
    function Sn(e) {
      return null != e && "object" === m(e) && Object.keys(e).map((function(t) {
        return hn(t, e[t]);
      })), {
        put: hn,
        get: mn,
        all: bn,
        first: gn,
        update: wn,
        delete: xn,
        where: kn,
        subscribe: En,
        overload: An
      };
    }
    tn(vn, rn), Sn.put = hn, Sn.get = mn, Sn.all = bn, Sn.first = gn, Sn.update = wn, Sn.delete = xn, Sn.where = kn, Sn.subscribe = En, 
    Sn.overload = An;
    var Rn = function(e) {
      return e;
    };
    function An() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rn;
      return new Promise(function() {
        var n = l(d().mark((function n(r, a) {
          var o, u;
          return d().wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
             case 0:
              return n.next = 2, bn();

             case 2:
              return o = n.sent, n.prev = 3, Sn(e), n.t0 = t, n.next = 8, bn();

             case 8:
              return n.t1 = n.sent, n.next = 11, (0, n.t0)(n.t1);

             case 11:
              return u = n.sent, n.next = 14, In();

             case 14:
              return n.next = 16, Sn(o);

             case 16:
              r(u), n.next = 26;
              break;

             case 19:
              return n.prev = 19, n.t2 = n.catch(3), n.next = 23, In();

             case 23:
              return n.next = 25, Sn(o);

             case 25:
              a(n.t2);

             case 26:
             case "end":
              return n.stop();
            }
          }), n, null, [ [ 3, 19 ] ]);
        })));
        return function(e, t) {
          return n.apply(this, arguments);
        };
      }());
    }
    var Tn = Object.freeze({
      debug: 5,
      info: 4,
      log: 3,
      warn: 2,
      error: 1
    });
    var _n = function(e) {
      var t = e.title, n = e.message;
      return [ "\n    %c".concat(t, "\n    ============================\n\n    ").concat(n, "\n\n    ============================\n    ").replace(/\n[^\S\r\n]+/g, "\n").trim(), , "font-weight:bold;font-family:monospace;" ];
    };
    var Cn = function() {
      var e = l(d().mark((function e(t) {
        var n, r, a, o, u;
        var c, i, s, f, l, p, v;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return c = t.title, i = t.message, s = t.level, f = t.always, l = void 0 !== f && f, e.next = 3, Sn.get("logger.level", Tn.warn);

           case 3:
            if (p = e.sent, l || !(p < s)) {
              e.next = 6;
              break;
            }
            return e.abrupt("return");

           case 6:
            v = _n({
              title: c,
              message: i
            }), e.t0 = s, e.next = e.t0 === Tn.debug ? 10 : e.t0 === Tn.info ? 12 : e.t0 === Tn.warn ? 14 : e.t0 === Tn.error ? 16 : 18;
            break;

           case 10:
            return (n = console).debug.apply(n, fe(v)), e.abrupt("break", 19);

           case 12:
            return (r = console).info.apply(r, fe(v)), e.abrupt("break", 19);

           case 14:
            return (a = console).warn.apply(a, fe(v)), e.abrupt("break", 19);

           case 16:
            return (o = console).error.apply(o, fe(v)), e.abrupt("break", 19);

           case 18:
            (u = console).log.apply(u, fe(v));

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
    function On() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      if (!e.length && !t.length) return n;
      if (!e.length) return n;
      if (!t.length) return [].concat(fe(n), [ e[0] ]);
      var r = h(e), a = r[0], o = r.slice(1);
      var u = h(t), c = u[0], i = u.slice(1);
      return void 0 !== a && n.push(a), void 0 !== c && n.push(c), On(o, i, n);
    }
    function Pn(e) {
      return function(t) {
        return "function" == typeof t ? (Cn.deprecate({
          pkg: "FCL/SDK",
          subject: "Interopolation of functions into template literals",
          transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0001-deprecate-params"
        }), Pn(e)(t(e))) : String(t);
      };
    }
    function Nn(e) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
      return "string" == typeof e ? function() {
        return e;
      } : Array.isArray(e) ? function(t) {
        return On(e, n.map(Pn(t))).join("").trim();
      } : e;
    }
    function Ln(e, t) {
      if (null == e) return {};
      var n = function(e, t) {
        if (null == e) return {};
        var n = {};
        var r = Object.keys(e);
        var a, o;
        for (o = 0; o < r.length; o++) a = r[o], t.indexOf(a) >= 0 || (n[a] = e[a]);
        return n;
      }(e, t);
      var r, a;
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (a = 0; a < o.length; a++) r = o[a], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
      }
      return n;
    }
    Cn.deprecate = function(e) {
      var t = e.pkg, n = e.subject, r = e.transition, a = e.level, o = void 0 === a ? Tn.warn : a, u = e.message, c = void 0 === u ? "" : u, i = e.callback, s = void 0 === i ? null : i;
      var f = function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      };
      var p = function() {
        return Cn({
          title: "".concat(t ? t + " " : "", "Deprecation Notice"),
          message: "\n      ".concat(n ? "".concat(f(n), " is deprecated and will cease to work in future releases").concat(t ? " of " + t : "", ".") : "").concat(c ? "\n" + c : "").concat(r ? "\nYou can learn more (including a guide on common transition paths) here: ".concat(r) : "", "\n    ").trim(),
          level: o
        });
      };
      return "function" == typeof s ? l(d().mark((function e() {
        var t = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.next = 2, p();

           case 2:
            return e.next = 4, s.apply(void 0, t);

           case 4:
            return e.abrupt("return", e.sent);

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      }))) : p();
    };
    var Fn = "UNKNOWN";
    var jn = "SCRIPT";
    var Gn = "TRANSACTION";
    var Dn = "GET_TRANSACTION_STATUS";
    var Un = "GET_ACCOUNT";
    var Bn = "GET_EVENTS";
    var Mn = "PING";
    var zn = "GET_TRANSACTION";
    var Yn = "GET_BLOCK";
    var qn = "GET_BLOCK_HEADER";
    var Hn = "GET_COLLECTION";
    var Kn = "BAD";
    var Wn = "OK";
    var Vn = "ACCOUNT";
    var Jn = "PARAM";
    var Xn = "ARGUMENT";
    var $n = "authorizer";
    var Zn = "payer";
    var Qn = "proposer";
    var er = "{\n  \"kind\":\"".concat(Vn, "\",\n  \"tempId\":null,\n  \"addr\":null,\n  \"keyId\":null,\n  \"sequenceNum\":null,\n  \"signature\":null,\n  \"signingFunction\":null,\n  \"resolve\":null,\n  \"role\": {\n    \"proposer\":false,\n    \"authorizer\":false,\n    \"payer\":false,\n    \"param\":false\n  }\n}");
    var tr = "{\n  \"kind\":\"".concat(Xn, "\",\n  \"tempId\":null,\n  \"value\":null,\n  \"asArgument\":null,\n  \"xform\":null,\n  \"resolve\": null,\n  \"resolveArgument\": null\n}");
    var nr = "{\n  \"tag\":\"".concat(Fn, "\",\n  \"assigns\":{},\n  \"status\":\"").concat(Wn, "\",\n  \"reason\":null,\n  \"accounts\":{},\n  \"params\":{},\n  \"arguments\":{},\n  \"message\": {\n    \"cadence\":null,\n    \"refBlock\":null,\n    \"computeLimit\":null,\n    \"proposer\":null,\n    \"payer\":null,\n    \"authorizations\":[],\n    \"params\":[],\n    \"arguments\":[]\n  },\n  \"proposer\":null,\n  \"authorizations\":[],\n  \"payer\":[],\n  \"events\": {\n    \"eventType\":null,\n    \"start\":null,\n    \"end\":null,\n    \"blockIds\":[]\n  },\n  \"transaction\": {\n    \"id\":null\n  },\n  \"block\": {\n    \"id\":null,\n    \"height\":null,\n    \"isSealed\":null\n  },\n  \"account\": {\n    \"addr\":null\n  },\n  \"collection\": {\n    \"id\":null\n  }\n}");
    var rr = new Set(Object.keys(JSON.parse(nr)));
    var ar = function() {
      return JSON.parse(nr);
    };
    var or = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
    var ur = function() {
      return or[~~(Math.random() * or.length)];
    };
    var cr = function() {
      return Array.from({
        length: 10
      }, ur).join("");
    };
    var ir = function(e) {
      return "number" == typeof e;
    };
    var sr = function(e) {
      return Array.isArray(e);
    };
    var fr = function(e) {
      return null !== e && "object" === m(e);
    };
    var lr = function(e) {
      return null == e;
    };
    var pr = function(e) {
      return "function" == typeof e;
    };
    var dr = function(e) {
      if (!fr(e) || lr(e) || ir(e)) return !1;
      var t, n = w(rr);
      try {
        for (n.s(); !(t = n.n()).done; ) {
          var r = t.value;
          if (!e.hasOwnProperty(r)) return !1;
        }
      } catch (a) {
        n.e(a);
      } finally {
        n.f();
      }
      return !0;
    };
    var vr = function(e) {
      return e.status = Wn, e;
    };
    var hr = function(e, t) {
      return e.status = Kn, e.reason = t, e;
    };
    var mr = function(e) {
      return function(t) {
        return t.tag = e, vr(t);
      };
    };
    var gr = function(e) {
      return null == e.keyId ? e : (se(!isNaN(parseInt(e.keyId)), "account.keyId must be an integer"), b(b({}, e), {}, {
        keyId: parseInt(e.keyId)
      }));
    };
    var yr = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return function(n) {
        se("function" == typeof e || "object" === m(e), "prepAccount must be passed an authorization function or an account object"), 
        se(null != t.role, "Account must have a role");
        var r = JSON.parse(er);
        var a = t.role;
        var o = cr();
        e.authorization && pr(e.authorization) && (e = {
          resolve: e.authorization
        }), !e.authorization && pr(e) && (e = {
          resolve: e
        });
        var u = e.resolve;
        return u && (e.resolve = function(e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return [ u, gr ].reduce(function() {
            var e = l(d().mark((function e(t, r) {
              return d().wrap((function(e) {
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
        }), e = gr(e), n.accounts[o] = b(b(b({}, r), {}, {
          tempId: o
        }, e), {}, {
          role: b(b(b({}, r.role), "object" === m(e.role) ? e.role : {}), {}, g({}, a, !0))
        }), a === $n ? n.authorizations.push(o) : a === Zn ? n.payer.push(o) : n[a] = o, n;
      };
    };
    var br = function(e) {
      return function(t) {
        var n = cr();
        return t.message.arguments.push(n), t.arguments[n] = JSON.parse(tr), t.arguments[n].tempId = n, t.arguments[n].value = e.value, 
        t.arguments[n].asArgument = e.asArgument, t.arguments[n].xform = e.xform, t.arguments[n].resolve = e.resolve, t.arguments[n].resolveArgument = pr(e.resolveArgument) ? e.resolveArgument.bind(e) : e.resolveArgument, 
        vr(t);
      };
    };
    var wr = mr(Fn);
    var xr = mr(jn);
    var kr = mr(Gn);
    var Er = mr(Dn);
    var Ir = mr(zn);
    var Sr = mr(Un);
    var Rr = mr(Bn);
    var Ar = mr(Mn);
    var Tr = mr(Yn);
    var _r = mr(qn);
    var Cr = mr(Hn);
    var Or = function(e) {
      return function(t) {
        return t.tag === e;
      };
    };
    var Pr = Or(Fn);
    var Nr = Or(jn);
    var Lr = Or(Gn);
    var Fr = Or(Dn);
    var jr = Or(zn);
    var Gr = Or(Un);
    var Dr = Or(Bn);
    var Ur = Or(Mn);
    var Br = Or(Yn);
    var Mr = Or(qn);
    var zr = Or(Hn);
    var Yr = function(e) {
      return e.status === Wn;
    };
    var qr = function(e) {
      return e.status === Kn;
    };
    var Hr = function(e) {
      return e.reason;
    };
    var Kr = function(e) {
      for (var t = 0, n = Object.keys(e); t < n.length; t++) {
        var r = n[t];
        if (!rr.has(r)) throw new Error("\"".concat(r, "\" is an invalid root level Interaction property."));
      }
      return e;
    };
    var Wr = function() {
      var e = l(d().mark((function e(t) {
        var n, r, a, o, u, c = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = c.length > 1 && void 0 !== c[1] ? c[1] : [], e.prev = 1, e.t0 = Kr, e.next = 5, t;

           case 5:
            if (e.t1 = e.sent, t = (0, e.t0)(e.t1), !qr(t)) {
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
            return r = h(n), a = r[0], o = r.slice(1), e.next = 14, a;

           case 14:
            if (u = e.sent, !pr(u)) {
              e.next = 17;
              break;
            }
            return e.abrupt("return", Wr(u(t), o));

           case 17:
            if (!lr(u) && u) {
              e.next = 19;
              break;
            }
            return e.abrupt("return", Wr(t, o));

           case 19:
            if (!dr(u)) {
              e.next = 21;
              break;
            }
            return e.abrupt("return", Wr(u, o));

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
    }();
    var Vr = function e() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      var a = n[0], o = n[1];
      return sr(a) && null == o ? function(t) {
        return e(t, a);
      } : Wr(a, o);
    };
    var Jr = function(e) {
      return e;
    };
    var Xr = function(e, t, n) {
      return null == e.assigns[t] ? n : e.assigns[t];
    };
    var $r = function(e, t) {
      return function(n) {
        return n.assigns[e] = t, vr(n);
      };
    };
    var Zr = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Jr;
      return function(n) {
        return n.assigns[e] = t(n.assigns[e], n), vr(n);
      };
    };
    var Qr = Object.freeze({
      __proto__: null,
      UNKNOWN: Fn,
      SCRIPT: jn,
      TRANSACTION: Gn,
      GET_TRANSACTION_STATUS: Dn,
      GET_ACCOUNT: Un,
      GET_EVENTS: Bn,
      PING: Mn,
      GET_TRANSACTION: zn,
      GET_BLOCK: Yn,
      GET_BLOCK_HEADER: qn,
      GET_COLLECTION: Hn,
      BAD: Kn,
      OK: Wn,
      ACCOUNT: Vn,
      PARAM: Jn,
      ARGUMENT: Xn,
      AUTHORIZER: $n,
      PAYER: Zn,
      PROPOSER: Qn,
      interaction: ar,
      uuid: cr,
      isNumber: ir,
      isArray: sr,
      isObj: fr,
      isNull: lr,
      isFn: pr,
      isInteraction: dr,
      Ok: vr,
      Bad: hr,
      prepAccount: yr,
      makeArgument: br,
      makeUnknown: wr,
      makeScript: xr,
      makeTransaction: kr,
      makeGetTransactionStatus: Er,
      makeGetTransaction: Ir,
      makeGetAccount: Sr,
      makeGetEvents: Rr,
      makePing: Ar,
      makeGetBlock: Tr,
      makeGetBlockHeader: _r,
      makeGetCollection: Cr,
      isUnknown: Pr,
      isScript: Nr,
      isTransaction: Lr,
      isGetTransactionStatus: Fr,
      isGetTransaction: jr,
      isGetAccount: Gr,
      isGetEvents: Dr,
      isPing: Ur,
      isGetBlock: Br,
      isGetBlockHeader: Mr,
      isGetCollection: zr,
      isOk: Yr,
      isBad: qr,
      why: Hr,
      isAccount: function(e) {
        return e.kind === Vn;
      },
      isParam: function(e) {
        return e.kind === Jn;
      },
      isArgument: function(e) {
        return e.kind === Xn;
      },
      pipe: Vr,
      get: Xr,
      put: $r,
      update: Zr,
      destroy: function(e) {
        return function(t) {
          return delete t.assigns[e], vr(t);
        };
      }
    });
    function ea() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return Vr(ar(), e);
    }
    var ta = function() {
      return JSON.parse("{\n    \"tag\":null,\n    \"transaction\":null,\n    \"transactionStatus\":null,\n    \"transactionId\":null,\n    \"encodedData\":null,\n    \"events\":null,\n    \"account\":null,\n    \"block\":null,\n    \"blockHeader\":null,\n    \"latestBlock\":null,\n    \"collection\":null\n}");
    };
    function na() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      return Vr([ Tr, function(t) {
        return t.block.isSealed = e, vr(t);
      } ]);
    }
    function ra(e) {
      return Vr([ Sr, function(t) {
        return t.account.addr = Ne(e), vr(t);
      } ]);
    }
    var aa = function() {
      de.deprecate({
        pkg: "@onflow/decode",
        subject: "Operating upon data of the latestBlock field of the response object",
        transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/decode/WARNINGS.md#0001-Deprecating-latestBlock-field"
      });
    };
    var oa = function() {
      var e = l(d().mark((function e(t) {
        return d().wrap((function(e) {
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
    }();
    var ua = function() {
      var e = l(d().mark((function e() {
        return d().wrap((function(e) {
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
    }();
    var ca = function() {
      var e = l(d().mark((function e(t) {
        return d().wrap((function(e) {
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
    }();
    var ia = function() {
      var e = l(d().mark((function e(t) {
        return d().wrap((function(e) {
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
    }();
    var sa = function() {
      var e = l(d().mark((function e(t) {
        return d().wrap((function(e) {
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
    }();
    var fa = function() {
      var e = l(d().mark((function e(t, n, r) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (!t) {
              e.next = 6;
              break;
            }
            return e.next = 3, ga(t, n, r);

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
    }();
    var la = function() {
      var e = l(d().mark((function e(t) {
        return d().wrap((function(e) {
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
    }();
    var pa = function() {
      var e = l(d().mark((function e(t, n, r) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.next = 2, Promise.all(t.map((function(e) {
              return new Promise(function() {
                var t = l(d().mark((function t(a) {
                  return d().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                     case 0:
                      return t.t0 = a, t.next = 3, ga(e, n, [].concat(fe(r), [ e.type ]));

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
    }();
    var da = function() {
      var e = l(d().mark((function e(t, n, r) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.next = 2, t.reduce(function() {
              var e = l(d().mark((function e(t, a) {
                return d().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                   case 0:
                    return e.next = 2, t;

                   case 2:
                    return t = e.sent, e.next = 5, ga(a.key, n, [].concat(fe(r), [ a.key ]));

                   case 5:
                    return e.t0 = e.sent, e.next = 8, ga(a.value, n, [].concat(fe(r), [ a.key ]));

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
    }();
    var va = function() {
      var e = l(d().mark((function e(t, n, r) {
        var a, o;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.next = 2, t.fields.reduce(function() {
              var e = l(d().mark((function e(t, a) {
                return d().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                   case 0:
                    return e.next = 2, t;

                   case 2:
                    return t = e.sent, e.next = 5, ga(a.value, n, [].concat(fe(r), [ a.name ]));

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
            if (a = e.sent, !(o = t.id && ma(n, t.id))) {
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
    }();
    var ha = {
      UInt: oa,
      Int: oa,
      UInt8: oa,
      Int8: oa,
      UInt16: oa,
      Int16: oa,
      UInt32: oa,
      Int32: oa,
      UInt64: oa,
      Int64: oa,
      UInt128: oa,
      Int128: oa,
      UInt256: oa,
      Int256: oa,
      Word8: oa,
      Word16: oa,
      Word32: oa,
      Word64: oa,
      UFix64: oa,
      Fix64: oa,
      String: oa,
      Character: oa,
      Bool: oa,
      Address: oa,
      Void: ua,
      Optional: fa,
      Reference: la,
      Array: pa,
      Dictionary: da,
      Event: va,
      Resource: va,
      Struct: va,
      Enum: va,
      Type: ca,
      Path: ia,
      Capability: sa
    };
    var ma = function(e, t) {
      var n = Object.keys(e).find((function(e) {
        return /^\/.*\/$/.test(e) ? new RegExp(e.substring(1, e.length - 1)).test(t) : e === t;
      }));
      return t && n && e[n];
    };
    var ga = function() {
      var e = l(d().mark((function e(t, n, r) {
        var a;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (a = ma(n, t.type)) {
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
    }();
    var ya = function() {
      var e = l(d().mark((function e(t) {
        var n, r, a, o, u = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = u.length > 1 && void 0 !== u[1] ? u[1] : {}, r = u.length > 2 && void 0 !== u[2] ? u[2] : [], a = Object.keys(ha).filter((function(e) {
              return !Object.keys(n).find((function(t) {
                return new RegExp(t).test(e);
              }));
            })).reduce((function(e, t) {
              return e[t] = ha[t], e;
            }), n), o = b(b({}, a), n), e.abrupt("return", ga(t, o, r));

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      })));
      return function(t) {
        return e.apply(this, arguments);
      };
    }();
    var ba = function() {
      var e = l(d().mark((function e(t) {
        var n, r = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}, !t.encodedData) {
              e.next = 5;
              break;
            }
            return e.abrupt("return", ya(t.encodedData, n));

           case 5:
            if (!t.transactionStatus) {
              e.next = 16;
              break;
            }
            return e.t0 = b, e.t1 = b({}, t.transactionStatus), e.t2 = {}, e.next = 11, Promise.all(t.transactionStatus.events.map(function() {
              var e = l(d().mark((function e(t) {
                return d().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                   case 0:
                    return e.t0 = t.type, e.t1 = t.transactionId, e.t2 = t.transactionIndex, e.t3 = t.eventIndex, e.next = 6, ya(t.payload, n);

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
              var e = l(d().mark((function e(t) {
                return d().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                   case 0:
                    return e.t0 = t.blockId, e.t1 = t.blockHeight, e.t2 = t.blockTimestamp, e.t3 = t.type, e.t4 = t.transactionId, e.t5 = t.transactionIndex, 
                    e.t6 = t.eventIndex, e.next = 9, ya(t.payload, n);

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
            return aa(), e.abrupt("return", t.latestBlock);

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
    }();
    var wa = function(e) {
      return "function" == typeof e;
    };
    var xa = function(e) {
      return "string" == typeof e;
    };
    function ka() {
      return (ka = l(d().mark((function e(t) {
        var n;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (!Lr(t) && !Nr(t)) {
              e.next = 11;
              break;
            }
            if (n = Xr(t, "ix.cadence"), se(wa(n) || xa(n), "Cadence needs to be a function or a string."), !wa(n)) {
              e.next = 7;
              break;
            }
            return e.next = 6, n({});

           case 6:
            n = e.sent;

           case 7:
            return se(xa(n), "Cadence needs to be a string at this point."), e.next = 10, ue().where(/^0x/).then((function(e) {
              return Object.entries(e).reduce((function(e, t) {
                var n = s(t, 2), r = n[0], a = n[1];
                var o = new RegExp("(\\b" + r + "\\b)", "g");
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
    var Ea = function(e) {
      return "function" == typeof e;
    };
    function Ia(e) {
      return se(null != m(e.xform), "No type specified for argument: ".concat(e.value)), Ea(e.xform) ? e.xform(e.value) : Ea(e.xform.asArgument) ? e.xform.asArgument(e.value) : void se(!1, "Invalid Argument", e);
    }
    function Sa(e) {
      return Ra.apply(this, arguments);
    }
    function Ra() {
      return Ra = l(d().mark((function e(t) {
        var n, r, a = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (se((n = a.length > 1 && void 0 !== a[1] ? a[1] : 3) > 0, "Argument Resolve Recursion Limit Exceeded for Arg: ".concat(t.tempId)), 
            !Ea(t.resolveArgument)) {
              e.next = 9;
              break;
            }
            return e.next = 5, t.resolveArgument();

           case 5:
            return r = e.sent, e.abrupt("return", Sa(r, n - 1));

           case 9:
            return e.abrupt("return", t);

           case 10:
           case "end":
            return e.stop();
          }
        }), e);
      }))), Ra.apply(this, arguments);
    }
    function Aa() {
      return Aa = l(d().mark((function e(t) {
        var n, r, a, o, u, c;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (!Lr(t) && !Nr(t)) {
              e.next = 11;
              break;
            }
            n = 0, r = Object.entries(t.arguments);

           case 2:
            if (!(n < r.length)) {
              e.next = 11;
              break;
            }
            return a = s(r[n], 2), o = a[0], u = a[1], e.next = 6, Sa(u);

           case 6:
            c = e.sent, t.arguments[o].asArgument = Ia(c);

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
      }))), Aa.apply(this, arguments);
    }
    var Ta = function(e) {
      return Pa(Da(Ba(e)));
    };
    var _a = function(e) {
      return Pa(Da(Ma(e)));
    };
    var Ca = function(e, t) {
      return ve.Buffer.from(e.padStart(2 * t, 0), "hex");
    };
    var Oa = function(e, t) {
      return ve.Buffer.from(e.padEnd(2 * t, 0), "hex");
    }(ve.Buffer.from("FLOW-V0.0-transaction").toString("hex"), 32).toString("hex");
    var Pa = function(e) {
      return Oa + e;
    };
    var Na = function(e) {
      return Ca(e, 8);
    };
    var La = function(e) {
      return Ca(e, 32);
    };
    var Fa = function(e) {
      return ve.Buffer.from(JSON.stringify(e), "utf8");
    };
    var ja = function(e) {
      return ve.Buffer.from(e, "utf8");
    };
    var Ga = function(e) {
      return ve.Buffer.from(e, "hex");
    };
    var Da = function(e) {
      return he(e).toString("hex");
    };
    var Ua = function(e) {
      var t = new zt.Aj(256);
      return t.update(ve.Buffer.from(e, "hex")), t.digest().toString("hex");
    };
    var Ba = function(e) {
      return Ha(e), [ ja(e.cadence), e.arguments.map(Fa), La(e.refBlock), e.computeLimit, Na(Ne(e.proposalKey.address)), e.proposalKey.keyId, e.proposalKey.sequenceNum, Na(Ne(e.payer)), e.authorizers.map((function(e) {
        return Na(Ne(e));
      })) ];
    };
    var Ma = function(e) {
      return Ka(e), [ Ba(e), za(e) ];
    };
    var za = function(e) {
      var t = Ya(e);
      return e.payloadSigs.map((function(e) {
        return {
          signerIndex: t.get(e.address),
          keyId: e.keyId,
          sig: e.sig
        };
      })).sort((function(e, t) {
        return e.signerIndex > t.signerIndex ? 1 : e.signerIndex < t.signerIndex ? -1 : e.keyId > t.keyId ? 1 : e.keyId < t.keyId ? -1 : void 0;
      })).map((function(e) {
        return [ e.signerIndex, e.keyId, Ga(e.sig) ];
      }));
    };
    var Ya = function(e) {
      var t = new Map;
      var n = 0;
      var r = function(e) {
        t.has(e) || (t.set(e, n), n++);
      };
      return r(e.proposalKey.address), r(e.payer), e.authorizers.forEach(r), t;
    };
    var qa = function(e) {
      Wa(e);
      var t = Ya(e);
      var n = function(e) {
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
          return [ e.signerIndex, e.keyId, Ga(e.sig) ];
        }));
      };
      return [ [ ja(e.cadence), e.arguments.map(Fa), La(e.refBlock), e.computeLimit, Na(Ne(e.proposalKey.address)), e.proposalKey.keyId, e.proposalKey.sequenceNum, Na(Ne(e.payer)), e.authorizers.map((function(e) {
        return Na(Ne(e));
      })) ], n(e.payloadSigs), n(e.envelopeSigs) ];
    };
    var Ha = function(e) {
      Za.forEach((function(t) {
        return ao(e, t);
      })), Qa.forEach((function(t) {
        return ao(e.proposalKey, t, "proposalKey");
      }));
    };
    var Ka = function(e) {
      eo.forEach((function(t) {
        return ao(e, t);
      })), e.payloadSigs.forEach((function(e, t) {
        to.forEach((function(n) {
          return ao(e, n, "payloadSigs", t);
        }));
      }));
    };
    var Wa = function(e) {
      Za.forEach((function(t) {
        return ao(e, t);
      })), Qa.forEach((function(t) {
        return ao(e.proposalKey, t, "proposalKey");
      })), eo.forEach((function(t) {
        return ao(e, t);
      })), e.payloadSigs.forEach((function(e, t) {
        to.forEach((function(n) {
          return ao(e, n, "payloadSigs", t);
        }));
      })), no.forEach((function(t) {
        return ao(e, t);
      })), e.envelopeSigs.forEach((function(e, t) {
        ro.forEach((function(n) {
          return ao(e, n, "envelopeSigs", t);
        }));
      }));
    };
    var Va = function(e) {
      return "number" == typeof e;
    };
    var Ja = function(e) {
      return "string" == typeof e;
    };
    var Xa = function(e) {
      return null !== e && "object" === m(e);
    };
    var $a = function(e) {
      return Xa(e) && e instanceof Array;
    };
    var Za = [ {
      name: "cadence",
      check: Ja
    }, {
      name: "arguments",
      check: $a
    }, {
      name: "refBlock",
      check: Ja,
      defaultVal: "0"
    }, {
      name: "computeLimit",
      check: Va
    }, {
      name: "proposalKey",
      check: Xa
    }, {
      name: "payer",
      check: Ja
    }, {
      name: "authorizers",
      check: $a
    } ];
    var Qa = [ {
      name: "address",
      check: Ja
    }, {
      name: "keyId",
      check: Va
    }, {
      name: "sequenceNum",
      check: Va
    } ];
    var eo = [ {
      name: "payloadSigs",
      check: $a
    } ];
    var to = [ {
      name: "address",
      check: Ja
    }, {
      name: "keyId",
      check: Va
    }, {
      name: "sig",
      check: Ja
    } ];
    var no = [ {
      name: "envelopeSigs",
      check: $a
    } ];
    var ro = [ {
      name: "address",
      check: Ja
    }, {
      name: "keyId",
      check: Va
    }, {
      name: "sig",
      check: Ja
    } ];
    var ao = function(e, t, n, r) {
      var a = t.name, o = t.check, u = t.defaultVal;
      if (null == e[a] && null != u && (e[a] = u), null == e[a]) throw uo(a, n, r);
      if (!o(e[a])) throw co(a, n, r);
    };
    var oo = function(e, t, n) {
      return t ? null == n ? "".concat(t, ".").concat(e) : "".concat(t, ".").concat(n, ".").concat(e) : e;
    };
    var uo = function(e, t, n) {
      return new Error("Missing field ".concat(oo(e, t, n)));
    };
    var co = function(e, t, n) {
      return new Error("Invalid field ".concat(oo(e, t, n)));
    };
    function io(e) {
      var t = new Set(e.authorizations);
      return t.add(e.proposer), Array.isArray(e.payer) ? e.payer.forEach((function(e) {
        return t.delete(e);
      })) : t.delete(e.payer), Array.from(t);
    }
    function so(e) {
      var t = new Set(Array.isArray(e.payer) ? e.payer : [ e.payer ]);
      return Array.from(t);
    }
    var fo = function(e) {
      return {
        cadence: e.message.cadence,
        refBlock: e.message.refBlock || null,
        computeLimit: e.message.computeLimit,
        arguments: e.message.arguments.map((function(t) {
          return e.arguments[t].asArgument;
        })),
        proposalKey: {
          address: Le(e.accounts[e.proposer].addr),
          keyId: e.accounts[e.proposer].keyId,
          sequenceNum: e.accounts[e.proposer].sequenceNum
        },
        payer: Le(e.accounts[Array.isArray(e.payer) ? e.payer[0] : e.payer].addr),
        authorizers: function() {
          var t = e.authorizations.map((function(t) {
            return Le(e.accounts[t].addr);
          })).reduce((function(e, t) {
            return e.find((function(e) {
              return e === t;
            })) ? e : [].concat(fe(e), [ t ]);
          }), []);
          return t[0] ? t : [];
        }(),
        payloadSigs: function() {
          return io(e).map((function(t) {
            return {
              address: Le(e.accounts[t].addr),
              keyId: e.accounts[t].keyId,
              sig: e.accounts[t].signature
            };
          }));
        }(),
        envelopeSigs: function() {
          return so(e).map((function(t) {
            return {
              address: Le(e.accounts[t].addr),
              keyId: e.accounts[t].keyId,
              sig: e.accounts[t].signature
            };
          }));
        }()
      };
    };
    var lo = function(e) {
      return function(e) {
        return Ua(Da(qa(e)));
      }(e);
    };
    var po = function(e) {
      return "".concat(Le(e.addr), "-").concat(e.keyId);
    };
    var vo = function(e) {
      return "function" == typeof e;
    };
    function ho(e, t) {
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
          voucher: fo(t)
        };
      } catch (n) {
        throw console.error("buildPreSignable", n), n;
      }
    }
    function mo(e, t, n) {
      return go.apply(this, arguments);
    }
    function go() {
      return go = l(d().mark((function e(t, n, r) {
        var a, o, u, c, i, s, f = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            se(a = f.length > 3 && void 0 !== f[3] ? f[3] : 3, "Account Resolve Recursion Limit Exceeded", {
              ix: t,
              accounts: n
            }), o = [], u = w(n), e.prev = 4, i = d().mark((function e() {
              var n, u, i, f;
              return d().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                 case 0:
                  if (n = c.value, u = n.resolve, n.resolve = null, s = r || n, !vo(u)) {
                    e.next = 8;
                    break;
                  }
                  return e.next = 7, u(n, ho(n, t));

                 case 7:
                  n = e.sent;

                 case 8:
                  if (!Array.isArray(n)) {
                    e.next = 13;
                    break;
                  }
                  return e.next = 11, mo(t, n, s, a - 1);

                 case 11:
                  e.next = 30;
                  break;

                 case 13:
                  if (n.addr && (n.addr = Ne(n.addr)), null != n.addr && null != n.keyId && (n.tempId = po(n)), t.accounts[n.tempId] = t.accounts[n.tempId] || n, 
                  t.accounts[n.tempId].role.proposer = t.accounts[n.tempId].role.proposer || n.role.proposer, t.accounts[n.tempId].role.payer = t.accounts[n.tempId].role.payer || n.role.payer, 
                  t.accounts[n.tempId].role.authorizer = t.accounts[n.tempId].role.authorizer || n.role.authorizer, t.accounts[n.tempId].role.proposer && t.proposer === s.tempId && (t.proposer = n.tempId), 
                  !t.accounts[n.tempId].role.payer) {
                    e.next = 29;
                    break;
                  }
                  if (Array.isArray(t.payer) ? t.payer = Array.from(new Set([].concat(fe(t.payer), [ n.tempId ]).map((function(e) {
                    return e === s.tempId ? n.tempId : e;
                  })))) : t.payer = Array.from(new Set([ t.payer, n.tempId ].map((function(e) {
                    return e === s.tempId ? n.tempId : e;
                  })))), !(t.payer.length > 1)) {
                    e.next = 29;
                    break;
                  }
                  if (i = [], f = [], t.payer = t.payer.reduce((function(e, n) {
                    var r = t.accounts[n].addr;
                    var a = po(t.accounts[n]);
                    return f.push(r), i.includes(a) ? e : (i.push(a), [].concat(fe(e), [ n ]));
                  }), []), !(Array.from(new Set(f)).length > 1)) {
                    e.next = 29;
                    break;
                  }
                  throw new Error("Payer can not be different accounts");

                 case 29:
                  t.accounts[n.tempId].role.authorizer && (r ? o = Array.from(new Set([].concat(fe(o), [ n.tempId ]))) : t.authorizations = t.authorizations.map((function(e) {
                    return e === s.tempId ? n.tempId : e;
                  })));

                 case 30:
                  s.tempId != n.tempId && delete t.accounts[s.tempId];

                 case 31:
                 case "end":
                  return e.stop();
                }
              }), e);
            })), u.s();

           case 7:
            if ((c = u.n()).done) {
              e.next = 11;
              break;
            }
            return e.delegateYield(i(), "t0", 9);

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
              return Array.isArray(t) ? [].concat(fe(e), fe(t)) : [].concat(fe(e), [ t ]);
            }), []));

           case 20:
           case "end":
            return e.stop();
          }
        }), e, null, [ [ 4, 13, 16, 19 ] ]);
      }))), go.apply(this, arguments);
    }
    function yo() {
      return (yo = l(d().mark((function e(t) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (!Lr(t)) {
              e.next = 13;
              break;
            }
            return Array.isArray(t.payer) || de.deprecate({
              pkg: "FCL",
              subject: '"ix.payer" must be an array. Support for ix.payer as a singular',
              message: "See changelog for more info."
            }), e.prev = 2, e.next = 5, mo(t, Object.values(t.accounts));

           case 5:
            return e.next = 7, mo(t, Object.values(t.accounts));

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
    function bo() {
      return (bo = l(d().mark((function e(t) {
        var n, r, a, o;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (!Lr(t)) {
              e.next = 16;
              break;
            }
            return e.prev = 1, n = io(t), r = Ta(ko(t)), e.next = 6, Promise.all(n.map(wo(t, r)));

           case 6:
            return a = so(t), o = _a(b(b({}, ko(t)), {}, {
              payloadSigs: n.map((function(e) {
                return {
                  address: t.accounts[e].addr,
                  keyId: t.accounts[e].keyId,
                  sig: t.accounts[e].signature
                };
              }))
            })), e.next = 10, Promise.all(a.map(wo(t, o)));

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
    function wo(e, t) {
      return function() {
        var n = l(d().mark((function n(r) {
          var a, o, u;
          return d().wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
             case 0:
              if (null == (a = e.accounts[r]).signature) {
                n.next = 3;
                break;
              }
              return n.abrupt("return");

             case 3:
              return n.next = 5, a.signingFunction(xo(a, t, e));

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
    function xo(e, t, n) {
      try {
        return {
          f_type: "Signable",
          f_vsn: "1.0.1",
          message: t,
          addr: Ne(e.addr),
          keyId: e.keyId,
          roles: e.role,
          cadence: n.message.cadence,
          args: n.message.arguments.map((function(e) {
            return n.arguments[e].asArgument;
          })),
          data: {},
          interaction: n,
          voucher: fo(n)
        };
      } catch (r) {
        throw console.error("buildSignable", r), r;
      }
    }
    function ko(e) {
      var t = Ne((Array.isArray(e.payer) ? e.accounts[e.payer[0]] : e.accounts[e.payer]).addr);
      return {
        cadence: e.message.cadence,
        refBlock: e.message.refBlock || null,
        computeLimit: e.message.computeLimit,
        arguments: e.message.arguments.map((function(t) {
          return e.arguments[t].asArgument;
        })),
        proposalKey: {
          address: Ne(e.accounts[e.proposer].addr),
          keyId: e.accounts[e.proposer].keyId,
          sequenceNum: e.accounts[e.proposer].sequenceNum
        },
        payer: t,
        authorizers: e.authorizations.map((function(t) {
          return Ne(e.accounts[t].addr);
        })).reduce((function(e, t) {
          return e.find((function(e) {
            return e === t;
          })) ? e : [].concat(fe(e), [ t ]);
        }), [])
      };
    }
    function Eo() {
      return (Eo = l(d().mark((function e(t) {
        var n;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = Xr(t, "ix.validators", []), e.abrupt("return", Vr(t, n.map((function(e) {
              return function(t) {
                return e(t, {
                  Ok: vr,
                  Bad: hr
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
    function Io() {
      return (Io = l(d().mark((function e(t) {
        var n, r, a;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            for (n = 0, r = Object.keys(t.accounts); n < r.length; n++) a = r[n], t.accounts[a].addr = Ne(t.accounts[a].addr);
            return e.abrupt("return", t);

           case 2:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    function So() {
      return (So = l(d().mark((function e(t) {
        var n;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (n = Xr(t, "ix.voucher-intercept"), !pr(n)) {
              e.next = 4;
              break;
            }
            return e.next = 4, n(fo(t));

           case 4:
            return e.abrupt("return", t);

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    function Ro() {
      return (Ro = l(d().mark((function e(t) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (!Lr(t)) {
              e.next = 8;
              break;
            }
            if (e.t0 = t.message.computeLimit, e.t0) {
              e.next = 6;
              break;
            }
            return e.next = 5, ue.get("fcl.limit");

           case 5:
            e.t0 = e.sent;

           case 6:
            t.message.computeLimit = e.t0, t.message.computeLimit || (de.deprecate({
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
    var Ao = function(e) {
      return e;
    };
    var To = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ao;
      return function() {
        var n = l(d().mark((function n(r) {
          var a, o;
          return d().wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
             case 0:
              return a = function(e) {
                return [ "\nAccounts:", {
                  proposer: e.proposer,
                  authorizations: e.authorizations,
                  payer: e.payer
                }, "\n\nDetails:", e.accounts ].filter(Boolean);
              }, o = function() {
                var t;
                for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                (t = console).log.apply(t, [ "debug[".concat(e, "] ---\n") ].concat(r, [ "\n\n\n---" ]));
              }, n.next = 5, ue.get("debug.".concat(e));

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
    };
    var _o = Vr([ function(e) {
      return ka.apply(this, arguments);
    }, To("cadence", (function(e, t) {
      return t(e.message.cadence);
    })), function(e) {
      return Ro.apply(this, arguments);
    }, To("compute limit", (function(e, t) {
      return t(e.message.computeLimit);
    })), function(e) {
      return Aa.apply(this, arguments);
    }, To("arguments", (function(e, t) {
      return t(e.message.arguments, e.message);
    })), function(e) {
      return yo.apply(this, arguments);
    }, To("accounts", (function(e, t, n) {
      return t.apply(void 0, fe(n(e)));
    })), function(e) {
      return Co.apply(this, arguments);
    }, function(e) {
      return Oo.apply(this, arguments);
    }, function(e) {
      return bo.apply(this, arguments);
    }, To("signatures", (function(e, t, n) {
      return t.apply(void 0, fe(n(e)));
    })), function(e) {
      return Io.apply(this, arguments);
    }, function(e) {
      return Eo.apply(this, arguments);
    }, function(e) {
      return So.apply(this, arguments);
    }, To("resolved", (function(e, t) {
      return t(e);
    })) ]);
    function Co() {
      return (Co = l(d().mark((function e(t) {
        var n, r;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (!Lr(t) || null != t.message.refBlock) {
              e.next = 11;
              break;
            }
            return e.next = 3, ue().get("accessNode.api");

           case 3:
            return n = e.sent, e.next = 6, ue.first([ "sdk.transport", "sdk.send" ], Mt);

           case 6:
            return se(r = e.sent, "Required value for sdk.transport is not defined in config. See: ".concat("https://github.com/onflow/fcl-js/blob/master/packages/sdk/CHANGELOG.md#0057-alpha1----2022-01-21")), 
            e.next = 10, r(ea([ na() ]), {
              config: ue,
              response: ta,
              Buffer: ve.Buffer,
              ix: Qr
            }, {
              node: n
            }).then(ba);

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
    function Oo() {
      return (Oo = l(d().mark((function e(t) {
        var n, r, a;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (!Lr(t)) {
              e.next = 20;
              break;
            }
            if (se(n = Object.values(t.accounts).find((function(e) {
              return e.role.proposer;
            })), "Transactions require a proposer"), null != n.sequenceNum) {
              e.next = 20;
              break;
            }
            return e.next = 6, ue().get("accessNode.api");

           case 6:
            return r = e.sent, e.next = 9, ue.first([ "sdk.transport", "sdk.send" ], Mt);

           case 9:
            return se(a = e.sent, "Required value for sdk.transport is not defined in config. See: ".concat("https://github.com/onflow/fcl-js/blob/master/packages/sdk/CHANGELOG.md#0057-alpha1----2022-01-21")), 
            e.t0 = a, e.next = 14, ea([ ra(n.addr) ]);

           case 14:
            return e.t1 = e.sent, e.t2 = {
              config: ue,
              response: ta,
              Buffer: ve.Buffer,
              ix: Qr
            }, e.t3 = {
              node: r
            }, e.next = 19, (0, e.t0)(e.t1, e.t2, e.t3).then(ba).then((function(e) {
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
    function Po() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      if (t.length > 1) {
        var r = t[0], a = t[1];
        return Po((function(e, t) {
          var n = t.Ok, o = t.Bad;
          return r ? n(e) : o(e, a);
        }));
      }
      var o = t[0];
      return function(e) {
        return o(e, {
          Ok: vr,
          Bad: hr
        });
      };
    }
    var No = function() {
      var e = l(d().mark((function e() {
        var t, n, r, a, o = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return t = o.length > 0 && void 0 !== o[0] ? o[0] : [], n = o.length > 1 && void 0 !== o[1] ? o[1] : {}, e.next = 4, ue.first([ "sdk.transport", "sdk.send" ], n.send || Mt);

           case 4:
            return Po(r = e.sent, "Required value for sdk.transport is not defined in config. See: ".concat("https://github.com/onflow/fcl-js/blob/master/packages/sdk/CHANGELOG.md#0057-alpha1----2022-01-21")), 
            e.next = 8, ue.first([ "sdk.resolve" ], n.resolve || _o);

           case 8:
            if (a = e.sent, e.t0 = n.node, e.t0) {
              e.next = 14;
              break;
            }
            return e.next = 13, ue().get("accessNode.api");

           case 13:
            e.t0 = e.sent;

           case 14:
            return n.node = e.t0, Array.isArray(t) && (t = Vr(ar(), t)), e.t1 = r, e.next = 19, a(t);

           case 19:
            return e.t2 = e.sent, e.t3 = {
              config: ue,
              response: ta,
              ix: Qr,
              Buffer: ve.Buffer
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
    function Lo(e) {
      return Fo.apply(this, arguments);
    }
    function Fo() {
      return Fo = l(d().mark((function e(t) {
        var n, r;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.next = 2, ue().where(/^decoder\./);

           case 2:
            return n = e.sent, r = Object.entries(n).map((function(e) {
              var t = s(e, 2), n = t[0], r = t[1];
              return [ n = "/".concat(n.replace(/^decoder\./, ""), "$/"), r ];
            })), e.abrupt("return", ba(t, Object.fromEntries(r)));

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      }))), Fo.apply(this, arguments);
    }
    var jo = function(e) {
      Ie(n, e);
      var t = Te(n);
      function n(e) {
        var r;
        ke(this, n);
        var a = "\n        Encode Message From Signable Error: Unable to determine message encoding for signer addresss: ".concat(e, ". \n        Please ensure the address: ").concat(e, " is intended to sign the given transaction as specified by the transaction signable.\n      ").trim();
        return (r = t.call(this, a)).name = "Unable To Determine Message Encoding For Signer Addresss", r;
      }
      return xe(n);
    }(Ce(Error));
    function Go(e) {
      return Zr("ix.validators", (function(t) {
        return Array.isArray(t) ? t.push(e) : [ e ];
      }));
    }
    function Do(e) {
      return Vr([ function(t) {
        return t.block.height = e, t;
      }, Go((function(e) {
        if ("boolean" == typeof e.block.isSealed) throw new Error("Unable to specify both block height and isSealed.");
        if (e.block.id) throw new Error("Unable to specify both block height and block id.");
        return e;
      })) ]);
    }
    function Uo(e) {
      return Vr([ function(t) {
        return t.block.id = e, vr(t);
      }, Go((function(e, t) {
        var n = t.Ok, r = t.Bad;
        return Gr(e) ? r(e, "Unable to specify a block id with a Get Account interaction.") : "boolean" == typeof e.block.isSealed ? r(e, "Unable to specify both block id and isSealed.") : e.block.height ? r(e, "Unable to specify both block id and block height.") : n(e);
      })) ]);
    }
    function Bo(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.height, r = t.id;
      var a = arguments.length > 2 ? arguments[2] : void 0;
      return se(!(r && n), "Method: account -- Cannot pass \"id\" and \"height\" simultaneously"), r ? No([ ra(e), Uo(r) ], a).then(ba) : n ? No([ ra(e), Do(n) ], a).then(ba) : No([ ra(e) ], a).then(ba);
    }
    function Mo() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.sealed, n = void 0 !== t && t, r = e.id, a = e.height;
      var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return se(!(n && r || n && a), "Method: block -- Cannot pass \"sealed\" with \"id\" or \"height\""), se(!(r && a), "Method: block -- Cannot pass \"id\" and \"height\" simultaneously"), 
      r ? No([ na(), Uo(r) ], o).then(ba) : a ? No([ na(), Do(a) ], o).then(ba) : No([ na(n) ], o).then(ba);
    }
    function zo() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return Vr(e.map((function(e) {
        return yr(e, {
          role: $n
        });
      })));
    }
    function Yo(e, t, n, r) {
      return {
        addr: e,
        signingFunction: t,
        keyId: n,
        sequenceNum: r
      };
    }
    function qo(e, t, n) {
      return void 0 === t && void 0 === n || de.deprecate({
        pkg: "FCL/SDK",
        subject: "Passing a start and end into getEvents",
        transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0005-deprecate-start-end-get-events-builder"
      }), Vr([ Rr, function(r) {
        return r.events.eventType = e, r.events.start = t, r.events.end = n, vr(r);
      } ]);
    }
    function Ho(e, t, n) {
      return Vr([ Rr, function(r) {
        return r.events.eventType = e, r.events.start = t, r.events.end = n, vr(r);
      } ]);
    }
    function Ko(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return Vr([ Rr, function(n) {
        return n.events.eventType = e, n.events.blockIds = t, vr(n);
      } ]);
    }
    function Wo() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      return Vr([ _r, function(t) {
        return t.block.isSealed = e, vr(t);
      } ]);
    }
    function Vo() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      return Vr([ Cr, function(t) {
        return t.collection.id = e, t;
      } ]);
    }
    function Jo(e) {
      return Vr([ Er, function(t) {
        return t.transaction.id = e, vr(t);
      } ]);
    }
    function Xo(e) {
      return Vr([ Ir, function(t) {
        return t.transaction.id = e, vr(t);
      } ]);
    }
    function $o(e) {
      return function(t) {
        return t.message.computeLimit = e, t;
      };
    }
    function Zo() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return Vr(e.map(br));
    }
    function Qo(e, t) {
      return {
        value: e,
        xform: t
      };
    }
    function eu(e) {
      return tu.apply(this, arguments);
    }
    function tu() {
      return tu = l(d().mark((function e(t) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.abrupt("return", yr(t, {
              role: Qn
            }));

           case 1:
           case "end":
            return e.stop();
          }
        }), e);
      }))), tu.apply(this, arguments);
    }
    function nu(e) {
      return ru.apply(this, arguments);
    }
    function ru() {
      return ru = l(d().mark((function e(t) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.abrupt("return", yr(t, {
              role: Zn
            }));

           case 1:
           case "end":
            return e.stop();
          }
        }), e);
      }))), ru.apply(this, arguments);
    }
    function au() {
      return Ar;
    }
    function ou(e) {
      return Vr([ function(t) {
        return t.message.refBlock = e, vr(t);
      } ]);
    }
    function uu() {
      return Vr([ xr, $r("ix.cadence", Nn.apply(void 0, arguments)) ]);
    }
    var cu = [];
    function iu() {
      return Vr([ kr, $r("ix.cadence", Nn.apply(void 0, arguments)), function(e) {
        return e.message.refBlock = e.message.refBlock || null, e.authorizations = e.authorizations || cu, vr(e);
      } ]);
    }
    function su(e) {
      return $r("ix.voucher-intercept", e);
    }
    function fu(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5;
      se(e.account, "mockAccountResponse(ix) -- ix.account is missing", e), se(e.account.addr, "mockAccountResponse(ix) -- ix.account.addr is missing", e);
      var n = e.account.addr;
      return {
        account: {
          addr: n,
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
    function lu(e) {
      return {
        tag: "GET_BLOCK",
        block: {
          id: "32"
        }
      };
    }
    var pu = function(e) {
      return e;
    };
    var du = [ "tempId" ];
    function vu(e) {
      return [ "SIGNATURE", e.addr, e.keyId ].join(".");
    }
    function hu() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return function(t) {
        var n = b(b(b({}, t), e), {}, {
          signingFunction: e.signingFunction || t.signingFunction || function(e) {
            return {
              addr: n.addr,
              keyId: n.keyId,
              signature: vu(n)
            };
          }
        });
        return n;
      };
    }
    var mu = {
      proposer: !1,
      authorizer: !1,
      payer: !1
    };
    var gu = Object.freeze({
      __proto__: null,
      mockSend: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pu;
        return function() {
          var t = l(d().mark((function t(n) {
            return d().wrap((function(t) {
              for (;;) switch (t.prev = t.next) {
               case 0:
                return t.next = 2, n;

               case 2:
                n = t.sent, t.t0 = !0, t.next = t.t0 === Gr(n) ? 6 : t.t0 === Br(n) ? 7 : 8;
                break;

               case 6:
                return t.abrupt("return", fu(n));

               case 7:
                return t.abrupt("return", lu());

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
      authzFn: hu,
      authzResolve: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return function(t) {
          var n = e.tempId, r = Ln(e, du);
          return b(b({}, t), {}, {
            tempId: n || "WITH_RESOLVE",
            resolve: hu(r)
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
              return [ e.proposer && hu(e.proposer)({
                role: b(b({}, mu), {}, {
                  proposer: !0
                })
              }) ].concat(fe(e.authorizations.map(hu).map((function(e) {
                return e({
                  role: b(b({}, mu), {}, {
                    authorizer: !0
                  })
                });
              }))), [ e.payer && hu(e.payer)({
                role: b(b({}, mu), {}, {
                  payer: !0
                })
              }) ]).filter(Boolean);
            }
          });
        };
      },
      sig: vu,
      idof: function(e) {
        return "".concat(Le(e.addr), "-").concat(e.keyId);
      },
      run: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return ea([ ou("123") ].concat(fe(e))).then(_o);
      }
    });
    var yu = function(e) {
      return de.deprecate({
        pkg: "FCL/SDK",
        message: "The params builder has been removed from the Flow JS-SDK/FCL.",
        transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0001-deprecate-params",
        level: le.error
      });
    };
    var bu = function(e) {
      return de.deprecate({
        pkg: "FCL/SDK",
        message: "The param builder has been removed from the Flow JS-SDK/FCL.",
        transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0001-deprecate-params",
        level: le.error
      });
    };
    var wu;
    var xu = 'function' == typeof queueMicrotask ? queueMicrotask : function(e) {
      return (wu || (wu = Promise.resolve())).then(e).catch((function(e) {
        return setTimeout((function() {
          throw e;
        }), 0);
      }));
    };
    var ku = function() {
      var e = [];
      var t;
      return {
        deliver: function(n) {
          return l(d().mark((function r() {
            return d().wrap((function(r) {
              for (;;) switch (r.prev = r.next) {
               case 0:
                e.push(n), t && (t(e.shift()), t = void 0);

               case 2:
               case "end":
                return r.stop();
              }
            }), r);
          })))();
        },
        receive: function() {
          return new Promise((function(n) {
            var r = e.shift();
            if (r) return n(r);
            t = n;
          }));
        }
      };
    };
    var Eu = "SUBSCRIBE";
    var Iu = "UNSUBSCRIBE";
    var Su = "UPDATED";
    var Ru = "EXIT";
    var Au = "object" === ("undefined" == typeof self ? "undefined" : m(self)) && self.self === self && self || "object" === (void 0 === n.g ? "undefined" : m(n.g)) && n.g.global === n.g && n.g || "object" === ("undefined" == typeof window ? "undefined" : m(window)) && window.window === window && window;
    Au.FCL_REGISTRY = null == Au.FCL_REGISTRY ? {} : Au.FCL_REGISTRY;
    var Tu = 0;
    var _u = function(e, t, n) {
      var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return new Promise((function(a, o) {
        var u = r.expectReply || !1;
        var c = null != r.timeout ? r.timeout : 5e3;
        u && c && setTimeout((function() {
          return o(new Error("Timeout: ".concat(c, "ms passed without a response.")));
        }), c);
        var i = {
          to: e,
          from: r.from,
          tag: t,
          data: n,
          timeout: c,
          reply: a,
          reject: o
        };
        try {
          Au.FCL_REGISTRY[e] && Au.FCL_REGISTRY[e].mailbox.deliver(i), u || a(!0);
        } catch (s) {
          console.error("FCL.Actor -- Could Not Deliver Message", i, Au.FCL_REGISTRY[e], s);
        }
      }));
    };
    var Cu = function(e) {
      delete Au.FCL_REGISTRY[e];
    };
    var Ou = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return function() {
        var t = l(d().mark((function t(n) {
          var r;
          return d().wrap((function(t) {
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
              if (r = t.sent, t.prev = 7, r.tag !== Ru) {
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
    };
    var Pu = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (null == t && (t = ++Tu), null != Au.FCL_REGISTRY[t]) return t;
      Au.FCL_REGISTRY[t] = {
        addr: t,
        mailbox: ku(),
        subs: new Set,
        kvs: {},
        error: null
      };
      var n = {
        self: function() {
          return t;
        },
        receive: function() {
          return Au.FCL_REGISTRY[t].mailbox.receive();
        },
        send: function(e, n, r) {
          var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return a.from = t, _u(e, n, r, a);
        },
        sendSelf: function(e, n, r) {
          Au.FCL_REGISTRY[t] && _u(t, e, n, r);
        },
        broadcast: function(e, n) {
          var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          r.from = t;
          var a, o = w(Au.FCL_REGISTRY[t].subs);
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var u = a.value;
              _u(u, e, n, r);
            }
          } catch (c) {
            o.e(c);
          } finally {
            o.f();
          }
        },
        subscribe: function(e) {
          return null != e && Au.FCL_REGISTRY[t].subs.add(e);
        },
        unsubscribe: function(e) {
          return null != e && Au.FCL_REGISTRY[t].subs.delete(e);
        },
        subscriberCount: function() {
          return Au.FCL_REGISTRY[t].subs.size;
        },
        hasSubs: function() {
          return !!Au.FCL_REGISTRY[t].subs.size;
        },
        put: function(e, n) {
          null != e && (Au.FCL_REGISTRY[t].kvs[e] = n);
        },
        get: function(e, n) {
          var r = Au.FCL_REGISTRY[t].kvs[e];
          return null == r ? n : r;
        },
        delete: function(e) {
          delete Au.FCL_REGISTRY[t].kvs[e];
        },
        update: function(e, n) {
          null != e && (Au.FCL_REGISTRY[t].kvs[e] = n(Au.FCL_REGISTRY[t].kvs[e]));
        },
        keys: function() {
          return Object.keys(Au.FCL_REGISTRY[t].kvs);
        },
        all: function() {
          return Au.FCL_REGISTRY[t].kvs;
        },
        where: function(e) {
          return Object.keys(Au.FCL_REGISTRY[t].kvs).reduce((function(n, r) {
            return e.test(r) ? b(b({}, n), {}, g({}, r, Au.FCL_REGISTRY[t].kvs[r])) : n;
          }), {});
        },
        merge: function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          Object.keys(e).forEach((function(n) {
            return Au.FCL_REGISTRY[t].kvs[n] = e[n];
          }));
        },
        fatalError: function(e) {
          Au.FCL_REGISTRY[t].error = e;
          var n, r = w(Au.FCL_REGISTRY[t].subs);
          try {
            for (r.s(); !(n = r.n()).done; ) {
              var a = n.value;
              _u(a, Su);
            }
          } catch (o) {
            r.e(o);
          } finally {
            r.f();
          }
        }
      };
      return "object" === m(e) && (e = Ou(e)), xu(l(d().mark((function r() {
        return d().wrap((function(r) {
          for (;;) switch (r.prev = r.next) {
           case 0:
            return r.next = 2, e(n);

           case 2:
            Cu(t);

           case 3:
           case "end":
            return r.stop();
          }
        }), r);
      })))), t;
    };
    var Nu;
    var Lu = "config";
    var Fu = "PUT_CONFIG";
    var ju = "GET_CONFIG";
    var Gu = "GET_ALL_CONFIG";
    var Du = "UPDATE_CONFIG";
    var Uu = "DELETE_CONFIG";
    var Bu = "CLEAR_CONFIG";
    var Mu = "WHERE_CONFIG";
    var zu = "CONFIG/UPDATED";
    var Yu = function(e) {
      return e;
    };
    var qu = (g(Nu = {}, Fu, (function(e, t, n) {
      var r = n.key, a = n.value;
      if (null == r) throw new Error("Missing 'key' for config/put.");
      e.put(r, a), e.broadcast(zu, b({}, e.all()));
    })), g(Nu, ju, (function(e, t, n) {
      var r = n.key, a = n.fallback;
      if (null == r) throw new Error("Missing 'key' for config/get");
      t.reply(e.get(r, a));
    })), g(Nu, Gu, (function(e, t) {
      t.reply(b({}, e.all()));
    })), g(Nu, Du, (function(e, t, n) {
      var r = n.key, a = n.fn;
      if (null == r) throw new Error("Missing 'key' for config/update");
      e.update(r, a || Yu), e.broadcast(zu, b({}, e.all()));
    })), g(Nu, Uu, (function(e, t, n) {
      var r = n.key;
      if (null == r) throw new Error("Missing 'key' for config/delete");
      e.delete(r), e.broadcast(zu, b({}, e.all()));
    })), g(Nu, Bu, (function(e, t) {
      for (var n = 0, r = Object.keys(e.all()); n < r.length; n++) {
        var a = r[n];
        e.delete(a);
      }
      e.broadcast(zu, b({}, e.all()));
    })), g(Nu, Mu, (function(e, t, n) {
      var r = n.pattern;
      if (null == r) throw new Error("Missing 'pattern' for config/where");
      t.reply(e.where(r));
    })), g(Nu, Eu, (function(e, t) {
      e.subscribe(t.from), e.send(t.from, zu, b({}, e.all()));
    })), g(Nu, Iu, (function(e, t) {
      e.unsubscribe(t.from);
    })), Nu);
    function Hu(e, t) {
      return _u(Lu, Fu, {
        key: e,
        value: t
      }), tc();
    }
    function Ku(e, t) {
      return _u(Lu, ju, {
        key: e,
        fallback: t
      }, {
        expectReply: !0,
        timeout: 10
      });
    }
    function Wu() {
      return Vu.apply(this, arguments);
    }
    function Vu() {
      return Vu = l(d().mark((function e() {
        var t, n, r, a, o, u, c = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (t = c.length > 0 && void 0 !== c[0] ? c[0] : [], n = c.length > 1 ? c[1] : void 0, t.length) {
              e.next = 4;
              break;
            }
            return e.abrupt("return", n);

           case 4:
            return r = h(t), a = r[0], o = r.slice(1), e.next = 7, Ku(a);

           case 7:
            if (null != (u = e.sent)) {
              e.next = 10;
              break;
            }
            return e.abrupt("return", Wu(o, n));

           case 10:
            return e.abrupt("return", u);

           case 11:
           case "end":
            return e.stop();
          }
        }), e);
      }))), Vu.apply(this, arguments);
    }
    function Ju() {
      return _u(Lu, Gu, null, {
        expectReply: !0,
        timeout: 10
      });
    }
    function Xu(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yu;
      return _u(Lu, Du, {
        key: e,
        fn: t
      }), tc();
    }
    function $u(e) {
      return _u(Lu, Uu, {
        key: e
      }), tc();
    }
    function Zu(e) {
      return _u(Lu, Mu, {
        pattern: e
      }, {
        expectReply: !0,
        timeout: 10
      });
    }
    function Qu(e) {
      return function(e, t, n) {
        t(e);
        var r = "@EXIT";
        var a = Pu(function() {
          var t = l(d().mark((function t(a) {
            var o, u;
            return d().wrap((function(t) {
              for (;;) switch (t.prev = t.next) {
               case 0:
                a.send(e, Eu);

               case 1:
                return t.next = 4, a.receive();

               case 4:
                if (o = t.sent, u = Au.FCL_REGISTRY[e].error, o.tag !== r) {
                  t.next = 9;
                  break;
                }
                return a.send(e, Iu), t.abrupt("return");

               case 9:
                if (!u) {
                  t.next = 13;
                  break;
                }
                return n(null, u), a.send(e, Iu), t.abrupt("return");

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
          return _u(a, r);
        };
      }(Lu, (function() {
        return Pu(qu, Lu);
      }), e);
    }
    function ec(e) {
      return function() {
        return _u(Lu, Bu);
      }().then(tc(e));
    }
    function tc(e) {
      return null != e && "object" === m(e) && Object.keys(e).map((function(t) {
        return Hu(t, e[t]);
      })), {
        put: Hu,
        get: Ku,
        all: Ju,
        first: Wu,
        update: Xu,
        delete: $u,
        where: Zu,
        subscribe: Qu,
        overload: rc
      };
    }
    Pu(qu, Lu), tc.put = Hu, tc.get = Ku, tc.all = Ju, tc.first = Wu, tc.update = Xu, tc.delete = $u, tc.where = Zu, tc.subscribe = Qu, 
    tc.overload = rc;
    var nc = function(e) {
      return e;
    };
    function rc() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nc;
      return new Promise(function() {
        var n = l(d().mark((function n(r, a) {
          var o, u;
          return d().wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
             case 0:
              return n.next = 2, Ju();

             case 2:
              return o = n.sent, n.prev = 3, tc(e), n.t0 = t, n.next = 8, Ju();

             case 8:
              return n.t1 = n.sent, n.next = 11, (0, n.t0)(n.t1);

             case 11:
              return u = n.sent, n.next = 14, ec(o);

             case 14:
              r(u), n.next = 22;
              break;

             case 17:
              return n.prev = 17, n.t2 = n.catch(3), n.next = 21, ec(o);

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
    var ac = Object.freeze({
      debug: 5,
      info: 4,
      log: 3,
      warn: 2,
      error: 1
    });
    var oc = function(e) {
      var t = e.title, n = e.message;
      return [ "\n    %c".concat(t, "\n    ============================\n\n    ").concat(n, "\n\n    ============================\n    ").replace(/\n[^\S\r\n]+/g, "\n").trim(), , "font-weight:bold;font-family:monospace;" ];
    };
    var uc = function() {
      var e = l(d().mark((function e(t) {
        var n, r, a, o, u;
        var c, i, s, f, l, p, v;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return c = t.title, i = t.message, s = t.level, f = t.always, l = void 0 !== f && f, e.next = 3, tc.get("logger.level", ac.warn);

           case 3:
            if (p = e.sent, l || !(p < s)) {
              e.next = 6;
              break;
            }
            return e.abrupt("return");

           case 6:
            v = oc({
              title: c,
              message: i
            }), e.t0 = s, e.next = e.t0 === ac.debug ? 10 : e.t0 === ac.info ? 12 : e.t0 === ac.warn ? 14 : e.t0 === ac.error ? 16 : 18;
            break;

           case 10:
            return (n = console).debug.apply(n, fe(v)), e.abrupt("break", 19);

           case 12:
            return (r = console).info.apply(r, fe(v)), e.abrupt("break", 19);

           case 14:
            return (a = console).warn.apply(a, fe(v)), e.abrupt("break", 19);

           case 16:
            return (o = console).error.apply(o, fe(v)), e.abrupt("break", 19);

           case 18:
            (u = console).log.apply(u, fe(v));

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
    uc.deprecate = function(e) {
      var t = e.pkg, n = e.subject, r = e.transition, a = e.level, o = void 0 === a ? ac.warn : a, u = e.message, c = void 0 === u ? "" : u, i = e.callback, s = void 0 === i ? null : i;
      var f = function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      };
      var p = function() {
        return uc({
          title: "".concat(t ? t + " " : "", "Deprecation Notice"),
          message: "\n      ".concat(n ? "".concat(f(n), " is deprecated and will cease to work in future releases").concat(t ? " of " + t : "", ".") : "").concat(c ? "\n" + c : "").concat(r ? "\nYou can learn more (including a guide on common transition paths) here: ".concat(r) : "", "\n    ").trim(),
          level: o
        });
      };
      return "function" == typeof s ? l(d().mark((function e() {
        var t = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.next = 2, p();

           case 2:
            return e.next = 4, s.apply(void 0, t);

           case 4:
            return e.abrupt("return", e.sent);

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      }))) : p();
    };
    var cc = function(e, t, n) {
      return {
        label: e,
        asArgument: t,
        asInjection: n
      };
    };
    var ic = function(e) {
      return Array.isArray(e);
    };
    var sc = function(e) {
      return "object" === m(e);
    };
    var fc = function(e) {
      return null == e;
    };
    var lc = function(e) {
      return "number" == typeof e;
    };
    var pc = function(e) {
      return Number.isInteger(e);
    };
    var dc = function(e) {
      return "string" == typeof e;
    };
    var vc = function(e) {
      throw new Error("Type Error: " + e);
    };
    var hc = function(e) {
      uc.deprecate({
        pkg: "@onflow/types",
        subject: "Passing in Number as value for ".concat(e),
        message: "Going forward, use String as value for ".concat(e, "."),
        transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/types/WARNINGS.md#0002-[U]Int*-and-Word*-as-Number"
      });
    };
    var mc = cc("Identity", (function(e) {
      return e;
    }), (function(e) {
      return e;
    }));
    var gc = cc("UInt", (function(e) {
      return lc(e) && pc(e) ? (hc("UInt"), {
        type: "UInt",
        value: e.toString()
      }) : dc(e) ? {
        type: "UInt",
        value: e
      } : void vc("Expected Positive Integer for type Unsigned Int");
    }), (function(e) {
      return e;
    }));
    var yc = cc("Int", (function(e) {
      return lc(e) && pc(e) ? (hc("Int"), {
        type: "Int",
        value: e.toString()
      }) : dc(e) ? {
        type: "Int",
        value: e
      } : void vc("Expected Integer for type Int");
    }), (function(e) {
      return e;
    }));
    var bc = cc("UInt8", (function(e) {
      return lc(e) && pc(e) ? (hc("UInt8"), {
        type: "UInt8",
        value: e.toString()
      }) : dc(e) ? {
        type: "UInt8",
        value: e
      } : void vc("Expected integer for UInt8");
    }), (function(e) {
      return e;
    }));
    var wc = cc("Int8", (function(e) {
      return lc(e) && pc(e) ? (hc("Int8"), {
        type: "Int8",
        value: e.toString()
      }) : dc(e) ? {
        type: "Int8",
        value: e
      } : void vc("Expected positive integer for Int8");
    }), (function(e) {
      return e;
    }));
    var xc = cc("UInt16", (function(e) {
      return lc(e) && pc(e) ? (hc("UInt16"), {
        type: "UInt16",
        value: e.toString()
      }) : dc(e) ? {
        type: "UInt16",
        value: e
      } : void vc("Expected integer for UInt16");
    }), (function(e) {
      return e;
    }));
    var kc = cc("Int16", (function(e) {
      return lc(e) && pc(e) ? (hc("Int16"), {
        type: "Int16",
        value: e.toString()
      }) : dc(e) ? {
        type: "Int16",
        value: e
      } : void vc("Expected positive integer for Int16");
    }), (function(e) {
      return e;
    }));
    var Ec = cc("UInt32", (function(e) {
      return lc(e) && pc(e) ? (hc("UInt32"), {
        type: "UInt32",
        value: e.toString()
      }) : dc(e) ? {
        type: "UInt32",
        value: e
      } : void vc("Expected integer for UInt32");
    }), (function(e) {
      return e;
    }));
    var Ic = cc("Int32", (function(e) {
      return lc(e) && pc(e) ? (hc("Int32"), {
        type: "Int32",
        value: e.toString()
      }) : dc(e) ? {
        type: "Int32",
        value: e
      } : void vc("Expected positive integer for Int32");
    }), (function(e) {
      return e;
    }));
    var Sc = cc("UInt64", (function(e) {
      return lc(e) && pc(e) ? (hc("UInt64"), {
        type: "UInt64",
        value: e.toString()
      }) : dc(e) ? {
        type: "UInt64",
        value: e
      } : void vc("Expected integer for UInt64");
    }), (function(e) {
      return e;
    }));
    var Rc = cc("Int64", (function(e) {
      return lc(e) && pc(e) ? (hc("Int64"), {
        type: "Int64",
        value: e.toString()
      }) : dc(e) ? {
        type: "Int64",
        value: e
      } : void vc("Expected positive integer for Int64");
    }), (function(e) {
      return e;
    }));
    var Ac = cc("UInt128", (function(e) {
      return lc(e) && pc(e) ? (hc("UInt128"), {
        type: "UInt128",
        value: e.toString()
      }) : dc(e) ? {
        type: "UInt128",
        value: e
      } : void vc("Expected integer for UInt128");
    }), (function(e) {
      return e;
    }));
    var Tc = cc("Int128", (function(e) {
      return lc(e) && pc(e) ? (hc("Int128"), {
        type: "Int128",
        value: e.toString()
      }) : dc(e) ? {
        type: "Int128",
        value: e
      } : void vc("Expected positive integer for Int128");
    }), (function(e) {
      return e;
    }));
    var _c = cc("UInt256", (function(e) {
      return lc(e) && pc(e) ? (hc("UInt256"), {
        type: "UInt256",
        value: e.toString()
      }) : dc(e) ? {
        type: "UInt256",
        value: e
      } : void vc("Expected integer for UInt256");
    }), (function(e) {
      return e;
    }));
    var Cc = cc("Int256", (function(e) {
      return lc(e) && pc(e) ? (hc("Int256"), {
        type: "Int256",
        value: e.toString()
      }) : dc(e) ? {
        type: "Int256",
        value: e
      } : void vc("Expected integer for Int256");
    }), (function(e) {
      return e;
    }));
    var Oc = cc("Word8", (function(e) {
      return lc(e) && pc(e) ? (hc("Word8"), {
        type: "Word8",
        value: e.toString()
      }) : dc(e) ? {
        type: "Word8",
        value: e
      } : void vc("Expected positive number for Word8");
    }), (function(e) {
      return e;
    }));
    var Pc = cc("Word16", (function(e) {
      return lc(e) && pc(e) ? (hc("Word16"), {
        type: "Word16",
        value: e.toString()
      }) : dc(e) ? {
        type: "Word16",
        value: e
      } : void vc("Expected positive number for Word16");
    }), (function(e) {
      return e;
    }));
    var Nc = cc("Word32", (function(e) {
      return lc(e) && pc(e) ? (hc("Word32"), {
        type: "Word32",
        value: e.toString()
      }) : dc(e) ? {
        type: "Word32",
        value: e
      } : void vc("Expected positive number for Word32");
    }), (function(e) {
      return e;
    }));
    var Lc = cc("Word64", (function(e) {
      return lc(e) && pc(e) ? (hc("Word64"), {
        type: "Word64",
        value: e.toString()
      }) : dc(e) ? {
        type: "Word64",
        value: e
      } : void vc("Expected positive number for Word64");
    }), (function(e) {
      return e;
    }));
    var Fc = function() {
      uc.deprecate({
        subject: "Passing in Numbers as values for Fix64 and UFix64 types",
        pkg: "@onflow/types",
        transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/types/WARNINGS.md#0001-[U]Fix64-as-Number"
      });
    };
    var jc = cc("UFix64", (function(e) {
      if (dc(e)) {
        var t = e.split(".");
        return 2 !== t.length && vc("Expected one decimal but found ".concat(t.length, " in the [U]Fix64 value. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers")), 
        (0 == t[1].length || t[1].length > 8) && vc("Expected at least one digit, and at most 8 digits following the decimal of the [U]Fix64 value but found ".concat(t[1].length, " digits. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers")), 
        t[1] = t[1].padEnd(8, "0"), {
          type: "UFix64",
          value: e = t.join(".")
        };
      }
      if (lc(e)) return Fc(), {
        type: "UFix64",
        value: e.toString()
      };
      vc("Expected String for UFix64");
    }), (function(e) {
      return e;
    }));
    var Gc = cc("Fix64", (function(e) {
      if (dc(e)) {
        var t = e.split(".");
        return 2 !== t.length && vc("Expected one decimal but found ".concat(t.length, " in the [U]Fix64 value. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers")), 
        (0 == t[1].length || t[1].length > 8) && vc("Expected at least one digit, and at most 8 digits following the decimal of the [U]Fix64 value but found ".concat(t[1].length, " digits. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers")), 
        t[1] = t[1].padEnd(8, "0"), {
          type: "Fix64",
          value: e = t.join(".")
        };
      }
      if (lc(e)) return Fc(), {
        type: "Fix64",
        value: e.toString()
      };
      vc("Expected String for Fix64");
    }), (function(e) {
      return e;
    }));
    var Dc = cc("String", (function(e) {
      if (dc(e)) return {
        type: "String",
        value: e
      };
      vc("Expected String for type String");
    }), (function(e) {
      return e;
    }));
    var Uc = cc("Character", (function(e) {
      if (dc(e)) return {
        type: "Character",
        value: e
      };
      vc("Expected Character for type Character");
    }), (function(e) {
      return e;
    }));
    var Bc = cc("Bool", (function(e) {
      if (function(e) {
        return "boolean" == typeof e;
      }(e)) return {
        type: "Bool",
        value: e
      };
      vc("Expected Boolean for type Bool");
    }), (function(e) {
      return e;
    }));
    var Mc = cc("Address", (function(e) {
      if (dc(e)) return {
        type: "Address",
        value: e
      };
      vc("Expected Address for type Address");
    }), (function(e) {
      return e;
    }));
    var zc = cc("Void", (function(e) {
      if (!e || fc(e)) return {
        type: "Void"
      };
      vc("Expected Void for type Void");
    }), (function(e) {
      return e;
    }));
    var Yc = function(e) {
      return cc("Optional", (function(t) {
        return {
          type: "Optional",
          value: fc(t) ? null : e.asArgument(t)
        };
      }), (function(e) {
        return e;
      }));
    };
    var qc = cc("Reference", (function(e) {
      if (sc(e)) return {
        type: "Reference",
        value: e
      };
      vc("Expected Object for type Reference");
    }), (function(e) {
      return e;
    }));
    var Hc = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return cc("Array", (function(t) {
        return {
          type: "Array",
          value: ic(e) ? e.map((function(e, n) {
            return e.asArgument(t[n]);
          })) : t.map((function(t) {
            return e.asArgument(t);
          }))
        };
      }), (function(e) {
        return e;
      }));
    };
    var Kc = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return cc("Dictionary", (function(t) {
        if (sc(t)) return {
          type: "Dictionary",
          value: ic(e) ? e.map((function(e, n) {
            return {
              key: e.key.asArgument(t[n].key),
              value: e.value.asArgument(t[n].value)
            };
          })) : ic(t) ? t.map((function(t) {
            return {
              key: e.key.asArgument(t.key),
              value: e.value.asArgument(t.value)
            };
          })) : [ {
            key: e.key.asArgument(t.key),
            value: e.value.asArgument(t.value)
          } ]
        };
        vc("Expected Object for type Dictionary");
      }), (function(e) {
        return e;
      }));
    };
    var Wc = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return cc("Event", (function(n) {
        if (sc(n)) return {
          type: "Event",
          value: {
            id: e,
            fields: ic(t) ? t.map((function(e, t) {
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
        vc("Expected Object for type Event");
      }), (function(e) {
        return e;
      }));
    };
    var Vc = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return cc("Resource", (function(n) {
        if (sc(n)) return {
          type: "Resource",
          value: {
            id: e,
            fields: ic(t) ? t.map((function(e, t) {
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
        vc("Expected Object for type Resource");
      }), (function(e) {
        return e;
      }));
    };
    var Jc = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return cc("Struct", (function(n) {
        if (sc(n)) return {
          type: "Struct",
          value: {
            id: e,
            fields: ic(t) ? t.map((function(e, t) {
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
        vc("Expected Object for type Struct");
      }), (function(e) {
        return e;
      }));
    };
    var Xc = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return cc("Enum", (function(n) {
        if (sc(n)) return {
          type: "Enum",
          value: {
            id: e,
            fields: ic(t) ? t.map((function(e, t) {
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
        vc("Expected Object for type Enum");
      }), (function(e) {
        return e;
      }));
    };
    var $c = cc("Path", (function(e) {
      if (sc(e)) return dc(e.domain) || vc("Expected a string for the Path domain but found ".concat(e.domain, ". Find out more about the Path type here: https://docs.onflow.org/cadence/json-cadence-spec/#path")), 
      "storage" !== e.domain && "private" !== e.domain && "public" !== e.domain && vc("Expected either \"storage\", \"private\" or \"public\" as the Path domain but found ".concat(e.domain, ". Find out more about the Path type here: https://docs.onflow.org/cadence/json-cadence-spec/#path")), 
      dc(e.identifier) || vc("Expected a string for the Path identifier but found ".concat(e.identifier, ". Find out more about the Path type here: https://docs.onflow.org/cadence/json-cadence-spec/#path")), 
      {
        type: "Path",
        value: {
          domain: e.domain,
          identifier: e.identifier
        }
      };
      vc("Expected Object for type Path");
    }), (function(e) {
      return e;
    }));
    var Zc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var Qc = Zc.length;
    function ei() {
      var e = "", t = 32;
      for (;t--; ) e += Zc[Math.random() * Qc | 0];
      return e;
    }
    function ti(e) {
      return ni.apply(this, arguments);
    }
    function ni() {
      return (ni = l(d().mark((function e(t) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.t0 = Object, e.t1 = Object, e.next = 4, ue().where(t);

           case 4:
            return e.t2 = e.sent, e.t3 = e.t1.entries.call(e.t1, e.t2).map((function(e) {
              var n = s(e, 2), r = n[0], a = n[1];
              return [ r.replace(t, ""), a ];
            })), e.abrupt("return", e.t0.fromEntries.call(e.t0, e.t3));

           case 7:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    ue({
      "discovery.wallet.method.default": "IFRAME/RPC",
      "fcl.storage.default": {
        can: !function() {
          return "undefined" == typeof window;
        }(),
        get: function() {
          var e = l(d().mark((function e(t) {
            return d().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.abrupt("return", JSON.parse(sessionStorage.getItem(t)));

               case 1:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t) {
            return e.apply(this, arguments);
          };
        }(),
        put: function() {
          var e = l(d().mark((function e(t, n) {
            return d().wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
               case 0:
                return e.abrupt("return", sessionStorage.setItem(t, JSON.stringify(n)));

               case 1:
               case "end":
                return e.stop();
              }
            }), e);
          })));
          return function(t, n) {
            return e.apply(this, arguments);
          };
        }()
      }
    });
    var ri = "1.3.2";
    var ai = function(e) {
      return function(t) {
        return m(t) === e;
      };
    };
    var oi = function(e) {
      return null != e;
    };
    var ui = ai("object");
    var ci = ai("string");
    var ii = ai("function");
    var si = ai("number");
    function fi(e) {
      return ii(e) ? e(Qo, r) : [];
    }
    function li(e) {
      return pi.apply(this, arguments);
    }
    function pi() {
      return (pi = l(d().mark((function e(t) {
        var n, r, a;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return se(void 0 !== (n = t.url), "retrieve({ url }) -- url must be defined"), e.prev = 2, e.next = 5, Pe()(n);

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
    var di = new Map([ [ "http", li ], [ "https", li ] ]);
    function vi(e) {
      return hi.apply(this, arguments);
    }
    function hi() {
      return (hi = l(d().mark((function e(t) {
        var n, r, a, o, u, c;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return se(void 0 !== (n = t.url), "retrieve({ url }) -- url must be defined"), se("string" == typeof n, "retrieve({ url }) -- url must be a string"), 
            e.next = 5, ue().where(/^document\.resolver\./);

           case 5:
            return r = e.sent, Object.keys(r).map((function(e) {
              var t = r[e];
              var n = e.replace(/^document\.resolver\./, "");
              di.set(n, t);
            })), se(a = /^(.*):\/\/([A-Za-z0-9\-\.]+)(:[0-9]+)?(.*)$/.exec(n), "Failed to parse URL"), o = a[1], se(a, "Failed to parse URL protocol"), 
            se(u = di.get(o), "No resolver found for protcol=".concat(o)), e.next = 15, u({
              url: n
            });

           case 15:
            return c = e.sent, e.abrupt("return", c);

           case 17:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    function mi(e) {
      if (null == e) return null;
      if ("1.0.0" === e.f_version) return e;
      throw new Error("normalizeInteractionTemplate Error: Invalid InteractionTemplate");
    }
    function gi(e) {
      var t, n;
      var r = e.network, a = e.template;
      if (Po(null != r, "deriveCadenceByNetwork({ network }) -- network must be defined"), Po("string" == typeof r, "deriveCadenceByNetwork({ network }) -- network must be a string"), 
      Po(null != a, "generateDependencyPin({ template }) -- template must be defined"), Po("object" === m(a), "generateDependencyPin({ template }) -- template must be an object"), 
      Po("InteractionTemplate" === a.f_type, "generateDependencyPin({ template }) -- template must be an InteractionTemplate"), 
      "1.0.0" === (a = mi(a)).f_version) return Object.keys(null === (t = a) || void 0 === t || null === (n = t.data) || void 0 === n ? void 0 : n.dependencies).map((function(e) {
        var t, n, o;
        var u = Object.values(null === (t = a) || void 0 === t || null === (n = t.data) || void 0 === n || null === (o = n.dependencies) || void 0 === o ? void 0 : o[e]);
        Po(u, "deriveCadenceByNetwork -- Could not find contracts for dependency placeholder: ".concat(e)), Po(0 === u.length, "deriveCadenceByNetwork -- Could not find contracts for dependency placeholder: ".concat(e));
        var c = u[0];
        var i = null == c ? void 0 : c[r];
        return Po(i, "deriveCadenceByNetwork -- Could not find ".concat(r, " network information for dependency: ").concat(e)), 
        [ e, i.address ];
      })).reduce((function(e, t) {
        var n = s(t, 2), r = n[0], a = n[1];
        var o = new RegExp("(\\b" + r + "\\b)", "g");
        return e.replace(o, a);
      }), a.data.cadence);
      throw new Error("deriveCadenceByNetwork Error: Unsupported template version");
    }
    function yi(e) {
      return bi.apply(this, arguments);
    }
    function bi() {
      return bi = l(d().mark((function e(t) {
        var n;
        var r, a, o, u, c, i, s, f, l, p, v, h;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return r = t.template, e.next = 3, ue.get("flow.network");

           case 3:
            se(a = e.sent, "FCL configureDependencies Error: Missing configuration value for 'flow.network'"), o = {}, e.t0 = r.f_version, 
            e.next = "1.0.0" === e.t0 ? 9 : 12;
            break;

           case 9:
            for (u = Object.keys(null == r || null === (n = r.data) || void 0 === n ? void 0 : n.dependencies), c = 0, i = u; c < i.length; c++) f = i[c], 
            l = null == r || null === (s = r.data) || void 0 === s ? void 0 : s.dependencies[f], se((p = Object.keys(l)).length > 0, "FCL configureDependencies Error: No contracts found in template for placeholder=".concat(f)), 
            v = l[p[0]], se(h = v[a], "FCL configureDependencies Error: No dependency information for placeholder=".concat(f, " contract=").concat(p[0], " network=").concat(a)), 
            se(null == h ? void 0 : h.address, "FCL configureDependencies Error: No address information for placeholder=".concat(f, " contract=").concat(p[0], " network=").concat(a)), 
            o[f] = Le(null == h ? void 0 : h.address);
            return e.abrupt("return", o);

           case 12:
            throw new Error("FCL configureDependencies Error: Unsupported template version");

           case 13:
           case "end":
            return e.stop();
          }
        }), e);
      }))), bi.apply(this, arguments);
    }
    function wi(e) {
      return xi.apply(this, arguments);
    }
    function xi() {
      return (xi = l(d().mark((function e(t) {
        var n, r;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (!ci(null == t ? void 0 : t.template)) {
              e.next = 4;
              break;
            }
            return e.next = 3, vi({
              url: null == t ? void 0 : t.template
            });

           case 3:
            t.template = e.sent;

           case 4:
            if (n = {}, null == t || !t.template) {
              e.next = 10;
              break;
            }
            return t.template = mi(null == t ? void 0 : t.template), e.next = 9, yi({
              template: t.template
            });

           case 9:
            n = e.sent;

           case 10:
            if (e.t0 = t.cadence, e.t0) {
              e.next = 19;
              break;
            }
            return e.t1 = gi, e.t2 = t.template, e.next = 16, ue().get("flow.network");

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
    function ki(e, t) {
      return Ei.apply(this, arguments);
    }
    function Ei() {
      return Ei = l(d().mark((function e(t, n) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (se(oi(n), "".concat(t, "(opts) -- opts is required")), se(ui(n), "".concat(t, "(opts) -- opts must be an object")), 
            se(!(n.cadence && n.template), "".concat(t, "({ template, cadence }) -- cannot pass both cadence and template")), se(oi(n.cadence || (null == n ? void 0 : n.template)), "".concat(t, "({ cadence }) -- cadence is required")), 
            se(ci(n.cadence) || (null == n ? void 0 : n.template), "".concat(t, "({ cadence }) -- cadence must be a string")), e.t0 = se, 
            e.t1 = n.cadence, e.t1) {
              e.next = 11;
              break;
            }
            return e.next = 10, ue().get("flow.network");

           case 10:
            e.t1 = e.sent;

           case 11:
            return e.t2 = e.t1, e.t3 = "".concat(t, "(opts) -- Required value for \"flow.network\" not defined in config. See: ", "https://github.com/onflow/flow-js-sdk/blob/master/packages/fcl/src/exec/query.md#configuration"), 
            (0, e.t0)(e.t2, e.t3), e.t4 = se, e.next = 17, ue().get("accessNode.api");

           case 17:
            e.t5 = e.sent, e.t6 = "".concat(t, "(opts) -- Required value for \"accessNode.api\" not defined in config. See: ", "https://github.com/onflow/flow-js-sdk/blob/master/packages/fcl/src/exec/query.md#configuration"), 
            (0, e.t4)(e.t5, e.t6);

           case 20:
           case "end":
            return e.stop();
          }
        }), e);
      }))), Ei.apply(this, arguments);
    }
    function Ii(e) {
      return Si.apply(this, arguments);
    }
    function Si() {
      return (Si = l(d().mark((function e(t) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.abrupt("return", ki("mutate", t));

           case 1:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    function Ri(e) {
      return Ai.apply(this, arguments);
    }
    function Ai() {
      return (Ai = l(d().mark((function e(t) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.abrupt("return", ki("query", t));

           case 1:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    function Ti() {
      return _i.apply(this, arguments);
    }
    function _i() {
      return _i = l(d().mark((function e() {
        var t, n = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return t = n.length > 0 && void 0 !== n[0] ? n[0] : {}, e.next = 3, Ri(t);

           case 3:
            return e.next = 5, wi(t);

           case 5:
            return t = e.sent, e.abrupt("return", ue().overload(t.dependencies || {}, l(d().mark((function e() {
              return d().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                 case 0:
                  return e.abrupt("return", No([ uu(t.cadence), Zo(fi(t.args || [])), t.limit && "number" == typeof t.limit && $o(t.limit) ]).then(Lo));

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
      }))), _i.apply(this, arguments);
    }
    function Ci(e, t) {
      return Oi.apply(this, arguments);
    }
    function Oi() {
      return (Oi = l(d().mark((function e(t, n) {
        var r, a, o, u, c, i;
        return d().wrap((function(e) {
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
                for (u.s(); !(c = u.n()).done; ) i = c.value, o.push(b({
                  type: "authz",
                  keyId: a.keyId
                }, i));
              } catch (s) {
                u.e(s);
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
      })))).apply(this, arguments);
    }
    function Pi() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return [].concat(fe(e), fe(t));
    }
    var Ni = {
      f_type: "Service",
      f_vsn: "1.0.0"
    };
    var Li = {
      f_type: "Identity",
      f_vsn: "1.0.0"
    };
    var Fi = {
      f_type: "USER",
      f_vsn: "1.0.0"
    };
    var ji = {
      f_type: "PollingResponse",
      f_vsn: "1.0.0"
    };
    var Gi = {
      f_type: "CompositeSignature",
      f_vsn: "1.0.0"
    };
    function Di(e) {
      return null == e ? null : "1.0.0" === e.f_vsn ? e : b(b({
        old: e
      }, Ni), {}, {
        type: "frame",
        endpoint: e.endpoint,
        params: e.params || {},
        data: e.data || {}
      });
    }
    function Ui(e) {
      return null == e ? null : "1.0.0" === e.f_vsn ? e : b(b({}, Ni), {}, {
        type: "back-channel-rpc",
        endpoint: e.endpoint,
        method: e.method,
        params: e.params || {},
        data: e.data || {}
      });
    }
    function Bi(e) {
      return null == e ? null : (null == e.method && (e = b(b({}, e), {}, {
        type: "local-view",
        method: "VIEW/IFRAME"
      })), "1.0.0" === e.f_vsn ? e : b(b({}, Ni), {}, {
        type: e.type || "local-view",
        method: e.method,
        endpoint: e.endpoint,
        data: e.data || {},
        params: e.params || {}
      }));
    }
    var Mi = {
      "back-channel-rpc": Ui,
      "pre-authz": function(e) {
        return null == e ? null : "1.0.0" === e.f_vsn ? e : b(b({}, Ni), {}, {
          type: e.type,
          uid: e.id,
          endpoint: e.endpoint,
          method: e.method,
          identity: b(b({}, Li), {}, {
            address: Le(e.addr),
            keyId: e.keyId
          }),
          params: e.params,
          data: e.data
        });
      },
      authz: function(e) {
        return null == e ? null : "1.0.0" === e.f_vsn ? e : b(b({}, Ni), {}, {
          type: e.type,
          uid: e.id,
          endpoint: e.endpoint,
          method: e.method,
          identity: b(b({}, Li), {}, {
            address: Le(e.addr),
            keyId: e.keyId
          }),
          params: e.params,
          data: e.data
        });
      },
      authn: function(e) {
        return null == e ? null : "1.0.0" === e.f_vsn ? e : b(b({}, Ni), {}, {
          type: e.type,
          uid: e.id,
          endpoint: e.authn,
          id: e.pid,
          provider: {
            address: Le(e.addr),
            name: e.name,
            icon: e.icon
          }
        });
      },
      frame: Di,
      "open-id": function(e) {
        return null == e ? null : "1.0.0" === e.f_vsn ? e : null;
      },
      "user-signature": function(e) {
        if (null == e) return null;
        if ("1.0.0" === e.f_vsn) return e;
        throw new Error("Invalid user-signature service");
      },
      "local-view": Bi,
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
    function zi(e, t) {
      try {
        return Mi[e.type](e, t);
      } catch (n) {
        return console.error("Unrecognized FCL Service Type [".concat(e.type, "]"), e, n), e;
      }
    }
    function Yi(e) {
      return he([ e.provider.address || e.provider.name || "UNSPECIFIED", e.id ]).toString("hex");
    }
    function qi(e) {
      return e.addr = e.addr ? Le(e.addr) : null, e.paddr = e.paddr ? Le(e.paddr) : null, e;
    }
    function Hi(e, t) {
      return t.find((function(t) {
        return t.type === e;
      }));
    }
    function Ki(e) {
      return Wi.apply(this, arguments);
    }
    function Wi() {
      return Wi = l(d().mark((function e(t) {
        var n, r;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return t = qi(t), e.t0 = Pi, e.t1 = t.services || [], e.next = 5, Ci(t.hks, t.code);

           case 5:
            return e.t2 = e.sent, n = (0, e.t0)(e.t1, e.t2).map((function(e) {
              return zi(e, t);
            })), r = Hi("authn", n), e.abrupt("return", b(b({}, Fi), {}, {
              addr: Le(t.addr),
              cid: Yi(r),
              loggedIn: !0,
              services: n,
              expiresAt: t.expires
            }));

           case 9:
           case "end":
            return e.stop();
          }
        }), e);
      }))), Wi.apply(this, arguments);
    }
    function Vi() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      var t = arguments.length > 1 ? arguments[1] : void 0;
      return e.find((function(e) {
        return e.type === t;
      }));
    }
    function Ji(e) {
      var t = new URL(e.endpoint);
      if (t.searchParams.append("l6n", window.location.origin), null != e.params) for (var n = 0, r = Object.entries(e.params || {}); n < r.length; n++) {
        var a = s(r[n], 2), o = a[0], u = a[1];
        t.searchParams.append(o, u);
      }
      return t;
    }
    function Xi(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      var n = t.method || "POST";
      var r = "GET" === n ? void 0 : JSON.stringify(t.data || e.data || {});
      return fetch(Ji(e), {
        method: n,
        headers: b(b(b({}, e.headers || {}), t.headers || {}), {}, {
          "Content-Type": "application/json"
        }),
        body: r
      }).then((function(e) {
        return e.json();
      }));
    }
    function $i(e) {
      var t, n;
      return null == e ? null : "1.0.0" === e.f_vsn ? e : b(b({}, ji), {}, {
        status: null !== (t = e.status) && void 0 !== t ? t : "APPROVED",
        reason: null !== (n = e.reason) && void 0 !== n ? n : null,
        data: e.compositeSignature || e.data || b({}, e) || {},
        updates: Ui(e.authorizationUpdates),
        local: Di((e.local || [])[0])
      });
    }
    var Zi = {
      "HTTP/GET": "GET",
      "HTTP/POST": "POST"
    };
    var Qi = function(e) {
      return se(Zi[e.method], "Invalid Service Method for type back-channel-rpc", {
        service: e
      }), Zi[e.method];
    };
    function es(e) {
      return ts.apply(this, arguments);
    }
    function ts() {
      return ts = l(d().mark((function e(t) {
        var n, r, a = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (n = a.length > 1 && void 0 !== a[1] ? a[1] : function() {
              return !0;
            }, se(t, "Missing Polling Service", {
              service: t
            }), n()) {
              e.next = 4;
              break;
            }
            throw new Error("Externally Halted");

           case 4:
            return e.next = 6, Xi(t, {
              method: Qi(t)
            }).then($i);

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
            return e.abrupt("return", es(r.updates, n));

           case 15:
           case "end":
            return e.stop();
          }
        }), e);
      }))), ts.apply(this, arguments);
    }
    var ns = "FCL_IFRAME";
    function rs(e) {
      se(!document.getElementById(ns), "Attempt at triggering multiple Frames", {
        src: e
      });
      var t = document.createElement("iframe");
      t.src = e, t.id = ns, t.allow = "usb *; hid *", t.frameBorder = "0", t.style.cssText = "\n  position:fixed;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100vw;\n  display:block;\n  background:rgba(0,0,0,0.25);\n  z-index: 2147483647;\n  box-sizing: border-box;\n  color-scheme: light;\n", 
      document.body.append(t);
      return [ t.contentWindow, function() {
        document.getElementById(ns) && document.getElementById(ns).remove();
      } ];
    }
    var as = null;
    var os = null;
    function us(e) {
      var t;
      null == as || null !== (t = as) && void 0 !== t && t.closed ? as = function(e, t, n, r, a) {
        var o = n.top.outerHeight / 2 + n.top.screenY - a / 2;
        var u = n.top.outerWidth / 2 + n.top.screenX - r / 2;
        var c = n.open(e, t, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=".concat(r, ", height=").concat(a, ", top=").concat(o, ", left=").concat(u));
        if (!c) throw new Error("Popup failed to open (was it blocked by a popup blocker?)");
        return c;
      }(e, "FCL_POP", window, 640, 770) : os !== e ? (as.location.replace(e), as.focus()) : as.focus(), os = e;
      return [ as, function() {
        as && !as.closed && as.close(), as = null;
      } ];
    }
    var cs = null;
    var is = null;
    function ss(e) {
      var t;
      if (null == cs || null !== (t = cs) && void 0 !== t && t.closed) {
        if (!(cs = window.open(e, "_blank"))) throw new Error("Tab failed to open (was it blocked by the browser?)");
      } else is !== e ? (cs.location.replace(e), cs.focus()) : cs.focus();
      is = e;
      return [ cs, function() {
        cs && !cs.closed && cs.close(), cs = null;
      } ];
    }
    var fs = {
      "VIEW/IFRAME": rs,
      "VIEW/POP": us,
      "VIEW/TAB": ss
    };
    function ls(e) {
      return ps.apply(this, arguments);
    }
    function ps() {
      return ps = l(d().mark((function e(t) {
        var n, r = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = r.length > 1 && void 0 !== r[1] ? r[1] : {}, e.prev = 1, e.abrupt("return", fs[t.method](Ji(t), n));

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
      }))), ps.apply(this, arguments);
    }
    function ds(e) {
      return vs.apply(this, arguments);
    }
    function vs() {
      return (vs = l(d().mark((function e(t) {
        var n, r, a, o, u, c, i, f, l;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = t.service, r = t.body, a = t.config, t.opts, e.next = 3, Xi(n, {
              data: b({
                fclVersion: ri,
                service: {
                  params: n.params,
                  data: n.data,
                  type: n.type
                },
                config: a
              }, r)
            }).then($i);

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
            return u = !0, e.next = 20, ls(Bi(o.local));

           case 20:
            return c = e.sent, (i = s(c, 2))[0], f = i[1], l = function() {
              try {
                f(), u = !1;
              } catch (e) {
                console.error("Frame Close Error", e);
              }
            }, e.abrupt("return", es(o.updates, (function() {
              return u;
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
      })))).apply(this, arguments);
    }
    var hs = "FCL:VIEW:CLOSE";
    var ms = "FCL:VIEW:READY";
    var gs = "FCL:VIEW:RESPONSE";
    var ys = function(e) {
      return "string" == typeof e && e.toLowerCase();
    };
    var bs = new Set([ "monetizationstart", "monetizationpending", "monetizationprogress", "monetizationstop" ]);
    var ws = function(e, t) {
      return console.warn("DEPRECATION NOTICE", "Received ".concat(e, ", please use ").concat(t, " for this and future versions of FCL"));
    };
    var xs = function(e) {
      var t = e.close, n = e.send, r = e.onReady, a = e.onResponse, o = e.onMessage;
      return function(e) {
        try {
          if ("object" !== m(e.data)) return;
          if (bs.has(e.data.type)) return;
          ys(e.data.type) === ys(hs) && t(), ys(e.data.type) === ys(ms) && r(e, {
            send: n,
            close: t
          }), ys(e.data.type) === ys(gs) && a(e, {
            send: n,
            close: t
          }), o(e, {
            send: n,
            close: t
          }), ys(e.data.type) === ys("FCL:FRAME:READY") && (ws(e.data.type, ms), r(e, {
            send: n,
            close: t
          })), ys(e.data.type) === ys("FCL:FRAME:RESPONSE") && (ws(e.data.type, gs), a(e, {
            send: n,
            close: t
          })), ys(e.data.type) === ys("FCL:FRAME:CLOSE") && (ws(e.data.type, hs), t()), ys(e.data.type) === ys("FCL::CHALLENGE::RESPONSE") && (ws(e.data.type, gs), 
          a(e, {
            send: n,
            close: t
          })), ys(e.data.type) === ys("FCL::AUTHZ_READY") && (ws(e.data.type, ms), r(e, {
            send: n,
            close: t
          })), ys(e.data.type) === ys("FCL::CHALLENGE::CANCEL") && (ws(e.data.type, hs), t()), ys(e.data.type) === ys("FCL::CANCEL") && (ws(e.data.type, hs), 
          t());
        } catch (u) {
          console.error("Frame Callback Error", u), t();
        }
      };
    };
    var ks = function() {};
    var Es = function() {};
    var Is = function() {};
    var Ss = function() {};
    var Rs = {
      "HTTP/RPC": ds,
      "HTTP/POST": ds,
      "IFRAME/RPC": function(e) {
        var t = e.service, n = e.body, r = e.config, a = e.opts;
        return new Promise((function(e, o) {
          var u = ei();
          var c = a.includeOlderJsonRpcCall;
          !function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (null == e) return {
              send: ks,
              close: ks
            };
            var n = t.onClose || ks;
            var r = t.onMessage || ks;
            var a = t.onReady || ks;
            var o = t.onResponse || ks;
            var u = xs({
              close: l,
              send: p,
              onReady: a,
              onResponse: o,
              onMessage: r
            });
            window.addEventListener("message", u);
            var c = s(rs(Ji(e)), 2), i = c[0], f = c[1];
            return {
              send: p,
              close: l
            };
            function l() {
              try {
                window.removeEventListener("message", u), f(), n();
              } catch (e) {
                console.error("Frame Close Error", e);
              }
            }
            function p(e) {
              try {
                i.postMessage(JSON.parse(JSON.stringify(e || {})), "*");
              } catch (t) {
                console.error("Frame Send Error", e, t);
              }
            }
          }(t, {
            onReady: function(e, a) {
              return l(d().mark((function e() {
                var o;
                return d().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                   case 0:
                    o = a.send, e.prev = 1, o({
                      type: "FCL:VIEW:READY:RESPONSE",
                      fclVersion: ri,
                      body: n,
                      service: {
                        params: t.params,
                        data: t.data,
                        type: t.type
                      },
                      config: r
                    }), o({
                      fclVersion: ri,
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
                    }), c && o({
                      jsonrpc: "2.0",
                      id: u,
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
                if ("object" !== m(t.data)) return;
                var a = $i(t.data);
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
              } catch (u) {
                throw console.error("execIframeRPC onResponse error", u), u;
              }
            },
            onMessage: function(t, n) {
              var r = n.close;
              try {
                if ("object" !== m(t.data)) return;
                if ("2.0" !== t.data.jsonrpc) return;
                if (t.data.id !== u) return;
                var a = $i(t.data.result);
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
              } catch (c) {
                throw console.error("execIframeRPC onMessage error", c), c;
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
          var u = ei();
          var c = a.redir, i = a.includeOlderJsonRpcCall;
          !function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (null == e) return {
              send: Es,
              close: Es
            };
            var n = t.onClose || Es;
            var r = t.onMessage || Es;
            var a = t.onReady || Es;
            var o = t.onResponse || Es;
            var u = xs({
              close: p,
              send: d,
              onReady: a,
              onResponse: o,
              onMessage: r
            });
            window.addEventListener("message", u);
            var c = s(us(Ji(e)), 2), i = c[0], f = c[1];
            var l = setInterval((function() {
              i && i.closed && p();
            }), 500);
            return {
              send: d,
              close: p
            };
            function p() {
              try {
                window.removeEventListener("message", u), clearInterval(l), f(), n();
              } catch (e) {
                console.error("Popup Close Error", e);
              }
            }
            function d(e) {
              try {
                i.postMessage(JSON.parse(JSON.stringify(e || {})), "*");
              } catch (t) {
                console.error("Popup Send Error", e, t);
              }
            }
          }(t, {
            onReady: function(e, a) {
              return l(d().mark((function e() {
                var o;
                return d().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                   case 0:
                    o = a.send, e.prev = 1, o({
                      fclVersion: ri,
                      type: "FCL:VIEW:READY:RESPONSE",
                      body: n,
                      service: {
                        params: t.params,
                        data: t.data,
                        type: t.type
                      },
                      config: r
                    }), o({
                      fclVersion: ri,
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
                    }), i && o({
                      jsonrpc: "2.0",
                      id: u,
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
                if ("object" !== m(t.data)) return;
                var a = $i(t.data);
                switch (a.status) {
                 case "APPROVED":
                  e(a.data), !c && r();
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
              } catch (u) {
                throw console.error("execPopRPC onResponse error", u), u;
              }
            },
            onMessage: function(t, n) {
              var r = n.close;
              try {
                if ("object" !== m(t.data)) return;
                if ("2.0" !== t.data.jsonrpc) return;
                if (t.data.id !== u) return;
                var a = $i(t.data.result);
                switch (a.status) {
                 case "APPROVED":
                  e(a.data), !c && r();
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
              } catch (i) {
                throw console.error("execPopRPC onMessage error", i), i;
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
          var u = ei();
          var c = a.redir, i = a.includeOlderJsonRpcCall;
          !function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (null == e) return {
              send: Is,
              close: Is
            };
            var n = t.onClose || Is;
            var r = t.onMessage || Is;
            var a = t.onReady || Is;
            var o = t.onResponse || Is;
            var u = xs({
              close: p,
              send: d,
              onReady: a,
              onResponse: o,
              onMessage: r
            });
            window.addEventListener("message", u);
            var c = s(ss(Ji(e)), 2), i = c[0], f = c[1];
            var l = setInterval((function() {
              i && i.closed && p();
            }), 500);
            return {
              send: d,
              close: p
            };
            function p() {
              try {
                window.removeEventListener("message", u), clearInterval(l), f(), n();
              } catch (e) {
                console.error("Tab Close Error", e);
              }
            }
            function d(e) {
              try {
                i.postMessage(JSON.parse(JSON.stringify(e || {})), "*");
              } catch (t) {
                console.error("Tab Send Error", e, t);
              }
            }
          }(t, {
            onReady: function(e, a) {
              return l(d().mark((function e() {
                var o;
                return d().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                   case 0:
                    o = a.send, e.prev = 1, o({
                      fclVersion: ri,
                      type: "FCL:VIEW:READY:RESPONSE",
                      body: n,
                      service: {
                        params: t.params,
                        data: t.data,
                        type: t.type
                      },
                      config: r
                    }), o({
                      fclVersion: ri,
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
                    }), i && o({
                      jsonrpc: "2.0",
                      id: u,
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
                if ("object" !== m(t.data)) return;
                var a = $i(t.data);
                switch (a.status) {
                 case "APPROVED":
                  e(a.data), !c && r();
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
              } catch (u) {
                throw console.error("execPopRPC onResponse error", u), u;
              }
            },
            onMessage: function(t, n) {
              var r = n.close;
              try {
                if ("object" !== m(t.data)) return;
                if ("2.0" !== t.data.jsonrpc) return;
                if (t.data.id !== u) return;
                var a = $i(t.data.result);
                switch (a.status) {
                 case "APPROVED":
                  e(a.data), !c && r();
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
              } catch (i) {
                throw console.error("execPopRPC onMessage error", i), i;
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
              send: Ss,
              close: Ss
            };
            var n = t.onClose || Ss;
            var r = t.onMessage || Ss;
            var a = t.onReady || Ss;
            var o = t.onResponse || Ss;
            var u = xs({
              close: c,
              send: i,
              onReady: a,
              onResponse: o,
              onMessage: r
            });
            return window.addEventListener("message", u), i({
              service: e
            }), {
              send: i,
              close: c
            };
            function c() {
              try {
                window.removeEventListener("message", u), n();
              } catch (e) {
                console.error("Ext Close Error", e);
              }
            }
            function i(e) {
              try {
                window && window.postMessage(JSON.parse(JSON.stringify(e || {})), "*");
              } catch (t) {
                console.error("Ext Send Error", e, t);
              }
            }
          }(t, {
            onReady: function(e, a) {
              return l(d().mark((function e() {
                var o;
                return d().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                   case 0:
                    o = a.send, e.prev = 1, o({
                      fclVersion: ri,
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
                if ("object" !== m(t.data)) return;
                var o = $i(t.data);
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
              } catch (u) {
                throw console.error("execExtRPC onResponse error", u), u;
              }
            },
            onClose: function() {
              a("Declined: Externally Halted");
            }
          });
        }));
      }
    };
    var As = [ "ServicePlugin" ];
    var Ts = [ "discovery-service" ];
    var _s = function() {
      var e = new Set;
      var t = new Map(Object.entries(Rs));
      var n = function(t) {
        return e = new Set(fe(t));
      };
      return Object.freeze({
        add: function(e) {
          if (se(Ts.includes(e.type), "Service Plugin type ".concat(e.type, " is not supported")), "discovery-service" === e.type) {
            var r = function(e) {
              var t = e.services, n = e.serviceStrategy;
              se(Array.isArray(t) && t.length, "Array of Discovery Services is required");
              var r, a = w(t);
              try {
                for (a.s(); !(r = a.n()).done; ) {
                  var o = r.value;
                  se(oi(o.f_type) && "Service" === o.f_type, "Service is required"), se(oi(o.type) && "authn" === o.type, "Service must be type authn. Received ".concat(o.type)), 
                  se(o.method in Rs || n.method === o.method, "Service method ".concat(o.method, " is not supported"));
                }
              } catch (u) {
                a.e(u);
              } finally {
                a.f();
              }
              return se(oi(n), "Service strategy is required"), se(oi(n.method) && ci(n.method), "Service strategy method is required"), 
              se(oi(n.exec) && ii(n.exec), "Service strategy exec function is required"), {
                discoveryServices: t,
                serviceStrategy: n
              };
            }(e), a = r.discoveryServices, o = r.serviceStrategy;
            n(a), t.has(o.method) ? de({
              title: "Add Service Plugin",
              message: "Service strategy for ".concat(o.method, " already exists"),
              level: le.warn
            }) : t.set(o.method, o.exec);
          }
        },
        getServices: function() {
          return fe(e);
        },
        getStrategy: function(e) {
          return t.get(e);
        },
        getStrategies: function() {
          return fe(t.keys());
        }
      });
    }();
    var Cs = function() {
      var e = new Map;
      return Object.freeze({
        add: function(t) {
          var n = function(e) {
            var t;
            se(e, "No plugins supplied");
            var n, r = w(t = Array.isArray(e) ? fe(e) : [ e ]);
            try {
              for (r.s(); !(n = r.n()).done; ) {
                var a = n.value;
                se(oi(a.name), "Plugin name is required"), se(oi(a.f_type), "Plugin f_type is required"), se(As.includes(a.f_type), "Plugin type ".concat(a.f_type, " is not supported"));
              }
            } catch (o) {
              r.e(o);
            } finally {
              r.f();
            }
            return t;
          }(t);
          var r, a = w(n);
          try {
            for (a.s(); !(r = a.n()).done; ) {
              var o = r.value;
              e.set(o.name, o), "ServicePlugin" === o.f_type && _s.add(o);
            }
          } catch (u) {
            a.e(u);
          } finally {
            a.f();
          }
        },
        getPlugins: function() {
          return e;
        }
      });
    }();
    var Os = function() {
      var e = l(d().mark((function e(t) {
        var n, r, a, o, u;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = t.service, r = t.body, a = t.config, o = t.opts, u = _s.getStrategy(n.method), e.abrupt("return", u({
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
    function Ps(e) {
      return Ns.apply(this, arguments);
    }
    function Ns() {
      return (Ns = l(d().mark((function e(t) {
        var n, r, a;
        var o, u, c, i, s, f, l, p, v;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return o = t.service, u = t.msg, c = void 0 === u ? {} : u, i = t.config, s = void 0 === i ? {} : i, f = t.opts, l = void 0 === f ? {} : f, 
            c.data = o.data, e.next = 4, ti(/^service\./);

           case 4:
            return e.t0 = e.sent, e.next = 7, ti(/^app\.detail\./);

           case 7:
            return e.t1 = e.sent, e.t2 = b(b({}, s.client), {}, {
              fclVersion: ri,
              fclLibrary: "https://github.com/onflow/fcl-js",
              hostname: null !== (n = null === (r = window) || void 0 === r || null === (a = r.location) || void 0 === a ? void 0 : a.hostname) && void 0 !== n ? n : null
            }), p = {
              services: e.t0,
              app: e.t1,
              client: e.t2
            }, e.prev = 10, e.next = 13, Os({
              service: o,
              body: c,
              config: p,
              opts: l
            });

           case 13:
            if ("REDIRECT" !== (v = e.sent).status) {
              e.next = 21;
              break;
            }
            return se(o.type === v.data.type, "Cannot shift recursive service type in execService"), e.next = 18, Ps({
              service: v.data,
              msg: c,
              config: p,
              opts: l
            });

           case 18:
            return e.abrupt("return", e.sent);

           case 21:
            return e.abrupt("return", v);

           case 22:
            e.next = 28;
            break;

           case 24:
            throw e.prev = 24, e.t3 = e.catch(10), de({
              title: "Error on execService ".concat(null == o ? void 0 : o.type),
              message: e.t3,
              level: le.error
            }), e.t3;

           case 28:
           case "end":
            return e.stop();
          }
        }), e, null, [ [ 10, 24 ] ]);
      })))).apply(this, arguments);
    }
    function Ls(e) {
      return null == e ? null : "1.0.0" === e.f_vsn ? e : b(b({}, Gi), {}, {
        addr: Ne(e.addr || e.address),
        signature: e.signature || e.sig,
        keyId: e.keyId
      });
    }
    var Fs = function() {
      var e = l(d().mark((function e() {
        var t;
        var n;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = (null === (t = window) || void 0 === t ? void 0 : t.fcl_extensions) || [], e.abrupt("return", [].concat(fe(n), fe(_s.getServices())));

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
    function js(e) {
      return Gs.apply(this, arguments);
    }
    function Gs() {
      return (Gs = l(d().mark((function e(t) {
        var n;
        var r, a, o, u;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.next = 2, ue.get("discovery.authn.include", []);

           case 2:
            return r = e.sent, e.next = 5, ue.first([ "discovery.wallet.method", "discovery.wallet.method.default" ]);

           case 5:
            if (a = e.sent, o = null != t && t.method ? t.method : a, null === (n = null == t ? void 0 : t.endpoint) || void 0 === n) {
              e.next = 11;
              break;
            }
            e.t0 = n, e.next = 14;
            break;

           case 11:
            return e.next = 13, ue.first([ "discovery.wallet", "challenge.handshake" ]);

           case 13:
            e.t0 = e.sent;

           case 14:
            return se(u = e.t0, "\n    If no service is passed to \"authenticate,\" then \"discovery.wallet\" must be defined in fcl config.\n    See: \"https://docs.onflow.org/fcl/reference/api/#setting-configuration-values\"\n    "), 
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
    function Ds(e) {
      return Us.apply(this, arguments);
    }
    function Us() {
      return (Us = l(d().mark((function e(t) {
        var n, r;
        var a, o, u, c;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return a = t.types, e.next = 3, ue.get("discovery.authn.endpoint");

           case 3:
            return o = e.sent, se(Boolean(o), "\"discovery.authn.endpoint\" in config must be defined."), e.next = 7, ue.get("discovery.authn.include", []);

           case 7:
            return u = e.sent, c = new URL(o), e.t0 = fetch, e.t1 = c, e.t2 = {
              "Content-Type": "application/json"
            }, e.t3 = JSON, e.t4 = a, e.t5 = ri, e.t6 = u, e.next = 18, Fs();

           case 18:
            return e.t7 = e.sent, e.t8 = _s.getStrategies(), e.t9 = null === (n = window) || void 0 === n || null === (r = n.navigator) || void 0 === r ? void 0 : r.userAgent, 
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
      })))).apply(this, arguments);
    }
    var Bs;
    var Ms = "authn", zs = "SNAPSHOT", Ys = "UPDATED", qs = "UPDATE_RESULTS";
    var Hs = function(e, t) {
      e && console.warn("\n      %cFCL Warning\n      ============================\n      ".concat(t, "\n      For more info, please see the docs: https://docs.onflow.org/fcl/\n      ============================\n      "), "font-weight:bold;font-family:monospace;");
    };
    var Ks = function() {
      var e = l(d().mark((function e() {
        var t;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.prev = 0, e.next = 3, Ds({
              types: [ Ms ]
            });

           case 3:
            t = e.sent, P(Ms, qs, {
              results: t
            }), e.next = 10;
            break;

           case 7:
            e.prev = 7, e.t0 = e.catch(0), de({
              title: "".concat(e.t0.name, " Error fetching Discovery API services."),
              message: e.t0.message,
              level: le.error
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
    }();
    var Ws = (g(Bs = {}, I, function() {
      var e = l(d().mark((function e(t) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            Hs("undefined" == typeof window, '"fcl.discovery" is only available in the browser.'), 'complete' === document.readyState ? Ks() : window.onload = l(d().mark((function e() {
              return d().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                 case 0:
                  Ks();

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
        }), e);
      })));
      return function(t) {
        return e.apply(this, arguments);
      };
    }()), g(Bs, qs, (function(e, t, n) {
      e.merge(n), e.broadcast(Ys, b({}, e.all()));
    })), g(Bs, S, (function(e, t) {
      e.subscribe(t.from), e.send(t.from, Ys, b({}, e.all()));
    })), g(Bs, R, (function(e, t) {
      return e.unsubscribe(t.from);
    })), g(Bs, zs, function() {
      var e = l(d().mark((function e(t, n) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.abrupt("return", n.reply(b({}, t.all())));

           case 1:
           case "end":
            return e.stop();
          }
        }), e);
      })));
      return function(t, n) {
        return e.apply(this, arguments);
      };
    }()), Bs);
    var Vs = function() {
      return F(Ws, Ms);
    };
    var Js = {
      authn: {
        subscribe: function(e) {
          return j(Ms, Vs, e);
        },
        snapshot: function() {
          return G(Ms, Vs);
        },
        update: function() {
          return Ks();
        }
      }
    };
    function Xs() {
      return function() {
        return "undefined" != typeof navigator && /iPhone|iPod/.test(navigator.userAgent);
      }() || function() {
        return "undefined" != typeof navigator && /iPad/.test(navigator.userAgent);
      }();
    }
    function $s() {
      return function() {
        return "undefined" != typeof navigator && /android/i.test(navigator.userAgent);
      }() || Xs();
    }
    var Zs;
    var Qs = function(e) {
      return "function" == typeof e;
    };
    var ef = "CURRENT_USER";
    var tf = "CURRENT_USER/UPDATED";
    var nf = "SNAPSHOT";
    var rf = "SET_CURRENT_USER";
    var af = "DEL_CURRENT_USER";
    var of = "{\n  \"f_type\": \"User\",\n  \"f_vsn\": \"1.0.0\",\n  \"addr\":null,\n  \"cid\":null,\n  \"loggedIn\":null,\n  \"expiresAt\":null,\n  \"services\":[]\n}";
    var uf = function() {
      var e = l(d().mark((function e(t) {
        var n, r;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = JSON.parse(of), e.next = 3, t.get(ef);

           case 3:
            if (null == (r = e.sent) || n.f_vsn === r.f_vsn) {
              e.next = 7;
              break;
            }
            return t.removeItem(ef), e.abrupt("return", n);

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
    }();
    var cf = (g(Zs = {}, I, function() {
      var e = l(d().mark((function e(t) {
        var n, r;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return "undefined" == typeof window && console.warn("\n        %cFCL Warning\n        ============================\n        \"currentUser\" is only available in the browser.\n        For more info, please see the docs: https://docs.onflow.org/fcl/\n        ============================\n        ", "font-weight:bold;font-family:monospace;"), 
            t.merge(JSON.parse(of)), e.next = 4, ue.first([ "fcl.storage", "fcl.storage.default" ]);

           case 4:
            if (!(n = e.sent).can) {
              e.next = 10;
              break;
            }
            return e.next = 8, uf(n);

           case 8:
            ff(r = e.sent) && t.merge(r);

           case 10:
           case "end":
            return e.stop();
          }
        }), e);
      })));
      return function(t) {
        return e.apply(this, arguments);
      };
    }()), g(Zs, S, (function(e, t) {
      e.subscribe(t.from), e.send(t.from, tf, b({}, e.all()));
    })), g(Zs, R, (function(e, t) {
      e.unsubscribe(t.from);
    })), g(Zs, nf, function() {
      var e = l(d().mark((function e(t, n) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            n.reply(b({}, t.all()));

           case 1:
           case "end":
            return e.stop();
          }
        }), e);
      })));
      return function(t, n) {
        return e.apply(this, arguments);
      };
    }()), g(Zs, rf, function() {
      var e = l(d().mark((function e(t, n, r) {
        var a;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return t.merge(r), e.next = 3, ue.first([ "fcl.storage", "fcl.storage.default" ]);

           case 3:
            (a = e.sent).can && a.put(ef, t.all()), t.broadcast(tf, b({}, t.all()));

           case 6:
           case "end":
            return e.stop();
          }
        }), e);
      })));
      return function(t, n, r) {
        return e.apply(this, arguments);
      };
    }()), g(Zs, af, function() {
      var e = l(d().mark((function e(t, n) {
        var r;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return t.merge(JSON.parse(of)), e.next = 3, ue.first([ "fcl.storage", "fcl.storage.default" ]);

           case 3:
            (r = e.sent).can && r.put(ef, t.all()), t.broadcast(tf, b({}, t.all()));

           case 6:
           case "end":
            return e.stop();
          }
        }), e);
      })));
      return function(t, n) {
        return e.apply(this, arguments);
      };
    }()), Zs);
    var sf = function() {
      return F(cf, ef);
    };
    function ff(e) {
      return null == e.expiresAt || 0 === e.expiresAt || e.expiresAt > Date.now();
    }
    function lf() {
      return pf.apply(this, arguments);
    }
    function pf() {
      return (pf = l(d().mark((function e() {
        var t, n;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.next = 2, ue.get("fcl.accountProof.resolver");

           case 2:
            if (t = e.sent, Qs(t)) {
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
            return se("string" == typeof n.appIdentifier, "appIdentifier must be a string"), se(/^[0-9a-f]+$/i.test(n.nonce), "Nonce must be a hex string"), 
            e.abrupt("return", n);

           case 13:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    var df = function() {
      var e = l(d().mark((function e(t) {
        var n;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = t.discoveryAuthnInclude, e.t0 = n, e.next = 4, Fs();

           case 4:
            return e.t1 = e.sent, e.t2 = _s.getStrategies(), e.t3 = {
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
    function vf() {
      return hf.apply(this, arguments);
    }
    function hf() {
      return hf = l(d().mark((function e() {
        var t, n;
        var r, a, o, u, c, i = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (r = i.length > 0 && void 0 !== i[0] ? i[0] : {}, a = r.service, o = r.redir, u = void 0 !== o && o, !a || null != a && null !== (t = a.provider) && void 0 !== t && t.is_installed || null == a || null === (n = a.provider) || void 0 === n || !n.requires_install) {
              e.next = 4;
              break;
            }
            return window.location.href = null == a || null === (c = a.provider) || void 0 === c ? void 0 : c.install_link, e.abrupt("return");

           case 4:
            return e.abrupt("return", new Promise(function() {
              var e = l(d().mark((function e(t, n) {
                var r, o, c, i, s, f, l;
                return d().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                   case 0:
                    return sf(), r = {
                      redir: u
                    }, e.next = 4, xf();

                   case 4:
                    return o = e.sent, e.next = 7, js(a);

                   case 7:
                    return c = e.sent, i = Vi(o.services, "authn-refresh"), e.prev = 9, e.next = 12, lf();

                   case 12:
                    s = e.sent, e.next = 19;
                    break;

                   case 15:
                    return e.prev = 15, e.t0 = e.catch(9), console.error("Error During Authentication: Could not resolve account proof data.\n        ".concat(e.t0)), 
                    e.abrupt("return", n(e.t0));

                   case 19:
                    if (!o.loggedIn) {
                      e.next = 47;
                      break;
                    }
                    if (!i) {
                      e.next = 46;
                      break;
                    }
                    return e.prev = 21, e.next = 24, Ps({
                      service: i,
                      msg: s,
                      opts: r
                    });

                   case 24:
                    return f = e.sent, e.t1 = P, e.t2 = ef, e.t3 = rf, e.next = 30, Ki(f);

                   case 30:
                    e.t4 = e.sent, (0, e.t1)(e.t2, e.t3, e.t4), e.next = 37;
                    break;

                   case 34:
                    e.prev = 34, e.t5 = e.catch(21), console.error("Error: Could not refresh authentication.", e.t5);

                   case 37:
                    return e.prev = 37, e.t6 = t, e.next = 41, xf();

                   case 41:
                    return e.t7 = e.sent, e.abrupt("return", (0, e.t6)(e.t7));

                   case 44:
                    e.next = 47;
                    break;

                   case 46:
                    return e.abrupt("return", t(o));

                   case 47:
                    return e.prev = 47, e.t8 = Ps, e.t9 = c, e.t10 = s, e.next = 53, df(c);

                   case 53:
                    return e.t11 = e.sent, e.t12 = r, e.t13 = {
                      service: e.t9,
                      msg: e.t10,
                      config: e.t11,
                      opts: e.t12
                    }, e.next = 58, (0, e.t8)(e.t13);

                   case 58:
                    return l = e.sent, e.t14 = P, e.t15 = ef, e.t16 = rf, e.next = 64, Ki(l);

                   case 64:
                    e.t17 = e.sent, (0, e.t14)(e.t15, e.t16, e.t17), e.next = 71;
                    break;

                   case 68:
                    e.prev = 68, e.t18 = e.catch(47), console.error("Error while authenticating", e.t18);

                   case 71:
                    return e.prev = 71, e.t19 = t, e.next = 75, xf();

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
      }))), hf.apply(this, arguments);
    }
    function mf() {
      sf(), P(ef, af);
    }
    function gf(e) {
      var t = function(e) {
        return {
          f_type: "PreAuthzResponse",
          f_vsn: "1.0.0",
          proposer: (e || {}).proposer,
          payer: (e || {}).payer || [],
          authorization: (e || {}).authorization || []
        };
      }(e);
      var n = [];
      null != t.proposer && n.push([ "PROPOSER", t.proposer ]);
      var r, a = w(t.payer || []);
      try {
        for (a.s(); !(r = a.n()).done; ) {
          var o = r.value;
          n.push([ "PAYER", o ]);
        }
      } catch (l) {
        a.e(l);
      } finally {
        a.f();
      }
      var u, c = w(t.authorization || []);
      try {
        for (c.s(); !(u = c.n()).done; ) {
          var i = u.value;
          n.push([ "AUTHORIZER", i ]);
        }
      } catch (l) {
        c.e(l);
      } finally {
        c.f();
      }
      var f = n.map((function(e) {
        var t = s(e, 2), n = t[0], r = t[1];
        return {
          tempId: [ r.identity.address, r.identity.keyId ].join("|"),
          addr: r.identity.address,
          keyId: r.identity.keyId,
          signingFunction: function(e) {
            return Ps({
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
    function yf(e) {
      return bf.apply(this, arguments);
    }
    function bf() {
      return bf = l(d().mark((function e(t) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return sf(), e.abrupt("return", b(b({}, t), {}, {
              tempId: "CURRENT_USER",
              resolve: function(e, t) {
                return l(d().mark((function n() {
                  var r, a, o, u;
                  return d().wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                     case 0:
                      return n.next = 2, vf({
                        redir: !0
                      });

                     case 2:
                      if (r = n.sent, a = Vi(r.services, "authz"), !(o = Vi(r.services, "pre-authz"))) {
                        n.next = 11;
                        break;
                      }
                      return n.t0 = gf, n.next = 9, Ps({
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
                      return $s() && "WC/RPC" === a.method && (u = window.open("", "_blank")), n.abrupt("return", b(b({}, e), {}, {
                        tempId: "CURRENT_USER",
                        resolve: null,
                        addr: Ne(a.identity.address),
                        keyId: a.identity.keyId,
                        sequenceNum: null,
                        signature: null,
                        signingFunction: function(e) {
                          return l(d().mark((function t() {
                            return d().wrap((function(t) {
                              for (;;) switch (t.prev = t.next) {
                               case 0:
                                return t.t0 = Ls, t.next = 3, Ps({
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
      }))), bf.apply(this, arguments);
    }
    function wf(e) {
      sf();
      var t = "@EXIT";
      var n = F(function() {
        var n = l(d().mark((function n(r) {
          var a;
          return d().wrap((function(n) {
            for (;;) switch (n.prev = n.next) {
             case 0:
              r.send(ef, S);

             case 1:
              return n.next = 4, r.receive();

             case 4:
              if ((a = n.sent).tag !== t) {
                n.next = 8;
                break;
              }
              return r.send(ef, R), n.abrupt("return");

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
    function xf() {
      return sf(), P(ef, nf, null, {
        expectReply: !0,
        timeout: 0
      });
    }
    function kf() {
      return Ef.apply(this, arguments);
    }
    function Ef() {
      return (Ef = l(d().mark((function e() {
        var t, n;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.next = 2, vf();

           case 2:
            return t = e.sent, n = t.addr, e.abrupt("return", Qo(Le(n), Mc));

           case 5:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    var If = function(e) {
      return se(/^[0-9a-f]+$/i.test(e), "Message must be a hex string"), {
        message: e
      };
    };
    function Sf(e) {
      return Rf.apply(this, arguments);
    }
    function Rf() {
      return Rf = l(d().mark((function e(t) {
        var n, r, a;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return sf(), e.next = 3, vf({
              redir: !0
            });

           case 3:
            return n = e.sent, se(r = Vi(n.services, "user-signature"), "Current user must have authorized a signing service."), e.prev = 6, 
            e.next = 9, Ps({
              service: r,
              msg: If(t)
            });

           case 9:
            if (a = e.sent, !Array.isArray(a)) {
              e.next = 14;
              break;
            }
            return e.abrupt("return", a.map((function(e) {
              return Ls(e);
            })));

           case 14:
            return e.abrupt("return", [ Ls(a) ]);

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
      }))), Rf.apply(this, arguments);
    }
    var Af = function() {
      return {
        authenticate: vf,
        unauthenticate: mf,
        authorization: yf,
        signUserMessage: Sf,
        subscribe: wf,
        snapshot: xf,
        resolveArgument: kf
      };
    };
    function Tf() {
      return _f.apply(this, arguments);
    }
    function _f() {
      return _f = l(d().mark((function e() {
        var t, n, r, a = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return t = a.length > 0 && void 0 !== a[0] ? a[0] : {}, e.prev = 1, e.next = 4, Ii(t);

           case 4:
            return e.next = 6, wi(t);

           case 6:
            return t = e.sent, e.next = 9, ue().get("fcl.authz", Af().authorization);

           case 9:
            return r = e.sent, n = ue().overload(t.dependencies || {}, l(d().mark((function e() {
              return d().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                 case 0:
                  return e.abrupt("return", No([ iu(t.cadence), Zo(fi(t.args || [])), t.limit && si(t.limit) && $o(t.limit), eu(t.proposer || t.authz || r), nu(t.payer || t.authz || r), zo(t.authorizations || [ t.authz || r ]) ]).then(Lo));

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
      }))), _f.apply(this, arguments);
    }
    Af.authenticate = vf, Af.unauthenticate = mf, Af.authorization = yf, Af.signUserMessage = Sf, Af.subscribe = wf, Af.snapshot = xf, 
    Af.resolveArgument = kf;
    var Cf = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
      var n = function(e) {
        var t;
        return e.deprecated && console.warn("DEPRECATION NOTICE", e.deprecated.message), null == e || (null === (t = e.body) || void 0 === t || delete t.interaction), 
        e;
      };
      var r = function(r) {
        var a = r.data;
        "object" === m(a) && null != m(a) && a.type === e && t(n(a));
      };
      return window.addEventListener("message", r), function() {
        return window.removeEventListener("message", r);
      };
    };
    var Of = function(e) {
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
    var Pf = function(e, t) {
      return ve.Buffer.from(e.padEnd(2 * t, "0"), "hex");
    };
    var Nf = function(e) {
      return function(e, t) {
        return ve.Buffer.from(e.padStart(2 * t, "0"), "hex");
      }(e, 8);
    };
    var Lf = function(e) {
      return ve.Buffer.from(e, "hex");
    };
    var Ff = function(e) {
      var t = e.address, n = e.nonce, r = e.appIdentifier;
      var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      se(t, "Encode Message For Provable Authn Error: address must be defined"), se(n, "Encode Message For Provable Authn Error: nonce must be defined"), 
      se(r, "Encode Message For Provable Authn Error: appIdentifier must be defined"), se(n.length >= 64, "Encode Message For Provable Authn Error: nonce must be minimum of 32 bytes");
      var o = Pf(ve.Buffer.from("FCL-ACCOUNT-PROOF-V0.0").toString("hex"), 32);
      return a ? ve.Buffer.concat([ o, he([ r, Nf(Ne(t)), Lf(n) ]) ]).toString("hex") : he([ r, Nf(Ne(t)), Lf(n) ]).toString("hex");
    };
    var jf = Object.freeze({
      __proto__: null,
      sendMsgToFCL: Of,
      ready: function(e) {
        Cf("FCL:VIEW:READY:RESPONSE", e), Of("FCL:VIEW:READY");
      },
      close: function() {
        Of("FCL:VIEW:CLOSE");
      },
      approve: function(e) {
        Of("FCL:VIEW:RESPONSE", {
          f_type: "PollingResponse",
          f_vsn: "1.0.0",
          status: "APPROVED",
          reason: null,
          data: e
        });
      },
      decline: function(e) {
        Of("FCL:VIEW:RESPONSE", {
          f_type: "PollingResponse",
          f_vsn: "1.0.0",
          status: "DECLINED",
          reason: e,
          data: null
        });
      },
      redirect: function(e) {
        Of("FCL:VIEW:RESPONSE", {
          f_type: "PollingResponse",
          f_vsn: "1.0.0",
          status: "REDIRECT",
          reason: null,
          data: e
        });
      },
      onMessageFromFCL: Cf,
      encodeMessageFromSignable: function(e, t) {
        var n = function(e) {
          var t = new Set(e.authorizers);
          return t.add(e.proposalKey.address), t.delete(e.payer), Array.from(t).map(Le);
        }(e.voucher);
        var r = function(e) {
          var t = new Set([ e.payer ]);
          return Array.from(t).map(Le);
        }(e.voucher);
        var a = n.includes(Le(t));
        var o = r.includes(Le(t));
        if (!a && !o) throw new jo(t);
        var u = {
          cadence: e.voucher.cadence,
          refBlock: e.voucher.refBlock,
          computeLimit: e.voucher.computeLimit,
          arguments: e.voucher.arguments,
          proposalKey: b(b({}, e.voucher.proposalKey), {}, {
            address: Ne(e.voucher.proposalKey.address)
          }),
          payer: Ne(e.voucher.payer),
          authorizers: e.voucher.authorizers.map(Ne),
          payloadSigs: e.voucher.payloadSigs.map((function(e) {
            return b(b({}, e), {}, {
              address: Ne(e.address)
            });
          }))
        };
        return a ? Ta(u) : _a(u);
      },
      CompositeSignature: function(e, t, n) {
        this.f_type = Gi.f_type, this.f_vsn = Gi.f_vsn, this.addr = Le(e), this.keyId = Number(t), this.signature = n;
      },
      encodeAccountProof: Ff,
      injectExtService: function(e) {
        "authn" === e.type && null != e.endpoint ? (Array.isArray(window.fcl_extensions) || (window.fcl_extensions = []), window.fcl_extensions.push(e)) : console.warn("Authn service is required");
      }
    });
    var Gf = "ACCOUNT_PROOF";
    var Df = "USER_SIGNATURE";
    var Uf = function(e) {
      if (e.appIdentifier) {
        var t = e.appIdentifier, n = e.address, r = e.nonce, a = e.signatures;
        return se(ci(t), "verifyAccountProof({ appIdentifier }) -- appIdentifier must be a string"), se(ci(n) && 16 === Ne(n).length, "verifyAccountProof({ address }) -- address must be a valid address"), 
        se(/^[0-9a-f]+$/i.test(r), "nonce must be a hex string"), se(Array.isArray(a) && a.every((function(e, t, n) {
          return "CompositeSignature" === e.f_type;
        })), "Must include an Array of CompositeSignatures to verify"), se(a.map((function(e) {
          return e.addr;
        })).every((function(e, t, n) {
          return e === n[0];
        })), "User signatures to be verified must be from a single account address"), !0;
      }
      var o = e.message, u = e.address, c = e.compSigs;
      return se(/^[0-9a-f]+$/i.test(o), "Signed message must be a hex string"), se(ci(u) && 16 === Ne(u).length, "verifyUserSignatures({ address }) -- address must be a valid address"), 
      se(Array.isArray(c) && c.every((function(e, t, n) {
        return "CompositeSignature" === e.f_type;
      })), "Must include an Array of CompositeSignatures to verify"), se(c.map((function(e) {
        return e.addr;
      })).every((function(e, t, n) {
        return e === n[0];
      })), "User signatures to be verified must be from a single account address"), !0;
    };
    var Bf = function() {
      var e = l(d().mark((function e(t, n) {
        var r, a, o;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return r = "ACCOUNT_PROOF" === t ? "verifyAccountProofSignatures" : "verifyUserSignatures", e.next = 3, ue.get("flow.network");

           case 3:
            if (a = e.sent) {
              e.next = 9;
              break;
            }
            return e.next = 7, ue.get("env");

           case 7:
            (a = e.sent) && de.deprecate({
              pkg: "FCL",
              subject: 'Using the "env" configuration key for specifying the flow network',
              message: 'Please use "flow.network" instead.',
              transition: "https://github.com/onflow/flow-js-sdk/blob/master/packages/fcl/TRANSITIONS.md#0001-deprecate-env-config-key"
            });

           case 9:
            return se(n.fclCryptoContract || "testnet" === a || "mainnet" === a, "${verifyFunction}({ fclCryptoContract }) -- config.flow.network must be specified (testnet || mainnet) or contract address provided via opts.fclCryptoContract"), 
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
    function Mf() {
      return Mf = l(d().mark((function e(t, n) {
        var r, a, o, u, c, i, s, f, l, p, v = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            r = n.address, a = n.nonce, o = n.signatures, u = v.length > 2 && void 0 !== v[2] ? v[2] : {}, Uf({
              appIdentifier: t,
              address: r,
              nonce: a,
              signatures: o
            }), c = Ff({
              address: r,
              nonce: a,
              appIdentifier: t
            }, !1), i = [], s = [], f = w(o);
            try {
              for (f.s(); !(l = f.n()).done; ) p = l.value, i.push(p.signature), s.push(p.keyId.toString());
            } catch (d) {
              f.e(d);
            } finally {
              f.f();
            }
            return e.t0 = Ti, e.next = 11, Bf(Gf, u);

           case 11:
            return e.t1 = e.sent, e.t2 = function(e, t) {
              return [ e(Le(r), t.Address), e(c, t.String), e(s, t.Array(t.Int)), e(i, t.Array(t.String)) ];
            }, e.t3 = {
              cadence: e.t1,
              args: e.t2
            }, e.abrupt("return", (0, e.t0)(e.t3));

           case 15:
           case "end":
            return e.stop();
          }
        }), e);
      }))), Mf.apply(this, arguments);
    }
    function zf(e, t) {
      return Yf.apply(this, arguments);
    }
    function Yf() {
      return Yf = l(d().mark((function e(t, n) {
        var r, a, o, u, c, i, s, f = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            r = f.length > 2 && void 0 !== f[2] ? f[2] : {}, a = Le(n[0].addr), Uf({
              message: t,
              address: a,
              compSigs: n
            }), o = [], u = [], c = w(n);
            try {
              for (c.s(); !(i = c.n()).done; ) s = i.value, o.push(s.signature), u.push(s.keyId.toString());
            } catch (l) {
              c.e(l);
            } finally {
              c.f();
            }
            return e.t0 = Ti, e.next = 10, Bf(Df, r);

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
      }))), Yf.apply(this, arguments);
    }
    var qf = Object.freeze({
      __proto__: null,
      verifyAccountProof: function(e, t) {
        return Mf.apply(this, arguments);
      },
      verifyUserSignatures: zf
    });
    var Hf = de.deprecate({
      pkg: "FCL",
      subject: "fcl.verifyUserSignatures()",
      message: "Please use fcl.AppUtils.verifyUserSignatures()",
      callback: function(e, t) {
        return zf(e, t);
      }
    });
    var Kf = function() {
      var e = l(d().mark((function e() {
        var t, n, r, a = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return t = a.length > 0 && void 0 !== a[0] ? a[0] : [], n = a.length > 1 && void 0 !== a[1] ? a[1] : {}, e.next = 4, ue.first([ "sdk.resolve" ], n.resolve || _o);

           case 4:
            if (r = e.sent, !Array.isArray(t)) {
              e.next = 9;
              break;
            }
            return e.next = 8, Vr(ar(), t);

           case 8:
            t = e.sent;

           case 9:
            return e.t0 = JSON, e.t1 = fo, e.next = 13, r(t);

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
    }();
    var Wf;
    var Vf = "POLL";
    var Jf = function() {
      var e = l(d().mark((function e(t) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.abrupt("return", No([ Jo(t) ]).then(Lo));

           case 1:
           case "end":
            return e.stop();
          }
        }), e);
      })));
      return function(t) {
        return e.apply(this, arguments);
      };
    }();
    var Xf = function(e) {
      return e.status >= 4;
    };
    var $f = function(e) {
      return e.status >= 3;
    };
    var Zf = function(e) {
      return e.status >= 2;
    };
    var Qf = function(e, t) {
      return JSON.stringify(e) !== JSON.stringify(t);
    };
    var el = (g(Wf = {}, I, function() {
      var e = l(d().mark((function e(t) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            t.sendSelf(Vf);

           case 1:
           case "end":
            return e.stop();
          }
        }), e);
      })));
      return function(t) {
        return e.apply(this, arguments);
      };
    }()), g(Wf, S, (function(e, t) {
      e.subscribe(t.from), e.send(t.from, A, e.all());
    })), g(Wf, R, (function(e, t) {
      e.unsubscribe(t.from);
    })), g(Wf, T, function() {
      var e = l(d().mark((function e(t, n) {
        return d().wrap((function(e) {
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
    }()), g(Wf, Vf, function() {
      var e = l(d().mark((function e(t) {
        var n;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.prev = 0, e.next = 3, Jf(t.self());

           case 3:
            n = e.sent, e.next = 9;
            break;

           case 6:
            return e.prev = 6, e.t0 = e.catch(0), e.abrupt("return", t.fatalError(e.t0));

           case 9:
            Xf(n) || setTimeout((function() {
              return t.sendSelf(Vf);
            }), 2500), Qf(t.all(), n) && t.broadcast(A, n), t.merge(n);

           case 12:
           case "end":
            return e.stop();
          }
        }), e, null, [ [ 0, 6 ] ]);
      })));
      return function(t) {
        return e.apply(this, arguments);
      };
    }()), Wf);
    var tl = function(e) {
      if ("object" === m(e) && (e = e.transactionId), null == e) throw new Error("transactionId required");
      return e;
    };
    var nl = function(e) {
      return F(el, tl(e));
    };
    function rl(e) {
      function t(t) {
        return j(tl(e), nl, t);
      }
      function n(e) {
        return function() {
          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          var r = n.suppress || !1;
          return new Promise((function(n, a) {
            var o = t((function(t, u) {
              !u && !t.statusCode || r ? e(t) && (n(t), o()) : (a(u || t.errorMessage), o());
            }));
          }));
        };
      }
      return {
        snapshot: function() {
          return G(e, nl);
        },
        subscribe: t,
        onceFinalized: n(Zf),
        onceExecuted: n($f),
        onceSealed: n(Xf)
      };
    }
    var al;
    rl.isUnknown = function(e) {
      return e.status >= 0;
    }, rl.isPending = function(e) {
      return e.status >= 1;
    }, rl.isFinalized = Zf, rl.isExecuted = $f, rl.isSealed = Xf, rl.isExpired = function(e) {
      return 5 === e.status;
    };
    var ol = "TICK";
    var ul = "hwm";
    var cl = function() {
      var e = l(d().mark((function e(t) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return e.t0 = setTimeout, e.t1 = function() {
              return t.sendSelf(ol);
            }, e.next = 4, ue().get("fcl.eventPollRate", 1e4);

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
    }();
    var il = (g(al = {}, ol, function() {
      var e = l(d().mark((function e(t) {
        var n, r, a, o, u, c;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (t.hasSubs()) {
              e.next = 2;
              break;
            }
            return e.abrupt("return");

           case 2:
            if (null != (n = t.get(ul))) {
              e.next = 18;
              break;
            }
            return e.t0 = t, e.t1 = ul, e.next = 8, Mo();

           case 8:
            return e.t2 = e.sent, e.t0.put.call(e.t0, e.t1, e.t2), e.t3 = t, e.t4 = ol, e.next = 14, cl(t);

           case 14:
            e.t5 = e.sent, e.t3.put.call(e.t3, e.t4, e.t5), e.next = 34;
            break;

           case 18:
            return e.next = 20, Mo();

           case 20:
            if (r = e.sent, t.put(ul, r), !(n.height < r.height)) {
              e.next = 28;
              break;
            }
            return e.next = 25, No([ Ho(t.self(), n.height + 1, r.height) ]).then(Lo);

           case 25:
            a = e.sent, o = w(a);
            try {
              for (o.s(); !(u = o.n()).done; ) c = u.value, t.broadcast("UPDATED", c.data);
            } catch (i) {
              o.e(i);
            } finally {
              o.f();
            }

           case 28:
            return e.t6 = t, e.t7 = ol, e.next = 32, cl(t);

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
    }()), g(al, S, function() {
      var e = l(d().mark((function e(t, n) {
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            if (t.hasSubs()) {
              e.next = 7;
              break;
            }
            return e.t0 = t, e.t1 = ol, e.next = 5, cl(t);

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
    }()), g(al, R, (function(e, t) {
      e.unsubscribe(t.from), e.hasSubs() || (clearTimeout(e.get(ol)), e.delete(ol), e.delete(ul));
    })), al);
    var sl = function(e) {
      return F(il, e);
    };
    function fl(e) {
      return {
        subscribe: function(t) {
          return j(e, sl, t);
        }
      };
    }
    var ll = {};
    var pl = {};
    var dl = {};
    var vl = {};
    var hl = function(e, t) {
      return function(n, r) {
        var a = 2 * r;
        var o = 2 * t;
        n[a] = e[o], n[a + 1] = e[o + 1];
      };
    };
    !function(e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var t = function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(hl);
      var n = function(e) {
        var n = e.A, r = e.C;
        for (var a = 0; a < 25; a += 5) {
          for (var o = 0; o < 5; o++) (0, t.default)(n, a + o)(r, o);
          for (var u = 0; u < 5; u++) {
            var c = 2 * (a + u);
            var i = (u + 1) % 5 * 2;
            var s = (u + 2) % 5 * 2;
            n[c] ^= ~r[i] & r[s], n[c + 1] ^= ~r[i + 1] & r[s + 1];
          }
        }
      };
      e.default = n;
    }(vl);
    var ml = {};
    var gl = {};
    !function(e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var t = new Uint32Array([ 0, 1, 0, 32898, 2147483648, 32906, 2147483648, 2147516416, 0, 32907, 0, 2147483649, 2147483648, 2147516545, 2147483648, 32777, 0, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 2147483648, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 0, 32778, 2147483648, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 0, 2147483649, 2147483648, 2147516424 ]);
      e.default = t;
    }(gl), function(e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var t = function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(gl);
      var n = function(e) {
        var n = e.A;
        var r = 2 * e.roundIndex;
        n[0] ^= t.default[r], n[1] ^= t.default[r + 1];
      };
      e.default = n;
    }(ml);
    var yl = {};
    var bl = {};
    !function(e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var t = [ 10, 7, 11, 17, 18, 3, 5, 16, 8, 21, 24, 4, 15, 23, 19, 13, 12, 2, 20, 14, 22, 9, 6, 1 ];
      e.default = t;
    }(bl);
    var wl = {};
    !function(e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var t = [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 2, 14, 27, 41, 56, 8, 25, 43, 62, 18, 39, 61, 20, 44 ];
      e.default = t;
    }(wl), function(e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var t = a(bl);
      var n = a(wl);
      var r = a(hl);
      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      var o = function(e) {
        var a = e.A, o = e.C, u = e.W;
        (0, r.default)(a, 1)(u, 0);
        var c = 0;
        var i = 0;
        var s = 0;
        var f = 32;
        for (var l = 0; l < 24; l++) {
          var p = t.default[l];
          var d = n.default[l];
          (0, r.default)(a, p)(o, 0), c = u[0], i = u[1], f = 32 - d, u[s = d < 32 ? 0 : 1] = c << d | i >>> f, u[(s + 1) % 2] = i << d | c >>> f, 
          (0, r.default)(u, 0)(a, p), (0, r.default)(o, 0)(u, 0);
        }
      };
      e.default = o;
    }(yl);
    var xl = {};
    function kl(e) {
      return El.apply(this, arguments);
    }
    function El() {
      return (El = l(d().mark((function e(t) {
        var n;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return (n = new ll.SHA3(256)).update(ve.Buffer.from(t, "utf8")), e.abrupt("return", n.digest("hex"));

           case 3:
           case "end":
            return e.stop();
          }
        }), e);
      })))).apply(this, arguments);
    }
    function Il(e) {
      return Sl.apply(this, arguments);
    }
    function Sl() {
      return Sl = l(d().mark((function e(t) {
        var n, r, a, o, u, c;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            Po(null != (n = t.template), "generateTemplateId({ template }) -- template must be defined"), Po("object" === m(n), "generateTemplateId({ template }) -- template must be an object"), 
            Po("InteractionTemplate" == typeof n.f_type, "generateTemplateId({ template }) -- template object must be an InteractionTemplate"), 
            n = mi(n), e.t0 = n.f_version, e.next = "1.0.0" === e.t0 ? 8 : 40;
            break;

           case 8:
            return r = n.data, e.next = 11, Promise.all(Object.keys(r.messages).map(function() {
              var e = l(d().mark((function e(t) {
                var n, a;
                return d().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                   case 0:
                    return e.next = 2, kl(t);

                   case 2:
                    return e.t0 = e.sent, e.next = 5, Promise.all(Object.keys(null === (n = r.messages) || void 0 === n || null === (a = n[t]) || void 0 === a ? void 0 : a.i18n).map(function() {
                      var e = l(d().mark((function e(n) {
                        var a, o, u;
                        return d().wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                           case 0:
                            return e.next = 2, kl(n);

                           case 2:
                            return e.t0 = e.sent, e.next = 5, kl(null === (a = r.messages) || void 0 === a || null === (o = a[t]) || void 0 === o || null === (u = o.i18n) || void 0 === u ? void 0 : u[n]);

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
              var e = l(d().mark((function e(t) {
                var n;
                return d().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                   case 0:
                    return e.next = 2, kl(t);

                   case 2:
                    return e.t0 = e.sent, e.next = 5, Promise.all(Object.keys(null == r || null === (n = r.dependencies) || void 0 === n ? void 0 : n[t]).map(function() {
                      var e = l(d().mark((function e(n) {
                        var a, o;
                        return d().wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                           case 0:
                            return e.next = 2, kl(n);

                           case 2:
                            return e.t0 = e.sent, e.next = 5, Promise.all(Object.keys(null == r || null === (a = r.dependencies) || void 0 === a || null === (o = a[t]) || void 0 === o ? void 0 : o[n]).map(function() {
                              var e = l(d().mark((function e(a) {
                                var o, u, c, i, s, f, l, p, v, h, m, g, y, b, w;
                                return d().wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                   case 0:
                                    return e.next = 2, kl(a);

                                   case 2:
                                    return e.t0 = e.sent, e.next = 5, kl(null == r || null === (o = r.dependencies) || void 0 === o || null === (u = o[t]) || void 0 === u || null === (c = u[n]) || void 0 === c ? void 0 : c[a].address);

                                   case 5:
                                    return e.t1 = e.sent, e.next = 8, kl(null == r || null === (i = r.dependencies) || void 0 === i || null === (s = i[t]) || void 0 === s || null === (f = s[n]) || void 0 === f ? void 0 : f[a].contract);

                                   case 8:
                                    return e.t2 = e.sent, e.next = 11, kl(null == r || null === (l = r.dependencies) || void 0 === l || null === (p = l[t]) || void 0 === p || null === (v = p[n]) || void 0 === v ? void 0 : v[a].fq_address);

                                   case 11:
                                    return e.t3 = e.sent, e.next = 14, kl(null == r || null === (h = r.dependencies) || void 0 === h || null === (m = h[t]) || void 0 === m || null === (g = m[n]) || void 0 === g ? void 0 : g[a].pin);

                                   case 14:
                                    return e.t4 = e.sent, e.next = 17, kl(String(null == r || null === (y = r.dependencies) || void 0 === y || null === (b = y[t]) || void 0 === b || null === (w = b[n]) || void 0 === w ? void 0 : w[a].pin_block_height));

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
              var e = l(d().mark((function e(t) {
                var n, a, o, u;
                return d().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                   case 0:
                    return e.next = 2, kl(t);

                   case 2:
                    return e.t0 = e.sent, e.next = 5, kl(String(null == r || null === (n = r.arguments) || void 0 === n ? void 0 : n[t].index));

                   case 5:
                    return e.t1 = e.sent, e.next = 8, kl(null == r || null === (a = r.arguments) || void 0 === a ? void 0 : a[t].type);

                   case 8:
                    return e.t2 = e.sent, e.next = 11, kl((null == r || null === (o = r.arguments) || void 0 === o ? void 0 : o[t].balance) || "");

                   case 11:
                    return e.t3 = e.sent, e.next = 14, Promise.all(Object.keys(null == r || null === (u = r.arguments) || void 0 === u ? void 0 : u[t].messages).map(function() {
                      var e = l(d().mark((function e(n) {
                        var a, o;
                        return d().wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                           case 0:
                            return e.next = 2, kl(n);

                           case 2:
                            return e.t0 = e.sent, e.next = 5, Promise.all(Object.keys(null == r || null === (a = r.arguments) || void 0 === a || null === (o = a[t].messages) || void 0 === o ? void 0 : o[n].i18n).map(function() {
                              var e = l(d().mark((function e(a) {
                                var o, u, c;
                                return d().wrap((function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                   case 0:
                                    return e.next = 2, kl(a);

                                   case 2:
                                    return e.t0 = e.sent, e.next = 5, kl(null == r || null === (o = r.arguments) || void 0 === o || null === (u = o[t].messages) || void 0 === u || null === (c = u[n].i18n) || void 0 === c ? void 0 : c[a]);

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
            return u = e.sent, e.t1 = he, e.next = 21, kl("InteractionTemplate");

           case 21:
            return e.t2 = e.sent, e.next = 24, kl("1.0.0");

           case 24:
            return e.t3 = e.sent, e.next = 27, kl(null == r ? void 0 : r.type);

           case 27:
            return e.t4 = e.sent, e.next = 30, kl(null == r ? void 0 : r.interface);

           case 30:
            return e.t5 = e.sent, e.t6 = a, e.next = 34, kl(null == r ? void 0 : r.cadence);

           case 34:
            return e.t7 = e.sent, e.t8 = o, e.t9 = u, e.t10 = [ e.t2, e.t3, e.t4, e.t5, e.t6, e.t7, e.t8, e.t9 ], c = (0, e.t1)(e.t10).toString("hex"), 
            e.abrupt("return", kl(c));

           case 40:
            throw new Error("generateTemplateId Error: Unsupported template version");

           case 41:
           case "end":
            return e.stop();
          }
        }), e);
      }))), Sl.apply(this, arguments);
    }
    function Rl() {
      return Rl = l(d().mark((function e(t) {
        var n, r, a, o, u, c, i, s, f = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = t.template, r = t.auditors, a = f.length > 1 && void 0 !== f[1] ? f[1] : {}, Po(null != n, "getInteractionTemplateAudits({ template }) -- template must be defined"), 
            Po("InteractionTemplate" === (n = mi(n)).f_type, "getInteractionTemplateAudits({ template }) -- template must be an InteractionTemplate"), 
            e.next = 7, Il({
              template: n
            });

           case 7:
            if ((o = e.sent) === n.id) {
              e.next = 11;
              break;
            }
            throw de({
              title: "getInteractionTemplateAudits Debug Error",
              message: "Could not recompute and match template ID\n                computed: ".concat(o, "\n                template: ").concat(n.id, "\n            "),
              level: le.debug
            }), new Error("getInteractionTemplateAudits Error: Could not recompute and match template ID");

           case 11:
            e.t0 = n.f_version, e.next = "1.0.0" === e.t0 ? 14 : 33;
            break;

           case 14:
            if (e.t1 = r, e.t1) {
              e.next = 19;
              break;
            }
            return e.next = 18, ue().get("flow.auditors");

           case 18:
            e.t1 = e.sent;

           case 19:
            if (Po(u = e.t1, "getInteractionTemplateAudits Error: Required configuration for 'fcl.auditors' is not set"), Po(Array.isArray(u), "getInteractionTemplateAudits Error: Required configuration for 'fcl.auditors' is not an array"), 
            c = a.flowInteractionAuditContract) {
              e.next = 29;
              break;
            }
            return e.next = 26, ue().get("flow.network");

           case 26:
            Po("mainnet" === (i = e.sent) || "testnet" === i, "getInteractionTemplateAudits Error: Unable to determine address for FlowInteractionTemplateAudit contract. Set configuration for 'fcl.network' to 'mainnet' or 'testnet'"), 
            c = "mainnet" === i ? "0xfd100e39d50a13e6" : "0xf78bfc12d0a786dc";

           case 29:
            return e.next = 31, Ti({
              cadence: "\n        import FlowInteractionTemplateAudit from ".concat(c, "\n        pub fun main(templateId: String, auditors: [Address]): {Address:Bool} {\n          return FlowInteractionTemplateAudit.getHasTemplateBeenAuditedByAuditors(templateId: templateId, auditors: auditors)\n        }\n        "),
              args: function(e, t) {
                return [ e(o, t.String), e(u, t.Array(t.Address)) ];
              }
            });

           case 31:
            return s = e.sent, e.abrupt("return", s);

           case 33:
            throw new Error("getInteractionTemplateAudits Error: Unsupported template version");

           case 34:
           case "end":
            return e.stop();
          }
        }), e);
      }))), Rl.apply(this, arguments);
    }
    function Al(e) {
      return {
        contractName: e.contractName,
        address: e.address,
        contract: ""
      };
    }
    function Tl(e) {
      var t = [];
      var n, r = w(e.match(/import ((\w|,| )+)* from 0x\w+/g) || []);
      try {
        for (r.s(); !(n = r.n()).done; ) {
          var a = n.value;
          var o = /import ((\w+|, |)*) from (0x\w+)/g.exec(a);
          var u, c = w(o[1].match(/((?:\w+)+),?/g) || []);
          try {
            for (c.s(); !(u = c.n()).done; ) {
              var i = u.value;
              t.push(Al({
                address: o[3],
                contractName: i.replace(/,/g, "")
              }));
            }
          } catch (s) {
            c.e(s);
          } finally {
            c.f();
          }
        }
      } catch (s) {
        r.e(s);
      } finally {
        r.f();
      }
      return t;
    }
    function _l(e) {
      return Cl.apply(this, arguments);
    }
    function Cl() {
      return Cl = l(d().mark((function e(t) {
        var n, r, a, o, u, c, i, s, f, l, p, v, h, m = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            n = t.address, r = t.contractName, a = t.blockHeight, o = m.length > 1 && void 0 !== m[1] ? m[1] : {}, Po(null != n, "generateDependencyPin({ address }) -- address must be defined"), 
            Po(null != r, "generateDependencyPin({ contractName }) -- contractName must be defined"), Po(null != a, "generateDependencyPin({ blockHeight }) -- blockHeight must be defined"), 
            Po("string" == typeof n, "generateDependencyPin({ address }) -- address must be a string"), Po("string" == typeof r, "generateDependencyPin({ contractName }) -- contractName must be a string"), 
            Po("number" == typeof a, "generateDependencyPin({ blockHeight }) -- blockHeight must be a number"), u = [ Al({
              contractName: r,
              address: n
            }) ], c = 0, i = u;

           case 10:
            if (!(c < i.length)) {
              e.next = 33;
              break;
            }
            return f = i[c], e.t0 = No, e.t1 = ra, e.next = 16, ue().get(f.address, f.address);

           case 16:
            return e.t2 = e.sent, e.t3 = (0, e.t1)(e.t2), e.t4 = Do(a), e.t5 = [ e.t3, e.t4 ], e.t6 = o, e.next = 23, (0, e.t0)(e.t5, e.t6).then(Lo);

           case 23:
            if (l = e.sent, f.contract = null === (s = l.contracts) || void 0 === s ? void 0 : s[f.contractName], f.contract) {
              e.next = 28;
              break;
            }
            throw console.error("Did not find expected contract", f, l), new Error("Did not find expected contract");

           case 28:
            p = Tl(f.contract), u.push.apply(u, fe(p));

           case 30:
            c++, e.next = 10;
            break;

           case 33:
            return v = u.map((function(e) {
              return kl(e.contract);
            })), h = v.join(""), e.abrupt("return", kl(h));

           case 36:
           case "end":
            return e.stop();
          }
        }), e);
      }))), Cl.apply(this, arguments);
    }
    function Ol() {
      return Ol = l(d().mark((function e(t) {
        var n, r, a, o, u, c = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = t.address, r = t.contractName, a = c.length > 1 && void 0 !== c[1] ? c[1] : {}, e.next = 4, Mo({
              sealed: !0
            }, a);

           case 4:
            return o = e.sent, u = null == o ? void 0 : o.height, e.abrupt("return", _l({
              address: n,
              contractName: r,
              blockHeight: u
            }, a));

           case 7:
           case "end":
            return e.stop();
          }
        }), e);
      }))), Ol.apply(this, arguments);
    }
    function Pl(e) {
      if (null == e) return null;
      if ("1.0.0" === e.f_version) return e;
      throw new Error("normalizeInteractionTemplateInterface Error: Invalid InteractionTemplateInterface");
    }
    function Nl() {
      return Nl = l(d().mark((function e(t) {
        var n, r, a;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            Po(null != (n = t.templateInterface), "generateTemplateInterfaceId({ templateInterface }) -- templateInterface must be defined"), 
            Po("object" === m(n), "generateTemplateInterfaceId({ templateInterface }) -- templateInterface must be an object"), Po("InteractionTemplateInterface" == typeof n.f_type, "generateTemplateInterfaceId({ templateInterface }) -- templateInterface object must be an InteractionTemplate"), 
            n = Pl(n), e.t0 = n.f_version, e.next = "1.0.0" === e.t0 ? 8 : 25;
            break;

           case 8:
            return r = n.data, e.t1 = he, e.next = 12, kl("InteractionTemplateInterface");

           case 12:
            return e.t2 = e.sent, e.next = 15, kl("1.0.0");

           case 15:
            return e.t3 = e.sent, e.next = 18, kl(r.flip);

           case 18:
            return e.t4 = e.sent, e.next = 21, Promise.all(Object.keys(r.arguments).map(function() {
              var e = l(d().mark((function e(t) {
                return d().wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                   case 0:
                    return e.next = 2, kl(t);

                   case 2:
                    return e.t0 = e.sent, e.next = 5, kl(String(r.arguments[t].index));

                   case 5:
                    return e.t1 = e.sent, e.next = 8, kl(r.arguments[t].type);

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
            return e.t5 = e.sent, e.t6 = [ e.t2, e.t3, e.t4, e.t5 ], a = (0, e.t1)(e.t6).toString("hex"), e.abrupt("return", kl(a));

           case 25:
            throw new Error("generateTemplateInterfaceId Error: Unsupported templateInterface version");

           case 26:
           case "end":
            return e.stop();
          }
        }), e);
      }))), Nl.apply(this, arguments);
    }
    function Ll(e) {
      return Fl.apply(this, arguments);
    }
    function Fl() {
      return Fl = l(d().mark((function e(t) {
        var n, r, a, o, u, c, i, s, f, l, p, v, h, g, y, b, w = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            n = t.template, r = t.blockHeight, a = t.network, o = w.length > 1 && void 0 !== w[1] ? w[1] : {}, Po(null != n, "generateDependencyPin({ template }) -- template must be defined"), 
            Po("object" === m(n), "generateDependencyPin({ template }) -- template must be an object"), Po("InteractionTemplate" === n.f_type, "generateDependencyPin({ template }) -- template must be an InteractionTemplate"), 
            n = mi(n), Po(null != a, "generateDependencyPin({ network }) network must be defined"), Po(null != r, "generateDependencyPin({ blockHeight }) blockHeight must be defined"), 
            Po("number" == typeof r, "generateDependencyPin({ blockHeight }) blockHeight must be a number"), e.t0 = n.f_version, e.next = "1.0.0" === e.t0 ? 12 : 38;
            break;

           case 12:
            u = Object.keys(n.data.dependencies), c = 0, i = u;

           case 14:
            if (!(c < i.length)) {
              e.next = 37;
              break;
            }
            s = i[c], f = n.data.dependencies[s], l = Object.keys(f), p = 0, v = l;

           case 19:
            if (!(p < v.length)) {
              e.next = 34;
              break;
            }
            if (h = v[p], g = n.data.dependencies[s][h], void 0 !== (y = g[a])) {
              e.next = 25;
              break;
            }
            return e.abrupt("continue", 31);

           case 25:
            return e.next = 27, _l({
              address: y.address,
              contractName: y.contract,
              blockHeight: r
            }, o);

           case 27:
            if ((b = e.sent) === y.pin) {
              e.next = 31;
              break;
            }
            return de({
              title: "verifyDependencyPinsSame Debug Error",
              message: "Could not recompute and match dependency pin.\n                                address: ".concat(y.address, " | contract: ").concat(y.contract, "\n                                computed: ").concat(b, "\n                                template: ").concat(y.pin, "\n                            "),
              level: le.debug
            }), e.abrupt("return", !1);

           case 31:
            p++, e.next = 19;
            break;

           case 34:
            c++, e.next = 14;
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
      }))), Fl.apply(this, arguments);
    }
    function jl() {
      return jl = l(d().mark((function e(t) {
        var n, r, a, o, u, c = arguments;
        return d().wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
           case 0:
            return n = t.template, r = t.network, a = c.length > 1 && void 0 !== c[1] ? c[1] : {}, e.next = 4, Mo({
              sealed: !0
            });

           case 4:
            return o = e.sent, u = null == o ? void 0 : o.height, e.abrupt("return", Ll({
              template: n,
              network: r,
              blockHeight: u
            }, a));

           case 7:
           case "end":
            return e.stop();
          }
        }), e);
      }))), jl.apply(this, arguments);
    }
    !function(e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var t = function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(hl);
      var n = function(e) {
        var n = e.A, r = e.C, a = e.D, o = e.W;
        var u = 0;
        var c = 0;
        for (var i = 0; i < 5; i++) {
          var s = 2 * i;
          var f = 2 * (i + 5);
          var l = 2 * (i + 10);
          var p = 2 * (i + 15);
          var d = 2 * (i + 20);
          r[s] = n[s] ^ n[f] ^ n[l] ^ n[p] ^ n[d], r[s + 1] = n[s + 1] ^ n[f + 1] ^ n[l + 1] ^ n[p + 1] ^ n[d + 1];
        }
        for (var v = 0; v < 5; v++) {
          (0, t.default)(r, (v + 1) % 5)(o, 0), u = o[0], c = o[1], o[0] = u << 1 | c >>> 31, o[1] = c << 1 | u >>> 31, a[2 * v] = r[(v + 4) % 5 * 2] ^ o[0], 
          a[2 * v + 1] = r[(v + 4) % 5 * 2 + 1] ^ o[1];
          for (var h = 0; h < 25; h += 5) n[2 * (h + v)] ^= a[2 * v], n[2 * (h + v) + 1] ^= a[2 * v + 1];
        }
      };
      e.default = n;
    }(xl), function(e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var t = o(vl);
      var n = o(ml);
      var r = o(yl);
      var a = o(xl);
      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }
      var u = function() {
        var e = new Uint32Array(10);
        var o = new Uint32Array(10);
        var u = new Uint32Array(2);
        return function(c) {
          for (var i = 0; i < 24; i++) (0, a.default)({
            A: c,
            C: e,
            D: o,
            W: u
          }), (0, r.default)({
            A: c,
            C: e,
            W: u
          }), (0, t.default)({
            A: c,
            C: e
          }), (0, n.default)({
            A: c,
            roundIndex: i
          });
          e.fill(0), o.fill(0), u.fill(0);
        };
      };
      e.default = u;
    }(dl), function(e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var t = ve;
      var n = function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(dl);
      var r = function(e, t) {
        for (var n = 0; n < e.length; n += 8) {
          var r = n / 4;
          t[r] ^= e[n + 7] << 24 | e[n + 6] << 16 | e[n + 5] << 8 | e[n + 4], t[r + 1] ^= e[n + 3] << 24 | e[n + 2] << 16 | e[n + 1] << 8 | e[n];
        }
        return t;
      };
      var a = function(e, t) {
        for (var n = 0; n < t.length; n += 8) {
          var r = n / 4;
          t[n] = e[r + 1], t[n + 1] = e[r + 1] >>> 8, t[n + 2] = e[r + 1] >>> 16, t[n + 3] = e[r + 1] >>> 24, t[n + 4] = e[r], t[n + 5] = e[r] >>> 8, 
          t[n + 6] = e[r] >>> 16, t[n + 7] = e[r] >>> 24;
        }
        return t;
      };
      var o = function(e) {
        var o = this;
        var u = e.capacity, c = e.padding;
        var i = (0, n.default)();
        var s = u / 8;
        var f = 200 - u / 4;
        var l = 0;
        var p = new Uint32Array(50);
        var d = t.Buffer.allocUnsafe(f);
        return this.absorb = function(e) {
          for (var t = 0; t < e.length; t++) d[l] = e[t], (l += 1) >= f && (r(d, p), i(p), l = 0);
          return o;
        }, this.squeeze = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          var n = {
            buffer: e.buffer || t.Buffer.allocUnsafe(s),
            padding: e.padding || c,
            queue: t.Buffer.allocUnsafe(d.length),
            state: new Uint32Array(p.length)
          };
          d.copy(n.queue);
          for (var o = 0; o < p.length; o++) n.state[o] = p[o];
          n.queue.fill(0, l), n.queue[l] |= n.padding, n.queue[f - 1] |= 128, r(n.queue, n.state);
          for (var u = 0; u < n.buffer.length; u += f) i(n.state), a(n.state, n.buffer.slice(u, u + f));
          return n.buffer;
        }, this.reset = function() {
          return d.fill(0), p.fill(0), l = 0, o;
        }, this;
      };
      e.default = o;
    }(pl), function(e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = e.SHAKE = e.SHA3Hash = e.SHA3 = e.Keccak = void 0;
      var t = ve;
      var n = function(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }(pl);
      var r = function(e) {
        var r = e.allowedSizes, a = e.defaultSize, o = e.padding;
        return function e() {
          var u = this;
          var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
          if (!this || this.constructor !== e) return new e(c);
          if (r && !r.includes(c)) throw new Error("Unsupported hash length");
          var i = new n.default({
            capacity: c
          });
          return this.update = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8";
            if (t.Buffer.isBuffer(e)) return i.absorb(e), u;
            if ("string" == typeof e) return u.update(t.Buffer.from(e, n));
            throw new TypeError("Not a string or buffer");
          }, this.digest = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "binary";
            var t = "string" == typeof e ? {
              format: e
            } : e;
            var n = i.squeeze({
              buffer: t.buffer,
              padding: t.padding || o
            });
            return t.format && "binary" !== t.format ? n.toString(t.format) : n;
          }, this.reset = function() {
            return i.reset(), u;
          }, this;
        };
      };
      var a = r({
        allowedSizes: [ 224, 256, 384, 512 ],
        defaultSize: 512,
        padding: 1
      });
      e.Keccak = a;
      var o = r({
        allowedSizes: [ 224, 256, 384, 512 ],
        defaultSize: 512,
        padding: 6
      });
      e.SHA3 = o;
      var u = r({
        allowedSizes: [ 128, 256 ],
        defaultSize: 256,
        padding: 31
      });
      e.SHAKE = u;
      var c = a;
      e.SHA3Hash = c, o.SHA3Hash = c;
      var i = o;
      e.default = i;
    }(ll);
    var Gl = Object.freeze({
      __proto__: null,
      getInteractionTemplateAudits: function(e) {
        return Rl.apply(this, arguments);
      },
      generateDependencyPin: _l,
      generateDependencyPinAtLatestSealedBlock: function(e) {
        return Ol.apply(this, arguments);
      },
      generateTemplateId: Il,
      generateTemplateInterfaceId: function(e) {
        return Nl.apply(this, arguments);
      },
      verifyDependencyPinsSame: Ll,
      verifyDependencyPinsSameAtLatestSealedBlock: function(e) {
        return jl.apply(this, arguments);
      },
      deriveCadenceByNetwork: gi,
      getTemplateMessage: function(e) {
        var t, n, r;
        var a = e.localization, o = void 0 === a ? "en-US" : a, u = e.messageKey, c = e.template;
        Po(u, "getMessage({ messageKey }) -- messageKey must be defined"), Po("stirng" == typeof u, "getMessage({ messageKey }) -- messageKey must be a string"), 
        Po(o, "getMessage({ localization }) -- localization must be defined"), Po("stirng" == typeof o, "getMessage({ localization }) -- localization must be a string"), 
        Po(null != c, "generateTemplateId({ template }) -- template must be defined"), Po("object" === m(c), "generateTemplateId({ template }) -- template must be an object"), 
        Po("InteractionTemplate" == typeof c.f_type, "generateTemplateId({ template }) -- template object must be an InteractionTemplate");
        var i = null == c || null === (t = c.data) || void 0 === t ? void 0 : t.messages;
        return null == i || null === (n = i[u]) || void 0 === n || null === (r = n.i18n) || void 0 === r ? void 0 : r[o];
      },
      getTemplateArgumentMessage: function(e) {
        var t, n, r, a, o;
        var u = e.localization, c = void 0 === u ? "en-US" : u, i = e.argumentLabel, s = e.messageKey, f = e.template;
        Po(s, "getMessage({ messageKey }) -- messageKey must be defined"), Po("stirng" == typeof s, "getMessage({ messageKey }) -- messageKey must be a string"), 
        Po(i, "getMessage({ argumentLabel }) -- argumentLabel must be defined"), Po("stirng" == typeof s, "getMessage({ argumentLabel }) -- argumentLabel must be a string"), 
        Po(c, "getMessage({ localization }) -- localization must be defined"), Po("stirng" == typeof c, "getMessage({ localization }) -- localization must be a string"), 
        Po(null != f, "generateTemplateId({ template }) -- template must be defined"), Po("object" === m(f), "generateTemplateId({ template }) -- template must be an object"), 
        Po("InteractionTemplate" == typeof f.f_type, "generateTemplateId({ template }) -- template object must be an InteractionTemplate");
        var l = null == f || null === (t = f.data) || void 0 === t ? void 0 : t.arguments;
        return null == l || null === (n = l[i]) || void 0 === n || null === (r = n.messages) || void 0 === r || null === (a = r[s]) || void 0 === a || null === (o = a.i18n) || void 0 === o ? void 0 : o[c];
      }
    });
    var Dl = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Af().authenticate(e);
    };
    var Ul = function() {
      return Af().unauthenticate();
    };
    var Bl = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Af().unauthenticate(), Af().authenticate(e);
    };
    var Ml = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Af().authenticate(e);
    };
    var zl = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Af().authenticate(e);
    };
    var Yl = Af().authorization;
    var ql = r;
    ue({
      'accessNode.api': 'https://rest-mainnet.onflow.org',
      'discovery.wallet': 'https://fcl-discovery.onflow.org/authn'
    });
    var Hl = function() {
      return a;
    };
  },
  3300: (e, t) => {
    "use strict";
    var n = function() {
      if ('undefined' != typeof self) return self;
      if ('undefined' != typeof window) return window;
      if (void 0 !== n) return n;
      throw new Error('unable to locate global object');
    }();
    e.exports = t = n.fetch, n.fetch && (t.default = n.fetch.bind(n)), t.Headers = n.Headers, t.Request = n.Request, t.Response = n.Response;
  },
  4375: e => {
    let t;
    e.exports = 'function' == typeof queueMicrotask ? queueMicrotask : e => (t || (t = Promise.resolve())).then(e).catch((e => setTimeout((() => {
      throw e;
    }), 0)));
  },
  5682: (e, t, n) => {
    "use strict";
    t.Aj = void 0;
    var r = n(8764);
    var a = function(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }(n(9274));
    var o = function(e) {
      var t = e.allowedSizes, n = e.defaultSize, o = e.padding;
      return function e() {
        var u = this;
        var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
        if (!this || this.constructor !== e) return new e(c);
        if (t && !t.includes(c)) throw new Error("Unsupported hash length");
        var i = new a.default({
          capacity: c
        });
        return this.update = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8";
          if (r.Buffer.isBuffer(e)) return i.absorb(e), u;
          if ("string" == typeof e) return u.update(r.Buffer.from(e, t));
          throw new TypeError("Not a string or buffer");
        }, this.digest = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "binary";
          var t = "string" == typeof e ? {
            format: e
          } : e;
          var n = i.squeeze({
            buffer: t.buffer,
            padding: t.padding || o
          });
          return t.format && "binary" !== t.format ? n.toString(t.format) : n;
        }, this.reset = function() {
          return i.reset(), u;
        }, this;
      };
    };
    var u = o({
      allowedSizes: [ 224, 256, 384, 512 ],
      defaultSize: 512,
      padding: 1
    });
    var c = o({
      allowedSizes: [ 224, 256, 384, 512 ],
      defaultSize: 512,
      padding: 6
    });
    t.Aj = c, o({
      allowedSizes: [ 128, 256 ],
      defaultSize: 256,
      padding: 31
    });
    var i = u;
    c.SHA3Hash = i;
  },
  9274: (e, t, n) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r = n(8764);
    var a = function(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }(n(9618));
    var o = function(e, t) {
      for (var n = 0; n < e.length; n += 8) {
        var r = n / 4;
        t[r] ^= e[n + 7] << 24 | e[n + 6] << 16 | e[n + 5] << 8 | e[n + 4], t[r + 1] ^= e[n + 3] << 24 | e[n + 2] << 16 | e[n + 1] << 8 | e[n];
      }
      return t;
    };
    var u = function(e, t) {
      for (var n = 0; n < t.length; n += 8) {
        var r = n / 4;
        t[n] = e[r + 1], t[n + 1] = e[r + 1] >>> 8, t[n + 2] = e[r + 1] >>> 16, t[n + 3] = e[r + 1] >>> 24, t[n + 4] = e[r], t[n + 5] = e[r] >>> 8, 
        t[n + 6] = e[r] >>> 16, t[n + 7] = e[r] >>> 24;
      }
      return t;
    };
    var c = function(e) {
      var t = this;
      var n = e.capacity, c = e.padding;
      var i = (0, a.default)();
      var s = n / 8;
      var f = 200 - n / 4;
      var l = 0;
      var p = new Uint32Array(50);
      var d = r.Buffer.allocUnsafe(f);
      return this.absorb = function(e) {
        for (var n = 0; n < e.length; n++) d[l] = e[n], (l += 1) >= f && (o(d, p), i(p), l = 0);
        return t;
      }, this.squeeze = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var t = {
          buffer: e.buffer || r.Buffer.allocUnsafe(s),
          padding: e.padding || c,
          queue: r.Buffer.allocUnsafe(d.length),
          state: new Uint32Array(p.length)
        };
        d.copy(t.queue);
        for (var n = 0; n < p.length; n++) t.state[n] = p[n];
        t.queue.fill(0, l), t.queue[l] |= t.padding, t.queue[f - 1] |= 128, o(t.queue, t.state);
        for (var a = 0; a < t.buffer.length; a += f) i(t.state), u(t.state, t.buffer.slice(a, a + f));
        return t.buffer;
      }, this.reset = function() {
        return d.fill(0), p.fill(0), l = 0, t;
      }, this;
    };
    t.default = c;
  },
  1298: (e, t, n) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }(n(6605));
    var a = function(e) {
      var t = e.A, n = e.C;
      for (var a = 0; a < 25; a += 5) {
        for (var o = 0; o < 5; o++) (0, r.default)(t, a + o)(n, o);
        for (var u = 0; u < 5; u++) {
          var c = 2 * (a + u);
          var i = (u + 1) % 5 * 2;
          var s = (u + 2) % 5 * 2;
          t[c] ^= ~n[i] & n[s], t[c + 1] ^= ~n[i + 1] & n[s + 1];
        }
      }
    };
    t.default = a;
  },
  6605: e => {
    "use strict";
    e.exports = function(e, t) {
      return function(n, r) {
        var a = 2 * r;
        var o = 2 * t;
        n[a] = e[o], n[a + 1] = e[o + 1];
      };
    };
  },
  9618: (e, t, n) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r = c(n(1298));
    var a = c(n(6533));
    var o = c(n(9420));
    var u = c(n(7959));
    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var i = function() {
      var e = new Uint32Array(10);
      var t = new Uint32Array(10);
      var n = new Uint32Array(2);
      return function(c) {
        for (var i = 0; i < 24; i++) (0, u.default)({
          A: c,
          C: e,
          D: t,
          W: n
        }), (0, o.default)({
          A: c,
          C: e,
          W: n
        }), (0, r.default)({
          A: c,
          C: e
        }), (0, a.default)({
          A: c,
          roundIndex: i
        });
        e.fill(0), t.fill(0), n.fill(0);
      };
    };
    t.default = i;
  },
  6533: (e, t, n) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }(n(1306));
    var a = function(e) {
      var t = e.A;
      var n = 2 * e.roundIndex;
      t[0] ^= r.default[n], t[1] ^= r.default[n + 1];
    };
    t.default = a;
  },
  1306: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var n = new Uint32Array([ 0, 1, 0, 32898, 2147483648, 32906, 2147483648, 2147516416, 0, 32907, 0, 2147483649, 2147483648, 2147516545, 2147483648, 32777, 0, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 2147483648, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 0, 32778, 2147483648, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 0, 2147483649, 2147483648, 2147516424 ]);
    t.default = n;
  },
  9420: (e, t, n) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r = u(n(6325));
    var a = u(n(3010));
    var o = u(n(6605));
    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var c = function(e) {
      var t = e.A, n = e.C, u = e.W;
      (0, o.default)(t, 1)(u, 0);
      var c = 0;
      var i = 0;
      var s = 0;
      var f = 32;
      for (var l = 0; l < 24; l++) {
        var p = r.default[l];
        var d = a.default[l];
        (0, o.default)(t, p)(n, 0), c = u[0], i = u[1], f = 32 - d, u[s = d < 32 ? 0 : 1] = c << d | i >>> f, u[(s + 1) % 2] = i << d | c >>> f, 
        (0, o.default)(u, 0)(t, p), (0, o.default)(n, 0)(u, 0);
      }
    };
    t.default = c;
  },
  6325: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var n = [ 10, 7, 11, 17, 18, 3, 5, 16, 8, 21, 24, 4, 15, 23, 19, 13, 12, 2, 20, 14, 22, 9, 6, 1 ];
    t.default = n;
  },
  3010: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var n = [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 2, 14, 27, 41, 56, 8, 25, 43, 62, 18, 39, 61, 20, 44 ];
    t.default = n;
  },
  7959: (e, t, n) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }(n(6605));
    var a = function(e) {
      var t = e.A, n = e.C, a = e.D, o = e.W;
      var u = 0;
      var c = 0;
      for (var i = 0; i < 5; i++) {
        var s = 2 * i;
        var f = 2 * (i + 5);
        var l = 2 * (i + 10);
        var p = 2 * (i + 15);
        var d = 2 * (i + 20);
        n[s] = t[s] ^ t[f] ^ t[l] ^ t[p] ^ t[d], n[s + 1] = t[s + 1] ^ t[f + 1] ^ t[l + 1] ^ t[p + 1] ^ t[d + 1];
      }
      for (var v = 0; v < 5; v++) {
        (0, r.default)(n, (v + 1) % 5)(o, 0), u = o[0], c = o[1], o[0] = u << 1 | c >>> 31, o[1] = c << 1 | u >>> 31, a[2 * v] = n[(v + 4) % 5 * 2] ^ o[0], 
        a[2 * v + 1] = n[(v + 4) % 5 * 2 + 1] ^ o[1];
        for (var h = 0; h < 25; h += 5) t[2 * (h + v)] ^= a[2 * v], t[2 * (h + v) + 1] ^= a[2 * v + 1];
      }
    };
    t.default = a;
  },
  7061: (e, t, n) => {
    var r = n(8698).default;
    function a() {
      "use strict";
      e.exports = a = function() {
        return t;
      }, e.exports.__esModule = !0, e.exports.default = e.exports;
      var t = {}, n = Object.prototype, o = n.hasOwnProperty, u = "function" == typeof Symbol ? Symbol : {}, c = u.iterator || "@@iterator", i = u.asyncIterator || "@@asyncIterator", s = u.toStringTag || "@@toStringTag";
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
      } catch (_) {
        f = function(e, t, n) {
          return e[t] = n;
        };
      }
      function l(e, t, n, r) {
        var a = t && t.prototype instanceof v ? t : v, o = Object.create(a.prototype), u = new R(r || []);
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
                var c = E(u, n);
                if (c) {
                  if (c === d) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw r = "completed", n.arg;
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var i = p(e, t, n);
              if ("normal" === i.type) {
                if (r = n.done ? "completed" : "suspendedYield", i.arg === d) continue;
                return {
                  value: i.arg,
                  done: n.done
                };
              }
              "throw" === i.type && (r = "completed", n.method = "throw", n.arg = i.arg);
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
        } catch (_) {
          return {
            type: "throw",
            arg: _
          };
        }
      }
      t.wrap = l;
      var d = {};
      function v() {}
      function h() {}
      function m() {}
      var g = {};
      f(g, c, (function() {
        return this;
      }));
      var y = Object.getPrototypeOf, b = y && y(y(A([])));
      b && b !== n && o.call(b, c) && (g = b);
      var w = m.prototype = v.prototype = Object.create(g);
      function x(e) {
        [ "next", "throw", "return" ].forEach((function(t) {
          f(e, t, (function(e) {
            return this._invoke(t, e);
          }));
        }));
      }
      function k(e, t) {
        function n(a, u, c, i) {
          var s = p(e[a], e, u);
          if ("throw" !== s.type) {
            var f = s.arg, l = f.value;
            return l && "object" == r(l) && o.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
              n("next", e, c, i);
            }), (function(e) {
              n("throw", e, c, i);
            })) : t.resolve(l).then((function(e) {
              f.value = e, c(f);
            }), (function(e) {
              return n("throw", e, c, i);
            }));
          }
          i(s.arg);
        }
        var a;
        this._invoke = function(e, r) {
          function o() {
            return new t((function(t, a) {
              n(e, r, t, a);
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
      function R(e) {
        this.tryEntries = [ {
          tryLoc: "root"
        } ], e.forEach(I, this), this.reset(!0);
      }
      function A(e) {
        if (e) {
          var t = e[c];
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
      return h.prototype = m, f(w, "constructor", m), f(m, "constructor", h), h.displayName = f(m, s, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name));
      }, t.mark = function(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, f(e, s, "GeneratorFunction")), e.prototype = Object.create(w), 
        e;
      }, t.awrap = function(e) {
        return {
          __await: e
        };
      }, x(k.prototype), f(k.prototype, i, (function() {
        return this;
      })), t.AsyncIterator = k, t.async = function(e, n, r, a, o) {
        void 0 === o && (o = Promise);
        var u = new k(l(e, n, r, a), o);
        return t.isGeneratorFunction(n) ? u : u.next().then((function(e) {
          return e.done ? e.value : u.next();
        }));
      }, x(w), f(w, s, "Generator"), f(w, c, (function() {
        return this;
      })), f(w, "toString", (function() {
        return "[object Generator]";
      })), t.keys = function(e) {
        var t = [];
        for (var n in e) t.push(n);
        return t.reverse(), function n() {
          for (;t.length; ) {
            var r = t.pop();
            if (r in e) return n.value = r, n.done = !1, n;
          }
          return n.done = !0, n;
        };
      }, t.values = A, R.prototype = {
        constructor: R,
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
              var c = o.call(a, "catchLoc"), i = o.call(a, "finallyLoc");
              if (c && i) {
                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return n(a.finallyLoc);
              } else if (c) {
                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
              } else {
                if (!i) throw new Error("try statement without catch or finally");
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
            iterator: A(e),
            resultName: t,
            nextLoc: n
          }, "next" === this.method && (this.arg = void 0), d;
        }
      }, t;
    }
    e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports;
  },
  8698: e => {
    function t(n) {
      return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  },
  4687: (e, t, n) => {
    var r = n(7061)();
    e.exports = r;
    try {
      regeneratorRuntime = r;
    } catch (a) {
      "object" == typeof globalThis ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r);
    }
  }
} ]);