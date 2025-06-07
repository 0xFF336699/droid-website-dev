(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1880],{

/***/ 5782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ TabbarContainer)
/* harmony export */ });
/* unused harmony export NavBar */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33736);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31453);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45054);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2625);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46925);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23114);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97721);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76654);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90228);
/* harmony import */ var _mui_icons_material_Storefront__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54497);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79764);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61182);
/* harmony import */ var _page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55960);
/* harmony import */ var _mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48249);
/* __next_internal_client_entry_do_not_use__ NavBar,TabbarContainer auto */ 









function BottomBar() {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        id: "bottom-navigation",
        sx: {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0
        },
        elevation: 3,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavBar, {})
    });
}
function NavBar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { pathname } = router;
    const { t } = (0,_barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .Bd)("app-ui/components/tabbar/content");
    const tabInfoList = [
        {
            label: t("content.home"),
            value: "/",
            icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {})
        },
        {
            label: t("content.create"),
            value: "/script-creator",
            icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {})
        },
        {
            label: t("content.market"),
            value: "/market",
            icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Storefront__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {})
        },
        {
            label: t("content.settings"),
            value: "/settings",
            icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {})
        }
    ];
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        showLabels: true,
        value: pathname,
        children: tabInfoList.map((e)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                label: e.label,
                icon: e.icon,
                "data-id": "tabbar-".concat(e.value),
                className: pathname === e.value ? "Mui-selected" : "",
                onClick: ()=>{
                    if (pathname === e.value) return;
                    router.push(e.value);
                }
            }, e.value))
    });
}
function TabbarContainer(param) {
    let { children, titleConf } = param;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
        sx: {
            display: "flex",
            flexDirection: "column",
            height: "100vh"
        },
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay, {}),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                direction: "column",
                spacing: 3,
                children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                        titleConf,
                        children
                    }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BottomBar, {})
                ]
            })
        ]
    });
} //# sourceMappingURL=Tabbar.js.map


/***/ }),

/***/ 8176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Paper_Paper)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(401);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@11_pdm6rbm33hbobpxddqovt6fgli/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(14407);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(17122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(30845);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(13492);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(63375);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/styles/getOverlayAlpha.js
var getOverlayAlpha = __webpack_require__(73903);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(75719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(42159);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Paper/paperClasses.js


function getPaperUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiPaper', slot);
}
const paperClasses = (0,generateUtilityClasses/* default */.A)('MuiPaper', [
    'root',
    'rounded',
    'outlined',
    'elevation',
    'elevation0',
    'elevation1',
    'elevation2',
    'elevation3',
    'elevation4',
    'elevation5',
    'elevation6',
    'elevation7',
    'elevation8',
    'elevation9',
    'elevation10',
    'elevation11',
    'elevation12',
    'elevation13',
    'elevation14',
    'elevation15',
    'elevation16',
    'elevation17',
    'elevation18',
    'elevation19',
    'elevation20',
    'elevation21',
    'elevation22',
    'elevation23',
    'elevation24'
]);
/* harmony default export */ const Paper_paperClasses = ((/* unused pure expression or super */ null && (paperClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Paper/Paper.js
/* __next_internal_client_entry_do_not_use__ default auto */ 












const useUtilityClasses = (ownerState)=>{
    const { square, elevation, variant, classes } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            !square && 'rounded',
            variant === 'elevation' && "elevation".concat(elevation)
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getPaperUtilityClass, classes);
};
const PaperRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.variant],
            !ownerState.square && styles.rounded,
            ownerState.variant === 'elevation' && styles["elevation".concat(ownerState.elevation)]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        backgroundColor: (theme.vars || theme).palette.background.paper,
        color: (theme.vars || theme).palette.text.primary,
        transition: theme.transitions.create('box-shadow'),
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.square;
                },
                style: {
                    borderRadius: theme.shape.borderRadius
                }
            },
            {
                props: {
                    variant: 'outlined'
                },
                style: {
                    border: "1px solid ".concat((theme.vars || theme).palette.divider)
                }
            },
            {
                props: {
                    variant: 'elevation'
                },
                style: {
                    boxShadow: 'var(--Paper-shadow)',
                    backgroundImage: 'var(--Paper-overlay)'
                }
            }
        ]
    };
}));
const Paper = /*#__PURE__*/ react.forwardRef(function Paper(inProps, ref) {
    var _theme_vars_overlays;
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiPaper'
    });
    const theme = (0,useTheme/* default */.A)();
    const { className, component = 'div', elevation = 1, square = false, variant = 'elevation', ...other } = props;
    const ownerState = {
        ...props,
        component,
        elevation,
        square,
        variant
    };
    const classes = useUtilityClasses(ownerState);
    if (false) {}
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PaperRoot, {
        as: component,
        ownerState: ownerState,
        className: (0,clsx/* default */.A)(classes.root, className),
        ref: ref,
        ...other,
        style: {
            ...variant === 'elevation' && {
                '--Paper-shadow': (theme.vars || theme).shadows[elevation],
                ...theme.vars && {
                    '--Paper-overlay': (_theme_vars_overlays = theme.vars.overlays) === null || _theme_vars_overlays === void 0 ? void 0 : _theme_vars_overlays[elevation]
                },
                ...!theme.vars && theme.palette.mode === 'dark' && {
                    '--Paper-overlay': "linear-gradient(".concat((0,colorManipulator/* alpha */.X4)('#fff', (0,getOverlayAlpha/* default */.A)(elevation)), ", ").concat((0,colorManipulator/* alpha */.X4)('#fff', (0,getOverlayAlpha/* default */.A)(elevation)), ")")
                }
            },
            ...other.style
        }
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Paper_Paper = (Paper);


/***/ }),

