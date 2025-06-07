"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3797],{

/***/ 17385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ androidDispatchers)
/* harmony export */ });

const androidDispatchers = {
    WebViewJsDispatcher: {
        name: "WebViewJsDispatcher",
        comment: "\u5168\u5C40\u5355\u4F8B\u7C7B"
    },
    Window: {
        name: "Window",
        comment: "\u7A97\u53E3\u7C7B\u5355\u4F8B\uFF0C\u53EF\u4EE5\u7528\u6765\u4FA6\u542C\u7A97\u53E3\u7684dismiss\u4E8B\u4EF6"
    },
    webViewJs: {
        name: "webViewJs",
        comment: "\u5F53\u524D\u7A97\u53E3\u88AB\u6CE8\u5165\u7684android webviewjs"
    }
}; //# sourceMappingURL=androidDispatchers.js.map


/***/ }),

/***/ 17763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ PermissionGroup)
/* harmony export */ });
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25146);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9350);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61503);
/* harmony import */ var _Permission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53438);



const _PermissionGroup = class _PermissionGroup extends _fanfanlo__WEBPACK_IMPORTED_MODULE_0__/* .EventDispatcher */ .Q {
    get isSuccess() {
        let { print, error, warn, logger } = this.logger.sub(false, "fn_isSuccess");
        for(let i = 0; i < this.permissions.length; i++){
            let p = this.permissions[i];
            print("permission is ".concat(p.constructor.name, ", success is ").concat(p.isSuccess));
            if (!p.isSuccess) return false;
        }
        return true;
    }
    addCallback(callback) {
        this.callback = callback;
        return this;
    }
    constructor(permissions = []){
        super();
        this.index = -1;
        this.logger = new _fanfanlo__WEBPACK_IMPORTED_MODULE_1__/* .Log */ .tG(false, this.constructor.name);
        this.run = ()=>{
            this.checkNext();
        };
        this.runPermission = ()=>{
            if (this.permissions.length <= this.index) {
                throw new Error("permission index out of bounds");
            }
            let p = this.permissions[this.index];
            p.addDomainEventListener(this, _Permission__WEBPACK_IMPORTED_MODULE_2__/* .Permission */ .a.eventComplete, this.onPermissionComplete);
            p.checkOrAsk();
        };
        this.onPermissionComplete = (e)=>{
            e.target.removeDomain(this);
            this.checkNext();
        };
        this.checkNext = ()=>{
            this.index++;
            if (this.index >= this.permissions.length) {
                return this.dispatchComplete();
            }
            this.runPermission();
        };
        this.dispatchComplete = ()=>{
            var _a;
            this.dispatchEvent(new _fanfanlo__WEBPACK_IMPORTED_MODULE_3__/* .DataEvent */ .P(_PermissionGroup.eventComplete));
            (_a = this.callback) == null ? void 0 : _a.call(this, this, this.isSuccess);
        };
        this.exit = ()=>{
            for(let i = 0; i < this.permissions.length; i++){
                this.permissions[i].removeDomain(this);
            }
        };
        this.permissions = permissions;
    }
};
_PermissionGroup.eventComplete = "complete";
let PermissionGroup = _PermissionGroup; //# sourceMappingURL=PermissionGroup.js.map


/***/ }),

/***/ 25146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ EventDispatcher)
/* harmony export */ });

class EventDispatcher {
    addDomainEventListener(domain, type, cb, index) {
        let _domain = this.listenDomainMap.get(domain);
        if (!_domain) {
            _domain = /* @__PURE__ */ new Map();
            this.listenDomainMap.set(domain, _domain);
        }
        let listeners = _domain.get(type);
        if (!listeners) {
            listeners = [];
            _domain.set(type, listeners);
        }
        if (listeners.indexOf(cb) == -1) listeners.push(cb);
        this.addEventListener(type, cb, index);
    }
    addDomainOnceListener(domain, type, cb, index) {
        this.addOnceListener(type, cb, index, domain);
    }
    addEventListener(type, cb, index) {
        if (type === "") {
            try {
                throw new Error("addDomainEventListener error no type");
            } catch (e) {
                console.log("EventDispatcher2", "addDomainEventListener", "err", type, e);
            }
        }
        if (typeof cb != "function") {
            try {
                throw new Error("addDomainEventListener error no cb");
            } catch (e) {
                console.log("EventDispatcher2", "addDomainEventListener", "err", cb, e);
            }
        }
        let listeners = this.listenMap.get(type);
        if (!listeners) {
            listeners = [];
            this.listenMap.set(type, listeners);
        }
        const _index = listeners.indexOf(cb);
        if (_index > -1) listeners.splice(_index, 1);
        if (index == void 0 || index < 0) index = listeners.length;
        index = Math.max(0, Math.min(index, listeners.length));
        listeners.splice(index, 0, cb);
    }
    addEventListenerOnce(type, cb, index) {
        return this.addOnceListener(type, cb, index, void 0);
    }
    onceListenerCb(type, onEvent, domain) {
        const that = this;
        return (function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            if (typeof onEvent === "function") {
                onEvent(...args);
            } else {
                console.error(onEvent);
                console.log(...args);
                throw new Error("onEvent not a function");
            }
            const listeners = that.onceListeners.get(type);
            if (!listeners) return;
            if (domain) that.removeDomainEventListener(domain, type, listeners.get(onEvent));
            else that.removeEventListener(type, listeners.get(onEvent));
        }).bind(this);
    }
    addOnceListener(type, onEvent, index, domain) {
        let listeners = this.onceListeners.get(type);
        if (!listeners) {
            listeners = /* @__PURE__ */ new Map();
            this.onceListeners.set(type, listeners);
        }
        const fn = this.onceListenerCb(type, onEvent, domain);
        listeners.set(onEvent, fn);
        domain ? this.addDomainEventListener(domain, type, fn, index) : this.addEventListener(type, fn, index);
        return fn;
    }
    dispatchArgs(type) {
        for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            rest[_key - 1] = arguments[_key];
        }
        const listeners = this.listenMap.get(type);
        if (!listeners) return false;
        for(let i = 0, len = listeners.length; i < len; i++){
            listeners[i].apply(null, rest);
        }
        return true;
    }
    dispatchEvent(event) {
        if (!event || !event.type) return true;
        const listeners = this.listenMap.get(event.type);
        if (!listeners) {
            return false;
        }
        event[event._target] = this;
        for(let i = 0, len = listeners.length; i < len; i++){
            if (event.canceled) return false;
            try {
                listeners[i](event);
            } catch (e) {
                console.log("EventDispatcher2", "dispatchEvent", "err", e);
                console.log("event is", event);
            }
        }
        return true;
    }
    removeDomain(domain) {
        var _a;
        const domainMap = this.listenDomainMap.get(domain);
        if (!domainMap) return false;
        for(const type in domainMap){
            (_a = domainMap.get(type)) == null ? void 0 : _a.forEach((cb)=>{
                try {
                    this.removeEventListener(type, cb);
                } catch (e) {
                    console.log("eventdispatcher2", "removedomain", "err", e);
                }
            }, this);
        }
        this.listenDomainMap.delete(domain);
        return true;
    }
    removeDomainEventListener(domain, type, cb) {
        const domainMap = this.listenDomainMap.get(domain);
        if (!domainMap) return false;
        const listeners = domainMap.get(type);
        if (!listeners) return false;
        const index = listeners.indexOf(cb);
        if (index == -1) return false;
        listeners.splice(index, 1);
        return this.removeEventListener(type, cb);
    }
    removeEventListener(type, cb) {
        const listeners = this.listenMap.get(type);
        if (!listeners) return false;
        const index = listeners.indexOf(cb);
        if (index == -1) {
            return false;
        } else {
            listeners.splice(index, 1);
            return true;
        }
    }
    willTrigger(type) {
        const l = this.listenMap.get(type);
        return !l || l.length == 0 ? false : true;
    }
    constructor(){
        this.listenDomainMap = /* @__PURE__ */ new Map();
        this.listenMap = /* @__PURE__ */ new Map();
        this.onceListeners = /* @__PURE__ */ new Map();
    }
} //# sourceMappingURL=EventDispatcher.js.map


/***/ }),

/***/ 33463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sb: () => (/* binding */ createWindowConfCopy)
/* harmony export */ });
/* unused harmony exports webViewJsParams, webViewConf, htmlConf, floatConf, floatWindowConf, windowConf */
/* harmony import */ var _barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82131);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80036);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);



const webViewJsParams = {
    fitContentWidth: true,
    fitContentHeight: true,
    javaToJsDataString: ""
};
const webViewConf = {
    backgroundColor: 0
};
const htmlConf = {
    url: "",
    webViewJsParams,
    webViewConf,
    jsBridgeName: "android",
    webViewJsName: "AutoWebViewJs",
    extra: {
    }
};
const floatConf = {
    positionSaveName: "${positionSaveName}",
    draggable: true
};
const floatWindowConf = {
    floatConf
};
const windowConf = {
    contentType: "html",
    windowType: "float",
    htmlConf,
    floatWindowConf,
    windowId: (0,_barrel_optimize_names_ulid_ulid__WEBPACK_IMPORTED_MODULE_0__/* .ulid */ .Z0)()
};
function createWindowConfCopy(conf) {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default().merge({}, windowConf, conf);
} //# sourceMappingURL=WindowConf.js.map


