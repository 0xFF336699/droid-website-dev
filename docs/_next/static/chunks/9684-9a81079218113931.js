(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9684],{

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

/***/ 5782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ TabbarContainer)
/* harmony export */ });
/* unused harmony export NavBar */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33736);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31453);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45054);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2625);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46925);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23114);
/* harmony import */ var _barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97721);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76654);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90228);
/* harmony import */ var _mui_icons_material_Storefront__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54497);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79764);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61182);
/* harmony import */ var _page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55960);
/* harmony import */ var _mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48249);
/* __next_internal_client_entry_do_not_use__ NavBar,TabbarContainer auto */ 









function BottomBar() {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        id: "bottom-navigation",
        sx: {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0
        },
        elevation: 3,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NavBar, {})
    });
}
function NavBar() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { pathname } = router;
    const { t } = (0,_barrel_optimize_names_useTranslation_react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .Bd)("app-ui/components/tabbar/content");
    const tabInfoList = [
        {
            label: t("content.home"),
            value: "/",
            icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {})
        },
        {
            label: t("content.create"),
            value: "/script-creator",
            icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {})
        },
        {
            label: t("content.market"),
            value: "/market",
            icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Storefront__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {})
        },
        {
            label: t("content.settings"),
            value: "/settings",
            icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {})
        }
    ];
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        showLabels: true,
        value: pathname,
        children: tabInfoList.map((e)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
                label: e.label,
                icon: e.icon,
                "data-id": "tabbar-".concat(e.value),
                className: pathname === e.value ? "Mui-selected" : "",
                onClick: ()=>{
                    if (pathname === e.value) return;
                    router.push(e.value);
                }
            }, e.value))
    });
}
function TabbarContainer(param) {
    let { children, titleConf } = param;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
        sx: {
            display: "flex",
            flexDirection: "column",
            height: "100vh"
        },
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay, {}),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_BottomNavigation_BottomNavigationAction_Box_CssBaseline_Paper_Stack_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                direction: "column",
                spacing: 3,
                children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_page_AndroidPageContent__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                        titleConf,
                        children
                    }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BottomBar, {})
                ]
            })
        ]
    });
} //# sourceMappingURL=Tabbar.js.map


/***/ }),

/***/ 6076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ getMarketDevSocketSettingData)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15463);

async function createDefSocketSettingData() {
    const data = {
        keepConnect: false,
        url: ""
    };
    const res = await _fanfanlo__WEBPACK_IMPORTED_MODULE_0__.storeUtils.getNamespaceStoreWithData('market-dev-socket-setting', {
        defData: data
    });
    return res.data;
}
async function getMarketDevSocketSettingData() {
    return await createDefSocketSettingData();
}


/***/ }),

/***/ 11555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ marketsDevScriptLib)
/* harmony export */ });
/* harmony import */ var _droid_android__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26438);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99759);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15463);
/* harmony import */ var _market_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17084);
/* harmony import */ var _market_dev_socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75444);




// 注意marketDevLibData的操作是由devLibInfo来做的
// 一定保持它俩操作的对象是同一个。
const marketDevLibData = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .toProxy */ .I$)({});
let devLibInfo;
// = storeUtils.getNamespaceStoreWithData('devLibInfo', {defData:{}, forceReset:false});
function getMarketScriptDataNsPrefix() {
    return 'market-script-data';
}
function createMarketScriptDataNsPath(ns) {
    return "".concat(getMarketScriptDataNsPrefix(), "/").concat(ns);
}
async function writeNsAllFiles(ns, files) {
    const nsPath = createMarketScriptDataNsPath(ns);
    const oldFiles = _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoJsStoreUtils */ .b.read(nsPath) || [];
    for (const name of Object.keys(files)){
        const index = oldFiles.indexOf(name);
        if (index > -1) {
            oldFiles.splice(index, 1);
        }
        const content = files[name];
        _droid_android__WEBPACK_IMPORTED_MODULE_2__/* .autoJsStoreUtils */ .b.write("".concat(nsPath, "/").concat(name), content);
    }
    for (const name of oldFiles){
        removeFile("".concat(nsPath, "/").concat(name));
    }
}
function writeFile(name, content) {}
function readNsAllFiles(ns) {}
function readFile(name) {}
function removeFile(name) {}
function getAllMarkets() {}
function listenDev() {
    _market_dev_socket__WEBPACK_IMPORTED_MODULE_0__/* .marketsDevSocket */ .O.dispatcher.addListener(_market_lib__WEBPACK_IMPORTED_MODULE_3__/* .IMarketDevConnectEventType */ .Dl.getAllScripts, onGetAllScript);
    _market_dev_socket__WEBPACK_IMPORTED_MODULE_0__/* .marketsDevSocket */ .O.dispatcher.addListener(_market_lib__WEBPACK_IMPORTED_MODULE_3__/* .IMarketDevServerEventType */ .GC.update, onFileUpdate);
}
function onGetAllScript(data) {
    // console.log('onGetAllScript=2', data)
    // console.log('devLibInfo.data=', devLibInfo.data)
    devLibInfo.data.allMarketLibData = data;
    // 转为已经代理过的对象
    marketDevLibData.allMarketLibData = devLibInfo.data.allMarketLibData;
// console.log('from onGetAllScript look look id', objectCountUtils.getObjectCount(devLibInfo.data.allMarketLibData.resources))
}
function onFileUpdate(data) {
    if (data.client.resourceType == _market_lib__WEBPACK_IMPORTED_MODULE_3__/* .WatchResourceType */ .um.Html) {
        if (!devLibInfo.data.allMarketLibData) return;
        for (const html of devLibInfo.data.allMarketLibData.htmls){
            if (html.client.path == data.client.path) {
                html.content = data.content;
                return;
            }
        }
    } else if (data.client.resourceType == _market_lib__WEBPACK_IMPORTED_MODULE_3__/* .WatchResourceType */ .um.Js) {
        if (!devLibInfo.data.allMarketLibData) return;
        for(let index = 0; index < devLibInfo.data.allMarketLibData.resources.length; index++){
            const script = devLibInfo.data.allMarketLibData.resources[index];
            if (script.client.path == data.client.path) {
                devLibInfo.data.allMarketLibData.resources[index] = data;
                console.log('market script dev scripts update script', data);
                // devLibInfo.data.allMarketLibData.resources = [...devLibInfo.data.allMarketLibData.resources];
                // console.log('update data', data);
                // console.log('look look id', objectCountUtils.getObjectCount(devLibInfo.data.allMarketLibData.resources), devLibInfo.data.allMarketLibData.resources)
                return;
            }
        }
    } else {
    // unknown resource type
    }
}
let isInitialized = false;
async function init() {
    if (isInitialized) {
        return;
    }
    isInitialized = true;
    listenDev();
    devLibInfo = await _fanfanlo__WEBPACK_IMPORTED_MODULE_4__.storeUtils.getNamespaceStoreWithData('devLibInfo', {
        defData: {},
        forceReset: false
    });
    marketDevLibData.allMarketLibData = devLibInfo.data.allMarketLibData;
}
const marketsDevScriptLib = {
    writeFile,
    readFile,
    writeNsAllFiles,
    readNsAllFiles,
    getAllMarkets,
    init,
    marketDevLibData
};


/***/ }),

/***/ 17084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dl: () => (/* binding */ IMarketDevConnectEventType),
/* harmony export */   GC: () => (/* binding */ IMarketDevServerEventType),
/* harmony export */   um: () => (/* binding */ WatchResourceType)
/* harmony export */ });
/* unused harmony exports ScriptType, IMarketDevClientEmitEventType */

var ScriptType = /* @__PURE__ */ ((ScriptType2)=>{
    ScriptType2["Script"] = "script";
    ScriptType2["Market"] = "market";
    return ScriptType2;
})(ScriptType || {});
var WatchResourceType = /* @__PURE__ */ ((WatchResourceType2)=>{
    WatchResourceType2["Js"] = "js";
    WatchResourceType2["Html"] = "html";
    return WatchResourceType2;
})(WatchResourceType || {});
var IMarketDevConnectEventType = /* @__PURE__ */ ((IMarketDevConnectEventType2)=>{
    IMarketDevConnectEventType2["getAllScripts"] = "getAllScripts";
    return IMarketDevConnectEventType2;
})(IMarketDevConnectEventType || {});
var IMarketDevClientEmitEventType = /* @__PURE__ */ ((IMarketDevClientEmitEventType2)=>{
    IMarketDevClientEmitEventType2["init"] = "init";
    return IMarketDevClientEmitEventType2;
})(IMarketDevClientEmitEventType || {});
var IMarketDevServerEventType = /* @__PURE__ */ ((IMarketDevServerEventType2)=>{
    IMarketDevServerEventType2["update"] = "update";
    return IMarketDevServerEventType2;
})(IMarketDevServerEventType || {}); //# sourceMappingURL=market.intf.js.map


/***/ }),

/***/ 29566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Manifest: () => (/* reexport safe */ _components___WEBPACK_IMPORTED_MODULE_0__.Manifest)
/* harmony export */ });
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49689);










 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 41646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _android___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29566);
/* harmony reexport (checked) */ if(__webpack_require__.o(_android___WEBPACK_IMPORTED_MODULE_0__, "Manifest")) __webpack_require__.d(__webpack_exports__, { Manifest: function() { return _android___WEBPACK_IMPORTED_MODULE_0__.Manifest; } });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51664);
/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_1__, "Manifest")) __webpack_require__.d(__webpack_exports__, { Manifest: function() { return _types__WEBPACK_IMPORTED_MODULE_1__.Manifest; } });





 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 49684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/app/AppShell.js + 1 modules
