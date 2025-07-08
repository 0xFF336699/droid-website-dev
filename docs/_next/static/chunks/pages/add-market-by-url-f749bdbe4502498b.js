(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9436],{

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

/***/ 60982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AddMarketByUrlPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/app/AppShell.js + 1 modules
var AppShell = __webpack_require__(34451);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/appbar/AppBar.js + 3 modules
var AppBar = __webpack_require__(74930);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/dispatcher/Dispatcher.js
var Dispatcher = __webpack_require__(18888);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(28995);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(88049);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(65371);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(56575);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(38771);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/iframe/IFrameReactContainer.js + 1 modules
var IFrameReactContainer = __webpack_require__(76798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(93916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(30281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ahooks@3.9.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/ahooks/es/useDebounceFn/index.js + 4 modules
var useDebounceFn = __webpack_require__(2305);
// EXTERNAL MODULE: ../../node_modules/.pnpm/axios@1.10.0/node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(49595);
;// ./src/components/page/add-market-by-url/ui/market-input-form/MarketInputForm.tsx









async function loadHtmlFromUrl(value) {
    const url = "https://autumn-mouse-8da2.mailregios.workers.dev/?url=".concat(encodeURIComponent(value));
    const res = await axios/* default */.A.get(url);
    if (!res.data || !res.data.html) {
        throw new Error('Failed to fetch HTML content.');
    }
    // 这个html就是html的内容。
    // 获取url的origin
    const { origin } = new URL(value);
    // 替换所有script和link标签的src/href为绝对路径
    let html = res.data.html;
    // 拼接时去除重复斜杠，保证只有一个/
    function joinOriginPath(origin, path) {
        let url;
        if (origin.endsWith('/') && path.startsWith('/')) {
            url = origin + path.slice(1);
        } else if (!origin.endsWith('/') && !path.startsWith('/')) {
            url = origin + '/' + path;
        } else {
            url = origin + path;
        }
        // 追加__time__参数
        const timeParam = "__time__=".concat(Date.now());
        if (url.includes('?')) {
            // 已有参数，判断是否已带__time__，避免重复
            if (/([&?])__time__=/.test(url)) return url;
            return url + (url.endsWith('?') || url.endsWith('&') ? '' : '&') + timeParam;
        } else {
            return url + '?' + timeParam;
        }
    }
    // 替换<script src="...">
    html = html.replace(/(<script[^>]*src=["'])(?!https?:|\/\/)([^"'>]+)/gi, (match, p1, p2)=>"".concat(p1).concat(joinOriginPath(origin, p2)));
    // 替换<link href="...">，常用于css
    html = html.replace(/(<link[^>]*href=["'])(?!https?:|\/\/)([^"'>]+)/gi, (match, p1, p2)=>"".concat(p1).concat(joinOriginPath(origin, p2)));
    // 替换<style>@import '...'</style> 里的路径（简单处理）
    html = html.replace(/(@import\s+["'])(?!https?:|\/\/)([^"']+)/gi, (match, p1, p2)=>"".concat(p1).concat(joinOriginPath(origin, p2)));
    console.log('parsed html=', html);
    return html;
}
const MarketInputForm = (param)=>{
    let { isFullMarketPage, onMarketConfigReady, initialValue = '', initialIsUrl = true } = param;
    const [inputValue, setInputValue] = (0,react.useState)(initialValue);
    const [isUrl, setIsUrl] = (0,react.useState)(initialIsUrl);
    const [error, setError] = (0,react.useState)('');
    const { t } = (0,src.useTranslation)("homepage/components/page/add-market-by-url/ui/market-input-form/content");
    // Basic URL validation (can be improved)
    const isValidUrl = (url)=>{
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    };
    // The core logic for processing input
    const processInput = (0,react.useCallback)(async (value, isUrlChecked)=>{
        console.log('Processing input:', value, 'Is URL:', isUrlChecked);
        if (!value) {
            setError('');
            onMarketConfigReady({
                str: '',
                isUrl
            });
            console.log('cleared');
            return;
        }
        if (isUrlChecked) {
            if (value && isValidUrl(value)) {
                const html = await loadHtmlFromUrl(value);
                if (html) {
                    setError('');
                    onMarketConfigReady({
                        str: html,
                        isUrl: false
                    });
                } else {
                    setError('Failed to fetch HTML content.');
                }
            } else if (value) {
                setError('Please enter a valid URL.');
            } else {
                setError(''); // Clear error if input is empty
            }
        } else {
            // For HTML content, maybe trigger on button click or explicit action?
            // For now, let's assume direct content is always 'ready'
            setError('');
            onMarketConfigReady({
                str: value,
                isUrl: false
            });
        }
    }, [
        onMarketConfigReady
    ]);
    // Create the debounced version of the processing function
    const { run: debouncedProcessInput } = (0,useDebounceFn/* default */.A)(processInput, {
        wait: 500
    });
    const handleInputChange = (event)=>{
        const newValue = event.target.value;
        setInputValue(newValue);
        // Call the debounced function when typing
        debouncedProcessInput(newValue, isUrl);
    };
    const handleCheckboxChange = (event)=>{
        const newIsUrl = event.target.checked;
        setIsUrl(newIsUrl);
        // Call the original function immediately when checkbox changes
        processInput(inputValue, newIsUrl);
    };
    let isUrlLabel = "";
    if (isUrl) {
        isUrlLabel = isFullMarketPage ? t('content.full.url') : t('content.item.url');
    } else {
        isUrlLabel = isFullMarketPage ? t('content.full.html') : t('content.item.html');
    }
    let placeholder = "";
    if (!isUrl) {
        placeholder = isFullMarketPage ? "<html><body><div>script list<div></body></html>" : "<html><body><div>".concat(t('content.item.come'), '<a href="https://github.com/your-name/your-repo/docs/index.html">').concat(t('content.item.myMarketName'), "</a>").concat(t('content.item.stroll'), "</div></body></html>");
    } else {
        placeholder = isFullMarketPage ? "https://github.com/your-name/your-repo/docs/market.html" : "https://github.com/your-name/your-repo/docs/summary.html";
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            display: 'flex',
            flexDirection: 'column',
            gap: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                label: isUrlLabel,
                variant: "outlined",
                fullWidth: true,
                value: inputValue,
                onChange: handleInputChange,
                error: !!error,
                helperText: error,
                placeholder: placeholder,
                multiline: !isUrl,
                rows: isUrl ? 1 : 4
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                    checked: isUrl,
                    onChange: handleCheckboxChange
                }),
                label: t("content.isUrl")
            })
        ]
    });
};
/* harmony default export */ const market_input_form_MarketInputForm = (MarketInputForm);

;// ./src/components/page/add-market-by-url/ui/AddMarketByUrl.tsx










const AddMarketByUrl = ()=>{
    const [name, setName] = (0,react.useState)('');
    const [summary, setSummary] = (0,react.useState)('');
    const [description, setDescription] = (0,react.useState)('');
    const [urlOrHtmlConf, setUrlOrHtmlConf] = (0,react.useState)(null);
    const [fullMarketConf, setFullMarketConf] = (0,react.useState)(null);
    const { t } = (0,src.useTranslation)("homepage/components/page/add-market-by-url/ui/content");
    const iframeStyle = {
        minWidth: '300px',
        minHeight: '200px',
        border: '1px solid #ccc',
        display: 'block'
    };
    const handleMarketConfigReady = (0,react.useCallback)((config)=>{
        setUrlOrHtmlConf(config);
    }, []);
    const handleFullMarketConfigReady = (0,react.useCallback)((config)=>{
        setFullMarketConf(config);
    }, []);
    const itemMarket = urlOrHtmlConf;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.A, {
        sx: {
            maxWidth: 800,
            margin: 'auto',
            mt: 2
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    sx: {
                        mb: 2,
                        color: 'error.main'
                    },
                    children: t("content.warning")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h5",
                    component: "h2",
                    gutterBottom: true,
                    children: t("content.setNewMarket")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    sx: {
                        mb: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            fullWidth: true,
                            label: t("content.marketName"),
                            variant: "outlined",
                            value: name,
                            onChange: (e)=>setName(e.target.value),
                            sx: {
                                mb: 1
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            fullWidth: true,
                            label: t("content.marketSummary"),
                            variant: "outlined",
                            value: summary,
                            onChange: (e)=>setSummary(e.target.value),
                            multiline: true,
                            rows: 2,
                            sx: {
                                mb: 1
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            fullWidth: true,
                            label: t("content.marketDescription"),
                            variant: "outlined",
                            value: description,
                            onChange: (e)=>setDescription(e.target.value),
                            multiline: true,
                            rows: 4,
                            sx: {
                                mb: 2
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    gutterBottom: true,
                    sx: {
                        mt: 2
                    },
                    children: t("content.itemMarket")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(market_input_form_MarketInputForm, {
                    onMarketConfigReady: handleMarketConfigReady,
                    isFullMarketPage: false
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h6",
                    gutterBottom: true,
                    sx: {
                        mt: 2
                    },
                    children: t("content.fullMarket")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(market_input_form_MarketInputForm, {
                    onMarketConfigReady: handleFullMarketConfigReady,
                    isFullMarketPage: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {
                    sx: {
                        my: 2
                    }
                }),
                (name || summary || description || itemMarket || fullMarketConf) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("hr", {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            sx: {
                                textAlign: 'center'
                            },
                            variant: "h6",
                            component: "h3",
                            gutterBottom: true,
                            children: t("content.settingPreview")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                            variant: "body1",
                            component: "p",
                            paragraph: true,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                    children: [
                                        t("content.marketName"),
                                        ":"
                                    ]
                                }),
                                " ",
                                name || t("content.isNotSet")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                            variant: "body1",
                            component: "p",
                            paragraph: true,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                    children: [
                                        t("content.marketSummary"),
                                        ":"
                                    ]
                                }),
                                " ",
                                summary || t("content.isNotSet")
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                            variant: "body1",
                            component: "p",
                            paragraph: true,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("strong", {
                                    children: [
                                        t("content.marketDescription"),
                                        ":"
                                    ]
                                }),
                                " ",
                                description || t("content.isNotSet")
                            ]
                        }),
                        itemMarket && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            sx: {
                                mb: 2
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "subtitle1",
                                    gutterBottom: true,
                                    children: t("content.marketCardPreview")
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IFrameReactContainer/* IFrameReactContainer */.T, {
                                    url: itemMarket.isUrl ? itemMarket.str : undefined,
                                    content: !itemMarket.isUrl ? itemMarket.str : undefined,
                                    style: iframeStyle
                                }, "item-market-".concat(itemMarket.str))
                            ]
                        }),
                        fullMarketConf && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                                    variant: "subtitle1",
                                    gutterBottom: true,
                                    children: t("content.marketFullPreview")
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IFrameReactContainer/* IFrameReactContainer */.T, {
                                    url: fullMarketConf.isUrl ? fullMarketConf.str : undefined,
                                    content: !fullMarketConf.isUrl ? fullMarketConf.str : undefined,
                                    style: iframeStyle
                                }, "full-market-".concat(fullMarketConf.str))
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const ui_AddMarketByUrl = (AddMarketByUrl);

;// ./src/pages/add-market-by-url/index.tsx




function AddMarketByUrlPage() {
    const marketConf = {
        name: 'Test Market URL',
        summary: 'Test Summary',
        description: 'Test Description',
        itemMarket: {
            str: '',
            isUrl: true
        },
        fullMarket: {
            str: '',
            isUrl: true
        }
    };
    const dispatcher = new Dispatcher/* Dispatcher */.m();
    const { t } = (0,src.useTranslation)('homepage/pages/add-market-by-url/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(AppShell/* AppShell */.G, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
                appbarProps: {
                    title: t("content.title"),
                    back: true,
                    backDispatcher: dispatcher
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_AddMarketByUrl, {})
        ]
    });
}


/***/ }),

/***/ 71216:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/add-market-by-url",
      function () {
        return __webpack_require__(60982);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 74930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ AppbarContainer)
});

// UNUSED EXPORTS: Appbar

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/useScrollTrigger/useScrollTrigger.js
var useScrollTrigger = __webpack_require__(97241);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Slide/Slide.js
var Slide = __webpack_require__(62115);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(41837);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(32055);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AppBar/AppBar.js + 1 modules
var AppBar_AppBar = __webpack_require__(16844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar_Toolbar = __webpack_require__(21436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(44437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Fab/Fab.js + 1 modules
var Fab = __webpack_require__(12726);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/browser/window-history-utils.js
var window_history_utils = __webpack_require__(59243);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/KeyboardArrowLeft.js
var KeyboardArrowLeft = __webpack_require__(47951);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/KeyboardArrowUp.js
var KeyboardArrowUp = __webpack_require__(94283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/dispatcher/Dispatcher.js
var Dispatcher = __webpack_require__(18888);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 3 modules
var AnimatePresence = __webpack_require__(98969);
// EXTERNAL MODULE: ../../node_modules/.pnpm/framer-motion@11.18.2_@emotion+is-prop-valid@1.3.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 243 modules
var proxy = __webpack_require__(17582);
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
var AndroidPageContent = __webpack_require__(33925);
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
                        children: appbarProps.toolbar ? appbarProps.toolbar : /* @__PURE__ */ (0,jsx_runtime.jsxs)(Toolbar_Toolbar/* default */.A, {
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [112,6977,9893,9151,2203,3390,7313,8771,1482,2001,6764,6221,6798,636,6593,8792], () => (__webpack_exec__(71216)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=add-market-by-url-f749bdbe4502498b.js.map