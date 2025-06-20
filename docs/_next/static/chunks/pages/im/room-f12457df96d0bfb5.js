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
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42307);

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
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.1.4_i18next@24.1.0_typescript@5.8.2__react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(9702);
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

/***/ 48959:
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
var Box_Box = __webpack_require__(20532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/AppBar/AppBar.js + 1 modules
var AppBar_AppBar = __webpack_require__(5490);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar = __webpack_require__(13854);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar_Avatar = __webpack_require__(46236);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Typography/Typography.js
var Typography_Typography = __webpack_require__(2621);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(59939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/People.js
var People = __webpack_require__(91269);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useWatchUpdates.js
var useWatchUpdates = __webpack_require__(26544);
// EXTERNAL MODULE: ./src/im/client/room/index.ts + 17 modules
var room = __webpack_require__(85163);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/KeyboardArrowLeft.js
var KeyboardArrowLeft = __webpack_require__(4189);
;// ./src/im/components/room/RoomHeader.tsx







function RoomHeader(param) {
    let { roomId, showMembers, onToggleMembers } = param;
    var _roomInfo_name;
    const { t } = (0,src.useTranslation)('homepage/im/components/room/content');
    const router = (0,next_router.useRouter)();
    const [roomInfo] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(room/* matrixRoom */.BF.roomData.joinedRoomsMap, [
        roomId
    ], room/* matrixRoom */.BF.roomData.joinedRoomsMap[roomId] || {});
    function onOpenSettingsClick() {
        router.push("/im/room/room-settings?id=".concat(roomId));
    }
    function handleBack() {
        router.back();
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar_AppBar/* default */.A, {
        position: "static",
        color: "default",
        elevation: 1,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Toolbar/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowLeft/* default */.A, {
                    onClick: handleBack
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                    sx: {
                        mr: 2
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar_Avatar/* default */.A, {
                        src: roomInfo === null || roomInfo === void 0 ? void 0 : roomInfo.avatarUrl,
                        children: (roomInfo === null || roomInfo === void 0 ? void 0 : (_roomInfo_name = roomInfo.name) === null || _roomInfo_name === void 0 ? void 0 : _roomInfo_name.charAt(0)) || 'R'
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                    variant: "h6",
                    component: "div",
                    sx: {
                        flexGrow: 1,
                        minWidth: 0,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        mr: 2
                    },
                    children: (roomInfo === null || roomInfo === void 0 ? void 0 : roomInfo.name) || t('RoomHeader.unnamedRoom')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    color: showMembers ? 'primary' : 'default',
                    onClick: onOpenSettingsClick,
                    title: t('RoomHeader.toggleMembers'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(People/* default */.A, {})
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/log/Log.js + 37 modules
var Log = __webpack_require__(42307);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useProxyWatch.js
var watcher_useProxyWatch = __webpack_require__(82916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress_CircularProgress = __webpack_require__(58932);
// EXTERNAL MODULE: ./src/im/client/user.ts
var user = __webpack_require__(55180);
;// ./src/im/components/messages/text/TextMessage.tsx



const TextMessage = (param)=>{
    let { message, className = '' } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
        className: "text-message ".concat(className),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
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
    const { t } = (0,src.useTranslation)('homepage/im/components/messages/location/content');
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        className: "location-message ".concat(className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                className: "map-container",
                mb: 1,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: mapUrl,
                    alt: ((_message_content_info = message.content.info) === null || _message_content_info === void 0 ? void 0 : _message_content_info.title) || t('LocationMessage.title'),
                    onClick: handleOpenMap,
                    style: {
                        cursor: 'pointer'
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "body2",
                        color: "textSecondary",
                        children: ((_message_content_info1 = message.content.info) === null || _message_content_info1 === void 0 ? void 0 : _message_content_info1.title) || t('LocationMessage.title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "text",
                        size: "small",
                        onClick: handleOpenMap,
                        children: t('LocationMessage.viewMap')
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
                        children: ((_message_content_info2 = message.content.info) === null || _message_content_info2 === void 0 ? void 0 : _message_content_info2.title) || t('LocationMessage.title')
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
                            children: t('LocationMessage.close')
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
        sx: {
            width: '100%',
            height: 400,
            minHeight: 300,
            position: 'relative'
        }
    });
});

// EXTERNAL MODULE: ./src/im/client/message/messageUtils.ts
var messageUtils = __webpack_require__(27343);
;// ./src/im/components/messages/invite/InviteMessage.tsx


const InviteMessage = (param)=>{
    let { message, className = '' } = param;
    const inviter = message.sender;
    const invitee = message.content.displayname || '';
    const membership = message.content.membership;
    if (membership === 'invite') {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "invite-message ".concat(className),
            style: {
                color: '#fff',
                background: '#1976d2',
                borderRadius: 6,
                padding: '8px 12px',
                fontWeight: 500,
                display: 'inline-block',
                maxWidth: '100%'
            },
            children: inviter ? "".concat(inviter, " 邀请了 ").concat(invitee || '你', " 加入群聊") : "你被邀请加入群聊"
        });
    }
    if (membership === 'join') {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "invite-message ".concat(className),
            style: {
                color: '#fff',
                background: '#388e3c',
                borderRadius: 6,
                padding: '8px 12px',
                fontWeight: 500,
                display: 'inline-block',
                maxWidth: '100%'
            },
            children: invitee ? "".concat(invitee, " 已接受邀请加入群聊") : "有成员已接受邀请加入群聊"
        });
    }
    // 兜底
    return null;
};

;// ./src/im/components/messages/room/RoomNameMessage.tsx


const RoomNameMessage = (param)=>{
    let { message, className = '' } = param;
    const sender = message.sender;
    const name = message.content.name;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "room-name-message ".concat(className),
        style: {
            color: '#ffa000',
            padding: '8px 0'
        },
        children: sender ? "".concat(sender, " 修改了房间名称为「").concat(name, "」") : "房间名称被修改为「".concat(name, "」")
    });
};

;// ./src/im/components/messages/room/RoomHistoryVisibilityMessage.tsx


const visibilityMap = {
    shared: '所有成员可见',
    invited: '仅被邀请成员可见',
    joined: '仅加入后可见',
    world_readable: '所有人可见'
};
const RoomHistoryVisibilityMessage = (param)=>{
    let { message, className = '' } = param;
    const sender = message.sender;
    const visibility = message.content.history_visibility;
    const text = visibilityMap[visibility] || visibility;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "room-history-visibility-message ".concat(className),
        style: {
            color: '#8e24aa',
            padding: '8px 0'
        },
        children: sender ? "".concat(sender, " 修改了房间历史可见性为「").concat(text, "」") : "房间历史可见性被修改为「".concat(text, "」")
    });
};

;// ./src/im/components/messages/room/RoomJoinRuleMessage.tsx


const joinRuleMap = {
    invite: '仅邀请可加入',
    public: '公开房间',
    knock: '敲门加入',
    restricted: '受限加入'
};
const RoomJoinRuleMessage = (param)=>{
    let { message, className = '' } = param;
    const sender = message.sender;
    const joinRule = message.content.join_rule;
    const text = joinRuleMap[joinRule] || joinRule;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "room-join-rule-message ".concat(className),
        style: {
            color: '#fff',
            background: '#0288d1',
            borderRadius: 6,
            padding: '8px 12px',
            fontWeight: 500,
            display: 'inline-block',
            maxWidth: '100%'
        },
        children: sender ? "".concat(sender, " 修改了房间加群规则为「").concat(text, "」") : "房间加群规则被修改为「".concat(text, "」")
    });
};

;// ./src/im/components/messages/room/RoomPowerLevelsMessage.tsx


const RoomPowerLevelsMessage = (param)=>{
    let { message, className = '' } = param;
    const sender = message.sender;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "room-power-levels-message ".concat(className),
        style: {
            color: '#c62828',
            padding: '8px 0'
        },
        children: sender ? "".concat(sender, " 修改了房间权限设置") : "房间权限设置被修改"
    });
};

;// ./src/im/components/messages/room/RoomGuestAccessMessage.tsx