/***/ }),

/***/ 39897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ env)
/* harmony export */ });
/* harmony import */ var is_ip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12006);


function getHtmlOrigin() {
    if (false) {}
    if (!(0,is_ip__WEBPACK_IMPORTED_MODULE_0__/* .isIP */ .ei)(window.location.hostname)) return window.location.origin + "/";
    return "".concat(window.location.protocol, "://").concat(window.location.hostname, ":5173/");
}
class Env {
    constructor(){
        this.htmlOrigin = getHtmlOrigin();
    }
}
const env = new Env(); //# sourceMappingURL=env.js.map


/***/ }),

/***/ 53438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ Permission)
});

// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/AutoWebViewJs.js + 1 modules
var AutoWebViewJs = __webpack_require__(17696);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/events/DataEvent.js + 1 modules
var DataEvent = __webpack_require__(61503);
;// ../../libs/droid/android/dist/src/android/components/PermissionEvent.js


class PermissionEvent extends DataEvent/* DataEvent */.P {
    constructor(type, bl, extra, permission){
        super(type, {
            bl,
            extra,
            permission
        });
        this.bl = bl;
        this.extra = extra;
        this.permission = permission;
    }
} //# sourceMappingURL=PermissionEvent.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(80036);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/events/EventDispatcher.js
var EventDispatcher = __webpack_require__(25146);
;// ../../libs/fanfanlo/dist/src/utils/callLater/callLater.js


const list = [];
function callLater(fn, delay) {
    let repeatable = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    for(var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
        args[_key - 3] = arguments[_key];
    }
    if (!repeatable) {
        removeCallLater(fn);
    }
    let data = {
        fn,
        handle: -1,
        cancelled: false
    };
    data.handle = window.setTimeout(()=>{
        if (data.cancelled) return;
        fn.apply(void 0, args);
        remove(data);
    }, delay);
    list.push(data);
    return data;
}
function removeCallLater(fn) {
    for(let i = 0; i < list.length; i++){
        let data = list[i];
        if (!data) continue;
        if (data.fn == fn) {
            stopClear(data, i);
            return;
        }
    }
}
function remove(data) {
    let index = list.indexOf(data);
    stopClear(data, index);
}
function stopClear(data, index) {
    if (!data) return;
    clearTimeout(data.handle);
    data.cancelled = true;
    if (index > -1) {
        list.splice(index, 1);
    }
}
class QueueMicroTaskData {
    constructor(fn){
        this.f = ()=>{
            if (this.cancelled) return;
            let fn = this.fn;
            removeQueueMicroTask(this.fn);
            fn();
        };
        this.cancelled = false;
        this.fn = fn;
    }
}
let tasks = (/* unused pure expression or super */ null && ([]));
function callQueueMicroTask(fn) {
    let repeatable = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    let data = new QueueMicroTaskData(fn);
    queueMicrotask(data.f);
    if (!repeatable) {
        let res = findTaskByFn(fn);
        if (res) {
            stopClearTask(res.data, res.i);
        }
    }
    tasks.push(data);
    return data;
}
function removeQueueMicroTask(fn) {
    if (fn instanceof QueueMicroTaskData) {
        let index = tasks.indexOf(fn);
        stopClearTask(fn, index);
    } else if (_.isFunction(fn)) {
        let res = findTaskByFn(fn);
        if (res) {
            stopClearTask(res.data, res.i);
        }
    } else {}
}
function findTaskByFn(fn) {
    for(let i = 0; i < tasks.length; i++){
        let data = tasks[i];
        if (data.fn == fn) {
            return {
                data,
                i
            };
        }
    }
    return;
}
function stopClearTask(data, index) {
    if (!data) return;
    data.cancelled = true;
    if (index > -1) {
        tasks.splice(index, 1);
    }
}
function removeTask(data) {
    let index = tasks.indexOf(data);
    stopClearTask(data, index);
} //# sourceMappingURL=callLater.js.map

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/log/Log.js + 1 modules
var Log = __webpack_require__(9350);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/documentUtils.js
var documentUtils = __webpack_require__(28795);
;// ../../libs/droid/android/dist/src/android/components/Permission.js





const _Permission = class _Permission extends EventDispatcher/* EventDispatcher */.Q {
    init(conf) {
        this.conf = conf;
    }
    runCheck() {
        let res;
        let hasPermission;
        let strData;
        let { print, error, warn, logger } = this.logger.sub(false, "fn-runCheck");
        if (this.conf.scripts.check.isRunner) {
            res = AutoWebViewJs/* autoWebViewJs */.yx.callScriptRunner(this.conf.scripts.check.script);
            strData = res.runnerResult;
        } else {
            res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(this.conf.scripts.check.script);
            if (res.errMsg) {
                error(res.errMsg);
            }
            strData = res.javaResultString;
        }
        if (strData) {
            try {
                hasPermission = JSON.parse(strData);
            } catch (e) {
                error("json parese strData", e);
            }
        }
        return hasPermission;
    }
    check() {
        this.isSuccess = void 0;
        let { print, error, warn, logger } = this.logger.sub(false, "fn_check");
        let hasPermission = this.runCheck();
        if (!lodash_default().isBoolean(hasPermission)) {
            error("hasPermission is not bool", hasPermission);
            hasPermission = false;
        } else {
            this.isSuccess = hasPermission;
        }
        if (hasPermission === true) {
            callLater(this.complete, 1);
        }
        return this.isSuccess;
    }
    ask() {
        let res;
        if (this.conf.scripts.ask.isRunner) {
            res = AutoWebViewJs/* autoWebViewJs */.yx.callScriptRunner(this.conf.scripts.ask.script);
        } else {
            res = AutoWebViewJs/* autoWebViewJs */.yx.callScript(this.conf.scripts.ask.script);
        }
    }
    callAsk() {
        this.listenAskBack();
        this.ask();
    }
    dispatchMayUpdatedEvent() {
        let bl = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0, extra = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
        for(let i = 0; i < this.androidPermissionList.length; i++){
            let p = this.androidPermissionList[i];
            let event = new PermissionEvent(p, bl, extra, this);
            _Permission.dispacher.dispatchEvent(event);
            this.dispatchEvent(event);
        }
    }
    clear() {
        for(let i = 0; i < this.exitFunList.length; i++){
            this.exitFunList[i]();
        }
        this.exitFunList.length = 0;
    }
    constructor(){
        super(...arguments);
        this.logger = new Log/* Log */.tG(false, this.constructor.name);
        this.androidPermissionList = [];
        this.exitFunList = [];
        this.isComplete = false;
        this.isTerminate = false;
        this.checkOrAsk = ()=>{
            this.isTerminate = false;
            this.isComplete = false;
            let hasPermission = this.check();
            if (!hasPermission) {
                this.runAsk();
                return false;
            }
            return hasPermission;
        };
        this.runAsk = ()=>{
            this.conf.askUi.show(this);
        };
        this.listenAskBack = ()=>{
            if (!this.conf.listenResume) return;
            document.addEventListener(documentUtils/* documentEventTypeDocumentIsShow */.oj, this.onDocumentShow);
        };
        this.onDocumentShow = (e)=>{
            document.removeEventListener(documentUtils/* documentEventTypeDocumentIsShow */.oj, this.onDocumentShow);
            this.askComplete();
        };
        this.askComplete = ()=>{
            if (this.isComplete) {
                return;
            }
            this.check();
            this.dispatchMayUpdatedEvent(this.isSuccess, void 0);
            this.complete();
        };
        this.complete = ()=>{
            this.isComplete = true;
            this.clear();
            this.dispatchEvent(new DataEvent/* DataEvent */.P(_Permission.eventComplete));
        };
    }
};
_Permission.dispacher = new EventDispatcher/* EventDispatcher */.Q();
_Permission.eventPermissionMayUpdated = "eventPermissionMayUpdated";
_Permission.eventComplete = "complete";
let Permission = _Permission; //# sourceMappingURL=Permission.js.map


/***/ }),

/***/ 61503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ DataEvent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(80036);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// ../../libs/fanfanlo/dist/src/events/Event.js


class Event {
    get target() {
        return this[this._target];
    }
    toString() {
        const res = {};
        lodash_default().each(Object.keys(this), (key)=>{
            if (key === "data") {}
            res[key] = this[key];
        });
        return res;
    }
    constructor(type, cancelable = false){
        this._target = "Event.target";
        this.type = type;
        this.cancelable = cancelable;
        this.canceled = false;
    }
} //# sourceMappingURL=Event.js.map

