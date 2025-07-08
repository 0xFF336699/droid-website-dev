"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3904],{

/***/ 122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveComponentProps);

/***/ }),

/***/ 3488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ mergeSlotProps_mergeSlotProps)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
var extractEventHandlers = __webpack_require__(79168);
;// ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js
/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}
/* harmony default export */ const omitEventHandlers_omitEventHandlers = (omitEventHandlers);
;// ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js



/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = (0,clsx/* default */.A)(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
    const mergedStyle = {
      ...additionalProps?.style,
      ...externalForwardedProps?.style,
      ...externalSlotProps?.style
    };
    const props = {
      ...additionalProps,
      ...externalForwardedProps,
      ...externalSlotProps
    };
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: undefined
    };
  }

  // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  const eventHandlers = (0,extractEventHandlers/* default */.A)({
    ...externalForwardedProps,
    ...externalSlotProps
  });
  const componentsPropsWithoutEventHandlers = omitEventHandlers_omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers_omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);

  // The order of classes is important here.
  // Emotion (that we use in libraries consuming Base UI) depends on this order
  // to properly override style. It requires the most important classes to be last
  // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
  const joinedClasses = (0,clsx/* default */.A)(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
  const mergedStyle = {
    ...internalSlotProps?.style,
    ...additionalProps?.style,
    ...externalForwardedProps?.style,
    ...externalSlotProps?.style
  };
  const props = {
    ...internalSlotProps,
    ...additionalProps,
    ...otherPropsWithoutEventHandlers,
    ...componentsPropsWithoutEventHandlers
  };
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}
/* harmony default export */ const mergeSlotProps_mergeSlotProps = (mergeSlotProps);

/***/ }),

/***/ 6035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ appendOwnerState_appendOwnerState)
});

;// ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}
/* harmony default export */ const isHostComponent_isHostComponent = (isHostComponent);
;// ../../node_modules/.pnpm/@mui+utils@6.4.9_@types+react@19.1.8_react@19.1.0/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js


/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === undefined || isHostComponent_isHostComponent(elementType)) {
    return otherProps;
  }
  return {
    ...otherProps,
    ownerState: {
      ...otherProps.ownerState,
      ...ownerState
    }
  };
}
/* harmony default export */ const appendOwnerState_appendOwnerState = (appendOwnerState);

/***/ }),

/***/ 15826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ownerWindow)
/* harmony export */ });
/* harmony import */ var _ownerDocument_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48770);

function ownerWindow(node) {
  const doc = (0,_ownerDocument_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(node);
  return doc.defaultView || window;
}

/***/ }),

/***/ 48770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ownerDocument)
/* harmony export */ });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),

