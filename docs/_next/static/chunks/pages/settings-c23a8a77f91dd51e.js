(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[199],{

/***/ 9825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50279);



/***/ }),

/***/ 14582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SettingsPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/app/AppShell.js + 1 modules
var AppShell = __webpack_require__(34451);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/tabbar/Tabbar.js
var Tabbar = __webpack_require__(59962);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ./src/components/language-selector/LanguageSelect.tsx
var LanguageSelect = __webpack_require__(40934);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(28995);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useProxyWatch.js
var useProxyWatch = __webpack_require__(61840);
// EXTERNAL MODULE: ../../libs/app/model/dist/src/user/User.js + 3 modules
var User = __webpack_require__(7091);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(22243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/link.js
var next_link = __webpack_require__(97097);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/mui/dialog/ButtonConfirm.js
var ButtonConfirm = __webpack_require__(48872);
;// ./src/components/page/sign-up-in/components/sign-up-in-button/SignUpIn.tsx









function SignUpInButton(param) {
    let { back } = param;
    // apps\homepage\src\components\page\sign-up-in\components\sign-up-in-button\SignUpIn.i18n.json
    const { t } = (0,src.useTranslation)('homepage/components/page/sign-up-in/components/sign-up-in-button/content');
    const router = (0,next_router.useRouter)();
    const [token] = (0,useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.storeData.user_token', User/* user */.k.data.storeData.user_token);
    const [userInitialized] = (0,useProxyWatch/* useProxyWatch */.x)(User/* user */.k, 'data.userInitialized', User/* user */.k.data.userInitialized);
    function onSignoutClick() {
        User/* user */.k.signout();
        (0,dist/* default */.Ay)(t('SignUpIn.signoutOk'), {
            duration: 5000
        });
    }
    if (!userInitialized) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: t('SignUpIn.loadingData')
        });
    }
    if (token) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: User/* user */.k.userName
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
                            title: t('SignUpIn.confirmTitle'),
                            content: t('SignUpIn.confirmContent'),
                            onConfirm: onSignoutClick,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                children: t('SignUpIn.signOut')
                            })
                        })
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                href: "/sign-up-in?back=".concat(back),
                children: t('SignUpIn.signUpIn')
            })
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: token ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
            title: t('SignUpIn.confirmTitle'),
            content: t('SignUpIn.confirmContent'),
            onConfirm: onSignoutClick,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                children: t('SignUpIn.signOut')
            })
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
            href: "/sign-up-in?back=".concat(back),
            children: t('SignUpIn.signUpIn')
        })
    });
}

;// ./src/components/page/settings/content/Settings.tsx




const SettingsContent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LanguageSelect/* LanguageSelect */.p, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SignUpInButton, {
                back: "/settings"
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/components/fallback/Fallback.tsx
var Fallback = __webpack_require__(55762);
;// ./src/components/page/settings/data/settings.context.tsx




const [SettingsPageDataContextProvider, useSettingsPageData] = (0,src.createTypedContext)();
const SettingsPageDataContextLoader = (0,src.createAsyncContextLoader)({
    Provider: SettingsPageDataContextProvider,
    extract: (res)=>res.data,
    fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(Fallback/* Fallback */.H, {})
});

;// ./src/components/page/settings/data/ns.ts
const ns = 'settings';
const androidData = "".concat(ns, ":android");
const webData = "".concat(ns, ":web");
const settingNs = {
    ns,
    androidData,
    webData
};

;// ./src/components/page/settings/data/settings.data.intf.ts


function createDefaultSettingsPageData() {
    return {};
}
function createSettingsPageData() {
    return createDefaultSettingsPageData();
}
let loader;
async function loadSettingsPageData() {
    if (loader) return loader;
    const defData = createSettingsPageData();
    loader = src.storeUtils.getNamespaceStoreWithData(settingNs.androidData, {
        defData,
        forceReset: false,
        mergeDefData: true
    });
    return loader;
}

;// ./src/pages/settings/index.tsx





function SettingsPage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabbar/* TabbarContainer */.y, {
            titleConf: {
                ns: "homepage/pages/settings/content",
                key: "content.title"
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsPageDataContextLoader, {
                value: loadSettingsPageData(),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsContent, {})
            })
        })
    });
}


