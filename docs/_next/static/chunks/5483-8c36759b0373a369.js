"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5483],{

/***/ 3695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ formControlState)
/* harmony export */ });
function formControlState(param) {
    let { props, states, muiFormControl } = param;
    return states.reduce((acc, state)=>{
        acc[state] = props[state];
        if (muiFormControl) {
            if (typeof props[state] === 'undefined') {
                acc[state] = muiFormControl[state];
            }
        }
        return acc;
    }, {});
}


/***/ }),

/***/ 26636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Switch_Switch)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(34354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(14290);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(66627);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(57585);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/internal/SwitchBase.js + 3 modules
var SwitchBase = __webpack_require__(46258);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(41805);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(41521);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(25569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(41792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(99268);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Switch/switchClasses.js


function getSwitchUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiSwitch', slot);
}
const switchClasses = (0,generateUtilityClasses/* default */.A)('MuiSwitch', [
    'root',
    'edgeStart',
    'edgeEnd',
    'switchBase',
    'colorPrimary',
    'colorSecondary',
    'sizeSmall',
    'sizeMedium',
    'checked',
    'disabled',
    'input',
    'thumb',
    'track'
]);
/* harmony default export */ const Switch_switchClasses = (switchClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Switch/Switch.js
/* __next_internal_client_entry_do_not_use__ default auto */ // @inheritedComponent IconButton














const useUtilityClasses = (ownerState)=>{
    const { classes, edge, size, color, checked, disabled } = ownerState;
    const slots = {
        root: [
            'root',
            edge && "edge".concat((0,capitalize/* default */.A)(edge)),
            "size".concat((0,capitalize/* default */.A)(size))
        ],
        switchBase: [
            'switchBase',
            "color".concat((0,capitalize/* default */.A)(color)),
            checked && 'checked',
            disabled && 'disabled'
        ],
        thumb: [
            'thumb'
        ],
        track: [
            'track'
        ],
        input: [
            'input'
        ]
    };
    const composedClasses = (0,composeClasses/* default */.A)(slots, getSwitchUtilityClass, classes);
    return {
        ...classes,
        // forward the disabled and checked classes to the SwitchBase
        ...composedClasses
    };
};
const SwitchRoot = (0,styled/* default */.Ay)('span', {
    name: 'MuiSwitch',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.edge && styles["edge".concat((0,capitalize/* default */.A)(ownerState.edge))],
            styles["size".concat((0,capitalize/* default */.A)(ownerState.size))]
        ];
    }
})({
    display: 'inline-flex',
    width: 34 + 12 * 2,
    height: 14 + 12 * 2,
    overflow: 'hidden',
    padding: 12,
    boxSizing: 'border-box',
    position: 'relative',
    flexShrink: 0,
    zIndex: 0,
    // Reset the stacking context.
    verticalAlign: 'middle',
    // For correct alignment with the text.
    '@media print': {
        colorAdjust: 'exact'
    },
    variants: [
        {
            props: {
                edge: 'start'
            },
            style: {
                marginLeft: -8
            }
        },
        {
            props: {
                edge: 'end'
            },
            style: {
                marginRight: -8
            }
        },
        {
            props: {
                size: 'small'
            },
            style: {
                width: 40,
                height: 24,
                padding: 7,
                ["& .".concat(Switch_switchClasses.thumb)]: {
                    width: 16,
                    height: 16
                },
                ["& .".concat(Switch_switchClasses.switchBase)]: {
                    padding: 4,
                    ["&.".concat(Switch_switchClasses.checked)]: {
                        transform: 'translateX(16px)'
                    }
                }
            }
        }
    ]
});
const SwitchSwitchBase = (0,styled/* default */.Ay)(SwitchBase/* default */.A, {
    name: 'MuiSwitch',
    slot: 'SwitchBase',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.switchBase,
            {
                ["& .".concat(Switch_switchClasses.input)]: styles.input
            },
            ownerState.color !== 'default' && styles["color".concat((0,capitalize/* default */.A)(ownerState.color))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        // Render above the focus ripple.
        color: theme.vars ? theme.vars.palette.Switch.defaultColor : "".concat(theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[300]),
        transition: theme.transitions.create([
            'left',
            'transform'
        ], {
            duration: theme.transitions.duration.shortest
        }),
        ["&.".concat(Switch_switchClasses.checked)]: {
            transform: 'translateX(20px)'
        },
        ["&.".concat(Switch_switchClasses.disabled)]: {
            color: theme.vars ? theme.vars.palette.Switch.defaultDisabledColor : "".concat(theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600])
        },
        ["&.".concat(Switch_switchClasses.checked, " + .").concat(Switch_switchClasses.track)]: {
            opacity: 0.5
        },
        ["&.".concat(Switch_switchClasses.disabled, " + .").concat(Switch_switchClasses.track)]: {
            opacity: theme.vars ? theme.vars.opacity.switchTrackDisabled : "".concat(theme.palette.mode === 'light' ? 0.12 : 0.2)
        },
        ["& .".concat(Switch_switchClasses.input)]: {
            left: '-100%',
            width: '300%'
        }
    };
}), (0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        '&:hover': {
            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.activeChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.active, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                backgroundColor: 'transparent'
            }
        },
        variants: [
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)([
                'light'
            ])) // check all the used fields in the style below
            .map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        ["&.".concat(Switch_switchClasses.checked)]: {
                            color: (theme.vars || theme).palette[color].main,
                            '&:hover': {
                                backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, theme.palette.action.hoverOpacity),
                                '@media (hover: none)': {
                                    backgroundColor: 'transparent'
                                }
                            },
                            ["&.".concat(Switch_switchClasses.disabled)]: {
                                color: theme.vars ? theme.vars.palette.Switch["".concat(color, "DisabledColor")] : "".concat(theme.palette.mode === 'light' ? (0,colorManipulator/* lighten */.a)(theme.palette[color].main, 0.62) : (0,colorManipulator/* darken */.e$)(theme.palette[color].main, 0.55))
                            }
                        },
                        ["&.".concat(Switch_switchClasses.checked, " + .").concat(Switch_switchClasses.track)]: {
                            backgroundColor: (theme.vars || theme).palette[color].main
                        }
                    }
                };
            })
        ]
    };
}));
const SwitchTrack = (0,styled/* default */.Ay)('span', {
    name: 'MuiSwitch',
    slot: 'Track',
    overridesResolver: (props, styles)=>styles.track
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        height: '100%',
        width: '100%',
        borderRadius: 14 / 2,
        zIndex: -1,
        transition: theme.transitions.create([
            'opacity',
            'background-color'
        ], {
            duration: theme.transitions.duration.shortest
        }),
        backgroundColor: theme.vars ? theme.vars.palette.common.onBackground : "".concat(theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white),
        opacity: theme.vars ? theme.vars.opacity.switchTrack : "".concat(theme.palette.mode === 'light' ? 0.38 : 0.3)
    };
}));
const SwitchThumb = (0,styled/* default */.Ay)('span', {
    name: 'MuiSwitch',
    slot: 'Thumb',
    overridesResolver: (props, styles)=>styles.thumb
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        boxShadow: (theme.vars || theme).shadows[1],
        backgroundColor: 'currentColor',
        width: 20,
        height: 20,
        borderRadius: '50%'
    };
}));
const Switch = /*#__PURE__*/ react.forwardRef(function Switch(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiSwitch'
    });
    const { className, color = 'primary', edge = false, size = 'medium', sx, ...other } = props;
    const ownerState = {
        ...props,
        color,
        edge,
        size
    };
    const classes = useUtilityClasses(ownerState);
    const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(SwitchThumb, {
        className: classes.thumb,
        ownerState: ownerState
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(SwitchRoot, {
        className: (0,clsx/* default */.A)(classes.root, className),
        sx: sx,
        ownerState: ownerState,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SwitchSwitchBase, {
                type: "checkbox",
                icon: icon,
                checkedIcon: icon,
                ref: ref,
                ownerState: ownerState,
                ...other,
                classes: {
                    ...classes,
                    root: classes.switchBase
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SwitchTrack, {
                className: classes.track,
                ownerState: ownerState
            })
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Switch_Switch = (Switch);


/***/ }),

/***/ 31337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33736);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"
}), 'NotificationsNone'));