/***/ 73160:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n_: () => (/* binding */ K)
/* harmony export */ });
/* unused harmony exports initializeChildListener, updateParentScrollOnResize */
const p = () => typeof window < "u", E = () => window.self !== window.top, b = (e) => e instanceof HTMLIFrameElement, M = (e) => {
  window.document.readyState === "complete" ? e() : window.addEventListener("load", e);
}, T = (e, t) => {
  t(), e.addEventListener("load", t);
}, C = (e, t) => {
  var o, i;
  const n = ((o = e.contentWindow) == null ? void 0 : o.document.readyState) === "complete";
  return e.src !== "about:blank" && ((i = e.contentWindow) == null ? void 0 : i.location.href) !== "about:blank" && n ? t() : e.addEventListener("load", t);
}, B = () => ({ offsetSize: 0, checkOrigin: !0, enableLegacyLibSupport: !1 }), k = (e) => {
  try {
    return new URL(e.src).origin === window.location.origin;
  } catch {
    return !1;
  }
}, D = (e) => {
  try {
    const t = new URL(e.src).origin;
    if (t !== "about:blank")
      return t;
  } catch {
  }
  return null;
}, W = (e) => (Object.keys(e).forEach((t) => e[t] === void 0 && delete e[t]), e), L = (e) => {
  const { height: t, width: n } = e.getBoundingClientRect();
  return { height: Math.ceil(t), width: Math.ceil(n) };
}, g = (e, t) => e ? t ? e.querySelector(t) : e.documentElement : null, I = (e, t) => {
  e && (t.bodyPadding && (e.body.style.padding = t.bodyPadding), t.bodyMargin && (e.body.style.margin = t.bodyMargin));
}, h = (e) => e <= 100 ? 100 : e <= 120 ? 1e3 : 1e4, A = () => "[iFrameSizer]ID:0:false:false:32:true:true::auto:::0:false:child:auto:true:::true:::false";
function H(e) {
  if (typeof e.data != "string" || !e.data.startsWith("[iFrameSizer]") || !e.data.endsWith("mutationObserver") && !e.data.endsWith("resizeObserver"))
    return null;
  const [t, n] = e.data.split(":"), r = +n;
  return r > 0 ? r : null;
}
const z = q();
let f = [];
const K = (e, t) => {
  if (!p())
    return [];
  const n = { ...B(), ...W(e ?? {}) }, r = P(t), o = x(n, r);
  return r.map((i) => {
    const s = {
      iframe: i,
      settings: n,
      interactionState: { isHovered: !1 },
      initContext: { isInitialized: !1, retryAttempts: 0 }
    }, a = F(s, o);
    return f.push(s), {
      unsubscribe: () => {
        a(), f = f.filter((d) => d.iframe !== i);
      }
    };
  });
};
function P(e) {
  return typeof e == "string" ? Array.from(document.querySelectorAll(e)).filter(b) : e ? b(e) ? [e] : [] : Array.from(document.getElementsByTagName("iframe"));
}
function x(e, t) {
  if (Array.isArray(e.checkOrigin))
    return e.checkOrigin;
  if (!e.checkOrigin)
    return [];
  const n = [];
  for (const r of t) {
    const o = D(r);
    o && n.push(o);
  }
  return n;
}
function F(e, t) {
  const n = k(e.iframe) ? U(e) : N(e, t), r = $(e);
  return () => {
    n(), r();
  };
}
function N(e, t) {
  const {
    iframe: n,
    initContext: r,
    settings: { checkOrigin: o, enableLegacyLibSupport: i, targetElementSelector: s, bodyPadding: a, bodyMargin: d }
  } = e, u = (c) => {
    var y;
    const S = !o || t.includes(c.origin);
    if (!(!(n.contentWindow === c.source) || !S)) {
      if (((y = c.data) == null ? void 0 : y.type) === "iframe-resized") {
        const { height: l } = c.data;
        l && m({ newHeight: l, registeredElement: e });
        return;
      }
      if (i) {
        const l = H(c);
        l !== null && m({ newHeight: l, registeredElement: e });
        return;
      }
    }
  };
  window.addEventListener("message", u);
  const R = i ? A() : { type: "iframe-child-init", targetElementSelector: s, bodyPadding: a, bodyMargin: d }, w = () => {
    T(n, () => {
      var c;
      return (c = n.contentWindow) == null ? void 0 : c.postMessage(R, "*");
    }), r.retryAttempts++, r.retryTimeoutId = window.setTimeout(w, h(r.retryAttempts));
  };
  return w(), () => window.removeEventListener("message", u);
}
function U(e) {
  const { iframe: t, settings: n } = e, { targetElementSelector: r } = n;
  let o = 0;
  const i = () => {
    const s = g(t.contentDocument, r);
    if (!t.contentDocument || !s)
      return o++, setTimeout(i, h(o));
    I(t.contentDocument, n), z().observe(s);
  };
  return C(t, i), () => {
    const s = g(t.contentDocument, r);
    s && z().unobserve(s), t.removeEventListener("load", i);
  };
}
function $({ iframe: e, interactionState: t }) {
  const n = () => {
    t.isHovered = !0;
  }, r = () => {
    t.isHovered = !1;
  };
  return e.addEventListener("mouseenter", n), e.addEventListener("mouseleave", r), () => {
    e.removeEventListener("mouseenter", n), e.removeEventListener("mouseleave", r);
  };
}
function q() {
  let e = null;
  return () => {
    if (!e) {
      const t = ({ target: n }) => {
        const r = f.find(({ iframe: d }) => d.contentDocument === n.ownerDocument);
        if (!r)
          return;
        const { iframe: o, settings: i } = r, s = g(o.contentDocument, i.targetElementSelector);
        if (!s)
          return;
        const { height: a } = L(s);
        a && m({ newHeight: a, registeredElement: r });
      };
      e = new ResizeObserver((n) => n.forEach(t));
    }
    return e;
  };
}
function m({ registeredElement: e, newHeight: t }) {
  var u;
  const { iframe: n, settings: r, interactionState: o, initContext: i } = e;
  if (i.isInitialized || (i.isInitialized = !0, clearTimeout(i.retryTimeoutId)), ((u = r.onBeforeIframeResize) == null ? void 0 : u.call(r, { iframe: n, settings: { ...r }, observedHeight: t })) === !1)
    return;
  const s = n.getBoundingClientRect(), a = t + r.offsetSize;
  if (n.style.height = `${a}px`, !r.onIframeResize)
    return;
  const d = {
    iframe: n,
    settings: { ...r },
    interactionState: { ...o },
    previousRenderState: { rect: s },
    nextRenderState: { rect: n.getBoundingClientRect() }
  };
  r.onIframeResize(d);
}
const V = G();
let v = !1;
_();
function _() {
  !p() || !E() || window.addEventListener("message", (e) => {
    var t;
    ((t = e.data) == null ? void 0 : t.type) === "iframe-child-init" && M(() => O(e));
  });
}
function O(e, t = 0) {
  const { targetElementSelector: n, bodyPadding: r, bodyMargin: o } = e.data, i = g(document, n);
  if (v || window.parent !== e.source)
    return;
  if (!i)
    return setTimeout(() => O(e, t + 1), h(t));
  I(document, { bodyMargin: o, bodyPadding: r });
  const s = V();
  s.disconnect(), s.observe(i), v = !0;
}
function G() {
  let e = null;
  return () => (e || (e = new ResizeObserver((t) => {
    if (!t[0].target)
      return;
    const { height: n, width: r } = L(t[0].target), o = {
      type: "iframe-resized",
      width: r,
      height: n
    };
    window.parent.postMessage(o, "*");
  })), e);
}
const Q = ({ previousRenderState: e, nextRenderState: t, iframe: n }) => {
  document.activeElement === n && window.scrollBy(0, t.rect.bottom - e.rect.bottom);
};



