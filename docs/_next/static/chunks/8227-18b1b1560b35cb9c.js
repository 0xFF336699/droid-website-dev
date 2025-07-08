"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8227],{

/***/ 8643:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var _global_process, _global_process1;
module.exports = ((_global_process = __webpack_require__.g.process) == null ? void 0 : _global_process.env) && typeof ((_global_process1 = __webpack_require__.g.process) == null ? void 0 : _global_process1.env) === 'object' ? __webpack_require__.g.process : __webpack_require__(69388); //# sourceMappingURL=process.js.map


/***/ }),

/***/ 9767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Avatar_Avatar)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(61541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/internal/svg-icons/Person.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const Person = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person'));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Avatar/avatarClasses.js


function getAvatarUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiAvatar', slot);
}
const avatarClasses = (0,generateUtilityClasses/* default */.A)('MuiAvatar', [
    'root',
    'colorDefault',
    'circular',
    'rounded',
    'square',
    'img',
    'fallback'
]);
/* harmony default export */ const Avatar_avatarClasses = ((/* unused pure expression or super */ null && (avatarClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(98005);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Avatar/Avatar.js
/* __next_internal_client_entry_do_not_use__ default auto */ 










const useUtilityClasses = (ownerState)=>{
    const { classes, variant, colorDefault } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            colorDefault && 'colorDefault'
        ],
        img: [
            'img'
        ],
        fallback: [
            'fallback'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getAvatarUtilityClass, classes);
};
const AvatarRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiAvatar',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.variant],
            ownerState.colorDefault && styles.colorDefault
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: 40,
        height: 40,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(20),
        lineHeight: 1,
        borderRadius: '50%',
        overflow: 'hidden',
        userSelect: 'none',
        variants: [
            {
                props: {
                    variant: 'rounded'
                },
                style: {
                    borderRadius: (theme.vars || theme).shape.borderRadius
                }
            },
            {
                props: {
                    variant: 'square'
                },
                style: {
                    borderRadius: 0
                }
            },
            {
                props: {
                    colorDefault: true
                },
                style: {
                    color: (theme.vars || theme).palette.background.default,
                    ...theme.vars ? {
                        backgroundColor: theme.vars.palette.Avatar.defaultBg
                    } : {
                        backgroundColor: theme.palette.grey[400],
                        ...theme.applyStyles('dark', {
                            backgroundColor: theme.palette.grey[600]
                        })
                    }
                }
            }
        ]
    };
}));
const AvatarImg = (0,styled/* default */.Ay)('img', {
    name: 'MuiAvatar',
    slot: 'Img',
    overridesResolver: (props, styles)=>styles.img
})({
    width: '100%',
    height: '100%',
    textAlign: 'center',
    // Handle non-square image.
    objectFit: 'cover',
    // Hide alt text.
    color: 'transparent',
    // Hide the image broken icon, only works on Chrome.
    textIndent: 10000
});
const AvatarFallback = (0,styled/* default */.Ay)(Person, {
    name: 'MuiAvatar',
    slot: 'Fallback',
    overridesResolver: (props, styles)=>styles.fallback
})({
    width: '75%',
    height: '75%'
});
function useLoaded(param) {
    let { crossOrigin, referrerPolicy, src, srcSet } = param;
    const [loaded, setLoaded] = react.useState(false);
    react.useEffect(()=>{
        if (!src && !srcSet) {
            return undefined;
        }
        setLoaded(false);
        let active = true;
        const image = new Image();
        image.onload = ()=>{
            if (!active) {
                return;
            }
            setLoaded('loaded');
        };
        image.onerror = ()=>{
            if (!active) {
                return;
            }
            setLoaded('error');
        };
        image.crossOrigin = crossOrigin;
        image.referrerPolicy = referrerPolicy;
        image.src = src;
        if (srcSet) {
            image.srcset = srcSet;
        }
        return ()=>{
            active = false;
        };
    }, [
        crossOrigin,
        referrerPolicy,
        src,
        srcSet
    ]);
    return loaded;
}
const Avatar = /*#__PURE__*/ react.forwardRef(function Avatar(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiAvatar'
    });
    const { alt, children: childrenProp, className, component = 'div', slots = {}, slotProps = {}, imgProps, sizes, src, srcSet, variant = 'circular', ...other } = props;
    let children = null;
    const ownerState = {
        ...props,
        component,
        variant
    };
    // Use a hook instead of onError on the img element to support server-side rendering.
    const loaded = useLoaded({
        ...imgProps,
        ...typeof slotProps.img === 'function' ? slotProps.img(ownerState) : slotProps.img,
        src,
        srcSet
    });
    const hasImg = src || srcSet;
    const hasImgNotFailing = hasImg && loaded !== 'error';
    ownerState.colorDefault = !hasImgNotFailing;
    // This issue explains why this is required: https://github.com/mui/material-ui/issues/42184
    delete ownerState.ownerState;
    const classes = useUtilityClasses(ownerState);
    const [ImgSlot, imgSlotProps] = (0,useSlot/* default */.A)('img', {
        className: classes.img,
        elementType: AvatarImg,
        externalForwardedProps: {
            slots,
            slotProps: {
                img: {
                    ...imgProps,
                    ...slotProps.img
                }
            }
        },
        additionalProps: {
            alt,
            src,
            srcSet,
            sizes
        },
        ownerState
    });
    if (hasImgNotFailing) {
        children = /*#__PURE__*/ (0,jsx_runtime.jsx)(ImgSlot, {
            ...imgSlotProps
        });
    // We only render valid children, non valid children are rendered with a fallback
    // We consider that invalid children are all falsy values, except 0, which is valid.
    } else if (!!childrenProp || childrenProp === 0) {
        children = childrenProp;
    } else if (hasImg && alt) {
        children = alt[0];
    } else {
        children = /*#__PURE__*/ (0,jsx_runtime.jsx)(AvatarFallback, {
            ownerState: ownerState,
            className: classes.fallback
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AvatarRoot, {
        as: component,
        className: (0,clsx/* default */.A)(classes.root, className),
        ref: ref,
        ...other,
        ownerState: ownerState,
        children: children
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Avatar_Avatar = (Avatar);


/***/ }),

/***/ 13873:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * This function lets you dynamically import a component.
 * It uses [React.lazy()](https://react.dev/reference/react/lazy) with [Suspense](https://react.dev/reference/react/Suspense) under the hood.
 *
 * Read more: [Next.js Docs: `next/dynamic`](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#nextdynamic)
 */ default: function() {
        return dynamic;
    },
    noSSR: function() {
        return noSSR;
    }
});
const _interop_require_default = __webpack_require__(34007);
const _jsxruntime = __webpack_require__(94513);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(94285));
const _loadablesharedruntime = /*#__PURE__*/ _interop_require_default._(__webpack_require__(83286));
const isServerSide = "object" === 'undefined';
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    return {
        default: (mod == null ? void 0 : mod.default) || mod
    };
}
function noSSR(LoadableInitializer, loadableOptions) {
    // Removing webpack and modules means react-loadable won't try preloading
    delete loadableOptions.webpack;
    delete loadableOptions.modules;
    // This check is necessary to prevent react-loadable from initializing on the server
    if (!isServerSide) {
        return LoadableInitializer(loadableOptions);
    }
    const Loading = loadableOptions.loading;
    // This will only be rendered on the server side
    return ()=>/*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            error: null,
            isLoading: true,
            pastDelay: false,
            timedOut: false
        });
}
function dynamic(dynamicOptions, options) {
    let loadableFn = _loadablesharedruntime.default;
    let loadableOptions = {
        // A loading component is not required, so we default it
        loading: (param)=>{
            let { error, isLoading, pastDelay } = param;
            if (!pastDelay) return null;
            if (false) {}
            return null;
        }
    };
    // Support for direct import(), eg: dynamic(import('../hello-world'))
    // Note that this is only kept for the edge case where someone is passing in a promise as first argument
    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
    // To make sure we don't execute the import without rendering first
    if (dynamicOptions instanceof Promise) {
        loadableOptions.loader = ()=>dynamicOptions;
    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))
    } else if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
    } else if (typeof dynamicOptions === 'object') {
        loadableOptions = {
            ...loadableOptions,
            ...dynamicOptions
        };
    }
    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})
    loadableOptions = {
        ...loadableOptions,
        ...options
    };
    const loaderFn = loadableOptions.loader;
    const loader = ()=>loaderFn != null ? loaderFn().then(convertModule) : Promise.resolve(convertModule(()=>null));
    // coming from build/babel/plugins/react-loadable-plugin.js
    if (loadableOptions.loadableGenerated) {
        loadableOptions = {
            ...loadableOptions,
            ...loadableOptions.loadableGenerated
        };
        delete loadableOptions.loadableGenerated;
    }
    // support for disabling server side rendering, eg: dynamic(() => import('../hello-world'), {ssr: false}).
    if (typeof loadableOptions.ssr === 'boolean' && !loadableOptions.ssr) {
        delete loadableOptions.webpack;
        delete loadableOptions.modules;
        return noSSR(loadableFn, loadableOptions);
    }
    return loadableFn({
        ...loadableOptions,
        loader: loader
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dynamic.js.map


/***/ }),

/***/ 15960:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "LoadableContext", ({
    enumerable: true,
    get: function() {
        return LoadableContext;
    }
}));
const _interop_require_default = __webpack_require__(34007);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(94285));
const LoadableContext = _react.default.createContext(null);
if (false) {} //# sourceMappingURL=loadable-context.shared-runtime.js.map


/***/ }),

