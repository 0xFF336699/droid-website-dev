(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2032],{

/***/ 26544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ useProxyWatchUpdates),
/* harmony export */   p: () => (/* binding */ useWatchUpdates)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80036);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91844);
/* harmony import */ var _watchUpdates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28523);
/* harmony import */ var _useProxyWatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82916);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56934);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9350);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};






function useWatchUpdates(target, conf) {
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(target);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log("use watch updates look look id", _utils__WEBPACK_IMPORTED_MODULE_2__/* .objectCountUtils */ ._.getObjectCount(target));
        (0,_watchUpdates__WEBPACK_IMPORTED_MODULE_3__/* .watchUpdates */ .c)(target, (info)=>{
            console.log("uuuuuuuuuupdated", info);
            console.log("tttttttarget=", target);
            const now = lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(info.target) ? [
                ...info.target
            ] : info.target;
            setValue(lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(target) ? [
                ...target
            ] : __spreadValues({}, target));
        }, conf);
    }, []);
    return [
        value
    ];
}
function useProxyWatchUpdates(target, propertyChain, defaultValue, conf) {
    const logger = new _log__WEBPACK_IMPORTED_MODULE_4__/* .Log */ .tG(false, "useProxyWatchUpdates_fn");
    logger.pause = true;
    const [v] = (0,_useProxyWatch__WEBPACK_IMPORTED_MODULE_5__/* .useProxyWatch */ .x)(target, propertyChain, defaultValue);
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(v);
    logger.log("propertyChain=", propertyChain);
    logger.log("value=", value);
    logger.log("v=", v);
    logger.log("defaultValue=", defaultValue);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        logger.log("useEffect_fn v=", v);
        const newValue = lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(v) ? [
            ...v
        ] : Object.assign({}, v);
        setValue(newValue);
        return (0,_watchUpdates__WEBPACK_IMPORTED_MODULE_3__/* .watchUpdates */ .c)(v, (info)=>{
            logger.log("watchUpdates_fn", "info=", info);
            const newValue2 = lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(v) ? [
                ...v
            ] : Object.assign({}, v);
            setValue(newValue2);
        }, conf);
    }, [
        v
    ]);
    return [
        value,
        v
    ];
} //# sourceMappingURL=useWatchUpdates.js.map


/***/ }),

/***/ 42375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ AppShell)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(15463);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js
var proxyWatch = __webpack_require__(99759);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/watchUpdates.js
var watchUpdates = __webpack_require__(28523);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.1_@babel+core@7.26.0_babel-plugin-macros@3.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.82.0/node_modules/next/router.js
var next_router = __webpack_require__(79764);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.1.4_i18next@24.1.0_typescript@5.8.2__react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(56750);
;// __barrel_optimize__?names=I18nextProvider!=!../../node_modules/.pnpm/react-i18next@15.1.4_i18next@24.1.0_typescript@5.8.2__react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-i18next/dist/es/index.js


;// ../../libs/app/ui/dist/src/components/app/AppShell.js
/* __next_internal_client_entry_do_not_use__ AppShell auto */ 





(0,src.i18nInit)();
function AppShell(param) {
    let { children } = param;
    const router = (0,next_router.useRouter)();
    const scrollKey = "scrollPositionInfo";
    const href = window.location.href.split("#")[0];
    const dynamicKey = "dynamic-".concat(href);
    const s = src.storeUtils.namespace(dynamicKey);
    let o = s.read(dynamicKey);
    if (!o) {
        o = {};
        s.write(dynamicKey, o);
    }
    o = (0,proxyWatch/* toProxy */.I$)(o);
    (0,react.useEffect)(()=>{
        router.beforePopState((state)=>{
            s.clearAll();
            return true;
        });
    });
    (0,react.useEffect)(()=>{
        s.write(dynamicKey, o);
        return (0,watchUpdates/* watchUpdates */.c)(o, ()=>{
            s.write(dynamicKey, o);
        });
    }, []);
    (0,react.useEffect)(()=>{
        const info = s.read(scrollKey) || {
            x: 0,
            y: 0
        };
        if (info.x == 0 && info.y == 0) {
            listenScroll();
        } else {
            window.requestAnimationFrame(()=>{
                window.scrollTo(info.x, info.y);
                listenScroll();
            });
        }
        function onScroll(e) {
            s.write(scrollKey, {
                x: window.scrollX,
                y: window.scrollY
            });
        }
        function listenScroll() {
            window.addEventListener("scroll", onScroll);
        }
        function unsub() {
            window.removeEventListener("scroll", onScroll);
        }
        return unsub;
    });
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(src.StorePageContext, {
        value: s,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(src.StorePageDynamicContext, {
            value: o,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(es/* I18nextProvider */.xC, {
                i18n: src.i18n,
                children
            })
        })
    });
} //# sourceMappingURL=AppShell.js.map


/***/ }),

/***/ 55960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AndroidPageContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(46925);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(29800);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(87239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/nextjs/env/env.js
var env = __webpack_require__(91839);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(15463);
;// ../../libs/app/ui/dist/src/components/page/PageContent.js

var __async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};





