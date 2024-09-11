/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function xs(e, t) {
  const s = new Set(e.split(","));
  return (n) => s.has(n);
}
const j = {}, Je = [], oe = () => {
}, No = () => !1, jt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ys = (e) => e.startsWith("onUpdate:"), K = Object.assign, Es = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Lo = Object.prototype.hasOwnProperty, T = (e, t) => Lo.call(e, t), O = Array.isArray, qe = (e) => Vt(e) === "[object Map]", In = (e) => Vt(e) === "[object Set]", A = (e) => typeof e == "function", W = (e) => typeof e == "string", We = (e) => typeof e == "symbol", B = (e) => e !== null && typeof e == "object", Tn = (e) => (B(e) || A(e)) && A(e.then) && A(e.catch), Mn = Object.prototype.toString, Vt = (e) => Mn.call(e), Uo = (e) => Vt(e).slice(8, -1), Dn = (e) => Vt(e) === "[object Object]", Ps = (e) => W(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, st = /* @__PURE__ */ xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ht = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, jo = /-(\w)/g, ye = Ht((e) => e.replace(jo, (t, s) => s ? s.toUpperCase() : "")), Vo = /\B([A-Z])/g, ie = Ht(
  (e) => e.replace(Vo, "-$1").toLowerCase()
), Fn = Ht((e) => e.charAt(0).toUpperCase() + e.slice(1)), Zt = Ht((e) => e ? `on${Fn(e)}` : ""), Pe = (e, t) => !Object.is(e, t), es = (e, t) => {
  for (let s = 0; s < e.length; s++)
    e[s](t);
}, Nn = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Ho = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Xs = (e) => {
  const t = W(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ys;
const Ln = () => Ys || (Ys = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ss(e) {
  if (O(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], o = W(n) ? Wo(n) : Ss(n);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (W(e) || B(e))
    return e;
}
const $o = /;(?![^(]*\))/g, Bo = /:([^]+)/, Ko = /\/\*[^]*?\*\//g;
function Wo(e) {
  const t = {};
  return e.replace(Ko, "").split($o).forEach((s) => {
    if (s) {
      const n = s.split(Bo);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function $t(e) {
  let t = "";
  if (W(e))
    t = e;
  else if (O(e))
    for (let s = 0; s < e.length; s++) {
      const n = $t(e[s]);
      n && (t += n + " ");
    }
  else if (B(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Go = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zo = /* @__PURE__ */ xs(Go);
function Un(e) {
  return !!e || e === "";
}
const Jo = (e) => W(e) ? e : e == null ? "" : O(e) || B(e) && (e.toString === Mn || !A(e.toString)) ? JSON.stringify(e, jn, 2) : String(e), jn = (e, t) => t && t.__v_isRef ? jn(e, t.value) : qe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, o], r) => (s[ts(n, r) + " =>"] = o, s),
    {}
  )
} : In(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => ts(s))
} : We(t) ? ts(t) : B(t) && !O(t) && !Dn(t) ? String(t) : t, ts = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    We(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
let ue;
class qo {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = ue, !t && ue && (this.index = (ue.scopes || (ue.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const s = ue;
      try {
        return ue = this, t();
      } finally {
        ue = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ue = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ue = this.parent;
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
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Xo(e, t = ue) {
  t && t.active && t.effects.push(e);
}
function Yo() {
  return ue;
}
let Be;
class vs {
  constructor(t, s, n, o) {
    this.fn = t, this.trigger = s, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Xo(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, we();
      for (let t = 0; t < this._depsLength; t++) {
        const s = this.deps[t];
        if (s.computed && (Qo(s.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Re();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Ne, s = Be;
    try {
      return Ne = !0, Be = this, this._runnings++, Qs(this), this.fn();
    } finally {
      ks(this), this._runnings--, Be = s, Ne = t;
    }
  }
  stop() {
    this.active && (Qs(this), ks(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Qo(e) {
  return e.value;
}
function Qs(e) {
  e._trackId++, e._depsLength = 0;
}
function ks(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Vn(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Vn(e, t) {
  const s = e.get(t);
  s !== void 0 && t._trackId !== s && (e.delete(t), e.size === 0 && e.cleanup());
}
let Ne = !0, fs = 0;
const Hn = [];
function we() {
  Hn.push(Ne), Ne = !1;
}
function Re() {
  const e = Hn.pop();
  Ne = e === void 0 ? !0 : e;
}
function Os() {
  fs++;
}
function ws() {
  for (fs--; !fs && us.length; )
    us.shift()();
}
function $n(e, t, s) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const n = e.deps[e._depsLength];
    n !== t ? (n && Vn(n, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const us = [];
function Bn(e, t, s) {
  Os();
  for (const n of e.keys()) {
    let o;
    n._dirtyLevel < t && (o ?? (o = e.get(n) === n._trackId)) && (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0), n._dirtyLevel = t), n._shouldSchedule && (o ?? (o = e.get(n) === n._trackId)) && (n.trigger(), (!n._runnings || n.allowRecurse) && n._dirtyLevel !== 2 && (n._shouldSchedule = !1, n.scheduler && us.push(n.scheduler)));
  }
  ws();
}
const Kn = (e, t) => {
  const s = /* @__PURE__ */ new Map();
  return s.cleanup = e, s.computed = t, s;
}, as = /* @__PURE__ */ new WeakMap(), Ke = Symbol(""), ds = Symbol("");
function se(e, t, s) {
  if (Ne && Be) {
    let n = as.get(e);
    n || as.set(e, n = /* @__PURE__ */ new Map());
    let o = n.get(s);
    o || n.set(s, o = Kn(() => n.delete(s))), $n(
      Be,
      o
    );
  }
}
function ve(e, t, s, n, o, r) {
  const i = as.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (s === "length" && O(e)) {
    const u = Number(n);
    i.forEach((a, h) => {
      (h === "length" || !We(h) && h >= u) && c.push(a);
    });
  } else
    switch (s !== void 0 && c.push(i.get(s)), t) {
      case "add":
        O(e) ? Ps(s) && c.push(i.get("length")) : (c.push(i.get(Ke)), qe(e) && c.push(i.get(ds)));
        break;
      case "delete":
        O(e) || (c.push(i.get(Ke)), qe(e) && c.push(i.get(ds)));
        break;
      case "set":
        qe(e) && c.push(i.get(Ke));
        break;
    }
  Os();
  for (const u of c)
    u && Bn(
      u,
      4
    );
  ws();
}
const ko = /* @__PURE__ */ xs("__proto__,__v_isRef,__isVue"), Wn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(We)
), Zs = /* @__PURE__ */ Zo();
function Zo() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...s) {
      const n = F(this);
      for (let r = 0, i = this.length; r < i; r++)
        se(n, "get", r + "");
      const o = n[t](...s);
      return o === -1 || o === !1 ? n[t](...s.map(F)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...s) {
      we(), Os();
      const n = F(this)[t].apply(this, s);
      return ws(), Re(), n;
    };
  }), e;
}
function er(e) {
  We(e) || (e = String(e));
  const t = F(this);
  return se(t, "has", e), t.hasOwnProperty(e);
}
class Gn {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    const o = this._isReadonly, r = this._isShallow;
    if (s === "__v_isReactive")
      return !o;
    if (s === "__v_isReadonly")
      return o;
    if (s === "__v_isShallow")
      return r;
    if (s === "__v_raw")
      return n === (o ? r ? Qn : Yn : r ? Xn : qn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const i = O(t);
    if (!o) {
      if (i && T(Zs, s))
        return Reflect.get(Zs, s, n);
      if (s === "hasOwnProperty")
        return er;
    }
    const c = Reflect.get(t, s, n);
    return (We(s) ? Wn.has(s) : ko(s)) || (o || se(t, "get", s), r) ? c : ee(c) ? i && Ps(s) ? c : c.value : B(c) ? o ? kn(c) : As(c) : c;
  }
}
class zn extends Gn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, o) {
    let r = t[s];
    if (!this._isShallow) {
      const u = at(r);
      if (!Dt(n) && !at(n) && (r = F(r), n = F(n)), !O(t) && ee(r) && !ee(n))
        return u ? !1 : (r.value = n, !0);
    }
    const i = O(t) && Ps(s) ? Number(s) < t.length : T(t, s), c = Reflect.set(t, s, n, o);
    return t === F(o) && (i ? Pe(n, r) && ve(t, "set", s, n) : ve(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = T(t, s);
    t[s];
    const o = Reflect.deleteProperty(t, s);
    return o && n && ve(t, "delete", s, void 0), o;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!We(s) || !Wn.has(s)) && se(t, "has", s), n;
  }
  ownKeys(t) {
    return se(
      t,
      "iterate",
      O(t) ? "length" : Ke
    ), Reflect.ownKeys(t);
  }
}
class Jn extends Gn {
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
const tr = /* @__PURE__ */ new zn(), sr = /* @__PURE__ */ new Jn(), nr = /* @__PURE__ */ new zn(
  !0
), or = /* @__PURE__ */ new Jn(!0), Rs = (e) => e, Bt = (e) => Reflect.getPrototypeOf(e);
function Et(e, t, s = !1, n = !1) {
  e = e.__v_raw;
  const o = F(e), r = F(t);
  s || (Pe(t, r) && se(o, "get", t), se(o, "get", r));
  const { has: i } = Bt(o), c = n ? Rs : s ? Is : dt;
  if (i.call(o, t))
    return c(e.get(t));
  if (i.call(o, r))
    return c(e.get(r));
  e !== o && e.get(t);
}
function Pt(e, t = !1) {
  const s = this.__v_raw, n = F(s), o = F(e);
  return t || (Pe(e, o) && se(n, "has", e), se(n, "has", o)), e === o ? s.has(e) : s.has(e) || s.has(o);
}
function St(e, t = !1) {
  return e = e.__v_raw, !t && se(F(e), "iterate", Ke), Reflect.get(e, "size", e);
}
function en(e) {
  e = F(e);
  const t = F(this);
  return Bt(t).has.call(t, e) || (t.add(e), ve(t, "add", e, e)), this;
}
function tn(e, t) {
  t = F(t);
  const s = F(this), { has: n, get: o } = Bt(s);
  let r = n.call(s, e);
  r || (e = F(e), r = n.call(s, e));
  const i = o.call(s, e);
  return s.set(e, t), r ? Pe(t, i) && ve(s, "set", e, t) : ve(s, "add", e, t), this;
}
function sn(e) {
  const t = F(this), { has: s, get: n } = Bt(t);
  let o = s.call(t, e);
  o || (e = F(e), o = s.call(t, e)), n && n.call(t, e);
  const r = t.delete(e);
  return o && ve(t, "delete", e, void 0), r;
}
function nn() {
  const e = F(this), t = e.size !== 0, s = e.clear();
  return t && ve(e, "clear", void 0, void 0), s;
}
function vt(e, t) {
  return function(n, o) {
    const r = this, i = r.__v_raw, c = F(i), u = t ? Rs : e ? Is : dt;
    return !e && se(c, "iterate", Ke), i.forEach((a, h) => n.call(o, u(a), u(h), r));
  };
}
function Ot(e, t, s) {
  return function(...n) {
    const o = this.__v_raw, r = F(o), i = qe(r), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = o[e](...n), h = s ? Rs : t ? Is : dt;
    return !t && se(
      r,
      "iterate",
      u ? ds : Ke
    ), {
      // iterator protocol
      next() {
        const { value: g, done: y } = a.next();
        return y ? { value: g, done: y } : {
          value: c ? [h(g[0]), h(g[1])] : h(g),
          done: y
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ie(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function rr() {
  const e = {
    get(r) {
      return Et(this, r);
    },
    get size() {
      return St(this);
    },
    has: Pt,
    add: en,
    set: tn,
    delete: sn,
    clear: nn,
    forEach: vt(!1, !1)
  }, t = {
    get(r) {
      return Et(this, r, !1, !0);
    },
    get size() {
      return St(this);
    },
    has: Pt,
    add: en,
    set: tn,
    delete: sn,
    clear: nn,
    forEach: vt(!1, !0)
  }, s = {
    get(r) {
      return Et(this, r, !0);
    },
    get size() {
      return St(this, !0);
    },
    has(r) {
      return Pt.call(this, r, !0);
    },
    add: Ie("add"),
    set: Ie("set"),
    delete: Ie("delete"),
    clear: Ie("clear"),
    forEach: vt(!0, !1)
  }, n = {
    get(r) {
      return Et(this, r, !0, !0);
    },
    get size() {
      return St(this, !0);
    },
    has(r) {
      return Pt.call(this, r, !0);
    },
    add: Ie("add"),
    set: Ie("set"),
    delete: Ie("delete"),
    clear: Ie("clear"),
    forEach: vt(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    e[r] = Ot(r, !1, !1), s[r] = Ot(r, !0, !1), t[r] = Ot(r, !1, !0), n[r] = Ot(
      r,
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
  ir,
  lr,
  cr,
  fr
] = /* @__PURE__ */ rr();
function Kt(e, t) {
  const s = t ? e ? fr : cr : e ? lr : ir;
  return (n, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(
    T(s, o) && o in n ? s : n,
    o,
    r
  );
}
const ur = {
  get: /* @__PURE__ */ Kt(!1, !1)
}, ar = {
  get: /* @__PURE__ */ Kt(!1, !0)
}, dr = {
  get: /* @__PURE__ */ Kt(!0, !1)
}, hr = {
  get: /* @__PURE__ */ Kt(!0, !0)
}, qn = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakMap();
function pr(e) {
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
function _r(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : pr(Uo(e));
}
function As(e) {
  return at(e) ? e : Wt(
    e,
    !1,
    tr,
    ur,
    qn
  );
}
function gr(e) {
  return Wt(
    e,
    !1,
    nr,
    ar,
    Xn
  );
}
function kn(e) {
  return Wt(
    e,
    !0,
    sr,
    dr,
    Yn
  );
}
function wt(e) {
  return Wt(
    e,
    !0,
    or,
    hr,
    Qn
  );
}
function Wt(e, t, s, n, o) {
  if (!B(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const i = _r(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? n : s
  );
  return o.set(e, c), c;
}
function nt(e) {
  return at(e) ? nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function at(e) {
  return !!(e && e.__v_isReadonly);
}
function Dt(e) {
  return !!(e && e.__v_isShallow);
}
function Zn(e) {
  return e ? !!e.__v_raw : !1;
}
function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e;
}
function mr(e) {
  return Object.isExtensible(e) && Nn(e, "__v_skip", !0), e;
}
const dt = (e) => B(e) ? As(e) : e, Is = (e) => B(e) ? kn(e) : e;
class eo {
  constructor(t, s, n, o) {
    this.getter = t, this._setter = s, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new vs(
      () => t(this._value),
      () => ot(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = n;
  }
  get value() {
    const t = F(this);
    return (!t._cacheable || t.effect.dirty) && Pe(t._value, t._value = t.effect.run()) && ot(t, 4), Ts(t), t.effect._dirtyLevel >= 2 && ot(t, 2), t._value;
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
function br(e, t, s = !1) {
  let n, o;
  const r = A(e);
  return r ? (n = e, o = oe) : (n = e.get, o = e.set), new eo(n, o, r || !o, s);
}
function Ts(e) {
  var t;
  Ne && Be && (e = F(e), $n(
    Be,
    (t = e.dep) != null ? t : e.dep = Kn(
      () => e.dep = void 0,
      e instanceof eo ? e : void 0
    )
  ));
}
function ot(e, t = 4, s) {
  e = F(e);
  const n = e.dep;
  n && Bn(
    n,
    t
  );
}
function ee(e) {
  return !!(e && e.__v_isRef === !0);
}
function on(e) {
  return Cr(e, !1);
}
function Cr(e, t) {
  return ee(e) ? e : new xr(e, t);
}
class xr {
  constructor(t, s) {
    this.__v_isShallow = s, this.dep = void 0, this.__v_isRef = !0, this._rawValue = s ? t : F(t), this._value = s ? t : dt(t);
  }
  get value() {
    return Ts(this), this._value;
  }
  set value(t) {
    const s = this.__v_isShallow || Dt(t) || at(t);
    t = s ? t : F(t), Pe(t, this._rawValue) && (this._rawValue = t, this._value = s ? t : dt(t), ot(this, 4));
  }
}
function to(e) {
  return ee(e) ? e.value : e;
}
const yr = {
  get: (e, t, s) => to(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const o = e[t];
    return ee(o) && !ee(s) ? (o.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function so(e) {
  return nt(e) ? e : new Proxy(e, yr);
}
class Er {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: s, set: n } = t(
      () => Ts(this),
      () => ot(this)
    );
    this._get = s, this._set = n;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Pr(e) {
  return new Er(e);
}
var Te = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\stasg\\AppData\\Roaming", ChocolateyInstall: "C:\\ProgramData\\chocolatey", ChocolateyLastPathUpdate: "132836930944806564", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_10640_RVYFSMMFSFSUGOAP", COLOR: "1", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-NPBI3GP", ComSpec: "C:\\Windows\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EDITOR: "C:\\Windows\\notepad.exe", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "c:\\Users\\stasg\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\stasg", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\stasg", INIT_CWD: "D:\\softonix\\dev-talk-web-components\\custom-uploader", KMP_DUPLICATE_LIB_OK: "TRUE", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\stasg\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-NPBI3GP", MKL_SERIAL: "YES", NODE: "C:\\Program Files\\nodejs\\node.exe", NODE_ENV: "production", NODE_EXE: "C:\\Program Files\\nodejs\\\\node.exe", NPM_CLI_JS: "C:\\Program Files\\nodejs\\\\node_modules\\npm\\bin\\npm-cli.js", npm_command: "run-script", npm_config_cache: "C:\\Users\\stasg\\AppData\\Local\\npm-cache", npm_config_globalconfig: "C:\\Users\\stasg\\AppData\\Roaming\\npm\\etc\\npmrc", npm_config_global_prefix: "C:\\Users\\stasg\\AppData\\Roaming\\npm", npm_config_init_module: "C:\\Users\\stasg\\.npm-init.js", npm_config_local_prefix: "D:\\softonix\\dev-talk-web-components\\custom-uploader", npm_config_node_gyp: "C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_noproxy: "", npm_config_npm_version: "10.2.4", npm_config_prefix: "C:\\Users\\stasg\\AppData\\Roaming\\npm", npm_config_userconfig: "C:\\Users\\stasg\\.npmrc", npm_config_user_agent: "npm/10.2.4 node/v20.11.0 win32 x64 workspaces/false", npm_execpath: "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js", npm_lifecycle_event: "build-only", npm_lifecycle_script: "vite build", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_json: "D:\\softonix\\dev-talk-web-components\\custom-uploader\\package.json", npm_package_name: "custom-uploader", npm_package_version: "1.0.0", NPM_PREFIX_NPM_CLI_JS: "C:\\Users\\stasg\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "D:\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\stasg\\OneDrive", OneDriveConsumer: "C:\\Users\\stasg\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "D:\\softonix\\dev-talk-web-components\\custom-uploader\\node_modules\\.bin;D:\\softonix\\dev-talk-web-components\\node_modules\\.bin;D:\\softonix\\node_modules\\.bin;D:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;D:\\softonix\\dev-talk-web-components\\custom-uploader\\node_modules\\.bin;D:\\softonix\\dev-talk-web-components\\node_modules\\.bin;D:\\softonix\\node_modules\\.bin;D:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\ProgramData\\Oracle\\Java\\javapath;C:\\Python310\\Scripts\\;C:\\Python310\\;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\Program Files\\dotnet\\;D:\\other\\Git\\cmd;C:\\Program Files\\Azure Data Studio\\bin;C:\\Program Files (x86)\\Microsoft SQL Server\\160\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\160\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\160\\DTS\\Binn\\;C:\\Program Files (x86)\\Microsoft SQL Server\\160\\DTS\\Binn\\;D:\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\nodejs\\;C:\\Users\\stasg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\stasg\\.dotnet\\tools;C:\\Program Files\\Azure Data Studio\\bin;D:\\nvm;C:\\Program Files\\nodejs;C:\\Users\\stasg\\AppData\\Roaming\\npm;C:\\Users\\stasg\\AppData\\Local\\Programs\\Microsoft VS Code\\bin", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 113 Stepping 0, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "7100", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\stasg\\OneDrive\\Документи\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files (x86)\\Microsoft SQL Server\\160\\Tools\\PowerShell\\Modules\\", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "D:\\TEMP", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.93.0", TMP: "D:\\TEMP", USERDOMAIN: "DESKTOP-NPBI3GP", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-NPBI3GP", USERNAME: "stasg", USERPROFILE: "C:\\Users\\stasg", VBOX_HWVIRTEX_IGNORE_SVM_IN_USE: "1", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "c:\\Users\\stasg\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "C:\\Users\\stasg\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-b346b15bff-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows" };
const rt = [];
function Sr(e, ...t) {
  we();
  const s = rt.length ? rt[rt.length - 1].component : null, n = s && s.appContext.config.warnHandler, o = vr();
  if (n)
    Oe(
      n,
      s,
      11,
      [
        e + t.map((r) => {
          var i, c;
          return (c = (i = r.toString) == null ? void 0 : i.call(r)) != null ? c : JSON.stringify(r);
        }).join(""),
        s && s.proxy,
        o.map(
          ({ vnode: r }) => `at <${Mo(s, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...Or(o)), console.warn(...r);
  }
  Re();
}
function vr() {
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
function Or(e) {
  const t = [];
  return e.forEach((s, n) => {
    t.push(...n === 0 ? [] : [`
`], ...wr(s));
  }), t;
}
function wr({ vnode: e, recurseCount: t }) {
  const s = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, o = ` at <${Mo(
    e.component,
    e.type,
    n
  )}`, r = ">" + s;
  return e.props ? [o, ...Rr(e.props), r] : [o + r];
}
function Rr(e) {
  const t = [], s = Object.keys(e);
  return s.slice(0, 3).forEach((n) => {
    t.push(...no(n, e[n]));
  }), s.length > 3 && t.push(" ..."), t;
}
function no(e, t, s) {
  return W(t) ? (t = JSON.stringify(t), s ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? s ? t : [`${e}=${t}`] : ee(t) ? (t = no(e, F(t.value), !0), s ? t : [`${e}=Ref<`, t, ">"]) : A(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = F(t), s ? t : [`${e}=`, t]);
}
function Oe(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (o) {
    Gt(o, t, s);
  }
}
function _e(e, t, s, n) {
  if (A(e)) {
    const o = Oe(e, t, s, n);
    return o && Tn(o) && o.catch((r) => {
      Gt(r, t, s);
    }), o;
  }
  if (O(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(_e(e[r], t, s, n));
    return o;
  }
}
function Gt(e, t, s, n = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; r; ) {
      const a = r.ec;
      if (a) {
        for (let h = 0; h < a.length; h++)
          if (a[h](e, i, c) === !1)
            return;
      }
      r = r.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      we(), Oe(
        u,
        null,
        10,
        [e, i, c]
      ), Re();
      return;
    }
  }
  Ar(e, s, o, n);
}
function Ar(e, t, s, n = !0) {
  console.error(e);
}
let ht = !1, hs = !1;
const Y = [];
let xe = 0;
const Xe = [];
let Me = null, $e = 0;
const oo = /* @__PURE__ */ Promise.resolve();
let Ms = null;
function ro(e) {
  const t = Ms || oo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ir(e) {
  let t = xe + 1, s = Y.length;
  for (; t < s; ) {
    const n = t + s >>> 1, o = Y[n], r = pt(o);
    r < e || r === e && o.pre ? t = n + 1 : s = n;
  }
  return t;
}
function Ds(e) {
  (!Y.length || !Y.includes(
    e,
    ht && e.allowRecurse ? xe + 1 : xe
  )) && (e.id == null ? Y.push(e) : Y.splice(Ir(e.id), 0, e), io());
}
function io() {
  !ht && !hs && (hs = !0, Ms = oo.then(co));
}
function Tr(e) {
  const t = Y.indexOf(e);
  t > xe && Y.splice(t, 1);
}
function Mr(e) {
  O(e) ? Xe.push(...e) : (!Me || !Me.includes(
    e,
    e.allowRecurse ? $e + 1 : $e
  )) && Xe.push(e), io();
}
function rn(e, t, s = ht ? xe + 1 : 0) {
  for (; s < Y.length; s++) {
    const n = Y[s];
    if (n && n.pre) {
      if (e && n.id !== e.uid)
        continue;
      Y.splice(s, 1), s--, n();
    }
  }
}
function lo(e) {
  if (Xe.length) {
    const t = [...new Set(Xe)].sort(
      (s, n) => pt(s) - pt(n)
    );
    if (Xe.length = 0, Me) {
      Me.push(...t);
      return;
    }
    for (Me = t, $e = 0; $e < Me.length; $e++)
      Me[$e]();
    Me = null, $e = 0;
  }
}
const pt = (e) => e.id == null ? 1 / 0 : e.id, Dr = (e, t) => {
  const s = pt(e) - pt(t);
  if (s === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return s;
};
function co(e) {
  hs = !1, ht = !0, Y.sort(Dr);
  const t = oe;
  try {
    for (xe = 0; xe < Y.length; xe++) {
      const s = Y[xe];
      s && s.active !== !1 && (Te.NODE_ENV !== "production" && t(s), Oe(s, null, 14));
    }
  } finally {
    xe = 0, Y.length = 0, lo(), ht = !1, Ms = null, (Y.length || Xe.length) && co();
  }
}
function Fr(e, t, ...s) {
  if (e.isUnmounted)
    return;
  const n = e.vnode.props || j;
  let o = s;
  const r = t.startsWith("update:"), i = r && t.slice(7);
  if (i && i in n) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`, { number: g, trim: y } = n[h] || j;
    y && (o = s.map((w) => W(w) ? w.trim() : w)), g && (o = s.map(Ho));
  }
  let c, u = n[c = Zt(t)] || // also try camelCase event handler (#2249)
  n[c = Zt(ye(t))];
  !u && r && (u = n[c = Zt(ie(t))]), u && _e(
    u,
    e,
    6,
    o
  );
  const a = n[c + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, _e(
      a,
      e,
      6,
      o
    );
  }
}
function fo(e, t, s = !1) {
  const n = t.emitsCache, o = n.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, c = !1;
  if (!A(e)) {
    const u = (a) => {
      const h = fo(a, t, !0);
      h && (c = !0, K(i, h));
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (B(e) && n.set(e, null), null) : (O(r) ? r.forEach((u) => i[u] = null) : K(i, r), B(e) && n.set(e, i), i);
}
function zt(e, t) {
  return !e || !jt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), T(e, t[0].toLowerCase() + t.slice(1)) || T(e, ie(t)) || T(e, t));
}
let de = null, uo = null;
function Ft(e) {
  const t = de;
  return de = e, uo = e && e.type.__scopeId || null, t;
}
function Nr(e, t = de, s) {
  if (!t || e._n)
    return e;
  const n = (...o) => {
    n._d && gn(-1);
    const r = Ft(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Ft(r), n._d && gn(1);
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
    withProxy: o,
    propsOptions: [r],
    slots: i,
    attrs: c,
    emit: u,
    render: a,
    renderCache: h,
    props: g,
    data: y,
    setupState: w,
    ctx: H,
    inheritAttrs: M
  } = e, Q = Ft(e);
  let z, X;
  try {
    if (s.shapeFlag & 4) {
      const G = o || n, re = Te.NODE_ENV !== "production" && w.__isScriptSetup ? new Proxy(G, {
        get(D, le, ce) {
          return Sr(
            `Property '${String(
              le
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(D, le, ce);
        }
      }) : G;
      z = Ce(
        a.call(
          re,
          G,
          h,
          Te.NODE_ENV !== "production" ? wt(g) : g,
          w,
          y,
          H
        )
      ), X = c;
    } else {
      const G = t;
      Te.NODE_ENV, z = Ce(
        G.length > 1 ? G(
          Te.NODE_ENV !== "production" ? wt(g) : g,
          Te.NODE_ENV !== "production" ? {
            get attrs() {
              return wt(c);
            },
            slots: i,
            emit: u
          } : { attrs: c, slots: i, emit: u }
        ) : G(
          Te.NODE_ENV !== "production" ? wt(g) : g,
          null
        )
      ), X = t.props ? c : Lr(c);
    }
  } catch (G) {
    ct.length = 0, Gt(G, e, 1), z = Ee(_t);
  }
  let L = z;
  if (X && M !== !1) {
    const G = Object.keys(X), { shapeFlag: re } = L;
    G.length && re & 7 && (r && G.some(ys) && (X = Ur(
      X,
      r
    )), L = Ye(L, X, !1, !0));
  }
  return s.dirs && (L = Ye(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(s.dirs) : s.dirs), s.transition && (L.transition = s.transition), z = L, Ft(Q), z;
}
const Lr = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || jt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Ur = (e, t) => {
  const s = {};
  for (const n in e)
    (!ys(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function jr(e, t, s) {
  const { props: n, children: o, component: r } = e, { props: i, children: c, patchFlag: u } = t, a = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? ln(n, i, a) : !!i;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        const y = h[g];
        if (i[y] !== n[y] && !zt(a, y))
          return !0;
      }
    }
  } else
    return (o || c) && (!c || !c.$stable) ? !0 : n === i ? !1 : n ? i ? ln(n, i, a) : !0 : !!i;
  return !1;
}
function ln(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < n.length; o++) {
    const r = n[o];
    if (t[r] !== e[r] && !zt(s, r))
      return !0;
  }
  return !1;
}
function Vr({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Hr = Symbol.for("v-ndc"), $r = (e) => e.__isSuspense;
function Br(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : Mr(e);
}
const Kr = Symbol.for("v-scx"), Wr = () => It(Kr);
function Gr(e, t) {
  return Fs(
    e,
    null,
    { flush: "sync" }
  );
}
const Rt = {};
function ns(e, t, s) {
  return Fs(e, t, s);
}
function Fs(e, t, {
  immediate: s,
  deep: n,
  flush: o,
  once: r,
  onTrack: i,
  onTrigger: c
} = j) {
  if (t && r) {
    const D = t;
    t = (...le) => {
      D(...le), re();
    };
  }
  const u = q, a = (D) => n === !0 ? D : (
    // for deep: false, only traverse root-level properties
    ze(D, n === !1 ? 1 : void 0)
  );
  let h, g = !1, y = !1;
  if (ee(e) ? (h = () => e.value, g = Dt(e)) : nt(e) ? (h = () => a(e), g = !0) : O(e) ? (y = !0, g = e.some((D) => nt(D) || Dt(D)), h = () => e.map((D) => {
    if (ee(D))
      return D.value;
    if (nt(D))
      return a(D);
    if (A(D))
      return Oe(D, u, 2);
  })) : A(e) ? t ? h = () => Oe(e, u, 2) : h = () => (w && w(), _e(
    e,
    u,
    3,
    [H]
  )) : h = oe, t && n) {
    const D = h;
    h = () => ze(D());
  }
  let w, H = (D) => {
    w = L.onStop = () => {
      Oe(D, u, 4), w = L.onStop = void 0;
    };
  }, M;
  if (Xt)
    if (H = oe, t ? s && _e(t, u, 3, [
      h(),
      y ? [] : void 0,
      H
    ]) : h(), o === "sync") {
      const D = Wr();
      M = D.__watcherHandles || (D.__watcherHandles = []);
    } else
      return oe;
  let Q = y ? new Array(e.length).fill(Rt) : Rt;
  const z = () => {
    if (!(!L.active || !L.dirty))
      if (t) {
        const D = L.run();
        (n || g || (y ? D.some((le, ce) => Pe(le, Q[ce])) : Pe(D, Q))) && (w && w(), _e(t, u, 3, [
          D,
          // pass undefined as the old value when it's changed for the first time
          Q === Rt ? void 0 : y && Q[0] === Rt ? [] : Q,
          H
        ]), Q = D);
      } else
        L.run();
  };
  z.allowRecurse = !!t;
  let X;
  o === "sync" ? X = z : o === "post" ? X = () => te(z, u && u.suspense) : (z.pre = !0, u && (z.id = u.uid), X = () => Ds(z));
  const L = new vs(h, oe, X), G = Yo(), re = () => {
    L.stop(), G && Es(G.effects, L);
  };
  return t ? s ? z() : Q = L.run() : o === "post" ? te(
    L.run.bind(L),
    u && u.suspense
  ) : L.run(), M && M.push(re), re;
}
function zr(e, t, s) {
  const n = this.proxy, o = W(e) ? e.includes(".") ? ao(n, e) : () => n[e] : e.bind(n, n);
  let r;
  A(t) ? r = t : (r = t.handler, s = t);
  const i = mt(this), c = Fs(o, r.bind(n), s);
  return i(), c;
}
function ao(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let o = 0; o < s.length && n; o++)
      n = n[s[o]];
    return n;
  };
}
function ze(e, t = 1 / 0, s) {
  if (t <= 0 || !B(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(e)))
    return e;
  if (s.add(e), t--, ee(e))
    ze(e.value, t, s);
  else if (O(e))
    for (let n = 0; n < e.length; n++)
      ze(e[n], t, s);
  else if (In(e) || qe(e))
    e.forEach((n) => {
      ze(n, t, s);
    });
  else if (Dn(e))
    for (const n in e)
      ze(e[n], t, s);
  return e;
}
function Ve(e, t, s, n) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const c = o[i];
    r && (c.oldValue = r[i].value);
    let u = c.dir[n];
    u && (we(), _e(u, s, 8, [
      e.el,
      c,
      e,
      t
    ]), Re());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ho(e, t) {
  return A(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    K({ name: e.name }, t, { setup: e })
  ) : e;
}
const At = (e) => !!e.type.__asyncLoader, po = (e) => e.type.__isKeepAlive;
function Jr(e, t) {
  _o(e, "a", t);
}
function qr(e, t) {
  _o(e, "da", t);
}
function _o(e, t, s = q) {
  const n = e.__wdc || (e.__wdc = () => {
    let o = s;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Jt(t, n, s), s) {
    let o = s.parent;
    for (; o && o.parent; )
      po(o.parent.vnode) && Xr(n, t, s, o), o = o.parent;
  }
}
function Xr(e, t, s, n) {
  const o = Jt(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  go(() => {
    Es(n[t], o);
  }, s);
}
function Jt(e, t, s = q, n = !1) {
  if (s) {
    const o = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...i) => {
      if (s.isUnmounted)
        return;
      we();
      const c = mt(s), u = _e(t, s, e, i);
      return c(), Re(), u;
    });
    return n ? o.unshift(r) : o.push(r), r;
  }
}
const Ae = (e) => (t, s = q) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Xt || e === "sp") && Jt(e, (...n) => t(...n), s)
), Yr = Ae("bm"), Qr = Ae("m"), kr = Ae("bu"), Zr = Ae("u"), ei = Ae("bum"), go = Ae("um"), ti = Ae("sp"), si = Ae(
  "rtg"
), ni = Ae(
  "rtc"
);
function oi(e, t = q) {
  Jt("ec", e, t);
}
function ri(e, t, s, n) {
  let o;
  const r = s;
  if (O(e) || W(e)) {
    o = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      o[i] = t(e[i], i, void 0, r);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let i = 0; i < e; i++)
      o[i] = t(i + 1, i, void 0, r);
  } else if (B(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (i, c) => t(i, c, void 0, r)
      );
    else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let c = 0, u = i.length; c < u; c++) {
        const a = i[c];
        o[c] = t(e[a], a, c, r);
      }
    }
  else
    o = [];
  return o;
}
const ps = (e) => e ? Io(e) ? Vs(e) || e.proxy : ps(e.parent) : null, it = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ K(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ps(e.parent),
    $root: (e) => ps(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ns(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Ds(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ro.bind(e.proxy)),
    $watch: (e) => zr.bind(e)
  })
), os = (e, t) => e !== j && !e.__isScriptSetup && T(e, t), ii = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: o, props: r, accessCache: i, type: c, appContext: u } = e;
    let a;
    if (t[0] !== "$") {
      const w = i[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[t];
          case 2:
            return o[t];
          case 4:
            return s[t];
          case 3:
            return r[t];
        }
      else {
        if (os(n, t))
          return i[t] = 1, n[t];
        if (o !== j && T(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && T(a, t)
        )
          return i[t] = 3, r[t];
        if (s !== j && T(s, t))
          return i[t] = 4, s[t];
        _s && (i[t] = 0);
      }
    }
    const h = it[t];
    let g, y;
    if (h)
      return t === "$attrs" && se(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (g = c.__cssModules) && (g = g[t])
    )
      return g;
    if (s !== j && T(s, t))
      return i[t] = 4, s[t];
    if (
      // global properties
      y = u.config.globalProperties, T(y, t)
    )
      return y[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: o, ctx: r } = e;
    return os(o, t) ? (o[t] = s, !0) : n !== j && T(n, t) ? (n[t] = s, !0) : T(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: o, propsOptions: r }
  }, i) {
    let c;
    return !!s[i] || e !== j && T(e, i) || os(t, i) || (c = r[0]) && T(c, i) || T(n, i) || T(it, i) || T(o.config.globalProperties, i);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : T(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function Nt(e) {
  return O(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
function cn(e, t) {
  return !e || !t ? e || t : O(e) && O(t) ? e.concat(t) : K({}, Nt(e), Nt(t));
}
let _s = !0;
function li(e) {
  const t = Ns(e), s = e.proxy, n = e.ctx;
  _s = !1, t.beforeCreate && fn(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: c,
    provide: u,
    inject: a,
    // lifecycle
    created: h,
    beforeMount: g,
    mounted: y,
    beforeUpdate: w,
    updated: H,
    activated: M,
    deactivated: Q,
    beforeDestroy: z,
    beforeUnmount: X,
    destroyed: L,
    unmounted: G,
    render: re,
    renderTracked: D,
    renderTriggered: le,
    errorCaptured: ce,
    serverPrefetch: Yt,
    // public API
    expose: Le,
    inheritAttrs: Qe,
    // assets
    components: bt,
    directives: Ct,
    filters: Qt
  } = t;
  if (a && ci(a, n, null), i)
    for (const $ in i) {
      const U = i[$];
      A(U) && (n[$] = U.bind(s));
    }
  if (o) {
    const $ = o.call(s, s);
    B($) && (e.data = As($));
  }
  if (_s = !0, r)
    for (const $ in r) {
      const U = r[$], Ue = A(U) ? U.bind(s, s) : A(U.get) ? U.get.bind(s, s) : oe, xt = !A(U) && A(U.set) ? U.set.bind(s) : oe, je = Ki({
        get: Ue,
        set: xt
      });
      Object.defineProperty(n, $, {
        enumerable: !0,
        configurable: !0,
        get: () => je.value,
        set: (ge) => je.value = ge
      });
    }
  if (c)
    for (const $ in c)
      mo(c[$], n, s, $);
  if (u) {
    const $ = A(u) ? u.call(s) : u;
    Reflect.ownKeys($).forEach((U) => {
      pi(U, $[U]);
    });
  }
  h && fn(h, e, "c");
  function k($, U) {
    O(U) ? U.forEach((Ue) => $(Ue.bind(s))) : U && $(U.bind(s));
  }
  if (k(Yr, g), k(Qr, y), k(kr, w), k(Zr, H), k(Jr, M), k(qr, Q), k(oi, ce), k(ni, D), k(si, le), k(ei, X), k(go, G), k(ti, Yt), O(Le))
    if (Le.length) {
      const $ = e.exposed || (e.exposed = {});
      Le.forEach((U) => {
        Object.defineProperty($, U, {
          get: () => s[U],
          set: (Ue) => s[U] = Ue
        });
      });
    } else
      e.exposed || (e.exposed = {});
  re && e.render === oe && (e.render = re), Qe != null && (e.inheritAttrs = Qe), bt && (e.components = bt), Ct && (e.directives = Ct);
}
function ci(e, t, s = oe) {
  O(e) && (e = gs(e));
  for (const n in e) {
    const o = e[n];
    let r;
    B(o) ? "default" in o ? r = It(
      o.from || n,
      o.default,
      !0
    ) : r = It(o.from || n) : r = It(o), ee(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[n] = r;
  }
}
function fn(e, t, s) {
  _e(
    O(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function mo(e, t, s, n) {
  const o = n.includes(".") ? ao(s, n) : () => s[n];
  if (W(e)) {
    const r = t[e];
    A(r) && ns(o, r);
  } else if (A(e))
    ns(o, e.bind(s));
  else if (B(e))
    if (O(e))
      e.forEach((r) => mo(r, t, s, n));
    else {
      const r = A(e.handler) ? e.handler.bind(s) : t[e.handler];
      A(r) && ns(o, r, e);
    }
}
function Ns(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !o.length && !s && !n ? u = t : (u = {}, o.length && o.forEach(
    (a) => Lt(u, a, i, !0)
  ), Lt(u, t, i)), B(t) && r.set(t, u), u;
}
function Lt(e, t, s, n = !1) {
  const { mixins: o, extends: r } = t;
  r && Lt(e, r, s, !0), o && o.forEach(
    (i) => Lt(e, i, s, !0)
  );
  for (const i in t)
    if (!(n && i === "expose")) {
      const c = fi[i] || s && s[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const fi = {
  data: un,
  props: an,
  emits: an,
  // objects
  methods: tt,
  computed: tt,
  // lifecycle
  beforeCreate: Z,
  created: Z,
  beforeMount: Z,
  mounted: Z,
  beforeUpdate: Z,
  updated: Z,
  beforeDestroy: Z,
  beforeUnmount: Z,
  destroyed: Z,
  unmounted: Z,
  activated: Z,
  deactivated: Z,
  errorCaptured: Z,
  serverPrefetch: Z,
  // assets
  components: tt,
  directives: tt,
  // watch
  watch: ai,
  // provide / inject
  provide: un,
  inject: ui
};
function un(e, t) {
  return t ? e ? function() {
    return K(
      A(e) ? e.call(this, this) : e,
      A(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ui(e, t) {
  return tt(gs(e), gs(t));
}
function gs(e) {
  if (O(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Z(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function tt(e, t) {
  return e ? K(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function an(e, t) {
  return e ? O(e) && O(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : K(
    /* @__PURE__ */ Object.create(null),
    Nt(e),
    Nt(t ?? {})
  ) : t;
}
function ai(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const s = K(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Z(e[n], t[n]);
  return s;
}
function bo() {
  return {
    app: null,
    config: {
      isNativeTag: No,
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
let di = 0;
function hi(e, t) {
  return function(n, o = null) {
    A(n) || (n = K({}, n)), o != null && !B(o) && (o = null);
    const r = bo(), i = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const u = r.app = {
      _uid: di++,
      _component: n,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Gi,
      get config() {
        return r.config;
      },
      set config(a) {
      },
      use(a, ...h) {
        return i.has(a) || (a && A(a.install) ? (i.add(a), a.install(u, ...h)) : A(a) && (i.add(a), a(u, ...h))), u;
      },
      mixin(a) {
        return r.mixins.includes(a) || r.mixins.push(a), u;
      },
      component(a, h) {
        return h ? (r.components[a] = h, u) : r.components[a];
      },
      directive(a, h) {
        return h ? (r.directives[a] = h, u) : r.directives[a];
      },
      mount(a, h, g) {
        if (!c) {
          const y = Ee(n, o);
          return y.appContext = r, g === !0 ? g = "svg" : g === !1 && (g = void 0), h && t ? t(y, a) : e(y, a, g), c = !0, u._container = a, a.__vue_app__ = u, Vs(y.component) || y.component.proxy;
        }
      },
      unmount() {
        c && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, h) {
        return r.provides[a] = h, u;
      },
      runWithContext(a) {
        const h = lt;
        lt = u;
        try {
          return a();
        } finally {
          lt = h;
        }
      }
    };
    return u;
  };
}
let lt = null;
function pi(e, t) {
  if (q) {
    let s = q.provides;
    const n = q.parent && q.parent.provides;
    n === s && (s = q.provides = Object.create(n)), s[e] = t;
  }
}
function It(e, t, s = !1) {
  const n = q || de;
  if (n || lt) {
    const o = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : lt._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return s && A(t) ? t.call(n && n.proxy) : t;
  }
}
const Co = {}, xo = () => Object.create(Co), yo = (e) => Object.getPrototypeOf(e) === Co;
function _i(e, t, s, n = !1) {
  const o = {}, r = xo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Eo(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  s ? e.props = n ? o : gr(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function gi(e, t, s, n) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, c = F(o), [u] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        let y = h[g];
        if (zt(e.emitsOptions, y))
          continue;
        const w = t[y];
        if (u)
          if (T(r, y))
            w !== r[y] && (r[y] = w, a = !0);
          else {
            const H = ye(y);
            o[H] = ms(
              u,
              c,
              H,
              w,
              e,
              !1
            );
          }
        else
          w !== r[y] && (r[y] = w, a = !0);
      }
    }
  } else {
    Eo(e, t, o, r) && (a = !0);
    let h;
    for (const g in c)
      (!t || // for camelCase
      !T(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = ie(g)) === g || !T(t, h))) && (u ? s && // for camelCase
      (s[g] !== void 0 || // for kebab-case
      s[h] !== void 0) && (o[g] = ms(
        u,
        c,
        g,
        void 0,
        e,
        !0
      )) : delete o[g]);
    if (r !== c)
      for (const g in r)
        (!t || !T(t, g)) && (delete r[g], a = !0);
  }
  a && ve(e.attrs, "set", "");
}
function Eo(e, t, s, n) {
  const [o, r] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if (st(u))
        continue;
      const a = t[u];
      let h;
      o && T(o, h = ye(u)) ? !r || !r.includes(h) ? s[h] = a : (c || (c = {}))[h] = a : zt(e.emitsOptions, u) || (!(u in n) || a !== n[u]) && (n[u] = a, i = !0);
    }
  if (r) {
    const u = F(s), a = c || j;
    for (let h = 0; h < r.length; h++) {
      const g = r[h];
      s[g] = ms(
        o,
        u,
        g,
        a[g],
        e,
        !T(a, g)
      );
    }
  }
  return i;
}
function ms(e, t, s, n, o, r) {
  const i = e[s];
  if (i != null) {
    const c = T(i, "default");
    if (c && n === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && A(u)) {
        const { propsDefaults: a } = o;
        if (s in a)
          n = a[s];
        else {
          const h = mt(o);
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
    ] && (r && !c ? n = !1 : i[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === ie(s)) && (n = !0));
  }
  return n;
}
function Po(e, t, s = !1) {
  const n = t.propsCache, o = n.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, c = [];
  let u = !1;
  if (!A(e)) {
    const h = (g) => {
      u = !0;
      const [y, w] = Po(g, t, !0);
      K(i, y), w && c.push(...w);
    };
    !s && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!r && !u)
    return B(e) && n.set(e, Je), Je;
  if (O(r))
    for (let h = 0; h < r.length; h++) {
      const g = ye(r[h]);
      dn(g) && (i[g] = j);
    }
  else if (r)
    for (const h in r) {
      const g = ye(h);
      if (dn(g)) {
        const y = r[h], w = i[g] = O(y) || A(y) ? { type: y } : K({}, y);
        if (w) {
          const H = _n(Boolean, w.type), M = _n(String, w.type);
          w[
            0
            /* shouldCast */
          ] = H > -1, w[
            1
            /* shouldCastTrue */
          ] = M < 0 || H < M, (H > -1 || T(w, "default")) && c.push(g);
        }
      }
    }
  const a = [i, c];
  return B(e) && n.set(e, a), a;
}
function dn(e) {
  return e[0] !== "$" && !st(e);
}
function hn(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function pn(e, t) {
  return hn(e) === hn(t);
}
function _n(e, t) {
  return O(t) ? t.findIndex((s) => pn(s, e)) : A(t) && pn(t, e) ? 0 : -1;
}
const So = (e) => e[0] === "_" || e === "$stable", Ls = (e) => O(e) ? e.map(Ce) : [Ce(e)], mi = (e, t, s) => {
  if (t._n)
    return t;
  const n = Nr((...o) => (Te.NODE_ENV !== "production" && q && (!s || (s.root, q.root)), Ls(t(...o))), s);
  return n._c = !1, n;
}, vo = (e, t, s) => {
  const n = e._ctx;
  for (const o in e) {
    if (So(o))
      continue;
    const r = e[o];
    if (A(r))
      t[o] = mi(o, r, n);
    else if (r != null) {
      const i = Ls(r);
      t[o] = () => i;
    }
  }
}, Oo = (e, t) => {
  const s = Ls(t);
  e.slots.default = () => s;
}, bi = (e, t) => {
  const s = e.slots = xo();
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (K(s, t), Nn(s, "_", n, !0)) : vo(t, s);
  } else
    t && Oo(e, t);
}, Ci = (e, t, s) => {
  const { vnode: n, slots: o } = e;
  let r = !0, i = j;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? s && c === 1 ? r = !1 : (K(o, t), !s && c === 1 && delete o._) : (r = !t.$stable, vo(t, o)), i = t;
  } else
    t && (Oo(e, t), i = { default: 1 });
  if (r)
    for (const c in o)
      !So(c) && i[c] == null && delete o[c];
};
function bs(e, t, s, n, o = !1) {
  if (O(e)) {
    e.forEach(
      (y, w) => bs(
        y,
        t && (O(t) ? t[w] : t),
        s,
        n,
        o
      )
    );
    return;
  }
  if (At(n) && !o)
    return;
  const r = n.shapeFlag & 4 ? Vs(n.component) || n.component.proxy : n.el, i = o ? null : r, { i: c, r: u } = e, a = t && t.r, h = c.refs === j ? c.refs = {} : c.refs, g = c.setupState;
  if (a != null && a !== u && (W(a) ? (h[a] = null, T(g, a) && (g[a] = null)) : ee(a) && (a.value = null)), A(u))
    Oe(u, c, 12, [i, h]);
  else {
    const y = W(u), w = ee(u);
    if (y || w) {
      const H = () => {
        if (e.f) {
          const M = y ? T(g, u) ? g[u] : h[u] : u.value;
          o ? O(M) && Es(M, r) : O(M) ? M.includes(r) || M.push(r) : y ? (h[u] = [r], T(g, u) && (g[u] = h[u])) : (u.value = [r], e.k && (h[e.k] = u.value));
        } else
          y ? (h[u] = i, T(g, u) && (g[u] = i)) : w && (u.value = i, e.k && (h[e.k] = i));
      };
      i ? (H.id = -1, te(H, s)) : H();
    }
  }
}
const te = Br;
function xi(e) {
  return yi(e);
}
function yi(e, t) {
  const s = Ln();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: c,
    createComment: u,
    setText: a,
    setElementText: h,
    parentNode: g,
    nextSibling: y,
    setScopeId: w = oe,
    insertStaticContent: H
  } = e, M = (l, f, d, p = null, _ = null, C = null, E = void 0, b = null, x = !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !et(l, f) && (p = yt(l), ge(l, _, C, !0), l = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: m, ref: P, shapeFlag: v } = f;
    switch (m) {
      case qt:
        Q(l, f, d, p);
        break;
      case _t:
        z(l, f, d, p);
        break;
      case is:
        l == null && X(f, d, p, E);
        break;
      case ae:
        bt(
          l,
          f,
          d,
          p,
          _,
          C,
          E,
          b,
          x
        );
        break;
      default:
        v & 1 ? re(
          l,
          f,
          d,
          p,
          _,
          C,
          E,
          b,
          x
        ) : v & 6 ? Ct(
          l,
          f,
          d,
          p,
          _,
          C,
          E,
          b,
          x
        ) : (v & 64 || v & 128) && m.process(
          l,
          f,
          d,
          p,
          _,
          C,
          E,
          b,
          x,
          ke
        );
    }
    P != null && _ && bs(P, l && l.ref, C, f || l, !f);
  }, Q = (l, f, d, p) => {
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
    [l.el, l.anchor] = H(
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
      _ = y(l), n(l, d, p), l = _;
    n(f, d, p);
  }, G = ({ el: l, anchor: f }) => {
    let d;
    for (; l && l !== f; )
      d = y(l), o(l), l = d;
    o(f);
  }, re = (l, f, d, p, _, C, E, b, x) => {
    f.type === "svg" ? E = "svg" : f.type === "math" && (E = "mathml"), l == null ? D(
      f,
      d,
      p,
      _,
      C,
      E,
      b,
      x
    ) : Yt(
      l,
      f,
      _,
      C,
      E,
      b,
      x
    );
  }, D = (l, f, d, p, _, C, E, b) => {
    let x, m;
    const { props: P, shapeFlag: v, transition: S, dirs: R } = l;
    if (x = l.el = i(
      l.type,
      C,
      P && P.is,
      P
    ), v & 8 ? h(x, l.children) : v & 16 && ce(
      l.children,
      x,
      null,
      p,
      _,
      rs(l, C),
      E,
      b
    ), R && Ve(l, null, p, "created"), le(x, l, l.scopeId, E, p), P) {
      for (const N in P)
        N !== "value" && !st(N) && r(
          x,
          N,
          null,
          P[N],
          C,
          l.children,
          p,
          _,
          Se
        );
      "value" in P && r(x, "value", null, P.value, C), (m = P.onVnodeBeforeMount) && be(m, p, l);
    }
    R && Ve(l, null, p, "beforeMount");
    const I = Ei(_, S);
    I && S.beforeEnter(x), n(x, f, d), ((m = P && P.onVnodeMounted) || I || R) && te(() => {
      m && be(m, p, l), I && S.enter(x), R && Ve(l, null, p, "mounted");
    }, _);
  }, le = (l, f, d, p, _) => {
    if (d && w(l, d), p)
      for (let C = 0; C < p.length; C++)
        w(l, p[C]);
    if (_) {
      let C = _.subTree;
      if (f === C) {
        const E = _.vnode;
        le(
          l,
          E,
          E.scopeId,
          E.slotScopeIds,
          _.parent
        );
      }
    }
  }, ce = (l, f, d, p, _, C, E, b, x = 0) => {
    for (let m = x; m < l.length; m++) {
      const P = l[m] = b ? De(l[m]) : Ce(l[m]);
      M(
        null,
        P,
        f,
        d,
        p,
        _,
        C,
        E,
        b
      );
    }
  }, Yt = (l, f, d, p, _, C, E) => {
    const b = f.el = l.el;
    let { patchFlag: x, dynamicChildren: m, dirs: P } = f;
    x |= l.patchFlag & 16;
    const v = l.props || j, S = f.props || j;
    let R;
    if (d && He(d, !1), (R = S.onVnodeBeforeUpdate) && be(R, d, f, l), P && Ve(f, l, d, "beforeUpdate"), d && He(d, !0), m ? Le(
      l.dynamicChildren,
      m,
      b,
      d,
      p,
      rs(f, _),
      C
    ) : E || U(
      l,
      f,
      b,
      null,
      d,
      p,
      rs(f, _),
      C,
      !1
    ), x > 0) {
      if (x & 16)
        Qe(
          b,
          f,
          v,
          S,
          d,
          p,
          _
        );
      else if (x & 2 && v.class !== S.class && r(b, "class", null, S.class, _), x & 4 && r(b, "style", v.style, S.style, _), x & 8) {
        const I = f.dynamicProps;
        for (let N = 0; N < I.length; N++) {
          const V = I[N], J = v[V], fe = S[V];
          (fe !== J || V === "value") && r(
            b,
            V,
            J,
            fe,
            _,
            l.children,
            d,
            p,
            Se
          );
        }
      }
      x & 1 && l.children !== f.children && h(b, f.children);
    } else
      !E && m == null && Qe(
        b,
        f,
        v,
        S,
        d,
        p,
        _
      );
    ((R = S.onVnodeUpdated) || P) && te(() => {
      R && be(R, d, f, l), P && Ve(f, l, d, "updated");
    }, p);
  }, Le = (l, f, d, p, _, C, E) => {
    for (let b = 0; b < f.length; b++) {
      const x = l[b], m = f[b], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !et(x, m) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 70) ? g(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      M(
        x,
        m,
        P,
        null,
        p,
        _,
        C,
        E,
        !0
      );
    }
  }, Qe = (l, f, d, p, _, C, E) => {
    if (d !== p) {
      if (d !== j)
        for (const b in d)
          !st(b) && !(b in p) && r(
            l,
            b,
            d[b],
            null,
            E,
            f.children,
            _,
            C,
            Se
          );
      for (const b in p) {
        if (st(b))
          continue;
        const x = p[b], m = d[b];
        x !== m && b !== "value" && r(
          l,
          b,
          m,
          x,
          E,
          f.children,
          _,
          C,
          Se
        );
      }
      "value" in p && r(l, "value", d.value, p.value, E);
    }
  }, bt = (l, f, d, p, _, C, E, b, x) => {
    const m = f.el = l ? l.el : c(""), P = f.anchor = l ? l.anchor : c("");
    let { patchFlag: v, dynamicChildren: S, slotScopeIds: R } = f;
    R && (b = b ? b.concat(R) : R), l == null ? (n(m, d, p), n(P, d, p), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      d,
      P,
      _,
      C,
      E,
      b,
      x
    )) : v > 0 && v & 64 && S && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Le(
      l.dynamicChildren,
      S,
      d,
      _,
      C,
      E,
      b
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || _ && f === _.subTree) && wo(
      l,
      f,
      !0
      /* shallow */
    )) : U(
      l,
      f,
      d,
      P,
      _,
      C,
      E,
      b,
      x
    );
  }, Ct = (l, f, d, p, _, C, E, b, x) => {
    f.slotScopeIds = b, l == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      d,
      p,
      E,
      x
    ) : Qt(
      f,
      d,
      p,
      _,
      C,
      E,
      x
    ) : $s(l, f, x);
  }, Qt = (l, f, d, p, _, C, E) => {
    const b = l.component = Di(
      l,
      p,
      _
    );
    if (po(l) && (b.ctx.renderer = ke), Ni(b), b.asyncDep) {
      if (_ && _.registerDep(b, k), !l.el) {
        const x = b.subTree = Ee(_t);
        z(null, x, f, d);
      }
    } else
      k(
        b,
        l,
        f,
        d,
        _,
        C,
        E
      );
  }, $s = (l, f, d) => {
    const p = f.component = l.component;
    if (jr(l, f, d))
      if (p.asyncDep && !p.asyncResolved) {
        $(p, f, d);
        return;
      } else
        p.next = f, Tr(p.update), p.effect.dirty = !0, p.update();
    else
      f.el = l.el, p.vnode = f;
  }, k = (l, f, d, p, _, C, E) => {
    const b = () => {
      if (l.isMounted) {
        let { next: P, bu: v, u: S, parent: R, vnode: I } = l;
        {
          const Ge = Ro(l);
          if (Ge) {
            P && (P.el = I.el, $(l, P, E)), Ge.asyncDep.then(() => {
              l.isUnmounted || b();
            });
            return;
          }
        }
        let N = P, V;
        He(l, !1), P ? (P.el = I.el, $(l, P, E)) : P = I, v && es(v), (V = P.props && P.props.onVnodeBeforeUpdate) && be(V, R, P, I), He(l, !0);
        const J = ss(l), fe = l.subTree;
        l.subTree = J, M(
          fe,
          J,
          // parent may have changed if it's in a teleport
          g(fe.el),
          // anchor may have changed if it's in a fragment
          yt(fe),
          l,
          _,
          C
        ), P.el = J.el, N === null && Vr(l, J.el), S && te(S, _), (V = P.props && P.props.onVnodeUpdated) && te(
          () => be(V, R, P, I),
          _
        );
      } else {
        let P;
        const { el: v, props: S } = f, { bm: R, m: I, parent: N } = l, V = At(f);
        if (He(l, !1), R && es(R), !V && (P = S && S.onVnodeBeforeMount) && be(P, N, f), He(l, !0), v && Gs) {
          const J = () => {
            l.subTree = ss(l), Gs(
              v,
              l.subTree,
              l,
              _,
              null
            );
          };
          V ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && J()
          ) : J();
        } else {
          const J = l.subTree = ss(l);
          M(
            null,
            J,
            d,
            p,
            l,
            _,
            C
          ), f.el = J.el;
        }
        if (I && te(I, _), !V && (P = S && S.onVnodeMounted)) {
          const J = f;
          te(
            () => be(P, N, J),
            _
          );
        }
        (f.shapeFlag & 256 || N && At(N.vnode) && N.vnode.shapeFlag & 256) && l.a && te(l.a, _), l.isMounted = !0, f = d = p = null;
      }
    }, x = l.effect = new vs(
      b,
      oe,
      () => Ds(m),
      l.scope
      // track it in component's effect scope
    ), m = l.update = () => {
      x.dirty && x.run();
    };
    m.id = l.uid, He(l, !0), m();
  }, $ = (l, f, d) => {
    f.component = l;
    const p = l.vnode.props;
    l.vnode = f, l.next = null, gi(l, f.props, p, d), Ci(l, f.children, d), we(), rn(l), Re();
  }, U = (l, f, d, p, _, C, E, b, x = !1) => {
    const m = l && l.children, P = l ? l.shapeFlag : 0, v = f.children, { patchFlag: S, shapeFlag: R } = f;
    if (S > 0) {
      if (S & 128) {
        xt(
          m,
          v,
          d,
          p,
          _,
          C,
          E,
          b,
          x
        );
        return;
      } else if (S & 256) {
        Ue(
          m,
          v,
          d,
          p,
          _,
          C,
          E,
          b,
          x
        );
        return;
      }
    }
    R & 8 ? (P & 16 && Se(m, _, C), v !== m && h(d, v)) : P & 16 ? R & 16 ? xt(
      m,
      v,
      d,
      p,
      _,
      C,
      E,
      b,
      x
    ) : Se(m, _, C, !0) : (P & 8 && h(d, ""), R & 16 && ce(
      v,
      d,
      p,
      _,
      C,
      E,
      b,
      x
    ));
  }, Ue = (l, f, d, p, _, C, E, b, x) => {
    l = l || Je, f = f || Je;
    const m = l.length, P = f.length, v = Math.min(m, P);
    let S;
    for (S = 0; S < v; S++) {
      const R = f[S] = x ? De(f[S]) : Ce(f[S]);
      M(
        l[S],
        R,
        d,
        null,
        _,
        C,
        E,
        b,
        x
      );
    }
    m > P ? Se(
      l,
      _,
      C,
      !0,
      !1,
      v
    ) : ce(
      f,
      d,
      p,
      _,
      C,
      E,
      b,
      x,
      v
    );
  }, xt = (l, f, d, p, _, C, E, b, x) => {
    let m = 0;
    const P = f.length;
    let v = l.length - 1, S = P - 1;
    for (; m <= v && m <= S; ) {
      const R = l[m], I = f[m] = x ? De(f[m]) : Ce(f[m]);
      if (et(R, I))
        M(
          R,
          I,
          d,
          null,
          _,
          C,
          E,
          b,
          x
        );
      else
        break;
      m++;
    }
    for (; m <= v && m <= S; ) {
      const R = l[v], I = f[S] = x ? De(f[S]) : Ce(f[S]);
      if (et(R, I))
        M(
          R,
          I,
          d,
          null,
          _,
          C,
          E,
          b,
          x
        );
      else
        break;
      v--, S--;
    }
    if (m > v) {
      if (m <= S) {
        const R = S + 1, I = R < P ? f[R].el : p;
        for (; m <= S; )
          M(
            null,
            f[m] = x ? De(f[m]) : Ce(f[m]),
            d,
            I,
            _,
            C,
            E,
            b,
            x
          ), m++;
      }
    } else if (m > S)
      for (; m <= v; )
        ge(l[m], _, C, !0), m++;
    else {
      const R = m, I = m, N = /* @__PURE__ */ new Map();
      for (m = I; m <= S; m++) {
        const ne = f[m] = x ? De(f[m]) : Ce(f[m]);
        ne.key != null && N.set(ne.key, m);
      }
      let V, J = 0;
      const fe = S - I + 1;
      let Ge = !1, zs = 0;
      const Ze = new Array(fe);
      for (m = 0; m < fe; m++)
        Ze[m] = 0;
      for (m = R; m <= v; m++) {
        const ne = l[m];
        if (J >= fe) {
          ge(ne, _, C, !0);
          continue;
        }
        let me;
        if (ne.key != null)
          me = N.get(ne.key);
        else
          for (V = I; V <= S; V++)
            if (Ze[V - I] === 0 && et(ne, f[V])) {
              me = V;
              break;
            }
        me === void 0 ? ge(ne, _, C, !0) : (Ze[me - I] = m + 1, me >= zs ? zs = me : Ge = !0, M(
          ne,
          f[me],
          d,
          null,
          _,
          C,
          E,
          b,
          x
        ), J++);
      }
      const Js = Ge ? Pi(Ze) : Je;
      for (V = Js.length - 1, m = fe - 1; m >= 0; m--) {
        const ne = I + m, me = f[ne], qs = ne + 1 < P ? f[ne + 1].el : p;
        Ze[m] === 0 ? M(
          null,
          me,
          d,
          qs,
          _,
          C,
          E,
          b,
          x
        ) : Ge && (V < 0 || m !== Js[V] ? je(me, d, qs, 2) : V--);
      }
    }
  }, je = (l, f, d, p, _ = null) => {
    const { el: C, type: E, transition: b, children: x, shapeFlag: m } = l;
    if (m & 6) {
      je(l.component.subTree, f, d, p);
      return;
    }
    if (m & 128) {
      l.suspense.move(f, d, p);
      return;
    }
    if (m & 64) {
      E.move(l, f, d, ke);
      return;
    }
    if (E === ae) {
      n(C, f, d);
      for (let v = 0; v < x.length; v++)
        je(x[v], f, d, p);
      n(l.anchor, f, d);
      return;
    }
    if (E === is) {
      L(l, f, d);
      return;
    }
    if (p !== 2 && m & 1 && b)
      if (p === 0)
        b.beforeEnter(C), n(C, f, d), te(() => b.enter(C), _);
      else {
        const { leave: v, delayLeave: S, afterLeave: R } = b, I = () => n(C, f, d), N = () => {
          v(C, () => {
            I(), R && R();
          });
        };
        S ? S(C, I, N) : N();
      }
    else
      n(C, f, d);
  }, ge = (l, f, d, p = !1, _ = !1) => {
    const {
      type: C,
      props: E,
      ref: b,
      children: x,
      dynamicChildren: m,
      shapeFlag: P,
      patchFlag: v,
      dirs: S
    } = l;
    if (b != null && bs(b, null, d, l, !0), P & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const R = P & 1 && S, I = !At(l);
    let N;
    if (I && (N = E && E.onVnodeBeforeUnmount) && be(N, f, l), P & 6)
      Fo(l.component, d, p);
    else {
      if (P & 128) {
        l.suspense.unmount(d, p);
        return;
      }
      R && Ve(l, null, f, "beforeUnmount"), P & 64 ? l.type.remove(
        l,
        f,
        d,
        _,
        ke,
        p
      ) : m && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== ae || v > 0 && v & 64) ? Se(
        m,
        f,
        d,
        !1,
        !0
      ) : (C === ae && v & 384 || !_ && P & 16) && Se(x, f, d), p && Bs(l);
    }
    (I && (N = E && E.onVnodeUnmounted) || R) && te(() => {
      N && be(N, f, l), R && Ve(l, null, f, "unmounted");
    }, d);
  }, Bs = (l) => {
    const { type: f, el: d, anchor: p, transition: _ } = l;
    if (f === ae) {
      Do(d, p);
      return;
    }
    if (f === is) {
      G(l);
      return;
    }
    const C = () => {
      o(d), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (l.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: E, delayLeave: b } = _, x = () => E(d, C);
      b ? b(l.el, C, x) : x();
    } else
      C();
  }, Do = (l, f) => {
    let d;
    for (; l !== f; )
      d = y(l), o(l), l = d;
    o(f);
  }, Fo = (l, f, d) => {
    const { bum: p, scope: _, update: C, subTree: E, um: b } = l;
    p && es(p), _.stop(), C && (C.active = !1, ge(E, l, f, d)), b && te(b, f), te(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, Se = (l, f, d, p = !1, _ = !1, C = 0) => {
    for (let E = C; E < l.length; E++)
      ge(l[E], f, d, p, _);
  }, yt = (l) => l.shapeFlag & 6 ? yt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : y(l.anchor || l.el);
  let kt = !1;
  const Ks = (l, f, d) => {
    l == null ? f._vnode && ge(f._vnode, null, null, !0) : M(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      d
    ), kt || (kt = !0, rn(), lo(), kt = !1), f._vnode = l;
  }, ke = {
    p: M,
    um: ge,
    m: je,
    r: Bs,
    mt: Qt,
    mc: ce,
    pc: U,
    pbc: Le,
    n: yt,
    o: e
  };
  let Ws, Gs;
  return {
    render: Ks,
    hydrate: Ws,
    createApp: hi(Ks, Ws)
  };
}
function rs({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function He({ effect: e, update: t }, s) {
  e.allowRecurse = t.allowRecurse = s;
}
function Ei(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function wo(e, t, s = !1) {
  const n = e.children, o = t.children;
  if (O(n) && O(o))
    for (let r = 0; r < n.length; r++) {
      const i = n[r];
      let c = o[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = o[r] = De(o[r]), c.el = i.el), s || wo(i, c)), c.type === qt && (c.el = i.el);
    }
}
function Pi(e) {
  const t = e.slice(), s = [0];
  let n, o, r, i, c;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const a = e[n];
    if (a !== 0) {
      if (o = s[s.length - 1], e[o] < a) {
        t[n] = o, s.push(n);
        continue;
      }
      for (r = 0, i = s.length - 1; r < i; )
        c = r + i >> 1, e[s[c]] < a ? r = c + 1 : i = c;
      a < e[s[r]] && (r > 0 && (t[n] = s[r - 1]), s[r] = n);
    }
  }
  for (r = s.length, i = s[r - 1]; r-- > 0; )
    s[r] = i, i = t[i];
  return s;
}
function Ro(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ro(t);
}
const Si = (e) => e.__isTeleport, ae = Symbol.for("v-fgt"), qt = Symbol.for("v-txt"), _t = Symbol.for("v-cmt"), is = Symbol.for("v-stc"), ct = [];
let he = null;
function ft(e = !1) {
  ct.push(he = e ? null : []);
}
function vi() {
  ct.pop(), he = ct[ct.length - 1] || null;
}
let gt = 1;
function gn(e) {
  gt += e;
}
function Oi(e) {
  return e.dynamicChildren = gt > 0 ? he || Je : null, vi(), gt > 0 && he && he.push(e), e;
}
function ut(e, t, s, n, o, r) {
  return Oi(
    pe(
      e,
      t,
      s,
      n,
      o,
      r,
      !0
    )
  );
}
function wi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function et(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ao = ({ key: e }) => e ?? null, Tt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? W(e) || ee(e) || A(e) ? { i: de, r: e, k: t, f: !!s } : e : null);
function pe(e, t = null, s = null, n = 0, o = null, r = e === ae ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ao(t),
    ref: t && Tt(t),
    scopeId: uo,
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
    shapeFlag: r,
    patchFlag: n,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: de
  };
  return c ? (js(u, s), r & 128 && e.normalize(u)) : s && (u.shapeFlag |= W(s) ? 8 : 16), gt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  he && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && he.push(u), u;
}
const Ee = Ri;
function Ri(e, t = null, s = null, n = 0, o = null, r = !1) {
  if ((!e || e === Hr) && (e = _t), wi(e)) {
    const c = Ye(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && js(c, s), gt > 0 && !r && he && (c.shapeFlag & 6 ? he[he.indexOf(e)] = c : he.push(c)), c.patchFlag |= -2, c;
  }
  if (Bi(e) && (e = e.__vccOpts), t) {
    t = Ai(t);
    let { class: c, style: u } = t;
    c && !W(c) && (t.class = $t(c)), B(u) && (Zn(u) && !O(u) && (u = K({}, u)), t.style = Ss(u));
  }
  const i = W(e) ? 1 : $r(e) ? 128 : Si(e) ? 64 : B(e) ? 4 : A(e) ? 2 : 0;
  return pe(
    e,
    t,
    s,
    n,
    o,
    i,
    r,
    !0
  );
}
function Ai(e) {
  return e ? Zn(e) || yo(e) ? K({}, e) : e : null;
}
function Ye(e, t, s = !1, n = !1) {
  const { props: o, ref: r, patchFlag: i, children: c, transition: u } = e, a = t ? Ii(o || {}, t) : o, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Ao(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && r ? O(r) ? r.concat(Tt(t)) : [r, Tt(t)] : Tt(t)
    ) : r,
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
    patchFlag: t && e.type !== ae ? i === -1 ? 16 : i | 16 : i,
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
function Us(e = " ", t = 0) {
  return Ee(qt, null, e, t);
}
function Ce(e) {
  return e == null || typeof e == "boolean" ? Ee(_t) : O(e) ? Ee(
    ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? De(e) : Ee(qt, null, String(e));
}
function De(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ye(e);
}
function js(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (O(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), js(e, o()), o._c && (o._d = !0));
      return;
    } else {
      s = 32;
      const o = t._;
      !o && !yo(t) ? t._ctx = de : o === 3 && de && (de.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    A(t) ? (t = { default: t, _ctx: de }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Us(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Ii(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const o in n)
      if (o === "class")
        t.class !== n.class && (t.class = $t([t.class, n.class]));
      else if (o === "style")
        t.style = Ss([t.style, n.style]);
      else if (jt(o)) {
        const r = t[o], i = n[o];
        i && r !== i && !(O(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else
        o !== "" && (t[o] = n[o]);
  }
  return t;
}
function be(e, t, s, n = null) {
  _e(e, t, 7, [
    s,
    n
  ]);
}
const Ti = bo();
let Mi = 0;
function Di(e, t, s) {
  const n = e.type, o = (t ? t.appContext : e.appContext) || Ti, r = {
    uid: Mi++,
    vnode: e,
    type: n,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new qo(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Po(n, o),
    emitsOptions: fo(n, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: j,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: j,
    data: j,
    props: j,
    attrs: j,
    slots: j,
    refs: j,
    setupState: j,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Fr.bind(null, r), e.ce && e.ce(r), r;
}
let q = null;
const Fi = () => q || de;
let Ut, Cs;
{
  const e = Ln(), t = (s, n) => {
    let o;
    return (o = e[s]) || (o = e[s] = []), o.push(n), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  Ut = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => q = s
  ), Cs = t(
    "__VUE_SSR_SETTERS__",
    (s) => Xt = s
  );
}
const mt = (e) => {
  const t = q;
  return Ut(e), e.scope.on(), () => {
    e.scope.off(), Ut(t);
  };
}, mn = () => {
  q && q.scope.off(), Ut(null);
};
function Io(e) {
  return e.vnode.shapeFlag & 4;
}
let Xt = !1;
function Ni(e, t = !1) {
  t && Cs(t);
  const { props: s, children: n } = e.vnode, o = Io(e);
  _i(e, s, o, t), bi(e, n);
  const r = o ? Li(e, t) : void 0;
  return t && Cs(!1), r;
}
function Li(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ii);
  const { setup: n } = s;
  if (n) {
    const o = e.setupContext = n.length > 1 ? ji(e) : null, r = mt(e);
    we();
    const i = Oe(
      n,
      e,
      0,
      [
        e.props,
        o
      ]
    );
    if (Re(), r(), Tn(i)) {
      if (i.then(mn, mn), t)
        return i.then((c) => {
          bn(e, c, t);
        }).catch((c) => {
          Gt(c, e, 0);
        });
      e.asyncDep = i;
    } else
      bn(e, i, t);
  } else
    To(e, t);
}
function bn(e, t, s) {
  A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) && (e.setupState = so(t)), To(e, s);
}
let Cn;
function To(e, t, s) {
  const n = e.type;
  if (!e.render) {
    if (!t && Cn && !n.render) {
      const o = n.template || Ns(e).template;
      if (o) {
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: u } = n, a = K(
          K(
            {
              isCustomElement: r,
              delimiters: c
            },
            i
          ),
          u
        );
        n.render = Cn(o, a);
      }
    }
    e.render = n.render || oe;
  }
  {
    const o = mt(e);
    we();
    try {
      li(e);
    } finally {
      Re(), o();
    }
  }
}
const Ui = {
  get(e, t) {
    return se(e, "get", ""), e[t];
  }
};
function ji(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ui),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Vs(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(so(mr(e.exposed)), {
      get(t, s) {
        if (s in t)
          return t[s];
        if (s in it)
          return it[s](e);
      },
      has(t, s) {
        return s in t || s in it;
      }
    }));
}
const Vi = /(?:^|[-_])(\w)/g, Hi = (e) => e.replace(Vi, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function $i(e, t = !0) {
  return A(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Mo(e, t, s = !1) {
  let n = $i(t);
  if (!n && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (n = o[1]);
  }
  if (!n && e && e.parent) {
    const o = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    n = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return n ? Hi(n) : s ? "App" : "Anonymous";
}
function Bi(e) {
  return A(e) && "__vccOpts" in e;
}
const Ki = (e, t) => br(e, t, Xt);
function Wi(e, t, s = j) {
  const n = Fi(), o = ye(t), r = ie(t), i = Pr((u, a) => {
    let h;
    return Gr(() => {
      const g = e[t];
      Pe(h, g) && (h = g, a());
    }), {
      get() {
        return u(), s.get ? s.get(h) : h;
      },
      set(g) {
        const y = n.vnode.props;
        !(y && // check if parent has passed v-model
        (t in y || o in y || r in y) && (`onUpdate:${t}` in y || `onUpdate:${o}` in y || `onUpdate:${r}` in y)) && Pe(g, h) && (h = g, a()), n.emit(`update:${t}`, s.set ? s.set(g) : g);
      }
    };
  }), c = `${t}Modifiers`;
  return i[Symbol.iterator] = () => {
    let u = 0;
    return {
      next() {
        return u < 2 ? { value: u++ ? e[c] || {} : i, done: !1 } : { done: !0 };
      }
    };
  }, i;
}
const Gi = "3.4.27", zi = "http://www.w3.org/2000/svg", Ji = "http://www.w3.org/1998/Math/MathML", Fe = typeof document < "u" ? document : null, xn = Fe && /* @__PURE__ */ Fe.createElement("template"), qi = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const o = t === "svg" ? Fe.createElementNS(zi, e) : t === "mathml" ? Fe.createElementNS(Ji, e) : Fe.createElement(e, s ? { is: s } : void 0);
    return e === "select" && n && n.multiple != null && o.setAttribute("multiple", n.multiple), o;
  },
  createText: (e) => Fe.createTextNode(e),
  createComment: (e) => Fe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Fe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, o, r) {
    const i = s ? s.previousSibling : t.lastChild;
    if (o && (o === r || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), s), !(o === r || !(o = o.nextSibling)); )
        ;
    else {
      xn.innerHTML = n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e;
      const c = xn.content;
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
}, Xi = Symbol("_vtc");
function Yi(e, t, s) {
  const n = e[Xi];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const yn = Symbol("_vod"), Qi = Symbol("_vsh"), ki = Symbol(""), Zi = /(^|;)\s*display\s*:/;
function el(e, t, s) {
  const n = e.style, o = W(s);
  let r = !1;
  if (s && !o) {
    if (t)
      if (W(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          s[c] == null && Mt(n, c, "");
        }
      else
        for (const i in t)
          s[i] == null && Mt(n, i, "");
    for (const i in s)
      i === "display" && (r = !0), Mt(n, i, s[i]);
  } else if (o) {
    if (t !== s) {
      const i = n[ki];
      i && (s += ";" + i), n.cssText = s, r = Zi.test(s);
    }
  } else
    t && e.removeAttribute("style");
  yn in e && (e[yn] = r ? n.display : "", e[Qi] && (n.display = "none"));
}
const En = /\s*!important$/;
function Mt(e, t, s) {
  if (O(s))
    s.forEach((n) => Mt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = tl(e, t);
    En.test(s) ? e.setProperty(
      ie(n),
      s.replace(En, ""),
      "important"
    ) : e[n] = s;
  }
}
const Pn = ["Webkit", "Moz", "ms"], ls = {};
function tl(e, t) {
  const s = ls[t];
  if (s)
    return s;
  let n = ye(t);
  if (n !== "filter" && n in e)
    return ls[t] = n;
  n = Fn(n);
  for (let o = 0; o < Pn.length; o++) {
    const r = Pn[o] + n;
    if (r in e)
      return ls[t] = r;
  }
  return t;
}
const Sn = "http://www.w3.org/1999/xlink";
function sl(e, t, s, n, o) {
  if (n && t.startsWith("xlink:"))
    s == null ? e.removeAttributeNS(Sn, t.slice(6, t.length)) : e.setAttributeNS(Sn, t, s);
  else {
    const r = zo(t);
    s == null || r && !Un(s) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : s);
  }
}
function nl(e, t, s, n, o, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n && i(n, o, r), e[t] = s ?? "";
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
    a === "boolean" ? s = Un(s) : s == null && a === "string" ? (s = "", u = !0) : a === "number" && (s = 0, u = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  u && e.removeAttribute(t);
}
function ol(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function rl(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const vn = Symbol("_vei");
function il(e, t, s, n, o = null) {
  const r = e[vn] || (e[vn] = {}), i = r[t];
  if (n && i)
    i.value = n;
  else {
    const [c, u] = ll(t);
    if (n) {
      const a = r[t] = ul(
        n,
        o
      );
      ol(e, c, a, u);
    } else
      i && (rl(e, c, i, u), r[t] = void 0);
  }
}
const On = /(?:Once|Passive|Capture)$/;
function ll(e) {
  let t;
  if (On.test(e)) {
    t = {};
    let n;
    for (; n = e.match(On); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ie(e.slice(2)), t];
}
let cs = 0;
const cl = /* @__PURE__ */ Promise.resolve(), fl = () => cs || (cl.then(() => cs = 0), cs = Date.now());
function ul(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    _e(
      al(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = fl(), s;
}
function al(e, t) {
  if (O(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (o) => !o._stopped && n && n(o)
    );
  } else
    return t;
}
const wn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, dl = (e, t, s, n, o, r, i, c, u) => {
  const a = o === "svg";
  t === "class" ? Yi(e, n, a) : t === "style" ? el(e, s, n) : jt(t) ? ys(t) || il(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : hl(e, t, n, a)) ? nl(
    e,
    t,
    n,
    r,
    i,
    c,
    u
  ) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), sl(e, t, n, a));
};
function hl(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && wn(t) && A(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return wn(t) && W(s) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function pl(e, t) {
  const s = /* @__PURE__ */ ho(e);
  class n extends Hs {
    constructor(r) {
      super(s, r, t);
    }
  }
  return n.def = s, n;
}
const _l = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Hs extends _l {
  constructor(t, s = {}, n) {
    super(), this._def = t, this._props = s, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && n ? n(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), ro(() => {
      this._connected || (An(null, this.shadowRoot), this._instance = null);
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
      for (const o of n)
        this._setAttr(o.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (n, o = !1) => {
      const { props: r, styles: i } = n;
      let c;
      if (r && !O(r))
        for (const u in r) {
          const a = r[u];
          (a === Number || a && a.type === Number) && (u in this._props && (this._props[u] = Xs(this._props[u])), (c || (c = /* @__PURE__ */ Object.create(null)))[ye(u)] = !0);
        }
      this._numberProps = c, o && this._resolveProps(n), this._applyStyles(i), this._update();
    }, s = this._def.__asyncLoader;
    s ? s().then((n) => t(n, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: s } = t, n = O(s) ? s : Object.keys(s || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && n.includes(o) && this._setProp(o, this[o], !0, !1);
    for (const o of n.map(ye))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(r) {
          this._setProp(o, r);
        }
      });
  }
  _setAttr(t) {
    let s = this.hasAttribute(t) ? this.getAttribute(t) : void 0;
    const n = ye(t);
    this._numberProps && this._numberProps[n] && (s = Xs(s)), this._setProp(n, s, !1);
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
  _setProp(t, s, n = !0, o = !0) {
    s !== this._props[t] && (this._props[t] = s, o && this._instance && this._update(), n && (s === !0 ? this.setAttribute(ie(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(ie(t), s + "") : s || this.removeAttribute(ie(t))));
  }
  _update() {
    An(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Ee(this._def, K({}, this._props));
    return this._instance || (t.ce = (s) => {
      this._instance = s, s.isCE = !0;
      const n = (r, i) => {
        this.dispatchEvent(
          new CustomEvent(r, {
            detail: i
          })
        );
      };
      s.emit = (r, ...i) => {
        n(r, i), ie(r) !== r && n(ie(r), i);
      };
      let o = this;
      for (; o = o && (o.parentNode || o.host); )
        if (o instanceof Hs) {
          s.parent = o._instance, s.provides = o._instance.provides;
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
const gl = /* @__PURE__ */ K({ patchProp: dl }, qi);
let Rn;
function ml() {
  return Rn || (Rn = xi(gl));
}
const An = (...e) => {
  ml().render(...e);
}, bl = {
  width: "14",
  height: "14",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  fill: "currentColor"
}, Cl = /* @__PURE__ */ pe("path", { d: "M832 384H576V128H192v768h640zm-26.496-64L640 154.496V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z" }, null, -1), xl = [
  Cl
];
function yl(e, t) {
  return ft(), ut("svg", bl, [...xl]);
}
const El = { name: "icon-file", render: yl }, Pl = {
  width: "70",
  height: "70",
  viewBox: "0 0 1024 1024",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, Sl = /* @__PURE__ */ pe("path", {
  fill: "currentColor",
  d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6z"
}, null, -1), vl = [
  Sl
];
function Ol(e, t) {
  return ft(), ut("svg", Pl, [...vl]);
}
const wl = { name: "icon-upload", render: Ol }, Rl = /* @__PURE__ */ pe("div", { class: "upload__text" }, [
  /* @__PURE__ */ Us("Drop file here or "),
  /* @__PURE__ */ pe("span", null, "click to upload")
], -1), Al = ["accept", "multiple"], Il = /* @__PURE__ */ pe("div", { class: "upload__tip" }, "jpg/png files with a size less than 500kb", -1), Tl = { class: "upload-list" }, Ml = /* @__PURE__ */ ho({
  __name: "Uploader.ce",
  props: /* @__PURE__ */ cn({
    accept: { type: String },
    multiple: { type: Boolean },
    value: { type: Array }
  }, {
    fileList: {},
    fileListModifiers: {}
  }),
  emits: /* @__PURE__ */ cn(["change", "cancel"], ["update:fileList"]),
  setup(e, { emit: t }) {
    const s = Wi(e, "fileList"), n = e, o = t, r = on(null), i = on(!1);
    function c() {
      r.value && r.value.click();
    }
    function u(g) {
      const y = g.target;
      if (y.files) {
        const w = Array.from(y.files);
        o("change", w), console.log("fileList: ", s), console.log("value: ", n.value);
      } else
        o("cancel");
    }
    function a(g) {
      if (g.preventDefault(), g.dataTransfer && g.dataTransfer.files) {
        const y = Array.from(g.dataTransfer.files);
        o("change", y);
      }
      i.value = !1;
    }
    function h(g) {
      g.preventDefault(), i.value = !0;
    }
    return (g, y) => {
      const w = wl, H = El;
      return ft(), ut(ae, null, [
        pe("div", {
          class: "upload",
          tabindex: "0",
          onClick: c,
          onDragover: h,
          onDragleave: y[0] || (y[0] = (M) => i.value = !1),
          onDrop: a
        }, [
          pe("div", {
            class: $t(["upload-dragger", { "is-dragging": to(i) }])
          }, [
            Ee(w, { class: "icon" }),
            Rl
          ], 2),
          pe("input", {
            ref_key: "fileInputRef",
            ref: r,
            type: "file",
            accept: g.accept,
            multiple: g.multiple,
            onChange: u
          }, null, 40, Al)
        ], 32),
        Il,
        pe("ul", Tl, [
          (ft(!0), ut(ae, null, ri(s.value, (M, Q) => (ft(), ut("li", { key: Q }, [
            Ee(H),
            Us(" " + Jo(M.name), 1)
          ]))), 128))
        ])
      ], 64);
    };
  }
}), Dl = "*{font-family:Open Sans,sans-serif}.upload{display:block;justify-content:center;align-items:center;cursor:pointer;outline:none;color:#606266;font-size:14px}.upload .upload-dragger{padding:40px 10px;background-color:#fff;border:1px dashed #dcdfe6;border-radius:6px;box-sizing:border-box;text-align:center;cursor:pointer;position:relative;overflow:hidden}.upload .upload-dragger .icon{color:#a8abb2;margin-bottom:16px;line-height:50px}.upload .upload-dragger .upload__text span{color:#409eff}.upload .upload-dragger:hover{border-color:#409eff}.upload .upload-dragger.is-dragging{border:2px dashed #409eff;background-color:#f0f9ff}.upload input{display:none}.upload__tip{font-size:12px;color:#606266;margin-top:7px}.upload-list{padding:0 10px}.upload-list li{transition:all .5s cubic-bezier(.55,0,.1,1);color:#606266;margin-bottom:5px;border-radius:4px;display:flex;align-items:center;cursor:pointer;padding:4px;gap:4px}.upload-list li:hover{color:#409eff;background-color:#f5f7fa}", Fl = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, o] of t)
    s[n] = o;
  return s;
}, Nl = /* @__PURE__ */ Fl(Ml, [["styles", [Dl]]]), Ll = /* @__PURE__ */ pl(Nl);
customElements.define("custom-uploader", Ll);
