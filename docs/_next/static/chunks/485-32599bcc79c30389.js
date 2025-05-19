"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[485],{

/***/ 1506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getOverlayAlpha)
/* harmony export */ });
// Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
function getOverlayAlpha(elevation) {
    let alphaValue;
    if (elevation < 1) {
        alphaValue = 5.11916 * elevation ** 2;
    } else {
        alphaValue = 4.5 * Math.log(elevation + 1) + 2;
    }
    return Math.round(alphaValue * 10) / 1000;
}


/***/ }),

/***/ 1796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTheme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31654);
/* __next_internal_client_entry_do_not_use__ default auto */ 
const defaultTheme = (0,_createTheme_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultTheme);


/***/ }),

/***/ 4397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('$$material');


/***/ }),

/***/ 14200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ extendSxProp)
/* harmony export */ });
/* harmony import */ var _mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83752);
/* harmony import */ var _defaultSxConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54512);


const splitProps = props => {
  const result = {
    systemProps: {},
    otherProps: {}
  };
  const config = props?.theme?.unstable_sxConfig ?? _defaultSxConfig_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A;
  Object.keys(props).forEach(prop => {
    if (config[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};
function extendSxProp(props) {
  const {
    sx: inSx,
    ...other
  } = props;
  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === 'function') {
    finalSx = (...args) => {
      const result = inSx(...args);
      if (!(0,_mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_1__/* .isPlainObject */ .Q)(result)) {
        return systemProps;
      }
      return {
        ...systemProps,
        ...result
      };
    };
  } else {
    finalSx = {
      ...systemProps,
      ...inSx
    };
  }
  return {
    ...otherProps,
    sx: finalSx
  };
}

/***/ }),

/***/ 14290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  X4: () => (/* binding */ alpha),
  e$: () => (/* binding */ darken),
  eM: () => (/* binding */ getContrastRatio),
  YL: () => (/* binding */ hslToRgb),
  a: () => (/* binding */ lighten),
  Cg: () => (/* binding */ private_safeAlpha),
  Me: () => (/* binding */ private_safeColorChannel),
  Nd: () => (/* binding */ private_safeDarken),
  Y9: () => (/* binding */ private_safeEmphasize),
  j4: () => (/* binding */ private_safeLighten)
});

// UNUSED EXPORTS: blend, colorChannel, decomposeColor, emphasize, getLuminance, hexToRgb, recomposeColor, rgbToHex

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/formatMuiErrorMessage/formatMuiErrorMessage.js
var formatMuiErrorMessage = __webpack_require__(34480);
;// ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/clamp/clamp.js
function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return Math.max(min, Math.min(val, max));
}
/* harmony default export */ const clamp_clamp = (clamp);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js

/* eslint-disable @typescript-eslint/naming-convention */


/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clampWrapper(value, min = 0, max = 1) {
  if (false) {}
  return clamp_clamp(value, min, max);
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
function hexToRgb(color) {
  color = color.slice(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }
  if (false) {}
  return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
}
function intToHex(int) {
  const hex = int.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */
function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }
  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }
  const marker = color.indexOf('(');
  const type = color.substring(0, marker);
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(type)) {
    throw new Error( false ? 0 : (0,formatMuiErrorMessage/* default */.A)(9, color));
  }
  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;
  if (type === 'color') {
    values = values.split(' ');
    colorSpace = values.shift();
    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].slice(1);
    }
    if (!['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(colorSpace)) {
      throw new Error( false ? 0 : (0,formatMuiErrorMessage/* default */.A)(10, colorSpace));
    }
  } else {
    values = values.split(',');
  }
  values = values.map(value => parseFloat(value));
  return {
    type,
    values,
    colorSpace
  };
}

/**
 * Returns a channel created from the input color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {string} - The channel for the color, that can be used in rgba or hsla colors
 */
const colorChannel = color => {
  const decomposedColor = decomposeColor(color);
  return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.includes('hsl') && idx !== 0 ? `${val}%` : val).join(' ');
};
const private_safeColorChannel = (color, warning) => {
  try {
    return colorChannel(color);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
};

/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
function recomposeColor(color) {
  const {
    type,
    colorSpace
  } = color;
  let {
    values
  } = color;
  if (type.includes('rgb')) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  } else if (type.includes('hsl')) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }
  if (type.includes('color')) {
    values = `${colorSpace} ${values.join(' ')}`;
  } else {
    values = `${values.join(', ')}`;
  }
  return `${type}(${values})`;
}

/**
 * Converts a color from CSS rgb format to CSS hex format.
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */
function rgbToHex(color) {
  // Idempotent
  if (color.startsWith('#')) {
    return color;
  }
  const {
    values
  } = decomposeColor(color);
  return `#${values.map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n)).join('')}`;
}

/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */
function hslToRgb(color) {
  color = decomposeColor(color);
  const {
    values
  } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  let type = 'rgb';
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
  color = decomposeColor(color);
  let rgb = color.type === 'hsl' || color.type === 'hsla' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(val => {
    if (color.type !== 'color') {
      val /= 255; // normalized
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });

  // Truncate at 3 digits
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */
function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function alpha(color, value) {
  color = decomposeColor(color);
  value = clampWrapper(value);
  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  if (color.type === 'color') {
    color.values[3] = `/${value}`;
  } else {
    color.values[3] = value;
  }
  return recomposeColor(color);
}
function private_safeAlpha(color, value, warning) {
  try {
    return alpha(color, value);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
}

/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.includes('hsl')) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.includes('rgb') || color.type.includes('color')) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeDarken(color, coefficient, warning) {
  try {
    return darken(color, coefficient);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
}

/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.includes('hsl')) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.includes('rgb')) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  } else if (color.type.includes('color')) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (1 - color.values[i]) * coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeLighten(color, coefficient, warning) {
  try {
    return lighten(color, coefficient);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
}

/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function emphasize(color, coefficient = 0.15) {
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
function private_safeEmphasize(color, coefficient, warning) {
  try {
    return emphasize(color, coefficient);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
}

/**
 * Blend a transparent overlay color with a background color, resulting in a single
 * RGB color.
 * @param {string} background - CSS color
 * @param {string} overlay - CSS color
 * @param {number} opacity - Opacity multiplier in the range 0 - 1
 * @param {number} [gamma=1.0] - Gamma correction factor. For gamma-correct blending, 2.2 is usual.
 */
function blend(background, overlay, opacity, gamma = 1.0) {
  const blendChannel = (b, o) => Math.round((b ** (1 / gamma) * (1 - opacity) + o ** (1 / gamma) * opacity) ** gamma);
  const backgroundColor = decomposeColor(background);
  const overlayColor = decomposeColor(overlay);
  const rgb = [blendChannel(backgroundColor.values[0], overlayColor.values[0]), blendChannel(backgroundColor.values[1], overlayColor.values[1]), blendChannel(backgroundColor.values[2], overlayColor.values[2])];
  return recomposeColor({
    type: 'rgb',
    values: rgb
  });
}

/***/ }),

/***/ 20052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ cssContainerQueries),
/* harmony export */   CT: () => (/* binding */ getContainerQuery),
/* harmony export */   _S: () => (/* binding */ sortContainerQueries),
/* harmony export */   ob: () => (/* binding */ isCqShorthand)
/* harmony export */ });

/**
 * For using in `sx` prop to sort the breakpoint from low to high.
 * Note: this function does not work and will not support multiple units.
 *       e.g. input: { '@container (min-width:300px)': '1rem', '@container (min-width:40rem)': '2rem' }
 *            output: { '@container (min-width:40rem)': '2rem', '@container (min-width:300px)': '1rem' } // since 40 < 300 eventhough 40rem > 300px
 */
function sortContainerQueries(theme, css) {
  if (!theme.containerQueries) {
    return css;
  }
  const sorted = Object.keys(css).filter(key => key.startsWith('@container')).sort((a, b) => {
    const regex = /min-width:\s*([0-9.]+)/;
    return +(a.match(regex)?.[1] || 0) - +(b.match(regex)?.[1] || 0);
  });
  if (!sorted.length) {
    return css;
  }
  return sorted.reduce((acc, key) => {
    const value = css[key];
    delete acc[key];
    acc[key] = value;
    return acc;
  }, {
    ...css
  });
}
function isCqShorthand(breakpointKeys, value) {
  return value === '@' || value.startsWith('@') && (breakpointKeys.some(key => value.startsWith(`@${key}`)) || !!value.match(/^@\d/));
}
function getContainerQuery(theme, shorthand) {
  const matches = shorthand.match(/^@([^/]+)?\/?(.+)?$/);
  if (!matches) {
    if (false) {}
    return null;
  }
  const [, containerQuery, containerName] = matches;
  const value = Number.isNaN(+containerQuery) ? containerQuery || 0 : +containerQuery;
  return theme.containerQueries(containerName).up(value);
}
function cssContainerQueries(themeInput) {
  const toContainerQuery = (mediaQuery, name) => mediaQuery.replace('@media', name ? `@container ${name}` : '@container');
  function attachCq(node, name) {
    node.up = (...args) => toContainerQuery(themeInput.breakpoints.up(...args), name);
    node.down = (...args) => toContainerQuery(themeInput.breakpoints.down(...args), name);
    node.between = (...args) => toContainerQuery(themeInput.breakpoints.between(...args), name);
    node.only = (...args) => toContainerQuery(themeInput.breakpoints.only(...args), name);
    node.not = (...args) => {
      const result = toContainerQuery(themeInput.breakpoints.not(...args), name);
      if (result.includes('not all and')) {
        // `@container` does not work with `not all and`, so need to invert the logic
        return result.replace('not all and ', '').replace('min-width:', 'width<').replace('max-width:', 'width>').replace('and', 'or');
      }
      return result;
    };
  }
  const node = {};
  const containerQueries = name => {
    attachCq(node, name);
    return node;
  };
  attachCq(containerQueries);
  return {
    ...themeInput,
    containerQueries
  };
}

/***/ }),

/***/ 20185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ createTheme_createTheme)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/deepmerge/deepmerge.js
var deepmerge = __webpack_require__(83752);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/createBreakpoints/createBreakpoints.js
// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
const breakpointKeys = (/* unused pure expression or super */ null && (['xs', 'sm', 'md', 'lg', 'xl']));
const sortBreakpointsValues = values => {
  const breakpointsAsArray = Object.keys(values).map(key => ({
    key,
    val: values[key]
  })) || [];
  // Sort in ascending order
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return {
      ...acc,
      [obj.key]: obj.val
    };
  }, {});
};

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536 // large screen
    },
    unit = 'px',
    step = 5,
    ...other
  } = breakpoints;
  const sortedValues = sortBreakpointsValues(values);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    // handle first and last key separately, for better readability
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
  }
  return {
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit,
    ...other
  };
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/cssContainerQueries/cssContainerQueries.js
var cssContainerQueries = __webpack_require__(20052);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/createTheme/shape.js
const shape = {
  borderRadius: 4
};
/* harmony default export */ const createTheme_shape = (shape);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/createTheme/createSpacing.js
var createSpacing = __webpack_require__(38148);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
var styleFunctionSx = __webpack_require__(24748);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js + 5 modules
var defaultSxConfig = __webpack_require__(54512);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/createTheme/applyStyles.js
/**
 * A universal utility to style components with multiple color modes. Always use it from the theme object.
 * It works with:
 *  - [Basic theme](https://mui.com/material-ui/customization/dark-mode/)
 *  - [CSS theme variables](https://mui.com/material-ui/customization/css-theme-variables/overview/)
 *  - Zero-runtime engine
 *
 * Tips: Use an array over object spread and place `theme.applyStyles()` last.
 *
 * With the styled function:
 * ✅ [{ background: '#e5e5e5' }, theme.applyStyles('dark', { background: '#1c1c1c' })]
 * 🚫 { background: '#e5e5e5', ...theme.applyStyles('dark', { background: '#1c1c1c' })}
 *
 * With the sx prop:
 * ✅ [{ background: '#e5e5e5' }, theme => theme.applyStyles('dark', { background: '#1c1c1c' })]
 * 🚫 { background: '#e5e5e5', ...theme => theme.applyStyles('dark', { background: '#1c1c1c' })}
 *
 * @example
 * 1. using with `styled`:
 * ```jsx
 *   const Component = styled('div')(({ theme }) => [
 *     { background: '#e5e5e5' },
 *     theme.applyStyles('dark', {
 *       background: '#1c1c1c',
 *       color: '#fff',
 *     }),
 *   ]);
 * ```
 *
 * @example
 * 2. using with `sx` prop:
 * ```jsx
 *   <Box sx={[
 *     { background: '#e5e5e5' },
 *     theme => theme.applyStyles('dark', {
 *        background: '#1c1c1c',
 *        color: '#fff',
 *      }),
 *     ]}
 *   />
 * ```
 *
 * @example
 * 3. theming a component:
 * ```jsx
 *   extendTheme({
 *     components: {
 *       MuiButton: {
 *         styleOverrides: {
 *           root: ({ theme }) => [
 *             { background: '#e5e5e5' },
 *             theme.applyStyles('dark', {
 *               background: '#1c1c1c',
 *               color: '#fff',
 *             }),
 *           ],
 *         },
 *       }
 *     }
 *   })
 *```
 */
function applyStyles(key, styles) {
  // @ts-expect-error this is 'any' type
  const theme = this;
  if (theme.vars) {
    if (!theme.colorSchemes?.[key] || typeof theme.getColorSchemeSelector !== 'function') {
      return {};
    }
    // If CssVarsProvider is used as a provider, returns '*:where({selector}) &'
    let selector = theme.getColorSchemeSelector(key);
    if (selector === '&') {
      return styles;
    }
    if (selector.includes('data-') || selector.includes('.')) {
      // '*' is required as a workaround for Emotion issue (https://github.com/emotion-js/emotion/issues/2836)
      selector = `*:where(${selector.replace(/\s*&$/, '')}) &`;
    }
    return {
      [selector]: styles
    };
  }
  if (theme.palette.mode === key) {
    return styles;
  }
  return {};
}
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/createTheme/createTheme.js








function createTheme(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {},
    ...other
  } = options;
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = (0,createSpacing/* default */.A)(spacingInput);
  let muiTheme = (0,deepmerge/* default */.A)({
    breakpoints,
    direction: 'ltr',
    components: {},
    // Inject component definitions.
    palette: {
      mode: 'light',
      ...paletteInput
    },
    spacing,
    shape: {
      ...createTheme_shape,
      ...shapeInput
    }
  }, other);
  muiTheme = (0,cssContainerQueries/* default */.Ay)(muiTheme);
  muiTheme.applyStyles = applyStyles;
  muiTheme = args.reduce((acc, argument) => (0,deepmerge/* default */.A)(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = {
    ...defaultSxConfig/* default */.A,
    ...other?.unstable_sxConfig
  };
  muiTheme.unstable_sx = function sx(props) {
    return (0,styleFunctionSx/* default */.A)({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}
/* harmony default export */ const createTheme_createTheme = (createTheme);

/***/ }),

/***/ 23114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports html, body, styles */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);
/* harmony import */ var _zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66941);
/* harmony import */ var _DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25569);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33736);
/* __next_internal_client_entry_do_not_use__ html,body,styles,default auto */ 



// to determine if the global styles are static or dynamic

const isDynamicSupport = typeof (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__/* .globalCss */ .Dp)({}) === 'function';
const html = (theme, enableColorScheme)=>({
        WebkitFontSmoothing: 'antialiased',
        // Antialiasing.
        MozOsxFontSmoothing: 'grayscale',
        // Antialiasing.
        // Change from `box-sizing: content-box` so that `width`
        // is not affected by `padding` or `border`.
        boxSizing: 'border-box',
        // Fix font resize problem in iOS
        WebkitTextSizeAdjust: '100%',
        // When used under CssVarsProvider, colorScheme should not be applied dynamically because it will generate the stylesheet twice for server-rendered applications.
        ...enableColorScheme && !theme.vars && {
            colorScheme: theme.palette.mode
        }
    });
const body = (theme)=>({
        color: (theme.vars || theme).palette.text.primary,
        ...theme.typography.body1,
        backgroundColor: (theme.vars || theme).palette.background.default,
        '@media print': {
            // Save printer ink.
            backgroundColor: (theme.vars || theme).palette.common.white
        }
    });
const styles = function(theme) {
    let enableColorScheme = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var _theme_components_MuiCssBaseline, _theme_components;
    const colorSchemeStyles = {};
    if (enableColorScheme && theme.colorSchemes && typeof theme.getColorSchemeSelector === 'function') {
        Object.entries(theme.colorSchemes).forEach((param)=>{
            let [key, scheme] = param;
            const selector = theme.getColorSchemeSelector(key);
            if (selector.startsWith('@')) {
                var _scheme_palette;
                // for @media (prefers-color-scheme), we need to target :root
                colorSchemeStyles[selector] = {
                    ':root': {
                        colorScheme: (_scheme_palette = scheme.palette) === null || _scheme_palette === void 0 ? void 0 : _scheme_palette.mode
                    }
                };
            } else {
                var _scheme_palette1;
                // else, it's likely that the selector already target an element with a class or data attribute
                colorSchemeStyles[selector.replace(/\s*&/, '')] = {
                    colorScheme: (_scheme_palette1 = scheme.palette) === null || _scheme_palette1 === void 0 ? void 0 : _scheme_palette1.mode
                };
            }
        });
    }
    let defaultStyles = {
        html: html(theme, enableColorScheme),
        '*, *::before, *::after': {
            boxSizing: 'inherit'
        },
        'strong, b': {
            fontWeight: theme.typography.fontWeightBold
        },
        body: {
            margin: 0,
            // Remove the margin in all browsers.
            ...body(theme),
            // Add support for document.body.requestFullScreen().
            // Other elements, if background transparent, are not supported.
            '&::backdrop': {
                backgroundColor: (theme.vars || theme).palette.background.default
            }
        },
        ...colorSchemeStyles
    };
    const themeOverrides = (_theme_components = theme.components) === null || _theme_components === void 0 ? void 0 : (_theme_components_MuiCssBaseline = _theme_components.MuiCssBaseline) === null || _theme_components_MuiCssBaseline === void 0 ? void 0 : _theme_components_MuiCssBaseline.styleOverrides;
    if (themeOverrides) {
        defaultStyles = [
            defaultStyles,
            themeOverrides
        ];
    }
    return defaultStyles;
};
// `ecs` stands for enableColorScheme. This is internal logic to make it work with Pigment CSS, so shorter is better.
const SELECTOR = 'mui-ecs';
const staticStyles = (theme)=>{
    const result = styles(theme, false);
    const baseStyles = Array.isArray(result) ? result[0] : result;
    if (!theme.vars && baseStyles) {
        baseStyles.html[":root:has(".concat(SELECTOR, ")")] = {
            colorScheme: theme.palette.mode
        };
    }
    if (theme.colorSchemes) {
        Object.entries(theme.colorSchemes).forEach((param)=>{
            let [key, scheme] = param;
            const selector = theme.getColorSchemeSelector(key);
            if (selector.startsWith('@')) {
                var _scheme_palette;
                // for @media (prefers-color-scheme), we need to target :root
                baseStyles[selector] = {
                    [":root:not(:has(.".concat(SELECTOR, "))")]: {
                        colorScheme: (_scheme_palette = scheme.palette) === null || _scheme_palette === void 0 ? void 0 : _scheme_palette.mode
                    }
                };
            } else {
                var _scheme_palette1;
                // else, it's likely that the selector already target an element with a class or data attribute
                baseStyles[selector.replace(/\s*&/, '')] = {
                    ["&:not(:has(.".concat(SELECTOR, "))")]: {
                        colorScheme: (_scheme_palette1 = scheme.palette) === null || _scheme_palette1 === void 0 ? void 0 : _scheme_palette1.mode
                    }
                };
            }
        });
    }
    return result;
};
const GlobalStyles = (0,_zero_styled_index_js__WEBPACK_IMPORTED_MODULE_2__/* .globalCss */ .Dp)(isDynamicSupport ? (param)=>{
    let { theme, enableColorScheme } = param;
    return styles(theme, enableColorScheme);
} : (param)=>{
    let { theme } = param;
    return staticStyles(theme);
});
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */ function CssBaseline(inProps) {
    const props = (0,_DefaultPropsProvider_index_js__WEBPACK_IMPORTED_MODULE_3__/* .useDefaultProps */ .b)({
        props: inProps,
        name: 'MuiCssBaseline'
    });
    const { children, enableColorScheme = false } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isDynamicSupport && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(GlobalStyles, {
                enableColorScheme: enableColorScheme
            }),
            !isDynamicSupport && !enableColorScheme && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: SELECTOR,
                style: {
                    display: 'none'
                }
            }),
            children
        ]
    });
}
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CssBaseline);


/***/ }),

/***/ 24748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export unstable_createStyleFunctionSx */
/* harmony import */ var _mui_utils_capitalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55454);
/* harmony import */ var _merge_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99916);
/* harmony import */ var _style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47372);
/* harmony import */ var _breakpoints_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70948);
/* harmony import */ var _cssContainerQueries_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20052);
/* harmony import */ var _defaultSxConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54512);






function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop, val, theme, config) {
    const props = {
      [prop]: val,
      theme
    };
    const options = config[prop];
    if (!options) {
      return {
        [prop]: val
      };
    }
    const {
      cssProperty = prop,
      themeKey,
      transform,
      style
    } = options;
    if (val == null) {
      return null;
    }

    // TODO v6: remove, see https://github.com/mui/material-ui/pull/38123
    if (themeKey === 'typography' && val === 'inherit') {
      return {
        [prop]: val
      };
    }
    const themeMapping = (0,_style_index_js__WEBPACK_IMPORTED_MODULE_0__/* .getPath */ .Yn)(theme, themeKey) || {};
    if (style) {
      return style(props);
    }
    const styleFromPropValue = propValueFinal => {
      let value = (0,_style_index_js__WEBPACK_IMPORTED_MODULE_0__/* .getStyleValue */ .BO)(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = (0,_style_index_js__WEBPACK_IMPORTED_MODULE_0__/* .getStyleValue */ .BO)(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : (0,_mui_utils_capitalize__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return (0,_breakpoints_index_js__WEBPACK_IMPORTED_MODULE_2__/* .handleBreakpoints */ .NI)(props, val, styleFromPropValue);
  }
  function styleFunctionSx(props) {
    const {
      sx,
      theme = {}
    } = props || {};
    if (!sx) {
      return null; // Emotion & styled-components will neglect null
    }
    const config = theme.unstable_sxConfig ?? _defaultSxConfig_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A;

    /*
     * Receive `sxInput` as object or callback
     * and then recursively check keys & values to create media query object styles.
     * (the result will be used in `styled`)
     */
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === 'function') {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== 'object') {
        // value
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = (0,_breakpoints_index_js__WEBPACK_IMPORTED_MODULE_2__/* .createEmptyBreakpointObject */ .EU)(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css = emptyBreakpoints;
      Object.keys(sxObject).forEach(styleKey => {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== undefined) {
          if (typeof value === 'object') {
            if (config[styleKey]) {
              css = (0,_merge_index_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(css, getThemeValue(styleKey, value, theme, config));
            } else {
              const breakpointsValues = (0,_breakpoints_index_js__WEBPACK_IMPORTED_MODULE_2__/* .handleBreakpoints */ .NI)({
                theme
              }, value, x => ({
                [styleKey]: x
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css[styleKey] = styleFunctionSx({
                  sx: value,
                  theme
                });
              } else {
                css = (0,_merge_index_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(css, breakpointsValues);
              }
            }
          } else {
            css = (0,_merge_index_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(css, getThemeValue(styleKey, value, theme, config));
          }
        }
      });
      return (0,_cssContainerQueries_index_js__WEBPACK_IMPORTED_MODULE_5__/* .sortContainerQueries */ ._S)(theme, (0,_breakpoints_index_js__WEBPACK_IMPORTED_MODULE_2__/* .removeUnusedBreakpoints */ .vf)(breakpointsKeys, css));
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx;
}
const styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ['sx'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styleFunctionSx);

/***/ }),

/***/ 25569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  b: () => (/* binding */ DefaultPropsProvider_useDefaultProps)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/resolveProps/resolveProps.js
var resolveProps = __webpack_require__(66842);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/DefaultPropsProvider/DefaultPropsProvider.js
'use client';





const PropsContext = /*#__PURE__*/react.createContext(undefined);
function DefaultPropsProvider({
  value,
  children
}) {
  return /*#__PURE__*/_jsx(PropsContext.Provider, {
    value: value,
    children: children
  });
}
 false ? 0 : void 0;
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name]) {
    return props;
  }
  const config = theme.components[name];
  if (config.defaultProps) {
    // compatible with v5 signature
    return (0,resolveProps/* default */.A)(config.defaultProps, props);
  }
  if (!config.styleOverrides && !config.variants) {
    // v6 signature, no property 'defaultProps'
    return (0,resolveProps/* default */.A)(config, props);
  }
  return props;
}
function useDefaultProps({
  props,
  name
}) {
  const ctx = react.useContext(PropsContext);
  return getThemeProps({
    props,
    name,
    theme: {
      components: ctx
    }
  });
}
/* harmony default export */ const DefaultPropsProvider_DefaultPropsProvider = ((/* unused pure expression or super */ null && (DefaultPropsProvider)));
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
/* __next_internal_client_entry_do_not_use__ default,useDefaultProps auto */ 



function DefaultPropsProvider_DefaultPropsProvider_DefaultPropsProvider(props) {
    return /*#__PURE__*/ _jsx(SystemDefaultPropsProvider, {
        ...props
    });
}
 false ? 0 : void 0;
/* harmony default export */ const material_DefaultPropsProvider_DefaultPropsProvider = ((/* unused pure expression or super */ null && (DefaultPropsProvider_DefaultPropsProvider_DefaultPropsProvider)));
function DefaultPropsProvider_useDefaultProps(params) {
    return useDefaultProps(params);
}


/***/ }),

/***/ 26858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useForkRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);
/* harmony import */ var _setRef_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65128);
'use client';




