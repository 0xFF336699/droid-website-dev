(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1587],{

/***/ 712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ openHtmlShowA11yNodeInfoButton)
/* harmony export */ });
/* harmony import */ var await_to_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42245);
/* harmony import */ var _android_components_Manifest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95850);
/* harmony import */ var _android_components_permissionGroupCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87487);
/* harmony import */ var _android_win_WindowConf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33463);
/* harmony import */ var _android_WebViewJs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71836);
/* harmony import */ var _confs_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39897);

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






function createCopy(callbackEventType, windowId) {
    let windowConf = {
        htmlConf: {
            url: "".concat(_confs_env__WEBPACK_IMPORTED_MODULE_0__/* .env */ ._.htmlOrigin, "pages/accessibility-info-buttons/#/"),
            webViewJsParams: {
                javaToJsDataString: JSON.stringify({
                    event: callbackEventType
                })
            }
        },
        windowId
    };
    return (0,_android_win_WindowConf__WEBPACK_IMPORTED_MODULE_1__/* .createWindowConfCopy */ .Sb)(windowConf);
}
function openWindow(callbackEventType, windowId) {
    let conf = createCopy(callbackEventType, windowId);
    return _android_WebViewJs__WEBPACK_IMPORTED_MODULE_2__/* .WebViewJs */ .L.instance.createWindow(JSON.stringify(conf));
}
function openHtmlShowA11yNodeInfoButton(callbackEventType, windowId) {
    return __async(this, null, function*() {
        let [err, group] = yield (0,await_to_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)((0,_android_components_permissionGroupCreator__WEBPACK_IMPORTED_MODULE_4__/* .runPermissionGroup */ .uu)(_android_components_Manifest__WEBPACK_IMPORTED_MODULE_5__/* .Manifest */ ._.Permission.SYSTEM_ALERT_WINDOW, _android_components_Manifest__WEBPACK_IMPORTED_MODULE_5__/* .Manifest */ ._.Permission.BIND_ACCESSIBILITY_SERVICE));
        if (err) {
            alert(err.toString());
            _android_WebViewJs__WEBPACK_IMPORTED_MODULE_2__/* .WebViewJs */ .L.instance.toast(err.toString());
            return;
        }
        return openWindow(callbackEventType, windowId);
    });
} //# sourceMappingURL=accessibility-info-buttons.js.map


/***/ }),

/***/ 1543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ routerUtils)
/* harmony export */ });

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
function checkToPath(router, expectNowPath, pointPath, backCount) {
    return __async(this, null, function*() {
        const nowPath = router.pathname;
        console.log("nowpath=", nowPath);
        console.log("expectNowPath=", expectNowPath);
        console.log("pointPath=", pointPath);
        if (nowPath === pointPath) {
            return;
        }
        if (expectNowPath !== nowPath) {
            router.replace(pointPath);
        }
        while(backCount > 0){
            router.back();
            backCount--;
        }
        if (router.pathname !== pointPath && pointPath) {
            router.push(pointPath);
        }
    });
}
const routerUtils = {
    checkToPath
}; //# sourceMappingURL=router-utils.js.map


/***/ }),

/***/ 14021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ actionListGroups),
  v: () => (/* binding */ initActionListGroups)
});

// EXTERNAL MODULE: ../../libs/app/static/dist/src/utils/router-utils.js
var router_utils = __webpack_require__(1543);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/is-in-android.js
var is_in_android = __webpack_require__(40044);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/AutoWebViewJs.js + 1 modules
var AutoWebViewJs = __webpack_require__(17696);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/androidDispatchers.js
var androidDispatchers = __webpack_require__(17385);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/scripts/window/windowUtils.js
var windowUtils = __webpack_require__(29481);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/htmls/accessibility-info-buttons/accessibility-info-buttons.js
var accessibility_info_buttons = __webpack_require__(712);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/actions/a11y/node-execute/node-execute.ts + 122 modules
var node_execute = __webpack_require__(1887);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/common/trigger-list-action-list-intf.ts
var trigger_list_action_list_intf = __webpack_require__(83460);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/events/projectEventUtils.ts
var projectEventUtils = __webpack_require__(18343);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/core/project-member-type.ts
var project_member_type = __webpack_require__(95556);
// EXTERNAL MODULE: ./src/components/trigger-list-action-list-common/ITriggerList-IActionList-common.intf.tsx
var ITriggerList_IActionList_common_intf = __webpack_require__(65639);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.3.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(82131);
;// ./src/components/page/action-list/groups/a11y/node-select/mockA11yNodeInfo.ts
const mockA11yNodeInfo1 = {
    "activeActivity": "com.fanfanlo.droid.MainActivity",
    "pn": "com.fanfanlo.droid.debug",
    "cn": "android.widget.FrameLayout",
    "node": {
        "availableExtraData": [
            "android.view.accessibility.extra.DATA_TEXT_CHARACTER_LOCATION_KEY"
        ],
        "boundsInScreen": {
            "bottom": 733,
            "left": 57,
            "right": 264,
            "top": 631
        },
        "children": [],
        "className": "android.widget.Button",
        "isAccessibilityDataSensitive": false,
        "isAccessibilityFocused": false,
        "isCheckable": false,
        "isChecked": false,
        "isClickable": true,
        "isContentInvalid": false,
        "isContextClickable": false,
        "isDismissable": false,
        "isEditable": false,
        "isEnabled": true,
        "isFocusable": true,
        "isFocused": true,
        "isHeading": false,
        "isImportantForAccessibility": false,
        "isLongClickable": false,
        "isMultiLine": false,
        "isPassword": false,
        "isScreenReaderFocusable": false,
        "isScrollable": false,
        "isSelected": false,
        "isShowingHintText": false,
        "isTextEntryKey": false,
        "isTextSelectable": false,
        "isVisibleToUser": true,
        "text": "选择节点",
        "viewIdResourceName": "a11y-node-select-action-item-df1c",
        "index": 0,
        "listIndex": 24
    }
};
const mockA11yNodeInfo2 = {
    "activeActivity": "com.fanfanlo.droid.MainActivity",
    "pn": "com.fanfanlo.droid.debug",
    "cn": "android.widget.FrameLayout",
    "node": {
        "availableExtraData": [
            "android.view.accessibility.extra.DATA_TEXT_CHARACTER_LOCATION_KEY"
        ],
        "boundsInScreen": {
            "bottom": 1258,
            "left": 60,
            "right": 467,
            "top": 1186
        },
        "children": [],
        "className": "android.widget.TextView",
        "isAccessibilityDataSensitive": false,
        "isAccessibilityFocused": false,
        "isCheckable": false,
        "isChecked": false,
        "isClickable": false,
        "isContentInvalid": false,
        "isContextClickable": false,
        "isDismissable": false,
        "isEditable": false,
        "isEnabled": true,
        "isFocusable": false,
        "isFocused": false,
        "isHeading": false,
        "isImportantForAccessibility": false,
        "isLongClickable": false,
        "isMultiLine": false,
        "isPassword": false,
        "isScreenReaderFocusable": false,
        "isScrollable": false,
        "isSelected": false,
        "isShowingHintText": false,
        "isTextEntryKey": false,
        "isTextSelectable": false,
        "isVisibleToUser": true,
        "text": "动作组",
        "index": 15,
        "listIndex": 40
    }
};
const mockA11yNodeInfoList = [
    mockA11yNodeInfo1,
    mockA11yNodeInfo2
];
function getRandomMockA11yNodeInfo() {
    return mockA11yNodeInfoList[parseInt((Math.random() * mockA11yNodeInfoList.length).toString())];
}

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js
var proxyWatch = __webpack_require__(99759);
;// ./src/components/page/action-list/groups/a11y/node-select/node-execute-select.tsx







