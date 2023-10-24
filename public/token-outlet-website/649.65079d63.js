(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 649 ], {
  42169: (e, t, n) => {
    "use strict";
    n.r(t), n.d(t, {
      WC_V2_DEFAULT_CHAINS: () => u,
      getWalletConnectV2ProviderInstance: () => c
    });
    var r = n(28842);
    var o = function(e, t, n, r) {
      return new (n || (n = Promise))((function(o, a) {
        function u(e) {
          try {
            i(r.next(e));
          } catch (t) {
            a(t);
          }
        }
        function c(e) {
          try {
            i(r.throw(e));
          } catch (t) {
            a(t);
          }
        }
        function i(e) {
          e.done ? o(e.value) : function(e) {
            return e instanceof n ? e : new n((function(t) {
              t(e);
            }));
          }(e.value).then(u, c);
        }
        i((r = r.apply(e, t || [])).next());
      }));
    };
    var a = function(e, t) {
      var n, r, o, a, u = {
        label: 0,
        sent: function() {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
      return a = {
        next: c(0),
        throw: c(1),
        return: c(2)
      }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
        return this;
      }), a;
      function c(c) {
        return function(i) {
          return function(c) {
            if (n) throw new TypeError("Generator is already executing.");
            for (;a && (a = 0, c[0] && (u = 0)), u; ) try {
              if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
              switch (r = 0, o && (c = [ 2 & c[0], o.value ]), c[0]) {
               case 0:
               case 1:
                o = c;
                break;

               case 4:
                return u.label++, {
                  value: c[1],
                  done: !1
                };

               case 5:
                u.label++, r = c[1], c = [ 0 ];
                continue;

               case 7:
                c = u.ops.pop(), u.trys.pop();
                continue;

               default:
                if (!(o = u.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                  u = 0;
                  continue;
                }
                if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                  u.label = c[1];
                  break;
                }
                if (6 === c[0] && u.label < o[1]) {
                  u.label = o[1], o = c;
                  break;
                }
                if (o && u.label < o[2]) {
                  u.label = o[2], u.ops.push(c);
                  break;
                }
                o[2] && u.ops.pop(), u.trys.pop();
                continue;
              }
              c = t.call(e, u);
            } catch (i) {
              c = [ 6, i ], r = 0;
            } finally {
              n = o = 0;
            }
            if (5 & c[0]) throw c[1];
            return {
              value: c[0] ? c[1] : void 0,
              done: !0
            };
          }([ c, i ]);
        };
      }
    };
    var u = [ 'eip155:1' ];
    var c = function() {
      return o(void 0, void 0, void 0, (function() {
        return a(this, (function(e) {
          switch (e.label) {
           case 0:
            return [ 4, r.Z.init({
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
  6826: () => {}
} ]);
//# sourceMappingURL=649.65079d63.js.map