/***/ 20311:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n_: () => (/* binding */ K)
/* harmony export */ });
/* unused harmony exports initializeChildListener, updateParentScrollOnResize */
const p = () => typeof window < "u", R = () => window.self !== window.top, b = (e) => e instanceof HTMLIFrameElement, M = (e) => {
  window.document.readyState === "complete" ? e() : window.addEventListener("load", e);
}, T = (e, t) => {
  t(), e.addEventListener("load", t);
}, C = (e, t) => {
  var o, r;
  const n = ((o = e.contentWindow) == null ? void 0 : o.document.readyState) === "complete";
  return e.src !== "about:blank" && ((r = e.contentWindow) == null ? void 0 : r.location.href) !== "about:blank" && n ? t() : e.addEventListener("load", t);
}, k = () => ({ offsetSize: 0, checkOrigin: !0, enableLegacyLibSupport: !1 }), B = (e) => {
  try {
    return new URL(e.src).origin === window.location.origin;
  } catch {
    return !1;
  }
}, D = (e) => {
  try {
    const t = new URL(e.src).origin;
    if (t !== "about:blank")
      return t;
  } catch {
  }
  return null;
}, W = (e) => (Object.keys(e).forEach((t) => e[t] === void 0 && delete e[t]), e), L = (e) => {
  const { height: t, width: n } = e.getBoundingClientRect();
  return { height: Math.ceil(t), width: Math.ceil(n) };
}, f = (e, t) => e ? t ? e.querySelector(t) : e.documentElement : null, O = (e, t) => {
  e && (t.bodyPadding && (e.body.style.padding = t.bodyPadding), t.bodyMargin && (e.body.style.margin = t.bodyMargin));
}, m = (e) => e <= 100 ? 100 : e <= 120 ? 1e3 : 1e4, A = () => "[iFrameSizer]ID:0:false:false:32:true:true::auto:::0:false:child:auto:true:::true:::false";
function H(e) {
  if (typeof e.data != "string" || !e.data.startsWith("[iFrameSizer]") || !e.data.endsWith("mutationObserver") && !e.data.endsWith("resizeObserver"))
    return null;
  const [t, n] = e.data.split(":"), i = +n;
  return i > 0 ? i : null;
}
const z = q();
let l = [];
const K = (e, t) => {
  if (!p())
    return [];
  const n = { ...k(), ...W(e ?? {}) }, i = P(t), o = x(n, i);
  return i.map((r) => {
    const s = {
      iframe: r,
      settings: n,
      interactionState: { isHovered: !1 },
      initContext: { isInitialized: !1, retryAttempts: 0 }
    }, a = F(s, o);
    return l.push(s), {
      unsubscribe: () => {
        a(), l = l.filter((d) => d.iframe !== r);
      }
    };
  });
};
function P(e) {
  return typeof e == "string" ? Array.from(document.querySelectorAll(e)).filter(b) : e ? b(e) ? [e] : [] : Array.from(document.getElementsByTagName("iframe"));
}
function x(e, t) {
  if (Array.isArray(e.checkOrigin))
    return e.checkOrigin;
  if (!e.checkOrigin)
    return [];
  const n = [];
  for (const i of t) {
    const o = D(i);
    o && n.push(o);
  }
  return n;
}
function F(e, t) {
  const n = B(e.iframe) ? U(e) : N(e, t), i = $(e);
  return () => {
    n(), i();
  };
}
function N(e, t) {
  const {
    iframe: n,
    initContext: i,
    settings: { checkOrigin: o, enableLegacyLibSupport: r, targetElementSelector: s, bodyPadding: a, bodyMargin: d }
  } = e, h = (c) => {
    var y;
    const E = !o || t.includes(c.origin);
    if (!(!(n.contentWindow === c.source) || !E)) {
      if (((y = c.data) == null ? void 0 : y.type) === "iframe-resized") {
        const { height: u } = c.data;
        u && g({ newHeight: u, registeredElement: e });
        return;
      }
      if (r) {
        const u = H(c);
        u !== null && g({ newHeight: u, registeredElement: e });
        return;
      }
    }
  };
  window.addEventListener("message", h);
  const S = r ? A() : { type: "iframe-child-init", targetElementSelector: s, bodyPadding: a, bodyMargin: d }, w = () => {
    T(n, () => {
      var c;
      return (c = n.contentWindow) == null ? void 0 : c.postMessage(S, "*");
    }), i.retryAttempts++, i.retryTimeoutId = window.setTimeout(w, m(i.retryAttempts));
  };
  return w(), () => window.removeEventListener("message", h);
}
function U(e) {
  const { iframe: t, settings: n } = e, { targetElementSelector: i } = n;
  let o = 0;
  const r = () => {
    const s = f(t.contentDocument, i);
    if (!t.contentDocument || !s)
      return o++, setTimeout(r, m(o));
    O(t.contentDocument, n), z().observe(s);
  };
  return C(t, r), () => {
    const s = f(t.contentDocument, i);
    s && z().unobserve(s), t.removeEventListener("load", r);
  };
}
function $({ iframe: e, interactionState: t }) {
  const n = () => {
    t.isHovered = !0;
  }, i = () => {
    t.isHovered = !1;
  };
  return e.addEventListener("mouseenter", n), e.addEventListener("mouseleave", i), () => {
    e.removeEventListener("mouseenter", n), e.removeEventListener("mouseleave", i);
  };
}
function q() {
  let e = null;
  return () => {
    if (!e) {
      const t = ({ target: n }) => {
        const i = l.find(({ iframe: d }) => d.contentDocument === n.ownerDocument);
        if (!i)
          return;
        const { iframe: o, settings: r } = i, s = f(o.contentDocument, r.targetElementSelector);
        if (!s)
          return;
        const { height: a } = L(s);
        a && g({ newHeight: a, registeredElement: i });
      };
      e = new ResizeObserver((n) => n.forEach(t));
    }
    return e;
  };
}
function g({ registeredElement: e, newHeight: t }) {
  const { iframe: n, settings: i, interactionState: o, initContext: r } = e;
  r.isInitialized || (r.isInitialized = !0, clearTimeout(r.retryTimeoutId));
  const s = n.getBoundingClientRect(), a = t + i.offsetSize;
  if (n.style.height = `${a}px`, !i.onIframeResize)
    return;
  const d = {
    iframe: n,
    settings: { ...i },
    interactionState: { ...o },
    previousRenderState: { rect: s },
    nextRenderState: { rect: n.getBoundingClientRect() }
  };
  i.onIframeResize(d);
}
const V = G();
let v = !1;
_();
function _() {
  !p() || !R() || window.addEventListener("message", (e) => {
    var t;
    ((t = e.data) == null ? void 0 : t.type) === "iframe-child-init" && M(() => I(e));
  });
}
function I(e, t = 0) {
  const { targetElementSelector: n, bodyPadding: i, bodyMargin: o } = e.data, r = f(document, n);
  if (v || window.parent !== e.source)
    return;
  if (!r)
    return setTimeout(() => I(e, t + 1), m(t));
  O(document, { bodyMargin: o, bodyPadding: i });
  const s = V();
  s.disconnect(), s.observe(r), v = !0;
}
function G() {
  let e = null;
  return () => (e || (e = new ResizeObserver((t) => {
    if (!t[0].target)
      return;
    const { height: n, width: i } = L(t[0].target), o = {
      type: "iframe-resized",
      width: i,
      height: n
    };
    window.parent.postMessage(o, "*");
  })), e);
}
const Q = ({ previousRenderState: e, nextRenderState: t, iframe: n }) => {
  document.activeElement === n && window.scrollBy(0, t.rect.bottom - e.rect.bottom);
};