/***/ }),

/***/ 33925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AndroidPageContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(44437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/nextjs/env/env.js
var env = __webpack_require__(47427);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(28995);
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

/***/ 34451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ AppShell)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(28995);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js
var proxyWatch = __webpack_require__(82339);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/watchUpdates.js
var watchUpdates = __webpack_require__(45799);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(50279);
;// __barrel_optimize__?names=I18nextProvider!=!../../node_modules/.pnpm/react-i18next@15.6.0_i18next@24.2.3_typescript@5.7.3__react-dom@19.1.0_react@19.1.0__react@19.1.0_typescript@5.7.3/node_modules/react-i18next/dist/es/index.js


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

/***/ 40934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ LanguageSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_googleGeminiIntersectionLocale_0xff336699_js_i18n_lngs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7149);
/* harmony import */ var _barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6445);
/* harmony import */ var _barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37780);
/* harmony import */ var _barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48365);
/* harmony import */ var _barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7313);
/* harmony import */ var _barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68891);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28995);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);





// import { useTranslation } from 'react-i18next';

const ii = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__.i18n;
function LanguageSelect() {
    const lm = _barrel_optimize_names_googleGeminiIntersectionLocale_0xff336699_js_i18n_lngs__WEBPACK_IMPORTED_MODULE_3__/* .googleGeminiIntersectionLocale */ .i;
    const { t, i18n } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('homepage/components/language-selector/content');
    let lng = i18n.language || "";
    console.log('lng', lng);
    if (!(lng in lm)) {
        lng = lng.split('-')[0];
    }
    if (!(lng in lm)) {
        lng = 'en';
    }
    const [language, setLanguage] = react__WEBPACK_IMPORTED_MODULE_1__.useState(lng);
    const handleChange = (event)=>{
        const cl = event.target.value;
        setLanguage(event.target.value);
        // i18n.changeLanguage(cl);
        ii.changeLanguage(cl);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const setHtmlLang = function setHtmlLang(l) {
            document.documentElement.lang = l; //navigator.language
            const dir = i18n.dir(l);
            document.documentElement.dir = dir; // l.split('-')[0].toLowerCase() == 'ar' ? 'rtl' : 'ltr'
            console.log('setHtmlLang=', i18n, 'dir=', dir);
        };
        setHtmlLang(language);
    }, [
        language,
        i18n
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
            sx: {
                pt: "1rem",
                pb: "1rem"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                sx: {
                    minWidth: '150px'
                },
                size: "small",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                        id: "demo-simple-select-label",
                        children: t('content.title')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                        labelId: "demo-simple-select-label",
                        id: "demo-simple-select",
                        value: language,
                        label: "language2",
                        onChange: handleChange,
                        children: Object.keys(lm).map((key)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Box_FormControl_InputLabel_MenuItem_Select_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
                                value: key,
                                children: lm[key]
                            }, key);
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 45279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 45520:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/settings",
      function () {
        return __webpack_require__(14582);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 48872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ ButtonConfirm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49280);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3711);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18244);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69468);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28669);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9825);