/**
 * Takes an array of refs and returns a new ref which will apply any modification to all of the refs.
 * This is useful when you want to have the ref used in multiple places.
 *
 * ```tsx
 * const rootRef = React.useRef<Instance>(null);
 * const refFork = useForkRef(rootRef, props.ref);
 *
 * return (
 *   <Root {...props} ref={refFork} />
 * );
 * ```
 *
 * @param {Array<React.Ref<Instance> | undefined>} refs The ref array.
 * @returns {React.RefCallback<Instance> | null} The new ref callback.
 */
function useForkRef(...refs) {
  /**
   * This will create a new function if the refs passed to this hook change and are all defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior.
   */
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }
    return instance => {
      refs.forEach(ref => {
        (0,_setRef_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(ref, instance);
      });
    };
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- intentionally ignoring that the dependency array must be an array literal
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

/***/ }),

/***/ 27673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ styles_rootShouldForwardProp)
});

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/slotShouldForwardProp.js
// copied from @mui/system/createStyled
function slotShouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
/* harmony default export */ const styles_slotShouldForwardProp = (slotShouldForwardProp);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/rootShouldForwardProp.js

const rootShouldForwardProp = (prop)=>styles_slotShouldForwardProp(prop) && prop !== 'classes';
/* harmony default export */ const styles_rootShouldForwardProp = (rootShouldForwardProp);


/***/ }),

/***/ 29180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ButtonBase_ButtonBase)
});

// UNUSED EXPORTS: ButtonBaseRoot

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(34354);
;// ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/isFocusVisible/isFocusVisible.js
/**
 * Returns a boolean indicating if the event's target has :focus-visible
 */
function isFocusVisible(element) {
  try {
    return element.matches(':focus-visible');
  } catch (error) {
    // Do not warn on jsdom tests, otherwise all tests that rely on focus have to be skipped
    // Tests that rely on `:focus-visible` will still have to be skipped in jsdom
    if (false) {}
  }
  return false;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(41805);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(25569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(92849);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
var useEventCallback = __webpack_require__(51842);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/useEventCallback.js
/* __next_internal_client_entry_do_not_use__ default auto */ 
/* harmony default export */ const utils_useEventCallback = (useEventCallback/* default */.A);

;// ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js
'use client';


const UNINITIALIZED = {};

/**
 * A React.useRef() that is initialized lazily with a function. Note that it accepts an optional
 * initialization argument, so the initialization function doesn't need to be an inline closure.
 *
 * @usage
 *   const ref = useLazyRef(sortColumns, columns)
 */
function useLazyRef(init, initArg) {
  const ref = react.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/useLazyRipple/useLazyRipple.js
/* __next_internal_client_entry_do_not_use__ LazyRipple,default auto */ 

/**
 * Lazy initialization container for the Ripple instance. This improves
 * performance by delaying mounting the ripple until it's needed.
 */ class LazyRipple {
    /** React ref to the ripple instance */ /** If the ripple component should be mounted */ /** Promise that resolves when the ripple component is mounted */ /** If the ripple component has been mounted */ /** React state hook setter */ static create() {
        return new LazyRipple();
    }
    static use() {
        /* eslint-disable */ const ripple = useLazyRef(LazyRipple.create).current;
        const [shouldMount, setShouldMount] = react.useState(false);
        ripple.shouldMount = shouldMount;
        ripple.setShouldMount = setShouldMount;
        react.useEffect(ripple.mountEffect, [
            shouldMount
        ]);
        /* eslint-enable */ return ripple;
    }
    mount() {
        if (!this.mounted) {
            this.mounted = createControlledPromise();
            this.shouldMount = true;
            this.setShouldMount(this.shouldMount);
        }
        return this.mounted;
    }
    /* Ripple API */ start() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        this.mount().then(()=>{
            var _this_ref_current;
            return (_this_ref_current = this.ref.current) === null || _this_ref_current === void 0 ? void 0 : _this_ref_current.start(...args);
        });
    }
    stop() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        this.mount().then(()=>{
            var _this_ref_current;
            return (_this_ref_current = this.ref.current) === null || _this_ref_current === void 0 ? void 0 : _this_ref_current.stop(...args);
        });
    }
    pulsate() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        this.mount().then(()=>{
            var _this_ref_current;
            return (_this_ref_current = this.ref.current) === null || _this_ref_current === void 0 ? void 0 : _this_ref_current.pulsate(...args);
        });
    }
    constructor(){
        this.mountEffect = ()=>{
            if (this.shouldMount && !this.didMount) {
                if (this.ref.current !== null) {
                    this.didMount = true;
                    this.mounted.resolve();
                }
            }
        };
        this.ref = {
            current: null
        };
        this.mounted = null;
        this.didMount = false;
        this.shouldMount = false;
        this.setShouldMount = null;
    }
}
function useLazyRipple() {
    return LazyRipple.use();
}
function createControlledPromise() {
    let resolve;
    let reject;
    const p = new Promise((resolveFn, rejectFn)=>{
        resolve = resolveFn;
        reject = rejectFn;
    });
    p.resolve = resolve;
    p.reject = reject;
    return p;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/esm/_tagged_template_literal.js
var _tagged_template_literal = __webpack_require__(86739);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-transition-group/esm/TransitionGroup.js + 1 modules
var TransitionGroup = __webpack_require__(89191);
;// ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/useOnMount/useOnMount.js
'use client';


const EMPTY = [];

/**
 * A React.useEffect equivalent that runs once, when the component is mounted.
 */
function useOnMount(fn) {
  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
  /* eslint-disable react-hooks/exhaustive-deps */
  react.useEffect(fn, EMPTY);
  /* eslint-enable react-hooks/exhaustive-deps */
}
;// ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/useTimeout/useTimeout.js
'use client';



class Timeout {
  static create() {
    return new Timeout();
  }
  currentId = null;

  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = null;
      fn();
    }, delay);
  }
  clear = () => {
    if (this.currentId !== null) {
      clearTimeout(this.currentId);
      this.currentId = null;
    }
  };
  disposeEffect = () => {
    return this.clear;
  };
}
function useTimeout() {
  const timeout = useLazyRef(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(93656);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/ButtonBase/Ripple.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


/**
 * @ignore - internal component.
 */ 
function Ripple(props) {
    const { className, classes, pulsate = false, rippleX, rippleY, rippleSize, in: inProp, onExited, timeout } = props;
    const [leaving, setLeaving] = react.useState(false);
    const rippleClassName = (0,clsx/* default */.A)(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
    const rippleStyles = {
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / 2) + rippleY,
        left: -(rippleSize / 2) + rippleX
    };
    const childClassName = (0,clsx/* default */.A)(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
    if (!inProp && !leaving) {
        setLeaving(true);
    }
    react.useEffect(()=>{
        if (!inProp && onExited != null) {
            // react-transition-group#onExited
            const timeoutId = setTimeout(onExited, timeout);
            return ()=>{
                clearTimeout(timeoutId);
            };
        }
        return undefined;
    }, [
        onExited,
        inProp,
        timeout
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: rippleClassName,
        style: rippleStyles,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            className: childClassName
        })
    });
}
 false ? 0 : void 0;
/* harmony default export */ const ButtonBase_Ripple = (Ripple);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(41792);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/ButtonBase/touchRippleClasses.js


function getTouchRippleUtilityClass(slot) {
    return generateUtilityClass('MuiTouchRipple', slot);
}
const touchRippleClasses = (0,generateUtilityClasses/* default */.A)('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate'
]);
/* harmony default export */ const ButtonBase_touchRippleClasses = (touchRippleClasses);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/ButtonBase/TouchRipple.js
/* __next_internal_client_entry_do_not_use__ DELAY_RIPPLE,TouchRippleRoot,TouchRippleRipple,default auto */ 
function _templateObject() {
    const data = (0,_tagged_template_literal._)([
        "\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0,_tagged_template_literal._)([
        "\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0,_tagged_template_literal._)([
        "\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0,_tagged_template_literal._)([
        "\n  opacity: 0;\n  position: absolute;\n\n  &.",
        " {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",
        ";\n    animation-duration: ",
        "ms;\n    animation-timing-function: ",
        ";\n  }\n\n  &.",
        " {\n    animation-duration: ",
        "ms;\n  }\n\n  & .",
        " {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & .",
        " {\n    opacity: 0;\n    animation-name: ",
        ";\n    animation-duration: ",
        "ms;\n    animation-timing-function: ",
        ";\n  }\n\n  & .",
        " {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",
        ";\n    animation-duration: 2500ms;\n    animation-timing-function: ",
        ";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}










const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = (0,emotion_react_browser_esm/* keyframes */.i7)(_templateObject());
const exitKeyframe = (0,emotion_react_browser_esm/* keyframes */.i7)(_templateObject1());
const pulsateKeyframe = (0,emotion_react_browser_esm/* keyframes */.i7)(_templateObject2());
const TouchRippleRoot = (0,styled/* default */.Ay)('span', {
    name: 'MuiTouchRipple',
    slot: 'Root'
})({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit'
});
// This `styled()` function invokes keyframes. `styled-components` only supports keyframes
// in string templates. Do not convert these styles in JS object as it will break.
const TouchRippleRipple = (0,styled/* default */.Ay)(ButtonBase_Ripple, {
    name: 'MuiTouchRipple',
    slot: 'Ripple'
})(_templateObject3(), ButtonBase_touchRippleClasses.rippleVisible, enterKeyframe, DURATION, (param)=>{
    let { theme } = param;
    return theme.transitions.easing.easeInOut;
}, ButtonBase_touchRippleClasses.ripplePulsate, (param)=>{
    let { theme } = param;
    return theme.transitions.duration.shorter;
}, ButtonBase_touchRippleClasses.child, ButtonBase_touchRippleClasses.childLeaving, exitKeyframe, DURATION, (param)=>{
    let { theme } = param;
    return theme.transitions.easing.easeInOut;
}, ButtonBase_touchRippleClasses.childPulsate, pulsateKeyframe, (param)=>{
    let { theme } = param;
    return theme.transitions.easing.easeInOut;
});
/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */ const TouchRipple = /*#__PURE__*/ react.forwardRef(function TouchRipple(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiTouchRipple'
    });
    const { center: centerProp = false, classes = {}, className, ...other } = props;
    const [ripples, setRipples] = react.useState([]);
    const nextKey = react.useRef(0);
    const rippleCallback = react.useRef(null);
    react.useEffect(()=>{
        if (rippleCallback.current) {
            rippleCallback.current();
            rippleCallback.current = null;
        }
    }, [
        ripples
    ]);
    // Used to filter out mouse emulated events on mobile.
    const ignoringMouseDown = react.useRef(false);
    // We use a timer in order to only show the ripples for touch "click" like events.
    // We don't want to display the ripple for touch scroll events.
    const startTimer = useTimeout();
    // This is the hook called once the previous timeout is ready.
    const startTimerCommit = react.useRef(null);
    const container = react.useRef(null);
    const startCommit = react.useCallback((params)=>{
        const { pulsate, rippleX, rippleY, rippleSize, cb } = params;
        setRipples((oldRipples)=>[
                ...oldRipples,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TouchRippleRipple, {
                    classes: {
                        ripple: (0,clsx/* default */.A)(classes.ripple, ButtonBase_touchRippleClasses.ripple),
                        rippleVisible: (0,clsx/* default */.A)(classes.rippleVisible, ButtonBase_touchRippleClasses.rippleVisible),
                        ripplePulsate: (0,clsx/* default */.A)(classes.ripplePulsate, ButtonBase_touchRippleClasses.ripplePulsate),
                        child: (0,clsx/* default */.A)(classes.child, ButtonBase_touchRippleClasses.child),
                        childLeaving: (0,clsx/* default */.A)(classes.childLeaving, ButtonBase_touchRippleClasses.childLeaving),
                        childPulsate: (0,clsx/* default */.A)(classes.childPulsate, ButtonBase_touchRippleClasses.childPulsate)
                    },
                    timeout: DURATION,
                    pulsate: pulsate,
                    rippleX: rippleX,
                    rippleY: rippleY,
                    rippleSize: rippleSize
                }, nextKey.current)
            ]);
        nextKey.current += 1;
        rippleCallback.current = cb;
    }, [
        classes
    ]);
    const start = react.useCallback(function() {
        let event = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, cb = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ()=>{};
        const { pulsate = false, center = centerProp || options.pulsate, fakeElement = false // For test purposes
         } = options;
        if ((event === null || event === void 0 ? void 0 : event.type) === 'mousedown' && ignoringMouseDown.current) {
            ignoringMouseDown.current = false;
            return;
        }
        if ((event === null || event === void 0 ? void 0 : event.type) === 'touchstart') {
            ignoringMouseDown.current = true;
        }
        const element = fakeElement ? null : container.current;
        const rect = element ? element.getBoundingClientRect() : {
            width: 0,
            height: 0,
            left: 0,
            top: 0
        };
        // Get the size of the ripple
        let rippleX;
        let rippleY;
        let rippleSize;
        if (center || event === undefined || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
            rippleX = Math.round(rect.width / 2);
            rippleY = Math.round(rect.height / 2);
        } else {
            const { clientX, clientY } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
            rippleX = Math.round(clientX - rect.left);
            rippleY = Math.round(clientY - rect.top);
        }
        if (center) {
            rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
            // For some reason the animation is broken on Mobile Chrome if the size is even.
            if (rippleSize % 2 === 0) {
                rippleSize += 1;
            }
        } else {
            const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
            const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
            rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
        }
        // Touche devices
        if (event === null || event === void 0 ? void 0 : event.touches) {
            // check that this isn't another touchstart due to multitouch
            // otherwise we will only clear a single timer when unmounting while two
            // are running
            if (startTimerCommit.current === null) {
                // Prepare the ripple effect.
                startTimerCommit.current = ()=>{
                    startCommit({
                        pulsate,
                        rippleX,
                        rippleY,
                        rippleSize,
                        cb
                    });
                };
                // Delay the execution of the ripple effect.
                // We have to make a tradeoff with this delay value.
                startTimer.start(DELAY_RIPPLE, ()=>{
                    if (startTimerCommit.current) {
                        startTimerCommit.current();
                        startTimerCommit.current = null;
                    }
                });
            }
        } else {
            startCommit({
                pulsate,
                rippleX,
                rippleY,
                rippleSize,
                cb
            });
        }
    }, [
        centerProp,
        startCommit,
        startTimer
    ]);
    const pulsate = react.useCallback(()=>{
        start({}, {
            pulsate: true
        });
    }, [
        start
    ]);
    const stop = react.useCallback((event, cb)=>{
        startTimer.clear();
        // The touch interaction occurs too quickly.
        // We still want to show ripple effect.
        if ((event === null || event === void 0 ? void 0 : event.type) === 'touchend' && startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
            startTimer.start(0, ()=>{
                stop(event, cb);
            });
            return;
        }
        startTimerCommit.current = null;
        setRipples((oldRipples)=>{
            if (oldRipples.length > 0) {
                return oldRipples.slice(1);
            }
            return oldRipples;
        });
        rippleCallback.current = cb;
    }, [
        startTimer
    ]);
    react.useImperativeHandle(ref, ()=>({
            pulsate,
            start,
            stop
        }), [
        pulsate,
        start,
        stop
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TouchRippleRoot, {
        className: (0,clsx/* default */.A)(ButtonBase_touchRippleClasses.root, classes.root, className),
        ref: container,
        ...other,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TransitionGroup/* default */.A, {
            component: null,
            exit: true,
            children: ripples
        })
    });
});
 false ? 0 : void 0;
/* harmony default export */ const ButtonBase_TouchRipple = (TouchRipple);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass_generateUtilityClass = __webpack_require__(99268);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/ButtonBase/buttonBaseClasses.js


function getButtonBaseUtilityClass(slot) {
    return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiButtonBase', slot);
}
const buttonBaseClasses = (0,generateUtilityClasses/* default */.A)('MuiButtonBase', [
    'root',
    'disabled',
    'focusVisible'
]);
/* harmony default export */ const ButtonBase_buttonBaseClasses = (buttonBaseClasses);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/ButtonBase/ButtonBase.js
/* __next_internal_client_entry_do_not_use__ ButtonBaseRoot,default auto */ 














const useUtilityClasses = (ownerState)=>{
    const { disabled, focusVisible, focusVisibleClassName, classes } = ownerState;
    const slots = {
        root: [
            'root',
            disabled && 'disabled',
            focusVisible && 'focusVisible'
        ]
    };
    const composedClasses = (0,composeClasses/* default */.A)(slots, getButtonBaseUtilityClass, classes);
    if (focusVisible && focusVisibleClassName) {
        composedClasses.root += " ".concat(focusVisibleClassName);
    }
    return composedClasses;
};
const ButtonBaseRoot = (0,styled/* default */.Ay)('button', {
    name: 'MuiButtonBase',
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root
})({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    // Reset
    WebkitAppearance: 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
        borderStyle: 'none' // Remove Firefox dotted outline.
    },
    ["&.".concat(ButtonBase_buttonBaseClasses.disabled)]: {
        pointerEvents: 'none',
        // Disable link interactions
        cursor: 'default'
    },
    '@media print': {
        colorAdjust: 'exact'
    }
});
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */ const ButtonBase = /*#__PURE__*/ react.forwardRef(function ButtonBase(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiButtonBase'
    });
    const { action, centerRipple = false, children, className, component = 'button', disabled = false, disableRipple = false, disableTouchRipple = false, focusRipple = false, focusVisibleClassName, LinkComponent = 'a', onBlur, onClick, onContextMenu, onDragLeave, onFocus, onFocusVisible, onKeyDown, onKeyUp, onMouseDown, onMouseLeave, onMouseUp, onTouchEnd, onTouchMove, onTouchStart, tabIndex = 0, TouchRippleProps, touchRippleRef, type, ...other } = props;
    const buttonRef = react.useRef(null);
    const ripple = useLazyRipple();
    const handleRippleRef = (0,useForkRef/* default */.A)(ripple.ref, touchRippleRef);
    const [focusVisible, setFocusVisible] = react.useState(false);
    if (disabled && focusVisible) {
        setFocusVisible(false);
    }
    react.useImperativeHandle(action, ()=>({
            focusVisible: ()=>{
                setFocusVisible(true);
                buttonRef.current.focus();
            }
        }), []);
    const enableTouchRipple = ripple.shouldMount && !disableRipple && !disabled;
    react.useEffect(()=>{
        if (focusVisible && focusRipple && !disableRipple) {
            ripple.pulsate();
        }
    }, [
        disableRipple,
        focusRipple,
        focusVisible,
        ripple
    ]);
    const handleMouseDown = useRippleHandler(ripple, 'start', onMouseDown, disableTouchRipple);
    const handleContextMenu = useRippleHandler(ripple, 'stop', onContextMenu, disableTouchRipple);
    const handleDragLeave = useRippleHandler(ripple, 'stop', onDragLeave, disableTouchRipple);
    const handleMouseUp = useRippleHandler(ripple, 'stop', onMouseUp, disableTouchRipple);
    const handleMouseLeave = useRippleHandler(ripple, 'stop', (event)=>{
        if (focusVisible) {
            event.preventDefault();
        }
        if (onMouseLeave) {
            onMouseLeave(event);
        }
    }, disableTouchRipple);
    const handleTouchStart = useRippleHandler(ripple, 'start', onTouchStart, disableTouchRipple);
    const handleTouchEnd = useRippleHandler(ripple, 'stop', onTouchEnd, disableTouchRipple);
    const handleTouchMove = useRippleHandler(ripple, 'stop', onTouchMove, disableTouchRipple);
    const handleBlur = useRippleHandler(ripple, 'stop', (event)=>{
        if (!isFocusVisible(event.target)) {
            setFocusVisible(false);
        }
        if (onBlur) {
            onBlur(event);
        }
    }, false);
    const handleFocus = utils_useEventCallback((event)=>{
        // Fix for https://github.com/facebook/react/issues/7769
        if (!buttonRef.current) {
            buttonRef.current = event.currentTarget;
        }
        if (isFocusVisible(event.target)) {
            setFocusVisible(true);
            if (onFocusVisible) {
                onFocusVisible(event);
            }
        }
        if (onFocus) {
            onFocus(event);
        }
    });
    const isNonNativeButton = ()=>{
        const button = buttonRef.current;
        return component && component !== 'button' && !(button.tagName === 'A' && button.href);
    };
    const handleKeyDown = utils_useEventCallback((event)=>{
        // Check if key is already down to avoid repeats being counted as multiple activations
        if (focusRipple && !event.repeat && focusVisible && event.key === ' ') {
            ripple.stop(event, ()=>{
                ripple.start(event);
            });
        }
        if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
            event.preventDefault();
        }
        if (onKeyDown) {
            onKeyDown(event);
        }
        // Keyboard accessibility for non interactive elements
        if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
            event.preventDefault();
            if (onClick) {
                onClick(event);
            }
        }
    });
    const handleKeyUp = utils_useEventCallback((event)=>{
        // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
        // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0
        if (focusRipple && event.key === ' ' && focusVisible && !event.defaultPrevented) {
            ripple.stop(event, ()=>{
                ripple.pulsate(event);
            });
        }
        if (onKeyUp) {
            onKeyUp(event);
        }
        // Keyboard accessibility for non interactive elements
        if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
            onClick(event);
        }
    });
    let ComponentProp = component;
    if (ComponentProp === 'button' && (other.href || other.to)) {
        ComponentProp = LinkComponent;
    }
    const buttonProps = {};
    if (ComponentProp === 'button') {
        buttonProps.type = type === undefined ? 'button' : type;
        buttonProps.disabled = disabled;
    } else {
        if (!other.href && !other.to) {
            buttonProps.role = 'button';
        }
        if (disabled) {
            buttonProps['aria-disabled'] = disabled;
        }
    }
    const handleRef = (0,useForkRef/* default */.A)(ref, buttonRef);
    const ownerState = {
        ...props,
        centerRipple,
        component,
        disabled,
        disableRipple,
        disableTouchRipple,
        focusRipple,
        tabIndex,
        focusVisible
    };
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonBaseRoot, {
        as: ComponentProp,
        className: (0,clsx/* default */.A)(classes.root, className),
        ownerState: ownerState,
        onBlur: handleBlur,
        onClick: onClick,
        onContextMenu: handleContextMenu,
        onFocus: handleFocus,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
        onMouseDown: handleMouseDown,
        onMouseLeave: handleMouseLeave,
        onMouseUp: handleMouseUp,
        onDragLeave: handleDragLeave,
        onTouchEnd: handleTouchEnd,
        onTouchMove: handleTouchMove,
        onTouchStart: handleTouchStart,
        ref: handleRef,
        tabIndex: disabled ? -1 : tabIndex,
        type: type,
        ...buttonProps,
        ...other,
        children: [
            children,
            enableTouchRipple ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonBase_TouchRipple, {
                ref: handleRippleRef,
                center: centerRipple,
                ...TouchRippleProps
            }) : null
        ]
    });
});
function useRippleHandler(ripple, rippleAction, eventCallback) {
    let skipRippleAction = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    return utils_useEventCallback((event)=>{
        if (eventCallback) {
            eventCallback(event);
        }
        if (!skipRippleAction) {
            ripple[rippleAction](event);
        }
        return true;
    });
}
 false ? 0 : void 0;
