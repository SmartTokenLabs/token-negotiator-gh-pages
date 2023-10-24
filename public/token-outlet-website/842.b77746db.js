/*! For license information please see 842.b77746db.js.LICENSE.txt */
(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 842 ], {
  4182: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var n = r(20791);
    function i(t, e, r) {
      return void 0 === e && (e = new Uint8Array(2)), void 0 === r && (r = 0), e[r + 0] = t >>> 8, e[r + 1] = t >>> 0, e;
    }
    function s(t, e, r) {
      return void 0 === e && (e = new Uint8Array(2)), void 0 === r && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e;
    }
    function o(t, e) {
      return void 0 === e && (e = 0), t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
    }
    function a(t, e) {
      return void 0 === e && (e = 0), (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0;
    }
    function c(t, e) {
      return void 0 === e && (e = 0), t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e];
    }
    function u(t, e) {
      return void 0 === e && (e = 0), (t[e + 3] << 24 | t[e + 2] << 16 | t[e + 1] << 8 | t[e]) >>> 0;
    }
    function h(t, e, r) {
      return void 0 === e && (e = new Uint8Array(4)), void 0 === r && (r = 0), e[r + 0] = t >>> 24, e[r + 1] = t >>> 16, e[r + 2] = t >>> 8, 
      e[r + 3] = t >>> 0, e;
    }
    function l(t, e, r) {
      return void 0 === e && (e = new Uint8Array(4)), void 0 === r && (r = 0), e[r + 0] = t >>> 0, e[r + 1] = t >>> 8, e[r + 2] = t >>> 16, 
      e[r + 3] = t >>> 24, e;
    }
    function f(t, e, r) {
      return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), h(t / 4294967296 >>> 0, e, r), h(t >>> 0, e, r + 4), 
      e;
    }
    function p(t, e, r) {
      return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), l(t >>> 0, e, r), l(t / 4294967296 >>> 0, e, r + 4), 
      e;
    }
    e.readInt16BE = function(t, e) {
      return void 0 === e && (e = 0), (t[e + 0] << 8 | t[e + 1]) << 16 >> 16;
    }, e.readUint16BE = function(t, e) {
      return void 0 === e && (e = 0), (t[e + 0] << 8 | t[e + 1]) >>> 0;
    }, e.readInt16LE = function(t, e) {
      return void 0 === e && (e = 0), (t[e + 1] << 8 | t[e]) << 16 >> 16;
    }, e.readUint16LE = function(t, e) {
      return void 0 === e && (e = 0), (t[e + 1] << 8 | t[e]) >>> 0;
    }, e.writeUint16BE = i, e.writeInt16BE = i, e.writeUint16LE = s, e.writeInt16LE = s, e.readInt32BE = o, e.readUint32BE = a, 
    e.readInt32LE = c, e.readUint32LE = u, e.writeUint32BE = h, e.writeInt32BE = h, e.writeUint32LE = l, e.writeInt32LE = l, 
    e.readInt64BE = function(t, e) {
      void 0 === e && (e = 0);
      var r = o(t, e);
      var n = o(t, e + 4);
      return 4294967296 * r + n - 4294967296 * (n >> 31);
    }, e.readUint64BE = function(t, e) {
      return void 0 === e && (e = 0), 4294967296 * a(t, e) + a(t, e + 4);
    }, e.readInt64LE = function(t, e) {
      void 0 === e && (e = 0);
      var r = c(t, e);
      return 4294967296 * c(t, e + 4) + r - 4294967296 * (r >> 31);
    }, e.readUint64LE = function(t, e) {
      void 0 === e && (e = 0);
      var r = u(t, e);
      return 4294967296 * u(t, e + 4) + r;
    }, e.writeUint64BE = f, e.writeInt64BE = f, e.writeUint64LE = p, e.writeInt64LE = p, e.readUintBE = function(t, e, r) {
      if (void 0 === r && (r = 0), t % 8 != 0) throw new Error("readUintBE supports only bitLengths divisible by 8");
      if (t / 8 > e.length - r) throw new Error("readUintBE: array is too short for the given bitLength");
      var n = 0;
      var i = 1;
      for (var s = t / 8 + r - 1; s >= r; s--) n += e[s] * i, i *= 256;
      return n;
    }, e.readUintLE = function(t, e, r) {
      if (void 0 === r && (r = 0), t % 8 != 0) throw new Error("readUintLE supports only bitLengths divisible by 8");
      if (t / 8 > e.length - r) throw new Error("readUintLE: array is too short for the given bitLength");
      var n = 0;
      var i = 1;
      for (var s = r; s < r + t / 8; s++) n += e[s] * i, i *= 256;
      return n;
    }, e.writeUintBE = function(t, e, r, i) {
      if (void 0 === r && (r = new Uint8Array(t / 8)), void 0 === i && (i = 0), t % 8 != 0) throw new Error("writeUintBE supports only bitLengths divisible by 8");
      if (!n.isSafeInteger(e)) throw new Error("writeUintBE value must be an integer");
      var s = 1;
      for (var o = t / 8 + i - 1; o >= i; o--) r[o] = e / s & 255, s *= 256;
      return r;
    }, e.writeUintLE = function(t, e, r, i) {
      if (void 0 === r && (r = new Uint8Array(t / 8)), void 0 === i && (i = 0), t % 8 != 0) throw new Error("writeUintLE supports only bitLengths divisible by 8");
      if (!n.isSafeInteger(e)) throw new Error("writeUintLE value must be an integer");
      var s = 1;
      for (var o = i; o < i + t / 8; o++) r[o] = e / s & 255, s *= 256;
      return r;
    }, e.readFloat32BE = function(t, e) {
      return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat32(e);
    }, e.readFloat32LE = function(t, e) {
      return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat32(e, !0);
    }, e.readFloat64BE = function(t, e) {
      return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat64(e);
    }, e.readFloat64LE = function(t, e) {
      return void 0 === e && (e = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).getFloat64(e, !0);
    }, e.writeFloat32BE = function(t, e, r) {
      return void 0 === e && (e = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat32(r, t), 
      e;
    }, e.writeFloat32LE = function(t, e, r) {
      return void 0 === e && (e = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat32(r, t, !0), 
      e;
    }, e.writeFloat64BE = function(t, e, r) {
      return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat64(r, t), 
      e;
    }, e.writeFloat64LE = function(t, e, r) {
      return void 0 === e && (e = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat64(r, t, !0), 
      e;
    };
  },
  85053: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var n = r(4182);
    var i = r(25602);
    function s(t, e, r) {
      var i = 1634760805;
      var s = 857760878;
      var o = 2036477234;
      var a = 1797285236;
      var c = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0];
      var u = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4];
      var h = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8];
      var l = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12];
      var f = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16];
      var p = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20];
      var d = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24];
      var g = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28];
      var y = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0];
      var v = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4];
      var _ = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8];
      var m = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12];
      var b = i;
      var w = s;
      var E = o;
      var S = a;
      var O = c;
      var I = u;
      var P = h;
      var x = l;
      var A = f;
      var N = p;
      var R = d;
      var T = g;
      var j = y;
      var C = v;
      var L = _;
      var U = m;
      for (var M = 0; M < 20; M += 2) O = (O ^= A = A + (j = (j ^= b = b + O | 0) >>> 16 | j << 16) | 0) >>> 20 | O << 12, I = (I ^= N = N + (C = (C ^= w = w + I | 0) >>> 16 | C << 16) | 0) >>> 20 | I << 12, 
      P = (P ^= R = R + (L = (L ^= E = E + P | 0) >>> 16 | L << 16) | 0) >>> 20 | P << 12, x = (x ^= T = T + (U = (U ^= S = S + x | 0) >>> 16 | U << 16) | 0) >>> 20 | x << 12, 
      P = (P ^= R = R + (L = (L ^= E = E + P | 0) >>> 24 | L << 8) | 0) >>> 25 | P << 7, x = (x ^= T = T + (U = (U ^= S = S + x | 0) >>> 24 | U << 8) | 0) >>> 25 | x << 7, 
      I = (I ^= N = N + (C = (C ^= w = w + I | 0) >>> 24 | C << 8) | 0) >>> 25 | I << 7, O = (O ^= A = A + (j = (j ^= b = b + O | 0) >>> 24 | j << 8) | 0) >>> 25 | O << 7, 
      I = (I ^= R = R + (U = (U ^= b = b + I | 0) >>> 16 | U << 16) | 0) >>> 20 | I << 12, P = (P ^= T = T + (j = (j ^= w = w + P | 0) >>> 16 | j << 16) | 0) >>> 20 | P << 12, 
      x = (x ^= A = A + (C = (C ^= E = E + x | 0) >>> 16 | C << 16) | 0) >>> 20 | x << 12, O = (O ^= N = N + (L = (L ^= S = S + O | 0) >>> 16 | L << 16) | 0) >>> 20 | O << 12, 
      x = (x ^= A = A + (C = (C ^= E = E + x | 0) >>> 24 | C << 8) | 0) >>> 25 | x << 7, O = (O ^= N = N + (L = (L ^= S = S + O | 0) >>> 24 | L << 8) | 0) >>> 25 | O << 7, 
      P = (P ^= T = T + (j = (j ^= w = w + P | 0) >>> 24 | j << 8) | 0) >>> 25 | P << 7, I = (I ^= R = R + (U = (U ^= b = b + I | 0) >>> 24 | U << 8) | 0) >>> 25 | I << 7;
      n.writeUint32LE(b + i | 0, t, 0), n.writeUint32LE(w + s | 0, t, 4), n.writeUint32LE(E + o | 0, t, 8), n.writeUint32LE(S + a | 0, t, 12), 
      n.writeUint32LE(O + c | 0, t, 16), n.writeUint32LE(I + u | 0, t, 20), n.writeUint32LE(P + h | 0, t, 24), n.writeUint32LE(x + l | 0, t, 28), 
      n.writeUint32LE(A + f | 0, t, 32), n.writeUint32LE(N + p | 0, t, 36), n.writeUint32LE(R + d | 0, t, 40), n.writeUint32LE(T + g | 0, t, 44), 
      n.writeUint32LE(j + y | 0, t, 48), n.writeUint32LE(C + v | 0, t, 52), n.writeUint32LE(L + _ | 0, t, 56), n.writeUint32LE(U + m | 0, t, 60);
    }
    function o(t, e, r, n, o) {
      if (void 0 === o && (o = 0), 32 !== t.length) throw new Error("ChaCha: key size must be 32 bytes");
      if (n.length < r.length) throw new Error("ChaCha: destination is shorter than source");
      var c;
      var u;
      if (0 === o) {
        if (8 !== e.length && 12 !== e.length) throw new Error("ChaCha nonce must be 8 or 12 bytes");
        u = (c = new Uint8Array(16)).length - e.length, c.set(e, u);
      } else {
        if (16 !== e.length) throw new Error("ChaCha nonce with counter must be 16 bytes");
        c = e, u = o;
      }
      var h = new Uint8Array(64);
      for (var l = 0; l < r.length; l += 64) {
        s(h, c, t);
        for (var f = l; f < l + 64 && f < r.length; f++) n[f] = r[f] ^ h[f - l];
        a(c, 0, u);
      }
      return i.wipe(h), 0 === o && i.wipe(c), n;
    }
    function a(t, e, r) {
      var n = 1;
      for (;r--; ) n = n + (255 & t[e]) | 0, t[e] = 255 & n, n >>>= 8, e++;
      if (n > 0) throw new Error("ChaCha: counter overflow");
    }
    e.streamXOR = o, e.stream = function(t, e, r, n) {
      return void 0 === n && (n = 0), i.wipe(r), o(t, e, r, r, n);
    };
  },
  99687: (t, e, r) => {
    "use strict";
    var n = r(85053);
    var i = r(56990);
    var s = r(25602);
    var o = r(4182);
    var a = r(73906);
    e.Cv = 32, e.WH = 12, e.pg = 16;
    var c = new Uint8Array(16);
    var u = function() {
      function t(t) {
        if (this.nonceLength = e.WH, this.tagLength = e.pg, t.length !== e.Cv) throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(t);
      }
      return t.prototype.seal = function(t, e, r, i) {
        if (t.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
        var o = new Uint8Array(16);
        o.set(t, o.length - t.length);
        var a = new Uint8Array(32);
        n.stream(this._key, o, a, 4);
        var c = e.length + this.tagLength;
        var u;
        if (i) {
          if (i.length !== c) throw new Error("ChaCha20Poly1305: incorrect destination length");
          u = i;
        } else u = new Uint8Array(c);
        return n.streamXOR(this._key, o, e, u, 4), this._authenticate(u.subarray(u.length - this.tagLength, u.length), a, u.subarray(0, u.length - this.tagLength), r), 
        s.wipe(o), u;
      }, t.prototype.open = function(t, e, r, i) {
        if (t.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
        if (e.length < this.tagLength) return null;
        var o = new Uint8Array(16);
        o.set(t, o.length - t.length);
        var c = new Uint8Array(32);
        n.stream(this._key, o, c, 4);
        var u = new Uint8Array(this.tagLength);
        if (this._authenticate(u, c, e.subarray(0, e.length - this.tagLength), r), !a.equal(u, e.subarray(e.length - this.tagLength, e.length))) return null;
        var h = e.length - this.tagLength;
        var l;
        if (i) {
          if (i.length !== h) throw new Error("ChaCha20Poly1305: incorrect destination length");
          l = i;
        } else l = new Uint8Array(h);
        return n.streamXOR(this._key, o, e.subarray(0, e.length - this.tagLength), l, 4), s.wipe(o), l;
      }, t.prototype.clean = function() {
        return s.wipe(this._key), this;
      }, t.prototype._authenticate = function(t, e, r, n) {
        var a = new i.Poly1305(e);
        n && (a.update(n), n.length % 16 > 0 && a.update(c.subarray(n.length % 16))), a.update(r), r.length % 16 > 0 && a.update(c.subarray(r.length % 16));
        var u = new Uint8Array(8);
        n && o.writeUint64LE(n.length, u), a.update(u), o.writeUint64LE(r.length, u), a.update(u);
        var h = a.digest();
        for (var l = 0; l < h.length; l++) t[l] = h[l];
        a.clean(), s.wipe(h), s.wipe(u);
      }, t;
    }();
    e.OK = u;
  },
  73906: (t, e) => {
    "use strict";
    function r(t, e) {
      if (t.length !== e.length) return 0;
      var r = 0;
      for (var n = 0; n < t.length; n++) r |= t[n] ^ e[n];
      return 1 & r - 1 >>> 8;
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.select = function(t, e, r) {
      return ~(t - 1) & e | t - 1 & r;
    }, e.lessOrEqual = function(t, e) {
      return (0 | t) - (0 | e) - 1 >>> 31 & 1;
    }, e.compare = r, e.equal = function(t, e) {
      return 0 !== t.length && 0 !== e.length && 0 !== r(t, e);
    };
  },
  20342: (t, e, r) => {
    "use strict";
    e.Xx = e._w = e.aP = e.KS = e.jQ = void 0;
    const n = r(31820);
    const i = r(4053);
    const s = r(25602);
    function o(t) {
      const e = new Float64Array(16);
      if (t) for (let r = 0; r < t.length; r++) e[r] = t[r];
      return e;
    }
    e.jQ = 64, e.KS = 64, e.aP = 32;
    new Uint8Array(32)[0] = 9;
    const a = o();
    const c = o([ 1 ]);
    const u = o([ 30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995 ]);
    const h = o([ 61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222 ]);
    const l = o([ 54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553 ]);
    const f = o([ 26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214 ]);
    const p = o([ 41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139 ]);
    function d(t, e) {
      for (let r = 0; r < 16; r++) t[r] = 0 | e[r];
    }
    function g(t) {
      let e = 1;
      for (let r = 0; r < 16; r++) {
        let n = t[r] + e + 65535;
        e = Math.floor(n / 65536), t[r] = n - 65536 * e;
      }
      t[0] += e - 1 + 37 * (e - 1);
    }
    function y(t, e, r) {
      const n = ~(r - 1);
      for (let i = 0; i < 16; i++) {
        const r = n & (t[i] ^ e[i]);
        t[i] ^= r, e[i] ^= r;
      }
    }
    function v(t, e) {
      const r = o();
      const n = o();
      for (let i = 0; i < 16; i++) n[i] = e[i];
      g(n), g(n), g(n);
      for (let i = 0; i < 2; i++) {
        r[0] = n[0] - 65517;
        for (let e = 1; e < 15; e++) r[e] = n[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
        r[15] = n[15] - 32767 - (r[14] >> 16 & 1);
        const t = r[15] >> 16 & 1;
        r[14] &= 65535, y(n, r, 1 - t);
      }
      for (let i = 0; i < 16; i++) t[2 * i] = 255 & n[i], t[2 * i + 1] = n[i] >> 8;
    }
    function _(t, e) {
      let r = 0;
      for (let n = 0; n < 32; n++) r |= t[n] ^ e[n];
      return (1 & r - 1 >>> 8) - 1;
    }
    function m(t, e) {
      const r = new Uint8Array(32);
      const n = new Uint8Array(32);
      return v(r, t), v(n, e), _(r, n);
    }
    function b(t) {
      const e = new Uint8Array(32);
      return v(e, t), 1 & e[0];
    }
    function w(t, e, r) {
      for (let n = 0; n < 16; n++) t[n] = e[n] + r[n];
    }
    function E(t, e, r) {
      for (let n = 0; n < 16; n++) t[n] = e[n] - r[n];
    }
    function S(t, e, r) {
      let n, i, s = 0, o = 0, a = 0, c = 0, u = 0, h = 0, l = 0, f = 0, p = 0, d = 0, g = 0, y = 0, v = 0, _ = 0, m = 0, b = 0, w = 0, E = 0, S = 0, O = 0, I = 0, P = 0, x = 0, A = 0, N = 0, R = 0, T = 0, j = 0, C = 0, L = 0, U = 0, M = r[0], D = r[1], k = r[2], z = r[3], $ = r[4], q = r[5], H = r[6], B = r[7], V = r[8], K = r[9], F = r[10], W = r[11], G = r[12], Y = r[13], J = r[14], X = r[15];
      n = e[0], s += n * M, o += n * D, a += n * k, c += n * z, u += n * $, h += n * q, l += n * H, f += n * B, p += n * V, d += n * K, 
      g += n * F, y += n * W, v += n * G, _ += n * Y, m += n * J, b += n * X, n = e[1], o += n * M, a += n * D, c += n * k, u += n * z, 
      h += n * $, l += n * q, f += n * H, p += n * B, d += n * V, g += n * K, y += n * F, v += n * W, _ += n * G, m += n * Y, 
      b += n * J, w += n * X, n = e[2], a += n * M, c += n * D, u += n * k, h += n * z, l += n * $, f += n * q, p += n * H, d += n * B, 
      g += n * V, y += n * K, v += n * F, _ += n * W, m += n * G, b += n * Y, w += n * J, E += n * X, n = e[3], c += n * M, u += n * D, 
      h += n * k, l += n * z, f += n * $, p += n * q, d += n * H, g += n * B, y += n * V, v += n * K, _ += n * F, m += n * W, 
      b += n * G, w += n * Y, E += n * J, S += n * X, n = e[4], u += n * M, h += n * D, l += n * k, f += n * z, p += n * $, d += n * q, 
      g += n * H, y += n * B, v += n * V, _ += n * K, m += n * F, b += n * W, w += n * G, E += n * Y, S += n * J, O += n * X, 
      n = e[5], h += n * M, l += n * D, f += n * k, p += n * z, d += n * $, g += n * q, y += n * H, v += n * B, _ += n * V, m += n * K, 
      b += n * F, w += n * W, E += n * G, S += n * Y, O += n * J, I += n * X, n = e[6], l += n * M, f += n * D, p += n * k, d += n * z, 
      g += n * $, y += n * q, v += n * H, _ += n * B, m += n * V, b += n * K, w += n * F, E += n * W, S += n * G, O += n * Y, 
      I += n * J, P += n * X, n = e[7], f += n * M, p += n * D, d += n * k, g += n * z, y += n * $, v += n * q, _ += n * H, m += n * B, 
      b += n * V, w += n * K, E += n * F, S += n * W, O += n * G, I += n * Y, P += n * J, x += n * X, n = e[8], p += n * M, d += n * D, 
      g += n * k, y += n * z, v += n * $, _ += n * q, m += n * H, b += n * B, w += n * V, E += n * K, S += n * F, O += n * W, 
      I += n * G, P += n * Y, x += n * J, A += n * X, n = e[9], d += n * M, g += n * D, y += n * k, v += n * z, _ += n * $, m += n * q, 
      b += n * H, w += n * B, E += n * V, S += n * K, O += n * F, I += n * W, P += n * G, x += n * Y, A += n * J, N += n * X, 
      n = e[10], g += n * M, y += n * D, v += n * k, _ += n * z, m += n * $, b += n * q, w += n * H, E += n * B, S += n * V, O += n * K, 
      I += n * F, P += n * W, x += n * G, A += n * Y, N += n * J, R += n * X, n = e[11], y += n * M, v += n * D, _ += n * k, m += n * z, 
      b += n * $, w += n * q, E += n * H, S += n * B, O += n * V, I += n * K, P += n * F, x += n * W, A += n * G, N += n * Y, 
      R += n * J, T += n * X, n = e[12], v += n * M, _ += n * D, m += n * k, b += n * z, w += n * $, E += n * q, S += n * H, O += n * B, 
      I += n * V, P += n * K, x += n * F, A += n * W, N += n * G, R += n * Y, T += n * J, j += n * X, n = e[13], _ += n * M, m += n * D, 
      b += n * k, w += n * z, E += n * $, S += n * q, O += n * H, I += n * B, P += n * V, x += n * K, A += n * F, N += n * W, 
      R += n * G, T += n * Y, j += n * J, C += n * X, n = e[14], m += n * M, b += n * D, w += n * k, E += n * z, S += n * $, O += n * q, 
      I += n * H, P += n * B, x += n * V, A += n * K, N += n * F, R += n * W, T += n * G, j += n * Y, C += n * J, L += n * X, 
      n = e[15], b += n * M, w += n * D, E += n * k, S += n * z, O += n * $, I += n * q, P += n * H, x += n * B, A += n * V, N += n * K, 
      R += n * F, T += n * W, j += n * G, C += n * Y, L += n * J, U += n * X, s += 38 * w, o += 38 * E, a += 38 * S, c += 38 * O, 
      u += 38 * I, h += 38 * P, l += 38 * x, f += 38 * A, p += 38 * N, d += 38 * R, g += 38 * T, y += 38 * j, v += 38 * C, _ += 38 * L, 
      m += 38 * U, i = 1, n = s + i + 65535, i = Math.floor(n / 65536), s = n - 65536 * i, n = o + i + 65535, i = Math.floor(n / 65536), 
      o = n - 65536 * i, n = a + i + 65535, i = Math.floor(n / 65536), a = n - 65536 * i, n = c + i + 65535, i = Math.floor(n / 65536), 
      c = n - 65536 * i, n = u + i + 65535, i = Math.floor(n / 65536), u = n - 65536 * i, n = h + i + 65535, i = Math.floor(n / 65536), 
      h = n - 65536 * i, n = l + i + 65535, i = Math.floor(n / 65536), l = n - 65536 * i, n = f + i + 65535, i = Math.floor(n / 65536), 
      f = n - 65536 * i, n = p + i + 65535, i = Math.floor(n / 65536), p = n - 65536 * i, n = d + i + 65535, i = Math.floor(n / 65536), 
      d = n - 65536 * i, n = g + i + 65535, i = Math.floor(n / 65536), g = n - 65536 * i, n = y + i + 65535, i = Math.floor(n / 65536), 
      y = n - 65536 * i, n = v + i + 65535, i = Math.floor(n / 65536), v = n - 65536 * i, n = _ + i + 65535, i = Math.floor(n / 65536), 
      _ = n - 65536 * i, n = m + i + 65535, i = Math.floor(n / 65536), m = n - 65536 * i, n = b + i + 65535, i = Math.floor(n / 65536), 
      b = n - 65536 * i, s += i - 1 + 37 * (i - 1), i = 1, n = s + i + 65535, i = Math.floor(n / 65536), s = n - 65536 * i, n = o + i + 65535, 
      i = Math.floor(n / 65536), o = n - 65536 * i, n = a + i + 65535, i = Math.floor(n / 65536), a = n - 65536 * i, n = c + i + 65535, 
      i = Math.floor(n / 65536), c = n - 65536 * i, n = u + i + 65535, i = Math.floor(n / 65536), u = n - 65536 * i, n = h + i + 65535, 
      i = Math.floor(n / 65536), h = n - 65536 * i, n = l + i + 65535, i = Math.floor(n / 65536), l = n - 65536 * i, n = f + i + 65535, 
      i = Math.floor(n / 65536), f = n - 65536 * i, n = p + i + 65535, i = Math.floor(n / 65536), p = n - 65536 * i, n = d + i + 65535, 
      i = Math.floor(n / 65536), d = n - 65536 * i, n = g + i + 65535, i = Math.floor(n / 65536), g = n - 65536 * i, n = y + i + 65535, 
      i = Math.floor(n / 65536), y = n - 65536 * i, n = v + i + 65535, i = Math.floor(n / 65536), v = n - 65536 * i, n = _ + i + 65535, 
      i = Math.floor(n / 65536), _ = n - 65536 * i, n = m + i + 65535, i = Math.floor(n / 65536), m = n - 65536 * i, n = b + i + 65535, 
      i = Math.floor(n / 65536), b = n - 65536 * i, s += i - 1 + 37 * (i - 1), t[0] = s, t[1] = o, t[2] = a, t[3] = c, t[4] = u, 
      t[5] = h, t[6] = l, t[7] = f, t[8] = p, t[9] = d, t[10] = g, t[11] = y, t[12] = v, t[13] = _, t[14] = m, t[15] = b;
    }
    function O(t, e) {
      S(t, e, e);
    }
    function I(t, e) {
      const r = o();
      let n;
      for (n = 0; n < 16; n++) r[n] = e[n];
      for (n = 253; n >= 0; n--) O(r, r), 2 !== n && 4 !== n && S(r, r, e);
      for (n = 0; n < 16; n++) t[n] = r[n];
    }
    function P(t, e) {
      const r = o(), n = o(), i = o(), s = o(), a = o(), c = o(), u = o(), l = o(), f = o();
      E(r, t[1], t[0]), E(f, e[1], e[0]), S(r, r, f), w(n, t[0], t[1]), w(f, e[0], e[1]), S(n, n, f), S(i, t[3], e[3]), S(i, i, h), 
      S(s, t[2], e[2]), w(s, s, s), E(a, n, r), E(c, s, i), w(u, s, i), w(l, n, r), S(t[0], a, c), S(t[1], l, u), S(t[2], u, c), 
      S(t[3], a, l);
    }
    function x(t, e, r) {
      for (let n = 0; n < 4; n++) y(t[n], e[n], r);
    }
    function A(t, e) {
      const r = o(), n = o(), i = o();
      I(i, e[2]), S(r, e[0], i), S(n, e[1], i), v(t, n), t[31] ^= b(r) << 7;
    }
    function N(t, e, r) {
      d(t[0], a), d(t[1], c), d(t[2], c), d(t[3], a);
      for (let n = 255; n >= 0; --n) {
        const i = r[n / 8 | 0] >> (7 & n) & 1;
        x(t, e, i), P(e, t), P(t, t), x(t, e, i);
      }
    }
    function R(t, e) {
      const r = [ o(), o(), o(), o() ];
      d(r[0], l), d(r[1], f), d(r[2], c), S(r[3], l, f), N(t, r, e);
    }
    function T(t) {
      if (t.length !== e.aP) throw new Error(`ed25519: seed must be ${e.aP} bytes`);
      const r = (0, i.hash)(t);
      r[0] &= 248, r[31] &= 127, r[31] |= 64;
      const n = new Uint8Array(32);
      const s = [ o(), o(), o(), o() ];
      R(s, r), A(n, s);
      const a = new Uint8Array(64);
      return a.set(t), a.set(n, 32), {
        publicKey: n,
        secretKey: a
      };
    }
    e._w = T;
    const j = new Float64Array([ 237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16 ]);
    function C(t, e) {
      let r;
      let n;
      let i;
      let s;
      for (n = 63; n >= 32; --n) {
        for (r = 0, i = n - 32, s = n - 12; i < s; ++i) e[i] += r - 16 * e[n] * j[i - (n - 32)], r = Math.floor((e[i] + 128) / 256), 
        e[i] -= 256 * r;
        e[i] += r, e[n] = 0;
      }
      for (r = 0, i = 0; i < 32; i++) e[i] += r - (e[31] >> 4) * j[i], r = e[i] >> 8, e[i] &= 255;
      for (i = 0; i < 32; i++) e[i] -= r * j[i];
      for (n = 0; n < 32; n++) e[n + 1] += e[n] >> 8, t[n] = 255 & e[n];
    }
    function L(t) {
      const e = new Float64Array(64);
      for (let r = 0; r < 64; r++) e[r] = t[r];
      for (let r = 0; r < 64; r++) t[r] = 0;
      C(t, e);
    }
    function U(t, e) {
      const r = o(), n = o(), i = o(), s = o(), h = o(), l = o(), f = o();
      return d(t[2], c), function(t, e) {
        for (let r = 0; r < 16; r++) t[r] = e[2 * r] + (e[2 * r + 1] << 8);
        t[15] &= 32767;
      }(t[1], e), O(i, t[1]), S(s, i, u), E(i, i, t[2]), w(s, t[2], s), O(h, s), O(l, h), S(f, l, h), S(r, f, i), S(r, r, s), 
      function(t, e) {
        const r = o();
        let n;
        for (n = 0; n < 16; n++) r[n] = e[n];
        for (n = 250; n >= 0; n--) O(r, r), 1 !== n && S(r, r, e);
        for (n = 0; n < 16; n++) t[n] = r[n];
      }(r, r), S(r, r, i), S(r, r, s), S(r, r, s), S(t[0], r, s), O(n, t[0]), S(n, n, s), m(n, i) && S(t[0], t[0], p), O(n, t[0]), 
      S(n, n, s), m(n, i) ? -1 : (b(t[0]) === e[31] >> 7 && E(t[0], a, t[0]), S(t[3], t[0], t[1]), 0);
    }
    e.Xx = function(t, e) {
      const r = new Float64Array(64);
      const n = [ o(), o(), o(), o() ];
      const s = (0, i.hash)(t.subarray(0, 32));
      s[0] &= 248, s[31] &= 127, s[31] |= 64;
      const a = new Uint8Array(64);
      a.set(s.subarray(32), 32);
      const c = new i.SHA512;
      c.update(a.subarray(32)), c.update(e);
      const u = c.digest();
      c.clean(), L(u), R(n, u), A(a, n), c.reset(), c.update(a.subarray(0, 32)), c.update(t.subarray(32)), c.update(e);
      const h = c.digest();
      L(h);
      for (let i = 0; i < 32; i++) r[i] = u[i];
      for (let i = 0; i < 32; i++) for (let t = 0; t < 32; t++) r[i + t] += h[i] * s[t];
      return C(a.subarray(32), r), a;
    };
  },
  26977: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.isSerializableHash = function(t) {
      return void 0 !== t.saveState && void 0 !== t.restoreState && void 0 !== t.cleanSavedState;
    };
  },
  74488: (t, e, r) => {
    "use strict";
    var n = r(42434);
    var i = r(25602);
    var s = function() {
      function t(t, e, r, i) {
        void 0 === r && (r = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = t, this._info = i;
        var s = n.hmac(this._hash, r, e);
        this._hmac = new n.HMAC(t, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length;
      }
      return t.prototype._fillBuffer = function() {
        this._counter[0]++;
        var t = this._counter[0];
        if (0 === t) throw new Error("hkdf: cannot expand more");
        this._hmac.reset(), t > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), 
        this._hmac.finish(this._buffer), this._bufpos = 0;
      }, t.prototype.expand = function(t) {
        var e = new Uint8Array(t);
        for (var r = 0; r < e.length; r++) this._bufpos === this._buffer.length && this._fillBuffer(), e[r] = this._buffer[this._bufpos++];
        return e;
      }, t.prototype.clean = function() {
        this._hmac.clean(), i.wipe(this._buffer), i.wipe(this._counter), this._bufpos = 0;
      }, t;
    }();
    e.t = s;
  },
  42434: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var n = r(26977);
    var i = r(73906);
    var s = r(25602);
    var o = function() {
      function t(t, e) {
        this._finished = !1, this._inner = new t, this._outer = new t, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
        var r = new Uint8Array(this.blockSize);
        e.length > this.blockSize ? this._inner.update(e).finish(r).clean() : r.set(e);
        for (var i = 0; i < r.length; i++) r[i] ^= 54;
        this._inner.update(r);
        for (i = 0; i < r.length; i++) r[i] ^= 106;
        this._outer.update(r), n.isSerializableHash(this._inner) && n.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), 
        this._outerKeyedState = this._outer.saveState()), s.wipe(r);
      }
      return t.prototype.reset = function() {
        if (!n.isSerializableHash(this._inner) || !n.isSerializableHash(this._outer)) throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
        return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, 
        this;
      }, t.prototype.clean = function() {
        n.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), n.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), 
        this._inner.clean(), this._outer.clean();
      }, t.prototype.update = function(t) {
        return this._inner.update(t), this;
      }, t.prototype.finish = function(t) {
        return this._finished ? (this._outer.finish(t), this) : (this._inner.finish(t), this._outer.update(t.subarray(0, this.digestLength)).finish(t), 
        this._finished = !0, this);
      }, t.prototype.digest = function() {
        var t = new Uint8Array(this.digestLength);
        return this.finish(t), t;
      }, t.prototype.saveState = function() {
        if (!n.isSerializableHash(this._inner)) throw new Error("hmac: can't saveState() because hash doesn't implement it");
        return this._inner.saveState();
      }, t.prototype.restoreState = function(t) {
        if (!n.isSerializableHash(this._inner) || !n.isSerializableHash(this._outer)) throw new Error("hmac: can't restoreState() because hash doesn't implement it");
        return this._inner.restoreState(t), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this;
      }, t.prototype.cleanSavedState = function(t) {
        if (!n.isSerializableHash(this._inner)) throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
        this._inner.cleanSavedState(t);
      }, t;
    }();
    e.HMAC = o, e.hmac = function(t, e, r) {
      var n = new o(t, e);
      n.update(r);
      var i = n.digest();
      return n.clean(), i;
    }, e.equal = i.equal;
  },
  20791: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.mul = Math.imul || function(t, e) {
      var r = 65535 & t;
      var n = 65535 & e;
      return r * n + ((t >>> 16 & 65535) * n + r * (e >>> 16 & 65535) << 16 >>> 0) | 0;
    }, e.add = function(t, e) {
      return t + e | 0;
    }, e.sub = function(t, e) {
      return t - e | 0;
    }, e.rotl = function(t, e) {
      return t << e | t >>> 32 - e;
    }, e.rotr = function(t, e) {
      return t << 32 - e | t >>> e;
    }, e.isInteger = Number.isInteger || function(t) {
      return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
    }, e.MAX_SAFE_INTEGER = 9007199254740991, e.isSafeInteger = function(t) {
      return e.isInteger(t) && t >= -e.MAX_SAFE_INTEGER && t <= e.MAX_SAFE_INTEGER;
    };
  },
  56990: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var n = r(73906);
    var i = r(25602);
    e.DIGEST_LENGTH = 16;
    var s = function() {
      function t(t) {
        this.digestLength = e.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), 
        this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
        var r = t[0] | t[1] << 8;
        this._r[0] = 8191 & r;
        var n = t[2] | t[3] << 8;
        this._r[1] = 8191 & (r >>> 13 | n << 3);
        var i = t[4] | t[5] << 8;
        this._r[2] = 7939 & (n >>> 10 | i << 6);
        var s = t[6] | t[7] << 8;
        this._r[3] = 8191 & (i >>> 7 | s << 9);
        var o = t[8] | t[9] << 8;
        this._r[4] = 255 & (s >>> 4 | o << 12), this._r[5] = o >>> 1 & 8190;
        var a = t[10] | t[11] << 8;
        this._r[6] = 8191 & (o >>> 14 | a << 2);
        var c = t[12] | t[13] << 8;
        this._r[7] = 8065 & (a >>> 11 | c << 5);
        var u = t[14] | t[15] << 8;
        this._r[8] = 8191 & (c >>> 8 | u << 8), this._r[9] = u >>> 5 & 127, this._pad[0] = t[16] | t[17] << 8, this._pad[1] = t[18] | t[19] << 8, 
        this._pad[2] = t[20] | t[21] << 8, this._pad[3] = t[22] | t[23] << 8, this._pad[4] = t[24] | t[25] << 8, this._pad[5] = t[26] | t[27] << 8, 
        this._pad[6] = t[28] | t[29] << 8, this._pad[7] = t[30] | t[31] << 8;
      }
      return t.prototype._blocks = function(t, e, r) {
        var n = this._fin ? 0 : 2048;
        var i = this._h[0], s = this._h[1], o = this._h[2], a = this._h[3], c = this._h[4], u = this._h[5], h = this._h[6], l = this._h[7], f = this._h[8], p = this._h[9];
        var d = this._r[0], g = this._r[1], y = this._r[2], v = this._r[3], _ = this._r[4], m = this._r[5], b = this._r[6], w = this._r[7], E = this._r[8], S = this._r[9];
        for (;r >= 16; ) {
          var O = t[e + 0] | t[e + 1] << 8;
          i += 8191 & O;
          var I = t[e + 2] | t[e + 3] << 8;
          s += 8191 & (O >>> 13 | I << 3);
          var P = t[e + 4] | t[e + 5] << 8;
          o += 8191 & (I >>> 10 | P << 6);
          var x = t[e + 6] | t[e + 7] << 8;
          a += 8191 & (P >>> 7 | x << 9);
          var A = t[e + 8] | t[e + 9] << 8;
          c += 8191 & (x >>> 4 | A << 12), u += A >>> 1 & 8191;
          var N = t[e + 10] | t[e + 11] << 8;
          h += 8191 & (A >>> 14 | N << 2);
          var R = t[e + 12] | t[e + 13] << 8;
          l += 8191 & (N >>> 11 | R << 5);
          var T = t[e + 14] | t[e + 15] << 8;
          var j = 0;
          var C = j;
          C += i * d, C += s * (5 * S), C += o * (5 * E), C += a * (5 * w), j = (C += c * (5 * b)) >>> 13, C &= 8191, C += u * (5 * m), 
          C += h * (5 * _), C += l * (5 * v), C += (f += 8191 & (R >>> 8 | T << 8)) * (5 * y);
          var L = j += (C += (p += T >>> 5 | n) * (5 * g)) >>> 13;
          L += i * g, L += s * d, L += o * (5 * S), L += a * (5 * E), j = (L += c * (5 * w)) >>> 13, L &= 8191, L += u * (5 * b), 
          L += h * (5 * m), L += l * (5 * _), L += f * (5 * v), j += (L += p * (5 * y)) >>> 13, L &= 8191;
          var U = j;
          U += i * y, U += s * g, U += o * d, U += a * (5 * S), j = (U += c * (5 * E)) >>> 13, U &= 8191, U += u * (5 * w), U += h * (5 * b), 
          U += l * (5 * m), U += f * (5 * _);
          var M = j += (U += p * (5 * v)) >>> 13;
          M += i * v, M += s * y, M += o * g, M += a * d, j = (M += c * (5 * S)) >>> 13, M &= 8191, M += u * (5 * E), M += h * (5 * w), 
          M += l * (5 * b), M += f * (5 * m);
          var D = j += (M += p * (5 * _)) >>> 13;
          D += i * _, D += s * v, D += o * y, D += a * g, j = (D += c * d) >>> 13, D &= 8191, D += u * (5 * S), D += h * (5 * E), 
          D += l * (5 * w), D += f * (5 * b);
          var k = j += (D += p * (5 * m)) >>> 13;
          k += i * m, k += s * _, k += o * v, k += a * y, j = (k += c * g) >>> 13, k &= 8191, k += u * d, k += h * (5 * S), k += l * (5 * E), 
          k += f * (5 * w);
          var z = j += (k += p * (5 * b)) >>> 13;
          z += i * b, z += s * m, z += o * _, z += a * v, j = (z += c * y) >>> 13, z &= 8191, z += u * g, z += h * d, z += l * (5 * S), 
          z += f * (5 * E);
          var $ = j += (z += p * (5 * w)) >>> 13;
          $ += i * w, $ += s * b, $ += o * m, $ += a * _, j = ($ += c * v) >>> 13, $ &= 8191, $ += u * y, $ += h * g, $ += l * d, 
          $ += f * (5 * S);
          var q = j += ($ += p * (5 * E)) >>> 13;
          q += i * E, q += s * w, q += o * b, q += a * m, j = (q += c * _) >>> 13, q &= 8191, q += u * v, q += h * y, q += l * g, 
          q += f * d;
          var H = j += (q += p * (5 * S)) >>> 13;
          H += i * S, H += s * E, H += o * w, H += a * b, j = (H += c * m) >>> 13, H &= 8191, H += u * _, H += h * v, H += l * y, 
          H += f * g, i = C = 8191 & (j = (j = ((j += (H += p * d) >>> 13) << 2) + j | 0) + (C &= 8191) | 0), s = L += j >>>= 13, 
          o = U &= 8191, a = M &= 8191, c = D &= 8191, u = k &= 8191, h = z &= 8191, l = $ &= 8191, f = q &= 8191, p = H &= 8191, 
          e += 16, r -= 16;
        }
        this._h[0] = i, this._h[1] = s, this._h[2] = o, this._h[3] = a, this._h[4] = c, this._h[5] = u, this._h[6] = h, this._h[7] = l, 
        this._h[8] = f, this._h[9] = p;
      }, t.prototype.finish = function(t, e) {
        void 0 === e && (e = 0);
        var r = new Uint16Array(10);
        var n;
        var i;
        var s;
        var o;
        if (this._leftover) {
          for (o = this._leftover, this._buffer[o++] = 1; o < 16; o++) this._buffer[o] = 0;
          this._fin = 1, this._blocks(this._buffer, 0, 16);
        }
        for (n = this._h[1] >>> 13, this._h[1] &= 8191, o = 2; o < 10; o++) this._h[o] += n, n = this._h[o] >>> 13, this._h[o] &= 8191;
        for (this._h[0] += 5 * n, n = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += n, n = this._h[1] >>> 13, this._h[1] &= 8191, 
        this._h[2] += n, r[0] = this._h[0] + 5, n = r[0] >>> 13, r[0] &= 8191, o = 1; o < 10; o++) r[o] = this._h[o] + n, n = r[o] >>> 13, 
        r[o] &= 8191;
        for (r[9] -= 8192, i = (1 ^ n) - 1, o = 0; o < 10; o++) r[o] &= i;
        for (i = ~i, o = 0; o < 10; o++) this._h[o] = this._h[o] & i | r[o];
        for (this._h[0] = 65535 & (this._h[0] | this._h[1] << 13), this._h[1] = 65535 & (this._h[1] >>> 3 | this._h[2] << 10), this._h[2] = 65535 & (this._h[2] >>> 6 | this._h[3] << 7), 
        this._h[3] = 65535 & (this._h[3] >>> 9 | this._h[4] << 4), this._h[4] = 65535 & (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14), 
        this._h[5] = 65535 & (this._h[6] >>> 2 | this._h[7] << 11), this._h[6] = 65535 & (this._h[7] >>> 5 | this._h[8] << 8), this._h[7] = 65535 & (this._h[8] >>> 8 | this._h[9] << 5), 
        s = this._h[0] + this._pad[0], this._h[0] = 65535 & s, o = 1; o < 8; o++) s = (this._h[o] + this._pad[o] | 0) + (s >>> 16) | 0, 
        this._h[o] = 65535 & s;
        return t[e + 0] = this._h[0] >>> 0, t[e + 1] = this._h[0] >>> 8, t[e + 2] = this._h[1] >>> 0, t[e + 3] = this._h[1] >>> 8, 
        t[e + 4] = this._h[2] >>> 0, t[e + 5] = this._h[2] >>> 8, t[e + 6] = this._h[3] >>> 0, t[e + 7] = this._h[3] >>> 8, t[e + 8] = this._h[4] >>> 0, 
        t[e + 9] = this._h[4] >>> 8, t[e + 10] = this._h[5] >>> 0, t[e + 11] = this._h[5] >>> 8, t[e + 12] = this._h[6] >>> 0, t[e + 13] = this._h[6] >>> 8, 
        t[e + 14] = this._h[7] >>> 0, t[e + 15] = this._h[7] >>> 8, this._finished = !0, this;
      }, t.prototype.update = function(t) {
        var e = 0;
        var r = t.length;
        var n;
        if (this._leftover) {
          (n = 16 - this._leftover) > r && (n = r);
          for (var i = 0; i < n; i++) this._buffer[this._leftover + i] = t[e + i];
          if (r -= n, e += n, this._leftover += n, this._leftover < 16) return this;
          this._blocks(this._buffer, 0, 16), this._leftover = 0;
        }
        if (r >= 16 && (n = r - r % 16, this._blocks(t, e, n), e += n, r -= n), r) {
          for (i = 0; i < r; i++) this._buffer[this._leftover + i] = t[e + i];
          this._leftover += r;
        }
        return this;
      }, t.prototype.digest = function() {
        if (this._finished) throw new Error("Poly1305 was finished");
        var t = new Uint8Array(16);
        return this.finish(t), t;
      }, t.prototype.clean = function() {
        return i.wipe(this._buffer), i.wipe(this._r), i.wipe(this._h), i.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, 
        this;
      }, t;
    }();
    e.Poly1305 = s, e.oneTimeAuth = function(t, e) {
      var r = new s(t);
      r.update(e);
      var n = r.digest();
      return r.clean(), n;
    }, e.equal = function(t, r) {
      return t.length === e.DIGEST_LENGTH && r.length === e.DIGEST_LENGTH && n.equal(t, r);
    };
  },
  31820: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.randomStringForEntropy = e.randomString = e.randomUint32 = e.randomBytes = e.defaultRandomSource = void 0;
    const n = r(93706);
    const i = r(4182);
    const s = r(25602);
    function o(t, r = e.defaultRandomSource) {
      return r.randomBytes(t);
    }
    e.defaultRandomSource = new n.SystemRandomSource, e.randomBytes = o, e.randomUint32 = function(t = e.defaultRandomSource) {
      const r = o(4, t);
      const n = (0, i.readUint32LE)(r);
      return (0, s.wipe)(r), n;
    };
    const a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    function c(t, r = a, n = e.defaultRandomSource) {
      if (r.length < 2) throw new Error("randomString charset is too short");
      if (r.length > 256) throw new Error("randomString charset is too long");
      let i = '';
      const c = r.length;
      const u = 256 - 256 % c;
      for (;t > 0; ) {
        const e = o(Math.ceil(256 * t / u), n);
        for (let n = 0; n < e.length && t > 0; n++) {
          const s = e[n];
          s < u && (i += r.charAt(s % c), t--);
        }
        (0, s.wipe)(e);
      }
      return i;
    }
    e.randomString = c, e.randomStringForEntropy = function(t, r = a, n = e.defaultRandomSource) {
      return c(Math.ceil(t / (Math.log(r.length) / Math.LN2)), r, n);
    };
  },
  81531: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.BrowserRandomSource = void 0;
    e.BrowserRandomSource = class {
      constructor() {
        this.isAvailable = !1, this.isInstantiated = !1;
        const t = 'undefined' != typeof self ? self.crypto || self.msCrypto : null;
        t && void 0 !== t.getRandomValues && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0);
      }
      randomBytes(t) {
        if (!this.isAvailable || !this._crypto) throw new Error("Browser random byte generator is not available.");
        const e = new Uint8Array(t);
        for (let r = 0; r < e.length; r += 65536) this._crypto.getRandomValues(e.subarray(r, r + Math.min(e.length - r, 65536)));
        return e;
      }
    };
  },
  81651: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.NodeRandomSource = void 0;
    const n = r(25602);
    e.NodeRandomSource = class {
      constructor() {
        this.isAvailable = !1, this.isInstantiated = !1;
        {
          const t = r(6826);
          t && t.randomBytes && (this._crypto = t, this.isAvailable = !0, this.isInstantiated = !0);
        }
      }
      randomBytes(t) {
        if (!this.isAvailable || !this._crypto) throw new Error("Node.js random byte generator is not available.");
        let e = this._crypto.randomBytes(t);
        if (e.length !== t) throw new Error("NodeRandomSource: got fewer bytes than requested");
        const r = new Uint8Array(t);
        for (let n = 0; n < r.length; n++) r[n] = e[n];
        return (0, n.wipe)(e), r;
      }
    };
  },
  93706: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.SystemRandomSource = void 0;
    const n = r(81531);
    const i = r(81651);
    e.SystemRandomSource = class {
      constructor() {
        return this.isAvailable = !1, this.name = "", this._source = new n.BrowserRandomSource, this._source.isAvailable ? (this.isAvailable = !0, 
        void (this.name = "Browser")) : (this._source = new i.NodeRandomSource, this._source.isAvailable ? (this.isAvailable = !0, 
        void (this.name = "Node")) : void 0);
      }
      randomBytes(t) {
        if (!this.isAvailable) throw new Error("System random byte generator is not available.");
        return this._source.randomBytes(t);
      }
    };
  },
  94789: (t, e, r) => {
    "use strict";
    var n = r(4182);
    var i = r(25602);
    e.k = 32, e.cn = 64;
    var s = function() {
      function t() {
        this.digestLength = e.k, this.blockSize = e.cn, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), 
        this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return t.prototype._initState = function() {
        this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, 
        this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225;
      }, t.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, t.prototype.clean = function() {
        i.wipe(this._buffer), i.wipe(this._temp), this.reset();
      }, t.prototype.update = function(t, e) {
        if (void 0 === e && (e = t.length), this._finished) throw new Error("SHA256: can't update because hash was finished.");
        var r = 0;
        if (this._bytesHashed += e, this._bufferLength > 0) {
          for (;this._bufferLength < this.blockSize && e > 0; ) this._buffer[this._bufferLength++] = t[r++], e--;
          this._bufferLength === this.blockSize && (a(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (e >= this.blockSize && (r = a(this._temp, this._state, t, r, e), e %= this.blockSize); e > 0; ) this._buffer[this._bufferLength++] = t[r++], 
        e--;
        return this;
      }, t.prototype.finish = function(t) {
        if (!this._finished) {
          var e = this._bytesHashed;
          var r = this._bufferLength;
          var i = e / 536870912 | 0;
          var s = e << 3;
          var o = e % 64 < 56 ? 64 : 128;
          this._buffer[r] = 128;
          for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0;
          n.writeUint32BE(i, this._buffer, o - 8), n.writeUint32BE(s, this._buffer, o - 4), a(this._temp, this._state, this._buffer, 0, o), 
          this._finished = !0;
        }
        for (c = 0; c < this.digestLength / 4; c++) n.writeUint32BE(this._state[c], t, 4 * c);
        return this;
      }, t.prototype.digest = function() {
        var t = new Uint8Array(this.digestLength);
        return this.finish(t), t;
      }, t.prototype.saveState = function() {
        if (this._finished) throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, t.prototype.restoreState = function(t) {
        return this._state.set(t.state), this._bufferLength = t.bufferLength, t.buffer && this._buffer.set(t.buffer), this._bytesHashed = t.bytesHashed, 
        this._finished = !1, this;
      }, t.prototype.cleanSavedState = function(t) {
        i.wipe(t.state), t.buffer && i.wipe(t.buffer), t.bufferLength = 0, t.bytesHashed = 0;
      }, t;
    }();
    e.mE = s;
    var o = new Int32Array([ 1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298 ]);
    function a(t, e, r, i, s) {
      for (;s >= 64; ) {
        var a = e[0];
        var c = e[1];
        var u = e[2];
        var h = e[3];
        var l = e[4];
        var f = e[5];
        var p = e[6];
        var d = e[7];
        for (var g = 0; g < 16; g++) {
          var y = i + 4 * g;
          t[g] = n.readUint32BE(r, y);
        }
        for (g = 16; g < 64; g++) {
          var v = t[g - 2];
          var _ = (v >>> 17 | v << 15) ^ (v >>> 19 | v << 13) ^ v >>> 10;
          var m = ((v = t[g - 15]) >>> 7 | v << 25) ^ (v >>> 18 | v << 14) ^ v >>> 3;
          t[g] = (_ + t[g - 7] | 0) + (m + t[g - 16] | 0);
        }
        for (g = 0; g < 64; g++) {
          _ = (((l >>> 6 | l << 26) ^ (l >>> 11 | l << 21) ^ (l >>> 25 | l << 7)) + (l & f ^ ~l & p) | 0) + (d + (o[g] + t[g] | 0) | 0) | 0;
          m = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & c ^ a & u ^ c & u) | 0;
          d = p, p = f, f = l, l = h + _ | 0, h = u, u = c, c = a, a = _ + m | 0;
        }
        e[0] += a, e[1] += c, e[2] += u, e[3] += h, e[4] += l, e[5] += f, e[6] += p, e[7] += d, i += 64, s -= 64;
      }
      return i;
    }
    e.vp = function(t) {
      var e = new s;
      e.update(t);
      var r = e.digest();
      return e.clean(), r;
    };
  },
  4053: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var n = r(4182);
    var i = r(25602);
    e.DIGEST_LENGTH = 64, e.BLOCK_SIZE = 128;
    var s = function() {
      function t() {
        this.digestLength = e.DIGEST_LENGTH, this.blockSize = e.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), 
        this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, 
        this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return t.prototype._initState = function() {
        this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, 
        this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, 
        this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, 
        this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
      }, t.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, t.prototype.clean = function() {
        i.wipe(this._buffer), i.wipe(this._tempHi), i.wipe(this._tempLo), this.reset();
      }, t.prototype.update = function(t, r) {
        if (void 0 === r && (r = t.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
        var n = 0;
        if (this._bytesHashed += r, this._bufferLength > 0) {
          for (;this._bufferLength < e.BLOCK_SIZE && r > 0; ) this._buffer[this._bufferLength++] = t[n++], r--;
          this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), 
          this._bufferLength = 0);
        }
        for (r >= this.blockSize && (n = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, t, n, r), r %= this.blockSize); r > 0; ) this._buffer[this._bufferLength++] = t[n++], 
        r--;
        return this;
      }, t.prototype.finish = function(t) {
        if (!this._finished) {
          var e = this._bytesHashed;
          var r = this._bufferLength;
          var i = e / 536870912 | 0;
          var s = e << 3;
          var o = e % 128 < 112 ? 128 : 256;
          this._buffer[r] = 128;
          for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0;
          n.writeUint32BE(i, this._buffer, o - 8), n.writeUint32BE(s, this._buffer, o - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, o), 
          this._finished = !0;
        }
        for (c = 0; c < this.digestLength / 8; c++) n.writeUint32BE(this._stateHi[c], t, 8 * c), n.writeUint32BE(this._stateLo[c], t, 8 * c + 4);
        return this;
      }, t.prototype.digest = function() {
        var t = new Uint8Array(this.digestLength);
        return this.finish(t), t;
      }, t.prototype.saveState = function() {
        if (this._finished) throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, t.prototype.restoreState = function(t) {
        return this._stateHi.set(t.stateHi), this._stateLo.set(t.stateLo), this._bufferLength = t.bufferLength, t.buffer && this._buffer.set(t.buffer), 
        this._bytesHashed = t.bytesHashed, this._finished = !1, this;
      }, t.prototype.cleanSavedState = function(t) {
        i.wipe(t.stateHi), i.wipe(t.stateLo), t.buffer && i.wipe(t.buffer), t.bufferLength = 0, t.bytesHashed = 0;
      }, t;
    }();
    e.SHA512 = s;
    var o = new Int32Array([ 1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591 ]);
    function a(t, e, r, i, s, a, c) {
      var u = r[0], h = r[1], l = r[2], f = r[3], p = r[4], d = r[5], g = r[6], y = r[7], v = i[0], _ = i[1], m = i[2], b = i[3], w = i[4], E = i[5], S = i[6], O = i[7];
      var I, P;
      var x, A;
      var N, R, T, j;
      for (;c >= 128; ) {
        for (var C = 0; C < 16; C++) {
          var L = 8 * C + a;
          t[C] = n.readUint32BE(s, L), e[C] = n.readUint32BE(s, L + 4);
        }
        for (C = 0; C < 80; C++) {
          var U = u;
          var M = h;
          var D = l;
          var k = f;
          var z = p;
          var $ = d;
          var q = g;
          var H;
          var B = v;
          var V = _;
          var K = m;
          var F = b;
          var W = w;
          var G = E;
          var Y = S;
          var J;
          if (N = 65535 & (P = O), R = P >>> 16, T = 65535 & (I = y), j = I >>> 16, N += 65535 & (P = (w >>> 14 | p << 18) ^ (w >>> 18 | p << 14) ^ (p >>> 9 | w << 23)), 
          R += P >>> 16, T += 65535 & (I = (p >>> 14 | w << 18) ^ (p >>> 18 | w << 14) ^ (w >>> 9 | p << 23)), j += I >>> 16, N += 65535 & (P = w & E ^ ~w & S), 
          R += P >>> 16, T += 65535 & (I = p & d ^ ~p & g), j += I >>> 16, I = o[2 * C], N += 65535 & (P = o[2 * C + 1]), R += P >>> 16, 
          T += 65535 & I, j += I >>> 16, I = t[C % 16], R += (P = e[C % 16]) >>> 16, T += 65535 & I, j += I >>> 16, T += (R += (N += 65535 & P) >>> 16) >>> 16, 
          N = 65535 & (P = A = 65535 & N | R << 16), R = P >>> 16, T = 65535 & (I = x = 65535 & T | (j += T >>> 16) << 16), j = I >>> 16, 
          N += 65535 & (P = (v >>> 28 | u << 4) ^ (u >>> 2 | v << 30) ^ (u >>> 7 | v << 25)), R += P >>> 16, T += 65535 & (I = (u >>> 28 | v << 4) ^ (v >>> 2 | u << 30) ^ (v >>> 7 | u << 25)), 
          j += I >>> 16, R += (P = v & _ ^ v & m ^ _ & m) >>> 16, T += 65535 & (I = u & h ^ u & l ^ h & l), j += I >>> 16, H = 65535 & (T += (R += (N += 65535 & P) >>> 16) >>> 16) | (j += T >>> 16) << 16, 
          J = 65535 & N | R << 16, N = 65535 & (P = F), R = P >>> 16, T = 65535 & (I = k), j = I >>> 16, R += (P = A) >>> 16, T += 65535 & (I = x), 
          j += I >>> 16, h = U, l = M, f = D, p = k = 65535 & (T += (R += (N += 65535 & P) >>> 16) >>> 16) | (j += T >>> 16) << 16, 
          d = z, g = $, y = q, u = H, _ = B, m = V, b = K, w = F = 65535 & N | R << 16, E = W, S = G, O = Y, v = J, C % 16 == 15) for (L = 0; L < 16; L++) I = t[L], 
          N = 65535 & (P = e[L]), R = P >>> 16, T = 65535 & I, j = I >>> 16, I = t[(L + 9) % 16], N += 65535 & (P = e[(L + 9) % 16]), 
          R += P >>> 16, T += 65535 & I, j += I >>> 16, x = t[(L + 1) % 16], N += 65535 & (P = ((A = e[(L + 1) % 16]) >>> 1 | x << 31) ^ (A >>> 8 | x << 24) ^ (A >>> 7 | x << 25)), 
          R += P >>> 16, T += 65535 & (I = (x >>> 1 | A << 31) ^ (x >>> 8 | A << 24) ^ x >>> 7), j += I >>> 16, x = t[(L + 14) % 16], 
          R += (P = ((A = e[(L + 14) % 16]) >>> 19 | x << 13) ^ (x >>> 29 | A << 3) ^ (A >>> 6 | x << 26)) >>> 16, T += 65535 & (I = (x >>> 19 | A << 13) ^ (A >>> 29 | x << 3) ^ x >>> 6), 
          j += I >>> 16, j += (T += (R += (N += 65535 & P) >>> 16) >>> 16) >>> 16, t[L] = 65535 & T | j << 16, e[L] = 65535 & N | R << 16;
        }
        N = 65535 & (P = v), R = P >>> 16, T = 65535 & (I = u), j = I >>> 16, I = r[0], R += (P = i[0]) >>> 16, T += 65535 & I, 
        j += I >>> 16, j += (T += (R += (N += 65535 & P) >>> 16) >>> 16) >>> 16, r[0] = u = 65535 & T | j << 16, i[0] = v = 65535 & N | R << 16, 
        N = 65535 & (P = _), R = P >>> 16, T = 65535 & (I = h), j = I >>> 16, I = r[1], R += (P = i[1]) >>> 16, T += 65535 & I, 
        j += I >>> 16, j += (T += (R += (N += 65535 & P) >>> 16) >>> 16) >>> 16, r[1] = h = 65535 & T | j << 16, i[1] = _ = 65535 & N | R << 16, 
        N = 65535 & (P = m), R = P >>> 16, T = 65535 & (I = l), j = I >>> 16, I = r[2], R += (P = i[2]) >>> 16, T += 65535 & I, 
        j += I >>> 16, j += (T += (R += (N += 65535 & P) >>> 16) >>> 16) >>> 16, r[2] = l = 65535 & T | j << 16, i[2] = m = 65535 & N | R << 16, 
        N = 65535 & (P = b), R = P >>> 16, T = 65535 & (I = f), j = I >>> 16, I = r[3], R += (P = i[3]) >>> 16, T += 65535 & I, 
        j += I >>> 16, j += (T += (R += (N += 65535 & P) >>> 16) >>> 16) >>> 16, r[3] = f = 65535 & T | j << 16, i[3] = b = 65535 & N | R << 16, 
        N = 65535 & (P = w), R = P >>> 16, T = 65535 & (I = p), j = I >>> 16, I = r[4], R += (P = i[4]) >>> 16, T += 65535 & I, 
        j += I >>> 16, j += (T += (R += (N += 65535 & P) >>> 16) >>> 16) >>> 16, r[4] = p = 65535 & T | j << 16, i[4] = w = 65535 & N | R << 16, 
        N = 65535 & (P = E), R = P >>> 16, T = 65535 & (I = d), j = I >>> 16, I = r[5], R += (P = i[5]) >>> 16, T += 65535 & I, 
        j += I >>> 16, j += (T += (R += (N += 65535 & P) >>> 16) >>> 16) >>> 16, r[5] = d = 65535 & T | j << 16, i[5] = E = 65535 & N | R << 16, 
        N = 65535 & (P = S), R = P >>> 16, T = 65535 & (I = g), j = I >>> 16, I = r[6], R += (P = i[6]) >>> 16, T += 65535 & I, 
        j += I >>> 16, j += (T += (R += (N += 65535 & P) >>> 16) >>> 16) >>> 16, r[6] = g = 65535 & T | j << 16, i[6] = S = 65535 & N | R << 16, 
        N = 65535 & (P = O), R = P >>> 16, T = 65535 & (I = y), j = I >>> 16, I = r[7], R += (P = i[7]) >>> 16, T += 65535 & I, 
        j += I >>> 16, j += (T += (R += (N += 65535 & P) >>> 16) >>> 16) >>> 16, r[7] = y = 65535 & T | j << 16, i[7] = O = 65535 & N | R << 16, 
        a += 128, c -= 128;
      }
      return a;
    }
    e.hash = function(t) {
      var e = new s;
      e.update(t);
      var r = e.digest();
      return e.clean(), r;
    };
  },
  25602: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.wipe = function(t) {
      for (var e = 0; e < t.length; e++) t[e] = 0;
      return t;
    };
  },
  55196: (t, e, r) => {
    "use strict";
    e.gi = e.Au = e.KS = e.kz = void 0;
    const n = r(31820);
    const i = r(25602);
    function s(t) {
      const e = new Float64Array(16);
      if (t) for (let r = 0; r < t.length; r++) e[r] = t[r];
      return e;
    }
    e.kz = 32, e.KS = 32;
    const o = new Uint8Array(32);
    o[0] = 9;
    const a = s([ 56129, 1 ]);
    function c(t) {
      let e = 1;
      for (let r = 0; r < 16; r++) {
        let n = t[r] + e + 65535;
        e = Math.floor(n / 65536), t[r] = n - 65536 * e;
      }
      t[0] += e - 1 + 37 * (e - 1);
    }
    function u(t, e, r) {
      const n = ~(r - 1);
      for (let i = 0; i < 16; i++) {
        const r = n & (t[i] ^ e[i]);
        t[i] ^= r, e[i] ^= r;
      }
    }
    function h(t, e, r) {
      for (let n = 0; n < 16; n++) t[n] = e[n] + r[n];
    }
    function l(t, e, r) {
      for (let n = 0; n < 16; n++) t[n] = e[n] - r[n];
    }
    function f(t, e, r) {
      let n, i, s = 0, o = 0, a = 0, c = 0, u = 0, h = 0, l = 0, f = 0, p = 0, d = 0, g = 0, y = 0, v = 0, _ = 0, m = 0, b = 0, w = 0, E = 0, S = 0, O = 0, I = 0, P = 0, x = 0, A = 0, N = 0, R = 0, T = 0, j = 0, C = 0, L = 0, U = 0, M = r[0], D = r[1], k = r[2], z = r[3], $ = r[4], q = r[5], H = r[6], B = r[7], V = r[8], K = r[9], F = r[10], W = r[11], G = r[12], Y = r[13], J = r[14], X = r[15];
      n = e[0], s += n * M, o += n * D, a += n * k, c += n * z, u += n * $, h += n * q, l += n * H, f += n * B, p += n * V, d += n * K, 
      g += n * F, y += n * W, v += n * G, _ += n * Y, m += n * J, b += n * X, n = e[1], o += n * M, a += n * D, c += n * k, u += n * z, 
      h += n * $, l += n * q, f += n * H, p += n * B, d += n * V, g += n * K, y += n * F, v += n * W, _ += n * G, m += n * Y, 
      b += n * J, w += n * X, n = e[2], a += n * M, c += n * D, u += n * k, h += n * z, l += n * $, f += n * q, p += n * H, d += n * B, 
      g += n * V, y += n * K, v += n * F, _ += n * W, m += n * G, b += n * Y, w += n * J, E += n * X, n = e[3], c += n * M, u += n * D, 
      h += n * k, l += n * z, f += n * $, p += n * q, d += n * H, g += n * B, y += n * V, v += n * K, _ += n * F, m += n * W, 
      b += n * G, w += n * Y, E += n * J, S += n * X, n = e[4], u += n * M, h += n * D, l += n * k, f += n * z, p += n * $, d += n * q, 
      g += n * H, y += n * B, v += n * V, _ += n * K, m += n * F, b += n * W, w += n * G, E += n * Y, S += n * J, O += n * X, 
      n = e[5], h += n * M, l += n * D, f += n * k, p += n * z, d += n * $, g += n * q, y += n * H, v += n * B, _ += n * V, m += n * K, 
      b += n * F, w += n * W, E += n * G, S += n * Y, O += n * J, I += n * X, n = e[6], l += n * M, f += n * D, p += n * k, d += n * z, 
      g += n * $, y += n * q, v += n * H, _ += n * B, m += n * V, b += n * K, w += n * F, E += n * W, S += n * G, O += n * Y, 
      I += n * J, P += n * X, n = e[7], f += n * M, p += n * D, d += n * k, g += n * z, y += n * $, v += n * q, _ += n * H, m += n * B, 
      b += n * V, w += n * K, E += n * F, S += n * W, O += n * G, I += n * Y, P += n * J, x += n * X, n = e[8], p += n * M, d += n * D, 
      g += n * k, y += n * z, v += n * $, _ += n * q, m += n * H, b += n * B, w += n * V, E += n * K, S += n * F, O += n * W, 
      I += n * G, P += n * Y, x += n * J, A += n * X, n = e[9], d += n * M, g += n * D, y += n * k, v += n * z, _ += n * $, m += n * q, 
      b += n * H, w += n * B, E += n * V, S += n * K, O += n * F, I += n * W, P += n * G, x += n * Y, A += n * J, N += n * X, 
      n = e[10], g += n * M, y += n * D, v += n * k, _ += n * z, m += n * $, b += n * q, w += n * H, E += n * B, S += n * V, O += n * K, 
      I += n * F, P += n * W, x += n * G, A += n * Y, N += n * J, R += n * X, n = e[11], y += n * M, v += n * D, _ += n * k, m += n * z, 
      b += n * $, w += n * q, E += n * H, S += n * B, O += n * V, I += n * K, P += n * F, x += n * W, A += n * G, N += n * Y, 
      R += n * J, T += n * X, n = e[12], v += n * M, _ += n * D, m += n * k, b += n * z, w += n * $, E += n * q, S += n * H, O += n * B, 
      I += n * V, P += n * K, x += n * F, A += n * W, N += n * G, R += n * Y, T += n * J, j += n * X, n = e[13], _ += n * M, m += n * D, 
      b += n * k, w += n * z, E += n * $, S += n * q, O += n * H, I += n * B, P += n * V, x += n * K, A += n * F, N += n * W, 
      R += n * G, T += n * Y, j += n * J, C += n * X, n = e[14], m += n * M, b += n * D, w += n * k, E += n * z, S += n * $, O += n * q, 
      I += n * H, P += n * B, x += n * V, A += n * K, N += n * F, R += n * W, T += n * G, j += n * Y, C += n * J, L += n * X, 
      n = e[15], b += n * M, w += n * D, E += n * k, S += n * z, O += n * $, I += n * q, P += n * H, x += n * B, A += n * V, N += n * K, 
      R += n * F, T += n * W, j += n * G, C += n * Y, L += n * J, U += n * X, s += 38 * w, o += 38 * E, a += 38 * S, c += 38 * O, 
      u += 38 * I, h += 38 * P, l += 38 * x, f += 38 * A, p += 38 * N, d += 38 * R, g += 38 * T, y += 38 * j, v += 38 * C, _ += 38 * L, 
      m += 38 * U, i = 1, n = s + i + 65535, i = Math.floor(n / 65536), s = n - 65536 * i, n = o + i + 65535, i = Math.floor(n / 65536), 
      o = n - 65536 * i, n = a + i + 65535, i = Math.floor(n / 65536), a = n - 65536 * i, n = c + i + 65535, i = Math.floor(n / 65536), 
      c = n - 65536 * i, n = u + i + 65535, i = Math.floor(n / 65536), u = n - 65536 * i, n = h + i + 65535, i = Math.floor(n / 65536), 
      h = n - 65536 * i, n = l + i + 65535, i = Math.floor(n / 65536), l = n - 65536 * i, n = f + i + 65535, i = Math.floor(n / 65536), 
      f = n - 65536 * i, n = p + i + 65535, i = Math.floor(n / 65536), p = n - 65536 * i, n = d + i + 65535, i = Math.floor(n / 65536), 
      d = n - 65536 * i, n = g + i + 65535, i = Math.floor(n / 65536), g = n - 65536 * i, n = y + i + 65535, i = Math.floor(n / 65536), 
      y = n - 65536 * i, n = v + i + 65535, i = Math.floor(n / 65536), v = n - 65536 * i, n = _ + i + 65535, i = Math.floor(n / 65536), 
      _ = n - 65536 * i, n = m + i + 65535, i = Math.floor(n / 65536), m = n - 65536 * i, n = b + i + 65535, i = Math.floor(n / 65536), 
      b = n - 65536 * i, s += i - 1 + 37 * (i - 1), i = 1, n = s + i + 65535, i = Math.floor(n / 65536), s = n - 65536 * i, n = o + i + 65535, 
      i = Math.floor(n / 65536), o = n - 65536 * i, n = a + i + 65535, i = Math.floor(n / 65536), a = n - 65536 * i, n = c + i + 65535, 
      i = Math.floor(n / 65536), c = n - 65536 * i, n = u + i + 65535, i = Math.floor(n / 65536), u = n - 65536 * i, n = h + i + 65535, 
      i = Math.floor(n / 65536), h = n - 65536 * i, n = l + i + 65535, i = Math.floor(n / 65536), l = n - 65536 * i, n = f + i + 65535, 
      i = Math.floor(n / 65536), f = n - 65536 * i, n = p + i + 65535, i = Math.floor(n / 65536), p = n - 65536 * i, n = d + i + 65535, 
      i = Math.floor(n / 65536), d = n - 65536 * i, n = g + i + 65535, i = Math.floor(n / 65536), g = n - 65536 * i, n = y + i + 65535, 
      i = Math.floor(n / 65536), y = n - 65536 * i, n = v + i + 65535, i = Math.floor(n / 65536), v = n - 65536 * i, n = _ + i + 65535, 
      i = Math.floor(n / 65536), _ = n - 65536 * i, n = m + i + 65535, i = Math.floor(n / 65536), m = n - 65536 * i, n = b + i + 65535, 
      i = Math.floor(n / 65536), b = n - 65536 * i, s += i - 1 + 37 * (i - 1), t[0] = s, t[1] = o, t[2] = a, t[3] = c, t[4] = u, 
      t[5] = h, t[6] = l, t[7] = f, t[8] = p, t[9] = d, t[10] = g, t[11] = y, t[12] = v, t[13] = _, t[14] = m, t[15] = b;
    }
    function p(t, e) {
      f(t, e, e);
    }
    function d(t, e) {
      const r = new Uint8Array(32);
      const n = new Float64Array(80);
      const i = s(), o = s(), d = s(), g = s(), y = s(), v = s();
      for (let s = 0; s < 31; s++) r[s] = t[s];
      r[31] = 127 & t[31] | 64, r[0] &= 248, function(t, e) {
        for (let r = 0; r < 16; r++) t[r] = e[2 * r] + (e[2 * r + 1] << 8);
        t[15] &= 32767;
      }(n, e);
      for (let s = 0; s < 16; s++) o[s] = n[s];
      i[0] = g[0] = 1;
      for (let s = 254; s >= 0; --s) {
        const t = r[s >>> 3] >>> (7 & s) & 1;
        u(i, o, t), u(d, g, t), h(y, i, d), l(i, i, d), h(d, o, g), l(o, o, g), p(g, y), p(v, i), f(i, d, i), f(d, o, y), h(y, i, d), 
        l(i, i, d), p(o, i), l(d, g, v), f(i, d, a), h(i, i, g), f(d, d, i), f(i, g, v), f(g, o, n), p(o, y), u(i, o, t), u(d, g, t);
      }
      for (let s = 0; s < 16; s++) n[s + 16] = i[s], n[s + 32] = d[s], n[s + 48] = o[s], n[s + 64] = g[s];
      const _ = n.subarray(32);
      const m = n.subarray(16);
      !function(t, e) {
        const r = s();
        for (let n = 0; n < 16; n++) r[n] = e[n];
        for (let n = 253; n >= 0; n--) p(r, r), 2 !== n && 4 !== n && f(r, r, e);
        for (let n = 0; n < 16; n++) t[n] = r[n];
      }(_, _), f(m, m, _);
      const b = new Uint8Array(32);
      return function(t, e) {
        const r = s();
        const n = s();
        for (let i = 0; i < 16; i++) n[i] = e[i];
        c(n), c(n), c(n);
        for (let i = 0; i < 2; i++) {
          r[0] = n[0] - 65517;
          for (let e = 1; e < 15; e++) r[e] = n[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
          r[15] = n[15] - 32767 - (r[14] >> 16 & 1);
          const t = r[15] >> 16 & 1;
          r[14] &= 65535, u(n, r, 1 - t);
        }
        for (let i = 0; i < 16; i++) t[2 * i] = 255 & n[i], t[2 * i + 1] = n[i] >> 8;
      }(b, m), b;
    }
    function g(t) {
      return d(t, o);
    }
    function y(t) {
      if (t.length !== e.KS) throw new Error(`x25519: seed must be ${e.KS} bytes`);
      const r = new Uint8Array(t);
      return {
        publicKey: g(r),
        secretKey: r
      };
    }
    e.Au = function(t) {
      const e = (0, n.randomBytes)(32, t);
      const r = y(e);
      return (0, i.wipe)(e), r;
    }, e.gi = function(t, r, n = !1) {
      if (t.length !== e.kz) throw new Error("X25519: incorrect secret key length");
      if (r.length !== e.kz) throw new Error("X25519: incorrect public key length");
      const i = d(t, r);
      if (n) {
        let t = 0;
        for (let e = 0; e < i.length; e++) t |= i[e];
        if (0 === t) throw new Error("X25519: invalid shared key");
      }
      return i;
    };
  },
  3058: (t, e, r) => {
    "use strict";
    function n() {
      return (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) || (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) || {};
    }
    function i() {
      const t = n();
      return t.subtle || t.webkitSubtle;
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.isBrowserCryptoAvailable = e.getSubtleCrypto = e.getBrowerCrypto = void 0, e.getBrowerCrypto = n, e.getSubtleCrypto = i, 
    e.isBrowserCryptoAvailable = function() {
      return !!n() && !!i();
    };
  },
  35133: (t, e) => {
    "use strict";
    function r() {
      return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product;
    }
    function n() {
      return "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.node;
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.isBrowser = e.isNode = e.isReactNative = void 0, e.isReactNative = r, e.isNode = n, e.isBrowser = function() {
      return !r() && !n();
    };
  },
  65842: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    const n = r(2743);
    n.__exportStar(r(3058), e), n.__exportStar(r(35133), e);
  },
  2743: (t, e, r) => {
    "use strict";
    r.r(e), r.d(e, {
      __assign: () => s,
      __asyncDelegator: () => b,
      __asyncGenerator: () => m,
      __asyncValues: () => w,
      __await: () => _,
      __awaiter: () => h,
      __classPrivateFieldGet: () => I,
      __classPrivateFieldSet: () => P,
      __createBinding: () => f,
      __decorate: () => a,
      __exportStar: () => p,
      __extends: () => i,
      __generator: () => l,
      __importDefault: () => O,
      __importStar: () => S,
      __makeTemplateObject: () => E,
      __metadata: () => u,
      __param: () => c,
      __read: () => g,
      __rest: () => o,
      __spread: () => y,
      __spreadArrays: () => v,
      __values: () => d
    });
    var n = function(t, e) {
      return n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(t, e) {
        t.__proto__ = e;
      } || function(t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, n(t, e);
    };
    function i(t, e) {
      function r() {
        this.constructor = t;
      }
      n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
    }
    var s = function() {
      return s = Object.assign || function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
      }, s.apply(this, arguments);
    };
    function o(t, e) {
      var r = {};
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
      }
      return r;
    }
    function a(t, e, r, n) {
      var i, s = arguments.length, o = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, r, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o);
      return s > 3 && o && Object.defineProperty(e, r, o), o;
    }
    function c(t, e) {
      return function(r, n) {
        e(r, n, t);
      };
    }
    function u(t, e) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
    }
    function h(t, e, r, n) {
      return new (r || (r = Promise))((function(i, s) {
        function o(t) {
          try {
            c(n.next(t));
          } catch (e) {
            s(e);
          }
        }
        function a(t) {
          try {
            c(n.throw(t));
          } catch (e) {
            s(e);
          }
        }
        function c(t) {
          t.done ? i(t.value) : function(t) {
            return t instanceof r ? t : new r((function(e) {
              e(t);
            }));
          }(t.value).then(o, a);
        }
        c((n = n.apply(t, e || [])).next());
      }));
    }
    function l(t, e) {
      var r, n, i, s, o = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1];
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
      function a(s) {
        return function(a) {
          return function(s) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;o; ) try {
              if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
              switch (n = 0, i && (s = [ 2 & s[0], i.value ]), s[0]) {
               case 0:
               case 1:
                i = s;
                break;

               case 4:
                return o.label++, {
                  value: s[1],
                  done: !1
                };

               case 5:
                o.label++, n = s[1], s = [ 0 ];
                continue;

               case 7:
                s = o.ops.pop(), o.trys.pop();
                continue;

               default:
                if (!(i = o.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                  o = 0;
                  continue;
                }
                if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                  o.label = s[1];
                  break;
                }
                if (6 === s[0] && o.label < i[1]) {
                  o.label = i[1], i = s;
                  break;
                }
                if (i && o.label < i[2]) {
                  o.label = i[2], o.ops.push(s);
                  break;
                }
                i[2] && o.ops.pop(), o.trys.pop();
                continue;
              }
              s = e.call(t, o);
            } catch (a) {
              s = [ 6, a ], n = 0;
            } finally {
              r = i = 0;
            }
            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }([ s, a ]);
        };
      }
    }
    function f(t, e, r, n) {
      void 0 === n && (n = r), t[n] = e[r];
    }
    function p(t, e) {
      for (var r in t) "default" === r || e.hasOwnProperty(r) || (e[r] = t[r]);
    }
    function d(t) {
      var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], n = 0;
      if (r) return r.call(t);
      if (t && "number" == typeof t.length) return {
        next: function() {
          return t && n >= t.length && (t = void 0), {
            value: t && t[n++],
            done: !t
          };
        }
      };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function g(t, e) {
      var r = "function" == typeof Symbol && t[Symbol.iterator];
      if (!r) return t;
      var n, i, s = r.call(t), o = [];
      try {
        for (;(void 0 === e || e-- > 0) && !(n = s.next()).done; ) o.push(n.value);
      } catch (a) {
        i = {
          error: a
        };
      } finally {
        try {
          n && !n.done && (r = s.return) && r.call(s);
        } finally {
          if (i) throw i.error;
        }
      }
      return o;
    }
    function y() {
      for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(g(arguments[e]));
      return t;
    }
    function v() {
      for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
      var n = Array(t), i = 0;
      for (e = 0; e < r; e++) for (var s = arguments[e], o = 0, a = s.length; o < a; o++, i++) n[i] = s[o];
      return n;
    }
    function _(t) {
      return this instanceof _ ? (this.v = t, this) : new _(t);
    }
    function m(t, e, r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n, i = r.apply(t, e || []), s = [];
      return n = {}, o("next"), o("throw"), o("return"), n[Symbol.asyncIterator] = function() {
        return this;
      }, n;
      function o(t) {
        i[t] && (n[t] = function(e) {
          return new Promise((function(r, n) {
            s.push([ t, e, r, n ]) > 1 || a(t, e);
          }));
        });
      }
      function a(t, e) {
        try {
          !function(t) {
            t.value instanceof _ ? Promise.resolve(t.value.v).then(c, u) : h(s[0][2], t);
          }(i[t](e));
        } catch (r) {
          h(s[0][3], r);
        }
      }
      function c(t) {
        a("next", t);
      }
      function u(t) {
        a("throw", t);
      }
      function h(t, e) {
        t(e), s.shift(), s.length && a(s[0][0], s[0][1]);
      }
    }
    function b(t) {
      var e, r;
      return e = {}, n("next"), n("throw", (function(t) {
        throw t;
      })), n("return"), e[Symbol.iterator] = function() {
        return this;
      }, e;
      function n(n, i) {
        e[n] = t[n] ? function(e) {
          return (r = !r) ? {
            value: _(t[n](e)),
            done: "return" === n
          } : i ? i(e) : e;
        } : i;
      }
    }
    function w(t) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var e, r = t[Symbol.asyncIterator];
      return r ? r.call(t) : (t = d(t), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
        return this;
      }, e);
      function n(r) {
        e[r] = t[r] && function(e) {
          return new Promise((function(n, i) {
            (function(t, e, r, n) {
              Promise.resolve(n).then((function(e) {
                t({
                  value: e,
                  done: r
                });
              }), e);
            })(n, i, (e = t[r](e)).done, e.value);
          }));
        };
      }
    }
    function E(t, e) {
      return Object.defineProperty ? Object.defineProperty(t, "raw", {
        value: e
      }) : t.raw = e, t;
    }
    function S(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return e.default = t, e;
    }
    function O(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    function I(t, e) {
      if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
      return e.get(t);
    }
    function P(t, e, r) {
      if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
      return e.set(t, r), r;
    }
  },
  46100: (t, e, r) => {
    "use strict";
    r.d(e, {
      q: () => n
    });
    class n {}
  },
  26120: (t, e, r) => {
    "use strict";
    r.r(e), r.d(e, {
      IEvents: () => n.q
    });
    var n = r(46100);
  },
  81408: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.HEARTBEAT_EVENTS = e.HEARTBEAT_INTERVAL = void 0;
    const n = r(33897);
    e.HEARTBEAT_INTERVAL = n.FIVE_SECONDS, e.HEARTBEAT_EVENTS = {
      pulse: "heartbeat_pulse"
    };
  },
  97436: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    r(49011).__exportStar(r(81408), e);
  },
  9196: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.HeartBeat = void 0;
    const n = r(49011);
    const i = r(86329);
    const s = r(33897);
    const o = r(85690);
    const a = r(97436);
    class c extends o.IHeartBeat {
      constructor(t) {
        super(t), this.events = new i.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (null == t ? void 0 : t.interval) || a.HEARTBEAT_INTERVAL;
      }
      static init(t) {
        return n.__awaiter(this, void 0, void 0, (function*() {
          const e = new c(t);
          return yield e.init(), e;
        }));
      }
      init() {
        return n.__awaiter(this, void 0, void 0, (function*() {
          yield this.initialize();
        }));
      }
      stop() {
        clearInterval(this.intervalRef);
      }
      on(t, e) {
        this.events.on(t, e);
      }
      once(t, e) {
        this.events.once(t, e);
      }
      off(t, e) {
        this.events.off(t, e);
      }
      removeListener(t, e) {
        this.events.removeListener(t, e);
      }
      initialize() {
        return n.__awaiter(this, void 0, void 0, (function*() {
          this.intervalRef = setInterval((() => this.pulse()), s.toMiliseconds(this.interval));
        }));
      }
      pulse() {
        this.events.emit(a.HEARTBEAT_EVENTS.pulse);
      }
    }
    e.HeartBeat = c;
  },
  14633: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    const n = r(49011);
    n.__exportStar(r(9196), e), n.__exportStar(r(85690), e), n.__exportStar(r(97436), e);
  },
  16117: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.IHeartBeat = void 0;
    const n = r(26120);
    class i extends n.IEvents {
      constructor(t) {
        super();
      }
    }
    e.IHeartBeat = i;
  },
  85690: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    r(49011).__exportStar(r(16117), e);
  },
  49011: (t, e, r) => {
    "use strict";
    r.r(e), r.d(e, {
      __assign: () => s,
      __asyncDelegator: () => b,
      __asyncGenerator: () => m,
      __asyncValues: () => w,
      __await: () => _,
      __awaiter: () => h,
      __classPrivateFieldGet: () => I,
      __classPrivateFieldSet: () => P,
      __createBinding: () => f,
      __decorate: () => a,
      __exportStar: () => p,
      __extends: () => i,
      __generator: () => l,
      __importDefault: () => O,
      __importStar: () => S,
      __makeTemplateObject: () => E,
      __metadata: () => u,
      __param: () => c,
      __read: () => g,
      __rest: () => o,
      __spread: () => y,
      __spreadArrays: () => v,
      __values: () => d
    });
    var n = function(t, e) {
      return n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(t, e) {
        t.__proto__ = e;
      } || function(t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, n(t, e);
    };
    function i(t, e) {
      function r() {
        this.constructor = t;
      }
      n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
    }
    var s = function() {
      return s = Object.assign || function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
      }, s.apply(this, arguments);
    };
    function o(t, e) {
      var r = {};
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
      }
      return r;
    }
    function a(t, e, r, n) {
      var i, s = arguments.length, o = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, r, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o);
      return s > 3 && o && Object.defineProperty(e, r, o), o;
    }
    function c(t, e) {
      return function(r, n) {
        e(r, n, t);
      };
    }
    function u(t, e) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
    }
    function h(t, e, r, n) {
      return new (r || (r = Promise))((function(i, s) {
        function o(t) {
          try {
            c(n.next(t));
          } catch (e) {
            s(e);
          }
        }
        function a(t) {
          try {
            c(n.throw(t));
          } catch (e) {
            s(e);
          }
        }
        function c(t) {
          t.done ? i(t.value) : function(t) {
            return t instanceof r ? t : new r((function(e) {
              e(t);
            }));
          }(t.value).then(o, a);
        }
        c((n = n.apply(t, e || [])).next());
      }));
    }
    function l(t, e) {
      var r, n, i, s, o = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1];
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
      function a(s) {
        return function(a) {
          return function(s) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;o; ) try {
              if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
              switch (n = 0, i && (s = [ 2 & s[0], i.value ]), s[0]) {
               case 0:
               case 1:
                i = s;
                break;

               case 4:
                return o.label++, {
                  value: s[1],
                  done: !1
                };

               case 5:
                o.label++, n = s[1], s = [ 0 ];
                continue;

               case 7:
                s = o.ops.pop(), o.trys.pop();
                continue;

               default:
                if (!(i = o.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                  o = 0;
                  continue;
                }
                if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                  o.label = s[1];
                  break;
                }
                if (6 === s[0] && o.label < i[1]) {
                  o.label = i[1], i = s;
                  break;
                }
                if (i && o.label < i[2]) {
                  o.label = i[2], o.ops.push(s);
                  break;
                }
                i[2] && o.ops.pop(), o.trys.pop();
                continue;
              }
              s = e.call(t, o);
            } catch (a) {
              s = [ 6, a ], n = 0;
            } finally {
              r = i = 0;
            }
            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }([ s, a ]);
        };
      }
    }
    function f(t, e, r, n) {
      void 0 === n && (n = r), t[n] = e[r];
    }
    function p(t, e) {
      for (var r in t) "default" === r || e.hasOwnProperty(r) || (e[r] = t[r]);
    }
    function d(t) {
      var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], n = 0;
      if (r) return r.call(t);
      if (t && "number" == typeof t.length) return {
        next: function() {
          return t && n >= t.length && (t = void 0), {
            value: t && t[n++],
            done: !t
          };
        }
      };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function g(t, e) {
      var r = "function" == typeof Symbol && t[Symbol.iterator];
      if (!r) return t;
      var n, i, s = r.call(t), o = [];
      try {
        for (;(void 0 === e || e-- > 0) && !(n = s.next()).done; ) o.push(n.value);
      } catch (a) {
        i = {
          error: a
        };
      } finally {
        try {
          n && !n.done && (r = s.return) && r.call(s);
        } finally {
          if (i) throw i.error;
        }
      }
      return o;
    }
    function y() {
      for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(g(arguments[e]));
      return t;
    }
    function v() {
      for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
      var n = Array(t), i = 0;
      for (e = 0; e < r; e++) for (var s = arguments[e], o = 0, a = s.length; o < a; o++, i++) n[i] = s[o];
      return n;
    }
    function _(t) {
      return this instanceof _ ? (this.v = t, this) : new _(t);
    }
    function m(t, e, r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n, i = r.apply(t, e || []), s = [];
      return n = {}, o("next"), o("throw"), o("return"), n[Symbol.asyncIterator] = function() {
        return this;
      }, n;
      function o(t) {
        i[t] && (n[t] = function(e) {
          return new Promise((function(r, n) {
            s.push([ t, e, r, n ]) > 1 || a(t, e);
          }));
        });
      }
      function a(t, e) {
        try {
          !function(t) {
            t.value instanceof _ ? Promise.resolve(t.value.v).then(c, u) : h(s[0][2], t);
          }(i[t](e));
        } catch (r) {
          h(s[0][3], r);
        }
      }
      function c(t) {
        a("next", t);
      }
      function u(t) {
        a("throw", t);
      }
      function h(t, e) {
        t(e), s.shift(), s.length && a(s[0][0], s[0][1]);
      }
    }
    function b(t) {
      var e, r;
      return e = {}, n("next"), n("throw", (function(t) {
        throw t;
      })), n("return"), e[Symbol.iterator] = function() {
        return this;
      }, e;
      function n(n, i) {
        e[n] = t[n] ? function(e) {
          return (r = !r) ? {
            value: _(t[n](e)),
            done: "return" === n
          } : i ? i(e) : e;
        } : i;
      }
    }
    function w(t) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var e, r = t[Symbol.asyncIterator];
      return r ? r.call(t) : (t = d(t), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
        return this;
      }, e);
      function n(r) {
        e[r] = t[r] && function(e) {
          return new Promise((function(n, i) {
            (function(t, e, r, n) {
              Promise.resolve(n).then((function(e) {
                t({
                  value: e,
                  done: r
                });
              }), e);
            })(n, i, (e = t[r](e)).done, e.value);
          }));
        };
      }
    }
    function E(t, e) {
      return Object.defineProperty ? Object.defineProperty(t, "raw", {
        value: e
      }) : t.raw = e, t;
    }
    function S(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return e.default = t, e;
    }
    function O(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    function I(t, e) {
      if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
      return e.get(t);
    }
    function P(t, e, r) {
      if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
      return e.set(t, r), r;
    }
  },
  63167: (t, e, r) => {
    "use strict";
    const n = r(83634);
    const i = r(70967);
    const s = n.__importDefault(r(88456));
    const o = r(77862);
    class a {
      constructor() {
        this.localStorage = s.default;
      }
      getKeys() {
        return n.__awaiter(this, void 0, void 0, (function*() {
          return Object.keys(this.localStorage);
        }));
      }
      getEntries() {
        return n.__awaiter(this, void 0, void 0, (function*() {
          return Object.entries(this.localStorage).map(o.parseEntry);
        }));
      }
      getItem(t) {
        return n.__awaiter(this, void 0, void 0, (function*() {
          const e = this.localStorage.getItem(t);
          if (null !== e) return i.safeJsonParse(e);
        }));
      }
      setItem(t, e) {
        return n.__awaiter(this, void 0, void 0, (function*() {
          this.localStorage.setItem(t, i.safeJsonStringify(e));
        }));
      }
      removeItem(t) {
        return n.__awaiter(this, void 0, void 0, (function*() {
          this.localStorage.removeItem(t);
        }));
      }
    }
    e.ZP = a;
  },
  88456: (t, e, r) => {
    "use strict";
    !function() {
      let e;
      function n() {}
      e = n, e.prototype.getItem = function(t) {
        return this.hasOwnProperty(t) ? String(this[t]) : null;
      }, e.prototype.setItem = function(t, e) {
        this[t] = String(e);
      }, e.prototype.removeItem = function(t) {
        delete this[t];
      }, e.prototype.clear = function() {
        const t = this;
        Object.keys(t).forEach((function(e) {
          t[e] = void 0, delete t[e];
        }));
      }, e.prototype.key = function(t) {
        return t = t || 0, Object.keys(this)[t];
      }, e.prototype.__defineGetter__("length", (function() {
        return Object.keys(this).length;
      })), void 0 !== r.g && r.g.localStorage ? t.exports = r.g.localStorage : "undefined" != typeof window && window.localStorage ? t.exports = window.localStorage : t.exports = new n;
    }();
  },
  77862: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    const n = r(83634);
    n.__exportStar(r(23341), e), n.__exportStar(r(50112), e);
  },
  23341: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.IKeyValueStorage = void 0;
    e.IKeyValueStorage = class {};
  },
  50112: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.parseEntry = void 0;
    const n = r(70967);
    e.parseEntry = function(t) {
      var e;
      return [ t[0], n.safeJsonParse(null !== (e = t[1]) && void 0 !== e ? e : "") ];
    };
  },
  83634: (t, e, r) => {
    "use strict";
    r.r(e), r.d(e, {
      __assign: () => s,
      __asyncDelegator: () => b,
      __asyncGenerator: () => m,
      __asyncValues: () => w,
      __await: () => _,
      __awaiter: () => h,
      __classPrivateFieldGet: () => I,
      __classPrivateFieldSet: () => P,
      __createBinding: () => f,
      __decorate: () => a,
      __exportStar: () => p,
      __extends: () => i,
      __generator: () => l,
      __importDefault: () => O,
      __importStar: () => S,
      __makeTemplateObject: () => E,
      __metadata: () => u,
      __param: () => c,
      __read: () => g,
      __rest: () => o,
      __spread: () => y,
      __spreadArrays: () => v,
      __values: () => d
    });
    var n = function(t, e) {
      return n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(t, e) {
        t.__proto__ = e;
      } || function(t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, n(t, e);
    };
    function i(t, e) {
      function r() {
        this.constructor = t;
      }
      n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
    }
    var s = function() {
      return s = Object.assign || function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
      }, s.apply(this, arguments);
    };
    function o(t, e) {
      var r = {};
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
      }
      return r;
    }
    function a(t, e, r, n) {
      var i, s = arguments.length, o = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, r, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o);
      return s > 3 && o && Object.defineProperty(e, r, o), o;
    }
    function c(t, e) {
      return function(r, n) {
        e(r, n, t);
      };
    }
    function u(t, e) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
    }
    function h(t, e, r, n) {
      return new (r || (r = Promise))((function(i, s) {
        function o(t) {
          try {
            c(n.next(t));
          } catch (e) {
            s(e);
          }
        }
        function a(t) {
          try {
            c(n.throw(t));
          } catch (e) {
            s(e);
          }
        }
        function c(t) {
          t.done ? i(t.value) : function(t) {
            return t instanceof r ? t : new r((function(e) {
              e(t);
            }));
          }(t.value).then(o, a);
        }
        c((n = n.apply(t, e || [])).next());
      }));
    }
    function l(t, e) {
      var r, n, i, s, o = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1];
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
      function a(s) {
        return function(a) {
          return function(s) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;o; ) try {
              if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
              switch (n = 0, i && (s = [ 2 & s[0], i.value ]), s[0]) {
               case 0:
               case 1:
                i = s;
                break;

               case 4:
                return o.label++, {
                  value: s[1],
                  done: !1
                };

               case 5:
                o.label++, n = s[1], s = [ 0 ];
                continue;

               case 7:
                s = o.ops.pop(), o.trys.pop();
                continue;

               default:
                if (!(i = o.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                  o = 0;
                  continue;
                }
                if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                  o.label = s[1];
                  break;
                }
                if (6 === s[0] && o.label < i[1]) {
                  o.label = i[1], i = s;
                  break;
                }
                if (i && o.label < i[2]) {
                  o.label = i[2], o.ops.push(s);
                  break;
                }
                i[2] && o.ops.pop(), o.trys.pop();
                continue;
              }
              s = e.call(t, o);
            } catch (a) {
              s = [ 6, a ], n = 0;
            } finally {
              r = i = 0;
            }
            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }([ s, a ]);
        };
      }
    }
    function f(t, e, r, n) {
      void 0 === n && (n = r), t[n] = e[r];
    }
    function p(t, e) {
      for (var r in t) "default" === r || e.hasOwnProperty(r) || (e[r] = t[r]);
    }
    function d(t) {
      var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], n = 0;
      if (r) return r.call(t);
      if (t && "number" == typeof t.length) return {
        next: function() {
          return t && n >= t.length && (t = void 0), {
            value: t && t[n++],
            done: !t
          };
        }
      };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function g(t, e) {
      var r = "function" == typeof Symbol && t[Symbol.iterator];
      if (!r) return t;
      var n, i, s = r.call(t), o = [];
      try {
        for (;(void 0 === e || e-- > 0) && !(n = s.next()).done; ) o.push(n.value);
      } catch (a) {
        i = {
          error: a
        };
      } finally {
        try {
          n && !n.done && (r = s.return) && r.call(s);
        } finally {
          if (i) throw i.error;
        }
      }
      return o;
    }
    function y() {
      for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(g(arguments[e]));
      return t;
    }
    function v() {
      for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
      var n = Array(t), i = 0;
      for (e = 0; e < r; e++) for (var s = arguments[e], o = 0, a = s.length; o < a; o++, i++) n[i] = s[o];
      return n;
    }
    function _(t) {
      return this instanceof _ ? (this.v = t, this) : new _(t);
    }
    function m(t, e, r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n, i = r.apply(t, e || []), s = [];
      return n = {}, o("next"), o("throw"), o("return"), n[Symbol.asyncIterator] = function() {
        return this;
      }, n;
      function o(t) {
        i[t] && (n[t] = function(e) {
          return new Promise((function(r, n) {
            s.push([ t, e, r, n ]) > 1 || a(t, e);
          }));
        });
      }
      function a(t, e) {
        try {
          !function(t) {
            t.value instanceof _ ? Promise.resolve(t.value.v).then(c, u) : h(s[0][2], t);
          }(i[t](e));
        } catch (r) {
          h(s[0][3], r);
        }
      }
      function c(t) {
        a("next", t);
      }
      function u(t) {
        a("throw", t);
      }
      function h(t, e) {
        t(e), s.shift(), s.length && a(s[0][0], s[0][1]);
      }
    }
    function b(t) {
      var e, r;
      return e = {}, n("next"), n("throw", (function(t) {
        throw t;
      })), n("return"), e[Symbol.iterator] = function() {
        return this;
      }, e;
      function n(n, i) {
        e[n] = t[n] ? function(e) {
          return (r = !r) ? {
            value: _(t[n](e)),
            done: "return" === n
          } : i ? i(e) : e;
        } : i;
      }
    }
    function w(t) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var e, r = t[Symbol.asyncIterator];
      return r ? r.call(t) : (t = d(t), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
        return this;
      }, e);
      function n(r) {
        e[r] = t[r] && function(e) {
          return new Promise((function(n, i) {
            (function(t, e, r, n) {
              Promise.resolve(n).then((function(e) {
                t({
                  value: e,
                  done: r
                });
              }), e);
            })(n, i, (e = t[r](e)).done, e.value);
          }));
        };
      }
    }
    function E(t, e) {
      return Object.defineProperty ? Object.defineProperty(t, "raw", {
        value: e
      }) : t.raw = e, t;
    }
    function S(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return e.default = t, e;
    }
    function O(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    function I(t, e) {
      if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
      return e.get(t);
    }
    function P(t, e, r) {
      if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
      return e.set(t, r), r;
    }
  },
  61847: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.PINO_CUSTOM_CONTEXT_KEY = e.PINO_LOGGER_DEFAULTS = void 0, e.PINO_LOGGER_DEFAULTS = {
      level: "info"
    }, e.PINO_CUSTOM_CONTEXT_KEY = "custom_context";
  },
  72689: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.pino = void 0;
    const n = r(14242);
    const i = n.__importDefault(r(43149));
    Object.defineProperty(e, "pino", {
      enumerable: !0,
      get: function() {
        return i.default;
      }
    }), n.__exportStar(r(61847), e), n.__exportStar(r(33884), e);
  },
  33884: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.generateChildLogger = e.formatChildLoggerContext = e.getLoggerContext = e.setBrowserLoggerContext = e.getBrowserLoggerContext = e.getDefaultLoggerOptions = void 0;
    const n = r(61847);
    function i(t, e = n.PINO_CUSTOM_CONTEXT_KEY) {
      return t[e] || "";
    }
    function s(t, e, r = n.PINO_CUSTOM_CONTEXT_KEY) {
      return t[r] = e, t;
    }
    function o(t, e = n.PINO_CUSTOM_CONTEXT_KEY) {
      let r = "";
      return r = void 0 === t.bindings ? i(t, e) : t.bindings().context || "", r;
    }
    function a(t, e, r = n.PINO_CUSTOM_CONTEXT_KEY) {
      const i = o(t, r);
      return i.trim() ? `${i}/${e}` : e;
    }
    e.getDefaultLoggerOptions = function(t) {
      return Object.assign(Object.assign({}, t), {
        level: (null == t ? void 0 : t.level) || n.PINO_LOGGER_DEFAULTS.level
      });
    }, e.getBrowserLoggerContext = i, e.setBrowserLoggerContext = s, e.getLoggerContext = o, e.formatChildLoggerContext = a, 
    e.generateChildLogger = function(t, e, r = n.PINO_CUSTOM_CONTEXT_KEY) {
      const i = a(t, e, r);
      return s(t.child({
        context: i
      }), i, r);
    };
  },
  14242: (t, e, r) => {
    "use strict";
    r.r(e), r.d(e, {
      __assign: () => s,
      __asyncDelegator: () => b,
      __asyncGenerator: () => m,
      __asyncValues: () => w,
      __await: () => _,
      __awaiter: () => h,
      __classPrivateFieldGet: () => I,
      __classPrivateFieldSet: () => P,
      __createBinding: () => f,
      __decorate: () => a,
      __exportStar: () => p,
      __extends: () => i,
      __generator: () => l,
      __importDefault: () => O,
      __importStar: () => S,
      __makeTemplateObject: () => E,
      __metadata: () => u,
      __param: () => c,
      __read: () => g,
      __rest: () => o,
      __spread: () => y,
      __spreadArrays: () => v,
      __values: () => d
    });
    var n = function(t, e) {
      return n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(t, e) {
        t.__proto__ = e;
      } || function(t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, n(t, e);
    };
    function i(t, e) {
      function r() {
        this.constructor = t;
      }
      n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
    }
    var s = function() {
      return s = Object.assign || function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
      }, s.apply(this, arguments);
    };
    function o(t, e) {
      var r = {};
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
      }
      return r;
    }
    function a(t, e, r, n) {
      var i, s = arguments.length, o = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, r, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o);
      return s > 3 && o && Object.defineProperty(e, r, o), o;
    }
    function c(t, e) {
      return function(r, n) {
        e(r, n, t);
      };
    }
    function u(t, e) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
    }
    function h(t, e, r, n) {
      return new (r || (r = Promise))((function(i, s) {
        function o(t) {
          try {
            c(n.next(t));
          } catch (e) {
            s(e);
          }
        }
        function a(t) {
          try {
            c(n.throw(t));
          } catch (e) {
            s(e);
          }
        }
        function c(t) {
          t.done ? i(t.value) : function(t) {
            return t instanceof r ? t : new r((function(e) {
              e(t);
            }));
          }(t.value).then(o, a);
        }
        c((n = n.apply(t, e || [])).next());
      }));
    }
    function l(t, e) {
      var r, n, i, s, o = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1];
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
      function a(s) {
        return function(a) {
          return function(s) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;o; ) try {
              if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
              switch (n = 0, i && (s = [ 2 & s[0], i.value ]), s[0]) {
               case 0:
               case 1:
                i = s;
                break;

               case 4:
                return o.label++, {
                  value: s[1],
                  done: !1
                };

               case 5:
                o.label++, n = s[1], s = [ 0 ];
                continue;

               case 7:
                s = o.ops.pop(), o.trys.pop();
                continue;

               default:
                if (!(i = o.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                  o = 0;
                  continue;
                }
                if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                  o.label = s[1];
                  break;
                }
                if (6 === s[0] && o.label < i[1]) {
                  o.label = i[1], i = s;
                  break;
                }
                if (i && o.label < i[2]) {
                  o.label = i[2], o.ops.push(s);
                  break;
                }
                i[2] && o.ops.pop(), o.trys.pop();
                continue;
              }
              s = e.call(t, o);
            } catch (a) {
              s = [ 6, a ], n = 0;
            } finally {
              r = i = 0;
            }
            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }([ s, a ]);
        };
      }
    }
    function f(t, e, r, n) {
      void 0 === n && (n = r), t[n] = e[r];
    }
    function p(t, e) {
      for (var r in t) "default" === r || e.hasOwnProperty(r) || (e[r] = t[r]);
    }
    function d(t) {
      var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], n = 0;
      if (r) return r.call(t);
      if (t && "number" == typeof t.length) return {
        next: function() {
          return t && n >= t.length && (t = void 0), {
            value: t && t[n++],
            done: !t
          };
        }
      };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function g(t, e) {
      var r = "function" == typeof Symbol && t[Symbol.iterator];
      if (!r) return t;
      var n, i, s = r.call(t), o = [];
      try {
        for (;(void 0 === e || e-- > 0) && !(n = s.next()).done; ) o.push(n.value);
      } catch (a) {
        i = {
          error: a
        };
      } finally {
        try {
          n && !n.done && (r = s.return) && r.call(s);
        } finally {
          if (i) throw i.error;
        }
      }
      return o;
    }
    function y() {
      for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(g(arguments[e]));
      return t;
    }
    function v() {
      for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
      var n = Array(t), i = 0;
      for (e = 0; e < r; e++) for (var s = arguments[e], o = 0, a = s.length; o < a; o++, i++) n[i] = s[o];
      return n;
    }
    function _(t) {
      return this instanceof _ ? (this.v = t, this) : new _(t);
    }
    function m(t, e, r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n, i = r.apply(t, e || []), s = [];
      return n = {}, o("next"), o("throw"), o("return"), n[Symbol.asyncIterator] = function() {
        return this;
      }, n;
      function o(t) {
        i[t] && (n[t] = function(e) {
          return new Promise((function(r, n) {
            s.push([ t, e, r, n ]) > 1 || a(t, e);
          }));
        });
      }
      function a(t, e) {
        try {
          !function(t) {
            t.value instanceof _ ? Promise.resolve(t.value.v).then(c, u) : h(s[0][2], t);
          }(i[t](e));
        } catch (r) {
          h(s[0][3], r);
        }
      }
      function c(t) {
        a("next", t);
      }
      function u(t) {
        a("throw", t);
      }
      function h(t, e) {
        t(e), s.shift(), s.length && a(s[0][0], s[0][1]);
      }
    }
    function b(t) {
      var e, r;
      return e = {}, n("next"), n("throw", (function(t) {
        throw t;
      })), n("return"), e[Symbol.iterator] = function() {
        return this;
      }, e;
      function n(n, i) {
        e[n] = t[n] ? function(e) {
          return (r = !r) ? {
            value: _(t[n](e)),
            done: "return" === n
          } : i ? i(e) : e;
        } : i;
      }
    }
    function w(t) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var e, r = t[Symbol.asyncIterator];
      return r ? r.call(t) : (t = d(t), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
        return this;
      }, e);
      function n(r) {
        e[r] = t[r] && function(e) {
          return new Promise((function(n, i) {
            (function(t, e, r, n) {
              Promise.resolve(n).then((function(e) {
                t({
                  value: e,
                  done: r
                });
              }), e);
            })(n, i, (e = t[r](e)).done, e.value);
          }));
        };
      }
    }
    function E(t, e) {
      return Object.defineProperty ? Object.defineProperty(t, "raw", {
        value: e
      }) : t.raw = e, t;
    }
    function S(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return e.default = t, e;
    }
    function O(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    function I(t, e) {
      if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
      return e.get(t);
    }
    function P(t, e, r) {
      if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
      return e.set(t, r), r;
    }
  },
  36496: () => {},
  67481: () => {},
  44157: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    const n = r(11743);
    n.__exportStar(r(45182), e), n.__exportStar(r(25902), e);
  },
  45182: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.ONE_THOUSAND = e.ONE_HUNDRED = void 0, e.ONE_HUNDRED = 100, e.ONE_THOUSAND = 1e3;
  },
  25902: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.ONE_YEAR = e.FOUR_WEEKS = e.THREE_WEEKS = e.TWO_WEEKS = e.ONE_WEEK = e.THIRTY_DAYS = e.SEVEN_DAYS = e.FIVE_DAYS = e.THREE_DAYS = e.ONE_DAY = e.TWENTY_FOUR_HOURS = e.TWELVE_HOURS = e.SIX_HOURS = e.THREE_HOURS = e.ONE_HOUR = e.SIXTY_MINUTES = e.THIRTY_MINUTES = e.TEN_MINUTES = e.FIVE_MINUTES = e.ONE_MINUTE = e.SIXTY_SECONDS = e.THIRTY_SECONDS = e.TEN_SECONDS = e.FIVE_SECONDS = e.ONE_SECOND = void 0, 
    e.ONE_SECOND = 1, e.FIVE_SECONDS = 5, e.TEN_SECONDS = 10, e.THIRTY_SECONDS = 30, e.SIXTY_SECONDS = 60, e.ONE_MINUTE = e.SIXTY_SECONDS, 
    e.FIVE_MINUTES = 5 * e.ONE_MINUTE, e.TEN_MINUTES = 10 * e.ONE_MINUTE, e.THIRTY_MINUTES = 30 * e.ONE_MINUTE, e.SIXTY_MINUTES = 60 * e.ONE_MINUTE, 
    e.ONE_HOUR = e.SIXTY_MINUTES, e.THREE_HOURS = 3 * e.ONE_HOUR, e.SIX_HOURS = 6 * e.ONE_HOUR, e.TWELVE_HOURS = 12 * e.ONE_HOUR, 
    e.TWENTY_FOUR_HOURS = 24 * e.ONE_HOUR, e.ONE_DAY = e.TWENTY_FOUR_HOURS, e.THREE_DAYS = 3 * e.ONE_DAY, e.FIVE_DAYS = 5 * e.ONE_DAY, 
    e.SEVEN_DAYS = 7 * e.ONE_DAY, e.THIRTY_DAYS = 30 * e.ONE_DAY, e.ONE_WEEK = e.SEVEN_DAYS, e.TWO_WEEKS = 2 * e.ONE_WEEK, e.THREE_WEEKS = 3 * e.ONE_WEEK, 
    e.FOUR_WEEKS = 4 * e.ONE_WEEK, e.ONE_YEAR = 365 * e.ONE_DAY;
  },
  33897: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    const n = r(11743);
    n.__exportStar(r(1518), e), n.__exportStar(r(26606), e), n.__exportStar(r(48715), e), n.__exportStar(r(44157), e);
  },
  48715: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    r(11743).__exportStar(r(76371), e);
  },
  76371: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.IWatch = void 0;
    e.IWatch = class {};
  },
  20272: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.fromMiliseconds = e.toMiliseconds = void 0;
    const n = r(44157);
    e.toMiliseconds = function(t) {
      return t * n.ONE_THOUSAND;
    }, e.fromMiliseconds = function(t) {
      return Math.floor(t / n.ONE_THOUSAND);
    };
  },
  65878: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.delay = void 0, e.delay = function(t) {
      return new Promise((e => {
        setTimeout((() => {
          e(!0);
        }), t);
      }));
    };
  },
  1518: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    const n = r(11743);
    n.__exportStar(r(65878), e), n.__exportStar(r(20272), e);
  },
  26606: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.Watch = void 0;
    class r {
      constructor() {
        this.timestamps = new Map;
      }
      start(t) {
        if (this.timestamps.has(t)) throw new Error(`Watch already started for label: ${t}`);
        this.timestamps.set(t, {
          started: Date.now()
        });
      }
      stop(t) {
        const e = this.get(t);
        if (void 0 !== e.elapsed) throw new Error(`Watch already stopped for label: ${t}`);
        const r = Date.now() - e.started;
        this.timestamps.set(t, {
          started: e.started,
          elapsed: r
        });
      }
      get(t) {
        const e = this.timestamps.get(t);
        if (void 0 === e) throw new Error(`No timestamp found for label: ${t}`);
        return e;
      }
      elapsed(t) {
        const e = this.get(t);
        return e.elapsed || Date.now() - e.started;
      }
    }
    e.Watch = r, e.default = r;
  },
  11743: (t, e, r) => {
    "use strict";
    r.r(e), r.d(e, {
      __assign: () => s,
      __asyncDelegator: () => b,
      __asyncGenerator: () => m,
      __asyncValues: () => w,
      __await: () => _,
      __awaiter: () => h,
      __classPrivateFieldGet: () => I,
      __classPrivateFieldSet: () => P,
      __createBinding: () => f,
      __decorate: () => a,
      __exportStar: () => p,
      __extends: () => i,
      __generator: () => l,
      __importDefault: () => O,
      __importStar: () => S,
      __makeTemplateObject: () => E,
      __metadata: () => u,
      __param: () => c,
      __read: () => g,
      __rest: () => o,
      __spread: () => y,
      __spreadArrays: () => v,
      __values: () => d
    });
    var n = function(t, e) {
      return n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(t, e) {
        t.__proto__ = e;
      } || function(t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, n(t, e);
    };
    function i(t, e) {
      function r() {
        this.constructor = t;
      }
      n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
    }
    var s = function() {
      return s = Object.assign || function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
      }, s.apply(this, arguments);
    };
    function o(t, e) {
      var r = {};
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
      }
      return r;
    }
    function a(t, e, r, n) {
      var i, s = arguments.length, o = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, r, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o);
      return s > 3 && o && Object.defineProperty(e, r, o), o;
    }
    function c(t, e) {
      return function(r, n) {
        e(r, n, t);
      };
    }
    function u(t, e) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
    }
    function h(t, e, r, n) {
      return new (r || (r = Promise))((function(i, s) {
        function o(t) {
          try {
            c(n.next(t));
          } catch (e) {
            s(e);
          }
        }
        function a(t) {
          try {
            c(n.throw(t));
          } catch (e) {
            s(e);
          }
        }
        function c(t) {
          t.done ? i(t.value) : function(t) {
            return t instanceof r ? t : new r((function(e) {
              e(t);
            }));
          }(t.value).then(o, a);
        }
        c((n = n.apply(t, e || [])).next());
      }));
    }
    function l(t, e) {
      var r, n, i, s, o = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1];
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
      function a(s) {
        return function(a) {
          return function(s) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;o; ) try {
              if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
              switch (n = 0, i && (s = [ 2 & s[0], i.value ]), s[0]) {
               case 0:
               case 1:
                i = s;
                break;

               case 4:
                return o.label++, {
                  value: s[1],
                  done: !1
                };

               case 5:
                o.label++, n = s[1], s = [ 0 ];
                continue;

               case 7:
                s = o.ops.pop(), o.trys.pop();
                continue;

               default:
                if (!(i = o.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                  o = 0;
                  continue;
                }
                if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                  o.label = s[1];
                  break;
                }
                if (6 === s[0] && o.label < i[1]) {
                  o.label = i[1], i = s;
                  break;
                }
                if (i && o.label < i[2]) {
                  o.label = i[2], o.ops.push(s);
                  break;
                }
                i[2] && o.ops.pop(), o.trys.pop();
                continue;
              }
              s = e.call(t, o);
            } catch (a) {
              s = [ 6, a ], n = 0;
            } finally {
              r = i = 0;
            }
            if (5 & s[0]) throw s[1];
            return {
              value: s[0] ? s[1] : void 0,
              done: !0
            };
          }([ s, a ]);
        };
      }
    }
    function f(t, e, r, n) {
      void 0 === n && (n = r), t[n] = e[r];
    }
    function p(t, e) {
      for (var r in t) "default" === r || e.hasOwnProperty(r) || (e[r] = t[r]);
    }
    function d(t) {
      var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], n = 0;
      if (r) return r.call(t);
      if (t && "number" == typeof t.length) return {
        next: function() {
          return t && n >= t.length && (t = void 0), {
            value: t && t[n++],
            done: !t
          };
        }
      };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function g(t, e) {
      var r = "function" == typeof Symbol && t[Symbol.iterator];
      if (!r) return t;
      var n, i, s = r.call(t), o = [];
      try {
        for (;(void 0 === e || e-- > 0) && !(n = s.next()).done; ) o.push(n.value);
      } catch (a) {
        i = {
          error: a
        };
      } finally {
        try {
          n && !n.done && (r = s.return) && r.call(s);
        } finally {
          if (i) throw i.error;
        }
      }
      return o;
    }
    function y() {
      for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(g(arguments[e]));
      return t;
    }
    function v() {
      for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
      var n = Array(t), i = 0;
      for (e = 0; e < r; e++) for (var s = arguments[e], o = 0, a = s.length; o < a; o++, i++) n[i] = s[o];
      return n;
    }
    function _(t) {
      return this instanceof _ ? (this.v = t, this) : new _(t);
    }
    function m(t, e, r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n, i = r.apply(t, e || []), s = [];
      return n = {}, o("next"), o("throw"), o("return"), n[Symbol.asyncIterator] = function() {
        return this;
      }, n;
      function o(t) {
        i[t] && (n[t] = function(e) {
          return new Promise((function(r, n) {
            s.push([ t, e, r, n ]) > 1 || a(t, e);
          }));
        });
      }
      function a(t, e) {
        try {
          !function(t) {
            t.value instanceof _ ? Promise.resolve(t.value.v).then(c, u) : h(s[0][2], t);
          }(i[t](e));
        } catch (r) {
          h(s[0][3], r);
        }
      }
      function c(t) {
        a("next", t);
      }
      function u(t) {
        a("throw", t);
      }
      function h(t, e) {
        t(e), s.shift(), s.length && a(s[0][0], s[0][1]);
      }
    }
    function b(t) {
      var e, r;
      return e = {}, n("next"), n("throw", (function(t) {
        throw t;
      })), n("return"), e[Symbol.iterator] = function() {
        return this;
      }, e;
      function n(n, i) {
        e[n] = t[n] ? function(e) {
          return (r = !r) ? {
            value: _(t[n](e)),
            done: "return" === n
          } : i ? i(e) : e;
        } : i;
      }
    }
    function w(t) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var e, r = t[Symbol.asyncIterator];
      return r ? r.call(t) : (t = d(t), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
        return this;
      }, e);
      function n(r) {
        e[r] = t[r] && function(e) {
          return new Promise((function(n, i) {
            (function(t, e, r, n) {
              Promise.resolve(n).then((function(e) {
                t({
                  value: e,
                  done: r
                });
              }), e);
            })(n, i, (e = t[r](e)).done, e.value);
          }));
        };
      }
    }
    function E(t, e) {
      return Object.defineProperty ? Object.defineProperty(t, "raw", {
        value: e
      }) : t.raw = e, t;
    }
    function S(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return e.default = t, e;
    }
    function O(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    function I(t, e) {
      if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
      return e.get(t);
    }
    function P(t, e, r) {
      if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
      return e.set(t, r), r;
    }
  },
  28842: (t, e, r) => {
    "use strict";
    r.d(e, {
      Z: () => ca
    });
    var n = {};
    r.r(n), r.d(n, {
      identity: () => q
    });
    var i = {};
    r.r(i), r.d(i, {
      base2: () => H
    });
    var s = {};
    r.r(s), r.d(s, {
      base8: () => B
    });
    var o = {};
    r.r(o), r.d(o, {
      base10: () => V
    });
    var a = {};
    r.r(a), r.d(a, {
      base16: () => K,
      base16upper: () => F
    });
    var c = {};
    r.r(c), r.d(c, {
      base36: () => G,
      base36upper: () => Y
    });
    var u = {};
    r.r(u), r.d(u, {
      base64: () => X,
      base64pad: () => Q,
      base64url: () => Z,
      base64urlpad: () => tt
    });
    var h = {};
    r.r(h), r.d(h, {
      base256emoji: () => it
    });
    var l = {};
    r.r(l), r.d(l, {
      sha256: () => at,
      sha512: () => ct
    });
    var f = {};
    r.r(f), r.d(f, {
      identity: () => lt
    });
    var p = {};
    r.r(p), r.d(p, {
      code: () => pt,
      decode: () => gt,
      encode: () => dt,
      name: () => ft
    });
    var d = {};
    r.r(d), r.d(d, {
      code: () => mt,
      decode: () => wt,
      encode: () => bt,
      name: () => _t
    });
    var g = r(86329);
    var y = r.n(g);
    var v = r(63167);
    var _ = r(14633);
    var m = r(72689);
    var b = r(46100);
    class w extends b.q {
      constructor(t) {
        super(), this.opts = t, this.protocol = "wc", this.version = 2;
      }
    }
    class E extends b.q {
      constructor(t, e) {
        super(), this.core = t, this.logger = e, this.records = new Map;
      }
    }
    class S extends b.q {
      constructor(t, e) {
        super(), this.relayer = t, this.logger = e;
      }
    }
    class O extends b.q {
      constructor(t) {
        super();
      }
    }
    class I extends b.q {
      constructor(t, e) {
        super(), this.relayer = t, this.logger = e;
      }
    }
    class P extends b.q {
      constructor(t, e) {
        super(), this.core = t, this.logger = e;
      }
    }
    function x(t) {
      if ("string" != typeof t) throw new Error("Cannot safe json parse value of type " + typeof t);
      try {
        return (t => {
          const e = t.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, "$1\"$2n\"$3");
          return JSON.parse(e, ((t, e) => "string" == typeof e && e.match(/^\d+n$/) ? BigInt(e.substring(0, e.length - 1)) : e));
        })(t);
      } catch (e) {
        return t;
      }
    }
    function A(t) {
      return "string" == typeof t ? t : (t => JSON.stringify(t, ((t, e) => "bigint" == typeof e ? e.toString() + "n" : e)))(t) || "";
    }
    var N = r(20342);
    var R = r(31820);
    var T = r(33897);
    const j = "base64url";
    const C = "did";
    const L = "key";
    const U = "base58btc";
    function M(t) {
      return null != globalThis.Buffer ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
    }
    function D(t = 0) {
      return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? M(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
    }
    function k(t, e) {
      e || (e = t.reduce(((t, e) => t + e.length), 0));
      const r = D(e);
      let n = 0;
      for (const i of t) r.set(i, n), n += i.length;
      return M(r);
    }
    var z = r(74733);
    var $ = r(88889);
    const q = (0, z.Dp)({
      prefix: '\0',
      name: 'identity',
      encode: t => (0, $.toString)(t),
      decode: t => (0, $.fromString)(t)
    });
    const H = (0, z.ET)({
      prefix: '0',
      name: 'base2',
      alphabet: '01',
      bitsPerChar: 1
    });
    const B = (0, z.ET)({
      prefix: '7',
      name: 'base8',
      alphabet: '01234567',
      bitsPerChar: 3
    });
    const V = (0, z.kU)({
      prefix: '9',
      name: 'base10',
      alphabet: '0123456789'
    });
    const K = (0, z.ET)({
      prefix: 'f',
      name: 'base16',
      alphabet: '0123456789abcdef',
      bitsPerChar: 4
    });
    const F = (0, z.ET)({
      prefix: 'F',
      name: 'base16upper',
      alphabet: '0123456789ABCDEF',
      bitsPerChar: 4
    });
    var W = r(91729);
    const G = (0, z.kU)({
      prefix: 'k',
      name: 'base36',
      alphabet: '0123456789abcdefghijklmnopqrstuvwxyz'
    });
    const Y = (0, z.kU)({
      prefix: 'K',
      name: 'base36upper',
      alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    });
    var J = r(64664);
    const X = (0, z.ET)({
      prefix: 'm',
      name: 'base64',
      alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      bitsPerChar: 6
    });
    const Q = (0, z.ET)({
      prefix: 'M',
      name: 'base64pad',
      alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      bitsPerChar: 6
    });
    const Z = (0, z.ET)({
      prefix: 'u',
      name: 'base64url',
      alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
      bitsPerChar: 6
    });
    const tt = (0, z.ET)({
      prefix: 'U',
      name: 'base64urlpad',
      alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
      bitsPerChar: 6
    });
    const et = Array.from('🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂');
    const rt = et.reduce(((t, e, r) => (t[r] = e, t)), []);
    const nt = et.reduce(((t, e, r) => (t[e.codePointAt(0)] = r, t)), []);
    const it = (0, z.Dp)({
      prefix: '🚀',
      name: 'base256emoji',
      encode: function(t) {
        return t.reduce(((t, e) => t += rt[e]), '');
      },
      decode: function(t) {
        const e = [];
        for (const r of t) {
          const t = nt[r.codePointAt(0)];
          if (void 0 === t) throw new Error(`Non-base256emoji character: ${r}`);
          e.push(t);
        }
        return new Uint8Array(e);
      }
    });
    var st = r(2449);
    const ot = t => async e => new Uint8Array(await crypto.subtle.digest(t, e));
    const at = (0, st.from)({
      name: 'sha2-256',
      code: 18,
      encode: ot('SHA-256')
    });
    const ct = (0, st.from)({
      name: 'sha2-512',
      code: 19,
      encode: ot('SHA-512')
    });
    var ut = r(84261);
    const ht = $.coerce;
    const lt = {
      code: 0,
      name: 'identity',
      encode: ht,
      digest: t => ut.create(0, ht(t))
    };
    const ft = 'raw';
    const pt = 85;
    const dt = t => (0, $.coerce)(t);
    const gt = t => (0, $.coerce)(t);
    const yt = new TextEncoder;
    const vt = new TextDecoder;
    const _t = 'json';
    const mt = 512;
    const bt = t => yt.encode(JSON.stringify(t));
    const wt = t => JSON.parse(vt.decode(t));
    r(62212);
    const Et = {
      ...n,
      ...i,
      ...s,
      ...o,
      ...a,
      ...W,
      ...c,
      ...J,
      ...u,
      ...h
    };
    function St(t, e, r, n) {
      return {
        name: t,
        prefix: e,
        encoder: {
          name: t,
          prefix: e,
          encode: r
        },
        decoder: {
          decode: n
        }
      };
    }
    const Ot = St('utf8', 'u', (t => 'u' + new TextDecoder('utf8').decode(t)), (t => (new TextEncoder).encode(t.substring(1))));
    const It = St('ascii', 'a', (t => {
      let e = 'a';
      for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
      return e;
    }), (t => {
      const e = D((t = t.substring(1)).length);
      for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
      return e;
    }));
    const Pt = {
      utf8: Ot,
      'utf-8': Ot,
      hex: Et.base16,
      latin1: It,
      ascii: It,
      binary: It,
      ...Et
    };
    function xt(t, e = "utf8") {
      const r = Pt[e];
      if (!r) throw new Error(`Unsupported encoding "${e}"`);
      return 'utf8' !== e && 'utf-8' !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.encoder.encode(t).substring(1) : globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString('utf8');
    }
    function At(t, e = "utf8") {
      const r = Pt[e];
      if (!r) throw new Error(`Unsupported encoding "${e}"`);
      return 'utf8' !== e && 'utf-8' !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${t}`) : M(globalThis.Buffer.from(t, 'utf-8'));
    }
    function Nt(t) {
      return xt(At(A(t), "utf8"), j);
    }
    function Rt(t) {
      const e = "z" + xt(k([ At("K36", U), t ]), U);
      return [ C, L, e ].join(":");
    }
    function Tt(t) {
      return xt(t, j);
    }
    function jt(t = (0, R.randomBytes)(32)) {
      return N._w(t);
    }
    async function Ct(t, e, r, n, i = (0, T.fromMiliseconds)(Date.now())) {
      const s = {
        alg: "EdDSA",
        typ: "JWT"
      };
      const o = {
        iss: Rt(n.publicKey),
        sub: t,
        aud: e,
        iat: i,
        exp: i + r
      };
      const a = function(t) {
        return At([ Nt(t.header), Nt(t.payload) ].join("."), "utf8");
      }({
        header: s,
        payload: o
      });
      return function(t) {
        return [ Nt(t.header), Nt(t.payload), Tt(t.signature) ].join(".");
      }({
        header: s,
        payload: o,
        signature: N.Xx(n.secretKey, a)
      });
    }
    r(67481);
    var Lt = r(99687);
    var Ut = r(74488);
    var Mt = r(94789);
    var Dt = r(55196);
    var kt = function(t, e, r) {
      if (r || 2 === arguments.length) for (var n, i = 0, s = e.length; i < s; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), 
      n[i] = e[i]);
      return t.concat(n || Array.prototype.slice.call(e));
    };
    var zt = function() {
      return function(t, e, r) {
        this.name = t, this.version = e, this.os = r, this.type = 'browser';
      };
    }();
    var $t = function() {
      return function(t) {
        this.version = t, this.type = 'node', this.name = 'node', this.os = process.platform;
      };
    }();
    var qt = function() {
      return function(t, e, r, n) {
        this.name = t, this.version = e, this.os = r, this.bot = n, this.type = 'bot-device';
      };
    }();
    var Ht = function() {
      return function() {
        this.type = 'bot', this.bot = !0, this.name = 'bot', this.version = null, this.os = null;
      };
    }();
    var Bt = function() {
      return function() {
        this.type = 'react-native', this.name = 'react-native', this.version = null, this.os = null;
      };
    }();
    var Vt = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
    var Kt = [ [ 'aol', /AOLShield\/([0-9\._]+)/ ], [ 'edge', /Edge\/([0-9\._]+)/ ], [ 'edge-ios', /EdgiOS\/([0-9\._]+)/ ], [ 'yandexbrowser', /YaBrowser\/([0-9\._]+)/ ], [ 'kakaotalk', /KAKAOTALK\s([0-9\.]+)/ ], [ 'samsung', /SamsungBrowser\/([0-9\.]+)/ ], [ 'silk', /\bSilk\/([0-9._-]+)\b/ ], [ 'miui', /MiuiBrowser\/([0-9\.]+)$/ ], [ 'beaker', /BeakerBrowser\/([0-9\.]+)/ ], [ 'edge-chromium', /EdgA?\/([0-9\.]+)/ ], [ 'chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ], [ 'chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ], [ 'phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/ ], [ 'crios', /CriOS\/([0-9\.]+)(:?\s|$)/ ], [ 'firefox', /Firefox\/([0-9\.]+)(?:\s|$)/ ], [ 'fxios', /FxiOS\/([0-9\.]+)/ ], [ 'opera-mini', /Opera Mini.*Version\/([0-9\.]+)/ ], [ 'opera', /Opera\/([0-9\.]+)(?:\s|$)/ ], [ 'opera', /OPR\/([0-9\.]+)(:?\s|$)/ ], [ 'pie', /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/ ], [ 'pie', /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/ ], [ 'netfront', /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/ ], [ 'ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/ ], [ 'ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/ ], [ 'ie', /MSIE\s(7\.0)/ ], [ 'bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/ ], [ 'android', /Android\s([0-9\.]+)/ ], [ 'ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/ ], [ 'safari', /Version\/([0-9\._]+).*Safari/ ], [ 'facebook', /FB[AS]V\/([0-9\.]+)/ ], [ 'instagram', /Instagram\s([0-9\.]+)/ ], [ 'ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/ ], [ 'ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/ ], [ 'curl', /^curl\/([0-9\.]+)$/ ], [ 'searchbot', /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/ ] ];
    var Ft = [ [ 'iOS', /iP(hone|od|ad)/ ], [ 'Android OS', /Android/ ], [ 'BlackBerry OS', /BlackBerry|BB10/ ], [ 'Windows Mobile', /IEMobile/ ], [ 'Amazon OS', /Kindle/ ], [ 'Windows 3.11', /Win16/ ], [ 'Windows 95', /(Windows 95)|(Win95)|(Windows_95)/ ], [ 'Windows 98', /(Windows 98)|(Win98)/ ], [ 'Windows 2000', /(Windows NT 5.0)|(Windows 2000)/ ], [ 'Windows XP', /(Windows NT 5.1)|(Windows XP)/ ], [ 'Windows Server 2003', /(Windows NT 5.2)/ ], [ 'Windows Vista', /(Windows NT 6.0)/ ], [ 'Windows 7', /(Windows NT 6.1)/ ], [ 'Windows 8', /(Windows NT 6.2)/ ], [ 'Windows 8.1', /(Windows NT 6.3)/ ], [ 'Windows 10', /(Windows NT 10.0)/ ], [ 'Windows ME', /Windows ME/ ], [ 'Windows CE', /Windows CE|WinCE|Microsoft Pocket Internet Explorer/ ], [ 'Open BSD', /OpenBSD/ ], [ 'Sun OS', /SunOS/ ], [ 'Chrome OS', /CrOS/ ], [ 'Linux', /(Linux)|(X11)/ ], [ 'Mac OS', /(Mac_PowerPC)|(Macintosh)/ ], [ 'QNX', /QNX/ ], [ 'BeOS', /BeOS/ ], [ 'OS/2', /OS\/2/ ] ];
    function Wt(t) {
      return t ? Yt(t) : 'undefined' == typeof document && 'undefined' != typeof navigator && 'ReactNative' === navigator.product ? new Bt : 'undefined' != typeof navigator ? Yt(navigator.userAgent) : function() {
        return 'undefined' != typeof process && process.version ? new $t(process.version.slice(1)) : null;
      }();
    }
    function Gt(t) {
      return '' !== t && Kt.reduce((function(e, r) {
        var n = r[0], i = r[1];
        if (e) return e;
        var s = i.exec(t);
        return !!s && [ n, s ];
      }), !1);
    }
    function Yt(t) {
      var e = Gt(t);
      if (!e) return null;
      var r = e[0], n = e[1];
      if ('searchbot' === r) return new Ht;
      var i = n[1] && n[1].split('.').join('_').split('_').slice(0, 3);
      i ? i.length < 3 && (i = kt(kt([], i, !0), function(t) {
        var e = [];
        for (var r = 0; r < t; r++) e.push('0');
        return e;
      }(3 - i.length), !0)) : i = [];
      var s = i.join('.');
      var o = function(t) {
        for (var e = 0, r = Ft.length; e < r; e++) {
          var n = Ft[e], i = n[0];
          if (n[1].exec(t)) return i;
        }
        return null;
      }(t);
      var a = Vt.exec(t);
      return a && a[1] ? new qt(r, s, o, a[1]) : new zt(r, s, o);
    }
    var Jt = r(19048);
    var Xt = r(51445);
    var Qt = r(21686);
    r(36496);
    const Zt = {
      waku: {
        publish: "waku_publish",
        batchPublish: "waku_batchPublish",
        subscribe: "waku_subscribe",
        batchSubscribe: "waku_batchSubscribe",
        subscription: "waku_subscription",
        unsubscribe: "waku_unsubscribe",
        batchUnsubscribe: "waku_batchUnsubscribe"
      },
      irn: {
        publish: "irn_publish",
        batchPublish: "irn_batchPublish",
        subscribe: "irn_subscribe",
        batchSubscribe: "irn_batchSubscribe",
        subscription: "irn_subscription",
        unsubscribe: "irn_unsubscribe",
        batchUnsubscribe: "irn_batchUnsubscribe"
      },
      iridium: {
        publish: "iridium_publish",
        batchPublish: "iridium_batchPublish",
        subscribe: "iridium_subscribe",
        batchSubscribe: "iridium_batchSubscribe",
        subscription: "iridium_subscription",
        unsubscribe: "iridium_unsubscribe",
        batchUnsubscribe: "iridium_batchUnsubscribe"
      }
    };
    function te(t, e) {
      return t.includes(":") ? [ t ] : e.chains || [];
    }
    const ee = "base10", re = "base16", ne = "base64pad", ie = "utf8";
    function se() {
      return xt((0, R.randomBytes)(32), re);
    }
    function oe(t) {
      return xt((0, Mt.vp)(At(t, ie)), re);
    }
    function ae(t) {
      return Number(xt(t, ee));
    }
    function ce(t) {
      const e = function(t) {
        return At(`${t}`, ee);
      }(typeof t.type < "u" ? t.type : 0);
      if (1 === ae(e) && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
      const r = typeof t.senderPublicKey < "u" ? At(t.senderPublicKey, re) : void 0, n = typeof t.iv < "u" ? At(t.iv, re) : (0, 
      R.randomBytes)(12);
      return function(t) {
        if (1 === ae(t.type)) {
          if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
          return xt(k([ t.type, t.senderPublicKey, t.iv, t.sealed ]), ne);
        }
        return xt(k([ t.type, t.iv, t.sealed ]), ne);
      }({
        type: e,
        sealed: new Lt.OK(At(t.symKey, re)).seal(n, At(t.message, ie)),
        iv: n,
        senderPublicKey: r
      });
    }
    function ue(t) {
      const e = At(t, ne), r = e.slice(0, 1);
      if (1 === ae(r)) {
        const t = 33, n = t + 12, i = e.slice(1, t), s = e.slice(t, n);
        return {
          type: r,
          sealed: e.slice(n),
          iv: s,
          senderPublicKey: i
        };
      }
      const n = e.slice(1, 13);
      return {
        type: r,
        sealed: e.slice(13),
        iv: n
      };
    }
    function he(t) {
      const e = t?.type || 0;
      if (1 === e) {
        if (typeof t?.senderPublicKey > "u") throw new Error("missing sender public key");
        if (typeof t?.receiverPublicKey > "u") throw new Error("missing receiver public key");
      }
      return {
        type: e,
        senderPublicKey: t?.senderPublicKey,
        receiverPublicKey: t?.receiverPublicKey
      };
    }
    function le(t) {
      return 1 === t.type && "string" == typeof t.senderPublicKey && "string" == typeof t.receiverPublicKey;
    }
    var fe = Object.defineProperty, pe = Object.getOwnPropertySymbols, de = Object.prototype.hasOwnProperty, ge = Object.prototype.propertyIsEnumerable, ye = (t, e, r) => e in t ? fe(t, e, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }) : t[e] = r, ve = (t, e) => {
      for (var r in e || (e = {})) de.call(e, r) && ye(t, r, e[r]);
      if (pe) for (var r of pe(e)) ge.call(e, r) && ye(t, r, e[r]);
      return t;
    };
    const _e = "react-native", me = "node", be = "browser", we = "unknown", Ee = "js";
    function Se() {
      return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
    }
    function Oe() {
      return !(0, Jt.getDocument)() && !!(0, Jt.getNavigator)() && "ReactNative" === navigator.product;
    }
    function Ie() {
      return !Se() && !!(0, Jt.getNavigator)();
    }
    function Pe() {
      return Oe() ? _e : Se() ? me : Ie() ? be : we;
    }
    function xe(t, e, n) {
      const i = function() {
        if (Pe() === _e && typeof r.g < "u" && typeof (null == r.g ? void 0 : r.g.Platform) < "u") {
          const {OS: t, Version: e} = r.g.Platform;
          return [ t, e ].join("-");
        }
        const t = Wt();
        if (null === t) return "unknown";
        const e = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
        return "browser" === t.type ? [ e, t.name, t.version ].join("-") : [ e, t.version ].join("-");
      }(), s = function() {
        var t;
        const e = Pe();
        return e === be ? [ e, (null == (t = (0, Jt.getLocation)()) ? void 0 : t.host) || "unknown" ].join(":") : e;
      }();
      return [ [ t, e ].join("-"), [ Ee, n ].join("-"), i, s ].join("/");
    }
    function Ae({protocol: t, version: e, relayUrl: r, sdkVersion: n, auth: i, projectId: s, useOnCloseEvent: o}) {
      const a = r.split("?"), c = {
        auth: i,
        ua: xe(t, e, n),
        projectId: s,
        useOnCloseEvent: o || void 0
      }, u = function(t, e) {
        let r = Qt.parse(t);
        return r = ve(ve({}, r), e), Qt.stringify(r);
      }(a[1] || "", c);
      return a[0] + "?" + u;
    }
    function Ne(t, e) {
      return t.filter((t => e.includes(t))).length === t.length;
    }
    function Re(t) {
      return Object.fromEntries(t.entries());
    }
    function Te(t) {
      return new Map(Object.entries(t));
    }
    function je(t = T.FIVE_MINUTES, e) {
      const r = (0, T.toMiliseconds)(t || T.FIVE_MINUTES);
      let n, i, s;
      return {
        resolve: t => {
          s && n && (clearTimeout(s), n(t));
        },
        reject: t => {
          s && i && (clearTimeout(s), i(t));
        },
        done: () => new Promise(((t, o) => {
          s = setTimeout((() => {
            o(new Error(e));
          }), r), n = t, i = o;
        }))
      };
    }
    function Ce(t, e, r) {
      return new Promise((async (n, i) => {
        const s = setTimeout((() => i(new Error(r))), e);
        try {
          n(await t);
        } catch (o) {
          i(o);
        }
        clearTimeout(s);
      }));
    }
    function Le(t, e) {
      if ("string" == typeof e && e.startsWith(`${t}:`)) return e;
      if ("topic" === t.toLowerCase()) {
        if ("string" != typeof e) throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${e}`;
      }
      if ("id" === t.toLowerCase()) {
        if ("number" != typeof e) throw new Error('Value must be "number" for expirer target type: id');
        return `id:${e}`;
      }
      throw new Error(`Unknown expirer target type: ${t}`);
    }
    function Ue(t) {
      const [e, r] = t.split(":"), n = {
        id: void 0,
        topic: void 0
      };
      if ("topic" === e && "string" == typeof r) n.topic = r; else {
        if ("id" !== e || !Number.isInteger(Number(r))) throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);
        n.id = Number(r);
      }
      return n;
    }
    function Me(t, e) {
      return (0, T.fromMiliseconds)((e || Date.now()) + (0, T.toMiliseconds)(t));
    }
    function De(t) {
      return Date.now() >= (0, T.toMiliseconds)(t);
    }
    function ke(t, e) {
      return `${t}${e ? `:${e}` : ""}`;
    }
    function ze(t = [], e = []) {
      return [ ...new Set([ ...t, ...e ]) ];
    }
    function $e(t) {
      return t?.relay || {
        protocol: "irn"
      };
    }
    function qe(t) {
      const e = Zt[t];
      if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${t}`);
      return e;
    }
    var He = Object.defineProperty, Be = Object.getOwnPropertySymbols, Ve = Object.prototype.hasOwnProperty, Ke = Object.prototype.propertyIsEnumerable, Fe = (t, e, r) => e in t ? He(t, e, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }) : t[e] = r;
    function We(t, e = "-") {
      const r = {}, n = "relay" + e;
      return Object.keys(t).forEach((e => {
        if (e.startsWith(n)) {
          const i = e.replace(n, ""), s = t[e];
          r[i] = s;
        }
      })), r;
    }
    function Ge(t) {
      return t.startsWith("//") ? t.substring(2) : t;
    }
    function Ye(t) {
      return `${t.protocol}:${t.topic}@${t.version}?` + Qt.stringify(((t, e) => {
        for (var r in e || (e = {})) Ve.call(e, r) && Fe(t, r, e[r]);
        if (Be) for (var r of Be(e)) Ke.call(e, r) && Fe(t, r, e[r]);
        return t;
      })({
        symKey: t.symKey
      }, function(t, e = "-") {
        const r = {};
        return Object.keys(t).forEach((n => {
          const i = "relay" + e + n;
          t[n] && (r[i] = t[n]);
        })), r;
      }(t.relay)));
    }
    Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, 
    Object.prototype.propertyIsEnumerable;
    function Je(t) {
      const e = [];
      return t.forEach((t => {
        const [r, n] = t.split(":");
        e.push(`${r}:${n}`);
      })), e;
    }
    function Xe(t) {
      return t.includes(":");
    }
    function Qe(t) {
      return Xe(t) ? t.split(":")[0] : t;
    }
    const Ze = {
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
    }, tr = {
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
    function er(t, e) {
      const {message: r, code: n} = tr[t];
      return {
        message: e ? `${r} ${e}` : r,
        code: n
      };
    }
    function rr(t, e) {
      const {message: r, code: n} = Ze[t];
      return {
        message: e ? `${r} ${e}` : r,
        code: n
      };
    }
    function nr(t, e) {
      return !!Array.isArray(t) && (!(typeof e < "u" && t.length) || t.every(e));
    }
    function ir(t) {
      return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
    }
    function sr(t) {
      return typeof t > "u";
    }
    function or(t, e) {
      return !(!e || !sr(t)) || "string" == typeof t && !!t.trim().length;
    }
    function ar(t, e) {
      return !(!e || !sr(t)) || "number" == typeof t && !isNaN(t);
    }
    function cr(t) {
      return !(!or(t, !1) || !t.includes(":")) && 2 === t.split(":").length;
    }
    function ur(t) {
      let e = !0;
      return nr(t) ? t.length && (e = t.every((t => or(t, !1)))) : e = !1, e;
    }
    function hr(t, e, r) {
      let n = null;
      return Object.entries(t).forEach((([t, i]) => {
        if (n) return;
        const s = function(t, e, r) {
          let n = null;
          return nr(e) && e.length ? e.forEach((t => {
            n || cr(t) || (n = rr("UNSUPPORTED_CHAINS", `${r}, chain ${t} should be a string and conform to "namespace:chainId" format`));
          })) : cr(t) || (n = rr("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), 
          n;
        }(t, te(t, i), `${e} ${r}`);
        s && (n = s);
      })), n;
    }
    function lr(t, e) {
      let r = null;
      return nr(t) ? t.forEach((t => {
        r || function(t) {
          if (or(t, !1) && t.includes(":")) {
            const e = t.split(":");
            if (3 === e.length) {
              const t = e[0] + ":" + e[1];
              return !!e[2] && cr(t);
            }
          }
          return !1;
        }(t) || (r = rr("UNSUPPORTED_ACCOUNTS", `${e}, account ${t} should be a string and conform to "namespace:chainId:address" format`));
      })) : r = rr("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), 
      r;
    }
    function fr(t, e) {
      let r = null;
      return Object.values(t).forEach((t => {
        if (r) return;
        const n = function(t, e) {
          let r = null;
          return ur(t?.methods) ? ur(t?.events) || (r = rr("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : r = rr("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), 
          r;
        }(t, `${e}, namespace`);
        n && (r = n);
      })), r;
    }
    function pr(t, e) {
      let r = null;
      if (t && ir(t)) {
        const n = fr(t, e);
        n && (r = n);
        const i = function(t, e) {
          let r = null;
          return Object.values(t).forEach((t => {
            if (r) return;
            const n = lr(t?.accounts, `${e} namespace`);
            n && (r = n);
          })), r;
        }(t, e);
        i && (r = i);
      } else r = er("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
      return r;
    }
    function dr(t) {
      return or(t.protocol, !0);
    }
    function gr(t) {
      return typeof t < "u" && null !== typeof t;
    }
    function yr(t, e) {
      return !(!cr(e) || !function(t) {
        const e = [];
        return Object.values(t).forEach((t => {
          e.push(...Je(t.accounts));
        })), e;
      }(t).includes(e));
    }
    function vr(t, e, r) {
      return !!or(r, !1) && function(t, e) {
        const r = [];
        return Object.values(t).forEach((t => {
          Je(t.accounts).includes(e) && r.push(...t.methods);
        })), r;
      }(t, e).includes(r);
    }
    function _r(t, e, r) {
      return !!or(r, !1) && function(t, e) {
        const r = [];
        return Object.values(t).forEach((t => {
          Je(t.accounts).includes(e) && r.push(...t.events);
        })), r;
      }(t, e).includes(r);
    }
    function mr(t, e, r) {
      let n = null;
      const i = function(t) {
        const e = {};
        return Object.keys(t).forEach((r => {
          var n;
          r.includes(":") ? e[r] = t[r] : null == (n = t[r].chains) || n.forEach((n => {
            e[n] = {
              methods: t[r].methods,
              events: t[r].events
            };
          }));
        })), e;
      }(t), s = function(t) {
        const e = {};
        return Object.keys(t).forEach((r => {
          if (r.includes(":")) e[r] = t[r]; else {
            Je(t[r].accounts)?.forEach((n => {
              e[n] = {
                accounts: t[r].accounts.filter((t => t.includes(`${n}:`))),
                methods: t[r].methods,
                events: t[r].events
              };
            }));
          }
        })), e;
      }(e), o = Object.keys(i), a = Object.keys(s), c = br(Object.keys(t)), u = br(Object.keys(e)), h = c.filter((t => !u.includes(t)));
      return h.length && (n = er("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.\n      Required: ${h.toString()}\n      Received: ${Object.keys(e).toString()}`)), 
      Ne(o, a) || (n = er("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.\n      Required: ${o.toString()}\n      Approved: ${a.toString()}`)), 
      Object.keys(e).forEach((t => {
        if (!t.includes(":") || n) return;
        const i = Je(e[t].accounts);
        i.includes(t) || (n = er("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${t}\n        Required: ${t}\n        Approved: ${i.toString()}`));
      })), o.forEach((t => {
        n || (Ne(i[t].methods, s[t].methods) ? Ne(i[t].events, s[t].events) || (n = er("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${t}`)) : n = er("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${t}`));
      })), n;
    }
    function br(t) {
      return [ ...new Set(t.map((t => t.includes(":") ? t.split(":")[0] : t))) ];
    }
    const wr = "INTERNAL_ERROR";
    const Er = "SERVER_ERROR";
    const Sr = [ -32700, -32600, -32601, -32602, -32603 ];
    const Or = {
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
      [wr]: {
        code: -32603,
        message: "Internal error"
      },
      [Er]: {
        code: -32e3,
        message: "Server error"
      }
    };
    function Ir(t) {
      return Sr.includes(t);
    }
    function Pr(t) {
      return Object.keys(Or).includes(t) ? Or[t] : Or.SERVER_ERROR;
    }
    function xr(t) {
      const e = Object.values(Or).find((e => e.code === t));
      return e || Or.SERVER_ERROR;
    }
    function Ar(t, e, r) {
      return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${e}`) : t;
    }
    var Nr = r(65842);
    function Rr(t = 3) {
      return Date.now() * Math.pow(10, t) + Math.floor(Math.random() * Math.pow(10, t));
    }
    function Tr(t = 6) {
      return BigInt(Rr(t));
    }
    function jr(t, e, r) {
      return {
        id: r || Rr(),
        jsonrpc: "2.0",
        method: t,
        params: e
      };
    }
    function Cr(t, e) {
      return {
        id: t,
        jsonrpc: "2.0",
        result: e
      };
    }
    function Lr(t, e, r) {
      return {
        id: t,
        jsonrpc: "2.0",
        error: Ur(e, r)
      };
    }
    function Ur(t, e) {
      return void 0 === t ? Pr(wr) : ("string" == typeof t && (t = Object.assign(Object.assign({}, Pr(Er)), {
        message: t
      })), void 0 !== e && (t.data = e), Ir(t.code) && (t = xr(t.code)), t);
    }
    function Mr(t, e) {
      const r = function(t) {
        const e = t.match(new RegExp(/^\w+:/, "gi"));
        if (e && e.length) return e[0];
      }(t);
      return void 0 !== r && new RegExp(e).test(r);
    }
    function Dr(t) {
      return Mr(t, "^https?:");
    }
    function kr(t) {
      return Mr(t, "^wss?:");
    }
    function zr(t) {
      return new RegExp("wss?://localhost(:d{2,5})?").test(t);
    }
    function $r(t) {
      return "object" == typeof t && "id" in t && "jsonrpc" in t && "2.0" === t.jsonrpc;
    }
    function qr(t) {
      return $r(t) && "method" in t;
    }
    function Hr(t) {
      return $r(t) && (Br(t) || Vr(t));
    }
    function Br(t) {
      return "result" in t;
    }
    function Vr(t) {
      return "error" in t;
    }
    class Kr extends class extends class extends class {} {
      constructor() {
        super();
      }
    } {
      constructor(t) {
        super();
      }
    } {
      constructor(t) {
        super(t), this.events = new g.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), 
        this.connection.connected && this.registerEventListeners();
      }
      async connect(t = this.connection) {
        await this.open(t);
      }
      async disconnect() {
        await this.close();
      }
      on(t, e) {
        this.events.on(t, e);
      }
      once(t, e) {
        this.events.once(t, e);
      }
      off(t, e) {
        this.events.off(t, e);
      }
      removeListener(t, e) {
        this.events.removeListener(t, e);
      }
      async request(t, e) {
        return this.requestStrict(jr(t.method, t.params || [], t.id || Tr().toString()), e);
      }
      async requestStrict(t, e) {
        return new Promise((async (r, n) => {
          if (!this.connection.connected) try {
            await this.open();
          } catch (i) {
            n(i);
          }
          this.events.on(`${t.id}`, (t => {
            Vr(t) ? n(t.error) : r(t.result);
          }));
          try {
            await this.connection.send(t, e);
          } catch (i) {
            n(i);
          }
        }));
      }
      setConnection(t = this.connection) {
        return t;
      }
      onPayload(t) {
        this.events.emit("payload", t), Hr(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
          type: t.method,
          data: t.params
        });
      }
      onClose(t) {
        t && 3e3 === t.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)), 
        this.events.emit("disconnect");
      }
      async open(t = this.connection) {
        this.connection === t && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof t && (await this.connection.open(t), 
        t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), 
        this.events.emit("connect"));
      }
      async close() {
        await this.connection.close();
      }
      registerEventListeners() {
        this.hasRegisteredEventListeners || (this.connection.on("payload", (t => this.onPayload(t))), this.connection.on("close", (t => this.onClose(t))), 
        this.connection.on("error", (t => this.events.emit("error", t))), this.connection.on("register_error", (t => this.onClose())), 
        this.hasRegisteredEventListeners = !0);
      }
    }
    const Fr = t => t.split("?")[0];
    const Wr = (() => "undefined" != typeof WebSocket ? WebSocket : void 0 !== r.g && void 0 !== r.g.WebSocket ? r.g.WebSocket : "undefined" != typeof window && void 0 !== window.WebSocket ? window.WebSocket : "undefined" != typeof self && void 0 !== self.WebSocket ? self.WebSocket : r(1648))();
    const Gr = class {
      constructor(t) {
        if (this.url = t, this.events = new g.EventEmitter, this.registering = !1, !kr(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
        this.url = t;
      }
      get connected() {
        return void 0 !== this.socket;
      }
      get connecting() {
        return this.registering;
      }
      on(t, e) {
        this.events.on(t, e);
      }
      once(t, e) {
        this.events.once(t, e);
      }
      off(t, e) {
        this.events.off(t, e);
      }
      removeListener(t, e) {
        this.events.removeListener(t, e);
      }
      async open(t = this.url) {
        await this.register(t);
      }
      async close() {
        return new Promise(((t, e) => {
          void 0 !== this.socket ? (this.socket.onclose = e => {
            this.onClose(e), t();
          }, this.socket.close()) : e(new Error("Connection already closed"));
        }));
      }
      async send(t, e) {
        void 0 === this.socket && (this.socket = await this.register());
        try {
          this.socket.send(A(t));
        } catch (r) {
          this.onError(t.id, r);
        }
      }
      register(t = this.url) {
        if (!kr(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
        if (this.registering) {
          const t = this.events.getMaxListeners();
          return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), 
          new Promise(((t, e) => {
            this.events.once("register_error", (t => {
              this.resetMaxListeners(), e(t);
            })), this.events.once("open", (() => {
              if (this.resetMaxListeners(), void 0 === this.socket) return e(new Error("WebSocket connection is missing or invalid"));
              t(this.socket);
            }));
          }));
        }
        return this.url = t, this.registering = !0, new Promise(((e, n) => {
          const i = (0, Nr.isReactNative)() ? void 0 : {
            rejectUnauthorized: !zr(t)
          };
          const s = new Wr(t, [], i);
          (() => "undefined" != typeof WebSocket || void 0 !== r.g && void 0 !== r.g.WebSocket || "undefined" != typeof window && void 0 !== window.WebSocket || "undefined" != typeof self && void 0 !== self.WebSocket)() ? s.onerror = t => {
            const e = t;
            n(this.emitError(e.error));
          } : s.on("error", (t => {
            n(this.emitError(t));
          })), s.onopen = () => {
            this.onOpen(s), e(s);
          };
        }));
      }
      onOpen(t) {
        t.onmessage = t => this.onPayload(t), t.onclose = t => this.onClose(t), this.socket = t, this.registering = !1, this.events.emit("open");
      }
      onClose(t) {
        this.socket = void 0, this.registering = !1, this.events.emit("close", t);
      }
      onPayload(t) {
        if (void 0 === t.data) return;
        const e = "string" == typeof t.data ? x(t.data) : t.data;
        this.events.emit("payload", e);
      }
      onError(t, e) {
        const r = this.parseError(e);
        const n = Lr(t, r.message || r.toString());
        this.events.emit("payload", n);
      }
      parseError(t, e = this.url) {
        return Ar(t, Fr(e), "WS");
      }
      resetMaxListeners() {
        this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
      }
      emitError(t) {
        const e = this.parseError(new Error((null == t ? void 0 : t.message) || `WebSocket connection failed for host: ${Fr(this.url)}`));
        return this.events.emit("register_error", e), e;
      }
    };
    var Yr = r(59036);
    var Jr = r.n(Yr);
    var Xr = function(t, e) {
      if (t.length >= 255) throw new TypeError("Alphabet too long");
      for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
      for (var i = 0; i < t.length; i++) {
        var s = t.charAt(i), o = s.charCodeAt(0);
        if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
        r[o] = i;
      }
      var a = t.length, c = t.charAt(0), u = Math.log(a) / Math.log(256), h = Math.log(256) / Math.log(a);
      function l(t) {
        if ("string" != typeof t) throw new TypeError("Expected String");
        if (0 === t.length) return new Uint8Array;
        var e = 0;
        if (" " !== t[e]) {
          for (var n = 0, i = 0; t[e] === c; ) n++, e++;
          for (var s = (t.length - e) * u + 1 >>> 0, o = new Uint8Array(s); t[e]; ) {
            var h = r[t.charCodeAt(e)];
            if (255 === h) return;
            for (var l = 0, f = s - 1; (0 !== h || l < i) && -1 !== f; f--, l++) h += a * o[f] >>> 0, o[f] = h % 256 >>> 0, h = h / 256 >>> 0;
            if (0 !== h) throw new Error("Non-zero carry");
            i = l, e++;
          }
          if (" " !== t[e]) {
            for (var p = s - i; p !== s && 0 === o[p]; ) p++;
            for (var d = new Uint8Array(n + (s - p)), g = n; p !== s; ) d[g++] = o[p++];
            return d;
          }
        }
      }
      return {
        encode: function(e) {
          if (e instanceof Uint8Array || (ArrayBuffer.isView(e) ? e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : Array.isArray(e) && (e = Uint8Array.from(e))), 
          !(e instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
          if (0 === e.length) return "";
          for (var r = 0, n = 0, i = 0, s = e.length; i !== s && 0 === e[i]; ) i++, r++;
          for (var o = (s - i) * h + 1 >>> 0, u = new Uint8Array(o); i !== s; ) {
            for (var l = e[i], f = 0, p = o - 1; (0 !== l || f < n) && -1 !== p; p--, f++) l += 256 * u[p] >>> 0, u[p] = l % a >>> 0, 
            l = l / a >>> 0;
            if (0 !== l) throw new Error("Non-zero carry");
            n = f, i++;
          }
          for (var d = o - n; d !== o && 0 === u[d]; ) d++;
          for (var g = c.repeat(r); d < o; ++d) g += t.charAt(u[d]);
          return g;
        },
        decodeUnsafe: l,
        decode: function(t) {
          var r = l(t);
          if (r) return r;
          throw new Error(`Non-${e} character`);
        }
      };
    }, Qr = Xr;
    const Zr = t => {
      if (t instanceof Uint8Array && "Uint8Array" === t.constructor.name) return t;
      if (t instanceof ArrayBuffer) return new Uint8Array(t);
      if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
      throw new Error("Unknown type, must be binary type");
    };
    class tn {
      constructor(t, e, r) {
        this.name = t, this.prefix = e, this.baseEncode = r;
      }
      encode(t) {
        if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
        throw Error("Unknown type, must be binary type");
      }
    }
    class en {
      constructor(t, e, r) {
        if (this.name = t, this.prefix = e, void 0 === e.codePointAt(0)) throw new Error("Invalid prefix character");
        this.prefixCodePoint = e.codePointAt(0), this.baseDecode = r;
      }
      decode(t) {
        if ("string" == typeof t) {
          if (t.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
          return this.baseDecode(t.slice(this.prefix.length));
        }
        throw Error("Can only multibase decode strings");
      }
      or(t) {
        return nn(this, t);
      }
    }
    class rn {
      constructor(t) {
        this.decoders = t;
      }
      or(t) {
        return nn(this, t);
      }
      decode(t) {
        const e = t[0], r = this.decoders[e];
        if (r) return r.decode(t);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
      }
    }
    const nn = (t, e) => new rn({
      ...t.decoders || {
        [t.prefix]: t
      },
      ...e.decoders || {
        [e.prefix]: e
      }
    });
    class sn {
      constructor(t, e, r, n) {
        this.name = t, this.prefix = e, this.baseEncode = r, this.baseDecode = n, this.encoder = new tn(t, e, r), this.decoder = new en(t, e, n);
      }
      encode(t) {
        return this.encoder.encode(t);
      }
      decode(t) {
        return this.decoder.decode(t);
      }
    }
    const on = ({name: t, prefix: e, encode: r, decode: n}) => new sn(t, e, r, n), an = ({prefix: t, name: e, alphabet: r}) => {
      const {encode: n, decode: i} = Qr(r, e);
      return on({
        prefix: t,
        name: e,
        encode: n,
        decode: t => Zr(i(t))
      });
    }, cn = ({name: t, prefix: e, bitsPerChar: r, alphabet: n}) => on({
      prefix: e,
      name: t,
      encode(t) {
        return ((t, e, r) => {
          const n = "=" === e[e.length - 1], i = (1 << r) - 1;
          let s = "", o = 0, a = 0;
          for (let c = 0; c < t.length; ++c) for (a = a << 8 | t[c], o += 8; o > r; ) o -= r, s += e[i & a >> o];
          if (o && (s += e[i & a << r - o]), n) for (;s.length * r & 7; ) s += "=";
          return s;
        })(t, n, r);
      },
      decode(e) {
        return ((t, e, r, n) => {
          const i = {};
          for (let h = 0; h < e.length; ++h) i[e[h]] = h;
          let s = t.length;
          for (;"=" === t[s - 1]; ) --s;
          const o = new Uint8Array(s * r / 8 | 0);
          let a = 0, c = 0, u = 0;
          for (let h = 0; h < s; ++h) {
            const e = i[t[h]];
            if (void 0 === e) throw new SyntaxError(`Non-${n} character`);
            c = c << r | e, a += r, a >= 8 && (a -= 8, o[u++] = 255 & c >> a);
          }
          if (a >= r || 255 & c << 8 - a) throw new SyntaxError("Unexpected end of data");
          return o;
        })(e, n, r, t);
      }
    }), un = on({
      prefix: "\0",
      name: "identity",
      encode: t => (t => (new TextDecoder).decode(t))(t),
      decode: t => (t => (new TextEncoder).encode(t))(t)
    });
    var hn = Object.freeze({
      __proto__: null,
      identity: un
    });
    const ln = cn({
      prefix: "0",
      name: "base2",
      alphabet: "01",
      bitsPerChar: 1
    });
    var fn = Object.freeze({
      __proto__: null,
      base2: ln
    });
    const pn = cn({
      prefix: "7",
      name: "base8",
      alphabet: "01234567",
      bitsPerChar: 3
    });
    var dn = Object.freeze({
      __proto__: null,
      base8: pn
    });
    const gn = an({
      prefix: "9",
      name: "base10",
      alphabet: "0123456789"
    });
    var yn = Object.freeze({
      __proto__: null,
      base10: gn
    });
    const vn = cn({
      prefix: "f",
      name: "base16",
      alphabet: "0123456789abcdef",
      bitsPerChar: 4
    }), _n = cn({
      prefix: "F",
      name: "base16upper",
      alphabet: "0123456789ABCDEF",
      bitsPerChar: 4
    });
    var mn = Object.freeze({
      __proto__: null,
      base16: vn,
      base16upper: _n
    });
    const bn = cn({
      prefix: "b",
      name: "base32",
      alphabet: "abcdefghijklmnopqrstuvwxyz234567",
      bitsPerChar: 5
    }), wn = cn({
      prefix: "B",
      name: "base32upper",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
      bitsPerChar: 5
    }), En = cn({
      prefix: "c",
      name: "base32pad",
      alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
      bitsPerChar: 5
    }), Sn = cn({
      prefix: "C",
      name: "base32padupper",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
      bitsPerChar: 5
    }), On = cn({
      prefix: "v",
      name: "base32hex",
      alphabet: "0123456789abcdefghijklmnopqrstuv",
      bitsPerChar: 5
    }), In = cn({
      prefix: "V",
      name: "base32hexupper",
      alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
      bitsPerChar: 5
    }), Pn = cn({
      prefix: "t",
      name: "base32hexpad",
      alphabet: "0123456789abcdefghijklmnopqrstuv=",
      bitsPerChar: 5
    }), xn = cn({
      prefix: "T",
      name: "base32hexpadupper",
      alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
      bitsPerChar: 5
    }), An = cn({
      prefix: "h",
      name: "base32z",
      alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
      bitsPerChar: 5
    });
    var Nn = Object.freeze({
      __proto__: null,
      base32: bn,
      base32upper: wn,
      base32pad: En,
      base32padupper: Sn,
      base32hex: On,
      base32hexupper: In,
      base32hexpad: Pn,
      base32hexpadupper: xn,
      base32z: An
    });
    const Rn = an({
      prefix: "k",
      name: "base36",
      alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
    }), Tn = an({
      prefix: "K",
      name: "base36upper",
      alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    });
    var jn = Object.freeze({
      __proto__: null,
      base36: Rn,
      base36upper: Tn
    });
    const Cn = an({
      name: "base58btc",
      prefix: "z",
      alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    }), Ln = an({
      name: "base58flickr",
      prefix: "Z",
      alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
    });
    var Un = Object.freeze({
      __proto__: null,
      base58btc: Cn,
      base58flickr: Ln
    });
    const Mn = cn({
      prefix: "m",
      name: "base64",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      bitsPerChar: 6
    }), Dn = cn({
      prefix: "M",
      name: "base64pad",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      bitsPerChar: 6
    }), kn = cn({
      prefix: "u",
      name: "base64url",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
      bitsPerChar: 6
    }), zn = cn({
      prefix: "U",
      name: "base64urlpad",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
      bitsPerChar: 6
    });
    var $n = Object.freeze({
      __proto__: null,
      base64: Mn,
      base64pad: Dn,
      base64url: kn,
      base64urlpad: zn
    });
    const qn = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), Hn = qn.reduce(((t, e, r) => (t[r] = e, 
    t)), []), Bn = qn.reduce(((t, e, r) => (t[e.codePointAt(0)] = r, t)), []);
    const Vn = on({
      prefix: "🚀",
      name: "base256emoji",
      encode: function(t) {
        return t.reduce(((t, e) => t += Hn[e]), "");
      },
      decode: function(t) {
        const e = [];
        for (const r of t) {
          const t = Bn[r.codePointAt(0)];
          if (void 0 === t) throw new Error(`Non-base256emoji character: ${r}`);
          e.push(t);
        }
        return new Uint8Array(e);
      }
    });
    var Kn = Object.freeze({
      __proto__: null,
      base256emoji: Vn
    }), Fn = function t(e, r, n) {
      r = r || [];
      for (var i = n = n || 0; e >= Wn; ) r[n++] = 255 & e | 128, e /= 128;
      for (;-128 & e; ) r[n++] = 255 & e | 128, e >>>= 7;
      return r[n] = 0 | e, t.bytes = n - i + 1, r;
    }, Wn = Math.pow(2, 31);
    var Gn = function t(e, r) {
      var n, i = 0, s = 0, o = r = r || 0, a = e.length;
      do {
        if (o >= a) throw t.bytes = 0, new RangeError("Could not decode varint");
        n = e[o++], i += s < 28 ? (127 & n) << s : (127 & n) * Math.pow(2, s), s += 7;
      } while (n >= 128);
      return t.bytes = o - r, i;
    };
    var Yn = Math.pow(2, 7), Jn = Math.pow(2, 14), Xn = Math.pow(2, 21), Qn = Math.pow(2, 28), Zn = Math.pow(2, 35), ti = Math.pow(2, 42), ei = Math.pow(2, 49), ri = Math.pow(2, 56), ni = Math.pow(2, 63), ii = {
      encode: Fn,
      decode: Gn,
      encodingLength: function(t) {
        return t < Yn ? 1 : t < Jn ? 2 : t < Xn ? 3 : t < Qn ? 4 : t < Zn ? 5 : t < ti ? 6 : t < ei ? 7 : t < ri ? 8 : t < ni ? 9 : 10;
      }
    };
    const si = (t, e, r = 0) => (ii.encode(t, e, r), e), oi = t => ii.encodingLength(t), ai = (t, e) => {
      const r = e.byteLength, n = oi(t), i = n + oi(r), s = new Uint8Array(i + r);
      return si(t, s, 0), si(r, s, n), s.set(e, i), new ci(t, r, e, s);
    };
    class ci {
      constructor(t, e, r, n) {
        this.code = t, this.size = e, this.digest = r, this.bytes = n;
      }
    }
    const ui = ({name: t, code: e, encode: r}) => new hi(t, e, r);
    class hi {
      constructor(t, e, r) {
        this.name = t, this.code = e, this.encode = r;
      }
      digest(t) {
        if (t instanceof Uint8Array) {
          const e = this.encode(t);
          return e instanceof Uint8Array ? ai(this.code, e) : e.then((t => ai(this.code, t)));
        }
        throw Error("Unknown type, must be binary type");
      }
    }
    const li = t => async e => new Uint8Array(await crypto.subtle.digest(t, e)), fi = ui({
      name: "sha2-256",
      code: 18,
      encode: li("SHA-256")
    }), pi = ui({
      name: "sha2-512",
      code: 19,
      encode: li("SHA-512")
    });
    Object.freeze({
      __proto__: null,
      sha256: fi,
      sha512: pi
    });
    const di = Zr, gi = {
      code: 0,
      name: "identity",
      encode: di,
      digest: t => ai(0, di(t))
    };
    Object.freeze({
      __proto__: null,
      identity: gi
    });
    new TextEncoder, new TextDecoder;
    const yi = {
      ...hn,
      ...fn,
      ...dn,
      ...yn,
      ...mn,
      ...Nn,
      ...jn,
      ...Un,
      ...$n,
      ...Kn
    };
    function vi(t) {
      return null != globalThis.Buffer ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
    }
    function _i(t, e, r, n) {
      return {
        name: t,
        prefix: e,
        encoder: {
          name: t,
          prefix: e,
          encode: r
        },
        decoder: {
          decode: n
        }
      };
    }
    const mi = _i("utf8", "u", (t => "u" + new TextDecoder("utf8").decode(t)), (t => (new TextEncoder).encode(t.substring(1)))), bi = _i("ascii", "a", (t => {
      let e = "a";
      for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
      return e;
    }), (t => {
      const e = function(t = 0) {
        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? vi(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
      }((t = t.substring(1)).length);
      for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
      return e;
    })), wi = {
      utf8: mi,
      "utf-8": mi,
      hex: yi.base16,
      latin1: bi,
      ascii: bi,
      binary: bi,
      ...yi
    };
    const Ei = "core", Si = "wc@2:core:", Oi = "error", Ii = {
      database: ":memory:"
    }, Pi = "client_ed25519_seed", xi = T.ONE_DAY, Ai = T.SIX_HOURS, Ni = "wss://relay.walletconnect.com", Ri = "wss://relay.walletconnect.org", Ti = "relayer_message", ji = "relayer_message_ack", Ci = "relayer_connect", Li = "relayer_disconnect", Ui = "relayer_error", Mi = "relayer_connection_stalled", Di = "relayer_transport_closed", ki = "relayer_publish", zi = "payload", $i = "connect", qi = "disconnect", Hi = "error", Bi = T.ONE_SECOND / 2, Vi = "subscription_created", Ki = "subscription_deleted", Fi = "subscription_sync", Wi = "subscription_resubscribed", Gi = 1e3 * T.FIVE_SECONDS, Yi = {
      wc_pairingDelete: {
        req: {
          ttl: T.ONE_DAY,
          prompt: !1,
          tag: 1e3
        },
        res: {
          ttl: T.ONE_DAY,
          prompt: !1,
          tag: 1001
        }
      },
      wc_pairingPing: {
        req: {
          ttl: T.THIRTY_SECONDS,
          prompt: !1,
          tag: 1002
        },
        res: {
          ttl: T.THIRTY_SECONDS,
          prompt: !1,
          tag: 1003
        }
      },
      unregistered_method: {
        req: {
          ttl: T.ONE_DAY,
          prompt: !1,
          tag: 0
        },
        res: {
          ttl: T.ONE_DAY,
          prompt: !1,
          tag: 0
        }
      }
    }, Ji = "history_created", Xi = "history_updated", Qi = "history_deleted", Zi = "history_sync", ts = "expirer_created", es = "expirer_deleted", rs = "expirer_expired", ns = "expirer_sync", is = "verify-api", ss = "https://verify.walletconnect.com";
    class os {
      constructor(t, e) {
        this.core = t, this.logger = e, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, 
        this.storagePrefix = Si, this.init = async () => {
          if (!this.initialized) {
            const t = await this.getKeyChain();
            typeof t < "u" && (this.keychain = t), this.initialized = !0;
          }
        }, this.has = t => (this.isInitialized(), this.keychain.has(t)), this.set = async (t, e) => {
          this.isInitialized(), this.keychain.set(t, e), await this.persist();
        }, this.get = t => {
          this.isInitialized();
          const e = this.keychain.get(t);
          if (typeof e > "u") {
            const {message: e} = er("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw new Error(e);
          }
          return e;
        }, this.del = async t => {
          this.isInitialized(), this.keychain.delete(t), await this.persist();
        }, this.core = t, this.logger = (0, m.generateChildLogger)(e, this.name);
      }
      get context() {
        return (0, m.getLoggerContext)(this.logger);
      }
      get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name;
      }
      async setKeyChain(t) {
        await this.core.storage.setItem(this.storageKey, Re(t));
      }
      async getKeyChain() {
        const t = await this.core.storage.getItem(this.storageKey);
        return typeof t < "u" ? Te(t) : void 0;
      }
      async persist() {
        await this.setKeyChain(this.keychain);
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: t} = er("NOT_INITIALIZED", this.name);
          throw new Error(t);
        }
      }
    }
    class as {
      constructor(t, e, r) {
        this.core = t, this.logger = e, this.name = "crypto", this.initialized = !1, this.init = async () => {
          this.initialized || (await this.keychain.init(), this.initialized = !0);
        }, this.hasKeys = t => (this.isInitialized(), this.keychain.has(t)), this.getClientId = async () => {
          this.isInitialized();
          return Rt(jt(await this.getClientSeed()).publicKey);
        }, this.generateKeyPair = () => {
          this.isInitialized();
          const t = function() {
            const t = Dt.Au();
            return {
              privateKey: xt(t.secretKey, re),
              publicKey: xt(t.publicKey, re)
            };
          }();
          return this.setPrivateKey(t.publicKey, t.privateKey);
        }, this.signJWT = async t => {
          this.isInitialized();
          const e = jt(await this.getClientSeed()), r = se(), n = xi;
          return await Ct(r, t, n, e);
        }, this.generateSharedKey = (t, e, r) => {
          this.isInitialized();
          const n = function(t, e) {
            const r = Dt.gi(At(t, re), At(e, re));
            return xt(new Ut.t(Mt.mE, r).expand(32), re);
          }(this.getPrivateKey(t), e);
          return this.setSymKey(n, r);
        }, this.setSymKey = async (t, e) => {
          this.isInitialized();
          const r = e || function(t) {
            return xt((0, Mt.vp)(At(t, re)), re);
          }(t);
          return await this.keychain.set(r, t), r;
        }, this.deleteKeyPair = async t => {
          this.isInitialized(), await this.keychain.del(t);
        }, this.deleteSymKey = async t => {
          this.isInitialized(), await this.keychain.del(t);
        }, this.encode = async (t, e, r) => {
          this.isInitialized();
          const n = he(r), i = A(e);
          if (le(n)) {
            const e = n.senderPublicKey, r = n.receiverPublicKey;
            t = await this.generateSharedKey(e, r);
          }
          const s = this.getSymKey(t), {type: o, senderPublicKey: a} = n;
          return ce({
            type: o,
            symKey: s,
            message: i,
            senderPublicKey: a
          });
        }, this.decode = async (t, e, r) => {
          this.isInitialized();
          const n = function(t, e) {
            const r = ue(t);
            return he({
              type: ae(r.type),
              senderPublicKey: typeof r.senderPublicKey < "u" ? xt(r.senderPublicKey, re) : void 0,
              receiverPublicKey: e?.receiverPublicKey
            });
          }(e, r);
          if (le(n)) {
            const e = n.receiverPublicKey, r = n.senderPublicKey;
            t = await this.generateSharedKey(e, r);
          }
          try {
            const r = function(t) {
              const e = new Lt.OK(At(t.symKey, re)), {sealed: r, iv: n} = ue(t.encoded), i = e.open(n, r);
              if (null === i) throw new Error("Failed to decrypt");
              return xt(i, ie);
            }({
              symKey: this.getSymKey(t),
              encoded: e
            });
            return x(r);
          } catch (E) {
            this.logger.error(`Failed to decode message from topic: '${t}', clientId: '${await this.getClientId()}'`), this.logger.error(E);
          }
        }, this.getPayloadType = t => ae(ue(t).type), this.getPayloadSenderPublicKey = t => {
          const e = ue(t);
          return e.senderPublicKey ? xt(e.senderPublicKey, re) : void 0;
        }, this.core = t, this.logger = (0, m.generateChildLogger)(e, this.name), this.keychain = r || new os(this.core, this.logger);
      }
      get context() {
        return (0, m.getLoggerContext)(this.logger);
      }
      async setPrivateKey(t, e) {
        return await this.keychain.set(t, e), t;
      }
      getPrivateKey(t) {
        return this.keychain.get(t);
      }
      async getClientSeed() {
        let t = "";
        try {
          t = this.keychain.get(Pi);
        } catch {
          t = se(), await this.keychain.set(Pi, t);
        }
        return function(t, e = "utf8") {
          const r = wi[e];
          if (!r) throw new Error(`Unsupported encoding "${e}"`);
          return "utf8" !== e && "utf-8" !== e || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${t}`) : vi(globalThis.Buffer.from(t, "utf-8"));
        }(t, "base16");
      }
      getSymKey(t) {
        return this.keychain.get(t);
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: t} = er("NOT_INITIALIZED", this.name);
          throw new Error(t);
        }
      }
    }
    class cs extends class {
      constructor(t, e) {
        this.logger = t, this.core = e;
      }
    } {
      constructor(t, e) {
        super(t, e), this.logger = t, this.core = e, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, 
        this.storagePrefix = Si, this.init = async () => {
          if (!this.initialized) {
            this.logger.trace("Initialized");
            try {
              const t = await this.getRelayerMessages();
              typeof t < "u" && (this.messages = t), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                size: this.messages.size
              });
            } catch (t) {
              this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t);
            } finally {
              this.initialized = !0;
            }
          }
        }, this.set = async (t, e) => {
          this.isInitialized();
          const r = oe(e);
          let n = this.messages.get(t);
          return typeof n > "u" && (n = {}), typeof n[r] < "u" || (n[r] = e, this.messages.set(t, n), await this.persist()), r;
        }, this.get = t => {
          this.isInitialized();
          let e = this.messages.get(t);
          return typeof e > "u" && (e = {}), e;
        }, this.has = (t, e) => {
          this.isInitialized();
          return typeof this.get(t)[oe(e)] < "u";
        }, this.del = async t => {
          this.isInitialized(), this.messages.delete(t), await this.persist();
        }, this.logger = (0, m.generateChildLogger)(t, this.name), this.core = e;
      }
      get context() {
        return (0, m.getLoggerContext)(this.logger);
      }
      get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name;
      }
      async setRelayerMessages(t) {
        await this.core.storage.setItem(this.storageKey, Re(t));
      }
      async getRelayerMessages() {
        const t = await this.core.storage.getItem(this.storageKey);
        return typeof t < "u" ? Te(t) : void 0;
      }
      async persist() {
        await this.setRelayerMessages(this.messages);
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: t} = er("NOT_INITIALIZED", this.name);
          throw new Error(t);
        }
      }
    }
    class us extends S {
      constructor(t, e) {
        super(t, e), this.relayer = t, this.logger = e, this.events = new g.EventEmitter, this.name = "publisher", this.queue = new Map, 
        this.publishTimeout = (0, T.toMiliseconds)(T.TEN_SECONDS), this.queueTimeout = (0, T.toMiliseconds)(T.FIVE_SECONDS), this.needsTransportRestart = !1, 
        this.publish = async (t, e, r) => {
          this.logger.debug("Publishing Payload"), this.logger.trace({
            type: "method",
            method: "publish",
            params: {
              topic: t,
              message: e,
              opts: r
            }
          });
          try {
            const n = r?.ttl || Ai, i = $e(r), s = r?.prompt || !1, o = r?.tag || 0, a = r?.id || Tr().toString(), c = {
              topic: t,
              message: e,
              opts: {
                ttl: n,
                relay: i,
                prompt: s,
                tag: o,
                id: a
              }
            }, u = setTimeout((() => this.queue.set(a, c)), this.queueTimeout);
            try {
              await await Ce(this.rpcPublish(t, e, n, i, s, o, a), this.publishTimeout), clearTimeout(u), this.relayer.events.emit(ki, c);
            } catch {
              return this.logger.debug("Publishing Payload stalled"), void (this.needsTransportRestart = !0);
            }
            this.logger.debug("Successfully Published Payload"), this.logger.trace({
              type: "method",
              method: "publish",
              params: {
                topic: t,
                message: e,
                opts: r
              }
            });
          } catch (n) {
            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(n), n;
          }
        }, this.on = (t, e) => {
          this.events.on(t, e);
        }, this.once = (t, e) => {
          this.events.once(t, e);
        }, this.off = (t, e) => {
          this.events.off(t, e);
        }, this.removeListener = (t, e) => {
          this.events.removeListener(t, e);
        }, this.relayer = t, this.logger = (0, m.generateChildLogger)(e, this.name), this.registerEventListeners();
      }
      get context() {
        return (0, m.getLoggerContext)(this.logger);
      }
      rpcPublish(t, e, r, n, i, s, o) {
        var a, c, u, h;
        const l = {
          method: qe(n.protocol).publish,
          params: {
            topic: t,
            message: e,
            ttl: r,
            prompt: i,
            tag: s
          },
          id: o
        };
        return sr(null == (a = l.params) ? void 0 : a.prompt) && (null == (c = l.params) || delete c.prompt), sr(null == (u = l.params) ? void 0 : u.tag) && (null == (h = l.params) || delete h.tag), 
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
          type: "message",
          direction: "outgoing",
          request: l
        }), this.relayer.request(l);
      }
      onPublish(t) {
        this.queue.delete(t);
      }
      checkQueue() {
        this.queue.forEach((async t => {
          const {topic: e, message: r, opts: n} = t;
          await this.publish(e, r, n);
        }));
      }
      registerEventListeners() {
        this.relayer.core.heartbeat.on(_.HEARTBEAT_EVENTS.pulse, (() => {
          if (this.needsTransportRestart) return this.needsTransportRestart = !1, void this.relayer.events.emit(Mi);
          this.checkQueue();
        })), this.relayer.on(ji, (t => {
          this.onPublish(t.id.toString());
        }));
      }
    }
    class hs {
      constructor() {
        this.map = new Map, this.set = (t, e) => {
          const r = this.get(t);
          this.exists(t, e) || this.map.set(t, [ ...r, e ]);
        }, this.get = t => this.map.get(t) || [], this.exists = (t, e) => this.get(t).includes(e), this.delete = (t, e) => {
          if (typeof e > "u") return void this.map.delete(t);
          if (!this.map.has(t)) return;
          const r = this.get(t);
          if (!this.exists(t, e)) return;
          const n = r.filter((t => t !== e));
          n.length ? this.map.set(t, n) : this.map.delete(t);
        }, this.clear = () => {
          this.map.clear();
        };
      }
      get topics() {
        return Array.from(this.map.keys());
      }
    }
    var ls = Object.defineProperty, fs = Object.defineProperties, ps = Object.getOwnPropertyDescriptors, ds = Object.getOwnPropertySymbols, gs = Object.prototype.hasOwnProperty, ys = Object.prototype.propertyIsEnumerable, vs = (t, e, r) => e in t ? ls(t, e, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }) : t[e] = r, _s = (t, e) => {
      for (var r in e || (e = {})) gs.call(e, r) && vs(t, r, e[r]);
      if (ds) for (var r of ds(e)) ys.call(e, r) && vs(t, r, e[r]);
      return t;
    }, ms = (t, e) => fs(t, ps(e));
    class bs extends I {
      constructor(t, e) {
        super(t, e), this.relayer = t, this.logger = e, this.subscriptions = new Map, this.topicMap = new hs, this.events = new g.EventEmitter, 
        this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", 
        this.pollingInterval = 20, this.storagePrefix = Si, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, 
        this.init = async () => {
          this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), 
          this.clientId = await this.relayer.core.crypto.getClientId());
        }, this.subscribe = async (t, e) => {
          await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
            type: "method",
            method: "subscribe",
            params: {
              topic: t,
              opts: e
            }
          });
          try {
            const r = $e(e), n = {
              topic: t,
              relay: r
            };
            this.pending.set(t, n);
            const i = await this.rpcSubscribe(t, r);
            return this.onSubscribe(i, n), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
              type: "method",
              method: "subscribe",
              params: {
                topic: t,
                opts: e
              }
            }), i;
          } catch (w) {
            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(w), w;
          }
        }, this.unsubscribe = async (t, e) => {
          await this.restartToComplete(), this.isInitialized(), typeof e?.id < "u" ? await this.unsubscribeById(t, e.id, e) : await this.unsubscribeByTopic(t, e);
        }, this.isSubscribed = async t => !!this.topics.includes(t) || await new Promise(((e, r) => {
          const n = new T.Watch;
          n.start(this.pendingSubscriptionWatchLabel);
          const i = setInterval((() => {
            !this.pending.has(t) && this.topics.includes(t) && (clearInterval(i), n.stop(this.pendingSubscriptionWatchLabel), e(!0)), 
            n.elapsed(this.pendingSubscriptionWatchLabel) >= Gi && (clearInterval(i), n.stop(this.pendingSubscriptionWatchLabel), r(new Error("Subscription resolution timeout")));
          }), this.pollingInterval);
        })).catch((() => !1)), this.on = (t, e) => {
          this.events.on(t, e);
        }, this.once = (t, e) => {
          this.events.once(t, e);
        }, this.off = (t, e) => {
          this.events.off(t, e);
        }, this.removeListener = (t, e) => {
          this.events.removeListener(t, e);
        }, this.restart = async () => {
          this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
        }, this.relayer = t, this.logger = (0, m.generateChildLogger)(e, this.name), this.clientId = "";
      }
      get context() {
        return (0, m.getLoggerContext)(this.logger);
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
      hasSubscription(t, e) {
        let r = !1;
        try {
          r = this.getSubscription(t).topic === e;
        } catch {}
        return r;
      }
      onEnable() {
        this.cached = [], this.initialized = !0;
      }
      onDisable() {
        this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
      }
      async unsubscribeByTopic(t, e) {
        const r = this.topicMap.get(t);
        await Promise.all(r.map((async r => await this.unsubscribeById(t, r, e))));
      }
      async unsubscribeById(t, e, r) {
        this.logger.debug("Unsubscribing Topic"), this.logger.trace({
          type: "method",
          method: "unsubscribe",
          params: {
            topic: t,
            id: e,
            opts: r
          }
        });
        try {
          const n = $e(r);
          await this.rpcUnsubscribe(t, e, n);
          const i = rr("USER_DISCONNECTED", `${this.name}, ${t}`);
          await this.onUnsubscribe(t, e, i), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
              topic: t,
              id: e,
              opts: r
            }
          });
        } catch (n) {
          throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(n), n;
        }
      }
      async rpcSubscribe(t, e) {
        const r = {
          method: qe(e.protocol).subscribe,
          params: {
            topic: t
          }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
          type: "payload",
          direction: "outgoing",
          request: r
        });
        try {
          await await Ce(this.relayer.request(r), this.subscribeTimeout);
        } catch {
          this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Mi);
        }
        return oe(t + this.clientId);
      }
      async rpcBatchSubscribe(t) {
        if (!t.length) return;
        const e = {
          method: qe(t[0].relay.protocol).batchSubscribe,
          params: {
            topics: t.map((t => t.topic))
          }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
          type: "payload",
          direction: "outgoing",
          request: e
        });
        try {
          return await await Ce(this.relayer.request(e), this.subscribeTimeout);
        } catch {
          this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Mi);
        }
      }
      rpcUnsubscribe(t, e, r) {
        const n = {
          method: qe(r.protocol).unsubscribe,
          params: {
            topic: t,
            id: e
          }
        };
        return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
          type: "payload",
          direction: "outgoing",
          request: n
        }), this.relayer.request(n);
      }
      onSubscribe(t, e) {
        this.setSubscription(t, ms(_s({}, e), {
          id: t
        })), this.pending.delete(e.topic);
      }
      onBatchSubscribe(t) {
        t.length && t.forEach((t => {
          this.setSubscription(t.id, _s({}, t)), this.pending.delete(t.topic);
        }));
      }
      async onUnsubscribe(t, e, r) {
        this.events.removeAllListeners(e), this.hasSubscription(e, t) && this.deleteSubscription(e, r), await this.relayer.messages.del(t);
      }
      async setRelayerSubscriptions(t) {
        await this.relayer.core.storage.setItem(this.storageKey, t);
      }
      async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey);
      }
      setSubscription(t, e) {
        this.subscriptions.has(t) || (this.logger.debug("Setting subscription"), this.logger.trace({
          type: "method",
          method: "setSubscription",
          id: t,
          subscription: e
        }), this.addSubscription(t, e));
      }
      addSubscription(t, e) {
        this.subscriptions.set(t, _s({}, e)), this.topicMap.set(e.topic, t), this.events.emit(Vi, e);
      }
      getSubscription(t) {
        this.logger.debug("Getting subscription"), this.logger.trace({
          type: "method",
          method: "getSubscription",
          id: t
        });
        const e = this.subscriptions.get(t);
        if (!e) {
          const {message: e} = er("NO_MATCHING_KEY", `${this.name}: ${t}`);
          throw new Error(e);
        }
        return e;
      }
      deleteSubscription(t, e) {
        this.logger.debug("Deleting subscription"), this.logger.trace({
          type: "method",
          method: "deleteSubscription",
          id: t,
          reason: e
        });
        const r = this.getSubscription(t);
        this.subscriptions.delete(t), this.topicMap.delete(r.topic, t), this.events.emit(Ki, ms(_s({}, r), {
          reason: e
        }));
      }
      async persist() {
        await this.setRelayerSubscriptions(this.values), this.events.emit(Fi);
      }
      async reset() {
        if (this.cached.length) {
          const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
          for (let e = 0; e < t; e++) {
            const t = this.cached.splice(0, this.batchSubscribeTopicsLimit);
            await this.batchSubscribe(t);
          }
        }
        this.events.emit(Wi);
      }
      async restore() {
        try {
          const t = await this.getRelayerSubscriptions();
          if (typeof t > "u" || !t.length) return;
          if (this.subscriptions.size) {
            const {message: t} = er("RESTORE_WILL_OVERRIDE", this.name);
            throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
          }
          this.cached = t, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
            type: "method",
            method: "restore",
            subscriptions: this.values
          });
        } catch (t) {
          this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(t);
        }
      }
      async batchSubscribe(t) {
        if (!t.length) return;
        const e = await this.rpcBatchSubscribe(t);
        nr(e) && this.onBatchSubscribe(e.map(((e, r) => ms(_s({}, t[r]), {
          id: e
        }))));
      }
      async onConnect() {
        this.restartInProgress || (await this.restart(), this.onEnable());
      }
      onDisconnect() {
        this.onDisable();
      }
      async checkPending() {
        if (this.relayer.transportExplicitlyClosed) return;
        const t = [];
        this.pending.forEach((e => {
          t.push(e);
        })), await this.batchSubscribe(t);
      }
      registerEventListeners() {
        this.relayer.core.heartbeat.on(_.HEARTBEAT_EVENTS.pulse, (async () => {
          await this.checkPending();
        })), this.relayer.on(Ci, (async () => {
          await this.onConnect();
        })), this.relayer.on(Li, (() => {
          this.onDisconnect();
        })), this.events.on(Vi, (async t => {
          const e = Vi;
          this.logger.info(`Emitting ${e}`), this.logger.debug({
            type: "event",
            event: e,
            data: t
          }), await this.persist();
        })), this.events.on(Ki, (async t => {
          const e = Ki;
          this.logger.info(`Emitting ${e}`), this.logger.debug({
            type: "event",
            event: e,
            data: t
          }), await this.persist();
        }));
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: t} = er("NOT_INITIALIZED", this.name);
          throw new Error(t);
        }
      }
      async restartToComplete() {
        this.restartInProgress && await new Promise((t => {
          const e = setInterval((() => {
            this.restartInProgress || (clearInterval(e), t());
          }), this.pollingInterval);
        }));
      }
    }
    var ws = Object.defineProperty, Es = Object.getOwnPropertySymbols, Ss = Object.prototype.hasOwnProperty, Os = Object.prototype.propertyIsEnumerable, Is = (t, e, r) => e in t ? ws(t, e, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }) : t[e] = r;
    class Ps extends O {
      constructor(t) {
        super(t), this.protocol = "wc", this.version = 2, this.events = new g.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, 
        this.initialized = !1, this.reconnecting = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = [ "socket hang up", "socket stalled" ], 
        this.request = async t => {
          this.logger.debug("Publishing Request Payload");
          try {
            return await this.toEstablishConnection(), await this.provider.request(t);
          } catch (e) {
            throw this.logger.debug("Failed to Publish Request"), this.logger.error(e), e;
          }
        }, this.core = t.core, this.logger = typeof t.logger < "u" && "string" != typeof t.logger ? (0, m.generateChildLogger)(t.logger, this.name) : (0, 
        m.pino)((0, m.getDefaultLoggerOptions)({
          level: t.logger || "error"
        })), this.messages = new cs(this.logger, t.core), this.subscriber = new bs(this, this.logger), this.publisher = new us(this, this.logger), 
        this.relayUrl = t?.relayUrl || Ni, this.projectId = t.projectId, this.provider = {};
      }
      async init() {
        this.logger.trace("Initialized"), await this.createProvider(), await Promise.all([ this.messages.init(), this.subscriber.init() ]);
        try {
          await this.transportOpen();
        } catch {
          this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Ri}...`), await this.restartTransport(Ri);
        }
        this.registerEventListeners(), this.initialized = !0, setTimeout((async () => {
          0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), 
          this.transportExplicitlyClosed = !1);
        }), 1e4);
      }
      get context() {
        return (0, m.getLoggerContext)(this.logger);
      }
      get connected() {
        return this.provider.connection.connected;
      }
      get connecting() {
        return this.provider.connection.connecting;
      }
      async publish(t, e, r) {
        this.isInitialized(), await this.publisher.publish(t, e, r), await this.recordMessageEvent({
          topic: t,
          message: e,
          publishedAt: Date.now()
        });
      }
      async subscribe(t, e) {
        var r;
        this.isInitialized();
        let n = (null == (r = this.subscriber.topicMap.get(t)) ? void 0 : r[0]) || "";
        return n || (await Promise.all([ new Promise((e => {
          this.subscriber.once(Vi, (r => {
            r.topic === t && e();
          }));
        })), new Promise((async r => {
          n = await this.subscriber.subscribe(t, e), r();
        })) ]), n);
      }
      async unsubscribe(t, e) {
        this.isInitialized(), await this.subscriber.unsubscribe(t, e);
      }
      on(t, e) {
        this.events.on(t, e);
      }
      once(t, e) {
        this.events.once(t, e);
      }
      off(t, e) {
        this.events.off(t, e);
      }
      removeListener(t, e) {
        this.events.removeListener(t, e);
      }
      async transportClose() {
        this.transportExplicitlyClosed = !0, this.connected && (await this.provider.disconnect(), this.events.emit(Di));
      }
      async transportOpen(t) {
        if (this.transportExplicitlyClosed = !1, !this.reconnecting) {
          this.relayUrl = t || this.relayUrl, this.reconnecting = !0;
          try {
            await Promise.all([ new Promise((t => {
              this.initialized || t(), this.subscriber.once(Wi, (() => {
                t();
              }));
            })), await Promise.race([ new Promise((async (t, e) => {
              await Ce(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((t => e(t))).then((() => t())).finally((() => this.removeListener(Di, this.rejectTransportOpen)));
            })), new Promise((t => this.once(Di, this.rejectTransportOpen))) ]) ]);
          } catch (e) {
            this.logger.error(e);
            const t = e;
            if (!this.isConnectionStalled(t.message)) throw e;
            this.events.emit(Di);
          } finally {
            this.reconnecting = !1;
          }
        }
      }
      async restartTransport(t) {
        this.transportExplicitlyClosed || this.reconnecting || (this.relayUrl = t || this.relayUrl, this.connected && await Promise.all([ new Promise((t => {
          this.provider.once(qi, (() => {
            t();
          }));
        })), this.transportClose() ]), await this.createProvider(), await this.transportOpen());
      }
      isConnectionStalled(t) {
        return this.staleConnectionErrors.some((e => t.includes(e)));
      }
      rejectTransportOpen() {
        throw new Error("Attempt to connect to relay via `transportOpen` has stalled. Retrying...");
      }
      async createProvider() {
        const t = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new Kr(new Gr(Ae({
          sdkVersion: "2.9.1",
          protocol: this.protocol,
          version: this.version,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
          auth: t,
          useOnCloseEvent: !0
        }))), this.registerProviderListeners();
      }
      async recordMessageEvent(t) {
        const {topic: e, message: r} = t;
        await this.messages.set(e, r);
      }
      async shouldIgnoreMessageEvent(t) {
        const {topic: e, message: r} = t;
        if (!r || 0 === r.length) return this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0;
        if (!await this.subscriber.isSubscribed(e)) return this.logger.debug(`Ignoring message for non-subscribed topic ${e}`), 
        !0;
        const n = this.messages.has(e, r);
        return n && this.logger.debug(`Ignoring duplicate message: ${r}`), n;
      }
      async onProviderPayload(t) {
        if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
          type: "payload",
          direction: "incoming",
          payload: t
        }), qr(t)) {
          if (!t.method.endsWith("_subscription")) return;
          const e = t.params, {topic: r, message: n, publishedAt: i} = e.data, s = {
            topic: r,
            message: n,
            publishedAt: i
          };
          this.logger.debug("Emitting Relayer Payload"), this.logger.trace(((t, e) => {
            for (var r in e || (e = {})) Ss.call(e, r) && Is(t, r, e[r]);
            if (Es) for (var r of Es(e)) Os.call(e, r) && Is(t, r, e[r]);
            return t;
          })({
            type: "event",
            event: e.id
          }, s)), this.events.emit(e.id, s), await this.acknowledgePayload(t), await this.onMessageEvent(s);
        } else Hr(t) && this.events.emit(ji, t);
      }
      async onMessageEvent(t) {
        await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Ti, t), await this.recordMessageEvent(t));
      }
      async acknowledgePayload(t) {
        const e = Cr(t.id, !0);
        await this.provider.connection.send(e);
      }
      registerProviderListeners() {
        this.provider.on(zi, (t => this.onProviderPayload(t))), this.provider.on($i, (() => {
          this.events.emit(Ci);
        })), this.provider.on(qi, (() => {
          this.onProviderDisconnect();
        })), this.provider.on(Hi, (t => {
          this.logger.error(t), this.events.emit(Ui, t);
        }));
      }
      registerEventListeners() {
        this.events.on(Mi, (async () => {
          await this.restartTransport();
        }));
      }
      onProviderDisconnect() {
        this.events.emit(Li), this.attemptToReconnect();
      }
      attemptToReconnect() {
        this.transportExplicitlyClosed || setTimeout((async () => {
          await this.restartTransport();
        }), (0, T.toMiliseconds)(Bi));
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: t} = er("NOT_INITIALIZED", this.name);
          throw new Error(t);
        }
      }
      async toEstablishConnection() {
        if (!this.connected) {
          if (this.connecting) return await new Promise((t => {
            const e = setInterval((() => {
              this.connected && (clearInterval(e), t());
            }), this.connectionStatusPollingInterval);
          }));
          await this.restartTransport();
        }
      }
    }
    var xs = Object.defineProperty, As = Object.getOwnPropertySymbols, Ns = Object.prototype.hasOwnProperty, Rs = Object.prototype.propertyIsEnumerable, Ts = (t, e, r) => e in t ? xs(t, e, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }) : t[e] = r, js = (t, e) => {
      for (var r in e || (e = {})) Ns.call(e, r) && Ts(t, r, e[r]);
      if (As) for (var r of As(e)) Rs.call(e, r) && Ts(t, r, e[r]);
      return t;
    };
    class Cs extends class {
      constructor(t, e, r, n) {
        this.core = t, this.logger = e, this.name = r;
      }
    } {
      constructor(t, e, r, n = Si, i) {
        super(t, e, r, n), this.core = t, this.logger = e, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], 
        this.initialized = !1, this.storagePrefix = Si, this.init = async () => {
          this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((t => {
            this.getKey && null !== t && !sr(t) ? this.map.set(this.getKey(t), t) : function(t) {
              var e;
              return null == (e = t?.proposer) ? void 0 : e.publicKey;
            }(t) ? this.map.set(t.id, t) : function(t) {
              return t?.topic;
            }(t) && this.map.set(t.topic, t);
          })), this.cached = [], this.initialized = !0);
        }, this.set = async (t, e) => {
          this.isInitialized(), this.map.has(t) ? await this.update(t, e) : (this.logger.debug("Setting value"), this.logger.trace({
            type: "method",
            method: "set",
            key: t,
            value: e
          }), this.map.set(t, e), await this.persist());
        }, this.get = t => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
          type: "method",
          method: "get",
          key: t
        }), this.getData(t)), this.getAll = t => (this.isInitialized(), t ? this.values.filter((e => Object.keys(t).every((r => Jr()(e[r], t[r]))))) : this.values), 
        this.update = async (t, e) => {
          this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
            type: "method",
            method: "update",
            key: t,
            update: e
          });
          const r = js(js({}, this.getData(t)), e);
          this.map.set(t, r), await this.persist();
        }, this.delete = async (t, e) => {
          this.isInitialized(), this.map.has(t) && (this.logger.debug("Deleting value"), this.logger.trace({
            type: "method",
            method: "delete",
            key: t,
            reason: e
          }), this.map.delete(t), await this.persist());
        }, this.logger = (0, m.generateChildLogger)(e, this.name), this.storagePrefix = n, this.getKey = i;
      }
      get context() {
        return (0, m.getLoggerContext)(this.logger);
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
      async setDataStore(t) {
        await this.core.storage.setItem(this.storageKey, t);
      }
      async getDataStore() {
        return await this.core.storage.getItem(this.storageKey);
      }
      getData(t) {
        const e = this.map.get(t);
        if (!e) {
          const {message: e} = er("NO_MATCHING_KEY", `${this.name}: ${t}`);
          throw this.logger.error(e), new Error(e);
        }
        return e;
      }
      async persist() {
        await this.setDataStore(this.values);
      }
      async restore() {
        try {
          const t = await this.getDataStore();
          if (typeof t > "u" || !t.length) return;
          if (this.map.size) {
            const {message: t} = er("RESTORE_WILL_OVERRIDE", this.name);
            throw this.logger.error(t), new Error(t);
          }
          this.cached = t, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
            type: "method",
            method: "restore",
            value: this.values
          });
        } catch (t) {
          this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(t);
        }
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: t} = er("NOT_INITIALIZED", this.name);
          throw new Error(t);
        }
      }
    }
    class Ls {
      constructor(t, e) {
        this.core = t, this.logger = e, this.name = "pairing", this.version = "0.3", this.events = new (y()), this.initialized = !1, 
        this.storagePrefix = Si, this.ignoredPayloadTypes = [ 1 ], this.registeredMethods = [], this.init = async () => {
          this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), 
          this.initialized = !0, this.logger.trace("Initialized"));
        }, this.register = ({methods: t}) => {
          this.isInitialized(), this.registeredMethods = [ ...new Set([ ...this.registeredMethods, ...t ]) ];
        }, this.create = async () => {
          this.isInitialized();
          const t = se(), e = await this.core.crypto.setSymKey(t), r = Me(T.FIVE_MINUTES), n = {
            protocol: "irn"
          }, i = {
            topic: e,
            expiry: r,
            relay: n,
            active: !1
          }, s = Ye({
            protocol: this.core.protocol,
            version: this.core.version,
            topic: e,
            symKey: t,
            relay: n
          });
          return await this.pairings.set(e, i), await this.core.relayer.subscribe(e), this.core.expirer.set(e, r), {
            topic: e,
            uri: s
          };
        }, this.pair = async t => {
          this.isInitialized(), this.isValidPair(t);
          const {topic: e, symKey: r, relay: n} = function(t) {
            const e = t.indexOf(":"), r = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0, n = t.substring(0, e), i = t.substring(e + 1, r).split("@"), s = typeof r < "u" ? t.substring(r) : "", o = Qt.parse(s);
            return {
              protocol: n,
              topic: Ge(i[0]),
              version: parseInt(i[1], 10),
              symKey: o.symKey,
              relay: We(o)
            };
          }(t.uri);
          if (this.pairings.keys.includes(e)) throw new Error(`Pairing already exists: ${e}`);
          if (this.core.crypto.hasKeys(e)) throw new Error(`Keychain already exists: ${e}`);
          const i = Me(T.FIVE_MINUTES), s = {
            topic: e,
            relay: n,
            expiry: i,
            active: !1
          };
          return await this.pairings.set(e, s), await this.core.crypto.setSymKey(r, e), await this.core.relayer.subscribe(e, {
            relay: n
          }), this.core.expirer.set(e, i), t.activatePairing && await this.activate({
            topic: e
          }), s;
        }, this.activate = async ({topic: t}) => {
          this.isInitialized();
          const e = Me(T.THIRTY_DAYS);
          await this.pairings.update(t, {
            active: !0,
            expiry: e
          }), this.core.expirer.set(t, e);
        }, this.ping = async t => {
          this.isInitialized(), await this.isValidPing(t);
          const {topic: e} = t;
          if (this.pairings.keys.includes(e)) {
            const t = await this.sendRequest(e, "wc_pairingPing", {}), {done: r, resolve: n, reject: i} = je();
            this.events.once(ke("pairing_ping", t), (({error: t}) => {
              t ? i(t) : n();
            })), await r();
          }
        }, this.updateExpiry = async ({topic: t, expiry: e}) => {
          this.isInitialized(), await this.pairings.update(t, {
            expiry: e
          });
        }, this.updateMetadata = async ({topic: t, metadata: e}) => {
          this.isInitialized(), await this.pairings.update(t, {
            peerMetadata: e
          });
        }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async t => {
          this.isInitialized(), await this.isValidDisconnect(t);
          const {topic: e} = t;
          this.pairings.keys.includes(e) && (await this.sendRequest(e, "wc_pairingDelete", rr("USER_DISCONNECTED")), await this.deletePairing(e));
        }, this.sendRequest = async (t, e, r) => {
          const n = jr(e, r), i = await this.core.crypto.encode(t, n), s = Yi[e].req;
          return this.core.history.set(t, n), this.core.relayer.publish(t, i, s), n.id;
        }, this.sendResult = async (t, e, r) => {
          const n = Cr(t, r), i = await this.core.crypto.encode(e, n), s = await this.core.history.get(e, t), o = Yi[s.request.method].res;
          await this.core.relayer.publish(e, i, o), await this.core.history.resolve(n);
        }, this.sendError = async (t, e, r) => {
          const n = Lr(t, r), i = await this.core.crypto.encode(e, n), s = await this.core.history.get(e, t), o = Yi[s.request.method] ? Yi[s.request.method].res : Yi.unregistered_method.res;
          await this.core.relayer.publish(e, i, o), await this.core.history.resolve(n);
        }, this.deletePairing = async (t, e) => {
          await this.core.relayer.unsubscribe(t), await Promise.all([ this.pairings.delete(t, rr("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(t), e ? Promise.resolve() : this.core.expirer.del(t) ]);
        }, this.cleanup = async () => {
          const t = this.pairings.getAll().filter((t => De(t.expiry)));
          await Promise.all(t.map((t => this.deletePairing(t.topic))));
        }, this.onRelayEventRequest = t => {
          const {topic: e, payload: r} = t;
          switch (r.method) {
           case "wc_pairingPing":
            return this.onPairingPingRequest(e, r);

           case "wc_pairingDelete":
            return this.onPairingDeleteRequest(e, r);

           default:
            return this.onUnknownRpcMethodRequest(e, r);
          }
        }, this.onRelayEventResponse = async t => {
          const {topic: e, payload: r} = t, n = (await this.core.history.get(e, r.id)).request.method;
          return "wc_pairingPing" === n ? this.onPairingPingResponse(e, r) : this.onUnknownRpcMethodResponse(n);
        }, this.onPairingPingRequest = async (t, e) => {
          const {id: r} = e;
          try {
            this.isValidPing({
              topic: t
            }), await this.sendResult(r, t, !0), this.events.emit("pairing_ping", {
              id: r,
              topic: t
            });
          } catch (n) {
            await this.sendError(r, t, n), this.logger.error(n);
          }
        }, this.onPairingPingResponse = (t, e) => {
          const {id: r} = e;
          setTimeout((() => {
            Br(e) ? this.events.emit(ke("pairing_ping", r), {}) : Vr(e) && this.events.emit(ke("pairing_ping", r), {
              error: e.error
            });
          }), 500);
        }, this.onPairingDeleteRequest = async (t, e) => {
          const {id: r} = e;
          try {
            this.isValidDisconnect({
              topic: t
            }), await this.deletePairing(t), this.events.emit("pairing_delete", {
              id: r,
              topic: t
            });
          } catch (n) {
            await this.sendError(r, t, n), this.logger.error(n);
          }
        }, this.onUnknownRpcMethodRequest = async (t, e) => {
          const {id: r, method: n} = e;
          try {
            if (this.registeredMethods.includes(n)) return;
            const e = rr("WC_METHOD_UNSUPPORTED", n);
            await this.sendError(r, t, e), this.logger.error(e);
          } catch (i) {
            await this.sendError(r, t, i), this.logger.error(i);
          }
        }, this.onUnknownRpcMethodResponse = t => {
          this.registeredMethods.includes(t) || this.logger.error(rr("WC_METHOD_UNSUPPORTED", t));
        }, this.isValidPair = t => {
          if (!gr(t)) {
            const {message: e} = er("MISSING_OR_INVALID", `pair() params: ${t}`);
            throw new Error(e);
          }
          if (!function(t) {
            if (or(t, !1)) try {
              return typeof new URL(t) < "u";
            } catch {
              return !1;
            }
            return !1;
          }(t.uri)) {
            const {message: e} = er("MISSING_OR_INVALID", `pair() uri: ${t.uri}`);
            throw new Error(e);
          }
        }, this.isValidPing = async t => {
          if (!gr(t)) {
            const {message: e} = er("MISSING_OR_INVALID", `ping() params: ${t}`);
            throw new Error(e);
          }
          const {topic: e} = t;
          await this.isValidPairingTopic(e);
        }, this.isValidDisconnect = async t => {
          if (!gr(t)) {
            const {message: e} = er("MISSING_OR_INVALID", `disconnect() params: ${t}`);
            throw new Error(e);
          }
          const {topic: e} = t;
          await this.isValidPairingTopic(e);
        }, this.isValidPairingTopic = async t => {
          if (!or(t, !1)) {
            const {message: e} = er("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
            throw new Error(e);
          }
          if (!this.pairings.keys.includes(t)) {
            const {message: e} = er("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
            throw new Error(e);
          }
          if (De(this.pairings.get(t).expiry)) {
            await this.deletePairing(t);
            const {message: e} = er("EXPIRED", `pairing topic: ${t}`);
            throw new Error(e);
          }
        }, this.core = t, this.logger = (0, m.generateChildLogger)(e, this.name), this.pairings = new Cs(this.core, this.logger, this.name, this.storagePrefix);
      }
      get context() {
        return (0, m.getLoggerContext)(this.logger);
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: t} = er("NOT_INITIALIZED", this.name);
          throw new Error(t);
        }
      }
      registerRelayerEvents() {
        this.core.relayer.on(Ti, (async t => {
          const {topic: e, message: r} = t;
          if (!this.pairings.keys.includes(e) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
          const n = await this.core.crypto.decode(e, r);
          qr(n) ? (this.core.history.set(e, n), this.onRelayEventRequest({
            topic: e,
            payload: n
          })) : Hr(n) && (await this.core.history.resolve(n), await this.onRelayEventResponse({
            topic: e,
            payload: n
          }), this.core.history.delete(e, n.id));
        }));
      }
      registerExpirerEvents() {
        this.core.expirer.on(rs, (async t => {
          const {topic: e} = Ue(t.target);
          e && this.pairings.keys.includes(e) && (await this.deletePairing(e, !0), this.events.emit("pairing_expire", {
            topic: e
          }));
        }));
      }
    }
    class Us extends E {
      constructor(t, e) {
        super(t, e), this.core = t, this.logger = e, this.records = new Map, this.events = new g.EventEmitter, this.name = "history", 
        this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Si, this.init = async () => {
          this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((t => this.records.set(t.id, t))), 
          this.cached = [], this.registerEventListeners(), this.initialized = !0);
        }, this.set = (t, e, r) => {
          if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
            type: "method",
            method: "set",
            topic: t,
            request: e,
            chainId: r
          }), this.records.has(e.id)) return;
          const n = {
            id: e.id,
            topic: t,
            request: {
              method: e.method,
              params: e.params || null
            },
            chainId: r,
            expiry: Me(T.THIRTY_DAYS)
          };
          this.records.set(n.id, n), this.events.emit(Ji, n);
        }, this.resolve = async t => {
          if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
            type: "method",
            method: "update",
            response: t
          }), !this.records.has(t.id)) return;
          const e = await this.getRecord(t.id);
          typeof e.response > "u" && (e.response = Vr(t) ? {
            error: t.error
          } : {
            result: t.result
          }, this.records.set(e.id, e), this.events.emit(Xi, e));
        }, this.get = async (t, e) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
          type: "method",
          method: "get",
          topic: t,
          id: e
        }), await this.getRecord(e)), this.delete = (t, e) => {
          this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
            type: "method",
            method: "delete",
            id: e
          }), this.values.forEach((r => {
            if (r.topic === t) {
              if (typeof e < "u" && r.id !== e) return;
              this.records.delete(r.id), this.events.emit(Qi, r);
            }
          }));
        }, this.exists = async (t, e) => (this.isInitialized(), !!this.records.has(e) && (await this.getRecord(e)).topic === t), 
        this.on = (t, e) => {
          this.events.on(t, e);
        }, this.once = (t, e) => {
          this.events.once(t, e);
        }, this.off = (t, e) => {
          this.events.off(t, e);
        }, this.removeListener = (t, e) => {
          this.events.removeListener(t, e);
        }, this.logger = (0, m.generateChildLogger)(e, this.name);
      }
      get context() {
        return (0, m.getLoggerContext)(this.logger);
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
        const t = [];
        return this.values.forEach((e => {
          if (typeof e.response < "u") return;
          const r = {
            topic: e.topic,
            request: jr(e.request.method, e.request.params, e.id),
            chainId: e.chainId
          };
          return t.push(r);
        })), t;
      }
      async setJsonRpcRecords(t) {
        await this.core.storage.setItem(this.storageKey, t);
      }
      async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey);
      }
      getRecord(t) {
        this.isInitialized();
        const e = this.records.get(t);
        if (!e) {
          const {message: e} = er("NO_MATCHING_KEY", `${this.name}: ${t}`);
          throw new Error(e);
        }
        return e;
      }
      async persist() {
        await this.setJsonRpcRecords(this.values), this.events.emit(Zi);
      }
      async restore() {
        try {
          const t = await this.getJsonRpcRecords();
          if (typeof t > "u" || !t.length) return;
          if (this.records.size) {
            const {message: t} = er("RESTORE_WILL_OVERRIDE", this.name);
            throw this.logger.error(t), new Error(t);
          }
          this.cached = t, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
            type: "method",
            method: "restore",
            records: this.values
          });
        } catch (t) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t);
        }
      }
      registerEventListeners() {
        this.events.on(Ji, (t => {
          const e = Ji;
          this.logger.info(`Emitting ${e}`), this.logger.debug({
            type: "event",
            event: e,
            record: t
          }), this.persist();
        })), this.events.on(Xi, (t => {
          const e = Xi;
          this.logger.info(`Emitting ${e}`), this.logger.debug({
            type: "event",
            event: e,
            record: t
          }), this.persist();
        })), this.events.on(Qi, (t => {
          const e = Qi;
          this.logger.info(`Emitting ${e}`), this.logger.debug({
            type: "event",
            event: e,
            record: t
          }), this.persist();
        })), this.core.heartbeat.on(_.HEARTBEAT_EVENTS.pulse, (() => {
          this.cleanup();
        }));
      }
      cleanup() {
        try {
          this.records.forEach((t => {
            (0, T.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.delete(t.topic, t.id));
          }));
        } catch (t) {
          this.logger.warn(t);
        }
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: t} = er("NOT_INITIALIZED", this.name);
          throw new Error(t);
        }
      }
    }
    class Ms extends P {
      constructor(t, e) {
        super(t, e), this.core = t, this.logger = e, this.expirations = new Map, this.events = new g.EventEmitter, this.name = "expirer", 
        this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Si, this.init = async () => {
          this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((t => this.expirations.set(t.target, t))), 
          this.cached = [], this.registerEventListeners(), this.initialized = !0);
        }, this.has = t => {
          try {
            const e = this.formatTarget(t);
            return typeof this.getExpiration(e) < "u";
          } catch {
            return !1;
          }
        }, this.set = (t, e) => {
          this.isInitialized();
          const r = this.formatTarget(t), n = {
            target: r,
            expiry: e
          };
          this.expirations.set(r, n), this.checkExpiry(r, n), this.events.emit(ts, {
            target: r,
            expiration: n
          });
        }, this.get = t => {
          this.isInitialized();
          const e = this.formatTarget(t);
          return this.getExpiration(e);
        }, this.del = t => {
          if (this.isInitialized(), this.has(t)) {
            const e = this.formatTarget(t), r = this.getExpiration(e);
            this.expirations.delete(e), this.events.emit(es, {
              target: e,
              expiration: r
            });
          }
        }, this.on = (t, e) => {
          this.events.on(t, e);
        }, this.once = (t, e) => {
          this.events.once(t, e);
        }, this.off = (t, e) => {
          this.events.off(t, e);
        }, this.removeListener = (t, e) => {
          this.events.removeListener(t, e);
        }, this.logger = (0, m.generateChildLogger)(e, this.name);
      }
      get context() {
        return (0, m.getLoggerContext)(this.logger);
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
      formatTarget(t) {
        if ("string" == typeof t) return function(t) {
          return Le("topic", t);
        }(t);
        if ("number" == typeof t) return function(t) {
          return Le("id", t);
        }(t);
        const {message: e} = er("UNKNOWN_TYPE", "Target type: " + typeof t);
        throw new Error(e);
      }
      async setExpirations(t) {
        await this.core.storage.setItem(this.storageKey, t);
      }
      async getExpirations() {
        return await this.core.storage.getItem(this.storageKey);
      }
      async persist() {
        await this.setExpirations(this.values), this.events.emit(ns);
      }
      async restore() {
        try {
          const t = await this.getExpirations();
          if (typeof t > "u" || !t.length) return;
          if (this.expirations.size) {
            const {message: t} = er("RESTORE_WILL_OVERRIDE", this.name);
            throw this.logger.error(t), new Error(t);
          }
          this.cached = t, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
            type: "method",
            method: "restore",
            expirations: this.values
          });
        } catch (t) {
          this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(t);
        }
      }
      getExpiration(t) {
        const e = this.expirations.get(t);
        if (!e) {
          const {message: e} = er("NO_MATCHING_KEY", `${this.name}: ${t}`);
          throw this.logger.error(e), new Error(e);
        }
        return e;
      }
      checkExpiry(t, e) {
        const {expiry: r} = e;
        (0, T.toMiliseconds)(r) - Date.now() <= 0 && this.expire(t, e);
      }
      expire(t, e) {
        this.expirations.delete(t), this.events.emit(rs, {
          target: t,
          expiration: e
        });
      }
      checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach(((t, e) => this.checkExpiry(e, t)));
      }
      registerEventListeners() {
        this.core.heartbeat.on(_.HEARTBEAT_EVENTS.pulse, (() => this.checkExpirations())), this.events.on(ts, (t => {
          const e = ts;
          this.logger.info(`Emitting ${e}`), this.logger.debug({
            type: "event",
            event: e,
            data: t
          }), this.persist();
        })), this.events.on(rs, (t => {
          const e = rs;
          this.logger.info(`Emitting ${e}`), this.logger.debug({
            type: "event",
            event: e,
            data: t
          }), this.persist();
        })), this.events.on(es, (t => {
          const e = es;
          this.logger.info(`Emitting ${e}`), this.logger.debug({
            type: "event",
            event: e,
            data: t
          }), this.persist();
        }));
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: t} = er("NOT_INITIALIZED", this.name);
          throw new Error(t);
        }
      }
    }
    class Ds extends class {
      constructor(t, e) {
        this.projectId = t, this.logger = e;
      }
    } {
      constructor(t, e) {
        super(t, e), this.projectId = t, this.logger = e, this.name = is, this.initialized = !1, this.init = async t => {
          Oe() || !Ie() || (this.verifyUrl = t?.verifyUrl || ss, await this.createIframe());
        }, this.register = async t => {
          var e;
          if (this.initialized || await this.init(), this.iframe) try {
            null == (e = this.iframe.contentWindow) || e.postMessage(t.attestationId, this.verifyUrl), this.logger.info(`postMessage sent: ${t.attestationId} ${this.verifyUrl}`);
          } catch {}
        }, this.resolve = async t => {
          var e;
          if (this.isDevEnv) return "";
          this.logger.info(`resolving attestation: ${t.attestationId}`);
          const r = this.startAbortTimer(T.FIVE_SECONDS), n = await fetch(`${this.verifyUrl}/attestation/${t.attestationId}`, {
            signal: this.abortController.signal
          });
          return clearTimeout(r), 200 === n.status ? null == (e = await n.json()) ? void 0 : e.origin : "";
        }, this.createIframe = async () => {
          try {
            await Promise.race([ new Promise(((t, e) => {
              if (document.getElementById(is)) return t();
              const r = document.createElement("iframe");
              r.setAttribute("id", is), r.setAttribute("src", `${this.verifyUrl}/${this.projectId}`), r.style.display = "none", r.addEventListener("load", (() => {
                this.initialized = !0, t();
              })), r.addEventListener("error", (t => {
                e(t);
              })), document.body.append(r), this.iframe = r;
            })), new Promise((t => {
              setTimeout((() => t("iframe load timeout")), (0, T.toMiliseconds)(T.ONE_SECOND / 2));
            })) ]);
          } catch (t) {
            this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(t);
          }
        }, this.logger = (0, m.generateChildLogger)(e, this.name), this.verifyUrl = ss, this.abortController = new AbortController, 
        this.isDevEnv = Se() && process.env.IS_VITEST;
      }
      get context() {
        return (0, m.getLoggerContext)(this.logger);
      }
      startAbortTimer(t) {
        return setTimeout((() => this.abortController.abort()), (0, T.toMiliseconds)(t));
      }
    }
    var ks = Object.defineProperty, zs = Object.getOwnPropertySymbols, $s = Object.prototype.hasOwnProperty, qs = Object.prototype.propertyIsEnumerable, Hs = (t, e, r) => e in t ? ks(t, e, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }) : t[e] = r, Bs = (t, e) => {
      for (var r in e || (e = {})) $s.call(e, r) && Hs(t, r, e[r]);
      if (zs) for (var r of zs(e)) qs.call(e, r) && Hs(t, r, e[r]);
      return t;
    };
    class Vs extends w {
      constructor(t) {
        super(t), this.protocol = "wc", this.version = 2, this.name = Ei, this.events = new g.EventEmitter, this.initialized = !1, 
        this.on = (t, e) => this.events.on(t, e), this.once = (t, e) => this.events.once(t, e), this.off = (t, e) => this.events.off(t, e), 
        this.removeListener = (t, e) => this.events.removeListener(t, e), this.projectId = t?.projectId, this.relayUrl = t?.relayUrl || Ni;
        const e = typeof t?.logger < "u" && "string" != typeof t?.logger ? t.logger : (0, m.pino)((0, m.getDefaultLoggerOptions)({
          level: t?.logger || Oi
        }));
        this.logger = (0, m.generateChildLogger)(e, this.name), this.heartbeat = new _.HeartBeat, this.crypto = new as(this, this.logger, t?.keychain), 
        this.history = new Us(this, this.logger), this.expirer = new Ms(this, this.logger), this.storage = null != t && t.storage ? t.storage : new v.ZP(Bs(Bs({}, Ii), t?.storageOptions)), 
        this.relayer = new Ps({
          core: this,
          logger: this.logger,
          relayUrl: this.relayUrl,
          projectId: this.projectId
        }), this.pairing = new Ls(this, this.logger), this.verify = new Ds(this.projectId || "", this.logger);
      }
      static async init(t) {
        const e = new Vs(t);
        await e.initialize();
        const r = await e.crypto.getClientId();
        return await e.storage.setItem("WALLETCONNECT_CLIENT_ID", r), e;
      }
      get context() {
        return (0, m.getLoggerContext)(this.logger);
      }
      async start() {
        this.initialized || await this.initialize();
      }
      async initialize() {
        this.logger.trace("Initialized");
        try {
          await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), 
          await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
        } catch (t) {
          throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), this.logger.error(t.message), t;
        }
      }
    }
    const Ks = Vs;
    const Fs = "client", Ws = "wc@2:client:", Gs = Fs, Ys = "error", Js = "Proposal expired", Xs = T.SEVEN_DAYS, Qs = {
      wc_sessionPropose: {
        req: {
          ttl: T.FIVE_MINUTES,
          prompt: !0,
          tag: 1100
        },
        res: {
          ttl: T.FIVE_MINUTES,
          prompt: !1,
          tag: 1101
        }
      },
      wc_sessionSettle: {
        req: {
          ttl: T.FIVE_MINUTES,
          prompt: !1,
          tag: 1102
        },
        res: {
          ttl: T.FIVE_MINUTES,
          prompt: !1,
          tag: 1103
        }
      },
      wc_sessionUpdate: {
        req: {
          ttl: T.ONE_DAY,
          prompt: !1,
          tag: 1104
        },
        res: {
          ttl: T.ONE_DAY,
          prompt: !1,
          tag: 1105
        }
      },
      wc_sessionExtend: {
        req: {
          ttl: T.ONE_DAY,
          prompt: !1,
          tag: 1106
        },
        res: {
          ttl: T.ONE_DAY,
          prompt: !1,
          tag: 1107
        }
      },
      wc_sessionRequest: {
        req: {
          ttl: T.FIVE_MINUTES,
          prompt: !0,
          tag: 1108
        },
        res: {
          ttl: T.FIVE_MINUTES,
          prompt: !1,
          tag: 1109
        }
      },
      wc_sessionEvent: {
        req: {
          ttl: T.FIVE_MINUTES,
          prompt: !0,
          tag: 1110
        },
        res: {
          ttl: T.FIVE_MINUTES,
          prompt: !1,
          tag: 1111
        }
      },
      wc_sessionDelete: {
        req: {
          ttl: T.ONE_DAY,
          prompt: !1,
          tag: 1112
        },
        res: {
          ttl: T.ONE_DAY,
          prompt: !1,
          tag: 1113
        }
      },
      wc_sessionPing: {
        req: {
          ttl: T.THIRTY_SECONDS,
          prompt: !1,
          tag: 1114
        },
        res: {
          ttl: T.THIRTY_SECONDS,
          prompt: !1,
          tag: 1115
        }
      }
    }, Zs = {
      min: T.FIVE_MINUTES,
      max: T.SEVEN_DAYS
    }, to = "idle", eo = "active", ro = [ "wc_sessionPropose", "wc_sessionRequest", "wc_authRequest" ];
    var no = Object.defineProperty, io = Object.defineProperties, so = Object.getOwnPropertyDescriptors, oo = Object.getOwnPropertySymbols, ao = Object.prototype.hasOwnProperty, co = Object.prototype.propertyIsEnumerable, uo = (t, e, r) => e in t ? no(t, e, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }) : t[e] = r, ho = (t, e) => {
      for (var r in e || (e = {})) ao.call(e, r) && uo(t, r, e[r]);
      if (oo) for (var r of oo(e)) co.call(e, r) && uo(t, r, e[r]);
      return t;
    }, lo = (t, e) => io(t, so(e));
    class fo extends class {
      constructor(t) {
        this.client = t;
      }
    } {
      constructor(t) {
        super(t), this.name = "engine", this.events = new (y()), this.initialized = !1, this.ignoredPayloadTypes = [ 1 ], this.requestQueue = {
          state: to,
          requests: []
        }, this.requestQueueDelay = T.ONE_SECOND, this.init = async () => {
          this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({
            methods: Object.keys(Qs)
          }), this.initialized = !0, setTimeout((() => {
            this.requestQueue.requests = this.getPendingSessionRequests(), this.processRequestQueue();
          }), (0, T.toMiliseconds)(this.requestQueueDelay)));
        }, this.connect = async t => {
          this.isInitialized();
          const e = lo(ho({}, t), {
            requiredNamespaces: t.requiredNamespaces || {},
            optionalNamespaces: t.optionalNamespaces || {}
          });
          await this.isValidConnect(e);
          const {pairingTopic: r, requiredNamespaces: n, optionalNamespaces: i, sessionProperties: s, relays: o} = e;
          let a, c = r, u = !1;
          if (c && (u = this.client.core.pairing.pairings.get(c).active), !c || !u) {
            const {topic: t, uri: e} = await this.client.core.pairing.create();
            c = t, a = e;
          }
          const h = await this.client.core.crypto.generateKeyPair(), l = ho({
            requiredNamespaces: n,
            optionalNamespaces: i,
            relays: o ?? [ {
              protocol: "irn"
            } ],
            proposer: {
              publicKey: h,
              metadata: this.client.metadata
            }
          }, s && {
            sessionProperties: s
          }), {reject: f, resolve: p, done: d} = je(T.FIVE_MINUTES, Js);
          if (this.events.once(ke("session_connect"), (async ({error: t, session: e}) => {
            if (t) f(t); else if (e) {
              e.self.publicKey = h;
              const t = lo(ho({}, e), {
                requiredNamespaces: e.requiredNamespaces,
                optionalNamespaces: e.optionalNamespaces
              });
              await this.client.session.set(e.topic, t), await this.setExpiry(e.topic, e.expiry), c && await this.client.core.pairing.updateMetadata({
                topic: c,
                metadata: e.peer.metadata
              }), p(t);
            }
          })), !c) {
            const {message: t} = er("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
            throw new Error(t);
          }
          const g = await this.sendRequest(c, "wc_sessionPropose", l), y = Me(T.FIVE_MINUTES);
          return await this.setProposal(g, ho({
            id: g,
            expiry: y
          }, l)), {
            uri: a,
            approval: d
          };
        }, this.pair = async t => (this.isInitialized(), await this.client.core.pairing.pair(t)), this.approve = async t => {
          this.isInitialized(), await this.isValidApprove(t);
          const {id: e, relayProtocol: r, namespaces: n, sessionProperties: i} = t, s = this.client.proposal.get(e);
          let {pairingTopic: o, proposer: a, requiredNamespaces: c, optionalNamespaces: u} = s;
          o = o || "", ir(c) || (c = function(t, e) {
            const r = pr(t, e);
            if (r) throw new Error(r.message);
            const n = {};
            for (const [i, s] of Object.entries(t)) n[i] = {
              methods: s.methods,
              events: s.events,
              chains: s.accounts.map((t => `${t.split(":")[0]}:${t.split(":")[1]}`))
            };
            return n;
          }(n, "approve()"));
          const h = await this.client.core.crypto.generateKeyPair(), l = a.publicKey, f = await this.client.core.crypto.generateSharedKey(h, l);
          o && e && (await this.client.core.pairing.updateMetadata({
            topic: o,
            metadata: a.metadata
          }), await this.sendResult(e, o, {
            relay: {
              protocol: r ?? "irn"
            },
            responderPublicKey: h
          }), await this.client.proposal.delete(e, rr("USER_DISCONNECTED")), await this.client.core.pairing.activate({
            topic: o
          }));
          const p = ho({
            relay: {
              protocol: r ?? "irn"
            },
            namespaces: n,
            requiredNamespaces: c,
            optionalNamespaces: u,
            pairingTopic: o,
            controller: {
              publicKey: h,
              metadata: this.client.metadata
            },
            expiry: Me(Xs)
          }, i && {
            sessionProperties: i
          });
          await this.client.core.relayer.subscribe(f), await this.sendRequest(f, "wc_sessionSettle", p);
          const d = lo(ho({}, p), {
            topic: f,
            pairingTopic: o,
            acknowledged: !1,
            self: p.controller,
            peer: {
              publicKey: a.publicKey,
              metadata: a.metadata
            },
            controller: h
          });
          return await this.client.session.set(f, d), await this.setExpiry(f, Me(Xs)), {
            topic: f,
            acknowledged: () => new Promise((t => setTimeout((() => t(this.client.session.get(f))), 500)))
          };
        }, this.reject = async t => {
          this.isInitialized(), await this.isValidReject(t);
          const {id: e, reason: r} = t, {pairingTopic: n} = this.client.proposal.get(e);
          n && (await this.sendError(e, n, r), await this.client.proposal.delete(e, rr("USER_DISCONNECTED")));
        }, this.update = async t => {
          this.isInitialized(), await this.isValidUpdate(t);
          const {topic: e, namespaces: r} = t, n = await this.sendRequest(e, "wc_sessionUpdate", {
            namespaces: r
          }), {done: i, resolve: s, reject: o} = je();
          return this.events.once(ke("session_update", n), (({error: t}) => {
            t ? o(t) : s();
          })), await this.client.session.update(e, {
            namespaces: r
          }), {
            acknowledged: i
          };
        }, this.extend = async t => {
          this.isInitialized(), await this.isValidExtend(t);
          const {topic: e} = t, r = await this.sendRequest(e, "wc_sessionExtend", {}), {done: n, resolve: i, reject: s} = je();
          return this.events.once(ke("session_extend", r), (({error: t}) => {
            t ? s(t) : i();
          })), await this.setExpiry(e, Me(Xs)), {
            acknowledged: n
          };
        }, this.request = async e => {
          this.isInitialized(), await this.isValidRequest(e);
          const {chainId: n, request: i, topic: s, expiry: o} = e, a = await this.sendRequest(s, "wc_sessionRequest", {
            request: i,
            chainId: n
          }, o), {done: c, resolve: u, reject: h} = je(o);
          this.events.once(ke("session_request", a), (({error: t, result: e}) => {
            t ? h(t) : u(e);
          })), this.client.events.emit("session_request_sent", {
            topic: s,
            request: i,
            chainId: n,
            id: a
          });
          return async function({id: e, topic: n, wcDeepLink: i}) {
            try {
              if (!i) return;
              let t = ("string" == typeof i ? JSON.parse(i) : i)?.href;
              if ("string" != typeof t) return;
              t.endsWith("/") && (t = t.slice(0, -1));
              const s = `${t}/wc?requestId=${e}&sessionTopic=${n}`, o = Pe();
              o === be ? s.startsWith("https://") ? window.open(s, "_blank", "noreferrer noopener") : window.open(s, "_self", "noreferrer noopener") : o === _e && typeof (null == r.g ? void 0 : r.g.Linking) < "u" && await r.g.Linking.openURL(s);
            } catch (t) {
              console.error(t);
            }
          }({
            id: a,
            topic: s,
            wcDeepLink: await this.client.core.storage.getItem("WALLETCONNECT_DEEPLINK_CHOICE")
          }), await c();
        }, this.respond = async t => {
          this.isInitialized(), await this.isValidRespond(t);
          const {topic: e, response: r} = t, {id: n} = r;
          Br(r) ? await this.sendResult(n, e, r.result) : Vr(r) && await this.sendError(n, e, r.error), this.cleanupAfterResponse(t);
        }, this.ping = async t => {
          this.isInitialized(), await this.isValidPing(t);
          const {topic: e} = t;
          if (this.client.session.keys.includes(e)) {
            const t = await this.sendRequest(e, "wc_sessionPing", {}), {done: r, resolve: n, reject: i} = je();
            this.events.once(ke("session_ping", t), (({error: t}) => {
              t ? i(t) : n();
            })), await r();
          } else this.client.core.pairing.pairings.keys.includes(e) && await this.client.core.pairing.ping({
            topic: e
          });
        }, this.emit = async t => {
          this.isInitialized(), await this.isValidEmit(t);
          const {topic: e, event: r, chainId: n} = t;
          await this.sendRequest(e, "wc_sessionEvent", {
            event: r,
            chainId: n
          });
        }, this.disconnect = async t => {
          this.isInitialized(), await this.isValidDisconnect(t);
          const {topic: e} = t;
          if (this.client.session.keys.includes(e)) {
            const t = Tr().toString();
            let r;
            const n = e => {
              e?.id.toString() === t && (this.client.core.relayer.events.removeListener(ji, n), r());
            };
            await Promise.all([ new Promise((t => {
              r = t, this.client.core.relayer.on(ji, n);
            })), this.sendRequest(e, "wc_sessionDelete", rr("USER_DISCONNECTED"), void 0, t) ]), await this.deleteSession(e);
          } else await this.client.core.pairing.disconnect({
            topic: e
          });
        }, this.find = t => (this.isInitialized(), this.client.session.getAll().filter((e => function(t, e) {
          const {requiredNamespaces: r} = e, n = Object.keys(t.namespaces), i = Object.keys(r);
          let s = !0;
          return !!Ne(i, n) && (n.forEach((e => {
            const {accounts: n, methods: i, events: o} = t.namespaces[e], a = Je(n), c = r[e];
            Ne(te(e, c), a) && Ne(c.methods, i) && Ne(c.events, o) || (s = !1);
          })), s);
        }(e, t)))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async t => {
          if (t.pairingTopic) try {
            const e = this.client.core.pairing.pairings.get(t.pairingTopic), r = this.client.core.pairing.pairings.getAll().filter((r => {
              var n, i;
              return (null == (n = r.peerMetadata) ? void 0 : n.url) && (null == (i = r.peerMetadata) ? void 0 : i.url) === t.peer.metadata.url && r.topic && r.topic !== e.topic;
            }));
            if (0 === r.length) return;
            this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map((t => this.client.core.pairing.disconnect({
              topic: t.topic
            })))), this.client.logger.info("Duplicate pairings clean up finished");
          } catch (e) {
            this.client.logger.error(e);
          }
        }, this.deleteSession = async (t, e) => {
          const {self: r} = this.client.session.get(t);
          await this.client.core.relayer.unsubscribe(t), this.client.session.delete(t, rr("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(r.publicKey) && await this.client.core.crypto.deleteKeyPair(r.publicKey), 
          this.client.core.crypto.keychain.has(t) && await this.client.core.crypto.deleteSymKey(t), e || this.client.core.expirer.del(t);
        }, this.deleteProposal = async (t, e) => {
          await Promise.all([ this.client.proposal.delete(t, rr("USER_DISCONNECTED")), e ? Promise.resolve() : this.client.core.expirer.del(t) ]);
        }, this.deletePendingSessionRequest = async (t, e, r = !1) => {
          await Promise.all([ this.client.pendingRequest.delete(t, e), r ? Promise.resolve() : this.client.core.expirer.del(t) ]), 
          this.requestQueue.requests = this.requestQueue.requests.filter((e => e.id !== t)), r && (this.requestQueue.state = to);
        }, this.setExpiry = async (t, e) => {
          this.client.session.keys.includes(t) && await this.client.session.update(t, {
            expiry: e
          }), this.client.core.expirer.set(t, e);
        }, this.setProposal = async (t, e) => {
          await this.client.proposal.set(t, e), this.client.core.expirer.set(t, e.expiry);
        }, this.setPendingSessionRequest = async t => {
          const e = Qs.wc_sessionRequest.req.ttl, {id: r, topic: n, params: i} = t;
          await this.client.pendingRequest.set(r, {
            id: r,
            topic: n,
            params: i
          }), e && this.client.core.expirer.set(r, Me(e));
        }, this.sendRequest = async (t, e, r, n, i) => {
          const s = jr(e, r);
          if (Ie() && ro.includes(e)) {
            const t = oe(JSON.stringify(s));
            await this.client.core.verify.register({
              attestationId: t
            });
          }
          const o = await this.client.core.crypto.encode(t, s), a = Qs[e].req;
          return n && (a.ttl = n), i && (a.id = i), this.client.core.history.set(t, s), this.client.core.relayer.publish(t, o, a), 
          s.id;
        }, this.sendResult = async (t, e, r) => {
          const n = Cr(t, r), i = await this.client.core.crypto.encode(e, n), s = await this.client.core.history.get(e, t), o = Qs[s.request.method].res;
          this.client.core.relayer.publish(e, i, o), await this.client.core.history.resolve(n);
        }, this.sendError = async (t, e, r) => {
          const n = Lr(t, r), i = await this.client.core.crypto.encode(e, n), s = await this.client.core.history.get(e, t), o = Qs[s.request.method].res;
          this.client.core.relayer.publish(e, i, o), await this.client.core.history.resolve(n);
        }, this.cleanup = async () => {
          const t = [], e = [];
          this.client.session.getAll().forEach((e => {
            De(e.expiry) && t.push(e.topic);
          })), this.client.proposal.getAll().forEach((t => {
            De(t.expiry) && e.push(t.id);
          })), await Promise.all([ ...t.map((t => this.deleteSession(t))), ...e.map((t => this.deleteProposal(t))) ]);
        }, this.onRelayEventRequest = t => {
          const {topic: e, payload: r} = t, n = r.method;
          switch (n) {
           case "wc_sessionPropose":
            return this.onSessionProposeRequest(e, r);

           case "wc_sessionSettle":
            return this.onSessionSettleRequest(e, r);

           case "wc_sessionUpdate":
            return this.onSessionUpdateRequest(e, r);

           case "wc_sessionExtend":
            return this.onSessionExtendRequest(e, r);

           case "wc_sessionPing":
            return this.onSessionPingRequest(e, r);

           case "wc_sessionDelete":
            return this.onSessionDeleteRequest(e, r);

           case "wc_sessionRequest":
            return this.onSessionRequest(e, r);

           case "wc_sessionEvent":
            return this.onSessionEventRequest(e, r);

           default:
            return this.client.logger.info(`Unsupported request method ${n}`);
          }
        }, this.onRelayEventResponse = async t => {
          const {topic: e, payload: r} = t, n = (await this.client.core.history.get(e, r.id)).request.method;
          switch (n) {
           case "wc_sessionPropose":
            return this.onSessionProposeResponse(e, r);

           case "wc_sessionSettle":
            return this.onSessionSettleResponse(e, r);

           case "wc_sessionUpdate":
            return this.onSessionUpdateResponse(e, r);

           case "wc_sessionExtend":
            return this.onSessionExtendResponse(e, r);

           case "wc_sessionPing":
            return this.onSessionPingResponse(e, r);

           case "wc_sessionRequest":
            return this.onSessionRequestResponse(e, r);

           default:
            return this.client.logger.info(`Unsupported response method ${n}`);
          }
        }, this.onRelayEventUnknownPayload = t => {
          const {topic: e} = t, {message: r} = er("MISSING_OR_INVALID", `Decoded payload on topic ${e} is not identifiable as a JSON-RPC request or a response.`);
          throw new Error(r);
        }, this.onSessionProposeRequest = async (t, e) => {
          const {params: r, id: n} = e;
          try {
            this.isValidConnect(ho({}, e.params));
            const i = Me(T.FIVE_MINUTES), s = ho({
              id: n,
              pairingTopic: t,
              expiry: i
            }, r);
            await this.setProposal(n, s);
            const o = oe(JSON.stringify(e)), a = await this.getVerifyContext(o, s.proposer.metadata);
            this.client.events.emit("session_proposal", {
              id: n,
              params: s,
              verifyContext: a
            });
          } catch (w) {
            await this.sendError(n, t, w), this.client.logger.error(w);
          }
        }, this.onSessionProposeResponse = async (t, e) => {
          const {id: r} = e;
          if (Br(e)) {
            const {result: n} = e;
            this.client.logger.trace({
              type: "method",
              method: "onSessionProposeResponse",
              result: n
            });
            const i = this.client.proposal.get(r);
            this.client.logger.trace({
              type: "method",
              method: "onSessionProposeResponse",
              proposal: i
            });
            const s = i.proposer.publicKey;
            this.client.logger.trace({
              type: "method",
              method: "onSessionProposeResponse",
              selfPublicKey: s
            });
            const o = n.responderPublicKey;
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
              topic: t
            });
          } else Vr(e) && (await this.client.proposal.delete(r, rr("USER_DISCONNECTED")), this.events.emit(ke("session_connect"), {
            error: e.error
          }));
        }, this.onSessionSettleRequest = async (t, e) => {
          const {id: r, params: n} = e;
          try {
            this.isValidSessionSettleRequest(n);
            const {relay: r, controller: i, expiry: s, namespaces: o, requiredNamespaces: a, optionalNamespaces: c, sessionProperties: u, pairingTopic: h} = e.params, l = ho({
              topic: t,
              relay: r,
              expiry: s,
              namespaces: o,
              acknowledged: !0,
              pairingTopic: h,
              requiredNamespaces: a,
              optionalNamespaces: c,
              controller: i.publicKey,
              self: {
                publicKey: "",
                metadata: this.client.metadata
              },
              peer: {
                publicKey: i.publicKey,
                metadata: i.metadata
              }
            }, u && {
              sessionProperties: u
            });
            await this.sendResult(e.id, t, !0), this.events.emit(ke("session_connect"), {
              session: l
            }), this.cleanupDuplicatePairings(l);
          } catch (w) {
            await this.sendError(r, t, w), this.client.logger.error(w);
          }
        }, this.onSessionSettleResponse = async (t, e) => {
          const {id: r} = e;
          Br(e) ? (await this.client.session.update(t, {
            acknowledged: !0
          }), this.events.emit(ke("session_approve", r), {})) : Vr(e) && (await this.client.session.delete(t, rr("USER_DISCONNECTED")), 
          this.events.emit(ke("session_approve", r), {
            error: e.error
          }));
        }, this.onSessionUpdateRequest = async (t, e) => {
          const {params: r, id: n} = e;
          try {
            this.isValidUpdate(ho({
              topic: t
            }, r)), await this.client.session.update(t, {
              namespaces: r.namespaces
            }), await this.sendResult(n, t, !0), this.client.events.emit("session_update", {
              id: n,
              topic: t,
              params: r
            });
          } catch (w) {
            await this.sendError(n, t, w), this.client.logger.error(w);
          }
        }, this.onSessionUpdateResponse = (t, e) => {
          const {id: r} = e;
          Br(e) ? this.events.emit(ke("session_update", r), {}) : Vr(e) && this.events.emit(ke("session_update", r), {
            error: e.error
          });
        }, this.onSessionExtendRequest = async (t, e) => {
          const {id: r} = e;
          try {
            this.isValidExtend({
              topic: t
            }), await this.setExpiry(t, Me(Xs)), await this.sendResult(r, t, !0), this.client.events.emit("session_extend", {
              id: r,
              topic: t
            });
          } catch (n) {
            await this.sendError(r, t, n), this.client.logger.error(n);
          }
        }, this.onSessionExtendResponse = (t, e) => {
          const {id: r} = e;
          Br(e) ? this.events.emit(ke("session_extend", r), {}) : Vr(e) && this.events.emit(ke("session_extend", r), {
            error: e.error
          });
        }, this.onSessionPingRequest = async (t, e) => {
          const {id: r} = e;
          try {
            this.isValidPing({
              topic: t
            }), await this.sendResult(r, t, !0), this.client.events.emit("session_ping", {
              id: r,
              topic: t
            });
          } catch (n) {
            await this.sendError(r, t, n), this.client.logger.error(n);
          }
        }, this.onSessionPingResponse = (t, e) => {
          const {id: r} = e;
          setTimeout((() => {
            Br(e) ? this.events.emit(ke("session_ping", r), {}) : Vr(e) && this.events.emit(ke("session_ping", r), {
              error: e.error
            });
          }), 500);
        }, this.onSessionDeleteRequest = async (t, e) => {
          const {id: r} = e;
          try {
            this.isValidDisconnect({
              topic: t,
              reason: e.params
            }), await Promise.all([ new Promise((e => {
              this.client.core.relayer.once(ki, (async () => {
                e(await this.deleteSession(t));
              }));
            })), this.sendResult(r, t, !0) ]), this.client.events.emit("session_delete", {
              id: r,
              topic: t
            });
          } catch (n) {
            this.client.logger.error(n);
          }
        }, this.onSessionRequest = async (t, e) => {
          const {id: r, params: n} = e;
          try {
            this.isValidRequest(ho({
              topic: t
            }, n)), await this.setPendingSessionRequest({
              id: r,
              topic: t,
              params: n
            }), this.addRequestToQueue({
              id: r,
              topic: t,
              params: n
            }), await this.processRequestQueue();
          } catch (w) {
            await this.sendError(r, t, w), this.client.logger.error(w);
          }
        }, this.onSessionRequestResponse = (t, e) => {
          const {id: r} = e;
          Br(e) ? this.events.emit(ke("session_request", r), {
            result: e.result
          }) : Vr(e) && this.events.emit(ke("session_request", r), {
            error: e.error
          });
        }, this.onSessionEventRequest = async (t, e) => {
          const {id: r, params: n} = e;
          try {
            this.isValidEmit(ho({
              topic: t
            }, n)), this.client.events.emit("session_event", {
              id: r,
              topic: t,
              params: n
            });
          } catch (w) {
            await this.sendError(r, t, w), this.client.logger.error(w);
          }
        }, this.addRequestToQueue = t => {
          this.requestQueue.requests.push(t);
        }, this.cleanupAfterResponse = t => {
          this.deletePendingSessionRequest(t.response.id, {
            message: "fulfilled",
            code: 0
          }), setTimeout((() => {
            this.requestQueue.state = to, this.processRequestQueue();
          }), (0, T.toMiliseconds)(this.requestQueueDelay));
        }, this.processRequestQueue = async () => {
          if (this.requestQueue.state === eo) return void this.client.logger.info("session request queue is already active.");
          const t = this.requestQueue.requests[0];
          if (t) try {
            const {id: e, topic: r, params: n} = t, i = oe(JSON.stringify({
              id: e,
              params: n
            })), s = this.client.session.get(r), o = await this.getVerifyContext(i, s.peer.metadata);
            this.requestQueue.state = eo, this.client.events.emit("session_request", {
              id: e,
              topic: r,
              params: n,
              verifyContext: o
            });
          } catch (e) {
            this.client.logger.error(e);
          } else this.client.logger.info("session request queue is empty.");
        }, this.isValidConnect = async t => {
          if (!gr(t)) {
            const {message: e} = er("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
            throw new Error(e);
          }
          const {pairingTopic: e, requiredNamespaces: r, optionalNamespaces: n, sessionProperties: i, relays: s} = t;
          if (sr(e) || await this.isValidPairingTopic(e), !function(t, e) {
            let r = !1;
            return e && !t ? r = !0 : t && nr(t) && t.length && t.forEach((t => {
              r = dr(t);
            })), r;
          }(s, !0)) {
            const {message: t} = er("MISSING_OR_INVALID", `connect() relays: ${s}`);
            throw new Error(t);
          }
          !sr(r) && 0 !== ir(r) && this.validateNamespaces(r, "requiredNamespaces"), !sr(n) && 0 !== ir(n) && this.validateNamespaces(n, "optionalNamespaces"), 
          sr(i) || this.validateSessionProps(i, "sessionProperties");
        }, this.validateNamespaces = (t, e) => {
          const r = function(t, e, r) {
            let n = null;
            if (t && ir(t)) {
              const i = fr(t, e);
              i && (n = i);
              const s = hr(t, e, r);
              s && (n = s);
            } else n = er("MISSING_OR_INVALID", `${e}, ${r} should be an object with data`);
            return n;
          }(t, "connect()", e);
          if (r) throw new Error(r.message);
        }, this.isValidApprove = async t => {
          if (!gr(t)) throw new Error(er("MISSING_OR_INVALID", `approve() params: ${t}`).message);
          const {id: e, namespaces: r, relayProtocol: n, sessionProperties: i} = t;
          await this.isValidProposalId(e);
          const s = this.client.proposal.get(e), o = pr(r, "approve()");
          if (o) throw new Error(o.message);
          const a = mr(s.requiredNamespaces, r, "approve()");
          if (a) throw new Error(a.message);
          if (!or(n, !0)) {
            const {message: t} = er("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
            throw new Error(t);
          }
          sr(i) || this.validateSessionProps(i, "sessionProperties");
        }, this.isValidReject = async t => {
          if (!gr(t)) {
            const {message: e} = er("MISSING_OR_INVALID", `reject() params: ${t}`);
            throw new Error(e);
          }
          const {id: e, reason: r} = t;
          if (await this.isValidProposalId(e), !function(t) {
            return !!(t && "object" == typeof t && t.code && ar(t.code, !1) && t.message && or(t.message, !1));
          }(r)) {
            const {message: t} = er("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
            throw new Error(t);
          }
        }, this.isValidSessionSettleRequest = t => {
          if (!gr(t)) {
            const {message: e} = er("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
            throw new Error(e);
          }
          const {relay: e, controller: r, namespaces: n, expiry: i} = t;
          if (!dr(e)) {
            const {message: t} = er("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
            throw new Error(t);
          }
          const s = function(t, e) {
            let r = null;
            return or(t?.publicKey, !1) || (r = er("MISSING_OR_INVALID", `${e} controller public key should be a string`)), r;
          }(r, "onSessionSettleRequest()");
          if (s) throw new Error(s.message);
          const o = pr(n, "onSessionSettleRequest()");
          if (o) throw new Error(o.message);
          if (De(i)) {
            const {message: t} = er("EXPIRED", "onSessionSettleRequest()");
            throw new Error(t);
          }
        }, this.isValidUpdate = async t => {
          if (!gr(t)) {
            const {message: e} = er("MISSING_OR_INVALID", `update() params: ${t}`);
            throw new Error(e);
          }
          const {topic: e, namespaces: r} = t;
          await this.isValidSessionTopic(e);
          const n = this.client.session.get(e), i = pr(r, "update()");
          if (i) throw new Error(i.message);
          const s = mr(n.requiredNamespaces, r, "update()");
          if (s) throw new Error(s.message);
        }, this.isValidExtend = async t => {
          if (!gr(t)) {
            const {message: e} = er("MISSING_OR_INVALID", `extend() params: ${t}`);
            throw new Error(e);
          }
          const {topic: e} = t;
          await this.isValidSessionTopic(e);
        }, this.isValidRequest = async t => {
          if (!gr(t)) {
            const {message: e} = er("MISSING_OR_INVALID", `request() params: ${t}`);
            throw new Error(e);
          }
          const {topic: e, request: r, chainId: n, expiry: i} = t;
          await this.isValidSessionTopic(e);
          const {namespaces: s} = this.client.session.get(e);
          if (!yr(s, n)) {
            const {message: t} = er("MISSING_OR_INVALID", `request() chainId: ${n}`);
            throw new Error(t);
          }
          if (!function(t) {
            return !(sr(t) || !or(t.method, !1));
          }(r)) {
            const {message: t} = er("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
            throw new Error(t);
          }
          if (!vr(s, n, r.method)) {
            const {message: t} = er("MISSING_OR_INVALID", `request() method: ${r.method}`);
            throw new Error(t);
          }
          if (i && !function(t, e) {
            return ar(t, !1) && t <= e.max && t >= e.min;
          }(i, Zs)) {
            const {message: t} = er("MISSING_OR_INVALID", `request() expiry: ${i}. Expiry must be a number (in seconds) between ${Zs.min} and ${Zs.max}`);
            throw new Error(t);
          }
        }, this.isValidRespond = async t => {
          if (!gr(t)) {
            const {message: e} = er("MISSING_OR_INVALID", `respond() params: ${t}`);
            throw new Error(e);
          }
          const {topic: e, response: r} = t;
          if (await this.isValidSessionTopic(e), !function(t) {
            return !(sr(t) || sr(t.result) && sr(t.error) || !ar(t.id, !1) || !or(t.jsonrpc, !1));
          }(r)) {
            const {message: t} = er("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
            throw new Error(t);
          }
        }, this.isValidPing = async t => {
          if (!gr(t)) {
            const {message: e} = er("MISSING_OR_INVALID", `ping() params: ${t}`);
            throw new Error(e);
          }
          const {topic: e} = t;
          await this.isValidSessionOrPairingTopic(e);
        }, this.isValidEmit = async t => {
          if (!gr(t)) {
            const {message: e} = er("MISSING_OR_INVALID", `emit() params: ${t}`);
            throw new Error(e);
          }
          const {topic: e, event: r, chainId: n} = t;
          await this.isValidSessionTopic(e);
          const {namespaces: i} = this.client.session.get(e);
          if (!yr(i, n)) {
            const {message: t} = er("MISSING_OR_INVALID", `emit() chainId: ${n}`);
            throw new Error(t);
          }
          if (!function(t) {
            return !(sr(t) || !or(t.name, !1));
          }(r)) {
            const {message: t} = er("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
            throw new Error(t);
          }
          if (!_r(i, n, r.name)) {
            const {message: t} = er("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
            throw new Error(t);
          }
        }, this.isValidDisconnect = async t => {
          if (!gr(t)) {
            const {message: e} = er("MISSING_OR_INVALID", `disconnect() params: ${t}`);
            throw new Error(e);
          }
          const {topic: e} = t;
          await this.isValidSessionOrPairingTopic(e);
        }, this.getVerifyContext = async (t, e) => {
          const r = {
            verified: {
              verifyUrl: e.verifyUrl || "",
              validation: "UNKNOWN",
              origin: e.url || ""
            }
          };
          try {
            const n = await this.client.core.verify.resolve({
              attestationId: t,
              verifyUrl: e.verifyUrl
            });
            n && (r.verified.origin = n, r.verified.validation = n === e.url ? "VALID" : "INVALID");
          } catch (n) {
            this.client.logger.error(n);
          }
          return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r;
        }, this.validateSessionProps = (t, e) => {
          Object.values(t).forEach((t => {
            if (!or(t, !1)) {
              const {message: r} = er("MISSING_OR_INVALID", `${e} must be in Record<string, string> format. Received: ${JSON.stringify(t)}`);
              throw new Error(r);
            }
          }));
        };
      }
      isInitialized() {
        if (!this.initialized) {
          const {message: t} = er("NOT_INITIALIZED", this.name);
          throw new Error(t);
        }
      }
      registerRelayerEvents() {
        this.client.core.relayer.on(Ti, (async t => {
          const {topic: e, message: r} = t;
          if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
          const n = await this.client.core.crypto.decode(e, r);
          qr(n) ? (this.client.core.history.set(e, n), this.onRelayEventRequest({
            topic: e,
            payload: n
          })) : Hr(n) ? (await this.client.core.history.resolve(n), await this.onRelayEventResponse({
            topic: e,
            payload: n
          }), this.client.core.history.delete(e, n.id)) : this.onRelayEventUnknownPayload({
            topic: e,
            payload: n
          });
        }));
      }
      registerExpirerEvents() {
        this.client.core.expirer.on(rs, (async t => {
          const {topic: e, id: r} = Ue(t.target);
          if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, er("EXPIRED"), !0);
          e ? this.client.session.keys.includes(e) && (await this.deleteSession(e, !0), this.client.events.emit("session_expire", {
            topic: e
          })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
            id: r
          }));
        }));
      }
      isValidPairingTopic(t) {
        if (!or(t, !1)) {
          const {message: e} = er("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
          throw new Error(e);
        }
        if (!this.client.core.pairing.pairings.keys.includes(t)) {
          const {message: e} = er("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
          throw new Error(e);
        }
        if (De(this.client.core.pairing.pairings.get(t).expiry)) {
          const {message: e} = er("EXPIRED", `pairing topic: ${t}`);
          throw new Error(e);
        }
      }
      async isValidSessionTopic(t) {
        if (!or(t, !1)) {
          const {message: e} = er("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
          throw new Error(e);
        }
        if (!this.client.session.keys.includes(t)) {
          const {message: e} = er("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
          throw new Error(e);
        }
        if (De(this.client.session.get(t).expiry)) {
          await this.deleteSession(t);
          const {message: e} = er("EXPIRED", `session topic: ${t}`);
          throw new Error(e);
        }
      }
      async isValidSessionOrPairingTopic(t) {
        if (this.client.session.keys.includes(t)) await this.isValidSessionTopic(t); else {
          if (!this.client.core.pairing.pairings.keys.includes(t)) {
            if (or(t, !1)) {
              const {message: e} = er("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
              throw new Error(e);
            }
            {
              const {message: e} = er("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
              throw new Error(e);
            }
          }
          this.isValidPairingTopic(t);
        }
      }
      async isValidProposalId(t) {
        if (!function(t) {
          return "number" == typeof t;
        }(t)) {
          const {message: e} = er("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
          throw new Error(e);
        }
        if (!this.client.proposal.keys.includes(t)) {
          const {message: e} = er("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
          throw new Error(e);
        }
        if (De(this.client.proposal.get(t).expiry)) {
          await this.deleteProposal(t);
          const {message: e} = er("EXPIRED", `proposal id: ${t}`);
          throw new Error(e);
        }
      }
    }
    class po extends Cs {
      constructor(t, e) {
        super(t, e, "proposal", Ws), this.core = t, this.logger = e;
      }
    }
    class go extends Cs {
      constructor(t, e) {
        super(t, e, "session", Ws), this.core = t, this.logger = e;
      }
    }
    class yo extends Cs {
      constructor(t, e) {
        super(t, e, "request", Ws, (t => t.id)), this.core = t, this.logger = e;
      }
    }
    class vo extends class {
      constructor(t) {
        this.opts = t, this.protocol = "wc", this.version = 2;
      }
    } {
      constructor(t) {
        super(t), this.protocol = "wc", this.version = 2, this.name = Gs, this.events = new g.EventEmitter, this.on = (t, e) => this.events.on(t, e), 
        this.once = (t, e) => this.events.once(t, e), this.off = (t, e) => this.events.off(t, e), this.removeListener = (t, e) => this.events.removeListener(t, e), 
        this.removeAllListeners = t => this.events.removeAllListeners(t), this.connect = async t => {
          try {
            return await this.engine.connect(t);
          } catch (e) {
            throw this.logger.error(e.message), e;
          }
        }, this.pair = async t => {
          try {
            return await this.engine.pair(t);
          } catch (e) {
            throw this.logger.error(e.message), e;
          }
        }, this.approve = async t => {
          try {
            return await this.engine.approve(t);
          } catch (e) {
            throw this.logger.error(e.message), e;
          }
        }, this.reject = async t => {
          try {
            return await this.engine.reject(t);
          } catch (e) {
            throw this.logger.error(e.message), e;
          }
        }, this.update = async t => {
          try {
            return await this.engine.update(t);
          } catch (e) {
            throw this.logger.error(e.message), e;
          }
        }, this.extend = async t => {
          try {
            return await this.engine.extend(t);
          } catch (e) {
            throw this.logger.error(e.message), e;
          }
        }, this.request = async t => {
          try {
            return await this.engine.request(t);
          } catch (e) {
            throw this.logger.error(e.message), e;
          }
        }, this.respond = async t => {
          try {
            return await this.engine.respond(t);
          } catch (e) {
            throw this.logger.error(e.message), e;
          }
        }, this.ping = async t => {
          try {
            return await this.engine.ping(t);
          } catch (e) {
            throw this.logger.error(e.message), e;
          }
        }, this.emit = async t => {
          try {
            return await this.engine.emit(t);
          } catch (e) {
            throw this.logger.error(e.message), e;
          }
        }, this.disconnect = async t => {
          try {
            return await this.engine.disconnect(t);
          } catch (e) {
            throw this.logger.error(e.message), e;
          }
        }, this.find = t => {
          try {
            return this.engine.find(t);
          } catch (e) {
            throw this.logger.error(e.message), e;
          }
        }, this.getPendingSessionRequests = () => {
          try {
            return this.engine.getPendingSessionRequests();
          } catch (t) {
            throw this.logger.error(t.message), t;
          }
        }, this.name = t?.name || Gs, this.metadata = t?.metadata || function() {
          return (0, Xt.D)() || {
            name: "",
            description: "",
            url: "",
            icons: [ "" ]
          };
        }();
        const e = typeof t?.logger < "u" && "string" != typeof t?.logger ? t.logger : (0, m.pino)((0, m.getDefaultLoggerOptions)({
          level: t?.logger || Ys
        }));
        this.core = t?.core || new Ks(t), this.logger = (0, m.generateChildLogger)(e, this.name), this.session = new go(this.core, this.logger), 
        this.proposal = new po(this.core, this.logger), this.pendingRequest = new yo(this.core, this.logger), this.engine = new fo(this);
      }
      static async init(t) {
        const e = new vo(t);
        return await e.initialize(), e;
      }
      get context() {
        return (0, m.getLoggerContext)(this.logger);
      }
      get pairing() {
        return this.core.pairing.pairings;
      }
      async initialize() {
        this.logger.trace("Initialized");
        try {
          await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), 
          this.core.verify.init({
            verifyUrl: this.metadata.verifyUrl
          }), this.logger.info("SignClient Initialization Success");
        } catch (t) {
          throw this.logger.info("SignClient Initialization Failure"), this.logger.error(t.message), t;
        }
      }
    }
    var _o = r(98484);
    var mo = r.n(_o);
    const bo = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST"
    };
    class wo {
      constructor(t, e = !1) {
        if (this.url = t, this.disableProviderPing = e, this.events = new g.EventEmitter, this.isAvailable = !1, this.registering = !1, 
        !Dr(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
        this.url = t, this.disableProviderPing = e;
      }
      get connected() {
        return this.isAvailable;
      }
      get connecting() {
        return this.registering;
      }
      on(t, e) {
        this.events.on(t, e);
      }
      once(t, e) {
        this.events.once(t, e);
      }
      off(t, e) {
        this.events.off(t, e);
      }
      removeListener(t, e) {
        this.events.removeListener(t, e);
      }
      async open(t = this.url) {
        await this.register(t);
      }
      async close() {
        if (!this.isAvailable) throw new Error("Connection already closed");
        this.onClose();
      }
      async send(t, e) {
        this.isAvailable || await this.register();
        try {
          const e = A(t);
          const r = await mo()(this.url, Object.assign(Object.assign({}, bo), {
            body: e
          }));
          const n = await r.json();
          this.onPayload({
            data: n
          });
        } catch (r) {
          this.onError(t.id, r);
        }
      }
      async register(t = this.url) {
        if (!Dr(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
        if (this.registering) {
          const t = this.events.getMaxListeners();
          return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), 
          new Promise(((t, e) => {
            this.events.once("register_error", (t => {
              this.resetMaxListeners(), e(t);
            })), this.events.once("open", (() => {
              if (this.resetMaxListeners(), void 0 === this.isAvailable) return e(new Error("HTTP connection is missing or invalid"));
              t();
            }));
          }));
        }
        this.url = t, this.registering = !0;
        try {
          if (!this.disableProviderPing) {
            const e = A({
              id: 1,
              jsonrpc: "2.0",
              method: "test",
              params: []
            });
            await mo()(t, Object.assign(Object.assign({}, bo), {
              body: e
            }));
          }
          this.onOpen();
        } catch (e) {
          const t = this.parseError(e);
          throw this.events.emit("register_error", t), this.onClose(), t;
        }
      }
      onOpen() {
        this.isAvailable = !0, this.registering = !1, this.events.emit("open");
      }
      onClose() {
        this.isAvailable = !1, this.registering = !1, this.events.emit("close");
      }
      onPayload(t) {
        if (void 0 === t.data) return;
        const e = "string" == typeof t.data ? x(t.data) : t.data;
        this.events.emit("payload", e);
      }
      onError(t, e) {
        const r = this.parseError(e);
        const n = Lr(t, r.message || r.toString());
        this.events.emit("payload", n);
      }
      parseError(t, e = this.url) {
        return Ar(t, e, "HTTP");
      }
      resetMaxListeners() {
        this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
      }
    }
    const Eo = wo;
    const So = "error", Oo = "wc@2:universal_provider:", Io = "default_chain_changed";
    var Po = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof r.g < "u" ? r.g : typeof self < "u" ? self : {}, xo = {
      exports: {}
    };
    !function(t, e) {
      (function() {
        var r, n = "Expected a function", i = "__lodash_hash_undefined__", s = "__lodash_placeholder__", o = 16, a = 32, c = 64, u = 128, h = 256, l = 1 / 0, f = 9007199254740991, p = NaN, d = 4294967295, g = [ [ "ary", u ], [ "bind", 1 ], [ "bindKey", 2 ], [ "curry", 8 ], [ "curryRight", o ], [ "flip", 512 ], [ "partial", a ], [ "partialRight", c ], [ "rearg", h ] ], y = "[object Arguments]", v = "[object Array]", _ = "[object Boolean]", m = "[object Date]", b = "[object Error]", w = "[object Function]", E = "[object GeneratorFunction]", S = "[object Map]", O = "[object Number]", I = "[object Object]", P = "[object Promise]", x = "[object RegExp]", A = "[object Set]", N = "[object String]", R = "[object Symbol]", T = "[object WeakMap]", j = "[object ArrayBuffer]", C = "[object DataView]", L = "[object Float32Array]", U = "[object Float64Array]", M = "[object Int8Array]", D = "[object Int16Array]", k = "[object Int32Array]", z = "[object Uint8Array]", $ = "[object Uint8ClampedArray]", q = "[object Uint16Array]", H = "[object Uint32Array]", B = /\b__p \+= '';/g, V = /\b(__p \+=) '' \+/g, K = /(__e\(.*?\)|\b__t\)) \+\n'';/g, F = /&(?:amp|lt|gt|quot|#39);/g, W = /[&<>"']/g, G = RegExp(F.source), Y = RegExp(W.source), J = /<%-([\s\S]+?)%>/g, X = /<%([\s\S]+?)%>/g, Q = /<%=([\s\S]+?)%>/g, Z = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tt = /^\w*$/, et = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, rt = /[\\^$.*+?()[\]{}|]/g, nt = RegExp(rt.source), it = /^\s+/, st = /\s/, ot = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, at = /\{\n\/\* \[wrapped with (.+)\] \*/, ct = /,? & /, ut = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ht = /[()=,{}\[\]\/\s]/, lt = /\\(\\)?/g, ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, pt = /\w*$/, dt = /^[-+]0x[0-9a-f]+$/i, gt = /^0b[01]+$/i, yt = /^\[object .+?Constructor\]$/, vt = /^0o[0-7]+$/i, _t = /^(?:0|[1-9]\d*)$/, mt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, bt = /($^)/, wt = /['\n\r\u2028\u2029\\]/g, Et = "\\ud800-\\udfff", St = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Ot = "\\u2700-\\u27bf", It = "a-z\\xdf-\\xf6\\xf8-\\xff", Pt = "A-Z\\xc0-\\xd6\\xd8-\\xde", xt = "\\ufe0e\\ufe0f", At = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Nt = "['’]", Rt = "[" + Et + "]", Tt = "[" + At + "]", jt = "[" + St + "]", Ct = "\\d+", Lt = "[" + Ot + "]", Ut = "[" + It + "]", Mt = "[^" + Et + At + Ct + Ot + It + Pt + "]", Dt = "\\ud83c[\\udffb-\\udfff]", kt = "[^" + Et + "]", zt = "(?:\\ud83c[\\udde6-\\uddff]){2}", $t = "[\\ud800-\\udbff][\\udc00-\\udfff]", qt = "[" + Pt + "]", Ht = "\\u200d", Bt = "(?:" + Ut + "|" + Mt + ")", Vt = "(?:" + qt + "|" + Mt + ")", Kt = "(?:['’](?:d|ll|m|re|s|t|ve))?", Ft = "(?:['’](?:D|LL|M|RE|S|T|VE))?", Wt = "(?:" + jt + "|" + Dt + ")" + "?", Gt = "[" + xt + "]?", Yt = Gt + Wt + ("(?:\\u200d(?:" + [ kt, zt, $t ].join("|") + ")" + Gt + Wt + ")*"), Jt = "(?:" + [ Lt, zt, $t ].join("|") + ")" + Yt, Xt = "(?:" + [ kt + jt + "?", jt, zt, $t, Rt ].join("|") + ")", Qt = RegExp(Nt, "g"), Zt = RegExp(jt, "g"), te = RegExp(Dt + "(?=" + Dt + ")|" + Xt + Yt, "g"), ee = RegExp([ qt + "?" + Ut + "+" + Kt + "(?=" + [ Tt, qt, "$" ].join("|") + ")", Vt + "+" + Ft + "(?=" + [ Tt, qt + Bt, "$" ].join("|") + ")", qt + "?" + Bt + "+" + Kt, qt + "+" + Ft, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ct, Jt ].join("|"), "g"), re = RegExp("[" + Ht + Et + St + xt + "]"), ne = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, ie = [ "Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout" ], se = -1, oe = {};
        oe[L] = oe[U] = oe[M] = oe[D] = oe[k] = oe[z] = oe[$] = oe[q] = oe[H] = !0, oe[y] = oe[v] = oe[j] = oe[_] = oe[C] = oe[m] = oe[b] = oe[w] = oe[S] = oe[O] = oe[I] = oe[x] = oe[A] = oe[N] = oe[T] = !1;
        var ae = {};
        ae[y] = ae[v] = ae[j] = ae[C] = ae[_] = ae[m] = ae[L] = ae[U] = ae[M] = ae[D] = ae[k] = ae[S] = ae[O] = ae[I] = ae[x] = ae[A] = ae[N] = ae[R] = ae[z] = ae[$] = ae[q] = ae[H] = !0, 
        ae[b] = ae[w] = ae[T] = !1;
        var ce = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        }, ue = parseFloat, he = parseInt, le = "object" == typeof Po && Po && Po.Object === Object && Po, fe = "object" == typeof self && self && self.Object === Object && self, pe = le || fe || Function("return this")(), de = e && !e.nodeType && e, ge = de && t && !t.nodeType && t, ye = ge && ge.exports === de, ve = ye && le.process, _e = function() {
          try {
            return ge && ge.require && ge.require("util").types || ve && ve.binding && ve.binding("util");
          } catch {}
        }(), me = _e && _e.isArrayBuffer, be = _e && _e.isDate, we = _e && _e.isMap, Ee = _e && _e.isRegExp, Se = _e && _e.isSet, Oe = _e && _e.isTypedArray;
        function Ie(t, e, r) {
          switch (r.length) {
           case 0:
            return t.call(e);

           case 1:
            return t.call(e, r[0]);

           case 2:
            return t.call(e, r[0], r[1]);

           case 3:
            return t.call(e, r[0], r[1], r[2]);
          }
          return t.apply(e, r);
        }
        function Pe(t, e, r, n) {
          for (var i = -1, s = null == t ? 0 : t.length; ++i < s; ) {
            var o = t[i];
            e(n, o, r(o), t);
          }
          return n;
        }
        function xe(t, e) {
          for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t); ) ;
          return t;
        }
        function Ae(t, e) {
          for (var r = null == t ? 0 : t.length; r-- && !1 !== e(t[r], r, t); ) ;
          return t;
        }
        function Ne(t, e) {
          for (var r = -1, n = null == t ? 0 : t.length; ++r < n; ) if (!e(t[r], r, t)) return !1;
          return !0;
        }
        function Re(t, e) {
          for (var r = -1, n = null == t ? 0 : t.length, i = 0, s = []; ++r < n; ) {
            var o = t[r];
            e(o, r, t) && (s[i++] = o);
          }
          return s;
        }
        function Te(t, e) {
          return !!(null == t ? 0 : t.length) && qe(t, e, 0) > -1;
        }
        function je(t, e, r) {
          for (var n = -1, i = null == t ? 0 : t.length; ++n < i; ) if (r(e, t[n])) return !0;
          return !1;
        }
        function Ce(t, e) {
          for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n; ) i[r] = e(t[r], r, t);
          return i;
        }
        function Le(t, e) {
          for (var r = -1, n = e.length, i = t.length; ++r < n; ) t[i + r] = e[r];
          return t;
        }
        function Ue(t, e, r, n) {
          var i = -1, s = null == t ? 0 : t.length;
          for (n && s && (r = t[++i]); ++i < s; ) r = e(r, t[i], i, t);
          return r;
        }
        function Me(t, e, r, n) {
          var i = null == t ? 0 : t.length;
          for (n && i && (r = t[--i]); i--; ) r = e(r, t[i], i, t);
          return r;
        }
        function De(t, e) {
          for (var r = -1, n = null == t ? 0 : t.length; ++r < n; ) if (e(t[r], r, t)) return !0;
          return !1;
        }
        var ke = Ke("length");
        function ze(t, e, r) {
          var n;
          return r(t, (function(t, r, i) {
            if (e(t, r, i)) return n = r, !1;
          })), n;
        }
        function $e(t, e, r, n) {
          for (var i = t.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; ) if (e(t[s], s, t)) return s;
          return -1;
        }
        function qe(t, e, r) {
          return e == e ? function(t, e, r) {
            for (var n = r - 1, i = t.length; ++n < i; ) if (t[n] === e) return n;
            return -1;
          }(t, e, r) : $e(t, Be, r);
        }
        function He(t, e, r, n) {
          for (var i = r - 1, s = t.length; ++i < s; ) if (n(t[i], e)) return i;
          return -1;
        }
        function Be(t) {
          return t != t;
        }
        function Ve(t, e) {
          var r = null == t ? 0 : t.length;
          return r ? Ge(t, e) / r : p;
        }
        function Ke(t) {
          return function(e) {
            return null == e ? r : e[t];
          };
        }
        function Fe(t) {
          return function(e) {
            return null == t ? r : t[e];
          };
        }
        function We(t, e, r, n, i) {
          return i(t, (function(t, i, s) {
            r = n ? (n = !1, t) : e(r, t, i, s);
          })), r;
        }
        function Ge(t, e) {
          for (var n, i = -1, s = t.length; ++i < s; ) {
            var o = e(t[i]);
            o !== r && (n = n === r ? o : n + o);
          }
          return n;
        }
        function Ye(t, e) {
          for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
          return n;
        }
        function Je(t) {
          return t && t.slice(0, pr(t) + 1).replace(it, "");
        }
        function Xe(t) {
          return function(e) {
            return t(e);
          };
        }
        function Qe(t, e) {
          return Ce(e, (function(e) {
            return t[e];
          }));
        }
        function Ze(t, e) {
          return t.has(e);
        }
        function tr(t, e) {
          for (var r = -1, n = t.length; ++r < n && qe(e, t[r], 0) > -1; ) ;
          return r;
        }
        function er(t, e) {
          for (var r = t.length; r-- && qe(e, t[r], 0) > -1; ) ;
          return r;
        }
        function rr(t, e) {
          for (var r = t.length, n = 0; r--; ) t[r] === e && ++n;
          return n;
        }
        var nr = Fe({
          "À": "A",
          "Á": "A",
          "Â": "A",
          "Ã": "A",
          "Ä": "A",
          "Å": "A",
          "à": "a",
          "á": "a",
          "â": "a",
          "ã": "a",
          "ä": "a",
          "å": "a",
          "Ç": "C",
          "ç": "c",
          "Ð": "D",
          "ð": "d",
          "È": "E",
          "É": "E",
          "Ê": "E",
          "Ë": "E",
          "è": "e",
          "é": "e",
          "ê": "e",
          "ë": "e",
          "Ì": "I",
          "Í": "I",
          "Î": "I",
          "Ï": "I",
          "ì": "i",
          "í": "i",
          "î": "i",
          "ï": "i",
          "Ñ": "N",
          "ñ": "n",
          "Ò": "O",
          "Ó": "O",
          "Ô": "O",
          "Õ": "O",
          "Ö": "O",
          "Ø": "O",
          "ò": "o",
          "ó": "o",
          "ô": "o",
          "õ": "o",
          "ö": "o",
          "ø": "o",
          "Ù": "U",
          "Ú": "U",
          "Û": "U",
          "Ü": "U",
          "ù": "u",
          "ú": "u",
          "û": "u",
          "ü": "u",
          "Ý": "Y",
          "ý": "y",
          "ÿ": "y",
          "Æ": "Ae",
          "æ": "ae",
          "Þ": "Th",
          "þ": "th",
          "ß": "ss",
          "Ā": "A",
          "Ă": "A",
          "Ą": "A",
          "ā": "a",
          "ă": "a",
          "ą": "a",
          "Ć": "C",
          "Ĉ": "C",
          "Ċ": "C",
          "Č": "C",
          "ć": "c",
          "ĉ": "c",
          "ċ": "c",
          "č": "c",
          "Ď": "D",
          "Đ": "D",
          "ď": "d",
          "đ": "d",
          "Ē": "E",
          "Ĕ": "E",
          "Ė": "E",
          "Ę": "E",
          "Ě": "E",
          "ē": "e",
          "ĕ": "e",
          "ė": "e",
          "ę": "e",
          "ě": "e",
          "Ĝ": "G",
          "Ğ": "G",
          "Ġ": "G",
          "Ģ": "G",
          "ĝ": "g",
          "ğ": "g",
          "ġ": "g",
          "ģ": "g",
          "Ĥ": "H",
          "Ħ": "H",
          "ĥ": "h",
          "ħ": "h",
          "Ĩ": "I",
          "Ī": "I",
          "Ĭ": "I",
          "Į": "I",
          "İ": "I",
          "ĩ": "i",
          "ī": "i",
          "ĭ": "i",
          "į": "i",
          "ı": "i",
          "Ĵ": "J",
          "ĵ": "j",
          "Ķ": "K",
          "ķ": "k",
          "ĸ": "k",
          "Ĺ": "L",
          "Ļ": "L",
          "Ľ": "L",
          "Ŀ": "L",
          "Ł": "L",
          "ĺ": "l",
          "ļ": "l",
          "ľ": "l",
          "ŀ": "l",
          "ł": "l",
          "Ń": "N",
          "Ņ": "N",
          "Ň": "N",
          "Ŋ": "N",
          "ń": "n",
          "ņ": "n",
          "ň": "n",
          "ŋ": "n",
          "Ō": "O",
          "Ŏ": "O",
          "Ő": "O",
          "ō": "o",
          "ŏ": "o",
          "ő": "o",
          "Ŕ": "R",
          "Ŗ": "R",
          "Ř": "R",
          "ŕ": "r",
          "ŗ": "r",
          "ř": "r",
          "Ś": "S",
          "Ŝ": "S",
          "Ş": "S",
          "Š": "S",
          "ś": "s",
          "ŝ": "s",
          "ş": "s",
          "š": "s",
          "Ţ": "T",
          "Ť": "T",
          "Ŧ": "T",
          "ţ": "t",
          "ť": "t",
          "ŧ": "t",
          "Ũ": "U",
          "Ū": "U",
          "Ŭ": "U",
          "Ů": "U",
          "Ű": "U",
          "Ų": "U",
          "ũ": "u",
          "ū": "u",
          "ŭ": "u",
          "ů": "u",
          "ű": "u",
          "ų": "u",
          "Ŵ": "W",
          "ŵ": "w",
          "Ŷ": "Y",
          "ŷ": "y",
          "Ÿ": "Y",
          "Ź": "Z",
          "Ż": "Z",
          "Ž": "Z",
          "ź": "z",
          "ż": "z",
          "ž": "z",
          "Ĳ": "IJ",
          "ĳ": "ij",
          "Œ": "Oe",
          "œ": "oe",
          "ŉ": "'n",
          "ſ": "s"
        }), ir = Fe({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        });
        function sr(t) {
          return "\\" + ce[t];
        }
        function or(t) {
          return re.test(t);
        }
        function ar(t) {
          var e = -1, r = Array(t.size);
          return t.forEach((function(t, n) {
            r[++e] = [ n, t ];
          })), r;
        }
        function cr(t, e) {
          return function(r) {
            return t(e(r));
          };
        }
        function ur(t, e) {
          for (var r = -1, n = t.length, i = 0, o = []; ++r < n; ) {
            var a = t[r];
            (a === e || a === s) && (t[r] = s, o[i++] = r);
          }
          return o;
        }
        function hr(t) {
          var e = -1, r = Array(t.size);
          return t.forEach((function(t) {
            r[++e] = t;
          })), r;
        }
        function lr(t) {
          return or(t) ? function(t) {
            for (var e = te.lastIndex = 0; te.test(t); ) ++e;
            return e;
          }(t) : ke(t);
        }
        function fr(t) {
          return or(t) ? function(t) {
            return t.match(te) || [];
          }(t) : function(t) {
            return t.split("");
          }(t);
        }
        function pr(t) {
          for (var e = t.length; e-- && st.test(t.charAt(e)); ) ;
          return e;
        }
        var dr = Fe({
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'"
        });
        var gr = function t(e) {
          var st = (e = null == e ? pe : gr.defaults(pe.Object(), e, gr.pick(pe, ie))).Array, Et = e.Date, St = e.Error, Ot = e.Function, It = e.Math, Pt = e.Object, xt = e.RegExp, At = e.String, Nt = e.TypeError, Rt = st.prototype, Tt = Ot.prototype, jt = Pt.prototype, Ct = e["__core-js_shared__"], Lt = Tt.toString, Ut = jt.hasOwnProperty, Mt = 0, Dt = function() {
            var t = /[^.]+$/.exec(Ct && Ct.keys && Ct.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : "";
          }(), kt = jt.toString, zt = Lt.call(Pt), $t = pe._, qt = xt("^" + Lt.call(Ut).replace(rt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Ht = ye ? e.Buffer : r, Bt = e.Symbol, Vt = e.Uint8Array, Kt = Ht ? Ht.allocUnsafe : r, Ft = cr(Pt.getPrototypeOf, Pt), Wt = Pt.create, Gt = jt.propertyIsEnumerable, Yt = Rt.splice, Jt = Bt ? Bt.isConcatSpreadable : r, Xt = Bt ? Bt.iterator : r, te = Bt ? Bt.toStringTag : r, re = function() {
            try {
              var t = ls(Pt, "defineProperty");
              return t({}, "", {}), t;
            } catch {}
          }(), ce = e.clearTimeout !== pe.clearTimeout && e.clearTimeout, le = Et && Et.now !== pe.Date.now && Et.now, fe = e.setTimeout !== pe.setTimeout && e.setTimeout, de = It.ceil, ge = It.floor, ve = Pt.getOwnPropertySymbols, _e = Ht ? Ht.isBuffer : r, ke = e.isFinite, Fe = Rt.join, yr = cr(Pt.keys, Pt), vr = It.max, _r = It.min, mr = Et.now, br = e.parseInt, wr = It.random, Er = Rt.reverse, Sr = ls(e, "DataView"), Or = ls(e, "Map"), Ir = ls(e, "Promise"), Pr = ls(e, "Set"), xr = ls(e, "WeakMap"), Ar = ls(Pt, "create"), Nr = xr && new xr, Rr = {}, Tr = ks(Sr), jr = ks(Or), Cr = ks(Ir), Lr = ks(Pr), Ur = ks(xr), Mr = Bt ? Bt.prototype : r, Dr = Mr ? Mr.valueOf : r, kr = Mr ? Mr.toString : r;
          function zr(t) {
            if (ra(t) && !Ko(t) && !(t instanceof Br)) {
              if (t instanceof Hr) return t;
              if (Ut.call(t, "__wrapped__")) return zs(t);
            }
            return new Hr(t);
          }
          var $r = function() {
            function t() {}
            return function(e) {
              if (!ea(e)) return {};
              if (Wt) return Wt(e);
              t.prototype = e;
              var n = new t;
              return t.prototype = r, n;
            };
          }();
          function qr() {}
          function Hr(t, e) {
            this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = r;
          }
          function Br(t) {
            this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = d, 
            this.__views__ = [];
          }
          function Vr(t) {
            var e = -1, r = null == t ? 0 : t.length;
            for (this.clear(); ++e < r; ) {
              var n = t[e];
              this.set(n[0], n[1]);
            }
          }
          function Kr(t) {
            var e = -1, r = null == t ? 0 : t.length;
            for (this.clear(); ++e < r; ) {
              var n = t[e];
              this.set(n[0], n[1]);
            }
          }
          function Fr(t) {
            var e = -1, r = null == t ? 0 : t.length;
            for (this.clear(); ++e < r; ) {
              var n = t[e];
              this.set(n[0], n[1]);
            }
          }
          function Wr(t) {
            var e = -1, r = null == t ? 0 : t.length;
            for (this.__data__ = new Fr; ++e < r; ) this.add(t[e]);
          }
          function Gr(t) {
            var e = this.__data__ = new Kr(t);
            this.size = e.size;
          }
          function Yr(t, e) {
            var r = Ko(t), n = !r && Vo(t), i = !r && !n && Yo(t), s = !r && !n && !i && ha(t), o = r || n || i || s, a = o ? Ye(t.length, At) : [], c = a.length;
            for (var u in t) (e || Ut.call(t, u)) && (!o || !("length" == u || i && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || _s(u, c))) && a.push(u);
            return a;
          }
          function Jr(t) {
            var e = t.length;
            return e ? t[Gn(0, e - 1)] : r;
          }
          function Xr(t, e) {
            return Us(Ni(t), an(e, 0, t.length));
          }
          function Qr(t) {
            return Us(Ni(t));
          }
          function Zr(t, e, n) {
            (n !== r && !qo(t[e], n) || n === r && !(e in t)) && sn(t, e, n);
          }
          function tn(t, e, n) {
            var i = t[e];
            (!Ut.call(t, e) || !qo(i, n) || n === r && !(e in t)) && sn(t, e, n);
          }
          function en(t, e) {
            for (var r = t.length; r--; ) if (qo(t[r][0], e)) return r;
            return -1;
          }
          function rn(t, e, r, n) {
            return fn(t, (function(t, i, s) {
              e(n, t, r(t), s);
            })), n;
          }
          function nn(t, e) {
            return t && Ri(e, ja(e), t);
          }
          function sn(t, e, r) {
            "__proto__" == e && re ? re(t, e, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0
            }) : t[e] = r;
          }
          function on(t, e) {
            for (var n = -1, i = e.length, s = st(i), o = null == t; ++n < i; ) s[n] = o ? r : xa(t, e[n]);
            return s;
          }
          function an(t, e, n) {
            return t == t && (n !== r && (t = t <= n ? t : n), e !== r && (t = t >= e ? t : e)), t;
          }
          function cn(t, e, n, i, s, o) {
            var a, c = 1 & e, u = 2 & e, h = 4 & e;
            if (n && (a = s ? n(t, i, s, o) : n(t)), a !== r) return a;
            if (!ea(t)) return t;
            var l = Ko(t);
            if (l) {
              if (a = function(t) {
                var e = t.length, r = new t.constructor(e);
                return e && "string" == typeof t[0] && Ut.call(t, "index") && (r.index = t.index, r.input = t.input), r;
              }(t), !c) return Ni(t, a);
            } else {
              var f = ds(t), p = f == w || f == E;
              if (Yo(t)) return Si(t, c);
              if (f == I || f == y || p && !s) {
                if (a = u || p ? {} : ys(t), !c) return u ? function(t, e) {
                  return Ri(t, ps(t), e);
                }(t, function(t, e) {
                  return t && Ri(e, Ca(e), t);
                }(a, t)) : function(t, e) {
                  return Ri(t, fs(t), e);
                }(t, nn(a, t));
              } else {
                if (!ae[f]) return s ? t : {};
                a = function(t, e, r) {
                  var n = t.constructor;
                  switch (e) {
                   case j:
                    return Oi(t);

                   case _:
                   case m:
                    return new n(+t);

                   case C:
                    return function(t, e) {
                      var r = e ? Oi(t.buffer) : t.buffer;
                      return new t.constructor(r, t.byteOffset, t.byteLength);
                    }(t, r);

                   case L:
                   case U:
                   case M:
                   case D:
                   case k:
                   case z:
                   case $:
                   case q:
                   case H:
                    return Ii(t, r);

                   case S:
                    return new n;

                   case O:
                   case N:
                    return new n(t);

                   case x:
                    return function(t) {
                      var e = new t.constructor(t.source, pt.exec(t));
                      return e.lastIndex = t.lastIndex, e;
                    }(t);

                   case A:
                    return new n;

                   case R:
                    return function(t) {
                      return Dr ? Pt(Dr.call(t)) : {};
                    }(t);
                  }
                }(t, f, c);
              }
            }
            o || (o = new Gr);
            var d = o.get(t);
            if (d) return d;
            o.set(t, a), aa(t) ? t.forEach((function(r) {
              a.add(cn(r, e, n, r, t, o));
            })) : na(t) && t.forEach((function(r, i) {
              a.set(i, cn(r, e, n, i, t, o));
            }));
            var g = l ? r : (h ? u ? is : ns : u ? Ca : ja)(t);
            return xe(g || t, (function(r, i) {
              g && (r = t[i = r]), tn(a, i, cn(r, e, n, i, t, o));
            })), a;
          }
          function un(t, e, n) {
            var i = n.length;
            if (null == t) return !i;
            for (t = Pt(t); i--; ) {
              var s = n[i], o = e[s], a = t[s];
              if (a === r && !(s in t) || !o(a)) return !1;
            }
            return !0;
          }
          function hn(t, e, i) {
            if ("function" != typeof t) throw new Nt(n);
            return Ts((function() {
              t.apply(r, i);
            }), e);
          }
          function ln(t, e, r, n) {
            var i = -1, s = Te, o = !0, a = t.length, c = [], u = e.length;
            if (!a) return c;
            r && (e = Ce(e, Xe(r))), n ? (s = je, o = !1) : e.length >= 200 && (s = Ze, o = !1, e = new Wr(e));
            t: for (;++i < a; ) {
              var h = t[i], l = null == r ? h : r(h);
              if (h = n || 0 !== h ? h : 0, o && l == l) {
                for (var f = u; f--; ) if (e[f] === l) continue t;
                c.push(h);
              } else s(e, l, n) || c.push(h);
            }
            return c;
          }
          zr.templateSettings = {
            escape: J,
            evaluate: X,
            interpolate: Q,
            variable: "",
            imports: {
              _: zr
            }
          }, zr.prototype = qr.prototype, zr.prototype.constructor = zr, Hr.prototype = $r(qr.prototype), Hr.prototype.constructor = Hr, 
          Br.prototype = $r(qr.prototype), Br.prototype.constructor = Br, Vr.prototype.clear = function() {
            this.__data__ = Ar ? Ar(null) : {}, this.size = 0;
          }, Vr.prototype.delete = function(t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0, e;
          }, Vr.prototype.get = function(t) {
            var e = this.__data__;
            if (Ar) {
              var n = e[t];
              return n === i ? r : n;
            }
            return Ut.call(e, t) ? e[t] : r;
          }, Vr.prototype.has = function(t) {
            var e = this.__data__;
            return Ar ? e[t] !== r : Ut.call(e, t);
          }, Vr.prototype.set = function(t, e) {
            var n = this.__data__;
            return this.size += this.has(t) ? 0 : 1, n[t] = Ar && e === r ? i : e, this;
          }, Kr.prototype.clear = function() {
            this.__data__ = [], this.size = 0;
          }, Kr.prototype.delete = function(t) {
            var e = this.__data__, r = en(e, t);
            return !(r < 0) && (r == e.length - 1 ? e.pop() : Yt.call(e, r, 1), --this.size, !0);
          }, Kr.prototype.get = function(t) {
            var e = this.__data__, n = en(e, t);
            return n < 0 ? r : e[n][1];
          }, Kr.prototype.has = function(t) {
            return en(this.__data__, t) > -1;
          }, Kr.prototype.set = function(t, e) {
            var r = this.__data__, n = en(r, t);
            return n < 0 ? (++this.size, r.push([ t, e ])) : r[n][1] = e, this;
          }, Fr.prototype.clear = function() {
            this.size = 0, this.__data__ = {
              hash: new Vr,
              map: new (Or || Kr),
              string: new Vr
            };
          }, Fr.prototype.delete = function(t) {
            var e = us(this, t).delete(t);
            return this.size -= e ? 1 : 0, e;
          }, Fr.prototype.get = function(t) {
            return us(this, t).get(t);
          }, Fr.prototype.has = function(t) {
            return us(this, t).has(t);
          }, Fr.prototype.set = function(t, e) {
            var r = us(this, t), n = r.size;
            return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
          }, Wr.prototype.add = Wr.prototype.push = function(t) {
            return this.__data__.set(t, i), this;
          }, Wr.prototype.has = function(t) {
            return this.__data__.has(t);
          }, Gr.prototype.clear = function() {
            this.__data__ = new Kr, this.size = 0;
          }, Gr.prototype.delete = function(t) {
            var e = this.__data__, r = e.delete(t);
            return this.size = e.size, r;
          }, Gr.prototype.get = function(t) {
            return this.__data__.get(t);
          }, Gr.prototype.has = function(t) {
            return this.__data__.has(t);
          }, Gr.prototype.set = function(t, e) {
            var r = this.__data__;
            if (r instanceof Kr) {
              var n = r.__data__;
              if (!Or || n.length < 199) return n.push([ t, e ]), this.size = ++r.size, this;
              r = this.__data__ = new Fr(n);
            }
            return r.set(t, e), this.size = r.size, this;
          };
          var fn = Ci(bn), pn = Ci(wn, !0);
          function dn(t, e) {
            var r = !0;
            return fn(t, (function(t, n, i) {
              return r = !!e(t, n, i);
            })), r;
          }
          function gn(t, e, n) {
            for (var i = -1, s = t.length; ++i < s; ) {
              var o = t[i], a = e(o);
              if (null != a && (c === r ? a == a && !ua(a) : n(a, c))) var c = a, u = o;
            }
            return u;
          }
          function yn(t, e) {
            var r = [];
            return fn(t, (function(t, n, i) {
              e(t, n, i) && r.push(t);
            })), r;
          }
          function vn(t, e, r, n, i) {
            var s = -1, o = t.length;
            for (r || (r = vs), i || (i = []); ++s < o; ) {
              var a = t[s];
              e > 0 && r(a) ? e > 1 ? vn(a, e - 1, r, n, i) : Le(i, a) : n || (i[i.length] = a);
            }
            return i;
          }
          var _n = Li(), mn = Li(!0);
          function bn(t, e) {
            return t && _n(t, e, ja);
          }
          function wn(t, e) {
            return t && mn(t, e, ja);
          }
          function En(t, e) {
            return Re(e, (function(e) {
              return Qo(t[e]);
            }));
          }
          function Sn(t, e) {
            for (var n = 0, i = (e = mi(e, t)).length; null != t && n < i; ) t = t[Ds(e[n++])];
            return n && n == i ? t : r;
          }
          function On(t, e, r) {
            var n = e(t);
            return Ko(t) ? n : Le(n, r(t));
          }
          function In(t) {
            return null == t ? t === r ? "[object Undefined]" : "[object Null]" : te && te in Pt(t) ? function(t) {
              var e = Ut.call(t, te), n = t[te];
              try {
                t[te] = r;
                var i = !0;
              } catch {}
              var s = kt.call(t);
              return i && (e ? t[te] = n : delete t[te]), s;
            }(t) : function(t) {
              return kt.call(t);
            }(t);
          }
          function Pn(t, e) {
            return t > e;
          }
          function xn(t, e) {
            return null != t && Ut.call(t, e);
          }
          function An(t, e) {
            return null != t && e in Pt(t);
          }
          function Nn(t, e, n) {
            for (var i = n ? je : Te, s = t[0].length, o = t.length, a = o, c = st(o), u = 1 / 0, h = []; a--; ) {
              var l = t[a];
              a && e && (l = Ce(l, Xe(e))), u = _r(l.length, u), c[a] = !n && (e || s >= 120 && l.length >= 120) ? new Wr(a && l) : r;
            }
            l = t[0];
            var f = -1, p = c[0];
            t: for (;++f < s && h.length < u; ) {
              var d = l[f], g = e ? e(d) : d;
              if (d = n || 0 !== d ? d : 0, !(p ? Ze(p, g) : i(h, g, n))) {
                for (a = o; --a; ) {
                  var y = c[a];
                  if (!(y ? Ze(y, g) : i(t[a], g, n))) continue t;
                }
                p && p.push(g), h.push(d);
              }
            }
            return h;
          }
          function Rn(t, e, n) {
            var i = null == (t = xs(t, e = mi(e, t))) ? t : t[Ds(Js(e))];
            return null == i ? r : Ie(i, t, n);
          }
          function Tn(t) {
            return ra(t) && In(t) == y;
          }
          function jn(t, e, n, i, s) {
            return t === e || (null == t || null == e || !ra(t) && !ra(e) ? t != t && e != e : function(t, e, n, i, s, o) {
              var a = Ko(t), c = Ko(e), u = a ? v : ds(t), h = c ? v : ds(e);
              var l = (u = u == y ? I : u) == I, f = (h = h == y ? I : h) == I, p = u == h;
              if (p && Yo(t)) {
                if (!Yo(e)) return !1;
                a = !0, l = !1;
              }
              if (p && !l) return o || (o = new Gr), a || ha(t) ? es(t, e, n, i, s, o) : function(t, e, r, n, i, s, o) {
                switch (r) {
                 case C:
                  if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                  t = t.buffer, e = e.buffer;

                 case j:
                  return !(t.byteLength != e.byteLength || !s(new Vt(t), new Vt(e)));

                 case _:
                 case m:
                 case O:
                  return qo(+t, +e);

                 case b:
                  return t.name == e.name && t.message == e.message;

                 case x:
                 case N:
                  return t == e + "";

                 case S:
                  var a = ar;

                 case A:
                  var c = 1 & n;
                  if (a || (a = hr), t.size != e.size && !c) return !1;
                  var u = o.get(t);
                  if (u) return u == e;
                  n |= 2, o.set(t, e);
                  var h = es(a(t), a(e), n, i, s, o);
                  return o.delete(t), h;

                 case R:
                  if (Dr) return Dr.call(t) == Dr.call(e);
                }
                return !1;
              }(t, e, u, n, i, s, o);
              if (!(1 & n)) {
                var d = l && Ut.call(t, "__wrapped__"), g = f && Ut.call(e, "__wrapped__");
                if (d || g) {
                  var w = d ? t.value() : t, E = g ? e.value() : e;
                  return o || (o = new Gr), s(w, E, n, i, o);
                }
              }
              return !!p && (o || (o = new Gr), function(t, e, n, i, s, o) {
                var a = 1 & n, c = ns(t), u = c.length, h = ns(e).length;
                if (u != h && !a) return !1;
                for (var l = u; l--; ) {
                  var f = c[l];
                  if (!(a ? f in e : Ut.call(e, f))) return !1;
                }
                var p = o.get(t), d = o.get(e);
                if (p && d) return p == e && d == t;
                var g = !0;
                o.set(t, e), o.set(e, t);
                for (var y = a; ++l < u; ) {
                  var v = t[f = c[l]], _ = e[f];
                  if (i) var m = a ? i(_, v, f, e, t, o) : i(v, _, f, t, e, o);
                  if (!(m === r ? v === _ || s(v, _, n, i, o) : m)) {
                    g = !1;
                    break;
                  }
                  y || (y = "constructor" == f);
                }
                if (g && !y) {
                  var b = t.constructor, w = e.constructor;
                  b != w && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w) && (g = !1);
                }
                return o.delete(t), o.delete(e), g;
              }(t, e, n, i, s, o));
            }(t, e, n, i, jn, s));
          }
          function Cn(t, e, n, i) {
            var s = n.length, o = s, a = !i;
            if (null == t) return !o;
            for (t = Pt(t); s--; ) {
              var c = n[s];
              if (a && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1;
            }
            for (;++s < o; ) {
              var u = (c = n[s])[0], h = t[u], l = c[1];
              if (a && c[2]) {
                if (h === r && !(u in t)) return !1;
              } else {
                var f = new Gr;
                if (i) var p = i(h, l, u, t, e, f);
                if (!(p === r ? jn(l, h, 3, i, f) : p)) return !1;
              }
            }
            return !0;
          }
          function Ln(t) {
            return !(!ea(t) || function(t) {
              return !!Dt && Dt in t;
            }(t)) && (Qo(t) ? qt : yt).test(ks(t));
          }
          function Un(t) {
            return "function" == typeof t ? t : null == t ? ic : "object" == typeof t ? Ko(t) ? qn(t[0], t[1]) : $n(t) : pc(t);
          }
          function Mn(t) {
            if (!Ss(t)) return yr(t);
            var e = [];
            for (var r in Pt(t)) Ut.call(t, r) && "constructor" != r && e.push(r);
            return e;
          }
          function Dn(t) {
            if (!ea(t)) return function(t) {
              var e = [];
              if (null != t) for (var r in Pt(t)) e.push(r);
              return e;
            }(t);
            var e = Ss(t), r = [];
            for (var n in t) "constructor" == n && (e || !Ut.call(t, n)) || r.push(n);
            return r;
          }
          function kn(t, e) {
            return t < e;
          }
          function zn(t, e) {
            var r = -1, n = Wo(t) ? st(t.length) : [];
            return fn(t, (function(t, i, s) {
              n[++r] = e(t, i, s);
            })), n;
          }
          function $n(t) {
            var e = hs(t);
            return 1 == e.length && e[0][2] ? Is(e[0][0], e[0][1]) : function(r) {
              return r === t || Cn(r, t, e);
            };
          }
          function qn(t, e) {
            return bs(t) && Os(e) ? Is(Ds(t), e) : function(n) {
              var i = xa(n, t);
              return i === r && i === e ? Aa(n, t) : jn(e, i, 3);
            };
          }
          function Hn(t, e, n, i, s) {
            t !== e && _n(e, (function(o, a) {
              if (s || (s = new Gr), ea(o)) !function(t, e, n, i, s, o, a) {
                var c = Ns(t, n), u = Ns(e, n), h = a.get(u);
                if (h) return void Zr(t, n, h);
                var l = o ? o(c, u, n + "", t, e, a) : r, f = l === r;
                if (f) {
                  var p = Ko(u), d = !p && Yo(u), g = !p && !d && ha(u);
                  l = u, p || d || g ? Ko(c) ? l = c : Go(c) ? l = Ni(c) : d ? (f = !1, l = Si(u, !0)) : g ? (f = !1, l = Ii(u, !0)) : l = [] : sa(u) || Vo(u) ? (l = c, 
                  Vo(c) ? l = _a(c) : (!ea(c) || Qo(c)) && (l = ys(u))) : f = !1;
                }
                f && (a.set(u, l), s(l, u, i, o, a), a.delete(u)), Zr(t, n, l);
              }(t, e, a, n, Hn, i, s); else {
                var c = i ? i(Ns(t, a), o, a + "", t, e, s) : r;
                c === r && (c = o), Zr(t, a, c);
              }
            }), Ca);
          }
          function Bn(t, e) {
            var n = t.length;
            if (n) return _s(e += e < 0 ? n : 0, n) ? t[e] : r;
          }
          function Vn(t, e, r) {
            e = e.length ? Ce(e, (function(t) {
              return Ko(t) ? function(e) {
                return Sn(e, 1 === t.length ? t[0] : t);
              } : t;
            })) : [ ic ];
            var n = -1;
            e = Ce(e, Xe(cs()));
            var i = zn(t, (function(t, r, i) {
              var s = Ce(e, (function(e) {
                return e(t);
              }));
              return {
                criteria: s,
                index: ++n,
                value: t
              };
            }));
            return function(t, e) {
              var r = t.length;
              for (t.sort(e); r--; ) t[r] = t[r].value;
              return t;
            }(i, (function(t, e) {
              return function(t, e, r) {
                for (var n = -1, i = t.criteria, s = e.criteria, o = i.length, a = r.length; ++n < o; ) {
                  var c = Pi(i[n], s[n]);
                  if (c) return n >= a ? c : c * ("desc" == r[n] ? -1 : 1);
                }
                return t.index - e.index;
              }(t, e, r);
            }));
          }
          function Kn(t, e, r) {
            for (var n = -1, i = e.length, s = {}; ++n < i; ) {
              var o = e[n], a = Sn(t, o);
              r(a, o) && Zn(s, mi(o, t), a);
            }
            return s;
          }
          function Fn(t, e, r, n) {
            var i = n ? He : qe, s = -1, o = e.length, a = t;
            for (t === e && (e = Ni(e)), r && (a = Ce(t, Xe(r))); ++s < o; ) for (var c = 0, u = e[s], h = r ? r(u) : u; (c = i(a, h, c, n)) > -1; ) a !== t && Yt.call(a, c, 1), 
            Yt.call(t, c, 1);
            return t;
          }
          function Wn(t, e) {
            for (var r = t ? e.length : 0, n = r - 1; r--; ) {
              var i = e[r];
              if (r == n || i !== s) {
                var s = i;
                _s(i) ? Yt.call(t, i, 1) : li(t, i);
              }
            }
            return t;
          }
          function Gn(t, e) {
            return t + ge(wr() * (e - t + 1));
          }
          function Yn(t, e) {
            var r = "";
            if (!t || e < 1 || e > f) return r;
            do {
              e % 2 && (r += t), (e = ge(e / 2)) && (t += t);
            } while (e);
            return r;
          }
          function Jn(t, e) {
            return js(Ps(t, e, ic), t + "");
          }
          function Xn(t) {
            return Jr(qa(t));
          }
          function Qn(t, e) {
            var r = qa(t);
            return Us(r, an(e, 0, r.length));
          }
          function Zn(t, e, n, i) {
            if (!ea(t)) return t;
            for (var s = -1, o = (e = mi(e, t)).length, a = o - 1, c = t; null != c && ++s < o; ) {
              var u = Ds(e[s]), h = n;
              if ("__proto__" === u || "constructor" === u || "prototype" === u) return t;
              if (s != a) {
                var l = c[u];
                (h = i ? i(l, u, c) : r) === r && (h = ea(l) ? l : _s(e[s + 1]) ? [] : {});
              }
              tn(c, u, h), c = c[u];
            }
            return t;
          }
          var ti = Nr ? function(t, e) {
            return Nr.set(t, e), t;
          } : ic, ei = re ? function(t, e) {
            return re(t, "toString", {
              configurable: !0,
              enumerable: !1,
              value: ec(e),
              writable: !0
            });
          } : ic;
          function ri(t) {
            return Us(qa(t));
          }
          function ni(t, e, r) {
            var n = -1, i = t.length;
            e < 0 && (e = -e > i ? 0 : i + e), (r = r > i ? i : r) < 0 && (r += i), i = e > r ? 0 : r - e >>> 0, e >>>= 0;
            for (var s = st(i); ++n < i; ) s[n] = t[n + e];
            return s;
          }
          function ii(t, e) {
            var r;
            return fn(t, (function(t, n, i) {
              return !(r = e(t, n, i));
            })), !!r;
          }
          function si(t, e, r) {
            var n = 0, i = null == t ? n : t.length;
            if ("number" == typeof e && e == e && i <= 2147483647) {
              for (;n < i; ) {
                var s = n + i >>> 1, o = t[s];
                null !== o && !ua(o) && (r ? o <= e : o < e) ? n = s + 1 : i = s;
              }
              return i;
            }
            return oi(t, e, ic, r);
          }
          function oi(t, e, n, i) {
            var s = 0, o = null == t ? 0 : t.length;
            if (0 === o) return 0;
            for (var a = (e = n(e)) != e, c = null === e, u = ua(e), h = e === r; s < o; ) {
              var l = ge((s + o) / 2), f = n(t[l]), p = f !== r, d = null === f, g = f == f, y = ua(f);
              if (a) var v = i || g; else v = h ? g && (i || p) : c ? g && p && (i || !d) : u ? g && p && !d && (i || !y) : !d && !y && (i ? f <= e : f < e);
              v ? s = l + 1 : o = l;
            }
            return _r(o, 4294967294);
          }
          function ai(t, e) {
            for (var r = -1, n = t.length, i = 0, s = []; ++r < n; ) {
              var o = t[r], a = e ? e(o) : o;
              if (!r || !qo(a, c)) {
                var c = a;
                s[i++] = 0 === o ? 0 : o;
              }
            }
            return s;
          }
          function ci(t) {
            return "number" == typeof t ? t : ua(t) ? p : +t;
          }
          function ui(t) {
            if ("string" == typeof t) return t;
            if (Ko(t)) return Ce(t, ui) + "";
            if (ua(t)) return kr ? kr.call(t) : "";
            var e = t + "";
            return "0" == e && 1 / t == -l ? "-0" : e;
          }
          function hi(t, e, r) {
            var n = -1, i = Te, s = t.length, o = !0, a = [], c = a;
            if (r) o = !1, i = je; else if (s >= 200) {
              var u = e ? null : Yi(t);
              if (u) return hr(u);
              o = !1, i = Ze, c = new Wr;
            } else c = e ? [] : a;
            t: for (;++n < s; ) {
              var h = t[n], l = e ? e(h) : h;
              if (h = r || 0 !== h ? h : 0, o && l == l) {
                for (var f = c.length; f--; ) if (c[f] === l) continue t;
                e && c.push(l), a.push(h);
              } else i(c, l, r) || (c !== a && c.push(l), a.push(h));
            }
            return a;
          }
          function li(t, e) {
            return null == (t = xs(t, e = mi(e, t))) || delete t[Ds(Js(e))];
          }
          function fi(t, e, r, n) {
            return Zn(t, e, r(Sn(t, e)), n);
          }
          function pi(t, e, r, n) {
            for (var i = t.length, s = n ? i : -1; (n ? s-- : ++s < i) && e(t[s], s, t); ) ;
            return r ? ni(t, n ? 0 : s, n ? s + 1 : i) : ni(t, n ? s + 1 : 0, n ? i : s);
          }
          function di(t, e) {
            var r = t;
            return r instanceof Br && (r = r.value()), Ue(e, (function(t, e) {
              return e.func.apply(e.thisArg, Le([ t ], e.args));
            }), r);
          }
          function gi(t, e, r) {
            var n = t.length;
            if (n < 2) return n ? hi(t[0]) : [];
            for (var i = -1, s = st(n); ++i < n; ) for (var o = t[i], a = -1; ++a < n; ) a != i && (s[i] = ln(s[i] || o, t[a], e, r));
            return hi(vn(s, 1), e, r);
          }
          function yi(t, e, n) {
            for (var i = -1, s = t.length, o = e.length, a = {}; ++i < s; ) {
              var c = i < o ? e[i] : r;
              n(a, t[i], c);
            }
            return a;
          }
          function vi(t) {
            return Go(t) ? t : [];
          }
          function _i(t) {
            return "function" == typeof t ? t : ic;
          }
          function mi(t, e) {
            return Ko(t) ? t : bs(t, e) ? [ t ] : Ms(ma(t));
          }
          var bi = Jn;
          function wi(t, e, n) {
            var i = t.length;
            return n = n === r ? i : n, !e && n >= i ? t : ni(t, e, n);
          }
          var Ei = ce || function(t) {
            return pe.clearTimeout(t);
          };
          function Si(t, e) {
            if (e) return t.slice();
            var r = t.length, n = Kt ? Kt(r) : new t.constructor(r);
            return t.copy(n), n;
          }
          function Oi(t) {
            var e = new t.constructor(t.byteLength);
            return new Vt(e).set(new Vt(t)), e;
          }
          function Ii(t, e) {
            var r = e ? Oi(t.buffer) : t.buffer;
            return new t.constructor(r, t.byteOffset, t.length);
          }
          function Pi(t, e) {
            if (t !== e) {
              var n = t !== r, i = null === t, s = t == t, o = ua(t), a = e !== r, c = null === e, u = e == e, h = ua(e);
              if (!c && !h && !o && t > e || o && a && u && !c && !h || i && a && u || !n && u || !s) return 1;
              if (!i && !o && !h && t < e || h && n && s && !i && !o || c && n && s || !a && s || !u) return -1;
            }
            return 0;
          }
          function xi(t, e, r, n) {
            for (var i = -1, s = t.length, o = r.length, a = -1, c = e.length, u = vr(s - o, 0), h = st(c + u), l = !n; ++a < c; ) h[a] = e[a];
            for (;++i < o; ) (l || i < s) && (h[r[i]] = t[i]);
            for (;u--; ) h[a++] = t[i++];
            return h;
          }
          function Ai(t, e, r, n) {
            for (var i = -1, s = t.length, o = -1, a = r.length, c = -1, u = e.length, h = vr(s - a, 0), l = st(h + u), f = !n; ++i < h; ) l[i] = t[i];
            for (var p = i; ++c < u; ) l[p + c] = e[c];
            for (;++o < a; ) (f || i < s) && (l[p + r[o]] = t[i++]);
            return l;
          }
          function Ni(t, e) {
            var r = -1, n = t.length;
            for (e || (e = st(n)); ++r < n; ) e[r] = t[r];
            return e;
          }
          function Ri(t, e, n, i) {
            var s = !n;
            n || (n = {});
            for (var o = -1, a = e.length; ++o < a; ) {
              var c = e[o], u = i ? i(n[c], t[c], c, n, t) : r;
              u === r && (u = t[c]), s ? sn(n, c, u) : tn(n, c, u);
            }
            return n;
          }
          function Ti(t, e) {
            return function(r, n) {
              var i = Ko(r) ? Pe : rn, s = e ? e() : {};
              return i(r, t, cs(n, 2), s);
            };
          }
          function ji(t) {
            return Jn((function(e, n) {
              var i = -1, s = n.length, o = s > 1 ? n[s - 1] : r, a = s > 2 ? n[2] : r;
              for (o = t.length > 3 && "function" == typeof o ? (s--, o) : r, a && ms(n[0], n[1], a) && (o = s < 3 ? r : o, s = 1), e = Pt(e); ++i < s; ) {
                var c = n[i];
                c && t(e, c, i, o);
              }
              return e;
            }));
          }
          function Ci(t, e) {
            return function(r, n) {
              if (null == r) return r;
              if (!Wo(r)) return t(r, n);
              for (var i = r.length, s = e ? i : -1, o = Pt(r); (e ? s-- : ++s < i) && !1 !== n(o[s], s, o); ) ;
              return r;
            };
          }
          function Li(t) {
            return function(e, r, n) {
              for (var i = -1, s = Pt(e), o = n(e), a = o.length; a--; ) {
                var c = o[t ? a : ++i];
                if (!1 === r(s[c], c, s)) break;
              }
              return e;
            };
          }
          function Ui(t) {
            return function(e) {
              var n = or(e = ma(e)) ? fr(e) : r, i = n ? n[0] : e.charAt(0), s = n ? wi(n, 1).join("") : e.slice(1);
              return i[t]() + s;
            };
          }
          function Mi(t) {
            return function(e) {
              return Ue(Qa(Va(e).replace(Qt, "")), t, "");
            };
          }
          function Di(t) {
            return function() {
              var e = arguments;
              switch (e.length) {
               case 0:
                return new t;

               case 1:
                return new t(e[0]);

               case 2:
                return new t(e[0], e[1]);

               case 3:
                return new t(e[0], e[1], e[2]);

               case 4:
                return new t(e[0], e[1], e[2], e[3]);

               case 5:
                return new t(e[0], e[1], e[2], e[3], e[4]);

               case 6:
                return new t(e[0], e[1], e[2], e[3], e[4], e[5]);

               case 7:
                return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
              }
              var r = $r(t.prototype), n = t.apply(r, e);
              return ea(n) ? n : r;
            };
          }
          function ki(t) {
            return function(e, n, i) {
              var s = Pt(e);
              if (!Wo(e)) {
                var o = cs(n, 3);
                e = ja(e), n = function(t) {
                  return o(s[t], t, s);
                };
              }
              var a = t(e, n, i);
              return a > -1 ? s[o ? e[a] : a] : r;
            };
          }
          function zi(t) {
            return rs((function(e) {
              var i = e.length, s = i, o = Hr.prototype.thru;
              for (t && e.reverse(); s--; ) {
                var a = e[s];
                if ("function" != typeof a) throw new Nt(n);
                if (o && !c && "wrapper" == os(a)) var c = new Hr([], !0);
              }
              for (s = c ? s : i; ++s < i; ) {
                var u = os(a = e[s]), h = "wrapper" == u ? ss(a) : r;
                c = h && ws(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9] ? c[os(h[0])].apply(c, h[3]) : 1 == a.length && ws(a) ? c[u]() : c.thru(a);
              }
              return function() {
                var t = arguments, r = t[0];
                if (c && 1 == t.length && Ko(r)) return c.plant(r).value();
                for (var n = 0, s = i ? e[n].apply(this, t) : r; ++n < i; ) s = e[n].call(this, s);
                return s;
              };
            }));
          }
          function $i(t, e, n, i, s, o, a, c, h, l) {
            var f = e & u, p = 1 & e, d = 2 & e, g = 24 & e, y = 512 & e, v = d ? r : Di(t);
            return function r() {
              for (var u = arguments.length, _ = st(u), m = u; m--; ) _[m] = arguments[m];
              if (g) var b = as(r), w = rr(_, b);
              if (i && (_ = xi(_, i, s, g)), o && (_ = Ai(_, o, a, g)), u -= w, g && u < l) {
                var E = ur(_, b);
                return Wi(t, e, $i, r.placeholder, n, _, E, c, h, l - u);
              }
              var S = p ? n : this, O = d ? S[t] : t;
              return u = _.length, c ? _ = As(_, c) : y && u > 1 && _.reverse(), f && h < u && (_.length = h), this && this !== pe && this instanceof r && (O = v || Di(O)), 
              O.apply(S, _);
            };
          }
          function qi(t, e) {
            return function(r, n) {
              return function(t, e, r, n) {
                return bn(t, (function(t, i, s) {
                  e(n, r(t), i, s);
                })), n;
              }(r, t, e(n), {});
            };
          }
          function Hi(t, e) {
            return function(n, i) {
              var s;
              if (n === r && i === r) return e;
              if (n !== r && (s = n), i !== r) {
                if (s === r) return i;
                "string" == typeof n || "string" == typeof i ? (n = ui(n), i = ui(i)) : (n = ci(n), i = ci(i)), s = t(n, i);
              }
              return s;
            };
          }
          function Bi(t) {
            return rs((function(e) {
              return e = Ce(e, Xe(cs())), Jn((function(r) {
                var n = this;
                return t(e, (function(t) {
                  return Ie(t, n, r);
                }));
              }));
            }));
          }
          function Vi(t, e) {
            var n = (e = e === r ? " " : ui(e)).length;
            if (n < 2) return n ? Yn(e, t) : e;
            var i = Yn(e, de(t / lr(e)));
            return or(e) ? wi(fr(i), 0, t).join("") : i.slice(0, t);
          }
          function Ki(t) {
            return function(e, n, i) {
              return i && "number" != typeof i && ms(e, n, i) && (n = i = r), e = da(e), n === r ? (n = e, e = 0) : n = da(n), function(t, e, r, n) {
                for (var i = -1, s = vr(de((e - t) / (r || 1)), 0), o = st(s); s--; ) o[n ? s : ++i] = t, t += r;
                return o;
              }(e, n, i = i === r ? e < n ? 1 : -1 : da(i), t);
            };
          }
          function Fi(t) {
            return function(e, r) {
              return "string" == typeof e && "string" == typeof r || (e = va(e), r = va(r)), t(e, r);
            };
          }
          function Wi(t, e, n, i, s, o, u, h, l, f) {
            var p = 8 & e;
            e |= p ? a : c, 4 & (e &= ~(p ? c : a)) || (e &= -4);
            var d = [ t, e, s, p ? o : r, p ? u : r, p ? r : o, p ? r : u, h, l, f ], g = n.apply(r, d);
            return ws(t) && Rs(g, d), g.placeholder = i, Cs(g, t, e);
          }
          function Gi(t) {
            var e = It[t];
            return function(t, r) {
              if (t = va(t), (r = null == r ? 0 : _r(ga(r), 292)) && ke(t)) {
                var n = (ma(t) + "e").split("e");
                return +((n = (ma(e(n[0] + "e" + (+n[1] + r))) + "e").split("e"))[0] + "e" + (+n[1] - r));
              }
              return e(t);
            };
          }
          var Yi = Pr && 1 / hr(new Pr([ , -0 ]))[1] == l ? function(t) {
            return new Pr(t);
          } : uc;
          function Ji(t) {
            return function(e) {
              var r = ds(e);
              return r == S ? ar(e) : r == A ? function(t) {
                var e = -1, r = Array(t.size);
                return t.forEach((function(t) {
                  r[++e] = [ t, t ];
                })), r;
              }(e) : function(t, e) {
                return Ce(e, (function(e) {
                  return [ e, t[e] ];
                }));
              }(e, t(e));
            };
          }
          function Xi(t, e, i, l, f, p, d, g) {
            var y = 2 & e;
            if (!y && "function" != typeof t) throw new Nt(n);
            var v = l ? l.length : 0;
            if (v || (e &= -97, l = f = r), d = d === r ? d : vr(ga(d), 0), g = g === r ? g : ga(g), v -= f ? f.length : 0, e & c) {
              var _ = l, m = f;
              l = f = r;
            }
            var b = y ? r : ss(t), w = [ t, e, i, l, f, _, m, p, d, g ];
            if (b && function(t, e) {
              var r = t[1], n = e[1], i = r | n, o = i < 131, a = n == u && 8 == r || n == u && r == h && t[7].length <= e[8] || 384 == n && e[7].length <= e[8] && 8 == r;
              if (!o && !a) return t;
              1 & n && (t[2] = e[2], i |= 1 & r ? 0 : 4);
              var c = e[3];
              if (c) {
                var l = t[3];
                t[3] = l ? xi(l, c, e[4]) : c, t[4] = l ? ur(t[3], s) : e[4];
              }
              (c = e[5]) && (l = t[5], t[5] = l ? Ai(l, c, e[6]) : c, t[6] = l ? ur(t[5], s) : e[6]), (c = e[7]) && (t[7] = c), n & u && (t[8] = null == t[8] ? e[8] : _r(t[8], e[8])), 
              null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = i;
            }(w, b), t = w[0], e = w[1], i = w[2], l = w[3], f = w[4], !(g = w[9] = w[9] === r ? y ? 0 : t.length : vr(w[9] - v, 0)) && 24 & e && (e &= -25), 
            e && 1 != e) E = 8 == e || e == o ? function(t, e, n) {
              var i = Di(t);
              return function s() {
                for (var o = arguments.length, a = st(o), c = o, u = as(s); c--; ) a[c] = arguments[c];
                var h = o < 3 && a[0] !== u && a[o - 1] !== u ? [] : ur(a, u);
                return (o -= h.length) < n ? Wi(t, e, $i, s.placeholder, r, a, h, r, r, n - o) : Ie(this && this !== pe && this instanceof s ? i : t, this, a);
              };
            }(t, e, g) : e != a && 33 != e || f.length ? $i.apply(r, w) : function(t, e, r, n) {
              var i = 1 & e, s = Di(t);
              return function e() {
                for (var o = -1, a = arguments.length, c = -1, u = n.length, h = st(u + a), l = this && this !== pe && this instanceof e ? s : t; ++c < u; ) h[c] = n[c];
                for (;a--; ) h[c++] = arguments[++o];
                return Ie(l, i ? r : this, h);
              };
            }(t, e, i, l); else var E = function(t, e, r) {
              var n = 1 & e, i = Di(t);
              return function e() {
                return (this && this !== pe && this instanceof e ? i : t).apply(n ? r : this, arguments);
              };
            }(t, e, i);
            return Cs((b ? ti : Rs)(E, w), t, e);
          }
          function Qi(t, e, n, i) {
            return t === r || qo(t, jt[n]) && !Ut.call(i, n) ? e : t;
          }
          function Zi(t, e, n, i, s, o) {
            return ea(t) && ea(e) && (o.set(e, t), Hn(t, e, r, Zi, o), o.delete(e)), t;
          }
          function ts(t) {
            return sa(t) ? r : t;
          }
          function es(t, e, n, i, s, o) {
            var a = 1 & n, c = t.length, u = e.length;
            if (c != u && !(a && u > c)) return !1;
            var h = o.get(t), l = o.get(e);
            if (h && l) return h == e && l == t;
            var f = -1, p = !0, d = 2 & n ? new Wr : r;
            for (o.set(t, e), o.set(e, t); ++f < c; ) {
              var g = t[f], y = e[f];
              if (i) var v = a ? i(y, g, f, e, t, o) : i(g, y, f, t, e, o);
              if (v !== r) {
                if (v) continue;
                p = !1;
                break;
              }
              if (d) {
                if (!De(e, (function(t, e) {
                  if (!Ze(d, e) && (g === t || s(g, t, n, i, o))) return d.push(e);
                }))) {
                  p = !1;
                  break;
                }
              } else if (g !== y && !s(g, y, n, i, o)) {
                p = !1;
                break;
              }
            }
            return o.delete(t), o.delete(e), p;
          }
          function rs(t) {
            return js(Ps(t, r, Ks), t + "");
          }
          function ns(t) {
            return On(t, ja, fs);
          }
          function is(t) {
            return On(t, Ca, ps);
          }
          var ss = Nr ? function(t) {
            return Nr.get(t);
          } : uc;
          function os(t) {
            for (var e = t.name + "", r = Rr[e], n = Ut.call(Rr, e) ? r.length : 0; n--; ) {
              var i = r[n], s = i.func;
              if (null == s || s == t) return i.name;
            }
            return e;
          }
          function as(t) {
            return (Ut.call(zr, "placeholder") ? zr : t).placeholder;
          }
          function cs() {
            var t = zr.iteratee || sc;
            return t = t === sc ? Un : t, arguments.length ? t(arguments[0], arguments[1]) : t;
          }
          function us(t, e) {
            var r = t.__data__;
            return function(t) {
              var e = typeof t;
              return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
            }(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
          }
          function hs(t) {
            for (var e = ja(t), r = e.length; r--; ) {
              var n = e[r], i = t[n];
              e[r] = [ n, i, Os(i) ];
            }
            return e;
          }
          function ls(t, e) {
            var n = function(t, e) {
              return null == t ? r : t[e];
            }(t, e);
            return Ln(n) ? n : r;
          }
          var fs = ve ? function(t) {
            return null == t ? [] : (t = Pt(t), Re(ve(t), (function(e) {
              return Gt.call(t, e);
            })));
          } : yc, ps = ve ? function(t) {
            for (var e = []; t; ) Le(e, fs(t)), t = Ft(t);
            return e;
          } : yc, ds = In;
          function gs(t, e, r) {
            for (var n = -1, i = (e = mi(e, t)).length, s = !1; ++n < i; ) {
              var o = Ds(e[n]);
              if (!(s = null != t && r(t, o))) break;
              t = t[o];
            }
            return s || ++n != i ? s : !!(i = null == t ? 0 : t.length) && ta(i) && _s(o, i) && (Ko(t) || Vo(t));
          }
          function ys(t) {
            return "function" != typeof t.constructor || Ss(t) ? {} : $r(Ft(t));
          }
          function vs(t) {
            return Ko(t) || Vo(t) || !!(Jt && t && t[Jt]);
          }
          function _s(t, e) {
            var r = typeof t;
            return !!(e = e ?? f) && ("number" == r || "symbol" != r && _t.test(t)) && t > -1 && t % 1 == 0 && t < e;
          }
          function ms(t, e, r) {
            if (!ea(r)) return !1;
            var n = typeof e;
            return !!("number" == n ? Wo(r) && _s(e, r.length) : "string" == n && e in r) && qo(r[e], t);
          }
          function bs(t, e) {
            if (Ko(t)) return !1;
            var r = typeof t;
            return !("number" != r && "symbol" != r && "boolean" != r && null != t && !ua(t)) || (tt.test(t) || !Z.test(t) || null != e && t in Pt(e));
          }
          function ws(t) {
            var e = os(t), r = zr[e];
            if ("function" != typeof r || !(e in Br.prototype)) return !1;
            if (t === r) return !0;
            var n = ss(r);
            return !!n && t === n[0];
          }
          (Sr && ds(new Sr(new ArrayBuffer(1))) != C || Or && ds(new Or) != S || Ir && ds(Ir.resolve()) != P || Pr && ds(new Pr) != A || xr && ds(new xr) != T) && (ds = function(t) {
            var e = In(t), n = e == I ? t.constructor : r, i = n ? ks(n) : "";
            if (i) switch (i) {
             case Tr:
              return C;

             case jr:
              return S;

             case Cr:
              return P;

             case Lr:
              return A;

             case Ur:
              return T;
            }
            return e;
          });
          var Es = Ct ? Qo : vc;
          function Ss(t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || jt);
          }
          function Os(t) {
            return t == t && !ea(t);
          }
          function Is(t, e) {
            return function(n) {
              return null != n && (n[t] === e && (e !== r || t in Pt(n)));
            };
          }
          function Ps(t, e, n) {
            return e = vr(e === r ? t.length - 1 : e, 0), function() {
              for (var r = arguments, i = -1, s = vr(r.length - e, 0), o = st(s); ++i < s; ) o[i] = r[e + i];
              i = -1;
              for (var a = st(e + 1); ++i < e; ) a[i] = r[i];
              return a[e] = n(o), Ie(t, this, a);
            };
          }
          function xs(t, e) {
            return e.length < 2 ? t : Sn(t, ni(e, 0, -1));
          }
          function As(t, e) {
            for (var n = t.length, i = _r(e.length, n), s = Ni(t); i--; ) {
              var o = e[i];
              t[i] = _s(o, n) ? s[o] : r;
            }
            return t;
          }
          function Ns(t, e) {
            if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e];
          }
          var Rs = Ls(ti), Ts = fe || function(t, e) {
            return pe.setTimeout(t, e);
          }, js = Ls(ei);
          function Cs(t, e, r) {
            var n = e + "";
            return js(t, function(t, e) {
              var r = e.length;
              if (!r) return t;
              var n = r - 1;
              return e[n] = (r > 1 ? "& " : "") + e[n], e = e.join(r > 2 ? ", " : " "), t.replace(ot, "{\n/* [wrapped with " + e + "] */\n");
            }(n, function(t, e) {
              return xe(g, (function(r) {
                var n = "_." + r[0];
                e & r[1] && !Te(t, n) && t.push(n);
              })), t.sort();
            }(function(t) {
              var e = t.match(at);
              return e ? e[1].split(ct) : [];
            }(n), r)));
          }
          function Ls(t) {
            var e = 0, n = 0;
            return function() {
              var i = mr(), s = 16 - (i - n);
              if (n = i, s > 0) {
                if (++e >= 800) return arguments[0];
              } else e = 0;
              return t.apply(r, arguments);
            };
          }
          function Us(t, e) {
            var n = -1, i = t.length, s = i - 1;
            for (e = e === r ? i : e; ++n < e; ) {
              var o = Gn(n, s), a = t[o];
              t[o] = t[n], t[n] = a;
            }
            return t.length = e, t;
          }
          var Ms = function(t) {
            var e = Uo(t, (function(t) {
              return 500 === r.size && r.clear(), t;
            })), r = e.cache;
            return e;
          }((function(t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""), t.replace(et, (function(t, r, n, i) {
              e.push(n ? i.replace(lt, "$1") : r || t);
            })), e;
          }));
          function Ds(t) {
            if ("string" == typeof t || ua(t)) return t;
            var e = t + "";
            return "0" == e && 1 / t == -l ? "-0" : e;
          }
          function ks(t) {
            if (null != t) {
              try {
                return Lt.call(t);
              } catch {}
              try {
                return t + "";
              } catch {}
            }
            return "";
          }
          function zs(t) {
            if (t instanceof Br) return t.clone();
            var e = new Hr(t.__wrapped__, t.__chain__);
            return e.__actions__ = Ni(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e;
          }
          var $s = Jn((function(t, e) {
            return Go(t) ? ln(t, vn(e, 1, Go, !0)) : [];
          })), qs = Jn((function(t, e) {
            var n = Js(e);
            return Go(n) && (n = r), Go(t) ? ln(t, vn(e, 1, Go, !0), cs(n, 2)) : [];
          })), Hs = Jn((function(t, e) {
            var n = Js(e);
            return Go(n) && (n = r), Go(t) ? ln(t, vn(e, 1, Go, !0), r, n) : [];
          }));
          function Bs(t, e, r) {
            var n = null == t ? 0 : t.length;
            if (!n) return -1;
            var i = null == r ? 0 : ga(r);
            return i < 0 && (i = vr(n + i, 0)), $e(t, cs(e, 3), i);
          }
          function Vs(t, e, n) {
            var i = null == t ? 0 : t.length;
            if (!i) return -1;
            var s = i - 1;
            return n !== r && (s = ga(n), s = n < 0 ? vr(i + s, 0) : _r(s, i - 1)), $e(t, cs(e, 3), s, !0);
          }
          function Ks(t) {
            return (null == t ? 0 : t.length) ? vn(t, 1) : [];
          }
          function Fs(t) {
            return t && t.length ? t[0] : r;
          }
          var Ws = Jn((function(t) {
            var e = Ce(t, vi);
            return e.length && e[0] === t[0] ? Nn(e) : [];
          })), Gs = Jn((function(t) {
            var e = Js(t), n = Ce(t, vi);
            return e === Js(n) ? e = r : n.pop(), n.length && n[0] === t[0] ? Nn(n, cs(e, 2)) : [];
          })), Ys = Jn((function(t) {
            var e = Js(t), n = Ce(t, vi);
            return (e = "function" == typeof e ? e : r) && n.pop(), n.length && n[0] === t[0] ? Nn(n, r, e) : [];
          }));
          function Js(t) {
            var e = null == t ? 0 : t.length;
            return e ? t[e - 1] : r;
          }
          var Xs = Jn(Qs);
          function Qs(t, e) {
            return t && t.length && e && e.length ? Fn(t, e) : t;
          }
          var Zs = rs((function(t, e) {
            var r = null == t ? 0 : t.length, n = on(t, e);
            return Wn(t, Ce(e, (function(t) {
              return _s(t, r) ? +t : t;
            })).sort(Pi)), n;
          }));
          function to(t) {
            return null == t ? t : Er.call(t);
          }
          var eo = Jn((function(t) {
            return hi(vn(t, 1, Go, !0));
          })), ro = Jn((function(t) {
            var e = Js(t);
            return Go(e) && (e = r), hi(vn(t, 1, Go, !0), cs(e, 2));
          })), no = Jn((function(t) {
            var e = Js(t);
            return e = "function" == typeof e ? e : r, hi(vn(t, 1, Go, !0), r, e);
          }));
          function io(t) {
            if (!t || !t.length) return [];
            var e = 0;
            return t = Re(t, (function(t) {
              if (Go(t)) return e = vr(t.length, e), !0;
            })), Ye(e, (function(e) {
              return Ce(t, Ke(e));
            }));
          }
          function so(t, e) {
            if (!t || !t.length) return [];
            var n = io(t);
            return null == e ? n : Ce(n, (function(t) {
              return Ie(e, r, t);
            }));
          }
          var oo = Jn((function(t, e) {
            return Go(t) ? ln(t, e) : [];
          })), ao = Jn((function(t) {
            return gi(Re(t, Go));
          })), co = Jn((function(t) {
            var e = Js(t);
            return Go(e) && (e = r), gi(Re(t, Go), cs(e, 2));
          })), uo = Jn((function(t) {
            var e = Js(t);
            return e = "function" == typeof e ? e : r, gi(Re(t, Go), r, e);
          })), ho = Jn(io);
          var lo = Jn((function(t) {
            var e = t.length, n = e > 1 ? t[e - 1] : r;
            return n = "function" == typeof n ? (t.pop(), n) : r, so(t, n);
          }));
          function fo(t) {
            var e = zr(t);
            return e.__chain__ = !0, e;
          }
          function po(t, e) {
            return e(t);
          }
          var go = rs((function(t) {
            var e = t.length, n = e ? t[0] : 0, i = this.__wrapped__, s = function(e) {
              return on(e, t);
            };
            return !(e > 1 || this.__actions__.length) && i instanceof Br && _s(n) ? ((i = i.slice(n, +n + (e ? 1 : 0))).__actions__.push({
              func: po,
              args: [ s ],
              thisArg: r
            }), new Hr(i, this.__chain__).thru((function(t) {
              return e && !t.length && t.push(r), t;
            }))) : this.thru(s);
          }));
          var yo = Ti((function(t, e, r) {
            Ut.call(t, r) ? ++t[r] : sn(t, r, 1);
          }));
          var vo = ki(Bs), _o = ki(Vs);
          function mo(t, e) {
            return (Ko(t) ? xe : fn)(t, cs(e, 3));
          }
          function bo(t, e) {
            return (Ko(t) ? Ae : pn)(t, cs(e, 3));
          }
          var wo = Ti((function(t, e, r) {
            Ut.call(t, r) ? t[r].push(e) : sn(t, r, [ e ]);
          }));
          var Eo = Jn((function(t, e, r) {
            var n = -1, i = "function" == typeof e, s = Wo(t) ? st(t.length) : [];
            return fn(t, (function(t) {
              s[++n] = i ? Ie(e, t, r) : Rn(t, e, r);
            })), s;
          })), So = Ti((function(t, e, r) {
            sn(t, r, e);
          }));
          function Oo(t, e) {
            return (Ko(t) ? Ce : zn)(t, cs(e, 3));
          }
          var Io = Ti((function(t, e, r) {
            t[r ? 0 : 1].push(e);
          }), (function() {
            return [ [], [] ];
          }));
          var Po = Jn((function(t, e) {
            if (null == t) return [];
            var r = e.length;
            return r > 1 && ms(t, e[0], e[1]) ? e = [] : r > 2 && ms(e[0], e[1], e[2]) && (e = [ e[0] ]), Vn(t, vn(e, 1), []);
          })), xo = le || function() {
            return pe.Date.now();
          };
          function Ao(t, e, n) {
            return e = n ? r : e, e = t && null == e ? t.length : e, Xi(t, u, r, r, r, r, e);
          }
          function No(t, e) {
            var i;
            if ("function" != typeof e) throw new Nt(n);
            return t = ga(t), function() {
              return --t > 0 && (i = e.apply(this, arguments)), t <= 1 && (e = r), i;
            };
          }
          var Ro = Jn((function(t, e, r) {
            var n = 1;
            if (r.length) {
              var i = ur(r, as(Ro));
              n |= a;
            }
            return Xi(t, n, e, r, i);
          })), To = Jn((function(t, e, r) {
            var n = 3;
            if (r.length) {
              var i = ur(r, as(To));
              n |= a;
            }
            return Xi(e, n, t, r, i);
          }));
          function jo(t, e, i) {
            var s, o, a, c, u, h, l = 0, f = !1, p = !1, d = !0;
            if ("function" != typeof t) throw new Nt(n);
            function g(e) {
              var n = s, i = o;
              return s = o = r, l = e, c = t.apply(i, n);
            }
            function y(t) {
              return l = t, u = Ts(_, e), f ? g(t) : c;
            }
            function v(t) {
              var n = t - h;
              return h === r || n >= e || n < 0 || p && t - l >= a;
            }
            function _() {
              var t = xo();
              if (v(t)) return m(t);
              u = Ts(_, function(t) {
                var r = e - (t - h);
                return p ? _r(r, a - (t - l)) : r;
              }(t));
            }
            function m(t) {
              return u = r, d && s ? g(t) : (s = o = r, c);
            }
            function b() {
              var t = xo(), n = v(t);
              if (s = arguments, o = this, h = t, n) {
                if (u === r) return y(h);
                if (p) return Ei(u), u = Ts(_, e), g(h);
              }
              return u === r && (u = Ts(_, e)), c;
            }
            return e = va(e) || 0, ea(i) && (f = !!i.leading, a = (p = "maxWait" in i) ? vr(va(i.maxWait) || 0, e) : a, d = "trailing" in i ? !!i.trailing : d), 
            b.cancel = function() {
              u !== r && Ei(u), l = 0, s = h = o = u = r;
            }, b.flush = function() {
              return u === r ? c : m(xo());
            }, b;
          }
          var Co = Jn((function(t, e) {
            return hn(t, 1, e);
          })), Lo = Jn((function(t, e, r) {
            return hn(t, va(e) || 0, r);
          }));
          function Uo(t, e) {
            if ("function" != typeof t || null != e && "function" != typeof e) throw new Nt(n);
            var r = function() {
              var n = arguments, i = e ? e.apply(this, n) : n[0], s = r.cache;
              if (s.has(i)) return s.get(i);
              var o = t.apply(this, n);
              return r.cache = s.set(i, o) || s, o;
            };
            return r.cache = new (Uo.Cache || Fr), r;
          }
          function Mo(t) {
            if ("function" != typeof t) throw new Nt(n);
            return function() {
              var e = arguments;
              switch (e.length) {
               case 0:
                return !t.call(this);

               case 1:
                return !t.call(this, e[0]);

               case 2:
                return !t.call(this, e[0], e[1]);

               case 3:
                return !t.call(this, e[0], e[1], e[2]);
              }
              return !t.apply(this, e);
            };
          }
          Uo.Cache = Fr;
          var Do = bi((function(t, e) {
            var r = (e = 1 == e.length && Ko(e[0]) ? Ce(e[0], Xe(cs())) : Ce(vn(e, 1), Xe(cs()))).length;
            return Jn((function(n) {
              for (var i = -1, s = _r(n.length, r); ++i < s; ) n[i] = e[i].call(this, n[i]);
              return Ie(t, this, n);
            }));
          })), ko = Jn((function(t, e) {
            var n = ur(e, as(ko));
            return Xi(t, a, r, e, n);
          })), zo = Jn((function(t, e) {
            var n = ur(e, as(zo));
            return Xi(t, c, r, e, n);
          })), $o = rs((function(t, e) {
            return Xi(t, h, r, r, r, e);
          }));
          function qo(t, e) {
            return t === e || t != t && e != e;
          }
          var Ho = Fi(Pn), Bo = Fi((function(t, e) {
            return t >= e;
          })), Vo = Tn(function() {
            return arguments;
          }()) ? Tn : function(t) {
            return ra(t) && Ut.call(t, "callee") && !Gt.call(t, "callee");
          }, Ko = st.isArray, Fo = me ? Xe(me) : function(t) {
            return ra(t) && In(t) == j;
          };
          function Wo(t) {
            return null != t && ta(t.length) && !Qo(t);
          }
          function Go(t) {
            return ra(t) && Wo(t);
          }
          var Yo = _e || vc, Jo = be ? Xe(be) : function(t) {
            return ra(t) && In(t) == m;
          };
          function Xo(t) {
            if (!ra(t)) return !1;
            var e = In(t);
            return e == b || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !sa(t);
          }
          function Qo(t) {
            if (!ea(t)) return !1;
            var e = In(t);
            return e == w || e == E || "[object AsyncFunction]" == e || "[object Proxy]" == e;
          }
          function Zo(t) {
            return "number" == typeof t && t == ga(t);
          }
          function ta(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= f;
          }
          function ea(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
          }
          function ra(t) {
            return null != t && "object" == typeof t;
          }
          var na = we ? Xe(we) : function(t) {
            return ra(t) && ds(t) == S;
          };
          function ia(t) {
            return "number" == typeof t || ra(t) && In(t) == O;
          }
          function sa(t) {
            if (!ra(t) || In(t) != I) return !1;
            var e = Ft(t);
            if (null === e) return !0;
            var r = Ut.call(e, "constructor") && e.constructor;
            return "function" == typeof r && r instanceof r && Lt.call(r) == zt;
          }
          var oa = Ee ? Xe(Ee) : function(t) {
            return ra(t) && In(t) == x;
          };
          var aa = Se ? Xe(Se) : function(t) {
            return ra(t) && ds(t) == A;
          };
          function ca(t) {
            return "string" == typeof t || !Ko(t) && ra(t) && In(t) == N;
          }
          function ua(t) {
            return "symbol" == typeof t || ra(t) && In(t) == R;
          }
          var ha = Oe ? Xe(Oe) : function(t) {
            return ra(t) && ta(t.length) && !!oe[In(t)];
          };
          var la = Fi(kn), fa = Fi((function(t, e) {
            return t <= e;
          }));
          function pa(t) {
            if (!t) return [];
            if (Wo(t)) return ca(t) ? fr(t) : Ni(t);
            if (Xt && t[Xt]) return function(t) {
              for (var e, r = []; !(e = t.next()).done; ) r.push(e.value);
              return r;
            }(t[Xt]());
            var e = ds(t);
            return (e == S ? ar : e == A ? hr : qa)(t);
          }
          function da(t) {
            return t ? (t = va(t)) === l || t === -l ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0;
          }
          function ga(t) {
            var e = da(t), r = e % 1;
            return e == e ? r ? e - r : e : 0;
          }
          function ya(t) {
            return t ? an(ga(t), 0, d) : 0;
          }
          function va(t) {
            if ("number" == typeof t) return t;
            if (ua(t)) return p;
            if (ea(t)) {
              var e = "function" == typeof t.valueOf ? t.valueOf() : t;
              t = ea(e) ? e + "" : e;
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = Je(t);
            var r = gt.test(t);
            return r || vt.test(t) ? he(t.slice(2), r ? 2 : 8) : dt.test(t) ? p : +t;
          }
          function _a(t) {
            return Ri(t, Ca(t));
          }
          function ma(t) {
            return null == t ? "" : ui(t);
          }
          var ba = ji((function(t, e) {
            if (Ss(e) || Wo(e)) Ri(e, ja(e), t); else for (var r in e) Ut.call(e, r) && tn(t, r, e[r]);
          })), wa = ji((function(t, e) {
            Ri(e, Ca(e), t);
          })), Ea = ji((function(t, e, r, n) {
            Ri(e, Ca(e), t, n);
          })), Sa = ji((function(t, e, r, n) {
            Ri(e, ja(e), t, n);
          })), Oa = rs(on);
          var Ia = Jn((function(t, e) {
            t = Pt(t);
            var n = -1, i = e.length, s = i > 2 ? e[2] : r;
            for (s && ms(e[0], e[1], s) && (i = 1); ++n < i; ) for (var o = e[n], a = Ca(o), c = -1, u = a.length; ++c < u; ) {
              var h = a[c], l = t[h];
              (l === r || qo(l, jt[h]) && !Ut.call(t, h)) && (t[h] = o[h]);
            }
            return t;
          })), Pa = Jn((function(t) {
            return t.push(r, Zi), Ie(Ua, r, t);
          }));
          function xa(t, e, n) {
            var i = null == t ? r : Sn(t, e);
            return i === r ? n : i;
          }
          function Aa(t, e) {
            return null != t && gs(t, e, An);
          }
          var Na = qi((function(t, e, r) {
            null != e && "function" != typeof e.toString && (e = kt.call(e)), t[e] = r;
          }), ec(ic)), Ra = qi((function(t, e, r) {
            null != e && "function" != typeof e.toString && (e = kt.call(e)), Ut.call(t, e) ? t[e].push(r) : t[e] = [ r ];
          }), cs), Ta = Jn(Rn);
          function ja(t) {
            return Wo(t) ? Yr(t) : Mn(t);
          }
          function Ca(t) {
            return Wo(t) ? Yr(t, !0) : Dn(t);
          }
          var La = ji((function(t, e, r) {
            Hn(t, e, r);
          })), Ua = ji((function(t, e, r, n) {
            Hn(t, e, r, n);
          })), Ma = rs((function(t, e) {
            var r = {};
            if (null == t) return r;
            var n = !1;
            e = Ce(e, (function(e) {
              return e = mi(e, t), n || (n = e.length > 1), e;
            })), Ri(t, is(t), r), n && (r = cn(r, 7, ts));
            for (var i = e.length; i--; ) li(r, e[i]);
            return r;
          }));
          var Da = rs((function(t, e) {
            return null == t ? {} : function(t, e) {
              return Kn(t, e, (function(e, r) {
                return Aa(t, r);
              }));
            }(t, e);
          }));
          function ka(t, e) {
            if (null == t) return {};
            var r = Ce(is(t), (function(t) {
              return [ t ];
            }));
            return e = cs(e), Kn(t, r, (function(t, r) {
              return e(t, r[0]);
            }));
          }
          var za = Ji(ja), $a = Ji(Ca);
          function qa(t) {
            return null == t ? [] : Qe(t, ja(t));
          }
          var Ha = Mi((function(t, e, r) {
            return e = e.toLowerCase(), t + (r ? Ba(e) : e);
          }));
          function Ba(t) {
            return Xa(ma(t).toLowerCase());
          }
          function Va(t) {
            return (t = ma(t)) && t.replace(mt, nr).replace(Zt, "");
          }
          var Ka = Mi((function(t, e, r) {
            return t + (r ? "-" : "") + e.toLowerCase();
          })), Fa = Mi((function(t, e, r) {
            return t + (r ? " " : "") + e.toLowerCase();
          })), Wa = Ui("toLowerCase");
          var Ga = Mi((function(t, e, r) {
            return t + (r ? "_" : "") + e.toLowerCase();
          }));
          var Ya = Mi((function(t, e, r) {
            return t + (r ? " " : "") + Xa(e);
          }));
          var Ja = Mi((function(t, e, r) {
            return t + (r ? " " : "") + e.toUpperCase();
          })), Xa = Ui("toUpperCase");
          function Qa(t, e, n) {
            return t = ma(t), (e = n ? r : e) === r ? function(t) {
              return ne.test(t);
            }(t) ? function(t) {
              return t.match(ee) || [];
            }(t) : function(t) {
              return t.match(ut) || [];
            }(t) : t.match(e) || [];
          }
          var Za = Jn((function(t, e) {
            try {
              return Ie(t, r, e);
            } catch (n) {
              return Xo(n) ? n : new St(n);
            }
          })), tc = rs((function(t, e) {
            return xe(e, (function(e) {
              e = Ds(e), sn(t, e, Ro(t[e], t));
            })), t;
          }));
          function ec(t) {
            return function() {
              return t;
            };
          }
          var rc = zi(), nc = zi(!0);
          function ic(t) {
            return t;
          }
          function sc(t) {
            return Un("function" == typeof t ? t : cn(t, 1));
          }
          var oc = Jn((function(t, e) {
            return function(r) {
              return Rn(r, t, e);
            };
          })), ac = Jn((function(t, e) {
            return function(r) {
              return Rn(t, r, e);
            };
          }));
          function cc(t, e, r) {
            var n = ja(e), i = En(e, n);
            null == r && (!ea(e) || !i.length && n.length) && (r = e, e = t, t = this, i = En(e, ja(e)));
            var s = !(ea(r) && "chain" in r && !r.chain), o = Qo(t);
            return xe(i, (function(r) {
              var n = e[r];
              t[r] = n, o && (t.prototype[r] = function() {
                var e = this.__chain__;
                if (s || e) {
                  var r = t(this.__wrapped__), i = r.__actions__ = Ni(this.__actions__);
                  return i.push({
                    func: n,
                    args: arguments,
                    thisArg: t
                  }), r.__chain__ = e, r;
                }
                return n.apply(t, Le([ this.value() ], arguments));
              });
            })), t;
          }
          function uc() {}
          var hc = Bi(Ce), lc = Bi(Ne), fc = Bi(De);
          function pc(t) {
            return bs(t) ? Ke(Ds(t)) : function(t) {
              return function(e) {
                return Sn(e, t);
              };
            }(t);
          }
          var dc = Ki(), gc = Ki(!0);
          function yc() {
            return [];
          }
          function vc() {
            return !1;
          }
          var _c = Hi((function(t, e) {
            return t + e;
          }), 0), mc = Gi("ceil"), bc = Hi((function(t, e) {
            return t / e;
          }), 1), wc = Gi("floor");
          var Ec = Hi((function(t, e) {
            return t * e;
          }), 1), Sc = Gi("round"), Oc = Hi((function(t, e) {
            return t - e;
          }), 0);
          return zr.after = function(t, e) {
            if ("function" != typeof e) throw new Nt(n);
            return t = ga(t), function() {
              if (--t < 1) return e.apply(this, arguments);
            };
          }, zr.ary = Ao, zr.assign = ba, zr.assignIn = wa, zr.assignInWith = Ea, zr.assignWith = Sa, zr.at = Oa, zr.before = No, 
          zr.bind = Ro, zr.bindAll = tc, zr.bindKey = To, zr.castArray = function() {
            if (!arguments.length) return [];
            var t = arguments[0];
            return Ko(t) ? t : [ t ];
          }, zr.chain = fo, zr.chunk = function(t, e, n) {
            e = (n ? ms(t, e, n) : e === r) ? 1 : vr(ga(e), 0);
            var i = null == t ? 0 : t.length;
            if (!i || e < 1) return [];
            for (var s = 0, o = 0, a = st(de(i / e)); s < i; ) a[o++] = ni(t, s, s += e);
            return a;
          }, zr.compact = function(t) {
            for (var e = -1, r = null == t ? 0 : t.length, n = 0, i = []; ++e < r; ) {
              var s = t[e];
              s && (i[n++] = s);
            }
            return i;
          }, zr.concat = function() {
            var t = arguments.length;
            if (!t) return [];
            for (var e = st(t - 1), r = arguments[0], n = t; n--; ) e[n - 1] = arguments[n];
            return Le(Ko(r) ? Ni(r) : [ r ], vn(e, 1));
          }, zr.cond = function(t) {
            var e = null == t ? 0 : t.length, r = cs();
            return t = e ? Ce(t, (function(t) {
              if ("function" != typeof t[1]) throw new Nt(n);
              return [ r(t[0]), t[1] ];
            })) : [], Jn((function(r) {
              for (var n = -1; ++n < e; ) {
                var i = t[n];
                if (Ie(i[0], this, r)) return Ie(i[1], this, r);
              }
            }));
          }, zr.conforms = function(t) {
            return function(t) {
              var e = ja(t);
              return function(r) {
                return un(r, t, e);
              };
            }(cn(t, 1));
          }, zr.constant = ec, zr.countBy = yo, zr.create = function(t, e) {
            var r = $r(t);
            return null == e ? r : nn(r, e);
          }, zr.curry = function t(e, n, i) {
            var s = Xi(e, 8, r, r, r, r, r, n = i ? r : n);
            return s.placeholder = t.placeholder, s;
          }, zr.curryRight = function t(e, n, i) {
            var s = Xi(e, o, r, r, r, r, r, n = i ? r : n);
            return s.placeholder = t.placeholder, s;
          }, zr.debounce = jo, zr.defaults = Ia, zr.defaultsDeep = Pa, zr.defer = Co, zr.delay = Lo, zr.difference = $s, zr.differenceBy = qs, 
          zr.differenceWith = Hs, zr.drop = function(t, e, n) {
            var i = null == t ? 0 : t.length;
            return i ? ni(t, (e = n || e === r ? 1 : ga(e)) < 0 ? 0 : e, i) : [];
          }, zr.dropRight = function(t, e, n) {
            var i = null == t ? 0 : t.length;
            return i ? ni(t, 0, (e = i - (e = n || e === r ? 1 : ga(e))) < 0 ? 0 : e) : [];
          }, zr.dropRightWhile = function(t, e) {
            return t && t.length ? pi(t, cs(e, 3), !0, !0) : [];
          }, zr.dropWhile = function(t, e) {
            return t && t.length ? pi(t, cs(e, 3), !0) : [];
          }, zr.fill = function(t, e, n, i) {
            var s = null == t ? 0 : t.length;
            return s ? (n && "number" != typeof n && ms(t, e, n) && (n = 0, i = s), function(t, e, n, i) {
              var s = t.length;
              for ((n = ga(n)) < 0 && (n = -n > s ? 0 : s + n), (i = i === r || i > s ? s : ga(i)) < 0 && (i += s), i = n > i ? 0 : ya(i); n < i; ) t[n++] = e;
              return t;
            }(t, e, n, i)) : [];
          }, zr.filter = function(t, e) {
            return (Ko(t) ? Re : yn)(t, cs(e, 3));
          }, zr.flatMap = function(t, e) {
            return vn(Oo(t, e), 1);
          }, zr.flatMapDeep = function(t, e) {
            return vn(Oo(t, e), l);
          }, zr.flatMapDepth = function(t, e, n) {
            return n = n === r ? 1 : ga(n), vn(Oo(t, e), n);
          }, zr.flatten = Ks, zr.flattenDeep = function(t) {
            return (null == t ? 0 : t.length) ? vn(t, l) : [];
          }, zr.flattenDepth = function(t, e) {
            return (null == t ? 0 : t.length) ? vn(t, e = e === r ? 1 : ga(e)) : [];
          }, zr.flip = function(t) {
            return Xi(t, 512);
          }, zr.flow = rc, zr.flowRight = nc, zr.fromPairs = function(t) {
            for (var e = -1, r = null == t ? 0 : t.length, n = {}; ++e < r; ) {
              var i = t[e];
              n[i[0]] = i[1];
            }
            return n;
          }, zr.functions = function(t) {
            return null == t ? [] : En(t, ja(t));
          }, zr.functionsIn = function(t) {
            return null == t ? [] : En(t, Ca(t));
          }, zr.groupBy = wo, zr.initial = function(t) {
            return (null == t ? 0 : t.length) ? ni(t, 0, -1) : [];
          }, zr.intersection = Ws, zr.intersectionBy = Gs, zr.intersectionWith = Ys, zr.invert = Na, zr.invertBy = Ra, zr.invokeMap = Eo, 
          zr.iteratee = sc, zr.keyBy = So, zr.keys = ja, zr.keysIn = Ca, zr.map = Oo, zr.mapKeys = function(t, e) {
            var r = {};
            return e = cs(e, 3), bn(t, (function(t, n, i) {
              sn(r, e(t, n, i), t);
            })), r;
          }, zr.mapValues = function(t, e) {
            var r = {};
            return e = cs(e, 3), bn(t, (function(t, n, i) {
              sn(r, n, e(t, n, i));
            })), r;
          }, zr.matches = function(t) {
            return $n(cn(t, 1));
          }, zr.matchesProperty = function(t, e) {
            return qn(t, cn(e, 1));
          }, zr.memoize = Uo, zr.merge = La, zr.mergeWith = Ua, zr.method = oc, zr.methodOf = ac, zr.mixin = cc, zr.negate = Mo, zr.nthArg = function(t) {
            return t = ga(t), Jn((function(e) {
              return Bn(e, t);
            }));
          }, zr.omit = Ma, zr.omitBy = function(t, e) {
            return ka(t, Mo(cs(e)));
          }, zr.once = function(t) {
            return No(2, t);
          }, zr.orderBy = function(t, e, n, i) {
            return null == t ? [] : (Ko(e) || (e = null == e ? [] : [ e ]), Ko(n = i ? r : n) || (n = null == n ? [] : [ n ]), Vn(t, e, n));
          }, zr.over = hc, zr.overArgs = Do, zr.overEvery = lc, zr.overSome = fc, zr.partial = ko, zr.partialRight = zo, zr.partition = Io, 
          zr.pick = Da, zr.pickBy = ka, zr.property = pc, zr.propertyOf = function(t) {
            return function(e) {
              return null == t ? r : Sn(t, e);
            };
          }, zr.pull = Xs, zr.pullAll = Qs, zr.pullAllBy = function(t, e, r) {
            return t && t.length && e && e.length ? Fn(t, e, cs(r, 2)) : t;
          }, zr.pullAllWith = function(t, e, n) {
            return t && t.length && e && e.length ? Fn(t, e, r, n) : t;
          }, zr.pullAt = Zs, zr.range = dc, zr.rangeRight = gc, zr.rearg = $o, zr.reject = function(t, e) {
            return (Ko(t) ? Re : yn)(t, Mo(cs(e, 3)));
          }, zr.remove = function(t, e) {
            var r = [];
            if (!t || !t.length) return r;
            var n = -1, i = [], s = t.length;
            for (e = cs(e, 3); ++n < s; ) {
              var o = t[n];
              e(o, n, t) && (r.push(o), i.push(n));
            }
            return Wn(t, i), r;
          }, zr.rest = function(t, e) {
            if ("function" != typeof t) throw new Nt(n);
            return Jn(t, e = e === r ? e : ga(e));
          }, zr.reverse = to, zr.sampleSize = function(t, e, n) {
            return e = (n ? ms(t, e, n) : e === r) ? 1 : ga(e), (Ko(t) ? Xr : Qn)(t, e);
          }, zr.set = function(t, e, r) {
            return null == t ? t : Zn(t, e, r);
          }, zr.setWith = function(t, e, n, i) {
            return i = "function" == typeof i ? i : r, null == t ? t : Zn(t, e, n, i);
          }, zr.shuffle = function(t) {
            return (Ko(t) ? Qr : ri)(t);
          }, zr.slice = function(t, e, n) {
            var i = null == t ? 0 : t.length;
            return i ? (n && "number" != typeof n && ms(t, e, n) ? (e = 0, n = i) : (e = null == e ? 0 : ga(e), n = n === r ? i : ga(n)), 
            ni(t, e, n)) : [];
          }, zr.sortBy = Po, zr.sortedUniq = function(t) {
            return t && t.length ? ai(t) : [];
          }, zr.sortedUniqBy = function(t, e) {
            return t && t.length ? ai(t, cs(e, 2)) : [];
          }, zr.split = function(t, e, n) {
            return n && "number" != typeof n && ms(t, e, n) && (e = n = r), (n = n === r ? d : n >>> 0) ? (t = ma(t)) && ("string" == typeof e || null != e && !oa(e)) && (!(e = ui(e)) && or(t)) ? wi(fr(t), 0, n) : t.split(e, n) : [];
          }, zr.spread = function(t, e) {
            if ("function" != typeof t) throw new Nt(n);
            return e = null == e ? 0 : vr(ga(e), 0), Jn((function(r) {
              var n = r[e], i = wi(r, 0, e);
              return n && Le(i, n), Ie(t, this, i);
            }));
          }, zr.tail = function(t) {
            var e = null == t ? 0 : t.length;
            return e ? ni(t, 1, e) : [];
          }, zr.take = function(t, e, n) {
            return t && t.length ? ni(t, 0, (e = n || e === r ? 1 : ga(e)) < 0 ? 0 : e) : [];
          }, zr.takeRight = function(t, e, n) {
            var i = null == t ? 0 : t.length;
            return i ? ni(t, (e = i - (e = n || e === r ? 1 : ga(e))) < 0 ? 0 : e, i) : [];
          }, zr.takeRightWhile = function(t, e) {
            return t && t.length ? pi(t, cs(e, 3), !1, !0) : [];
          }, zr.takeWhile = function(t, e) {
            return t && t.length ? pi(t, cs(e, 3)) : [];
          }, zr.tap = function(t, e) {
            return e(t), t;
          }, zr.throttle = function(t, e, r) {
            var i = !0, s = !0;
            if ("function" != typeof t) throw new Nt(n);
            return ea(r) && (i = "leading" in r ? !!r.leading : i, s = "trailing" in r ? !!r.trailing : s), jo(t, e, {
              leading: i,
              maxWait: e,
              trailing: s
            });
          }, zr.thru = po, zr.toArray = pa, zr.toPairs = za, zr.toPairsIn = $a, zr.toPath = function(t) {
            return Ko(t) ? Ce(t, Ds) : ua(t) ? [ t ] : Ni(Ms(ma(t)));
          }, zr.toPlainObject = _a, zr.transform = function(t, e, r) {
            var n = Ko(t), i = n || Yo(t) || ha(t);
            if (e = cs(e, 4), null == r) {
              var s = t && t.constructor;
              r = i ? n ? new s : [] : ea(t) && Qo(s) ? $r(Ft(t)) : {};
            }
            return (i ? xe : bn)(t, (function(t, n, i) {
              return e(r, t, n, i);
            })), r;
          }, zr.unary = function(t) {
            return Ao(t, 1);
          }, zr.union = eo, zr.unionBy = ro, zr.unionWith = no, zr.uniq = function(t) {
            return t && t.length ? hi(t) : [];
          }, zr.uniqBy = function(t, e) {
            return t && t.length ? hi(t, cs(e, 2)) : [];
          }, zr.uniqWith = function(t, e) {
            return e = "function" == typeof e ? e : r, t && t.length ? hi(t, r, e) : [];
          }, zr.unset = function(t, e) {
            return null == t || li(t, e);
          }, zr.unzip = io, zr.unzipWith = so, zr.update = function(t, e, r) {
            return null == t ? t : fi(t, e, _i(r));
          }, zr.updateWith = function(t, e, n, i) {
            return i = "function" == typeof i ? i : r, null == t ? t : fi(t, e, _i(n), i);
          }, zr.values = qa, zr.valuesIn = function(t) {
            return null == t ? [] : Qe(t, Ca(t));
          }, zr.without = oo, zr.words = Qa, zr.wrap = function(t, e) {
            return ko(_i(e), t);
          }, zr.xor = ao, zr.xorBy = co, zr.xorWith = uo, zr.zip = ho, zr.zipObject = function(t, e) {
            return yi(t || [], e || [], tn);
          }, zr.zipObjectDeep = function(t, e) {
            return yi(t || [], e || [], Zn);
          }, zr.zipWith = lo, zr.entries = za, zr.entriesIn = $a, zr.extend = wa, zr.extendWith = Ea, cc(zr, zr), zr.add = _c, zr.attempt = Za, 
          zr.camelCase = Ha, zr.capitalize = Ba, zr.ceil = mc, zr.clamp = function(t, e, n) {
            return n === r && (n = e, e = r), n !== r && (n = (n = va(n)) == n ? n : 0), e !== r && (e = (e = va(e)) == e ? e : 0), 
            an(va(t), e, n);
          }, zr.clone = function(t) {
            return cn(t, 4);
          }, zr.cloneDeep = function(t) {
            return cn(t, 5);
          }, zr.cloneDeepWith = function(t, e) {
            return cn(t, 5, e = "function" == typeof e ? e : r);
          }, zr.cloneWith = function(t, e) {
            return cn(t, 4, e = "function" == typeof e ? e : r);
          }, zr.conformsTo = function(t, e) {
            return null == e || un(t, e, ja(e));
          }, zr.deburr = Va, zr.defaultTo = function(t, e) {
            return null == t || t != t ? e : t;
          }, zr.divide = bc, zr.endsWith = function(t, e, n) {
            t = ma(t), e = ui(e);
            var i = t.length;
            var s = n = n === r ? i : an(ga(n), 0, i);
            return (n -= e.length) >= 0 && t.slice(n, s) == e;
          }, zr.eq = qo, zr.escape = function(t) {
            return (t = ma(t)) && Y.test(t) ? t.replace(W, ir) : t;
          }, zr.escapeRegExp = function(t) {
            return (t = ma(t)) && nt.test(t) ? t.replace(rt, "\\$&") : t;
          }, zr.every = function(t, e, n) {
            var i = Ko(t) ? Ne : dn;
            return n && ms(t, e, n) && (e = r), i(t, cs(e, 3));
          }, zr.find = vo, zr.findIndex = Bs, zr.findKey = function(t, e) {
            return ze(t, cs(e, 3), bn);
          }, zr.findLast = _o, zr.findLastIndex = Vs, zr.findLastKey = function(t, e) {
            return ze(t, cs(e, 3), wn);
          }, zr.floor = wc, zr.forEach = mo, zr.forEachRight = bo, zr.forIn = function(t, e) {
            return null == t ? t : _n(t, cs(e, 3), Ca);
          }, zr.forInRight = function(t, e) {
            return null == t ? t : mn(t, cs(e, 3), Ca);
          }, zr.forOwn = function(t, e) {
            return t && bn(t, cs(e, 3));
          }, zr.forOwnRight = function(t, e) {
            return t && wn(t, cs(e, 3));
          }, zr.get = xa, zr.gt = Ho, zr.gte = Bo, zr.has = function(t, e) {
            return null != t && gs(t, e, xn);
          }, zr.hasIn = Aa, zr.head = Fs, zr.identity = ic, zr.includes = function(t, e, r, n) {
            t = Wo(t) ? t : qa(t), r = r && !n ? ga(r) : 0;
            var i = t.length;
            return r < 0 && (r = vr(i + r, 0)), ca(t) ? r <= i && t.indexOf(e, r) > -1 : !!i && qe(t, e, r) > -1;
          }, zr.indexOf = function(t, e, r) {
            var n = null == t ? 0 : t.length;
            if (!n) return -1;
            var i = null == r ? 0 : ga(r);
            return i < 0 && (i = vr(n + i, 0)), qe(t, e, i);
          }, zr.inRange = function(t, e, n) {
            return e = da(e), n === r ? (n = e, e = 0) : n = da(n), function(t, e, r) {
              return t >= _r(e, r) && t < vr(e, r);
            }(t = va(t), e, n);
          }, zr.invoke = Ta, zr.isArguments = Vo, zr.isArray = Ko, zr.isArrayBuffer = Fo, zr.isArrayLike = Wo, zr.isArrayLikeObject = Go, 
          zr.isBoolean = function(t) {
            return !0 === t || !1 === t || ra(t) && In(t) == _;
          }, zr.isBuffer = Yo, zr.isDate = Jo, zr.isElement = function(t) {
            return ra(t) && 1 === t.nodeType && !sa(t);
          }, zr.isEmpty = function(t) {
            if (null == t) return !0;
            if (Wo(t) && (Ko(t) || "string" == typeof t || "function" == typeof t.splice || Yo(t) || ha(t) || Vo(t))) return !t.length;
            var e = ds(t);
            if (e == S || e == A) return !t.size;
            if (Ss(t)) return !Mn(t).length;
            for (var r in t) if (Ut.call(t, r)) return !1;
            return !0;
          }, zr.isEqual = function(t, e) {
            return jn(t, e);
          }, zr.isEqualWith = function(t, e, n) {
            var i = (n = "function" == typeof n ? n : r) ? n(t, e) : r;
            return i === r ? jn(t, e, r, n) : !!i;
          }, zr.isError = Xo, zr.isFinite = function(t) {
            return "number" == typeof t && ke(t);
          }, zr.isFunction = Qo, zr.isInteger = Zo, zr.isLength = ta, zr.isMap = na, zr.isMatch = function(t, e) {
            return t === e || Cn(t, e, hs(e));
          }, zr.isMatchWith = function(t, e, n) {
            return n = "function" == typeof n ? n : r, Cn(t, e, hs(e), n);
          }, zr.isNaN = function(t) {
            return ia(t) && t != +t;
          }, zr.isNative = function(t) {
            if (Es(t)) throw new St("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
            return Ln(t);
          }, zr.isNil = function(t) {
            return null == t;
          }, zr.isNull = function(t) {
            return null === t;
          }, zr.isNumber = ia, zr.isObject = ea, zr.isObjectLike = ra, zr.isPlainObject = sa, zr.isRegExp = oa, zr.isSafeInteger = function(t) {
            return Zo(t) && t >= -f && t <= f;
          }, zr.isSet = aa, zr.isString = ca, zr.isSymbol = ua, zr.isTypedArray = ha, zr.isUndefined = function(t) {
            return t === r;
          }, zr.isWeakMap = function(t) {
            return ra(t) && ds(t) == T;
          }, zr.isWeakSet = function(t) {
            return ra(t) && "[object WeakSet]" == In(t);
          }, zr.join = function(t, e) {
            return null == t ? "" : Fe.call(t, e);
          }, zr.kebabCase = Ka, zr.last = Js, zr.lastIndexOf = function(t, e, n) {
            var i = null == t ? 0 : t.length;
            if (!i) return -1;
            var s = i;
            return n !== r && (s = (s = ga(n)) < 0 ? vr(i + s, 0) : _r(s, i - 1)), e == e ? function(t, e, r) {
              for (var n = r + 1; n--; ) if (t[n] === e) return n;
              return n;
            }(t, e, s) : $e(t, Be, s, !0);
          }, zr.lowerCase = Fa, zr.lowerFirst = Wa, zr.lt = la, zr.lte = fa, zr.max = function(t) {
            return t && t.length ? gn(t, ic, Pn) : r;
          }, zr.maxBy = function(t, e) {
            return t && t.length ? gn(t, cs(e, 2), Pn) : r;
          }, zr.mean = function(t) {
            return Ve(t, ic);
          }, zr.meanBy = function(t, e) {
            return Ve(t, cs(e, 2));
          }, zr.min = function(t) {
            return t && t.length ? gn(t, ic, kn) : r;
          }, zr.minBy = function(t, e) {
            return t && t.length ? gn(t, cs(e, 2), kn) : r;
          }, zr.stubArray = yc, zr.stubFalse = vc, zr.stubObject = function() {
            return {};
          }, zr.stubString = function() {
            return "";
          }, zr.stubTrue = function() {
            return !0;
          }, zr.multiply = Ec, zr.nth = function(t, e) {
            return t && t.length ? Bn(t, ga(e)) : r;
          }, zr.noConflict = function() {
            return pe._ === this && (pe._ = $t), this;
          }, zr.noop = uc, zr.now = xo, zr.pad = function(t, e, r) {
            t = ma(t);
            var n = (e = ga(e)) ? lr(t) : 0;
            if (!e || n >= e) return t;
            var i = (e - n) / 2;
            return Vi(ge(i), r) + t + Vi(de(i), r);
          }, zr.padEnd = function(t, e, r) {
            t = ma(t);
            var n = (e = ga(e)) ? lr(t) : 0;
            return e && n < e ? t + Vi(e - n, r) : t;
          }, zr.padStart = function(t, e, r) {
            t = ma(t);
            var n = (e = ga(e)) ? lr(t) : 0;
            return e && n < e ? Vi(e - n, r) + t : t;
          }, zr.parseInt = function(t, e, r) {
            return r || null == e ? e = 0 : e && (e = +e), br(ma(t).replace(it, ""), e || 0);
          }, zr.random = function(t, e, n) {
            if (n && "boolean" != typeof n && ms(t, e, n) && (e = n = r), n === r && ("boolean" == typeof e ? (n = e, e = r) : "boolean" == typeof t && (n = t, 
            t = r)), t === r && e === r ? (t = 0, e = 1) : (t = da(t), e === r ? (e = t, t = 0) : e = da(e)), t > e) {
              var i = t;
              t = e, e = i;
            }
            if (n || t % 1 || e % 1) {
              var s = wr();
              return _r(t + s * (e - t + ue("1e-" + ((s + "").length - 1))), e);
            }
            return Gn(t, e);
          }, zr.reduce = function(t, e, r) {
            var n = Ko(t) ? Ue : We, i = arguments.length < 3;
            return n(t, cs(e, 4), r, i, fn);
          }, zr.reduceRight = function(t, e, r) {
            var n = Ko(t) ? Me : We, i = arguments.length < 3;
            return n(t, cs(e, 4), r, i, pn);
          }, zr.repeat = function(t, e, n) {
            return e = (n ? ms(t, e, n) : e === r) ? 1 : ga(e), Yn(ma(t), e);
          }, zr.replace = function() {
            var t = arguments, e = ma(t[0]);
            return t.length < 3 ? e : e.replace(t[1], t[2]);
          }, zr.result = function(t, e, n) {
            var i = -1, s = (e = mi(e, t)).length;
            for (s || (s = 1, t = r); ++i < s; ) {
              var o = null == t ? r : t[Ds(e[i])];
              o === r && (i = s, o = n), t = Qo(o) ? o.call(t) : o;
            }
            return t;
          }, zr.round = Sc, zr.runInContext = t, zr.sample = function(t) {
            return (Ko(t) ? Jr : Xn)(t);
          }, zr.size = function(t) {
            if (null == t) return 0;
            if (Wo(t)) return ca(t) ? lr(t) : t.length;
            var e = ds(t);
            return e == S || e == A ? t.size : Mn(t).length;
          }, zr.snakeCase = Ga, zr.some = function(t, e, n) {
            var i = Ko(t) ? De : ii;
            return n && ms(t, e, n) && (e = r), i(t, cs(e, 3));
          }, zr.sortedIndex = function(t, e) {
            return si(t, e);
          }, zr.sortedIndexBy = function(t, e, r) {
            return oi(t, e, cs(r, 2));
          }, zr.sortedIndexOf = function(t, e) {
            var r = null == t ? 0 : t.length;
            if (r) {
              var n = si(t, e);
              if (n < r && qo(t[n], e)) return n;
            }
            return -1;
          }, zr.sortedLastIndex = function(t, e) {
            return si(t, e, !0);
          }, zr.sortedLastIndexBy = function(t, e, r) {
            return oi(t, e, cs(r, 2), !0);
          }, zr.sortedLastIndexOf = function(t, e) {
            if (null == t ? 0 : t.length) {
              var r = si(t, e, !0) - 1;
              if (qo(t[r], e)) return r;
            }
            return -1;
          }, zr.startCase = Ya, zr.startsWith = function(t, e, r) {
            return t = ma(t), r = null == r ? 0 : an(ga(r), 0, t.length), e = ui(e), t.slice(r, r + e.length) == e;
          }, zr.subtract = Oc, zr.sum = function(t) {
            return t && t.length ? Ge(t, ic) : 0;
          }, zr.sumBy = function(t, e) {
            return t && t.length ? Ge(t, cs(e, 2)) : 0;
          }, zr.template = function(t, e, n) {
            var i = zr.templateSettings;
            n && ms(t, e, n) && (e = r), t = ma(t), e = Ea({}, e, i, Qi);
            var s, o, a = Ea({}, e.imports, i.imports, Qi), c = ja(a), u = Qe(a, c), h = 0, l = e.interpolate || bt, f = "__p += '", p = xt((e.escape || bt).source + "|" + l.source + "|" + (l === Q ? ft : bt).source + "|" + (e.evaluate || bt).source + "|$", "g"), d = "//# sourceURL=" + (Ut.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++se + "]") + "\n";
            t.replace(p, (function(e, r, n, i, a, c) {
              return n || (n = i), f += t.slice(h, c).replace(wt, sr), r && (s = !0, f += "' +\n__e(" + r + ") +\n'"), a && (o = !0, f += "';\n" + a + ";\n__p += '"), 
              n && (f += "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"), h = c + e.length, e;
            })), f += "';\n";
            var g = Ut.call(e, "variable") && e.variable;
            if (g) {
              if (ht.test(g)) throw new St("Invalid `variable` option passed into `_.template`");
            } else f = "with (obj) {\n" + f + "\n}\n";
            f = (o ? f.replace(B, "") : f).replace(V, "$1").replace(K, "$1;"), f = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
            var y = Za((function() {
              return Ot(c, d + "return " + f).apply(r, u);
            }));
            if (y.source = f, Xo(y)) throw y;
            return y;
          }, zr.times = function(t, e) {
            if ((t = ga(t)) < 1 || t > f) return [];
            var r = d, n = _r(t, d);
            e = cs(e), t -= d;
            for (var i = Ye(n, e); ++r < t; ) e(r);
            return i;
          }, zr.toFinite = da, zr.toInteger = ga, zr.toLength = ya, zr.toLower = function(t) {
            return ma(t).toLowerCase();
          }, zr.toNumber = va, zr.toSafeInteger = function(t) {
            return t ? an(ga(t), -f, f) : 0 === t ? t : 0;
          }, zr.toString = ma, zr.toUpper = function(t) {
            return ma(t).toUpperCase();
          }, zr.trim = function(t, e, n) {
            if ((t = ma(t)) && (n || e === r)) return Je(t);
            if (!t || !(e = ui(e))) return t;
            var i = fr(t), s = fr(e);
            return wi(i, tr(i, s), er(i, s) + 1).join("");
          }, zr.trimEnd = function(t, e, n) {
            if ((t = ma(t)) && (n || e === r)) return t.slice(0, pr(t) + 1);
            if (!t || !(e = ui(e))) return t;
            var i = fr(t);
            return wi(i, 0, er(i, fr(e)) + 1).join("");
          }, zr.trimStart = function(t, e, n) {
            if ((t = ma(t)) && (n || e === r)) return t.replace(it, "");
            if (!t || !(e = ui(e))) return t;
            var i = fr(t);
            return wi(i, tr(i, fr(e))).join("");
          }, zr.truncate = function(t, e) {
            var n = 30, i = "...";
            if (ea(e)) {
              var s = "separator" in e ? e.separator : s;
              n = "length" in e ? ga(e.length) : n, i = "omission" in e ? ui(e.omission) : i;
            }
            var o = (t = ma(t)).length;
            if (or(t)) {
              var a = fr(t);
              o = a.length;
            }
            if (n >= o) return t;
            var c = n - lr(i);
            if (c < 1) return i;
            var u = a ? wi(a, 0, c).join("") : t.slice(0, c);
            if (s === r) return u + i;
            if (a && (c += u.length - c), oa(s)) {
              if (t.slice(c).search(s)) {
                var h, l = u;
                for (s.global || (s = xt(s.source, ma(pt.exec(s)) + "g")), s.lastIndex = 0; h = s.exec(l); ) var f = h.index;
                u = u.slice(0, f === r ? c : f);
              }
            } else if (t.indexOf(ui(s), c) != c) {
              var p = u.lastIndexOf(s);
              p > -1 && (u = u.slice(0, p));
            }
            return u + i;
          }, zr.unescape = function(t) {
            return (t = ma(t)) && G.test(t) ? t.replace(F, dr) : t;
          }, zr.uniqueId = function(t) {
            var e = ++Mt;
            return ma(t) + e;
          }, zr.upperCase = Ja, zr.upperFirst = Xa, zr.each = mo, zr.eachRight = bo, zr.first = Fs, cc(zr, function() {
            var t = {};
            return bn(zr, (function(e, r) {
              Ut.call(zr.prototype, r) || (t[r] = e);
            })), t;
          }(), {
            chain: !1
          }), zr.VERSION = "4.17.21", xe([ "bind", "bindKey", "curry", "curryRight", "partial", "partialRight" ], (function(t) {
            zr[t].placeholder = zr;
          })), xe([ "drop", "take" ], (function(t, e) {
            Br.prototype[t] = function(n) {
              n = n === r ? 1 : vr(ga(n), 0);
              var i = this.__filtered__ && !e ? new Br(this) : this.clone();
              return i.__filtered__ ? i.__takeCount__ = _r(n, i.__takeCount__) : i.__views__.push({
                size: _r(n, d),
                type: t + (i.__dir__ < 0 ? "Right" : "")
              }), i;
            }, Br.prototype[t + "Right"] = function(e) {
              return this.reverse()[t](e).reverse();
            };
          })), xe([ "filter", "map", "takeWhile" ], (function(t, e) {
            var r = e + 1, n = 1 == r || 3 == r;
            Br.prototype[t] = function(t) {
              var e = this.clone();
              return e.__iteratees__.push({
                iteratee: cs(t, 3),
                type: r
              }), e.__filtered__ = e.__filtered__ || n, e;
            };
          })), xe([ "head", "last" ], (function(t, e) {
            var r = "take" + (e ? "Right" : "");
            Br.prototype[t] = function() {
              return this[r](1).value()[0];
            };
          })), xe([ "initial", "tail" ], (function(t, e) {
            var r = "drop" + (e ? "" : "Right");
            Br.prototype[t] = function() {
              return this.__filtered__ ? new Br(this) : this[r](1);
            };
          })), Br.prototype.compact = function() {
            return this.filter(ic);
          }, Br.prototype.find = function(t) {
            return this.filter(t).head();
          }, Br.prototype.findLast = function(t) {
            return this.reverse().find(t);
          }, Br.prototype.invokeMap = Jn((function(t, e) {
            return "function" == typeof t ? new Br(this) : this.map((function(r) {
              return Rn(r, t, e);
            }));
          })), Br.prototype.reject = function(t) {
            return this.filter(Mo(cs(t)));
          }, Br.prototype.slice = function(t, e) {
            t = ga(t);
            var n = this;
            return n.__filtered__ && (t > 0 || e < 0) ? new Br(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== r && (n = (e = ga(e)) < 0 ? n.dropRight(-e) : n.take(e - t)), 
            n);
          }, Br.prototype.takeRightWhile = function(t) {
            return this.reverse().takeWhile(t).reverse();
          }, Br.prototype.toArray = function() {
            return this.take(d);
          }, bn(Br.prototype, (function(t, e) {
            var n = /^(?:filter|find|map|reject)|While$/.test(e), i = /^(?:head|last)$/.test(e), s = zr[i ? "take" + ("last" == e ? "Right" : "") : e], o = i || /^find/.test(e);
            s && (zr.prototype[e] = function() {
              var e = this.__wrapped__, a = i ? [ 1 ] : arguments, c = e instanceof Br, u = a[0], h = c || Ko(e), l = function(t) {
                var e = s.apply(zr, Le([ t ], a));
                return i && f ? e[0] : e;
              };
              h && n && "function" == typeof u && 1 != u.length && (c = h = !1);
              var f = this.__chain__, p = !!this.__actions__.length, d = o && !f, g = c && !p;
              if (!o && h) {
                e = g ? e : new Br(this);
                var y = t.apply(e, a);
                return y.__actions__.push({
                  func: po,
                  args: [ l ],
                  thisArg: r
                }), new Hr(y, f);
              }
              return d && g ? t.apply(this, a) : (y = this.thru(l), d ? i ? y.value()[0] : y.value() : y);
            });
          })), xe([ "pop", "push", "shift", "sort", "splice", "unshift" ], (function(t) {
            var e = Rt[t], r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", n = /^(?:pop|shift)$/.test(t);
            zr.prototype[t] = function() {
              var t = arguments;
              if (n && !this.__chain__) {
                var i = this.value();
                return e.apply(Ko(i) ? i : [], t);
              }
              return this[r]((function(r) {
                return e.apply(Ko(r) ? r : [], t);
              }));
            };
          })), bn(Br.prototype, (function(t, e) {
            var r = zr[e];
            if (r) {
              var n = r.name + "";
              Ut.call(Rr, n) || (Rr[n] = []), Rr[n].push({
                name: e,
                func: r
              });
            }
          })), Rr[$i(r, 2).name] = [ {
            name: "wrapper",
            func: r
          } ], Br.prototype.clone = function() {
            var t = new Br(this.__wrapped__);
            return t.__actions__ = Ni(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Ni(this.__iteratees__), 
            t.__takeCount__ = this.__takeCount__, t.__views__ = Ni(this.__views__), t;
          }, Br.prototype.reverse = function() {
            if (this.__filtered__) {
              var t = new Br(this);
              t.__dir__ = -1, t.__filtered__ = !0;
            } else (t = this.clone()).__dir__ *= -1;
            return t;
          }, Br.prototype.value = function() {
            var t = this.__wrapped__.value(), e = this.__dir__, r = Ko(t), n = e < 0, i = r ? t.length : 0, s = function(t, e, r) {
              for (var n = -1, i = r.length; ++n < i; ) {
                var s = r[n], o = s.size;
                switch (s.type) {
                 case "drop":
                  t += o;
                  break;

                 case "dropRight":
                  e -= o;
                  break;

                 case "take":
                  e = _r(e, t + o);
                  break;

                 case "takeRight":
                  t = vr(t, e - o);
                }
              }
              return {
                start: t,
                end: e
              };
            }(0, i, this.__views__), o = s.start, a = s.end, c = a - o, u = n ? a : o - 1, h = this.__iteratees__, l = h.length, f = 0, p = _r(c, this.__takeCount__);
            if (!r || !n && i == c && p == c) return di(t, this.__actions__);
            var d = [];
            t: for (;c-- && f < p; ) {
              for (var g = -1, y = t[u += e]; ++g < l; ) {
                var v = h[g], _ = v.iteratee, m = v.type, b = _(y);
                if (2 == m) y = b; else if (!b) {
                  if (1 == m) continue t;
                  break t;
                }
              }
              d[f++] = y;
            }
            return d;
          }, zr.prototype.at = go, zr.prototype.chain = function() {
            return fo(this);
          }, zr.prototype.commit = function() {
            return new Hr(this.value(), this.__chain__);
          }, zr.prototype.next = function() {
            this.__values__ === r && (this.__values__ = pa(this.value()));
            var t = this.__index__ >= this.__values__.length;
            return {
              done: t,
              value: t ? r : this.__values__[this.__index__++]
            };
          }, zr.prototype.plant = function(t) {
            for (var e, n = this; n instanceof qr; ) {
              var i = zs(n);
              i.__index__ = 0, i.__values__ = r, e ? s.__wrapped__ = i : e = i;
              var s = i;
              n = n.__wrapped__;
            }
            return s.__wrapped__ = t, e;
          }, zr.prototype.reverse = function() {
            var t = this.__wrapped__;
            if (t instanceof Br) {
              var e = t;
              return this.__actions__.length && (e = new Br(this)), (e = e.reverse()).__actions__.push({
                func: po,
                args: [ to ],
                thisArg: r
              }), new Hr(e, this.__chain__);
            }
            return this.thru(to);
          }, zr.prototype.toJSON = zr.prototype.valueOf = zr.prototype.value = function() {
            return di(this.__wrapped__, this.__actions__);
          }, zr.prototype.first = zr.prototype.head, Xt && (zr.prototype[Xt] = function() {
            return this;
          }), zr;
        }();
        ge ? ((ge.exports = gr)._ = gr, de._ = gr) : pe._ = gr;
      }).call(Po);
    }(xo, xo.exports);
    var Ao = Object.defineProperty, No = Object.defineProperties, Ro = Object.getOwnPropertyDescriptors, To = Object.getOwnPropertySymbols, jo = Object.prototype.hasOwnProperty, Co = Object.prototype.propertyIsEnumerable, Lo = (t, e, r) => e in t ? Ao(t, e, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }) : t[e] = r, Uo = (t, e) => {
      for (var r in e || (e = {})) jo.call(e, r) && Lo(t, r, e[r]);
      if (To) for (var r of To(e)) Co.call(e, r) && Lo(t, r, e[r]);
      return t;
    }, Mo = (t, e) => No(t, Ro(e));
    function Do(t, e, r) {
      let n;
      const i = ko(t);
      return e.rpcMap && (n = e.rpcMap[i]), n || (n = `https://rpc.walletconnect.com/v1?chainId=eip155:${i}&projectId=${r}`), 
      n;
    }
    function ko(t) {
      return t.includes("eip155") ? Number(t.split(":")[1]) : Number(t);
    }
    function zo(t) {
      return t.map((t => `${t.split(":")[0]}:${t.split(":")[1]}`));
    }
    function $o(t) {
      var e, r, n, i;
      const s = {};
      if (!ir(t)) return s;
      for (const [o, a] of Object.entries(t)) {
        const t = Xe(o) ? [ o ] : a.chains, c = a.methods || [], u = a.events || [], h = a.rpcMap || {}, l = Qe(o);
        s[l] = Mo(Uo(Uo({}, s[l]), a), {
          chains: ze(t, null == (e = s[l]) ? void 0 : e.chains),
          methods: ze(c, null == (r = s[l]) ? void 0 : r.methods),
          events: ze(u, null == (n = s[l]) ? void 0 : n.events),
          rpcMap: Uo(Uo({}, h), null == (i = s[l]) ? void 0 : i.rpcMap)
        });
      }
      return s;
    }
    function qo(t) {
      return t.includes(":") ? t.split(":")[2] : t;
    }
    function Ho(t) {
      const e = {};
      for (const [r, n] of Object.entries(t)) {
        const t = n.methods || [], i = n.events || [], s = n.accounts || [], o = Xe(r) ? [ r ] : n.chains ? n.chains : zo(n.accounts);
        e[r] = {
          chains: o,
          methods: t,
          events: i,
          accounts: s
        };
      }
      return e;
    }
    const Bo = {}, Vo = t => Bo[t], Ko = (t, e) => {
      Bo[t] = e;
    };
    class Fo {
      constructor(t) {
        this.name = "polkadot", this.namespace = t.namespace, this.events = Vo("events"), this.client = Vo("client"), this.chainId = this.getDefaultChain(), 
        this.httpProviders = this.createHttpProviders();
      }
      updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t);
      }
      requestAccounts() {
        return this.getAccounts();
      }
      getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1];
      }
      request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
      }
      setDefaultChain(t, e) {
        if (this.chainId = t, !this.httpProviders[t]) {
          const r = e || Do(`${this.name}:${t}`, this.namespace);
          if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
          this.setHttpProvider(t, r);
        }
        this.events.emit(Io, `${this.name}:${this.chainId}`);
      }
      getAccounts() {
        const t = this.namespace.accounts;
        return t && t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2])) || [];
      }
      createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e => {
          var r;
          t[e] = this.createHttpProvider(e, null == (r = this.namespace.rpcMap) ? void 0 : r[e]);
        })), t;
      }
      getHttpProvider() {
        const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e;
      }
      setHttpProvider(t, e) {
        const r = this.createHttpProvider(t, e);
        r && (this.httpProviders[t] = r);
      }
      createHttpProvider(t, e) {
        const r = e || Do(t, this.namespace);
        return typeof r > "u" ? void 0 : new Kr(new Eo(r, Vo("disableProviderPing")));
      }
    }
    class Wo {
      constructor(t) {
        this.name = "eip155", this.namespace = t.namespace, this.events = Vo("events"), this.client = Vo("client"), this.httpProviders = this.createHttpProviders(), 
        this.chainId = parseInt(this.getDefaultChain());
      }
      async request(t) {
        switch (t.request.method) {
         case "eth_requestAccounts":
         case "eth_accounts":
          return this.getAccounts();

         case "wallet_switchEthereumChain":
          return await this.handleSwitchChain(t);

         case "eth_chainId":
          return parseInt(this.getDefaultChain());
        }
        return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request);
      }
      updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t);
      }
      setDefaultChain(t, e) {
        const r = ko(t);
        if (!this.httpProviders[r]) {
          const t = e || Do(`${this.name}:${r}`, this.namespace, this.client.core.projectId);
          if (!t) throw new Error(`No RPC url provided for chainId: ${r}`);
          this.setHttpProvider(r, t);
        }
        this.chainId = r, this.events.emit(Io, `${this.name}:${r}`);
      }
      requestAccounts() {
        return this.getAccounts();
      }
      getDefaultChain() {
        if (this.chainId) return this.chainId.toString();
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1];
      }
      createHttpProvider(t, e) {
        const r = e || Do(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
        return typeof r > "u" ? void 0 : new Kr(new wo(r, Vo("disableProviderPing")));
      }
      setHttpProvider(t, e) {
        const r = this.createHttpProvider(t, e);
        r && (this.httpProviders[t] = r);
      }
      createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e => {
          var r;
          const n = ko(e);
          t[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[e]);
        })), t;
      }
      getAccounts() {
        const t = this.namespace.accounts;
        return t ? [ ...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2]))) ] : [];
      }
      getHttpProvider() {
        const t = this.chainId, e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e;
      }
      async handleSwitchChain(t) {
        var e, r;
        let n = t.request.params ? null == (e = t.request.params[0]) ? void 0 : e.chainId : "0x0";
        n = n.startsWith("0x") ? n : `0x${n}`;
        const i = parseInt(n, 16);
        if (this.isChainApproved(i)) this.setDefaultChain(`${i}`); else {
          if (!this.namespace.methods.includes("wallet_switchEthereumChain")) throw new Error(`Failed to switch to chain 'eip155:${i}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
          await this.client.request({
            topic: t.topic,
            request: {
              method: t.request.method,
              params: [ {
                chainId: n
              } ]
            },
            chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
          }), this.setDefaultChain(`${i}`);
        }
        return null;
      }
      isChainApproved(t) {
        return this.namespace.chains.includes(`${this.name}:${t}`);
      }
    }
    class Go {
      constructor(t) {
        this.name = "solana", this.namespace = t.namespace, this.events = Vo("events"), this.client = Vo("client"), this.chainId = this.getDefaultChain(), 
        this.httpProviders = this.createHttpProviders();
      }
      updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t);
      }
      requestAccounts() {
        return this.getAccounts();
      }
      request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
      }
      setDefaultChain(t, e) {
        if (!this.httpProviders[t]) {
          const r = e || Do(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
          this.setHttpProvider(t, r);
        }
        this.chainId = t, this.events.emit(Io, `${this.name}:${this.chainId}`);
      }
      getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1];
      }
      getAccounts() {
        const t = this.namespace.accounts;
        return t ? [ ...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2]))) ] : [];
      }
      createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e => {
          var r;
          t[e] = this.createHttpProvider(e, null == (r = this.namespace.rpcMap) ? void 0 : r[e]);
        })), t;
      }
      getHttpProvider() {
        const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e;
      }
      setHttpProvider(t, e) {
        const r = this.createHttpProvider(t, e);
        r && (this.httpProviders[t] = r);
      }
      createHttpProvider(t, e) {
        const r = e || Do(t, this.namespace, this.client.core.projectId);
        return typeof r > "u" ? void 0 : new Kr(new Eo(r, Vo("disableProviderPing")));
      }
    }
    class Yo {
      constructor(t) {
        this.name = "cosmos", this.namespace = t.namespace, this.events = Vo("events"), this.client = Vo("client"), this.chainId = this.getDefaultChain(), 
        this.httpProviders = this.createHttpProviders();
      }
      updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t);
      }
      requestAccounts() {
        return this.getAccounts();
      }
      getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1];
      }
      request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
      }
      setDefaultChain(t, e) {
        if (this.chainId = t, !this.httpProviders[t]) {
          const r = e || Do(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
          this.setHttpProvider(t, r);
        }
        this.events.emit(Io, `${this.name}:${this.chainId}`);
      }
      getAccounts() {
        const t = this.namespace.accounts;
        return t ? [ ...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2]))) ] : [];
      }
      createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e => {
          var r;
          t[e] = this.createHttpProvider(e, null == (r = this.namespace.rpcMap) ? void 0 : r[e]);
        })), t;
      }
      getHttpProvider() {
        const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e;
      }
      setHttpProvider(t, e) {
        const r = this.createHttpProvider(t, e);
        r && (this.httpProviders[t] = r);
      }
      createHttpProvider(t, e) {
        const r = e || Do(t, this.namespace, this.client.core.projectId);
        return typeof r > "u" ? void 0 : new Kr(new Eo(r, Vo("disableProviderPing")));
      }
    }
    class Jo {
      constructor(t) {
        this.name = "cip34", this.namespace = t.namespace, this.events = Vo("events"), this.client = Vo("client"), this.chainId = this.getDefaultChain(), 
        this.httpProviders = this.createHttpProviders();
      }
      updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t);
      }
      requestAccounts() {
        return this.getAccounts();
      }
      getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1];
      }
      request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
      }
      setDefaultChain(t, e) {
        if (this.chainId = t, !this.httpProviders[t]) {
          const r = e || this.getCardanoRPCUrl(t);
          if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
          this.setHttpProvider(t, r);
        }
        this.events.emit(Io, `${this.name}:${this.chainId}`);
      }
      getAccounts() {
        const t = this.namespace.accounts;
        return t ? [ ...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2]))) ] : [];
      }
      createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e => {
          const r = this.getCardanoRPCUrl(e);
          t[e] = this.createHttpProvider(e, r);
        })), t;
      }
      getHttpProvider() {
        const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e;
      }
      getCardanoRPCUrl(t) {
        const e = this.namespace.rpcMap;
        if (e) return e[t];
      }
      setHttpProvider(t, e) {
        const r = this.createHttpProvider(t, e);
        r && (this.httpProviders[t] = r);
      }
      createHttpProvider(t, e) {
        const r = e || this.getCardanoRPCUrl(t);
        return typeof r > "u" ? void 0 : new Kr(new Eo(r, Vo("disableProviderPing")));
      }
    }
    class Xo {
      constructor(t) {
        this.name = "elrond", this.namespace = t.namespace, this.events = Vo("events"), this.client = Vo("client"), this.chainId = this.getDefaultChain(), 
        this.httpProviders = this.createHttpProviders();
      }
      updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t);
      }
      requestAccounts() {
        return this.getAccounts();
      }
      request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
      }
      setDefaultChain(t, e) {
        if (!this.httpProviders[t]) {
          const r = e || Do(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
          this.setHttpProvider(t, r);
        }
        this.chainId = t, this.events.emit(Io, `${this.name}:${this.chainId}`);
      }
      getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1];
      }
      getAccounts() {
        const t = this.namespace.accounts;
        return t ? [ ...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2]))) ] : [];
      }
      createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e => {
          var r;
          t[e] = this.createHttpProvider(e, null == (r = this.namespace.rpcMap) ? void 0 : r[e]);
        })), t;
      }
      getHttpProvider() {
        const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e;
      }
      setHttpProvider(t, e) {
        const r = this.createHttpProvider(t, e);
        r && (this.httpProviders[t] = r);
      }
      createHttpProvider(t, e) {
        const r = e || Do(t, this.namespace, this.client.core.projectId);
        return typeof r > "u" ? void 0 : new Kr(new Eo(r, Vo("disableProviderPing")));
      }
    }
    class Qo {
      constructor(t) {
        this.name = "multiversx", this.namespace = t.namespace, this.events = Vo("events"), this.client = Vo("client"), this.chainId = this.getDefaultChain(), 
        this.httpProviders = this.createHttpProviders();
      }
      updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t);
      }
      requestAccounts() {
        return this.getAccounts();
      }
      request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
      }
      setDefaultChain(t, e) {
        if (!this.httpProviders[t]) {
          const r = e || Do(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
          this.setHttpProvider(t, r);
        }
        this.chainId = t, this.events.emit(Io, `${this.name}:${this.chainId}`);
      }
      getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1];
      }
      getAccounts() {
        const t = this.namespace.accounts;
        return t ? [ ...new Set(t.filter((t => t.split(":")[1] === this.chainId.toString())).map((t => t.split(":")[2]))) ] : [];
      }
      createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach((e => {
          var r;
          t[e] = this.createHttpProvider(e, null == (r = this.namespace.rpcMap) ? void 0 : r[e]);
        })), t;
      }
      getHttpProvider() {
        const t = `${this.name}:${this.chainId}`, e = this.httpProviders[t];
        if (typeof e > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return e;
      }
      setHttpProvider(t, e) {
        const r = this.createHttpProvider(t, e);
        r && (this.httpProviders[t] = r);
      }
      createHttpProvider(t, e) {
        const r = e || Do(t, this.namespace, this.client.core.projectId);
        return typeof r > "u" ? void 0 : new Kr(new Eo(r, Vo("disableProviderPing")));
      }
    }
    var Zo = Object.defineProperty, ta = Object.defineProperties, ea = Object.getOwnPropertyDescriptors, ra = Object.getOwnPropertySymbols, na = Object.prototype.hasOwnProperty, ia = Object.prototype.propertyIsEnumerable, sa = (t, e, r) => e in t ? Zo(t, e, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    }) : t[e] = r, oa = (t, e) => {
      for (var r in e || (e = {})) na.call(e, r) && sa(t, r, e[r]);
      if (ra) for (var r of ra(e)) ia.call(e, r) && sa(t, r, e[r]);
      return t;
    }, aa = (t, e) => ta(t, ea(e));
    class ca {
      constructor(t) {
        this.events = new (y()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, 
        this.providerOpts = t, this.logger = typeof t?.logger < "u" && "string" != typeof t?.logger ? t.logger : (0, m.pino)((0, 
        m.getDefaultLoggerOptions)({
          level: t?.logger || So
        })), this.disableProviderPing = t?.disableProviderPing || !1;
      }
      static async init(t) {
        const e = new ca(t);
        return await e.initialize(), e;
      }
      async request(t, e) {
        const [r, n] = this.validateChain(e);
        if (!this.session) throw new Error("Please call connect() before request()");
        return await this.getProvider(r).request({
          request: oa({}, t),
          chainId: `${r}:${n}`,
          topic: this.session.topic
        });
      }
      sendAsync(t, e, r) {
        this.request(t, r).then((t => e(null, t))).catch((t => e(t, void 0)));
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
        var t;
        if (!this.session) throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
          topic: null == (t = this.session) ? void 0 : t.topic,
          reason: rr("USER_DISCONNECTED")
        }), await this.cleanup();
      }
      async connect(t) {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing) return await this.pair(t.pairingTopic);
      }
      on(t, e) {
        this.events.on(t, e);
      }
      once(t, e) {
        this.events.once(t, e);
      }
      removeListener(t, e) {
        this.events.removeListener(t, e);
      }
      off(t, e) {
        this.events.off(t, e);
      }
      get isWalletConnect() {
        return !0;
      }
      async pair(t) {
        this.shouldAbortPairingAttempt = !1;
        let e = 0;
        do {
          if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
          if (e >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
          const {uri: r, approval: n} = await this.client.connect({
            pairingTopic: t,
            requiredNamespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties
          });
          r && (this.uri = r, this.events.emit("display_uri", r)), await n().then((t => {
            this.session = t, this.namespaces || (this.namespaces = Ho(t.namespaces), this.persist("namespaces", this.namespaces));
          })).catch((t => {
            if (t.message !== Js) throw t;
            e++;
          }));
        } while (!this.session);
        return this.onConnect(), this.session;
      }
      setDefaultChain(t, e) {
        try {
          if (!this.session) return;
          const [r, n] = this.validateChain(t);
          this.getProvider(r).setDefaultChain(n, e);
        } catch (r) {
          if (!/Please call connect/.test(r.message)) throw r;
        }
      }
      async cleanupPendingPairings(t = {}) {
        this.logger.info("Cleaning up inactive pairings...");
        const e = this.client.pairing.getAll();
        if (nr(e)) {
          for (const r of e) t.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
          this.logger.info(`Inactive pairings cleared: ${e.length}`);
        }
      }
      abortPairingAttempt() {
        this.shouldAbortPairingAttempt = !0;
      }
      async checkStorage() {
        if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, 
        this.client.session.length) {
          const t = this.client.session.keys.length - 1;
          this.session = this.client.session.get(this.client.session.keys[t]), this.createProviders();
        }
      }
      async initialize() {
        this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
      }
      async createClient() {
        this.client = this.providerOpts.client || await vo.init({
          logger: this.providerOpts.logger || So,
          relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
          projectId: this.providerOpts.projectId,
          metadata: this.providerOpts.metadata,
          storageOptions: this.providerOpts.storageOptions,
          storage: this.providerOpts.storage,
          name: this.providerOpts.name
        }), this.logger.trace("SignClient Initialized");
      }
      createProviders() {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
        const t = [ ...new Set(Object.keys(this.session.namespaces).map((t => Qe(t)))) ];
        Ko("client", this.client), Ko("events", this.events), Ko("disableProviderPing", this.disableProviderPing), t.forEach((t => {
          if (!this.session) return;
          const e = function(t, e) {
            const r = Object.keys(e.namespaces).filter((e => e.includes(t)));
            if (!r.length) return [];
            const n = [];
            return r.forEach((t => {
              const r = e.namespaces[t].accounts;
              n.push(...r);
            })), n;
          }(t, this.session), r = zo(e), n = function(t = {}, e = {}) {
            const r = $o(t), n = $o(e);
            return xo.exports.merge(r, n);
          }(this.namespaces, this.optionalNamespaces), i = aa(oa({}, n[t]), {
            accounts: e,
            chains: r
          });
          switch (t) {
           case "eip155":
            this.rpcProviders[t] = new Wo({
              namespace: i
            });
            break;

           case "solana":
            this.rpcProviders[t] = new Go({
              namespace: i
            });
            break;

           case "cosmos":
            this.rpcProviders[t] = new Yo({
              namespace: i
            });
            break;

           case "polkadot":
            this.rpcProviders[t] = new Fo({
              namespace: i
            });
            break;

           case "cip34":
            this.rpcProviders[t] = new Jo({
              namespace: i
            });
            break;

           case "elrond":
            this.rpcProviders[t] = new Xo({
              namespace: i
            });
            break;

           case "multiversx":
            this.rpcProviders[t] = new Qo({
              namespace: i
            });
          }
        }));
      }
      registerEventListeners() {
        if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", (t => {
          this.events.emit("session_ping", t);
        })), this.client.on("session_event", (t => {
          const {params: e} = t, {event: r} = e;
          if ("accountsChanged" === r.name) {
            const t = r.data;
            t && nr(t) && this.events.emit("accountsChanged", t.map(qo));
          } else "chainChanged" === r.name ? this.onChainChanged(e.chainId) : this.events.emit(r.name, r.data);
          this.events.emit("session_event", t);
        })), this.client.on("session_update", (({topic: t, params: e}) => {
          var r;
          const {namespaces: n} = e, i = null == (r = this.client) ? void 0 : r.session.get(t);
          this.session = aa(oa({}, i), {
            namespaces: n
          }), this.onSessionUpdate(), this.events.emit("session_update", {
            topic: t,
            params: e
          });
        })), this.client.on("session_delete", (async t => {
          await this.cleanup(), this.events.emit("session_delete", t), this.events.emit("disconnect", aa(oa({}, rr("USER_DISCONNECTED")), {
            data: t.topic
          }));
        })), this.on(Io, (t => {
          this.onChainChanged(t, !0);
        }));
      }
      getProvider(t) {
        if (!this.rpcProviders[t]) throw new Error(`Provider not found: ${t}`);
        return this.rpcProviders[t];
      }
      onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach((t => {
          var e;
          this.getProvider(t).updateNamespace(null == (e = this.session) ? void 0 : e.namespaces[t]);
        }));
      }
      setNamespaces(t) {
        const {namespaces: e, optionalNamespaces: r, sessionProperties: n} = t;
        e && Object.keys(e).length && (this.namespaces = e), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = n, 
        this.persist("namespaces", e), this.persist("optionalNamespaces", r);
      }
      validateChain(t) {
        const [e, r] = t?.split(":") || [ "", "" ];
        if (!this.namespaces || !Object.keys(this.namespaces).length) return [ e, r ];
        if (e && !Object.keys(this.namespaces || {}).map((t => Qe(t))).includes(e)) throw new Error(`Namespace '${e}' is not configured. Please call connect() first with namespace config.`);
        if (e && r) return [ e, r ];
        const n = Qe(Object.keys(this.namespaces)[0]);
        return [ n, this.rpcProviders[n].getDefaultChain() ];
      }
      async requestAccounts() {
        const [t] = this.validateChain();
        return await this.getProvider(t).requestAccounts();
      }
      onChainChanged(t, e = !1) {
        var r;
        if (!this.namespaces) return;
        const [n, i] = this.validateChain(t);
        e || this.getProvider(n).setDefaultChain(i), (null != (r = this.namespaces[n]) ? r : this.namespaces[`${n}:${i}`]).defaultChain = i, 
        this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", i);
      }
      onConnect() {
        this.createProviders(), this.events.emit("connect", {
          session: this.session
        });
      }
      async cleanup() {
        this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), 
        this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
          deletePairings: !0
        });
      }
      persist(t, e) {
        this.client.core.storage.setItem(`${Oo}/${t}`, e);
      }
      async getFromStore(t) {
        return await this.client.core.storage.getItem(`${Oo}/${t}`);
      }
    }
  },
  19048: (t, e) => {
    "use strict";
    function r(t) {
      let e;
      return "undefined" != typeof window && void 0 !== window[t] && (e = window[t]), e;
    }
    function n(t) {
      const e = r(t);
      if (!e) throw new Error(`${t} is not defined in Window`);
      return e;
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.getLocalStorage = e.getLocalStorageOrThrow = e.getCrypto = e.getCryptoOrThrow = e.getLocation = e.getLocationOrThrow = e.getNavigator = e.getNavigatorOrThrow = e.getDocument = e.getDocumentOrThrow = e.getFromWindowOrThrow = e.getFromWindow = void 0, 
    e.getFromWindow = r, e.getFromWindowOrThrow = n, e.getDocumentOrThrow = function() {
      return n("document");
    }, e.getDocument = function() {
      return r("document");
    }, e.getNavigatorOrThrow = function() {
      return n("navigator");
    }, e.getNavigator = function() {
      return r("navigator");
    }, e.getLocationOrThrow = function() {
      return n("location");
    }, e.getLocation = function() {
      return r("location");
    }, e.getCryptoOrThrow = function() {
      return n("crypto");
    }, e.getCrypto = function() {
      return r("crypto");
    }, e.getLocalStorageOrThrow = function() {
      return n("localStorage");
    }, e.getLocalStorage = function() {
      return r("localStorage");
    };
  },
  51445: (t, e, r) => {
    "use strict";
    e.D = void 0;
    const n = r(19048);
    e.D = function() {
      let t;
      let e;
      try {
        t = n.getDocumentOrThrow(), e = n.getLocationOrThrow();
      } catch (s) {
        return null;
      }
      function r(...e) {
        const r = t.getElementsByTagName("meta");
        for (let t = 0; t < r.length; t++) {
          const n = r[t];
          const i = [ "itemprop", "property", "name" ].map((t => n.getAttribute(t))).filter((t => !!t && e.includes(t)));
          if (i.length && i) {
            const t = n.getAttribute("content");
            if (t) return t;
          }
        }
        return "";
      }
      const i = function() {
        let e = r("name", "og:site_name", "og:title", "twitter:title");
        return e || (e = t.title), e;
      }();
      return {
        description: function() {
          return r("description", "og:description", "twitter:description", "keywords");
        }(),
        url: e.origin,
        icons: function() {
          const r = t.getElementsByTagName("link");
          const n = [];
          for (let t = 0; t < r.length; t++) {
            const i = r[t];
            const s = i.getAttribute("rel");
            if (s && s.toLowerCase().indexOf("icon") > -1) {
              const t = i.getAttribute("href");
              if (t) if (-1 === t.toLowerCase().indexOf("https:") && -1 === t.toLowerCase().indexOf("http:") && 0 !== t.indexOf("//")) {
                let r = e.protocol + "//" + e.host;
                if (0 === t.indexOf("/")) r += t; else {
                  const n = e.pathname.split("/");
                  n.pop();
                  r += n.join("/") + "/" + t;
                }
                n.push(r);
              } else if (0 === t.indexOf("//")) {
                const r = e.protocol + t;
                n.push(r);
              } else n.push(t);
            }
          }
          return n;
        }(),
        name: i
      };
    };
  },
  98484: function(t, e) {
    var r = 'undefined' != typeof self ? self : this;
    var n = function() {
      function t() {
        this.fetch = !1, this.DOMException = r.DOMException;
      }
      return t.prototype = r, new t;
    }();
    !function(t) {
      !function(e) {
        var r = 'URLSearchParams' in t, n = 'Symbol' in t && 'iterator' in Symbol, i = 'FileReader' in t && 'Blob' in t && function() {
          try {
            return new Blob, !0;
          } catch (t) {
            return !1;
          }
        }(), s = 'FormData' in t, o = 'ArrayBuffer' in t;
        if (o) {
          var a = [ '[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]' ];
          var c = ArrayBuffer.isView || function(t) {
            return t && a.indexOf(Object.prototype.toString.call(t)) > -1;
          };
        }
        function u(t) {
          if ('string' != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError('Invalid character in header field name');
          return t.toLowerCase();
        }
        function h(t) {
          return 'string' != typeof t && (t = String(t)), t;
        }
        function l(t) {
          var e = {
            next: function() {
              var e = t.shift();
              return {
                done: void 0 === e,
                value: e
              };
            }
          };
          return n && (e[Symbol.iterator] = function() {
            return e;
          }), e;
        }
        function f(t) {
          this.map = {}, t instanceof f ? t.forEach((function(t, e) {
            this.append(e, t);
          }), this) : Array.isArray(t) ? t.forEach((function(t) {
            this.append(t[0], t[1]);
          }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
            this.append(e, t[e]);
          }), this);
        }
        function p(t) {
          if (t.bodyUsed) return Promise.reject(new TypeError('Already read'));
          t.bodyUsed = !0;
        }
        function d(t) {
          return new Promise((function(e, r) {
            t.onload = function() {
              e(t.result);
            }, t.onerror = function() {
              r(t.error);
            };
          }));
        }
        function g(t) {
          var e = new FileReader;
          var r = d(e);
          return e.readAsArrayBuffer(t), r;
        }
        function y(t) {
          if (t.slice) return t.slice(0);
          var e = new Uint8Array(t.byteLength);
          return e.set(new Uint8Array(t)), e.buffer;
        }
        function v() {
          return this.bodyUsed = !1, this._initBody = function(t) {
            this._bodyInit = t, t ? 'string' == typeof t ? this._bodyText = t : i && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : s && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : r && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : o && i && function(t) {
              return t && DataView.prototype.isPrototypeOf(t);
            }(t) ? (this._bodyArrayBuffer = y(t.buffer), this._bodyInit = new Blob([ this._bodyArrayBuffer ])) : o && (ArrayBuffer.prototype.isPrototypeOf(t) || c(t)) ? this._bodyArrayBuffer = y(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = '', 
            this.headers.get('content-type') || ('string' == typeof t ? this.headers.set('content-type', 'text/plain;charset=UTF-8') : this._bodyBlob && this._bodyBlob.type ? this.headers.set('content-type', this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'));
          }, i && (this.blob = function() {
            var t = p(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([ this._bodyArrayBuffer ]));
            if (this._bodyFormData) throw new Error('could not read FormData body as blob');
            return Promise.resolve(new Blob([ this._bodyText ]));
          }, this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g);
          }), this.text = function() {
            var t = p(this);
            if (t) return t;
            if (this._bodyBlob) return function(t) {
              var e = new FileReader;
              var r = d(e);
              return e.readAsText(t), r;
            }(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
              var e = new Uint8Array(t);
              var r = new Array(e.length);
              for (var n = 0; n < e.length; n++) r[n] = String.fromCharCode(e[n]);
              return r.join('');
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error('could not read FormData body as text');
            return Promise.resolve(this._bodyText);
          }, s && (this.formData = function() {
            return this.text().then(b);
          }), this.json = function() {
            return this.text().then(JSON.parse);
          }, this;
        }
        f.prototype.append = function(t, e) {
          t = u(t), e = h(e);
          var r = this.map[t];
          this.map[t] = r ? r + ', ' + e : e;
        }, f.prototype.delete = function(t) {
          delete this.map[u(t)];
        }, f.prototype.get = function(t) {
          return t = u(t), this.has(t) ? this.map[t] : null;
        }, f.prototype.has = function(t) {
          return this.map.hasOwnProperty(u(t));
        }, f.prototype.set = function(t, e) {
          this.map[u(t)] = h(e);
        }, f.prototype.forEach = function(t, e) {
          for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
        }, f.prototype.keys = function() {
          var t = [];
          return this.forEach((function(e, r) {
            t.push(r);
          })), l(t);
        }, f.prototype.values = function() {
          var t = [];
          return this.forEach((function(e) {
            t.push(e);
          })), l(t);
        }, f.prototype.entries = function() {
          var t = [];
          return this.forEach((function(e, r) {
            t.push([ r, e ]);
          })), l(t);
        }, n && (f.prototype[Symbol.iterator] = f.prototype.entries);
        var _ = [ 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT' ];
        function m(t, e) {
          var r = (e = e || {}).body;
          if (t instanceof m) {
            if (t.bodyUsed) throw new TypeError('Already read');
            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new f(t.headers)), this.method = t.method, 
            this.mode = t.mode, this.signal = t.signal, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0);
          } else this.url = String(t);
          if (this.credentials = e.credentials || this.credentials || 'same-origin', !e.headers && this.headers || (this.headers = new f(e.headers)), 
          this.method = function(t) {
            var e = t.toUpperCase();
            return _.indexOf(e) > -1 ? e : t;
          }(e.method || this.method || 'GET'), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, 
          ('GET' === this.method || 'HEAD' === this.method) && r) throw new TypeError('Body not allowed for GET or HEAD requests');
          this._initBody(r);
        }
        function b(t) {
          var e = new FormData;
          return t.trim().split('&').forEach((function(t) {
            if (t) {
              var r = t.split('=');
              var n = r.shift().replace(/\+/g, ' ');
              var i = r.join('=').replace(/\+/g, ' ');
              e.append(decodeURIComponent(n), decodeURIComponent(i));
            }
          })), e;
        }
        function w(t) {
          var e = new f;
          return t.replace(/\r?\n[\t ]+/g, ' ').split(/\r?\n/).forEach((function(t) {
            var r = t.split(':');
            var n = r.shift().trim();
            if (n) {
              var i = r.join(':').trim();
              e.append(n, i);
            }
          })), e;
        }
        function E(t, e) {
          e || (e = {}), this.type = 'default', this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, 
          this.statusText = 'statusText' in e ? e.statusText : 'OK', this.headers = new f(e.headers), this.url = e.url || '', this._initBody(t);
        }
        m.prototype.clone = function() {
          return new m(this, {
            body: this._bodyInit
          });
        }, v.call(m.prototype), v.call(E.prototype), E.prototype.clone = function() {
          return new E(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new f(this.headers),
            url: this.url
          });
        }, E.error = function() {
          var t = new E(null, {
            status: 0,
            statusText: ''
          });
          return t.type = 'error', t;
        };
        var S = [ 301, 302, 303, 307, 308 ];
        E.redirect = function(t, e) {
          if (-1 === S.indexOf(e)) throw new RangeError('Invalid status code');
          return new E(null, {
            status: e,
            headers: {
              location: t
            }
          });
        }, e.DOMException = t.DOMException;
        try {
          new e.DOMException;
        } catch (I) {
          e.DOMException = function(t, e) {
            this.message = t, this.name = e;
            var r = Error(t);
            this.stack = r.stack;
          }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException;
        }
        function O(t, r) {
          return new Promise((function(n, s) {
            var o = new m(t, r);
            if (o.signal && o.signal.aborted) return s(new e.DOMException('Aborted', 'AbortError'));
            var a = new XMLHttpRequest;
            function c() {
              a.abort();
            }
            a.onload = function() {
              var t = {
                status: a.status,
                statusText: a.statusText,
                headers: w(a.getAllResponseHeaders() || '')
              };
              t.url = 'responseURL' in a ? a.responseURL : t.headers.get('X-Request-URL');
              var e = 'response' in a ? a.response : a.responseText;
              n(new E(e, t));
            }, a.onerror = function() {
              s(new TypeError('Network request failed'));
            }, a.ontimeout = function() {
              s(new TypeError('Network request failed'));
            }, a.onabort = function() {
              s(new e.DOMException('Aborted', 'AbortError'));
            }, a.open(o.method, o.url, !0), 'include' === o.credentials ? a.withCredentials = !0 : 'omit' === o.credentials && (a.withCredentials = !1), 
            'responseType' in a && i && (a.responseType = 'blob'), o.headers.forEach((function(t, e) {
              a.setRequestHeader(e, t);
            })), o.signal && (o.signal.addEventListener('abort', c), a.onreadystatechange = function() {
              4 === a.readyState && o.signal.removeEventListener('abort', c);
            }), a.send(void 0 === o._bodyInit ? null : o._bodyInit);
          }));
        }
        O.polyfill = !0, t.fetch || (t.fetch = O, t.Headers = f, t.Request = m, t.Response = E), e.Headers = f, e.Request = m, e.Response = E, 
        e.fetch = O, Object.defineProperty(e, '__esModule', {
          value: !0
        });
      }({});
    }(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
    var i = n;
    (e = i.fetch).default = i.fetch, e.fetch = i.fetch, e.Headers = i.Headers, e.Request = i.Request, e.Response = i.Response, 
    t.exports = e;
  },
  33657: t => {
    "use strict";
    var e = '%[a-f0-9]{2}';
    var r = new RegExp('(' + e + ')|([^%]+?)', 'gi');
    var n = new RegExp('(' + e + ')+', 'gi');
    function i(t, e) {
      try {
        return [ decodeURIComponent(t.join('')) ];
      } catch (s) {}
      if (1 === t.length) return t;
      e = e || 1;
      var r = t.slice(0, e);
      var n = t.slice(e);
      return Array.prototype.concat.call([], i(r), i(n));
    }
    function s(t) {
      try {
        return decodeURIComponent(t);
      } catch (s) {
        var e = t.match(r) || [];
        for (var n = 1; n < e.length; n++) e = (t = i(e, n).join('')).match(r) || [];
        return t;
      }
    }
    t.exports = function(t) {
      if ('string' != typeof t) throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof t + '`');
      try {
        return t = t.replace(/\+/g, ' '), decodeURIComponent(t);
      } catch (e) {
        return function(t) {
          var r = {
            '%FE%FF': '��',
            '%FF%FE': '��'
          };
          var i = n.exec(t);
          for (;i; ) {
            try {
              r[i[0]] = decodeURIComponent(i[0]);
            } catch (e) {
              var o = s(i[0]);
              o !== i[0] && (r[i[0]] = o);
            }
            i = n.exec(t);
          }
          r['%C2'] = '�';
          var a = Object.keys(r);
          for (var c = 0; c < a.length; c++) {
            var u = a[c];
            t = t.replace(new RegExp(u, 'g'), r[u]);
          }
          return t;
        }(t);
      }
    };
  },
  86329: t => {
    "use strict";
    var e = 'object' == typeof Reflect ? Reflect : null;
    var r = e && 'function' == typeof e.apply ? e.apply : function(t, e, r) {
      return Function.prototype.apply.call(t, e, r);
    };
    var n;
    n = e && 'function' == typeof e.ownKeys ? e.ownKeys : Object.getOwnPropertySymbols ? function(t) {
      return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
    } : function(t) {
      return Object.getOwnPropertyNames(t);
    };
    var i = Number.isNaN || function(t) {
      return t != t;
    };
    function s() {
      s.init.call(this);
    }
    t.exports = s, t.exports.once = function(t, e) {
      return new Promise((function(r, n) {
        function i(r) {
          t.removeListener(e, s), n(r);
        }
        function s() {
          'function' == typeof t.removeListener && t.removeListener('error', i), r([].slice.call(arguments));
        }
        g(t, e, s, {
          once: !0
        }), 'error' !== e && function(t, e, r) {
          'function' == typeof t.on && g(t, 'error', e, r);
        }(t, i, {
          once: !0
        });
      }));
    }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
    var o = 10;
    function a(t) {
      if ('function' != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
    }
    function c(t) {
      return void 0 === t._maxListeners ? s.defaultMaxListeners : t._maxListeners;
    }
    function u(t, e, r, n) {
      var i;
      var s;
      var o;
      if (a(r), void 0 === (s = t._events) ? (s = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== s.newListener && (t.emit('newListener', e, r.listener ? r.listener : r), 
      s = t._events), o = s[e]), void 0 === o) o = s[e] = r, ++t._eventsCount; else if ('function' == typeof o ? o = s[e] = n ? [ r, o ] : [ o, r ] : n ? o.unshift(r) : o.push(r), 
      (i = c(t)) > 0 && o.length > i && !o.warned) {
        o.warned = !0;
        var u = new Error('Possible EventEmitter memory leak detected. ' + o.length + ' ' + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        u.name = 'MaxListenersExceededWarning', u.emitter = t, u.type = e, u.count = o.length, function(t) {
          console && console.warn && console.warn(t);
        }(u);
      }
      return t;
    }
    function h() {
      if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }
    function l(t, e, r) {
      var n = {
        fired: !1,
        wrapFn: void 0,
        target: t,
        type: e,
        listener: r
      };
      var i = h.bind(n);
      return i.listener = r, n.wrapFn = i, i;
    }
    function f(t, e, r) {
      var n = t._events;
      if (void 0 === n) return [];
      var i = n[e];
      return void 0 === i ? [] : 'function' == typeof i ? r ? [ i.listener || i ] : [ i ] : r ? function(t) {
        var e = new Array(t.length);
        for (var r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
        return e;
      }(i) : d(i, i.length);
    }
    function p(t) {
      var e = this._events;
      if (void 0 !== e) {
        var r = e[t];
        if ('function' == typeof r) return 1;
        if (void 0 !== r) return r.length;
      }
      return 0;
    }
    function d(t, e) {
      var r = new Array(e);
      for (var n = 0; n < e; ++n) r[n] = t[n];
      return r;
    }
    function g(t, e, r, n) {
      if ('function' == typeof t.on) n.once ? t.once(e, r) : t.on(e, r); else {
        if ('function' != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
        t.addEventListener(e, (function i(s) {
          n.once && t.removeEventListener(e, i), r(s);
        }));
      }
    }
    Object.defineProperty(s, 'defaultMaxListeners', {
      enumerable: !0,
      get: function() {
        return o;
      },
      set: function(t) {
        if ('number' != typeof t || t < 0 || i(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + '.');
        o = t;
      }
    }), s.init = function() {
      void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), 
      this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, s.prototype.setMaxListeners = function(t) {
      if ('number' != typeof t || t < 0 || i(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + '.');
      return this._maxListeners = t, this;
    }, s.prototype.getMaxListeners = function() {
      return c(this);
    }, s.prototype.emit = function(t) {
      var e = [];
      for (var n = 1; n < arguments.length; n++) e.push(arguments[n]);
      var i = 'error' === t;
      var s = this._events;
      if (void 0 !== s) i = i && void 0 === s.error; else if (!i) return !1;
      if (i) {
        var o;
        if (e.length > 0 && (o = e[0]), o instanceof Error) throw o;
        var a = new Error('Unhandled error.' + (o ? ' (' + o.message + ')' : ''));
        throw a.context = o, a;
      }
      var c = s[t];
      if (void 0 === c) return !1;
      if ('function' == typeof c) r(c, this, e); else {
        var u = c.length;
        var h = d(c, u);
        for (n = 0; n < u; ++n) r(h[n], this, e);
      }
      return !0;
    }, s.prototype.addListener = function(t, e) {
      return u(this, t, e, !1);
    }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(t, e) {
      return u(this, t, e, !0);
    }, s.prototype.once = function(t, e) {
      return a(e), this.on(t, l(this, t, e)), this;
    }, s.prototype.prependOnceListener = function(t, e) {
      return a(e), this.prependListener(t, l(this, t, e)), this;
    }, s.prototype.removeListener = function(t, e) {
      var r, n, i, s, o;
      if (a(e), void 0 === (n = this._events)) return this;
      if (void 0 === (r = n[t])) return this;
      if (r === e || r.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[t], n.removeListener && this.emit('removeListener', t, r.listener || e)); else if ('function' != typeof r) {
        for (i = -1, s = r.length - 1; s >= 0; s--) if (r[s] === e || r[s].listener === e) {
          o = r[s].listener, i = s;
          break;
        }
        if (i < 0) return this;
        0 === i ? r.shift() : function(t, e) {
          for (;e + 1 < t.length; e++) t[e] = t[e + 1];
          t.pop();
        }(r, i), 1 === r.length && (n[t] = r[0]), void 0 !== n.removeListener && this.emit('removeListener', t, o || e);
      }
      return this;
    }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(t) {
      var e, r, n;
      if (void 0 === (r = this._events)) return this;
      if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[t]), 
      this;
      if (0 === arguments.length) {
        var i = Object.keys(r);
        var s;
        for (n = 0; n < i.length; ++n) 'removeListener' !== (s = i[n]) && this.removeAllListeners(s);
        return this.removeAllListeners('removeListener'), this._events = Object.create(null), this._eventsCount = 0, this;
      }
      if ('function' == typeof (e = r[t])) this.removeListener(t, e); else if (void 0 !== e) for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
      return this;
    }, s.prototype.listeners = function(t) {
      return f(this, t, !0);
    }, s.prototype.rawListeners = function(t) {
      return f(this, t, !1);
    }, s.listenerCount = function(t, e) {
      return 'function' == typeof t.listenerCount ? t.listenerCount(e) : p.call(t, e);
    }, s.prototype.listenerCount = p, s.prototype.eventNames = function() {
      return this._eventsCount > 0 ? n(this._events) : [];
    };
  },
  78900: t => {
    "use strict";
    t.exports = function(t, e) {
      var r = {};
      var n = Object.keys(t);
      var i = Array.isArray(e);
      for (var s = 0; s < n.length; s++) {
        var o = n[s];
        var a = t[o];
        (i ? -1 !== e.indexOf(o) : e(o, a, t)) && (r[o] = a);
      }
      return r;
    };
  },
  59036: (t, e, r) => {
    t = r.nmd(t);
    var n = '__lodash_hash_undefined__';
    var i = 9007199254740991;
    var s = '[object Arguments]', o = '[object Array]', a = '[object Boolean]', c = '[object Date]', u = '[object Error]', h = '[object Function]', l = '[object Map]', f = '[object Number]', p = '[object Object]', d = '[object Promise]', g = '[object RegExp]', y = '[object Set]', v = '[object String]', _ = '[object Symbol]', m = '[object WeakMap]';
    var b = '[object ArrayBuffer]', w = '[object DataView]';
    var E = /^\[object .+?Constructor\]$/;
    var S = /^(?:0|[1-9]\d*)$/;
    var O = {};
    O['[object Float32Array]'] = O['[object Float64Array]'] = O['[object Int8Array]'] = O['[object Int16Array]'] = O['[object Int32Array]'] = O['[object Uint8Array]'] = O['[object Uint8ClampedArray]'] = O['[object Uint16Array]'] = O['[object Uint32Array]'] = !0, 
    O[s] = O[o] = O[b] = O[a] = O[w] = O[c] = O[u] = O[h] = O[l] = O[f] = O[p] = O[g] = O[y] = O[v] = O[m] = !1;
    var I = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g;
    var P = 'object' == typeof self && self && self.Object === Object && self;
    var x = I || P || Function('return this')();
    var A = e && !e.nodeType && e;
    var N = A && t && !t.nodeType && t;
    var R = N && N.exports === A;
    var T = R && I.process;
    var j = function() {
      try {
        return T && T.binding && T.binding('util');
      } catch (t) {}
    }();
    var C = j && j.isTypedArray;
    function L(t, e) {
      var r = -1, n = null == t ? 0 : t.length;
      for (;++r < n; ) if (e(t[r], r, t)) return !0;
      return !1;
    }
    function U(t, e) {
      return t.has(e);
    }
    function M(t) {
      var e = -1, r = Array(t.size);
      return t.forEach((function(t, n) {
        r[++e] = [ n, t ];
      })), r;
    }
    function D(t) {
      var e = -1, r = Array(t.size);
      return t.forEach((function(t) {
        r[++e] = t;
      })), r;
    }
    var k = Array.prototype, z = Function.prototype, $ = Object.prototype;
    var q = x['__core-js_shared__'];
    var H = z.toString;
    var B = $.hasOwnProperty;
    var V = function() {
      var t = /[^.]+$/.exec(q && q.keys && q.keys.IE_PROTO || '');
      return t ? 'Symbol(src)_1.' + t : '';
    }();
    var K = $.toString;
    var F = RegExp('^' + H.call(B).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    var W = R ? x.Buffer : void 0, G = x.Symbol, Y = x.Uint8Array, J = $.propertyIsEnumerable, X = k.splice, Q = G ? G.toStringTag : void 0;
    var Z = Object.getOwnPropertySymbols, tt = W ? W.isBuffer : void 0, et = function(t, e) {
      return function(r) {
        return t(e(r));
      };
    }(Object.keys, Object);
    var rt = Rt(x, 'DataView'), nt = Rt(x, 'Map'), it = Rt(x, 'Promise'), st = Rt(x, 'Set'), ot = Rt(x, 'WeakMap'), at = Rt(Object, 'create');
    var ct = Lt(rt), ut = Lt(nt), ht = Lt(it), lt = Lt(st), ft = Lt(ot);
    var pt = G ? G.prototype : void 0, dt = pt ? pt.valueOf : void 0;
    function gt(t) {
      var e = -1, r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    function yt(t) {
      var e = -1, r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    function vt(t) {
      var e = -1, r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    function _t(t) {
      var e = -1, r = null == t ? 0 : t.length;
      for (this.__data__ = new vt; ++e < r; ) this.add(t[e]);
    }
    function mt(t) {
      var e = this.__data__ = new yt(t);
      this.size = e.size;
    }
    function bt(t, e) {
      var r = Dt(t), n = !r && Mt(t), i = !r && !n && kt(t), s = !r && !n && !i && Bt(t), o = r || n || i || s, a = o ? function(t, e) {
        var r = -1, n = Array(t);
        for (;++r < t; ) n[r] = e(r);
        return n;
      }(t.length, String) : [], c = a.length;
      for (var u in t) !e && !B.call(t, u) || o && ('length' == u || i && ('offset' == u || 'parent' == u) || s && ('buffer' == u || 'byteLength' == u || 'byteOffset' == u) || Ct(u, c)) || a.push(u);
      return a;
    }
    function wt(t, e) {
      var r = t.length;
      for (;r--; ) if (Ut(t[r][0], e)) return r;
      return -1;
    }
    function Et(t) {
      return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : Q && Q in Object(t) ? function(t) {
        var e = B.call(t, Q), r = t[Q];
        try {
          t[Q] = void 0;
          var n = !0;
        } catch (s) {}
        var i = K.call(t);
        n && (e ? t[Q] = r : delete t[Q]);
        return i;
      }(t) : function(t) {
        return K.call(t);
      }(t);
    }
    function St(t) {
      return Ht(t) && Et(t) == s;
    }
    function Ot(t, e, r, n, i) {
      return t === e || (null == t || null == e || !Ht(t) && !Ht(e) ? t != t && e != e : function(t, e, r, n, i, h) {
        var d = Dt(t), m = Dt(e), E = d ? o : jt(t), S = m ? o : jt(e);
        var O = (E = E == s ? p : E) == p, I = (S = S == s ? p : S) == p, P = E == S;
        if (P && kt(t)) {
          if (!kt(e)) return !1;
          d = !0, O = !1;
        }
        if (P && !O) return h || (h = new mt), d || Bt(t) ? xt(t, e, r, n, i, h) : function(t, e, r, n, i, s, o) {
          switch (r) {
           case w:
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
            t = t.buffer, e = e.buffer;

           case b:
            return !(t.byteLength != e.byteLength || !s(new Y(t), new Y(e)));

           case a:
           case c:
           case f:
            return Ut(+t, +e);

           case u:
            return t.name == e.name && t.message == e.message;

           case g:
           case v:
            return t == e + '';

           case l:
            var h = M;

           case y:
            var p = 1 & n;
            if (h || (h = D), t.size != e.size && !p) return !1;
            var d = o.get(t);
            if (d) return d == e;
            n |= 2, o.set(t, e);
            var m = xt(h(t), h(e), n, i, s, o);
            return o.delete(t), m;

           case _:
            if (dt) return dt.call(t) == dt.call(e);
          }
          return !1;
        }(t, e, E, r, n, i, h);
        if (!(1 & r)) {
          var x = O && B.call(t, '__wrapped__'), A = I && B.call(e, '__wrapped__');
          if (x || A) {
            var N = x ? t.value() : t, R = A ? e.value() : e;
            return h || (h = new mt), i(N, R, r, n, h);
          }
        }
        if (!P) return !1;
        return h || (h = new mt), function(t, e, r, n, i, s) {
          var o = 1 & r, a = At(t), c = a.length, u = At(e).length;
          if (c != u && !o) return !1;
          var h = c;
          for (;h--; ) {
            var l = a[h];
            if (!(o ? l in e : B.call(e, l))) return !1;
          }
          var f = s.get(t);
          if (f && s.get(e)) return f == e;
          var p = !0;
          s.set(t, e), s.set(e, t);
          var d = o;
          for (;++h < c; ) {
            var g = t[l = a[h]], y = e[l];
            if (n) var v = o ? n(y, g, l, e, t, s) : n(g, y, l, t, e, s);
            if (!(void 0 === v ? g === y || i(g, y, r, n, s) : v)) {
              p = !1;
              break;
            }
            d || (d = 'constructor' == l);
          }
          if (p && !d) {
            var _ = t.constructor, m = e.constructor;
            _ == m || !('constructor' in t) || !('constructor' in e) || 'function' == typeof _ && _ instanceof _ && 'function' == typeof m && m instanceof m || (p = !1);
          }
          return s.delete(t), s.delete(e), p;
        }(t, e, r, n, i, h);
      }(t, e, r, n, Ot, i));
    }
    function It(t) {
      return !(!qt(t) || function(t) {
        return !!V && V in t;
      }(t)) && (zt(t) ? F : E).test(Lt(t));
    }
    function Pt(t) {
      if (!function(t) {
        var e = t && t.constructor, r = 'function' == typeof e && e.prototype || $;
        return t === r;
      }(t)) return et(t);
      var e = [];
      for (var r in Object(t)) B.call(t, r) && 'constructor' != r && e.push(r);
      return e;
    }
    function xt(t, e, r, n, i, s) {
      var o = 1 & r, a = t.length, c = e.length;
      if (a != c && !(o && c > a)) return !1;
      var u = s.get(t);
      if (u && s.get(e)) return u == e;
      var h = -1, l = !0, f = 2 & r ? new _t : void 0;
      for (s.set(t, e), s.set(e, t); ++h < a; ) {
        var p = t[h], d = e[h];
        if (n) var g = o ? n(d, p, h, e, t, s) : n(p, d, h, t, e, s);
        if (void 0 !== g) {
          if (g) continue;
          l = !1;
          break;
        }
        if (f) {
          if (!L(e, (function(t, e) {
            if (!U(f, e) && (p === t || i(p, t, r, n, s))) return f.push(e);
          }))) {
            l = !1;
            break;
          }
        } else if (p !== d && !i(p, d, r, n, s)) {
          l = !1;
          break;
        }
      }
      return s.delete(t), s.delete(e), l;
    }
    function At(t) {
      return function(t, e, r) {
        var n = e(t);
        return Dt(t) ? n : function(t, e) {
          var r = -1, n = e.length, i = t.length;
          for (;++r < n; ) t[i + r] = e[r];
          return t;
        }(n, r(t));
      }(t, Vt, Tt);
    }
    function Nt(t, e) {
      var r = t.__data__;
      return function(t) {
        var e = typeof t;
        return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e ? '__proto__' !== t : null === t;
      }(e) ? r['string' == typeof e ? 'string' : 'hash'] : r.map;
    }
    function Rt(t, e) {
      var r = function(t, e) {
        return null == t ? void 0 : t[e];
      }(t, e);
      return It(r) ? r : void 0;
    }
    gt.prototype.clear = function() {
      this.__data__ = at ? at(null) : {}, this.size = 0;
    }, gt.prototype.delete = function(t) {
      var e = this.has(t) && delete this.__data__[t];
      return this.size -= e ? 1 : 0, e;
    }, gt.prototype.get = function(t) {
      var e = this.__data__;
      if (at) {
        var r = e[t];
        return r === n ? void 0 : r;
      }
      return B.call(e, t) ? e[t] : void 0;
    }, gt.prototype.has = function(t) {
      var e = this.__data__;
      return at ? void 0 !== e[t] : B.call(e, t);
    }, gt.prototype.set = function(t, e) {
      var r = this.__data__;
      return this.size += this.has(t) ? 0 : 1, r[t] = at && void 0 === e ? n : e, this;
    }, yt.prototype.clear = function() {
      this.__data__ = [], this.size = 0;
    }, yt.prototype.delete = function(t) {
      var e = this.__data__, r = wt(e, t);
      return !(r < 0) && (r == e.length - 1 ? e.pop() : X.call(e, r, 1), --this.size, !0);
    }, yt.prototype.get = function(t) {
      var e = this.__data__, r = wt(e, t);
      return r < 0 ? void 0 : e[r][1];
    }, yt.prototype.has = function(t) {
      return wt(this.__data__, t) > -1;
    }, yt.prototype.set = function(t, e) {
      var r = this.__data__, n = wt(r, t);
      return n < 0 ? (++this.size, r.push([ t, e ])) : r[n][1] = e, this;
    }, vt.prototype.clear = function() {
      this.size = 0, this.__data__ = {
        hash: new gt,
        map: new (nt || yt),
        string: new gt
      };
    }, vt.prototype.delete = function(t) {
      var e = Nt(this, t).delete(t);
      return this.size -= e ? 1 : 0, e;
    }, vt.prototype.get = function(t) {
      return Nt(this, t).get(t);
    }, vt.prototype.has = function(t) {
      return Nt(this, t).has(t);
    }, vt.prototype.set = function(t, e) {
      var r = Nt(this, t), n = r.size;
      return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
    }, _t.prototype.add = _t.prototype.push = function(t) {
      return this.__data__.set(t, n), this;
    }, _t.prototype.has = function(t) {
      return this.__data__.has(t);
    }, mt.prototype.clear = function() {
      this.__data__ = new yt, this.size = 0;
    }, mt.prototype.delete = function(t) {
      var e = this.__data__, r = e.delete(t);
      return this.size = e.size, r;
    }, mt.prototype.get = function(t) {
      return this.__data__.get(t);
    }, mt.prototype.has = function(t) {
      return this.__data__.has(t);
    }, mt.prototype.set = function(t, e) {
      var r = this.__data__;
      if (r instanceof yt) {
        var n = r.__data__;
        if (!nt || n.length < 199) return n.push([ t, e ]), this.size = ++r.size, this;
        r = this.__data__ = new vt(n);
      }
      return r.set(t, e), this.size = r.size, this;
    };
    var Tt = Z ? function(t) {
      return null == t ? [] : (t = Object(t), function(t, e) {
        var r = -1, n = null == t ? 0 : t.length, i = 0, s = [];
        for (;++r < n; ) {
          var o = t[r];
          e(o, r, t) && (s[i++] = o);
        }
        return s;
      }(Z(t), (function(e) {
        return J.call(t, e);
      })));
    } : function() {
      return [];
    };
    var jt = Et;
    function Ct(t, e) {
      return !!(e = null == e ? i : e) && ('number' == typeof t || S.test(t)) && t > -1 && t % 1 == 0 && t < e;
    }
    function Lt(t) {
      if (null != t) {
        try {
          return H.call(t);
        } catch (e) {}
        try {
          return t + '';
        } catch (e) {}
      }
      return '';
    }
    function Ut(t, e) {
      return t === e || t != t && e != e;
    }
    (rt && jt(new rt(new ArrayBuffer(1))) != w || nt && jt(new nt) != l || it && jt(it.resolve()) != d || st && jt(new st) != y || ot && jt(new ot) != m) && (jt = function(t) {
      var e = Et(t), r = e == p ? t.constructor : void 0, n = r ? Lt(r) : '';
      if (n) switch (n) {
       case ct:
        return w;

       case ut:
        return l;

       case ht:
        return d;

       case lt:
        return y;

       case ft:
        return m;
      }
      return e;
    });
    var Mt = St(function() {
      return arguments;
    }()) ? St : function(t) {
      return Ht(t) && B.call(t, 'callee') && !J.call(t, 'callee');
    };
    var Dt = Array.isArray;
    var kt = tt || function() {
      return !1;
    };
    function zt(t) {
      if (!qt(t)) return !1;
      var e = Et(t);
      return e == h || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e;
    }
    function $t(t) {
      return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= i;
    }
    function qt(t) {
      var e = typeof t;
      return null != t && ('object' == e || 'function' == e);
    }
    function Ht(t) {
      return null != t && 'object' == typeof t;
    }
    var Bt = C ? function(t) {
      return function(e) {
        return t(e);
      };
    }(C) : function(t) {
      return Ht(t) && $t(t.length) && !!O[Et(t)];
    };
    function Vt(t) {
      return function(t) {
        return null != t && $t(t.length) && !zt(t);
      }(t) ? bt(t) : Pt(t);
    }
    t.exports = function(t, e) {
      return Ot(t, e);
    };
  },
  21686: (t, e, r) => {
    "use strict";
    const n = r(68617);
    const i = r(33657);
    const s = r(69830);
    const o = r(78900);
    const a = Symbol('encodeFragmentIdentifier');
    function c(t) {
      if ('string' != typeof t || 1 !== t.length) throw new TypeError('arrayFormatSeparator must be single character string');
    }
    function u(t, e) {
      return e.encode ? e.strict ? n(t) : encodeURIComponent(t) : t;
    }
    function h(t, e) {
      return e.decode ? i(t) : t;
    }
    function l(t) {
      return Array.isArray(t) ? t.sort() : 'object' == typeof t ? l(Object.keys(t)).sort(((t, e) => Number(t) - Number(e))).map((e => t[e])) : t;
    }
    function f(t) {
      const e = t.indexOf('#');
      return -1 !== e && (t = t.slice(0, e)), t;
    }
    function p(t) {
      const e = (t = f(t)).indexOf('?');
      return -1 === e ? '' : t.slice(e + 1);
    }
    function d(t, e) {
      return e.parseNumbers && !Number.isNaN(Number(t)) && 'string' == typeof t && '' !== t.trim() ? t = Number(t) : !e.parseBooleans || null === t || 'true' !== t.toLowerCase() && 'false' !== t.toLowerCase() || (t = 'true' === t.toLowerCase()), 
      t;
    }
    function g(t, e) {
      c((e = Object.assign({
        decode: !0,
        sort: !0,
        arrayFormat: 'none',
        arrayFormatSeparator: ',',
        parseNumbers: !1,
        parseBooleans: !1
      }, e)).arrayFormatSeparator);
      const r = function(t) {
        let e;
        switch (t.arrayFormat) {
         case 'index':
          return (t, r, n) => {
            e = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ''), e ? (void 0 === n[t] && (n[t] = {}), n[t][e[1]] = r) : n[t] = r;
          };

         case 'bracket':
          return (t, r, n) => {
            e = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ''), e ? void 0 !== n[t] ? n[t] = [].concat(n[t], r) : n[t] = [ r ] : n[t] = r;
          };

         case 'colon-list-separator':
          return (t, r, n) => {
            e = /(:list)$/.exec(t), t = t.replace(/:list$/, ''), e ? void 0 !== n[t] ? n[t] = [].concat(n[t], r) : n[t] = [ r ] : n[t] = r;
          };

         case 'comma':
         case 'separator':
          return (e, r, n) => {
            const i = 'string' == typeof r && r.includes(t.arrayFormatSeparator);
            const s = 'string' == typeof r && !i && h(r, t).includes(t.arrayFormatSeparator);
            r = s ? h(r, t) : r;
            const o = i || s ? r.split(t.arrayFormatSeparator).map((e => h(e, t))) : null === r ? r : h(r, t);
            n[e] = o;
          };

         case 'bracket-separator':
          return (e, r, n) => {
            const i = /(\[\])$/.test(e);
            if (e = e.replace(/\[\]$/, ''), !i) return void (n[e] = r ? h(r, t) : r);
            const s = null === r ? [] : r.split(t.arrayFormatSeparator).map((e => h(e, t)));
            void 0 !== n[e] ? n[e] = [].concat(n[e], s) : n[e] = s;
          };

         default:
          return (t, e, r) => {
            void 0 !== r[t] ? r[t] = [].concat(r[t], e) : r[t] = e;
          };
        }
      }(e);
      const n = Object.create(null);
      if ('string' != typeof t) return n;
      if (!(t = t.trim().replace(/^[?#&]/, ''))) return n;
      for (const i of t.split('&')) {
        if ('' === i) continue;
        let [t, o] = s(e.decode ? i.replace(/\+/g, ' ') : i, '=');
        o = void 0 === o ? null : [ 'comma', 'separator', 'bracket-separator' ].includes(e.arrayFormat) ? o : h(o, e), r(h(t, e), o, n);
      }
      for (const i of Object.keys(n)) {
        const t = n[i];
        if ('object' == typeof t && null !== t) for (const r of Object.keys(t)) t[r] = d(t[r], e); else n[i] = d(t, e);
      }
      return !1 === e.sort ? n : (!0 === e.sort ? Object.keys(n).sort() : Object.keys(n).sort(e.sort)).reduce(((t, e) => {
        const r = n[e];
        return Boolean(r) && 'object' == typeof r && !Array.isArray(r) ? t[e] = l(r) : t[e] = r, t;
      }), Object.create(null));
    }
    e.extract = p, e.parse = g, e.stringify = (t, e) => {
      if (!t) return '';
      c((e = Object.assign({
        encode: !0,
        strict: !0,
        arrayFormat: 'none',
        arrayFormatSeparator: ','
      }, e)).arrayFormatSeparator);
      const r = r => e.skipNull && (t => null == t)(t[r]) || e.skipEmptyString && '' === t[r];
      const n = function(t) {
        switch (t.arrayFormat) {
         case 'index':
          return e => (r, n) => {
            const i = r.length;
            return void 0 === n || t.skipNull && null === n || t.skipEmptyString && '' === n ? r : null === n ? [ ...r, [ u(e, t), '[', i, ']' ].join('') ] : [ ...r, [ u(e, t), '[', u(i, t), ']=', u(n, t) ].join('') ];
          };

         case 'bracket':
          return e => (r, n) => void 0 === n || t.skipNull && null === n || t.skipEmptyString && '' === n ? r : null === n ? [ ...r, [ u(e, t), '[]' ].join('') ] : [ ...r, [ u(e, t), '[]=', u(n, t) ].join('') ];

         case 'colon-list-separator':
          return e => (r, n) => void 0 === n || t.skipNull && null === n || t.skipEmptyString && '' === n ? r : null === n ? [ ...r, [ u(e, t), ':list=' ].join('') ] : [ ...r, [ u(e, t), ':list=', u(n, t) ].join('') ];

         case 'comma':
         case 'separator':
         case 'bracket-separator':
          {
            const e = 'bracket-separator' === t.arrayFormat ? '[]=' : '=';
            return r => (n, i) => void 0 === i || t.skipNull && null === i || t.skipEmptyString && '' === i ? n : (i = null === i ? '' : i, 
            0 === n.length ? [ [ u(r, t), e, u(i, t) ].join('') ] : [ [ n, u(i, t) ].join(t.arrayFormatSeparator) ]);
          }

         default:
          return e => (r, n) => void 0 === n || t.skipNull && null === n || t.skipEmptyString && '' === n ? r : null === n ? [ ...r, u(e, t) ] : [ ...r, [ u(e, t), '=', u(n, t) ].join('') ];
        }
      }(e);
      const i = {};
      for (const o of Object.keys(t)) r(o) || (i[o] = t[o]);
      const s = Object.keys(i);
      return !1 !== e.sort && s.sort(e.sort), s.map((r => {
        const i = t[r];
        return void 0 === i ? '' : null === i ? u(r, e) : Array.isArray(i) ? 0 === i.length && 'bracket-separator' === e.arrayFormat ? u(r, e) + '[]' : i.reduce(n(r), []).join('&') : u(r, e) + '=' + u(i, e);
      })).filter((t => t.length > 0)).join('&');
    }, e.parseUrl = (t, e) => {
      e = Object.assign({
        decode: !0
      }, e);
      const [r, n] = s(t, '#');
      return Object.assign({
        url: r.split('?')[0] || '',
        query: g(p(t), e)
      }, e && e.parseFragmentIdentifier && n ? {
        fragmentIdentifier: h(n, e)
      } : {});
    }, e.stringifyUrl = (t, r) => {
      r = Object.assign({
        encode: !0,
        strict: !0,
        [a]: !0
      }, r);
      const n = f(t.url).split('?')[0] || '';
      const i = e.extract(t.url);
      const s = e.parse(i, {
        sort: !1
      });
      const o = Object.assign(s, t.query);
      let c = e.stringify(o, r);
      c && (c = `?${c}`);
      let h = function(t) {
        let e = '';
        const r = t.indexOf('#');
        return -1 !== r && (e = t.slice(r)), e;
      }(t.url);
      return t.fragmentIdentifier && (h = `#${r[a] ? u(t.fragmentIdentifier, r) : t.fragmentIdentifier}`), `${n}${c}${h}`;
    }, e.pick = (t, r, n) => {
      n = Object.assign({
        parseFragmentIdentifier: !0,
        [a]: !1
      }, n);
      const {url: i, query: s, fragmentIdentifier: c} = e.parseUrl(t, n);
      return e.stringifyUrl({
        url: i,
        query: o(s, r),
        fragmentIdentifier: c
      }, n);
    }, e.exclude = (t, r, n) => {
      const i = Array.isArray(r) ? t => !r.includes(t) : (t, e) => !r(t, e);
      return e.pick(t, i, n);
    };
  },
  84224: t => {
    "use strict";
    function e(t) {
      try {
        return JSON.stringify(t);
      } catch (e) {
        return '"[Circular]"';
      }
    }
    t.exports = function(t, r, n) {
      var i = n && n.stringify || e;
      if ('object' == typeof t && null !== t) {
        var s = r.length + 1;
        if (1 === s) return t;
        var o = new Array(s);
        o[0] = i(t);
        for (var a = 1; a < s; a++) o[a] = i(r[a]);
        return o.join(' ');
      }
      if ('string' != typeof t) return t;
      var c = r.length;
      if (0 === c) return t;
      var u = '';
      var h = 0;
      var l = -1;
      var f = t && t.length || 0;
      for (var p = 0; p < f; ) {
        if (37 === t.charCodeAt(p) && p + 1 < f) {
          switch (l = l > -1 ? l : 0, t.charCodeAt(p + 1)) {
           case 100:
           case 102:
            if (h >= c) break;
            if (null == r[h]) break;
            l < p && (u += t.slice(l, p)), u += Number(r[h]), l = p + 2, p++;
            break;

           case 105:
            if (h >= c) break;
            if (null == r[h]) break;
            l < p && (u += t.slice(l, p)), u += Math.floor(Number(r[h])), l = p + 2, p++;
            break;

           case 79:
           case 111:
           case 106:
            if (h >= c) break;
            if (void 0 === r[h]) break;
            l < p && (u += t.slice(l, p));
            var d = typeof r[h];
            if ('string' === d) {
              u += '\'' + r[h] + '\'', l = p + 2, p++;
              break;
            }
            if ('function' === d) {
              u += r[h].name || '<anonymous>', l = p + 2, p++;
              break;
            }
            u += i(r[h]), l = p + 2, p++;
            break;

           case 115:
            if (h >= c) break;
            l < p && (u += t.slice(l, p)), u += String(r[h]), l = p + 2, p++;
            break;

           case 37:
            l < p && (u += t.slice(l, p)), u += '%', l = p + 2, p++, h--;
          }
          ++h;
        }
        ++p;
      }
      if (-1 === l) return t;
      l < f && (u += t.slice(l));
      return u;
    };
  },
  70967: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.safeJsonParse = function(t) {
      if ('string' != typeof t) throw new Error("Cannot safe json parse value of type " + typeof t);
      try {
        return JSON.parse(t);
      } catch (e) {
        return t;
      }
    }, e.safeJsonStringify = function(t) {
      return 'string' == typeof t ? t : JSON.stringify(t, ((t, e) => void 0 === e ? null : e));
    };
  },
  69830: t => {
    "use strict";
    t.exports = (t, e) => {
      if ('string' != typeof t || 'string' != typeof e) throw new TypeError('Expected the arguments to be of type `string`');
      if ('' === e) return [ t ];
      const r = t.indexOf(e);
      return -1 === r ? [ t ] : [ t.slice(0, r), t.slice(r + e.length) ];
    };
  },
  68617: t => {
    "use strict";
    t.exports = t => encodeURIComponent(t).replace(/[!'()*]/g, (t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`));
  },
  1648: t => {
    "use strict";
    t.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
    };
  },
  43149: (t, e, r) => {
    "use strict";
    const n = r(84224);
    t.exports = o;
    const i = function() {
      function t(t) {
        return void 0 !== t && t;
      }
      try {
        return 'undefined' != typeof globalThis || Object.defineProperty(Object.prototype, 'globalThis', {
          get: function() {
            return delete Object.prototype.globalThis, this.globalThis = this;
          },
          configurable: !0
        }), globalThis;
      } catch (e) {
        return t(self) || t(window) || t(this) || {};
      }
    }().console || {};
    const s = {
      mapHttpRequest: d,
      mapHttpResponse: d,
      wrapRequestSerializer: g,
      wrapResponseSerializer: g,
      wrapErrorSerializer: g,
      req: d,
      res: d,
      err: function(t) {
        const e = {
          type: t.constructor.name,
          msg: t.message,
          stack: t.stack
        };
        for (const r in t) void 0 === e[r] && (e[r] = t[r]);
        return e;
      }
    };
    function o(t) {
      (t = t || {}).browser = t.browser || {};
      const e = t.browser.transmit;
      if (e && 'function' != typeof e.send) throw Error('pino: transmit option must have a send function');
      const r = t.browser.write || i;
      t.browser.write && (t.browser.asObject = !0);
      const n = t.serializers || {};
      const s = function(t, e) {
        if (Array.isArray(t)) return t.filter((function(t) {
          return '!stdSerializers.err' !== t;
        }));
        return !0 === t && Object.keys(e);
      }(t.browser.serialize, n);
      let c = t.browser.serialize;
      Array.isArray(t.browser.serialize) && t.browser.serialize.indexOf('!stdSerializers.err') > -1 && (c = !1);
      'function' == typeof r && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r), !1 === t.enabled && (t.level = 'silent');
      const l = t.level || 'info';
      const d = Object.create(r);
      d.log || (d.log = y), Object.defineProperty(d, 'levelVal', {
        get: function() {
          return 'silent' === this.level ? Infinity : this.levels.values[this.level];
        }
      }), Object.defineProperty(d, 'level', {
        get: function() {
          return this._level;
        },
        set: function(t) {
          if ('silent' !== t && !this.levels.values[t]) throw Error('unknown level ' + t);
          this._level = t, a(g, d, 'error', 'log'), a(g, d, 'fatal', 'error'), a(g, d, 'warn', 'error'), a(g, d, 'info', 'log'), a(g, d, 'debug', 'log'), 
          a(g, d, 'trace', 'log');
        }
      });
      const g = {
        transmit: e,
        serialize: s,
        asObject: t.browser.asObject,
        levels: [ 'error', 'fatal', 'warn', 'info', 'debug', 'trace' ],
        timestamp: p(t)
      };
      return d.levels = o.levels, d.level = l, d.setMaxListeners = d.getMaxListeners = d.emit = d.addListener = d.on = d.prependListener = d.once = d.prependOnceListener = d.removeListener = d.removeAllListeners = d.listeners = d.listenerCount = d.eventNames = d.write = d.flush = y, 
      d.serializers = n, d._serialize = s, d._stdErrSerialize = c, d.child = function(r, i) {
        if (!r) throw new Error('missing bindings for child Pino');
        i = i || {}, s && r.serializers && (i.serializers = r.serializers);
        const o = i.serializers;
        if (s && o) {
          var a = Object.assign({}, n, o);
          var c = !0 === t.browser.serialize ? Object.keys(a) : s;
          delete r.serializers, u([ r ], c, a, this._stdErrSerialize);
        }
        function l(t) {
          this._childLevel = 1 + (0 | t._childLevel), this.error = h(t, r, 'error'), this.fatal = h(t, r, 'fatal'), this.warn = h(t, r, 'warn'), 
          this.info = h(t, r, 'info'), this.debug = h(t, r, 'debug'), this.trace = h(t, r, 'trace'), a && (this.serializers = a, this._serialize = c), 
          e && (this._logEvent = f([].concat(t._logEvent.bindings, r)));
        }
        return l.prototype = this, new l(this);
      }, e && (d._logEvent = f()), d;
    }
    function a(t, e, r, n) {
      const s = Object.getPrototypeOf(e);
      e[r] = e.levelVal > e.levels.values[r] ? y : s[r] ? s[r] : i[r] || i[n] || y, function(t, e, r) {
        if (!t.transmit && e[r] === y) return;
        e[r] = function(n) {
          return function() {
            const s = t.timestamp();
            const a = new Array(arguments.length);
            const h = Object.getPrototypeOf && Object.getPrototypeOf(this) === i ? i : this;
            for (var f = 0; f < a.length; f++) a[f] = arguments[f];
            if (t.serialize && !t.asObject && u(a, this._serialize, this.serializers, this._stdErrSerialize), t.asObject ? n.call(h, c(this, r, a, s)) : n.apply(h, a), 
            t.transmit) {
              const n = t.transmit.level || e.level;
              const i = o.levels.values[n];
              const c = o.levels.values[r];
              if (c < i) return;
              l(this, {
                ts: s,
                methodLevel: r,
                methodValue: c,
                transmitLevel: n,
                transmitValue: o.levels.values[t.transmit.level || e.level],
                send: t.transmit.send,
                val: e.levelVal
              }, a);
            }
          };
        }(e[r]);
      }(t, e, r);
    }
    function c(t, e, r, i) {
      t._serialize && u(r, t._serialize, t.serializers, t._stdErrSerialize);
      const s = r.slice();
      let a = s[0];
      const c = {};
      i && (c.time = i), c.level = o.levels.values[e];
      let h = 1 + (0 | t._childLevel);
      if (h < 1 && (h = 1), null !== a && 'object' == typeof a) {
        for (;h-- && 'object' == typeof s[0]; ) Object.assign(c, s.shift());
        a = s.length ? n(s.shift(), s) : void 0;
      } else 'string' == typeof a && (a = n(s.shift(), s));
      return void 0 !== a && (c.msg = a), c;
    }
    function u(t, e, r, n) {
      for (const i in t) if (n && t[i] instanceof Error) t[i] = o.stdSerializers.err(t[i]); else if ('object' == typeof t[i] && !Array.isArray(t[i])) for (const n in t[i]) e && e.indexOf(n) > -1 && n in r && (t[i][n] = r[n](t[i][n]));
    }
    function h(t, e, r) {
      return function() {
        const n = new Array(1 + arguments.length);
        n[0] = e;
        for (var i = 1; i < n.length; i++) n[i] = arguments[i - 1];
        return t[r].apply(this, n);
      };
    }
    function l(t, e, r) {
      const n = e.send;
      const i = e.ts;
      const s = e.methodLevel;
      const o = e.methodValue;
      const a = e.val;
      const c = t._logEvent.bindings;
      u(r, t._serialize || Object.keys(t.serializers), t.serializers, void 0 === t._stdErrSerialize || t._stdErrSerialize), t._logEvent.ts = i, 
      t._logEvent.messages = r.filter((function(t) {
        return -1 === c.indexOf(t);
      })), t._logEvent.level.label = s, t._logEvent.level.value = o, n(s, t._logEvent, a), t._logEvent = f(c);
    }
    function f(t) {
      return {
        ts: 0,
        messages: [],
        bindings: t || [],
        level: {
          label: '',
          value: 0
        }
      };
    }
    function p(t) {
      return 'function' == typeof t.timestamp ? t.timestamp : !1 === t.timestamp ? v : _;
    }
    function d() {
      return {};
    }
    function g(t) {
      return t;
    }
    function y() {}
    function v() {
      return !1;
    }
    function _() {
      return Date.now();
    }
    o.levels = {
      values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
      },
      labels: {
        10: 'trace',
        20: 'debug',
        30: 'info',
        40: 'warn',
        50: 'error',
        60: 'fatal'
      }
    }, o.stdSerializers = s, o.stdTimeFunctions = Object.assign({}, {
      nullTime: v,
      epochTime: _,
      unixTime: function() {
        return Math.round(Date.now() / 1e3);
      },
      isoTime: function() {
        return new Date(Date.now()).toISOString();
      }
    });
  }
} ]);
//# sourceMappingURL=842.b77746db.js.map