;// ../../libs/fanfanlo/dist/src/events/DataEvent.js


class DataEvent extends Event {
    constructor(type, data, cancelable = false){
        super(type, cancelable);
        this.data = data;
    }
} //# sourceMappingURL=DataEvent.js.map


/***/ }),

/***/ 87487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ps: () => (/* binding */ createFloatA11yPermissionGroup),
  uu: () => (/* binding */ runPermissionGroup)
});

// UNUSED EXPORTS: createPermissionsGroup

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(15463);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/log/Log.js + 1 modules
var Log = __webpack_require__(9350);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/documentUtils.js
var documentUtils = __webpack_require__(28795);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/androidDispatchers.js
var androidDispatchers = __webpack_require__(17385);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/AutoWebViewJs.js + 1 modules
var AutoWebViewJs = __webpack_require__(17696);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/WebViewJs.js + 3 modules
var WebViewJs = __webpack_require__(71836);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/components/i18n.js
var i18n = __webpack_require__(6975);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/components/Manifest.js
var Manifest = __webpack_require__(95850);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/components/Permission.js + 2 modules
var Permission = __webpack_require__(53438);
;// ../../libs/droid/android/dist/src/android/components/permission-storage.js


const permissionStorage = src.storeUtils.namespace("permission-droid/android"); //# sourceMappingURL=permission-storage.js.map

;// ../../libs/droid/android/dist/src/android/components/PermissionAskUi.js



class PermissionAskUi {
    getCheckBoxValue() {
        let { storageKey } = this.conf;
        if (!storageKey) return void 0;
        const o = permissionStorage.read(storageKey);
        let show = true;
        if (o && o.hide === true) {
            let now = Date.now();
            let time = o.time;
            let diff = now - time;
            if (diff < 1e3 * 60 * 60 * 24 * 15) {
                show = false;
            }
        }
        return show;
    }
    createDialogInnerHtml() {
        let { text, title, hasCheckBox, checkBoxText, okButtonText, cancelButtonText } = this.conf;
        let ct = hasCheckBox ? '<div style="flex;flex-direction: row"><input id="permissionAskHideCheckBox" type="checkbox" />\n            <span>'.concat(checkBoxText, "</span>\n            </div> ") : "";
        let innerHTML = '<div>\n        <div>\n        <div style="text-align: center">\n        <b>'.concat(title, "</b>\n        </div>\n        <p>").concat(text, "</p>\n        ").concat(ct, '\n        </div>\n        <div style="text-align: right;margin-right: 20px">\n        <button id="permissionAskCancelButton" href="#" style="margin-right: 20px">').concat(cancelButtonText, '</button>\n        <button id="permissionAskOkButton">').concat(okButtonText, "</button></div>\n        </div>");
        return innerHTML;
    }
    initDialog() {
        let checkBoxValue = this.getCheckBoxValue();
        if (checkBoxValue === false) {
            this.callAsk();
            this.exit();
            return;
        }
        var dialog = document.createElement("dialog");
        this.dialog = dialog;
        dialog.innerHTML = this.createDialogInnerHtml();
        document.body.appendChild(dialog);
        this.initCloseButton();
        this.initOkButton();
        dialog.showModal();
    }
    initCloseButton() {
        let closeBtn = document.getElementById("permissionAskCancelButton");
        if (closeBtn) {
            closeBtn.onclick = ()=>{
                this.closeDialog();
            };
        }
    }
    initOkButton() {
        let okBtn = document.getElementById("permissionAskOkButton");
        console.log("oooooooooke button=", okBtn);
        if (!okBtn) return;
        console.log("oozz", okBtn, this);
        okBtn.onclick = this.onOkClick.bind(this);
    }
    callAsk() {
        this.permission.callAsk();
    }
    exit() {
        if (this.exited) return;
        this.exited = true;
    }
    closeDialog() {
        this.exit();
        if (!this.dialog) return;
        this.dialog.close();
        document.body.removeChild(this.dialog);
        this.dialog = void 0;
    }
    onOkClick() {
        console.log("ooooooooooookkkkk clickedqqq");
        this.storeCheckValue();
        this.callAsk();
        this.closeDialog();
    }
    onCloseClick() {
        this.closeDialog();
    }
    constructor(){
        this.exited = false;
        this.showDialog = ()=>{
            this.initDialog();
        };
        this.storeCheckValue = ()=>{
            let { hasCheckBox, storageKey } = this.conf;
            if (!hasCheckBox) return;
            let input = document.getElementById("permissionAskHideCheckBox");
            let checked = false;
            if (input) {
                checked = input["checked"];
            }
            if (checked) {
                let o = {
                    hide: true,
                    time: Date.now()
                };
                src.storage.setItem(storageKey, o);
            }
        };
        this.show = (permission)=>{
            this.permission = permission;
            this.showDialog();
        };
    }
} //# sourceMappingURL=PermissionAskUi.js.map

;// ../../libs/droid/android/dist/src/android/components/floatPermission.js

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








let trans;
function floatpermissionInit() {
    return __async(this, null, function*() {
        trans = yield (0,src.getI18nT)("droid-android/android/components/content");
    });
}
floatpermissionInit();
function callback(isOk, rejectMsg) {}
function createAskScript(eventType, id) {
    let script = '\nvar bl = com.fanfanlo.lib.permissions.FloatPermission.openPermission(function(bl){\n        webViewJs.callJsEvent("'.concat(eventType, '", bl, "').concat(id, '");\n    });\n    webViewJs.callJsEvent("').concat(eventType, '", bl, "').concat(id, '");\n');
    const conf = {
        forceStopTime: 0,
        onlyRunSingle: true,
        stopPrevIfOnlyRunSingle: true,
        injects: [
            [
                "webViewJs"
            ]
        ],
        script
    };
    return AutoWebViewJs/* AutoWebViewJs */.w6.confToScript(conf);
}
function createPermissionConf(askUi, eventType, id) {
    let conf = {
        askUi,
        callback,
        permissionId: 0,
        scripts: {
            ask: {
                script: createAskScript(eventType, id),
                isRunner: true
            },
            check: {
                script: "var bl = com.fanfanlo.lib.permissions.FloatPermission.hasPermission();\n bl;",
                isRunner: false
            }
        },
        listenResume: false
    };
    return conf;
}
function createAskUi() {
    const t = (0,i18n/* getTrans */.j)();
    let conf = {
        cancelButtonText: t("floatPermission.cancel"),
        checkBoxText: t("floatPermission.checkBoxText"),
        hasCheckBox: true,
        okButtonText: t("floatPermission.ok"),
        // storageKey: storageKeys.permissions.float.showAsk,
        storageKey: "storageKeys.permissions.float.showAsk",
        text: t("floatPermission.content"),
        title: t("floatPermission.title")
    };
    let askUi = new PermissionAskUi();
    askUi.conf = conf;
    return askUi;
}
function listenAskBackEvent(eventType, permission) {
    let print = new Log/* Log */.tG(false, "fn-listenAskBackEvent").print;
    const index = WebViewJs/* WebViewJs */.L.instance.shellListen(androidDispatchers/* androidDispatchers */.m.webViewJs.name, eventType, eventType, true, onBack);
    print("index is", index);
    function onBack(data) {
        print("fn-onBack result is", data);
    }
    document.addEventListener(documentUtils/* documentEventTypeDocumentIsShow */.oj, onDocumentShow);
    function onDocumentShow() {
        document.removeEventListener(documentUtils/* documentEventTypeDocumentIsShow */.oj, onDocumentShow);
        let res = WebViewJs/* WebViewJs */.L.instance.shellRemoveListen(androidDispatchers/* androidDispatchers */.m.webViewJs.name, index);
        permission.askComplete();
        print("android listener removeListen", res);
    }
}
function createFloatPermission() {
    let askUi = createAskUi();
    let id = Date.now().toString();
    let eventType = "onFloatPermissionSettingResult".concat(id);
    let permissionConf = createPermissionConf(askUi, eventType, id);
    let floatPermission = new FloatPermission();
    floatPermission.conf = permissionConf;
    return floatPermission;
}
class FloatPermission extends Permission/* Permission */.a {
    ask() {
        let id = Date.now().toString();
        let eventType = "onFloatPermissionSettingResult".concat(id);
        this.conf.scripts.ask.script = createAskScript(eventType, id);
        listenAskBackEvent(eventType, this);
        let res = super.ask();
        this.dispatchMayUpdatedEvent(void 0, void 0);
    }
    constructor(){
        super();
        this.androidPermissionList = [
            Manifest/* Manifest */._.Permission.SYSTEM_ALERT_WINDOW
        ];
    }
} //# sourceMappingURL=floatPermission.js.map

;// ../../libs/droid/android/dist/src/android/components/A11yPermission.js






