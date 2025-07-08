"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8445],{

/***/ 14209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h4: () => (/* binding */ projectDataToUniqueId),
/* harmony export */   mR: () => (/* binding */ childToProjectDataUtils),
/* harmony export */   q_: () => (/* binding */ getActionGroupElement)
/* harmony export */ });
/* unused harmony exports getTriggerListByProp, getTriggerListElementByProp, getTriggerByProp, getTriggerElementByProp, getActionGroupByProp, getActionGroupElementByProp, getActionListByProp */
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83996);

function projectDataToUniqueId(data) {
    var _data_project, _data_triggerActionGroup, _data_triggerAction, _data_triggerGroup, _data_trigger, _data_trigger_javaData, _data_trigger1, _data_actionGroup, _data_action, _data_action_javaData, _data_action1;
    let s = "";
    function add(name, id) {
        if (id) s += "|".concat(name, ":").concat(id);
    }
    add('project', (_data_project = data.project) === null || _data_project === void 0 ? void 0 : _data_project.id);
    add('trigger-action-group', (_data_triggerActionGroup = data.triggerActionGroup) === null || _data_triggerActionGroup === void 0 ? void 0 : _data_triggerActionGroup.id);
    add('trigger-action', (_data_triggerAction = data.triggerAction) === null || _data_triggerAction === void 0 ? void 0 : _data_triggerAction.id);
    add('trigger-group', (_data_triggerGroup = data.triggerGroup) === null || _data_triggerGroup === void 0 ? void 0 : _data_triggerGroup.id);
    add('trigger', (_data_trigger = data.trigger) === null || _data_trigger === void 0 ? void 0 : _data_trigger.id);
    add('trigger-java-data', (_data_trigger1 = data.trigger) === null || _data_trigger1 === void 0 ? void 0 : (_data_trigger_javaData = _data_trigger1.javaData) === null || _data_trigger_javaData === void 0 ? void 0 : _data_trigger_javaData.id);
    add('action-group', (_data_actionGroup = data.actionGroup) === null || _data_actionGroup === void 0 ? void 0 : _data_actionGroup.id);
    add('action', (_data_action = data.action) === null || _data_action === void 0 ? void 0 : _data_action.id);
    add('action-java-data', (_data_action1 = data.action) === null || _data_action1 === void 0 ? void 0 : (_data_action_javaData = _data_action1.javaData) === null || _data_action_javaData === void 0 ? void 0 : _data_action_javaData.id);
    return s;
}
// project
function getProjectByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData) {
        projectData.project = data;
    }
    return data;
}
function getProjectElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getProjectByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// trigger action group
function getTriggerActionGroupByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.triggerActionGroup = data;
        getProjectByProp(data, projectData);
    }
    return data;
}
function getTriggerActionGroupElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getTriggerActionGroupByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
function getTriggerActionGroupElement(triggerActionGroup) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    projectData.triggerActionGroup = triggerActionGroup;
    getTriggerActionGroupByProp(triggerActionGroup.checks, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// trigger action list
function getTriggerActionListByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.triggerActionList = data;
        getTriggerActionGroupByProp(data, projectData);
    }
    return data;
}
function getTriggerActionListElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getTriggerActionListByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// trigger action
function getTriggerActionByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.triggerAction = data;
        getTriggerActionListByProp(data, projectData);
    }
    return data;
}
function getTriggerActionElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getTriggerActionByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// trigger group
function getTriggerGroupByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.triggerGroup = data;
        getTriggerActionByProp(data, projectData);
    }
    return data;
}
function getTriggerGroupElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getTriggerGroupByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
function getTriggerGroupElement(triggerGroup) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    projectData.triggerGroup = triggerGroup;
    getTriggerGroupByProp(triggerGroup.list, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// trigger list
function getTriggerListByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.triggerList = data;
        getTriggerGroupByProp(data, projectData);
    }
    return data;
}
function getTriggerListElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getTriggerListByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// trigger
function getTriggerByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.trigger = data;
        getTriggerListByProp(data, projectData);
    }
    return data;
}
function getTriggerElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getTriggerByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// 得想办法让它在数据不正确时报错才行
// getTriggerByProp({shellData:{}})
// getTriggerByProp({javaData:{}})
// getTriggerByProp(3)
// action group
function getActionGroupByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.actionGroup = data;
        getTriggerActionByProp(data, projectData);
    }
    return data;
}
function getActionGroupElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getActionGroupByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
function getActionGroupElement(actionGroup) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    projectData.actionGroup = actionGroup;
    getTriggerActionByProp(actionGroup, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// action list
function getActionListByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.actionList = data;
        getActionGroupByProp(data, projectData);
    }
    return data;
}
function getActionListElementByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getActionListByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
// action
function getActionByProp(prop, projectData) {
    const data = prop ? (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .getParent */ .PA)(prop) : undefined;
    if (projectData && data) {
        projectData.action = data;
        getActionListByProp(data, projectData);
    }
    return data;
}
function getActionElementIdByProp(prop) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', projectData = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    getActionByProp(prop, projectData);
    return getProjectElementsId(projectData, prefix, suffix);
}
function getProjectElementsId(childData) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', suffix = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '';
    var _childData_project, _childData_project1, _childData_triggerActionGroup, _childData_triggerActionGroup1, _childData_triggerAction, _childData_triggerAction1, _childData_triggerGroup, _childData_triggerGroup1, _childData_trigger, _childData_trigger1, _childData_actionGroup, _childData_actionGroup1, _childData_action, _childData_action1;
    return {
        ["data-groupof".concat(prefix ? '-' + prefix : '', "-project-id").concat(suffix ? '-' + suffix : '')]: (_childData_project = childData.project) === null || _childData_project === void 0 ? void 0 : _childData_project.id,
        ["data-project-id"]: (_childData_project1 = childData.project) === null || _childData_project1 === void 0 ? void 0 : _childData_project1.id,
        ["data-groupof".concat(prefix ? '-' + prefix : '', "-trigger-action-group-id").concat(suffix ? '-' + suffix : '')]: (_childData_triggerActionGroup = childData.triggerActionGroup) === null || _childData_triggerActionGroup === void 0 ? void 0 : _childData_triggerActionGroup.id,
        ["data-trigger-action-group-id"]: (_childData_triggerActionGroup1 = childData.triggerActionGroup) === null || _childData_triggerActionGroup1 === void 0 ? void 0 : _childData_triggerActionGroup1.id,
        ["data-groupof".concat(prefix ? '-' + prefix : '', "-trigger-action-id").concat(suffix ? '-' + suffix : '')]: (_childData_triggerAction = childData.triggerAction) === null || _childData_triggerAction === void 0 ? void 0 : _childData_triggerAction.id,
        ["data-trigger-action-id"]: (_childData_triggerAction1 = childData.triggerAction) === null || _childData_triggerAction1 === void 0 ? void 0 : _childData_triggerAction1.id,
        ["data-groupof".concat(prefix ? '-' + prefix : '', "-trigger-group-id").concat(suffix ? '-' + suffix : '')]: (_childData_triggerGroup = childData.triggerGroup) === null || _childData_triggerGroup === void 0 ? void 0 : _childData_triggerGroup.id,
        ["data-trigger-group-id"]: (_childData_triggerGroup1 = childData.triggerGroup) === null || _childData_triggerGroup1 === void 0 ? void 0 : _childData_triggerGroup1.id,
        ["data-groupof".concat(prefix ? '-' + prefix : '', "-trigger-id").concat(suffix ? '-' + suffix : '')]: (_childData_trigger = childData.trigger) === null || _childData_trigger === void 0 ? void 0 : _childData_trigger.id,
        ["data-trigger-id"]: (_childData_trigger1 = childData.trigger) === null || _childData_trigger1 === void 0 ? void 0 : _childData_trigger1.id,
        ["data-groupof".concat(prefix ? '-' + prefix : '', "-action-group-id").concat(suffix ? '-' + suffix : '')]: (_childData_actionGroup = childData.actionGroup) === null || _childData_actionGroup === void 0 ? void 0 : _childData_actionGroup.id,
        ["data-action-group-id"]: (_childData_actionGroup1 = childData.actionGroup) === null || _childData_actionGroup1 === void 0 ? void 0 : _childData_actionGroup1.id,
        ["data-groupof".concat(prefix ? '-' + prefix : '', "-action-id").concat(suffix ? '-' + suffix : '')]: (_childData_action = childData.action) === null || _childData_action === void 0 ? void 0 : _childData_action.id,
        ["data-action-id"]: (_childData_action1 = childData.action) === null || _childData_action1 === void 0 ? void 0 : _childData_action1.id
    };
}
const childToProjectDataUtils = {
    project: {
        getProjectByProp,
        getProjectElementByProp
    },
    triggerActionGroup: {
        getTriggerActionGroupByProp,
        getTriggerActionGroupElementByProp,
        getTriggerActionGroupElement
    },
    triggerActionList: {
        getTriggerActionListByProp,
        getTriggerActionListElementByProp
    },
    triggerAction: {
        getTriggerActionByProp,
        getTriggerActionElementByProp
    },
    triggerGroup: {
        getTriggerGroupByProp,
        getTriggerGroupElementByProp,
        getTriggerGroupElement
    },
    trigger: {
        getTriggerByProp,
        getTriggerElementByProp
    },
    triggerList: {
        getTriggerListByProp,
        getTriggerListElementByProp
    },
    actionGroup: {
        getActionGroupByProp,
        getActionGroupElementByProp,
        getActionGroupElement
    },
    actionList: {
        getActionListByProp,
        getActionListElementByProp
    },
    action: {
        getActionByProp,
        getActionElementIdByProp
    },
    getProjectElementsId
};