function Reload() {
    if (!env/* isDev */.Cu) return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: "  "
    });
    const { t } = (0,src.useTranslation)("app-ui/components/page/content");
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* default */.A, {
                onClick: ()=>{
                    window.location.reload();
                },
                children: t("PageContent.refresh")
            }),
            /* @__PURE__ */ new Date().toLocaleString()
        ]
    });
}
const ScrollP = /*#__PURE__*/ (0,react.createContext)({
    x: 0,
    y: 0
});
let index = 0;
function PageContent(param) {
    let { children, titleConf, reload } = param;
    index++;
    const scroll = (0,react.useContext)(ScrollP);
    const clazz = "".concat(Date.now() + Math.random() * Date.now());
    (0,react.useEffect)(()=>{
        function loadTitle() {
            return __async(this, null, function*() {
                if (!titleConf) return;
                let title = titleConf.title;
                if (titleConf.ns) {
                    title = yield (0,src.loadI18nValue)(titleConf.ns, titleConf.key || "content.title");
                }
                if (!title) return;
                document.title = title;
            });
        }
        loadTitle();
    }, []);
    (0,react.useEffect)(()=>{
        const container = document.getElementsByClassName(clazz)[0];
        if (!container) return;
        container.scrollTop = scroll.y;
        const onScroll = ()=>{
            var scrollTop = container.scrollTop;
            scroll.y = scrollTop;
        };
        container.removeEventListener("scroll", onScroll);
        container.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>container.removeEventListener("scroll", onScroll);
    }, [
        clazz,
        scroll
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Container/* default */.A, {
        className: clazz,
        sx: {
            flexGrow: 1,
            overflow: "auto",
            padding: "0px"
        },
        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                (reload || reload == void 0) && /* @__PURE__ */ (0,jsx_runtime.jsx)(Reload, {}),
                children
            ]
        })
    });
} //# sourceMappingURL=PageContent.js.map

;// ../../libs/app/ui/dist/src/components/page/AndroidPageContent.js



function AndroidPageContent(param) {
    let { children, titleConf, reload } = param;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(PageContent, {
        titleConf,
        reload,
        children
    });
} //# sourceMappingURL=AndroidPageContent.js.map


/***/ }),

/***/ 66684:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/im/room",
      function () {
        return __webpack_require__(96550);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 77190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ AppbarContainer)
});

// UNUSED EXPORTS: Appbar

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/useScrollTrigger/useScrollTrigger.js
var useScrollTrigger = __webpack_require__(39088);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Slide/Slide.js + 3 modules
var Slide = __webpack_require__(63892);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(1940);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(46925);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(23114);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/AppBar/AppBar.js + 1 modules
var AppBar_AppBar = __webpack_require__(45975);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar_Toolbar = __webpack_require__(21495);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(87239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Fab/Fab.js + 1 modules
var Fab = __webpack_require__(24970);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/browser/window-history-utils.js
var window_history_utils = __webpack_require__(6767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_reac_nks3j66iny4ryjua4rgzqurrcq/node_modules/@mui/icons-material/esm/KeyboardArrowLeft.js
var KeyboardArrowLeft = __webpack_require__(14964);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_reac_nks3j66iny4ryjua4rgzqurrcq/node_modules/@mui/icons-material/esm/KeyboardArrowUp.js
var KeyboardArrowUp = __webpack_require__(93944);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.1_@babel+core@7.26.0_babel-plugin-macros@3.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.82.0/node_modules/next/router.js
var next_router = __webpack_require__(79764);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/dispatcher/Dispatcher.js
var Dispatcher = __webpack_require__(93276);
;// ../../libs/app/static/dist/src/mc/static-model.js

var __async = (__this, __arguments, generator)=>{
    return new Promise((resolve, reject)=>{
        var fulfilled = (value)=>{
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        };
        var rejected = (value)=>{
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        };
        var step = (x)=>x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
    });
};

const dipsatcher = new Dispatcher/* Dispatcher */.m();
const staticModel = {
    dipsatcher,
    screenLockCount: 0,
    switchPage: ()=>__async(void 0, null, function*() {
            dipsatcher.dispatch("switchPage");
            staticModel.screenLockCount = 0;
        }),
    listenSwitchPage: (callback)=>{
        return dipsatcher.addListener("switchPage", callback);
    }
}; //# sourceMappingURL=static-model.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.14.0_@emotion+is-prop-valid@1.3.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 3 modules
var AnimatePresence = __webpack_require__(73041);
// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.14.0_@emotion+is-prop-valid@1.3.1_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 233 modules
var proxy = __webpack_require__(78912);
;// ../../libs/app/ui/dist/src/components/motion/page-transition.js




function PageTransition(param) {
    let { children } = param;
    const router = (0,next_router.useRouter)();
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(AnimatePresence/* AnimatePresence */.N, {
        mode: "sync",
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(proxy/* motion */.P.div, {
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -110
            },
            transition: {
                duration: 0.3
            },
            children
        }, router.route)
    });
} //# sourceMappingURL=page-transition.js.map

;// ../../libs/app/ui/dist/src/components/app/PageShell.js






let idCount = 0;
function PageShell(param) {
    let { children } = param;
    const id = "app-shell-".concat(idCount++);
    (0,react.useEffect)(()=>{
        const box = document.querySelector("#".concat(id));
        const unlisten = staticModel.listenSwitchPage(()=>{
            if (!box) return;
        });
        if (!box) return;
        box.addEventListener("click", (e)=>{
            if (staticModel.screenLockCount == 0) return;
            e.stopPropagation();
            e.preventDefault();
        });
        return ()=>{
            unlisten();
        };
    }, []);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, {
        id,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(PageTransition, {
            children
        })
    });
} //# sourceMappingURL=PageShell.js.map

// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/page/AndroidPageContent.js + 1 modules
var AndroidPageContent = __webpack_require__(55960);
;// ../../libs/app/ui/dist/src/components/appbar/AppBar.js

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b));









function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = (0,useScrollTrigger/* default */.A)({
        target: window ? window() : void 0
    });
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Slide/* default */.A, {
        appear: false,
        direction: "down",
        in: !trigger,
        children: children != null ? children : /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {})
    });
}
function Appbar(param) {
    let { title } = param;
    return /* @__PURE__ */ jsx(AppBar, {
        color: "inherit",
        children: /* @__PURE__ */ jsx(Toolbar, {
            children: /* @__PURE__ */ jsx(Typography, {
                variant: "h6",
                component: "div",
                children: title
            })
        })
    });
}
function ScrollTop(props) {
    const { children, window } = props;
    const trigger = (0,useScrollTrigger/* default */.A)({
        target: window ? window() : void 0,
        disableHysteresis: true,
        threshold: 100
    });
    const handleClick = (event)=>{
        const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");
        if (anchor) {
            anchor.scrollIntoView({
                block: "center"
            });
        }
    };
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Fade/* default */.A, {
        in: trigger,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, {
            "data-id": "content-scroll-top-button",
            onClick: handleClick,
            role: "presentation",
            sx: {
                position: "fixed",
                bottom: 16,
                right: 16
            },
            children
        })
    });
}
function AppbarContainer(props) {
    const { children, appbarProps, titleConf, reload } = props;
    const router = (0,next_router.useRouter)();
    function handleBack() {
        const event = window_history_utils/* browserHistoryUtils */.W.askHistoryBack();
        if (event.defaultPrevented) return;
        if (appbarProps.backDispatcher) {
            const e = {
                defaultPrevented: false
            };
            appbarProps.backDispatcher.dispatch("back", e);
            if (e.defaultPrevented) return;
        }
        router.back();
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(PageShell, {
        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(react.Fragment, {
            children: [
                /* @__PURE__ */ (0,jsx_runtime.jsx)(CssBaseline/* default */.Ay, {}),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(HideOnScroll, __spreadProps(__spreadValues({}, props), {
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(AppBar_AppBar/* default */.A, {
                        color: "inherit",
                        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Toolbar_Toolbar/* default */.A, {
                            children: [
                                /* @__PURE__ */ (0,jsx_runtime.jsx)(KeyboardArrowLeft/* default */.A, {
                                    onClick: handleBack
                                }),
                                appbarProps.title
                            ]
                        })
                    })
                })),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Toolbar_Toolbar/* default */.A, {
                    id: "back-to-top-anchor"
                }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(Container/* default */.A, {
                    sx: {
                        padding: "0",
                        marginTop: "17px"
                    },
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(AndroidPageContent/* default */.A, {
                        titleConf,
                        reload,
                        children
                    })
                }),
                /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollTop, __spreadProps(__spreadValues({}, props), {
                    children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Fab/* default */.A, {
                        size: "small",
                        "aria-label": "scroll back to top",
                        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(KeyboardArrowUp/* default */.A, {})
                    })
                }))
            ]
        })
    });
} //# sourceMappingURL=AppBar.js.map


/***/ }),