var AppShell = __webpack_require__(42375);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/tabbar/Tabbar.js
var Tabbar = __webpack_require__(5782);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/storage/storage.js
var storage = __webpack_require__(53081);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/watchUpdates.js
var watcher_watchUpdates = __webpack_require__(28523);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(48592);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/ListItem/ListItem.js + 6 modules
var ListItem = __webpack_require__(59234);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(46925);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: __barrel_optimize__?names=useTranslation!=!../../node_modules/.pnpm/react-i18next@15.1.4_i18next@24.1.0_typescript@5.8.2__react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-i18next/dist/es/index.js
var es = __webpack_require__(61182);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/project/IProject.data.js
var IProject_data = __webpack_require__(32322);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(29800);
// EXTERNAL MODULE: ../../node_modules/.pnpm/next@15.3.1_@babel+core@7.26.0_babel-plugin-macros@3.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.82.0/node_modules/next/router.js
var next_router = __webpack_require__(79764);
;// ../../libs/droid/project/dist/src/project/ui/components/CreateProjectButton.js

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





const CreateProjectButton = ()=>{
    const { t } = (0,es/* useTranslation */.Bd)("droid-project/project/ui/components/content");
    const router = (0,next_router.useRouter)();
    function onCreateProjectClick() {
        return __async(this, null, function*() {
            const project = (0,IProject_data/* createProjectDefultData */.k)();
            storage/* projectStore */.D.addDraft(project);
            const path = "/project-editor?id=".concat(project.id);
            yield router.prefetch(path);
            router.push(path);
        });
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* default */.A, {
            "data-id": "create-project-button.b79975b3-cc10-4e3e-bc05-478a98c925b5",
            "data-typeof-create-project-id": "create-project-btn-from-ui-components-create-project-button",
            id: "typeof-create-project-id-create-project-btn-from-ui-components-create-project-button",
            onClick: onCreateProjectClick,
            children: t("content.create")
        })
    });
}; //# sourceMappingURL=CreateProjectButton.js.map

// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/utils/IChildToProject.intf.js
var IChildToProject_intf = __webpack_require__(16178);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/index.js
var src = __webpack_require__(46382);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Grid2/Grid2.js + 3 modules
var Grid2 = __webpack_require__(69859);
;// ../../libs/droid/project/dist/src/project/utils/projectUtils.js

const projectUtils = {
    getProjectName: (project)=>{
        return (project == null ? void 0 : project.localName) || (project == null ? void 0 : project.name) || (project == null ? void 0 : project.id.slice((project == null ? void 0 : project.id.length) - 8)) || "";
    }
}; //# sourceMappingURL=projectUtils.js.map

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/mui/dialog/ButtonConfirm.js
var ButtonConfirm = __webpack_require__(80948);
;// ../../libs/droid/project/dist/src/project/ui/components/DeleteProjectButton.js







function DeleteProjectButton() {
    const { t } = (0,es/* useTranslation */.Bd)("droid-project/project/ui/components/content");
    const project = (0,react.useContext)(src.ProjectContext);
    const projectId = project.id;
    const handleDelete = ()=>{
        storage/* projectStore */.D.deleteProject(projectId);
    };
    const content = /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        style: {
            textAlign: "center"
        },
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {
                style: {
                    color: "#FF0000"
                },
                children: project.name
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsx)("br", {}),
            /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {
                children: t("content.confirmDelete")
            })
        ]
    });
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ButtonConfirm/* ButtonConfirm */.b, {
            title: t("content.title"),
            content,
            onConfirm: handleDelete,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* default */.A, {
                id: "project-simple-title-list-del-btn",
                "data-id": "project-simple-title-list-del-btn",
                children: t("content.delete")
            })
        })
    });
} //# sourceMappingURL=DeleteProjectButton.js.map

;// ../../libs/droid/project/dist/src/project/ui/project/ProjectUI.js

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







function ProjectName(param) {
    let { project } = param;
    const router = (0,next_router.useRouter)();
    const { t } = (0,es/* useTranslation */.Bd)("droid-project/project/ui/project/content");
    function edit() {
        const path = "/project-editor?id=".concat(project.id);
        router.push(path, void 0, {
            shallow: true
        });
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
        container: true,
        spacing: 2,
        sx: {
            width: "100%"
        },
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                size: "grow",
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {
                    children: projectUtils.getProjectName(project)
                })
            }),
            /* @__PURE__ */ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
                container: true,
                spacing: 2,
                children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(Button/* default */.A, __spreadProps(__spreadValues({}, IChildToProject_intf/* childToProjectDataUtils */.mR.getProjectElementsId({
                        project
                    }, "project-list-edit-btn")), {
                        "data-listof-project-list-edit-btn-id": project.id,
                        id: "project-simple-title-list-edit-btn",
                        "data-id": "project-simple-title-list-edit-btn",
                        onClick: edit,
                        children: t("content.project.edit")
                    })),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(DeleteProjectButton, {})
                ]
            })
        ]
    });
}
function ProjectUI(param) {
    let { project } = param;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(src.ProjectContext.Provider, {
        value: project,
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, __spreadProps(__spreadValues({
            sx: {
                width: "100%",
                backgroundColor: "#f0f0f0",
                padding: 1
            },
            "data-id": project.id
        }, IChildToProject_intf/* childToProjectDataUtils */.mR.getProjectElementsId({
            project
        })), {
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ProjectName, {
                project
            })
        }))
    });
} //# sourceMappingURL=ProjectUI.js.map

;// ../../libs/droid/project/dist/src/project/ui/projects/ProjectsInfoItemUI.js









function ProjectsTitle() {
    const { t } = (0,es/* useTranslation */.Bd)("droid-project/project/ui/projects/content");
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", {
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)("h4", {
            children: t("content.projects")
        })
    });
}
function ProjectList(param) {
    let { projects } = param;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(List/* default */.A, {
        sx: {
            width: "100%"
        },
        children: projects.length > 0 && projects.map((project)=>/* @__PURE__ */ (0,jsx_runtime.jsx)(ListItem/* default */.Ay, {
                sx: {
                    width: "100%"
                },
                children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ProjectUI, {
                    project
                }, project.id)
            }, project.id))
    });
}
function Projects() {
    const { t } = (0,es/* useTranslation */.Bd)("droid-project/project/ui/projects/content");
    const [projects, setProjects] = (0,react.useState)(storage/* projectStore */.D.getListCopy());
    (0,react.useEffect)(()=>{
        const unsub = (0,watcher_watchUpdates/* watchUpdates */.c)(storage/* projectStore */.D.list, ()=>{
            setProjects(storage/* projectStore */.D.getListCopy());
        });
        return ()=>{
            unsub();
        };
    }, []);
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(CreateProjectButton, {}),
            projects.length == 0 && /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* default */.A, {
                children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                    children: [
                        /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {
                            children: t("content.noProjects")
                        }),
                        /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {
                            children: t("content.orFindFromMarket")
                        })
                    ]
                })
            }),
            projects.length > 0 && /* @__PURE__ */ (0,jsx_runtime.jsx)(ProjectList, {
                projects
            })
        ]
    });
}
function ProjectsUI() {
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        children: [
            /* @__PURE__ */ (0,jsx_runtime.jsx)(ProjectsTitle, {}),
            /* @__PURE__ */ (0,jsx_runtime.jsx)(Projects, {})
        ]
    });
} //# sourceMappingURL=ProjectsInfoItemUI.js.map

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var dist_src = __webpack_require__(15463);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/nextjs/env/env.js
var env = __webpack_require__(91839);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/iframe/IFrameReactContainer.js + 1 modules
var IFrameReactContainer = __webpack_require__(5828);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Box/Box.js + 2 modules
var Box_Box = __webpack_require__(20532);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/AutoWebViewJs.js + 1 modules
var AutoWebViewJs = __webpack_require__(17696);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/androidDispatchers.js
var androidDispatchers = __webpack_require__(17385);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/htmls/accessibility-info-buttons/accessibility-info-buttons.js
var accessibility_info_buttons = __webpack_require__(712);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js
var proxyWatch = __webpack_require__(99759);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useProxyWatch.js
var useProxyWatch = __webpack_require__(82916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Button/Button.js + 3 modules
var Button_Button = __webpack_require__(53853);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.3.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(82131);
;// ./src/components/a11y/open-a11y-node-button.tsx





const data = (0,proxyWatch/* toProxy */.I$)({
    opened: false
});
async function onClick() {
    if (data.opened) return;
    const eventType = "a11yNodeSelectActionItem";
    const selectEventIndex = AutoWebViewJs/* autoWebViewJs */.yx.shellListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, eventType, eventType, false, onSelectNode);
    function onSelectNode(s) {
        clear();
        AutoWebViewJs/* autoWebViewJs */.yx.clipboardSetText(s);
    // const info: IA11yNodeInfo = JSON.parse(s)
    // console.log('fffffffffffffff', s)
    }
    function clear() {
        data.opened = false;
        console.log('ccccccccccclear');
        AutoWebViewJs/* autoWebViewJs */.yx.shellRemoveListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, selectEventIndex);
        AutoWebViewJs/* autoWebViewJs */.yx.shellRemoveListen(androidDispatchers/* androidDispatchers */.m.Window.name, exitWindowIndex);
        if (exitWebviewJsIndex) {
            AutoWebViewJs/* autoWebViewJs */.yx.removeListen(androidDispatchers/* androidDispatchers */.m.Window.name, parseInt(exitWebviewJsIndex));
        }
    }
    const windowId = (0,index_esm/* ulid */.Z0)();
    (0,accessibility_info_buttons/* openHtmlShowA11yNodeInfoButton */.d)(eventType, windowId);
    data.opened = true;
    const et = "window-".concat(windowId, "-dismiss");
    const { javaResultString: exitWebviewJsIndex, errMsg } = AutoWebViewJs/* autoWebViewJs */.yx.listen(androidDispatchers/* androidDispatchers */.m.Window.name, et, et, true);
    if (errMsg) {
        throw new Error(errMsg);
    }
    const exitWindowIndex = AutoWebViewJs/* autoWebViewJs */.yx.shellListen(androidDispatchers/* androidDispatchers */.m.Window.name, et, et, true, ()=>{
        clear();
    });
}
function OpenA11yNodeButton() {
    const { t } = (0,dist_src.useTranslation)('homepage/components/a11y/content');
    const [opened] = (0,useProxyWatch/* useProxyWatch */.x)(data, 'opened', data.opened);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
            onClick: onClick,
            disabled: opened,
            children: t("open-a11y-node-button.btnName")
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Modal/Modal.js + 5 modules
var Modal = __webpack_require__(5391);
;// ./src/components/android-settings/AndroidSettingsInfo.tsx




function AndroidSettingsInfo() {
    const [permissions, setPermissions] = (0,react.useState)([]);
    const [open, setOpen] = (0,react.useState)(false);
    const onSettingClick = ()=>{
        const script = "\n        com.fanfanlo.lib.utils.PermissionUtils.openAppSettings();";
        AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    (0,react.useEffect)(()=>{
        const script = "\n        var data = com.fanfanlo.lib.utils.PermissionUtils.getGrantedPermissions();\n        var res = com.fanfanlo.lib.utils.JsonUtil.gson2.toJson(data);\n        res;\n        ";
        const res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        if (res.javaResultData) {
            setPermissions(res.javaResultData);
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: "授权"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                            onClick: onSettingClick,
                            children: "打开设置页"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                            onClick: ()=>setOpen(true),
                            children: "已授权"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Modal/* default */.A, {
                open: open,
                onClose: handleClose,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                    sx: {
                        bgcolor: "background.paper",
                        p: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: "已授权的权限"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                    onClick: handleClose,
                                    children: "关闭"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                            children: permissions.map((p, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    style: {
                                        wordBreak: "break-all",
                                        wordWrap: "break-word"
                                    },
                                    children: p.replace('android.permission', '')
                                }, i))
                        })
                    ]
                })
            })
        ]
    });
}

