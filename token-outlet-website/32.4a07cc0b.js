"use strict";

(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 32 ], {
  77032: (n, e, t) => {
    t.r(e), t.d(e, {
      getTorusProviderInstance: () => a
    });
    var r = t(20638);
    var o = t.n(r);
    var u = function(n, e, t, r) {
      return new (t || (t = Promise))((function(o, u) {
        function i(n) {
          try {
            c(r.next(n));
          } catch (e) {
            u(e);
          }
        }
        function a(n) {
          try {
            c(r.throw(n));
          } catch (e) {
            u(e);
          }
        }
        function c(n) {
          n.done ? o(n.value) : function(n) {
            return n instanceof t ? n : new t((function(e) {
              e(n);
            }));
          }(n.value).then(i, a);
        }
        c((r = r.apply(n, e || [])).next());
      }));
    };
    var i = function(n, e) {
      var t, r, o, u, i = {
        label: 0,
        sent: function() {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: []
      };
      return u = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
        return this;
      }), u;
      function a(a) {
        return function(c) {
          return function(a) {
            if (t) throw new TypeError("Generator is already executing.");
            for (;u && (u = 0, a[0] && (i = 0)), i; ) try {
              if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
              switch (r = 0, o && (a = [ 2 & a[0], o.value ]), a[0]) {
               case 0:
               case 1:
                o = a;
                break;

               case 4:
                return i.label++, {
                  value: a[1],
                  done: !1
                };

               case 5:
                i.label++, r = a[1], a = [ 0 ];
                continue;

               case 7:
                a = i.ops.pop(), i.trys.pop();
                continue;

               default:
                if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                  i = 0;
                  continue;
                }
                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                  i.label = a[1];
                  break;
                }
                if (6 === a[0] && i.label < o[1]) {
                  i.label = o[1], o = a;
                  break;
                }
                if (o && i.label < o[2]) {
                  i.label = o[2], i.ops.push(a);
                  break;
                }
                o[2] && i.ops.pop(), i.trys.pop();
                continue;
              }
              a = e.call(n, i);
            } catch (c) {
              a = [ 6, c ], r = 0;
            } finally {
              t = o = 0;
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
    var a = function() {
      return u(void 0, void 0, void 0, (function() {
        return i(this, (function(n) {
          return [ 2, new (o()) ];
        }));
      }));
    };
  }
} ]);
//# sourceMappingURL=32.4a07cc0b.js.map