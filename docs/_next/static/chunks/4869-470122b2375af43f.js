"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4869],{

/***/ 6659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ projectEventUtils)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18888);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7930);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27880);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);



const dispatcher = new _fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .Dispatcher */ .m();
var EditType = /*#__PURE__*/ function(EditType) {
    EditType["add"] = "add";
    EditType["updateJavaData"] = "updateJavaData";
    EditType["updateShellData"] = "updateShellData";
    return EditType;
}(EditType || {});
function dispatchEditEvent(editType, event) {
    // console.log('dispatchEditEvent', editType, event)
    dispatcher.dispatch(editType, event);
}
function onEditJavaData(event) {
    // console.log('on edit java data', event)
    switch(event.projectMemberType){
        case _core__WEBPACK_IMPORTED_MODULE_2__/* .ProjectMemberType */ .K.action:
            onActionEdit("updateJavaData", event);
            break;
        case _core__WEBPACK_IMPORTED_MODULE_2__/* .ProjectMemberType */ .K.trigger:
            onTriggerEdit("updateJavaData", event);
            break;
        default:
            {
                const msg = "on edit java data unknow event type ".concat(event.projectMemberType);
                (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .throwTraceError */ .w)(msg, event);
            }
    }
}
function onTriggerEdit(editType, event) {
    var _event_projectInfo;
    // console.log('on trigger edit', event)
    const trigger = (_event_projectInfo = event.projectInfo) === null || _event_projectInfo === void 0 ? void 0 : _event_projectInfo.trigger;
    if (!trigger) {
        const msg = "no trigger when edit trigger java data";
        return (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .throwTraceError */ .w)(msg, event);
    }
    switch(editType){
        case "updateJavaData":
            // console.log('before merge', trigger.javaData)
            lodash__WEBPACK_IMPORTED_MODULE_0___default().merge(trigger.javaData, event.data);
            break;
        case "updateShellData":
            lodash__WEBPACK_IMPORTED_MODULE_0___default().merge(trigger.shellData, event.data);
            break;
        default:
            {
                const msg = "on trigger edit unknow event type ".concat(event.editType);
                (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .throwTraceError */ .w)(msg, event);
            }
    }
}
function onActionEdit(editType, event) {
    var _event_projectInfo;
    console.log('on action edit', event);
    const action = (_event_projectInfo = event.projectInfo) === null || _event_projectInfo === void 0 ? void 0 : _event_projectInfo.action;
    if (!action) {
        const msg = "no action when edit action java data";
        return (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .throwTraceError */ .w)(msg, event);
    }
    switch(editType){
        case "updateJavaData":
            console.log('before merge', JSON.parse(JSON.stringify(action.javaData)));
            lodash__WEBPACK_IMPORTED_MODULE_0___default().merge(action.javaData, event.data);
            console.log('after merge', JSON.parse(JSON.stringify(action.javaData)));
            break;
        case "updateShellData":
            lodash__WEBPACK_IMPORTED_MODULE_0___default().merge(action.shellData, event.data);
            break;
        default:
            {
                const msg = "on action edit unknow event type ".concat(event.editType);
                (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .throwTraceError */ .w)(msg, event);
            }
    }
}
function onAdd(event) {
    switch(event.projectMemberType){
        case _core__WEBPACK_IMPORTED_MODULE_2__/* .ProjectMemberType */ .K.actionGroup:
            onActionGroupAdd(event);
            break;
        case _core__WEBPACK_IMPORTED_MODULE_2__/* .ProjectMemberType */ .K.triggerGroup:
            onTriggerGroupAdd(event);
            break;
    }
}
function onTriggerGroupAdd(event) {
    var _event_projectInfo;
    const group = (_event_projectInfo = event.projectInfo) === null || _event_projectInfo === void 0 ? void 0 : _event_projectInfo.triggerGroup;
    if (!group) {
        const msg = "no trigger group when edit action group add";
        return (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .throwTraceError */ .w)(msg, event);
    }
    group.list.push(event.data);
}
function onActionGroupAdd(event) {
    var _event_projectInfo;
    const group = (_event_projectInfo = event.projectInfo) === null || _event_projectInfo === void 0 ? void 0 : _event_projectInfo.actionGroup;
    if (!group) {
        const msg = "no action group when edit action group add";
        return (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .throwTraceError */ .w)(msg, event);
    }
    group.list.push(event.data);
}
function init() {
    dispatcher.addListener("updateJavaData", onEditJavaData);
    dispatcher.addListener("add", onAdd);
}
const projectEventUtils = {
    init,
    dispatcher,
    dispatchEditEvent,
    EditType
};


