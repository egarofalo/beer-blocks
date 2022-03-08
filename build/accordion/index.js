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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/block-types/accordion/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/block-types/accordion/edit.js":
/*!*******************************************!*\
  !*** ./src/block-types/accordion/edit.js ***!
  \*******************************************/
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
/* harmony import */ var _helpers_spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../helpers/spacing */ "./src/helpers/spacing.js");






const edit = props => {
  const {
    clientId,
    setAttributes,
    attributes: {
      id
    }
  } = props;
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])();
  const innerBlocksPropsConfig = [{}, {
    allowedBlocks: ["beer-blocks/accordion-item"],
    renderAppender: false
  }];
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useInnerBlocksProps"] ? Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useInnerBlocksProps"])(...innerBlocksPropsConfig) : Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["__experimentalUseInnerBlocksProps"])(...innerBlocksPropsConfig);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => setAttributes({
    id: clientId
  }), [clientId]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, _helpers_spacing__WEBPACK_IMPORTED_MODULE_4__["default"].controls({
    props
  })), _helpers_spacing__WEBPACK_IMPORTED_MODULE_4__["default"].visualizer(props, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "accordion",
    id: `accordion-${id}`,
    style: _helpers_spacing__WEBPACK_IMPORTED_MODULE_4__["default"].styles(props.attributes)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", innerBlocksProps)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "button-block-appender__container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].ButtonBlockAppender, null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/block-types/accordion/editor.scss":
/*!***********************************************!*\
  !*** ./src/block-types/accordion/editor.scss ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-types/accordion/index.js":
/*!********************************************!*\
  !*** ./src/block-types/accordion/index.js ***!
  \********************************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/block-types/accordion/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/block-types/accordion/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/block-types/accordion/save.js");
/* harmony import */ var _helpers_spacing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/spacing */ "./src/helpers/spacing.js");
/* harmony import */ var _icons_accordion_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/accordion.svg */ "./src/icons/accordion.svg");


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

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("beer-blocks/accordion", {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Accordion", "block title", "beer-blocks"),
  category: "beer-blocks",
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Create an accordion for faqs and other purpose.", "block description", "beer-blocks"),
  textdomain: "beer-blocks",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: _icons_accordion_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Accordion", "block title", "beer-blocks")
  }),
  attributes: {
    id: {
      type: "string"
    },
    ..._helpers_spacing__WEBPACK_IMPORTED_MODULE_6__["default"].attributes()
  },
  providesContext: {
    accordionId: "id"
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/block-types/accordion/save.js":
/*!*******************************************!*\
  !*** ./src/block-types/accordion/save.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../helpers/spacing */ "./src/helpers/spacing.js");




