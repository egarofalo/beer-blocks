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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/block-types/grid/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/block-types/grid/edit.js":
/*!**************************************!*\
  !*** ./src/block-types/grid/edit.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../helpers/spacing */ "./src/helpers/spacing.js");




const edit = props => {
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])({
    style: { ..._helpers_spacing__WEBPACK_IMPORTED_MODULE_2__["default"].styles(props.attributes)
    }
  });
  const innerBlocksPropsConfig = [{ ...blockProps
  }, {
    renderAppender: false,
    template: [["beer-blocks/container", {
      allowedBlocks: ["beer-blocks/row"]
    }, [["beer-blocks/row", {}, [["beer-blocks/column"], ["beer-blocks/column"]]]]]]
  }];
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useInnerBlocksProps"] ? Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useInnerBlocksProps"])(...innerBlocksPropsConfig) : Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["__experimentalUseInnerBlocksProps"])(...innerBlocksPropsConfig);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, _helpers_spacing__WEBPACK_IMPORTED_MODULE_2__["default"].controls({
    props
  })), _helpers_spacing__WEBPACK_IMPORTED_MODULE_2__["default"].visualizer(props, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", innerBlocksProps)));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/block-types/grid/editor.scss":
/*!******************************************!*\
  !*** ./src/block-types/grid/editor.scss ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-types/grid/index.js":
/*!***************************************!*\
  !*** ./src/block-types/grid/index.js ***!
  \***************************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/block-types/grid/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/block-types/grid/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/block-types/grid/save.js");
/* harmony import */ var _helpers_spacing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../helpers/spacing */ "./src/helpers/spacing.js");
/* harmony import */ var _icons_grid_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/grid.svg */ "./src/icons/grid.svg");


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

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("beer-blocks/grid", {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Grid", "block title", "beer-blocks"),
  category: "beer-blocks",
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Use the Bootstrap grid system to create a container with rows and columns to layout and align content.", "block description", "beer-blocks"),
  textdomain: "beer-blocks",
  supports: {
    color: {
      background: true,
      gradients: true,
      text: false
    }
  },
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: _icons_grid_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Grid", "block title", "beer-blocks")
  }),
  attributes: { ..._helpers_spacing__WEBPACK_IMPORTED_MODULE_6__["default"].attributes()
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/block-types/grid/save.js":
/*!**************************************!*\
  !*** ./src/block-types/grid/save.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/spacing */ "./src/helpers/spacing.js");