/***/ }),

/***/ 7930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ throwTraceError)
/* harmony export */ });

function throwTraceError(msg) {
    for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        rest[_key - 1] = arguments[_key];
    }
    console.error(msg, rest);
    console.trace(msg);
    throw new Error(msg);
} //# sourceMappingURL=throw-trace-error.js.map


/***/ }),

/***/ 23402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ appNamespace)
/* harmony export */ });
/* harmony import */ var _actions_namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56054);

const appNamespace = "".concat(_actions_namespace__WEBPACK_IMPORTED_MODULE_0__/* .actionsNamespace */ .j, "app/");


/***/ }),

/***/ 27880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ ProjectMemberType)
/* harmony export */ });
var ProjectMemberType = /*#__PURE__*/ function(ProjectMemberType) {
    ProjectMemberType["project"] = "project";
    ProjectMemberType["trigger"] = "trigger";
    ProjectMemberType["action"] = "action";
    ProjectMemberType["shellData"] = "shellData";
    ProjectMemberType["javaData"] = "javaData";
    ProjectMemberType["triggerAction"] = "triggerAction";
    ProjectMemberType["actionGroup"] = "actionGroup";
    ProjectMemberType["triggerGroup"] = "triggerGroup";
    ProjectMemberType["triggerActionGroup"] = "triggerActionGroup";
    ProjectMemberType["checks"] = "GroupCheckList1";
    return ProjectMemberType;
}({});


/***/ }),

/***/ 30528:
/***/ (() => {

 //# sourceMappingURL=app-selector-intf.js.map


/***/ }),

/***/ 30624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A5: () => (/* binding */ createActionUtils),
/* harmony export */   Gh: () => (/* binding */ ActionUtilsMap),
/* harmony export */   e9: () => (/* binding */ getActionUtils)
/* harmony export */ });
/* unused harmony export registerActionUtils */
/* harmony import */ var _utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82713);

const ActionUtilsMap = {};
function registerActionUtils(key, utils) {
    if (key in ActionUtilsMap) {
        throw new Error("ActionUtilsMap already has key: ".concat(key));
    }
    // console.log('registerActionUtils', key, utils)
    ActionUtilsMap[key] = utils;
}
function getActionUtils(key) {
    return ActionUtilsMap[key];
}
function createActionUtils(type, init, createDefultData, UI) {
    const res = {
        type,
        mergeDataToDefultData: (0,_utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_0__/* .createMergeToDefaultData */ .dV)(createDefultData),
        createDefultData,
        create: (actionGroup, data)=>{
            const action = createDefultData();
            actionGroup.list.push(action);
        },
        update: (action, data)=>{
            (0,_utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_0__/* .mergeDataWith */ .zI)(action, data);
        },
        UI,
        init
    };
    registerActionUtils(type, res);
    return res;
}


/***/ }),

/***/ 37416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JT: () => (/* binding */ getTriggerOrActionListPageParams)
/* harmony export */ });
/* unused harmony exports ActionListFromEnum, TriggerOrActionListTypeEnum */
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31232);