/***/ }),

/***/ 31509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Typography_Typography)
});

// UNUSED EXPORTS: TypographyRoot

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(34354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/zero-styled/index.js + 3 modules
var zero_styled = __webpack_require__(66941);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(41805);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(41521);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(25569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(66627);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(57585);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(41792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(99268);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Typography/typographyClasses.js


function getTypographyUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiTypography', slot);
}
const typographyClasses = (0,generateUtilityClasses/* default */.A)('MuiTypography', [
    'root',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'inherit',
    'button',
    'caption',
    'overline',
    'alignLeft',
    'alignRight',
    'alignCenter',
    'alignJustify',
    'noWrap',
    'gutterBottom',
    'paragraph'
]);
/* harmony default export */ const Typography_typographyClasses = ((/* unused pure expression or super */ null && (typographyClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Typography/Typography.js
/* __next_internal_client_entry_do_not_use__ TypographyRoot,default auto */ 










const v6Colors = {
    primary: true,
    secondary: true,
    error: true,
    info: true,
    success: true,
    warning: true,
    textPrimary: true,
    textSecondary: true,
    textDisabled: true
};
const extendSxProp = (0,zero_styled/* internal_createExtendSxProp */.Dg)();
const useUtilityClasses = (ownerState)=>{
    const { align, gutterBottom, noWrap, paragraph, variant, classes } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            ownerState.align !== 'inherit' && "align".concat((0,capitalize/* default */.A)(align)),
            gutterBottom && 'gutterBottom',
            noWrap && 'noWrap',
            paragraph && 'paragraph'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getTypographyUtilityClass, classes);
};
const TypographyRoot = (0,styled/* default */.Ay)('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.variant && styles[ownerState.variant],
            ownerState.align !== 'inherit' && styles["align".concat((0,capitalize/* default */.A)(ownerState.align))],
            ownerState.noWrap && styles.noWrap,
            ownerState.gutterBottom && styles.gutterBottom,
            ownerState.paragraph && styles.paragraph
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    var _theme_palette;
    return {
        margin: 0,
        variants: [
            {
                props: {
                    variant: 'inherit'
                },
                style: {
                    // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
                    font: 'inherit',
                    lineHeight: 'inherit',
                    letterSpacing: 'inherit'
                }
            },
            ...Object.entries(theme.typography).filter((param)=>{
                let [variant, value] = param;
                return variant !== 'inherit' && value && typeof value === 'object';
            }).map((param)=>{
                let [variant, value] = param;
                return {
                    props: {
                        variant
                    },
                    style: value
                };
            }),
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        color: (theme.vars || theme).palette[color].main
                    }
                };
            }),
            ...Object.entries(((_theme_palette = theme.palette) === null || _theme_palette === void 0 ? void 0 : _theme_palette.text) || {}).filter((param)=>{
                let [, value] = param;
                return typeof value === 'string';
            }).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color: "text".concat((0,capitalize/* default */.A)(color))
                    },
                    style: {
                        color: (theme.vars || theme).palette.text[color]
                    }
                };
            }),
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.align !== 'inherit';
                },
                style: {
                    textAlign: 'var(--Typography-textAlign)'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.noWrap;
                },
                style: {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.gutterBottom;
                },
                style: {
                    marginBottom: '0.35em'
                }
            },
            {
                props: (param)=>{
                    let { ownerState } = param;
                    return ownerState.paragraph;
                },
                style: {
                    marginBottom: 16
                }
            }
        ]
    };
}));
const defaultVariantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p'
};
const Typography = /*#__PURE__*/ react.forwardRef(function Typography(inProps, ref) {
    const { color, ...themeProps } = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiTypography'
    });
    const isSxColor = !v6Colors[color];
    // TODO: Remove `extendSxProp` in v7
    const props = extendSxProp({
        ...themeProps,
        ...isSxColor && {
            color
        }
    });
    const { align = 'inherit', className, component, gutterBottom = false, noWrap = false, paragraph = false, variant = 'body1', variantMapping = defaultVariantMapping, ...other } = props;
    const ownerState = {
        ...props,
        align,
        color,
        className,
        component,
        gutterBottom,
        noWrap,
        paragraph,
        variant,
        variantMapping
    };
    const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TypographyRoot, {
        as: Component,
        ref: ref,
        className: (0,clsx/* default */.A)(classes.root, className),
        ...other,
        ownerState: ownerState,
        style: {
            ...align !== 'inherit' && {
                '--Typography-textAlign': align
            },
            ...other.style
        }
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Typography_Typography = (Typography);


/***/ }),