;// ../../libs/droid/android/dist/src/android/scripts/app/app-kill-self.js


let script = "com.fanfanlo.lib.sys.Sys.killMyApp()";
function appKillSelf() {
    AutoWebViewJs/* AutoWebViewJs */.w6.instance.callScript(script);
} //# sourceMappingURL=app-kill-self.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hot-toast@2.5.2_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(91412);
;// ./src/components/app/kill-self/KillSelf.tsx





function KillSelf() {
    const { t } = (0,dist_src.useTranslation)("homepage/components/app/kill-self/content");
    async function onClick() {
        dist/* default */.Ay.success(t("KillSelf.toast"));
        await new Promise((r)=>setTimeout(r, 1000 * 1));
        appKillSelf();
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
            onClick: onClick,
            children: t("KillSelf.name")
        })
    });
}

;// ./src/components/markets/AddExternalMarketButton.tsx




function AddExternalMarketButton() {
    const router = (0,next_router.useRouter)();
    const { t } = (0,dist_src.useTranslation)('homepage/components/markets/content');
    function onClick() {
        router.push("/add-market");
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
        onClick: onClick,
        children: t("AddExternalMarketButton.name")
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Menu/Menu.js + 5 modules
var Menu = __webpack_require__(98426);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/MenuItem/MenuItem.js + 2 modules
var MenuItem = __webpack_require__(66533);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/Add.js
var Add = __webpack_require__(88125);
;// ./src/components/markets/main-page-add-buttons/MainPageAddButtons.tsx






const MainPageAddButtons = ()=>{
    const router = (0,next_router.useRouter)();
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const { t } = (0,dist_src.useTranslation)('homepage/components/markets/main-page-add-buttons/content');
    const menuItems = [
        {
            name: t("content.sub.addScriptByUrl"),
            url: "/listen-editing-market"
        },
        {
            name: t("content.sub.addScriptByText"),
            url: "/add-market-by-text"
        },
        {
            name: t("content.sub.addMarket"),
            url: "/add-market-by-url"
        },
        {
            name: t("content.sub.addMarketByText"),
            url: "/listen-editing-market"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                variant: "contained",
                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.A, {}),
                onClick: handleClick,
                children: t("content.add")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Menu/* default */.A, {
                anchorEl: anchorEl,
                open: open,
                onClose: handleClose,
                children: menuItems.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.A, {
                        onClick: ()=>{
                            handleClose();
                            router.push(item.url);
                        },
                        children: item.name
                    }, index))
            })
        ]
    });
};

;// ./src/components/page/markets-dev-settings/open-link-button/OpenLinkButton.tsx