function ButtonConfirm(param) {
    let { title, content, confirmText, cancelText, onConfirm, onCancel, onClose, cancelId, confirmId, children } = param;
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t } = (0,_barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .Bd)("fanfanlo/mui/dialog/content");
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                onClick: ()=>setIsOpen(true),
                children
            }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                open: isOpen,
                onClose: ()=>setIsOpen(false),
                children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                        children: title || t("ButtonConfirm.title")
                    }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                        children: content || t("ButtonConfirm.content")
                    }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                        children: [
                            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                                id: cancelId || "btn-dialog-button-confirm-cancel",
                                "data-id": cancelId || "btn-dialog-button-confirm-cancel",
                                onClick: ()=>{
                                    setIsOpen(false);
                                    onCancel == null ? void 0 : onCancel();
                                    onClose == null ? void 0 : onClose(false);
                                },
                                children: cancelText || t("ButtonConfirm.cancel")
                            }),
                            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                                id: confirmId || "btn-dialog-button-confirm-confirm",
                                "data-id": confirmId || "btn-dialog-button-confirm-confirm",
                                onClick: ()=>{
                                    setIsOpen(false);
                                    onConfirm == null ? void 0 : onConfirm();
                                    onClose == null ? void 0 : onClose(true);
                                },
                                children: confirmText || t("ButtonConfirm.confirm")
                            })
                        ]
                    })
                ]
            })
        ]
    });
} //# sourceMappingURL=ButtonConfirm.js.map


/***/ }),

/***/ 55762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ Fallback)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28995);


function Fallback() {
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('homepage/components/fallback/content');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: "100%"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            children: t('content.loading')
        })
    });
}


/***/ }),

/***/ 59962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ TabbarContainer)
/* harmony export */ });
/* unused harmony export NavBar */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94513);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59864);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76242);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(366);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6445);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32055);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9220);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30319);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52089);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75640);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9825);
/* harmony import */ var _page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33925);
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
        // { label: t('content.create'), value: '/script-creator', icon: <CreateIcon /> },
        // { label: t('content.market'), value: '/market', icon: <StorefrontIcon /> },
        {
            label: t("content.settings"),
            value: "/settings",
            icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {})
        }
    ];
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
        showLabels: true,
        value: pathname,
        children: tabInfoList.map((e)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
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
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        sx: {
            display: "flex",
            flexDirection: "column",
            height: "100vh"
        },
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay, {}),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
                direction: "column",
                spacing: 3,
                children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
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

/***/ 61840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ useProxyWatch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* harmony import */ var _watcher_proxyWatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82339);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79059);




let count = 0;
function useProxyWatch(target, propertyChain, defaultValue) {
    const logger = new _log__WEBPACK_IMPORTED_MODULE_1__/* .Log */ .tG(false, "useProxyWatch_fn");
    logger.pause = true;
    if (!propertyChain) {
        console.error("propertyChain is undefined", defaultValue, target);
    }
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);
    const [proxy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_watcher_proxyWatch__WEBPACK_IMPORTED_MODULE_2__/* .getProxyObject */ .Ye)(target).proxy);
    let isFirstUpdate = true;
    const onUpdate = (now, old)=>{
        logger.log("onUpdate_fn=", "propertyChain=", propertyChain, "now=", now, "old=", old);
        if (!now) {
            if (isFirstUpdate) {
                now = defaultValue;
            }
        }
        if (!now) {}
        if (isFirstUpdate) {
            isFirstUpdate = false;
        }
        setValue(now);
    };
    const onUndefined = (info)=>{
        logger.log("onUndefined_fn=", "propertyChain=", propertyChain, "info=", info);
        if (value === defaultValue) return;
        if (!isFirstUpdate) return;
        isFirstUpdate = false;
        setValue(defaultValue);
    };
    let unwatch = null;
    function unsub() {
        unwatch == null ? void 0 : unwatch();
        unwatch = null;
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (propertyChain) {
            unwatch = (0,_watcher_proxyWatch__WEBPACK_IMPORTED_MODULE_2__/* .proxyWatch */ .kE)(target, propertyChain, onUpdate, onUndefined).unwatch;
        }
        return ()=>{
            unwatch == null ? void 0 : unwatch();
        };
    }, []);
    return [
        value,
        proxy,
        unsub
    ];
} //# sourceMappingURL=useProxyWatch.js.map


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [112,6977,9151,2203,3390,7313,5881,4306,7097,6687,636,6593,8792], () => (__webpack_exec__(45520)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=settings-c23a8a77f91dd51e.js.map