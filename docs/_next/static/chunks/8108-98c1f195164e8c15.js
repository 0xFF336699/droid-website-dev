"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8108],{

/***/ 19637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3638);
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var _Typography_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2621);
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17122);
/* harmony import */ var _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63375);
/* harmony import */ var _dialogTitleClasses_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83571);
/* harmony import */ var _Dialog_DialogContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59878);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33736);
/* __next_internal_client_entry_do_not_use__ default auto */ 









const useUtilityClasses = (ownerState)=>{
    const { classes } = ownerState;
    const slots = {
        root: [
            'root'
        ]
    };
    return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(slots, _dialogTitleClasses_js__WEBPACK_IMPORTED_MODULE_3__/* .getDialogTitleUtilityClass */ .t, classes);
};
const DialogTitleRoot = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay)(_Typography_index_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    name: 'MuiDialogTitle',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})({
    padding: '16px 24px',
    flex: '0 0 auto'
});
const DialogTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function DialogTitle(inProps, ref) {
    const props = (0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_6__/* .useDefaultProps */ .b)({
        props: inProps,
        name: 'MuiDialogTitle'
    });
    const { className, id: idProp, ...other } = props;
    const ownerState = props;
    const classes = useUtilityClasses(ownerState);
    const { titleId = idProp } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_Dialog_DialogContext_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DialogTitleRoot, {
        component: "h2",
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(classes.root, className),
        ownerState: ownerState,
        ref: ref,
        variant: "h6",
        id: idProp !== null && idProp !== void 0 ? idProp : titleId,
        ...other
    });
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogTitle);


/***/ }),

/***/ 31826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DialogActions_DialogActions)
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(75719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(42159);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogActions/dialogActionsClasses.js


function getDialogActionsUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiDialogActions', slot);
}
const dialogActionsClasses = (0,generateUtilityClasses/* default */.A)('MuiDialogActions', [
    'root',
    'spacing'
]);
/* harmony default export */ const DialogActions_dialogActionsClasses = ((/* unused pure expression or super */ null && (dialogActionsClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogActions/DialogActions.js
/* __next_internal_client_entry_do_not_use__ default auto */ 







const useUtilityClasses = (ownerState)=>{
    const { classes, disableSpacing } = ownerState;
    const slots = {
        root: [
            'root',
            !disableSpacing && 'spacing'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getDialogActionsUtilityClass, classes);
};
const DialogActionsRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiDialogActions',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            !ownerState.disableSpacing && styles.spacing
        ];
    }
})({
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end',
    flex: '0 0 auto',
    variants: [
        {
            props: (param)=>{
                let { ownerState } = param;
                return !ownerState.disableSpacing;
            },
            style: {
                '& > :not(style) ~ :not(style)': {
                    marginLeft: 8
                }
            }
        }
    ]
});
const DialogActions = /*#__PURE__*/ react.forwardRef(function DialogActions(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiDialogActions'
    });
    const { className, disableSpacing = false, ...other } = props;
    const ownerState = {
        ...props,
        disableSpacing
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActionsRoot, {
        className: (0,clsx/* default */.A)(classes.root, className),
        ownerState: ownerState,
        ref: ref,
        ...other
    });
});
 false ? 0 : void 0;
/* harmony default export */ const DialogActions_DialogActions = (DialogActions);


/***/ }),

/***/ 32382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DialogContent_DialogContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(401);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(17122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(13492);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(63375);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(75719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(42159);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogContent/dialogContentClasses.js


function getDialogContentUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiDialogContent', slot);
}
const dialogContentClasses = (0,generateUtilityClasses/* default */.A)('MuiDialogContent', [
    'root',
    'dividers'
]);
/* harmony default export */ const DialogContent_dialogContentClasses = ((/* unused pure expression or super */ null && (dialogContentClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogTitle/dialogTitleClasses.js
var dialogTitleClasses = __webpack_require__(83571);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DialogContent/DialogContent.js
/* __next_internal_client_entry_do_not_use__ default auto */ 









const useUtilityClasses = (ownerState)=>{
    const { classes, dividers } = ownerState;
    const slots = {
        root: [
            'root',
            dividers && 'dividers'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getDialogContentUtilityClass, classes);
};
const DialogContentRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiDialogContent',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.dividers && styles.dividers
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        flex: '1 1 auto',
        // Add iOS momentum scrolling for iOS < 13.0
        WebkitOverflowScrolling: 'touch',
        overflowY: 'auto',
        padding: '20px 24px',
        variants: [
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.dividers;
                },
                style: {
                    padding: '16px 24px',
                    borderTop: "1px solid ".concat((theme.vars || theme).palette.divider),
                    borderBottom: "1px solid ".concat((theme.vars || theme).palette.divider)
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.dividers;
                },
                style: {
                    [".".concat(dialogTitleClasses/* default */.A.root, " + &")]: {
                        paddingTop: 0
                    }
                }
            }
        ]
    };
}));
const DialogContent = /*#__PURE__*/ react.forwardRef(function DialogContent(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiDialogContent'
    });
    const { className, dividers = false, ...other } = props;
    const ownerState = {
        ...props,
        dividers
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentRoot, {
        className: (0,clsx/* default */.A)(classes.root, className),
        ownerState: ownerState,
        ref: ref,
        ...other
    });
});
 false ? 0 : void 0;