const a11yNodeSelectActionItem = {
    id: "a11y-node-select-action-item-df1c",
    i18nNs: "homepage/components/page/action-list/groups/a11y/node-select/content",
    nameKey: "content.name",
    group: "a11yNodeSelectActionItem.group",
    descriptionKey: "content.description",
    type: "action",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(onAddSelect)
};
node_execute/* actionA11yNodeExecuteUtils */.p.onClickChange = onChangeSelect;
async function onSelect() {
    return new Promise((resolve)=>{
        if (!is_in_android/* isRealInAndroid */.nd) {
            return resolve(getRandomMockA11yNodeInfo());
        }
        const eventType = "a11yNodeSelectActionItem";
        const listenIndex = AutoWebViewJs/* autoWebViewJs */.yx.shellListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, eventType, eventType, false, onSelectNode);
        function onSelectNode(s) {
            const info = JSON.parse(s);
            console.log('fffffffffffffff', s);
            windowUtils/* windowUtils */.q.exitWindowById(windowId);
            AutoWebViewJs/* autoWebViewJs */.yx.shellRemoveListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, listenIndex);
            resolve(info);
        }
        const windowId = (0,index_esm/* ulid */.Z0)();
        (0,accessibility_info_buttons/* openHtmlShowA11yNodeInfoButton */.d)(eventType, windowId);
    });
}
async function onAddSelect(param) {
    let { query, router } = param;
    const nowPath = router.pathname;
    const info = await onSelect();
    const action = node_execute/* actionA11yNodeExecuteUtils */.p.mergeDataToDefultData({});
    action.javaData.info = info;
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
        data: action,
        projectMemberType: project_member_type/* ProjectMemberType */.K.actionGroup,
        projectInfo: res.data
    });
    router_utils/* routerUtils */.V.checkToPath(router, nowPath, query.backPath || "", 1);
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}
async function onChangeSelect(param) {
    let { query, onDataSelectedEventType } = param;
    console.log('lllllllllllllllllllllllllll2223333');
    const info = await onSelect();
    // onJavaDataChangeDataSelect?.(info)
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    if (onDataSelectedEventType && res.data.action) {
        console.log('fffffffffffrom event type ');
        (0,proxyWatch/* getProxyDispatcher */.Ax)(res.data.action).dispatch(onDataSelectedEventType, info);
        return;
    }
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.updateJavaData, {
        data: {
            info
        },
        projectMemberType: project_member_type/* ProjectMemberType */.K.action,
        projectInfo: res.data
    });
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}

;// ./src/components/page/action-list/groups/a11y/a11y-group.ts

const a11yGroup = {
    i18nNs: "homepage/components/page/action-list/groups/a11y/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        a11yNodeSelectActionItem
    ]
};

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/actions/app/action-open-app/IActionOpenApp.inft.tsx + 2 modules
var IActionOpenApp_inft = __webpack_require__(27972);
;// ./src/components/page/action-list/groups/app/app-select/app-select.tsx


// http://192.168.177.180:3000/locales/homepage/components/page/action-list/groups/app/zh-CN/app-select.json?v=1.0.1
// apps\homepage\public\locales\homepage\components\page\action-list\groups\app\app-select\zh-CN\content.json
// 明天早上在这里注入actionType，继续设计，似乎openApp可以放到一个map里处理，将来更新字段多了，也可以有个分流
// 在选择app的页面里应该是通过actionType找到一个函数，给这个函数注入被选择的app就行，这样的话以后安卓手机接收消息转发等也可以用选择app的页面了
// 这个名字似乎叫openApp更合适
// id注入设计的不合理
const selectAppActionItem = {
    id: "selectAppActionItem-7537eb25-586d-4178-9d9b-b817706a4c6b",
    i18nNs: "homepage/components/page/action-list/groups/app/app-select/content",
    nameKey: "content.name",
    group: "selectAppActionItem.group",
    descriptionKey: "content.description",
    type: "page",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerListLinkRender */.IS)("/app-selector", "selectAppActionItem-7537eb25-586d-4178-9d9b-b817706a4c6b", {
        actionType: IActionOpenApp_inft/* actionOpenAppUtils */.F.type
    })
};

// EXTERNAL MODULE: ../../libs/droid/android/dist/src/htmls/PnAnInfoWindow.js + 1 modules
var PnAnInfoWindow = __webpack_require__(92059);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/actions/app/to-app-main-page/IToAppMainPage.intf.ts + 1 modules
var IToAppMainPage_intf = __webpack_require__(58498);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/stringUtils.js
var stringUtils = __webpack_require__(35103);
;// ./src/components/page/action-list/groups/app/to-app-main-page/to-app-main-page.tsx




const toAppMainPageActionItem = {
    id: "to-app-main-page-action-item-df1c",
    i18nNs: "homepage/components/page/action-list/groups/app/to-app-main-page/content",
    nameKey: "content.name",
    group: "toAppMainPageActionItem.group",
    descriptionKey: "content.description",
    type: "action",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(to_app_main_page_onAddSelect)
};
IToAppMainPage_intf/* actionToAppMainPageUtils */.w.onClickChange = to_app_main_page_onChangeSelect;
async function to_app_main_page_onSelect() {
    let info;
    if (is_in_android/* isRealInAndroid */.nd) {
        info = await (0,PnAnInfoWindow/* openPnAnInfoWindow */.U)(true);
    } else {
        info = {
            pn: "".concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5), ".").concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5), ".").concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5)),
            an: (0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5)
        };
    }
    // console.log('info1=', info)
    return info;
}
async function to_app_main_page_onAddSelect(param) {
    let { query } = param;
    const info = await to_app_main_page_onSelect();
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    const action = IToAppMainPage_intf/* actionToAppMainPageUtils */.w.mergeDataToDefultData({
        javaData: {
            pn: info.pn,
            an: info.an
        }
    });
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
        data: action,
        projectMemberType: project_member_type/* ProjectMemberType */.K.actionGroup,
        projectInfo: res.data
    });
    window.history.back();
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}
async function to_app_main_page_onChangeSelect(param) {
    let { query } = param;
    const info = await to_app_main_page_onSelect();
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.updateJavaData, {
        data: info,
        projectMemberType: project_member_type/* ProjectMemberType */.K.action,
        projectInfo: res.data
    });
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}

;// ./src/components/page/action-list/groups/app/app-group.ts


const appGroup = {
    i18nNs: "homepage/components/page/action-list/groups/app/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        selectAppActionItem,
        toAppMainPageActionItem
    ]
};

;// ./src/components/page/action-list/action.data.ts


const actionListGroups = [
    appGroup,
    a11yGroup
];
async function initActionListGroups() {
    actionListGroups;
}


/***/ }),

/***/ 16424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ initTriggerListGroups),
  R: () => (/* binding */ triggerListGroups)
});

// EXTERNAL MODULE: ../../libs/app/static/dist/src/index.js
var src = __webpack_require__(6368);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/common/trigger-list-action-list-intf.ts
var trigger_list_action_list_intf = __webpack_require__(83460);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/triggers/time/timeout/ITriggerTimeout.inft.ts + 2 modules
var ITriggerTimeout_inft = __webpack_require__(14729);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/core/project-member-type.ts
var project_member_type = __webpack_require__(95556);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/events/projectEventUtils.ts
var projectEventUtils = __webpack_require__(18343);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/throw-trace-error.js
var throw_trace_error = __webpack_require__(7886);
// EXTERNAL MODULE: ./src/components/trigger-list-action-list-common/ITriggerList-IActionList-common.intf.tsx
var ITriggerList_IActionList_common_intf = __webpack_require__(65639);
;// ./src/components/page/trigger-list/groups/time/timeout/timeout.tsx