const save = props => {
  const {
    attributes: {
      id
    }
  } = props;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "accordion",
    id: `accordion-${id}`,
    style: _helpers_spacing__WEBPACK_IMPORTED_MODULE_2__["default"].styles(props.attributes)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./src/helpers/spacing.js":
/*!********************************!*\
  !*** ./src/helpers/spacing.js ***!
  \********************************/
/*! exports provided: paddingAttribute, paddingControl, paddingStyles, marginAttribute, marginControl, marginStyles, attributes, innerControls, controls, styles, visualizer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingAttribute", function() { return paddingAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingControl", function() { return paddingControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddingStyles", function() { return paddingStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginAttribute", function() { return marginAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginControl", function() { return marginControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginStyles", function() { return marginStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innerControls", function() { return innerControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controls", function() { return controls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visualizer", function() { return visualizer; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




const {
  __Visualizer: Visualizer
} = _wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalBoxControl"];
const defaultUnits = [{
  value: "px",
  label: "PX"
}, {
  value: "em",
  label: "EM"
}, {
  value: "rem",
  label: "REM"
}];

const visualizerAttribute = () => ({
  type: "object",
  default: {
    values: {
      top: "",
      right: "",
      bottom: "",
      left: ""
    },
    showValues: {
      top: false,
      right: false,
      bottom: false,
      left: false
    }
  }
});

const paddingAttribute = function () {
  let padding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["top", "right", "bottom", "left"];
  const paddingAttribute = Object.fromEntries(padding.map(key => [key, ""]));
  return {
    type: "object",
    default: paddingAttribute
  };
};
const paddingControl = function () {
  let {
    props,
    paddingAttr = "padding",
    visualizerAttr = "visualizer"
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    setAttributes,
    attributes: {
      [paddingAttr]: padding
    }
  } = props;
  const sides = Object.entries(padding).map(side => side[0]);
  const defaultValues = Object.fromEntries(sides.map(side => [side, ""]));
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalBoxControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Padding", "beer-blocks"),
    allowReset: true,
    resetValues: defaultValues,
    units: defaultUnits,
    values: padding,
    onChange: nextValues => setAttributes({
      [paddingAttr]: nextValues
    }),
    onChangeShowVisualizer: showValues => setAttributes({
      [visualizerAttr]: {
        values: padding,
        showValues
      }
    }),
    sides: sides
  });
};
const paddingStyles = function () {
  let padding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    top,
    right,
    bottom,
    left
  } = padding;
  return { ...(top ? {
      paddingTop: top
    } : {}),
    ...(right ? {
      paddingRight: right
    } : {}),
    ...(bottom ? {
      paddingBottom: bottom
    } : {}),
    ...(left ? {
      paddingLeft: left
    } : {})
  };
};
const marginAttribute = function () {
  let margin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["top", "right", "bottom", "left"];
  const marginAttribute = Object.fromEntries(margin.map(key => [key, ""]));
  return {
    type: "object",
    default: marginAttribute
  };
};
const marginControl = _ref => {
  let {
    props,
    marginAttr = "margin"
  } = _ref;
  const {
    setAttributes,
    attributes: {
      [marginAttr]: margin
    }
  } = props;
  const sides = Object.entries(margin).map(side => side[0]);
  const defaultValues = Object.fromEntries(sides.map(side => [side, ""]));
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalBoxControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Margin", "beer-blocks"),
    allowReset: true,
    resetValues: defaultValues,
    units: defaultUnits,
    values: margin,
    onChange: nextValues => setAttributes({
      [marginAttr]: nextValues
    }),
    sides: sides
  });
};
const marginStyles = function () {
  let margin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    top,
    right,
    bottom,
    left
  } = margin;
  return { ...(top ? {
      marginTop: top
    } : {}),
    ...(right ? {
      marginRight: right
    } : {}),
    ...(bottom ? {
      marginBottom: bottom
    } : {}),
    ...(left ? {
      marginLeft: left
    } : {})
  };
};
const attributes = function () {
  let {
    attrPrefixName = "",
    padding = ["top", "right", "bottom", "left"],
    margin = ["top", "right", "bottom", "left"]
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return { ...(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isArray"])(padding) ? {
      [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-padding`)]: paddingAttribute(padding)
    } : {}),
    ...(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isArray"])(margin) ? {
      [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-margin`)]: marginAttribute(margin)
    } : {}),
    ...(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isArray"])(padding) ? {
      [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-visualizer`)]: visualizerAttribute()
    } : {})
  };
};
const innerControls = function (props) {
  let attrPrefixName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  const paddingAttr = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-padding`);
  const visualizerAttr = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-visualizer`);
  const marginAttr = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-margin`);
  const {
    attributes: {
      [paddingAttr]: padding,
      [marginAttr]: margin
    }
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isObjectLike"])(padding) ? paddingControl({
    props,
    paddingAttr,
    visualizerAttr
  }) : null, Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isObjectLike"])(margin) ? marginControl({
    props,
    marginAttr
  }) : null);
};
const controls = _ref2 => {
  let {
    props,
    initialOpen = false,
    attrPrefixName = "",
    title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Spacing", "beer-blocks")
  } = _ref2;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: title,
    initialOpen: initialOpen
  }, innerControls(props, attrPrefixName));
};
const styles = function (attributes) {
  let attrPrefixName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  const {
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-padding`)]: padding,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-margin`)]: margin
  } = attributes;
  return { ...(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isObjectLike"])(padding) ? paddingStyles(padding) : {}),
    ...(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isObjectLike"])(margin) ? marginStyles(margin) : {})
  };
};
const visualizer = function (props, children) {
  let attrPrefixName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  const {
    attributes: {
      [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-visualizer`)]: {
        values: visualizerValues,
        showValues: visualizerShowValues
      }
    }
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Visualizer, {
    showValues: visualizerShowValues,
    values: visualizerValues
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  visualizerAttribute,
  paddingAttribute,
  paddingControl,
  paddingStyles,
  marginAttribute,
  marginControl,
  marginStyles,
  attributes,
  innerControls,
  controls,
  styles,
  visualizer
});

/***/ }),