/***/ 35945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ useFormControl)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/FormControl/FormControlContext.js

/**
 * @ignore - internal component.
 */ const FormControlContext = /*#__PURE__*/ react.createContext(undefined);
if (false) {}
/* harmony default export */ const FormControl_FormControlContext = (FormControlContext);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/FormControl/useFormControl.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

function useFormControl() {
    return react.useContext(FormControl_FormControlContext);
}


/***/ }),

/***/ 46258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ internal_SwitchBase)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(34354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(66627);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/rootShouldForwardProp.js + 1 modules
var rootShouldForwardProp = __webpack_require__(27673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(41805);
;// ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/useControlled/useControlled.js
'use client';

// TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- process.env never changes, dependency arrays are intentionally ignored
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = 'value'
}) {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const {
    current: isControlled
  } = react.useRef(controlled !== undefined);
  const [valueState, setValue] = react.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (false) {}
  const setValueIfUncontrolled = react.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/useControlled.js
/* __next_internal_client_entry_do_not_use__ default auto */ 
/* harmony default export */ const utils_useControlled = (useControlled);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/FormControl/useFormControl.js + 1 modules
var useFormControl = __webpack_require__(35945);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/ButtonBase/ButtonBase.js + 10 modules
var ButtonBase = __webpack_require__(29180);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(41792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(99268);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/internal/switchBaseClasses.js


function getSwitchBaseUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('PrivateSwitchBase', slot);
}
const switchBaseClasses = (0,generateUtilityClasses/* default */.A)('PrivateSwitchBase', [
    'root',
    'checked',
    'disabled',
    'input',
    'edgeStart',
    'edgeEnd'
]);
/* harmony default export */ const internal_switchBaseClasses = ((/* unused pure expression or super */ null && (switchBaseClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/internal/SwitchBase.js
/* __next_internal_client_entry_do_not_use__ default auto */ 












const useUtilityClasses = (ownerState)=>{
    const { classes, checked, disabled, edge } = ownerState;
    const slots = {
        root: [
            'root',
            checked && 'checked',
            disabled && 'disabled',
            edge && "edge".concat((0,capitalize/* default */.A)(edge))
        ],
        input: [
            'input'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A)({
    padding: 9,
    borderRadius: '50%',
    variants: [
        {
            props: {
                edge: 'start',
                size: 'small'
            },
            style: {
                marginLeft: -3
            }
        },
        {
            props: (param)=>{
                let { edge, ownerState } = param;
                return edge === 'start' && ownerState.size !== 'small';
            },
            style: {
                marginLeft: -12
            }
        },
        {
            props: {
                edge: 'end',
                size: 'small'
            },
            style: {
                marginRight: -3
            }
        },
        {
            props: (param)=>{
                let { edge, ownerState } = param;
                return edge === 'end' && ownerState.size !== 'small';
            },
            style: {
                marginRight: -12
            }
        }
    ]
});
const SwitchBaseInput = (0,styled/* default */.Ay)('input', {
    shouldForwardProp: rootShouldForwardProp/* default */.A
})({
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
});
/**
 * @ignore - internal component.
 */ const SwitchBase = /*#__PURE__*/ react.forwardRef(function SwitchBase(props, ref) {
    const { autoFocus, checked: checkedProp, checkedIcon, className, defaultChecked, disabled: disabledProp, disableFocusRipple = false, edge = false, icon, id, inputProps, inputRef, name, onBlur, onChange, onFocus, readOnly, required = false, tabIndex, type, value, ...other } = props;
    const [checked, setCheckedState] = utils_useControlled({
        controlled: checkedProp,
        default: Boolean(defaultChecked),
        name: 'SwitchBase',
        state: 'checked'
    });
    const muiFormControl = (0,useFormControl/* default */.A)();
    const handleFocus = (event)=>{
        if (onFocus) {
            onFocus(event);
        }
        if (muiFormControl && muiFormControl.onFocus) {
            muiFormControl.onFocus(event);
        }
    };
    const handleBlur = (event)=>{
        if (onBlur) {
            onBlur(event);
        }
        if (muiFormControl && muiFormControl.onBlur) {
            muiFormControl.onBlur(event);
        }
    };
    const handleInputChange = (event)=>{
        // Workaround for https://github.com/facebook/react/issues/9023
        if (event.nativeEvent.defaultPrevented) {
            return;
        }
        const newChecked = event.target.checked;
        setCheckedState(newChecked);
        if (onChange) {
            // TODO v6: remove the second argument.
            onChange(event, newChecked);
        }
    };
    let disabled = disabledProp;
    if (muiFormControl) {
        if (typeof disabled === 'undefined') {
            disabled = muiFormControl.disabled;
        }
    }
    const hasLabelFor = type === 'checkbox' || type === 'radio';
    const ownerState = {
        ...props,
        checked,
        disabled,
        disableFocusRipple,
        edge
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(SwitchBaseRoot, {
        component: "span",
        className: (0,clsx/* default */.A)(classes.root, className),
        centerRipple: true,
        focusRipple: !disableFocusRipple,
        disabled: disabled,
        tabIndex: null,
        role: undefined,
        onFocus: handleFocus,
        onBlur: handleBlur,
        ownerState: ownerState,
        ref: ref,
        ...other,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SwitchBaseInput, {
                autoFocus: autoFocus,
                checked: checkedProp,
                defaultChecked: defaultChecked,
                className: classes.input,
                disabled: disabled,
                id: hasLabelFor ? id : undefined,
                name: name,
                onChange: handleInputChange,
                readOnly: readOnly,
                ref: inputRef,
                required: required,
                ownerState: ownerState,
                tabIndex: tabIndex,
                type: type,
                ...type === 'checkbox' && value === undefined ? {} : {
                    value
                },
                ...inputProps
            }),
            checked ? checkedIcon : icon
        ]
    });
});
// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.
 false ? 0 : void 0;
/* harmony default export */ const internal_SwitchBase = (SwitchBase);


/***/ }),

/***/ 46738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ FormControlLabel_FormControlLabel)
});

