(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2318],{

/***/ 8165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PermissionSettingsPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(28995);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/app/AppShell.js + 1 modules
var AppShell = __webpack_require__(34451);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/appbar/AppBar.js + 3 modules
var AppBar = __webpack_require__(74930);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Tooltip/Tooltip.js + 58 modules
var Tooltip = __webpack_require__(89964);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(38771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ./src/im/client/room/roomSettingsService.ts
var roomSettingsService = __webpack_require__(36442);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(22243);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useProxyWatch.js
var useProxyWatch = __webpack_require__(61840);
// EXTERNAL MODULE: ./src/im/client/room/data.ts
var data = __webpack_require__(64125);
;// ./src/im/components/room-settings/permission/PermissionSettingsContent.tsx








const PermissionSettingsContent = (param)=>{
    let { roomId } = param;
    var _currentSettings_permissions, _currentSettings_permissions1, _currentSettings_permissions2, _currentSettings_permissions3, _currentSettings_permissions4;
    const { t } = (0,src.useTranslation)('homepage/im/components/room-settings/permission/content');
    const [loading, setLoading] = (0,react.useState)(false);
    const [currentSettings] = (0,useProxyWatch/* useProxyWatch */.x)(data/* roomData */.S.roomSettings.settings, [
        roomId
    ], data/* roomData */.S.roomSettings.settings[roomId]);
    var _currentSettings_permissions_sendMessages, _currentSettings_permissions_invite, _currentSettings_permissions_kick, _currentSettings_permissions_ban, _currentSettings_permissions_roomSettings;
    const [formData, setFormData] = (0,react.useState)({
        sendMessages: (_currentSettings_permissions_sendMessages = currentSettings === null || currentSettings === void 0 ? void 0 : (_currentSettings_permissions = currentSettings.permissions) === null || _currentSettings_permissions === void 0 ? void 0 : _currentSettings_permissions.sendMessages) !== null && _currentSettings_permissions_sendMessages !== void 0 ? _currentSettings_permissions_sendMessages : 0,
        invite: (_currentSettings_permissions_invite = currentSettings === null || currentSettings === void 0 ? void 0 : (_currentSettings_permissions1 = currentSettings.permissions) === null || _currentSettings_permissions1 === void 0 ? void 0 : _currentSettings_permissions1.invite) !== null && _currentSettings_permissions_invite !== void 0 ? _currentSettings_permissions_invite : 50,
        kick: (_currentSettings_permissions_kick = currentSettings === null || currentSettings === void 0 ? void 0 : (_currentSettings_permissions2 = currentSettings.permissions) === null || _currentSettings_permissions2 === void 0 ? void 0 : _currentSettings_permissions2.kick) !== null && _currentSettings_permissions_kick !== void 0 ? _currentSettings_permissions_kick : 50,
        ban: (_currentSettings_permissions_ban = currentSettings === null || currentSettings === void 0 ? void 0 : (_currentSettings_permissions3 = currentSettings.permissions) === null || _currentSettings_permissions3 === void 0 ? void 0 : _currentSettings_permissions3.ban) !== null && _currentSettings_permissions_ban !== void 0 ? _currentSettings_permissions_ban : 50,
        roomSettings: (_currentSettings_permissions_roomSettings = currentSettings === null || currentSettings === void 0 ? void 0 : (_currentSettings_permissions4 = currentSettings.permissions) === null || _currentSettings_permissions4 === void 0 ? void 0 : _currentSettings_permissions4.roomSettings) !== null && _currentSettings_permissions_roomSettings !== void 0 ? _currentSettings_permissions_roomSettings : 50
    });
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            await roomSettingsService/* roomSettingsService */.K.updateRoomPermissions(roomId, formData);
            dist/* default */.Ay.success(t('PermissionSettingsContent.toast.success'));
        } catch (error) {
            dist/* default */.Ay.error(error.message || t('PermissionSettingsContent.toast.error'));
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
                title: t('PermissionSettingsContent.form.sendMessages.tooltip'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    fullWidth: true,
                    type: "number",
                    label: t('PermissionSettingsContent.form.sendMessages.label'),
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
                title: t('PermissionSettingsContent.form.invite.tooltip'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    fullWidth: true,
                    type: "number",
                    label: t('PermissionSettingsContent.form.invite.label'),
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
                title: t('PermissionSettingsContent.form.kick.tooltip'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    fullWidth: true,
                    type: "number",
                    label: t('PermissionSettingsContent.form.kick.label'),
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
                title: t('PermissionSettingsContent.form.ban.tooltip'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    fullWidth: true,
                    type: "number",
                    label: t('PermissionSettingsContent.form.ban.label'),
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
                title: t('PermissionSettingsContent.form.roomSettings.tooltip'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    fullWidth: true,
                    type: "number",
                    label: t('PermissionSettingsContent.form.roomSettings.label'),
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
                children: t('PermissionSettingsContent.description')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                type: "submit",
                variant: "contained",
                disabled: loading,
                children: t('PermissionSettingsContent.form.submit')
            })
        ]
    });
};

;// ./src/pages/im/room/room-settings/permission/index.tsx






function PermissionSettingsPage() {
    const { t } = (0,src.useTranslation)("homepage/pages/im/room/room-settings/permission/content");
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
    console.log('title=', t("content.title"));
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: t("content.title"),
                back: true
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionSettingsContent, {
                roomId: roomId
            })
        })
    });
}


/***/ }),

/***/ 82062:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/im/room/room-settings/permission",
      function () {
        return __webpack_require__(8165);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [112,6977,9893,9151,2203,3390,7313,8771,9964,7764,636,6593,8792], () => (__webpack_exec__(82062)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=permission-1eb9aa89a2cb2c55.js.map