/***/ }),

/***/ 61182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_1_4_i18next_24_1_0_typescript_5_8_2_react_dom_19_0_0_react_19_0_0_react_19_0_0_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_1_4_i18next_24_1_0_typescript_5_8_2_react_dom_19_0_0_react_19_0_0_react_19_0_0_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56750);



/***/ }),

/***/ 61854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ marketHtmlUtils)
/* harmony export */ });
function createHtml(script, opts) {
    return '<html>\n    <head>\n    <script type="importmap">\n  {\n    "imports": {\n      "react": "https://esm.sh/react@19",\n      "react-dom/client": "https://esm.sh/react-dom@19/client"\n    }\n  }\n</script>\n        <script>\n                const IFRAME_ID = \''.concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, "';\n                window.IFRAME_ID = '").concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, '\';\n                \n            var autoWebViewJs = window.autoWebViewJs = window.parent.window.autoWebViewJs;\n            autoWebViewJs = window.parent.window.autoWebViewJs;\n            var callScript = window.callScript = autoWebViewJs.callScript;\n            var callScriptByConf = window.callScriptByConf = autoWebViewJs.callScriptByConf;\n            var isRealInAndroid = window.isRealInAndroid;\n            // var storeUtilsConf = window.storeUtilsConf = window.parent.window.storeUtilsConf;\n            var storeUtilsConf = window.storeUtilsConf = {\n                ns:{},\n                read:window.parent.window.storeUtilsConf.read,\n                write:window.parent.window.storeUtilsConf.write   \n            }\n        </script>\n        <title>droid lego</title>\n        <style>html, body{margin-left:-0px;padding:0;\n        background-color: white;}</style>\n    </head>\n    <body>\n        <div id="app"></div>\n        <script>').concat(script, "</script>\n        <script>\n                // const IFRAME_ID = '").concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, "';\n                function notifyResize() {\n                    const body = document.body;\n                    const html = document.documentElement;\n                    \n                    // 获取实际内容高度（取最大值）\n                    const height = Math.max(\n                        body.scrollHeight,\n                        body.offsetHeight,\n                        html.scrollHeight,\n                        html.offsetHeight\n                    );\n                    \n                    // 获取实际内容宽度\n                    const width = Math.max(\n                        body.scrollWidth,\n                        body.offsetWidth,\n                        html.scrollWidth,\n                        html.offsetWidth\n                    );\n                    \n                    // 发送消息给父窗口\n                    window.parent.postMessage({\n                        type: 'resize',\n                        iframeId: IFRAME_ID,\n                        height,\n                        width\n                    }, '*');\n                }\n                \n                // 监听窗口大小变化\n                window.addEventListener('resize', notifyResize);\n                \n                // 监听DOMContentLoaded，确保DOM加载完毕后调整大小\n                document.addEventListener('DOMContentLoaded', notifyResize);\n                \n                // 监听load事件，确保所有资源加载完毕后调整大小\n                window.addEventListener('load', notifyResize);\n                \n                // 创建MutationObserver监听DOM变化\n                const observer = new MutationObserver(notifyResize);\n                observer.observe(document.documentElement, {\n                    childList: true,\n                    subtree: true,\n                    attributes: true,\n                    characterData: true\n                });\n                \n                // 监听来自父窗口的消息，处理请求重新调整大小的消息\n                window.addEventListener('message', function(event) {\n                    if (event.data && event.data.type === 'requestResize') {\n                        // 主动触发一次尺寸计算和发送\n                        notifyResize();\n                    }\n                });\n                \n                // 初始化大小\n                notifyResize();\n        </script>\n    </body>\n</html>");
}
function mergeHtml(html, opts) {
    let h = html;
    if (!h.includes('<body')) {
        h = "<body>".concat(h, "</body>");
    }
    if (!h.includes('<html')) {
        h = "<html>".concat(h, "</html>");
    }
    if (!h.includes('<head')) {
        h = h.replace('<html>', '<html><head></head>');
    }
    h = h.replace('<head>', "<head><script>\n                const IFRAME_ID = '".concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, "';\n                window.IFRAME_ID = '").concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, "';\n                \n            var autoWebViewJs = window.autoWebViewJs = window.parent.window.autoWebViewJs;\n            autoWebViewJs = window.parent.window.autoWebViewJs;\n            var callScript = window.callScript = autoWebViewJs.callScript;\n            var callScriptByConf = window.callScriptByConf = autoWebViewJs.callScriptByConf;\n            var isRealInAndroid = window.isRealInAndroid;\n            // var storeUtilsConf = window.storeUtilsConf = window.parent.window.storeUtilsConf;\n            var storeUtilsConf = window.storeUtilsConf = {\n                ns:{},\n                read:window.parent.window.storeUtilsConf.read,\n                write:window.parent.window.storeUtilsConf.write   \n            }\n        </script>\n        \n        <style>html, body{margin-left:-0px;padding:0;\n        background-color: white;}</style>"));
    h = h.replace("</body>", "\n        \n        <script>\n                function notifyResize() {\n                    const body = document.body;\n                    const html = document.documentElement;\n                    \n                    // 获取实际内容高度（取最大值）\n                    const height = Math.max(\n                        body.scrollHeight,\n                        body.offsetHeight,\n                        html.scrollHeight,\n                        html.offsetHeight\n                    );\n                    \n                    // 获取实际内容宽度\n                    const width = Math.max(\n                        body.scrollWidth,\n                        body.offsetWidth,\n                        html.scrollWidth,\n                        html.offsetWidth\n                    );\n                    \n                    // 发送消息给父窗口\n                    window.parent.postMessage({\n                        type: 'resize',\n                        iframeId: IFRAME_ID,\n                        height,\n                        width\n                    }, '*');\n                }\n                \n                // 监听窗口大小变化\n                window.addEventListener('resize', notifyResize);\n                \n                // 监听DOMContentLoaded，确保DOM加载完毕后调整大小\n                document.addEventListener('DOMContentLoaded', notifyResize);\n                \n                // 监听load事件，确保所有资源加载完毕后调整大小\n                window.addEventListener('load', notifyResize);\n                \n                // 创建MutationObserver监听DOM变化\n                const observer = new MutationObserver(notifyResize);\n                observer.observe(document.documentElement, {\n                    childList: true,\n                    subtree: true,\n                    attributes: true,\n                    characterData: true\n                });\n                \n                // 监听来自父窗口的消息，处理请求重新调整大小的消息\n                window.addEventListener('message', function(event) {\n                    if (event.data && event.data.type === 'requestResize') {\n                        // 主动触发一次尺寸计算和发送\n                        notifyResize();\n                    }\n                });\n                \n                // 初始化大小\n                notifyResize();\n        </script>\n        </body>");
    console.log('hhhhhhhhhhhhh=', h);
    return h;
}
async function createHtmlByUrl(url, opts) {
    const res = await fetch(url);
    const content = await res.text();
    return createHtml(content, opts);
}
const marketHtmlUtils = {
    createHtml,
    createHtmlByUrl,
    mergeHtml
};