// UNUSED EXPORTS: FormControlLabelRoot

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(34354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/FormControl/useFormControl.js + 1 modules
var useFormControl = __webpack_require__(35945);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(41805);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(41521);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(25569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(31509);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(66627);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(41792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(99268);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js


function getFormControlLabelUtilityClasses(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiFormControlLabel', slot);
}
const formControlLabelClasses = (0,generateUtilityClasses/* default */.A)('MuiFormControlLabel', [
    'root',
    'labelPlacementStart',
    'labelPlacementTop',
    'labelPlacementBottom',
    'disabled',
    'label',
    'error',
    'required',
    'asterisk'
]);
/* harmony default export */ const FormControlLabel_formControlLabelClasses = (formControlLabelClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/FormControl/formControlState.js
var formControlState = __webpack_require__(3695);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/useSlot.js + 5 modules
var useSlot = __webpack_require__(72928);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
/* __next_internal_client_entry_do_not_use__ FormControlLabelRoot,default auto */ 














const useUtilityClasses = (ownerState)=>{
    const { classes, disabled, labelPlacement, error, required } = ownerState;
    const slots = {
        root: [
            'root',
            disabled && 'disabled',
            "labelPlacement".concat((0,capitalize/* default */.A)(labelPlacement)),
            error && 'error',
            required && 'required'
        ],
        label: [
            'label',
            disabled && 'disabled'
        ],
        asterisk: [
            'asterisk',
            error && 'error'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getFormControlLabelUtilityClasses, classes);
};
const FormControlLabelRoot = (0,styled/* default */.Ay)('label', {
    name: 'MuiFormControlLabel',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            {
                ["& .".concat(FormControlLabel_formControlLabelClasses.label)]: styles.label
            },
            styles.root,
            styles["labelPlacement".concat((0,capitalize/* default */.A)(ownerState.labelPlacement))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        // For correct alignment with the text.
        verticalAlign: 'middle',
        WebkitTapHighlightColor: 'transparent',
        marginLeft: -11,
        marginRight: 16,
        // used for row presentation of radio/checkbox
        ["&.".concat(FormControlLabel_formControlLabelClasses.disabled)]: {
            cursor: 'default'
        },
        ["& .".concat(FormControlLabel_formControlLabelClasses.label)]: {
            ["&.".concat(FormControlLabel_formControlLabelClasses.disabled)]: {
                color: (theme.vars || theme).palette.text.disabled
            }
        },
        variants: [
            {
                props: {
                    labelPlacement: 'start'
                },
                style: {
                    flexDirection: 'row-reverse',
                    marginRight: -11
                }
            },
            {
                props: {
                    labelPlacement: 'top'
                },
                style: {
                    flexDirection: 'column-reverse'
                }
            },
            {
                props: {
                    labelPlacement: 'bottom'
                },
                style: {
                    flexDirection: 'column'
                }
            },
            {
                props: (param)=>{
                    let { labelPlacement } = param;
                    return labelPlacement === 'start' || labelPlacement === 'top' || labelPlacement === 'bottom';
                },
                style: {
                    marginLeft: 16 // used for row presentation of radio/checkbox
                }
            }
        ]
    };
}));
const AsteriskComponent = (0,styled/* default */.Ay)('span', {
    name: 'MuiFormControlLabel',
    slot: 'Asterisk',
    overridesResolver: (props, styles)=>styles.asterisk
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        ["&.".concat(FormControlLabel_formControlLabelClasses.error)]: {
            color: (theme.vars || theme).palette.error.main
        }
    };
}));
/**
 * Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */ const FormControlLabel = /*#__PURE__*/ react.forwardRef(function FormControlLabel(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiFormControlLabel'
    });
    const { checked, className, componentsProps = {}, control, disabled: disabledProp, disableTypography, inputRef, label: labelProp, labelPlacement = 'end', name, onChange, required: requiredProp, slots = {}, slotProps = {}, value, ...other } = props;
    const muiFormControl = (0,useFormControl/* default */.A)();
    var _ref;
    const disabled = (_ref = disabledProp !== null && disabledProp !== void 0 ? disabledProp : control.props.disabled) !== null && _ref !== void 0 ? _ref : muiFormControl === null || muiFormControl === void 0 ? void 0 : muiFormControl.disabled;
    const required = requiredProp !== null && requiredProp !== void 0 ? requiredProp : control.props.required;
    const controlProps = {
        disabled,
        required
    };
    [
        'checked',
        'name',
        'onChange',
        'value',
        'inputRef'
    ].forEach((key)=>{
        if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
            controlProps[key] = props[key];
        }
    });
    const fcs = (0,formControlState/* default */.A)({
        props,
        muiFormControl,
        states: [
            'error'
        ]
    });
    const ownerState = {
        ...props,
        disabled,
        labelPlacement,
        required,
        error: fcs.error
    };
    const classes = useUtilityClasses(ownerState);
    const externalForwardedProps = {
        slots,
        slotProps: {
            ...componentsProps,
            ...slotProps
        }
    };
    const [TypographySlot, typographySlotProps] = (0,useSlot/* default */.A)('typography', {
        elementType: Typography/* default */.A,
        externalForwardedProps,
        ownerState
    });
    let label = labelProp;
    if (label != null && label.type !== Typography/* default */.A && !disableTypography) {
        label = /*#__PURE__*/ (0,jsx_runtime.jsx)(TypographySlot, {
            component: "span",
            ...typographySlotProps,
            className: (0,clsx/* default */.A)(classes.label, typographySlotProps === null || typographySlotProps === void 0 ? void 0 : typographySlotProps.className),
            children: label
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControlLabelRoot, {
        className: (0,clsx/* default */.A)(classes.root, className),
        ownerState: ownerState,
        ref: ref,
        ...other,
        children: [
            /*#__PURE__*/ react.cloneElement(control, controlProps),
            required ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    label,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(AsteriskComponent, {
                        ownerState: ownerState,
                        "aria-hidden": true,
                        className: classes.asterisk,
                        children: [
                            "\u2009",
                            '*'
                        ]
                    })
                ]
            }) : label
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const FormControlLabel_FormControlLabel = (FormControlLabel);


/***/ }),

/***/ 46879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33736);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close'));


