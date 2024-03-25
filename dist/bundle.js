/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sea.jpg */ \"./src/images/sea.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size:100vw 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.game-header {\n  margin-top: 2rem;\n}\n\nh2 {\n  text-align: center;\n  margin: 1rem 0;\n}\n\n.player-stats-wrapper,\n.ai-stats-wrapper {\n  text-align: left;\n  margin-top: 2.5rem;\n  /* color: rgb(16, 8, 78); */\n  font-size: 1.3rem;\n}\n\n.ship-img {\n  max-height: 50px;\n  min-width: 150px;\n}\n\n.boards-wrapper {\n  margin-top: 1rem;\n  display: flex;\n  min-height: 600px;\n  width: 100%;\n  gap: 2rem;\n  justify-content: center;\n  flex-wrap: wrap;\n  background-color: rgb(255, 255, 255, 0.5);\n}\n\n.ai-board,\n.player-board{\n  width: 500px;\n  height: 500px;\n  border: 2px solid black;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.ai-board > .cell,\n.ai-board > .cell:hover,\n.ai-board > .cell.has-ship {\n  background-color:rgba(16, 16, 240, 0.18)\n}\n\n.cell {\n  width: 10%;\n  height: 10%;\n  border: 0.5px solid black;\n  flex: 1 0 10%;\n  background: rgb(255, 255, 255, 0.5);\n}\n\n.cell.has-ship {\n  background-color: blueviolet;\n}\n\n.cell.is-hit,\n.ai-board > .cell.is-hit:hover {\n  background:lightcoral;\n}\n\n.cell.has-ship.is-hit,\n.ai-board > .cell.has-ship.is-hit:hover {\n  background:radial-gradient(red, blueviolet);\n}\n\n.ai-board > .cell:hover {\n  background: radial-gradient(closest-side, #b60707, #1625ad43  , #1625ad43);;\n} \n\n.menu {\n  padding: 1rem 4rem;\n  align-self: stretch;\n  margin-top: 1rem;\n  display: flex;\n  gap: 4rem;\n  justify-content: space-around;\n  background-color: rgb(255, 255, 255, 0.5);\n}\n\nbutton {\n  font-size: 1.1rem;\n  font-weight: 700;\n  padding: 0.3rem 0.5rem;\n  color: purple;\n  border-radius: 12px;\n  flex:1;\n}\n\nbutton:hover {\n  transform: scale(1.03);\n}\n\n\n\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/cell.js":
/*!*********************!*\
  !*** ./src/cell.js ***!
  \*********************/