/* harmony default export */ const ButtonBase_ButtonBase = (ButtonBase);


/***/ }),

/***/ 29800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Button_Button)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/resolveProps/resolveProps.js
var resolveProps = __webpack_require__(66842);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(34354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(14290);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/rootShouldForwardProp.js + 1 modules
var rootShouldForwardProp = __webpack_require__(27673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(41805);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(41521);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(25569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/ButtonBase/ButtonBase.js + 10 modules
var ButtonBase = __webpack_require__(29180);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(66627);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(57585);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(41792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(99268);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Button/buttonClasses.js


function getButtonUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiButton', slot);
}
const buttonClasses = (0,generateUtilityClasses/* default */.A)('MuiButton', [
    'root',
    'text',
    'textInherit',
    'textPrimary',
    'textSecondary',
    'textSuccess',
    'textError',
    'textInfo',
    'textWarning',
    'outlined',
    'outlinedInherit',
    'outlinedPrimary',
    'outlinedSecondary',
    'outlinedSuccess',
    'outlinedError',
    'outlinedInfo',
    'outlinedWarning',
    'contained',
    'containedInherit',
    'containedPrimary',
    'containedSecondary',
    'containedSuccess',
    'containedError',
    'containedInfo',
    'containedWarning',
    'disableElevation',
    'focusVisible',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorError',
    'colorInfo',
    'colorWarning',
    'textSizeSmall',
    'textSizeMedium',
    'textSizeLarge',
    'outlinedSizeSmall',
    'outlinedSizeMedium',
    'outlinedSizeLarge',
    'containedSizeSmall',
    'containedSizeMedium',
    'containedSizeLarge',
    'sizeMedium',
    'sizeSmall',
    'sizeLarge',
    'fullWidth',
    'startIcon',
    'endIcon',
    'icon',
    'iconSizeSmall',
    'iconSizeMedium',
    'iconSizeLarge'
]);
/* harmony default export */ const Button_buttonClasses = (buttonClasses);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/ButtonGroup/ButtonGroupContext.js

/**
 * @ignore - internal component.
 */ const ButtonGroupContext = /*#__PURE__*/ react.createContext({});
if (false) {}
/* harmony default export */ const ButtonGroup_ButtonGroupContext = (ButtonGroupContext);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/ButtonGroup/ButtonGroupButtonContext.js

/**
 * @ignore - internal component.
 */ const ButtonGroupButtonContext = /*#__PURE__*/ react.createContext(undefined);
if (false) {}
/* harmony default export */ const ButtonGroup_ButtonGroupButtonContext = (ButtonGroupButtonContext);

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Button/Button.js
/* __next_internal_client_entry_do_not_use__ default auto */ 
















const useUtilityClasses = (ownerState)=>{
    const { color, disableElevation, fullWidth, size, variant, classes } = ownerState;
    const slots = {
        root: [
            'root',
            variant,
            "".concat(variant).concat((0,capitalize/* default */.A)(color)),
            "size".concat((0,capitalize/* default */.A)(size)),
            "".concat(variant, "Size").concat((0,capitalize/* default */.A)(size)),
            "color".concat((0,capitalize/* default */.A)(color)),
            disableElevation && 'disableElevation',
            fullWidth && 'fullWidth'
        ],
        label: [
            'label'
        ],
        startIcon: [
            'icon',
            'startIcon',
            "iconSize".concat((0,capitalize/* default */.A)(size))
        ],
        endIcon: [
            'icon',
            'endIcon',
            "iconSize".concat((0,capitalize/* default */.A)(size))
        ]
    };
    const composedClasses = (0,composeClasses/* default */.A)(slots, getButtonUtilityClass, classes);
    return {
        ...classes,
        // forward the focused, disabled, etc. classes to the ButtonBase
        ...composedClasses
    };
};
const commonIconStyles = [
    {
        props: {
            size: 'small'
        },
        style: {
            '& > *:nth-of-type(1)': {
                fontSize: 18
            }
        }
    },
    {
        props: {
            size: 'medium'
        },
        style: {
            '& > *:nth-of-type(1)': {
                fontSize: 20
            }
        }
    },
    {
        props: {
            size: 'large'
        },
        style: {
            '& > *:nth-of-type(1)': {
                fontSize: 22
            }
        }
    }
];
const ButtonRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
    shouldForwardProp: (prop)=>(0,rootShouldForwardProp/* default */.A)(prop) || prop === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            styles[ownerState.variant],
            styles["".concat(ownerState.variant).concat((0,capitalize/* default */.A)(ownerState.color))],
            styles["size".concat((0,capitalize/* default */.A)(ownerState.size))],
            styles["".concat(ownerState.variant, "Size").concat((0,capitalize/* default */.A)(ownerState.size))],
            ownerState.color === 'inherit' && styles.colorInherit,
            ownerState.disableElevation && styles.disableElevation,
            ownerState.fullWidth && styles.fullWidth
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    const inheritContainedBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[800];
    const inheritContainedHoverBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey.A100 : theme.palette.grey[700];
    return {
        ...theme.typography.button,
        minWidth: 64,
        padding: '6px 16px',
        border: 0,
        borderRadius: (theme.vars || theme).shape.borderRadius,
        transition: theme.transitions.create([
            'background-color',
            'box-shadow',
            'border-color',
            'color'
        ], {
            duration: theme.transitions.duration.short
        }),
        '&:hover': {
            textDecoration: 'none'
        },
        ["&.".concat(Button_buttonClasses.disabled)]: {
            color: (theme.vars || theme).palette.action.disabled
        },
        variants: [
            {
                props: {
                    variant: 'contained'
                },
                style: {
                    color: "var(--variant-containedColor)",
                    backgroundColor: "var(--variant-containedBg)",
                    boxShadow: (theme.vars || theme).shadows[2],
                    '&:hover': {
                        boxShadow: (theme.vars || theme).shadows[4],
                        // Reset on touch devices, it doesn't add specificity
                        '@media (hover: none)': {
                            boxShadow: (theme.vars || theme).shadows[2]
                        }
                    },
                    '&:active': {
                        boxShadow: (theme.vars || theme).shadows[8]
                    },
                    ["&.".concat(Button_buttonClasses.focusVisible)]: {
                        boxShadow: (theme.vars || theme).shadows[6]
                    },
                    ["&.".concat(Button_buttonClasses.disabled)]: {
                        color: (theme.vars || theme).palette.action.disabled,
                        boxShadow: (theme.vars || theme).shadows[0],
                        backgroundColor: (theme.vars || theme).palette.action.disabledBackground
                    }
                }
            },
            {
                props: {
                    variant: 'outlined'
                },
                style: {
                    padding: '5px 15px',
                    border: '1px solid currentColor',
                    borderColor: "var(--variant-outlinedBorder, currentColor)",
                    backgroundColor: "var(--variant-outlinedBg)",
                    color: "var(--variant-outlinedColor)",
                    ["&.".concat(Button_buttonClasses.disabled)]: {
                        border: "1px solid ".concat((theme.vars || theme).palette.action.disabledBackground)
                    }
                }
            },
            {
                props: {
                    variant: 'text'
                },
                style: {
                    padding: '6px 8px',
                    color: "var(--variant-textColor)",
                    backgroundColor: "var(--variant-textBg)"
                }
            },
            ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()).map((param)=>{
                let [color] = param;
                return {
                    props: {
                        color
                    },
                    style: {
                        '--variant-textColor': (theme.vars || theme).palette[color].main,
                        '--variant-outlinedColor': (theme.vars || theme).palette[color].main,
                        '--variant-outlinedBorder': theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / 0.5)") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, 0.5),
                        '--variant-containedColor': (theme.vars || theme).palette[color].contrastText,
                        '--variant-containedBg': (theme.vars || theme).palette[color].main,
                        '@media (hover: hover)': {
                            '&:hover': {
                                '--variant-containedBg': (theme.vars || theme).palette[color].dark,
                                '--variant-textBg': theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, theme.palette.action.hoverOpacity),
                                '--variant-outlinedBorder': (theme.vars || theme).palette[color].main,
                                '--variant-outlinedBg': theme.vars ? "rgba(".concat(theme.vars.palette[color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette[color].main, theme.palette.action.hoverOpacity)
                            }
                        }
                    }
                };
            }),
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    color: 'inherit',
                    borderColor: 'currentColor',
                    '--variant-containedBg': theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
                    '@media (hover: hover)': {
                        '&:hover': {
                            '--variant-containedBg': theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
                            '--variant-textBg': theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.text.primary, theme.palette.action.hoverOpacity),
                            '--variant-outlinedBg': theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.text.primary, theme.palette.action.hoverOpacity)
                        }
                    }
                }
            },
            {
                props: {
                    size: 'small',
                    variant: 'text'
                },
                style: {
                    padding: '4px 5px',
                    fontSize: theme.typography.pxToRem(13)
                }
            },
            {
                props: {
                    size: 'large',
                    variant: 'text'
                },
                style: {
                    padding: '8px 11px',
                    fontSize: theme.typography.pxToRem(15)
                }
            },
            {
                props: {
                    size: 'small',
                    variant: 'outlined'
                },
                style: {
                    padding: '3px 9px',
                    fontSize: theme.typography.pxToRem(13)
                }
            },
            {
                props: {
                    size: 'large',
                    variant: 'outlined'
                },
                style: {
                    padding: '7px 21px',
                    fontSize: theme.typography.pxToRem(15)
                }
            },
            {
                props: {
                    size: 'small',
                    variant: 'contained'
                },
                style: {
                    padding: '4px 10px',
                    fontSize: theme.typography.pxToRem(13)
                }
            },
            {
                props: {
                    size: 'large',
                    variant: 'contained'
                },
                style: {
                    padding: '8px 22px',
                    fontSize: theme.typography.pxToRem(15)
                }
            },
            {
                props: {
                    disableElevation: true
                },
                style: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none'
                    },
                    ["&.".concat(Button_buttonClasses.focusVisible)]: {
                        boxShadow: 'none'
                    },
                    '&:active': {
                        boxShadow: 'none'
                    },
                    ["&.".concat(Button_buttonClasses.disabled)]: {
                        boxShadow: 'none'
                    }
                }
            },
            {
                props: {
                    fullWidth: true
                },
                style: {
                    width: '100%'
                }
            }
        ]
    };
}));
const ButtonStartIcon = (0,styled/* default */.Ay)('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.startIcon,
            styles["iconSize".concat((0,capitalize/* default */.A)(ownerState.size))]
        ];
    }
})({
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4,
    variants: [
        {
            props: {
                size: 'small'
            },
            style: {
                marginLeft: -2
            }
        },
        ...commonIconStyles
    ]
});
const ButtonEndIcon = (0,styled/* default */.Ay)('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.endIcon,
            styles["iconSize".concat((0,capitalize/* default */.A)(ownerState.size))]
        ];
    }
})({
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8,
    variants: [
        {
            props: {
                size: 'small'
            },
            style: {
                marginRight: -2
            }
        },
        ...commonIconStyles
    ]
});
const Button = /*#__PURE__*/ react.forwardRef(function Button(inProps, ref) {
    // props priority: `inProps` > `contextProps` > `themeDefaultProps`
    const contextProps = react.useContext(ButtonGroup_ButtonGroupContext);
    const buttonGroupButtonContextPositionClassName = react.useContext(ButtonGroup_ButtonGroupButtonContext);
    const resolvedProps = (0,resolveProps/* default */.A)(contextProps, inProps);
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: resolvedProps,
        name: 'MuiButton'
    });
    const { children, color = 'primary', component = 'button', className, disabled = false, disableElevation = false, disableFocusRipple = false, endIcon: endIconProp, focusVisibleClassName, fullWidth = false, size = 'medium', startIcon: startIconProp, type, variant = 'text', ...other } = props;
    const ownerState = {
        ...props,
        color,
        component,
        disabled,
        disableElevation,
        disableFocusRipple,
        fullWidth,
        size,
        type,
        variant
    };
    const classes = useUtilityClasses(ownerState);
    const startIcon = startIconProp && /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonStartIcon, {
        className: classes.startIcon,
        ownerState: ownerState,
        children: startIconProp
    });
    const endIcon = endIconProp && /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonEndIcon, {
        className: classes.endIcon,
        ownerState: ownerState,
        children: endIconProp
    });
    const positionClassName = buttonGroupButtonContextPositionClassName || '';
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonRoot, {
        ownerState: ownerState,
        className: (0,clsx/* default */.A)(contextProps.className, classes.root, className, positionClassName),
        component: component,
        disabled: disabled,
        focusRipple: !disableFocusRipple,
        focusVisibleClassName: (0,clsx/* default */.A)(classes.focusVisible, focusVisibleClassName),
        ref: ref,
        type: type,
        ...other,
        classes: classes,
        children: [
            startIcon,
            children,
            endIcon
        ]
    });
});
 false ? 0 : void 0;
/* harmony default export */ const Button_Button = (Button);


/***/ }),

/***/ 30022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null));


/***/ }),

/***/ 31404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ useThemeProps)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/resolveProps/resolveProps.js
var resolveProps = __webpack_require__(66842);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js

function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return (0,resolveProps/* default */.A)(theme.components[name].defaultProps, props);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/useTheme/useTheme.js + 1 modules
var useTheme = __webpack_require__(38767);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js
'use client';



function useThemeProps({
  props,
  name,
  defaultTheme,
  themeId
}) {
  let theme = (0,useTheme/* default */.A)(defaultTheme);
  if (themeId) {
    theme = theme[themeId] || theme;
  }
  return getThemeProps({
    theme,
    name,
    props
  });
}

/***/ }),

/***/ 31453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Paper_Paper)
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(84318);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(41521);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(25569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/getOverlayAlpha.js
var getOverlayAlpha = __webpack_require__(1506);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(41792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(99268);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Paper/paperClasses.js


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
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Paper/Paper.js
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

/***/ 31654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ createTheme_createTheme)
});

// UNUSED EXPORTS: createMuiTheme

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/formatMuiErrorMessage/formatMuiErrorMessage.js
var formatMuiErrorMessage = __webpack_require__(34480);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/deepmerge/deepmerge.js
var deepmerge = __webpack_require__(83752);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(14290);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/colors/common.js
const common = {
    black: '#000',
    white: '#fff'
};
/* harmony default export */ const colors_common = (common);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/colors/grey.js
const grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161'
};
/* harmony default export */ const colors_grey = (grey);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/colors/purple.js
const purple = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff'
};
/* harmony default export */ const colors_purple = (purple);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/colors/red.js
const red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
};
/* harmony default export */ const colors_red = (red);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/colors/orange.js
const orange = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00'
};
/* harmony default export */ const colors_orange = (orange);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/colors/blue.js
const blue = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff'
};
/* harmony default export */ const colors_blue = (blue);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/colors/lightBlue.js
const lightBlue = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea'
};
/* harmony default export */ const colors_lightBlue = (lightBlue);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/colors/green.js
const green = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853'
};
/* harmony default export */ const colors_green = (green);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/createPalette.js











function getLight() {
    return {
        // The colors used to style the text.
        text: {
            // The most important text.
            primary: 'rgba(0, 0, 0, 0.87)',
            // Secondary text.
            secondary: 'rgba(0, 0, 0, 0.6)',
            // Disabled text have even lower visual prominence.
            disabled: 'rgba(0, 0, 0, 0.38)'
        },
        // The color used to divide different elements.
        divider: 'rgba(0, 0, 0, 0.12)',
        // The background colors used to style the surfaces.
        // Consistency between these values is important.
        background: {
            paper: colors_common.white,
            default: colors_common.white
        },
        // The colors used to style the action elements.
        action: {
            // The color of an active action like an icon button.
            active: 'rgba(0, 0, 0, 0.54)',
            // The color of an hovered action.
            hover: 'rgba(0, 0, 0, 0.04)',
            hoverOpacity: 0.04,
            // The color of a selected action.
            selected: 'rgba(0, 0, 0, 0.08)',
            selectedOpacity: 0.08,
            // The color of a disabled action.
            disabled: 'rgba(0, 0, 0, 0.26)',
            // The background color of a disabled action.
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
            disabledOpacity: 0.38,
            focus: 'rgba(0, 0, 0, 0.12)',
            focusOpacity: 0.12,
            activatedOpacity: 0.12
        }
    };
}
const light = getLight();
function getDark() {
    return {
        text: {
            primary: colors_common.white,
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)',
            icon: 'rgba(255, 255, 255, 0.5)'
        },
        divider: 'rgba(255, 255, 255, 0.12)',
        background: {
            paper: '#121212',
            default: '#121212'
        },
        action: {
            active: colors_common.white,
            hover: 'rgba(255, 255, 255, 0.08)',
            hoverOpacity: 0.08,
            selected: 'rgba(255, 255, 255, 0.16)',
            selectedOpacity: 0.16,
            disabled: 'rgba(255, 255, 255, 0.3)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
            disabledOpacity: 0.38,
            focus: 'rgba(255, 255, 255, 0.12)',
            focusOpacity: 0.12,
            activatedOpacity: 0.24
        }
    };
}
const dark = getDark();
function addLightOrDark(intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
    if (!intent[direction]) {
        if (intent.hasOwnProperty(shade)) {
            intent[direction] = intent[shade];
        } else if (direction === 'light') {
            intent.light = (0,colorManipulator/* lighten */.a)(intent.main, tonalOffsetLight);
        } else if (direction === 'dark') {
            intent.dark = (0,colorManipulator/* darken */.e$)(intent.main, tonalOffsetDark);
        }
    }
}
function getDefaultPrimary() {
    let mode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'light';
    if (mode === 'dark') {
        return {
            main: colors_blue[200],
            light: colors_blue[50],
            dark: colors_blue[400]
        };
    }
    return {
        main: colors_blue[700],
        light: colors_blue[400],
        dark: colors_blue[800]
    };
}
function getDefaultSecondary() {
    let mode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'light';
    if (mode === 'dark') {
        return {
            main: colors_purple[200],
            light: colors_purple[50],
            dark: colors_purple[400]
        };
    }
    return {
        main: colors_purple[500],
        light: colors_purple[300],
        dark: colors_purple[700]
    };
}
function getDefaultError() {
    let mode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'light';
    if (mode === 'dark') {
        return {
            main: colors_red[500],
            light: colors_red[300],
            dark: colors_red[700]
        };
    }
    return {
        main: colors_red[700],
        light: colors_red[400],
        dark: colors_red[800]
    };
}
function getDefaultInfo() {
    let mode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'light';
    if (mode === 'dark') {
        return {
            main: colors_lightBlue[400],
            light: colors_lightBlue[300],
            dark: colors_lightBlue[700]
        };
    }
    return {
        main: colors_lightBlue[700],
        light: colors_lightBlue[500],
        dark: colors_lightBlue[900]
    };
}
function getDefaultSuccess() {
    let mode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'light';
    if (mode === 'dark') {
        return {
            main: colors_green[400],
            light: colors_green[300],
            dark: colors_green[700]
        };
    }
    return {
        main: colors_green[800],
        light: colors_green[500],
        dark: colors_green[900]
    };
}
function getDefaultWarning() {
    let mode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'light';
    if (mode === 'dark') {
        return {
            main: colors_orange[400],
            light: colors_orange[300],
            dark: colors_orange[700]
        };
    }
    return {
        main: '#ed6c02',
        // closest to orange[800] that pass 3:1.
        light: colors_orange[500],
        dark: colors_orange[900]
    };
}
function createPalette(palette) {
    const { mode = 'light', contrastThreshold = 3, tonalOffset = 0.2, ...other } = palette;
    const primary = palette.primary || getDefaultPrimary(mode);
    const secondary = palette.secondary || getDefaultSecondary(mode);
    const error = palette.error || getDefaultError(mode);
    const info = palette.info || getDefaultInfo(mode);
    const success = palette.success || getDefaultSuccess(mode);
    const warning = palette.warning || getDefaultWarning(mode);
    // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
    function getContrastText(background) {
        const contrastText = (0,colorManipulator/* getContrastRatio */.eM)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
        if (false) {}
        return contrastText;
    }
    const augmentColor = (param)=>{
        let { color, name, mainShade = 500, lightShade = 300, darkShade = 700 } = param;
        color = {
            ...color
        };
        if (!color.main && color[mainShade]) {
            color.main = color[mainShade];
        }
        if (!color.hasOwnProperty('main')) {
            throw new Error( false ? 0 : (0,formatMuiErrorMessage/* default */.A)(11, name ? " (".concat(name, ")") : '', mainShade));
        }
        if (typeof color.main !== 'string') {
            throw new Error( false ? 0 : (0,formatMuiErrorMessage/* default */.A)(12, name ? " (".concat(name, ")") : '', JSON.stringify(color.main)));
        }
        addLightOrDark(color, 'light', lightShade, tonalOffset);
        addLightOrDark(color, 'dark', darkShade, tonalOffset);
        if (!color.contrastText) {
            color.contrastText = getContrastText(color.main);
        }
        return color;
    };
    let modeHydrated;
    if (mode === 'light') {
        modeHydrated = getLight();
    } else if (mode === 'dark') {
        modeHydrated = getDark();
    }
    if (false) {}
    const paletteOutput = (0,deepmerge/* default */.A)({
        // A collection of common colors.
        common: {
            ...colors_common
        },
        // prevent mutable object.
        // The palette mode, can be light or dark.
        mode,
        // The colors used to represent primary interface elements for a user.
        primary: augmentColor({
            color: primary,
            name: 'primary'
        }),
        // The colors used to represent secondary interface elements for a user.
        secondary: augmentColor({
            color: secondary,
            name: 'secondary',
            mainShade: 'A400',
            lightShade: 'A200',
            darkShade: 'A700'
        }),
        // The colors used to represent interface elements that the user should be made aware of.
        error: augmentColor({
            color: error,
            name: 'error'
        }),
        // The colors used to represent potentially dangerous actions or important messages.
        warning: augmentColor({
            color: warning,
            name: 'warning'
        }),
        // The colors used to present information to the user that is neutral and not necessarily important.
        info: augmentColor({
            color: info,
            name: 'info'
        }),
        // The colors used to indicate the successful completion of an action that user triggered.
        success: augmentColor({
            color: success,
            name: 'success'
        }),
        // The grey colors.
        grey: colors_grey,
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold,
        // Takes a background color and returns the text color that maximizes the contrast.
        getContrastText,
        // Generate a rich color object.
        augmentColor,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset,
        // The light and dark mode object.
        ...modeHydrated
    }, other);
    return paletteOutput;
}

;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/cssVars/createGetCssVar.js
/**
 * The benefit of this function is to help developers get CSS var from theme without specifying the whole variable
 * and they does not need to remember the prefix (defined once).
 */
function createGetCssVar(prefix = '') {
  function appendVar(...vars) {
    if (!vars.length) {
      return '';
    }
    const value = vars[0];
    if (typeof value === 'string' && !value.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)) {
      return `, var(--${prefix ? `${prefix}-` : ''}${value}${appendVar(...vars.slice(1))})`;
    }
    return `, ${value}`;
  }

  // AdditionalVars makes `getCssVar` less strict, so it can be use like this `getCssVar('non-mui-variable')` without type error.
  const getCssVar = (field, ...fallbacks) => {
    return `var(--${prefix ? `${prefix}-` : ''}${field}${appendVar(...fallbacks)})`;
  };
  return getCssVar;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/createTheme/createSpacing.js
var createSpacing = __webpack_require__(38148);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/spacing/spacing.js + 1 modules
var spacing = __webpack_require__(48004);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/cssVars/prepareTypographyVars.js
function prepareTypographyVars(typography) {
  const vars = {};
  const entries = Object.entries(typography);
  entries.forEach(entry => {
    const [key, value] = entry;
    if (typeof value === 'object') {
      vars[key] = `${value.fontStyle ? `${value.fontStyle} ` : ''}${value.fontVariant ? `${value.fontVariant} ` : ''}${value.fontWeight ? `${value.fontWeight} ` : ''}${value.fontStretch ? `${value.fontStretch} ` : ''}${value.fontSize || ''}${value.lineHeight ? `/${value.lineHeight} ` : ''}${value.fontFamily || ''}`;
    }
  });
  return vars;
}
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/cssVars/cssVarsParser.js
/**
 * This function create an object from keys, value and then assign to target
 *
 * @param {Object} obj : the target object to be assigned
 * @param {string[]} keys
 * @param {string | number} value
 *
 * @example
 * const source = {}
 * assignNestedKeys(source, ['palette', 'primary'], 'var(--palette-primary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)' } }
 *
 * @example
 * const source = { palette: { primary: 'var(--palette-primary)' } }
 * assignNestedKeys(source, ['palette', 'secondary'], 'var(--palette-secondary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)', secondary: 'var(--palette-secondary)' } }
 */
