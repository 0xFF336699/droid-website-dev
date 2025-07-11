(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5558],{

/***/ 16553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BasicSettingsPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/app/AppShell.js + 1 modules
var AppShell = __webpack_require__(34451);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/appbar/AppBar.js + 3 modules
var AppBar = __webpack_require__(74930);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(28995);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ./src/libs/mc/main/MainModel.ts
var MainModel = __webpack_require__(28660);
// EXTERNAL MODULE: ./src/im/client/index.ts + 1 modules
var client = __webpack_require__(71504);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/log/Log.js + 37 modules
var Log = __webpack_require__(79059);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useProxyWatch.js
var useProxyWatch = __webpack_require__(61840);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(63624);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// ./src/im/components/meeting/meeting-page-content/MeetingPageContent.tsx







const fileLogger = new Log/* Log */.tG(false, 'im.components.meeting.MeetingPageContent');
// fileLogger.pause = true;
function MeetingPageContent() {
    const logger = fileLogger.sub(false, 'MeetingPageContent_fn');
    // logger.pause = true;
    const router = (0,next_router.useRouter)();
    const { roomId, callId } = router.query;
    // logger.info('路由参数', { roomId, callId });
    // 侦听登录态
    const [loginResponse] = (0,useProxyWatch/* useProxyWatch */.x)(client/* matrixUser */.xb.userData, 'userInfo.loginResponse', client/* matrixUser */.xb.userData.userInfo.loginResponse);
    logger.info('loginResponse', loginResponse);
    const [meetingUrl, setMeetingUrl] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        // logger.info('【副作用】loginResponse/roomId/callId 变化:', { loginResponse, roomId, callId });
        if (!loginResponse) {
            return;
        }
        let cancelled = false;
        async function buildUrl() {
            if (loginResponse && roomId && callId) {
                var _mainModel_appConfig_elementCall, _mainModel_appConfig, _mainModel_appConfig_matrix, _mainModel_appConfig1;
                const elementCallUrl = ((_mainModel_appConfig = MainModel/* mainModel */.N.appConfig) === null || _mainModel_appConfig === void 0 ? void 0 : (_mainModel_appConfig_elementCall = _mainModel_appConfig.elementCall) === null || _mainModel_appConfig_elementCall === void 0 ? void 0 : _mainModel_appConfig_elementCall.url) || '';
                let userId = '';
                let accessToken = '';
                let homeserver = ((_mainModel_appConfig1 = MainModel/* mainModel */.N.appConfig) === null || _mainModel_appConfig1 === void 0 ? void 0 : (_mainModel_appConfig_matrix = _mainModel_appConfig1.matrix) === null || _mainModel_appConfig_matrix === void 0 ? void 0 : _mainModel_appConfig_matrix.homeserver) || '';
                try {
                    var _matrixClient_client_getUserId, _matrixClient_client, _matrixClient_client_getAccessToken, _matrixClient_client1;
                    userId = await ((_matrixClient_client = client/* matrixClient */.Xi.client) === null || _matrixClient_client === void 0 ? void 0 : (_matrixClient_client_getUserId = _matrixClient_client.getUserId) === null || _matrixClient_client_getUserId === void 0 ? void 0 : _matrixClient_client_getUserId.call(_matrixClient_client)) || '';
                    accessToken = await ((_matrixClient_client1 = client/* matrixClient */.Xi.client) === null || _matrixClient_client1 === void 0 ? void 0 : (_matrixClient_client_getAccessToken = _matrixClient_client1.getAccessToken) === null || _matrixClient_client_getAccessToken === void 0 ? void 0 : _matrixClient_client_getAccessToken.call(_matrixClient_client1)) || '';
                } catch (e) {
                    logger.error('获取 matrixClient.client 用户信息失败', e);
                }
                // logger.info('用户身份参数', { userId, accessToken, homeserver });
                if (elementCallUrl && userId && accessToken && homeserver) {
                    // const url = `${elementCallUrl}/room/#/${callId}?roomId=${(roomId as string)}&user_id=${(userId)}&access_token=${(accessToken)}&homeserver=${(homeserver)}`;
                    const url = "".concat(elementCallUrl, "/room/#/").concat(callId, "?roomId=").concat(roomId, "&userId=").concat(userId, "&accessToken=").concat(accessToken, "&homeserver=").concat(homeserver, "&intent=start_call&parentUrl=").concat(encodeURIComponent(window.location.href), "&widgetId=123456&deviceId=").concat(loginResponse.device_id, "&baseUrl=").concat(encodeURIComponent('https://website-droid-dev.droidlego.com'));
                    if (!cancelled) setMeetingUrl(url);
                    // if (!cancelled) setMeetingUrl(`https://dev-server-element-call-im-droid.droidlego.com/#/hi-friends?password=CtwndaKq46CNg0hhF3FImA&roomId=%21SHitIJaIjdWkvUhBeE%3Awebsite-droid-dev.droidlego.com`);
                    // if (!cancelled) setMeetingUrl(`https://dev-server-element-call-im-droid.droidlego.com/#/hi-friends?password=CtwndaKq46CNg0hhF3FImA&displayName=fanfanlo`);
                    logger.info('最终拼接的 meetingUrl', url);
                } else {
                    if (!cancelled) setMeetingUrl('');
                    logger.warn('参数缺失，无法拼接 meetingUrl');
                }
            } else {
                if (!cancelled) setMeetingUrl('');
                logger.info('未登录或参数不全，meetingUrl 置空');
            }
        }
        buildUrl();
        return ()=>{
            cancelled = true;
        };
    }, [
        loginResponse,
        roomId,
        callId
    ]);
    (0,react.useEffect)(()=>{
        async function handleMessage(event) {
            var _iframe_contentWindow, _iframe_contentWindow1, _iframe_contentWindow2;
            //   logger.log('event=', event);
            //   logger.log('eventype=', event.type);
            const { data } = event;
            if (!data) return;
            logger.log('data json=', JSON.stringify(data));
            if (!(data.api == 'fromWidget')) return;
            const iframe = document.getElementById('element-call-iframe');
            if (!iframe) return;
            let resultData = lodash_default().cloneDeep(data);
            resultData.api = 'toWidget';
            let sendMessage = true;
            let response = undefined;
            let res = {
                api: 'toWidget',
                widgetId: data.widgetId,
                requestId: data.requestId
            };
            switch(data.action){
                case 'supported_api_versions':
                    var _matrixClient_client;
                    const versions = await ((_matrixClient_client = client/* matrixClient */.Xi.client) === null || _matrixClient_client === void 0 ? void 0 : _matrixClient_client.getVersions());
                    res = {
                        data: {
                            api: data.api,
                            widgetId: data.widgetId,
                            requestId: data.requestId,
                            action: "supported_api_versions",
                            response: {
                                supported_versions: versions.versions
                            }
                        }
                    };
                    break;
                case 'content_loaded':
                    res.action = 'theme_change';
                    res.data = {
                        age: 3,
                        name: 'light'
                    };
                    break;
                default:
                    sendMessage = false;
                    console.log('unknown action=', data.action);
            }
            //   const  res = {
            //     api: 'toWidget',
            //     widgetId: data.widgetId,
            //     requestId: data.requestId,
            //     action: 'theme_change',
            //     data: {
            //       name: 'light',
            //     },
            //   };
            logger.log('postMessage=', JSON.stringify(res));
            (_iframe_contentWindow = iframe.contentWindow) === null || _iframe_contentWindow === void 0 ? void 0 : _iframe_contentWindow.postMessage(res, 'https://dev-server-element-call-im-droid.droidlego.com');
            (_iframe_contentWindow1 = iframe.contentWindow) === null || _iframe_contentWindow1 === void 0 ? void 0 : _iframe_contentWindow1.postMessage(res, 'https://homepage.vm-ubuntu.droidlego.com');
            (_iframe_contentWindow2 = iframe.contentWindow) === null || _iframe_contentWindow2 === void 0 ? void 0 : _iframe_contentWindow2.postMessage(res, '*');
        }
        window.addEventListener('message', handleMessage);
        return ()=>window.removeEventListener('message', handleMessage);
    }, [
        loginResponse,
        roomId,
        callId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: {
            width: '100%',
            height: '100%',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                children: "会议页面"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: meetingUrl
            }),
            !loginResponse ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: "请先登录 Matrix 账号..."
            }) : !meetingUrl ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: "参数缺失或 element-call 配置缺失，无法加载会议"
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
                id: "element-call-iframe",
                src: meetingUrl,
                style: {
                    width: '100%',
                    height: 600,
                    border: '1px solid #ccc',
                    borderRadius: 8
                },
                allow: "camera; microphone; fullscreen; display-capture",
                title: "会议"
            })
        ]
    });
}

;// ./src/pages/im/room/meeting/index.tsx






function BasicSettingsPage() {
    const { t } = (0,src.useTranslation)("homepage/pages/im/room/meeting/content");
    const router = (0,next_router.useRouter)();
    const { roomId, callId } = router.query;
    (0,react.useEffect)(()=>{
        // 如果没有 roomId，重定向到聊天列表
        if (!roomId && router.isReady) {
            router.push('/im');
        }
    }, [
        roomId,
        router
    ]);
    // 可选：调试参数
    // console.log('title=', t("content.title"), 'roomId=', roomId, 'callId=', callId);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: t("content.title"),
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MeetingPageContent, {})
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


/***/ }),

/***/ 76656:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/im/room/meeting",
      function () {
        return __webpack_require__(16553);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [112,6977,9893,636,6593,8792], () => (__webpack_exec__(76656)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=meeting-0893024ea37c2a4b.js.map