/***/ 96550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RoomPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.1_@babel+core@7.26.0_babel-plugin-macros@3.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.82.0/node_modules/next/router.js
var next_router = __webpack_require__(79764);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(15463);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/app/AppShell.js + 1 modules
var AppShell = __webpack_require__(42375);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/appbar/AppBar.js + 3 modules
var AppBar = __webpack_require__(77190);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(30845);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(20532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(13461);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/AppBar/AppBar.js + 1 modules
var AppBar_AppBar = __webpack_require__(5490);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar = __webpack_require__(13854);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(59939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(46236);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(2621);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/Menu.js
var Menu = __webpack_require__(4953);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/People.js
var People = __webpack_require__(91269);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useProxyWatch.js
var useProxyWatch = __webpack_require__(82916);
// EXTERNAL MODULE: ./src/im/client/room/index.ts + 15 modules
var room = __webpack_require__(29515);
;// ./src/im/components/room/RoomHeader.tsx







function RoomHeader(param) {
    let { roomId, showMembers, onToggleMembers } = param;
    var _roomInfo_name;
    const { t } = (0,src.useTranslation)('homepage/im/components/room/content');
    const [roomInfo] = (0,useProxyWatch/* useProxyWatch */.x)(room/* matrixRoom */.BF.roomData, 'joinedRooms', room/* matrixRoom */.BF.roomData.joinedRooms.find((r)=>r.roomId === roomId));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar_AppBar/* default */.A, {
        position: "static",
        color: "default",
        elevation: 1,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Toolbar/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    size: "large",
                    edge: "start",
                    color: "inherit",
                    "aria-label": "menu",
                    sx: {
                        mr: 2
                    },
                    onClick: onToggleMembers,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Menu/* default */.A, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    sx: {
                        mr: 2
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.A, {
                        src: roomInfo === null || roomInfo === void 0 ? void 0 : roomInfo.avatarUrl,
                        children: (roomInfo === null || roomInfo === void 0 ? void 0 : (_roomInfo_name = roomInfo.name) === null || _roomInfo_name === void 0 ? void 0 : _roomInfo_name.charAt(0)) || 'R'
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    component: "div",
                    sx: {
                        flexGrow: 1
                    },
                    children: (roomInfo === null || roomInfo === void 0 ? void 0 : roomInfo.name) || t('RoomContent.unnamedRoom')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    color: showMembers ? 'primary' : 'default',
                    onClick: onToggleMembers,
                    title: t('RoomContent.toggleMembers'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(People/* default */.A, {})
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/log/Log.js + 1 modules
var Log = __webpack_require__(9350);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useWatchUpdates.js
var useWatchUpdates = __webpack_require__(26544);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(58932);
// EXTERNAL MODULE: ./src/im/client/user.ts
var user = __webpack_require__(55180);
;// ./src/im/components/messages/text/TextMessage.tsx



const TextMessage = (param)=>{
    let { message, className = '' } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        className: "text-message ".concat(className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
            variant: "body1",
            children: message.content.body
        })
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(53853);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(91460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(19637);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(32382);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(31826);
;// ./src/im/components/messages/location/LocationMessage.tsx
/* provided dependency */ var process = __webpack_require__(71143);




const LocationMessage = (param)=>{
    let { message, className = '' } = param;
    var _message_content_info, _message_content_info1, _message_content_info2;
    const { t } = (0,src.useTranslation)();
    // 从 geo_uri 中解析经纬度
    const geoUri = message.content.geo_uri;
    const [_, coordinates] = geoUri.split(':');
    const [latitude, longitude] = coordinates.split(',').map(Number);
    // 构建静态地图 URL（使用百度地图）
    const mapUrl = "https://api.map.baidu.com/staticimage/v2?ak=".concat(process.env.REACT_APP_BAIDU_MAP_KEY || 'MmweUMZxcXOThZUaBuQ2rtKwLNHf1Hix', "&center=").concat(longitude, ",").concat(latitude, "&zoom=12&width=300&height=200&markers=").concat(longitude, ",").concat(latitude, "&markerStyles=m,B,0");
    // 处理点击事件，打开交互式地图
    const [open, setOpen] = react.useState(false);
    const handleOpenMap = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        className: "location-message ".concat(className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                className: "map-container",
                mb: 1,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: mapUrl,
                    alt: ((_message_content_info = message.content.info) === null || _message_content_info === void 0 ? void 0 : _message_content_info.title) || t('location.title'),
                    onClick: handleOpenMap,
                    style: {
                        cursor: 'pointer'
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        color: "textSecondary",
                        children: ((_message_content_info1 = message.content.info) === null || _message_content_info1 === void 0 ? void 0 : _message_content_info1.title) || t('location.title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "text",
                        size: "small",
                        onClick: handleOpenMap,
                        children: t('location.viewMap')
                    })
                ]
            }),
            open && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: open,
                onClose: handleClose,
                maxWidth: "sm",
                fullWidth: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        children: ((_message_content_info2 = message.content.info) === null || _message_content_info2 === void 0 ? void 0 : _message_content_info2.title) || t('location.title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InteractiveLocationMap, {
                            message: message
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            onClick: handleClose,
                            color: "primary",
                            children: t('common.close')
                        })
                    })
                ]
            })
        ]
    });
};
// 在需要显示交互式地图的地方使用
const InteractiveLocationMap = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { message } = param;
    const [_, coordinates] = message.content.geo_uri.split(':');
    const [latitude, longitude] = coordinates.split(',').map(Number);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            width: '100%',
            height: 400,
            minHeight: 300,
            position: 'relative'
        }
    });
});
/* harmony default export */ const location_LocationMessage = ((/* unused pure expression or super */ null && (LocationMessage)));

;// ./src/im/client/message/types.ts
/**
 * Matrix 消息类型定义
 * 包含所有与 Matrix 协议相关的消息类型定义和工具函数
 */ /**
 * 基础事件接口
 */ /**
 * 消息类型守卫
 */ const isTextMessage = (message)=>message.content.msgtype === 'm.text';
const isImageMessage = (message)=>message.content.msgtype === 'm.image';
const isFileMessage = (message)=>message.content.msgtype === 'm.file';
const isAudioMessage = (message)=>message.content.msgtype === 'm.audio';
const isVideoMessage = (message)=>message.content.msgtype === 'm.video';
const isLocationMessage = (message)=>message.content.msgtype === 'm.location';
/**
 * 判断是否为媒体消息
 */ const isMediaMessage = (message)=>[
        'm.image',
        'm.file',
        'm.audio',
        'm.video'
    ].includes(message.content.msgtype);
/**
 * 获取消息的显示文本
 */ const getMessageText = (message)=>{
    if (!message.content) return '';
    if (isTextMessage(message)) {
        return message.content.body;
    }
    if (isMediaMessage(message)) {
        return message.content.body || "[".concat(message.content.msgtype.replace('m.', '').toUpperCase(), "]");
    }
    return JSON.stringify(message.content);
};
/**
 * 获取消息的发送时间
 */ const getMessageTime = (message)=>new Date(message.origin_server_ts);
/**
 * 获取消息的发送者名称
 */ const getMessageSenderName = (sender)=>sender.split(':')[0].substring(1); // 移除 @ 符号和域名部分
