/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/block-types/tab-pane/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/block-types/tab-pane/edit.js":
/*!******************************************!*\
  !*** ./src/block-types/tab-pane/edit.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);





const edit = props => {
  const {
    setAttributes,
    attributes: {
      index,
      id,
      tabId
    },
    context: {
      tabsId
    }
  } = props;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => setAttributes({
    id: `${tabsId}-pane-${index}`,
    tabId: `${tabsId}-tab-${index}`
  }), [tabsId]);
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])();
  const innerBlocksPropsConfig = [{ ...blockProps
  }, {
    renderAppender: false,
    templateLock: false
  }];
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useInnerBlocksProps"] ? Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useInnerBlocksProps"])(...innerBlocksPropsConfig) : Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["__experimentalUseInnerBlocksProps"])(...innerBlocksPropsConfig);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: id,
    className: "tab-pane fade",
    role: "tabpanel",
    "aria-labelledby": tabId
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", innerBlocksProps, innerBlocksProps.children, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "button-block-appender__container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].ButtonBlockAppender, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/block-types/tab-pane/editor.scss":
/*!**********************************************!*\
  !*** ./src/block-types/tab-pane/editor.scss ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-types/tab-pane/index.js":
/*!*******************************************!*\
  !*** ./src/block-types/tab-pane/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/block-types/tab-pane/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/block-types/tab-pane/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/block-types/tab-pane/save.js");
/* harmony import */ var _icons_jumbotron_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/jumbotron.svg */ "./src/icons/jumbotron.svg");


/**
 * Internationalization.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/internationalization
 */

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import "./style.scss";

/**
 * Styles applied only in the editor.
 */


/**
 * Internal dependencies.
 */



/**
 * Block Icon.
 */


