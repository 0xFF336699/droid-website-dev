(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2400],{

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

/***/ 67568:
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(20532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(58932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(8176);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(2621);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Tabs/Tabs.js + 5 modules
var Tabs = __webpack_require__(86326);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(73409);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(58448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(59939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(53853);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/PhotoCamera.js
var PhotoCamera = __webpack_require__(12485);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/log/Log.js + 1 modules
var Log = __webpack_require__(9350);
// EXTERNAL MODULE: ./src/im/client/client.ts + 1 modules
var client_client = __webpack_require__(39736);
// EXTERNAL MODULE: ./src/im/client/room/data.ts
var data = __webpack_require__(79409);
;// ./src/im/client/room/roomSettingsService.ts



const fileLogger = new Log/* Log */.tG(false, 'im.client.room.roomSettingsService');
fileLogger.pause = true; // 全局 logger 默认关闭
const roomSettingsService = {
    // 检查 Matrix 客户端是否已初始化
    checkClient () {
        const client = client_client/* matrixClient */.X.client;
        if (!client) {
            throw new Error('Matrix client not initialized');
        }
        return client;
    },
    // 获取房间状态事件
    async getRoomStateEvent (room, eventType) {
        let stateKey = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '';
        const logger = new Log/* Log */.tG(false, 'im.client.room.roomSettingsService.getRoomStateEvent');
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
        const roomInfo = data/* roomData */.S.joinedRooms.find((r)=>r.roomId === roomId);
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
        await client_client/* matrixClient */.X.client.kick(roomId, userId, reason);
    },
    async banMember (roomId, userId, reason) {
        if (!await this.hasPermission(roomId, 'ban')) {
            throw new Error('没有封禁成员的权限');
        }
        await client_client/* matrixClient */.X.client.ban(roomId, userId, reason);
    },
    async unbanMember (roomId, userId) {
        if (!await this.hasPermission(roomId, 'ban')) {
            throw new Error('没有解除封禁的权限');
        }
        await client_client/* matrixClient */.X.client.unban(roomId, userId);
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
        const logger = new Log/* Log */.tG(false, 'im.client.room.roomSettingsService.getRoomSettings');
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(91412);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useProxyWatch.js
var useProxyWatch = __webpack_require__(82916);
;// ./src/im/components/room-settings/BasicSettings.tsx










const BasicSettings_fileLogger = new Log/* Log */.tG(false, 'im.components.room-settings.BasicSettings');
BasicSettings_fileLogger.childrenPaused = true;
BasicSettings_fileLogger.pause = true;
const BasicSettings = (param)=>{
    let { roomId, settings, onChange } = param;
    var _roomData_roomSettings_settings_roomId, _roomData_roomSettings_settings_roomId1;
    const logger = BasicSettings_fileLogger.sub(false, 'BasicSettings');
    // logger.pause = true;
    logger.log('props=', {
        roomId,
        settings,
        onChange
    });
    const { t } = (0,src.useTranslation)('homepage/im/components/room-settings/content');
    // 直接 watch proxy 字段
    const [name] = (0,useProxyWatch/* useProxyWatch */.x)(data/* roomData */.S.roomSettings.settings, [
        roomId,
        'name'
    ], ((_roomData_roomSettings_settings_roomId = data/* roomData */.S.roomSettings.settings[roomId]) === null || _roomData_roomSettings_settings_roomId === void 0 ? void 0 : _roomData_roomSettings_settings_roomId.name) || '');
    // const [name] = useProxyWatch(settings||{}, ['name'], settings?.name || '');
    const [topic] = (0,useProxyWatch/* useProxyWatch */.x)(data/* roomData */.S.roomSettings.settings, [
        roomId,
        'topic'
    ], ((_roomData_roomSettings_settings_roomId1 = data/* roomData */.S.roomSettings.settings[roomId]) === null || _roomData_roomSettings_settings_roomId1 === void 0 ? void 0 : _roomData_roomSettings_settings_roomId1.topic) || '');
    logger.log('name=', name);
    logger.log('topic=', topic);
    const [loading, setLoading] = (0,react.useState)(false);
    // 本地编辑缓存
    const [editData, setEditData] = (0,react.useState)(null);
    // 提交时优先用本地缓存，否则用 proxy
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            const newName = editData ? editData.name : name;
            const newTopic = editData ? editData.topic : topic;
            if (newName !== name) {
                await roomSettingsService.updateRoomName(roomId, newName);
            }
            if (newTopic !== topic) {
                await roomSettingsService.updateRoomTopic(roomId, newTopic);
            }
            client_client/* matrixClient */.X.clientOnEventDispatcher.emit('room.update', roomId);
            dist/* default */.Ay.success(t('BasicSettings.toast.success'));
            setEditData(null); // 提交后清空本地缓存
            onChange();
        } catch (error) {
            dist/* default */.Ay.error(error.message || t('BasicSettings.toast.error.default'));
        } finally{
            setLoading(false);
        }
    };
    const handleAvatarUpload = async (event)=>{
        var _event_target_files;
        const file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];
        if (!file) return;
        try {
            setLoading(true);
            // 这里需要实现文件上传到 Matrix 媒体服务器的逻辑
            // const mxcUrl = await uploadToMatrixMediaServer(file);
            // await roomSettingsService.updateRoomAvatar(roomId, mxcUrl);
            client_client/* matrixClient */.X.clientOnEventDispatcher.emit('room.update', roomId);
            dist/* default */.Ay.success(t('BasicSettings.toast.success'));
            onChange();
        } catch (error) {
            dist/* default */.Ay.error(error.message || t('BasicSettings.toast.error.avatar'));
        } finally{
            setLoading(false);
        }
    };
    // 编辑时用本地缓存，否则用 proxy
    const getValue = (key)=>{
        if (editData) return editData[key];
        return key === 'name' ? name : topic;
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setEditData((prev)=>({
                ...prev || {
                    name,
                    topic
                },
                [name]: value
            }));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        component: "form",
        onSubmit: handleSubmit,
        sx: {
            '& > *': {
                mb: 2
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                fullWidth: true,
                required: true,
                label: t('BasicSettings.form.name.label'),
                name: "name",
                value: getValue('name'),
                onChange: handleChange,
                disabled: loading
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    my: 2
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                        accept: "image/*",
                        style: {
                            display: 'none'
                        },
                        id: "avatar-upload",
                        type: "file",
                        onChange: handleAvatarUpload,
                        disabled: loading
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                        htmlFor: "avatar-upload",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                            color: "primary",
                            component: "span",
                            disabled: loading,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PhotoCamera/* default */.A, {})
                        })
                    }),
                    (settings === null || settings === void 0 ? void 0 : settings.avatarUrl) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                        component: "img",
                        src: settings.avatarUrl,
                        alt: t('BasicSettings.form.avatar.alt'),
                        sx: {
                            width: 64,
                            height: 64,
                            borderRadius: 1
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                fullWidth: true,
                multiline: true,
                rows: 4,
                label: t('BasicSettings.form.topic.label'),
                name: "topic",
                value: getValue('topic'),
                onChange: handleChange,
                disabled: loading
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                type: "submit",
                variant: "contained",
                disabled: loading,
                sx: {
                    mt: 2
                },
                children: t('BasicSettings.form.submit')
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Tooltip/Tooltip.js + 58 modules
var Tooltip = __webpack_require__(76820);
;// ./src/im/components/room-settings/PermissionSettings.tsx






const PermissionSettings = (param)=>{
    let { roomId, settings, onChange } = param;
    var _settings_permissions, _settings_permissions1, _settings_permissions2, _settings_permissions3, _settings_permissions4;
    const { t } = (0,src.useTranslation)('homepage/im/components/room-settings/content');
    const [loading, setLoading] = (0,react.useState)(false);
    var _settings_permissions_sendMessages, _settings_permissions_invite, _settings_permissions_kick, _settings_permissions_ban, _settings_permissions_roomSettings;
    const [formData, setFormData] = (0,react.useState)({
        sendMessages: (_settings_permissions_sendMessages = settings === null || settings === void 0 ? void 0 : (_settings_permissions = settings.permissions) === null || _settings_permissions === void 0 ? void 0 : _settings_permissions.sendMessages) !== null && _settings_permissions_sendMessages !== void 0 ? _settings_permissions_sendMessages : 0,
        invite: (_settings_permissions_invite = settings === null || settings === void 0 ? void 0 : (_settings_permissions1 = settings.permissions) === null || _settings_permissions1 === void 0 ? void 0 : _settings_permissions1.invite) !== null && _settings_permissions_invite !== void 0 ? _settings_permissions_invite : 50,
        kick: (_settings_permissions_kick = settings === null || settings === void 0 ? void 0 : (_settings_permissions2 = settings.permissions) === null || _settings_permissions2 === void 0 ? void 0 : _settings_permissions2.kick) !== null && _settings_permissions_kick !== void 0 ? _settings_permissions_kick : 50,
        ban: (_settings_permissions_ban = settings === null || settings === void 0 ? void 0 : (_settings_permissions3 = settings.permissions) === null || _settings_permissions3 === void 0 ? void 0 : _settings_permissions3.ban) !== null && _settings_permissions_ban !== void 0 ? _settings_permissions_ban : 50,
        roomSettings: (_settings_permissions_roomSettings = settings === null || settings === void 0 ? void 0 : (_settings_permissions4 = settings.permissions) === null || _settings_permissions4 === void 0 ? void 0 : _settings_permissions4.roomSettings) !== null && _settings_permissions_roomSettings !== void 0 ? _settings_permissions_roomSettings : 50
    });
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            await roomSettingsService.updateRoomPermissions(roomId, formData);
            dist/* default */.Ay.success(t('PermissionSettings.toast.success'));
            onChange();
        } catch (error) {
            dist/* default */.Ay.error(error.message || t('PermissionSettings.toast.error'));
        } finally{
            setLoading(false);
        }
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: Number(value)
            }));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        component: "form",
        onSubmit: handleSubmit,
        sx: {
            '& > *': {
                mb: 2
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                title: t('PermissionSettings.form.sendMessages.tooltip'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    fullWidth: true,
                    type: "number",
                    label: t('PermissionSettings.form.sendMessages.label'),
                    name: "sendMessages",
                    value: formData.sendMessages,
                    onChange: handleChange,
                    disabled: loading,
                    InputProps: {
                        inputProps: {
                            min: 0,
                            max: 100
                        }
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                title: t('PermissionSettings.form.invite.tooltip'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    fullWidth: true,
                    type: "number",
                    label: t('PermissionSettings.form.invite.label'),
                    name: "invite",
                    value: formData.invite,
                    onChange: handleChange,
                    disabled: loading,
                    InputProps: {
                        inputProps: {
                            min: 0,
                            max: 100
                        }
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                title: t('PermissionSettings.form.kick.tooltip'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    fullWidth: true,
                    type: "number",
                    label: t('PermissionSettings.form.kick.label'),
                    name: "kick",
                    value: formData.kick,
                    onChange: handleChange,
                    disabled: loading,
                    InputProps: {
                        inputProps: {
                            min: 0,
                            max: 100
                        }
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                title: t('PermissionSettings.form.ban.tooltip'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    fullWidth: true,
                    type: "number",
                    label: t('PermissionSettings.form.ban.label'),
                    name: "ban",
                    value: formData.ban,
                    onChange: handleChange,
                    disabled: loading,
                    InputProps: {
                        inputProps: {
                            min: 0,
                            max: 100
                        }
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                title: t('PermissionSettings.form.roomSettings.tooltip'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    fullWidth: true,
                    type: "number",
                    label: t('PermissionSettings.form.roomSettings.label'),
                    name: "roomSettings",
                    value: formData.roomSettings,
                    onChange: handleChange,
                    disabled: loading,
                    InputProps: {
                        inputProps: {
                            min: 0,
                            max: 100
                        }
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                variant: "caption",
                color: "text.secondary",
                sx: {
                    display: 'block',
                    mb: 2
                },
                children: t('PermissionSettings.description')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                type: "submit",
                variant: "contained",
                disabled: loading,
                children: t('PermissionSettings.form.submit')
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(8771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(18009);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(40743);
;// ./src/im/components/room-settings/PrivacySettings.tsx






const PrivacySettings = (param)=>{
    let { roomId, settings, onChange } = param;
    var _settings_privacy, _settings_privacy1, _settings_privacy2, _settings_privacy3, _settings_privacy4;
    const { t } = (0,src.useTranslation)('homepage/im/components/room-settings/content');
    const [loading, setLoading] = (0,react.useState)(false);
    var _settings_privacy_isPublic, _settings_privacy_isEncrypted, _settings_privacy_allowGuestJoin;
    const [formData, setFormData] = (0,react.useState)({
        isPublic: (_settings_privacy_isPublic = settings === null || settings === void 0 ? void 0 : (_settings_privacy = settings.privacy) === null || _settings_privacy === void 0 ? void 0 : _settings_privacy.isPublic) !== null && _settings_privacy_isPublic !== void 0 ? _settings_privacy_isPublic : false,
        isEncrypted: (_settings_privacy_isEncrypted = settings === null || settings === void 0 ? void 0 : (_settings_privacy1 = settings.privacy) === null || _settings_privacy1 === void 0 ? void 0 : _settings_privacy1.isEncrypted) !== null && _settings_privacy_isEncrypted !== void 0 ? _settings_privacy_isEncrypted : false,
        allowGuestJoin: (_settings_privacy_allowGuestJoin = settings === null || settings === void 0 ? void 0 : (_settings_privacy2 = settings.privacy) === null || _settings_privacy2 === void 0 ? void 0 : _settings_privacy2.allowGuestJoin) !== null && _settings_privacy_allowGuestJoin !== void 0 ? _settings_privacy_allowGuestJoin : false
    });
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            // 更新房间可见性
            if (formData.isPublic !== (settings === null || settings === void 0 ? void 0 : settings.privacy.isPublic)) {
                await roomSettingsService.updateRoomVisibility(roomId, formData.isPublic);
            }
            // 更新访客访问权限
            if (formData.allowGuestJoin !== (settings === null || settings === void 0 ? void 0 : settings.privacy.allowGuestJoin)) {
                await roomSettingsService.updateGuestAccess(roomId, formData.allowGuestJoin);
            }
            // 更新加密设置
            if (formData.isEncrypted && !(settings === null || settings === void 0 ? void 0 : settings.privacy.isEncrypted)) {
                await roomSettingsService.updateEncryption(roomId, true);
            }
            dist/* default */.Ay.success(t('PrivacySettings.toast.success'));
            onChange();
        } catch (error) {
            dist/* default */.Ay.error(error.message || t('PrivacySettings.toast.error'));
        } finally{
            setLoading(false);
        }
    };
    const handleChange = (event)=>{
        const { name, checked } = event.target;
        setFormData((prev)=>({
                ...prev,
                [name]: checked
            }));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        component: "form",
        onSubmit: handleSubmit,
        sx: {
            '& > *': {
                mb: 2
            }
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                    checked: formData.isPublic,
                    onChange: handleChange,
                    name: "isPublic",
                    disabled: loading
                }),
                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            children: t('PrivacySettings.form.isPublic.label')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "caption",
                            color: "text.secondary",
                            children: t('PrivacySettings.form.isPublic.description')
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                    checked: formData.allowGuestJoin,
                    onChange: handleChange,
                    name: "allowGuestJoin",
                    disabled: loading
                }),
                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            children: t('PrivacySettings.form.allowGuestJoin.label')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "caption",
                            color: "text.secondary",
                            children: t('PrivacySettings.form.allowGuestJoin.description')
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                    checked: formData.isEncrypted,
                    onChange: handleChange,
                    name: "isEncrypted",
                    disabled: loading || (settings === null || settings === void 0 ? void 0 : (_settings_privacy3 = settings.privacy) === null || _settings_privacy3 === void 0 ? void 0 : _settings_privacy3.isEncrypted)
                }),
                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            children: t('PrivacySettings.form.isEncrypted.label')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "caption",
                            color: "text.secondary",
                            children: t('PrivacySettings.form.isEncrypted.description')
                        })
                    ]
                })
            }),
            (settings === null || settings === void 0 ? void 0 : (_settings_privacy4 = settings.privacy) === null || _settings_privacy4 === void 0 ? void 0 : _settings_privacy4.isEncrypted) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "info",
                sx: {
                    mb: 2
                },
                children: t('PrivacySettings.form.isEncrypted.alert')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                type: "submit",
                variant: "contained",
                disabled: loading,
                children: t('PrivacySettings.form.submit')
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(91460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(19637);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(32382);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(31826);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(99343);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Table/Table.js + 1 modules
var Table = __webpack_require__(46942);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(2647);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(31605);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(9520);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(2406);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/TablePagination/TablePagination.js + 4 modules
var TablePagination = __webpack_require__(98917);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Snackbar/Snackbar.js + 4 modules
var Snackbar = __webpack_require__(31502);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/Search.js
var Search = __webpack_require__(89598);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/PersonRemove.js
var PersonRemove = __webpack_require__(91199);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/Block.js
var Block = __webpack_require__(25467);
// EXTERNAL MODULE: ./src/im/client/room/roomService.ts + 1 modules
var roomService = __webpack_require__(6691);
// EXTERNAL MODULE: ./src/im/client/invite.ts
var invite = __webpack_require__(83446);
;// ./src/im/components/room-settings/MemberManagement.tsx









const ConfirmDialog = (param)=>{
    let { open, title, content, onConfirm, onCancel } = param;
    const { t } = (0,src.useTranslation)('homepage/im/components/room-settings/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
        open: open,
        onClose: onCancel,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                children: content
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: onCancel,
                        children: t('MemberManagement.confirmDialog.buttons.cancel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: onConfirm,
                        color: "error",
                        children: t('MemberManagement.confirmDialog.buttons.confirm')
                    })
                ]
            })
        ]
    });
};
const MemberManagement = (param)=>{
    let { roomId, settings, onChange } = param;
    const { t } = (0,src.useTranslation)('homepage/im/components/room-settings/content');
    const [loading, setLoading] = (0,react.useState)(false);
    const [members, setMembers] = (0,react.useState)([]);
    const [searchText, setSearchText] = (0,react.useState)('');
    const [message, setMessage] = (0,react.useState)(null);
    const [confirmDialog, setConfirmDialog] = (0,react.useState)({
        open: false,
        title: '',
        content: '',
        onConfirm: ()=>{}
    });
    const [page, setPage] = (0,react.useState)(0);
    const [rowsPerPage, setRowsPerPage] = (0,react.useState)(10);
    const [inviteDialogOpen, setInviteDialogOpen] = (0,react.useState)(false);
    const [inviteUserId, setInviteUserId] = (0,react.useState)('');
    const [inviteLoading, setInviteLoading] = (0,react.useState)(false);
    const [inviteError, setInviteError] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        loadMembers();
    }, [
        roomId
    ]);
    const loadMembers = async ()=>{
        try {
            setLoading(true);
            const roomMembers = await roomService/* roomService */.P.getRoomMembers(roomId);
            setMembers(roomMembers);
        } catch (error) {
            console.error('加载成员列表失败:', error);
            dist/* default */.Ay.error(t('MemberManagement.toast.loadError'));
        } finally{
            setLoading(false);
        }
    };
    const handleKickMember = (userId)=>{
        setConfirmDialog({
            open: true,
            title: t('MemberManagement.confirmDialog.kick.title'),
            content: t('MemberManagement.confirmDialog.kick.content'),
            onConfirm: async ()=>{
                try {
                    await roomSettingsService.kickMember(roomId, userId);
                    dist/* default */.Ay.success(t('MemberManagement.toast.kick.success'));
                    loadMembers();
                    onChange();
                } catch (error) {
                    dist/* default */.Ay.error(error.message || t('MemberManagement.toast.kick.error'));
                }
                setConfirmDialog((prev)=>({
                        ...prev,
                        open: false
                    }));
            }
        });
    };
    const handleBanMember = (userId)=>{
        setConfirmDialog({
            open: true,
            title: t('MemberManagement.confirmDialog.ban.title'),
            content: t('MemberManagement.confirmDialog.ban.content'),
            onConfirm: async ()=>{
                try {
                    await roomSettingsService.banMember(roomId, userId);
                    dist/* default */.Ay.success(t('MemberManagement.toast.ban.success'));
                    loadMembers();
                    onChange();
                } catch (error) {
                    dist/* default */.Ay.error(error.message || t('MemberManagement.toast.ban.error'));
                }
                setConfirmDialog((prev)=>({
                        ...prev,
                        open: false
                    }));
            }
        });
    };
    const handleInvite = async ()=>{
        setInviteLoading(true);
        setInviteError(null);
        try {
            const result = await invite/* matrixInivte */.f.inviteToRoom(roomId, inviteUserId.trim());
            if (result.success) {
                dist/* default */.Ay.success(t('MemberManagement.invite.success'));
                setInviteDialogOpen(false);
                setInviteUserId('');
                loadMembers();
                onChange();
            } else {
                setInviteError(result.error || t('MemberManagement.invite.error'));
            }
        } catch (e) {
            setInviteError(e.message || t('MemberManagement.invite.error'));
        } finally{
            setInviteLoading(false);
        }
    };
    const filteredMembers = members.filter((member)=>{
        var _member_displayName;
        return ((_member_displayName = member.displayName) === null || _member_displayName === void 0 ? void 0 : _member_displayName.toLowerCase().includes(searchText.toLowerCase())) || member.userId.toLowerCase().includes(searchText.toLowerCase());
    });
    const handleChangePage = (event, newPage)=>{
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event)=>{
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                        size: "small",
                        placeholder: t('MemberManagement.search.placeholder'),
                        value: searchText,
                        onChange: (e)=>setSearchText(e.target.value),
                        sx: {
                            width: 300
                        },
                        InputProps: {
                            startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Search/* default */.A, {
                                color: "action",
                                sx: {
                                    mr: 1
                                }
                            })
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        variant: "contained",
                        sx: {
                            ml: 2
                        },
                        onClick: ()=>setInviteDialogOpen(true),
                        children: t('MemberManagement.invite.button')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableContainer/* default */.A, {
                component: Paper/* default */.A,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.A, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                            children: t('MemberManagement.table.columns.name')
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                            children: t('MemberManagement.table.columns.userId')
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                            align: "right",
                                            children: t('MemberManagement.table.columns.actions')
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.A, {
                                children: filteredMembers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((member)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.A, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                                                    sx: {
                                                        display: 'flex',
                                                        alignItems: 'center'
                                                    },
                                                    children: [
                                                        member.avatarUrl && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                                            component: "img",
                                                            src: member.avatarUrl,
                                                            alt: t('MemberManagement.table.avatar.alt'),
                                                            sx: {
                                                                width: 24,
                                                                height: 24,
                                                                borderRadius: '50%',
                                                                mr: 1
                                                            }
                                                        }),
                                                        member.displayName || member.userId
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.A, {
                                                children: member.userId
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.A, {
                                                align: "right",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                                        size: "small",
                                                        onClick: ()=>handleKickMember(member.userId),
                                                        title: t('MemberManagement.table.actions.kick'),
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonRemove/* default */.A, {})
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                                        size: "small",
                                                        onClick: ()=>handleBanMember(member.userId),
                                                        title: t('MemberManagement.table.actions.ban'),
                                                        color: "error",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Block/* default */.A, {})
                                                    })
                                                ]
                                            })
                                        ]
                                    }, member.userId))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TablePagination/* default */.A, {
                        rowsPerPageOptions: [
                            10,
                            25,
                            50
                        ],
                        component: "div",
                        count: filteredMembers.length,
                        rowsPerPage: rowsPerPage,
                        page: page,
                        onPageChange: handleChangePage,
                        onRowsPerPageChange: handleChangeRowsPerPage,
                        labelRowsPerPage: t('MemberManagement.table.pagination.rowsPerPage')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialog, {
                open: confirmDialog.open,
                title: confirmDialog.title,
                content: confirmDialog.content,
                onConfirm: confirmDialog.onConfirm,
                onCancel: ()=>setConfirmDialog((prev)=>({
                            ...prev,
                            open: false
                        }))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Snackbar/* default */.A, {
                open: !!message,
                autoHideDuration: 6000,
                onClose: ()=>setMessage(null),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                    onClose: ()=>setMessage(null),
                    severity: message === null || message === void 0 ? void 0 : message.type,
                    sx: {
                        width: '100%'
                    },
                    children: message === null || message === void 0 ? void 0 : message.text
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: inviteDialogOpen,
                onClose: ()=>setInviteDialogOpen(false),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        children: t('MemberManagement.invite.title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                autoFocus: true,
                                margin: "dense",
                                label: t('MemberManagement.invite.inputLabel'),
                                fullWidth: true,
                                value: inviteUserId,
                                onChange: (e)=>setInviteUserId(e.target.value),
                                disabled: inviteLoading
                            }),
                            inviteError && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                                severity: "error",
                                sx: {
                                    mt: 2
                                },
                                children: inviteError
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: ()=>setInviteDialogOpen(false),
                                disabled: inviteLoading,
                                children: t('MemberManagement.invite.cancel')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: handleInvite,
                                disabled: inviteLoading || !inviteUserId.trim(),
                                variant: "contained",
                                children: inviteLoading ? t('MemberManagement.invite.loading') : t('MemberManagement.invite.confirm')
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// ./src/im/components/room-settings/RoomSettingsContent.tsx










function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        role: "tabpanel",
        hidden: value !== index,
        id: "room-settings-tabpanel-".concat(index),
        "aria-labelledby": "room-settings-tab-".concat(index),
        ...other,
        children: value === index && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                p: 3
            },
            children: children
        })
    });
}
const RoomSettingsContent = (param)=>{
    let { roomId } = param;
    const { t } = (0,src.useTranslation)('homepage/im/components/room-settings/content');
    const [tabValue, setTabValue] = (0,react.useState)(0);
    // 监听房间设置数据和加载状态
    const [currentSettings] = (0,useProxyWatch/* useProxyWatch */.x)(data/* roomData */.S.roomSettings.settings, [
        roomId
    ], data/* roomData */.S.roomSettings.settings[roomId]);
    const [loading] = (0,useProxyWatch/* useProxyWatch */.x)(data/* roomData */.S.roomSettings.isLoading, [
        roomId
    ], data/* roomData */.S.roomSettings.isLoading[roomId]);
    console.log('currentSettings=', currentSettings);
    console.log('loading=', loading);
    console.log('roomId=', roomId);
    const handleTabChange = (event, newValue)=>{
        setTabValue(newValue);
    };
    // 添加设置变更处理函数
    const handleSettingsChange = ()=>{
    // 这里可以添加一些 UI 相关的更新逻辑
    // 数据已经通过 roomData 和事件系统更新了
    // 但可能需要触发一些 UI 刷新或其他操作
    };
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            sx: {
                display: 'flex',
                justifyContent: 'center',
                mt: 4
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {})
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            maxWidth: 'md',
            mx: 'auto',
            mt: 4,
            px: 2
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.A, {
            elevation: 0,
            sx: {
                mb: 3
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                    variant: "h5",
                    component: "h2",
                    gutterBottom: true,
                    children: t('RoomSettingsContent.title')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    sx: {
                        borderBottom: 1,
                        borderColor: 'divider'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
                        value: tabValue,
                        onChange: handleTabChange,
                        variant: "scrollable",
                        scrollButtons: "auto",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.A, {
                                label: t('RoomSettingsContent.tabs.basic')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.A, {
                                label: t('RoomSettingsContent.tabs.permission')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.A, {
                                label: t('RoomSettingsContent.tabs.privacy')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.A, {
                                label: t('RoomSettingsContent.tabs.member')
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel, {
                    value: tabValue,
                    index: 0,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BasicSettings, {
                        roomId: roomId,
                        settings: currentSettings,
                        onChange: handleSettingsChange
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel, {
                    value: tabValue,
                    index: 1,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionSettings, {
                        roomId: roomId,
                        settings: currentSettings,
                        onChange: handleSettingsChange
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel, {
                    value: tabValue,
                    index: 2,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PrivacySettings, {
                        roomId: roomId,
                        settings: currentSettings,
                        onChange: handleSettingsChange
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel, {
                    value: tabValue,
                    index: 3,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MemberManagement, {
                        roomId: roomId,
                        settings: currentSettings,
                        onChange: handleSettingsChange
                    })
                })
            ]
        })
    });
};

;// ./src/pages/im/room/room-settings/index.tsx






function RoomPage() {
    const { t } = (0,src.useTranslation)("homepage/pages/im/room/room-settings/content");
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: t("content.title"),
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RoomSettingsContent, {
                roomId: roomId
            })
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

/***/ 82308:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/im/room/room-settings",
      function () {
        return __webpack_require__(67568);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [485,668,5389,8454,1835,3853,9080,1236,6774,9582,8448,743,8108,6142,3789,9909,2324,636,6593,8792], () => (__webpack_exec__(82308)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=room-settings-469cded6a0123dce.js.map