/***/ }),

/***/ 22369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XR: () => (/* binding */ mergeTriggerActionGroupToDefultData),
/* harmony export */   eT: () => (/* binding */ createDefultTriggerActionGroup)
/* harmony export */ });
/* unused harmony export triggerActionGroupType */
/* harmony import */ var _barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67131);
/* harmony import */ var _trigger_action_ITriggerAction_intf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73849);
/* harmony import */ var _utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82713);



const triggerActionGroupType = 'triggerActionGroup';
function createDefultTriggerActionGroup() {
    return {
        type: triggerActionGroupType,
        id: (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__/* .ulid */ .Z0)(),
        name: '',
        list: [
            (0,_trigger_action_ITriggerAction_intf__WEBPACK_IMPORTED_MODULE_1__/* .createDefultTriggerAction */ .n)()
        ],
        checks: [
            [
                true
            ]
        ],
        isSequential: true
    };
}
function mergeTriggerActionGroupToDefultData(data) {
    return (0,_utils_mergeToDefaultData__WEBPACK_IMPORTED_MODULE_2__/* .mergeToDefaultData */ .rM)(createDefultTriggerActionGroup, data);
}


/***/ }),

/***/ 31232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ projectStore)
/* harmony export */ });
/* unused harmony export s */
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28995);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46301);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45799);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87041);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73675);
/* harmony import */ var _trigger_action___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22369);