/***/ }),

/***/ 51532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33736);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"
}), 'DeleteOutline'));


/***/ }),

/***/ 51534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ IconButton_IconButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(34354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(14290);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(41805);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(41521);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(57585);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(25569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/ButtonBase/ButtonBase.js + 10 modules
var ButtonBase = __webpack_require__(29180);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(66627);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(41792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(99268);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/IconButton/iconButtonClasses.js


function getIconButtonUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiIconButton', slot);
}
const iconButtonClasses = (0,generateUtilityClasses/* default */.A)('MuiIconButton', [
    'root',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorError',
    'colorInfo',
    'colorSuccess',
    'colorWarning',
    'edgeStart',
    'edgeEnd',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge'
]);
/* harmony default export */ const IconButton_iconButtonClasses = (iconButtonClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/IconButton/IconButton.js
/* __next_internal_client_entry_do_not_use__ default auto */ 













const useUtilityClasses = (ownerState)=>{
    const { classes, disabled, color, edge, size } = ownerState;
    const slots = {
        root: [
            'root',
            disabled && 'disabled',
            color !== 'default' && "color".concat((0,capitalize/* default */.A)(color)),
            edge && "edge".concat((0,capitalize/* default */.A)(edge)),
            "size".concat((0,capitalize/* default */.A)(size))
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.color !== 'default' && styles["color".concat((0,capitalize/* default */.A)(ownerState.color))],
            ownerState.edge && styles["edge".concat((0,capitalize/* default */.A)(ownerState.edge))],
            styles["size".concat((0,capitalize/* default */.A)(ownerState.size))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        textAlign: 'center',
        flex: '0 0 auto',
        fontSize: theme.typography.pxToRem(24),
        padding: 8,
        borderRadius: '50%',
        color: (theme.vars || theme).palette.action.active,
        transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.shortest
        }),
        variants: [
            {
                props: (props)=>!props.disableRipple,
                style: {
                    '--IconButton-hoverBg': theme.vars ? "rgba(".concat(theme.vars.palette.action.activeChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.active, theme.palette.action.hoverOpacity),
                    '&:hover': {
                        backgroundColor: 'var(--IconButton-hoverBg)',
                        // Reset on touch devices, it doesn't add specificity
                        '@media (hover: none)': {
                            backgroundColor: 'transparent'
                        }
                    }
                }
            },
            {
                props: {
                    edge: 'start'
                },
                style: {
                    marginLeft: -12
                }
            },
            {
                props: {
                    edge: 'start',
                    size: 'small'
                },
                style: {
                    marginLeft: -3
                }
            },
            {
                props: {
                    edge: 'end'
                },
                style: {
                    marginRight: -12
                }
            },
            {
                props: {
                    edge: 'end',
                    size: 'small'
                },
                style: {
                    marginRight: -3
                }
            }
        ]
    };
}), (0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        variants: [
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    color: 'inherit'
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()) // check all the used fields in the style below
            .map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        color: (theme.vars || theme).palette[color].main
                    }
                };
            }),
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()) // check all the used fields in the style below
            .map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        '--IconButton-hoverBg': theme.vars ? "rgba(".concat((theme.vars || theme).palette[color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)((theme.vars || theme).palette[color].main, theme.palette.action.hoverOpacity)
                    }
                };
            }),
            {
                props: {
                    size: 'small'
                },
                style: {
                    padding: 5,
                    fontSize: theme.typography.pxToRem(18)
                }
            },
            {
                props: {
                    size: 'large'
                },
                style: {
                    padding: 12,
                    fontSize: theme.typography.pxToRem(28)
                }
            }
        ],
        ["&.".concat(IconButton_iconButtonClasses.disabled)]: {
            backgroundColor: 'transparent',
            color: (theme.vars || theme).palette.action.disabled
        }
    };
}));
/**
 * Refer to the [Icons](/material-ui/icons/) section of the documentation
 * regarding the available icon options.
 */ const IconButton = /*#__PURE__*/ react.forwardRef(function IconButton(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiIconButton'
    });
    const { edge = false, children, className, color = 'default', disabled = false, disableFocusRipple = false, size = 'medium', ...other } = props;
    const ownerState = {
        ...props,
        edge,
        color,
        disabled,
        disableFocusRipple,
        size
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButtonRoot, {
        className: (0,clsx/* default */.A)(classes.root, className),
        centerRipple: true,
        focusRipple: !disableFocusRipple,
        disabled: disabled,
        ref: ref,
        ...other,
        ownerState: ownerState,
        children: children
    });
});
 false ? 0 : void 0;