var ActionListFromEnum = /*#__PURE__*/ function(ActionListFromEnum) {
    ActionListFromEnum["project"] = "project";
    return ActionListFromEnum;
}({});
var TriggerOrActionListTypeEnum = /*#__PURE__*/ function(TriggerOrActionListTypeEnum) {
    TriggerOrActionListTypeEnum["addAction"] = "add";
    TriggerOrActionListTypeEnum["updateAction"] = "update";
    return TriggerOrActionListTypeEnum;
}({});
function getTriggerOrActionListPageParams(params) {
    const project = _storage__WEBPACK_IMPORTED_MODULE_0__/* .projectStore */ .D.findDraftOrSavedProject(params.projectId);
    const data = {};
    const res = {
        data,
        params
    };
    if (!project) return res;
    data.project = project;
    if (project.triggerActionGroup.id !== params.triggerActionGroupId) return res;
    data.triggerActionGroup = project.triggerActionGroup;
    if (!params.triggerActionId) return res;
    const triggerAction = data.triggerActionGroup.list.find((item)=>item.id === params.triggerActionId);
    if (!triggerAction) return res;
    data.triggerAction = triggerAction;
    parseAction(data, params, triggerAction);
    parseTrigger(data, params, triggerAction);
    return res;
}
function parseAction(data, params, triggerAction) {
    if (!params.actionGroupId || !triggerAction.actionGroup || params.actionGroupId != triggerAction.actionGroup.id) return;
    data.actionGroup = triggerAction.actionGroup;
    const action = triggerAction.actionGroup.list.find((item)=>item.id === params.actionId);
    if (!action) return;
    data.action = action;
}
function parseTrigger(data, params, triggerAction) {
    if (!params.triggerGroupId || !triggerAction.triggerGroup || params.triggerGroupId != triggerAction.triggerGroup.id) return;
    data.triggerGroup = triggerAction.triggerGroup;
    const trigger = triggerAction.triggerGroup.list.find((item)=>item.id === params.triggerId);
    if (!trigger) return;
    data.trigger = trigger;
}


/***/ }),

/***/ 44660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionOrTriggerListTypeEnum: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_1__.ActionOrTriggerListTypeEnum)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96927);
/* harmony reexport (checked) */ if(__webpack_require__.o(_components__WEBPACK_IMPORTED_MODULE_0__, "ActionOrTriggerListTypeEnum")) __webpack_require__.d(__webpack_exports__, { ActionOrTriggerListTypeEnum: function() { return _components__WEBPACK_IMPORTED_MODULE_0__.ActionOrTriggerListTypeEnum; } });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75351);





 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 48409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ appPackagesStore)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82339);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28995);




const s = _fanfanlo__WEBPACK_IMPORTED_MODULE_1__.storeUtils.namespace("app-packages");
const data = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .toProxy */ .I$)({
    list: []
});
loadPackages();
function loadPackages() {
    const list = s.read("list") || [];
    data.list = lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(list) ? list : [];
}
function releasePackages() {
    data.list = [];
}
function savePackages(list) {
    s.write("list", list);
    data.list = list;
}
function findPackageInfoByPackageName(packageName) {
    return data.list.find((item)=>item.packageName === packageName);
}
const appPackagesStore = {
    data,
    loadPackages,
    releasePackages,
    savePackages,
    findPackageInfoByPackageName
}; //# sourceMappingURL=app-packages-store.js.map


/***/ }),

/***/ 56054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ actionsNamespace)
/* harmony export */ });
/* harmony import */ var _core_namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90418);

const actionsNamespace = "".concat(_core_namespace__WEBPACK_IMPORTED_MODULE_0__/* .projectNamespace */ .D, "actions/");


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


/***/ }),

/***/ 75351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ActionOrTriggerListTypeEnum: () => (/* reexport */ ActionOrTriggerListTypeEnum)
});

// UNUSED EXPORTS: ActionOrTriggerListFromEnum, triggerListplaceholder, x

// EXTERNAL MODULE: ../../libs/app/static/dist/src/pages/action-list/app-selector/app-selector-intf.js
var app_selector_intf = __webpack_require__(30528);
;// ../../libs/app/static/dist/src/pages/action-list/app-selector/index.js

 //# sourceMappingURL=index.js.map

;// ../../libs/app/static/dist/src/pages/action-list/index.js

 //# sourceMappingURL=index.js.map

;// ../../libs/app/static/dist/src/pages/trigger-list-action-list-common/common.js

function x() {}
var ActionOrTriggerListFromEnum = /* @__PURE__ */ ((ActionOrTriggerListFromEnum2)=>{
    ActionOrTriggerListFromEnum2["project"] = "project";
    return ActionOrTriggerListFromEnum2;
})(ActionOrTriggerListFromEnum || {});
var ActionOrTriggerListTypeEnum = /* @__PURE__ */ ((ActionOrTriggerListTypeEnum2)=>{
    ActionOrTriggerListTypeEnum2["addAction"] = "add";
    ActionOrTriggerListTypeEnum2["updateAction"] = "update";
    return ActionOrTriggerListTypeEnum2;
})(ActionOrTriggerListTypeEnum || {}); //# sourceMappingURL=common.js.map

;// ../../libs/app/static/dist/src/pages/trigger-list-action-list-common/index.js

 //# sourceMappingURL=index.js.map

