(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2939],{

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

/***/ 16500:
/***/ (() => {

"use strict";
 //# sourceMappingURL=IIdTypeContainer.intf.js.map


/***/ }),

/***/ 16662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _IPermission_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74128);
/* harmony import */ var _IPermission_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_IPermission_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_IPermission_data__WEBPACK_IMPORTED_MODULE_0__, "ActionGroupContext")) __webpack_require__.d(__webpack_exports__, { ActionGroupContext: function() { return _IPermission_data__WEBPACK_IMPORTED_MODULE_0__.ActionGroupContext; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_IPermission_data__WEBPACK_IMPORTED_MODULE_0__, "ActionListContext")) __webpack_require__.d(__webpack_exports__, { ActionListContext: function() { return _IPermission_data__WEBPACK_IMPORTED_MODULE_0__.ActionListContext; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_IPermission_data__WEBPACK_IMPORTED_MODULE_0__, "GroupCheckList1Context")) __webpack_require__.d(__webpack_exports__, { GroupCheckList1Context: function() { return _IPermission_data__WEBPACK_IMPORTED_MODULE_0__.GroupCheckList1Context; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_IPermission_data__WEBPACK_IMPORTED_MODULE_0__, "ProjectContext")) __webpack_require__.d(__webpack_exports__, { ProjectContext: function() { return _IPermission_data__WEBPACK_IMPORTED_MODULE_0__.ProjectContext; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_IPermission_data__WEBPACK_IMPORTED_MODULE_0__, "TriggerActionContext")) __webpack_require__.d(__webpack_exports__, { TriggerActionContext: function() { return _IPermission_data__WEBPACK_IMPORTED_MODULE_0__.TriggerActionContext; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_IPermission_data__WEBPACK_IMPORTED_MODULE_0__, "TriggerActionGroupContext")) __webpack_require__.d(__webpack_exports__, { TriggerActionGroupContext: function() { return _IPermission_data__WEBPACK_IMPORTED_MODULE_0__.TriggerActionGroupContext; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_IPermission_data__WEBPACK_IMPORTED_MODULE_0__, "TriggerContext")) __webpack_require__.d(__webpack_exports__, { TriggerContext: function() { return _IPermission_data__WEBPACK_IMPORTED_MODULE_0__.TriggerContext; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_IPermission_data__WEBPACK_IMPORTED_MODULE_0__, "TriggerGroupContext")) __webpack_require__.d(__webpack_exports__, { TriggerGroupContext: function() { return _IPermission_data__WEBPACK_IMPORTED_MODULE_0__.TriggerGroupContext; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_IPermission_data__WEBPACK_IMPORTED_MODULE_0__, "TriggerListContext")) __webpack_require__.d(__webpack_exports__, { TriggerListContext: function() { return _IPermission_data__WEBPACK_IMPORTED_MODULE_0__.TriggerListContext; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_IPermission_data__WEBPACK_IMPORTED_MODULE_0__, "getTriggerOrActionListPageParams")) __webpack_require__.d(__webpack_exports__, { getTriggerOrActionListPageParams: function() { return _IPermission_data__WEBPACK_IMPORTED_MODULE_0__.getTriggerOrActionListPageParams; } });

 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 27028:
/***/ (() => {

"use strict";
 //# sourceMappingURL=IGroupParent.type.js.map


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

/***/ 46382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionGroupContext: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.ActionGroupContext),
/* harmony export */   ActionListContext: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.ActionListContext),
/* harmony export */   GroupCheckList1Context: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.GroupCheckList1Context),
/* harmony export */   ProjectContext: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.ProjectContext),
/* harmony export */   TriggerActionContext: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.TriggerActionContext),
/* harmony export */   TriggerActionGroupContext: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.TriggerActionGroupContext),
/* harmony export */   TriggerContext: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.TriggerContext),
/* harmony export */   TriggerGroupContext: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.TriggerGroupContext),
/* harmony export */   TriggerListContext: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.TriggerListContext),
/* harmony export */   getTriggerOrActionListPageParams: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.getTriggerOrActionListPageParams)
/* harmony export */ });
/* harmony import */ var _permission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16662);
/* harmony reexport (checked) */ if(__webpack_require__.o(_permission__WEBPACK_IMPORTED_MODULE_0__, "ActionGroupContext")) __webpack_require__.d(__webpack_exports__, { ActionGroupContext: function() { return _permission__WEBPACK_IMPORTED_MODULE_0__.ActionGroupContext; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_permission__WEBPACK_IMPORTED_MODULE_0__, "ActionListContext")) __webpack_require__.d(__webpack_exports__, { ActionListContext: function() { return _permission__WEBPACK_IMPORTED_MODULE_0__.ActionListContext; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_permission__WEBPACK_IMPORTED_MODULE_0__, "GroupCheckList1Context")) __webpack_require__.d(__webpack_exports__, { GroupCheckList1Context: function() { return _permission__WEBPACK_IMPORTED_MODULE_0__.GroupCheckList1Context; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_permission__WEBPACK_IMPORTED_MODULE_0__, "ProjectContext")) __webpack_require__.d(__webpack_exports__, { ProjectContext: function() { return _permission__WEBPACK_IMPORTED_MODULE_0__.ProjectContext; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_permission__WEBPACK_IMPORTED_MODULE_0__, "TriggerActionContext")) __webpack_require__.d(__webpack_exports__, { TriggerActionContext: function() { return _permission__WEBPACK_IMPORTED_MODULE_0__.TriggerActionContext; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_permission__WEBPACK_IMPORTED_MODULE_0__, "TriggerActionGroupContext")) __webpack_require__.d(__webpack_exports__, { TriggerActionGroupContext: function() { return _permission__WEBPACK_IMPORTED_MODULE_0__.TriggerActionGroupContext; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_permission__WEBPACK_IMPORTED_MODULE_0__, "TriggerContext")) __webpack_require__.d(__webpack_exports__, { TriggerContext: function() { return _permission__WEBPACK_IMPORTED_MODULE_0__.TriggerContext; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_permission__WEBPACK_IMPORTED_MODULE_0__, "TriggerGroupContext")) __webpack_require__.d(__webpack_exports__, { TriggerGroupContext: function() { return _permission__WEBPACK_IMPORTED_MODULE_0__.TriggerGroupContext; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_permission__WEBPACK_IMPORTED_MODULE_0__, "TriggerListContext")) __webpack_require__.d(__webpack_exports__, { TriggerListContext: function() { return _permission__WEBPACK_IMPORTED_MODULE_0__.TriggerListContext; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_permission__WEBPACK_IMPORTED_MODULE_0__, "getTriggerOrActionListPageParams")) __webpack_require__.d(__webpack_exports__, { getTriggerOrActionListPageParams: function() { return _permission__WEBPACK_IMPORTED_MODULE_0__.getTriggerOrActionListPageParams; } });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55172);
















 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 55172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ActionGroupContext: () => (/* reexport */ project_contexts/* ActionGroupContext */.Tj),
  ActionListContext: () => (/* reexport */ project_contexts/* ActionListContext */.Us),
  GroupCheckList1Context: () => (/* reexport */ project_contexts/* GroupCheckList1Context */.oc),
  ProjectContext: () => (/* reexport */ project_contexts/* ProjectContext */.vz),
  TriggerActionContext: () => (/* reexport */ project_contexts/* TriggerActionContext */.Ck),
  TriggerActionGroupContext: () => (/* reexport */ project_contexts/* TriggerActionGroupContext */.NF),
  TriggerContext: () => (/* reexport */ project_contexts/* TriggerContext */.MS),
  TriggerGroupContext: () => (/* reexport */ project_contexts/* TriggerGroupContext */.bf),
  TriggerListContext: () => (/* reexport */ project_contexts/* TriggerListContext */.Ue),
  getTriggerOrActionListPageParams: () => (/* reexport */ getTriggerOrActionListPageParams)
});

// UNUSED EXPORTS: ActionContext, ActionListFromEnum, GroupCheckList2Context, GroupContext, TriggerOrActionListTypeEnum, useProjectUniqueKeyValue

// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/common/IGroup.intf.js
var IGroup_intf = __webpack_require__(63305);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/common/project-contexts.js
var project_contexts = __webpack_require__(42988);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/common/IGroupParent.type.js
var IGroupParent_type = __webpack_require__(27028);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/common/IIdTypeContainer.intf.js
var IIdTypeContainer_intf = __webpack_require__(16500);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/common/INameContainer.js
var INameContainer = __webpack_require__(79355);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/common/INameId.inft.js
var INameId_inft = __webpack_require__(68364);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/common/INameIDData.intf.js
var INameIDData_intf = __webpack_require__(73728);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/storage/storage.js
var storage = __webpack_require__(53081);
;// ../../libs/droid/project-interface/dist/src/common/trigger-list-action-list-intf.js


var ActionListFromEnum = /* @__PURE__ */ ((ActionListFromEnum2)=>{
    ActionListFromEnum2["project"] = "project";
    return ActionListFromEnum2;
})(ActionListFromEnum || {});
var TriggerOrActionListTypeEnum = /* @__PURE__ */ ((TriggerOrActionListTypeEnum2)=>{
    TriggerOrActionListTypeEnum2["addAction"] = "add";
    TriggerOrActionListTypeEnum2["updateAction"] = "update";
    return TriggerOrActionListTypeEnum2;
})(TriggerOrActionListTypeEnum || {});
function getTriggerOrActionListPageParams(params) {
    const project = storage/* projectStore */.D.findDraftOrSavedProject(params.projectId);
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
} //# sourceMappingURL=trigger-list-action-list-intf.js.map

;// ../../libs/droid/project-interface/dist/src/common/index.js








 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 55640:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/action-list/app-selector",
      function () {
        return __webpack_require__(91255);
      }
    ]);
    if(false) {}
  

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

/***/ 63305:
/***/ (() => {

"use strict";
 //# sourceMappingURL=IGroup.intf.js.map


/***/ }),

/***/ 68364:
/***/ (() => {

"use strict";
 //# sourceMappingURL=INameId.inft.js.map


/***/ }),

/***/ 73728:
/***/ (() => {

"use strict";
 //# sourceMappingURL=INameIDData.intf.js.map


/***/ }),

/***/ 74128:
/***/ (() => {

"use strict";
 //# sourceMappingURL=IPermission.data.js.map


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
                        children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Toolbar_Toolbar/* default */.A, {
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

/***/ 79355:
/***/ (() => {

"use strict";
 //# sourceMappingURL=INameContainer.js.map


/***/ }),

/***/ 91255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AppSelector)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../libs/app/static/dist/src/index.js
var src = __webpack_require__(6368);
// EXTERNAL MODULE: ../../libs/app/static/dist/src/utils/router-utils.js
var router_utils = __webpack_require__(1543);
// EXTERNAL MODULE: ../../libs/app/static/dist/src/storage/app-packages-store.js
var app_packages_store = __webpack_require__(92581);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/AutoWebViewJs.js + 1 modules
var AutoWebViewJs = __webpack_require__(17696);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/is-in-android.js
var is_in_android = __webpack_require__(40044);
;// ../../libs/droid/android/dist/src/android/scripts/readAllPackages.js

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



const script = "com.fanfanlo.droid.js.JsReceiver.readAllPackages();";
function readAllPackages() {
    let res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    const list = res.javaResultData || [];
    app_packages_store/* appPackagesStore */.I.savePackages(list);
    return list;
}
function mockReadAllPackages() {
    return __async(this, null, function*() {
        const list = [
            {
                label: "test",
                iconBase64: "test",
                packageName: "test"
            }
        ];
        const mockData = yield __webpack_require__.e(/* import() */ 1377).then(__webpack_require__.bind(__webpack_require__, 81377));
        app_packages_store/* appPackagesStore */.I.savePackages(mockData.readAllPackagesMockData);
        return mockData.readAllPackagesMockData;
    });
}
const readAllPackagesScript = {
    script,
    readAllPackages: is_in_android/* isRealInAndroid */.nd ? readAllPackages : mockReadAllPackages
}; //# sourceMappingURL=readAllPackages.js.map

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var dist_src = __webpack_require__(15463);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/throw-trace-error.js
var throw_trace_error = __webpack_require__(7886);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js
var proxyWatch = __webpack_require__(99759);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useProxyWatch.js
var useProxyWatch = __webpack_require__(82916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/Refresh.js
var Refresh = __webpack_require__(57597);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/Search.js
var Search = __webpack_require__(89598);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(20532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(55665);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/ListItem/ListItem.js + 4 modules
var ListItem = __webpack_require__(70754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Grid2/Grid2.js + 3 modules
var Grid2 = __webpack_require__(18057);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(14383);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Tabs/Tabs.js + 7 modules
var Tabs = __webpack_require__(55966);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(73409);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(17122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@11_pdm6rbm33hbobpxddqovt6fgli/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(14407);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(89017);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(59939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.1_@babel+core@7.26.0_babel-plugin-macros@3.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.82.0/node_modules/next/router.js
var next_router = __webpack_require__(79764);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/app/AppShell.js + 1 modules
var AppShell = __webpack_require__(42375);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/appbar/AppBar.js + 3 modules
var AppBar = __webpack_require__(77190);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/index.js
var project_interface_dist_src = __webpack_require__(46382);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/core/project-member-type.js
var project_member_type = __webpack_require__(9751);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/action/IAction.intf.js
var IAction_intf = __webpack_require__(6345);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/actions/app/action-open-app/IActionOpenApp.inft.js + 2 modules
var IActionOpenApp_inft = __webpack_require__(54501);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/events/projectEventUtils.js
var projectEventUtils = __webpack_require__(56964);
;// ./src/pages/action-list/app-selector/index.tsx













const storeName = 'app-selector';
const storage = dist_src.storeUtils.namespace(storeName);
const storeRecentlyPackageListKey = 'recentlyPackageList';
var TabEnum = /*#__PURE__*/ function(TabEnum) {
    TabEnum["all"] = "all";
    TabEnum["recently"] = "recently";
    return TabEnum;
}(TabEnum || {});
const PageContext = /*#__PURE__*/ (0,react.createContext)({
    packageList: [],
    showPackageList: [],
    recentlyPackageList: [],
    tab: "all",
    onPackageSelect: (packageInfo)=>{}
});
function useController() {
    const router = (0,next_router.useRouter)();
    const nowPath = router.pathname;
    function onPackageSelect(packageInfo) {
        addRecentlyPackage(packageInfo);
        handlePackageSelect(packageInfo);
    }
    function handlePackageSelect(packageInfo) {
        const query = router.query;
        switch(query.type){
            case src.ActionOrTriggerListTypeEnum.addAction:
                {
                    const res = (0,project_interface_dist_src.getTriggerOrActionListPageParams)(query);
                    if (!res.data.actionGroup) {
                        console.error('actionGroup is undefined query=', query, 'packageInfo=', packageInfo);
                        throw new Error('actionGroup is undefined');
                    }
                    if (!query.actionType) {
                        return (0,throw_trace_error/* throwTraceError */.w)("actionType is undefined query=".concat(query), query, packageInfo);
                    }
                    // const utils = ActionUtilsMap[query.actionType]
                    const utils = (0,IAction_intf/* getActionUtils */.e9)(query.actionType);
                    if (!utils) throw new Error("actionType ".concat(query.actionType, " is not found"));
                    const action = utils.createDefultData();
                    switch(query.actionType){
                        case IActionOpenApp_inft/* actionOpenAppUtils */.F.type:
                            action.javaData.packageName = packageInfo.packageName;
                            break;
                        default:
                            throw new Error("actionType ".concat(query.actionType, " is not found"));
                    }
                    // projectEventUtils.dispatchAddEvent(action.type, ProjectMemberType.actionGroup, action, res)
                    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
                        projectMemberType: project_member_type/* ProjectMemberType */.K.actionGroup,
                        data: action,
                        projectInfo: res.data
                    });
                    // res.data.actionGroup.list.push(action)
                    router_utils/* routerUtils */.V.checkToPath(router, nowPath, query.backPath, 2);
                    break;
                }
            case src.ActionOrTriggerListTypeEnum.updateAction:
                {
                    const res = (0,project_interface_dist_src.getTriggerOrActionListPageParams)(query);
                    console.log('res', res);
                    if (!res.data.actionGroup) {
                        console.error('actionGroup is undefined query=', query, 'packageInfo=', packageInfo);
                        throw new Error('actionGroup is undefined');
                    }
                    if (!res.data.action) {
                        console.error("action is undefined query= ", query, "packageinfo=", packageInfo);
                        throw new Error("action is undefined");
                    }
                    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.updateJavaData, {
                        projectMemberType: project_member_type/* ProjectMemberType */.K.action,
                        data: {
                            packageName: packageInfo.packageName
                        },
                        projectInfo: res.data
                    });
                    console.log('dispatch event232323456');
                    switch(query.actionType){
                        case IActionOpenApp_inft/* actionOpenAppUtils */.F.type:
                            // const action: IActionOpenAppData = res.data.action as IActionOpenAppData
                            // action.javaData.packageName = packageInfo.packageName
                            router.back();
                            break;
                        default:
                            throw new Error("actionType ".concat(query.actionType, " is not found"));
                    }
                    break;
                }
        }
    }
    function addRecentlyPackage(packageInfo) {
        const index = props.recentlyPackageList.findIndex((item)=>item.packageName === packageInfo.packageName);
        if (index !== -1) {
            props.recentlyPackageList.splice(index, 1);
        }
        props.recentlyPackageList.unshift(packageInfo);
        storage.write(storeRecentlyPackageListKey, props.recentlyPackageList);
    }
    const props = (0,proxyWatch/* toProxy */.I$)({
        packageList: [],
        showPackageList: [],
        recentlyPackageList: storage.read(storeRecentlyPackageListKey) || [],
        tab: "all",
        onPackageSelect
    });
    (0,proxyWatch/* proxyWatch */.kE)(props, 'tab', (v, old)=>{
        updateShowPackageList();
    });
    (0,proxyWatch/* proxyWatch */.kE)(props, 'searchKey', (v, old)=>{
        updateShowPackageList();
    });
    function updateShowPackageList() {
        props.showPackageList = [
            ...getShowPackageList()
        ];
    }
    function getTabShowPackageList() {
        if (props.tab === "all") {
            return props.packageList;
        } else if (props.tab === "recently") {
            return props.recentlyPackageList;
        }
        throw new Error("tab is not valid");
    }
    function getShowPackageList() {
        const list = getTabShowPackageList();
        if (props.searchKey) {
            return list.filter((item)=>item.label.includes(props.searchKey));
        }
        return list;
    }
    (0,proxyWatch/* proxyWatch */.kE)(props, 'searchKey', (v, old)=>{
        updateShowPackageList();
    });
    (0,proxyWatch/* proxyWatch */.kE)(app_packages_store/* appPackagesStore */.I.data, 'list', (v, old)=>{
        props.packageList = [
            ...app_packages_store/* appPackagesStore */.I.data.list
        ];
        updateShowPackageList();
    });
    (0,react.useEffect)(()=>{
        if (props.packageList.length > 0) return; //不为空则跳出
        app_packages_store/* appPackagesStore */.I.loadPackages() //从缓存读取
        ;
        if (app_packages_store/* appPackagesStore */.I.data.list.length > 0) return; //缓存不为空则跳出
        readAllPackagesScript.readAllPackages() //从安卓读取
        ;
    }, []);
    updateShowPackageList();
    return [
        props
    ];
}
function AppList() {
    const pageProps = (0,react.useContext)(PageContext);
    const [list] = (0,useProxyWatch/* useProxyWatch */.x)(pageProps, 'showPackageList', pageProps.showPackageList);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.A, {
            children: list.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.Ay, {
                    onClick: ()=>pageProps.onPackageSelect(item),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                        container: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                            size: "grow",
                            container: true,
                            "data-id": "app-selector-893f",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    width: 30,
                                    style: {
                                        borderRadius: '8px'
                                    },
                                    src: "data:image/gif;base64,".concat(item.iconBase64)
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.A, {
                                    primary: item.label
                                })
                            ]
                        })
                    })
                }, index))
        })
    });
}
function AccessibleTabs() {
    const [value, setValue] = (0,react.useState)(0);
    const { t } = (0,dist_src.useTranslation)("homepage/pages/action-list/app-selector/content");
    const handleChange = (event, newValue)=>{
        setValue(newValue);
        pageProps.tab = newValue === 0 ? "all" : "recently";
    };
    const pageProps = (0,react.useContext)(PageContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            width: '100%'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
            sx: {
                width: '100%'
            },
            onChange: handleChange,
            value: value,
            "aria-label": "Tabs where selection follows focus",
            selectionFollowsFocus: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.A, {
                    sx: {
                        width: '50%'
                    },
                    label: t("content.all")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.A, {
                    sx: {
                        width: '50%'
                    },
                    label: t("content.recently")
                })
            ]
        })
    });
}
const app_selector_Search = (0,styled/* default */.Ay)('div')((param)=>{
    let { theme } = param;
    return {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: (0,colorManipulator/* alpha */.X4)(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: (0,colorManipulator/* alpha */.X4)(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto'
        }
    };
});
const SearchIconWrapper = (0,styled/* default */.Ay)('div')((param)=>{
    let { theme } = param;
    return {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
});
const StyledInputBase = (0,styled/* default */.Ay)(InputBase/* default */.Ay)((param)=>{
    let { theme } = param;
    return {
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: "calc(1em + ".concat(theme.spacing(4), ")"),
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch'
                }
            }
        }
    };
});
function Title() {
    const { t } = (0,dist_src.useTranslation)("homepage/pages/action-list/app-selector/content");
    const pageProps = (0,react.useContext)(PageContext);
    function onSeachChange(e) {
        pageProps.searchKey = e.target.value;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
        container: true,
        width: "100%",
        justifyContent: "space-between",
        sx: {
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(app_selector_Search, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchIconWrapper, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Search/* default */.A, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInputBase, {
                            onChange: onSeachChange,
                            placeholder: t("content.searchPlaceholder"),
                            inputProps: {
                                'aria-label': 'search'
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.A, {
                    onClick: ()=>{
                        readAllPackagesScript.readAllPackages();
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* default */.A, {})
                })
            })
        ]
    });
}
function AppSelector() {
    const [props] = useController();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PageContext.Provider, {
            value: props,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(AppBar/* AppbarContainer */.W, {
                titleConf: {
                    ns: "homepage/pages/action-list/app-selector/content",
                    key: "content.title"
                },
                appbarProps: {
                    title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Title, {}),
                    back: true
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccessibleTabs, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AppList, {})
                ]
            })
        })
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [485,668,5389,8454,9080,1835,9850,8057,3986,636,6593,8792], () => (__webpack_exec__(55640)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=app-selector-9e977ae12cc550d5.js.map