const guestAccessMap = {
    can_join: '允许访客加入',
    forbidden: '禁止访客加入'
};
const RoomGuestAccessMessage = (param)=>{
    let { message, className = '' } = param;
    const sender = message.sender;
    const guestAccess = message.content.guest_access;
    const text = guestAccessMap[guestAccess] || guestAccess;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "room-guest-access-message ".concat(className),
        style: {
            color: '#43a047',
            padding: '8px 0'
        },
        children: sender ? "".concat(sender, " 修改了访客访问权限为「").concat(text, "」") : "访客访问权限被修改为「".concat(text, "」")
    });
};

;// ./src/im/components/messages/room/RoomTopicMessage.tsx


const RoomTopicMessage = (param)=>{
    let { message, className = '' } = param;
    const sender = message.sender;
    const topic = message.content.topic;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "room-topic-message ".concat(className),
        style: {
            color: '#6d4c41',
            padding: '8px 0'
        },
        children: sender ? "".concat(sender, " 修改了房间话题为「").concat(topic, "」") : "房间话题被修改为「".concat(topic, "」")
    });
};

;// ./src/im/components/messages/room/RoomCreateMessage.tsx


const RoomCreateMessage = (param)=>{
    let { message, className = '' } = param;
    const sender = message.content.creator;
    const version = message.content.room_version;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "room-create-message ".concat(className),
        style: {
            color: '#fff',
            background: '#1976d2',
            borderRadius: 6,
            padding: '8px 12px',
            fontWeight: 500,
            display: 'inline-block',
            maxWidth: '100%'
        },
        children: sender ? "".concat(sender, " 创建了房间（版本 ").concat(version, "）") : "房间已创建（版本 ".concat(version, "）")
    });
};

;// ./src/im/components/messages/room/RoomAvatarMessage.tsx


const RoomAvatarMessage = (param)=>{
    let { message, className = '' } = param;
    const sender = message.sender;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "room-avatar-message ".concat(className),
        style: {
            color: '#8e24aa',
            padding: '8px 0'
        },
        children: sender ? "".concat(sender, " 修改了房间头像") : "房间头像已修改"
    });
};

;// ./src/im/components/messages/room/RoomCanonicalAliasMessage.tsx


const RoomCanonicalAliasMessage = (param)=>{
    let { message, className = '' } = param;
    const sender = message.sender;
    const alias = message.content.canonical_alias;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "room-canonical-alias-message ".concat(className),
        style: {
            color: '#0097a7',
            padding: '8px 0'
        },
        children: sender ? "".concat(sender, " 修改了房间主别名为「").concat(alias, "」") : "房间主别名被修改为「".concat(alias, "」")
    });
};

;// ./src/im/components/messages/room/RoomTombstoneMessage.tsx


const RoomTombstoneMessage = (param)=>{
    let { message, className = '' } = param;
    const replacement = message.content.replacement_room;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "room-tombstone-message ".concat(className),
        style: {
            color: '#bdbdbd',
            padding: '8px 0'
        },
        children: [
            "房间已废弃，迁移至 ",
            replacement ? "「".concat(replacement, "」") : '新房间'
        ]
    });
};

;// ./src/im/components/messages/room/RoomEncryptionMessage.tsx


const RoomEncryptionMessage = (param)=>{
    let { message, className = '' } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "room-encryption-message ".concat(className),
        style: {
            color: '#388e3c',
            padding: '8px 0'
        },
        children: "已启用端到端加密"
    });
};

;// ./src/im/components/messages/room/RoomServerAclMessage.tsx


const RoomServerAclMessage = (param)=>{
    let { message, className = '' } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "room-server-acl-message ".concat(className),
        style: {
            color: '#ffb300',
            padding: '8px 0'
        },
        children: "房间服务器访问控制已变更"
    });
};

;// ./src/im/components/messages/MessageRenderer.tsx


















const MessageRenderer = (param)=>{
    let { message, className = '' } = param;
    const commonProps = {
        message,
        className
    };
    // 房间加群规则
    if (message.content && message.content.join_rule) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomJoinRuleMessage, {
            ...commonProps,
            message: message
        }, message.event_id);
    }
    // 房间权限设置
    if (message.content && (message.content.events_default !== undefined || message.content.users !== undefined || message.content.ban !== undefined || message.content.kick !== undefined || message.content.redact !== undefined)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomPowerLevelsMessage, {
            ...commonProps,
            message: message
        }, message.event_id);
    }
    // 访客访问权限
    if (message.content && message.content.guest_access) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomGuestAccessMessage, {
            ...commonProps,
            message: message
        }, message.event_id);
    }
    // 房间话题
    if (message.content && message.content.topic) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomTopicMessage, {
            ...commonProps,
            message: message
        }, message.event_id);
    }
    // 房间历史可见性变更
    if (message.content && message.content.history_visibility) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomHistoryVisibilityMessage, {
            ...commonProps,
            message: message
        }, message.event_id);
    }
    // 房间名称变更
    if (message.content && message.content.name) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomNameMessage, {
            ...commonProps,
            message: message
        }, message.event_id);
    }
    // 邀请和接受邀请类型
    if (message.content && (message.content.membership === 'invite' || message.content.membership === 'join')) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(InviteMessage, {
            ...commonProps,
            message: message
        }, message.event_id);
    }
    // 房间创建
    if (message.content && message.content.room_version && message.content.creator) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomCreateMessage, {
            ...commonProps,
            message: message
        }, message.event_id);
    }
    // 房间头像
    if (message.content && message.content.avatar_url) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomAvatarMessage, {
            ...commonProps,
            message: message
        }, message.event_id);
    }
    // 房间主别名
    if (message.content && message.content.canonical_alias) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomCanonicalAliasMessage, {
            ...commonProps,
            message: message
        }, message.event_id);
    }
    // 房间废弃/迁移
    if (message.content && message.content.replacement_room) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomTombstoneMessage, {
            ...commonProps,
            message: message
        }, message.event_id);
    }
    // 启用加密
    if (message.content && message.content.algorithm) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomEncryptionMessage, {
            ...commonProps,
            message: message
        }, message.event_id);
    }
    // 服务器访问控制
    if (message.content && (message.content.allow || message.content.deny)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomServerAclMessage, {
            ...commonProps,
            message: message
        }, message.event_id);
    }
    if (messageUtils/* messageUtils */.B.isTextMessage(message)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(TextMessage, {
            ...commonProps,
            message: message
        }, message.event_id);
    }
    if (messageUtils/* messageUtils */.B.isLocationMessage(message)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(LocationMessage, {
            ...commonProps,
            message: message
        }, message.event_id);
    }
    // 其他消息类型的处理...
    console.log('unknown message=', message);
    console.log('json message=', JSON.stringify(message));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "unknown-message ".concat(className),
        children: [
            "不支持的消息类型: ",
            message.content.msgtype
        ]
    });
};

// EXTERNAL MODULE: ./src/im/client/room/data.ts
var data = __webpack_require__(79409);
;// ./src/im/components/room/MessageItem.tsx