;// ../../libs/app/static/dist/src/pages/index.js



 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 78123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 84108:
/***/ (() => {

 //# sourceMappingURL=IAppBar.intf.js.map


/***/ }),

/***/ 89537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ actionOpenAppUtils)
});

// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(67131);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/action/IAction.intf.ts
var IAction_intf = __webpack_require__(30624);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/actions/app/app-namespace.ts
var app_namespace = __webpack_require__(23402);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../libs/app/static/dist/src/index.js
var src = __webpack_require__(44660);
// EXTERNAL MODULE: ../../libs/app/static/dist/src/storage/app-packages-store.js
var app_packages_store = __webpack_require__(48409);
;// ../../libs/app/ui/dist/src/components/image/AppIcon30.js



function AppIcon30(param) {
    let { packageName } = param;
    const packageInfo = app_packages_store/* appPackagesStore */.I.findPackageInfoByPackageName(packageName);
    const image = (packageInfo == null ? void 0 : packageInfo.iconBase64) ? "data:image/gif;base64,".concat(packageInfo.iconBase64) : "";
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("img", {
        src: image,
        width: 30,
        style: {
            borderRadius: "8px"
        }
    });
} //# sourceMappingURL=AppIcon30.js.map

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js
var proxyWatch = __webpack_require__(82339);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(28669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Grid2/Grid2.js + 4 modules
var Grid2 = __webpack_require__(95771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.5_@babel+core@7.28.0_babel-plugin-macros@3.1.0_react-dom@19.1.0_react@19.1.0__react@19.1.0_sass@1.89.2/node_modules/next/router.js
var next_router = __webpack_require__(75640);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/utils/IChildToProject.intf.ts
var IChildToProject_intf = __webpack_require__(14209);
;// ../../libs/droid/project-interface/src/actions/app/action-open-app/IActionOpenApp.UI.tsx









function UpdateAppLink(param) {
    let { data, children } = param;
    var _projectInfo_project, _projectInfo_triggerActionGroup, _projectInfo_triggerAction, _projectInfo_actionGroup, _projectInfo_project1, _projectInfo_triggerActionGroup1, _projectInfo_triggerAction1, _projectInfo_actionGroup1;
    const projectInfo = {};
    IChildToProject_intf/* childToProjectDataUtils */.mR.actionList.getActionListByProp(data, projectInfo);
    if (!((_projectInfo_project = projectInfo.project) === null || _projectInfo_project === void 0 ? void 0 : _projectInfo_project.id) || !((_projectInfo_triggerActionGroup = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup === void 0 ? void 0 : _projectInfo_triggerActionGroup.id) || !((_projectInfo_triggerAction = projectInfo.triggerAction) === null || _projectInfo_triggerAction === void 0 ? void 0 : _projectInfo_triggerAction.id) || !((_projectInfo_actionGroup = projectInfo.actionGroup) === null || _projectInfo_actionGroup === void 0 ? void 0 : _projectInfo_actionGroup.id)) {
        console.error('UpdateAppLink projectInfo is undefined', projectInfo);
        return;
    }
    const router = (0,next_router.useRouter)();
    const backPath = router.pathname;
    const query = {
        backPath,
        projectId: (_projectInfo_project1 = projectInfo.project) === null || _projectInfo_project1 === void 0 ? void 0 : _projectInfo_project1.id,
        triggerActionGroupId: (_projectInfo_triggerActionGroup1 = projectInfo.triggerActionGroup) === null || _projectInfo_triggerActionGroup1 === void 0 ? void 0 : _projectInfo_triggerActionGroup1.id,
        triggerActionId: (_projectInfo_triggerAction1 = projectInfo.triggerAction) === null || _projectInfo_triggerAction1 === void 0 ? void 0 : _projectInfo_triggerAction1.id,
        actionGroupId: (_projectInfo_actionGroup1 = projectInfo.actionGroup) === null || _projectInfo_actionGroup1 === void 0 ? void 0 : _projectInfo_actionGroup1.id,
        type: src.ActionOrTriggerListTypeEnum.updateAction,
        actionId: data.id,
        actionType: actionOpenAppUtils.type
    };
    const param1 = new URLSearchParams([
        ...Object.entries(query)
    ]);
    const p = "/action-list/app-selector?".concat(param1.toString());
    (0,react.useEffect)(()=>{
        router.prefetch(p);
    // console.log('ppppppppprefectech', p)
    }, []);
    function onLinkClick() {
        router.push(p);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
        id: "open-app-action-change-app-btn",
        "data-id": "open-app-action-change-app-btn",
        onClick: onLinkClick,
        children: children
    });
}
function IActionOpenAppUI(data) {
    const packageInfo = app_packages_store/* appPackagesStore */.I.findPackageInfoByPackageName(data.javaData.packageName);
    function onDeleteComfirmed() {
        const projectData = {};
        IChildToProject_intf/* childToProjectDataUtils */.mR.actionList.getActionListByProp(data, projectData);
        const list = projectData.actionList;
        if (!list) {
            throw new Error('actionList is undefined');
        }
        const index = list.findIndex((a)=>a.id === data.id);
        if (index === -1) {
            throw new Error('action not found');
        }
        (0,proxyWatch/* toProxy */.I$)(list).splice(index, 1);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                    children: "打开应用"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                container: true,
                sx: {
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                        size: "grow",
                        container: true,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppIcon30, {
                                    packageName: data.javaData.packageName
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.A, {
                                    sx: {},
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            style: {
                                                display: "inline-block",
                                                textIndent: "10px"
                                            },
                                            children: packageInfo === null || packageInfo === void 0 ? void 0 : packageInfo.label
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            style: {
                                                display: "inline-block",
                                                textIndent: "10px",
                                                fontSize: "0.8rem"
                                            },
                                            children: packageInfo === null || packageInfo === void 0 ? void 0 : packageInfo.packageName
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                        size: "auto",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UpdateAppLink, {
                            data: data,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: "更换"
                            })
                        })
                    })
                ]
            })
        ]
    });
}