const timeoutTriggerItem = {
    id: "timeout-trigger-item-ce8c",
    i18nNs: "homepage/components/page/trigger-list/groups/time/timeout/content",
    nameKey: "content.name",
    group: "timeoutTriggerItem.group",
    descriptionKey: "content.description",
    type: "trigger",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(onSelect)
};
function onSelect(param) {
    let { query, item } = param;
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    switch(query.type){
        case src.ActionOrTriggerListTypeEnum.addAction:
            const trigger = ITriggerTimeout_inft/* triggerTimeoutUtils */.V.createDefultData();
            if (!res.data.triggerGroup) {
                return (0,throw_trace_error/* throwTraceError */.w)('triggerGroup is not found', query);
            }
            projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
                projectMemberType: project_member_type/* ProjectMemberType */.K.triggerGroup,
                data: trigger,
                projectInfo: res.data
            });
            // res.data.triggerGroup.list.push(trigger)
            // router.back()
            window.history.back();
            break;
        case src.ActionOrTriggerListTypeEnum.updateAction:
            break;
    }
}

;// ./src/components/page/trigger-list/groups/time/time-group.ts

const timeGroup = {
    i18nNs: "homepage/components/page/trigger-list/groups/time/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        timeoutTriggerItem
    ]
};

// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/is-in-android.js
var is_in_android = __webpack_require__(40044);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/htmls/PnAnInfoWindow.js + 1 modules
var PnAnInfoWindow = __webpack_require__(92059);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/AutoWebViewJs.js + 1 modules
var AutoWebViewJs = __webpack_require__(17696);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/triggers/app/when-activity-in/ITriggerWhenActivityIn.ts + 2 modules
var ITriggerWhenActivityIn = __webpack_require__(36100);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/stringUtils.js
var stringUtils = __webpack_require__(35103);
;// ./src/components/page/trigger-list/groups/app/activity/activity-in.tsx






const activityInItem = {
    id: "activity-in-item-ce8c",
    i18nNs: "homepage/components/page/trigger-list/groups/app/activity/content",
    nameKey: "content.name",
    group: "activityInItem.group",
    descriptionKey: "content.description",
    type: "trigger",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(onAddSelect)
};
ITriggerWhenActivityIn/* triggerWhenActivityInUtils */.S.onClickChange = onChangeSelect;
// async function onSelect({query, item}:{query:IActionOrTriggerListPageParams, item:IActionOrTriggerItem}){
//     const res = getTriggerOrActionListPageParams(query)
//     let info:PnAnResultData ;
//     if(isRealInAndroid){
//         info = await openPnAnInfoWindow()
//     }else{
//         info = {
//             pn:`${createRandomEnglishCharacters(Math.floor(Math.random() * 5) + 5)}.${createRandomEnglishCharacters(Math.floor(Math.random() * 5) + 5)}.${createRandomEnglishCharacters(Math.floor(Math.random() * 5) + 5)}`,
//             an:createRandomEnglishCharacters(Math.floor(Math.random() * 5) + 5)
//         }
//     }
//     console.log('info=', info)
//     const trigger = triggerWhenActivityInUtils.mergeDataToDefultData({javaData:{pn:info.pn, an:info.an, cn:info.cn}})
//     projectEventUtils.dispatchEditEvent(projectEventUtils.EditType.add,{
//         data:trigger,
//         projectMemberType:ProjectMemberType.triggerGroup,
//         projectInfo:res.data
//     })
//     window.history.back()
// }
async function activity_in_onSelect() {
    let info;
    if (is_in_android/* isRealInAndroid */.nd) {
        info = await (0,PnAnInfoWindow/* openPnAnInfoWindow */.U)(true);
    } else {
        info = {
            pn: "".concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5), ".").concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5), ".").concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5)),
            an: (0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5),
            cn: (0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5)
        };
    }
    // console.log('info1=', info)
    return info;
}
async function onAddSelect(param) {
    let { query } = param;
    const info = await activity_in_onSelect();
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    const action = ITriggerWhenActivityIn/* triggerWhenActivityInUtils */.S.mergeDataToDefultData({
        javaData: {
            pn: info.pn,
            an: info.an,
            cn: info.cn
        }
    });
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
        data: action,
        projectMemberType: project_member_type/* ProjectMemberType */.K.triggerGroup,
        projectInfo: res.data
    });
    console.log('ccccccccccccccall open self');
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
    window.history.back();
}
async function onChangeSelect(param) {
    let { query } = param;
    const info = await activity_in_onSelect();
    const res = (0,trigger_list_action_list_intf/* getTriggerOrActionListPageParams */.JT)(query);
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.updateJavaData, {
        data: info,
        projectMemberType: project_member_type/* ProjectMemberType */.K.trigger,
        projectInfo: res.data
    });
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}

;// ./src/components/page/trigger-list/groups/app/app-group.ts

const appGroup = {
    i18nNs: "homepage/components/page/trigger-list/groups/app/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        activityInItem
    ]
};

;// ./src/components/page/trigger-list/trigger.data.ts


const triggerListGroups = [
    timeGroup,
    appGroup
];
async function initTriggerListGroups() {
    triggerListGroups;
}


/***/ }),

