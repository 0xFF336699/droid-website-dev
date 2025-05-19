(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3763],{

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

/***/ 1543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ routerUtils)
/* harmony export */ });

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
function checkToPath(router, expectNowPath, pointPath, backCount) {
    return __async(this, null, function*() {
        const nowPath = router.pathname;
        console.log("nowpath=", nowPath);
        console.log("expectNowPath=", expectNowPath);
        console.log("pointPath=", pointPath);
        if (nowPath === pointPath) {
            return;
        }
        if (expectNowPath !== nowPath) {
            router.replace(pointPath);
        }
        while(backCount > 0){
            router.back();
            backCount--;
        }
        if (router.pathname !== pointPath && pointPath) {
            router.push(pointPath);
        }
    });
}
const routerUtils = {
    checkToPath
}; //# sourceMappingURL=router-utils.js.map


/***/ }),

/***/ 12006:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ei: () => (/* binding */ isIP)
});

// UNUSED EXPORTS: ipVersion, isIPv4, isIPv6

;// ../../node_modules/.pnpm/ip-regex@5.0.0/node_modules/ip-regex/index.js
const word = '[a-fA-F\\d:]';

const boundry = options => options && options.includeBoundaries
	? `(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))`
	: '';

const v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';

const v6segment = '[a-fA-F\\d]{1,4}';