;// ../../libs/droid/project-interface/src/actions/app/action-open-app/IActionOpenApp.inft.tsx




const type = "".concat(app_namespace/* appNamespace */.X, "openApp");
function createDefultData() {
    return {
        id: (0,index_esm/* ulid */.Z0)(),
        type,
        javaData: {
            packageName: ''
        }
    };
}
// function UpdateAppLink({data, children}: {data: IActionOpenAppData}&PropsWithChildren){
//     const packageName = data.javaData.packageName
//     data.javaData
//     console.log('packagename=', packageName)
//     const projectInfo:IChildToProjectData = {}
//     childToProjectDataUtils.actionList.getActionListByProp(data, projectInfo)
//     if(!projectInfo.project?.id || !projectInfo.triggerActionGroup?.id || !projectInfo.triggerAction?.id || !projectInfo.actionGroup?.id){
//         console.error('UpdateAppLink projectInfo is undefined', projectInfo)
//         return
//     }
//     const router = useRouter()
//     const backPath = router.pathname
//     const query:IActionOrTriggerListPageParams = {
//         backPath,
//         projectId: projectInfo.project?.id,
//         triggerActionGroupId: projectInfo.triggerActionGroup?.id,
//         triggerActionId: projectInfo.triggerAction?.id,
//         actionGroupId: projectInfo.actionGroup?.id,
//         type: ActionOrTriggerListTypeEnum.updateAction,
//         actionId: data.id,
//         actionType: type,
//     }
//     return <Link href={{pathname: '/action-list/app-selector', query}}>
//         {children}
//     </Link>
// }
function init() {}
const actionOpenAppUtils = (0,IAction_intf/* createActionUtils */.A5)(type, init, createDefultData, IActionOpenAppUI);


/***/ }),

/***/ 90418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ projectNamespace)
/* harmony export */ });
const projectNamespace = "fanfanlo/";


/***/ }),

/***/ 96927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony import */ var _appbar_IAppBar_intf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84108);
/* harmony import */ var _appbar_IAppBar_intf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_appbar_IAppBar_intf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_appbar_IAppBar_intf__WEBPACK_IMPORTED_MODULE_0__, "ActionOrTriggerListTypeEnum")) __webpack_require__.d(__webpack_exports__, { ActionOrTriggerListTypeEnum: function() { return _appbar_IAppBar_intf__WEBPACK_IMPORTED_MODULE_0__.ActionOrTriggerListTypeEnum; } });

 //# sourceMappingURL=index.js.map


/***/ })

}]);
//# sourceMappingURL=4869-470122b2375af43f.js.map