/***/ 16700:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/project-editor",
      function () {
        return __webpack_require__(21029);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 21029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProjectEditor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/dispatcher/Dispatcher.js
var Dispatcher = __webpack_require__(93276);
;// ../../libs/droid/android/dist/src/android/jsbridge.js


const hasWindow = "object" !== "undefined";
let androidJsGlobalName = "android";
let android = hasWindow ? window[androidJsGlobalName] : "";
const global = hasWindow ? window.global || (window.global = window) : {};
const jsBridgeDispatcher = new Dispatcher/* Dispatcher */.m();
function getWebViewJsId() {
    return android ? android.webViewJsId() : "-1";
}
const listeningMap = {};
let initJsBridgeCalled = false;
function initJsBridge() {
    if (!android) return;
    if (initJsBridgeCalled) return;
    initJsBridgeCalled = true;
    global.onCallJsEvent = function(event) {
        console.log("js bridge global event", JSON.stringify(event));
        if (!event) return;
        try {
            for (const [index, value] of Object.entries(listeningMap)){
                if (value.callbackEventType !== event.type) continue;
                value.fun(event.data);
                if (value.once) {
                    delete listeningMap[index];
                }
            }
            const e = createDispatchEvent(event.data, void 0, void 0, event.type);
            jsBridgeDispatcher.dispatch(event.type, e);
            if (e.result !== void 0) return e.result;
            return "__okkey__";
        } catch (e) {
            console.log("global on call js event error", e);
        }
        return;
    };
}
function webViewJsListen(target, type, callbackEventType, once, fun) {
    if (!android) return -1;
    const index = android == null ? void 0 : android.listen(target, type, callbackEventType, once);
    if (!index) return -1;
    let key = index.toString();
    try {
        key = "".concat(typeof target === "string" ? target : "target", "-").concat(typeof type === "string" ? type : "type", "-").concat(typeof callbackEventType === "string" ? callbackEventType : "callbackEventType", "-").concat(typeof index === "string" ? index : index.toString());
    } catch (e) {
        console.log("listen_fn 2 error", e);
    }
    listeningMap[key] = {
        once,
        fun,
        target,
        type,
        callbackEventType
    };
    return key;
}
function webViewJsRemoveListen(target, index) {
    if (!android) return;
    return android.removeListen(target, index);
} //# sourceMappingURL=jsbridge.js.map

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/common/project-contexts.tsx
var project_contexts = __webpack_require__(50061);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/storage/storage.ts
var storage = __webpack_require__(34316);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/project/IProject.data.ts
var IProject_data = __webpack_require__(94399);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/log/Log.js + 1 modules
var Log = __webpack_require__(9350);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useProxyWatch.js
var useProxyWatch = __webpack_require__(82916);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/debug/object-count-utils.js
var object_count_utils = __webpack_require__(56934);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js
var proxyWatch = __webpack_require__(99759);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/parentProxy.js
var parentProxy = __webpack_require__(65736);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/watchUpdates.js
var watchUpdates = __webpack_require__(28523);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(91460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(19637);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(32382);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(58448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(31826);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(53853);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: __barrel_optimize__?names=useTranslation!=!../../node_modules/.pnpm/react-i18next@15.1.4_i18next@24.1.0_typescript@5.8.2__react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-i18next/dist/es/index.js
var es = __webpack_require__(61182);
;// ../../libs/fanfanlo/dist/src/mui/dialog/EditableText.js





function EditableText(param) {
    let { setText, title, cancelText, saveText, contentText, helperText, minHeight, children } = param;
    const { t } = (0,es/* useTranslation */.Bd)("fanfanlo/mui/dialog/content");
    const [editText, setEditText] = (0,react.useState)("");
    const [isEditing, setIsEditing] = (0,react.useState)(false);
    function handleEdit(s) {
        setEditText(s);
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {
                style: {
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "center",
                    display: "inline-block",
                    backgroundColor: "",
                    minHeight: minHeight || "1rem"
                },
                onClick: ()=>setIsEditing(true),
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {
                    children: children || ""
                })
            }),
            isEditing && /* @__PURE__ */ (0,jsx_runtime.jsxs)(Dialog/* default */.A, {
                open: isEditing,
                onClose: ()=>setIsEditing(false),
                children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(DialogTitle/* default */.A, {
                        children: title || t("EditableText.title")
                    }),
                    contentText && /* @__PURE__ */ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: contentText
                    }),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(DialogContent/* default */.A, {
                        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                            id: "editable-text",
                            "aria-label": "editable-text",
                            autoFocus: true,
                            required: true,
                            fullWidth: true,
                            helperText,
                            variant: "standard",
                            value: editText,
                            onChange: (e)=>handleEdit(e.target.value)
                        })
                    }),
                    /* @__PURE__ */ (0,jsx_runtime.jsxs)(DialogActions/* default */.A, {
                        children: [
                            /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                id: "editable-text-cancel",
                                "data-id": "editable-text-cancel",
                                onClick: ()=>setIsEditing(false),
                                children: cancelText || t("EditableText.cancel")
                            }),
                            /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* default */.A, {
                                id: "editable-text-save",
                                "data-id": "editable-text-save",
                                onClick: ()=>{
                                    setIsEditing(false);
                                    setText(editText);
                                },
                                children: saveText || t("EditableText.save")
                            })
                        ]
                    })
                ]
            })
        ]
    });
} //# sourceMappingURL=EditableText.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_reac_nks3j66iny4ryjua4rgzqurrcq/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(46879);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(41805);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Dialog/Dialog.js + 12 modules
var Dialog_Dialog = __webpack_require__(97773);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(46925);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(31453);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle_DialogTitle = __webpack_require__(67154);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(51534);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent_DialogContent = __webpack_require__(69587);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions_DialogActions = __webpack_require__(69995);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Button/Button.js + 3 modules
var Button_Button = __webpack_require__(29800);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.1_@babel+core@7.26.0_babel-plugin-macros@3.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.82.0/node_modules/next/router.js
var next_router = __webpack_require__(79764);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyUtils.js
var proxyUtils = __webpack_require__(1525);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/parentWatchProxy.js
var parentWatchProxy = __webpack_require__(43921);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(80036);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// ../../libs/droid/project/src/history/projectsHistoryMap.ts


const projectsHistoryMap = new Map();
function addProjectHistory(history) {
    proxyUtils/* proxyUtils */.o.runPauseProxyFn(()=>{
        history.project = lodash_default().cloneDeep((0,parentWatchProxy/* getProxyTarget */.EL)(history.project));
    });
    const p = history //_.cloneDeep(getProxyTarget(history))
    ;
    const list = projectsHistoryMap.get(history.project.id);
    if (!list) {
        projectsHistoryMap.set(history.project.id, [
            p
        ]);
        return;
    }
    list.push(p);
}
function getProjectHistory(projectId) {
    return projectsHistoryMap.get(projectId) || [];
}
function removeProjectHistory(projectId) {
    projectsHistoryMap.delete(projectId);
}
function getProjectLastHistory(projectId) {
    const list = getProjectHistory(projectId);
    return list[list.length - 1];
}
function takeProjectSnapshoot(project) {
    const last = getProjectLastHistory(project.id);
    if (last && lodash_default().isEqual(last.project, project)) {
        return false;
    }
    addProjectHistory({
        index: last ? last.index + 1 : 0,
        project,
        date: new Date().toISOString()
    });
    return true;
}
function projectHistoryIsChanged(project) {
    const last = getProjectLastHistory(project.id);
    return !last || !_.isEqual(last.project, project);
}
function isSameProjectHistoryId(id, projectId) {
    const last = getProjectLastHistory(projectId);
    return (last === null || last === void 0 ? void 0 : last.index) === id;
}

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(15463);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(91412);
;// ../../libs/droid/project/src/project/manager/edit-project-info-utils.ts


// import { projectStore } from '../../storage';    

const map = (0,proxyWatch/* toProxy */.I$)({});
const dispatcher = new Dispatcher/* Dispatcher */.m();
const projectSavedEvent = 'project-saved';
const editProjectInfoUtils = {
    edit: (project)=>{
        // const info = map[project.id] || (map[project.id] = createProjectEditInfo(project));
        const info = map[project.id] = createProjectEditInfo(project);
        return info;
    },
    getEditInfoById: (id)=>{
        if (map[id]) return map[id];
        const project = storage/* projectStore */.D.findProject(id);
        if (project) return map[id] = createProjectEditInfo(project);
        return null;
    },
    listenProjectSaved: (fn)=>{
        return dispatcher.addListener(projectSavedEvent, fn);
    }
};
function createProjectEditInfo(project) {
    const info = (0,proxyWatch/* toProxy */.I$)({
        project,
        askStay: false,
        giveup: false,
        updated: false,
        historyId: 0,
        testTime: new Date().toLocaleString(),
        save: async ()=>{
            info.updated = false;
            info.askStay = false;
            info.giveup = false;
            storage/* projectStore */.D.saveProject(project);
            dispatcher.dispatch(projectSavedEvent, project);
            const s = await (0,src.loadI18nValue)('droid-project/project/manager/content', 'edit-project-info-utils.projectSaved');
            dist/* default */.Ay.success(s);
        }
    });
    return info;
}

;// ../../libs/droid/project/src/project/ui/project/edit-project/contexts.tsx

const ProjectEditInfoContext = /*#__PURE__*/ (0,react.createContext)({}) // export const TriggerActionGroupContext = createContext<ITriggerActionGroup>({} as ITriggerActionGroup)
 // export const TriggerActionContext = createContext<ITriggerAction>({} as ITriggerAction)
 // export const TriggerGroupContext = createContext<ITriggerGroup>({} as ITriggerGroup)
 // export const TriggerListContext = createContext<ITriggerData<ITriggerShellData, ITriggerJavaData>[]>([] as ITriggerData<ITriggerShellData, ITriggerJavaData>[])
 // export const TriggerContext = createContext<ITriggerData<ITriggerShellData, ITriggerJavaData>>({} as ITriggerData<ITriggerShellData, ITriggerJavaData>)
 // export const ActionGroupContext = createContext<IActionGroup>({} as IActionGroup)
 // export const ActionListContext = createContext<IActionData<IActionShellData, IActionJavaData>[]>([] as IActionData<IActionShellData, IActionJavaData>[])
 // export const ActionContext = createContext<IActionData<IActionShellData, IActionJavaData>>({} as IActionData<IActionShellData, IActionJavaData>)
