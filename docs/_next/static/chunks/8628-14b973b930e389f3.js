"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8628],{

/***/ 5391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Modal_Modal)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(401);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var useForkRef = __webpack_require__(48221);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js
var getReactElementRef = __webpack_require__(21973);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
var ownerDocument = __webpack_require__(30255);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Unstable_TrapFocus/FocusTrap.js
/* __next_internal_client_entry_do_not_use__ default auto */ /* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */ 



// Inspired by https://github.com/focus-trap/tabbable
const candidatesSelector = [
    'input',
    'select',
    'textarea',
    'a[href]',
    'button',
    '[tabindex]',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]:not([contenteditable="false"])'
].join(',');
function getTabIndex(node) {
    const tabindexAttr = parseInt(node.getAttribute('tabindex') || '', 10);
    if (!Number.isNaN(tabindexAttr)) {
        return tabindexAttr;
    }
    // Browsers do not return `tabIndex` correctly for contentEditable nodes;
    // https://issues.chromium.org/issues/41283952
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    //  yet they are still part of the regular tab order; in FF, they get a default
    //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    //  order, consider their tab index to be 0.
    if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
        return 0;
    }
    return node.tabIndex;
}
function isNonTabbableRadio(node) {
    if (node.tagName !== 'INPUT' || node.type !== 'radio') {
        return false;
    }
    if (!node.name) {
        return false;
    }
    const getRadio = (selector)=>node.ownerDocument.querySelector('input[type="radio"]'.concat(selector));
    let roving = getRadio('[name="'.concat(node.name, '"]:checked'));
    if (!roving) {
        roving = getRadio('[name="'.concat(node.name, '"]'));
    }
    return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
    if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
        return false;
    }
    return true;
}
function defaultGetTabbable(root) {
    const regularTabNodes = [];
    const orderedTabNodes = [];
    Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i)=>{
        const nodeTabIndex = getTabIndex(node);
        if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
            return;
        }
        if (nodeTabIndex === 0) {
            regularTabNodes.push(node);
        } else {
            orderedTabNodes.push({
                documentOrder: i,
                tabIndex: nodeTabIndex,
                node: node
            });
        }
    });
    return orderedTabNodes.sort((a, b)=>a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map((a)=>a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
    return true;
}
/**
 * @ignore - internal component.
 */ function FocusTrap(props) {
    const { children, disableAutoFocus = false, disableEnforceFocus = false, disableRestoreFocus = false, getTabbable = defaultGetTabbable, isEnabled = defaultIsEnabled, open } = props;
    const ignoreNextEnforceFocus = react.useRef(false);
    const sentinelStart = react.useRef(null);
    const sentinelEnd = react.useRef(null);
    const nodeToRestore = react.useRef(null);
    const reactFocusEventTarget = react.useRef(null);
    // This variable is useful when disableAutoFocus is true.
    // It waits for the active element to move into the component to activate.
    const activated = react.useRef(false);
    const rootRef = react.useRef(null);
    const handleRef = (0,useForkRef/* default */.A)((0,getReactElementRef/* default */.A)(children), rootRef);
    const lastKeydown = react.useRef(null);
    react.useEffect(()=>{
        // We might render an empty child.
        if (!open || !rootRef.current) {
            return;
        }
        activated.current = !disableAutoFocus;
    }, [
        disableAutoFocus,
        open
    ]);
    react.useEffect(()=>{
        // We might render an empty child.
        if (!open || !rootRef.current) {
            return;
        }
        const doc = (0,ownerDocument/* default */.A)(rootRef.current);
        if (!rootRef.current.contains(doc.activeElement)) {
            if (!rootRef.current.hasAttribute('tabIndex')) {
                if (false) {}
                rootRef.current.setAttribute('tabIndex', '-1');
            }
            if (activated.current) {
                rootRef.current.focus();
            }
        }
        return ()=>{
            // restoreLastFocus()
            if (!disableRestoreFocus) {
                // In IE11 it is possible for document.activeElement to be null resulting
                // in nodeToRestore.current being null.
                // Not all elements in IE11 have a focus method.
                // Once IE11 support is dropped the focus() call can be unconditional.
                if (nodeToRestore.current && nodeToRestore.current.focus) {
                    ignoreNextEnforceFocus.current = true;
                    nodeToRestore.current.focus();
                }
                nodeToRestore.current = null;
            }
        };
    // Missing `disableRestoreFocus` which is fine.
    // We don't support changing that prop on an open FocusTrap
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        open
    ]);
    react.useEffect(()=>{
        // We might render an empty child.
        if (!open || !rootRef.current) {
            return;
        }
        const doc = (0,ownerDocument/* default */.A)(rootRef.current);
        const loopFocus = (nativeEvent)=>{
            lastKeydown.current = nativeEvent;
            if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
                return;
            }
            // Make sure the next tab starts from the right place.
            // doc.activeElement refers to the origin.
            if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
                // We need to ignore the next contain as
                // it will try to move the focus back to the rootRef element.
                ignoreNextEnforceFocus.current = true;
                if (sentinelEnd.current) {
                    sentinelEnd.current.focus();
                }
            }
        };
        const contain = ()=>{
            const rootElement = rootRef.current;
            // Cleanup functions are executed lazily in React 17.
            // Contain can be called between the component being unmounted and its cleanup function being run.
            if (rootElement === null) {
                return;
            }
            if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
                ignoreNextEnforceFocus.current = false;
                return;
            }
            // The focus is already inside
            if (rootElement.contains(doc.activeElement)) {
                return;
            }
            // The disableEnforceFocus is set and the focus is outside of the focus trap (and sentinel nodes)
            if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
                return;
            }
            // if the focus event is not coming from inside the children's react tree, reset the refs
            if (doc.activeElement !== reactFocusEventTarget.current) {
                reactFocusEventTarget.current = null;
            } else if (reactFocusEventTarget.current !== null) {
                return;
            }
            if (!activated.current) {
                return;
            }
            let tabbable = [];
            if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
                tabbable = getTabbable(rootRef.current);
            }
            // one of the sentinel nodes was focused, so move the focus
            // to the first/last tabbable element inside the focus trap
            if (tabbable.length > 0) {
                var _lastKeydown_current, _lastKeydown_current1;
                const isShiftTab = Boolean(((_lastKeydown_current = lastKeydown.current) === null || _lastKeydown_current === void 0 ? void 0 : _lastKeydown_current.shiftKey) && ((_lastKeydown_current1 = lastKeydown.current) === null || _lastKeydown_current1 === void 0 ? void 0 : _lastKeydown_current1.key) === 'Tab');
                const focusNext = tabbable[0];
                const focusPrevious = tabbable[tabbable.length - 1];
                if (typeof focusNext !== 'string' && typeof focusPrevious !== 'string') {
                    if (isShiftTab) {
                        focusPrevious.focus();
                    } else {
                        focusNext.focus();
                    }
                }
            // no tabbable elements in the trap focus or the focus was outside of the focus trap
            } else {
                rootElement.focus();
            }
        };
        doc.addEventListener('focusin', contain);
        doc.addEventListener('keydown', loopFocus, true);
        // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
        // for example https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
        // Instead, we can look if the active element was restored on the BODY element.
        //
        // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
        // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
        const interval = setInterval(()=>{
            if (doc.activeElement && doc.activeElement.tagName === 'BODY') {
                contain();
            }
        }, 50);
        return ()=>{
            clearInterval(interval);
            doc.removeEventListener('focusin', contain);
            doc.removeEventListener('keydown', loopFocus, true);
        };
    }, [
        disableAutoFocus,
        disableEnforceFocus,
        disableRestoreFocus,
        isEnabled,
        open,
        getTabbable
    ]);
    const onFocus = (event)=>{
        if (nodeToRestore.current === null) {
            nodeToRestore.current = event.relatedTarget;
        }
        activated.current = true;
        reactFocusEventTarget.current = event.target;
        const childrenPropsHandler = children.props.onFocus;
        if (childrenPropsHandler) {
            childrenPropsHandler(event);
        }
    };
    const handleFocusSentinel = (event)=>{
        if (nodeToRestore.current === null) {
            nodeToRestore.current = event.relatedTarget;
        }
        activated.current = true;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                tabIndex: open ? 0 : -1,
                onFocus: handleFocusSentinel,
                ref: sentinelStart,
                "data-testid": "sentinelStart"
            }),
            /*#__PURE__*/ react.cloneElement(children, {
                ref: handleRef,
                onFocus
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                tabIndex: open ? 0 : -1,
                onFocus: handleFocusSentinel,
                ref: sentinelEnd,
                "data-testid": "sentinelEnd"
            })
        ]
    });
}
 false ? 0 : void 0;