/***/ }),

/***/ 63483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MarketPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/app/AppShell.js + 1 modules
var AppShell = __webpack_require__(42375);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/tabbar/Tabbar.js
var Tabbar = __webpack_require__(5782);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(15463);
;// ./src/components/page/market/data/market.context.tsx



const [MarketPageDataContextProvider, useMarketPageData] = (0,src.createTypedContext)();
const MarketPageDataContextLoader = (0,src.createAsyncContextLoader)({
    Provider: MarketPageDataContextProvider,
    extract: (res)=>res.data,
    fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: "Loading..."
    })
});

;// ./src/components/page/market/data/ns.ts
const ns = 'market';
const androidData = "".concat(ns, ":android");
const webData = "".concat(ns, ":web");
const marketNs = {
    ns,
    androidData,
    webData
};

;// ./src/components/page/market/data/market.data.intf.ts


function createDefaultMarketPageData() {
    return {
        scriptsInfo: {
            scripts: [
                {
                    ns: "@fanfanlo/scripts/emergency-alarm",
                    name: "emergency-alarm",
                    version: "1.0.0",
                    url: "/scripts/fanfanlo/scripts/emergency-alarm/index.js",
                    content: ""
                }
            ],
            total: 0,
            loadIsEnded: false,
            loadIsFailed: false
        }
    };
}
function createMarketPageData() {
    return createDefaultMarketPageData();
}
let loader;
async function loadMarketPageData() {
    if (loader) return loader;
    const defData = createDefaultMarketPageData();
    loader = src.storeUtils.getNamespaceStoreWithData(marketNs.androidData, {
        defData,
        forceReset: false,
        mergeDefData: true
    });
    return loader;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(20532);
// EXTERNAL MODULE: ./src/markets/market-html-utils.ts
var market_html_utils = __webpack_require__(61854);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/iframe/IFrameReactContainer.js + 1 modules
var IFrameReactContainer = __webpack_require__(5828);
;// ./src/components/page/market/components/scripts/Script.tsx




const Script = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: props.script.name
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: props.script.summary
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IFrameReactContainer/* IFrameReactContainer */.T, {
                    url: props.script.url,
                    urlAsContent: true,
                    htmlBuilder: market_html_utils/* marketHtmlUtils */.P.createHtml
                })
            })
        ]
    });
};

