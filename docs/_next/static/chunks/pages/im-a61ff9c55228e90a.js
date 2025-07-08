(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3798],{

/***/ 27156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ useProxyWatchUpdates),
/* harmony export */   p: () => (/* binding */ useWatchUpdates)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94285);
/* harmony import */ var _watchUpdates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45799);
/* harmony import */ var _useProxyWatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61840);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5994);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79059);

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
        if (!v) {
            console.log("target=", target);
            console.log("propertyChain=", propertyChain);
            console.log("defaultValue=", defaultValue);
            console.log("conf=", conf);
            console.trace("v is null");
            return;
        }
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

/***/ 46142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ IM)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/app/AppShell.js + 1 modules
var AppShell = __webpack_require__(34451);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/appbar/AppBar.js + 3 modules
var AppBar = __webpack_require__(74930);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(28995);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/log/Log.js + 37 modules
var Log = __webpack_require__(79059);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useProxyWatch.js
var useProxyWatch = __webpack_require__(61840);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useWatchUpdates.js
var useWatchUpdates = __webpack_require__(27156);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItem/ListItem.js + 3 modules
var ListItem = __webpack_require__(60889);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(65494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js + 1 modules
var ListItemAvatar = __webpack_require__(82954);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(9767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(63337);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(90535);
// EXTERNAL MODULE: ./src/im/client/room/index.ts + 18 modules
var client_room = __webpack_require__(56092);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Check.js
var Check = __webpack_require__(63324);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.4.12_@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_re_5ewkm5t5g27pzq5tz62v6ktvti/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(29864);
// EXTERNAL MODULE: ./src/im/client/index.ts + 1 modules
var client = __webpack_require__(71504);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
;// ./src/im/components/rooms/summary-room-list/SummaryRoomList.tsx









const fileLogger = new Log/* Log */.tG(false, 'im.components.rooms.summary-room-list.SummaryRoomList');
function RoomListItem(param) {
    let { room, onClick, onInviteResponse } = param;
    var _room_unreadCount;
    const logger = fileLogger.sub(false, 'RoomListItem_ui');
    logger.pause = true;
    logger.log('room=', room);
    const [name] = (0,useProxyWatch/* useProxyWatch */.x)(room, 'name', room.name);
    const [avatarUrl] = (0,useProxyWatch/* useProxyWatch */.x)(room, 'avatarUrl', room.avatarUrl);
    const [isProcessing, setIsProcessing] = react.useState(false);
    const { t } = (0,src.useTranslation)('homepage/im/components/rooms/summary-room-list/content');
    const handleInviteResponse = async (e, accept)=>{
        e.stopPropagation();
        if (onInviteResponse && !isProcessing) {
            setIsProcessing(true);
            try {
                await onInviteResponse(room.roomId, accept);
            } finally{
                setIsProcessing(false);
            }
        }
    };
    const getRoomName = ()=>{
        if (!room.name) return room.roomId;
        return room.name;
    };
    // 用 useProxyWatch 监听 lastMessages
    const [lastMsg] = (0,useProxyWatch/* useProxyWatch */.x)(client_room/* matrixRoom */.BF.roomData.lastMessages, [
        room.roomId
    ], client_room/* matrixRoom */.BF.roomData.lastMessages[room.roomId]);
    logger.log('lastMsg=', lastMsg);
    logger.log('lastMessages=', client_room/* matrixRoom */.BF.roomData.lastMessages);
    let lastMsgSummary = '';
    if (lastMsg) {
        const { msgtype, body } = lastMsg.content || {};
        if (msgtype === 'm.text') lastMsgSummary = body;
        else if (msgtype === 'm.image') lastMsgSummary = '[图片]';
        else if (msgtype === 'm.file') lastMsgSummary = "[文件] ".concat(body);
        else if (msgtype === 'm.video') lastMsgSummary = '[视频]';
        else if (msgtype === 'm.audio') lastMsgSummary = '[音频]';
        else if (msgtype === 'm.location') lastMsgSummary = '[位置]';
        else lastMsgSummary = '[消息]';
    }
    // @ts-ignore: membership 字段在 IMatrixRoomInfo 上
    const isInvite = room.membership === 'invite';
    var _room_unreadCount1, _room_unreadCount_toString;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.Ay, {
        onClick: ()=>onClick(room.roomId),
        sx: {
            bgcolor: 'background.paper',
            opacity: isProcessing ? 0.7 : 1,
            pointerEvents: isProcessing ? 'none' : 'auto'
        },
        secondaryAction: isInvite ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                display: 'flex',
                gap: 1
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    size: "small",
                    color: "primary",
                    onClick: (e)=>handleInviteResponse(e, true),
                    title: t('SummaryRoomList.acceptInvite'),
                    disabled: isProcessing,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.A, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    size: "small",
                    color: "error",
                    onClick: (e)=>handleInviteResponse(e, false),
                    title: t('SummaryRoomList.rejectInvite'),
                    disabled: isProcessing,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.A, {})
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                display: 'flex',
                alignItems: 'center',
                gap: 1
            },
            children: ((_room_unreadCount1 = room.unreadCount) !== null && _room_unreadCount1 !== void 0 ? _room_unreadCount1 : 0) > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                label: (_room_unreadCount_toString = (_room_unreadCount = room.unreadCount) === null || _room_unreadCount === void 0 ? void 0 : _room_unreadCount.toString()) !== null && _room_unreadCount_toString !== void 0 ? _room_unreadCount_toString : '0',
                size: "small",
                sx: {
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    px: 1
                }
            })
        }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemAvatar/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.A, {
                    src: avatarUrl,
                    children: name.charAt(0)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.A, {
                primary: name,
                secondary: lastMsgSummary
            })
        ]
    });
}
function SummaryRoomList() {
    // i18n文件路径规则
    // i18n文件路径，这个文件将被工具自动生成另一个json文件放置到public和一个i18n-raw的目录，例如当前这个就在这里
    // C:\work\android-droid\html\website-2024-12\apps\homepage\i18n-raw\origin\im\components\rooms\summary-room-list\content.json
    // apps\homepage\src\im\components\rooms\summary-room-list\SummaryRoomList.i18n.json
    // 这是一个monorepo架构方式的项目，
    // homepage是项目名，和package.json对应，
    // /im/components/rooms/summary-room-list是当前文件的目录
    // content是一个后缀，自动生成的i18n文件会自定命名为content.json
    // 使用时的规则就是 `${package.name}/${fileFolder}/content`
    // 这个文件会映射到${package.name}/src/types/i18n-resources.ts文件里
    // 例如当前这个对应在   homepage__im__components__rooms__summary___room___list 这个type就是它的json文件的类型。
    // useTranslation 用的是 @fanfanlo库里导入的，而非react-i18next。
    const { t } = (0,src.useTranslation)('homepage/im/components/rooms/summary-room-list/content');
    // 用useProxyWatchUpdates来监听房间列表变化
    const [rooms] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(client_room/* matrixRoom */.BF.roomData, 'joinedRooms', client_room/* matrixRoom */.BF.roomData.joinedRooms);
    const router = (0,next_router.useRouter)();
    // 处理邀请响应
    const handleInviteResponse = async (roomId, accept)=>{
        try {
            if (accept) {
                // 接受邀请
                await client/* matrixClient */.Xi.client.joinRoom(roomId);
            } else {
                // 拒绝邀请
                await client/* matrixClient */.Xi.client.leave(roomId);
            }
        } catch (error) {
            console.error('处理邀请时出错:', error);
        // 这里可以添加错误提示
        }
    };
    const createHandleRoomClick = (roomId)=>{
        return ()=>{
            handleRoomClick(roomId);
        };
    };
    // 处理房间点击
    const handleRoomClick = (roomId)=>{
        // 这里可以添加导航到聊天界面的逻辑
        console.log('进入房间:', roomId);
        router.push("/im/room?id=".concat(encodeURIComponent(roomId)));
    };
    if (rooms.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                p: 2,
                textAlign: 'center',
                color: 'text.secondary'
            },
            children: t('SummaryRoomList.noRooms')
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
        sx: {
            width: '100%',
            bgcolor: 'background.paper'
        },
        children: rooms.map((room)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RoomListItem, {
                room: room,
                onClick: createHandleRoomClick(room.roomId),
                onInviteResponse: handleInviteResponse
            }, room.roomId))
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(22243);
;// ./src/im/components/user/profile/UserProfile.tsx





