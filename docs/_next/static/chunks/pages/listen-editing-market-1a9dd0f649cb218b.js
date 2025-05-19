(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2347],{

/***/ 1272:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/listen-editing-market",
      function () {
        return __webpack_require__(60084);
      }
    ]);
    if(false) {}
  

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

/***/ 60084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ListenEditingMarketsPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/app/AppShell.js + 1 modules
var AppShell = __webpack_require__(42375);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/appbar/AppBar.js + 3 modules
var AppBar = __webpack_require__(77190);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/dispatcher/Dispatcher.js
var Dispatcher = __webpack_require__(93276);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(15463);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/InsertDriveFileOutlined.js
var InsertDriveFileOutlined = __webpack_require__(68881);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/ExpandLess.js
var ExpandLess = __webpack_require__(83755);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(91787);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/ListItem/ListItem.js + 4 modules
var ListItem = __webpack_require__(70754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(14383);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(7270);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(87609);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(20532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(8176);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(2621);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(55665);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(58932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(28919);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(13461);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
;// ./src/components/page/listen-editing-market/listen-editing-market.tsx
/**
 帮我实现页面加载后通过store2用改文件的路径命名的namespace获取的数据
 该数据记录了socket的地址，和一个MarketList的列表。
 获取到该列表后要展示该列表，组件要单独分离出来，而不是在一个大的组件里嵌套生成子组件。
 socket链接后要发起请求，请求同步已有监听的Imarket.name的数据，同步后把已有的数据替换掉。
 不要删除该注释

 */ 

 // Example icons


const MarketFileDisplay = (param)=>{
    let { file } = param;
    const [contentOpen, setContentOpen] = (0,react.useState)(false);
    const toggleContent = ()=>setContentOpen(!contentOpen);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.Ay, {
                sx: {
                    pl: 4,
                    display: 'flex',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InsertDriveFileOutlined/* default */.A, {
                        sx: {
                            mr: 1,
                            fontSize: '1rem',
                            flexShrink: 0
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.A, {
                        primary: file.path,
                        secondary: "Type: ".concat(file.type),
                        primaryTypographyProps: {
                            variant: 'body2',
                            noWrap: true,
                            flexGrow: 1,
                            mr: 1
                        },
                        secondaryTypographyProps: {
                            variant: 'caption'
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                        label: contentOpen ? 'Hide Content' : 'Show Content',
                        size: "small",
                        onClick: toggleContent,
                        disabled: !file.content
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.A, {
                in: contentOpen,
                timeout: "auto",
                unmountOnExit: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    sx: {
                        pl: 6,
                        pr: 2,
                        pb: 1
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.A, {
                        elevation: 1,
                        sx: {
                            p: 1,
                            maxHeight: '150px',
                            overflowY: 'auto',
                            background: '#f5f5f5'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            component: "pre",
                            variant: "caption",
                            sx: {
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-all'
                            },
                            children: file.content || '(Content not loaded or empty)'
                        })
                    })
                })
            })
        ]
    });
};
const MarketItemDisplay = (param)=>{
    let { market } = param;
    const [open, setOpen] = (0,react.useState)(true);
    const handleClick = ()=>{
        setOpen(!open);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.Ay, {
                button: true,
                onClick: handleClick,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.A, {
                        primary: market.name,
                        primaryTypographyProps: {
                            fontWeight: 'bold'
                        }
                    }),
                    market.files ? open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandLess/* default */.A, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.A, {}) : null
                ]
            }),
            market.files && /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.A, {
                in: open,
                timeout: "auto",
                unmountOnExit: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
                    component: "div",
                    disablePadding: true,
                    children: market.files.length > 0 ? market.files.map((file, index)=>// Use a more specific key including path
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketFileDisplay, {
                            file: file
                        }, "".concat(market.name, "-file-").concat(index, "-").concat(file.path))) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.Ay, {
                        sx: {
                            pl: 4
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.A, {
                            primary: "(Waiting for file data...)",
                            primaryTypographyProps: {
                                fontStyle: 'italic',
                                variant: 'body2'
                            }
                        })
                    })
                })
            })
        ]
    });
};
const MarketListDisplay = (param)=>{
    let { marketList, isLoading } = param;
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                display: 'flex',
                justifyContent: 'center',
                my: 3
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {})
        });
    }
    if (!marketList || marketList.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
            sx: {
                mt: 2,
                fontStyle: 'italic'
            },
            children: "No markets configured or found."
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.A, {
        elevation: 2,
        sx: {
            mt: 2
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
            component: "nav",
            "aria-labelledby": "nested-list-subheader",
            children: marketList.map((market)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MarketItemDisplay, {
                    market: market
                }, market.name))
        })
    });
};
// --- Main MUI Component ---
const STORE_NAMESPACE = 'listen-editing-market';
function ListenEditingMarkets() {
    const [socketAddr, setSocketAddr] = (0,react.useState)("ws://localhost:8080");
    const [marketList, setMarketList] = (0,react.useState)([]);
    const [isConnected, setIsConnected] = (0,react.useState)(false);
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const ws = (0,react.useRef)(null);
    const initialMarketNames = (0,react.useRef)([]);
    // 1. Fetch initial config from store2
    (0,react.useEffect)(()=>{
        setIsLoading(true);
        // const marketStore = store.namespace(STORE_NAMESPACE);
        const marketStore = src.storeUtils.namespace(STORE_NAMESPACE);
        const storedData = marketStore.read('marketData');
        if (storedData) {
            var _storedData_marketList;
            console.log("[".concat(STORE_NAMESPACE, "] Fetched initial config:"), storedData);
            setSocketAddr(storedData.socketAddr || "ws://localhost:8080"); // Fallback if addr is null/undefined
            initialMarketNames.current = ((_storedData_marketList = storedData.marketList) === null || _storedData_marketList === void 0 ? void 0 : _storedData_marketList.map((m)=>m.name)) || [];
            setMarketList(initialMarketNames.current.map((name)=>({
                    name,
                    files: []
                })));
        } else {
            console.warn("[".concat(STORE_NAMESPACE, "] No initial config found in store2."));
            setMarketList([]);
            initialMarketNames.current = [];
        }
        setIsLoading(false);
    }, []);
    // 2. Manage WebSocket connection and communication
    (0,react.useEffect)(()=>{
        if (!socketAddr) {
            console.log("[".concat(STORE_NAMESPACE, "] No socket address."));
            setIsConnected(false);
            return;
        }
        if (ws.current) {
            ws.current.close();
        }
        console.log("[".concat(STORE_NAMESPACE, "] Attempting to connect: ").concat(socketAddr));
        ws.current = new WebSocket(socketAddr);
        setIsConnected(false);
        ws.current.onopen = ()=>{
            var _ws_current;
            console.log("[".concat(STORE_NAMESPACE, "] WebSocket connected."));
            setIsConnected(true);
            // 3. Request ALL market data from the server
            if (((_ws_current = ws.current) === null || _ws_current === void 0 ? void 0 : _ws_current.readyState) === WebSocket.OPEN) {
                console.log("[".concat(STORE_NAMESPACE, "] Requesting all market data from server."));
                const request = JSON.stringify({
                    action: 'getAllMarkets'
                });
                ws.current.send(request);
            } else {
                console.warn("[".concat(STORE_NAMESPACE, "] WebSocket not open when trying to send getAllMarkets request."));
            }
        };
        ws.current.onmessage = (event)=>{
            try {
                const message = JSON.parse(event.data.toString());
                console.log("[".concat(STORE_NAMESPACE, "] Received:"), message.type, message.marketName || '');
                setMarketList((currentList)=>{
                    // Use structuredClone for safe deep copy and modification
                    let updatedList = structuredClone(currentList);
                    // Handle response containing all market data
                    if (message.type === 'allMarketData' && Array.isArray(message.markets)) {
                        console.log("[".concat(STORE_NAMESPACE, "] Received all market data. Replacing local list."));
                        // Replace the entire list with the data from the server
                        updatedList = message.markets.map((m)=>{
                            var _m_files;
                            return {
                                name: m.name,
                                files: ((_m_files = m.files) === null || _m_files === void 0 ? void 0 : _m_files.map((f)=>({
                                        ...f,
                                        content: f.content || ''
                                    }))) || [],
                                html: m.html
                            };
                        });
                    } else if (message.type === 'marketData' && message.marketName) {
                        const marketIdx = updatedList.findIndex((m)=>m.name === message.marketName);
                        if (marketIdx !== -1) {
                            var _message_files;
                            updatedList[marketIdx].files = ((_message_files = message.files) === null || _message_files === void 0 ? void 0 : _message_files.map((f)=>({
                                    ...f,
                                    content: f.content || ''
                                }))) || []; // Ensure content is string
                            updatedList[marketIdx].html = message.html;
                        } else {
                            var _message_files1;
                            // If server sent data for a market we didn't know about (e.g., from getAllMarkets), add it
                            console.log("[".concat(STORE_NAMESPACE, "] Received marketData for a new market: ").concat(message.marketName, ". Adding to list."));
                            updatedList.push({
                                name: message.marketName,
                                files: ((_message_files1 = message.files) === null || _message_files1 === void 0 ? void 0 : _message_files1.map((f)=>({
                                        ...f,
                                        content: f.content || ''
                                    }))) || [],
                                html: message.html
                            });
                        // Sort alphabetically? (Optional)
                        // updatedList.sort((a, b) => a.name.localeCompare(b.name));
                        }
                    } else if (message.type === 'fileUpdate' && message.marketName && message.path) {
                        const marketIdx = updatedList.findIndex((m)=>m.name === message.marketName);
                        if (marketIdx !== -1) {
                            const fileIdx = updatedList[marketIdx].files.findIndex((f)=>f.path === message.path);
                            if (fileIdx !== -1) {
                                updatedList[marketIdx].files[fileIdx].content = message.content || ''; // Ensure content is string
                                updatedList[marketIdx].files[fileIdx].type = message.fileType;
                            } else {
                                console.warn("[".concat(STORE_NAMESPACE, "] FileUpdate for unknown file: ").concat(message.marketName, "/").concat(message.path));
                            // Optionally add the file if it didn't exist in the initial marketData
                            // updatedList[marketIdx].files.push({ type: message.fileType, path: message.path, content: message.content || '' });
                            }
                        } else {
                            console.warn("[".concat(STORE_NAMESPACE, "] FileUpdate for unknown market: ").concat(message.marketName));
                        }
                    } else if (message.type === 'error') {
                        console.error("[".concat(STORE_NAMESPACE, "] Server error:"), message.message);
                    // TODO: Show error feedback (e.g., Snackbar)
                    } else {
                        console.log("[".concat(STORE_NAMESPACE, "] Unhandled message type:"), message.type);
                    }
                    return updatedList;
                });
            } catch (error) {
                console.error("[".concat(STORE_NAMESPACE, "] Error processing message:"), error, event.data);
            }
        };
        ws.current.onerror = (error)=>{
            console.error("[".concat(STORE_NAMESPACE, "] WebSocket error:"), error);
            setIsConnected(false);
        };
        ws.current.onclose = (event)=>{
            console.log("[".concat(STORE_NAMESPACE, "] WebSocket disconnected. Code: ").concat(event.code, ", Reason: ").concat(event.reason));
            setIsConnected(false);
        // Decide if you want to clear data or show stale
        // setMarketList(current => current.map(m => ({...m, files: m.files.map(f => ({...f, content: '(Disconnected)'})) })));
        };
        // Cleanup
        return ()=>{
            if (ws.current) {
                console.log("[".concat(STORE_NAMESPACE, "] Closing WebSocket on unmount."));
                ws.current.onopen = null;
                ws.current.onmessage = null;
                ws.current.onerror = null;
                ws.current.onclose = null;
                ws.current.close();
                ws.current = null;
            }
        };
    }, [
        socketAddr
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Container/* default */.A, {
        maxWidth: "md",
        sx: {
            py: 3
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h5",
                gutterBottom: true,
                component: "div",
                children: "Market Watcher Status"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                        label: isConnected ? 'Connected' : socketAddr ? 'Connecting...' : 'Disconnected',
                        color: isConnected ? 'success' : socketAddr ? 'warning' : 'error',
                        size: "small",
                        sx: {
                            mr: 2
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        color: "textSecondary",
                        children: socketAddr || 'No address configured'
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.A, {
                sx: {
                    mb: 2
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "h6",
                gutterBottom: true,
                component: "div",
                children: "Watched Markets"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketListDisplay, {
                marketList: marketList,
                isLoading: isLoading && marketList.length === 0
            })
        ]
    });
}

;// ./src/pages/listen-editing-market/index.tsx





function ListenEditingMarketsPage() {
    const dispatcher = new Dispatcher/* Dispatcher */.m();
    (0,react.useEffect)(()=>{
        const socket = new WebSocket('ws://localhost:8080');
        socket.onopen = ()=>{
            console.log('Connected to the WebSocket server');
        };
        socket.onmessage = (event)=>{
            const data = JSON.parse(event.data);
            if (data.type === 'file-changed') {
                console.log("File changed: ".concat(data.file));
            // 在这里可以处理文件变更逻辑，像是刷新 iframe 或其他
            }
        };
        socket.onerror = (error)=>{
            console.error('WebSocket error:', error);
        };
        socket.onclose = ()=>{
            console.log('WebSocket connection closed');
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: "edit",
                back: true,
                backDispatcher: dispatcher
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListenEditingMarkets, {})
        })
    });
}


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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [485,668,5389,8454,9080,9582,9850,4997,636,6593,8792], () => (__webpack_exec__(1272)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=listen-editing-market-1a9dd0f649cb218b.js.map