function A11yPermission_callback(isOk, rejectMsg) {}
function A11yPermission_createPermissionConf(askUi) {
    let conf = {
        askUi,
        callback: A11yPermission_callback,
        permissionId: 0,
        scripts: {
            ask: {
                script: "",
                isRunner: false
            },
            check: {
                script: "",
                isRunner: false
            }
        },
        listenResume: true
    };
    return conf;
}
function A11yPermission_createAskUi() {
    const t = (0,i18n/* getTrans */.j)();
    let conf = {
        cancelButtonText: t("A11yPermission.cancel"),
        checkBoxText: t("A11yPermission.checkBoxText"),
        hasCheckBox: true,
        okButtonText: t("A11yPermission.ok"),
        // storageKey: storageKeys.permissions.a11y.showAsk,
        storageKey: "storageKeys.permissions.a11y.showAsk",
        text: t("A11yPermission.content"),
        title: t("A11yPermission.title")
    };
    let askUi = new PermissionAskUi();
    askUi.conf = conf;
    return askUi;
}
function createA11yPermission() {
    let askUi = A11yPermission_createAskUi();
    let permissionConf = A11yPermission_createPermissionConf(askUi);
    let permission = new A11yPermission();
    permission.conf = permissionConf;
    return permission;
}
class A11yPermission extends Permission/* Permission */.a {
    runCheck() {
        let { print, error, warn, logger } = this.logger.sub(false, "fn_ask");
        let res = AutoWebViewJs/* autoWebViewJs */.yx.onCallGetA11yServiceLiveInfo();
        let { errMsg, javaResultData: data } = res;
        if (errMsg) {
            error(errMsg);
            error(errMsg);
            return void 0;
        }
        print("data2 is", res);
        return data == null ? void 0 : data.hasPermission;
    }
    ask() {
        AutoWebViewJs/* autoWebViewJs */.yx.onCallOpenA11yPermission();
    }
    constructor(){
        super();
        this.androidPermissionList = [
            Manifest/* Manifest */._.Permission.BIND_ACCESSIBILITY_SERVICE
        ];
    }
} //# sourceMappingURL=A11yPermission.js.map

// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/components/PermissionGroup.js
var PermissionGroup = __webpack_require__(17763);
;// ../../libs/droid/android/dist/src/android/components/permissionGroupCreator.js

var permissionGroupCreator_async = (__this, __arguments, generator)=>{
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




const P = Manifest/* Manifest */._.Permission;
const map = {
    [P.BIND_ACCESSIBILITY_SERVICE]: createA11yPermission,
    [P.SYSTEM_ALERT_WINDOW]: createFloatPermission
};
function createFloatA11yPermissionGroup() {
    return createPermissionsGroup(P.SYSTEM_ALERT_WINDOW, P.BIND_ACCESSIBILITY_SERVICE);
}
function createPermissionsGroup() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    let list = [];
    for(let i = 0; i < args.length; i++){
        let name = args[i];
        let f = map[name];
        if (!f) {
            throw new Error("no permission registed " + name);
        }
        list.push(f());
    }
    let group = new PermissionGroup/* PermissionGroup */.v(list);
    return group;
}
function runPermissionGroup() {
    for(var _len = arguments.length, permissions = new Array(_len), _key = 0; _key < _len; _key++){
        permissions[_key] = arguments[_key];
    }
    return permissionGroupCreator_async(this, null, function*() {
        return new Promise((resolve, reject)=>{
            let group = createPermissionsGroup(...permissions);
            group.addEventListener(PermissionGroup/* PermissionGroup */.v.eventComplete, ()=>{
                if (group.isSuccess) {
                    resolve(group);
                } else {
                    reject(group);
                }
            });
            group.run();
        });
    });
} //# sourceMappingURL=permissionGroupCreator.js.map


/***/ }),

/***/ 95850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Manifest)
/* harmony export */ });