const fileLogger = new Log/* Log */.tG(false, 'im.components.room.MessageItem');
function MessageItem(param) {
    let { message, currentUserId } = param;
    var _this;
    const logger = fileLogger.sub(false, 'MessageItem_ui');
    logger.pause = true;
    logger.log('message=', message);
    logger.log('currentUserId=', currentUserId);
    // 获取成员信息
    let memberInfo = undefined;
    if (message.room_id && message.sender !== currentUserId) {
        const members = data/* roomData */.S.roomMembers[message.room_id] || [];
        memberInfo = members.find((m)=>m.userId === message.sender);
    }
    const isSelf = message.sender === currentUserId;
    if (isSelf) {
        // 自己的消息，右对齐，无头像无昵称
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
            sx: {
                display: 'flex',
                justifyContent: 'flex-end',
                pb: 2
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                sx: {
                    maxWidth: '80%',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 1,
                    position: 'relative',
                    wordBreak: 'break-word',
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MessageRenderer, {
                        message: message,
                        className: 'sent-message'
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "caption",
                        sx: {
                            display: 'block',
                            textAlign: 'right',
                            mt: 0.5,
                            opacity: 0.7,
                            color: 'primary.contrastText'
                        },
                        children: new Date(message.origin_server_ts).toLocaleTimeString()
                    })
                ]
            })
        });
    }
    // 别人的消息，左侧头像，右侧昵称+消息气泡纵向排列
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        sx: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            pb: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar_Avatar/* default */.A, {
                src: memberInfo === null || memberInfo === void 0 ? void 0 : memberInfo.avatarUrl,
                alt: (memberInfo === null || memberInfo === void 0 ? void 0 : memberInfo.displayName) || message.sender,
                sx: {
                    width: 32,
                    height: 32,
                    mr: 1,
                    mt: 0.5
                },
                children: ((_this = (memberInfo === null || memberInfo === void 0 ? void 0 : memberInfo.displayName) || message.sender) === null || _this === void 0 ? void 0 : _this.charAt(0)) || '?'
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    maxWidth: '80%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                        variant: "caption",
                        sx: {
                            fontSize: '0.75rem',
                            color: 'text.secondary',
                            maxWidth: 160,
                            textAlign: 'left',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            lineHeight: 1.2,
                            mb: 0.5
                        },
                        title: (memberInfo === null || memberInfo === void 0 ? void 0 : memberInfo.displayName) || message.sender,
                        children: (memberInfo === null || memberInfo === void 0 ? void 0 : memberInfo.displayName) || message.sender
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                        sx: {
                            bgcolor: 'background.paper',
                            color: 'text.primary',
                            p: 2,
                            borderRadius: 2,
                            boxShadow: 1,
                            position: 'relative',
                            wordBreak: 'break-word',
                            maxWidth: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MessageRenderer, {
                                message: message,
                                className: 'received-message'
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                variant: "caption",
                                sx: {
                                    display: 'block',
                                    textAlign: 'right',
                                    mt: 0.5,
                                    opacity: 0.7,
                                    color: 'text.secondary'
                                },
                                children: new Date(message.origin_server_ts).toLocaleTimeString()
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// ./src/im/components/room/MessageList.tsx







const MessageList_fileLogger = new Log/* Log */.tG(false, 'im.components.room.MessageList');
function MessageList(param) {
    let { roomId } = param;
    const logger = MessageList_fileLogger.sub(false, 'MessageList_ui');
    logger.pause = true;
    const messagesEndRef = (0,react.useRef)(null);
    const messagesContainerRef = (0,react.useRef)(null);
    const [autoScroll, setAutoScroll] = (0,react.useState)(true);
    const wasAtBottomRef = (0,react.useRef)(true);
    const userAtBottomRef = (0,react.useRef)(true);
    const userReallyAtBottomRef = (0,react.useRef)(true);
    const { t } = (0,src.useTranslation)('homepage/im/components/room/content');
    const DISTANCE_TO_BOTTOM = 5; // px
    const prevMessageCountRef = (0,react.useRef)(0);
    // 判断是否接近底部
    function isNearBottom() {
        let distance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DISTANCE_TO_BOTTOM;
        if (!messagesContainerRef.current) return false;
        const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
        return scrollHeight - scrollTop - clientHeight <= distance;
    }
    // 监听登录状态
    const [loginResponse] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(user/* matrixUser */.x.userData, 'userInfo.loginResponse', user/* matrixUser */.x.userData.userInfo.loginResponse);
    // 监听消息列表
    const [messageIds] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(room/* matrixRoom */.BF.roomData.messages, [
        "".concat(roomId)
    ], room/* matrixRoom */.BF.roomData.messages[roomId] || []);
    const messagesMap = room/* matrixRoom */.BF.roomData.messagesMap;
    // 获取消息详情并转换为 IMatrixMessage 格式
    const messageList = (messageIds === null || messageIds === void 0 ? void 0 : messageIds.map((id)=>{
        const message = messagesMap[id];
        if (!message) {
            console.warn('Message not found:', id);
            return null;
        }
        // 转换为 IMatrixMessage 格式
        const res = {
            event_id: message.event_id,
            type: message.content.msgtype,
            sender: message.sender,
            origin_server_ts: message.origin_server_ts,
            room_id: roomId,
            content: message.content
        };
        return res;
    }).filter((item)=>{
        return item !== null;
    })) || [];
    // 滚动到底部
    const scrollToBottom = ()=>{
        var _messagesContainerRef_current, _messagesContainerRef_current1;
        console.log('[MessageList] scrollToBottom exec', {
            messagesEndRef: messagesEndRef.current,
            messagesContainerRef: messagesContainerRef.current,
            scrollTop: (_messagesContainerRef_current = messagesContainerRef.current) === null || _messagesContainerRef_current === void 0 ? void 0 : _messagesContainerRef_current.scrollTop,
            scrollHeight: (_messagesContainerRef_current1 = messagesContainerRef.current) === null || _messagesContainerRef_current1 === void 0 ? void 0 : _messagesContainerRef_current1.scrollHeight
        });
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    // 只在用户主动滚动时更新"物理底部"状态
    const handleScroll = ()=>{
        const atBottom = isNearBottom();
        userReallyAtBottomRef.current = atBottom;
        console.log('[MessageList] handleScroll, atBottom:', atBottom, 'autoScroll:', autoScroll);
        setAutoScroll(atBottom);
    };
    // 新消息到来前，记录"是否在底部"
    (0,react.useLayoutEffect)(()=>{
        wasAtBottomRef.current = userReallyAtBottomRef.current;
        console.log('[MessageList] useLayoutEffect([messageList]), wasAtBottomRef.current:', wasAtBottomRef.current);
    }, [
        messageList
    ]);
    // 渲染后，决定是否滚动到底
    (0,react.useEffect)(()=>{
        console.log('[MessageList] useEffect([messageList, autoScroll]), wasAtBottomRef.current:', wasAtBottomRef.current, 'autoScroll:', autoScroll, 'messageList.length:', messageList.length);
        if (wasAtBottomRef.current && autoScroll) {
            setTimeout(()=>{
                scrollToBottom();
            }, 0);
        }
    }, [
        messageList,
        autoScroll
    ]);
    // 首次加载消息时强制滚动到底部
    (0,react.useEffect)(()=>{
        if (prevMessageCountRef.current === 0 && messageList.length > 0) {
            setTimeout(()=>{
                scrollToBottom();
            }, 0);
        }
        prevMessageCountRef.current = messageList.length;
    }, [
        messageList
    ]);
    // 初始化时，autoScroll 设为 true
    (0,react.useEffect)(()=>{
        setAutoScroll(true);
    }, [
        roomId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        id: "messagesContainer",
        ref: messagesContainerRef,
        onScroll: handleScroll,
        sx: {
            height: '100%',
            flex: 1,
            overflowY: 'auto',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
        },
        children: [
            !(loginResponse === null || loginResponse === void 0 ? void 0 : loginResponse.user_id) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress_CircularProgress/* default */.A, {})
            }) : messageList.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                    variant: "body1",
                    color: "text.secondary",
                    children: t('MessageList.noMessages')
                })
            }) : messageList.map((message)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MessageItem, {
                    message: message,
                    currentUserId: loginResponse.user_id
                }, message.event_id)),
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
// EXTERNAL MODULE: ./src/im/client/index.ts + 1 modules
var client = __webpack_require__(97304);
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

;// ../../libs/fanfanlo/dist/src/map/map.intf.js

var MapProvider = /* @__PURE__ */ ((MapProvider2)=>{
    MapProvider2["Baidu"] = "baidu";
    MapProvider2["Google"] = "google";
    MapProvider2["Amap"] = "amap";
    return MapProvider2;
})(MapProvider || {}); //# sourceMappingURL=map.intf.js.map

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
var __objRest = (source, exclude)=>{
    var target = {};
    for(var prop in source)if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols) for (var prop of __getOwnPropSymbols(source)){
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop)) target[prop] = source[prop];
    }
    return target;
};



