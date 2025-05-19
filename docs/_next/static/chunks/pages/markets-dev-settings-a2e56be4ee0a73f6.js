(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4565],{

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
/* harmony import */ var _useProxyWatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82916);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56934);

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
    const [v] = (0,_useProxyWatch__WEBPACK_IMPORTED_MODULE_4__/* .useProxyWatch */ .x)(target, propertyChain, defaultValue);
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_watchUpdates__WEBPACK_IMPORTED_MODULE_3__/* .watchUpdates */ .c)(v, (info)=>{
            setValue(lodash__WEBPACK_IMPORTED_MODULE_0___default().isArray(v) ? [
                ...v
            ] : __spreadValues({}, v));
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

/***/ 59384:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/markets-dev-settings",
      function () {
        return __webpack_require__(77827);
      }
    ]);
    if(false) {}
  

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

/***/ 77827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MarketsDevSettingsPage),
  getContacts: () => (/* binding */ getContacts)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/app/AppShell.js + 1 modules
var AppShell = __webpack_require__(42375);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(15463);
;// ../../libs/app/ui/dist/src/components/app/AppPageDataWrapperShell.js




function AppPageDataWrapperShell(param) {
    let { children, contextValue, ContextProvider } = param;
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(AppShell/* AppShell */.G, {
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(src.ContextWrapper, {
            contextValue,
            ContextProvider,
            children
        })
    });
} //# sourceMappingURL=AppPageDataWrapperShell.js.map

// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/appbar/AppBar.js + 3 modules
var AppBar = __webpack_require__(77190);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/AutoWebViewJs.js + 1 modules
var AutoWebViewJs = __webpack_require__(17696);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/dispatcher/Dispatcher.js
var Dispatcher = __webpack_require__(93276);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(20532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Button/Button.js + 3 modules
var Button = __webpack_require__(53853);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/socket/socket-utils.js
var socket_utils = __webpack_require__(59298);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useProxyWatch.js
var useProxyWatch = __webpack_require__(82916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/TextField/TextField.js + 1 modules
var TextField = __webpack_require__(58448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/FormControlLabel/FormControlLabel.js + 1 modules
var FormControlLabel = __webpack_require__(8771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Checkbox/Checkbox.js + 6 modules
var Checkbox = __webpack_require__(22673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Grid2/Grid2.js + 3 modules
var Grid2 = __webpack_require__(18057);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Stack/Stack.js + 1 modules
var Stack = __webpack_require__(37530);
// EXTERNAL MODULE: ./src/markets/market-dev-socket.ts
var market_dev_socket = __webpack_require__(75444);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
;// ./src/components/page/markets-dev-settings/data/context.tsx

const [MarketsDevSettingsContextProvider, useMarketsDevSettingsContext] = (0,src.createTypedContext)();

;// ./src/components/page/markets-dev-settings/content/DevSettings.tsx
/* __next_internal_client_entry_do_not_use__ DevSettings auto */ 





function URL() {
    const { t } = (0,src.useTranslation)('homepage/components/page/markets-dev-settings/content/content');
    const pageData = useMarketsDevSettingsContext();
    const [value, _setValue] = (0,react.useState)(pageData.socketSettingData.url);
    const [isWrong, setIsWrong] = (0,react.useState)(!(0,socket_utils/* isValidWebSocketURL */.NC)(value));
    function setValue(v) {
        _setValue(v);
        pageData.socketSettingData.url = v;
        if (!(0,socket_utils/* isValidWebSocketURL */.NC)(v)) {
            setIsWrong(true);
        } else {
            setIsWrong(false);
        }
    }
    const s = t("DevSettings.socket.url.helperText", {
        0: "socket",
        1: "ws",
        2: "wss",
        3: "url"
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.A, {
            fullWidth: true,
            error: isWrong,
            label: t("DevSettings.socket.url.name"),
            value: value,
            placeholder: "ws://192.168.1.2:7001",
            helperText: isWrong ? s : "",
            variant: "standard",
            onChange: (e)=>setValue(e.target.value)
        })
    });
}
function ConnectButton2() {
    const pageData = useMarketsDevSettingsContext();
    const [status] = (0,useProxyWatch/* useProxyWatch */.x)(market_dev_socket/* marketsDevSocket */.O.socketConnectInfo, 'status', market_dev_socket/* marketsDevSocket */.O.socketConnectInfo.status);
    const [buttonName, setButtonName] = (0,react.useState)('');
    const { t } = (0,src.useTranslation)('homepage/components/page/markets-dev-settings/content/content');
    const [url] = (0,useProxyWatch/* useProxyWatch */.x)(pageData.socketSettingData, 'url', pageData.socketSettingData.url);
    const [enabled, setEnabled] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        setEnabled((status === socket_utils/* SocketConnectStatusEnum */.du.disconnected || status === socket_utils/* SocketConnectStatusEnum */.du.connected) && (0,socket_utils/* isValidWebSocketURL */.NC)(url));
    }, [
        status,
        url
    ]);
    (0,react.useEffect)(()=>{
        async function updateButtonName() {
            const status = market_dev_socket/* marketsDevSocket */.O.socketConnectInfo.status;
            let name = buttonName;
            switch(status){
                case socket_utils/* SocketConnectStatusEnum */.du.connecting:
                    name = await (0,socket_utils/* getSocketConnectStatusEnumI18n */.HQ)(socket_utils/* SocketConnectStatusEnum */.du.connecting);
                    break;
                case socket_utils/* SocketConnectStatusEnum */.du.connected:
                    name = t("DevSettings.connectButton.disconnect");
                    break;
                case socket_utils/* SocketConnectStatusEnum */.du.disconnecting:
                    name = await (0,socket_utils/* getSocketConnectStatusEnumI18n */.HQ)(socket_utils/* SocketConnectStatusEnum */.du.disconnecting);
                    break;
                case socket_utils/* SocketConnectStatusEnum */.du.disconnected:
                    name = t("DevSettings.connectButton.connect");
                    break;
            }
            if (market_dev_socket/* marketsDevSocket */.O.socketConnectInfo.status !== status) {
                return updateButtonName();
            }
            if (name !== buttonName) {
                setButtonName(name);
            }
        }
        updateButtonName();
    }, [
        status
    ]);
    function onClick() {
        if (status === socket_utils/* SocketConnectStatusEnum */.du.disconnected) {
            market_dev_socket/* marketsDevSocket */.O.connect();
        } else {
            market_dev_socket/* marketsDevSocket */.O.disconnect();
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
        variant: "contained",
        disabled: !enabled,
        onClick: onClick,
        children: buttonName
    });
}
function KeepConnectCheckbox() {
    const pageData = useMarketsDevSettingsContext();
    var _pageData_socketSettingData_keepConnect;
    const [keepConnect] = (0,useProxyWatch/* useProxyWatch */.x)(pageData.socketSettingData, 'keepConnect', (_pageData_socketSettingData_keepConnect = pageData.socketSettingData.keepConnect) !== null && _pageData_socketSettingData_keepConnect !== void 0 ? _pageData_socketSettingData_keepConnect : false);
    const { t } = (0,src.useTranslation)('homepage/components/page/markets-dev-settings/content/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.A, {
            checked: keepConnect,
            onChange: (e)=>pageData.socketSettingData.keepConnect = e.target.checked
        }),
        label: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t("DevSettings.socket.keepConnect.name")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    style: {
                        fontSize: '0.8rem',
                        color: 'gray'
                    },
                    children: t("DevSettings.socket.keepConnect.helperText")
                })
            ]
        })
    });
}
function CheckboxButtonGroup() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid2/* default */.A, {
        container: true,
        direction: "row",
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                size: "grow",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(KeepConnectCheckbox, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid2/* default */.A, {
                size: "auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectButton2, {})
            })
        ]
    });
}
function DevSettings() {
    const pageData = useMarketsDevSettingsContext();
    (0,react.useEffect)(()=>{
        if (pageData.socketSettingData.keepConnect) {
            market_dev_socket/* marketsDevSocket */.O.connect();
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
                direction: "column",
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(URL, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckboxButtonGroup, {})
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/iframe/IFrameReactContainer.js + 1 modules
var IFrameReactContainer = __webpack_require__(5828);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/useWatchUpdates.js
var useWatchUpdates = __webpack_require__(26544);
// EXTERNAL MODULE: ./src/markets/market-html-utils.ts
var market_html_utils = __webpack_require__(61854);
// EXTERNAL MODULE: ./src/markets/markets-script-dev-lib.ts
var markets_script_dev_lib = __webpack_require__(11555);
;// ./src/components/page/markets-dev-settings/content/Scripts.tsx





function createHtml(script) {
    // return marketHtmlUtils.createHtml(script);
    return '<html>\n    <head>\n        <title>script</title>\n    </head>\n    <body>\n        <div id="app"></div>\n        <script>'.concat(script, "</script>\n    </body>\n</html>");
}
function Script(param) {
    let { resource } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.A, {
            direction: "column",
            spacing: 2,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: resource.client.path
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IFrameReactContainer/* IFrameReactContainer */.T, {
                    content: resource.content,
                    htmlBuilder: market_html_utils/* marketHtmlUtils */.P.createHtml
                })
            ]
        })
    });
}
function Scripts() {
    var _marketsDevScriptLib_marketDevLibData_allMarketLibData, _marketsDevScriptLib_marketDevLibData_allMarketLibData_resources, _marketsDevScriptLib_marketDevLibData_allMarketLibData1;
    const [resources] = (0,useWatchUpdates/* useProxyWatchUpdates */.d)(markets_script_dev_lib/* marketsDevScriptLib */.R.marketDevLibData, "allMarketLibData.resources", ((_marketsDevScriptLib_marketDevLibData_allMarketLibData = markets_script_dev_lib/* marketsDevScriptLib */.R.marketDevLibData.allMarketLibData) === null || _marketsDevScriptLib_marketDevLibData_allMarketLibData === void 0 ? void 0 : _marketsDevScriptLib_marketDevLibData_allMarketLibData.resources) || []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: (_marketsDevScriptLib_marketDevLibData_allMarketLibData1 = markets_script_dev_lib/* marketsDevScriptLib */.R.marketDevLibData.allMarketLibData) === null || _marketsDevScriptLib_marketDevLibData_allMarketLibData1 === void 0 ? void 0 : (_marketsDevScriptLib_marketDevLibData_allMarketLibData_resources = _marketsDevScriptLib_marketDevLibData_allMarketLibData1.resources) === null || _marketsDevScriptLib_marketDevLibData_allMarketLibData_resources === void 0 ? void 0 : _marketsDevScriptLib_marketDevLibData_allMarketLibData_resources.map((resource, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Script, {
                resource: resource
            }, resource.content);
        })
    });
}

