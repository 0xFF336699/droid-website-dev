(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2417],{

/***/ 76409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MemberManagementPage)
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
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/log/Log.js + 37 modules
var Log = __webpack_require__(42307);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useProxyWatch.js
var useProxyWatch = __webpack_require__(82916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/Search.js
var Search = __webpack_require__(89598);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(91460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(19637);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(32382);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(31826);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(53853);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(13915);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(20532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(2621);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(7270);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(58448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(37530);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Snackbar/Snackbar.js + 4 modules
var Snackbar = __webpack_require__(31502);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(40743);
// EXTERNAL MODULE: ./src/im/client/invite.ts
var invite = __webpack_require__(83446);
// EXTERNAL MODULE: ./src/im/client/room/data.ts
var data = __webpack_require__(79409);
// EXTERNAL MODULE: ./src/im/client/room/roomSettingsService.ts
var roomSettingsService = __webpack_require__(48462);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(91412);
;// ./src/im/components/room-settings/member/MemberManagementContent.tsx










const fileLogger = new Log/* Log */.tG(false, 'im.components.room-settings.member.MemberManagementContent');
const ConfirmDialog = (param)=>{
    let { open, title, content, onConfirm, onCancel } = param;
    const { t } = (0,src.useTranslation)('homepage/im/components/room-settings/member/content');
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
                        children: t('MemberManagementContent.confirmDialog.buttons.cancel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: onConfirm,
                        color: "error",
                        children: t('MemberManagementContent.confirmDialog.buttons.confirm')
                    })
                ]
            })
        ]
    });
};
const MemberCard = (param)=>{
    let { member, roomId, onClick } = param;
    var _roomData_powerLevels_roomId_users, _roomData_powerLevels_roomId, _roomData_powerLevels_roomId1, _roomData_powerLevels_roomId_users1, _roomData_powerLevels_roomId2, _roomData_powerLevels_roomId3, _member_displayName;
    const logger = fileLogger.sub(false, 'MemberCard_ui');
    // logger.pause = true;
    logger.log('roomId=', roomId);
    logger.log('member=', member);
    logger.log('member.userId=', member.userId);
    const { t } = (0,src.useTranslation)('homepage/im/components/room-settings/member/content');
    var _roomData_powerLevels_roomId_users_member_userId, _ref;
    const [userLevel] = (0,useProxyWatch/* useProxyWatch */.x)(data/* roomData */.S.powerLevels, [
        roomId,
        'users',
        member.userId
    ], (_ref = (_roomData_powerLevels_roomId_users_member_userId = (_roomData_powerLevels_roomId = data/* roomData */.S.powerLevels[roomId]) === null || _roomData_powerLevels_roomId === void 0 ? void 0 : (_roomData_powerLevels_roomId_users = _roomData_powerLevels_roomId.users) === null || _roomData_powerLevels_roomId_users === void 0 ? void 0 : _roomData_powerLevels_roomId_users[member.userId]) !== null && _roomData_powerLevels_roomId_users_member_userId !== void 0 ? _roomData_powerLevels_roomId_users_member_userId : (_roomData_powerLevels_roomId1 = data/* roomData */.S.powerLevels[roomId]) === null || _roomData_powerLevels_roomId1 === void 0 ? void 0 : _roomData_powerLevels_roomId1.users_default) !== null && _ref !== void 0 ? _ref : 0);
    logger.log("roomData.powerLevels[roomId]?.users?.[member.userId]=", (_roomData_powerLevels_roomId2 = data/* roomData */.S.powerLevels[roomId]) === null || _roomData_powerLevels_roomId2 === void 0 ? void 0 : (_roomData_powerLevels_roomId_users1 = _roomData_powerLevels_roomId2.users) === null || _roomData_powerLevels_roomId_users1 === void 0 ? void 0 : _roomData_powerLevels_roomId_users1[member.userId]);
    logger.log("roomData.powerLevels[roomId]=", data/* roomData */.S.powerLevels[roomId]);
    logger.log('userLevel=', userLevel, roomId, member.userId);
    var _roomData_powerLevels_roomId_users_default;
    const [usersDefault] = (0,useProxyWatch/* useProxyWatch */.x)(data/* roomData */.S.powerLevels, [
        roomId,
        'users_default'
    ], (_roomData_powerLevels_roomId_users_default = (_roomData_powerLevels_roomId3 = data/* roomData */.S.powerLevels[roomId]) === null || _roomData_powerLevels_roomId3 === void 0 ? void 0 : _roomData_powerLevels_roomId3.users_default) !== null && _roomData_powerLevels_roomId_users_default !== void 0 ? _roomData_powerLevels_roomId_users_default : 0);
    logger.log('usersDefault=', usersDefault);
    var _ref1;
    const level = (_ref1 = userLevel !== null && userLevel !== void 0 ? userLevel : usersDefault) !== null && _ref1 !== void 0 ? _ref1 : 0;
    let roleLabel = t('MemberManagementContent.role.user');
    if (level >= 100) roleLabel = t('MemberManagementContent.role.owner');
    else if (level >= 50) roleLabel = t('MemberManagementContent.role.admin');
    else if (level >= 20) roleLabel = t('MemberManagementContent.role.moderator');
    logger.log('roleLabel=', roleLabel);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.A, {
        variant: "outlined",
        sx: {
            display: 'flex',
            alignItems: 'center',
            px: 2,
            py: 1,
            cursor: 'pointer'
        },
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    flex: '0 0 auto',
                    minWidth: 48,
                    minHeight: 48,
                    mr: 2,
                    display: 'flex',
                    alignItems: 'center'
                },
                children: member.avatarUrl ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    component: "img",
                    src: member.avatarUrl,
                    alt: t('MemberManagementContent.table.avatar.alt'),
                    sx: {
                        width: 48,
                        height: 48,
                        borderRadius: '50%'
                    }
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    sx: {
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        bgcolor: 'grey.300',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 24
                    },
                    children: ((_member_displayName = member.displayName) === null || _member_displayName === void 0 ? void 0 : _member_displayName[0]) || member.userId[0]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    flex: '1 1 0',
                    minWidth: 0,
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "subtitle1",
                        noWrap: true,
                        children: member.displayName || member.userId
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "caption",
                        color: "text.secondary",
                        noWrap: true,
                        children: member.userId
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    flex: '0 0 auto',
                    textAlign: 'right',
                    ml: 2
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.A, {
                    label: roleLabel,
                    size: "small",
                    color: "primary"
                })
            })
        ]
    }, member.userId);
};
const MemberManagement = (param)=>{
    let { roomId, settings, onChange } = param;
    const { t } = (0,src.useTranslation)('homepage/im/components/room-settings/member/content');
    const [loading, setLoading] = (0,react.useState)(false);
    const [members] = (0,useProxyWatch/* useProxyWatch */.x)(data/* roomData */.S.roomMembers, [
        roomId
    ], data/* roomData */.S.roomMembers[roomId] || []);
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
    const router = (0,next_router.useRouter)();
    const handleKickMember = (userId)=>{
        setConfirmDialog({
            open: true,
            title: t('MemberManagementContent.confirmDialog.kick.title'),
            content: t('MemberManagementContent.confirmDialog.kick.content'),
            onConfirm: async ()=>{
                try {
                    await roomSettingsService/* roomSettingsService */.K.kickMember(roomId, userId);
                    dist/* default */.Ay.success(t('MemberManagementContent.toast.kick.success'));
                    onChange();
                } catch (error) {
                    dist/* default */.Ay.error(error.message || t('MemberManagementContent.toast.kick.error'));
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
            title: t('MemberManagementContent.confirmDialog.ban.title'),
            content: t('MemberManagementContent.confirmDialog.ban.content'),
            onConfirm: async ()=>{
                try {
                    await roomSettingsService/* roomSettingsService */.K.banMember(roomId, userId);
                    dist/* default */.Ay.success(t('MemberManagementContent.toast.ban.success'));
                    onChange();
                } catch (error) {
                    dist/* default */.Ay.error(error.message || t('MemberManagementContent.toast.ban.error'));
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
                dist/* default */.Ay.success(t('MemberManagementContent.invite.success'));
                setInviteDialogOpen(false);
                setInviteUserId('');
                onChange();
            } else {
                setInviteError(result.error || t('MemberManagementContent.invite.error'));
            }
        } catch (e) {
            setInviteError(e.message || t('MemberManagementContent.invite.error'));
        } finally{
            setInviteLoading(false);
        }
    };
    const filteredMembers = members.filter((member)=>{
        var _member_displayName;
        return ((_member_displayName = member.displayName) === null || _member_displayName === void 0 ? void 0 : _member_displayName.toLowerCase().includes(searchText.toLowerCase())) || member.userId.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log('[MemberManagement] members:', members);
    console.log('[MemberManagement] filteredMembers:', filteredMembers);
    console.log('[MemberManagement] settings:', settings);
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
                        placeholder: t('MemberManagementContent.search.placeholder'),
                        value: searchText,
                        onChange: (e)=>{
                            console.log('[MemberManagement] searchText change:', e.target.value);
                            setSearchText(e.target.value);
                        },
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
                        onClick: ()=>{
                            console.log('[MemberManagement] open invite dialog');
                            setInviteDialogOpen(true);
                        },
                        children: t('MemberManagementContent.invite.button')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.A, {
                spacing: 2,
                children: filteredMembers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((member)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MemberCard, {
                        member: member,
                        roomId: roomId,
                        onClick: ()=>{
                            router.push({
                                pathname: '/im/room/room-settings/member-detail',
                                query: {
                                    roomId,
                                    userId: member.userId
                                }
                            });
                        }
                    }, member.userId))
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
                        children: t('MemberManagementContent.invite.title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.A, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                autoFocus: true,
                                margin: "dense",
                                label: t('MemberManagementContent.invite.inputLabel'),
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
                                children: t('MemberManagementContent.invite.cancel')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                onClick: handleInvite,
                                disabled: inviteLoading || !inviteUserId.trim(),
                                variant: "contained",
                                children: inviteLoading ? t('MemberManagementContent.invite.loading') : t('MemberManagementContent.invite.confirm')
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const MemberManagementContent = (param)=>{
    let { roomId } = param;
    const { t } = (0,src.useTranslation)('homepage/im/components/room-settings/member/content');
    const [loading, setLoading] = (0,react.useState)(false);
    const [currentSettings] = (0,useProxyWatch/* useProxyWatch */.x)(data/* roomData */.S.roomSettings.settings, [
        roomId
    ], data/* roomData */.S.roomSettings.settings[roomId]);
    const handleSettingsChange = ()=>{};
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(MemberManagement, {
        roomId: roomId,
        settings: currentSettings,
        onChange: handleSettingsChange
    });
};

;// ./src/pages/im/room/room-settings/member/index.tsx






function MemberManagementPage() {
    console.log('MemberManagementPage');
    const { t } = (0,src.useTranslation)("homepage/pages/im/room/room-settings/member/content");
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
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MemberManagementContent, {
                roomId: roomId
            })
        })
    });
}


/***/ }),

/***/ 91764:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/im/room/room-settings/member",
      function () {
        return __webpack_require__(76409);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [485,5389,9842,9080,1835,8628,1236,6774,8448,743,8108,7270,688,4437,636,6593,8792], () => (__webpack_exec__(91764)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=member-fad35fa11b0ecb7c.js.map