function MarketsDevSettingsOpenLinkButton() {
    const router = (0,next_router.useRouter)();
    const { t } = (0,dist_src.useTranslation)('homepage/components/page/markets-dev-settings/open-link-button/content');
    async function onClick() {
        const bl = await router.push("/markets-dev-settings");
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
            onClick: onClick,
            children: t("content.name")
        })
    });
}
function MarketsDevSettingsLineOpenLinkButton() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
            sx: {
                mt: 2,
                mb: 2
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketsDevSettingsOpenLinkButton, {})
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(37530);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(67063);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/InputLabel/InputLabel.js + 3 modules
var InputLabel = __webpack_require__(77177);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Select/Select.js + 5 modules
var Select = __webpack_require__(6774);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(58448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/libphonenumber-js@1.12.7/node_modules/libphonenumber-js/min/exports/parsePhoneNumberWithError.js + 1 modules
var parsePhoneNumberWithError = __webpack_require__(83130);
// EXTERNAL MODULE: ../../node_modules/.pnpm/libphonenumber-js@1.12.7/node_modules/libphonenumber-js/min/exports/isValidPhoneNumber.js + 2 modules
var isValidPhoneNumber = __webpack_require__(13395);
// EXTERNAL MODULE: ../../node_modules/.pnpm/libphonenumber-js@1.12.7/node_modules/libphonenumber-js/min/exports/getCountryCallingCode.js
var getCountryCallingCode = __webpack_require__(42657);
;// ./src/components/scripts/send-sms/SendSms.tsx





// 常用国家列表，可根据实际需求扩展
const COUNTRY_LIST = [
    {
        code: 'CN',
        name: '中国'
    },
    {
        code: 'US',
        name: '美国'
    },
    {
        code: 'GB',
        name: '英国'
    },
    {
        code: 'IN',
        name: '印度'
    },
    {
        code: 'JP',
        name: '日本'
    },
    {
        code: 'KR',
        name: '韩国'
    },
    {
        code: 'DE',
        name: '德国'
    },
    {
        code: 'FR',
        name: '法国'
    },
    {
        code: 'RU',
        name: '俄罗斯'
    },
    {
        code: 'BR',
        name: '巴西'
    }
];
// 生成短信发送脚本
function runSendSmsScript(msg, targetNumber, senderNumber, simSlot) {
    const script = 'com.fanfanlo.lib.sms.SmsSender.sendSms("'.concat(targetNumber, '", "').concat(msg, '", "').concat(senderNumber || '', '", ').concat(simSlot || 0, ", true, \"\", function(){java.lang.System.out.println('321 sms sent')})");
    AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
}
// 手机号校验
function validatePhoneNumber(input, defaultCountry) {
    let number = input.trim();
    if (!number) return false;
    if (!number.startsWith('+')) {
        try {
            const phoneNumber = (0,parsePhoneNumberWithError/* parsePhoneNumberWithError */.L)(number, defaultCountry);
            return phoneNumber.isValid();
        } catch  {
            return false;
        }
    } else {
        return (0,isValidPhoneNumber/* isValidPhoneNumber */.g)(number);
    }
}
function SendSms() {
    const [msg, setMsg] = (0,react.useState)('can you hear me');
    const [targetNumber, setTargetNumber] = (0,react.useState)('16553511099');
    const [senderNumber, setSenderNumber] = (0,react.useState)('13121129569');
    const [country, setCountry] = (0,react.useState)('CN');
    const [targetNumberError, setTargetNumberError] = (0,react.useState)('');
    const [senderNumberError, setSenderNumberError] = (0,react.useState)('');
    function handleTargetNumberChange(e) {
        const v = e.target.value;
        setTargetNumber(v);
        if (!validatePhoneNumber(v, country)) {
            setTargetNumberError('目标手机号格式无效');
        } else {
            setTargetNumberError('');
        }
    }
    function handleSenderNumberChange(e) {
        const v = e.target.value;
        setSenderNumber(v);
        if (v && !validatePhoneNumber(v, country)) {
            setSenderNumberError('发件人手机号格式无效');
        } else {
            setSenderNumberError('');
        }
    }
    function sendSms() {
        if (!validatePhoneNumber(targetNumber, country)) {
            setTargetNumberError('目标手机号格式无效');
            return;
        }
        if (senderNumber && !validatePhoneNumber(senderNumber, country)) {
            setSenderNumberError('发件人手机号格式无效');
            return;
        }
        // TODO: 调用原有发送逻辑
        // alert('手机号校验通过，可以发送短信');
        const script = runSendSmsScript(msg, targetNumber, senderNumber);
    // ...
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
            direction: "column",
            spacing: 2,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.A, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.A, {
                            id: "country-label",
                            children: "国家"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* default */.A, {
                            labelId: "country-label",
                            value: country,
                            label: "国家",
                            onChange: (e)=>setCountry(e.target.value),
                            sx: {
                                width: 180
                            },
                            children: COUNTRY_LIST.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.A, {
                                    value: item.code,
                                    children: [
                                        item.name,
                                        " (+",
                                        (0,getCountryCallingCode/* getCountryCallingCode */.K)(item.code),
                                        ")"
                                    ]
                                }, item.code))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    label: "目标手机号",
                    value: targetNumber,
                    onChange: handleTargetNumberChange,
                    error: !!targetNumberError,
                    helperText: targetNumberError || '请输入国际格式或本地格式手机号'
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    label: "发件人手机号（可选）",
                    value: senderNumber,
                    onChange: handleSenderNumberChange,
                    error: !!senderNumberError,
                    helperText: senderNumberError || '如需指定发件人，可填写'
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                    label: "短信内容",
                    value: msg,
                    onChange: (e)=>setMsg(e.target.value),
                    multiline: true,
                    rows: 3
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                    variant: "contained",
                    onClick: sendSms,
                    disabled: !targetNumber || !!targetNumberError || !!senderNumberError || !msg,
                    children: "发送短信"
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../libs/droid/android/dist/src/index.js
var android_dist_src = __webpack_require__(41646);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/is-in-android.js
var is_in_android = __webpack_require__(40044);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(91460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@11.1.0/node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__(64088);
;// ./src/components/test/SmsScriptItemComponent.tsx





function getScript() {
    const script = '\n\nvar domain = {}\nvar smsEventType = "smsReceived";\nvar smsDispatcher = com.fanfanlo.lib.smstransfer.receiver.SmsReceiver.dispatcher;\n\nfunction runAskPermissions(){\n    com.fanfanlo.lib.utils.PermissionUtils.askPermissions(["'.concat(android_dist_src.Manifest.Permission.RECEIVE_SMS, '","').concat(android_dist_src.Manifest.Permission.READ_SMS, '", "').concat(android_dist_src.Manifest.Permission.READ_PHONE_STATE, '", "').concat(android_dist_src.Manifest.Permission.READ_PHONE_NUMBERS, '", "').concat(android_dist_src.Manifest.Permission.READ_CALL_LOG, '"], {\n        onGranted:function(permissions, granted){\n            if(granted){\n                runScriptAfterHasPermissions();\n            }\n        },\n        onDenied:function(permissions, doNotAskAgain){\n        }\n    });\n}\nrunAskPermissions();\n\nfunction runScriptAfterHasPermissions(){\n    function onSmsReceived(data){\n        java.lang.System.out.println("js sms received sender is " + data.sender + " sms is " + data.msg + " receive time is " + data.time + "receiver number is" + data.receiver + " slot is " + data.slot);\n        sendMsm(data);\n        sendMail(data);\n    }\n    smsDispatcher.addListener(smsEventType, onSmsReceived, false, domain);\n}\n\nfunction sendMsm(data){\n    // var key = "57a60ecf-4c79-4b3d-b0ad-aa4e70e70d40:" + data.receiver ? data.receiver : "abc";\n    var key = "').concat(localStorage.getItem(nsMobilePathKey), '";\n    if(!key || key == \'null\'){\n        return;\n    }\n    // var url = "https://d.shangwoa.top/redis-set-sms-upstash";\n    var url = "').concat(localStorage.getItem(nsSendSmsUrlKey), "\";\n    if(!url || url == 'null'){return;}\n    var body = com.fanfanlo.lib.utils.JsonUtil.gson2.toJson({k:key, v:data});\n    com.fanfanlo.lib.utils.UIThreadUtil.runInNewThread(function(){\n        com.fanfanlo.lib.net.HttpUtils.post(url, body);\n    });\n}\n    function sendMail(data){\n    var to = \"").concat(localStorage.getItem(nsEmailKey), "\";\n    if(!to || to == 'null'){return;}\n    var auth = \"").concat(localStorage.getItem(nsResendAuthKey), '";\n    if(!auth || auth == \'null\'){return;}\n    java.lang.System.out.println("start send mail");\n    var url = "').concat(resendAipUrl, '";\n        if(!url || url == \'null\'){return;}\n        var body = {\n            from: "onboarding@resend.dev",\n            to: to,\n            subject: String("new message from " + data.sender),\n            html: String("<div><p>content:" + data.msg + "</p><p>from:" + data.sender + "</p><p>time:" + data.time + "</p><p>receiver:" + data.receiver + "</p><p>slot:" + data.slot + "</p></div>")\n        };\n        var header = {\n            "Authorization": String("Bearer " + auth),\n            "Content-Type": "application/json"\n        }\n        com.fanfanlo.lib.utils.UIThreadUtil.runInNewThread(function(){\n            com.fanfanlo.lib.net.HttpUtils.post(url, body, header);\n        });\n        java.lang.System.out.println("end send mail");\n    }\nfunction onJavaCallTerminate(){\n    smsDispatcher.removeDomainListeners(domain);\n    return true;\n}\n');
    return script;
}
const scriptId = 'fanfanlo/sms/listener/1';
const isRunningScript = '\n// var data = com.fanfanlo.droidlib.auto.rhino.RhinoManager.isRunning("'.concat(scriptId, '");\nvar data = com.fanfanlo.droidlib.auto.js.JsManager.isRunning("').concat(scriptId, '");\n\nvar res = com.fanfanlo.lib.utils.JsonUtil.gson2.toJson(data);\n\nres;\n');
const stopScript = '\n// var data = com.fanfanlo.droidlib.auto.rhino.RhinoManager.stopById("'.concat(scriptId, '");\nvar data = com.fanfanlo.droidlib.auto.js.JsManager.stopById("').concat(scriptId, '");\nvar res = com.fanfanlo.lib.utils.JsonUtil.gson2.toJson(data);\nres;\n');
function getScriptConf() {
    return {
        injects: [
            "console"
        ],
        onlyRunSingle: true,
        stopPrevIfOnlyRunSingle: true,
        scriptId,
        script: getScript()
    };
}
let runnerResult;
function testUrl(str) {
    const urlPattern = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;
    if (!urlPattern.test(str)) {
        // console.log('not legal url', str);
        return '';
    }
    try {
        const u = new URL(str);
        const parts = u.hostname.split(".");
        // console.log(`u.hostname.split(".")`, u.hostname.split("."))
        if (parts.length < 2 || parts.some((p)=>p.length === 0) || parts[parts.length - 1].length < 2) {
            // console.log('not legal url with .', str);
            return '';
        }
        return u.href;
    } catch (e) {
        // console.log('not legal url2', str);
        return '';
    }
}
function testResendAuth(auth) {
    if (auth.length < 4) return '';
    if (auth.indexOf('re_') != 0) return '';
    return auth;
}
function testEmail(email) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return '';
    return email;
}
const ns = "@test";
const nsSendSmsUrlKey = "".concat(ns, "/sendSmsUrl");
const nsResendUrlKey = "".concat(ns, "/resendUrl");
const nsResendAuthKey = "".concat(ns, "/resendAuth");
const nsEmailKey = "".concat(ns, "/email");
const nsMobilePathKey = "".concat(ns, "/mobilePathKey");
const readSmsUrl = "https://d.shangwoa.top/redis-lrange-get-upstash";
const resendAipUrl = "https://api.resend.com/emails";
const defSendSmsUrl = (()=>{
    if (false) {}
    let data = localStorage.getItem(nsSendSmsUrlKey);
    if (!data || data == 'null') {
        // data = "https://redis-set-sms-upstash.mailregios.workers.dev/";
        data = "https://d.shangwoa.top/redis-set-sms-upstash";
        localStorage.setItem(nsSendSmsUrlKey, data);
    }
    return data;
})();
const resendUrl = (()=>{
    if (false) {}
    let data = localStorage.getItem(nsResendUrlKey);
    if (!data || data == 'null') {
        data = "https://resend.com";
        localStorage.setItem(nsResendUrlKey, data);
    }
    return data;
})();
const defResendAuth = (()=>{
    if (false) {}
    let data = localStorage.getItem(nsResendAuthKey);
    if (!data || data == 'null') {
        data = "re_17h7y4J2_Jw88LxFtdJCfxomHhjtM44Y5";
        localStorage.setItem(nsResendAuthKey, data);
    }
    return data;
})();
const defEmail = "name@example.com";
const defMobilePathKey = (()=>{
    if (false) {}
    let prefix = localStorage.getItem(nsMobilePathKey);
    if (!prefix || prefix == 'null') {
        prefix = (0,v4/* default */.A)();
        localStorage.setItem(nsMobilePathKey, prefix);
    }
    return prefix;
})();
function SmsScriptItemComponent() {
    const [isRunning, setIsRunning] = (0,react.useState)(false);
    const [openSetting, setOpenSetting] = (0,react.useState)(false);
    const [sendSmsUrl, setSendSmsUrl] = (0,react.useState)("");
    const [resendAuth, setResendAuth] = (0,react.useState)("");
    const [email, setEmail] = (0,react.useState)("");
    const [mobilePathKey, setMobilePathKey] = (0,react.useState)(defMobilePathKey);
    function callOpenSetting() {
        setOpenSetting(true);
        reloadSmsUrl();
        reloadResendAuth();
        reloadEmail();
    }
    function reloadSmsUrl() {
        const url = localStorage.getItem(nsSendSmsUrlKey) || defSendSmsUrl;
        // console.log('reloadSmsUrl', url);
        setSendSmsUrl(url);
    }
    function reloadResendAuth() {
        const auth = localStorage.getItem(nsResendAuthKey) || defResendAuth;
        // console.log('reloadResendAuth_fn', auth);
        setResendAuth(auth);
    }
    function reloadEmail() {
        const email = localStorage.getItem(nsEmailKey) || "";
        // console.log('reloadEmail_fn', email);
        setEmail(email);
    }
    (0,react.useEffect)(()=>{
        reloadSmsUrl();
        reloadResendAuth();
        reloadEmail();
    }, []);
    function onMobilePathKeyChange(str) {
        setMobilePathKey(str);
        localStorage.setItem(nsMobilePathKey, str);
    }
    (0,react.useEffect)(()=>{
        if (sendSmsUrl.length > 0) return;
        setTimeout(()=>{
            // console.log('later check sendSmsUrl', sendSmsUrl);
            if (sendSmsUrl.length > 0) return;
            setSendSmsUrl(defSendSmsUrl);
        }, 1000 * 3);
    }, [
        sendSmsUrl
    ]);
    function onSendSmsUrlChange(str) {
        setSendSmsUrl(str);
        if (str === "") {
            localStorage.removeItem(nsSendSmsUrlKey);
        }
        const href = testUrl(str);
        if (!href) return;
        console.log('save url', href);
        localStorage.setItem(nsSendSmsUrlKey, href);
    }
    (0,react.useEffect)(()=>{
        if (resendAuth.length > 0) return;
        setTimeout(()=>{
            // console.log('later check resendAuth', resendAuth);
            if (resendAuth.length > 0) return;
            setResendAuth(defResendAuth);
        }, 1000 * 3);
    }, [
        resendAuth
    ]);
    function onResendAuthChange(str) {
        setResendAuth(str);
        if (str === "") {
            localStorage.removeItem(nsResendAuthKey);
            return;
        }
        localStorage.setItem(nsResendAuthKey, str);
    }
    function onEmailChange(str) {
        setEmail(str);
        if (str === "") {
            localStorage.removeItem(nsEmailKey);
            return;
        }
        const email = testEmail(str);
        if (!email) return;
        localStorage.setItem(nsEmailKey, email);
    }
    (0,react.useEffect)(()=>{
        if (email.length > 0) return;
        setTimeout(()=>{
            // console.log('later check email', email);
            if (email.length > 0) return;
        // setEmail(defEmail)
        }, 1000 * 3);
    }, [
        email
    ]);
    const onRunScriptClick = async ()=>{
        const res = AutoWebViewJs/* autoWebViewJs */.yx.callScriptByConf(getScriptConf());
        // console.log('FirstProjectButton call run script res is', res)
        runnerResult = res.javaResultData;
        checkIsRunning();
    };
    const onStopClick = ()=>{
        console.log('stop project', scriptId);
        const res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(stopScript);
        // console.log('FirstProjectButton call onStopClick res is', res)
        checkIsRunning();
    };
    function checkIsRunning() {
        const res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(isRunningScript);
        const isRun = !!res.javaResultData && res.javaResultData !== "false";
        // console.log('FirstProjectButton call isRunningScript res is', isRun, res)
        setIsRunning(isRun);
    }
    (0,react.useEffect)(()=>{
        checkIsRunning();
    }, []);
    function onCfButtonClick(e) {
        onUrlClick(e, "https://cloudflare.com/");
    }
    function onUpstashButtonClick(e) {
        onUrlClick(e, "https://console.upstash.com/");
    }
    function onResendClick(e) {
        onUrlClick(e, resendUrl);
    }
    function onUrlClick(e, url) {
        if (!is_in_android/* isRealInAndroid */.nd) return;
        e.stopPropagation();
        e.preventDefault();
        const script = '\n        com.fanfanlo.lib.intent.Funcs.browserOpenUrl("'.concat(url, '");');
        AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    }
    function onMobilePathKeyClick(e) {
        onUrlClick(e, "".concat(readSmsUrl, "/?k=").concat(mobilePathKey));
    }
    async function testSendEmail() {
        console.log('start testSendEmail');
        const url = localStorage.getItem(nsEmailKey);
        if (!url) return;
        // val sender:String, val msg:String, val time:Long, val receiver:String, val slot:Int
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sender: '+15205309873',
                msg: 'test',
                time: Date.now(),
                receiver: '+15321167889',
                slot: 0
            })
        });
        const data = await res.json();
        console.log('testSendEmail complete', data);
    }
    async function testSendSms() {
        const url = "".concat(sendSmsUrl);
        // val sender:String, val msg:String, val time:Long, val receiver:String, val slot:Int
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                k: mobilePathKey,
                v: {
                    sender: '+15205309873',
                    msg: 'test',
                    time: Date.now(),
                    receiver: '+15321167889',
                    slot: 0
                }
            })
        });
        const data = await res.json();
        console.log('testSendSms complete', data);
    }
    async function onTestSendClick() {
        await testSendEmail();
        await testSendSms();
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: "转发短信"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: isRunning ? "运行中" : "未运行"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                    onClick: onRunScriptClick,
                    children: "运行"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                    onClick: onStopClick,
                    children: "停止"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                    onClick: ()=>callOpenSetting(),
                    children: "设置"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog/* default */.A, {
                    open: openSetting,
                    onClose: ()=>setOpenSetting(false),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                        sx: {
                            bgcolor: "background.paper",
                            m: 1,
                            p: 1,
                            height: "100%"
                        },
                        direction: "column",
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: "设置"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                        onClick: ()=>setOpenSetting(false),
                                        children: "关闭"
                                    }),
                                    (sendSmsUrl && mobilePathKey || testEmail(email)) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                        onClick: onTestSendClick,
                                        children: "模拟接收到短信"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.A, {
                                sx: {
                                    border: "1px solid #ccc",
                                    borderRadius: 1,
                                    p: 1
                                },
                                direction: "column",
                                spacing: 1,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        style: {
                                            color: "red"
                                        },
                                        children: "强烈建议您使用自己的服务进行转发，如您懂些编程的话，请自行修改代码并进行加密发送信息。"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                sx: {
                                    border: "1px solid #ccc",
                                    borderRadius: 1,
                                    p: 1
                                },
                                direction: "column",
                                spacing: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                                            children: "邮箱地址"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "不填写将不会发送邮件"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                            error: !!email && !testEmail(email),
                                            id: "editable-text",
                                            "aria-label": "editable-text",
                                            required: true,
                                            fullWidth: true,
                                            multiline: true,
                                            placeholder: defEmail,
                                            helperText: !email ? "不填写将不会发送邮件" : testEmail(email) ? "请输入您要转发邮件的邮箱地址" : "您输入的邮箱地址可能不正确",
                                            variant: "standard",
                                            value: email,
                                            onChange: (e)=>onEmailChange(e.target.value)
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                sx: {
                                    border: "1px solid #ccc",
                                    borderRadius: 1,
                                    p: 1
                                },
                                direction: "column",
                                spacing: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                                            children: "读取短信的路径"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "不填写将不会把短信内容发送到远程服务器。"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "该字符串可以起到轻微加密的作用，长度您可以设置在100个字符以内，建议30个字符以上。"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "我们提供的默认存储并没有访问限制，任何人知道、猜到、枚举到路径都可以获取到您的短信内容，强烈建议您替换为您的安全方式接收和存储短信，以免被恶意获取到。"
                                                })
                                            }),
                                            sendSmsUrl && mobilePathKey && sendSmsUrl == defSendSmsUrl && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                        target: "_blank",
                                                        onClick: onMobilePathKeyClick,
                                                        href: "".concat(readSmsUrl, "/?k=").concat(mobilePathKey),
                                                        children: "打开访问路径"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: "".concat(readSmsUrl, "/?k=").concat(mobilePathKey)
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                            id: "editable-text",
                                            "aria-label": "editable-text",
                                            required: true,
                                            fullWidth: true,
                                            multiline: true,
                                            placeholder: defMobilePathKey,
                                            variant: "standard",
                                            value: mobilePathKey,
                                            onChange: (e)=>onMobilePathKeyChange(e.target.value)
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                        children: "因为没时间开发，所以默认发送信息和邮件是我们申请的免费资源用来测试的，额度不多，大家都用的话，很快就会用完，用完后就所有人都发不出去了，如果出现这种情况，您可以自己申请或建设您自己的转发渠道。"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                        children: "如果该功能受欢迎，我们也会很快自己开发提供无限量免费使用资源。"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                sx: {
                                    border: "1px solid #ccc",
                                    borderRadius: 1,
                                    p: 1
                                },
                                direction: "column",
                                spacing: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                                            children: "邮件转发"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            children: [
                                                "我们默认是用",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    onClick: onResendClick,
                                                    href: resendUrl,
                                                    target: "_blank",
                                                    children: "resend"
                                                }),
                                                "发送邮件的，您可以到它的官网申请自己的账号使用。"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                            error: !testResendAuth(resendAuth),
                                            id: "editable-text",
                                            "aria-label": "editable-text",
                                            required: true,
                                            fullWidth: true,
                                            multiline: true,
                                            helperText: testResendAuth(resendAuth) ? "请输入您要转发邮件的auth" : "您输入的auth可能不正确",
                                            variant: "standard",
                                            value: resendAuth,
                                            onChange: (e)=>onResendAuthChange(e.target.value)
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                                sx: {
                                    border: "1px solid #ccc",
                                    borderRadius: 1,
                                    p: 1
                                },
                                direction: "column",
                                spacing: 1,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                                                    children: "短信转发地址"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        "默认为：",
                                                        defSendSmsUrl
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        "如果您是自己使用，可以在",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                            onClick: onUpstashButtonClick,
                                                            href: "https://console.upstash.com/",
                                                            target: "_blank",
                                                            children: "upstash"
                                                        }),
                                                        "申请免费redis进行操作即可。"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        "您还可以做一个代理层，在",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                            onClick: onCfButtonClick,
                                                            href: "https://cloudflare.com",
                                                            target: "_blank",
                                                            children: "cloudflare"
                                                        }),
                                                        "网站创建worker，然后将worker的url填到这里。"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "您也可以自建服务器或者使用钉钉、server酱等接收消息推送的api。"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
                                        error: !testUrl(sendSmsUrl),
                                        id: "editable-text",
                                        "aria-label": "editable-text",
                                        required: true,
                                        fullWidth: true,
                                        multiline: true,
                                        helperText: testUrl(sendSmsUrl) ? "请输入您要转发短信的url" : "您输入的url不合法",
                                        variant: "standard",
                                        value: sendSmsUrl,
                                        onChange: (e)=>onSendSmsUrlChange(e.target.value)
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/markets/markets-script-dev-lib.ts
var markets_script_dev_lib = __webpack_require__(11555);
;// ./src/markets/markets-script-lib.ts