/***/ 24675:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aY: () => (/* binding */ jr)
/* harmony export */ });
/* unused harmony exports GroupedTableVirtuoso, GroupedVirtuoso, LogLevel, TableVirtuoso, VirtuosoGrid, VirtuosoGridMockContext, VirtuosoMockContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95088);



const we = 0, zt = 1, qt = 2, kn = 4;
function cn(t) {
  return () => t;
}
function uo(t) {
  t();
}
function ne(t, e) {
  return (n) => t(e(n));
}
function un(t, e) {
  return () => t(e);
}
function ao(t, e) {
  return (n) => t(e, n);
}
function Me(t) {
  return t !== void 0;
}
function fo(...t) {
  return () => {
    t.map(uo);
  };
}
function Yt() {
}
function ve(t, e) {
  return e(t), t;
}
function mo(t, e) {
  return e(t);
}
function X(...t) {
  return t;
}
function K(t, e) {
  return t(zt, e);
}
function G(t, e) {
  t(we, e);
}
function We(t) {
  t(qt);
}
function st(t) {
  return t(kn);
}
function O(t, e) {
  return K(t, ao(e, we));
}
function bt(t, e) {
  const n = t(zt, (o) => {
    n(), e(o);
  });
  return n;
}
function an(t) {
  let e, n;
  return (o) => (r) => {
    e = r, n && clearTimeout(n), n = setTimeout(() => {
      o(e);
    }, t);
  };
}
function Fn(t, e) {
  return t === e;
}
function Z(t = Fn) {
  let e;
  return (n) => (o) => {
    t(e, o) || (e = o, n(o));
  };
}
function P(t) {
  return (e) => (n) => {
    t(n) && e(n);
  };
}
function E(t) {
  return (e) => ne(e, t);
}
function yt(t) {
  return (e) => () => {
    e(t);
  };
}
function x(t, ...e) {
  const n = po(...e);
  return (o, r) => {
    switch (o) {
      case qt:
        We(t);
        return;
      case zt:
        return K(t, n(r));
    }
  };
}
function Rt(t, e) {
  return (n) => (o) => {
    n(e = t(e, o));
  };
}
function jt(t) {
  return (e) => (n) => {
    t > 0 ? t-- : e(n);
  };
}
function Lt(t) {
  let e = null, n;
  return (o) => (r) => {
    e = r, !n && (n = setTimeout(() => {
      n = void 0, o(e);
    }, t));
  };
}
function _(...t) {
  const e = new Array(t.length);
  let n = 0, o = null;
  const r = Math.pow(2, t.length) - 1;
  return t.forEach((s, i) => {
    const l = Math.pow(2, i);
    K(s, (c) => {
      const a = n;
      n = n | l, e[i] = c, a !== r && n === r && o && (o(), o = null);
    });
  }), (s) => (i) => {
    const l = () => {
      s([i].concat(e));
    };
    n === r ? l() : o = l;
  };
}
function po(...t) {
  return (e) => t.reduceRight(mo, e);
}
function ho(t) {
  let e, n;
  const o = () => e == null ? void 0 : e();
  return function(r, s) {
    switch (r) {
      case zt:
        return s ? n === s ? void 0 : (o(), n = s, e = K(t, s), e) : (o(), Yt);
      case qt:
        o(), n = null;
        return;
    }
  };
}
function C(t) {
  let e = t;
  const n = $();
  return (o, r) => {
    switch (o) {
      case we:
        e = r;
        break;
      case zt: {
        r(e);
        break;
      }
      case kn:
        return e;
    }
    return n(o, r);
  };
}
function ct(t, e) {
  return ve(C(e), (n) => O(t, n));
}
function $() {
  const t = [];
  return (e, n) => {
    switch (e) {
      case we:
        t.slice().forEach((o) => {
          o(n);
        });
        return;
      case qt:
        t.splice(0, t.length);
        return;
      case zt:
        return t.push(n), () => {
          const o = t.indexOf(n);
          o > -1 && t.splice(o, 1);
        };
    }
  };
}
function ht(t) {
  return ve($(), (e) => O(t, e));
}
function U(t, e = [], { singleton: n } = { singleton: !0 }) {
  return {
    constructor: t,
    dependencies: e,
    id: go(),
    singleton: n
  };
}
const go = () => Symbol();
function Io(t) {
  const e = /* @__PURE__ */ new Map(), n = ({ constructor: o, dependencies: r, id: s, singleton: i }) => {
    if (i && e.has(s))
      return e.get(s);
    const l = o(r.map((c) => n(c)));
    return i && e.set(s, l), l;
  };
  return n(t);
}
function rt(...t) {
  const e = $(), n = new Array(t.length);
  let o = 0;
  const r = Math.pow(2, t.length) - 1;
  return t.forEach((s, i) => {
    const l = Math.pow(2, i);
    K(s, (c) => {
      n[i] = c, o = o | l, o === r && G(e, n);
    });
  }), function(s, i) {
    switch (s) {
      case qt: {
        We(e);
        return;
      }
      case zt:
        return o === r && i(n), K(e, i);
    }
  };
}
function A(t, e = Fn) {
  return x(t, Z(e));
}
function dn(...t) {
  return function(e, n) {
    switch (e) {
      case qt:
        return;
      case zt:
        return fo(...t.map((o) => K(o, n)));
    }
  };
}
var mt = /* @__PURE__ */ ((t) => (t[t.DEBUG = 0] = "DEBUG", t[t.INFO = 1] = "INFO", t[t.WARN = 2] = "WARN", t[t.ERROR = 3] = "ERROR", t))(mt || {});
const So = {
  0: "debug",
  3: "error",
  1: "log",
  2: "warn"
}, xo = () => typeof globalThis > "u" ? window : globalThis, Vt = U(
  () => {
    const t = C(
      3
      /* ERROR */
    );
    return {
      log: C((n, o, r = 1) => {
        var i;
        const s = (i = xo().VIRTUOSO_LOG_LEVEL) != null ? i : st(t);
        r >= s && console[So[r]](
          "%creact-virtuoso: %c%s %o",
          "color: #0253b3; font-weight: bold",
          "color: initial",
          n,
          o
        );
      }),
      logLevel: t
    };
  },
  [],
  { singleton: !0 }
);
function Ht(t, e, n) {
  return Ge(t, e, n).callbackRef;
}
function Ge(t, e, n) {
  const o = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  let r = (i) => {
  };
  const s = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => typeof ResizeObserver < "u" ? new ResizeObserver((i) => {
    const l = () => {
      const c = i[0].target;
      c.offsetParent !== null && t(c);
    };
    n ? l() : requestAnimationFrame(l);
  }) : null, [t, n]);
  return r = (i) => {
    i && e ? (s == null || s.observe(i), o.current = i) : (o.current && (s == null || s.unobserve(o.current)), o.current = null);
  }, { callbackRef: r, ref: o };
}
function On(t, e, n, o, r, s, i, l, c) {
  const a = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(
    (p) => {
      const S = To(p.children, e, l ? "offsetWidth" : "offsetHeight", r);
      let g = p.parentElement;
      for (; !g.dataset.virtuosoScroller; )
        g = g.parentElement;
      const h = g.lastElementChild.dataset.viewportType === "window";
      let w;
      h && (w = g.ownerDocument.defaultView);
      const v = i ? l ? i.scrollLeft : i.scrollTop : h ? l ? w.scrollX || w.document.documentElement.scrollLeft : w.scrollY || w.document.documentElement.scrollTop : l ? g.scrollLeft : g.scrollTop, m = i ? l ? i.scrollWidth : i.scrollHeight : h ? l ? w.document.documentElement.scrollWidth : w.document.documentElement.scrollHeight : l ? g.scrollWidth : g.scrollHeight, d = i ? l ? i.offsetWidth : i.offsetHeight : h ? l ? w.innerWidth : w.innerHeight : l ? g.offsetWidth : g.offsetHeight;
      o({
        scrollHeight: m,
        scrollTop: Math.max(v, 0),
        viewportHeight: d
      }), s == null || s(
        l ? fn("column-gap", getComputedStyle(p).columnGap, r) : fn("row-gap", getComputedStyle(p).rowGap, r)
      ), S !== null && t(S);
    },
    [t, e, r, s, i, o, l]
  );
  return Ge(a, n, c);
}
function To(t, e, n, o) {
  const r = t.length;
  if (r === 0)
    return null;
  const s = [];
  for (let i = 0; i < r; i++) {
    const l = t.item(i);
    if (l.dataset.index === void 0)
      continue;
    const c = parseInt(l.dataset.index), a = parseFloat(l.dataset.knownSize), p = e(l, n);
    if (p === 0 && o("Zero-sized element, this should not happen", { child: l }, mt.ERROR), p === a)
      continue;
    const S = s[s.length - 1];
    s.length === 0 || S.size !== p || S.endIndex !== c - 1 ? s.push({ endIndex: c, size: p, startIndex: c }) : s[s.length - 1].endIndex++;
  }
  return s;
}
function fn(t, e, n) {
  return e !== "normal" && !(e != null && e.endsWith("px")) && n(`${t} was not resolved to pixel value correctly`, e, mt.WARN), e === "normal" ? 0 : parseInt(e != null ? e : "0", 10);
}
function _e(t, e, n) {
  const o = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null), r = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(
    (c) => {
      if (!(c != null && c.offsetParent))
        return;
      const a = c.getBoundingClientRect(), p = a.width;
      let S, g;
      if (e) {
        const h = e.getBoundingClientRect(), w = a.top - h.top;
        g = h.height - Math.max(0, w), S = w + e.scrollTop;
      } else {
        const h = i.current.ownerDocument.defaultView;
        g = h.innerHeight - Math.max(0, a.top), S = a.top + h.scrollY;
      }
      o.current = {
        offsetTop: S,
        visibleHeight: g,
        visibleWidth: p
      }, t(o.current);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, e]
  ), { callbackRef: s, ref: i } = Ge(r, !0, n), l = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => {
    r(i.current);
  }, [r, i]);
  return react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    var c;
    if (e) {
      e.addEventListener("scroll", l);
      const a = new ResizeObserver(() => {
        requestAnimationFrame(l);
      });
      return a.observe(e), () => {
        e.removeEventListener("scroll", l), a.unobserve(e);
      };
    } else {
      const a = (c = i.current) == null ? void 0 : c.ownerDocument.defaultView;
      return a == null || a.addEventListener("scroll", l), a == null || a.addEventListener("resize", l), () => {
        a == null || a.removeEventListener("scroll", l), a == null || a.removeEventListener("resize", l);
      };
    }
  }, [l, e, i]), s;
}
const at = U(
  () => {
    const t = $(), e = $(), n = C(0), o = $(), r = C(0), s = $(), i = $(), l = C(0), c = C(0), a = C(0), p = C(0), S = $(), g = $(), h = C(!1), w = C(!1), v = C(!1);
    return O(
      x(
        t,
        E(({ scrollTop: m }) => m)
      ),
      e
    ), O(
      x(
        t,
        E(({ scrollHeight: m }) => m)
      ),
      i
    ), O(e, r), {
      deviation: n,
      fixedFooterHeight: a,
      fixedHeaderHeight: c,
      footerHeight: p,
      headerHeight: l,
      horizontalDirection: w,
      scrollBy: g,
      // input
      scrollContainerState: t,
      scrollHeight: i,
      scrollingInProgress: h,
      // signals
      scrollTo: S,
      scrollTop: e,
      skipAnimationFrameInResizeObserver: v,
      smoothScrollTargetReached: o,
      // state
      statefulScrollTop: r,
      viewportHeight: s
    };
  },
  [],
  { singleton: !0 }
), oe = { lvl: 0 };
function Ln(t, e) {
  const n = t.length;
  if (n === 0)
    return [];
  let { index: o, value: r } = e(t[0]);
  const s = [];
  for (let i = 1; i < n; i++) {
    const { index: l, value: c } = e(t[i]);
    s.push({ end: l - 1, start: o, value: r }), o = l, r = c;
  }
  return s.push({ end: 1 / 0, start: o, value: r }), s;
}
function j(t) {
  return t === oe;
}
function re(t, e) {
  if (!j(t))
    return e === t.k ? t.v : e < t.k ? re(t.l, e) : re(t.r, e);
}
function Ct(t, e, n = "k") {
  if (j(t))
    return [-1 / 0, void 0];
  if (Number(t[n]) === e)
    return [t.k, t.v];
  if (Number(t[n]) < e) {
    const o = Ct(t.r, e, n);
    return o[0] === -1 / 0 ? [t.k, t.v] : o;
  }
  return Ct(t.l, e, n);
}
function pt(t, e, n) {
  return j(t) ? Pn(e, n, 1) : e === t.k ? ot(t, { k: e, v: n }) : e < t.k ? mn(ot(t, { l: pt(t.l, e, n) })) : mn(ot(t, { r: pt(t.r, e, n) }));
}
function Kt() {
  return oe;
}
function ye(t, e, n) {
  if (j(t))
    return [];
  const o = Ct(t, e)[0];
  return Co(ze(t, o, n));
}
function Le(t, e) {
  if (j(t)) return oe;
  const { k: n, l: o, r } = t;
  if (e === n) {
    if (j(o))
      return r;
    if (j(r))
      return o;
    {
      const [s, i] = Vn(o);
      return ge(ot(t, { k: s, l: zn(o), v: i }));
    }
  } else return e < n ? ge(ot(t, { l: Le(o, e) })) : ge(ot(t, { r: Le(r, e) }));
}
function Gt(t) {
  return j(t) ? [] : [...Gt(t.l), { k: t.k, v: t.v }, ...Gt(t.r)];
}
function ze(t, e, n) {
  if (j(t))
    return [];
  const { k: o, l: r, r: s, v: i } = t;
  let l = [];
  return o > e && (l = l.concat(ze(r, e, n))), o >= e && o <= n && l.push({ k: o, v: i }), o <= n && (l = l.concat(ze(s, e, n))), l;
}
function ge(t) {
  const { l: e, lvl: n, r: o } = t;
  if (o.lvl >= n - 1 && e.lvl >= n - 1)
    return t;
  if (n > o.lvl + 1) {
    if (Ee(e))
      return An(ot(t, { lvl: n - 1 }));
    if (!j(e) && !j(e.r))
      return ot(e.r, {
        l: ot(e, { r: e.r.l }),
        lvl: n,
        r: ot(t, {
          l: e.r.r,
          lvl: n - 1
        })
      });
    throw new Error("Unexpected empty nodes");
  } else {
    if (Ee(t))
      return Ve(ot(t, { lvl: n - 1 }));
    if (!j(o) && !j(o.l)) {
      const r = o.l, s = Ee(r) ? o.lvl - 1 : o.lvl;
      return ot(r, {
        l: ot(t, {
          lvl: n - 1,
          r: r.l
        }),
        lvl: r.lvl + 1,
        r: Ve(ot(o, { l: r.r, lvl: s }))
      });
    } else
      throw new Error("Unexpected empty nodes");
  }
}
function ot(t, e) {
  return Pn(
    e.k !== void 0 ? e.k : t.k,
    e.v !== void 0 ? e.v : t.v,
    e.lvl !== void 0 ? e.lvl : t.lvl,
    e.l !== void 0 ? e.l : t.l,
    e.r !== void 0 ? e.r : t.r
  );
}
function zn(t) {
  return j(t.r) ? t.l : ge(ot(t, { r: zn(t.r) }));
}
function Ee(t) {
  return j(t) || t.lvl > t.r.lvl;
}
function Vn(t) {
  return j(t.r) ? [t.k, t.v] : Vn(t.r);
}
function Pn(t, e, n, o = oe, r = oe) {
  return { k: t, l: o, lvl: n, r, v: e };
}
function mn(t) {
  return Ve(An(t));
}
function An(t) {
  const { l: e } = t;
  return !j(e) && e.lvl === t.lvl ? ot(e, { r: ot(t, { l: e.r }) }) : t;
}
function Ve(t) {
  const { lvl: e, r: n } = t;
  return !j(n) && !j(n.r) && n.lvl === e && n.r.lvl === e ? ot(n, { l: ot(t, { r: n.l }), lvl: e + 1 }) : t;
}
function Co(t) {
  return Ln(t, ({ k: e, v: n }) => ({ index: e, value: n }));
}
function Mn(t, e) {
  return !!(t && t.startIndex === e.startIndex && t.endIndex === e.endIndex);
}
function se(t, e) {
  return !!(t && t[0] === e[0] && t[1] === e[1]);
}
const Ne = U(
  () => ({ recalcInProgress: C(!1) }),
  [],
  { singleton: !0 }
);
function Wn(t, e, n) {
  return t[Se(t, e, n)];
}
function Se(t, e, n, o = 0) {
  let r = t.length - 1;
  for (; o <= r; ) {
    const s = Math.floor((o + r) / 2), i = t[s], l = n(i, e);
    if (l === 0)
      return s;
    if (l === -1) {
      if (r - o < 2)
        return s - 1;
      r = s - 1;
    } else {
      if (r === o)
        return s;
      o = s + 1;
    }
  }
  throw new Error(`Failed binary finding record in array - ${t.join(",")}, searched for ${e}`);
}
function wo(t, e, n, o) {
  const r = Se(t, e, o), s = Se(t, n, o, r);
  return t.slice(r, s + 1);
}
function wt(t, e) {
  return Math.round(t.getBoundingClientRect()[e]);
}
function Re(t) {
  return !j(t.groupOffsetTree);
}
function De({ index: t }, e) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function vo() {
  return {
    groupIndices: [],
    groupOffsetTree: Kt(),
    lastIndex: 0,
    lastOffset: 0,
    lastSize: 0,
    offsetTree: [],
    sizeTree: Kt()
  };
}
function yo(t, e) {
  let n = j(t) ? 0 : 1 / 0;
  for (const o of e) {
    const { endIndex: r, size: s, startIndex: i } = o;
    if (n = Math.min(n, i), j(t)) {
      t = pt(t, 0, s);
      continue;
    }
    const l = ye(t, i - 1, r + 1);
    if (l.some(Fo(o)))
      continue;
    let c = !1, a = !1;
    for (const { end: p, start: S, value: g } of l)
      c ? (r >= S || s === g) && (t = Le(t, S)) : (a = g !== s, c = !0), p > r && r >= S && g !== s && (t = pt(t, r + 1, g));
    a && (t = pt(t, i, s));
  }
  return [t, n];
}
function Ro(t) {
  return typeof t.groupIndex < "u";
}
function bo({ offset: t }, e) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function ie(t, e, n) {
  if (e.length === 0)
    return 0;
  const { index: o, offset: r, size: s } = Wn(e, t, De), i = t - o, l = s * i + (i - 1) * n + r;
  return l > 0 ? l + n : l;
}
function Gn(t, e) {
  if (!Re(e))
    return t;
  let n = 0;
  for (; e.groupIndices[n] <= t + n; )
    n++;
  return t + n;
}
function _n(t, e, n) {
  if (Ro(t))
    return e.groupIndices[t.groupIndex] + 1;
  {
    const o = t.index === "LAST" ? n : t.index;
    let r = Gn(o, e);
    return r = Math.max(0, r, Math.min(n, r)), r;
  }
}
function Ho(t, e, n, o = 0) {
  return o > 0 && (e = Math.max(e, Wn(t, o, De).offset)), Ln(wo(t, e, n, bo), ko);
}
function Eo(t, [e, n, o, r]) {
  e.length > 0 && o("received item sizes", e, mt.DEBUG);
  const s = t.sizeTree;
  let i = s, l = 0;
  if (n.length > 0 && j(s) && e.length === 2) {
    const g = e[0].size, h = e[1].size;
    i = n.reduce((w, v) => pt(pt(w, v, g), v + 1, h), i);
  } else
    [i, l] = yo(i, e);
  if (i === s)
    return t;
  const { lastIndex: c, lastOffset: a, lastSize: p, offsetTree: S } = Pe(t.offsetTree, l, i, r);
  return {
    groupIndices: n,
    groupOffsetTree: n.reduce((g, h) => pt(g, h, ie(h, S, r)), Kt()),
    lastIndex: c,
    lastOffset: a,
    lastSize: p,
    offsetTree: S,
    sizeTree: i
  };
}
function Bo(t) {
  return Gt(t).map(({ k: e, v: n }, o, r) => {
    const s = r[o + 1];
    return { endIndex: s ? s.k - 1 : 1 / 0, size: n, startIndex: e };
  });
}
function pn(t, e) {
  let n = 0, o = 0;
  for (; n < t; )
    n += e[o + 1] - e[o] - 1, o++;
  return o - (n === t ? 0 : 1);
}
function Pe(t, e, n, o) {
  let r = t, s = 0, i = 0, l = 0, c = 0;
  if (e !== 0) {
    c = Se(r, e - 1, De), l = r[c].offset;
    const p = Ct(n, e - 1);
    s = p[0], i = p[1], r.length && r[c].size === Ct(n, e)[1] && (c -= 1), r = r.slice(0, c + 1);
  } else
    r = [];
  for (const { start: a, value: p } of ye(n, e, 1 / 0)) {
    const S = a - s, g = S * i + l + S * o;
    r.push({
      index: a,
      offset: g,
      size: p
    }), s = a, l = g, i = p;
  }
  return {
    lastIndex: s,
    lastOffset: l,
    lastSize: i,
    offsetTree: r
  };
}
function ko(t) {
  return { index: t.index, value: t };
}
function Fo(t) {
  const { endIndex: e, size: n, startIndex: o } = t;
  return (r) => r.start === o && (r.end === e || r.end === 1 / 0) && r.value === n;
}
const Oo = {
  offsetHeight: "height",
  offsetWidth: "width"
}, Et = U(
  ([{ log: t }, { recalcInProgress: e }]) => {
    const n = $(), o = $(), r = ct(o, 0), s = $(), i = $(), l = C(0), c = C([]), a = C(void 0), p = C(void 0), S = C((I, f) => wt(I, Oo[f])), g = C(void 0), h = C(0), w = vo(), v = ct(
      x(n, _(c, t, h), Rt(Eo, w), Z()),
      w
    ), m = ct(
      x(
        c,
        Z(),
        Rt((I, f) => ({ current: f, prev: I.current }), {
          current: [],
          prev: []
        }),
        E(({ prev: I }) => I)
      ),
      []
    );
    O(
      x(
        c,
        P((I) => I.length > 0),
        _(v, h),
        E(([I, f, b]) => {
          const k = I.reduce((F, L, V) => pt(F, L, ie(L, f.offsetTree, b) || V), Kt());
          return {
            ...f,
            groupIndices: I,
            groupOffsetTree: k
          };
        })
      ),
      v
    ), O(
      x(
        o,
        _(v),
        P(([I, { lastIndex: f }]) => I < f),
        E(([I, { lastIndex: f, lastSize: b }]) => [
          {
            endIndex: f,
            size: b,
            startIndex: I
          }
        ])
      ),
      n
    ), O(a, p);
    const d = ct(
      x(
        a,
        E((I) => I === void 0)
      ),
      !0
    );
    O(
      x(
        p,
        P((I) => I !== void 0 && j(st(v).sizeTree)),
        E((I) => [{ endIndex: 0, size: I, startIndex: 0 }])
      ),
      n
    );
    const u = ht(
      x(
        n,
        _(v),
        Rt(
          ({ sizes: I }, [f, b]) => ({
            changed: b !== I,
            sizes: b
          }),
          { changed: !1, sizes: w }
        ),
        E((I) => I.changed)
      )
    );
    K(
      x(
        l,
        Rt(
          (I, f) => ({ diff: I.prev - f, prev: f }),
          { diff: 0, prev: 0 }
        ),
        E((I) => I.diff)
      ),
      (I) => {
        const { groupIndices: f } = st(v);
        if (I > 0)
          G(e, !0), G(s, I + pn(I, f));
        else if (I < 0) {
          const b = st(m);
          b.length > 0 && (I -= pn(-I, b)), G(i, I);
        }
      }
    ), K(x(l, _(t)), ([I, f]) => {
      I < 0 && f(
        "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
        { firstItemIndex: l },
        mt.ERROR
      );
    });
    const T = ht(s);
    O(
      x(
        s,
        _(v),
        E(([I, f]) => {
          const b = f.groupIndices.length > 0, k = [], F = f.lastSize;
          if (b) {
            const L = re(f.sizeTree, 0);
            let V = 0, D = 0;
            for (; V < I; ) {
              const B = f.groupIndices[D], Y = f.groupIndices.length === D + 1 ? 1 / 0 : f.groupIndices[D + 1] - B - 1;
              k.push({
                endIndex: B,
                size: L,
                startIndex: B
              }), k.push({
                endIndex: B + 1 + Y - 1,
                size: F,
                startIndex: B + 1
              }), D++, V += Y + 1;
            }
            const J = Gt(f.sizeTree);
            return V !== I && J.shift(), J.reduce(
              (B, { k: Y, v: it }) => {
                let dt = B.ranges;
                return B.prevSize !== 0 && (dt = [
                  ...B.ranges,
                  {
                    endIndex: Y + I - 1,
                    size: B.prevSize,
                    startIndex: B.prevIndex
                  }
                ]), {
                  prevIndex: Y + I,
                  prevSize: it,
                  ranges: dt
                };
              },
              {
                prevIndex: I,
                prevSize: 0,
                ranges: k
              }
            ).ranges;
          }
          return Gt(f.sizeTree).reduce(
            (L, { k: V, v: D }) => ({
              prevIndex: V + I,
              prevSize: D,
              ranges: [...L.ranges, { endIndex: V + I - 1, size: L.prevSize, startIndex: L.prevIndex }]
            }),
            {
              prevIndex: 0,
              prevSize: F,
              ranges: []
            }
          ).ranges;
        })
      ),
      n
    );
    const R = ht(
      x(
        i,
        _(v, h),
        E(([I, { offsetTree: f }, b]) => {
          const k = -I;
          return ie(k, f, b);
        })
      )
    );
    return O(
      x(
        i,
        _(v, h),
        E(([I, f, b]) => {
          if (f.groupIndices.length > 0) {
            if (j(f.sizeTree))
              return f;
            let F = Kt();
            const L = st(m);
            let V = 0, D = 0, J = 0;
            for (; V < -I; ) {
              J = L[D];
              const B = L[D + 1] - J - 1;
              D++, V += B + 1;
            }
            if (F = Gt(f.sizeTree).reduce((B, { k: Y, v: it }) => pt(B, Math.max(0, Y + I), it), F), V !== -I) {
              const B = re(f.sizeTree, J);
              F = pt(F, 0, B);
              const Y = Ct(f.sizeTree, -I + 1)[1];
              F = pt(F, 1, Y);
            }
            return {
              ...f,
              sizeTree: F,
              ...Pe(f.offsetTree, 0, F, b)
            };
          } else {
            const F = Gt(f.sizeTree).reduce((L, { k: V, v: D }) => pt(L, Math.max(0, V + I), D), Kt());
            return {
              ...f,
              sizeTree: F,
              ...Pe(f.offsetTree, 0, F, b)
            };
          }
        })
      ),
      v
    ), {
      beforeUnshiftWith: T,
      // input
      data: g,
      defaultItemSize: p,
      firstItemIndex: l,
      fixedItemSize: a,
      gap: h,
      groupIndices: c,
      itemSize: S,
      listRefresh: u,
      shiftWith: i,
      shiftWithOffset: R,
      sizeRanges: n,
      // output
      sizes: v,
      statefulTotalCount: r,
      totalCount: o,
      trackItemSizes: d,
      unshiftWith: s
    };
  },
  X(Vt, Ne),
  { singleton: !0 }
);
function Lo(t) {
  return t.reduce(
    (e, n) => (e.groupIndices.push(e.totalCount), e.totalCount += n + 1, e),
    {
      groupIndices: [],
      totalCount: 0
    }
  );
}
const Nn = U(
  ([{ groupIndices: t, sizes: e, totalCount: n }, { headerHeight: o, scrollTop: r }]) => {
    const s = $(), i = $(), l = ht(x(s, E(Lo)));
    return O(
      x(
        l,
        E((c) => c.totalCount)
      ),
      n
    ), O(
      x(
        l,
        E((c) => c.groupIndices)
      ),
      t
    ), O(
      x(
        rt(r, e, o),
        P(([c, a]) => Re(a)),
        E(([c, a, p]) => Ct(a.groupOffsetTree, Math.max(c - p, 0), "v")[0]),
        Z(),
        E((c) => [c])
      ),
      i
    ), { groupCounts: s, topItemsIndexes: i };
  },
  X(Et, at)
), Pt = U(
  ([{ log: t }]) => {
    const e = C(!1), n = ht(
      x(
        e,
        P((o) => o),
        Z()
      )
    );
    return K(e, (o) => {
      o && st(t)("props updated", {}, mt.DEBUG);
    }), { didMount: n, propsReady: e };
  },
  X(Vt),
  { singleton: !0 }
), zo = typeof document < "u" && "scrollBehavior" in document.documentElement.style;
function Dn(t) {
  const e = typeof t == "number" ? { index: t } : t;
  return e.align || (e.align = "start"), (!e.behavior || !zo) && (e.behavior = "auto"), e.offset || (e.offset = 0), e;
}
const ce = U(
  ([
    { gap: t, listRefresh: e, sizes: n, totalCount: o },
    {
      fixedFooterHeight: r,
      fixedHeaderHeight: s,
      footerHeight: i,
      headerHeight: l,
      scrollingInProgress: c,
      scrollTo: a,
      smoothScrollTargetReached: p,
      viewportHeight: S
    },
    { log: g }
  ]) => {
    const h = $(), w = $(), v = C(0);
    let m = null, d = null, u = null;
    function T() {
      m && (m(), m = null), u && (u(), u = null), d && (clearTimeout(d), d = null), G(c, !1);
    }
    return O(
      x(
        h,
        _(n, S, o, v, l, i, g),
        _(t, s, r),
        E(
          ([
            [R, I, f, b, k, F, L, V],
            D,
            J,
            nt
          ]) => {
            const B = Dn(R), { align: Y, behavior: it, offset: dt } = B, St = b - 1, ft = _n(B, I, St);
            let ut = ie(ft, I.offsetTree, D) + F;
            Y === "end" ? (ut += J + Ct(I.sizeTree, ft)[1] - f + nt, ft === St && (ut += L)) : Y === "center" ? ut += (J + Ct(I.sizeTree, ft)[1] - f + nt) / 2 : ut -= k, dt && (ut += dt);
            const At = (xt) => {
              T(), xt ? (V("retrying to scroll to", { location: R }, mt.DEBUG), G(h, R)) : (G(w, !0), V("list did not change, scroll successful", {}, mt.DEBUG));
            };
            if (T(), it === "smooth") {
              let xt = !1;
              u = K(e, (Xt) => {
                xt = xt || Xt;
              }), m = bt(p, () => {
                At(xt);
              });
            } else
              m = bt(x(e, Vo(150)), At);
            return d = setTimeout(() => {
              T();
            }, 1200), G(c, !0), V("scrolling from index to", { behavior: it, index: ft, top: ut }, mt.DEBUG), { behavior: it, top: ut };
          }
        )
      ),
      a
    ), {
      scrollTargetReached: w,
      scrollToIndex: h,
      topListHeight: v
    };
  },
  X(Et, at, Vt),
  { singleton: !0 }
);
function Vo(t) {
  return (e) => {
    const n = setTimeout(() => {
      e(!1);
    }, t);
    return (o) => {
      o && (e(!0), clearTimeout(n));
    };
  };
}
function $e(t, e) {
  t == 0 ? e() : requestAnimationFrame(() => {
    $e(t - 1, e);
  });
}
function Ue(t, e) {
  const n = e - 1;
  return typeof t == "number" ? t : t.index === "LAST" ? n : t.index;
}
const ue = U(
  ([{ defaultItemSize: t, listRefresh: e, sizes: n }, { scrollTop: o }, { scrollTargetReached: r, scrollToIndex: s }, { didMount: i }]) => {
    const l = C(!0), c = C(0), a = C(!0);
    return O(
      x(
        i,
        _(c),
        P(([p, S]) => !!S),
        yt(!1)
      ),
      l
    ), O(
      x(
        i,
        _(c),
        P(([p, S]) => !!S),
        yt(!1)
      ),
      a
    ), K(
      x(
        rt(e, i),
        _(l, n, t, a),
        P(([[, p], S, { sizeTree: g }, h, w]) => p && (!j(g) || Me(h)) && !S && !w),
        _(c)
      ),
      ([, p]) => {
        bt(r, () => {
          G(a, !0);
        }), $e(4, () => {
          bt(o, () => {
            G(l, !0);
          }), G(s, p);
        });
      }
    ), {
      initialItemFinalLocationReached: a,
      initialTopMostItemIndex: c,
      scrolledToInitialItem: l
    };
  },
  X(Et, at, ce, Pt),
  { singleton: !0 }
);
function $n(t, e) {
  return Math.abs(t - e) < 1.01;
}
const le = "up", te = "down", Po = "none", Ao = {
  atBottom: !1,
  notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
  state: {
    offsetBottom: 0,
    scrollHeight: 0,
    scrollTop: 0,
    viewportHeight: 0
  }
}, Mo = 0, ae = U(([{ footerHeight: t, headerHeight: e, scrollBy: n, scrollContainerState: o, scrollTop: r, viewportHeight: s }]) => {
  const i = C(!1), l = C(!0), c = $(), a = $(), p = C(4), S = C(Mo), g = ct(
    x(
      dn(x(A(r), jt(1), yt(!0)), x(A(r), jt(1), yt(!1), an(100))),
      Z()
    ),
    !1
  ), h = ct(
    x(dn(x(n, yt(!0)), x(n, yt(!1), an(200))), Z()),
    !1
  );
  O(
    x(
      rt(A(r), A(S)),
      E(([u, T]) => u <= T),
      Z()
    ),
    l
  ), O(x(l, Lt(50)), a);
  const w = ht(
    x(
      rt(o, A(s), A(e), A(t), A(p)),
      Rt((u, [{ scrollHeight: T, scrollTop: R }, I, f, b, k]) => {
        const F = R + I - T > -k, L = {
          scrollHeight: T,
          scrollTop: R,
          viewportHeight: I
        };
        if (F) {
          let D, J;
          return R > u.state.scrollTop ? (D = "SCROLLED_DOWN", J = u.state.scrollTop - R) : (D = "SIZE_DECREASED", J = u.state.scrollTop - R || u.scrollTopDelta), {
            atBottom: !0,
            atBottomBecause: D,
            scrollTopDelta: J,
            state: L
          };
        }
        let V;
        return L.scrollHeight > u.state.scrollHeight ? V = "SIZE_INCREASED" : I < u.state.viewportHeight ? V = "VIEWPORT_HEIGHT_DECREASING" : R < u.state.scrollTop ? V = "SCROLLING_UPWARDS" : V = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM", {
          atBottom: !1,
          notAtBottomBecause: V,
          state: L
        };
      }, Ao),
      Z((u, T) => u && u.atBottom === T.atBottom)
    )
  ), v = ct(
    x(
      o,
      Rt(
        (u, { scrollHeight: T, scrollTop: R, viewportHeight: I }) => {
          if ($n(u.scrollHeight, T))
            return {
              changed: !1,
              jump: 0,
              scrollHeight: T,
              scrollTop: R
            };
          {
            const f = T - (R + I) < 1;
            return u.scrollTop !== R && f ? {
              changed: !0,
              jump: u.scrollTop - R,
              scrollHeight: T,
              scrollTop: R
            } : {
              changed: !0,
              jump: 0,
              scrollHeight: T,
              scrollTop: R
            };
          }
        },
        { changed: !1, jump: 0, scrollHeight: 0, scrollTop: 0 }
      ),
      P((u) => u.changed),
      E((u) => u.jump)
    ),
    0
  );
  O(
    x(
      w,
      E((u) => u.atBottom)
    ),
    i
  ), O(x(i, Lt(50)), c);
  const m = C(te);
  O(
    x(
      o,
      E(({ scrollTop: u }) => u),
      Z(),
      Rt(
        (u, T) => st(h) ? { direction: u.direction, prevScrollTop: T } : { direction: T < u.prevScrollTop ? le : te, prevScrollTop: T },
        { direction: te, prevScrollTop: 0 }
      ),
      E((u) => u.direction)
    ),
    m
  ), O(x(o, Lt(50), yt(Po)), m);
  const d = C(0);
  return O(
    x(
      g,
      P((u) => !u),
      yt(0)
    ),
    d
  ), O(
    x(
      r,
      Lt(100),
      _(g),
      P(([u, T]) => !!T),
      Rt(([u, T], [R]) => [T, R], [0, 0]),
      E(([u, T]) => T - u)
    ),
    d
  ), {
    atBottomState: w,
    atBottomStateChange: c,
    atBottomThreshold: p,
    atTopStateChange: a,
    atTopThreshold: S,
    isAtBottom: i,
    isAtTop: l,
    isScrolling: g,
    lastJumpDueToItemResize: v,
    scrollDirection: m,
    scrollVelocity: d
  };
}, X(at)), xe = "top", Te = "bottom", hn = "none";
function gn(t, e, n) {
  return typeof t == "number" ? n === le && e === xe || n === te && e === Te ? t : 0 : n === le ? e === xe ? t.main : t.reverse : e === Te ? t.main : t.reverse;
}
function In(t, e) {
  var n;
  return typeof t == "number" ? t : (n = t[e]) != null ? n : 0;
}
const Ke = U(
  ([{ deviation: t, fixedHeaderHeight: e, headerHeight: n, scrollTop: o, viewportHeight: r }]) => {
    const s = $(), i = C(0), l = C(0), c = C(0), a = ct(
      x(
        rt(
          A(o),
          A(r),
          A(n),
          A(s, se),
          A(c),
          A(i),
          A(e),
          A(t),
          A(l)
        ),
        E(
          ([
            p,
            S,
            g,
            [h, w],
            v,
            m,
            d,
            u,
            T
          ]) => {
            const R = p - u, I = m + d, f = Math.max(g - R, 0);
            let b = hn;
            const k = In(T, xe), F = In(T, Te);
            return h -= u, h += g + d, w += g + d, w -= u, h > p + I - k && (b = le), w < p - f + S + F && (b = te), b !== hn ? [
              Math.max(R - g - gn(v, xe, b) - k, 0),
              R - f - d + S + gn(v, Te, b) + F
            ] : null;
          }
        ),
        P((p) => p != null),
        Z(se)
      ),
      [0, 0]
    );
    return {
      increaseViewportBy: l,
      // input
      listBoundary: s,
      overscan: c,
      topListHeight: i,
      // output
      visibleRange: a
    };
  },
  X(at),
  { singleton: !0 }
);
function Wo(t, e, n) {
  if (Re(e)) {
    const o = Gn(t, e);
    return [
      { index: Ct(e.groupOffsetTree, o)[0], offset: 0, size: 0 },
      { data: n == null ? void 0 : n[0], index: o, offset: 0, size: 0 }
    ];
  }
  return [{ data: n == null ? void 0 : n[0], index: t, offset: 0, size: 0 }];
}
const Be = {
  bottom: 0,
  firstItemIndex: 0,
  items: [],
  offsetBottom: 0,
  offsetTop: 0,
  top: 0,
  topItems: [],
  topListHeight: 0,
  totalCount: 0
};
function Ie(t, e, n, o, r, s) {
  const { lastIndex: i, lastOffset: l, lastSize: c } = r;
  let a = 0, p = 0;
  if (t.length > 0) {
    a = t[0].offset;
    const v = t[t.length - 1];
    p = v.offset + v.size;
  }
  const S = n - i, g = l + S * c + (S - 1) * o, h = a, w = g - p;
  return {
    bottom: p,
    firstItemIndex: s,
    items: Sn(t, r, s),
    offsetBottom: w,
    offsetTop: a,
    top: h,
    topItems: Sn(e, r, s),
    topListHeight: e.reduce((v, m) => m.size + v, 0),
    totalCount: n
  };
}
function Un(t, e, n, o, r, s) {
  let i = 0;
  if (n.groupIndices.length > 0)
    for (const p of n.groupIndices) {
      if (p - i >= t)
        break;
      i++;
    }
  const l = t + i, c = Ue(e, l), a = Array.from({ length: l }).map((p, S) => ({
    data: s[S + c],
    index: S + c,
    offset: 0,
    size: 0
  }));
  return Ie(a, [], l, r, n, o);
}
function Sn(t, e, n) {
  if (t.length === 0)
    return [];
  if (!Re(e))
    return t.map((a) => ({ ...a, index: a.index + n, originalIndex: a.index }));
  const o = t[0].index, r = t[t.length - 1].index, s = [], i = ye(e.groupOffsetTree, o, r);
  let l, c = 0;
  for (const a of t) {
    (!l || l.end < a.index) && (l = i.shift(), c = e.groupIndices.indexOf(l.start));
    let p;
    a.index === l.start ? p = {
      index: c,
      type: "group"
    } : p = {
      groupIndex: c,
      index: a.index - (c + 1) + n
    }, s.push({
      ...p,
      data: a.data,
      offset: a.offset,
      originalIndex: a.index,
      size: a.size
    });
  }
  return s;
}
const Dt = U(
  ([
    { data: t, firstItemIndex: e, gap: n, sizes: o, totalCount: r },
    s,
    { listBoundary: i, topListHeight: l, visibleRange: c },
    { initialTopMostItemIndex: a, scrolledToInitialItem: p },
    { topListHeight: S },
    g,
    { didMount: h },
    { recalcInProgress: w }
  ]) => {
    const v = C([]), m = C(0), d = $();
    O(s.topItemsIndexes, v);
    const u = ct(
      x(
        rt(
          h,
          w,
          A(c, se),
          A(r),
          A(o),
          A(a),
          p,
          A(v),
          A(e),
          A(n),
          t
        ),
        P(([f, b, , k, , , , , , , F]) => {
          const L = F && F.length !== k;
          return f && !b && !L;
        }),
        E(
          ([
            ,
            ,
            [f, b],
            k,
            F,
            L,
            V,
            D,
            J,
            nt,
            B
          ]) => {
            const Y = F, { offsetTree: it, sizeTree: dt } = Y, St = st(m);
            if (k === 0)
              return { ...Be, totalCount: k };
            if (f === 0 && b === 0)
              return St === 0 ? { ...Be, totalCount: k } : Un(St, L, F, J, nt, B || []);
            if (j(dt))
              return St > 0 ? null : Ie(
                Wo(Ue(L, k), Y, B),
                [],
                k,
                nt,
                Y,
                J
              );
            const ft = [];
            if (D.length > 0) {
              const Mt = D[0], vt = D[D.length - 1];
              let Bt = 0;
              for (const y of ye(dt, Mt, vt)) {
                const N = y.value, Q = Math.max(y.start, Mt), lt = Math.min(y.end, vt);
                for (let tt = Q; tt <= lt; tt++)
                  ft.push({ data: B == null ? void 0 : B[tt], index: tt, offset: Bt, size: N }), Bt += N;
              }
            }
            if (!V)
              return Ie([], ft, k, nt, Y, J);
            const ut = D.length > 0 ? D[D.length - 1] + 1 : 0, At = Ho(it, f, b, ut);
            if (At.length === 0)
              return null;
            const xt = k - 1, Xt = ve([], (Mt) => {
              for (const vt of At) {
                const Bt = vt.value;
                let y = Bt.offset, N = vt.start;
                const Q = Bt.size;
                if (Bt.offset < f) {
                  N += Math.floor((f - Bt.offset + nt) / (Q + nt));
                  const tt = N - vt.start;
                  y += tt * Q + tt * nt;
                }
                N < ut && (y += (ut - N) * Q, N = ut);
                const lt = Math.min(vt.end, xt);
                for (let tt = N; tt <= lt && !(y >= b); tt++)
                  Mt.push({ data: B == null ? void 0 : B[tt], index: tt, offset: y, size: Q }), y += Q + nt;
              }
            });
            return Ie(Xt, ft, k, nt, Y, J);
          }
        ),
        //@ts-expect-error filter needs to be fixed
        P((f) => f !== null),
        Z()
      ),
      Be
    );
    O(
      x(
        t,
        P(Me),
        E((f) => f == null ? void 0 : f.length)
      ),
      r
    ), O(
      x(
        u,
        E((f) => f.topListHeight)
      ),
      S
    ), O(S, l), O(
      x(
        u,
        E((f) => [f.top, f.bottom])
      ),
      i
    ), O(
      x(
        u,
        E((f) => f.items)
      ),
      d
    );
    const T = ht(
      x(
        u,
        P(({ items: f }) => f.length > 0),
        _(r, t),
        P(([{ items: f }, b]) => f[f.length - 1].originalIndex === b - 1),
        E(([, f, b]) => [f - 1, b]),
        Z(se),
        E(([f]) => f)
      )
    ), R = ht(
      x(
        u,
        Lt(200),
        P(({ items: f, topItems: b }) => f.length > 0 && f[0].originalIndex === b.length),
        E(({ items: f }) => f[0].index),
        Z()
      )
    ), I = ht(
      x(
        u,
        P(({ items: f }) => f.length > 0),
        E(({ items: f }) => {
          let b = 0, k = f.length - 1;
          for (; f[b].type === "group" && b < k; )
            b++;
          for (; f[k].type === "group" && k > b; )
            k--;
          return {
            endIndex: f[k].index,
            startIndex: f[b].index
          };
        }),
        Z(Mn)
      )
    );
    return { endReached: T, initialItemCount: m, itemsRendered: d, listState: u, rangeChanged: I, startReached: R, topItemsIndexes: v, ...g };
  },
  X(
    Et,
    Nn,
    Ke,
    ue,
    ce,
    ae,
    Pt,
    Ne
  ),
  { singleton: !0 }
), Kn = U(
  ([{ fixedFooterHeight: t, fixedHeaderHeight: e, footerHeight: n, headerHeight: o }, { listState: r }]) => {
    const s = $(), i = ct(
      x(
        rt(n, t, o, e, r),
        E(([l, c, a, p, S]) => l + c + a + p + S.offsetBottom + S.bottom)
      ),
      0
    );
    return O(A(i), s), { totalListHeight: i, totalListHeightChanged: s };
  },
  X(at, Dt),
  { singleton: !0 }
), Go = U(
  ([{ viewportHeight: t }, { totalListHeight: e }]) => {
    const n = C(!1), o = ct(
      x(
        rt(n, t, e),
        P(([r]) => r),
        E(([, r, s]) => Math.max(0, r - s)),
        Lt(0),
        Z()
      ),
      0
    );
    return { alignToBottom: n, paddingTopAddition: o };
  },
  X(at, Kn),
  { singleton: !0 }
);
function xn(t) {
  return t ? t === "smooth" ? "smooth" : "auto" : !1;
}
const _o = (t, e) => typeof t == "function" ? xn(t(e)) : e && xn(t), No = U(
  ([
    { listRefresh: t, totalCount: e, fixedItemSize: n },
    { atBottomState: o, isAtBottom: r },
    { scrollToIndex: s },
    { scrolledToInitialItem: i },
    { didMount: l, propsReady: c },
    { log: a },
    { scrollingInProgress: p }
  ]) => {
    const S = C(!1), g = $();
    let h = null;
    function w(m) {
      G(s, {
        align: "end",
        behavior: m,
        index: "LAST"
      });
    }
    K(
      x(
        rt(x(A(e), jt(1)), l),
        _(A(S), r, i, p),
        E(([[m, d], u, T, R, I]) => {
          let f = d && R, b = "auto";
          return f && (b = _o(u, T || I), f = f && !!b), { followOutputBehavior: b, shouldFollow: f, totalCount: m };
        }),
        P(({ shouldFollow: m }) => m)
      ),
      ({ followOutputBehavior: m, totalCount: d }) => {
        h && (h(), h = null), st(n) ? requestAnimationFrame(() => {
          st(a)("following output to ", { totalCount: d }, mt.DEBUG), w(m);
        }) : h = bt(t, () => {
          st(a)("following output to ", { totalCount: d }, mt.DEBUG), w(m), h = null;
        });
      }
    );
    function v(m) {
      const d = bt(o, (u) => {
        m && !u.atBottom && u.notAtBottomBecause === "SIZE_INCREASED" && !h && (st(a)("scrolling to bottom due to increased size", {}, mt.DEBUG), w("auto"));
      });
      setTimeout(d, 100);
    }
    return K(
      x(
        rt(A(S), e, c),
        P(([m, , d]) => m && d),
        Rt(
          ({ value: m }, [, d]) => ({ refreshed: m === d, value: d }),
          { refreshed: !1, value: 0 }
        ),
        P(({ refreshed: m }) => m),
        _(S, e)
      ),
      ([, m]) => {
        st(i) && v(m !== !1);
      }
    ), K(g, () => {
      v(st(S) !== !1);
    }), K(rt(A(S), o), ([m, d]) => {
      m && !d.atBottom && d.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" && w("auto");
    }), { autoscrollToBottom: g, followOutput: S };
  },
  X(Et, ae, ce, ue, Pt, Vt, at)
), Do = U(
  ([{ data: t, firstItemIndex: e, gap: n, sizes: o }, { initialTopMostItemIndex: r }, { initialItemCount: s, listState: i }, { didMount: l }]) => (O(
    x(
      l,
      _(s),
      P(([, c]) => c !== 0),
      _(r, o, e, n, t),
      E(([[, c], a, p, S, g, h = []]) => Un(c, a, p, S, g, h))
    ),
    i
  ), {}),
  X(Et, ue, Dt, Pt),
  { singleton: !0 }
), $o = U(
  ([{ didMount: t }, { scrollTo: e }, { listState: n }]) => {
    const o = C(0);
    return K(
      x(
        t,
        _(o),
        P(([, r]) => r !== 0),
        E(([, r]) => ({ top: r }))
      ),
      (r) => {
        bt(
          x(
            n,
            jt(1),
            P((s) => s.items.length > 1)
          ),
          () => {
            requestAnimationFrame(() => {
              G(e, r);
            });
          }
        );
      }
    ), {
      initialScrollTop: o
    };
  },
  X(Pt, at, Dt),
  { singleton: !0 }
), Uo = ({
  itemBottom: t,
  itemTop: e,
  locationParams: { align: n, behavior: o, ...r },
  viewportBottom: s,
  viewportTop: i
}) => e < i ? { ...r, align: n != null ? n : "start", behavior: o } : t > s ? { ...r, align: n != null ? n : "end", behavior: o } : null, Ko = U(
  ([
    { gap: t, sizes: e, totalCount: n },
    { fixedFooterHeight: o, fixedHeaderHeight: r, headerHeight: s, scrollingInProgress: i, scrollTop: l, viewportHeight: c },
    { scrollToIndex: a }
  ]) => {
    const p = $();
    return O(
      x(
        p,
        _(e, c, n, s, r, o, l),
        _(t),
        E(([[S, g, h, w, v, m, d, u], T]) => {
          const { align: R, behavior: I, calculateViewLocation: f = Uo, done: b, ...k } = S, F = _n(S, g, w - 1), L = ie(F, g.offsetTree, T) + v + m, V = L + Ct(g.sizeTree, F)[1], D = u + m, J = u + h - d, nt = f({
            itemBottom: V,
            itemTop: L,
            locationParams: { align: R, behavior: I, ...k },
            viewportBottom: J,
            viewportTop: D
          });
          return nt ? b && bt(
            x(
              i,
              P((B) => !B),
              // skips the initial publish of false, and the cleanup call.
              // but if scrollingInProgress is true, we skip the initial publish.
              jt(st(i) ? 1 : 2)
            ),
            b
          ) : b && b(), nt;
        }),
        P((S) => S !== null)
      ),
      a
    ), {
      scrollIntoView: p
    };
  },
  X(Et, at, ce, Dt, Vt),
  { singleton: !0 }
), jn = U(
  ([{ scrollVelocity: t }]) => {
    const e = C(!1), n = $(), o = C(!1);
    return O(
      x(
        t,
        _(o, e, n),
        P(([r, s]) => !!s),
        E(([r, s, i, l]) => {
          const { enter: c, exit: a } = s;
          if (i) {
            if (a(r, l))
              return !1;
          } else if (c(r, l))
            return !0;
          return i;
        }),
        Z()
      ),
      e
    ), K(
      x(rt(e, t, n), _(o)),
      ([[r, s, i], l]) => {
        r && l && l.change && l.change(s, i);
      }
    ), { isSeeking: e, scrollSeekConfiguration: o, scrollSeekRangeChanged: n, scrollVelocity: t };
  },
  X(ae),
  { singleton: !0 }
), je = U(([{ scrollContainerState: t, scrollTo: e }]) => {
  const n = $(), o = $(), r = $(), s = C(!1), i = C(void 0);
  return O(
    x(
      rt(n, o),
      E(([{ scrollHeight: l, scrollTop: c, viewportHeight: a }, { offsetTop: p }]) => ({
        scrollHeight: l,
        scrollTop: Math.max(0, c - p),
        viewportHeight: a
      }))
    ),
    t
  ), O(
    x(
      e,
      _(o),
      E(([l, { offsetTop: c }]) => ({
        ...l,
        top: l.top + c
      }))
    ),
    r
  ), {
    customScrollParent: i,
    // config
    useWindowScroll: s,
    // input
    windowScrollContainerState: n,
    // signals
    windowScrollTo: r,
    windowViewportRect: o
  };
}, X(at)), jo = U(
  ([
    { sizeRanges: t, sizes: e },
    { headerHeight: n, scrollTop: o },
    { initialTopMostItemIndex: r },
    { didMount: s },
    { useWindowScroll: i, windowScrollContainerState: l, windowViewportRect: c }
  ]) => {
    const a = $(), p = C(void 0), S = C(null), g = C(null);
    return O(l, S), O(c, g), K(
      x(
        a,
        _(e, o, i, S, g, n)
      ),
      ([h, w, v, m, d, u, T]) => {
        const R = Bo(w.sizeTree);
        m && d !== null && u !== null && (v = d.scrollTop - u.offsetTop), v -= T, h({ ranges: R, scrollTop: v });
      }
    ), O(x(p, P(Me), E(qo)), r), O(
      x(
        s,
        _(p),
        P(([, h]) => h !== void 0),
        Z(),
        E(([, h]) => h.ranges)
      ),
      t
    ), {
      getState: a,
      restoreStateFrom: p
    };
  },
  X(Et, at, ue, Pt, je)
);
function qo(t) {
  return { align: "start", index: 0, offset: t.scrollTop };
}
const Yo = U(([{ topItemsIndexes: t }]) => {
  const e = C(0);
  return O(
    x(
      e,
      P((n) => n >= 0),
      E((n) => Array.from({ length: n }).map((o, r) => r))
    ),
    t
  ), { topItemCount: e };
}, X(Dt));
function qn(t) {
  let e = !1, n;
  return () => (e || (e = !0, n = t()), n);
}
const Zo = qn(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)), Xo = U(
  ([
    { deviation: t, scrollBy: e, scrollingInProgress: n, scrollTop: o },
    { isAtBottom: r, isScrolling: s, lastJumpDueToItemResize: i, scrollDirection: l },
    { listState: c },
    { beforeUnshiftWith: a, gap: p, shiftWithOffset: S, sizes: g },
    { log: h },
    { recalcInProgress: w }
  ]) => {
    const v = ht(
      x(
        c,
        _(i),
        Rt(
          ([, d, u, T], [{ bottom: R, items: I, offsetBottom: f, totalCount: b }, k]) => {
            const F = R + f;
            let L = 0;
            return u === b && d.length > 0 && I.length > 0 && (I[0].originalIndex === 0 && d[0].originalIndex === 0 || (L = F - T, L !== 0 && (L += k))), [L, I, b, F];
          },
          [0, [], 0, 0]
        ),
        P(([d]) => d !== 0),
        _(o, l, n, r, h, w),
        P(([, d, u, T, , , R]) => !R && !T && d !== 0 && u === le),
        E(([[d], , , , , u]) => (u("Upward scrolling compensation", { amount: d }, mt.DEBUG), d))
      )
    );
    function m(d) {
      d > 0 ? (G(e, { behavior: "auto", top: -d }), G(t, 0)) : (G(t, 0), G(e, { behavior: "auto", top: -d }));
    }
    return K(x(v, _(t, s)), ([d, u, T]) => {
      T && Zo() ? G(t, u - d) : m(-d);
    }), K(
      x(
        rt(ct(s, !1), t, w),
        P(([d, u, T]) => !d && !T && u !== 0),
        E(([d, u]) => u),
        Lt(1)
      ),
      m
    ), O(
      x(
        S,
        E((d) => ({ top: -d }))
      ),
      e
    ), K(
      x(
        a,
        _(g, p),
        E(([d, { groupIndices: u, lastSize: T, sizeTree: R }, I]) => {
          function f(b) {
            return b * (T + I);
          }
          if (u.length === 0)
            return f(d);
          {
            let b = 0;
            const k = re(R, 0);
            let F = 0, L = 0;
            for (; F < d; ) {
              F++, b += k;
              let V = u.length === L + 1 ? 1 / 0 : u[L + 1] - u[L] - 1;
              F + V > d && (b -= k, V = d - F + 1), F += V, b += f(V), L++;
            }
            return b;
          }
        })
      ),
      (d) => {
        G(t, d), requestAnimationFrame(() => {
          G(e, { top: d }), requestAnimationFrame(() => {
            G(t, 0), G(w, !1);
          });
        });
      }
    ), { deviation: t };
  },
  X(at, ae, Dt, Et, Vt, Ne)
), Jo = U(
  ([
    t,
    e,
    n,
    o,
    r,
    s,
    i,
    l,
    c,
    a
  ]) => ({
    ...t,
    ...e,
    ...n,
    ...o,
    ...r,
    ...s,
    ...i,
    ...l,
    ...c,
    ...a
  }),
  X(
    Ke,
    Do,
    Pt,
    jn,
    Kn,
    $o,
    Go,
    je,
    Ko,
    Vt
  )
), Yn = U(
  ([
    {
      data: t,
      defaultItemSize: e,
      firstItemIndex: n,
      fixedItemSize: o,
      gap: r,
      groupIndices: s,
      itemSize: i,
      sizeRanges: l,
      sizes: c,
      statefulTotalCount: a,
      totalCount: p,
      trackItemSizes: S
    },
    { initialItemFinalLocationReached: g, initialTopMostItemIndex: h, scrolledToInitialItem: w },
    v,
    m,
    d,
    { listState: u, topItemsIndexes: T, ...R },
    { scrollToIndex: I },
    f,
    { topItemCount: b },
    { groupCounts: k },
    F
  ]) => (O(R.rangeChanged, F.scrollSeekRangeChanged), O(
    x(
      F.windowViewportRect,
      E((L) => L.visibleHeight)
    ),
    v.viewportHeight
  ), {
    data: t,
    defaultItemHeight: e,
    firstItemIndex: n,
    fixedItemHeight: o,
    gap: r,
    groupCounts: k,
    initialItemFinalLocationReached: g,
    initialTopMostItemIndex: h,
    scrolledToInitialItem: w,
    sizeRanges: l,
    topItemCount: b,
    topItemsIndexes: T,
    // input
    totalCount: p,
    ...d,
    groupIndices: s,
    itemSize: i,
    listState: u,
    scrollToIndex: I,
    // output
    statefulTotalCount: a,
    trackItemSizes: S,
    // exported from stateFlagsSystem
    ...R,
    // the bag of IO from featureGroup1System
    ...F,
    ...v,
    sizes: c,
    ...m
  }),
  X(
    Et,
    ue,
    at,
    jo,
    No,
    Dt,
    ce,
    Xo,
    Yo,
    Nn,
    Jo
  )
);
function Qo(t, e) {
  const n = {}, o = {};
  let r = 0;
  const s = t.length;
  for (; r < s; )
    o[t[r]] = 1, r += 1;
  for (const i in e)
    Object.hasOwn(o, i) || (n[i] = e[i]);
  return n;
}
const pe = typeof document < "u" ? react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_1__.useEffect;
function qe(t, e, n) {
  const o = Object.keys(e.required || {}), r = Object.keys(e.optional || {}), s = Object.keys(e.methods || {}), i = Object.keys(e.events || {}), l = react__WEBPACK_IMPORTED_MODULE_1__.createContext({});
  function c(d, u) {
    d.propsReady && G(d.propsReady, !1);
    for (const T of o) {
      const R = d[e.required[T]];
      G(R, u[T]);
    }
    for (const T of r)
      if (T in u) {
        const R = d[e.optional[T]];
        G(R, u[T]);
      }
    d.propsReady && G(d.propsReady, !0);
  }
  function a(d) {
    return s.reduce((u, T) => (u[T] = (R) => {
      const I = d[e.methods[T]];
      G(I, R);
    }, u), {});
  }
  function p(d) {
    return i.reduce((u, T) => (u[T] = ho(d[e.events[T]]), u), {});
  }
  const S = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((d, u) => {
    const { children: T, ...R } = d, [I] = react__WEBPACK_IMPORTED_MODULE_1__.useState(() => ve(Io(t), (k) => {
      c(k, R);
    })), [f] = react__WEBPACK_IMPORTED_MODULE_1__.useState(un(p, I));
    pe(() => {
      for (const k of i)
        k in R && K(f[k], R[k]);
      return () => {
        Object.values(f).map(We);
      };
    }, [R, f, I]), pe(() => {
      c(I, R);
    }), react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle(u, cn(a(I)));
    const b = n;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(l.Provider, { value: I, children: n ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(b, { ...Qo([...o, ...r, ...i], R), children: T }) : T });
  }), g = (d) => {
    const u = react__WEBPACK_IMPORTED_MODULE_1__.useContext(l);
    return react__WEBPACK_IMPORTED_MODULE_1__.useCallback(
      (T) => {
        G(u[d], T);
      },
      [u, d]
    );
  }, h = (d) => {
    const T = react__WEBPACK_IMPORTED_MODULE_1__.useContext(l)[d], R = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(
      (I) => K(T, I),
      [T]
    );
    return react__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStore(
      R,
      () => st(T),
      () => st(T)
    );
  }, w = (d) => {
    const T = react__WEBPACK_IMPORTED_MODULE_1__.useContext(l)[d], [R, I] = react__WEBPACK_IMPORTED_MODULE_1__.useState(un(st, T));
    return pe(
      () => K(T, (f) => {
        f !== R && I(cn(f));
      }),
      [T, R]
    ), R;
  }, v = react__WEBPACK_IMPORTED_MODULE_1__.version.startsWith("18") ? h : w;
  return {
    Component: S,
    useEmitter: (d, u) => {
      const R = react__WEBPACK_IMPORTED_MODULE_1__.useContext(l)[d];
      pe(() => K(R, u), [u, R]);
    },
    useEmitterValue: v,
    usePublisher: g
  };
}
const be = react__WEBPACK_IMPORTED_MODULE_1__.createContext(void 0), Zn = react__WEBPACK_IMPORTED_MODULE_1__.createContext(void 0), Xn = typeof document < "u" ? react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_1__.useEffect;
function ke(t) {
  return "self" in t;
}
function tr(t) {
  return "body" in t;
}
function Jn(t, e, n, o = Yt, r, s) {
  const i = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null), l = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null), c = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null), a = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(
    (g) => {
      let h, w, v;
      const m = g.target;
      if (tr(m) || ke(m)) {
        const u = ke(m) ? m : m.defaultView;
        v = s ? u.scrollX : u.scrollY, h = s ? u.document.documentElement.scrollWidth : u.document.documentElement.scrollHeight, w = s ? u.innerWidth : u.innerHeight;
      } else
        v = s ? m.scrollLeft : m.scrollTop, h = s ? m.scrollWidth : m.scrollHeight, w = s ? m.offsetWidth : m.offsetHeight;
      const d = () => {
        t({
          scrollHeight: h,
          scrollTop: Math.max(v, 0),
          viewportHeight: w
        });
      };
      g.suppressFlushSync ? d() : react_dom__WEBPACK_IMPORTED_MODULE_2__.flushSync(d), l.current !== null && (v === l.current || v <= 0 || v === h - w) && (l.current = null, e(!0), c.current && (clearTimeout(c.current), c.current = null));
    },
    [t, e, s]
  );
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    const g = r || i.current;
    return o(r || i.current), a({ suppressFlushSync: !0, target: g }), g.addEventListener("scroll", a, { passive: !0 }), () => {
      o(null), g.removeEventListener("scroll", a);
    };
  }, [i, a, n, o, r]);
  function p(g) {
    const h = i.current;
    if (!h || (s ? "offsetWidth" in h && h.offsetWidth === 0 : "offsetHeight" in h && h.offsetHeight === 0))
      return;
    const w = g.behavior === "smooth";
    let v, m, d;
    ke(h) ? (m = Math.max(
      wt(h.document.documentElement, s ? "width" : "height"),
      s ? h.document.documentElement.scrollWidth : h.document.documentElement.scrollHeight
    ), v = s ? h.innerWidth : h.innerHeight, d = s ? window.scrollX : window.scrollY) : (m = h[s ? "scrollWidth" : "scrollHeight"], v = wt(h, s ? "width" : "height"), d = h[s ? "scrollLeft" : "scrollTop"]);
    const u = m - v;
    if (g.top = Math.ceil(Math.max(Math.min(u, g.top), 0)), $n(v, m) || g.top === d) {
      t({ scrollHeight: m, scrollTop: d, viewportHeight: v }), w && e(!0);
      return;
    }
    w ? (l.current = g.top, c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      c.current = null, l.current = null, e(!0);
    }, 1e3)) : l.current = null, s && (g = { behavior: g.behavior, left: g.top }), h.scrollTo(g);
  }
  function S(g) {
    s && (g = { behavior: g.behavior, left: g.top }), i.current.scrollBy(g);
  }
  return { scrollByCallback: S, scrollerRef: i, scrollToCallback: p };
}
const Fe = "-webkit-sticky", Tn = "sticky", Ye = qn(() => {
  if (typeof document > "u")
    return Tn;
  const t = document.createElement("div");
  return t.style.position = Fe, t.style.position === Fe ? Fe : Tn;
});
function Ze(t) {
  return t;
}
const er = /* @__PURE__ */ U(() => {
  const t = C((c) => `Item ${c}`), e = C(null), n = C((c) => `Group ${c}`), o = C({}), r = C(Ze), s = C("div"), i = C(Yt), l = (c, a = null) => ct(
    x(
      o,
      E((p) => p[c]),
      Z()
    ),
    a
  );
  return {
    components: o,
    computeItemKey: r,
    context: e,
    EmptyPlaceholder: l("EmptyPlaceholder"),
    FooterComponent: l("Footer"),
    GroupComponent: l("Group", "div"),
    groupContent: n,
    HeaderComponent: l("Header"),
    HeaderFooterTag: s,
    ItemComponent: l("Item", "div"),
    itemContent: t,
    ListComponent: l("List", "div"),
    ScrollerComponent: l("Scroller", "div"),
    scrollerRef: i,
    ScrollSeekPlaceholder: l("ScrollSeekPlaceholder"),
    TopItemListComponent: l("TopItemList")
  };
}), nr = /* @__PURE__ */ U(
  ([t, e]) => ({ ...t, ...e }),
  X(Yn, er)
), or = ({ height: t }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { height: t } }), rr = { overflowAnchor: "none", position: Ye(), zIndex: 1 }, Qn = { overflowAnchor: "none" }, sr = { ...Qn, display: "inline-block", height: "100%" }, Cn = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.memo(function({ showTopList: e = !1 }) {
  const n = M("listState"), o = gt("sizeRanges"), r = M("useWindowScroll"), s = M("customScrollParent"), i = gt("windowScrollContainerState"), l = gt("scrollContainerState"), c = s || r ? i : l, a = M("itemContent"), p = M("context"), S = M("groupContent"), g = M("trackItemSizes"), h = M("itemSize"), w = M("log"), v = gt("gap"), m = M("horizontalDirection"), { callbackRef: d } = On(
    o,
    h,
    g,
    e ? Yt : c,
    w,
    v,
    s,
    m,
    M("skipAnimationFrameInResizeObserver")
  ), [u, T] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
  Qe("deviation", (B) => {
    u !== B && T(B);
  });
  const R = M("EmptyPlaceholder"), I = M("ScrollSeekPlaceholder") || or, f = M("ListComponent"), b = M("ItemComponent"), k = M("GroupComponent"), F = M("computeItemKey"), L = M("isSeeking"), V = M("groupIndices").length > 0, D = M("alignToBottom"), J = M("initialItemFinalLocationReached"), nt = e ? {} : {
    boxSizing: "border-box",
    ...m ? {
      display: "inline-block",
      height: "100%",
      marginLeft: u !== 0 ? u : D ? "auto" : 0,
      paddingLeft: n.offsetTop,
      paddingRight: n.offsetBottom,
      whiteSpace: "nowrap"
    } : {
      marginTop: u !== 0 ? u : D ? "auto" : 0,
      paddingBottom: n.offsetBottom,
      paddingTop: n.offsetTop
    },
    ...J ? {} : { visibility: "hidden" }
  };
  return !e && n.totalCount === 0 && R ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(R, { ...q(R, p) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    f,
    {
      ...q(f, p),
      "data-testid": e ? "virtuoso-top-item-list" : "virtuoso-item-list",
      ref: d,
      style: nt,
      children: (e ? n.topItems : n.items).map((B) => {
        const Y = B.originalIndex, it = F(Y + n.firstItemIndex, B.data, p);
        return L ? /* @__PURE__ */ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(
          I,
          {
            ...q(I, p),
            height: B.size,
            index: B.index,
            key: it,
            type: B.type || "item",
            ...B.type === "group" ? {} : { groupIndex: B.groupIndex }
          }
        ) : B.type === "group" ? /* @__PURE__ */ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(
          k,
          {
            ...q(k, p),
            "data-index": Y,
            "data-item-index": B.index,
            "data-known-size": B.size,
            key: it,
            style: rr
          },
          S(B.index, p)
        ) : /* @__PURE__ */ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(
          b,
          {
            ...q(b, p),
            ...to(b, B.data),
            "data-index": Y,
            "data-item-group-index": B.groupIndex,
            "data-item-index": B.index,
            "data-known-size": B.size,
            key: it,
            style: m ? sr : Qn
          },
          V ? a(B.index, B.groupIndex, B.data, p) : a(B.index, B.data, p)
        );
      })
    }
  );
}), ir = {
  height: "100%",
  outline: "none",
  overflowY: "auto",
  position: "relative",
  WebkitOverflowScrolling: "touch"
}, lr = {
  outline: "none",
  overflowX: "auto",
  position: "relative"
}, Zt = (t) => ({
  height: "100%",
  position: "absolute",
  top: 0,
  width: "100%",
  ...t ? { display: "flex", flexDirection: "column" } : {}
}), cr = {
  position: Ye(),
  top: 0,
  width: "100%",
  zIndex: 1
};
function q(t, e) {
  if (typeof t != "string")
    return { context: e };
}
function to(t, e) {
  return { item: typeof t == "string" ? void 0 : e };
}
const ur = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.memo(function() {
  const e = M("HeaderComponent"), n = gt("headerHeight"), o = M("HeaderFooterTag"), r = Ht(
    react__WEBPACK_IMPORTED_MODULE_1__.useMemo(
      () => (i) => {
        n(wt(i, "height"));
      },
      [n]
    ),
    !0,
    M("skipAnimationFrameInResizeObserver")
  ), s = M("context");
  return e ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, { ref: r, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(e, { ...q(e, s) }) }) : null;
}), ar = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.memo(function() {
  const e = M("FooterComponent"), n = gt("footerHeight"), o = M("HeaderFooterTag"), r = Ht(
    react__WEBPACK_IMPORTED_MODULE_1__.useMemo(
      () => (i) => {
        n(wt(i, "height"));
      },
      [n]
    ),
    !0,
    M("skipAnimationFrameInResizeObserver")
  ), s = M("context");
  return e ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, { ref: r, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(e, { ...q(e, s) }) }) : null;
});
function Xe({ useEmitter: t, useEmitterValue: e, usePublisher: n }) {
  return react__WEBPACK_IMPORTED_MODULE_1__.memo(function({ children: s, style: i, ...l }) {
    const c = n("scrollContainerState"), a = e("ScrollerComponent"), p = n("smoothScrollTargetReached"), S = e("scrollerRef"), g = e("context"), h = e("horizontalDirection") || !1, { scrollByCallback: w, scrollerRef: v, scrollToCallback: m } = Jn(
      c,
      p,
      a,
      S,
      void 0,
      h
    );
    return t("scrollTo", m), t("scrollBy", w), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      a,
      {
        "data-testid": "virtuoso-scroller",
        "data-virtuoso-scroller": !0,
        ref: v,
        style: { ...h ? lr : ir, ...i },
        tabIndex: 0,
        ...l,
        ...q(a, g),
        children: s
      }
    );
  });
}
function Je({ useEmitter: t, useEmitterValue: e, usePublisher: n }) {
  return react__WEBPACK_IMPORTED_MODULE_1__.memo(function({ children: s, style: i, ...l }) {
    const c = n("windowScrollContainerState"), a = e("ScrollerComponent"), p = n("smoothScrollTargetReached"), S = e("totalListHeight"), g = e("deviation"), h = e("customScrollParent"), w = e("context"), v = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null), m = e("scrollerRef"), { scrollByCallback: d, scrollerRef: u, scrollToCallback: T } = Jn(
      c,
      p,
      a,
      m,
      h
    );
    return Xn(() => {
      var R;
      return u.current = h || ((R = v.current) == null ? void 0 : R.ownerDocument.defaultView), () => {
        u.current = null;
      };
    }, [u, h]), t("windowScrollTo", T), t("scrollBy", d), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      a,
      {
        ref: v,
        "data-virtuoso-scroller": !0,
        style: { position: "relative", ...i, ...S !== 0 ? { height: S + g } : {} },
        ...l,
        ...q(a, w),
        children: s
      }
    );
  });
}
const dr = ({ children: t }) => {
  const e = react__WEBPACK_IMPORTED_MODULE_1__.useContext(be), n = gt("viewportHeight"), o = gt("fixedItemHeight"), r = M("alignToBottom"), s = M("horizontalDirection"), i = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(
    () => ne(n, (c) => wt(c, s ? "width" : "height")),
    [n, s]
  ), l = Ht(i, !0, M("skipAnimationFrameInResizeObserver"));
  return react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    e && (n(e.viewportHeight), o(e.itemHeight));
  }, [e, n, o]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-viewport-type": "element", ref: l, style: Zt(r), children: t });
}, fr = ({ children: t }) => {
  const e = react__WEBPACK_IMPORTED_MODULE_1__.useContext(be), n = gt("windowViewportRect"), o = gt("fixedItemHeight"), r = M("customScrollParent"), s = _e(
    n,
    r,
    M("skipAnimationFrameInResizeObserver")
  ), i = M("alignToBottom");
  return react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    e && (o(e.itemHeight), n({ offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: 100 }));
  }, [e, n, o]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-viewport-type": "window", ref: s, style: Zt(i), children: t });
}, mr = ({ children: t }) => {
  const e = M("TopItemListComponent") || "div", n = M("headerHeight"), o = { ...cr, marginTop: `${n}px` }, r = M("context");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(e, { style: o, ...q(e, r), children: t });
}, pr = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.memo(function(e) {
  const n = M("useWindowScroll"), o = M("topItemsIndexes").length > 0, r = M("customScrollParent"), s = M("context"), i = r || n ? gr : hr, l = r || n ? fr : dr;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(i, { ...e, ...q(i, s), children: [
    o && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(mr, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cn, { showTopList: !0 }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(l, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ur, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cn, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ar, {})
    ] })
  ] });
}), {
  Component: eo,
  useEmitter: Qe,
  useEmitterValue: M,
  usePublisher: gt
} = /* @__PURE__ */ qe(
  nr,
  {
    required: {},
    optional: {
      restoreStateFrom: "restoreStateFrom",
      context: "context",
      followOutput: "followOutput",
      itemContent: "itemContent",
      groupContent: "groupContent",
      overscan: "overscan",
      increaseViewportBy: "increaseViewportBy",
      totalCount: "totalCount",
      groupCounts: "groupCounts",
      topItemCount: "topItemCount",
      firstItemIndex: "firstItemIndex",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      components: "components",
      atBottomThreshold: "atBottomThreshold",
      atTopThreshold: "atTopThreshold",
      computeItemKey: "computeItemKey",
      defaultItemHeight: "defaultItemHeight",
      fixedItemHeight: "fixedItemHeight",
      itemSize: "itemSize",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      headerFooterTag: "HeaderFooterTag",
      data: "data",
      initialItemCount: "initialItemCount",
      initialScrollTop: "initialScrollTop",
      alignToBottom: "alignToBottom",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel",
      horizontalDirection: "horizontalDirection",
      skipAnimationFrameInResizeObserver: "skipAnimationFrameInResizeObserver"
    },
    methods: {
      scrollToIndex: "scrollToIndex",
      scrollIntoView: "scrollIntoView",
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      autoscrollToBottom: "autoscrollToBottom",
      getState: "getState"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      totalListHeightChanged: "totalListHeightChanged",
      itemsRendered: "itemsRendered",
      groupIndices: "groupIndices"
    }
  },
  pr
), hr = /* @__PURE__ */ Xe({ useEmitter: Qe, useEmitterValue: M, usePublisher: gt }), gr = /* @__PURE__ */ Je({ useEmitter: Qe, useEmitterValue: M, usePublisher: gt }), jr = eo, qr = (/* unused pure expression or super */ null && (eo)), Ir = /* @__PURE__ */ U(() => {
  const t = C((a) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { children: [
    "Item $",
    a
  ] })), e = C(null), n = C((a) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { colSpan: 1e3, children: [
    "Group ",
    a
  ] })), o = C(null), r = C(null), s = C({}), i = C(Ze), l = C(Yt), c = (a, p = null) => ct(
    x(
      s,
      E((S) => S[a]),
      Z()
    ),
    p
  );
  return {
    components: s,
    computeItemKey: i,
    context: e,
    EmptyPlaceholder: c("EmptyPlaceholder"),
    FillerRow: c("FillerRow"),
    fixedFooterContent: r,
    fixedHeaderContent: o,
    itemContent: t,
    groupContent: n,
    ScrollerComponent: c("Scroller", "div"),
    scrollerRef: l,
    ScrollSeekPlaceholder: c("ScrollSeekPlaceholder"),
    TableBodyComponent: c("TableBody", "tbody"),
    TableComponent: c("Table", "table"),
    TableFooterComponent: c("TableFoot", "tfoot"),
    TableHeadComponent: c("TableHead", "thead"),
    TableRowComponent: c("TableRow", "tr"),
    GroupComponent: c("Group", "tr")
  };
}), Sr = /* @__PURE__ */ U(
  ([t, e]) => ({ ...t, ...e }),
  X(Yn, Ir)
), xr = ({ height: t }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { height: t } }) }), Tr = ({ height: t }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { border: 0, height: t, padding: 0 } }) }), Cr = { overflowAnchor: "none" }, wn = { position: Ye(), zIndex: 2, overflowAnchor: "none" }, vn = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.memo(function({ showTopList: e = !1 }) {
  const n = W("listState"), o = W("computeItemKey"), r = W("firstItemIndex"), s = W("context"), i = W("isSeeking"), l = W("fixedHeaderHeight"), c = W("groupIndices").length > 0, a = W("itemContent"), p = W("groupContent"), S = W("ScrollSeekPlaceholder") || xr, g = W("GroupComponent"), h = W("TableRowComponent"), w = (e ? n.topItems : []).reduce((m, d, u) => (u === 0 ? m.push(d.size) : m.push(m[u - 1] + d.size), m), []), v = (e ? n.topItems : n.items).map((m) => {
    const d = m.originalIndex, u = o(d + r, m.data, s), T = e ? d === 0 ? 0 : w[d - 1] : 0;
    return i ? /* @__PURE__ */ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(
      S,
      {
        ...q(S, s),
        height: m.size,
        index: m.index,
        key: u,
        type: m.type || "item"
      }
    ) : m.type === "group" ? /* @__PURE__ */ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(
      g,
      {
        ...q(g, s),
        "data-index": d,
        "data-item-index": m.index,
        "data-known-size": m.size,
        key: u,
        style: {
          ...wn,
          top: l
        }
      },
      p(m.index, s)
    ) : /* @__PURE__ */ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(
      h,
      {
        ...q(h, s),
        ...to(h, m.data),
        "data-index": d,
        "data-item-index": m.index,
        "data-known-size": m.size,
        "data-item-group-index": m.groupIndex,
        key: u,
        style: e ? { ...wn, top: l + T } : Cr
      },
      c ? a(m.index, m.groupIndex, m.data, s) : a(m.index, m.data, s)
    );
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: v });
}), wr = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.memo(function() {
  const e = W("listState"), n = W("topItemsIndexes").length > 0, o = Tt("sizeRanges"), r = W("useWindowScroll"), s = W("customScrollParent"), i = Tt("windowScrollContainerState"), l = Tt("scrollContainerState"), c = s || r ? i : l, a = W("trackItemSizes"), p = W("itemSize"), S = W("log"), { callbackRef: g, ref: h } = On(
    o,
    p,
    a,
    c,
    S,
    void 0,
    s,
    !1,
    W("skipAnimationFrameInResizeObserver")
  ), [w, v] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
  tn("deviation", (V) => {
    w !== V && (h.current.style.marginTop = `${V}px`, v(V));
  });
  const m = W("EmptyPlaceholder"), d = W("FillerRow") || Tr, u = W("TableBodyComponent"), T = W("paddingTopAddition"), R = W("statefulTotalCount"), I = W("context");
  if (R === 0 && m)
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, { ...q(m, I) });
  const f = (n ? e.topItems : []).reduce((V, D) => V + D.size, 0), b = e.offsetTop + T + w - f, k = e.offsetBottom, F = b > 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, { context: I, height: b }, "padding-top") : null, L = k > 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(d, { context: I, height: k }, "padding-bottom") : null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(u, { "data-testid": "virtuoso-item-list", ref: g, ...q(u, I), children: [
    F,
    n && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(vn, { showTopList: !0 }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(vn, {}),
    L
  ] });
}), vr = ({ children: t }) => {
  const e = react__WEBPACK_IMPORTED_MODULE_1__.useContext(be), n = Tt("viewportHeight"), o = Tt("fixedItemHeight"), r = Ht(
    react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ne(n, (s) => wt(s, "height")), [n]),
    !0,
    W("skipAnimationFrameInResizeObserver")
  );
  return react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    e && (n(e.viewportHeight), o(e.itemHeight));
  }, [e, n, o]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-viewport-type": "element", ref: r, style: Zt(!1), children: t });
}, yr = ({ children: t }) => {
  const e = react__WEBPACK_IMPORTED_MODULE_1__.useContext(be), n = Tt("windowViewportRect"), o = Tt("fixedItemHeight"), r = W("customScrollParent"), s = _e(
    n,
    r,
    W("skipAnimationFrameInResizeObserver")
  );
  return react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    e && (o(e.itemHeight), n({ offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: 100 }));
  }, [e, n, o]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-viewport-type": "window", ref: s, style: Zt(!1), children: t });
}, Rr = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.memo(function(e) {
  const n = W("useWindowScroll"), o = W("customScrollParent"), r = Tt("fixedHeaderHeight"), s = Tt("fixedFooterHeight"), i = W("fixedHeaderContent"), l = W("fixedFooterContent"), c = W("context"), a = Ht(
    react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ne(r, (u) => wt(u, "height")), [r]),
    !0,
    W("skipAnimationFrameInResizeObserver")
  ), p = Ht(
    react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ne(s, (u) => wt(u, "height")), [s]),
    !0,
    W("skipAnimationFrameInResizeObserver")
  ), S = o || n ? Hr : br, g = o || n ? yr : vr, h = W("TableComponent"), w = W("TableHeadComponent"), v = W("TableFooterComponent"), m = i ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    w,
    {
      ref: a,
      style: { position: "sticky", top: 0, zIndex: 2 },
      ...q(w, c),
      children: i()
    },
    "TableHead"
  ) : null, d = l ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    v,
    {
      ref: p,
      style: { bottom: 0, position: "sticky", zIndex: 1 },
      ...q(v, c),
      children: l()
    },
    "TableFoot"
  ) : null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(S, { ...e, ...q(S, c), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(g, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(h, { style: { borderSpacing: 0, overflowAnchor: "none" }, ...q(h, c), children: [
    m,
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(wr, {}, "TableBody"),
    d
  ] }) }) });
}), {
  Component: no,
  useEmitter: tn,
  useEmitterValue: W,
  usePublisher: Tt
} = /* @__PURE__ */ qe(
  Sr,
  {
    required: {},
    optional: {
      restoreStateFrom: "restoreStateFrom",
      context: "context",
      followOutput: "followOutput",
      firstItemIndex: "firstItemIndex",
      itemContent: "itemContent",
      groupContent: "groupContent",
      fixedHeaderContent: "fixedHeaderContent",
      fixedFooterContent: "fixedFooterContent",
      overscan: "overscan",
      increaseViewportBy: "increaseViewportBy",
      totalCount: "totalCount",
      topItemCount: "topItemCount",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      components: "components",
      groupCounts: "groupCounts",
      atBottomThreshold: "atBottomThreshold",
      atTopThreshold: "atTopThreshold",
      computeItemKey: "computeItemKey",
      defaultItemHeight: "defaultItemHeight",
      fixedItemHeight: "fixedItemHeight",
      itemSize: "itemSize",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      data: "data",
      initialItemCount: "initialItemCount",
      initialScrollTop: "initialScrollTop",
      alignToBottom: "alignToBottom",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel"
    },
    methods: {
      scrollToIndex: "scrollToIndex",
      scrollIntoView: "scrollIntoView",
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      getState: "getState"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      totalListHeightChanged: "totalListHeightChanged",
      itemsRendered: "itemsRendered",
      groupIndices: "groupIndices"
    }
  },
  Rr
), br = /* @__PURE__ */ Xe({ useEmitter: tn, useEmitterValue: W, usePublisher: Tt }), Hr = /* @__PURE__ */ Je({ useEmitter: tn, useEmitterValue: W, usePublisher: Tt }), Yr = (/* unused pure expression or super */ null && (no)), Zr = (/* unused pure expression or super */ null && (no)), yn = {
  bottom: 0,
  itemHeight: 0,
  items: [],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, Er = {
  bottom: 0,
  itemHeight: 0,
  items: [{ index: 0 }],
  itemWidth: 0,
  offsetBottom: 0,
  offsetTop: 0,
  top: 0
}, { ceil: Rn, floor: Ce, max: ee, min: Oe, round: bn } = Math;
function Hn(t, e, n) {
  return Array.from({ length: e - t + 1 }).map((o, r) => ({ data: n === null ? null : n[r + t], index: r + t }));
}
function Br(t) {
  return {
    ...Er,
    items: t
  };
}
function he(t, e) {
  return t && t.width === e.width && t.height === e.height;
}
function kr(t, e) {
  return t && t.column === e.column && t.row === e.row;
}
const Fr = /* @__PURE__ */ U(
  ([
    { increaseViewportBy: t, listBoundary: e, overscan: n, visibleRange: o },
    { footerHeight: r, headerHeight: s, scrollBy: i, scrollContainerState: l, scrollTo: c, scrollTop: a, smoothScrollTargetReached: p, viewportHeight: S },
    g,
    h,
    { didMount: w, propsReady: v },
    { customScrollParent: m, useWindowScroll: d, windowScrollContainerState: u, windowScrollTo: T, windowViewportRect: R },
    I
  ]) => {
    const f = C(0), b = C(0), k = C(yn), F = C({ height: 0, width: 0 }), L = C({ height: 0, width: 0 }), V = $(), D = $(), J = C(0), nt = C(null), B = C({ column: 0, row: 0 }), Y = $(), it = $(), dt = C(!1), St = C(0), ft = C(!0), ut = C(!1), At = C(!1);
    K(
      x(
        w,
        _(St),
        P(([y, N]) => !!N)
      ),
      () => {
        G(ft, !1);
      }
    ), K(
      x(
        rt(w, ft, L, F, St, ut),
        P(([y, N, Q, lt, , tt]) => y && !N && Q.height !== 0 && lt.height !== 0 && !tt)
      ),
      ([, , , , y]) => {
        G(ut, !0), $e(1, () => {
          G(V, y);
        }), bt(x(a), () => {
          G(e, [0, 0]), G(ft, !0);
        });
      }
    ), O(
      x(
        it,
        P((y) => y != null && y.scrollTop > 0),
        yt(0)
      ),
      b
    ), K(
      x(
        w,
        _(it),
        P(([, y]) => y != null)
      ),
      ([, y]) => {
        y && (G(F, y.viewport), G(L, y.item), G(B, y.gap), y.scrollTop > 0 && (G(dt, !0), bt(x(a, jt(1)), (N) => {
          G(dt, !1);
        }), G(c, { top: y.scrollTop })));
      }
    ), O(
      x(
        F,
        E(({ height: y }) => y)
      ),
      S
    ), O(
      x(
        rt(
          A(F, he),
          A(L, he),
          A(B, (y, N) => y && y.column === N.column && y.row === N.row),
          A(a)
        ),
        E(([y, N, Q, lt]) => ({
          gap: Q,
          item: N,
          scrollTop: lt,
          viewport: y
        }))
      ),
      Y
    ), O(
      x(
        rt(
          A(f),
          o,
          A(B, kr),
          A(L, he),
          A(F, he),
          A(nt),
          A(b),
          A(dt),
          A(ft),
          A(St)
        ),
        P(([, , , , , , , y]) => !y),
        E(
          ([
            y,
            [N, Q],
            lt,
            tt,
            kt,
            Jt,
            $t,
            ,
            de,
            Ft
          ]) => {
            const { column: Ot, row: Qt } = lt, { height: fe, width: He } = tt, { width: en } = kt;
            if ($t === 0 && (y === 0 || en === 0))
              return yn;
            if (He === 0) {
              const ln = Ue(Ft, y), io = ln + Math.max($t - 1, 0);
              return Br(Hn(ln, io, Jt));
            }
            const me = oo(en, He, Ot);
            let Ut, Wt;
            de ? N === 0 && Q === 0 && $t > 0 ? (Ut = 0, Wt = $t - 1) : (Ut = me * Ce((N + Qt) / (fe + Qt)), Wt = me * Rn((Q + Qt) / (fe + Qt)) - 1, Wt = Oe(y - 1, ee(Wt, me - 1)), Ut = Oe(Wt, ee(0, Ut))) : (Ut = 0, Wt = -1);
            const nn = Hn(Ut, Wt, Jt), { bottom: on, top: rn } = En(kt, lt, tt, nn), sn = Rn(y / me), so = sn * fe + (sn - 1) * Qt - on;
            return { bottom: on, itemHeight: fe, items: nn, itemWidth: He, offsetBottom: so, offsetTop: rn, top: rn };
          }
        )
      ),
      k
    ), O(
      x(
        nt,
        P((y) => y !== null),
        E((y) => y.length)
      ),
      f
    ), O(
      x(
        rt(F, L, k, B),
        P(([y, N, { items: Q }]) => Q.length > 0 && N.height !== 0 && y.height !== 0),
        E(([y, N, { items: Q }, lt]) => {
          const { bottom: tt, top: kt } = En(y, lt, N, Q);
          return [kt, tt];
        }),
        Z(se)
      ),
      e
    );
    const xt = C(!1);
    O(
      x(
        a,
        _(xt),
        E(([y, N]) => N || y !== 0)
      ),
      xt
    );
    const Xt = ht(
      x(
        rt(k, f),
        P(([{ items: y }]) => y.length > 0),
        _(xt),
        P(([[y, N], Q]) => {
          const tt = y.items[y.items.length - 1].index === N - 1;
          return (Q || y.bottom > 0 && y.itemHeight > 0 && y.offsetBottom === 0 && y.items.length === N) && tt;
        }),
        E(([[, y]]) => y - 1),
        Z()
      )
    ), Mt = ht(
      x(
        A(k),
        P(({ items: y }) => y.length > 0 && y[0].index === 0),
        yt(0),
        Z()
      )
    ), vt = ht(
      x(
        A(k),
        _(dt),
        P(([{ items: y }, N]) => y.length > 0 && !N),
        E(([{ items: y }]) => ({
          endIndex: y[y.length - 1].index,
          startIndex: y[0].index
        })),
        Z(Mn),
        Lt(0)
      )
    );
    O(vt, h.scrollSeekRangeChanged), O(
      x(
        V,
        _(F, L, f, B),
        E(([y, N, Q, lt, tt]) => {
          const kt = Dn(y), { align: Jt, behavior: $t, offset: de } = kt;
          let Ft = kt.index;
          Ft === "LAST" && (Ft = lt - 1), Ft = ee(0, Ft, Oe(lt - 1, Ft));
          let Ot = Ae(N, tt, Q, Ft);
          return Jt === "end" ? Ot = bn(Ot - N.height + Q.height) : Jt === "center" && (Ot = bn(Ot - N.height / 2 + Q.height / 2)), de && (Ot += de), { behavior: $t, top: Ot };
        })
      ),
      c
    );
    const Bt = ct(
      x(
        k,
        E((y) => y.offsetBottom + y.bottom)
      ),
      0
    );
    return O(
      x(
        R,
        E((y) => ({ height: y.visibleHeight, width: y.visibleWidth }))
      ),
      F
    ), {
      customScrollParent: m,
      // input
      data: nt,
      deviation: J,
      footerHeight: r,
      gap: B,
      headerHeight: s,
      increaseViewportBy: t,
      initialItemCount: b,
      itemDimensions: L,
      overscan: n,
      restoreStateFrom: it,
      scrollBy: i,
      scrollContainerState: l,
      scrollHeight: D,
      scrollTo: c,
      scrollToIndex: V,
      scrollTop: a,
      smoothScrollTargetReached: p,
      totalCount: f,
      useWindowScroll: d,
      viewportDimensions: F,
      windowScrollContainerState: u,
      windowScrollTo: T,
      windowViewportRect: R,
      ...h,
      // output
      gridState: k,
      horizontalDirection: At,
      initialTopMostItemIndex: St,
      totalListHeight: Bt,
      ...g,
      endReached: Xt,
      propsReady: v,
      rangeChanged: vt,
      startReached: Mt,
      stateChanged: Y,
      stateRestoreInProgress: dt,
      ...I
    };
  },
  X(Ke, at, ae, jn, Pt, je, Vt)
);
function oo(t, e, n) {
  return ee(1, Ce((t + n) / (Ce(e) + n)));
}
function En(t, e, n, o) {
  const { height: r } = n;
  if (r === void 0 || o.length === 0)
    return { bottom: 0, top: 0 };
  const s = Ae(t, e, n, o[0].index);
  return { bottom: Ae(t, e, n, o[o.length - 1].index) + r, top: s };
}
function Ae(t, e, n, o) {
  const r = oo(t.width, n.width, e.column), s = Ce(o / r), i = s * n.height + ee(0, s - 1) * e.row;
  return i > 0 ? i + e.row : i;
}
const Or = /* @__PURE__ */ U(() => {
  const t = C((S) => `Item ${S}`), e = C({}), n = C(null), o = C("virtuoso-grid-item"), r = C("virtuoso-grid-list"), s = C(Ze), i = C("div"), l = C(Yt), c = (S, g = null) => ct(
    x(
      e,
      E((h) => h[S]),
      Z()
    ),
    g
  ), a = C(!1), p = C(!1);
  return O(A(p), a), {
    components: e,
    computeItemKey: s,
    context: n,
    FooterComponent: c("Footer"),
    HeaderComponent: c("Header"),
    headerFooterTag: i,
    itemClassName: o,
    ItemComponent: c("Item", "div"),
    itemContent: t,
    listClassName: r,
    ListComponent: c("List", "div"),
    readyStateChanged: a,
    reportReadyState: p,
    ScrollerComponent: c("Scroller", "div"),
    scrollerRef: l,
    ScrollSeekPlaceholder: c("ScrollSeekPlaceholder", "div")
  };
}), Lr = /* @__PURE__ */ U(
  ([t, e]) => ({ ...t, ...e }),
  X(Fr, Or)
), zr = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.memo(function() {
  const e = et("gridState"), n = et("listClassName"), o = et("itemClassName"), r = et("itemContent"), s = et("computeItemKey"), i = et("isSeeking"), l = It("scrollHeight"), c = et("ItemComponent"), a = et("ListComponent"), p = et("ScrollSeekPlaceholder"), S = et("context"), g = It("itemDimensions"), h = It("gap"), w = et("log"), v = et("stateRestoreInProgress"), m = It("reportReadyState"), d = Ht(
    react__WEBPACK_IMPORTED_MODULE_1__.useMemo(
      () => (u) => {
        const T = u.parentElement.parentElement.scrollHeight;
        l(T);
        const R = u.firstChild;
        if (R) {
          const { height: I, width: f } = R.getBoundingClientRect();
          g({ height: I, width: f });
        }
        h({
          column: Bn("column-gap", getComputedStyle(u).columnGap, w),
          row: Bn("row-gap", getComputedStyle(u).rowGap, w)
        });
      },
      [l, g, h, w]
    ),
    !0,
    !1
  );
  return Xn(() => {
    e.itemHeight > 0 && e.itemWidth > 0 && m(!0);
  }, [e]), v ? null : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    a,
    {
      className: n,
      ref: d,
      ...q(a, S),
      "data-testid": "virtuoso-item-list",
      style: { paddingBottom: e.offsetBottom, paddingTop: e.offsetTop },
      children: e.items.map((u) => {
        const T = s(u.index, u.data, S);
        return i ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          p,
          {
            ...q(p, S),
            height: e.itemHeight,
            index: u.index,
            width: e.itemWidth
          },
          T
        ) : /* @__PURE__ */ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(
          c,
          {
            ...q(c, S),
            className: o,
            "data-index": u.index,
            key: T
          },
          r(u.index, u.data, S)
        );
      })
    }
  );
}), Vr = react__WEBPACK_IMPORTED_MODULE_1__.memo(function() {
  const e = et("HeaderComponent"), n = It("headerHeight"), o = et("headerFooterTag"), r = Ht(
    react__WEBPACK_IMPORTED_MODULE_1__.useMemo(
      () => (i) => {
        n(wt(i, "height"));
      },
      [n]
    ),
    !0,
    !1
  ), s = et("context");
  return e ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, { ref: r, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(e, { ...q(e, s) }) }) : null;
}), Pr = react__WEBPACK_IMPORTED_MODULE_1__.memo(function() {
  const e = et("FooterComponent"), n = It("footerHeight"), o = et("headerFooterTag"), r = Ht(
    react__WEBPACK_IMPORTED_MODULE_1__.useMemo(
      () => (i) => {
        n(wt(i, "height"));
      },
      [n]
    ),
    !0,
    !1
  ), s = et("context");
  return e ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(o, { ref: r, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(e, { ...q(e, s) }) }) : null;
}), Ar = ({ children: t }) => {
  const e = react__WEBPACK_IMPORTED_MODULE_1__.useContext(Zn), n = It("itemDimensions"), o = It("viewportDimensions"), r = Ht(
    react__WEBPACK_IMPORTED_MODULE_1__.useMemo(
      () => (s) => {
        o(s.getBoundingClientRect());
      },
      [o]
    ),
    !0,
    !1
  );
  return react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    e && (o({ height: e.viewportHeight, width: e.viewportWidth }), n({ height: e.itemHeight, width: e.itemWidth }));
  }, [e, o, n]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: r, style: Zt(!1), children: t });
}, Mr = ({ children: t }) => {
  const e = react__WEBPACK_IMPORTED_MODULE_1__.useContext(Zn), n = It("windowViewportRect"), o = It("itemDimensions"), r = et("customScrollParent"), s = _e(n, r, !1);
  return react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    e && (o({ height: e.itemHeight, width: e.itemWidth }), n({ offsetTop: 0, visibleHeight: e.viewportHeight, visibleWidth: e.viewportWidth }));
  }, [e, n, o]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: s, style: Zt(!1), children: t });
}, Wr = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.memo(function({ ...e }) {
  const n = et("useWindowScroll"), o = et("customScrollParent"), r = o || n ? Nr : _r, s = o || n ? Mr : Ar, i = et("context");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r, { ...e, ...q(r, i), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(s, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Vr, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(zr, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Pr, {})
  ] }) });
}), {
  Component: Gr,
  useEmitter: ro,
  useEmitterValue: et,
  usePublisher: It
} = /* @__PURE__ */ qe(
  Lr,
  {
    optional: {
      context: "context",
      totalCount: "totalCount",
      overscan: "overscan",
      itemContent: "itemContent",
      components: "components",
      computeItemKey: "computeItemKey",
      data: "data",
      initialItemCount: "initialItemCount",
      scrollSeekConfiguration: "scrollSeekConfiguration",
      headerFooterTag: "headerFooterTag",
      listClassName: "listClassName",
      itemClassName: "itemClassName",
      useWindowScroll: "useWindowScroll",
      customScrollParent: "customScrollParent",
      scrollerRef: "scrollerRef",
      logLevel: "logLevel",
      restoreStateFrom: "restoreStateFrom",
      initialTopMostItemIndex: "initialTopMostItemIndex",
      increaseViewportBy: "increaseViewportBy"
    },
    methods: {
      scrollTo: "scrollTo",
      scrollBy: "scrollBy",
      scrollToIndex: "scrollToIndex"
    },
    events: {
      isScrolling: "isScrolling",
      endReached: "endReached",
      startReached: "startReached",
      rangeChanged: "rangeChanged",
      atBottomStateChange: "atBottomStateChange",
      atTopStateChange: "atTopStateChange",
      stateChanged: "stateChanged",
      readyStateChanged: "readyStateChanged"
    }
  },
  Wr
), _r = /* @__PURE__ */ Xe({ useEmitter: ro, useEmitterValue: et, usePublisher: It }), Nr = /* @__PURE__ */ Je({ useEmitter: ro, useEmitterValue: et, usePublisher: It });
function Bn(t, e, n) {
  return e !== "normal" && !(e != null && e.endsWith("px")) && n(`${t} was not resolved to pixel value correctly`, e, mt.WARN), e === "normal" ? 0 : parseInt(e != null ? e : "0", 10);
}
const Xr = (/* unused pure expression or super */ null && (Gr));