/* harmony default export */ const IconButton_IconButton = (IconButton);


/***/ }),

/***/ 54977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33736);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)([
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m21.67 18.17-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12c.39-.38.39-1.02 0-1.41"
    }, "0"),
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m17.34 10.19 1.41-1.41 2.12 2.12c1.17-1.17 1.17-3.07 0-4.24l-3.54-3.54-1.41 1.41V1.71l-.7-.71-3.54 3.54.71.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V5.06L4.83 2.04 2 4.87 5.03 7.9h1.41l4.13 4.13-.85.85H7.6l-5.3 5.3c-.39.39-.39 1.02 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15z"
    }, "1")
], 'Handyman'));


/***/ }),

/***/ 55260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33736);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), 'Add'));


/***/ }),

/***/ 59974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33736);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M21 8H3V4h18zm0 2H3v4h18zm0 6H3v4h18z"
}), 'TableRows'));


/***/ }),

/***/ 67154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3638);
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34354);
/* harmony import */ var _Typography_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31509);
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41805);
/* harmony import */ var _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25569);
/* harmony import */ var _dialogTitleClasses_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71462);
/* harmony import */ var _Dialog_DialogContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71871);
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

/***/ 69587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DialogContent_DialogContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(34354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(41805);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(41521);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(25569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(41792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(99268);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DialogContent/dialogContentClasses.js


function getDialogContentUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiDialogContent', slot);
}
const dialogContentClasses = (0,generateUtilityClasses/* default */.A)('MuiDialogContent', [
    'root',
    'dividers'
]);
/* harmony default export */ const DialogContent_dialogContentClasses = ((/* unused pure expression or super */ null && (dialogContentClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DialogTitle/dialogTitleClasses.js
var dialogTitleClasses = __webpack_require__(71462);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DialogContent/DialogContent.js
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

/***/ 69995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DialogActions_DialogActions)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(34354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(41805);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(25569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(41792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(99268);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DialogActions/dialogActionsClasses.js


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
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DialogActions/DialogActions.js
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

/***/ 71462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   t: () => (/* binding */ getDialogTitleUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41792);
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99268);


function getDialogTitleUtilityClass(slot) {
    return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)('MuiDialogTitle', slot);
}
const dialogTitleClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)('MuiDialogTitle', [
    'root'
]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dialogTitleClasses);


/***/ }),

/***/ 71871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);

const DialogContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogContext);


/***/ }),

/***/ 72928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ useSlot)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var useForkRef = __webpack_require__(26858);
;// ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}
/* harmony default export */ const isHostComponent_isHostComponent = (isHostComponent);
;// ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js


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
;// ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js
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
/* harmony default export */ const resolveComponentProps_resolveComponentProps = (resolveComponentProps);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
var extractEventHandlers = __webpack_require__(97598);
;// ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js
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
;// ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js



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
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/useSlot.js
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
    const { className, elementType: initialElementType, ownerState, externalForwardedProps, internalForwardedProps, ...useSlotPropsParams } = parameters;
    const { component: rootComponent, slots = {
        [name]: undefined
    }, slotProps = {
        [name]: undefined
    }, ...other } = externalForwardedProps;
    const elementType = slots[name] || initialElementType;
    // `slotProps[name]` can be a callback that receives the component's ownerState.
    // `resolvedComponentsProps` is always a plain object.
    const resolvedComponentsProps = resolveComponentProps_resolveComponentProps(slotProps[name], ownerState);
    const { props: { component: slotComponent, ...mergedProps }, internalRef } = mergeSlotProps_mergeSlotProps({
        className,
        ...useSlotPropsParams,
        externalForwardedProps: name === 'root' ? other : undefined,
        externalSlotProps: resolvedComponentsProps
    });
    const ref = (0,useForkRef/* default */.A)(internalRef, resolvedComponentsProps === null || resolvedComponentsProps === void 0 ? void 0 : resolvedComponentsProps.ref, parameters.ref);
    const LeafComponent = name === 'root' ? slotComponent || rootComponent : slotComponent;
    const props = appendOwnerState_appendOwnerState(elementType, {
        ...name === 'root' && !rootComponent && !slots[name] && internalForwardedProps,
        ...name !== 'root' && !slots[name] && internalForwardedProps,
        ...mergedProps,
        ...LeafComponent && {
            as: LeafComponent
        },
        ref
    }, ownerState);
    return [
        elementType,
        props
    ];
}


/***/ }),