const libIndexInfo = dist_src.storeUtils.createLocalStore('markets-script-index-info', {
    defData: {
        list: []
    },
    forceReset: false
});
const lib = (0,proxyWatch/* toProxy */.I$)({});
let isInitialized = false;
function init() {
    if (isInitialized) {
        return;
    }
    isInitialized = true;
}
const marketsScriptLib = {
    lib,
    libIndexInfo,
    init
};

;// ./src/markets/markets-script-manager.ts



let markets_script_manager_isInitialized = false;
function markets_script_manager_init() {
    if (markets_script_manager_isInitialized) {
        return;
    }
    markets_script_manager_isInitialized = true;
    markets_script_dev_lib/* marketsDevScriptLib */.R.init();
    marketsScriptLib.init();
    (0,watcher_watchUpdates/* watchUpdates */.c)(markets_script_dev_lib/* marketsDevScriptLib */.R.marketDevLibData, (data)=>{
        console.log('marketsDevScriptLib.devLibInfo=', data);
        const allMarktLibData = markets_script_dev_lib/* marketsDevScriptLib */.R.marketDevLibData.allMarketLibData;
        if (!allMarktLibData) return;
        for (const html of allMarktLibData.htmls){
            marketsScriptLib.lib[html.client.ns] = html;
        }
        for (const script of allMarktLibData.resources){
            marketsScriptLib.lib[script.client.ns] = script;
        }
    });
}
const marketsScriptManager = {
    init: markets_script_manager_init
};

