import Oe, { useRef as H } from "react";
import { useBasisTheory as cr, BasisTheoryProvider as fr, CardNumberElement as dr, CardExpirationDateElement as vr, CardVerificationCodeElement as pr } from "@basis-theory/basis-theory-react";
import { atom as hr, useAtom as je } from "jotai";
var Z = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function mr() {
  if (Ce)
    return I;
  Ce = 1;
  var R = Oe, b = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, g = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(d, c, T) {
    var f, y = {}, w = null, W = null;
    T !== void 0 && (w = "" + T), c.key !== void 0 && (w = "" + c.key), c.ref !== void 0 && (W = c.ref);
    for (f in c)
      m.call(c, f) && !j.hasOwnProperty(f) && (y[f] = c[f]);
    if (d && d.defaultProps)
      for (f in c = d.defaultProps, c)
        y[f] === void 0 && (y[f] = c[f]);
    return { $$typeof: b, type: d, key: w, ref: W, props: y, _owner: g.current };
  }
  return I.Fragment = _, I.jsx = h, I.jsxs = h, I;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function br() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    var R = Oe, b = Symbol.for("react.element"), _ = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), d = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), Q = Symbol.iterator, Pe = "@@iterator";
    function Se(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var S = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var De = !1, Fe = !1, Ae = !1, Ie = !1, Ye = !1, ee;
    ee = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === j || Ye || e === g || e === T || e === f || Ie || e === W || De || Fe || Ae || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === y || e.$$typeof === h || e.$$typeof === d || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case _:
          return "Portal";
        case j:
          return "Profiler";
        case g:
          return "StrictMode";
        case T:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return re(r) + ".Consumer";
          case h:
            var t = e;
            return re(t._context) + ".Provider";
          case c:
            return Ve(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case w: {
            var o = e, u = o._payload, i = o._init;
            try {
              return C(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, F = 0, te, ne, ae, ie, oe, ue, se;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function $e() {
      {
        if (F === 0) {
          te = console.log, ne = console.info, ae = console.warn, ie = console.error, oe = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ne() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: te
            }),
            info: P({}, e, {
              value: ne
            }),
            warn: P({}, e, {
              value: ae
            }),
            error: P({}, e, {
              value: ie
            }),
            group: P({}, e, {
              value: oe
            }),
            groupCollapsed: P({}, e, {
              value: ue
            }),
            groupEnd: P({}, e, {
              value: se
            })
          });
        }
        F < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var L = S.ReactCurrentDispatcher, B;
    function V(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var q = !1, $;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new Ue();
    }
    function ce(e, r) {
      if (!e || q)
        return "";
      {
        var t = $.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = L.current, L.current = null, $e();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (x) {
              n = x;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (x) {
              n = x;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            n = x;
          }
          e();
        }
      } catch (x) {
        if (x && n && typeof x.stack == "string") {
          for (var a = x.stack.split(`
`), p = n.stack.split(`
`), s = a.length - 1, l = p.length - 1; s >= 1 && l >= 0 && a[s] !== p[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== p[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== p[l]) {
                    var E = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && $.set(e, E), E;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        q = !1, L.current = u, Ne(), Error.prepareStackTrace = o;
      }
      var D = e ? e.displayName || e.name : "", Te = D ? V(D) : "";
      return typeof e == "function" && $.set(e, Te), Te;
    }
    function Me(e, r, t) {
      return ce(e, !1);
    }
    function Le(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Le(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case T:
          return V("Suspense");
        case f:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Me(e.render);
          case y:
            return N(e.type, r, t);
          case w: {
            var n = e, o = n._payload, u = n._init;
            try {
              return N(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, fe = {}, de = S.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, o) {
      {
        var u = Function.call.bind(U);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (M(o), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), M(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, M(o), v("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var qe = Array.isArray;
    function K(e) {
      return qe(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (Ge(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), ve(e);
    }
    var A = S.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, me, G;
    G = {};
    function Xe(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = C(A.current.type);
        G[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(A.current.type), e.ref), G[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          he || (he = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          me || (me = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: b,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, o) {
      {
        var u, i = {}, a = null, p = null;
        t !== void 0 && (pe(t), a = "" + t), ze(r) && (pe(r.key), a = "" + r.key), Xe(r) && (p = r.ref, He(r, o));
        for (u in r)
          U.call(r, u) && !Je.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(i, l), p && Qe(i, l);
        }
        return er(e, a, p, o, n, A.current, i);
      }
    }
    var J = S.ReactCurrentOwner, be = S.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    function ye() {
      {
        if (J.current) {
          var e = C(J.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function nr(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ge(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== J.current && (n = " It was passed a child from " + C(e._owner.type) + "."), k(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            z(n) && ge(n, r);
          }
        else if (z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Se(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              z(i.value) && ge(i.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var o = C(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function _e(e, r, t, n, o, u) {
      {
        var i = We(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = tr(o);
          p ? a += p : a += ye();
          var s;
          e === null ? s = "null" : K(e) ? s = "array" : e !== void 0 && e.$$typeof === b ? (s = "<" + (C(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = rr(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (K(E)) {
                for (var D = 0; D < E.length; D++)
                  Re(E[D], e);
                Object.freeze && Object.freeze(E);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(E, e);
        }
        return e === m ? ir(l) : ar(l), l;
      }
    }
    function or(e, r, t) {
      return _e(e, r, t, !0);
    }
    function ur(e, r, t) {
      return _e(e, r, t, !1);
    }
    var sr = ur, lr = or;
    Y.Fragment = m, Y.jsx = sr, Y.jsxs = lr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? Z.exports = mr() : Z.exports = br();
var O = Z.exports;
const we = hr(void 0), Rr = ({
  children: R,
  onSubmit: b,
  className: _,
  style: m,
  sourceId: g,
  merchantKey: j
}) => {
  const { bt: h } = cr("key_us_pub_Uj5ZTXb8q5soT2W7KRVjRB", {
    elements: !0
  }), [d] = je(we), c = async (T) => {
    if (T.preventDefault(), h && h.client && d) {
      let f;
      try {
        f = await h.client.post(
          "https://api.basistheory.com/proxy",
          {
            type: "card",
            card: {
              number: d.cardNumber,
              exp_month: d.expirationMonth,
              exp_year: d.expirationYear,
              cvc: d.cvc
            }
          },
          {
            headers: {
              "BT-PROXY-KEY": j,
              "X-BUTTER-SOURCE-ID": g,
              "BT-API-KEY": "key_us_pub_Uj5ZTXb8q5soT2W7KRVjRB"
            }
          }
        );
      } catch (y) {
        b(y, f);
      }
      b(T, f);
    }
  };
  return h ? /* @__PURE__ */ O.jsx(
    "form",
    {
      id: "butter-payment-form",
      onSubmit: c,
      className: _,
      style: m,
      children: h && /* @__PURE__ */ O.jsx(fr, { bt: h, children: R })
    }
  ) : null;
};
function _r() {
  const [R, b] = je(we), _ = H(null), m = H(null), g = H(null), j = () => {
    _.current && b({ ...R, cardNumber: _?.current || "" });
  }, h = () => {
    m.current && b({
      ...R,
      expirationMonth: m?.current.month() || "",
      expirationYear: m?.current.year() || ""
    });
  }, d = () => {
    g.current && b({
      ...R,
      cvc: g?.current || ""
    });
  };
  return /* @__PURE__ */ O.jsxs("div", { style: { display: "flex" }, children: [
    /* @__PURE__ */ O.jsx("div", { style: { flexGrow: 1, minWidth: "200px" }, children: /* @__PURE__ */ O.jsx(
      dr,
      {
        id: "cardNumber",
        ref: _,
        onChange: j
      }
    ) }),
    /* @__PURE__ */ O.jsx("div", { style: { width: "80px" }, children: /* @__PURE__ */ O.jsx(
      vr,
      {
        id: "cardExpirationDate",
        ref: m,
        onChange: h
      }
    ) }),
    /* @__PURE__ */ O.jsx("div", { style: { width: "55px" }, children: /* @__PURE__ */ O.jsx(
      pr,
      {
        id: "cardVerificationCode",
        ref: g,
        onChange: d
      }
    ) })
  ] });
}
export {
  Rr as ButterForm,
  _r as CardElement
};
//# sourceMappingURL=index.es.js.map