/***/ }),

/***/ 45279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   b: () => (/* binding */ getListItemTextUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92186);
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69014);


function getListItemTextUtilityClass(slot) {
    return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)('MuiListItemText', slot);
}
const listItemTextClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('MuiListItemText', [
    'root',
    'multiline',
    'dense',
    'inset',
    'primary',
    'secondary'
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listItemTextClasses);


/***/ }),

/***/ 45386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
}), 'Send'));


/***/ }),

/***/ 51175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6z"
}), 'AttachFile'));


/***/ }),

/***/ 52202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
}), 'MoreVert'));


/***/ }),

/***/ 53755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"
}), 'People'));


/***/ }),

/***/ 54139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   f: () => (/* binding */ getListItemIconUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92186);
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69014);


function getListItemIconUtilityClass(slot) {
    return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)('MuiListItemIcon', slot);
}
const listItemIconClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('MuiListItemIcon', [
    'root',
    'alignItemsFlexStart'
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listItemIconClasses);


/***/ }),

/***/ 65494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ IconButton_IconButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useId.js
var useId = __webpack_require__(14036);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(21567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(36118);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ButtonBase/ButtonBase.js + 8 modules
var ButtonBase = __webpack_require__(50722);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(99512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/iconButtonClasses.js


function getIconButtonUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiIconButton', slot);
}
const iconButtonClasses = (0,generateUtilityClasses/* default */.A)('MuiIconButton', [
    'root',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorError',
    'colorInfo',
    'colorSuccess',
    'colorWarning',
    'edgeStart',
    'edgeEnd',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge',
    'loading',
    'loadingIndicator',
    'loadingWrapper'
]);
/* harmony default export */ const IconButton_iconButtonClasses = (iconButtonClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js
/* __next_internal_client_entry_do_not_use__ default auto */ 















const useUtilityClasses = (ownerState)=>{
    const { classes, disabled, color, edge, size, loading } = ownerState;
    const slots = {
        root: [
            'root',
            loading && 'loading',
            disabled && 'disabled',
            color !== 'default' && "color".concat((0,capitalize/* default */.A)(color)),
            edge && "edge".concat((0,capitalize/* default */.A)(edge)),
            "size".concat((0,capitalize/* default */.A)(size))
        ],
        loadingIndicator: [
            'loadingIndicator'
        ],
        loadingWrapper: [
            'loadingWrapper'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.loading && styles.loading,
            ownerState.color !== 'default' && styles["color".concat((0,capitalize/* default */.A)(ownerState.color))],
            ownerState.edge && styles["edge".concat((0,capitalize/* default */.A)(ownerState.edge))],
            styles["size".concat((0,capitalize/* default */.A)(ownerState.size))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        textAlign: 'center',
        flex: '0 0 auto',
        fontSize: theme.typography.pxToRem(24),
        padding: 8,
        borderRadius: '50%',
        color: (theme.vars || theme).palette.action.active,
        transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.shortest
        }),
        variants: [
            {
                props: (props)=>!props.disableRipple,
                style: {
                    '--IconButton-hoverBg': theme.vars ? "rgba(".concat(theme.vars.palette.action.activeChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.active, theme.palette.action.hoverOpacity),
                    '&:hover': {
                        backgroundColor: 'var(--IconButton-hoverBg)',
                        // Reset on touch devices, it doesn't add specificity
                        '@media (hover: none)': {
                            backgroundColor: 'transparent'
                        }
                    }
                }
            },
            {
                props: {
                    edge: 'start'
                },
                style: {
                    marginLeft: -12
                }
            },
            {
                props: {
                    edge: 'start',
                    size: 'small'
                },
                style: {
                    marginLeft: -3
                }
            },
            {
                props: {
                    edge: 'end'
                },
                style: {
                    marginRight: -12
                }
            },
            {
                props: {
                    edge: 'end',
                    size: 'small'
                },
                style: {
                    marginRight: -3
                }
            }
        ]
    };
}), (0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        variants: [
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    color: 'inherit'
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()) // check all the used fields in the style below
            .map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        color: (theme.vars || theme).palette[color].main
                    }
                };
            }),
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()) // check all the used fields in the style below
            .map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        '--IconButton-hoverBg': theme.vars ? "rgba(".concat((theme.vars || theme).palette[color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)((theme.vars || theme).palette[color].main, theme.palette.action.hoverOpacity)
                    }
                };
            }),
            {
                props: {
                    size: 'small'
                },
                style: {
                    padding: 5,
                    fontSize: theme.typography.pxToRem(18)
                }
            },
            {
                props: {
                    size: 'large'
                },
                style: {
                    padding: 12,
                    fontSize: theme.typography.pxToRem(28)
                }
            }
        ],
        ["&.".concat(IconButton_iconButtonClasses.disabled)]: {
            backgroundColor: 'transparent',
            color: (theme.vars || theme).palette.action.disabled
        },
        ["&.".concat(IconButton_iconButtonClasses.loading)]: {
            color: 'transparent'
        }
    };
}));
const IconButtonLoadingIndicator = (0,styled/* default */.Ay)('span', {
    name: 'MuiIconButton',
    slot: 'LoadingIndicator',
    overridesResolver: (props, styles)=>styles.loadingIndicator
})((param)=>{
    let { theme } = param;
    return {
        display: 'none',
        position: 'absolute',
        visibility: 'visible',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: (theme.vars || theme).palette.action.disabled,
        variants: [
            {
                props: {
                    loading: true
                },
                style: {
                    display: 'flex'
                }
            }
        ]
    };
});
/**
 * Refer to the [Icons](/material-ui/icons/) section of the documentation
 * regarding the available icon options.
 */ const IconButton = /*#__PURE__*/ react.forwardRef(function IconButton(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiIconButton'
    });
    const { edge = false, children, className, color = 'default', disabled = false, disableFocusRipple = false, size = 'medium', id: idProp, loading = null, loadingIndicator: loadingIndicatorProp, ...other } = props;
    const loadingId = (0,useId/* default */.A)(idProp);
    const loadingIndicator = loadingIndicatorProp !== null && loadingIndicatorProp !== void 0 ? loadingIndicatorProp : /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
        "aria-labelledby": loadingId,
        color: "inherit",
        size: 16
    });
    const ownerState = {
        ...props,
        edge,
        color,
        disabled,
        disableFocusRipple,
        loading,
        loadingIndicator,
        size
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(IconButtonRoot, {
        id: loading ? loadingId : idProp,
        className: (0,clsx/* default */.A)(classes.root, className),
        centerRipple: true,
        focusRipple: !disableFocusRipple,
        disabled: disabled || loading,
        ref: ref,
        ...other,
        ownerState: ownerState,
        children: [
            typeof loading === 'boolean' && /*#__PURE__*/ // use plain HTML span to minimize the runtime overhead
            (0,jsx_runtime.jsx)("span", {
                className: classes.loadingWrapper,
                style: {
                    display: 'contents'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButtonLoadingIndicator, {
                    className: classes.loadingIndicator,
                    ownerState: ownerState,
                    children: loading && loadingIndicator
                })
            }),
            children
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const IconButton_IconButton = (IconButton);


/***/ }),

/***/ 68891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ MenuItem_MenuItem)
});