;

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/trigger-action/ITriggerAction.intf.ts + 2 modules
var ITriggerAction_intf = __webpack_require__(29794);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/utils/IChildToProject.intf.ts
var IChildToProject_intf = __webpack_require__(93605);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/dispatcher/throttle.js
var throttle = __webpack_require__(80045);
;// ../../libs/fanfanlo/dist/src/watcher/useWatchListOperation.js




function useWatchListOperation(target) {
    const [list, setList] = (0,react.useState)([
        ...target
    ]);
    const unsub = (0,proxyWatch/* getProxyDispatcher */.Ax)(target).addListener(throttle/* listenAnyWildcard */._l, ()=>{
        setList([
            ...target
        ]);
    });
    (0,react.useEffect)(()=>{
        return ()=>{
            unsub();
        };
    }, []);
    return [
        list,
        unsub
    ];
} //# sourceMappingURL=useWatchListOperation.js.map

;// ../../libs/fanfanlo/dist/src/watcher/updateVersion.js



let count = 0;
const updateVersion_map = /* @__PURE__ */ new WeakMap();
function getUpdateVersion(data) {
    let version = updateVersion_map.get(data) || (0,proxyWatch/* toProxy */.I$)({
        version: ++count,
        count: 0,
        key: "".concat(count, "-0")
    });
    if (!updateVersion_map.has(data)) {
        updateVersion_map.set(data, version);
        const dispatcher = (0,proxyWatch/* getProxyDispatcher */.Ax)(data);
        dispatcher.addListener(throttle/* listenAnyWildcard */._l, (now, old)=>{
            version.count++;
            version.version = ++count;
            version.key = "".concat(version.version, "-").concat(version.count);
        });
    }
    return version;
}
function getUpdateVersionKey(data) {
    return getUpdateVersion(data).key;
} //# sourceMappingURL=updateVersion.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_reac_nks3j66iny4ryjua4rgzqurrcq/node_modules/@mui/icons-material/esm/Add.js
var Add = __webpack_require__(55260);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_reac_nks3j66iny4ryjua4rgzqurrcq/node_modules/@mui/icons-material/esm/Handyman.js
var Handyman = __webpack_require__(54977);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_reac_nks3j66iny4ryjua4rgzqurrcq/node_modules/@mui/icons-material/esm/NotificationsNone.js
var NotificationsNone = __webpack_require__(31337);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_reac_nks3j66iny4ryjua4rgzqurrcq/node_modules/@mui/icons-material/esm/TableRows.js
var TableRows = __webpack_require__(59974);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Grid2/Grid2.js + 3 modules
var Grid2 = __webpack_require__(69859);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_reac_nks3j66iny4ryjua4rgzqurrcq/node_modules/@mui/icons-material/esm/DeleteOutline.js
var DeleteOutline = __webpack_require__(51532);
// EXTERNAL MODULE: ../../libs/app/static/dist/src/index.js
var dist_src = __webpack_require__(6368);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/FormGroup/FormGroup.js + 1 modules
var FormGroup = __webpack_require__(72977);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(46738);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Switch/Switch.js + 1 modules
var Switch = __webpack_require__(26636);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useWatchUpdates.js
var useWatchUpdates = __webpack_require__(26544);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/mui/dialog/ButtonConfirm.js
var ButtonConfirm = __webpack_require__(80948);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(82787);
;// ../../libs/droid/project/src/project/ui/project/edit-project/components/group/GroupCheck.tsx






function getProjectDataByGroup(group) {
    let projectData = {};
    switch(group.type){
        case actionGroupType:
            getActionGroupElement(group, '', '', projectData);
            break;
        case triggerGroupType:
            childToProjectDataUtils.triggerGroup.getTriggerGroupElement(group, '', '', projectData);
            break;
        case triggerActionGroupType:
            childToProjectDataUtils.triggerActionGroup.getTriggerActionGroupElement(group, '', '', projectData);
            break;
    }
    return projectData;
}
function Check2(param) {
    let { list, index } = param;
    const logger = new Log/* Log */.tG(false, 'Check2_fn');
    logger.isPaused = true;
    logger.log('list=', list);
    const [l] = (0,useWatchUpdates/* useWatchUpdates */.p)(list);
    const groupCheckList1Context = (0,react.useContext)(project_contexts/* GroupCheckList1Context */.oc);
    function onRemoveClick() {
        groupCheckList1Context.splice(index, 1);
    }
    logger.log('l=', l);
    // const check1 = getParent<GroupCheckList1>(list)
    // console.log('check1=', check1)
    // const group = getParent<IGroup<any>>(check1!)!
    // console.log('group=', group)
    // const projectData = getProjectDataByGroup(group)
    // console.log('projectData=', projectData)
    // const globalId = `project`
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
            container: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                    container: true,
                    size: 'grow',
                    children: l.map((check, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormGroup/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                    label: index.toString(),
                                    control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
                                        "data-id": "group-check-checkbox",
                                        "data-checked": check,
                                        "data-value": check,
                                        checked: check,
                                        onChange: (e)=>{
                                            list[index] = e.target.checked;
                                        }
                                    })
                                })
                            })
                        }, object_count_utils/* objectCountUtils */._.getNewCountId().toString()))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
                        title: "提醒",
                        onConfirm: onRemoveClick,
                        content: "您要删除此条校验吗？",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                            "data-id": "group-check-remove",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteOutline/* default */.A, {})
                        })
                    })
                })
            ]
        })
    });
}
function Check1(param) {
    let { list } = param;
    const logger = new Log/* Log */.tG(false, 'Check1_fn');
    logger.isPaused = true;
    logger.log('Check1 list=', list);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* GroupCheckList1Context */.oc.Provider, {
        value: list,
        children: list.map((checks2, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Check2, {
                list: list[index],
                index: index
            }, getUpdateVersionKey(checks2)))
    });
}
function GroupCheck(param) {
    let { group } = param;
    const logger = new Log/* Log */.tG(false, 'GroupCheck_fn');
    logger.isPaused = true;
    const [isSequential] = (0,useProxyWatch/* useProxyWatch */.x)(group, 'isSequential', group.isSequential);
    const [l] = (0,useProxyWatch/* useProxyWatch */.x)(group, 'list', group.list);
    const [list] = (0,useWatchUpdates/* useWatchUpdates */.p)(l);
    const [listSize] = (0,useProxyWatch/* useProxyWatch */.x)(list, 'length', list.length);
    const [c] = (0,useProxyWatch/* useProxyWatch */.x)(group, 'checks', group.checks);
    const [checks1] = (0,useWatchUpdates/* useWatchUpdates */.p)(c);
    function updateChecks2() {
        logger.log('updateChecks2_fn', 'listSize=', listSize, group.checks);
        group.checks.forEach((checks2)=>{
            logger.log('updateChecks2_fn', 'checks2=', checks2);
            for(let i = checks2.length; i < listSize; i++){
                checks2.push(true);
            }
            checks2.length = listSize;
        });
    }
    (0,react.useEffect)(()=>{
        updateChecks2();
    }, [
        listSize
    ]);
    // logger.log('group=', group);
    // logger.log('checks1=', checks1);
    // logger.log('isSequential=', isSequential);
    logger.log('list.length=', list.length);
    if (list.length <= 1 || isSequential) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                container: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                        "data-id": "group-add-check-list.875aec4f-5049-426a-a395-0ac0c6666a35",
                        onClick: ()=>{
                            group.checks.push(new Array(listSize).fill(true));
                        },
                        children: "添加校验组"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Check1, {
                list: group.checks
            })
        ]
    });
}