/***/ ((module) => {

eval("class Cell {\n  \n  constructor() {\n    this.isHit = false;\n    this.shipHere = undefined;\n  }\n  \n};\n\nmodule.exports = Cell;\n\n//# sourceURL=webpack://battleship/./src/cell.js?");

/***/ }),

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const shipFive = __webpack_require__(/*! ./images/ship-5.svg */ \"./src/images/ship-5.svg\");\nconst shipFour = __webpack_require__(/*! ./images/ship-4.png */ \"./src/images/ship-4.png\");\nconst shipThree = __webpack_require__(/*! ./images/ship-3.png */ \"./src/images/ship-3.png\");\nconst shipTwo = __webpack_require__(/*! ./images/ship-2.svg */ \"./src/images/ship-2.svg\");\n\nconsole.log(shipFive)\n\nfunction domController () {\n  const body = document.querySelector('body');\n\n  let plOneBoardDiv;\n  let plTwoBoardDiv;\n  let randomizeBtn;\n  let startBtn; \n  let restartBtn;\n\n  const getPlOneBoardDiv = () => plOneBoardDiv\n  const getPlTwoBoardDiv = () => plTwoBoardDiv;\n  const getRandomizeBtn = () => randomizeBtn;\n  const getStartBtn = () => startBtn;\n  const getRestartBtn = () => restartBtn;\n\n  const initGame = (plOneBoardObj, plTwoBoardObj) => {\n    body.innerHTML = \"\";\n    placeHeader(); \n    placeBoards();\n    renderBoard(plOneBoardDiv, plOneBoardObj);\n    renderBoard(plTwoBoardDiv, plTwoBoardObj);\n    placeMenu();\n  };\n\n  const renderBoard = (board, gameBoardObj) => {\n    board.innerHTML = \"\";\n    gameBoardObj.board.forEach((rowObj) => {\n        rowObj.forEach((cellObj) => {\n          const cell = document.createElement('div');\n          cell.className = \"cell\";\n          if(cellObj.shipHere) {cell.classList.add('has-ship')}\n          if(cellObj.isHit) {cell.classList.add('is-hit')}\n          board.append(cell);\n        })\n      });\n\n    board.className == \"player-board\" ? \n    renderStatsField(document.querySelector('.player-stats-wrapper'), gameBoardObj) :\n    renderStatsField(document.querySelector('.ai-stats-wrapper'), gameBoardObj)\n  };\n  \n  const placeHeader = () => {\n    const header = document.createElement('h1');\n    header.innerText = '⛴ Battleship Game ⛴';\n    header.className = 'game-header';\n    body.append(header)\n  };\n\n  const placeBoards = () => {\n    const boardsWrapper = document.createElement('div');\n    boardsWrapper.className = \"boards-wrapper\";\n  \n    const plOneBoard = generateBoard(\"Human Intelligence?\");\n    const plOneStats = generateStatsField('player-stats-wrapper');\n  \n    const plTwoBoard = generateBoard(\"Artificial Intelligence\");\n    const plTwoStats = generateStatsField('ai-stats-wrapper');\n  \n    boardsWrapper.append(plOneStats)\n    boardsWrapper.append(plOneBoard);\n  \n    boardsWrapper.append(plTwoBoard);\n    boardsWrapper.append(plTwoStats)\n  \n    body.append(boardsWrapper)\n  };\n  \n  const generateBoard = (plName) => {\n    const wrapper = document.createElement('div');\n    const playerHeader = document.createElement('h2');\n    playerHeader.innerText = plName;\n    wrapper.append(playerHeader);\n\n    if(plName===\"Artificial Intelligence\") {\n      plTwoBoardDiv = document.createElement('div');\n      plTwoBoardDiv.className = \"ai-board\";\n      wrapper.className = \"ai-board-wrapper\";\n      wrapper.append(plTwoBoardDiv);\n    } else {\n      plOneBoardDiv = document.createElement('div');\n      plOneBoardDiv.className = \"player-board\";\n      wrapper.className = \"player-board-wrapper\";\n      wrapper.append(plOneBoardDiv);\n    };\n  \n    return wrapper\n  };\n\n  const generateStatsField = (clName) => {\n    const wrapper = document.createElement('div');\n    wrapper.className = clName;\n    return wrapper;\n  };\n\n  const renderStatsField = (statsBoardDiv, gameBoardObj) =>{\n    statsBoardDiv.innerHTML = \"\";\n\n    const shipsInGameDiv = document.createElement('div');\n    shipsInGameDiv.innerHTML = '<h2>Ships in game:</h2>'\n    \n\n    const sunkenShipsDiv = document.createElement('div');\n    sunkenShipsDiv.innerHTML = '<h2>Sunken ships:</h2>'\n    for(const ship of gameBoardObj.allShips) {\n      let imgSource;\n      switch(ship.length) {\n        case 5 : imgSource=shipFive; break;\n        case 4 : imgSource=shipFour; break;\n        case 3 : imgSource=shipThree; break; \n        case 2 : imgSource=shipTwo; break;\n      };\n      let img = new Image();\n      img.src = imgSource;\n      img.className = 'ship-img';      \n      ship.isSunk() ? sunkenShipsDiv.append(img) : shipsInGameDiv.append(img);\n      ship.isSunk() ? sunkenShipsDiv.innerHTML += \"<br>\" : shipsInGameDiv.innerHTML += \"<br>\";\n    }\n    statsBoardDiv.append(shipsInGameDiv);\n    statsBoardDiv.append(sunkenShipsDiv);\n  }\n\n  const placeMenu = () => {\n    const menu = document.createElement('div');\n    menu.className = 'menu';\n    menu.append(placeRandomizeBtn());\n    menu.append(placeStartGameBtn());\n    menu.append(placeRestartGameBtn());\n    body.append(menu);\n  };\n\n  const placeRandomizeBtn = () => {\n    randomizeBtn = document.createElement('button');\n    randomizeBtn.innerText = \"⚙️ Randomize Placement ⚙️\";\n    return randomizeBtn;\n  };\n\n  const placeStartGameBtn = () => {\n    startBtn = document.createElement('button');\n    startBtn.innerText = \"☸️ Begin Game ☸️\";\n    return startBtn;\n  };\n\n  const placeRestartGameBtn = () => {\n    restartBtn = document.createElement('button');\n    restartBtn.innerText = \"🔁 Restart Game 🔁\";\n    restartBtn.style.visibility = 'hidden';\n    return restartBtn;\n  };\n\n  const hideIrrelevantButtons = () => {\n    randomizeBtn.style.visibility = 'hidden';\n    startBtn.style.visibility = 'hidden';\n    restartBtn.style.visibility = 'visible';\n  };\n\n\n  return {\n    initGame,\n    renderBoard,\n    getPlOneBoardDiv,\n    getPlTwoBoardDiv,\n    getRandomizeBtn,\n    getStartBtn,\n    getRestartBtn,\n    hideIrrelevantButtons,\n  }\n}\n\n\n\n\nmodule.exports = domController\n\n\n\n//# sourceURL=webpack://battleship/./src/domController.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Cell = __webpack_require__(/*! ./cell */ \"./src/cell.js\")\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\")\n\n// xCoord: left -> right\n// yCoord: top -> bottom\n\nclass GameBoard {\n  constructor () {\n    this.board = []\n    this.allShips = [];\n    // populate board with Cell nodes, 10x10\n    for(let i=0; i<10; i++) {\n      const row = []\n      for(let j=0; j<10; j++) { row.push(new Cell()) };\n      this.board.push(row)\n    }\n  }\n\n  placeShip = (length, xCoord, yCoord) => {\n    const ship = new Ship(length);\n    \n    let xPlacementIsPossible = false;\n    let yPlacementIsPossible = false\n    \n    // check if placement coordinates are on board\n    const possibleRange = [...Array(10).keys()];\n    if ( !possibleRange.includes(xCoord) || !possibleRange.includes(yCoord) ) { return false };\n\n    // check placement possible on X and Y positions\n    if (possibleRange.includes(xCoord + length-1) ) { xPlacementIsPossible = true; };\n    if (possibleRange.includes(yCoord + length-1) ) { yPlacementIsPossible = true; };\n\n    // get the placement coordinates for X and Y positions (if available)\n    let xPositionCells = [];\n    let yPositionCells = [];\n\n    if (xPlacementIsPossible) { for (let x = xCoord; x<xCoord+length; x++ ) {xPositionCells.push(this.board[x][yCoord])} };\n    if (yPlacementIsPossible) { for (let y = yCoord; y<yCoord+length; y++ ) {yPositionCells.push(this.board[xCoord][y])} };\n\n    // check if X and Y positions already contain a ship\n    for (const cell of xPositionCells) { if (cell.shipHere!==undefined) xPlacementIsPossible=false };\n    for (const cell of yPositionCells) { if (cell.shipHere!==undefined) yPlacementIsPossible=false };\n\n    if (!xPlacementIsPossible && !yPlacementIsPossible) { return false }\n\n    // at this point its possible to place the ship at least in one direction\n    // try placing on X position, and if not possible place on Y position\n    if (xPlacementIsPossible) {\n      for (const cell of xPositionCells) {cell.shipHere = ship} \n    } else {\n      for (const cell of yPositionCells) {cell.shipHere = ship} \n    };\n    \n    this.allShips.push(ship)\n    return true;\n  }\n\n  receiveAttack = (xCoord, yCoord) => { \n    let targetedCell = this.board[xCoord][yCoord];\n    if (targetedCell.isHit) return false;\n\n    targetedCell.isHit = true;\n    if (targetedCell.shipHere) targetedCell.shipHere.hit()\n    return true\n  }\n\n  allShipsAreSunk = () => {\n    for(let ship of this.allShips) { if (!ship.isSunk()) return false };\n    return true\n  }\n}\n\nmodule.exports =  GameBoard\n\n//# sourceURL=webpack://battleship/./src/gameBoard.js?");