if (false) {}
/* harmony default export */ const Unstable_TrapFocus_FocusTrap = (FocusTrap);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Portal/Portal.js
var Portal = __webpack_require__(25407);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(17122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(13492);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(63375);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Backdrop/Backdrop.js + 1 modules
var Backdrop = __webpack_require__(36179);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
var useEventCallback = __webpack_require__(10029);
;// ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js
/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {});
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
var extractEventHandlers = __webpack_require__(8609);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js
var ownerWindow = __webpack_require__(30967);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/getScrollbarSize/getScrollbarSize.js
var getScrollbarSize = __webpack_require__(99903);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Modal/ModalManager.js

// Is a vertical scrollbar displayed?
function isOverflowing(container) {
    const doc = (0,ownerDocument/* default */.A)(container);
    if (doc.body === container) {
        return (0,ownerWindow/* default */.A)(container).innerWidth > doc.documentElement.clientWidth;
    }
    return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, hide) {
    if (hide) {
        element.setAttribute('aria-hidden', 'true');
    } else {
        element.removeAttribute('aria-hidden');
    }
}
function getPaddingRight(element) {
    return parseInt((0,ownerWindow/* default */.A)(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
    // The forbidden HTML tags are the ones from ARIA specification that
    // can be children of body and can't have aria-hidden attribute.
    // cf. https://www.w3.org/TR/html-aria/#docconformance
    const forbiddenTagNames = [
        'TEMPLATE',
        'SCRIPT',
        'STYLE',
        'LINK',
        'MAP',
        'META',
        'NOSCRIPT',
        'PICTURE',
        'COL',
        'COLGROUP',
        'PARAM',
        'SLOT',
        'SOURCE',
        'TRACK'
    ];
    const isForbiddenTagName = forbiddenTagNames.includes(element.tagName);
    const isInputHidden = element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';
    return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, hide) {
    const blacklist = [
        mountElement,
        currentElement,
        ...elementsToExclude
    ];
    [].forEach.call(container.children, (element)=>{
        const isNotExcludedElement = !blacklist.includes(element);
        const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
        if (isNotExcludedElement && isNotForbiddenElement) {
            ariaHidden(element, hide);
        }
    });
}
function findIndexOf(items, callback) {
    let idx = -1;
    items.some((item, index)=>{
        if (callback(item)) {
            idx = index;
            return true;
        }
        return false;
    });
    return idx;
}
function handleContainer(containerInfo, props) {
    const restoreStyle = [];
    const container = containerInfo.container;
    if (!props.disableScrollLock) {
        if (isOverflowing(container)) {
            // Compute the size before applying overflow hidden to avoid any scroll jumps.
            const scrollbarSize = (0,getScrollbarSize/* default */.A)((0,ownerWindow/* default */.A)(container));
            restoreStyle.push({
                value: container.style.paddingRight,
                property: 'padding-right',
                el: container
            });
            // Use computed style, here to get the real padding to add our scrollbar width.
            container.style.paddingRight = "".concat(getPaddingRight(container) + scrollbarSize, "px");
            // .mui-fixed is a global helper.
            const fixedElements = (0,ownerDocument/* default */.A)(container).querySelectorAll('.mui-fixed');
            [].forEach.call(fixedElements, (element)=>{
                restoreStyle.push({
                    value: element.style.paddingRight,
                    property: 'padding-right',
                    el: element
                });
                element.style.paddingRight = "".concat(getPaddingRight(element) + scrollbarSize, "px");
            });
        }
        let scrollContainer;
        if (container.parentNode instanceof DocumentFragment) {
            scrollContainer = (0,ownerDocument/* default */.A)(container).body;
        } else {
            // Support html overflow-y: auto for scroll stability between pages
            // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
            const parent = container.parentElement;
            const containerWindow = (0,ownerWindow/* default */.A)(container);
            scrollContainer = (parent === null || parent === void 0 ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container;
        }
        // Block the scroll even if no scrollbar is visible to account for mobile keyboard
        // screensize shrink.
        restoreStyle.push({
            value: scrollContainer.style.overflow,
            property: 'overflow',
            el: scrollContainer
        }, {
            value: scrollContainer.style.overflowX,
            property: 'overflow-x',
            el: scrollContainer
        }, {
            value: scrollContainer.style.overflowY,
            property: 'overflow-y',
            el: scrollContainer
        });
        scrollContainer.style.overflow = 'hidden';
    }
    const restore = ()=>{
        restoreStyle.forEach((param)=>{
            let { value, el, property } = param;
            if (value) {
                el.style.setProperty(property, value);
            } else {
                el.style.removeProperty(property);
            }
        });
    };
    return restore;
}
function getHiddenSiblings(container) {
    const hiddenSiblings = [];
    [].forEach.call(container.children, (element)=>{
        if (element.getAttribute('aria-hidden') === 'true') {
            hiddenSiblings.push(element);
        }
    });
    return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */ class ModalManager {
    add(modal, container) {
        let modalIndex = this.modals.indexOf(modal);
        if (modalIndex !== -1) {
            return modalIndex;
        }
        modalIndex = this.modals.length;
        this.modals.push(modal);
        // If the modal we are adding is already in the DOM.
        if (modal.modalRef) {
            ariaHidden(modal.modalRef, false);
        }
        const hiddenSiblings = getHiddenSiblings(container);
        ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
        const containerIndex = findIndexOf(this.containers, (item)=>item.container === container);
        if (containerIndex !== -1) {
            this.containers[containerIndex].modals.push(modal);
            return modalIndex;
        }
        this.containers.push({
            modals: [
                modal
            ],
            container,
            restore: null,
            hiddenSiblings
        });
        return modalIndex;
    }
    mount(modal, props) {
        const containerIndex = findIndexOf(this.containers, (item)=>item.modals.includes(modal));
        const containerInfo = this.containers[containerIndex];
        if (!containerInfo.restore) {
            containerInfo.restore = handleContainer(containerInfo, props);
        }
    }
    remove(modal) {
        let ariaHiddenState = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        const modalIndex = this.modals.indexOf(modal);
        if (modalIndex === -1) {
            return modalIndex;
        }
        const containerIndex = findIndexOf(this.containers, (item)=>item.modals.includes(modal));
        const containerInfo = this.containers[containerIndex];
        containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
        this.modals.splice(modalIndex, 1);
        // If that was the last modal in a container, clean up the container.
        if (containerInfo.modals.length === 0) {
            // The modal might be closed before it had the chance to be mounted in the DOM.
            if (containerInfo.restore) {
                containerInfo.restore();
            }
            if (modal.modalRef) {
                // In case the modal wasn't in the DOM yet.
                ariaHidden(modal.modalRef, ariaHiddenState);
            }
            ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
            this.containers.splice(containerIndex, 1);
        } else {
            // Otherwise make sure the next top modal is visible to a screen reader.
            const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
            // as soon as a modal is adding its modalRef is undefined. it can't set
            // aria-hidden because the dom element doesn't exist either
            // when modal was unmounted before modalRef gets null
            if (nextTop.modalRef) {
                ariaHidden(nextTop.modalRef, false);
            }
        }
        return modalIndex;
    }
    isTopModal(modal) {
        return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }
    constructor(){
        this.modals = [];
        this.containers = [];
    }
}

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Modal/useModal.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



function getContainer(container) {
    return typeof container === 'function' ? container() : container;
}
function getHasTransition(children) {
    return children ? children.props.hasOwnProperty('in') : false;
}
const noop = ()=>{};
// A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.
const manager = new ModalManager();
/**
 *
 * Demos:
 *
 * - [Modal](https://mui.com/base-ui/react-modal/#hook)
 *
 * API:
 *
 * - [useModal API](https://mui.com/base-ui/react-modal/hooks-api/#use-modal)
 */ function useModal(parameters) {
    const { container, disableEscapeKeyDown = false, disableScrollLock = false, closeAfterTransition = false, onTransitionEnter, onTransitionExited, children, onClose, open, rootRef } = parameters;
    // @ts-ignore internal logic
    const modal = react.useRef({});
    const mountNodeRef = react.useRef(null);
    const modalRef = react.useRef(null);
    const handleRef = (0,useForkRef/* default */.A)(modalRef, rootRef);
    const [exited, setExited] = react.useState(!open);
    const hasTransition = getHasTransition(children);
    let ariaHiddenProp = true;
    if (parameters['aria-hidden'] === 'false' || parameters['aria-hidden'] === false) {
        ariaHiddenProp = false;
    }
    const getDoc = ()=>(0,ownerDocument/* default */.A)(mountNodeRef.current);
    const getModal = ()=>{
        modal.current.modalRef = modalRef.current;
        modal.current.mount = mountNodeRef.current;
        return modal.current;
    };
    const handleMounted = ()=>{
        manager.mount(getModal(), {
            disableScrollLock
        });
        // Fix a bug on Chrome where the scroll isn't initially 0.
        if (modalRef.current) {
            modalRef.current.scrollTop = 0;
        }
    };
    const handleOpen = (0,useEventCallback/* default */.A)(()=>{
        const resolvedContainer = getContainer(container) || getDoc().body;
        manager.add(getModal(), resolvedContainer);
        // The element was already mounted.
        if (modalRef.current) {
            handleMounted();
        }
    });
    const isTopModal = ()=>manager.isTopModal(getModal());
    const handlePortalRef = (0,useEventCallback/* default */.A)((node)=>{
        mountNodeRef.current = node;
        if (!node) {
            return;
        }
        if (open && isTopModal()) {
            handleMounted();
        } else if (modalRef.current) {
            ariaHidden(modalRef.current, ariaHiddenProp);
        }
    });
    const handleClose = react.useCallback(()=>{
        manager.remove(getModal(), ariaHiddenProp);
    }, [
        ariaHiddenProp
    ]);
    react.useEffect(()=>{
        return ()=>{
            handleClose();
        };
    }, [
        handleClose
    ]);
    react.useEffect(()=>{
        if (open) {
            handleOpen();
        } else if (!hasTransition || !closeAfterTransition) {
            handleClose();
        }
    }, [
        open,
        handleClose,
        hasTransition,
        closeAfterTransition,
        handleOpen
    ]);
    const createHandleKeyDown = (otherHandlers)=>(event)=>{
            var _otherHandlers_onKeyDown;
            (_otherHandlers_onKeyDown = otherHandlers.onKeyDown) === null || _otherHandlers_onKeyDown === void 0 ? void 0 : _otherHandlers_onKeyDown.call(otherHandlers, event);
            // The handler doesn't take event.defaultPrevented into account:
            //
            // event.preventDefault() is meant to stop default behaviors like
            // clicking a checkbox to check it, hitting a button to submit a form,
            // and hitting left arrow to move the cursor in a text input etc.
            // Only special HTML elements have these default behaviors.
            if (event.key !== 'Escape' || event.which === 229 || // Wait until IME is settled.
            !isTopModal()) {
                return;
            }
            if (!disableEscapeKeyDown) {
                // Swallow the event, in case someone is listening for the escape key on the body.
                event.stopPropagation();
                if (onClose) {
                    onClose(event, 'escapeKeyDown');
                }
            }
        };
    const createHandleBackdropClick = (otherHandlers)=>(event)=>{
            var _otherHandlers_onClick;
            (_otherHandlers_onClick = otherHandlers.onClick) === null || _otherHandlers_onClick === void 0 ? void 0 : _otherHandlers_onClick.call(otherHandlers, event);
            if (event.target !== event.currentTarget) {
                return;
            }
            if (onClose) {
                onClose(event, 'backdropClick');
            }
        };
    const getRootProps = function() {
        let otherHandlers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const propsEventHandlers = (0,extractEventHandlers/* default */.A)(parameters);
        // The custom event handlers shouldn't be spread on the root element
        delete propsEventHandlers.onTransitionEnter;
        delete propsEventHandlers.onTransitionExited;
        const externalEventHandlers = {
            ...propsEventHandlers,
            ...otherHandlers
        };
        return {
            /*
       * Marking an element with the role presentation indicates to assistive technology
       * that this element should be ignored; it exists to support the web application and
       * is not meant for humans to interact with directly.
       * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
       */ role: 'presentation',
            ...externalEventHandlers,
            onKeyDown: createHandleKeyDown(externalEventHandlers),
            ref: handleRef
        };
    };
    const getBackdropProps = function() {
        let otherHandlers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const externalEventHandlers = otherHandlers;
        return {
            'aria-hidden': true,
            ...externalEventHandlers,
            onClick: createHandleBackdropClick(externalEventHandlers),
            open
        };
    };
    const getTransitionProps = ()=>{
        const handleEnter = ()=>{
            setExited(false);
            if (onTransitionEnter) {
                onTransitionEnter();
            }
        };
        const handleExited = ()=>{
            setExited(true);
            if (onTransitionExited) {
                onTransitionExited();
            }
            if (closeAfterTransition) {
                handleClose();
            }
        };
        var _children_props_onEnter, _children_props_onExited;
        return {
            onEnter: createChainedFunction(handleEnter, (_children_props_onEnter = children === null || children === void 0 ? void 0 : children.props.onEnter) !== null && _children_props_onEnter !== void 0 ? _children_props_onEnter : noop),
            onExited: createChainedFunction(handleExited, (_children_props_onExited = children === null || children === void 0 ? void 0 : children.props.onExited) !== null && _children_props_onExited !== void 0 ? _children_props_onExited : noop)
        };
    };
    return {
        getRootProps,
        getBackdropProps,
        getTransitionProps,
        rootRef: handleRef,
        portalRef: handlePortalRef,
        isTopModal,
        exited,
        hasTransition
    };
}
/* harmony default export */ const Modal_useModal = (useModal);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(75719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(42159);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Modal/modalClasses.js


function getModalUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiModal', slot);
}
const modalClasses = (0,generateUtilityClasses/* default */.A)('MuiModal', [
    'root',
    'hidden',
    'backdrop'
]);
/* harmony default export */ const Modal_modalClasses = ((/* unused pure expression or super */ null && (modalClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(46699);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/utils/useForkRef.js
var utils_useForkRef = __webpack_require__(91872);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Modal/Modal.js
/* __next_internal_client_entry_do_not_use__ default auto */ 
















const useUtilityClasses = (ownerState)=>{
    const { open, exited, classes } = ownerState;
    const slots = {
        root: [
            'root',
            !open && exited && 'hidden'
        ],
        backdrop: [
            'backdrop'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getModalUtilityClass, classes);
};
const ModalRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiModal',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            !ownerState.open && ownerState.exited && styles.hidden
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        position: 'fixed',
        zIndex: (theme.vars || theme).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.open && ownerState.exited;
                },
                style: {
                    visibility: 'hidden'
                }
            }
        ]
    };
}));
const ModalBackdrop = (0,styled/* default */.Ay)(Backdrop/* default */.A, {
    name: 'MuiModal',
    slot: 'Backdrop',
    overridesResolver: (props, styles)=>{
        return styles.backdrop;
    }
})({
    zIndex: -1
});
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/material-ui/api/dialog/)
 * - [Drawer](/material-ui/api/drawer/)
 * - [Menu](/material-ui/api/menu/)
 * - [Popover](/material-ui/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/material-ui/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */ const Modal = /*#__PURE__*/ react.forwardRef(function Modal(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        name: 'MuiModal',
        props: inProps
    });
    const { BackdropComponent = ModalBackdrop, BackdropProps, classes: classesProp, className, closeAfterTransition = false, children, container, component, components = {}, componentsProps = {}, disableAutoFocus = false, disableEnforceFocus = false, disableEscapeKeyDown = false, disablePortal = false, disableRestoreFocus = false, disableScrollLock = false, hideBackdrop = false, keepMounted = false, onBackdropClick, onClose, onTransitionEnter, onTransitionExited, open, slotProps = {}, slots = {}, // eslint-disable-next-line react/prop-types
    theme, ...other } = props;
    const propsWithDefaults = {
        ...props,
        closeAfterTransition,
        disableAutoFocus,
        disableEnforceFocus,
        disableEscapeKeyDown,
        disablePortal,
        disableRestoreFocus,
        disableScrollLock,
        hideBackdrop,
        keepMounted
    };
    const { getRootProps, getBackdropProps, getTransitionProps, portalRef, isTopModal, exited, hasTransition } = Modal_useModal({
        ...propsWithDefaults,
        rootRef: ref
    });
    const ownerState = {
        ...propsWithDefaults,
        exited
    };
    const classes = useUtilityClasses(ownerState);
    const childProps = {};
    if (children.props.tabIndex === undefined) {
        childProps.tabIndex = '-1';
    }
    // It's a Transition like component
    if (hasTransition) {
        const { onEnter, onExited } = getTransitionProps();
        childProps.onEnter = onEnter;
        childProps.onExited = onExited;
    }
    const externalForwardedProps = {
        ...other,
        slots: {
            root: components.Root,
            backdrop: components.Backdrop,
            ...slots
        },
        slotProps: {
            ...componentsProps,
            ...slotProps
        }
    };
    const [RootSlot, rootProps] = (0,useSlot/* default */.A)('root', {
        elementType: ModalRoot,
        externalForwardedProps,
        getSlotProps: getRootProps,
        additionalProps: {
            ref,
            as: component
        },
        ownerState,
        className: (0,clsx/* default */.A)(className, classes === null || classes === void 0 ? void 0 : classes.root, !ownerState.open && ownerState.exited && (classes === null || classes === void 0 ? void 0 : classes.hidden))
    });
    const [BackdropSlot, backdropProps] = (0,useSlot/* default */.A)('backdrop', {
        elementType: BackdropComponent,
        externalForwardedProps,
        additionalProps: BackdropProps,
        getSlotProps: (otherHandlers)=>{
            return getBackdropProps({
                ...otherHandlers,
                onClick: (event)=>{
                    if (onBackdropClick) {
                        onBackdropClick(event);
                    }
                    if (otherHandlers === null || otherHandlers === void 0 ? void 0 : otherHandlers.onClick) {
                        otherHandlers.onClick(event);
                    }
                }
            });
        },
        className: (0,clsx/* default */.A)(BackdropProps === null || BackdropProps === void 0 ? void 0 : BackdropProps.className, classes === null || classes === void 0 ? void 0 : classes.backdrop),
        ownerState
    });
    const backdropRef = (0,utils_useForkRef/* default */.A)(BackdropProps === null || BackdropProps === void 0 ? void 0 : BackdropProps.ref, backdropProps.ref);
    if (!keepMounted && !open && (!hasTransition || exited)) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Portal/* default */.A, {
        ref: portalRef,
        container: container,
        disablePortal: disablePortal,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(RootSlot, {
            ...rootProps,
            children: [
                !hideBackdrop && BackdropComponent ? /*#__PURE__*/ (0,jsx_runtime.jsx)(BackdropSlot, {
                    ...backdropProps,
                    ref: backdropRef
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Unstable_TrapFocus_FocusTrap, {
                    disableEnforceFocus: disableEnforceFocus,
                    disableAutoFocus: disableAutoFocus,
                    disableRestoreFocus: disableRestoreFocus,
                    isEnabled: isTopModal,
                    open: open,
                    children: /*#__PURE__*/ react.cloneElement(children, childProps)
                })
            ]
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Modal_Modal = (Modal);


/***/ }),

/***/ 8176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Paper_Paper)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(401);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@11_pdm6rbm33hbobpxddqovt6fgli/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(14407);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(17122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(30845);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(13492);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(63375);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/styles/getOverlayAlpha.js
var getOverlayAlpha = __webpack_require__(73903);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(75719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(42159);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Paper/paperClasses.js


function getPaperUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiPaper', slot);
}
const paperClasses = (0,generateUtilityClasses/* default */.A)('MuiPaper', [
    'root',
    'rounded',
    'outlined',
    'elevation',
    'elevation0',
    'elevation1',
    'elevation2',
    'elevation3',
    'elevation4',
    'elevation5',
    'elevation6',
    'elevation7',
    'elevation8',
    'elevation9',
    'elevation10',
    'elevation11',
    'elevation12',
    'elevation13',
    'elevation14',
    'elevation15',
    'elevation16',
    'elevation17',
    'elevation18',
    'elevation19',
    'elevation20',
    'elevation21',
    'elevation22',
    'elevation23',
    'elevation24'
]);
/* harmony default export */ const Paper_paperClasses = ((/* unused pure expression or super */ null && (paperClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Paper/Paper.js
/* __next_internal_client_entry_do_not_use__ default auto */ 












const useUtilityClasses = (ownerState)=>{
    const { square, elevation, variant, classes } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            !square && 'rounded',
            variant === 'elevation' && "elevation".concat(elevation)
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getPaperUtilityClass, classes);
};
const PaperRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.variant],
            !ownerState.square && styles.rounded,
            ownerState.variant === 'elevation' && styles["elevation".concat(ownerState.elevation)]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        backgroundColor: (theme.vars || theme).palette.background.paper,
        color: (theme.vars || theme).palette.text.primary,
        transition: theme.transitions.create('box-shadow'),
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.square;
                },
                style: {
                    borderRadius: theme.shape.borderRadius
                }
            },
            {
                props: {
                    variant: 'outlined'
                },
                style: {
                    border: "1px solid ".concat((theme.vars || theme).palette.divider)
                }
            },
            {
                props: {
                    variant: 'elevation'
                },
                style: {
                    boxShadow: 'var(--Paper-shadow)',
                    backgroundImage: 'var(--Paper-overlay)'
                }
            }
        ]
    };
}));
const Paper = /*#__PURE__*/ react.forwardRef(function Paper(inProps, ref) {
    var _theme_vars_overlays;
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiPaper'
    });
    const theme = (0,useTheme/* default */.A)();
    const { className, component = 'div', elevation = 1, square = false, variant = 'elevation', ...other } = props;
    const ownerState = {
        ...props,
        component,
        elevation,
        square,
        variant
    };
    const classes = useUtilityClasses(ownerState);
    if (false) {}
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PaperRoot, {
        as: component,
        ownerState: ownerState,
        className: (0,clsx/* default */.A)(classes.root, className),
        ref: ref,
        ...other,
        style: {
            ...variant === 'elevation' && {
                '--Paper-shadow': (theme.vars || theme).shadows[elevation],
                ...theme.vars && {
                    '--Paper-overlay': (_theme_vars_overlays = theme.vars.overlays) === null || _theme_vars_overlays === void 0 ? void 0 : _theme_vars_overlays[elevation]
                },
                ...!theme.vars && theme.palette.mode === 'dark' && {
                    '--Paper-overlay': "linear-gradient(".concat((0,colorManipulator/* alpha */.X4)('#fff', (0,getOverlayAlpha/* default */.A)(elevation)), ", ").concat((0,colorManipulator/* alpha */.X4)('#fff', (0,getOverlayAlpha/* default */.A)(elevation)), ")")
                }
            },
            ...other.style
        }
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Paper_Paper = (Paper);


/***/ }),