// 默认导出
const messageTypeUtils = {
    isTextMessage,
    isImageMessage,
    isFileMessage,
    isAudioMessage,
    isVideoMessage,
    isLocationMessage,
    isMediaMessage,
    getMessageText,
    getMessageTime,
    getMessageSenderName
};

;// ./src/im/components/messages/MessageRenderer.tsx





const MessageRenderer = (param)=>{
    let { message, className = '' } = param;
    const commonProps = {
        message,
        className
    };
    if (messageTypeUtils.isTextMessage(message)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(TextMessage, {
            ...commonProps,
            message: message
        }, message.event_id);
    }
    if (messageTypeUtils.isLocationMessage(message)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(LocationMessage, {
            ...commonProps,
            message: message
        }, message.event_id);
    }
    // 其他消息类型的处理...
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "unknown-message ".concat(className),
        children: [
            "不支持的消息类型: ",
            message.content.msgtype
        ]
    });
};

;// ./src/im/components/room/MessageList.tsx







const fileLogger = new Log/* Log */.tG(false, 'im.components.room.MessageList');
function MessageList(param) {
    let { roomId } = param;
    const logger = fileLogger.sub(false, 'MessageList_fn');
    logger.pause = true;
    const messagesEndRef = (0,react.useRef)(null);
    const messagesContainerRef = (0,react.useRef)(null);
    const [autoScroll, setAutoScroll] = (0,react.useState)(true);
    const { t } = (0,src.useTranslation)('homepage/im/components/room/content');
    // 监听登录状态
    const [loginResponse] = (0,useProxyWatch/* useProxyWatch */.x)(user/* matrixUser */.x.userData, 'userInfo.loginResponse', user/* matrixUser */.x.userData.userInfo.loginResponse);
    // 监听消息列表
    const [messageIds] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(room/* matrixRoom */.BF.roomData.messages, [
        "".concat(roomId)
    ], room/* matrixRoom */.BF.roomData.messages[roomId] || []);
    logger.log('messageIds=', messageIds);
    logger.log("matrixRoom.roomData.messages[roomId]=", room/* matrixRoom */.BF.roomData.messages[roomId]);
    // 监听消息映射
    const [messagesMap] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(room/* matrixRoom */.BF.roomData, 'messagesMap', room/* matrixRoom */.BF.roomData.messagesMap);
    logger.log('messagesMap=', messagesMap);
    logger.log('matrixRoom.roomData.messagesMap=', room/* matrixRoom */.BF.roomData.messagesMap);
    // 获取消息详情并转换为 IMatrixMessage 格式
    const messageList = (messageIds === null || messageIds === void 0 ? void 0 : messageIds.map((id)=>{
        const message = messagesMap[id];
        if (!message) {
            console.warn('Message not found:', id);
            return null;
        }
        // 转换为 IMatrixMessage 格式
        return {
            id: message.event_id || message.id,
            type: message.content.msgtype,
            sender: message.sender,
            timestamp: message.origin_server_ts || message.timestamp,
            roomId: roomId,
            content: message.content,
            status: 'received' // 默认为已接收状态
        };
    }).filter(Boolean)) || [];
    // 添加消息更新日志
    (0,react.useEffect)(()=>{
        logger.log('messageIds=', messageIds);
        logger.log('messagesMap=', messagesMap);
    }, [
        messageIds,
        messagesMap
    ]);
    // 滚动到底部
    const scrollToBottom = ()=>{
        var _messagesEndRef_current;
        (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({
            behavior: 'smooth'
        });
    };
    (0,react.useEffect)(()=>{
        if (autoScroll) {
            scrollToBottom();
        }
    }, [
        messageList,
        autoScroll
    ]);
    // 处理滚动事件
    const handleScroll = ()=>{
        if (!messagesContainerRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
        const isAtBottom = scrollHeight - scrollTop === clientHeight;
        setAutoScroll(isAtBottom);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        ref: messagesContainerRef,
        onScroll: handleScroll,
        sx: {
            flex: 1,
            overflowY: 'auto',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
        },
        children: [
            !(loginResponse === null || loginResponse === void 0 ? void 0 : loginResponse.user_id) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {})
            }) : messageList.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "body1",
                    color: "text.secondary",
                    children: t('MessageList.noMessages')
                })
            }) : messageList.map((message)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    sx: {
                        display: 'flex',
                        justifyContent: message.sender === loginResponse.user_id ? 'flex-end' : 'flex-start',
                        mb: 2
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        sx: {
                            maxWidth: '80%',
                            bgcolor: message.sender === loginResponse.user_id ? 'primary.main' : 'background.paper',
                            color: message.sender === loginResponse.user_id ? 'primary.contrastText' : 'text.primary',
                            p: 2,
                            borderRadius: 2,
                            boxShadow: 1,
                            position: 'relative',
                            wordBreak: 'break-word'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MessageRenderer, {
                                message: message,
                                className: message.sender === loginResponse.user_id ? 'sent-message' : 'received-message'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                variant: "caption",
                                sx: {
                                    display: 'block',
                                    textAlign: 'right',
                                    mt: 0.5,
                                    opacity: 0.7,
                                    color: message.sender === loginResponse.user_id ? 'primary.contrastText' : 'text.secondary'
                                },
                                children: new Date(message.timestamp).toLocaleTimeString()
                            })
                        ]
                    })
                }, message.id)),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                ref: messagesEndRef
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Tooltip/Tooltip.js + 59 modules
var Tooltip = __webpack_require__(6186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(58448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/InputAdornment/InputAdornment.js + 1 modules
var InputAdornment = __webpack_require__(18120);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/AttachFile.js
var AttachFile = __webpack_require__(62989);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/EmojiEmotions.js
var EmojiEmotions = __webpack_require__(72114);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/LocationOn.js
var LocationOn = __webpack_require__(74316);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/Send.js
var Send = __webpack_require__(28872);
// EXTERNAL MODULE: ./src/im/client/index.ts + 2 modules
var client = __webpack_require__(86935);
// EXTERNAL MODULE: ./src/im/client/room/data.ts
var data = __webpack_require__(79409);
// EXTERNAL MODULE: ./src/im/client/client.ts + 1 modules
var client_client = __webpack_require__(39736);
;// ./src/im/client/message/handlers/location.ts



const logger = new Log/* Log */.tG(false, 'im.client.message.handlers.location');
// 内部辅助函数
function addToLocalCache(roomId, message) {
    data/* roomData */.S.messagesMap[message.id] = message;
    if (!data/* roomData */.S.messages[roomId]) {
        data/* roomData */.S.messages[roomId] = [];
    }
    data/* roomData */.S.messages[roomId].push(message.id);
}
function updateMessageStatus(messageId, updates) {
    const message = data/* roomData */.S.messagesMap[messageId];
    if (message) {
        data/* roomData */.S.messagesMap[messageId] = {
            ...message,
            ...updates
        };
    }
}
// 导出所有内容
const locationMessageUtils = {
    // 创建位置消息内容
    createLocationContent: function(latitude, longitude) {
        let title = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', description = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '';
        return {
            msgtype: 'm.location',
            body: title || "位置: ".concat(latitude, ", ").concat(longitude),
            geo_uri: "geo:".concat(latitude, ",").concat(longitude),
            info: {
                title,
                description
            }
        };
    },
    // 发送位置消息
    send: async function(roomId, latitude, longitude) {
        let title = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '', description = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : '';
        var _matrixClient_client;
        const content = locationMessageUtils.createLocationContent(latitude, longitude, title, description);
        const tempId = "temp_".concat(Date.now());
        const message = {
            id: tempId,
            type: 'm.location',
            sender: ((_matrixClient_client = client_client/* matrixClient */.X.client) === null || _matrixClient_client === void 0 ? void 0 : _matrixClient_client.getUserId()) || '',
            timestamp: Date.now(),
            roomId,
            content,
            status: 'sending'
        };
        addToLocalCache(roomId, message);
        if (!client_client/* matrixClient */.X.client) {
            logger.error('Matrix client is not initialized');
            throw new Error('Matrix client is not initialized');
        }
        try {
            const eventId = await client_client/* matrixClient */.X.client.sendMessage(roomId, {
                msgtype: 'm.location',
                body: content.body,
                geo_uri: content.geo_uri,
                info: content.info
            });
            updateMessageStatus(tempId, {
                id: eventId,
                status: 'sent'
            });
            return eventId;
        } catch (error) {
            logger.error('Failed to send location message:', error);
            updateMessageStatus(tempId, {
                status: 'failed',
                error: error instanceof Error ? error.message : 'Unknown error'
            });
            throw error;
        }
    },
    // 处理接收到的位置消息
    handleReceived: (roomId, event)=>{
        const message = {
            id: event.event_id,
            type: 'm.location',
            sender: event.sender,
            timestamp: event.origin_server_ts,
            roomId,
            content: {
                msgtype: 'm.location',
                body: event.content.body,
                geo_uri: event.content.geo_uri,
                info: event.content.info
            },
            status: 'received'
        };
        addToLocalCache(roomId, message);
        return message;
    }
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.1_@babel+core@7.26.0_babel-plugin-macros@3.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.82.0/node_modules/next/dynamic.js
var dynamic = __webpack_require__(19982);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// ../../libs/fanfanlo/dist/src/map/MapView.js

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)){
        if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};


const MapWithLoader = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(1064), __webpack_require__.e(1009), __webpack_require__.e(5140), __webpack_require__.e(8090)]).then(__webpack_require__.t.bind(__webpack_require__, 88090, 23)).then((mod)=>{
        const { Map, MapApiLoaderHOC } = mod;
        const MapComponent = (props)=>{
            return /* @__PURE__ */ (0,jsx_runtime.jsx)(Map, __spreadValues({
                style: {
                    height: "100%",
                    width: "100%"
                },
                center: {
                    lng: 116.402544,
                    lat: 39.928216
                },
                zoom: 12
            }, props));
        };
        return MapApiLoaderHOC({
            ak: "MmweUMZxcXOThZUaBuQ2rtKwLNHf1Hix"
        })(MapComponent);
    }), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(88090)
            ]
    },
    ssr: false,
    loading: ()=>/* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
            style: {
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            children: "\u52A0\u8F7D\u4E2D..."
        })
});
const MapView = (props)=>{
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(MapWithLoader, __spreadValues({}, props));
}; //# sourceMappingURL=MapView.js.map

;// ./src/im/components/messages/location/LocationPicker.tsx





const LocationPicker = (param)=>{
    let { open, onClose, onConfirm } = param;
    const { t } = (0,src.useTranslation)();
    const [title, setTitle] = (0,react.useState)('');
    const [description, setDescription] = (0,react.useState)('');
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const [currentLocation, setCurrentLocation] = (0,react.useState)(null);
    const handleGetCurrentLocation = ()=>{
        if (!navigator.geolocation) {
            alert(t('location.geolocationNotSupported'));
            return;
        }
        setIsLoading(true);
        navigator.geolocation.getCurrentPosition((position)=>{
            setCurrentLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
            setIsLoading(false);
        }, (error)=>{
            console.error('Error getting location:', error);
            alert(t('location.getLocationFailed'));
            setIsLoading(false);
        }, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        });
    };
    const handleSubmit = ()=>{
        if (!currentLocation) return;
        onConfirm({
            latitude: currentLocation.lat,
            longitude: currentLocation.lng,
            title: title || t('location.myLocation'),
            description
        });
        // 重置表单
        setTitle('');
        setDescription('');
        setCurrentLocation(null);
        onClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: onClose,
        maxWidth: "sm",
        fullWidth: true,
        PaperProps: {
            sx: {
                minHeight: 600,
                height: '100%'
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                children: t('location.shareLocation')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                sx: {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            width: '100%',
                            height: '100%',
                            mb: 3,
                            position: 'relative'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MapView, {
                            style: {
                                width: '100%',
                                height: '100%',
                                minHeight: 400
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            mt: 2,
                            mb: 3
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            variant: "contained",
                            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(LocationOn/* default */.A, {}),
                            onClick: handleGetCurrentLocation,
                            disabled: isLoading,
                            children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                                size: 24
                            }) : t('location.getCurrentLocation')
                        })
                    }),
                    currentLocation && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        sx: {
                            mt: 2,
                            mb: 3
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                fullWidth: true,
                                label: t('location.title'),
                                value: title,
                                onChange: (e)=>setTitle(e.target.value),
                                margin: "normal"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                fullWidth: true,
                                label: t('location.description'),
                                value: description,
                                onChange: (e)=>setDescription(e.target.value),
                                margin: "normal",
                                placeholder: t('location.descriptionPlaceholder')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                sx: {
                                    mt: 2,
                                    p: 2,
                                    border: '1px solid #eee',
                                    borderRadius: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                        variant: "subtitle2",
                                        gutterBottom: true,
                                        children: t('location.preview')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                        variant: "body2",
                                        color: "text.secondary",
                                        children: [
                                            t('location.latitude'),
                                            ": ",
                                            currentLocation.lat.toFixed(6),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                            t('location.longitude'),
                                            ": ",
                                            currentLocation.lng.toFixed(6)
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: onClose,
                        children: t('common.cancel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: handleSubmit,
                        variant: "contained",
                        disabled: !currentLocation,
                        children: t('common.send')
                    })
                ]
            })
        ]
    });
};