const assignNestedKeys = (obj, keys, value, arrayKeys = []) => {
  let temp = obj;
  keys.forEach((k, index) => {
    if (index === keys.length - 1) {
      if (Array.isArray(temp)) {
        temp[Number(k)] = value;
      } else if (temp && typeof temp === 'object') {
        temp[k] = value;
      }
    } else if (temp && typeof temp === 'object') {
      if (!temp[k]) {
        temp[k] = arrayKeys.includes(k) ? [] : {};
      }
      temp = temp[k];
    }
  });
};

/**
 *
 * @param {Object} obj : source object
 * @param {Function} callback : a function that will be called when
 *                   - the deepest key in source object is reached
 *                   - the value of the deepest key is NOT `undefined` | `null`
 *
 * @example
 * walkObjectDeep({ palette: { primary: { main: '#000000' } } }, console.log)
 * // ['palette', 'primary', 'main'] '#000000'
 */
const walkObjectDeep = (obj, callback, shouldSkipPaths) => {
  function recurse(object, parentKeys = [], arrayKeys = []) {
    Object.entries(object).forEach(([key, value]) => {
      if (!shouldSkipPaths || shouldSkipPaths && !shouldSkipPaths([...parentKeys, key])) {
        if (value !== undefined && value !== null) {
          if (typeof value === 'object' && Object.keys(value).length > 0) {
            recurse(value, [...parentKeys, key], Array.isArray(value) ? [...arrayKeys, key] : arrayKeys);
          } else {
            callback([...parentKeys, key], value, arrayKeys);
          }
        }
      }
    });
  }
  recurse(obj);
};
const getCssValue = (keys, value) => {
  if (typeof value === 'number') {
    if (['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some(prop => keys.includes(prop))) {
      // CSS property that are unitless
      return value;
    }
    const lastKey = keys[keys.length - 1];
    if (lastKey.toLowerCase().includes('opacity')) {
      // opacity values are unitless
      return value;
    }
    return `${value}px`;
  }
  return value;
};

/**
 * a function that parse theme and return { css, vars }
 *
 * @param {Object} theme
 * @param {{
 *  prefix?: string,
 *  shouldSkipGeneratingVar?: (objectPathKeys: Array<string>, value: string | number) => boolean
 * }} options.
 *  `prefix`: The prefix of the generated CSS variables. This function does not change the value.
 *
 * @returns {{ css: Object, vars: Object }} `css` is the stylesheet, `vars` is an object to get css variable (same structure as theme).
 *
 * @example
 * const { css, vars } = parser({
 *   fontSize: 12,
 *   lineHeight: 1.2,
 *   palette: { primary: { 500: 'var(--color)' } }
 * }, { prefix: 'foo' })
 *
 * console.log(css) // { '--foo-fontSize': '12px', '--foo-lineHeight': 1.2, '--foo-palette-primary-500': 'var(--color)' }
 * console.log(vars) // { fontSize: 'var(--foo-fontSize)', lineHeight: 'var(--foo-lineHeight)', palette: { primary: { 500: 'var(--foo-palette-primary-500)' } } }
 */
function cssVarsParser(theme, options) {
  const {
    prefix,
    shouldSkipGeneratingVar
  } = options || {};
  const css = {};
  const vars = {};
  const varsWithDefaults = {};
  walkObjectDeep(theme, (keys, value, arrayKeys) => {
    if (typeof value === 'string' || typeof value === 'number') {
      if (!shouldSkipGeneratingVar || !shouldSkipGeneratingVar(keys, value)) {
        // only create css & var if `shouldSkipGeneratingVar` return false
        const cssVar = `--${prefix ? `${prefix}-` : ''}${keys.join('-')}`;
        const resolvedValue = getCssValue(keys, value);
        Object.assign(css, {
          [cssVar]: resolvedValue
        });
        assignNestedKeys(vars, keys, `var(${cssVar})`, arrayKeys);
        assignNestedKeys(varsWithDefaults, keys, `var(${cssVar}, ${resolvedValue})`, arrayKeys);
      }
    }
  }, keys => keys[0] === 'vars' // skip 'vars/*' paths
  );
  return {
    css,
    vars,
    varsWithDefaults
  };
}
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/cssVars/prepareCssVars.js


function prepareCssVars(theme, parserConfig = {}) {
  const {
    getSelector = defaultGetSelector,
    disableCssColorScheme,
    colorSchemeSelector: selector
  } = parserConfig;
  // @ts-ignore - ignore components do not exist
  const {
    colorSchemes = {},
    components,
    defaultColorScheme = 'light',
    ...otherTheme
  } = theme;
  const {
    vars: rootVars,
    css: rootCss,
    varsWithDefaults: rootVarsWithDefaults
  } = cssVarsParser(otherTheme, parserConfig);
  let themeVars = rootVarsWithDefaults;
  const colorSchemesMap = {};
  const {
    [defaultColorScheme]: defaultScheme,
    ...otherColorSchemes
  } = colorSchemes;
  Object.entries(otherColorSchemes || {}).forEach(([key, scheme]) => {
    const {
      vars,
      css,
      varsWithDefaults
    } = cssVarsParser(scheme, parserConfig);
    themeVars = (0,deepmerge/* default */.A)(themeVars, varsWithDefaults);
    colorSchemesMap[key] = {
      css,
      vars
    };
  });
  if (defaultScheme) {
    // default color scheme vars should be merged last to set as default
    const {
      css,
      vars,
      varsWithDefaults
    } = cssVarsParser(defaultScheme, parserConfig);
    themeVars = (0,deepmerge/* default */.A)(themeVars, varsWithDefaults);
    colorSchemesMap[defaultColorScheme] = {
      css,
      vars
    };
  }
  function defaultGetSelector(colorScheme, cssObject) {
    let rule = selector;
    if (selector === 'class') {
      rule = '.%s';
    }
    if (selector === 'data') {
      rule = '[data-%s]';
    }
    if (selector?.startsWith('data-') && !selector.includes('%s')) {
      // 'data-joy-color-scheme' -> '[data-joy-color-scheme="%s"]'
      rule = `[${selector}="%s"]`;
    }
    if (colorScheme) {
      if (rule === 'media') {
        if (theme.defaultColorScheme === colorScheme) {
          return ':root';
        }
        const mode = colorSchemes[colorScheme]?.palette?.mode || colorScheme;
        return {
          [`@media (prefers-color-scheme: ${mode})`]: {
            ':root': cssObject
          }
        };
      }
      if (rule) {
        if (theme.defaultColorScheme === colorScheme) {
          return `:root, ${rule.replace('%s', String(colorScheme))}`;
        }
        return rule.replace('%s', String(colorScheme));
      }
    }
    return ':root';
  }
  const generateThemeVars = () => {
    let vars = {
      ...rootVars
    };
    Object.entries(colorSchemesMap).forEach(([, {
      vars: schemeVars
    }]) => {
      vars = (0,deepmerge/* default */.A)(vars, schemeVars);
    });
    return vars;
  };
  const generateStyleSheets = () => {
    const stylesheets = [];
    const colorScheme = theme.defaultColorScheme || 'light';
    function insertStyleSheet(key, css) {
      if (Object.keys(css).length) {
        stylesheets.push(typeof key === 'string' ? {
          [key]: {
            ...css
          }
        } : key);
      }
    }
    insertStyleSheet(getSelector(undefined, {
      ...rootCss
    }), rootCss);
    const {
      [colorScheme]: defaultSchemeVal,
      ...other
    } = colorSchemesMap;
    if (defaultSchemeVal) {
      // default color scheme has to come before other color schemes
      const {
        css
      } = defaultSchemeVal;
      const cssColorSheme = colorSchemes[colorScheme]?.palette?.mode;
      const finalCss = !disableCssColorScheme && cssColorSheme ? {
        colorScheme: cssColorSheme,
        ...css
      } : {
        ...css
      };
      insertStyleSheet(getSelector(colorScheme, {
        ...finalCss
      }), finalCss);
    }
    Object.entries(other).forEach(([key, {
      css
    }]) => {
      const cssColorSheme = colorSchemes[key]?.palette?.mode;
      const finalCss = !disableCssColorScheme && cssColorSheme ? {
        colorScheme: cssColorSheme,
        ...css
      } : {
        ...css
      };
      insertStyleSheet(getSelector(key, {
        ...finalCss
      }), finalCss);
    });
    return stylesheets;
  };
  return {
    vars: themeVars,
    generateThemeVars,
    generateStyleSheets
  };
}
/* harmony default export */ const cssVars_prepareCssVars = (prepareCssVars);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/cssVars/getColorSchemeSelector.js
/* eslint-disable import/prefer-default-export */
function createGetColorSchemeSelector(selector) {
  return function getColorSchemeSelector(colorScheme) {
    if (selector === 'media') {
      if (false) {}
      return `@media (prefers-color-scheme: ${colorScheme})`;
    }
    if (selector) {
      if (selector.startsWith('data-') && !selector.includes('%s')) {
        return `[${selector}="${colorScheme}"] &`;
      }
      if (selector === 'class') {
        return `.${colorScheme} &`;
      }
      if (selector === 'data') {
        return `[data-${colorScheme}] &`;
      }
      return `${selector.replace('%s', colorScheme)} &`;
    }
    return '&';
  };
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js + 5 modules
var defaultSxConfig = __webpack_require__(54512);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
var styleFunctionSx = __webpack_require__(24748);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/createTheme/createTheme.js + 3 modules
var createTheme = __webpack_require__(20185);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/createMixins.js
function createMixins(breakpoints, mixins) {
    return {
        toolbar: {
            minHeight: 56,
            [breakpoints.up('xs')]: {
                '@media (orientation: landscape)': {
                    minHeight: 48
                }
            },
            [breakpoints.up('sm')]: {
                minHeight: 64
            }
        },
        ...mixins
    };
}

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/createTypography.js

function round(value) {
    return Math.round(value * 1e5) / 1e5;
}
const caseAllCaps = {
    textTransform: 'uppercase'
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://m2.material.io/design/typography/the-type-system.html}
 * @see @link{https://m2.material.io/design/typography/understanding-typography.html}
 */ function createTypography(palette, typography) {
    const { fontFamily = defaultFontFamily, // The default font size of the Material Specification.
    fontSize = 14, // px
    fontWeightLight = 300, fontWeightRegular = 400, fontWeightMedium = 500, fontWeightBold = 700, // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16, // Apply the CSS properties to all the variants.
    allVariants, pxToRem: pxToRem2, ...other } = typeof typography === 'function' ? typography(palette) : typography;
    if (false) {}
    const coef = fontSize / 14;
    const pxToRem = pxToRem2 || ((size)=>"".concat(size / htmlFontSize * coef, "rem"));
    const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing)=>({
            fontFamily,
            fontWeight,
            fontSize: pxToRem(size),
            // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
            lineHeight,
            // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
            // across font-families can cause issues with the kerning.
            ...fontFamily === defaultFontFamily ? {
                letterSpacing: "".concat(round(letterSpacing / size), "em")
            } : {},
            ...casing,
            ...allVariants
        });
    const variants = {
        h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
        h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
        h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
        h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
        h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
        h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
        subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
        subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
        body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
        body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
        button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
        caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
        overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
        // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
        inherit: {
            fontFamily: 'inherit',
            fontWeight: 'inherit',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            letterSpacing: 'inherit'
        }
    };
    return (0,deepmerge/* default */.A)({
        htmlFontSize,
        pxToRem,
        fontFamily,
        fontSize,
        fontWeightLight,
        fontWeightRegular,
        fontWeightMedium,
        fontWeightBold,
        ...variants
    }, other, {
        clone: false // No need to clone deep
    });
}

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/shadows.js
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;
function createShadow() {
    for(var _len = arguments.length, px = new Array(_len), _key = 0; _key < _len; _key++){
        px[_key] = arguments[_key];
    }
    return [
        "".concat(px[0], "px ").concat(px[1], "px ").concat(px[2], "px ").concat(px[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"),
        "".concat(px[4], "px ").concat(px[5], "px ").concat(px[6], "px ").concat(px[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"),
        "".concat(px[8], "px ").concat(px[9], "px ").concat(px[10], "px ").concat(px[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")
    ].join(',');
}
// Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
const shadows = [
    'none',
    createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
];
/* harmony default export */ const styles_shadows = (shadows);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/createTransitions.js
// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
const easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};
// Follow https://m2.material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing
const duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
};
function formatMs(milliseconds) {
    return "".concat(Math.round(milliseconds), "ms");
}
function getAutoHeightDuration(height) {
    if (!height) {
        return 0;
    }
    const constant = height / 36;
    // https://www.desmos.com/calculator/vbrp3ggqet
    return Math.min(Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10), 3000);
}
function createTransitions(inputTransitions) {
    const mergedEasing = {
        ...easing,
        ...inputTransitions.easing
    };
    const mergedDuration = {
        ...duration,
        ...inputTransitions.duration
    };
    const create = function() {
        let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [
            'all'
        ], options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const { duration: durationOption = mergedDuration.standard, easing: easingOption = mergedEasing.easeInOut, delay = 0, ...other } = options;
        if (false) {}
        return (Array.isArray(props) ? props : [
            props
        ]).map((animatedProp)=>"".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay))).join(',');
    };
    return {
        getAutoHeightDuration,
        create,
        ...inputTransitions,
        easing: mergedEasing,
        duration: mergedDuration
    };
}

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/zIndex.js
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
const zIndex = {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
};
/* harmony default export */ const styles_zIndex = (zIndex);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/stringifyTheme.js
/* eslint-disable import/prefer-default-export */ 
function isSerializable(val) {
    return (0,deepmerge/* isPlainObject */.Q)(val) || typeof val === 'undefined' || typeof val === 'string' || typeof val === 'boolean' || typeof val === 'number' || Array.isArray(val);
}
/**
 * `baseTheme` usually comes from `createTheme()` or `extendTheme()`.
 *
 * This function is intended to be used with zero-runtime CSS-in-JS like Pigment CSS
 * For example, in a Next.js project:
 *
 * ```js
 * // next.config.js
 * const { extendTheme } = require('@mui/material/styles');
 *
 * const theme = extendTheme();
 * // `.toRuntimeSource` is Pigment CSS specific to create a theme that is available at runtime.
 * theme.toRuntimeSource = stringifyTheme;
 *
 * module.exports = withPigment({
 *  theme,
 * });
 * ```
 */ function stringifyTheme() {
    let baseTheme = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const serializableTheme = {
        ...baseTheme
    };
    function serializeTheme(object) {
        const array = Object.entries(object);
        // eslint-disable-next-line no-plusplus
        for(let index = 0; index < array.length; index++){
            const [key, value] = array[index];
            if (!isSerializable(value) || key.startsWith('unstable_')) {
                delete object[key];
            } else if ((0,deepmerge/* isPlainObject */.Q)(value)) {
                object[key] = {
                    ...value
                };
                serializeTheme(object[key]);
            }
        }
    }
    serializeTheme(serializableTheme);
    return "import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';\n\nconst theme = ".concat(JSON.stringify(serializableTheme, null, 2), ";\n\ntheme.breakpoints = createBreakpoints(theme.breakpoints || {});\ntheme.transitions = createTransitions(theme.transitions || {});\n\nexport default theme;");
}

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/createThemeNoVars.js












function createThemeNoVars() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    const { breakpoints: breakpointsInput, mixins: mixinsInput = {}, spacing: spacingInput, palette: paletteInput = {}, transitions: transitionsInput = {}, typography: typographyInput = {}, shape: shapeInput, ...other } = options;
    if (options.vars) {
        throw new Error( false ? 0 : (0,formatMuiErrorMessage/* default */.A)(20));
    }
    const palette = createPalette(paletteInput);
    const systemTheme = (0,createTheme/* default */.A)(options);
    let muiTheme = (0,deepmerge/* default */.A)(systemTheme, {
        mixins: createMixins(systemTheme.breakpoints, mixinsInput),
        palette,
        // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
        shadows: styles_shadows.slice(),
        typography: createTypography(palette, typographyInput),
        transitions: createTransitions(transitionsInput),
        zIndex: {
            ...styles_zIndex
        }
    });
    muiTheme = (0,deepmerge/* default */.A)(muiTheme, other);
    muiTheme = args.reduce((acc, argument)=>(0,deepmerge/* default */.A)(acc, argument), muiTheme);
    if (false) {}
    muiTheme.unstable_sxConfig = {
        ...defaultSxConfig/* default */.A,
        ...other === null || other === void 0 ? void 0 : other.unstable_sxConfig
    };
    muiTheme.unstable_sx = function sx(props) {
        return (0,styleFunctionSx/* default */.A)({
            sx: props,
            theme: this
        });
    };
    muiTheme.toRuntimeSource = stringifyTheme; // for Pigment CSS integration
    return muiTheme;
}
let warnedOnce = false;
function createMuiTheme() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    if (false) {}
    return createThemeNoVars(...args);
}
/* harmony default export */ const styles_createThemeNoVars = (createThemeNoVars);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/getOverlayAlpha.js
var getOverlayAlpha = __webpack_require__(1506);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/createColorScheme.js


const defaultDarkOverlays = [
    ...Array(25)
].map((_, index)=>{
    if (index === 0) {
        return 'none';
    }
    const overlay = (0,getOverlayAlpha/* default */.A)(index);
    return "linear-gradient(rgba(255 255 255 / ".concat(overlay, "), rgba(255 255 255 / ").concat(overlay, "))");
});
function getOpacity(mode) {
    return {
        inputPlaceholder: mode === 'dark' ? 0.5 : 0.42,
        inputUnderline: mode === 'dark' ? 0.7 : 0.42,
        switchTrackDisabled: mode === 'dark' ? 0.2 : 0.12,
        switchTrack: mode === 'dark' ? 0.3 : 0.38
    };
}
function getOverlays(mode) {
    return mode === 'dark' ? defaultDarkOverlays : [];
}
function createColorScheme(options) {
    const { palette: paletteInput = {
        mode: 'light'
    }, // need to cast to avoid module augmentation test
    opacity, overlays, ...rest } = options;
    const palette = createPalette(paletteInput);
    return {
        palette,
        opacity: {
            ...getOpacity(palette.mode),
            ...opacity
        },
        overlays: overlays || getOverlays(palette.mode),
        ...rest
    };
}

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/shouldSkipGeneratingVar.js
function shouldSkipGeneratingVar_shouldSkipGeneratingVar(keys) {
    var _keys_;
    return !!keys[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!keys[0].match(/sxConfig$/) || // ends with sxConfig
    keys[0] === 'palette' && !!((_keys_ = keys[1]) === null || _keys_ === void 0 ? void 0 : _keys_.match(/(mode|contrastThreshold|tonalOffset)/));
}

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/excludeVariablesFromRoot.js
/**
 * @internal These variables should not appear in the :root stylesheet when the `defaultColorScheme="dark"`
 */ const excludeVariablesFromRoot = (cssVarPrefix)=>[
        ...[
            ...Array(25)
        ].map((_, index)=>"--".concat(cssVarPrefix ? "".concat(cssVarPrefix, "-") : '', "overlays-").concat(index)),
        "--".concat(cssVarPrefix ? "".concat(cssVarPrefix, "-") : '', "palette-AppBar-darkBg"),
        "--".concat(cssVarPrefix ? "".concat(cssVarPrefix, "-") : '', "palette-AppBar-darkColor")
    ];
/* harmony default export */ const styles_excludeVariablesFromRoot = (excludeVariablesFromRoot);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/createGetSelector.js

/* harmony default export */ const createGetSelector = ((theme)=>(colorScheme, css)=>{
        const root = theme.rootSelector || ':root';
        const selector = theme.colorSchemeSelector;
        let rule = selector;
        if (selector === 'class') {
            rule = '.%s';
        }
        if (selector === 'data') {
            rule = '[data-%s]';
        }
        if ((selector === null || selector === void 0 ? void 0 : selector.startsWith('data-')) && !selector.includes('%s')) {
            // 'data-mui-color-scheme' -> '[data-mui-color-scheme="%s"]'
            rule = "[".concat(selector, '="%s"]');
        }
        if (theme.defaultColorScheme === colorScheme) {
            if (colorScheme === 'dark') {
                const excludedVariables = {};
                styles_excludeVariablesFromRoot(theme.cssVarPrefix).forEach((cssVar)=>{
                    excludedVariables[cssVar] = css[cssVar];
                    delete css[cssVar];
                });
                if (rule === 'media') {
                    return {
                        [root]: css,
                        ["@media (prefers-color-scheme: dark)"]: {
                            [root]: excludedVariables
                        }
                    };
                }
                if (rule) {
                    return {
                        [rule.replace('%s', colorScheme)]: excludedVariables,
                        ["".concat(root, ", ").concat(rule.replace('%s', colorScheme))]: css
                    };
                }
                return {
                    [root]: {
                        ...css,
                        ...excludedVariables
                    }
                };
            }
            if (rule && rule !== 'media') {
                return "".concat(root, ", ").concat(rule.replace('%s', String(colorScheme)));
            }
        } else if (colorScheme) {
            if (rule === 'media') {
                return {
                    ["@media (prefers-color-scheme: ".concat(String(colorScheme), ")")]: {
                        [root]: css
                    }
                };
            }
            if (rule) {
                return rule.replace('%s', String(colorScheme));
            }
        }
        return root;
    });

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/createThemeWithVars.js












function assignNode(obj, keys) {
    keys.forEach((k)=>{
        if (!obj[k]) {
            obj[k] = {};
        }
    });
}
function setColor(obj, key, defaultValue) {
    if (!obj[key] && defaultValue) {
        obj[key] = defaultValue;
    }
}
function toRgb(color) {
    if (typeof color !== 'string' || !color.startsWith('hsl')) {
        return color;
    }
    return (0,colorManipulator/* hslToRgb */.YL)(color);
}
function setColorChannel(obj, key) {
    if (!("".concat(key, "Channel") in obj)) {
        // custom channel token is not provided, generate one.
        // if channel token can't be generated, show a warning.
        obj["".concat(key, "Channel")] = (0,colorManipulator/* private_safeColorChannel */.Me)(toRgb(obj[key]), "MUI: Can't create `palette.".concat(key, "Channel` because `palette.").concat(key, "` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().") + '\n' + "To suppress this warning, you need to explicitly provide the `palette.".concat(key, 'Channel` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.'));
    }
}
function getSpacingVal(spacingInput) {
    if (typeof spacingInput === 'number') {
        return "".concat(spacingInput, "px");
    }
    if (typeof spacingInput === 'string' || typeof spacingInput === 'function' || Array.isArray(spacingInput)) {
        return spacingInput;
    }
    return '8px';
}
const silent = (fn)=>{
    try {
        return fn();
    } catch (error) {
    // ignore error
    }
    return undefined;
};
const createThemeWithVars_createGetCssVar = function() {
    let cssVarPrefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'mui';
    return createGetCssVar(cssVarPrefix);
};
function attachColorScheme(colorSchemes, scheme, restTheme, colorScheme) {
    if (!scheme) {
        return undefined;
    }
    scheme = scheme === true ? {} : scheme;
    const mode = colorScheme === 'dark' ? 'dark' : 'light';
    if (!restTheme) {
        colorSchemes[colorScheme] = createColorScheme({
            ...scheme,
            palette: {
                mode,
                ...scheme === null || scheme === void 0 ? void 0 : scheme.palette
            }
        });
        return undefined;
    }
    const { palette, ...muiTheme } = styles_createThemeNoVars({
        ...restTheme,
        palette: {
            mode,
            ...scheme === null || scheme === void 0 ? void 0 : scheme.palette
        }
    });
    colorSchemes[colorScheme] = {
        ...scheme,
        palette,
        opacity: {
            ...getOpacity(mode),
            ...scheme === null || scheme === void 0 ? void 0 : scheme.opacity
        },
        overlays: (scheme === null || scheme === void 0 ? void 0 : scheme.overlays) || getOverlays(mode)
    };
    return muiTheme;
}
/**
 * A default `createThemeWithVars` comes with a single color scheme, either `light` or `dark` based on the `defaultColorScheme`.
 * This is better suited for apps that only need a single color scheme.
 *
 * To enable built-in `light` and `dark` color schemes, either:
 * 1. provide a `colorSchemeSelector` to define how the color schemes will change.
 * 2. provide `colorSchemes.dark` will set `colorSchemeSelector: 'media'` by default.
 */ function createThemeWithVars() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    const { colorSchemes: colorSchemesInput = {
        light: true
    }, defaultColorScheme: defaultColorSchemeInput, disableCssColorScheme = false, cssVarPrefix = 'mui', shouldSkipGeneratingVar = shouldSkipGeneratingVar_shouldSkipGeneratingVar, colorSchemeSelector: selector = colorSchemesInput.light && colorSchemesInput.dark ? 'media' : undefined, rootSelector = ':root', ...input } = options;
    const firstColorScheme = Object.keys(colorSchemesInput)[0];
    const defaultColorScheme = defaultColorSchemeInput || (colorSchemesInput.light && firstColorScheme !== 'light' ? 'light' : firstColorScheme);
    const getCssVar = createThemeWithVars_createGetCssVar(cssVarPrefix);
    const { [defaultColorScheme]: defaultSchemeInput, light: builtInLight, dark: builtInDark, ...customColorSchemes } = colorSchemesInput;
    const colorSchemes = {
        ...customColorSchemes
    };
    let defaultScheme = defaultSchemeInput;
    // For built-in light and dark color schemes, ensure that the value is valid if they are the default color scheme.
    if (defaultColorScheme === 'dark' && !('dark' in colorSchemesInput) || defaultColorScheme === 'light' && !('light' in colorSchemesInput)) {
        defaultScheme = true;
    }
    if (!defaultScheme) {
        throw new Error( false ? 0 : (0,formatMuiErrorMessage/* default */.A)(21, defaultColorScheme));
    }
    // Create the palette for the default color scheme, either `light`, `dark`, or custom color scheme.
    const muiTheme = attachColorScheme(colorSchemes, defaultScheme, input, defaultColorScheme);
    if (builtInLight && !colorSchemes.light) {
        attachColorScheme(colorSchemes, builtInLight, undefined, 'light');
    }
    if (builtInDark && !colorSchemes.dark) {
        attachColorScheme(colorSchemes, builtInDark, undefined, 'dark');
    }
    let theme = {
        defaultColorScheme,
        ...muiTheme,
        cssVarPrefix,
        colorSchemeSelector: selector,
        rootSelector,
        getCssVar,
        colorSchemes,
        font: {
            ...prepareTypographyVars(muiTheme.typography),
            ...muiTheme.font
        },
        spacing: getSpacingVal(input.spacing)
    };
    Object.keys(theme.colorSchemes).forEach((key)=>{
        const palette = theme.colorSchemes[key].palette;
        const setCssVarColor = (cssVar)=>{
            const tokens = cssVar.split('-');
            const color = tokens[1];
            const colorToken = tokens[2];
            return getCssVar(cssVar, palette[color][colorToken]);
        };
        // attach black & white channels to common node
        if (palette.mode === 'light') {
            setColor(palette.common, 'background', '#fff');
            setColor(palette.common, 'onBackground', '#000');
        }
        if (palette.mode === 'dark') {
            setColor(palette.common, 'background', '#000');
            setColor(palette.common, 'onBackground', '#fff');
        }
        // assign component variables
        assignNode(palette, [
            'Alert',
            'AppBar',
            'Avatar',
            'Button',
            'Chip',
            'FilledInput',
            'LinearProgress',
            'Skeleton',
            'Slider',
            'SnackbarContent',
            'SpeedDialAction',
            'StepConnector',
            'StepContent',
            'Switch',
            'TableCell',
            'Tooltip'
        ]);
        if (palette.mode === 'light') {
            setColor(palette.Alert, 'errorColor', (0,colorManipulator/* private_safeDarken */.Nd)(palette.error.light, 0.6));
            setColor(palette.Alert, 'infoColor', (0,colorManipulator/* private_safeDarken */.Nd)(palette.info.light, 0.6));
            setColor(palette.Alert, 'successColor', (0,colorManipulator/* private_safeDarken */.Nd)(palette.success.light, 0.6));
            setColor(palette.Alert, 'warningColor', (0,colorManipulator/* private_safeDarken */.Nd)(palette.warning.light, 0.6));
            setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-main'));
            setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-main'));
            setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-main'));
            setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-main'));
            setColor(palette.Alert, 'errorFilledColor', silent(()=>palette.getContrastText(palette.error.main)));
            setColor(palette.Alert, 'infoFilledColor', silent(()=>palette.getContrastText(palette.info.main)));
            setColor(palette.Alert, 'successFilledColor', silent(()=>palette.getContrastText(palette.success.main)));
            setColor(palette.Alert, 'warningFilledColor', silent(()=>palette.getContrastText(palette.warning.main)));
            setColor(palette.Alert, 'errorStandardBg', (0,colorManipulator/* private_safeLighten */.j4)(palette.error.light, 0.9));
            setColor(palette.Alert, 'infoStandardBg', (0,colorManipulator/* private_safeLighten */.j4)(palette.info.light, 0.9));
            setColor(palette.Alert, 'successStandardBg', (0,colorManipulator/* private_safeLighten */.j4)(palette.success.light, 0.9));
            setColor(palette.Alert, 'warningStandardBg', (0,colorManipulator/* private_safeLighten */.j4)(palette.warning.light, 0.9));
            setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
            setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
            setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
            setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
            setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-100'));
            setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-400'));
            setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-300'));
            setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-A100'));
            setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-400'));
            setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-700'));
            setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-700'));
            setColor(palette.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)');
            setColor(palette.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)');
            setColor(palette.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)');
            setColor(palette.LinearProgress, 'primaryBg', (0,colorManipulator/* private_safeLighten */.j4)(palette.primary.main, 0.62));
            setColor(palette.LinearProgress, 'secondaryBg', (0,colorManipulator/* private_safeLighten */.j4)(palette.secondary.main, 0.62));
            setColor(palette.LinearProgress, 'errorBg', (0,colorManipulator/* private_safeLighten */.j4)(palette.error.main, 0.62));
            setColor(palette.LinearProgress, 'infoBg', (0,colorManipulator/* private_safeLighten */.j4)(palette.info.main, 0.62));
            setColor(palette.LinearProgress, 'successBg', (0,colorManipulator/* private_safeLighten */.j4)(palette.success.main, 0.62));
            setColor(palette.LinearProgress, 'warningBg', (0,colorManipulator/* private_safeLighten */.j4)(palette.warning.main, 0.62));
            setColor(palette.Skeleton, 'bg', "rgba(".concat(setCssVarColor('palette-text-primaryChannel'), " / 0.11)"));
            setColor(palette.Slider, 'primaryTrack', (0,colorManipulator/* private_safeLighten */.j4)(palette.primary.main, 0.62));
            setColor(palette.Slider, 'secondaryTrack', (0,colorManipulator/* private_safeLighten */.j4)(palette.secondary.main, 0.62));
            setColor(palette.Slider, 'errorTrack', (0,colorManipulator/* private_safeLighten */.j4)(palette.error.main, 0.62));
            setColor(palette.Slider, 'infoTrack', (0,colorManipulator/* private_safeLighten */.j4)(palette.info.main, 0.62));
            setColor(palette.Slider, 'successTrack', (0,colorManipulator/* private_safeLighten */.j4)(palette.success.main, 0.62));
            setColor(palette.Slider, 'warningTrack', (0,colorManipulator/* private_safeLighten */.j4)(palette.warning.main, 0.62));
            const snackbarContentBackground = (0,colorManipulator/* private_safeEmphasize */.Y9)(palette.background.default, 0.8);
            setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
            setColor(palette.SnackbarContent, 'color', silent(()=>palette.getContrastText(snackbarContentBackground)));
            setColor(palette.SpeedDialAction, 'fabHoverBg', (0,colorManipulator/* private_safeEmphasize */.Y9)(palette.background.paper, 0.15));
            setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-400'));
            setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-400'));
            setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-common-white'));
            setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-100'));
            setColor(palette.Switch, 'primaryDisabledColor', (0,colorManipulator/* private_safeLighten */.j4)(palette.primary.main, 0.62));
            setColor(palette.Switch, 'secondaryDisabledColor', (0,colorManipulator/* private_safeLighten */.j4)(palette.secondary.main, 0.62));
            setColor(palette.Switch, 'errorDisabledColor', (0,colorManipulator/* private_safeLighten */.j4)(palette.error.main, 0.62));
            setColor(palette.Switch, 'infoDisabledColor', (0,colorManipulator/* private_safeLighten */.j4)(palette.info.main, 0.62));
            setColor(palette.Switch, 'successDisabledColor', (0,colorManipulator/* private_safeLighten */.j4)(palette.success.main, 0.62));
            setColor(palette.Switch, 'warningDisabledColor', (0,colorManipulator/* private_safeLighten */.j4)(palette.warning.main, 0.62));
            setColor(palette.TableCell, 'border', (0,colorManipulator/* private_safeLighten */.j4)((0,colorManipulator/* private_safeAlpha */.Cg)(palette.divider, 1), 0.88));
            setColor(palette.Tooltip, 'bg', (0,colorManipulator/* private_safeAlpha */.Cg)(palette.grey[700], 0.92));
        }
        if (palette.mode === 'dark') {
            setColor(palette.Alert, 'errorColor', (0,colorManipulator/* private_safeLighten */.j4)(palette.error.light, 0.6));
            setColor(palette.Alert, 'infoColor', (0,colorManipulator/* private_safeLighten */.j4)(palette.info.light, 0.6));
            setColor(palette.Alert, 'successColor', (0,colorManipulator/* private_safeLighten */.j4)(palette.success.light, 0.6));
            setColor(palette.Alert, 'warningColor', (0,colorManipulator/* private_safeLighten */.j4)(palette.warning.light, 0.6));
            setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-dark'));
            setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-dark'));
            setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-dark'));
            setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-dark'));
            setColor(palette.Alert, 'errorFilledColor', silent(()=>palette.getContrastText(palette.error.dark)));
            setColor(palette.Alert, 'infoFilledColor', silent(()=>palette.getContrastText(palette.info.dark)));
            setColor(palette.Alert, 'successFilledColor', silent(()=>palette.getContrastText(palette.success.dark)));
            setColor(palette.Alert, 'warningFilledColor', silent(()=>palette.getContrastText(palette.warning.dark)));
            setColor(palette.Alert, 'errorStandardBg', (0,colorManipulator/* private_safeDarken */.Nd)(palette.error.light, 0.9));
            setColor(palette.Alert, 'infoStandardBg', (0,colorManipulator/* private_safeDarken */.Nd)(palette.info.light, 0.9));
            setColor(palette.Alert, 'successStandardBg', (0,colorManipulator/* private_safeDarken */.Nd)(palette.success.light, 0.9));
            setColor(palette.Alert, 'warningStandardBg', (0,colorManipulator/* private_safeDarken */.Nd)(palette.warning.light, 0.9));
            setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
            setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
            setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
            setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
            setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-900'));
            setColor(palette.AppBar, 'darkBg', setCssVarColor('palette-background-paper')); // specific for dark mode
            setColor(palette.AppBar, 'darkColor', setCssVarColor('palette-text-primary')); // specific for dark mode
            setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-600'));
            setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-800'));
            setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-700'));
            setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-700'));
            setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-300'));
            setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-300'));
            setColor(palette.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)');
            setColor(palette.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)');
            setColor(palette.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)');
            setColor(palette.LinearProgress, 'primaryBg', (0,colorManipulator/* private_safeDarken */.Nd)(palette.primary.main, 0.5));
            setColor(palette.LinearProgress, 'secondaryBg', (0,colorManipulator/* private_safeDarken */.Nd)(palette.secondary.main, 0.5));
            setColor(palette.LinearProgress, 'errorBg', (0,colorManipulator/* private_safeDarken */.Nd)(palette.error.main, 0.5));
            setColor(palette.LinearProgress, 'infoBg', (0,colorManipulator/* private_safeDarken */.Nd)(palette.info.main, 0.5));
            setColor(palette.LinearProgress, 'successBg', (0,colorManipulator/* private_safeDarken */.Nd)(palette.success.main, 0.5));
            setColor(palette.LinearProgress, 'warningBg', (0,colorManipulator/* private_safeDarken */.Nd)(palette.warning.main, 0.5));
            setColor(palette.Skeleton, 'bg', "rgba(".concat(setCssVarColor('palette-text-primaryChannel'), " / 0.13)"));
            setColor(palette.Slider, 'primaryTrack', (0,colorManipulator/* private_safeDarken */.Nd)(palette.primary.main, 0.5));
            setColor(palette.Slider, 'secondaryTrack', (0,colorManipulator/* private_safeDarken */.Nd)(palette.secondary.main, 0.5));
            setColor(palette.Slider, 'errorTrack', (0,colorManipulator/* private_safeDarken */.Nd)(palette.error.main, 0.5));
            setColor(palette.Slider, 'infoTrack', (0,colorManipulator/* private_safeDarken */.Nd)(palette.info.main, 0.5));
            setColor(palette.Slider, 'successTrack', (0,colorManipulator/* private_safeDarken */.Nd)(palette.success.main, 0.5));
            setColor(palette.Slider, 'warningTrack', (0,colorManipulator/* private_safeDarken */.Nd)(palette.warning.main, 0.5));
            const snackbarContentBackground = (0,colorManipulator/* private_safeEmphasize */.Y9)(palette.background.default, 0.98);
            setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
            setColor(palette.SnackbarContent, 'color', silent(()=>palette.getContrastText(snackbarContentBackground)));
            setColor(palette.SpeedDialAction, 'fabHoverBg', (0,colorManipulator/* private_safeEmphasize */.Y9)(palette.background.paper, 0.15));
            setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-600'));
            setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-600'));
            setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-grey-300'));
            setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-600'));
            setColor(palette.Switch, 'primaryDisabledColor', (0,colorManipulator/* private_safeDarken */.Nd)(palette.primary.main, 0.55));
            setColor(palette.Switch, 'secondaryDisabledColor', (0,colorManipulator/* private_safeDarken */.Nd)(palette.secondary.main, 0.55));
            setColor(palette.Switch, 'errorDisabledColor', (0,colorManipulator/* private_safeDarken */.Nd)(palette.error.main, 0.55));
            setColor(palette.Switch, 'infoDisabledColor', (0,colorManipulator/* private_safeDarken */.Nd)(palette.info.main, 0.55));
            setColor(palette.Switch, 'successDisabledColor', (0,colorManipulator/* private_safeDarken */.Nd)(palette.success.main, 0.55));
            setColor(palette.Switch, 'warningDisabledColor', (0,colorManipulator/* private_safeDarken */.Nd)(palette.warning.main, 0.55));
            setColor(palette.TableCell, 'border', (0,colorManipulator/* private_safeDarken */.Nd)((0,colorManipulator/* private_safeAlpha */.Cg)(palette.divider, 1), 0.68));
            setColor(palette.Tooltip, 'bg', (0,colorManipulator/* private_safeAlpha */.Cg)(palette.grey[700], 0.92));
        }
        // MUI X - DataGrid needs this token.
        setColorChannel(palette.background, 'default');
        // added for consistency with the `background.default` token
        setColorChannel(palette.background, 'paper');
        setColorChannel(palette.common, 'background');
        setColorChannel(palette.common, 'onBackground');
        setColorChannel(palette, 'divider');
        Object.keys(palette).forEach((color)=>{
            const colors = palette[color];
            // The default palettes (primary, secondary, error, info, success, and warning) errors are handled by the above `createTheme(...)`.
            if (color !== 'tonalOffset' && colors && typeof colors === 'object') {
                // Silent the error for custom palettes.
                if (colors.main) {
                    setColor(palette[color], 'mainChannel', (0,colorManipulator/* private_safeColorChannel */.Me)(toRgb(colors.main)));
                }
                if (colors.light) {
                    setColor(palette[color], 'lightChannel', (0,colorManipulator/* private_safeColorChannel */.Me)(toRgb(colors.light)));
                }
                if (colors.dark) {
                    setColor(palette[color], 'darkChannel', (0,colorManipulator/* private_safeColorChannel */.Me)(toRgb(colors.dark)));
                }
                if (colors.contrastText) {
                    setColor(palette[color], 'contrastTextChannel', (0,colorManipulator/* private_safeColorChannel */.Me)(toRgb(colors.contrastText)));
                }
                if (color === 'text') {
                    // Text colors: text.primary, text.secondary
                    setColorChannel(palette[color], 'primary');
                    setColorChannel(palette[color], 'secondary');
                }
                if (color === 'action') {
                    // Action colors: action.active, action.selected
                    if (colors.active) {
                        setColorChannel(palette[color], 'active');
                    }
                    if (colors.selected) {
                        setColorChannel(palette[color], 'selected');
                    }
                }
            }
        });
    });
    theme = args.reduce((acc, argument)=>(0,deepmerge/* default */.A)(acc, argument), theme);
    const parserConfig = {
        prefix: cssVarPrefix,
        disableCssColorScheme,
        shouldSkipGeneratingVar,
        getSelector: createGetSelector(theme)
    };
    const { vars, generateThemeVars, generateStyleSheets } = cssVars_prepareCssVars(theme, parserConfig);
    theme.vars = vars;
    Object.entries(theme.colorSchemes[theme.defaultColorScheme]).forEach((param)=>{
        let [key, value] = param;
        theme[key] = value;
    });
    theme.generateThemeVars = generateThemeVars;
    theme.generateStyleSheets = generateStyleSheets;
    theme.generateSpacing = function generateSpacing() {
        return (0,createSpacing/* default */.A)(input.spacing, (0,spacing/* createUnarySpacing */.LX)(this));
    };
    theme.getColorSchemeSelector = createGetColorSchemeSelector(selector);
    theme.spacing = theme.generateSpacing();
    theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar;
    theme.unstable_sxConfig = {
        ...defaultSxConfig/* default */.A,
        ...input === null || input === void 0 ? void 0 : input.unstable_sxConfig
    };
    theme.unstable_sx = function sx(props) {
        return (0,styleFunctionSx/* default */.A)({
            sx: props,
            theme: this
        });
    };
    theme.toRuntimeSource = stringifyTheme; // for Pigment CSS integration
    return theme;
}

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/createTheme.js




// eslint-disable-next-line consistent-return
function createTheme_attachColorScheme(theme, scheme, colorScheme) {
    if (!theme.colorSchemes) {
        return undefined;
    }
    if (colorScheme) {
        theme.colorSchemes[scheme] = {
            ...colorScheme !== true && colorScheme,
            palette: createPalette({
                ...colorScheme === true ? {} : colorScheme.palette,
                mode: scheme
            }) // cast type to skip module augmentation test
        };
    }
}
/**
 * Generate a theme base on the options received.
 * @param options Takes an incomplete theme object and adds the missing parts.
 * @param args Deep merge the arguments with the about to be returned theme.
 * @returns A complete, ready-to-use theme object.
 */ function createTheme_createTheme() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    // cast type to skip module augmentation test
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    const { palette, cssVariables = false, colorSchemes: initialColorSchemes = !palette ? {
        light: true
    } : undefined, defaultColorScheme: initialDefaultColorScheme = palette === null || palette === void 0 ? void 0 : palette.mode, ...rest } = options;
    const defaultColorSchemeInput = initialDefaultColorScheme || 'light';
    const defaultScheme = initialColorSchemes === null || initialColorSchemes === void 0 ? void 0 : initialColorSchemes[defaultColorSchemeInput];
    const colorSchemesInput = {
        ...initialColorSchemes,
        ...palette ? {
            [defaultColorSchemeInput]: {
                ...typeof defaultScheme !== 'boolean' && defaultScheme,
                palette
            }
        } : undefined
    };
    if (cssVariables === false) {
        if (!('colorSchemes' in options)) {
            // Behaves exactly as v5
            return styles_createThemeNoVars(options, ...args);
        }
        let paletteOptions = palette;
        if (!('palette' in options)) {
            if (colorSchemesInput[defaultColorSchemeInput]) {
                if (colorSchemesInput[defaultColorSchemeInput] !== true) {
                    paletteOptions = colorSchemesInput[defaultColorSchemeInput].palette;
                } else if (defaultColorSchemeInput === 'dark') {
                    // @ts-ignore to prevent the module augmentation test from failing
                    paletteOptions = {
                        mode: 'dark'
                    };
                }
            }
        }
        const theme = styles_createThemeNoVars({
            ...options,
            palette: paletteOptions
        }, ...args);
        theme.defaultColorScheme = defaultColorSchemeInput;
        theme.colorSchemes = colorSchemesInput;
        if (theme.palette.mode === 'light') {
            theme.colorSchemes.light = {
                ...colorSchemesInput.light !== true && colorSchemesInput.light,
                palette: theme.palette
            };
            createTheme_attachColorScheme(theme, 'dark', colorSchemesInput.dark);
        }
        if (theme.palette.mode === 'dark') {
            theme.colorSchemes.dark = {
                ...colorSchemesInput.dark !== true && colorSchemesInput.dark,
                palette: theme.palette
            };
            createTheme_attachColorScheme(theme, 'light', colorSchemesInput.light);
        }
        return theme;
    }
    if (!palette && !('light' in colorSchemesInput) && defaultColorSchemeInput === 'light') {
        colorSchemesInput.light = true;
    }
    return createThemeWithVars({
        ...rest,
        colorSchemes: colorSchemesInput,
        defaultColorScheme: defaultColorSchemeInput,
        ...typeof cssVariables !== 'boolean' && cssVariables
    }, ...args);
}


/***/ }),