;// ../../libs/droid/android/dist/src/android/scripts/a11y/a11y-info.js



function getA11yServiceLiveInfo() {
    const script = "var info =com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceLiveInfo;\n var s = com.fanfanlo.lib.utils.JsonUtil.gson2.toJson(info);\n s;";
    const info = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    return info;
}
function hasPermission() {
    if (!(0,is_in_android/* isInAndroid */.bj)()) return false;
    const res = AutoWebViewJs/* autoWebViewJs */.yx.onCallGetA11yPermission();
    return res.javaResultData;
}
function openPermission() {
    AutoWebViewJs/* autoWebViewJs */.yx.onCallOpenA11yPermission();
}
const hasPermissionScript = "var bl = com.fanfanlo.droidlib.auto.service.accessibility.a11yUtils.hasServicePermission(com.fanfanlo.lib.mc.LibMainModel.Companion.instance.application, com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceKClass.class);\nbl;";
function checkPermission() {
    const res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(hasPermissionScript);
    return res;
}
const a11yScript = {
    getA11yServiceLiveInfo,
    hasPermission,
    openPermission,
    checkPermission,
    hasPermissionScript
}; //# sourceMappingURL=a11y-info.js.map

;// ../../libs/app/model/dist/src/mc/android-permission/androidPermission.data.js


var AndroidPermissionStatus = /* @__PURE__ */ ((AndroidPermissionStatus2)=>{
    AndroidPermissionStatus2["granted"] = "granted";
    AndroidPermissionStatus2["denied"] = "denied";
    AndroidPermissionStatus2["shouldAskAgain"] = "shouldAskAgain";
    return AndroidPermissionStatus2;
})(AndroidPermissionStatus || {});
const androidPermissions = {
    a11y: {
        name: "android.permission.ACCESS_NOTIFICATION_POLICY",
        status: "shouldAskAgain" /* shouldAskAgain */ 
    }
};
function usePermissionStatus(status) {
    const { t } = (0,dist_src.useTranslation)("app-model/mc/android-permission/content");
    return t("androidPermission.".concat(status));
} //# sourceMappingURL=androidPermission.data.js.map

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/browser/tab-activity.js
var tab_activity = __webpack_require__(23573);
;// ../../libs/fanfanlo/dist/src/utils/browser/use-tab-activity.js




function useTabActivity() {
    const [isActive, setIsActive] = (0,react.useState)(tab_activity/* tabActivity */.T.isActive);
    (0,react.useEffect)(()=>{
        tab_activity/* tabActivity */.T.listen((bl)=>{
            setIsActive(bl);
        });
    }, []);
    return isActive;
} //# sourceMappingURL=use-tab-activity.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@6.2.0_@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_reac_wmyh7hn3agglnr7hg6n5rawbsm/node_modules/@mui/icons-material/esm/QuestionMark.js
var QuestionMark = __webpack_require__(21399);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/ClickAwayListener/ClickAwayListener.js
var ClickAwayListener = __webpack_require__(56889);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Tooltip/Tooltip.js + 59 modules
var Tooltip = __webpack_require__(6186);
;// ./src/components/permissions/accessibility/AccessibilityInfo.tsx
/* __next_internal_client_entry_do_not_use__ AccessibilityInfo auto */ 






// import { useTranslation } from 'react-i18next';s


function AccessibilityInfo() {
    const { t } = (0,dist_src.useTranslation)('homepage/components/permissions/accessibility/content');
    const [hasPermission, setHasPermission] = (0,react.useState)(a11yScript.hasPermission());
    const status = usePermissionStatus(hasPermission ? AndroidPermissionStatus.granted : AndroidPermissionStatus.shouldAskAgain);
    const [openTooltip, setOpenTooltip] = (0,react.useState)(false);
    const isActive = useTabActivity();
    const router = (0,next_router.useRouter)();
    function onSettingClick() {
        // if(!isInAndroid())return;
        AutoWebViewJs/* autoWebViewJs */.yx.onCallOpenA11yPermission();
    }
    (0,react.useEffect)(()=>{
        if (!isActive) return;
        setHasPermission(a11yScript.hasPermission());
    }, [
        isActive
    ]);
    (0,react.useEffect)(()=>{
        if (!(0,is_in_android/* isInAndroid */.bj)()) {
            console.log('check a11y permission in webview,but not in android');
            return;
        }
        let script = "var info =com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceLiveInfo;\n var s = com.fanfanlo.lib.utils.companion.gson2.toJson(info);\n s;";
        script = "var info =com.fanfanlo.droidlib.auto.components.webview.AutoWebViewJs.a11yModel.serviceLiveInfo;\n var s = com.fanfanlo.lib.utils.JsonUtil.gson2.toJson(info);\n s;";
        const info = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
        const bl = a11yScript.checkPermission();
    }, []);
    function onDangerPageButtonClick() {
        router.push('/a11y-danger');
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('AccessibilityInfo.name')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: ":"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    onClick: onSettingClick,
                    role: "button",
                    style: {
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem"
                    },
                    children: t('AccessibilityInfo.setting')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: status
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: hasPermission ? 'ok' : 'no'
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    style: {
                        paddingLeft: '1rem'
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickAwayListener/* ClickAwayListener */.x, {
                    onClickAway: ()=>setOpenTooltip(false),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                        disableFocusListener: true,
                        disableHoverListener: true,
                        disableTouchListener: true,
                        title: t("AccessibilityInfo.dangerDesc"),
                        slotProps: {
                            popper: {
                                disablePortal: true
                            }
                        },
                        open: openTooltip,
                        onOpen: ()=>setOpenTooltip(true),
                        onClose: ()=>setOpenTooltip(false),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            onMouseDown: ()=>setOpenTooltip(true),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: t('AccessibilityInfo.danger')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(QuestionMark/* default */.A, {
                                        fontSize: "small",
                                        sx: {
                                            verticalAlign: 'sub'
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    style: {
                                        color: "red"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button/* default */.A, {
                                        onClick: onDangerPageButtonClick,
                                        children: "警告"
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/components/permissions/components/components.module.scss
var components_module = __webpack_require__(86007);
var components_module_default = /*#__PURE__*/__webpack_require__.n(components_module);
;// ./src/components/permissions/components/Components.tsx







function PermissionCommonSetting() {
    const { t } = (0,dist_src.useTranslation)('homepage/components/permissions/components/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: (components_module_default()).permissionComponentsSpanPadding,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: t('Components.setting')
            })
        })
    });
}
function PermissionCommonNotPass() {
    const { t } = (0,dist_src.useTranslation)('homepage/components/permissions/components/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            className: (components_module_default()).permissionComponentsSpanPadding,
            children: t('Components.notPass')
        })
    });
}
function PermissionCommonPass() {
    const { t } = (0,dist_src.useTranslation)('homepage/components/permissions/components/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            className: (components_module_default()).permissionComponentsSpanPadding,
            children: t('Components.pass')
        })
    });
}
function PermissionCommonDanger(param) {
    let { desc } = param;
    const { t } = (0,dist_src.useTranslation)('homepage/components/permissions/components/content');
    const [openTooltip, setOpenTooltip] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: (components_module_default()).danger,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickAwayListener/* ClickAwayListener */.x, {
            onClickAway: ()=>setOpenTooltip(false),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.A, {
                disableFocusListener: true,
                disableHoverListener: true,
                disableTouchListener: true,
                title: desc,
                slotProps: {
                    popper: {
                        disablePortal: true
                    }
                },
                open: openTooltip,
                onOpen: ()=>setOpenTooltip(true),
                onClose: ()=>setOpenTooltip(false),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                    onMouseDown: ()=>setOpenTooltip(true),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: t('Components.danger')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(QuestionMark/* default */.A, {
                                fontSize: "small",
                                sx: {
                                    verticalAlign: 'sub'
                                }
                            })
                        })
                    ]
                })
            })
        })
    });
}
function PermissionCommonName(param) {
    let { children } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: children
    });
}
function PermissionCommonDesc(param) {
    let { children } = param;
    return /*#__PURE__*/ _jsx("span", {
        children: children
    });
}

;// ../../libs/droid/android/dist/src/android/scripts/floating/floating-info.js


