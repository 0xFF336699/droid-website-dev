"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6798],{

/***/ 76798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ IFrameReactContainer)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.1.0/node_modules/react/index.js
var react = __webpack_require__(94285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@open-iframe-resizer+core@1.6.0/node_modules/@open-iframe-resizer/core/dist/index.js
var dist = __webpack_require__(73160);
;// ../../libs/fanfanlo/dist/src/iframe/IFrameContainer.js
/* __next_internal_client_entry_do_not_use__ IFrameContainer auto */ 
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

class IFrameContainer {
    // private initializeResultList?:InitializeResult[]
    fitIframe() {
        return;
        this.initializeResultList = (0,dist/* initialize */.n_)({
            bodyMargin: "0px",
            bodyPadding: "0px",
            offsetSize: 3
        }, "#".concat(this.iframeId));
    }
    loadContent(content, htmlBuilder) {
        this.currentLoadCallback = null;
        this.currentErrorCallback = null;
        const resizeScript = "\n            <script>\n                const IFRAME_ID = '".concat(this.iframeId, "';\n                window.IFRAME_ID = '").concat(this.iframeId, "';\n                function notifyResize() {\n                    const body = document.body;\n                    const html = document.documentElement;\n                    \n                    // 获取实际内容高度（取最大值）\n                    const height = Math.max(\n                        body.scrollHeight,\n                        body.offsetHeight,\n                        html.scrollHeight,\n                        html.offsetHeight\n                    );\n                    \n                    // 获取实际内容宽度\n                    const width = Math.max(\n                        body.scrollWidth,\n                        body.offsetWidth,\n                        html.scrollWidth,\n                        html.offsetWidth\n                    );\n                    \n                    // 发送消息给父窗口\n                    window.parent.postMessage({\n                        type: 'resize',\n                        iframeId: IFRAME_ID,\n                        height,\n                        width\n                    }, '*');\n                }\n                \n                // 监听窗口大小变化\n                window.addEventListener('resize', notifyResize);\n                \n                // 监听DOMContentLoaded，确保DOM加载完毕后调整大小\n                document.addEventListener('DOMContentLoaded', notifyResize);\n                \n                // 监听load事件，确保所有资源加载完毕后调整大小\n                window.addEventListener('load', notifyResize);\n                \n                // 创建MutationObserver监听DOM变化\n                const observer = new MutationObserver(notifyResize);\n                observer.observe(document.documentElement, {\n                    childList: true,\n                    subtree: true,\n                    attributes: true,\n                    characterData: true\n                });\n                \n                // 监听来自父窗口的消息，处理请求重新调整大小的消息\n                window.addEventListener('message', function(event) {\n                    if (event.data && event.data.type === 'requestResize') {\n                        // 主动触发一次尺寸计算和发送\n                        notifyResize();\n                    }\n                });\n                \n                // 初始化大小\n                notifyResize();\n            </script>\n        ");
        const topScript = "\n        <script>\n        var autoWebViewJs = window.autoWebViewJs = window.parent.window.autoWebViewJs;\n        autoWebViewJs = window.parent.window.autoWebViewJs;\n        var isRealInAndroid = window.isRealInAndroid;\n        var storeUtilsConf = window.storeUtilsConf = window.parent.window.storeUtilsConf;\n        </script>\n        ";
        const bodyStyle = "<style>html, body{margin-left:-4px;padding:0;\n        background-color: white;}</style>";
        const idScript = "\n        <script>\n            const IFRAME_ID = '".concat(this.iframeId, "';\n            window.IFRAME_ID = '").concat(this.iframeId, "';\n        </script>");
        let fullContent = content;
        fullContent = fullContent.includes("<head>") ? fullContent.replace("<head>", "<head>".concat(topScript)) : "".concat(fullContent).concat(topScript);
        fullContent = fullContent.includes("</head>") ? fullContent.replace("</head>", "".concat(bodyStyle, "</head>")) : "".concat(fullContent).concat(bodyStyle);
        fullContent = fullContent.includes("</body>") ? fullContent.replace("</body>", "".concat(resizeScript, "</body>")) : "".concat(fullContent).concat(resizeScript);
        let c = htmlBuilder ? htmlBuilder(content, {
            iframeId: this.iframeId
        }) : content;
        const blob = new Blob([
            c
        ], {
            type: "text/html"
        });
        const url = URL.createObjectURL(blob);
        this.blobUrl = url;
        this.iframe.src = url;
    }
    template(s) {
        return '\n        <html>\n        <head>\n        </head>\n        <body>\n        <div id="app"></div>\n        <script>'.concat(s, "</script>\n        </body>\n        </html>");
    }
    /**
   * 设置最小宽度和高度
   * @param minWidth 最小宽度（像素）
   * @param minHeight 最小高度（像素）
   */ setMinSize(minWidth, minHeight) {
        this.minWidth = minWidth;
        this.minHeight = minHeight;
    }
    /**
   * 设置最大宽度和高度
   * @param maxWidth 最大宽度（像素）
   * @param maxHeight 最大高度（像素）
   */ setMaxSize(maxWidth, maxHeight) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
    }
    handleIframeMessage(event) {
        if (!this.resizeEnabled || this.originalState.isFullscreen) return;
        if (event.data.type === "resize" && event.data.iframeId === this.iframeId) {
            let { height, width } = event.data;
            const windowMaxWidth = window.innerWidth;
            if (this.minWidth !== null) {
                width = Math.max(width, this.minWidth);
            }
            if (this.minHeight !== null) {
                height = Math.max(height, this.minHeight);
            }
            if (this.maxWidth !== null) {
                width = Math.min(width, this.maxWidth);
            } else {
                width = Math.min(width, windowMaxWidth);
            }
            if (this.maxHeight !== null) {
                height = Math.min(height, this.maxHeight);
            }
            this.container.style.height = "".concat(height, "px");
            this.container.style.width = "".concat(width, "px");
        }
    }
    /**
   * 通过URL加载iframe
   * @param url 要加载的URL
   * @param onLoad 加载成功回调函数
   * @param onError 加载失败回调函数
   */ loadUrl(url, onLoad, onError) {
        return __async(this, null, function*() {
            this.currentLoadCallback = onLoad || null;
            this.currentErrorCallback = onError || null;
            if (this.iframe) {
                this.iframe.src = url;
            } else {
                console.error("IFrameContainer: iframe element is null in loadUrl!");
            }
        });
    }
    // 移除 createLoadingElement, showLoading, removeLoading 方法
    /**
   * 从URL加载内容并作为字符串显示
   * @param url 要加载的资源URL
   * @returns Promise<void>
   */ loadUrlAsContent(url, onLoad, onError, htmlBuilder) {
        return __async(this, null, function*() {
            try {
                const response = yield fetch(url);
                if (!response.ok) {
                    onError == null ? void 0 : onError(new Error("HTTP error! status: ".concat(response.status)));
                    return;
                }
                const content = yield response.text();
                this.loadContent(content, htmlBuilder);
                onLoad == null ? void 0 : onLoad();
            } catch (error) {
                console.error("Failed to load URL content:", error);
                onError == null ? void 0 : onError(error);
            }
        });
    }
    /**
   * 获取容器元素
   * @returns HTMLDivElement 容器元素
   */ getContainer() {
        return this.container;
    }
    /**
   * 设置容器大小
   * @param width 宽度
   * @param height 高度
   */ setSize(width, height) {
        this.container.style.width = width;
        this.container.style.height = height;
    }
    /**
   * 进入全屏模式
   * 将iframe扩展到整个窗口大小，并暂停自动调整大小
   */ enterFullscreen() {
        if (this.originalState.isFullscreen) return;
        this.originalState = {
            position: this.container.style.position,
            top: this.container.style.top,
            left: this.container.style.left,
            width: this.container.style.width,
            height: this.container.style.height,
            zIndex: this.container.style.zIndex,
            overflow: this.container.style.overflow,
            border: this.container.style.border,
            margin: this.container.style.margin,
            padding: this.container.style.padding,
            boxSizing: this.container.style.boxSizing,
            minWidth: this.minWidth,
            minHeight: this.minHeight,
            maxWidth: this.maxWidth,
            maxHeight: this.maxHeight,
            isFullscreen: true
        };
        this.resizeEnabled = false;
        this.container.style.position = "fixed";
        this.container.style.top = "0";
        this.container.style.left = "0";
        this.container.style.width = "100vw";
        this.container.style.height = "100vh";
        this.container.style.zIndex = "2147483647";
        this.container.style.border = "none";
        this.container.style.margin = "0";
        this.container.style.padding = "0";
        this.container.style.boxSizing = "border-box";
        this.setMinSize(null, null);
        this.setMaxSize(null, null);
    }
    /**
   * 退出全屏模式
   * 恢复iframe到原始大小，并重新启用自动调整大小
   */ exitFullscreen() {
        var _a, _b, _c, _d;
        if (!this.originalState.isFullscreen) return;
        this.container.style.position = this.originalState.position || "";
        this.container.style.top = this.originalState.top || "";
        this.container.style.left = this.originalState.left || "";
        this.container.style.width = this.originalState.width || "";
        this.container.style.height = this.originalState.height || "";
        this.container.style.zIndex = this.originalState.zIndex || "";
        this.container.style.overflow = this.originalState.overflow || "";
        this.container.style.border = this.originalState.border || "";
        this.container.style.margin = this.originalState.margin || "";
        this.container.style.padding = this.originalState.padding || "";
        this.container.style.boxSizing = this.originalState.boxSizing || "";
        this.setMinSize((_a = this.originalState.minWidth) != null ? _a : null, (_b = this.originalState.minHeight) != null ? _b : null);
        this.setMaxSize((_c = this.originalState.maxWidth) != null ? _c : null, (_d = this.originalState.maxHeight) != null ? _d : null);
        this.resizeEnabled = true;
        this.originalState.isFullscreen = false;
        if (this.iframe.contentWindow) {
            this.iframe.contentWindow.postMessage({
                type: "requestResize"
            }, "*");
        }
    }
    /**
   * 切换全屏状态
   * 如果当前是全屏，则退出；否则进入全屏
   */ toggleFullscreen() {
        if (this.originalState.isFullscreen) {
            this.exitFullscreen();
        } else {
            this.enterFullscreen();
        }
    }
    /**
   * 判断是否是全屏状态
   * @returns boolean 是否处于全屏状态
   */ isFullscreen() {
        return this.originalState.isFullscreen;
    }
    /**
   * 启用或禁用resize功能
   * @param enabled 是否启用resize
   */ enableResize(enabled) {
        this.resizeEnabled = enabled;
        if (enabled && this.iframe.contentWindow && !this.originalState.isFullscreen) {
            this.iframe.contentWindow.postMessage({
                type: "requestResize"
            }, "*");
        }
    }
    exit() {
        const iframe = this.iframe;
        if (!iframe) return;
        const clone = iframe.cloneNode(false);
        iframe.replaceWith(clone);
        iframe.remove();
        if (this.blobUrl) {
            URL.revokeObjectURL(this.blobUrl);
            this.blobUrl = void 0;
        }
        console.log("iframe released", this.iframeId);
    }
    constructor(){
        this.minWidth = null;
        this.minHeight = null;
        this.maxWidth = null;
        this.maxHeight = null;
        this.currentLoadCallback = null;
        this.currentErrorCallback = null;
        this.resizeEnabled = true;
        // 保存原始状态的对象
        this.originalState = {
            isFullscreen: false
        };
        this.iframeId = "iframe_" + Math.random().toString(36).substr(2, 9);
        this.container = document.createElement("div");
        this.iframe = document.createElement("iframe");
        this.iframe.controller = this;
        this.container.style.width = "100%";
        this.container.style.height = "100%";
        this.container.style.overflow = "hidden";
        this.container.style.position = "relative";
        this.container.style.maxWidth = "100%";
        this.container.style.margin = "0 auto";
        this.iframe.style.width = "100%";
        this.iframe.style.height = "100%";
        this.iframe.style.border = "none";
        this.iframe.style.overflow = "hidden";
        this.iframe.style.boxSizing = "border-box";
        this.iframe.setAttribute("scrolling", "no");
        this.iframe.setAttribute("seamless", "seamless");
        this.iframe.onload = ()=>{
            if (this.currentLoadCallback) {
                this.currentLoadCallback();
            }
            if (true) {
                this.fitIframe();
            }
        };
        this.iframe.onerror = (event, source, lineno, colno, error)=>{
            console.error('%cIFrameContainer: iframe "error" event triggered.', "color: red; font-weight: bold;", event);
            const err = error || new Error(typeof event === "string" ? event : "Failed to load iframe content");
            if (this.currentErrorCallback) {
                this.currentErrorCallback(err);
            }
        };
        this.container.appendChild(this.iframe);
        this.iframe.id = this.iframeId;
        window.addEventListener("message", this.handleIframeMessage.bind(this));
    }
} //# sourceMappingURL=IFrameContainer.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(6445);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(95746);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(67079);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.4.12_@emotion+react@11.14.0_@types+react@19.1.8_react@19.1.0__@emotion+styled_7n6ip7adzgskiknwagt7k5dnla/node_modules/@mui/material/Alert/Alert.js + 6 modules
var Alert = __webpack_require__(81482);
;// ../../libs/fanfanlo/dist/src/iframe/IFrameReactContainer.js