/***/ 34354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ composeClasses)
/* harmony export */ });
/* eslint no-restricted-syntax: 0, prefer-template: 0, guard-for-in: 0
   ---
   These rules are preventing the performance optimizations below.
 */

/**
 * Compose classes from multiple sources.
 *
 * @example
 * ```tsx
 * const slots = {
 *  root: ['root', 'primary'],
 *  label: ['label'],
 * };
 *
 * const getUtilityClass = (slot) => `MuiButton-${slot}`;
 *
 * const classes = {
 *   root: 'my-root-class',
 * };
 *
 * const output = composeClasses(slots, getUtilityClass, classes);
 * // {
 * //   root: 'MuiButton-root MuiButton-primary my-root-class',
 * //   label: 'MuiButton-label',
 * // }
 * ```
 *
 * @param slots a list of classes for each possible slot
 * @param getUtilityClass a function to resolve the class based on the slot name
 * @param classes the input classes from props
 * @returns the resolved classes for all slots
 */
function composeClasses(slots, getUtilityClass, classes = undefined) {
  const output = {};
  for (const slotName in slots) {
    const slot = slots[slotName];
    let buffer = '';
    let start = true;
    for (let i = 0; i < slot.length; i += 1) {
      const value = slot[i];
      if (value) {
        buffer += (start === true ? '' : ' ') + getUtilityClass(value);
        start = false;
        if (classes && classes[value]) {
          buffer += ' ' + classes[value];
        }
      }
    }
    output[slotName] = buffer;
  }
  return output;
}

/***/ }),

/***/ 34480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ formatMuiErrorMessage)
/* harmony export */ });
/**
 * WARNING: Don't import this directly. It's imported by the code generated by
 * `@mui/interal-babel-plugin-minify-errors`. Make sure to always use string literals in `Error`
 * constructors to ensure the plugin works as expected. Supported patterns include:
 *   throw new Error('My message');
 *   throw new Error(`My message: ${foo}`);
 *   throw new Error(`My message: ${foo}` + 'another string');
 *   ...
 * @param {number} code
 */
function formatMuiErrorMessage(code, ...args) {
  const url = new URL(`https://mui.com/production-error/?code=${code}`);
  args.forEach(arg => url.searchParams.append('args[]', arg));
  return `Minified MUI error #${code}; visit ${url} for the full message.`;
}

/***/ }),

/***/ 34820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);
'use client';



/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */
const useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEnhancedEffect);

/***/ }),

/***/ 38148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ createSpacing)
/* harmony export */ });
/* harmony import */ var _spacing_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48004);


// The different signatures imply different meaning for their arguments that can't be expressed structurally.
// We express the difference with variable names.

function createSpacing(spacingInput = 8,
// Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
// Smaller components, such as icons, can align to a 4dp grid.
// https://m2.material.io/design/layout/understanding-layout.html
transform = (0,_spacing_index_js__WEBPACK_IMPORTED_MODULE_0__/* .createUnarySpacing */ .LX)({
  spacing: spacingInput
})) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  }
  const spacing = (...argsInput) => {
    if (false) {}
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map(argument => {
      const output = transform(argument);
      return typeof output === 'number' ? `${output}px` : output;
    }).join(' ');
  };
  spacing.mui = true;
  return spacing;
}

