(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8489],{

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

/***/ 57968:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/sign-up-in",
      function () {
        return __webpack_require__(73109);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 61182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_1_4_i18next_24_1_0_typescript_5_8_2_react_dom_19_0_0_react_19_0_0_react_19_0_0_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_1_4_i18next_24_1_0_typescript_5_8_2_react_dom_19_0_0_react_19_0_0_react_19_0_0_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56750);



/***/ }),

/***/ 73109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SignUpInPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/app/AppShell.js + 1 modules
var AppShell = __webpack_require__(42375);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/tabbar/Tabbar.js
var Tabbar = __webpack_require__(5782);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(20532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.1_@babel+core@7.26.0_babel-plugin-macros@3.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.82.0/node_modules/next/router.js
var next_router = __webpack_require__(79764);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useProxyWatch.js
var useProxyWatch = __webpack_require__(82916);
// EXTERNAL MODULE: ../../libs/app/model/dist/src/user/User.js + 3 modules
var User = __webpack_require__(42752);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(91412);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(15463);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(58448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(53853);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(2621);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(37530);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/remote/request.js
var request = __webpack_require__(19293);
// EXTERNAL MODULE: ../../libs/app/model/dist/src/remote/tms.js
var tms = __webpack_require__(45536);
;// ../../libs/app/model/dist/src/remote/user/get-verification-code.js

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


var TMGetVerificationCodeType = /* @__PURE__ */ ((TMGetVerificationCodeType2)=>{
    TMGetVerificationCodeType2["cnMobile"] = "cnMobile";
    TMGetVerificationCodeType2["email"] = "email";
    return TMGetVerificationCodeType2;
})(TMGetVerificationCodeType || {});
function tmsGetVerificationCode(opts) {
    return __async(this, null, function*() {
        const res = yield (0,request/* request */.Em)(tms/* tms */.X.TUser, tms/* tms */.X.MUserCreateRegCode, opts.params, opts.gateway, opts.handler);
        return res;
    });
} //# sourceMappingURL=get-verification-code.js.map

;// ../../libs/app/model/dist/src/remote/user/loginByCode.js

var loginByCode_async = (__this, __arguments, generator)=>{
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


function tmsLoginByCode(opts) {
    return loginByCode_async(this, null, function*() {
        const res = yield (0,request/* request */.Em)(tms/* tms */.X.TUser, tms/* tms */.X.MUserLoginByCode, opts.params, opts.gateway, opts.handler);
        return res;
    });
} //# sourceMappingURL=loginByCode.js.map

;// ../../libs/app/model/dist/src/remote/user/common.js

var UserLoginType = /* @__PURE__ */ ((UserLoginType2)=>{
    UserLoginType2["cnMobile"] = "cnMobile";
    UserLoginType2["email"] = "email";
    return UserLoginType2;
})(UserLoginType || {}); //# sourceMappingURL=common.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(80036);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// ./src/components/page/sign-up/mobile/SignUpByMobile.tsx








const PHONE_REGEX = /^1[3-9]\d{9}$/;
const VERIFICATION_CODE_REGEX = /^\d{6}$/;
function Countdown(param) {
    let { seconds, onEnd } = param;
    const [count, setCount] = (0,react.useState)(seconds);
    const { t } = (0,src.useTranslation)('homepage/components/page/sign-up/mobile/content');
    (0,react.useEffect)(()=>{
        if (count <= 0) {
            onEnd();
            return;
        }
        const timer = setTimeout(()=>{
            setCount(count - 1);
        }, 1000);
        return ()=>clearTimeout(timer);
    }, [
        count,
        onEnd
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: t('SignUpByMobile.countdown', {
            seconds: count
        })
    });
}
function PhoneInput(param) {
    let { value, onChange, disabled = false } = param;
    const { t } = (0,src.useTranslation)('homepage/components/page/sign-up/mobile/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
        fullWidth: true,
        label: t('SignUpByMobile.phoneNumber'),
        value: value,
        onChange: (e)=>onChange(e.target.value),
        placeholder: t('SignUpByMobile.phoneNumberPlaceholder'),
        disabled: disabled,
        margin: "normal",
        inputProps: {
            maxLength: 11
        }
    });
}
function VerificationCodeInput(param) {
    let { value, onChange, disabled = false } = param;
    const { t } = (0,src.useTranslation)('homepage/components/page/sign-up/mobile/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
        fullWidth: true,
        label: t('SignUpByMobile.verificationCode'),
        value: value,
        onChange: (e)=>{
            const value = e.target.value.replace(/\D/g, '').substring(0, 6);
            onChange(value);
        },
        placeholder: t('SignUpByMobile.verificationCodePlaceholder'),
        disabled: disabled,
        margin: "normal",
        inputProps: {
            maxLength: 6
        }
    });
}
function GetCodeButton(param) {
    let { onClick, disabled = false, countdown = 0 } = param;
    const { t } = (0,src.useTranslation)('homepage/components/page/sign-up/mobile/content');
    if (countdown > 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
            variant: "outlined",
            disabled: true,
            fullWidth: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Countdown, {
                seconds: countdown,
                onEnd: ()=>{}
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
        variant: "outlined",
        onClick: onClick,
        disabled: disabled,
        fullWidth: true,
        children: t('SignUpByMobile.getVerificationCode')
    });
}
function RegisterButton(param) {
    let { onClick, disabled = false } = param;
    const { t } = (0,src.useTranslation)('homepage/components/page/sign-up/mobile/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
        variant: "contained",
        onClick: onClick,
        disabled: disabled,
        fullWidth: true,
        sx: {
            mt: 2
        },
        children: t('SignUpByMobile.register')
    });
}
function SignUpByMobile() {
    const { t } = (0,src.useTranslation)('homepage/components/page/sign-up/mobile/content');
    const [phone, setPhone] = (0,react.useState)('');
    const [code, setCode] = (0,react.useState)('');
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const [countdown, setCountdown] = (0,react.useState)(0);
    const [error, setError] = (0,react.useState)('');
    const [isCodeSent, setIsCodeSent] = (0,react.useState)(false);
    const [isPhoneVerified, setIsPhoneVerified] = (0,react.useState)(false);
    const isPhoneValid = PHONE_REGEX.test(phone);
    const isCodeValid = VERIFICATION_CODE_REGEX.test(code);
    const canGetCode = !isLoading && isPhoneValid && countdown === 0;
    const canRegister = isPhoneValid && isCodeValid && !isLoading;
    const handleGetCode = (0,react.useCallback)(async ()=>{
        if (!isPhoneValid || isLoading || countdown > 0) return;
        setIsLoading(true);
        setError('');
        try {
            var _res_data_reg_code_info, _res_data, _res_data_reg_code_info1, _res_data1;
            const res = await tmsGetVerificationCode({
                params: {
                    login_name: phone,
                    type: TMGetVerificationCodeType.cnMobile
                },
                gateway: '',
                handler: {
                    printLog: false
                }
            });
            if (res.err) {
                setError(res.err.toString() || t('SignUpByMobile.errors.verificationFailed'));
                return;
            }
            if (!res.shellIsOk) {
                setError(t('SignUpByMobile.errors.requestFailed'));
                return;
            }
            if (!res.dataIsOk) {
                setError(t('SignUpByMobile.errors.verificationFailed'));
                return;
            }
            // Update phone number if server returned a different one
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_reg_code_info = _res_data.reg_code_info) === null || _res_data_reg_code_info === void 0 ? void 0 : _res_data_reg_code_info.login_name) && res.data.reg_code_info.login_name !== phone) {
                setPhone(res.data.reg_code_info.login_name);
            }
            const code = (_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : (_res_data_reg_code_info1 = _res_data1.reg_code_info) === null || _res_data_reg_code_info1 === void 0 ? void 0 : _res_data_reg_code_info1.code;
            if (code && code.length == 6 && !lodash_default().isNaN(parseInt(code))) {
                setCode(code);
                (0,dist/* default */.Ay)('内部版本不需要发送短信，验证码已自动填入，点击登录即可。', {
                    duration: 5000
                });
            }
            // Start countdown
            setCountdown(60);
            setIsCodeSent(true);
        } catch (err) {
            setError(t('SignUpByMobile.errors.requestFailed'));
            console.error('Failed to get verification code:', err);
        } finally{
            setIsLoading(false);
        }
    }, [
        phone,
        isPhoneValid,
        isLoading,
        countdown,
        t
    ]);
    const handleRegister = (0,react.useCallback)(async ()=>{
        if (!canRegister) return;
        setIsLoading(true);
        setError('');
        try {
            var _res_data, _res_data1;
            const res = await tmsLoginByCode({
                params: {
                    login_name: phone,
                    code,
                    type: UserLoginType.cnMobile
                },
                gateway: '',
                handler: {
                    printLog: false
                }
            });
            if (res.err) {
                setError(res.err.toString() || t('SignUpByMobile.errors.loginFailed'));
                return;
            }
            if (!res.shellIsOk) {
                setError(t('SignUpByMobile.errors.requestFailed'));
                return;
            }
            if (!res.dataIsOk || !((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.is_ok)) {
                var _res_data2;
                setError(((_res_data2 = res.data) === null || _res_data2 === void 0 ? void 0 : _res_data2.msg) || t('SignUpByMobile.errors.loginFailed'));
                return;
            }
            const user_token = (_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.user_token;
            if (user_token) {
                User/* user */.k.data.storeData.user_token = user_token;
                console.log('Registration successful:', res.data);
            } else {
                var _res_data3;
                setError(((_res_data3 = res.data) === null || _res_data3 === void 0 ? void 0 : _res_data3.msg) || t('SignUpByMobile.errors.loginFailed'));
                return;
            }
        } catch (err) {
            setError(t('SignUpByMobile.errors.requestFailed'));
            console.error('Registration failed:', err);
        } finally{
            setIsLoading(false);
        }
    }, [
        phone,
        code,
        canRegister,
        t
    ]);
    // Handle countdown end
    (0,react.useEffect)(()=>{
        if (countdown > 0) {
            const timer = setTimeout(()=>setCountdown(countdown - 1), 1000);
            return ()=>clearTimeout(timer);
        }
    }, [
        countdown
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            maxWidth: 400,
            mx: 'auto',
            p: 3
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h5",
                component: "h1",
                gutterBottom: true,
                align: "center",
                children: t('SignUpByMobile.title')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("form", {
                onSubmit: (e)=>{
                    e.preventDefault();
                    if (canRegister) handleRegister();
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(PhoneInput, {
                            value: phone,
                            onChange: setPhone,
                            disabled: isLoading || countdown > 0
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                display: 'flex',
                                gap: 2
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(VerificationCodeInput, {
                                    value: code,
                                    onChange: setCode,
                                    disabled: isLoading || !isCodeSent
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(GetCodeButton, {
                                    onClick: handleGetCode,
                                    disabled: !canGetCode,
                                    countdown: countdown
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(RegisterButton, {
                            onClick: handleRegister,
                            disabled: !canRegister || isLoading
                        }),
                        error && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            color: "error",
                            align: "center",
                            children: error
                        })
                    ]
                })
            })
        ]
    });
}

;// ./src/components/page/sign-up/content/SignUp.tsx



function SignUp() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SignUpByMobile, {})
        })
    });
}

;// ./src/components/page/sign-up-in/content/SignInUpContent.tsx







function SignInUpContent() {
    const router = (0,next_router.useRouter)();
    const [token] = (0,useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.storeData.user_token', User/* user */.k.data.storeData.user_token);
    console.log('token222222=', token);
    if (token) {
        const waitTime = 3000;
        (0,dist/* default */.Ay)('登录成功', {
            duration: waitTime
        });
        setTimeout(()=>{
            back();
        }, waitTime + 500);
    }
    function back() {
        let p = '/';
        if (router.query.back) {
            if (router.query.back instanceof Array) {
                p = router.query.back[0];
            } else {
                p = router.query.back;
            }
        }
        router.replace(p);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SignUp, {})
    });
}

;// ./src/pages/sign-up-in/index.tsx



function SignUpInPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabbar/* TabbarContainer */.y, {
            titleConf: {
                ns: "homepage/pages/sign-up-in/content",
                key: "content.title"
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SignInUpContent, {})
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [485,668,5389,8454,1835,3853,1236,6774,9300,8448,5748,636,6593,8792], () => (__webpack_exec__(57968)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=sign-up-in-3c5a4b73c3b7c0c1.js.map