/***/ 16791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);
'use client';


let globalId = 0;

// TODO React 17: Remove `useGlobalId` once React 17 support is removed
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(idOverride);
  const id = idOverride || defaultId;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}

// See https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379 for why
const safeReact = {
  .../*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))
};
const maybeReactUseId = safeReact.useId;

/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
function useId(idOverride) {
  // React.useId() is only available from React 17.0.0.
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride ?? reactId;
  }

  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
  // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
  return useGlobalId(idOverride);
}

/***/ }),

/***/ 21973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getReactElementRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);


/**
 * Returns the ref of a React element handling differences between React 19 and older versions.
 * It will throw runtime error if the element is not a valid React element.
 *
 * @param element React.ReactElement
 * @returns React.Ref<any> | null
 */
function getReactElementRef(element) {
  // 'ref' is passed as prop in React 19, whereas 'ref' is directly attached to children in older versions
  if (parseInt(react__WEBPACK_IMPORTED_MODULE_0__.version, 10) >= 19) {
    return element?.props?.ref || null;
  }
  // @ts-expect-error element.ref is not included in the ReactElement type
  // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
  return element?.ref || null;
}

/***/ }),

/***/ 25407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75814);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48221);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21973);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53283);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20975);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function getContainer(container) {
    return typeof container === 'function' ? container() : container;
}
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * Demos:
 *
 * - [Portal](https://mui.com/material-ui/react-portal/)
 *
 * API:
 *
 * - [Portal API](https://mui.com/material-ui/api/portal/)
 */ const Portal = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Portal(props, forwardedRef) {
    const { children, container, disablePortal = false } = props;
    const [mountNode, setMountNode] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const handleRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children) ? (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(children) : null, forwardedRef);
    (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(()=>{
        if (!disablePortal) {
            setMountNode(getContainer(container) || document.body);
        }
    }, [
        container,
        disablePortal
    ]);
    (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(()=>{
        if (mountNode && !disablePortal) {
            (0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(forwardedRef, mountNode);
            return ()=>{
                (0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(forwardedRef, null);
            };
        }
        return undefined;
    }, [
        forwardedRef,
        mountNode,
        disablePortal
    ]);
    if (disablePortal) {
        if (/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
            const newProps = {
                ref: handleRef
            };
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, newProps);
        }
        return children;
    }
    return mountNode ? /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(children, mountNode) : mountNode;
});
 false ? 0 : void 0;
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);


/***/ }),