;// ../../libs/droid/project/src/project/ui/project/edit-project/components/list-page-link/ActionListOrTriggerListPageLink.tsx



function ActionListOrTriggerListPageLink(param) {
    let { query, attrs, path, btnId, children } = param;
    const router = (0,next_router.useRouter)();
    query.backPath = router.pathname;
    function handleClick() {
        const list = Object.keys(query).map((key)=>[
                key,
                query[key].toString()
            ]);
        const q = new URLSearchParams(list);
        const href = "".concat(path, "?").concat(q.toString());
        router.push(href);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
        onClick: handleClick,
        ...attrs,
        // id="link-router-to-action-list"
        // data-id="link-router-to-action-list"
        id: btnId,
        "data-id": btnId,
        children: children
    });
}

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/action/IAction.intf.ts
var IAction_intf = __webpack_require__(22892);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Box/Box.js + 2 modules
var Box_Box = __webpack_require__(20532);
;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/trigger-action/action-group/action-list/action/Action.tsx






function Action(param) {
    let { actionData } = param;
    const list = (0,react.useContext)(project_contexts/* ActionListContext */.Us);
    const utils = IAction_intf/* ActionUtilsMap */.Gh[actionData.type];
    function onDeleteComfirmed() {
        const index = list.indexOf(actionData);
        if (index === -1) return;
        list.splice(index, 1);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        sx: {
            position: 'relative',
            padding: '2px',
            marginTop: "2px",
            marginBottom: "2px",
            '&::after': {
                content: '""',
                position: 'absolute',
                right: 0,
                top: '5px',
                bottom: '5px',
                borderRight: '1px solid red'
            },
            '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: '5px',
                bottom: '5px',
                borderLeft: '1px solid red'
            }
        },
        children: [
            utils.UI(actionData),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                sx: {
                    textAlign: "center"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
                    title: "删除动作",
                    content: "确定删除本动作吗？",
                    onConfirm: onDeleteComfirmed,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        id: "del-action-btn",
                        "data-id": "del-action-btn",
                        children: "删除"
                    })
                })
            })
        ]
    });
}

;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/trigger-action/action-group/action-list/ActionList.tsx



// import { ActionGroupContext } from "../../../../contexts"



function ActionList() {
    const actionGroup = (0,react.useContext)(project_contexts/* ActionGroupContext */.Tj);
    const [list] = (0,useWatchUpdates/* useWatchUpdates */.p)(actionGroup.list);
    if (!list || !lodash_default().isArray(list)) {
        console.log('lllllllllllllist is null', actionGroup);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: actionGroup.list.map((action)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Action, {
                actionData: action
            }, getUpdateVersionKey(action));
        })
    });
}

;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/trigger-action/action-group/ActionGroup.tsx











function ActionGroup(param) {
    let { actionGroup } = param;
    const { t } = (0,src.useTranslation)("droid-project/project/ui/project/edit-project/trigger-action-group/trigger-action/action-group/content");
    const editInfo = (0,react.useContext)(ProjectEditInfoContext);
    const triggerActionGroup = (0,react.useContext)(project_contexts/* TriggerActionGroupContext */.NF);
    const triggerAction = (0,react.useContext)(project_contexts/* TriggerActionContext */.Ck);
    const query = {
        projectId: editInfo.project.id,
        triggerActionGroupId: triggerActionGroup.id,
        triggerActionId: triggerAction.id,
        actionGroupId: actionGroup.id,
        type: dist_src.ActionOrTriggerListTypeEnum.addAction,
        actionType: ''
    };
    const [isSequential] = (0,useProxyWatch/* useProxyWatch */.x)(actionGroup, 'isSequential', actionGroup.isSequential);
    const [listSize] = (0,useProxyWatch/* useProxyWatch */.x)(actionGroup.list, 'length', actionGroup.list.length);
    function setIsSequential(value) {
        (0,proxyWatch/* toProxy */.I$)(actionGroup).isSequential = value;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* ActionGroupContext */.Tj.Provider, {
        value: actionGroup,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* ActionListContext */.Us.Provider, {
            value: actionGroup.list,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    border: '2px solid #ccc',
                    padding: '4px'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                        container: true,
                        sx: {
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                size: "grow",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    children: t("content.title")
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                children: listSize > 1 && /*#__PURE__*/ (0,jsx_runtime.jsx)(FormGroup/* default */.A, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                                            checked: isSequential,
                                            "data-id": "action-group-checkbox-is-sequential.122f",
                                            "aria-checked": isSequential,
                                            "data-checked": isSequential,
                                            onChange: (e)=>{
                                                setIsSequential(e.target.checked);
                                            }
                                        }),
                                        label: t("content.sequential")
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionListOrTriggerListPageLink, {
                                        query: query,
                                        attrs: (0,IChildToProject_intf/* getActionGroupElement */.q_)(actionGroup),
                                        path: "/action-list",
                                        btnId: "link-router-to-action-list",
                                        children: t("content.list")
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(GroupCheck, {
                        group: actionGroup
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionList, {})
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ../../libs/droid/project-interface/src/trigger/ITrigger.intf.tsx
var ITrigger_intf = __webpack_require__(12554);
;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/trigger-action/trigger-group/trigger-list/trigger/Trigger.tsx







function Trigger(param) {
    let { triggerData } = param;
    const list = (0,react.useContext)(project_contexts/* TriggerListContext */.Ue);
    const utils = (0,ITrigger_intf/* getTriggerUtils */.gq)(triggerData.type);
    const onDeleteComfirmed = ()=>{
        const index = list.indexOf((0,proxyWatch/* toProxy */.I$)(triggerData));
        if (index === -1) return;
        (0,proxyWatch/* toProxy */.I$)(list).splice(index, 1);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* TriggerContext */.MS.Provider, {
        value: triggerData,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                utils.UI(triggerData),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    sx: {
                        textAlign: "center"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
                        title: "删除触发",
                        content: "确定删除本触发吗？",
                        onConfirm: onDeleteComfirmed,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                            id: "del-trigger-btn",
                            "data-id": "del-trigger-btn",
                            children: "删除"
                        })
                    })
                })
            ]
        })
    });
}

;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/trigger-action/trigger-group/trigger-list/TriggerList.tsx






function TriggerList() {
    const triggerGroup = (0,react.useContext)(project_contexts/* TriggerGroupContext */.bf);
    const [l] = (0,useWatchUpdates/* useWatchUpdates */.p)(triggerGroup.list);
    // useEffect(()=>{
    //     console.log('llllllllllllllllllllllll', l)
    //     console.log('triggerGroupppppppppp', triggerGroup)
    // }, [l])
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* TriggerListContext */.Ue.Provider, {
        value: triggerGroup.list,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            children: triggerGroup.list.map((trigger)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Trigger, {
                    triggerData: trigger
                }, getUpdateVersion(trigger).version))
        })
    });
}

;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/trigger-action/trigger-group/TriggerGroup.tsx











