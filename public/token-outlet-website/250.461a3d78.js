/*! For license information please see 250.461a3d78.js.LICENSE.txt */
(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 250 ], {
  34250: (e, t, r) => {
    "use strict";
    r.r(t), r.d(t, {
      getTorusProviderInstance: () => a
    });
    var n = r(26355);
    var i = r.n(n);
    var o = function(e, t, r, n) {
      return new (r || (r = Promise))((function(i, o) {
        function s(e) {
          try {
            l(n.next(e));
          } catch (t) {
            o(t);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (t) {
            o(t);
          }
        }
        function l(e) {
          e.done ? i(e.value) : function(e) {
            return e instanceof r ? e : new r((function(t) {
              t(e);
            }));
          }(e.value).then(s, a);
        }
        l((n = n.apply(e, t || [])).next());
      }));
    };
    var s = function(e, t) {
      var r, n, i, o, s = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      };
      return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this;
      }), o;
      function a(a) {
        return function(l) {
          return function(a) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;o && (o = 0, a[0] && (s = 0)), s; ) try {
              if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
              switch (n = 0, i && (a = [ 2 & a[0], i.value ]), a[0]) {
               case 0:
               case 1:
                i = a;
                break;

               case 4:
                return s.label++, {
                  value: a[1],
                  done: !1
                };

               case 5:
                s.label++, n = a[1], a = [ 0 ];
                continue;

               case 7:
                a = s.ops.pop(), s.trys.pop();
                continue;

               default:
                if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                  s = 0;
                  continue;
                }
                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                  s.label = a[1];
                  break;
                }
                if (6 === a[0] && s.label < i[1]) {
                  s.label = i[1], i = a;
                  break;
                }
                if (i && s.label < i[2]) {
                  s.label = i[2], s.ops.push(a);
                  break;
                }
                i[2] && s.ops.pop(), s.trys.pop();
                continue;
              }
              a = t.call(e, s);
            } catch (l) {
              a = [ 6, l ], n = 0;
            } finally {
              r = i = 0;
            }
            if (5 & a[0]) throw a[1];
            return {
              value: a[0] ? a[1] : void 0,
              done: !0
            };
          }([ a, l ]);
        };
      }
    };
    var a = function() {
      return o(void 0, void 0, void 0, (function() {
        return s(this, (function(e) {
          return [ 2, new (i()) ];
        }));
      }));
    };
  },
  26355: e => {
    !function(t, r) {
      e.exports = r();
    }(self, (() => (() => {
      var e = {
        4320: function(e, t, r) {
          "use strict";
          var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.EthereumProviderError = t.JsonRpcError = void 0;
          const i = r(2451), o = n(r(4445)), s = r(8164);
          class a extends Error {
            constructor(e, t, r) {
              if (!Number.isInteger(e)) throw new Error('"code" must be an integer.');
              if (!t || "string" != typeof t) throw new Error('"message" must be a non-empty string.');
              super(t), this.code = e, void 0 !== r && (this.data = r);
            }
            serialize() {
              const e = {
                code: this.code,
                message: this.message
              };
              return void 0 !== this.data && (e.data = this.data, (0, i.isPlainObject)(this.data) && (e.data.cause = (0, s.serializeCause)(this.data.cause))), 
              this.stack && (e.stack = this.stack), e;
            }
            toString() {
              return (0, o.default)(this.serialize(), l, 2);
            }
          }
          function l(e, t) {
            if ("[Circular]" !== t) return t;
          }
          t.JsonRpcError = a, t.EthereumProviderError = class extends a {
            constructor(e, t, r) {
              if (!function(e) {
                return Number.isInteger(e) && e >= 1e3 && e <= 4999;
              }(e)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
              super(e, t, r);
            }
          };
        },
        537: (e, t) => {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.errorValues = t.errorCodes = void 0, t.errorCodes = {
            rpc: {
              invalidInput: -32e3,
              resourceNotFound: -32001,
              resourceUnavailable: -32002,
              transactionRejected: -32003,
              methodNotSupported: -32004,
              limitExceeded: -32005,
              parse: -32700,
              invalidRequest: -32600,
              methodNotFound: -32601,
              invalidParams: -32602,
              internal: -32603
            },
            provider: {
              userRejectedRequest: 4001,
              unauthorized: 4100,
              unsupportedMethod: 4200,
              disconnected: 4900,
              chainDisconnected: 4901
            }
          }, t.errorValues = {
            "-32700": {
              standard: "JSON RPC 2.0",
              message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
            },
            "-32600": {
              standard: "JSON RPC 2.0",
              message: "The JSON sent is not a valid Request object."
            },
            "-32601": {
              standard: "JSON RPC 2.0",
              message: "The method does not exist / is not available."
            },
            "-32602": {
              standard: "JSON RPC 2.0",
              message: "Invalid method parameter(s)."
            },
            "-32603": {
              standard: "JSON RPC 2.0",
              message: "Internal JSON-RPC error."
            },
            "-32000": {
              standard: "EIP-1474",
              message: "Invalid input."
            },
            "-32001": {
              standard: "EIP-1474",
              message: "Resource not found."
            },
            "-32002": {
              standard: "EIP-1474",
              message: "Resource unavailable."
            },
            "-32003": {
              standard: "EIP-1474",
              message: "Transaction rejected."
            },
            "-32004": {
              standard: "EIP-1474",
              message: "Method not supported."
            },
            "-32005": {
              standard: "EIP-1474",
              message: "Request limit exceeded."
            },
            4001: {
              standard: "EIP-1193",
              message: "User rejected the request."
            },
            4100: {
              standard: "EIP-1193",
              message: "The requested account and/or method has not been authorized by the user."
            },
            4200: {
              standard: "EIP-1193",
              message: "The requested method is not supported by this Ethereum provider."
            },
            4900: {
              standard: "EIP-1193",
              message: "The provider is disconnected from all chains."
            },
            4901: {
              standard: "EIP-1193",
              message: "The provider is disconnected from the specified chain."
            }
          };
        },
        2546: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.providerErrors = t.rpcErrors = void 0;
          const n = r(4320), i = r(537), o = r(8164);
          function s(e, t) {
            const [r, i] = l(t);
            return new n.JsonRpcError(e, r ?? (0, o.getMessageFromCode)(e), i);
          }
          function a(e, t) {
            const [r, i] = l(t);
            return new n.EthereumProviderError(e, r ?? (0, o.getMessageFromCode)(e), i);
          }
          function l(e) {
            if (e) {
              if ("string" == typeof e) return [ e ];
              if ("object" == typeof e && !Array.isArray(e)) {
                const {message: t, data: r} = e;
                if (t && "string" != typeof t) throw new Error("Must specify string message.");
                return [ t ?? void 0, r ];
              }
            }
            return [];
          }
          t.rpcErrors = {
            parse: e => s(i.errorCodes.rpc.parse, e),
            invalidRequest: e => s(i.errorCodes.rpc.invalidRequest, e),
            invalidParams: e => s(i.errorCodes.rpc.invalidParams, e),
            methodNotFound: e => s(i.errorCodes.rpc.methodNotFound, e),
            internal: e => s(i.errorCodes.rpc.internal, e),
            server: e => {
              if (!e || "object" != typeof e || Array.isArray(e)) throw new Error("Ethereum RPC Server errors must provide single object argument.");
              const {code: t} = e;
              if (!Number.isInteger(t) || t > -32005 || t < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
              return s(t, e);
            },
            invalidInput: e => s(i.errorCodes.rpc.invalidInput, e),
            resourceNotFound: e => s(i.errorCodes.rpc.resourceNotFound, e),
            resourceUnavailable: e => s(i.errorCodes.rpc.resourceUnavailable, e),
            transactionRejected: e => s(i.errorCodes.rpc.transactionRejected, e),
            methodNotSupported: e => s(i.errorCodes.rpc.methodNotSupported, e),
            limitExceeded: e => s(i.errorCodes.rpc.limitExceeded, e)
          }, t.providerErrors = {
            userRejectedRequest: e => a(i.errorCodes.provider.userRejectedRequest, e),
            unauthorized: e => a(i.errorCodes.provider.unauthorized, e),
            unsupportedMethod: e => a(i.errorCodes.provider.unsupportedMethod, e),
            disconnected: e => a(i.errorCodes.provider.disconnected, e),
            chainDisconnected: e => a(i.errorCodes.provider.chainDisconnected, e),
            custom: e => {
              if (!e || "object" != typeof e || Array.isArray(e)) throw new Error("Ethereum Provider custom errors must provide single object argument.");
              const {code: t, message: r, data: i} = e;
              if (!r || "string" != typeof r) throw new Error('"message" must be a nonempty string');
              return new n.EthereumProviderError(t, r, i);
            }
          };
        },
        9428: (e, t, r) => {
          "use strict";
          t.PY = t.Xy = t.yd = void 0;
          var n = r(4320);
          Object.defineProperty(t, "yd", {
            enumerable: !0,
            get: function() {
              return n.EthereumProviderError;
            }
          });
          var i = r(8164);
          Object.defineProperty(t, "Xy", {
            enumerable: !0,
            get: function() {
              return i.serializeError;
            }
          });
          var o = r(2546);
          Object.defineProperty(t, "PY", {
            enumerable: !0,
            get: function() {
              return o.rpcErrors;
            }
          }), r(537);
        },
        8164: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.serializeCause = t.serializeError = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
          const n = r(2451), i = r(537), o = i.errorCodes.rpc.internal, s = {
            code: o,
            message: a(o)
          };
          function a(e, r = "Unspecified error message. This is a bug, please report it.") {
            if (l(e)) {
              const r = e.toString();
              if ((0, n.hasProperty)(i.errorValues, r)) return i.errorValues[r].message;
              if (function(e) {
                return e >= -32099 && e <= -32e3;
              }(e)) return t.JSON_RPC_SERVER_ERROR_MESSAGE;
            }
            return r;
          }
          function l(e) {
            return Number.isInteger(e);
          }
          function u(e) {
            return Array.isArray(e) ? e.map((e => (0, n.isValidJson)(e) ? e : (0, n.isObject)(e) ? c(e) : null)) : (0, n.isObject)(e) ? c(e) : (0, 
            n.isValidJson)(e) ? e : null;
          }
          function c(e) {
            return Object.getOwnPropertyNames(e).reduce(((t, r) => {
              const i = e[r];
              return (0, n.isValidJson)(i) && (t[r] = i), t;
            }), {});
          }
          t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", t.getMessageFromCode = a, t.isValidCode = l, t.serializeError = function(e, {fallbackError: t = s, shouldIncludeStack: r = !0} = {}) {
            if (!(0, n.isJsonRpcError)(t)) throw new Error("Must provide fallback error with integer number code and string message.");
            const i = function(e, t) {
              return e && "object" == typeof e && "serialize" in e && "function" == typeof e.serialize ? e.serialize() : (0, n.isJsonRpcError)(e) ? e : {
                ...t,
                data: {
                  cause: u(e)
                }
              };
            }(e, t);
            return r || delete i.stack, i;
          }, t.serializeCause = u;
        },
        1422: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.assertExhaustive = t.assertStruct = t.assert = t.AssertionError = void 0;
          const n = r(7884);
          function i(e, t) {
            return r = e, Boolean("string" == typeof (null === (i = null === (n = null == r ? void 0 : r.prototype) || void 0 === n ? void 0 : n.constructor) || void 0 === i ? void 0 : i.name)) ? new e({
              message: t
            }) : e({
              message: t
            });
            var r, n, i;
          }
          class o extends Error {
            constructor(e) {
              super(e.message), this.code = "ERR_ASSERTION";
            }
          }
          t.AssertionError = o, t.assert = function(e, t = "Assertion failed.", r = o) {
            if (!e) {
              if (t instanceof Error) throw t;
              throw i(r, t);
            }
          }, t.assertStruct = function(e, t, r = "Assertion failed", s = o) {
            try {
              (0, n.assert)(e, t);
            } catch (e) {
              throw i(s, `${r}: ${function(e) {
                const t = function(e) {
                  return "object" == typeof e && null !== e && "message" in e;
                }(e) ? e.message : String(e);
                return t.endsWith(".") ? t.slice(0, -1) : t;
              }(e)}.`);
            }
          }, t.assertExhaustive = function(e) {
            throw new Error("Invalid branch reached. Should be detected during compilation.");
          };
        },
        7207: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.base64 = void 0;
          const n = r(7884), i = r(1422);
          t.base64 = (e, t = {}) => {
            var r, o;
            const s = null !== (r = t.paddingRequired) && void 0 !== r && r, a = null !== (o = t.characterSet) && void 0 !== o ? o : "base64";
            let l, u;
            return "base64" === a ? l = String.raw`[A-Za-z0-9+\/]` : ((0, i.assert)("base64url" === a), l = String.raw`[-_A-Za-z0-9]`), 
            u = s ? new RegExp(`^(?:${l}{4})*(?:${l}{3}=|${l}{2}==)?$`, "u") : new RegExp(`^(?:${l}{4})*(?:${l}{2,3}|${l}{3}=|${l}{2}==)?$`, "u"), 
            (0, n.pattern)(e, u);
          };
        },
        8476: (e, t, r) => {
          "use strict";
          var n = r(8764).Buffer;
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.createDataView = t.concatBytes = t.valueToBytes = t.stringToBytes = t.numberToBytes = t.signedBigIntToBytes = t.bigIntToBytes = t.hexToBytes = t.bytesToString = t.bytesToNumber = t.bytesToSignedBigInt = t.bytesToBigInt = t.bytesToHex = t.assertIsBytes = t.isBytes = void 0;
          const i = r(1422), o = r(2009), s = function() {
            const e = [];
            return () => {
              if (0 === e.length) for (let t = 0; t < 256; t++) e.push(t.toString(16).padStart(2, "0"));
              return e;
            };
          }();
          function a(e) {
            return e instanceof Uint8Array;
          }
          function l(e) {
            (0, i.assert)(a(e), "Value must be a Uint8Array.");
          }
          function u(e) {
            if (l(e), 0 === e.length) return "0x";
            const t = s(), r = new Array(e.length);
            for (let n = 0; n < e.length; n++) r[n] = t[e[n]];
            return (0, o.add0x)(r.join(""));
          }
          function c(e) {
            l(e);
            const t = u(e);
            return BigInt(t);
          }
          function d(e) {
            var t;
            if ("0x" === (null === (t = null == e ? void 0 : e.toLowerCase) || void 0 === t ? void 0 : t.call(e))) return new Uint8Array;
            (0, o.assertIsHexString)(e);
            const r = (0, o.remove0x)(e).toLowerCase(), n = r.length % 2 == 0 ? r : `0${r}`, i = new Uint8Array(n.length / 2);
            for (let o = 0; o < i.length; o++) {
              const e = n.charCodeAt(2 * o), t = n.charCodeAt(2 * o + 1), r = e - (e < 58 ? 48 : 87), s = t - (t < 58 ? 48 : 87);
              i[o] = 16 * r + s;
            }
            return i;
          }
          function f(e) {
            return (0, i.assert)("bigint" == typeof e, "Value must be a bigint."), (0, i.assert)(e >= BigInt(0), "Value must be a non-negative bigint."), 
            d(e.toString(16));
          }
          function h(e) {
            return (0, i.assert)("number" == typeof e, "Value must be a number."), (0, i.assert)(e >= 0, "Value must be a non-negative number."), 
            (0, i.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToBytes` instead."), d(e.toString(16));
          }
          function p(e) {
            return (0, i.assert)("string" == typeof e, "Value must be a string."), (new TextEncoder).encode(e);
          }
          function y(e) {
            if ("bigint" == typeof e) return f(e);
            if ("number" == typeof e) return h(e);
            if ("string" == typeof e) return e.startsWith("0x") ? d(e) : p(e);
            if (a(e)) return e;
            throw new TypeError(`Unsupported value type: "${typeof e}".`);
          }
          t.isBytes = a, t.assertIsBytes = l, t.bytesToHex = u, t.bytesToBigInt = c, t.bytesToSignedBigInt = function(e) {
            l(e);
            let t = BigInt(0);
            for (const r of e) t = (t << BigInt(8)) + BigInt(r);
            return BigInt.asIntN(8 * e.length, t);
          }, t.bytesToNumber = function(e) {
            l(e);
            const t = c(e);
            return (0, i.assert)(t <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."), 
            Number(t);
          }, t.bytesToString = function(e) {
            return l(e), (new TextDecoder).decode(e);
          }, t.hexToBytes = d, t.bigIntToBytes = f, t.signedBigIntToBytes = function(e, t) {
            (0, i.assert)("bigint" == typeof e, "Value must be a bigint."), (0, i.assert)("number" == typeof t, "Byte length must be a number."), 
            (0, i.assert)(t > 0, "Byte length must be greater than 0."), (0, i.assert)(function(e, t) {
              (0, i.assert)(t > 0);
              const r = e >> BigInt(31);
              return !((~e & r) + (e & ~r) >> BigInt(8 * t - 1));
            }(e, t), "Byte length is too small to represent the given value.");
            let r = e;
            const n = new Uint8Array(t);
            for (let i = 0; i < n.length; i++) n[i] = Number(BigInt.asUintN(8, r)), r >>= BigInt(8);
            return n.reverse();
          }, t.numberToBytes = h, t.stringToBytes = p, t.valueToBytes = y, t.concatBytes = function(e) {
            const t = new Array(e.length);
            let r = 0;
            for (let i = 0; i < e.length; i++) {
              const n = y(e[i]);
              t[i] = n, r += n.length;
            }
            const n = new Uint8Array(r);
            for (let i = 0, o = 0; i < t.length; i++) n.set(t[i], o), o += t[i].length;
            return n;
          }, t.createDataView = function(e) {
            if (void 0 !== n && e instanceof n) {
              const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
              return new DataView(t);
            }
            return new DataView(e.buffer, e.byteOffset, e.byteLength);
          };
        },
        5013: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.ChecksumStruct = void 0;
          const n = r(7884), i = r(7207);
          t.ChecksumStruct = (0, n.size)((0, i.base64)((0, n.string)(), {
            paddingRequired: !0
          }), 44, 44);
        },
        3557: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.createHex = t.createBytes = t.createBigInt = t.createNumber = void 0;
          const n = r(7884), i = r(1422), o = r(8476), s = r(2009), a = (0, n.union)([ (0, n.number)(), (0, n.bigint)(), (0, n.string)(), s.StrictHexStruct ]), l = (0, 
          n.coerce)((0, n.number)(), a, Number), u = (0, n.coerce)((0, n.bigint)(), a, BigInt), c = ((0, n.union)([ s.StrictHexStruct, (0, 
          n.instance)(Uint8Array) ]), (0, n.coerce)((0, n.instance)(Uint8Array), (0, n.union)([ s.StrictHexStruct ]), o.hexToBytes)), d = (0, 
          n.coerce)(s.StrictHexStruct, (0, n.instance)(Uint8Array), o.bytesToHex);
          t.createNumber = function(e) {
            try {
              const t = (0, n.create)(e, l);
              return (0, i.assert)(Number.isFinite(t), `Expected a number-like value, got "${e}".`), t;
            } catch (t) {
              if (t instanceof n.StructError) throw new Error(`Expected a number-like value, got "${e}".`);
              throw t;
            }
          }, t.createBigInt = function(e) {
            try {
              return (0, n.create)(e, u);
            } catch (e) {
              if (e instanceof n.StructError) throw new Error(`Expected a number-like value, got "${String(e.value)}".`);
              throw e;
            }
          }, t.createBytes = function(e) {
            if ("string" == typeof e && "0x" === e.toLowerCase()) return new Uint8Array;
            try {
              return (0, n.create)(e, c);
            } catch (e) {
              if (e instanceof n.StructError) throw new Error(`Expected a bytes-like value, got "${String(e.value)}".`);
              throw e;
            }
          }, t.createHex = function(e) {
            if (e instanceof Uint8Array && 0 === e.length || "string" == typeof e && "0x" === e.toLowerCase()) return "0x";
            try {
              return (0, n.create)(e, d);
            } catch (e) {
              if (e instanceof n.StructError) throw new Error(`Expected a bytes-like value, got "${String(e.value)}".`);
              throw e;
            }
          };
        },
        4283: function(e, t) {
          "use strict";
          var r, n, i = this && this.__classPrivateFieldSet || function(e, t, r, n, i) {
            if ("m" === n) throw new TypeError("Private method is not writable");
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
          }, o = this && this.__classPrivateFieldGet || function(e, t, r, n) {
            if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.FrozenSet = t.FrozenMap = void 0;
          class s {
            constructor(e) {
              r.set(this, void 0), i(this, r, new Map(e), "f"), Object.freeze(this);
            }
            get size() {
              return o(this, r, "f").size;
            }
            [(r = new WeakMap, Symbol.iterator)]() {
              return o(this, r, "f")[Symbol.iterator]();
            }
            entries() {
              return o(this, r, "f").entries();
            }
            forEach(e, t) {
              return o(this, r, "f").forEach(((r, n, i) => e.call(t, r, n, this)));
            }
            get(e) {
              return o(this, r, "f").get(e);
            }
            has(e) {
              return o(this, r, "f").has(e);
            }
            keys() {
              return o(this, r, "f").keys();
            }
            values() {
              return o(this, r, "f").values();
            }
            toString() {
              return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[ ...this.entries() ].map((([e, t]) => `${String(e)} => ${String(t)}`)).join(", ")} ` : ""}}`;
            }
          }
          t.FrozenMap = s;
          class a {
            constructor(e) {
              n.set(this, void 0), i(this, n, new Set(e), "f"), Object.freeze(this);
            }
            get size() {
              return o(this, n, "f").size;
            }
            [(n = new WeakMap, Symbol.iterator)]() {
              return o(this, n, "f")[Symbol.iterator]();
            }
            entries() {
              return o(this, n, "f").entries();
            }
            forEach(e, t) {
              return o(this, n, "f").forEach(((r, n, i) => e.call(t, r, n, this)));
            }
            has(e) {
              return o(this, n, "f").has(e);
            }
            keys() {
              return o(this, n, "f").keys();
            }
            values() {
              return o(this, n, "f").values();
            }
            toString() {
              return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[ ...this.values() ].map((e => String(e))).join(", ")} ` : ""}}`;
            }
          }
          t.FrozenSet = a, Object.freeze(s), Object.freeze(s.prototype), Object.freeze(a), Object.freeze(a.prototype);
        },
        5345: (e, t) => {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
        },
        2009: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.remove0x = t.add0x = t.assertIsStrictHexString = t.assertIsHexString = t.isStrictHexString = t.isHexString = t.StrictHexStruct = t.HexStruct = void 0;
          const n = r(7884), i = r(1422);
          function o(e) {
            return (0, n.is)(e, t.HexStruct);
          }
          function s(e) {
            return (0, n.is)(e, t.StrictHexStruct);
          }
          t.HexStruct = (0, n.pattern)((0, n.string)(), /^(?:0x)?[0-9a-f]+$/iu), t.StrictHexStruct = (0, n.pattern)((0, n.string)(), /^0x[0-9a-f]+$/iu), 
          t.isHexString = o, t.isStrictHexString = s, t.assertIsHexString = function(e) {
            (0, i.assert)(o(e), "Value must be a hexadecimal string.");
          }, t.assertIsStrictHexString = function(e) {
            (0, i.assert)(s(e), 'Value must be a hexadecimal string, starting with "0x".');
          }, t.add0x = function(e) {
            return e.startsWith("0x") ? e : e.startsWith("0X") ? `0x${e.substring(2)}` : `0x${e}`;
          }, t.remove0x = function(e) {
            return e.startsWith("0x") || e.startsWith("0X") ? e.substring(2) : e;
          };
        },
        2451: function(e, t, r) {
          "use strict";
          var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r);
            var i = Object.getOwnPropertyDescriptor(t, r);
            i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
              enumerable: !0,
              get: function() {
                return t[r];
              }
            }), Object.defineProperty(e, n, i);
          } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r];
          }), i = this && this.__exportStar || function(e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), i(r(1422), t), i(r(7207), t), i(r(8476), t), i(r(5013), t), i(r(3557), t), i(r(4283), t), i(r(5345), t), i(r(2009), t), 
          i(r(2497), t), i(r(3732), t), i(r(160), t), i(r(6215), t), i(r(9679), t), i(r(9108), t), i(r(7772), t), i(r(7749), t), i(r(8426), t);
        },
        2497: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.getJsonRpcIdValidator = t.assertIsJsonRpcError = t.isJsonRpcError = t.assertIsJsonRpcFailure = t.isJsonRpcFailure = t.assertIsJsonRpcSuccess = t.isJsonRpcSuccess = t.assertIsJsonRpcResponse = t.isJsonRpcResponse = t.assertIsPendingJsonRpcResponse = t.isPendingJsonRpcResponse = t.JsonRpcResponseStruct = t.JsonRpcFailureStruct = t.JsonRpcSuccessStruct = t.PendingJsonRpcResponseStruct = t.assertIsJsonRpcRequest = t.isJsonRpcRequest = t.assertIsJsonRpcNotification = t.isJsonRpcNotification = t.JsonRpcNotificationStruct = t.JsonRpcRequestStruct = t.JsonRpcParamsStruct = t.JsonRpcErrorStruct = t.JsonRpcIdStruct = t.JsonRpcVersionStruct = t.jsonrpc2 = t.getJsonSize = t.isValidJson = t.JsonStruct = t.UnsafeJsonStruct = void 0;
          const n = r(7884), i = r(1422);
          t.UnsafeJsonStruct = (0, n.union)([ (0, n.literal)(null), (0, n.boolean)(), (0, n.define)("finite number", (e => (0, n.is)(e, (0, 
          n.number)()) && Number.isFinite(e))), (0, n.string)(), (0, n.array)((0, n.lazy)((() => t.UnsafeJsonStruct))), (0, n.record)((0, 
          n.string)(), (0, n.lazy)((() => t.UnsafeJsonStruct))) ]), t.JsonStruct = (0, n.define)("Json", ((e, r) => {
            function n(e, t) {
              const n = [ ...t.validator(e, r) ];
              return !(n.length > 0) || n;
            }
            try {
              const r = n(e, t.UnsafeJsonStruct);
              return !0 !== r ? r : n(JSON.parse(JSON.stringify(e)), t.UnsafeJsonStruct);
            } catch (e) {
              return e instanceof RangeError && "Circular reference detected";
            }
          })), t.isValidJson = function(e) {
            return (0, n.is)(e, t.JsonStruct);
          }, t.getJsonSize = function(e) {
            (0, i.assertStruct)(e, t.JsonStruct, "Invalid JSON value");
            const r = JSON.stringify(e);
            return (new TextEncoder).encode(r).byteLength;
          }, t.jsonrpc2 = "2.0", t.JsonRpcVersionStruct = (0, n.literal)(t.jsonrpc2), t.JsonRpcIdStruct = (0, n.nullable)((0, n.union)([ (0, 
          n.number)(), (0, n.string)() ])), t.JsonRpcErrorStruct = (0, n.object)({
            code: (0, n.integer)(),
            message: (0, n.string)(),
            data: (0, n.optional)(t.JsonStruct),
            stack: (0, n.optional)((0, n.string)())
          }), t.JsonRpcParamsStruct = (0, n.optional)((0, n.union)([ (0, n.record)((0, n.string)(), t.JsonStruct), (0, n.array)(t.JsonStruct) ])), 
          t.JsonRpcRequestStruct = (0, n.object)({
            id: t.JsonRpcIdStruct,
            jsonrpc: t.JsonRpcVersionStruct,
            method: (0, n.string)(),
            params: t.JsonRpcParamsStruct
          }), t.JsonRpcNotificationStruct = (0, n.omit)(t.JsonRpcRequestStruct, [ "id" ]), t.isJsonRpcNotification = function(e) {
            return (0, n.is)(e, t.JsonRpcNotificationStruct);
          }, t.assertIsJsonRpcNotification = function(e, r) {
            (0, i.assertStruct)(e, t.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", r);
          }, t.isJsonRpcRequest = function(e) {
            return (0, n.is)(e, t.JsonRpcRequestStruct);
          }, t.assertIsJsonRpcRequest = function(e, r) {
            (0, i.assertStruct)(e, t.JsonRpcRequestStruct, "Invalid JSON-RPC request", r);
          }, t.PendingJsonRpcResponseStruct = (0, n.object)({
            id: t.JsonRpcIdStruct,
            jsonrpc: t.JsonRpcVersionStruct,
            result: (0, n.optional)((0, n.unknown)()),
            error: (0, n.optional)(t.JsonRpcErrorStruct)
          }), t.JsonRpcSuccessStruct = (0, n.object)({
            id: t.JsonRpcIdStruct,
            jsonrpc: t.JsonRpcVersionStruct,
            result: t.JsonStruct
          }), t.JsonRpcFailureStruct = (0, n.object)({
            id: t.JsonRpcIdStruct,
            jsonrpc: t.JsonRpcVersionStruct,
            error: t.JsonRpcErrorStruct
          }), t.JsonRpcResponseStruct = (0, n.union)([ t.JsonRpcSuccessStruct, t.JsonRpcFailureStruct ]), t.isPendingJsonRpcResponse = function(e) {
            return (0, n.is)(e, t.PendingJsonRpcResponseStruct);
          }, t.assertIsPendingJsonRpcResponse = function(e, r) {
            (0, i.assertStruct)(e, t.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", r);
          }, t.isJsonRpcResponse = function(e) {
            return (0, n.is)(e, t.JsonRpcResponseStruct);
          }, t.assertIsJsonRpcResponse = function(e, r) {
            (0, i.assertStruct)(e, t.JsonRpcResponseStruct, "Invalid JSON-RPC response", r);
          }, t.isJsonRpcSuccess = function(e) {
            return (0, n.is)(e, t.JsonRpcSuccessStruct);
          }, t.assertIsJsonRpcSuccess = function(e, r) {
            (0, i.assertStruct)(e, t.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", r);
          }, t.isJsonRpcFailure = function(e) {
            return (0, n.is)(e, t.JsonRpcFailureStruct);
          }, t.assertIsJsonRpcFailure = function(e, r) {
            (0, i.assertStruct)(e, t.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", r);
          }, t.isJsonRpcError = function(e) {
            return (0, n.is)(e, t.JsonRpcErrorStruct);
          }, t.assertIsJsonRpcError = function(e, r) {
            (0, i.assertStruct)(e, t.JsonRpcErrorStruct, "Invalid JSON-RPC error", r);
          }, t.getJsonRpcIdValidator = function(e) {
            const {permitEmptyString: t, permitFractions: r, permitNull: n} = Object.assign({
              permitEmptyString: !0,
              permitFractions: !1,
              permitNull: !0
            }, e);
            return e => Boolean("number" == typeof e && (r || Number.isInteger(e)) || "string" == typeof e && (t || e.length > 0) || n && null === e);
          };
        },
        3732: (e, t) => {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
        },
        160: function(e, t, r) {
          "use strict";
          var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
              default: e
            };
          };
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.createModuleLogger = t.createProjectLogger = void 0;
          const i = (0, n(r(1227)).default)("metamask");
          t.createProjectLogger = function(e) {
            return i.extend(e);
          }, t.createModuleLogger = function(e, t) {
            return e.extend(t);
          };
        },
        6215: (e, t) => {
          "use strict";
          function r(e) {
            return e.charCodeAt(0) <= 127;
          }
          var n;
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.calculateNumberSize = t.calculateStringSize = t.isASCII = t.isPlainObject = t.ESCAPE_CHARACTERS_REGEXP = t.JsonSize = t.hasProperty = t.isObject = t.isNullOrUndefined = t.isNonEmptyArray = void 0, 
          t.isNonEmptyArray = function(e) {
            return Array.isArray(e) && e.length > 0;
          }, t.isNullOrUndefined = function(e) {
            return null == e;
          }, t.isObject = function(e) {
            return Boolean(e) && "object" == typeof e && !Array.isArray(e);
          }, t.hasProperty = (e, t) => Object.hasOwnProperty.call(e, t), (n = t.JsonSize || (t.JsonSize = {}))[n.Null = 4] = "Null", 
          n[n.Comma = 1] = "Comma", n[n.Wrapper = 1] = "Wrapper", n[n.True = 4] = "True", n[n.False = 5] = "False", n[n.Quote = 1] = "Quote", 
          n[n.Colon = 1] = "Colon", n[n.Date = 24] = "Date", t.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu, t.isPlainObject = function(e) {
            if ("object" != typeof e || null === e) return !1;
            try {
              let t = e;
              for (;null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
              return Object.getPrototypeOf(e) === t;
            } catch (e) {
              return !1;
            }
          }, t.isASCII = r, t.calculateStringSize = function(e) {
            var n;
            return e.split("").reduce(((e, t) => r(t) ? e + 1 : e + 2), 0) + (null !== (n = e.match(t.ESCAPE_CHARACTERS_REGEXP)) && void 0 !== n ? n : []).length;
          }, t.calculateNumberSize = function(e) {
            return e.toString().length;
          };
        },
        9679: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.hexToBigInt = t.hexToNumber = t.bigIntToHex = t.numberToHex = void 0;
          const n = r(1422), i = r(2009);
          t.numberToHex = e => ((0, n.assert)("number" == typeof e, "Value must be a number."), (0, n.assert)(e >= 0, "Value must be a non-negative number."), 
          (0, n.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToHex` instead."), (0, i.add0x)(e.toString(16))), 
          t.bigIntToHex = e => ((0, n.assert)("bigint" == typeof e, "Value must be a bigint."), (0, n.assert)(e >= 0, "Value must be a non-negative bigint."), 
          (0, i.add0x)(e.toString(16))), t.hexToNumber = e => {
            (0, i.assertIsHexString)(e);
            const t = parseInt(e, 16);
            return (0, n.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `hexToBigInt` instead."), t;
          }, t.hexToBigInt = e => ((0, i.assertIsHexString)(e), BigInt((0, i.add0x)(e)));
        },
        9108: (e, t) => {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
        },
        7772: (e, t) => {
          "use strict";
          var r;
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.timeSince = t.inMilliseconds = t.Duration = void 0, (r = t.Duration || (t.Duration = {}))[r.Millisecond = 1] = "Millisecond", 
          r[r.Second = 1e3] = "Second", r[r.Minute = 6e4] = "Minute", r[r.Hour = 36e5] = "Hour", r[r.Day = 864e5] = "Day", r[r.Week = 6048e5] = "Week", 
          r[r.Year = 31536e6] = "Year";
          const n = (e, t) => {
            if (!(e => Number.isInteger(e) && e >= 0)(e)) throw new Error(`"${t}" must be a non-negative integer. Received: "${e}".`);
          };
          t.inMilliseconds = function(e, t) {
            return n(e, "count"), e * t;
          }, t.timeSince = function(e) {
            return n(e, "timestamp"), Date.now() - e;
          };
        },
        7749: (e, t) => {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          });
        },
        8426: (e, t, r) => {
          "use strict";
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.satisfiesVersionRange = t.gtRange = t.gtVersion = t.assertIsSemVerRange = t.assertIsSemVerVersion = t.isValidSemVerRange = t.isValidSemVerVersion = t.VersionRangeStruct = t.VersionStruct = void 0;
          const n = r(5393), i = r(7884), o = r(1422);
          t.VersionStruct = (0, i.refine)((0, i.string)(), "Version", (e => null !== (0, n.valid)(e) || `Expected SemVer version, got "${e}"`)), 
          t.VersionRangeStruct = (0, i.refine)((0, i.string)(), "Version range", (e => null !== (0, n.validRange)(e) || `Expected SemVer range, got "${e}"`)), 
          t.isValidSemVerVersion = function(e) {
            return (0, i.is)(e, t.VersionStruct);
          }, t.isValidSemVerRange = function(e) {
            return (0, i.is)(e, t.VersionRangeStruct);
          }, t.assertIsSemVerVersion = function(e) {
            (0, o.assertStruct)(e, t.VersionStruct);
          }, t.assertIsSemVerRange = function(e) {
            (0, o.assertStruct)(e, t.VersionRangeStruct);
          }, t.gtVersion = function(e, t) {
            return (0, n.gt)(e, t);
          }, t.gtRange = function(e, t) {
            return (0, n.gtr)(e, t);
          }, t.satisfiesVersionRange = function(e, t) {
            return (0, n.satisfies)(e, t, {
              includePrerelease: !0
            });
          };
        },
        3066: (e, t, r) => {
          "use strict";
          const n = r(4403), i = Symbol("max"), o = Symbol("length"), s = Symbol("lengthCalculator"), a = Symbol("allowStale"), l = Symbol("maxAge"), u = Symbol("dispose"), c = Symbol("noDisposeOnSet"), d = Symbol("lruList"), f = Symbol("cache"), h = Symbol("updateAgeOnGet"), p = () => 1, y = (e, t, r) => {
            const n = e[f].get(t);
            if (n) {
              const t = n.value;
              if (g(e, t)) {
                if (m(e, n), !e[a]) return;
              } else r && (e[h] && (n.value.now = Date.now()), e[d].unshiftNode(n));
              return t.value;
            }
          }, g = (e, t) => {
            if (!t || !t.maxAge && !e[l]) return !1;
            const r = Date.now() - t.now;
            return t.maxAge ? r > t.maxAge : e[l] && r > e[l];
          }, b = e => {
            if (e[o] > e[i]) for (let t = e[d].tail; e[o] > e[i] && null !== t; ) {
              const r = t.prev;
              m(e, t), t = r;
            }
          }, m = (e, t) => {
            if (t) {
              const r = t.value;
              e[u] && e[u](r.key, r.value), e[o] -= r.length, e[f].delete(r.key), e[d].removeNode(t);
            }
          };
          class w {
            constructor(e, t, r, n, i) {
              this.key = e, this.value = t, this.length = r, this.now = n, this.maxAge = i || 0;
            }
          }
          const v = (e, t, r, n) => {
            let i = r.value;
            g(e, i) && (m(e, r), e[a] || (i = void 0)), i && t.call(n, i.value, i.key, e);
          };
          e.exports = class {
            constructor(e) {
              if ("number" == typeof e && (e = {
                max: e
              }), e || (e = {}), e.max && ("number" != typeof e.max || e.max < 0)) throw new TypeError("max must be a non-negative number");
              this[i] = e.max || 1 / 0;
              const t = e.length || p;
              if (this[s] = "function" != typeof t ? p : t, this[a] = e.stale || !1, e.maxAge && "number" != typeof e.maxAge) throw new TypeError("maxAge must be a number");
              this[l] = e.maxAge || 0, this[u] = e.dispose, this[c] = e.noDisposeOnSet || !1, this[h] = e.updateAgeOnGet || !1, this.reset();
            }
            set max(e) {
              if ("number" != typeof e || e < 0) throw new TypeError("max must be a non-negative number");
              this[i] = e || 1 / 0, b(this);
            }
            get max() {
              return this[i];
            }
            set allowStale(e) {
              this[a] = !!e;
            }
            get allowStale() {
              return this[a];
            }
            set maxAge(e) {
              if ("number" != typeof e) throw new TypeError("maxAge must be a non-negative number");
              this[l] = e, b(this);
            }
            get maxAge() {
              return this[l];
            }
            set lengthCalculator(e) {
              "function" != typeof e && (e = p), e !== this[s] && (this[s] = e, this[o] = 0, this[d].forEach((e => {
                e.length = this[s](e.value, e.key), this[o] += e.length;
              }))), b(this);
            }
            get lengthCalculator() {
              return this[s];
            }
            get length() {
              return this[o];
            }
            get itemCount() {
              return this[d].length;
            }
            rforEach(e, t) {
              t = t || this;
              for (let r = this[d].tail; null !== r; ) {
                const n = r.prev;
                v(this, e, r, t), r = n;
              }
            }
            forEach(e, t) {
              t = t || this;
              for (let r = this[d].head; null !== r; ) {
                const n = r.next;
                v(this, e, r, t), r = n;
              }
            }
            keys() {
              return this[d].toArray().map((e => e.key));
            }
            values() {
              return this[d].toArray().map((e => e.value));
            }
            reset() {
              this[u] && this[d] && this[d].length && this[d].forEach((e => this[u](e.key, e.value))), this[f] = new Map, this[d] = new n, 
              this[o] = 0;
            }
            dump() {
              return this[d].map((e => !g(this, e) && {
                k: e.key,
                v: e.value,
                e: e.now + (e.maxAge || 0)
              })).toArray().filter((e => e));
            }
            dumpLru() {
              return this[d];
            }
            set(e, t, r) {
              if ((r = r || this[l]) && "number" != typeof r) throw new TypeError("maxAge must be a number");
              const n = r ? Date.now() : 0, a = this[s](t, e);
              if (this[f].has(e)) {
                if (a > this[i]) return m(this, this[f].get(e)), !1;
                const s = this[f].get(e).value;
                return this[u] && (this[c] || this[u](e, s.value)), s.now = n, s.maxAge = r, s.value = t, this[o] += a - s.length, s.length = a, 
                this.get(e), b(this), !0;
              }
              const h = new w(e, t, a, n, r);
              return h.length > this[i] ? (this[u] && this[u](e, t), !1) : (this[o] += h.length, this[d].unshift(h), this[f].set(e, this[d].head), 
              b(this), !0);
            }
            has(e) {
              if (!this[f].has(e)) return !1;
              const t = this[f].get(e).value;
              return !g(this, t);
            }
            get(e) {
              return y(this, e, !0);
            }
            peek(e) {
              return y(this, e, !1);
            }
            pop() {
              const e = this[d].tail;
              return e ? (m(this, e), e.value) : null;
            }
            del(e) {
              m(this, this[f].get(e));
            }
            load(e) {
              this.reset();
              const t = Date.now();
              for (let r = e.length - 1; r >= 0; r--) {
                const n = e[r], i = n.e || 0;
                if (0 === i) this.set(n.k, n.v); else {
                  const e = i - t;
                  e > 0 && this.set(n.k, n.v, e);
                }
              }
            }
            prune() {
              this[f].forEach(((e, t) => y(this, t, !1)));
            }
          };
        },
        7809: (e, t, r) => {
          const n = Symbol("SemVer ANY");
          class i {
            static get ANY() {
              return n;
            }
            constructor(e, t) {
              if (t = o(t), e instanceof i) {
                if (e.loose === !!t.loose) return e;
                e = e.value;
              }
              e = e.trim().split(/\s+/).join(" "), u("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === n ? this.value = "" : this.value = this.operator + this.semver.version, 
              u("comp", this);
            }
            parse(e) {
              const t = this.options.loose ? s[a.COMPARATORLOOSE] : s[a.COMPARATOR], r = e.match(t);
              if (!r) throw new TypeError(`Invalid comparator: ${e}`);
              this.operator = void 0 !== r[1] ? r[1] : "", "=" === this.operator && (this.operator = ""), r[2] ? this.semver = new c(r[2], this.options.loose) : this.semver = n;
            }
            toString() {
              return this.value;
            }
            test(e) {
              if (u("Comparator.test", e, this.options.loose), this.semver === n || e === n) return !0;
              if ("string" == typeof e) try {
                e = new c(e, this.options);
              } catch (e) {
                return !1;
              }
              return l(e, this.operator, this.semver, this.options);
            }
            intersects(e, t) {
              if (!(e instanceof i)) throw new TypeError("a Comparator is required");
              return "" === this.operator ? "" === this.value || new d(e.value, t).test(this.value) : "" === e.operator ? "" === e.value || new d(this.value, t).test(e.semver) : !((t = o(t)).includePrerelease && ("<0.0.0-0" === this.value || "<0.0.0-0" === e.value) || !t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0")) || (!this.operator.startsWith(">") || !e.operator.startsWith(">")) && (!this.operator.startsWith("<") || !e.operator.startsWith("<")) && (this.semver.version !== e.semver.version || !this.operator.includes("=") || !e.operator.includes("=")) && !(l(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<")) && !(l(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">")));
            }
          }
          e.exports = i;
          const o = r(3459), {safeRe: s, t: a} = r(8416), l = r(2928), u = r(2494), c = r(808), d = r(5579);
        },
        5579: (e, t, r) => {
          class n {
            constructor(e, t) {
              if (t = o(t), e instanceof n) return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new n(e.raw, t);
              if (e instanceof s) return this.raw = e.value, this.set = [ [ e ] ], this.format(), this;
              if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e.trim().split(/\s+/).join(" "), 
              this.set = this.raw.split("||").map((e => this.parseRange(e))).filter((e => e.length)), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
              if (this.set.length > 1) {
                const e = this.set[0];
                if (this.set = this.set.filter((e => !g(e[0]))), 0 === this.set.length) this.set = [ e ]; else if (this.set.length > 1) for (const t of this.set) if (1 === t.length && b(t[0])) {
                  this.set = [ t ];
                  break;
                }
              }
              this.format();
            }
            format() {
              return this.range = this.set.map((e => e.join(" ").trim())).join("||").trim(), this.range;
            }
            toString() {
              return this.range;
            }
            parseRange(e) {
              const t = ((this.options.includePrerelease && p) | (this.options.loose && y)) + ":" + e, r = i.get(t);
              if (r) return r;
              const n = this.options.loose, o = n ? u[c.HYPHENRANGELOOSE] : u[c.HYPHENRANGE];
              e = e.replace(o, C(this.options.includePrerelease)), a("hyphen replace", e), e = e.replace(u[c.COMPARATORTRIM], d), a("comparator trim", e);
              let l = (e = (e = e.replace(u[c.TILDETRIM], f)).replace(u[c.CARETTRIM], h)).split(" ").map((e => w(e, this.options))).join(" ").split(/\s+/).map((e => O(e, this.options)));
              n && (l = l.filter((e => (a("loose invalid filter", e, this.options), !!e.match(u[c.COMPARATORLOOSE]))))), a("range list", l);
              const b = new Map, m = l.map((e => new s(e, this.options)));
              for (const i of m) {
                if (g(i)) return [ i ];
                b.set(i.value, i);
              }
              b.size > 1 && b.has("") && b.delete("");
              const v = [ ...b.values() ];
              return i.set(t, v), v;
            }
            intersects(e, t) {
              if (!(e instanceof n)) throw new TypeError("a Range is required");
              return this.set.some((r => m(r, t) && e.set.some((e => m(e, t) && r.every((r => e.every((e => r.intersects(e, t)))))))));
            }
            test(e) {
              if (!e) return !1;
              if ("string" == typeof e) try {
                e = new l(e, this.options);
              } catch (e) {
                return !1;
              }
              for (let t = 0; t < this.set.length; t++) if (N(this.set[t], e, this.options)) return !0;
              return !1;
            }
          }
          e.exports = n;
          const i = new (r(3066))({
            max: 1e3
          }), o = r(3459), s = r(7809), a = r(2494), l = r(808), {safeRe: u, t: c, comparatorTrimReplace: d, tildeTrimReplace: f, caretTrimReplace: h} = r(8416), {FLAG_INCLUDE_PRERELEASE: p, FLAG_LOOSE: y} = r(1493), g = e => "<0.0.0-0" === e.value, b = e => "" === e.value, m = (e, t) => {
            let r = !0;
            const n = e.slice();
            let i = n.pop();
            for (;r && n.length; ) r = n.every((e => i.intersects(e, t))), i = n.pop();
            return r;
          }, w = (e, t) => (a("comp", e, t), e = S(e, t), a("caret", e), e = _(e, t), a("tildes", e), e = A(e, t), a("xrange", e), 
          e = T(e, t), a("stars", e), e), v = e => !e || "x" === e.toLowerCase() || "*" === e, _ = (e, t) => e.trim().split(/\s+/).map((e => E(e, t))).join(" "), E = (e, t) => {
            const r = t.loose ? u[c.TILDELOOSE] : u[c.TILDE];
            return e.replace(r, ((t, r, n, i, o) => {
              let s;
              return a("tilde", e, t, r, n, i, o), v(r) ? s = "" : v(n) ? s = `>=${r}.0.0 <${+r + 1}.0.0-0` : v(i) ? s = `>=${r}.${n}.0 <${r}.${+n + 1}.0-0` : o ? (a("replaceTilde pr", o), 
              s = `>=${r}.${n}.${i}-${o} <${r}.${+n + 1}.0-0`) : s = `>=${r}.${n}.${i} <${r}.${+n + 1}.0-0`, a("tilde return", s), s;
            }));
          }, S = (e, t) => e.trim().split(/\s+/).map((e => R(e, t))).join(" "), R = (e, t) => {
            a("caret", e, t);
            const r = t.loose ? u[c.CARETLOOSE] : u[c.CARET], n = t.includePrerelease ? "-0" : "";
            return e.replace(r, ((t, r, i, o, s) => {
              let l;
              return a("caret", e, t, r, i, o, s), v(r) ? l = "" : v(i) ? l = `>=${r}.0.0${n} <${+r + 1}.0.0-0` : v(o) ? l = "0" === r ? `>=${r}.${i}.0${n} <${r}.${+i + 1}.0-0` : `>=${r}.${i}.0${n} <${+r + 1}.0.0-0` : s ? (a("replaceCaret pr", s), 
              l = "0" === r ? "0" === i ? `>=${r}.${i}.${o}-${s} <${r}.${i}.${+o + 1}-0` : `>=${r}.${i}.${o}-${s} <${r}.${+i + 1}.0-0` : `>=${r}.${i}.${o}-${s} <${+r + 1}.0.0-0`) : (a("no pr"), 
              l = "0" === r ? "0" === i ? `>=${r}.${i}.${o}${n} <${r}.${i}.${+o + 1}-0` : `>=${r}.${i}.${o}${n} <${r}.${+i + 1}.0-0` : `>=${r}.${i}.${o} <${+r + 1}.0.0-0`), 
              a("caret return", l), l;
            }));
          }, A = (e, t) => (a("replaceXRanges", e, t), e.split(/\s+/).map((e => I(e, t))).join(" ")), I = (e, t) => {
            e = e.trim();
            const r = t.loose ? u[c.XRANGELOOSE] : u[c.XRANGE];
            return e.replace(r, ((r, n, i, o, s, l) => {
              a("xRange", e, r, n, i, o, s, l);
              const u = v(i), c = u || v(o), d = c || v(s), f = d;
              return "=" === n && f && (n = ""), l = t.includePrerelease ? "-0" : "", u ? r = ">" === n || "<" === n ? "<0.0.0-0" : "*" : n && f ? (c && (o = 0), 
              s = 0, ">" === n ? (n = ">=", c ? (i = +i + 1, o = 0, s = 0) : (o = +o + 1, s = 0)) : "<=" === n && (n = "<", c ? i = +i + 1 : o = +o + 1), 
              "<" === n && (l = "-0"), r = `${n + i}.${o}.${s}${l}`) : c ? r = `>=${i}.0.0${l} <${+i + 1}.0.0-0` : d && (r = `>=${i}.${o}.0${l} <${i}.${+o + 1}.0-0`), 
              a("xRange return", r), r;
            }));
          }, T = (e, t) => (a("replaceStars", e, t), e.trim().replace(u[c.STAR], "")), O = (e, t) => (a("replaceGTE0", e, t), e.trim().replace(u[t.includePrerelease ? c.GTE0PRE : c.GTE0], "")), C = e => (t, r, n, i, o, s, a, l, u, c, d, f, h) => `${r = v(n) ? "" : v(i) ? `>=${n}.0.0${e ? "-0" : ""}` : v(o) ? `>=${n}.${i}.0${e ? "-0" : ""}` : s ? `>=${r}` : `>=${r}${e ? "-0" : ""}`} ${l = v(u) ? "" : v(c) ? `<${+u + 1}.0.0-0` : v(d) ? `<${u}.${+c + 1}.0-0` : f ? `<=${u}.${c}.${d}-${f}` : e ? `<${u}.${c}.${+d + 1}-0` : `<=${l}`}`.trim(), N = (e, t, r) => {
            for (let n = 0; n < e.length; n++) if (!e[n].test(t)) return !1;
            if (t.prerelease.length && !r.includePrerelease) {
              for (let r = 0; r < e.length; r++) if (a(e[r].semver), e[r].semver !== s.ANY && e[r].semver.prerelease.length > 0) {
                const n = e[r].semver;
                if (n.major === t.major && n.minor === t.minor && n.patch === t.patch) return !0;
              }
              return !1;
            }
            return !0;
          };
        },
        808: (e, t, r) => {
          const n = r(2494), {MAX_LENGTH: i, MAX_SAFE_INTEGER: o} = r(1493), {safeRe: s, t: a} = r(8416), l = r(3459), {compareIdentifiers: u} = r(9417);
          class c {
            constructor(e, t) {
              if (t = l(t), e instanceof c) {
                if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
                e = e.version;
              } else if ("string" != typeof e) throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
              if (e.length > i) throw new TypeError(`version is longer than ${i} characters`);
              n("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
              const r = e.trim().match(t.loose ? s[a.LOOSE] : s[a.FULL]);
              if (!r) throw new TypeError(`Invalid Version: ${e}`);
              if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > o || this.major < 0) throw new TypeError("Invalid major version");
              if (this.minor > o || this.minor < 0) throw new TypeError("Invalid minor version");
              if (this.patch > o || this.patch < 0) throw new TypeError("Invalid patch version");
              r[4] ? this.prerelease = r[4].split(".").map((e => {
                if (/^[0-9]+$/.test(e)) {
                  const t = +e;
                  if (t >= 0 && t < o) return t;
                }
                return e;
              })) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format();
            }
            format() {
              return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), 
              this.version;
            }
            toString() {
              return this.version;
            }
            compare(e) {
              if (n("SemVer.compare", this.version, this.options, e), !(e instanceof c)) {
                if ("string" == typeof e && e === this.version) return 0;
                e = new c(e, this.options);
              }
              return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
            }
            compareMain(e) {
              return e instanceof c || (e = new c(e, this.options)), u(this.major, e.major) || u(this.minor, e.minor) || u(this.patch, e.patch);
            }
            comparePre(e) {
              if (e instanceof c || (e = new c(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
              if (!this.prerelease.length && e.prerelease.length) return 1;
              if (!this.prerelease.length && !e.prerelease.length) return 0;
              let t = 0;
              do {
                const r = this.prerelease[t], i = e.prerelease[t];
                if (n("prerelease compare", t, r, i), void 0 === r && void 0 === i) return 0;
                if (void 0 === i) return 1;
                if (void 0 === r) return -1;
                if (r !== i) return u(r, i);
              } while (++t);
            }
            compareBuild(e) {
              e instanceof c || (e = new c(e, this.options));
              let t = 0;
              do {
                const r = this.build[t], i = e.build[t];
                if (n("prerelease compare", t, r, i), void 0 === r && void 0 === i) return 0;
                if (void 0 === i) return 1;
                if (void 0 === r) return -1;
                if (r !== i) return u(r, i);
              } while (++t);
            }
            inc(e, t, r) {
              switch (e) {
               case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t, r);
                break;

               case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t, r);
                break;

               case "prepatch":
                this.prerelease.length = 0, this.inc("patch", t, r), this.inc("pre", t, r);
                break;

               case "prerelease":
                0 === this.prerelease.length && this.inc("patch", t, r), this.inc("pre", t, r);
                break;

               case "major":
                0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;

               case "minor":
                0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
                break;

               case "patch":
                0 === this.prerelease.length && this.patch++, this.prerelease = [];
                break;

               case "pre":
                {
                  const e = Number(r) ? 1 : 0;
                  if (!t && !1 === r) throw new Error("invalid increment argument: identifier is empty");
                  if (0 === this.prerelease.length) this.prerelease = [ e ]; else {
                    let n = this.prerelease.length;
                    for (;--n >= 0; ) "number" == typeof this.prerelease[n] && (this.prerelease[n]++, n = -2);
                    if (-1 === n) {
                      if (t === this.prerelease.join(".") && !1 === r) throw new Error("invalid increment argument: identifier already exists");
                      this.prerelease.push(e);
                    }
                  }
                  if (t) {
                    let n = [ t, e ];
                    !1 === r && (n = [ t ]), 0 === u(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = n) : this.prerelease = n;
                  }
                  break;
                }

               default:
                throw new Error(`invalid increment argument: ${e}`);
              }
              return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
            }
          }
          e.exports = c;
        },
        7321: (e, t, r) => {
          const n = r(9706);
          e.exports = (e, t) => {
            const r = n(e.trim().replace(/^[=v]+/, ""), t);
            return r ? r.version : null;
          };
        },
        2928: (e, t, r) => {
          const n = r(6393), i = r(3), o = r(690), s = r(6155), a = r(1675), l = r(8800);
          e.exports = (e, t, r, u) => {
            switch (t) {
             case "===":
              return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e === r;

             case "!==":
              return "object" == typeof e && (e = e.version), "object" == typeof r && (r = r.version), e !== r;

             case "":
             case "=":
             case "==":
              return n(e, r, u);

             case "!=":
              return i(e, r, u);

             case ">":
              return o(e, r, u);

             case ">=":
              return s(e, r, u);

             case "<":
              return a(e, r, u);

             case "<=":
              return l(e, r, u);

             default:
              throw new TypeError(`Invalid operator: ${t}`);
            }
          };
        },
        5054: (e, t, r) => {
          const n = r(808), i = r(9706), {safeRe: o, t: s} = r(8416);
          e.exports = (e, t) => {
            if (e instanceof n) return e;
            if ("number" == typeof e && (e = String(e)), "string" != typeof e) return null;
            let r = null;
            if ((t = t || {}).rtl) {
              let t;
              for (;(t = o[s.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length); ) r && t.index + t[0].length === r.index + r[0].length || (r = t), 
              o[s.COERCERTL].lastIndex = t.index + t[1].length + t[2].length;
              o[s.COERCERTL].lastIndex = -1;
            } else r = e.match(o[s.COERCE]);
            return null === r ? null : i(`${r[2]}.${r[3] || "0"}.${r[4] || "0"}`, t);
          };
        },
        9457: (e, t, r) => {
          const n = r(808);
          e.exports = (e, t, r) => {
            const i = new n(e, r), o = new n(t, r);
            return i.compare(o) || i.compareBuild(o);
          };
        },
        8992: (e, t, r) => {
          const n = r(6837);
          e.exports = (e, t) => n(e, t, !0);
        },
        6837: (e, t, r) => {
          const n = r(808);
          e.exports = (e, t, r) => new n(e, r).compare(new n(t, r));
        },
        9603: (e, t, r) => {
          const n = r(9706);
          e.exports = (e, t) => {
            const r = n(e, null, !0), i = n(t, null, !0), o = r.compare(i);
            if (0 === o) return null;
            const s = o > 0, a = s ? r : i, l = s ? i : r, u = !!a.prerelease.length;
            if (l.prerelease.length && !u) return l.patch || l.minor ? a.patch ? "patch" : a.minor ? "minor" : "major" : "major";
            const c = u ? "pre" : "";
            return r.major !== i.major ? c + "major" : r.minor !== i.minor ? c + "minor" : r.patch !== i.patch ? c + "patch" : "prerelease";
          };
        },
        6393: (e, t, r) => {
          const n = r(6837);
          e.exports = (e, t, r) => 0 === n(e, t, r);
        },
        690: (e, t, r) => {
          const n = r(6837);
          e.exports = (e, t, r) => n(e, t, r) > 0;
        },
        6155: (e, t, r) => {
          const n = r(6837);
          e.exports = (e, t, r) => n(e, t, r) >= 0;
        },
        624: (e, t, r) => {
          const n = r(808);
          e.exports = (e, t, r, i, o) => {
            "string" == typeof r && (o = i, i = r, r = void 0);
            try {
              return new n(e instanceof n ? e.version : e, r).inc(t, i, o).version;
            } catch (e) {
              return null;
            }
          };
        },
        1675: (e, t, r) => {
          const n = r(6837);
          e.exports = (e, t, r) => n(e, t, r) < 0;
        },
        8800: (e, t, r) => {
          const n = r(6837);
          e.exports = (e, t, r) => n(e, t, r) <= 0;
        },
        745: (e, t, r) => {
          const n = r(808);
          e.exports = (e, t) => new n(e, t).major;
        },
        1561: (e, t, r) => {
          const n = r(808);
          e.exports = (e, t) => new n(e, t).minor;
        },
        3: (e, t, r) => {
          const n = r(6837);
          e.exports = (e, t, r) => 0 !== n(e, t, r);
        },
        9706: (e, t, r) => {
          const n = r(808);
          e.exports = (e, t, r = !1) => {
            if (e instanceof n) return e;
            try {
              return new n(e, t);
            } catch (e) {
              if (!r) return null;
              throw e;
            }
          };
        },
        8660: (e, t, r) => {
          const n = r(808);
          e.exports = (e, t) => new n(e, t).patch;
        },
        7674: (e, t, r) => {
          const n = r(9706);
          e.exports = (e, t) => {
            const r = n(e, t);
            return r && r.prerelease.length ? r.prerelease : null;
          };
        },
        3370: (e, t, r) => {
          const n = r(6837);
          e.exports = (e, t, r) => n(t, e, r);
        },
        6646: (e, t, r) => {
          const n = r(9457);
          e.exports = (e, t) => e.sort(((e, r) => n(r, e, t)));
        },
        7819: (e, t, r) => {
          const n = r(5579);
          e.exports = (e, t, r) => {
            try {
              t = new n(t, r);
            } catch (e) {
              return !1;
            }
            return t.test(e);
          };
        },
        3124: (e, t, r) => {
          const n = r(9457);
          e.exports = (e, t) => e.sort(((e, r) => n(e, r, t)));
        },
        5557: (e, t, r) => {
          const n = r(9706);
          e.exports = (e, t) => {
            const r = n(e, t);
            return r ? r.version : null;
          };
        },
        5393: (e, t, r) => {
          const n = r(8416), i = r(1493), o = r(808), s = r(9417), a = r(9706), l = r(5557), u = r(7321), c = r(624), d = r(9603), f = r(745), h = r(1561), p = r(8660), y = r(7674), g = r(6837), b = r(3370), m = r(8992), w = r(9457), v = r(3124), _ = r(6646), E = r(690), S = r(1675), R = r(6393), A = r(3), I = r(6155), T = r(8800), O = r(2928), C = r(5054), N = r(7809), P = r(5579), L = r(7819), x = r(458), M = r(6449), D = r(1940), j = r(442), k = r(7677), $ = r(9455), U = r(7922), B = r(3670), F = r(451), W = r(4501), V = r(4854);
          e.exports = {
            parse: a,
            valid: l,
            clean: u,
            inc: c,
            diff: d,
            major: f,
            minor: h,
            patch: p,
            prerelease: y,
            compare: g,
            rcompare: b,
            compareLoose: m,
            compareBuild: w,
            sort: v,
            rsort: _,
            gt: E,
            lt: S,
            eq: R,
            neq: A,
            gte: I,
            lte: T,
            cmp: O,
            coerce: C,
            Comparator: N,
            Range: P,
            satisfies: L,
            toComparators: x,
            maxSatisfying: M,
            minSatisfying: D,
            minVersion: j,
            validRange: k,
            outside: $,
            gtr: U,
            ltr: B,
            intersects: F,
            simplifyRange: W,
            subset: V,
            SemVer: o,
            re: n.re,
            src: n.src,
            tokens: n.t,
            SEMVER_SPEC_VERSION: i.SEMVER_SPEC_VERSION,
            RELEASE_TYPES: i.RELEASE_TYPES,
            compareIdentifiers: s.compareIdentifiers,
            rcompareIdentifiers: s.rcompareIdentifiers
          };
        },
        1493: e => {
          const t = Number.MAX_SAFE_INTEGER || 9007199254740991;
          e.exports = {
            MAX_LENGTH: 256,
            MAX_SAFE_COMPONENT_LENGTH: 16,
            MAX_SAFE_INTEGER: t,
            RELEASE_TYPES: [ "major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease" ],
            SEMVER_SPEC_VERSION: "2.0.0",
            FLAG_INCLUDE_PRERELEASE: 1,
            FLAG_LOOSE: 2
          };
        },
        2494: (e, t, r) => {
          var n = r(4155);
          const i = "object" == typeof n && n.env && n.env.NODE_DEBUG && /\bsemver\b/i.test(n.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
          e.exports = i;
        },
        9417: e => {
          const t = /^[0-9]+$/, r = (e, r) => {
            const n = t.test(e), i = t.test(r);
            return n && i && (e = +e, r = +r), e === r ? 0 : n && !i ? -1 : i && !n ? 1 : e < r ? -1 : 1;
          };
          e.exports = {
            compareIdentifiers: r,
            rcompareIdentifiers: (e, t) => r(t, e)
          };
        },
        3459: e => {
          const t = Object.freeze({
            loose: !0
          }), r = Object.freeze({});
          e.exports = e => e ? "object" != typeof e ? t : e : r;
        },
        8416: (e, t, r) => {
          const {MAX_SAFE_COMPONENT_LENGTH: n} = r(1493), i = r(2494), o = (t = e.exports = {}).re = [], s = t.safeRe = [], a = t.src = [], l = t.t = {};
          let u = 0;
          const c = (e, t, r) => {
            const n = t.split("\\s*").join("\\s{0,1}").split("\\s+").join("\\s"), c = u++;
            i(e, c, t), l[e] = c, a[c] = t, o[c] = new RegExp(t, r ? "g" : void 0), s[c] = new RegExp(n, r ? "g" : void 0);
          };
          c("NUMERICIDENTIFIER", "0|[1-9]\\d*"), c("NUMERICIDENTIFIERLOOSE", "[0-9]+"), c("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), 
          c("MAINVERSION", `(${a[l.NUMERICIDENTIFIER]})\\.(${a[l.NUMERICIDENTIFIER]})\\.(${a[l.NUMERICIDENTIFIER]})`), c("MAINVERSIONLOOSE", `(${a[l.NUMERICIDENTIFIERLOOSE]})\\.(${a[l.NUMERICIDENTIFIERLOOSE]})\\.(${a[l.NUMERICIDENTIFIERLOOSE]})`), 
          c("PRERELEASEIDENTIFIER", `(?:${a[l.NUMERICIDENTIFIER]}|${a[l.NONNUMERICIDENTIFIER]})`), c("PRERELEASEIDENTIFIERLOOSE", `(?:${a[l.NUMERICIDENTIFIERLOOSE]}|${a[l.NONNUMERICIDENTIFIER]})`), 
          c("PRERELEASE", `(?:-(${a[l.PRERELEASEIDENTIFIER]}(?:\\.${a[l.PRERELEASEIDENTIFIER]})*))`), c("PRERELEASELOOSE", `(?:-?(${a[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${a[l.PRERELEASEIDENTIFIERLOOSE]})*))`), 
          c("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), c("BUILD", `(?:\\+(${a[l.BUILDIDENTIFIER]}(?:\\.${a[l.BUILDIDENTIFIER]})*))`), c("FULLPLAIN", `v?${a[l.MAINVERSION]}${a[l.PRERELEASE]}?${a[l.BUILD]}?`), 
          c("FULL", `^${a[l.FULLPLAIN]}$`), c("LOOSEPLAIN", `[v=\\s]*${a[l.MAINVERSIONLOOSE]}${a[l.PRERELEASELOOSE]}?${a[l.BUILD]}?`), 
          c("LOOSE", `^${a[l.LOOSEPLAIN]}$`), c("GTLT", "((?:<|>)?=?)"), c("XRANGEIDENTIFIERLOOSE", `${a[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), 
          c("XRANGEIDENTIFIER", `${a[l.NUMERICIDENTIFIER]}|x|X|\\*`), c("XRANGEPLAIN", `[v=\\s]*(${a[l.XRANGEIDENTIFIER]})(?:\\.(${a[l.XRANGEIDENTIFIER]})(?:\\.(${a[l.XRANGEIDENTIFIER]})(?:${a[l.PRERELEASE]})?${a[l.BUILD]}?)?)?`), 
          c("XRANGEPLAINLOOSE", `[v=\\s]*(${a[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[l.XRANGEIDENTIFIERLOOSE]})(?:${a[l.PRERELEASELOOSE]})?${a[l.BUILD]}?)?)?`), 
          c("XRANGE", `^${a[l.GTLT]}\\s*${a[l.XRANGEPLAIN]}$`), c("XRANGELOOSE", `^${a[l.GTLT]}\\s*${a[l.XRANGEPLAINLOOSE]}$`), c("COERCE", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`), 
          c("COERCERTL", a[l.COERCE], !0), c("LONETILDE", "(?:~>?)"), c("TILDETRIM", `(\\s*)${a[l.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", 
          c("TILDE", `^${a[l.LONETILDE]}${a[l.XRANGEPLAIN]}$`), c("TILDELOOSE", `^${a[l.LONETILDE]}${a[l.XRANGEPLAINLOOSE]}$`), c("LONECARET", "(?:\\^)"), 
          c("CARETTRIM", `(\\s*)${a[l.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", c("CARET", `^${a[l.LONECARET]}${a[l.XRANGEPLAIN]}$`), 
          c("CARETLOOSE", `^${a[l.LONECARET]}${a[l.XRANGEPLAINLOOSE]}$`), c("COMPARATORLOOSE", `^${a[l.GTLT]}\\s*(${a[l.LOOSEPLAIN]})$|^$`), 
          c("COMPARATOR", `^${a[l.GTLT]}\\s*(${a[l.FULLPLAIN]})$|^$`), c("COMPARATORTRIM", `(\\s*)${a[l.GTLT]}\\s*(${a[l.LOOSEPLAIN]}|${a[l.XRANGEPLAIN]})`, !0), 
          t.comparatorTrimReplace = "$1$2$3", c("HYPHENRANGE", `^\\s*(${a[l.XRANGEPLAIN]})\\s+-\\s+(${a[l.XRANGEPLAIN]})\\s*$`), c("HYPHENRANGELOOSE", `^\\s*(${a[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${a[l.XRANGEPLAINLOOSE]})\\s*$`), 
          c("STAR", "(<|>)?=?\\s*\\*"), c("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), c("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
        },
        7922: (e, t, r) => {
          const n = r(9455);
          e.exports = (e, t, r) => n(e, t, ">", r);
        },
        451: (e, t, r) => {
          const n = r(5579);
          e.exports = (e, t, r) => (e = new n(e, r), t = new n(t, r), e.intersects(t, r));
        },
        3670: (e, t, r) => {
          const n = r(9455);
          e.exports = (e, t, r) => n(e, t, "<", r);
        },
        6449: (e, t, r) => {
          const n = r(808), i = r(5579);
          e.exports = (e, t, r) => {
            let o = null, s = null, a = null;
            try {
              a = new i(t, r);
            } catch (e) {
              return null;
            }
            return e.forEach((e => {
              a.test(e) && (o && -1 !== s.compare(e) || (o = e, s = new n(o, r)));
            })), o;
          };
        },
        1940: (e, t, r) => {
          const n = r(808), i = r(5579);
          e.exports = (e, t, r) => {
            let o = null, s = null, a = null;
            try {
              a = new i(t, r);
            } catch (e) {
              return null;
            }
            return e.forEach((e => {
              a.test(e) && (o && 1 !== s.compare(e) || (o = e, s = new n(o, r)));
            })), o;
          };
        },
        442: (e, t, r) => {
          const n = r(808), i = r(5579), o = r(690);
          e.exports = (e, t) => {
            e = new i(e, t);
            let r = new n("0.0.0");
            if (e.test(r)) return r;
            if (r = new n("0.0.0-0"), e.test(r)) return r;
            r = null;
            for (let i = 0; i < e.set.length; ++i) {
              const t = e.set[i];
              let s = null;
              t.forEach((e => {
                const t = new n(e.semver.version);
                switch (e.operator) {
                 case ">":
                  0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();

                 case "":
                 case ">=":
                  s && !o(t, s) || (s = t);
                  break;

                 case "<":
                 case "<=":
                  break;

                 default:
                  throw new Error(`Unexpected operation: ${e.operator}`);
                }
              })), !s || r && !o(r, s) || (r = s);
            }
            return r && e.test(r) ? r : null;
          };
        },
        9455: (e, t, r) => {
          const n = r(808), i = r(7809), {ANY: o} = i, s = r(5579), a = r(7819), l = r(690), u = r(1675), c = r(8800), d = r(6155);
          e.exports = (e, t, r, f) => {
            let h, p, y, g, b;
            switch (e = new n(e, f), t = new s(t, f), r) {
             case ">":
              h = l, p = c, y = u, g = ">", b = ">=";
              break;

             case "<":
              h = u, p = d, y = l, g = "<", b = "<=";
              break;

             default:
              throw new TypeError('Must provide a hilo val of "<" or ">"');
            }
            if (a(e, t, f)) return !1;
            for (let n = 0; n < t.set.length; ++n) {
              const r = t.set[n];
              let s = null, a = null;
              if (r.forEach((e => {
                e.semver === o && (e = new i(">=0.0.0")), s = s || e, a = a || e, h(e.semver, s.semver, f) ? s = e : y(e.semver, a.semver, f) && (a = e);
              })), s.operator === g || s.operator === b) return !1;
              if ((!a.operator || a.operator === g) && p(e, a.semver)) return !1;
              if (a.operator === b && y(e, a.semver)) return !1;
            }
            return !0;
          };
        },
        4501: (e, t, r) => {
          const n = r(7819), i = r(6837);
          e.exports = (e, t, r) => {
            const o = [];
            let s = null, a = null;
            const l = e.sort(((e, t) => i(e, t, r)));
            for (const i of l) n(i, t, r) ? (a = i, s || (s = i)) : (a && o.push([ s, a ]), a = null, s = null);
            s && o.push([ s, null ]);
            const u = [];
            for (const [n, i] of o) n === i ? u.push(n) : i || n !== l[0] ? i ? n === l[0] ? u.push(`<=${i}`) : u.push(`${n} - ${i}`) : u.push(`>=${n}`) : u.push("*");
            const c = u.join(" || "), d = "string" == typeof t.raw ? t.raw : String(t);
            return c.length < d.length ? c : t;
          };
        },
        4854: (e, t, r) => {
          const n = r(5579), i = r(7809), {ANY: o} = i, s = r(7819), a = r(6837), l = [ new i(">=0.0.0-0") ], u = [ new i(">=0.0.0") ], c = (e, t, r) => {
            if (e === t) return !0;
            if (1 === e.length && e[0].semver === o) {
              if (1 === t.length && t[0].semver === o) return !0;
              e = r.includePrerelease ? l : u;
            }
            if (1 === t.length && t[0].semver === o) {
              if (r.includePrerelease) return !0;
              t = u;
            }
            const n = new Set;
            let i, c, h, p, y, g, b;
            for (const o of e) ">" === o.operator || ">=" === o.operator ? i = d(i, o, r) : "<" === o.operator || "<=" === o.operator ? c = f(c, o, r) : n.add(o.semver);
            if (n.size > 1) return null;
            if (i && c) {
              if (h = a(i.semver, c.semver, r), h > 0) return null;
              if (0 === h && (">=" !== i.operator || "<=" !== c.operator)) return null;
            }
            for (const o of n) {
              if (i && !s(o, String(i), r)) return null;
              if (c && !s(o, String(c), r)) return null;
              for (const e of t) if (!s(o, String(e), r)) return !1;
              return !0;
            }
            let m = !(!c || r.includePrerelease || !c.semver.prerelease.length) && c.semver, w = !(!i || r.includePrerelease || !i.semver.prerelease.length) && i.semver;
            m && 1 === m.prerelease.length && "<" === c.operator && 0 === m.prerelease[0] && (m = !1);
            for (const o of t) {
              if (b = b || ">" === o.operator || ">=" === o.operator, g = g || "<" === o.operator || "<=" === o.operator, i) if (w && o.semver.prerelease && o.semver.prerelease.length && o.semver.major === w.major && o.semver.minor === w.minor && o.semver.patch === w.patch && (w = !1), 
              ">" === o.operator || ">=" === o.operator) {
                if (p = d(i, o, r), p === o && p !== i) return !1;
              } else if (">=" === i.operator && !s(i.semver, String(o), r)) return !1;
              if (c) if (m && o.semver.prerelease && o.semver.prerelease.length && o.semver.major === m.major && o.semver.minor === m.minor && o.semver.patch === m.patch && (m = !1), 
              "<" === o.operator || "<=" === o.operator) {
                if (y = f(c, o, r), y === o && y !== c) return !1;
              } else if ("<=" === c.operator && !s(c.semver, String(o), r)) return !1;
              if (!o.operator && (c || i) && 0 !== h) return !1;
            }
            return !(i && g && !c && 0 !== h || c && b && !i && 0 !== h || w || m);
          }, d = (e, t, r) => {
            if (!e) return t;
            const n = a(e.semver, t.semver, r);
            return n > 0 ? e : n < 0 || ">" === t.operator && ">=" === e.operator ? t : e;
          }, f = (e, t, r) => {
            if (!e) return t;
            const n = a(e.semver, t.semver, r);
            return n < 0 ? e : n > 0 || "<" === t.operator && "<=" === e.operator ? t : e;
          };
          e.exports = (e, t, r = {}) => {
            if (e === t) return !0;
            e = new n(e, r), t = new n(t, r);
            let i = !1;
            e: for (const n of e.set) {
              for (const e of t.set) {
                const t = c(n, e, r);
                if (i = i || null !== t, t) continue e;
              }
              if (i) return !1;
            }
            return !0;
          };
        },
        458: (e, t, r) => {
          const n = r(5579);
          e.exports = (e, t) => new n(e, t).set.map((e => e.map((e => e.value)).join(" ").trim().split(" ")));
        },
        7677: (e, t, r) => {
          const n = r(5579);
          e.exports = (e, t) => {
            try {
              return new n(e, t).range || "*";
            } catch (e) {
              return null;
            }
          };
        },
        9332: e => {
          "use strict";
          e.exports = function(e) {
            e.prototype[Symbol.iterator] = function*() {
              for (let e = this.head; e; e = e.next) yield e.value;
            };
          };
        },
        4403: (e, t, r) => {
          "use strict";
          function n(e) {
            var t = this;
            if (t instanceof n || (t = new n), t.tail = null, t.head = null, t.length = 0, e && "function" == typeof e.forEach) e.forEach((function(e) {
              t.push(e);
            })); else if (arguments.length > 0) for (var r = 0, i = arguments.length; r < i; r++) t.push(arguments[r]);
            return t;
          }
          function i(e, t, r) {
            var n = t === e.head ? new a(r, null, t, e) : new a(r, t, t.next, e);
            return null === n.next && (e.tail = n), null === n.prev && (e.head = n), e.length++, n;
          }
          function o(e, t) {
            e.tail = new a(t, e.tail, null, e), e.head || (e.head = e.tail), e.length++;
          }
          function s(e, t) {
            e.head = new a(t, null, e.head, e), e.tail || (e.tail = e.head), e.length++;
          }
          function a(e, t, r, n) {
            if (!(this instanceof a)) return new a(e, t, r, n);
            this.list = n, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, r ? (r.prev = this, this.next = r) : this.next = null;
          }
          e.exports = n, n.Node = a, n.create = n, n.prototype.removeNode = function(e) {
            if (e.list !== this) throw new Error("removing node which does not belong to this list");
            var t = e.next, r = e.prev;
            return t && (t.prev = r), r && (r.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = r), e.list.length--, 
            e.next = null, e.prev = null, e.list = null, t;
          }, n.prototype.unshiftNode = function(e) {
            if (e !== this.head) {
              e.list && e.list.removeNode(e);
              var t = this.head;
              e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++;
            }
          }, n.prototype.pushNode = function(e) {
            if (e !== this.tail) {
              e.list && e.list.removeNode(e);
              var t = this.tail;
              e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++;
            }
          }, n.prototype.push = function() {
            for (var e = 0, t = arguments.length; e < t; e++) o(this, arguments[e]);
            return this.length;
          }, n.prototype.unshift = function() {
            for (var e = 0, t = arguments.length; e < t; e++) s(this, arguments[e]);
            return this.length;
          }, n.prototype.pop = function() {
            if (this.tail) {
              var e = this.tail.value;
              return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e;
            }
          }, n.prototype.shift = function() {
            if (this.head) {
              var e = this.head.value;
              return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e;
            }
          }, n.prototype.forEach = function(e, t) {
            t = t || this;
            for (var r = this.head, n = 0; null !== r; n++) e.call(t, r.value, n, this), r = r.next;
          }, n.prototype.forEachReverse = function(e, t) {
            t = t || this;
            for (var r = this.tail, n = this.length - 1; null !== r; n--) e.call(t, r.value, n, this), r = r.prev;
          }, n.prototype.get = function(e) {
            for (var t = 0, r = this.head; null !== r && t < e; t++) r = r.next;
            if (t === e && null !== r) return r.value;
          }, n.prototype.getReverse = function(e) {
            for (var t = 0, r = this.tail; null !== r && t < e; t++) r = r.prev;
            if (t === e && null !== r) return r.value;
          }, n.prototype.map = function(e, t) {
            t = t || this;
            for (var r = new n, i = this.head; null !== i; ) r.push(e.call(t, i.value, this)), i = i.next;
            return r;
          }, n.prototype.mapReverse = function(e, t) {
            t = t || this;
            for (var r = new n, i = this.tail; null !== i; ) r.push(e.call(t, i.value, this)), i = i.prev;
            return r;
          }, n.prototype.reduce = function(e, t) {
            var r, n = this.head;
            if (arguments.length > 1) r = t; else {
              if (!this.head) throw new TypeError("Reduce of empty list with no initial value");
              n = this.head.next, r = this.head.value;
            }
            for (var i = 0; null !== n; i++) r = e(r, n.value, i), n = n.next;
            return r;
          }, n.prototype.reduceReverse = function(e, t) {
            var r, n = this.tail;
            if (arguments.length > 1) r = t; else {
              if (!this.tail) throw new TypeError("Reduce of empty list with no initial value");
              n = this.tail.prev, r = this.tail.value;
            }
            for (var i = this.length - 1; null !== n; i--) r = e(r, n.value, i), n = n.prev;
            return r;
          }, n.prototype.toArray = function() {
            for (var e = new Array(this.length), t = 0, r = this.head; null !== r; t++) e[t] = r.value, r = r.next;
            return e;
          }, n.prototype.toArrayReverse = function() {
            for (var e = new Array(this.length), t = 0, r = this.tail; null !== r; t++) e[t] = r.value, r = r.prev;
            return e;
          }, n.prototype.slice = function(e, t) {
            (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
            var r = new n;
            if (t < e || t < 0) return r;
            e < 0 && (e = 0), t > this.length && (t = this.length);
            for (var i = 0, o = this.head; null !== o && i < e; i++) o = o.next;
            for (;null !== o && i < t; i++, o = o.next) r.push(o.value);
            return r;
          }, n.prototype.sliceReverse = function(e, t) {
            (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
            var r = new n;
            if (t < e || t < 0) return r;
            e < 0 && (e = 0), t > this.length && (t = this.length);
            for (var i = this.length, o = this.tail; null !== o && i > t; i--) o = o.prev;
            for (;null !== o && i > e; i--, o = o.prev) r.push(o.value);
            return r;
          }, n.prototype.splice = function(e, t, ...r) {
            e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
            for (var n = 0, o = this.head; null !== o && n < e; n++) o = o.next;
            var s = [];
            for (n = 0; o && n < t; n++) s.push(o.value), o = this.removeNode(o);
            for (null === o && (o = this.tail), o !== this.head && o !== this.tail && (o = o.prev), n = 0; n < r.length; n++) o = i(this, o, r[n]);
            return s;
          }, n.prototype.reverse = function() {
            for (var e = this.head, t = this.tail, r = e; null !== r; r = r.prev) {
              var n = r.prev;
              r.prev = r.next, r.next = n;
            }
            return this.head = t, this.tail = e, this;
          };
          try {
            r(9332)(n);
          } catch (e) {}
        },
        8599: e => {
          "use strict";
          const {AbortController: t, AbortSignal: r} = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0;
          e.exports = t, e.exports.AbortSignal = r, e.exports.default = t;
        },
        9742: (e, t) => {
          "use strict";
          t.byteLength = function(e) {
            var t = a(e), r = t[0], n = t[1];
            return 3 * (r + n) / 4 - n;
          }, t.toByteArray = function(e) {
            var t, r, o = a(e), s = o[0], l = o[1], u = new i(function(e, t, r) {
              return 3 * (t + r) / 4 - r;
            }(0, s, l)), c = 0, d = l > 0 ? s - 4 : s;
            for (r = 0; r < d; r += 4) t = n[e.charCodeAt(r)] << 18 | n[e.charCodeAt(r + 1)] << 12 | n[e.charCodeAt(r + 2)] << 6 | n[e.charCodeAt(r + 3)], 
            u[c++] = t >> 16 & 255, u[c++] = t >> 8 & 255, u[c++] = 255 & t;
            return 2 === l && (t = n[e.charCodeAt(r)] << 2 | n[e.charCodeAt(r + 1)] >> 4, u[c++] = 255 & t), 1 === l && (t = n[e.charCodeAt(r)] << 10 | n[e.charCodeAt(r + 1)] << 4 | n[e.charCodeAt(r + 2)] >> 2, 
            u[c++] = t >> 8 & 255, u[c++] = 255 & t), u;
          }, t.fromByteArray = function(e) {
            for (var t, n = e.length, i = n % 3, o = [], s = 16383, a = 0, u = n - i; a < u; a += s) o.push(l(e, a, a + s > u ? u : a + s));
            return 1 === i ? (t = e[n - 1], o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], 
            o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "=")), o.join("");
          };
          for (var r = [], n = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0; s < 64; ++s) r[s] = o[s], 
          n[o.charCodeAt(s)] = s;
          function a(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("=");
            return -1 === r && (r = t), [ r, r === t ? 0 : 4 - r % 4 ];
          }
          function l(e, t, n) {
            for (var i, o, s = [], a = t; a < n; a += 3) i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), s.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
            return s.join("");
          }
          n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63;
        },
        8764: (e, t, r) => {
          "use strict";
          const n = r(9742), i = r(645), o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
          t.Buffer = l, t.SlowBuffer = function(e) {
            return +e != e && (e = 0), l.alloc(+e);
          }, t.INSPECT_MAX_BYTES = 50;
          const s = 2147483647;
          function a(e) {
            if (e > s) throw new RangeError('The value "' + e + '" is invalid for option "size"');
            const t = new Uint8Array(e);
            return Object.setPrototypeOf(t, l.prototype), t;
          }
          function l(e, t, r) {
            if ("number" == typeof e) {
              if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
              return d(e);
            }
            return u(e, t, r);
          }
          function u(e, t, r) {
            if ("string" == typeof e) return function(e, t) {
              if ("string" == typeof t && "" !== t || (t = "utf8"), !l.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
              const r = 0 | y(e, t);
              let n = a(r);
              const i = n.write(e, t);
              return i !== r && (n = n.slice(0, i)), n;
            }(e, t);
            if (ArrayBuffer.isView(e)) return function(e) {
              if (q(e, Uint8Array)) {
                const t = new Uint8Array(e);
                return h(t.buffer, t.byteOffset, t.byteLength);
              }
              return f(e);
            }(e);
            if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
            if (q(e, ArrayBuffer) || e && q(e.buffer, ArrayBuffer)) return h(e, t, r);
            if ("undefined" != typeof SharedArrayBuffer && (q(e, SharedArrayBuffer) || e && q(e.buffer, SharedArrayBuffer))) return h(e, t, r);
            if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
            const n = e.valueOf && e.valueOf();
            if (null != n && n !== e) return l.from(n, t, r);
            const i = function(e) {
              if (l.isBuffer(e)) {
                const t = 0 | p(e.length), r = a(t);
                return 0 === r.length || e.copy(r, 0, 0, t), r;
              }
              return void 0 !== e.length ? "number" != typeof e.length || X(e.length) ? a(0) : f(e) : "Buffer" === e.type && Array.isArray(e.data) ? f(e.data) : void 0;
            }(e);
            if (i) return i;
            if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return l.from(e[Symbol.toPrimitive]("string"), t, r);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
          }
          function c(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
            if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
          }
          function d(e) {
            return c(e), a(e < 0 ? 0 : 0 | p(e));
          }
          function f(e) {
            const t = e.length < 0 ? 0 : 0 | p(e.length), r = a(t);
            for (let n = 0; n < t; n += 1) r[n] = 255 & e[n];
            return r;
          }
          function h(e, t, r) {
            if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
            if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
            let n;
            return n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), 
            Object.setPrototypeOf(n, l.prototype), n;
          }
          function p(e) {
            if (e >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
            return 0 | e;
          }
          function y(e, t) {
            if (l.isBuffer(e)) return e.length;
            if (ArrayBuffer.isView(e) || q(e, ArrayBuffer)) return e.byteLength;
            if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
            const r = e.length, n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === r) return 0;
            let i = !1;
            for (;;) switch (t) {
             case "ascii":
             case "latin1":
             case "binary":
              return r;

             case "utf8":
             case "utf-8":
              return J(e).length;

             case "ucs2":
             case "ucs-2":
             case "utf16le":
             case "utf-16le":
              return 2 * r;

             case "hex":
              return r >>> 1;

             case "base64":
              return K(e).length;

             default:
              if (i) return n ? -1 : J(e).length;
              t = ("" + t).toLowerCase(), i = !0;
            }
          }
          function g(e, t, r) {
            let n = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
            if ((r >>>= 0) <= (t >>>= 0)) return "";
            for (e || (e = "utf8"); ;) switch (e) {
             case "hex":
              return N(this, t, r);

             case "utf8":
             case "utf-8":
              return I(this, t, r);

             case "ascii":
              return O(this, t, r);

             case "latin1":
             case "binary":
              return C(this, t, r);

             case "base64":
              return A(this, t, r);

             case "ucs2":
             case "ucs-2":
             case "utf16le":
             case "utf-16le":
              return P(this, t, r);

             default:
              if (n) throw new TypeError("Unknown encoding: " + e);
              e = (e + "").toLowerCase(), n = !0;
            }
          }
          function b(e, t, r) {
            const n = e[t];
            e[t] = e[r], e[r] = n;
          }
          function m(e, t, r, n, i) {
            if (0 === e.length) return -1;
            if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), X(r = +r) && (r = i ? 0 : e.length - 1), 
            r < 0 && (r = e.length + r), r >= e.length) {
              if (i) return -1;
              r = e.length - 1;
            } else if (r < 0) {
              if (!i) return -1;
              r = 0;
            }
            if ("string" == typeof t && (t = l.from(t, n)), l.isBuffer(t)) return 0 === t.length ? -1 : w(e, t, r, n, i);
            if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : w(e, [ t ], r, n, i);
            throw new TypeError("val must be string, number or Buffer");
          }
          function w(e, t, r, n, i) {
            let o, s = 1, a = e.length, l = t.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
              if (e.length < 2 || t.length < 2) return -1;
              s = 2, a /= 2, l /= 2, r /= 2;
            }
            function u(e, t) {
              return 1 === s ? e[t] : e.readUInt16BE(t * s);
            }
            if (i) {
              let n = -1;
              for (o = r; o < a; o++) if (u(e, o) === u(t, -1 === n ? 0 : o - n)) {
                if (-1 === n && (n = o), o - n + 1 === l) return n * s;
              } else -1 !== n && (o -= o - n), n = -1;
            } else for (r + l > a && (r = a - l), o = r; o >= 0; o--) {
              let r = !0;
              for (let n = 0; n < l; n++) if (u(e, o + n) !== u(t, n)) {
                r = !1;
                break;
              }
              if (r) return o;
            }
            return -1;
          }
          function v(e, t, r, n) {
            r = Number(r) || 0;
            const i = e.length - r;
            n ? (n = Number(n)) > i && (n = i) : n = i;
            const o = t.length;
            let s;
            for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
              const n = parseInt(t.substr(2 * s, 2), 16);
              if (X(n)) return s;
              e[r + s] = n;
            }
            return s;
          }
          function _(e, t, r, n) {
            return z(J(t, e.length - r), e, r, n);
          }
          function E(e, t, r, n) {
            return z(function(e) {
              const t = [];
              for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
              return t;
            }(t), e, r, n);
          }
          function S(e, t, r, n) {
            return z(K(t), e, r, n);
          }
          function R(e, t, r, n) {
            return z(function(e, t) {
              let r, n, i;
              const o = [];
              for (let s = 0; s < e.length && !((t -= 2) < 0); ++s) r = e.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
              return o;
            }(t, e.length - r), e, r, n);
          }
          function A(e, t, r) {
            return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r));
          }
          function I(e, t, r) {
            r = Math.min(e.length, r);
            const n = [];
            let i = t;
            for (;i < r; ) {
              const t = e[i];
              let o = null, s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
              if (i + s <= r) {
                let r, n, a, l;
                switch (s) {
                 case 1:
                  t < 128 && (o = t);
                  break;

                 case 2:
                  r = e[i + 1], 128 == (192 & r) && (l = (31 & t) << 6 | 63 & r, l > 127 && (o = l));
                  break;

                 case 3:
                  r = e[i + 1], n = e[i + 2], 128 == (192 & r) && 128 == (192 & n) && (l = (15 & t) << 12 | (63 & r) << 6 | 63 & n, l > 2047 && (l < 55296 || l > 57343) && (o = l));
                  break;

                 case 4:
                  r = e[i + 1], n = e[i + 2], a = e[i + 3], 128 == (192 & r) && 128 == (192 & n) && 128 == (192 & a) && (l = (15 & t) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a, 
                  l > 65535 && l < 1114112 && (o = l));
                }
              }
              null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), n.push(o), 
              i += s;
            }
            return function(e) {
              const t = e.length;
              if (t <= T) return String.fromCharCode.apply(String, e);
              let r = "", n = 0;
              for (;n < t; ) r += String.fromCharCode.apply(String, e.slice(n, n += T));
              return r;
            }(n);
          }
          t.kMaxLength = s, l.TYPED_ARRAY_SUPPORT = function() {
            try {
              const e = new Uint8Array(1), t = {
                foo: function() {
                  return 42;
                }
              };
              return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
            } catch (e) {
              return !1;
            }
          }(), l.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), 
          Object.defineProperty(l.prototype, "parent", {
            enumerable: !0,
            get: function() {
              if (l.isBuffer(this)) return this.buffer;
            }
          }), Object.defineProperty(l.prototype, "offset", {
            enumerable: !0,
            get: function() {
              if (l.isBuffer(this)) return this.byteOffset;
            }
          }), l.poolSize = 8192, l.from = function(e, t, r) {
            return u(e, t, r);
          }, Object.setPrototypeOf(l.prototype, Uint8Array.prototype), Object.setPrototypeOf(l, Uint8Array), l.alloc = function(e, t, r) {
            return function(e, t, r) {
              return c(e), e <= 0 ? a(e) : void 0 !== t ? "string" == typeof r ? a(e).fill(t, r) : a(e).fill(t) : a(e);
            }(e, t, r);
          }, l.allocUnsafe = function(e) {
            return d(e);
          }, l.allocUnsafeSlow = function(e) {
            return d(e);
          }, l.isBuffer = function(e) {
            return null != e && !0 === e._isBuffer && e !== l.prototype;
          }, l.compare = function(e, t) {
            if (q(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), q(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)), 
            !l.isBuffer(e) || !l.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (e === t) return 0;
            let r = e.length, n = t.length;
            for (let i = 0, o = Math.min(r, n); i < o; ++i) if (e[i] !== t[i]) {
              r = e[i], n = t[i];
              break;
            }
            return r < n ? -1 : n < r ? 1 : 0;
          }, l.isEncoding = function(e) {
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
          }, l.concat = function(e, t) {
            if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return l.alloc(0);
            let r;
            if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
            const n = l.allocUnsafe(t);
            let i = 0;
            for (r = 0; r < e.length; ++r) {
              let t = e[r];
              if (q(t, Uint8Array)) i + t.length > n.length ? (l.isBuffer(t) || (t = l.from(t)), t.copy(n, i)) : Uint8Array.prototype.set.call(n, t, i); else {
                if (!l.isBuffer(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                t.copy(n, i);
              }
              i += t.length;
            }
            return n;
          }, l.byteLength = y, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
            const e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (let t = 0; t < e; t += 2) b(this, t, t + 1);
            return this;
          }, l.prototype.swap32 = function() {
            const e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (let t = 0; t < e; t += 4) b(this, t, t + 3), b(this, t + 1, t + 2);
            return this;
          }, l.prototype.swap64 = function() {
            const e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (let t = 0; t < e; t += 8) b(this, t, t + 7), b(this, t + 1, t + 6), b(this, t + 2, t + 5), b(this, t + 3, t + 4);
            return this;
          }, l.prototype.toString = function() {
            const e = this.length;
            return 0 === e ? "" : 0 === arguments.length ? I(this, 0, e) : g.apply(this, arguments);
          }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function(e) {
            if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === l.compare(this, e);
          }, l.prototype.inspect = function() {
            let e = "";
            const r = t.INSPECT_MAX_BYTES;
            return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">";
          }, o && (l.prototype[o] = l.prototype.inspect), l.prototype.compare = function(e, t, r, n, i) {
            if (q(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), !l.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
            if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), 
            t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
            if (n >= i && t >= r) return 0;
            if (n >= i) return -1;
            if (t >= r) return 1;
            if (this === e) return 0;
            let o = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (t >>>= 0);
            const a = Math.min(o, s), u = this.slice(n, i), c = e.slice(t, r);
            for (let l = 0; l < a; ++l) if (u[l] !== c[l]) {
              o = u[l], s = c[l];
              break;
            }
            return o < s ? -1 : s < o ? 1 : 0;
          }, l.prototype.includes = function(e, t, r) {
            return -1 !== this.indexOf(e, t, r);
          }, l.prototype.indexOf = function(e, t, r) {
            return m(this, e, t, r, !0);
          }, l.prototype.lastIndexOf = function(e, t, r) {
            return m(this, e, t, r, !1);
          }, l.prototype.write = function(e, t, r, n) {
            if (void 0 === t) n = "utf8", r = this.length, t = 0; else if (void 0 === r && "string" == typeof t) n = t, r = this.length, 
            t = 0; else {
              if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
            }
            const i = this.length - t;
            if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            let o = !1;
            for (;;) switch (n) {
             case "hex":
              return v(this, e, t, r);

             case "utf8":
             case "utf-8":
              return _(this, e, t, r);

             case "ascii":
             case "latin1":
             case "binary":
              return E(this, e, t, r);

             case "base64":
              return S(this, e, t, r);

             case "ucs2":
             case "ucs-2":
             case "utf16le":
             case "utf-16le":
              return R(this, e, t, r);

             default:
              if (o) throw new TypeError("Unknown encoding: " + n);
              n = ("" + n).toLowerCase(), o = !0;
            }
          }, l.prototype.toJSON = function() {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0)
            };
          };
          const T = 4096;
          function O(e, t, r) {
            let n = "";
            r = Math.min(e.length, r);
            for (let i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
            return n;
          }
          function C(e, t, r) {
            let n = "";
            r = Math.min(e.length, r);
            for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
            return n;
          }
          function N(e, t, r) {
            const n = e.length;
            (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
            let i = "";
            for (let o = t; o < r; ++o) i += Y[e[o]];
            return i;
          }
          function P(e, t, r) {
            const n = e.slice(t, r);
            let i = "";
            for (let o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
            return i;
          }
          function L(e, t, r) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > r) throw new RangeError("Trying to access beyond buffer length");
          }
          function x(e, t, r, n, i, o) {
            if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
            if (r + n > e.length) throw new RangeError("Index out of range");
          }
          function M(e, t, r, n, i) {
            W(t, n, i, e, r, 7);
            let o = Number(t & BigInt(4294967295));
            e[r++] = o, o >>= 8, e[r++] = o, o >>= 8, e[r++] = o, o >>= 8, e[r++] = o;
            let s = Number(t >> BigInt(32) & BigInt(4294967295));
            return e[r++] = s, s >>= 8, e[r++] = s, s >>= 8, e[r++] = s, s >>= 8, e[r++] = s, r;
          }
          function D(e, t, r, n, i) {
            W(t, n, i, e, r, 7);
            let o = Number(t & BigInt(4294967295));
            e[r + 7] = o, o >>= 8, e[r + 6] = o, o >>= 8, e[r + 5] = o, o >>= 8, e[r + 4] = o;
            let s = Number(t >> BigInt(32) & BigInt(4294967295));
            return e[r + 3] = s, s >>= 8, e[r + 2] = s, s >>= 8, e[r + 1] = s, s >>= 8, e[r] = s, r + 8;
          }
          function j(e, t, r, n, i, o) {
            if (r + n > e.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range");
          }
          function k(e, t, r, n, o) {
            return t = +t, r >>>= 0, o || j(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4;
          }
          function $(e, t, r, n, o) {
            return t = +t, r >>>= 0, o || j(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8;
          }
          l.prototype.slice = function(e, t) {
            const r = this.length;
            (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), 
            t < e && (t = e);
            const n = this.subarray(e, t);
            return Object.setPrototypeOf(n, l.prototype), n;
          }, l.prototype.readUintLE = l.prototype.readUIntLE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || L(e, t, this.length);
            let n = this[e], i = 1, o = 0;
            for (;++o < t && (i *= 256); ) n += this[e + o] * i;
            return n;
          }, l.prototype.readUintBE = l.prototype.readUIntBE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || L(e, t, this.length);
            let n = this[e + --t], i = 1;
            for (;t > 0 && (i *= 256); ) n += this[e + --t] * i;
            return n;
          }, l.prototype.readUint8 = l.prototype.readUInt8 = function(e, t) {
            return e >>>= 0, t || L(e, 1, this.length), this[e];
          }, l.prototype.readUint16LE = l.prototype.readUInt16LE = function(e, t) {
            return e >>>= 0, t || L(e, 2, this.length), this[e] | this[e + 1] << 8;
          }, l.prototype.readUint16BE = l.prototype.readUInt16BE = function(e, t) {
            return e >>>= 0, t || L(e, 2, this.length), this[e] << 8 | this[e + 1];
          }, l.prototype.readUint32LE = l.prototype.readUInt32LE = function(e, t) {
            return e >>>= 0, t || L(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
          }, l.prototype.readUint32BE = l.prototype.readUInt32BE = function(e, t) {
            return e >>>= 0, t || L(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
          }, l.prototype.readBigUInt64LE = Z((function(e) {
            V(e >>>= 0, "offset");
            const t = this[e], r = this[e + 7];
            void 0 !== t && void 0 !== r || H(e, this.length - 8);
            const n = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24, i = this[++e] + 256 * this[++e] + 65536 * this[++e] + r * 2 ** 24;
            return BigInt(n) + (BigInt(i) << BigInt(32));
          })), l.prototype.readBigUInt64BE = Z((function(e) {
            V(e >>>= 0, "offset");
            const t = this[e], r = this[e + 7];
            void 0 !== t && void 0 !== r || H(e, this.length - 8);
            const n = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e], i = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r;
            return (BigInt(n) << BigInt(32)) + BigInt(i);
          })), l.prototype.readIntLE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || L(e, t, this.length);
            let n = this[e], i = 1, o = 0;
            for (;++o < t && (i *= 256); ) n += this[e + o] * i;
            return i *= 128, n >= i && (n -= Math.pow(2, 8 * t)), n;
          }, l.prototype.readIntBE = function(e, t, r) {
            e >>>= 0, t >>>= 0, r || L(e, t, this.length);
            let n = t, i = 1, o = this[e + --n];
            for (;n > 0 && (i *= 256); ) o += this[e + --n] * i;
            return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o;
          }, l.prototype.readInt8 = function(e, t) {
            return e >>>= 0, t || L(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
          }, l.prototype.readInt16LE = function(e, t) {
            e >>>= 0, t || L(e, 2, this.length);
            const r = this[e] | this[e + 1] << 8;
            return 32768 & r ? 4294901760 | r : r;
          }, l.prototype.readInt16BE = function(e, t) {
            e >>>= 0, t || L(e, 2, this.length);
            const r = this[e + 1] | this[e] << 8;
            return 32768 & r ? 4294901760 | r : r;
          }, l.prototype.readInt32LE = function(e, t) {
            return e >>>= 0, t || L(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
          }, l.prototype.readInt32BE = function(e, t) {
            return e >>>= 0, t || L(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
          }, l.prototype.readBigInt64LE = Z((function(e) {
            V(e >>>= 0, "offset");
            const t = this[e], r = this[e + 7];
            void 0 !== t && void 0 !== r || H(e, this.length - 8);
            const n = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24);
            return (BigInt(n) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24);
          })), l.prototype.readBigInt64BE = Z((function(e) {
            V(e >>>= 0, "offset");
            const t = this[e], r = this[e + 7];
            void 0 !== t && void 0 !== r || H(e, this.length - 8);
            const n = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
            return (BigInt(n) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r);
          })), l.prototype.readFloatLE = function(e, t) {
            return e >>>= 0, t || L(e, 4, this.length), i.read(this, e, !0, 23, 4);
          }, l.prototype.readFloatBE = function(e, t) {
            return e >>>= 0, t || L(e, 4, this.length), i.read(this, e, !1, 23, 4);
          }, l.prototype.readDoubleLE = function(e, t) {
            return e >>>= 0, t || L(e, 8, this.length), i.read(this, e, !0, 52, 8);
          }, l.prototype.readDoubleBE = function(e, t) {
            return e >>>= 0, t || L(e, 8, this.length), i.read(this, e, !1, 52, 8);
          }, l.prototype.writeUintLE = l.prototype.writeUIntLE = function(e, t, r, n) {
            e = +e, t >>>= 0, r >>>= 0, n || x(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            let i = 1, o = 0;
            for (this[t] = 255 & e; ++o < r && (i *= 256); ) this[t + o] = e / i & 255;
            return t + r;
          }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function(e, t, r, n) {
            e = +e, t >>>= 0, r >>>= 0, n || x(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            let i = r - 1, o = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); ) this[t + i] = e / o & 255;
            return t + r;
          }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function(e, t, r) {
            return e = +e, t >>>= 0, r || x(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1;
          }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(e, t, r) {
            return e = +e, t >>>= 0, r || x(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
          }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(e, t, r) {
            return e = +e, t >>>= 0, r || x(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
          }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(e, t, r) {
            return e = +e, t >>>= 0, r || x(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, 
            this[t] = 255 & e, t + 4;
          }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(e, t, r) {
            return e = +e, t >>>= 0, r || x(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, 
            this[t + 3] = 255 & e, t + 4;
          }, l.prototype.writeBigUInt64LE = Z((function(e, t = 0) {
            return M(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
          })), l.prototype.writeBigUInt64BE = Z((function(e, t = 0) {
            return D(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
          })), l.prototype.writeIntLE = function(e, t, r, n) {
            if (e = +e, t >>>= 0, !n) {
              const n = Math.pow(2, 8 * r - 1);
              x(this, e, t, r, n - 1, -n);
            }
            let i = 0, o = 1, s = 0;
            for (this[t] = 255 & e; ++i < r && (o *= 256); ) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
            return t + r;
          }, l.prototype.writeIntBE = function(e, t, r, n) {
            if (e = +e, t >>>= 0, !n) {
              const n = Math.pow(2, 8 * r - 1);
              x(this, e, t, r, n - 1, -n);
            }
            let i = r - 1, o = 1, s = 0;
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); ) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
            return t + r;
          }, l.prototype.writeInt8 = function(e, t, r) {
            return e = +e, t >>>= 0, r || x(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
          }, l.prototype.writeInt16LE = function(e, t, r) {
            return e = +e, t >>>= 0, r || x(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
          }, l.prototype.writeInt16BE = function(e, t, r) {
            return e = +e, t >>>= 0, r || x(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
          }, l.prototype.writeInt32LE = function(e, t, r) {
            return e = +e, t >>>= 0, r || x(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, 
            this[t + 3] = e >>> 24, t + 4;
          }, l.prototype.writeInt32BE = function(e, t, r) {
            return e = +e, t >>>= 0, r || x(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, 
            this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
          }, l.prototype.writeBigInt64LE = Z((function(e, t = 0) {
            return M(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
          })), l.prototype.writeBigInt64BE = Z((function(e, t = 0) {
            return D(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
          })), l.prototype.writeFloatLE = function(e, t, r) {
            return k(this, e, t, !0, r);
          }, l.prototype.writeFloatBE = function(e, t, r) {
            return k(this, e, t, !1, r);
          }, l.prototype.writeDoubleLE = function(e, t, r) {
            return $(this, e, t, !0, r);
          }, l.prototype.writeDoubleBE = function(e, t, r) {
            return $(this, e, t, !1, r);
          }, l.prototype.copy = function(e, t, r, n) {
            if (!l.isBuffer(e)) throw new TypeError("argument should be a Buffer");
            if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), 
            n === r) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
            const i = n - r;
            return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), 
            i;
          }, l.prototype.fill = function(e, t, r, n) {
            if ("string" == typeof e) {
              if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
              if ("string" == typeof n && !l.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
              if (1 === e.length) {
                const t = e.charCodeAt(0);
                ("utf8" === n && t < 128 || "latin1" === n) && (e = t);
              }
            } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
            if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
            if (r <= t) return this;
            let i;
            if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e) for (i = t; i < r; ++i) this[i] = e; else {
              const o = l.isBuffer(e) ? e : l.from(e, n), s = o.length;
              if (0 === s) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
              for (i = 0; i < r - t; ++i) this[i + t] = o[i % s];
            }
            return this;
          };
          const U = {};
          function B(e, t, r) {
            U[e] = class extends r {
              constructor() {
                super(), Object.defineProperty(this, "message", {
                  value: t.apply(this, arguments),
                  writable: !0,
                  configurable: !0
                }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
              }
              get code() {
                return e;
              }
              set code(e) {
                Object.defineProperty(this, "code", {
                  configurable: !0,
                  enumerable: !0,
                  value: e,
                  writable: !0
                });
              }
              toString() {
                return `${this.name} [${e}]: ${this.message}`;
              }
            };
          }
          function F(e) {
            let t = "", r = e.length;
            const n = "-" === e[0] ? 1 : 0;
            for (;r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
            return `${e.slice(0, r)}${t}`;
          }
          function W(e, t, r, n, i, o) {
            if (e > r || e < t) {
              const n = "bigint" == typeof t ? "n" : "";
              let i;
              throw i = o > 3 ? 0 === t || t === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}` : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${8 * (o + 1) - 1}${n}` : `>= ${t}${n} and <= ${r}${n}`, 
              new U.ERR_OUT_OF_RANGE("value", i, e);
            }
            !function(e, t, r) {
              V(t, "offset"), void 0 !== e[t] && void 0 !== e[t + r] || H(t, e.length - (r + 1));
            }(n, i, o);
          }
          function V(e, t) {
            if ("number" != typeof e) throw new U.ERR_INVALID_ARG_TYPE(t, "number", e);
          }
          function H(e, t, r) {
            if (Math.floor(e) !== e) throw V(e, r), new U.ERR_OUT_OF_RANGE(r || "offset", "an integer", e);
            if (t < 0) throw new U.ERR_BUFFER_OUT_OF_BOUNDS;
            throw new U.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
          }
          B("ERR_BUFFER_OUT_OF_BOUNDS", (function(e) {
            return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
          }), RangeError), B("ERR_INVALID_ARG_TYPE", (function(e, t) {
            return `The "${e}" argument must be of type number. Received type ${typeof t}`;
          }), TypeError), B("ERR_OUT_OF_RANGE", (function(e, t, r) {
            let n = `The value of "${e}" is out of range.`, i = r;
            return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = F(String(r)) : "bigint" == typeof r && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = F(i)), 
            i += "n"), n += ` It must be ${t}. Received ${i}`, n;
          }), RangeError);
          const G = /[^+/0-9A-Za-z-_]/g;
          function J(e, t) {
            let r;
            t = t || 1 / 0;
            const n = e.length;
            let i = null;
            const o = [];
            for (let s = 0; s < n; ++s) {
              if (r = e.charCodeAt(s), r > 55295 && r < 57344) {
                if (!i) {
                  if (r > 56319) {
                    (t -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  if (s + 1 === n) {
                    (t -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  i = r;
                  continue;
                }
                if (r < 56320) {
                  (t -= 3) > -1 && o.push(239, 191, 189), i = r;
                  continue;
                }
                r = 65536 + (i - 55296 << 10 | r - 56320);
              } else i && (t -= 3) > -1 && o.push(239, 191, 189);
              if (i = null, r < 128) {
                if ((t -= 1) < 0) break;
                o.push(r);
              } else if (r < 2048) {
                if ((t -= 2) < 0) break;
                o.push(r >> 6 | 192, 63 & r | 128);
              } else if (r < 65536) {
                if ((t -= 3) < 0) break;
                o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
              } else {
                if (!(r < 1114112)) throw new Error("Invalid code point");
                if ((t -= 4) < 0) break;
                o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
              }
            }
            return o;
          }
          function K(e) {
            return n.toByteArray(function(e) {
              if ((e = (e = e.split("=")[0]).trim().replace(G, "")).length < 2) return "";
              for (;e.length % 4 != 0; ) e += "=";
              return e;
            }(e));
          }
          function z(e, t, r, n) {
            let i;
            for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
            return i;
          }
          function q(e, t) {
            return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name;
          }
          function X(e) {
            return e != e;
          }
          const Y = function() {
            const e = "0123456789abcdef", t = new Array(256);
            for (let r = 0; r < 16; ++r) {
              const n = 16 * r;
              for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
            }
            return t;
          }();
          function Z(e) {
            return "undefined" == typeof BigInt ? Q : e;
          }
          function Q() {
            throw new Error("BigInt not supported");
          }
        },
        1227: (e, t, r) => {
          var n = r(4155);
          t.formatArgs = function(t) {
            if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), 
            !this.useColors) return;
            const r = "color: " + this.color;
            t.splice(1, 0, r, "color: inherit");
            let n = 0, i = 0;
            t[0].replace(/%[a-zA-Z%]/g, (e => {
              "%%" !== e && (n++, "%c" === e && (i = n));
            })), t.splice(i, 0, r);
          }, t.save = function(e) {
            try {
              e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
            } catch (e) {}
          }, t.load = function() {
            let e;
            try {
              e = t.storage.getItem("debug");
            } catch (e) {}
            return !e && void 0 !== n && "env" in n && (e = n.env.DEBUG), e;
          }, t.useColors = function() {
            return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
          }, t.storage = function() {
            try {
              return localStorage;
            } catch (e) {}
          }(), t.destroy = (() => {
            let e = !1;
            return () => {
              e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
            };
          })(), t.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ], 
          t.log = console.debug || console.log || (() => {}), e.exports = r(2447)(t);
          const {formatters: i} = e.exports;
          i.j = function(e) {
            try {
              return JSON.stringify(e);
            } catch (e) {
              return "[UnexpectedJSONParseError]: " + e.message;
            }
          };
        },
        2447: (e, t, r) => {
          e.exports = function(e) {
            function t(e) {
              let r, i, o, s = null;
              function a(...e) {
                if (!a.enabled) return;
                const n = a, i = Number(new Date), o = i - (r || i);
                n.diff = o, n.prev = r, n.curr = i, r = i, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                let s = 0;
                e[0] = e[0].replace(/%([a-zA-Z%])/g, ((r, i) => {
                  if ("%%" === r) return "%";
                  s++;
                  const o = t.formatters[i];
                  if ("function" == typeof o) {
                    const t = e[s];
                    r = o.call(n, t), e.splice(s, 1), s--;
                  }
                  return r;
                })), t.formatArgs.call(n, e), (n.log || t.log).apply(n, e);
              }
              return a.namespace = e, a.useColors = t.useColors(), a.color = t.selectColor(e), a.extend = n, a.destroy = t.destroy, Object.defineProperty(a, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () => null !== s ? s : (i !== t.namespaces && (i = t.namespaces, o = t.enabled(e)), o),
                set: e => {
                  s = e;
                }
              }), "function" == typeof t.init && t.init(a), a;
            }
            function n(e, r) {
              const n = t(this.namespace + (void 0 === r ? ":" : r) + e);
              return n.log = this.log, n;
            }
            function i(e) {
              return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
            }
            return t.debug = t, t.default = t, t.coerce = function(e) {
              return e instanceof Error ? e.stack || e.message : e;
            }, t.disable = function() {
              const e = [ ...t.names.map(i), ...t.skips.map(i).map((e => "-" + e)) ].join(",");
              return t.enable(""), e;
            }, t.enable = function(e) {
              let r;
              t.save(e), t.namespaces = e, t.names = [], t.skips = [];
              const n = ("string" == typeof e ? e : "").split(/[\s,]+/), i = n.length;
              for (r = 0; r < i; r++) n[r] && ("-" === (e = n[r].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.slice(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
            }, t.enabled = function(e) {
              if ("*" === e[e.length - 1]) return !0;
              let r, n;
              for (r = 0, n = t.skips.length; r < n; r++) if (t.skips[r].test(e)) return !1;
              for (r = 0, n = t.names.length; r < n; r++) if (t.names[r].test(e)) return !0;
              return !1;
            }, t.humanize = r(7824), t.destroy = function() {
              console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
            }, Object.keys(e).forEach((r => {
              t[r] = e[r];
            })), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
              let r = 0;
              for (let t = 0; t < e.length; t++) r = (r << 5) - r + e.charCodeAt(t), r |= 0;
              return t.colors[Math.abs(r) % t.colors.length];
            }, t.enable(t.load()), t;
          };
        },
        2840: (e, t, r) => {
          var n = r(4155), i = r(778), o = function() {}, s = function(e, t, r) {
            if ("function" == typeof t) return s(e, null, t);
            t || (t = {}), r = i(r || o);
            var a = e._writableState, l = e._readableState, u = t.readable || !1 !== t.readable && e.readable, c = t.writable || !1 !== t.writable && e.writable, d = !1, f = function() {
              e.writable || h();
            }, h = function() {
              c = !1, u || r.call(e);
            }, p = function() {
              u = !1, c || r.call(e);
            }, y = function(t) {
              r.call(e, t ? new Error("exited with error code: " + t) : null);
            }, g = function(t) {
              r.call(e, t);
            }, b = function() {
              n.nextTick(m);
            }, m = function() {
              if (!d) return (!u || l && l.ended && !l.destroyed) && (!c || a && a.ended && !a.destroyed) ? void 0 : r.call(e, new Error("premature close"));
            }, w = function() {
              e.req.on("finish", h);
            };
            return function(e) {
              return e.setHeader && "function" == typeof e.abort;
            }(e) ? (e.on("complete", h), e.on("abort", b), e.req ? w() : e.on("request", w)) : c && !a && (e.on("end", f), e.on("close", f)), 
            function(e) {
              return e.stdio && Array.isArray(e.stdio) && 3 === e.stdio.length;
            }(e) && e.on("exit", y), e.on("end", p), e.on("finish", h), !1 !== t.error && e.on("error", g), e.on("close", b), function() {
              d = !0, e.removeListener("complete", h), e.removeListener("abort", b), e.removeListener("request", w), e.req && e.req.removeListener("finish", h), 
              e.removeListener("end", f), e.removeListener("close", f), e.removeListener("finish", h), e.removeListener("exit", y), e.removeListener("end", p), 
              e.removeListener("error", g), e.removeListener("close", b);
            };
          };
          e.exports = s;
        },
        7187: e => {
          "use strict";
          var t, r = "object" == typeof Reflect ? Reflect : null, n = r && "function" == typeof r.apply ? r.apply : function(e, t, r) {
            return Function.prototype.apply.call(e, t, r);
          };
          t = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
          } : function(e) {
            return Object.getOwnPropertyNames(e);
          };
          var i = Number.isNaN || function(e) {
            return e != e;
          };
          function o() {
            o.init.call(this);
          }
          e.exports = o, e.exports.once = function(e, t) {
            return new Promise((function(r, n) {
              function i(r) {
                e.removeListener(t, o), n(r);
              }
              function o() {
                "function" == typeof e.removeListener && e.removeListener("error", i), r([].slice.call(arguments));
              }
              y(e, t, o, {
                once: !0
              }), "error" !== t && function(e, t, r) {
                "function" == typeof e.on && y(e, "error", t, {
                  once: !0
                });
              }(e, i);
            }));
          }, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
          var s = 10;
          function a(e) {
            if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
          }
          function l(e) {
            return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners;
          }
          function u(e, t, r, n) {
            var i, o, s, u;
            if (a(r), void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), 
            o = e._events), s = o[t]), void 0 === s) s = o[t] = r, ++e._eventsCount; else if ("function" == typeof s ? s = o[t] = n ? [ r, s ] : [ s, r ] : n ? s.unshift(r) : s.push(r), 
            (i = l(e)) > 0 && s.length > i && !s.warned) {
              s.warned = !0;
              var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = s.length, u = c, console && console.warn && console.warn(u);
            }
            return e;
          }
          function c() {
            if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
          }
          function d(e, t, r) {
            var n = {
              fired: !1,
              wrapFn: void 0,
              target: e,
              type: t,
              listener: r
            }, i = c.bind(n);
            return i.listener = r, n.wrapFn = i, i;
          }
          function f(e, t, r) {
            var n = e._events;
            if (void 0 === n) return [];
            var i = n[t];
            return void 0 === i ? [] : "function" == typeof i ? r ? [ i.listener || i ] : [ i ] : r ? function(e) {
              for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
              return t;
            }(i) : p(i, i.length);
          }
          function h(e) {
            var t = this._events;
            if (void 0 !== t) {
              var r = t[e];
              if ("function" == typeof r) return 1;
              if (void 0 !== r) return r.length;
            }
            return 0;
          }
          function p(e, t) {
            for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
            return r;
          }
          function y(e, t, r, n) {
            if ("function" == typeof e.on) n.once ? e.once(t, r) : e.on(t, r); else {
              if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
              e.addEventListener(t, (function i(o) {
                n.once && e.removeEventListener(t, i), r(o);
              }));
            }
          }
          Object.defineProperty(o, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
              return s;
            },
            set: function(e) {
              if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
              s = e;
            }
          }), o.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), 
            this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
          }, o.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e, this;
          }, o.prototype.getMaxListeners = function() {
            return l(this);
          }, o.prototype.emit = function(e) {
            for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
            var i = "error" === e, o = this._events;
            if (void 0 !== o) i = i && void 0 === o.error; else if (!i) return !1;
            if (i) {
              var s;
              if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
              var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
              throw a.context = s, a;
            }
            var l = o[e];
            if (void 0 === l) return !1;
            if ("function" == typeof l) n(l, this, t); else {
              var u = l.length, c = p(l, u);
              for (r = 0; r < u; ++r) n(c[r], this, t);
            }
            return !0;
          }, o.prototype.addListener = function(e, t) {
            return u(this, e, t, !1);
          }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(e, t) {
            return u(this, e, t, !0);
          }, o.prototype.once = function(e, t) {
            return a(t), this.on(e, d(this, e, t)), this;
          }, o.prototype.prependOnceListener = function(e, t) {
            return a(t), this.prependListener(e, d(this, e, t)), this;
          }, o.prototype.removeListener = function(e, t) {
            var r, n, i, o, s;
            if (a(t), void 0 === (n = this._events)) return this;
            if (void 0 === (r = n[e])) return this;
            if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t)); else if ("function" != typeof r) {
              for (i = -1, o = r.length - 1; o >= 0; o--) if (r[o] === t || r[o].listener === t) {
                s = r[o].listener, i = o;
                break;
              }
              if (i < 0) return this;
              0 === i ? r.shift() : function(e, t) {
                for (;t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop();
              }(r, i), 1 === r.length && (n[e] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", e, s || t);
            }
            return this;
          }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(e) {
            var t, r, n;
            if (void 0 === (r = this._events)) return this;
            if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), 
            this;
            if (0 === arguments.length) {
              var i, o = Object.keys(r);
              for (n = 0; n < o.length; ++n) "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
              return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
            }
            if ("function" == typeof (t = r[e])) this.removeListener(e, t); else if (void 0 !== t) for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
            return this;
          }, o.prototype.listeners = function(e) {
            return f(this, e, !0);
          }, o.prototype.rawListeners = function(e) {
            return f(this, e, !1);
          }, o.listenerCount = function(e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : h.call(e, t);
          }, o.prototype.listenerCount = h, o.prototype.eventNames = function() {
            return this._eventsCount > 0 ? t(this._events) : [];
          };
        },
        4063: e => {
          "use strict";
          e.exports = function e(t, r) {
            if (t === r) return !0;
            if (t && r && "object" == typeof t && "object" == typeof r) {
              if (t.constructor !== r.constructor) return !1;
              var n, i, o;
              if (Array.isArray(t)) {
                if ((n = t.length) != r.length) return !1;
                for (i = n; 0 != i--; ) if (!e(t[i], r[i])) return !1;
                return !0;
              }
              if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
              if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
              if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
              if ((n = (o = Object.keys(t)).length) !== Object.keys(r).length) return !1;
              for (i = n; 0 != i--; ) if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
              for (i = n; 0 != i--; ) {
                var s = o[i];
                if (!e(t[s], r[s])) return !1;
              }
              return !0;
            }
            return t != t && r != r;
          };
        },
        4445: e => {
          e.exports = s, s.default = s, s.stable = c, s.stableStringify = c;
          var t = "[...]", r = "[Circular]", n = [], i = [];
          function o() {
            return {
              depthLimit: Number.MAX_SAFE_INTEGER,
              edgesLimit: Number.MAX_SAFE_INTEGER
            };
          }
          function s(e, t, r, s) {
            var a;
            void 0 === s && (s = o()), l(e, "", 0, [], void 0, 0, s);
            try {
              a = 0 === i.length ? JSON.stringify(e, t, r) : JSON.stringify(e, f(t), r);
            } catch (e) {
              return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
            } finally {
              for (;0 !== n.length; ) {
                var u = n.pop();
                4 === u.length ? Object.defineProperty(u[0], u[1], u[3]) : u[0][u[1]] = u[2];
              }
            }
            return a;
          }
          function a(e, t, r, o) {
            var s = Object.getOwnPropertyDescriptor(o, r);
            void 0 !== s.get ? s.configurable ? (Object.defineProperty(o, r, {
              value: e
            }), n.push([ o, r, t, s ])) : i.push([ t, r, e ]) : (o[r] = e, n.push([ o, r, t ]));
          }
          function l(e, n, i, o, s, u, c) {
            var d;
            if (u += 1, "object" == typeof e && null !== e) {
              for (d = 0; d < o.length; d++) if (o[d] === e) return void a(r, e, n, s);
              if (void 0 !== c.depthLimit && u > c.depthLimit) return void a(t, e, n, s);
              if (void 0 !== c.edgesLimit && i + 1 > c.edgesLimit) return void a(t, e, n, s);
              if (o.push(e), Array.isArray(e)) for (d = 0; d < e.length; d++) l(e[d], d, d, o, e, u, c); else {
                var f = Object.keys(e);
                for (d = 0; d < f.length; d++) {
                  var h = f[d];
                  l(e[h], h, d, o, e, u, c);
                }
              }
              o.pop();
            }
          }
          function u(e, t) {
            return e < t ? -1 : e > t ? 1 : 0;
          }
          function c(e, t, r, s) {
            void 0 === s && (s = o());
            var a, l = d(e, "", 0, [], void 0, 0, s) || e;
            try {
              a = 0 === i.length ? JSON.stringify(l, t, r) : JSON.stringify(l, f(t), r);
            } catch (e) {
              return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
            } finally {
              for (;0 !== n.length; ) {
                var u = n.pop();
                4 === u.length ? Object.defineProperty(u[0], u[1], u[3]) : u[0][u[1]] = u[2];
              }
            }
            return a;
          }
          function d(e, i, o, s, l, c, f) {
            var h;
            if (c += 1, "object" == typeof e && null !== e) {
              for (h = 0; h < s.length; h++) if (s[h] === e) return void a(r, e, i, l);
              try {
                if ("function" == typeof e.toJSON) return;
              } catch (e) {
                return;
              }
              if (void 0 !== f.depthLimit && c > f.depthLimit) return void a(t, e, i, l);
              if (void 0 !== f.edgesLimit && o + 1 > f.edgesLimit) return void a(t, e, i, l);
              if (s.push(e), Array.isArray(e)) for (h = 0; h < e.length; h++) d(e[h], h, h, s, e, c, f); else {
                var p = {}, y = Object.keys(e).sort(u);
                for (h = 0; h < y.length; h++) {
                  var g = y[h];
                  d(e[g], g, h, s, e, c, f), p[g] = e[g];
                }
                if (void 0 === l) return p;
                n.push([ l, i, e ]), l[i] = p;
              }
              s.pop();
            }
          }
          function f(e) {
            return e = void 0 !== e ? e : function(e, t) {
              return t;
            }, function(t, r) {
              if (i.length > 0) for (var n = 0; n < i.length; n++) {
                var o = i[n];
                if (o[1] === t && o[0] === r) {
                  r = o[2], i.splice(n, 1);
                  break;
                }
              }
              return e.call(this, t, r);
            };
          }
        },
        645: (e, t) => {
          t.read = function(e, t, r, n, i) {
            var o, s, a = 8 * i - n - 1, l = (1 << a) - 1, u = l >> 1, c = -7, d = r ? i - 1 : 0, f = r ? -1 : 1, h = e[t + d];
            for (d += f, o = h & (1 << -c) - 1, h >>= -c, c += a; c > 0; o = 256 * o + e[t + d], d += f, c -= 8) ;
            for (s = o & (1 << -c) - 1, o >>= -c, c += n; c > 0; s = 256 * s + e[t + d], d += f, c -= 8) ;
            if (0 === o) o = 1 - u; else {
              if (o === l) return s ? NaN : 1 / 0 * (h ? -1 : 1);
              s += Math.pow(2, n), o -= u;
            }
            return (h ? -1 : 1) * s * Math.pow(2, o - n);
          }, t.write = function(e, t, r, n, i, o) {
            var s, a, l, u = 8 * o - i - 1, c = (1 << u) - 1, d = c >> 1, f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = n ? 0 : o - 1, p = n ? 1 : -1, y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = c) : (s = Math.floor(Math.log(t) / Math.LN2), 
            t * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), (t += s + d >= 1 ? f / l : f * Math.pow(2, 1 - d)) * l >= 2 && (s++, l /= 2), 
            s + d >= c ? (a = 0, s = c) : s + d >= 1 ? (a = (t * l - 1) * Math.pow(2, i), s += d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, i), 
            s = 0)); i >= 8; e[r + h] = 255 & a, h += p, a /= 256, i -= 8) ;
            for (s = s << i | a, u += i; u > 0; e[r + h] = 255 & s, h += p, s /= 256, u -= 8) ;
            e[r + h - p] |= 128 * y;
          };
        },
        4970: e => {
          "use strict";
          const t = e => null !== e && "object" == typeof e && "function" == typeof e.pipe;
          t.writable = e => t(e) && !1 !== e.writable && "function" == typeof e._write && "object" == typeof e._writableState, t.readable = e => t(e) && !1 !== e.readable && "function" == typeof e._read && "object" == typeof e._readableState, 
          t.duplex = e => t.writable(e) && t.readable(e), t.transform = e => t.duplex(e) && "function" == typeof e._transform, e.exports = t;
        },
        2378: (e, t, r) => {
          e = r.nmd(e);
          var n = "__lodash_hash_undefined__", i = 9007199254740991, o = "[object Arguments]", s = "[object Function]", a = "[object Object]", l = /^\[object .+?Constructor\]$/, u = /^(?:0|[1-9]\d*)$/, c = {};
          c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, 
          c[o] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c[s] = c["[object Map]"] = c["[object Number]"] = c[a] = c["[object RegExp]"] = c["[object Set]"] = c["[object String]"] = c["[object WeakMap]"] = !1;
          var d, f, h, p = "object" == typeof r.g && r.g && r.g.Object === Object && r.g, y = "object" == typeof self && self && self.Object === Object && self, g = p || y || Function("return this")(), b = t && !t.nodeType && t, m = b && e && !e.nodeType && e, w = m && m.exports === b, v = w && p.process, _ = function() {
            try {
              return m && m.require && m.require("util").types || v && v.binding && v.binding("util");
            } catch (e) {}
          }(), E = _ && _.isTypedArray, S = Array.prototype, R = Function.prototype, A = Object.prototype, I = g["__core-js_shared__"], T = R.toString, O = A.hasOwnProperty, C = (d = /[^.]+$/.exec(I && I.keys && I.keys.IE_PROTO || "")) ? "Symbol(src)_1." + d : "", N = A.toString, P = T.call(Object), L = RegExp("^" + T.call(O).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), x = w ? g.Buffer : void 0, M = g.Symbol, D = g.Uint8Array, j = (x && x.allocUnsafe, 
          f = Object.getPrototypeOf, h = Object, function(e) {
            return f(h(e));
          }), k = Object.create, $ = A.propertyIsEnumerable, U = S.splice, B = M ? M.toStringTag : void 0, F = function() {
            try {
              var e = ae(Object, "defineProperty");
              return e({}, "", {}), e;
            } catch (e) {}
          }(), W = x ? x.isBuffer : void 0, V = Math.max, H = Date.now, G = ae(g, "Map"), J = ae(Object, "create"), K = function() {
            function e() {}
            return function(t) {
              if (!we(t)) return {};
              if (k) return k(t);
              e.prototype = t;
              var r = new e;
              return e.prototype = void 0, r;
            };
          }();
          function z(e) {
            var t = -1, r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1]);
            }
          }
          function q(e) {
            var t = -1, r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1]);
            }
          }
          function X(e) {
            var t = -1, r = null == e ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1]);
            }
          }
          function Y(e) {
            var t = this.__data__ = new q(e);
            this.size = t.size;
          }
          function Z(e, t, r) {
            (void 0 !== r && !fe(e[t], r) || void 0 === r && !(t in e)) && te(e, t, r);
          }
          function Q(e, t, r) {
            var n = e[t];
            O.call(e, t) && fe(n, r) && (void 0 !== r || t in e) || te(e, t, r);
          }
          function ee(e, t) {
            for (var r = e.length; r--; ) if (fe(e[r][0], t)) return r;
            return -1;
          }
          function te(e, t, r) {
            "__proto__" == t && F ? F(e, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0
            }) : e[t] = r;
          }
          function re(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : B && B in Object(e) ? function(e) {
              var t = O.call(e, B), r = e[B];
              try {
                e[B] = void 0;
                var n = !0;
              } catch (e) {}
              var i = N.call(e);
              return n && (t ? e[B] = r : delete e[B]), i;
            }(e) : function(e) {
              return N.call(e);
            }(e);
          }
          function ne(e) {
            return ve(e) && re(e) == o;
          }
          function ie(e, t, r, n, i) {
            e !== t && function(e, t, r) {
              for (var n = -1, i = Object(e), o = r(e), s = o.length; s--; ) {
                var a = o[++n];
                if (!1 === t(i[a], a)) break;
              }
            }(t, (function(o, s) {
              if (i || (i = new Y), we(o)) !function(e, t, r, n, i, o, s) {
                var l = ce(e, r), u = ce(t, r), c = s.get(u);
                if (c) Z(e, r, c); else {
                  var d, f, h, p, y, g = o ? o(l, u, r + "", e, t, s) : void 0, b = void 0 === g;
                  if (b) {
                    var m = pe(u), w = !m && ge(u), v = !m && !w && _e(u);
                    g = u, m || w || v ? pe(l) ? g = l : ve(y = l) && ye(y) ? g = function(e, t) {
                      var r = -1, n = e.length;
                      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
                      return t;
                    }(l) : w ? (b = !1, g = function(e, t) {
                      return e.slice();
                    }(u)) : v ? (b = !1, p = new (h = (d = u).buffer).constructor(h.byteLength), new D(p).set(new D(h)), f = p, g = new d.constructor(f, d.byteOffset, d.length)) : g = [] : function(e) {
                      if (!ve(e) || re(e) != a) return !1;
                      var t = j(e);
                      if (null === t) return !0;
                      var r = O.call(t, "constructor") && t.constructor;
                      return "function" == typeof r && r instanceof r && T.call(r) == P;
                    }(u) || he(u) ? (g = l, he(l) ? g = function(e) {
                      return function(e, t, r, n) {
                        var i = !r;
                        r || (r = {});
                        for (var o = -1, s = t.length; ++o < s; ) {
                          var a = t[o], l = void 0;
                          void 0 === l && (l = e[a]), i ? te(r, a, l) : Q(r, a, l);
                        }
                        return r;
                      }(e, Ee(e));
                    }(l) : we(l) && !be(l) || (g = function(e) {
                      return "function" != typeof e.constructor || ue(e) ? {} : K(j(e));
                    }(u))) : b = !1;
                  }
                  b && (s.set(u, g), i(g, u, n, o, s), s.delete(u)), Z(e, r, g);
                }
              }(e, t, s, r, ie, n, i); else {
                var l = n ? n(ce(e, s), o, s + "", e, t, i) : void 0;
                void 0 === l && (l = o), Z(e, s, l);
              }
            }), Ee);
          }
          z.prototype.clear = function() {
            this.__data__ = J ? J(null) : {}, this.size = 0;
          }, z.prototype.delete = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t;
          }, z.prototype.get = function(e) {
            var t = this.__data__;
            if (J) {
              var r = t[e];
              return r === n ? void 0 : r;
            }
            return O.call(t, e) ? t[e] : void 0;
          }, z.prototype.has = function(e) {
            var t = this.__data__;
            return J ? void 0 !== t[e] : O.call(t, e);
          }, z.prototype.set = function(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = J && void 0 === t ? n : t, this;
          }, q.prototype.clear = function() {
            this.__data__ = [], this.size = 0;
          }, q.prototype.delete = function(e) {
            var t = this.__data__, r = ee(t, e);
            return !(r < 0 || (r == t.length - 1 ? t.pop() : U.call(t, r, 1), --this.size, 0));
          }, q.prototype.get = function(e) {
            var t = this.__data__, r = ee(t, e);
            return r < 0 ? void 0 : t[r][1];
          }, q.prototype.has = function(e) {
            return ee(this.__data__, e) > -1;
          }, q.prototype.set = function(e, t) {
            var r = this.__data__, n = ee(r, e);
            return n < 0 ? (++this.size, r.push([ e, t ])) : r[n][1] = t, this;
          }, X.prototype.clear = function() {
            this.size = 0, this.__data__ = {
              hash: new z,
              map: new (G || q),
              string: new z
            };
          }, X.prototype.delete = function(e) {
            var t = se(this, e).delete(e);
            return this.size -= t ? 1 : 0, t;
          }, X.prototype.get = function(e) {
            return se(this, e).get(e);
          }, X.prototype.has = function(e) {
            return se(this, e).has(e);
          }, X.prototype.set = function(e, t) {
            var r = se(this, e), n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
          }, Y.prototype.clear = function() {
            this.__data__ = new q, this.size = 0;
          }, Y.prototype.delete = function(e) {
            var t = this.__data__, r = t.delete(e);
            return this.size = t.size, r;
          }, Y.prototype.get = function(e) {
            return this.__data__.get(e);
          }, Y.prototype.has = function(e) {
            return this.__data__.has(e);
          }, Y.prototype.set = function(e, t) {
            var r = this.__data__;
            if (r instanceof q) {
              var n = r.__data__;
              if (!G || n.length < 199) return n.push([ e, t ]), this.size = ++r.size, this;
              r = this.__data__ = new X(n);
            }
            return r.set(e, t), this.size = r.size, this;
          };
          var oe = F ? function(e, t) {
            return F(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: (r = t, function() {
                return r;
              }),
              writable: !0
            });
            var r;
          } : Ae;
          function se(e, t) {
            var r, n, i = e.__data__;
            return ("string" == (n = typeof (r = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof t ? "string" : "hash"] : i.map;
          }
          function ae(e, t) {
            var r = function(e, t) {
              return null == e ? void 0 : e[t];
            }(e, t);
            return function(e) {
              return !(!we(e) || function(e) {
                return !!C && C in e;
              }(e)) && (be(e) ? L : l).test(function(e) {
                if (null != e) {
                  try {
                    return T.call(e);
                  } catch (e) {}
                  try {
                    return e + "";
                  } catch (e) {}
                }
                return "";
              }(e));
            }(r) ? r : void 0;
          }
          function le(e, t) {
            var r = typeof e;
            return !!(t = null == t ? i : t) && ("number" == r || "symbol" != r && u.test(e)) && e > -1 && e % 1 == 0 && e < t;
          }
          function ue(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || A);
          }
          function ce(e, t) {
            if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t];
          }
          var de = function(e) {
            var t = 0, r = 0;
            return function() {
              var n = H(), i = 16 - (n - r);
              if (r = n, i > 0) {
                if (++t >= 800) return arguments[0];
              } else t = 0;
              return e.apply(void 0, arguments);
            };
          }(oe);
          function fe(e, t) {
            return e === t || e != e && t != t;
          }
          var he = ne(function() {
            return arguments;
          }()) ? ne : function(e) {
            return ve(e) && O.call(e, "callee") && !$.call(e, "callee");
          }, pe = Array.isArray;
          function ye(e) {
            return null != e && me(e.length) && !be(e);
          }
          var ge = W || function() {
            return !1;
          };
          function be(e) {
            if (!we(e)) return !1;
            var t = re(e);
            return t == s || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
          }
          function me(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= i;
          }
          function we(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t);
          }
          function ve(e) {
            return null != e && "object" == typeof e;
          }
          var _e = E ? function(e) {
            return function(t) {
              return e(t);
            };
          }(E) : function(e) {
            return ve(e) && me(e.length) && !!c[re(e)];
          };
          function Ee(e) {
            return ye(e) ? function(e, t) {
              var r = pe(e), n = !r && he(e), i = !r && !n && ge(e), o = !r && !n && !i && _e(e), s = r || n || i || o, a = s ? function(e, t) {
                for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
                return n;
              }(e.length, String) : [], l = a.length;
              for (var u in e) s && ("length" == u || i && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || le(u, l)) || a.push(u);
              return a;
            }(e) : function(e) {
              if (!we(e)) return function(e) {
                var t = [];
                if (null != e) for (var r in Object(e)) t.push(r);
                return t;
              }(e);
              var t = ue(e), r = [];
              for (var n in e) ("constructor" != n || !t && O.call(e, n)) && r.push(n);
              return r;
            }(e);
          }
          var Se, Re = (Se = function(e, t, r) {
            ie(e, t, r);
          }, function(e, t) {
            return de(function(e, t, r) {
              return t = V(void 0 === t ? e.length - 1 : t, 0), function() {
                for (var n = arguments, i = -1, o = V(n.length - t, 0), s = Array(o); ++i < o; ) s[i] = n[t + i];
                i = -1;
                for (var a = Array(t + 1); ++i < t; ) a[i] = n[i];
                return a[t] = r(s), function(e, t, r) {
                  switch (r.length) {
                   case 0:
                    return e.call(t);

                   case 1:
                    return e.call(t, r[0]);

                   case 2:
                    return e.call(t, r[0], r[1]);

                   case 3:
                    return e.call(t, r[0], r[1], r[2]);
                  }
                  return e.apply(t, r);
                }(e, this, a);
              };
            }(e, void 0, Ae), e + "");
          }((function(e, t) {
            var r = -1, n = t.length, i = n > 1 ? t[n - 1] : void 0, o = n > 2 ? t[2] : void 0;
            for (i = Se.length > 3 && "function" == typeof i ? (n--, i) : void 0, o && function(e, t, r) {
              if (!we(r)) return !1;
              var n = typeof t;
              return !!("number" == n ? ye(r) && le(t, r.length) : "string" == n && t in r) && fe(r[t], e);
            }(t[0], t[1], o) && (i = n < 3 ? void 0 : i, n = 1), e = Object(e); ++r < n; ) {
              var s = t[r];
              s && Se(e, s, r);
            }
            return e;
          })));
          function Ae(e) {
            return e;
          }
          e.exports = Re;
        },
        2043: function(e, t, r) {
          var n, i;
          !function(o, s) {
            "use strict";
            n = function() {
              var e = function() {}, t = "undefined", r = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent), n = [ "trace", "debug", "info", "warn", "error" ];
              function i(e, t) {
                var r = e[t];
                if ("function" == typeof r.bind) return r.bind(e);
                try {
                  return Function.prototype.bind.call(r, e);
                } catch (t) {
                  return function() {
                    return Function.prototype.apply.apply(r, [ e, arguments ]);
                  };
                }
              }
              function o() {
                console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [ console, arguments ])), 
                console.trace && console.trace();
              }
              function s(t, r) {
                for (var i = 0; i < n.length; i++) {
                  var o = n[i];
                  this[o] = i < t ? e : this.methodFactory(o, t, r);
                }
                this.log = this.debug;
              }
              function a(e, r, n) {
                return function() {
                  typeof console !== t && (s.call(this, r, n), this[e].apply(this, arguments));
                };
              }
              function l(n, s, l) {
                return function(n) {
                  return "debug" === n && (n = "log"), typeof console !== t && ("trace" === n && r ? o : void 0 !== console[n] ? i(console, n) : void 0 !== console.log ? i(console, "log") : e);
                }(n) || a.apply(this, arguments);
              }
              function u(e, r, i) {
                var o, a = this;
                r = null == r ? "WARN" : r;
                var u = "loglevel";
                function c() {
                  var e;
                  if (typeof window !== t && u) {
                    try {
                      e = window.localStorage[u];
                    } catch (e) {}
                    if (typeof e === t) try {
                      var r = window.document.cookie, n = r.indexOf(encodeURIComponent(u) + "=");
                      -1 !== n && (e = /^([^;]+)/.exec(r.slice(n))[1]);
                    } catch (e) {}
                    return void 0 === a.levels[e] && (e = void 0), e;
                  }
                }
                "string" == typeof e ? u += ":" + e : "symbol" == typeof e && (u = void 0), a.name = e, a.levels = {
                  TRACE: 0,
                  DEBUG: 1,
                  INFO: 2,
                  WARN: 3,
                  ERROR: 4,
                  SILENT: 5
                }, a.methodFactory = i || l, a.getLevel = function() {
                  return o;
                }, a.setLevel = function(r, i) {
                  if ("string" == typeof r && void 0 !== a.levels[r.toUpperCase()] && (r = a.levels[r.toUpperCase()]), !("number" == typeof r && r >= 0 && r <= a.levels.SILENT)) throw "log.setLevel() called with invalid level: " + r;
                  if (o = r, !1 !== i && function(e) {
                    var r = (n[e] || "silent").toUpperCase();
                    if (typeof window !== t && u) {
                      try {
                        return void (window.localStorage[u] = r);
                      } catch (e) {}
                      try {
                        window.document.cookie = encodeURIComponent(u) + "=" + r + ";";
                      } catch (e) {}
                    }
                  }(r), s.call(a, r, e), typeof console === t && r < a.levels.SILENT) return "No console available for logging";
                }, a.setDefaultLevel = function(e) {
                  r = e, c() || a.setLevel(e, !1);
                }, a.resetLevel = function() {
                  a.setLevel(r, !1), function() {
                    if (typeof window !== t && u) {
                      try {
                        return void window.localStorage.removeItem(u);
                      } catch (e) {}
                      try {
                        window.document.cookie = encodeURIComponent(u) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                      } catch (e) {}
                    }
                  }();
                }, a.enableAll = function(e) {
                  a.setLevel(a.levels.TRACE, e);
                }, a.disableAll = function(e) {
                  a.setLevel(a.levels.SILENT, e);
                };
                var d = c();
                null == d && (d = r), a.setLevel(d, !1);
              }
              var c = new u, d = {};
              c.getLogger = function(e) {
                if ("symbol" != typeof e && "string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
                var t = d[e];
                return t || (t = d[e] = new u(e, c.getLevel(), c.methodFactory)), t;
              };
              var f = typeof window !== t ? window.log : void 0;
              return c.noConflict = function() {
                return typeof window !== t && window.log === c && (window.log = f), c;
              }, c.getLoggers = function() {
                return d;
              }, c.default = c, c;
            }, void 0 === (i = n.call(t, r, t, e)) || (e.exports = i);
          }();
        },
        7824: e => {
          var t = 1e3, r = 60 * t, n = 60 * r, i = 24 * n;
          function o(e, t, r, n) {
            var i = t >= 1.5 * r;
            return Math.round(e / r) + " " + n + (i ? "s" : "");
          }
          e.exports = function(e, s) {
            s = s || {};
            var a, l, u = typeof e;
            if ("string" === u && e.length > 0) return function(e) {
              if (!((e = String(e)).length > 100)) {
                var o = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                if (o) {
                  var s = parseFloat(o[1]);
                  switch ((o[2] || "ms").toLowerCase()) {
                   case "years":
                   case "year":
                   case "yrs":
                   case "yr":
                   case "y":
                    return 315576e5 * s;

                   case "weeks":
                   case "week":
                   case "w":
                    return 6048e5 * s;

                   case "days":
                   case "day":
                   case "d":
                    return s * i;

                   case "hours":
                   case "hour":
                   case "hrs":
                   case "hr":
                   case "h":
                    return s * n;

                   case "minutes":
                   case "minute":
                   case "mins":
                   case "min":
                   case "m":
                    return s * r;

                   case "seconds":
                   case "second":
                   case "secs":
                   case "sec":
                   case "s":
                    return s * t;

                   case "milliseconds":
                   case "millisecond":
                   case "msecs":
                   case "msec":
                   case "ms":
                    return s;

                   default:
                    return;
                  }
                }
              }
            }(e);
            if ("number" === u && isFinite(e)) return s.long ? (a = e, (l = Math.abs(a)) >= i ? o(a, l, i, "day") : l >= n ? o(a, l, n, "hour") : l >= r ? o(a, l, r, "minute") : l >= t ? o(a, l, t, "second") : a + " ms") : function(e) {
              var o = Math.abs(e);
              return o >= i ? Math.round(e / i) + "d" : o >= n ? Math.round(e / n) + "h" : o >= r ? Math.round(e / r) + "m" : o >= t ? Math.round(e / t) + "s" : e + "ms";
            }(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
          };
        },
        778: (e, t, r) => {
          var n = r(2479);
          function i(e) {
            var t = function() {
              return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments));
            };
            return t.called = !1, t;
          }
          function o(e) {
            var t = function() {
              if (t.called) throw new Error(t.onceError);
              return t.called = !0, t.value = e.apply(this, arguments);
            }, r = e.name || "Function wrapped with `once`";
            return t.onceError = r + " shouldn't be called more than once", t.called = !1, t;
          }
          e.exports = n(i), e.exports.strict = n(o), i.proto = i((function() {
            Object.defineProperty(Function.prototype, "once", {
              value: function() {
                return i(this);
              },
              configurable: !0
            }), Object.defineProperty(Function.prototype, "onceStrict", {
              value: function() {
                return o(this);
              },
              configurable: !0
            });
          }));
        },
        4155: e => {
          var t, r, n = e.exports = {};
          function i() {
            throw new Error("setTimeout has not been defined");
          }
          function o() {
            throw new Error("clearTimeout has not been defined");
          }
          function s(e) {
            if (t === setTimeout) return setTimeout(e, 0);
            if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
            try {
              return t(e, 0);
            } catch (r) {
              try {
                return t.call(null, e, 0);
              } catch (r) {
                return t.call(this, e, 0);
              }
            }
          }
          !function() {
            try {
              t = "function" == typeof setTimeout ? setTimeout : i;
            } catch (e) {
              t = i;
            }
            try {
              r = "function" == typeof clearTimeout ? clearTimeout : o;
            } catch (e) {
              r = o;
            }
          }();
          var a, l = [], u = !1, c = -1;
          function d() {
            u && a && (u = !1, a.length ? l = a.concat(l) : c = -1, l.length && f());
          }
          function f() {
            if (!u) {
              var e = s(d);
              u = !0;
              for (var t = l.length; t; ) {
                for (a = l, l = []; ++c < t; ) a && a[c].run();
                c = -1, t = l.length;
              }
              a = null, u = !1, function(e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                try {
                  r(e);
                } catch (t) {
                  try {
                    return r.call(null, e);
                  } catch (t) {
                    return r.call(this, e);
                  }
                }
              }(e);
            }
          }
          function h(e, t) {
            this.fun = e, this.array = t;
          }
          function p() {}
          n.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            l.push(new h(e, t)), 1 !== l.length || u || s(f);
          }, h.prototype.run = function() {
            this.fun.apply(null, this.array);
          }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, 
          n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, 
          n.listeners = function(e) {
            return [];
          }, n.binding = function(e) {
            throw new Error("process.binding is not supported");
          }, n.cwd = function() {
            return "/";
          }, n.chdir = function(e) {
            throw new Error("process.chdir is not supported");
          }, n.umask = function() {
            return 0;
          };
        },
        4286: (e, t, r) => {
          var n = r(4155), i = r(778), o = r(2840), s = r(1156), a = function() {}, l = /^v?\.0/.test(n.version), u = function(e) {
            return "function" == typeof e;
          }, c = function(e) {
            e();
          }, d = function(e, t) {
            return e.pipe(t);
          };
          e.exports = function() {
            var e, t = Array.prototype.slice.call(arguments), r = u(t[t.length - 1] || a) && t.pop() || a;
            if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new Error("pump requires two streams per minimum");
            var n = t.map((function(d, f) {
              var h = f < t.length - 1;
              return function(e, t, r, n) {
                n = i(n);
                var c = !1;
                e.on("close", (function() {
                  c = !0;
                })), o(e, {
                  readable: t,
                  writable: r
                }, (function(e) {
                  if (e) return n(e);
                  c = !0, n();
                }));
                var d = !1;
                return function(t) {
                  if (!c && !d) return d = !0, function(e) {
                    return !!l && !!s && (e instanceof (s.ReadStream || a) || e instanceof (s.WriteStream || a)) && u(e.close);
                  }(e) ? e.close(a) : function(e) {
                    return e.setHeader && u(e.abort);
                  }(e) ? e.abort() : u(e.destroy) ? e.destroy() : void n(t || new Error("stream was destroyed"));
                };
              }(d, h, f > 0, (function(t) {
                e || (e = t), t && n.forEach(c), h || (n.forEach(c), r(e));
              }));
            }));
            return t.reduce(d);
          };
        },
        196: (e, t, r) => {
          "use strict";
          const {AbortError: n, codes: i} = r(4381), {isNodeStream: o, isWebStream: s, kControllerErrorFunction: a} = r(5874), l = r(8610), {ERR_INVALID_ARG_TYPE: u} = i;
          e.exports.addAbortSignal = function(t, r) {
            if (((e, t) => {
              if ("object" != typeof e || !("aborted" in e)) throw new u("signal", "AbortSignal", e);
            })(t), !o(r) && !s(r)) throw new u("stream", [ "ReadableStream", "WritableStream", "Stream" ], r);
            return e.exports.addAbortSignalNoValidate(t, r);
          }, e.exports.addAbortSignalNoValidate = function(e, t) {
            if ("object" != typeof e || !("aborted" in e)) return t;
            const r = o(t) ? () => {
              t.destroy(new n(void 0, {
                cause: e.reason
              }));
            } : () => {
              t[a](new n(void 0, {
                cause: e.reason
              }));
            };
            return e.aborted ? r() : (e.addEventListener("abort", r), l(t, (() => e.removeEventListener("abort", r)))), t;
          };
        },
        7327: (e, t, r) => {
          "use strict";
          const {StringPrototypeSlice: n, SymbolIterator: i, TypedArrayPrototypeSet: o, Uint8Array: s} = r(9061), {Buffer: a} = r(8764), {inspect: l} = r(6087);
          e.exports = class {
            constructor() {
              this.head = null, this.tail = null, this.length = 0;
            }
            push(e) {
              const t = {
                data: e,
                next: null
              };
              this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length;
            }
            unshift(e) {
              const t = {
                data: e,
                next: this.head
              };
              0 === this.length && (this.tail = t), this.head = t, ++this.length;
            }
            shift() {
              if (0 === this.length) return;
              const e = this.head.data;
              return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
            }
            clear() {
              this.head = this.tail = null, this.length = 0;
            }
            join(e) {
              if (0 === this.length) return "";
              let t = this.head, r = "" + t.data;
              for (;null !== (t = t.next); ) r += e + t.data;
              return r;
            }
            concat(e) {
              if (0 === this.length) return a.alloc(0);
              const t = a.allocUnsafe(e >>> 0);
              let r = this.head, n = 0;
              for (;r; ) o(t, r.data, n), n += r.data.length, r = r.next;
              return t;
            }
            consume(e, t) {
              const r = this.head.data;
              if (e < r.length) {
                const t = r.slice(0, e);
                return this.head.data = r.slice(e), t;
              }
              return e === r.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e);
            }
            first() {
              return this.head.data;
            }
            * [i]() {
              for (let e = this.head; e; e = e.next) yield e.data;
            }
            _getString(e) {
              let t = "", r = this.head, i = 0;
              do {
                const o = r.data;
                if (!(e > o.length)) {
                  e === o.length ? (t += o, ++i, r.next ? this.head = r.next : this.head = this.tail = null) : (t += n(o, 0, e), this.head = r, 
                  r.data = n(o, e));
                  break;
                }
                t += o, e -= o.length, ++i;
              } while (null !== (r = r.next));
              return this.length -= i, t;
            }
            _getBuffer(e) {
              const t = a.allocUnsafe(e), r = e;
              let n = this.head, i = 0;
              do {
                const a = n.data;
                if (!(e > a.length)) {
                  e === a.length ? (o(t, a, r - e), ++i, n.next ? this.head = n.next : this.head = this.tail = null) : (o(t, new s(a.buffer, a.byteOffset, e), r - e), 
                  this.head = n, n.data = a.slice(e));
                  break;
                }
                o(t, a, r - e), e -= a.length, ++i;
              } while (null !== (n = n.next));
              return this.length -= i, t;
            }
            [Symbol.for("nodejs.util.inspect.custom")](e, t) {
              return l(this, {
                ...t,
                depth: 0,
                customInspect: !1
              });
            }
          };
        },
        299: (e, t, r) => {
          "use strict";
          const {pipeline: n} = r(9946), i = r(8672), {destroyer: o} = r(1195), {isNodeStream: s, isReadable: a, isWritable: l, isWebStream: u, isTransformStream: c, isWritableStream: d, isReadableStream: f} = r(5874), {AbortError: h, codes: {ERR_INVALID_ARG_VALUE: p, ERR_MISSING_ARGS: y}} = r(4381), g = r(8610);
          e.exports = function(...e) {
            if (0 === e.length) throw new y("streams");
            if (1 === e.length) return i.from(e[0]);
            const t = [ ...e ];
            if ("function" == typeof e[0] && (e[0] = i.from(e[0])), "function" == typeof e[e.length - 1]) {
              const t = e.length - 1;
              e[t] = i.from(e[t]);
            }
            for (let n = 0; n < e.length; ++n) if (s(e[n]) || u(e[n])) {
              if (n < e.length - 1 && !(a(e[n]) || f(e[n]) || c(e[n]))) throw new p(`streams[${n}]`, t[n], "must be readable");
              if (n > 0 && !(l(e[n]) || d(e[n]) || c(e[n]))) throw new p(`streams[${n}]`, t[n], "must be writable");
            }
            let r, b, m, w, v;
            const _ = e[0], E = n(e, (function(e) {
              const t = w;
              w = null, t ? t(e) : e ? v.destroy(e) : R || S || v.destroy();
            })), S = !!(l(_) || d(_) || c(_)), R = !!(a(E) || f(E) || c(E));
            if (v = new i({
              writableObjectMode: !(null == _ || !_.writableObjectMode),
              readableObjectMode: !(null == E || !E.writableObjectMode),
              writable: S,
              readable: R
            }), S) {
              if (s(_)) v._write = function(e, t, n) {
                _.write(e, t) ? n() : r = n;
              }, v._final = function(e) {
                _.end(), b = e;
              }, _.on("drain", (function() {
                if (r) {
                  const e = r;
                  r = null, e();
                }
              })); else if (u(_)) {
                const e = (c(_) ? _.writable : _).getWriter();
                v._write = async function(t, r, n) {
                  try {
                    await e.ready, e.write(t).catch((() => {})), n();
                  } catch (e) {
                    n(e);
                  }
                }, v._final = async function(t) {
                  try {
                    await e.ready, e.close().catch((() => {})), b = t;
                  } catch (e) {
                    t(e);
                  }
                };
              }
              const e = c(E) ? E.readable : E;
              g(e, (() => {
                if (b) {
                  const e = b;
                  b = null, e();
                }
              }));
            }
            if (R) if (s(E)) E.on("readable", (function() {
              if (m) {
                const e = m;
                m = null, e();
              }
            })), E.on("end", (function() {
              v.push(null);
            })), v._read = function() {
              for (;;) {
                const e = E.read();
                if (null === e) return void (m = v._read);
                if (!v.push(e)) return;
              }
            }; else if (u(E)) {
              const e = (c(E) ? E.readable : E).getReader();
              v._read = async function() {
                for (;;) try {
                  const {value: t, done: r} = await e.read();
                  if (!v.push(t)) return;
                  if (r) return void v.push(null);
                } catch {
                  return;
                }
              };
            }
            return v._destroy = function(e, t) {
              e || null === w || (e = new h), m = null, r = null, b = null, null === w ? t(e) : (w = t, s(E) && o(E, e));
            }, v;
          };
        },
        1195: (e, t, r) => {
          "use strict";
          const n = r(4155), {aggregateTwoErrors: i, codes: {ERR_MULTIPLE_CALLBACK: o}, AbortError: s} = r(4381), {Symbol: a} = r(9061), {kDestroyed: l, isDestroyed: u, isFinished: c, isServerRequest: d} = r(5874), f = a("kDestroy"), h = a("kConstruct");
          function p(e, t, r) {
            e && (e.stack, t && !t.errored && (t.errored = e), r && !r.errored && (r.errored = e));
          }
          function y(e, t, r) {
            let i = !1;
            function o(t) {
              if (i) return;
              i = !0;
              const o = e._readableState, s = e._writableState;
              p(t, s, o), s && (s.closed = !0), o && (o.closed = !0), "function" == typeof r && r(t), t ? n.nextTick(g, e, t) : n.nextTick(b, e);
            }
            try {
              e._destroy(t || null, o);
            } catch (t) {
              o(t);
            }
          }
          function g(e, t) {
            m(e, t), b(e);
          }
          function b(e) {
            const t = e._readableState, r = e._writableState;
            r && (r.closeEmitted = !0), t && (t.closeEmitted = !0), (null != r && r.emitClose || null != t && t.emitClose) && e.emit("close");
          }
          function m(e, t) {
            const r = e._readableState, n = e._writableState;
            null != n && n.errorEmitted || null != r && r.errorEmitted || (n && (n.errorEmitted = !0), r && (r.errorEmitted = !0), e.emit("error", t));
          }
          function w(e, t, r) {
            const i = e._readableState, o = e._writableState;
            if (null != o && o.destroyed || null != i && i.destroyed) return this;
            null != i && i.autoDestroy || null != o && o.autoDestroy ? e.destroy(t) : t && (t.stack, o && !o.errored && (o.errored = t), 
            i && !i.errored && (i.errored = t), r ? n.nextTick(m, e, t) : m(e, t));
          }
          function v(e) {
            let t = !1;
            function r(r) {
              if (t) return void w(e, null != r ? r : new o);
              t = !0;
              const i = e._readableState, s = e._writableState, a = s || i;
              i && (i.constructed = !0), s && (s.constructed = !0), a.destroyed ? e.emit(f, r) : r ? w(e, r, !0) : n.nextTick(_, e);
            }
            try {
              e._construct((e => {
                n.nextTick(r, e);
              }));
            } catch (e) {
              n.nextTick(r, e);
            }
          }
          function _(e) {
            e.emit(h);
          }
          function E(e) {
            return (null == e ? void 0 : e.setHeader) && "function" == typeof e.abort;
          }
          function S(e) {
            e.emit("close");
          }
          function R(e, t) {
            e.emit("error", t), n.nextTick(S, e);
          }
          e.exports = {
            construct: function(e, t) {
              if ("function" != typeof e._construct) return;
              const r = e._readableState, i = e._writableState;
              r && (r.constructed = !1), i && (i.constructed = !1), e.once(h, t), e.listenerCount(h) > 1 || n.nextTick(v, e);
            },
            destroyer: function(e, t) {
              e && !u(e) && (t || c(e) || (t = new s), d(e) ? (e.socket = null, e.destroy(t)) : E(e) ? e.abort() : E(e.req) ? e.req.abort() : "function" == typeof e.destroy ? e.destroy(t) : "function" == typeof e.close ? e.close() : t ? n.nextTick(R, e, t) : n.nextTick(S, e), 
              e.destroyed || (e[l] = !0));
            },
            destroy: function(e, t) {
              const r = this._readableState, n = this._writableState, o = n || r;
              return null != n && n.destroyed || null != r && r.destroyed ? ("function" == typeof t && t(), this) : (p(e, n, r), n && (n.destroyed = !0), 
              r && (r.destroyed = !0), o.constructed ? y(this, e, t) : this.once(f, (function(r) {
                y(this, i(r, e), t);
              })), this);
            },
            undestroy: function() {
              const e = this._readableState, t = this._writableState;
              e && (e.constructed = !0, e.closed = !1, e.closeEmitted = !1, e.destroyed = !1, e.errored = null, e.errorEmitted = !1, e.reading = !1, 
              e.ended = !1 === e.readable, e.endEmitted = !1 === e.readable), t && (t.constructed = !0, t.destroyed = !1, t.closed = !1, 
              t.closeEmitted = !1, t.errored = null, t.errorEmitted = !1, t.finalCalled = !1, t.prefinished = !1, t.ended = !1 === t.writable, 
              t.ending = !1 === t.writable, t.finished = !1 === t.writable);
            },
            errorOrDestroy: w
          };
        },
        8672: (e, t, r) => {
          "use strict";
          const {ObjectDefineProperties: n, ObjectGetOwnPropertyDescriptor: i, ObjectKeys: o, ObjectSetPrototypeOf: s} = r(9061);
          e.exports = u;
          const a = r(911), l = r(6304);
          s(u.prototype, a.prototype), s(u, a);
          {
            const e = o(l.prototype);
            for (let t = 0; t < e.length; t++) {
              const r = e[t];
              u.prototype[r] || (u.prototype[r] = l.prototype[r]);
            }
          }
          function u(e) {
            if (!(this instanceof u)) return new u(e);
            a.call(this, e), l.call(this, e), e ? (this.allowHalfOpen = !1 !== e.allowHalfOpen, !1 === e.readable && (this._readableState.readable = !1, 
            this._readableState.ended = !0, this._readableState.endEmitted = !0), !1 === e.writable && (this._writableState.writable = !1, 
            this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0;
          }
          let c, d;
          function f() {
            return void 0 === c && (c = {}), c;
          }
          n(u.prototype, {
            writable: {
              __proto__: null,
              ...i(l.prototype, "writable")
            },
            writableHighWaterMark: {
              __proto__: null,
              ...i(l.prototype, "writableHighWaterMark")
            },
            writableObjectMode: {
              __proto__: null,
              ...i(l.prototype, "writableObjectMode")
            },
            writableBuffer: {
              __proto__: null,
              ...i(l.prototype, "writableBuffer")
            },
            writableLength: {
              __proto__: null,
              ...i(l.prototype, "writableLength")
            },
            writableFinished: {
              __proto__: null,
              ...i(l.prototype, "writableFinished")
            },
            writableCorked: {
              __proto__: null,
              ...i(l.prototype, "writableCorked")
            },
            writableEnded: {
              __proto__: null,
              ...i(l.prototype, "writableEnded")
            },
            writableNeedDrain: {
              __proto__: null,
              ...i(l.prototype, "writableNeedDrain")
            },
            destroyed: {
              __proto__: null,
              get() {
                return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
              },
              set(e) {
                this._readableState && this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e);
              }
            }
          }), u.fromWeb = function(e, t) {
            return f().newStreamDuplexFromReadableWritablePair(e, t);
          }, u.toWeb = function(e) {
            return f().newReadableWritablePairFromDuplex(e);
          }, u.from = function(e) {
            return d || (d = r(7946)), d(e, "body");
          };
        },
        7946: (e, t, r) => {
          const n = r(4155), i = r(8764), {isReadable: o, isWritable: s, isIterable: a, isNodeStream: l, isReadableNodeStream: u, isWritableNodeStream: c, isDuplexNodeStream: d} = r(5874), f = r(8610), {AbortError: h, codes: {ERR_INVALID_ARG_TYPE: p, ERR_INVALID_RETURN_VALUE: y}} = r(4381), {destroyer: g} = r(1195), b = r(8672), m = r(911), {createDeferredPromise: w} = r(6087), v = r(6307), _ = globalThis.Blob || i.Blob, E = void 0 !== _ ? function(e) {
            return e instanceof _;
          } : function(e) {
            return !1;
          }, S = globalThis.AbortController || r(8599).AbortController, {FunctionPrototypeCall: R} = r(9061);
          class A extends b {
            constructor(e) {
              super(e), !1 === (null == e ? void 0 : e.readable) && (this._readableState.readable = !1, this._readableState.ended = !0, 
              this._readableState.endEmitted = !0), !1 === (null == e ? void 0 : e.writable) && (this._writableState.writable = !1, this._writableState.ending = !0, 
              this._writableState.ended = !0, this._writableState.finished = !0);
            }
          }
          function I(e) {
            const t = e.readable && "function" != typeof e.readable.read ? m.wrap(e.readable) : e.readable, r = e.writable;
            let n, i, a, l, u, c = !!o(t), d = !!s(r);
            function p(e) {
              const t = l;
              l = null, t ? t(e) : e && u.destroy(e);
            }
            return u = new A({
              readableObjectMode: !(null == t || !t.readableObjectMode),
              writableObjectMode: !(null == r || !r.writableObjectMode),
              readable: c,
              writable: d
            }), d && (f(r, (e => {
              d = !1, e && g(t, e), p(e);
            })), u._write = function(e, t, i) {
              r.write(e, t) ? i() : n = i;
            }, u._final = function(e) {
              r.end(), i = e;
            }, r.on("drain", (function() {
              if (n) {
                const e = n;
                n = null, e();
              }
            })), r.on("finish", (function() {
              if (i) {
                const e = i;
                i = null, e();
              }
            }))), c && (f(t, (e => {
              c = !1, e && g(t, e), p(e);
            })), t.on("readable", (function() {
              if (a) {
                const e = a;
                a = null, e();
              }
            })), t.on("end", (function() {
              u.push(null);
            })), u._read = function() {
              for (;;) {
                const e = t.read();
                if (null === e) return void (a = u._read);
                if (!u.push(e)) return;
              }
            }), u._destroy = function(e, o) {
              e || null === l || (e = new h), a = null, n = null, i = null, null === l ? o(e) : (l = o, g(r, e), g(t, e));
            }, u;
          }
          e.exports = function e(t, r) {
            if (d(t)) return t;
            if (u(t)) return I({
              readable: t
            });
            if (c(t)) return I({
              writable: t
            });
            if (l(t)) return I({
              writable: !1,
              readable: !1
            });
            if ("function" == typeof t) {
              const {value: e, write: i, final: o, destroy: s} = function(e) {
                let {promise: t, resolve: r} = w();
                const i = new S, o = i.signal;
                return {
                  value: e(async function*() {
                    for (;;) {
                      const e = t;
                      t = null;
                      const {chunk: i, done: s, cb: a} = await e;
                      if (n.nextTick(a), s) return;
                      if (o.aborted) throw new h(void 0, {
                        cause: o.reason
                      });
                      ({promise: t, resolve: r} = w()), yield i;
                    }
                  }(), {
                    signal: o
                  }),
                  write(e, t, n) {
                    const i = r;
                    r = null, i({
                      chunk: e,
                      done: !1,
                      cb: n
                    });
                  },
                  final(e) {
                    const t = r;
                    r = null, t({
                      done: !0,
                      cb: e
                    });
                  },
                  destroy(e, t) {
                    i.abort(), t(e);
                  }
                };
              }(t);
              if (a(e)) return v(A, e, {
                objectMode: !0,
                write: i,
                final: o,
                destroy: s
              });
              const l = null == e ? void 0 : e.then;
              if ("function" == typeof l) {
                let t;
                const r = R(l, e, (e => {
                  if (null != e) throw new y("nully", "body", e);
                }), (e => {
                  g(t, e);
                }));
                return t = new A({
                  objectMode: !0,
                  readable: !1,
                  write: i,
                  final(e) {
                    o((async () => {
                      try {
                        await r, n.nextTick(e, null);
                      } catch (t) {
                        n.nextTick(e, t);
                      }
                    }));
                  },
                  destroy: s
                });
              }
              throw new y("Iterable, AsyncIterable or AsyncFunction", r, e);
            }
            if (E(t)) return e(t.arrayBuffer());
            if (a(t)) return v(A, t, {
              objectMode: !0,
              writable: !1
            });
            if ("object" == typeof (null == t ? void 0 : t.writable) || "object" == typeof (null == t ? void 0 : t.readable)) return I({
              readable: null != t && t.readable ? u(null == t ? void 0 : t.readable) ? null == t ? void 0 : t.readable : e(t.readable) : void 0,
              writable: null != t && t.writable ? c(null == t ? void 0 : t.writable) ? null == t ? void 0 : t.writable : e(t.writable) : void 0
            });
            const i = null == t ? void 0 : t.then;
            if ("function" == typeof i) {
              let e;
              return R(i, t, (t => {
                null != t && e.push(t), e.push(null);
              }), (t => {
                g(e, t);
              })), e = new A({
                objectMode: !0,
                writable: !1,
                read() {}
              });
            }
            throw new p(r, [ "Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise" ], t);
          };
        },
        8610: (e, t, r) => {
          const n = r(4155), {AbortError: i, codes: o} = r(4381), {ERR_INVALID_ARG_TYPE: s, ERR_STREAM_PREMATURE_CLOSE: a} = o, {kEmptyObject: l, once: u} = r(6087), {validateAbortSignal: c, validateFunction: d, validateObject: f, validateBoolean: h} = r(6547), {Promise: p, PromisePrototypeThen: y} = r(9061), {isClosed: g, isReadable: b, isReadableNodeStream: m, isReadableStream: w, isReadableFinished: v, isReadableErrored: _, isWritable: E, isWritableNodeStream: S, isWritableStream: R, isWritableFinished: A, isWritableErrored: I, isNodeStream: T, willEmitClose: O, kIsClosedPromise: C} = r(5874), N = () => {};
          function P(e, t, r) {
            var o, h;
            if (2 === arguments.length ? (r = t, t = l) : null == t ? t = l : f(t, "options"), d(r, "callback"), c(t.signal, "options.signal"), 
            r = u(r), w(e) || R(e)) return function(e, t, r) {
              let o = !1, s = N;
              if (t.signal) if (s = () => {
                o = !0, r.call(e, new i(void 0, {
                  cause: t.signal.reason
                }));
              }, t.signal.aborted) n.nextTick(s); else {
                const n = r;
                r = u(((...r) => {
                  t.signal.removeEventListener("abort", s), n.apply(e, r);
                })), t.signal.addEventListener("abort", s);
              }
              const a = (...t) => {
                o || n.nextTick((() => r.apply(e, t)));
              };
              return y(e[C].promise, a, a), N;
            }(e, t, r);
            if (!T(e)) throw new s("stream", [ "ReadableStream", "WritableStream", "Stream" ], e);
            const p = null !== (o = t.readable) && void 0 !== o ? o : m(e), P = null !== (h = t.writable) && void 0 !== h ? h : S(e), L = e._writableState, x = e._readableState, M = () => {
              e.writable || k();
            };
            let D = O(e) && m(e) === p && S(e) === P, j = A(e, !1);
            const k = () => {
              j = !0, e.destroyed && (D = !1), (!D || e.readable && !p) && (p && !$ || r.call(e));
            };
            let $ = v(e, !1);
            const U = () => {
              $ = !0, e.destroyed && (D = !1), (!D || e.writable && !P) && (P && !j || r.call(e));
            }, B = t => {
              r.call(e, t);
            };
            let F = g(e);
            const W = () => {
              F = !0;
              const t = I(e) || _(e);
              return t && "boolean" != typeof t ? r.call(e, t) : p && !$ && m(e, !0) && !v(e, !1) ? r.call(e, new a) : !P || j || A(e, !1) ? void r.call(e) : r.call(e, new a);
            }, V = () => {
              F = !0;
              const t = I(e) || _(e);
              if (t && "boolean" != typeof t) return r.call(e, t);
              r.call(e);
            }, H = () => {
              e.req.on("finish", k);
            };
            !function(e) {
              return e.setHeader && "function" == typeof e.abort;
            }(e) ? P && !L && (e.on("end", M), e.on("close", M)) : (e.on("complete", k), D || e.on("abort", W), e.req ? H() : e.on("request", H)), 
            D || "boolean" != typeof e.aborted || e.on("aborted", W), e.on("end", U), e.on("finish", k), !1 !== t.error && e.on("error", B), 
            e.on("close", W), F ? n.nextTick(W) : null != L && L.errorEmitted || null != x && x.errorEmitted ? D || n.nextTick(V) : (p || D && !b(e) || !j && !1 !== E(e)) && (P || D && !E(e) || !$ && !1 !== b(e)) ? x && e.req && e.aborted && n.nextTick(V) : n.nextTick(V);
            const G = () => {
              r = N, e.removeListener("aborted", W), e.removeListener("complete", k), e.removeListener("abort", W), e.removeListener("request", H), 
              e.req && e.req.removeListener("finish", k), e.removeListener("end", M), e.removeListener("close", M), e.removeListener("finish", k), 
              e.removeListener("end", U), e.removeListener("error", B), e.removeListener("close", W);
            };
            if (t.signal && !F) {
              const o = () => {
                const n = r;
                G(), n.call(e, new i(void 0, {
                  cause: t.signal.reason
                }));
              };
              if (t.signal.aborted) n.nextTick(o); else {
                const n = r;
                r = u(((...r) => {
                  t.signal.removeEventListener("abort", o), n.apply(e, r);
                })), t.signal.addEventListener("abort", o);
              }
            }
            return G;
          }
          e.exports = P, e.exports.finished = function(e, t) {
            var r;
            let n = !1;
            return null === t && (t = l), null !== (r = t) && void 0 !== r && r.cleanup && (h(t.cleanup, "cleanup"), n = t.cleanup), 
            new p(((r, i) => {
              const o = P(e, t, (e => {
                n && o(), e ? i(e) : r();
              }));
            }));
          };
        },
        6307: (e, t, r) => {
          "use strict";
          const n = r(4155), {PromisePrototypeThen: i, SymbolAsyncIterator: o, SymbolIterator: s} = r(9061), {Buffer: a} = r(8764), {ERR_INVALID_ARG_TYPE: l, ERR_STREAM_NULL_VALUES: u} = r(4381).codes;
          e.exports = function(e, t, r) {
            let c, d;
            if ("string" == typeof t || t instanceof a) return new e({
              objectMode: !0,
              ...r,
              read() {
                this.push(t), this.push(null);
              }
            });
            if (t && t[o]) d = !0, c = t[o](); else {
              if (!t || !t[s]) throw new l("iterable", [ "Iterable" ], t);
              d = !1, c = t[s]();
            }
            const f = new e({
              objectMode: !0,
              highWaterMark: 1,
              ...r
            });
            let h = !1;
            return f._read = function() {
              h || (h = !0, async function() {
                for (;;) {
                  try {
                    const {value: e, done: t} = d ? await c.next() : c.next();
                    if (t) f.push(null); else {
                      const t = e && "function" == typeof e.then ? await e : e;
                      if (null === t) throw h = !1, new u;
                      if (f.push(t)) continue;
                      h = !1;
                    }
                  } catch (e) {
                    f.destroy(e);
                  }
                  break;
                }
              }());
            }, f._destroy = function(e, t) {
              i(async function(e) {
                const t = null != e, r = "function" == typeof c.throw;
                if (t && r) {
                  const {value: t, done: r} = await c.throw(e);
                  if (await t, r) return;
                }
                if ("function" == typeof c.return) {
                  const {value: e} = await c.return();
                  await e;
                }
              }(e), (() => n.nextTick(t, e)), (r => n.nextTick(t, r || e)));
            }, f;
          };
        },
        4870: (e, t, r) => {
          "use strict";
          const {ArrayIsArray: n, ObjectSetPrototypeOf: i} = r(9061), {EventEmitter: o} = r(7187);
          function s(e) {
            o.call(this, e);
          }
          function a(e, t, r) {
            if ("function" == typeof e.prependListener) return e.prependListener(t, r);
            e._events && e._events[t] ? n(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [ r, e._events[t] ] : e.on(t, r);
          }
          i(s.prototype, o.prototype), i(s, o), s.prototype.pipe = function(e, t) {
            const r = this;
            function n(t) {
              e.writable && !1 === e.write(t) && r.pause && r.pause();
            }
            function i() {
              r.readable && r.resume && r.resume();
            }
            r.on("data", n), e.on("drain", i), e._isStdio || t && !1 === t.end || (r.on("end", l), r.on("close", u));
            let s = !1;
            function l() {
              s || (s = !0, e.end());
            }
            function u() {
              s || (s = !0, "function" == typeof e.destroy && e.destroy());
            }
            function c(e) {
              d(), 0 === o.listenerCount(this, "error") && this.emit("error", e);
            }
            function d() {
              r.removeListener("data", n), e.removeListener("drain", i), r.removeListener("end", l), r.removeListener("close", u), r.removeListener("error", c), 
              e.removeListener("error", c), r.removeListener("end", d), r.removeListener("close", d), e.removeListener("close", d);
            }
            return a(r, "error", c), a(e, "error", c), r.on("end", d), r.on("close", d), e.on("close", d), e.emit("pipe", r), e;
          }, e.exports = {
            Stream: s,
            prependListener: a
          };
        },
        4382: (e, t, r) => {
          "use strict";
          const n = globalThis.AbortController || r(8599).AbortController, {codes: {ERR_INVALID_ARG_VALUE: i, ERR_INVALID_ARG_TYPE: o, ERR_MISSING_ARGS: s, ERR_OUT_OF_RANGE: a}, AbortError: l} = r(4381), {validateAbortSignal: u, validateInteger: c, validateObject: d} = r(6547), f = r(9061).Symbol("kWeak"), {finished: h} = r(8610), p = r(299), {addAbortSignalNoValidate: y} = r(196), {isWritable: g, isNodeStream: b} = r(5874), {ArrayPrototypePush: m, MathFloor: w, Number: v, NumberIsNaN: _, Promise: E, PromiseReject: S, PromisePrototypeThen: R, Symbol: A} = r(9061), I = A("kEmpty"), T = A("kEof");
          function O(e, t) {
            if ("function" != typeof e) throw new o("fn", [ "Function", "AsyncFunction" ], e);
            null != t && d(t, "options"), null != (null == t ? void 0 : t.signal) && u(t.signal, "options.signal");
            let r = 1;
            return null != (null == t ? void 0 : t.concurrency) && (r = w(t.concurrency)), c(r, "concurrency", 1), async function*() {
              var i, o;
              const s = new n, a = this, u = [], c = s.signal, d = {
                signal: c
              }, f = () => s.abort();
              let h, p;
              null != t && null !== (i = t.signal) && void 0 !== i && i.aborted && f(), null == t || null === (o = t.signal) || void 0 === o || o.addEventListener("abort", f);
              let y = !1;
              function g() {
                y = !0;
              }
              !async function() {
                try {
                  for await (let t of a) {
                    var n;
                    if (y) return;
                    if (c.aborted) throw new l;
                    try {
                      t = e(t, d);
                    } catch (e) {
                      t = S(e);
                    }
                    t !== I && ("function" == typeof (null === (n = t) || void 0 === n ? void 0 : n.catch) && t.catch(g), u.push(t), h && (h(), 
                    h = null), !y && u.length && u.length >= r && await new E((e => {
                      p = e;
                    })));
                  }
                  u.push(T);
                } catch (e) {
                  const r = S(e);
                  R(r, void 0, g), u.push(r);
                } finally {
                  var i;
                  y = !0, h && (h(), h = null), null == t || null === (i = t.signal) || void 0 === i || i.removeEventListener("abort", f);
                }
              }();
              try {
                for (;;) {
                  for (;u.length > 0; ) {
                    const e = await u[0];
                    if (e === T) return;
                    if (c.aborted) throw new l;
                    e !== I && (yield e), u.shift(), p && (p(), p = null);
                  }
                  await new E((e => {
                    h = e;
                  }));
                }
              } finally {
                s.abort(), y = !0, p && (p(), p = null);
              }
            }.call(this);
          }
          async function C(e, t) {
            for await (const r of N.call(this, e, t)) return !0;
            return !1;
          }
          function N(e, t) {
            if ("function" != typeof e) throw new o("fn", [ "Function", "AsyncFunction" ], e);
            return O.call(this, (async function(t, r) {
              return await e(t, r) ? t : I;
            }), t);
          }
          class P extends s {
            constructor() {
              super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
            }
          }
          function L(e) {
            if (e = v(e), _(e)) return 0;
            if (e < 0) throw new a("number", ">= 0", e);
            return e;
          }
          e.exports.streamReturningOperators = {
            asIndexedPairs: function(e) {
              return null != e && d(e, "options"), null != (null == e ? void 0 : e.signal) && u(e.signal, "options.signal"), async function*() {
                let t = 0;
                for await (const n of this) {
                  var r;
                  if (null != e && null !== (r = e.signal) && void 0 !== r && r.aborted) throw new l({
                    cause: e.signal.reason
                  });
                  yield [ t++, n ];
                }
              }.call(this);
            },
            drop: function(e, t) {
              return null != t && d(t, "options"), null != (null == t ? void 0 : t.signal) && u(t.signal, "options.signal"), e = L(e), 
              async function*() {
                var r;
                if (null != t && null !== (r = t.signal) && void 0 !== r && r.aborted) throw new l;
                for await (const i of this) {
                  var n;
                  if (null != t && null !== (n = t.signal) && void 0 !== n && n.aborted) throw new l;
                  e-- <= 0 && (yield i);
                }
              }.call(this);
            },
            filter: N,
            flatMap: function(e, t) {
              const r = O.call(this, e, t);
              return async function*() {
                for await (const e of r) yield* e;
              }.call(this);
            },
            map: O,
            take: function(e, t) {
              return null != t && d(t, "options"), null != (null == t ? void 0 : t.signal) && u(t.signal, "options.signal"), e = L(e), 
              async function*() {
                var r;
                if (null != t && null !== (r = t.signal) && void 0 !== r && r.aborted) throw new l;
                for await (const i of this) {
                  var n;
                  if (null != t && null !== (n = t.signal) && void 0 !== n && n.aborted) throw new l;
                  if (!(e-- > 0)) return;
                  yield i;
                }
              }.call(this);
            },
            compose: function(e, t) {
              if (null != t && d(t, "options"), null != (null == t ? void 0 : t.signal) && u(t.signal, "options.signal"), b(e) && !g(e)) throw new i("stream", e, "must be writable");
              const r = p(this, e);
              return null != t && t.signal && y(t.signal, r), r;
            }
          }, e.exports.promiseReturningOperators = {
            every: async function(e, t) {
              if ("function" != typeof e) throw new o("fn", [ "Function", "AsyncFunction" ], e);
              return !await C.call(this, (async (...t) => !await e(...t)), t);
            },
            forEach: async function(e, t) {
              if ("function" != typeof e) throw new o("fn", [ "Function", "AsyncFunction" ], e);
              for await (const r of O.call(this, (async function(t, r) {
                return await e(t, r), I;
              }), t)) ;
            },
            reduce: async function(e, t, r) {
              var i;
              if ("function" != typeof e) throw new o("reducer", [ "Function", "AsyncFunction" ], e);
              null != r && d(r, "options"), null != (null == r ? void 0 : r.signal) && u(r.signal, "options.signal");
              let s = arguments.length > 1;
              if (null != r && null !== (i = r.signal) && void 0 !== i && i.aborted) {
                const e = new l(void 0, {
                  cause: r.signal.reason
                });
                throw this.once("error", (() => {})), await h(this.destroy(e)), e;
              }
              const a = new n, c = a.signal;
              if (null != r && r.signal) {
                const e = {
                  once: !0,
                  [f]: this
                };
                r.signal.addEventListener("abort", (() => a.abort()), e);
              }
              let p = !1;
              try {
                for await (const n of this) {
                  var y;
                  if (p = !0, null != r && null !== (y = r.signal) && void 0 !== y && y.aborted) throw new l;
                  s ? t = await e(t, n, {
                    signal: c
                  }) : (t = n, s = !0);
                }
                if (!p && !s) throw new P;
              } finally {
                a.abort();
              }
              return t;
            },
            toArray: async function(e) {
              null != e && d(e, "options"), null != (null == e ? void 0 : e.signal) && u(e.signal, "options.signal");
              const t = [];
              for await (const n of this) {
                var r;
                if (null != e && null !== (r = e.signal) && void 0 !== r && r.aborted) throw new l(void 0, {
                  cause: e.signal.reason
                });
                m(t, n);
              }
              return t;
            },
            some: C,
            find: async function(e, t) {
              for await (const r of N.call(this, e, t)) return r;
            }
          };
        },
        917: (e, t, r) => {
          "use strict";
          const {ObjectSetPrototypeOf: n} = r(9061);
          e.exports = o;
          const i = r(1161);
          function o(e) {
            if (!(this instanceof o)) return new o(e);
            i.call(this, e);
          }
          n(o.prototype, i.prototype), n(o, i), o.prototype._transform = function(e, t, r) {
            r(null, e);
          };
        },
        9946: (e, t, r) => {
          const n = r(4155), {ArrayIsArray: i, Promise: o, SymbolAsyncIterator: s} = r(9061), a = r(8610), {once: l} = r(6087), u = r(1195), c = r(8672), {aggregateTwoErrors: d, codes: {ERR_INVALID_ARG_TYPE: f, ERR_INVALID_RETURN_VALUE: h, ERR_MISSING_ARGS: p, ERR_STREAM_DESTROYED: y, ERR_STREAM_PREMATURE_CLOSE: g}, AbortError: b} = r(4381), {validateFunction: m, validateAbortSignal: w} = r(6547), {isIterable: v, isReadable: _, isReadableNodeStream: E, isNodeStream: S, isTransformStream: R, isWebStream: A, isReadableStream: I, isReadableEnded: T} = r(5874), O = globalThis.AbortController || r(8599).AbortController;
          let C, N;
          function P(e, t, r) {
            let n = !1;
            return e.on("close", (() => {
              n = !0;
            })), {
              destroy: t => {
                n || (n = !0, u.destroyer(e, t || new y("pipe")));
              },
              cleanup: a(e, {
                readable: t,
                writable: r
              }, (e => {
                n = !e;
              }))
            };
          }
          function L(e) {
            if (v(e)) return e;
            if (E(e)) return async function*(e) {
              N || (N = r(911)), yield* N.prototype[s].call(e);
            }(e);
            throw new f("val", [ "Readable", "Iterable", "AsyncIterable" ], e);
          }
          async function x(e, t, r, {end: n}) {
            let i, s = null;
            const l = e => {
              if (e && (i = e), s) {
                const e = s;
                s = null, e();
              }
            }, u = () => new o(((e, t) => {
              i ? t(i) : s = () => {
                i ? t(i) : e();
              };
            }));
            t.on("drain", l);
            const c = a(t, {
              readable: !1
            }, l);
            try {
              t.writableNeedDrain && await u();
              for await (const r of e) t.write(r) || await u();
              n && t.end(), await u(), r();
            } catch (e) {
              r(i !== e ? d(i, e) : e);
            } finally {
              c(), t.off("drain", l);
            }
          }
          async function M(e, t, r, {end: n}) {
            R(t) && (t = t.writable);
            const i = t.getWriter();
            try {
              for await (const t of e) await i.ready, i.write(t).catch((() => {}));
              await i.ready, n && await i.close(), r();
            } catch (e) {
              try {
                await i.abort(e), r(e);
              } catch (e) {
                r(e);
              }
            }
          }
          function D(e, t, o) {
            if (1 === e.length && i(e[0]) && (e = e[0]), e.length < 2) throw new p("streams");
            const s = new O, a = s.signal, l = null == o ? void 0 : o.signal, u = [];
            function d() {
              k(new b);
            }
            let y, g;
            w(l, "options.signal"), null == l || l.addEventListener("abort", d);
            const m = [];
            let T, N = 0;
            function D(e) {
              k(e, 0 == --N);
            }
            function k(e, r) {
              if (!e || y && "ERR_STREAM_PREMATURE_CLOSE" !== y.code || (y = e), y || r) {
                for (;m.length; ) m.shift()(y);
                null == l || l.removeEventListener("abort", d), s.abort(), r && (y || u.forEach((e => e())), n.nextTick(t, y, g));
              }
            }
            for (let F = 0; F < e.length; F++) {
              const W = e[F], V = F < e.length - 1, H = F > 0, G = V || !1 !== (null == o ? void 0 : o.end), J = F === e.length - 1;
              if (S(W)) {
                if (G) {
                  const {destroy: K, cleanup: z} = P(W, V, H);
                  m.push(K), _(W) && J && u.push(z);
                }
                function $(e) {
                  e && "AbortError" !== e.name && "ERR_STREAM_PREMATURE_CLOSE" !== e.code && D(e);
                }
                W.on("error", $), _(W) && J && u.push((() => {
                  W.removeListener("error", $);
                }));
              }
              if (0 === F) if ("function" == typeof W) {
                if (T = W({
                  signal: a
                }), !v(T)) throw new h("Iterable, AsyncIterable or Stream", "source", T);
              } else T = v(W) || E(W) || R(W) ? W : c.from(W); else if ("function" == typeof W) {
                var U;
                if (T = R(T) ? L(null === (U = T) || void 0 === U ? void 0 : U.readable) : L(T), T = W(T, {
                  signal: a
                }), V) {
                  if (!v(T, !0)) throw new h("AsyncIterable", `transform[${F - 1}]`, T);
                } else {
                  var B;
                  C || (C = r(917));
                  const q = new C({
                    objectMode: !0
                  }), X = null === (B = T) || void 0 === B ? void 0 : B.then;
                  if ("function" == typeof X) N++, X.call(T, (e => {
                    g = e, null != e && q.write(e), G && q.end(), n.nextTick(D);
                  }), (e => {
                    q.destroy(e), n.nextTick(D, e);
                  })); else if (v(T, !0)) N++, x(T, q, D, {
                    end: G
                  }); else {
                    if (!I(T) && !R(T)) throw new h("AsyncIterable or Promise", "destination", T);
                    {
                      const Q = T.readable || T;
                      N++, x(Q, q, D, {
                        end: G
                      });
                    }
                  }
                  T = q;
                  const {destroy: Y, cleanup: Z} = P(T, !1, !0);
                  m.push(Y), J && u.push(Z);
                }
              } else if (S(W)) {
                if (E(T)) {
                  N += 2;
                  const ee = j(T, W, D, {
                    end: G
                  });
                  _(W) && J && u.push(ee);
                } else if (R(T) || I(T)) {
                  const te = T.readable || T;
                  N++, x(te, W, D, {
                    end: G
                  });
                } else {
                  if (!v(T)) throw new f("val", [ "Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream" ], T);
                  N++, x(T, W, D, {
                    end: G
                  });
                }
                T = W;
              } else if (A(W)) {
                if (E(T)) N++, M(L(T), W, D, {
                  end: G
                }); else if (I(T) || v(T)) N++, M(T, W, D, {
                  end: G
                }); else {
                  if (!R(T)) throw new f("val", [ "Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream" ], T);
                  N++, M(T.readable, W, D, {
                    end: G
                  });
                }
                T = W;
              } else T = c.from(W);
            }
            return (null != a && a.aborted || null != l && l.aborted) && n.nextTick(d), T;
          }
          function j(e, t, r, {end: i}) {
            let o = !1;
            if (t.on("close", (() => {
              o || r(new g);
            })), e.pipe(t, {
              end: !1
            }), i) {
              function s() {
                o = !0, t.end();
              }
              T(e) ? n.nextTick(s) : e.once("end", s);
            } else r();
            return a(e, {
              readable: !0,
              writable: !1
            }, (t => {
              const n = e._readableState;
              t && "ERR_STREAM_PREMATURE_CLOSE" === t.code && n && n.ended && !n.errored && !n.errorEmitted ? e.once("end", r).once("error", r) : r(t);
            })), a(t, {
              readable: !1,
              writable: !0
            }, r);
          }
          e.exports = {
            pipelineImpl: D,
            pipeline: function(...e) {
              return D(e, l(function(e) {
                return m(e[e.length - 1], "streams[stream.length - 1]"), e.pop();
              }(e)));
            }
          };
        },
        911: (e, t, r) => {
          const n = r(4155), {ArrayPrototypeIndexOf: i, NumberIsInteger: o, NumberIsNaN: s, NumberParseInt: a, ObjectDefineProperties: l, ObjectKeys: u, ObjectSetPrototypeOf: c, Promise: d, SafeSet: f, SymbolAsyncIterator: h, Symbol: p} = r(9061);
          e.exports = U, U.ReadableState = $;
          const {EventEmitter: y} = r(7187), {Stream: g, prependListener: b} = r(4870), {Buffer: m} = r(8764), {addAbortSignal: w} = r(196), v = r(8610);
          let _ = r(6087).debuglog("stream", (e => {
            _ = e;
          }));
          const E = r(7327), S = r(1195), {getHighWaterMark: R, getDefaultHighWaterMark: A} = r(2457), {aggregateTwoErrors: I, codes: {ERR_INVALID_ARG_TYPE: T, ERR_METHOD_NOT_IMPLEMENTED: O, ERR_OUT_OF_RANGE: C, ERR_STREAM_PUSH_AFTER_EOF: N, ERR_STREAM_UNSHIFT_AFTER_END_EVENT: P}} = r(4381), {validateObject: L} = r(6547), x = p("kPaused"), {StringDecoder: M} = r(2553), D = r(6307);
          c(U.prototype, g.prototype), c(U, g);
          const j = () => {}, {errorOrDestroy: k} = S;
          function $(e, t, n) {
            "boolean" != typeof n && (n = t instanceof r(8672)), this.objectMode = !(!e || !e.objectMode), n && (this.objectMode = this.objectMode || !(!e || !e.readableObjectMode)), 
            this.highWaterMark = e ? R(this, e, "readableHighWaterMark", n) : A(!1), this.buffer = new E, this.length = 0, this.pipes = [], 
            this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.constructed = !0, this.sync = !0, this.needReadable = !1, 
            this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this[x] = null, this.errorEmitted = !1, 
            this.emitClose = !e || !1 !== e.emitClose, this.autoDestroy = !e || !1 !== e.autoDestroy, this.destroyed = !1, this.errored = null, 
            this.closed = !1, this.closeEmitted = !1, this.defaultEncoding = e && e.defaultEncoding || "utf8", this.awaitDrainWriters = null, 
            this.multiAwaitDrain = !1, this.readingMore = !1, this.dataEmitted = !1, this.decoder = null, this.encoding = null, e && e.encoding && (this.decoder = new M(e.encoding), 
            this.encoding = e.encoding);
          }
          function U(e) {
            if (!(this instanceof U)) return new U(e);
            const t = this instanceof r(8672);
            this._readableState = new $(e, this, t), e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy), 
            "function" == typeof e.construct && (this._construct = e.construct), e.signal && !t && w(e.signal, this)), g.call(this, e), 
            S.construct(this, (() => {
              this._readableState.needReadable && G(this, this._readableState);
            }));
          }
          function B(e, t, r, n) {
            _("readableAddChunk", t);
            const i = e._readableState;
            let o;
            if (i.objectMode || ("string" == typeof t ? (r = r || i.defaultEncoding, i.encoding !== r && (n && i.encoding ? t = m.from(t, r).toString(i.encoding) : (t = m.from(t, r), 
            r = ""))) : t instanceof m ? r = "" : g._isUint8Array(t) ? (t = g._uint8ArrayToBuffer(t), r = "") : null != t && (o = new T("chunk", [ "string", "Buffer", "Uint8Array" ], t))), 
            o) k(e, o); else if (null === t) i.reading = !1, function(e, t) {
              if (_("onEofChunk"), !t.ended) {
                if (t.decoder) {
                  const e = t.decoder.end();
                  e && e.length && (t.buffer.push(e), t.length += t.objectMode ? 1 : e.length);
                }
                t.ended = !0, t.sync ? V(e) : (t.needReadable = !1, t.emittedReadable = !0, H(e));
              }
            }(e, i); else if (i.objectMode || t && t.length > 0) if (n) if (i.endEmitted) k(e, new P); else {
              if (i.destroyed || i.errored) return !1;
              F(e, i, t, !0);
            } else if (i.ended) k(e, new N); else {
              if (i.destroyed || i.errored) return !1;
              i.reading = !1, i.decoder && !r ? (t = i.decoder.write(t), i.objectMode || 0 !== t.length ? F(e, i, t, !1) : G(e, i)) : F(e, i, t, !1);
            } else n || (i.reading = !1, G(e, i));
            return !i.ended && (i.length < i.highWaterMark || 0 === i.length);
          }
          function F(e, t, r, n) {
            t.flowing && 0 === t.length && !t.sync && e.listenerCount("data") > 0 ? (t.multiAwaitDrain ? t.awaitDrainWriters.clear() : t.awaitDrainWriters = null, 
            t.dataEmitted = !0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), 
            t.needReadable && V(e)), G(e, t);
          }
          function W(e, t) {
            return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : s(e) ? t.flowing && t.length ? t.buffer.first().length : t.length : e <= t.length ? e : t.ended ? t.length : 0;
          }
          function V(e) {
            const t = e._readableState;
            _("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (_("emitReadable", t.flowing), 
            t.emittedReadable = !0, n.nextTick(H, e));
          }
          function H(e) {
            const t = e._readableState;
            _("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || t.errored || !t.length && !t.ended || (e.emit("readable"), 
            t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, X(e);
          }
          function G(e, t) {
            !t.readingMore && t.constructed && (t.readingMore = !0, n.nextTick(J, e, t));
          }
          function J(e, t) {
            for (;!t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length); ) {
              const r = t.length;
              if (_("maybeReadMore read 0"), e.read(0), r === t.length) break;
            }
            t.readingMore = !1;
          }
          function K(e) {
            const t = e._readableState;
            t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !1 === t[x] ? t.flowing = !0 : e.listenerCount("data") > 0 ? e.resume() : t.readableListening || (t.flowing = null);
          }
          function z(e) {
            _("readable nexttick read 0"), e.read(0);
          }
          function q(e, t) {
            _("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), X(e), t.flowing && !t.reading && e.read(0);
          }
          function X(e) {
            const t = e._readableState;
            for (_("flow", t.flowing); t.flowing && null !== e.read(); ) ;
          }
          function Y(e, t) {
            "function" != typeof e.read && (e = U.wrap(e, {
              objectMode: !0
            }));
            const r = async function*(e, t) {
              let r, n = j;
              function i(t) {
                this === e ? (n(), n = j) : n = t;
              }
              e.on("readable", i);
              const o = v(e, {
                writable: !1
              }, (e => {
                r = e ? I(r, e) : null, n(), n = j;
              }));
              try {
                for (;;) {
                  const t = e.destroyed ? null : e.read();
                  if (null !== t) yield t; else {
                    if (r) throw r;
                    if (null === r) return;
                    await new d(i);
                  }
                }
              } catch (e) {
                throw r = I(r, e), r;
              } finally {
                !r && !1 === (null == t ? void 0 : t.destroyOnReturn) || void 0 !== r && !e._readableState.autoDestroy ? (e.off("readable", i), 
                o()) : S.destroyer(e, null);
              }
            }(e, t);
            return r.stream = e, r;
          }
          function Z(e, t) {
            if (0 === t.length) return null;
            let r;
            return t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), 
            t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r;
          }
          function Q(e) {
            const t = e._readableState;
            _("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, n.nextTick(ee, t, e));
          }
          function ee(e, t) {
            if (_("endReadableNT", e.endEmitted, e.length), !e.errored && !e.closeEmitted && !e.endEmitted && 0 === e.length) if (e.endEmitted = !0, 
            t.emit("end"), t.writable && !1 === t.allowHalfOpen) n.nextTick(te, t); else if (e.autoDestroy) {
              const e = t._writableState;
              (!e || e.autoDestroy && (e.finished || !1 === e.writable)) && t.destroy();
            }
          }
          function te(e) {
            e.writable && !e.writableEnded && !e.destroyed && e.end();
          }
          let re;
          function ne() {
            return void 0 === re && (re = {}), re;
          }
          U.prototype.destroy = S.destroy, U.prototype._undestroy = S.undestroy, U.prototype._destroy = function(e, t) {
            t(e);
          }, U.prototype[y.captureRejectionSymbol] = function(e) {
            this.destroy(e);
          }, U.prototype.push = function(e, t) {
            return B(this, e, t, !1);
          }, U.prototype.unshift = function(e, t) {
            return B(this, e, t, !0);
          }, U.prototype.isPaused = function() {
            const e = this._readableState;
            return !0 === e[x] || !1 === e.flowing;
          }, U.prototype.setEncoding = function(e) {
            const t = new M(e);
            this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
            const r = this._readableState.buffer;
            let n = "";
            for (const i of r) n += t.write(i);
            return r.clear(), "" !== n && r.push(n), this._readableState.length = n.length, this;
          }, U.prototype.read = function(e) {
            _("read", e), void 0 === e ? e = NaN : o(e) || (e = a(e, 10));
            const t = this._readableState, r = e;
            if (e > t.highWaterMark && (t.highWaterMark = function(e) {
              if (e > 1073741824) throw new C("size", "<= 1GiB", e);
              return e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, ++e;
            }(e)), 0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return _("read: emitReadable", t.length, t.ended), 
            0 === t.length && t.ended ? Q(this) : V(this), null;
            if (0 === (e = W(e, t)) && t.ended) return 0 === t.length && Q(this), null;
            let n, i = t.needReadable;
            if (_("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && (i = !0, _("length less than watermark", i)), 
            t.ended || t.reading || t.destroyed || t.errored || !t.constructed) i = !1, _("reading, ended or constructing", i); else if (i) {
              _("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0);
              try {
                this._read(t.highWaterMark);
              } catch (e) {
                k(this, e);
              }
              t.sync = !1, t.reading || (e = W(r, t));
            }
            return n = e > 0 ? Z(e, t) : null, null === n ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, 
            t.multiAwaitDrain ? t.awaitDrainWriters.clear() : t.awaitDrainWriters = null), 0 === t.length && (t.ended || (t.needReadable = !0), 
            r !== e && t.ended && Q(this)), null === n || t.errorEmitted || t.closeEmitted || (t.dataEmitted = !0, this.emit("data", n)), 
            n;
          }, U.prototype._read = function(e) {
            throw new O("_read()");
          }, U.prototype.pipe = function(e, t) {
            const r = this, i = this._readableState;
            1 === i.pipes.length && (i.multiAwaitDrain || (i.multiAwaitDrain = !0, i.awaitDrainWriters = new f(i.awaitDrainWriters ? [ i.awaitDrainWriters ] : []))), 
            i.pipes.push(e), _("pipe count=%d opts=%j", i.pipes.length, t);
            const o = t && !1 === t.end || e === n.stdout || e === n.stderr ? y : s;
            function s() {
              _("onend"), e.end();
            }
            let a;
            i.endEmitted ? n.nextTick(o) : r.once("end", o), e.on("unpipe", (function t(n, o) {
              _("onunpipe"), n === r && o && !1 === o.hasUnpiped && (o.hasUnpiped = !0, _("cleanup"), e.removeListener("close", h), e.removeListener("finish", p), 
              a && e.removeListener("drain", a), e.removeListener("error", d), e.removeListener("unpipe", t), r.removeListener("end", s), 
              r.removeListener("end", y), r.removeListener("data", c), l = !0, a && i.awaitDrainWriters && (!e._writableState || e._writableState.needDrain) && a());
            }));
            let l = !1;
            function u() {
              l || (1 === i.pipes.length && i.pipes[0] === e ? (_("false write response, pause", 0), i.awaitDrainWriters = e, i.multiAwaitDrain = !1) : i.pipes.length > 1 && i.pipes.includes(e) && (_("false write response, pause", i.awaitDrainWriters.size), 
              i.awaitDrainWriters.add(e)), r.pause()), a || (a = function(e, t) {
                return function() {
                  const r = e._readableState;
                  r.awaitDrainWriters === t ? (_("pipeOnDrain", 1), r.awaitDrainWriters = null) : r.multiAwaitDrain && (_("pipeOnDrain", r.awaitDrainWriters.size), 
                  r.awaitDrainWriters.delete(t)), r.awaitDrainWriters && 0 !== r.awaitDrainWriters.size || !e.listenerCount("data") || e.resume();
                };
              }(r, e), e.on("drain", a));
            }
            function c(t) {
              _("ondata");
              const r = e.write(t);
              _("dest.write", r), !1 === r && u();
            }
            function d(t) {
              if (_("onerror", t), y(), e.removeListener("error", d), 0 === e.listenerCount("error")) {
                const r = e._writableState || e._readableState;
                r && !r.errorEmitted ? k(e, t) : e.emit("error", t);
              }
            }
            function h() {
              e.removeListener("finish", p), y();
            }
            function p() {
              _("onfinish"), e.removeListener("close", h), y();
            }
            function y() {
              _("unpipe"), r.unpipe(e);
            }
            return r.on("data", c), b(e, "error", d), e.once("close", h), e.once("finish", p), e.emit("pipe", r), !0 === e.writableNeedDrain ? i.flowing && u() : i.flowing || (_("pipe resume"), 
            r.resume()), e;
          }, U.prototype.unpipe = function(e) {
            const t = this._readableState;
            if (0 === t.pipes.length) return this;
            if (!e) {
              const e = t.pipes;
              t.pipes = [], this.pause();
              for (let t = 0; t < e.length; t++) e[t].emit("unpipe", this, {
                hasUnpiped: !1
              });
              return this;
            }
            const r = i(t.pipes, e);
            return -1 === r || (t.pipes.splice(r, 1), 0 === t.pipes.length && this.pause(), e.emit("unpipe", this, {
              hasUnpiped: !1
            })), this;
          }, U.prototype.on = function(e, t) {
            const r = g.prototype.on.call(this, e, t), i = this._readableState;
            return "data" === e ? (i.readableListening = this.listenerCount("readable") > 0, !1 !== i.flowing && this.resume()) : "readable" === e && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, 
            i.flowing = !1, i.emittedReadable = !1, _("on readable", i.length, i.reading), i.length ? V(this) : i.reading || n.nextTick(z, this))), 
            r;
          }, U.prototype.addListener = U.prototype.on, U.prototype.removeListener = function(e, t) {
            const r = g.prototype.removeListener.call(this, e, t);
            return "readable" === e && n.nextTick(K, this), r;
          }, U.prototype.off = U.prototype.removeListener, U.prototype.removeAllListeners = function(e) {
            const t = g.prototype.removeAllListeners.apply(this, arguments);
            return "readable" !== e && void 0 !== e || n.nextTick(K, this), t;
          }, U.prototype.resume = function() {
            const e = this._readableState;
            return e.flowing || (_("resume"), e.flowing = !e.readableListening, function(e, t) {
              t.resumeScheduled || (t.resumeScheduled = !0, n.nextTick(q, e, t));
            }(this, e)), e[x] = !1, this;
          }, U.prototype.pause = function() {
            return _("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (_("pause"), this._readableState.flowing = !1, 
            this.emit("pause")), this._readableState[x] = !0, this;
          }, U.prototype.wrap = function(e) {
            let t = !1;
            e.on("data", (r => {
              !this.push(r) && e.pause && (t = !0, e.pause());
            })), e.on("end", (() => {
              this.push(null);
            })), e.on("error", (e => {
              k(this, e);
            })), e.on("close", (() => {
              this.destroy();
            })), e.on("destroy", (() => {
              this.destroy();
            })), this._read = () => {
              t && e.resume && (t = !1, e.resume());
            };
            const r = u(e);
            for (let n = 1; n < r.length; n++) {
              const t = r[n];
              void 0 === this[t] && "function" == typeof e[t] && (this[t] = e[t].bind(e));
            }
            return this;
          }, U.prototype[h] = function() {
            return Y(this);
          }, U.prototype.iterator = function(e) {
            return void 0 !== e && L(e, "options"), Y(this, e);
          }, l(U.prototype, {
            readable: {
              __proto__: null,
              get() {
                const e = this._readableState;
                return !(!e || !1 === e.readable || e.destroyed || e.errorEmitted || e.endEmitted);
              },
              set(e) {
                this._readableState && (this._readableState.readable = !!e);
              }
            },
            readableDidRead: {
              __proto__: null,
              enumerable: !1,
              get: function() {
                return this._readableState.dataEmitted;
              }
            },
            readableAborted: {
              __proto__: null,
              enumerable: !1,
              get: function() {
                return !(!1 === this._readableState.readable || !this._readableState.destroyed && !this._readableState.errored || this._readableState.endEmitted);
              }
            },
            readableHighWaterMark: {
              __proto__: null,
              enumerable: !1,
              get: function() {
                return this._readableState.highWaterMark;
              }
            },
            readableBuffer: {
              __proto__: null,
              enumerable: !1,
              get: function() {
                return this._readableState && this._readableState.buffer;
              }
            },
            readableFlowing: {
              __proto__: null,
              enumerable: !1,
              get: function() {
                return this._readableState.flowing;
              },
              set: function(e) {
                this._readableState && (this._readableState.flowing = e);
              }
            },
            readableLength: {
              __proto__: null,
              enumerable: !1,
              get() {
                return this._readableState.length;
              }
            },
            readableObjectMode: {
              __proto__: null,
              enumerable: !1,
              get() {
                return !!this._readableState && this._readableState.objectMode;
              }
            },
            readableEncoding: {
              __proto__: null,
              enumerable: !1,
              get() {
                return this._readableState ? this._readableState.encoding : null;
              }
            },
            errored: {
              __proto__: null,
              enumerable: !1,
              get() {
                return this._readableState ? this._readableState.errored : null;
              }
            },
            closed: {
              __proto__: null,
              get() {
                return !!this._readableState && this._readableState.closed;
              }
            },
            destroyed: {
              __proto__: null,
              enumerable: !1,
              get() {
                return !!this._readableState && this._readableState.destroyed;
              },
              set(e) {
                this._readableState && (this._readableState.destroyed = e);
              }
            },
            readableEnded: {
              __proto__: null,
              enumerable: !1,
              get() {
                return !!this._readableState && this._readableState.endEmitted;
              }
            }
          }), l($.prototype, {
            pipesCount: {
              __proto__: null,
              get() {
                return this.pipes.length;
              }
            },
            paused: {
              __proto__: null,
              get() {
                return !1 !== this[x];
              },
              set(e) {
                this[x] = !!e;
              }
            }
          }), U._fromList = Z, U.from = function(e, t) {
            return D(U, e, t);
          }, U.fromWeb = function(e, t) {
            return ne().newStreamReadableFromReadableStream(e, t);
          }, U.toWeb = function(e, t) {
            return ne().newReadableStreamFromStreamReadable(e, t);
          }, U.wrap = function(e, t) {
            var r, n;
            return new U({
              objectMode: null === (r = null !== (n = e.readableObjectMode) && void 0 !== n ? n : e.objectMode) || void 0 === r || r,
              ...t,
              destroy(t, r) {
                S.destroyer(e, t), r(t);
              }
            }).wrap(e);
          };
        },
        2457: (e, t, r) => {
          "use strict";
          const {MathFloor: n, NumberIsInteger: i} = r(9061), {ERR_INVALID_ARG_VALUE: o} = r(4381).codes;
          function s(e) {
            return e ? 16 : 16384;
          }
          e.exports = {
            getHighWaterMark: function(e, t, r, a) {
              const l = function(e, t, r) {
                return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null;
              }(t, a, r);
              if (null != l) {
                if (!i(l) || l < 0) throw new o(a ? `options.${r}` : "options.highWaterMark", l);
                return n(l);
              }
              return s(e.objectMode);
            },
            getDefaultHighWaterMark: s
          };
        },
        1161: (e, t, r) => {
          "use strict";
          const {ObjectSetPrototypeOf: n, Symbol: i} = r(9061);
          e.exports = u;
          const {ERR_METHOD_NOT_IMPLEMENTED: o} = r(4381).codes, s = r(8672), {getHighWaterMark: a} = r(2457);
          n(u.prototype, s.prototype), n(u, s);
          const l = i("kCallback");
          function u(e) {
            if (!(this instanceof u)) return new u(e);
            const t = e ? a(this, e, "readableHighWaterMark", !0) : null;
            0 === t && (e = {
              ...e,
              highWaterMark: null,
              readableHighWaterMark: t,
              writableHighWaterMark: e.writableHighWaterMark || 0
            }), s.call(this, e), this._readableState.sync = !1, this[l] = null, e && ("function" == typeof e.transform && (this._transform = e.transform), 
            "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", d);
          }
          function c(e) {
            "function" != typeof this._flush || this.destroyed ? (this.push(null), e && e()) : this._flush(((t, r) => {
              t ? e ? e(t) : this.destroy(t) : (null != r && this.push(r), this.push(null), e && e());
            }));
          }
          function d() {
            this._final !== c && c.call(this);
          }
          u.prototype._final = c, u.prototype._transform = function(e, t, r) {
            throw new o("_transform()");
          }, u.prototype._write = function(e, t, r) {
            const n = this._readableState, i = this._writableState, o = n.length;
            this._transform(e, t, ((e, t) => {
              e ? r(e) : (null != t && this.push(t), i.ended || o === n.length || n.length < n.highWaterMark ? r() : this[l] = r);
            }));
          }, u.prototype._read = function() {
            if (this[l]) {
              const e = this[l];
              this[l] = null, e();
            }
          };
        },
        5874: (e, t, r) => {
          "use strict";
          const {Symbol: n, SymbolAsyncIterator: i, SymbolIterator: o, SymbolFor: s} = r(9061), a = n("kDestroyed"), l = n("kIsErrored"), u = n("kIsReadable"), c = n("kIsDisturbed"), d = s("nodejs.webstream.isClosedPromise"), f = s("nodejs.webstream.controllerErrorFunction");
          function h(e, t = !1) {
            var r;
            return !(!e || "function" != typeof e.pipe || "function" != typeof e.on || t && ("function" != typeof e.pause || "function" != typeof e.resume) || e._writableState && !1 === (null === (r = e._readableState) || void 0 === r ? void 0 : r.readable) || e._writableState && !e._readableState);
          }
          function p(e) {
            var t;
            return !(!e || "function" != typeof e.write || "function" != typeof e.on || e._readableState && !1 === (null === (t = e._writableState) || void 0 === t ? void 0 : t.writable));
          }
          function y(e) {
            return e && (e._readableState || e._writableState || "function" == typeof e.write && "function" == typeof e.on || "function" == typeof e.pipe && "function" == typeof e.on);
          }
          function g(e) {
            return !(!e || y(e) || "function" != typeof e.pipeThrough || "function" != typeof e.getReader || "function" != typeof e.cancel);
          }
          function b(e) {
            return !(!e || y(e) || "function" != typeof e.getWriter || "function" != typeof e.abort);
          }
          function m(e) {
            return !(!e || y(e) || "object" != typeof e.readable || "object" != typeof e.writable);
          }
          function w(e) {
            if (!y(e)) return null;
            const t = e._writableState, r = e._readableState, n = t || r;
            return !!(e.destroyed || e[a] || null != n && n.destroyed);
          }
          function v(e) {
            if (!p(e)) return null;
            if (!0 === e.writableEnded) return !0;
            const t = e._writableState;
            return (null == t || !t.errored) && ("boolean" != typeof (null == t ? void 0 : t.ended) ? null : t.ended);
          }
          function _(e, t) {
            if (!h(e)) return null;
            const r = e._readableState;
            return (null == r || !r.errored) && ("boolean" != typeof (null == r ? void 0 : r.endEmitted) ? null : !!(r.endEmitted || !1 === t && !0 === r.ended && 0 === r.length));
          }
          function E(e) {
            return e && null != e[u] ? e[u] : "boolean" != typeof (null == e ? void 0 : e.readable) ? null : !w(e) && h(e) && e.readable && !_(e);
          }
          function S(e) {
            return "boolean" != typeof (null == e ? void 0 : e.writable) ? null : !w(e) && p(e) && e.writable && !v(e);
          }
          function R(e) {
            return "boolean" == typeof e._closed && "boolean" == typeof e._defaultKeepAlive && "boolean" == typeof e._removedConnection && "boolean" == typeof e._removedContLen;
          }
          function A(e) {
            return "boolean" == typeof e._sent100 && R(e);
          }
          e.exports = {
            kDestroyed: a,
            isDisturbed: function(e) {
              var t;
              return !(!e || !(null !== (t = e[c]) && void 0 !== t ? t : e.readableDidRead || e.readableAborted));
            },
            kIsDisturbed: c,
            isErrored: function(e) {
              var t, r, n, i, o, s, a, u, c, d;
              return !(!e || !(null !== (t = null !== (r = null !== (n = null !== (i = null !== (o = null !== (s = e[l]) && void 0 !== s ? s : e.readableErrored) && void 0 !== o ? o : e.writableErrored) && void 0 !== i ? i : null === (a = e._readableState) || void 0 === a ? void 0 : a.errorEmitted) && void 0 !== n ? n : null === (u = e._writableState) || void 0 === u ? void 0 : u.errorEmitted) && void 0 !== r ? r : null === (c = e._readableState) || void 0 === c ? void 0 : c.errored) && void 0 !== t ? t : null === (d = e._writableState) || void 0 === d ? void 0 : d.errored));
            },
            kIsErrored: l,
            isReadable: E,
            kIsReadable: u,
            kIsClosedPromise: d,
            kControllerErrorFunction: f,
            isClosed: function(e) {
              if (!y(e)) return null;
              if ("boolean" == typeof e.closed) return e.closed;
              const t = e._writableState, r = e._readableState;
              return "boolean" == typeof (null == t ? void 0 : t.closed) || "boolean" == typeof (null == r ? void 0 : r.closed) ? (null == t ? void 0 : t.closed) || (null == r ? void 0 : r.closed) : "boolean" == typeof e._closed && R(e) ? e._closed : null;
            },
            isDestroyed: w,
            isDuplexNodeStream: function(e) {
              return !(!e || "function" != typeof e.pipe || !e._readableState || "function" != typeof e.on || "function" != typeof e.write);
            },
            isFinished: function(e, t) {
              return y(e) ? !(!w(e) && (!1 !== (null == t ? void 0 : t.readable) && E(e) || !1 !== (null == t ? void 0 : t.writable) && S(e))) : null;
            },
            isIterable: function(e, t) {
              return null != e && (!0 === t ? "function" == typeof e[i] : !1 === t ? "function" == typeof e[o] : "function" == typeof e[i] || "function" == typeof e[o]);
            },
            isReadableNodeStream: h,
            isReadableStream: g,
            isReadableEnded: function(e) {
              if (!h(e)) return null;
              if (!0 === e.readableEnded) return !0;
              const t = e._readableState;
              return !(!t || t.errored) && ("boolean" != typeof (null == t ? void 0 : t.ended) ? null : t.ended);
            },
            isReadableFinished: _,
            isReadableErrored: function(e) {
              var t, r;
              return y(e) ? e.readableErrored ? e.readableErrored : null !== (t = null === (r = e._readableState) || void 0 === r ? void 0 : r.errored) && void 0 !== t ? t : null : null;
            },
            isNodeStream: y,
            isWebStream: function(e) {
              return g(e) || b(e) || m(e);
            },
            isWritable: S,
            isWritableNodeStream: p,
            isWritableStream: b,
            isWritableEnded: v,
            isWritableFinished: function(e, t) {
              if (!p(e)) return null;
              if (!0 === e.writableFinished) return !0;
              const r = e._writableState;
              return (null == r || !r.errored) && ("boolean" != typeof (null == r ? void 0 : r.finished) ? null : !!(r.finished || !1 === t && !0 === r.ended && 0 === r.length));
            },
            isWritableErrored: function(e) {
              var t, r;
              return y(e) ? e.writableErrored ? e.writableErrored : null !== (t = null === (r = e._writableState) || void 0 === r ? void 0 : r.errored) && void 0 !== t ? t : null : null;
            },
            isServerRequest: function(e) {
              var t;
              return "boolean" == typeof e._consuming && "boolean" == typeof e._dumped && void 0 === (null === (t = e.req) || void 0 === t ? void 0 : t.upgradeOrConnect);
            },
            isServerResponse: A,
            willEmitClose: function(e) {
              if (!y(e)) return null;
              const t = e._writableState, r = e._readableState, n = t || r;
              return !n && A(e) || !!(n && n.autoDestroy && n.emitClose && !1 === n.closed);
            },
            isTransformStream: m
          };
        },
        6304: (e, t, r) => {
          const n = r(4155), {ArrayPrototypeSlice: i, Error: o, FunctionPrototypeSymbolHasInstance: s, ObjectDefineProperty: a, ObjectDefineProperties: l, ObjectSetPrototypeOf: u, StringPrototypeToLowerCase: c, Symbol: d, SymbolHasInstance: f} = r(9061);
          e.exports = M, M.WritableState = L;
          const {EventEmitter: h} = r(7187), p = r(4870).Stream, {Buffer: y} = r(8764), g = r(1195), {addAbortSignal: b} = r(196), {getHighWaterMark: m, getDefaultHighWaterMark: w} = r(2457), {ERR_INVALID_ARG_TYPE: v, ERR_METHOD_NOT_IMPLEMENTED: _, ERR_MULTIPLE_CALLBACK: E, ERR_STREAM_CANNOT_PIPE: S, ERR_STREAM_DESTROYED: R, ERR_STREAM_ALREADY_FINISHED: A, ERR_STREAM_NULL_VALUES: I, ERR_STREAM_WRITE_AFTER_END: T, ERR_UNKNOWN_ENCODING: O} = r(4381).codes, {errorOrDestroy: C} = g;
          function N() {}
          u(M.prototype, p.prototype), u(M, p);
          const P = d("kOnFinished");
          function L(e, t, n) {
            "boolean" != typeof n && (n = t instanceof r(8672)), this.objectMode = !(!e || !e.objectMode), n && (this.objectMode = this.objectMode || !(!e || !e.writableObjectMode)), 
            this.highWaterMark = e ? m(this, e, "writableHighWaterMark", n) : w(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, 
            this.ended = !1, this.finished = !1, this.destroyed = !1;
            const i = !(!e || !1 !== e.decodeStrings);
            this.decodeStrings = !i, this.defaultEncoding = e && e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, 
            this.sync = !0, this.bufferProcessing = !1, this.onwrite = $.bind(void 0, t), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, 
            x(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !e || !1 !== e.emitClose, 
            this.autoDestroy = !e || !1 !== e.autoDestroy, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[P] = [];
          }
          function x(e) {
            e.buffered = [], e.bufferedIndex = 0, e.allBuffers = !0, e.allNoop = !0;
          }
          function M(e) {
            const t = this instanceof r(8672);
            if (!t && !s(M, this)) return new M(e);
            this._writableState = new L(e, this, t), e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), 
            "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final), 
            "function" == typeof e.construct && (this._construct = e.construct), e.signal && b(e.signal, this)), p.call(this, e), g.construct(this, (() => {
              const e = this._writableState;
              e.writing || W(this, e), H(this, e);
            }));
          }
          function D(e, t, r, i) {
            const o = e._writableState;
            if ("function" == typeof r) i = r, r = o.defaultEncoding; else {
              if (r) {
                if ("buffer" !== r && !y.isEncoding(r)) throw new O(r);
              } else r = o.defaultEncoding;
              "function" != typeof i && (i = N);
            }
            if (null === t) throw new I;
            if (!o.objectMode) if ("string" == typeof t) !1 !== o.decodeStrings && (t = y.from(t, r), r = "buffer"); else if (t instanceof y) r = "buffer"; else {
              if (!p._isUint8Array(t)) throw new v("chunk", [ "string", "Buffer", "Uint8Array" ], t);
              t = p._uint8ArrayToBuffer(t), r = "buffer";
            }
            let s;
            return o.ending ? s = new T : o.destroyed && (s = new R("write")), s ? (n.nextTick(i, s), C(e, s, !0), s) : (o.pendingcb++, 
            function(e, t, r, n, i) {
              const o = t.objectMode ? 1 : r.length;
              t.length += o;
              const s = t.length < t.highWaterMark;
              return s || (t.needDrain = !0), t.writing || t.corked || t.errored || !t.constructed ? (t.buffered.push({
                chunk: r,
                encoding: n,
                callback: i
              }), t.allBuffers && "buffer" !== n && (t.allBuffers = !1), t.allNoop && i !== N && (t.allNoop = !1)) : (t.writelen = o, 
              t.writecb = i, t.writing = !0, t.sync = !0, e._write(r, n, t.onwrite), t.sync = !1), s && !t.errored && !t.destroyed;
            }(e, o, t, r, i));
          }
          function j(e, t, r, n, i, o, s) {
            t.writelen = n, t.writecb = s, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new R("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), 
            t.sync = !1;
          }
          function k(e, t, r, n) {
            --t.pendingcb, n(r), F(t), C(e, r);
          }
          function $(e, t) {
            const r = e._writableState, i = r.sync, o = r.writecb;
            "function" == typeof o ? (r.writing = !1, r.writecb = null, r.length -= r.writelen, r.writelen = 0, t ? (t.stack, r.errored || (r.errored = t), 
            e._readableState && !e._readableState.errored && (e._readableState.errored = t), i ? n.nextTick(k, e, r, t, o) : k(e, r, t, o)) : (r.buffered.length > r.bufferedIndex && W(e, r), 
            i ? null !== r.afterWriteTickInfo && r.afterWriteTickInfo.cb === o ? r.afterWriteTickInfo.count++ : (r.afterWriteTickInfo = {
              count: 1,
              cb: o,
              stream: e,
              state: r
            }, n.nextTick(U, r.afterWriteTickInfo)) : B(e, r, 1, o))) : C(e, new E);
          }
          function U({stream: e, state: t, count: r, cb: n}) {
            return t.afterWriteTickInfo = null, B(e, t, r, n);
          }
          function B(e, t, r, n) {
            for (!t.ending && !e.destroyed && 0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain")); r-- > 0; ) t.pendingcb--, 
            n();
            t.destroyed && F(t), H(e, t);
          }
          function F(e) {
            if (e.writing) return;
            for (let i = e.bufferedIndex; i < e.buffered.length; ++i) {
              var t;
              const {chunk: r, callback: n} = e.buffered[i], o = e.objectMode ? 1 : r.length;
              e.length -= o, n(null !== (t = e.errored) && void 0 !== t ? t : new R("write"));
            }
            const r = e[P].splice(0);
            for (let i = 0; i < r.length; i++) {
              var n;
              r[i](null !== (n = e.errored) && void 0 !== n ? n : new R("end"));
            }
            x(e);
          }
          function W(e, t) {
            if (t.corked || t.bufferProcessing || t.destroyed || !t.constructed) return;
            const {buffered: r, bufferedIndex: n, objectMode: o} = t, s = r.length - n;
            if (!s) return;
            let a = n;
            if (t.bufferProcessing = !0, s > 1 && e._writev) {
              t.pendingcb -= s - 1;
              const n = t.allNoop ? N : e => {
                for (let t = a; t < r.length; ++t) r[t].callback(e);
              }, o = t.allNoop && 0 === a ? r : i(r, a);
              o.allBuffers = t.allBuffers, j(e, t, !0, t.length, o, "", n), x(t);
            } else {
              do {
                const {chunk: n, encoding: i, callback: s} = r[a];
                r[a++] = null, j(e, t, !1, o ? 1 : n.length, n, i, s);
              } while (a < r.length && !t.writing);
              a === r.length ? x(t) : a > 256 ? (r.splice(0, a), t.bufferedIndex = 0) : t.bufferedIndex = a;
            }
            t.bufferProcessing = !1;
          }
          function V(e) {
            return e.ending && !e.destroyed && e.constructed && 0 === e.length && !e.errored && 0 === e.buffered.length && !e.finished && !e.writing && !e.errorEmitted && !e.closeEmitted;
          }
          function H(e, t, r) {
            V(t) && (function(e, t) {
              t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.finalCalled = !0, 
              function(e, t) {
                let r = !1;
                function i(i) {
                  if (r) C(e, null != i ? i : E()); else if (r = !0, t.pendingcb--, i) {
                    const r = t[P].splice(0);
                    for (let e = 0; e < r.length; e++) r[e](i);
                    C(e, i, t.sync);
                  } else V(t) && (t.prefinished = !0, e.emit("prefinish"), t.pendingcb++, n.nextTick(G, e, t));
                }
                t.sync = !0, t.pendingcb++;
                try {
                  e._final(i);
                } catch (e) {
                  i(e);
                }
                t.sync = !1;
              }(e, t)));
            }(e, t), 0 === t.pendingcb && (r ? (t.pendingcb++, n.nextTick(((e, t) => {
              V(t) ? G(e, t) : t.pendingcb--;
            }), e, t)) : V(t) && (t.pendingcb++, G(e, t))));
          }
          function G(e, t) {
            t.pendingcb--, t.finished = !0;
            const r = t[P].splice(0);
            for (let n = 0; n < r.length; n++) r[n]();
            if (e.emit("finish"), t.autoDestroy) {
              const t = e._readableState;
              (!t || t.autoDestroy && (t.endEmitted || !1 === t.readable)) && e.destroy();
            }
          }
          L.prototype.getBuffer = function() {
            return i(this.buffered, this.bufferedIndex);
          }, a(L.prototype, "bufferedRequestCount", {
            __proto__: null,
            get() {
              return this.buffered.length - this.bufferedIndex;
            }
          }), a(M, f, {
            __proto__: null,
            value: function(e) {
              return !!s(this, e) || this === M && e && e._writableState instanceof L;
            }
          }), M.prototype.pipe = function() {
            C(this, new S);
          }, M.prototype.write = function(e, t, r) {
            return !0 === D(this, e, t, r);
          }, M.prototype.cork = function() {
            this._writableState.corked++;
          }, M.prototype.uncork = function() {
            const e = this._writableState;
            e.corked && (e.corked--, e.writing || W(this, e));
          }, M.prototype.setDefaultEncoding = function(e) {
            if ("string" == typeof e && (e = c(e)), !y.isEncoding(e)) throw new O(e);
            return this._writableState.defaultEncoding = e, this;
          }, M.prototype._write = function(e, t, r) {
            if (!this._writev) throw new _("_write()");
            this._writev([ {
              chunk: e,
              encoding: t
            } ], r);
          }, M.prototype._writev = null, M.prototype.end = function(e, t, r) {
            const i = this._writableState;
            let s;
            if ("function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e) {
              const r = D(this, e, t);
              r instanceof o && (s = r);
            }
            return i.corked && (i.corked = 1, this.uncork()), s || (i.errored || i.ending ? i.finished ? s = new A("end") : i.destroyed && (s = new R("end")) : (i.ending = !0, 
            H(this, i, !0), i.ended = !0)), "function" == typeof r && (s || i.finished ? n.nextTick(r, s) : i[P].push(r)), this;
          }, l(M.prototype, {
            closed: {
              __proto__: null,
              get() {
                return !!this._writableState && this._writableState.closed;
              }
            },
            destroyed: {
              __proto__: null,
              get() {
                return !!this._writableState && this._writableState.destroyed;
              },
              set(e) {
                this._writableState && (this._writableState.destroyed = e);
              }
            },
            writable: {
              __proto__: null,
              get() {
                const e = this._writableState;
                return !(!e || !1 === e.writable || e.destroyed || e.errored || e.ending || e.ended);
              },
              set(e) {
                this._writableState && (this._writableState.writable = !!e);
              }
            },
            writableFinished: {
              __proto__: null,
              get() {
                return !!this._writableState && this._writableState.finished;
              }
            },
            writableObjectMode: {
              __proto__: null,
              get() {
                return !!this._writableState && this._writableState.objectMode;
              }
            },
            writableBuffer: {
              __proto__: null,
              get() {
                return this._writableState && this._writableState.getBuffer();
              }
            },
            writableEnded: {
              __proto__: null,
              get() {
                return !!this._writableState && this._writableState.ending;
              }
            },
            writableNeedDrain: {
              __proto__: null,
              get() {
                const e = this._writableState;
                return !!e && !e.destroyed && !e.ending && e.needDrain;
              }
            },
            writableHighWaterMark: {
              __proto__: null,
              get() {
                return this._writableState && this._writableState.highWaterMark;
              }
            },
            writableCorked: {
              __proto__: null,
              get() {
                return this._writableState ? this._writableState.corked : 0;
              }
            },
            writableLength: {
              __proto__: null,
              get() {
                return this._writableState && this._writableState.length;
              }
            },
            errored: {
              __proto__: null,
              enumerable: !1,
              get() {
                return this._writableState ? this._writableState.errored : null;
              }
            },
            writableAborted: {
              __proto__: null,
              enumerable: !1,
              get: function() {
                return !(!1 === this._writableState.writable || !this._writableState.destroyed && !this._writableState.errored || this._writableState.finished);
              }
            }
          });
          const J = g.destroy;
          let K;
          function z() {
            return void 0 === K && (K = {}), K;
          }
          M.prototype.destroy = function(e, t) {
            const r = this._writableState;
            return !r.destroyed && (r.bufferedIndex < r.buffered.length || r[P].length) && n.nextTick(F, r), J.call(this, e, t), this;
          }, M.prototype._undestroy = g.undestroy, M.prototype._destroy = function(e, t) {
            t(e);
          }, M.prototype[h.captureRejectionSymbol] = function(e) {
            this.destroy(e);
          }, M.fromWeb = function(e, t) {
            return z().newStreamWritableFromWritableStream(e, t);
          }, M.toWeb = function(e) {
            return z().newWritableStreamFromStreamWritable(e);
          };
        },
        6547: (e, t, r) => {
          "use strict";
          const {ArrayIsArray: n, ArrayPrototypeIncludes: i, ArrayPrototypeJoin: o, ArrayPrototypeMap: s, NumberIsInteger: a, NumberIsNaN: l, NumberMAX_SAFE_INTEGER: u, NumberMIN_SAFE_INTEGER: c, NumberParseInt: d, ObjectPrototypeHasOwnProperty: f, RegExpPrototypeExec: h, String: p, StringPrototypeToUpperCase: y, StringPrototypeTrim: g} = r(9061), {hideStackFrames: b, codes: {ERR_SOCKET_BAD_PORT: m, ERR_INVALID_ARG_TYPE: w, ERR_INVALID_ARG_VALUE: v, ERR_OUT_OF_RANGE: _, ERR_UNKNOWN_SIGNAL: E}} = r(4381), {normalizeEncoding: S} = r(6087), {isAsyncFunction: R, isArrayBufferView: A} = r(6087).types, I = {}, T = /^[0-7]+$/, O = b(((e, t, r = c, n = u) => {
            if ("number" != typeof e) throw new w(t, "number", e);
            if (!a(e)) throw new _(t, "an integer", e);
            if (e < r || e > n) throw new _(t, `>= ${r} && <= ${n}`, e);
          })), C = b(((e, t, r = -2147483648, n = 2147483647) => {
            if ("number" != typeof e) throw new w(t, "number", e);
            if (!a(e)) throw new _(t, "an integer", e);
            if (e < r || e > n) throw new _(t, `>= ${r} && <= ${n}`, e);
          })), N = b(((e, t, r = !1) => {
            if ("number" != typeof e) throw new w(t, "number", e);
            if (!a(e)) throw new _(t, "an integer", e);
            const n = r ? 1 : 0, i = 4294967295;
            if (e < n || e > i) throw new _(t, `>= ${n} && <= ${i}`, e);
          }));
          function P(e, t) {
            if ("string" != typeof e) throw new w(t, "string", e);
          }
          const L = b(((e, t, r) => {
            if (!i(r, e)) {
              const n = o(s(r, (e => "string" == typeof e ? `'${e}'` : p(e))), ", ");
              throw new v(t, e, "must be one of: " + n);
            }
          }));
          function x(e, t) {
            if ("boolean" != typeof e) throw new w(t, "boolean", e);
          }
          function M(e, t, r) {
            return null != e && f(e, t) ? e[t] : r;
          }
          const D = b(((e, t, r = null) => {
            const i = M(r, "allowArray", !1), o = M(r, "allowFunction", !1);
            if (!M(r, "nullable", !1) && null === e || !i && n(e) || "object" != typeof e && (!o || "function" != typeof e)) throw new w(t, "Object", e);
          })), j = b(((e, t) => {
            if (null != e && "object" != typeof e && "function" != typeof e) throw new w(t, "a dictionary", e);
          })), k = b(((e, t, r = 0) => {
            if (!n(e)) throw new w(t, "Array", e);
            if (e.length < r) throw new v(t, e, `must be longer than ${r}`);
          })), $ = b(((e, t = "buffer") => {
            if (!A(e)) throw new w(t, [ "Buffer", "TypedArray", "DataView" ], e);
          })), U = b(((e, t) => {
            if (void 0 !== e && (null === e || "object" != typeof e || !("aborted" in e))) throw new w(t, "AbortSignal", e);
          })), B = b(((e, t) => {
            if ("function" != typeof e) throw new w(t, "Function", e);
          })), F = b(((e, t) => {
            if ("function" != typeof e || R(e)) throw new w(t, "Function", e);
          })), W = b(((e, t) => {
            if (void 0 !== e) throw new w(t, "undefined", e);
          })), V = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
          function H(e, t) {
            if (void 0 === e || !h(V, e)) throw new v(t, e, 'must be an array or string of format "</styles.css>; rel=preload; as=style"');
          }
          e.exports = {
            isInt32: function(e) {
              return e === (0 | e);
            },
            isUint32: function(e) {
              return e === e >>> 0;
            },
            parseFileMode: function(e, t, r) {
              if (void 0 === e && (e = r), "string" == typeof e) {
                if (null === h(T, e)) throw new v(t, e, "must be a 32-bit unsigned integer or an octal string");
                e = d(e, 8);
              }
              return N(e, t), e;
            },
            validateArray: k,
            validateStringArray: function(e, t) {
              k(e, t);
              for (let r = 0; r < e.length; r++) P(e[r], `${t}[${r}]`);
            },
            validateBooleanArray: function(e, t) {
              k(e, t);
              for (let r = 0; r < e.length; r++) x(e[r], `${t}[${r}]`);
            },
            validateBoolean: x,
            validateBuffer: $,
            validateDictionary: j,
            validateEncoding: function(e, t) {
              const r = S(t), n = e.length;
              if ("hex" === r && n % 2 != 0) throw new v("encoding", t, `is invalid for data of length ${n}`);
            },
            validateFunction: B,
            validateInt32: C,
            validateInteger: O,
            validateNumber: function(e, t, r, n) {
              if ("number" != typeof e) throw new w(t, "number", e);
              if (null != r && e < r || null != n && e > n || (null != r || null != n) && l(e)) throw new _(t, `${null != r ? `>= ${r}` : ""}${null != r && null != n ? " && " : ""}${null != n ? `<= ${n}` : ""}`, e);
            },
            validateObject: D,
            validateOneOf: L,
            validatePlainFunction: F,
            validatePort: function(e, t = "Port", r = !0) {
              if ("number" != typeof e && "string" != typeof e || "string" == typeof e && 0 === g(e).length || +e != +e >>> 0 || e > 65535 || 0 === e && !r) throw new m(t, e, r);
              return 0 | e;
            },
            validateSignalName: function(e, t = "signal") {
              if (P(e, t), void 0 === I[e]) {
                if (void 0 !== I[y(e)]) throw new E(e + " (signals must use all capital letters)");
                throw new E(e);
              }
            },
            validateString: P,
            validateUint32: N,
            validateUndefined: W,
            validateUnion: function(e, t, r) {
              if (!i(r, e)) throw new w(t, `('${o(r, "|")}')`, e);
            },
            validateAbortSignal: U,
            validateLinkHeaderValue: function(e) {
              if ("string" == typeof e) return H(e, "hints"), e;
              if (n(e)) {
                const t = e.length;
                let r = "";
                if (0 === t) return r;
                for (let n = 0; n < t; n++) {
                  const i = e[n];
                  H(i, "hints"), r += i, n !== t - 1 && (r += ", ");
                }
                return r;
              }
              throw new v("hints", e, 'must be an array or string of format "</styles.css>; rel=preload; as=style"');
            }
          };
        },
        9827: (e, t, r) => {
          "use strict";
          const n = r(5099), i = r(7854), o = n.Readable.destroy;
          e.exports = n.Readable, e.exports._uint8ArrayToBuffer = n._uint8ArrayToBuffer, e.exports._isUint8Array = n._isUint8Array, 
          e.exports.isDisturbed = n.isDisturbed, e.exports.isErrored = n.isErrored, e.exports.isReadable = n.isReadable, e.exports.Readable = n.Readable, 
          e.exports.Writable = n.Writable, e.exports.Duplex = n.Duplex, e.exports.Transform = n.Transform, e.exports.PassThrough = n.PassThrough, 
          e.exports.addAbortSignal = n.addAbortSignal, e.exports.finished = n.finished, e.exports.destroy = n.destroy, e.exports.destroy = o, 
          e.exports.pipeline = n.pipeline, e.exports.compose = n.compose, Object.defineProperty(n, "promises", {
            configurable: !0,
            enumerable: !0,
            get: () => i
          }), e.exports.Stream = n.Stream, e.exports.default = e.exports;
        },
        4381: (e, t, r) => {
          "use strict";
          const {format: n, inspect: i, AggregateError: o} = r(6087), s = globalThis.AggregateError || o, a = Symbol("kIsNodeError"), l = [ "string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol" ], u = /^([A-Z][a-z0-9]*)+$/, c = {};
          function d(e, t) {
            if (!e) throw new c.ERR_INTERNAL_ASSERTION(t);
          }
          function f(e) {
            let t = "", r = e.length;
            const n = "-" === e[0] ? 1 : 0;
            for (;r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
            return `${e.slice(0, r)}${t}`;
          }
          function h(e, t, r) {
            r || (r = Error);
            class i extends r {
              constructor(...r) {
                super(function(e, t, r) {
                  if ("function" == typeof t) return d(t.length <= r.length, `Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${t.length}).`), 
                  t(...r);
                  const i = (t.match(/%[dfijoOs]/g) || []).length;
                  return d(i === r.length, `Code: ${e}; The provided arguments length (${r.length}) does not match the required ones (${i}).`), 
                  0 === r.length ? t : n(t, ...r);
                }(e, t, r));
              }
              toString() {
                return `${this.name} [${e}]: ${this.message}`;
              }
            }
            Object.defineProperties(i.prototype, {
              name: {
                value: r.name,
                writable: !0,
                enumerable: !1,
                configurable: !0
              },
              toString: {
                value() {
                  return `${this.name} [${e}]: ${this.message}`;
                },
                writable: !0,
                enumerable: !1,
                configurable: !0
              }
            }), i.prototype.code = e, i.prototype[a] = !0, c[e] = i;
          }
          function p(e) {
            const t = "__node_internal_" + e.name;
            return Object.defineProperty(e, "name", {
              value: t
            }), e;
          }
          class y extends Error {
            constructor(e = "The operation was aborted", t) {
              if (void 0 !== t && "object" != typeof t) throw new c.ERR_INVALID_ARG_TYPE("options", "Object", t);
              super(e, t), this.code = "ABORT_ERR", this.name = "AbortError";
            }
          }
          h("ERR_ASSERTION", "%s", Error), h("ERR_INVALID_ARG_TYPE", ((e, t, r) => {
            d("string" == typeof e, "'name' must be a string"), Array.isArray(t) || (t = [ t ]);
            let n = "The ";
            e.endsWith(" argument") ? n += `${e} ` : n += `"${e}" ${e.includes(".") ? "property" : "argument"} `, n += "must be ";
            const o = [], s = [], a = [];
            for (const i of t) d("string" == typeof i, "All expected entries have to be of type string"), l.includes(i) ? o.push(i.toLowerCase()) : u.test(i) ? s.push(i) : (d("object" !== i, 'The value "object" should be written as "Object"'), 
            a.push(i));
            if (s.length > 0) {
              const e = o.indexOf("object");
              -1 !== e && (o.splice(o, e, 1), s.push("Object"));
            }
            if (o.length > 0) {
              switch (o.length) {
               case 1:
                n += `of type ${o[0]}`;
                break;

               case 2:
                n += `one of type ${o[0]} or ${o[1]}`;
                break;

               default:
                {
                  const e = o.pop();
                  n += `one of type ${o.join(", ")}, or ${e}`;
                }
              }
              (s.length > 0 || a.length > 0) && (n += " or ");
            }
            if (s.length > 0) {
              switch (s.length) {
               case 1:
                n += `an instance of ${s[0]}`;
                break;

               case 2:
                n += `an instance of ${s[0]} or ${s[1]}`;
                break;

               default:
                {
                  const e = s.pop();
                  n += `an instance of ${s.join(", ")}, or ${e}`;
                }
              }
              a.length > 0 && (n += " or ");
            }
            switch (a.length) {
             case 0:
              break;

             case 1:
              a[0].toLowerCase() !== a[0] && (n += "an "), n += `${a[0]}`;
              break;

             case 2:
              n += `one of ${a[0]} or ${a[1]}`;
              break;

             default:
              {
                const e = a.pop();
                n += `one of ${a.join(", ")}, or ${e}`;
              }
            }
            if (null == r) n += `. Received ${r}`; else if ("function" == typeof r && r.name) n += `. Received function ${r.name}`; else if ("object" == typeof r) {
              var c;
              null !== (c = r.constructor) && void 0 !== c && c.name ? n += `. Received an instance of ${r.constructor.name}` : n += `. Received ${i(r, {
                depth: -1
              })}`;
            } else {
              let e = i(r, {
                colors: !1
              });
              e.length > 25 && (e = `${e.slice(0, 25)}...`), n += `. Received type ${typeof r} (${e})`;
            }
            return n;
          }), TypeError), h("ERR_INVALID_ARG_VALUE", ((e, t, r = "is invalid") => {
            let n = i(t);
            return n.length > 128 && (n = n.slice(0, 128) + "..."), `The ${e.includes(".") ? "property" : "argument"} '${e}' ${r}. Received ${n}`;
          }), TypeError), h("ERR_INVALID_RETURN_VALUE", ((e, t, r) => {
            var n;
            return `Expected ${e} to be returned from the "${t}" function but got ${null != r && null !== (n = r.constructor) && void 0 !== n && n.name ? `instance of ${r.constructor.name}` : "type " + typeof r}.`;
          }), TypeError), h("ERR_MISSING_ARGS", ((...e) => {
            let t;
            d(e.length > 0, "At least one arg needs to be specified");
            const r = e.length;
            switch (e = (Array.isArray(e) ? e : [ e ]).map((e => `"${e}"`)).join(" or "), r) {
             case 1:
              t += `The ${e[0]} argument`;
              break;

             case 2:
              t += `The ${e[0]} and ${e[1]} arguments`;
              break;

             default:
              {
                const r = e.pop();
                t += `The ${e.join(", ")}, and ${r} arguments`;
              }
            }
            return `${t} must be specified`;
          }), TypeError), h("ERR_OUT_OF_RANGE", ((e, t, r) => {
            let n;
            return d(t, 'Missing "range" argument'), Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? n = f(String(r)) : "bigint" == typeof r ? (n = String(r), 
            (r > 2n ** 32n || r < -(2n ** 32n)) && (n = f(n)), n += "n") : n = i(r), `The value of "${e}" is out of range. It must be ${t}. Received ${n}`;
          }), RangeError), h("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error), h("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error), 
          h("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error), h("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error), 
          h("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error), h("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), 
          h("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error), h("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error), 
          h("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error), h("ERR_STREAM_WRITE_AFTER_END", "write after end", Error), 
          h("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError), e.exports = {
            AbortError: y,
            aggregateTwoErrors: p((function(e, t) {
              if (e && t && e !== t) {
                if (Array.isArray(t.errors)) return t.errors.push(e), t;
                const r = new s([ t, e ], t.message);
                return r.code = t.code, r;
              }
              return e || t;
            })),
            hideStackFrames: p,
            codes: c
          };
        },
        9061: e => {
          "use strict";
          e.exports = {
            ArrayIsArray: e => Array.isArray(e),
            ArrayPrototypeIncludes: (e, t) => e.includes(t),
            ArrayPrototypeIndexOf: (e, t) => e.indexOf(t),
            ArrayPrototypeJoin: (e, t) => e.join(t),
            ArrayPrototypeMap: (e, t) => e.map(t),
            ArrayPrototypePop: (e, t) => e.pop(t),
            ArrayPrototypePush: (e, t) => e.push(t),
            ArrayPrototypeSlice: (e, t, r) => e.slice(t, r),
            Error: Error,
            FunctionPrototypeCall: (e, t, ...r) => e.call(t, ...r),
            FunctionPrototypeSymbolHasInstance: (e, t) => Function.prototype[Symbol.hasInstance].call(e, t),
            MathFloor: Math.floor,
            Number: Number,
            NumberIsInteger: Number.isInteger,
            NumberIsNaN: Number.isNaN,
            NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
            NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
            NumberParseInt: Number.parseInt,
            ObjectDefineProperties: (e, t) => Object.defineProperties(e, t),
            ObjectDefineProperty: (e, t, r) => Object.defineProperty(e, t, r),
            ObjectGetOwnPropertyDescriptor: (e, t) => Object.getOwnPropertyDescriptor(e, t),
            ObjectKeys: e => Object.keys(e),
            ObjectSetPrototypeOf: (e, t) => Object.setPrototypeOf(e, t),
            Promise: Promise,
            PromisePrototypeCatch: (e, t) => e.catch(t),
            PromisePrototypeThen: (e, t, r) => e.then(t, r),
            PromiseReject: e => Promise.reject(e),
            ReflectApply: Reflect.apply,
            RegExpPrototypeTest: (e, t) => e.test(t),
            SafeSet: Set,
            String: String,
            StringPrototypeSlice: (e, t, r) => e.slice(t, r),
            StringPrototypeToLowerCase: e => e.toLowerCase(),
            StringPrototypeToUpperCase: e => e.toUpperCase(),
            StringPrototypeTrim: e => e.trim(),
            Symbol: Symbol,
            SymbolFor: Symbol.for,
            SymbolAsyncIterator: Symbol.asyncIterator,
            SymbolHasInstance: Symbol.hasInstance,
            SymbolIterator: Symbol.iterator,
            TypedArrayPrototypeSet: (e, t, r) => e.set(t, r),
            Uint8Array: Uint8Array
          };
        },
        6087: (e, t, r) => {
          "use strict";
          const n = r(8764), i = Object.getPrototypeOf((async function() {})).constructor, o = globalThis.Blob || n.Blob, s = void 0 !== o ? function(e) {
            return e instanceof o;
          } : function(e) {
            return !1;
          };
          class a extends Error {
            constructor(e) {
              if (!Array.isArray(e)) throw new TypeError("Expected input to be an Array, got " + typeof e);
              let t = "";
              for (let r = 0; r < e.length; r++) t += `    ${e[r].stack}\n`;
              super(t), this.name = "AggregateError", this.errors = e;
            }
          }
          e.exports = {
            AggregateError: a,
            kEmptyObject: Object.freeze({}),
            once(e) {
              let t = !1;
              return function(...r) {
                t || (t = !0, e.apply(this, r));
              };
            },
            createDeferredPromise: function() {
              let e, t;
              return {
                promise: new Promise(((r, n) => {
                  e = r, t = n;
                })),
                resolve: e,
                reject: t
              };
            },
            promisify: e => new Promise(((t, r) => {
              e(((e, ...n) => e ? r(e) : t(...n)));
            })),
            debuglog: () => function() {},
            format: (e, ...t) => e.replace(/%([sdifj])/g, (function(...[e, r]) {
              const n = t.shift();
              return "f" === r ? n.toFixed(6) : "j" === r ? JSON.stringify(n) : "s" === r && "object" == typeof n ? `${n.constructor !== Object ? n.constructor.name : ""} {}`.trim() : n.toString();
            })),
            inspect(e) {
              switch (typeof e) {
               case "string":
                if (e.includes("'")) {
                  if (!e.includes('"')) return `"${e}"`;
                  if (!e.includes("`") && !e.includes("${")) return `\`${e}\``;
                }
                return `'${e}'`;

               case "number":
                return isNaN(e) ? "NaN" : Object.is(e, -0) ? String(e) : e;

               case "bigint":
                return `${String(e)}n`;

               case "boolean":
               case "undefined":
                return String(e);

               case "object":
                return "{}";
              }
            },
            types: {
              isAsyncFunction: e => e instanceof i,
              isArrayBufferView: e => ArrayBuffer.isView(e)
            },
            isBlob: s
          }, e.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
        },
        5099: (e, t, r) => {
          const {Buffer: n} = r(8764), {ObjectDefineProperty: i, ObjectKeys: o, ReflectApply: s} = r(9061), {promisify: {custom: a}} = r(6087), {streamReturningOperators: l, promiseReturningOperators: u} = r(4382), {codes: {ERR_ILLEGAL_CONSTRUCTOR: c}} = r(4381), d = r(299), {pipeline: f} = r(9946), {destroyer: h} = r(1195), p = r(8610), y = r(7854), g = r(5874), b = e.exports = r(4870).Stream;
          b.isDisturbed = g.isDisturbed, b.isErrored = g.isErrored, b.isReadable = g.isReadable, b.Readable = r(911);
          for (const v of o(l)) {
            const _ = l[v];
            function m(...e) {
              if (new.target) throw c();
              return b.Readable.from(s(_, this, e));
            }
            i(m, "name", {
              __proto__: null,
              value: _.name
            }), i(m, "length", {
              __proto__: null,
              value: _.length
            }), i(b.Readable.prototype, v, {
              __proto__: null,
              value: m,
              enumerable: !1,
              configurable: !0,
              writable: !0
            });
          }
          for (const E of o(u)) {
            const S = u[E];
            function m(...e) {
              if (new.target) throw c();
              return s(S, this, e);
            }
            i(m, "name", {
              __proto__: null,
              value: S.name
            }), i(m, "length", {
              __proto__: null,
              value: S.length
            }), i(b.Readable.prototype, E, {
              __proto__: null,
              value: m,
              enumerable: !1,
              configurable: !0,
              writable: !0
            });
          }
          b.Writable = r(6304), b.Duplex = r(8672), b.Transform = r(1161), b.PassThrough = r(917), b.pipeline = f;
          const {addAbortSignal: w} = r(196);
          b.addAbortSignal = w, b.finished = p, b.destroy = h, b.compose = d, i(b, "promises", {
            __proto__: null,
            configurable: !0,
            enumerable: !0,
            get: () => y
          }), i(f, a, {
            __proto__: null,
            enumerable: !0,
            get: () => y.pipeline
          }), i(p, a, {
            __proto__: null,
            enumerable: !0,
            get: () => y.finished
          }), b.Stream = b, b._isUint8Array = function(e) {
            return e instanceof Uint8Array;
          }, b._uint8ArrayToBuffer = function(e) {
            return n.from(e.buffer, e.byteOffset, e.byteLength);
          };
        },
        7854: (e, t, r) => {
          "use strict";
          const {ArrayPrototypePop: n, Promise: i} = r(9061), {isIterable: o, isNodeStream: s, isWebStream: a} = r(5874), {pipelineImpl: l} = r(9946), {finished: u} = r(8610);
          r(5099), e.exports = {
            finished: u,
            pipeline: function(...e) {
              return new i(((t, r) => {
                let i, u;
                const c = e[e.length - 1];
                if (c && "object" == typeof c && !s(c) && !o(c) && !a(c)) {
                  const t = n(e);
                  i = t.signal, u = t.end;
                }
                l(e, ((e, n) => {
                  e ? r(e) : t(n);
                }), {
                  signal: i,
                  end: u
                });
              }));
            }
          };
        },
        9509: (e, t, r) => {
          var n = r(8764), i = n.Buffer;
          function o(e, t) {
            for (var r in e) t[r] = e[r];
          }
          function s(e, t, r) {
            return i(e, t, r);
          }
          i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = n : (o(n, t), t.Buffer = s), s.prototype = Object.create(i.prototype), 
          o(i, s), s.from = function(e, t, r) {
            if ("number" == typeof e) throw new TypeError("Argument must not be a number");
            return i(e, t, r);
          }, s.alloc = function(e, t, r) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            var n = i(e);
            return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n;
          }, s.allocUnsafe = function(e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return i(e);
          }, s.allocUnsafeSlow = function(e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return n.SlowBuffer(e);
          };
        },
        2553: (e, t, r) => {
          "use strict";
          var n = r(9509).Buffer, i = n.isEncoding || function(e) {
            switch ((e = "" + e) && e.toLowerCase()) {
             case "hex":
             case "utf8":
             case "utf-8":
             case "ascii":
             case "binary":
             case "base64":
             case "ucs2":
             case "ucs-2":
             case "utf16le":
             case "utf-16le":
             case "raw":
              return !0;

             default:
              return !1;
            }
          };
          function o(e) {
            var t;
            switch (this.encoding = function(e) {
              var t = function(e) {
                if (!e) return "utf8";
                for (var t; ;) switch (e) {
                 case "utf8":
                 case "utf-8":
                  return "utf8";

                 case "ucs2":
                 case "ucs-2":
                 case "utf16le":
                 case "utf-16le":
                  return "utf16le";

                 case "latin1":
                 case "binary":
                  return "latin1";

                 case "base64":
                 case "ascii":
                 case "hex":
                  return e;

                 default:
                  if (t) return;
                  e = ("" + e).toLowerCase(), t = !0;
                }
              }(e);
              if ("string" != typeof t && (n.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e);
              return t || e;
            }(e), this.encoding) {
             case "utf16le":
              this.text = l, this.end = u, t = 4;
              break;

             case "utf8":
              this.fillLast = a, t = 4;
              break;

             case "base64":
              this.text = c, this.end = d, t = 3;
              break;

             default:
              return this.write = f, void (this.end = h);
            }
            this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t);
          }
          function s(e) {
            return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2;
          }
          function a(e) {
            var t = this.lastTotal - this.lastNeed, r = function(e, t, r) {
              if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
              if (e.lastNeed > 1 && t.length > 1) {
                if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
                if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�";
              }
            }(this, e);
            return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), 
            void (this.lastNeed -= e.length));
          }
          function l(e, t) {
            if ((e.length - t) % 2 == 0) {
              var r = e.toString("utf16le", t);
              if (r) {
                var n = r.charCodeAt(r.length - 1);
                if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], 
                r.slice(0, -1);
              }
              return r;
            }
            return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1);
          }
          function u(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
              var r = this.lastTotal - this.lastNeed;
              return t + this.lastChar.toString("utf16le", 0, r);
            }
            return t;
          }
          function c(e, t) {
            var r = (e.length - t) % 3;
            return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], 
            this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r));
          }
          function d(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
          }
          function f(e) {
            return e.toString(this.encoding);
          }
          function h(e) {
            return e && e.length ? this.write(e) : "";
          }
          t.StringDecoder = o, o.prototype.write = function(e) {
            if (0 === e.length) return "";
            var t, r;
            if (this.lastNeed) {
              if (void 0 === (t = this.fillLast(e))) return "";
              r = this.lastNeed, this.lastNeed = 0;
            } else r = 0;
            return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || "";
          }, o.prototype.end = function(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + "�" : t;
          }, o.prototype.text = function(e, t) {
            var r = function(e, t, r) {
              var n = t.length - 1;
              if (n < r) return 0;
              var i = s(t[n]);
              return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --n < r || -2 === i ? 0 : (i = s(t[n])) >= 0 ? (i > 0 && (e.lastNeed = i - 2), 
              i) : --n < r || -2 === i ? 0 : (i = s(t[n])) >= 0 ? (i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i) : 0;
            }(this, e, t);
            if (!this.lastNeed) return e.toString("utf8", t);
            this.lastTotal = r;
            var n = e.length - (r - this.lastNeed);
            return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
          }, o.prototype.fillLast = function(e) {
            if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length;
          };
        },
        2479: e => {
          e.exports = function e(t, r) {
            if (t && r) return e(t)(r);
            if ("function" != typeof t) throw new TypeError("need wrapper function");
            return Object.keys(t).forEach((function(e) {
              n[e] = t[e];
            })), n;
            function n() {
              for (var e = new Array(arguments.length), r = 0; r < e.length; r++) e[r] = arguments[r];
              var n = t.apply(this, e), i = e[e.length - 1];
              return "function" == typeof n && n !== i && Object.keys(i).forEach((function(e) {
                n[e] = i[e];
              })), n;
            }
          };
        },
        1156: () => {},
        7884: (e, t, r) => {
          "use strict";
          r.r(t), r.d(t, {
            Struct: () => c,
            StructError: () => n,
            any: () => A,
            array: () => I,
            assert: () => d,
            assign: () => g,
            bigint: () => T,
            boolean: () => O,
            coerce: () => X,
            create: () => f,
            date: () => C,
            defaulted: () => Y,
            define: () => b,
            deprecated: () => m,
            dynamic: () => w,
            empty: () => Q,
            enums: () => N,
            func: () => P,
            instance: () => L,
            integer: () => x,
            intersection: () => M,
            is: () => p,
            lazy: () => v,
            literal: () => D,
            map: () => j,
            mask: () => h,
            max: () => te,
            min: () => re,
            never: () => k,
            nonempty: () => ne,
            nullable: () => $,
            number: () => U,
            object: () => B,
            omit: () => _,
            optional: () => F,
            partial: () => E,
            pattern: () => ie,
            pick: () => S,
            record: () => W,
            refine: () => se,
            regexp: () => V,
            set: () => H,
            size: () => oe,
            string: () => G,
            struct: () => R,
            trimmed: () => Z,
            tuple: () => J,
            type: () => K,
            union: () => z,
            unknown: () => q,
            validate: () => y
          });
          class n extends TypeError {
            constructor(e, t) {
              let r;
              const {message: n, explanation: i, ...o} = e, {path: s} = e, a = 0 === s.length ? n : `At path: ${s.join(".")} -- ${n}`;
              super(i ?? a), null != i && (this.cause = a), Object.assign(this, o), this.name = this.constructor.name, this.failures = () => r ?? (r = [ e, ...t() ]);
            }
          }
          function i(e) {
            return "object" == typeof e && null != e;
          }
          function o(e) {
            if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
            const t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype;
          }
          function s(e) {
            return "symbol" == typeof e ? e.toString() : "string" == typeof e ? JSON.stringify(e) : `${e}`;
          }
          function a(e, t, r, n) {
            if (!0 === e) return;
            !1 === e ? e = {} : "string" == typeof e && (e = {
              message: e
            });
            const {path: i, branch: o} = t, {type: a} = r, {refinement: l, message: u = `Expected a value of type \`${a}\`${l ? ` with refinement \`${l}\`` : ""}, but received: \`${s(n)}\``} = e;
            return {
              value: n,
              type: a,
              refinement: l,
              key: i[i.length - 1],
              path: i,
              branch: o,
              ...e,
              message: u
            };
          }
          function* l(e, t, r, n) {
            var o;
            i(o = e) && "function" == typeof o[Symbol.iterator] || (e = [ e ]);
            for (const i of e) {
              const e = a(i, t, r, n);
              e && (yield e);
            }
          }
          function* u(e, t, r = {}) {
            const {path: n = [], branch: o = [ e ], coerce: s = !1, mask: a = !1} = r, l = {
              path: n,
              branch: o
            };
            if (s && (e = t.coercer(e, l), a && "type" !== t.type && i(t.schema) && i(e) && !Array.isArray(e))) for (const i in e) void 0 === t.schema[i] && delete e[i];
            let c = "valid";
            for (const i of t.validator(e, l)) i.explanation = r.message, c = "not_valid", yield [ i, void 0 ];
            for (let [d, f, h] of t.entries(e, l)) {
              const t = u(f, h, {
                path: void 0 === d ? n : [ ...n, d ],
                branch: void 0 === d ? o : [ ...o, f ],
                coerce: s,
                mask: a,
                message: r.message
              });
              for (const r of t) r[0] ? (c = null != r[0].refinement ? "not_refined" : "not_valid", yield [ r[0], void 0 ]) : s && (f = r[1], 
              void 0 === d ? e = f : e instanceof Map ? e.set(d, f) : e instanceof Set ? e.add(f) : i(e) && (void 0 !== f || d in e) && (e[d] = f));
            }
            if ("not_valid" !== c) for (const i of t.refiner(e, l)) i.explanation = r.message, c = "not_refined", yield [ i, void 0 ];
            "valid" === c && (yield [ void 0, e ]);
          }
          class c {
            constructor(e) {
              const {type: t, schema: r, validator: n, refiner: i, coercer: o = (e => e), entries: s = function*() {}} = e;
              this.type = t, this.schema = r, this.entries = s, this.coercer = o, this.validator = n ? (e, t) => l(n(e, t), t, this, e) : () => [], 
              this.refiner = i ? (e, t) => l(i(e, t), t, this, e) : () => [];
            }
            assert(e, t) {
              return d(e, this, t);
            }
            create(e, t) {
              return f(e, this, t);
            }
            is(e) {
              return p(e, this);
            }
            mask(e, t) {
              return h(e, this, t);
            }
            validate(e, t = {}) {
              return y(e, this, t);
            }
          }
          function d(e, t, r) {
            const n = y(e, t, {
              message: r
            });
            if (n[0]) throw n[0];
          }
          function f(e, t, r) {
            const n = y(e, t, {
              coerce: !0,
              message: r
            });
            if (n[0]) throw n[0];
            return n[1];
          }
          function h(e, t, r) {
            const n = y(e, t, {
              coerce: !0,
              mask: !0,
              message: r
            });
            if (n[0]) throw n[0];
            return n[1];
          }
          function p(e, t) {
            return !y(e, t)[0];
          }
          function y(e, t, r = {}) {
            const i = u(e, t, r), o = function(e) {
              const {done: t, value: r} = e.next();
              return t ? void 0 : r;
            }(i);
            return o[0] ? [ new n(o[0], (function*() {
              for (const e of i) e[0] && (yield e[0]);
            })), void 0 ] : [ void 0, o[1] ];
          }
          function g(...e) {
            const t = "type" === e[0].type, r = e.map((e => e.schema)), n = Object.assign({}, ...r);
            return t ? K(n) : B(n);
          }
          function b(e, t) {
            return new c({
              type: e,
              schema: null,
              validator: t
            });
          }
          function m(e, t) {
            return new c({
              ...e,
              refiner: (t, r) => void 0 === t || e.refiner(t, r),
              validator: (r, n) => void 0 === r || (t(r, n), e.validator(r, n))
            });
          }
          function w(e) {
            return new c({
              type: "dynamic",
              schema: null,
              * entries(t, r) {
                const n = e(t, r);
                yield* n.entries(t, r);
              },
              validator: (t, r) => e(t, r).validator(t, r),
              coercer: (t, r) => e(t, r).coercer(t, r),
              refiner: (t, r) => e(t, r).refiner(t, r)
            });
          }
          function v(e) {
            let t;
            return new c({
              type: "lazy",
              schema: null,
              * entries(r, n) {
                t ?? (t = e()), yield* t.entries(r, n);
              },
              validator: (r, n) => (t ?? (t = e()), t.validator(r, n)),
              coercer: (r, n) => (t ?? (t = e()), t.coercer(r, n)),
              refiner: (r, n) => (t ?? (t = e()), t.refiner(r, n))
            });
          }
          function _(e, t) {
            const {schema: r} = e, n = {
              ...r
            };
            for (const i of t) delete n[i];
            return "type" === e.type ? K(n) : B(n);
          }
          function E(e) {
            const t = e instanceof c ? {
              ...e.schema
            } : {
              ...e
            };
            for (const r in t) t[r] = F(t[r]);
            return B(t);
          }
          function S(e, t) {
            const {schema: r} = e, n = {};
            for (const i of t) n[i] = r[i];
            return B(n);
          }
          function R(e, t) {
            return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."), b(e, t);
          }
          function A() {
            return b("any", (() => !0));
          }
          function I(e) {
            return new c({
              type: "array",
              schema: e,
              * entries(t) {
                if (e && Array.isArray(t)) for (const [r, n] of t.entries()) yield [ r, n, e ];
              },
              coercer: e => Array.isArray(e) ? e.slice() : e,
              validator: e => Array.isArray(e) || `Expected an array value, but received: ${s(e)}`
            });
          }
          function T() {
            return b("bigint", (e => "bigint" == typeof e));
          }
          function O() {
            return b("boolean", (e => "boolean" == typeof e));
          }
          function C() {
            return b("date", (e => e instanceof Date && !isNaN(e.getTime()) || `Expected a valid \`Date\` object, but received: ${s(e)}`));
          }
          function N(e) {
            const t = {}, r = e.map((e => s(e))).join();
            for (const n of e) t[n] = n;
            return new c({
              type: "enums",
              schema: t,
              validator: t => e.includes(t) || `Expected one of \`${r}\`, but received: ${s(t)}`
            });
          }
          function P() {
            return b("func", (e => "function" == typeof e || `Expected a function, but received: ${s(e)}`));
          }
          function L(e) {
            return b("instance", (t => t instanceof e || `Expected a \`${e.name}\` instance, but received: ${s(t)}`));
          }
          function x() {
            return b("integer", (e => "number" == typeof e && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${s(e)}`));
          }
          function M(e) {
            return new c({
              type: "intersection",
              schema: null,
              * entries(t, r) {
                for (const n of e) yield* n.entries(t, r);
              },
              * validator(t, r) {
                for (const n of e) yield* n.validator(t, r);
              },
              * refiner(t, r) {
                for (const n of e) yield* n.refiner(t, r);
              }
            });
          }
          function D(e) {
            const t = s(e), r = typeof e;
            return new c({
              type: "literal",
              schema: "string" === r || "number" === r || "boolean" === r ? e : null,
              validator: r => r === e || `Expected the literal \`${t}\`, but received: ${s(r)}`
            });
          }
          function j(e, t) {
            return new c({
              type: "map",
              schema: null,
              * entries(r) {
                if (e && t && r instanceof Map) for (const [n, i] of r.entries()) yield [ n, n, e ], yield [ n, i, t ];
              },
              coercer: e => e instanceof Map ? new Map(e) : e,
              validator: e => e instanceof Map || `Expected a \`Map\` object, but received: ${s(e)}`
            });
          }
          function k() {
            return b("never", (() => !1));
          }
          function $(e) {
            return new c({
              ...e,
              validator: (t, r) => null === t || e.validator(t, r),
              refiner: (t, r) => null === t || e.refiner(t, r)
            });
          }
          function U() {
            return b("number", (e => "number" == typeof e && !isNaN(e) || `Expected a number, but received: ${s(e)}`));
          }
          function B(e) {
            const t = e ? Object.keys(e) : [], r = k();
            return new c({
              type: "object",
              schema: e || null,
              * entries(n) {
                if (e && i(n)) {
                  const i = new Set(Object.keys(n));
                  for (const r of t) i.delete(r), yield [ r, n[r], e[r] ];
                  for (const e of i) yield [ e, n[e], r ];
                }
              },
              validator: e => i(e) || `Expected an object, but received: ${s(e)}`,
              coercer: e => i(e) ? {
                ...e
              } : e
            });
          }
          function F(e) {
            return new c({
              ...e,
              validator: (t, r) => void 0 === t || e.validator(t, r),
              refiner: (t, r) => void 0 === t || e.refiner(t, r)
            });
          }
          function W(e, t) {
            return new c({
              type: "record",
              schema: null,
              * entries(r) {
                if (i(r)) for (const n in r) {
                  const i = r[n];
                  yield [ n, n, e ], yield [ n, i, t ];
                }
              },
              validator: e => i(e) || `Expected an object, but received: ${s(e)}`
            });
          }
          function V() {
            return b("regexp", (e => e instanceof RegExp));
          }
          function H(e) {
            return new c({
              type: "set",
              schema: null,
              * entries(t) {
                if (e && t instanceof Set) for (const r of t) yield [ r, r, e ];
              },
              coercer: e => e instanceof Set ? new Set(e) : e,
              validator: e => e instanceof Set || `Expected a \`Set\` object, but received: ${s(e)}`
            });
          }
          function G() {
            return b("string", (e => "string" == typeof e || `Expected a string, but received: ${s(e)}`));
          }
          function J(e) {
            const t = k();
            return new c({
              type: "tuple",
              schema: null,
              * entries(r) {
                if (Array.isArray(r)) {
                  const n = Math.max(e.length, r.length);
                  for (let i = 0; i < n; i++) yield [ i, r[i], e[i] || t ];
                }
              },
              validator: e => Array.isArray(e) || `Expected an array, but received: ${s(e)}`
            });
          }
          function K(e) {
            const t = Object.keys(e);
            return new c({
              type: "type",
              schema: e,
              * entries(r) {
                if (i(r)) for (const n of t) yield [ n, r[n], e[n] ];
              },
              validator: e => i(e) || `Expected an object, but received: ${s(e)}`,
              coercer: e => i(e) ? {
                ...e
              } : e
            });
          }
          function z(e) {
            const t = e.map((e => e.type)).join(" | ");
            return new c({
              type: "union",
              schema: null,
              coercer(t) {
                for (const r of e) {
                  const [e, n] = r.validate(t, {
                    coerce: !0
                  });
                  if (!e) return n;
                }
                return t;
              },
              validator(r, n) {
                const i = [];
                for (const t of e) {
                  const [...e] = u(r, t, n), [o] = e;
                  if (!o[0]) return [];
                  for (const [t] of e) t && i.push(t);
                }
                return [ `Expected the value to satisfy a union of \`${t}\`, but received: ${s(r)}`, ...i ];
              }
            });
          }
          function q() {
            return b("unknown", (() => !0));
          }
          function X(e, t, r) {
            return new c({
              ...e,
              coercer: (n, i) => p(n, t) ? e.coercer(r(n, i), i) : e.coercer(n, i)
            });
          }
          function Y(e, t, r = {}) {
            return X(e, q(), (e => {
              const n = "function" == typeof t ? t() : t;
              if (void 0 === e) return n;
              if (!r.strict && o(e) && o(n)) {
                const t = {
                  ...e
                };
                let r = !1;
                for (const e in n) void 0 === t[e] && (t[e] = n[e], r = !0);
                if (r) return t;
              }
              return e;
            }));
          }
          function Z(e) {
            return X(e, G(), (e => e.trim()));
          }
          function Q(e) {
            return se(e, "empty", (t => {
              const r = ee(t);
              return 0 === r || `Expected an empty ${e.type} but received one with a size of \`${r}\``;
            }));
          }
          function ee(e) {
            return e instanceof Map || e instanceof Set ? e.size : e.length;
          }
          function te(e, t, r = {}) {
            const {exclusive: n} = r;
            return se(e, "max", (r => n ? r < t : r <= t || `Expected a ${e.type} less than ${n ? "" : "or equal to "}${t} but received \`${r}\``));
          }
          function re(e, t, r = {}) {
            const {exclusive: n} = r;
            return se(e, "min", (r => n ? r > t : r >= t || `Expected a ${e.type} greater than ${n ? "" : "or equal to "}${t} but received \`${r}\``));
          }
          function ne(e) {
            return se(e, "nonempty", (t => ee(t) > 0 || `Expected a nonempty ${e.type} but received an empty one`));
          }
          function ie(e, t) {
            return se(e, "pattern", (r => t.test(r) || `Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`));
          }
          function oe(e, t, r = t) {
            const n = `Expected a ${e.type}`, i = t === r ? `of \`${t}\`` : `between \`${t}\` and \`${r}\``;
            return se(e, "size", (e => {
              if ("number" == typeof e || e instanceof Date) return t <= e && e <= r || `${n} ${i} but received \`${e}\``;
              if (e instanceof Map || e instanceof Set) {
                const {size: o} = e;
                return t <= o && o <= r || `${n} with a size ${i} but received one with a size of \`${o}\``;
              }
              {
                const {length: o} = e;
                return t <= o && o <= r || `${n} with a length ${i} but received one with a length of \`${o}\``;
              }
            }));
          }
          function se(e, t, r) {
            return new c({
              ...e,
              * refiner(n, i) {
                yield* e.refiner(n, i);
                const o = l(r(n, i), i, e, n);
                for (const e of o) yield {
                  ...e,
                  refinement: t
                };
              }
            });
          }
        }
      }, t = {};
      function r(n) {
        var i = t[n];
        if (void 0 !== i) return i.exports;
        var o = t[n] = {
          id: n,
          loaded: !1,
          exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports;
      }
      r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
          a: t
        }), t;
      }, r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
          enumerable: !0,
          get: t[n]
        });
      }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: !0
        });
      }, r.nmd = e => (e.paths = [], e.children || (e.children = []), e);
      var n = {};
      return (() => {
        "use strict";
        function e(t) {
          return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          })(t);
        }
        function t(t, r, n) {
          return (r = function(t) {
            var r = function(t, r) {
              if ("object" !== e(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(t, "string");
                if ("object" !== e(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(t);
            }(t);
            return "symbol" === e(r) ? r : String(r);
          }(r)) in t ? Object.defineProperty(t, r, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[r] = n, t;
        }
        r.r(n), r.d(n, {
          BUTTON_POSITION: () => W,
          PAYMENT_PROVIDER: () => U,
          SUPPORTED_PAYMENT_NETWORK: () => B,
          TORUS_BUILD_ENV: () => F,
          TorusInpageProvider: () => ve,
          WALLET_OPENLOGIN_VERIFIER_MAP: () => $,
          WALLET_VERIFIERS: () => k,
          default: () => Pe
        });
        var i = r(2378), o = r.n(i), s = r(2043), a = r.n(s);
        function l(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            }))), r.push.apply(r, n);
          }
          return r;
        }
        function u(e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2 ? l(Object(n), !0).forEach((function(r) {
              t(e, r, n[r]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            }));
          }
          return e;
        }
        const c = a().getLogger("http-helpers");
        c.setLevel(s.levels.INFO);
        let d = "torus-default";
        const f = async function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = {
            mode: "cors",
            headers: {}
          };
          (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).useAPIKey && (r.headers = u(u({}, r.headers), function() {
            const e = {};
            return d && (e["x-api-key"] = d), e;
          }()));
          const n = o()(r, t, {
            method: "GET"
          }), i = await async function(e, t) {
            let r = null;
            try {
              r = new URL(e);
            } catch (e) {}
            return fetch(e, t);
          }(e, n);
          if (i.ok) return i.json();
          throw function(e) {
            c.info(`Response: ${e.status} ${e.statusText}`), c.info(`Url: ${e.url}`);
          }(i), i;
        };
        var h = r(9827), p = r(7187), y = r(4445), g = r.n(y), b = r(9428), m = r(2840), w = r.n(m), v = r(778), _ = r.n(v), E = r(4286), S = r.n(E);
        function R() {}
        const A = "ACK";
        class I extends h.Duplex {
          constructor(e) {
            let {name: r, target: n, targetWindow: i = window, targetOrigin: o = "*"} = e;
            if (super({
              objectMode: !0
            }), t(this, "_init", void 0), t(this, "_haveSyn", void 0), t(this, "_name", void 0), t(this, "_target", void 0), t(this, "_targetWindow", void 0), 
            t(this, "_targetOrigin", void 0), t(this, "_onMessage", void 0), t(this, "_synIntervalId", void 0), !r || !n) throw new Error("Invalid input.");
            this._init = !1, this._haveSyn = !1, this._name = r, this._target = n, this._targetWindow = i, this._targetOrigin = o, this._onMessage = this.onMessage.bind(this), 
            this._synIntervalId = null, window.addEventListener("message", this._onMessage, !1), this._handShake();
          }
          _break() {
            this.cork(), this._write("BRK", null, R), this._haveSyn = !1, this._init = !1;
          }
          _handShake() {
            this._write("SYN", null, R), this.cork();
          }
          _onData(e) {
            if (this._init) if ("BRK" === e) this._break(); else try {
              this.push(e);
            } catch (e) {
              this.emit("error", e);
            } else "SYN" === e ? (this._haveSyn = !0, this._write(A, null, R)) : e === A && (this._init = !0, this._haveSyn || this._write(A, null, R), 
            this.uncork());
          }
          _postMessage(e) {
            const t = this._targetOrigin;
            this._targetWindow.postMessage({
              target: this._target,
              data: e
            }, t);
          }
          onMessage(e) {
            const t = e.data;
            "*" !== this._targetOrigin && e.origin !== this._targetOrigin || e.source !== this._targetWindow || "object" != typeof t || t.target !== this._name || !t.data || this._onData(t.data);
          }
          _read() {}
          _write(e, t, r) {
            this._postMessage(e), r();
          }
          _destroy() {
            window.removeEventListener("message", this._onMessage, !1);
          }
        }
        function T(e, t, r) {
          try {
            Reflect.apply(e, t, r);
          } catch (e) {
            setTimeout((() => {
              throw e;
            }));
          }
        }
        class O extends p.EventEmitter {
          emit(e) {
            let t = "error" === e;
            const r = this._events;
            if (void 0 !== r) t = t && void 0 === r.error; else if (!t) return !1;
            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
            if (t) {
              let e;
              if (i.length > 0 && ([e] = i), e instanceof Error) throw e;
              const t = new Error("Unhandled error." + (e ? ` (${e.message})` : ""));
              throw t.context = e, t;
            }
            const s = r[e];
            if (void 0 === s) return !1;
            if ("function" == typeof s) T(s, this, i); else {
              const e = s.length, t = function(e) {
                const t = e.length, r = new Array(t);
                for (let n = 0; n < t; n += 1) r[n] = e[n];
                return r;
              }(s);
              for (let r = 0; r < e; r += 1) T(t[r], this, i);
            }
            return !0;
          }
        }
        class C extends Error {
          constructor(e) {
            let {code: r, message: n, data: i} = e;
            if (!Number.isInteger(r)) throw new Error("code must be an integer");
            if (!n || "string" != typeof n) throw new Error("message must be string");
            super(n), t(this, "code", void 0), t(this, "data", void 0), this.code = r, void 0 !== i && (this.data = i);
          }
          toString() {
            return g()({
              code: this.code,
              message: this.message,
              data: this.data,
              stack: this.stack
            });
          }
        }
        function N(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            }))), r.push.apply(r, n);
          }
          return r;
        }
        class P extends O {
          constructor() {
            super(), t(this, "_middleware", void 0), this._middleware = [];
          }
          static async _runAllMiddleware(e, t, r) {
            const n = [];
            let i = null, o = !1;
            for (const s of r) if ([i, o] = await P._runMiddleware(e, t, s, n), o) break;
            return [ i, o, n.reverse() ];
          }
          static _runMiddleware(e, t, r, n) {
            return new Promise((i => {
              const o = e => {
                const r = e || t.error;
                r && (t.error = (0, b.Xy)(r)), i([ r, !0 ]);
              }, s = e => {
                t.error ? o(t.error) : (e && ("function" != typeof e && o(new C({
                  code: -32603,
                  message: "JRPCEngine: 'next' return handlers must be functions"
                })), n.push(e)), i([ null, !1 ]));
              };
              try {
                r(e, t, s, o);
              } catch (e) {
                o(e);
              }
            }));
          }
          static async _runReturnHandlers(e) {
            for (const t of e) await new Promise(((e, r) => {
              t((t => t ? r(t) : e()));
            }));
          }
          static _checkForCompletion(e, t, r) {
            if (!("result" in t) && !("error" in t)) throw new C({
              code: -32603,
              message: "Response has no error or result for request"
            });
            if (!r) throw new C({
              code: -32603,
              message: "Nothing ended request"
            });
          }
          push(e) {
            this._middleware.push(e);
          }
          handle(e, t) {
            if (t && "function" != typeof t) throw new Error('"callback" must be a function if provided.');
            return Array.isArray(e) ? t ? this._handleBatch(e, t) : this._handleBatch(e) : t ? this._handle(e, t) : this._promiseHandle(e);
          }
          asMiddleware() {
            return async (e, t, r, n) => {
              try {
                const [i, o, s] = await P._runAllMiddleware(e, t, this._middleware);
                return o ? (await P._runReturnHandlers(s), n(i)) : r((async e => {
                  try {
                    await P._runReturnHandlers(s);
                  } catch (t) {
                    return e(t);
                  }
                  return e();
                }));
              } catch (e) {
                return n(e);
              }
            };
          }
          async _handleBatch(e, t) {
            try {
              const r = await Promise.all(e.map(this._promiseHandle.bind(this)));
              return t ? t(null, r) : r;
            } catch (e) {
              if (t) return t(e);
              throw e;
            }
          }
          _promiseHandle(e) {
            return new Promise((t => {
              this._handle(e, ((e, r) => {
                t(r);
              }));
            }));
          }
          async _handle(e, r) {
            if (!e || Array.isArray(e) || "object" != typeof e) {
              const e = new C({
                code: -32603,
                message: "request must be plain object"
              });
              return r(e, {
                id: void 0,
                jsonrpc: "2.0",
                error: e
              });
            }
            if ("string" != typeof e.method) {
              const t = new C({
                code: -32603,
                message: "method must be string"
              });
              return r(t, {
                id: e.id,
                jsonrpc: "2.0",
                error: t
              });
            }
            const n = function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var n = null != arguments[r] ? arguments[r] : {};
                r % 2 ? N(Object(n), !0).forEach((function(r) {
                  t(e, r, n[r]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                }));
              }
              return e;
            }({}, e), i = {
              id: n.id,
              jsonrpc: n.jsonrpc
            };
            let o = null;
            try {
              await this._processRequest(n, i);
            } catch (e) {
              o = e;
            }
            return o && (delete i.result, i.error || (i.error = (0, b.Xy)(o))), r(o, i);
          }
          async _processRequest(e, t) {
            const [r, n, i] = await P._runAllMiddleware(e, t, this._middleware);
            if (P._checkForCompletion(e, t, n), await P._runReturnHandlers(i), r) throw r;
          }
        }
        class L extends h.Duplex {
          constructor(e) {
            let {parent: r, name: n} = e;
            super({
              objectMode: !0
            }), t(this, "_parent", void 0), t(this, "_name", void 0), this._parent = r, this._name = n;
          }
          _read() {}
          _write(e, t, r) {
            this._parent.push({
              name: this._name,
              data: e
            }), r();
          }
        }
        function x(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            }))), r.push.apply(r, n);
          }
          return r;
        }
        function M(e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2 ? x(Object(n), !0).forEach((function(r) {
              t(e, r, n[r]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            }));
          }
          return e;
        }
        const D = Symbol("IGNORE_SUBSTREAM");
        class j extends h.Duplex {
          constructor() {
            super(M(M({}, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), {}, {
              objectMode: !0
            })), t(this, "_substreams", void 0), t(this, "getStream", void 0), this._substreams = {};
          }
          createStream(e) {
            if (!e) throw new Error("ObjectMultiplex - name must not be empty");
            if (this._substreams[e]) throw new Error(`ObjectMultiplex - Substream for name "${e}" already exists`);
            const t = new L({
              parent: this,
              name: e
            });
            return this._substreams[e] = t, function(e, r) {
              const n = _()((e => t.destroy(e || void 0)));
              w()(e, {
                readable: !1
              }, n), w()(e, {
                writable: !1
              }, n);
            }(this), t;
          }
          ignoreStream(e) {
            if (!e) throw new Error("ObjectMultiplex - name must not be empty");
            if (this._substreams[e]) throw new Error(`ObjectMultiplex - Substream for name "${e}" already exists`);
            this._substreams[e] = D;
          }
          _read() {}
          _write(e, t, r) {
            const {name: n, data: i} = e;
            if (!n) return window.console.warn(`ObjectMultiplex - malformed chunk without name "${e}"`), r();
            const o = this._substreams[n];
            return o ? (o !== D && o.push(i), r()) : (window.console.warn(`ObjectMultiplex - orphaned data for stream "${n}"`), r());
          }
        }
        const k = {
          GOOGLE: "google",
          FACEBOOK: "facebook",
          TWITCH: "twitch",
          REDDIT: "reddit",
          DISCORD: "discord",
          EMAIL_PASSWORDLESS: "torus-auth0-email-passwordless"
        }, $ = {
          [k.GOOGLE]: "tkey-google",
          [k.FACEBOOK]: "tkey-facebook",
          [k.TWITCH]: "tkey-twitch",
          [k.REDDIT]: "tkey-reddit",
          [k.DISCORD]: "tkey-discord",
          [k.EMAIL_PASSWORDLESS]: "tkey-auth0-email-passwordless"
        }, U = {
          MOONPAY: "moonpay",
          WYRE: "wyre",
          RAMPNETWORK: "rampnetwork",
          XANPOOL: "xanpool",
          MERCURYO: "mercuryo",
          TRANSAK: "transak",
          BANXA: "banxa"
        }, B = {
          MAINNET: "mainnet",
          MATIC: "matic",
          BSC_MAINNET: "bsc_mainnet",
          AVALANCHE_MAINNET: "avalanche_mainnet",
          XDAI: "xdai",
          ARBITRUM_MAINNET: "arbitrum_mainnet",
          OPTIMISM_MAINNET: "optimism_mainnet"
        }, F = {
          PRODUCTION: "production",
          DEVELOPMENT: "development",
          BINANCE: "binance",
          TESTING: "testing",
          LRC: "lrc",
          BETA: "beta",
          BNB: "bnb",
          POLYGON: "polygon",
          ALPHA: "alpha"
        }, W = {
          BOTTOM_LEFT: "bottom-left",
          TOP_LEFT: "top-left",
          BOTTOM_RIGHT: "bottom-right",
          TOP_RIGHT: "top-right"
        }, V = {
          [U.MOONPAY]: [ "AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "COP", "CZK", "DKK", "DOP", "EGP", "EUR", "GBP", "HKD", "HRK", "IDR", "ILS", "JPY", "JOD", "KES", "KRW", "KWD", "LKR", "MAD", "MXN", "MYR", "NGN", "NOK", "NZD", "OMR", "PEN", "PKR", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "USD", "VND", "ZAR" ],
          [U.WYRE]: [ "USD", "EUR", "GBP", "AUD", "CAD", "NZD", "CNY", "ARS", "BRL", "CHF", "CLP", "COP", "CZK", "DKK", "HKD", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", "NOK", "PHP", "PLN", "SEK", "SGD", "THB", "VND", "ZAR" ],
          [U.RAMPNETWORK]: [ "USD", "EUR", "GBP", "BMD", "BAM", "BWP", "BRL", "BGN", "COP", "CRC", "CZK", "DKK", "DOP", "GEL", "GTQ", "HNL", "HUF", "ISK", "INR", "ILS", "KZT", "KES", "KWD", "LAK", "MKD", "MYR", "MXN", "MDL", "MZN", "NZD", "NGN", "PYG", "PEN", "PLN", "RON", "RSD", "SGD", "ZAR", "LKR", "SEK", "CHF", "TJS", "THB", "UYU" ],
          [U.XANPOOL]: [ "SGD", "HKD", "THB", "PHP", "INR", "IDR", "MYR", "AUD", "NZD", "KRW" ],
          [U.MERCURYO]: [ "EUR", "USD", "GBP", "TRY", "JPY", "BRL", "NGN", "VND", "MXN", "KRW", "PLN", "SEK", "CHF", "CAD", "CZK", "DKK", "BGN", "HKD", "AUD", "INR" ],
          [U.TRANSAK]: [ "ARS", "AUD", "BBD", "BGN", "BMD", "BRL", "CAD", "CHF", "CLP", "CRC", "CZK", "DKK", "DOP", "EUR", "FJD", "FKP", "GBP", "GIP", "HRK", "HUF", "IDR", "ILS", "ISK", "JMD", "JPY", "KES", "KRW", "MDL", "MXN", "MYR", "NOK", "NZD", "PEN", "PHP", "PLN", "PYG", "RON", "SEK", "SGD", "THB", "TRY", "TZS", "USD", "ZAR" ],
          [U.BANXA]: [ "AUD", "CAD", "CZK", "DKK", "EUR", "GBP", "HKD", "JPY", "NOK", "NZD", "NZD", "PLN", "RUB", "SEK", "SGD", "TRY", "USD" ]
        }, H = new Set([ "ETH", "USDT", "USDC", "TUSD", "EOSDT", "USD", "DAI", "GUSD", "DKKT", "PAX", "ILS", "RUB", "BYN", "EUR", "GBP", "JPY", "KRW", "PLN", "MXN", "AUD", "BRL", "CAD", "CHF", "KPW", "LAK", "LBP", "LKR", "XOF", "CNHT", "DOGE", "UAH", "TRY", "HKD", "XJP", "SGD", "USC", "NZD", "NGN", "RUR", "COP", "GHS", "EGP", "IDR", "BHD", "CRC", "PEN", "AED", "DOP", "PKR", "HUF", "VND", "XAR", "LTC", "RON", "OMR", "MYR", "DKK", "UGX", "ZMW", "SAR", "SEK", "GEL", "RWF", "IRR", "TZS", "CNY", "VEF", "BDT", "HRK", "CLP", "THB", "XAF", "ARS", "UYU", "SZL", "KZT", "NOK", "KES", "PAB", "INR", "CZK", "MAD", "TWD", "PHP", "ZAR", "BOB", "CDF", "DASH", "VES", "ISK", "MWK", "BAM", "TTD", "XRP", "JOD", "RSD", "HNL", "BGN", "GTQ", "BWP", "XMR", "MMK", "QAR", "AOA", "KWD", "MUR", "WUSD", "WEUR", "WAVES", "WTRY", "LRD", "LSL", "LYD", "AWG", "MDL", "BTO", "EURS", "CHFT", "MKD", "MNT", "MOP", "MRO", "MVR", "VOLLAR", "CKUSD", "KHR", "VUV", "BITCNY", "QC", "BBD", "NAD", "NPR", "PGK", "PYG", "BIF", "BMD", "BND", "XLM", "BNB", "SCR", "BAT", "CRO", "HT", "KCS", "LEO", "LINK", "MKR", "NPXS", "OMG", "REP", "ZB", "ZIL", "ZRX", "BCH", "BZD", "CUP", "CVE", "DJF", "DZD", "ERN", "ETB", "FJD", "FKP", "BUSD", "ANCT", "ALL", "AMD", "ANG", "CNYX", "IQD", "UZS", "TND", "GGP", "XAU", "KGS", "GIP", "JMD", "ZEC", "USDP", "BSV", "EMC2", "SNT", "GTO", "POWR", "EUSD", "EURT", "BCY", "BTS", "ATM", "BLOCKPAY", "ARDR", "AMP", "B2X", "BITGOLD", "BITEUR", "ATB", "BITUSD", "AGRS", "DFXT", "HIKEN", "BIX", "KNC", "EOS", "COB", "COSS", "BMH", "NANO", "BDG", "BNT", "XVG", "LKK1Y", "LKK", "USDK", "EURN", "NZDT", "JSE", "GMD", "GNF", "GYD", "YER", "XPF", "HTG", "SLL", "SOS", "WST", "SVC", "SYP", "NEO", "KMF", "JUMP", "AYA", "BLAST", "WGR", "BCN", "BTG", "URALS", "INN", "USDQ", "CNH", "HUSD", "BKRW", "NZDX", "EURX", "CADX", "USDEX", "JPYX", "AUDX", "VNDC", "EON", "GBPX", "CHFX", "USDJ", "IDRT", "USDS", "USDN", "BIDR", "IDK", "BSD", "BTN", "KYD", "NIO", "SBD", "SDG", "SHP", "TOP", "XCD", "XCHF", "CNYT", "GYEN", "ZUSD", "GOLD", "TRX", "TRYB", "PLATC", "STRAX", "UST", "GLM", "VAI", "BRZ", "DDRST", "XAUT", "MIM" ]);
        function G(e) {
          return V[e].filter((e => H.has(e)));
        }
        const J = {
          [U.MOONPAY]: {
            line1: "Credit/ Debit Card/ Apple Pay",
            line2: "4.5% or 5 USD",
            line3: "2,000€/day, 10,000€/mo",
            supportPage: "https://help.moonpay.io/en/",
            minOrderValue: 24.99,
            maxOrderValue: 5e4,
            validCurrencies: G(U.MOONPAY),
            validCryptoCurrenciesByChain: {
              [B.MAINNET]: [ {
                value: "aave",
                display: "AAVE"
              }, {
                value: "bat",
                display: "BAT"
              }, {
                value: "dai",
                display: "DAI"
              }, {
                value: "eth",
                display: "ETH"
              }, {
                value: "mkr",
                display: "MKR"
              }, {
                value: "matic",
                display: "MATIC"
              }, {
                value: "usdt",
                display: "USDT"
              }, {
                value: "uni",
                display: "UNI"
              }, {
                value: "usdc",
                display: "USDC"
              }, {
                value: "weth",
                display: "WETH"
              } ],
              [B.MATIC]: [ {
                value: "eth_polygon",
                display: "ETH"
              }, {
                value: "matic_polygon",
                display: "MATIC"
              }, {
                value: "usdc_polygon",
                display: "USDC"
              }, {
                value: "usdt_polygon",
                display: "USDT"
              } ],
              [B.BSC_MAINNET]: [ {
                value: "bnb_bsc",
                display: "BNB"
              }, {
                value: "busd_bsc",
                display: "BUSD"
              } ],
              [B.AVALANCHE_MAINNET]: [ {
                value: "avax_cchain",
                display: "AVAX"
              }, {
                value: "usdc_cchain",
                display: "USDC"
              } ],
              [B.ARBITRUM_MAINNET]: [ {
                value: "eth_arbitrum",
                display: "ETH"
              }, {
                value: "usdc_arbitrum",
                display: "USDC"
              } ],
              [B.OPTIMISM_MAINNET]: [ {
                value: "eth_optimism",
                display: "ETH"
              }, {
                value: "usdc_optimism",
                display: "USDC"
              } ]
            },
            includeFees: !0,
            api: !0,
            enforceMax: !1
          },
          [U.WYRE]: {
            line1: "Apple Pay/ Debit/ Credit Card",
            line2: "4.9% + 30¢ or 5 USD",
            line3: "$250/day",
            supportPage: "https://support.sendwyre.com/en/",
            minOrderValue: 5,
            maxOrderValue: 500,
            validCurrencies: G(U.WYRE),
            validCryptoCurrenciesByChain: {
              [B.MAINNET]: [ {
                value: "AAVE",
                display: "AAVE"
              }, {
                value: "COMP",
                display: "COMP"
              }, {
                value: "BAT",
                display: "BAT"
              }, {
                value: "BUSD",
                display: "BUSD"
              }, {
                value: "DAI",
                display: "DAI"
              }, {
                value: "ETH",
                display: "ETH"
              }, {
                value: "WBTC",
                display: "WBTC"
              }, {
                value: "MKR",
                display: "MKR"
              }, {
                value: "UNI",
                display: "UNI"
              }, {
                value: "WETH",
                display: "WETH"
              }, {
                value: "USDC",
                display: "USDC"
              }, {
                value: "USDT",
                display: "USDT"
              } ],
              [B.MATIC]: [ {
                value: "mUSDC",
                display: "USDC"
              }, {
                value: "MATIC",
                display: "MATIC"
              }, {
                value: "MWETH",
                display: "WETH"
              } ],
              [B.AVALANCHE_MAINNET]: [ {
                value: "AVAXC",
                display: "AVAX"
              }, {
                value: "AVAXCUSDC",
                display: "USDC"
              } ],
              [B.BSC_MAINNET]: [ {
                value: "BNB",
                display: "BNB"
              }, {
                value: "BBUSD",
                display: "BUSD"
              } ]
            },
            includeFees: !1,
            api: !0,
            enforceMax: !1
          },
          [U.RAMPNETWORK]: {
            line1: "Debit Card/ <br>Apple Pay/ Bank transfer",
            line2: "0.49% - 2.9%",
            line3: "5,000€/purchase, 20,000€/mo",
            supportPage: "https://instant.ramp.network/",
            minOrderValue: 50,
            maxOrderValue: 2e4,
            validCurrencies: G(U.RAMPNETWORK),
            validCryptoCurrenciesByChain: {
              [B.MAINNET]: [ {
                value: "ETH",
                display: "ETH"
              }, {
                value: "DAI",
                display: "DAI"
              }, {
                value: "BAT",
                display: "BAT"
              }, {
                value: "USDC",
                display: "USDC"
              }, {
                value: "USDT",
                display: "USDT"
              } ],
              [B.MATIC]: [ {
                value: "MATIC_BAT",
                display: "BAT"
              }, {
                value: "MATIC_DAI",
                display: "DAI"
              }, {
                value: "MATIC_MATIC",
                display: "MATIC"
              }, {
                value: "MATIC_USDC",
                display: "USDC"
              }, {
                value: "MATIC_USDT",
                display: "USDT"
              } ],
              [B.AVALANCHE_MAINNET]: [ {
                value: "AVAX_AVAX",
                display: "AVAX"
              }, {
                value: "AVAX_USDC",
                display: "USDC"
              }, {
                value: "AVAX_USDT",
                display: "USDT"
              } ],
              [B.ARBITRUM_MAINNET]: [ {
                value: "ARBITRUM_ETH",
                display: "ETH"
              }, {
                value: "ARBITRUM_USDC.e\t",
                display: "USDC"
              }, {
                value: "ARBITRUM_USDT",
                display: "USDT"
              } ],
              [B.OPTIMISM_MAINNET]: [ {
                value: "OPTIMISM_DAI",
                display: "DAI"
              }, {
                value: "OPTIMISM_OPTIMISM",
                display: "OPTIMISM"
              }, {
                value: "OPTIMISM_USDC",
                display: "USDC"
              }, {
                value: "OPTIMISM_USDT",
                display: "USDT"
              } ],
              [B.BSC_MAINNET]: [ {
                value: "BSC_BNB",
                display: "BNB"
              }, {
                value: "BSC_BUSD",
                display: "BUSD"
              } ]
            },
            includeFees: !0,
            api: !0,
            receiveHint: "walletTopUp.receiveHintRamp",
            enforceMax: !1
          },
          [U.XANPOOL]: {
            line1: "PayNow/ InstaPay/ FPS/ GoJekPay/ UPI/ PromptPay/ <br>ViettelPay/ DuitNow",
            line2: "2.5% buying, 3% selling",
            line3: "$2,500 / day",
            supportPage: "mailto:support@xanpool.com",
            minOrderValue: 100,
            maxOrderValue: 2500,
            validCurrencies: G(U.XANPOOL),
            validCryptoCurrenciesByChain: {
              [B.MAINNET]: [ {
                value: "ETH",
                display: "ETH"
              }, {
                value: "USDT",
                display: "USDT"
              }, {
                value: "USDC",
                display: "USDC"
              } ]
            },
            includeFees: !0,
            api: !0,
            sell: !0,
            enforceMax: !1
          },
          [U.MERCURYO]: {
            line1: "Credit/ Debit Card/ Apple Pay",
            line2: "3.95% or 4 USD",
            line3: "10,000€/day, 25,000€/mo",
            supportPage: "mailto:support@mercuryo.io",
            minOrderValue: 30,
            maxOrderValue: 5e3,
            validCurrencies: G(U.MERCURYO),
            validCryptoCurrenciesByChain: {
              [B.MAINNET]: [ {
                value: "ETH",
                display: "ETH"
              }, {
                value: "BAT",
                display: "BAT"
              }, {
                value: "USDT",
                display: "USDT"
              }, {
                value: "DAI",
                display: "DAI"
              } ],
              [B.BSC_MAINNET]: [ {
                value: "BNB",
                display: "BNB"
              }, {
                value: "BUSD",
                display: "BUSD"
              }, {
                value: "1INCH",
                display: "1INCH"
              } ],
              [B.AVALANCHE_MAINNET]: [ {
                value: "AVAX",
                display: "AVAX"
              } ],
              [B.MATIC]: [ {
                value: "MATIC",
                display: "MATIC"
              } ]
            },
            includeFees: !0,
            api: !0,
            enforceMax: !1
          },
          [U.TRANSAK]: {
            line1: "Apple & Google Pay / Credit/Debit Card<br/>Bangkok Bank Mobile & iPay<br/>Bank Transfer (sepa/gbp) / SCB Mobile & Easy",
            line2: "0.99% - 5.5% or 5 USD",
            line3: "$5,000/day, $28,000/mo",
            supportPage: "https://support.transak.com/hc/en-US",
            minOrderValue: 30,
            maxOrderValue: 500,
            validCurrencies: G(U.TRANSAK),
            validCryptoCurrenciesByChain: {
              [B.MAINNET]: [ {
                value: "1INCH",
                display: "1INCH"
              }, {
                value: "BAT",
                display: "BAT"
              }, {
                value: "AAVE",
                display: "AAVE"
              }, {
                value: "DAI",
                display: "DAI"
              }, {
                value: "ETH",
                display: "ETH"
              }, {
                value: "USDC",
                display: "USDC"
              }, {
                value: "USDT",
                display: "USDT"
              } ],
              [B.MATIC]: [ {
                value: "BAT",
                display: "BAT"
              }, {
                value: "AAVE",
                display: "AAVE"
              }, {
                value: "DAI",
                display: "DAI"
              }, {
                value: "MATIC",
                display: "MATIC"
              }, {
                value: "USDC",
                display: "USDC"
              }, {
                value: "USDT",
                display: "USDT"
              }, {
                value: "WETH",
                display: "WETH"
              } ],
              [B.BSC_MAINNET]: [ {
                value: "BAT",
                display: "BAT"
              }, {
                value: "BNB",
                display: "BNB"
              }, {
                value: "BUSD",
                display: "BUSD"
              } ],
              [B.AVALANCHE_MAINNET]: [ {
                value: "AVAX",
                display: "AVAX"
              } ],
              [B.OPTIMISM_MAINNET]: [ {
                value: "ETH",
                display: "ETH"
              }, {
                value: "USDC",
                display: "USDC"
              } ],
              [B.ARBITRUM_MAINNET]: [ {
                value: "USDC",
                display: "USDC"
              }, {
                value: "ETH",
                display: "ETH"
              } ]
            },
            includeFees: !0,
            enforceMax: !0
          },
          [U.BANXA]: {
            line1: "Debit Card/ <br>Apple Pay/ Bank transfer",
            line2: "0.49% - 2.9%",
            line3: "5,000€/purchase, 20,000€/mo",
            supportPage: "https://support.banxa.com",
            minOrderValue: 20,
            maxOrderValue: 15e3,
            validCurrencies: G(U.BANXA),
            validCryptoCurrenciesByChain: {
              [B.MAINNET]: [ {
                value: "ETH",
                display: "ETH"
              }, {
                value: "DAI",
                display: "DAI"
              }, {
                value: "MKR",
                display: "MKR"
              }, {
                value: "USDT",
                display: "USDT"
              }, {
                value: "BUSD",
                display: "BUSD"
              }, {
                value: "USDC",
                display: "USDC"
              }, {
                value: "BAT",
                display: "BAT"
              }, {
                value: "AAVE",
                display: "AAVE"
              }, {
                value: "COMP",
                display: "COMP"
              }, {
                value: "UNI",
                display: "UNI"
              } ],
              [B.MATIC]: [ {
                value: "MATIC",
                display: "MATIC"
              } ]
            },
            includeFees: !0,
            enforceMax: !0
          }
        }, K = {
          supportedVerifierList: Object.values(k),
          paymentProviders: J,
          api: "https://api.tor.us",
          translations: {
            en: {
              embed: {
                continue: "Continue",
                actionRequired: "Authorization required",
                pendingAction: "Click continue to proceed with your request in a popup",
                cookiesRequired: "Cookies Required",
                enableCookies: "Please enable cookies in your browser preferences to access Torus",
                clickHere: "More Info"
              }
            },
            de: {
              embed: {
                continue: "Fortsetzen",
                actionRequired: "Autorisierung erforderlich",
                pendingAction: "Klicken Sie in einem Popup auf Weiter, um mit Ihrer Anfrage fortzufahren",
                cookiesRequired: "Cookies benötigt",
                enableCookies: "Bitte aktivieren Sie Cookies in Ihren Browsereinstellungen, um auf Torus zuzugreifen",
                clickHere: "Mehr Info"
              }
            },
            ja: {
              embed: {
                continue: "継続する",
                actionRequired: "認証が必要です",
                pendingAction: "続行をクリックして、ポップアップでリクエストを続行します",
                cookiesRequired: "必要なクッキー",
                enableCookies: "Torusにアクセスするには、ブラウザの設定でCookieを有効にしてください。",
                clickHere: "詳しくは"
              }
            },
            ko: {
              embed: {
                continue: "계속하다",
                actionRequired: "승인 필요",
                pendingAction: "팝업에서 요청을 진행하려면 계속을 클릭하십시오.",
                cookiesRequired: "쿠키 필요",
                enableCookies: "브라우저 환경 설정에서 쿠키를 활성화하여 Torus에 액세스하십시오.",
                clickHere: "더 많은 정보"
              }
            },
            zh: {
              embed: {
                continue: "继续",
                actionRequired: "需要授权",
                pendingAction: "单击继续以在弹出窗口中继续您的请求",
                cookiesRequired: "必填Cookie",
                enableCookies: "请在您的浏览器首选项中启用cookie以访问Torus。",
                clickHere: "更多信息"
              }
            }
          },
          prodTorusUrl: "",
          localStorageKeyPrefix: "torus-"
        }, z = e => {
          const t = window.document.createElement("template"), r = e.trim();
          return t.innerHTML = r, t.content.firstChild;
        }, q = (e, t, r) => {
          const n = i => {
            r(i), e.removeListener(t, n);
          };
          e.on(t, n);
        };
        var X = r(4063), Y = r.n(X), Z = r(4970);
        const Q = a().getLogger("torus-embed"), ee = {
          errors: {
            disconnected: () => "Torus: Lost connection to Torus.",
            permanentlyDisconnected: () => "Torus: Disconnected from iframe. Page reload required.",
            sendSiteMetadata: () => "Torus: Failed to send site metadata. This is an internal error, please report this bug.",
            unsupportedSync: e => `Torus: The Torus Ethereum provider does not support synchronous methods like ${e} without a callback parameter.`,
            invalidDuplexStream: () => "Must provide a Node.js-style duplex stream.",
            invalidOptions: (e, t) => `Invalid options. Received: { maxEventListeners: ${e}, shouldSendMetadata: ${t} }`,
            invalidRequestArgs: () => "Expected a single, non-array, object argument.",
            invalidRequestMethod: () => "'args.method' must be a non-empty string.",
            invalidRequestParams: () => "'args.params' must be an object or array if provided.",
            invalidLoggerObject: () => "'args.logger' must be an object if provided.",
            invalidLoggerMethod: e => `'args.logger' must include required method '${e}'.`
          },
          info: {
            connected: e => `Torus: Connected to chain with ID "${e}".`
          },
          warnings: {
            enableDeprecation: 'Torus: ""ethereum.enable()" is deprecated and may be removed in the future. Please use "ethereum.send("eth_requestAccounts")" instead. For more information, see: https://eips.ethereum.org/EIPS/eip-1102',
            sendDeprecation: 'Torus: "ethereum.send(...)" is deprecated and may be removed in the future. Please use "ethereum.sendAsync(...)" or "ethereum.request(...)" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
            events: {
              close: 'Torus: The event "close" is deprecated and may be removed in the future. Please use "disconnect" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
              data: 'Torus: The event "data" is deprecated and will be removed in the future.Use "message" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message',
              networkChanged: 'Torus: The event "networkChanged" is deprecated and may be removed in the future. Please use "chainChanged" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
              notification: 'Torus: The event "notification" is deprecated and may be removed in the future. Please use "message" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193'
            },
            publicConfigStore: 'Torus: The property "publicConfigStore" is deprecated and WILL be removed in the future.'
          }
        };
        function te(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            }))), r.push.apply(r, n);
          }
          return r;
        }
        function re(e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2 ? te(Object(n), !0).forEach((function(r) {
              t(e, r, n[r]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            }));
          }
          return e;
        }
        class ne extends O {
          constructor(e) {
            super(), t(this, "_state", void 0), this._state = void 0 === e ? {} : e;
          }
          getState() {
            return this._getState();
          }
          putState(e) {
            this._putState(e), this.emit("update", e);
          }
          updateState(e) {
            if (e && "object" == typeof e) {
              const t = this.getState();
              this.putState(re(re({}, t), e));
            } else this.putState(e);
          }
          subscribe(e) {
            this.on("update", e);
          }
          unsubscribe(e) {
            this.removeListener("update", e);
          }
          _getState() {
            return this._state;
          }
          _putState(e) {
            this._state = e;
          }
        }
        class ie extends h.Duplex {
          constructor(e) {
            super({
              objectMode: !0
            }), t(this, "handler", void 0), t(this, "obsStore", void 0), this.resume(), this.handler = e => this.push(e), this.obsStore = e, 
            this.obsStore.subscribe(this.handler);
          }
          pipe(e, t) {
            const r = super.pipe(e, t);
            return e.write(this.obsStore.getState()), r;
          }
          _write(e, t, r) {
            this.obsStore.putState(e), r();
          }
          _read(e) {}
          _destroy(e, t) {
            this.obsStore.unsubscribe(this.handler), super._destroy(e, t);
          }
        }
        function oe(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            }))), r.push.apply(r, n);
          }
          return r;
        }
        function se(e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2 ? oe(Object(n), !0).forEach((function(r) {
              t(e, r, n[r]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oe(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            }));
          }
          return e;
        }
        const {paymentProviders: ae} = K;
        function le(e, t, r) {
          let n = `MetaMask: Lost connection to "${e}".`;
          null != t && t.stack && (n += `\n${t.stack}`), Q.warn(n), r && r.listenerCount("error") > 0 && r.emit("error", n);
        }
        const ue = () => Math.random().toString(36).slice(2), ce = async (e, t) => {
          let r, n;
          const i = "2.2.7";
          let o = t.version || i;
          try {
            if (("binance" === e || "production" === e) && !t.version) {
              let e;
              e = K.prodTorusUrl ? {
                data: K.prodTorusUrl
              } : await f(`${K.api}/latestversion?name=@toruslabs/torus-embed&version=${i}`, {}, {
                useAPIKey: !0
              }), o = e.data, K.prodTorusUrl = e.data;
            }
          } catch (e) {
            Q.error(e, "unable to fetch latest version");
          }
          switch (Q.info("version used: ", o), e) {
           case "binance":
            r = `https://binance.tor.us/v${o}`, n = "info";
            break;

           case "testing":
            r = "https://testing.tor.us", n = "debug";
            break;

           case "bnb":
            r = "https://bnb.tor.us", n = "error";
            break;

           case "polygon":
            r = "https://polygon.tor.us", n = "error";
            break;

           case "lrc":
            r = "https://lrc.tor.us", n = "debug";
            break;

           case "beta":
            r = "https://beta.tor.us", n = "debug";
            break;

           case "development":
            r = "http://localhost:4050", n = "debug";
            break;

           case "alpha":
            r = "https://alpha.tor.us", n = "debug";
            break;

           default:
            r = `https://app.tor.us/v${o}`, n = "error";
          }
          return {
            torusUrl: r,
            logLevel: n
          };
        }, de = () => {
          let e = window.navigator.language || "en-US";
          const t = e.split("-");
          return e = Object.prototype.hasOwnProperty.call(K.translations, t[0]) ? t[0] : "en", e;
        }, fe = [ "eth_subscription" ], he = () => {}, pe = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=660,width=375", ye = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=450";
        function ge(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            }))), r.push.apply(r, n);
          }
          return r;
        }
        function be(e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ge(Object(n), !0).forEach((function(r) {
              t(e, r, n[r]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ge(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            }));
          }
          return e;
        }
        O.defaultMaxListeners = 100;
        const me = function(e, t) {
          let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          return (n, i) => n || i.error ? t(n || i.error) : !r || Array.isArray(i) ? e(i) : e(i.result);
        };
        class we extends O {
          constructor(e) {
            let {maxEventListeners: r = 100, shouldSendMetadata: n = !0, jsonRpcStreamName: i = "provider"} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (super(), t(this, "chainId", void 0), t(this, "selectedAddress", void 0), t(this, "_rpcEngine", void 0), t(this, "networkVersion", void 0), 
            t(this, "shouldSendMetadata", void 0), t(this, "isTorus", void 0), t(this, "_publicConfigStore", void 0), t(this, "tryPreopenHandle", void 0), 
            t(this, "enable", void 0), t(this, "_state", void 0), t(this, "_jsonRpcConnection", void 0), t(this, "_sentWarnings", {
              enable: !1,
              experimentalMethods: !1,
              send: !1,
              publicConfigStore: !1,
              events: {
                close: !1,
                data: !1,
                networkChanged: !1,
                notification: !1
              }
            }), !(0, Z.duplex)(e)) throw new Error(ee.errors.invalidDuplexStream());
            this.isTorus = !0, this.setMaxListeners(r), this._state = be({}, we._defaultState), this.selectedAddress = null, this.networkVersion = null, 
            this.chainId = null, this.shouldSendMetadata = n, this._handleAccountsChanged = this._handleAccountsChanged.bind(this), 
            this._handleChainChanged = this._handleChainChanged.bind(this), this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this), 
            this._handleConnect = this._handleConnect.bind(this), this._handleDisconnect = this._handleDisconnect.bind(this), this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this), 
            this._sendSync = this._sendSync.bind(this), this._rpcRequest = this._rpcRequest.bind(this), this._warnOfDeprecation = this._warnOfDeprecation.bind(this), 
            this._initializeState = this._initializeState.bind(this), this.request = this.request.bind(this), this.send = this.send.bind(this), 
            this.sendAsync = this.sendAsync.bind(this);
            const o = new j;
            var s;
            S()(e, o, e, this._handleStreamDisconnect.bind(this, "MetaMask")), this._publicConfigStore = new ne({
              storageKey: "Metamask-Config"
            }), S()(o.createStream("publicConfig"), (s = this._publicConfigStore, new ie(s)), le.bind(this, "MetaMask PublicConfigStore")), 
            o.ignoreStream("phishing"), this.on("connect", (() => {
              this._state.isConnected = !0;
            }));
            const a = function() {
              const e = {}, t = new O, r = new h.Duplex({
                objectMode: !0,
                read: function() {
                  return !1;
                },
                write: function(r, n, i) {
                  let o;
                  try {
                    r.id ? function(t) {
                      const r = e[t.id];
                      if (!r) throw new Error(`StreamMiddleware - Unknown response id "${t.id}"`);
                      delete e[t.id], Object.assign(r.res, t), setTimeout(r.end);
                    }(r) : function(e) {
                      t.emit("notification", e);
                    }(r);
                  } catch (e) {
                    o = e;
                  }
                  i(o);
                }
              });
              return {
                events: t,
                middleware: (t, n, i, o) => {
                  r.push(t), e[t.id] = {
                    req: t,
                    res: n,
                    next: i,
                    end: o
                  };
                },
                stream: r
              };
            }();
            S()(a.stream, o.createStream(i), a.stream, this._handleStreamDisconnect.bind(this, "MetaMask RpcProvider"));
            const l = new P;
            l.push(((e, t, r, n) => {
              const i = e.id, o = Math.random().toString(36).slice(2);
              e.id = o, t.id = o, r((r => {
                e.id = i, t.id = i, r();
              }));
            })), l.push(((e, t, r) => {
              "string" == typeof e.method && e.method || (t.error = b.PY.invalidRequest({
                message: "The request 'method' must be a non-empty string.",
                data: se(se({}, e || {}), {}, {
                  cause: "The request 'method' must be a non-empty string."
                })
              })), r((e => {
                const {error: r} = t;
                return r ? (Q.error(`MetaMask - RPC Error: ${r.message}`, r), e()) : e();
              }));
            })), l.push(a.middleware), this._rpcEngine = l, a.events.on("notification", (e => {
              const {method: t, params: r} = e;
              "wallet_accountsChanged" === t ? this._handleAccountsChanged(r) : "wallet_unlockStateChanged" === t ? this._handleUnlockStateChanged(r) : "wallet_chainChanged" === t ? this._handleChainChanged(r) : fe.includes(e.method) && (this.emit("data", e), 
              this.emit("notification", r.result), this.emit("message", {
                type: t,
                data: r
              }));
            }));
          }
          get publicConfigStore() {
            return this._sentWarnings.publicConfigStore || (Q.warn(ee.warnings.publicConfigStore), this._sentWarnings.publicConfigStore = !0), 
            this._publicConfigStore;
          }
          isConnected() {
            return this._state.isConnected;
          }
          async request(e) {
            if (!e || "object" != typeof e || Array.isArray(e)) throw b.PY.invalidRequest({
              message: ee.errors.invalidRequestArgs(),
              data: be(be({}, e || {}), {}, {
                cause: ee.errors.invalidRequestArgs()
              })
            });
            const {method: t, params: r} = e;
            if ("string" != typeof t || 0 === t.length) throw b.PY.invalidRequest({
              message: ee.errors.invalidRequestMethod(),
              data: be(be({}, e || {}), {}, {
                cause: ee.errors.invalidRequestArgs()
              })
            });
            if (void 0 !== r && !Array.isArray(r) && ("object" != typeof r || null === r)) throw b.PY.invalidRequest({
              message: ee.errors.invalidRequestParams(),
              data: be(be({}, e || {}), {}, {
                cause: ee.errors.invalidRequestArgs()
              })
            });
            return new Promise(((e, n) => {
              this._rpcRequest({
                method: t,
                params: r
              }, me(e, n));
            }));
          }
          sendAsync(e, t) {
            this._rpcRequest(e, t);
          }
          addListener(e, t) {
            return this._warnOfDeprecation(e), super.addListener(e, t);
          }
          on(e, t) {
            return this._warnOfDeprecation(e), super.on(e, t);
          }
          once(e, t) {
            return this._warnOfDeprecation(e), super.once(e, t);
          }
          prependListener(e, t) {
            return this._warnOfDeprecation(e), super.prependListener(e, t);
          }
          prependOnceListener(e, t) {
            return this._warnOfDeprecation(e), super.prependOnceListener(e, t);
          }
          async _initializeState() {
            try {
              const {accounts: e, chainId: t, isUnlocked: r, networkVersion: n} = await this.request({
                method: "wallet_getProviderState"
              });
              this.emit("connect", {
                chainId: t
              }), this._handleChainChanged({
                chainId: t,
                networkVersion: n
              }), this._handleUnlockStateChanged({
                accounts: e,
                isUnlocked: r
              }), this._handleAccountsChanged(e);
            } catch (e) {
              Q.error("MetaMask: Failed to get initial state. Please report this bug.", e);
            } finally {
              Q.info("initialized state"), this._state.initialized = !0, this.emit("_initialized");
            }
          }
          _rpcRequest(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = t;
            const i = e;
            if (!Array.isArray(i)) if (i.jsonrpc || (i.jsonrpc = "2.0"), "eth_accounts" === i.method || "eth_requestAccounts" === i.method) n = (e, n) => {
              this._handleAccountsChanged(n.result || [], "eth_accounts" === i.method, r), t(e, n);
            }; else if ("wallet_getProviderState" === i.method) return void this._rpcEngine.handle(e, n);
            this.tryPreopenHandle(i, n);
          }
          send(e, t) {
            return this._sentWarnings.send || (Q.warn(ee.warnings.sendDeprecation), this._sentWarnings.send = !0), "string" != typeof e || t && !Array.isArray(t) ? e && "object" == typeof e && "function" == typeof t ? this._rpcRequest(e, t) : this._sendSync(e) : new Promise(((r, n) => {
              try {
                this._rpcRequest({
                  method: e,
                  params: t
                }, me(r, n, !1));
              } catch (e) {
                n(e);
              }
            }));
          }
          _sendSync(e) {
            let t;
            switch (e.method) {
             case "eth_accounts":
              t = this.selectedAddress ? [ this.selectedAddress ] : [];
              break;

             case "eth_coinbase":
              t = this.selectedAddress || null;
              break;

             case "eth_uninstallFilter":
              this._rpcRequest(e, he), t = !0;
              break;

             case "net_version":
              t = this.networkVersion || null;
              break;

             default:
              throw new Error(ee.errors.unsupportedSync(e.method));
            }
            return {
              id: e.id,
              jsonrpc: e.jsonrpc,
              result: t
            };
          }
          _handleConnect(e) {
            this._state.isConnected || (this._state.isConnected = !0, this.emit("connect", {
              chainId: e
            }), Q.debug(ee.info.connected(e)));
          }
          _handleDisconnect(e, t) {
            if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !e) {
              let r;
              this._state.isConnected = !1, e ? (r = new b.yd(1013, t || ee.errors.disconnected()), Q.debug(r)) : (r = new b.yd(1011, t || ee.errors.permanentlyDisconnected()), 
              Q.error(r), this.chainId = null, this._state.accounts = null, this.selectedAddress = null, this._state.isUnlocked = !1, 
              this._state.isPermanentlyDisconnected = !0), this.emit("disconnect", r);
            }
          }
          _handleStreamDisconnect(e, t) {
            le(e, t, this), this._handleDisconnect(!1, t ? t.message : void 0);
          }
          _handleAccountsChanged(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = e;
            Array.isArray(n) || (Q.error("MetaMask: Received non-array accounts parameter. Please report this bug.", n), n = []);
            for (const i of e) if ("string" != typeof i) {
              Q.error("MetaMask: Received non-string account. Please report this bug.", e), n = [];
              break;
            }
            Y()(this._state.accounts, n) || (t && Array.isArray(this._state.accounts) && this._state.accounts.length > 0 && !r && Q.error('MetaMask: "eth_accounts" unexpectedly updated accounts. Please report this bug.', n), 
            this._state.accounts = n, this.emit("accountsChanged", n)), this.selectedAddress !== n[0] && (this.selectedAddress = n[0] || null);
          }
          _handleChainChanged() {
            let {chainId: e, networkVersion: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e && t ? "loading" === t ? this._handleDisconnect(!0) : (this._handleConnect(e), e !== this.chainId && (this.chainId = e, 
            this._state.initialized && this.emit("chainChanged", this.chainId))) : Q.error("MetaMask: Received invalid network parameters. Please report this bug.", {
              chainId: e,
              networkVersion: t
            });
          }
          _handleUnlockStateChanged() {
            let {accounts: e, isUnlocked: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            "boolean" == typeof t ? t !== this._state.isUnlocked && (this._state.isUnlocked = t, this._handleAccountsChanged(e || [])) : Q.error("MetaMask: Received invalid isUnlocked parameter. Please report this bug.", {
              isUnlocked: t
            });
          }
          _warnOfDeprecation(e) {
            !1 === this._sentWarnings.events[e] && (Q.warn(ee.warnings.events[e]), this._sentWarnings.events[e] = !0);
          }
        }
        t(we, "_defaultState", {
          accounts: null,
          isConnected: !1,
          isUnlocked: !1,
          initialized: !1,
          isPermanentlyDisconnected: !1,
          hasEmittedConnection: !1
        });
        const ve = we;
        class _e extends p.EventEmitter {
          constructor(e) {
            let {url: r, target: n, features: i} = e;
            super(), t(this, "url", void 0), t(this, "target", void 0), t(this, "features", void 0), t(this, "window", void 0), t(this, "windowTimer", void 0), 
            t(this, "iClosedWindow", void 0), this.url = r, this.target = n || "_blank", this.features = i || function() {
              const e = void 0 !== window.screenLeft ? window.screenLeft : window.screenX, t = void 0 !== window.screenTop ? window.screenTop : window.screenY, r = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width, n = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height, i = Math.abs((r - 1200) / 2 / 1 + e);
              return `titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=1200,top=${Math.abs((n - 700) / 2 / 1 + t)},left=${i}`;
            }(), this.window = void 0, this.windowTimer = void 0, this.iClosedWindow = !1, this._setupTimer();
          }
          _setupTimer() {
            this.windowTimer = Number(setInterval((() => {
              this.window && this.window.closed && (clearInterval(this.windowTimer), this.iClosedWindow || this.emit("close"), this.iClosedWindow = !1, 
              this.window = void 0), void 0 === this.window && clearInterval(this.windowTimer);
            }), 500));
          }
          open() {
            var e;
            this.window = window.open(this.url.href, this.target, this.features), null !== (e = this.window) && void 0 !== e && e.focus && this.window.focus();
          }
          close() {
            this.iClosedWindow = !0, this.window && this.window.close();
          }
          redirect(e) {
            e ? window.location.replace(this.url.href) : window.location.href = this.url.href;
          }
        }
        const Ee = _e;
        function Se(e) {
          return new Promise(((t, r) => {
            try {
              const r = document.createElement("img");
              r.onload = () => t(!0), r.onerror = () => t(!1), r.src = e;
            } catch (e) {
              r(e);
            }
          }));
        }
        const Re = e => {
          const {document: t} = e, r = t.querySelector('head > meta[property="og:site_name"]');
          if (r) return r.content;
          const n = t.querySelector('head > meta[name="title"]');
          return n ? n.content : t.title && t.title.length > 0 ? t.title : e.location.hostname;
        };
        async function Ae(e) {
          const {document: t} = e;
          let r = t.querySelector('head > link[rel="shortcut icon"]');
          return r && await Se(r.href) ? r.href : (r = Array.from(t.querySelectorAll('head > link[rel="icon"]')).find((e => Boolean(e.href))), 
          r && await Se(r.href) ? r.href : null);
        }
        var Ie = r(8764).Buffer;
        const Te = [ "host", "chainId", "networkName" ];
        function Oe(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            }))), r.push.apply(r, n);
          }
          return r;
        }
        function Ce(e) {
          for (var r = 1; r < arguments.length; r++) {
            var n = null != arguments[r] ? arguments[r] : {};
            r % 2 ? Oe(Object(n), !0).forEach((function(r) {
              t(e, r, n[r]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oe(Object(n)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            }));
          }
          return e;
        }
        const Ne = [ "eth_sendTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign", "eth_getEncryptionPublicKey", "eth_decrypt", "wallet_addEthereumChain", "wallet_switchEthereumChain" ];
        !async function() {
          try {
            if ("undefined" == typeof document) return;
            const e = document.createElement("link"), {torusUrl: t} = await ce("production", {
              version: ""
            });
            e.href = `${t}/popup`, e.crossOrigin = "anonymous", e.type = "text/html", e.rel = "prefetch", e.relList && e.relList.supports && e.relList.supports("prefetch") && document.head.appendChild(e);
          } catch (e) {
            Q.warn(e);
          }
        }();
        const Pe = class {
          constructor() {
            let {buttonPosition: e = W.BOTTOM_LEFT, buttonSize: r = 56, modalZIndex: n = 99999, apiKey: i = "torus-default"} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, "buttonPosition", W.BOTTOM_LEFT), t(this, "buttonSize", void 0), t(this, "torusUrl", void 0), t(this, "torusIframe", void 0), 
            t(this, "styleLink", void 0), t(this, "isLoggedIn", void 0), t(this, "isInitialized", void 0), t(this, "torusWidgetVisibility", void 0), 
            t(this, "torusAlert", void 0), t(this, "apiKey", void 0), t(this, "modalZIndex", void 0), t(this, "alertZIndex", void 0), 
            t(this, "torusAlertContainer", void 0), t(this, "isIframeFullScreen", void 0), t(this, "whiteLabel", void 0), t(this, "requestedVerifier", void 0), 
            t(this, "currentVerifier", void 0), t(this, "embedTranslations", void 0), t(this, "ethereum", void 0), t(this, "provider", void 0), 
            t(this, "communicationMux", void 0), t(this, "isLoginCallback", void 0), t(this, "paymentProviders", K.paymentProviders), 
            t(this, "loginHint", ""), t(this, "useWalletConnect", void 0), t(this, "isCustomLogin", !1), this.buttonPosition = e, this.buttonSize = r, 
            this.torusUrl = "", this.isLoggedIn = !1, this.isInitialized = !1, this.torusWidgetVisibility = !0, this.requestedVerifier = "", 
            this.currentVerifier = "", this.apiKey = i, function(e) {
              d = e;
            }(i), this.modalZIndex = n, this.alertZIndex = n + 1e3, this.isIframeFullScreen = !1;
          }
          async init() {
            let {buildEnv: e = F.PRODUCTION, enableLogging: t = !1, network: r = {
              host: "mainnet",
              chainId: null,
              networkName: "",
              blockExplorer: "",
              ticker: "",
              tickerName: ""
            }, loginConfig: n = {}, showTorusButton: i = !0, integrity: s = {
              version: ""
            }, whiteLabel: a, useWalletConnect: l = !1, mfaLevel: u = "default"} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (this.isInitialized) throw new Error("Already initialized");
            const {torusUrl: c, logLevel: d} = await ce(e, s);
            Q.info(c, "url loaded"), this.torusUrl = c, this.whiteLabel = a, this.useWalletConnect = l, this.isCustomLogin = !!(n && Object.keys(n).length > 0) || !!(a && Object.keys(a).length > 0), 
            Q.setDefaultLevel(d), t ? Q.enableAll() : Q.disableAll(), this.torusWidgetVisibility = i;
            const f = new URL(c);
            f.pathname.endsWith("/") ? f.pathname += "popup" : f.pathname += "/popup", f.hash = `#isCustomLogin=${this.isCustomLogin}`, 
            this.torusIframe = z(`<iframe\n        id="torusIframe"\n        allow=${l ? "camera" : ""}\n        class="torusIframe"\n        src="${f.href}"\n        style="display: none; position: fixed; top: 0; right: 0; width: 100%; color-scheme: none;\n        height: 100%; border: none; border-radius: 0; z-index: ${this.modalZIndex}"\n      ></iframe>`), 
            this.torusAlertContainer = z('<div id="torusAlertContainer"></div>'), this.torusAlertContainer.style.display = "none", this.torusAlertContainer.style.setProperty("z-index", this.alertZIndex.toString());
            const h = window.document.createElement("link");
            h.setAttribute("rel", "stylesheet"), h.setAttribute("type", "text/css"), h.setAttribute("href", `${c}/css/widget.css`), 
            this.styleLink = h;
            const {defaultLanguage: p = de(), customTranslations: y = {}} = this.whiteLabel || {}, g = o()(K.translations, y)[p] || K.translations[de()];
            return this.embedTranslations = g.embed, new Promise(((e, t) => {
              this.torusIframe.onload = async () => {
                this._setupWeb3();
                const i = this.communicationMux.getStream("init_stream");
                i.on("data", (r => {
                  const {name: n, data: i, error: o} = r;
                  "init_complete" === n && i.success ? (this.isInitialized = !0, this._displayIframe(this.isIframeFullScreen), e(void 0)) : o && t(new Error(o));
                })), i.write({
                  name: "init_stream",
                  data: {
                    loginConfig: n,
                    whiteLabel: this.whiteLabel,
                    buttonPosition: this.buttonPosition,
                    buttonSize: this.buttonSize,
                    torusWidgetVisibility: this.torusWidgetVisibility,
                    apiKey: this.apiKey,
                    network: r,
                    mfaLevel: u
                  }
                });
              }, window.document.head.appendChild(this.styleLink), window.document.body.appendChild(this.torusIframe), window.document.body.appendChild(this.torusAlertContainer);
            }));
          }
          login() {
            let {verifier: e = "", login_hint: t = ""} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!this.isInitialized) throw new Error("Call init() first");
            return this.requestedVerifier = e, this.loginHint = t, this.ethereum.enable();
          }
          logout() {
            return new Promise(((e, t) => {
              if (!this.isLoggedIn) return void t(new Error("User has not logged in yet"));
              this.communicationMux.getStream("logout").write({
                name: "logOut"
              });
              const r = this.communicationMux.getStream("status");
              q(r, "data", (r => {
                r.loggedIn ? t(new Error("Some Error Occured")) : (this.isLoggedIn = !1, this.currentVerifier = "", this.requestedVerifier = "", 
                e());
              }));
            }));
          }
          async cleanUp() {
            this.isLoggedIn && await this.logout(), this.clearInit();
          }
          clearInit() {
            function e(e) {
              return e instanceof Element || e instanceof HTMLDocument;
            }
            e(this.styleLink) && window.document.body.contains(this.styleLink) && (this.styleLink.remove(), this.styleLink = void 0), 
            e(this.torusIframe) && window.document.body.contains(this.torusIframe) && (this.torusIframe.remove(), this.torusIframe = void 0), 
            e(this.torusAlertContainer) && window.document.body.contains(this.torusAlertContainer) && (this.torusAlert = void 0, this.torusAlertContainer.remove(), 
            this.torusAlertContainer = void 0), this.isInitialized = !1;
          }
          hideTorusButton() {
            this.torusWidgetVisibility = !1, this._sendWidgetVisibilityStatus(!1), this._displayIframe();
          }
          showTorusButton() {
            this.torusWidgetVisibility = !0, this._sendWidgetVisibilityStatus(!0), this._displayIframe();
          }
          setProvider(e) {
            let {host: t = "mainnet", chainId: r = null, networkName: n = ""} = e, i = function(e, t) {
              if (null == e) return {};
              var r, n, i = function(e, t) {
                if (null == e) return {};
                var r, n, i = {}, o = Object.keys(e);
                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i;
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
              }
              return i;
            }(e, Te);
            return new Promise(((e, o) => {
              const s = this.communicationMux.getStream("provider_change");
              q(s, "data", (t => {
                const {err: r, success: n} = t.data;
                Q.info(t), r ? o(r) : n ? e() : o(new Error("some error occurred"));
              }));
              const a = ue();
              this._handleWindow(a, {
                target: "_blank",
                features: pe
              }), s.write({
                name: "show_provider_change",
                data: {
                  network: Ce({
                    host: t,
                    chainId: r,
                    networkName: n
                  }, i),
                  preopenInstanceId: a,
                  override: !1
                }
              });
            }));
          }
          showWallet(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const r = this.communicationMux.getStream("show_wallet"), n = e ? `/${e}` : "";
            r.write({
              name: "show_wallet",
              data: {
                path: n
              }
            }), q(r, "data", (e => {
              if ("show_wallet_instance" === e.name) {
                const {instanceId: r} = e.data, i = new URL(`${this.torusUrl}/wallet${n}`);
                i.searchParams.append("integrity", "true"), i.searchParams.append("instanceId", r), Object.keys(t).forEach((e => {
                  i.searchParams.append(e, t[e]);
                })), i.hash = `#isCustomLogin=${this.isCustomLogin}`, new Ee({
                  url: i,
                  features: "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=740,width=1315"
                }).open();
              }
            }));
          }
          async getPublicAddress(e) {
            let {verifier: t, verifierId: r, isExtended: n = !1} = e;
            if (!K.supportedVerifierList.includes(t) || !$[t]) throw new Error("Unsupported verifier");
            const i = t, o = $[t], s = new URL("https://api.tor.us/lookup/torus");
            return s.searchParams.append("verifier", o), s.searchParams.append("verifierId", r), s.searchParams.append("walletVerifier", i), 
            s.searchParams.append("network", "mainnet"), s.searchParams.append("isExtended", n.toString()), f(s.href, {
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            }, {
              useAPIKey: !0
            });
          }
          getUserInfo(e) {
            return new Promise(((t, r) => {
              if (this.isLoggedIn) {
                const n = this.communicationMux.getStream("user_info_access");
                n.write({
                  name: "user_info_access_request"
                });
                const i = n => {
                  const {name: i, data: {approved: o, payload: s, rejected: a, newRequest: l}} = n;
                  if ("user_info_access_response" === i) if (o) t(s); else if (a) r(new Error("User rejected the request")); else if (l) {
                    const n = this.communicationMux.getStream("user_info");
                    q(n, "data", (e => {
                      "user_info_response" === e.name && (e.data.approved ? t(e.data.payload) : r(new Error("User rejected the request")));
                    }));
                    const i = ue();
                    this._handleWindow(i, {
                      target: "_blank",
                      features: pe
                    }), n.write({
                      name: "user_info_request",
                      data: {
                        message: e,
                        preopenInstanceId: i
                      }
                    });
                  }
                };
                q(n, "data", i);
              } else r(new Error("User has not logged in yet"));
            }));
          }
          initiateTopup(e, t) {
            return new Promise(((r, n) => {
              if (this.isInitialized) {
                const {errors: i, isValid: o} = ((e, t) => {
                  const r = {};
                  if (!e) return {
                    errors: r,
                    isValid: !0
                  };
                  if (e && !ae[e]) return r.provider = "Invalid Provider", {
                    errors: r,
                    isValid: 0 === Object.keys(r).length
                  };
                  const n = ae[e], i = t || {};
                  if (i.fiatValue) {
                    const e = +parseFloat(i.fiatValue.toString()) || 0;
                    e < n.minOrderValue && (r.fiatValue = "Requested amount is lower than supported"), e > n.maxOrderValue && n.enforceMax && (r.fiatValue = "Requested amount is higher than supported");
                  }
                  if (i.selectedCurrency && !n.validCurrencies.includes(i.selectedCurrency) && (r.selectedCurrency = "Unsupported currency"), 
                  i.selectedCryptoCurrency) {
                    const t = Object.values(n.validCryptoCurrenciesByChain).flat().map((e => e.value)), o = e === U.MOONPAY ? i.selectedCryptoCurrency.toLowerCase() : i.selectedCryptoCurrency;
                    t && !t.includes(o) && (r.selectedCryptoCurrency = "Unsupported cryptoCurrency");
                  }
                  return {
                    errors: r,
                    isValid: 0 === Object.keys(r).length
                  };
                })(e, t);
                if (!o) return void n(new Error(JSON.stringify(i)));
                const s = this.communicationMux.getStream("topup");
                q(s, "data", (e => {
                  "topup_response" === e.name && (e.data.success ? r(e.data.success) : n(new Error(e.data.error)));
                }));
                const a = ue();
                this._handleWindow(a), s.write({
                  name: "topup_request",
                  data: {
                    provider: e,
                    params: t,
                    preopenInstanceId: a
                  }
                });
              } else n(new Error("Torus is not initialized yet"));
            }));
          }
          async loginWithPrivateKey(e) {
            const {privateKey: t, userInfo: r} = e;
            return new Promise(((e, n) => {
              if (this.isInitialized) {
                if (32 !== Ie.from(t, "hex").length) return void n(new Error("Invalid private key, Please provide a 32 byte valid secp25k1 private key"));
                const i = this.communicationMux.getStream("login_with_private_key");
                q(i, "data", (t => {
                  "login_with_private_key_response" === t.name && (t.data.success ? e(t.data.success) : n(new Error(t.data.error)));
                })), i.write({
                  name: "login_with_private_key_request",
                  data: {
                    privateKey: t,
                    userInfo: r
                  }
                });
              } else n(new Error("Torus is not initialized yet"));
            }));
          }
          async showWalletConnectScanner() {
            if (!this.useWalletConnect) throw new Error("Set `useWalletConnect` as true in init function options to use wallet connect scanner");
            return new Promise(((e, t) => {
              if (this.isLoggedIn) {
                const r = this.communicationMux.getStream("wallet_connect_stream");
                q(r, "data", (r => {
                  "wallet_connect_stream_res" === r.name && (r.data.success ? e(r.data.success) : t(new Error(r.data.error)), this._displayIframe());
                })), r.write({
                  name: "wallet_connect_stream_req"
                }), this._displayIframe(!0);
              } else t(new Error("User has not logged in yet"));
            }));
          }
          _handleWindow(e) {
            let {url: t, target: r, features: n} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (e) {
              const i = this.communicationMux.getStream("window"), o = new URL(t || `${this.torusUrl}/redirect?preopenInstanceId=${e}`);
              o.hash ? o.hash += `&isCustomLogin=${this.isCustomLogin}` : o.hash = `#isCustomLogin=${this.isCustomLogin}`;
              const s = new Ee({
                url: o,
                target: r,
                features: n
              });
              if (s.open(), !s.window) return void this._createPopupBlockAlert(e, o.href);
              i.write({
                name: "opened_window",
                data: {
                  preopenInstanceId: e
                }
              });
              const a = t => {
                let {preopenInstanceId: r, close: n} = t;
                r === e && n && (s.close(), i.removeListener("data", a));
              };
              i.on("data", a), s.once("close", (() => {
                i.write({
                  data: {
                    preopenInstanceId: e,
                    closed: !0
                  }
                }), i.removeListener("data", a);
              }));
            }
          }
          _setEmbedWhiteLabel(e) {
            const {theme: t} = this.whiteLabel || {};
            if (t) {
              const {isDark: r = !1, colors: n = {}} = t;
              r && e.classList.add("torus-dark"), n.torusBrand1 && e.style.setProperty("--torus-brand-1", n.torusBrand1), n.torusGray2 && e.style.setProperty("--torus-gray-2", n.torusGray2);
            }
          }
          _getLogoUrl() {
            var e, t;
            let r = `${this.torusUrl}/images/torus_icon-blue.svg`;
            var n, i;
            return r = null !== (e = this.whiteLabel) && void 0 !== e && null !== (t = e.theme) && void 0 !== t && t.isDark ? (null === (n = this.whiteLabel) || void 0 === n ? void 0 : n.logoLight) || r : (null === (i = this.whiteLabel) || void 0 === i ? void 0 : i.logoDark) || r, 
            r;
          }
          _sendWidgetVisibilityStatus(e) {
            this.communicationMux.getStream("torus-widget-visibility").write({
              data: e
            });
          }
          _displayIframe() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            const t = {}, r = this.buttonSize + 14;
            if (e) t.display = "block", t.width = "100%", t.height = "100%", t.top = "0px", t.right = "0px", t.left = "0px", t.bottom = "0px"; else switch (t.display = this.torusWidgetVisibility ? "block" : "none", 
            t.height = `${r}px`, t.width = `${r}px`, this.buttonPosition) {
             case W.TOP_LEFT:
              t.top = "0px", t.left = "0px", t.right = "auto", t.bottom = "auto";
              break;

             case W.TOP_RIGHT:
              t.top = "0px", t.right = "0px", t.left = "auto", t.bottom = "auto";
              break;

             case W.BOTTOM_RIGHT:
              t.bottom = "0px", t.right = "0px", t.top = "auto", t.left = "auto";
              break;

             case W.BOTTOM_LEFT:
             default:
              t.bottom = "0px", t.left = "0px", t.top = "auto", t.right = "auto";
            }
            Object.assign(this.torusIframe.style, t), this.isIframeFullScreen = e;
          }
          _setupWeb3() {
            Q.info("setupWeb3 running");
            const e = new I({
              name: "embed_metamask",
              target: "iframe_metamask",
              targetWindow: this.torusIframe.contentWindow,
              targetOrigin: new URL(this.torusUrl).origin
            }), t = new I({
              name: "embed_comm",
              target: "iframe_comm",
              targetWindow: this.torusIframe.contentWindow,
              targetOrigin: new URL(this.torusUrl).origin
            }), r = new ve(e), n = e => {
              const t = r[e];
              r[e] = function(e) {
                if (e && "eth_requestAccounts" === e) return r.enable();
                for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                return t.apply(this, [ e, ...i ]);
              };
            };
            n("send"), n("sendAsync"), r.enable = () => new Promise(((e, t) => {
              r.sendAsync({
                jsonrpc: "2.0",
                id: ue(),
                method: "eth_requestAccounts",
                params: []
              }, ((r, n) => {
                const {result: i} = n || {};
                if (r) setTimeout((() => {
                  t(r);
                }), 50); else if (Array.isArray(i) && i.length > 0) {
                  const r = () => {
                    if ("" !== this.requestedVerifier && this.currentVerifier !== this.requestedVerifier) {
                      const {requestedVerifier: r} = this;
                      this.logout().then((n => {
                        this.requestedVerifier = r, this._showLoginPopup(!0, e, t);
                      })).catch((e => t(e)));
                    } else e(i);
                  };
                  this.isLoggedIn ? r() : this.isLoginCallback = r;
                } else this._showLoginPopup(!0, e, t);
              }));
            })), r.tryPreopenHandle = (e, t) => {
              const n = e;
              if (!Array.isArray(n) && Ne.includes(n.method)) {
                const e = ue();
                this._handleWindow(e, {
                  target: "_blank",
                  features: ye
                }), n.preopenInstanceId = e;
              }
              r._rpcEngine.handle(n, t);
            };
            const i = new Proxy(r, {
              deleteProperty: () => !0
            });
            this.ethereum = i;
            const o = function(e) {
              const t = new j;
              return t.getStream = function(e) {
                return this._substreams[e] ? this._substreams[e] : this.createStream(e);
              }, S()(e, t, e, (e => {
                e && window.console.error(e);
              })), t;
            }(t);
            this.communicationMux = o, o.getStream("window").on("data", (e => {
              "create_window" === e.name && this._createPopupBlockAlert(e.data.preopenInstanceId, e.data.url);
            })), o.getStream("widget").on("data", (e => {
              const {data: t} = e;
              this._displayIframe(t);
            })), o.getStream("status").on("data", (e => {
              e.loggedIn ? (this.isLoggedIn = e.loggedIn, this.currentVerifier = e.verifier) : this._displayIframe(), this.isLoginCallback && (this.isLoginCallback(), 
              delete this.isLoginCallback);
            })), this.provider = i, this.provider.shouldSendMetadata && async function(e) {
              try {
                const t = await (async () => ({
                  name: Re(window),
                  icon: await Ae(window)
                }))();
                e.handle({
                  jsonrpc: "2.0",
                  id: ue(),
                  method: "wallet_sendDomainMetadata",
                  params: t
                }, he);
              } catch (e) {
                Q.error({
                  message: ee.errors.sendSiteMetadata(),
                  originalError: e
                });
              }
            }(this.provider._rpcEngine), r._initializeState(), Q.debug("Torus - injected provider");
          }
          _showLoginPopup(e, t, r) {
            const n = e => {
              const {err: n, selectedAddress: i} = e;
              n ? (Q.error(n), r && r(n)) : t && t([ i ]), this.isIframeFullScreen && this._displayIframe();
            }, i = this.communicationMux.getStream("oauth");
            if (this.requestedVerifier) {
              q(i, "data", n);
              const t = ue();
              this._handleWindow(t), i.write({
                name: "oauth",
                data: {
                  calledFromEmbed: e,
                  verifier: this.requestedVerifier,
                  preopenInstanceId: t,
                  login_hint: this.loginHint
                }
              });
            } else this._displayIframe(!0), q(i, "data", n), i.write({
              name: "oauth_modal",
              data: {
                calledFromEmbed: e
              }
            });
          }
          _createPopupBlockAlert(e, t) {
            const r = this._getLogoUrl(), n = z(`<div id="torusAlert" class="torus-alert--v2"><div id="torusAlert__logo"><img src="${r}" /></div><div><h1 id="torusAlert__title">${this.embedTranslations.actionRequired}</h1><p id="torusAlert__desc">${this.embedTranslations.pendingAction}</p></div></div>`), i = z(`<div><a id="torusAlert__btn">${this.embedTranslations.continue}</a></div>`), o = z('<div id="torusAlert__btn-container"></div>');
            o.appendChild(i), n.appendChild(o), this._setEmbedWhiteLabel(n), this.torusAlertContainer.style.display = "block", this.torusAlertContainer.appendChild(n), 
            i.addEventListener("click", (() => {
              this._handleWindow(e, {
                url: t,
                target: "_blank",
                features: ye
              }), n.remove(), 0 === this.torusAlertContainer.children.length && (this.torusAlertContainer.style.display = "none");
            }));
          }
        };
      })(), n;
    })()));
  }
} ]);
//# sourceMappingURL=250.461a3d78.js.map