/***/ 30845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28539);
/* harmony import */ var _defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56395);
/* harmony import */ var _identifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24138);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function useTheme() {
    const theme = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
    if (false) {}
    return theme[_identifier_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A] || theme;
}


/***/ }),

/***/ 33174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);
/* __next_internal_client_entry_do_not_use__ default auto */ 
/**
 * @ignore - internal component.
 */ const ListContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListContext);


/***/ }),

/***/ 36179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Backdrop_Backdrop)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(401);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(17122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(63375);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(46699);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(37387);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(75719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(42159);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Backdrop/backdropClasses.js


function getBackdropUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiBackdrop', slot);
}
const backdropClasses = (0,generateUtilityClasses/* default */.A)('MuiBackdrop', [
    'root',
    'invisible'
]);
/* harmony default export */ const Backdrop_backdropClasses = ((/* unused pure expression or super */ null && (backdropClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Backdrop/Backdrop.js
/* __next_internal_client_entry_do_not_use__ default auto */ 









const removeOwnerState = (props)=>{
    const { ownerState, ...rest } = props;
    return rest;
};
const useUtilityClasses = (ownerState)=>{
    const { classes, invisible } = ownerState;
    const slots = {
        root: [
            'root',
            invisible && 'invisible'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getBackdropUtilityClass, classes);
};
const BackdropRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiBackdrop',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.invisible && styles.invisible
        ];
    }
})({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent',
    variants: [
        {
            props: {
                invisible: true
            },
            style: {
                backgroundColor: 'transparent'
            }
        }
    ]
});
const Backdrop = /*#__PURE__*/ react.forwardRef(function Backdrop(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiBackdrop'
    });
    const { children, className, component = 'div', invisible = false, open, components = {}, componentsProps = {}, slotProps = {}, slots = {}, TransitionComponent: TransitionComponentProp, transitionDuration, ...other } = props;
    const ownerState = {
        ...props,
        component,
        invisible
    };
    const classes = useUtilityClasses(ownerState);
    const backwardCompatibleSlots = {
        transition: TransitionComponentProp,
        root: components.Root,
        ...slots
    };
    const backwardCompatibleSlotProps = {
        ...componentsProps,
        ...slotProps
    };
    const externalForwardedProps = {
        slots: backwardCompatibleSlots,
        slotProps: backwardCompatibleSlotProps
    };
    const [RootSlot, rootProps] = (0,useSlot/* default */.A)('root', {
        elementType: BackdropRoot,
        externalForwardedProps,
        className: (0,clsx/* default */.A)(classes.root, className),
        ownerState
    });
    const [TransitionSlot, transitionProps] = (0,useSlot/* default */.A)('transition', {
        elementType: Fade/* default */.A,
        externalForwardedProps,
        ownerState
    });
    const transitionPropsRemoved = removeOwnerState(transitionProps);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TransitionSlot, {
        in: open,
        timeout: transitionDuration,
        ...other,
        ...transitionPropsRemoved,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RootSlot, {
            "aria-hidden": true,
            ...rootProps,
            classes: classes,
            ref: ref,
            children: children
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Backdrop_Backdrop = (Backdrop);


/***/ }),

/***/ 37387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);
/* harmony import */ var _barrel_optimize_names_Transition_react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95389);
/* harmony import */ var _mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21973);
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30845);
/* harmony import */ var _transitions_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52508);
/* harmony import */ var _utils_useForkRef_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91872);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33736);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const styles = {
    entering: {
        opacity: 1
    },
    entered: {
        opacity: 1
    }
};
/**
 * The Fade transition is used by the [Modal](/material-ui/react-modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */ const Fade = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Fade(props, ref) {
    const theme = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
    const defaultTimeout = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen
    };
    const { addEndListener, appear = true, children, easing, in: inProp, onEnter, onEntered, onEntering, onExit, onExited, onExiting, style, timeout = defaultTimeout, // eslint-disable-next-line react/prop-types
    TransitionComponent = _barrel_optimize_names_Transition_react_transition_group__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay, ...other } = props;
    const enableStrictModeCompat = true;
    const nodeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const handleRef = (0,_utils_useForkRef_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(nodeRef, (0,_mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(children), ref);
    const normalizedTransitionCallback = (callback)=>(maybeIsAppearing)=>{
            if (callback) {
                const node = nodeRef.current;
                // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
                if (maybeIsAppearing === undefined) {
                    callback(node);
                } else {
                    callback(node, maybeIsAppearing);
                }
            }
        };
    const handleEntering = normalizedTransitionCallback(onEntering);
    const handleEnter = normalizedTransitionCallback((node, isAppearing)=>{
        (0,_transitions_utils_js__WEBPACK_IMPORTED_MODULE_6__/* .reflow */ .q)(node); // So the animation always start from the start.
        const transitionProps = (0,_transitions_utils_js__WEBPACK_IMPORTED_MODULE_6__/* .getTransitionProps */ .c)({
            style,
            timeout,
            easing
        }, {
            mode: 'enter'
        });
        node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
        node.style.transition = theme.transitions.create('opacity', transitionProps);
        if (onEnter) {
            onEnter(node, isAppearing);
        }
    });
    const handleEntered = normalizedTransitionCallback(onEntered);
    const handleExiting = normalizedTransitionCallback(onExiting);
    const handleExit = normalizedTransitionCallback((node)=>{
        const transitionProps = (0,_transitions_utils_js__WEBPACK_IMPORTED_MODULE_6__/* .getTransitionProps */ .c)({
            style,
            timeout,
            easing
        }, {
            mode: 'exit'
        });
        node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
        node.style.transition = theme.transitions.create('opacity', transitionProps);
        if (onExit) {
            onExit(node);
        }
    });
    const handleExited = normalizedTransitionCallback(onExited);
    const handleAddEndListener = (next)=>{
        if (addEndListener) {
            // Old call signature before `react-transition-group` implemented `nodeRef`
            addEndListener(nodeRef.current, next);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TransitionComponent, {
        appear: appear,
        in: inProp,
        nodeRef: enableStrictModeCompat ? nodeRef : undefined,
        onEnter: handleEnter,
        onEntered: handleEntered,
        onEntering: handleEntering,
        onExit: handleExit,
        onExited: handleExited,
        onExiting: handleExiting,
        addEndListener: handleAddEndListener,
        timeout: timeout,
        ...other,
        children: (state, childProps)=>{
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
                style: {
                    opacity: 0,
                    visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
                    ...styles[state],
                    ...style,
                    ...children.props.style
                },
                ref: handleRef,
                ...childProps
            });
        }
    });
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fade);