class PermissionGroup {
}
PermissionGroup.ACTIVITY_RECOGNITION = "android.permission-group.ACTIVITY_RECOGNITION";
PermissionGroup.CALENDAR = "android.permission-group.CALENDAR";
PermissionGroup.CALL_LOG = "android.permission-group.CALL_LOG";
PermissionGroup.CAMERA = "android.permission-group.CAMERA";
PermissionGroup.CONTACTS = "android.permission-group.CONTACTS";
PermissionGroup.LOCATION = "android.permission-group.LOCATION";
PermissionGroup.MICROPHONE = "android.permission-group.MICROPHONE";
PermissionGroup.NEARBY_DEVICES = "android.permission-group.NEARBY_DEVICES";
PermissionGroup.NOTIFICATIONS = "android.permission-group.NOTIFICATIONS";
PermissionGroup.PHONE = "android.permission-group.PHONE";
PermissionGroup.READ_MEDIA_AURAL = "android.permission-group.READ_MEDIA_AURAL";
PermissionGroup.READ_MEDIA_VISUAL = "android.permission-group.READ_MEDIA_VISUAL";
PermissionGroup.SENSORS = "android.permission-group.SENSORS";
PermissionGroup.SMS = "android.permission-group.SMS";
PermissionGroup.STORAGE = "android.permission-group.STORAGE";
class Permission {
}
Permission.ACCEPT_HANDOVER = "android.permission.ACCEPT_HANDOVER";
Permission.ACCESS_BACKGROUND_LOCATION = "android.permission.ACCESS_BACKGROUND_LOCATION";
Permission.ACCESS_BLOBS_ACROSS_USERS = "android.permission.ACCESS_BLOBS_ACROSS_USERS";
Permission.ACCESS_CHECKIN_PROPERTIES = "android.permission.ACCESS_CHECKIN_PROPERTIES";
Permission.ACCESS_COARSE_LOCATION = "android.permission.ACCESS_COARSE_LOCATION";
Permission.ACCESS_FINE_LOCATION = "android.permission.ACCESS_FINE_LOCATION";
Permission.ACCESS_LOCATION_EXTRA_COMMANDS = "android.permission.ACCESS_LOCATION_EXTRA_COMMANDS";
Permission.ACCESS_MEDIA_LOCATION = "android.permission.ACCESS_MEDIA_LOCATION";
Permission.ACCESS_NETWORK_STATE = "android.permission.ACCESS_NETWORK_STATE";
Permission.ACCESS_NOTIFICATION_POLICY = "android.permission.ACCESS_NOTIFICATION_POLICY";
Permission.ACCESS_WIFI_STATE = "android.permission.ACCESS_WIFI_STATE";
Permission.ACCOUNT_MANAGER = "android.permission.ACCOUNT_MANAGER";
Permission.ACTIVITY_RECOGNITION = "android.permission.ACTIVITY_RECOGNITION";
Permission.ADD_VOICEMAIL = "com.android.voicemail.permission.ADD_VOICEMAIL";
Permission.ANSWER_PHONE_CALLS = "android.permission.ANSWER_PHONE_CALLS";
Permission.BATTERY_STATS = "android.permission.BATTERY_STATS";
Permission.BIND_ACCESSIBILITY_SERVICE = "android.permission.BIND_ACCESSIBILITY_SERVICE";
Permission.BIND_APPWIDGET = "android.permission.BIND_APPWIDGET";
Permission.BIND_AUTOFILL_SERVICE = "android.permission.BIND_AUTOFILL_SERVICE";
Permission.BIND_CALL_REDIRECTION_SERVICE = "android.permission.BIND_CALL_REDIRECTION_SERVICE";
Permission.BIND_CARRIER_MESSAGING_CLIENT_SERVICE = "android.permission.BIND_CARRIER_MESSAGING_CLIENT_SERVICE";
/** @deprecated */ Permission.BIND_CARRIER_MESSAGING_SERVICE = "android.permission.BIND_CARRIER_MESSAGING_SERVICE";
Permission.BIND_CARRIER_SERVICES = "android.permission.BIND_CARRIER_SERVICES";
/** @deprecated */ Permission.BIND_CHOOSER_TARGET_SERVICE = "android.permission.BIND_CHOOSER_TARGET_SERVICE";
Permission.BIND_COMPANION_DEVICE_SERVICE = "android.permission.BIND_COMPANION_DEVICE_SERVICE";
Permission.BIND_CONDITION_PROVIDER_SERVICE = "android.permission.BIND_CONDITION_PROVIDER_SERVICE";
Permission.BIND_CONTROLS = "android.permission.BIND_CONTROLS";
Permission.BIND_CREDENTIAL_PROVIDER_SERVICE = "android.permission.BIND_CREDENTIAL_PROVIDER_SERVICE";
Permission.BIND_DEVICE_ADMIN = "android.permission.BIND_DEVICE_ADMIN";
Permission.BIND_DREAM_SERVICE = "android.permission.BIND_DREAM_SERVICE";
Permission.BIND_INCALL_SERVICE = "android.permission.BIND_INCALL_SERVICE";
Permission.BIND_INPUT_METHOD = "android.permission.BIND_INPUT_METHOD";
Permission.BIND_MIDI_DEVICE_SERVICE = "android.permission.BIND_MIDI_DEVICE_SERVICE";
Permission.BIND_NFC_SERVICE = "android.permission.BIND_NFC_SERVICE";
Permission.BIND_NOTIFICATION_LISTENER_SERVICE = "android.permission.BIND_NOTIFICATION_LISTENER_SERVICE";
Permission.BIND_PRINT_SERVICE = "android.permission.BIND_PRINT_SERVICE";
Permission.BIND_QUICK_ACCESS_WALLET_SERVICE = "android.permission.BIND_QUICK_ACCESS_WALLET_SERVICE";
Permission.BIND_QUICK_SETTINGS_TILE = "android.permission.BIND_QUICK_SETTINGS_TILE";
Permission.BIND_REMOTEVIEWS = "android.permission.BIND_REMOTEVIEWS";
Permission.BIND_SCREENING_SERVICE = "android.permission.BIND_SCREENING_SERVICE";
Permission.BIND_TELECOM_CONNECTION_SERVICE = "android.permission.BIND_TELECOM_CONNECTION_SERVICE";
Permission.BIND_TEXT_SERVICE = "android.permission.BIND_TEXT_SERVICE";
Permission.BIND_TV_INPUT = "android.permission.BIND_TV_INPUT";
Permission.BIND_TV_INTERACTIVE_APP = "android.permission.BIND_TV_INTERACTIVE_APP";
Permission.BIND_VISUAL_VOICEMAIL_SERVICE = "android.permission.BIND_VISUAL_VOICEMAIL_SERVICE";
Permission.BIND_VOICE_INTERACTION = "android.permission.BIND_VOICE_INTERACTION";
Permission.BIND_VPN_SERVICE = "android.permission.BIND_VPN_SERVICE";
Permission.BIND_VR_LISTENER_SERVICE = "android.permission.BIND_VR_LISTENER_SERVICE";
Permission.BIND_WALLPAPER = "android.permission.BIND_WALLPAPER";
Permission.BLUETOOTH = "android.permission.BLUETOOTH";
Permission.BLUETOOTH_ADMIN = "android.permission.BLUETOOTH_ADMIN";
Permission.BLUETOOTH_ADVERTISE = "android.permission.BLUETOOTH_ADVERTISE";
Permission.BLUETOOTH_CONNECT = "android.permission.BLUETOOTH_CONNECT";
Permission.BLUETOOTH_PRIVILEGED = "android.permission.BLUETOOTH_PRIVILEGED";
Permission.BLUETOOTH_SCAN = "android.permission.BLUETOOTH_SCAN";
Permission.BODY_SENSORS = "android.permission.BODY_SENSORS";
Permission.BODY_SENSORS_BACKGROUND = "android.permission.BODY_SENSORS_BACKGROUND";
Permission.BROADCAST_PACKAGE_REMOVED = "android.permission.BROADCAST_PACKAGE_REMOVED";
Permission.BROADCAST_SMS = "android.permission.BROADCAST_SMS";
Permission.BROADCAST_STICKY = "android.permission.BROADCAST_STICKY";
Permission.BROADCAST_WAP_PUSH = "android.permission.BROADCAST_WAP_PUSH";
Permission.CALL_COMPANION_APP = "android.permission.CALL_COMPANION_APP";
Permission.CALL_PHONE = "android.permission.CALL_PHONE";
Permission.CALL_PRIVILEGED = "android.permission.CALL_PRIVILEGED";
Permission.CAMERA = "android.permission.CAMERA";
Permission.CAPTURE_AUDIO_OUTPUT = "android.permission.CAPTURE_AUDIO_OUTPUT";
Permission.CHANGE_COMPONENT_ENABLED_STATE = "android.permission.CHANGE_COMPONENT_ENABLED_STATE";
Permission.CHANGE_CONFIGURATION = "android.permission.CHANGE_CONFIGURATION";
Permission.CHANGE_NETWORK_STATE = "android.permission.CHANGE_NETWORK_STATE";
Permission.CHANGE_WIFI_MULTICAST_STATE = "android.permission.CHANGE_WIFI_MULTICAST_STATE";
Permission.CHANGE_WIFI_STATE = "android.permission.CHANGE_WIFI_STATE";
Permission.CLEAR_APP_CACHE = "android.permission.CLEAR_APP_CACHE";
Permission.CONFIGURE_WIFI_DISPLAY = "android.permission.CONFIGURE_WIFI_DISPLAY";
Permission.CONTROL_LOCATION_UPDATES = "android.permission.CONTROL_LOCATION_UPDATES";
Permission.CREDENTIAL_MANAGER_QUERY_CANDIDATE_CREDENTIALS = "android.permission.CREDENTIAL_MANAGER_QUERY_CANDIDATE_CREDENTIALS";
Permission.CREDENTIAL_MANAGER_SET_ALLOWED_PROVIDERS = "android.permission.CREDENTIAL_MANAGER_SET_ALLOWED_PROVIDERS";
Permission.CREDENTIAL_MANAGER_SET_ORIGIN = "android.permission.CREDENTIAL_MANAGER_SET_ORIGIN";
Permission.DELETE_CACHE_FILES = "android.permission.DELETE_CACHE_FILES";
Permission.DELETE_PACKAGES = "android.permission.DELETE_PACKAGES";
Permission.DELIVER_COMPANION_MESSAGES = "android.permission.DELIVER_COMPANION_MESSAGES";
Permission.DETECT_SCREEN_CAPTURE = "android.permission.DETECT_SCREEN_CAPTURE";
Permission.DIAGNOSTIC = "android.permission.DIAGNOSTIC";
Permission.DISABLE_KEYGUARD = "android.permission.DISABLE_KEYGUARD";
Permission.DUMP = "android.permission.DUMP";
Permission.ENFORCE_UPDATE_OWNERSHIP = "android.permission.ENFORCE_UPDATE_OWNERSHIP";
Permission.EXECUTE_APP_ACTION = "android.permission.EXECUTE_APP_ACTION";
Permission.EXPAND_STATUS_BAR = "android.permission.EXPAND_STATUS_BAR";
Permission.FACTORY_TEST = "android.permission.FACTORY_TEST";
Permission.FOREGROUND_SERVICE = "android.permission.FOREGROUND_SERVICE";
Permission.FOREGROUND_SERVICE_CAMERA = "android.permission.FOREGROUND_SERVICE_CAMERA";
Permission.FOREGROUND_SERVICE_CONNECTED_DEVICE = "android.permission.FOREGROUND_SERVICE_CONNECTED_DEVICE";
Permission.FOREGROUND_SERVICE_DATA_SYNC = "android.permission.FOREGROUND_SERVICE_DATA_SYNC";
Permission.FOREGROUND_SERVICE_HEALTH = "android.permission.FOREGROUND_SERVICE_HEALTH";
Permission.FOREGROUND_SERVICE_LOCATION = "android.permission.FOREGROUND_SERVICE_LOCATION";
Permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK = "android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK";
Permission.FOREGROUND_SERVICE_MEDIA_PROJECTION = "android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION";
Permission.FOREGROUND_SERVICE_MICROPHONE = "android.permission.FOREGROUND_SERVICE_MICROPHONE";
Permission.FOREGROUND_SERVICE_PHONE_CALL = "android.permission.FOREGROUND_SERVICE_PHONE_CALL";
Permission.FOREGROUND_SERVICE_REMOTE_MESSAGING = "android.permission.FOREGROUND_SERVICE_REMOTE_MESSAGING";
Permission.FOREGROUND_SERVICE_SPECIAL_USE = "android.permission.FOREGROUND_SERVICE_SPECIAL_USE";
Permission.FOREGROUND_SERVICE_SYSTEM_EXEMPTED = "android.permission.FOREGROUND_SERVICE_SYSTEM_EXEMPTED";
Permission.GET_ACCOUNTS = "android.permission.GET_ACCOUNTS";
Permission.GET_ACCOUNTS_PRIVILEGED = "android.permission.GET_ACCOUNTS_PRIVILEGED";
Permission.GET_PACKAGE_SIZE = "android.permission.GET_PACKAGE_SIZE";
/** @deprecated */ Permission.GET_TASKS = "android.permission.GET_TASKS";
Permission.GLOBAL_SEARCH = "android.permission.GLOBAL_SEARCH";
Permission.HIDE_OVERLAY_WINDOWS = "android.permission.HIDE_OVERLAY_WINDOWS";
Permission.HIGH_SAMPLING_RATE_SENSORS = "android.permission.HIGH_SAMPLING_RATE_SENSORS";
Permission.INSTALL_LOCATION_PROVIDER = "android.permission.INSTALL_LOCATION_PROVIDER";
Permission.INSTALL_PACKAGES = "android.permission.INSTALL_PACKAGES";
Permission.INSTALL_SHORTCUT = "com.android.launcher.permission.INSTALL_SHORTCUT";
Permission.INSTANT_APP_FOREGROUND_SERVICE = "android.permission.INSTANT_APP_FOREGROUND_SERVICE";
Permission.INTERACT_ACROSS_PROFILES = "android.permission.INTERACT_ACROSS_PROFILES";
Permission.INTERNET = "android.permission.INTERNET";
Permission.KILL_BACKGROUND_PROCESSES = "android.permission.KILL_BACKGROUND_PROCESSES";
Permission.LAUNCH_CAPTURE_CONTENT_ACTIVITY_FOR_NOTE = "android.permission.LAUNCH_CAPTURE_CONTENT_ACTIVITY_FOR_NOTE";
Permission.LAUNCH_MULTI_PANE_SETTINGS_DEEP_LINK = "android.permission.LAUNCH_MULTI_PANE_SETTINGS_DEEP_LINK";
Permission.LOADER_USAGE_STATS = "android.permission.LOADER_USAGE_STATS";
Permission.LOCATION_HARDWARE = "android.permission.LOCATION_HARDWARE";
Permission.MANAGE_DEVICE_LOCK_STATE = "android.permission.MANAGE_DEVICE_LOCK_STATE";
Permission.MANAGE_DEVICE_POLICY_ACCESSIBILITY = "android.permission.MANAGE_DEVICE_POLICY_ACCESSIBILITY";
Permission.MANAGE_DEVICE_POLICY_ACCOUNT_MANAGEMENT = "android.permission.MANAGE_DEVICE_POLICY_ACCOUNT_MANAGEMENT";
Permission.MANAGE_DEVICE_POLICY_ACROSS_USERS = "android.permission.MANAGE_DEVICE_POLICY_ACROSS_USERS";
Permission.MANAGE_DEVICE_POLICY_ACROSS_USERS_FULL = "android.permission.MANAGE_DEVICE_POLICY_ACROSS_USERS_FULL";
Permission.MANAGE_DEVICE_POLICY_ACROSS_USERS_SECURITY_CRITICAL = "android.permission.MANAGE_DEVICE_POLICY_ACROSS_USERS_SECURITY_CRITICAL";
Permission.MANAGE_DEVICE_POLICY_AIRPLANE_MODE = "android.permission.MANAGE_DEVICE_POLICY_AIRPLANE_MODE";
Permission.MANAGE_DEVICE_POLICY_APPS_CONTROL = "android.permission.MANAGE_DEVICE_POLICY_APPS_CONTROL";
Permission.MANAGE_DEVICE_POLICY_APP_RESTRICTIONS = "android.permission.MANAGE_DEVICE_POLICY_APP_RESTRICTIONS";
Permission.MANAGE_DEVICE_POLICY_APP_USER_DATA = "android.permission.MANAGE_DEVICE_POLICY_APP_USER_DATA";
Permission.MANAGE_DEVICE_POLICY_AUDIO_OUTPUT = "android.permission.MANAGE_DEVICE_POLICY_AUDIO_OUTPUT";
Permission.MANAGE_DEVICE_POLICY_AUTOFILL = "android.permission.MANAGE_DEVICE_POLICY_AUTOFILL";
Permission.MANAGE_DEVICE_POLICY_BACKUP_SERVICE = "android.permission.MANAGE_DEVICE_POLICY_BACKUP_SERVICE";
Permission.MANAGE_DEVICE_POLICY_BLUETOOTH = "android.permission.MANAGE_DEVICE_POLICY_BLUETOOTH";
Permission.MANAGE_DEVICE_POLICY_BUGREPORT = "android.permission.MANAGE_DEVICE_POLICY_BUGREPORT";
Permission.MANAGE_DEVICE_POLICY_CALLS = "android.permission.MANAGE_DEVICE_POLICY_CALLS";
Permission.MANAGE_DEVICE_POLICY_CAMERA = "android.permission.MANAGE_DEVICE_POLICY_CAMERA";
Permission.MANAGE_DEVICE_POLICY_CERTIFICATES = "android.permission.MANAGE_DEVICE_POLICY_CERTIFICATES";
Permission.MANAGE_DEVICE_POLICY_COMMON_CRITERIA_MODE = "android.permission.MANAGE_DEVICE_POLICY_COMMON_CRITERIA_MODE";
Permission.MANAGE_DEVICE_POLICY_DEBUGGING_FEATURES = "android.permission.MANAGE_DEVICE_POLICY_DEBUGGING_FEATURES";
Permission.MANAGE_DEVICE_POLICY_DEFAULT_SMS = "android.permission.MANAGE_DEVICE_POLICY_DEFAULT_SMS";
Permission.MANAGE_DEVICE_POLICY_DEVICE_IDENTIFIERS = "android.permission.MANAGE_DEVICE_POLICY_DEVICE_IDENTIFIERS";
Permission.MANAGE_DEVICE_POLICY_DISPLAY = "android.permission.MANAGE_DEVICE_POLICY_DISPLAY";
Permission.MANAGE_DEVICE_POLICY_FACTORY_RESET = "android.permission.MANAGE_DEVICE_POLICY_FACTORY_RESET";
Permission.MANAGE_DEVICE_POLICY_FUN = "android.permission.MANAGE_DEVICE_POLICY_FUN";
Permission.MANAGE_DEVICE_POLICY_INPUT_METHODS = "android.permission.MANAGE_DEVICE_POLICY_INPUT_METHODS";
Permission.MANAGE_DEVICE_POLICY_INSTALL_UNKNOWN_SOURCES = "android.permission.MANAGE_DEVICE_POLICY_INSTALL_UNKNOWN_SOURCES";
Permission.MANAGE_DEVICE_POLICY_KEEP_UNINSTALLED_PACKAGES = "android.permission.MANAGE_DEVICE_POLICY_KEEP_UNINSTALLED_PACKAGES";
Permission.MANAGE_DEVICE_POLICY_KEYGUARD = "android.permission.MANAGE_DEVICE_POLICY_KEYGUARD";
Permission.MANAGE_DEVICE_POLICY_LOCALE = "android.permission.MANAGE_DEVICE_POLICY_LOCALE";
Permission.MANAGE_DEVICE_POLICY_LOCATION = "android.permission.MANAGE_DEVICE_POLICY_LOCATION";
Permission.MANAGE_DEVICE_POLICY_LOCK = "android.permission.MANAGE_DEVICE_POLICY_LOCK";
Permission.MANAGE_DEVICE_POLICY_LOCK_CREDENTIALS = "android.permission.MANAGE_DEVICE_POLICY_LOCK_CREDENTIALS";
Permission.MANAGE_DEVICE_POLICY_LOCK_TASK = "android.permission.MANAGE_DEVICE_POLICY_LOCK_TASK";
Permission.MANAGE_DEVICE_POLICY_METERED_DATA = "android.permission.MANAGE_DEVICE_POLICY_METERED_DATA";
Permission.MANAGE_DEVICE_POLICY_MICROPHONE = "android.permission.MANAGE_DEVICE_POLICY_MICROPHONE";
Permission.MANAGE_DEVICE_POLICY_MOBILE_NETWORK = "android.permission.MANAGE_DEVICE_POLICY_MOBILE_NETWORK";
Permission.MANAGE_DEVICE_POLICY_MODIFY_USERS = "android.permission.MANAGE_DEVICE_POLICY_MODIFY_USERS";
Permission.MANAGE_DEVICE_POLICY_MTE = "android.permission.MANAGE_DEVICE_POLICY_MTE";
Permission.MANAGE_DEVICE_POLICY_NEARBY_COMMUNICATION = "android.permission.MANAGE_DEVICE_POLICY_NEARBY_COMMUNICATION";
Permission.MANAGE_DEVICE_POLICY_NETWORK_LOGGING = "android.permission.MANAGE_DEVICE_POLICY_NETWORK_LOGGING";
Permission.MANAGE_DEVICE_POLICY_ORGANIZATION_IDENTITY = "android.permission.MANAGE_DEVICE_POLICY_ORGANIZATION_IDENTITY";
Permission.MANAGE_DEVICE_POLICY_OVERRIDE_APN = "android.permission.MANAGE_DEVICE_POLICY_OVERRIDE_APN";
Permission.MANAGE_DEVICE_POLICY_PACKAGE_STATE = "android.permission.MANAGE_DEVICE_POLICY_PACKAGE_STATE";
Permission.MANAGE_DEVICE_POLICY_PHYSICAL_MEDIA = "android.permission.MANAGE_DEVICE_POLICY_PHYSICAL_MEDIA";
Permission.MANAGE_DEVICE_POLICY_PRINTING = "android.permission.MANAGE_DEVICE_POLICY_PRINTING";
Permission.MANAGE_DEVICE_POLICY_PRIVATE_DNS = "android.permission.MANAGE_DEVICE_POLICY_PRIVATE_DNS";
Permission.MANAGE_DEVICE_POLICY_PROFILES = "android.permission.MANAGE_DEVICE_POLICY_PROFILES";
Permission.MANAGE_DEVICE_POLICY_PROFILE_INTERACTION = "android.permission.MANAGE_DEVICE_POLICY_PROFILE_INTERACTION";
Permission.MANAGE_DEVICE_POLICY_PROXY = "android.permission.MANAGE_DEVICE_POLICY_PROXY";
Permission.MANAGE_DEVICE_POLICY_QUERY_SYSTEM_UPDATES = "android.permission.MANAGE_DEVICE_POLICY_QUERY_SYSTEM_UPDATES";
Permission.MANAGE_DEVICE_POLICY_RESET_PASSWORD = "android.permission.MANAGE_DEVICE_POLICY_RESET_PASSWORD";
Permission.MANAGE_DEVICE_POLICY_RESTRICT_PRIVATE_DNS = "android.permission.MANAGE_DEVICE_POLICY_RESTRICT_PRIVATE_DNS";
Permission.MANAGE_DEVICE_POLICY_RUNTIME_PERMISSIONS = "android.permission.MANAGE_DEVICE_POLICY_RUNTIME_PERMISSIONS";
Permission.MANAGE_DEVICE_POLICY_RUN_IN_BACKGROUND = "android.permission.MANAGE_DEVICE_POLICY_RUN_IN_BACKGROUND";
Permission.MANAGE_DEVICE_POLICY_SAFE_BOOT = "android.permission.MANAGE_DEVICE_POLICY_SAFE_BOOT";
Permission.MANAGE_DEVICE_POLICY_SCREEN_CAPTURE = "android.permission.MANAGE_DEVICE_POLICY_SCREEN_CAPTURE";
Permission.MANAGE_DEVICE_POLICY_SCREEN_CONTENT = "android.permission.MANAGE_DEVICE_POLICY_SCREEN_CONTENT";
Permission.MANAGE_DEVICE_POLICY_SECURITY_LOGGING = "android.permission.MANAGE_DEVICE_POLICY_SECURITY_LOGGING";
Permission.MANAGE_DEVICE_POLICY_SETTINGS = "android.permission.MANAGE_DEVICE_POLICY_SETTINGS";
Permission.MANAGE_DEVICE_POLICY_SMS = "android.permission.MANAGE_DEVICE_POLICY_SMS";
Permission.MANAGE_DEVICE_POLICY_STATUS_BAR = "android.permission.MANAGE_DEVICE_POLICY_STATUS_BAR";
Permission.MANAGE_DEVICE_POLICY_SUPPORT_MESSAGE = "android.permission.MANAGE_DEVICE_POLICY_SUPPORT_MESSAGE";
Permission.MANAGE_DEVICE_POLICY_SUSPEND_PERSONAL_APPS = "android.permission.MANAGE_DEVICE_POLICY_SUSPEND_PERSONAL_APPS";
Permission.MANAGE_DEVICE_POLICY_SYSTEM_APPS = "android.permission.MANAGE_DEVICE_POLICY_SYSTEM_APPS";
Permission.MANAGE_DEVICE_POLICY_SYSTEM_DIALOGS = "android.permission.MANAGE_DEVICE_POLICY_SYSTEM_DIALOGS";
Permission.MANAGE_DEVICE_POLICY_SYSTEM_UPDATES = "android.permission.MANAGE_DEVICE_POLICY_SYSTEM_UPDATES";
Permission.MANAGE_DEVICE_POLICY_TIME = "android.permission.MANAGE_DEVICE_POLICY_TIME";
Permission.MANAGE_DEVICE_POLICY_USB_DATA_SIGNALLING = "android.permission.MANAGE_DEVICE_POLICY_USB_DATA_SIGNALLING";
Permission.MANAGE_DEVICE_POLICY_USB_FILE_TRANSFER = "android.permission.MANAGE_DEVICE_POLICY_USB_FILE_TRANSFER";
Permission.MANAGE_DEVICE_POLICY_USERS = "android.permission.MANAGE_DEVICE_POLICY_USERS";
Permission.MANAGE_DEVICE_POLICY_VPN = "android.permission.MANAGE_DEVICE_POLICY_VPN";
Permission.MANAGE_DEVICE_POLICY_WALLPAPER = "android.permission.MANAGE_DEVICE_POLICY_WALLPAPER";
Permission.MANAGE_DEVICE_POLICY_WIFI = "android.permission.MANAGE_DEVICE_POLICY_WIFI";
Permission.MANAGE_DEVICE_POLICY_WINDOWS = "android.permission.MANAGE_DEVICE_POLICY_WINDOWS";
Permission.MANAGE_DEVICE_POLICY_WIPE_DATA = "android.permission.MANAGE_DEVICE_POLICY_WIPE_DATA";
Permission.MANAGE_DOCUMENTS = "android.permission.MANAGE_DOCUMENTS";
Permission.MANAGE_EXTERNAL_STORAGE = "android.permission.MANAGE_EXTERNAL_STORAGE";
Permission.MANAGE_MEDIA = "android.permission.MANAGE_MEDIA";
Permission.MANAGE_ONGOING_CALLS = "android.permission.MANAGE_ONGOING_CALLS";
Permission.MANAGE_OWN_CALLS = "android.permission.MANAGE_OWN_CALLS";
Permission.MANAGE_WIFI_INTERFACES = "android.permission.MANAGE_WIFI_INTERFACES";
Permission.MANAGE_WIFI_NETWORK_SELECTION = "android.permission.MANAGE_WIFI_NETWORK_SELECTION";
Permission.MASTER_CLEAR = "android.permission.MASTER_CLEAR";
Permission.MEDIA_CONTENT_CONTROL = "android.permission.MEDIA_CONTENT_CONTROL";
Permission.MODIFY_AUDIO_SETTINGS = "android.permission.MODIFY_AUDIO_SETTINGS";
Permission.MODIFY_PHONE_STATE = "android.permission.MODIFY_PHONE_STATE";
Permission.MOUNT_FORMAT_FILESYSTEMS = "android.permission.MOUNT_FORMAT_FILESYSTEMS";
Permission.MOUNT_UNMOUNT_FILESYSTEMS = "android.permission.MOUNT_UNMOUNT_FILESYSTEMS";
Permission.NEARBY_WIFI_DEVICES = "android.permission.NEARBY_WIFI_DEVICES";
Permission.NFC = "android.permission.NFC";
Permission.NFC_PREFERRED_PAYMENT_INFO = "android.permission.NFC_PREFERRED_PAYMENT_INFO";
Permission.NFC_TRANSACTION_EVENT = "android.permission.NFC_TRANSACTION_EVENT";
Permission.OVERRIDE_WIFI_CONFIG = "android.permission.OVERRIDE_WIFI_CONFIG";
Permission.PACKAGE_USAGE_STATS = "android.permission.PACKAGE_USAGE_STATS";
/** @deprecated */ Permission.PERSISTENT_ACTIVITY = "android.permission.PERSISTENT_ACTIVITY";
Permission.POST_NOTIFICATIONS = "android.permission.POST_NOTIFICATIONS";
/** @deprecated */ Permission.PROCESS_OUTGOING_CALLS = "android.permission.PROCESS_OUTGOING_CALLS";
Permission.PROVIDE_OWN_AUTOFILL_SUGGESTIONS = "android.permission.PROVIDE_OWN_AUTOFILL_SUGGESTIONS";
Permission.PROVIDE_REMOTE_CREDENTIALS = "android.permission.PROVIDE_REMOTE_CREDENTIALS";
Permission.QUERY_ALL_PACKAGES = "android.permission.QUERY_ALL_PACKAGES";
Permission.READ_ASSISTANT_APP_SEARCH_DATA = "android.permission.READ_ASSISTANT_APP_SEARCH_DATA";
Permission.READ_BASIC_PHONE_STATE = "android.permission.READ_BASIC_PHONE_STATE";
Permission.READ_CALENDAR = "android.permission.READ_CALENDAR";
Permission.READ_CALL_LOG = "android.permission.READ_CALL_LOG";
Permission.READ_CONTACTS = "android.permission.READ_CONTACTS";
Permission.READ_EXTERNAL_STORAGE = "android.permission.READ_EXTERNAL_STORAGE";
Permission.READ_HOME_APP_SEARCH_DATA = "android.permission.READ_HOME_APP_SEARCH_DATA";
/** @deprecated */ Permission.READ_INPUT_STATE = "android.permission.READ_INPUT_STATE";
Permission.READ_LOGS = "android.permission.READ_LOGS";
Permission.READ_MEDIA_AUDIO = "android.permission.READ_MEDIA_AUDIO";
Permission.READ_MEDIA_IMAGES = "android.permission.READ_MEDIA_IMAGES";
Permission.READ_MEDIA_VIDEO = "android.permission.READ_MEDIA_VIDEO";
Permission.READ_MEDIA_VISUAL_USER_SELECTED = "android.permission.READ_MEDIA_VISUAL_USER_SELECTED";
Permission.READ_NEARBY_STREAMING_POLICY = "android.permission.READ_NEARBY_STREAMING_POLICY";
Permission.READ_PHONE_NUMBERS = "android.permission.READ_PHONE_NUMBERS";
Permission.READ_PHONE_STATE = "android.permission.READ_PHONE_STATE";
Permission.READ_PRECISE_PHONE_STATE = "android.permission.READ_PRECISE_PHONE_STATE";
Permission.READ_SMS = "android.permission.READ_SMS";
Permission.READ_SYNC_SETTINGS = "android.permission.READ_SYNC_SETTINGS";
Permission.READ_SYNC_STATS = "android.permission.READ_SYNC_STATS";
Permission.READ_VOICEMAIL = "com.android.voicemail.permission.READ_VOICEMAIL";
Permission.REBOOT = "android.permission.REBOOT";
Permission.RECEIVE_BOOT_COMPLETED = "android.permission.RECEIVE_BOOT_COMPLETED";
Permission.RECEIVE_MMS = "android.permission.RECEIVE_MMS";
Permission.RECEIVE_SMS = "android.permission.RECEIVE_SMS";
Permission.RECEIVE_WAP_PUSH = "android.permission.RECEIVE_WAP_PUSH";
Permission.RECORD_AUDIO = "android.permission.RECORD_AUDIO";
Permission.REORDER_TASKS = "android.permission.REORDER_TASKS";
Permission.REQUEST_COMPANION_PROFILE_APP_STREAMING = "android.permission.REQUEST_COMPANION_PROFILE_APP_STREAMING";
Permission.REQUEST_COMPANION_PROFILE_AUTOMOTIVE_PROJECTION = "android.permission.REQUEST_COMPANION_PROFILE_AUTOMOTIVE_PROJECTION";
Permission.REQUEST_COMPANION_PROFILE_COMPUTER = "android.permission.REQUEST_COMPANION_PROFILE_COMPUTER";
Permission.REQUEST_COMPANION_PROFILE_GLASSES = "android.permission.REQUEST_COMPANION_PROFILE_GLASSES";
Permission.REQUEST_COMPANION_PROFILE_NEARBY_DEVICE_STREAMING = "android.permission.REQUEST_COMPANION_PROFILE_NEARBY_DEVICE_STREAMING";
Permission.REQUEST_COMPANION_PROFILE_WATCH = "android.permission.REQUEST_COMPANION_PROFILE_WATCH";
Permission.REQUEST_COMPANION_RUN_IN_BACKGROUND = "android.permission.REQUEST_COMPANION_RUN_IN_BACKGROUND";
Permission.REQUEST_COMPANION_SELF_MANAGED = "android.permission.REQUEST_COMPANION_SELF_MANAGED";
Permission.REQUEST_COMPANION_START_FOREGROUND_SERVICES_FROM_BACKGROUND = "android.permission.REQUEST_COMPANION_START_FOREGROUND_SERVICES_FROM_BACKGROUND";
Permission.REQUEST_COMPANION_USE_DATA_IN_BACKGROUND = "android.permission.REQUEST_COMPANION_USE_DATA_IN_BACKGROUND";
Permission.REQUEST_DELETE_PACKAGES = "android.permission.REQUEST_DELETE_PACKAGES";
Permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS = "android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS";
Permission.REQUEST_INSTALL_PACKAGES = "android.permission.REQUEST_INSTALL_PACKAGES";
Permission.REQUEST_OBSERVE_COMPANION_DEVICE_PRESENCE = "android.permission.REQUEST_OBSERVE_COMPANION_DEVICE_PRESENCE";
Permission.REQUEST_PASSWORD_COMPLEXITY = "android.permission.REQUEST_PASSWORD_COMPLEXITY";
/** @deprecated */ Permission.RESTART_PACKAGES = "android.permission.RESTART_PACKAGES";
Permission.RUN_USER_INITIATED_JOBS = "android.permission.RUN_USER_INITIATED_JOBS";
Permission.SCHEDULE_EXACT_ALARM = "android.permission.SCHEDULE_EXACT_ALARM";
Permission.SEND_RESPOND_VIA_MESSAGE = "android.permission.SEND_RESPOND_VIA_MESSAGE";
Permission.SEND_SMS = "android.permission.SEND_SMS";
Permission.SET_ALARM = "com.android.alarm.permission.SET_ALARM";
Permission.SET_ALWAYS_FINISH = "android.permission.SET_ALWAYS_FINISH";
Permission.SET_ANIMATION_SCALE = "android.permission.SET_ANIMATION_SCALE";
Permission.SET_DEBUG_APP = "android.permission.SET_DEBUG_APP";
/** @deprecated */ Permission.SET_PREFERRED_APPLICATIONS = "android.permission.SET_PREFERRED_APPLICATIONS";
Permission.SET_PROCESS_LIMIT = "android.permission.SET_PROCESS_LIMIT";
Permission.SET_TIME = "android.permission.SET_TIME";
Permission.SET_TIME_ZONE = "android.permission.SET_TIME_ZONE";
Permission.SET_WALLPAPER = "android.permission.SET_WALLPAPER";
Permission.SET_WALLPAPER_HINTS = "android.permission.SET_WALLPAPER_HINTS";
Permission.SIGNAL_PERSISTENT_PROCESSES = "android.permission.SIGNAL_PERSISTENT_PROCESSES";
/** @deprecated */ Permission.SMS_FINANCIAL_TRANSACTIONS = "android.permission.SMS_FINANCIAL_TRANSACTIONS";
Permission.START_FOREGROUND_SERVICES_FROM_BACKGROUND = "android.permission.START_FOREGROUND_SERVICES_FROM_BACKGROUND";
Permission.START_VIEW_APP_FEATURES = "android.permission.START_VIEW_APP_FEATURES";
Permission.START_VIEW_PERMISSION_USAGE = "android.permission.START_VIEW_PERMISSION_USAGE";
Permission.STATUS_BAR = "android.permission.STATUS_BAR";
Permission.SUBSCRIBE_TO_KEYGUARD_LOCKED_STATE = "android.permission.SUBSCRIBE_TO_KEYGUARD_LOCKED_STATE";
// 浮窗
Permission.SYSTEM_ALERT_WINDOW = "android.permission.SYSTEM_ALERT_WINDOW";
Permission.TRANSMIT_IR = "android.permission.TRANSMIT_IR";
Permission.TURN_SCREEN_ON = "android.permission.TURN_SCREEN_ON";
Permission.UNINSTALL_SHORTCUT = "com.android.launcher.permission.UNINSTALL_SHORTCUT";
Permission.UPDATE_DEVICE_STATS = "android.permission.UPDATE_DEVICE_STATS";
Permission.UPDATE_PACKAGES_WITHOUT_USER_ACTION = "android.permission.UPDATE_PACKAGES_WITHOUT_USER_ACTION";
Permission.USE_BIOMETRIC = "android.permission.USE_BIOMETRIC";
Permission.USE_EXACT_ALARM = "android.permission.USE_EXACT_ALARM";
/** @deprecated */ Permission.USE_FINGERPRINT = "android.permission.USE_FINGERPRINT";
Permission.USE_FULL_SCREEN_INTENT = "android.permission.USE_FULL_SCREEN_INTENT";
Permission.USE_ICC_AUTH_WITH_DEVICE_IDENTIFIER = "android.permission.USE_ICC_AUTH_WITH_DEVICE_IDENTIFIER";
Permission.USE_SIP = "android.permission.USE_SIP";
Permission.UWB_RANGING = "android.permission.UWB_RANGING";
Permission.VIBRATE = "android.permission.VIBRATE";
Permission.WAKE_LOCK = "android.permission.WAKE_LOCK";
Permission.WRITE_APN_SETTINGS = "android.permission.WRITE_APN_SETTINGS";
Permission.WRITE_CALENDAR = "android.permission.WRITE_CALENDAR";
Permission.WRITE_CALL_LOG = "android.permission.WRITE_CALL_LOG";
Permission.WRITE_CONTACTS = "android.permission.WRITE_CONTACTS";
Permission.WRITE_EXTERNAL_STORAGE = "android.permission.WRITE_EXTERNAL_STORAGE";
Permission.WRITE_GSERVICES = "android.permission.WRITE_GSERVICES";
Permission.WRITE_SECURE_SETTINGS = "android.permission.WRITE_SECURE_SETTINGS";
Permission.WRITE_SETTINGS = "android.permission.WRITE_SETTINGS";
Permission.WRITE_SYNC_SETTINGS = "android.permission.WRITE_SYNC_SETTINGS";
Permission.WRITE_VOICEMAIL = "com.android.voicemail.permission.WRITE_VOICEMAIL";
class Manifest {
}
Manifest.Permission = Permission;
Manifest.PermissionGroup = PermissionGroup; //# sourceMappingURL=Manifest.js.map


/***/ })

}]);
//# sourceMappingURL=3797-ee11f0599795c6be.js.map