/***/ }),

/***/ 79168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object, excludeKeys = []) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractEventHandlers);

/***/ }),

/***/ 90333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94285);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16316);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15826);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43804);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51142);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97878);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94513);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function getStyleValue(value) {
    return parseInt(value, 10) || 0;
}
const styles = {
    shadow: {
        // Visibility needed to hide the extra text area on iPads
        visibility: 'hidden',
        // Remove from the content flow
        position: 'absolute',
        // Ignore the scrollbar width
        overflow: 'hidden',
        height: 0,
        top: 0,
        left: 0,
        // Create a new layer, increase the isolation of the computed values
        transform: 'translateZ(0)'
    }
};
function isObjectEmpty(object) {
    // eslint-disable-next-line
    for(const _ in object){
        return false;
    }
    return true;
}
function isEmpty(obj) {
    return isObjectEmpty(obj) || obj.outerHeightStyle === 0 && !obj.overflowing;
}
/**
 *
 * Demos:
 *
 * - [Textarea Autosize](https://v6.mui.com/material-ui/react-textarea-autosize/)
 *
 * API:
 *
 * - [TextareaAutosize API](https://v6.mui.com/material-ui/api/textarea-autosize/)
 */ const TextareaAutosize = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function TextareaAutosize(props, forwardedRef) {
    const { onChange, maxRows, minRows = 1, style, value, ...other } = props;
    const { current: isControlled } = react__WEBPACK_IMPORTED_MODULE_0__.useRef(value != null);
    const textareaRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const handleRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(forwardedRef, textareaRef);
    const heightRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const hiddenTextareaRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const calculateTextareaStyles = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{
        const textarea = textareaRef.current;
        const hiddenTextarea = hiddenTextareaRef.current;
        if (!textarea || !hiddenTextarea) {
            return undefined;
        }
        const containerWindow = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(textarea);
        const computedStyle = containerWindow.getComputedStyle(textarea);
        // If input's width is shrunk and it's not visible, don't sync height.
        if (computedStyle.width === '0px') {
            return {
                outerHeightStyle: 0,
                overflowing: false
            };
        }
        hiddenTextarea.style.width = computedStyle.width;
        hiddenTextarea.value = textarea.value || props.placeholder || 'x';
        if (hiddenTextarea.value.slice(-1) === '\n') {
            // Certain fonts which overflow the line height will cause the textarea
            // to report a different scrollHeight depending on whether the last line
            // is empty. Make it non-empty to avoid this issue.
            hiddenTextarea.value += ' ';
        }
        const boxSizing = computedStyle.boxSizing;
        const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
        const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);
        // The height of the inner content
        const innerHeight = hiddenTextarea.scrollHeight;
        // Measure height of a textarea with a single row
        hiddenTextarea.value = 'x';
        const singleRowHeight = hiddenTextarea.scrollHeight;
        // The height of the outer content
        let outerHeight = innerHeight;
        if (minRows) {
            outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
        }
        if (maxRows) {
            outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
        }
        outerHeight = Math.max(outerHeight, singleRowHeight);
        // Take the box sizing into account for applying this value as a style.
        const outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
        const overflowing = Math.abs(outerHeight - innerHeight) <= 1;
        return {
            outerHeightStyle,
            overflowing
        };
    }, [
        maxRows,
        minRows,
        props.placeholder
    ]);
    const didHeightChange = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(()=>{
        const textarea = textareaRef.current;
        const textareaStyles = calculateTextareaStyles();
        if (!textarea || !textareaStyles || isEmpty(textareaStyles)) {
            return false;
        }
        const outerHeightStyle = textareaStyles.outerHeightStyle;
        return heightRef.current != null && heightRef.current !== outerHeightStyle;
    });
    const syncHeight = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{
        const textarea = textareaRef.current;
        const textareaStyles = calculateTextareaStyles();
        if (!textarea || !textareaStyles || isEmpty(textareaStyles)) {
            return;
        }
        const outerHeightStyle = textareaStyles.outerHeightStyle;
        if (heightRef.current !== outerHeightStyle) {
            heightRef.current = outerHeightStyle;
            textarea.style.height = "".concat(outerHeightStyle, "px");
        }
        textarea.style.overflow = textareaStyles.overflowing ? 'hidden' : '';
    }, [
        calculateTextareaStyles
    ]);
    const frameRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(-1);
    (0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(()=>{
        const debouncedHandleResize = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(syncHeight);
        const textarea = textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current;
        if (!textarea) {
            return undefined;
        }
        const containerWindow = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(textarea);
        containerWindow.addEventListener('resize', debouncedHandleResize);
        let resizeObserver;
        if (typeof ResizeObserver !== 'undefined') {
            resizeObserver = new ResizeObserver(()=>{
                if (didHeightChange()) {
                    // avoid "ResizeObserver loop completed with undelivered notifications" error
                    // by temporarily unobserving the textarea element while manipulating the height
                    // and reobserving one frame later
                    resizeObserver.unobserve(textarea);
                    cancelAnimationFrame(frameRef.current);
                    syncHeight();
                    frameRef.current = requestAnimationFrame(()=>{
                        resizeObserver.observe(textarea);
                    });
                }
            });
            resizeObserver.observe(textarea);
        }
        return ()=>{
            debouncedHandleResize.clear();
            cancelAnimationFrame(frameRef.current);
            containerWindow.removeEventListener('resize', debouncedHandleResize);
            if (resizeObserver) {
                resizeObserver.disconnect();
            }
        };
    }, [
        calculateTextareaStyles,
        syncHeight,
        didHeightChange
    ]);
    (0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(()=>{
        syncHeight();
    });
    const handleChange = (event)=>{
        if (!isControlled) {
            syncHeight();
        }
        if (onChange) {
            onChange(event);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
                value: value,
                onChange: handleChange,
                ref: handleRef,
                rows: minRows,
                style: style,
                ...other
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", {
                "aria-hidden": true,
                className: props.className,
                readOnly: true,
                ref: hiddenTextareaRef,
                tabIndex: -1,
                style: {
                    ...styles.shadow,
                    ...style,
                    paddingTop: 0,
                    paddingBottom: 0
                }
            })
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextareaAutosize);


/***/ }),