// UNUSED EXPORTS: overridesResolver

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled@1_sfs2vjcbuqchwdpqpmkla22opm/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(21567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/rootShouldForwardProp.js
var rootShouldForwardProp = __webpack_require__(84044);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/ListContext.js
var ListContext = __webpack_require__(5368);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ButtonBase/ButtonBase.js + 8 modules
var ButtonBase = __webpack_require__(50722);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(34486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(71878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Divider/dividerClasses.js
var dividerClasses = __webpack_require__(70745);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemIcon/listItemIconClasses.js
var listItemIconClasses = __webpack_require__(54139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemText/listItemTextClasses.js
var listItemTextClasses = __webpack_require__(45279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/MenuItem/menuItemClasses.js


function getMenuItemUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiMenuItem', slot);
}
const menuItemClasses = (0,generateUtilityClasses/* default */.A)('MuiMenuItem', [
    'root',
    'focusVisible',
    'dense',
    'disabled',
    'divider',
    'gutters',
    'selected'
]);
/* harmony default export */ const MenuItem_menuItemClasses = (menuItemClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/MenuItem/MenuItem.js
/* __next_internal_client_entry_do_not_use__ overridesResolver,default auto */ 

















const overridesResolver = (props, styles)=>{
    const { ownerState } = props;
    return [
        styles.root,
        ownerState.dense && styles.dense,
        ownerState.divider && styles.divider,
        !ownerState.disableGutters && styles.gutters
    ];
};
const useUtilityClasses = (ownerState)=>{
    const { disabled, dense, divider, disableGutters, selected, classes } = ownerState;
    const slots = {
        root: [
            'root',
            dense && 'dense',
            disabled && 'disabled',
            !disableGutters && 'gutters',
            divider && 'divider',
            selected && 'selected'
        ]
    };
    const composedClasses = (0,composeClasses/* default */.A)(slots, getMenuItemUtilityClass, classes);
    return {
        ...classes,
        ...composedClasses
    };
};
const MenuItemRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
    shouldForwardProp: (prop)=>(0,rootShouldForwardProp/* default */.A)(prop) || prop === 'classes',
    name: 'MuiMenuItem',
    slot: 'Root',
    overridesResolver
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        ...theme.typography.body1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        textDecoration: 'none',
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: 'border-box',
        whiteSpace: 'nowrap',
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: (theme.vars || theme).palette.action.hover,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: 'transparent'
            }
        },
        ["&.".concat(MenuItem_menuItemClasses.selected)]: {
            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / ").concat(theme.vars.palette.action.selectedOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            ["&.".concat(MenuItem_menuItemClasses.focusVisible)]: {
                backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.focusOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
            }
        },
        ["&.".concat(MenuItem_menuItemClasses.selected, ":hover")]: {
            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.hoverOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.primary.mainChannel, " / ").concat(theme.vars.palette.action.selectedOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
            }
        },
        ["&.".concat(MenuItem_menuItemClasses.focusVisible)]: {
            backgroundColor: (theme.vars || theme).palette.action.focus
        },
        ["&.".concat(MenuItem_menuItemClasses.disabled)]: {
            opacity: (theme.vars || theme).palette.action.disabledOpacity
        },
        ["& + .".concat(dividerClasses/* default */.A.root)]: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        ["& + .".concat(dividerClasses/* default */.A.inset)]: {
            marginLeft: 52
        },
        ["& .".concat(listItemTextClasses/* default */.A.root)]: {
            marginTop: 0,
            marginBottom: 0
        },
        ["& .".concat(listItemTextClasses/* default */.A.inset)]: {
            paddingLeft: 36
        },
        ["& .".concat(listItemIconClasses/* default */.A.root)]: {
            minWidth: 36
        },
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.disableGutters;
                },
                style: {
                    paddingLeft: 16,
                    paddingRight: 16
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.divider;
                },
                style: {
                    borderBottom: "1px solid ".concat((theme.vars || theme).palette.divider),
                    backgroundClip: 'padding-box'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.dense;
                },
                style: {
                    [theme.breakpoints.up('sm')]: {
                        minHeight: 'auto'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.dense;
                },
                style: {
                    minHeight: 32,
                    // https://m2.material.io/components/menus#specs > Dense
                    paddingTop: 4,
                    paddingBottom: 4,
                    ...theme.typography.body2,
                    ["& .".concat(listItemIconClasses/* default */.A.root, " svg")]: {
                        fontSize: '1.25rem'
                    }
                }
            }
        ]
    };
}));
const MenuItem = /*#__PURE__*/ react.forwardRef(function MenuItem(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiMenuItem'
    });
    const { autoFocus = false, component = 'li', dense = false, divider = false, disableGutters = false, focusVisibleClassName, role = 'menuitem', tabIndex: tabIndexProp, className, ...other } = props;
    const context = react.useContext(ListContext/* default */.A);
    const childContext = react.useMemo(()=>({
            dense: dense || context.dense || false,
            disableGutters
        }), [
        context.dense,
        dense,
        disableGutters
    ]);
    const menuItemRef = react.useRef(null);
    (0,useEnhancedEffect/* default */.A)(()=>{
        if (autoFocus) {
            if (menuItemRef.current) {
                menuItemRef.current.focus();
            } else if (false) {}
        }
    }, [
        autoFocus
    ]);
    const ownerState = {
        ...props,
        dense: childContext.dense,
        divider,
        disableGutters
    };
    const classes = useUtilityClasses(props);
    const handleRef = (0,useForkRef/* default */.A)(menuItemRef, ref);
    let tabIndex;
    if (!props.disabled) {
        tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ListContext/* default */.A.Provider, {
        value: childContext,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItemRoot, {
            ref: handleRef,
            role: role,
            tabIndex: tabIndex,
            component: component,
            focusVisibleClassName: (0,clsx/* default */.A)(classes.focusVisible, focusVisibleClassName),
            className: (0,clsx/* default */.A)(classes.root, className),
            ...other,
            ownerState: ownerState,
            classes: classes
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const MenuItem_MenuItem = (MenuItem);


/***/ }),

/***/ 69388:
/***/ ((module) => {

var __dirname = "/";

(function() {
    var e = {
        229: function(e) {
            var t = e.exports = {};
            var r;
            var n;
            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined");
            }
            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined");
            }
            (function() {
                try {
                    if (typeof setTimeout === "function") {
                        r = setTimeout;
                    } else {
                        r = defaultSetTimout;
                    }
                } catch (e) {
                    r = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === "function") {
                        n = clearTimeout;
                    } else {
                        n = defaultClearTimeout;
                    }
                } catch (e) {
                    n = defaultClearTimeout;
                }
            })();
            function runTimeout(e) {
                if (r === setTimeout) {
                    return setTimeout(e, 0);
                }
                if ((r === defaultSetTimout || !r) && setTimeout) {
                    r = setTimeout;
                    return setTimeout(e, 0);
                }
                try {
                    return r(e, 0);
                } catch (t) {
                    try {
                        return r.call(null, e, 0);
                    } catch (t) {
                        return r.call(this, e, 0);
                    }
                }
            }
            function runClearTimeout(e) {
                if (n === clearTimeout) {
                    return clearTimeout(e);
                }
                if ((n === defaultClearTimeout || !n) && clearTimeout) {
                    n = clearTimeout;
                    return clearTimeout(e);
                }
                try {
                    return n(e);
                } catch (t) {
                    try {
                        return n.call(null, e);
                    } catch (t) {
                        return n.call(this, e);
                    }
                }
            }
            var i = [];
            var o = false;
            var u;
            var a = -1;
            function cleanUpNextTick() {
                if (!o || !u) {
                    return;
                }
                o = false;
                if (u.length) {
                    i = u.concat(i);
                } else {
                    a = -1;
                }
                if (i.length) {
                    drainQueue();
                }
            }
            function drainQueue() {
                if (o) {
                    return;
                }
                var e = runTimeout(cleanUpNextTick);
                o = true;
                var t = i.length;
                while(t){
                    u = i;
                    i = [];
                    while(++a < t){
                        if (u) {
                            u[a].run();
                        }
                    }
                    a = -1;
                    t = i.length;
                }
                u = null;
                o = false;
                runClearTimeout(e);
            }
            t.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for(var r = 1; r < arguments.length; r++){
                        t[r - 1] = arguments[r];
                    }
                }
                i.push(new Item(e, t));
                if (i.length === 1 && !o) {
                    runTimeout(drainQueue);
                }
            };
            function Item(e, t) {
                this.fun = e;
                this.array = t;
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array);
            };
            t.title = "browser";
            t.browser = true;
            t.env = {};
            t.argv = [];
            t.version = "";
            t.versions = {};
            function noop() {}
            t.on = noop;
            t.addListener = noop;
            t.once = noop;
            t.off = noop;
            t.removeListener = noop;
            t.removeAllListeners = noop;
            t.emit = noop;
            t.prependListener = noop;
            t.prependOnceListener = noop;
            t.listeners = function(e) {
                return [];
            };
            t.binding = function(e) {
                throw new Error("process.binding is not supported");
            };
            t.cwd = function() {
                return "/";
            };
            t.chdir = function(e) {
                throw new Error("process.chdir is not supported");
            };
            t.umask = function() {
                return 0;
            };
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var i = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r](i, i.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return i.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var r = __nccwpck_require__(229);
    module.exports = r;
})();