function TriggerGroup(param) {
    let { triggerGroup } = param;
    const { t } = (0,src.useTranslation)("droid-project/project/ui/project/edit-project/trigger-action-group/trigger-action/trigger-group/content");
    const editInfo = (0,react.useContext)(ProjectEditInfoContext);
    const triggerActionGroup = (0,react.useContext)(project_contexts/* TriggerActionGroupContext */.NF);
    const triggerAction = (0,react.useContext)(project_contexts/* TriggerActionContext */.Ck);
    const query = {
        projectId: editInfo.project.id,
        triggerActionGroupId: triggerActionGroup.id,
        triggerActionId: triggerAction.id,
        triggerGroupId: triggerGroup.id,
        type: dist_src.ActionOrTriggerListTypeEnum.addAction,
        actionType: ''
    };
    const [isSequential] = (0,useProxyWatch/* useProxyWatch */.x)(triggerGroup, 'isSequential', triggerGroup.isSequential);
    const [listSize] = (0,useProxyWatch/* useProxyWatch */.x)(triggerGroup.list, 'length', triggerGroup.list.length);
    function setIsSequential(value) {
        (0,proxyWatch/* toProxy */.I$)(triggerGroup).isSequential = value;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* TriggerGroupContext */.bf.Provider, {
        value: triggerGroup,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                border: '2px solid #a4a737',
                padding: '4px',
                marginBottom: "2px",
                marginTop: "2px"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                    container: true,
                    sx: {
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            size: "grow",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                children: t("content.title")
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            children: listSize > 1 && /*#__PURE__*/ (0,jsx_runtime.jsx)(FormGroup/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
                                    control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.A, {
                                        checked: isSequential,
                                        "data-id": "trigger-group-checkbox-is-sequential.122f",
                                        "aria-checked": isSequential,
                                        "data-checked": isSequential,
                                        onChange: (e)=>{
                                            setIsSequential(e.target.checked);
                                        }
                                    }),
                                    label: t("content.sequential")
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionListOrTriggerListPageLink, {
                                    query: query,
                                    attrs: IChildToProject_intf/* childToProjectDataUtils */.mR.triggerGroup.getTriggerGroupElement(triggerGroup),
                                    path: "/trigger-list",
                                    btnId: "link-router-to-trigger-list",
                                    children: t("content.list")
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(GroupCheck, {
                    group: triggerGroup
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TriggerList, {})
            ]
        })
    });
}

;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/trigger-action/TriggerAction.tsx











function TriggerAction(param) {
    let { triggerAction } = param;
    const [name, setName] = (0,react.useState)(triggerAction.name || '未命名');
    function handleNameChange(name) {
        triggerAction.name = name;
        setName(name);
    }
    function handleDelete() {
        const parent = (0,parentProxy/* getParentWatchProxy */.SZ)(triggerAction);
        if (!parent) return;
        parent.splice(parent.indexOf(triggerAction), 1);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* TriggerActionContext */.Ck.Provider, {
        value: triggerAction,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                border: '2px solid #02450e',
                padding: '4px'
            },
            "data-id-trigger-action": triggerAction.id,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                    sx: {
                        alignItems: 'center'
                    },
                    container: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(NotificationsNone/* default */.A, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Handyman/* default */.A, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            size: "grow",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EditableText, {
                                setText: handleNameChange,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    "data-id": "rename-trigger-action-btn.a4c6",
                                    children: name
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
                                title: "提示",
                                content: "确认要删除这条触发器和动作吗",
                                onConfirm: handleDelete,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                    "data-id": "del-trigger-action-btn",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteOutline/* default */.A, {})
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TriggerGroup, {
                    triggerGroup: triggerAction.triggerGroup
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionGroup, {
                    actionGroup: triggerAction.actionGroup
                })
            ]
        })
    });
}

;// ../../libs/droid/project/src/project/ui/project/edit-project/trigger-action-group/TriggerActionGroup.tsx












function TriggerActionGroup() {
    const { t } = (0,es/* useTranslation */.Bd)('droid-project/project/ui/project/edit-project/trigger-action-group/content');
    const editInfo = (0,react.useContext)(ProjectEditInfoContext);
    const [groupName, setGroupName] = (0,react.useState)(editInfo.project.triggerActionGroup.name || t('TriggerActionGroup.unamed'));
    const [list] = useWatchListOperation(editInfo.project.triggerActionGroup.list);
    function handleGroupNameChange(name) {
        editInfo.project.triggerActionGroup.name = name;
        setGroupName(name || t('TriggerActionGroup.unamed'));
    }
    const triggerActionGroup = editInfo.project.triggerActionGroup;
    function addTriggerAction() {
        const newTriggerAction = (0,ITriggerAction_intf/* createDefultTriggerAction */.n)();
        (0,parentProxy/* toParent */.sd)(triggerActionGroup).list.push(newTriggerAction);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* TriggerActionGroupContext */.NF.Provider, {
        value: triggerActionGroup,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            sx: {
                border: '2px solid rgb(217, 217, 217)',
                padding: '4px'
            },
            ...IChildToProject_intf/* childToProjectDataUtils */.mR.triggerActionGroup.getTriggerActionGroupElementByProp(triggerActionGroup.list),
            "data-id-trigger-action-group": triggerActionGroup.id,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                    container: true,
                    sx: {
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                            container: true,
                            sx: {
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(NotificationsNone/* default */.A, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Handyman/* default */.A, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRows/* default */.A, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            size: "grow",
                            sx: {
                                alignItems: 'center',
                                width: "100%"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                sx: {
                                    width: "100%"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EditableText, {
                                    setText: handleGroupNameChange,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        "data-id": "rename-groupname-btn-a322",
                                        style: {
                                            backgroundColor: 'red'
                                        },
                                        children: groupName
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                                    "data-id": "add-trigger-action-btn.22fab779-75e2-4e34-82f4-64667e7fc017",
                                    onClick: addTriggerAction,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.A, {})
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: list.map((ta, index)=>{
                        const triggerAction = triggerActionGroup.list[index];
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(TriggerAction, {
                            triggerAction: triggerAction
                        }, getUpdateVersion(triggerAction).version);
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_reac_nks3j66iny4ryjua4rgzqurrcq/node_modules/@mui/icons-material/esm/Save.js
var Save = __webpack_require__(85412);
;// ../../libs/droid/project/src/project/ui/project/edit-project/EditProject.tsx















const BootstrapDialog = (0,styled/* default */.Ay)(Dialog_Dialog/* default */.A)((param)=>{
    let { theme } = param;
    return {
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2)
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1)
        }
    };
});
function ProjectContent() {
    const project = (0,react.useContext)(project_contexts/* ProjectContext */.vz);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        "data-id-project": project.id,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.A, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TriggerActionGroup, {})
        })
    });
}
function StayAlert() {
    const editInfo = (0,react.useContext)(ProjectEditInfoContext);
    const logger = Log/* Log */.tG.createCountedLogger(false, 'project-editor-effect');
    const [askStay] = (0,useProxyWatch/* useProxyWatch */.x)(editInfo, 'askStay', editInfo.askStay);
    const router = (0,next_router.useRouter)();
    function toLeave() {
        editInfo.askStay = false;
        editInfo.giveup = true;
        router.back();
        editInfo.giveup = false;
        editInfo.updated = false;
    }
    function handleClose() {
        editInfo.askStay = false;
    }
    function handleLeaveWithoutSave() {
        toLeave();
        storage/* projectStore */.D.deleteDraft(editInfo.project.id);
    }
    function handleSaveAndLeave() {
        editInfo.save();
        toLeave();
        storage/* projectStore */.D.deleteDraft(editInfo.project.id);
    }
    function handleStayAndEdit() {
        editInfo.askStay = false;
        editInfo.giveup = false;
        logger.log('handleStayAndEdit fn called ', 'objectCount=', object_count_utils/* objectCountUtils */._.getObjectCount(editInfo), 'editInfo=', editInfo);
    }
    function handleSaveToDraftAndLeave() {
        // projectStore.save
        storage/* projectStore */.D.addDraft(editInfo.project);
        toLeave();
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(BootstrapDialog, {
            onClose: handleClose,
            "aria-labelledby": "customized-dialog-title",
            open: askStay,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogTitle_DialogTitle/* default */.A, {
                    sx: {
                        m: 0,
                        p: 2
                    },
                    id: "customized-dialog-title",
                    children: "提示:您有更改没有保存，确定要离开吗？"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    "aria-label": "close",
                    onClick: handleClose,
                    sx: (theme)=>({
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: theme.palette.grey[500]
                        }),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.A, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent_DialogContent/* default */.A, {
                    dividers: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions_DialogActions/* default */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                            onClick: handleLeaveWithoutSave,
                            children: "放弃保存并离开"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                            onClick: handleSaveToDraftAndLeave,
                            children: "保存变更到草稿并离开"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                            onClick: handleSaveAndLeave,
                            children: "保存并离开"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                            onClick: handleStayAndEdit,
                            children: "留下编辑"
                        })
                    ]
                })
            ]
        })
    });
}
function ProjectTools() {
    const { t } = (0,es/* useTranslation */.Bd)('droid-project/project/ui/project/edit-project/content');
    function onRunClick() {}
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                onClick: onRunClick,
                children: t("content.projectTools.run")
            })
        })
    });
}
function EditProjectBuilder() {
    const dispatcher = new Dispatcher/* Dispatcher */.m();
    const router = (0,next_router.useRouter)();
    const { id } = router.query;
    let project = storage/* projectStore */.D.findDraftOrSavedProject(id || '-1') || (0,IProject_data/* mergeProjectDataToDefultData */.D)({
        id: id || '-1'
    });
    const createProject = project;
    const draftPorjct = project = storage/* projectStore */.D.addDraft(createProject);
    const proxyProject = project = (0,proxyWatch/* toProxy */.I$)(draftPorjct);
    const parentProject = project = (0,parentProxy/* toParent */.sd)(proxyProject);
    const editInfo = editProjectInfoUtils.edit(parentProject);
    function checkUpdated() {
        const logger = new Log/* Log */.tG(false, 'checkUpdated_fn');
        logger.isPaused = true;
        const c = storage/* projectStore */.D.findSavedProject(project.id);
        logger.log('checkUpdated fn called', 'c=', c);
        editInfo.updated = !c || !lodash_default().isEqual(c, project);
        logger.log('editInfo.updated=', editInfo.updated);
        if (editInfo.updated && !editInfo.giveup) {
            editInfo.askStay = true;
            logger.log('checkUpdated fn called', 'editInfo.askStay=', editInfo.askStay);
            return true;
        }
        logger.log('checkUpdated fn called2', 'editInfo.askStay=', editInfo.askStay);
        return false;
    }
    function Content() {
        (0,react.useEffect)(()=>{
            takeProjectSnapshoot(project);
            if (!project) return;
            const unsub = (0,watchUpdates/* watchUpdates */.c)((0,parentProxy/* getParentProxyTarget */.Al)(project), ()=>{
                takeProjectSnapshoot(project);
                editInfo.updated = true;
            // console.log('project updated2', project)
            });
            return ()=>{
                unsub();
            };
        }, []);
        (0,react.useEffect)(()=>{
            const unsub = jsBridgeDispatcher.addListener("checkBrowserCanBack", (event)=>{
                const canBack = event.result = checkUpdated();
                console.log('ooooooooooooooooooooooooo checkBrowserCanBack_fn', event, 'canback=', canBack);
                if (canBack) storage/* projectStore */.D.deleteDraft(project.id);
            });
            return ()=>{
                unsub();
            };
        }, []);
        (0,react.useEffect)(()=>{
            return dispatcher.addListener('back', (e)=>{
                const canBack = e.defaultPrevented = checkUpdated();
                if (canBack) storage/* projectStore */.D.deleteDraft(project.id);
            });
        }, []);
        const p = (0,proxyWatch/* toProxy */.I$)(editInfo.project);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectEditInfoContext.Provider, {
            value: editInfo,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(project_contexts/* ProjectContext */.vz.Provider, {
                value: p,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    sx: {
                        width: "100%"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectTools, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectContent, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(StayAlert, {})
                    ]
                })
            })
        });
    }
    function Title() {
        const { t } = (0,es/* useTranslation */.Bd)('droid-project/project/ui/project/edit-project/content');
        const clickToSetProjectName = t('content.clickToSetProjectName');
        const [name] = (0,useProxyWatch/* useProxyWatch */.x)(project, 'name', clickToSetProjectName);
        function setName(name) {
            project.name = name;
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            style: {
                display: 'flex',
                flexDirection: 'row',
                gap: 16,
                width: "100%",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    style: {
                        flexGrow: 1,
                        paddingLeft: "2rem"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EditableText, {
                        setText: setName,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                id: "project-name-editor",
                                "data-id": "project-name-editor",
                                children: name || clickToSetProjectName
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    onClick: ()=>{
                        editInfo.save();
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Save/* default */.A, {})
                })
            ]
        });
    }
    return {
        Content,
        Title,
        dispatcher
    };
}

// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/app/AppShell.js + 1 modules
var AppShell = __webpack_require__(42375);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/appbar/AppBar.js + 3 modules
var AppBar = __webpack_require__(77190);
// EXTERNAL MODULE: ./src/components/page/action-list/action.data.ts + 6 modules
var action_data = __webpack_require__(14021);
// EXTERNAL MODULE: ./src/components/page/trigger-list/trigger.data.ts + 4 modules
var trigger_data = __webpack_require__(16424);
;// ./src/pages/project-editor/index.tsx





function ProjectEditor() {
    const { Content, Title, dispatcher } = EditProjectBuilder();
    (0,action_data/* initActionListGroups */.v)();
    (0,trigger_data/* initTriggerListGroups */.J)();
    const appBarProps = {
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Title, {}),
        back: true,
        backDispatcher: dispatcher
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
            appbarProps: appBarProps,
            titleConf: {
                ns: "homepage/pages/project-editor/content",
                key: "editor.title"
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {})
        })
    });
}


/***/ }),

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
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9350);

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

/***/ 61182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_1_4_i18next_24_1_0_typescript_5_8_2_react_dom_19_0_0_react_19_0_0_react_19_0_0_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_1_4_i18next_24_1_0_typescript_5_8_2_react_dom_19_0_0_react_19_0_0_react_19_0_0_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56750);



/***/ }),

/***/ 80948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ ButtonConfirm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33736);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91460);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19637);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32382);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31826);
/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53853);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91844);
/* harmony import */ var _barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61182);





function ButtonConfirm(param) {
    let { title, content, confirmText, cancelText, onConfirm, onCancel, onClose, cancelId, confirmId, children } = param;
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { t } = (0,_barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .Bd)("fanfanlo/mui/dialog/content");
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                onClick: ()=>setIsOpen(true),
                children
            }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
                open: isOpen,
                onClose: ()=>setIsOpen(false),
                children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                        children: title || t("ButtonConfirm.title")
                    }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                        children: content || t("ButtonConfirm.content")
                    }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
                        children: [
                            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                                id: cancelId || "btn-dialog-button-confirm-cancel",
                                "data-id": cancelId || "btn-dialog-button-confirm-cancel",
                                onClick: ()=>{
                                    setIsOpen(false);
                                    onCancel == null ? void 0 : onCancel();
                                    onClose == null ? void 0 : onClose(false);
                                },
                                children: cancelText || t("ButtonConfirm.cancel")
                            }),
                            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
                                id: confirmId || "btn-dialog-button-confirm-confirm",
                                "data-id": confirmId || "btn-dialog-button-confirm-confirm",
                                onClick: ()=>{
                                    setIsOpen(false);
                                    onConfirm == null ? void 0 : onConfirm();
                                    onClose == null ? void 0 : onClose(true);
                                },
                                children: confirmText || t("ButtonConfirm.confirm")
                            })
                        ]
                    })
                ]
            })
        ]
    });
} //# sourceMappingURL=ButtonConfirm.js.map


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [485,668,5389,8454,1835,3853,9080,1236,6774,8448,8108,8905,8460,5483,3797,4123,636,6593,8792], () => (__webpack_exec__(16700)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=project-editor-a5393e45b9e16a53.js.map