var IFrameReactContainer_async = (__this, __arguments, generator)=>{
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







const IFrameReactContainer = (param)=>{
    let { style, className, url, content, urlAsContent, minWidth, minHeight, maxWidth, maxHeight, onError, onLoad, htmlBuilder } = param;
    const containerRef = (0,react.useRef)(null);
    const iframeContainerRef = (0,react.useRef)(null);
    const [iframeLoading, setIframeLoading] = (0,react.useState)(false);
    const [iframeError, setIframeError] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        return ()=>{
            if (iframeContainerRef.current) {
                iframeContainerRef.current.exit();
            }
        };
    }, []);
    (0,react.useEffect)(()=>{
        if (!iframeContainerRef.current && containerRef.current) {
            iframeContainerRef.current = new IFrameContainer();
            const container = iframeContainerRef.current;
            container.setMinSize(minWidth != null ? minWidth : null, minHeight != null ? minHeight : null);
            container.setMaxSize(maxWidth != null ? maxWidth : null, maxHeight != null ? maxHeight : null);
            containerRef.current.appendChild(container.getContainer());
        }
        return ()=>{
            if (containerRef.current && iframeContainerRef.current) {
                containerRef.current.removeChild(iframeContainerRef.current.getContainer());
                iframeContainerRef.current = null;
            }
        };
    }, [
        minWidth,
        minHeight,
        maxWidth,
        maxHeight
    ]);
    (0,react.useEffect)(()=>{
        const iframeContainer = iframeContainerRef.current;
        if (!iframeContainer) return;
        const loadContentOrUrl = ()=>IFrameReactContainer_async(void 0, null, function*() {
                setIframeLoading(true);
                setIframeError(null);
                try {
                    if (content) {
                        iframeContainer.loadContent(content, htmlBuilder);
                        setIframeLoading(false);
                        onLoad == null ? void 0 : onLoad();
                    } else if (url) {
                        const handleLoad = ()=>{
                            setIframeLoading(false);
                            setIframeError(null);
                            onLoad == null ? void 0 : onLoad();
                        };
                        const handleError = (error)=>{
                            console.error("%cIFrameReactContainer: handleError (callback from IFrameContainer) triggered.", "color: red;", error);
                            setIframeLoading(false);
                            setIframeError(error);
                            onError == null ? void 0 : onError(error);
                        };
                        if (urlAsContent) {
                            iframeContainer.loadUrlAsContent(url, handleLoad, handleError, htmlBuilder);
                            handleLoad();
                        } else {
                            iframeContainer.loadUrl(url, handleLoad, handleError);
                        }
                    } else {
                        setIframeLoading(false);
                    }
                } catch (error) {
                    console.error(">>> Sync Error during loadContentOrUrl setup:", error);
                    if (error instanceof Error) {
                        setIframeLoading(false);
                        setIframeError(error);
                        onError == null ? void 0 : onError(error);
                    } else {
                        const unknownError = new Error("An unknown error occurred during setup");
                        setIframeLoading(false);
                        setIframeError(unknownError);
                        onError == null ? void 0 : onError(unknownError);
                    }
                }
            });
        loadContentOrUrl();
    }, [
        url,
        content,
        onError,
        onLoad,
        iframeContainerRef.current
    ]);
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", {
        ref: containerRef,
        style,
        className,
        children: [
            iframeLoading && /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* default */.A, {
                sx: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 2
                },
                children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
                        size: 24
                    }),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        variant: "body2",
                        sx: {
                            ml: 1
                        },
                        children: "Loading preview..."
                    })
                ]
            }),
            iframeError && !iframeLoading && /* @__PURE__ */ (0,jsx_runtime.jsxs)(Alert/* default */.A, {
                severity: "error",
                sx: {
                    m: 1
                },
                children: [
                    "Preview Error: ",
                    iframeError.message
                ]
            })
        ]
    });
}; //# sourceMappingURL=IFrameReactContainer.js.map


/***/ })

}]);
//# sourceMappingURL=6798-aa1dc4fa13a417ae.js.map