/***/ }),

/***/ 70745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   K: () => (/* binding */ getDividerUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92186);
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69014);


function getDividerUtilityClass(slot) {
    return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)('MuiDivider', slot);
}
const dividerClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('MuiDivider', [
    'root',
    'absolute',
    'fullWidth',
    'inset',
    'middle',
    'flexItem',
    'light',
    'vertical',
    'withChildren',
    'withChildrenVertical',
    'textAlignRight',
    'textAlignLeft',
    'wrapper',
    'wrapperVertical'
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dividerClasses);


/***/ }),

/***/ 71202:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(13873);


/***/ }),

/***/ 81890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ InputAdornment_InputAdornment)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(99512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControl/FormControlContext.js
var FormControlContext = __webpack_require__(41918);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(67286);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js


function getInputAdornmentUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiInputAdornment', slot);
}
const inputAdornmentClasses = (0,generateUtilityClasses/* default */.A)('MuiInputAdornment', [
    'root',
    'filled',
    'standard',
    'outlined',
    'positionStart',
    'positionEnd',
    'disablePointerEvents',
    'hiddenLabel',
    'sizeSmall'
]);
/* harmony default export */ const InputAdornment_inputAdornmentClasses = (inputAdornmentClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/InputAdornment/InputAdornment.js
/* __next_internal_client_entry_do_not_use__ default auto */ var _span;













const overridesResolver = (props, styles)=>{
    const { ownerState } = props;
    return [
        styles.root,
        styles["position".concat((0,capitalize/* default */.A)(ownerState.position))],
        ownerState.disablePointerEvents === true && styles.disablePointerEvents,
        styles[ownerState.variant]
    ];
};
const useUtilityClasses = (ownerState)=>{
    const { classes, disablePointerEvents, hiddenLabel, position, size, variant } = ownerState;
    const slots = {
        root: [
            'root',
            disablePointerEvents && 'disablePointerEvents',
            position && "position".concat((0,capitalize/* default */.A)(position)),
            variant,
            hiddenLabel && 'hiddenLabel',
            size && "size".concat((0,capitalize/* default */.A)(size))
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getInputAdornmentUtilityClass, classes);
};
const InputAdornmentRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiInputAdornment',
    slot: 'Root',
    overridesResolver
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        display: 'flex',
        maxHeight: '2em',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        color: (theme.vars || theme).palette.action.active,
        variants: [
            {
                props: {
                    variant: 'filled'
                },
                style: {
                    ["&.".concat(InputAdornment_inputAdornmentClasses.positionStart, "&:not(.").concat(InputAdornment_inputAdornmentClasses.hiddenLabel, ")")]: {
                        marginTop: 16
                    }
                }
            },
            {
                props: {
                    position: 'start'
                },
                style: {
                    marginRight: 8
                }
            },
            {
                props: {
                    position: 'end'
                },
                style: {
                    marginLeft: 8
                }
            },
            {
                props: {
                    disablePointerEvents: true
                },
                style: {
                    pointerEvents: 'none'
                }
            }
        ]
    };
}));
const InputAdornment = /*#__PURE__*/ react.forwardRef(function InputAdornment(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiInputAdornment'
    });
    const { children, className, component = 'div', disablePointerEvents = false, disableTypography = false, position, variant: variantProp, ...other } = props;
    const muiFormControl = (0,useFormControl/* default */.A)() || {};
    let variant = variantProp;
    if (variantProp && muiFormControl.variant) {
        if (false) {}
    }
    if (muiFormControl && !variant) {
        variant = muiFormControl.variant;
    }
    const ownerState = {
        ...props,
        hiddenLabel: muiFormControl.hiddenLabel,
        size: muiFormControl.size,
        disablePointerEvents,
        position,
        variant
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlContext/* default */.A.Provider, {
        value: null,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputAdornmentRoot, {
            as: component,
            ownerState: ownerState,
            className: (0,clsx/* default */.A)(classes.root, className),
            ref: ref,
            ...other,
            children: typeof children === 'string' && !disableTypography ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                color: "textSecondary",
                children: children
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                children: [
                    position === 'start' ? /* notranslate needed while Google Translate will not fix zero-width space issue */ _span || (_span = /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "notranslate",
                        "aria-hidden": true,
                        children: "\u200B"
                    })) : null,
                    children
                ]
            })
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const InputAdornment_InputAdornment = (InputAdornment);