;// ./src/im/components/room/MessageInput.tsx








function MessageInput(param) {
    let { roomId } = param;
    const { t } = (0,src.useTranslation)('homepage/im/components/room/content');
    const [message, setMessage] = (0,react.useState)('');
    const [locationPickerOpen, setLocationPickerOpen] = (0,react.useState)(false);
    const fileInputRef = (0,react.useRef)(null);
    const textareaRef = (0,react.useRef)(null);
    const sendMessage = async ()=>{
        if (!message.trim()) return;
        try {
            var // 保持焦点在输入框
            _textareaRef_current;
            await client/* matrixClient */.Xi.client.sendTextMessage(roomId, message.trim());
            setMessage('');
            (_textareaRef_current = textareaRef.current) === null || _textareaRef_current === void 0 ? void 0 : _textareaRef_current.focus();
        } catch (error) {
            console.error('发送消息失败:', error);
        }
    };
    const handleLocationConfirm = async (location)=>{
        try {
            await locationMessageUtils.send(roomId, location.latitude, location.longitude, location.title, location.description);
        } catch (error) {
            console.error('发送位置消息失败:', error);
        }
    };
    const handleFileChange = (e)=>{
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (file) {
            // 处理文件上传
            console.log('Selected file:', file);
        // TODO: 实现文件上传逻辑
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            p: 2,
            borderTop: '1px solid',
            borderColor: 'divider'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    display: 'flex',
                    alignItems: 'flex-end'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                        title: t('MessageInput.attachFile'),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(IconButton/* default */.A, {
                            onClick: ()=>{
                                var _fileInputRef_current;
                                return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(AttachFile/* default */.A, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                    type: "file",
                                    ref: fileInputRef,
                                    onChange: handleFileChange,
                                    style: {
                                        display: 'none'
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                        title: t('MessageInput.emoji'),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EmojiEmotions/* default */.A, {})
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        fullWidth: true,
                        multiline: true,
                        maxRows: 4,
                        variant: "outlined",
                        placeholder: t('MessageInput.placeholder'),
                        value: message,
                        onChange: (e)=>setMessage(e.target.value),
                        onKeyDown: handleKeyDown,
                        inputRef: textareaRef,
                        sx: {
                            mx: 1
                        },
                        InputProps: {
                            sx: {
                                borderRadius: 4,
                                pr: 1
                            },
                            endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputAdornment/* default */.A, {
                                position: "end",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                                    title: t('MessageInput.sendLocation'),
                                    disableFocusListener: true,
                                    disableHoverListener: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                        onClick: ()=>setLocationPickerOpen(true),
                                        edge: "end",
                                        sx: {
                                            mr: 0.5
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LocationOn/* default */.A, {
                                            color: "primary"
                                        })
                                    })
                                })
                            })
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                        title: t('MessageInput.send'),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                color: "primary",
                                onClick: sendMessage,
                                disabled: !message.trim(),
                                sx: {
                                    alignSelf: 'flex-end',
                                    mb: 0.5
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Send/* default */.A, {})
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LocationPicker, {
                open: locationPickerOpen,
                onClose: ()=>setLocationPickerOpen(false),
                onConfirm: handleLocationConfirm
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(55665);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/ListItem/ListItem.js + 4 modules
var ListItem = __webpack_require__(70754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js + 1 modules
var ListItemAvatar = __webpack_require__(76808);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(14383);
;// ./src/im/components/room/RoomMembers.tsx





function RoomMembers(param) {
    let { roomId } = param;
    const { t } = (0,src.useTranslation)('homepage/im/components/room/content');
    // 监听登录状态
    const [loginResponse] = (0,useProxyWatch/* useProxyWatch */.x)(user/* matrixUser */.x.userData, 'userInfo.loginResponse', user/* matrixUser */.x.userData.userInfo.loginResponse);
    // 监听房间成员数据和加载状态
    const [roomMembers] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(room/* matrixRoom */.BF.roomData.roomMembers, [
        "".concat(roomId)
    ], room/* matrixRoom */.BF.roomData.roomMembers[roomId] || []);
    const [isFetchingMembers] = (0,useProxyWatch/* useProxyWatch */.x)(room/* matrixRoom */.BF.roomData.isFetchingMembers, 'value', room/* matrixRoom */.BF.roomData.isFetchingMembers.value);
    // 如果登录信息未加载完成，显示加载中
    if (!loginResponse) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                p: 2,
                textAlign: 'center'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                size: 24
            })
        });
    }
    const currentUserId = loginResponse.user_id;
    // 将当前用户排在最前面
    const sortedMembers = [
        ...roomMembers
    ].sort((a)=>a.userId === currentUserId ? -1 : 1);
    if (isFetchingMembers) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                p: 2,
                textAlign: 'center'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                    size: 24
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "caption",
                    color: "text.secondary",
                    sx: {
                        mt: 1
                    },
                    children: t('RoomMembers.loading')
                })
            ]
        });
    }
    if (sortedMembers.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                p: 2,
                textAlign: 'center'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                color: "text.secondary",
                children: t('RoomMembers.noMembers')
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
            children: sortedMembers.map((member)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.Ay, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemAvatar/* default */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.A, {
                                src: member.avatarUrl,
                                alt: member.displayName || member.userId
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.A, {
                            primary: member.displayName || member.userId,
                            secondary: member.userId === currentUserId ? t('RoomMembers.you') : t("RoomMembers.".concat(member.membership))
                        })
                    ]
                }, member.userId))
        })
    });
}