;// ./src/components/page/markets-dev-settings/content/MarketsDevSettingsContent.tsx




function MarketsDevSettingsContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DevSettings, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Scripts, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        children: "hello"
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js
var proxyWatch = __webpack_require__(99759);
// EXTERNAL MODULE: ./src/markets/market-dev-socket-setting-data.ts
var market_dev_socket_setting_data = __webpack_require__(6076);
;// ./src/components/page/markets-dev-settings/data/data.intf.ts


async function createDefPageData() {
    return {
        socketSettingData: await (0,market_dev_socket_setting_data/* getMarketDevSocketSettingData */.D)()
    };
}
let dataImpl;
async function marketsDevSettingsLoadDefData() {
    if (dataImpl) {
        return dataImpl;
    }
    let data = await createDefPageData();
    dataImpl = (0,proxyWatch/* toProxy */.I$)(data);
    return dataImpl;
}

;// ./src/pages/markets-dev-settings/index.tsx










function MarketsDevSettingsPage() {
    const { t } = (0,src.useTranslation)('homepage/pages/markets-dev-settings/content');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: t("content.loadPageData")
        }),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {
            pageData: marketsDevSettingsLoadDefData(),
            libInit: markets_script_dev_lib/* marketsDevScriptLib */.R.init()
        })
    });
}
function Content(param) {
    let { pageData, libInit } = param;
    const { t } = (0,src.useTranslation)('homepage/pages/markets-dev-settings/content');
    const data = (0,react.use)(pageData);
    const dispatcher = new Dispatcher/* Dispatcher */.m();
    (0,react.use)(libInit);
    async function onClick() {
        const res = await getContacts();
        console.log('on click res=', res);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AppPageDataWrapperShell, {
        contextValue: data,
        ContextProvider: MarketsDevSettingsContextProvider,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(AppBar/* AppbarContainer */.W, {
            appbarProps: {
                title: t("content.title"),
                back: true,
                backDispatcher: dispatcher
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.A, {
                        onClick: onClick,
                        children: "script"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketsDevSettingsContent, {})
            ]
        })
    });
}
function temp(id) {
    const x = '\n\ncontactsPermission.permission = "android.permission.READ_CONTACTS";\n    var permissions = [contactsPermission];\n    var result = {\n      permissions: permissions,\n      permissionDenied: [],\n      permissionsSuccessed: [],\n      error: null,\n      data: null,\n      warning: null,\n      info: null,\n      isSuccess:false,\n    };\n\n    com.fanfanlo.lib.permissions.PermissionActivity.requestPermissions(context, permissions, true, "SOS-读取联系人", onCheckPermissionsCallback);\n    \n    function missionFailed(){\n      webViewJs.callJsEvent("'.concat(id, '-missionFailed", result, ').concat(id, ');\n      missionComplete();\n    }\n    \n    function missionSuccess(){\n      webViewJs.callJsEvent("').concat(id, '-missionSuccess", result, ').concat(id, ');\n      missionComplete();\n    }\n\n    function missionComplete(){\n      webViewJs.callJsEvent("').concat(id, '-missionComplete", result, ').concat(id, ');\n    }\n    function onCheckPermissionsCallback(resultMap){\n      for(var i = 0; i < permissions.size(); i++){\n        var permissionInfo = permissions.get(i);\n        var permission = permissionInfo.permission;\n        if((permission in resultMap && resultMap[permission] == true) || permissionInfo.required == false)continue;\n        result.error = {\n          message:"permission denied",\n          extra:permissionInfo\n        }\n        missionFailed();\n        return;\n      }\n      runCodeAfterPermissionsAccess();\n    }\n    \n    function runCodeAfterPermissionsAccess(){\n      result.isSuccess = true;\n      missionSuccess();\n    }\n    `{isOk:"true"}`\n');
}
function createReadContactsScript(id) {
    return '\n    var Manifest = Packages.android.Manifest;\n    var context = com.fanfanlo.lib.mc.LibMainModel.instance.application;\n    var contactsPermission = new Packages.com.fanfanlo.lib.permissions.PermissionRequest("android.permission.READ_CONTACTS", true, null, null, null);\n// contactsPermission.permission = "android.permission.READ_CONTACTS";\n\n    var permissions = [contactsPermission];\n    var result = {\n      permissions: permissions,\n      permissionDenied: [],\n      permissionsSuccessed: [],\n      error: null,\n      data: null,\n      warning: null,\n      info: null,\n      isSuccess:false,\n    };\n    \n    com.fanfanlo.lib.permissions.PermissionActivity.requestPermissions(context, permissions, true, "SOS-读取联系人", onCheckPermissionsCallback);\n\n    function missionFailed(){\n        webViewJs.callJsEvent("'.concat(id, '-missionFailed", result, "').concat(id, '");\n        missionComplete();\n      }\n      \n      function missionSuccess(){\n        webViewJs.callJsEvent("').concat(id, '-missionSuccess", result, "').concat(id, '");\n        missionComplete();\n      }\n  \n      function missionComplete(){\n        webViewJs.callJsEvent("').concat(id, '-missionComplete", result, "').concat(id, '");\n      }\n      function onCheckPermissionsCallback(resultMap){\n        for(var i = 0; i < permissions.length; i++){\n          var permissionInfo = permissions[i];\n          var permission = permissionInfo.permission;\n          if(resultMap.get(permission) == true)continue;\n          if(permissionInfo.required == false)continue;\n          result.error = {\n            message:"permission denied",\n            extra:{\n                "resultMap":resultMap,\n                "permission":permission,\n                permissionInfo:permissionInfo\n            }\n          }\n          missionFailed();\n          return;\n        }\n        runCodeAfterPermissionsAccess();\n      }\n      \n      function runCodeAfterPermissionsAccess(){\n        result.isSuccess = true;\n        readContacts();\n        missionSuccess();\n      }\n\n      function readContacts(){\n        var contentResolver = com.fanfanlo.lib.mc.LibMainModel.instance.application.getContentResolver();\n        var ContactsContract = Packages.android.provider.ContactsContract;\n        var cursor = contentResolver.query(\n        ContactsContract.Contacts.CONTENT_URI,\n        null,\n        null,\n        null,\n        null\n        );\n\n        var contactList = [];\n        if (cursor !== null && cursor.moveToFirst()) {\n        var nameIndex = cursor.getColumnIndex(ContactsContract.Contacts.DISPLAY_NAME);\n        var idIndex = cursor.getColumnIndex(ContactsContract.Contacts._ID);\n\n        do {\n            var contactName = cursor.getString(nameIndex);\n            var contactId = cursor.getString(idIndex);\n\n            // 查询电话号码\n            let phone = null;\n            var hasPhoneNumberIndex = cursor.getColumnIndex(ContactsContract.Contacts.HAS_PHONE_NUMBER);\n            var hasPhoneNumber = cursor.getInt(hasPhoneNumberIndex);\n            if (hasPhoneNumber > 0) {\n            var phoneCursor = contentResolver.query(\n                ContactsContract.CommonDataKinds.Phone.CONTENT_URI,\n                null,\n                ContactsContract.CommonDataKinds.Phone.CONTACT_ID + " = ?",\n                [contactId],\n                null\n            );\n\n            if (phoneCursor !== null && phoneCursor.moveToFirst()) {\n                var phoneIndex = phoneCursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER);\n                phone = phoneCursor.getString(phoneIndex);\n                phoneCursor.close();\n            }\n            }\n\n            contactList.push({\n            name: contactName,\n            phone: phone,\n            });\n\n        } while (cursor.moveToNext());\n\n        cursor.close();\n        }\n\n        result.data = {contactList};\n        var json = com.fanfanlo.lib.utils.JsonUtil.gson2.toJson(result);\n        console.log(json);\n      }\n    ');
}
async function getContacts() {
    return new Promise((resolve, reject)=>{
        const id = '@fanfanlo/scripts/script001/get-contacts';
        const conf = {
            bridgeId: id,
            scriptId: id,
            forceStopTime: 1000 * 60 * 20,
            onlyRunSingle: true,
            injects: [
                "webViewJs",
                "console"
            ],
            script: createReadContactsScript(id)
        };
        function onMessage(event) {
            console.log('llllllllllllllllllllllllllaaaddd', event);
            switch(event.type){
                case "@fanfanlo/scripts/script001/get-contacts-missionSuccess":
                    resolve(event.data);
                    break;
                case "@fanfanlo/scripts/script001/get-contacts-missionSuccess":
                    reject(event.data);
                    break;
                case "@fanfanlo/scripts/script001/get-contacts-missionComplete":
                    window.removeEventListener("message", onMessage);
                    break;
            }
        }
        window.addEventListener('message', onMessage);
        const res = AutoWebViewJs/* autoWebViewJs */.yx.callScriptByConf(conf);
        console.log('getContacts_fn res=', res);
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [485,668,5389,8454,9080,1835,1236,3853,6774,9582,5993,8448,5175,8057,4096,5887,636,6593,8792], () => (__webpack_exec__(59384)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=markets-dev-settings-a2e56be4ee0a73f6.js.map