const v6 = `
(?:
(?:${v6segment}:){7}(?:${v6segment}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${v6segment}:){6}(?:${v4}|:${v6segment}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${v6segment}:){5}(?::${v4}|(?::${v6segment}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${v6segment}:){4}(?:(?::${v6segment}){0,1}:${v4}|(?::${v6segment}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${v6segment}:){3}(?:(?::${v6segment}){0,2}:${v4}|(?::${v6segment}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${v6segment}:){2}(?:(?::${v6segment}){0,3}:${v4}|(?::${v6segment}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${v6segment}:){1}(?:(?::${v6segment}){0,4}:${v4}|(?::${v6segment}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${v6segment}){0,5}:${v4}|(?::${v6segment}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim();

// Pre-compile only the exact regexes because adding a global flag make regexes stateful
const v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
const v4exact = new RegExp(`^${v4}$`);
const v6exact = new RegExp(`^${v6}$`);

const ip_regex_ipRegex = options => options && options.exact
	? v46Exact
	: new RegExp(`(?:${boundry(options)}${v4}${boundry(options)})|(?:${boundry(options)}${v6}${boundry(options)})`, 'g');

ip_regex_ipRegex.v4 = options => options && options.exact ? v4exact : new RegExp(`${boundry(options)}${v4}${boundry(options)}`, 'g');
ip_regex_ipRegex.v6 = options => options && options.exact ? v6exact : new RegExp(`${boundry(options)}${v6}${boundry(options)}`, 'g');

/* harmony default export */ const ip_regex = (ip_regex_ipRegex);

;// ../../node_modules/.pnpm/function-timeout@0.1.1/node_modules/function-timeout/browser.js
// Even though the browser version is a no-op, we wrap it to ensure consistent behavior.
function browser_functionTimeout(function_) {
	const wrappedFunction = (...arguments_) => function_(...arguments_);

	Object.defineProperty(wrappedFunction, 'name', {
		value: `functionTimeout(${function_.name || '<anonymous>'})`,
		configurable: true,
	});

	return wrappedFunction;
}

function browser_isTimeoutError() {
	return false;
}

;// ../../node_modules/.pnpm/is-regexp@3.1.0/node_modules/is-regexp/index.js
const {toString: is_regexp_toString} = Object.prototype;

function isRegexp(value) {
	return is_regexp_toString.call(value) === '[object RegExp]';
}

;// ../../node_modules/.pnpm/clone-regexp@3.0.0/node_modules/clone-regexp/index.js


const flagMap = {
	global: 'g',
	ignoreCase: 'i',
	multiline: 'm',
	dotAll: 's',
	sticky: 'y',
	unicode: 'u'
};

function clonedRegexp(regexp, options = {}) {
	if (!isRegexp(regexp)) {
		throw new TypeError('Expected a RegExp instance');
	}

	const flags = Object.keys(flagMap).map(flag => (
		(typeof options[flag] === 'boolean' ? options[flag] : regexp[flag]) ? flagMap[flag] : ''
	)).join('');

	const clonedRegexp = new RegExp(options.source || regexp.source, flags);

	clonedRegexp.lastIndex = typeof options.lastIndex === 'number' ?
		options.lastIndex :
		regexp.lastIndex;

	return clonedRegexp;
}

;// ../../node_modules/.pnpm/super-regex@0.2.0/node_modules/super-regex/index.js


 // TODO: Use `structuredClone` instead when targeting Node.js 18.

const resultToMatch = result => ({
	match: result[0],
	index: result.index,
	groups: result.slice(1),
	namedGroups: result.groups ?? {},
	input: result.input,
});

function super_regex_isMatch(regex, string, {timeout} = {}) {
	try {
		return browser_functionTimeout(() => clonedRegexp(regex).test(string), {timeout})();
	} catch (error) {
		if (browser_isTimeoutError(error)) {
			return false;
		}

		throw error;
	}
}

function firstMatch(regex, string, {timeout} = {}) {
	try {
		const result = functionTimeout(() => cloneRegexp(regex).exec(string), {timeout})();

		if (result === null) {
			return;
		}

		return resultToMatch(result);
	} catch (error) {
		if (isTimeoutError(error)) {
			return;
		}

		throw error;
	}
}

function matches(regex, string, {timeout = Number.POSITIVE_INFINITY, matchTimeout = Number.POSITIVE_INFINITY} = {}) {
	if (!regex.global) {
		throw new Error('The regex must have the global flag, otherwise, use `firstMatch()` instead');
	}

	return {
		* [Symbol.iterator]() {
			try {
				const matches = string.matchAll(regex); // The regex is only executed when iterated over.

				while (true) {
					const nextMatch = functionTimeout(() => matches.next(), {timeout: (timeout !== Number.POSITIVE_INFINITY || matchTimeout !== Number.POSITIVE_INFINITY) ? Math.min(timeout, matchTimeout) : undefined}); // `matches.next` must be called within an arrow function so that it doesn't loose its context.

					const end = timeSpan();
					const {value, done} = nextMatch();
					timeout -= Math.ceil(end());

					if (done) {
						break;
					}

					yield resultToMatch(value);
				}
			} catch (error) {
				if (!isTimeoutError(error)) {
					throw error;
				}
			}
		},
	};
}

;// ../../node_modules/.pnpm/is-ip@5.0.1/node_modules/is-ip/index.js



const maxIPv4Length = 15;
const maxIPv6Length = 45;

const options = {
	timeout: 400,
};

function isIP(string) {
	if (string.length > maxIPv6Length) {
		return false;
	}

	return super_regex_isMatch(ip_regex({exact: true}), string, options);
}

function isIPv6(string) {
	if (string.length > maxIPv6Length) {
		return false;
	}

	return isMatch(ipRegex.v6({exact: true}), string, options);
}

function isIPv4(string) {
	if (string.length > maxIPv4Length) {
		return false;
	}

	return isMatch(ipRegex.v4({exact: true}), string, options);
}

function ipVersion(string) {
	if (isIPv6(string)) {
		return 6;
	}

	if (isIPv4(string)) {
		return 4;
	}
}


/***/ }),

/***/ 14021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ actionListGroups),
  v: () => (/* binding */ initActionListGroups)
});

// EXTERNAL MODULE: ../../libs/app/static/dist/src/utils/router-utils.js
var router_utils = __webpack_require__(1543);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/is-in-android.js
var is_in_android = __webpack_require__(40044);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/AutoWebViewJs.js + 1 modules
var AutoWebViewJs = __webpack_require__(17696);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/androidDispatchers.js
var androidDispatchers = __webpack_require__(17385);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/android/scripts/window/windowUtils.js
var windowUtils = __webpack_require__(29481);
// EXTERNAL MODULE: ../../libs/droid/android/dist/src/htmls/accessibility-info-buttons/accessibility-info-buttons.js
var accessibility_info_buttons = __webpack_require__(712);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/actions/a11y/node-execute/node-execute.js + 122 modules
var node_execute = __webpack_require__(38205);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/index.js
var src = __webpack_require__(46382);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/events/projectEventUtils.js
var projectEventUtils = __webpack_require__(56964);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/core/project-member-type.js
var project_member_type = __webpack_require__(9751);
// EXTERNAL MODULE: ./src/components/trigger-list-action-list-common/ITriggerList-IActionList-common.intf.tsx
var ITriggerList_IActionList_common_intf = __webpack_require__(65639);
// EXTERNAL MODULE: __barrel_optimize__?names=ulid!=!../../node_modules/.pnpm/ulid@2.3.0/node_modules/ulid/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__(82131);
;// ./src/components/page/action-list/groups/a11y/node-select/mockA11yNodeInfo.ts
const mockA11yNodeInfo1 = {
    "activeActivity": "com.fanfanlo.droid.MainActivity",
    "pn": "com.fanfanlo.droid.debug",
    "cn": "android.widget.FrameLayout",
    "node": {
        "availableExtraData": [
            "android.view.accessibility.extra.DATA_TEXT_CHARACTER_LOCATION_KEY"
        ],
        "boundsInScreen": {
            "bottom": 733,
            "left": 57,
            "right": 264,
            "top": 631
        },
        "children": [],
        "className": "android.widget.Button",
        "isAccessibilityDataSensitive": false,
        "isAccessibilityFocused": false,
        "isCheckable": false,
        "isChecked": false,
        "isClickable": true,
        "isContentInvalid": false,
        "isContextClickable": false,
        "isDismissable": false,
        "isEditable": false,
        "isEnabled": true,
        "isFocusable": true,
        "isFocused": true,
        "isHeading": false,
        "isImportantForAccessibility": false,
        "isLongClickable": false,
        "isMultiLine": false,
        "isPassword": false,
        "isScreenReaderFocusable": false,
        "isScrollable": false,
        "isSelected": false,
        "isShowingHintText": false,
        "isTextEntryKey": false,
        "isTextSelectable": false,
        "isVisibleToUser": true,
        "text": "选择节点",
        "viewIdResourceName": "a11y-node-select-action-item-df1c",
        "index": 0,
        "listIndex": 24
    }
};
const mockA11yNodeInfo2 = {
    "activeActivity": "com.fanfanlo.droid.MainActivity",
    "pn": "com.fanfanlo.droid.debug",
    "cn": "android.widget.FrameLayout",
    "node": {
        "availableExtraData": [
            "android.view.accessibility.extra.DATA_TEXT_CHARACTER_LOCATION_KEY"
        ],
        "boundsInScreen": {
            "bottom": 1258,
            "left": 60,
            "right": 467,
            "top": 1186
        },
        "children": [],
        "className": "android.widget.TextView",
        "isAccessibilityDataSensitive": false,
        "isAccessibilityFocused": false,
        "isCheckable": false,
        "isChecked": false,
        "isClickable": false,
        "isContentInvalid": false,
        "isContextClickable": false,
        "isDismissable": false,
        "isEditable": false,
        "isEnabled": true,
        "isFocusable": false,
        "isFocused": false,
        "isHeading": false,
        "isImportantForAccessibility": false,
        "isLongClickable": false,
        "isMultiLine": false,
        "isPassword": false,
        "isScreenReaderFocusable": false,
        "isScrollable": false,
        "isSelected": false,
        "isShowingHintText": false,
        "isTextEntryKey": false,
        "isTextSelectable": false,
        "isVisibleToUser": true,
        "text": "动作组",
        "index": 15,
        "listIndex": 40
    }
};
const mockA11yNodeInfoList = [
    mockA11yNodeInfo1,
    mockA11yNodeInfo2
];
function getRandomMockA11yNodeInfo() {
    return mockA11yNodeInfoList[parseInt((Math.random() * mockA11yNodeInfoList.length).toString())];
}

// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/watcher/proxyWatch.js
var proxyWatch = __webpack_require__(99759);
;// ./src/components/page/action-list/groups/a11y/node-select/node-execute-select.tsx







const a11yNodeSelectActionItem = {
    id: "a11y-node-select-action-item-df1c",
    i18nNs: "homepage/components/page/action-list/groups/a11y/node-select/content",
    nameKey: "content.name",
    group: "a11yNodeSelectActionItem.group",
    descriptionKey: "content.description",
    type: "action",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(onAddSelect)
};
node_execute/* actionA11yNodeExecuteUtils */.p.onClickChange = onChangeSelect;
async function onSelect() {
    return new Promise((resolve)=>{
        if (!is_in_android/* isRealInAndroid */.nd) {
            return resolve(getRandomMockA11yNodeInfo());
        }
        const eventType = "a11yNodeSelectActionItem";
        const listenIndex = AutoWebViewJs/* autoWebViewJs */.yx.shellListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, eventType, eventType, false, onSelectNode);
        function onSelectNode(s) {
            const info = JSON.parse(s);
            console.log('fffffffffffffff', s);
            windowUtils/* windowUtils */.q.exitWindowById(windowId);
            AutoWebViewJs/* autoWebViewJs */.yx.shellRemoveListen(androidDispatchers/* androidDispatchers */.m.WebViewJsDispatcher.name, listenIndex);
            resolve(info);
        }
        const windowId = (0,index_esm/* ulid */.Z0)();
        (0,accessibility_info_buttons/* openHtmlShowA11yNodeInfoButton */.d)(eventType, windowId);
    });
}
async function onAddSelect(param) {
    let { query, router } = param;
    const nowPath = router.pathname;
    const info = await onSelect();
    const action = node_execute/* actionA11yNodeExecuteUtils */.p.mergeDataToDefultData({});
    action.javaData.info = info;
    const res = (0,src.getTriggerOrActionListPageParams)(query);
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
        data: action,
        projectMemberType: project_member_type/* ProjectMemberType */.K.actionGroup,
        projectInfo: res.data
    });
    router_utils/* routerUtils */.V.checkToPath(router, nowPath, query.backPath || "", 1);
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}
async function onChangeSelect(param) {
    let { query, onDataSelectedEventType } = param;
    console.log('lllllllllllllllllllllllllll2223333');
    const info = await onSelect();
    // onJavaDataChangeDataSelect?.(info)
    const res = (0,src.getTriggerOrActionListPageParams)(query);
    if (onDataSelectedEventType && res.data.action) {
        console.log('fffffffffffrom event type ');
        (0,proxyWatch/* getProxyDispatcher */.Ax)(res.data.action).dispatch(onDataSelectedEventType, info);
        return;
    }
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.updateJavaData, {
        data: {
            info
        },
        projectMemberType: project_member_type/* ProjectMemberType */.K.action,
        projectInfo: res.data
    });
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}

;// ./src/components/page/action-list/groups/a11y/a11y-group.ts

const a11yGroup = {
    i18nNs: "homepage/components/page/action-list/groups/a11y/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        a11yNodeSelectActionItem
    ]
};

// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/actions/app/action-open-app/IActionOpenApp.inft.js + 2 modules
var IActionOpenApp_inft = __webpack_require__(54501);
;// ./src/components/page/action-list/groups/app/app-select/app-select.tsx


// http://192.168.177.180:3000/locales/homepage/components/page/action-list/groups/app/zh-CN/app-select.json?v=1.0.1
// apps\homepage\public\locales\homepage\components\page\action-list\groups\app\app-select\zh-CN\content.json
// 明天早上在这里注入actionType，继续设计，似乎openApp可以放到一个map里处理，将来更新字段多了，也可以有个分流
// 在选择app的页面里应该是通过actionType找到一个函数，给这个函数注入被选择的app就行，这样的话以后安卓手机接收消息转发等也可以用选择app的页面了
// 这个名字似乎叫openApp更合适
// id注入设计的不合理
const selectAppActionItem = {
    id: "selectAppActionItem-7537eb25-586d-4178-9d9b-b817706a4c6b",
    i18nNs: "homepage/components/page/action-list/groups/app/app-select/content",
    nameKey: "content.name",
    group: "selectAppActionItem.group",
    descriptionKey: "content.description",
    type: "page",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerListLinkRender */.IS)("/app-selector", "selectAppActionItem-7537eb25-586d-4178-9d9b-b817706a4c6b", {
        actionType: IActionOpenApp_inft/* actionOpenAppUtils */.F.type
    })
};

// EXTERNAL MODULE: ../../libs/droid/android/dist/src/htmls/PnAnInfoWindow.js + 1 modules
var PnAnInfoWindow = __webpack_require__(92059);
// EXTERNAL MODULE: ../../libs/droid/project-interface/dist/src/actions/app/to-app-main-page/IToAppMainPage.intf.js + 1 modules
var IToAppMainPage_intf = __webpack_require__(32515);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/utils/stringUtils.js
var stringUtils = __webpack_require__(35103);
;// ./src/components/page/action-list/groups/app/to-app-main-page/to-app-main-page.tsx




const toAppMainPageActionItem = {
    id: "to-app-main-page-action-item-df1c",
    i18nNs: "homepage/components/page/action-list/groups/app/to-app-main-page/content",
    nameKey: "content.name",
    group: "toAppMainPageActionItem.group",
    descriptionKey: "content.description",
    type: "action",
    LinkRender: (0,ITriggerList_IActionList_common_intf/* createActionOrTriggerButtonRender */.cI)(to_app_main_page_onAddSelect)
};
IToAppMainPage_intf/* actionToAppMainPageUtils */.w.onClickChange = to_app_main_page_onChangeSelect;
async function to_app_main_page_onSelect() {
    let info;
    if (is_in_android/* isRealInAndroid */.nd) {
        info = await (0,PnAnInfoWindow/* openPnAnInfoWindow */.U)(true);
    } else {
        info = {
            pn: "".concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5), ".").concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5), ".").concat((0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5)),
            an: (0,stringUtils/* createRandomEnglishCharacters */.g0)(Math.floor(Math.random() * 5) + 5)
        };
    }
    // console.log('info1=', info)
    return info;
}
async function to_app_main_page_onAddSelect(param) {
    let { query } = param;
    const info = await to_app_main_page_onSelect();
    const res = (0,src.getTriggerOrActionListPageParams)(query);
    const action = IToAppMainPage_intf/* actionToAppMainPageUtils */.w.mergeDataToDefultData({
        javaData: {
            pn: info.pn,
            an: info.an
        }
    });
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.add, {
        data: action,
        projectMemberType: project_member_type/* ProjectMemberType */.K.actionGroup,
        projectInfo: res.data
    });
    window.history.back();
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}
async function to_app_main_page_onChangeSelect(param) {
    let { query } = param;
    const info = await to_app_main_page_onSelect();
    const res = (0,src.getTriggerOrActionListPageParams)(query);
    projectEventUtils/* projectEventUtils */.T.dispatchEditEvent(projectEventUtils/* projectEventUtils */.T.EditType.updateJavaData, {
        data: info,
        projectMemberType: project_member_type/* ProjectMemberType */.K.action,
        projectInfo: res.data
    });
    AutoWebViewJs/* autoWebViewJs */.yx.openSelfByPackage();
}

;// ./src/components/page/action-list/groups/app/app-group.ts


const appGroup = {
    i18nNs: "homepage/components/page/action-list/groups/app/content",
    nameKey: "content.name",
    descriptionKey: "content.description",
    items: [
        selectAppActionItem,
        toAppMainPageActionItem
    ]
};

;// ./src/components/page/action-list/action.data.ts


const actionListGroups = [
    appGroup,
    a11yGroup
];
async function initActionListGroups() {
    actionListGroups;
}


/***/ }),

/***/ 56915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33736);
/* harmony import */ var _fanfanlo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15463);
/* harmony import */ var _src_components_page_action_list_action_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14021);
/* harmony import */ var _src_components_trigger_list_action_list_common_TriggerListOrActionListUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85576);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79764);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42375);






function index() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { t } = (0,_fanfanlo__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("homepage/pages/action-list/content");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_ui__WEBPACK_IMPORTED_MODULE_5__/* .AppShell */ .G, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_trigger_list_action_list_common_TriggerListOrActionListUI__WEBPACK_IMPORTED_MODULE_2__/* .TriggerListOrActionListUI */ .M, {
            groups: _src_components_page_action_list_action_data__WEBPACK_IMPORTED_MODULE_1__/* .actionListGroups */ .j,
            title: t("content.title"),
            actionListParams: router.query,
            titleConf: {
                title: t("content.title")
            }
        })
    });
}


/***/ }),

/***/ 85576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ TriggerListOrActionListUI)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(33736);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(20532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@19.0.1_react@19.0.0__@emotion+styled@_kpkjigxuopup3qauiigb2zavni/node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(2621);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@19.0.0/node_modules/react/index.js
var react = __webpack_require__(91844);
// EXTERNAL MODULE: ../../libs/fanfanlo/dist/src/index.js
var src = __webpack_require__(15463);
;// ./src/components/trigger-list-action-list-common/context.tsx

const ActionListOrTriggerListPageParamsContext = /*#__PURE__*/ (0,react.createContext)({});
const ActionOrTriggerGroupListContext = /*#__PURE__*/ (0,react.createContext)({});

// EXTERNAL MODULE: ../../libs/app/ui/dist/src/components/appbar/AppBar.js + 3 modules
var AppBar = __webpack_require__(77190);
;// ./src/components/trigger-list-action-list-common/TriggerListOrActionListUI.tsx






function Item(param) {
    let { item } = param;
    const { t } = (0,src.useTranslation)(item.i18nNs);
    const params = (0,react.useContext)(ActionListOrTriggerListPageParamsContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            width: "100%",
            textIndent: "1rem",
            padding: "1px",
            backgroundColor: "#f6f2e9"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(item.LinkRender, {
                query: params,
                id: item.id,
                item: item,
                children: t(item.nameKey)
            })
        })
    });
}
function Group(param) {
    let { group } = param;
    const { t } = (0,src.useTranslation)(group.i18nNs);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.A, {
        sx: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
                sx: {
                    width: "100%",
                    backgroundColor: "#f6f9f6",
                    padding: "2px"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t(group.nameKey)
                })
            }),
            group.items.map((action)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Item, {
                    item: action
                }, action.i18nNs);
            })
        ]
    });
}
function GroupList() {
    const groups = (0,react.useContext)(ActionOrTriggerGroupListContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        sx: {
            width: "100%"
        },
        children: groups.map((group)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Group, {
                group: group
            }, group.i18nNs))
    });
}
function ActionListContent() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.A, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GroupList, {})
    });
}
function TriggerListOrActionListUI(param) {
    let { groups, title, actionListParams, titleConf } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionListOrTriggerListPageParamsContext, {
        value: actionListParams,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionOrTriggerGroupListContext, {
            value: groups,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* AppbarContainer */.W, {
                appbarProps: {
                    title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.A, {
                        children: title
                    }),
                    back: true
                },
                titleConf: titleConf,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionListContent, {})
            })
        })
    });
}


/***/ }),

/***/ 87096:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/action-list",
      function () {
        return __webpack_require__(56915);
      }
    ]);
    if(false) {}
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [485,668,5389,9080,3853,8905,1114,8584,636,6593,8792], () => (__webpack_exec__(87096)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=action-list-fc9610e15de4919a.js.map