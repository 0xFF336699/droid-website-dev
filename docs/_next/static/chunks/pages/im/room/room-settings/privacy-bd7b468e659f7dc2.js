(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9869],{

/***/ 2843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PrivacySettingsPage)
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(30281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(85156);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(81482);
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
;// ./src/im/components/room-settings/privacy/PrivacySettingsContent.tsx








const PrivacySettingsContent = (param)=>{
    let { roomId } = param;
    var _currentSettings_privacy, _currentSettings_privacy1, _currentSettings_privacy2, _currentSettings_privacy3, _currentSettings_privacy4;
    const { t } = (0,src.useTranslation)('homepage/im/components/room-settings/privacy/content');
    const [loading, setLoading] = (0,react.useState)(false);
    const [currentSettings] = (0,useProxyWatch/* useProxyWatch */.x)(data/* roomData */.S.roomSettings.settings, [
        roomId
    ], data/* roomData */.S.roomSettings.settings[roomId]);
    var _currentSettings_privacy_isPublic, _currentSettings_privacy_isEncrypted, _currentSettings_privacy_allowGuestJoin;
    const [formData, setFormData] = (0,react.useState)({
        isPublic: (_currentSettings_privacy_isPublic = currentSettings === null || currentSettings === void 0 ? void 0 : (_currentSettings_privacy = currentSettings.privacy) === null || _currentSettings_privacy === void 0 ? void 0 : _currentSettings_privacy.isPublic) !== null && _currentSettings_privacy_isPublic !== void 0 ? _currentSettings_privacy_isPublic : false,
        isEncrypted: (_currentSettings_privacy_isEncrypted = currentSettings === null || currentSettings === void 0 ? void 0 : (_currentSettings_privacy1 = currentSettings.privacy) === null || _currentSettings_privacy1 === void 0 ? void 0 : _currentSettings_privacy1.isEncrypted) !== null && _currentSettings_privacy_isEncrypted !== void 0 ? _currentSettings_privacy_isEncrypted : false,
        allowGuestJoin: (_currentSettings_privacy_allowGuestJoin = currentSettings === null || currentSettings === void 0 ? void 0 : (_currentSettings_privacy2 = currentSettings.privacy) === null || _currentSettings_privacy2 === void 0 ? void 0 : _currentSettings_privacy2.allowGuestJoin) !== null && _currentSettings_privacy_allowGuestJoin !== void 0 ? _currentSettings_privacy_allowGuestJoin : false
    });
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            var _currentSettings_privacy, _currentSettings_privacy1, _currentSettings_privacy2;
            setLoading(true);
            if (formData.isPublic !== (currentSettings === null || currentSettings === void 0 ? void 0 : (_currentSettings_privacy = currentSettings.privacy) === null || _currentSettings_privacy === void 0 ? void 0 : _currentSettings_privacy.isPublic)) {
                await roomSettingsService/* roomSettingsService */.K.updateRoomVisibility(roomId, formData.isPublic);
            }
            if (formData.allowGuestJoin !== (currentSettings === null || currentSettings === void 0 ? void 0 : (_currentSettings_privacy1 = currentSettings.privacy) === null || _currentSettings_privacy1 === void 0 ? void 0 : _currentSettings_privacy1.allowGuestJoin)) {
                await roomSettingsService/* roomSettingsService */.K.updateGuestAccess(roomId, formData.allowGuestJoin);
            }
            if (formData.isEncrypted && !(currentSettings === null || currentSettings === void 0 ? void 0 : (_currentSettings_privacy2 = currentSettings.privacy) === null || _currentSettings_privacy2 === void 0 ? void 0 : _currentSettings_privacy2.isEncrypted)) {
                await roomSettingsService/* roomSettingsService */.K.updateEncryption(roomId, true);
            }
            dist/* default */.Ay.success(t('PrivacySettingsContent.toast.success'));
        } catch (error) {
            dist/* default */.Ay.error(error.message || t('PrivacySettingsContent.toast.error'));
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
                            children: t('PrivacySettingsContent.form.isPublic.label')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "caption",
                            color: "text.secondary",
                            children: t('PrivacySettingsContent.form.isPublic.description')
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
                            children: t('PrivacySettingsContent.form.allowGuestJoin.label')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "caption",
                            color: "text.secondary",
                            children: t('PrivacySettingsContent.form.allowGuestJoin.description')
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                    checked: formData.isEncrypted,
                    onChange: handleChange,
                    name: "isEncrypted",
                    disabled: loading || (currentSettings === null || currentSettings === void 0 ? void 0 : (_currentSettings_privacy3 = currentSettings.privacy) === null || _currentSettings_privacy3 === void 0 ? void 0 : _currentSettings_privacy3.isEncrypted)
                }),
                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            children: t('PrivacySettingsContent.form.isEncrypted.label')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                            variant: "caption",
                            color: "text.secondary",
                            children: t('PrivacySettingsContent.form.isEncrypted.description')
                        })
                    ]
                })
            }),
            (currentSettings === null || currentSettings === void 0 ? void 0 : (_currentSettings_privacy4 = currentSettings.privacy) === null || _currentSettings_privacy4 === void 0 ? void 0 : _currentSettings_privacy4.isEncrypted) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.A, {
                severity: "info",
                sx: {
                    mb: 2
                },
                children: t('PrivacySettingsContent.form.isEncrypted.alert')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                type: "submit",
                variant: "contained",
                disabled: loading,
                children: t('PrivacySettingsContent.form.submit')
            })
        ]
    });
};

;// ./src/pages/im/room/room-settings/privacy/index.tsx






function PrivacySettingsPage() {
    const { t } = (0,src.useTranslation)("homepage/pages/im/room/room-settings/privacy/content");
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
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PrivacySettingsContent, {
                roomId: roomId
            })
        })
    });
}


/***/ }),

/***/ 76028:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/im/room/room-settings/privacy",
      function () {
        return __webpack_require__(2843);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [112,6977,9893,1482,2001,3412,7764,636,6593,8792], () => (__webpack_exec__(76028)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=privacy-bd7b468e659f7dc2.js.map