;// ./src/components/page/market/components/scripts/Scripts.tsx




const Scripts = ()=>{
    const data = useMarketPageData();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: data.scriptsInfo.scripts.map((script)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Script, {
                script: script
            }, "".concat(script.url, "-").concat(script.content, "-").concat(script.name, "-").concat(script.version, "-").concat(script.ns));
        })
    });
};

;// ./src/components/page/market/MarketContent.tsx



const MarketContent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Scripts, {})
    });
};

;// ./src/pages/market/index.tsx





// function Content({loader}: {loader: Promise<IStoreWithData<IMarketPageData>>}){
//     const store = use(loader);
//     console.log('store=', store);
//     return (<MarketPageDataContextProvider value={store.data}>
//     <MarketContent />
// </MarketPageDataContextProvider>
//     )
// }
// export default function MarketPage() {
//     const loader = loadMarketPageData();
//     return (
//             <AppShell>
//                 <TabbarContainer titleConf={{ ns: "homepage/pages/market/content", key: "market.title" }}>
//                 <Suspense fallback={<div>loading</div>}>
//                     <Content loader={loader} />
//                 </Suspense>
//                 </TabbarContainer>
//             </AppShell>
//         )
// }
function MarketPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabbar/* TabbarContainer */.y, {
            titleConf: {
                ns: "homepage/pages/market/content",
                key: "market.title"
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketPageDataContextLoader, {
                value: loadMarketPageData(),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketContent, {})
            })
        })
    });
}


/***/ }),

/***/ 77610:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/market",
      function () {
        return __webpack_require__(63483);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [485,668,8454,9582,9300,743,5887,636,6593,8792], () => (__webpack_exec__(77610)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=market-f34edf22ec4b2b98.js.map