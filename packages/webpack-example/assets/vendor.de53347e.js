var e = { exports: {} },
  t = {},
  n = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable;
function a(e) {
  if (null == e) throw new TypeError('Object.assign cannot be called with null or undefined');
  return Object(e);
}
var i = (function () {
    try {
      if (!Object.assign) return !1;
      var e = new String('abc');
      if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
      for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
      if (
        '0123456789' !==
        Object.getOwnPropertyNames(t)
          .map(function (e) {
            return t[e];
          })
          .join('')
      )
        return !1;
      var r = {};
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function (e) {
          r[e] = e;
        }),
        'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
      );
    } catch (o) {
      return !1;
    }
  })()
    ? Object.assign
    : function (e, t) {
        for (var i, l, u = a(e), s = 1; s < arguments.length; s++) {
          for (var c in (i = Object(arguments[s]))) r.call(i, c) && (u[c] = i[c]);
          if (n) {
            l = n(i);
            for (var f = 0; f < l.length; f++) o.call(i, l[f]) && (u[l[f]] = i[l[f]]);
          }
        }
        return u;
      },
  l = i,
  u = 60103,
  s = 60106;
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
var c = 60109,
  f = 60110,
  d = 60112;
t.Suspense = 60113;
var p = 60115,
  m = 60116;
if ('function' == typeof Symbol && Symbol.for) {
  var h = Symbol.for;
  (u = h('react.element')),
    (s = h('react.portal')),
    (t.Fragment = h('react.fragment')),
    (t.StrictMode = h('react.strict_mode')),
    (t.Profiler = h('react.profiler')),
    (c = h('react.provider')),
    (f = h('react.context')),
    (d = h('react.forward_ref')),
    (t.Suspense = h('react.suspense')),
    (p = h('react.memo')),
    (m = h('react.lazy'));
}
var v = 'function' == typeof Symbol && Symbol.iterator;
function g(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var y = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  b = {};
function x(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = b), (this.updater = n || y);
}
function w() {}
function E(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = b), (this.updater = n || y);
}
(x.prototype.isReactComponent = {}),
  (x.prototype.setState = function (e, t) {
    if ('object' != typeof e && 'function' != typeof e && null != e) throw Error(g(85));
    this.updater.enqueueSetState(this, e, t, 'setState');
  }),
  (x.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
  }),
  (w.prototype = x.prototype);
var k = (E.prototype = new w());
(k.constructor = E), l(k, x.prototype), (k.isPureReactComponent = !0);
var C = { current: null },
  S = Object.prototype.hasOwnProperty,
  P = { key: !0, ref: !0, __self: !0, __source: !0 };
function N(e, t, n) {
  var r,
    o = {},
    a = null,
    i = null;
  if (null != t)
    for (r in (void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (a = '' + t.key), t))
      S.call(t, r) && !P.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (1 === l) o.children = n;
  else if (1 < l) {
    for (var s = Array(l), c = 0; c < l; c++) s[c] = arguments[c + 2];
    o.children = s;
  }
  if (e && e.defaultProps) for (r in (l = e.defaultProps)) void 0 === o[r] && (o[r] = l[r]);
  return { $$typeof: u, type: e, key: a, ref: i, props: o, _owner: C.current };
}
function O(e) {
  return 'object' == typeof e && null !== e && e.$$typeof === u;
}
var T = /\/+/g;
function M(e, t) {
  return 'object' == typeof e && null !== e && null != e.key
    ? (function (e) {
        var t = { '=': '=0', ':': '=2' };
        return (
          '$' +
          e.replace(/[=:]/g, function (e) {
            return t[e];
          })
        );
      })('' + e.key)
    : t.toString(36);
}
function _(e, t, n, r, o) {
  var a = typeof e;
  ('undefined' !== a && 'boolean' !== a) || (e = null);
  var i = !1;
  if (null === e) i = !0;
  else
    switch (a) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case u:
          case s:
            i = !0;
        }
    }
  if (i)
    return (
      (o = o((i = e))),
      (e = '' === r ? '.' + M(i, 0) : r),
      Array.isArray(o)
        ? ((n = ''),
          null != e && (n = e.replace(T, '$&/') + '/'),
          _(o, t, n, '', function (e) {
            return e;
          }))
        : null != o &&
          (O(o) &&
            (o = (function (e, t) {
              return {
                $$typeof: u,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner,
              };
            })(
              o,
              n +
                (!o.key || (i && i.key === o.key) ? '' : ('' + o.key).replace(T, '$&/') + '/') +
                e,
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = '' === r ? '.' : r + ':'), Array.isArray(e)))
    for (var l = 0; l < e.length; l++) {
      var c = r + M((a = e[l]), l);
      i += _(a, t, n, c, o);
    }
  else if (
    'function' ==
    typeof (c = (function (e) {
      return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (v && e[v]) || e['@@iterator'])
        ? e
        : null;
    })(e))
  )
    for (e = c.call(e), l = 0; !(a = e.next()).done; )
      i += _((a = a.value), t, n, (c = r + M(a, l++)), o);
  else if ('object' === a)
    throw (
      ((t = '' + e),
      Error(
        g(31, '[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t),
      ))
    );
  return i;
}
function R(e, t, n) {
  if (null == e) return e;
  var r = [],
    o = 0;
  return (
    _(e, r, '', '', function (e) {
      return t.call(n, e, o++);
    }),
    r
  );
}
function F(e) {
  if (-1 === e._status) {
    var t = e._result;
    (t = t()),
      (e._status = 0),
      (e._result = t),
      t.then(
        function (t) {
          0 === e._status && ((t = t.default), (e._status = 1), (e._result = t));
        },
        function (t) {
          0 === e._status && ((e._status = 2), (e._result = t));
        },
      );
  }
  if (1 === e._status) return e._result;
  throw e._result;
}
var L = { current: null };
function A() {
  var e = L.current;
  if (null === e) throw Error(g(321));
  return e;
}
var I = {
  ReactCurrentDispatcher: L,
  ReactCurrentBatchConfig: { transition: 0 },
  ReactCurrentOwner: C,
  IsSomeRendererActing: { current: !1 },
  assign: l,
};
(t.Children = {
  map: R,
  forEach: function (e, t, n) {
    R(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      R(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      R(e, function (e) {
        return e;
      }) || []
    );
  },
  only: function (e) {
    if (!O(e)) throw Error(g(143));
    return e;
  },
}),
  (t.Component = x),
  (t.PureComponent = E),
  (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
  (t.cloneElement = function (e, t, n) {
    if (null == e) throw Error(g(267, e));
    var r = l({}, e.props),
      o = e.key,
      a = e.ref,
      i = e._owner;
    if (null != t) {
      if (
        (void 0 !== t.ref && ((a = t.ref), (i = C.current)),
        void 0 !== t.key && (o = '' + t.key),
        e.type && e.type.defaultProps)
      )
        var s = e.type.defaultProps;
      for (c in t)
        S.call(t, c) &&
          !P.hasOwnProperty(c) &&
          (r[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
    }
    var c = arguments.length - 2;
    if (1 === c) r.children = n;
    else if (1 < c) {
      s = Array(c);
      for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
      r.children = s;
    }
    return { $$typeof: u, type: e.type, key: o, ref: a, props: r, _owner: i };
  }),
  (t.createContext = function (e, t) {
    return (
      void 0 === t && (t = null),
      ((e = {
        $$typeof: f,
        _calculateChangedBits: t,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      }).Provider = { $$typeof: c, _context: e }),
      (e.Consumer = e)
    );
  }),
  (t.createElement = N),
  (t.createFactory = function (e) {
    var t = N.bind(null, e);
    return (t.type = e), t;
  }),
  (t.createRef = function () {
    return { current: null };
  }),
  (t.forwardRef = function (e) {
    return { $$typeof: d, render: e };
  }),
  (t.isValidElement = O),
  (t.lazy = function (e) {
    return { $$typeof: m, _payload: { _status: -1, _result: e }, _init: F };
  }),
  (t.memo = function (e, t) {
    return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
  }),
  (t.useCallback = function (e, t) {
    return A().useCallback(e, t);
  }),
  (t.useContext = function (e, t) {
    return A().useContext(e, t);
  }),
  (t.useDebugValue = function () {}),
  (t.useEffect = function (e, t) {
    return A().useEffect(e, t);
  }),
  (t.useImperativeHandle = function (e, t, n) {
    return A().useImperativeHandle(e, t, n);
  }),
  (t.useLayoutEffect = function (e, t) {
    return A().useLayoutEffect(e, t);
  }),
  (t.useMemo = function (e, t) {
    return A().useMemo(e, t);
  }),
  (t.useReducer = function (e, t, n) {
    return A().useReducer(e, t, n);
  }),
  (t.useRef = function (e) {
    return A().useRef(e);
  }),
  (t.useState = function (e) {
    return A().useState(e);
  }),
  (t.version = '17.0.2'),
  (e.exports = t);
var j = e.exports,
  z = { exports: {} },
  D = {},
  V = { exports: {} },
  U = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!(function (e) {
  var t, n, r, o;
  if ('object' == typeof performance && 'function' == typeof performance.now) {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  if ('undefined' == typeof window || 'function' != typeof MessageChannel) {
    var u = null,
      s = null,
      c = function () {
        if (null !== u)
          try {
            var t = e.unstable_now();
            u(!0, t), (u = null);
          } catch (n) {
            throw (setTimeout(c, 0), n);
          }
      };
    (t = function (e) {
      null !== u ? setTimeout(t, 0, e) : ((u = e), setTimeout(c, 0));
    }),
      (n = function (e, t) {
        s = setTimeout(e, t);
      }),
      (r = function () {
        clearTimeout(s);
      }),
      (e.unstable_shouldYield = function () {
        return !1;
      }),
      (o = e.unstable_forceFrameRate = function () {});
  } else {
    var f = window.setTimeout,
      d = window.clearTimeout;
    if ('undefined' != typeof console) {
      var p = window.cancelAnimationFrame;
      'function' != typeof window.requestAnimationFrame &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
        ),
        'function' != typeof p &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
          );
    }
    var m = !1,
      h = null,
      v = -1,
      g = 5,
      y = 0;
    (e.unstable_shouldYield = function () {
      return e.unstable_now() >= y;
    }),
      (o = function () {}),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
            )
          : (g = 0 < e ? Math.floor(1e3 / e) : 5);
      });
    var b = new MessageChannel(),
      x = b.port2;
    (b.port1.onmessage = function () {
      if (null !== h) {
        var t = e.unstable_now();
        y = t + g;
        try {
          h(!0, t) ? x.postMessage(null) : ((m = !1), (h = null));
        } catch (n) {
          throw (x.postMessage(null), n);
        }
      } else m = !1;
    }),
      (t = function (e) {
        (h = e), m || ((m = !0), x.postMessage(null));
      }),
      (n = function (t, n) {
        v = f(function () {
          t(e.unstable_now());
        }, n);
      }),
      (r = function () {
        d(v), (v = -1);
      });
  }
  function w(e, t) {
    var n = e.length;
    e.push(t);
    e: for (;;) {
      var r = (n - 1) >>> 1,
        o = e[r];
      if (!(void 0 !== o && 0 < C(o, t))) break e;
      (e[r] = t), (e[n] = o), (n = r);
    }
  }
  function E(e) {
    return void 0 === (e = e[0]) ? null : e;
  }
  function k(e) {
    var t = e[0];
    if (void 0 !== t) {
      var n = e.pop();
      if (n !== t) {
        e[0] = n;
        e: for (var r = 0, o = e.length; r < o; ) {
          var a = 2 * (r + 1) - 1,
            i = e[a],
            l = a + 1,
            u = e[l];
          if (void 0 !== i && 0 > C(i, n))
            void 0 !== u && 0 > C(u, i)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = i), (e[a] = n), (r = a));
          else {
            if (!(void 0 !== u && 0 > C(u, n))) break e;
            (e[r] = u), (e[l] = n), (r = l);
          }
        }
      }
      return t;
    }
    return null;
  }
  function C(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return 0 !== n ? n : e.id - t.id;
  }
  var S = [],
    P = [],
    N = 1,
    O = null,
    T = 3,
    M = !1,
    _ = !1,
    R = !1;
  function F(e) {
    for (var t = E(P); null !== t; ) {
      if (null === t.callback) k(P);
      else {
        if (!(t.startTime <= e)) break;
        k(P), (t.sortIndex = t.expirationTime), w(S, t);
      }
      t = E(P);
    }
  }
  function L(e) {
    if (((R = !1), F(e), !_))
      if (null !== E(S)) (_ = !0), t(A);
      else {
        var r = E(P);
        null !== r && n(L, r.startTime - e);
      }
  }
  function A(t, o) {
    (_ = !1), R && ((R = !1), r()), (M = !0);
    var a = T;
    try {
      for (
        F(o), O = E(S);
        null !== O && (!(O.expirationTime > o) || (t && !e.unstable_shouldYield()));

      ) {
        var i = O.callback;
        if ('function' == typeof i) {
          (O.callback = null), (T = O.priorityLevel);
          var l = i(O.expirationTime <= o);
          (o = e.unstable_now()),
            'function' == typeof l ? (O.callback = l) : O === E(S) && k(S),
            F(o);
        } else k(S);
        O = E(S);
      }
      if (null !== O) var u = !0;
      else {
        var s = E(P);
        null !== s && n(L, s.startTime - o), (u = !1);
      }
      return u;
    } finally {
      (O = null), (T = a), (M = !1);
    }
  }
  var I = o;
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (e) {
      e.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      _ || M || ((_ = !0), t(A));
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return T;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return E(S);
    }),
    (e.unstable_next = function (e) {
      switch (T) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = T;
      }
      var n = T;
      T = t;
      try {
        return e();
      } finally {
        T = n;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = I),
    (e.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var n = T;
      T = e;
      try {
        return t();
      } finally {
        T = n;
      }
    }),
    (e.unstable_scheduleCallback = function (o, a, i) {
      var l = e.unstable_now();
      switch (
        ('object' == typeof i && null !== i
          ? (i = 'number' == typeof (i = i.delay) && 0 < i ? l + i : l)
          : (i = l),
        o)
      ) {
        case 1:
          var u = -1;
          break;
        case 2:
          u = 250;
          break;
        case 5:
          u = 1073741823;
          break;
        case 4:
          u = 1e4;
          break;
        default:
          u = 5e3;
      }
      return (
        (o = {
          id: N++,
          callback: a,
          priorityLevel: o,
          startTime: i,
          expirationTime: (u = i + u),
          sortIndex: -1,
        }),
        i > l
          ? ((o.sortIndex = i),
            w(P, o),
            null === E(S) && o === E(P) && (R ? r() : (R = !0), n(L, i - l)))
          : ((o.sortIndex = u), w(S, o), _ || M || ((_ = !0), t(A))),
        o
      );
    }),
    (e.unstable_wrapCallback = function (e) {
      var t = T;
      return function () {
        var n = T;
        T = t;
        try {
          return e.apply(this, arguments);
        } finally {
          T = n;
        }
      };
    });
})(U),
  (V.exports = U);
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H = e.exports,
  W = i,
  $ = V.exports;
function B(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
if (!H) throw Error(B(227));
var q = new Set(),
  K = {};
function Y(e, t) {
  Q(e, t), Q(e + 'Capture', t);
}
function Q(e, t) {
  for (K[e] = t, e = 0; e < t.length; e++) q.add(t[e]);
}
var X = !(
    'undefined' == typeof window ||
    void 0 === window.document ||
    void 0 === window.document.createElement
  ),
  G =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Z = Object.prototype.hasOwnProperty,
  J = {},
  ee = {};
function te(e, t, n, r, o, a, i) {
  (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = i);
}
var ne = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ne[e] = new te(e, 0, !1, e, null, !1, !1);
  }),
  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(function (e) {
    var t = e[0];
    ne[t] = new te(t, 1, !1, e[1], null, !1, !1);
  }),
  ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    ne[e] = new te(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }),
  ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
    ne[e] = new te(e, 2, !1, e, null, !1, !1);
  }),
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
      ne[e] = new te(e, 3, !1, e.toLowerCase(), null, !1, !1);
    }),
  ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    ne[e] = new te(e, 3, !0, e, null, !1, !1);
  }),
  ['capture', 'download'].forEach(function (e) {
    ne[e] = new te(e, 4, !1, e, null, !1, !1);
  }),
  ['cols', 'rows', 'size', 'span'].forEach(function (e) {
    ne[e] = new te(e, 6, !1, e, null, !1, !1);
  }),
  ['rowSpan', 'start'].forEach(function (e) {
    ne[e] = new te(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
var re = /[\-:]([a-z])/g;
function oe(e) {
  return e[1].toUpperCase();
}
function ae(e, t, n, r) {
  var o = ne.hasOwnProperty(t) ? ne[t] : null;
  (null !== o
    ? 0 === o.type
    : !r && 2 < t.length && ('o' === t[0] || 'O' === t[0]) && ('n' === t[1] || 'N' === t[1])) ||
    ((function (e, t, n, r) {
      if (
        null == t ||
        (function (e, t, n, r) {
          if (null !== n && 0 === n.type) return !1;
          switch (typeof t) {
            case 'function':
            case 'symbol':
              return !0;
            case 'boolean':
              return (
                !r &&
                (null !== n
                  ? !n.acceptsBooleans
                  : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
              );
            default:
              return !1;
          }
        })(e, t, n, r)
      )
        return !0;
      if (r) return !1;
      if (null !== n)
        switch (n.type) {
          case 3:
            return !t;
          case 4:
            return !1 === t;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    })(t, n, o, r) && (n = null),
    r || null === o
      ? (function (e) {
          return (
            !!Z.call(ee, e) || (!Z.call(J, e) && (G.test(e) ? (ee[e] = !0) : ((J[e] = !0), !1)))
          );
        })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = null === n ? 3 !== o.type && '' : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        null === n
          ? e.removeAttribute(t)
          : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(re, oe);
    ne[t] = new te(t, 1, !1, e, null, !1, !1);
  }),
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(re, oe);
      ne[t] = new te(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    }),
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(re, oe);
    ne[t] = new te(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
  }),
  ['tabIndex', 'crossOrigin'].forEach(function (e) {
    ne[e] = new te(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }),
  (ne.xlinkHref = new te('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
  ['src', 'href', 'action', 'formAction'].forEach(function (e) {
    ne[e] = new te(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
var ie = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  le = 60103,
  ue = 60106,
  se = 60107,
  ce = 60108,
  fe = 60114,
  de = 60109,
  pe = 60110,
  me = 60112,
  he = 60113,
  ve = 60120,
  ge = 60115,
  ye = 60116,
  be = 60121,
  xe = 60128,
  we = 60129,
  Ee = 60130,
  ke = 60131;
if ('function' == typeof Symbol && Symbol.for) {
  var Ce = Symbol.for;
  (le = Ce('react.element')),
    (ue = Ce('react.portal')),
    (se = Ce('react.fragment')),
    (ce = Ce('react.strict_mode')),
    (fe = Ce('react.profiler')),
    (de = Ce('react.provider')),
    (pe = Ce('react.context')),
    (me = Ce('react.forward_ref')),
    (he = Ce('react.suspense')),
    (ve = Ce('react.suspense_list')),
    (ge = Ce('react.memo')),
    (ye = Ce('react.lazy')),
    (be = Ce('react.block')),
    Ce('react.scope'),
    (xe = Ce('react.opaque.id')),
    (we = Ce('react.debug_trace_mode')),
    (Ee = Ce('react.offscreen')),
    (ke = Ce('react.legacy_hidden'));
}
var Se,
  Pe = 'function' == typeof Symbol && Symbol.iterator;
function Ne(e) {
  return null === e || 'object' != typeof e
    ? null
    : 'function' == typeof (e = (Pe && e[Pe]) || e['@@iterator'])
    ? e
    : null;
}
function Oe(e) {
  if (void 0 === Se)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Se = (t && t[1]) || '';
    }
  return '\n' + Se + e;
}
var Te = !1;
function Me(e, t) {
  if (!e || Te) return '';
  Te = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        'object' == typeof Reflect && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && 'string' == typeof u.stack) {
      for (
        var o = u.stack.split('\n'), a = r.stack.split('\n'), i = o.length - 1, l = a.length - 1;
        1 <= i && 0 <= l && o[i] !== a[l];

      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (o[i] !== a[l]) {
          if (1 !== i || 1 !== l)
            do {
              if ((i--, 0 > --l || o[i] !== a[l])) return '\n' + o[i].replace(' at new ', ' at ');
            } while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    (Te = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Oe(e) : '';
}
function _e(e) {
  switch (e.tag) {
    case 5:
      return Oe(e.type);
    case 16:
      return Oe('Lazy');
    case 13:
      return Oe('Suspense');
    case 19:
      return Oe('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Me(e.type, !1));
    case 11:
      return (e = Me(e.type.render, !1));
    case 22:
      return (e = Me(e.type._render, !1));
    case 1:
      return (e = Me(e.type, !0));
    default:
      return '';
  }
}
function Re(e) {
  if (null == e) return null;
  if ('function' == typeof e) return e.displayName || e.name || null;
  if ('string' == typeof e) return e;
  switch (e) {
    case se:
      return 'Fragment';
    case ue:
      return 'Portal';
    case fe:
      return 'Profiler';
    case ce:
      return 'StrictMode';
    case he:
      return 'Suspense';
    case ve:
      return 'SuspenseList';
  }
  if ('object' == typeof e)
    switch (e.$$typeof) {
      case pe:
        return (e.displayName || 'Context') + '.Consumer';
      case de:
        return (e._context.displayName || 'Context') + '.Provider';
      case me:
        var t = e.render;
        return (
          (t = t.displayName || t.name || ''),
          e.displayName || ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
        );
      case ge:
        return Re(e.type);
      case be:
        return Re(e._render);
      case ye:
        (t = e._payload), (e = e._init);
        try {
          return Re(e(t));
        } catch (n) {}
    }
  return null;
}
function Fe(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'object':
    case 'string':
    case 'undefined':
      return e;
    default:
      return '';
  }
}
function Le(e) {
  var t = e.type;
  return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
}
function Ae(e) {
  e._valueTracker ||
    (e._valueTracker = (function (e) {
      var t = Le(e) ? 'checked' : 'value',
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = '' + e[t];
      if (
        !e.hasOwnProperty(t) &&
        void 0 !== n &&
        'function' == typeof n.get &&
        'function' == typeof n.set
      ) {
        var o = n.get,
          a = n.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return o.call(this);
            },
            set: function (e) {
              (r = '' + e), a.call(this, e);
            },
          }),
          Object.defineProperty(e, t, { enumerable: n.enumerable }),
          {
            getValue: function () {
              return r;
            },
            setValue: function (e) {
              r = '' + e;
            },
            stopTracking: function () {
              (e._valueTracker = null), delete e[t];
            },
          }
        );
      }
    })(e));
}
function Ie(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Le(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r) !== n && (t.setValue(e), !0)
  );
}
function je(e) {
  if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
  try {
    return e.activeElement || e.body;
  } catch (t) {
    return e.body;
  }
}
function ze(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != n ? n : e._wrapperState.initialChecked,
  });
}
function De(e, t) {
  var n = null == t.defaultValue ? '' : t.defaultValue,
    r = null != t.checked ? t.checked : t.defaultChecked;
  (n = Fe(null != t.value ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: 'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
    });
}
function Ve(e, t) {
  null != (t = t.checked) && ae(e, 'checked', t, !1);
}
function Ue(e, t) {
  Ve(e, t);
  var n = Fe(t.value),
    r = t.type;
  if (null != n)
    'number' === r
      ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if ('submit' === r || 'reset' === r) return void e.removeAttribute('value');
  t.hasOwnProperty('value')
    ? We(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && We(e, t.type, Fe(t.defaultValue)),
    null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
}
function He(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!(('submit' !== r && 'reset' !== r) || (void 0 !== t.value && null !== t.value))) return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  '' !== (n = e.name) && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    '' !== n && (e.name = n);
}
function We(e, t, n) {
  ('number' === t && je(e.ownerDocument) === e) ||
    (null == n
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
function $e(e, t) {
  return (
    (e = W({ children: void 0 }, t)),
    (t = (function (e) {
      var t = '';
      return (
        H.Children.forEach(e, function (e) {
          null != e && (t += e);
        }),
        t
      );
    })(t.children)) && (e.children = t),
    e
  );
}
function Be(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Fe(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0));
      null !== t || e[o].disabled || (t = e[o]);
    }
    null !== t && (t.selected = !0);
  }
}
function qe(e, t) {
  if (null != t.dangerouslySetInnerHTML) throw Error(B(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ke(e, t) {
  var n = t.value;
  if (null == n) {
    if (((n = t.children), (t = t.defaultValue), null != n)) {
      if (null != t) throw Error(B(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(B(93));
        n = n[0];
      }
      t = n;
    }
    null == t && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Fe(n) };
}
function Ye(e, t) {
  var n = Fe(t.value),
    r = Fe(t.defaultValue);
  null != n &&
    ((n = '' + n) !== e.value && (e.value = n),
    null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
    null != r && (e.defaultValue = '' + r);
}
function Qe(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
}
var Xe = 'http://www.w3.org/1999/xhtml',
  Ge = 'http://www.w3.org/2000/svg';
function Ze(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Je(e, t) {
  return null == e || 'http://www.w3.org/1999/xhtml' === e
    ? Ze(t)
    : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var et,
  tt,
  nt =
    ((tt = function (e, t) {
      if (e.namespaceURI !== Ge || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          (et = et || document.createElement('div')).innerHTML =
            '<svg>' + t.valueOf().toString() + '</svg>',
            t = et.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    }),
    'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
      ? function (e, t, n, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return tt(e, t);
          });
        }
      : tt);
function rt(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
  }
  e.textContent = t;
}
var ot = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  at = ['Webkit', 'ms', 'Moz', 'O'];
function it(e, t, n) {
  return null == t || 'boolean' == typeof t || '' === t
    ? ''
    : n || 'number' != typeof t || 0 === t || (ot.hasOwnProperty(e) && ot[e])
    ? ('' + t).trim()
    : t + 'px';
}
function lt(e, t) {
  for (var n in ((e = e.style), t))
    if (t.hasOwnProperty(n)) {
      var r = 0 === n.indexOf('--'),
        o = it(n, t[n], r);
      'float' === n && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
Object.keys(ot).forEach(function (e) {
  at.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ot[t] = ot[e]);
  });
});
var ut = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function st(e, t) {
  if (t) {
    if (ut[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(B(137, e));
    if (null != t.dangerouslySetInnerHTML) {
      if (null != t.children) throw Error(B(60));
      if ('object' != typeof t.dangerouslySetInnerHTML || !('__html' in t.dangerouslySetInnerHTML))
        throw Error(B(61));
    }
    if (null != t.style && 'object' != typeof t.style) throw Error(B(62));
  }
}
function ct(e, t) {
  if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
function ft(e) {
  return (
    (e = e.target || e.srcElement || window).correspondingUseElement &&
      (e = e.correspondingUseElement),
    3 === e.nodeType ? e.parentNode : e
  );
}
var dt = null,
  pt = null,
  mt = null;
function ht(e) {
  if ((e = Vo(e))) {
    if ('function' != typeof dt) throw Error(B(280));
    var t = e.stateNode;
    t && ((t = Ho(t)), dt(e.stateNode, e.type, t));
  }
}
function vt(e) {
  pt ? (mt ? mt.push(e) : (mt = [e])) : (pt = e);
}
function gt() {
  if (pt) {
    var e = pt,
      t = mt;
    if (((mt = pt = null), ht(e), t)) for (e = 0; e < t.length; e++) ht(t[e]);
  }
}
function yt(e, t) {
  return e(t);
}
function bt(e, t, n, r, o) {
  return e(t, n, r, o);
}
function xt() {}
var wt = yt,
  Et = !1,
  kt = !1;
function Ct() {
  (null === pt && null === mt) || (xt(), gt());
}
function St(e, t) {
  var n = e.stateNode;
  if (null === n) return null;
  var r = Ho(n);
  if (null === r) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        (r = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && 'function' != typeof n) throw Error(B(231, t, typeof n));
  return n;
}
var Pt = !1;
if (X)
  try {
    var Nt = {};
    Object.defineProperty(Nt, 'passive', {
      get: function () {
        Pt = !0;
      },
    }),
      window.addEventListener('test', Nt, Nt),
      window.removeEventListener('test', Nt, Nt);
  } catch (tt) {
    Pt = !1;
  }
function Ot(e, t, n, r, o, a, i, l, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var Tt = !1,
  Mt = null,
  _t = !1,
  Rt = null,
  Ft = {
    onError: function (e) {
      (Tt = !0), (Mt = e);
    },
  };
function Lt(e, t, n, r, o, a, i, l, u) {
  (Tt = !1), (Mt = null), Ot.apply(Ft, arguments);
}
function At(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do {
      0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return);
    } while (e);
  }
  return 3 === t.tag ? n : null;
}
function It(e) {
  if (13 === e.tag) {
    var t = e.memoizedState;
    if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t))
      return t.dehydrated;
  }
  return null;
}
function jt(e) {
  if (At(e) !== e) throw Error(B(188));
}
function zt(e) {
  if (
    !(e = (function (e) {
      var t = e.alternate;
      if (!t) {
        if (null === (t = At(e))) throw Error(B(188));
        return t !== e ? null : e;
      }
      for (var n = e, r = t; ; ) {
        var o = n.return;
        if (null === o) break;
        var a = o.alternate;
        if (null === a) {
          if (null !== (r = o.return)) {
            n = r;
            continue;
          }
          break;
        }
        if (o.child === a.child) {
          for (a = o.child; a; ) {
            if (a === n) return jt(o), e;
            if (a === r) return jt(o), t;
            a = a.sibling;
          }
          throw Error(B(188));
        }
        if (n.return !== r.return) (n = o), (r = a);
        else {
          for (var i = !1, l = o.child; l; ) {
            if (l === n) {
              (i = !0), (n = o), (r = a);
              break;
            }
            if (l === r) {
              (i = !0), (r = o), (n = a);
              break;
            }
            l = l.sibling;
          }
          if (!i) {
            for (l = a.child; l; ) {
              if (l === n) {
                (i = !0), (n = a), (r = o);
                break;
              }
              if (l === r) {
                (i = !0), (r = a), (n = o);
                break;
              }
              l = l.sibling;
            }
            if (!i) throw Error(B(189));
          }
        }
        if (n.alternate !== r) throw Error(B(190));
      }
      if (3 !== n.tag) throw Error(B(188));
      return n.stateNode.current === n ? e : t;
    })(e))
  )
    return null;
  for (var t = e; ; ) {
    if (5 === t.tag || 6 === t.tag) return t;
    if (t.child) (t.child.return = t), (t = t.child);
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return null;
}
function Dt(e, t) {
  for (var n = e.alternate; null !== t; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var Vt,
  Ut,
  Ht,
  Wt,
  $t = !1,
  Bt = [],
  qt = null,
  Kt = null,
  Yt = null,
  Qt = new Map(),
  Xt = new Map(),
  Gt = [],
  Zt =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Jt(e, t, n, r, o) {
  return {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: 16 | n,
    nativeEvent: o,
    targetContainers: [r],
  };
}
function en(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      qt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Kt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Yt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Qt.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Xt.delete(t.pointerId);
  }
}
function tn(e, t, n, r, o, a) {
  return null === e || e.nativeEvent !== a
    ? ((e = Jt(t, n, r, o, a)), null !== t && null !== (t = Vo(t)) && Ut(t), e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      null !== o && -1 === t.indexOf(o) && t.push(o),
      e);
}
function nn(e) {
  var t = Do(e.target);
  if (null !== t) {
    var n = At(t);
    if (null !== n)
      if (13 === (t = n.tag)) {
        if (null !== (t = It(n)))
          return (
            (e.blockedOn = t),
            void Wt(e.lanePriority, function () {
              $.unstable_runWithPriority(e.priority, function () {
                Ht(n);
              });
            })
          );
      } else if (3 === t && n.stateNode.hydrate)
        return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
  }
  e.blockedOn = null;
}
function rn(e) {
  if (null !== e.blockedOn) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Dn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (null !== n) return null !== (t = Vo(n)) && Ut(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function on(e, t, n) {
  rn(e) && n.delete(t);
}
function an() {
  for ($t = !1; 0 < Bt.length; ) {
    var e = Bt[0];
    if (null !== e.blockedOn) {
      null !== (e = Vo(e.blockedOn)) && Vt(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Dn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (null !== n) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    null === e.blockedOn && Bt.shift();
  }
  null !== qt && rn(qt) && (qt = null),
    null !== Kt && rn(Kt) && (Kt = null),
    null !== Yt && rn(Yt) && (Yt = null),
    Qt.forEach(on),
    Xt.forEach(on);
}
function ln(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $t || (($t = !0), $.unstable_scheduleCallback($.unstable_NormalPriority, an)));
}
function un(e) {
  function t(t) {
    return ln(t, e);
  }
  if (0 < Bt.length) {
    ln(Bt[0], e);
    for (var n = 1; n < Bt.length; n++) {
      var r = Bt[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    null !== qt && ln(qt, e),
      null !== Kt && ln(Kt, e),
      null !== Yt && ln(Yt, e),
      Qt.forEach(t),
      Xt.forEach(t),
      n = 0;
    n < Gt.length;
    n++
  )
    (r = Gt[n]).blockedOn === e && (r.blockedOn = null);
  for (; 0 < Gt.length && null === (n = Gt[0]).blockedOn; )
    nn(n), null === n.blockedOn && Gt.shift();
}
function sn(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var cn = {
    animationend: sn('Animation', 'AnimationEnd'),
    animationiteration: sn('Animation', 'AnimationIteration'),
    animationstart: sn('Animation', 'AnimationStart'),
    transitionend: sn('Transition', 'TransitionEnd'),
  },
  fn = {},
  dn = {};
function pn(e) {
  if (fn[e]) return fn[e];
  if (!cn[e]) return e;
  var t,
    n = cn[e];
  for (t in n) if (n.hasOwnProperty(t) && t in dn) return (fn[e] = n[t]);
  return e;
}
X &&
  ((dn = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete cn.animationend.animation,
    delete cn.animationiteration.animation,
    delete cn.animationstart.animation),
  'TransitionEvent' in window || delete cn.transitionend.transition);
var mn = pn('animationend'),
  hn = pn('animationiteration'),
  vn = pn('animationstart'),
  gn = pn('transitionend'),
  yn = new Map(),
  bn = new Map(),
  xn = [
    'abort',
    'abort',
    mn,
    'animationEnd',
    hn,
    'animationIteration',
    vn,
    'animationStart',
    'canplay',
    'canPlay',
    'canplaythrough',
    'canPlayThrough',
    'durationchange',
    'durationChange',
    'emptied',
    'emptied',
    'encrypted',
    'encrypted',
    'ended',
    'ended',
    'error',
    'error',
    'gotpointercapture',
    'gotPointerCapture',
    'load',
    'load',
    'loadeddata',
    'loadedData',
    'loadedmetadata',
    'loadedMetadata',
    'loadstart',
    'loadStart',
    'lostpointercapture',
    'lostPointerCapture',
    'playing',
    'playing',
    'progress',
    'progress',
    'seeking',
    'seeking',
    'stalled',
    'stalled',
    'suspend',
    'suspend',
    'timeupdate',
    'timeUpdate',
    gn,
    'transitionEnd',
    'waiting',
    'waiting',
  ];
function wn(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n],
      o = e[n + 1];
    (o = 'on' + (o[0].toUpperCase() + o.slice(1))), bn.set(r, t), yn.set(r, o), Y(o, [r]);
  }
}
(0, $.unstable_now)();
var En = 8;
function kn(e) {
  if (0 != (1 & e)) return (En = 15), 1;
  if (0 != (2 & e)) return (En = 14), 2;
  if (0 != (4 & e)) return (En = 13), 4;
  var t = 24 & e;
  return 0 !== t
    ? ((En = 12), t)
    : 0 != (32 & e)
    ? ((En = 11), 32)
    : 0 !== (t = 192 & e)
    ? ((En = 10), t)
    : 0 != (256 & e)
    ? ((En = 9), 256)
    : 0 !== (t = 3584 & e)
    ? ((En = 8), t)
    : 0 != (4096 & e)
    ? ((En = 7), 4096)
    : 0 !== (t = 4186112 & e)
    ? ((En = 6), t)
    : 0 !== (t = 62914560 & e)
    ? ((En = 5), t)
    : 67108864 & e
    ? ((En = 4), 67108864)
    : 0 != (134217728 & e)
    ? ((En = 3), 134217728)
    : 0 !== (t = 805306368 & e)
    ? ((En = 2), t)
    : 0 != (1073741824 & e)
    ? ((En = 1), 1073741824)
    : ((En = 8), e);
}
function Cn(e, t) {
  var n = e.pendingLanes;
  if (0 === n) return (En = 0);
  var r = 0,
    o = 0,
    a = e.expiredLanes,
    i = e.suspendedLanes,
    l = e.pingedLanes;
  if (0 !== a) (r = a), (o = En = 15);
  else if (0 !== (a = 134217727 & n)) {
    var u = a & ~i;
    0 !== u ? ((r = kn(u)), (o = En)) : 0 !== (l &= a) && ((r = kn(l)), (o = En));
  } else 0 !== (a = n & ~i) ? ((r = kn(a)), (o = En)) : 0 !== l && ((r = kn(l)), (o = En));
  if (0 === r) return 0;
  if (
    ((r = n & (((0 > (r = 31 - Mn(r)) ? 0 : 1 << r) << 1) - 1)), 0 !== t && t !== r && 0 == (t & i))
  ) {
    if ((kn(t), o <= En)) return t;
    En = o;
  }
  if (0 !== (t = e.entangledLanes))
    for (e = e.entanglements, t &= r; 0 < t; ) (o = 1 << (n = 31 - Mn(t))), (r |= e[n]), (t &= ~o);
  return r;
}
function Sn(e) {
  return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
}
function Pn(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return 0 === (e = Nn(24 & ~t)) ? Pn(10, t) : e;
    case 10:
      return 0 === (e = Nn(192 & ~t)) ? Pn(8, t) : e;
    case 8:
      return 0 === (e = Nn(3584 & ~t)) && 0 === (e = Nn(4186112 & ~t)) && (e = 512), e;
    case 2:
      return 0 === (t = Nn(805306368 & ~t)) && (t = 268435456), t;
  }
  throw Error(B(358, e));
}
function Nn(e) {
  return e & -e;
}
function On(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Tn(e, t, n) {
  e.pendingLanes |= t;
  var r = t - 1;
  (e.suspendedLanes &= r), (e.pingedLanes &= r), ((e = e.eventTimes)[(t = 31 - Mn(t))] = n);
}
var Mn = Math.clz32
    ? Math.clz32
    : function (e) {
        return 0 === e ? 32 : (31 - ((_n(e) / Rn) | 0)) | 0;
      },
  _n = Math.log,
  Rn = Math.LN2;
var Fn = $.unstable_UserBlockingPriority,
  Ln = $.unstable_runWithPriority,
  An = !0;
function In(e, t, n, r) {
  Et || xt();
  var o = zn,
    a = Et;
  Et = !0;
  try {
    bt(o, e, t, n, r);
  } finally {
    (Et = a) || Ct();
  }
}
function jn(e, t, n, r) {
  Ln(Fn, zn.bind(null, e, t, n, r));
}
function zn(e, t, n, r) {
  var o;
  if (An)
    if ((o = 0 == (4 & t)) && 0 < Bt.length && -1 < Zt.indexOf(e))
      (e = Jt(null, e, t, n, r)), Bt.push(e);
    else {
      var a = Dn(e, t, n, r);
      if (null === a) o && en(e, r);
      else {
        if (o) {
          if (-1 < Zt.indexOf(e)) return (e = Jt(a, e, t, n, r)), void Bt.push(e);
          if (
            (function (e, t, n, r, o) {
              switch (t) {
                case 'focusin':
                  return (qt = tn(qt, e, t, n, r, o)), !0;
                case 'dragenter':
                  return (Kt = tn(Kt, e, t, n, r, o)), !0;
                case 'mouseover':
                  return (Yt = tn(Yt, e, t, n, r, o)), !0;
                case 'pointerover':
                  var a = o.pointerId;
                  return Qt.set(a, tn(Qt.get(a) || null, e, t, n, r, o)), !0;
                case 'gotpointercapture':
                  return (a = o.pointerId), Xt.set(a, tn(Xt.get(a) || null, e, t, n, r, o)), !0;
              }
              return !1;
            })(a, e, t, n, r)
          )
            return;
          en(e, r);
        }
        yo(e, t, r, null, n);
      }
    }
}
function Dn(e, t, n, r) {
  var o = ft(r);
  if (null !== (o = Do(o))) {
    var a = At(o);
    if (null === a) o = null;
    else {
      var i = a.tag;
      if (13 === i) {
        if (null !== (o = It(a))) return o;
        o = null;
      } else if (3 === i) {
        if (a.stateNode.hydrate) return 3 === a.tag ? a.stateNode.containerInfo : null;
        o = null;
      } else a !== o && (o = null);
    }
  }
  return yo(e, t, r, o, n), null;
}
var Vn = null,
  Un = null,
  Hn = null;
function Wn() {
  if (Hn) return Hn;
  var e,
    t,
    n = Un,
    r = n.length,
    o = 'value' in Vn ? Vn.value : Vn.textContent,
    a = o.length;
  for (e = 0; e < r && n[e] === o[e]; e++);
  var i = r - e;
  for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
  return (Hn = o.slice(e, 1 < t ? 1 - t : void 0));
}
function $n(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
    10 === e && (e = 13),
    32 <= e || 13 === e ? e : 0
  );
}
function Bn() {
  return !0;
}
function qn() {
  return !1;
}
function Kn(e) {
  function t(t, n, r, o, a) {
    for (var i in ((this._reactName = t),
    (this._targetInst = r),
    (this.type = n),
    (this.nativeEvent = o),
    (this.target = a),
    (this.currentTarget = null),
    e))
      e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
    return (
      (this.isDefaultPrevented = (
        null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue
      )
        ? Bn
        : qn),
      (this.isPropagationStopped = qn),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = Bn));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = Bn));
      },
      persist: function () {},
      isPersistent: Bn,
    }),
    t
  );
}
var Yn,
  Qn,
  Xn,
  Gn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zn = Kn(Gn),
  Jn = W({}, Gn, { view: 0, detail: 0 }),
  er = Kn(Jn),
  tr = W({}, Jn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: dr,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return void 0 === e.relatedTarget
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Xn &&
            (Xn && 'mousemove' === e.type
              ? ((Yn = e.screenX - Xn.screenX), (Qn = e.screenY - Xn.screenY))
              : (Qn = Yn = 0),
            (Xn = e)),
          Yn);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Qn;
    },
  }),
  nr = Kn(tr),
  rr = Kn(W({}, tr, { dataTransfer: 0 })),
  or = Kn(W({}, Jn, { relatedTarget: 0 })),
  ar = Kn(W({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
  ir = Kn(
    W({}, Gn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
  ),
  lr = Kn(W({}, Gn, { data: 0 })),
  ur = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  sr = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  cr = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function fr(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = cr[e]) && !!t[e];
}
function dr() {
  return fr;
}
var pr = Kn(
    W({}, Jn, {
      key: function (e) {
        if (e.key) {
          var t = ur[e.key] || e.key;
          if ('Unidentified' !== t) return t;
        }
        return 'keypress' === e.type
          ? 13 === (e = $n(e))
            ? 'Enter'
            : String.fromCharCode(e)
          : 'keydown' === e.type || 'keyup' === e.type
          ? sr[e.keyCode] || 'Unidentified'
          : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: dr,
      charCode: function (e) {
        return 'keypress' === e.type ? $n(e) : 0;
      },
      keyCode: function (e) {
        return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
      },
      which: function (e) {
        return 'keypress' === e.type
          ? $n(e)
          : 'keydown' === e.type || 'keyup' === e.type
          ? e.keyCode
          : 0;
      },
    }),
  ),
  mr = Kn(
    W({}, tr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
  ),
  hr = Kn(
    W({}, Jn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: dr,
    }),
  ),
  vr = Kn(W({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
  gr = Kn(
    W({}, tr, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
  ),
  yr = [9, 13, 27, 32],
  br = X && 'CompositionEvent' in window,
  xr = null;
X && 'documentMode' in document && (xr = document.documentMode);
var wr = X && 'TextEvent' in window && !xr,
  Er = X && (!br || (xr && 8 < xr && 11 >= xr)),
  kr = String.fromCharCode(32),
  Cr = !1;
function Sr(e, t) {
  switch (e) {
    case 'keyup':
      return -1 !== yr.indexOf(t.keyCode);
    case 'keydown':
      return 229 !== t.keyCode;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Pr(e) {
  return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
}
var Nr = !1;
var Or = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Tr(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return 'input' === t ? !!Or[e.type] : 'textarea' === t;
}
function Mr(e, t, n, r) {
  vt(r),
    0 < (t = xo(t, 'onChange')).length &&
      ((n = new Zn('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var _r = null,
  Rr = null;
function Fr(e) {
  fo(e, 0);
}
function Lr(e) {
  if (Ie(Uo(e))) return e;
}
function Ar(e, t) {
  if ('change' === e) return t;
}
var Ir = !1;
if (X) {
  var jr;
  if (X) {
    var zr = 'oninput' in document;
    if (!zr) {
      var Dr = document.createElement('div');
      Dr.setAttribute('oninput', 'return;'), (zr = 'function' == typeof Dr.oninput);
    }
    jr = zr;
  } else jr = !1;
  Ir = jr && (!document.documentMode || 9 < document.documentMode);
}
function Vr() {
  _r && (_r.detachEvent('onpropertychange', Ur), (Rr = _r = null));
}
function Ur(e) {
  if ('value' === e.propertyName && Lr(Rr)) {
    var t = [];
    if ((Mr(t, Rr, e, ft(e)), (e = Fr), Et)) e(t);
    else {
      Et = !0;
      try {
        yt(e, t);
      } finally {
        (Et = !1), Ct();
      }
    }
  }
}
function Hr(e, t, n) {
  'focusin' === e
    ? (Vr(), (Rr = n), (_r = t).attachEvent('onpropertychange', Ur))
    : 'focusout' === e && Vr();
}
function Wr(e) {
  if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Lr(Rr);
}
function $r(e, t) {
  if ('click' === e) return Lr(t);
}
function Br(e, t) {
  if ('input' === e || 'change' === e) return Lr(t);
}
var qr =
    'function' == typeof Object.is
      ? Object.is
      : function (e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        },
  Kr = Object.prototype.hasOwnProperty;
function Yr(e, t) {
  if (qr(e, t)) return !0;
  if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) if (!Kr.call(t, n[r]) || !qr(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function Qr(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xr(e, t) {
  var n,
    r = Qr(e);
  for (e = 0; r; ) {
    if (3 === r.nodeType) {
      if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Qr(r);
  }
}
function Gr(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || 3 !== e.nodeType) &&
        (t && 3 === t.nodeType
          ? Gr(e, t.parentNode)
          : 'contains' in e
          ? e.contains(t)
          : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
  );
}
function Zr() {
  for (var e = window, t = je(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = 'string' == typeof t.contentWindow.location.href;
    } catch (r) {
      n = !1;
    }
    if (!n) break;
    t = je((e = t.contentWindow).document);
  }
  return t;
}
function Jr(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    (('input' === t &&
      ('text' === e.type ||
        'search' === e.type ||
        'tel' === e.type ||
        'url' === e.type ||
        'password' === e.type)) ||
      'textarea' === t ||
      'true' === e.contentEditable)
  );
}
var eo = X && 'documentMode' in document && 11 >= document.documentMode,
  to = null,
  no = null,
  ro = null,
  oo = !1;
function ao(e, t, n) {
  var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
  oo ||
    null == to ||
    to !== je(r) ||
    ('selectionStart' in (r = to) && Jr(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : (r = {
          anchorNode: (r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()).anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        }),
    (ro && Yr(ro, r)) ||
      ((ro = r),
      0 < (r = xo(no, 'onSelect')).length &&
        ((t = new Zn('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = to))));
}
wn(
  'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
    ' ',
  ),
  0,
),
  wn(
    'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
      ' ',
    ),
    1,
  ),
  wn(xn, 2);
for (
  var io =
      'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
        ' ',
      ),
    lo = 0;
  lo < io.length;
  lo++
)
  bn.set(io[lo], 0);
Q('onMouseEnter', ['mouseout', 'mouseover']),
  Q('onMouseLeave', ['mouseout', 'mouseover']),
  Q('onPointerEnter', ['pointerout', 'pointerover']),
  Q('onPointerLeave', ['pointerout', 'pointerover']),
  Y('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
  Y(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
      ' ',
    ),
  ),
  Y('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
  Y('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
  Y('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
  Y(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
  );
var uo =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  so = new Set('cancel close invalid load scroll toggle'.split(' ').concat(uo));
function co(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n),
    (function (e, t, n, r, o, a, i, l, u) {
      if ((Lt.apply(this, arguments), Tt)) {
        if (!Tt) throw Error(B(198));
        var s = Mt;
        (Tt = !1), (Mt = null), _t || ((_t = !0), (Rt = s));
      }
    })(r, t, void 0, e),
    (e.currentTarget = null);
}
function fo(e, t) {
  t = 0 != (4 & t);
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            u = l.instance,
            s = l.currentTarget;
          if (((l = l.listener), u !== a && o.isPropagationStopped())) break e;
          co(o, l, s), (a = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = (l = r[i]).instance),
            (s = l.currentTarget),
            (l = l.listener),
            u !== a && o.isPropagationStopped())
          )
            break e;
          co(o, l, s), (a = u);
        }
    }
  }
  if (_t) throw ((e = Rt), (_t = !1), (Rt = null), e);
}
function po(e, t) {
  var n = Wo(t),
    r = e + '__bubble';
  n.has(r) || (go(t, e, 2, !1), n.add(r));
}
var mo = '_reactListening' + Math.random().toString(36).slice(2);
function ho(e) {
  e[mo] ||
    ((e[mo] = !0),
    q.forEach(function (t) {
      so.has(t) || vo(t, !1, e, null), vo(t, !0, e, null);
    }));
}
function vo(e, t, n, r) {
  var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
    a = n;
  if (
    ('selectionchange' === e && 9 !== n.nodeType && (a = n.ownerDocument),
    null !== r && !t && so.has(e))
  ) {
    if ('scroll' !== e) return;
    (o |= 2), (a = r);
  }
  var i = Wo(a),
    l = e + '__' + (t ? 'capture' : 'bubble');
  i.has(l) || (t && (o |= 4), go(a, e, o, t), i.add(l));
}
function go(e, t, n, r) {
  var o = bn.get(t);
  switch (void 0 === o ? 2 : o) {
    case 0:
      o = In;
      break;
    case 1:
      o = jn;
      break;
    default:
      o = zn;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Pt || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (o = !0),
    r
      ? void 0 !== o
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : void 0 !== o
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function yo(e, t, n, r, o) {
  var a = r;
  if (0 == (1 & t) && 0 == (2 & t) && null !== r)
    e: for (;;) {
      if (null === r) return;
      var i = r.tag;
      if (3 === i || 4 === i) {
        var l = r.stateNode.containerInfo;
        if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
        if (4 === i)
          for (i = r.return; null !== i; ) {
            var u = i.tag;
            if (
              (3 === u || 4 === u) &&
              ((u = i.stateNode.containerInfo) === o || (8 === u.nodeType && u.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; null !== l; ) {
          if (null === (i = Do(l))) return;
          if (5 === (u = i.tag) || 6 === u) {
            r = a = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  !(function (e, t, n) {
    if (kt) return e(t, n);
    kt = !0;
    try {
      wt(e, t, n);
    } finally {
      (kt = !1), Ct();
    }
  })(function () {
    var r = a,
      o = ft(n),
      i = [];
    e: {
      var l = yn.get(e);
      if (void 0 !== l) {
        var u = Zn,
          s = e;
        switch (e) {
          case 'keypress':
            if (0 === $n(n)) break e;
          case 'keydown':
          case 'keyup':
            u = pr;
            break;
          case 'focusin':
            (s = 'focus'), (u = or);
            break;
          case 'focusout':
            (s = 'blur'), (u = or);
            break;
          case 'beforeblur':
          case 'afterblur':
            u = or;
            break;
          case 'click':
            if (2 === n.button) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            u = nr;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            u = rr;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            u = hr;
            break;
          case mn:
          case hn:
          case vn:
            u = ar;
            break;
          case gn:
            u = vr;
            break;
          case 'scroll':
            u = er;
            break;
          case 'wheel':
            u = gr;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            u = ir;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            u = mr;
        }
        var c = 0 != (4 & t),
          f = !c && 'scroll' === e,
          d = c ? (null !== l ? l + 'Capture' : null) : l;
        c = [];
        for (var p, m = r; null !== m; ) {
          var h = (p = m).stateNode;
          if (
            (5 === p.tag &&
              null !== h &&
              ((p = h), null !== d && null != (h = St(m, d)) && c.push(bo(m, h, p))),
            f)
          )
            break;
          m = m.return;
        }
        0 < c.length && ((l = new u(l, s, null, n, o)), i.push({ event: l, listeners: c }));
      }
    }
    if (0 == (7 & t)) {
      if (
        ((u = 'mouseout' === e || 'pointerout' === e),
        (!(l = 'mouseover' === e || 'pointerover' === e) ||
          0 != (16 & t) ||
          !(s = n.relatedTarget || n.fromElement) ||
          (!Do(s) && !s[jo])) &&
          (u || l) &&
          ((l =
            o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window),
          u
            ? ((u = r),
              null !== (s = (s = n.relatedTarget || n.toElement) ? Do(s) : null) &&
                (s !== (f = At(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                (s = null))
            : ((u = null), (s = r)),
          u !== s))
      ) {
        if (
          ((c = nr),
          (h = 'onMouseLeave'),
          (d = 'onMouseEnter'),
          (m = 'mouse'),
          ('pointerout' !== e && 'pointerover' !== e) ||
            ((c = mr), (h = 'onPointerLeave'), (d = 'onPointerEnter'), (m = 'pointer')),
          (f = null == u ? l : Uo(u)),
          (p = null == s ? l : Uo(s)),
          ((l = new c(h, m + 'leave', u, n, o)).target = f),
          (l.relatedTarget = p),
          (h = null),
          Do(o) === r &&
            (((c = new c(d, m + 'enter', s, n, o)).target = p), (c.relatedTarget = f), (h = c)),
          (f = h),
          u && s)
        )
          e: {
            for (d = s, m = 0, p = c = u; p; p = wo(p)) m++;
            for (p = 0, h = d; h; h = wo(h)) p++;
            for (; 0 < m - p; ) (c = wo(c)), m--;
            for (; 0 < p - m; ) (d = wo(d)), p--;
            for (; m--; ) {
              if (c === d || (null !== d && c === d.alternate)) break e;
              (c = wo(c)), (d = wo(d));
            }
            c = null;
          }
        else c = null;
        null !== u && Eo(i, l, u, c, !1), null !== s && null !== f && Eo(i, f, s, c, !0);
      }
      if (
        'select' === (u = (l = r ? Uo(r) : window).nodeName && l.nodeName.toLowerCase()) ||
        ('input' === u && 'file' === l.type)
      )
        var v = Ar;
      else if (Tr(l))
        if (Ir) v = Br;
        else {
          v = Wr;
          var g = Hr;
        }
      else
        (u = l.nodeName) &&
          'input' === u.toLowerCase() &&
          ('checkbox' === l.type || 'radio' === l.type) &&
          (v = $r);
      switch (
        (v && (v = v(e, r))
          ? Mr(i, v, n, o)
          : (g && g(e, l, r),
            'focusout' === e &&
              (g = l._wrapperState) &&
              g.controlled &&
              'number' === l.type &&
              We(l, 'number', l.value)),
        (g = r ? Uo(r) : window),
        e)
      ) {
        case 'focusin':
          (Tr(g) || 'true' === g.contentEditable) && ((to = g), (no = r), (ro = null));
          break;
        case 'focusout':
          ro = no = to = null;
          break;
        case 'mousedown':
          oo = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (oo = !1), ao(i, n, o);
          break;
        case 'selectionchange':
          if (eo) break;
        case 'keydown':
        case 'keyup':
          ao(i, n, o);
      }
      var y;
      if (br)
        e: {
          switch (e) {
            case 'compositionstart':
              var b = 'onCompositionStart';
              break e;
            case 'compositionend':
              b = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              b = 'onCompositionUpdate';
              break e;
          }
          b = void 0;
        }
      else
        Nr
          ? Sr(e, n) && (b = 'onCompositionEnd')
          : 'keydown' === e && 229 === n.keyCode && (b = 'onCompositionStart');
      b &&
        (Er &&
          'ko' !== n.locale &&
          (Nr || 'onCompositionStart' !== b
            ? 'onCompositionEnd' === b && Nr && (y = Wn())
            : ((Un = 'value' in (Vn = o) ? Vn.value : Vn.textContent), (Nr = !0))),
        0 < (g = xo(r, b)).length &&
          ((b = new lr(b, e, null, n, o)),
          i.push({ event: b, listeners: g }),
          y ? (b.data = y) : null !== (y = Pr(n)) && (b.data = y))),
        (y = wr
          ? (function (e, t) {
              switch (e) {
                case 'compositionend':
                  return Pr(t);
                case 'keypress':
                  return 32 !== t.which ? null : ((Cr = !0), kr);
                case 'textInput':
                  return (e = t.data) === kr && Cr ? null : e;
                default:
                  return null;
              }
            })(e, n)
          : (function (e, t) {
              if (Nr)
                return 'compositionend' === e || (!br && Sr(e, t))
                  ? ((e = Wn()), (Hn = Un = Vn = null), (Nr = !1), e)
                  : null;
              switch (e) {
                case 'paste':
                  return null;
                case 'keypress':
                  if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                  }
                  return null;
                case 'compositionend':
                  return Er && 'ko' !== t.locale ? null : t.data;
                default:
                  return null;
              }
            })(e, n)) &&
          0 < (r = xo(r, 'onBeforeInput')).length &&
          ((o = new lr('onBeforeInput', 'beforeinput', null, n, o)),
          i.push({ event: o, listeners: r }),
          (o.data = y));
    }
    fo(i, t);
  });
}
function bo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xo(e, t) {
  for (var n = t + 'Capture', r = []; null !== e; ) {
    var o = e,
      a = o.stateNode;
    5 === o.tag &&
      null !== a &&
      ((o = a),
      null != (a = St(e, n)) && r.unshift(bo(e, a, o)),
      null != (a = St(e, t)) && r.push(bo(e, a, o))),
      (e = e.return);
  }
  return r;
}
function wo(e) {
  if (null === e) return null;
  do {
    e = e.return;
  } while (e && 5 !== e.tag);
  return e || null;
}
function Eo(e, t, n, r, o) {
  for (var a = t._reactName, i = []; null !== n && n !== r; ) {
    var l = n,
      u = l.alternate,
      s = l.stateNode;
    if (null !== u && u === r) break;
    5 === l.tag &&
      null !== s &&
      ((l = s),
      o
        ? null != (u = St(n, a)) && i.unshift(bo(n, u, l))
        : o || (null != (u = St(n, a)) && i.push(bo(n, u, l)))),
      (n = n.return);
  }
  0 !== i.length && e.push({ event: t, listeners: i });
}
function ko() {}
var Co = null,
  So = null;
function Po(e, t) {
  switch (e) {
    case 'button':
    case 'input':
    case 'select':
    case 'textarea':
      return !!t.autoFocus;
  }
  return !1;
}
function No(e, t) {
  return (
    'textarea' === e ||
    'option' === e ||
    'noscript' === e ||
    'string' == typeof t.children ||
    'number' == typeof t.children ||
    ('object' == typeof t.dangerouslySetInnerHTML &&
      null !== t.dangerouslySetInnerHTML &&
      null != t.dangerouslySetInnerHTML.__html)
  );
}
var Oo = 'function' == typeof setTimeout ? setTimeout : void 0,
  To = 'function' == typeof clearTimeout ? clearTimeout : void 0;
function Mo(e) {
  1 === e.nodeType
    ? (e.textContent = '')
    : 9 === e.nodeType && null != (e = e.body) && (e.textContent = '');
}
function _o(e) {
  for (; null != e; e = e.nextSibling) {
    var t = e.nodeType;
    if (1 === t || 3 === t) break;
  }
  return e;
}
function Ro(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (8 === e.nodeType) {
      var n = e.data;
      if ('$' === n || '$!' === n || '$?' === n) {
        if (0 === t) return e;
        t--;
      } else '/$' === n && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Fo = 0;
var Lo = Math.random().toString(36).slice(2),
  Ao = '__reactFiber$' + Lo,
  Io = '__reactProps$' + Lo,
  jo = '__reactContainer$' + Lo,
  zo = '__reactEvents$' + Lo;
function Do(e) {
  var t = e[Ao];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[jo] || n[Ao])) {
      if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
        for (e = Ro(e); null !== e; ) {
          if ((n = e[Ao])) return n;
          e = Ro(e);
        }
      return t;
    }
    n = (e = n).parentNode;
  }
  return null;
}
function Vo(e) {
  return !(e = e[Ao] || e[jo]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
    ? null
    : e;
}
function Uo(e) {
  if (5 === e.tag || 6 === e.tag) return e.stateNode;
  throw Error(B(33));
}
function Ho(e) {
  return e[Io] || null;
}
function Wo(e) {
  var t = e[zo];
  return void 0 === t && (t = e[zo] = new Set()), t;
}
var $o = [],
  Bo = -1;
function qo(e) {
  return { current: e };
}
function Ko(e) {
  0 > Bo || ((e.current = $o[Bo]), ($o[Bo] = null), Bo--);
}
function Yo(e, t) {
  Bo++, ($o[Bo] = e.current), (e.current = t);
}
var Qo = {},
  Xo = qo(Qo),
  Go = qo(!1),
  Zo = Qo;
function Jo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Qo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o,
    a = {};
  for (o in n) a[o] = t[o];
  return (
    r &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    a
  );
}
function ea(e) {
  return null != (e = e.childContextTypes);
}
function ta() {
  Ko(Go), Ko(Xo);
}
function na(e, t, n) {
  if (Xo.current !== Qo) throw Error(B(168));
  Yo(Xo, t), Yo(Go, n);
}
function ra(e, t, n) {
  var r = e.stateNode;
  if (((e = t.childContextTypes), 'function' != typeof r.getChildContext)) return n;
  for (var o in (r = r.getChildContext()))
    if (!(o in e)) throw Error(B(108, Re(t) || 'Unknown', o));
  return W({}, n, r);
}
function oa(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Qo),
    (Zo = Xo.current),
    Yo(Xo, e),
    Yo(Go, Go.current),
    !0
  );
}
function aa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(B(169));
  n
    ? ((e = ra(e, t, Zo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ko(Go),
      Ko(Xo),
      Yo(Xo, e))
    : Ko(Go),
    Yo(Go, n);
}
var ia = null,
  la = null,
  ua = $.unstable_runWithPriority,
  sa = $.unstable_scheduleCallback,
  ca = $.unstable_cancelCallback,
  fa = $.unstable_shouldYield,
  da = $.unstable_requestPaint,
  pa = $.unstable_now,
  ma = $.unstable_getCurrentPriorityLevel,
  ha = $.unstable_ImmediatePriority,
  va = $.unstable_UserBlockingPriority,
  ga = $.unstable_NormalPriority,
  ya = $.unstable_LowPriority,
  ba = $.unstable_IdlePriority,
  xa = {},
  wa = void 0 !== da ? da : function () {},
  Ea = null,
  ka = null,
  Ca = !1,
  Sa = pa(),
  Pa =
    1e4 > Sa
      ? pa
      : function () {
          return pa() - Sa;
        };
function Na() {
  switch (ma()) {
    case ha:
      return 99;
    case va:
      return 98;
    case ga:
      return 97;
    case ya:
      return 96;
    case ba:
      return 95;
    default:
      throw Error(B(332));
  }
}
function Oa(e) {
  switch (e) {
    case 99:
      return ha;
    case 98:
      return va;
    case 97:
      return ga;
    case 96:
      return ya;
    case 95:
      return ba;
    default:
      throw Error(B(332));
  }
}
function Ta(e, t) {
  return (e = Oa(e)), ua(e, t);
}
function Ma(e, t, n) {
  return (e = Oa(e)), sa(e, t, n);
}
function _a() {
  if (null !== ka) {
    var e = ka;
    (ka = null), ca(e);
  }
  Ra();
}
function Ra() {
  if (!Ca && null !== Ea) {
    Ca = !0;
    var e = 0;
    try {
      var t = Ea;
      Ta(99, function () {
        for (; e < t.length; e++) {
          var n = t[e];
          do {
            n = n(!0);
          } while (null !== n);
        }
      }),
        (Ea = null);
    } catch (n) {
      throw (null !== Ea && (Ea = Ea.slice(e + 1)), sa(ha, _a), n);
    } finally {
      Ca = !1;
    }
  }
}
var Fa = ie.ReactCurrentBatchConfig;
function La(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = W({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Aa = qo(null),
  Ia = null,
  ja = null,
  za = null;
function Da() {
  za = ja = Ia = null;
}
function Va(e) {
  var t = Aa.current;
  Ko(Aa), (e.type._context._currentValue = t);
}
function Ua(e, t) {
  for (; null !== e; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (null === n || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
    e = e.return;
  }
}
function Ha(e, t) {
  (Ia = e),
    (za = ja = null),
    null !== (e = e.dependencies) &&
      null !== e.firstContext &&
      (0 != (e.lanes & t) && (bl = !0), (e.firstContext = null));
}
function Wa(e, t) {
  if (za !== e && !1 !== t && 0 !== t)
    if (
      (('number' == typeof t && 1073741823 !== t) || ((za = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      null === ja)
    ) {
      if (null === Ia) throw Error(B(308));
      (ja = t), (Ia.dependencies = { lanes: 0, firstContext: t, responders: null });
    } else ja = ja.next = t;
  return e._currentValue;
}
var $a = !1;
function Ba(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  };
}
function qa(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ka(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ya(e, t) {
  if (null !== (e = e.updateQueue)) {
    var n = (e = e.shared).pending;
    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
  }
}
function Qa(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (null !== r && n === (r = r.updateQueue)) {
    var o = null,
      a = null;
    if (null !== (n = n.firstBaseUpdate)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
      } while (null !== n);
      null === a ? (o = a = t) : (a = a.next = t);
    } else o = a = t;
    return (
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: a,
        shared: r.shared,
        effects: r.effects,
      }),
      void (e.updateQueue = n)
    );
  }
  null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Xa(e, t, n, r) {
  var o = e.updateQueue;
  $a = !1;
  var a = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    l = o.shared.pending;
  if (null !== l) {
    o.shared.pending = null;
    var u = l,
      s = u.next;
    (u.next = null), null === i ? (a = s) : (i.next = s), (i = u);
    var c = e.alternate;
    if (null !== c) {
      var f = (c = c.updateQueue).lastBaseUpdate;
      f !== i && (null === f ? (c.firstBaseUpdate = s) : (f.next = s), (c.lastBaseUpdate = u));
    }
  }
  if (null !== a) {
    for (f = o.baseState, i = 0, c = s = u = null; ; ) {
      l = a.lane;
      var d = a.eventTime;
      if ((r & l) === l) {
        null !== c &&
          (c = c.next =
            {
              eventTime: d,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var p = e,
            m = a;
          switch (((l = t), (d = n), m.tag)) {
            case 1:
              if ('function' == typeof (p = m.payload)) {
                f = p.call(d, f, l);
                break e;
              }
              f = p;
              break e;
            case 3:
              p.flags = (-4097 & p.flags) | 64;
            case 0:
              if (null == (l = 'function' == typeof (p = m.payload) ? p.call(d, f, l) : p)) break e;
              f = W({}, f, l);
              break e;
            case 2:
              $a = !0;
          }
        }
        null !== a.callback &&
          ((e.flags |= 32), null === (l = o.effects) ? (o.effects = [a]) : l.push(a));
      } else
        (d = {
          eventTime: d,
          lane: l,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          null === c ? ((s = c = d), (u = f)) : (c = c.next = d),
          (i |= l);
      if (null === (a = a.next)) {
        if (null === (l = o.shared.pending)) break;
        (a = l.next), (l.next = null), (o.lastBaseUpdate = l), (o.shared.pending = null);
      }
    }
    null === c && (u = f),
      (o.baseState = u),
      (o.firstBaseUpdate = s),
      (o.lastBaseUpdate = c),
      (ku |= i),
      (e.lanes = i),
      (e.memoizedState = f);
  }
}
function Ga(e, t, n) {
  if (((e = t.effects), (t.effects = null), null !== e))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (null !== o) {
        if (((r.callback = null), (r = n), 'function' != typeof o)) throw Error(B(191, o));
        o.call(r);
      }
    }
}
var Za = new H.Component().refs;
function Ja(e, t, n, r) {
  (n = null == (n = n(r, (t = e.memoizedState))) ? t : W({}, t, n)),
    (e.memoizedState = n),
    0 === e.lanes && (e.updateQueue.baseState = n);
}
var ei = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && At(e) === e;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Yu(),
      o = Qu(e),
      a = Ka(r, o);
    (a.payload = t), null != n && (a.callback = n), Ya(e, a), Xu(e, o, r);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Yu(),
      o = Qu(e),
      a = Ka(r, o);
    (a.tag = 1), (a.payload = t), null != n && (a.callback = n), Ya(e, a), Xu(e, o, r);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Yu(),
      r = Qu(e),
      o = Ka(n, r);
    (o.tag = 2), null != t && (o.callback = t), Ya(e, o), Xu(e, r, n);
  },
};
function ti(e, t, n, r, o, a, i) {
  return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
    ? e.shouldComponentUpdate(r, a, i)
    : !t.prototype || !t.prototype.isPureReactComponent || !Yr(n, r) || !Yr(o, a);
}
function ni(e, t, n) {
  var r = !1,
    o = Qo,
    a = t.contextType;
  return (
    'object' == typeof a && null !== a
      ? (a = Wa(a))
      : ((o = ea(t) ? Zo : Xo.current), (a = (r = null != (r = t.contextTypes)) ? Jo(e, o) : Qo)),
    (t = new t(n, a)),
    (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
    (t.updater = ei),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function ri(e, t, n, r) {
  (e = t.state),
    'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
    'function' == typeof t.UNSAFE_componentWillReceiveProps &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ei.enqueueReplaceState(t, t.state, null);
}
function oi(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Za), Ba(e);
  var a = t.contextType;
  'object' == typeof a && null !== a
    ? (o.context = Wa(a))
    : ((a = ea(t) ? Zo : Xo.current), (o.context = Jo(e, a))),
    Xa(e, n, o, r),
    (o.state = e.memoizedState),
    'function' == typeof (a = t.getDerivedStateFromProps) &&
      (Ja(e, t, a, n), (o.state = e.memoizedState)),
    'function' == typeof t.getDerivedStateFromProps ||
      'function' == typeof o.getSnapshotBeforeUpdate ||
      ('function' != typeof o.UNSAFE_componentWillMount &&
        'function' != typeof o.componentWillMount) ||
      ((t = o.state),
      'function' == typeof o.componentWillMount && o.componentWillMount(),
      'function' == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
      t !== o.state && ei.enqueueReplaceState(o, o.state, null),
      Xa(e, n, o, r),
      (o.state = e.memoizedState)),
    'function' == typeof o.componentDidMount && (e.flags |= 4);
}
var ai = Array.isArray;
function ii(e, t, n) {
  if (null !== (e = n.ref) && 'function' != typeof e && 'object' != typeof e) {
    if (n._owner) {
      if ((n = n._owner)) {
        if (1 !== n.tag) throw Error(B(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(B(147, e));
      var o = '' + e;
      return null !== t && null !== t.ref && 'function' == typeof t.ref && t.ref._stringRef === o
        ? t.ref
        : (((t = function (e) {
            var t = r.refs;
            t === Za && (t = r.refs = {}), null === e ? delete t[o] : (t[o] = e);
          })._stringRef = o),
          t);
    }
    if ('string' != typeof e) throw Error(B(284));
    if (!n._owner) throw Error(B(290, e));
  }
  return e;
}
function li(e, t) {
  if ('textarea' !== e.type)
    throw Error(
      B(
        31,
        '[object Object]' === Object.prototype.toString.call(t)
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : t,
      ),
    );
}
function ui(e) {
  function t(t, n) {
    if (e) {
      var r = t.lastEffect;
      null !== r ? ((r.nextEffect = n), (t.lastEffect = n)) : (t.firstEffect = t.lastEffect = n),
        (n.nextEffect = null),
        (n.flags = 8);
    }
  }
  function n(n, r) {
    if (!e) return null;
    for (; null !== r; ) t(n, r), (r = r.sibling);
    return null;
  }
  function r(e, t) {
    for (e = new Map(); null !== t; )
      null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
    return e;
  }
  function o(e, t) {
    return ((e = Os(e, t)).index = 0), (e.sibling = null), e;
  }
  function a(t, n, r) {
    return (
      (t.index = r),
      e
        ? null !== (r = t.alternate)
          ? (r = r.index) < n
            ? ((t.flags = 2), n)
            : r
          : ((t.flags = 2), n)
        : n
    );
  }
  function i(t) {
    return e && null === t.alternate && (t.flags = 2), t;
  }
  function l(e, t, n, r) {
    return null === t || 6 !== t.tag
      ? (((t = Rs(n, e.mode, r)).return = e), t)
      : (((t = o(t, n)).return = e), t);
  }
  function u(e, t, n, r) {
    return null !== t && t.elementType === n.type
      ? (((r = o(t, n.props)).ref = ii(e, t, n)), (r.return = e), r)
      : (((r = Ts(n.type, n.key, n.props, null, e.mode, r)).ref = ii(e, t, n)), (r.return = e), r);
  }
  function s(e, t, n, r) {
    return null === t ||
      4 !== t.tag ||
      t.stateNode.containerInfo !== n.containerInfo ||
      t.stateNode.implementation !== n.implementation
      ? (((t = Fs(n, e.mode, r)).return = e), t)
      : (((t = o(t, n.children || [])).return = e), t);
  }
  function c(e, t, n, r, a) {
    return null === t || 7 !== t.tag
      ? (((t = Ms(n, e.mode, r, a)).return = e), t)
      : (((t = o(t, n)).return = e), t);
  }
  function f(e, t, n) {
    if ('string' == typeof t || 'number' == typeof t)
      return ((t = Rs('' + t, e.mode, n)).return = e), t;
    if ('object' == typeof t && null !== t) {
      switch (t.$$typeof) {
        case le:
          return (
            ((n = Ts(t.type, t.key, t.props, null, e.mode, n)).ref = ii(e, null, t)),
            (n.return = e),
            n
          );
        case ue:
          return ((t = Fs(t, e.mode, n)).return = e), t;
      }
      if (ai(t) || Ne(t)) return ((t = Ms(t, e.mode, n, null)).return = e), t;
      li(e, t);
    }
    return null;
  }
  function d(e, t, n, r) {
    var o = null !== t ? t.key : null;
    if ('string' == typeof n || 'number' == typeof n) return null !== o ? null : l(e, t, '' + n, r);
    if ('object' == typeof n && null !== n) {
      switch (n.$$typeof) {
        case le:
          return n.key === o
            ? n.type === se
              ? c(e, t, n.props.children, r, o)
              : u(e, t, n, r)
            : null;
        case ue:
          return n.key === o ? s(e, t, n, r) : null;
      }
      if (ai(n) || Ne(n)) return null !== o ? null : c(e, t, n, r, null);
      li(e, n);
    }
    return null;
  }
  function p(e, t, n, r, o) {
    if ('string' == typeof r || 'number' == typeof r)
      return l(t, (e = e.get(n) || null), '' + r, o);
    if ('object' == typeof r && null !== r) {
      switch (r.$$typeof) {
        case le:
          return (
            (e = e.get(null === r.key ? n : r.key) || null),
            r.type === se ? c(t, e, r.props.children, o, r.key) : u(t, e, r, o)
          );
        case ue:
          return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
      }
      if (ai(r) || Ne(r)) return c(t, (e = e.get(n) || null), r, o, null);
      li(t, r);
    }
    return null;
  }
  return function (l, u, s, c) {
    var m = 'object' == typeof s && null !== s && s.type === se && null === s.key;
    m && (s = s.props.children);
    var h = 'object' == typeof s && null !== s;
    if (h)
      switch (s.$$typeof) {
        case le:
          e: {
            for (h = s.key, m = u; null !== m; ) {
              if (m.key === h) {
                switch (m.tag) {
                  case 7:
                    if (s.type === se) {
                      n(l, m.sibling), ((u = o(m, s.props.children)).return = l), (l = u);
                      break e;
                    }
                    break;
                  default:
                    if (m.elementType === s.type) {
                      n(l, m.sibling),
                        ((u = o(m, s.props)).ref = ii(l, m, s)),
                        (u.return = l),
                        (l = u);
                      break e;
                    }
                }
                n(l, m);
                break;
              }
              t(l, m), (m = m.sibling);
            }
            s.type === se
              ? (((u = Ms(s.props.children, l.mode, c, s.key)).return = l), (l = u))
              : (((c = Ts(s.type, s.key, s.props, null, l.mode, c)).ref = ii(l, u, s)),
                (c.return = l),
                (l = c));
          }
          return i(l);
        case ue:
          e: {
            for (m = s.key; null !== u; ) {
              if (u.key === m) {
                if (
                  4 === u.tag &&
                  u.stateNode.containerInfo === s.containerInfo &&
                  u.stateNode.implementation === s.implementation
                ) {
                  n(l, u.sibling), ((u = o(u, s.children || [])).return = l), (l = u);
                  break e;
                }
                n(l, u);
                break;
              }
              t(l, u), (u = u.sibling);
            }
            ((u = Fs(s, l.mode, c)).return = l), (l = u);
          }
          return i(l);
      }
    if ('string' == typeof s || 'number' == typeof s)
      return (
        (s = '' + s),
        null !== u && 6 === u.tag
          ? (n(l, u.sibling), ((u = o(u, s)).return = l), (l = u))
          : (n(l, u), ((u = Rs(s, l.mode, c)).return = l), (l = u)),
        i(l)
      );
    if (ai(s))
      return (function (o, i, l, u) {
        for (
          var s = null, c = null, m = i, h = (i = 0), v = null;
          null !== m && h < l.length;
          h++
        ) {
          m.index > h ? ((v = m), (m = null)) : (v = m.sibling);
          var g = d(o, m, l[h], u);
          if (null === g) {
            null === m && (m = v);
            break;
          }
          e && m && null === g.alternate && t(o, m),
            (i = a(g, i, h)),
            null === c ? (s = g) : (c.sibling = g),
            (c = g),
            (m = v);
        }
        if (h === l.length) return n(o, m), s;
        if (null === m) {
          for (; h < l.length; h++)
            null !== (m = f(o, l[h], u)) &&
              ((i = a(m, i, h)), null === c ? (s = m) : (c.sibling = m), (c = m));
          return s;
        }
        for (m = r(o, m); h < l.length; h++)
          null !== (v = p(m, o, h, l[h], u)) &&
            (e && null !== v.alternate && m.delete(null === v.key ? h : v.key),
            (i = a(v, i, h)),
            null === c ? (s = v) : (c.sibling = v),
            (c = v));
        return (
          e &&
            m.forEach(function (e) {
              return t(o, e);
            }),
          s
        );
      })(l, u, s, c);
    if (Ne(s))
      return (function (o, i, l, u) {
        var s = Ne(l);
        if ('function' != typeof s) throw Error(B(150));
        if (null == (l = s.call(l))) throw Error(B(151));
        for (
          var c = (s = null), m = i, h = (i = 0), v = null, g = l.next();
          null !== m && !g.done;
          h++, g = l.next()
        ) {
          m.index > h ? ((v = m), (m = null)) : (v = m.sibling);
          var y = d(o, m, g.value, u);
          if (null === y) {
            null === m && (m = v);
            break;
          }
          e && m && null === y.alternate && t(o, m),
            (i = a(y, i, h)),
            null === c ? (s = y) : (c.sibling = y),
            (c = y),
            (m = v);
        }
        if (g.done) return n(o, m), s;
        if (null === m) {
          for (; !g.done; h++, g = l.next())
            null !== (g = f(o, g.value, u)) &&
              ((i = a(g, i, h)), null === c ? (s = g) : (c.sibling = g), (c = g));
          return s;
        }
        for (m = r(o, m); !g.done; h++, g = l.next())
          null !== (g = p(m, o, h, g.value, u)) &&
            (e && null !== g.alternate && m.delete(null === g.key ? h : g.key),
            (i = a(g, i, h)),
            null === c ? (s = g) : (c.sibling = g),
            (c = g));
        return (
          e &&
            m.forEach(function (e) {
              return t(o, e);
            }),
          s
        );
      })(l, u, s, c);
    if ((h && li(l, s), void 0 === s && !m))
      switch (l.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(B(152, Re(l.type) || 'Component'));
      }
    return n(l, u);
  };
}
var si = ui(!0),
  ci = ui(!1),
  fi = {},
  di = qo(fi),
  pi = qo(fi),
  mi = qo(fi);
function hi(e) {
  if (e === fi) throw Error(B(174));
  return e;
}
function vi(e, t) {
  switch ((Yo(mi, t), Yo(pi, e), Yo(di, fi), (e = t.nodeType))) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Je(null, '');
      break;
    default:
      t = Je((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
  }
  Ko(di), Yo(di, t);
}
function gi() {
  Ko(di), Ko(pi), Ko(mi);
}
function yi(e) {
  hi(mi.current);
  var t = hi(di.current),
    n = Je(t, e.type);
  t !== n && (Yo(pi, e), Yo(di, n));
}
function bi(e) {
  pi.current === e && (Ko(di), Ko(pi));
}
var xi = qo(0);
function wi(e) {
  for (var t = e; null !== t; ) {
    if (13 === t.tag) {
      var n = t.memoizedState;
      if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data))
        return t;
    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
      if (0 != (64 & t.flags)) return t;
    } else if (null !== t.child) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; null === t.sibling; ) {
      if (null === t.return || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ei = null,
  ki = null,
  Ci = !1;
function Si(e, t) {
  var n = Ps(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.type = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (n.flags = 8),
    null !== e.lastEffect
      ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
      : (e.firstEffect = e.lastEffect = n);
}
function Pi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        null !==
          (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
        ((e.stateNode = t), !0)
      );
    case 6:
      return (
        null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
        ((e.stateNode = t), !0)
      );
    case 13:
    default:
      return !1;
  }
}
function Ni(e) {
  if (Ci) {
    var t = ki;
    if (t) {
      var n = t;
      if (!Pi(e, t)) {
        if (!(t = _o(n.nextSibling)) || !Pi(e, t))
          return (e.flags = (-1025 & e.flags) | 2), (Ci = !1), void (Ei = e);
        Si(Ei, n);
      }
      (Ei = e), (ki = _o(t.firstChild));
    } else (e.flags = (-1025 & e.flags) | 2), (Ci = !1), (Ei = e);
  }
}
function Oi(e) {
  for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
  Ei = e;
}
function Ti(e) {
  if (e !== Ei) return !1;
  if (!Ci) return Oi(e), (Ci = !0), !1;
  var t = e.type;
  if (5 !== e.tag || ('head' !== t && 'body' !== t && !No(t, e.memoizedProps)))
    for (t = ki; t; ) Si(e, t), (t = _o(t.nextSibling));
  if ((Oi(e), 13 === e.tag)) {
    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(B(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ('/$' === n) {
            if (0 === t) {
              ki = _o(e.nextSibling);
              break e;
            }
            t--;
          } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
        }
        e = e.nextSibling;
      }
      ki = null;
    }
  } else ki = Ei ? _o(e.stateNode.nextSibling) : null;
  return !0;
}
function Mi() {
  (ki = Ei = null), (Ci = !1);
}
var _i = [];
function Ri() {
  for (var e = 0; e < _i.length; e++) _i[e]._workInProgressVersionPrimary = null;
  _i.length = 0;
}
var Fi = ie.ReactCurrentDispatcher,
  Li = ie.ReactCurrentBatchConfig,
  Ai = 0,
  Ii = null,
  ji = null,
  zi = null,
  Di = !1,
  Vi = !1;
function Ui() {
  throw Error(B(321));
}
function Hi(e, t) {
  if (null === t) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!qr(e[n], t[n])) return !1;
  return !0;
}
function Wi(e, t, n, r, o, a) {
  if (
    ((Ai = a),
    (Ii = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fi.current = null === e || null === e.memoizedState ? hl : vl),
    (e = n(r, o)),
    Vi)
  ) {
    a = 0;
    do {
      if (((Vi = !1), !(25 > a))) throw Error(B(301));
      (a += 1), (zi = ji = null), (t.updateQueue = null), (Fi.current = gl), (e = n(r, o));
    } while (Vi);
  }
  if (
    ((Fi.current = ml),
    (t = null !== ji && null !== ji.next),
    (Ai = 0),
    (zi = ji = Ii = null),
    (Di = !1),
    t)
  )
    throw Error(B(300));
  return e;
}
function $i() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return null === zi ? (Ii.memoizedState = zi = e) : (zi = zi.next = e), zi;
}
function Bi() {
  if (null === ji) {
    var e = Ii.alternate;
    e = null !== e ? e.memoizedState : null;
  } else e = ji.next;
  var t = null === zi ? Ii.memoizedState : zi.next;
  if (null !== t) (zi = t), (ji = e);
  else {
    if (null === e) throw Error(B(310));
    (e = {
      memoizedState: (ji = e).memoizedState,
      baseState: ji.baseState,
      baseQueue: ji.baseQueue,
      queue: ji.queue,
      next: null,
    }),
      null === zi ? (Ii.memoizedState = zi = e) : (zi = zi.next = e);
  }
  return zi;
}
function qi(e, t) {
  return 'function' == typeof t ? t(e) : t;
}
function Ki(e) {
  var t = Bi(),
    n = t.queue;
  if (null === n) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = ji,
    o = r.baseQueue,
    a = n.pending;
  if (null !== a) {
    if (null !== o) {
      var i = o.next;
      (o.next = a.next), (a.next = i);
    }
    (r.baseQueue = o = a), (n.pending = null);
  }
  if (null !== o) {
    (o = o.next), (r = r.baseState);
    var l = (i = a = null),
      u = o;
    do {
      var s = u.lane;
      if ((Ai & s) === s)
        null !== l &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              eagerReducer: u.eagerReducer,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.eagerReducer === e ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: s,
          action: u.action,
          eagerReducer: u.eagerReducer,
          eagerState: u.eagerState,
          next: null,
        };
        null === l ? ((i = l = c), (a = r)) : (l = l.next = c), (Ii.lanes |= s), (ku |= s);
      }
      u = u.next;
    } while (null !== u && u !== o);
    null === l ? (a = r) : (l.next = i),
      qr(r, t.memoizedState) || (bl = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  return [t.memoizedState, n.dispatch];
}
function Yi(e) {
  var t = Bi(),
    n = t.queue;
  if (null === n) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    a = t.memoizedState;
  if (null !== o) {
    n.pending = null;
    var i = (o = o.next);
    do {
      (a = e(a, i.action)), (i = i.next);
    } while (i !== o);
    qr(a, t.memoizedState) || (bl = !0),
      (t.memoizedState = a),
      null === t.baseQueue && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function Qi(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var o = t._workInProgressVersionPrimary;
  if (
    (null !== o
      ? (e = o === r)
      : ((e = e.mutableReadLanes),
        (e = (Ai & e) === e) && ((t._workInProgressVersionPrimary = r), _i.push(t))),
    e)
  )
    return n(t._source);
  throw (_i.push(t), Error(B(350)));
}
function Xi(e, t, n, r) {
  var o = hu;
  if (null === o) throw Error(B(349));
  var a = t._getVersion,
    i = a(t._source),
    l = Fi.current,
    u = l.useState(function () {
      return Qi(o, t, n);
    }),
    s = u[1],
    c = u[0];
  u = zi;
  var f = e.memoizedState,
    d = f.refs,
    p = d.getSnapshot,
    m = f.source;
  f = f.subscribe;
  var h = Ii;
  return (
    (e.memoizedState = { refs: d, source: t, subscribe: r }),
    l.useEffect(
      function () {
        (d.getSnapshot = n), (d.setSnapshot = s);
        var e = a(t._source);
        if (!qr(i, e)) {
          (e = n(t._source)),
            qr(c, e) || (s(e), (e = Qu(h)), (o.mutableReadLanes |= e & o.pendingLanes)),
            (e = o.mutableReadLanes),
            (o.entangledLanes |= e);
          for (var r = o.entanglements, l = e; 0 < l; ) {
            var u = 31 - Mn(l),
              f = 1 << u;
            (r[u] |= e), (l &= ~f);
          }
        }
      },
      [n, t, r],
    ),
    l.useEffect(
      function () {
        return r(t._source, function () {
          var e = d.getSnapshot,
            n = d.setSnapshot;
          try {
            n(e(t._source));
            var r = Qu(h);
            o.mutableReadLanes |= r & o.pendingLanes;
          } catch (a) {
            n(function () {
              throw a;
            });
          }
        });
      },
      [t, r],
    ),
    (qr(p, n) && qr(m, t) && qr(f, r)) ||
      (((e = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: qi,
        lastRenderedState: c,
      }).dispatch = s =
        pl.bind(null, Ii, e)),
      (u.queue = e),
      (u.baseQueue = null),
      (c = Qi(o, t, n)),
      (u.memoizedState = u.baseState = c)),
    c
  );
}
function Gi(e, t, n) {
  return Xi(Bi(), e, t, n);
}
function Zi(e) {
  var t = $i();
  return (
    'function' == typeof e && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = (e = t.queue =
      { pending: null, dispatch: null, lastRenderedReducer: qi, lastRenderedState: e }).dispatch =
      pl.bind(null, Ii, e)),
    [t.memoizedState, e]
  );
}
function Ji(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    null === (t = Ii.updateQueue)
      ? ((t = { lastEffect: null }), (Ii.updateQueue = t), (t.lastEffect = e.next = e))
      : null === (n = t.lastEffect)
      ? (t.lastEffect = e.next = e)
      : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
    e
  );
}
function el(e) {
  return (e = { current: e }), ($i().memoizedState = e);
}
function tl() {
  return Bi().memoizedState;
}
function nl(e, t, n, r) {
  var o = $i();
  (Ii.flags |= e), (o.memoizedState = Ji(1 | t, n, void 0, void 0 === r ? null : r));
}
function rl(e, t, n, r) {
  var o = Bi();
  r = void 0 === r ? null : r;
  var a = void 0;
  if (null !== ji) {
    var i = ji.memoizedState;
    if (((a = i.destroy), null !== r && Hi(r, i.deps))) return void Ji(t, n, a, r);
  }
  (Ii.flags |= e), (o.memoizedState = Ji(1 | t, n, a, r));
}
function ol(e, t) {
  return nl(516, 4, e, t);
}
function al(e, t) {
  return rl(516, 4, e, t);
}
function il(e, t) {
  return rl(4, 2, e, t);
}
function ll(e, t) {
  return 'function' == typeof t
    ? ((e = e()),
      t(e),
      function () {
        t(null);
      })
    : null != t
    ? ((e = e()),
      (t.current = e),
      function () {
        t.current = null;
      })
    : void 0;
}
function ul(e, t, n) {
  return (n = null != n ? n.concat([e]) : null), rl(4, 2, ll.bind(null, t, e), n);
}
function sl() {}
function cl(e, t) {
  var n = Bi();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== r && null !== t && Hi(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function fl(e, t) {
  var n = Bi();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== r && null !== t && Hi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function dl(e, t) {
  var n = Na();
  Ta(98 > n ? 98 : n, function () {
    e(!0);
  }),
    Ta(97 < n ? 97 : n, function () {
      var n = Li.transition;
      Li.transition = 1;
      try {
        e(!1), t();
      } finally {
        Li.transition = n;
      }
    });
}
function pl(e, t, n) {
  var r = Yu(),
    o = Qu(e),
    a = { lane: o, action: n, eagerReducer: null, eagerState: null, next: null },
    i = t.pending;
  if (
    (null === i ? (a.next = a) : ((a.next = i.next), (i.next = a)),
    (t.pending = a),
    (i = e.alternate),
    e === Ii || (null !== i && i === Ii))
  )
    Vi = Di = !0;
  else {
    if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer))
      try {
        var l = t.lastRenderedState,
          u = i(l, n);
        if (((a.eagerReducer = i), (a.eagerState = u), qr(u, l))) return;
      } catch (s) {}
    Xu(e, o, r);
  }
}
var ml = {
    readContext: Wa,
    useCallback: Ui,
    useContext: Ui,
    useEffect: Ui,
    useImperativeHandle: Ui,
    useLayoutEffect: Ui,
    useMemo: Ui,
    useReducer: Ui,
    useRef: Ui,
    useState: Ui,
    useDebugValue: Ui,
    useDeferredValue: Ui,
    useTransition: Ui,
    useMutableSource: Ui,
    useOpaqueIdentifier: Ui,
    unstable_isNewReconciler: !1,
  },
  hl = {
    readContext: Wa,
    useCallback: function (e, t) {
      return ($i().memoizedState = [e, void 0 === t ? null : t]), e;
    },
    useContext: Wa,
    useEffect: ol,
    useImperativeHandle: function (e, t, n) {
      return (n = null != n ? n.concat([e]) : null), nl(4, 2, ll.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return nl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $i();
      return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = $i();
      return (
        (t = void 0 !== n ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = (e = r.queue =
          {
            pending: null,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }).dispatch =
          pl.bind(null, Ii, e)),
        [r.memoizedState, e]
      );
    },
    useRef: el,
    useState: Zi,
    useDebugValue: sl,
    useDeferredValue: function (e) {
      var t = Zi(e),
        n = t[0],
        r = t[1];
      return (
        ol(
          function () {
            var t = Li.transition;
            Li.transition = 1;
            try {
              r(e);
            } finally {
              Li.transition = t;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = Zi(!1),
        t = e[0];
      return el((e = dl.bind(null, e[1]))), [e, t];
    },
    useMutableSource: function (e, t, n) {
      var r = $i();
      return (
        (r.memoizedState = {
          refs: { getSnapshot: t, setSnapshot: null },
          source: e,
          subscribe: n,
        }),
        Xi(r, e, t, n)
      );
    },
    useOpaqueIdentifier: function () {
      if (Ci) {
        var e = !1,
          t = (function (e) {
            return { $$typeof: xe, toString: e, valueOf: e };
          })(function () {
            throw (e || ((e = !0), n('r:' + (Fo++).toString(36))), Error(B(355)));
          }),
          n = Zi(t)[1];
        return (
          0 == (2 & Ii.mode) &&
            ((Ii.flags |= 516),
            Ji(
              5,
              function () {
                n('r:' + (Fo++).toString(36));
              },
              void 0,
              null,
            )),
          t
        );
      }
      return Zi((t = 'r:' + (Fo++).toString(36))), t;
    },
    unstable_isNewReconciler: !1,
  },
  vl = {
    readContext: Wa,
    useCallback: cl,
    useContext: Wa,
    useEffect: al,
    useImperativeHandle: ul,
    useLayoutEffect: il,
    useMemo: fl,
    useReducer: Ki,
    useRef: tl,
    useState: function () {
      return Ki(qi);
    },
    useDebugValue: sl,
    useDeferredValue: function (e) {
      var t = Ki(qi),
        n = t[0],
        r = t[1];
      return (
        al(
          function () {
            var t = Li.transition;
            Li.transition = 1;
            try {
              r(e);
            } finally {
              Li.transition = t;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = Ki(qi)[0];
      return [tl().current, e];
    },
    useMutableSource: Gi,
    useOpaqueIdentifier: function () {
      return Ki(qi)[0];
    },
    unstable_isNewReconciler: !1,
  },
  gl = {
    readContext: Wa,
    useCallback: cl,
    useContext: Wa,
    useEffect: al,
    useImperativeHandle: ul,
    useLayoutEffect: il,
    useMemo: fl,
    useReducer: Yi,
    useRef: tl,
    useState: function () {
      return Yi(qi);
    },
    useDebugValue: sl,
    useDeferredValue: function (e) {
      var t = Yi(qi),
        n = t[0],
        r = t[1];
      return (
        al(
          function () {
            var t = Li.transition;
            Li.transition = 1;
            try {
              r(e);
            } finally {
              Li.transition = t;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = Yi(qi)[0];
      return [tl().current, e];
    },
    useMutableSource: Gi,
    useOpaqueIdentifier: function () {
      return Yi(qi)[0];
    },
    unstable_isNewReconciler: !1,
  },
  yl = ie.ReactCurrentOwner,
  bl = !1;
function xl(e, t, n, r) {
  t.child = null === e ? ci(t, null, n, r) : si(t, e.child, n, r);
}
function wl(e, t, n, r, o) {
  n = n.render;
  var a = t.ref;
  return (
    Ha(t, o),
    (r = Wi(e, t, n, r, a, o)),
    null === e || bl
      ? ((t.flags |= 1), xl(e, t, r, o), t.child)
      : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~o), Ul(e, t, o))
  );
}
function El(e, t, n, r, o, a) {
  if (null === e) {
    var i = n.type;
    return 'function' != typeof i ||
      Ns(i) ||
      void 0 !== i.defaultProps ||
      null !== n.compare ||
      void 0 !== n.defaultProps
      ? (((e = Ts(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
      : ((t.tag = 15), (t.type = i), kl(e, t, i, r, o, a));
  }
  return (
    (i = e.child),
    0 == (o & a) &&
    ((o = i.memoizedProps), (n = null !== (n = n.compare) ? n : Yr)(o, r) && e.ref === t.ref)
      ? Ul(e, t, a)
      : ((t.flags |= 1), ((e = Os(i, r)).ref = t.ref), (e.return = t), (t.child = e))
  );
}
function kl(e, t, n, r, o, a) {
  if (null !== e && Yr(e.memoizedProps, r) && e.ref === t.ref) {
    if (((bl = !1), 0 == (a & o))) return (t.lanes = e.lanes), Ul(e, t, a);
    0 != (16384 & e.flags) && (bl = !0);
  }
  return Pl(e, t, n, r, a);
}
function Cl(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    a = null !== e ? e.memoizedState : null;
  if ('hidden' === r.mode || 'unstable-defer-without-hiding' === r.mode)
    if (0 == (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), os(t, n);
    else {
      if (0 == (1073741824 & n))
        return (
          (e = null !== a ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e }),
          os(t, e),
          null
        );
      (t.memoizedState = { baseLanes: 0 }), os(t, null !== a ? a.baseLanes : n);
    }
  else null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n), os(t, r);
  return xl(e, t, o, n), t.child;
}
function Sl(e, t) {
  var n = t.ref;
  ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.flags |= 128);
}
function Pl(e, t, n, r, o) {
  var a = ea(n) ? Zo : Xo.current;
  return (
    (a = Jo(t, a)),
    Ha(t, o),
    (n = Wi(e, t, n, r, a, o)),
    null === e || bl
      ? ((t.flags |= 1), xl(e, t, n, o), t.child)
      : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~o), Ul(e, t, o))
  );
}
function Nl(e, t, n, r, o) {
  if (ea(n)) {
    var a = !0;
    oa(t);
  } else a = !1;
  if ((Ha(t, o), null === t.stateNode))
    null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      ni(t, n, r),
      oi(t, n, r, o),
      (r = !0);
  else if (null === e) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var u = i.context,
      s = n.contextType;
    'object' == typeof s && null !== s ? (s = Wa(s)) : (s = Jo(t, (s = ea(n) ? Zo : Xo.current)));
    var c = n.getDerivedStateFromProps,
      f = 'function' == typeof c || 'function' == typeof i.getSnapshotBeforeUpdate;
    f ||
      ('function' != typeof i.UNSAFE_componentWillReceiveProps &&
        'function' != typeof i.componentWillReceiveProps) ||
      ((l !== r || u !== s) && ri(t, i, r, s)),
      ($a = !1);
    var d = t.memoizedState;
    (i.state = d),
      Xa(t, r, i, o),
      (u = t.memoizedState),
      l !== r || d !== u || Go.current || $a
        ? ('function' == typeof c && (Ja(t, n, c, r), (u = t.memoizedState)),
          (l = $a || ti(t, n, l, r, d, u, s))
            ? (f ||
                ('function' != typeof i.UNSAFE_componentWillMount &&
                  'function' != typeof i.componentWillMount) ||
                ('function' == typeof i.componentWillMount && i.componentWillMount(),
                'function' == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()),
              'function' == typeof i.componentDidMount && (t.flags |= 4))
            : ('function' == typeof i.componentDidMount && (t.flags |= 4),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = s),
          (r = l))
        : ('function' == typeof i.componentDidMount && (t.flags |= 4), (r = !1));
  } else {
    (i = t.stateNode),
      qa(e, t),
      (l = t.memoizedProps),
      (s = t.type === t.elementType ? l : La(t.type, l)),
      (i.props = s),
      (f = t.pendingProps),
      (d = i.context),
      'object' == typeof (u = n.contextType) && null !== u
        ? (u = Wa(u))
        : (u = Jo(t, (u = ea(n) ? Zo : Xo.current)));
    var p = n.getDerivedStateFromProps;
    (c = 'function' == typeof p || 'function' == typeof i.getSnapshotBeforeUpdate) ||
      ('function' != typeof i.UNSAFE_componentWillReceiveProps &&
        'function' != typeof i.componentWillReceiveProps) ||
      ((l !== f || d !== u) && ri(t, i, r, u)),
      ($a = !1),
      (d = t.memoizedState),
      (i.state = d),
      Xa(t, r, i, o);
    var m = t.memoizedState;
    l !== f || d !== m || Go.current || $a
      ? ('function' == typeof p && (Ja(t, n, p, r), (m = t.memoizedState)),
        (s = $a || ti(t, n, s, r, d, m, u))
          ? (c ||
              ('function' != typeof i.UNSAFE_componentWillUpdate &&
                'function' != typeof i.componentWillUpdate) ||
              ('function' == typeof i.componentWillUpdate && i.componentWillUpdate(r, m, u),
              'function' == typeof i.UNSAFE_componentWillUpdate &&
                i.UNSAFE_componentWillUpdate(r, m, u)),
            'function' == typeof i.componentDidUpdate && (t.flags |= 4),
            'function' == typeof i.getSnapshotBeforeUpdate && (t.flags |= 256))
          : ('function' != typeof i.componentDidUpdate ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            'function' != typeof i.getSnapshotBeforeUpdate ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (i.props = r),
        (i.state = m),
        (i.context = u),
        (r = s))
      : ('function' != typeof i.componentDidUpdate ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        'function' != typeof i.getSnapshotBeforeUpdate ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 256),
        (r = !1));
  }
  return Ol(e, t, n, r, a, o);
}
function Ol(e, t, n, r, o, a) {
  Sl(e, t);
  var i = 0 != (64 & t.flags);
  if (!r && !i) return o && aa(t, n, !1), Ul(e, t, a);
  (r = t.stateNode), (yl.current = t);
  var l = i && 'function' != typeof n.getDerivedStateFromError ? null : r.render();
  return (
    (t.flags |= 1),
    null !== e && i
      ? ((t.child = si(t, e.child, null, a)), (t.child = si(t, null, l, a)))
      : xl(e, t, l, a),
    (t.memoizedState = r.state),
    o && aa(t, n, !0),
    t.child
  );
}
function Tl(e) {
  var t = e.stateNode;
  t.pendingContext
    ? na(0, t.pendingContext, t.pendingContext !== t.context)
    : t.context && na(0, t.context, !1),
    vi(e, t.containerInfo);
}
var Ml,
  _l,
  Rl,
  Fl = { dehydrated: null, retryLane: 0 };
function Ll(e, t, n) {
  var r,
    o = t.pendingProps,
    a = xi.current,
    i = !1;
  return (
    (r = 0 != (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
    r
      ? ((i = !0), (t.flags &= -65))
      : (null !== e && null === e.memoizedState) ||
        void 0 === o.fallback ||
        !0 === o.unstable_avoidThisFallback ||
        (a |= 1),
    Yo(xi, 1 & a),
    null === e
      ? (void 0 !== o.fallback && Ni(t),
        (e = o.children),
        (a = o.fallback),
        i
          ? ((e = Al(t, e, a, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = Fl),
            e)
          : 'number' == typeof o.unstable_expectedLoadTime
          ? ((e = Al(t, e, a, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = Fl),
            (t.lanes = 33554432),
            e)
          : (((n = _s({ mode: 'visible', children: e }, t.mode, n, null)).return = t),
            (t.child = n)))
      : (e.memoizedState,
        i
          ? ((o = jl(e, t, o.children, o.fallback, n)),
            (i = t.child),
            (a = e.child.memoizedState),
            (i.memoizedState = null === a ? { baseLanes: n } : { baseLanes: a.baseLanes | n }),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = Fl),
            o)
          : ((n = Il(e, t, o.children, n)), (t.memoizedState = null), n))
  );
}
function Al(e, t, n, r) {
  var o = e.mode,
    a = e.child;
  return (
    (t = { mode: 'hidden', children: t }),
    0 == (2 & o) && null !== a
      ? ((a.childLanes = 0), (a.pendingProps = t))
      : (a = _s(t, o, 0, null)),
    (n = Ms(n, o, r, null)),
    (a.return = e),
    (n.return = e),
    (a.sibling = n),
    (e.child = a),
    n
  );
}
function Il(e, t, n, r) {
  var o = e.child;
  return (
    (e = o.sibling),
    (n = Os(o, { mode: 'visible', children: n })),
    0 == (2 & t.mode) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    null !== e && ((e.nextEffect = null), (e.flags = 8), (t.firstEffect = t.lastEffect = e)),
    (t.child = n)
  );
}
function jl(e, t, n, r, o) {
  var a = t.mode,
    i = e.child;
  e = i.sibling;
  var l = { mode: 'hidden', children: n };
  return (
    0 == (2 & a) && t.child !== i
      ? (((n = t.child).childLanes = 0),
        (n.pendingProps = l),
        null !== (i = n.lastEffect)
          ? ((t.firstEffect = n.firstEffect), (t.lastEffect = i), (i.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (n = Os(i, l)),
    null !== e ? (r = Os(e, r)) : ((r = Ms(r, a, o, null)).flags |= 2),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  );
}
function zl(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  null !== n && (n.lanes |= t), Ua(e.return, t);
}
function Dl(e, t, n, r, o, a) {
  var i = e.memoizedState;
  null === i
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
        lastEffect: a,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o),
      (i.lastEffect = a));
}
function Vl(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    a = r.tail;
  if ((xl(e, t, r.children, n), 0 != (2 & (r = xi.current)))) (r = (1 & r) | 2), (t.flags |= 64);
  else {
    if (null !== e && 0 != (64 & e.flags))
      e: for (e = t.child; null !== e; ) {
        if (13 === e.tag) null !== e.memoizedState && zl(e, n);
        else if (19 === e.tag) zl(e, n);
        else if (null !== e.child) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; null === e.sibling; ) {
          if (null === e.return || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Yo(xi, r), 0 == (2 & t.mode))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; null !== n; )
          null !== (e = n.alternate) && null === wi(e) && (o = n), (n = n.sibling);
        null === (n = o)
          ? ((o = t.child), (t.child = null))
          : ((o = n.sibling), (n.sibling = null)),
          Dl(t, !1, o, n, a, t.lastEffect);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; null !== o; ) {
          if (null !== (e = o.alternate) && null === wi(e)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Dl(t, !0, n, null, a, t.lastEffect);
        break;
      case 'together':
        Dl(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ul(e, t, n) {
  if ((null !== e && (t.dependencies = e.dependencies), (ku |= t.lanes), 0 != (n & t.childLanes))) {
    if (null !== e && t.child !== e.child) throw Error(B(153));
    if (null !== t.child) {
      for (n = Os((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
        (e = e.sibling), ((n = n.sibling = Os(e, e.pendingProps)).return = t);
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
function Hl(e, t) {
  if (!Ci)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
        null === n ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
        null === r
          ? t || null === e.tail
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Wl(e, t, n) {
  var r = t.pendingProps;
  switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return ea(t.type) && ta(), null;
    case 3:
      return (
        gi(),
        Ko(Go),
        Ko(Xo),
        Ri(),
        (r = t.stateNode).pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (null !== e && null !== e.child) ||
          (Ti(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
        null
      );
    case 5:
      bi(t);
      var o = hi(mi.current);
      if (((n = t.type), null !== e && null != t.stateNode))
        _l(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (null === t.stateNode) throw Error(B(166));
          return null;
        }
        if (((e = hi(di.current)), Ti(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[Ao] = t), (r[Io] = a), n)) {
            case 'dialog':
              po('cancel', r), po('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              po('load', r);
              break;
            case 'video':
            case 'audio':
              for (e = 0; e < uo.length; e++) po(uo[e], r);
              break;
            case 'source':
              po('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              po('error', r), po('load', r);
              break;
            case 'details':
              po('toggle', r);
              break;
            case 'input':
              De(r, a), po('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!a.multiple }), po('invalid', r);
              break;
            case 'textarea':
              Ke(r, a), po('invalid', r);
          }
          for (var i in (st(n, a), (e = null), a))
            a.hasOwnProperty(i) &&
              ((o = a[i]),
              'children' === i
                ? 'string' == typeof o
                  ? r.textContent !== o && (e = ['children', o])
                  : 'number' == typeof o && r.textContent !== '' + o && (e = ['children', '' + o])
                : K.hasOwnProperty(i) && null != o && 'onScroll' === i && po('scroll', r));
          switch (n) {
            case 'input':
              Ae(r), He(r, a, !0);
              break;
            case 'textarea':
              Ae(r), Qe(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              'function' == typeof a.onClick && (r.onclick = ko);
          }
          (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
        } else {
          switch (
            ((i = 9 === o.nodeType ? o : o.ownerDocument),
            e === Xe && (e = Ze(n)),
            e === Xe
              ? 'script' === n
                ? (((e = i.createElement('div')).innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : 'string' == typeof r.is
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  'select' === n &&
                    ((i = e), r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ao] = t),
            (e[Io] = r),
            Ml(e, t),
            (t.stateNode = e),
            (i = ct(n, r)),
            n)
          ) {
            case 'dialog':
              po('cancel', e), po('close', e), (o = r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              po('load', e), (o = r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < uo.length; o++) po(uo[o], e);
              o = r;
              break;
            case 'source':
              po('error', e), (o = r);
              break;
            case 'img':
            case 'image':
            case 'link':
              po('error', e), po('load', e), (o = r);
              break;
            case 'details':
              po('toggle', e), (o = r);
              break;
            case 'input':
              De(e, r), (o = ze(e, r)), po('invalid', e);
              break;
            case 'option':
              o = $e(e, r);
              break;
            case 'select':
              (e._wrapperState = { wasMultiple: !!r.multiple }),
                (o = W({}, r, { value: void 0 })),
                po('invalid', e);
              break;
            case 'textarea':
              Ke(e, r), (o = qe(e, r)), po('invalid', e);
              break;
            default:
              o = r;
          }
          st(n, o);
          var l = o;
          for (a in l)
            if (l.hasOwnProperty(a)) {
              var u = l[a];
              'style' === a
                ? lt(e, u)
                : 'dangerouslySetInnerHTML' === a
                ? null != (u = u ? u.__html : void 0) && nt(e, u)
                : 'children' === a
                ? 'string' == typeof u
                  ? ('textarea' !== n || '' !== u) && rt(e, u)
                  : 'number' == typeof u && rt(e, '' + u)
                : 'suppressContentEditableWarning' !== a &&
                  'suppressHydrationWarning' !== a &&
                  'autoFocus' !== a &&
                  (K.hasOwnProperty(a)
                    ? null != u && 'onScroll' === a && po('scroll', e)
                    : null != u && ae(e, a, u, i));
            }
          switch (n) {
            case 'input':
              Ae(e), He(e, r, !1);
              break;
            case 'textarea':
              Ae(e), Qe(e);
              break;
            case 'option':
              null != r.value && e.setAttribute('value', '' + Fe(r.value));
              break;
            case 'select':
              (e.multiple = !!r.multiple),
                null != (a = r.value)
                  ? Be(e, !!r.multiple, a, !1)
                  : null != r.defaultValue && Be(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              'function' == typeof o.onClick && (e.onclick = ko);
          }
          Po(n, r) && (t.flags |= 4);
        }
        null !== t.ref && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && null != t.stateNode) Rl(0, t, e.memoizedProps, r);
      else {
        if ('string' != typeof r && null === t.stateNode) throw Error(B(166));
        (n = hi(mi.current)),
          hi(di.current),
          Ti(t)
            ? ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Ao] = t),
              r.nodeValue !== n && (t.flags |= 4))
            : (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Ao] = t),
              (t.stateNode = r));
      }
      return null;
    case 13:
      return (
        Ko(xi),
        (r = t.memoizedState),
        0 != (64 & t.flags)
          ? ((t.lanes = n), t)
          : ((r = null !== r),
            (n = !1),
            null === e
              ? void 0 !== t.memoizedProps.fallback && Ti(t)
              : (n = null !== e.memoizedState),
            r &&
              !n &&
              0 != (2 & t.mode) &&
              ((null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
              0 != (1 & xi.current)
                ? 0 === xu && (xu = 3)
                : ((0 !== xu && 3 !== xu) || (xu = 4),
                  null === hu || (0 == (134217727 & ku) && 0 == (134217727 & Cu)) || es(hu, gu))),
            (r || n) && (t.flags |= 4),
            null)
      );
    case 4:
      return gi(), null === e && ho(t.stateNode.containerInfo), null;
    case 10:
      return Va(t), null;
    case 17:
      return ea(t.type) && ta(), null;
    case 19:
      if ((Ko(xi), null === (r = t.memoizedState))) return null;
      if (((a = 0 != (64 & t.flags)), null === (i = r.rendering)))
        if (a) Hl(r, !1);
        else {
          if (0 !== xu || (null !== e && 0 != (64 & e.flags)))
            for (e = t.child; null !== e; ) {
              if (null !== (i = wi(e))) {
                for (
                  t.flags |= 64,
                    Hl(r, !1),
                    null !== (a = i.updateQueue) && ((t.updateQueue = a), (t.flags |= 4)),
                    null === r.lastEffect && (t.firstEffect = null),
                    t.lastEffect = r.lastEffect,
                    r = n,
                    n = t.child;
                  null !== n;

                )
                  (e = r),
                    ((a = n).flags &= 2),
                    (a.nextEffect = null),
                    (a.firstEffect = null),
                    (a.lastEffect = null),
                    null === (i = a.alternate)
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = i.childLanes),
                        (a.lanes = i.lanes),
                        (a.child = i.child),
                        (a.memoizedProps = i.memoizedProps),
                        (a.memoizedState = i.memoizedState),
                        (a.updateQueue = i.updateQueue),
                        (a.type = i.type),
                        (e = i.dependencies),
                        (a.dependencies =
                          null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return Yo(xi, (1 & xi.current) | 2), t.child;
              }
              e = e.sibling;
            }
          null !== r.tail &&
            Pa() > Ou &&
            ((t.flags |= 64), (a = !0), Hl(r, !1), (t.lanes = 33554432));
        }
      else {
        if (!a)
          if (null !== (e = wi(i))) {
            if (
              ((t.flags |= 64),
              (a = !0),
              null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
              Hl(r, !0),
              null === r.tail && 'hidden' === r.tailMode && !i.alternate && !Ci)
            )
              return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null;
          } else
            2 * Pa() - r.renderingStartTime > Ou &&
              1073741824 !== n &&
              ((t.flags |= 64), (a = !0), Hl(r, !1), (t.lanes = 33554432));
        r.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : (null !== (n = r.last) ? (n.sibling = i) : (t.child = i), (r.last = i));
      }
      return null !== r.tail
        ? ((n = r.tail),
          (r.rendering = n),
          (r.tail = n.sibling),
          (r.lastEffect = t.lastEffect),
          (r.renderingStartTime = Pa()),
          (n.sibling = null),
          (t = xi.current),
          Yo(xi, a ? (1 & t) | 2 : 1 & t),
          n)
        : null;
    case 23:
    case 24:
      return (
        as(),
        null !== e &&
          (null !== e.memoizedState) != (null !== t.memoizedState) &&
          'unstable-defer-without-hiding' !== r.mode &&
          (t.flags |= 4),
        null
      );
  }
  throw Error(B(156, t.tag));
}
function $l(e) {
  switch (e.tag) {
    case 1:
      ea(e.type) && ta();
      var t = e.flags;
      return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
    case 3:
      if ((gi(), Ko(Go), Ko(Xo), Ri(), 0 != (64 & (t = e.flags)))) throw Error(B(285));
      return (e.flags = (-4097 & t) | 64), e;
    case 5:
      return bi(e), null;
    case 13:
      return Ko(xi), 4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null;
    case 19:
      return Ko(xi), null;
    case 4:
      return gi(), null;
    case 10:
      return Va(e), null;
    case 23:
    case 24:
      return as(), null;
    default:
      return null;
  }
}
function Bl(e, t) {
  try {
    var n = '',
      r = t;
    do {
      (n += _e(r)), (r = r.return);
    } while (r);
    var o = n;
  } catch (a) {
    o = '\nError generating stack: ' + a.message + '\n' + a.stack;
  }
  return { value: e, source: t, stack: o };
}
function ql(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
(Ml = function (e, t) {
  for (var n = t.child; null !== n; ) {
    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
    else if (4 !== n.tag && null !== n.child) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; null === n.sibling; ) {
      if (null === n.return || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}),
  (_l = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      (e = t.stateNode), hi(di.current);
      var a,
        i = null;
      switch (n) {
        case 'input':
          (o = ze(e, o)), (r = ze(e, r)), (i = []);
          break;
        case 'option':
          (o = $e(e, o)), (r = $e(e, r)), (i = []);
          break;
        case 'select':
          (o = W({}, o, { value: void 0 })), (r = W({}, r, { value: void 0 })), (i = []);
          break;
        case 'textarea':
          (o = qe(e, o)), (r = qe(e, r)), (i = []);
          break;
        default:
          'function' != typeof o.onClick && 'function' == typeof r.onClick && (e.onclick = ko);
      }
      for (s in (st(n, r), (n = null), o))
        if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && null != o[s])
          if ('style' === s) {
            var l = o[s];
            for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
          } else
            'dangerouslySetInnerHTML' !== s &&
              'children' !== s &&
              'suppressContentEditableWarning' !== s &&
              'suppressHydrationWarning' !== s &&
              'autoFocus' !== s &&
              (K.hasOwnProperty(s) ? i || (i = []) : (i = i || []).push(s, null));
      for (s in r) {
        var u = r[s];
        if (
          ((l = null != o ? o[s] : void 0),
          r.hasOwnProperty(s) && u !== l && (null != u || null != l))
        )
          if ('style' === s)
            if (l) {
              for (a in l)
                !l.hasOwnProperty(a) || (u && u.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ''));
              for (a in u) u.hasOwnProperty(a) && l[a] !== u[a] && (n || (n = {}), (n[a] = u[a]));
            } else n || (i || (i = []), i.push(s, n)), (n = u);
          else
            'dangerouslySetInnerHTML' === s
              ? ((u = u ? u.__html : void 0),
                (l = l ? l.__html : void 0),
                null != u && l !== u && (i = i || []).push(s, u))
              : 'children' === s
              ? ('string' != typeof u && 'number' != typeof u) || (i = i || []).push(s, '' + u)
              : 'suppressContentEditableWarning' !== s &&
                'suppressHydrationWarning' !== s &&
                (K.hasOwnProperty(s)
                  ? (null != u && 'onScroll' === s && po('scroll', e), i || l === u || (i = []))
                  : 'object' == typeof u && null !== u && u.$$typeof === xe
                  ? u.toString()
                  : (i = i || []).push(s, u));
      }
      n && (i = i || []).push('style', n);
      var s = i;
      (t.updateQueue = s) && (t.flags |= 4);
    }
  }),
  (Rl = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  });
var Kl = 'function' == typeof WeakMap ? WeakMap : Map;
function Yl(e, t, n) {
  ((n = Ka(-1, n)).tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ru || ((Ru = !0), (Fu = r)), ql(0, t);
    }),
    n
  );
}
function Ql(e, t, n) {
  (n = Ka(-1, n)).tag = 3;
  var r = e.type.getDerivedStateFromError;
  if ('function' == typeof r) {
    var o = t.value;
    n.payload = function () {
      return ql(0, t), r(o);
    };
  }
  var a = e.stateNode;
  return (
    null !== a &&
      'function' == typeof a.componentDidCatch &&
      (n.callback = function () {
        'function' != typeof r && (null === Lu ? (Lu = new Set([this])) : Lu.add(this), ql(0, t));
        var e = t.stack;
        this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
      }),
    n
  );
}
var Xl = 'function' == typeof WeakSet ? WeakSet : Set;
function Gl(e) {
  var t = e.ref;
  if (null !== t)
    if ('function' == typeof t)
      try {
        t(null);
      } catch (n) {
        Es(e, n);
      }
    else t.current = null;
}
function Zl(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (256 & t.flags && null !== e) {
        var n = e.memoizedProps,
          r = e.memoizedState;
        (t = (e = t.stateNode).getSnapshotBeforeUpdate(
          t.elementType === t.type ? n : La(t.type, n),
          r,
        )),
          (e.__reactInternalSnapshotBeforeUpdate = t);
      }
      return;
    case 3:
      return void (256 & t.flags && Mo(t.stateNode.containerInfo));
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(B(163));
}
function Jl(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
        e = t = t.next;
        do {
          if (3 == (3 & e.tag)) {
            var r = e.create;
            e.destroy = r();
          }
          e = e.next;
        } while (e !== t);
      }
      if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
        e = t = t.next;
        do {
          var o = e;
          (r = o.next), 0 != (4 & (o = o.tag)) && 0 != (1 & o) && (bs(n, e), ys(n, e)), (e = r);
        } while (e !== t);
      }
      return;
    case 1:
      return (
        (e = n.stateNode),
        4 & n.flags &&
          (null === t
            ? e.componentDidMount()
            : ((r = n.elementType === n.type ? t.memoizedProps : La(n.type, t.memoizedProps)),
              e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
        void (null !== (t = n.updateQueue) && Ga(n, t, e))
      );
    case 3:
      if (null !== (t = n.updateQueue)) {
        if (((e = null), null !== n.child))
          switch (n.child.tag) {
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
        Ga(n, t, e);
      }
      return;
    case 5:
      return (
        (e = n.stateNode),
        void (null === t && 4 & n.flags && Po(n.type, n.memoizedProps) && e.focus())
      );
    case 6:
    case 4:
    case 12:
      return;
    case 13:
      return void (
        null === n.memoizedState &&
        ((n = n.alternate),
        null !== n &&
          ((n = n.memoizedState), null !== n && ((n = n.dehydrated), null !== n && un(n))))
      );
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(B(163));
}
function eu(e, t) {
  for (var n = e; ; ) {
    if (5 === n.tag) {
      var r = n.stateNode;
      if (t)
        'function' == typeof (r = r.style).setProperty
          ? r.setProperty('display', 'none', 'important')
          : (r.display = 'none');
      else {
        r = n.stateNode;
        var o = n.memoizedProps.style;
        (o = null != o && o.hasOwnProperty('display') ? o.display : null),
          (r.style.display = it('display', o));
      }
    } else if (6 === n.tag) n.stateNode.nodeValue = t ? '' : n.memoizedProps;
    else if (
      ((23 !== n.tag && 24 !== n.tag) || null === n.memoizedState || n === e) &&
      null !== n.child
    ) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; null === n.sibling; ) {
      if (null === n.return || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function tu(e, t) {
  if (la && 'function' == typeof la.onCommitFiberUnmount)
    try {
      la.onCommitFiberUnmount(ia, t);
    } catch (a) {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
        var n = (e = e.next);
        do {
          var r = n,
            o = r.destroy;
          if (((r = r.tag), void 0 !== o))
            if (0 != (4 & r)) bs(t, n);
            else {
              r = t;
              try {
                o();
              } catch (a) {
                Es(r, a);
              }
            }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if ((Gl(t), 'function' == typeof (e = t.stateNode).componentWillUnmount))
        try {
          (e.props = t.memoizedProps), (e.state = t.memoizedState), e.componentWillUnmount();
        } catch (a) {
          Es(t, a);
        }
      break;
    case 5:
      Gl(t);
      break;
    case 4:
      lu(e, t);
  }
}
function nu(e) {
  (e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null);
}
function ru(e) {
  return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function ou(e) {
  e: {
    for (var t = e.return; null !== t; ) {
      if (ru(t)) break e;
      t = t.return;
    }
    throw Error(B(160));
  }
  var n = t;
  switch (((t = n.stateNode), n.tag)) {
    case 5:
      var r = !1;
      break;
    case 3:
    case 4:
      (t = t.containerInfo), (r = !0);
      break;
    default:
      throw Error(B(161));
  }
  16 & n.flags && (rt(t, ''), (n.flags &= -17));
  e: t: for (n = e; ; ) {
    for (; null === n.sibling; ) {
      if (null === n.return || ru(n.return)) {
        n = null;
        break e;
      }
      n = n.return;
    }
    for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
      if (2 & n.flags) continue t;
      if (null === n.child || 4 === n.tag) continue t;
      (n.child.return = n), (n = n.child);
    }
    if (!(2 & n.flags)) {
      n = n.stateNode;
      break e;
    }
  }
  r ? au(e, n, t) : iu(e, n, t);
}
function au(e, t, n) {
  var r = e.tag,
    o = 5 === r || 6 === r;
  if (o)
    (e = o ? e.stateNode : e.stateNode.instance),
      t
        ? 8 === n.nodeType
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
          null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = ko));
  else if (4 !== r && null !== (e = e.child))
    for (au(e, t, n), e = e.sibling; null !== e; ) au(e, t, n), (e = e.sibling);
}
function iu(e, t, n) {
  var r = e.tag,
    o = 5 === r || 6 === r;
  if (o) (e = o ? e.stateNode : e.stateNode.instance), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (4 !== r && null !== (e = e.child))
    for (iu(e, t, n), e = e.sibling; null !== e; ) iu(e, t, n), (e = e.sibling);
}
function lu(e, t) {
  for (var n, r, o = t, a = !1; ; ) {
    if (!a) {
      a = o.return;
      e: for (;;) {
        if (null === a) throw Error(B(160));
        switch (((n = a.stateNode), a.tag)) {
          case 5:
            r = !1;
            break e;
          case 3:
          case 4:
            (n = n.containerInfo), (r = !0);
            break e;
        }
        a = a.return;
      }
      a = !0;
    }
    if (5 === o.tag || 6 === o.tag) {
      e: for (var i = e, l = o, u = l; ; )
        if ((tu(i, u), null !== u.child && 4 !== u.tag)) (u.child.return = u), (u = u.child);
        else {
          if (u === l) break e;
          for (; null === u.sibling; ) {
            if (null === u.return || u.return === l) break e;
            u = u.return;
          }
          (u.sibling.return = u.return), (u = u.sibling);
        }
      r
        ? ((i = n),
          (l = o.stateNode),
          8 === i.nodeType ? i.parentNode.removeChild(l) : i.removeChild(l))
        : n.removeChild(o.stateNode);
    } else if (4 === o.tag) {
      if (null !== o.child) {
        (n = o.stateNode.containerInfo), (r = !0), (o.child.return = o), (o = o.child);
        continue;
      }
    } else if ((tu(e, o), null !== o.child)) {
      (o.child.return = o), (o = o.child);
      continue;
    }
    if (o === t) break;
    for (; null === o.sibling; ) {
      if (null === o.return || o.return === t) return;
      4 === (o = o.return).tag && (a = !1);
    }
    (o.sibling.return = o.return), (o = o.sibling);
  }
}
function uu(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var n = t.updateQueue;
      if (null !== (n = null !== n ? n.lastEffect : null)) {
        var r = (n = n.next);
        do {
          3 == (3 & r.tag) && ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()),
            (r = r.next);
        } while (r !== n);
      }
      return;
    case 1:
      return;
    case 5:
      if (null != (n = t.stateNode)) {
        r = t.memoizedProps;
        var o = null !== e ? e.memoizedProps : r;
        e = t.type;
        var a = t.updateQueue;
        if (((t.updateQueue = null), null !== a)) {
          for (
            n[Io] = r,
              'input' === e && 'radio' === r.type && null != r.name && Ve(n, r),
              ct(e, o),
              t = ct(e, r),
              o = 0;
            o < a.length;
            o += 2
          ) {
            var i = a[o],
              l = a[o + 1];
            'style' === i
              ? lt(n, l)
              : 'dangerouslySetInnerHTML' === i
              ? nt(n, l)
              : 'children' === i
              ? rt(n, l)
              : ae(n, i, l, t);
          }
          switch (e) {
            case 'input':
              Ue(n, r);
              break;
            case 'textarea':
              Ye(n, r);
              break;
            case 'select':
              (e = n._wrapperState.wasMultiple),
                (n._wrapperState.wasMultiple = !!r.multiple),
                null != (a = r.value)
                  ? Be(n, !!r.multiple, a, !1)
                  : e !== !!r.multiple &&
                    (null != r.defaultValue
                      ? Be(n, !!r.multiple, r.defaultValue, !0)
                      : Be(n, !!r.multiple, r.multiple ? [] : '', !1));
          }
        }
      }
      return;
    case 6:
      if (null === t.stateNode) throw Error(B(162));
      return void (t.stateNode.nodeValue = t.memoizedProps);
    case 3:
      return void ((n = t.stateNode).hydrate && ((n.hydrate = !1), un(n.containerInfo)));
    case 12:
      return;
    case 13:
      return null !== t.memoizedState && ((Nu = Pa()), eu(t.child, !0)), void su(t);
    case 19:
      return void su(t);
    case 17:
      return;
    case 23:
    case 24:
      return void eu(t, null !== t.memoizedState);
  }
  throw Error(B(163));
}
function su(e) {
  var t = e.updateQueue;
  if (null !== t) {
    e.updateQueue = null;
    var n = e.stateNode;
    null === n && (n = e.stateNode = new Xl()),
      t.forEach(function (t) {
        var r = Cs.bind(null, e, t);
        n.has(t) || (n.add(t), t.then(r, r));
      });
  }
}
function cu(e, t) {
  return (
    null !== e &&
    (null === (e = e.memoizedState) || null !== e.dehydrated) &&
    null !== (t = t.memoizedState) &&
    null === t.dehydrated
  );
}
var fu = Math.ceil,
  du = ie.ReactCurrentDispatcher,
  pu = ie.ReactCurrentOwner,
  mu = 0,
  hu = null,
  vu = null,
  gu = 0,
  yu = 0,
  bu = qo(0),
  xu = 0,
  wu = null,
  Eu = 0,
  ku = 0,
  Cu = 0,
  Su = 0,
  Pu = null,
  Nu = 0,
  Ou = 1 / 0;
function Tu() {
  Ou = Pa() + 500;
}
var Mu,
  _u = null,
  Ru = !1,
  Fu = null,
  Lu = null,
  Au = !1,
  Iu = null,
  ju = 90,
  zu = [],
  Du = [],
  Vu = null,
  Uu = 0,
  Hu = null,
  Wu = -1,
  $u = 0,
  Bu = 0,
  qu = null,
  Ku = !1;
function Yu() {
  return 0 != (48 & mu) ? Pa() : -1 !== Wu ? Wu : (Wu = Pa());
}
function Qu(e) {
  if (0 == (2 & (e = e.mode))) return 1;
  if (0 == (4 & e)) return 99 === Na() ? 1 : 2;
  if ((0 === $u && ($u = Eu), 0 !== Fa.transition)) {
    0 !== Bu && (Bu = null !== Pu ? Pu.pendingLanes : 0), (e = $u);
    var t = 4186112 & ~Bu;
    return 0 === (t &= -t) && 0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192), t;
  }
  return (
    (e = Na()),
    0 != (4 & mu) && 98 === e
      ? (e = Pn(12, $u))
      : (e = Pn(
          (e = (function (e) {
            switch (e) {
              case 99:
                return 15;
              case 98:
                return 10;
              case 97:
              case 96:
                return 8;
              case 95:
                return 2;
              default:
                return 0;
            }
          })(e)),
          $u,
        )),
    e
  );
}
function Xu(e, t, n) {
  if (50 < Uu) throw ((Uu = 0), (Hu = null), Error(B(185)));
  if (null === (e = Gu(e, t))) return null;
  Tn(e, t, n), e === hu && ((Cu |= t), 4 === xu && es(e, gu));
  var r = Na();
  1 === t
    ? 0 != (8 & mu) && 0 == (48 & mu)
      ? ts(e)
      : (Zu(e, n), 0 === mu && (Tu(), _a()))
    : (0 == (4 & mu) || (98 !== r && 99 !== r) || (null === Vu ? (Vu = new Set([e])) : Vu.add(e)),
      Zu(e, n)),
    (Pu = e);
}
function Gu(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
    (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
  return 3 === n.tag ? n.stateNode : null;
}
function Zu(e, t) {
  for (
    var n = e.callbackNode,
      r = e.suspendedLanes,
      o = e.pingedLanes,
      a = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Mn(i),
      u = 1 << l,
      s = a[l];
    if (-1 === s) {
      if (0 == (u & r) || 0 != (u & o)) {
        (s = t), kn(u);
        var c = En;
        a[l] = 10 <= c ? s + 250 : 6 <= c ? s + 5e3 : -1;
      }
    } else s <= t && (e.expiredLanes |= u);
    i &= ~u;
  }
  if (((r = Cn(e, e === hu ? gu : 0)), (t = En), 0 === r))
    null !== n && (n !== xa && ca(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else {
    if (null !== n) {
      if (e.callbackPriority === t) return;
      n !== xa && ca(n);
    }
    15 === t
      ? ((n = ts.bind(null, e)),
        null === Ea ? ((Ea = [n]), (ka = sa(ha, Ra))) : Ea.push(n),
        (n = xa))
      : 14 === t
      ? (n = Ma(99, ts.bind(null, e)))
      : (n = Ma(
          (n = (function (e) {
            switch (e) {
              case 15:
              case 14:
                return 99;
              case 13:
              case 12:
              case 11:
              case 10:
                return 98;
              case 9:
              case 8:
              case 7:
              case 6:
              case 4:
              case 5:
                return 97;
              case 3:
              case 2:
              case 1:
                return 95;
              case 0:
                return 90;
              default:
                throw Error(B(358, e));
            }
          })(t)),
          Ju.bind(null, e),
        )),
      (e.callbackPriority = t),
      (e.callbackNode = n);
  }
}
function Ju(e) {
  if (((Wu = -1), (Bu = $u = 0), 0 != (48 & mu))) throw Error(B(327));
  var t = e.callbackNode;
  if (gs() && e.callbackNode !== t) return null;
  var n = Cn(e, e === hu ? gu : 0);
  if (0 === n) return null;
  var r = n,
    o = mu;
  mu |= 16;
  var a = us();
  for ((hu === e && gu === r) || (Tu(), is(e, r)); ; )
    try {
      fs();
      break;
    } catch (l) {
      ls(e, l);
    }
  if (
    (Da(),
    (du.current = a),
    (mu = o),
    null !== vu ? (r = 0) : ((hu = null), (gu = 0), (r = xu)),
    0 != (Eu & Cu))
  )
    is(e, 0);
  else if (0 !== r) {
    if (
      (2 === r &&
        ((mu |= 64),
        e.hydrate && ((e.hydrate = !1), Mo(e.containerInfo)),
        0 !== (n = Sn(e)) && (r = ss(e, n))),
      1 === r)
    )
      throw ((t = wu), is(e, 0), es(e, n), Zu(e, Pa()), t);
    switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)) {
      case 0:
      case 1:
        throw Error(B(345));
      case 2:
        ms(e);
        break;
      case 3:
        if ((es(e, n), (62914560 & n) === n && 10 < (r = Nu + 500 - Pa()))) {
          if (0 !== Cn(e, 0)) break;
          if (((o = e.suspendedLanes) & n) !== n) {
            Yu(), (e.pingedLanes |= e.suspendedLanes & o);
            break;
          }
          e.timeoutHandle = Oo(ms.bind(null, e), r);
          break;
        }
        ms(e);
        break;
      case 4:
        if ((es(e, n), (4186112 & n) === n)) break;
        for (r = e.eventTimes, o = -1; 0 < n; ) {
          var i = 31 - Mn(n);
          (a = 1 << i), (i = r[i]) > o && (o = i), (n &= ~a);
        }
        if (
          ((n = o),
          10 <
            (n =
              (120 > (n = Pa() - n)
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * fu(n / 1960)) - n))
        ) {
          e.timeoutHandle = Oo(ms.bind(null, e), n);
          break;
        }
        ms(e);
        break;
      case 5:
        ms(e);
        break;
      default:
        throw Error(B(329));
    }
  }
  return Zu(e, Pa()), e.callbackNode === t ? Ju.bind(null, e) : null;
}
function es(e, t) {
  for (
    t &= ~Su, t &= ~Cu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Mn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ts(e) {
  if (0 != (48 & mu)) throw Error(B(327));
  if ((gs(), e === hu && 0 != (e.expiredLanes & gu))) {
    var t = gu,
      n = ss(e, t);
    0 != (Eu & Cu) && (n = ss(e, (t = Cn(e, t))));
  } else n = ss(e, (t = Cn(e, 0)));
  if (
    (0 !== e.tag &&
      2 === n &&
      ((mu |= 64),
      e.hydrate && ((e.hydrate = !1), Mo(e.containerInfo)),
      0 !== (t = Sn(e)) && (n = ss(e, t))),
    1 === n)
  )
    throw ((n = wu), is(e, 0), es(e, t), Zu(e, Pa()), n);
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), ms(e), Zu(e, Pa()), null;
}
function ns(e, t) {
  var n = mu;
  mu |= 1;
  try {
    return e(t);
  } finally {
    0 === (mu = n) && (Tu(), _a());
  }
}
function rs(e, t) {
  var n = mu;
  (mu &= -2), (mu |= 8);
  try {
    return e(t);
  } finally {
    0 === (mu = n) && (Tu(), _a());
  }
}
function os(e, t) {
  Yo(bu, yu), (yu |= t), (Eu |= t);
}
function as() {
  (yu = bu.current), Ko(bu);
}
function is(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((-1 !== n && ((e.timeoutHandle = -1), To(n)), null !== vu))
    for (n = vu.return; null !== n; ) {
      var r = n;
      switch (r.tag) {
        case 1:
          null != (r = r.type.childContextTypes) && ta();
          break;
        case 3:
          gi(), Ko(Go), Ko(Xo), Ri();
          break;
        case 5:
          bi(r);
          break;
        case 4:
          gi();
          break;
        case 13:
        case 19:
          Ko(xi);
          break;
        case 10:
          Va(r);
          break;
        case 23:
        case 24:
          as();
      }
      n = n.return;
    }
  (hu = e),
    (vu = Os(e.current, null)),
    (gu = yu = Eu = t),
    (xu = 0),
    (wu = null),
    (Su = Cu = ku = 0);
}
function ls(e, t) {
  for (;;) {
    var n = vu;
    try {
      if ((Da(), (Fi.current = ml), Di)) {
        for (var r = Ii.memoizedState; null !== r; ) {
          var o = r.queue;
          null !== o && (o.pending = null), (r = r.next);
        }
        Di = !1;
      }
      if (
        ((Ai = 0),
        (zi = ji = Ii = null),
        (Vi = !1),
        (pu.current = null),
        null === n || null === n.return)
      ) {
        (xu = 1), (wu = t), (vu = null);
        break;
      }
      e: {
        var a = e,
          i = n.return,
          l = n,
          u = t;
        if (
          ((t = gu),
          (l.flags |= 2048),
          (l.firstEffect = l.lastEffect = null),
          null !== u && 'object' == typeof u && 'function' == typeof u.then)
        ) {
          var s = u;
          if (0 == (2 & l.mode)) {
            var c = l.alternate;
            c
              ? ((l.updateQueue = c.updateQueue),
                (l.memoizedState = c.memoizedState),
                (l.lanes = c.lanes))
              : ((l.updateQueue = null), (l.memoizedState = null));
          }
          var f = 0 != (1 & xi.current),
            d = i;
          do {
            var p;
            if ((p = 13 === d.tag)) {
              var m = d.memoizedState;
              if (null !== m) p = null !== m.dehydrated;
              else {
                var h = d.memoizedProps;
                p = void 0 !== h.fallback && (!0 !== h.unstable_avoidThisFallback || !f);
              }
            }
            if (p) {
              var v = d.updateQueue;
              if (null === v) {
                var g = new Set();
                g.add(s), (d.updateQueue = g);
              } else v.add(s);
              if (0 == (2 & d.mode)) {
                if (((d.flags |= 64), (l.flags |= 16384), (l.flags &= -2981), 1 === l.tag))
                  if (null === l.alternate) l.tag = 17;
                  else {
                    var y = Ka(-1, 1);
                    (y.tag = 2), Ya(l, y);
                  }
                l.lanes |= 1;
                break e;
              }
              (u = void 0), (l = t);
              var b = a.pingCache;
              if (
                (null === b
                  ? ((b = a.pingCache = new Kl()), (u = new Set()), b.set(s, u))
                  : void 0 === (u = b.get(s)) && ((u = new Set()), b.set(s, u)),
                !u.has(l))
              ) {
                u.add(l);
                var x = ks.bind(null, a, s, l);
                s.then(x, x);
              }
              (d.flags |= 4096), (d.lanes = t);
              break e;
            }
            d = d.return;
          } while (null !== d);
          u = Error(
            (Re(l.type) || 'A React component') +
              ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.',
          );
        }
        5 !== xu && (xu = 2), (u = Bl(u, l)), (d = i);
        do {
          switch (d.tag) {
            case 3:
              (a = u), (d.flags |= 4096), (t &= -t), (d.lanes |= t), Qa(d, Yl(0, a, t));
              break e;
            case 1:
              a = u;
              var w = d.type,
                E = d.stateNode;
              if (
                0 == (64 & d.flags) &&
                ('function' == typeof w.getDerivedStateFromError ||
                  (null !== E &&
                    'function' == typeof E.componentDidCatch &&
                    (null === Lu || !Lu.has(E))))
              ) {
                (d.flags |= 4096), (t &= -t), (d.lanes |= t), Qa(d, Ql(d, a, t));
                break e;
              }
          }
          d = d.return;
        } while (null !== d);
      }
      ps(n);
    } catch (k) {
      (t = k), vu === n && null !== n && (vu = n = n.return);
      continue;
    }
    break;
  }
}
function us() {
  var e = du.current;
  return (du.current = ml), null === e ? ml : e;
}
function ss(e, t) {
  var n = mu;
  mu |= 16;
  var r = us();
  for ((hu === e && gu === t) || is(e, t); ; )
    try {
      cs();
      break;
    } catch (o) {
      ls(e, o);
    }
  if ((Da(), (mu = n), (du.current = r), null !== vu)) throw Error(B(261));
  return (hu = null), (gu = 0), xu;
}
function cs() {
  for (; null !== vu; ) ds(vu);
}
function fs() {
  for (; null !== vu && !fa(); ) ds(vu);
}
function ds(e) {
  var t = Mu(e.alternate, e, yu);
  (e.memoizedProps = e.pendingProps), null === t ? ps(e) : (vu = t), (pu.current = null);
}
function ps(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), 0 == (2048 & t.flags))) {
      if (null !== (n = Wl(n, t, yu))) return void (vu = n);
      if (
        (24 !== (n = t).tag && 23 !== n.tag) ||
        null === n.memoizedState ||
        0 != (1073741824 & yu) ||
        0 == (4 & n.mode)
      ) {
        for (var r = 0, o = n.child; null !== o; ) (r |= o.lanes | o.childLanes), (o = o.sibling);
        n.childLanes = r;
      }
      null !== e &&
        0 == (2048 & e.flags) &&
        (null === e.firstEffect && (e.firstEffect = t.firstEffect),
        null !== t.lastEffect &&
          (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect),
          (e.lastEffect = t.lastEffect)),
        1 < t.flags &&
          (null !== e.lastEffect ? (e.lastEffect.nextEffect = t) : (e.firstEffect = t),
          (e.lastEffect = t)));
    } else {
      if (null !== (n = $l(t))) return (n.flags &= 2047), void (vu = n);
      null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
    }
    if (null !== (t = t.sibling)) return void (vu = t);
    vu = t = e;
  } while (null !== t);
  0 === xu && (xu = 5);
}
function ms(e) {
  var t = Na();
  return Ta(99, hs.bind(null, e, t)), null;
}
function hs(e, t) {
  do {
    gs();
  } while (null !== Iu);
  if (0 != (48 & mu)) throw Error(B(327));
  var n = e.finishedWork;
  if (null === n) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(B(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes,
    o = r,
    a = e.pendingLanes & ~o;
  (e.pendingLanes = o),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= o),
    (e.mutableReadLanes &= o),
    (e.entangledLanes &= o),
    (o = e.entanglements);
  for (var i = e.eventTimes, l = e.expirationTimes; 0 < a; ) {
    var u = 31 - Mn(a),
      s = 1 << u;
    (o[u] = 0), (i[u] = -1), (l[u] = -1), (a &= ~s);
  }
  if (
    (null !== Vu && 0 == (24 & r) && Vu.has(e) && Vu.delete(e),
    e === hu && ((vu = hu = null), (gu = 0)),
    1 < n.flags
      ? null !== n.lastEffect
        ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
        : (r = n)
      : (r = n.firstEffect),
    null !== r)
  ) {
    if (((o = mu), (mu |= 32), (pu.current = null), (Co = An), Jr((i = Zr())))) {
      if ('selectionStart' in i) l = { start: i.selectionStart, end: i.selectionEnd };
      else
        e: if (
          ((l = ((l = i.ownerDocument) && l.defaultView) || window),
          (s = l.getSelection && l.getSelection()) && 0 !== s.rangeCount)
        ) {
          (l = s.anchorNode), (a = s.anchorOffset), (u = s.focusNode), (s = s.focusOffset);
          try {
            l.nodeType, u.nodeType;
          } catch (S) {
            l = null;
            break e;
          }
          var c = 0,
            f = -1,
            d = -1,
            p = 0,
            m = 0,
            h = i,
            v = null;
          t: for (;;) {
            for (
              var g;
              h !== l || (0 !== a && 3 !== h.nodeType) || (f = c + a),
                h !== u || (0 !== s && 3 !== h.nodeType) || (d = c + s),
                3 === h.nodeType && (c += h.nodeValue.length),
                null !== (g = h.firstChild);

            )
              (v = h), (h = g);
            for (;;) {
              if (h === i) break t;
              if (
                (v === l && ++p === a && (f = c),
                v === u && ++m === s && (d = c),
                null !== (g = h.nextSibling))
              )
                break;
              v = (h = v).parentNode;
            }
            h = g;
          }
          l = -1 === f || -1 === d ? null : { start: f, end: d };
        } else l = null;
      l = l || { start: 0, end: 0 };
    } else l = null;
    (So = { focusedElem: i, selectionRange: l }), (An = !1), (qu = null), (Ku = !1), (_u = r);
    do {
      try {
        vs();
      } catch (S) {
        if (null === _u) throw Error(B(330));
        Es(_u, S), (_u = _u.nextEffect);
      }
    } while (null !== _u);
    (qu = null), (_u = r);
    do {
      try {
        for (i = e; null !== _u; ) {
          var y = _u.flags;
          if ((16 & y && rt(_u.stateNode, ''), 128 & y)) {
            var b = _u.alternate;
            if (null !== b) {
              var x = b.ref;
              null !== x && ('function' == typeof x ? x(null) : (x.current = null));
            }
          }
          switch (1038 & y) {
            case 2:
              ou(_u), (_u.flags &= -3);
              break;
            case 6:
              ou(_u), (_u.flags &= -3), uu(_u.alternate, _u);
              break;
            case 1024:
              _u.flags &= -1025;
              break;
            case 1028:
              (_u.flags &= -1025), uu(_u.alternate, _u);
              break;
            case 4:
              uu(_u.alternate, _u);
              break;
            case 8:
              lu(i, (l = _u));
              var w = l.alternate;
              nu(l), null !== w && nu(w);
          }
          _u = _u.nextEffect;
        }
      } catch (S) {
        if (null === _u) throw Error(B(330));
        Es(_u, S), (_u = _u.nextEffect);
      }
    } while (null !== _u);
    if (
      ((x = So),
      (b = Zr()),
      (y = x.focusedElem),
      (i = x.selectionRange),
      b !== y && y && y.ownerDocument && Gr(y.ownerDocument.documentElement, y))
    ) {
      null !== i &&
        Jr(y) &&
        ((b = i.start),
        void 0 === (x = i.end) && (x = b),
        'selectionStart' in y
          ? ((y.selectionStart = b), (y.selectionEnd = Math.min(x, y.value.length)))
          : (x = ((b = y.ownerDocument || document) && b.defaultView) || window).getSelection &&
            ((x = x.getSelection()),
            (l = y.textContent.length),
            (w = Math.min(i.start, l)),
            (i = void 0 === i.end ? w : Math.min(i.end, l)),
            !x.extend && w > i && ((l = i), (i = w), (w = l)),
            (l = Xr(y, w)),
            (a = Xr(y, i)),
            l &&
              a &&
              (1 !== x.rangeCount ||
                x.anchorNode !== l.node ||
                x.anchorOffset !== l.offset ||
                x.focusNode !== a.node ||
                x.focusOffset !== a.offset) &&
              ((b = b.createRange()).setStart(l.node, l.offset),
              x.removeAllRanges(),
              w > i
                ? (x.addRange(b), x.extend(a.node, a.offset))
                : (b.setEnd(a.node, a.offset), x.addRange(b))))),
        (b = []);
      for (x = y; (x = x.parentNode); )
        1 === x.nodeType && b.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
      for ('function' == typeof y.focus && y.focus(), y = 0; y < b.length; y++)
        ((x = b[y]).element.scrollLeft = x.left), (x.element.scrollTop = x.top);
    }
    (An = !!Co), (So = Co = null), (e.current = n), (_u = r);
    do {
      try {
        for (y = e; null !== _u; ) {
          var E = _u.flags;
          if ((36 & E && Jl(y, _u.alternate, _u), 128 & E)) {
            b = void 0;
            var k = _u.ref;
            if (null !== k) {
              var C = _u.stateNode;
              switch (_u.tag) {
                case 5:
                  b = C;
                  break;
                default:
                  b = C;
              }
              'function' == typeof k ? k(b) : (k.current = b);
            }
          }
          _u = _u.nextEffect;
        }
      } catch (S) {
        if (null === _u) throw Error(B(330));
        Es(_u, S), (_u = _u.nextEffect);
      }
    } while (null !== _u);
    (_u = null), wa(), (mu = o);
  } else e.current = n;
  if (Au) (Au = !1), (Iu = e), (ju = t);
  else
    for (_u = r; null !== _u; )
      (t = _u.nextEffect),
        (_u.nextEffect = null),
        8 & _u.flags && (((E = _u).sibling = null), (E.stateNode = null)),
        (_u = t);
  if (
    (0 === (r = e.pendingLanes) && (Lu = null),
    1 === r ? (e === Hu ? Uu++ : ((Uu = 0), (Hu = e))) : (Uu = 0),
    (n = n.stateNode),
    la && 'function' == typeof la.onCommitFiberRoot)
  )
    try {
      la.onCommitFiberRoot(ia, n, void 0, 64 == (64 & n.current.flags));
    } catch (S) {}
  if ((Zu(e, Pa()), Ru)) throw ((Ru = !1), (e = Fu), (Fu = null), e);
  return 0 != (8 & mu) || _a(), null;
}
function vs() {
  for (; null !== _u; ) {
    var e = _u.alternate;
    Ku ||
      null === qu ||
      (0 != (8 & _u.flags)
        ? Dt(_u, qu) && (Ku = !0)
        : 13 === _u.tag && cu(e, _u) && Dt(_u, qu) && (Ku = !0));
    var t = _u.flags;
    0 != (256 & t) && Zl(e, _u),
      0 == (512 & t) ||
        Au ||
        ((Au = !0),
        Ma(97, function () {
          return gs(), null;
        })),
      (_u = _u.nextEffect);
  }
}
function gs() {
  if (90 !== ju) {
    var e = 97 < ju ? 97 : ju;
    return (ju = 90), Ta(e, xs);
  }
  return !1;
}
function ys(e, t) {
  zu.push(t, e),
    Au ||
      ((Au = !0),
      Ma(97, function () {
        return gs(), null;
      }));
}
function bs(e, t) {
  Du.push(t, e),
    Au ||
      ((Au = !0),
      Ma(97, function () {
        return gs(), null;
      }));
}
function xs() {
  if (null === Iu) return !1;
  var e = Iu;
  if (((Iu = null), 0 != (48 & mu))) throw Error(B(331));
  var t = mu;
  mu |= 32;
  var n = Du;
  Du = [];
  for (var r = 0; r < n.length; r += 2) {
    var o = n[r],
      a = n[r + 1],
      i = o.destroy;
    if (((o.destroy = void 0), 'function' == typeof i))
      try {
        i();
      } catch (u) {
        if (null === a) throw Error(B(330));
        Es(a, u);
      }
  }
  for (n = zu, zu = [], r = 0; r < n.length; r += 2) {
    (o = n[r]), (a = n[r + 1]);
    try {
      var l = o.create;
      o.destroy = l();
    } catch (u) {
      if (null === a) throw Error(B(330));
      Es(a, u);
    }
  }
  for (l = e.current.firstEffect; null !== l; )
    (e = l.nextEffect),
      (l.nextEffect = null),
      8 & l.flags && ((l.sibling = null), (l.stateNode = null)),
      (l = e);
  return (mu = t), _a(), !0;
}
function ws(e, t, n) {
  Ya(e, (t = Yl(0, (t = Bl(n, t)), 1))),
    (t = Yu()),
    null !== (e = Gu(e, 1)) && (Tn(e, 1, t), Zu(e, t));
}
function Es(e, t) {
  if (3 === e.tag) ws(e, e, t);
  else
    for (var n = e.return; null !== n; ) {
      if (3 === n.tag) {
        ws(n, e, t);
        break;
      }
      if (1 === n.tag) {
        var r = n.stateNode;
        if (
          'function' == typeof n.type.getDerivedStateFromError ||
          ('function' == typeof r.componentDidCatch && (null === Lu || !Lu.has(r)))
        ) {
          var o = Ql(n, (e = Bl(t, e)), 1);
          if ((Ya(n, o), (o = Yu()), null !== (n = Gu(n, 1)))) Tn(n, 1, o), Zu(n, o);
          else if ('function' == typeof r.componentDidCatch && (null === Lu || !Lu.has(r)))
            try {
              r.componentDidCatch(t, e);
            } catch (a) {}
          break;
        }
      }
      n = n.return;
    }
}
function ks(e, t, n) {
  var r = e.pingCache;
  null !== r && r.delete(t),
    (t = Yu()),
    (e.pingedLanes |= e.suspendedLanes & n),
    hu === e &&
      (gu & n) === n &&
      (4 === xu || (3 === xu && (62914560 & gu) === gu && 500 > Pa() - Nu) ? is(e, 0) : (Su |= n)),
    Zu(e, t);
}
function Cs(e, t) {
  var n = e.stateNode;
  null !== n && n.delete(t),
    0 === (t = 0) &&
      (0 == (2 & (t = e.mode))
        ? (t = 1)
        : 0 == (4 & t)
        ? (t = 99 === Na() ? 1 : 2)
        : (0 === $u && ($u = Eu), 0 === (t = Nn(62914560 & ~$u)) && (t = 4194304))),
    (n = Yu()),
    null !== (e = Gu(e, t)) && (Tn(e, t, n), Zu(e, n));
}
function Ss(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ps(e, t, n, r) {
  return new Ss(e, t, n, r);
}
function Ns(e) {
  return !(!(e = e.prototype) || !e.isReactComponent);
}
function Os(e, t) {
  var n = e.alternate;
  return (
    null === n
      ? (((n = Ps(e.tag, t, e.key, e.mode)).elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.nextEffect = null),
        (n.firstEffect = null),
        (n.lastEffect = null)),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ts(e, t, n, r, o, a) {
  var i = 2;
  if (((r = e), 'function' == typeof e)) Ns(e) && (i = 1);
  else if ('string' == typeof e) i = 5;
  else
    e: switch (e) {
      case se:
        return Ms(n.children, o, a, t);
      case we:
        (i = 8), (o |= 16);
        break;
      case ce:
        (i = 8), (o |= 1);
        break;
      case fe:
        return ((e = Ps(12, n, t, 8 | o)).elementType = fe), (e.type = fe), (e.lanes = a), e;
      case he:
        return ((e = Ps(13, n, t, o)).type = he), (e.elementType = he), (e.lanes = a), e;
      case ve:
        return ((e = Ps(19, n, t, o)).elementType = ve), (e.lanes = a), e;
      case Ee:
        return _s(n, o, a, t);
      case ke:
        return ((e = Ps(24, n, t, o)).elementType = ke), (e.lanes = a), e;
      default:
        if ('object' == typeof e && null !== e)
          switch (e.$$typeof) {
            case de:
              i = 10;
              break e;
            case pe:
              i = 9;
              break e;
            case me:
              i = 11;
              break e;
            case ge:
              i = 14;
              break e;
            case ye:
              (i = 16), (r = null);
              break e;
            case be:
              i = 22;
              break e;
          }
        throw Error(B(130, null == e ? e : typeof e, ''));
    }
  return ((t = Ps(i, n, t, o)).elementType = e), (t.type = r), (t.lanes = a), t;
}
function Ms(e, t, n, r) {
  return ((e = Ps(7, e, r, t)).lanes = n), e;
}
function _s(e, t, n, r) {
  return ((e = Ps(23, e, r, t)).elementType = Ee), (e.lanes = n), e;
}
function Rs(e, t, n) {
  return ((e = Ps(6, e, null, t)).lanes = n), e;
}
function Fs(e, t, n) {
  return (
    ((t = Ps(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ls(e, t, n) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = n),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = On(0)),
    (this.expirationTimes = On(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = On(0)),
    (this.mutableSourceEagerHydrationData = null);
}
function As(e, t, n) {
  var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: ue,
    key: null == r ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Is(e, t, n, r) {
  var o = t.current,
    a = Yu(),
    i = Qu(o);
  e: if (n) {
    t: {
      if (At((n = n._reactInternals)) !== n || 1 !== n.tag) throw Error(B(170));
      var l = n;
      do {
        switch (l.tag) {
          case 3:
            l = l.stateNode.context;
            break t;
          case 1:
            if (ea(l.type)) {
              l = l.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        l = l.return;
      } while (null !== l);
      throw Error(B(171));
    }
    if (1 === n.tag) {
      var u = n.type;
      if (ea(u)) {
        n = ra(n, u, l);
        break e;
      }
    }
    n = l;
  } else n = Qo;
  return (
    null === t.context ? (t.context = n) : (t.pendingContext = n),
    ((t = Ka(a, i)).payload = { element: e }),
    null !== (r = void 0 === r ? null : r) && (t.callback = r),
    Ya(o, t),
    Xu(o, i, a),
    i
  );
}
function js(e) {
  if (!(e = e.current).child) return null;
  switch (e.child.tag) {
    case 5:
    default:
      return e.child.stateNode;
  }
}
function zs(e, t) {
  if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
    var n = e.retryLane;
    e.retryLane = 0 !== n && n < t ? n : t;
  }
}
function Ds(e, t) {
  zs(e, t), (e = e.alternate) && zs(e, t);
}
function Vs(e, t, n) {
  var r = (null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources) || null;
  if (
    ((n = new Ls(e, t, null != n && !0 === n.hydrate)),
    (t = Ps(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
    (n.current = t),
    (t.stateNode = n),
    Ba(t),
    (e[jo] = n.current),
    ho(8 === e.nodeType ? e.parentNode : e),
    r)
  )
    for (e = 0; e < r.length; e++) {
      var o = (t = r[e])._getVersion;
      (o = o(t._source)),
        null == n.mutableSourceEagerHydrationData
          ? (n.mutableSourceEagerHydrationData = [t, o])
          : n.mutableSourceEagerHydrationData.push(t, o);
    }
  this._internalRoot = n;
}
function Us(e) {
  return !(
    !e ||
    (1 !== e.nodeType &&
      9 !== e.nodeType &&
      11 !== e.nodeType &&
      (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
  );
}
function Hs(e, t, n, r, o) {
  var a = n._reactRootContainer;
  if (a) {
    var i = a._internalRoot;
    if ('function' == typeof o) {
      var l = o;
      o = function () {
        var e = js(i);
        l.call(e);
      };
    }
    Is(t, i, e, o);
  } else {
    if (
      ((a = n._reactRootContainer =
        (function (e, t) {
          if (
            (t ||
              (t = !(
                !(t = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) ||
                1 !== t.nodeType ||
                !t.hasAttribute('data-reactroot')
              )),
            !t)
          )
            for (var n; (n = e.lastChild); ) e.removeChild(n);
          return new Vs(e, 0, t ? { hydrate: !0 } : void 0);
        })(n, r)),
      (i = a._internalRoot),
      'function' == typeof o)
    ) {
      var u = o;
      o = function () {
        var e = js(i);
        u.call(e);
      };
    }
    rs(function () {
      Is(t, i, e, o);
    });
  }
  return js(i);
}
function Ws(e, t) {
  var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!Us(t)) throw Error(B(200));
  return As(e, t, null, n);
}
(Mu = function (e, t, n) {
  var r = t.lanes;
  if (null !== e)
    if (e.memoizedProps !== t.pendingProps || Go.current) bl = !0;
    else {
      if (0 == (n & r)) {
        switch (((bl = !1), t.tag)) {
          case 3:
            Tl(t), Mi();
            break;
          case 5:
            yi(t);
            break;
          case 1:
            ea(t.type) && oa(t);
            break;
          case 4:
            vi(t, t.stateNode.containerInfo);
            break;
          case 10:
            r = t.memoizedProps.value;
            var o = t.type._context;
            Yo(Aa, o._currentValue), (o._currentValue = r);
            break;
          case 13:
            if (null !== t.memoizedState)
              return 0 != (n & t.child.childLanes)
                ? Ll(e, t, n)
                : (Yo(xi, 1 & xi.current), null !== (t = Ul(e, t, n)) ? t.sibling : null);
            Yo(xi, 1 & xi.current);
            break;
          case 19:
            if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
              if (r) return Vl(e, t, n);
              t.flags |= 64;
            }
            if (
              (null !== (o = t.memoizedState) &&
                ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
              Yo(xi, xi.current),
              r)
            )
              break;
            return null;
          case 23:
          case 24:
            return (t.lanes = 0), Cl(e, t, n);
        }
        return Ul(e, t, n);
      }
      bl = 0 != (16384 & e.flags);
    }
  else bl = !1;
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      if (
        ((r = t.type),
        null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps),
        (o = Jo(t, Xo.current)),
        Ha(t, n),
        (o = Wi(null, t, r, e, o, n)),
        (t.flags |= 1),
        'object' == typeof o &&
          null !== o &&
          'function' == typeof o.render &&
          void 0 === o.$$typeof)
      ) {
        if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), ea(r))) {
          var a = !0;
          oa(t);
        } else a = !1;
        (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null), Ba(t);
        var i = r.getDerivedStateFromProps;
        'function' == typeof i && Ja(t, r, i, e),
          (o.updater = ei),
          (t.stateNode = o),
          (o._reactInternals = t),
          oi(t, r, e, n),
          (t = Ol(null, t, r, !0, a, n));
      } else (t.tag = 0), xl(null, t, o, n), (t = t.child);
      return t;
    case 16:
      o = t.elementType;
      e: {
        switch (
          (null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (o = (a = o._init)(o._payload)),
          (t.type = o),
          (a = t.tag =
            (function (e) {
              if ('function' == typeof e) return Ns(e) ? 1 : 0;
              if (null != e) {
                if ((e = e.$$typeof) === me) return 11;
                if (e === ge) return 14;
              }
              return 2;
            })(o)),
          (e = La(o, e)),
          a)
        ) {
          case 0:
            t = Pl(null, t, o, e, n);
            break e;
          case 1:
            t = Nl(null, t, o, e, n);
            break e;
          case 11:
            t = wl(null, t, o, e, n);
            break e;
          case 14:
            t = El(null, t, o, La(o.type, e), r, n);
            break e;
        }
        throw Error(B(306, o, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type), (o = t.pendingProps), Pl(e, t, r, (o = t.elementType === r ? o : La(r, o)), n)
      );
    case 1:
      return (
        (r = t.type), (o = t.pendingProps), Nl(e, t, r, (o = t.elementType === r ? o : La(r, o)), n)
      );
    case 3:
      if ((Tl(t), (r = t.updateQueue), null === e || null === r)) throw Error(B(282));
      if (
        ((r = t.pendingProps),
        (o = null !== (o = t.memoizedState) ? o.element : null),
        qa(e, t),
        Xa(t, r, null, n),
        (r = t.memoizedState.element) === o)
      )
        Mi(), (t = Ul(e, t, n));
      else {
        if (
          ((a = (o = t.stateNode).hydrate) &&
            ((ki = _o(t.stateNode.containerInfo.firstChild)), (Ei = t), (a = Ci = !0)),
          a)
        ) {
          if (null != (e = o.mutableSourceEagerHydrationData))
            for (o = 0; o < e.length; o += 2)
              ((a = e[o])._workInProgressVersionPrimary = e[o + 1]), _i.push(a);
          for (n = ci(t, null, r, n), t.child = n; n; )
            (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
        } else xl(e, t, r, n), Mi();
        t = t.child;
      }
      return t;
    case 5:
      return (
        yi(t),
        null === e && Ni(t),
        (r = t.type),
        (o = t.pendingProps),
        (a = null !== e ? e.memoizedProps : null),
        (i = o.children),
        No(r, o) ? (i = null) : null !== a && No(r, a) && (t.flags |= 16),
        Sl(e, t),
        xl(e, t, i, n),
        t.child
      );
    case 6:
      return null === e && Ni(t), null;
    case 13:
      return Ll(e, t, n);
    case 4:
      return (
        vi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        null === e ? (t.child = si(t, null, r, n)) : xl(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type), (o = t.pendingProps), wl(e, t, r, (o = t.elementType === r ? o : La(r, o)), n)
      );
    case 7:
      return xl(e, t, t.pendingProps, n), t.child;
    case 8:
    case 12:
      return xl(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        (r = t.type._context), (o = t.pendingProps), (i = t.memoizedProps), (a = o.value);
        var l = t.type._context;
        if ((Yo(Aa, l._currentValue), (l._currentValue = a), null !== i))
          if (
            ((l = i.value),
            0 ===
              (a = qr(l, a)
                ? 0
                : 0 |
                  ('function' == typeof r._calculateChangedBits
                    ? r._calculateChangedBits(l, a)
                    : 1073741823)))
          ) {
            if (i.children === o.children && !Go.current) {
              t = Ul(e, t, n);
              break e;
            }
          } else
            for (null !== (l = t.child) && (l.return = t); null !== l; ) {
              var u = l.dependencies;
              if (null !== u) {
                i = l.child;
                for (var s = u.firstContext; null !== s; ) {
                  if (s.context === r && 0 != (s.observedBits & a)) {
                    1 === l.tag && (((s = Ka(-1, n & -n)).tag = 2), Ya(l, s)),
                      (l.lanes |= n),
                      null !== (s = l.alternate) && (s.lanes |= n),
                      Ua(l.return, n),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else i = 10 === l.tag && l.type === t.type ? null : l.child;
              if (null !== i) i.return = l;
              else
                for (i = l; null !== i; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (null !== (l = i.sibling)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        xl(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = (a = t.pendingProps).children),
        Ha(t, n),
        (r = r((o = Wa(o, a.unstable_observedBits)))),
        (t.flags |= 1),
        xl(e, t, r, n),
        t.child
      );
    case 14:
      return (a = La((o = t.type), t.pendingProps)), El(e, t, o, (a = La(o.type, a)), r, n);
    case 15:
      return kl(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : La(r, o)),
        null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        ea(r) ? ((e = !0), oa(t)) : (e = !1),
        Ha(t, n),
        ni(t, r, o),
        oi(t, r, o, n),
        Ol(null, t, r, !0, e, n)
      );
    case 19:
      return Vl(e, t, n);
    case 23:
    case 24:
      return Cl(e, t, n);
  }
  throw Error(B(156, t.tag));
}),
  (Vs.prototype.render = function (e) {
    Is(e, this._internalRoot, null, null);
  }),
  (Vs.prototype.unmount = function () {
    var e = this._internalRoot,
      t = e.containerInfo;
    Is(null, e, null, function () {
      t[jo] = null;
    });
  }),
  (Vt = function (e) {
    13 === e.tag && (Xu(e, 4, Yu()), Ds(e, 4));
  }),
  (Ut = function (e) {
    13 === e.tag && (Xu(e, 67108864, Yu()), Ds(e, 67108864));
  }),
  (Ht = function (e) {
    if (13 === e.tag) {
      var t = Yu(),
        n = Qu(e);
      Xu(e, n, t), Ds(e, n);
    }
  }),
  (Wt = function (e, t) {
    return t();
  }),
  (dt = function (e, t, n) {
    switch (t) {
      case 'input':
        if ((Ue(e, n), (t = n.name), 'radio' === n.type && null != t)) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = Ho(r);
              if (!o) throw Error(B(90));
              Ie(r), Ue(r, o);
            }
          }
        }
        break;
      case 'textarea':
        Ye(e, n);
        break;
      case 'select':
        null != (t = n.value) && Be(e, !!n.multiple, t, !1);
    }
  }),
  (yt = ns),
  (bt = function (e, t, n, r, o) {
    var a = mu;
    mu |= 4;
    try {
      return Ta(98, e.bind(null, t, n, r, o));
    } finally {
      0 === (mu = a) && (Tu(), _a());
    }
  }),
  (xt = function () {
    0 == (49 & mu) &&
      ((function () {
        if (null !== Vu) {
          var e = Vu;
          (Vu = null),
            e.forEach(function (e) {
              (e.expiredLanes |= 24 & e.pendingLanes), Zu(e, Pa());
            });
        }
        _a();
      })(),
      gs());
  }),
  (wt = function (e, t) {
    var n = mu;
    mu |= 2;
    try {
      return e(t);
    } finally {
      0 === (mu = n) && (Tu(), _a());
    }
  });
var $s = { Events: [Vo, Uo, Ho, vt, gt, gs, { current: !1 }] },
  Bs = {
    findFiberByHostInstance: Do,
    bundleType: 0,
    version: '17.0.2',
    rendererPackageName: 'react-dom',
  },
  qs = {
    bundleType: Bs.bundleType,
    version: Bs.version,
    rendererPackageName: Bs.rendererPackageName,
    rendererConfig: Bs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ie.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return null === (e = zt(e)) ? null : e.stateNode;
    },
    findFiberByHostInstance:
      Bs.findFiberByHostInstance ||
      function () {
        return null;
      },
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  };
if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var Ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ks.isDisabled && Ks.supportsFiber)
    try {
      (ia = Ks.inject(qs)), (la = Ks);
    } catch (tt) {}
}
(D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $s),
  (D.createPortal = Ws),
  (D.findDOMNode = function (e) {
    if (null == e) return null;
    if (1 === e.nodeType) return e;
    var t = e._reactInternals;
    if (void 0 === t) {
      if ('function' == typeof e.render) throw Error(B(188));
      throw Error(B(268, Object.keys(e)));
    }
    return (e = null === (e = zt(t)) ? null : e.stateNode);
  }),
  (D.flushSync = function (e, t) {
    var n = mu;
    if (0 != (48 & n)) return e(t);
    mu |= 1;
    try {
      if (e) return Ta(99, e.bind(null, t));
    } finally {
      (mu = n), _a();
    }
  }),
  (D.hydrate = function (e, t, n) {
    if (!Us(t)) throw Error(B(200));
    return Hs(null, e, t, !0, n);
  }),
  (D.render = function (e, t, n) {
    if (!Us(t)) throw Error(B(200));
    return Hs(null, e, t, !1, n);
  }),
  (D.unmountComponentAtNode = function (e) {
    if (!Us(e)) throw Error(B(40));
    return (
      !!e._reactRootContainer &&
      (rs(function () {
        Hs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[jo] = null);
        });
      }),
      !0)
    );
  }),
  (D.unstable_batchedUpdates = ns),
  (D.unstable_createPortal = function (e, t) {
    return Ws(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
  }),
  (D.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Us(n)) throw Error(B(200));
    if (null == e || void 0 === e._reactInternals) throw Error(B(38));
    return Hs(e, t, n, !1, r);
  }),
  (D.version = '17.0.2'),
  (function e() {
    if (
      'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
      'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  })(),
  (z.exports = D);
var Ys = z.exports;
function Qs() {
  return (Qs =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
function Xs(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Gs(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function Zs(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Js(e, t, n) {
  return t && Zs(e.prototype, t), n && Zs(e, n), e;
}
function ec(e, t) {
  return (ec =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function tc(e, t) {
  if ('function' != typeof t && null !== t)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && ec(e, t);
}
function nc(e) {
  return (nc = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function rc(e) {
  return (rc =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
}
function oc(e) {
  if (void 0 === e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ac(e, t) {
  return !t || ('object' !== rc(t) && 'function' != typeof t) ? oc(e) : t;
}
function ic(e) {
  var t = (function () {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  })();
  return function () {
    var n,
      r = nc(e);
    if (t) {
      var o = nc(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return ac(this, n);
  };
}
var lc,
  uc = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ (lc = uc),
  (function () {
    var e = {}.hasOwnProperty;
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) {
        var o = arguments[r];
        if (o) {
          var a = typeof o;
          if ('string' === a || 'number' === a) n.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var i = t.apply(null, o);
              i && n.push(i);
            }
          } else if ('object' === a)
            if (o.toString === Object.prototype.toString)
              for (var l in o) e.call(o, l) && o[l] && n.push(l);
            else n.push(o.toString());
        }
      }
      return n.join(' ');
    }
    lc.exports ? ((t.default = t), (lc.exports = t)) : (window.classNames = t);
  })();
var sc = uc.exports;
function cc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function fc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? cc(Object(n), !0).forEach(function (t) {
          Xs(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : cc(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function dc(e, t) {
  var n = fc({}, e);
  return (
    Array.isArray(t) &&
      t.forEach(function (e) {
        delete n[e];
      }),
    n
  );
}
function pc(e) {
  return e instanceof HTMLElement ? e : Ys.findDOMNode(e);
}
var mc = { exports: {} },
  hc = {},
  vc = 'function' == typeof Symbol && Symbol.for,
  gc = vc ? Symbol.for('react.element') : 60103,
  yc = vc ? Symbol.for('react.portal') : 60106,
  bc = vc ? Symbol.for('react.fragment') : 60107,
  xc = vc ? Symbol.for('react.strict_mode') : 60108,
  wc = vc ? Symbol.for('react.profiler') : 60114,
  Ec = vc ? Symbol.for('react.provider') : 60109,
  kc = vc ? Symbol.for('react.context') : 60110,
  Cc = vc ? Symbol.for('react.async_mode') : 60111,
  Sc = vc ? Symbol.for('react.concurrent_mode') : 60111,
  Pc = vc ? Symbol.for('react.forward_ref') : 60112,
  Nc = vc ? Symbol.for('react.suspense') : 60113,
  Oc = vc ? Symbol.for('react.suspense_list') : 60120,
  Tc = vc ? Symbol.for('react.memo') : 60115,
  Mc = vc ? Symbol.for('react.lazy') : 60116,
  _c = vc ? Symbol.for('react.block') : 60121,
  Rc = vc ? Symbol.for('react.fundamental') : 60117,
  Fc = vc ? Symbol.for('react.responder') : 60118,
  Lc = vc ? Symbol.for('react.scope') : 60119;
function Ac(e) {
  if ('object' == typeof e && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case gc:
        switch ((e = e.type)) {
          case Cc:
          case Sc:
          case bc:
          case wc:
          case xc:
          case Nc:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case kc:
              case Pc:
              case Mc:
              case Tc:
              case Ec:
                return e;
              default:
                return t;
            }
        }
      case yc:
        return t;
    }
  }
}
function Ic(e) {
  return Ac(e) === Sc;
}
function jc(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    n = [];
  return (
    j.Children.forEach(e, function (e) {
      (null != e || t.keepEmpty) &&
        (Array.isArray(e)
          ? (n = n.concat(jc(e)))
          : mc.exports.isFragment(e) && e.props
          ? (n = n.concat(jc(e.props.children, t)))
          : n.push(e));
    }),
    n
  );
}
(hc.AsyncMode = Cc),
  (hc.ConcurrentMode = Sc),
  (hc.ContextConsumer = kc),
  (hc.ContextProvider = Ec),
  (hc.Element = gc),
  (hc.ForwardRef = Pc),
  (hc.Fragment = bc),
  (hc.Lazy = Mc),
  (hc.Memo = Tc),
  (hc.Portal = yc),
  (hc.Profiler = wc),
  (hc.StrictMode = xc),
  (hc.Suspense = Nc),
  (hc.isAsyncMode = function (e) {
    return Ic(e) || Ac(e) === Cc;
  }),
  (hc.isConcurrentMode = Ic),
  (hc.isContextConsumer = function (e) {
    return Ac(e) === kc;
  }),
  (hc.isContextProvider = function (e) {
    return Ac(e) === Ec;
  }),
  (hc.isElement = function (e) {
    return 'object' == typeof e && null !== e && e.$$typeof === gc;
  }),
  (hc.isForwardRef = function (e) {
    return Ac(e) === Pc;
  }),
  (hc.isFragment = function (e) {
    return Ac(e) === bc;
  }),
  (hc.isLazy = function (e) {
    return Ac(e) === Mc;
  }),
  (hc.isMemo = function (e) {
    return Ac(e) === Tc;
  }),
  (hc.isPortal = function (e) {
    return Ac(e) === yc;
  }),
  (hc.isProfiler = function (e) {
    return Ac(e) === wc;
  }),
  (hc.isStrictMode = function (e) {
    return Ac(e) === xc;
  }),
  (hc.isSuspense = function (e) {
    return Ac(e) === Nc;
  }),
  (hc.isValidElementType = function (e) {
    return (
      'string' == typeof e ||
      'function' == typeof e ||
      e === bc ||
      e === Sc ||
      e === wc ||
      e === xc ||
      e === Nc ||
      e === Oc ||
      ('object' == typeof e &&
        null !== e &&
        (e.$$typeof === Mc ||
          e.$$typeof === Tc ||
          e.$$typeof === Ec ||
          e.$$typeof === kc ||
          e.$$typeof === Pc ||
          e.$$typeof === Rc ||
          e.$$typeof === Fc ||
          e.$$typeof === Lc ||
          e.$$typeof === _c))
    );
  }),
  (hc.typeOf = Ac),
  (mc.exports = hc);
var zc = {};
function Dc(e, t) {}
function Vc(e, t) {
  !(function (e, t, n) {
    t || zc[n] || (e(!1, n), (zc[n] = !0));
  })(Dc, e, t);
}
function Uc(e, t) {
  'function' == typeof e ? e(t) : 'object' === rc(e) && e && 'current' in e && (e.current = t);
}
function Hc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return function (e) {
    t.forEach(function (t) {
      Uc(t, e);
    });
  };
}
function Wc(e) {
  var t,
    n,
    r = mc.exports.isMemo(e) ? e.type.type : e.type;
  return (
    !(
      'function' == typeof r && !(null === (t = r.prototype) || void 0 === t ? void 0 : t.render)
    ) &&
    !('function' == typeof e && !(null === (n = e.prototype) || void 0 === n ? void 0 : n.render))
  );
}
var $c = (function () {
    if ('undefined' != typeof Map) return Map;
    function e(e, t) {
      var n = -1;
      return (
        e.some(function (e, r) {
          return e[0] === t && ((n = r), !0);
        }),
        n
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, 'size', {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (t) {
          var n = e(this.__entries__, t),
            r = this.__entries__[n];
          return r && r[1];
        }),
        (t.prototype.set = function (t, n) {
          var r = e(this.__entries__, t);
          ~r ? (this.__entries__[r][1] = n) : this.__entries__.push([t, n]);
        }),
        (t.prototype.delete = function (t) {
          var n = this.__entries__,
            r = e(n, t);
          ~r && n.splice(r, 1);
        }),
        (t.prototype.has = function (t) {
          return !!~e(this.__entries__, t);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (e, t) {
          void 0 === t && (t = null);
          for (var n = 0, r = this.__entries__; n < r.length; n++) {
            var o = r[n];
            e.call(t, o[1], o[0]);
          }
        }),
        t
      );
    })();
  })(),
  Bc =
    'undefined' != typeof window && 'undefined' != typeof document && window.document === document,
  qc =
    'undefined' != typeof global && global.Math === Math
      ? global
      : 'undefined' != typeof self && self.Math === Math
      ? self
      : 'undefined' != typeof window && window.Math === Math
      ? window
      : Function('return this')(),
  Kc =
    'function' == typeof requestAnimationFrame
      ? requestAnimationFrame.bind(qc)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        };
var Yc = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
  Qc = 'undefined' != typeof MutationObserver,
  Xc = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = (function (e, t) {
          var n = !1,
            r = !1,
            o = 0;
          function a() {
            n && ((n = !1), e()), r && l();
          }
          function i() {
            Kc(a);
          }
          function l() {
            var e = Date.now();
            if (n) {
              if (e - o < 2) return;
              r = !0;
            } else (n = !0), (r = !1), setTimeout(i, t);
            o = e;
          }
          return l;
        })(this.refresh.bind(this), 20));
    }
    return (
      (e.prototype.addObserver = function (e) {
        ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (e) {
        var t = this.observers_,
          n = t.indexOf(e);
        ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        this.updateObservers_() && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var e = this.observers_.filter(function (e) {
          return e.gatherActive(), e.hasActive();
        });
        return (
          e.forEach(function (e) {
            return e.broadcastActive();
          }),
          e.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        Bc &&
          !this.connected_ &&
          (document.addEventListener('transitionend', this.onTransitionEnd_),
          window.addEventListener('resize', this.refresh),
          Qc
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener('DOMSubtreeModified', this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        Bc &&
          this.connected_ &&
          (document.removeEventListener('transitionend', this.onTransitionEnd_),
          window.removeEventListener('resize', this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener('DOMSubtreeModified', this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (e) {
        var t = e.propertyName,
          n = void 0 === t ? '' : t;
        Yc.some(function (e) {
          return !!~n.indexOf(e);
        }) && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  Gc = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var o = r[n];
      Object.defineProperty(e, o, { value: t[o], enumerable: !1, writable: !1, configurable: !0 });
    }
    return e;
  },
  Zc = function (e) {
    return (e && e.ownerDocument && e.ownerDocument.defaultView) || qc;
  },
  Jc = af(0, 0, 0, 0);
function ef(e) {
  return parseFloat(e) || 0;
}
function tf(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (t, n) {
    return t + ef(e['border-' + n + '-width']);
  }, 0);
}
function nf(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return Jc;
  var r = Zc(e).getComputedStyle(e),
    o = (function (e) {
      for (var t = {}, n = 0, r = ['top', 'right', 'bottom', 'left']; n < r.length; n++) {
        var o = r[n],
          a = e['padding-' + o];
        t[o] = ef(a);
      }
      return t;
    })(r),
    a = o.left + o.right,
    i = o.top + o.bottom,
    l = ef(r.width),
    u = ef(r.height);
  if (
    ('border-box' === r.boxSizing &&
      (Math.round(l + a) !== t && (l -= tf(r, 'left', 'right') + a),
      Math.round(u + i) !== n && (u -= tf(r, 'top', 'bottom') + i)),
    !(function (e) {
      return e === Zc(e).document.documentElement;
    })(e))
  ) {
    var s = Math.round(l + a) - t,
      c = Math.round(u + i) - n;
    1 !== Math.abs(s) && (l -= s), 1 !== Math.abs(c) && (u -= c);
  }
  return af(o.left, o.top, l, u);
}
var rf =
  'undefined' != typeof SVGGraphicsElement
    ? function (e) {
        return e instanceof Zc(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof Zc(e).SVGElement && 'function' == typeof e.getBBox;
      };
function of(e) {
  return Bc
    ? rf(e)
      ? (function (e) {
          var t = e.getBBox();
          return af(0, 0, t.width, t.height);
        })(e)
      : nf(e)
    : Jc;
}
function af(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var lf = (function () {
    function e(e) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = af(0, 0, 0, 0)),
        (this.target = e);
    }
    return (
      (e.prototype.isActive = function () {
        var e = of(this.target);
        return (
          (this.contentRect_ = e),
          e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var e = this.contentRect_;
        return (this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e;
      }),
      e
    );
  })(),
  uf = function (e, t) {
    var n,
      r,
      o,
      a,
      i,
      l,
      u,
      s =
        ((r = (n = t).x),
        (o = n.y),
        (a = n.width),
        (i = n.height),
        (l = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
        (u = Object.create(l.prototype)),
        Gc(u, { x: r, y: o, width: a, height: i, top: o, right: r + a, bottom: i + o, left: r }),
        u);
    Gc(this, { target: e, contentRect: s });
  },
  sf = (function () {
    function e(e, t, n) {
      if (
        ((this.activeObservations_ = []), (this.observations_ = new $c()), 'function' != typeof e)
      )
        throw new TypeError('The callback provided as parameter 1 is not a function.');
      (this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n);
    }
    return (
      (e.prototype.observe = function (e) {
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        if ('undefined' != typeof Element && Element instanceof Object) {
          if (!(e instanceof Zc(e).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var t = this.observations_;
          t.has(e) ||
            (t.set(e, new lf(e)), this.controller_.addObserver(this), this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (e) {
        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
        if ('undefined' != typeof Element && Element instanceof Object) {
          if (!(e instanceof Zc(e).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var t = this.observations_;
          t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var e = this;
        this.clearActive(),
          this.observations_.forEach(function (t) {
            t.isActive() && e.activeObservations_.push(t);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var e = this.callbackCtx_,
            t = this.activeObservations_.map(function (e) {
              return new uf(e.target, e.broadcastRect());
            });
          this.callback_.call(e, t, e), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  cf = 'undefined' != typeof WeakMap ? new WeakMap() : new $c(),
  ff = function e(t) {
    if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.');
    if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
    var n = Xc.getInstance(),
      r = new sf(t, n, this);
    cf.set(this, r);
  };
['observe', 'unobserve', 'disconnect'].forEach(function (e) {
  ff.prototype[e] = function () {
    var t;
    return (t = cf.get(this))[e].apply(t, arguments);
  };
});
var df = void 0 !== qc.ResizeObserver ? qc.ResizeObserver : ff,
  pf = (function (t) {
    tc(r, e.exports.Component);
    var n = ic(r);
    function r() {
      var e;
      return (
        Gs(this, r),
        ((e = n.apply(this, arguments)).resizeObserver = null),
        (e.childNode = null),
        (e.currentElement = null),
        (e.state = { width: 0, height: 0, offsetHeight: 0, offsetWidth: 0 }),
        (e.onResize = function (t) {
          var n = e.props.onResize,
            r = t[0].target,
            o = r.getBoundingClientRect(),
            a = o.width,
            i = o.height,
            l = r.offsetWidth,
            u = r.offsetHeight,
            s = Math.floor(a),
            c = Math.floor(i);
          if (
            e.state.width !== s ||
            e.state.height !== c ||
            e.state.offsetWidth !== l ||
            e.state.offsetHeight !== u
          ) {
            var f = { width: s, height: c, offsetWidth: l, offsetHeight: u };
            e.setState(f),
              n &&
                Promise.resolve().then(function () {
                  n(fc(fc({}, f), {}, { offsetWidth: l, offsetHeight: u }), r);
                });
          }
        }),
        (e.setChildNode = function (t) {
          e.childNode = t;
        }),
        e
      );
    }
    return (
      Js(r, [
        {
          key: 'componentDidMount',
          value: function () {
            this.onComponentUpdated();
          },
        },
        {
          key: 'componentDidUpdate',
          value: function () {
            this.onComponentUpdated();
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.destroyObserver();
          },
        },
        {
          key: 'onComponentUpdated',
          value: function () {
            if (this.props.disabled) this.destroyObserver();
            else {
              var e = pc(this.childNode || this);
              e !== this.currentElement && (this.destroyObserver(), (this.currentElement = e)),
                !this.resizeObserver &&
                  e &&
                  ((this.resizeObserver = new df(this.onResize)), this.resizeObserver.observe(e));
            }
          },
        },
        {
          key: 'destroyObserver',
          value: function () {
            this.resizeObserver && (this.resizeObserver.disconnect(), (this.resizeObserver = null));
          },
        },
        {
          key: 'render',
          value: function () {
            var t = jc(this.props.children);
            if (t.length > 1)
              Vc(
                !1,
                'Find more than one child node with `children` in ResizeObserver. Will only observe first one.',
              );
            else if (0 === t.length)
              return Vc(!1, '`children` of ResizeObserver is empty. Nothing is in observe.'), null;
            var n = t[0];
            if (e.exports.isValidElement(n) && Wc(n)) {
              var r = n.ref;
              t[0] = e.exports.cloneElement(n, { ref: Hc(r, this.setChildNode) });
            }
            return 1 === t.length
              ? t[0]
              : t.map(function (t, n) {
                  return !e.exports.isValidElement(t) || ('key' in t && null !== t.key)
                    ? t
                    : e.exports.cloneElement(t, {
                        key: ''.concat('rc-observer-key', '-').concat(n),
                      });
                });
          },
        },
      ]),
      r
    );
  })();
pf.displayName = 'ResizeObserver';
var mf = e.exports.createContext({});
function hf() {
  return (hf =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
function vf(e, t) {
  if (null == e) return {};
  var n,
    r,
    o = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        o = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function gf(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function yf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function bf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? yf(Object(n), !0).forEach(function (t) {
          gf(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : yf(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function xf(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function wf(e, t) {
  if (e) {
    if ('string' == typeof e) return xf(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(e)
        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? xf(e, t)
        : void 0
    );
  }
}
function Ef(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return xf(e);
    })(e) ||
    (function (e) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
    })(e) ||
    wf(e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function kf(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function Cf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Sf(e, t, n) {
  return t && Cf(e.prototype, t), n && Cf(e, n), e;
}
function Pf(e) {
  if (void 0 === e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nf(e, t) {
  return (Nf =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function Of(e) {
  return (Of = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function Tf(e) {
  return (Tf =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
}
function Mf(e, t) {
  return !t || ('object' !== Tf(t) && 'function' != typeof t) ? Pf(e) : t;
}
function _f(e) {
  var t = (function () {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  })();
  return function () {
    var n,
      r = Of(e);
    if (t) {
      var o = Of(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return Mf(this, n);
  };
}
var Rf = 'RC_FORM_INTERNAL_HOOKS',
  Ff = function () {
    Vc(!1, 'Can not find FormContext. Please make sure you wrap Field under Form.');
  },
  Lf = e.exports.createContext({
    getFieldValue: Ff,
    getFieldsValue: Ff,
    getFieldError: Ff,
    getFieldsError: Ff,
    isFieldsTouched: Ff,
    isFieldTouched: Ff,
    isFieldValidating: Ff,
    isFieldsValidating: Ff,
    resetFields: Ff,
    setFields: Ff,
    setFieldsValue: Ff,
    validateFields: Ff,
    submit: Ff,
    getInternalHooks: function () {
      return (
        Ff(),
        {
          dispatch: Ff,
          initEntityValue: Ff,
          registerField: Ff,
          useSubscribe: Ff,
          setInitialValues: Ff,
          setCallbacks: Ff,
          getFields: Ff,
          setValidateMessages: Ff,
          setPreserve: Ff,
        }
      );
    },
  });
function Af(e) {
  return null == e ? [] : Array.isArray(e) ? e : [e];
}
var If = { exports: {} };
!(function (e) {
  var t = (function (e) {
    var t,
      n = Object.prototype,
      r = n.hasOwnProperty,
      o = 'function' == typeof Symbol ? Symbol : {},
      a = o.iterator || '@@iterator',
      i = o.asyncIterator || '@@asyncIterator',
      l = o.toStringTag || '@@toStringTag';
    function u(e, t, n) {
      return (
        Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
        e[t]
      );
    }
    try {
      u({}, '');
    } catch (_) {
      u = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function s(e, t, n, r) {
      var o = t && t.prototype instanceof v ? t : v,
        a = Object.create(o.prototype),
        i = new O(r || []);
      return (
        (a._invoke = (function (e, t, n) {
          var r = f;
          return function (o, a) {
            if (r === p) throw new Error('Generator is already running');
            if (r === m) {
              if ('throw' === o) throw a;
              return M();
            }
            for (n.method = o, n.arg = a; ; ) {
              var i = n.delegate;
              if (i) {
                var l = S(i, n);
                if (l) {
                  if (l === h) continue;
                  return l;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if (r === f) throw ((r = m), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              r = p;
              var u = c(e, t, n);
              if ('normal' === u.type) {
                if (((r = n.done ? m : d), u.arg === h)) continue;
                return { value: u.arg, done: n.done };
              }
              'throw' === u.type && ((r = m), (n.method = 'throw'), (n.arg = u.arg));
            }
          };
        })(e, n, i)),
        a
      );
    }
    function c(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) };
      } catch (_) {
        return { type: 'throw', arg: _ };
      }
    }
    e.wrap = s;
    var f = 'suspendedStart',
      d = 'suspendedYield',
      p = 'executing',
      m = 'completed',
      h = {};
    function v() {}
    function g() {}
    function y() {}
    var b = {};
    b[a] = function () {
      return this;
    };
    var x = Object.getPrototypeOf,
      w = x && x(x(T([])));
    w && w !== n && r.call(w, a) && (b = w);
    var E = (y.prototype = v.prototype = Object.create(b));
    function k(e) {
      ['next', 'throw', 'return'].forEach(function (t) {
        u(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function C(e, t) {
      function n(o, a, i, l) {
        var u = c(e[o], e, a);
        if ('throw' !== u.type) {
          var s = u.arg,
            f = s.value;
          return f && 'object' == typeof f && r.call(f, '__await')
            ? t.resolve(f.__await).then(
                function (e) {
                  n('next', e, i, l);
                },
                function (e) {
                  n('throw', e, i, l);
                },
              )
            : t.resolve(f).then(
                function (e) {
                  (s.value = e), i(s);
                },
                function (e) {
                  return n('throw', e, i, l);
                },
              );
        }
        l(u.arg);
      }
      var o;
      this._invoke = function (e, r) {
        function a() {
          return new t(function (t, o) {
            n(e, r, t, o);
          });
        }
        return (o = o ? o.then(a, a) : a());
      };
    }
    function S(e, n) {
      var r = e.iterator[n.method];
      if (r === t) {
        if (((n.delegate = null), 'throw' === n.method)) {
          if (
            e.iterator.return &&
            ((n.method = 'return'), (n.arg = t), S(e, n), 'throw' === n.method)
          )
            return h;
          (n.method = 'throw'),
            (n.arg = new TypeError("The iterator does not provide a 'throw' method"));
        }
        return h;
      }
      var o = c(r, e.iterator, n.arg);
      if ('throw' === o.type) return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), h;
      var a = o.arg;
      return a
        ? a.done
          ? ((n[e.resultName] = a.value),
            (n.next = e.nextLoc),
            'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
            (n.delegate = null),
            h)
          : a
        : ((n.method = 'throw'),
          (n.arg = new TypeError('iterator result is not an object')),
          (n.delegate = null),
          h);
    }
    function P(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t);
    }
    function N(e) {
      var t = e.completion || {};
      (t.type = 'normal'), delete t.arg, (e.completion = t);
    }
    function O(e) {
      (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(P, this), this.reset(!0);
    }
    function T(e) {
      if (e) {
        var n = e[a];
        if (n) return n.call(e);
        if ('function' == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function n() {
              for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
              return (n.value = t), (n.done = !0), n;
            };
          return (i.next = i);
        }
      }
      return { next: M };
    }
    function M() {
      return { value: t, done: !0 };
    }
    return (
      (g.prototype = E.constructor = y),
      (y.constructor = g),
      (g.displayName = u(y, l, 'GeneratorFunction')),
      (e.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor;
        return !!t && (t === g || 'GeneratorFunction' === (t.displayName || t.name));
      }),
      (e.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, y)
            : ((e.__proto__ = y), u(e, l, 'GeneratorFunction')),
          (e.prototype = Object.create(E)),
          e
        );
      }),
      (e.awrap = function (e) {
        return { __await: e };
      }),
      k(C.prototype),
      (C.prototype[i] = function () {
        return this;
      }),
      (e.AsyncIterator = C),
      (e.async = function (t, n, r, o, a) {
        void 0 === a && (a = Promise);
        var i = new C(s(t, n, r, o), a);
        return e.isGeneratorFunction(n)
          ? i
          : i.next().then(function (e) {
              return e.done ? e.value : i.next();
            });
      }),
      k(E),
      u(E, l, 'Generator'),
      (E[a] = function () {
        return this;
      }),
      (E.toString = function () {
        return '[object Generator]';
      }),
      (e.keys = function (e) {
        var t = [];
        for (var n in e) t.push(n);
        return (
          t.reverse(),
          function n() {
            for (; t.length; ) {
              var r = t.pop();
              if (r in e) return (n.value = r), (n.done = !1), n;
            }
            return (n.done = !0), n;
          }
        );
      }),
      (e.values = T),
      (O.prototype = {
        constructor: O,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = t),
            this.tryEntries.forEach(N),
            !e)
          )
            for (var n in this)
              't' === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ('throw' === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var n = this;
          function o(r, o) {
            return (
              (l.type = 'throw'),
              (l.arg = e),
              (n.next = r),
              o && ((n.method = 'next'), (n.arg = t)),
              !!o
            );
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var i = this.tryEntries[a],
              l = i.completion;
            if ('root' === i.tryLoc) return o('end');
            if (i.tryLoc <= this.prev) {
              var u = r.call(i, 'catchLoc'),
                s = r.call(i, 'finallyLoc');
              if (u && s) {
                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return o(i.finallyLoc);
              } else if (u) {
                if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
              } else {
                if (!s) throw new Error('try statement without catch or finally');
                if (this.prev < i.finallyLoc) return o(i.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var o = this.tryEntries[n];
            if (o.tryLoc <= this.prev && r.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
              var a = o;
              break;
            }
          }
          a &&
            ('break' === e || 'continue' === e) &&
            a.tryLoc <= t &&
            t <= a.finallyLoc &&
            (a = null);
          var i = a ? a.completion : {};
          return (
            (i.type = e),
            (i.arg = t),
            a ? ((this.method = 'next'), (this.next = a.finallyLoc), h) : this.complete(i)
          );
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg;
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
              ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
              : 'normal' === e.type && t && (this.next = t),
            h
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), N(n), h;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var r = n.completion;
              if ('throw' === r.type) {
                var o = r.arg;
                N(n);
              }
              return o;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (e, n, r) {
          return (
            (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }),
            'next' === this.method && (this.arg = t),
            h
          );
        },
      }),
      e
    );
  })(If.exports);
  try {
    regeneratorRuntime = t;
  } catch (n) {
    Function('r', 'regeneratorRuntime = r')(t);
  }
})();
var jf = If.exports;
function zf(e, t, n, r, o, a, i) {
  try {
    var l = e[a](i),
      u = l.value;
  } catch (s) {
    return void n(s);
  }
  l.done ? t(u) : Promise.resolve(u).then(r, o);
}
function Df(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, o) {
      var a = e.apply(t, n);
      function i(e) {
        zf(a, r, o, i, l, 'next', e);
      }
      function l(e) {
        zf(a, r, o, i, l, 'throw', e);
      }
      i(void 0);
    });
  };
}
function Vf() {
  return (Vf =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
function Uf(e) {
  return (Uf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function Hf(e, t) {
  return (Hf =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function Wf() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ('function' == typeof Proxy) return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch (e) {
    return !1;
  }
}
function $f(e, t, n) {
  return ($f = Wf()
    ? Reflect.construct
    : function (e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var o = new (Function.bind.apply(e, r))();
        return n && Hf(o, n.prototype), o;
      }).apply(null, arguments);
}
function Bf(e) {
  var t = 'function' == typeof Map ? new Map() : void 0;
  return (Bf = function (e) {
    if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf('[native code]')))
      return e;
    var n;
    if ('function' != typeof e)
      throw new TypeError('Super expression must either be null or a function');
    if (void 0 !== t) {
      if (t.has(e)) return t.get(e);
      t.set(e, r);
    }
    function r() {
      return $f(e, arguments, Uf(this).constructor);
    }
    return (
      (r.prototype = Object.create(e.prototype, {
        constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
      })),
      Hf(r, e)
    );
  })(e);
}
var qf = /%[sdj%]/g,
  Kf = function () {};
function Yf(e) {
  if (!e || !e.length) return null;
  var t = {};
  return (
    e.forEach(function (e) {
      var n = e.field;
      (t[n] = t[n] || []), t[n].push(e);
    }),
    t
  );
}
function Qf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  var r = 1,
    o = t[0],
    a = t.length;
  if ('function' == typeof o) return o.apply(null, t.slice(1));
  if ('string' == typeof o) {
    var i = String(o).replace(qf, function (e) {
      if ('%%' === e) return '%';
      if (r >= a) return e;
      switch (e) {
        case '%s':
          return String(t[r++]);
        case '%d':
          return Number(t[r++]);
        case '%j':
          try {
            return JSON.stringify(t[r++]);
          } catch (n) {
            return '[Circular]';
          }
          break;
        default:
          return e;
      }
    });
    return i;
  }
  return o;
}
function Xf(e, t) {
  return (
    null == e ||
    !('array' !== t || !Array.isArray(e) || e.length) ||
    !(
      !(function (e) {
        return (
          'string' === e ||
          'url' === e ||
          'hex' === e ||
          'email' === e ||
          'date' === e ||
          'pattern' === e
        );
      })(t) ||
      'string' != typeof e ||
      e
    )
  );
}
function Gf(e, t, n) {
  var r = 0,
    o = e.length;
  !(function a(i) {
    if (i && i.length) n(i);
    else {
      var l = r;
      (r += 1), l < o ? t(e[l], a) : n([]);
    }
  })([]);
}
'undefined' != typeof process && process.env;
var Zf = (function (e) {
  var t, n;
  function r(t, n) {
    var r;
    return ((r = e.call(this, 'Async Validation Error') || this).errors = t), (r.fields = n), r;
  }
  return (
    (n = e),
    ((t = r).prototype = Object.create(n.prototype)),
    (t.prototype.constructor = t),
    Hf(t, n),
    r
  );
})(Bf(Error));
function Jf(e, t, n, r) {
  if (t.first) {
    var o = new Promise(function (t, o) {
      Gf(
        (function (e) {
          var t = [];
          return (
            Object.keys(e).forEach(function (n) {
              t.push.apply(t, e[n]);
            }),
            t
          );
        })(e),
        n,
        function (e) {
          return r(e), e.length ? o(new Zf(e, Yf(e))) : t();
        },
      );
    });
    return (
      o.catch(function (e) {
        return e;
      }),
      o
    );
  }
  var a = t.firstFields || [];
  !0 === a && (a = Object.keys(e));
  var i = Object.keys(e),
    l = i.length,
    u = 0,
    s = [],
    c = new Promise(function (t, o) {
      var c = function (e) {
        if ((s.push.apply(s, e), ++u === l)) return r(s), s.length ? o(new Zf(s, Yf(s))) : t();
      };
      i.length || (r(s), t()),
        i.forEach(function (t) {
          var r = e[t];
          -1 !== a.indexOf(t)
            ? Gf(r, n, c)
            : (function (e, t, n) {
                var r = [],
                  o = 0,
                  a = e.length;
                function i(e) {
                  r.push.apply(r, e), ++o === a && n(r);
                }
                e.forEach(function (e) {
                  t(e, i);
                });
              })(r, n, c);
        });
    });
  return (
    c.catch(function (e) {
      return e;
    }),
    c
  );
}
function ed(e) {
  return function (t) {
    return t && t.message
      ? ((t.field = t.field || e.fullField), t)
      : { message: 'function' == typeof t ? t() : t, field: t.field || e.fullField };
  };
}
function td(e, t) {
  if (t)
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        'object' == typeof r && 'object' == typeof e[n] ? (e[n] = Vf({}, e[n], r)) : (e[n] = r);
      }
  return e;
}
function nd(e, t, n, r, o, a) {
  !e.required ||
    (n.hasOwnProperty(e.field) && !Xf(t, a || e.type)) ||
    r.push(Qf(o.messages.required, e.fullField));
}
var rd = {
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: new RegExp(
      '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
      'i',
    ),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  },
  od = {
    integer: function (e) {
      return od.number(e) && parseInt(e, 10) === e;
    },
    float: function (e) {
      return od.number(e) && !od.integer(e);
    },
    array: function (e) {
      return Array.isArray(e);
    },
    regexp: function (e) {
      if (e instanceof RegExp) return !0;
      try {
        return !!new RegExp(e);
      } catch (t) {
        return !1;
      }
    },
    date: function (e) {
      return (
        'function' == typeof e.getTime &&
        'function' == typeof e.getMonth &&
        'function' == typeof e.getYear &&
        !isNaN(e.getTime())
      );
    },
    number: function (e) {
      return !isNaN(e) && 'number' == typeof e;
    },
    object: function (e) {
      return 'object' == typeof e && !od.array(e);
    },
    method: function (e) {
      return 'function' == typeof e;
    },
    email: function (e) {
      return 'string' == typeof e && !!e.match(rd.email) && e.length < 255;
    },
    url: function (e) {
      return 'string' == typeof e && !!e.match(rd.url);
    },
    hex: function (e) {
      return 'string' == typeof e && !!e.match(rd.hex);
    },
  };
var ad = {
  required: nd,
  whitespace: function (e, t, n, r, o) {
    (/^\s+$/.test(t) || '' === t) && r.push(Qf(o.messages.whitespace, e.fullField));
  },
  type: function (e, t, n, r, o) {
    if (e.required && void 0 === t) nd(e, t, n, r, o);
    else {
      var a = e.type;
      [
        'integer',
        'float',
        'array',
        'regexp',
        'object',
        'method',
        'email',
        'number',
        'date',
        'url',
        'hex',
      ].indexOf(a) > -1
        ? od[a](t) || r.push(Qf(o.messages.types[a], e.fullField, e.type))
        : a && typeof t !== e.type && r.push(Qf(o.messages.types[a], e.fullField, e.type));
    }
  },
  range: function (e, t, n, r, o) {
    var a = 'number' == typeof e.len,
      i = 'number' == typeof e.min,
      l = 'number' == typeof e.max,
      u = t,
      s = null,
      c = 'number' == typeof t,
      f = 'string' == typeof t,
      d = Array.isArray(t);
    if ((c ? (s = 'number') : f ? (s = 'string') : d && (s = 'array'), !s)) return !1;
    d && (u = t.length),
      f && (u = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '_').length),
      a
        ? u !== e.len && r.push(Qf(o.messages[s].len, e.fullField, e.len))
        : i && !l && u < e.min
        ? r.push(Qf(o.messages[s].min, e.fullField, e.min))
        : l && !i && u > e.max
        ? r.push(Qf(o.messages[s].max, e.fullField, e.max))
        : i &&
          l &&
          (u < e.min || u > e.max) &&
          r.push(Qf(o.messages[s].range, e.fullField, e.min, e.max));
  },
  enum: function (e, t, n, r, o) {
    (e.enum = Array.isArray(e.enum) ? e.enum : []),
      -1 === e.enum.indexOf(t) && r.push(Qf(o.messages.enum, e.fullField, e.enum.join(', ')));
  },
  pattern: function (e, t, n, r, o) {
    if (e.pattern)
      if (e.pattern instanceof RegExp)
        (e.pattern.lastIndex = 0),
          e.pattern.test(t) || r.push(Qf(o.messages.pattern.mismatch, e.fullField, t, e.pattern));
      else if ('string' == typeof e.pattern) {
        new RegExp(e.pattern).test(t) ||
          r.push(Qf(o.messages.pattern.mismatch, e.fullField, t, e.pattern));
      }
  },
};
function id(e, t, n, r, o) {
  var a = e.type,
    i = [];
  if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
    if (Xf(t, a) && !e.required) return n();
    ad.required(e, t, r, i, o, a), Xf(t, a) || ad.type(e, t, r, i, o);
  }
  n(i);
}
var ld = {
  string: function (e, t, n, r, o) {
    var a = [];
    if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
      if (Xf(t, 'string') && !e.required) return n();
      ad.required(e, t, r, a, o, 'string'),
        Xf(t, 'string') ||
          (ad.type(e, t, r, a, o),
          ad.range(e, t, r, a, o),
          ad.pattern(e, t, r, a, o),
          !0 === e.whitespace && ad.whitespace(e, t, r, a, o));
    }
    n(a);
  },
  method: function (e, t, n, r, o) {
    var a = [];
    if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
      if (Xf(t) && !e.required) return n();
      ad.required(e, t, r, a, o), void 0 !== t && ad.type(e, t, r, a, o);
    }
    n(a);
  },
  number: function (e, t, n, r, o) {
    var a = [];
    if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
      if (('' === t && (t = void 0), Xf(t) && !e.required)) return n();
      ad.required(e, t, r, a, o), void 0 !== t && (ad.type(e, t, r, a, o), ad.range(e, t, r, a, o));
    }
    n(a);
  },
  boolean: function (e, t, n, r, o) {
    var a = [];
    if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
      if (Xf(t) && !e.required) return n();
      ad.required(e, t, r, a, o), void 0 !== t && ad.type(e, t, r, a, o);
    }
    n(a);
  },
  regexp: function (e, t, n, r, o) {
    var a = [];
    if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
      if (Xf(t) && !e.required) return n();
      ad.required(e, t, r, a, o), Xf(t) || ad.type(e, t, r, a, o);
    }
    n(a);
  },
  integer: function (e, t, n, r, o) {
    var a = [];
    if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
      if (Xf(t) && !e.required) return n();
      ad.required(e, t, r, a, o), void 0 !== t && (ad.type(e, t, r, a, o), ad.range(e, t, r, a, o));
    }
    n(a);
  },
  float: function (e, t, n, r, o) {
    var a = [];
    if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
      if (Xf(t) && !e.required) return n();
      ad.required(e, t, r, a, o), void 0 !== t && (ad.type(e, t, r, a, o), ad.range(e, t, r, a, o));
    }
    n(a);
  },
  array: function (e, t, n, r, o) {
    var a = [];
    if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
      if (null == t && !e.required) return n();
      ad.required(e, t, r, a, o, 'array'),
        null != t && (ad.type(e, t, r, a, o), ad.range(e, t, r, a, o));
    }
    n(a);
  },
  object: function (e, t, n, r, o) {
    var a = [];
    if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
      if (Xf(t) && !e.required) return n();
      ad.required(e, t, r, a, o), void 0 !== t && ad.type(e, t, r, a, o);
    }
    n(a);
  },
  enum: function (e, t, n, r, o) {
    var a = [];
    if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
      if (Xf(t) && !e.required) return n();
      ad.required(e, t, r, a, o), void 0 !== t && ad.enum(e, t, r, a, o);
    }
    n(a);
  },
  pattern: function (e, t, n, r, o) {
    var a = [];
    if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
      if (Xf(t, 'string') && !e.required) return n();
      ad.required(e, t, r, a, o), Xf(t, 'string') || ad.pattern(e, t, r, a, o);
    }
    n(a);
  },
  date: function (e, t, n, r, o) {
    var a = [];
    if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
      if (Xf(t, 'date') && !e.required) return n();
      var i;
      if ((ad.required(e, t, r, a, o), !Xf(t, 'date')))
        (i = t instanceof Date ? t : new Date(t)),
          ad.type(e, i, r, a, o),
          i && ad.range(e, i.getTime(), r, a, o);
    }
    n(a);
  },
  url: id,
  hex: id,
  email: id,
  required: function (e, t, n, r, o) {
    var a = [],
      i = Array.isArray(t) ? 'array' : typeof t;
    ad.required(e, t, r, a, o, i), n(a);
  },
  any: function (e, t, n, r, o) {
    var a = [];
    if (e.required || (!e.required && r.hasOwnProperty(e.field))) {
      if (Xf(t) && !e.required) return n();
      ad.required(e, t, r, a, o);
    }
    n(a);
  },
};
function ud() {
  return {
    default: 'Validation error on field %s',
    required: '%s is required',
    enum: '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid',
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s',
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters',
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s',
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length',
    },
    pattern: { mismatch: '%s value %s does not match pattern %s' },
    clone: function () {
      var e = JSON.parse(JSON.stringify(this));
      return (e.clone = this.clone), e;
    },
  };
}
var sd = ud();
function cd(e) {
  (this.rules = null), (this._messages = sd), this.define(e);
}
function fd(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (null == n) return;
    n = n[t[r]];
  }
  return n;
}
function dd(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function pd(e) {
  if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
    return Array.from(e);
}
function md(e, t) {
  if (e) {
    if ('string' == typeof e) return dd(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(e)
        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? dd(e, t)
        : void 0
    );
  }
}
function hd(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return dd(e);
    })(e) ||
    pd(e) ||
    md(e) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function vd(e) {
  if (Array.isArray(e)) return e;
}
function gd() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function yd(e, t, n, r) {
  if (!t.length) return n;
  var o,
    a,
    i = vd((o = t)) || pd(o) || md(o) || gd(),
    l = i[0],
    u = i.slice(1);
  return (
    (a = e || 'number' != typeof l ? (Array.isArray(e) ? hd(e) : fc({}, e)) : []),
    r && void 0 === n && 1 === u.length ? delete a[l][u[0]] : (a[l] = yd(a[l], u, n, r)),
    a
  );
}
function bd(e, t, n) {
  var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  return t.length && r && void 0 === n && !fd(e, t.slice(0, -1)) ? e : yd(e, t, n, r);
}
function xd(e) {
  return Af(e);
}
function wd(e, t) {
  return fd(e, t);
}
function Ed(e, t, n) {
  var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    o = bd(e, t, n, r);
  return o;
}
function kd(e, t) {
  var n = {};
  return (
    t.forEach(function (t) {
      var r = wd(e, t);
      n = Ed(n, t, r);
    }),
    n
  );
}
function Cd(e, t) {
  return (
    e &&
    e.some(function (e) {
      return Od(e, t);
    })
  );
}
function Sd(e) {
  return 'object' === Tf(e) && null !== e && Object.getPrototypeOf(e) === Object.prototype;
}
function Pd(e, t) {
  var n = Array.isArray(e) ? Ef(e) : bf({}, e);
  return t
    ? (Object.keys(t).forEach(function (e) {
        var r = n[e],
          o = t[e],
          a = Sd(r) && Sd(o);
        n[e] = a ? Pd(r, o || {}) : o;
      }),
      n)
    : n;
}
function Nd(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return n.reduce(function (e, t) {
    return Pd(e, t);
  }, e);
}
function Od(e, t) {
  return (
    !(!e || !t || e.length !== t.length) &&
    e.every(function (e, n) {
      return t[n] === e;
    })
  );
}
function Td(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && e in t.target ? t.target[e] : t;
}
function Md(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r) return e;
  var o = e[t],
    a = t - n;
  return a > 0
    ? [].concat(Ef(e.slice(0, n)), [o], Ef(e.slice(n, t)), Ef(e.slice(t + 1, r)))
    : a < 0
    ? [].concat(Ef(e.slice(0, t)), Ef(e.slice(t + 1, n + 1)), [o], Ef(e.slice(n + 1, r)))
    : e;
}
(cd.prototype = {
  messages: function (e) {
    return e && (this._messages = td(ud(), e)), this._messages;
  },
  define: function (e) {
    if (!e) throw new Error('Cannot configure a schema with no rules');
    if ('object' != typeof e || Array.isArray(e)) throw new Error('Rules must be an object');
    var t, n;
    for (t in ((this.rules = {}), e))
      e.hasOwnProperty(t) && ((n = e[t]), (this.rules[t] = Array.isArray(n) ? n : [n]));
  },
  validate: function (e, t, n) {
    var r = this;
    void 0 === t && (t = {}), void 0 === n && (n = function () {});
    var o,
      a,
      i = e,
      l = t,
      u = n;
    if (
      ('function' == typeof l && ((u = l), (l = {})),
      !this.rules || 0 === Object.keys(this.rules).length)
    )
      return u && u(), Promise.resolve();
    if (l.messages) {
      var s = this.messages();
      s === sd && (s = ud()), td(s, l.messages), (l.messages = s);
    } else l.messages = this.messages();
    var c = {};
    (l.keys || Object.keys(this.rules)).forEach(function (t) {
      (o = r.rules[t]),
        (a = i[t]),
        o.forEach(function (n) {
          var o = n;
          'function' == typeof o.transform &&
            (i === e && (i = Vf({}, i)), (a = i[t] = o.transform(a))),
            ((o = 'function' == typeof o ? { validator: o } : Vf({}, o)).validator =
              r.getValidationMethod(o)),
            (o.field = t),
            (o.fullField = o.fullField || t),
            (o.type = r.getType(o)),
            o.validator &&
              ((c[t] = c[t] || []), c[t].push({ rule: o, value: a, source: i, field: t }));
        });
    });
    var f = {};
    return Jf(
      c,
      l,
      function (e, t) {
        var n,
          r = e.rule,
          o = !(
            ('object' !== r.type && 'array' !== r.type) ||
            ('object' != typeof r.fields && 'object' != typeof r.defaultField)
          );
        function a(e, t) {
          return Vf({}, t, { fullField: r.fullField + '.' + e });
        }
        function i(n) {
          void 0 === n && (n = []);
          var i = n;
          if (
            (Array.isArray(i) || (i = [i]),
            !l.suppressWarning && i.length && cd.warning('async-validator:', i),
            i.length && void 0 !== r.message && (i = [].concat(r.message)),
            (i = i.map(ed(r))),
            l.first && i.length)
          )
            return (f[r.field] = 1), t(i);
          if (o) {
            if (r.required && !e.value)
              return (
                void 0 !== r.message
                  ? (i = [].concat(r.message).map(ed(r)))
                  : l.error && (i = [l.error(r, Qf(l.messages.required, r.field))]),
                t(i)
              );
            var u = {};
            if (r.defaultField)
              for (var s in e.value) e.value.hasOwnProperty(s) && (u[s] = r.defaultField);
            for (var c in (u = Vf({}, u, e.rule.fields)))
              if (u.hasOwnProperty(c)) {
                var d = Array.isArray(u[c]) ? u[c] : [u[c]];
                u[c] = d.map(a.bind(null, c));
              }
            var p = new cd(u);
            p.messages(l.messages),
              e.rule.options &&
                ((e.rule.options.messages = l.messages), (e.rule.options.error = l.error)),
              p.validate(e.value, e.rule.options || l, function (e) {
                var n = [];
                i && i.length && n.push.apply(n, i),
                  e && e.length && n.push.apply(n, e),
                  t(n.length ? n : null);
              });
          } else t(i);
        }
        (o = o && (r.required || (!r.required && e.value))),
          (r.field = e.field),
          r.asyncValidator
            ? (n = r.asyncValidator(r, e.value, i, e.source, l))
            : r.validator &&
              (!0 === (n = r.validator(r, e.value, i, e.source, l))
                ? i()
                : !1 === n
                ? i(r.message || r.field + ' fails')
                : n instanceof Array
                ? i(n)
                : n instanceof Error && i(n.message)),
          n &&
            n.then &&
            n.then(
              function () {
                return i();
              },
              function (e) {
                return i(e);
              },
            );
      },
      function (e) {
        !(function (e) {
          var t,
            n,
            r,
            o = [],
            a = {};
          for (t = 0; t < e.length; t++)
            (n = e[t]),
              (r = void 0),
              Array.isArray(n) ? (o = (r = o).concat.apply(r, n)) : o.push(n);
          o.length ? (a = Yf(o)) : ((o = null), (a = null)), u(o, a);
        })(e);
      },
    );
  },
  getType: function (e) {
    if (
      (void 0 === e.type && e.pattern instanceof RegExp && (e.type = 'pattern'),
      'function' != typeof e.validator && e.type && !ld.hasOwnProperty(e.type))
    )
      throw new Error(Qf('Unknown rule type %s', e.type));
    return e.type || 'string';
  },
  getValidationMethod: function (e) {
    if ('function' == typeof e.validator) return e.validator;
    var t = Object.keys(e),
      n = t.indexOf('message');
    return (
      -1 !== n && t.splice(n, 1),
      1 === t.length && 'required' === t[0] ? ld.required : ld[this.getType(e)] || !1
    );
  },
}),
  (cd.register = function (e, t) {
    if ('function' != typeof t)
      throw new Error('Cannot register a validator by type, validator is not a function');
    ld[e] = t;
  }),
  (cd.warning = Kf),
  (cd.messages = sd),
  (cd.validators = ld);
var _d = "'${name}' is not a valid ${type}",
  Rd = {
    default: "Validation error on field '${name}'",
    required: "'${name}' is required",
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
      format: "'${name}' is invalid for format date",
      parse: "'${name}' could not be parsed as date",
      invalid: "'${name}' is invalid date",
    },
    types: {
      string: _d,
      method: _d,
      array: _d,
      object: _d,
      number: _d,
      date: _d,
      boolean: _d,
      integer: _d,
      float: _d,
      regexp: _d,
      email: _d,
      url: _d,
      hex: _d,
    },
    string: {
      len: "'${name}' must be exactly ${len} characters",
      min: "'${name}' must be at least ${min} characters",
      max: "'${name}' cannot be longer than ${max} characters",
      range: "'${name}' must be between ${min} and ${max} characters",
    },
    number: {
      len: "'${name}' must equal ${len}",
      min: "'${name}' cannot be less than ${min}",
      max: "'${name}' cannot be greater than ${max}",
      range: "'${name}' must be between ${min} and ${max}",
    },
    array: {
      len: "'${name}' must be exactly ${len} in length",
      min: "'${name}' cannot be less than ${min} in length",
      max: "'${name}' cannot be greater than ${max} in length",
      range: "'${name}' must be between ${min} and ${max} in length",
    },
    pattern: { mismatch: "'${name}' does not match pattern ${pattern}" },
  },
  Fd = cd;
function Ld(e, t, n, r) {
  var o = bf(bf({}, n), {}, { name: t, enum: (n.enum || []).join(', ') }),
    a = function (e, t) {
      return function () {
        return (function (e, t) {
          return e.replace(/\$\{\w+\}/g, function (e) {
            var n = e.slice(2, -1);
            return t[n];
          });
        })(e, bf(bf({}, o), t));
      };
    };
  return (function e(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (
      Object.keys(t).forEach(function (o) {
        var i = t[o];
        'string' == typeof i
          ? (n[o] = a(i, r))
          : i && 'object' === Tf(i)
          ? ((n[o] = {}), e(i, n[o]))
          : (n[o] = i);
      }),
      n
    );
  })(Nd({}, Rd, e));
}
function Ad(e, t, n, r, o) {
  return Id.apply(this, arguments);
}
function Id() {
  return (Id = Df(
    jf.mark(function t(n, r, o, a, i) {
      var l, u, s, c, f, d;
      return jf.wrap(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (l = bf({}, o)),
                  (u = null),
                  l &&
                    'array' === l.type &&
                    l.defaultField &&
                    ((u = l.defaultField), delete l.defaultField),
                  (s = new Fd(gf({}, n, [l]))),
                  (c = Ld(a.validateMessages, n, l, i)),
                  s.messages(c),
                  (f = []),
                  (t.prev = 7),
                  (t.next = 10),
                  Promise.resolve(s.validate(gf({}, n, r), bf({}, a)))
                );
              case 10:
                t.next = 15;
                break;
              case 12:
                (t.prev = 12),
                  (t.t0 = t.catch(7)),
                  t.t0.errors
                    ? (f = t.t0.errors.map(function (t, n) {
                        var r = t.message;
                        return e.exports.isValidElement(r)
                          ? e.exports.cloneElement(r, { key: 'error_'.concat(n) })
                          : r;
                      }))
                    : (console.error(t.t0), (f = [c.default()]));
              case 15:
                if (f.length || !u) {
                  t.next = 20;
                  break;
                }
                return (
                  (t.next = 18),
                  Promise.all(
                    r.map(function (e, t) {
                      return Ad(''.concat(n, '.').concat(t), e, u, a, i);
                    }),
                  )
                );
              case 18:
                return (
                  (d = t.sent),
                  t.abrupt(
                    'return',
                    d.reduce(function (e, t) {
                      return [].concat(Ef(e), Ef(t));
                    }, []),
                  )
                );
              case 20:
                return t.abrupt('return', f);
              case 21:
              case 'end':
                return t.stop();
            }
        },
        t,
        null,
        [[7, 12]],
      );
    }),
  )).apply(this, arguments);
}
function jd(e, t, n, r, o, a) {
  var i,
    l = e.join('.'),
    u = n.map(function (e) {
      var t = e.validator;
      return t
        ? bf(
            bf({}, e),
            {},
            {
              validator: function (e, n, r) {
                var o = !1,
                  a = t(e, n, function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                      t[n] = arguments[n];
                    Promise.resolve().then(function () {
                      Vc(
                        !o,
                        'Your validator function has already return a promise. `callback` will be ignored.',
                      ),
                        o || r.apply(void 0, t);
                    });
                  });
                Vc(
                  (o = a && 'function' == typeof a.then && 'function' == typeof a.catch),
                  '`callback` is deprecated. Please return a promise instead.',
                ),
                  o &&
                    a
                      .then(function () {
                        r();
                      })
                      .catch(function (e) {
                        r(e || ' ');
                      });
              },
            },
          )
        : e;
    });
  if (!0 === o)
    i = new Promise(
      (function () {
        var e = Df(
          jf.mark(function e(n, o) {
            var i, s;
            return jf.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    i = 0;
                  case 1:
                    if (!(i < u.length)) {
                      e.next = 11;
                      break;
                    }
                    return (e.next = 4), Ad(l, t, u[i], r, a);
                  case 4:
                    if (!(s = e.sent).length) {
                      e.next = 8;
                      break;
                    }
                    return o(s), e.abrupt('return');
                  case 8:
                    (i += 1), (e.next = 1);
                    break;
                  case 11:
                    n([]);
                  case 12:
                  case 'end':
                    return e.stop();
                }
            }, e);
          }),
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })(),
    );
  else {
    var s = u.map(function (e) {
      return Ad(l, t, e, r, a);
    });
    i = (
      o
        ? (function (e) {
            return Dd.apply(this, arguments);
          })(s)
        : (function (e) {
            return zd.apply(this, arguments);
          })(s)
    ).then(function (e) {
      return e.length ? Promise.reject(e) : [];
    });
  }
  return (
    i.catch(function (e) {
      return e;
    }),
    i
  );
}
function zd() {
  return (zd = Df(
    jf.mark(function e(t) {
      return jf.wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return e.abrupt(
                'return',
                Promise.all(t).then(function (e) {
                  var t;
                  return (t = []).concat.apply(t, Ef(e));
                }),
              );
            case 1:
            case 'end':
              return e.stop();
          }
      }, e);
    }),
  )).apply(this, arguments);
}
function Dd() {
  return (Dd = Df(
    jf.mark(function e(t) {
      var n;
      return jf.wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (
                (n = 0),
                e.abrupt(
                  'return',
                  new Promise(function (e) {
                    t.forEach(function (r) {
                      r.then(function (r) {
                        r.length && e(r), (n += 1) === t.length && e([]);
                      });
                    });
                  }),
                )
              );
            case 2:
            case 'end':
              return e.stop();
          }
      }, e);
    }),
  )).apply(this, arguments);
}
function Vd(e, t, n, r, o, a) {
  return 'function' == typeof e ? e(t, n, 'source' in a ? { source: a.source } : {}) : r !== o;
}
var Ud = (function (t) {
  !(function (e, t) {
    if ('function' != typeof t && null !== t)
      throw new TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      t && Nf(e, t);
  })(r, e.exports.Component);
  var n = _f(r);
  function r(t) {
    var o;
    (kf(this, r),
    ((o = n.call(this, t)).state = { resetCount: 0 }),
    (o.cancelRegisterFunc = null),
    (o.mounted = !1),
    (o.touched = !1),
    (o.dirty = !1),
    (o.validatePromise = null),
    (o.errors = []),
    (o.cancelRegister = function () {
      var e = o.props,
        t = e.preserve,
        n = e.isListField,
        r = e.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(n, t, xd(r)), (o.cancelRegisterFunc = null);
    }),
    (o.getNamePath = function () {
      var e = o.props,
        t = e.name,
        n = e.fieldContext.prefixName;
      return void 0 !== t ? [].concat(Ef(void 0 === n ? [] : n), Ef(t)) : [];
    }),
    (o.getRules = function () {
      var e = o.props,
        t = e.rules,
        n = void 0 === t ? [] : t,
        r = e.fieldContext;
      return n.map(function (e) {
        return 'function' == typeof e ? e(r) : e;
      });
    }),
    (o.refresh = function () {
      o.mounted &&
        o.setState(function (e) {
          return { resetCount: e.resetCount + 1 };
        });
    }),
    (o.onStoreChange = function (e, t, n) {
      var r = o.props,
        a = r.shouldUpdate,
        i = r.dependencies,
        l = void 0 === i ? [] : i,
        u = r.onReset,
        s = n.store,
        c = o.getNamePath(),
        f = o.getValue(e),
        d = o.getValue(s),
        p = t && Cd(t, c);
      switch (
        ('valueUpdate' === n.type &&
          'external' === n.source &&
          f !== d &&
          ((o.touched = !0), (o.dirty = !0), (o.validatePromise = null), (o.errors = [])),
        n.type)
      ) {
        case 'reset':
          if (!t || p)
            return (
              (o.touched = !1),
              (o.dirty = !1),
              (o.validatePromise = null),
              (o.errors = []),
              u && u(),
              void o.refresh()
            );
          break;
        case 'setField':
          if (p) {
            var m = n.data;
            return (
              'touched' in m && (o.touched = m.touched),
              'validating' in m &&
                !('originRCField' in m) &&
                (o.validatePromise = m.validating ? Promise.resolve([]) : null),
              'errors' in m && (o.errors = m.errors || []),
              (o.dirty = !0),
              void o.reRender()
            );
          }
          if (a && !c.length && Vd(a, e, s, f, d, n)) return void o.reRender();
          break;
        case 'dependenciesUpdate':
          if (
            l.map(xd).some(function (e) {
              return Cd(n.relatedFields, e);
            })
          )
            return void o.reRender();
          break;
        default:
          if (p || ((!l.length || c.length || a) && Vd(a, e, s, f, d, n))) return void o.reRender();
      }
      !0 === a && o.reRender();
    }),
    (o.validateRules = function (e) {
      var t = o.getNamePath(),
        n = o.getValue(),
        r = Promise.resolve().then(function () {
          if (!o.mounted) return [];
          var a = o.props,
            i = a.validateFirst,
            l = void 0 !== i && i,
            u = a.messageVariables,
            s = (e || {}).triggerName,
            c = o.getRules();
          s &&
            (c = c.filter(function (e) {
              var t = e.validateTrigger;
              return !t || Af(t).includes(s);
            }));
          var f = jd(t, n, c, e, l, u);
          return (
            f
              .catch(function (e) {
                return e;
              })
              .then(function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                o.validatePromise === r &&
                  ((o.validatePromise = null), (o.errors = e), o.reRender());
              }),
            f
          );
        });
      return (o.validatePromise = r), (o.dirty = !0), (o.errors = []), o.reRender(), r;
    }),
    (o.isFieldValidating = function () {
      return !!o.validatePromise;
    }),
    (o.isFieldTouched = function () {
      return o.touched;
    }),
    (o.isFieldDirty = function () {
      return o.dirty;
    }),
    (o.getErrors = function () {
      return o.errors;
    }),
    (o.isListField = function () {
      return o.props.isListField;
    }),
    (o.isList = function () {
      return o.props.isList;
    }),
    (o.isPreserve = function () {
      return o.props.preserve;
    }),
    (o.getMeta = function () {
      return (
        (o.prevValidating = o.isFieldValidating()),
        {
          touched: o.isFieldTouched(),
          validating: o.prevValidating,
          errors: o.errors,
          name: o.getNamePath(),
        }
      );
    }),
    (o.getOnlyChild = function (t) {
      if ('function' == typeof t) {
        var n = o.getMeta();
        return bf(
          bf({}, o.getOnlyChild(t(o.getControlled(), n, o.props.fieldContext))),
          {},
          { isFunction: !0 },
        );
      }
      var r = jc(t);
      return 1 === r.length && e.exports.isValidElement(r[0])
        ? { child: r[0], isFunction: !1 }
        : { child: r, isFunction: !1 };
    }),
    (o.getValue = function (e) {
      var t = o.props.fieldContext.getFieldsValue,
        n = o.getNamePath();
      return wd(e || t(!0), n);
    }),
    (o.getControlled = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = o.props,
        n = t.trigger,
        r = t.validateTrigger,
        a = t.getValueFromEvent,
        i = t.normalize,
        l = t.valuePropName,
        u = t.getValueProps,
        s = t.fieldContext,
        c = void 0 !== r ? r : s.validateTrigger,
        f = o.getNamePath(),
        d = s.getInternalHooks,
        p = s.getFieldsValue,
        m = d(Rf),
        h = m.dispatch,
        v = o.getValue(),
        g =
          u ||
          function (e) {
            return gf({}, l, e);
          },
        y = e[n],
        b = bf(bf({}, e), g(v));
      b[n] = function () {
        var e;
        (o.touched = !0), (o.dirty = !0);
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        (e = a ? a.apply(void 0, n) : Td.apply(void 0, [l].concat(n))),
          i && (e = i(e, v, p(!0))),
          h({ type: 'updateValue', namePath: f, value: e }),
          y && y.apply(void 0, n);
      };
      var x = Af(c || []);
      return (
        x.forEach(function (e) {
          var t = b[e];
          b[e] = function () {
            t && t.apply(void 0, arguments);
            var n = o.props.rules;
            n && n.length && h({ type: 'validateField', namePath: f, triggerName: e });
          };
        }),
        b
      );
    }),
    t.fieldContext) && (0, (0, t.fieldContext.getInternalHooks)(Rf).initEntityValue)(Pf(o));
    return o;
  }
  return (
    Sf(r, [
      {
        key: 'componentDidMount',
        value: function () {
          var e = this.props,
            t = e.shouldUpdate,
            n = e.fieldContext;
          if (((this.mounted = !0), n)) {
            var r = (0, n.getInternalHooks)(Rf).registerField;
            this.cancelRegisterFunc = r(this);
          }
          !0 === t && this.reRender();
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.cancelRegister(), (this.mounted = !1);
        },
      },
      {
        key: 'reRender',
        value: function () {
          this.mounted && this.forceUpdate();
        },
      },
      {
        key: 'render',
        value: function () {
          var t,
            n = this.state.resetCount,
            r = this.props.children,
            o = this.getOnlyChild(r),
            a = o.child;
          return (
            o.isFunction
              ? (t = a)
              : e.exports.isValidElement(a)
              ? (t = e.exports.cloneElement(a, this.getControlled(a.props)))
              : (Vc(!a, '`children` of Field is not validate ReactElement.'), (t = a)),
            e.exports.createElement(e.exports.Fragment, { key: n }, t)
          );
        },
      },
    ]),
    r
  );
})();
function Hd(t) {
  var n = t.name,
    r = vf(t, ['name']),
    o = e.exports.useContext(Lf),
    a = void 0 !== n ? xd(n) : void 0,
    i = 'keep';
  return (
    r.isListField || (i = '_'.concat((a || []).join('_'))),
    e.exports.createElement(Ud, hf({ key: i, name: a }, r, { fieldContext: o }))
  );
}
(Ud.contextType = Lf), (Ud.defaultProps = { trigger: 'onChange', valuePropName: 'value' });
function Wd(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function (e, t) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
        var n = [],
          r = !0,
          o = !1,
          a = void 0;
        try {
          for (
            var i, l = e[Symbol.iterator]();
            !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t);
            r = !0
          );
        } catch (u) {
          (o = !0), (a = u);
        } finally {
          try {
            r || null == l.return || l.return();
          } finally {
            if (o) throw a;
          }
        }
        return n;
      }
    })(e, t) ||
    wf(e, t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
var $d = '__@field_split__';
function Bd(e) {
  return e
    .map(function (e) {
      return ''.concat(Tf(e), ':').concat(e);
    })
    .join($d);
}
var qd = (function () {
    function e() {
      kf(this, e), (this.kvs = new Map());
    }
    return (
      Sf(e, [
        {
          key: 'set',
          value: function (e, t) {
            this.kvs.set(Bd(e), t);
          },
        },
        {
          key: 'get',
          value: function (e) {
            return this.kvs.get(Bd(e));
          },
        },
        {
          key: 'update',
          value: function (e, t) {
            var n = t(this.get(e));
            n ? this.set(e, n) : this.delete(e);
          },
        },
        {
          key: 'delete',
          value: function (e) {
            this.kvs.delete(Bd(e));
          },
        },
        {
          key: 'map',
          value: function (e) {
            return Ef(this.kvs.entries()).map(function (t) {
              var n = Wd(t, 2),
                r = n[0],
                o = n[1],
                a = r.split($d);
              return e({
                key: a.map(function (e) {
                  var t = Wd(e.match(/^([^:]*):(.*)$/), 3),
                    n = t[1],
                    r = t[2];
                  return 'number' === n ? Number(r) : r;
                }),
                value: o,
              });
            });
          },
        },
        {
          key: 'toJSON',
          value: function () {
            var e = {};
            return (
              this.map(function (t) {
                var n = t.key,
                  r = t.value;
                return (e[n.join('.')] = r), null;
              }),
              e
            );
          },
        },
      ]),
      e
    );
  })(),
  Kd = function e(t) {
    var n = this;
    kf(this, e),
      (this.formHooked = !1),
      (this.subscribable = !0),
      (this.store = {}),
      (this.fieldEntities = []),
      (this.initialValues = {}),
      (this.callbacks = {}),
      (this.validateMessages = null),
      (this.preserve = null),
      (this.lastValidatePromise = null),
      (this.getForm = function () {
        return {
          getFieldValue: n.getFieldValue,
          getFieldsValue: n.getFieldsValue,
          getFieldError: n.getFieldError,
          getFieldsError: n.getFieldsError,
          isFieldsTouched: n.isFieldsTouched,
          isFieldTouched: n.isFieldTouched,
          isFieldValidating: n.isFieldValidating,
          isFieldsValidating: n.isFieldsValidating,
          resetFields: n.resetFields,
          setFields: n.setFields,
          setFieldsValue: n.setFieldsValue,
          validateFields: n.validateFields,
          submit: n.submit,
          getInternalHooks: n.getInternalHooks,
        };
      }),
      (this.getInternalHooks = function (e) {
        return e === Rf
          ? ((n.formHooked = !0),
            {
              dispatch: n.dispatch,
              initEntityValue: n.initEntityValue,
              registerField: n.registerField,
              useSubscribe: n.useSubscribe,
              setInitialValues: n.setInitialValues,
              setCallbacks: n.setCallbacks,
              setValidateMessages: n.setValidateMessages,
              getFields: n.getFields,
              setPreserve: n.setPreserve,
            })
          : (Vc(!1, '`getInternalHooks` is internal usage. Should not call directly.'), null);
      }),
      (this.useSubscribe = function (e) {
        n.subscribable = e;
      }),
      (this.setInitialValues = function (e, t) {
        (n.initialValues = e || {}), t && (n.store = Nd({}, e, n.store));
      }),
      (this.getInitialValue = function (e) {
        return wd(n.initialValues, e);
      }),
      (this.setCallbacks = function (e) {
        n.callbacks = e;
      }),
      (this.setValidateMessages = function (e) {
        n.validateMessages = e;
      }),
      (this.setPreserve = function (e) {
        n.preserve = e;
      }),
      (this.timeoutId = null),
      (this.warningUnhooked = function () {}),
      (this.getFieldEntities = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e
          ? n.fieldEntities.filter(function (e) {
              return e.getNamePath().length;
            })
          : n.fieldEntities;
      }),
      (this.getFieldsMap = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = new qd();
        return (
          n.getFieldEntities(e).forEach(function (e) {
            var n = e.getNamePath();
            t.set(n, e);
          }),
          t
        );
      }),
      (this.getFieldEntitiesForNamePathList = function (e) {
        if (!e) return n.getFieldEntities(!0);
        var t = n.getFieldsMap(!0);
        return e.map(function (e) {
          var n = xd(e);
          return t.get(n) || { INVALIDATE_NAME_PATH: xd(e) };
        });
      }),
      (this.getFieldsValue = function (e, t) {
        if ((n.warningUnhooked(), !0 === e && !t)) return n.store;
        var r = n.getFieldEntitiesForNamePathList(Array.isArray(e) ? e : null),
          o = [];
        return (
          r.forEach(function (n) {
            var r,
              a = 'INVALIDATE_NAME_PATH' in n ? n.INVALIDATE_NAME_PATH : n.getNamePath();
            if (e || !(null === (r = n.isListField) || void 0 === r ? void 0 : r.call(n)))
              if (t) {
                var i = 'getMeta' in n ? n.getMeta() : null;
                t(i) && o.push(a);
              } else o.push(a);
          }),
          kd(n.store, o.map(xd))
        );
      }),
      (this.getFieldValue = function (e) {
        n.warningUnhooked();
        var t = xd(e);
        return wd(n.store, t);
      }),
      (this.getFieldsError = function (e) {
        return (
          n.warningUnhooked(),
          n.getFieldEntitiesForNamePathList(e).map(function (t, n) {
            return t && !('INVALIDATE_NAME_PATH' in t)
              ? { name: t.getNamePath(), errors: t.getErrors() }
              : { name: xd(e[n]), errors: [] };
          })
        );
      }),
      (this.getFieldError = function (e) {
        n.warningUnhooked();
        var t = xd(e);
        return n.getFieldsError([t])[0].errors;
      }),
      (this.isFieldsTouched = function () {
        n.warningUnhooked();
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var o,
          a = t[0],
          i = t[1],
          l = !1;
        0 === t.length
          ? (o = null)
          : 1 === t.length
          ? Array.isArray(a)
            ? ((o = a.map(xd)), (l = !1))
            : ((o = null), (l = a))
          : ((o = a.map(xd)), (l = i));
        var u = n.getFieldEntities(!0),
          s = function (e) {
            return e.isFieldTouched();
          };
        if (!o) return l ? u.every(s) : u.some(s);
        var c = new qd();
        o.forEach(function (e) {
          c.set(e, []);
        }),
          u.forEach(function (e) {
            var t = e.getNamePath();
            o.forEach(function (n) {
              n.every(function (e, n) {
                return t[n] === e;
              }) &&
                c.update(n, function (t) {
                  return [].concat(Ef(t), [e]);
                });
            });
          });
        var f = function (e) {
            return e.some(s);
          },
          d = c.map(function (e) {
            return e.value;
          });
        return l ? d.every(f) : d.some(f);
      }),
      (this.isFieldTouched = function (e) {
        return n.warningUnhooked(), n.isFieldsTouched([e]);
      }),
      (this.isFieldsValidating = function (e) {
        n.warningUnhooked();
        var t = n.getFieldEntities();
        if (!e)
          return t.some(function (e) {
            return e.isFieldValidating();
          });
        var r = e.map(xd);
        return t.some(function (e) {
          var t = e.getNamePath();
          return Cd(r, t) && e.isFieldValidating();
        });
      }),
      (this.isFieldValidating = function (e) {
        return n.warningUnhooked(), n.isFieldsValidating([e]);
      }),
      (this.resetWithFieldInitialValue = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = new qd(),
          r = n.getFieldEntities(!0);
        r.forEach(function (e) {
          var n = e.props.initialValue,
            r = e.getNamePath();
          if (void 0 !== n) {
            var o = t.get(r) || new Set();
            o.add({ entity: e, value: n }), t.set(r, o);
          }
        });
        var o,
          a = function (r) {
            r.forEach(function (r) {
              if (void 0 !== r.props.initialValue) {
                var o = r.getNamePath();
                if (void 0 !== n.getInitialValue(o))
                  Vc(
                    !1,
                    "Form already set 'initialValues' with path '".concat(
                      o.join('.'),
                      "'. Field can not overwrite it.",
                    ),
                  );
                else {
                  var a = t.get(o);
                  if (a && a.size > 1)
                    Vc(
                      !1,
                      "Multiple Field with path '".concat(
                        o.join('.'),
                        "' set 'initialValue'. Can not decide which one to pick.",
                      ),
                    );
                  else if (a) {
                    var i = n.getFieldValue(o);
                    (e.skipExist && void 0 !== i) || (n.store = Ed(n.store, o, Ef(a)[0].value));
                  }
                }
              }
            });
          };
        e.entities
          ? (o = e.entities)
          : e.namePathList
          ? ((o = []),
            e.namePathList.forEach(function (e) {
              var n,
                r = t.get(e);
              r &&
                (n = o).push.apply(
                  n,
                  Ef(
                    Ef(r).map(function (e) {
                      return e.entity;
                    }),
                  ),
                );
            }))
          : (o = r),
          a(o);
      }),
      (this.resetFields = function (e) {
        n.warningUnhooked();
        var t = n.store;
        if (!e)
          return (
            (n.store = Nd({}, n.initialValues)),
            n.resetWithFieldInitialValue(),
            void n.notifyObservers(t, null, { type: 'reset' })
          );
        var r = e.map(xd);
        r.forEach(function (e) {
          var t = n.getInitialValue(e);
          n.store = Ed(n.store, e, t);
        }),
          n.resetWithFieldInitialValue({ namePathList: r }),
          n.notifyObservers(t, r, { type: 'reset' });
      }),
      (this.setFields = function (e) {
        n.warningUnhooked();
        var t = n.store;
        e.forEach(function (e) {
          var r = e.name;
          e.errors;
          var o = vf(e, ['name', 'errors']),
            a = xd(r);
          'value' in o && (n.store = Ed(n.store, a, o.value)),
            n.notifyObservers(t, [a], { type: 'setField', data: e });
        });
      }),
      (this.getFields = function () {
        return n.getFieldEntities(!0).map(function (e) {
          var t = e.getNamePath(),
            r = bf(bf({}, e.getMeta()), {}, { name: t, value: n.getFieldValue(t) });
          return Object.defineProperty(r, 'originRCField', { value: !0 }), r;
        });
      }),
      (this.initEntityValue = function (e) {
        var t = e.props.initialValue;
        if (void 0 !== t) {
          var r = e.getNamePath();
          void 0 === wd(n.store, r) && (n.store = Ed(n.store, r, t));
        }
      }),
      (this.registerField = function (e) {
        if ((n.fieldEntities.push(e), void 0 !== e.props.initialValue)) {
          var t = n.store;
          n.resetWithFieldInitialValue({ entities: [e], skipExist: !0 }),
            n.notifyObservers(t, [e.getNamePath()], { type: 'valueUpdate', source: 'internal' });
        }
        return function (t, r) {
          var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          n.fieldEntities = n.fieldEntities.filter(function (t) {
            return t !== e;
          });
          var a = void 0 !== r ? r : n.preserve;
          if (!1 === a && (!t || o.length > 1)) {
            var i = e.getNamePath(),
              l = t ? void 0 : wd(n.initialValues, i);
            i.length &&
              n.getFieldValue(i) !== l &&
              n.fieldEntities.every(function (e) {
                return !Od(e.getNamePath(), i);
              }) &&
              (n.store = Ed(n.store, i, l, !0));
          }
        };
      }),
      (this.dispatch = function (e) {
        switch (e.type) {
          case 'updateValue':
            var t = e.namePath,
              r = e.value;
            n.updateValue(t, r);
            break;
          case 'validateField':
            var o = e.namePath,
              a = e.triggerName;
            n.validateFields([o], { triggerName: a });
        }
      }),
      (this.notifyObservers = function (e, t, r) {
        if (n.subscribable) {
          var o = bf(bf({}, r), {}, { store: n.getFieldsValue(!0) });
          n.getFieldEntities().forEach(function (n) {
            (0, n.onStoreChange)(e, t, o);
          });
        } else n.forceRootUpdate();
      }),
      (this.updateValue = function (e, t) {
        var r = xd(e),
          o = n.store;
        (n.store = Ed(n.store, r, t)),
          n.notifyObservers(o, [r], { type: 'valueUpdate', source: 'internal' });
        var a = n.getDependencyChildrenFields(r);
        a.length && n.validateFields(a),
          n.notifyObservers(o, a, { type: 'dependenciesUpdate', relatedFields: [r].concat(Ef(a)) });
        var i = n.callbacks.onValuesChange;
        i && i(kd(n.store, [r]), n.getFieldsValue());
        n.triggerOnFieldsChange([r].concat(Ef(a)));
      }),
      (this.setFieldsValue = function (e) {
        n.warningUnhooked();
        var t = n.store;
        e && (n.store = Nd(n.store, e)),
          n.notifyObservers(t, null, { type: 'valueUpdate', source: 'external' });
      }),
      (this.getDependencyChildrenFields = function (e) {
        var t = new Set(),
          r = [],
          o = new qd();
        n.getFieldEntities().forEach(function (e) {
          (e.props.dependencies || []).forEach(function (t) {
            var n = xd(t);
            o.update(n, function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Set();
              return t.add(e), t;
            });
          });
        });
        return (
          (function e(n) {
            (o.get(n) || new Set()).forEach(function (n) {
              if (!t.has(n)) {
                t.add(n);
                var o = n.getNamePath();
                n.isFieldDirty() && o.length && (r.push(o), e(o));
              }
            });
          })(e),
          r
        );
      }),
      (this.triggerOnFieldsChange = function (e, t) {
        var r = n.callbacks.onFieldsChange;
        if (r) {
          var o = n.getFields();
          if (t) {
            var a = new qd();
            t.forEach(function (e) {
              var t = e.name,
                n = e.errors;
              a.set(t, n);
            }),
              o.forEach(function (e) {
                e.errors = a.get(e.name) || e.errors;
              });
          }
          r(
            o.filter(function (t) {
              var n = t.name;
              return Cd(e, n);
            }),
            o,
          );
        }
      }),
      (this.validateFields = function (e, t) {
        n.warningUnhooked();
        var r = !!e,
          o = r ? e.map(xd) : [],
          a = [];
        n.getFieldEntities(!0).forEach(function (i) {
          if ((r || o.push(i.getNamePath()), (null == t ? void 0 : t.recursive) && r)) {
            var l = i.getNamePath();
            l.every(function (t, n) {
              return e[n] === t || void 0 === e[n];
            }) && o.push(l);
          }
          if (i.props.rules && i.props.rules.length) {
            var u = i.getNamePath();
            if (!r || Cd(o, u)) {
              var s = i.validateRules(
                bf({ validateMessages: bf(bf({}, Rd), n.validateMessages) }, t),
              );
              a.push(
                s
                  .then(function () {
                    return { name: u, errors: [] };
                  })
                  .catch(function (e) {
                    return Promise.reject({ name: u, errors: e });
                  }),
              );
            }
          }
        });
        var i = (function (e) {
          var t = !1,
            n = e.length,
            r = [];
          return e.length
            ? new Promise(function (o, a) {
                e.forEach(function (e, i) {
                  e.catch(function (e) {
                    return (t = !0), e;
                  }).then(function (e) {
                    (n -= 1), (r[i] = e), n > 0 || (t && a(r), o(r));
                  });
                });
              })
            : Promise.resolve([]);
        })(a);
        (n.lastValidatePromise = i),
          i
            .catch(function (e) {
              return e;
            })
            .then(function (e) {
              var t = e.map(function (e) {
                return e.name;
              });
              n.notifyObservers(n.store, t, { type: 'validateFinish' }),
                n.triggerOnFieldsChange(t, e);
            });
        var l = i
          .then(function () {
            return n.lastValidatePromise === i
              ? Promise.resolve(n.getFieldsValue(o))
              : Promise.reject([]);
          })
          .catch(function (e) {
            var t = e.filter(function (e) {
              return e && e.errors.length;
            });
            return Promise.reject({
              values: n.getFieldsValue(o),
              errorFields: t,
              outOfDate: n.lastValidatePromise !== i,
            });
          });
        return (
          l.catch(function (e) {
            return e;
          }),
          l
        );
      }),
      (this.submit = function () {
        n.warningUnhooked(),
          n
            .validateFields()
            .then(function (e) {
              var t = n.callbacks.onFinish;
              if (t)
                try {
                  t(e);
                } catch (r) {
                  console.error(r);
                }
            })
            .catch(function (e) {
              var t = n.callbacks.onFinishFailed;
              t && t(e);
            });
      }),
      (this.forceRootUpdate = t);
  };
function Yd(t) {
  var n = e.exports.useRef(),
    r = Wd(e.exports.useState({}), 2)[1];
  if (!n.current)
    if (t) n.current = t;
    else {
      var o = new Kd(function () {
        r({});
      });
      n.current = o.getForm();
    }
  return [n.current];
}
var Qd = e.exports.createContext({
    triggerFormChange: function () {},
    triggerFormFinish: function () {},
    registerForm: function () {},
    unregisterForm: function () {},
  }),
  Xd = function (t) {
    var n = t.validateMessages,
      r = t.onFormChange,
      o = t.onFormFinish,
      a = t.children,
      i = e.exports.useContext(Qd),
      l = e.exports.useRef({});
    return e.exports.createElement(
      Qd.Provider,
      {
        value: bf(
          bf({}, i),
          {},
          {
            validateMessages: bf(bf({}, i.validateMessages), n),
            triggerFormChange: function (e, t) {
              r && r(e, { changedFields: t, forms: l.current }), i.triggerFormChange(e, t);
            },
            triggerFormFinish: function (e, t) {
              o && o(e, { values: t, forms: l.current }), i.triggerFormFinish(e, t);
            },
            registerForm: function (e, t) {
              e && (l.current = bf(bf({}, l.current), {}, gf({}, e, t))), i.registerForm(e, t);
            },
            unregisterForm: function (e) {
              var t = bf({}, l.current);
              delete t[e], (l.current = t), i.unregisterForm(e);
            },
          },
        ),
      },
      a,
    );
  },
  Gd = function (t, n) {
    var r = t.name,
      o = t.initialValues,
      a = t.fields,
      i = t.form,
      l = t.preserve,
      u = t.children,
      s = t.component,
      c = void 0 === s ? 'form' : s,
      f = t.validateMessages,
      d = t.validateTrigger,
      p = void 0 === d ? 'onChange' : d,
      m = t.onValuesChange,
      h = t.onFieldsChange,
      v = t.onFinish,
      g = t.onFinishFailed,
      y = vf(t, [
        'name',
        'initialValues',
        'fields',
        'form',
        'preserve',
        'children',
        'component',
        'validateMessages',
        'validateTrigger',
        'onValuesChange',
        'onFieldsChange',
        'onFinish',
        'onFinishFailed',
      ]),
      b = e.exports.useContext(Qd),
      x = Wd(Yd(i), 1)[0],
      w = x.getInternalHooks(Rf),
      E = w.useSubscribe,
      k = w.setInitialValues,
      C = w.setCallbacks,
      S = w.setValidateMessages,
      P = w.setPreserve;
    e.exports.useImperativeHandle(n, function () {
      return x;
    }),
      e.exports.useEffect(
        function () {
          return (
            b.registerForm(r, x),
            function () {
              b.unregisterForm(r);
            }
          );
        },
        [b, x, r],
      ),
      S(bf(bf({}, b.validateMessages), f)),
      C({
        onValuesChange: m,
        onFieldsChange: function (e) {
          if ((b.triggerFormChange(r, e), h)) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
              n[o - 1] = arguments[o];
            h.apply(void 0, [e].concat(n));
          }
        },
        onFinish: function (e) {
          b.triggerFormFinish(r, e), v && v(e);
        },
        onFinishFailed: g,
      }),
      P(l);
    var N = e.exports.useRef(null);
    k(o, !N.current), N.current || (N.current = !0);
    var O = u,
      T = 'function' == typeof u;
    T && (O = u(x.getFieldsValue(!0), x));
    E(!T);
    var M = e.exports.useRef();
    e.exports.useEffect(
      function () {
        (function (e, t) {
          if (e === t) return !0;
          if ((!e && t) || (e && !t)) return !1;
          if (!e || !t || 'object' !== Tf(e) || 'object' !== Tf(t)) return !1;
          var n = Object.keys(e),
            r = Object.keys(t),
            o = new Set([].concat(Ef(n), Ef(r)));
          return Ef(o).every(function (n) {
            var r = e[n],
              o = t[n];
            return ('function' == typeof r && 'function' == typeof o) || r === o;
          });
        })(M.current || [], a || []) || x.setFields(a || []),
          (M.current = a);
      },
      [a, x],
    );
    var _ = e.exports.useMemo(
        function () {
          return bf(bf({}, x), {}, { validateTrigger: p });
        },
        [x, p],
      ),
      R = e.exports.createElement(Lf.Provider, { value: _ }, O);
    return !1 === c
      ? R
      : e.exports.createElement(
          c,
          hf({}, y, {
            onSubmit: function (e) {
              e.preventDefault(), e.stopPropagation(), x.submit();
            },
            onReset: function (e) {
              var t;
              e.preventDefault(),
                x.resetFields(),
                null === (t = y.onReset) || void 0 === t || t.call(y, e);
            },
          }),
          R,
        );
  },
  Zd = e.exports.forwardRef(Gd);
function Jd(t, n, r) {
  var o = e.exports.useRef({});
  return (
    ('value' in o.current && !r(o.current.condition, n)) ||
      ((o.current.value = t()), (o.current.condition = n)),
    o.current.value
  );
}
(Zd.FormProvider = Xd),
  (Zd.Field = Hd),
  (Zd.List = function (t) {
    var n = t.name,
      r = t.initialValue,
      o = t.children,
      a = t.rules,
      i = t.validateTrigger,
      l = e.exports.useContext(Lf),
      u = e.exports.useRef({ keys: [], id: 0 }).current;
    if ('function' != typeof o) return Vc(!1, 'Form.List only accepts function as children.'), null;
    var s = xd(l.prefixName) || [],
      c = [].concat(Ef(s), Ef(xd(n)));
    return e.exports.createElement(
      Lf.Provider,
      { value: bf(bf({}, l), {}, { prefixName: c }) },
      e.exports.createElement(
        Hd,
        {
          name: [],
          shouldUpdate: function (e, t, n) {
            return 'internal' !== n.source && e !== t;
          },
          rules: a,
          validateTrigger: i,
          initialValue: r,
          isList: !0,
        },
        function (e, t) {
          var n = e.value,
            r = void 0 === n ? [] : n,
            a = e.onChange,
            i = l.getFieldValue,
            s = function () {
              return i(c || []) || [];
            },
            f = {
              add: function (e, t) {
                var n = s();
                t >= 0 && t <= n.length
                  ? ((u.keys = [].concat(Ef(u.keys.slice(0, t)), [u.id], Ef(u.keys.slice(t)))),
                    a([].concat(Ef(n.slice(0, t)), [e], Ef(n.slice(t)))))
                  : ((u.keys = [].concat(Ef(u.keys), [u.id])), a([].concat(Ef(n), [e]))),
                  (u.id += 1);
              },
              remove: function (e) {
                var t = s(),
                  n = new Set(Array.isArray(e) ? e : [e]);
                n.size <= 0 ||
                  ((u.keys = u.keys.filter(function (e, t) {
                    return !n.has(t);
                  })),
                  a(
                    t.filter(function (e, t) {
                      return !n.has(t);
                    }),
                  ));
              },
              move: function (e, t) {
                if (e !== t) {
                  var n = s();
                  e < 0 ||
                    e >= n.length ||
                    t < 0 ||
                    t >= n.length ||
                    ((u.keys = Md(u.keys, e, t)), a(Md(n, e, t)));
                }
              },
            },
            d = r || [];
          return (
            Array.isArray(d) || (d = []),
            o(
              d.map(function (e, t) {
                var n = u.keys[t];
                return (
                  void 0 === n && ((u.keys[t] = u.id), (n = u.keys[t]), (u.id += 1)),
                  { name: t, key: n, isListField: !0 }
                );
              }),
              f,
              t,
            )
          );
        },
      ),
    );
  }),
  (Zd.useForm = Yd);
var ep = function (e, t, n) {
    Vc(e, '[antd: '.concat(t, '] ').concat(n));
  },
  tp = { placeholder: 'Select time', rangePlaceholder: ['Start time', 'End time'] },
  np = {
    lang: Qs(
      {
        placeholder: 'Select date',
        yearPlaceholder: 'Select year',
        quarterPlaceholder: 'Select quarter',
        monthPlaceholder: 'Select month',
        weekPlaceholder: 'Select week',
        rangePlaceholder: ['Start date', 'End date'],
        rangeYearPlaceholder: ['Start year', 'End year'],
        rangeMonthPlaceholder: ['Start month', 'End month'],
        rangeWeekPlaceholder: ['Start week', 'End week'],
      },
      {
        locale: 'en_US',
        today: 'Today',
        now: 'Now',
        backToToday: 'Back to today',
        ok: 'Ok',
        clear: 'Clear',
        month: 'Month',
        year: 'Year',
        timeSelect: 'select time',
        dateSelect: 'select date',
        weekSelect: 'Choose a week',
        monthSelect: 'Choose a month',
        yearSelect: 'Choose a year',
        decadeSelect: 'Choose a decade',
        yearFormat: 'YYYY',
        dateFormat: 'M/D/YYYY',
        dayFormat: 'D',
        dateTimeFormat: 'M/D/YYYY HH:mm:ss',
        monthBeforeYear: !0,
        previousMonth: 'Previous month (PageUp)',
        nextMonth: 'Next month (PageDown)',
        previousYear: 'Last year (Control + left)',
        nextYear: 'Next year (Control + right)',
        previousDecade: 'Last decade',
        nextDecade: 'Next decade',
        previousCentury: 'Last century',
        nextCentury: 'Next century',
      },
    ),
    timePickerLocale: Qs({}, tp),
  },
  rp = '${label} is not a valid ${type}',
  op = {
    locale: 'en',
    Pagination: {
      items_per_page: '/ page',
      jump_to: 'Go to',
      jump_to_confirm: 'confirm',
      page: '',
      prev_page: 'Previous Page',
      next_page: 'Next Page',
      prev_5: 'Previous 5 Pages',
      next_5: 'Next 5 Pages',
      prev_3: 'Previous 3 Pages',
      next_3: 'Next 3 Pages',
    },
    DatePicker: np,
    TimePicker: tp,
    Calendar: np,
    global: { placeholder: 'Please select' },
    Table: {
      filterTitle: 'Filter menu',
      filterConfirm: 'OK',
      filterReset: 'Reset',
      filterEmptyText: 'No filters',
      emptyText: 'No data',
      selectAll: 'Select current page',
      selectInvert: 'Invert current page',
      selectNone: 'Clear all data',
      selectionAll: 'Select all data',
      sortTitle: 'Sort',
      expand: 'Expand row',
      collapse: 'Collapse row',
      triggerDesc: 'Click to sort descending',
      triggerAsc: 'Click to sort ascending',
      cancelSort: 'Click to cancel sorting',
    },
    Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
    Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Search here',
      itemUnit: 'item',
      itemsUnit: 'items',
      remove: 'Remove',
      selectCurrent: 'Select current page',
      removeCurrent: 'Remove current page',
      selectAll: 'Select all data',
      removeAll: 'Remove all data',
      selectInvert: 'Invert current page',
    },
    Upload: {
      uploading: 'Uploading...',
      removeFile: 'Remove file',
      uploadError: 'Upload error',
      previewFile: 'Preview file',
      downloadFile: 'Download file',
    },
    Empty: { description: 'No Data' },
    Icon: { icon: 'icon' },
    Text: { edit: 'Edit', copy: 'Copy', copied: 'Copied', expand: 'Expand' },
    PageHeader: { back: 'Back' },
    Form: {
      optional: '(optional)',
      defaultValidateMessages: {
        default: 'Field validation error for ${label}',
        required: 'Please enter ${label}',
        enum: '${label} must be one of [${enum}]',
        whitespace: '${label} cannot be a blank character',
        date: {
          format: '${label} date format is invalid',
          parse: '${label} cannot be converted to a date',
          invalid: '${label} is an invalid date',
        },
        types: {
          string: rp,
          method: rp,
          array: rp,
          object: rp,
          number: rp,
          date: rp,
          boolean: rp,
          integer: rp,
          float: rp,
          regexp: rp,
          email: rp,
          url: rp,
          hex: rp,
        },
        string: {
          len: '${label} must be ${len} characters',
          min: '${label} must be at least ${min} characters',
          max: '${label} must be up to ${max} characters',
          range: '${label} must be between ${min}-${max} characters',
        },
        number: {
          len: '${label} must be equal to ${len}',
          min: '${label} must be minimum ${min}',
          max: '${label} must be maximum ${max}',
          range: '${label} must be between ${min}-${max}',
        },
        array: {
          len: 'Must be ${len} ${label}',
          min: 'At least ${min} ${label}',
          max: 'At most ${max} ${label}',
          range: 'The amount of ${label} must be between ${min}-${max}',
        },
        pattern: { mismatch: '${label} does not match the pattern ${pattern}' },
      },
    },
    Image: { preview: 'Preview' },
  },
  ap = Qs({}, op.Modal);
function ip(e) {
  ap = e ? Qs(Qs({}, ap), e) : Qs({}, op.Modal);
}
function lp() {
  return ap;
}
var up = e.exports.createContext(void 0),
  sp = (function (t) {
    tc(r, e.exports.Component);
    var n = ic(r);
    function r(e) {
      var t;
      return (
        Gs(this, r),
        (t = n.call(this, e)),
        ip(e.locale && e.locale.Modal),
        ep(
          'internalMark' === e._ANT_MARK__,
          'LocaleProvider',
          '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale',
        ),
        t
      );
    }
    return (
      Js(r, [
        {
          key: 'componentDidMount',
          value: function () {
            ip(this.props.locale && this.props.locale.Modal);
          },
        },
        {
          key: 'componentDidUpdate',
          value: function (e) {
            var t = this.props.locale;
            e.locale !== t && ip(t && t.Modal);
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            ip();
          },
        },
        {
          key: 'render',
          value: function () {
            var t = this.props,
              n = t.locale,
              r = t.children;
            return e.exports.createElement(up.Provider, { value: Qs(Qs({}, n), { exist: !0 }) }, r);
          },
        },
      ]),
      r
    );
  })();
sp.defaultProps = { locale: {} };
var cp = (function (t) {
  tc(r, e.exports.Component);
  var n = ic(r);
  function r() {
    return Gs(this, r), n.apply(this, arguments);
  }
  return (
    Js(r, [
      {
        key: 'getLocale',
        value: function () {
          var e = this.props,
            t = e.componentName,
            n = e.defaultLocale || op[null != t ? t : 'global'],
            r = this.context,
            o = t && r ? r[t] : {};
          return Qs(Qs({}, n instanceof Function ? n() : n), o || {});
        },
      },
      {
        key: 'getLocaleCode',
        value: function () {
          var e = this.context,
            t = e && e.locale;
          return e && e.exist && !t ? op.locale : t;
        },
      },
      {
        key: 'render',
        value: function () {
          return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
        },
      },
    ]),
    r
  );
})();
(cp.defaultProps = { componentName: 'global' }), (cp.contextType = up);
var fp = function () {
    var t = (0, e.exports.useContext(yp).getPrefixCls)('empty-img-default');
    return e.exports.createElement(
      'svg',
      {
        className: t,
        width: '184',
        height: '152',
        viewBox: '0 0 184 152',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      e.exports.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd' },
        e.exports.createElement(
          'g',
          { transform: 'translate(24 31.67)' },
          e.exports.createElement('ellipse', {
            className: ''.concat(t, '-ellipse'),
            cx: '67.797',
            cy: '106.89',
            rx: '67.797',
            ry: '12.668',
          }),
          e.exports.createElement('path', {
            className: ''.concat(t, '-path-1'),
            d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
          }),
          e.exports.createElement('path', {
            className: ''.concat(t, '-path-2'),
            d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
            transform: 'translate(13.56)',
          }),
          e.exports.createElement('path', {
            className: ''.concat(t, '-path-3'),
            d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
          }),
          e.exports.createElement('path', {
            className: ''.concat(t, '-path-4'),
            d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
          }),
        ),
        e.exports.createElement('path', {
          className: ''.concat(t, '-path-5'),
          d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
        }),
        e.exports.createElement(
          'g',
          { className: ''.concat(t, '-g'), transform: 'translate(149.65 15.383)' },
          e.exports.createElement('ellipse', {
            cx: '20.654',
            cy: '3.167',
            rx: '2.849',
            ry: '2.815',
          }),
          e.exports.createElement('path', {
            d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z',
          }),
        ),
      ),
    );
  },
  dp = function () {
    var t = (0, e.exports.useContext(yp).getPrefixCls)('empty-img-simple');
    return e.exports.createElement(
      'svg',
      {
        className: t,
        width: '64',
        height: '41',
        viewBox: '0 0 64 41',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      e.exports.createElement(
        'g',
        { transform: 'translate(0 1)', fill: 'none', fillRule: 'evenodd' },
        e.exports.createElement('ellipse', {
          className: ''.concat(t, '-ellipse'),
          cx: '32',
          cy: '33',
          rx: '32',
          ry: '7',
        }),
        e.exports.createElement(
          'g',
          { className: ''.concat(t, '-g'), fillRule: 'nonzero' },
          e.exports.createElement('path', {
            d: 'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z',
          }),
          e.exports.createElement('path', {
            d: 'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
            className: ''.concat(t, '-path'),
          }),
        ),
      ),
    );
  },
  pp = e.exports.createElement(fp, null),
  mp = e.exports.createElement(dp, null),
  hp = function (t) {
    var n = t.className,
      r = t.prefixCls,
      o = t.image,
      a = void 0 === o ? pp : o,
      i = t.description,
      l = t.children,
      u = t.imageStyle,
      s = (function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      })(t, ['className', 'prefixCls', 'image', 'description', 'children', 'imageStyle']),
      c = e.exports.useContext(yp),
      f = c.getPrefixCls,
      d = c.direction;
    return e.exports.createElement(cp, { componentName: 'Empty' }, function (t) {
      var o,
        c = f('empty', r),
        p = void 0 !== i ? i : t.description,
        m = 'string' == typeof p ? p : 'empty',
        h = null;
      return (
        (h = 'string' == typeof a ? e.exports.createElement('img', { alt: m, src: a }) : a),
        e.exports.createElement(
          'div',
          Qs(
            {
              className: sc(
                c,
                ((o = {}),
                Xs(o, ''.concat(c, '-normal'), a === mp),
                Xs(o, ''.concat(c, '-rtl'), 'rtl' === d),
                o),
                n,
              ),
            },
            s,
          ),
          e.exports.createElement('div', { className: ''.concat(c, '-image'), style: u }, h),
          p && e.exports.createElement('div', { className: ''.concat(c, '-description') }, p),
          l && e.exports.createElement('div', { className: ''.concat(c, '-footer') }, l),
        )
      );
    });
  };
(hp.PRESENTED_IMAGE_DEFAULT = pp), (hp.PRESENTED_IMAGE_SIMPLE = mp);
var vp = hp,
  gp = function (t) {
    return e.exports.createElement(bp, null, function (n) {
      var r = (0, n.getPrefixCls)('empty');
      switch (t) {
        case 'Table':
        case 'List':
          return e.exports.createElement(vp, { image: vp.PRESENTED_IMAGE_SIMPLE });
        case 'Select':
        case 'TreeSelect':
        case 'Cascader':
        case 'Transfer':
        case 'Mentions':
          return e.exports.createElement(vp, {
            image: vp.PRESENTED_IMAGE_SIMPLE,
            className: ''.concat(r, '-small'),
          });
        default:
          return e.exports.createElement(vp, null);
      }
    });
  },
  yp = e.exports.createContext({
    getPrefixCls: function (e, t) {
      return t || (e ? 'ant-'.concat(e) : 'ant');
    },
    renderEmpty: gp,
  }),
  bp = yp.Consumer,
  xp = e.exports.createContext(void 0),
  wp = function (t) {
    var n = t.children,
      r = t.size;
    return e.exports.createElement(xp.Consumer, null, function (t) {
      return e.exports.createElement(xp.Provider, { value: r || t }, n);
    });
  },
  Ep = xp;
function kp(e, t) {
  if (null == e) return {};
  var n,
    r,
    o = (function (e, t) {
      if (null == e) return {};
      var n,
        r,
        o = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      (n = a[r]),
        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
  }
  return o;
}
function Cp(e, t) {
  return (
    vd(e) ||
    (function (e, t) {
      var n =
        null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
      if (null != n) {
        var r,
          o,
          a = [],
          i = !0,
          l = !1;
        try {
          for (
            n = n.call(e);
            !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t);
            i = !0
          );
        } catch (u) {
          (l = !0), (o = u);
        } finally {
          try {
            i || null == n.return || n.return();
          } finally {
            if (l) throw o;
          }
        }
        return a;
      }
    })(e, t) ||
    md(e, t) ||
    gd()
  );
}
function Sp() {
  return !('undefined' == typeof window || !window.document || !window.document.createElement);
}
function Pp(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit'.concat(e)] = 'webkit'.concat(t)),
    (n['Moz'.concat(e)] = 'moz'.concat(t)),
    (n['ms'.concat(e)] = 'MS'.concat(t)),
    (n['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
    n
  );
}
var Np,
  Op,
  Tp,
  Mp =
    ((Np = Sp()),
    (Op = 'undefined' != typeof window ? window : {}),
    (Tp = {
      animationend: Pp('Animation', 'AnimationEnd'),
      transitionend: Pp('Transition', 'TransitionEnd'),
    }),
    Np &&
      ('AnimationEvent' in Op || delete Tp.animationend.animation,
      'TransitionEvent' in Op || delete Tp.transitionend.transition),
    Tp),
  _p = {};
if (Sp()) {
  var Rp = document.createElement('div');
  _p = Rp.style;
}
var Fp = {};
function Lp(e) {
  if (Fp[e]) return Fp[e];
  var t = Mp[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var a = n[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in _p) return (Fp[e] = t[a]), Fp[e];
    }
  return '';
}
var Ap = Lp('animationend'),
  Ip = Lp('transitionend'),
  jp = !(!Ap || !Ip),
  zp = Ap || 'animationend',
  Dp = Ip || 'transitionend';
function Vp(e, t) {
  return e
    ? 'object' === rc(e)
      ? e[
          t.replace(/-\w/g, function (e) {
            return e[1].toUpperCase();
          })
        ]
      : ''.concat(e, '-').concat(t)
    : null;
}
function Up(t) {
  var n = e.exports.useRef(!1),
    r = Cp(e.exports.useState(t), 2),
    o = r[0],
    a = r[1];
  return (
    e.exports.useEffect(function () {
      return function () {
        n.current = !0;
      };
    }, []),
    [
      o,
      function (e) {
        n.current || a(e);
      },
    ]
  );
}
var Hp = Sp() ? e.exports.useLayoutEffect : e.exports.useEffect,
  Wp = function (e) {
    return +setTimeout(e, 16);
  },
  $p = function (e) {
    return clearTimeout(e);
  };
'undefined' != typeof window &&
  'requestAnimationFrame' in window &&
  ((Wp = function (e) {
    return window.requestAnimationFrame(e);
  }),
  ($p = function (e) {
    return window.cancelAnimationFrame(e);
  }));
var Bp = 0,
  qp = new Map();
function Kp(e) {
  qp.delete(e);
}
function Yp(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    n = (Bp += 1);
  function r(t) {
    if (0 === t) Kp(n), e();
    else {
      var o = Wp(function () {
        r(t - 1);
      });
      qp.set(n, o);
    }
  }
  return r(t), n;
}
Yp.cancel = function (e) {
  var t = qp.get(e);
  return Kp(t), $p(t);
};
var Qp = ['prepare', 'start', 'active', 'end'];
function Xp(e) {
  return 'active' === e || 'end' === e;
}
var Gp = function (t, n) {
  var r = Cp(e.exports.useState('none'), 2),
    o = r[0],
    a = r[1],
    i = Cp(
      (function () {
        var t = e.exports.useRef(null);
        function n() {
          Yp.cancel(t.current);
        }
        return (
          e.exports.useEffect(function () {
            return function () {
              n();
            };
          }, []),
          [
            function e(r) {
              var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
              n();
              var a = Yp(function () {
                o <= 1
                  ? r({
                      isCanceled: function () {
                        return a !== t.current;
                      },
                    })
                  : e(r, o - 1);
              });
              t.current = a;
            },
            n,
          ]
        );
      })(),
      2,
    ),
    l = i[0],
    u = i[1];
  return (
    Hp(
      function () {
        if ('none' !== o && 'end' !== o) {
          var e = Qp.indexOf(o),
            t = Qp[e + 1],
            r = n(o);
          false === r
            ? a(t)
            : l(function (e) {
                function n() {
                  e.isCanceled() || a(t);
                }
                !0 === r ? n() : Promise.resolve(r).then(n);
              });
        }
      },
      [t, o],
    ),
    e.exports.useEffect(function () {
      return function () {
        u();
      };
    }, []),
    [
      function () {
        a('prepare');
      },
      o,
    ]
  );
};
function Zp(t, n, r, o) {
  var a = o.motionEnter,
    i = void 0 === a || a,
    l = o.motionAppear,
    u = void 0 === l || l,
    s = o.motionLeave,
    c = void 0 === s || s,
    f = o.motionDeadline,
    d = o.motionLeaveImmediately,
    p = o.onAppearPrepare,
    m = o.onEnterPrepare,
    h = o.onLeavePrepare,
    v = o.onAppearStart,
    g = o.onEnterStart,
    y = o.onLeaveStart,
    b = o.onAppearActive,
    x = o.onEnterActive,
    w = o.onLeaveActive,
    E = o.onAppearEnd,
    k = o.onEnterEnd,
    C = o.onLeaveEnd,
    S = o.onVisibleChanged,
    P = Cp(Up(), 2),
    N = P[0],
    O = P[1],
    T = Cp(Up('none'), 2),
    M = T[0],
    _ = T[1],
    R = Cp(Up(null), 2),
    F = R[0],
    L = R[1],
    A = e.exports.useRef(!1),
    I = e.exports.useRef(null),
    j = e.exports.useRef(!1),
    z = e.exports.useRef(null);
  function D() {
    return r() || z.current;
  }
  var V = e.exports.useRef(!1);
  function U(e) {
    var t,
      n = D();
    (e && !e.deadline && e.target !== n) ||
      ('appear' === M && V.current
        ? (t = null == E ? void 0 : E(n, e))
        : 'enter' === M && V.current
        ? (t = null == k ? void 0 : k(n, e))
        : 'leave' === M && V.current && (t = null == C ? void 0 : C(n, e)),
      !1 === t || j.current || (_('none'), L(null)));
  }
  var H = Cp(
      (function (t) {
        var n = e.exports.useRef(),
          r = e.exports.useRef(t);
        r.current = t;
        var o = e.exports.useCallback(function (e) {
          r.current(e);
        }, []);
        function a(e) {
          e && (e.removeEventListener(Dp, o), e.removeEventListener(zp, o));
        }
        return (
          e.exports.useEffect(function () {
            return function () {
              a(n.current);
            };
          }, []),
          [
            function (e) {
              n.current && n.current !== e && a(n.current),
                e &&
                  e !== n.current &&
                  (e.addEventListener(Dp, o), e.addEventListener(zp, o), (n.current = e));
            },
            a,
          ]
        );
      })(U),
      1,
    )[0],
    W = e.exports.useMemo(
      function () {
        var e, t, n;
        switch (M) {
          case 'appear':
            return Xs((e = {}), 'prepare', p), Xs(e, 'start', v), Xs(e, 'active', b), e;
          case 'enter':
            return Xs((t = {}), 'prepare', m), Xs(t, 'start', g), Xs(t, 'active', x), t;
          case 'leave':
            return Xs((n = {}), 'prepare', h), Xs(n, 'start', y), Xs(n, 'active', w), n;
          default:
            return {};
        }
      },
      [M],
    ),
    $ = Cp(
      Gp(M, function (e) {
        if ('prepare' === e) {
          var t = W.prepare;
          return !!t && t(D());
        }
        var n;
        q in W && L((null === (n = W[q]) || void 0 === n ? void 0 : n.call(W, D(), null)) || null);
        return (
          'active' === q &&
            (H(D()),
            f > 0 &&
              (clearTimeout(I.current),
              (I.current = setTimeout(function () {
                U({ deadline: !0 });
              }, f)))),
          true
        );
      }),
      2,
    ),
    B = $[0],
    q = $[1],
    K = Xp(q);
  (V.current = K),
    Hp(
      function () {
        O(n);
        var e,
          r = A.current;
        ((A.current = !0), t) &&
          (!r && n && u && (e = 'appear'),
          r && n && i && (e = 'enter'),
          ((r && !n && c) || (!r && d && !n && c)) && (e = 'leave'),
          e && (_(e), B()));
      },
      [n],
    ),
    e.exports.useEffect(
      function () {
        (('appear' === M && !u) || ('enter' === M && !i) || ('leave' === M && !c)) && _('none');
      },
      [u, i, c],
    ),
    e.exports.useEffect(function () {
      return function () {
        clearTimeout(I.current), (j.current = !0);
      };
    }, []),
    e.exports.useEffect(
      function () {
        void 0 !== N && 'none' === M && (null == S || S(N));
      },
      [N, M],
    );
  var Y = F;
  return (
    W.prepare && 'start' === q && (Y = fc({ transition: 'none' }, Y)), [M, q, Y, null != N ? N : n]
  );
}
var Jp = (function (t) {
  tc(r, e.exports.Component);
  var n = ic(r);
  function r() {
    return Gs(this, r), n.apply(this, arguments);
  }
  return (
    Js(r, [
      {
        key: 'render',
        value: function () {
          return this.props.children;
        },
      },
    ]),
    r
  );
})();
var em = (function (t) {
  var n = t;
  function r(e) {
    return !(!e.motionName || !n);
  }
  'object' === rc(t) && (n = t.transitionSupport);
  var o = e.exports.forwardRef(function (t, n) {
    var o = t.visible,
      a = void 0 === o || o,
      i = t.removeOnLeave,
      l = void 0 === i || i,
      u = t.forceRender,
      s = t.children,
      c = t.motionName,
      f = t.leavedClassName,
      d = t.eventProps,
      p = r(t),
      m = e.exports.useRef(),
      h = e.exports.useRef();
    var v = Cp(
        Zp(
          p,
          a,
          function () {
            try {
              return pc(m.current || h.current);
            } catch (e) {
              return null;
            }
          },
          t,
        ),
        4,
      ),
      g = v[0],
      y = v[1],
      b = v[2],
      x = v[3],
      w = e.exports.useRef(x);
    x && (w.current = !0);
    var E = e.exports.useRef(n);
    E.current = n;
    var k,
      C = e.exports.useCallback(function (e) {
        (m.current = e), Uc(E.current, e);
      }, []),
      S = fc(fc({}, d), {}, { visible: a });
    if (s)
      if ('none' !== g && r(t)) {
        var P, N;
        'prepare' === y ? (N = 'prepare') : Xp(y) ? (N = 'active') : 'start' === y && (N = 'start'),
          (k = s(
            fc(
              fc({}, S),
              {},
              {
                className: sc(
                  Vp(c, g),
                  ((P = {}),
                  Xs(P, Vp(c, ''.concat(g, '-').concat(N)), N),
                  Xs(P, c, 'string' == typeof c),
                  P),
                ),
                style: b,
              },
            ),
            C,
          ));
      } else
        k = x
          ? s(fc({}, S), C)
          : !l && w.current
          ? s(fc(fc({}, S), {}, { className: f }), C)
          : u
          ? s(fc(fc({}, S), {}, { style: { display: 'none' } }), C)
          : null;
    else k = null;
    return e.exports.createElement(Jp, { ref: h }, k);
  });
  return (o.displayName = 'CSSMotion'), o;
})(jp);
function tm(e) {
  var t;
  return fc(
    fc({}, (t = e && 'object' === rc(e) && 'key' in e ? e : { key: e })),
    {},
    { key: String(t.key) },
  );
}
function nm() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
  return e.map(tm);
}
function rm() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    n = [],
    r = 0,
    o = t.length,
    a = nm(e),
    i = nm(t);
  a.forEach(function (e) {
    for (var t = !1, a = r; a < o; a += 1) {
      var l = i[a];
      if (l.key === e.key) {
        r < a &&
          ((n = n.concat(
            i.slice(r, a).map(function (e) {
              return fc(fc({}, e), {}, { status: 'add' });
            }),
          )),
          (r = a)),
          n.push(fc(fc({}, l), {}, { status: 'keep' })),
          (r += 1),
          (t = !0);
        break;
      }
    }
    t || n.push(fc(fc({}, e), {}, { status: 'remove' }));
  }),
    r < o &&
      (n = n.concat(
        i.slice(r).map(function (e) {
          return fc(fc({}, e), {}, { status: 'add' });
        }),
      ));
  var l = {};
  n.forEach(function (e) {
    var t = e.key;
    l[t] = (l[t] || 0) + 1;
  });
  var u = Object.keys(l).filter(function (e) {
    return l[e] > 1;
  });
  return (
    u.forEach(function (e) {
      (n = n.filter(function (t) {
        var n = t.key,
          r = t.status;
        return n !== e || 'remove' !== r;
      })).forEach(function (t) {
        t.key === e && (t.status = 'keep');
      });
    }),
    n
  );
}
var om = [
  'eventProps',
  'visible',
  'children',
  'motionName',
  'motionAppear',
  'motionEnter',
  'motionLeave',
  'motionLeaveImmediately',
  'motionDeadline',
  'removeOnLeave',
  'leavedClassName',
  'onAppearStart',
  'onAppearActive',
  'onAppearEnd',
  'onEnterStart',
  'onEnterActive',
  'onEnterEnd',
  'onLeaveStart',
  'onLeaveActive',
  'onLeaveEnd',
];
var am = (function (t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em,
      r = (function (t) {
        tc(o, e.exports.Component);
        var r = ic(o);
        function o() {
          var e;
          return (
            Gs(this, o),
            ((e = r.apply(this, arguments)).state = { keyEntities: [] }),
            (e.removeKey = function (t) {
              e.setState(function (e) {
                return {
                  keyEntities: e.keyEntities.map(function (e) {
                    return e.key !== t ? e : fc(fc({}, e), {}, { status: 'removed' });
                  }),
                };
              });
            }),
            e
          );
        }
        return (
          Js(
            o,
            [
              {
                key: 'render',
                value: function () {
                  var t = this,
                    r = this.state.keyEntities,
                    o = this.props,
                    a = o.component,
                    i = o.children,
                    l = o.onVisibleChanged,
                    u = kp(o, ['component', 'children', 'onVisibleChanged']),
                    s = a || e.exports.Fragment,
                    c = {};
                  return (
                    om.forEach(function (e) {
                      (c[e] = u[e]), delete u[e];
                    }),
                    delete u.keys,
                    e.exports.createElement(
                      s,
                      u,
                      r.map(function (r) {
                        var o = r.status,
                          a = kp(r, ['status']),
                          u = 'add' === o || 'keep' === o;
                        return e.exports.createElement(
                          n,
                          Qs({}, c, {
                            key: a.key,
                            visible: u,
                            eventProps: a,
                            onVisibleChanged: function (e) {
                              null == l || l(e, { key: a.key }), e || t.removeKey(a.key);
                            },
                          }),
                          i,
                        );
                      }),
                    )
                  );
                },
              },
            ],
            [
              {
                key: 'getDerivedStateFromProps',
                value: function (e, t) {
                  var n = e.keys,
                    r = t.keyEntities,
                    o = nm(n);
                  return {
                    keyEntities: rm(r, o).filter(function (e) {
                      var t = r.find(function (t) {
                        var n = t.key;
                        return e.key === n;
                      });
                      return !t || 'removed' !== t.status || 'remove' !== e.status;
                    }),
                  };
                },
              },
            ],
          ),
          o
        );
      })();
    return (r.defaultProps = { component: 'div' }), r;
  })(jp),
  im = (function (t) {
    tc(r, e.exports.Component);
    var n = ic(r);
    function r() {
      var e;
      Gs(this, r);
      for (var t = arguments.length, o = new Array(t), a = 0; a < t; a++) o[a] = arguments[a];
      return (
        ((e = n.call.apply(n, [this].concat(o))).closeTimer = null),
        (e.close = function (t) {
          t && t.stopPropagation(), e.clearCloseTimer();
          var n = e.props,
            r = n.onClose,
            o = n.noticeKey;
          r && r(o);
        }),
        (e.startCloseTimer = function () {
          e.props.duration &&
            (e.closeTimer = window.setTimeout(function () {
              e.close();
            }, 1e3 * e.props.duration));
        }),
        (e.clearCloseTimer = function () {
          e.closeTimer && (clearTimeout(e.closeTimer), (e.closeTimer = null));
        }),
        e
      );
    }
    return (
      Js(r, [
        {
          key: 'componentDidMount',
          value: function () {
            this.startCloseTimer();
          },
        },
        {
          key: 'componentDidUpdate',
          value: function (e) {
            (this.props.duration !== e.duration ||
              this.props.updateMark !== e.updateMark ||
              (this.props.visible !== e.visible && this.props.visible)) &&
              this.restartCloseTimer();
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.clearCloseTimer();
          },
        },
        {
          key: 'restartCloseTimer',
          value: function () {
            this.clearCloseTimer(), this.startCloseTimer();
          },
        },
        {
          key: 'render',
          value: function () {
            var t = this,
              n = this.props,
              r = n.prefixCls,
              o = n.className,
              a = n.closable,
              i = n.closeIcon,
              l = n.style,
              u = n.onClick,
              s = n.children,
              c = n.holder,
              f = ''.concat(r, '-notice'),
              d = Object.keys(this.props).reduce(function (e, n) {
                return (
                  ('data-' !== n.substr(0, 5) && 'aria-' !== n.substr(0, 5) && 'role' !== n) ||
                    (e[n] = t.props[n]),
                  e
                );
              }, {}),
              p = e.exports.createElement(
                'div',
                Qs(
                  {
                    className: sc(f, o, Xs({}, ''.concat(f, '-closable'), a)),
                    style: l,
                    onMouseEnter: this.clearCloseTimer,
                    onMouseLeave: this.startCloseTimer,
                    onClick: u,
                  },
                  d,
                ),
                e.exports.createElement('div', { className: ''.concat(f, '-content') }, s),
                a
                  ? e.exports.createElement(
                      'a',
                      { tabIndex: 0, onClick: this.close, className: ''.concat(f, '-close') },
                      i || e.exports.createElement('span', { className: ''.concat(f, '-close-x') }),
                    )
                  : null,
              );
            return c ? Ys.createPortal(p, c) : p;
          },
        },
      ]),
      r
    );
  })();
function lm(t) {
  var n = e.exports.useRef({}),
    r = Cp(e.exports.useState([]), 2),
    o = r[0],
    a = r[1];
  return [
    function (r) {
      var o = !0;
      t.add(r, function (t, r) {
        var i = r.key;
        if (t && (!n.current[i] || o)) {
          var l = e.exports.createElement(im, Qs({}, r, { holder: t }));
          (n.current[i] = l),
            a(function (e) {
              var t = e.findIndex(function (e) {
                return e.key === r.key;
              });
              if (-1 === t) return [].concat(hd(e), [l]);
              var n = hd(e);
              return (n[t] = l), n;
            });
        }
        o = !1;
      });
    },
    e.exports.createElement(e.exports.Fragment, null, o),
  ];
}
im.defaultProps = { onClose: function () {}, duration: 1.5 };
var um = 0,
  sm = Date.now();
function cm() {
  var e = um;
  return (um += 1), 'rcNotification_'.concat(sm, '_').concat(e);
}
var fm = (function (t) {
  tc(r, e.exports.Component);
  var n = ic(r);
  function r() {
    var e;
    Gs(this, r);
    for (var t = arguments.length, o = new Array(t), a = 0; a < t; a++) o[a] = arguments[a];
    return (
      ((e = n.call.apply(n, [this].concat(o))).state = { notices: [] }),
      (e.hookRefs = new Map()),
      (e.add = function (t, n) {
        var r = t.key || cm(),
          o = fc(fc({}, t), {}, { key: r }),
          a = e.props.maxCount;
        e.setState(function (e) {
          var t = e.notices,
            i = t
              .map(function (e) {
                return e.notice.key;
              })
              .indexOf(r),
            l = t.concat();
          return (
            -1 !== i
              ? l.splice(i, 1, { notice: o, holderCallback: n })
              : (a &&
                  t.length >= a &&
                  ((o.key = l[0].notice.key),
                  (o.updateMark = cm()),
                  (o.userPassKey = r),
                  l.shift()),
                l.push({ notice: o, holderCallback: n })),
            { notices: l }
          );
        });
      }),
      (e.remove = function (t) {
        e.setState(function (e) {
          return {
            notices: e.notices.filter(function (e) {
              var n = e.notice,
                r = n.key;
              return (n.userPassKey || r) !== t;
            }),
          };
        });
      }),
      (e.noticePropsMap = {}),
      e
    );
  }
  return (
    Js(r, [
      {
        key: 'getTransitionName',
        value: function () {
          var e = this.props,
            t = e.prefixCls,
            n = e.animation,
            r = this.props.transitionName;
          return !r && n && (r = ''.concat(t, '-').concat(n)), r;
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.state.notices,
            r = this.props,
            o = r.prefixCls,
            a = r.className,
            i = r.closeIcon,
            l = r.style,
            u = [];
          return (
            n.forEach(function (e, r) {
              var a = e.notice,
                l = e.holderCallback,
                s = r === n.length - 1 ? a.updateMark : void 0,
                c = a.key,
                f = a.userPassKey,
                d = fc(
                  fc(fc({ prefixCls: o, closeIcon: i }, a), a.props),
                  {},
                  {
                    key: c,
                    noticeKey: f || c,
                    updateMark: s,
                    onClose: function (e) {
                      var n;
                      t.remove(e), null === (n = a.onClose) || void 0 === n || n.call(a);
                    },
                    onClick: a.onClick,
                    children: a.content,
                  },
                );
              u.push(c), (t.noticePropsMap[c] = { props: d, holderCallback: l });
            }),
            e.exports.createElement(
              'div',
              { className: sc(o, a), style: l },
              e.exports.createElement(
                am,
                {
                  keys: u,
                  motionName: this.getTransitionName(),
                  onVisibleChanged: function (e, n) {
                    var r = n.key;
                    e || delete t.noticePropsMap[r];
                  },
                },
                function (n) {
                  var r = n.key,
                    a = n.className,
                    i = n.style,
                    l = n.visible,
                    u = t.noticePropsMap[r],
                    s = u.props,
                    c = u.holderCallback;
                  return c
                    ? e.exports.createElement('div', {
                        key: r,
                        className: sc(a, ''.concat(o, '-hook-holder')),
                        style: fc({}, i),
                        ref: function (e) {
                          void 0 !== r &&
                            (e ? (t.hookRefs.set(r, e), c(e, s)) : t.hookRefs.delete(r));
                        },
                      })
                    : e.exports.createElement(
                        im,
                        Qs({}, s, {
                          className: sc(a, null == s ? void 0 : s.className),
                          style: fc(fc({}, i), null == s ? void 0 : s.style),
                          visible: l,
                        }),
                      );
                },
              ),
            )
          );
        },
      },
    ]),
    r
  );
})();
(fm.newInstance = void 0),
  (fm.defaultProps = {
    prefixCls: 'rc-notification',
    animation: 'fade',
    style: { top: 65, left: '50%' },
  }),
  (fm.newInstance = function (t, n) {
    var r = t || {},
      o = r.getContainer,
      a = kp(r, ['getContainer']),
      i = document.createElement('div');
    o ? o().appendChild(i) : document.body.appendChild(i);
    var l = !1;
    Ys.render(
      e.exports.createElement(
        fm,
        Qs({}, a, {
          ref: function (e) {
            l ||
              ((l = !0),
              n({
                notice: function (t) {
                  e.add(t);
                },
                removeNotice: function (t) {
                  e.remove(t);
                },
                component: e,
                destroy: function () {
                  Ys.unmountComponentAtNode(i), i.parentNode && i.parentNode.removeChild(i);
                },
                useNotification: function () {
                  return lm(e);
                },
              }));
          },
        }),
      ),
      i,
    );
  });
var dm = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z',
        },
      },
    ],
  },
  name: 'loading',
  theme: 'outlined',
};
function pm(e, t) {
  (function (e) {
    return 'string' == typeof e && -1 !== e.indexOf('.') && 1 === parseFloat(e);
  })(e) && (e = '100%');
  var n = (function (e) {
    return 'string' == typeof e && -1 !== e.indexOf('%');
  })(e);
  return (
    (e = 360 === t ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (e =
          360 === t
            ? (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t))
            : (e % t) / parseFloat(String(t)))
  );
}
function mm(e) {
  return e <= 1 ? 100 * Number(e) + '%' : e;
}
function hm(e) {
  return 1 === e.length ? '0' + e : String(e);
}
function vm(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + 6 * n * (t - e) : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function gm(e) {
  return ym(e) / 255;
}
function ym(e) {
  return parseInt(e, 16);
}
var bm = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
};
function xm(e) {
  var t,
    n,
    r,
    o = { r: 0, g: 0, b: 0 },
    a = 1,
    i = null,
    l = null,
    u = null,
    s = !1,
    c = !1;
  return (
    'string' == typeof e &&
      (e = (function (e) {
        if (0 === (e = e.trim().toLowerCase()).length) return !1;
        var t = !1;
        if (bm[e]) (e = bm[e]), (t = !0);
        else if ('transparent' === e) return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
        var n = Cm.rgb.exec(e);
        if (n) return { r: n[1], g: n[2], b: n[3] };
        if ((n = Cm.rgba.exec(e))) return { r: n[1], g: n[2], b: n[3], a: n[4] };
        if ((n = Cm.hsl.exec(e))) return { h: n[1], s: n[2], l: n[3] };
        if ((n = Cm.hsla.exec(e))) return { h: n[1], s: n[2], l: n[3], a: n[4] };
        if ((n = Cm.hsv.exec(e))) return { h: n[1], s: n[2], v: n[3] };
        if ((n = Cm.hsva.exec(e))) return { h: n[1], s: n[2], v: n[3], a: n[4] };
        if ((n = Cm.hex8.exec(e)))
          return {
            r: ym(n[1]),
            g: ym(n[2]),
            b: ym(n[3]),
            a: gm(n[4]),
            format: t ? 'name' : 'hex8',
          };
        if ((n = Cm.hex6.exec(e)))
          return { r: ym(n[1]), g: ym(n[2]), b: ym(n[3]), format: t ? 'name' : 'hex' };
        if ((n = Cm.hex4.exec(e)))
          return {
            r: ym(n[1] + n[1]),
            g: ym(n[2] + n[2]),
            b: ym(n[3] + n[3]),
            a: gm(n[4] + n[4]),
            format: t ? 'name' : 'hex8',
          };
        if ((n = Cm.hex3.exec(e)))
          return {
            r: ym(n[1] + n[1]),
            g: ym(n[2] + n[2]),
            b: ym(n[3] + n[3]),
            format: t ? 'name' : 'hex',
          };
        return !1;
      })(e)),
    'object' == typeof e &&
      (Sm(e.r) && Sm(e.g) && Sm(e.b)
        ? ((t = e.r),
          (n = e.g),
          (r = e.b),
          (o = { r: 255 * pm(t, 255), g: 255 * pm(n, 255), b: 255 * pm(r, 255) }),
          (s = !0),
          (c = '%' === String(e.r).substr(-1) ? 'prgb' : 'rgb'))
        : Sm(e.h) && Sm(e.s) && Sm(e.v)
        ? ((i = mm(e.s)),
          (l = mm(e.v)),
          (o = (function (e, t, n) {
            (e = 6 * pm(e, 360)), (t = pm(t, 100)), (n = pm(n, 100));
            var r = Math.floor(e),
              o = e - r,
              a = n * (1 - t),
              i = n * (1 - o * t),
              l = n * (1 - (1 - o) * t),
              u = r % 6;
            return {
              r: 255 * [n, i, a, a, l, n][u],
              g: 255 * [l, n, n, i, a, a][u],
              b: 255 * [a, a, l, n, n, i][u],
            };
          })(e.h, i, l)),
          (s = !0),
          (c = 'hsv'))
        : Sm(e.h) &&
          Sm(e.s) &&
          Sm(e.l) &&
          ((i = mm(e.s)),
          (u = mm(e.l)),
          (o = (function (e, t, n) {
            var r, o, a;
            if (((e = pm(e, 360)), (t = pm(t, 100)), (n = pm(n, 100)), 0 === t))
              (o = n), (a = n), (r = n);
            else {
              var i = n < 0.5 ? n * (1 + t) : n + t - n * t,
                l = 2 * n - i;
              (r = vm(l, i, e + 1 / 3)), (o = vm(l, i, e)), (a = vm(l, i, e - 1 / 3));
            }
            return { r: 255 * r, g: 255 * o, b: 255 * a };
          })(e.h, i, u)),
          (s = !0),
          (c = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (a = e.a)),
    (a = (function (e) {
      return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
    })(a)),
    {
      ok: s,
      format: e.format || c,
      r: Math.min(255, Math.max(o.r, 0)),
      g: Math.min(255, Math.max(o.g, 0)),
      b: Math.min(255, Math.max(o.b, 0)),
      a: a,
    }
  );
}
var wm = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)',
  Em = '[\\s|\\(]+(' + wm + ')[,|\\s]+(' + wm + ')[,|\\s]+(' + wm + ')\\s*\\)?',
  km = '[\\s|\\(]+(' + wm + ')[,|\\s]+(' + wm + ')[,|\\s]+(' + wm + ')[,|\\s]+(' + wm + ')\\s*\\)?',
  Cm = {
    CSS_UNIT: new RegExp(wm),
    rgb: new RegExp('rgb' + Em),
    rgba: new RegExp('rgba' + km),
    hsl: new RegExp('hsl' + Em),
    hsla: new RegExp('hsla' + km),
    hsv: new RegExp('hsv' + Em),
    hsva: new RegExp('hsva' + km),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function Sm(e) {
  return Boolean(Cm.CSS_UNIT.exec(String(e)));
}
var Pm = [
  { index: 7, opacity: 0.15 },
  { index: 6, opacity: 0.25 },
  { index: 5, opacity: 0.3 },
  { index: 5, opacity: 0.45 },
  { index: 5, opacity: 0.65 },
  { index: 5, opacity: 0.85 },
  { index: 4, opacity: 0.9 },
  { index: 3, opacity: 0.95 },
  { index: 2, opacity: 0.97 },
  { index: 1, opacity: 0.98 },
];
function Nm(e) {
  var t = (function (e, t, n) {
    (e = pm(e, 255)), (t = pm(t, 255)), (n = pm(n, 255));
    var r = Math.max(e, t, n),
      o = Math.min(e, t, n),
      a = 0,
      i = r,
      l = r - o,
      u = 0 === r ? 0 : l / r;
    if (r === o) a = 0;
    else {
      switch (r) {
        case e:
          a = (t - n) / l + (t < n ? 6 : 0);
          break;
        case t:
          a = (n - e) / l + 2;
          break;
        case n:
          a = (e - t) / l + 4;
      }
      a /= 6;
    }
    return { h: a, s: u, v: i };
  })(e.r, e.g, e.b);
  return { h: 360 * t.h, s: t.s, v: t.v };
}
function Om(e) {
  var t = e.r,
    n = e.g,
    r = e.b;
  return '#'.concat(
    (function (e, t, n, r) {
      var o = [
        hm(Math.round(e).toString(16)),
        hm(Math.round(t).toString(16)),
        hm(Math.round(n).toString(16)),
      ];
      return r &&
        o[0].startsWith(o[0].charAt(1)) &&
        o[1].startsWith(o[1].charAt(1)) &&
        o[2].startsWith(o[2].charAt(1))
        ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
        : o.join('');
    })(t, n, r, !1),
  );
}
function Tm(e, t, n) {
  var r = n / 100;
  return { r: (t.r - e.r) * r + e.r, g: (t.g - e.g) * r + e.g, b: (t.b - e.b) * r + e.b };
}
function Mm(e, t, n) {
  var r;
  return (
    (r =
      Math.round(e.h) >= 60 && Math.round(e.h) <= 240
        ? n
          ? Math.round(e.h) - 2 * t
          : Math.round(e.h) + 2 * t
        : n
        ? Math.round(e.h) + 2 * t
        : Math.round(e.h) - 2 * t) < 0
      ? (r += 360)
      : r >= 360 && (r -= 360),
    r
  );
}
function _m(e, t, n) {
  return 0 === e.h && 0 === e.s
    ? e.s
    : ((r = n ? e.s - 0.16 * t : 4 === t ? e.s + 0.16 : e.s + 0.05 * t) > 1 && (r = 1),
      n && 5 === t && r > 0.1 && (r = 0.1),
      r < 0.06 && (r = 0.06),
      Number(r.toFixed(2)));
  var r;
}
function Rm(e, t, n) {
  var r;
  return (r = n ? e.v + 0.05 * t : e.v - 0.15 * t) > 1 && (r = 1), Number(r.toFixed(2));
}
function Fm(e) {
  for (
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = [],
      r = xm(e),
      o = 5;
    o > 0;
    o -= 1
  ) {
    var a = Nm(r),
      i = Om(xm({ h: Mm(a, o, !0), s: _m(a, o, !0), v: Rm(a, o, !0) }));
    n.push(i);
  }
  n.push(Om(r));
  for (var l = 1; l <= 4; l += 1) {
    var u = Nm(r),
      s = Om(xm({ h: Mm(u, l), s: _m(u, l), v: Rm(u, l) }));
    n.push(s);
  }
  return 'dark' === t.theme
    ? Pm.map(function (e) {
        var r = e.index,
          o = e.opacity;
        return Om(Tm(xm(t.backgroundColor || '#141414'), xm(n[r]), 100 * o));
      })
    : n;
}
var Lm = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1890FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666',
  },
  Am = {},
  Im = {};
Object.keys(Lm).forEach(function (e) {
  (Am[e] = Fm(Lm[e])),
    (Am[e].primary = Am[e][5]),
    (Im[e] = Fm(Lm[e], { theme: 'dark', backgroundColor: '#141414' })),
    (Im[e].primary = Im[e][5]);
}),
  Am.red,
  Am.volcano,
  Am.gold,
  Am.orange,
  Am.yellow,
  Am.lime,
  Am.green,
  Am.cyan,
  Am.blue,
  Am.geekblue,
  Am.purple,
  Am.magenta,
  Am.grey;
function jm(e) {
  return e.attachTo ? e.attachTo : document.querySelector('head') || document.body;
}
function zm(e) {
  var t,
    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (!Sp()) return null;
  var r,
    o = document.createElement('style');
  (null === (t = n.csp) || void 0 === t ? void 0 : t.nonce) &&
    (o.nonce = null === (r = n.csp) || void 0 === r ? void 0 : r.nonce);
  o.innerHTML = e;
  var a = jm(n),
    i = a.firstChild;
  return (
    n.prepend && a.prepend
      ? a.prepend(o)
      : n.prepend && i
      ? a.insertBefore(o, i)
      : a.appendChild(o),
    o
  );
}
var Dm = new Map();
function Vm(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    r = jm(n);
  if (!Dm.has(r)) {
    var o = zm('', n),
      a = o.parentNode;
    Dm.set(r, a), a.removeChild(o);
  }
  var i = Array.from(Dm.get(r).children).find(function (e) {
    return 'STYLE' === e.tagName && e['rc-util-key'] === t;
  });
  if (i) {
    var l, u, s;
    if (
      (null === (l = n.csp) || void 0 === l ? void 0 : l.nonce) &&
      i.nonce !== (null === (u = n.csp) || void 0 === u ? void 0 : u.nonce)
    )
      i.nonce = null === (s = n.csp) || void 0 === s ? void 0 : s.nonce;
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var c = zm(e, n);
  return (c['rc-util-key'] = t), c;
}
function Um(e) {
  return (
    'object' === rc(e) &&
    'string' == typeof e.name &&
    'string' == typeof e.theme &&
    ('object' === rc(e.icon) || 'function' == typeof e.icon)
  );
}
function Hm() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n];
    switch (n) {
      case 'class':
        (t.className = r), delete t.class;
        break;
      default:
        t[n] = r;
    }
    return t;
  }, {});
}
function Wm(e, t, n) {
  return n
    ? j.createElement(
        e.tag,
        fc(fc({ key: t }, Hm(e.attrs)), n),
        (e.children || []).map(function (n, r) {
          return Wm(n, ''.concat(t, '-').concat(e.tag, '-').concat(r));
        }),
      )
    : j.createElement(
        e.tag,
        fc({ key: t }, Hm(e.attrs)),
        (e.children || []).map(function (n, r) {
          return Wm(n, ''.concat(t, '-').concat(e.tag, '-').concat(r));
        }),
      );
}
function $m(e) {
  return Fm(e)[0];
}
function Bm(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var qm =
    '\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n',
  Km = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 };
var Ym = function (t) {
  var n,
    r,
    o = t.icon,
    a = t.className,
    i = t.onClick,
    l = t.style,
    u = t.primaryColor,
    s = t.secondaryColor,
    c = kp(t, ['icon', 'className', 'onClick', 'style', 'primaryColor', 'secondaryColor']),
    f = Km;
  if (
    (u && (f = { primaryColor: u, secondaryColor: s || $m(u) }),
    (function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qm,
        n = e.exports.useContext(mf).csp;
      e.exports.useEffect(function () {
        Vm(t, '@ant-design-icons', { prepend: !0, csp: n });
      }, []);
    })(),
    (n = Um(o)),
    (r = 'icon should be icon definiton, but got '.concat(o)),
    Vc(n, '[@ant-design/icons] '.concat(r)),
    !Um(o))
  )
    return null;
  var d = o;
  return (
    d &&
      'function' == typeof d.icon &&
      (d = fc(fc({}, d), {}, { icon: d.icon(f.primaryColor, f.secondaryColor) })),
    Wm(
      d.icon,
      'svg-'.concat(d.name),
      fc(
        {
          className: a,
          onClick: i,
          style: l,
          'data-icon': d.name,
          width: '1em',
          height: '1em',
          fill: 'currentColor',
          'aria-hidden': 'true',
        },
        c,
      ),
    )
  );
};
(Ym.displayName = 'IconReact'),
  (Ym.getTwoToneColors = function () {
    return fc({}, Km);
  }),
  (Ym.setTwoToneColors = function (e) {
    var t = e.primaryColor,
      n = e.secondaryColor;
    (Km.primaryColor = t), (Km.secondaryColor = n || $m(t)), (Km.calculated = !!n);
  });
var Qm = Ym;
function Xm(e) {
  var t = Cp(Bm(e), 2),
    n = t[0],
    r = t[1];
  return Qm.setTwoToneColors({ primaryColor: n, secondaryColor: r });
}
Xm('#1890ff');
var Gm = e.exports.forwardRef(function (t, n) {
  var r,
    o = t.className,
    a = t.icon,
    i = t.spin,
    l = t.rotate,
    u = t.tabIndex,
    s = t.onClick,
    c = t.twoToneColor,
    f = kp(t, ['className', 'icon', 'spin', 'rotate', 'tabIndex', 'onClick', 'twoToneColor']),
    d = e.exports.useContext(mf).prefixCls,
    p = void 0 === d ? 'anticon' : d,
    m = sc(
      p,
      (Xs((r = {}), ''.concat(p, '-').concat(a.name), !!a.name),
      Xs(r, ''.concat(p, '-spin'), !!i || 'loading' === a.name),
      r),
      o,
    ),
    h = u;
  void 0 === h && s && (h = -1);
  var v = l
      ? { msTransform: 'rotate('.concat(l, 'deg)'), transform: 'rotate('.concat(l, 'deg)') }
      : void 0,
    g = Cp(Bm(c), 2),
    y = g[0],
    b = g[1];
  return e.exports.createElement(
    'span',
    Object.assign({ role: 'img', 'aria-label': a.name }, f, {
      ref: n,
      tabIndex: h,
      onClick: s,
      className: m,
    }),
    e.exports.createElement(Qm, { icon: a, primaryColor: y, secondaryColor: b, style: v }),
  );
});
(Gm.displayName = 'AntdIcon'),
  (Gm.getTwoToneColor = function () {
    var e = Qm.getTwoToneColors();
    return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
  }),
  (Gm.setTwoToneColor = Xm);
var Zm = Gm,
  Jm = function (t, n) {
    return e.exports.createElement(Zm, Object.assign({}, t, { ref: n, icon: dm }));
  };
Jm.displayName = 'LoadingOutlined';
var eh = e.exports.forwardRef(Jm),
  th = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z',
          },
        },
      ],
    },
    name: 'exclamation-circle',
    theme: 'filled',
  },
  nh = function (t, n) {
    return e.exports.createElement(Zm, Object.assign({}, t, { ref: n, icon: th }));
  };
nh.displayName = 'ExclamationCircleFilled';
var rh = e.exports.forwardRef(nh),
  oh = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z',
          },
        },
      ],
    },
    name: 'close-circle',
    theme: 'filled',
  },
  ah = function (t, n) {
    return e.exports.createElement(Zm, Object.assign({}, t, { ref: n, icon: oh }));
  };
ah.displayName = 'CloseCircleFilled';
var ih = e.exports.forwardRef(ah),
  lh = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z',
          },
        },
      ],
    },
    name: 'check-circle',
    theme: 'filled',
  },
  uh = function (t, n) {
    return e.exports.createElement(Zm, Object.assign({}, t, { ref: n, icon: lh }));
  };
uh.displayName = 'CheckCircleFilled';
var sh,
  ch = e.exports.forwardRef(uh),
  fh = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z',
          },
        },
      ],
    },
    name: 'info-circle',
    theme: 'filled',
  },
  dh = function (t, n) {
    return e.exports.createElement(Zm, Object.assign({}, t, { ref: n, icon: fh }));
  };
dh.displayName = 'InfoCircleFilled';
var ph,
  mh,
  hh,
  vh = 3,
  gh = 1,
  yh = '',
  bh = 'move-up',
  xh = !1,
  wh = !1;
function Eh(e, t) {
  var n = e.prefixCls,
    r = cv(),
    o = r.getPrefixCls,
    a = r.getRootPrefixCls,
    i = o('message', n || yh),
    l = a(e.rootPrefixCls, i);
  if (sh) t({ prefixCls: i, rootPrefixCls: l, instance: sh });
  else {
    var u = {
      prefixCls: i,
      transitionName: xh ? bh : ''.concat(l, '-').concat(bh),
      style: { top: ph },
      getContainer: mh,
      maxCount: hh,
    };
    fm.newInstance(u, function (e) {
      sh
        ? t({ prefixCls: i, rootPrefixCls: l, instance: sh })
        : ((sh = e), t({ prefixCls: i, rootPrefixCls: l, instance: e }));
    });
  }
}
var kh = { info: e.exports.forwardRef(dh), success: ch, error: ih, warning: rh, loading: eh };
function Ch(t, n) {
  var r,
    o = void 0 !== t.duration ? t.duration : vh,
    a = kh[t.type],
    i = sc(
      ''.concat(n, '-custom-content'),
      (Xs((r = {}), ''.concat(n, '-').concat(t.type), t.type),
      Xs(r, ''.concat(n, '-rtl'), !0 === wh),
      r),
    );
  return {
    key: t.key,
    duration: o,
    style: t.style || {},
    className: t.className,
    content: e.exports.createElement(
      'div',
      { className: i },
      t.icon || (a && e.exports.createElement(a, null)),
      e.exports.createElement('span', null, t.content),
    ),
    onClose: t.onClose,
    onClick: t.onClick,
  };
}
var Sh,
  Ph,
  Nh = {
    open: function (e) {
      var t = e.key || gh++,
        n = new Promise(function (n) {
          var r = function () {
            return 'function' == typeof e.onClose && e.onClose(), n(!0);
          };
          Eh(e, function (n) {
            var o = n.prefixCls;
            n.instance.notice(Ch(Qs(Qs({}, e), { key: t, onClose: r }), o));
          });
        }),
        r = function () {
          sh && sh.removeNotice(t);
        };
      return (
        (r.then = function (e, t) {
          return n.then(e, t);
        }),
        (r.promise = n),
        r
      );
    },
    config: function (e) {
      void 0 !== e.top && ((ph = e.top), (sh = null)),
        void 0 !== e.duration && (vh = e.duration),
        void 0 !== e.prefixCls && (yh = e.prefixCls),
        void 0 !== e.getContainer && (mh = e.getContainer),
        void 0 !== e.transitionName && ((bh = e.transitionName), (sh = null), (xh = !0)),
        void 0 !== e.maxCount && ((hh = e.maxCount), (sh = null)),
        void 0 !== e.rtl && (wh = e.rtl);
    },
    destroy: function (e) {
      sh && (e ? (0, sh.removeNotice)(e) : ((0, sh.destroy)(), (sh = null)));
    },
  };
function Oh(e, t) {
  e[t] = function (n, r, o) {
    return (function (e) {
      return '[object Object]' === Object.prototype.toString.call(e) && !!e.content;
    })(n)
      ? e.open(Qs(Qs({}, n), { type: t }))
      : ('function' == typeof r && ((o = r), (r = void 0)),
        e.open({ content: n, duration: r, type: t, onClose: o }));
  };
}
['success', 'info', 'warning', 'error', 'loading'].forEach(function (e) {
  return Oh(Nh, e);
}),
  (Nh.warn = Nh.warning),
  (Nh.useMessage =
    ((Sh = Eh),
    (Ph = Ch),
    function () {
      var t,
        n = null,
        r = Cp(
          lm({
            add: function (e, t) {
              null == n || n.component.add(e, t);
            },
          }),
          2,
        ),
        o = r[0],
        a = r[1],
        i = e.exports.useRef({});
      return (
        (i.current.open = function (e) {
          var r = e.prefixCls,
            a = t('message', r),
            i = t(),
            l = e.key || gh++,
            u = new Promise(function (t) {
              var r = function () {
                return 'function' == typeof e.onClose && e.onClose(), t(!0);
              };
              Sh(Qs(Qs({}, e), { prefixCls: a, rootPrefixCls: i }), function (t) {
                var a = t.prefixCls,
                  i = t.instance;
                (n = i), o(Ph(Qs(Qs({}, e), { key: l, onClose: r }), a));
              });
            }),
            s = function () {
              n && n.removeNotice(l);
            };
          return (
            (s.then = function (e, t) {
              return u.then(e, t);
            }),
            (s.promise = u),
            s
          );
        }),
        ['success', 'info', 'warning', 'error', 'loading'].forEach(function (e) {
          return Oh(i.current, e);
        }),
        [
          i.current,
          e.exports.createElement(bp, { key: 'holder' }, function (e) {
            return (t = e.getPrefixCls), a;
          }),
        ]
      );
    }));
var Th = Nh,
  Mh = If.exports,
  _h = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z',
          },
        },
      ],
    },
    name: 'close',
    theme: 'outlined',
  },
  Rh = function (t, n) {
    return e.exports.createElement(Zm, Object.assign({}, t, { ref: n, icon: _h }));
  };
Rh.displayName = 'CloseOutlined';
var Fh = e.exports.forwardRef(Rh),
  Lh = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z',
          },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
          },
        },
      ],
    },
    name: 'check-circle',
    theme: 'outlined',
  },
  Ah = function (t, n) {
    return e.exports.createElement(Zm, Object.assign({}, t, { ref: n, icon: Lh }));
  };
Ah.displayName = 'CheckCircleOutlined';
var Ih = e.exports.forwardRef(Ah),
  jh = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z',
          },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
          },
        },
      ],
    },
    name: 'close-circle',
    theme: 'outlined',
  },
  zh = function (t, n) {
    return e.exports.createElement(Zm, Object.assign({}, t, { ref: n, icon: jh }));
  };
zh.displayName = 'CloseCircleOutlined';
var Dh = e.exports.forwardRef(zh),
  Vh = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
          },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z',
          },
        },
      ],
    },
    name: 'exclamation-circle',
    theme: 'outlined',
  },
  Uh = function (t, n) {
    return e.exports.createElement(Zm, Object.assign({}, t, { ref: n, icon: Vh }));
  };
Uh.displayName = 'ExclamationCircleOutlined';
var Hh = e.exports.forwardRef(Uh),
  Wh = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
          },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z',
          },
        },
      ],
    },
    name: 'info-circle',
    theme: 'outlined',
  },
  $h = function (t, n) {
    return e.exports.createElement(Zm, Object.assign({}, t, { ref: n, icon: Wh }));
  };
$h.displayName = 'InfoCircleOutlined';
var Bh = e.exports.forwardRef($h);
var qh,
  Kh,
  Yh = {},
  Qh = 4.5,
  Xh = 24,
  Gh = 24,
  Zh = '',
  Jh = 'topRight',
  ev = !1;
function tv(e) {
  var t,
    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xh,
    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Gh;
  switch (e) {
    case 'topLeft':
      t = { left: 0, top: n, bottom: 'auto' };
      break;
    case 'topRight':
      t = { right: 0, top: n, bottom: 'auto' };
      break;
    case 'bottomLeft':
      t = { left: 0, top: 'auto', bottom: r };
      break;
    default:
      t = { right: 0, top: 'auto', bottom: r };
  }
  return t;
}
function nv(t, n) {
  var r = t.placement,
    o = void 0 === r ? Jh : r,
    a = t.top,
    i = t.bottom,
    l = t.getContainer,
    u = void 0 === l ? qh : l,
    s = t.closeIcon,
    c = void 0 === s ? Kh : s,
    f = t.prefixCls,
    d = (0, cv().getPrefixCls)('notification', f || Zh),
    p = ''.concat(d, '-').concat(o),
    m = Yh[p];
  if (m)
    Promise.resolve(m).then(function (e) {
      n({ prefixCls: ''.concat(d, '-notice'), instance: e });
    });
  else {
    var h = e.exports.createElement(
        'span',
        { className: ''.concat(d, '-close-x') },
        c || e.exports.createElement(Fh, { className: ''.concat(d, '-close-icon') }),
      ),
      v = sc(''.concat(d, '-').concat(o), Xs({}, ''.concat(d, '-rtl'), !0 === ev));
    Yh[p] = new Promise(function (e) {
      fm.newInstance(
        { prefixCls: d, className: v, style: tv(o, a, i), getContainer: u, closeIcon: h },
        function (t) {
          e(t), n({ prefixCls: ''.concat(d, '-notice'), instance: t });
        },
      );
    });
  }
}
var rv = { success: Ih, info: Bh, error: Dh, warning: Hh };
function ov(t, n) {
  var r = t.duration,
    o = t.icon,
    a = t.type,
    i = t.description,
    l = t.message,
    u = t.btn,
    s = t.onClose,
    c = t.onClick,
    f = t.key,
    d = t.style,
    p = t.className,
    m = void 0 === r ? Qh : r,
    h = null;
  o
    ? (h = e.exports.createElement('span', { className: ''.concat(n, '-icon') }, t.icon))
    : a &&
      (h = e.exports.createElement(rv[a] || null, {
        className: ''.concat(n, '-icon ').concat(n, '-icon-').concat(a),
      }));
  var v =
    !i && h
      ? e.exports.createElement('span', {
          className: ''.concat(n, '-message-single-line-auto-margin'),
        })
      : null;
  return {
    content: e.exports.createElement(
      'div',
      { className: h ? ''.concat(n, '-with-icon') : '', role: 'alert' },
      h,
      e.exports.createElement('div', { className: ''.concat(n, '-message') }, v, l),
      e.exports.createElement('div', { className: ''.concat(n, '-description') }, i),
      u ? e.exports.createElement('span', { className: ''.concat(n, '-btn') }, u) : null,
    ),
    duration: m,
    closable: !0,
    onClose: s,
    onClick: c,
    key: f,
    style: d || {},
    className: sc(p, Xs({}, ''.concat(n, '-').concat(a), !!a)),
  };
}
var av = {
  open: function (e) {
    nv(e, function (t) {
      var n = t.prefixCls;
      t.instance.notice(ov(e, n));
    });
  },
  close: function (e) {
    Object.keys(Yh).forEach(function (t) {
      return Promise.resolve(Yh[t]).then(function (t) {
        t.removeNotice(e);
      });
    });
  },
  config: function (e) {
    var t = e.duration,
      n = e.placement,
      r = e.bottom,
      o = e.top,
      a = e.getContainer,
      i = e.closeIcon,
      l = e.prefixCls;
    void 0 !== l && (Zh = l),
      void 0 !== t && (Qh = t),
      void 0 !== n ? (Jh = n) : e.rtl && (Jh = 'topLeft'),
      void 0 !== r && (Gh = r),
      void 0 !== o && (Xh = o),
      void 0 !== a && (qh = a),
      void 0 !== i && (Kh = i),
      void 0 !== e.rtl && (ev = e.rtl);
  },
  destroy: function () {
    Object.keys(Yh).forEach(function (e) {
      Promise.resolve(Yh[e]).then(function (e) {
        e.destroy();
      }),
        delete Yh[e];
    });
  },
};
['success', 'info', 'warning', 'error'].forEach(function (e) {
  av[e] = function (t) {
    return av.open(Qs(Qs({}, t), { type: e }));
  };
}),
  (av.warn = av.warning),
  (av.useNotification = (function (t, n) {
    return function () {
      var r,
        o = null,
        a = Cp(
          lm({
            add: function (e, t) {
              null == o || o.component.add(e, t);
            },
          }),
          2,
        ),
        i = a[0],
        l = a[1];
      var u = e.exports.useRef({});
      return (
        (u.current.open = function (e) {
          var a = e.prefixCls,
            l = r('notification', a);
          t(Qs(Qs({}, e), { prefixCls: l }), function (t) {
            var r = t.prefixCls,
              a = t.instance;
            (o = a), i(n(e, r));
          });
        }),
        ['success', 'info', 'warning', 'error'].forEach(function (e) {
          u.current[e] = function (t) {
            return u.current.open(Qs(Qs({}, t), { type: e }));
          };
        }),
        [
          u.current,
          e.exports.createElement(bp, { key: 'holder' }, function (e) {
            return (r = e.getPrefixCls), l;
          }),
        ]
      );
    };
  })(nv, ov));
var iv,
  lv = av,
  uv = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'pageHeader', 'input', 'form'];
function sv() {
  return iv || 'ant';
}
var cv = function () {
    return {
      getPrefixCls: function (e, t) {
        return t || (e ? ''.concat(sv(), '-').concat(e) : sv());
      },
      getRootPrefixCls: function (e, t) {
        return e || iv || (t && t.includes('-') ? t.replace(/^(.*)-[^-]*$/, '$1') : sv());
      },
    };
  },
  fv = function (t) {
    var n = t.children,
      r = t.csp,
      o = t.autoInsertSpaceInButton,
      a = t.form,
      i = t.locale,
      l = t.componentSize,
      u = t.direction,
      s = t.space,
      c = t.virtual,
      f = t.dropdownMatchSelectWidth,
      d = t.legacyLocale,
      p = t.parentContext,
      m = t.iconPrefixCls,
      h = e.exports.useCallback(
        function (e, n) {
          var r = t.prefixCls;
          if (n) return n;
          var o = r || p.getPrefixCls('');
          return e ? ''.concat(o, '-').concat(e) : o;
        },
        [p.getPrefixCls, t.prefixCls],
      ),
      v = Qs(Qs({}, p), {
        csp: r,
        autoInsertSpaceInButton: o,
        locale: i || d,
        direction: u,
        space: s,
        virtual: c,
        dropdownMatchSelectWidth: f,
        getPrefixCls: h,
      });
    uv.forEach(function (e) {
      var n = t[e];
      n && (v[e] = n);
    });
    var g = Jd(
        function () {
          return v;
        },
        v,
        function (e, t) {
          var n = Object.keys(e),
            r = Object.keys(t);
          return (
            n.length !== r.length ||
            n.some(function (n) {
              return e[n] !== t[n];
            })
          );
        },
      ),
      y = e.exports.useMemo(
        function () {
          return { prefixCls: m, csp: r };
        },
        [m],
      ),
      b = n,
      x = {};
    return (
      i && i.Form && i.Form.defaultValidateMessages && (x = i.Form.defaultValidateMessages),
      a && a.validateMessages && (x = Qs(Qs({}, x), a.validateMessages)),
      Object.keys(x).length > 0 && (b = e.exports.createElement(Xd, { validateMessages: x }, n)),
      i && (b = e.exports.createElement(sp, { locale: i, _ANT_MARK__: 'internalMark' }, b)),
      m && (b = e.exports.createElement(mf.Provider, { value: y }, b)),
      l && (b = e.exports.createElement(wp, { size: l }, b)),
      e.exports.createElement(yp.Provider, { value: g }, b)
    );
  },
  dv = function (t) {
    return (
      e.exports.useEffect(
        function () {
          t.direction &&
            (Th.config({ rtl: 'rtl' === t.direction }), lv.config({ rtl: 'rtl' === t.direction }));
        },
        [t.direction],
      ),
      e.exports.createElement(cp, null, function (n, r, o) {
        return e.exports.createElement(bp, null, function (n) {
          return e.exports.createElement(fv, Qs({ parentContext: n, legacyLocale: o }, t));
        });
      })
    );
  };
function pv(e, t, n, r) {
  var o = Ys.unstable_batchedUpdates
    ? function (e) {
        Ys.unstable_batchedUpdates(n, e);
      }
    : n;
  return (
    e.addEventListener && e.addEventListener(t, o, r),
    {
      remove: function () {
        e.removeEventListener && e.removeEventListener(t, o);
      },
    }
  );
}
(dv.ConfigContext = yp),
  (dv.SizeContext = Ep),
  (dv.config = function (e) {
    void 0 !== e.prefixCls && (iv = e.prefixCls);
  });
var mv = {
    MAC_ENTER: 3,
    BACKSPACE: 8,
    TAB: 9,
    NUM_CENTER: 12,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PRINT_SCREEN: 44,
    INSERT: 45,
    DELETE: 46,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    QUESTION_MARK: 63,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    META: 91,
    WIN_KEY_RIGHT: 92,
    CONTEXT_MENU: 93,
    NUM_ZERO: 96,
    NUM_ONE: 97,
    NUM_TWO: 98,
    NUM_THREE: 99,
    NUM_FOUR: 100,
    NUM_FIVE: 101,
    NUM_SIX: 102,
    NUM_SEVEN: 103,
    NUM_EIGHT: 104,
    NUM_NINE: 105,
    NUM_MULTIPLY: 106,
    NUM_PLUS: 107,
    NUM_MINUS: 109,
    NUM_PERIOD: 110,
    NUM_DIVISION: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLOCK: 144,
    SEMICOLON: 186,
    DASH: 189,
    EQUALS: 187,
    COMMA: 188,
    PERIOD: 190,
    SLASH: 191,
    APOSTROPHE: 192,
    SINGLE_QUOTE: 222,
    OPEN_SQUARE_BRACKET: 219,
    BACKSLASH: 220,
    CLOSE_SQUARE_BRACKET: 221,
    WIN_KEY: 224,
    MAC_FF_META: 224,
    WIN_IME: 229,
    isTextModifyingKeyEvent: function (e) {
      var t = e.keyCode;
      if ((e.altKey && !e.ctrlKey) || e.metaKey || (t >= mv.F1 && t <= mv.F12)) return !1;
      switch (t) {
        case mv.ALT:
        case mv.CAPS_LOCK:
        case mv.CONTEXT_MENU:
        case mv.CTRL:
        case mv.DOWN:
        case mv.END:
        case mv.ESC:
        case mv.HOME:
        case mv.INSERT:
        case mv.LEFT:
        case mv.MAC_FF_META:
        case mv.META:
        case mv.NUMLOCK:
        case mv.NUM_CENTER:
        case mv.PAGE_DOWN:
        case mv.PAGE_UP:
        case mv.PAUSE:
        case mv.PRINT_SCREEN:
        case mv.RIGHT:
        case mv.SHIFT:
        case mv.UP:
        case mv.WIN_KEY:
        case mv.WIN_KEY_RIGHT:
          return !1;
        default:
          return !0;
      }
    },
    isCharacterKey: function (e) {
      if (e >= mv.ZERO && e <= mv.NINE) return !0;
      if (e >= mv.NUM_ZERO && e <= mv.NUM_MULTIPLY) return !0;
      if (e >= mv.A && e <= mv.Z) return !0;
      if (-1 !== window.navigator.userAgent.indexOf('WebKit') && 0 === e) return !0;
      switch (e) {
        case mv.SPACE:
        case mv.QUESTION_MARK:
        case mv.NUM_PLUS:
        case mv.NUM_MINUS:
        case mv.NUM_PERIOD:
        case mv.NUM_DIVISION:
        case mv.SEMICOLON:
        case mv.DASH:
        case mv.EQUALS:
        case mv.COMMA:
        case mv.PERIOD:
        case mv.SLASH:
        case mv.APOSTROPHE:
        case mv.SINGLE_QUOTE:
        case mv.OPEN_SQUARE_BRACKET:
        case mv.BACKSLASH:
        case mv.CLOSE_SQUARE_BRACKET:
          return !0;
        default:
          return !1;
      }
    },
  },
  hv = ''
    .concat(
      'accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap',
      ' ',
    )
    .concat(
      'onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError',
    )
    .split(/[\s\n]+/);
function vv(e, t) {
  return 0 === e.indexOf(t);
}
function gv(t, n) {
  var r = n || {},
    o = r.defaultValue,
    a = r.value,
    i = r.onChange,
    l = r.postState,
    u = Cp(
      e.exports.useState(function () {
        return void 0 !== a
          ? a
          : void 0 !== o
          ? 'function' == typeof o
            ? o()
            : o
          : 'function' == typeof t
          ? t()
          : t;
      }),
      2,
    ),
    s = u[0],
    c = u[1],
    f = void 0 !== a ? a : s;
  l && (f = l(f));
  var d = e.exports.useRef(!0);
  return (
    e.exports.useEffect(
      function () {
        d.current ? (d.current = !1) : void 0 === a && c(a);
      },
      [a],
    ),
    [
      f,
      function (e) {
        c(e), f !== e && i && i(e, f);
      },
    ]
  );
}
function yv(t, n) {
  var r = t.prefixCls,
    o = t.invalidate,
    a = t.item,
    i = t.renderItem,
    l = t.responsive,
    u = t.registerSize,
    s = t.itemKey,
    c = t.className,
    f = t.style,
    d = t.children,
    p = t.display,
    m = t.order,
    h = t.component,
    v = void 0 === h ? 'div' : h,
    g = kp(t, [
      'prefixCls',
      'invalidate',
      'item',
      'renderItem',
      'responsive',
      'registerSize',
      'itemKey',
      'className',
      'style',
      'children',
      'display',
      'order',
      'component',
    ]),
    y = l && !p;
  function b(e) {
    u(s, e);
  }
  e.exports.useEffect(function () {
    return function () {
      b(null);
    };
  }, []);
  var x,
    w = i && undefined !== a ? i(a) : d;
  o ||
    (x = {
      opacity: y ? 0 : 1,
      height: y ? 0 : undefined,
      overflowY: y ? 'hidden' : undefined,
      order: l ? m : undefined,
      pointerEvents: y ? 'none' : undefined,
      position: y ? 'absolute' : undefined,
    });
  var E = {};
  y && (E['aria-hidden'] = !0);
  var k = e.exports.createElement(
    v,
    Qs({ className: sc(!o && r, c), style: fc(fc({}, x), f) }, E, g, { ref: n }),
    w,
  );
  return (
    l &&
      (k = e.exports.createElement(
        pf,
        {
          onResize: function (e) {
            b(e.offsetWidth);
          },
        },
        k,
      )),
    k
  );
}
var bv = e.exports.forwardRef(yv);
bv.displayName = 'Item';
var xv = function (t, n) {
    var r = e.exports.useContext(Ev);
    if (!r) {
      var o = t.component,
        a = void 0 === o ? 'div' : o,
        i = kp(t, ['component']);
      return e.exports.createElement(a, Qs({}, i, { ref: n }));
    }
    var l = r.className,
      u = kp(r, ['className']),
      s = t.className,
      c = kp(t, ['className']);
    return e.exports.createElement(
      Ev.Provider,
      { value: null },
      e.exports.createElement(bv, Qs({ ref: n, className: sc(l, s) }, u, c)),
    );
  },
  wv = e.exports.forwardRef(xv);
wv.displayName = 'RawItem';
var Ev = e.exports.createContext(null);
function kv(e) {
  return '+ '.concat(e.length, ' ...');
}
function Cv(t, n) {
  var r,
    o,
    a,
    i,
    l,
    u = t.prefixCls,
    s = void 0 === u ? 'rc-overflow' : u,
    c = t.data,
    f = void 0 === c ? [] : c,
    d = t.renderItem,
    p = t.renderRawItem,
    m = t.itemKey,
    h = t.itemWidth,
    v = void 0 === h ? 10 : h,
    g = t.ssr,
    y = t.style,
    b = t.className,
    x = t.maxCount,
    w = t.renderRest,
    E = t.renderRawRest,
    k = t.suffix,
    C = t.component,
    S = void 0 === C ? 'div' : C,
    P = t.itemComponent,
    N = t.onVisibleChange,
    O = kp(t, [
      'prefixCls',
      'data',
      'renderItem',
      'renderRawItem',
      'itemKey',
      'itemWidth',
      'ssr',
      'style',
      'className',
      'maxCount',
      'renderRest',
      'renderRawRest',
      'suffix',
      'component',
      'itemComponent',
      'onVisibleChange',
    ]),
    T =
      ((r = Cp(e.exports.useState({}), 2)[1]),
      (o = e.exports.useRef([])),
      (a = e.exports.useRef(!1)),
      (i = 0),
      (l = 0),
      e.exports.useEffect(function () {
        return function () {
          a.current = !0;
        };
      }, []),
      function (e) {
        var t = i;
        return (
          (i += 1),
          o.current.length < t + 1 && (o.current[t] = e),
          [
            o.current[t],
            function (e) {
              (o.current[t] = 'function' == typeof e ? e(o.current[t]) : e),
                Yp.cancel(l),
                (l = Yp(function () {
                  a.current || r({});
                }));
            },
          ]
        );
      }),
    M = 'full' === g,
    _ = Cp(T(null), 2),
    R = _[0],
    F = _[1],
    L = R || 0,
    A = Cp(T(new Map()), 2),
    I = A[0],
    j = A[1],
    z = Cp(T(0), 2),
    D = z[0],
    V = z[1],
    U = Cp(T(0), 2),
    H = U[0],
    W = U[1],
    $ = Cp(T(0), 2),
    B = $[0],
    q = $[1],
    K = Cp(e.exports.useState(null), 2),
    Y = K[0],
    Q = K[1],
    X = Cp(e.exports.useState(null), 2),
    G = X[0],
    Z = X[1],
    J = e.exports.useMemo(
      function () {
        return null === G && M ? Number.MAX_SAFE_INTEGER : G || 0;
      },
      [G, R],
    ),
    ee = Cp(e.exports.useState(!1), 2),
    te = ee[0],
    ne = ee[1],
    re = ''.concat(s, '-item'),
    oe = Math.max(D, H),
    ae = f.length && 'responsive' === x,
    ie = 'invalidate' === x,
    le = ae || ('number' == typeof x && f.length > x),
    ue = e.exports.useMemo(
      function () {
        var e = f;
        return (
          ae
            ? (e = null === R && M ? f : f.slice(0, Math.min(f.length, L / v)))
            : 'number' == typeof x && (e = f.slice(0, x)),
          e
        );
      },
      [f, v, R, x, ae],
    ),
    se = e.exports.useMemo(
      function () {
        return ae ? f.slice(J + 1) : f.slice(ue.length);
      },
      [f, ue, ae, J],
    ),
    ce = e.exports.useCallback(
      function (e, t) {
        var n;
        return 'function' == typeof m
          ? m(e)
          : null !== (n = m && (null == e ? void 0 : e[m])) && void 0 !== n
          ? n
          : t;
      },
      [m],
    ),
    fe = e.exports.useCallback(
      d ||
        function (e) {
          return e;
        },
      [d],
    );
  function de(e, t) {
    Z(e), t || (ne(e < f.length - 1), null == N || N(e));
  }
  function pe(e, t) {
    j(function (n) {
      var r = new Map(n);
      return null === t ? r.delete(e) : r.set(e, t), r;
    });
  }
  function me(e) {
    return I.get(ce(ue[e], e));
  }
  e.exports.useLayoutEffect(
    function () {
      if (L && oe && ue) {
        var e = B,
          t = ue.length,
          n = t - 1;
        if (!t) return de(0), void Q(null);
        for (var r = 0; r < t; r += 1) {
          var o = me(r);
          if (void 0 === o) {
            de(r - 1, !0);
            break;
          }
          if (((e += o), (0 === n && e <= L) || (r === n - 1 && e + me(n) <= L))) {
            de(n), Q(null);
            break;
          }
          if (e + oe > L) {
            de(r - 1), Q(e - o - B + H);
            break;
          }
        }
        k && me(0) + B > L && Q(null);
      }
    },
    [L, I, H, B, ce, ue],
  );
  var he = te && !!se.length,
    ve = {};
  null !== Y && ae && (ve = { position: 'absolute', left: Y, top: 0 });
  var ge,
    ye = { prefixCls: re, responsive: ae, component: P, invalidate: ie },
    be = p
      ? function (t, n) {
          var r = ce(t, n);
          return e.exports.createElement(
            Ev.Provider,
            {
              key: r,
              value: fc(
                fc({}, ye),
                {},
                { order: n, item: t, itemKey: r, registerSize: pe, display: n <= J },
              ),
            },
            p(t, n),
          );
        }
      : function (t, n) {
          var r = ce(t, n);
          return e.exports.createElement(
            bv,
            Qs({}, ye, {
              order: n,
              key: r,
              item: t,
              renderItem: fe,
              itemKey: r,
              registerSize: pe,
              display: n <= J,
            }),
          );
        },
    xe = {
      order: he ? J : Number.MAX_SAFE_INTEGER,
      className: ''.concat(re, '-rest'),
      registerSize: function (e, t) {
        W(t), V(H);
      },
      display: he,
    };
  if (E) E && (ge = e.exports.createElement(Ev.Provider, { value: fc(fc({}, ye), xe) }, E(se)));
  else {
    var we = w || kv;
    ge = e.exports.createElement(bv, Qs({}, ye, xe), 'function' == typeof we ? we(se) : we);
  }
  var Ee = e.exports.createElement(
    S,
    Qs({ className: sc(!ie && s, b), style: y, ref: n }, O),
    ue.map(be),
    le ? ge : null,
    k &&
      e.exports.createElement(
        bv,
        Qs({}, ye, {
          order: J,
          className: ''.concat(re, '-suffix'),
          registerSize: function (e, t) {
            q(t);
          },
          display: !0,
          style: ve,
        }),
        k,
      ),
  );
  return (
    ae &&
      (Ee = e.exports.createElement(
        pf,
        {
          onResize: function (e, t) {
            F(t.clientWidth);
          },
        },
        Ee,
      )),
    Ee
  );
}
var Sv = e.exports.forwardRef(Cv);
function Pv(e, t) {
  return !!e && e.contains(t);
}
(Sv.displayName = 'Overflow'),
  (Sv.Item = wv),
  (Sv.RESPONSIVE = 'responsive'),
  (Sv.INVALIDATE = 'invalidate');
var Nv = e.exports.forwardRef(function (t, n) {
  var r = t.didUpdate,
    o = t.getContainer,
    a = t.children,
    i = e.exports.useRef();
  e.exports.useImperativeHandle(n, function () {
    return {};
  });
  var l = e.exports.useRef(!1);
  return (
    !l.current && Sp() && ((i.current = o()), (l.current = !0)),
    e.exports.useEffect(function () {
      null == r || r(t);
    }),
    e.exports.useEffect(function () {
      return function () {
        var e, t;
        null === (e = i.current) ||
          void 0 === e ||
          null === (t = e.parentNode) ||
          void 0 === t ||
          t.removeChild(i.current);
      };
    }, []),
    i.current ? Ys.createPortal(a, i.current) : null
  );
});
function Ov(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function Tv(e) {
  var t = e.prefixCls,
    n = e.motion,
    r = e.animation,
    o = e.transitionName;
  return n || (r ? { motionName: ''.concat(t, '-').concat(r) } : o ? { motionName: o } : null);
}
function Mv(t) {
  var n = t.prefixCls,
    r = t.visible,
    o = t.zIndex,
    a = t.mask,
    i = t.maskMotion,
    l = t.maskAnimation,
    u = t.maskTransitionName;
  if (!a) return null;
  var s = {};
  return (
    (i || u || l) &&
      (s = fc(
        { motionAppear: !0 },
        Tv({ motion: i, prefixCls: n, transitionName: u, animation: l }),
      )),
    e.exports.createElement(em, Qs({}, s, { visible: r, removeOnLeave: !0 }), function (t) {
      var r = t.className;
      return e.exports.createElement('div', {
        style: { zIndex: o },
        className: sc(''.concat(n, '-mask'), r),
      });
    })
  );
}
var _v,
  Rv = function (e) {
    if (!e) return !1;
    if (e.offsetParent) return !0;
    if (e.getBBox) {
      var t = e.getBBox();
      if (t.width || t.height) return !0;
    }
    if (e.getBoundingClientRect) {
      var n = e.getBoundingClientRect();
      if (n.width || n.height) return !0;
    }
    return !1;
  };
function Fv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Lv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? Fv(Object(n), !0).forEach(function (t) {
          Iv(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Fv(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function Av(e) {
  return (Av =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            'function' == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
}
function Iv(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
var jv = { Webkit: '-webkit-', Moz: '-moz-', ms: '-ms-', O: '-o-' };
function zv() {
  if (void 0 !== _v) return _v;
  _v = '';
  var e = document.createElement('p').style;
  for (var t in jv) t + 'Transform' in e && (_v = t);
  return _v;
}
function Dv() {
  return zv() ? ''.concat(zv(), 'TransitionProperty') : 'transitionProperty';
}
function Vv() {
  return zv() ? ''.concat(zv(), 'Transform') : 'transform';
}
function Uv(e, t) {
  var n = Dv();
  n && ((e.style[n] = t), 'transitionProperty' !== n && (e.style.transitionProperty = t));
}
function Hv(e, t) {
  var n = Vv();
  n && ((e.style[n] = t), 'transform' !== n && (e.style.transform = t));
}
var Wv,
  $v = /matrix\((.*)\)/,
  Bv = /matrix3d\((.*)\)/;
function qv(e) {
  var t = e.style.display;
  (e.style.display = 'none'), e.offsetHeight, (e.style.display = t);
}
function Kv(e, t, n) {
  var r = n;
  if ('object' !== Av(t))
    return void 0 !== r
      ? ('number' == typeof r && (r = ''.concat(r, 'px')), void (e.style[t] = r))
      : Wv(e, t);
  for (var o in t) t.hasOwnProperty(o) && Kv(e, o, t[o]);
}
function Yv(e, t) {
  var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
    r = 'scroll'.concat(t ? 'Top' : 'Left');
  if ('number' != typeof n) {
    var o = e.document;
    'number' != typeof (n = o.documentElement[r]) && (n = o.body[r]);
  }
  return n;
}
function Qv(e) {
  return Yv(e);
}
function Xv(e) {
  return Yv(e, !0);
}
function Gv(e) {
  var t = (function (e) {
      var t,
        n,
        r,
        o = e.ownerDocument,
        a = o.body,
        i = o && o.documentElement;
      return (
        (n = (t = e.getBoundingClientRect()).left),
        (r = t.top),
        {
          left: (n -= i.clientLeft || a.clientLeft || 0),
          top: (r -= i.clientTop || a.clientTop || 0),
        }
      );
    })(e),
    n = e.ownerDocument,
    r = n.defaultView || n.parentWindow;
  return (t.left += Qv(r)), (t.top += Xv(r)), t;
}
function Zv(e) {
  return null != e && e == e.window;
}
function Jv(e) {
  return Zv(e) ? e.document : 9 === e.nodeType ? e : e.ownerDocument;
}
var eg = new RegExp(
    '^('.concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, ')(?!px)[a-z%]+$'),
    'i',
  ),
  tg = /^(top|right|bottom|left)$/;
function ng(e, t) {
  return 'left' === e ? (t.useCssRight ? 'right' : e) : t.useCssBottom ? 'bottom' : e;
}
function rg(e) {
  return 'left' === e
    ? 'right'
    : 'right' === e
    ? 'left'
    : 'top' === e
    ? 'bottom'
    : 'bottom' === e
    ? 'top'
    : void 0;
}
function og(e, t, n) {
  'static' === Kv(e, 'position') && (e.style.position = 'relative');
  var r = -999,
    o = -999,
    a = ng('left', n),
    i = ng('top', n),
    l = rg(a),
    u = rg(i);
  'left' !== a && (r = 999), 'top' !== i && (o = 999);
  var s,
    c = '',
    f = Gv(e);
  ('left' in t || 'top' in t) &&
    ((c = (s = e).style.transitionProperty || s.style[Dv()] || ''), Uv(e, 'none')),
    'left' in t && ((e.style[l] = ''), (e.style[a] = ''.concat(r, 'px'))),
    'top' in t && ((e.style[u] = ''), (e.style[i] = ''.concat(o, 'px'))),
    qv(e);
  var d = Gv(e),
    p = {};
  for (var m in t)
    if (t.hasOwnProperty(m)) {
      var h = ng(m, n),
        v = 'left' === m ? r : o,
        g = f[m] - d[m];
      p[h] = h === m ? v + g : v - g;
    }
  Kv(e, p), qv(e), ('left' in t || 'top' in t) && Uv(e, c);
  var y = {};
  for (var b in t)
    if (t.hasOwnProperty(b)) {
      var x = ng(b, n),
        w = t[b] - f[b];
      y[x] = b === x ? p[x] + w : p[x] - w;
    }
  Kv(e, y);
}
function ag(e, t) {
  var n = Gv(e),
    r = (function (e) {
      var t = window.getComputedStyle(e, null),
        n = t.getPropertyValue('transform') || t.getPropertyValue(Vv());
      if (n && 'none' !== n) {
        var r = n.replace(/[^0-9\-.,]/g, '').split(',');
        return { x: parseFloat(r[12] || r[4], 0), y: parseFloat(r[13] || r[5], 0) };
      }
      return { x: 0, y: 0 };
    })(e),
    o = { x: r.x, y: r.y };
  'left' in t && (o.x = r.x + t.left - n.left),
    'top' in t && (o.y = r.y + t.top - n.top),
    (function (e, t) {
      var n = window.getComputedStyle(e, null),
        r = n.getPropertyValue('transform') || n.getPropertyValue(Vv());
      if (r && 'none' !== r) {
        var o,
          a = r.match($v);
        a
          ? (((o = (a = a[1]).split(',').map(function (e) {
              return parseFloat(e, 10);
            }))[4] = t.x),
            (o[5] = t.y),
            Hv(e, 'matrix('.concat(o.join(','), ')')))
          : (((o = r
              .match(Bv)[1]
              .split(',')
              .map(function (e) {
                return parseFloat(e, 10);
              }))[12] = t.x),
            (o[13] = t.y),
            Hv(e, 'matrix3d('.concat(o.join(','), ')')));
      } else Hv(e, 'translateX('.concat(t.x, 'px) translateY(').concat(t.y, 'px) translateZ(0)'));
    })(e, o);
}
function ig(e, t) {
  for (var n = 0; n < e.length; n++) t(e[n]);
}
function lg(e) {
  return 'border-box' === Wv(e, 'boxSizing');
}
'undefined' != typeof window &&
  (Wv = window.getComputedStyle
    ? function (e, t, n) {
        var r = n,
          o = '',
          a = Jv(e);
        return (
          (r = r || a.defaultView.getComputedStyle(e, null)) && (o = r.getPropertyValue(t) || r[t]),
          o
        );
      }
    : function (e, t) {
        var n = e.currentStyle && e.currentStyle[t];
        if (eg.test(n) && !tg.test(t)) {
          var r = e.style,
            o = r.left,
            a = e.runtimeStyle.left;
          (e.runtimeStyle.left = e.currentStyle.left),
            (r.left = 'fontSize' === t ? '1em' : n || 0),
            (n = r.pixelLeft + 'px'),
            (r.left = o),
            (e.runtimeStyle.left = a);
        }
        return '' === n ? 'auto' : n;
      });
var ug = ['margin', 'border', 'padding'];
function sg(e, t, n) {
  var r,
    o = {},
    a = e.style;
  for (r in t) t.hasOwnProperty(r) && ((o[r] = a[r]), (a[r] = t[r]));
  for (r in (n.call(e), t)) t.hasOwnProperty(r) && (a[r] = o[r]);
}
function cg(e, t, n) {
  var r,
    o,
    a,
    i = 0;
  for (o = 0; o < t.length; o++)
    if ((r = t[o]))
      for (a = 0; a < n.length; a++) {
        var l = void 0;
        (l = 'border' === r ? ''.concat(r).concat(n[a], 'Width') : r + n[a]),
          (i += parseFloat(Wv(e, l)) || 0);
      }
  return i;
}
var fg = {
  getParent: function (e) {
    var t = e;
    do {
      t = 11 === t.nodeType && t.host ? t.host : t.parentNode;
    } while (t && 1 !== t.nodeType && 9 !== t.nodeType);
    return t;
  },
};
function dg(e, t, n) {
  var r = n;
  if (Zv(e)) return 'width' === t ? fg.viewportWidth(e) : fg.viewportHeight(e);
  if (9 === e.nodeType) return 'width' === t ? fg.docWidth(e) : fg.docHeight(e);
  var o = 'width' === t ? ['Left', 'Right'] : ['Top', 'Bottom'],
    a = 'width' === t ? e.getBoundingClientRect().width : e.getBoundingClientRect().height,
    i = lg(e),
    l = 0;
  (null == a || a <= 0) &&
    ((a = void 0),
    (null == (l = Wv(e, t)) || Number(l) < 0) && (l = e.style[t] || 0),
    (l = parseFloat(l) || 0)),
    void 0 === r && (r = i ? 1 : -1);
  var u = void 0 !== a || i,
    s = a || l;
  return -1 === r
    ? u
      ? s - cg(e, ['border', 'padding'], o)
      : l
    : u
    ? 1 === r
      ? s
      : s + (2 === r ? -cg(e, ['border'], o) : cg(e, ['margin'], o))
    : l + cg(e, ug.slice(r), o);
}
ig(['Width', 'Height'], function (e) {
  (fg['doc'.concat(e)] = function (t) {
    var n = t.document;
    return Math.max(
      n.documentElement['scroll'.concat(e)],
      n.body['scroll'.concat(e)],
      fg['viewport'.concat(e)](n),
    );
  }),
    (fg['viewport'.concat(e)] = function (t) {
      var n = 'client'.concat(e),
        r = t.document,
        o = r.body,
        a = r.documentElement[n];
      return ('CSS1Compat' === r.compatMode && a) || (o && o[n]) || a;
    });
});
var pg = { position: 'absolute', visibility: 'hidden', display: 'block' };
function mg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  var r,
    o = t[0];
  return (
    0 !== o.offsetWidth
      ? (r = dg.apply(void 0, t))
      : sg(o, pg, function () {
          r = dg.apply(void 0, t);
        }),
    r
  );
}
function hg(e, t) {
  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
ig(['width', 'height'], function (e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  fg['outer'.concat(t)] = function (t, n) {
    return t && mg(t, e, n ? 0 : 1);
  };
  var n = 'width' === e ? ['Left', 'Right'] : ['Top', 'Bottom'];
  fg[e] = function (t, r) {
    var o = r;
    return void 0 !== o
      ? t
        ? (lg(t) && (o += cg(t, ['padding', 'border'], n)), Kv(t, e, o))
        : void 0
      : t && mg(t, e, -1);
  };
});
var vg = {
  getWindow: function (e) {
    if (e && e.document && e.setTimeout) return e;
    var t = e.ownerDocument || e;
    return t.defaultView || t.parentWindow;
  },
  getDocument: Jv,
  offset: function (e, t, n) {
    if (void 0 === t) return Gv(e);
    !(function (e, t, n) {
      if (n.ignoreShake) {
        var r = Gv(e),
          o = r.left.toFixed(0),
          a = r.top.toFixed(0),
          i = t.left.toFixed(0),
          l = t.top.toFixed(0);
        if (o === i && a === l) return;
      }
      n.useCssRight || n.useCssBottom
        ? og(e, t, n)
        : n.useCssTransform && Vv() in document.body.style
        ? ag(e, t)
        : og(e, t, n);
    })(e, t, n || {});
  },
  isWindow: Zv,
  each: ig,
  css: Kv,
  clone: function (e) {
    var t,
      n = {};
    for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
    if (e.overflow) for (t in e) e.hasOwnProperty(t) && (n.overflow[t] = e.overflow[t]);
    return n;
  },
  mix: hg,
  getWindowScrollLeft: function (e) {
    return Qv(e);
  },
  getWindowScrollTop: function (e) {
    return Xv(e);
  },
  merge: function () {
    for (var e = {}, t = 0; t < arguments.length; t++)
      vg.mix(e, t < 0 || arguments.length <= t ? void 0 : arguments[t]);
    return e;
  },
  viewportWidth: 0,
  viewportHeight: 0,
};
hg(vg, fg);
var gg = vg.getParent;
function yg(e) {
  if (vg.isWindow(e) || 9 === e.nodeType) return null;
  var t,
    n = vg.getDocument(e).body,
    r = vg.css(e, 'position');
  if (!('fixed' === r || 'absolute' === r))
    return 'html' === e.nodeName.toLowerCase() ? null : gg(e);
  for (t = gg(e); t && t !== n && 9 !== t.nodeType; t = gg(t))
    if ('static' !== (r = vg.css(t, 'position'))) return t;
  return null;
}
var bg = vg.getParent;
function xg(e, t) {
  for (
    var n = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
      r = yg(e),
      o = vg.getDocument(e),
      a = o.defaultView || o.parentWindow,
      i = o.body,
      l = o.documentElement;
    r;

  ) {
    if (
      (-1 !== navigator.userAgent.indexOf('MSIE') && 0 === r.clientWidth) ||
      r === i ||
      r === l ||
      'visible' === vg.css(r, 'overflow')
    ) {
      if (r === i || r === l) break;
    } else {
      var u = vg.offset(r);
      (u.left += r.clientLeft),
        (u.top += r.clientTop),
        (n.top = Math.max(n.top, u.top)),
        (n.right = Math.min(n.right, u.left + r.clientWidth)),
        (n.bottom = Math.min(n.bottom, u.top + r.clientHeight)),
        (n.left = Math.max(n.left, u.left));
    }
    r = yg(r);
  }
  var s = null;
  vg.isWindow(e) ||
    9 === e.nodeType ||
    ((s = e.style.position), 'absolute' === vg.css(e, 'position') && (e.style.position = 'fixed'));
  var c = vg.getWindowScrollLeft(a),
    f = vg.getWindowScrollTop(a),
    d = vg.viewportWidth(a),
    p = vg.viewportHeight(a),
    m = l.scrollWidth,
    h = l.scrollHeight,
    v = window.getComputedStyle(i);
  if (
    ('hidden' === v.overflowX && (m = a.innerWidth),
    'hidden' === v.overflowY && (h = a.innerHeight),
    e.style && (e.style.position = s),
    t ||
      (function (e) {
        if (vg.isWindow(e) || 9 === e.nodeType) return !1;
        var t = vg.getDocument(e),
          n = t.body,
          r = null;
        for (r = bg(e); r && r !== n && r !== t; r = bg(r))
          if ('fixed' === vg.css(r, 'position')) return !0;
        return !1;
      })(e))
  )
    (n.left = Math.max(n.left, c)),
      (n.top = Math.max(n.top, f)),
      (n.right = Math.min(n.right, c + d)),
      (n.bottom = Math.min(n.bottom, f + p));
  else {
    var g = Math.max(m, c + d);
    n.right = Math.min(n.right, g);
    var y = Math.max(h, f + p);
    n.bottom = Math.min(n.bottom, y);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null;
}
function wg(e) {
  var t, n, r;
  if (vg.isWindow(e) || 9 === e.nodeType) {
    var o = vg.getWindow(e);
    (t = { left: vg.getWindowScrollLeft(o), top: vg.getWindowScrollTop(o) }),
      (n = vg.viewportWidth(o)),
      (r = vg.viewportHeight(o));
  } else (t = vg.offset(e)), (n = vg.outerWidth(e)), (r = vg.outerHeight(e));
  return (t.width = n), (t.height = r), t;
}
function Eg(e, t) {
  var n = t.charAt(0),
    r = t.charAt(1),
    o = e.width,
    a = e.height,
    i = e.left,
    l = e.top;
  return (
    'c' === n ? (l += a / 2) : 'b' === n && (l += a),
    'c' === r ? (i += o / 2) : 'r' === r && (i += o),
    { left: i, top: l }
  );
}
function kg(e, t, n, r, o) {
  var a = Eg(t, n[1]),
    i = Eg(e, n[0]),
    l = [i.left - a.left, i.top - a.top];
  return {
    left: Math.round(e.left - l[0] + r[0] - o[0]),
    top: Math.round(e.top - l[1] + r[1] - o[1]),
  };
}
function Cg(e, t, n) {
  return e.left < n.left || e.left + t.width > n.right;
}
function Sg(e, t, n) {
  return e.top < n.top || e.top + t.height > n.bottom;
}
function Pg(e, t, n) {
  var r = [];
  return (
    vg.each(e, function (e) {
      r.push(
        e.replace(t, function (e) {
          return n[e];
        }),
      );
    }),
    r
  );
}
function Ng(e, t) {
  return (e[t] = -e[t]), e;
}
function Og(e, t) {
  return (
    (/%$/.test(e) ? (parseInt(e.substring(0, e.length - 1), 10) / 100) * t : parseInt(e, 10)) || 0
  );
}
function Tg(e, t) {
  (e[0] = Og(e[0], t.width)), (e[1] = Og(e[1], t.height));
}
function Mg(e, t, n, r) {
  var o = n.points,
    a = n.offset || [0, 0],
    i = n.targetOffset || [0, 0],
    l = n.overflow,
    u = n.source || e;
  (a = [].concat(a)), (i = [].concat(i));
  var s = {},
    c = 0,
    f = xg(u, !(!(l = l || {}) || !l.alwaysByViewport)),
    d = wg(u);
  Tg(a, d), Tg(i, t);
  var p = kg(d, t, o, a, i),
    m = vg.merge(d, p);
  if (f && (l.adjustX || l.adjustY) && r) {
    if (l.adjustX && Cg(p, d, f)) {
      var h = Pg(o, /[lr]/gi, { l: 'r', r: 'l' }),
        v = Ng(a, 0),
        g = Ng(i, 0);
      (function (e, t, n) {
        return e.left > n.right || e.left + t.width < n.left;
      })(kg(d, t, h, v, g), d, f) || ((c = 1), (o = h), (a = v), (i = g));
    }
    if (l.adjustY && Sg(p, d, f)) {
      var y = Pg(o, /[tb]/gi, { t: 'b', b: 't' }),
        b = Ng(a, 1),
        x = Ng(i, 1);
      (function (e, t, n) {
        return e.top > n.bottom || e.top + t.height < n.top;
      })(kg(d, t, y, b, x), d, f) || ((c = 1), (o = y), (a = b), (i = x));
    }
    c && ((p = kg(d, t, o, a, i)), vg.mix(m, p));
    var w = Cg(p, d, f),
      E = Sg(p, d, f);
    if (w || E) {
      var k = o;
      w && (k = Pg(o, /[lr]/gi, { l: 'r', r: 'l' })),
        E && (k = Pg(o, /[tb]/gi, { t: 'b', b: 't' })),
        (o = k),
        (a = n.offset || [0, 0]),
        (i = n.targetOffset || [0, 0]);
    }
    (s.adjustX = l.adjustX && w),
      (s.adjustY = l.adjustY && E),
      (s.adjustX || s.adjustY) &&
        (m = (function (e, t, n, r) {
          var o = vg.clone(e),
            a = { width: t.width, height: t.height };
          return (
            r.adjustX && o.left < n.left && (o.left = n.left),
            r.resizeWidth &&
              o.left >= n.left &&
              o.left + a.width > n.right &&
              (a.width -= o.left + a.width - n.right),
            r.adjustX &&
              o.left + a.width > n.right &&
              (o.left = Math.max(n.right - a.width, n.left)),
            r.adjustY && o.top < n.top && (o.top = n.top),
            r.resizeHeight &&
              o.top >= n.top &&
              o.top + a.height > n.bottom &&
              (a.height -= o.top + a.height - n.bottom),
            r.adjustY &&
              o.top + a.height > n.bottom &&
              (o.top = Math.max(n.bottom - a.height, n.top)),
            vg.mix(o, a)
          );
        })(p, d, f, s));
  }
  return (
    m.width !== d.width && vg.css(u, 'width', vg.width(u) + m.width - d.width),
    m.height !== d.height && vg.css(u, 'height', vg.height(u) + m.height - d.height),
    vg.offset(
      u,
      { left: m.left, top: m.top },
      {
        useCssRight: n.useCssRight,
        useCssBottom: n.useCssBottom,
        useCssTransform: n.useCssTransform,
        ignoreShake: n.ignoreShake,
      },
    ),
    { points: o, offset: a, targetOffset: i, overflow: s }
  );
}
function _g(e, t, n) {
  var r = n.target || t;
  return Mg(
    e,
    wg(r),
    n,
    !(function (e, t) {
      var n = xg(e, t),
        r = wg(e);
      return (
        !n ||
        r.left + r.width <= n.left ||
        r.top + r.height <= n.top ||
        r.left >= n.right ||
        r.top >= n.bottom
      );
    })(r, n.overflow && n.overflow.alwaysByViewport),
  );
}
function Rg(e, t) {
  var n = null,
    r = null;
  var o = new df(function (e) {
    var o = Cp(e, 1)[0].target;
    if (document.documentElement.contains(o)) {
      var a = o.getBoundingClientRect(),
        i = a.width,
        l = a.height,
        u = Math.floor(i),
        s = Math.floor(l);
      (n === u && r === s) ||
        Promise.resolve().then(function () {
          t({ width: u, height: s });
        }),
        (n = u),
        (r = s);
    }
  });
  return (
    e && o.observe(e),
    function () {
      o.disconnect();
    }
  );
}
(_g.__getOffsetParent = yg), (_g.__getVisibleRectForElement = xg);
function Fg(e) {
  return 'function' != typeof e ? null : e();
}
function Lg(e) {
  return 'object' === rc(e) && e ? e : null;
}
var Ag = j.forwardRef(function (e, t) {
  var n = e.children,
    r = e.disabled,
    o = e.target,
    a = e.align,
    i = e.onAlign,
    l = e.monitorWindowResize,
    u = e.monitorBufferTime,
    s = void 0 === u ? 0 : u,
    c = j.useRef({}),
    f = j.useRef(),
    d = j.Children.only(n),
    p = j.useRef({});
  (p.current.disabled = r), (p.current.target = o), (p.current.onAlign = i);
  var m = Cp(
      (function (e, t) {
        var n = j.useRef(!1),
          r = j.useRef(null);
        function o() {
          window.clearTimeout(r.current);
        }
        return [
          function a(i) {
            if (n.current && !0 !== i)
              o(),
                (r.current = window.setTimeout(function () {
                  (n.current = !1), a();
                }, t));
            else {
              if (!1 === e()) return;
              (n.current = !0),
                o(),
                (r.current = window.setTimeout(function () {
                  n.current = !1;
                }, t));
            }
          },
          function () {
            (n.current = !1), o();
          },
        ];
      })(function () {
        var e = p.current,
          t = e.disabled,
          n = e.target,
          r = e.onAlign;
        if (!t && n) {
          var o,
            i = f.current,
            l = Fg(n),
            u = Lg(n);
          (c.current.element = l), (c.current.point = u);
          var s = document.activeElement;
          return (
            l && Rv(l)
              ? (o = _g(i, l, a))
              : u &&
                (o = (function (e, t, n) {
                  var r,
                    o,
                    a = vg.getDocument(e),
                    i = a.defaultView || a.parentWindow,
                    l = vg.getWindowScrollLeft(i),
                    u = vg.getWindowScrollTop(i),
                    s = vg.viewportWidth(i),
                    c = vg.viewportHeight(i),
                    f = {
                      left: (r = 'pageX' in t ? t.pageX : l + t.clientX),
                      top: (o = 'pageY' in t ? t.pageY : u + t.clientY),
                      width: 0,
                      height: 0,
                    },
                    d = r >= 0 && r <= l + s && o >= 0 && o <= u + c,
                    p = [n.points[0], 'cc'];
                  return Mg(e, f, Lv(Lv({}, n), {}, { points: p }), d);
                })(i, u, a)),
            (function (e, t) {
              e !== document.activeElement && Pv(t, e) && 'function' == typeof e.focus && e.focus();
            })(s, i),
            r && o && r(i, o),
            !0
          );
        }
        return !1;
      }, s),
      2,
    ),
    h = m[0],
    v = m[1],
    g = j.useRef({ cancel: function () {} }),
    y = j.useRef({ cancel: function () {} });
  j.useEffect(function () {
    var e,
      t,
      n = Fg(o),
      r = Lg(o);
    f.current !== y.current.element &&
      (y.current.cancel(), (y.current.element = f.current), (y.current.cancel = Rg(f.current, h))),
      (c.current.element === n &&
        ((e = c.current.point) === (t = r) ||
          (e &&
            t &&
            ('pageX' in t && 'pageY' in t
              ? e.pageX === t.pageX && e.pageY === t.pageY
              : 'clientX' in t &&
                'clientY' in t &&
                e.clientX === t.clientX &&
                e.clientY === t.clientY)))) ||
        (h(),
        g.current.element !== n &&
          (g.current.cancel(), (g.current.element = n), (g.current.cancel = Rg(n, h))));
  }),
    j.useEffect(
      function () {
        r ? v() : h();
      },
      [r],
    );
  var b = j.useRef(null);
  return (
    j.useEffect(
      function () {
        l
          ? b.current || (b.current = pv(window, 'resize', h))
          : b.current && (b.current.remove(), (b.current = null));
      },
      [l],
    ),
    j.useEffect(function () {
      return function () {
        g.current.cancel(), y.current.cancel(), b.current && b.current.remove(), v();
      };
    }, []),
    j.useImperativeHandle(t, function () {
      return {
        forceAlign: function () {
          return h(!0);
        },
      };
    }),
    j.isValidElement(d) && (d = j.cloneElement(d, { ref: Hc(d.ref, f) })),
    d
  );
});
function Ig(e, t, n, r, o, a, i) {
  try {
    var l = e[a](i),
      u = l.value;
  } catch (s) {
    return void n(s);
  }
  l.done ? t(u) : Promise.resolve(u).then(r, o);
}
function jg(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, o) {
      var a = e.apply(t, n);
      function i(e) {
        Ig(a, r, o, i, l, 'next', e);
      }
      function l(e) {
        Ig(a, r, o, i, l, 'throw', e);
      }
      i(void 0);
    });
  };
}
Ag.displayName = 'Align';
var zg = ['measure', 'align', null, 'motion'],
  Dg = e.exports.forwardRef(function (t, n) {
    var r = t.visible,
      o = t.prefixCls,
      a = t.className,
      i = t.style,
      l = t.children,
      u = t.zIndex,
      s = t.stretch,
      c = t.destroyPopupOnHide,
      f = t.forceRender,
      d = t.align,
      p = t.point,
      m = t.getRootDomNode,
      h = t.getClassNameFromAlign,
      v = t.onAlign,
      g = t.onMouseEnter,
      y = t.onMouseLeave,
      b = t.onMouseDown,
      x = t.onTouchStart,
      w = e.exports.useRef(),
      E = e.exports.useRef(),
      k = Cp(e.exports.useState(), 2),
      C = k[0],
      S = k[1],
      P = (function (t) {
        var n = Cp(e.exports.useState({ width: 0, height: 0 }), 2),
          r = n[0],
          o = n[1];
        return [
          e.exports.useMemo(
            function () {
              var e = {};
              if (t) {
                var n = r.width,
                  o = r.height;
                -1 !== t.indexOf('height') && o
                  ? (e.height = o)
                  : -1 !== t.indexOf('minHeight') && o && (e.minHeight = o),
                  -1 !== t.indexOf('width') && n
                    ? (e.width = n)
                    : -1 !== t.indexOf('minWidth') && n && (e.minWidth = n);
              }
              return e;
            },
            [t, r],
          ),
          function (e) {
            o({ width: e.offsetWidth, height: e.offsetHeight });
          },
        ];
      })(s),
      N = Cp(P, 2),
      O = N[0],
      T = N[1];
    var M = (function (t, n) {
        var r = Cp(e.exports.useState(null), 2),
          o = r[0],
          a = r[1],
          i = e.exports.useRef(),
          l = e.exports.useRef(!1);
        function u(e) {
          l.current || a(e);
        }
        function s() {
          Yp.cancel(i.current);
        }
        return (
          e.exports.useEffect(
            function () {
              u('measure');
            },
            [t],
          ),
          e.exports.useEffect(
            function () {
              switch (o) {
                case 'measure':
                  n();
              }
              o &&
                (i.current = Yp(
                  jg(
                    Mh.mark(function e() {
                      var t, n;
                      return Mh.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = zg.indexOf(o)), (n = zg[t + 1]) && -1 !== t && u(n);
                            case 3:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  ),
                ));
            },
            [o],
          ),
          e.exports.useEffect(function () {
            return function () {
              (l.current = !0), s();
            };
          }, []),
          [
            o,
            function (e) {
              s(),
                (i.current = Yp(function () {
                  u(function (e) {
                    switch (o) {
                      case 'align':
                        return 'motion';
                      case 'motion':
                        return 'stable';
                    }
                    return e;
                  }),
                    null == e || e();
                }));
            },
          ]
        );
      })(r, function () {
        s && T(m());
      }),
      _ = Cp(M, 2),
      R = _[0],
      F = _[1],
      L = e.exports.useRef();
    function A() {
      var e;
      null === (e = w.current) || void 0 === e || e.forceAlign();
    }
    function I(e, t) {
      if ('align' === R) {
        var n = h(t);
        S(n),
          C !== n
            ? Promise.resolve().then(function () {
                A();
              })
            : F(function () {
                var e;
                null === (e = L.current) || void 0 === e || e.call(L);
              }),
          null == v || v(e, t);
      }
    }
    var j = fc({}, Tv(t));
    function z() {
      return new Promise(function (e) {
        L.current = e;
      });
    }
    ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (e) {
      var t = j[e];
      j[e] = function (e, n) {
        return F(), null == t ? void 0 : t(e, n);
      };
    }),
      e.exports.useEffect(
        function () {
          j.motionName || 'motion' !== R || F();
        },
        [j.motionName, R],
      ),
      e.exports.useImperativeHandle(n, function () {
        return {
          forceAlign: A,
          getElement: function () {
            return E.current;
          },
        };
      });
    var D = fc(
        fc({}, O),
        {},
        {
          zIndex: u,
          opacity: 'motion' !== R && 'stable' !== R && r ? 0 : void 0,
          pointerEvents: 'stable' === R ? void 0 : 'none',
        },
        i,
      ),
      V = !0;
    !(null == d ? void 0 : d.points) || ('align' !== R && 'stable' !== R) || (V = !1);
    var U = l;
    return (
      e.exports.Children.count(l) > 1 &&
        (U = e.exports.createElement('div', { className: ''.concat(o, '-content') }, l)),
      e.exports.createElement(
        em,
        Qs({ visible: r, ref: E, leavedClassName: ''.concat(o, '-hidden') }, j, {
          onAppearPrepare: z,
          onEnterPrepare: z,
          removeOnLeave: c,
          forceRender: f,
        }),
        function (t, n) {
          var r = t.className,
            i = t.style,
            l = sc(o, a, C, r);
          return e.exports.createElement(
            Ag,
            {
              target: p || m,
              key: 'popup',
              ref: w,
              monitorWindowResize: !0,
              disabled: V,
              align: d,
              onAlign: I,
            },
            e.exports.createElement(
              'div',
              {
                ref: n,
                className: l,
                onMouseEnter: g,
                onMouseLeave: y,
                onMouseDownCapture: b,
                onTouchStartCapture: x,
                style: fc(fc({}, i), D),
              },
              U,
            ),
          );
        },
      )
    );
  });
Dg.displayName = 'PopupInner';
var Vg = e.exports.forwardRef(function (t, n) {
  var r = t.prefixCls,
    o = t.visible,
    a = t.zIndex,
    i = t.children,
    l = t.mobile,
    u = (l = void 0 === l ? {} : l).popupClassName,
    s = l.popupStyle,
    c = l.popupMotion,
    f = void 0 === c ? {} : c,
    d = l.popupRender,
    p = e.exports.useRef();
  e.exports.useImperativeHandle(n, function () {
    return {
      forceAlign: function () {},
      getElement: function () {
        return p.current;
      },
    };
  });
  var m = fc({ zIndex: a }, s),
    h = i;
  return (
    e.exports.Children.count(i) > 1 &&
      (h = e.exports.createElement('div', { className: ''.concat(r, '-content') }, i)),
    d && (h = d(h)),
    e.exports.createElement(em, Qs({ visible: o, ref: p, removeOnLeave: !0 }, f), function (t, n) {
      var o = t.className,
        a = t.style,
        i = sc(r, u, o);
      return e.exports.createElement('div', { ref: n, className: i, style: fc(fc({}, a), m) }, h);
    })
  );
});
Vg.displayName = 'MobilePopupInner';
var Ug = e.exports.forwardRef(function (t, n) {
  var r = t.visible,
    o = t.mobile,
    a = kp(t, ['visible', 'mobile']),
    i = Cp(e.exports.useState(r), 2),
    l = i[0],
    u = i[1],
    s = Cp(e.exports.useState(!1), 2),
    c = s[0],
    f = s[1],
    d = fc(fc({}, a), {}, { visible: l });
  e.exports.useEffect(
    function () {
      u(r),
        r &&
          o &&
          f(
            (function () {
              if ('undefined' == typeof navigator || 'undefined' == typeof window) return !1;
              var e = navigator.userAgent || navigator.vendor || window.opera;
              return !(
                !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                  e,
                ) &&
                !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                  null == e ? void 0 : e.substr(0, 4),
                )
              );
            })(),
          );
    },
    [r, o],
  );
  var p = c
    ? e.exports.createElement(Vg, Qs({}, d, { mobile: o, ref: n }))
    : e.exports.createElement(Dg, Qs({}, d, { ref: n }));
  return e.exports.createElement('div', null, e.exports.createElement(Mv, d), p);
});
Ug.displayName = 'Popup';
var Hg = e.exports.createContext(null);
function Wg() {}
function $g() {
  return '';
}
function Bg(e) {
  return e ? e.ownerDocument : window.document;
}
var qg = [
  'onClick',
  'onMouseDown',
  'onTouchStart',
  'onMouseEnter',
  'onMouseLeave',
  'onFocus',
  'onBlur',
  'onContextMenu',
];
var Kg,
  Yg,
  Qg =
    ((Kg = Nv),
    ((Yg = (function (t) {
      tc(r, e.exports.Component);
      var n = ic(r);
      function r(t) {
        var o, a;
        return (
          Gs(this, r),
          ((o = n.call(this, t)).popupRef = e.exports.createRef()),
          (o.triggerRef = e.exports.createRef()),
          (o.onMouseEnter = function (e) {
            var t = o.props.mouseEnterDelay;
            o.fireEvents('onMouseEnter', e), o.delaySetPopupVisible(!0, t, t ? null : e);
          }),
          (o.onMouseMove = function (e) {
            o.fireEvents('onMouseMove', e), o.setPoint(e);
          }),
          (o.onMouseLeave = function (e) {
            o.fireEvents('onMouseLeave', e), o.delaySetPopupVisible(!1, o.props.mouseLeaveDelay);
          }),
          (o.onPopupMouseEnter = function () {
            o.clearDelayTimer();
          }),
          (o.onPopupMouseLeave = function (e) {
            var t;
            (e.relatedTarget &&
              !e.relatedTarget.setTimeout &&
              Pv(
                null === (t = o.popupRef.current) || void 0 === t ? void 0 : t.getElement(),
                e.relatedTarget,
              )) ||
              o.delaySetPopupVisible(!1, o.props.mouseLeaveDelay);
          }),
          (o.onFocus = function (e) {
            o.fireEvents('onFocus', e),
              o.clearDelayTimer(),
              o.isFocusToShow() &&
                ((o.focusTime = Date.now()), o.delaySetPopupVisible(!0, o.props.focusDelay));
          }),
          (o.onMouseDown = function (e) {
            o.fireEvents('onMouseDown', e), (o.preClickTime = Date.now());
          }),
          (o.onTouchStart = function (e) {
            o.fireEvents('onTouchStart', e), (o.preTouchTime = Date.now());
          }),
          (o.onBlur = function (e) {
            o.fireEvents('onBlur', e),
              o.clearDelayTimer(),
              o.isBlurToHide() && o.delaySetPopupVisible(!1, o.props.blurDelay);
          }),
          (o.onContextMenu = function (e) {
            e.preventDefault(), o.fireEvents('onContextMenu', e), o.setPopupVisible(!0, e);
          }),
          (o.onContextMenuClose = function () {
            o.isContextMenuToShow() && o.close();
          }),
          (o.onClick = function (e) {
            if ((o.fireEvents('onClick', e), o.focusTime)) {
              var t;
              if (
                (o.preClickTime && o.preTouchTime
                  ? (t = Math.min(o.preClickTime, o.preTouchTime))
                  : o.preClickTime
                  ? (t = o.preClickTime)
                  : o.preTouchTime && (t = o.preTouchTime),
                Math.abs(t - o.focusTime) < 20)
              )
                return;
              o.focusTime = 0;
            }
            (o.preClickTime = 0),
              (o.preTouchTime = 0),
              o.isClickToShow() &&
                (o.isClickToHide() || o.isBlurToHide()) &&
                e &&
                e.preventDefault &&
                e.preventDefault();
            var n = !o.state.popupVisible;
            ((o.isClickToHide() && !n) || (n && o.isClickToShow())) &&
              o.setPopupVisible(!o.state.popupVisible, e);
          }),
          (o.onPopupMouseDown = function () {
            var e;
            (o.hasPopupMouseDown = !0),
              clearTimeout(o.mouseDownTimeout),
              (o.mouseDownTimeout = window.setTimeout(function () {
                o.hasPopupMouseDown = !1;
              }, 0)),
              o.context && (e = o.context).onPopupMouseDown.apply(e, arguments);
          }),
          (o.onDocumentClick = function (e) {
            if (!o.props.mask || o.props.maskClosable) {
              var t = e.target,
                n = o.getRootDomNode(),
                r = o.getPopupDomNode();
              (Pv(n, t) && !o.isContextMenuOnly()) || Pv(r, t) || o.hasPopupMouseDown || o.close();
            }
          }),
          (o.getRootDomNode = function () {
            var e = o.props.getTriggerDOMNode;
            if (e) return e(o.triggerRef.current);
            try {
              var t = pc(o.triggerRef.current);
              if (t) return t;
            } catch (n) {}
            return Ys.findDOMNode(oc(o));
          }),
          (o.getPopupClassNameFromAlign = function (e) {
            var t = [],
              n = o.props,
              r = n.popupPlacement,
              a = n.builtinPlacements,
              i = n.prefixCls,
              l = n.alignPoint,
              u = n.getPopupClassNameFromAlign;
            return (
              r &&
                a &&
                t.push(
                  (function (e, t, n, r) {
                    for (var o = n.points, a = Object.keys(e), i = 0; i < a.length; i += 1) {
                      var l = a[i];
                      if (Ov(e[l].points, o, r)) return ''.concat(t, '-placement-').concat(l);
                    }
                    return '';
                  })(a, i, e, l),
                ),
              u && t.push(u(e)),
              t.join(' ')
            );
          }),
          (o.getComponent = function () {
            var t = o.props,
              n = t.prefixCls,
              r = t.destroyPopupOnHide,
              a = t.popupClassName,
              i = t.onPopupAlign,
              l = t.popupMotion,
              u = t.popupAnimation,
              s = t.popupTransitionName,
              c = t.popupStyle,
              f = t.mask,
              d = t.maskAnimation,
              p = t.maskTransitionName,
              m = t.maskMotion,
              h = t.zIndex,
              v = t.popup,
              g = t.stretch,
              y = t.alignPoint,
              b = t.mobile,
              x = t.forceRender,
              w = o.state,
              E = w.popupVisible,
              k = w.point,
              C = o.getPopupAlign(),
              S = {};
            return (
              o.isMouseEnterToShow() && (S.onMouseEnter = o.onPopupMouseEnter),
              o.isMouseLeaveToHide() && (S.onMouseLeave = o.onPopupMouseLeave),
              (S.onMouseDown = o.onPopupMouseDown),
              (S.onTouchStart = o.onPopupMouseDown),
              e.exports.createElement(
                Ug,
                Qs(
                  {
                    prefixCls: n,
                    destroyPopupOnHide: r,
                    visible: E,
                    point: y && k,
                    className: a,
                    align: C,
                    onAlign: i,
                    animation: u,
                    getClassNameFromAlign: o.getPopupClassNameFromAlign,
                  },
                  S,
                  {
                    stretch: g,
                    getRootDomNode: o.getRootDomNode,
                    style: c,
                    mask: f,
                    zIndex: h,
                    transitionName: s,
                    maskAnimation: d,
                    maskTransitionName: p,
                    maskMotion: m,
                    ref: o.popupRef,
                    motion: l,
                    mobile: b,
                    forceRender: x,
                  },
                ),
                'function' == typeof v ? v() : v,
              )
            );
          }),
          (o.attachParent = function (e) {
            Yp.cancel(o.attachId);
            var t,
              n = o.props,
              r = n.getPopupContainer,
              a = n.getDocument,
              i = o.getRootDomNode();
            r ? (i || 0 === r.length) && (t = r(i)) : (t = a(o.getRootDomNode()).body),
              t
                ? t.appendChild(e)
                : (o.attachId = Yp(function () {
                    o.attachParent(e);
                  }));
          }),
          (o.getContainer = function () {
            var e = (0, o.props.getDocument)(o.getRootDomNode()).createElement('div');
            return (
              (e.style.position = 'absolute'),
              (e.style.top = '0'),
              (e.style.left = '0'),
              (e.style.width = '100%'),
              o.attachParent(e),
              e
            );
          }),
          (o.setPoint = function (e) {
            o.props.alignPoint && e && o.setState({ point: { pageX: e.pageX, pageY: e.pageY } });
          }),
          (o.handlePortalUpdate = function () {
            o.state.prevPopupVisible !== o.state.popupVisible &&
              o.props.afterPopupVisibleChange(o.state.popupVisible);
          }),
          (o.triggerContextValue = { onPopupMouseDown: o.onPopupMouseDown }),
          (a = 'popupVisible' in t ? !!t.popupVisible : !!t.defaultPopupVisible),
          (o.state = { prevPopupVisible: a, popupVisible: a }),
          qg.forEach(function (e) {
            o['fire'.concat(e)] = function (t) {
              o.fireEvents(e, t);
            };
          }),
          o
        );
      }
      return (
        Js(
          r,
          [
            {
              key: 'componentDidMount',
              value: function () {
                this.componentDidUpdate();
              },
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                var e,
                  t = this.props;
                if (this.state.popupVisible)
                  return (
                    this.clickOutsideHandler ||
                      (!this.isClickToHide() && !this.isContextMenuToShow()) ||
                      ((e = t.getDocument(this.getRootDomNode())),
                      (this.clickOutsideHandler = pv(e, 'mousedown', this.onDocumentClick))),
                    this.touchOutsideHandler ||
                      ((e = e || t.getDocument(this.getRootDomNode())),
                      (this.touchOutsideHandler = pv(e, 'touchstart', this.onDocumentClick))),
                    !this.contextMenuOutsideHandler1 &&
                      this.isContextMenuToShow() &&
                      ((e = e || t.getDocument(this.getRootDomNode())),
                      (this.contextMenuOutsideHandler1 = pv(e, 'scroll', this.onContextMenuClose))),
                    void (
                      !this.contextMenuOutsideHandler2 &&
                      this.isContextMenuToShow() &&
                      (this.contextMenuOutsideHandler2 = pv(
                        window,
                        'blur',
                        this.onContextMenuClose,
                      ))
                    )
                  );
                this.clearOutsideHandler();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.clearDelayTimer(),
                  this.clearOutsideHandler(),
                  clearTimeout(this.mouseDownTimeout),
                  Yp.cancel(this.attachId);
              },
            },
            {
              key: 'getPopupDomNode',
              value: function () {
                var e;
                return (
                  (null === (e = this.popupRef.current) || void 0 === e
                    ? void 0
                    : e.getElement()) || null
                );
              },
            },
            {
              key: 'getPopupAlign',
              value: function () {
                var e = this.props,
                  t = e.popupPlacement,
                  n = e.popupAlign,
                  r = e.builtinPlacements;
                return t && r
                  ? (function (e, t, n) {
                      return fc(fc({}, e[t] || {}), n);
                    })(r, t, n)
                  : n;
              },
            },
            {
              key: 'setPopupVisible',
              value: function (e, t) {
                var n = this.props.alignPoint,
                  r = this.state.popupVisible;
                this.clearDelayTimer(),
                  r !== e &&
                    ('popupVisible' in this.props ||
                      this.setState({ popupVisible: e, prevPopupVisible: r }),
                    this.props.onPopupVisibleChange(e)),
                  n && t && e && this.setPoint(t);
              },
            },
            {
              key: 'delaySetPopupVisible',
              value: function (e, t, n) {
                var r = this,
                  o = 1e3 * t;
                if ((this.clearDelayTimer(), o)) {
                  var a = n ? { pageX: n.pageX, pageY: n.pageY } : null;
                  this.delayTimer = window.setTimeout(function () {
                    r.setPopupVisible(e, a), r.clearDelayTimer();
                  }, o);
                } else this.setPopupVisible(e, n);
              },
            },
            {
              key: 'clearDelayTimer',
              value: function () {
                this.delayTimer && (clearTimeout(this.delayTimer), (this.delayTimer = null));
              },
            },
            {
              key: 'clearOutsideHandler',
              value: function () {
                this.clickOutsideHandler &&
                  (this.clickOutsideHandler.remove(), (this.clickOutsideHandler = null)),
                  this.contextMenuOutsideHandler1 &&
                    (this.contextMenuOutsideHandler1.remove(),
                    (this.contextMenuOutsideHandler1 = null)),
                  this.contextMenuOutsideHandler2 &&
                    (this.contextMenuOutsideHandler2.remove(),
                    (this.contextMenuOutsideHandler2 = null)),
                  this.touchOutsideHandler &&
                    (this.touchOutsideHandler.remove(), (this.touchOutsideHandler = null));
              },
            },
            {
              key: 'createTwoChains',
              value: function (e) {
                var t = this.props.children.props,
                  n = this.props;
                return t[e] && n[e] ? this['fire'.concat(e)] : t[e] || n[e];
              },
            },
            {
              key: 'isClickToShow',
              value: function () {
                var e = this.props,
                  t = e.action,
                  n = e.showAction;
                return -1 !== t.indexOf('click') || -1 !== n.indexOf('click');
              },
            },
            {
              key: 'isContextMenuOnly',
              value: function () {
                var e = this.props.action;
                return 'contextMenu' === e || (1 === e.length && 'contextMenu' === e[0]);
              },
            },
            {
              key: 'isContextMenuToShow',
              value: function () {
                var e = this.props,
                  t = e.action,
                  n = e.showAction;
                return -1 !== t.indexOf('contextMenu') || -1 !== n.indexOf('contextMenu');
              },
            },
            {
              key: 'isClickToHide',
              value: function () {
                var e = this.props,
                  t = e.action,
                  n = e.hideAction;
                return -1 !== t.indexOf('click') || -1 !== n.indexOf('click');
              },
            },
            {
              key: 'isMouseEnterToShow',
              value: function () {
                var e = this.props,
                  t = e.action,
                  n = e.showAction;
                return -1 !== t.indexOf('hover') || -1 !== n.indexOf('mouseEnter');
              },
            },
            {
              key: 'isMouseLeaveToHide',
              value: function () {
                var e = this.props,
                  t = e.action,
                  n = e.hideAction;
                return -1 !== t.indexOf('hover') || -1 !== n.indexOf('mouseLeave');
              },
            },
            {
              key: 'isFocusToShow',
              value: function () {
                var e = this.props,
                  t = e.action,
                  n = e.showAction;
                return -1 !== t.indexOf('focus') || -1 !== n.indexOf('focus');
              },
            },
            {
              key: 'isBlurToHide',
              value: function () {
                var e = this.props,
                  t = e.action,
                  n = e.hideAction;
                return -1 !== t.indexOf('focus') || -1 !== n.indexOf('blur');
              },
            },
            {
              key: 'forcePopupAlign',
              value: function () {
                var e;
                this.state.popupVisible &&
                  (null === (e = this.popupRef.current) || void 0 === e || e.forceAlign());
              },
            },
            {
              key: 'fireEvents',
              value: function (e, t) {
                var n = this.props.children.props[e];
                n && n(t);
                var r = this.props[e];
                r && r(t);
              },
            },
            {
              key: 'close',
              value: function () {
                this.setPopupVisible(!1);
              },
            },
            {
              key: 'render',
              value: function () {
                var t = this.state.popupVisible,
                  n = this.props,
                  r = n.children,
                  o = n.forceRender,
                  a = n.alignPoint,
                  i = n.className,
                  l = n.autoDestroy,
                  u = e.exports.Children.only(r),
                  s = { key: 'trigger' };
                this.isContextMenuToShow()
                  ? (s.onContextMenu = this.onContextMenu)
                  : (s.onContextMenu = this.createTwoChains('onContextMenu')),
                  this.isClickToHide() || this.isClickToShow()
                    ? ((s.onClick = this.onClick),
                      (s.onMouseDown = this.onMouseDown),
                      (s.onTouchStart = this.onTouchStart))
                    : ((s.onClick = this.createTwoChains('onClick')),
                      (s.onMouseDown = this.createTwoChains('onMouseDown')),
                      (s.onTouchStart = this.createTwoChains('onTouchStart'))),
                  this.isMouseEnterToShow()
                    ? ((s.onMouseEnter = this.onMouseEnter),
                      a && (s.onMouseMove = this.onMouseMove))
                    : (s.onMouseEnter = this.createTwoChains('onMouseEnter')),
                  this.isMouseLeaveToHide()
                    ? (s.onMouseLeave = this.onMouseLeave)
                    : (s.onMouseLeave = this.createTwoChains('onMouseLeave')),
                  this.isFocusToShow() || this.isBlurToHide()
                    ? ((s.onFocus = this.onFocus), (s.onBlur = this.onBlur))
                    : ((s.onFocus = this.createTwoChains('onFocus')),
                      (s.onBlur = this.createTwoChains('onBlur')));
                var c = sc(u && u.props && u.props.className, i);
                c && (s.className = c);
                var f = fc({}, s);
                Wc(u) && (f.ref = Hc(this.triggerRef, u.ref));
                var d,
                  p = e.exports.cloneElement(u, f);
                return (
                  (t || this.popupRef.current || o) &&
                    (d = e.exports.createElement(
                      Kg,
                      {
                        key: 'portal',
                        getContainer: this.getContainer,
                        didUpdate: this.handlePortalUpdate,
                      },
                      this.getComponent(),
                    )),
                  !t && l && (d = null),
                  e.exports.createElement(Hg.Provider, { value: this.triggerContextValue }, p, d)
                );
              },
            },
          ],
          [
            {
              key: 'getDerivedStateFromProps',
              value: function (e, t) {
                var n = e.popupVisible,
                  r = {};
                return (
                  void 0 !== n &&
                    t.popupVisible !== n &&
                    ((r.popupVisible = n), (r.prevPopupVisible = t.popupVisible)),
                  r
                );
              },
            },
          ],
        ),
        r
      );
    })()).contextType = Hg),
    (Yg.defaultProps = {
      prefixCls: 'rc-trigger-popup',
      getPopupClassNameFromAlign: $g,
      getDocument: Bg,
      onPopupVisibleChange: Wg,
      afterPopupVisibleChange: Wg,
      onPopupAlign: Wg,
      popupClassName: '',
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0.1,
      focusDelay: 0,
      blurDelay: 0.15,
      popupStyle: {},
      destroyPopupOnHide: !1,
      popupAlign: {},
      defaultPopupVisible: !1,
      mask: !1,
      maskClosable: !0,
      action: [],
      showAction: [],
      hideAction: [],
      autoDestroy: !1,
    }),
    Yg),
  Xg = function () {
    return { height: 0, opacity: 0 };
  },
  Gg = function (e) {
    return { height: e.scrollHeight, opacity: 1 };
  },
  Zg = function (e, t) {
    return !0 === (null == t ? void 0 : t.deadline) || 'height' === t.propertyName;
  },
  Jg = {
    motionName: 'ant-motion-collapse',
    onAppearStart: Xg,
    onEnterStart: Xg,
    onAppearActive: Gg,
    onEnterActive: Gg,
    onLeaveStart: function (e) {
      return { height: e.offsetHeight };
    },
    onLeaveActive: Xg,
    onAppearEnd: Zg,
    onEnterEnd: Zg,
    onLeaveEnd: Zg,
    motionDeadline: 500,
  },
  ey = function (e, t, n) {
    return void 0 !== n ? n : ''.concat(e, '-').concat(t);
  },
  ty = e.exports.isValidElement;
function ny(t, n) {
  return (function (t, n, r) {
    return ty(t) ? e.exports.cloneElement(t, 'function' == typeof r ? r(t.props || {}) : r) : n;
  })(t, t, n);
}
var ry = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  oy = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)',
  },
  ay = new Map(),
  iy = -1,
  ly = {},
  uy = {
    matchHandlers: {},
    dispatch: function (e) {
      return (
        (ly = e),
        ay.forEach(function (e) {
          return e(ly);
        }),
        ay.size >= 1
      );
    },
    subscribe: function (e) {
      return ay.size || this.register(), (iy += 1), ay.set(iy, e), e(ly), iy;
    },
    unsubscribe: function (e) {
      ay.delete(e), ay.size || this.unregister();
    },
    unregister: function () {
      var e = this;
      Object.keys(oy).forEach(function (t) {
        var n = oy[t],
          r = e.matchHandlers[n];
        null == r || r.mql.removeListener(null == r ? void 0 : r.listener);
      }),
        ay.clear();
    },
    register: function () {
      var e = this;
      Object.keys(oy).forEach(function (t) {
        var n = oy[t],
          r = function (n) {
            var r = n.matches;
            e.dispatch(Qs(Qs({}, ly), Xs({}, t, r)));
          },
          o = window.matchMedia(n);
        o.addListener(r), (e.matchHandlers[n] = { mql: o, listener: r }), r(o);
      });
    },
  },
  sy = { adjustX: 1, adjustY: 1 },
  cy = [0, 0],
  fy = {
    left: { points: ['cr', 'cl'], overflow: sy, offset: [-4, 0], targetOffset: cy },
    right: { points: ['cl', 'cr'], overflow: sy, offset: [4, 0], targetOffset: cy },
    top: { points: ['bc', 'tc'], overflow: sy, offset: [0, -4], targetOffset: cy },
    bottom: { points: ['tc', 'bc'], overflow: sy, offset: [0, 4], targetOffset: cy },
    topLeft: { points: ['bl', 'tl'], overflow: sy, offset: [0, -4], targetOffset: cy },
    leftTop: { points: ['tr', 'tl'], overflow: sy, offset: [-4, 0], targetOffset: cy },
    topRight: { points: ['br', 'tr'], overflow: sy, offset: [0, -4], targetOffset: cy },
    rightTop: { points: ['tl', 'tr'], overflow: sy, offset: [4, 0], targetOffset: cy },
    bottomRight: { points: ['tr', 'br'], overflow: sy, offset: [0, 4], targetOffset: cy },
    rightBottom: { points: ['bl', 'br'], overflow: sy, offset: [4, 0], targetOffset: cy },
    bottomLeft: { points: ['tl', 'bl'], overflow: sy, offset: [0, 4], targetOffset: cy },
    leftBottom: { points: ['br', 'bl'], overflow: sy, offset: [-4, 0], targetOffset: cy },
  },
  dy = function (t) {
    var n = t.overlay,
      r = t.prefixCls,
      o = t.id,
      a = t.overlayInnerStyle;
    return e.exports.createElement(
      'div',
      { className: ''.concat(r, '-inner'), id: o, role: 'tooltip', style: a },
      'function' == typeof n ? n() : n,
    );
  },
  py = function (t, n) {
    var r = t.overlayClassName,
      o = t.trigger,
      a = void 0 === o ? ['hover'] : o,
      i = t.mouseEnterDelay,
      l = void 0 === i ? 0 : i,
      u = t.mouseLeaveDelay,
      s = void 0 === u ? 0.1 : u,
      c = t.overlayStyle,
      f = t.prefixCls,
      d = void 0 === f ? 'rc-tooltip' : f,
      p = t.children,
      m = t.onVisibleChange,
      h = t.afterVisibleChange,
      v = t.transitionName,
      g = t.animation,
      y = t.motion,
      b = t.placement,
      x = void 0 === b ? 'right' : b,
      w = t.align,
      E = void 0 === w ? {} : w,
      k = t.destroyTooltipOnHide,
      C = void 0 !== k && k,
      S = t.defaultVisible,
      P = t.getTooltipContainer,
      N = t.overlayInnerStyle,
      O = kp(t, [
        'overlayClassName',
        'trigger',
        'mouseEnterDelay',
        'mouseLeaveDelay',
        'overlayStyle',
        'prefixCls',
        'children',
        'onVisibleChange',
        'afterVisibleChange',
        'transitionName',
        'animation',
        'motion',
        'placement',
        'align',
        'destroyTooltipOnHide',
        'defaultVisible',
        'getTooltipContainer',
        'overlayInnerStyle',
      ]),
      T = e.exports.useRef(null);
    e.exports.useImperativeHandle(n, function () {
      return T.current;
    });
    var M = fc({}, O);
    'visible' in t && (M.popupVisible = t.visible);
    var _ = !1,
      R = !1;
    if ('boolean' == typeof C) _ = C;
    else if (C && 'object' === rc(C)) {
      var F = C.keepParent;
      (_ = !0 === F), (R = !1 === F);
    }
    return e.exports.createElement(
      Qg,
      Qs(
        {
          popupClassName: r,
          prefixCls: d,
          popup: function () {
            var n = t.arrowContent,
              r = void 0 === n ? null : n,
              o = t.overlay,
              a = t.id;
            return [
              e.exports.createElement(
                'div',
                { className: ''.concat(d, '-arrow'), key: 'arrow' },
                r,
              ),
              e.exports.createElement(dy, {
                key: 'content',
                prefixCls: d,
                id: a,
                overlay: o,
                overlayInnerStyle: N,
              }),
            ];
          },
          action: a,
          builtinPlacements: fy,
          popupPlacement: x,
          ref: T,
          popupAlign: E,
          getPopupContainer: P,
          onPopupVisibleChange: m,
          afterPopupVisibleChange: h,
          popupTransitionName: v,
          popupAnimation: g,
          popupMotion: y,
          defaultPopupVisible: S,
          destroyPopupOnHide: _,
          autoDestroy: R,
          mouseLeaveDelay: s,
          popupStyle: c,
          mouseEnterDelay: l,
        },
        M,
      ),
      p,
    );
  },
  my = e.exports.forwardRef(py),
  hy = { adjustX: 1, adjustY: 1 },
  vy = { adjustX: 0, adjustY: 0 },
  gy = [0, 0];
function yy(e) {
  return 'boolean' == typeof e ? (e ? hy : vy) : Qs(Qs({}, vy), e);
}
var by = function () {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return t;
};
by('success', 'processing', 'error', 'default', 'warning');
var xy = by(
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime',
  ),
  wy = new RegExp('^('.concat(xy.join('|'), ')(-inverse)?$'));
function Ey(t, n) {
  var r = t.type;
  if (
    (!0 === r.__ANT_BUTTON ||
      !0 === r.__ANT_SWITCH ||
      !0 === r.__ANT_CHECKBOX ||
      'button' === t.type) &&
    t.props.disabled
  ) {
    var o = (function (e, t) {
        var n = {},
          r = Qs({}, e);
        return (
          t.forEach(function (t) {
            e && t in e && ((n[t] = e[t]), delete r[t]);
          }),
          { picked: n, omitted: r }
        );
      })(t.props.style, [
        'position',
        'left',
        'right',
        'top',
        'bottom',
        'float',
        'display',
        'zIndex',
      ]),
      a = o.picked,
      i = o.omitted,
      l = Qs(Qs({ display: 'inline-block' }, a), {
        cursor: 'not-allowed',
        width: t.props.block ? '100%' : null,
      }),
      u = ny(t, { style: Qs(Qs({}, i), { pointerEvents: 'none' }), className: null });
    return e.exports.createElement(
      'span',
      { style: l, className: sc(t.props.className, ''.concat(n, '-disabled-compatible-wrapper')) },
      u,
    );
  }
  return t;
}
var ky = e.exports.forwardRef(function (t, n) {
  var r,
    o = e.exports.useContext(yp),
    a = o.getPopupContainer,
    i = o.getPrefixCls,
    l = o.direction,
    u = Cp(gv(!1, { value: t.visible, defaultValue: t.defaultVisible }), 2),
    s = u[0],
    c = u[1],
    f = function () {
      var e = t.title,
        n = t.overlay;
      return !e && !n && 0 !== e;
    },
    d = function () {
      var e = t.builtinPlacements,
        n = t.arrowPointAtCenter,
        r = t.autoAdjustOverflow;
      return (
        e ||
        (function (e) {
          var t = e.arrowWidth,
            n = void 0 === t ? 4 : t,
            r = e.horizontalArrowShift,
            o = void 0 === r ? 16 : r,
            a = e.verticalArrowShift,
            i = void 0 === a ? 8 : a,
            l = e.autoAdjustOverflow,
            u = {
              left: { points: ['cr', 'cl'], offset: [-4, 0] },
              right: { points: ['cl', 'cr'], offset: [4, 0] },
              top: { points: ['bc', 'tc'], offset: [0, -4] },
              bottom: { points: ['tc', 'bc'], offset: [0, 4] },
              topLeft: { points: ['bl', 'tc'], offset: [-(o + n), -4] },
              leftTop: { points: ['tr', 'cl'], offset: [-4, -(i + n)] },
              topRight: { points: ['br', 'tc'], offset: [o + n, -4] },
              rightTop: { points: ['tl', 'cr'], offset: [4, -(i + n)] },
              bottomRight: { points: ['tr', 'bc'], offset: [o + n, 4] },
              rightBottom: { points: ['bl', 'cr'], offset: [4, i + n] },
              bottomLeft: { points: ['tl', 'bc'], offset: [-(o + n), 4] },
              leftBottom: { points: ['br', 'cl'], offset: [-4, i + n] },
            };
          return (
            Object.keys(u).forEach(function (t) {
              (u[t] = e.arrowPointAtCenter
                ? Qs(Qs({}, u[t]), { overflow: yy(l), targetOffset: gy })
                : Qs(Qs({}, fy[t]), { overflow: yy(l) })),
                (u[t].ignoreShake = !0);
            }),
            u
          );
        })({ arrowPointAtCenter: n, autoAdjustOverflow: r })
      );
    },
    p = t.getPopupContainer,
    m = (function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      }
      return n;
    })(t, ['getPopupContainer']),
    h = t.prefixCls,
    v = t.openClassName,
    g = t.getTooltipContainer,
    y = t.overlayClassName,
    b = t.color,
    x = t.overlayInnerStyle,
    w = t.children,
    E = i('tooltip', h),
    k = i(),
    C = s;
  !('visible' in t) && f() && (C = !1);
  var S,
    P,
    N,
    O = Ey(ty(w) ? w : e.exports.createElement('span', null, w), E),
    T = O.props,
    M = sc(T.className, Xs({}, v || ''.concat(E, '-open'), !0)),
    _ = sc(
      y,
      (Xs((r = {}), ''.concat(E, '-rtl'), 'rtl' === l),
      Xs(r, ''.concat(E, '-').concat(b), b && wy.test(b)),
      r),
    ),
    R = x;
  return (
    b && !wy.test(b) && ((R = Qs(Qs({}, x), { background: b })), (S = { background: b })),
    e.exports.createElement(
      my,
      Qs({}, m, {
        prefixCls: E,
        overlayClassName: _,
        getTooltipContainer: p || g || a,
        ref: n,
        builtinPlacements: d(),
        overlay: ((P = t.title), (N = t.overlay), 0 === P ? P : N || P || ''),
        visible: C,
        onVisibleChange: function (e) {
          var n;
          c(!f() && e), f() || null === (n = t.onVisibleChange) || void 0 === n || n.call(t, e);
        },
        onPopupAlign: function (e, t) {
          var n = d(),
            r = Object.keys(n).filter(function (e) {
              return n[e].points[0] === t.points[0] && n[e].points[1] === t.points[1];
            })[0];
          if (r) {
            var o = e.getBoundingClientRect(),
              a = { top: '50%', left: '50%' };
            r.indexOf('top') >= 0 || r.indexOf('Bottom') >= 0
              ? (a.top = ''.concat(o.height - t.offset[1], 'px'))
              : (r.indexOf('Top') >= 0 || r.indexOf('bottom') >= 0) &&
                (a.top = ''.concat(-t.offset[1], 'px')),
              r.indexOf('left') >= 0 || r.indexOf('Right') >= 0
                ? (a.left = ''.concat(o.width - t.offset[0], 'px'))
                : (r.indexOf('right') >= 0 || r.indexOf('Left') >= 0) &&
                  (a.left = ''.concat(-t.offset[0], 'px')),
              (e.style.transformOrigin = ''.concat(a.left, ' ').concat(a.top));
          }
        },
        overlayInnerStyle: R,
        arrowContent: e.exports.createElement('span', {
          className: ''.concat(E, '-arrow-content'),
          style: S,
        }),
        motion: { motionName: ey(k, 'zoom-big-fast', t.transitionName), motionDeadline: 1e3 },
      }),
      C ? ny(O, { className: M }) : O,
    )
  );
});
(ky.displayName = 'Tooltip'),
  (ky.defaultProps = {
    placement: 'top',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: !1,
    autoAdjustOverflow: !0,
  });
var Cy = ky,
  Sy = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z',
          },
        },
      ],
    },
    name: 'right',
    theme: 'outlined',
  },
  Py = function (t, n) {
    return e.exports.createElement(Zm, Object.assign({}, t, { ref: n, icon: Sy }));
  };
Py.displayName = 'RightOutlined';
var Ny = e.exports.forwardRef(Py),
  Oy = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z',
          },
        },
      ],
    },
    name: 'ellipsis',
    theme: 'outlined',
  },
  Ty = function (t, n) {
    return e.exports.createElement(Zm, Object.assign({}, t, { ref: n, icon: Oy }));
  };
Ty.displayName = 'EllipsisOutlined';
var My,
  _y = e.exports.forwardRef(Ty),
  Ry = function e(t) {
    return Gs(this, e), new Error('unreachable case: '.concat(JSON.stringify(t)));
  },
  Fy = function (t) {
    return e.exports.createElement(bp, null, function (n) {
      var r,
        o = n.getPrefixCls,
        a = n.direction,
        i = t.prefixCls,
        l = t.size,
        u = t.className,
        s = (function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        })(t, ['prefixCls', 'size', 'className']),
        c = o('btn-group', i),
        f = '';
      switch (l) {
        case 'large':
          f = 'lg';
          break;
        case 'small':
          f = 'sm';
          break;
        case 'middle':
        case void 0:
          break;
        default:
          console.warn(new Ry(l));
      }
      var d = sc(
        c,
        (Xs((r = {}), ''.concat(c, '-').concat(f), f), Xs(r, ''.concat(c, '-rtl'), 'rtl' === a), r),
        u,
      );
      return e.exports.createElement('div', Qs({}, s, { className: d }));
    });
  },
  Ly = 0,
  Ay = {};
function Iy(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    n = Ly++,
    r = t;
  function o() {
    (r -= 1) <= 0 ? (e(), delete Ay[n]) : (Ay[n] = Yp(o));
  }
  return (Ay[n] = Yp(o)), n;
}
function jy(e) {
  return !e || null === e.offsetParent || e.hidden;
}
function zy(e) {
  var t = (e || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return !(t && t[1] && t[2] && t[3]) || !(t[1] === t[2] && t[2] === t[3]);
}
(Iy.cancel = function (e) {
  void 0 !== e && (Yp.cancel(Ay[e]), delete Ay[e]);
}),
  (Iy.ids = Ay);
var Dy = (function (t) {
  tc(r, e.exports.Component);
  var n = ic(r);
  function r() {
    var t;
    return (
      Gs(this, r),
      ((t = n.apply(this, arguments)).containerRef = e.exports.createRef()),
      (t.animationStart = !1),
      (t.destroyed = !1),
      (t.onClick = function (e, n) {
        var r, o;
        if (!(!e || jy(e) || e.className.indexOf('-leave') >= 0)) {
          var a = t.props.insertExtraNode;
          t.extraNode = document.createElement('div');
          var i = oc(t).extraNode,
            l = t.context.getPrefixCls;
          i.className = ''.concat(l(''), '-click-animating-node');
          var u = t.getAttributeName();
          if (
            (e.setAttribute(u, 'true'),
            n &&
              '#ffffff' !== n &&
              'rgb(255, 255, 255)' !== n &&
              zy(n) &&
              !/rgba\((?:\d*, ){3}0\)/.test(n) &&
              'transparent' !== n)
          ) {
            i.style.borderColor = n;
            var s =
                (null === (r = e.getRootNode) || void 0 === r ? void 0 : r.call(e)) ||
                e.ownerDocument,
              c =
                s instanceof Document
                  ? s.body
                  : null !== (o = s.firstChild) && void 0 !== o
                  ? o
                  : s;
            My = Vm(
              '\n      ['
                .concat(l(''), "-click-animating-without-extra-node='true']::after, .")
                .concat(l(''), '-click-animating-node {\n        --antd-wave-shadow-color: ')
                .concat(n, ';\n      }'),
              'antd-wave',
              { csp: t.csp, attachTo: c },
            );
          }
          a && e.appendChild(i),
            ['transition', 'animation'].forEach(function (n) {
              e.addEventListener(''.concat(n, 'start'), t.onTransitionStart),
                e.addEventListener(''.concat(n, 'end'), t.onTransitionEnd);
            });
        }
      }),
      (t.onTransitionStart = function (e) {
        if (!t.destroyed) {
          var n = t.containerRef.current;
          e && e.target === n && !t.animationStart && t.resetEffect(n);
        }
      }),
      (t.onTransitionEnd = function (e) {
        e && 'fadeEffect' === e.animationName && t.resetEffect(e.target);
      }),
      (t.bindAnimationEvent = function (e) {
        if (
          e &&
          e.getAttribute &&
          !e.getAttribute('disabled') &&
          !(e.className.indexOf('disabled') >= 0)
        ) {
          var n = function (n) {
            if ('INPUT' !== n.target.tagName && !jy(n.target)) {
              t.resetEffect(e);
              var r =
                getComputedStyle(e).getPropertyValue('border-top-color') ||
                getComputedStyle(e).getPropertyValue('border-color') ||
                getComputedStyle(e).getPropertyValue('background-color');
              (t.clickWaveTimeoutId = window.setTimeout(function () {
                return t.onClick(e, r);
              }, 0)),
                Iy.cancel(t.animationStartId),
                (t.animationStart = !0),
                (t.animationStartId = Iy(function () {
                  t.animationStart = !1;
                }, 10));
            }
          };
          return (
            e.addEventListener('click', n, !0),
            {
              cancel: function () {
                e.removeEventListener('click', n, !0);
              },
            }
          );
        }
      }),
      (t.renderWave = function (n) {
        var r = n.csp,
          o = t.props.children;
        if (((t.csp = r), !e.exports.isValidElement(o))) return o;
        var a = t.containerRef;
        return Wc(o) && (a = Hc(o.ref, t.containerRef)), ny(o, { ref: a });
      }),
      t
    );
  }
  return (
    Js(r, [
      {
        key: 'componentDidMount',
        value: function () {
          var e = this.containerRef.current;
          e && 1 === e.nodeType && (this.instance = this.bindAnimationEvent(e));
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.instance && this.instance.cancel(),
            this.clickWaveTimeoutId && clearTimeout(this.clickWaveTimeoutId),
            (this.destroyed = !0);
        },
      },
      {
        key: 'getAttributeName',
        value: function () {
          var e = this.context.getPrefixCls,
            t = this.props.insertExtraNode;
          return ''.concat(e(''), t ? '-click-animating' : '-click-animating-without-extra-node');
        },
      },
      {
        key: 'resetEffect',
        value: function (e) {
          var t = this;
          if (e && e !== this.extraNode && e instanceof Element) {
            var n = this.props.insertExtraNode,
              r = this.getAttributeName();
            e.setAttribute(r, 'false'),
              My && (My.innerHTML = ''),
              n && this.extraNode && e.contains(this.extraNode) && e.removeChild(this.extraNode),
              ['transition', 'animation'].forEach(function (n) {
                e.removeEventListener(''.concat(n, 'start'), t.onTransitionStart),
                  e.removeEventListener(''.concat(n, 'end'), t.onTransitionEnd);
              });
          }
        },
      },
      {
        key: 'render',
        value: function () {
          return e.exports.createElement(bp, null, this.renderWave);
        },
      },
    ]),
    r
  );
})();
Dy.contextType = yp;
var Vy = function () {
    return { width: 0, opacity: 0, transform: 'scale(0)' };
  },
  Uy = function (e) {
    return { width: e.scrollWidth, opacity: 1, transform: 'scale(1)' };
  },
  Hy = function (e) {
    var t = e.prefixCls,
      n = !!e.loading;
    return e.existIcon
      ? j.createElement(
          'span',
          { className: ''.concat(t, '-loading-icon') },
          j.createElement(eh, null),
        )
      : j.createElement(
          em,
          {
            visible: n,
            motionName: ''.concat(t, '-loading-icon-motion'),
            removeOnLeave: !0,
            onAppearStart: Vy,
            onAppearActive: Uy,
            onEnterStart: Vy,
            onEnterActive: Uy,
            onLeaveStart: Uy,
            onLeaveActive: Vy,
          },
          function (e, n) {
            var r = e.className,
              o = e.style;
            return j.createElement(
              'span',
              { className: ''.concat(t, '-loading-icon'), style: o, ref: n },
              j.createElement(eh, { className: r }),
            );
          },
        );
  },
  Wy = /^[\u4e00-\u9fa5]{2}$/,
  $y = Wy.test.bind(Wy);
function By(e) {
  return 'text' === e || 'link' === e;
}
function qy(t, n) {
  if (null != t) {
    var r,
      o = n ? ' ' : '';
    return 'string' != typeof t &&
      'number' != typeof t &&
      'string' == typeof t.type &&
      $y(t.props.children)
      ? ny(t, { children: t.props.children.split('').join(o) })
      : 'string' == typeof t
      ? $y(t)
        ? e.exports.createElement('span', null, t.split('').join(o))
        : e.exports.createElement('span', null, t)
      : ((r = t),
        e.exports.isValidElement(r) && r.type === e.exports.Fragment
          ? e.exports.createElement('span', null, t)
          : t);
  }
}
function Ky(e) {
  return 'danger' === e ? { danger: !0 } : { type: e };
}
by('default', 'primary', 'ghost', 'dashed', 'link', 'text'),
  by('circle', 'round'),
  by('submit', 'button', 'reset');
var Yy = function (t, n) {
    var r,
      o,
      a = t.loading,
      i = void 0 !== a && a,
      l = t.prefixCls,
      u = t.type,
      s = t.danger,
      c = t.shape,
      f = t.size,
      d = t.className,
      p = t.children,
      m = t.icon,
      h = t.ghost,
      v = void 0 !== h && h,
      g = t.block,
      y = void 0 !== g && g,
      b = t.htmlType,
      x = void 0 === b ? 'button' : b,
      w = (function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      })(t, [
        'loading',
        'prefixCls',
        'type',
        'danger',
        'shape',
        'size',
        'className',
        'children',
        'icon',
        'ghost',
        'block',
        'htmlType',
      ]),
      E = e.exports.useContext(Ep),
      k = Cp(e.exports.useState(!!i), 2),
      C = k[0],
      S = k[1],
      P = Cp(e.exports.useState(!1), 2),
      N = P[0],
      O = P[1],
      T = e.exports.useContext(yp),
      M = T.getPrefixCls,
      _ = T.autoInsertSpaceInButton,
      R = T.direction,
      F = n || e.exports.createRef(),
      L = e.exports.useRef(),
      A = function () {
        return 1 === e.exports.Children.count(p) && !m && !By(u);
      };
    (o = 'object' === rc(i) && i.delay ? i.delay || !0 : !!i),
      e.exports.useEffect(
        function () {
          clearTimeout(L.current),
            'number' == typeof o
              ? (L.current = window.setTimeout(function () {
                  S(o);
                }, o))
              : S(o);
        },
        [o],
      ),
      e.exports.useEffect(
        function () {
          if (F && F.current && !1 !== _) {
            var e = F.current.textContent;
            A() && $y(e) ? N || O(!0) : N && O(!1);
          }
        },
        [F],
      );
    var I = function (e) {
      var n,
        r = t.onClick,
        o = t.disabled;
      C || o ? e.preventDefault() : null === (n = r) || void 0 === n || n(e);
    };
    ep(
      !('string' == typeof m && m.length > 2),
      'Button',
      '`icon` is using ReactNode instead of string naming in v4. Please check `'.concat(
        m,
        '` at https://ant.design/components/icon',
      ),
    ),
      ep(!(v && By(u)), 'Button', "`link` or `text` button can't be a `ghost` button.");
    var j = M('btn', l),
      z = !1 !== _,
      D = '';
    switch (f || E) {
      case 'large':
        D = 'lg';
        break;
      case 'small':
        D = 'sm';
    }
    var V = C ? 'loading' : m,
      U = sc(
        j,
        (Xs((r = {}), ''.concat(j, '-').concat(u), u),
        Xs(r, ''.concat(j, '-').concat(c), c),
        Xs(r, ''.concat(j, '-').concat(D), D),
        Xs(r, ''.concat(j, '-icon-only'), !p && 0 !== p && !!V),
        Xs(r, ''.concat(j, '-background-ghost'), v && !By(u)),
        Xs(r, ''.concat(j, '-loading'), C),
        Xs(r, ''.concat(j, '-two-chinese-chars'), N && z),
        Xs(r, ''.concat(j, '-block'), y),
        Xs(r, ''.concat(j, '-dangerous'), !!s),
        Xs(r, ''.concat(j, '-rtl'), 'rtl' === R),
        r),
        d,
      ),
      H = m && !C ? m : e.exports.createElement(Hy, { existIcon: !!m, prefixCls: j, loading: !!C }),
      W =
        p || 0 === p
          ? (function (t, n) {
              var r = !1,
                o = [];
              return (
                e.exports.Children.forEach(t, function (e) {
                  var t = rc(e),
                    n = 'string' === t || 'number' === t;
                  if (r && n) {
                    var a = o.length - 1,
                      i = o[a];
                    o[a] = ''.concat(i).concat(e);
                  } else o.push(e);
                  r = n;
                }),
                e.exports.Children.map(o, function (e) {
                  return qy(e, n);
                })
              );
            })(p, A() && z)
          : null,
      $ = dc(w, ['navigate']);
    if (void 0 !== $.href)
      return e.exports.createElement('a', Qs({}, $, { className: U, onClick: I, ref: F }), H, W);
    var B = e.exports.createElement(
      'button',
      Qs({}, w, { type: x, className: U, onClick: I, ref: F }),
      H,
      W,
    );
    return By(u) ? B : e.exports.createElement(Dy, null, B);
  },
  Qy = e.exports.forwardRef(Yy);
(Qy.displayName = 'Button'), (Qy.Group = Fy), (Qy.__ANT_BUTTON = !0);
var Xy = Qy,
  Gy = function (e, t, n, r) {
    var o = n ? n.call(r, e, t) : void 0;
    if (void 0 !== o) return !!o;
    if (e === t) return !0;
    if ('object' != typeof e || !e || 'object' != typeof t || !t) return !1;
    var a = Object.keys(e),
      i = Object.keys(t);
    if (a.length !== i.length) return !1;
    for (var l = Object.prototype.hasOwnProperty.bind(t), u = 0; u < a.length; u++) {
      var s = a[u];
      if (!l(s)) return !1;
      var c = e[s],
        f = t[s];
      if (!1 === (o = n ? n.call(r, c, f, s) : void 0) || (void 0 === o && c !== f)) return !1;
    }
    return !0;
  },
  Zy = e.exports.createContext(null);
function Jy(t) {
  var n = t.children,
    r = t.locked,
    o = kp(t, ['children', 'locked']),
    a = e.exports.useContext(Zy),
    i = Jd(
      function () {
        return (
          (e = o),
          (t = fc({}, a)),
          Object.keys(e).forEach(function (n) {
            var r = e[n];
            void 0 !== r && (t[n] = r);
          }),
          t
        );
        var e, t;
      },
      [a, o],
      function (e, t) {
        return !(r || (e[0] === t[0] && Gy(e[1], t[1])));
      },
    );
  return e.exports.createElement(Zy.Provider, { value: i }, n);
}
function eb(t, n, r, o) {
  var a = e.exports.useContext(Zy),
    i = a.activeKey,
    l = a.onActive,
    u = a.onInactive,
    s = { active: i === t };
  return (
    n ||
      ((s.onMouseEnter = function (e) {
        null == r || r({ key: t, domEvent: e }), l(t);
      }),
      (s.onMouseLeave = function (e) {
        null == o || o({ key: t, domEvent: e }), u(t);
      })),
    s
  );
}
function tb(e) {
  var t = e.item,
    n = kp(e, ['item']);
  return (
    Object.defineProperty(n, 'item', {
      get: function () {
        return (
          Vc(
            !1,
            '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.',
          ),
          t
        );
      },
    }),
    n
  );
}
function nb(t) {
  var n = t.icon,
    r = t.props,
    o = t.children;
  return ('function' == typeof n ? e.exports.createElement(n, fc({}, r)) : n) || o || null;
}
function rb(t) {
  var n = e.exports.useContext(Zy),
    r = n.mode,
    o = n.rtl,
    a = n.inlineIndent;
  if ('inline' !== r) return null;
  return o ? { paddingRight: t * a } : { paddingLeft: t * a };
}
var ob = [],
  ab = e.exports.createContext(null);
function ib() {
  return e.exports.useContext(ab);
}
var lb = e.exports.createContext(ob);
function ub(t) {
  var n = e.exports.useContext(lb);
  return e.exports.useMemo(
    function () {
      return void 0 !== t ? [].concat(hd(n), [t]) : n;
    },
    [n, t],
  );
}
var sb = e.exports.createContext(null),
  cb = e.exports.createContext(null);
function fb(e, t) {
  return void 0 === e ? null : ''.concat(e, '-').concat(t);
}
function db(t) {
  return fb(e.exports.useContext(cb), t);
}
var pb = (function (t) {
    tc(r, e.exports.Component);
    var n = ic(r);
    function r() {
      return Gs(this, r), n.apply(this, arguments);
    }
    return (
      Js(r, [
        {
          key: 'render',
          value: function () {
            var t = this.props,
              n = t.title,
              r = t.attribute,
              o = t.elementRef,
              a = dc(kp(t, ['title', 'attribute', 'elementRef']), ['eventKey']);
            return (
              Vc(!r, '`attribute` of Menu.Item is deprecated. Please pass attribute directly.'),
              e.exports.createElement(
                Sv.Item,
                Qs({}, r, { title: 'string' == typeof n ? n : void 0 }, a, { ref: o }),
              )
            );
          },
        },
      ]),
      r
    );
  })(),
  mb = function (t) {
    var n,
      r = t.style,
      o = t.className,
      a = t.eventKey;
    t.warnKey;
    var i = t.disabled,
      l = t.itemIcon,
      u = t.children,
      s = t.role,
      c = t.onMouseEnter,
      f = t.onMouseLeave,
      d = t.onClick,
      p = t.onKeyDown,
      m = t.onFocus,
      h = kp(t, [
        'style',
        'className',
        'eventKey',
        'warnKey',
        'disabled',
        'itemIcon',
        'children',
        'role',
        'onMouseEnter',
        'onMouseLeave',
        'onClick',
        'onKeyDown',
        'onFocus',
      ]),
      v = db(a),
      g = e.exports.useContext(Zy),
      y = g.prefixCls,
      b = g.onItemClick,
      x = g.disabled,
      w = g.overflowDisabled,
      E = g.itemIcon,
      k = g.selectedKeys,
      C = g.onActive,
      S = ''.concat(y, '-item'),
      P = e.exports.useRef(),
      N = e.exports.useRef(),
      O = x || i,
      T = ub(a),
      M = function (e) {
        return { key: a, keyPath: hd(T).reverse(), item: P.current, domEvent: e };
      },
      _ = l || E,
      R = eb(a, O, c, f),
      F = R.active,
      L = kp(R, ['active']),
      A = k.includes(a),
      I = rb(T.length),
      j = {};
    return (
      'option' === t.role && (j['aria-selected'] = A),
      e.exports.createElement(
        pb,
        Qs(
          {
            ref: P,
            elementRef: N,
            role: null === s ? 'none' : s || 'menuitem',
            tabIndex: i ? null : -1,
            'data-menu-id': w && v ? null : v,
          },
          h,
          L,
          j,
          {
            component: 'li',
            'aria-disabled': i,
            style: fc(fc({}, I), r),
            className: sc(
              S,
              ((n = {}),
              Xs(n, ''.concat(S, '-active'), F),
              Xs(n, ''.concat(S, '-selected'), A),
              Xs(n, ''.concat(S, '-disabled'), O),
              n),
              o,
            ),
            onClick: function (e) {
              if (!O) {
                var t = M(e);
                null == d || d(tb(t)), b(t);
              }
            },
            onKeyDown: function (e) {
              if ((null == p || p(e), e.which === mv.ENTER)) {
                var t = M(e);
                null == d || d(tb(t)), b(t);
              }
            },
            onFocus: function (e) {
              C(a), null == m || m(e);
            },
          },
        ),
        u,
        e.exports.createElement(nb, { props: fc(fc({}, t), {}, { isSelected: A }), icon: _ }),
      )
    );
  };
function hb(t) {
  var n = t.eventKey,
    r = ib(),
    o = ub(n);
  return (
    e.exports.useEffect(
      function () {
        if (r)
          return (
            r.registerPath(n, o),
            function () {
              r.unregisterPath(n, o);
            }
          );
      },
      [o],
    ),
    r ? null : e.exports.createElement(mb, t)
  );
}
function vb(t, n) {
  return jc(t).map(function (t, r) {
    if (e.exports.isValidElement(t)) {
      var o,
        a,
        i = t.key,
        l =
          null !== (o = null === (a = t.props) || void 0 === a ? void 0 : a.eventKey) &&
          void 0 !== o
            ? o
            : i;
      null == l && (l = 'tmp_key-'.concat([].concat(hd(n), [r]).join('-')));
      var u = { key: l, eventKey: l };
      return e.exports.cloneElement(t, u);
    }
    return t;
  });
}
function gb(t) {
  var n = e.exports.useRef(t);
  n.current = t;
  var r = e.exports.useCallback(function () {
    for (var e, t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
    return null === (e = n.current) || void 0 === e ? void 0 : e.call.apply(e, [n].concat(r));
  }, []);
  return t ? r : void 0;
}
var yb = function (t, n) {
    var r = t.className,
      o = t.children,
      a = kp(t, ['className', 'children']),
      i = e.exports.useContext(Zy),
      l = i.prefixCls,
      u = i.mode;
    return e.exports.createElement(
      'ul',
      Qs(
        {
          className: sc(
            l,
            ''.concat(l, '-sub'),
            ''.concat(l, '-').concat('inline' === u ? 'inline' : 'vertical'),
            r,
          ),
        },
        a,
        { 'data-menu-list': !0, ref: n },
      ),
      o,
    );
  },
  bb = e.exports.forwardRef(yb);
bb.displayName = 'SubMenuList';
var xb = { adjustX: 1, adjustY: 1 },
  wb = {
    topLeft: { points: ['bl', 'tl'], overflow: xb, offset: [0, -7] },
    bottomLeft: { points: ['tl', 'bl'], overflow: xb, offset: [0, 7] },
    leftTop: { points: ['tr', 'tl'], overflow: xb, offset: [-4, 0] },
    rightTop: { points: ['tl', 'tr'], overflow: xb, offset: [4, 0] },
  },
  Eb = {
    topLeft: { points: ['bl', 'tl'], overflow: xb, offset: [0, -7] },
    bottomLeft: { points: ['tl', 'bl'], overflow: xb, offset: [0, 7] },
    rightTop: { points: ['tr', 'tl'], overflow: xb, offset: [-4, 0] },
    leftTop: { points: ['tl', 'tr'], overflow: xb, offset: [4, 0] },
  };
function kb(e, t, n) {
  return t || (n ? n[e] || n.other : void 0);
}
var Cb = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop',
};
function Sb(t) {
  var n = t.prefixCls,
    r = t.visible,
    o = t.children,
    a = t.popup,
    i = t.popupClassName,
    l = t.popupOffset,
    u = t.disabled,
    s = t.mode,
    c = t.onVisibleChange,
    f = e.exports.useContext(Zy),
    d = f.getPopupContainer,
    p = f.rtl,
    m = f.subMenuOpenDelay,
    h = f.subMenuCloseDelay,
    v = f.builtinPlacements,
    g = f.triggerSubMenuAction,
    y = f.forceSubMenuRender,
    b = f.motion,
    x = f.defaultMotions,
    w = Cp(e.exports.useState(!1), 2),
    E = w[0],
    k = w[1],
    C = fc(fc({}, p ? Eb : wb), v),
    S = Cb[s],
    P = fc(
      fc({}, kb(s, b, x)),
      {},
      { leavedClassName: ''.concat(n, '-hidden'), removeOnLeave: !1, motionAppear: !0 },
    ),
    N = e.exports.useRef();
  return (
    e.exports.useEffect(
      function () {
        return (
          (N.current = Yp(function () {
            k(r);
          })),
          function () {
            Yp.cancel(N.current);
          }
        );
      },
      [r],
    ),
    e.exports.createElement(
      Qg,
      {
        prefixCls: n,
        popupClassName: sc(''.concat(n, '-popup'), Xs({}, ''.concat(n, '-rtl'), p), i),
        stretch: 'horizontal' === s ? 'minWidth' : null,
        getPopupContainer: d,
        builtinPlacements: C,
        popupPlacement: S,
        popupVisible: E,
        popup: a,
        popupAlign: l && { offset: l },
        action: u ? [] : [g],
        mouseEnterDelay: m,
        mouseLeaveDelay: h,
        onPopupVisibleChange: c,
        forceRender: y,
        popupMotion: P,
      },
      o,
    )
  );
}
function Pb(t) {
  var n = t.id,
    r = t.open,
    o = t.keyPath,
    a = t.children,
    i = 'inline',
    l = e.exports.useContext(Zy),
    u = l.prefixCls,
    s = l.forceSubMenuRender,
    c = l.motion,
    f = l.defaultMotions,
    d = l.mode,
    p = e.exports.useRef(!1);
  p.current = d === i;
  var m = Cp(e.exports.useState(!p.current), 2),
    h = m[0],
    v = m[1],
    g = !!p.current && r;
  e.exports.useEffect(
    function () {
      p.current && v(!1);
    },
    [d],
  );
  var y = fc({}, kb(i, c, f));
  o.length > 1 && (y.motionAppear = !1);
  var b = y.onVisibleChanged;
  return (
    (y.onVisibleChanged = function (e) {
      return p.current || e || v(!0), null == b ? void 0 : b(e);
    }),
    h
      ? null
      : e.exports.createElement(
          Jy,
          { mode: i, locked: !p.current },
          e.exports.createElement(
            em,
            Qs({ visible: g }, y, {
              forceRender: s,
              removeOnLeave: !1,
              leavedClassName: ''.concat(u, '-hidden'),
            }),
            function (t) {
              var r = t.className,
                o = t.style;
              return e.exports.createElement(bb, { id: n, className: r, style: o }, a);
            },
          ),
        )
  );
}
var Nb = function (t) {
  var n,
    r = t.style,
    o = t.className,
    a = t.title,
    i = t.eventKey;
  t.warnKey;
  var l = t.disabled,
    u = t.internalPopupClose,
    s = t.children,
    c = t.itemIcon,
    f = t.expandIcon,
    d = t.popupClassName,
    p = t.popupOffset,
    m = t.onClick,
    h = t.onMouseEnter,
    v = t.onMouseLeave,
    g = t.onTitleClick,
    y = t.onTitleMouseEnter,
    b = t.onTitleMouseLeave,
    x = kp(t, [
      'style',
      'className',
      'title',
      'eventKey',
      'warnKey',
      'disabled',
      'internalPopupClose',
      'children',
      'itemIcon',
      'expandIcon',
      'popupClassName',
      'popupOffset',
      'onClick',
      'onMouseEnter',
      'onMouseLeave',
      'onTitleClick',
      'onTitleMouseEnter',
      'onTitleMouseLeave',
    ]),
    w = db(i),
    E = e.exports.useContext(Zy),
    k = E.prefixCls,
    C = E.mode,
    S = E.openKeys,
    P = E.disabled,
    N = E.overflowDisabled,
    O = E.activeKey,
    T = E.selectedKeys,
    M = E.itemIcon,
    _ = E.expandIcon,
    R = E.onItemClick,
    F = E.onOpenChange,
    L = E.onActive,
    A = e.exports.useContext(sb).isSubPathKey,
    I = ub(),
    j = ''.concat(k, '-submenu'),
    z = P || l,
    D = e.exports.useRef(),
    V = e.exports.useRef(),
    U = c || M,
    H = f || _,
    W = S.includes(i),
    $ = !N && W,
    B = A(T, i),
    q = eb(i, z, y, b),
    K = q.active,
    Y = kp(q, ['active']),
    Q = Cp(e.exports.useState(!1), 2),
    X = Q[0],
    G = Q[1],
    Z = function (e) {
      z || G(e);
    },
    J = e.exports.useMemo(
      function () {
        return K || ('inline' !== C && (X || A([O], i)));
      },
      [C, K, O, X, i, A],
    ),
    ee = rb(I.length),
    te = gb(function (e) {
      null == m || m(tb(e)), R(e);
    }),
    ne = w && ''.concat(w, '-popup'),
    re = e.exports.createElement(
      'div',
      Qs(
        {
          role: 'menuitem',
          style: ee,
          className: ''.concat(j, '-title'),
          tabIndex: z ? null : -1,
          ref: D,
          title: 'string' == typeof a ? a : null,
          'data-menu-id': N && w ? null : w,
          'aria-expanded': $,
          'aria-haspopup': !0,
          'aria-controls': ne,
          'aria-disabled': z,
          onClick: function (e) {
            z || (null == g || g({ key: i, domEvent: e }), 'inline' === C && F(i, !W));
          },
          onFocus: function () {
            L(i);
          },
        },
        Y,
      ),
      a,
      e.exports.createElement(
        nb,
        {
          icon: 'horizontal' !== C ? H : null,
          props: fc(fc({}, t), {}, { isOpen: $, isSubMenu: !0 }),
        },
        e.exports.createElement('i', { className: ''.concat(j, '-arrow') }),
      ),
    ),
    oe = e.exports.useRef(C);
  if (('inline' !== C && (oe.current = I.length > 1 ? 'vertical' : C), !N)) {
    var ae = oe.current;
    re = e.exports.createElement(
      Sb,
      {
        mode: ae,
        prefixCls: j,
        visible: !u && $ && 'inline' !== C,
        popupClassName: d,
        popupOffset: p,
        popup: e.exports.createElement(
          Jy,
          { mode: 'horizontal' === ae ? 'vertical' : ae },
          e.exports.createElement(bb, { id: ne, ref: V }, s),
        ),
        disabled: z,
        onVisibleChange: function (e) {
          'inline' !== C && F(i, e);
        },
      },
      re,
    );
  }
  return e.exports.createElement(
    Jy,
    { onItemClick: te, mode: 'horizontal' === C ? 'vertical' : C, itemIcon: U, expandIcon: H },
    e.exports.createElement(
      Sv.Item,
      Qs({ role: 'none' }, x, {
        component: 'li',
        style: r,
        className: sc(
          j,
          ''.concat(j, '-').concat(C),
          o,
          ((n = {}),
          Xs(n, ''.concat(j, '-open'), $),
          Xs(n, ''.concat(j, '-active'), J),
          Xs(n, ''.concat(j, '-selected'), B),
          Xs(n, ''.concat(j, '-disabled'), z),
          n),
        ),
        onMouseEnter: function (e) {
          Z(!0), null == h || h({ key: i, domEvent: e });
        },
        onMouseLeave: function (e) {
          Z(!1), null == v || v({ key: i, domEvent: e });
        },
      }),
      re,
      !N && e.exports.createElement(Pb, { id: ne, open: $, keyPath: I }, s),
    ),
  );
};
function Ob(t) {
  var n,
    r = t.eventKey,
    o = t.children,
    a = ub(r),
    i = vb(o, a),
    l = ib();
  return (
    e.exports.useEffect(
      function () {
        if (l)
          return (
            l.registerPath(r, a),
            function () {
              l.unregisterPath(r, a);
            }
          );
      },
      [a],
    ),
    (n = l ? i : e.exports.createElement(Nb, t, i)),
    e.exports.createElement(lb.Provider, { value: a }, n)
  );
}
function Tb(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (Rv(e)) {
    var n = e.nodeName.toLowerCase(),
      r =
        ['input', 'select', 'textarea', 'button'].includes(n) ||
        e.isContentEditable ||
        ('a' === n && !!e.getAttribute('href')),
      o = e.getAttribute('tabindex'),
      a = Number(o),
      i = null;
    return (
      o && !Number.isNaN(a) ? (i = a) : r && null === i && (i = 0),
      r && e.disabled && (i = null),
      null !== i && (i >= 0 || (t && i < 0))
    );
  }
  return !1;
}
var Mb = mv.LEFT,
  _b = mv.RIGHT,
  Rb = mv.UP,
  Fb = mv.DOWN,
  Lb = mv.ENTER,
  Ab = mv.ESC,
  Ib = [Rb, Fb, Mb, _b];
function jb(e, t) {
  return (function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = hd(e.querySelectorAll('*')).filter(function (e) {
        return Tb(e, t);
      });
    return Tb(e, t) && n.unshift(e), n;
  })(e, !0).filter(function (e) {
    return t.has(e);
  });
}
function zb(e, t, n) {
  var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
  if (!e) return null;
  var o = jb(e, t),
    a = o.length,
    i = o.findIndex(function (e) {
      return n === e;
    });
  return r < 0 ? (-1 === i ? (i = a - 1) : (i -= 1)) : r > 0 && (i += 1), o[(i = (i + a) % a)];
}
function Db(t, n, r, o, a, i, l, u, s, c) {
  var f = e.exports.useRef(),
    d = e.exports.useRef();
  d.current = n;
  var p = function () {
    Yp.cancel(f.current);
  };
  return (
    e.exports.useEffect(function () {
      return function () {
        p();
      };
    }, []),
    function (e) {
      var m = e.which;
      if ([].concat(Ib, [Lb, Ab]).includes(m)) {
        var h,
          v,
          g,
          y = function () {
            return (
              (h = new Set()),
              (v = new Map()),
              (g = new Map()),
              i().forEach(function (e) {
                var t = document.querySelector("[data-menu-id='".concat(fb(o, e), "']"));
                t && (h.add(t), g.set(t, e), v.set(e, t));
              }),
              h
            );
          };
        y();
        var b = (function (e, t) {
            for (var n = e || document.activeElement; n; ) {
              if (t.has(n)) return n;
              n = n.parentElement;
            }
            return null;
          })(v.get(n), h),
          x = g.get(b),
          w = (function (e, t, n, r) {
            var o,
              a,
              i,
              l,
              u = 'prev',
              s = 'next',
              c = 'children',
              f = 'parent';
            if ('inline' === e && r === Lb) return { inlineTrigger: !0 };
            var d = (Xs((o = {}), Rb, u), Xs(o, Fb, s), o),
              p =
                (Xs((a = {}), Mb, n ? s : u), Xs(a, _b, n ? u : s), Xs(a, Fb, c), Xs(a, Lb, c), a),
              m =
                (Xs((i = {}), Rb, u),
                Xs(i, Fb, s),
                Xs(i, Lb, c),
                Xs(i, Ab, f),
                Xs(i, Mb, n ? c : f),
                Xs(i, _b, n ? f : c),
                i);
            switch (
              null ===
                (l = {
                  inline: d,
                  horizontal: p,
                  vertical: m,
                  inlineSub: d,
                  horizontalSub: m,
                  verticalSub: m,
                }[''.concat(e).concat(t ? '' : 'Sub')]) || void 0 === l
                ? void 0
                : l[r]
            ) {
              case u:
                return { offset: -1, sibling: !0 };
              case s:
                return { offset: 1, sibling: !0 };
              case f:
                return { offset: -1, sibling: !1 };
              case c:
                return { offset: 1, sibling: !1 };
              default:
                return null;
            }
          })(t, 1 === l(x, !0).length, r, m);
        if (!w) return;
        Ib.includes(m) && e.preventDefault();
        var E = function (e) {
          if (e) {
            var t = e,
              n = e.querySelector('a');
            (null == n ? void 0 : n.getAttribute('href')) && (t = n);
            var r = g.get(e);
            u(r),
              p(),
              (f.current = Yp(function () {
                d.current === r && t.focus();
              }));
          }
        };
        if (w.sibling || !b) {
          var k = zb(
            b && 'inline' !== t
              ? (function (e) {
                  for (var t = e; t; ) {
                    if (t.getAttribute('data-menu-list')) return t;
                    t = t.parentElement;
                  }
                  return null;
                })(b)
              : a.current,
            h,
            b,
            w.offset,
          );
          E(k);
        } else if (w.inlineTrigger) s(x);
        else if (w.offset > 0)
          s(x, !0),
            p(),
            (f.current = Yp(function () {
              y();
              var e = b.getAttribute('aria-controls'),
                t = zb(document.getElementById(e), h);
              E(t);
            }, 5));
        else if (w.offset < 0) {
          var C = l(x, !0),
            S = C[C.length - 2],
            P = v.get(S);
          s(S, !1), E(P);
        }
      }
      null == c || c(e);
    }
  );
}
var Vb = Math.random().toFixed(5).toString().slice(2),
  Ub = 0;
var Hb = '__RC_UTIL_PATH_SPLIT__',
  Wb = function (e) {
    return e.join(Hb);
  };
function $b() {
  var t = Cp(e.exports.useState({}), 2)[1],
    n = e.exports.useRef(new Map()),
    r = e.exports.useRef(new Map()),
    o = Cp(e.exports.useState([]), 2),
    a = o[0],
    i = o[1],
    l = e.exports.useRef(0),
    u = e.exports.useRef(!1),
    s = e.exports.useCallback(function (e, o) {
      var a = Wb(o);
      r.current.set(a, e), n.current.set(e, a), (l.current += 1);
      var i,
        s = l.current;
      (i = function () {
        s === l.current && (u.current || t({}));
      }),
        Promise.resolve().then(i);
    }, []),
    c = e.exports.useCallback(function (e, t) {
      var o = Wb(t);
      r.current.delete(o), n.current.delete(e);
    }, []),
    f = e.exports.useCallback(function (e) {
      i(e);
    }, []),
    d = e.exports.useCallback(
      function (e, t) {
        var r = n.current.get(e) || '',
          o = r.split(Hb);
        return t && a.includes(o[0]) && o.unshift('rc-menu-more'), o;
      },
      [a],
    ),
    p = e.exports.useCallback(
      function (e, t) {
        return e.some(function (e) {
          return d(e, !0).includes(t);
        });
      },
      [d],
    ),
    m = e.exports.useCallback(function (e) {
      var t = ''.concat(n.current.get(e)).concat(Hb),
        o = new Set();
      return (
        hd(r.current.keys()).forEach(function (e) {
          e.startsWith(t) && o.add(r.current.get(e));
        }),
        o
      );
    }, []);
  return (
    e.exports.useEffect(function () {
      return function () {
        u.current = !0;
      };
    }, []),
    {
      registerPath: s,
      unregisterPath: c,
      refreshOverflowKeys: f,
      isSubPathKey: p,
      getKeyPath: d,
      getKeys: function () {
        var e = hd(n.current.keys());
        return a.length && e.push('rc-menu-more'), e;
      },
      getSubPathKeys: m,
    }
  );
}
var Bb = [],
  qb = function (t) {
    var n = t.className,
      r = t.title;
    t.eventKey;
    var o = t.children,
      a = kp(t, ['className', 'title', 'eventKey', 'children']),
      i = e.exports.useContext(Zy).prefixCls,
      l = ''.concat(i, '-item-group');
    return e.exports.createElement(
      'li',
      Qs({}, a, {
        onClick: function (e) {
          return e.stopPropagation();
        },
        className: sc(l, n),
      }),
      e.exports.createElement(
        'div',
        { className: ''.concat(l, '-title'), title: 'string' == typeof r ? r : void 0 },
        r,
      ),
      e.exports.createElement('ul', { className: ''.concat(l, '-list') }, o),
    );
  };
function Kb(t) {
  var n = t.children,
    r = kp(t, ['children']),
    o = vb(n, ub(r.eventKey));
  return ib() ? o : e.exports.createElement(qb, dc(r, ['warnKey']), o);
}
function Yb(t) {
  var n = t.className,
    r = t.style,
    o = e.exports.useContext(Zy).prefixCls;
  return ib()
    ? null
    : e.exports.createElement('li', { className: sc(''.concat(o, '-item-divider'), n), style: r });
}
var Qb = ub,
  Xb = function (t) {
    var n,
      r,
      o = t.prefixCls,
      a = void 0 === o ? 'rc-menu' : o,
      i = t.style,
      l = t.className,
      u = t.tabIndex,
      s = void 0 === u ? 0 : u,
      c = t.children,
      f = t.direction,
      d = t.id,
      p = t.mode,
      m = void 0 === p ? 'vertical' : p,
      h = t.inlineCollapsed,
      v = t.disabled,
      g = t.disabledOverflow,
      y = t.subMenuOpenDelay,
      b = void 0 === y ? 0.1 : y,
      x = t.subMenuCloseDelay,
      w = void 0 === x ? 0.1 : x,
      E = t.forceSubMenuRender,
      k = t.defaultOpenKeys,
      C = t.openKeys,
      S = t.activeKey,
      P = t.defaultActiveFirst,
      N = t.selectable,
      O = void 0 === N || N,
      T = t.multiple,
      M = void 0 !== T && T,
      _ = t.defaultSelectedKeys,
      R = t.selectedKeys,
      F = t.onSelect,
      L = t.onDeselect,
      A = t.inlineIndent,
      I = void 0 === A ? 24 : A,
      j = t.motion,
      z = t.defaultMotions,
      D = t.triggerSubMenuAction,
      V = void 0 === D ? 'hover' : D,
      U = t.builtinPlacements,
      H = t.itemIcon,
      W = t.expandIcon,
      $ = t.overflowedIndicator,
      B = void 0 === $ ? '...' : $,
      q = t.overflowedIndicatorPopupClassName,
      K = t.getPopupContainer,
      Y = t.onClick,
      Q = t.onOpenChange,
      X = t.onKeyDown;
    t.openAnimation, t.openTransitionName;
    var G = kp(t, [
        'prefixCls',
        'style',
        'className',
        'tabIndex',
        'children',
        'direction',
        'id',
        'mode',
        'inlineCollapsed',
        'disabled',
        'disabledOverflow',
        'subMenuOpenDelay',
        'subMenuCloseDelay',
        'forceSubMenuRender',
        'defaultOpenKeys',
        'openKeys',
        'activeKey',
        'defaultActiveFirst',
        'selectable',
        'multiple',
        'defaultSelectedKeys',
        'selectedKeys',
        'onSelect',
        'onDeselect',
        'inlineIndent',
        'motion',
        'defaultMotions',
        'triggerSubMenuAction',
        'builtinPlacements',
        'itemIcon',
        'expandIcon',
        'overflowedIndicator',
        'overflowedIndicatorPopupClassName',
        'getPopupContainer',
        'onClick',
        'onOpenChange',
        'onKeyDown',
        'openAnimation',
        'openTransitionName',
      ]),
      Z = vb(c, Bb),
      J = Cp(e.exports.useState(!1), 2),
      ee = J[0],
      te = J[1],
      ne = e.exports.useRef(),
      re = (function (t) {
        var n = Cp(gv(t, { value: t }), 2),
          r = n[0],
          o = n[1];
        return (
          e.exports.useEffect(function () {
            Ub += 1;
            var e = ''.concat(Vb, '-').concat(Ub);
            o('rc-menu-uuid-'.concat(e));
          }, []),
          r
        );
      })(d),
      oe = 'rtl' === f,
      ae = Cp(
        e.exports.useMemo(
          function () {
            return ('inline' !== m && 'vertical' !== m) || !h ? [m, !1] : ['vertical', h];
          },
          [m, h],
        ),
        2,
      ),
      ie = ae[0],
      le = ae[1],
      ue = Cp(e.exports.useState(0), 2),
      se = ue[0],
      ce = ue[1],
      fe = se >= Z.length - 1 || 'horizontal' !== ie || g,
      de = Cp(
        gv(k, {
          value: C,
          postState: function (e) {
            return e || Bb;
          },
        }),
        2,
      ),
      pe = de[0],
      me = de[1],
      he = function (e) {
        me(e), null == Q || Q(e);
      },
      ve = Cp(e.exports.useState(pe), 2),
      ge = ve[0],
      ye = ve[1],
      be = 'inline' === ie,
      xe = e.exports.useRef(!1);
    e.exports.useEffect(
      function () {
        be && ye(pe);
      },
      [pe],
    ),
      e.exports.useEffect(
        function () {
          xe.current ? (be ? me(ge) : he(Bb)) : (xe.current = !0);
        },
        [be],
      );
    var we = $b(),
      Ee = we.registerPath,
      ke = we.unregisterPath,
      Ce = we.refreshOverflowKeys,
      Se = we.isSubPathKey,
      Pe = we.getKeyPath,
      Ne = we.getKeys,
      Oe = we.getSubPathKeys,
      Te = e.exports.useMemo(
        function () {
          return { registerPath: Ee, unregisterPath: ke };
        },
        [Ee, ke],
      ),
      Me = e.exports.useMemo(
        function () {
          return { isSubPathKey: Se };
        },
        [Se],
      );
    e.exports.useEffect(
      function () {
        Ce(
          fe
            ? Bb
            : Z.slice(se + 1).map(function (e) {
                return e.key;
              }),
        );
      },
      [se, fe],
    );
    var _e = Cp(
        gv(S || (P && (null === (n = Z[0]) || void 0 === n ? void 0 : n.key)), { value: S }),
        2,
      ),
      Re = _e[0],
      Fe = _e[1],
      Le = gb(function (e) {
        Fe(e);
      }),
      Ae = gb(function () {
        Fe(void 0);
      }),
      Ie = Cp(
        gv(_ || [], {
          value: R,
          postState: function (e) {
            return Array.isArray(e) ? e : null == e ? Bb : [e];
          },
        }),
        2,
      ),
      je = Ie[0],
      ze = Ie[1],
      De = gb(function (e) {
        null == Y || Y(tb(e)),
          (function (e) {
            if (O) {
              var t,
                n = e.key,
                r = je.includes(n);
              (t = M
                ? r
                  ? je.filter(function (e) {
                      return e !== n;
                    })
                  : [].concat(hd(je), [n])
                : [n]),
                ze(t);
              var o = fc(fc({}, e), {}, { selectedKeys: t });
              r ? null == L || L(o) : null == F || F(o);
            }
            !M && pe.length && 'inline' !== ie && he(Bb);
          })(e);
      }),
      Ve = gb(function (e, t) {
        var n = pe.filter(function (t) {
          return t !== e;
        });
        if (t) n.push(e);
        else if ('inline' !== ie) {
          var r = Oe(e);
          n = n.filter(function (e) {
            return !r.has(e);
          });
        }
        Gy(pe, n) || he(n);
      }),
      Ue = gb(K),
      He = Db(
        ie,
        Re,
        oe,
        re,
        ne,
        Ne,
        Pe,
        Fe,
        function (e, t) {
          var n = null != t ? t : !pe.includes(e);
          Ve(e, n);
        },
        X,
      );
    e.exports.useEffect(function () {
      te(!0);
    }, []);
    var We =
        'horizontal' !== ie || g
          ? Z
          : Z.map(function (t, n) {
              return e.exports.createElement(Jy, { key: t.key, overflowDisabled: n > se }, t);
            }),
      $e = e.exports.createElement(
        Sv,
        Qs(
          {
            id: d,
            ref: ne,
            prefixCls: ''.concat(a, '-overflow'),
            component: 'ul',
            itemComponent: hb,
            className: sc(
              a,
              ''.concat(a, '-root'),
              ''.concat(a, '-').concat(ie),
              l,
              ((r = {}),
              Xs(r, ''.concat(a, '-inline-collapsed'), le),
              Xs(r, ''.concat(a, '-rtl'), oe),
              r),
            ),
            dir: f,
            style: i,
            role: 'menu',
            tabIndex: s,
            data: We,
            renderRawItem: function (e) {
              return e;
            },
            renderRawRest: function (t) {
              var n = t.length,
                r = n ? Z.slice(-n) : null;
              return e.exports.createElement(
                Ob,
                {
                  eventKey: 'rc-menu-more',
                  title: B,
                  disabled: fe,
                  internalPopupClose: 0 === n,
                  popupClassName: q,
                },
                r,
              );
            },
            maxCount: 'horizontal' !== ie || g ? Sv.INVALIDATE : Sv.RESPONSIVE,
            ssr: 'full',
            'data-menu-list': !0,
            onVisibleChange: function (e) {
              ce(e);
            },
            onKeyDown: He,
          },
          G,
        ),
      );
    return e.exports.createElement(
      cb.Provider,
      { value: re },
      e.exports.createElement(
        Jy,
        {
          prefixCls: a,
          mode: ie,
          openKeys: pe,
          rtl: oe,
          disabled: v,
          motion: ee ? j : null,
          defaultMotions: ee ? z : null,
          activeKey: Re,
          onActive: Le,
          onInactive: Ae,
          selectedKeys: je,
          inlineIndent: I,
          subMenuOpenDelay: b,
          subMenuCloseDelay: w,
          forceSubMenuRender: E,
          builtinPlacements: U,
          triggerSubMenuAction: V,
          getPopupContainer: Ue,
          itemIcon: H,
          expandIcon: W,
          onItemClick: De,
          onOpenChange: Ve,
        },
        e.exports.createElement(sb.Provider, { value: Me }, $e),
        e.exports.createElement(
          'div',
          { style: { display: 'none' }, 'aria-hidden': !0 },
          e.exports.createElement(ab.Provider, { value: Te }, Z),
        ),
      ),
    );
  };
(Xb.Item = hb), (Xb.SubMenu = Ob), (Xb.ItemGroup = Kb), (Xb.Divider = Yb);
var Gb = e.exports.createContext({ prefixCls: '', firstLevel: !0, inlineCollapsed: !1 });
var Zb = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z',
          },
        },
      ],
    },
    name: 'bars',
    theme: 'outlined',
  },
  Jb = function (t, n) {
    return e.exports.createElement(Zm, Object.assign({}, t, { ref: n, icon: Zb }));
  };
Jb.displayName = 'BarsOutlined';
var ex = e.exports.forwardRef(Jb),
  tx = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z',
          },
        },
      ],
    },
    name: 'left',
    theme: 'outlined',
  },
  nx = function (t, n) {
    return e.exports.createElement(Zm, Object.assign({}, t, { ref: n, icon: tx }));
  };
nx.displayName = 'LeftOutlined';
var rx = e.exports.forwardRef(nx),
  ox = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  },
  ax = e.exports.createContext({
    siderHook: {
      addSider: function () {
        return null;
      },
      removeSider: function () {
        return null;
      },
    },
  });
function ix(t) {
  var n = t.suffixCls,
    r = t.tagName,
    o = t.displayName;
  return function (t) {
    var a = function (o) {
      var a = e.exports.useContext(yp).getPrefixCls,
        i = o.prefixCls,
        l = a(n, i);
      return e.exports.createElement(t, Qs({ prefixCls: l, tagName: r }, o));
    };
    return (a.displayName = o), a;
  };
}
var lx = function (t) {
  var n = t.prefixCls,
    r = t.className,
    o = t.children,
    a = t.tagName,
    i = ox(t, ['prefixCls', 'className', 'children', 'tagName']),
    l = sc(n, r);
  return e.exports.createElement(a, Qs({ className: l }, i), o);
};
ix({ suffixCls: 'layout', tagName: 'section', displayName: 'Layout' })(function (t) {
  var n,
    r = e.exports.useContext(yp).direction,
    o = Cp(e.exports.useState([]), 2),
    a = o[0],
    i = o[1],
    l = t.prefixCls,
    u = t.className,
    s = t.children,
    c = t.hasSider,
    f = t.tagName,
    d = ox(t, ['prefixCls', 'className', 'children', 'hasSider', 'tagName']),
    p = sc(
      l,
      (Xs((n = {}), ''.concat(l, '-has-sider'), 'boolean' == typeof c ? c : a.length > 0),
      Xs(n, ''.concat(l, '-rtl'), 'rtl' === r),
      n),
      u,
    );
  return e.exports.createElement(
    ax.Provider,
    {
      value: {
        siderHook: {
          addSider: function (e) {
            i(function (t) {
              return [].concat(hd(t), [e]);
            });
          },
          removeSider: function (e) {
            i(function (t) {
              return t.filter(function (t) {
                return t !== e;
              });
            });
          },
        },
      },
    },
    e.exports.createElement(f, Qs({ className: p }, d), s),
  );
}),
  ix({ suffixCls: 'layout-header', tagName: 'header', displayName: 'Header' })(lx),
  ix({ suffixCls: 'layout-footer', tagName: 'footer', displayName: 'Footer' })(lx),
  ix({ suffixCls: 'layout-content', tagName: 'main', displayName: 'Content' })(lx);
var ux,
  sx = function (e) {
    return !isNaN(parseFloat(e)) && isFinite(e);
  },
  cx = {
    xs: '479.98px',
    sm: '575.98px',
    md: '767.98px',
    lg: '991.98px',
    xl: '1199.98px',
    xxl: '1599.98px',
  },
  fx = e.exports.createContext({}),
  dx =
    ((ux = 0),
    function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
      return (ux += 1), ''.concat(e).concat(ux);
    });
e.exports.forwardRef(function (t, n) {
  var r = t.prefixCls,
    o = t.className,
    a = t.trigger,
    i = t.children,
    l = t.defaultCollapsed,
    u = void 0 !== l && l,
    s = t.theme,
    c = void 0 === s ? 'dark' : s,
    f = t.style,
    d = void 0 === f ? {} : f,
    p = t.collapsible,
    m = void 0 !== p && p,
    h = t.reverseArrow,
    v = void 0 !== h && h,
    g = t.width,
    y = void 0 === g ? 200 : g,
    b = t.collapsedWidth,
    x = void 0 === b ? 80 : b,
    w = t.zeroWidthTriggerStyle,
    E = t.breakpoint,
    k = t.onCollapse,
    C = t.onBreakpoint,
    S = (function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      }
      return n;
    })(t, [
      'prefixCls',
      'className',
      'trigger',
      'children',
      'defaultCollapsed',
      'theme',
      'style',
      'collapsible',
      'reverseArrow',
      'width',
      'collapsedWidth',
      'zeroWidthTriggerStyle',
      'breakpoint',
      'onCollapse',
      'onBreakpoint',
    ]),
    P = e.exports.useContext(ax).siderHook,
    N = Cp(e.exports.useState('collapsed' in S ? S.collapsed : u), 2),
    O = N[0],
    T = N[1],
    M = Cp(e.exports.useState(!1), 2),
    _ = M[0],
    R = M[1];
  e.exports.useEffect(
    function () {
      'collapsed' in S && T(S.collapsed);
    },
    [S.collapsed],
  );
  var F = function (e, t) {
      'collapsed' in S || T(e), null == k || k(e, t);
    },
    L = e.exports.useRef();
  (L.current = function (e) {
    R(e.matches), null == C || C(e.matches), O !== e.matches && F(e.matches, 'responsive');
  }),
    e.exports.useEffect(function () {
      function e(e) {
        return L.current(e);
      }
      var t;
      if ('undefined' != typeof window) {
        var n = window.matchMedia;
        if (n && E && E in cx) {
          t = n('(max-width: '.concat(cx[E], ')'));
          try {
            t.addEventListener('change', e);
          } catch (r) {
            t.addListener(e);
          }
          e(t);
        }
      }
      return function () {
        try {
          null == t || t.removeEventListener('change', e);
        } catch (r) {
          null == t || t.removeListener(e);
        }
      };
    }, []),
    e.exports.useEffect(function () {
      var e = dx('ant-sider-');
      return (
        P.addSider(e),
        function () {
          return P.removeSider(e);
        }
      );
    }, []);
  var A,
    I,
    j,
    z,
    D,
    V,
    U,
    H,
    W,
    $,
    B = function () {
      F(!O, 'clickTrigger');
    },
    q = e.exports.useContext(yp).getPrefixCls;
  return e.exports.createElement(
    fx.Provider,
    { value: { siderCollapsed: O } },
    ((I = q('layout-sider', r)),
    (j = dc(S, ['collapsed'])),
    (D = sx((z = O ? x : y)) ? ''.concat(z, 'px') : String(z)),
    (V =
      0 === parseFloat(String(x || 0))
        ? e.exports.createElement(
            'span',
            {
              onClick: B,
              className: sc(
                ''.concat(I, '-zero-width-trigger'),
                ''.concat(I, '-zero-width-trigger-').concat(v ? 'right' : 'left'),
              ),
              style: w,
            },
            a || e.exports.createElement(ex, null),
          )
        : null),
    (U = {
      expanded: v ? e.exports.createElement(Ny, null) : e.exports.createElement(rx, null),
      collapsed: v ? e.exports.createElement(rx, null) : e.exports.createElement(Ny, null),
    }[O ? 'collapsed' : 'expanded']),
    (H =
      null !== a
        ? V ||
          e.exports.createElement(
            'div',
            { className: ''.concat(I, '-trigger'), onClick: B, style: { width: D } },
            a || U,
          )
        : null),
    (W = Qs(Qs({}, d), { flex: '0 0 '.concat(D), maxWidth: D, minWidth: D, width: D })),
    ($ = sc(
      I,
      ''.concat(I, '-').concat(c),
      (Xs((A = {}), ''.concat(I, '-collapsed'), !!O),
      Xs(A, ''.concat(I, '-has-trigger'), m && null !== a && !V),
      Xs(A, ''.concat(I, '-below'), !!_),
      Xs(A, ''.concat(I, '-zero-width'), 0 === parseFloat(D)),
      A),
      o,
    )),
    e.exports.createElement(
      'aside',
      Qs({ className: $ }, j, { style: W, ref: n }),
      e.exports.createElement('div', { className: ''.concat(I, '-children') }, i),
      m || (_ && V) ? H : null,
    )),
  );
}).displayName = 'Sider';
var px = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var o = 0;
      for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
        t.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
          (n[r[o]] = e[r[o]]);
    }
    return n;
  },
  mx = (function (t) {
    tc(r, e.exports.Component);
    var n = ic(r);
    function r() {
      var t;
      return (
        Gs(this, r),
        ((t = n.apply(this, arguments)).renderItem = function (n) {
          var r,
            o,
            a = n.siderCollapsed,
            i = t.context,
            l = i.prefixCls,
            u = i.firstLevel,
            s = i.inlineCollapsed,
            c = i.direction,
            f = t.props,
            d = f.className,
            p = f.children,
            m = t.props,
            h = m.title,
            v = m.icon,
            g = m.danger,
            y = px(m, ['title', 'icon', 'danger']),
            b = h;
          void 0 === h ? (b = u ? p : '') : !1 === h && (b = '');
          var x = { title: b };
          a || s || ((x.title = null), (x.visible = !1));
          var w = jc(p).length;
          return e.exports.createElement(
            Cy,
            Qs({}, x, {
              placement: 'rtl' === c ? 'left' : 'right',
              overlayClassName: ''.concat(l, '-inline-collapsed-tooltip'),
            }),
            e.exports.createElement(
              hb,
              Qs({}, y, {
                className: sc(
                  ((r = {}),
                  Xs(r, ''.concat(l, '-item-danger'), g),
                  Xs(r, ''.concat(l, '-item-only-child'), 1 === (v ? w + 1 : w)),
                  r),
                  d,
                ),
                title: 'string' == typeof h ? h : void 0,
              }),
              ny(v, {
                className: sc(
                  ty(v) ? (null === (o = v.props) || void 0 === o ? void 0 : o.className) : '',
                  ''.concat(l, '-item-icon'),
                ),
              }),
              t.renderItemChildren(s),
            ),
          );
        }),
        t
      );
    }
    return (
      Js(r, [
        {
          key: 'renderItemChildren',
          value: function (t) {
            var n = this.context,
              r = n.prefixCls,
              o = n.firstLevel,
              a = this.props,
              i = a.icon,
              l = a.children,
              u = e.exports.createElement('span', { className: ''.concat(r, '-title-content') }, l);
            return (!i || (ty(l) && 'span' === l.type)) && l && t && o && 'string' == typeof l
              ? e.exports.createElement(
                  'div',
                  { className: ''.concat(r, '-inline-collapsed-noicon') },
                  l.charAt(0),
                )
              : u;
          },
        },
        {
          key: 'render',
          value: function () {
            return e.exports.createElement(fx.Consumer, null, this.renderItem);
          },
        },
      ]),
      r
    );
  })();
mx.contextType = Gb;
var hx = (function (t) {
  tc(r, e.exports.Component);
  var n = ic(r);
  function r(t) {
    var o;
    return (
      Gs(this, r),
      ((o = n.call(this, t)).renderMenu = function (t) {
        var n = t.getPopupContainer,
          r = t.getPrefixCls,
          a = t.direction,
          i = r(),
          l = o.props,
          u = l.prefixCls,
          s = l.className,
          c = l.theme,
          f = l.expandIcon,
          d = dc(
            (function (e, t) {
              var n = {};
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
              if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                  t.indexOf(r[o]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                    (n[r[o]] = e[r[o]]);
              }
              return n;
            })(l, ['prefixCls', 'className', 'theme', 'expandIcon']),
            ['siderCollapsed', 'collapsedWidth'],
          ),
          p = o.getInlineCollapsed(),
          m = {
            horizontal: { motionName: ''.concat(i, '-slide-up') },
            inline: Jg,
            other: { motionName: ''.concat(i, '-zoom-big') },
          },
          h = r('menu', u),
          v = sc(''.concat(h, '-').concat(c), s);
        return e.exports.createElement(
          Gb.Provider,
          {
            value: {
              prefixCls: h,
              inlineCollapsed: p || !1,
              antdMenuTheme: c,
              direction: a,
              firstLevel: !0,
            },
          },
          e.exports.createElement(
            Xb,
            Qs(
              {
                getPopupContainer: n,
                overflowedIndicator: e.exports.createElement(_y, null),
                overflowedIndicatorPopupClassName: ''.concat(h, '-').concat(c),
              },
              d,
              {
                inlineCollapsed: p,
                className: v,
                prefixCls: h,
                direction: a,
                defaultMotions: m,
                expandIcon: ny(f, { className: ''.concat(h, '-submenu-expand-icon') }),
              },
            ),
          ),
        );
      }),
      ep(
        !('inlineCollapsed' in t && 'inline' !== t.mode),
        'Menu',
        '`inlineCollapsed` should only be used when `mode` is inline.',
      ),
      ep(
        !(void 0 !== t.siderCollapsed && 'inlineCollapsed' in t),
        'Menu',
        '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.',
      ),
      o
    );
  }
  return (
    Js(r, [
      {
        key: 'getInlineCollapsed',
        value: function () {
          var e = this.props,
            t = e.inlineCollapsed,
            n = e.siderCollapsed;
          return void 0 !== n ? n : t;
        },
      },
      {
        key: 'render',
        value: function () {
          return e.exports.createElement(bp, null, this.renderMenu);
        },
      },
    ]),
    r
  );
})();
hx.defaultProps = { theme: 'light' };
var vx = (function (t) {
  tc(r, e.exports.Component);
  var n = ic(r);
  function r() {
    return Gs(this, r), n.apply(this, arguments);
  }
  return (
    Js(r, [
      {
        key: 'render',
        value: function () {
          var t = this;
          return e.exports.createElement(fx.Consumer, null, function (n) {
            return e.exports.createElement(hx, Qs({}, t.props, n));
          });
        },
      },
    ]),
    r
  );
})();
(vx.Divider = Yb),
  (vx.Item = mx),
  (vx.SubMenu = function (t) {
    var n,
      r,
      o = t.popupClassName,
      a = t.icon,
      i = t.title,
      l = e.exports.useContext(Gb),
      u = l.prefixCls,
      s = l.inlineCollapsed,
      c = l.antdMenuTheme,
      f = Qb();
    if (a) {
      var d = ty(i) && 'span' === i.type;
      r = e.exports.createElement(
        e.exports.Fragment,
        null,
        ny(a, {
          className: sc(
            ty(a) ? (null === (n = a.props) || void 0 === n ? void 0 : n.className) : '',
            ''.concat(u, '-item-icon'),
          ),
        }),
        d ? i : e.exports.createElement('span', { className: ''.concat(u, '-title-content') }, i),
      );
    } else
      r =
        s && !f.length && i && 'string' == typeof i
          ? e.exports.createElement(
              'div',
              { className: ''.concat(u, '-inline-collapsed-noicon') },
              i.charAt(0),
            )
          : e.exports.createElement('span', { className: ''.concat(u, '-title-content') }, i);
    return e.exports.createElement(
      Gb.Provider,
      { value: Qs(Qs({}, l), { firstLevel: !1 }) },
      e.exports.createElement(
        Ob,
        Qs({}, dc(t, ['icon']), {
          title: r,
          popupClassName: sc(u, ''.concat(u, '-').concat(c), o),
        }),
      ),
    );
  }),
  (vx.ItemGroup = Kb);
var gx,
  yx = vx,
  bx = e.exports.createContext({}),
  xx = function () {
    return Sp() && window.document.documentElement;
  },
  wx = function () {
    var t = Cp(e.exports.useState(!1), 2),
      n = t[0],
      r = t[1];
    return (
      e.exports.useEffect(function () {
        r(
          (function () {
            if (!xx()) return !1;
            if (void 0 !== gx) return gx;
            var e = document.createElement('div');
            return (
              (e.style.display = 'flex'),
              (e.style.flexDirection = 'column'),
              (e.style.rowGap = '1px'),
              e.appendChild(document.createElement('div')),
              e.appendChild(document.createElement('div')),
              document.body.appendChild(e),
              (gx = 1 === e.scrollHeight),
              document.body.removeChild(e),
              gx
            );
          })(),
        );
      }, []),
      n
    );
  };
by('top', 'middle', 'bottom', 'stretch'),
  by('start', 'end', 'center', 'space-around', 'space-between');
var Ex = e.exports.forwardRef(function (t, n) {
  var r,
    o = t.prefixCls,
    a = t.justify,
    i = t.align,
    l = t.className,
    u = t.style,
    s = t.children,
    c = t.gutter,
    f = void 0 === c ? 0 : c,
    d = t.wrap,
    p = (function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      }
      return n;
    })(t, ['prefixCls', 'justify', 'align', 'className', 'style', 'children', 'gutter', 'wrap']),
    m = e.exports.useContext(yp),
    h = m.getPrefixCls,
    v = m.direction,
    g = Cp(e.exports.useState({ xs: !0, sm: !0, md: !0, lg: !0, xl: !0, xxl: !0 }), 2),
    y = g[0],
    b = g[1],
    x = wx(),
    w = e.exports.useRef(f);
  e.exports.useEffect(function () {
    var e = uy.subscribe(function (e) {
      var t = w.current || 0;
      ((!Array.isArray(t) && 'object' === rc(t)) ||
        (Array.isArray(t) && ('object' === rc(t[0]) || 'object' === rc(t[1])))) &&
        b(e);
    });
    return function () {
      return uy.unsubscribe(e);
    };
  }, []);
  var E,
    k = h('row', o),
    C =
      ((E = [0, 0]),
      (Array.isArray(f) ? f : [f, 0]).forEach(function (e, t) {
        if ('object' === rc(e))
          for (var n = 0; n < ry.length; n++) {
            var r = ry[n];
            if (y[r] && void 0 !== e[r]) {
              E[t] = e[r];
              break;
            }
          }
        else E[t] = e || 0;
      }),
      E),
    S = sc(
      k,
      (Xs((r = {}), ''.concat(k, '-no-wrap'), !1 === d),
      Xs(r, ''.concat(k, '-').concat(a), a),
      Xs(r, ''.concat(k, '-').concat(i), i),
      Xs(r, ''.concat(k, '-rtl'), 'rtl' === v),
      r),
      l,
    ),
    P = {},
    N = C[0] > 0 ? C[0] / -2 : void 0,
    O = C[1] > 0 ? C[1] / -2 : void 0;
  if ((N && ((P.marginLeft = N), (P.marginRight = N)), x)) {
    var T = Cp(C, 2);
    P.rowGap = T[1];
  } else O && ((P.marginTop = O), (P.marginBottom = O));
  var M = e.exports.useMemo(
    function () {
      return { gutter: C, wrap: d, supportFlexGap: x };
    },
    [C, d, x],
  );
  return e.exports.createElement(
    bx.Provider,
    { value: M },
    e.exports.createElement('div', Qs({}, p, { className: S, style: Qs(Qs({}, P), u), ref: n }), s),
  );
});
Ex.displayName = 'Row';
var kx = Ex;
var Cx = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
  Sx = e.exports.forwardRef(function (t, n) {
    var r,
      o = e.exports.useContext(yp),
      a = o.getPrefixCls,
      i = o.direction,
      l = e.exports.useContext(bx),
      u = l.gutter,
      s = l.wrap,
      c = l.supportFlexGap,
      f = t.prefixCls,
      d = t.span,
      p = t.order,
      m = t.offset,
      h = t.push,
      v = t.pull,
      g = t.className,
      y = t.children,
      b = t.flex,
      x = t.style,
      w = (function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      })(t, [
        'prefixCls',
        'span',
        'order',
        'offset',
        'push',
        'pull',
        'className',
        'children',
        'flex',
        'style',
      ]),
      E = a('col', f),
      k = {};
    Cx.forEach(function (e) {
      var n,
        r = {},
        o = t[e];
      'number' == typeof o ? (r.span = o) : 'object' === rc(o) && (r = o || {}),
        delete w[e],
        (k = Qs(
          Qs({}, k),
          (Xs((n = {}), ''.concat(E, '-').concat(e, '-').concat(r.span), void 0 !== r.span),
          Xs(n, ''.concat(E, '-').concat(e, '-order-').concat(r.order), r.order || 0 === r.order),
          Xs(
            n,
            ''.concat(E, '-').concat(e, '-offset-').concat(r.offset),
            r.offset || 0 === r.offset,
          ),
          Xs(n, ''.concat(E, '-').concat(e, '-push-').concat(r.push), r.push || 0 === r.push),
          Xs(n, ''.concat(E, '-').concat(e, '-pull-').concat(r.pull), r.pull || 0 === r.pull),
          Xs(n, ''.concat(E, '-rtl'), 'rtl' === i),
          n),
        ));
    });
    var C = sc(
        E,
        (Xs((r = {}), ''.concat(E, '-').concat(d), void 0 !== d),
        Xs(r, ''.concat(E, '-order-').concat(p), p),
        Xs(r, ''.concat(E, '-offset-').concat(m), m),
        Xs(r, ''.concat(E, '-push-').concat(h), h),
        Xs(r, ''.concat(E, '-pull-').concat(v), v),
        r),
        g,
        k,
      ),
      S = {};
    if (u && u[0] > 0) {
      var P = u[0] / 2;
      (S.paddingLeft = P), (S.paddingRight = P);
    }
    if (u && u[1] > 0 && !c) {
      var N = u[1] / 2;
      (S.paddingTop = N), (S.paddingBottom = N);
    }
    return (
      b &&
        ((S.flex = (function (e) {
          return 'number' == typeof e
            ? ''.concat(e, ' ').concat(e, ' auto')
            : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e)
            ? '0 0 '.concat(e)
            : e;
        })(b)),
        'auto' !== b || !1 !== s || S.minWidth || (S.minWidth = 0)),
      e.exports.createElement(
        'div',
        Qs({}, w, { style: Qs(Qs({}, S), x), className: C, ref: n }),
        y,
      )
    );
  });
Sx.displayName = 'Col';
var Px,
  Nx = Sx;
function Ox(e) {
  if ('undefined' == typeof document) return 0;
  if (e || void 0 === Px) {
    var t = document.createElement('div');
    (t.style.width = '100%'), (t.style.height = '200px');
    var n = document.createElement('div'),
      r = n.style;
    (r.position = 'absolute'),
      (r.top = '0'),
      (r.left = '0'),
      (r.pointerEvents = 'none'),
      (r.visibility = 'hidden'),
      (r.width = '200px'),
      (r.height = '150px'),
      (r.overflow = 'hidden'),
      n.appendChild(t),
      document.body.appendChild(n);
    var o = t.offsetWidth;
    n.style.overflow = 'scroll';
    var a = t.offsetWidth;
    o === a && (a = n.clientWidth), document.body.removeChild(n), (Px = o - a);
  }
  return Px;
}
function Tx(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if (!e) return {};
  var n = t.element,
    r = void 0 === n ? document.body : n,
    o = {},
    a = Object.keys(e);
  return (
    a.forEach(function (e) {
      o[e] = r.style[e];
    }),
    a.forEach(function (t) {
      r.style[t] = e[t];
    }),
    o
  );
}
var Mx = {},
  _x = function (e) {
    if (
      (document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) &&
        window.innerWidth > document.body.offsetWidth) ||
      e
    ) {
      var t = 'ant-scrolling-effect',
        n = new RegExp(''.concat(t), 'g'),
        r = document.body.className;
      if (e) {
        if (!n.test(r)) return;
        return Tx(Mx), (Mx = {}), void (document.body.className = r.replace(n, '').trim());
      }
      var o = Ox();
      if (
        o &&
        ((Mx = Tx({ position: 'relative', width: 'calc(100% - '.concat(o, 'px)') })), !n.test(r))
      ) {
        var a = ''.concat(r, ' ').concat(t);
        document.body.className = a.trim();
      }
    }
  },
  Rx = [],
  Fx = new RegExp(''.concat('ant-scrolling-effect'), 'g'),
  Lx = 0,
  Ax = new Map(),
  Ix = function e(t) {
    var n = this;
    Gs(this, e),
      (this.lockTarget = void 0),
      (this.options = void 0),
      (this.getContainer = function () {
        var e;
        return null === (e = n.options) || void 0 === e ? void 0 : e.container;
      }),
      (this.reLock = function (e) {
        var t = Rx.find(function (e) {
          return e.target === n.lockTarget;
        });
        t && n.unLock(), (n.options = e), t && ((t.options = e), n.lock());
      }),
      (this.lock = function () {
        var e;
        if (
          !Rx.some(function (e) {
            return e.target === n.lockTarget;
          })
        )
          if (
            Rx.some(function (e) {
              var t,
                r = e.options;
              return (
                (null == r ? void 0 : r.container) ===
                (null === (t = n.options) || void 0 === t ? void 0 : t.container)
              );
            })
          )
            Rx = [].concat(hd(Rx), [{ target: n.lockTarget, options: n.options }]);
          else {
            var t = 0,
              r =
                (null === (e = n.options) || void 0 === e ? void 0 : e.container) || document.body;
            ((r === document.body &&
              window.innerWidth - document.documentElement.clientWidth > 0) ||
              r.scrollHeight > r.clientHeight) &&
              (t = Ox());
            var o = r.className;
            if (
              (0 ===
                Rx.filter(function (e) {
                  var t,
                    r = e.options;
                  return (
                    (null == r ? void 0 : r.container) ===
                    (null === (t = n.options) || void 0 === t ? void 0 : t.container)
                  );
                }).length &&
                Ax.set(
                  r,
                  Tx(
                    {
                      width: 0 !== t ? 'calc(100% - '.concat(t, 'px)') : void 0,
                      overflow: 'hidden',
                      overflowX: 'hidden',
                      overflowY: 'hidden',
                    },
                    { element: r },
                  ),
                ),
              !Fx.test(o))
            ) {
              var a = ''.concat(o, ' ').concat('ant-scrolling-effect');
              r.className = a.trim();
            }
            Rx = [].concat(hd(Rx), [{ target: n.lockTarget, options: n.options }]);
          }
      }),
      (this.unLock = function () {
        var e,
          t = Rx.find(function (e) {
            return e.target === n.lockTarget;
          });
        if (
          ((Rx = Rx.filter(function (e) {
            return e.target !== n.lockTarget;
          })),
          t &&
            !Rx.some(function (e) {
              var n,
                r = e.options;
              return (
                (null == r ? void 0 : r.container) ===
                (null === (n = t.options) || void 0 === n ? void 0 : n.container)
              );
            }))
        ) {
          var r =
              (null === (e = n.options) || void 0 === e ? void 0 : e.container) || document.body,
            o = r.className;
          Fx.test(o) &&
            (Tx(Ax.get(r), { element: r }),
            Ax.delete(r),
            (r.className = r.className.replace(Fx, '').trim()));
        }
      }),
      (this.lockTarget = Lx++),
      (this.options = t);
  },
  jx = 0,
  zx = Sp(),
  Dx = {},
  Vx = function (e) {
    if (!zx) return null;
    if (e) {
      if ('string' == typeof e) return document.querySelectorAll(e)[0];
      if ('function' == typeof e) return e();
      if ('object' === rc(e) && e instanceof window.HTMLElement) return e;
    }
    return document.body;
  },
  Ux = (function (t) {
    tc(r, e.exports.Component);
    var n = ic(r);
    function r(t) {
      var o;
      return (
        Gs(this, r),
        ((o = n.call(this, t)).container = void 0),
        (o.componentRef = e.exports.createRef()),
        (o.rafId = void 0),
        (o.scrollLocker = void 0),
        (o.renderComponent = void 0),
        (o.updateScrollLocker = function (e) {
          var t = (e || {}).visible,
            n = o.props,
            r = n.getContainer,
            a = n.visible;
          a &&
            a !== t &&
            zx &&
            Vx(r) !== o.scrollLocker.getContainer() &&
            o.scrollLocker.reLock({ container: Vx(r) });
        }),
        (o.updateOpenCount = function (e) {
          var t = e || {},
            n = t.visible,
            r = t.getContainer,
            a = o.props,
            i = a.visible,
            l = a.getContainer;
          i !== n && zx && Vx(l) === document.body && (i && !n ? (jx += 1) : e && (jx -= 1)),
            ('function' == typeof l && 'function' == typeof r
              ? l.toString() !== r.toString()
              : l !== r) && o.removeCurrentContainer();
        }),
        (o.attachToParent = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (e || (o.container && !o.container.parentNode)) {
            var t = Vx(o.props.getContainer);
            return !!t && (t.appendChild(o.container), !0);
          }
          return !0;
        }),
        (o.getContainer = function () {
          return zx
            ? (o.container || ((o.container = document.createElement('div')), o.attachToParent(!0)),
              o.setWrapperClassName(),
              o.container)
            : null;
        }),
        (o.setWrapperClassName = function () {
          var e = o.props.wrapperClassName;
          o.container && e && e !== o.container.className && (o.container.className = e);
        }),
        (o.removeCurrentContainer = function () {
          var e, t;
          null === (e = o.container) ||
            void 0 === e ||
            null === (t = e.parentNode) ||
            void 0 === t ||
            t.removeChild(o.container);
        }),
        (o.switchScrollingEffect = function () {
          1 !== jx || Object.keys(Dx).length
            ? jx || (Tx(Dx), (Dx = {}), _x(!0))
            : (_x(), (Dx = Tx({ overflow: 'hidden', overflowX: 'hidden', overflowY: 'hidden' })));
        }),
        (o.scrollLocker = new Ix({ container: Vx(t.getContainer) })),
        o
      );
    }
    return (
      Js(r, [
        {
          key: 'componentDidMount',
          value: function () {
            var e = this;
            this.updateOpenCount(),
              this.attachToParent() ||
                (this.rafId = Yp(function () {
                  e.forceUpdate();
                }));
          },
        },
        {
          key: 'componentDidUpdate',
          value: function (e) {
            this.updateOpenCount(e),
              this.updateScrollLocker(e),
              this.setWrapperClassName(),
              this.attachToParent();
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            var e = this.props,
              t = e.visible,
              n = e.getContainer;
            zx && Vx(n) === document.body && (jx = t && jx ? jx - 1 : jx),
              this.removeCurrentContainer(),
              Yp.cancel(this.rafId);
          },
        },
        {
          key: 'render',
          value: function () {
            var t = this.props,
              n = t.children,
              r = t.forceRender,
              o = t.visible,
              a = null,
              i = {
                getOpenCount: function () {
                  return jx;
                },
                getContainer: this.getContainer,
                switchScrollingEffect: this.switchScrollingEffect,
                scrollLocker: this.scrollLocker,
              };
            return (
              (r || o || this.componentRef.current) &&
                (a = e.exports.createElement(
                  Nv,
                  { getContainer: this.getContainer, ref: this.componentRef },
                  n(i),
                )),
              a
            );
          },
        },
      ]),
      r
    );
  })();
function Hx(t) {
  var n = t.prefixCls,
    r = t.style,
    o = t.visible,
    a = t.maskProps,
    i = t.motionName;
  return e.exports.createElement(
    em,
    { key: 'mask', visible: o, motionName: i, leavedClassName: ''.concat(n, '-mask-hidden') },
    function (t) {
      var o = t.className,
        i = t.style;
      return e.exports.createElement(
        'div',
        Qs({ style: fc(fc({}, i), r), className: sc(''.concat(n, '-mask'), o) }, a),
      );
    },
  );
}
function Wx(e, t, n) {
  var r = t;
  return !r && n && (r = ''.concat(e, '-').concat(n)), r;
}
var $x = -1;
function Bx(e, t) {
  var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
    r = 'scroll'.concat(t ? 'Top' : 'Left');
  if ('number' != typeof n) {
    var o = e.document;
    'number' != typeof (n = o.documentElement[r]) && (n = o.body[r]);
  }
  return n;
}
var qx = e.exports.memo(
    function (e) {
      return e.children;
    },
    function (e, t) {
      return !t.shouldUpdate;
    },
  ),
  Kx = { width: 0, height: 0, overflow: 'hidden', outline: 'none' },
  Yx = e.exports.forwardRef(function (t, n) {
    var r = t.closable,
      o = t.prefixCls,
      a = t.width,
      i = t.height,
      l = t.footer,
      u = t.title,
      s = t.closeIcon,
      c = t.style,
      f = t.className,
      d = t.visible,
      p = t.forceRender,
      m = t.bodyStyle,
      h = t.bodyProps,
      v = t.children,
      g = t.destroyOnClose,
      y = t.modalRender,
      b = t.motionName,
      x = t.ariaId,
      w = t.onClose,
      E = t.onVisibleChanged,
      k = t.onMouseDown,
      C = t.onMouseUp,
      S = t.mousePosition,
      P = e.exports.useRef(),
      N = e.exports.useRef(),
      O = e.exports.useRef();
    e.exports.useImperativeHandle(n, function () {
      return {
        focus: function () {
          var e;
          null === (e = P.current) || void 0 === e || e.focus();
        },
        changeActive: function (e) {
          var t = document.activeElement;
          e && t === N.current ? P.current.focus() : e || t !== P.current || N.current.focus();
        },
      };
    });
    var T,
      M,
      _,
      R = Cp(e.exports.useState(), 2),
      F = R[0],
      L = R[1],
      A = {};
    function I() {
      var e,
        t,
        n,
        r,
        o,
        a =
          ((e = O.current),
          (t = e.getBoundingClientRect()),
          (n = { left: t.left, top: t.top }),
          (r = e.ownerDocument),
          (o = r.defaultView || r.parentWindow),
          (n.left += Bx(o)),
          (n.top += Bx(o, !0)),
          n);
      L(S ? ''.concat(S.x - a.left, 'px ').concat(S.y - a.top, 'px') : '');
    }
    void 0 !== a && (A.width = a),
      void 0 !== i && (A.height = i),
      F && (A.transformOrigin = F),
      l && (T = e.exports.createElement('div', { className: ''.concat(o, '-footer') }, l)),
      u &&
        (M = e.exports.createElement(
          'div',
          { className: ''.concat(o, '-header') },
          e.exports.createElement('div', { className: ''.concat(o, '-title'), id: x }, u),
        )),
      r &&
        (_ = e.exports.createElement(
          'button',
          { type: 'button', onClick: w, 'aria-label': 'Close', className: ''.concat(o, '-close') },
          s || e.exports.createElement('span', { className: ''.concat(o, '-close-x') }),
        ));
    var j = e.exports.createElement(
      'div',
      { className: ''.concat(o, '-content') },
      _,
      M,
      e.exports.createElement('div', Qs({ className: ''.concat(o, '-body'), style: m }, h), v),
      T,
    );
    return e.exports.createElement(
      em,
      {
        visible: d,
        onVisibleChanged: E,
        onAppearPrepare: I,
        onEnterPrepare: I,
        forceRender: p,
        motionName: b,
        removeOnLeave: g,
        ref: O,
      },
      function (t, n) {
        var r = t.className,
          a = t.style;
        return e.exports.createElement(
          'div',
          {
            key: 'dialog-element',
            role: 'document',
            ref: n,
            style: fc(fc(fc({}, a), c), A),
            className: sc(o, f, r),
            onMouseDown: k,
            onMouseUp: C,
          },
          e.exports.createElement('div', { tabIndex: 0, ref: P, style: Kx, 'aria-hidden': 'true' }),
          e.exports.createElement(qx, { shouldUpdate: d || p }, y ? y(j) : j),
          e.exports.createElement('div', { tabIndex: 0, ref: N, style: Kx, 'aria-hidden': 'true' }),
        );
      },
    );
  });
function Qx(t) {
  var n = t.prefixCls,
    r = void 0 === n ? 'rc-dialog' : n,
    o = t.zIndex,
    a = t.visible,
    i = void 0 !== a && a,
    l = t.keyboard,
    u = void 0 === l || l,
    s = t.focusTriggerAfterClose,
    c = void 0 === s || s,
    f = t.scrollLocker,
    d = t.title,
    p = t.wrapStyle,
    m = t.wrapClassName,
    h = t.wrapProps,
    v = t.onClose,
    g = t.afterClose,
    y = t.transitionName,
    b = t.animation,
    x = t.closable,
    w = void 0 === x || x,
    E = t.mask,
    k = void 0 === E || E,
    C = t.maskTransitionName,
    S = t.maskAnimation,
    P = t.maskClosable,
    N = void 0 === P || P,
    O = t.maskStyle,
    T = t.maskProps,
    M = e.exports.useRef(),
    _ = e.exports.useRef(),
    R = e.exports.useRef(),
    F = Cp(e.exports.useState(i), 2),
    L = F[0],
    A = F[1],
    I = e.exports.useRef();
  function j(e) {
    null == v || v(e);
  }
  I.current || (I.current = 'rcDialogTitle'.concat(($x += 1)));
  var z = e.exports.useRef(!1),
    D = e.exports.useRef(),
    V = null;
  return (
    N &&
      (V = function (e) {
        z.current ? (z.current = !1) : _.current === e.target && j(e);
      }),
    e.exports.useEffect(
      function () {
        return i && A(!0), function () {};
      },
      [i],
    ),
    e.exports.useEffect(function () {
      return function () {
        clearTimeout(D.current);
      };
    }, []),
    e.exports.useEffect(
      function () {
        return L ? (null == f || f.lock(), null == f ? void 0 : f.unLock) : function () {};
      },
      [L, f],
    ),
    e.exports.createElement(
      'div',
      Qs(
        { className: ''.concat(r, '-root') },
        (function (e) {
          var t,
            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          t = !1 === n ? { aria: !0, data: !0, attr: !0 } : !0 === n ? { aria: !0 } : fc({}, n);
          var r = {};
          return (
            Object.keys(e).forEach(function (n) {
              ((t.aria && ('role' === n || vv(n, 'aria-'))) ||
                (t.data && vv(n, 'data-')) ||
                (t.attr && hv.includes(n))) &&
                (r[n] = e[n]);
            }),
            r
          );
        })(t, { data: !0 }),
      ),
      e.exports.createElement(Hx, {
        prefixCls: r,
        visible: k && i,
        motionName: Wx(r, C, S),
        style: fc({ zIndex: o }, O),
        maskProps: T,
      }),
      e.exports.createElement(
        'div',
        Qs(
          {
            tabIndex: -1,
            onKeyDown: function (e) {
              if (u && e.keyCode === mv.ESC) return e.stopPropagation(), void j(e);
              i && e.keyCode === mv.TAB && R.current.changeActive(!e.shiftKey);
            },
            className: sc(''.concat(r, '-wrap'), m),
            ref: _,
            onClick: V,
            role: 'dialog',
            'aria-labelledby': d ? I.current : null,
            style: fc(fc({ zIndex: o }, p), {}, { display: L ? null : 'none' }),
          },
          h,
        ),
        e.exports.createElement(
          Yx,
          Qs({}, t, {
            onMouseDown: function () {
              clearTimeout(D.current), (z.current = !0);
            },
            onMouseUp: function () {
              D.current = setTimeout(function () {
                z.current = !1;
              });
            },
            ref: R,
            closable: w,
            ariaId: I.current,
            prefixCls: r,
            visible: i,
            onClose: j,
            onVisibleChanged: function (e) {
              if (e) {
                var t;
                if (!Pv(_.current, document.activeElement))
                  (M.current = document.activeElement),
                    null === (t = R.current) || void 0 === t || t.focus();
              } else {
                if ((A(!1), k && M.current && c)) {
                  try {
                    M.current.focus({ preventScroll: !0 });
                  } catch (n) {}
                  M.current = null;
                }
                L && (null == g || g());
              }
            },
            motionName: Wx(r, y, b),
          }),
        ),
      ),
    )
  );
}
Yx.displayName = 'Content';
var Xx = function (t) {
  var n = t.visible,
    r = t.getContainer,
    o = t.forceRender,
    a = t.destroyOnClose,
    i = void 0 !== a && a,
    l = t.afterClose,
    u = Cp(e.exports.useState(n), 2),
    s = u[0],
    c = u[1];
  return (
    e.exports.useEffect(
      function () {
        n && c(!0);
      },
      [n],
    ),
    !1 === r
      ? e.exports.createElement(
          Qx,
          Qs({}, t, {
            getOpenCount: function () {
              return 2;
            },
          }),
        )
      : o || !i || s
      ? e.exports.createElement(Ux, { visible: n, forceRender: o, getContainer: r }, function (n) {
          return e.exports.createElement(
            Qx,
            Qs(
              {},
              t,
              {
                destroyOnClose: i,
                afterClose: function () {
                  null == l || l(), c(!1);
                },
              },
              n,
            ),
          );
        })
      : null
  );
};
Xx.displayName = 'Dialog';
var Gx = function (t) {
    var n = e.exports.useRef(!1),
      r = e.exports.useRef(),
      o = Cp(e.exports.useState(!1), 2),
      a = o[0],
      i = o[1];
    e.exports.useEffect(function () {
      var e;
      if (t.autoFocus) {
        var n = r.current;
        e = setTimeout(function () {
          return n.focus();
        });
      }
      return function () {
        e && clearTimeout(e);
      };
    }, []);
    var l = t.type,
      u = t.children,
      s = t.prefixCls,
      c = t.buttonProps;
    return e.exports.createElement(
      Xy,
      Qs(
        {},
        Ky(l),
        {
          onClick: function () {
            var e = t.actionFn,
              r = t.closeModal;
            if (!n.current)
              if (((n.current = !0), e)) {
                var o;
                if (e.length) (o = e(r)), (n.current = !1);
                else if (!(o = e())) return void r();
                !(function (e) {
                  var r = t.closeModal;
                  e &&
                    e.then &&
                    (i(!0),
                    e.then(
                      function () {
                        r.apply(void 0, arguments);
                      },
                      function (e) {
                        console.error(e), i(!1), (n.current = !1);
                      },
                    ));
                })(o);
              } else r();
          },
          loading: a,
          prefixCls: s,
        },
        c,
        { ref: r },
      ),
      u,
    );
  },
  Zx = function (t) {
    var n = t.icon,
      r = t.onCancel,
      o = t.onOk,
      a = t.close,
      i = t.zIndex,
      l = t.afterClose,
      u = t.visible,
      s = t.keyboard,
      c = t.centered,
      f = t.getContainer,
      d = t.maskStyle,
      p = t.okText,
      m = t.okButtonProps,
      h = t.cancelText,
      v = t.cancelButtonProps,
      g = t.direction,
      y = t.prefixCls,
      b = t.rootPrefixCls,
      x = t.bodyStyle,
      w = t.closable,
      E = void 0 !== w && w,
      k = t.closeIcon,
      C = t.modalRender,
      S = t.focusTriggerAfterClose;
    ep(
      !('string' == typeof n && n.length > 2),
      'Modal',
      '`icon` is using ReactNode instead of string naming in v4. Please check `'.concat(
        n,
        '` at https://ant.design/components/icon',
      ),
    );
    var P = t.okType || 'primary',
      N = ''.concat(y, '-confirm'),
      O = !('okCancel' in t) || t.okCancel,
      T = t.width || 416,
      M = t.style || {},
      _ = void 0 === t.mask || t.mask,
      R = void 0 !== t.maskClosable && t.maskClosable,
      F = null !== t.autoFocusButton && (t.autoFocusButton || 'ok'),
      L = sc(
        N,
        ''.concat(N, '-').concat(t.type),
        Xs({}, ''.concat(N, '-rtl'), 'rtl' === g),
        t.className,
      ),
      A =
        O &&
        e.exports.createElement(
          Gx,
          {
            actionFn: r,
            closeModal: a,
            autoFocus: 'cancel' === F,
            buttonProps: v,
            prefixCls: ''.concat(b, '-btn'),
          },
          h,
        );
    return e.exports.createElement(
      pw,
      {
        prefixCls: y,
        className: L,
        wrapClassName: sc(Xs({}, ''.concat(N, '-centered'), !!t.centered)),
        onCancel: function () {
          return a({ triggerCancel: !0 });
        },
        visible: u,
        title: '',
        footer: '',
        transitionName: ey(b, 'zoom', t.transitionName),
        maskTransitionName: ey(b, 'fade', t.maskTransitionName),
        mask: _,
        maskClosable: R,
        maskStyle: d,
        style: M,
        width: T,
        zIndex: i,
        afterClose: l,
        keyboard: s,
        centered: c,
        getContainer: f,
        closable: E,
        closeIcon: k,
        modalRender: C,
        focusTriggerAfterClose: S,
      },
      e.exports.createElement(
        'div',
        { className: ''.concat(N, '-body-wrapper') },
        e.exports.createElement(
          dv,
          { prefixCls: b },
          e.exports.createElement(
            'div',
            { className: ''.concat(N, '-body'), style: x },
            n,
            void 0 === t.title
              ? null
              : e.exports.createElement('span', { className: ''.concat(N, '-title') }, t.title),
            e.exports.createElement('div', { className: ''.concat(N, '-content') }, t.content),
          ),
        ),
        e.exports.createElement(
          'div',
          { className: ''.concat(N, '-btns') },
          A,
          e.exports.createElement(
            Gx,
            {
              type: P,
              actionFn: o,
              closeModal: a,
              autoFocus: 'ok' === F,
              buttonProps: m,
              prefixCls: ''.concat(b, '-btn'),
            },
            p,
          ),
        ),
      ),
    );
  },
  Jx = function (t, n) {
    var r = t.afterClose,
      o = t.config,
      a = Cp(e.exports.useState(!0), 2),
      i = a[0],
      l = a[1],
      u = Cp(e.exports.useState(o), 2),
      s = u[0],
      c = u[1],
      f = e.exports.useContext(yp),
      d = f.direction,
      p = f.getPrefixCls,
      m = p('modal'),
      h = p();
    function v() {
      l(!1);
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      var r = t.some(function (e) {
        return e && e.triggerCancel;
      });
      s.onCancel && r && s.onCancel();
    }
    return (
      e.exports.useImperativeHandle(n, function () {
        return {
          destroy: v,
          update: function (e) {
            c(function (t) {
              return Qs(Qs({}, t), e);
            });
          },
        };
      }),
      e.exports.createElement(
        cp,
        { componentName: 'Modal', defaultLocale: op.Modal },
        function (t) {
          return e.exports.createElement(
            Zx,
            Qs({ prefixCls: m, rootPrefixCls: h }, s, {
              close: v,
              visible: i,
              afterClose: r,
              okText: s.okText || (s.okCancel ? t.okText : t.justOkText),
              direction: d,
              cancelText: s.cancelText || t.cancelText,
            }),
          );
        },
      )
    );
  },
  ew = e.exports.forwardRef(Jx),
  tw = '';
function nw(t) {
  var n = document.createElement('div');
  document.body.appendChild(n);
  var r = Qs(Qs({}, t), { close: i, visible: !0 });
  function o() {
    var e = z.exports.unmountComponentAtNode(n);
    e && n.parentNode && n.parentNode.removeChild(n);
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
    var l = o.some(function (e) {
      return e && e.triggerCancel;
    });
    t.onCancel && l && t.onCancel.apply(t, o);
    for (var u = 0; u < fw.length; u++) {
      var s = fw[u];
      if (s === i) {
        fw.splice(u, 1);
        break;
      }
    }
  }
  function a(t) {
    var r = t.okText,
      o = t.cancelText,
      a = t.prefixCls,
      i = (function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      })(t, ['okText', 'cancelText', 'prefixCls']);
    setTimeout(function () {
      var t = lp(),
        l = (0, cv().getPrefixCls)(void 0, tw),
        u = a || ''.concat(l, '-modal');
      z.exports.render(
        e.exports.createElement(
          Zx,
          Qs({}, i, {
            prefixCls: u,
            rootPrefixCls: l,
            okText: r || (i.okCancel ? t.okText : t.justOkText),
            cancelText: o || t.cancelText,
          }),
        ),
        n,
      );
    });
  }
  function i() {
    for (var e = this, n = arguments.length, i = new Array(n), l = 0; l < n; l++)
      i[l] = arguments[l];
    a(
      (r = Qs(Qs({}, r), {
        visible: !1,
        afterClose: function () {
          'function' == typeof t.afterClose && t.afterClose(), o.apply(e, i);
        },
      })),
    );
  }
  return (
    a(r),
    fw.push(i),
    {
      destroy: i,
      update: function (e) {
        a((r = 'function' == typeof e ? e(r) : Qs(Qs({}, r), e)));
      },
    }
  );
}
function rw(t) {
  return Qs(Qs({ icon: e.exports.createElement(Hh, null), okCancel: !1 }, t), { type: 'warning' });
}
function ow(t) {
  return Qs(Qs({ icon: e.exports.createElement(Bh, null), okCancel: !1 }, t), { type: 'info' });
}
function aw(t) {
  return Qs(Qs({ icon: e.exports.createElement(Ih, null), okCancel: !1 }, t), { type: 'success' });
}
function iw(t) {
  return Qs(Qs({ icon: e.exports.createElement(Dh, null), okCancel: !1 }, t), { type: 'error' });
}
function lw(t) {
  return Qs(Qs({ icon: e.exports.createElement(Hh, null), okCancel: !0 }, t), { type: 'confirm' });
}
var uw = 0,
  sw = e.exports.memo(
    e.exports.forwardRef(function (t, n) {
      var r = (function () {
          var t = Cp(e.exports.useState([]), 2),
            n = t[0],
            r = t[1];
          return [
            n,
            e.exports.useCallback(function (e) {
              return (
                r(function (t) {
                  return [].concat(hd(t), [e]);
                }),
                function () {
                  r(function (t) {
                    return t.filter(function (t) {
                      return t !== e;
                    });
                  });
                }
              );
            }, []),
          ];
        })(),
        o = Cp(r, 2),
        a = o[0],
        i = o[1];
      return (
        e.exports.useImperativeHandle(
          n,
          function () {
            return { patchElement: i };
          },
          [],
        ),
        e.exports.createElement(e.exports.Fragment, null, a)
      );
    }),
  );
var cw,
  fw = [];
xx() &&
  document.documentElement.addEventListener(
    'click',
    function (e) {
      (cw = { x: e.pageX, y: e.pageY }),
        setTimeout(function () {
          cw = null;
        }, 100);
    },
    !0,
  );
var dw = function (t) {
  var n,
    r = e.exports.useContext(yp),
    o = r.getPopupContainer,
    a = r.getPrefixCls,
    i = r.direction,
    l = function (e) {
      var n = t.onCancel;
      null == n || n(e);
    },
    u = function (e) {
      var n = t.onOk;
      null == n || n(e);
    },
    s = function (n) {
      var r = t.okText,
        o = t.okType,
        a = t.cancelText,
        i = t.confirmLoading;
      return e.exports.createElement(
        e.exports.Fragment,
        null,
        e.exports.createElement(Xy, Qs({ onClick: l }, t.cancelButtonProps), a || n.cancelText),
        e.exports.createElement(
          Xy,
          Qs({}, Ky(o), { loading: i, onClick: u }, t.okButtonProps),
          r || n.okText,
        ),
      );
    },
    c = t.prefixCls,
    f = t.footer,
    d = t.visible,
    p = t.wrapClassName,
    m = t.centered,
    h = t.getContainer,
    v = t.closeIcon,
    g = t.focusTriggerAfterClose,
    y = void 0 === g || g,
    b = (function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      }
      return n;
    })(t, [
      'prefixCls',
      'footer',
      'visible',
      'wrapClassName',
      'centered',
      'getContainer',
      'closeIcon',
      'focusTriggerAfterClose',
    ]),
    x = a('modal', c),
    w = a(),
    E = e.exports.createElement(cp, { componentName: 'Modal', defaultLocale: lp() }, s),
    k = e.exports.createElement(
      'span',
      { className: ''.concat(x, '-close-x') },
      v || e.exports.createElement(Fh, { className: ''.concat(x, '-close-icon') }),
    ),
    C = sc(
      p,
      (Xs((n = {}), ''.concat(x, '-centered'), !!m),
      Xs(n, ''.concat(x, '-wrap-rtl'), 'rtl' === i),
      n),
    );
  return e.exports.createElement(
    Xx,
    Qs({}, b, {
      getContainer: void 0 === h ? o : h,
      prefixCls: x,
      wrapClassName: C,
      footer: void 0 === f ? E : f,
      visible: d,
      mousePosition: cw,
      onClose: l,
      closeIcon: k,
      focusTriggerAfterClose: y,
      transitionName: ey(w, 'zoom', t.transitionName),
      maskTransitionName: ey(w, 'fade', t.maskTransitionName),
    }),
  );
};
(dw.useModal = function () {
  var t = e.exports.useRef(null),
    n = Cp(e.exports.useState([]), 2),
    r = n[0],
    o = n[1];
  e.exports.useEffect(
    function () {
      r.length &&
        (hd(r).forEach(function (e) {
          e();
        }),
        o([]));
    },
    [r],
  );
  var a = e.exports.useCallback(function (n) {
    return function (r) {
      var a;
      uw += 1;
      var i,
        l = e.exports.createRef(),
        u = e.exports.createElement(ew, {
          key: 'modal-'.concat(uw),
          config: n(r),
          ref: l,
          afterClose: function () {
            i();
          },
        });
      return (
        (i = null === (a = t.current) || void 0 === a ? void 0 : a.patchElement(u)),
        {
          destroy: function () {
            function e() {
              var e;
              null === (e = l.current) || void 0 === e || e.destroy();
            }
            l.current
              ? e()
              : o(function (t) {
                  return [].concat(hd(t), [e]);
                });
          },
          update: function (e) {
            function t() {
              var t;
              null === (t = l.current) || void 0 === t || t.update(e);
            }
            l.current
              ? t()
              : o(function (e) {
                  return [].concat(hd(e), [t]);
                });
          },
        }
      );
    };
  }, []);
  return [
    e.exports.useMemo(function () {
      return { info: a(ow), success: a(aw), error: a(iw), warning: a(rw), confirm: a(lw) };
    }, []),
    e.exports.createElement(sw, { ref: t }),
  ];
}),
  (dw.defaultProps = { width: 520, confirmLoading: !1, visible: !1, okType: 'primary' });
var pw = dw;
function mw(e) {
  return nw(rw(e));
}
var hw = pw;
(hw.info = function (e) {
  return nw(ow(e));
}),
  (hw.success = function (e) {
    return nw(aw(e));
  }),
  (hw.error = function (e) {
    return nw(iw(e));
  }),
  (hw.warning = mw),
  (hw.warn = mw),
  (hw.confirm = function (e) {
    return nw(lw(e));
  }),
  (hw.destroyAll = function () {
    for (; fw.length; ) {
      var e = fw.pop();
      e && e();
    }
  }),
  (hw.config = function (e) {
    var t = e.rootPrefixCls;
    ep(!1, 'Modal', 'Modal.config is deprecated. Please use ConfigProvider.config instead.'),
      (tw = t);
  });
var vw = hw,
  gw = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0010-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 003.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 00-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 01887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 01-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 01115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 01540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 00540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 01-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 00-81.5 55.9A373.86 373.86 0 01137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 01-107.6 69.2z',
          },
        },
      ],
    },
    name: 'global',
    theme: 'outlined',
  },
  yw = function (t, n) {
    return e.exports.createElement(Zm, Object.assign({}, t, { ref: n, icon: gw }));
  };
yw.displayName = 'GlobalOutlined';
var bw = e.exports.forwardRef(yw),
  xw = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z',
          },
        },
      ],
    },
    name: 'setting',
    theme: 'outlined',
  },
  ww = function (t, n) {
    return e.exports.createElement(Zm, Object.assign({}, t, { ref: n, icon: xw }));
  };
ww.displayName = 'SettingOutlined';
var Ew = e.exports.forwardRef(ww),
  kw = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z',
          },
        },
      ],
    },
    name: 'thunderbolt',
    theme: 'outlined',
  },
  Cw = function (t, n) {
    return e.exports.createElement(Zm, Object.assign({}, t, { ref: n, icon: kw }));
  };
Cw.displayName = 'ThunderboltOutlined';
var Sw = e.exports.forwardRef(Cw);
export {
  Xy as B,
  Nx as C,
  bw as G,
  vw as M,
  j as R,
  Ew as S,
  Sw as T,
  kx as a,
  yx as b,
  Ys as c,
  e as r,
};