const s = _fanfanlo__WEBPACK_IMPORTED_MODULE_1__.storeUtils.namespace('project');
const listName = 'list';
const draftName = 'draft';
function loadProjectList() {
    let list = s.read(listName);
    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(list) || !list) list = [];
    const res = prepareProjectList(list);
    return res;
}
function loadDraft() {
    let list = s.read(draftName);
    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(list) || !list) list = [];
    const res = prepareProjectList(list);
    return res;
}
function prepareProjectList(list) {
    return list.map((p)=>{
        if (!p.triggerActionGroup) p.triggerActionGroup = (0,_trigger_action___WEBPACK_IMPORTED_MODULE_2__/* .createDefultTriggerActionGroup */ .eT)();
        return lodash__WEBPACK_IMPORTED_MODULE_0___default().merge((0,_project__WEBPACK_IMPORTED_MODULE_3__/* .createProjectDefultData */ .k)(), p);
    });
}
const list = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_4__/* .toParentWatchProxy */ .Lr)(loadProjectList());
const draft = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_4__/* .toParentWatchProxy */ .Lr)(loadDraft());
function printList() {
    console.log('storage initialize list=', objectCountUtils.getObjectCount(list), list);
    list.forEach((p, index)=>{
        console.log('storage initialize list item=', objectCountUtils.getObjectCount(p), 'index=', index, 'p=', p, 'isproxy=', isProxy(p));
    });
}
// printList()
function printDraft() {
    console.log('storage initialize draft=', objectCountUtils.getObjectCount(draft), draft);
    draft.forEach((p, index)=>{
        console.log('storage initialize draft item=', objectCountUtils.getObjectCount(p), 'index=', index, 'p=', p, 'isproxy=', isProxy(p));
    });
}
// printDraft()
function init() {
    (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .watchUpdates */ .c)(list, ()=>{
        s.write(listName, list, true);
    // console.log('list changed', list)
    // printList()
    });
    (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_5__/* .watchUpdates */ .c)(draft, ()=>{
        _fanfanlo__WEBPACK_IMPORTED_MODULE_6__/* .proxyUtils */ .o.runPauseProxyFn(()=>{
            s.write(draftName, draft, true);
        // console.log('draft changed', draft)
        });
    // printDraft()
    });
}
function saveProject(project) {
    const copy = lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(project);
    let index = list.findIndex((p)=>p.id === copy.id);
    if (index === -1) index = list.length;
    list[index] = copy;
// let draftIndex = draft.findIndex(p=>p.id === copy.id)
// if(draftIndex > -1){
//     draft.splice(draftIndex, 1)
// }
}
function findSavedProject(id) {
    return list.find((p)=>p.id == id);
}
function findProject(id) {
    return list.find((p)=>p.id == id) || draft.find((p)=>p.id == id);
}
function findDraftOrSavedProject(id) {
    return draft.find((p)=>p.id == id) || list.find((p)=>p.id == id);
}
function deleteProject(id) {
    let index = list.findIndex((p)=>p.id === id);
    if (index !== -1) list.splice(index, 1);
    s.write(listName, list, true);
    deleteDraft(id);
}
function addDraft(project) {
    const p = _fanfanlo__WEBPACK_IMPORTED_MODULE_6__/* .proxyUtils */ .o.runPauseProxyFn(()=>{
        return lodash__WEBPACK_IMPORTED_MODULE_0___default().cloneDeep(project);
    });
    let index = draft.findIndex((p)=>p.id === project.id);
    if (index == -1) index = draft.length;
    draft[index] = p;
    return draft[index];
}
function deleteDraft(id) {
    let index = draft.findIndex((p)=>p.id === id);
    if (index !== -1) draft.splice(index, 1);
    s.write(draftName, draft, true);
}
function getListCopy() {
    const res = [
        ...list
    ];
    return res;
}
function getDraftCopy() {
    return [
        ...draft
    ];
}
const projectStore = {
    list,
    init,
    saveProject,
    findProject,
    deleteProject,
    addDraft,
    deleteDraft,
    draft,
    getListCopy,
    getDraftCopy,
    findDraftOrSavedProject,
    findSavedProject
};
if (true) {
    window.getProjectStore = function() {
        return projectStore;
    };
    window.showA = function(s) {
        alert(s || 'hello');
    };
}