/***/ "./src/icons/accordion.svg":
/*!*********************************!*\
  !*** ./src/icons/accordion.svg ***!
  \*********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgAccordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _defs, _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgAccordion(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 70.99 88.38"
  }, props), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", null, ".accordion_svg__cls-1{fill:#efa126}"))), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "accordion_svg__Capa_2",
    "data-name": "Capa 2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "accordion_svg__Capa_1-2",
    "data-name": "Capa 1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M66.55 17.75H4.44A4.44 4.44 0 010 13.31V4.44A4.44 4.44 0 014.44 0h62.11A4.44 4.44 0 0171 4.44v8.87a4.44 4.44 0 01-4.44 4.44zM4.44 3A1.48 1.48 0 003 4.44v8.87a1.48 1.48 0 001.48 1.48h62.07A1.48 1.48 0 0068 13.31V4.44A1.48 1.48 0 0066.55 3zM66.55 67.64H4.44A4.44 4.44 0 010 63.2v-8.87a4.44 4.44 0 014.44-4.44h62.11A4.44 4.44 0 0171 54.33v8.87a4.44 4.44 0 01-4.44 4.44zM4.44 52.85A1.48 1.48 0 003 54.33v8.87a1.48 1.48 0 001.48 1.48h62.07A1.48 1.48 0 0068 63.2v-8.87a1.48 1.48 0 00-1.48-1.48zM66.55 88.38H4.44A4.44 4.44 0 010 84v-8.93a4.45 4.45 0 014.44-4.44h62.11A4.45 4.45 0 0171 75.07V84a4.44 4.44 0 01-4.44 4.43zM4.44 73.59A1.48 1.48 0 003 75.07V84a1.47 1.47 0 001.48 1.47h62.07A1.47 1.47 0 0068 84v-8.93a1.48 1.48 0 00-1.48-1.48z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "accordion_svg__cls-1",
    d: "M66.38 26.62H4.61a1.48 1.48 0 010-3h61.77a1.48 1.48 0 110 3zM66.38 35.5H4.61a1.48 1.48 0 010-3h61.77a1.48 1.48 0 110 3zM66.38 44.37H4.61a1.48 1.48 0 110-3h61.77a1.48 1.48 0 110 3z"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3MC45OSA4OC4zOCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNlZmExMjY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYXBhXzIiIGRhdGEtbmFtZT0iQ2FwYSAyIj48ZyBpZD0iQ2FwYV8xLTIiIGRhdGEtbmFtZT0iQ2FwYSAxIj48cGF0aCBkPSJNNjYuNTUsMTcuNzVINC40NEE0LjQ0LDQuNDQsMCwwLDEsMCwxMy4zMVY0LjQ0QTQuNDQsNC40NCwwLDAsMSw0LjQ0LDBINjYuNTVBNC40NCw0LjQ0LDAsMCwxLDcxLDQuNDR2OC44N2E0LjQ0LDQuNDQsMCwwLDEtNC40NCw0LjQ0Wk00LjQ0LDNBMS40OCwxLjQ4LDAsMCwwLDMsNC40NHY4Ljg3YTEuNDgsMS40OCwwLDAsMCwxLjQ4LDEuNDhINjYuNTVBMS40OCwxLjQ4LDAsMCwwLDY4LDEzLjMxVjQuNDRBMS40OCwxLjQ4LDAsMCwwLDY2LjU1LDNaIi8+PHBhdGggZD0iTTY2LjU1LDY3LjY0SDQuNDRBNC40NCw0LjQ0LDAsMCwxLDAsNjMuMlY1NC4zM2E0LjQ0LDQuNDQsMCwwLDEsNC40NC00LjQ0SDY2LjU1QTQuNDQsNC40NCwwLDAsMSw3MSw1NC4zM1Y2My4yYTQuNDQsNC40NCwwLDAsMS00LjQ0LDQuNDRaTTQuNDQsNTIuODVBMS40OCwxLjQ4LDAsMCwwLDMsNTQuMzNWNjMuMmExLjQ4LDEuNDgsMCwwLDAsMS40OCwxLjQ4SDY2LjU1QTEuNDgsMS40OCwwLDAsMCw2OCw2My4yVjU0LjMzYTEuNDgsMS40OCwwLDAsMC0xLjQ4LTEuNDhaIi8+PHBhdGggZD0iTTY2LjU1LDg4LjM4SDQuNDRBNC40NCw0LjQ0LDAsMCwxLDAsODRWNzUuMDdhNC40NSw0LjQ1LDAsMCwxLDQuNDQtNC40NEg2Ni41NUE0LjQ1LDQuNDUsMCwwLDEsNzEsNzUuMDdWODRhNC40NCw0LjQ0LDAsMCwxLTQuNDQsNC40M1pNNC40NCw3My41OUExLjQ4LDEuNDgsMCwwLDAsMyw3NS4wN1Y4NGExLjQ3LDEuNDcsMCwwLDAsMS40OCwxLjQ3SDY2LjU1QTEuNDcsMS40NywwLDAsMCw2OCw4NFY3NS4wN2ExLjQ4LDEuNDgsMCwwLDAtMS40OC0xLjQ4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTY2LjM4LDI2LjYySDQuNjFhMS40OCwxLjQ4LDAsMCwxLDAtM0g2Ni4zOGExLjQ4LDEuNDgsMCwxLDEsMCwzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTY2LjM4LDM1LjVINC42MWExLjQ4LDEuNDgsMCwwLDEsMC0zSDY2LjM4YTEuNDgsMS40OCwwLDEsMSwwLDNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjYuMzgsNDQuMzdINC42MWExLjQ4LDEuNDgsMCwxLDEsMC0zSDY2LjM4YTEuNDgsMS40OCwwLDEsMSwwLDNaIi8+PC9nPjwvZz48L3N2Zz4=");


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

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

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

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

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