/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Player = __webpack_require__(/*! ./player */ \"./src/player.js\")\nconst GameBoard = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\nconst domController = __webpack_require__(/*! ./domController */ \"./src/domController.js\");\n\nfunction gameLoop() {\n  const gameDom = domController();\n\n  const configureNewGame = () => {\n    const plOneBoardObj = new GameBoard();\n    const plTwoBoardObj = new GameBoard();\n    const pl1 = new Player(plTwoBoardObj);\n    const pl2 = new Player(plOneBoardObj);\n    pl2.isAI = true;\n\n    configureRandomShipPlacement(plOneBoardObj);\n    configureRandomShipPlacement(plTwoBoardObj);\n\n    gameDom.initGame(plOneBoardObj, plTwoBoardObj);\n    gameDom.getRandomizeBtn().addEventListener('click', () => {configureNewGame()})\n    gameDom.getRestartBtn().addEventListener('click', () => {\n      const youSure = confirm(\"Do you want to restart game?\");\n      if (youSure) { configureNewGame() };\n    });\n    gameDom.getStartBtn().addEventListener('click', () => {  \n      gameDom.hideIrrelevantButtons();\n      playGame(pl1, pl2);\n    });\n  };\n\n  const configureRandomShipPlacement = (gameBoardObj) => {\n    const shipLengths = [5, 4, 3, 3, 2];\n      while(shipLengths.length > 0) {\n      const length = shipLengths.pop();\n      const xCoord = (Math.floor(Math.random() * 10));\n      const yCoord = (Math.floor(Math.random() * 10));\n      if(gameBoardObj.placeShip(length, xCoord, yCoord)==false) { shipLengths.push(length) };\n    }\n  };\n\n  const playGame = (pl1, pl2) => {\n    let isPlOneTurn = true;\n    \n    function playRound(isPlOneTurn) {\n      if(isPlOneTurn) {\n        destroyClickListenersOfBoard(gameDom.getPlOneBoardDiv());\n        pl1.isAI ? aiAttack(pl1, gameDom.getPlTwoBoardDiv()) : humanAttack(gameDom.getPlTwoBoardDiv());\n      } else {\n        destroyClickListenersOfBoard(gameDom.getPlTwoBoardDiv());\n        pl2.isAI ? aiAttack(pl2, gameDom.getPlOneBoardDiv()) : humanAttack(gameDom.getPlOneBoardDiv());\n      }\n    };\n\n    function aiAttack(player, enemyBoardDiv) {\n      player.aiAttack();\n      gameDom.renderBoard(enemyBoardDiv, player.enemyGameBoard);\n      isPlOneTurn=!isPlOneTurn;\n      loopUntilWinner();\n    };\n\n    function humanAttack(boardDiv) {\n      for (const cellDiv of boardDiv.children) {\n        cellDiv.addEventListener('click', performHit);\n      }\n    };\n\n    function performHit( {target: cellDiv} ){\n      if (hitIsLegal(cellDiv)) {\n        const currentPlayer = isPlOneTurn ? pl1 : pl2;\n        const [xCoord, yCoord] = translateToCoordinates(cellDiv);\n        currentPlayer.attack(xCoord, yCoord);\n        gameDom.renderBoard(cellDiv.parentElement, currentPlayer.enemyGameBoard);\n        isPlOneTurn=!isPlOneTurn;\n        loopUntilWinner() ;\n      }\n    };\n    \n    function hitIsLegal(cellDiv) {\n      if(cellDiv.classList.contains('is-hit')) return false;\n      return true;\n    };\n    \n    function translateToCoordinates(cellDiv) {\n      const boardDiv = cellDiv.parentElement;\n      const boardArr = Array.from(boardDiv.children);\n      const cellIdx = boardArr.indexOf(cellDiv);\n  \n      let position = cellIdx;\n      let yCoord;\n      let xCoord = 0;\n      \n      while(position-10>=0) {\n          position-=10;\n          xCoord+=1;\n        }\n      yCoord = position;\n      return [xCoord, yCoord]\n    };\n\n    function loopUntilWinner(){\n      if(pl1.enemyGameBoard.allShipsAreSunk()) {endGame(pl1); return };\n      if(pl2.enemyGameBoard.allShipsAreSunk()) {endGame(pl2); return };\n      playRound(isPlOneTurn)\n    };\n\n    function endGame(player) { \n      let aiBoard = document.querySelector('.ai-board');\n      aiBoard.classList.add('player-board');\n      aiBoard.classList.remove('ai-board');\n      alert(`${player.getName()} is the undisputed winner!`);\n    };\n\n    function destroyClickListenersOfBoard(boardDiv) {\n      for (const cellDiv of boardDiv.children) {\n        cellDiv.removeEventListener('click', performHit)\n      }\n    };\n\n    playRound(isPlOneTurn)   \n  };\n\n  return { \n    configureNewGame,\n  }\n}\n\nmodule.exports = gameLoop;\n\n//# sourceURL=webpack://battleship/./src/gameLoop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\nconst domController = __webpack_require__(/*! ./domController */ \"./src/domController.js\")\nconst gameLoop = __webpack_require__(/*! ./gameLoop */ \"./src/gameLoop.js\")\nconst shipFive = __webpack_require__(/*! ./images/ship-5.svg */ \"./src/images/ship-5.svg\")\nconst shipFour = __webpack_require__(/*! ./images/ship-4.png */ \"./src/images/ship-4.png\")\nconst shipThree = __webpack_require__(/*! ./images/ship-3.svg */ \"./src/images/ship-3.svg\")\nconst shipTwo = __webpack_require__(/*! ./images/ship-2.svg */ \"./src/images/ship-2.svg\")\n;\n\n\n\ngameLoop().configureNewGame();\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

eval("\nclass Player {\n  constructor(enemyGameBoard) {\n    this.enemyGameBoard = enemyGameBoard;\n    this.isAI = false;\n    \n  }\n  getName = () => {\n    return this.isAI ? \"Artificial Intelligence\" : \"Human Intelligence\" ;\n  }\n\n  aiAttack = () => {\n    const xCoord = (Math.floor(Math.random() * 10));\n    const yCoord = (Math.floor(Math.random() * 10));\n    const targetedCell = this.enemyGameBoard.board[xCoord][yCoord]\n\n    if(targetedCell.isHit) { return this.aiAttack() }\n\n    targetedCell.isHit=true;\n    if (targetedCell.shipHere) targetedCell.shipHere.hit()\n  }\n\n  attack = (xCoord, yCoord) => {\n    const targetedCell = this.enemyGameBoard.board[xCoord][yCoord]\n\n    if(targetedCell.isHit) { return false } \n\n    targetedCell.isHit=true;\n    if (targetedCell.shipHere) targetedCell.shipHere.hit()\n  }\n}\n\nmodule.exports = Player\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("class Ship {\n  constructor (length) {\n    this.length = length;\n    this.hitCapacity = length;\n  }\n  \n  hit = () => {this.hitCapacity-=1}\n\n  isSunk = () => {return this.hitCapacity==0 ? true : false}\n}\n\nmodule.exports = Ship\n\n// 5 ships with lengths [5, 4, 3, 3, 2]\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/images/sea.jpg":
/*!****************************!*\
  !*** ./src/images/sea.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d6a6f700b1181b90ea60.jpg\";\n\n//# sourceURL=webpack://battleship/./src/images/sea.jpg?");

/***/ }),