const save = props => {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save({
    style: { ..._helpers_spacing__WEBPACK_IMPORTED_MODULE_2__["default"].styles(props.attributes)
    }
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
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

/***/ "./src/icons/grid.svg":
/*!****************************!*\
  !*** ./src/icons/grid.svg ***!
  \****************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _defs, _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgGrid(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 76.15 76.15"
  }, props), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", null, ".grid_svg__cls-1{fill:#efa126}"))), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "grid_svg__Capa_2",
    "data-name": "Capa 2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "grid_svg__Capa_1-2",
    "data-name": "Capa 1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M14.28 19H4.76A4.77 4.77 0 010 14.28V4.76A4.77 4.77 0 014.76 0h9.52A4.77 4.77 0 0119 4.76v9.52A4.77 4.77 0 0114.28 19zM4.76 3.17a1.59 1.59 0 00-1.59 1.59v9.52a1.59 1.59 0 001.59 1.58h9.52a1.58 1.58 0 001.58-1.58V4.76a1.59 1.59 0 00-1.58-1.59z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "grid_svg__cls-1",
    d: "M14.28 47.59H4.76A4.76 4.76 0 010 42.83v-9.51a4.76 4.76 0 014.76-4.76h9.52A4.76 4.76 0 0119 33.32v9.51a4.76 4.76 0 01-4.76 4.76zM4.76 31.73a1.59 1.59 0 00-1.59 1.59v9.51a1.59 1.59 0 001.59 1.59h9.52a1.59 1.59 0 001.58-1.59v-9.51a1.59 1.59 0 00-1.58-1.59z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M14.28 76.15H4.76A4.77 4.77 0 010 71.39v-9.52a4.77 4.77 0 014.76-4.76h9.52A4.77 4.77 0 0119 61.87v9.52a4.77 4.77 0 01-4.76 4.76zM4.76 60.28a1.59 1.59 0 00-1.59 1.59v9.52A1.59 1.59 0 004.76 73h9.52a1.59 1.59 0 001.58-1.59v-9.54a1.59 1.59 0 00-1.58-1.59zM42.83 19h-9.51a4.76 4.76 0 01-4.76-4.76V4.76A4.76 4.76 0 0133.32 0h9.51a4.76 4.76 0 014.76 4.76v9.52A4.76 4.76 0 0142.83 19zM33.32 3.17a1.59 1.59 0 00-1.59 1.59v9.52a1.59 1.59 0 001.59 1.58h9.51a1.59 1.59 0 001.59-1.58V4.76a1.59 1.59 0 00-1.59-1.59zM42.83 47.59h-9.51a4.76 4.76 0 01-4.76-4.76v-9.51a4.76 4.76 0 014.76-4.76h9.51a4.76 4.76 0 014.76 4.76v9.51a4.76 4.76 0 01-4.76 4.76zm-9.51-15.86a1.59 1.59 0 00-1.59 1.59v9.51a1.59 1.59 0 001.59 1.59h9.51a1.59 1.59 0 001.59-1.59v-9.51a1.59 1.59 0 00-1.59-1.59zM42.83 76.15h-9.51a4.76 4.76 0 01-4.76-4.76v-9.52a4.76 4.76 0 014.76-4.76h9.51a4.76 4.76 0 014.76 4.76v9.52a4.76 4.76 0 01-4.76 4.76zm-9.51-15.87a1.59 1.59 0 00-1.59 1.59v9.52A1.59 1.59 0 0033.32 73h9.51a1.59 1.59 0 001.59-1.59v-9.54a1.59 1.59 0 00-1.59-1.59zM71.39 19h-9.52a4.77 4.77 0 01-4.76-4.76V4.76A4.77 4.77 0 0161.87 0h9.52a4.77 4.77 0 014.76 4.76v9.52A4.77 4.77 0 0171.39 19zM61.87 3.17a1.6 1.6 0 00-1.59 1.59v9.52a1.59 1.59 0 001.59 1.58h9.52A1.59 1.59 0 0073 14.28V4.76a1.59 1.59 0 00-1.59-1.59zM71.39 47.59h-9.52a4.76 4.76 0 01-4.76-4.76v-9.51a4.76 4.76 0 014.76-4.76h9.52a4.76 4.76 0 014.76 4.76v9.51a4.76 4.76 0 01-4.76 4.76zm-9.52-15.86a1.59 1.59 0 00-1.59 1.59v9.51a1.59 1.59 0 001.59 1.59h9.52A1.59 1.59 0 0073 42.83v-9.51a1.59 1.59 0 00-1.59-1.59z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "grid_svg__cls-1",
    d: "M71.39 76.15h-9.52a4.77 4.77 0 01-4.76-4.76v-9.52a4.77 4.77 0 014.76-4.76h9.52a4.77 4.77 0 014.76 4.76v9.52a4.77 4.77 0 01-4.76 4.76zm-9.52-15.87a1.6 1.6 0 00-1.59 1.59v9.52A1.6 1.6 0 0061.87 73h9.52A1.59 1.59 0 0073 71.39v-9.52a1.59 1.59 0 00-1.59-1.59z"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3Ni4xNSA3Ni4xNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNlZmExMjY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYXBhXzIiIGRhdGEtbmFtZT0iQ2FwYSAyIj48ZyBpZD0iQ2FwYV8xLTIiIGRhdGEtbmFtZT0iQ2FwYSAxIj48cGF0aCBkPSJNMTQuMjgsMTlINC43NkE0Ljc3LDQuNzcsMCwwLDEsMCwxNC4yOFY0Ljc2QTQuNzcsNC43NywwLDAsMSw0Ljc2LDBoOS41MkE0Ljc3LDQuNzcsMCwwLDEsMTksNC43NnY5LjUyQTQuNzcsNC43NywwLDAsMSwxNC4yOCwxOVpNNC43NiwzLjE3QTEuNTksMS41OSwwLDAsMCwzLjE3LDQuNzZ2OS41MmExLjU5LDEuNTksMCwwLDAsMS41OSwxLjU4aDkuNTJhMS41OCwxLjU4LDAsMCwwLDEuNTgtMS41OFY0Ljc2YTEuNTksMS41OSwwLDAsMC0xLjU4LTEuNTlaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTQuMjgsNDcuNTlINC43NkE0Ljc2LDQuNzYsMCwwLDEsMCw0Mi44M1YzMy4zMmE0Ljc2LDQuNzYsMCwwLDEsNC43Ni00Ljc2aDkuNTJBNC43Niw0Ljc2LDAsMCwxLDE5LDMzLjMydjkuNTFhNC43Niw0Ljc2LDAsMCwxLTQuNzYsNC43NlpNNC43NiwzMS43M2ExLjU5LDEuNTksMCwwLDAtMS41OSwxLjU5djkuNTFhMS41OSwxLjU5LDAsMCwwLDEuNTksMS41OWg5LjUyYTEuNTksMS41OSwwLDAsMCwxLjU4LTEuNTlWMzMuMzJhMS41OSwxLjU5LDAsMCwwLTEuNTgtMS41OVoiLz48cGF0aCBkPSJNMTQuMjgsNzYuMTVINC43NkE0Ljc3LDQuNzcsMCwwLDEsMCw3MS4zOVY2MS44N2E0Ljc3LDQuNzcsMCwwLDEsNC43Ni00Ljc2aDkuNTJBNC43Nyw0Ljc3LDAsMCwxLDE5LDYxLjg3djkuNTJhNC43Nyw0Ljc3LDAsMCwxLTQuNzYsNC43NlpNNC43Niw2MC4yOGExLjU5LDEuNTksMCwwLDAtMS41OSwxLjU5djkuNTJBMS41OSwxLjU5LDAsMCwwLDQuNzYsNzNoOS41MmExLjU5LDEuNTksMCwwLDAsMS41OC0xLjU5VjYxLjg3YTEuNTksMS41OSwwLDAsMC0xLjU4LTEuNTlaIi8+PHBhdGggZD0iTTQyLjgzLDE5SDMzLjMyYTQuNzYsNC43NiwwLDAsMS00Ljc2LTQuNzZWNC43NkE0Ljc2LDQuNzYsMCwwLDEsMzMuMzIsMGg5LjUxYTQuNzYsNC43NiwwLDAsMSw0Ljc2LDQuNzZ2OS41MkE0Ljc2LDQuNzYsMCwwLDEsNDIuODMsMTlaTTMzLjMyLDMuMTdhMS41OSwxLjU5LDAsMCwwLTEuNTksMS41OXY5LjUyYTEuNTksMS41OSwwLDAsMCwxLjU5LDEuNThoOS41MWExLjU5LDEuNTksMCwwLDAsMS41OS0xLjU4VjQuNzZhMS41OSwxLjU5LDAsMCwwLTEuNTktMS41OVoiLz48cGF0aCBkPSJNNDIuODMsNDcuNTlIMzMuMzJhNC43Niw0Ljc2LDAsMCwxLTQuNzYtNC43NlYzMy4zMmE0Ljc2LDQuNzYsMCwwLDEsNC43Ni00Ljc2aDkuNTFhNC43Niw0Ljc2LDAsMCwxLDQuNzYsNC43NnY5LjUxYTQuNzYsNC43NiwwLDAsMS00Ljc2LDQuNzZaTTMzLjMyLDMxLjczYTEuNTksMS41OSwwLDAsMC0xLjU5LDEuNTl2OS41MWExLjU5LDEuNTksMCwwLDAsMS41OSwxLjU5aDkuNTFhMS41OSwxLjU5LDAsMCwwLDEuNTktMS41OVYzMy4zMmExLjU5LDEuNTksMCwwLDAtMS41OS0xLjU5WiIvPjxwYXRoIGQ9Ik00Mi44Myw3Ni4xNUgzMy4zMmE0Ljc2LDQuNzYsMCwwLDEtNC43Ni00Ljc2VjYxLjg3YTQuNzYsNC43NiwwLDAsMSw0Ljc2LTQuNzZoOS41MWE0Ljc2LDQuNzYsMCwwLDEsNC43Niw0Ljc2djkuNTJhNC43Niw0Ljc2LDAsMCwxLTQuNzYsNC43NlpNMzMuMzIsNjAuMjhhMS41OSwxLjU5LDAsMCwwLTEuNTksMS41OXY5LjUyQTEuNTksMS41OSwwLDAsMCwzMy4zMiw3M2g5LjUxYTEuNTksMS41OSwwLDAsMCwxLjU5LTEuNTlWNjEuODdhMS41OSwxLjU5LDAsMCwwLTEuNTktMS41OVoiLz48cGF0aCBkPSJNNzEuMzksMTlINjEuODdhNC43Nyw0Ljc3LDAsMCwxLTQuNzYtNC43NlY0Ljc2QTQuNzcsNC43NywwLDAsMSw2MS44NywwaDkuNTJhNC43Nyw0Ljc3LDAsMCwxLDQuNzYsNC43NnY5LjUyQTQuNzcsNC43NywwLDAsMSw3MS4zOSwxOVpNNjEuODcsMy4xN2ExLjYsMS42LDAsMCwwLTEuNTksMS41OXY5LjUyYTEuNTksMS41OSwwLDAsMCwxLjU5LDEuNThoOS41MkExLjU5LDEuNTksMCwwLDAsNzMsMTQuMjhWNC43NmExLjU5LDEuNTksMCwwLDAtMS41OS0xLjU5WiIvPjxwYXRoIGQ9Ik03MS4zOSw0Ny41OUg2MS44N2E0Ljc2LDQuNzYsMCwwLDEtNC43Ni00Ljc2VjMzLjMyYTQuNzYsNC43NiwwLDAsMSw0Ljc2LTQuNzZoOS41MmE0Ljc2LDQuNzYsMCwwLDEsNC43Niw0Ljc2djkuNTFhNC43Niw0Ljc2LDAsMCwxLTQuNzYsNC43NlpNNjEuODcsMzEuNzNhMS41OSwxLjU5LDAsMCwwLTEuNTksMS41OXY5LjUxYTEuNTksMS41OSwwLDAsMCwxLjU5LDEuNTloOS41MkExLjU5LDEuNTksMCwwLDAsNzMsNDIuODNWMzMuMzJhMS41OSwxLjU5LDAsMCwwLTEuNTktMS41OVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03MS4zOSw3Ni4xNUg2MS44N2E0Ljc3LDQuNzcsMCwwLDEtNC43Ni00Ljc2VjYxLjg3YTQuNzcsNC43NywwLDAsMSw0Ljc2LTQuNzZoOS41MmE0Ljc3LDQuNzcsMCwwLDEsNC43Niw0Ljc2djkuNTJhNC43Nyw0Ljc3LDAsMCwxLTQuNzYsNC43NlpNNjEuODcsNjAuMjhhMS42LDEuNiwwLDAsMC0xLjU5LDEuNTl2OS41MkExLjYsMS42LDAsMCwwLDYxLjg3LDczaDkuNTJBMS41OSwxLjU5LDAsMCwwLDczLDcxLjM5VjYxLjg3YTEuNTksMS41OSwwLDAsMC0xLjU5LTEuNTlaIi8+PC9nPjwvZz48L3N2Zz4=");


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