/***/ }),

/***/ 52508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ getTransitionProps),
/* harmony export */   q: () => (/* binding */ reflow)
/* harmony export */ });
const reflow = (node)=>node.scrollTop;
function getTransitionProps(props, options) {
    const { timeout, easing, style = {} } = props;
    var _style_transitionDuration, _style_transitionTimingFunction;
    return {
        duration: (_style_transitionDuration = style.transitionDuration) !== null && _style_transitionDuration !== void 0 ? _style_transitionDuration : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
        easing: (_style_transitionTimingFunction = style.transitionTimingFunction) !== null && _style_transitionTimingFunction !== void 0 ? _style_transitionTimingFunction : typeof easing === 'object' ? easing[options.mode] : easing,
        delay: style.transitionDelay
    };
}


/***/ }),

/***/ 55665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ List_List)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(401);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(17122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(63375);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/List/ListContext.js
var ListContext = __webpack_require__(33174);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(75719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(42159);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/List/listClasses.js


function getListUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiList', slot);
}
const listClasses = (0,generateUtilityClasses/* default */.A)('MuiList', [
    'root',
    'padding',
    'dense',
    'subheader'
]);
/* harmony default export */ const List_listClasses = ((/* unused pure expression or super */ null && (listClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/List/List.js
/* __next_internal_client_entry_do_not_use__ default auto */ 








const useUtilityClasses = (ownerState)=>{
    const { classes, disablePadding, dense, subheader } = ownerState;
    const slots = {
        root: [
            'root',
            !disablePadding && 'padding',
            dense && 'dense',
            subheader && 'subheader'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getListUtilityClass, classes);
};
const ListRoot = (0,styled/* default */.Ay)('ul', {
    name: 'MuiList',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            !ownerState.disablePadding && styles.padding,
            ownerState.dense && styles.dense,
            ownerState.subheader && styles.subheader
        ];
    }
})({
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    variants: [
        {
            props: (param)=>{
                let { ownerState } = param;
                return !ownerState.disablePadding;
            },
            style: {
                paddingTop: 8,
                paddingBottom: 8
            }
        },
        {
            props: (param)=>{
                let { ownerState } = param;
                return ownerState.subheader;
            },
            style: {
                paddingTop: 0
            }
        }
    ]
});
const List = /*#__PURE__*/ react.forwardRef(function List(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiList'
    });
    const { children, className, component = 'ul', dense = false, disablePadding = false, subheader, ...other } = props;
    const context = react.useMemo(()=>({
            dense
        }), [
        dense
    ]);
    const ownerState = {
        ...props,
        component,
        dense,
        disablePadding
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ListContext/* default */.A.Provider, {
        value: context,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListRoot, {
            as: component,
            className: (0,clsx/* default */.A)(classes.root, className),
            ref: ref,
            ownerState: ownerState,
            ...other,
            children: [
                subheader,
                children
            ]
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const List_List = (List);


/***/ }),

/***/ 99903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getScrollbarSize)
/* harmony export */ });
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
function getScrollbarSize(win = window) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = win.document.documentElement.clientWidth;
  return win.innerWidth - documentWidth;
}

/***/ })

}]);
//# sourceMappingURL=8628-14b973b930e389f3.js.map