/***/ 72977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ FormGroup_FormGroup)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(34354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(41805);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(25569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(41792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(99268);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/FormGroup/formGroupClasses.js


function getFormGroupUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiFormGroup', slot);
}
const formGroupClasses = (0,generateUtilityClasses/* default */.A)('MuiFormGroup', [
    'root',
    'row',
    'error'
]);
/* harmony default export */ const FormGroup_formGroupClasses = ((/* unused pure expression or super */ null && (formGroupClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/FormControl/useFormControl.js + 1 modules
var useFormControl = __webpack_require__(35945);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/FormControl/formControlState.js
var formControlState = __webpack_require__(3695);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/FormGroup/FormGroup.js
/* __next_internal_client_entry_do_not_use__ default auto */ 









const useUtilityClasses = (ownerState)=>{
    const { classes, row, error } = ownerState;
    const slots = {
        root: [
            'root',
            row && 'row',
            error && 'error'
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getFormGroupUtilityClass, classes);
};
const FormGroupRoot = (0,styled/* default */.Ay)('div', {
    name: 'MuiFormGroup',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.row && styles.row
        ];
    }
})({
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    variants: [
        {
            props: {
                row: true
            },
            style: {
                flexDirection: 'row'
            }
        }
    ]
});
/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 */ const FormGroup = /*#__PURE__*/ react.forwardRef(function FormGroup(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiFormGroup'
    });
    const { className, row = false, ...other } = props;
    const muiFormControl = (0,useFormControl/* default */.A)();
    const fcs = (0,formControlState/* default */.A)({
        props,
        muiFormControl,
        states: [
            'error'
        ]
    });
    const ownerState = {
        ...props,
        row,
        error: fcs.error
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FormGroupRoot, {
        className: (0,clsx/* default */.A)(classes.root, className),
        ownerState: ownerState,
        ref: ref,
        ...other
    });
});
 false ? 0 : void 0;
/* harmony default export */ const FormGroup_FormGroup = (FormGroup);


/***/ }),

/***/ 82787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Checkbox_Checkbox)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(34354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(14290);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/internal/SwitchBase.js + 3 modules
var SwitchBase = __webpack_require__(46258);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(78887);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/internal/svg-icons/CheckBoxOutlineBlank.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const CheckBoxOutlineBlank = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), 'CheckBoxOutlineBlank'));

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/internal/svg-icons/CheckBox.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const CheckBox = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckBox'));

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/internal/svg-icons/IndeterminateCheckBox.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * @ignore - internal component.
 */ 
/* harmony default export */ const IndeterminateCheckBox = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), 'IndeterminateCheckBox'));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(66627);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/rootShouldForwardProp.js + 1 modules
var rootShouldForwardProp = __webpack_require__(27673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(41792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(99268);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Checkbox/checkboxClasses.js


function getCheckboxUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiCheckbox', slot);
}
const checkboxClasses = (0,generateUtilityClasses/* default */.A)('MuiCheckbox', [
    'root',
    'checked',
    'disabled',
    'indeterminate',
    'colorPrimary',
    'colorSecondary',
    'sizeSmall',
    'sizeMedium'
]);
/* harmony default export */ const Checkbox_checkboxClasses = (checkboxClasses);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(41805);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(41521);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(57585);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(25569);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Checkbox/Checkbox.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

















const useUtilityClasses = (ownerState)=>{
    const { classes, indeterminate, color, size } = ownerState;
    const slots = {
        root: [
            'root',
            indeterminate && 'indeterminate',
            "color".concat((0,capitalize/* default */.A)(color)),
            "size".concat((0,capitalize/* default */.A)(size))
        ]
    };
    const composedClasses = (0,composeClasses/* default */.A)(slots, getCheckboxUtilityClass, classes);
    return {
        ...classes,
        // forward the disabled and checked classes to the SwitchBase
        ...composedClasses
    };
};
const CheckboxRoot = (0,styled/* default */.Ay)(SwitchBase/* default */.A, {
    shouldForwardProp: (prop)=>(0,rootShouldForwardProp/* default */.A)(prop) || prop === 'classes',
    name: 'MuiCheckbox',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.indeterminate && styles.indeterminate,
            styles["size".concat((0,capitalize/* default */.A)(ownerState.size))],
            ownerState.color !== 'default' && styles["color".concat((0,capitalize/* default */.A)(ownerState.color))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    return {
        color: (theme.vars || theme).palette.text.secondary,
        variants: [
            {
                props: {
                    color: 'default',
                    disableRipple: false
                },
                style: {
                    '&:hover': {
                        backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.activeChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.active, theme.palette.action.hoverOpacity)
                    }
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color,
                        disableRipple: false
                    },
                    style: {
                        '&:hover': {
                            backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, theme.palette.action.hoverOpacity)
                        }
                    }
                };
            }),
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        ["&.".concat(Checkbox_checkboxClasses.checked, ", &.").concat(Checkbox_checkboxClasses.indeterminate)]: {
                            color: (theme.vars || theme).palette[color].main
                        },
                        ["&.".concat(Checkbox_checkboxClasses.disabled)]: {
                            color: (theme.vars || theme).palette.action.disabled
                        }
                    }
                };
            }),
            {
                // Should be last to override other colors
                props: {
                    disableRipple: false
                },
                style: {
                    // Reset on touch devices, it doesn't add specificity
                    '&:hover': {
                        '@media (hover: none)': {
                            backgroundColor: 'transparent'
                        }
                    }
                }
            }
        ]
    };
}));
const defaultCheckedIcon = /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckBox, {});
const defaultIcon = /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckBoxOutlineBlank, {});
const defaultIndeterminateIcon = /*#__PURE__*/ (0,jsx_runtime.jsx)(IndeterminateCheckBox, {});
const Checkbox = /*#__PURE__*/ react.forwardRef(function Checkbox(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiCheckbox'
    });
    const { checkedIcon = defaultCheckedIcon, color = 'primary', icon: iconProp = defaultIcon, indeterminate = false, indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon, inputProps, size = 'medium', disableRipple = false, className, ...other } = props;
    const icon = indeterminate ? indeterminateIconProp : iconProp;
    const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
    const ownerState = {
        ...props,
        disableRipple,
        color,
        indeterminate,
        size
    };
    const classes = useUtilityClasses(ownerState);
    var _icon_props_fontSize, _indeterminateIcon_props_fontSize;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckboxRoot, {
        type: "checkbox",
        inputProps: {
            'data-indeterminate': indeterminate,
            ...inputProps
        },
        icon: /*#__PURE__*/ react.cloneElement(icon, {
            fontSize: (_icon_props_fontSize = icon.props.fontSize) !== null && _icon_props_fontSize !== void 0 ? _icon_props_fontSize : size
        }),
        checkedIcon: /*#__PURE__*/ react.cloneElement(indeterminateIcon, {
            fontSize: (_indeterminateIcon_props_fontSize = indeterminateIcon.props.fontSize) !== null && _indeterminateIcon_props_fontSize !== void 0 ? _indeterminateIcon_props_fontSize : size
        }),
        ownerState: ownerState,
        ref: ref,
        className: (0,clsx/* default */.A)(classes.root, className),
        disableRipple: disableRipple,
        ...other,
        classes: classes
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Checkbox_Checkbox = (Checkbox);


/***/ }),