/***/ }),

/***/ 38767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ esm_useTheme_useTheme)
});

// UNUSED EXPORTS: systemDefaultTheme

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/createTheme/createTheme.js + 3 modules
var createTheme = __webpack_require__(20185);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js
var emotion_element_f0de968e_browser_esm = __webpack_require__(82701);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/useThemeWithoutDefault/useThemeWithoutDefault.js
'use client';



function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme(defaultTheme = null) {
  const contextTheme = react.useContext(emotion_element_f0de968e_browser_esm.T);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}
/* harmony default export */ const useThemeWithoutDefault = (useTheme);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/useTheme/useTheme.js
'use client';



const systemDefaultTheme = (0,createTheme/* default */.A)();
function useTheme_useTheme(defaultTheme = systemDefaultTheme) {
  return useThemeWithoutDefault(defaultTheme);
}
/* harmony default export */ const esm_useTheme_useTheme = (useTheme_useTheme);

/***/ }),

/***/ 41521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ utils_memoTheme)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/preprocessStyles.js
var preprocessStyles = __webpack_require__(50269);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/memoTheme.js


/* eslint-disable @typescript-eslint/naming-convention */

// We need to pass an argument as `{ theme }` for PigmentCSS, but we don't want to
// allocate more objects.
const arg = {
  theme: undefined
};

/**
 * Memoize style function on theme.
 * Intended to be used in styled() calls that only need access to the theme.
 */
function unstable_memoTheme(styleFn) {
  let lastValue;
  let lastTheme;
  return function styleMemoized(props) {
    let value = lastValue;
    if (value === undefined || props.theme !== lastTheme) {
      arg.theme = props.theme;
      value = (0,preprocessStyles/* default */.A)(styleFn(arg));
      lastValue = value;
      lastTheme = props.theme;
    }
    return value;
  };
}
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/memoTheme.js

const memoTheme = unstable_memoTheme;
/* harmony default export */ const utils_memoTheme = (memoTheme);


/***/ }),

/***/ 41792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ generateUtilityClasses)
/* harmony export */ });
/* harmony import */ var _generateUtilityClass_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99268);

function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
  const result = {};
  slots.forEach(slot => {
    result[slot] = (0,_generateUtilityClass_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)(componentName, slot, globalStatePrefix);
  });
  return result;
}

/***/ }),

/***/ 41805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_system_createStyled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85360);
/* harmony import */ var _defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1796);
/* harmony import */ var _identifier_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4397);
/* harmony import */ var _rootShouldForwardProp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27673);
/* __next_internal_client_entry_do_not_use__ slotShouldForwardProp,rootShouldForwardProp,default auto */ 





const styled = (0,_mui_system_createStyled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)({
    themeId: _identifier_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    defaultTheme: _defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
    rootShouldForwardProp: _rootShouldForwardProp_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled);


/***/ }),

/***/ 46925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Box_Box)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+styled-engine@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+st_vy6qhdgdrzlthtiiaeqjdsmnuy/node_modules/@mui/styled-engine/index.js + 2 modules
var styled_engine = __webpack_require__(88375);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
var styleFunctionSx = __webpack_require__(24748);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(14200);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/useTheme/useTheme.js + 1 modules
var useTheme = __webpack_require__(38767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/createBox/createBox.js
'use client';







function createBox(options = {}) {
  const {
    themeId,
    defaultTheme,
    defaultClassName = 'MuiBox-root',
    generateClassName
  } = options;
  const BoxRoot = (0,styled_engine/* default */.Ay)('div', {
    shouldForwardProp: prop => prop !== 'theme' && prop !== 'sx' && prop !== 'as'
  })(styleFunctionSx/* default */.A);
  const Box = /*#__PURE__*/react.forwardRef(function Box(inProps, ref) {
    const theme = (0,useTheme/* default */.A)(defaultTheme);
    const {
      className,
      component = 'div',
      ...other
    } = (0,extendSxProp/* default */.A)(inProps);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(BoxRoot, {
      as: component,
      ref: ref,
      className: (0,clsx/* default */.A)(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: themeId ? theme[themeId] || theme : theme,
      ...other
    });
  });
  return Box;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js
var ClassNameGenerator = __webpack_require__(77982);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/createTheme.js + 26 modules
var createTheme = __webpack_require__(31654);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/identifier.js
var identifier = __webpack_require__(4397);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(41792);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Box/boxClasses.js

const boxClasses = (0,generateUtilityClasses/* default */.A)('MuiBox', [
    'root'
]);
/* harmony default export */ const Box_boxClasses = (boxClasses);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Box/Box.js
/* __next_internal_client_entry_do_not_use__ default auto */ 





const defaultTheme = (0,createTheme/* default */.A)();
const Box = createBox({
    themeId: identifier/* default */.A,
    defaultTheme,
    defaultClassName: Box_boxClasses.root,
    generateClassName: ClassNameGenerator/* default */.A.generate
});
 false ? 0 : void 0;
/* harmony default export */ const Box_Box = (Box);


/***/ }),

/***/ 47372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   BO: () => (/* binding */ getStyleValue),
/* harmony export */   Yn: () => (/* binding */ getPath)
/* harmony export */ });
/* harmony import */ var _mui_utils_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55454);
/* harmony import */ var _breakpoints_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70948);



function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  // Check if CSS variables are used
  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split('.').reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function style(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = propValueFinal => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : (0,_mui_utils_capitalize__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return (0,_breakpoints_index_js__WEBPACK_IMPORTED_MODULE_1__/* .handleBreakpoints */ .NI)(props, propValue, styleFromPropValue);
  };
  fn.propTypes =  false ? 0 : {};
  fn.filterProps = [prop];
  return fn;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (style);

/***/ }),

/***/ 48004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LX: () => (/* binding */ createUnarySpacing),
  MA: () => (/* binding */ createUnaryUnit),
  _W: () => (/* binding */ getValue),
  Lc: () => (/* binding */ margin),
  Ms: () => (/* binding */ padding)
});

// UNUSED EXPORTS: default, getStyleFromPropValue, marginKeys, paddingKeys

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/breakpoints/breakpoints.js
var breakpoints = __webpack_require__(70948);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/style/style.js
var style = __webpack_require__(47372);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/merge/merge.js
var merge = __webpack_require__(99916);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/memoize/memoize.js
function memoize(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/spacing/spacing.js





const properties = {
  m: 'margin',
  p: 'padding'
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
};

// memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec
const getCssProperties = memoize(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
});
const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
const spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  const themeSpacing = (0,style/* getPath */.Yn)(theme, themeKey, true) ?? defaultValue;
  if (typeof themeSpacing === 'number' || typeof themeSpacing === 'string') {
    return val => {
      if (typeof val === 'string') {
        return val;
      }
      if (false) {}
      if (typeof themeSpacing === 'string') {
        return `calc(${val} * ${themeSpacing})`;
      }
      return themeSpacing * val;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return val => {
      if (typeof val === 'string') {
        return val;
      }
      const abs = Math.abs(val);
      if (false) {}
      const transformed = themeSpacing[abs];
      if (val >= 0) {
        return transformed;
      }
      if (typeof transformed === 'number') {
        return -transformed;
      }
      return `-${transformed}`;
    };
  }
  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }
  if (false) {}
  return () => undefined;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, 'spacing', 8, 'spacing');
}
function getValue(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }
  return transformer(propValue);
}
function getStyleFromPropValue(cssProperties, transformer) {
  return propValue => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  // Using a hash computation over an array iteration could be faster, but with only 28 items,
  // it's doesn't worth the bundle size.
  if (!keys.includes(prop)) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return (0,breakpoints/* handleBreakpoints */.NI)(props, propValue, styleFromPropValue);
}
function spacing_style(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge/* default */.A, {});
}
function margin(props) {
  return spacing_style(props, marginKeys);
}
margin.propTypes =  false ? 0 : {};
margin.filterProps = marginKeys;
function padding(props) {
  return spacing_style(props, paddingKeys);
}
padding.propTypes =  false ? 0 : {};
padding.filterProps = paddingKeys;
function spacing(props) {
  return spacing_style(props, spacingKeys);
}
spacing.propTypes =  false ? 0 : {};
spacing.filterProps = spacingKeys;
/* harmony default export */ const spacing_spacing = ((/* unused pure expression or super */ null && (spacing)));

/***/ }),

/***/ 50269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ preprocessStyles)
/* harmony export */ });
/* harmony import */ var _mui_styled_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88375);

function preprocessStyles(input) {
  const {
    variants,
    ...style
  } = input;
  const result = {
    variants,
    style: (0,_mui_styled_engine__WEBPACK_IMPORTED_MODULE_0__/* .internal_serializeStyles */ .tT)(style),
    isProcessed: true
  };

  // Not supported on styled-components
  if (result.style === style) {
    return result;
  }
  if (variants) {
    variants.forEach(variant => {
      if (typeof variant.style !== 'function') {
        variant.style = (0,_mui_styled_engine__WEBPACK_IMPORTED_MODULE_0__/* .internal_serializeStyles */ .tT)(variant.style);
      }
    });
  }
  return result;
}

/***/ }),

/***/ 51842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);
/* harmony import */ var _useEnhancedEffect_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34820);
'use client';




/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */

function useEventCallback(fn) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fn);
  (0,_useEnhancedEffect_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(() => {
    ref.current = fn;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useRef((...args) =>
  // @ts-expect-error hide `this`
  (0, ref.current)(...args)).current;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEventCallback);

/***/ }),

/***/ 54512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ styleFunctionSx_defaultSxConfig)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/spacing/spacing.js + 1 modules
var spacing = __webpack_require__(48004);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/style/style.js
var style = __webpack_require__(47372);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/merge/merge.js
var merge = __webpack_require__(99916);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/compose/compose.js

function compose(...styles) {
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach(prop => {
      acc[prop] = style;
    });
    return acc;
  }, {});

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return (0,merge/* default */.A)(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes =  false ? 0 : {};
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}
/* harmony default export */ const compose_compose = (compose);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/breakpoints/breakpoints.js
var breakpoints = __webpack_require__(70948);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/borders/borders.js





function borderTransform(value) {
  if (typeof value !== 'number') {
    return value;
  }
  return `${value}px solid`;
}
function createBorderStyle(prop, transform) {
  return (0,style/* default */.Ay)({
    prop,
    themeKey: 'borders',
    transform
  });
}
const border = createBorderStyle('border', borderTransform);
const borderTop = createBorderStyle('borderTop', borderTransform);
const borderRight = createBorderStyle('borderRight', borderTransform);
const borderBottom = createBorderStyle('borderBottom', borderTransform);
const borderLeft = createBorderStyle('borderLeft', borderTransform);
const borderColor = createBorderStyle('borderColor');
const borderTopColor = createBorderStyle('borderTopColor');
const borderRightColor = createBorderStyle('borderRightColor');
const borderBottomColor = createBorderStyle('borderBottomColor');
const borderLeftColor = createBorderStyle('borderLeftColor');
const outline = createBorderStyle('outline', borderTransform);
const outlineColor = createBorderStyle('outlineColor');

// false positive
// eslint-disable-next-line react/function-component-definition
const borderRadius = props => {
  if (props.borderRadius !== undefined && props.borderRadius !== null) {
    const transformer = (0,spacing/* createUnaryUnit */.MA)(props.theme, 'shape.borderRadius', 4, 'borderRadius');
    const styleFromPropValue = propValue => ({
      borderRadius: (0,spacing/* getValue */._W)(transformer, propValue)
    });
    return (0,breakpoints/* handleBreakpoints */.NI)(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes =  false ? 0 : {};
borderRadius.filterProps = ['borderRadius'];
const borders = compose_compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);
/* harmony default export */ const borders_borders = ((/* unused pure expression or super */ null && (borders)));
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/cssGrid/cssGrid.js






// false positive
// eslint-disable-next-line react/function-component-definition
const gap = props => {
  if (props.gap !== undefined && props.gap !== null) {
    const transformer = (0,spacing/* createUnaryUnit */.MA)(props.theme, 'spacing', 8, 'gap');
    const styleFromPropValue = propValue => ({
      gap: (0,spacing/* getValue */._W)(transformer, propValue)
    });
    return (0,breakpoints/* handleBreakpoints */.NI)(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes =  false ? 0 : {};
gap.filterProps = ['gap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const columnGap = props => {
  if (props.columnGap !== undefined && props.columnGap !== null) {
    const transformer = (0,spacing/* createUnaryUnit */.MA)(props.theme, 'spacing', 8, 'columnGap');
    const styleFromPropValue = propValue => ({
      columnGap: (0,spacing/* getValue */._W)(transformer, propValue)
    });
    return (0,breakpoints/* handleBreakpoints */.NI)(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes =  false ? 0 : {};
columnGap.filterProps = ['columnGap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const rowGap = props => {
  if (props.rowGap !== undefined && props.rowGap !== null) {
    const transformer = (0,spacing/* createUnaryUnit */.MA)(props.theme, 'spacing', 8, 'rowGap');
    const styleFromPropValue = propValue => ({
      rowGap: (0,spacing/* getValue */._W)(transformer, propValue)
    });
    return (0,breakpoints/* handleBreakpoints */.NI)(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes =  false ? 0 : {};
rowGap.filterProps = ['rowGap'];
const gridColumn = (0,style/* default */.Ay)({
  prop: 'gridColumn'
});
const gridRow = (0,style/* default */.Ay)({
  prop: 'gridRow'
});
const gridAutoFlow = (0,style/* default */.Ay)({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = (0,style/* default */.Ay)({
  prop: 'gridAutoColumns'
});
const gridAutoRows = (0,style/* default */.Ay)({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = (0,style/* default */.Ay)({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = (0,style/* default */.Ay)({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = (0,style/* default */.Ay)({
  prop: 'gridTemplateAreas'
});
const gridArea = (0,style/* default */.Ay)({
  prop: 'gridArea'
});
const grid = compose_compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
/* harmony default export */ const cssGrid = ((/* unused pure expression or super */ null && (grid)));
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/palette/palette.js


function paletteTransform(value, userValue) {
  if (userValue === 'grey') {
    return userValue;
  }
  return value;
}
const color = (0,style/* default */.Ay)({
  prop: 'color',
  themeKey: 'palette',
  transform: paletteTransform
});
const bgcolor = (0,style/* default */.Ay)({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
const backgroundColor = (0,style/* default */.Ay)({
  prop: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
const palette = compose_compose(color, bgcolor, backgroundColor);
/* harmony default export */ const palette_palette = ((/* unused pure expression or super */ null && (palette)));
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/sizing/sizing.js



function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
const width = (0,style/* default */.Ay)({
  prop: 'width',
  transform: sizingTransform
});
const maxWidth = props => {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    const styleFromPropValue = propValue => {
      const breakpoint = props.theme?.breakpoints?.values?.[propValue] || breakpoints/* values */.zu[propValue];
      if (!breakpoint) {
        return {
          maxWidth: sizingTransform(propValue)
        };
      }
      if (props.theme?.breakpoints?.unit !== 'px') {
        return {
          maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
        };
      }
      return {
        maxWidth: breakpoint
      };
    };
    return (0,breakpoints/* handleBreakpoints */.NI)(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = (0,style/* default */.Ay)({
  prop: 'minWidth',
  transform: sizingTransform
});
const height = (0,style/* default */.Ay)({
  prop: 'height',
  transform: sizingTransform
});
const maxHeight = (0,style/* default */.Ay)({
  prop: 'maxHeight',
  transform: sizingTransform
});
const minHeight = (0,style/* default */.Ay)({
  prop: 'minHeight',
  transform: sizingTransform
});
const sizeWidth = (0,style/* default */.Ay)({
  prop: 'size',
  cssProperty: 'width',
  transform: sizingTransform
});
const sizeHeight = (0,style/* default */.Ay)({
  prop: 'size',
  cssProperty: 'height',
  transform: sizingTransform
});
const boxSizing = (0,style/* default */.Ay)({
  prop: 'boxSizing'
});
const sizing = compose_compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
/* harmony default export */ const sizing_sizing = ((/* unused pure expression or super */ null && (sizing)));
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js





const defaultSxConfig = {
  // borders
  border: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderTop: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderRight: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderBottom: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderLeft: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderColor: {
    themeKey: 'palette'
  },
  borderTopColor: {
    themeKey: 'palette'
  },
  borderRightColor: {
    themeKey: 'palette'
  },
  borderBottomColor: {
    themeKey: 'palette'
  },
  borderLeftColor: {
    themeKey: 'palette'
  },
  outline: {
    themeKey: 'borders',
    transform: borderTransform
  },
  outlineColor: {
    themeKey: 'palette'
  },
  borderRadius: {
    themeKey: 'shape.borderRadius',
    style: borderRadius
  },
  // palette
  color: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  // spacing
  p: {
    style: spacing/* padding */.Ms
  },
  pt: {
    style: spacing/* padding */.Ms
  },
  pr: {
    style: spacing/* padding */.Ms
  },
  pb: {
    style: spacing/* padding */.Ms
  },
  pl: {
    style: spacing/* padding */.Ms
  },
  px: {
    style: spacing/* padding */.Ms
  },
  py: {
    style: spacing/* padding */.Ms
  },
  padding: {
    style: spacing/* padding */.Ms
  },
  paddingTop: {
    style: spacing/* padding */.Ms
  },
  paddingRight: {
    style: spacing/* padding */.Ms
  },
  paddingBottom: {
    style: spacing/* padding */.Ms
  },
  paddingLeft: {
    style: spacing/* padding */.Ms
  },
  paddingX: {
    style: spacing/* padding */.Ms
  },
  paddingY: {
    style: spacing/* padding */.Ms
  },
  paddingInline: {
    style: spacing/* padding */.Ms
  },
  paddingInlineStart: {
    style: spacing/* padding */.Ms
  },
  paddingInlineEnd: {
    style: spacing/* padding */.Ms
  },
  paddingBlock: {
    style: spacing/* padding */.Ms
  },
  paddingBlockStart: {
    style: spacing/* padding */.Ms
  },
  paddingBlockEnd: {
    style: spacing/* padding */.Ms
  },
  m: {
    style: spacing/* margin */.Lc
  },
  mt: {
    style: spacing/* margin */.Lc
  },
  mr: {
    style: spacing/* margin */.Lc
  },
  mb: {
    style: spacing/* margin */.Lc
  },
  ml: {
    style: spacing/* margin */.Lc
  },
  mx: {
    style: spacing/* margin */.Lc
  },
  my: {
    style: spacing/* margin */.Lc
  },
  margin: {
    style: spacing/* margin */.Lc
  },
  marginTop: {
    style: spacing/* margin */.Lc
  },
  marginRight: {
    style: spacing/* margin */.Lc
  },
  marginBottom: {
    style: spacing/* margin */.Lc
  },
  marginLeft: {
    style: spacing/* margin */.Lc
  },
  marginX: {
    style: spacing/* margin */.Lc
  },
  marginY: {
    style: spacing/* margin */.Lc
  },
  marginInline: {
    style: spacing/* margin */.Lc
  },
  marginInlineStart: {
    style: spacing/* margin */.Lc
  },
  marginInlineEnd: {
    style: spacing/* margin */.Lc
  },
  marginBlock: {
    style: spacing/* margin */.Lc
  },
  marginBlockStart: {
    style: spacing/* margin */.Lc
  },
  marginBlockEnd: {
    style: spacing/* margin */.Lc
  },
  // display
  displayPrint: {
    cssProperty: false,
    transform: value => ({
      '@media print': {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: 'zIndex'
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: 'shadows'
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: 'font'
  },
  fontFamily: {
    themeKey: 'typography'
  },
  fontSize: {
    themeKey: 'typography'
  },
  fontStyle: {
    themeKey: 'typography'
  },
  fontWeight: {
    themeKey: 'typography'
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: 'typography'
  }
};
/* harmony default export */ const styleFunctionSx_defaultSxConfig = (defaultSxConfig);

/***/ }),

/***/ 55454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ capitalize)
/* harmony export */ });
/* harmony import */ var _mui_utils_formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34480);

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( false ? 0 : (0,_mui_utils_formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ 57585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ createSimplePaletteValueFilter)
/* harmony export */ });
/**
 * Type guard to check if the object has a "main" property of type string.
 *
 * @param obj - the object to check
 * @returns boolean
 */ function hasCorrectMainProperty(obj) {
    return typeof obj.main === 'string';
}
/**
 * Checks if the object conforms to the SimplePaletteColorOptions type.
 * The minimum requirement is that the object has a "main" property of type string, this is always checked.
 * Optionally, you can pass additional properties to check.
 *
 * @param obj - The object to check
 * @param additionalPropertiesToCheck - Array containing "light", "dark", and/or "contrastText"
 * @returns boolean
 */ function checkSimplePaletteColorValues(obj) {
    let additionalPropertiesToCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    if (!hasCorrectMainProperty(obj)) {
        return false;
    }
    for (const value of additionalPropertiesToCheck){
        if (!obj.hasOwnProperty(value) || typeof obj[value] !== 'string') {
            return false;
        }
    }
    return true;
}
/**
 * Creates a filter function used to filter simple palette color options.
 * The minimum requirement is that the object has a "main" property of type string, this is always checked.
 * Optionally, you can pass additional properties to check.
 *
 * @param additionalPropertiesToCheck - Array containing "light", "dark", and/or "contrastText"
 * @returns ([, value]: [any, PaletteColorOptions]) => boolean
 */ function createSimplePaletteValueFilter() {
    let additionalPropertiesToCheck = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return (param)=>{
        let [, value] = param;
        return value && checkSimplePaletteColorValues(value, additionalPropertiesToCheck);
    };
}


/***/ }),

/***/ 65128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ setRef)
/* harmony export */ });
/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/***/ }),

/***/ 66376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createStyled_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85360);

const styled = (0,_createStyled_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled);

/***/ }),

/***/ 66627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55454);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils_capitalize__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);


/***/ }),

/***/ 66842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ resolveProps)
/* harmony export */ });
/**
 * Add keys, values of `defaultProps` that does not exist in `props`
 * @param defaultProps
 * @param props
 * @returns resolved props
 */
function resolveProps(defaultProps, props) {
  const output = {
    ...props
  };
  for (const key in defaultProps) {
    if (Object.prototype.hasOwnProperty.call(defaultProps, key)) {
      const propName = key;
      if (propName === 'components' || propName === 'slots') {
        output[propName] = {
          ...defaultProps[propName],
          ...output[propName]
        };
      } else if (propName === 'componentsProps' || propName === 'slotProps') {
        const defaultSlotProps = defaultProps[propName];
        const slotProps = props[propName];
        if (!slotProps) {
          output[propName] = defaultSlotProps || {};
        } else if (!defaultSlotProps) {
          output[propName] = slotProps;
        } else {
          output[propName] = {
            ...slotProps
          };
          for (const slotKey in defaultSlotProps) {
            if (Object.prototype.hasOwnProperty.call(defaultSlotProps, slotKey)) {
              const slotPropName = slotKey;
              output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
            }
          }
        }
      } else if (output[propName] === undefined) {
        output[propName] = defaultProps[propName];
      }
    }
  }
  return output;
}

/***/ }),

/***/ 66941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Dp: () => (/* binding */ globalCss),
  Dg: () => (/* binding */ internal_createExtendSxProp)
});

// UNUSED EXPORTS: css, keyframes, styled, useTheme

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(14200);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(93656);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+styled-engine@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+st_vy6qhdgdrzlthtiiaeqjdsmnuy/node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js
'use client';





function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(emotion_react_browser_esm/* Global */.mL, {
    styles: globalStyles
  });
}
 false ? 0 : void 0;
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/useTheme/useTheme.js + 1 modules
var useTheme = __webpack_require__(38767);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/GlobalStyles/GlobalStyles.js
'use client';






function GlobalStyles_GlobalStyles({
  styles,
  themeId,
  defaultTheme = {}
}) {
  const upperTheme = (0,useTheme/* default */.A)(defaultTheme);
  const globalStyles = typeof styles === 'function' ? styles(themeId ? upperTheme[themeId] || upperTheme : upperTheme) : styles;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GlobalStyles, {
    styles: globalStyles
  });
}
 false ? 0 : void 0;
/* harmony default export */ const esm_GlobalStyles_GlobalStyles = (GlobalStyles_GlobalStyles);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/defaultTheme.js
var defaultTheme = __webpack_require__(1796);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/identifier.js
var identifier = __webpack_require__(4397);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/GlobalStyles/GlobalStyles.js
/* __next_internal_client_entry_do_not_use__ default auto */ 





