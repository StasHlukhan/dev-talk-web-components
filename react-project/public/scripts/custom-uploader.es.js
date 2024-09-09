/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Es(e, t) {
  const s = new Set(e.split(","));
  return (n) => s.has(n);
}
const H = {}, Je = [], re = () => {
}, Mr = () => !1, Ut = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ys = (e) => e.startsWith("onUpdate:"), G = Object.assign, Ps = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Fr = Object.prototype.hasOwnProperty, T = (e, t) => Fr.call(e, t), O = Array.isArray, qe = (e) => jt(e) === "[object Map]", Rn = (e) => jt(e) === "[object Set]", A = (e) => typeof e == "function", W = (e) => typeof e == "string", Ke = (e) => typeof e == "symbol", $ = (e) => e !== null && typeof e == "object", An = (e) => ($(e) || A(e)) && A(e.then) && A(e.catch), In = Object.prototype.toString, jt = (e) => In.call(e), Nr = (e) => jt(e).slice(8, -1), Tn = (e) => jt(e) === "[object Object]", Ss = (e) => W(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, st = /* @__PURE__ */ Es(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ht = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Lr = /-(\w)/g, Pe = Ht((e) => e.replace(Lr, (t, s) => s ? s.toUpperCase() : "")), Ur = /\B([A-Z])/g, ae = Ht(
  (e) => e.replace(Ur, "-$1").toLowerCase()
), Dn = Ht((e) => e.charAt(0).toUpperCase() + e.slice(1)), kt = Ht((e) => e ? `on${Dn(e)}` : ""), Ne = (e, t) => !Object.is(e, t), Zt = (e, t) => {
  for (let s = 0; s < e.length; s++)
    e[s](t);
}, Mn = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, jr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, qs = (e) => {
  const t = W(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Xs;
const Fn = () => Xs || (Xs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vs(e) {
  if (O(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = W(n) ? Br(n) : vs(n);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (W(e) || $(e))
    return e;
}
const Hr = /;(?![^(]*\))/g, Vr = /:([^]+)/, $r = /\/\*[^]*?\*\//g;
function Br(e) {
  const t = {};
  return e.replace($r, "").split(Hr).forEach((s) => {
    if (s) {
      const n = s.split(Vr);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Vt(e) {
  let t = "";
  if (W(e))
    t = e;
  else if (O(e))
    for (let s = 0; s < e.length; s++) {
      const n = Vt(e[s]);
      n && (t += n + " ");
    }
  else if ($(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Wr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Kr = /* @__PURE__ */ Es(Wr);
function Nn(e) {
  return !!e || e === "";
}
const Gr = (e) => W(e) ? e : e == null ? "" : O(e) || $(e) && (e.toString === In || !A(e.toString)) ? JSON.stringify(e, Ln, 2) : String(e), Ln = (e, t) => t && t.__v_isRef ? Ln(e, t.value) : qe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], o) => (s[es(n, o) + " =>"] = r, s),
    {}
  )
} : Rn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => es(s))
} : Ke(t) ? es(t) : $(t) && !O(t) && !Tn(t) ? String(t) : t, es = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ke(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
let fe;
class zr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = fe, !t && fe && (this.index = (fe.scopes || (fe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const s = fe;
      try {
        return fe = this, t();
      } finally {
        fe = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    fe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    fe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.scopes)
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Jr(e, t = fe) {
  t && t.active && t.effects.push(e);
}
function qr() {
  return fe;
}
let Be;
class Os {
  constructor(t, s, n, r) {
    this.fn = t, this.trigger = s, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Jr(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Oe();
      for (let t = 0; t < this._depsLength; t++) {
        const s = this.deps[t];
        if (s.computed && (Xr(s.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), we();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Fe, s = Be;
    try {
      return Fe = !0, Be = this, this._runnings++, Ys(this), this.fn();
    } finally {
      Qs(this), this._runnings--, Be = s, Fe = t;
    }
  }
  stop() {
    this.active && (Ys(this), Qs(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Xr(e) {
  return e.value;
}
function Ys(e) {
  e._trackId++, e._depsLength = 0;
}
function Qs(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Un(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Un(e, t) {
  const s = e.get(t);
  s !== void 0 && t._trackId !== s && (e.delete(t), e.size === 0 && e.cleanup());
}
let Fe = !0, fs = 0;
const jn = [];
function Oe() {
  jn.push(Fe), Fe = !1;
}
function we() {
  const e = jn.pop();
  Fe = e === void 0 ? !0 : e;
}
function ws() {
  fs++;
}
function Rs() {
  for (fs--; !fs && us.length; )
    us.shift()();
}
function Hn(e, t, s) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const n = e.deps[e._depsLength];
    n !== t ? (n && Un(n, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const us = [];
function Vn(e, t, s) {
  ws();
  for (const n of e.keys()) {
    let r;
    n._dirtyLevel < t && (r ?? (r = e.get(n) === n._trackId)) && (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0), n._dirtyLevel = t), n._shouldSchedule && (r ?? (r = e.get(n) === n._trackId)) && (n.trigger(), (!n._runnings || n.allowRecurse) && n._dirtyLevel !== 2 && (n._shouldSchedule = !1, n.scheduler && us.push(n.scheduler)));
  }
  Rs();
}
const $n = (e, t) => {
  const s = /* @__PURE__ */ new Map();
  return s.cleanup = e, s.computed = t, s;
}, as = /* @__PURE__ */ new WeakMap(), We = Symbol(""), ds = Symbol("");
function te(e, t, s) {
  if (Fe && Be) {
    let n = as.get(e);
    n || as.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || n.set(s, r = $n(() => n.delete(s))), Hn(
      Be,
      r
    );
  }
}
function Se(e, t, s, n, r, o) {
  const i = as.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (s === "length" && O(e)) {
    const u = Number(n);
    i.forEach((a, h) => {
      (h === "length" || !Ke(h) && h >= u) && c.push(a);
    });
  } else
    switch (s !== void 0 && c.push(i.get(s)), t) {
      case "add":
        O(e) ? Ss(s) && c.push(i.get("length")) : (c.push(i.get(We)), qe(e) && c.push(i.get(ds)));
        break;
      case "delete":
        O(e) || (c.push(i.get(We)), qe(e) && c.push(i.get(ds)));
        break;
      case "set":
        qe(e) && c.push(i.get(We));
        break;
    }
  ws();
  for (const u of c)
    u && Vn(
      u,
      4
    );
  Rs();
}
const Yr = /* @__PURE__ */ Es("__proto__,__v_isRef,__isVue"), Bn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ke)
), ks = /* @__PURE__ */ Qr();
function Qr() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...s) {
      const n = M(this);
      for (let o = 0, i = this.length; o < i; o++)
        te(n, "get", o + "");
      const r = n[t](...s);
      return r === -1 || r === !1 ? n[t](...s.map(M)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...s) {
      Oe(), ws();
      const n = M(this)[t].apply(this, s);
      return Rs(), we(), n;
    };
  }), e;
}
function kr(e) {
  Ke(e) || (e = String(e));
  const t = M(this);
  return te(t, "has", e), t.hasOwnProperty(e);
}
class Wn {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    const r = this._isReadonly, o = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return o;
    if (s === "__v_raw")
      return n === (r ? o ? Xn : qn : o ? Jn : zn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const i = O(t);
    if (!r) {
      if (i && T(ks, s))
        return Reflect.get(ks, s, n);
      if (s === "hasOwnProperty")
        return kr;
    }
    const c = Reflect.get(t, s, n);
    return (Ke(s) ? Bn.has(s) : Yr(s)) || (r || te(t, "get", s), o) ? c : Z(c) ? i && Ss(s) ? c : c.value : $(c) ? r ? Yn(c) : Is(c) : c;
  }
}
class Kn extends Wn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let o = t[s];
    if (!this._isShallow) {
      const u = ut(o);
      if (!Mt(n) && !ut(n) && (o = M(o), n = M(n)), !O(t) && Z(o) && !Z(n))
        return u ? !1 : (o.value = n, !0);
    }
    const i = O(t) && Ss(s) ? Number(s) < t.length : T(t, s), c = Reflect.set(t, s, n, r);
    return t === M(r) && (i ? Ne(n, o) && Se(t, "set", s, n) : Se(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = T(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Se(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Ke(s) || !Bn.has(s)) && te(t, "has", s), n;
  }
  ownKeys(t) {
    return te(
      t,
      "iterate",
      O(t) ? "length" : We
    ), Reflect.ownKeys(t);
  }
}
class Gn extends Wn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const Zr = /* @__PURE__ */ new Kn(), eo = /* @__PURE__ */ new Gn(), to = /* @__PURE__ */ new Kn(
  !0
), so = /* @__PURE__ */ new Gn(!0), As = (e) => e, $t = (e) => Reflect.getPrototypeOf(e);
function Et(e, t, s = !1, n = !1) {
  e = e.__v_raw;
  const r = M(e), o = M(t);
  s || (Ne(t, o) && te(r, "get", t), te(r, "get", o));
  const { has: i } = $t(r), c = n ? As : s ? Ts : at;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, o))
    return c(e.get(o));
  e !== r && e.get(t);
}
function yt(e, t = !1) {
  const s = this.__v_raw, n = M(s), r = M(e);
  return t || (Ne(e, r) && te(n, "has", e), te(n, "has", r)), e === r ? s.has(e) : s.has(e) || s.has(r);
}
function Pt(e, t = !1) {
  return e = e.__v_raw, !t && te(M(e), "iterate", We), Reflect.get(e, "size", e);
}
function Zs(e) {
  e = M(e);
  const t = M(this);
  return $t(t).has.call(t, e) || (t.add(e), Se(t, "add", e, e)), this;
}
function en(e, t) {
  t = M(t);
  const s = M(this), { has: n, get: r } = $t(s);
  let o = n.call(s, e);
  o || (e = M(e), o = n.call(s, e));
  const i = r.call(s, e);
  return s.set(e, t), o ? Ne(t, i) && Se(s, "set", e, t) : Se(s, "add", e, t), this;
}
function tn(e) {
  const t = M(this), { has: s, get: n } = $t(t);
  let r = s.call(t, e);
  r || (e = M(e), r = s.call(t, e)), n && n.call(t, e);
  const o = t.delete(e);
  return r && Se(t, "delete", e, void 0), o;
}
function sn() {
  const e = M(this), t = e.size !== 0, s = e.clear();
  return t && Se(e, "clear", void 0, void 0), s;
}
function St(e, t) {
  return function(n, r) {
    const o = this, i = o.__v_raw, c = M(i), u = t ? As : e ? Ts : at;
    return !e && te(c, "iterate", We), i.forEach((a, h) => n.call(r, u(a), u(h), o));
  };
}
function vt(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, o = M(r), i = qe(o), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...n), h = s ? As : t ? Ts : at;
    return !t && te(
      o,
      "iterate",
      u ? ds : We
    ), {
      // iterator protocol
      next() {
        const { value: C, done: P } = a.next();
        return P ? { value: C, done: P } : {
          value: c ? [h(C[0]), h(C[1])] : h(C),
          done: P
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
function no() {
  const e = {
    get(o) {
      return Et(this, o);
    },
    get size() {
      return Pt(this);
    },
    has: yt,
    add: Zs,
    set: en,
    delete: tn,
    clear: sn,
    forEach: St(!1, !1)
  }, t = {
    get(o) {
      return Et(this, o, !1, !0);
    },
    get size() {
      return Pt(this);
    },
    has: yt,
    add: Zs,
    set: en,
    delete: tn,
    clear: sn,
    forEach: St(!1, !0)
  }, s = {
    get(o) {
      return Et(this, o, !0);
    },
    get size() {
      return Pt(this, !0);
    },
    has(o) {
      return yt.call(this, o, !0);
    },
    add: Ae("add"),
    set: Ae("set"),
    delete: Ae("delete"),
    clear: Ae("clear"),
    forEach: St(!0, !1)
  }, n = {
    get(o) {
      return Et(this, o, !0, !0);
    },
    get size() {
      return Pt(this, !0);
    },
    has(o) {
      return yt.call(this, o, !0);
    },
    add: Ae("add"),
    set: Ae("set"),
    delete: Ae("delete"),
    clear: Ae("clear"),
    forEach: St(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    e[o] = vt(o, !1, !1), s[o] = vt(o, !0, !1), t[o] = vt(o, !1, !0), n[o] = vt(
      o,
      !0,
      !0
    );
  }), [
    e,
    s,
    t,
    n
  ];
}
const [
  ro,
  oo,
  io,
  lo
] = /* @__PURE__ */ no();
function Bt(e, t) {
  const s = t ? e ? lo : io : e ? oo : ro;
  return (n, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    T(s, r) && r in n ? s : n,
    r,
    o
  );
}
const co = {
  get: /* @__PURE__ */ Bt(!1, !1)
}, fo = {
  get: /* @__PURE__ */ Bt(!1, !0)
}, uo = {
  get: /* @__PURE__ */ Bt(!0, !1)
}, ao = {
  get: /* @__PURE__ */ Bt(!0, !0)
}, zn = /* @__PURE__ */ new WeakMap(), Jn = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap();
function ho(e) {
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
function po(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ho(Nr(e));
}
function Is(e) {
  return ut(e) ? e : Wt(
    e,
    !1,
    Zr,
    co,
    zn
  );
}
function _o(e) {
  return Wt(
    e,
    !1,
    to,
    fo,
    Jn
  );
}
function Yn(e) {
  return Wt(
    e,
    !0,
    eo,
    uo,
    qn
  );
}
function Ot(e) {
  return Wt(
    e,
    !0,
    so,
    ao,
    Xn
  );
}
function Wt(e, t, s, n, r) {
  if (!$(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = po(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? n : s
  );
  return r.set(e, c), c;
}
function nt(e) {
  return ut(e) ? nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ut(e) {
  return !!(e && e.__v_isReadonly);
}
function Mt(e) {
  return !!(e && e.__v_isShallow);
}
function Qn(e) {
  return e ? !!e.__v_raw : !1;
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function go(e) {
  return Object.isExtensible(e) && Mn(e, "__v_skip", !0), e;
}
const at = (e) => $(e) ? Is(e) : e, Ts = (e) => $(e) ? Yn(e) : e;
class kn {
  constructor(t, s, n, r) {
    this.getter = t, this._setter = s, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Os(
      () => t(this._value),
      () => Rt(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = n;
  }
  get value() {
    const t = M(this);
    return (!t._cacheable || t.effect.dirty) && Ne(t._value, t._value = t.effect.run()) && Rt(t, 4), Zn(t), t.effect._dirtyLevel >= 2 && Rt(t, 2), t._value;
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
function mo(e, t, s = !1) {
  let n, r;
  const o = A(e);
  return o ? (n = e, r = re) : (n = e.get, r = e.set), new kn(n, r, o || !r, s);
}
function Zn(e) {
  var t;
  Fe && Be && (e = M(e), Hn(
    Be,
    (t = e.dep) != null ? t : e.dep = $n(
      () => e.dep = void 0,
      e instanceof kn ? e : void 0
    )
  ));
}
function Rt(e, t = 4, s) {
  e = M(e);
  const n = e.dep;
  n && Vn(
    n,
    t
  );
}
function Z(e) {
  return !!(e && e.__v_isRef === !0);
}
function ts(e) {
  return bo(e, !1);
}
function bo(e, t) {
  return Z(e) ? e : new Co(e, t);
}
class Co {
  constructor(t, s) {
    this.__v_isShallow = s, this.dep = void 0, this.__v_isRef = !0, this._rawValue = s ? t : M(t), this._value = s ? t : at(t);
  }
  get value() {
    return Zn(this), this._value;
  }
  set value(t) {
    const s = this.__v_isShallow || Mt(t) || ut(t);
    t = s ? t : M(t), Ne(t, this._rawValue) && (this._rawValue = t, this._value = s ? t : at(t), Rt(this, 4));
  }
}
function hs(e) {
  return Z(e) ? e.value : e;
}
const xo = {
  get: (e, t, s) => hs(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return Z(r) && !Z(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function er(e) {
  return nt(e) ? e : new Proxy(e, xo);
}
var Ie = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\stasg\\AppData\\Roaming", ChocolateyInstall: "C:\\ProgramData\\chocolatey", ChocolateyLastPathUpdate: "132836930944806564", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_10052_YGDWIFLKCQLFWZQP", COLOR: "1", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-NPBI3GP", ComSpec: "C:\\Windows\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EDITOR: "C:\\Windows\\notepad.exe", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "c:\\Users\\stasg\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\stasg", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\stasg", INIT_CWD: "D:\\softonix\\dev-talk\\custom-uploader", KMP_DUPLICATE_LIB_OK: "TRUE", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\stasg\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-NPBI3GP", MKL_SERIAL: "YES", NODE: "C:\\Program Files\\nodejs\\node.exe", NODE_ENV: "production", NODE_EXE: "C:\\Program Files\\nodejs\\\\node.exe", NPM_CLI_JS: "C:\\Program Files\\nodejs\\\\node_modules\\npm\\bin\\npm-cli.js", npm_command: "run-script", npm_config_cache: "C:\\Users\\stasg\\AppData\\Local\\npm-cache", npm_config_globalconfig: "C:\\Users\\stasg\\AppData\\Roaming\\npm\\etc\\npmrc", npm_config_global_prefix: "C:\\Users\\stasg\\AppData\\Roaming\\npm", npm_config_init_module: "C:\\Users\\stasg\\.npm-init.js", npm_config_local_prefix: "D:\\softonix\\dev-talk\\custom-uploader", npm_config_node_gyp: "C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_noproxy: "", npm_config_npm_version: "10.2.4", npm_config_prefix: "C:\\Users\\stasg\\AppData\\Roaming\\npm", npm_config_userconfig: "C:\\Users\\stasg\\.npmrc", npm_config_user_agent: "npm/10.2.4 node/v20.11.0 win32 x64 workspaces/false", npm_execpath: "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js", npm_lifecycle_event: "build-only", npm_lifecycle_script: "vite build", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_json: "D:\\softonix\\dev-talk\\custom-uploader\\package.json", npm_package_name: "custom-uploader", npm_package_version: "1.0.0", NPM_PREFIX_NPM_CLI_JS: "C:\\Users\\stasg\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "D:\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\stasg\\OneDrive", OneDriveConsumer: "C:\\Users\\stasg\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "D:\\softonix\\dev-talk\\custom-uploader\\node_modules\\.bin;D:\\softonix\\dev-talk\\node_modules\\.bin;D:\\softonix\\node_modules\\.bin;D:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;D:\\softonix\\dev-talk\\custom-uploader\\node_modules\\.bin;D:\\softonix\\dev-talk\\node_modules\\.bin;D:\\softonix\\node_modules\\.bin;D:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\ProgramData\\Oracle\\Java\\javapath;C:\\Python310\\Scripts\\;C:\\Python310\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\Program Files\\dotnet\\;D:\\other\\Git\\cmd;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files (x86)\\Microsoft SQL Server\\160\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\160\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\160\\DTS\\Binn\\;C:\\Program Files (x86)\\Microsoft SQL Server\\160\\DTS\\Binn\\;D:\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\nodejs\\;C:\\Users\\stasg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\stasg\\.dotnet\\tools;C:\\Program Files\\Azure Data Studio\\bin;D:\\nvm;C:\\Program Files\\nodejs;C:\\Users\\stasg\\AppData\\Roaming\\npm;C:\\Users\\stasg\\AppData\\Local\\Programs\\Microsoft VS Code\\bin", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 113 Stepping 0, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "7100", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\stasg\\OneDrive\\Документи\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files (x86)\\Microsoft SQL Server\\160\\Tools\\PowerShell\\Modules\\", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "D:\\TEMP", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.93.0", TMP: "D:\\TEMP", USERDOMAIN: "DESKTOP-NPBI3GP", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-NPBI3GP", USERNAME: "stasg", USERPROFILE: "C:\\Users\\stasg", VBOX_HWVIRTEX_IGNORE_SVM_IN_USE: "1", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "c:\\Users\\stasg\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "C:\\Users\\stasg\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-1bc6ef7f0d-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows" };
const rt = [];
function Eo(e, ...t) {
  Oe();
  const s = rt.length ? rt[rt.length - 1].component : null, n = s && s.appContext.config.warnHandler, r = yo();
  if (n)
    ve(
      n,
      s,
      11,
      [
        e + t.map((o) => {
          var i, c;
          return (c = (i = o.toString) == null ? void 0 : i.call(o)) != null ? c : JSON.stringify(o);
        }).join(""),
        s && s.proxy,
        r.map(
          ({ vnode: o }) => `at <${Ir(s, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...Po(r)), console.warn(...o);
  }
  we();
}
function yo() {
  let e = rt[rt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const s = t[0];
    s && s.vnode === e ? s.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const n = e.component && e.component.parent;
    e = n && n.vnode;
  }
  return t;
}
function Po(e) {
  const t = [];
  return e.forEach((s, n) => {
    t.push(...n === 0 ? [] : [`
`], ...So(s));
  }), t;
}
function So({ vnode: e, recurseCount: t }) {
  const s = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, r = ` at <${Ir(
    e.component,
    e.type,
    n
  )}`, o = ">" + s;
  return e.props ? [r, ...vo(e.props), o] : [r + o];
}
function vo(e) {
  const t = [], s = Object.keys(e);
  return s.slice(0, 3).forEach((n) => {
    t.push(...tr(n, e[n]));
  }), s.length > 3 && t.push(" ..."), t;
}
function tr(e, t, s) {
  return W(t) ? (t = JSON.stringify(t), s ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? s ? t : [`${e}=${t}`] : Z(t) ? (t = tr(e, M(t.value), !0), s ? t : [`${e}=Ref<`, t, ">"]) : A(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = M(t), s ? t : [`${e}=`, t]);
}
function ve(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    Kt(r, t, s);
  }
}
function pe(e, t, s, n) {
  if (A(e)) {
    const r = ve(e, t, s, n);
    return r && An(r) && r.catch((o) => {
      Kt(o, t, s);
    }), r;
  }
  if (O(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(pe(e[o], t, s, n));
    return r;
  }
}
function Kt(e, t, s, n = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${s}`;
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
      Oe(), ve(
        u,
        null,
        10,
        [e, i, c]
      ), we();
      return;
    }
  }
  Oo(e, s, r, n);
}
function Oo(e, t, s, n = !0) {
  console.error(e);
}
let dt = !1, ps = !1;
const Y = [];
let Ce = 0;
const Xe = [];
let Te = null, $e = 0;
const sr = /* @__PURE__ */ Promise.resolve();
let Ds = null;
function nr(e) {
  const t = Ds || sr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function wo(e) {
  let t = Ce + 1, s = Y.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = Y[n], o = ht(r);
    o < e || o === e && r.pre ? t = n + 1 : s = n;
  }
  return t;
}
function Ms(e) {
  (!Y.length || !Y.includes(
    e,
    dt && e.allowRecurse ? Ce + 1 : Ce
  )) && (e.id == null ? Y.push(e) : Y.splice(wo(e.id), 0, e), rr());
}
function rr() {
  !dt && !ps && (ps = !0, Ds = sr.then(ir));
}
function Ro(e) {
  const t = Y.indexOf(e);
  t > Ce && Y.splice(t, 1);
}
function Ao(e) {
  O(e) ? Xe.push(...e) : (!Te || !Te.includes(
    e,
    e.allowRecurse ? $e + 1 : $e
  )) && Xe.push(e), rr();
}
function nn(e, t, s = dt ? Ce + 1 : 0) {
  for (; s < Y.length; s++) {
    const n = Y[s];
    if (n && n.pre) {
      if (e && n.id !== e.uid)
        continue;
      Y.splice(s, 1), s--, n();
    }
  }
}
function or(e) {
  if (Xe.length) {
    const t = [...new Set(Xe)].sort(
      (s, n) => ht(s) - ht(n)
    );
    if (Xe.length = 0, Te) {
      Te.push(...t);
      return;
    }
    for (Te = t, $e = 0; $e < Te.length; $e++)
      Te[$e]();
    Te = null, $e = 0;
  }
}
const ht = (e) => e.id == null ? 1 / 0 : e.id, Io = (e, t) => {
  const s = ht(e) - ht(t);
  if (s === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return s;
};
function ir(e) {
  ps = !1, dt = !0, Y.sort(Io);
  const t = re;
  try {
    for (Ce = 0; Ce < Y.length; Ce++) {
      const s = Y[Ce];
      s && s.active !== !1 && (Ie.NODE_ENV !== "production" && t(s), ve(s, null, 14));
    }
  } finally {
    Ce = 0, Y.length = 0, or(), dt = !1, Ds = null, (Y.length || Xe.length) && ir();
  }
}
function To(e, t, ...s) {
  if (e.isUnmounted)
    return;
  const n = e.vnode.props || H;
  let r = s;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in n) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`, { number: C, trim: P } = n[h] || H;
    P && (r = s.map((w) => W(w) ? w.trim() : w)), C && (r = s.map(jr));
  }
  let c, u = n[c = kt(t)] || // also try camelCase event handler (#2249)
  n[c = kt(Pe(t))];
  !u && o && (u = n[c = kt(ae(t))]), u && pe(
    u,
    e,
    6,
    r
  );
  const a = n[c + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, pe(
      a,
      e,
      6,
      r
    );
  }
}
function lr(e, t, s = !1) {
  const n = t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, c = !1;
  if (!A(e)) {
    const u = (a) => {
      const h = lr(a, t, !0);
      h && (c = !0, G(i, h));
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !c ? ($(e) && n.set(e, null), null) : (O(o) ? o.forEach((u) => i[u] = null) : G(i, o), $(e) && n.set(e, i), i);
}
function Gt(e, t) {
  return !e || !Ut(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), T(e, t[0].toLowerCase() + t.slice(1)) || T(e, ae(t)) || T(e, t));
}
let xe = null, cr = null;
function Ft(e) {
  const t = xe;
  return xe = e, cr = e && e.type.__scopeId || null, t;
}
function Do(e, t = xe, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && pn(-1);
    const o = Ft(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Ft(o), n._d && pn(1);
    }
    return i;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ss(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [o],
    slots: i,
    attrs: c,
    emit: u,
    render: a,
    renderCache: h,
    props: C,
    data: P,
    setupState: w,
    ctx: B,
    inheritAttrs: F
  } = e, se = Ft(e);
  let z, X;
  try {
    if (s.shapeFlag & 4) {
      const K = r || n, oe = Ie.NODE_ENV !== "production" && w.__isScriptSetup ? new Proxy(K, {
        get(D, ie, le) {
          return Eo(
            `Property '${String(
              ie
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(D, ie, le);
        }
      }) : K;
      z = be(
        a.call(
          oe,
          K,
          h,
          Ie.NODE_ENV !== "production" ? Ot(C) : C,
          w,
          P,
          B
        )
      ), X = c;
    } else {
      const K = t;
      Ie.NODE_ENV, z = be(
        K.length > 1 ? K(
          Ie.NODE_ENV !== "production" ? Ot(C) : C,
          Ie.NODE_ENV !== "production" ? {
            get attrs() {
              return Ot(c);
            },
            slots: i,
            emit: u
          } : { attrs: c, slots: i, emit: u }
        ) : K(
          Ie.NODE_ENV !== "production" ? Ot(C) : C,
          null
        )
      ), X = t.props ? c : Mo(c);
    }
  } catch (K) {
    lt.length = 0, Kt(K, e, 1), z = Ee(pt);
  }
  let L = z;
  if (X && F !== !1) {
    const K = Object.keys(X), { shapeFlag: oe } = L;
    K.length && oe & 7 && (o && K.some(ys) && (X = Fo(
      X,
      o
    )), L = Ye(L, X, !1, !0));
  }
  return s.dirs && (L = Ye(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(s.dirs) : s.dirs), s.transition && (L.transition = s.transition), z = L, Ft(se), z;
}
const Mo = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Ut(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Fo = (e, t) => {
  const s = {};
  for (const n in e)
    (!ys(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function No(e, t, s) {
  const { props: n, children: r, component: o } = e, { props: i, children: c, patchFlag: u } = t, a = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? rn(n, i, a) : !!i;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let C = 0; C < h.length; C++) {
        const P = h[C];
        if (i[P] !== n[P] && !Gt(a, P))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : n === i ? !1 : n ? i ? rn(n, i, a) : !0 : !!i;
  return !1;
}
function rn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (t[o] !== e[o] && !Gt(s, o))
      return !0;
  }
  return !1;
}
function Lo({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Uo = Symbol.for("v-ndc"), jo = (e) => e.__isSuspense;
function Ho(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : Ao(e);
}
const Vo = Symbol.for("v-scx"), $o = () => It(Vo), wt = {};
function ns(e, t, s) {
  return fr(e, t, s);
}
function fr(e, t, {
  immediate: s,
  deep: n,
  flush: r,
  once: o,
  onTrack: i,
  onTrigger: c
} = H) {
  if (t && o) {
    const D = t;
    t = (...ie) => {
      D(...ie), oe();
    };
  }
  const u = q, a = (D) => n === !0 ? D : (
    // for deep: false, only traverse root-level properties
    ze(D, n === !1 ? 1 : void 0)
  );
  let h, C = !1, P = !1;
  if (Z(e) ? (h = () => e.value, C = Mt(e)) : nt(e) ? (h = () => a(e), C = !0) : O(e) ? (P = !0, C = e.some((D) => nt(D) || Mt(D)), h = () => e.map((D) => {
    if (Z(D))
      return D.value;
    if (nt(D))
      return a(D);
    if (A(D))
      return ve(D, u, 2);
  })) : A(e) ? t ? h = () => ve(e, u, 2) : h = () => (w && w(), pe(
    e,
    u,
    3,
    [B]
  )) : h = re, t && n) {
    const D = h;
    h = () => ze(D());
  }
  let w, B = (D) => {
    w = L.onStop = () => {
      ve(D, u, 4), w = L.onStop = void 0;
    };
  }, F;
  if (qt)
    if (B = re, t ? s && pe(t, u, 3, [
      h(),
      P ? [] : void 0,
      B
    ]) : h(), r === "sync") {
      const D = $o();
      F = D.__watcherHandles || (D.__watcherHandles = []);
    } else
      return re;
  let se = P ? new Array(e.length).fill(wt) : wt;
  const z = () => {
    if (!(!L.active || !L.dirty))
      if (t) {
        const D = L.run();
        (n || C || (P ? D.some((ie, le) => Ne(ie, se[le])) : Ne(D, se))) && (w && w(), pe(t, u, 3, [
          D,
          // pass undefined as the old value when it's changed for the first time
          se === wt ? void 0 : P && se[0] === wt ? [] : se,
          B
        ]), se = D);
      } else
        L.run();
  };
  z.allowRecurse = !!t;
  let X;
  r === "sync" ? X = z : r === "post" ? X = () => ee(z, u && u.suspense) : (z.pre = !0, u && (z.id = u.uid), X = () => Ms(z));
  const L = new Os(h, re, X), K = qr(), oe = () => {
    L.stop(), K && Ps(K.effects, L);
  };
  return t ? s ? z() : se = L.run() : r === "post" ? ee(
    L.run.bind(L),
    u && u.suspense
  ) : L.run(), F && F.push(oe), oe;
}
function Bo(e, t, s) {
  const n = this.proxy, r = W(e) ? e.includes(".") ? ur(n, e) : () => n[e] : e.bind(n, n);
  let o;
  A(t) ? o = t : (o = t.handler, s = t);
  const i = gt(this), c = fr(r, o.bind(n), s);
  return i(), c;
}
function ur(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
function ze(e, t = 1 / 0, s) {
  if (t <= 0 || !$(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(e)))
    return e;
  if (s.add(e), t--, Z(e))
    ze(e.value, t, s);
  else if (O(e))
    for (let n = 0; n < e.length; n++)
      ze(e[n], t, s);
  else if (Rn(e) || qe(e))
    e.forEach((n) => {
      ze(n, t, s);
    });
  else if (Tn(e))
    for (const n in e)
      ze(e[n], t, s);
  return e;
}
function He(e, t, s, n) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    o && (c.oldValue = o[i].value);
    let u = c.dir[n];
    u && (Oe(), pe(u, s, 8, [
      e.el,
      c,
      e,
      t
    ]), we());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ar(e, t) {
  return A(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    G({ name: e.name }, t, { setup: e })
  ) : e;
}
const At = (e) => !!e.type.__asyncLoader, dr = (e) => e.type.__isKeepAlive;
function Wo(e, t) {
  hr(e, "a", t);
}
function Ko(e, t) {
  hr(e, "da", t);
}
function hr(e, t, s = q) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (zt(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      dr(r.parent.vnode) && Go(n, t, s, r), r = r.parent;
  }
}
function Go(e, t, s, n) {
  const r = zt(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  pr(() => {
    Ps(n[t], r);
  }, s);
}
function zt(e, t, s = q, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (s.isUnmounted)
        return;
      Oe();
      const c = gt(s), u = pe(t, s, e, i);
      return c(), we(), u;
    });
    return n ? r.unshift(o) : r.push(o), o;
  }
}
const Re = (e) => (t, s = q) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!qt || e === "sp") && zt(e, (...n) => t(...n), s)
), zo = Re("bm"), Jo = Re("m"), qo = Re("bu"), Xo = Re("u"), Yo = Re("bum"), pr = Re("um"), Qo = Re("sp"), ko = Re(
  "rtg"
), Zo = Re(
  "rtc"
);
function ei(e, t = q) {
  zt("ec", e, t);
}
function ti(e, t, s, n) {
  let r;
  const o = s;
  if (O(e) || W(e)) {
    r = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      r[i] = t(e[i], i, void 0, o);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let i = 0; i < e; i++)
      r[i] = t(i + 1, i, void 0, o);
  } else if ($(e))
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
const _s = (e) => e ? Rr(e) ? js(e) || e.proxy : _s(e.parent) : null, ot = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ G(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => _s(e.parent),
    $root: (e) => _s(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Fs(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Ms(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = nr.bind(e.proxy)),
    $watch: (e) => Bo.bind(e)
  })
), rs = (e, t) => e !== H && !e.__isScriptSetup && T(e, t), si = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: o, accessCache: i, type: c, appContext: u } = e;
    let a;
    if (t[0] !== "$") {
      const w = i[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return o[t];
        }
      else {
        if (rs(n, t))
          return i[t] = 1, n[t];
        if (r !== H && T(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && T(a, t)
        )
          return i[t] = 3, o[t];
        if (s !== H && T(s, t))
          return i[t] = 4, s[t];
        gs && (i[t] = 0);
      }
    }
    const h = ot[t];
    let C, P;
    if (h)
      return t === "$attrs" && te(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (C = c.__cssModules) && (C = C[t])
    )
      return C;
    if (s !== H && T(s, t))
      return i[t] = 4, s[t];
    if (
      // global properties
      P = u.config.globalProperties, T(P, t)
    )
      return P[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: o } = e;
    return rs(r, t) ? (r[t] = s, !0) : n !== H && T(n, t) ? (n[t] = s, !0) : T(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, propsOptions: o }
  }, i) {
    let c;
    return !!s[i] || e !== H && T(e, i) || rs(t, i) || (c = o[0]) && T(c, i) || T(n, i) || T(ot, i) || T(r.config.globalProperties, i);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : T(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function on(e) {
  return O(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let gs = !0;
function ni(e) {
  const t = Fs(e), s = e.proxy, n = e.ctx;
  gs = !1, t.beforeCreate && ln(t.beforeCreate, e, "bc");
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
    beforeMount: C,
    mounted: P,
    beforeUpdate: w,
    updated: B,
    activated: F,
    deactivated: se,
    beforeDestroy: z,
    beforeUnmount: X,
    destroyed: L,
    unmounted: K,
    render: oe,
    renderTracked: D,
    renderTriggered: ie,
    errorCaptured: le,
    serverPrefetch: Xt,
    // public API
    expose: Le,
    inheritAttrs: Qe,
    // assets
    components: mt,
    directives: bt,
    filters: Yt
  } = t;
  if (a && ri(a, n, null), i)
    for (const V in i) {
      const U = i[V];
      A(U) && (n[V] = U.bind(s));
    }
  if (r) {
    const V = r.call(s, s);
    $(V) && (e.data = Is(V));
  }
  if (gs = !0, o)
    for (const V in o) {
      const U = o[V], Ue = A(U) ? U.bind(s, s) : A(U.get) ? U.get.bind(s, s) : re, Ct = !A(U) && A(U.set) ? U.set.bind(s) : re, je = ji({
        get: Ue,
        set: Ct
      });
      Object.defineProperty(n, V, {
        enumerable: !0,
        configurable: !0,
        get: () => je.value,
        set: (_e) => je.value = _e
      });
    }
  if (c)
    for (const V in c)
      _r(c[V], n, s, V);
  if (u) {
    const V = A(u) ? u.call(s) : u;
    Reflect.ownKeys(V).forEach((U) => {
      ui(U, V[U]);
    });
  }
  h && ln(h, e, "c");
  function Q(V, U) {
    O(U) ? U.forEach((Ue) => V(Ue.bind(s))) : U && V(U.bind(s));
  }
  if (Q(zo, C), Q(Jo, P), Q(qo, w), Q(Xo, B), Q(Wo, F), Q(Ko, se), Q(ei, le), Q(Zo, D), Q(ko, ie), Q(Yo, X), Q(pr, K), Q(Qo, Xt), O(Le))
    if (Le.length) {
      const V = e.exposed || (e.exposed = {});
      Le.forEach((U) => {
        Object.defineProperty(V, U, {
          get: () => s[U],
          set: (Ue) => s[U] = Ue
        });
      });
    } else
      e.exposed || (e.exposed = {});
  oe && e.render === re && (e.render = oe), Qe != null && (e.inheritAttrs = Qe), mt && (e.components = mt), bt && (e.directives = bt);
}
function ri(e, t, s = re) {
  O(e) && (e = ms(e));
  for (const n in e) {
    const r = e[n];
    let o;
    $(r) ? "default" in r ? o = It(
      r.from || n,
      r.default,
      !0
    ) : o = It(r.from || n) : o = It(r), Z(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[n] = o;
  }
}
function ln(e, t, s) {
  pe(
    O(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function _r(e, t, s, n) {
  const r = n.includes(".") ? ur(s, n) : () => s[n];
  if (W(e)) {
    const o = t[e];
    A(o) && ns(r, o);
  } else if (A(e))
    ns(r, e.bind(s));
  else if ($(e))
    if (O(e))
      e.forEach((o) => _r(o, t, s, n));
    else {
      const o = A(e.handler) ? e.handler.bind(s) : t[e.handler];
      A(o) && ns(r, o, e);
    }
}
function Fs(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let u;
  return c ? u = c : !r.length && !s && !n ? u = t : (u = {}, r.length && r.forEach(
    (a) => Nt(u, a, i, !0)
  ), Nt(u, t, i)), $(t) && o.set(t, u), u;
}
function Nt(e, t, s, n = !1) {
  const { mixins: r, extends: o } = t;
  o && Nt(e, o, s, !0), r && r.forEach(
    (i) => Nt(e, i, s, !0)
  );
  for (const i in t)
    if (!(n && i === "expose")) {
      const c = oi[i] || s && s[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const oi = {
  data: cn,
  props: fn,
  emits: fn,
  // objects
  methods: tt,
  computed: tt,
  // lifecycle
  beforeCreate: k,
  created: k,
  beforeMount: k,
  mounted: k,
  beforeUpdate: k,
  updated: k,
  beforeDestroy: k,
  beforeUnmount: k,
  destroyed: k,
  unmounted: k,
  activated: k,
  deactivated: k,
  errorCaptured: k,
  serverPrefetch: k,
  // assets
  components: tt,
  directives: tt,
  // watch
  watch: li,
  // provide / inject
  provide: cn,
  inject: ii
};
function cn(e, t) {
  return t ? e ? function() {
    return G(
      A(e) ? e.call(this, this) : e,
      A(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ii(e, t) {
  return tt(ms(e), ms(t));
}
function ms(e) {
  if (O(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function k(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function tt(e, t) {
  return e ? G(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function fn(e, t) {
  return e ? O(e) && O(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : G(
    /* @__PURE__ */ Object.create(null),
    on(e),
    on(t ?? {})
  ) : t;
}
function li(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const s = G(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = k(e[n], t[n]);
  return s;
}
function gr() {
  return {
    app: null,
    config: {
      isNativeTag: Mr,
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
let ci = 0;
function fi(e, t) {
  return function(n, r = null) {
    A(n) || (n = G({}, n)), r != null && !$(r) && (r = null);
    const o = gr(), i = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const u = o.app = {
      _uid: ci++,
      _component: n,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Hi,
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
      mount(a, h, C) {
        if (!c) {
          const P = Ee(n, r);
          return P.appContext = o, C === !0 ? C = "svg" : C === !1 && (C = void 0), h && t ? t(P, a) : e(P, a, C), c = !0, u._container = a, a.__vue_app__ = u, js(P.component) || P.component.proxy;
        }
      },
      unmount() {
        c && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, h) {
        return o.provides[a] = h, u;
      },
      runWithContext(a) {
        const h = it;
        it = u;
        try {
          return a();
        } finally {
          it = h;
        }
      }
    };
    return u;
  };
}
let it = null;
function ui(e, t) {
  if (q) {
    let s = q.provides;
    const n = q.parent && q.parent.provides;
    n === s && (s = q.provides = Object.create(n)), s[e] = t;
  }
}
function It(e, t, s = !1) {
  const n = q || xe;
  if (n || it) {
    const r = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : it._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && A(t) ? t.call(n && n.proxy) : t;
  }
}
const mr = {}, br = () => Object.create(mr), Cr = (e) => Object.getPrototypeOf(e) === mr;
function ai(e, t, s, n = !1) {
  const r = {}, o = br();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), xr(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  s ? e.props = n ? r : _o(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function di(e, t, s, n) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, c = M(r), [u] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let C = 0; C < h.length; C++) {
        let P = h[C];
        if (Gt(e.emitsOptions, P))
          continue;
        const w = t[P];
        if (u)
          if (T(o, P))
            w !== o[P] && (o[P] = w, a = !0);
          else {
            const B = Pe(P);
            r[B] = bs(
              u,
              c,
              B,
              w,
              e,
              !1
            );
          }
        else
          w !== o[P] && (o[P] = w, a = !0);
      }
    }
  } else {
    xr(e, t, r, o) && (a = !0);
    let h;
    for (const C in c)
      (!t || // for camelCase
      !T(t, C) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = ae(C)) === C || !T(t, h))) && (u ? s && // for camelCase
      (s[C] !== void 0 || // for kebab-case
      s[h] !== void 0) && (r[C] = bs(
        u,
        c,
        C,
        void 0,
        e,
        !0
      )) : delete r[C]);
    if (o !== c)
      for (const C in o)
        (!t || !T(t, C)) && (delete o[C], a = !0);
  }
  a && Se(e.attrs, "set", "");
}
function xr(e, t, s, n) {
  const [r, o] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if (st(u))
        continue;
      const a = t[u];
      let h;
      r && T(r, h = Pe(u)) ? !o || !o.includes(h) ? s[h] = a : (c || (c = {}))[h] = a : Gt(e.emitsOptions, u) || (!(u in n) || a !== n[u]) && (n[u] = a, i = !0);
    }
  if (o) {
    const u = M(s), a = c || H;
    for (let h = 0; h < o.length; h++) {
      const C = o[h];
      s[C] = bs(
        r,
        u,
        C,
        a[C],
        e,
        !T(a, C)
      );
    }
  }
  return i;
}
function bs(e, t, s, n, r, o) {
  const i = e[s];
  if (i != null) {
    const c = T(i, "default");
    if (c && n === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && A(u)) {
        const { propsDefaults: a } = r;
        if (s in a)
          n = a[s];
        else {
          const h = gt(r);
          n = a[s] = u.call(
            null,
            t
          ), h();
        }
      } else
        n = u;
    }
    i[
      0
      /* shouldCast */
    ] && (o && !c ? n = !1 : i[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === ae(s)) && (n = !0));
  }
  return n;
}
function Er(e, t, s = !1) {
  const n = t.propsCache, r = n.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, c = [];
  let u = !1;
  if (!A(e)) {
    const h = (C) => {
      u = !0;
      const [P, w] = Er(C, t, !0);
      G(i, P), w && c.push(...w);
    };
    !s && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!o && !u)
    return $(e) && n.set(e, Je), Je;
  if (O(o))
    for (let h = 0; h < o.length; h++) {
      const C = Pe(o[h]);
      un(C) && (i[C] = H);
    }
  else if (o)
    for (const h in o) {
      const C = Pe(h);
      if (un(C)) {
        const P = o[h], w = i[C] = O(P) || A(P) ? { type: P } : G({}, P);
        if (w) {
          const B = hn(Boolean, w.type), F = hn(String, w.type);
          w[
            0
            /* shouldCast */
          ] = B > -1, w[
            1
            /* shouldCastTrue */
          ] = F < 0 || B < F, (B > -1 || T(w, "default")) && c.push(C);
        }
      }
    }
  const a = [i, c];
  return $(e) && n.set(e, a), a;
}
function un(e) {
  return e[0] !== "$" && !st(e);
}
function an(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function dn(e, t) {
  return an(e) === an(t);
}
function hn(e, t) {
  return O(t) ? t.findIndex((s) => dn(s, e)) : A(t) && dn(t, e) ? 0 : -1;
}
const yr = (e) => e[0] === "_" || e === "$stable", Ns = (e) => O(e) ? e.map(be) : [be(e)], hi = (e, t, s) => {
  if (t._n)
    return t;
  const n = Do((...r) => (Ie.NODE_ENV !== "production" && q && (!s || (s.root, q.root)), Ns(t(...r))), s);
  return n._c = !1, n;
}, Pr = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (yr(r))
      continue;
    const o = e[r];
    if (A(o))
      t[r] = hi(r, o, n);
    else if (o != null) {
      const i = Ns(o);
      t[r] = () => i;
    }
  }
}, Sr = (e, t) => {
  const s = Ns(t);
  e.slots.default = () => s;
}, pi = (e, t) => {
  const s = e.slots = br();
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (G(s, t), Mn(s, "_", n, !0)) : Pr(t, s);
  } else
    t && Sr(e, t);
}, _i = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let o = !0, i = H;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? s && c === 1 ? o = !1 : (G(r, t), !s && c === 1 && delete r._) : (o = !t.$stable, Pr(t, r)), i = t;
  } else
    t && (Sr(e, t), i = { default: 1 });
  if (o)
    for (const c in r)
      !yr(c) && i[c] == null && delete r[c];
};
function Cs(e, t, s, n, r = !1) {
  if (O(e)) {
    e.forEach(
      (P, w) => Cs(
        P,
        t && (O(t) ? t[w] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (At(n) && !r)
    return;
  const o = n.shapeFlag & 4 ? js(n.component) || n.component.proxy : n.el, i = r ? null : o, { i: c, r: u } = e, a = t && t.r, h = c.refs === H ? c.refs = {} : c.refs, C = c.setupState;
  if (a != null && a !== u && (W(a) ? (h[a] = null, T(C, a) && (C[a] = null)) : Z(a) && (a.value = null)), A(u))
    ve(u, c, 12, [i, h]);
  else {
    const P = W(u), w = Z(u);
    if (P || w) {
      const B = () => {
        if (e.f) {
          const F = P ? T(C, u) ? C[u] : h[u] : u.value;
          r ? O(F) && Ps(F, o) : O(F) ? F.includes(o) || F.push(o) : P ? (h[u] = [o], T(C, u) && (C[u] = h[u])) : (u.value = [o], e.k && (h[e.k] = u.value));
        } else
          P ? (h[u] = i, T(C, u) && (C[u] = i)) : w && (u.value = i, e.k && (h[e.k] = i));
      };
      i ? (B.id = -1, ee(B, s)) : B();
    }
  }
}
const ee = Ho;
function gi(e) {
  return mi(e);
}
function mi(e, t) {
  const s = Fn();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: c,
    createComment: u,
    setText: a,
    setElementText: h,
    parentNode: C,
    nextSibling: P,
    setScopeId: w = re,
    insertStaticContent: B
  } = e, F = (l, f, d, p = null, _ = null, b = null, E = void 0, m = null, x = !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !et(l, f) && (p = xt(l), _e(l, _, b, !0), l = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: g, ref: y, shapeFlag: v } = f;
    switch (g) {
      case Jt:
        se(l, f, d, p);
        break;
      case pt:
        z(l, f, d, p);
        break;
      case is:
        l == null && X(f, d, p, E);
        break;
      case ue:
        mt(
          l,
          f,
          d,
          p,
          _,
          b,
          E,
          m,
          x
        );
        break;
      default:
        v & 1 ? oe(
          l,
          f,
          d,
          p,
          _,
          b,
          E,
          m,
          x
        ) : v & 6 ? bt(
          l,
          f,
          d,
          p,
          _,
          b,
          E,
          m,
          x
        ) : (v & 64 || v & 128) && g.process(
          l,
          f,
          d,
          p,
          _,
          b,
          E,
          m,
          x,
          ke
        );
    }
    y != null && _ && Cs(y, l && l.ref, b, f || l, !f);
  }, se = (l, f, d, p) => {
    if (l == null)
      n(
        f.el = c(f.children),
        d,
        p
      );
    else {
      const _ = f.el = l.el;
      f.children !== l.children && a(_, f.children);
    }
  }, z = (l, f, d, p) => {
    l == null ? n(
      f.el = u(f.children || ""),
      d,
      p
    ) : f.el = l.el;
  }, X = (l, f, d, p) => {
    [l.el, l.anchor] = B(
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
      _ = P(l), n(l, d, p), l = _;
    n(f, d, p);
  }, K = ({ el: l, anchor: f }) => {
    let d;
    for (; l && l !== f; )
      d = P(l), r(l), l = d;
    r(f);
  }, oe = (l, f, d, p, _, b, E, m, x) => {
    f.type === "svg" ? E = "svg" : f.type === "math" && (E = "mathml"), l == null ? D(
      f,
      d,
      p,
      _,
      b,
      E,
      m,
      x
    ) : Xt(
      l,
      f,
      _,
      b,
      E,
      m,
      x
    );
  }, D = (l, f, d, p, _, b, E, m) => {
    let x, g;
    const { props: y, shapeFlag: v, transition: S, dirs: R } = l;
    if (x = l.el = i(
      l.type,
      b,
      y && y.is,
      y
    ), v & 8 ? h(x, l.children) : v & 16 && le(
      l.children,
      x,
      null,
      p,
      _,
      os(l, b),
      E,
      m
    ), R && He(l, null, p, "created"), ie(x, l, l.scopeId, E, p), y) {
      for (const N in y)
        N !== "value" && !st(N) && o(
          x,
          N,
          null,
          y[N],
          b,
          l.children,
          p,
          _,
          ye
        );
      "value" in y && o(x, "value", null, y.value, b), (g = y.onVnodeBeforeMount) && me(g, p, l);
    }
    R && He(l, null, p, "beforeMount");
    const I = bi(_, S);
    I && S.beforeEnter(x), n(x, f, d), ((g = y && y.onVnodeMounted) || I || R) && ee(() => {
      g && me(g, p, l), I && S.enter(x), R && He(l, null, p, "mounted");
    }, _);
  }, ie = (l, f, d, p, _) => {
    if (d && w(l, d), p)
      for (let b = 0; b < p.length; b++)
        w(l, p[b]);
    if (_) {
      let b = _.subTree;
      if (f === b) {
        const E = _.vnode;
        ie(
          l,
          E,
          E.scopeId,
          E.slotScopeIds,
          _.parent
        );
      }
    }
  }, le = (l, f, d, p, _, b, E, m, x = 0) => {
    for (let g = x; g < l.length; g++) {
      const y = l[g] = m ? De(l[g]) : be(l[g]);
      F(
        null,
        y,
        f,
        d,
        p,
        _,
        b,
        E,
        m
      );
    }
  }, Xt = (l, f, d, p, _, b, E) => {
    const m = f.el = l.el;
    let { patchFlag: x, dynamicChildren: g, dirs: y } = f;
    x |= l.patchFlag & 16;
    const v = l.props || H, S = f.props || H;
    let R;
    if (d && Ve(d, !1), (R = S.onVnodeBeforeUpdate) && me(R, d, f, l), y && He(f, l, d, "beforeUpdate"), d && Ve(d, !0), g ? Le(
      l.dynamicChildren,
      g,
      m,
      d,
      p,
      os(f, _),
      b
    ) : E || U(
      l,
      f,
      m,
      null,
      d,
      p,
      os(f, _),
      b,
      !1
    ), x > 0) {
      if (x & 16)
        Qe(
          m,
          f,
          v,
          S,
          d,
          p,
          _
        );
      else if (x & 2 && v.class !== S.class && o(m, "class", null, S.class, _), x & 4 && o(m, "style", v.style, S.style, _), x & 8) {
        const I = f.dynamicProps;
        for (let N = 0; N < I.length; N++) {
          const j = I[N], J = v[j], ce = S[j];
          (ce !== J || j === "value") && o(
            m,
            j,
            J,
            ce,
            _,
            l.children,
            d,
            p,
            ye
          );
        }
      }
      x & 1 && l.children !== f.children && h(m, f.children);
    } else
      !E && g == null && Qe(
        m,
        f,
        v,
        S,
        d,
        p,
        _
      );
    ((R = S.onVnodeUpdated) || y) && ee(() => {
      R && me(R, d, f, l), y && He(f, l, d, "updated");
    }, p);
  }, Le = (l, f, d, p, _, b, E) => {
    for (let m = 0; m < f.length; m++) {
      const x = l[m], g = f[m], y = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !et(x, g) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 70) ? C(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      F(
        x,
        g,
        y,
        null,
        p,
        _,
        b,
        E,
        !0
      );
    }
  }, Qe = (l, f, d, p, _, b, E) => {
    if (d !== p) {
      if (d !== H)
        for (const m in d)
          !st(m) && !(m in p) && o(
            l,
            m,
            d[m],
            null,
            E,
            f.children,
            _,
            b,
            ye
          );
      for (const m in p) {
        if (st(m))
          continue;
        const x = p[m], g = d[m];
        x !== g && m !== "value" && o(
          l,
          m,
          g,
          x,
          E,
          f.children,
          _,
          b,
          ye
        );
      }
      "value" in p && o(l, "value", d.value, p.value, E);
    }
  }, mt = (l, f, d, p, _, b, E, m, x) => {
    const g = f.el = l ? l.el : c(""), y = f.anchor = l ? l.anchor : c("");
    let { patchFlag: v, dynamicChildren: S, slotScopeIds: R } = f;
    R && (m = m ? m.concat(R) : R), l == null ? (n(g, d, p), n(y, d, p), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      d,
      y,
      _,
      b,
      E,
      m,
      x
    )) : v > 0 && v & 64 && S && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Le(
      l.dynamicChildren,
      S,
      d,
      _,
      b,
      E,
      m
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || _ && f === _.subTree) && vr(
      l,
      f,
      !0
      /* shallow */
    )) : U(
      l,
      f,
      d,
      y,
      _,
      b,
      E,
      m,
      x
    );
  }, bt = (l, f, d, p, _, b, E, m, x) => {
    f.slotScopeIds = m, l == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      d,
      p,
      E,
      x
    ) : Yt(
      f,
      d,
      p,
      _,
      b,
      E,
      x
    ) : Vs(l, f, x);
  }, Yt = (l, f, d, p, _, b, E) => {
    const m = l.component = Ai(
      l,
      p,
      _
    );
    if (dr(l) && (m.ctx.renderer = ke), Ii(m), m.asyncDep) {
      if (_ && _.registerDep(m, Q), !l.el) {
        const x = m.subTree = Ee(pt);
        z(null, x, f, d);
      }
    } else
      Q(
        m,
        l,
        f,
        d,
        _,
        b,
        E
      );
  }, Vs = (l, f, d) => {
    const p = f.component = l.component;
    if (No(l, f, d))
      if (p.asyncDep && !p.asyncResolved) {
        V(p, f, d);
        return;
      } else
        p.next = f, Ro(p.update), p.effect.dirty = !0, p.update();
    else
      f.el = l.el, p.vnode = f;
  }, Q = (l, f, d, p, _, b, E) => {
    const m = () => {
      if (l.isMounted) {
        let { next: y, bu: v, u: S, parent: R, vnode: I } = l;
        {
          const Ge = Or(l);
          if (Ge) {
            y && (y.el = I.el, V(l, y, E)), Ge.asyncDep.then(() => {
              l.isUnmounted || m();
            });
            return;
          }
        }
        let N = y, j;
        Ve(l, !1), y ? (y.el = I.el, V(l, y, E)) : y = I, v && Zt(v), (j = y.props && y.props.onVnodeBeforeUpdate) && me(j, R, y, I), Ve(l, !0);
        const J = ss(l), ce = l.subTree;
        l.subTree = J, F(
          ce,
          J,
          // parent may have changed if it's in a teleport
          C(ce.el),
          // anchor may have changed if it's in a fragment
          xt(ce),
          l,
          _,
          b
        ), y.el = J.el, N === null && Lo(l, J.el), S && ee(S, _), (j = y.props && y.props.onVnodeUpdated) && ee(
          () => me(j, R, y, I),
          _
        );
      } else {
        let y;
        const { el: v, props: S } = f, { bm: R, m: I, parent: N } = l, j = At(f);
        if (Ve(l, !1), R && Zt(R), !j && (y = S && S.onVnodeBeforeMount) && me(y, N, f), Ve(l, !0), v && Ks) {
          const J = () => {
            l.subTree = ss(l), Ks(
              v,
              l.subTree,
              l,
              _,
              null
            );
          };
          j ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && J()
          ) : J();
        } else {
          const J = l.subTree = ss(l);
          F(
            null,
            J,
            d,
            p,
            l,
            _,
            b
          ), f.el = J.el;
        }
        if (I && ee(I, _), !j && (y = S && S.onVnodeMounted)) {
          const J = f;
          ee(
            () => me(y, N, J),
            _
          );
        }
        (f.shapeFlag & 256 || N && At(N.vnode) && N.vnode.shapeFlag & 256) && l.a && ee(l.a, _), l.isMounted = !0, f = d = p = null;
      }
    }, x = l.effect = new Os(
      m,
      re,
      () => Ms(g),
      l.scope
      // track it in component's effect scope
    ), g = l.update = () => {
      x.dirty && x.run();
    };
    g.id = l.uid, Ve(l, !0), g();
  }, V = (l, f, d) => {
    f.component = l;
    const p = l.vnode.props;
    l.vnode = f, l.next = null, di(l, f.props, p, d), _i(l, f.children, d), Oe(), nn(l), we();
  }, U = (l, f, d, p, _, b, E, m, x = !1) => {
    const g = l && l.children, y = l ? l.shapeFlag : 0, v = f.children, { patchFlag: S, shapeFlag: R } = f;
    if (S > 0) {
      if (S & 128) {
        Ct(
          g,
          v,
          d,
          p,
          _,
          b,
          E,
          m,
          x
        );
        return;
      } else if (S & 256) {
        Ue(
          g,
          v,
          d,
          p,
          _,
          b,
          E,
          m,
          x
        );
        return;
      }
    }
    R & 8 ? (y & 16 && ye(g, _, b), v !== g && h(d, v)) : y & 16 ? R & 16 ? Ct(
      g,
      v,
      d,
      p,
      _,
      b,
      E,
      m,
      x
    ) : ye(g, _, b, !0) : (y & 8 && h(d, ""), R & 16 && le(
      v,
      d,
      p,
      _,
      b,
      E,
      m,
      x
    ));
  }, Ue = (l, f, d, p, _, b, E, m, x) => {
    l = l || Je, f = f || Je;
    const g = l.length, y = f.length, v = Math.min(g, y);
    let S;
    for (S = 0; S < v; S++) {
      const R = f[S] = x ? De(f[S]) : be(f[S]);
      F(
        l[S],
        R,
        d,
        null,
        _,
        b,
        E,
        m,
        x
      );
    }
    g > y ? ye(
      l,
      _,
      b,
      !0,
      !1,
      v
    ) : le(
      f,
      d,
      p,
      _,
      b,
      E,
      m,
      x,
      v
    );
  }, Ct = (l, f, d, p, _, b, E, m, x) => {
    let g = 0;
    const y = f.length;
    let v = l.length - 1, S = y - 1;
    for (; g <= v && g <= S; ) {
      const R = l[g], I = f[g] = x ? De(f[g]) : be(f[g]);
      if (et(R, I))
        F(
          R,
          I,
          d,
          null,
          _,
          b,
          E,
          m,
          x
        );
      else
        break;
      g++;
    }
    for (; g <= v && g <= S; ) {
      const R = l[v], I = f[S] = x ? De(f[S]) : be(f[S]);
      if (et(R, I))
        F(
          R,
          I,
          d,
          null,
          _,
          b,
          E,
          m,
          x
        );
      else
        break;
      v--, S--;
    }
    if (g > v) {
      if (g <= S) {
        const R = S + 1, I = R < y ? f[R].el : p;
        for (; g <= S; )
          F(
            null,
            f[g] = x ? De(f[g]) : be(f[g]),
            d,
            I,
            _,
            b,
            E,
            m,
            x
          ), g++;
      }
    } else if (g > S)
      for (; g <= v; )
        _e(l[g], _, b, !0), g++;
    else {
      const R = g, I = g, N = /* @__PURE__ */ new Map();
      for (g = I; g <= S; g++) {
        const ne = f[g] = x ? De(f[g]) : be(f[g]);
        ne.key != null && N.set(ne.key, g);
      }
      let j, J = 0;
      const ce = S - I + 1;
      let Ge = !1, Gs = 0;
      const Ze = new Array(ce);
      for (g = 0; g < ce; g++)
        Ze[g] = 0;
      for (g = R; g <= v; g++) {
        const ne = l[g];
        if (J >= ce) {
          _e(ne, _, b, !0);
          continue;
        }
        let ge;
        if (ne.key != null)
          ge = N.get(ne.key);
        else
          for (j = I; j <= S; j++)
            if (Ze[j - I] === 0 && et(ne, f[j])) {
              ge = j;
              break;
            }
        ge === void 0 ? _e(ne, _, b, !0) : (Ze[ge - I] = g + 1, ge >= Gs ? Gs = ge : Ge = !0, F(
          ne,
          f[ge],
          d,
          null,
          _,
          b,
          E,
          m,
          x
        ), J++);
      }
      const zs = Ge ? Ci(Ze) : Je;
      for (j = zs.length - 1, g = ce - 1; g >= 0; g--) {
        const ne = I + g, ge = f[ne], Js = ne + 1 < y ? f[ne + 1].el : p;
        Ze[g] === 0 ? F(
          null,
          ge,
          d,
          Js,
          _,
          b,
          E,
          m,
          x
        ) : Ge && (j < 0 || g !== zs[j] ? je(ge, d, Js, 2) : j--);
      }
    }
  }, je = (l, f, d, p, _ = null) => {
    const { el: b, type: E, transition: m, children: x, shapeFlag: g } = l;
    if (g & 6) {
      je(l.component.subTree, f, d, p);
      return;
    }
    if (g & 128) {
      l.suspense.move(f, d, p);
      return;
    }
    if (g & 64) {
      E.move(l, f, d, ke);
      return;
    }
    if (E === ue) {
      n(b, f, d);
      for (let v = 0; v < x.length; v++)
        je(x[v], f, d, p);
      n(l.anchor, f, d);
      return;
    }
    if (E === is) {
      L(l, f, d);
      return;
    }
    if (p !== 2 && g & 1 && m)
      if (p === 0)
        m.beforeEnter(b), n(b, f, d), ee(() => m.enter(b), _);
      else {
        const { leave: v, delayLeave: S, afterLeave: R } = m, I = () => n(b, f, d), N = () => {
          v(b, () => {
            I(), R && R();
          });
        };
        S ? S(b, I, N) : N();
      }
    else
      n(b, f, d);
  }, _e = (l, f, d, p = !1, _ = !1) => {
    const {
      type: b,
      props: E,
      ref: m,
      children: x,
      dynamicChildren: g,
      shapeFlag: y,
      patchFlag: v,
      dirs: S
    } = l;
    if (m != null && Cs(m, null, d, l, !0), y & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const R = y & 1 && S, I = !At(l);
    let N;
    if (I && (N = E && E.onVnodeBeforeUnmount) && me(N, f, l), y & 6)
      Dr(l.component, d, p);
    else {
      if (y & 128) {
        l.suspense.unmount(d, p);
        return;
      }
      R && He(l, null, f, "beforeUnmount"), y & 64 ? l.type.remove(
        l,
        f,
        d,
        _,
        ke,
        p
      ) : g && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== ue || v > 0 && v & 64) ? ye(
        g,
        f,
        d,
        !1,
        !0
      ) : (b === ue && v & 384 || !_ && y & 16) && ye(x, f, d), p && $s(l);
    }
    (I && (N = E && E.onVnodeUnmounted) || R) && ee(() => {
      N && me(N, f, l), R && He(l, null, f, "unmounted");
    }, d);
  }, $s = (l) => {
    const { type: f, el: d, anchor: p, transition: _ } = l;
    if (f === ue) {
      Tr(d, p);
      return;
    }
    if (f === is) {
      K(l);
      return;
    }
    const b = () => {
      r(d), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (l.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: E, delayLeave: m } = _, x = () => E(d, b);
      m ? m(l.el, b, x) : x();
    } else
      b();
  }, Tr = (l, f) => {
    let d;
    for (; l !== f; )
      d = P(l), r(l), l = d;
    r(f);
  }, Dr = (l, f, d) => {
    const { bum: p, scope: _, update: b, subTree: E, um: m } = l;
    p && Zt(p), _.stop(), b && (b.active = !1, _e(E, l, f, d)), m && ee(m, f), ee(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, ye = (l, f, d, p = !1, _ = !1, b = 0) => {
    for (let E = b; E < l.length; E++)
      _e(l[E], f, d, p, _);
  }, xt = (l) => l.shapeFlag & 6 ? xt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : P(l.anchor || l.el);
  let Qt = !1;
  const Bs = (l, f, d) => {
    l == null ? f._vnode && _e(f._vnode, null, null, !0) : F(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      d
    ), Qt || (Qt = !0, nn(), or(), Qt = !1), f._vnode = l;
  }, ke = {
    p: F,
    um: _e,
    m: je,
    r: $s,
    mt: Yt,
    mc: le,
    pc: U,
    pbc: Le,
    n: xt,
    o: e
  };
  let Ws, Ks;
  return {
    render: Bs,
    hydrate: Ws,
    createApp: fi(Bs, Ws)
  };
}
function os({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Ve({ effect: e, update: t }, s) {
  e.allowRecurse = t.allowRecurse = s;
}
function bi(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function vr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (O(n) && O(r))
    for (let o = 0; o < n.length; o++) {
      const i = n[o];
      let c = r[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[o] = De(r[o]), c.el = i.el), s || vr(i, c)), c.type === Jt && (c.el = i.el);
    }
}
function Ci(e) {
  const t = e.slice(), s = [0];
  let n, r, o, i, c;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const a = e[n];
    if (a !== 0) {
      if (r = s[s.length - 1], e[r] < a) {
        t[n] = r, s.push(n);
        continue;
      }
      for (o = 0, i = s.length - 1; o < i; )
        c = o + i >> 1, e[s[c]] < a ? o = c + 1 : i = c;
      a < e[s[o]] && (o > 0 && (t[n] = s[o - 1]), s[o] = n);
    }
  }
  for (o = s.length, i = s[o - 1]; o-- > 0; )
    s[o] = i, i = t[i];
  return s;
}
function Or(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Or(t);
}
const xi = (e) => e.__isTeleport, ue = Symbol.for("v-fgt"), Jt = Symbol.for("v-txt"), pt = Symbol.for("v-cmt"), is = Symbol.for("v-stc"), lt = [];
let de = null;
function ct(e = !1) {
  lt.push(de = e ? null : []);
}
function Ei() {
  lt.pop(), de = lt[lt.length - 1] || null;
}
let _t = 1;
function pn(e) {
  _t += e;
}
function yi(e) {
  return e.dynamicChildren = _t > 0 ? de || Je : null, Ei(), _t > 0 && de && de.push(e), e;
}
function ft(e, t, s, n, r, o) {
  return yi(
    he(
      e,
      t,
      s,
      n,
      r,
      o,
      !0
    )
  );
}
function Pi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function et(e, t) {
  return e.type === t.type && e.key === t.key;
}
const wr = ({ key: e }) => e ?? null, Tt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? W(e) || Z(e) || A(e) ? { i: xe, r: e, k: t, f: !!s } : e : null);
function he(e, t = null, s = null, n = 0, r = null, o = e === ue ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wr(t),
    ref: t && Tt(t),
    scopeId: cr,
    slotScopeIds: null,
    children: s,
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
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: xe
  };
  return c ? (Us(u, s), o & 128 && e.normalize(u)) : s && (u.shapeFlag |= W(s) ? 8 : 16), _t > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  de && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && de.push(u), u;
}
const Ee = Si;
function Si(e, t = null, s = null, n = 0, r = null, o = !1) {
  if ((!e || e === Uo) && (e = pt), Pi(e)) {
    const c = Ye(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && Us(c, s), _t > 0 && !o && de && (c.shapeFlag & 6 ? de[de.indexOf(e)] = c : de.push(c)), c.patchFlag |= -2, c;
  }
  if (Ui(e) && (e = e.__vccOpts), t) {
    t = vi(t);
    let { class: c, style: u } = t;
    c && !W(c) && (t.class = Vt(c)), $(u) && (Qn(u) && !O(u) && (u = G({}, u)), t.style = vs(u));
  }
  const i = W(e) ? 1 : jo(e) ? 128 : xi(e) ? 64 : $(e) ? 4 : A(e) ? 2 : 0;
  return he(
    e,
    t,
    s,
    n,
    r,
    i,
    o,
    !0
  );
}
function vi(e) {
  return e ? Qn(e) || Cr(e) ? G({}, e) : e : null;
}
function Ye(e, t, s = !1, n = !1) {
  const { props: r, ref: o, patchFlag: i, children: c, transition: u } = e, a = t ? Oi(r || {}, t) : r, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && wr(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && o ? O(o) ? o.concat(Tt(t)) : [o, Tt(t)] : Tt(t)
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
    patchFlag: t && e.type !== ue ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Ye(e.ssContent),
    ssFallback: e.ssFallback && Ye(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && n && (h.transition = u.clone(h)), h;
}
function Ls(e = " ", t = 0) {
  return Ee(Jt, null, e, t);
}
function be(e) {
  return e == null || typeof e == "boolean" ? Ee(pt) : O(e) ? Ee(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? De(e) : Ee(Jt, null, String(e));
}
function De(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ye(e);
}
function Us(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (O(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Us(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !Cr(t) ? t._ctx = xe : r === 3 && xe && (xe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    A(t) ? (t = { default: t, _ctx: xe }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Ls(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Oi(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Vt([t.class, n.class]));
      else if (r === "style")
        t.style = vs([t.style, n.style]);
      else if (Ut(r)) {
        const o = t[r], i = n[r];
        i && o !== i && !(O(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = n[r]);
  }
  return t;
}
function me(e, t, s, n = null) {
  pe(e, t, 7, [
    s,
    n
  ]);
}
const wi = gr();
let Ri = 0;
function Ai(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || wi, o = {
    uid: Ri++,
    vnode: e,
    type: n,
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
    scope: new zr(
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
    propsOptions: Er(n, r),
    emitsOptions: lr(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: H,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: H,
    data: H,
    props: H,
    attrs: H,
    slots: H,
    refs: H,
    setupState: H,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = To.bind(null, o), e.ce && e.ce(o), o;
}
let q = null, Lt, xs;
{
  const e = Fn(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  Lt = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => q = s
  ), xs = t(
    "__VUE_SSR_SETTERS__",
    (s) => qt = s
  );
}
const gt = (e) => {
  const t = q;
  return Lt(e), e.scope.on(), () => {
    e.scope.off(), Lt(t);
  };
}, _n = () => {
  q && q.scope.off(), Lt(null);
};
function Rr(e) {
  return e.vnode.shapeFlag & 4;
}
let qt = !1;
function Ii(e, t = !1) {
  t && xs(t);
  const { props: s, children: n } = e.vnode, r = Rr(e);
  ai(e, s, r, t), pi(e, n);
  const o = r ? Ti(e, t) : void 0;
  return t && xs(!1), o;
}
function Ti(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, si);
  const { setup: n } = s;
  if (n) {
    const r = e.setupContext = n.length > 1 ? Mi(e) : null, o = gt(e);
    Oe();
    const i = ve(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    );
    if (we(), o(), An(i)) {
      if (i.then(_n, _n), t)
        return i.then((c) => {
          gn(e, c, t);
        }).catch((c) => {
          Kt(c, e, 0);
        });
      e.asyncDep = i;
    } else
      gn(e, i, t);
  } else
    Ar(e, t);
}
function gn(e, t, s) {
  A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $(t) && (e.setupState = er(t)), Ar(e, s);
}
let mn;
function Ar(e, t, s) {
  const n = e.type;
  if (!e.render) {
    if (!t && mn && !n.render) {
      const r = n.template || Fs(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: u } = n, a = G(
          G(
            {
              isCustomElement: o,
              delimiters: c
            },
            i
          ),
          u
        );
        n.render = mn(r, a);
      }
    }
    e.render = n.render || re;
  }
  {
    const r = gt(e);
    Oe();
    try {
      ni(e);
    } finally {
      we(), r();
    }
  }
}
const Di = {
  get(e, t) {
    return te(e, "get", ""), e[t];
  }
};
function Mi(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Di),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function js(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(er(go(e.exposed)), {
      get(t, s) {
        if (s in t)
          return t[s];
        if (s in ot)
          return ot[s](e);
      },
      has(t, s) {
        return s in t || s in ot;
      }
    }));
}
const Fi = /(?:^|[-_])(\w)/g, Ni = (e) => e.replace(Fi, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Li(e, t = !0) {
  return A(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ir(e, t, s = !1) {
  let n = Li(t);
  if (!n && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (n = r[1]);
  }
  if (!n && e && e.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    n = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return n ? Ni(n) : s ? "App" : "Anonymous";
}
function Ui(e) {
  return A(e) && "__vccOpts" in e;
}
const ji = (e, t) => mo(e, t, qt), Hi = "3.4.27", Vi = "http://www.w3.org/2000/svg", $i = "http://www.w3.org/1998/Math/MathML", Me = typeof document < "u" ? document : null, bn = Me && /* @__PURE__ */ Me.createElement("template"), Bi = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Me.createElementNS(Vi, e) : t === "mathml" ? Me.createElementNS($i, e) : Me.createElement(e, s ? { is: s } : void 0);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
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
  insertStaticContent(e, t, s, n, r, o) {
    const i = s ? s.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      bn.innerHTML = n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e;
      const c = bn.content;
      if (n === "svg" || n === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, s);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, Wi = Symbol("_vtc");
function Ki(e, t, s) {
  const n = e[Wi];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Cn = Symbol("_vod"), Gi = Symbol("_vsh"), zi = Symbol(""), Ji = /(^|;)\s*display\s*:/;
function qi(e, t, s) {
  const n = e.style, r = W(s);
  let o = !1;
  if (s && !r) {
    if (t)
      if (W(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          s[c] == null && Dt(n, c, "");
        }
      else
        for (const i in t)
          s[i] == null && Dt(n, i, "");
    for (const i in s)
      i === "display" && (o = !0), Dt(n, i, s[i]);
  } else if (r) {
    if (t !== s) {
      const i = n[zi];
      i && (s += ";" + i), n.cssText = s, o = Ji.test(s);
    }
  } else
    t && e.removeAttribute("style");
  Cn in e && (e[Cn] = o ? n.display : "", e[Gi] && (n.display = "none"));
}
const xn = /\s*!important$/;
function Dt(e, t, s) {
  if (O(s))
    s.forEach((n) => Dt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Xi(e, t);
    xn.test(s) ? e.setProperty(
      ae(n),
      s.replace(xn, ""),
      "important"
    ) : e[n] = s;
  }
}
const En = ["Webkit", "Moz", "ms"], ls = {};
function Xi(e, t) {
  const s = ls[t];
  if (s)
    return s;
  let n = Pe(t);
  if (n !== "filter" && n in e)
    return ls[t] = n;
  n = Dn(n);
  for (let r = 0; r < En.length; r++) {
    const o = En[r] + n;
    if (o in e)
      return ls[t] = o;
  }
  return t;
}
const yn = "http://www.w3.org/1999/xlink";
function Yi(e, t, s, n, r) {
  if (n && t.startsWith("xlink:"))
    s == null ? e.removeAttributeNS(yn, t.slice(6, t.length)) : e.setAttributeNS(yn, t, s);
  else {
    const o = Kr(t);
    s == null || o && !Nn(s) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : s);
  }
}
function Qi(e, t, s, n, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n && i(n, r, o), e[t] = s ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const a = c === "OPTION" ? e.getAttribute("value") || "" : e.value, h = s ?? "";
    (a !== h || !("_value" in e)) && (e.value = h), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let u = !1;
  if (s === "" || s == null) {
    const a = typeof e[t];
    a === "boolean" ? s = Nn(s) : s == null && a === "string" ? (s = "", u = !0) : a === "number" && (s = 0, u = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  u && e.removeAttribute(t);
}
function ki(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Zi(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Pn = Symbol("_vei");
function el(e, t, s, n, r = null) {
  const o = e[Pn] || (e[Pn] = {}), i = o[t];
  if (n && i)
    i.value = n;
  else {
    const [c, u] = tl(t);
    if (n) {
      const a = o[t] = rl(
        n,
        r
      );
      ki(e, c, a, u);
    } else
      i && (Zi(e, c, i, u), o[t] = void 0);
  }
}
const Sn = /(?:Once|Passive|Capture)$/;
function tl(e) {
  let t;
  if (Sn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Sn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ae(e.slice(2)), t];
}
let cs = 0;
const sl = /* @__PURE__ */ Promise.resolve(), nl = () => cs || (sl.then(() => cs = 0), cs = Date.now());
function rl(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    pe(
      ol(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = nl(), s;
}
function ol(e, t) {
  if (O(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, il = (e, t, s, n, r, o, i, c, u) => {
  const a = r === "svg";
  t === "class" ? Ki(e, n, a) : t === "style" ? qi(e, s, n) : Ut(t) ? ys(t) || el(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ll(e, t, n, a)) ? Qi(
    e,
    t,
    n,
    o,
    i,
    c,
    u
  ) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Yi(e, t, n, a));
};
function ll(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && vn(t) && A(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return vn(t) && W(s) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function cl(e, t) {
  const s = /* @__PURE__ */ ar(e);
  class n extends Hs {
    constructor(o) {
      super(s, o, t);
    }
  }
  return n.def = s, n;
}
const fl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Hs extends fl {
  constructor(t, s = {}, n) {
    super(), this._def = t, this._props = s, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && n ? n(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), nr(() => {
      this._connected || (wn(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    this._ob = new MutationObserver((n) => {
      for (const r of n)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (n, r = !1) => {
      const { props: o, styles: i } = n;
      let c;
      if (o && !O(o))
        for (const u in o) {
          const a = o[u];
          (a === Number || a && a.type === Number) && (u in this._props && (this._props[u] = qs(this._props[u])), (c || (c = /* @__PURE__ */ Object.create(null)))[Pe(u)] = !0);
        }
      this._numberProps = c, r && this._resolveProps(n), this._applyStyles(i), this._update();
    }, s = this._def.__asyncLoader;
    s ? s().then((n) => t(n, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: s } = t, n = O(s) ? s : Object.keys(s || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && n.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of n.map(Pe))
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
    let s = this.hasAttribute(t) ? this.getAttribute(t) : void 0;
    const n = Pe(t);
    this._numberProps && this._numberProps[n] && (s = qs(s)), this._setProp(n, s, !1);
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
  _setProp(t, s, n = !0, r = !0) {
    s !== this._props[t] && (this._props[t] = s, r && this._instance && this._update(), n && (s === !0 ? this.setAttribute(ae(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(ae(t), s + "") : s || this.removeAttribute(ae(t))));
  }
  _update() {
    wn(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Ee(this._def, G({}, this._props));
    return this._instance || (t.ce = (s) => {
      this._instance = s, s.isCE = !0;
      const n = (o, i) => {
        this.dispatchEvent(
          new CustomEvent(o, {
            detail: i
          })
        );
      };
      s.emit = (o, ...i) => {
        n(o, i), ae(o) !== o && n(ae(o), i);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof Hs) {
          s.parent = r._instance, s.provides = r._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((s) => {
      const n = document.createElement("style");
      n.textContent = s, this.shadowRoot.appendChild(n);
    });
  }
}
const ul = /* @__PURE__ */ G({ patchProp: il }, Bi);
let On;
function al() {
  return On || (On = gi(ul));
}
const wn = (...e) => {
  al().render(...e);
}, dl = {
  width: "14",
  height: "14",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  fill: "currentColor"
}, hl = /* @__PURE__ */ he("path", { d: "M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z" }, null, -1), pl = [
  hl
];
function _l(e, t) {
  return ct(), ft("svg", dl, [...pl]);
}
const gl = { name: "icon-file", render: _l }, ml = {
  width: "70",
  height: "70",
  viewBox: "0 0 1024 1024",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, bl = /* @__PURE__ */ he("path", {
  fill: "currentColor",
  d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6z"
}, null, -1), Cl = [
  bl
];
function xl(e, t) {
  return ct(), ft("svg", ml, [...Cl]);
}
const El = { name: "icon-upload", render: xl }, yl = /* @__PURE__ */ he("div", { class: "el-upload__text" }, [
  /* @__PURE__ */ Ls("Drop file here or "),
  /* @__PURE__ */ he("span", null, "click to upload")
], -1), Pl = /* @__PURE__ */ he("div", { class: "el-upload__tip" }, "jpg/png files with a size less than 500kb", -1), Sl = { class: "el-upload-list" }, vl = /* @__PURE__ */ ar({
  __name: "Uploader.ce",
  setup(e) {
    const t = ts(null), s = ts([]), n = ts(!1);
    function r() {
      t.value && t.value.click();
    }
    function o(u) {
      const a = u.target;
      a.files && (s.value = [...a.files]);
    }
    function i(u) {
      u.preventDefault(), u.dataTransfer && u.dataTransfer.files && (s.value = [...u.dataTransfer.files]), n.value = !1;
    }
    function c(u) {
      u.preventDefault(), n.value = !0;
    }
    return (u, a) => {
      const h = El, C = gl;
      return ct(), ft(ue, null, [
        he("div", {
          class: "el-upload",
          tabindex: "0",
          onClick: r,
          onDragover: c,
          onDragleave: a[0] || (a[0] = (P) => n.value = !1),
          onDrop: i
        }, [
          he("div", {
            class: Vt(["el-upload-dragger", { "is-dragging": hs(n) }])
          }, [
            Ee(h, { class: "el-icon" }),
            yl
          ], 2),
          he("input", {
            ref_key: "fileInputRef",
            ref: t,
            type: "file",
            onChange: o
          }, null, 544)
        ], 32),
        Pl,
        he("ul", Sl, [
          (ct(!0), ft(ue, null, ti(hs(s), (P, w) => (ct(), ft("li", { key: w }, [
            Ee(C),
            Ls(" " + Gr(P.name), 1)
          ]))), 128))
        ])
      ], 64);
    };
  }
}), Ol = "*{font-family:Open Sans,sans-serif}.el-upload{display:block;justify-content:center;align-items:center;cursor:pointer;outline:none;color:#606266;font-size:14px}.el-upload .el-upload-dragger{padding:40px 10px;background-color:#fff;border:1px dashed #dcdfe6;border-radius:6px;box-sizing:border-box;text-align:center;cursor:pointer;position:relative;overflow:hidden}.el-upload .el-upload-dragger .el-icon{color:#a8abb2;margin-bottom:16px;line-height:50px}.el-upload .el-upload-dragger .el-upload__text span{color:#409eff}.el-upload .el-upload-dragger:hover{border-color:#409eff}.el-upload .el-upload-dragger.is-dragging{border:2px dashed #409eff;background-color:#f0f9ff}.el-upload input{display:none}.el-upload__tip{font-size:12px;color:#606266;margin-top:7px}.el-upload-list{padding:0 10px}.el-upload-list li{transition:all .5s cubic-bezier(.55,0,.1,1);color:#606266;margin-bottom:5px;border-radius:4px;display:flex;align-items:center;cursor:pointer;padding:4px;gap:4px}.el-upload-list li:hover{color:#409eff;background-color:#f5f7fa}", wl = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, Rl = /* @__PURE__ */ wl(vl, [["styles", [Ol]]]), Al = /* @__PURE__ */ cl(Rl);
customElements.define("custom-uploader", Al);