function floating_info_hasPermission() {
    let script = "var bl = com.fanfanlo.lib.permissions.FloatPermission.hasPermission();\n bl;";
    let res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    return res.javaResultData;
}
function floating_info_openPermission() {
    let script = "var bl = com.fanfanlo.lib.permissions.FloatPermission.openPermission();\n bl;";
    let res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(script);
    return res.javaResultData;
}
const floatingInfo = {
    hasPermission: floating_info_hasPermission,
    openPermission: floating_info_openPermission
}; //# sourceMappingURL=floating-info.js.map

;// ./src/components/permissions/floating/FloatingInfo.tsx






function FloatingInfo() {
    const { t } = (0,dist_src.useTranslation)('homepage/components/permissions/floating/content');
    const [hasPermission, setHasPermission] = (0,react.useState)(floatingInfo.hasPermission());
    (0,react.useEffect)(()=>{
        const unlisten = tab_activity/* tabActivity */.T.listen((activity)=>{
            setHasPermission(floatingInfo.hasPermission());
        });
        return ()=>{
            unlisten();
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionCommonName, {
                children: t('FloatingInfo.name')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                onClick: ()=>{
                    floatingInfo.openPermission();
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionCommonSetting, {})
            }),
            hasPermission ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionCommonPass, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionCommonNotPass, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionCommonDanger, {
                desc: t('FloatingInfo.dangerDesc')
            })
        ]
    });
}

;// ./src/components/permissions/home-page-permissions/HomePagePermissions.tsx




function HomePagePermissions() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AccessibilityInfo, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FloatingInfo, {})
        ]
    });
}

// EXTERNAL MODULE: ./src/pages/home/test-script.tsx
var test_script = __webpack_require__(50647);
// EXTERNAL MODULE: ./src/markets/market-html-utils.ts
var market_html_utils = __webpack_require__(61854);
;// ./src/pages/home/index.tsx


















let count = 0;
(0,dist_src.i18nInit)();
function Home() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabbar/* TabbarContainer */.y, {
            titleConf: {
                ns: "homepage/pages/home/content",
                key: "home.title"
            },
            children: env/* isDev */.Cu ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ProdContent, {})
        })
    });
}
function ProdContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AndroidSettingsInfo, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(HomePagePermissions, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IFrameReactContainer/* IFrameReactContainer */.T, {
                url: "/scripts/fanfanlo/scripts/emergency-alarm/index.js",
                urlAsContent: true,
                htmlBuilder: market_html_utils/* marketHtmlUtils */.P.createHtml
            })
        ]
    });
}
function test() {
    const s = 'var script1=function(n){"use strict";return function(){function v(){return new Date().getTime()}var u={exports:{}},e={};/**\n * @license React\n * react-jsx-runtime.production.js\n *\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */var c=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function s(T,t,r){var i=null;if(r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),"key"in t){r={};for(var o in t)o!=="key"&&(r[o]=t[o])}else r=t;return t=r.ref,{$$typeof:c,type:T,key:i,ref:t!==void 0?t:null,props:r}}e.Fragment=d,e.jsx=s,e.jsxs=s,u.exports=e;var l=u.exports;function a(){return l.jsx("div",{children:l.jsx("button",{children:"html生成的按钮"})})}const x={UI:a};function E(){return v()}n.components=x,n.printA=E,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}(),n}({}); return script1;';
    const o = new Function(s)();
    o.printA();
    // console.log('cccccccccccccccomponents=', o.components)
    return o;
}
function testWatchUpdates() {
    const data = toProxy({
        name: 'a',
        friend: {
            name: 'b',
            fav: {
                food: "c"
            }
        }
    });
    console.log('data =', data);
    watchUpdates(data, (info)=>{
        console.log('testWatchUpdates_fn watchUpdates', info);
    });
    data.name = 'c';
    data.friend.name = 'd';
    data.friend.fav.food = 'e';
}
// export const XXX = Home
function Content() {
    // const o = test();
    // const ui = o.components.UI();
    // console.log('ffffffffffffff',ui)
    const [ui, setUI] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        if (true) {
            // console.log('has window', document.domain);
            // document.domain = window.location.hostname;
            // console.log('domain is', document.domain);
            ;
            window.sayHello = function(msg) {
                alert('child' + msg);
            };
            console.log('window say=', window.sayHello);
        }
        setTimeout(()=>{
            setUI(test().components.UI());
        }, 1000 * 5);
    }, []);
    (0,react.useEffect)(()=>{
        marketsScriptManager.init();
    }, []);
    console.log('isDev=', env/* isDev */.Cu);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.A, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SendSms, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AndroidSettingsInfo, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SmsScriptItemComponent, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AddExternalMarketButton, {}),
            ui,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(HomePagePermissions, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IFrameReactContainer/* IFrameReactContainer */.T, {
                url: "/scripts/fanfanlo/scripts/emergency-alarm/index.js",
                urlAsContent: true,
                htmlBuilder: market_html_utils/* marketHtmlUtils */.P.createHtml
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IFrameReactContainer/* IFrameReactContainer */.T, {
                url: "/scripts/fanfanlo/scripts/emergency-alarm/index.js",
                urlAsContent: true,
                htmlBuilder: market_html_utils/* marketHtmlUtils */.P.createHtml
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenA11yNodeButton, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(test_script.TestScript, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.A, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(KillSelf, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketsDevSettingsLineOpenLinkButton, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MainPageAddButtons, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectsUI, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {})
        ]
    });
}


/***/ }),

/***/ 49689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Manifest: () => (/* reexport safe */ _Manifest__WEBPACK_IMPORTED_MODULE_0__._)
/* harmony export */ });
/* harmony import */ var _Manifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95850);









 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 50647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestScript: () => (/* binding */ TestScript),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33736);
/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53853);


// import { buildScript, printScript1 } from "@scripts/script1";

function parseUsedLib(s) {
    let res = [];
    let reg = /javaLib\[\"(.*)\"\]/g;
    let r = s.matchAll(reg);
    for (let a of r){
        res.push(a[1]);
    }
    return res;
}
let beforeJavaLibCreateScript = "\nlet isScriptRunnable = true;\nlet scriptExitListeners = [];\nfunction addScriptExitListener(f){\n    removeScriptExitListener(f);\n    scriptExitListeners.push(f);\n}\nfunction removeScriptExitListener(f){\n    let index = scriptExitListeners.indexOf(f);\n    if(index == -1)return;\n    scriptExitListeners.splice(index, 1);\n}\nfunction onJavaCallTerminate(){\n    callScriptExit();\n    return true;\n}\nfunction callJavaExit(){\n\n}\nfunction jsCallComplete(){\n    callScriptExit();\n    callJavaExit();\n}\n\nfunction jsCallFailed(){\n    callScriptExit();\n    callJavaExit();\n}\nfunction callScriptExit(){\n    isScriptRunnable = false;\n    let res = \"\"\n    console.log('before call exit', scriptExitListeners.length);\n    scriptExitListeners.forEach((f)=>{f()});\n    console.log('after call exit');\n    return res;\n}\n    ";
function TestScript() {
    async function onClick() {
    // printScript1('hello script1')
    // runProjectScriptDemo();
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
            onClick: onClick,
            children: "script"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestScript);
async function runProjectScriptDemo() {
    const res = await axios.get('/scripts/projectScript07.js');
    const scriptString = res.data;
    let dependencies = parseUsedLib(scriptString).concat(parseUsedLib(beforeJavaLibCreateScript));
// const conf = buildScript({
//     script: scriptString, injects: ["console", "a11yModel"],
//     optimizationLevel: -1, printScript: false,
//     scriptId: "demo.project"
// }, dependencies, beforeJavaLibCreateScript)
// const s = AutoWebViewJs.confToScript(conf);
// console.log('ssssssssssss', s)
// AutoWebViewJs.instance.callScriptRunner(s);
// console.log('code', code)
}


/***/ }),

/***/ 51664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _i18n_resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84452);
/* harmony import */ var _i18n_resources__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_i18n_resources__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_i18n_resources__WEBPACK_IMPORTED_MODULE_0__, "Manifest")) __webpack_require__.d(__webpack_exports__, { Manifest: function() { return _i18n_resources__WEBPACK_IMPORTED_MODULE_0__.Manifest; } });

 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 59298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HQ: () => (/* binding */ getSocketConnectStatusEnumI18n),
/* harmony export */   NC: () => (/* binding */ isValidWebSocketURL),
/* harmony export */   du: () => (/* binding */ SocketConnectStatusEnum)
/* harmony export */ });
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3374);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69670);

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


function isValidWebSocketURL(url) {
    if (!url) return false;
    return validator__WEBPACK_IMPORTED_MODULE_0___default().isURL(url, {
        protocols: [
            "ws",
            "wss"
        ],
        require_protocol: true
    });
}
var SocketConnectStatusEnum = /* @__PURE__ */ ((SocketConnectStatusEnum2)=>{
    SocketConnectStatusEnum2["connecting"] = "connecting";
    SocketConnectStatusEnum2["connected"] = "connected";
    SocketConnectStatusEnum2["disconnecting"] = "disconnecting";
    SocketConnectStatusEnum2["disconnected"] = "disconnected";
    SocketConnectStatusEnum2["waitRetry"] = "waitRetry";
    return SocketConnectStatusEnum2;
})(SocketConnectStatusEnum || {});
function getSocketConnectStatusEnumI18n(status) {
    return __async(this, null, function*() {
        return yield (0,_i18n__WEBPACK_IMPORTED_MODULE_1__/* .loadI18nValue */ .y)("fanfanlo/utils/socket/content", "status.".concat(status));
    });
} //# sourceMappingURL=socket-utils.js.map


/***/ }),

/***/ 61182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bd: () => (/* reexport safe */ C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_1_4_i18next_24_1_0_typescript_5_8_2_react_dom_19_0_0_react_19_0_0_react_19_0_0_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__.Bd)
/* harmony export */ });
/* harmony import */ var C_work_android_droid_html_website_2024_12_node_modules_pnpm_react_i18next_15_1_4_i18next_24_1_0_typescript_5_8_2_react_dom_19_0_0_react_19_0_0_react_19_0_0_node_modules_react_i18next_dist_es_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56750);