function GlobalStyles_GlobalStyles_GlobalStyles(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(esm_GlobalStyles_GlobalStyles, {
        ...props,
        defaultTheme: defaultTheme/* default */.A,
        themeId: identifier/* default */.A
    });
}
 false ? 0 : void 0;
/* harmony default export */ const material_GlobalStyles_GlobalStyles = (GlobalStyles_GlobalStyles_GlobalStyles);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/zero-styled/index.js







function globalCss(styles) {
    return function GlobalStylesWrapper(props) {
        return(/*#__PURE__*/ // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
        (0,jsx_runtime.jsx)(material_GlobalStyles_GlobalStyles, {
            styles: typeof styles === 'function' ? (theme)=>styles({
                    theme,
                    ...props
                }) : styles
        }));
    };
}
// eslint-disable-next-line @typescript-eslint/naming-convention
function internal_createExtendSxProp() {
    return extendSxProp/* default */.A;
}



/***/ }),

/***/ 70948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EU: () => (/* binding */ createEmptyBreakpointObject),
/* harmony export */   NI: () => (/* binding */ handleBreakpoints),
/* harmony export */   iZ: () => (/* binding */ mergeBreakpointsInOrder),
/* harmony export */   kW: () => (/* binding */ resolveBreakpointValues),
/* harmony export */   vf: () => (/* binding */ removeUnusedBreakpoints),
/* harmony export */   zu: () => (/* binding */ values)
/* harmony export */ });
/* unused harmony export computeBreakpointsBase */
/* harmony import */ var _mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83752);
/* harmony import */ var _cssContainerQueries_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20052);





// The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.
const values = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536 // large screen
};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values[key]}px)`
};
const defaultContainerQueries = {
  containerQueries: containerName => ({
    up: key => {
      let result = typeof key === 'number' ? key : values[key] || key;
      if (typeof result === 'number') {
        result = `${result}px`;
      }
      return containerName ? `@container ${containerName} (min-width:${result})` : `@container (min-width:${result})`;
    }
  })
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === 'object') {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      if ((0,_cssContainerQueries_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isCqShorthand */ .ob)(themeBreakpoints.keys, breakpoint)) {
        const containerKey = (0,_cssContainerQueries_index_js__WEBPACK_IMPORTED_MODULE_0__/* .getContainerQuery */ .CT)(theme.containerQueries ? theme : defaultContainerQueries, breakpoint);
        if (containerKey) {
          acc[containerKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
        }
      }
      // key is breakpoint
      else if (Object.keys(themeBreakpoints.values || values).includes(breakpoint)) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function breakpoints(styleFunction) {
  // false positive
  // eslint-disable-next-line react/function-component-definition
  const newStyleFunction = props => {
    const theme = props.theme || {};
    const base = styleFunction(props);
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    const extended = themeBreakpoints.keys.reduce((acc, key) => {
      if (props[key]) {
        acc = acc || {};
        acc[themeBreakpoints.up(key)] = styleFunction({
          theme,
          ...props[key]
        });
      }
      return acc;
    }, null);
    return merge(base, extended);
  };
  newStyleFunction.propTypes =  false ? 0 : {};
  newStyleFunction.filterProps = ['xs', 'sm', 'md', 'lg', 'xl', ...styleFunction.filterProps];
  return newStyleFunction;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  const breakpointsInOrder = breakpointsInput.keys?.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style);
}
function mergeBreakpointsInOrder(breakpointsInput, ...styles) {
  const emptyBreakpoints = createEmptyBreakpointObject(breakpointsInput);
  const mergedOutput = [emptyBreakpoints, ...styles].reduce((prev, next) => (0,_mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(prev, next), {});
  return removeUnusedBreakpoints(Object.keys(emptyBreakpoints), mergedOutput);
}

// compute base for responsive values; e.g.,
// [1,2,3] => {xs: true, sm: true, md: true}
// {xs: 1, sm: 2, md: 3} => {xs: true, sm: true, md: true}
function computeBreakpointsBase(breakpointValues, themeBreakpoints) {
  // fixed value
  if (typeof breakpointValues !== 'object') {
    return {};
  }
  const base = {};
  const breakpointsKeys = Object.keys(themeBreakpoints);
  if (Array.isArray(breakpointValues)) {
    breakpointsKeys.forEach((breakpoint, i) => {
      if (i < breakpointValues.length) {
        base[breakpoint] = true;
      }
    });
  } else {
    breakpointsKeys.forEach(breakpoint => {
      if (breakpointValues[breakpoint] != null) {
        base[breakpoint] = true;
      }
    });
  }
  return base;
}
function resolveBreakpointValues({
  values: breakpointValues,
  breakpoints: themeBreakpoints,
  base: customBase
}) {
  const base = customBase || computeBreakpointsBase(breakpointValues, themeBreakpoints);
  const keys = Object.keys(base);
  if (keys.length === 0) {
    return breakpointValues;
  }
  let previous;
  return keys.reduce((acc, breakpoint, i) => {
    if (Array.isArray(breakpointValues)) {
      acc[breakpoint] = breakpointValues[i] != null ? breakpointValues[i] : breakpointValues[previous];
      previous = i;
    } else if (typeof breakpointValues === 'object') {
      acc[breakpoint] = breakpointValues[breakpoint] != null ? breakpointValues[breakpoint] : breakpointValues[previous];
      previous = breakpoint;
    } else {
      acc[breakpoint] = breakpointValues;
    }
    return acc;
  }, {});
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (breakpoints)));

/***/ }),

/***/ 77982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const defaultGenerator = componentName => componentName;
const createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
const ClassNameGenerator = createClassNameGenerator();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassNameGenerator);

/***/ }),

/***/ 78887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ createSvgIcon)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(34354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(66627);
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
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/SvgIcon/svgIconClasses.js


function getSvgIconUtilityClass(slot) {
    return (0,generateUtilityClass/* default */.Ay)('MuiSvgIcon', slot);
}
const svgIconClasses = (0,generateUtilityClasses/* default */.A)('MuiSvgIcon', [
    'root',
    'colorPrimary',
    'colorSecondary',
    'colorAction',
    'colorError',
    'colorDisabled',
    'fontSizeInherit',
    'fontSizeSmall',
    'fontSizeMedium',
    'fontSizeLarge'
]);
/* harmony default export */ const SvgIcon_svgIconClasses = ((/* unused pure expression or super */ null && (svgIconClasses)));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/SvgIcon/SvgIcon.js
/* __next_internal_client_entry_do_not_use__ default auto */ 









const useUtilityClasses = (ownerState)=>{
    const { color, fontSize, classes } = ownerState;
    const slots = {
        root: [
            'root',
            color !== 'inherit' && "color".concat((0,capitalize/* default */.A)(color)),
            "fontSize".concat((0,capitalize/* default */.A)(fontSize))
        ]
    };
    return (0,composeClasses/* default */.A)(slots, getSvgIconUtilityClass, classes);
};
const SvgIconRoot = (0,styled/* default */.Ay)('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (props, styles)=>{
        const { ownerState } = props;
        return [
            styles.root,
            ownerState.color !== 'inherit' && styles["color".concat((0,capitalize/* default */.A)(ownerState.color))],
            styles["fontSize".concat((0,capitalize/* default */.A)(ownerState.fontSize))]
        ];
    }
})((0,memoTheme/* default */.A)((param)=>{
    let { theme } = param;
    var _transitions_duration, _transitions, _theme_transitions_create, _theme_transitions, _theme_typography_pxToRem, _theme_typography, _theme_typography_pxToRem1, _theme_typography1, _theme_typography_pxToRem2, _theme_typography2, _palette_action, _palette, _palette_action1, _palette1;
    var _theme_vars, _theme_vars1, _theme_vars2, _theme_vars3;
    return {
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        flexShrink: 0,
        transition: (_theme_transitions = theme.transitions) === null || _theme_transitions === void 0 ? void 0 : (_theme_transitions_create = _theme_transitions.create) === null || _theme_transitions_create === void 0 ? void 0 : _theme_transitions_create.call(_theme_transitions, 'fill', {
            duration: (_transitions = ((_theme_vars = theme.vars) !== null && _theme_vars !== void 0 ? _theme_vars : theme).transitions) === null || _transitions === void 0 ? void 0 : (_transitions_duration = _transitions.duration) === null || _transitions_duration === void 0 ? void 0 : _transitions_duration.shorter
        }),
        variants: [
            {
                props: (props)=>!props.hasSvgAsChild,
                style: {
                    // the <svg> will define the property that has `currentColor`
                    // for example heroicons uses fill="none" and stroke="currentColor"
                    fill: 'currentColor'
                }
            },
            {
                props: {
                    fontSize: 'inherit'
                },
                style: {
                    fontSize: 'inherit'
                }
            },
            {
                props: {
                    fontSize: 'small'
                },
                style: {
                    fontSize: ((_theme_typography = theme.typography) === null || _theme_typography === void 0 ? void 0 : (_theme_typography_pxToRem = _theme_typography.pxToRem) === null || _theme_typography_pxToRem === void 0 ? void 0 : _theme_typography_pxToRem.call(_theme_typography, 20)) || '1.25rem'
                }
            },
            {
                props: {
                    fontSize: 'medium'
                },
                style: {
                    fontSize: ((_theme_typography1 = theme.typography) === null || _theme_typography1 === void 0 ? void 0 : (_theme_typography_pxToRem1 = _theme_typography1.pxToRem) === null || _theme_typography_pxToRem1 === void 0 ? void 0 : _theme_typography_pxToRem1.call(_theme_typography1, 24)) || '1.5rem'
                }
            },
            {
                props: {
                    fontSize: 'large'
                },
                style: {
                    fontSize: ((_theme_typography2 = theme.typography) === null || _theme_typography2 === void 0 ? void 0 : (_theme_typography_pxToRem2 = _theme_typography2.pxToRem) === null || _theme_typography_pxToRem2 === void 0 ? void 0 : _theme_typography_pxToRem2.call(_theme_typography2, 35)) || '2.1875rem'
                }
            },
            // TODO v5 deprecate color prop, v6 remove for sx
            ...Object.entries(((_theme_vars1 = theme.vars) !== null && _theme_vars1 !== void 0 ? _theme_vars1 : theme).palette).filter((param)=>{
                let [, value] = param;
                return value && value.main;
            }).map((param)=>{
                let [color] = param;
                var _palette_color, _palette;
                var _theme_vars;
                return {
                    props: {
                        color
                    },
                    style: {
                        color: (_palette = ((_theme_vars = theme.vars) !== null && _theme_vars !== void 0 ? _theme_vars : theme).palette) === null || _palette === void 0 ? void 0 : (_palette_color = _palette[color]) === null || _palette_color === void 0 ? void 0 : _palette_color.main
                    }
                };
            }),
            {
                props: {
                    color: 'action'
                },
                style: {
                    color: (_palette = ((_theme_vars2 = theme.vars) !== null && _theme_vars2 !== void 0 ? _theme_vars2 : theme).palette) === null || _palette === void 0 ? void 0 : (_palette_action = _palette.action) === null || _palette_action === void 0 ? void 0 : _palette_action.active
                }
            },
            {
                props: {
                    color: 'disabled'
                },
                style: {
                    color: (_palette1 = ((_theme_vars3 = theme.vars) !== null && _theme_vars3 !== void 0 ? _theme_vars3 : theme).palette) === null || _palette1 === void 0 ? void 0 : (_palette_action1 = _palette1.action) === null || _palette_action1 === void 0 ? void 0 : _palette_action1.disabled
                }
            },
            {
                props: {
                    color: 'inherit'
                },
                style: {
                    color: undefined
                }
            }
        ]
    };
}));
const SvgIcon = /*#__PURE__*/ react.forwardRef(function SvgIcon(inProps, ref) {
    const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
        props: inProps,
        name: 'MuiSvgIcon'
    });
    const { children, className, color = 'inherit', component = 'svg', fontSize = 'medium', htmlColor, inheritViewBox = false, titleAccess, viewBox = '0 0 24 24', ...other } = props;
    const hasSvgAsChild = /*#__PURE__*/ react.isValidElement(children) && children.type === 'svg';
    const ownerState = {
        ...props,
        color,
        component,
        fontSize,
        instanceFontSize: inProps.fontSize,
        inheritViewBox,
        viewBox,
        hasSvgAsChild
    };
    const more = {};
    if (!inheritViewBox) {
        more.viewBox = viewBox;
    }
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(SvgIconRoot, {
        as: component,
        className: (0,clsx/* default */.A)(classes.root, className),
        focusable: "false",
        color: htmlColor,
        "aria-hidden": titleAccess ? undefined : true,
        role: titleAccess ? 'img' : undefined,
        ref: ref,
        ...more,
        ...other,
        ...hasSvgAsChild && children.props,
        ownerState: ownerState,
        children: [
            hasSvgAsChild ? children.props.children : children,
            titleAccess ? /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                children: titleAccess
            }) : null
        ]
    });
});
 false ? 0 : void 0;
if (SvgIcon) {
    SvgIcon.muiName = 'SvgIcon';
}
/* harmony default export */ const SvgIcon_SvgIcon = (SvgIcon);

;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/createSvgIcon.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * Private module reserved for @mui packages.
 */ 
function createSvgIcon(path, displayName) {
    function Component(props, ref) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon_SvgIcon, {
            "data-testid": "".concat(displayName, "Icon"),
            ref: ref,
            ...props,
            children: path
        });
    }
    if (false) {}
    Component.muiName = SvgIcon_SvgIcon.muiName;
    return /*#__PURE__*/ react.memo(/*#__PURE__*/ react.forwardRef(Component));
}


/***/ }),

/***/ 82701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ Emotion$1),
/* harmony export */   T: () => (/* binding */ ThemeContext),
/* harmony export */   c: () => (/* binding */ createEmotionProps),
/* harmony export */   h: () => (/* binding */ hasOwn),
/* harmony export */   w: () => (/* binding */ withEmotionCache)
/* harmony export */ });
/* unused harmony exports C, _, a, b, i, u */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28600);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90062);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81450);
/* harmony import */ var _emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79497);









var isDevelopment = false;
var EmotionCacheContext = /* #__PURE__ */ /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */ (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
    key: 'css'
}) : null);
var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
    return useContext(EmotionCacheContext);
};
var withEmotionCache = function withEmotionCache(func) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function(props, ref) {
        // the cache will never be null in the browser
        var cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EmotionCacheContext);
        return func(props, cache, ref);
    });
};
var ThemeContext = /* #__PURE__ */ /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var useTheme = function useTheme() {
    return React.useContext(ThemeContext);
};
var getTheme = function getTheme(outerTheme, theme) {
    if (typeof theme === 'function') {
        var mergedTheme = theme(outerTheme);
        return mergedTheme;
    }
    return _extends({}, outerTheme, theme);
};
var createCacheWithTheme = /* #__PURE__ */ (/* unused pure expression or super */ null && (weakMemoize(function(outerTheme) {
    return weakMemoize(function(theme) {
        return getTheme(outerTheme, theme);
    });
})));
var ThemeProvider = function ThemeProvider(props) {
    var theme = React.useContext(ThemeContext);
    if (props.theme !== theme) {
        theme = createCacheWithTheme(theme)(props.theme);
    }
    return /*#__PURE__*/ React.createElement(ThemeContext.Provider, {
        value: theme
    }, props.children);
};
function withTheme(Component) {
    var componentName = Component.displayName || Component.name || 'Component';
    var WithTheme = /*#__PURE__*/ React.forwardRef(function render(props, ref) {
        var theme = React.useContext(ThemeContext);
        return /*#__PURE__*/ React.createElement(Component, _extends({
            theme: theme,
            ref: ref
        }, props));
    });
    WithTheme.displayName = "WithTheme(" + componentName + ")";
    return hoistNonReactStatics(WithTheme, Component);
}
var hasOwn = {}.hasOwnProperty;
var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
    var newProps = {};
    for(var _key in props){
        if (hasOwn.call(props, _key)) {
            newProps[_key] = props[_key];
        }
    }
    newProps[typePropName] = type; // Runtime labeling is an opt-in feature because:
    return newProps;
};
var Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__/* .registerStyles */ .SF)(cache, serialized, isStringTag);
    (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_3__/* .useInsertionEffectAlwaysWithSyncFallback */ .s)(function() {
        return (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__/* .insertStyles */ .sk)(cache, serialized, isStringTag);
    });
    return null;
};
var Emotion = /* #__PURE__ */ withEmotionCache(function(props, cache, ref) {
    var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
    // not passing the registered cache to serializeStyles because it would
    // make certain babel optimisations not possible
    if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
        cssProp = cache.registered[cssProp];
    }
    var WrappedComponent = props[typePropName];
    var registeredStyles = [
        cssProp
    ];
    var className = '';
    if (typeof props.className === 'string') {
        className = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__/* .getRegisteredStyles */ .Rk)(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
        className = props.className + " ";
    }
    var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__/* .serializeStyles */ .J)(registeredStyles, undefined, react__WEBPACK_IMPORTED_MODULE_0__.useContext(ThemeContext));
    className += cache.key + "-" + serialized.name;
    var newProps = {};
    for(var _key2 in props){
        if (hasOwn.call(props, _key2) && _key2 !== 'css' && _key2 !== typePropName && !isDevelopment) {
            newProps[_key2] = props[_key2];
        }
    }
    newProps.className = className;
    if (ref) {
        newProps.ref = ref;
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Insertion, {
        cache: cache,
        serialized: serialized,
        isStringTag: typeof WrappedComponent === 'string'
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedComponent, newProps));
});
var Emotion$1 = Emotion;



/***/ }),

/***/ 83752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ deepmerge),
/* harmony export */   Q: () => (/* binding */ isPlainObject)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5222);



// https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
function isPlainObject(item) {
  if (typeof item !== 'object' || item === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(source) || (0,react_is__WEBPACK_IMPORTED_MODULE_1__/* .isValidElementType */ .Hy)(source) || !isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach(key => {
    output[key] = deepClone(source[key]);
  });
  return output;
}

/**
 * Merge objects deeply.
 * It will shallow copy React elements.
 *
 * If `options.clone` is set to `false` the source object will be merged directly into the target object.
 *
 * @example
 * ```ts
 * deepmerge({ a: { b: 1 }, d: 2 }, { a: { c: 2 }, d: 4 });
 * // => { a: { b: 1, c: 2 }, d: 4 }
 * ````
 *
 * @param target The target object.
 * @param source The source object.
 * @param options The merge options.
 * @param options.clone Set to `false` to merge the source object directly into the target object.
 * @returns The merged object.
 */
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? {
    ...target
  } : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      if (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(source[key]) || (0,react_is__WEBPACK_IMPORTED_MODULE_1__/* .isValidElementType */ .Hy)(source[key])) {
        output[key] = source[key];
      } else if (isPlainObject(source[key]) &&
      // Avoid prototype pollution
      Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

/***/ }),

/***/ 84318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38767);
/* harmony import */ var _defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1796);
/* harmony import */ var _identifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4397);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function useTheme() {
    const theme = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
    if (false) {}
    return theme[_identifier_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A] || theme;
}


/***/ }),

/***/ 85360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ createStyled)
/* harmony export */ });
/* unused harmony exports systemDefaultTheme, shouldForwardProp */
/* harmony import */ var _mui_styled_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88375);
/* harmony import */ var _mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83752);
/* harmony import */ var _createTheme_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20185);
/* harmony import */ var _styleFunctionSx_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24748);
/* harmony import */ var _preprocessStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50269);








/* eslint-disable no-underscore-dangle */
/* eslint-disable no-labels */
/* eslint-disable no-lone-blocks */

const systemDefaultTheme = (0,_createTheme_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)();