/***/ }),

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

/***/ 73675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ mergeProjectDataToDefultData),
/* harmony export */   k: () => (/* binding */ createProjectDefultData)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67131);
/* harmony import */ var _trigger_action_ITriggerActionGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22369);



// interface IP{
//     name?:string
//     triggerActionGroup:ITriggerActionGroup  
// }
// type A = ExtractedObjectTypeValues<IP>
// let a:A = 'a'
function createProjectDefultData() {
    // console.trace('ppppppppproject createProjectDefultData')
    return {
        type: 'project',
        id: (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_1__/* .ulid */ .Z0)(),
        triggerActionGroup: (0,_trigger_action_ITriggerActionGroup__WEBPACK_IMPORTED_MODULE_2__/* .createDefultTriggerActionGroup */ .eT)()
    };
}
function mergeProjectDataToDefultData(data) {
    const result = lodash__WEBPACK_IMPORTED_MODULE_0___default().merge(createProjectDefultData(), data);
    result.triggerActionGroup = (0,_trigger_action_ITriggerActionGroup__WEBPACK_IMPORTED_MODULE_2__/* .mergeTriggerActionGroupToDefultData */ .XR)(result.triggerActionGroup);
    return result;
}


/***/ }),

/***/ 73849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ createDefultTriggerAction)
});