/* harmony default export */ const DialogContent_DialogContent = (DialogContent);


/***/ }),

/***/ 59878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);

const DialogContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogContext);


/***/ }),

/***/ 83571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   t: () => (/* binding */ getDialogTitleUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75719);
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42159);


function getDialogTitleUtilityClass(slot) {
    return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)('MuiDialogTitle', slot);
}
const dialogTitleClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('MuiDialogTitle', [
    'root'
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dialogTitleClasses);


/***/ }),

/***/ 91460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Dialog_Dialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(401);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/useId/useId.js
var useId = __webpack_require__(16791);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(65174);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Modal/Modal.js + 5 modules
var Modal = __webpack_require__(5391);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(37387);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(8176);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(75719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.1_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(42159);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Dialog/dialogClasses.js


function getDialogUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiDialog', slot);
}
const dialogClasses = (0,generateUtilityClasses/* default */.A)('MuiDialog', [
    'root',
    'scrollPaper',
    'scrollBody',
    'container',
    'paper',
    'paperScrollPaper',
    'paperScrollBody',
    'paperWidthFalse',
    'paperWidthXs',
    'paperWidthSm',
    'paperWidthMd',
    'paperWidthLg',
    'paperWidthXl',
    'paperFullWidth',
    'paperFullScreen'
]);
/* harmony default export */ const Dialog_dialogClasses = (dialogClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Dialog/DialogContext.js
var DialogContext = __webpack_require__(59878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Backdrop/Backdrop.js + 1 modules
var Backdrop = __webpack_require__(36179);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(17122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(30845);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(13492);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(63375);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Dialog/Dialog.js
/* __next_internal_client_entry_do_not_use__ default auto */ 















const DialogBackdrop = (0,styled/* default */.Ay)(Backdrop/* default */.A, {
    name: 'MuiDialog',
    slot: 'Backdrop',
    overrides: (props, styles)=>styles.backdrop
})({
    // Improve scrollable dialog support.
    zIndex: -1
});
const useUtilityClasses = (ownerState)=>{
    const { classes, scroll, maxWidth, fullWidth, fullScreen } = ownerState;
    const slots = {
        root: [
            'root'
        ],
        container: [
            'container',
            "scroll".concat((0,capitalize/* default */.A)(scroll))
        ],
        paper: [
            'paper',
            "paperScroll".concat((0,capitalize/* default */.A)(scroll)),
            "paperWidth".concat((0,capitalize/* default */.A)(String(maxWidth))),
            fullWidth && 'paperFullWidth',
            fullScreen && 'paperFullScreen'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getDialogUtilityClass, classes);
};
const DialogRoot = (0,styled/* default */.Ay)(Modal/* default */.A, {
    name: 'MuiDialog',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})({
    '@media print': {
        // Use !important to override the Modal inline-style.
        position: 'absolute !important'
    }
});
const DialogContainer = (0,styled/* default */.Ay)('div', {
    name: 'MuiDialog',
    slot: 'Container',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.container,
            styles["scroll".concat((0,capitalize/* default */.A)(ownerState.scroll))]
        ];
    }
})({
    height: '100%',
    '@media print': {
        height: 'auto'
    },
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    variants: [
        {
            props: {
                scroll: 'paper'
            },
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
        },
        {
            props: {
                scroll: 'body'
            },
            style: {
                overflowY: 'auto',
                overflowX: 'hidden',
                textAlign: 'center',
                '&::after': {
                    content: '""',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    height: '100%',
                    width: '0'
                }
            }
        }
    ]
});
const DialogPaper = (0,styled/* default */.Ay)(Paper/* default */.A, {
    name: 'MuiDialog',
    slot: 'Paper',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.paper,
            styles["scrollPaper".concat((0,capitalize/* default */.A)(ownerState.scroll))],
            styles["paperWidth".concat((0,capitalize/* default */.A)(String(ownerState.maxWidth)))],
            ownerState.fullWidth && styles.paperFullWidth,
            ownerState.fullScreen && styles.paperFullScreen
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        margin: 32,
        position: 'relative',
        overflowY: 'auto',
        '@media print': {
            overflowY: 'visible',
            boxShadow: 'none'
        },
        variants: [
            {
                props: {
                    scroll: 'paper'
                },
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    maxHeight: 'calc(100% - 64px)'
                }
            },
            {
                props: {
                    scroll: 'body'
                },
                style: {
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    textAlign: 'initial'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return !ownerState.maxWidth;
                },
                style: {
                    maxWidth: 'calc(100% - 64px)'
                }
            },
            {
                props: {
                    maxWidth: 'xs'
                },
                style: {
                    maxWidth: theme.breakpoints.unit === 'px' ? Math.max(theme.breakpoints.values.xs, 444) : "max(".concat(theme.breakpoints.values.xs).concat(theme.breakpoints.unit, ", 444px)"),
                    ["&.".concat(Dialog_dialogClasses.paperScrollBody)]: {
                        [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
                            maxWidth: 'calc(100% - 64px)'
                        }
                    }
                }
            },
            ...Object.keys(theme.breakpoints.values).filter((maxWidth)=>maxWidth !== 'xs').map((maxWidth)=>({
                    props: {
                        maxWidth
                    },
                    style: {
                        maxWidth: "".concat(theme.breakpoints.values[maxWidth]).concat(theme.breakpoints.unit),
                        ["&.".concat(Dialog_dialogClasses.paperScrollBody)]: {
                            [theme.breakpoints.down(theme.breakpoints.values[maxWidth] + 32 * 2)]: {
                                maxWidth: 'calc(100% - 64px)'
                            }
                        }
                    }
                })),
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.fullWidth;
                },
                style: {
                    width: 'calc(100% - 64px)'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.fullScreen;
                },
                style: {
                    margin: 0,
                    width: '100%',
                    maxWidth: '100%',
                    height: '100%',
                    maxHeight: 'none',
                    borderRadius: 0,
                    ["&.".concat(Dialog_dialogClasses.paperScrollBody)]: {
                        margin: 0,
                        maxWidth: '100%'
                    }
                }
            }
        ]
    };
}));
/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */ const Dialog = /*#__PURE__*/ react.forwardRef(function Dialog(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiDialog'
    });
    const theme = (0,useTheme/* default */.A)();
    const defaultTransitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen
    };
    const { 'aria-describedby': ariaDescribedby, 'aria-labelledby': ariaLabelledbyProp, 'aria-modal': ariaModal = true, BackdropComponent, BackdropProps, children, className, disableEscapeKeyDown = false, fullScreen = false, fullWidth = false, maxWidth = 'sm', onBackdropClick, onClick, onClose, open, PaperComponent = Paper/* default */.A, PaperProps = {}, scroll = 'paper', TransitionComponent = Fade/* default */.A, transitionDuration = defaultTransitionDuration, TransitionProps, ...other } = props;
    const ownerState = {
        ...props,
        disableEscapeKeyDown,
        fullScreen,
        fullWidth,
        maxWidth,
        scroll
    };
    const classes = useUtilityClasses(ownerState);
    const backdropClick = react.useRef();
    const handleMouseDown = (event)=>{
        // We don't want to close the dialog when clicking the dialog content.
        // Make sure the event starts and ends on the same DOM element.
        backdropClick.current = event.target === event.currentTarget;
    };
    const handleBackdropClick = (event)=>{
        if (onClick) {
            onClick(event);
        }
        // Ignore the events not coming from the "backdrop".
        if (!backdropClick.current) {
            return;
        }
        backdropClick.current = null;
        if (onBackdropClick) {
            onBackdropClick(event);
        }
        if (onClose) {
            onClose(event, 'backdropClick');
        }
    };
    const ariaLabelledby = (0,useId/* default */.A)(ariaLabelledbyProp);
    const dialogContextValue = react.useMemo(()=>{
        return {
            titleId: ariaLabelledby
        };
    }, [
        ariaLabelledby
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogRoot, {
        className: (0,clsx/* default */.A)(classes.root, className),
        closeAfterTransition: true,
        components: {
            Backdrop: DialogBackdrop
        },
        componentsProps: {
            backdrop: {
                transitionDuration,
                as: BackdropComponent,
                ...BackdropProps
            }
        },
        disableEscapeKeyDown: disableEscapeKeyDown,
        onClose: onClose,
        open: open,
        ref: ref,
        onClick: handleBackdropClick,
        ownerState: ownerState,
        ...other,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TransitionComponent, {
            appear: true,
            in: open,
            timeout: transitionDuration,
            role: "presentation",
            ...TransitionProps,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContainer, {
                className: (0,clsx/* default */.A)(classes.container),
                onMouseDown: handleMouseDown,
                ownerState: ownerState,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogPaper, {
                    as: PaperComponent,
                    elevation: 24,
                    role: "dialog",
                    "aria-describedby": ariaDescribedby,
                    "aria-labelledby": ariaLabelledby,
                    "aria-modal": ariaModal,
                    ...PaperProps,
                    className: (0,clsx/* default */.A)(classes.paper, PaperProps.className),
                    ownerState: ownerState,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContext/* default */.A.Provider, {
                        value: dialogContextValue,
                        children: children
                    })
                })
            })
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Dialog_Dialog = (Dialog);


/***/ })

}]);
//# sourceMappingURL=8108-98c1f195164e8c15.js.map