// Update /system/styled/#api in case if this changes
function shouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return (_props, styles) => styles[slot];
}
function attachTheme(props, themeId, defaultTheme) {
  props.theme = isObjectEmpty(props.theme) ? defaultTheme : props.theme[themeId] || props.theme;
}
function processStyle(props, style) {
  /*
   * Style types:
   *  - null/undefined
   *  - string
   *  - CSS style object: { [cssKey]: [cssValue], variants }
   *  - Processed style object: { style, variants, isProcessed: true }
   *  - Array of any of the above
   */

  const resolvedStyle = typeof style === 'function' ? style(props) : style;
  if (Array.isArray(resolvedStyle)) {
    return resolvedStyle.flatMap(subStyle => processStyle(props, subStyle));
  }
  if (Array.isArray(resolvedStyle?.variants)) {
    let rootStyle;
    if (resolvedStyle.isProcessed) {
      rootStyle = resolvedStyle.style;
    } else {
      const {
        variants,
        ...otherStyles
      } = resolvedStyle;
      rootStyle = otherStyles;
    }
    return processStyleVariants(props, resolvedStyle.variants, [rootStyle]);
  }
  if (resolvedStyle?.isProcessed) {
    return resolvedStyle.style;
  }
  return resolvedStyle;
}
function processStyleVariants(props, variants, results = []) {
  let mergedState; // We might not need it, initialized lazily

  variantLoop: for (let i = 0; i < variants.length; i += 1) {
    const variant = variants[i];
    if (typeof variant.props === 'function') {
      mergedState ??= {
        ...props,
        ...props.ownerState,
        ownerState: props.ownerState
      };
      if (!variant.props(mergedState)) {
        continue;
      }
    } else {
      for (const key in variant.props) {
        if (props[key] !== variant.props[key] && props.ownerState?.[key] !== variant.props[key]) {
          continue variantLoop;
        }
      }
    }
    if (typeof variant.style === 'function') {
      mergedState ??= {
        ...props,
        ...props.ownerState,
        ownerState: props.ownerState
      };
      results.push(variant.style(mergedState));
    } else {
      results.push(variant.style);
    }
  }
  return results;
}
function createStyled(input = {}) {
  const {
    themeId,
    defaultTheme = systemDefaultTheme,
    rootShouldForwardProp = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  function styleAttachTheme(props) {
    attachTheme(props, themeId, defaultTheme);
  }
  const styled = (tag, inputOptions = {}) => {
    // If `tag` is already a styled component, filter out the `sx` style function
    // to prevent unnecessary styles generated by the composite components.
    (0,_mui_styled_engine__WEBPACK_IMPORTED_MODULE_1__/* .internal_mutateStyles */ .HX)(tag, styles => styles.filter(style => style !== _styleFunctionSx_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A));
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot)),
      ...options
    } = inputOptions;

    // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver :
    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
    const skipSx = inputSkipSx || false;
    let shouldForwardPropOption = shouldForwardProp;

    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    if (componentSlot === 'Root' || componentSlot === 'root') {
      shouldForwardPropOption = rootShouldForwardProp;
    } else if (componentSlot) {
      // any other slot specified
      shouldForwardPropOption = slotShouldForwardProp;
    } else if (isStringTag(tag)) {
      // for string (html) tag, preserve the behavior in emotion & styled-components.
      shouldForwardPropOption = undefined;
    }
    const defaultStyledResolver = (0,_mui_styled_engine__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)(tag, {
      shouldForwardProp: shouldForwardPropOption,
      label: generateStyledLabel(componentName, componentSlot),
      ...options
    });
    const transformStyle = style => {
      // On the server Emotion doesn't use React.forwardRef for creating components, so the created
      // component stays as a function. This condition makes sure that we do not interpolate functions
      // which are basically components used as a selectors.
      if (typeof style === 'function' && style.__emotion_real !== style) {
        return function styleFunctionProcessor(props) {
          return processStyle(props, style);
        };
      }
      if ((0,_mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_3__/* .isPlainObject */ .Q)(style)) {
        const serialized = (0,_preprocessStyles_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(style);
        if (!serialized.variants) {
          return serialized.style;
        }
        return function styleObjectProcessor(props) {
          return processStyle(props, serialized);
        };
      }
      return style;
    };
    const muiStyledResolver = (...expressionsInput) => {
      const expressionsHead = [];
      const expressionsBody = expressionsInput.map(transformStyle);
      const expressionsTail = [];

      // Preprocess `props` to set the scoped theme value.
      // This must run before any other expression.
      expressionsHead.push(styleAttachTheme);
      if (componentName && overridesResolver) {
        expressionsTail.push(function styleThemeOverrides(props) {
          const theme = props.theme;
          const styleOverrides = theme.components?.[componentName]?.styleOverrides;
          if (!styleOverrides) {
            return null;
          }
          const resolvedStyleOverrides = {};

          // TODO: v7 remove iteration and use `resolveStyleArg(styleOverrides[slot])` directly
          // eslint-disable-next-line guard-for-in
          for (const slotKey in styleOverrides) {
            resolvedStyleOverrides[slotKey] = processStyle(props, styleOverrides[slotKey]);
          }
          return overridesResolver(props, resolvedStyleOverrides);
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsTail.push(function styleThemeVariants(props) {
          const theme = props.theme;
          const themeVariants = theme?.components?.[componentName]?.variants;
          if (!themeVariants) {
            return null;
          }
          return processStyleVariants(props, themeVariants);
        });
      }
      if (!skipSx) {
        expressionsTail.push(_styleFunctionSx_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
      }

      // This function can be called as a tagged template, so the first argument would contain
      // CSS `string[]` values.
      if (Array.isArray(expressionsBody[0])) {
        const inputStrings = expressionsBody.shift();

        // We need to add placeholders in the tagged template for the custom functions we have
        // possibly added (attachTheme, overrides, variants, and sx).
        const placeholdersHead = new Array(expressionsHead.length).fill('');
        const placeholdersTail = new Array(expressionsTail.length).fill('');
        let outputStrings;
        // prettier-ignore
        {
          outputStrings = [...placeholdersHead, ...inputStrings, ...placeholdersTail];
          outputStrings.raw = [...placeholdersHead, ...inputStrings.raw, ...placeholdersTail];
        }

        // The only case where we put something before `attachTheme`
        expressionsHead.unshift(outputStrings);
      }
      const expressions = [...expressionsHead, ...expressionsBody, ...expressionsTail];
      const Component = defaultStyledResolver(...expressions);
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      if (false) {}
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
  return styled;
}
function generateDisplayName(componentName, componentSlot, tag) {
  if (componentName) {
    return `${componentName}${capitalize(componentSlot || '')}`;
  }
  return `Styled(${getDisplayName(tag)})`;
}
function generateStyledLabel(componentName, componentSlot) {
  let label;
  if (false) {}
  return label;
}
function isObjectEmpty(object) {
  // eslint-disable-next-line
  for (const _ in object) {
    return false;
  }
  return true;
}

// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
function isStringTag(tag) {
  return typeof tag === 'string' &&
  // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}
function lowercaseFirstLetter(string) {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
}

/***/ }),

/***/ 87239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Container_Container)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(3638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(99268);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(34354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.1.3_react@19.0.0/node_modules/@mui/utils/esm/capitalize/capitalize.js
var capitalize = __webpack_require__(55454);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(31404);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/styled/styled.js
var styled = __webpack_require__(66376);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/createTheme/createTheme.js + 3 modules
var createTheme = __webpack_require__(20185);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
;// ../../node_modules/.pnpm/@mui+system@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@11_cp2tgjl3c3fz2wpcybvef72dbe/node_modules/@mui/system/esm/Container/createContainer.js










const defaultTheme = (0,createTheme/* default */.A)();
const defaultCreateStyledComponent = (0,styled/* default */.A)('div', {
  name: 'MuiContainer',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`maxWidth${(0,capitalize/* default */.A)(String(ownerState.maxWidth))}`], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
  }
});
const useThemePropsDefault = inProps => (0,useThemeProps/* default */.A)({
  props: inProps,
  name: 'MuiContainer',
  defaultTheme
});
const useUtilityClasses = (ownerState, componentName) => {
  const getContainerUtilityClass = slot => {
    return (0,generateUtilityClass/* default */.Ay)(componentName, slot);
  };
  const {
    classes,
    fixed,
    disableGutters,
    maxWidth
  } = ownerState;
  const slots = {
    root: ['root', maxWidth && `maxWidth${(0,capitalize/* default */.A)(String(maxWidth))}`, fixed && 'fixed', disableGutters && 'disableGutters']
  };
  return (0,composeClasses/* default */.A)(slots, getContainerUtilityClass, classes);
};
function createContainer(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps = useThemePropsDefault,
    componentName = 'MuiContainer'
  } = options;
  const ContainerRoot = createStyledComponent(({
    theme,
    ownerState
  }) => ({
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    marginRight: 'auto',
    ...(!ownerState.disableGutters && {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
      }
    })
  }), ({
    theme,
    ownerState
  }) => ownerState.fixed && Object.keys(theme.breakpoints.values).reduce((acc, breakpointValueKey) => {
    const breakpoint = breakpointValueKey;
    const value = theme.breakpoints.values[breakpoint];
    if (value !== 0) {
      // @ts-ignore
      acc[theme.breakpoints.up(breakpoint)] = {
        maxWidth: `${value}${theme.breakpoints.unit}`
      };
    }
    return acc;
  }, {}), ({
    theme,
    ownerState
  }) => ({
    // @ts-ignore module augmentation fails if custom breakpoints are used
    ...(ownerState.maxWidth === 'xs' && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up('xs')]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: Math.max(theme.breakpoints.values.xs, 444)
      }
    }),
    ...(ownerState.maxWidth &&
    // @ts-ignore module augmentation fails if custom breakpoints are used
    ownerState.maxWidth !== 'xs' && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up(ownerState.maxWidth)]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`
      }
    })
  }));
  const Container = /*#__PURE__*/react.forwardRef(function Container(inProps, ref) {
    const props = useThemeProps(inProps);
    const {
      className,
      component = 'div',
      disableGutters = false,
      fixed = false,
      maxWidth = 'lg',
      classes: classesProp,
      ...other
    } = props;
    const ownerState = {
      ...props,
      component,
      disableGutters,
      fixed,
      maxWidth
    };

    // @ts-ignore module augmentation fails if custom breakpoints are used
    const classes = useUtilityClasses(ownerState, componentName);
    return (
      /*#__PURE__*/
      // @ts-ignore theme is injected by the styled util
      (0,jsx_runtime.jsx)(ContainerRoot, {
        as: component
        // @ts-ignore module augmentation fails if custom breakpoints are used
        ,
        ownerState: ownerState,
        className: (0,clsx/* default */.A)(classes.root, className),
        ref: ref,
        ...other
      })
    );
  });
   false ? 0 : void 0;
  return Container;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/utils/capitalize.js
var utils_capitalize = __webpack_require__(66627);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/styles/styled.js
var styles_styled = __webpack_require__(41805);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(25569);
;// ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+styled@_ivln2to5msvytlrndx7sh5sram/node_modules/@mui/material/Container/Container.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Container = createContainer({
    createStyledComponent: (0,styles_styled/* default */.Ay)('div', {
        name: 'MuiContainer',
        slot: 'Root',
        overridesResolver: (props, styles)=>{
            const { ownerState } = props;
            return [
                styles.root,
                styles["maxWidth".concat((0,utils_capitalize/* default */.A)(String(ownerState.maxWidth)))],
                ownerState.fixed && styles.fixed,
                ownerState.disableGutters && styles.disableGutters
            ];
        }
    }),
    useThemeProps: (inProps)=>(0,DefaultPropsProvider/* useDefaultProps */.b)({
            props: inProps,
            name: 'MuiContainer'
        })
});
 false ? 0 : void 0;
/* harmony default export */ const Container_Container = (Container);


/***/ }),

/***/ 88375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ styled),
  HX: () => (/* binding */ internal_mutateStyles),
  tT: () => (/* binding */ internal_serializeStyles)
});

// UNUSED EXPORTS: GlobalStyles, StyledEngineProvider, ThemeContext, css, keyframes

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(41765);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js
var emotion_element_f0de968e_browser_esm = __webpack_require__(82701);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js + 2 modules
var emotion_serialize_esm = __webpack_require__(81450);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@19.0.0/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var emotion_use_insertion_effect_with_fallbacks_browser_esm = __webpack_require__(79497);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+utils@1.4.2/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var emotion_utils_browser_esm = __webpack_require__(90062);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+is-prop-valid@1.3.1/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var emotion_is_prop_valid_esm = __webpack_require__(24440);
;// ../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@types+react@19.1.3_react@19.0.0/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js







var isDevelopment = false;
var testOmitPropsOnStringTag = emotion_is_prop_valid_esm/* default */.A;
var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
    return key !== 'theme';
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
    return typeof tag === 'string' && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
    var shouldForwardProp;
    if (options) {
        var optionsShouldForwardProp = options.shouldForwardProp;
        shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
            return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
        } : optionsShouldForwardProp;
    }
    if (typeof shouldForwardProp !== 'function' && isReal) {
        shouldForwardProp = tag.__emotion_forwardProp;
    }
    return shouldForwardProp;
};
var Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
    (0,emotion_utils_browser_esm/* registerStyles */.SF)(cache, serialized, isStringTag);
    (0,emotion_use_insertion_effect_with_fallbacks_browser_esm/* useInsertionEffectAlwaysWithSyncFallback */.s)(function() {
        return (0,emotion_utils_browser_esm/* insertStyles */.sk)(cache, serialized, isStringTag);
    });
    return null;
};
var createStyled = function createStyled(tag, options) {
    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;
    var identifierName;
    var targetClassName;
    if (options !== undefined) {
        identifierName = options.label;
        targetClassName = options.target;
    }
    var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
    var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp('as');
    return function() {
        // eslint-disable-next-line prefer-rest-params
        var args = arguments;
        var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];
        if (identifierName !== undefined) {
            styles.push("label:" + identifierName + ";");
        }
        if (args[0] == null || args[0].raw === undefined) {
            // eslint-disable-next-line prefer-spread
            styles.push.apply(styles, args);
        } else {
            var templateStringsArr = args[0];
            styles.push(templateStringsArr[0]);
            var len = args.length;
            var i = 1;
            for(; i < len; i++){
                styles.push(args[i], templateStringsArr[i]);
            }
        }
        var Styled = (0,emotion_element_f0de968e_browser_esm.w)(function(props, cache, ref) {
            var FinalTag = shouldUseAs && props.as || baseTag;
            var className = '';
            var classInterpolations = [];
            var mergedProps = props;
            if (props.theme == null) {
                mergedProps = {};
                for(var key in props){
                    mergedProps[key] = props[key];
                }
                mergedProps.theme = react.useContext(emotion_element_f0de968e_browser_esm.T);
            }
            if (typeof props.className === 'string') {
                className = (0,emotion_utils_browser_esm/* getRegisteredStyles */.Rk)(cache.registered, classInterpolations, props.className);
            } else if (props.className != null) {
                className = props.className + " ";
            }
            var serialized = (0,emotion_serialize_esm/* serializeStyles */.J)(styles.concat(classInterpolations), cache.registered, mergedProps);
            className += cache.key + "-" + serialized.name;
            if (targetClassName !== undefined) {
                className += " " + targetClassName;
            }
            var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
            var newProps = {};
            for(var _key in props){
                if (shouldUseAs && _key === 'as') continue;
                if (finalShouldForwardProp(_key)) {
                    newProps[_key] = props[_key];
                }
            }
            newProps.className = className;
            if (ref) {
                newProps.ref = ref;
            }
            return /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement(Insertion, {
                cache: cache,
                serialized: serialized,
                isStringTag: typeof FinalTag === 'string'
            }), /*#__PURE__*/ react.createElement(FinalTag, newProps));
        });
        Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
        Styled.defaultProps = tag.defaultProps;
        Styled.__emotion_real = Styled;
        Styled.__emotion_base = baseTag;
        Styled.__emotion_styles = styles;
        Styled.__emotion_forwardProp = shouldForwardProp;
        Object.defineProperty(Styled, 'toString', {
            value: function value() {
                if (targetClassName === undefined && isDevelopment) {
                    return 'NO_COMPONENT_SELECTOR';
                }
                return "." + targetClassName;
            }
        });
        Styled.withComponent = function(nextTag, nextOptions) {
            var newStyled = createStyled(nextTag, (0,esm_extends/* default */.A)({}, options, nextOptions, {
                shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
            }));
            return newStyled.apply(void 0, styles);
        };
        return Styled;
    };
};


;// ../../node_modules/.pnpm/@emotion+styled@11.14.0_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@types+react@19.1.3_react@19.0.0/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js








var tags = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan'
];
// bind it to avoid mutating the original function
var newStyled = createStyled.bind(null);
tags.forEach(function(tagName) {
    newStyled[tagName] = newStyled(tagName);
});


;// ../../node_modules/.pnpm/@mui+styled-engine@6.4.3_@emotion+react@11.14.0_@types+react@19.1.3_react@19.0.0__@emotion+st_vy6qhdgdrzlthtiiaeqjdsmnuy/node_modules/@mui/styled-engine/index.js
/**
 * @mui/styled-engine v6.4.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-underscore-dangle */


function styled(tag, options) {
  const stylesFactory = newStyled(tag, options);
  if (false) {}
  return stylesFactory;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function internal_mutateStyles(tag, processor) {
  // Emotion attaches all the styles as `__emotion_styles`.
  // Ref: https://github.com/emotion-js/emotion/blob/16d971d0da229596d6bcc39d282ba9753c9ee7cf/packages/styled/src/base.js#L186
  if (Array.isArray(tag.__emotion_styles)) {
    tag.__emotion_styles = processor(tag.__emotion_styles);
  }
}

// Emotion only accepts an array, but we want to avoid allocations
const wrapper = [];
// eslint-disable-next-line @typescript-eslint/naming-convention
function internal_serializeStyles(styles) {
  wrapper[0] = styles;
  return (0,emotion_serialize_esm/* serializeStyles */.J)(wrapper);
}




/***/ }),

/***/ 89191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ esm_TransitionGroup)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(64590);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(41765);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(73984);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__(68580);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__(30022);
;// ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-transition-group/esm/utils/ChildMapping.js

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */ function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
        return mapFn && /*#__PURE__*/ (0,react.isValidElement)(child) ? mapFn(child) : child;
    };
    var result = Object.create(null);
    if (children) react.Children.map(children, function(c) {
        return c;
    }).forEach(function(child) {
        // run the map function here instead so that the key is the computed one
        result[child.key] = mapper(child);
    });
    return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */ function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};
    function getValueForKey(key) {
        return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextKeysPending = Object.create(null);
    var pendingKeys = [];
    for(var prevKey in prev){
        if (prevKey in next) {
            if (pendingKeys.length) {
                nextKeysPending[prevKey] = pendingKeys;
                pendingKeys = [];
            }
        } else {
            pendingKeys.push(prevKey);
        }
    }
    var i;
    var childMapping = {};
    for(var nextKey in next){
        if (nextKeysPending[nextKey]) {
            for(i = 0; i < nextKeysPending[nextKey].length; i++){
                var pendingNextKey = nextKeysPending[nextKey][i];
                childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
            }
        }
        childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`
    for(i = 0; i < pendingKeys.length; i++){
        childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
    return childMapping;
}
function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function(child) {
        return /*#__PURE__*/ (0,react.cloneElement)(child, {
            onExited: onExited.bind(null, child),
            in: true,
            appear: getProp(child, 'appear', props),
            enter: getProp(child, 'enter', props),
            exit: getProp(child, 'exit', props)
        });
    });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function(key) {
        var child = children[key];
        if (!/*#__PURE__*/ (0,react.isValidElement)(child)) return;
        var hasPrev = key in prevChildMapping;
        var hasNext = key in nextChildMapping;
        var prevChild = prevChildMapping[key];
        var isLeaving = /*#__PURE__*/ (0,react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)
        if (hasNext && (!hasPrev || isLeaving)) {
            // console.log('entering', key)
            children[key] = /*#__PURE__*/ (0,react.cloneElement)(child, {
                onExited: onExited.bind(null, child),
                in: true,
                exit: getProp(child, 'exit', nextProps),
                enter: getProp(child, 'enter', nextProps)
            });
        } else if (!hasNext && hasPrev && !isLeaving) {
            // item is old (exiting)
            // console.log('leaving', key)
            children[key] = /*#__PURE__*/ (0,react.cloneElement)(child, {
                in: false
            });
        } else if (hasNext && hasPrev && /*#__PURE__*/ (0,react.isValidElement)(prevChild)) {
            // item hasn't changed transition states
            // copy over the last transition props;
            // console.log('unchanged', key)
            children[key] = /*#__PURE__*/ (0,react.cloneElement)(child, {
                onExited: onExited.bind(null, child),
                in: prevChild.props.in,
                exit: getProp(child, 'exit', nextProps),
                enter: getProp(child, 'enter', nextProps)
            });
        }
    });
    return children;
}

;// ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/react-transition-group/esm/TransitionGroup.js








var values = Object.values || function(obj) {
    return Object.keys(obj).map(function(k) {
        return obj[k];
    });
};
var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
        return child;
    }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */ var TransitionGroup = /*#__PURE__*/ function(_React$Component) {
    (0,inheritsLoose/* default */.A)(TransitionGroup, _React$Component);
    function TransitionGroup(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var handleExited = _this.handleExited.bind((0,assertThisInitialized/* default */.A)(_this)); // Initial children should all be entering, dependent on appear
        _this.state = {
            contextValue: {
                isMounting: true
            },
            handleExited: handleExited,
            firstRender: true
        };
        return _this;
    }
    var _proto = TransitionGroup.prototype;
    _proto.componentDidMount = function componentDidMount() {
        this.mounted = true;
        this.setState({
            contextValue: {
                isMounting: false
            }
        });
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
    };
    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
        var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
        return {
            children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
            firstRender: false
        };
    } // node is `undefined` when user provided `nodeRef` prop
    ;
    _proto.handleExited = function handleExited(child, node) {
        var currentChildMapping = getChildMapping(this.props.children);
        if (child.key in currentChildMapping) return;
        if (child.props.onExited) {
            child.props.onExited(node);
        }
        if (this.mounted) {
            this.setState(function(state) {
                var children = (0,esm_extends/* default */.A)({}, state.children);
                delete children[child.key];
                return {
                    children: children
                };
            });
        }
    };
    _proto.render = function render() {
        var _this$props = this.props, Component = _this$props.component, childFactory = _this$props.childFactory, props = (0,objectWithoutPropertiesLoose/* default */.A)(_this$props, [
            "component",
            "childFactory"
        ]);
        var contextValue = this.state.contextValue;
        var children = values(this.state.children).map(childFactory);
        delete props.appear;
        delete props.enter;
        delete props.exit;
        if (Component === null) {
            return /*#__PURE__*/ react.createElement(TransitionGroupContext/* default */.A.Provider, {
                value: contextValue
            }, children);
        }
        return /*#__PURE__*/ react.createElement(TransitionGroupContext/* default */.A.Provider, {
            value: contextValue
        }, /*#__PURE__*/ react.createElement(Component, props, children));
    };
    return TransitionGroup;
}(react.Component);
TransitionGroup.propTypes =  false ? 0 : {};
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ const esm_TransitionGroup = (TransitionGroup);


/***/ }),

/***/ 92849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils_useForkRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26858);
/* __next_internal_client_entry_do_not_use__ default auto */ 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils_useForkRef__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);


/***/ }),

/***/ 93656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i7: () => (/* binding */ keyframes),
/* harmony export */   mL: () => (/* binding */ Global)
/* harmony export */ });
/* unused harmony exports ClassNames, createElement, css, jsx */
/* harmony import */ var _emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82701);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91844);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90062);
/* harmony import */ var _emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79497);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81450);
/* harmony import */ var _barrel_optimize_names_emotion_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24045);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78910);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);











var jsx = function jsx(type, props) {
    // eslint-disable-next-line prefer-rest-params
    var args = arguments;
    if (props == null || !_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.h.call(props, 'css')) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(undefined, args);
    }
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = _emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.E;
    createElementArgArray[1] = (0,_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.c)(type, props);
    for(var i = 2; i < argsLength; i++){
        createElementArgArray[i] = args[i];
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
};
(function(_jsx) {
    var JSX;
    (function(_JSX) {})(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
})(jsx || (jsx = {}));
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var Global = /* #__PURE__ */ (0,_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.w)(function(props, cache) {
    var styles = props.styles;
    var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__/* .serializeStyles */ .J)([
        styles
    ], undefined, react__WEBPACK_IMPORTED_MODULE_0__.useContext(_emotion_element_f0de968e_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__.T));
    // but it is based on a constant that will never change at runtime
    // it's effectively like having two implementations and switching them out
    // so it's not actually breaking anything
    var sheetRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_1__/* .useInsertionEffectWithLayoutFallback */ .i)(function() {
        var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675
        var sheet = new cache.sheet.constructor({
            key: key,
            nonce: cache.sheet.nonce,
            container: cache.sheet.container,
            speedy: cache.sheet.isSpeedy
        });
        var rehydrating = false;
        var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");
        if (cache.sheet.tags.length) {
            sheet.before = cache.sheet.tags[0];
        }
        if (node !== null) {
            rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s
            node.setAttribute('data-emotion', key);
            sheet.hydrate([
                node
            ]);
        }
        sheetRef.current = [
            sheet,
            rehydrating
        ];
        return function() {
            sheet.flush();
        };
    }, [
        cache
    ]);
    (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_1__/* .useInsertionEffectWithLayoutFallback */ .i)(function() {
        var sheetRefCurrent = sheetRef.current;
        var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
        if (rehydrating) {
            sheetRefCurrent[1] = false;
            return;
        }
        if (serialized.next !== undefined) {
            // insert keyframes
            (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__/* .insertStyles */ .sk)(cache, serialized.next, true);
        }
        if (sheet.tags.length) {
            // if this doesn't exist then it will be null so the style element will be appended
            var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
            sheet.before = element;
            sheet.flush();
        }
        cache.insert("", serialized, sheet, false);
    }, [
        cache,
        serialized.name
    ]);
    return null;
});
function css() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_2__/* .serializeStyles */ .J)(args);
}
function keyframes() {
    var insertable = css.apply(void 0, arguments);
    var name = "animation-" + insertable.name;
    return {
        name: name,
        styles: "@keyframes " + name + "{" + insertable.styles + "}",
        anim: 1,
        toString: function toString() {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
        }
    };
}
var classnames = function classnames(args) {
    var len = args.length;
    var i = 0;
    var cls = '';
    for(; i < len; i++){
        var arg = args[i];
        if (arg == null) continue;
        var toAdd = void 0;
        switch(typeof arg){
            case 'boolean':
                break;
            case 'object':
                {
                    if (Array.isArray(arg)) {
                        toAdd = classnames(arg);
                    } else {
                        toAdd = '';
                        for(var k in arg){
                            if (arg[k] && k) {
                                toAdd && (toAdd += ' ');
                                toAdd += k;
                            }
                        }
                    }
                    break;
                }
            default:
                {
                    toAdd = arg;
                }
        }
        if (toAdd) {
            cls && (cls += ' ');
            cls += toAdd;
        }
    }
    return cls;
};
function merge(registered, css, className) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
    if (registeredStyles.length < 2) {
        return className;
    }
    return rawClassName + css(registeredStyles);
}
var Insertion = function Insertion(_ref) {
    var cache = _ref.cache, serializedArr = _ref.serializedArr;
    useInsertionEffectAlwaysWithSyncFallback(function() {
        for(var i = 0; i < serializedArr.length; i++){
            insertStyles(cache, serializedArr[i], false);
        }
    });
    return null;
};
var ClassNames = /* #__PURE__ */ (/* unused pure expression or super */ null && (withEmotionCache(function(props, cache) {
    var hasRendered = false;
    var serializedArr = [];
    var css = function css() {
        if (hasRendered && isDevelopment) {
            throw new Error('css can only be used during render');
        }
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var serialized = serializeStyles(args, cache.registered);
        serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`
        registerStyles(cache, serialized, false);
        return cache.key + "-" + serialized.name;
    };
    var cx = function cx() {
        if (hasRendered && isDevelopment) {
            throw new Error('cx can only be used during render');
        }
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
            args[_key2] = arguments[_key2];
        }
        return merge(cache.registered, css, classnames(args));
    };
    var content = {
        css: css,
        cx: cx,
        theme: React.useContext(ThemeContext)
    };
    var ele = props.children(content);
    hasRendered = true;
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Insertion, {
        cache: cache,
        serializedArr: serializedArr
    }), ele);
})));



/***/ }),

/***/ 99268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ generateUtilityClass)
/* harmony export */ });
/* unused harmony exports globalStateClasses, isGlobalState */
/* harmony import */ var _ClassNameGenerator_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77982);

const globalStateClasses = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected'
};
function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
  const globalStateClass = globalStateClasses[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${_ClassNameGenerator_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.generate(componentName)}-${slot}`;
}
function isGlobalState(slot) {
  return globalStateClasses[slot] !== undefined;
}

/***/ }),

/***/ 99916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83752);

function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return (0,_mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(acc, item, {
    clone: false // No need to clone deep, it's way faster.
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge);

/***/ })

}]);
//# sourceMappingURL=485-32599bcc79c30389.js.map