const UserProfile_fileLogger = new Log/* Log */.tG(false, 'im.components.user.profile');
// fileLogger.childrenPaused = true;
function UserProfile() {
    const { t } = (0,src.useTranslation)('homepage/im/components/user/profile/content');
    const [userId] = (0,useProxyWatch/* useProxyWatch */.x)(client/* matrixUser */.xb.userData.userInfo, 'loginResponse.user_id', '');
    const logger = UserProfile_fileLogger.sub(false, 'UserProfile_fn');
    // logger.pause = true;
    logger.log('userId=', userId);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: "ID:"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: userId ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            onClick: ()=>{
                                if (userId) {
                                    navigator.clipboard.writeText(userId);
                                    dist/* default */.Ay.success(t('UserProfile.id.copied'));
                                }
                            },
                            style: {
                                cursor: userId ? 'pointer' : 'default'
                            },
                            children: userId
                        }) : t("UserProfile.notLoggedIn")
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(49280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(3711);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(18244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(81482);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/AlertTitle/AlertTitle.js + 1 modules
var AlertTitle = __webpack_require__(49661);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(38771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(30281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(93916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(69468);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
;// ./src/im/components/rooms/create/CreateRoomButton.tsx





function CreateRoomButton() {
    const { t } = (0,src.useTranslation)('homepage/im/components/rooms/create/content');
    const [open, setOpen] = (0,react.useState)(false);
    const [loading, setLoading] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)(null);
    const [formData, setFormData] = (0,react.useState)({
        userId: '',
        roomName: '',
        topic: '',
        isEncrypted: true,
        isDirect: true
    });
    const [errors, setErrors] = (0,react.useState)({});
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>{
        setOpen(false);
        setError(null);
        setErrors({});
    };
    const validateForm = ()=>{
        const newErrors = {};
        // 验证用户ID
        if (!formData.userId.trim()) {
            newErrors.userId = t('CreateRoomButton.dialog.form.userId.error.required');
        } else if (!/^@[^:]+:.+$/.test(formData.userId)) {
            newErrors.userId = t('CreateRoomButton.dialog.form.userId.error.invalid');
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setLoading(true);
        setError(null);
        try {
            if (formData.isDirect) {
                // 创建直接消息
                const result = await client/* matrixInivte */.f_.createDirectMessage(formData.userId);
                if (!result.success) {
                    throw new Error(result.error || 'Unknown error');
                }
            } else {
                // 创建普通房间
                const options = {
                    name: formData.roomName || undefined,
                    topic: formData.topic || undefined,
                    preset: 'private_chat',
                    visibility: 'private',
                    invite: [
                        formData.userId
                    ],
                    is_direct: false,
                    initial_state: formData.isEncrypted ? [
                        {
                            type: 'm.room.encryption',
                            state_key: '',
                            content: {
                                algorithm: 'm.megolm.v1.aes-sha2'
                            }
                        }
                    ] : undefined
                };
                await client/* matrixInivte */.f_.createDirectMessage(options);
            }
            // 成功后关闭对话框并重置表单
            handleClose();
            setFormData({
                userId: '',
                roomName: '',
                topic: '',
                isEncrypted: true,
                isDirect: true
            });
            // 这里可以添加成功提示
            console.log(t('CreateRoomButton.dialog.success'));
        } catch (err) {
            console.error('创建房间失败:', err);
            setError(err.message || t('CreateRoomButton.dialog.error', {
                error: '未知错误'
            }));
        } finally{
            setLoading(false);
        }
    };
    const handleInputChange = (e)=>{
        const { name, value, type } = e.target;
        const checked = e.target.checked;
        setFormData((prev)=>({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        // 清除当前字段的错误
        if (errors[name]) {
            setErrors((prev)=>({
                    ...prev,
                    [name]: undefined
                }));
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                variant: "contained",
                color: "primary",
                onClick: handleOpen,
                size: "small",
                children: t('CreateRoomButton.button.name')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: open,
                onClose: handleClose,
                maxWidth: "sm",
                fullWidth: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        children: t('CreateRoomButton.dialog.title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                                children: [
                                    error && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                                        severity: "error",
                                        sx: {
                                            mb: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(AlertTitle/* default */.A, {
                                                children: "错误"
                                            }),
                                            error
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                        fullWidth: true,
                                        margin: "normal",
                                        label: t('CreateRoomButton.dialog.form.userId.label'),
                                        placeholder: t('CreateRoomButton.dialog.form.userId.placeholder'),
                                        name: "userId",
                                        value: formData.userId,
                                        onChange: handleInputChange,
                                        error: !!errors.userId,
                                        helperText: errors.userId,
                                        disabled: loading
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                                            name: "isDirect",
                                            checked: formData.isDirect,
                                            onChange: handleInputChange,
                                            disabled: loading
                                        }),
                                        label: t('CreateRoomButton.dialog.form.isDirect.label')
                                    }),
                                    !formData.isDirect && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                                fullWidth: true,
                                                margin: "normal",
                                                label: t('CreateRoomButton.dialog.form.roomName.label'),
                                                placeholder: t('CreateRoomButton.dialog.form.roomName.placeholder'),
                                                name: "roomName",
                                                value: formData.roomName,
                                                onChange: handleInputChange,
                                                disabled: loading
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                                fullWidth: true,
                                                margin: "normal",
                                                label: t('CreateRoomButton.dialog.form.topic.label'),
                                                placeholder: t('CreateRoomButton.dialog.form.topic.placeholder'),
                                                name: "topic",
                                                value: formData.topic,
                                                onChange: handleInputChange,
                                                multiline: true,
                                                rows: 2,
                                                disabled: loading
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                                                    name: "isEncrypted",
                                                    checked: formData.isEncrypted,
                                                    onChange: handleInputChange,
                                                    disabled: loading
                                                }),
                                                label: t('CreateRoomButton.dialog.form.isEncrypted.label')
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                                sx: {
                                    p: 2,
                                    pt: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                        onClick: handleClose,
                                        disabled: loading,
                                        children: t('CreateRoomButton.dialog.actions.cancel')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                        type: "submit",
                                        variant: "contained",
                                        color: "primary",
                                        disabled: loading,
                                        startIcon: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                                            size: 20
                                        }) : null,
                                        children: t('CreateRoomButton.dialog.actions.create')
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// ./src/im/components/page-content/PageContent.tsx





function IMPageContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateRoomButton, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(UserProfile, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SummaryRoomList, {})
        ]
    });
}

;// ./src/pages/im/index.tsx




function IM() {
    const { t } = (0,src.useTranslation)('homepage/pages/im/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: t("IM.title"),
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IMPageContent, {})
        })
    });
}


/***/ }),

/***/ 53362:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/im",
      function () {
        return __webpack_require__(46142);
      }
    ]);
    if(false) {}
  

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [112,6977,9893,9151,2203,3390,7313,8771,1482,5881,91,2001,688,2663,636,6593,8792], () => (__webpack_exec__(53362)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=im-a61ff9c55228e90a.js.map