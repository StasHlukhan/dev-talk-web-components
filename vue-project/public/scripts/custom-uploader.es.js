/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vn(e, t) {
  const n = new Set(e.split(","));
  return (s) => n.has(s);
}
const V = {}, ze = [], ie = () => {
}, Lr = () => !1, Ut = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), wn = (e) => e.startsWith("onUpdate:"), k = Object.assign, Cn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ur = Object.prototype.hasOwnProperty, P = (e, t) => Ur.call(e, t), S = Array.isArray, qe = (e) => Ht(e) === "[object Map]", As = (e) => Ht(e) === "[object Set]", A = (e) => typeof e == "function", K = (e) => typeof e == "string", We = (e) => typeof e == "symbol", B = (e) => e !== null && typeof e == "object", Is = (e) => (B(e) || A(e)) && A(e.then) && A(e.catch), Ps = Object.prototype.toString, Ht = (e) => Ps.call(e), Hr = (e) => Ht(e).slice(8, -1), Ns = (e) => Ht(e) === "[object Object]", On = (e) => K(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, rt = /* @__PURE__ */ vn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Vt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Vr = /-(\w)/g, we = Vt((e) => e.replace(Vr, (t, n) => n ? n.toUpperCase() : "")), jr = /\B([A-Z])/g, he = Vt(
  (e) => e.replace(jr, "-$1").toLowerCase()
), Ms = Vt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Zt = Vt((e) => e ? `on${Ms(e)}` : ""), De = (e, t) => !Object.is(e, t), Qt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Fs = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, $r = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Xn = (e) => {
  const t = K(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Yn;
const Ds = () => Yn || (Yn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Sn(e) {
  if (S(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = K(s) ? kr(s) : Sn(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (K(e) || B(e))
    return e;
}
const Br = /;(?![^(]*\))/g, Kr = /:([^]+)/, Wr = /\/\*[^]*?\*\//g;
function kr(e) {
  const t = {};
  return e.replace(Wr, "").split(Br).forEach((n) => {
    if (n) {
      const s = n.split(Kr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function jt(e) {
  let t = "";
  if (K(e))
    t = e;
  else if (S(e))
    for (let n = 0; n < e.length; n++) {
      const s = jt(e[n]);
      s && (t += s + " ");
    }
  else if (B(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Gr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zr = /* @__PURE__ */ vn(Gr);
function Ls(e) {
  return !!e || e === "";
}
const qr = (e) => K(e) ? e : e == null ? "" : S(e) || B(e) && (e.toString === Ps || !A(e.toString)) ? JSON.stringify(e, Us, 2) : String(e), Us = (e, t) => t && t.__v_isRef ? Us(e, t.value) : qe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[en(s, o) + " =>"] = r, n),
    {}
  )
} : As(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => en(n))
} : We(t) ? en(t) : B(t) && !S(t) && !Ns(t) ? String(t) : t, en = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    We(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let de;
class Jr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = de, !t && de && (this.index = (de.scopes || (de.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = de;
      try {
        return de = this, t();
      } finally {
        de = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    de = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    de = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Xr(e, t = de) {
  t && t.active && t.effects.push(e);
}
function Yr() {
  return de;
}
let Be;
class Tn {
  constructor(t, n, s, r) {
    this.fn = t, this.trigger = n, this.scheduler = s, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Xr(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Se();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Zr(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Te();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Fe, n = Be;
    try {
      return Fe = !0, Be = this, this._runnings++, Zn(this), this.fn();
    } finally {
      Qn(this), this._runnings--, Be = n, Fe = t;
    }
  }
  stop() {
    this.active && (Zn(this), Qn(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Zr(e) {
  return e.value;
}
function Zn(e) {
  e._trackId++, e._depsLength = 0;
}
function Qn(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Hs(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Hs(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let Fe = !0, un = 0;
const Vs = [];
function Se() {
  Vs.push(Fe), Fe = !1;
}
function Te() {
  const e = Vs.pop();
  Fe = e === void 0 ? !0 : e;
}
function Rn() {
  un++;
}
function An() {
  for (un--; !un && an.length; )
    an.shift()();
}
function js(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Hs(s, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const an = [];
function $s(e, t, n) {
  Rn();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && an.push(s.scheduler)));
  }
  An();
}
const Bs = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, dn = /* @__PURE__ */ new WeakMap(), Ke = Symbol(""), hn = Symbol("");
function se(e, t, n) {
  if (Fe && Be) {
    let s = dn.get(e);
    s || dn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = Bs(() => s.delete(n))), js(
      Be,
      r
    );
  }
}
function Ce(e, t, n, s, r, o) {
  const i = dn.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && S(e)) {
    const u = Number(s);
    i.forEach((a, h) => {
      (h === "length" || !We(h) && h >= u) && c.push(a);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        S(e) ? On(n) && c.push(i.get("length")) : (c.push(i.get(Ke)), qe(e) && c.push(i.get(hn)));
        break;
      case "delete":
        S(e) || (c.push(i.get(Ke)), qe(e) && c.push(i.get(hn)));
        break;
      case "set":
        qe(e) && c.push(i.get(Ke));
        break;
    }
  Rn();
  for (const u of c)
    u && $s(
      u,
      4
    );
  An();
}
const Qr = /* @__PURE__ */ vn("__proto__,__v_isRef,__isVue"), Ks = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(We)
), es = /* @__PURE__ */ eo();
function eo() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = F(this);
      for (let o = 0, i = this.length; o < i; o++)
        se(s, "get", o + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(F)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Se(), Rn();
      const s = F(this)[t].apply(this, n);
      return An(), Te(), s;
    };
  }), e;
}
function to(e) {
  We(e) || (e = String(e));
  const t = F(this);
  return se(t, "has", e), t.hasOwnProperty(e);
}
class Ws {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    const r = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (r ? o ? Xs : Js : o ? qs : zs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = S(t);
    if (!r) {
      if (i && P(es, n))
        return Reflect.get(es, n, s);
      if (n === "hasOwnProperty")
        return to;
    }
    const c = Reflect.get(t, n, s);
    return (We(n) ? Ks.has(n) : Qr(n)) || (r || se(t, "get", n), o) ? c : ee(c) ? i && On(n) ? c : c.value : B(c) ? r ? Ys(c) : Pn(c) : c;
  }
}
class ks extends Ws {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const u = dt(o);
      if (!Mt(s) && !dt(s) && (o = F(o), s = F(s)), !S(t) && ee(o) && !ee(s))
        return u ? !1 : (o.value = s, !0);
    }
    const i = S(t) && On(n) ? Number(n) < t.length : P(t, n), c = Reflect.set(t, n, s, r);
    return t === F(r) && (i ? De(s, o) && Ce(t, "set", n, s) : Ce(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = P(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Ce(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!We(n) || !Ks.has(n)) && se(t, "has", n), s;
  }
  ownKeys(t) {
    return se(
      t,
      "iterate",
      S(t) ? "length" : Ke
    ), Reflect.ownKeys(t);
  }
}
class Gs extends Ws {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const no = /* @__PURE__ */ new ks(), so = /* @__PURE__ */ new Gs(), ro = /* @__PURE__ */ new ks(
  !0
), oo = /* @__PURE__ */ new Gs(!0), In = (e) => e, $t = (e) => Reflect.getPrototypeOf(e);
function vt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = F(e), o = F(t);
  n || (De(t, o) && se(r, "get", t), se(r, "get", o));
  const { has: i } = $t(r), c = s ? In : n ? Nn : ht;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, o))
    return c(e.get(o));
  e !== r && e.get(t);
}
function wt(e, t = !1) {
  const n = this.__v_raw, s = F(n), r = F(e);
  return t || (De(e, r) && se(s, "has", e), se(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Ct(e, t = !1) {
  return e = e.__v_raw, !t && se(F(e), "iterate", Ke), Reflect.get(e, "size", e);
}
function ts(e) {
  e = F(e);
  const t = F(this);
  return $t(t).has.call(t, e) || (t.add(e), Ce(t, "add", e, e)), this;
}
function ns(e, t) {
  t = F(t);
  const n = F(this), { has: s, get: r } = $t(n);
  let o = s.call(n, e);
  o || (e = F(e), o = s.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), o ? De(t, i) && Ce(n, "set", e, t) : Ce(n, "add", e, t), this;
}
function ss(e) {
  const t = F(this), { has: n, get: s } = $t(t);
  let r = n.call(t, e);
  r || (e = F(e), r = n.call(t, e)), s && s.call(t, e);
  const o = t.delete(e);
  return r && Ce(t, "delete", e, void 0), o;
}
function rs() {
  const e = F(this), t = e.size !== 0, n = e.clear();
  return t && Ce(e, "clear", void 0, void 0), n;
}
function Ot(e, t) {
  return function(s, r) {
    const o = this, i = o.__v_raw, c = F(i), u = t ? In : e ? Nn : ht;
    return !e && se(c, "iterate", Ke), i.forEach((a, h) => s.call(r, u(a), u(h), o));
  };
}
function St(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = F(r), i = qe(o), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...s), h = n ? In : t ? Nn : ht;
    return !t && se(
      o,
      "iterate",
      u ? hn : Ke
    ), {
      // iterator protocol
      next() {
        const { value: m, done: w } = a.next();
        return w ? { value: m, done: w } : {
          value: c ? [h(m[0]), h(m[1])] : h(m),
          done: w
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ae(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function io() {
  const e = {
    get(o) {
      return vt(this, o);
    },
    get size() {
      return Ct(this);
    },
    has: wt,
    add: ts,
    set: ns,
    delete: ss,
    clear: rs,
    forEach: Ot(!1, !1)
  }, t = {
    get(o) {
      return vt(this, o, !1, !0);
    },
    get size() {
      return Ct(this);
    },
    has: wt,
    add: ts,
    set: ns,
    delete: ss,
    clear: rs,
    forEach: Ot(!1, !0)
  }, n = {
    get(o) {
      return vt(this, o, !0);
    },
    get size() {
      return Ct(this, !0);
    },
    has(o) {
      return wt.call(this, o, !0);
    },
    add: Ae("add"),
    set: Ae("set"),
    delete: Ae("delete"),
    clear: Ae("clear"),
    forEach: Ot(!0, !1)
  }, s = {
    get(o) {
      return vt(this, o, !0, !0);
    },
    get size() {
      return Ct(this, !0);
    },
    has(o) {
      return wt.call(this, o, !0);
    },
    add: Ae("add"),
    set: Ae("set"),
    delete: Ae("delete"),
    clear: Ae("clear"),
    forEach: Ot(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    e[o] = St(o, !1, !1), n[o] = St(o, !0, !1), t[o] = St(o, !1, !0), s[o] = St(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    s
  ];
}
const [
  lo,
  co,
  fo,
  uo
] = /* @__PURE__ */ io();
function Bt(e, t) {
  const n = t ? e ? uo : fo : e ? co : lo;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    P(n, r) && r in s ? n : s,
    r,
    o
  );
}
const ao = {
  get: /* @__PURE__ */ Bt(!1, !1)
}, ho = {
  get: /* @__PURE__ */ Bt(!1, !0)
}, po = {
  get: /* @__PURE__ */ Bt(!0, !1)
}, _o = {
  get: /* @__PURE__ */ Bt(!0, !0)
}, zs = /* @__PURE__ */ new WeakMap(), qs = /* @__PURE__ */ new WeakMap(), Js = /* @__PURE__ */ new WeakMap(), Xs = /* @__PURE__ */ new WeakMap();
function go(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function mo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : go(Hr(e));
}
function Pn(e) {
  return dt(e) ? e : Kt(
    e,
    !1,
    no,
    ao,
    zs
  );
}
function bo(e) {
  return Kt(
    e,
    !1,
    ro,
    ho,
    qs
  );
}
function Ys(e) {
  return Kt(
    e,
    !0,
    so,
    po,
    Js
  );
}
function Tt(e) {
  return Kt(
    e,
    !0,
    oo,
    _o,
    Xs
  );
}
function Kt(e, t, n, s, r) {
  if (!B(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = mo(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, c), c;
}
function ot(e) {
  return dt(e) ? ot(e.__v_raw) : !!(e && e.__v_isReactive);
}
function dt(e) {
  return !!(e && e.__v_isReadonly);
}
function Mt(e) {
  return !!(e && e.__v_isShallow);
}
function Zs(e) {
  return e ? !!e.__v_raw : !1;
}
function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e;
}
function yo(e) {
  return Object.isExtensible(e) && Fs(e, "__v_skip", !0), e;
}
const ht = (e) => B(e) ? Pn(e) : e, Nn = (e) => B(e) ? Ys(e) : e;
class Qs {
  constructor(t, n, s, r) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Tn(
      () => t(this._value),
      () => At(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = F(this);
    return (!t._cacheable || t.effect.dirty) && De(t._value, t._value = t.effect.run()) && At(t, 4), er(t), t.effect._dirtyLevel >= 2 && At(t, 2), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function xo(e, t, n = !1) {
  let s, r;
  const o = A(e);
  return o ? (s = e, r = ie) : (s = e.get, r = e.set), new Qs(s, r, o || !r, n);
}
function er(e) {
  var t;
  Fe && Be && (e = F(e), js(
    Be,
    (t = e.dep) != null ? t : e.dep = Bs(
      () => e.dep = void 0,
      e instanceof Qs ? e : void 0
    )
  ));
}
function At(e, t = 4, n) {
  e = F(e);
  const s = e.dep;
  s && $s(
    s,
    t
  );
}
function ee(e) {
  return !!(e && e.__v_isRef === !0);
}
function tn(e) {
  return Eo(e, !1);
}
function Eo(e, t) {
  return ee(e) ? e : new vo(e, t);
}
class vo {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : F(t), this._value = n ? t : ht(t);
  }
  get value() {
    return er(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Mt(t) || dt(t);
    t = n ? t : F(t), De(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : ht(t), At(this, 4));
  }
}
function pn(e) {
  return ee(e) ? e.value : e;
}
const wo = {
  get: (e, t, n) => pn(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ee(r) && !ee(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function tr(e) {
  return ot(e) ? e : new Proxy(e, wo);
}
var Ie = { NVM_INC: "/Users/ramel9/.nvm/versions/node/v20.15.0/include/node", TERM_PROGRAM: "vscode", NODE: "/usr/local/bin/node", NVM_CD_FLAGS: "-q", INIT_CWD: "/Users/ramel9/work/dev-talk-web-components/custom-uploader", SHELL: "/bin/zsh", TERM: "xterm-256color", TMPDIR: "/var/folders/tm/8v1k3d5n6t3df3ld14kyd3rh0000gn/T/", HOMEBREW_REPOSITORY: "/opt/homebrew", npm_config_global_prefix: "/usr/local", TERM_PROGRAM_VERSION: "1.92.2", MallocNanoZone: "0", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", ZDOTDIR: "/Users/ramel9", TERM_SESSION_ID: "7C0D0C49-1B75-49FE-B376-C43B13048ECB", COLOR: "1", npm_config_noproxy: "", npm_config_local_prefix: "/Users/ramel9/work/dev-talk-web-components/custom-uploader", USER: "ramel9", NVM_DIR: "/Users/ramel9/.nvm", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/usr/local/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.OJtDfEN5FT/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/usr/local/lib/node_modules/npm/bin/npm-cli.js", PATH: "/Users/ramel9/work/dev-talk-web-components/custom-uploader/node_modules/.bin:/Users/ramel9/work/dev-talk-web-components/node_modules/.bin:/Users/ramel9/work/node_modules/.bin:/Users/ramel9/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/ramel9/work/dev-talk-web-components/custom-uploader/node_modules/.bin:/Users/ramel9/work/dev-talk-web-components/node_modules/.bin:/Users/ramel9/work/node_modules/.bin:/Users/ramel9/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin", _: "/Users/ramel9/work/dev-talk-web-components/custom-uploader/node_modules/.bin/vite", npm_package_json: "/Users/ramel9/work/dev-talk-web-components/custom-uploader/package.json", __CFBundleIdentifier: "com.microsoft.VSCode", USER_ZDOTDIR: "/Users/ramel9", npm_config_init_module: "/Users/ramel9/.npm-init.js", npm_config_userconfig: "/Users/ramel9/.npmrc", PWD: "/Users/ramel9/work/dev-talk-web-components/custom-uploader", npm_command: "run-script", EDITOR: "vi", npm_lifecycle_event: "build-only", LANG: "en_US.UTF-8", npm_package_name: "custom-uploader", XPC_FLAGS: "0x0", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", npm_config_npm_version: "10.8.1", npm_config_node_gyp: "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", XPC_SERVICE_NAME: "0", npm_package_version: "1.0.0", VSCODE_INJECTION: "1", HOME: "/Users/ramel9", SHLVL: "5", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", HOMEBREW_PREFIX: "/opt/homebrew", LOGNAME: "ramel9", npm_config_cache: "/Users/ramel9/.npm", npm_lifecycle_script: "vite build", LC_CTYPE: "UTF-8", VSCODE_GIT_IPC_HANDLE: "/var/folders/tm/8v1k3d5n6t3df3ld14kyd3rh0000gn/T/vscode-git-0bda67df68.sock", NVM_BIN: "/Users/ramel9/.nvm/versions/node/v20.15.0/bin", npm_config_user_agent: "npm/10.8.1 node/v20.15.0 darwin arm64 workspaces/false", INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", COLORTERM: "truecolor", npm_config_prefix: "/usr/local", npm_node_execpath: "/usr/local/bin/node", NODE_ENV: "production" };
const it = [];
function Co(e, ...t) {
  Se();
  const n = it.length ? it[it.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = Oo();
  if (s)
    Oe(
      s,
      n,
      11,
      [
        e + t.map((o) => {
          var i, c;
          return (c = (i = o.toString) == null ? void 0 : i.call(o)) != null ? c : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: o }) => `at <${Mr(n, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...So(r)), console.warn(...o);
  }
  Te();
}
function Oo() {
  let e = it[it.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function So(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...To(n));
  }), t;
}
function To({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${Mr(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [r, ...Ro(e.props), o] : [r + o];
}
function Ro(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...nr(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function nr(e, t, n) {
  return K(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ee(t) ? (t = nr(e, F(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : A(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = F(t), n ? t : [`${e}=`, t]);
}
function Oe(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Wt(r, t, n);
  }
}
function ge(e, t, n, s) {
  if (A(e)) {
    const r = Oe(e, t, n, s);
    return r && Is(r) && r.catch((o) => {
      Wt(o, t, n);
    }), r;
  }
  if (S(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(ge(e[o], t, n, s));
    return r;
  }
}
function Wt(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let h = 0; h < a.length; h++)
          if (a[h](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Se(), Oe(
        u,
        null,
        10,
        [e, i, c]
      ), Te();
      return;
    }
  }
  Ao(e, n, r, s);
}
function Ao(e, t, n, s = !0) {
  console.error(e);
}
let pt = !1, _n = !1;
const X = [];
let Ee = 0;
const Je = [];
let Pe = null, $e = 0;
const sr = /* @__PURE__ */ Promise.resolve();
let Mn = null;
function rr(e) {
  const t = Mn || sr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Io(e) {
  let t = Ee + 1, n = X.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = X[s], o = _t(r);
    o < e || o === e && r.pre ? t = s + 1 : n = s;
  }
  return t;
}
function Fn(e) {
  (!X.length || !X.includes(
    e,
    pt && e.allowRecurse ? Ee + 1 : Ee
  )) && (e.id == null ? X.push(e) : X.splice(Io(e.id), 0, e), or());
}
function or() {
  !pt && !_n && (_n = !0, Mn = sr.then(lr));
}
function Po(e) {
  const t = X.indexOf(e);
  t > Ee && X.splice(t, 1);
}
function No(e) {
  S(e) ? Je.push(...e) : (!Pe || !Pe.includes(
    e,
    e.allowRecurse ? $e + 1 : $e
  )) && Je.push(e), or();
}
function os(e, t, n = pt ? Ee + 1 : 0) {
  for (; n < X.length; n++) {
    const s = X[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid)
        continue;
      X.splice(n, 1), n--, s();
    }
  }
}
function ir(e) {
  if (Je.length) {
    const t = [...new Set(Je)].sort(
      (n, s) => _t(n) - _t(s)
    );
    if (Je.length = 0, Pe) {
      Pe.push(...t);
      return;
    }
    for (Pe = t, $e = 0; $e < Pe.length; $e++)
      Pe[$e]();
    Pe = null, $e = 0;
  }
}
const _t = (e) => e.id == null ? 1 / 0 : e.id, Mo = (e, t) => {
  const n = _t(e) - _t(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function lr(e) {
  _n = !1, pt = !0, X.sort(Mo);
  const t = ie;
  try {
    for (Ee = 0; Ee < X.length; Ee++) {
      const n = X[Ee];
      n && n.active !== !1 && (Ie.NODE_ENV !== "production" && t(n), Oe(n, null, 14));
    }
  } finally {
    Ee = 0, X.length = 0, ir(), pt = !1, Mn = null, (X.length || Je.length) && lr();
  }
}
function Fo(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || V;
  let r = n;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in s) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`, { number: m, trim: w } = s[h] || V;
    w && (r = n.map((T) => K(T) ? T.trim() : T)), m && (r = n.map($r));
  }
  let c, u = s[c = Zt(t)] || // also try camelCase event handler (#2249)
  s[c = Zt(we(t))];
  !u && o && (u = s[c = Zt(he(t))]), u && ge(
    u,
    e,
    6,
    r
  );
  const a = s[c + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ge(
      a,
      e,
      6,
      r
    );
  }
}
function cr(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, c = !1;
  if (!A(e)) {
    const u = (a) => {
      const h = cr(a, t, !0);
      h && (c = !0, k(i, h));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !c ? (B(e) && s.set(e, null), null) : (S(o) ? o.forEach((u) => i[u] = null) : k(i, o), B(e) && s.set(e, i), i);
}
function kt(e, t) {
  return !e || !Ut(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), P(e, t[0].toLowerCase() + t.slice(1)) || P(e, he(t)) || P(e, t));
}
let ne = null, fr = null;
function Ft(e) {
  const t = ne;
  return ne = e, fr = e && e.type.__scopeId || null, t;
}
function Do(e, t = ne, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && _s(-1);
    const o = Ft(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Ft(o), s._d && _s(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function nn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [o],
    slots: i,
    attrs: c,
    emit: u,
    render: a,
    renderCache: h,
    props: m,
    data: w,
    setupState: T,
    ctx: j,
    inheritAttrs: N
  } = e, Y = Ft(e);
  let G, J;
  try {
    if (n.shapeFlag & 4) {
      const W = r || s, le = Ie.NODE_ENV !== "production" && T.__isScriptSetup ? new Proxy(W, {
        get(M, fe, ue) {
          return Co(
            `Property '${String(
              fe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(M, fe, ue);
        }
      }) : W;
      G = xe(
        a.call(
          le,
          W,
          h,
          Ie.NODE_ENV !== "production" ? Tt(m) : m,
          T,
          w,
          j
        )
      ), J = c;
    } else {
      const W = t;
      Ie.NODE_ENV, G = xe(
        W.length > 1 ? W(
          Ie.NODE_ENV !== "production" ? Tt(m) : m,
          Ie.NODE_ENV !== "production" ? {
            get attrs() {
              return Tt(c);
            },
            slots: i,
            emit: u
          } : { attrs: c, slots: i, emit: u }
        ) : W(
          Ie.NODE_ENV !== "production" ? Tt(m) : m,
          null
        )
      ), J = t.props ? c : Lo(c);
    }
  } catch (W) {
    ut.length = 0, Wt(W, e, 1), G = ce(Ye);
  }
  let L = G;
  if (J && N !== !1) {
    const W = Object.keys(J), { shapeFlag: le } = L;
    W.length && le & 7 && (o && W.some(wn) && (J = Uo(
      J,
      o
    )), L = Ze(L, J, !1, !0));
  }
  return n.dirs && (L = Ze(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (L.transition = n.transition), G = L, Ft(Y), G;
}
const Lo = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ut(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Uo = (e, t) => {
  const n = {};
  for (const s in e)
    (!wn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Ho(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: c, patchFlag: u } = t, a = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? is(s, i, a) : !!i;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let m = 0; m < h.length; m++) {
        const w = h[m];
        if (i[w] !== s[w] && !kt(a, w))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : s === i ? !1 : s ? i ? is(s, i, a) : !0 : !!i;
  return !1;
}
function is(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !kt(n, o))
      return !0;
  }
  return !1;
}
function Vo({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const jo = Symbol.for("v-ndc"), $o = (e) => e.__isSuspense;
function Bo(e, t) {
  t && t.pendingBranch ? S(e) ? t.effects.push(...e) : t.effects.push(e) : No(e);
}
const Ko = Symbol.for("v-scx"), Wo = () => It(Ko);
function ko(e, t) {
  return Dn(e, null, t);
}
const Rt = {};
function sn(e, t, n) {
  return Dn(e, t, n);
}
function Dn(e, t, {
  immediate: n,
  deep: s,
  flush: r,
  once: o,
  onTrack: i,
  onTrigger: c
} = V) {
  if (t && o) {
    const M = t;
    t = (...fe) => {
      M(...fe), le();
    };
  }
  const u = q, a = (M) => s === !0 ? M : (
    // for deep: false, only traverse root-level properties
    Ge(M, s === !1 ? 1 : void 0)
  );
  let h, m = !1, w = !1;
  if (ee(e) ? (h = () => e.value, m = Mt(e)) : ot(e) ? (h = () => a(e), m = !0) : S(e) ? (w = !0, m = e.some((M) => ot(M) || Mt(M)), h = () => e.map((M) => {
    if (ee(M))
      return M.value;
    if (ot(M))
      return a(M);
    if (A(M))
      return Oe(M, u, 2);
  })) : A(e) ? t ? h = () => Oe(e, u, 2) : h = () => (T && T(), ge(
    e,
    u,
    3,
    [j]
  )) : h = ie, t && s) {
    const M = h;
    h = () => Ge(M());
  }
  let T, j = (M) => {
    T = L.onStop = () => {
      Oe(M, u, 4), T = L.onStop = void 0;
    };
  }, N;
  if (qt)
    if (j = ie, t ? n && ge(t, u, 3, [
      h(),
      w ? [] : void 0,
      j
    ]) : h(), r === "sync") {
      const M = Wo();
      N = M.__watcherHandles || (M.__watcherHandles = []);
    } else
      return ie;
  let Y = w ? new Array(e.length).fill(Rt) : Rt;
  const G = () => {
    if (!(!L.active || !L.dirty))
      if (t) {
        const M = L.run();
        (s || m || (w ? M.some((fe, ue) => De(fe, Y[ue])) : De(M, Y))) && (T && T(), ge(t, u, 3, [
          M,
          // pass undefined as the old value when it's changed for the first time
          Y === Rt ? void 0 : w && Y[0] === Rt ? [] : Y,
          j
        ]), Y = M);
      } else
        L.run();
  };
  G.allowRecurse = !!t;
  let J;
  r === "sync" ? J = G : r === "post" ? J = () => te(G, u && u.suspense) : (G.pre = !0, u && (G.id = u.uid), J = () => Fn(G));
  const L = new Tn(h, ie, J), W = Yr(), le = () => {
    L.stop(), W && Cn(W.effects, L);
  };
  return t ? n ? G() : Y = L.run() : r === "post" ? te(
    L.run.bind(L),
    u && u.suspense
  ) : L.run(), N && N.push(le), le;
}
function Go(e, t, n) {
  const s = this.proxy, r = K(e) ? e.includes(".") ? ur(s, e) : () => s[e] : e.bind(s, s);
  let o;
  A(t) ? o = t : (o = t.handler, n = t);
  const i = mt(this), c = Dn(r, o.bind(s), n);
  return i(), c;
}
function ur(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function Ge(e, t = 1 / 0, n) {
  if (t <= 0 || !B(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ee(e))
    Ge(e.value, t, n);
  else if (S(e))
    for (let s = 0; s < e.length; s++)
      Ge(e[s], t, n);
  else if (As(e) || qe(e))
    e.forEach((s) => {
      Ge(s, t, n);
    });
  else if (Ns(e))
    for (const s in e)
      Ge(e[s], t, n);
  return e;
}
function Ve(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    o && (c.oldValue = o[i].value);
    let u = c.dir[s];
    u && (Se(), ge(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Te());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ar(e, t) {
  return A(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    k({ name: e.name }, t, { setup: e })
  ) : e;
}
const lt = (e) => !!e.type.__asyncLoader, dr = (e) => e.type.__isKeepAlive;
function zo(e, t) {
  hr(e, "a", t);
}
function qo(e, t) {
  hr(e, "da", t);
}
function hr(e, t, n = q) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Gt(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      dr(r.parent.vnode) && Jo(s, t, n, r), r = r.parent;
  }
}
function Jo(e, t, n, s) {
  const r = Gt(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  pr(() => {
    Cn(s[t], r);
  }, n);
}
function Gt(e, t, n = q, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Se();
      const c = mt(n), u = ge(t, n, e, i);
      return c(), Te(), u;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const Re = (e) => (t, n = q) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!qt || e === "sp") && Gt(e, (...s) => t(...s), n)
), Xo = Re("bm"), Yo = Re("m"), Zo = Re("bu"), Qo = Re("u"), ei = Re("bum"), pr = Re("um"), ti = Re("sp"), ni = Re(
  "rtg"
), si = Re(
  "rtc"
);
function ri(e, t = q) {
  Gt("ec", e, t);
}
function oi(e, t, n, s) {
  let r;
  const o = n;
  if (S(e) || K(e)) {
    r = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      r[i] = t(e[i], i, void 0, o);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let i = 0; i < e; i++)
      r[i] = t(i + 1, i, void 0, o);
  } else if (B(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (i, c) => t(i, c, void 0, o)
      );
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let c = 0, u = i.length; c < u; c++) {
        const a = i[c];
        r[c] = t(e[a], a, c, o);
      }
    }
  else
    r = [];
  return r;
}
function ii(e, t, n = {}, s, r) {
  if (ne.isCE || ne.parent && lt(ne.parent) && ne.parent.isCE)
    return n.name = t, ce("slot", n, s);
  let o = e[t];
  o && o._c && (o._d = !1), Xe();
  const i = o && _r(o(n)), c = Ti(
    oe,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), o && o._c && (o._d = !0), c;
}
function _r(e) {
  return e.some((t) => Ar(t) ? !(t.type === Ye || t.type === oe && !_r(t.children)) : !0) ? e : null;
}
const gn = (e) => e ? Pr(e) ? jn(e) || e.proxy : gn(e.parent) : null, ct = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ k(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => gn(e.parent),
    $root: (e) => gn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ln(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Fn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = rr.bind(e.proxy)),
    $watch: (e) => Go.bind(e)
  })
), rn = (e, t) => e !== V && !e.__isScriptSetup && P(e, t), li = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: c, appContext: u } = e;
    let a;
    if (t[0] !== "$") {
      const T = i[t];
      if (T !== void 0)
        switch (T) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (rn(s, t))
          return i[t] = 1, s[t];
        if (r !== V && P(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && P(a, t)
        )
          return i[t] = 3, o[t];
        if (n !== V && P(n, t))
          return i[t] = 4, n[t];
        mn && (i[t] = 0);
      }
    }
    const h = ct[t];
    let m, w;
    if (h)
      return t === "$attrs" && se(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (m = c.__cssModules) && (m = m[t])
    )
      return m;
    if (n !== V && P(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      w = u.config.globalProperties, P(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return rn(r, t) ? (r[t] = n, !0) : s !== V && P(s, t) ? (s[t] = n, !0) : P(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, i) {
    let c;
    return !!n[i] || e !== V && P(e, i) || rn(t, i) || (c = o[0]) && P(c, i) || P(s, i) || P(ct, i) || P(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : P(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ls(e) {
  return S(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let mn = !0;
function ci(e) {
  const t = Ln(e), n = e.proxy, s = e.ctx;
  mn = !1, t.beforeCreate && cs(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: c,
    provide: u,
    inject: a,
    // lifecycle
    created: h,
    beforeMount: m,
    mounted: w,
    beforeUpdate: T,
    updated: j,
    activated: N,
    deactivated: Y,
    beforeDestroy: G,
    beforeUnmount: J,
    destroyed: L,
    unmounted: W,
    render: le,
    renderTracked: M,
    renderTriggered: fe,
    errorCaptured: ue,
    serverPrefetch: Jt,
    // public API
    expose: Le,
    inheritAttrs: Qe,
    // assets
    components: bt,
    directives: yt,
    filters: Xt
  } = t;
  if (a && fi(a, s, null), i)
    for (const $ in i) {
      const U = i[$];
      A(U) && (s[$] = U.bind(n));
    }
  if (r) {
    const $ = r.call(n, n);
    B($) && (e.data = Pn($));
  }
  if (mn = !0, o)
    for (const $ in o) {
      const U = o[$], Ue = A(U) ? U.bind(n, n) : A(U.get) ? U.get.bind(n, n) : ie, xt = !A(U) && A(U.set) ? U.set.bind(n) : ie, He = Bi({
        get: Ue,
        set: xt
      });
      Object.defineProperty(s, $, {
        enumerable: !0,
        configurable: !0,
        get: () => He.value,
        set: (me) => He.value = me
      });
    }
  if (c)
    for (const $ in c)
      gr(c[$], s, n, $);
  if (u) {
    const $ = A(u) ? u.call(n) : u;
    Reflect.ownKeys($).forEach((U) => {
      _i(U, $[U]);
    });
  }
  h && cs(h, e, "c");
  function Z($, U) {
    S(U) ? U.forEach((Ue) => $(Ue.bind(n))) : U && $(U.bind(n));
  }
  if (Z(Xo, m), Z(Yo, w), Z(Zo, T), Z(Qo, j), Z(zo, N), Z(qo, Y), Z(ri, ue), Z(si, M), Z(ni, fe), Z(ei, J), Z(pr, W), Z(ti, Jt), S(Le))
    if (Le.length) {
      const $ = e.exposed || (e.exposed = {});
      Le.forEach((U) => {
        Object.defineProperty($, U, {
          get: () => n[U],
          set: (Ue) => n[U] = Ue
        });
      });
    } else
      e.exposed || (e.exposed = {});
  le && e.render === ie && (e.render = le), Qe != null && (e.inheritAttrs = Qe), bt && (e.components = bt), yt && (e.directives = yt);
}
function fi(e, t, n = ie) {
  S(e) && (e = bn(e));
  for (const s in e) {
    const r = e[s];
    let o;
    B(r) ? "default" in r ? o = It(
      r.from || s,
      r.default,
      !0
    ) : o = It(r.from || s) : o = It(r), ee(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[s] = o;
  }
}
function cs(e, t, n) {
  ge(
    S(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function gr(e, t, n, s) {
  const r = s.includes(".") ? ur(n, s) : () => n[s];
  if (K(e)) {
    const o = t[e];
    A(o) && sn(r, o);
  } else if (A(e))
    sn(r, e.bind(n));
  else if (B(e))
    if (S(e))
      e.forEach((o) => gr(o, t, n, s));
    else {
      const o = A(e.handler) ? e.handler.bind(n) : t[e.handler];
      A(o) && sn(r, o, e);
    }
}
function Ln(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let u;
  return c ? u = c : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach(
    (a) => Dt(u, a, i, !0)
  ), Dt(u, t, i)), B(t) && o.set(t, u), u;
}
function Dt(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Dt(e, o, n, !0), r && r.forEach(
    (i) => Dt(e, i, n, !0)
  );
  for (const i in t)
    if (!(s && i === "expose")) {
      const c = ui[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const ui = {
  data: fs,
  props: us,
  emits: us,
  // objects
  methods: st,
  computed: st,
  // lifecycle
  beforeCreate: Q,
  created: Q,
  beforeMount: Q,
  mounted: Q,
  beforeUpdate: Q,
  updated: Q,
  beforeDestroy: Q,
  beforeUnmount: Q,
  destroyed: Q,
  unmounted: Q,
  activated: Q,
  deactivated: Q,
  errorCaptured: Q,
  serverPrefetch: Q,
  // assets
  components: st,
  directives: st,
  // watch
  watch: di,
  // provide / inject
  provide: fs,
  inject: ai
};
function fs(e, t) {
  return t ? e ? function() {
    return k(
      A(e) ? e.call(this, this) : e,
      A(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ai(e, t) {
  return st(bn(e), bn(t));
}
function bn(e) {
  if (S(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Q(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function st(e, t) {
  return e ? k(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function us(e, t) {
  return e ? S(e) && S(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : k(
    /* @__PURE__ */ Object.create(null),
    ls(e),
    ls(t ?? {})
  ) : t;
}
function di(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = k(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Q(e[s], t[s]);
  return n;
}
function mr() {
  return {
    app: null,
    config: {
      isNativeTag: Lr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let hi = 0;
function pi(e, t) {
  return function(s, r = null) {
    A(s) || (s = k({}, s)), r != null && !B(r) && (r = null);
    const o = mr(), i = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const u = o.app = {
      _uid: hi++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Ki,
      get config() {
        return o.config;
      },
      set config(a) {
      },
      use(a, ...h) {
        return i.has(a) || (a && A(a.install) ? (i.add(a), a.install(u, ...h)) : A(a) && (i.add(a), a(u, ...h))), u;
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), u;
      },
      component(a, h) {
        return h ? (o.components[a] = h, u) : o.components[a];
      },
      directive(a, h) {
        return h ? (o.directives[a] = h, u) : o.directives[a];
      },
      mount(a, h, m) {
        if (!c) {
          const w = ce(s, r);
          return w.appContext = o, m === !0 ? m = "svg" : m === !1 && (m = void 0), h && t ? t(w, a) : e(w, a, m), c = !0, u._container = a, a.__vue_app__ = u, jn(w.component) || w.component.proxy;
        }
      },
      unmount() {
        c && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, h) {
        return o.provides[a] = h, u;
      },
      runWithContext(a) {
        const h = ft;
        ft = u;
        try {
          return a();
        } finally {
          ft = h;
        }
      }
    };
    return u;
  };
}
let ft = null;
function _i(e, t) {
  if (q) {
    let n = q.provides;
    const s = q.parent && q.parent.provides;
    s === n && (n = q.provides = Object.create(s)), n[e] = t;
  }
}
function It(e, t, n = !1) {
  const s = q || ne;
  if (s || ft) {
    const r = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : ft._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && A(t) ? t.call(s && s.proxy) : t;
  }
}
const br = {}, yr = () => Object.create(br), xr = (e) => Object.getPrototypeOf(e) === br;
function gi(e, t, n, s = !1) {
  const r = {}, o = yr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Er(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : bo(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function mi(e, t, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, c = F(r), [u] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let m = 0; m < h.length; m++) {
        let w = h[m];
        if (kt(e.emitsOptions, w))
          continue;
        const T = t[w];
        if (u)
          if (P(o, w))
            T !== o[w] && (o[w] = T, a = !0);
          else {
            const j = we(w);
            r[j] = yn(
              u,
              c,
              j,
              T,
              e,
              !1
            );
          }
        else
          T !== o[w] && (o[w] = T, a = !0);
      }
    }
  } else {
    Er(e, t, r, o) && (a = !0);
    let h;
    for (const m in c)
      (!t || // for camelCase
      !P(t, m) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = he(m)) === m || !P(t, h))) && (u ? n && // for camelCase
      (n[m] !== void 0 || // for kebab-case
      n[h] !== void 0) && (r[m] = yn(
        u,
        c,
        m,
        void 0,
        e,
        !0
      )) : delete r[m]);
    if (o !== c)
      for (const m in o)
        (!t || !P(t, m)) && (delete o[m], a = !0);
  }
  a && Ce(e.attrs, "set", "");
}
function Er(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if (rt(u))
        continue;
      const a = t[u];
      let h;
      r && P(r, h = we(u)) ? !o || !o.includes(h) ? n[h] = a : (c || (c = {}))[h] = a : kt(e.emitsOptions, u) || (!(u in s) || a !== s[u]) && (s[u] = a, i = !0);
    }
  if (o) {
    const u = F(n), a = c || V;
    for (let h = 0; h < o.length; h++) {
      const m = o[h];
      n[m] = yn(
        r,
        u,
        m,
        a[m],
        e,
        !P(a, m)
      );
    }
  }
  return i;
}
function yn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const c = P(i, "default");
    if (c && s === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && A(u)) {
        const { propsDefaults: a } = r;
        if (n in a)
          s = a[n];
        else {
          const h = mt(r);
          s = a[n] = u.call(
            null,
            t
          ), h();
        }
      } else
        s = u;
    }
    i[
      0
      /* shouldCast */
    ] && (o && !c ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === he(n)) && (s = !0));
  }
  return s;
}
function vr(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, c = [];
  let u = !1;
  if (!A(e)) {
    const h = (m) => {
      u = !0;
      const [w, T] = vr(m, t, !0);
      k(i, w), T && c.push(...T);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!o && !u)
    return B(e) && s.set(e, ze), ze;
  if (S(o))
    for (let h = 0; h < o.length; h++) {
      const m = we(o[h]);
      as(m) && (i[m] = V);
    }
  else if (o)
    for (const h in o) {
      const m = we(h);
      if (as(m)) {
        const w = o[h], T = i[m] = S(w) || A(w) ? { type: w } : k({}, w);
        if (T) {
          const j = ps(Boolean, T.type), N = ps(String, T.type);
          T[
            0
            /* shouldCast */
          ] = j > -1, T[
            1
            /* shouldCastTrue */
          ] = N < 0 || j < N, (j > -1 || P(T, "default")) && c.push(m);
        }
      }
    }
  const a = [i, c];
  return B(e) && s.set(e, a), a;
}
function as(e) {
  return e[0] !== "$" && !rt(e);
}
function ds(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function hs(e, t) {
  return ds(e) === ds(t);
}
function ps(e, t) {
  return S(t) ? t.findIndex((n) => hs(n, e)) : A(t) && hs(t, e) ? 0 : -1;
}
const wr = (e) => e[0] === "_" || e === "$stable", Un = (e) => S(e) ? e.map(xe) : [xe(e)], bi = (e, t, n) => {
  if (t._n)
    return t;
  const s = Do((...r) => (Ie.NODE_ENV !== "production" && q && (!n || (n.root, q.root)), Un(t(...r))), n);
  return s._c = !1, s;
}, Cr = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (wr(r))
      continue;
    const o = e[r];
    if (A(o))
      t[r] = bi(r, o, s);
    else if (o != null) {
      const i = Un(o);
      t[r] = () => i;
    }
  }
}, Or = (e, t) => {
  const n = Un(t);
  e.slots.default = () => n;
}, yi = (e, t) => {
  const n = e.slots = yr();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (k(n, t), Fs(n, "_", s, !0)) : Cr(t, n);
  } else
    t && Or(e, t);
}, xi = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = V;
  if (s.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? o = !1 : (k(r, t), !n && c === 1 && delete r._) : (o = !t.$stable, Cr(t, r)), i = t;
  } else
    t && (Or(e, t), i = { default: 1 });
  if (o)
    for (const c in r)
      !wr(c) && i[c] == null && delete r[c];
};
function xn(e, t, n, s, r = !1) {
  if (S(e)) {
    e.forEach(
      (w, T) => xn(
        w,
        t && (S(t) ? t[T] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (lt(s) && !r)
    return;
  const o = s.shapeFlag & 4 ? jn(s.component) || s.component.proxy : s.el, i = r ? null : o, { i: c, r: u } = e, a = t && t.r, h = c.refs === V ? c.refs = {} : c.refs, m = c.setupState;
  if (a != null && a !== u && (K(a) ? (h[a] = null, P(m, a) && (m[a] = null)) : ee(a) && (a.value = null)), A(u))
    Oe(u, c, 12, [i, h]);
  else {
    const w = K(u), T = ee(u);
    if (w || T) {
      const j = () => {
        if (e.f) {
          const N = w ? P(m, u) ? m[u] : h[u] : u.value;
          r ? S(N) && Cn(N, o) : S(N) ? N.includes(o) || N.push(o) : w ? (h[u] = [o], P(m, u) && (m[u] = h[u])) : (u.value = [o], e.k && (h[e.k] = u.value));
        } else
          w ? (h[u] = i, P(m, u) && (m[u] = i)) : T && (u.value = i, e.k && (h[e.k] = i));
      };
      i ? (j.id = -1, te(j, n)) : j();
    }
  }
}
const te = Bo;
function Ei(e) {
  return vi(e);
}
function vi(e, t) {
  const n = Ds();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: c,
    createComment: u,
    setText: a,
    setElementText: h,
    parentNode: m,
    nextSibling: w,
    setScopeId: T = ie,
    insertStaticContent: j
  } = e, N = (l, f, d, p = null, _ = null, y = null, E = void 0, b = null, x = !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !nt(l, f) && (p = Et(l), me(l, _, y, !0), l = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: g, ref: v, shapeFlag: O } = f;
    switch (g) {
      case zt:
        Y(l, f, d, p);
        break;
      case Ye:
        G(l, f, d, p);
        break;
      case ln:
        l == null && J(f, d, p, E);
        break;
      case oe:
        bt(
          l,
          f,
          d,
          p,
          _,
          y,
          E,
          b,
          x
        );
        break;
      default:
        O & 1 ? le(
          l,
          f,
          d,
          p,
          _,
          y,
          E,
          b,
          x
        ) : O & 6 ? yt(
          l,
          f,
          d,
          p,
          _,
          y,
          E,
          b,
          x
        ) : (O & 64 || O & 128) && g.process(
          l,
          f,
          d,
          p,
          _,
          y,
          E,
          b,
          x,
          et
        );
    }
    v != null && _ && xn(v, l && l.ref, y, f || l, !f);
  }, Y = (l, f, d, p) => {
    if (l == null)
      s(
        f.el = c(f.children),
        d,
        p
      );
    else {
      const _ = f.el = l.el;
      f.children !== l.children && a(_, f.children);
    }
  }, G = (l, f, d, p) => {
    l == null ? s(
      f.el = u(f.children || ""),
      d,
      p
    ) : f.el = l.el;
  }, J = (l, f, d, p) => {
    [l.el, l.anchor] = j(
      l.children,
      f,
      d,
      p,
      l.el,
      l.anchor
    );
  }, L = ({ el: l, anchor: f }, d, p) => {
    let _;
    for (; l && l !== f; )
      _ = w(l), s(l, d, p), l = _;
    s(f, d, p);
  }, W = ({ el: l, anchor: f }) => {
    let d;
    for (; l && l !== f; )
      d = w(l), r(l), l = d;
    r(f);
  }, le = (l, f, d, p, _, y, E, b, x) => {
    f.type === "svg" ? E = "svg" : f.type === "math" && (E = "mathml"), l == null ? M(
      f,
      d,
      p,
      _,
      y,
      E,
      b,
      x
    ) : Jt(
      l,
      f,
      _,
      y,
      E,
      b,
      x
    );
  }, M = (l, f, d, p, _, y, E, b) => {
    let x, g;
    const { props: v, shapeFlag: O, transition: C, dirs: R } = l;
    if (x = l.el = i(
      l.type,
      y,
      v && v.is,
      v
    ), O & 8 ? h(x, l.children) : O & 16 && ue(
      l.children,
      x,
      null,
      p,
      _,
      on(l, y),
      E,
      b
    ), R && Ve(l, null, p, "created"), fe(x, l, l.scopeId, E, p), v) {
      for (const D in v)
        D !== "value" && !rt(D) && o(
          x,
          D,
          null,
          v[D],
          y,
          l.children,
          p,
          _,
          ve
        );
      "value" in v && o(x, "value", null, v.value, y), (g = v.onVnodeBeforeMount) && ye(g, p, l);
    }
    R && Ve(l, null, p, "beforeMount");
    const I = wi(_, C);
    I && C.beforeEnter(x), s(x, f, d), ((g = v && v.onVnodeMounted) || I || R) && te(() => {
      g && ye(g, p, l), I && C.enter(x), R && Ve(l, null, p, "mounted");
    }, _);
  }, fe = (l, f, d, p, _) => {
    if (d && T(l, d), p)
      for (let y = 0; y < p.length; y++)
        T(l, p[y]);
    if (_) {
      let y = _.subTree;
      if (f === y) {
        const E = _.vnode;
        fe(
          l,
          E,
          E.scopeId,
          E.slotScopeIds,
          _.parent
        );
      }
    }
  }, ue = (l, f, d, p, _, y, E, b, x = 0) => {
    for (let g = x; g < l.length; g++) {
      const v = l[g] = b ? Ne(l[g]) : xe(l[g]);
      N(
        null,
        v,
        f,
        d,
        p,
        _,
        y,
        E,
        b
      );
    }
  }, Jt = (l, f, d, p, _, y, E) => {
    const b = f.el = l.el;
    let { patchFlag: x, dynamicChildren: g, dirs: v } = f;
    x |= l.patchFlag & 16;
    const O = l.props || V, C = f.props || V;
    let R;
    if (d && je(d, !1), (R = C.onVnodeBeforeUpdate) && ye(R, d, f, l), v && Ve(f, l, d, "beforeUpdate"), d && je(d, !0), g ? Le(
      l.dynamicChildren,
      g,
      b,
      d,
      p,
      on(f, _),
      y
    ) : E || U(
      l,
      f,
      b,
      null,
      d,
      p,
      on(f, _),
      y,
      !1
    ), x > 0) {
      if (x & 16)
        Qe(
          b,
          f,
          O,
          C,
          d,
          p,
          _
        );
      else if (x & 2 && O.class !== C.class && o(b, "class", null, C.class, _), x & 4 && o(b, "style", O.style, C.style, _), x & 8) {
        const I = f.dynamicProps;
        for (let D = 0; D < I.length; D++) {
          const H = I[D], z = O[H], ae = C[H];
          (ae !== z || H === "value") && o(
            b,
            H,
            z,
            ae,
            _,
            l.children,
            d,
            p,
            ve
          );
        }
      }
      x & 1 && l.children !== f.children && h(b, f.children);
    } else
      !E && g == null && Qe(
        b,
        f,
        O,
        C,
        d,
        p,
        _
      );
    ((R = C.onVnodeUpdated) || v) && te(() => {
      R && ye(R, d, f, l), v && Ve(f, l, d, "updated");
    }, p);
  }, Le = (l, f, d, p, _, y, E) => {
    for (let b = 0; b < f.length; b++) {
      const x = l[b], g = f[b], v = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !nt(x, g) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 70) ? m(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      N(
        x,
        g,
        v,
        null,
        p,
        _,
        y,
        E,
        !0
      );
    }
  }, Qe = (l, f, d, p, _, y, E) => {
    if (d !== p) {
      if (d !== V)
        for (const b in d)
          !rt(b) && !(b in p) && o(
            l,
            b,
            d[b],
            null,
            E,
            f.children,
            _,
            y,
            ve
          );
      for (const b in p) {
        if (rt(b))
          continue;
        const x = p[b], g = d[b];
        x !== g && b !== "value" && o(
          l,
          b,
          g,
          x,
          E,
          f.children,
          _,
          y,
          ve
        );
      }
      "value" in p && o(l, "value", d.value, p.value, E);
    }
  }, bt = (l, f, d, p, _, y, E, b, x) => {
    const g = f.el = l ? l.el : c(""), v = f.anchor = l ? l.anchor : c("");
    let { patchFlag: O, dynamicChildren: C, slotScopeIds: R } = f;
    R && (b = b ? b.concat(R) : R), l == null ? (s(g, d, p), s(v, d, p), ue(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      d,
      v,
      _,
      y,
      E,
      b,
      x
    )) : O > 0 && O & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Le(
      l.dynamicChildren,
      C,
      d,
      _,
      y,
      E,
      b
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || _ && f === _.subTree) && Sr(
      l,
      f,
      !0
      /* shallow */
    )) : U(
      l,
      f,
      d,
      v,
      _,
      y,
      E,
      b,
      x
    );
  }, yt = (l, f, d, p, _, y, E, b, x) => {
    f.slotScopeIds = b, l == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      d,
      p,
      E,
      x
    ) : Xt(
      f,
      d,
      p,
      _,
      y,
      E,
      x
    ) : Bn(l, f, x);
  }, Xt = (l, f, d, p, _, y, E) => {
    const b = l.component = Mi(
      l,
      p,
      _
    );
    if (dr(l) && (b.ctx.renderer = et), Fi(b), b.asyncDep) {
      if (_ && _.registerDep(b, Z), !l.el) {
        const x = b.subTree = ce(Ye);
        G(null, x, f, d);
      }
    } else
      Z(
        b,
        l,
        f,
        d,
        _,
        y,
        E
      );
  }, Bn = (l, f, d) => {
    const p = f.component = l.component;
    if (Ho(l, f, d))
      if (p.asyncDep && !p.asyncResolved) {
        $(p, f, d);
        return;
      } else
        p.next = f, Po(p.update), p.effect.dirty = !0, p.update();
    else
      f.el = l.el, p.vnode = f;
  }, Z = (l, f, d, p, _, y, E) => {
    const b = () => {
      if (l.isMounted) {
        let { next: v, bu: O, u: C, parent: R, vnode: I } = l;
        {
          const ke = Tr(l);
          if (ke) {
            v && (v.el = I.el, $(l, v, E)), ke.asyncDep.then(() => {
              l.isUnmounted || b();
            });
            return;
          }
        }
        let D = v, H;
        je(l, !1), v ? (v.el = I.el, $(l, v, E)) : v = I, O && Qt(O), (H = v.props && v.props.onVnodeBeforeUpdate) && ye(H, R, v, I), je(l, !0);
        const z = nn(l), ae = l.subTree;
        l.subTree = z, N(
          ae,
          z,
          // parent may have changed if it's in a teleport
          m(ae.el),
          // anchor may have changed if it's in a fragment
          Et(ae),
          l,
          _,
          y
        ), v.el = z.el, D === null && Vo(l, z.el), C && te(C, _), (H = v.props && v.props.onVnodeUpdated) && te(
          () => ye(H, R, v, I),
          _
        );
      } else {
        let v;
        const { el: O, props: C } = f, { bm: R, m: I, parent: D } = l, H = lt(f);
        if (je(l, !1), R && Qt(R), !H && (v = C && C.onVnodeBeforeMount) && ye(v, D, f), je(l, !0), O && Gn) {
          const z = () => {
            l.subTree = nn(l), Gn(
              O,
              l.subTree,
              l,
              _,
              null
            );
          };
          H ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && z()
          ) : z();
        } else {
          const z = l.subTree = nn(l);
          N(
            null,
            z,
            d,
            p,
            l,
            _,
            y
          ), f.el = z.el;
        }
        if (I && te(I, _), !H && (v = C && C.onVnodeMounted)) {
          const z = f;
          te(
            () => ye(v, D, z),
            _
          );
        }
        (f.shapeFlag & 256 || D && lt(D.vnode) && D.vnode.shapeFlag & 256) && l.a && te(l.a, _), l.isMounted = !0, f = d = p = null;
      }
    }, x = l.effect = new Tn(
      b,
      ie,
      () => Fn(g),
      l.scope
      // track it in component's effect scope
    ), g = l.update = () => {
      x.dirty && x.run();
    };
    g.id = l.uid, je(l, !0), g();
  }, $ = (l, f, d) => {
    f.component = l;
    const p = l.vnode.props;
    l.vnode = f, l.next = null, mi(l, f.props, p, d), xi(l, f.children, d), Se(), os(l), Te();
  }, U = (l, f, d, p, _, y, E, b, x = !1) => {
    const g = l && l.children, v = l ? l.shapeFlag : 0, O = f.children, { patchFlag: C, shapeFlag: R } = f;
    if (C > 0) {
      if (C & 128) {
        xt(
          g,
          O,
          d,
          p,
          _,
          y,
          E,
          b,
          x
        );
        return;
      } else if (C & 256) {
        Ue(
          g,
          O,
          d,
          p,
          _,
          y,
          E,
          b,
          x
        );
        return;
      }
    }
    R & 8 ? (v & 16 && ve(g, _, y), O !== g && h(d, O)) : v & 16 ? R & 16 ? xt(
      g,
      O,
      d,
      p,
      _,
      y,
      E,
      b,
      x
    ) : ve(g, _, y, !0) : (v & 8 && h(d, ""), R & 16 && ue(
      O,
      d,
      p,
      _,
      y,
      E,
      b,
      x
    ));
  }, Ue = (l, f, d, p, _, y, E, b, x) => {
    l = l || ze, f = f || ze;
    const g = l.length, v = f.length, O = Math.min(g, v);
    let C;
    for (C = 0; C < O; C++) {
      const R = f[C] = x ? Ne(f[C]) : xe(f[C]);
      N(
        l[C],
        R,
        d,
        null,
        _,
        y,
        E,
        b,
        x
      );
    }
    g > v ? ve(
      l,
      _,
      y,
      !0,
      !1,
      O
    ) : ue(
      f,
      d,
      p,
      _,
      y,
      E,
      b,
      x,
      O
    );
  }, xt = (l, f, d, p, _, y, E, b, x) => {
    let g = 0;
    const v = f.length;
    let O = l.length - 1, C = v - 1;
    for (; g <= O && g <= C; ) {
      const R = l[g], I = f[g] = x ? Ne(f[g]) : xe(f[g]);
      if (nt(R, I))
        N(
          R,
          I,
          d,
          null,
          _,
          y,
          E,
          b,
          x
        );
      else
        break;
      g++;
    }
    for (; g <= O && g <= C; ) {
      const R = l[O], I = f[C] = x ? Ne(f[C]) : xe(f[C]);
      if (nt(R, I))
        N(
          R,
          I,
          d,
          null,
          _,
          y,
          E,
          b,
          x
        );
      else
        break;
      O--, C--;
    }
    if (g > O) {
      if (g <= C) {
        const R = C + 1, I = R < v ? f[R].el : p;
        for (; g <= C; )
          N(
            null,
            f[g] = x ? Ne(f[g]) : xe(f[g]),
            d,
            I,
            _,
            y,
            E,
            b,
            x
          ), g++;
      }
    } else if (g > C)
      for (; g <= O; )
        me(l[g], _, y, !0), g++;
    else {
      const R = g, I = g, D = /* @__PURE__ */ new Map();
      for (g = I; g <= C; g++) {
        const re = f[g] = x ? Ne(f[g]) : xe(f[g]);
        re.key != null && D.set(re.key, g);
      }
      let H, z = 0;
      const ae = C - I + 1;
      let ke = !1, zn = 0;
      const tt = new Array(ae);
      for (g = 0; g < ae; g++)
        tt[g] = 0;
      for (g = R; g <= O; g++) {
        const re = l[g];
        if (z >= ae) {
          me(re, _, y, !0);
          continue;
        }
        let be;
        if (re.key != null)
          be = D.get(re.key);
        else
          for (H = I; H <= C; H++)
            if (tt[H - I] === 0 && nt(re, f[H])) {
              be = H;
              break;
            }
        be === void 0 ? me(re, _, y, !0) : (tt[be - I] = g + 1, be >= zn ? zn = be : ke = !0, N(
          re,
          f[be],
          d,
          null,
          _,
          y,
          E,
          b,
          x
        ), z++);
      }
      const qn = ke ? Ci(tt) : ze;
      for (H = qn.length - 1, g = ae - 1; g >= 0; g--) {
        const re = I + g, be = f[re], Jn = re + 1 < v ? f[re + 1].el : p;
        tt[g] === 0 ? N(
          null,
          be,
          d,
          Jn,
          _,
          y,
          E,
          b,
          x
        ) : ke && (H < 0 || g !== qn[H] ? He(be, d, Jn, 2) : H--);
      }
    }
  }, He = (l, f, d, p, _ = null) => {
    const { el: y, type: E, transition: b, children: x, shapeFlag: g } = l;
    if (g & 6) {
      He(l.component.subTree, f, d, p);
      return;
    }
    if (g & 128) {
      l.suspense.move(f, d, p);
      return;
    }
    if (g & 64) {
      E.move(l, f, d, et);
      return;
    }
    if (E === oe) {
      s(y, f, d);
      for (let O = 0; O < x.length; O++)
        He(x[O], f, d, p);
      s(l.anchor, f, d);
      return;
    }
    if (E === ln) {
      L(l, f, d);
      return;
    }
    if (p !== 2 && g & 1 && b)
      if (p === 0)
        b.beforeEnter(y), s(y, f, d), te(() => b.enter(y), _);
      else {
        const { leave: O, delayLeave: C, afterLeave: R } = b, I = () => s(y, f, d), D = () => {
          O(y, () => {
            I(), R && R();
          });
        };
        C ? C(y, I, D) : D();
      }
    else
      s(y, f, d);
  }, me = (l, f, d, p = !1, _ = !1) => {
    const {
      type: y,
      props: E,
      ref: b,
      children: x,
      dynamicChildren: g,
      shapeFlag: v,
      patchFlag: O,
      dirs: C
    } = l;
    if (b != null && xn(b, null, d, l, !0), v & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const R = v & 1 && C, I = !lt(l);
    let D;
    if (I && (D = E && E.onVnodeBeforeUnmount) && ye(D, f, l), v & 6)
      Dr(l.component, d, p);
    else {
      if (v & 128) {
        l.suspense.unmount(d, p);
        return;
      }
      R && Ve(l, null, f, "beforeUnmount"), v & 64 ? l.type.remove(
        l,
        f,
        d,
        _,
        et,
        p
      ) : g && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== oe || O > 0 && O & 64) ? ve(
        g,
        f,
        d,
        !1,
        !0
      ) : (y === oe && O & 384 || !_ && v & 16) && ve(x, f, d), p && Kn(l);
    }
    (I && (D = E && E.onVnodeUnmounted) || R) && te(() => {
      D && ye(D, f, l), R && Ve(l, null, f, "unmounted");
    }, d);
  }, Kn = (l) => {
    const { type: f, el: d, anchor: p, transition: _ } = l;
    if (f === oe) {
      Fr(d, p);
      return;
    }
    if (f === ln) {
      W(l);
      return;
    }
    const y = () => {
      r(d), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (l.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: E, delayLeave: b } = _, x = () => E(d, y);
      b ? b(l.el, y, x) : x();
    } else
      y();
  }, Fr = (l, f) => {
    let d;
    for (; l !== f; )
      d = w(l), r(l), l = d;
    r(f);
  }, Dr = (l, f, d) => {
    const { bum: p, scope: _, update: y, subTree: E, um: b } = l;
    p && Qt(p), _.stop(), y && (y.active = !1, me(E, l, f, d)), b && te(b, f), te(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, ve = (l, f, d, p = !1, _ = !1, y = 0) => {
    for (let E = y; E < l.length; E++)
      me(l[E], f, d, p, _);
  }, Et = (l) => l.shapeFlag & 6 ? Et(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : w(l.anchor || l.el);
  let Yt = !1;
  const Wn = (l, f, d) => {
    l == null ? f._vnode && me(f._vnode, null, null, !0) : N(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      d
    ), Yt || (Yt = !0, os(), ir(), Yt = !1), f._vnode = l;
  }, et = {
    p: N,
    um: me,
    m: He,
    r: Kn,
    mt: Xt,
    mc: ue,
    pc: U,
    pbc: Le,
    n: Et,
    o: e
  };
  let kn, Gn;
  return {
    render: Wn,
    hydrate: kn,
    createApp: pi(Wn, kn)
  };
}
function on({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function je({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function wi(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Sr(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (S(s) && S(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let c = r[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[o] = Ne(r[o]), c.el = i.el), n || Sr(i, c)), c.type === zt && (c.el = i.el);
    }
}
function Ci(e) {
  const t = e.slice(), n = [0];
  let s, r, o, i, c;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const a = e[s];
    if (a !== 0) {
      if (r = n[n.length - 1], e[r] < a) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        c = o + i >> 1, e[n[c]] < a ? o = c + 1 : i = c;
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function Tr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Tr(t);
}
const Oi = (e) => e.__isTeleport, oe = Symbol.for("v-fgt"), zt = Symbol.for("v-txt"), Ye = Symbol.for("v-cmt"), ln = Symbol.for("v-stc"), ut = [];
let _e = null;
function Xe(e = !1) {
  ut.push(_e = e ? null : []);
}
function Si() {
  ut.pop(), _e = ut[ut.length - 1] || null;
}
let gt = 1;
function _s(e) {
  gt += e;
}
function Rr(e) {
  return e.dynamicChildren = gt > 0 ? _e || ze : null, Si(), gt > 0 && _e && _e.push(e), e;
}
function at(e, t, n, s, r, o) {
  return Rr(
    pe(
      e,
      t,
      n,
      s,
      r,
      o,
      !0
    )
  );
}
function Ti(e, t, n, s, r) {
  return Rr(
    ce(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Ar(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function nt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ir = ({ key: e }) => e ?? null, Pt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? K(e) || ee(e) || A(e) ? { i: ne, r: e, k: t, f: !!n } : e : null);
function pe(e, t = null, n = null, s = 0, r = null, o = e === oe ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ir(t),
    ref: t && Pt(t),
    scopeId: fr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ne
  };
  return c ? (Vn(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= K(n) ? 8 : 16), gt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  _e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && _e.push(u), u;
}
const ce = Ri;
function Ri(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === jo) && (e = Ye), Ar(e)) {
    const c = Ze(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Vn(c, n), gt > 0 && !o && _e && (c.shapeFlag & 6 ? _e[_e.indexOf(e)] = c : _e.push(c)), c.patchFlag |= -2, c;
  }
  if ($i(e) && (e = e.__vccOpts), t) {
    t = Ai(t);
    let { class: c, style: u } = t;
    c && !K(c) && (t.class = jt(c)), B(u) && (Zs(u) && !S(u) && (u = k({}, u)), t.style = Sn(u));
  }
  const i = K(e) ? 1 : $o(e) ? 128 : Oi(e) ? 64 : B(e) ? 4 : A(e) ? 2 : 0;
  return pe(
    e,
    t,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function Ai(e) {
  return e ? Zs(e) || xr(e) ? k({}, e) : e : null;
}
function Ze(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: c, transition: u } = e, a = t ? Ii(r || {}, t) : r, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Ir(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? S(o) ? o.concat(Pt(t)) : [o, Pt(t)] : Pt(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== oe ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ze(e.ssContent),
    ssFallback: e.ssFallback && Ze(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && s && (h.transition = u.clone(h)), h;
}
function Hn(e = " ", t = 0) {
  return ce(zt, null, e, t);
}
function xe(e) {
  return e == null || typeof e == "boolean" ? ce(Ye) : S(e) ? ce(
    oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Ne(e) : ce(zt, null, String(e));
}
function Ne(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ze(e);
}
function Vn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (S(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Vn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !xr(t) ? t._ctx = ne : r === 3 && ne && (ne.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    A(t) ? (t = { default: t, _ctx: ne }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Hn(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ii(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = jt([t.class, s.class]));
      else if (r === "style")
        t.style = Sn([t.style, s.style]);
      else if (Ut(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(S(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function ye(e, t, n, s = null) {
  ge(e, t, 7, [
    n,
    s
  ]);
}
const Pi = mr();
let Ni = 0;
function Mi(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Pi, o = {
    uid: Ni++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Jr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: vr(s, r),
    emitsOptions: cr(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: V,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: V,
    data: V,
    props: V,
    attrs: V,
    slots: V,
    refs: V,
    setupState: V,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Fo.bind(null, o), e.ce && e.ce(o), o;
}
let q = null, Lt, En;
{
  const e = Ds(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  Lt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => q = n
  ), En = t(
    "__VUE_SSR_SETTERS__",
    (n) => qt = n
  );
}
const mt = (e) => {
  const t = q;
  return Lt(e), e.scope.on(), () => {
    e.scope.off(), Lt(t);
  };
}, gs = () => {
  q && q.scope.off(), Lt(null);
};
function Pr(e) {
  return e.vnode.shapeFlag & 4;
}
let qt = !1;
function Fi(e, t = !1) {
  t && En(t);
  const { props: n, children: s } = e.vnode, r = Pr(e);
  gi(e, n, r, t), yi(e, s);
  const o = r ? Di(e, t) : void 0;
  return t && En(!1), o;
}
function Di(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, li);
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Ui(e) : null, o = mt(e);
    Se();
    const i = Oe(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    );
    if (Te(), o(), Is(i)) {
      if (i.then(gs, gs), t)
        return i.then((c) => {
          ms(e, c, t);
        }).catch((c) => {
          Wt(c, e, 0);
        });
      e.asyncDep = i;
    } else
      ms(e, i, t);
  } else
    Nr(e, t);
}
function ms(e, t, n) {
  A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) && (e.setupState = tr(t)), Nr(e, n);
}
let bs;
function Nr(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && bs && !s.render) {
      const r = s.template || Ln(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: u } = s, a = k(
          k(
            {
              isCustomElement: o,
              delimiters: c
            },
            i
          ),
          u
        );
        s.render = bs(r, a);
      }
    }
    e.render = s.render || ie;
  }
  {
    const r = mt(e);
    Se();
    try {
      ci(e);
    } finally {
      Te(), r();
    }
  }
}
const Li = {
  get(e, t) {
    return se(e, "get", ""), e[t];
  }
};
function Ui(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Li),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function jn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(tr(yo(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ct)
          return ct[n](e);
      },
      has(t, n) {
        return n in t || n in ct;
      }
    }));
}
const Hi = /(?:^|[-_])(\w)/g, Vi = (e) => e.replace(Hi, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ji(e, t = !0) {
  return A(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Mr(e, t, n = !1) {
  let s = ji(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? Vi(s) : n ? "App" : "Anonymous";
}
function $i(e) {
  return A(e) && "__vccOpts" in e;
}
const Bi = (e, t) => xo(e, t, qt), Ki = "3.4.27", Wi = "http://www.w3.org/2000/svg", ki = "http://www.w3.org/1998/Math/MathML", Me = typeof document < "u" ? document : null, ys = Me && /* @__PURE__ */ Me.createElement("template"), Gi = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? Me.createElementNS(Wi, e) : t === "mathml" ? Me.createElementNS(ki, e) : Me.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => Me.createTextNode(e),
  createComment: (e) => Me.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Me.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      ys.innerHTML = s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e;
      const c = ys.content;
      if (s === "svg" || s === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, zi = Symbol("_vtc");
function qi(e, t, n) {
  const s = e[zi];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const xs = Symbol("_vod"), Ji = Symbol("_vsh"), Xi = Symbol(""), Yi = /(^|;)\s*display\s*:/;
function Zi(e, t, n) {
  const s = e.style, r = K(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (K(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          n[c] == null && Nt(s, c, "");
        }
      else
        for (const i in t)
          n[i] == null && Nt(s, i, "");
    for (const i in n)
      i === "display" && (o = !0), Nt(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[Xi];
      i && (n += ";" + i), s.cssText = n, o = Yi.test(n);
    }
  } else
    t && e.removeAttribute("style");
  xs in e && (e[xs] = o ? s.display : "", e[Ji] && (s.display = "none"));
}
const Es = /\s*!important$/;
function Nt(e, t, n) {
  if (S(n))
    n.forEach((s) => Nt(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Qi(e, t);
    Es.test(n) ? e.setProperty(
      he(s),
      n.replace(Es, ""),
      "important"
    ) : e[s] = n;
  }
}
const vs = ["Webkit", "Moz", "ms"], cn = {};
function Qi(e, t) {
  const n = cn[t];
  if (n)
    return n;
  let s = we(t);
  if (s !== "filter" && s in e)
    return cn[t] = s;
  s = Ms(s);
  for (let r = 0; r < vs.length; r++) {
    const o = vs[r] + s;
    if (o in e)
      return cn[t] = o;
  }
  return t;
}
const ws = "http://www.w3.org/1999/xlink";
function el(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ws, t.slice(6, t.length)) : e.setAttributeNS(ws, t, n);
  else {
    const o = zr(t);
    n == null || o && !Ls(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function tl(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), e[t] = n ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const a = c === "OPTION" ? e.getAttribute("value") || "" : e.value, h = n ?? "";
    (a !== h || !("_value" in e)) && (e.value = h), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Ls(n) : n == null && a === "string" ? (n = "", u = !0) : a === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(t);
}
function nl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function sl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Cs = Symbol("_vei");
function rl(e, t, n, s, r = null) {
  const o = e[Cs] || (e[Cs] = {}), i = o[t];
  if (s && i)
    i.value = s;
  else {
    const [c, u] = ol(t);
    if (s) {
      const a = o[t] = cl(
        s,
        r
      );
      nl(e, c, a, u);
    } else
      i && (sl(e, c, i, u), o[t] = void 0);
  }
}
const Os = /(?:Once|Passive|Capture)$/;
function ol(e) {
  let t;
  if (Os.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Os); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : he(e.slice(2)), t];
}
let fn = 0;
const il = /* @__PURE__ */ Promise.resolve(), ll = () => fn || (il.then(() => fn = 0), fn = Date.now());
function cl(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    ge(
      fl(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = ll(), n;
}
function fl(e, t) {
  if (S(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const Ss = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ul = (e, t, n, s, r, o, i, c, u) => {
  const a = r === "svg";
  t === "class" ? qi(e, s, a) : t === "style" ? Zi(e, n, s) : Ut(t) ? wn(t) || rl(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : al(e, t, s, a)) ? tl(
    e,
    t,
    s,
    o,
    i,
    c,
    u
  ) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), el(e, t, s, a));
};
function al(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ss(t) && A(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ss(t) && K(n) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function dl(e, t) {
  const n = /* @__PURE__ */ ar(e);
  class s extends $n {
    constructor(o) {
      super(n, o, t);
    }
  }
  return s.def = n, s;
}
const hl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class $n extends hl {
  constructor(t, n = {}, s) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), rr(() => {
      this._connected || (Rs(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver((s) => {
      for (const r of s)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (s, r = !1) => {
      const { props: o, styles: i } = s;
      let c;
      if (o && !S(o))
        for (const u in o) {
          const a = o[u];
          (a === Number || a && a.type === Number) && (u in this._props && (this._props[u] = Xn(this._props[u])), (c || (c = /* @__PURE__ */ Object.create(null)))[we(u)] = !0);
        }
      this._numberProps = c, r && this._resolveProps(s), this._applyStyles(i), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((s) => t(s, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, s = S(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && s.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of s.map(we))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(o) {
          this._setProp(r, o);
        }
      });
  }
  _setAttr(t) {
    let n = this.hasAttribute(t) ? this.getAttribute(t) : void 0;
    const s = we(t);
    this._numberProps && this._numberProps[s] && (n = Xn(n)), this._setProp(s, n, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, s = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), s && (n === !0 ? this.setAttribute(he(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(he(t), n + "") : n || this.removeAttribute(he(t))));
  }
  _update() {
    Rs(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = ce(this._def, k({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const s = (o, i) => {
        this.dispatchEvent(
          new CustomEvent(o, {
            detail: i
          })
        );
      };
      n.emit = (o, ...i) => {
        s(o, i), he(o) !== o && s(he(o), i);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof $n) {
          n.parent = r._instance, n.provides = r._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const s = document.createElement("style");
      s.textContent = n, this.shadowRoot.appendChild(s);
    });
  }
}
const pl = /* @__PURE__ */ k({ patchProp: ul }, Gi);
let Ts;
function _l() {
  return Ts || (Ts = Ei(pl));
}
const Rs = (...e) => {
  _l().render(...e);
}, gl = {
  width: "14",
  height: "14",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  fill: "currentColor"
}, ml = /* @__PURE__ */ pe("path", { d: "M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z" }, null, -1), bl = [
  ml
];
function yl(e, t) {
  return Xe(), at("svg", gl, [...bl]);
}
const xl = { name: "icon-file", render: yl }, El = {
  width: "70",
  height: "70",
  viewBox: "0 0 1024 1024",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, vl = /* @__PURE__ */ pe("path", {
  fill: "currentColor",
  d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6z"
}, null, -1), wl = [
  vl
];
function Cl(e, t) {
  return Xe(), at("svg", El, [...wl]);
}
const Ol = { name: "icon-upload", render: Cl }, Sl = /* @__PURE__ */ pe("div", { class: "upload__text" }, [
  /* @__PURE__ */ Hn("Drop file here or "),
  /* @__PURE__ */ pe("span", null, "click to upload")
], -1), Tl = { class: "upload__tip" }, Rl = ["accept", "multiple"], Al = { class: "upload-list" }, Il = /* @__PURE__ */ ar({
  __name: "Uploader.ce",
  props: {
    files: { type: Array },
    accept: { type: String },
    multiple: { type: [Boolean, String] }
  },
  emits: ["change", "cancel"],
  setup(e, { emit: t }) {
    const n = e, s = t, r = tn(), o = tn(!1), i = tn([]);
    ko(() => {
      i.value = n.files ? [...n.files] : [];
    });
    function c() {
      r.value && r.value.click();
    }
    function u(m) {
      const w = m.target;
      w.files ? s("change", [...w.files]) : s("cancel");
    }
    function a(m) {
      if (m.preventDefault(), m.dataTransfer && m.dataTransfer.files) {
        const w = Array.from(m.dataTransfer.files);
        s("change", w);
      }
      o.value = !1;
    }
    function h(m) {
      m.preventDefault(), o.value = !0;
    }
    return (m, w) => {
      const T = Ol, j = xl;
      return Xe(), at(oe, null, [
        pe("div", {
          class: "upload",
          tabindex: "0",
          onClick: c,
          onDragover: h,
          onDragleave: w[0] || (w[0] = (N) => o.value = !1),
          onDrop: a
        }, [
          pe("div", {
            class: jt(["upload-dragger", { "is-dragging": pn(o) }])
          }, [
            ce(T, { class: "icon" }),
            Sl,
            pe("div", Tl, [
              ii(m.$slots, "tip")
            ])
          ], 2),
          pe("input", {
            ref_key: "fileInputRef",
            ref: r,
            type: "file",
            accept: m.accept,
            multiple: m.multiple !== void 0 ? ["true", !0].includes(m.multiple) : !1,
            onChange: u
          }, null, 40, Rl)
        ], 32),
        pe("ul", Al, [
          (Xe(!0), at(oe, null, oi(pn(i), (N, Y) => (Xe(), at("li", { key: Y }, [
            ce(j),
            Hn(" " + qr(N.name), 1)
          ]))), 128))
        ])
      ], 64);
    };
  }
}), Pl = "*{font-family:Open Sans,sans-serif}.upload{display:block;justify-content:center;align-items:center;cursor:pointer;outline:none;color:#606266;font-size:14px}.upload .upload-dragger{padding:40px 10px;background-color:#fff;border:1px dashed #dcdfe6;border-radius:6px;box-sizing:border-box;text-align:center;cursor:pointer;position:relative;overflow:hidden}.upload .upload-dragger .icon{color:#a8abb2;margin-bottom:16px;line-height:50px}.upload .upload-dragger .upload__text span{color:#409eff}.upload .upload-dragger:hover{border-color:#409eff}.upload .upload-dragger.is-dragging{border:2px dashed #409eff;background-color:#f0f9ff}.upload input{display:none}.upload__tip{font-size:12px;color:#606266;margin-top:7px}.upload-list{padding:0 10px}.upload-list li{transition:all .5s cubic-bezier(.55,0,.1,1);color:#606266;margin-bottom:5px;border-radius:4px;display:flex;align-items:center;cursor:pointer;padding:4px;gap:4px}.upload-list li:hover{color:#409eff;background-color:#f5f7fa}", Nl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, Ml = /* @__PURE__ */ Nl(Il, [["styles", [Pl]]]), Fl = /* @__PURE__ */ dl(Ml);
customElements.define("custom-uploader", Fl);
