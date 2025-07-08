(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3332],{

/***/ 40367:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(57116);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 57116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid2/Grid2.js + 4 modules
var Grid2 = __webpack_require__(95771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(32055);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js + 7 modules
var emotion_cache_browser_esm = __webpack_require__(31388);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js
var emotion_element_f0de968e_browser_esm = __webpack_require__(19553);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/navigation.js
var navigation = __webpack_require__(67655);
;// ../../node_modules/.pnpm/@mui+material-nextjs@6.4.12_@emotion+cache@11.14.0_@emotion+react@11.14.0_@types+react@19.1.8_55vquawaudgmf22mcb7j7kmwdu/node_modules/@mui/material-nextjs/v13-appRouter/appRouterV13.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




/**
 * Emotion works OK without this provider but it's recommended to use this provider to improve performance.
 * Without it, Emotion will generate a new <style> tag during SSR for every component.
 * See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153 for why it's a problem.
 */ function AppRouterCacheProvider(props) {
    const { options, CacheProvider = emotion_element_f0de968e_browser_esm.C, children } = props;
    const [registry] = react.useState(()=>{
        var _options_key;
        const cache = (0,emotion_cache_browser_esm/* default */.A)({
            ...options,
            key: (_options_key = options === null || options === void 0 ? void 0 : options.key) !== null && _options_key !== void 0 ? _options_key : 'mui'
        });
        cache.compat = true;
        const prevInsert = cache.insert;
        let inserted = [];
        // Override the insert method to support streaming SSR with flush().
        cache.insert = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            if ((options === null || options === void 0 ? void 0 : options.enableCssLayer) && !args[1].styles.startsWith('@layer')) {
                args[1].styles = "@layer mui {".concat(args[1].styles, "}");
            }
            const [selector, serialized] = args;
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push({
                    name: serialized.name,
                    isGlobal: !selector
                });
            }
            return prevInsert(...args);
        };
        const flush = ()=>{
            const prevInserted = inserted;
            inserted = [];
            return prevInserted;
        };
        return {
            cache,
            flush
        };
    });
    (0,navigation.useServerInsertedHTML)(()=>{
        const inserted = registry.flush();
        if (inserted.length === 0) {
            return null;
        }
        let styles = '';
        let dataEmotionAttribute = registry.cache.key;
        const globals = [];
        inserted.forEach((param)=>{
            let { name, isGlobal } = param;
            const style = registry.cache.inserted[name];
            if (typeof style === 'string') {
                if (isGlobal) {
                    globals.push({
                        name,
                        style
                    });
                } else {
                    styles += style;
                    dataEmotionAttribute += " ".concat(name);
                }
            }
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
            children: [
                globals.map((param)=>{
                    let { name, style } = param;
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)("style", {
                        nonce: options === null || options === void 0 ? void 0 : options.nonce,
                        "data-emotion": "".concat(registry.cache.key, "-global ").concat(name),
                        dangerouslySetInnerHTML: {
                            __html: style
                        }
                    }, name);
                }),
                styles && /*#__PURE__*/ (0,jsx_runtime.jsx)("style", {
                    nonce: options === null || options === void 0 ? void 0 : options.nonce,
                    "data-emotion": dataEmotionAttribute,
                    dangerouslySetInnerHTML: {
                        __html: styles
                    }
                })
            ]
        });
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CacheProvider, {
        value: registry.cache,
        children: children
    });
}

// EXTERNAL MODULE: ./src/pages/home/index.tsx + 26 modules
var home = __webpack_require__(89938);
;// ./src/pages/index.tsx



// import i18n from '@src/i18nconf/i18nSetting';


function Loading() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
        container: true,
        spacing: 0,
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        sx: {
            minHeight: '100vh'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
            color: "secondary"
        })
    });
}
function Index() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(AppRouterCacheProvider, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CssBaseline/* default */.Ay, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
                fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(Loading, {}),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(home["default"], {})
            })
        ]
    });
}
/* harmony default export */ const pages = (Index);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [8262,112,6977,9151,2203,3390,7313,8771,1482,5881,4306,5771,91,9964,5689,5084,8445,6798,2614,9938,636,6593,8792], () => (__webpack_exec__(40367)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=index-d6f4051ef3693464.js.map