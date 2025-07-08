"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7764],{

/***/ 33925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 36442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ roomSettingsService)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79059);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3103);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64125);



const fileLogger = new _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .Log */ .tG(false, 'im.client.room.roomSettingsService');
fileLogger.pause = true; // 全局 logger 默认关闭
const roomSettingsService = {
    // 检查 Matrix 客户端是否已初始化
    checkClient () {
        const client = _client__WEBPACK_IMPORTED_MODULE_0__/* .matrixClient */ .X.client;
        if (!client) {
            throw new Error('Matrix client not initialized');
        }
        return client;
    },
    // 获取房间状态事件
    async getRoomStateEvent (room, eventType) {
        let stateKey = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '';
        const logger = new _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .Log */ .tG(false, 'im.client.room.roomSettingsService.getRoomStateEvent');
        // logger.pause = true;
        try {
            var _resolvedRoom_currentState;
            // 如果 room 是 Promise，等待它解析
            const resolvedRoom = await (room instanceof Promise ? room : room);
            logger.log('Room 对象:', {
                room: resolvedRoom,
                hasCurrentState: !!(resolvedRoom === null || resolvedRoom === void 0 ? void 0 : resolvedRoom.currentState),
                hasGetState: typeof (resolvedRoom === null || resolvedRoom === void 0 ? void 0 : resolvedRoom.getState) === 'function',
                hasGetLiveTimeline: typeof (resolvedRoom === null || resolvedRoom === void 0 ? void 0 : resolvedRoom.getLiveTimeline) === 'function',
                methods: Object.keys(resolvedRoom || {}),
                prototype: resolvedRoom ? Object.getPrototypeOf(resolvedRoom) : null
            });
            if (!resolvedRoom) {
                logger.warn('Room 对象为空');
                return null;
            }
            // 使用新的 API
            if ((_resolvedRoom_currentState = resolvedRoom.currentState) === null || _resolvedRoom_currentState === void 0 ? void 0 : _resolvedRoom_currentState.getStateEvents) {
                logger.log('使用 currentState.getStateEvents');
                return resolvedRoom.currentState.getStateEvents(eventType, stateKey);
            }
            // 尝试获取状态事件的其他方法
            if (resolvedRoom.getStateEvents) {
                logger.log('使用 room.getStateEvents');
                return resolvedRoom.getStateEvents(eventType, stateKey);
            }
            if (resolvedRoom.state) {
                var _resolvedRoom_state_getStateEvents, _resolvedRoom_state, _resolvedRoom_state_events_eventType_get, _resolvedRoom_state_events_eventType, _resolvedRoom_state_events;
                logger.log('使用 room.state');
                const events = ((_resolvedRoom_state_getStateEvents = (_resolvedRoom_state = resolvedRoom.state).getStateEvents) === null || _resolvedRoom_state_getStateEvents === void 0 ? void 0 : _resolvedRoom_state_getStateEvents.call(_resolvedRoom_state, eventType, stateKey)) || ((_resolvedRoom_state_events = resolvedRoom.state.events) === null || _resolvedRoom_state_events === void 0 ? void 0 : (_resolvedRoom_state_events_eventType = _resolvedRoom_state_events[eventType]) === null || _resolvedRoom_state_events_eventType === void 0 ? void 0 : (_resolvedRoom_state_events_eventType_get = _resolvedRoom_state_events_eventType.get) === null || _resolvedRoom_state_events_eventType_get === void 0 ? void 0 : _resolvedRoom_state_events_eventType_get.call(_resolvedRoom_state_events_eventType, stateKey));
                if (events) return events;
            }
            logger.warn('无法获取房间状态事件，返回 null');
            return null;
        } catch (error) {
            logger.error('获取房间状态事件失败:', error);
            return null;
        }
    },
    // 检查权限
    async hasPermission (roomId, action) {
        // 不打印
        return (async ()=>{
            try {
                var _powerLevels_users;
                const client = this.checkClient();
                const powerLevels = await client.getStateEvent(roomId, 'm.room.power_levels', '');
                const userId = await client.getUserId();
                var _powerLevels_users_userId, _ref, _powerLevels_users_default;
                const userLevel = userId ? (_ref = (_powerLevels_users_userId = (_powerLevels_users = powerLevels.users) === null || _powerLevels_users === void 0 ? void 0 : _powerLevels_users[userId]) !== null && _powerLevels_users_userId !== void 0 ? _powerLevels_users_userId : powerLevels.users_default) !== null && _ref !== void 0 ? _ref : 0 : (_powerLevels_users_default = powerLevels.users_default) !== null && _powerLevels_users_default !== void 0 ? _powerLevels_users_default : 0;
                const requiredLevel = powerLevels.state_default || 50;
                return userLevel >= requiredLevel;
            } catch  {
                return false;
            }
        })();
    },
    // 基础设置
    async updateRoomName (roomId, name) {
        // 不打印
        const client = this.checkClient();
        await client.setRoomName(roomId, name);
    },
    async updateRoomAvatar (roomId, avatarUrl) {
        // 不打印
        if (!await this.hasPermission(roomId, 'state_default')) {
            throw new Error('没有修改房间头像的权限');
        }
        const client = this.checkClient();
        const content = {
            url: avatarUrl
        };
        await client.sendStateEvent(roomId, 'm.room.avatar', content, '');
        const roomInfo = _data__WEBPACK_IMPORTED_MODULE_1__/* .roomData */ .S.joinedRooms.find((r)=>r.roomId === roomId);
        if (roomInfo) {
            roomInfo.avatarUrl = avatarUrl;
        }
    },
    async updateRoomTopic (roomId, topic) {
        // 不打印
        if (!await this.hasPermission(roomId, 'state_default')) {
            throw new Error('没有修改房间简介的权限');
        }
        const client = this.checkClient();
        await client.setRoomTopic(roomId, topic);
    },
    // 权限管理
    async updateRoomPermissions (roomId, permissions) {
        var _powerLevels_events;
        // 不打印
        if (!await this.hasPermission(roomId, 'state_default')) {
            throw new Error('没有修改房间权限的权限');
        }
        const client = this.checkClient();
        const powerLevels = await client.getStateEvent(roomId, 'm.room.power_levels', '');
        var _permissions_sendMessages, _ref, _permissions_invite, _ref1, _permissions_kick, _ref2, _permissions_ban, _ref3, _permissions_roomSettings, _ref4;
        const newContent = {
            ...powerLevels,
            events: {
                ...powerLevels.events,
                'm.room.message': (_ref = (_permissions_sendMessages = permissions.sendMessages) !== null && _permissions_sendMessages !== void 0 ? _permissions_sendMessages : (_powerLevels_events = powerLevels.events) === null || _powerLevels_events === void 0 ? void 0 : _powerLevels_events['m.room.message']) !== null && _ref !== void 0 ? _ref : 0
            },
            invite: (_ref1 = (_permissions_invite = permissions.invite) !== null && _permissions_invite !== void 0 ? _permissions_invite : powerLevels.invite) !== null && _ref1 !== void 0 ? _ref1 : 50,
            kick: (_ref2 = (_permissions_kick = permissions.kick) !== null && _permissions_kick !== void 0 ? _permissions_kick : powerLevels.kick) !== null && _ref2 !== void 0 ? _ref2 : 50,
            ban: (_ref3 = (_permissions_ban = permissions.ban) !== null && _permissions_ban !== void 0 ? _permissions_ban : powerLevels.ban) !== null && _ref3 !== void 0 ? _ref3 : 50,
            state_default: (_ref4 = (_permissions_roomSettings = permissions.roomSettings) !== null && _permissions_roomSettings !== void 0 ? _permissions_roomSettings : powerLevels.state_default) !== null && _ref4 !== void 0 ? _ref4 : 50
        };
        await client.sendStateEvent(roomId, 'm.room.power_levels', newContent, '');
    },
    // 成员管理
    async kickMember (roomId, userId, reason) {
        if (!await this.hasPermission(roomId, 'kick')) {
            throw new Error('没有踢出成员的权限');
        }
        await _client__WEBPACK_IMPORTED_MODULE_0__/* .matrixClient */ .X.client.kick(roomId, userId, reason);
    },
    async banMember (roomId, userId, reason) {
        if (!await this.hasPermission(roomId, 'ban')) {
            throw new Error('没有封禁成员的权限');
        }
        await _client__WEBPACK_IMPORTED_MODULE_0__/* .matrixClient */ .X.client.ban(roomId, userId, reason);
    },
    async unbanMember (roomId, userId) {
        if (!await this.hasPermission(roomId, 'ban')) {
            throw new Error('没有解除封禁的权限');
        }
        await _client__WEBPACK_IMPORTED_MODULE_0__/* .matrixClient */ .X.client.unban(roomId, userId);
    },
    // 隐私设置
    async updateRoomVisibility (roomId, isPublic) {
        // 不打印
        const client = this.checkClient();
        const visibility = isPublic ? 'public' : 'private';
        await client.setRoomDirectoryVisibility(roomId, visibility);
    },
    async updateGuestAccess (roomId, allowGuests) {
        // 不打印
        if (!await this.hasPermission(roomId, 'state_default')) {
            throw new Error('没有修改访客权限的权限');
        }
        const client = this.checkClient();
        const content = {
            guest_access: allowGuests ? 'can_join' : 'forbidden'
        };
        await client.sendStateEvent(roomId, 'm.room.guest_access', content, '');
    },
    async updateEncryption (roomId, enable) {
        // 不打印
        if (!await this.hasPermission(roomId, 'state_default')) {
            throw new Error('没有修改加密设置的权限');
        }
        const client = this.checkClient();
        if (enable) {
            const content = {
                algorithm: 'm.megolm.v1.aes-sha2'
            };
            await client.sendStateEvent(roomId, 'm.room.encryption', content, '');
        }
    },
    // 获取当前设置
    async getRoomSettings (roomId) {
        const logger = new _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .Log */ .tG(false, 'im.client.room.roomSettingsService.getRoomSettings');
        logger.pause = false; // 只打印 getRoomSettings 入口
        logger.log('获取房间设置:', roomId);
        try {
            const client = this.checkClient();
            const room = await client.getRoom(roomId);
            if (!room) {
                throw new Error('房间不存在');
            }
            // 获取房间名
            const name = room.name;
            // 获取房间主题
            let topic = null;
            logger.log('即将请求 m.room.topic');
            try {
                const topicEvent = await client.getStateEvent(roomId, 'm.room.topic', '');
                var _topicEvent_topic;
                topic = (_topicEvent_topic = topicEvent === null || topicEvent === void 0 ? void 0 : topicEvent.topic) !== null && _topicEvent_topic !== void 0 ? _topicEvent_topic : null;
                logger.log('m.room.topic 返回:', topic);
            } catch  {}
            // 获取权限
            let powerLevels = {};
            logger.log('即将请求 m.room.power_levels');
            try {
                powerLevels = await client.getStateEvent(roomId, 'm.room.power_levels', '');
                logger.log('m.room.power_levels 返回:', powerLevels);
            } catch  {}
            // 获取隐私
            let isEncrypted = false;
            let allowGuestJoin = false;
            let isPublic = false;
            logger.log('即将请求 m.room.encryption');
            try {
                const encryption = await client.getStateEvent(roomId, 'm.room.encryption', '');
                isEncrypted = !!encryption;
                logger.log('m.room.encryption 返回:', encryption);
            } catch  {}
            logger.log('即将请求 m.room.guest_access');
            try {
                const guestAccess = await client.getStateEvent(roomId, 'm.room.guest_access', '');
                allowGuestJoin = (guestAccess === null || guestAccess === void 0 ? void 0 : guestAccess.guest_access) === 'can_join';
                logger.log('m.room.guest_access 返回:', guestAccess);
            } catch  {}
            try {
                var _room_getJoinRule;
                isPublic = ((_room_getJoinRule = room.getJoinRule) === null || _room_getJoinRule === void 0 ? void 0 : _room_getJoinRule.call(room)) === 'public';
            } catch  {}
            // 获取头像
            let avatarUrl = null;
            try {
                var _room_getAvatarUrl;
                avatarUrl = ((_room_getAvatarUrl = room.getAvatarUrl) === null || _room_getAvatarUrl === void 0 ? void 0 : _room_getAvatarUrl.call(room, client.baseUrl, 96, 96, 'crop')) || null;
            } catch  {}
            const settings = {
                name,
                topic: topic !== null && topic !== void 0 ? topic : '',
                avatarUrl,
                permissions: {
                    sendMessages: powerLevels.events_default || 0,
                    invite: powerLevels.invite || 50,
                    kick: powerLevels.kick || 50,
                    ban: powerLevels.ban || 50,
                    roomSettings: powerLevels.state_default || 50
                },
                privacy: {
                    isPublic,
                    isEncrypted,
                    allowGuestJoin
                }
            };
            logger.log('获取到的房间设置:', settings);
            logger.pause = true; // 打印完毕后关闭
            return settings;
        } catch (error) {
            logger.error('获取房间设置失败:', error);
            throw error;
        }
    }
};


/***/ }),

/***/ 61840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

}]);
//# sourceMappingURL=7764-bd98fbc38f1721dd.js.map