const BaiduMapView = dynamic_default()(()=>__webpack_require__.e(/* import() */ 6444).then(__webpack_require__.bind(__webpack_require__, 4063)).then((m)=>m.BaiduMapView), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(4063)
            ]
    },
    ssr: false
});
const GoogleMapView = dynamic_default()(()=>__webpack_require__.e(/* import() */ 1812).then(__webpack_require__.bind(__webpack_require__, 71812)).then((m)=>m.GoogleMapView), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(71812)
            ]
    },
    ssr: false
});
const AmapMapView = dynamic_default()(()=>__webpack_require__.e(/* import() */ 4808).then(__webpack_require__.bind(__webpack_require__, 74808)).then((m)=>m.AmapMapView), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(74808)
            ]
    },
    ssr: false
});
const MapView = (props)=>{
    const _a = props, { provider = MapProvider.Baidu } = _a, rest = __objRest(_a, [
        "provider"
    ]);
    if (provider === MapProvider.Google) {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(GoogleMapView, __spreadValues({}, rest));
    }
    if (provider === MapProvider.Amap) {
        return /* @__PURE__ */ (0,jsx_runtime.jsx)(AmapMapView, __spreadValues({}, rest));
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(BaiduMapView, __spreadValues({}, rest));
}; //# sourceMappingURL=MapView.js.map

;// ./src/im/components/messages/location/LocationPicker.tsx





const LocationPicker = (param)=>{
    let { open, onClose, onConfirm, provider = MapProvider.Baidu } = param;
    const { t } = (0,src.useTranslation)('homepage/im/components/messages/location/content');
    const [title, setTitle] = (0,react.useState)('');
    const [description, setDescription] = (0,react.useState)('');
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const [currentLocation, setCurrentLocation] = (0,react.useState)(null);
    const [permissionDialogOpen, setPermissionDialogOpen] = (0,react.useState)(false);
    const [permissionDeniedDialogOpen, setPermissionDeniedDialogOpen] = (0,react.useState)(false);
    const handleGetCurrentLocation = (0,react.useCallback)(()=>{
        if (!navigator.geolocation) {
            alert(t('LocationPicker.geolocationNotSupported'));
            return;
        }
        console.log('Checking geolocation permissions...');
        // 优先检测权限
        if (navigator.permissions) {
            navigator.permissions.query({
                name: 'geolocation'
            }).then((result)=>{
                console.log('Permission state:', result.state);
                if (result.state === 'granted') {
                    console.log('Permission granted, getting location...');
                    doGetLocation();
                } else if (result.state === 'prompt') {
                    console.log('Permission prompt, showing dialog...');
                    setPermissionDialogOpen(true); // 确保这里被调用
                } else if (result.state === 'denied') {
                    console.log('Permission denied, showing denied dialog...');
                    setPermissionDeniedDialogOpen(true);
                }
            }).catch((error)=>{
                console.error('Error checking permissions:', error);
                // 兼容异常，直接尝试
                doGetLocation();
            });
        } else {
            console.log('Permissions API not supported, attempting to get location...');
            // 兼容老浏览器
            doGetLocation();
        }
    }, [
        t
    ]);
    const doGetLocation = ()=>{
        setIsLoading(true);
        navigator.geolocation.getCurrentPosition((position)=>{
            setCurrentLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
            setIsLoading(false);
        }, (error)=>{
            if (error.code === error.PERMISSION_DENIED) {
                setPermissionDeniedDialogOpen(true);
            } else if (error.code === error.POSITION_UNAVAILABLE) {
                alert(t('LocationPicker.locationUnavailable'));
            } else if (error.code === error.TIMEOUT) {
                alert(t('LocationPicker.locationTimeout'));
            } else {
                alert(t('LocationPicker.getLocationFailed'));
            }
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
            title: title || t('LocationPicker.myLocation'),
            description
        });
        // 重置表单
        setTitle('');
        setDescription('');
        setCurrentLocation(null);
        onClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
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
                        children: t('LocationPicker.shareLocation')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                        sx: {
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                sx: {
                                    width: '100%',
                                    height: '100%',
                                    mb: 3,
                                    position: 'relative'
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MapView, {
                                    style: {
                                        height: '500px',
                                        width: '100%'
                                    },
                                    watchPosition: true,
                                    provider: provider,
                                    onDeviceLocationUpdate: (location)=>{
                                        // 设备物理位置变化
                                        console.log('设备位置更新:', location);
                                    },
                                    onCenterChange: (location)=>{
                                        // 地图中心变化
                                        console.log('地图中心更新:', location);
                                    },
                                    onLocationError: (error)=>{
                                        console.error('位置获取错误:', error);
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                sx: {
                                    mt: 2,
                                    mb: 3
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                    variant: "contained",
                                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(LocationOn/* default */.A, {}),
                                    onClick: handleGetCurrentLocation,
                                    disabled: isLoading,
                                    children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress_CircularProgress/* default */.A, {
                                        size: 24
                                    }) : t('LocationPicker.getCurrentLocation')
                                })
                            }),
                            currentLocation && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                sx: {
                                    mt: 2,
                                    mb: 3
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                        fullWidth: true,
                                        label: t('LocationPicker.title'),
                                        value: title,
                                        onChange: (e)=>setTitle(e.target.value),
                                        margin: "normal"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                        fullWidth: true,
                                        label: t('LocationPicker.description'),
                                        value: description,
                                        onChange: (e)=>setDescription(e.target.value),
                                        margin: "normal",
                                        placeholder: t('LocationPicker.descriptionPlaceholder')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                        sx: {
                                            mt: 2,
                                            p: 2,
                                            border: '1px solid #eee',
                                            borderRadius: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                                                variant: "subtitle2",
                                                gutterBottom: true,
                                                children: t('LocationPicker.preview')
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography_Typography/* default */.A, {
                                                variant: "body2",
                                                color: "text.secondary",
                                                children: [
                                                    t('LocationPicker.latitude'),
                                                    ": ",
                                                    currentLocation.lat.toFixed(6),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                    t('LocationPicker.longitude'),
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
                                children: t('LocationPicker.cancel')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: handleSubmit,
                                variant: "contained",
                                disabled: !currentLocation,
                                children: t('LocationPicker.send')
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: permissionDialogOpen,
                onClose: ()=>setPermissionDialogOpen(false),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        children: t('LocationPicker.shareLocation')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                            children: t('LocationPicker.permissionPrompt')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: ()=>setPermissionDialogOpen(false),
                                children: t('LocationPicker.cancel')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: ()=>{
                                    setPermissionDialogOpen(false);
                                    doGetLocation();
                                },
                                variant: "contained",
                                children: t('LocationPicker.getCurrentLocation')
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: permissionDeniedDialogOpen,
                onClose: ()=>setPermissionDeniedDialogOpen(false),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        children: t('LocationPicker.shareLocation')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography_Typography/* default */.A, {
                            color: "error",
                            children: t('LocationPicker.permissionDenied')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.A, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                            onClick: ()=>setPermissionDeniedDialogOpen(false),
                            children: t('LocationPicker.cancel')
                        })
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        sx: {
            p: 2,
            borderTop: '1px solid',
            borderColor: 'divider'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(37387);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Badge/Badge.js + 3 modules
var Badge = __webpack_require__(54227);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@15.1.4_i18next@24.1.0_typescript@5.7.2__react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(34893);
;// __barrel_optimize__?names=useTranslation!=!../../node_modules/.pnpm/react-i18next@15.1.4_i18next@24.1.0_typescript@5.7.2__react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-i18next/dist/es/index.js


;// ./src/im/components/room/MessageListScroller.tsx




const SCROLL_THRESHOLD = 100;
const SCROLL_DEBOUNCE_MS = 150;
const MessageListScroller = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { children, onLoadMore = async ()=>{}, onLoadNewer = async ()=>{}, hasMore = false, hasNewer = false, loading = false, loadingNewer = false, className = '', style = {}, roomId } = param;
    const { t } = (0,es/* useTranslation */.Bd)('homepage/im/components/room/content');
    const listRef = (0,react.useRef)(null);
    const debounceTimerRef = (0,react.useRef)();
    const scrollTimeoutRef = (0,react.useRef)();
    const isAtBottomRef = (0,react.useRef)(true);
    const scrollDirectionRef = (0,react.useRef)(null);
    // 使用对象存储滚动位置和时间戳，以便更好地控制滚动行为
    const lastScrollTopRef = (0,react.useRef)({
        scrollTop: 0
    });
    const isLoadingOlderRef = (0,react.useRef)(false);
    const isLoadingNewerRef = (0,react.useRef)(false);
    const isInitialLoadRef = (0,react.useRef)(true);
    const isProgrammaticScrollRef = (0,react.useRef)(false);
    const scrollAnimationFrameRef = (0,react.useRef)();
    const [showScrollToBottom, setShowScrollToBottom] = (0,react.useState)(false);
    const [newMessageCount, setNewMessageCount] = (0,react.useState)(0);
    // 更新滚动信息
    const updateScrollInfo = (0,react.useCallback)((el)=>{
        if (!el) return null;
        const { scrollTop, scrollHeight, clientHeight } = el;
        const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
        // 调整顶部检测阈值，确保更容易触发加载
        const isAtTop = scrollTop <= SCROLL_THRESHOLD * 1.5;
        const isAtBottom = distanceFromBottom <= SCROLL_THRESHOLD;
        // 更新滚动方向（仅当滚动位置变化超过阈值时）
        const SCROLL_THRESHOLD_PX = 1; // 1px threshold to reduce noise
        const scrollDiff = scrollTop - lastScrollTopRef.current.scrollTop;
        if (Math.abs(scrollDiff) > SCROLL_THRESHOLD_PX) {
            scrollDirectionRef.current = scrollDiff > 0 ? 'down' : 'up';
            lastScrollTopRef.current = {
                ...lastScrollTopRef.current,
                scrollTop
            };
            console.log('Scroll direction updated:', {
                direction: scrollDirectionRef.current,
                scrollTop,
                lastScrollTop: lastScrollTopRef.current.scrollTop,
                diff: scrollDiff
            });
        }
        // 更新是否在底部的引用
        isAtBottomRef.current = isAtBottom;
        return {
            scrollTop,
            scrollHeight,
            clientHeight,
            distanceFromBottom,
            isAtTop,
            isAtBottom,
            timestamp: Date.now()
        };
    }, []);
    // 滚动到底部
    const scrollToBottom = (0,react.useCallback)(function() {
        let behavior = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'smooth';
        const list = listRef.current;
        if (!list) return;
        // 如果已经在底部，不需要滚动
        const { scrollTop, scrollHeight, clientHeight } = list;
        const isAtBottom = scrollHeight - (scrollTop + clientHeight) < 10;
        if (isAtBottom) {
            isAtBottomRef.current = true;
            setShowScrollToBottom(false);
            setNewMessageCount(0);
            return;
        }
        // 设置程序化滚动标志
        isProgrammaticScrollRef.current = true;
        // 直接设置scrollTop而不是使用scrollTo可以避免触发scroll事件
        list.scrollTop = list.scrollHeight;
        // 更新UI状态
        isAtBottomRef.current = true;
        setShowScrollToBottom(false);
        setNewMessageCount(0);
        // 使用requestAnimationFrame确保DOM更新后重置标志
        requestAnimationFrame(()=>{
            // 再次检查是否真的滚动到了底部
            if (list) {
                const { scrollTop, scrollHeight, clientHeight } = list;
                isAtBottomRef.current = scrollHeight - (scrollTop + clientHeight) < 10;
            }
            // 延迟重置标志，防止滚动事件干扰
            setTimeout(()=>{
                isProgrammaticScrollRef.current = false;
            }, 100);
        });
    }, []);
    // 滚动到顶部
    const scrollToTop = (0,react.useCallback)(function() {
        let behavior = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'smooth';
        if (listRef.current) {
            listRef.current.scrollTo({
                top: 0,
                behavior
            });
        }
    }, []);
    // 滚动到指定位置
    const scrollToPosition = (0,react.useCallback)((position)=>{
        if (listRef.current) {
            listRef.current.scrollTop = position;
        }
    }, []);
    // 获取滚动位置
    const getScrollPosition = (0,react.useCallback)(()=>{
        var _listRef_current;
        return ((_listRef_current = listRef.current) === null || _listRef_current === void 0 ? void 0 : _listRef_current.scrollTop) || 0;
    }, []);
    // 加载更多历史消息
    const loadOlderMessages = (0,react.useCallback)(async ()=>{
        console.log('loadOlderMessages called');
        if (!hasMore || loading || isLoadingOlderRef.current) {
            console.log('Skipping loadOlderMessages:', {
                hasMore,
                loading,
                isLoadingOlder: isLoadingOlderRef.current
            });
            return;
        }
        console.log('Loading older messages...');
        isLoadingOlderRef.current = true;
        const list = listRef.current;
        if (!list) {
            console.log('No list element');
            isLoadingOlderRef.current = false;
            return;
        }
        // 保存当前滚动位置和内容高度
        const scrollTop = list.scrollTop;
        const scrollHeight = list.scrollHeight;
        const isAtTop = scrollTop <= SCROLL_THRESHOLD;
        const firstChild = list.firstElementChild;
        const firstChildOffset = firstChild ? firstChild.offsetTop : 0;
        console.log('Before load:', {
            scrollTop,
            scrollHeight,
            isAtTop,
            firstChildOffset
        });
        try {
            // 设置程序化滚动标志，防止滚动事件干扰
            isProgrammaticScrollRef.current = true;
            // 加载更多消息
            await onLoadMore();
            // 使用 requestAnimationFrame 确保 DOM 已更新
            requestAnimationFrame(()=>{
                if (!list) return;
                const newScrollHeight = list.scrollHeight;
                const heightDiff = newScrollHeight - scrollHeight;
                console.log('After load:', {
                    newScrollHeight,
                    heightDiff
                });
                // 保持滚动位置
                if (isAtTop && heightDiff > 0) {
                    console.log('Restoring scroll position:', {
                        newPosition: heightDiff + scrollTop
                    });
                    // 方法1：使用新的滚动位置
                    list.scrollTop = heightDiff + scrollTop;
                    // 方法2：使用第一个子元素的位置（备用）
                    if (firstChild) {
                        const newFirstChild = list.firstElementChild;
                        if (newFirstChild) {
                            setTimeout(()=>{
                                const newPosition = newFirstChild.offsetTop - firstChildOffset + scrollTop;
                                console.log('Alternative scroll position:', newPosition);
                                list.scrollTop = newPosition;
                            }, 0);
                        }
                    }
                }
                // 重置程序化滚动标志
                setTimeout(()=>{
                    isProgrammaticScrollRef.current = false;
                }, 100);
            });
        } catch (error) {
            console.error('Failed to load older messages:', error);
            isProgrammaticScrollRef.current = false;
        } finally{
            console.log('Finished loading older messages');
            isLoadingOlderRef.current = false;
        }
    }, [
        hasMore,
        loading,
        onLoadMore
    ]);
    // 加载更新消息
    const loadNewerMessages = (0,react.useCallback)(async ()=>{
        console.log('loadNewerMessages called');
        if (!hasNewer || loadingNewer || isLoadingNewerRef.current) return;
        isLoadingNewerRef.current = true;
        const list = listRef.current;
        if (!list) {
            isLoadingNewerRef.current = false;
            return;
        }
        const wasAtBottom = isAtBottomRef.current;
        try {
            await onLoadNewer();
            // 检查是否仍然在底部
            setTimeout(()=>{
                if (!list) return;
                const { scrollTop, scrollHeight, clientHeight } = list;
                const isStillAtBottom = scrollHeight - (scrollTop + clientHeight) <= SCROLL_THRESHOLD;
                if (wasAtBottom && isStillAtBottom) {
                    scrollToBottom('smooth');
                } else if (!wasAtBottom) {
                    setNewMessageCount((prev)=>prev + 1);
                }
            }, 100);
        } catch (error) {
            console.error('Failed to load newer messages:', error);
        } finally{
            isLoadingNewerRef.current = false;
        }
    }, [
        hasNewer,
        loadingNewer,
        onLoadNewer,
        scrollToBottom
    ]);
    // 处理滚动事件
    const handleScroll = (0,react.useCallback)((e)=>{
        const el = e.currentTarget;
        if (!el) return;
        // 如果是程序化滚动，不处理滚动逻辑
        if (isProgrammaticScrollRef.current) {
            console.log('Programmatic scroll, skipping scroll handling');
            return;
        }
        // 清除之前的防抖定时器
        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }
        // 立即更新滚动位置
        const currentScrollTop = el.scrollTop;
        const currentTime = Date.now();
        // 更新滚动方向
        const scrollDiff = currentScrollTop - lastScrollTopRef.current.scrollTop;
        if (Math.abs(scrollDiff) > 1) {
            scrollDirectionRef.current = scrollDiff > 0 ? 'down' : 'up';
        }
        // 更新滚动位置和时间戳
        lastScrollTopRef.current = {
            scrollTop: currentScrollTop,
            time: currentTime
        };
        console.log('Scroll event:', {
            scrollTop: currentScrollTop,
            direction: scrollDirectionRef.current,
            isProgrammatic: isProgrammaticScrollRef.current
        });
        // 设置防抖处理
        debounceTimerRef.current = setTimeout(()=>{
            const scrollInfo = updateScrollInfo(el);
            if (!scrollInfo) return;
            const { isAtTop, isAtBottom, scrollTop, scrollHeight, clientHeight } = scrollInfo;
            console.log('Scroll info:', {
                isAtTop,
                isAtBottom,
                scrollTop,
                scrollHeight,
                clientHeight,
                direction: scrollDirectionRef.current,
                isProgrammatic: isProgrammaticScrollRef.current
            });
            // 更新UI状态
            setShowScrollToBottom(!isAtBottom);
            isAtBottomRef.current = isAtBottom;
            // 记录滚动状态
            console.log('Scroll state:', {
                isAtTop,
                isAtBottom,
                hasMore,
                hasNewer,
                loading,
                loadingNewer,
                scrollDirection: scrollDirectionRef.current,
                isProgrammatic: isProgrammaticScrollRef.current
            });
            // 只在用户滚动时触发加载
            if (!isProgrammaticScrollRef.current) {
                // 滚动到顶部加载更多
                if (isAtTop && hasMore && !loading && scrollDirectionRef.current === 'up') {
                    console.log('Loading older messages...');
                    loadOlderMessages().catch((error)=>{
                        console.error('Error loading older messages:', error);
                        // 确保加载状态被重置
                        isLoadingOlderRef.current = false;
                    });
                } else if (isAtBottom && hasNewer && !loadingNewer && scrollDirectionRef.current === 'down') {
                    console.log('Loading newer messages...');
                    loadNewerMessages().catch((error)=>{
                        console.error('Error loading newer messages:', error);
                        // 确保加载状态被重置
                        isLoadingNewerRef.current = false;
                    });
                }
            }
        }, SCROLL_DEBOUNCE_MS);
    }, [
        hasMore,
        hasNewer,
        loading,
        loadingNewer,
        loadOlderMessages,
        loadNewerMessages,
        updateScrollInfo
    ]);
    // 初始滚动到底部
    (0,react.useEffect)(()=>{
        if (isInitialLoadRef.current && listRef.current) {
            isInitialLoadRef.current = false;
            console.log('Initial load, scrolling to bottom...');
            // 使用 setTimeout 确保所有子组件都已渲染
            const timer = setTimeout(()=>{
                if (!listRef.current) return;
                const { scrollHeight, clientHeight, scrollTop } = listRef.current;
                const isAtBottom = scrollHeight - (scrollTop + clientHeight) < 10;
                console.log('Initial scroll check:', {
                    scrollHeight,
                    clientHeight,
                    scrollTop,
                    isAtBottom
                });
                // 只有当不在底部时才滚动到底部
                if (!isAtBottom) {
                    console.log('Scrolling to bottom...');
                    scrollToBottom('auto');
                } else {
                    console.log('Already at bottom, no need to scroll');
                }
            }, 100);
            return ()=>{
                clearTimeout(timer);
            };
        }
    }, [
        scrollToBottom
    ]);
    // 清理定时器和动画帧
    (0,react.useEffect)(()=>{
        return ()=>{
            if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
            if (scrollAnimationFrameRef.current) {
                cancelAnimationFrame(scrollAnimationFrameRef.current);
            }
        };
    }, []);
    // 暴露方法给父组件
    (0,react.useImperativeHandle)(ref, ()=>({
            scrollToBottom,
            scrollToTop,
            scrollToPosition,
            getScrollPosition,
            loadOlderMessages,
            loadNewerMessages
        }), [
        scrollToBottom,
        scrollToTop,
        scrollToPosition,
        getScrollPosition,
        loadOlderMessages,
        loadNewerMessages
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        ref: listRef,
        className: "message-list-scroller ".concat(className),
        style: {
            position: 'relative',
            height: '100%',
            overflowY: 'auto',
            ...style
        },
        onScroll: handleScroll,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 1,
                    minHeight: 40
                },
                children: loading && /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress_CircularProgress/* default */.A, {
                    size: 20
                })
            }),
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 1,
                    minHeight: 40
                },
                children: loadingNewer && /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress_CircularProgress/* default */.A, {
                    size: 20
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Fade/* default */.A, {
                in: showScrollToBottom,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                    sx: {
                        position: 'sticky',
                        bottom: 16,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "contained",
                        color: "primary",
                        onClick: ()=>scrollToBottom('smooth'),
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Badge/* default */.A, {
                            badgeContent: newMessageCount,
                            color: "error",
                            invisible: newMessageCount === 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                width: 24,
                                height: 24
                            })
                        }),
                        children: t('scrollToBottom')
                    })
                })
            })
        ]
    });
});
MessageListScroller.displayName = 'MessageListScroller';


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
    const topBarRef = (0,react.useRef)(null);
    const bottomBarRef = (0,react.useRef)(null);
    const [bottomBarHeight, setBottomBarHeight] = (0,react.useState)(0);
    const [topBarHeight, setTopBarHeight] = (0,react.useState)(0);
    const [hasMoreMessages, setHasMoreMessages] = (0,react.useState)(true);
    const [hasNewerMessages, setHasNewerMessages] = (0,react.useState)(true);
    const [isLoadingMore, setIsLoadingMore] = (0,react.useState)(false);
    const [isLoadingNewer, setIsLoadingNewer] = (0,react.useState)(false);
    const messageScrollerRef = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        if (bottomBarRef.current) {
            setBottomBarHeight(bottomBarRef.current.offsetHeight);
        }
    }, [
        bottomBarRef.current
    ]);
    (0,react.useEffect)(()=>{
        if (topBarRef.current) {
            setTopBarHeight(topBarRef.current.offsetHeight);
        }
    }, [
        topBarRef.current
    ]);
    // 加载更多历史消息
    const handleLoadMore = (0,react.useCallback)(async ()=>{
        if (isLoadingMore || !hasMoreMessages) return;
        setIsLoadingMore(true);
        try {
            // TODO: 实现加载更多消息的逻辑
            // 例如: await loadOlderMessages(roomId);
            // 加载完成后更新 hasMoreMessages 状态
            // setHasMoreMessages(/* 是否还有更多消息 */);
            await new Promise((resolve)=>setTimeout(resolve, 1000)); // 模拟加载延迟
        } finally{
            setIsLoadingMore(false);
        }
    }, [
        roomId,
        isLoadingMore,
        hasMoreMessages
    ]);
    // 加载更新消息
    const handleLoadNewer = (0,react.useCallback)(async ()=>{
        if (isLoadingNewer || !hasNewerMessages) return;
        setIsLoadingNewer(true);
        try {
            // TODO: 实现加载更新消息的逻辑
            // 例如: await loadNewerMessages(roomId);
            // 加载完成后更新 hasNewerMessages 状态
            // setHasNewerMessages(/* 是否还有更新消息 */);
            await new Promise((resolve)=>setTimeout(resolve, 1000)); // 模拟加载延迟
        } finally{
            setIsLoadingNewer(false);
        }
    }, [
        roomId,
        isLoadingNewer,
        hasNewerMessages
    ]);
    // 滚动到底部
    const scrollToBottom = (0,react.useCallback)(()=>{
        if (messageScrollerRef.current) {
            messageScrollerRef.current.scrollToBottom();
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        sx: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                ref: topBarRef,
                sx: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#fff',
                    padding: '10px',
                    borderBottom: '1px solid #ccc',
                    zIndex: 1
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomHeader, {
                    roomId: roomId,
                    onToggleMembers: toggleMembers,
                    showMembers: showMembers
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    height: "calc(100vh - ".concat(topBarHeight + bottomBarHeight, "px)"),
                    marginTop: "".concat(topBarHeight, "px"),
                    overflow: 'hidden',
                    backgroundColor: '#e0e0e0'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                    sx: {
                        flex: 1,
                        padding: 2,
                        height: '100%',
                        boxSizing: 'border-box',
                        position: 'relative'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MessageListScroller, {
                        ref: messageScrollerRef,
                        roomId: roomId,
                        onLoadMore: handleLoadMore,
                        onLoadNewer: handleLoadNewer,
                        hasMore: hasMoreMessages,
                        hasNewer: hasNewerMessages,
                        loading: isLoadingMore,
                        loadingNewer: isLoadingNewer,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MessageList, {
                            roomId: roomId,
                            onMessageSent: scrollToBottom
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                ref: bottomBarRef,
                sx: {
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#fff',
                    padding: '10px',
                    borderTop: '1px solid #ccc',
                    zIndex: 1
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MessageInput, {
                    roomId: roomId
                })
            })
        ]
    });
}

;// ./src/im/components/room/RoomMembers.tsx





function RoomMembers(param) {
    let { roomId } = param;
    const { t } = useTranslation('homepage/im/components/room/content');
    // 监听登录状态
    const [loginResponse] = useProxyWatch(matrixUser.userData, 'userInfo.loginResponse', matrixUser.userData.userInfo.loginResponse);
    // 监听房间成员数据和加载状态
    const [roomMembers] = useProxyWatchUpdates(matrixRoom.roomData.roomMembers, [
        "".concat(roomId)
    ], matrixRoom.roomData.roomMembers[roomId] || []);
    const [isFetchingMembers] = useProxyWatch(matrixRoom.roomData.isFetchingMembers, 'value', matrixRoom.roomData.isFetchingMembers.value);
    // 如果登录信息未加载完成，显示加载中
    if (!loginResponse) {
        return /*#__PURE__*/ _jsx(Box, {
            sx: {
                p: 2,
                textAlign: 'center'
            },
            children: /*#__PURE__*/ _jsx(CircularProgress, {
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
        return /*#__PURE__*/ _jsxs(Box, {
            sx: {
                p: 2,
                textAlign: 'center'
            },
            children: [
                /*#__PURE__*/ _jsx(CircularProgress, {
                    size: 24
                }),
                /*#__PURE__*/ _jsx(Typography, {
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
        return /*#__PURE__*/ _jsx(Box, {
            sx: {
                p: 2,
                textAlign: 'center'
            },
            children: /*#__PURE__*/ _jsx(Typography, {
                color: "text.secondary",
                children: t('RoomMembers.noMembers')
            })
        });
    }
    return /*#__PURE__*/ _jsx(Box, {
        children: /*#__PURE__*/ _jsx(List, {
            children: sortedMembers.map((member)=>/*#__PURE__*/ _jsxs(ListItem, {
                    children: [
                        /*#__PURE__*/ _jsx(ListItemAvatar, {
                            children: /*#__PURE__*/ _jsx(Avatar, {
                                src: member.avatarUrl,
                                alt: member.displayName || member.userId
                            })
                        }),
                        /*#__PURE__*/ _jsx(ListItemText, {
                            primary: member.displayName || member.userId,
                            secondary: member.userId === currentUserId ? t('RoomMembers.you') : t("RoomMembers.".concat(member.membership))
                        })
                    ]
                }, member.userId))
        })
    });
}

;// ./src/im/components/room/index.ts







// EXTERNAL MODULE: ../../node_modules/.pnpm/react-virtuoso@4.12.8_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-virtuoso/dist/index.mjs
var dist = __webpack_require__(12773);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/nextjs/env/env.js
var env = __webpack_require__(91839);
;// ./src/im/client/message/handlers/loadHistory.ts


// 你需要根据实际项目引入 matrix 客户端实例
// import { matrixClient } from '你的matrix客户端路径';
/**
 * 基于 event_id 向前翻历史消息
 * @param client MatrixClient 实例
 * @param roomId 房间ID
 * @param eventId 作为锚点的消息ID
 * @param limit 拉取条数
 * @returns 拉取到的 MatrixEvent[]，以及是否到达最早
 */ async function loadHistoryByEventId(roomId, eventId) {
    let limit = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 20;
    if (!client_client/* matrixClient */.X.client) return {
        events: [],
        isEnd: true,
        timeline: null
    };
    // 1. 获取 Room 实例
    const room = await client_client/* matrixClient */.X.client.getRoom(roomId);
    if (!room) {
        throw new Error('Room not found: ' + roomId);
    }
    // 2. 获取 timelineSet
    const timelineSet = await room.getUnfilteredTimelineSet();
    if (!timelineSet) {
        throw new Error('timelineSet not found for room: ' + roomId);
    }
    // 3. 获取包含该 event 的 timeline
    const timeline = await client_client/* matrixClient */.X.client.getEventTimeline(timelineSet, eventId);
    if (!timeline) {
        throw new Error('timeline not found for event: ' + eventId);
    }
    // 4. 向前分页加载历史
    const hasMore = await client_client/* matrixClient */.X.client.paginateEventTimeline(timeline, {
        backwards: true,
        limit
    });
    // 5. 获取 timeline 上的所有事件
    const events = await timeline.getEvents(); // Array<MatrixEvent>
    // 6. 提取 event 字段，转为 IMatrixMessage[]
    const messages = events.map((ev)=>ev.event).filter((ev)=>!!ev && typeof ev.event_id === 'string' && typeof ev.sender === 'string' && typeof ev.content === 'object' && ev.content !== undefined && typeof ev.origin_server_ts === 'number' && typeof ev.type === 'string').map((ev)=>({
            event_id: ev.event_id,
            sender: ev.sender,
            content: ev.content,
            origin_server_ts: ev.origin_server_ts,
            type: ev.type,
            unsigned: ev.unsigned,
            room_id: ev.room_id
        }));
    // 7. 批量写入本地消息池
    messageUtils/* messageUtils */.B.batchAddHistoryMessages(roomId, messages);
    // 6. 判断是否到达最早
    const isEnd = !hasMore;
    return {
        events,
        isEnd,
        timeline
    };
}
const matrixLoadHistory = {
    loadHistoryByEventId
};

;// ./src/im/components/room/MessageListVirtuoso.tsx










const MessageListVirtuoso_fileLogger = new Log/* Log */.tG(false, 'MessageListVirtuoso');
// fileLogger.pause = true;
// fileLogger.childrenPaused = true;
function MessageListVirtuoso(param) {
    let { roomId } = param;
    const logger = MessageListVirtuoso_fileLogger.sub(false, 'MessageListVirtuoso_ui');
    logger.pause = true;
    // logger.childrenPaused = true;
    const { t } = (0,src.useTranslation)('homepage/im/components/room/content');
    // 监听登录状态
    const [loginResponse] = (0,watcher_useProxyWatch/* useProxyWatch */.x)(user/* matrixUser */.x.userData, 'userInfo.loginResponse', user/* matrixUser */.x.userData.userInfo.loginResponse);
    // 监听消息列表
    const [messageIds] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(room/* matrixRoom */.BF.roomData.messages, [
        "".concat(roomId)
    ], room/* matrixRoom */.BF.roomData.messages[roomId] || []);
    const messagesMap = room/* matrixRoom */.BF.roomData.messagesMap;
    // 获取消息详情并转换为 IMatrixMessage 格式
    const messageList = (messageIds === null || messageIds === void 0 ? void 0 : messageIds.map((id)=>{
        const message = messagesMap[id];
        if (!message) return null;
        return {
            event_id: message.event_id,
            type: message.content.msgtype,
            sender: message.sender,
            origin_server_ts: message.origin_server_ts,
            room_id: roomId || '',
            content: message.content
        };
    }).filter((item)=>item !== null)) || [];
    const [loading, setLoading] = (0,react.useState)(false);
    const [historyEnd, setHistoryEnd] = (0,react.useState)(false);
    const [loadingHistory, setLoadingHistory] = (0,react.useState)(false);
    const virtuosoRef = (0,react.useRef)(null);
    const containerRef = (0,react.useRef)(null);
    // 补偿相关
    const anchorMsgIdRef = (0,react.useRef)(null); // 记录锚点消息id
    const [autoCompensate, setAutoCompensate] = (0,react.useState)(false);
    // 上拉加载更多历史消息，加载前记录 anchorMsgIdRef
    const onLoadMore = (0,react.useCallback)(async ()=>{
        logger.log('onLoadMore called', {
            roomId,
            messageListLen: messageList.length,
            loading,
            historyEnd
        });
        if (!roomId || messageList.length === 0 || loading || historyEnd) return;
        setLoading(true);
        setLoadingHistory(true);
        try {
            var _messageList_;
            anchorMsgIdRef.current = (_messageList_ = messageList[0]) === null || _messageList_ === void 0 ? void 0 : _messageList_.event_id;
            const res = await matrixLoadHistory.loadHistoryByEventId(roomId, messageList[0].event_id, env/* isDev */.Cu ? 30 : 10);
            logger.log('res=', res);
            if (res.isEnd) setHistoryEnd(true);
            setAutoCompensate(true); // 加载后触发补偿
        } finally{
            setLoading(false);
            setLoadingHistory(false);
        }
    }, [
        roomId,
        messageList,
        loading,
        historyEnd
    ]);
    // 在 totalListHeightChanged 里做自动补偿
    const handleTotalListHeightChanged = (0,react.useCallback)((height)=>{
        logger.log('[totalListHeightChanged] compensation check', {
            height,
            autoCompensate,
            anchorMsg: anchorMsgIdRef.current
        });
        if (autoCompensate && anchorMsgIdRef.current) {
            const newIndex = messageList.findIndex((msg)=>msg.event_id === anchorMsgIdRef.current);
            logger.log('[autoCompensate] anchorMsgId', anchorMsgIdRef.current, 'newIndex', newIndex);
            if (newIndex !== -1) {
                setTimeout(()=>{
                    var _virtuosoRef_current;
                    logger.log('[autoScroll] scrollToIndex', {
                        newIndex,
                        anchorMsgId: anchorMsgIdRef.current
                    });
                    (_virtuosoRef_current = virtuosoRef.current) === null || _virtuosoRef_current === void 0 ? void 0 : _virtuosoRef_current.scrollToIndex({
                        index: newIndex,
                        align: 'start'
                    });
                }, 30);
            }
            setAutoCompensate(false);
        }
    }, [
        autoCompensate,
        messageList
    ]);
    // 监听用户主动操作，停止自动补偿
    (0,react.useEffect)(()=>{
        const stopCompensate = ()=>{
            logger.log('[userAction] stop autoCompensate');
            setAutoCompensate(false);
        };
        const el = containerRef.current;
        if (!el) return;
        el.addEventListener('mousedown', stopCompensate);
        el.addEventListener('touchstart', stopCompensate);
        return ()=>{
            el.removeEventListener('mousedown', stopCompensate);
            el.removeEventListener('touchstart', stopCompensate);
        };
    }, []);
    // 每次到顶都尝试加载历史
    const handleAtTopStateChange = (0,react.useCallback)((atTop)=>{
        logger.log('[atTopStateChange]', {
            atTop,
            historyEnd,
            loading,
            loadingHistory
        });
        if (atTop && !historyEnd && !loading && !loadingHistory) {
            onLoadMore();
        }
    }, [
        historyEnd,
        loading,
        loadingHistory,
        onLoadMore
    ]);
    logger.log('messageList.length=', messageList.length);
    return(// <div ref={containerRef} style={{ height: '100%', width: '100%' }}>
    /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Virtuoso */.aY, {
        ref: virtuosoRef,
        totalListHeightChanged: handleTotalListHeightChanged,
        style: {
            height: '100%',
            width: '100%'
        },
        data: messageList,
        itemContent: (index, message)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MessageItem, {
                message: message,
                currentUserId: (loginResponse === null || loginResponse === void 0 ? void 0 : loginResponse.user_id) || ''
            }),
        followOutput: "auto",
        atTopStateChange: handleAtTopStateChange,
        components: {
            EmptyPlaceholder: ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: {
                        textAlign: 'center',
                        color: '#888',
                        padding: 16
                    },
                    children: t('MessageList.noMessages')
                }),
            Header: ()=>loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: {
                        textAlign: 'center',
                        color: '#888',
                        padding: 8
                    },
                    children: t('MessageList.loadingHistory')
                }) : historyEnd ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: {
                        textAlign: 'center',
                        color: '#888',
                        padding: 8
                    },
                    children: t('MessageList.historyEnd')
                }) : null
        }
    }));
}

;// ./src/im/components/room/RoomContent2.tsx









// import {MessageVirturalList} from './MessageVirturalList'
const RoomContent2_fileLogger = new Log/* Log */.tG(false, 'im.components.room.RoomContent2');
function RoomContent2(param) {
    let { roomId } = param;
    const logger = RoomContent2_fileLogger.sub(false, 'RoomContent2');
    // logger.pause = true;
    const { t } = (0,src.useTranslation)('homepage/im/components/room/content');
    const theme = (0,useTheme/* default */.A)();
    const [showMembers, setShowMembers] = (0,react.useState)(false);
    const router = (0,next_router.useRouter)();
    const topBarRef = (0,react.useRef)(null);
    const bottomBarRef = (0,react.useRef)(null);
    const [bottomBarHeight, setBottomBarHeight] = (0,react.useState)(0);
    const [topBarHeight, setTopBarHeight] = (0,react.useState)(0);
    (0,react.useEffect)(()=>{
        if (bottomBarRef.current) {
            setBottomBarHeight(bottomBarRef.current.offsetHeight);
        }
    }, [
        bottomBarRef.current
    ]);
    (0,react.useEffect)(()=>{
        if (topBarRef.current) {
            setTopBarHeight(topBarRef.current.offsetHeight);
        }
    }, [
        topBarRef.current
    ]);
    // 滚动到底部
    const scrollToBottom = (0,react.useCallback)(()=>{
    // 由于移除了 MessageListScroller，这里暂时留空
    // 后续可以实现自定义滚动逻辑
    }, []);
    // 切换成员面板
    const toggleMembers = (0,react.useCallback)(()=>{
        setShowMembers((prev)=>!prev);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        sx: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                ref: topBarRef,
                sx: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#fff',
                    padding: '10px',
                    borderBottom: '1px solid #ccc',
                    zIndex: 1
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomHeader, {
                    roomId: roomId,
                    onToggleMembers: toggleMembers,
                    showMembers: showMembers
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    height: "calc(100vh - ".concat(topBarHeight + bottomBarHeight, "px)"),
                    marginTop: "".concat(topBarHeight, "px"),
                    overflow: 'hidden',
                    backgroundColor: '#e0e0e0'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                    sx: {
                        flex: 1,
                        padding: 2,
                        height: '100%',
                        boxSizing: 'border-box',
                        position: 'relative',
                        overflowY: 'hidden'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MessageListVirtuoso, {
                        roomId: roomId
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                ref: bottomBarRef,
                sx: {
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#fff',
                    padding: '10px',
                    borderTop: '1px solid #ccc',
                    zIndex: 1
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MessageInput, {
                    roomId: roomId
                })
            })
        ]
    });
}

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
    // return(
    //   <AppShell>
    //     <RoomContentV2 roomId={roomId as string} dispatcher={new Dispatcher()} />
    //   </AppShell>
    // )
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomContent2, {
        roomId: roomId
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomContent, {
            roomId: roomId
        })
    });
}


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
        return __webpack_require__(48959);
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
/******/ __webpack_require__.O(0, [485,5389,9842,9080,1835,8628,1236,6774,8448,8108,6186,1206,636,6593,8792], () => (__webpack_exec__(66684)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=room-f12457df96d0bfb5.js.map