/***/ }),

/***/ 61854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ marketHtmlUtils)
/* harmony export */ });
function createHtml(script, opts) {
    return '<html>\n    <head>\n    <script type="importmap">\n  {\n    "imports": {\n      "react": "https://esm.sh/react@19",\n      "react-dom/client": "https://esm.sh/react-dom@19/client"\n    }\n  }\n</script>\n        <script>\n                const IFRAME_ID = \''.concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, "';\n                window.IFRAME_ID = '").concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, '\';\n                \n            var autoWebViewJs = window.autoWebViewJs = window.parent.window.autoWebViewJs;\n            autoWebViewJs = window.parent.window.autoWebViewJs;\n            var callScript = window.callScript = autoWebViewJs.callScript;\n            var callScriptByConf = window.callScriptByConf = autoWebViewJs.callScriptByConf;\n            var isRealInAndroid = window.isRealInAndroid;\n            // var storeUtilsConf = window.storeUtilsConf = window.parent.window.storeUtilsConf;\n            var storeUtilsConf = window.storeUtilsConf = {\n                ns:{},\n                read:window.parent.window.storeUtilsConf.read,\n                write:window.parent.window.storeUtilsConf.write   \n            }\n        </script>\n        <title>droid lego</title>\n        <style>html, body{margin-left:-0px;padding:0;\n        background-color: white;}</style>\n    </head>\n    <body>\n        <div id="app"></div>\n        <script>').concat(script, "</script>\n        <script>\n                // const IFRAME_ID = '").concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, "';\n                function notifyResize() {\n                    const body = document.body;\n                    const html = document.documentElement;\n                    \n                    // 获取实际内容高度（取最大值）\n                    const height = Math.max(\n                        body.scrollHeight,\n                        body.offsetHeight,\n                        html.scrollHeight,\n                        html.offsetHeight\n                    );\n                    \n                    // 获取实际内容宽度\n                    const width = Math.max(\n                        body.scrollWidth,\n                        body.offsetWidth,\n                        html.scrollWidth,\n                        html.offsetWidth\n                    );\n                    \n                    // 发送消息给父窗口\n                    window.parent.postMessage({\n                        type: 'resize',\n                        iframeId: IFRAME_ID,\n                        height,\n                        width\n                    }, '*');\n                }\n                \n                // 监听窗口大小变化\n                window.addEventListener('resize', notifyResize);\n                \n                // 监听DOMContentLoaded，确保DOM加载完毕后调整大小\n                document.addEventListener('DOMContentLoaded', notifyResize);\n                \n                // 监听load事件，确保所有资源加载完毕后调整大小\n                window.addEventListener('load', notifyResize);\n                \n                // 创建MutationObserver监听DOM变化\n                const observer = new MutationObserver(notifyResize);\n                observer.observe(document.documentElement, {\n                    childList: true,\n                    subtree: true,\n                    attributes: true,\n                    characterData: true\n                });\n                \n                // 监听来自父窗口的消息，处理请求重新调整大小的消息\n                window.addEventListener('message', function(event) {\n                    if (event.data && event.data.type === 'requestResize') {\n                        // 主动触发一次尺寸计算和发送\n                        notifyResize();\n                    }\n                });\n                \n                // 初始化大小\n                notifyResize();\n        </script>\n    </body>\n</html>");
}
function mergeHtml(html, opts) {
    let h = html;
    if (!h.includes('<body')) {
        h = "<body>".concat(h, "</body>");
    }
    if (!h.includes('<html')) {
        h = "<html>".concat(h, "</html>");
    }
    if (!h.includes('<head')) {
        h = h.replace('<html>', '<html><head></head>');
    }
    h = h.replace('<head>', "<head><script>\n                const IFRAME_ID = '".concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, "';\n                window.IFRAME_ID = '").concat(opts === null || opts === void 0 ? void 0 : opts.iframeId, "';\n                \n            var autoWebViewJs = window.autoWebViewJs = window.parent.window.autoWebViewJs;\n            autoWebViewJs = window.parent.window.autoWebViewJs;\n            var callScript = window.callScript = autoWebViewJs.callScript;\n            var callScriptByConf = window.callScriptByConf = autoWebViewJs.callScriptByConf;\n            var isRealInAndroid = window.isRealInAndroid;\n            // var storeUtilsConf = window.storeUtilsConf = window.parent.window.storeUtilsConf;\n            var storeUtilsConf = window.storeUtilsConf = {\n                ns:{},\n                read:window.parent.window.storeUtilsConf.read,\n                write:window.parent.window.storeUtilsConf.write   \n            }\n        </script>\n        \n        <style>html, body{margin-left:-0px;padding:0;\n        background-color: white;}</style>"));
    h = h.replace("</body>", "\n        \n        <script>\n                function notifyResize() {\n                    const body = document.body;\n                    const html = document.documentElement;\n                    \n                    // 获取实际内容高度（取最大值）\n                    const height = Math.max(\n                        body.scrollHeight,\n                        body.offsetHeight,\n                        html.scrollHeight,\n                        html.offsetHeight\n                    );\n                    \n                    // 获取实际内容宽度\n                    const width = Math.max(\n                        body.scrollWidth,\n                        body.offsetWidth,\n                        html.scrollWidth,\n                        html.offsetWidth\n                    );\n                    \n                    // 发送消息给父窗口\n                    window.parent.postMessage({\n                        type: 'resize',\n                        iframeId: IFRAME_ID,\n                        height,\n                        width\n                    }, '*');\n                }\n                \n                // 监听窗口大小变化\n                window.addEventListener('resize', notifyResize);\n                \n                // 监听DOMContentLoaded，确保DOM加载完毕后调整大小\n                document.addEventListener('DOMContentLoaded', notifyResize);\n                \n                // 监听load事件，确保所有资源加载完毕后调整大小\n                window.addEventListener('load', notifyResize);\n                \n                // 创建MutationObserver监听DOM变化\n                const observer = new MutationObserver(notifyResize);\n                observer.observe(document.documentElement, {\n                    childList: true,\n                    subtree: true,\n                    attributes: true,\n                    characterData: true\n                });\n                \n                // 监听来自父窗口的消息，处理请求重新调整大小的消息\n                window.addEventListener('message', function(event) {\n                    if (event.data && event.data.type === 'requestResize') {\n                        // 主动触发一次尺寸计算和发送\n                        notifyResize();\n                    }\n                });\n                \n                // 初始化大小\n                notifyResize();\n        </script>\n        </body>");
    console.log('hhhhhhhhhhhhh=', h);
    return h;
}
async function createHtmlByUrl(url, opts) {
    const res = await fetch(url);
    const content = await res.text();
    return createHtml(content, opts);
}
const marketHtmlUtils = {
    createHtml,
    createHtmlByUrl,
    mergeHtml
};


/***/ }),

/***/ 75444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ marketsDevSocket)
/* harmony export */ });
/* unused harmony export socketConnectInfo */
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93276);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99759);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59298);
/* harmony import */ var _market_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17084);
/* harmony import */ var _market_dev_socket_setting_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6076);



const dispatcher = new _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .Dispatcher */ .m();
const socketConnectInfo = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .toProxy */ .I$)({
    status: _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected,
    retryCount: 0
});
let ws;
async function connect() {
    const url = (await (0,_market_dev_socket_setting_data__WEBPACK_IMPORTED_MODULE_3__/* .getMarketDevSocketSettingData */ .D)()).url;
    if (!(0,_fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .isValidWebSocketURL */ .NC)(url)) {
        return;
    }
    socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.connecting;
    const w = ws = new WebSocket(url);
    w.onopen = ()=>{
        socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.connected;
        toGetAllScripts();
    };
    w.onclose = ()=>{
        console.log('oscket on close', arguments);
        socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected;
        checkNeedRetry();
    };
    w.onerror = ()=>{
        console.log('socket onerror', arguments);
        socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected;
        close();
        checkNeedRetry();
    };
    w.onmessage = (e)=>{
        try {
            const event = JSON.parse(e.data);
            console.log('market dev socket onmessage', event.type);
            dispatcher.dispatch(event.type, event.data);
        } catch (e) {
            console.error(e);
        }
    };
    async function toGetAllScripts() {
        const event = {
            type: _market_lib__WEBPACK_IMPORTED_MODULE_4__/* .IMarketDevConnectEventType */ .Dl.getAllScripts
        };
        w.send(JSON.stringify(event));
    }
}
function close() {
    if (!ws) return;
    ws.close();
    ws = undefined;
}
async function checkNeedRetry() {
    const settingData = await (0,_market_dev_socket_setting_data__WEBPACK_IMPORTED_MODULE_3__/* .getMarketDevSocketSettingData */ .D)();
    if (!settingData.keepConnect) {
        return;
    }
    socketConnectInfo.retryCount++;
    setTimeout(()=>{
        connect();
    }, 1000 * 5);
}
function disconnect() {
    if (ws) {
        ws.close();
        ws = undefined;
    }
    socketConnectInfo.status = _fanfanlo__WEBPACK_IMPORTED_MODULE_2__/* .SocketConnectStatusEnum */ .du.disconnected;
}
const marketsDevSocket = {
    connect,
    disconnect,
    socketConnectInfo,
    dispatcher
};


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


/***/ }),

/***/ 84452:
/***/ (() => {

"use strict";
 //# sourceMappingURL=i18n-resources.js.map


/***/ }),

/***/ 86007:
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"permissionComponentsSpanPadding":"components_permissionComponentsSpanPadding___8iUl","danger":"components_danger__at2U4","pass":"components_pass__QEjyt"};

/***/ })

}]);
//# sourceMappingURL=9684-9a81079218113931.js.map