;// ./src/im/components/room/RoomContent.tsx









function RoomContent(param) {
    let { roomId } = param;
    const { t } = (0,src.useTranslation)('homepage/im/components/room/content');
    const theme = (0,useTheme/* default */.A)();
    const [showMembers, setShowMembers] = (0,react.useState)(false);
    const router = (0,next_router.useRouter)();
    const toggleMembers = ()=>{
        setShowMembers(!showMembers);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            backgroundColor: theme.palette.background.default
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomHeader, {
                roomId: roomId,
                onToggleMembers: toggleMembers,
                showMembers: showMembers
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    display: 'flex',
                    flex: 1,
                    overflow: 'hidden',
                    position: 'relative'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                        sx: {
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            transition: 'margin 0.3s ease-in-out',
                            marginRight: showMembers ? '300px' : 0
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MessageList, {
                                roomId: roomId
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MessageInput, {
                                roomId: roomId
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        sx: {
                            width: '300px',
                            height: '100%',
                            position: 'absolute',
                            right: showMembers ? 0 : '-300px',
                            top: 0,
                            transition: 'right 0.3s ease-in-out',
                            backgroundColor: theme.palette.background.paper,
                            borderLeft: "1px solid ".concat(theme.palette.divider),
                            overflowY: 'auto',
                            zIndex: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomMembers, {
                            roomId: roomId
                        })
                    })
                ]
            })
        ]
    });
}

;// ./src/im/components/room/index.ts







;// ./src/pages/im/room/index.tsx






function RoomPage() {
    const { t } = (0,src.useTranslation)("homepage/pages/im/room/content");
    const router = (0,next_router.useRouter)();
    const { id: roomId } = router.query;
    (0,react.useEffect)(()=>{
        // 如果没有roomId，重定向到聊天列表
        if (!roomId && router.isReady) {
            router.push('/im');
        }
    }, [
        roomId,
        router
    ]);
    if (!roomId) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
                appbarProps: {
                    title: t("content.title"),
                    back: true
                }
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomContent, {
            roomId: roomId
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [485,668,5389,8454,1835,3853,9080,1236,6774,9582,8448,8108,9850,4216,9858,636,6593,8792], () => (__webpack_exec__(66684)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=room-026dc406f359188c.js.map