// UNUSED EXPORTS: createTriggerActionUtils

// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.4.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(67131);
// EXTERNAL MODULE: ../../libs/droid/project-interface/src/utils/mergeToDefaultData.ts
var mergeToDefaultData = __webpack_require__(82713);
;// ../../libs/droid/project-interface/src/action/IActionGroup.intf.ts


const actionGroupType = 'actionGroup';
function createDefultData() {
    return {
        type: actionGroupType,
        id: (0,index_esm/* ulid */.Z0)(),
        list: [],
        checks: [],
        isSequential: true
    };
}
const actionGroupUtils = {
    type: actionGroupType,
    createDefultData,
    mergeDataToDefultData: (0,mergeToDefaultData/* createMergeToDefaultData */.dV)(createDefultData)
};

;// ../../libs/droid/project-interface/src/trigger/ITriggerGroup.intf.ts


const triggerGroupType = 'triggerGroup';
function ITriggerGroup_intf_createDefultData() {
    return {
        type: triggerGroupType,
        id: (0,index_esm/* ulid */.Z0)(),
        list: [],
        checks: [],
        isSequential: true
    };
}
const triggerGroupUtils = {
    type: triggerGroupType,
    createDefultData: ITriggerGroup_intf_createDefultData,
    mergeDataToDefultData: (0,mergeToDefaultData/* createMergeToDefaultData */.dV)(ITriggerGroup_intf_createDefultData)
};

;// ../../libs/droid/project-interface/src/trigger-action/ITriggerAction.intf.ts




function createDefultTriggerAction() {
    return {
        type: 'triggerAction',
        id: (0,index_esm/* ulid */.Z0)(),
        name: '',
        triggerGroup: triggerGroupUtils.createDefultData(),
        actionGroup: actionGroupUtils.createDefultData()
    };
}
function createTriggerActionUtils(type, createDefultData) {
    return {
        type,
        createDefultData,
        mergeDataToDefultData: createMergeToDefaultData(createDefultData)
    };
}


/***/ }),

/***/ 82713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dV: () => (/* binding */ createMergeToDefaultData),
/* harmony export */   rM: () => (/* binding */ mergeToDefaultData),
/* harmony export */   zI: () => (/* binding */ mergeDataWith)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63624);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function mergeToDefaultData(createDefaultData, data) {
    // const res = _.mergeWith(createDefaultData(),data, (a,b)=>{
    //     if(_.isArray(a) && _.isArray(b)){
    //         return b
    //     }
    // })
    // return res
    return mergeDataWith(createDefaultData(), data);
}
function mergeDataWith(dist, src) {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default().mergeWith(dist, src, (a, b)=>{
        if (lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(a) && lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(b)) {
            return b;
        }
    });
}
function createMergeToDefaultData(createDefaultData) {
    return (data)=>mergeToDefaultData(createDefaultData, data);
}


/***/ })

}]);
//# sourceMappingURL=8445-82ff89cf62a70b45.js.map