/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("beer-blocks/tab-pane", {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Tab Pane", "block title", "beer-blocks"),
  category: "beer-blocks",
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Create a Tab pane component.", "block description", "beer-blocks"),
  textdomain: "beer-blocks",
  parent: ["beer-blocks/tabs"],
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: _icons_jumbotron_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    alt: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Tab Pane", "block title", "beer-blocks")
  }),
  attributes: {
    index: {
      type: "number"
    },
    id: {
      type: "string"
    },
    tabId: {
      type: "string"
    }
  },
  usesContext: ["tabsId"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/block-types/tab-pane/save.js":
/*!******************************************!*\
  !*** ./src/block-types/tab-pane/save.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);




const save = props => {
  const {
    attributes: {
      id,
      tabId
    }
  } = props;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"].save();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: id,
    className: "tab-pane fade",
    role: "tabpanel",
    "aria-labelledby": tabId
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./src/icons/jumbotron.svg":
/*!*********************************!*\
  !*** ./src/icons/jumbotron.svg ***!
  \*********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgJumbotron; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgJumbotron(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 77.06 70.71"
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    "data-name": "Capa 2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    "data-name": "Capa 1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M72.24 42.27H4.82A4.83 4.83 0 010 37.45V4.82A4.82 4.82 0 014.82 0h67.42a4.82 4.82 0 014.82 4.82v32.63a4.83 4.83 0 01-4.82 4.82zM4.82 3.21a1.61 1.61 0 00-1.61 1.61v32.63a1.6 1.6 0 001.61 1.6h67.42a1.6 1.6 0 001.61-1.6V4.82a1.61 1.61 0 00-1.61-1.61z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M14.73 70.71H5.21A4.77 4.77 0 01.45 66v-9.57a4.77 4.77 0 014.76-4.76h9.52a4.77 4.77 0 014.76 4.76V66a4.77 4.77 0 01-4.76 4.76zM5.21 54.84a1.59 1.59 0 00-1.58 1.59V66a1.59 1.59 0 001.58 1.59h9.52A1.59 1.59 0 0016.32 66v-9.57a1.59 1.59 0 00-1.59-1.59z",
    fill: "#efa126"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M43.29 70.71h-9.52A4.77 4.77 0 0129 66v-9.57a4.77 4.77 0 014.76-4.76h9.52a4.77 4.77 0 014.76 4.76V66a4.77 4.77 0 01-4.76 4.76zm-9.52-15.87a1.59 1.59 0 00-1.59 1.59V66a1.59 1.59 0 001.59 1.59h9.52A1.59 1.59 0 0044.87 66v-9.57a1.59 1.59 0 00-1.58-1.59zM71.84 70.71h-9.52A4.76 4.76 0 0157.57 66v-9.57a4.76 4.76 0 014.75-4.76h9.52a4.76 4.76 0 014.76 4.76V66a4.76 4.76 0 01-4.76 4.76zm-9.52-15.87a1.59 1.59 0 00-1.58 1.59V66a1.59 1.59 0 001.58 1.59h9.52A1.59 1.59 0 0073.43 66v-9.57a1.59 1.59 0 00-1.59-1.59z"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3Ny4wNiA3MC43MSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNlZmExMjY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYXBhXzIiIGRhdGEtbmFtZT0iQ2FwYSAyIj48ZyBpZD0iQ2FwYV8xLTIiIGRhdGEtbmFtZT0iQ2FwYSAxIj48cGF0aCBkPSJNNzIuMjQsNDIuMjdINC44MkE0LjgzLDQuODMsMCwwLDEsMCwzNy40NVY0LjgyQTQuODIsNC44MiwwLDAsMSw0LjgyLDBINzIuMjRhNC44Miw0LjgyLDAsMCwxLDQuODIsNC44MlYzNy40NWE0LjgzLDQuODMsMCwwLDEtNC44Miw0LjgyWk00LjgyLDMuMjFBMS42MSwxLjYxLDAsMCwwLDMuMjEsNC44MlYzNy40NWExLjYsMS42LDAsMCwwLDEuNjEsMS42SDcyLjI0YTEuNiwxLjYsMCwwLDAsMS42MS0xLjZWNC44MmExLjYxLDEuNjEsMCwwLDAtMS42MS0xLjYxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE0LjczLDcwLjcxSDUuMjFBNC43Nyw0Ljc3LDAsMCwxLC40NSw2NlY1Ni40M2E0Ljc3LDQuNzcsMCwwLDEsNC43Ni00Ljc2aDkuNTJhNC43Nyw0Ljc3LDAsMCwxLDQuNzYsNC43NlY2NmE0Ljc3LDQuNzcsMCwwLDEtNC43Niw0Ljc2Wk01LjIxLDU0Ljg0YTEuNTksMS41OSwwLDAsMC0xLjU4LDEuNTlWNjZhMS41OSwxLjU5LDAsMCwwLDEuNTgsMS41OWg5LjUyQTEuNTksMS41OSwwLDAsMCwxNi4zMiw2NlY1Ni40M2ExLjU5LDEuNTksMCwwLDAtMS41OS0xLjU5WiIvPjxwYXRoIGQ9Ik00My4yOSw3MC43MUgzMy43N0E0Ljc3LDQuNzcsMCwwLDEsMjksNjZWNTYuNDNhNC43Nyw0Ljc3LDAsMCwxLDQuNzYtNC43Nmg5LjUyYTQuNzcsNC43NywwLDAsMSw0Ljc2LDQuNzZWNjZhNC43Nyw0Ljc3LDAsMCwxLTQuNzYsNC43NlpNMzMuNzcsNTQuODRhMS41OSwxLjU5LDAsMCwwLTEuNTksMS41OVY2NmExLjU5LDEuNTksMCwwLDAsMS41OSwxLjU5aDkuNTJBMS41OSwxLjU5LDAsMCwwLDQ0Ljg3LDY2VjU2LjQzYTEuNTksMS41OSwwLDAsMC0xLjU4LTEuNTlaIi8+PHBhdGggZD0iTTcxLjg0LDcwLjcxSDYyLjMyQTQuNzYsNC43NiwwLDAsMSw1Ny41Nyw2NlY1Ni40M2E0Ljc2LDQuNzYsMCwwLDEsNC43NS00Ljc2aDkuNTJhNC43Niw0Ljc2LDAsMCwxLDQuNzYsNC43NlY2NmE0Ljc2LDQuNzYsMCwwLDEtNC43Niw0Ljc2Wk02Mi4zMiw1NC44NGExLjU5LDEuNTksMCwwLDAtMS41OCwxLjU5VjY2YTEuNTksMS41OSwwLDAsMCwxLjU4LDEuNTloOS41MkExLjU5LDEuNTksMCwwLDAsNzMuNDMsNjZWNTYuNDNhMS41OSwxLjU5LDAsMCwwLTEuNTktMS41OVoiLz48L2c+PC9nPjwvc3ZnPg==");


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map