/***/ "./src/images/ship-2.svg":
/*!*******************************!*\
  !*** ./src/images/ship-2.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a0af2d323a7512a2062e.svg\";\n\n//# sourceURL=webpack://battleship/./src/images/ship-2.svg?");

/***/ }),

/***/ "./src/images/ship-3.png":
/*!*******************************!*\
  !*** ./src/images/ship-3.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"893e62296c59b303c514.png\";\n\n//# sourceURL=webpack://battleship/./src/images/ship-3.png?");

/***/ }),

/***/ "./src/images/ship-3.svg":
/*!*******************************!*\
  !*** ./src/images/ship-3.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8f7ac5b279386d3c180e.svg\";\n\n//# sourceURL=webpack://battleship/./src/images/ship-3.svg?");

/***/ }),

/***/ "./src/images/ship-4.png":
/*!*******************************!*\
  !*** ./src/images/ship-4.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f724a9d66361d2e05569.png\";\n\n//# sourceURL=webpack://battleship/./src/images/ship-4.png?");

/***/ }),

/***/ "./src/images/ship-5.svg":
/*!*******************************!*\
  !*** ./src/images/ship-5.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"154a2b6a134e697b917d.svg\";\n\n//# sourceURL=webpack://battleship/./src/images/ship-5.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;