(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4145],{

/***/ 122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveComponentProps);

/***/ }),

/***/ 3488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ mergeSlotProps_mergeSlotProps)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
var extractEventHandlers = __webpack_require__(79168);
;// ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js
/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}
/* harmony default export */ const omitEventHandlers_omitEventHandlers = (omitEventHandlers);
;// ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js



/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = (0,clsx/* default */.A)(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
    const mergedStyle = {
      ...additionalProps?.style,
      ...externalForwardedProps?.style,
      ...externalSlotProps?.style
    };
    const props = {
      ...additionalProps,
      ...externalForwardedProps,
      ...externalSlotProps
    };
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: undefined
    };
  }

  // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  const eventHandlers = (0,extractEventHandlers/* default */.A)({
    ...externalForwardedProps,
    ...externalSlotProps
  });
  const componentsPropsWithoutEventHandlers = omitEventHandlers_omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers_omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);

  // The order of classes is important here.
  // Emotion (that we use in libraries consuming Base UI) depends on this order
  // to properly override style. It requires the most important classes to be last
  // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
  const joinedClasses = (0,clsx/* default */.A)(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
  const mergedStyle = {
    ...internalSlotProps?.style,
    ...additionalProps?.style,
    ...externalForwardedProps?.style,
    ...externalSlotProps?.style
  };
  const props = {
    ...internalSlotProps,
    ...additionalProps,
    ...otherPropsWithoutEventHandlers,
    ...componentsPropsWithoutEventHandlers
  };
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}
/* harmony default export */ const mergeSlotProps_mergeSlotProps = (mergeSlotProps);

/***/ }),

/***/ 6035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ appendOwnerState_appendOwnerState)
});

;// ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}
/* harmony default export */ const isHostComponent_isHostComponent = (isHostComponent);
;// ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js


/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === undefined || isHostComponent_isHostComponent(elementType)) {
    return otherProps;
  }
  return {
    ...otherProps,
    ownerState: {
      ...otherProps.ownerState,
      ...ownerState
    }
  };
}
/* harmony default export */ const appendOwnerState_appendOwnerState = (appendOwnerState);

/***/ }),

/***/ 9825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_6_0_i18next_24_2_3_typescript_5_7_3_react_dom_19_1_0_react_19_1_0_react_19_1_0_typescript_5_7_3_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50279);



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

/***/ 50444:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/script-store",
      function () {
        return __webpack_require__(78923);
      }
    ]);
    if(false) {}
  

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

/***/ 78923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ScriptStorePage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/app/AppShell.js + 1 modules
var AppShell = __webpack_require__(34451);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/tabbar/Tabbar.js
var Tabbar = __webpack_require__(59962);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
;// ./src/components/page/script-store/ScriptStoreContent.tsx


function ScriptStoreContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
            children: "脚本市场"
        })
    });
}

;// ./src/pages/script-store/index.tsx



function ScriptStorePage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabbar/* TabbarContainer */.y, {
            titleConf: {
                ns: "homepage/pages/script-store/content",
                key: "content.title"
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ScriptStoreContent, {})
        })
    });
}


/***/ }),

/***/ 79168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object, excludeKeys = []) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractEventHandlers);

/***/ }),

/***/ 98005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useSlot)
/* harmony export */ });
/* harmony import */ var _mui_utils_useForkRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16316);
/* harmony import */ var _mui_utils_appendOwnerState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6035);
/* harmony import */ var _mui_utils_resolveComponentProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _mui_utils_mergeSlotProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3488);
/* __next_internal_client_entry_do_not_use__ default auto */ 



/**
 * An internal function to create a Material UI slot.
 *
 * This is an advanced version of Base UI `useSlotProps` because Material UI allows leaf component to be customized via `component` prop
 * while Base UI does not need to support leaf component customization.
 *
 * @param {string} name: name of the slot
 * @param {object} parameters
 * @returns {[Slot, slotProps]} The slot's React component and the slot's props
 *
 * Note: the returned slot's props
 * - will never contain `component` prop.
 * - might contain `as` prop.
 */ function useSlot(/**
 * The slot's name. All Material UI components should have `root` slot.
 *
 * If the name is `root`, the logic behaves differently from other slots,
 * e.g. the `externalForwardedProps` are spread to `root` slot but not other slots.
 */ name, parameters) {
    const { className, elementType: initialElementType, ownerState, externalForwardedProps, internalForwardedProps, shouldForwardComponentProp = false, ...useSlotPropsParams } = parameters;
    const { component: rootComponent, slots = {
        [name]: undefined
    }, slotProps = {
        [name]: undefined
    }, ...other } = externalForwardedProps;
    const elementType = slots[name] || initialElementType;
    // `slotProps[name]` can be a callback that receives the component's ownerState.
    // `resolvedComponentsProps` is always a plain object.
    const resolvedComponentsProps = (0,_mui_utils_resolveComponentProps__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(slotProps[name], ownerState);
    const { props: { component: slotComponent, ...mergedProps }, internalRef } = (0,_mui_utils_mergeSlotProps__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
        className,
        ...useSlotPropsParams,
        externalForwardedProps: name === 'root' ? other : undefined,
        externalSlotProps: resolvedComponentsProps
    });
    const ref = (0,_mui_utils_useForkRef__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(internalRef, resolvedComponentsProps === null || resolvedComponentsProps === void 0 ? void 0 : resolvedComponentsProps.ref, parameters.ref);
    const LeafComponent = name === 'root' ? slotComponent || rootComponent : slotComponent;
    const props = (0,_mui_utils_appendOwnerState__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(elementType, {
        ...name === 'root' && !rootComponent && !slots[name] && internalForwardedProps,
        ...name !== 'root' && !slots[name] && internalForwardedProps,
        ...mergedProps,
        ...LeafComponent && !shouldForwardComponentProp && {
            as: LeafComponent
        },
        ...LeafComponent && shouldForwardComponentProp && {
            component: LeafComponent
        },
        ref
    }, ownerState);
    return [
        elementType,
        props
    ];
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [112,4306,636,6593,8792], () => (__webpack_exec__(50444)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=script-store-d33c3c8a6e03acb4.js.map