/***/ 97878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ debounce)
/* harmony export */ });
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      // @ts-ignore
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}

/***/ }),

/***/ 98005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useSlot)
/* harmony export */ });
/* harmony import */ var _mui_utils_useForkRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16316);
/* harmony import */ var _mui_utils_appendOwnerState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6035);
/* harmony import */ var _mui_utils_resolveComponentProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _mui_utils_mergeSlotProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3488);
/* __next_internal_client_entry_do_not_use__ default auto */ 



/**
 * An internal function to create a Material UI slot.
 *
 * This is an advanced version of Base UI `useSlotProps` because Material UI allows leaf component to be customized via `component` prop
 * while Base UI does not need to support leaf component customization.
 *
 * @param {string} name: name of the slot
 * @param {object} parameters
 * @returns {[Slot, slotProps]} The slot's React component and the slot's props
 *
 * Note: the returned slot's props
 * - will never contain `component` prop.
 * - might contain `as` prop.
 */ function useSlot(/**
 * The slot's name. All Material UI components should have `root` slot.
 *
 * If the name is `root`, the logic behaves differently from other slots,
 * e.g. the `externalForwardedProps` are spread to `root` slot but not other slots.
 */ name, parameters) {
    const { className, elementType: initialElementType, ownerState, externalForwardedProps, internalForwardedProps, shouldForwardComponentProp = false, ...useSlotPropsParams } = parameters;
    const { component: rootComponent, slots = {
        [name]: undefined
    }, slotProps = {
        [name]: undefined
    }, ...other } = externalForwardedProps;
    const elementType = slots[name] || initialElementType;
    // `slotProps[name]` can be a callback that receives the component's ownerState.
    // `resolvedComponentsProps` is always a plain object.
    const resolvedComponentsProps = (0,_mui_utils_resolveComponentProps__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(slotProps[name], ownerState);
    const { props: { component: slotComponent, ...mergedProps }, internalRef } = (0,_mui_utils_mergeSlotProps__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
        className,
        ...useSlotPropsParams,
        externalForwardedProps: name === 'root' ? other : undefined,
        externalSlotProps: resolvedComponentsProps
    });
    const ref = (0,_mui_utils_useForkRef__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(internalRef, resolvedComponentsProps === null || resolvedComponentsProps === void 0 ? void 0 : resolvedComponentsProps.ref, parameters.ref);
    const LeafComponent = name === 'root' ? slotComponent || rootComponent : slotComponent;
    const props = (0,_mui_utils_appendOwnerState__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(elementType, {
        ...name === 'root' && !rootComponent && !slots[name] && internalForwardedProps,
        ...name !== 'root' && !slots[name] && internalForwardedProps,
        ...mergedProps,
        ...LeafComponent && !shouldForwardComponentProp && {
            as: LeafComponent
        },
        ...LeafComponent && shouldForwardComponentProp && {
            component: LeafComponent
        },
        ref
    }, ownerState);
    return [
        elementType,
        props
    ];
}


/***/ })

}]);
//# sourceMappingURL=3904-157fd2c22c4212a0.js.map