/***/ }),

/***/ 83286:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// TODO: Remove use of `any` type.
/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/ // https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(34007);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(94285));
const _loadablecontextsharedruntime = __webpack_require__(15960);
function resolve(obj) {
    return obj && obj.default ? obj.default : obj;
}
const ALL_INITIALIZERS = [];
const READY_INITIALIZERS = [];
let initialized = false;
function load(loader) {
    let promise = loader();
    let state = {
        loading: true,
        loaded: null,
        error: null
    };
    state.promise = promise.then((loaded)=>{
        state.loading = false;
        state.loaded = loaded;
        return loaded;
    }).catch((err)=>{
        state.loading = false;
        state.error = err;
        throw err;
    });
    return state;
}
function createLoadableComponent(loadFn, options) {
    let opts = Object.assign({
        loader: null,
        loading: null,
        delay: 200,
        timeout: null,
        webpack: null,
        modules: null
    }, options);
    /** @type LoadableSubscription */ let subscription = null;
    function init() {
        if (!subscription) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            const sub = new LoadableSubscription(loadFn, opts);
            subscription = {
                getCurrentValue: sub.getCurrentValue.bind(sub),
                subscribe: sub.subscribe.bind(sub),
                retry: sub.retry.bind(sub),
                promise: sub.promise.bind(sub)
            };
        }
        return subscription.promise();
    }
    // Server only
    if (false) {}
    // Client only
    if (!initialized && "object" !== 'undefined') {
        // require.resolveWeak check is needed for environments that don't have it available like Jest
        const moduleIds = opts.webpack && "function" === 'function' ? opts.webpack() : opts.modules;
        if (moduleIds) {
            READY_INITIALIZERS.push((ids)=>{
                for (const moduleId of moduleIds){
                    if (ids.includes(moduleId)) {
                        return init();
                    }
                }
            });
        }
    }
    function useLoadableModule() {
        init();
        const context = _react.default.useContext(_loadablecontextsharedruntime.LoadableContext);
        if (context && Array.isArray(opts.modules)) {
            opts.modules.forEach((moduleName)=>{
                context(moduleName);
            });
        }
    }
    function LoadableComponent(props, ref) {
        useLoadableModule();
        const state = _react.default.useSyncExternalStore(subscription.subscribe, subscription.getCurrentValue, subscription.getCurrentValue);
        _react.default.useImperativeHandle(ref, ()=>({
                retry: subscription.retry
            }), []);
        return _react.default.useMemo(()=>{
            if (state.loading || state.error) {
                return /*#__PURE__*/ _react.default.createElement(opts.loading, {
                    isLoading: state.loading,
                    pastDelay: state.pastDelay,
                    timedOut: state.timedOut,
                    error: state.error,
                    retry: subscription.retry
                });
            } else if (state.loaded) {
                return /*#__PURE__*/ _react.default.createElement(resolve(state.loaded), props);
            } else {
                return null;
            }
        }, [
            props,
            state
        ]);
    }
    LoadableComponent.preload = ()=>init();
    LoadableComponent.displayName = 'LoadableComponent';
    return /*#__PURE__*/ _react.default.forwardRef(LoadableComponent);
}
class LoadableSubscription {
    promise() {
        return this._res.promise;
    }
    retry() {
        this._clearTimeouts();
        this._res = this._loadFn(this._opts.loader);
        this._state = {
            pastDelay: false,
            timedOut: false
        };
        const { _res: res, _opts: opts } = this;
        if (res.loading) {
            if (typeof opts.delay === 'number') {
                if (opts.delay === 0) {
                    this._state.pastDelay = true;
                } else {
                    this._delay = setTimeout(()=>{
                        this._update({
                            pastDelay: true
                        });
                    }, opts.delay);
                }
            }
            if (typeof opts.timeout === 'number') {
                this._timeout = setTimeout(()=>{
                    this._update({
                        timedOut: true
                    });
                }, opts.timeout);
            }
        }
        this._res.promise.then(()=>{
            this._update({});
            this._clearTimeouts();
        }).catch((_err)=>{
            this._update({});
            this._clearTimeouts();
        });
        this._update({});
    }
    _update(partial) {
        this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...partial
        };
        this._callbacks.forEach((callback)=>callback());
    }
    _clearTimeouts() {
        clearTimeout(this._delay);
        clearTimeout(this._timeout);
    }
    getCurrentValue() {
        return this._state;
    }
    subscribe(callback) {
        this._callbacks.add(callback);
        return ()=>{
            this._callbacks.delete(callback);
        };
    }
    constructor(loadFn, opts){
        this._loadFn = loadFn;
        this._opts = opts;
        this._callbacks = new Set();
        this._delay = null;
        this._timeout = null;
        this.retry();
    }
}
function Loadable(opts) {
    return createLoadableComponent(load, opts);
}
function flushInitializers(initializers, ids) {
    let promises = [];
    while(initializers.length){
        let init = initializers.pop();
        promises.push(init(ids));
    }
    return Promise.all(promises).then(()=>{
        if (initializers.length) {
            return flushInitializers(initializers, ids);
        }
    });
}
Loadable.preloadAll = ()=>{
    return new Promise((resolveInitializers, reject)=>{
        flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
    });
};
Loadable.preloadReady = (ids)=>{
    if (ids === void 0) ids = [];
    return new Promise((resolvePreload)=>{
        const res = ()=>{
            initialized = true;
            return resolvePreload();
        };
        // We always will resolve, errors should be handled within loading UIs.
        flushInitializers(READY_INITIALIZERS, ids).then(res, res);
    });
};
if (true) {
    window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}