/***/ 85412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33736);
/* __next_internal_client_entry_do_not_use__ default auto */ 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"
}), 'Save'));


/***/ }),

/***/ 97598:
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

/***/ 97773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Dialog_Dialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(34354);
;// ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/useId/useId.js
'use client';


let globalId = 0;

// TODO React 17: Remove `useGlobalId` once React 17 support is removed
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = react.useState(idOverride);
  const id = idOverride || defaultId;
  react.useEffect(() => {
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
  ...react_namespaceObject
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(66627);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var useForkRef = __webpack_require__(26858);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js
var getReactElementRef = __webpack_require__(47846);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
var ownerDocument = __webpack_require__(68600);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Unstable_TrapFocus/FocusTrap.js
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@19.0.0_react@19.0.0/node_modules/react-dom/index.js
var react_dom = __webpack_require__(75814);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(34820);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/setRef/setRef.js
var setRef = __webpack_require__(65128);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Portal/Portal.js
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
 */ const Portal = /*#__PURE__*/ react.forwardRef(function Portal(props, forwardedRef) {
    const { children, container, disablePortal = false } = props;
    const [mountNode, setMountNode] = react.useState(null);
    const handleRef = (0,useForkRef/* default */.A)(/*#__PURE__*/ react.isValidElement(children) ? (0,getReactElementRef/* default */.A)(children) : null, forwardedRef);
    (0,useEnhancedEffect/* default */.A)(()=>{
        if (!disablePortal) {
            setMountNode(getContainer(container) || document.body);
        }
    }, [
        container,
        disablePortal
    ]);
    (0,useEnhancedEffect/* default */.A)(()=>{
        if (mountNode && !disablePortal) {
            (0,setRef/* default */.A)(forwardedRef, mountNode);
            return ()=>{
                (0,setRef/* default */.A)(forwardedRef, null);
            };
        }
        return undefined;
    }, [
        forwardedRef,
        mountNode,
        disablePortal
    ]);
    if (disablePortal) {
        if (/*#__PURE__*/ react.isValidElement(children)) {
            const newProps = {
                ref: handleRef
            };
            return /*#__PURE__*/ react.cloneElement(children, newProps);
        }
        return children;
    }
    return mountNode ? /*#__PURE__*/ react_dom.createPortal(children, mountNode) : mountNode;
});
 false ? 0 : void 0;
if (false) {}
/* harmony default export */ const Portal_Portal = (Portal);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(41805);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(41521);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(25569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/useSlot.js + 5 modules
var useSlot = __webpack_require__(72928);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(1940);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(41792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(99268);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Backdrop/backdropClasses.js


function getBackdropUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiBackdrop', slot);
}
const backdropClasses = (0,generateUtilityClasses/* default */.A)('MuiBackdrop', [
    'root',
    'invisible'
]);
/* harmony default export */ const Backdrop_backdropClasses = ((/* unused pure expression or super */ null && (backdropClasses)));

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Backdrop/Backdrop.js
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
var useEventCallback = __webpack_require__(51842);
;// ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
var extractEventHandlers = __webpack_require__(97598);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js
var ownerWindow = __webpack_require__(61584);
;// ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/getScrollbarSize/getScrollbarSize.js
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
function getScrollbarSize(win = window) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = win.document.documentElement.clientWidth;
  return win.innerWidth - documentWidth;
}
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Modal/ModalManager.js

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
            const scrollbarSize = getScrollbarSize((0,ownerWindow/* default */.A)(container));
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

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Modal/useModal.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



function useModal_getContainer(container) {
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
        const resolvedContainer = useModal_getContainer(container) || getDoc().body;
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

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Modal/modalClasses.js


function getModalUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiModal', slot);
}
const modalClasses = (0,generateUtilityClasses/* default */.A)('MuiModal', [
    'root',
    'hidden',
    'backdrop'
]);
/* harmony default export */ const Modal_modalClasses = ((/* unused pure expression or super */ null && (modalClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/useForkRef.js
var utils_useForkRef = __webpack_require__(92849);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Modal/Modal.js
/* __next_internal_client_entry_do_not_use__ default auto */ 
















const Modal_useUtilityClasses = (ownerState)=>{
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
const ModalBackdrop = (0,styled/* default */.Ay)(Backdrop_Backdrop, {
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
    const classes = Modal_useUtilityClasses(ownerState);
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Portal_Portal, {
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(31453);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Dialog/dialogClasses.js


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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Dialog/DialogContext.js
var DialogContext = __webpack_require__(71871);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(84318);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Dialog/Dialog.js
/* __next_internal_client_entry_do_not_use__ default auto */ 















const DialogBackdrop = (0,styled/* default */.Ay)(Backdrop_Backdrop, {
    name: 'MuiDialog',
    slot: 'Backdrop',
    overrides: (props, styles)=>styles.backdrop
})({
    // Improve scrollable dialog support.
    zIndex: -1
});
const Dialog_useUtilityClasses = (ownerState)=>{
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
const DialogRoot = (0,styled/* default */.Ay)(Modal_Modal, {
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
    const classes = Dialog_useUtilityClasses(ownerState);
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
    const ariaLabelledby = useId(ariaLabelledbyProp);
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
//# sourceMappingURL=5483-8c36759b0373a369.js.map