const _default = Loadable; //# sourceMappingURL=loadable.shared-runtime.js.map


/***/ }),

/***/ 85380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Badge_Badge)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
;// ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/usePreviousProps/usePreviousProps.js
'use client';


const usePreviousProps = value => {
  const ref = react.useRef({});
  react.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
/* harmony default export */ const usePreviousProps_usePreviousProps = (usePreviousProps);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(95116);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Badge/useBadge.js
/* __next_internal_client_entry_do_not_use__ default auto */ 
/**
 *
 * Demos:
 *
 * - [Badge](https://mui.com/base-ui/react-badge/#hook)
 *
 * API:
 *
 * - [useBadge API](https://mui.com/base-ui/react-badge/hooks-api/#use-badge)
 */ function useBadge(parameters) {
    const { badgeContent: badgeContentProp, invisible: invisibleProp = false, max: maxProp = 99, showZero = false } = parameters;
    const prevProps = usePreviousProps_usePreviousProps({
        badgeContent: badgeContentProp,
        max: maxProp
    });
    let invisible = invisibleProp;
    if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
        invisible = true;
    }
    const { badgeContent, max = maxProp } = invisible ? prevProps : parameters;
    const displayValue = badgeContent && Number(badgeContent) > max ? "".concat(max, "+") : badgeContent;
    return {
        badgeContent,
        invisible,
        max,
        displayValue
    };
}
/* harmony default export */ const Badge_useBadge = (useBadge);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(64624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(10355);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(36118);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(79209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(99512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(69014);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Badge/badgeClasses.js


function getBadgeUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiBadge', slot);
}
const badgeClasses = (0,generateUtilityClasses/* default */.A)('MuiBadge', [
    'root',
    'badge',
    'dot',
    'standard',
    'anchorOriginTopRight',
    'anchorOriginBottomRight',
    'anchorOriginTopLeft',
    'anchorOriginBottomLeft',
    'invisible',
    'colorError',
    'colorInfo',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorWarning',
    'overlapRectangular',
    'overlapCircular',
    // TODO: v6 remove the overlap value from these class keys
    'anchorOriginTopLeftCircular',
    'anchorOriginTopLeftRectangular',
    'anchorOriginTopRightCircular',
    'anchorOriginTopRightRectangular',
    'anchorOriginBottomLeftCircular',
    'anchorOriginBottomLeftRectangular',
    'anchorOriginBottomRightCircular',
    'anchorOriginBottomRightRectangular'
]);
/* harmony default export */ const Badge_badgeClasses = (badgeClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(98005);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
;// ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Badge/Badge.js
/* __next_internal_client_entry_do_not_use__ default auto */ 













const RADIUS_STANDARD = 10;
const RADIUS_DOT = 4;
const useUtilityClasses = (ownerState)=>{
    const { color, anchorOrigin, invisible, overlap, variant, classes = {} } = ownerState;
    const slots = {
        root: [
            'root'
        ],
        badge: [
            'badge',
            variant,
            invisible && 'invisible',
            "anchorOrigin".concat((0,capitalize/* default */.A)(anchorOrigin.vertical)).concat((0,capitalize/* default */.A)(anchorOrigin.horizontal)),
            "anchorOrigin".concat((0,capitalize/* default */.A)(anchorOrigin.vertical)).concat((0,capitalize/* default */.A)(anchorOrigin.horizontal)).concat((0,capitalize/* default */.A)(overlap)),
            "overlap".concat((0,capitalize/* default */.A)(overlap)),
            color !== 'default' && "color".concat((0,capitalize/* default */.A)(color))
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getBadgeUtilityClass, classes);
};
const BadgeRoot = (0,styled/* default */.Ay)('span', {
    name: 'MuiBadge',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})({
    position: 'relative',
    display: 'inline-flex',
    // For correct alignment with the text.
    verticalAlign: 'middle',
    flexShrink: 0
});
const BadgeBadge = (0,styled/* default */.Ay)('span', {
    name: 'MuiBadge',
    slot: 'Badge',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.badge,
            styles[ownerState.variant],
            styles["anchorOrigin".concat((0,capitalize/* default */.A)(ownerState.anchorOrigin.vertical)).concat((0,capitalize/* default */.A)(ownerState.anchorOrigin.horizontal)).concat((0,capitalize/* default */.A)(ownerState.overlap))],
            ownerState.color !== 'default' && styles["color".concat((0,capitalize/* default */.A)(ownerState.color))],
            ownerState.invisible && styles.invisible
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        boxSizing: 'border-box',
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: theme.typography.pxToRem(12),
        minWidth: RADIUS_STANDARD * 2,
        lineHeight: 1,
        padding: '0 6px',
        height: RADIUS_STANDARD * 2,
        borderRadius: RADIUS_STANDARD,
        zIndex: 1,
        // Render the badge on top of potential ripples.
        transition: theme.transitions.create('transform', {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        variants: [
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'contrastText'
            ])).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        backgroundColor: (theme.vars || theme).palette[color].main,
                        color: (theme.vars || theme).palette[color].contrastText
                    }
                };
            }),
            {
                props: {
                    variant: 'dot'
                },
                style: {
                    borderRadius: RADIUS_DOT,
                    height: RADIUS_DOT * 2,
                    minWidth: RADIUS_DOT * 2,
                    padding: 0
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.anchorOrigin.vertical === 'top' && ownerState.anchorOrigin.horizontal === 'right' && ownerState.overlap === 'rectangular';
                },
                style: {
                    top: 0,
                    right: 0,
                    transform: 'scale(1) translate(50%, -50%)',
                    transformOrigin: '100% 0%',
                    ["&.".concat(Badge_badgeClasses.invisible)]: {
                        transform: 'scale(0) translate(50%, -50%)'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.anchorOrigin.vertical === 'bottom' && ownerState.anchorOrigin.horizontal === 'right' && ownerState.overlap === 'rectangular';
                },
                style: {
                    bottom: 0,
                    right: 0,
                    transform: 'scale(1) translate(50%, 50%)',
                    transformOrigin: '100% 100%',
                    ["&.".concat(Badge_badgeClasses.invisible)]: {
                        transform: 'scale(0) translate(50%, 50%)'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.anchorOrigin.vertical === 'top' && ownerState.anchorOrigin.horizontal === 'left' && ownerState.overlap === 'rectangular';
                },
                style: {
                    top: 0,
                    left: 0,
                    transform: 'scale(1) translate(-50%, -50%)',
                    transformOrigin: '0% 0%',
                    ["&.".concat(Badge_badgeClasses.invisible)]: {
                        transform: 'scale(0) translate(-50%, -50%)'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.anchorOrigin.vertical === 'bottom' && ownerState.anchorOrigin.horizontal === 'left' && ownerState.overlap === 'rectangular';
                },
                style: {
                    bottom: 0,
                    left: 0,
                    transform: 'scale(1) translate(-50%, 50%)',
                    transformOrigin: '0% 100%',
                    ["&.".concat(Badge_badgeClasses.invisible)]: {
                        transform: 'scale(0) translate(-50%, 50%)'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.anchorOrigin.vertical === 'top' && ownerState.anchorOrigin.horizontal === 'right' && ownerState.overlap === 'circular';
                },
                style: {
                    top: '14%',
                    right: '14%',
                    transform: 'scale(1) translate(50%, -50%)',
                    transformOrigin: '100% 0%',
                    ["&.".concat(Badge_badgeClasses.invisible)]: {
                        transform: 'scale(0) translate(50%, -50%)'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.anchorOrigin.vertical === 'bottom' && ownerState.anchorOrigin.horizontal === 'right' && ownerState.overlap === 'circular';
                },
                style: {
                    bottom: '14%',
                    right: '14%',
                    transform: 'scale(1) translate(50%, 50%)',
                    transformOrigin: '100% 100%',
                    ["&.".concat(Badge_badgeClasses.invisible)]: {
                        transform: 'scale(0) translate(50%, 50%)'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.anchorOrigin.vertical === 'top' && ownerState.anchorOrigin.horizontal === 'left' && ownerState.overlap === 'circular';
                },
                style: {
                    top: '14%',
                    left: '14%',
                    transform: 'scale(1) translate(-50%, -50%)',
                    transformOrigin: '0% 0%',
                    ["&.".concat(Badge_badgeClasses.invisible)]: {
                        transform: 'scale(0) translate(-50%, -50%)'
                    }
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.anchorOrigin.vertical === 'bottom' && ownerState.anchorOrigin.horizontal === 'left' && ownerState.overlap === 'circular';
                },
                style: {
                    bottom: '14%',
                    left: '14%',
                    transform: 'scale(1) translate(-50%, 50%)',
                    transformOrigin: '0% 100%',
                    ["&.".concat(Badge_badgeClasses.invisible)]: {
                        transform: 'scale(0) translate(-50%, 50%)'
                    }
                }
            },
            {
                props: {
                    invisible: true
                },
                style: {
                    transition: theme.transitions.create('transform', {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.leavingScreen
                    })
                }
            }
        ]
    };
}));
function getAnchorOrigin(anchorOrigin) {
    var _anchorOrigin_vertical, _anchorOrigin_horizontal;
    return {
        vertical: (_anchorOrigin_vertical = anchorOrigin === null || anchorOrigin === void 0 ? void 0 : anchorOrigin.vertical) !== null && _anchorOrigin_vertical !== void 0 ? _anchorOrigin_vertical : 'top',
        horizontal: (_anchorOrigin_horizontal = anchorOrigin === null || anchorOrigin === void 0 ? void 0 : anchorOrigin.horizontal) !== null && _anchorOrigin_horizontal !== void 0 ? _anchorOrigin_horizontal : 'right'
    };
}
const Badge = /*#__PURE__*/ react.forwardRef(function Badge(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiBadge'
    });
    const { anchorOrigin: anchorOriginProp, className, classes: classesProp, component, components = {}, componentsProps = {}, children, overlap: overlapProp = 'rectangular', color: colorProp = 'default', invisible: invisibleProp = false, max: maxProp = 99, badgeContent: badgeContentProp, slots, slotProps, showZero = false, variant: variantProp = 'standard', ...other } = props;
    const { badgeContent, invisible: invisibleFromHook, max, displayValue: displayValueFromHook } = Badge_useBadge({
        max: maxProp,
        invisible: invisibleProp,
        badgeContent: badgeContentProp,
        showZero
    });
    const prevProps = usePreviousProps_usePreviousProps({
        anchorOrigin: getAnchorOrigin(anchorOriginProp),
        color: colorProp,
        overlap: overlapProp,
        variant: variantProp,
        badgeContent: badgeContentProp
    });
    const invisible = invisibleFromHook || badgeContent == null && variantProp !== 'dot';
    const { color = colorProp, overlap = overlapProp, anchorOrigin: anchorOriginPropProp, variant = variantProp } = invisible ? prevProps : props;
    const anchorOrigin = getAnchorOrigin(anchorOriginPropProp);
    const displayValue = variant !== 'dot' ? displayValueFromHook : undefined;
    const ownerState = {
        ...props,
        badgeContent,
        invisible,
        max,
        displayValue,
        showZero,
        anchorOrigin,
        color,
        overlap,
        variant
    };
    const classes = useUtilityClasses(ownerState);
    var _slots_root, _slots_badge, _slotProps_root, _slotProps_badge;
    // support both `slots` and `components` for backward compatibility
    const externalForwardedProps = {
        slots: {
            root: (_slots_root = slots === null || slots === void 0 ? void 0 : slots.root) !== null && _slots_root !== void 0 ? _slots_root : components.Root,
            badge: (_slots_badge = slots === null || slots === void 0 ? void 0 : slots.badge) !== null && _slots_badge !== void 0 ? _slots_badge : components.Badge
        },
        slotProps: {
            root: (_slotProps_root = slotProps === null || slotProps === void 0 ? void 0 : slotProps.root) !== null && _slotProps_root !== void 0 ? _slotProps_root : componentsProps.root,
            badge: (_slotProps_badge = slotProps === null || slotProps === void 0 ? void 0 : slotProps.badge) !== null && _slotProps_badge !== void 0 ? _slotProps_badge : componentsProps.badge
        }
    };
    const [RootSlot, rootProps] = (0,useSlot/* default */.A)('root', {
        elementType: BadgeRoot,
        externalForwardedProps: {
            ...externalForwardedProps,
            ...other
        },
        ownerState,
        className: (0,clsx/* default */.A)(classes.root, className),
        ref,
        additionalProps: {
            as: component
        }
    });
    const [BadgeSlot, badgeProps] = (0,useSlot/* default */.A)('badge', {
        elementType: BadgeBadge,
        externalForwardedProps,
        ownerState,
        className: classes.badge
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(RootSlot, {
        ...rootProps,
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BadgeSlot, {
                ...badgeProps,
                children: displayValue
            })
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Badge_Badge = (Badge);


/***/ }),

/***/ 92824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M8.5 8c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8M12 18c-2.28 0-4.22-1.66-5-4h10c-.78 2.34-2.72 4-5 4m3.5-7c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5"
}), 'EmojiEmotions'));


/***/ }),

/***/ 99846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"
}), 'LocationOn'));


/***/ })

}]);
//# sourceMappingURL=8227-18b1b1560b35cb9c.js.map