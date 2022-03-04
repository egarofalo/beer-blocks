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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/block-types/container/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/block-types/container/edit.js":
/*!*******************************************!*\
  !*** ./src/block-types/container/edit.js ***!
  \*******************************************/
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_spacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../helpers/spacing */ "./src/helpers/spacing.js");
/* harmony import */ var _helpers_sectioning_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../helpers/sectioning-tags */ "./src/helpers/sectioning-tags.js");
/* harmony import */ var _helpers_inner_border__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/inner-border */ "./src/helpers/inner-border.js");









const edit = props => {
  const {
    attributes: {
      containerType,
      tagName: TagName,
      allowedBlocks
    },
    setAttributes,
    clientId
  } = props;
  const {
    hasChildBlocks
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(select => {
    const {
      getBlockOrder
    } = select("core/block-editor");
    return {
      hasChildBlocks: getBlockOrder(clientId).length > 0
    };
  }, [clientId]);
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])({
    className: containerType,
    style: { ..._helpers_spacing__WEBPACK_IMPORTED_MODULE_5__["default"].styles(props.attributes)
    }
  });
  const innerBlocksPropsConfig = [{ ...blockProps
  }, {
    renderAppender: false,
    ...(allowedBlocks.length > 0 ? {
      allowedBlocks
    } : {})
  }];
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useInnerBlocksProps"] ? Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useInnerBlocksProps"])(...innerBlocksPropsConfig) : Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["__experimentalUseInnerBlocksProps"])(...innerBlocksPropsConfig);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Container settings", "beer-blocks")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Container type", "beer-blocks"),
    value: containerType,
    options: [{
      value: "container",
      label: "Container"
    }, {
      value: "container-fluid",
      label: "Container Fluid"
    }, {
      value: "container-sm",
      label: "Container SM"
    }, {
      value: "container-md",
      label: "Container MD"
    }, {
      value: "container-lg",
      label: "Container LG"
    }, {
      value: "container-xl",
      label: "Container XL"
    }],
    onChange: value => setAttributes({
      containerType: value
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("HTML Tag", "beer-blocks"),
    options: [..._helpers_sectioning_tags__WEBPACK_IMPORTED_MODULE_6__["default"].map(tag => ({
      label: `<${tag}>`,
      value: tag
    }))],
    value: TagName,
    onChange: value => setAttributes({
      tagName: value
    })
  })), _helpers_spacing__WEBPACK_IMPORTED_MODULE_5__["default"].controls({
    props
  }), _helpers_inner_border__WEBPACK_IMPORTED_MODULE_7__["default"].controls({
    props
  })), _helpers_spacing__WEBPACK_IMPORTED_MODULE_5__["default"].visualizer(props, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TagName, innerBlocksProps, _helpers_inner_border__WEBPACK_IMPORTED_MODULE_7__["default"].borderTopHtml(props.attributes), innerBlocksProps.children, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: `button-block-appender__container${hasChildBlocks ? " has-child-blocks" : ""}`
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].ButtonBlockAppender, null)), _helpers_inner_border__WEBPACK_IMPORTED_MODULE_7__["default"].borderBottomHtml(props.attributes))));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/block-types/container/editor.scss":
/*!***********************************************!*\
  !*** ./src/block-types/container/editor.scss ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-types/container/index.js":
/*!********************************************!*\
  !*** ./src/block-types/container/index.js ***!
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/block-types/container/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/block-types/container/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/block-types/container/save.js");
/* harmony import */ var _helpers_spacing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../helpers/spacing */ "./src/helpers/spacing.js");
/* harmony import */ var _helpers_inner_border__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../helpers/inner-border */ "./src/helpers/inner-border.js");
/* harmony import */ var _icons_container_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../icons/container.svg */ "./src/icons/container.svg");


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

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("beer-blocks/container", {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Container", "block title", "beer-blocks"),
  category: "beer-blocks",
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Bootstrap Containers wich provide a means to center and horizontally pad your site’s contents.", "block description", "beer-blocks"),
  textdomain: "beer-blocks",
  supports: {
    color: {
      background: true,
      gradients: true,
      text: false
    }
  },
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: _icons_container_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
    alt: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Container", "block title", "beer-blocks")
  }),
  attributes: {
    allowedBlocks: {
      type: "array",
      default: []
    },
    containerType: {
      type: "string",
      default: "container"
    },
    tagName: {
      type: "string",
      default: "div"
    },
    ..._helpers_spacing__WEBPACK_IMPORTED_MODULE_6__["default"].attributes(),
    ..._helpers_inner_border__WEBPACK_IMPORTED_MODULE_7__["default"].attributes()
  },
  transforms: {
    from: [{
      type: "block",
      blocks: ["core/group"],
      transform: (attributes, innerBlocks) => Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["createBlock"])("beer-blocks/container", {}, innerBlocks)
    }]
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/block-types/container/save.js":
/*!*******************************************!*\
  !*** ./src/block-types/container/save.js ***!
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
/* harmony import */ var _helpers_inner_border__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../helpers/inner-border */ "./src/helpers/inner-border.js");





const save = props => {
  const {
    attributes: {
      containerType,
      tagName: TagName
    }
  } = props;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save({
    className: containerType,
    style: { ..._helpers_spacing__WEBPACK_IMPORTED_MODULE_2__["default"].styles(props.attributes)
    }
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TagName, blockProps, _helpers_inner_border__WEBPACK_IMPORTED_MODULE_3__["default"].borderTopHtml(props.attributes), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null), _helpers_inner_border__WEBPACK_IMPORTED_MODULE_3__["default"].borderBottomHtml(props.attributes));
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./src/helpers/border.js":
/*!*******************************!*\
  !*** ./src/helpers/border.js ***!
  \*******************************/
/*! exports provided: borderStyleAttribute, borderStyleControl, borderStyleStyles, borderWidthAttribute, borderWidthControl, borderWidthStyles, borderColorAttribute, borderColorControl, borderColorStyles, attributes, innerControls, controls, styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderStyleAttribute", function() { return borderStyleAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderStyleControl", function() { return borderStyleControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderStyleStyles", function() { return borderStyleStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderWidthAttribute", function() { return borderWidthAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderWidthControl", function() { return borderWidthControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderWidthStyles", function() { return borderWidthStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColorAttribute", function() { return borderColorAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColorControl", function() { return borderColorControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColorStyles", function() { return borderColorStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innerControls", function() { return innerControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controls", function() { return controls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




const BORDER_STYLES = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("-- SELECT --", "beer-blocks"),
  value: ""
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("None", "beer-blocks"),
  value: "none"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Dotted", "beer-blocks"),
  value: "dotted"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Dashed", "beer-blocks"),
  value: "dashed"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Solid", "beer-blocks"),
  value: "solid"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Double", "beer-blocks"),
  value: "double"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Inset", "beer-blocks"),
  value: "inset"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Outset", "beer-blocks"),
  value: "outset"
}];

const label = (type, side) => ({
  style: {
    all: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border style", "beer-blocks"),
    top: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border top style", "beer-blocks"),
    right: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border right style", "beer-blocks"),
    bottom: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border bottom style", "beer-blocks"),
    left: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border left style", "beer-blocks")
  },
  width: {
    all: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border width", "beer-blocks"),
    top: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border top width", "beer-blocks"),
    right: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border right width", "beer-blocks"),
    bottom: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border bottom width", "beer-blocks"),
    left: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border left width", "beer-blocks")
  },
  color: {
    all: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border color", "beer-blocks"),
    top: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border top color", "beer-blocks"),
    right: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border right color", "beer-blocks"),
    bottom: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border bottom color", "beer-blocks"),
    left: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border left color", "beer-blocks")
  }
})[type][side === "" ? "all" : side];

const sectionTitle = side => ({
  all: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalHeading"], {
    align: "center",
    level: "3"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("ALL BORDERS", "beer-blocks")),
  top: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalHeading"], {
    align: "center",
    level: "3"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("BORDER TOP", "beer-blocks")),
  right: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalHeading"], {
    align: "center",
    level: "3"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("BORDER RIGHT", "beer-blocks")),
  bottom: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalHeading"], {
    align: "center",
    level: "3"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("BORDER BOTTOM", "beer-blocks")),
  left: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalHeading"], {
    align: "center",
    level: "3"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("BORDER LEFT", "beer-blocks"))
})[side === "" ? "all" : side];

const borderStyleAttribute = () => ({
  type: "string",
  default: ""
});
const borderStyleControl = _ref => {
  let {
    props,
    attrName = "borderStyle",
    label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border style", "beer-blocks")
  } = _ref;
  const {
    setAttributes,
    attributes: {
      [attrName]: borderStyle = undefined
    }
  } = props;
  return borderStyle !== undefined ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: label,
    options: BORDER_STYLES,
    value: borderStyle,
    onChange: value => setAttributes({
      [attrName]: value
    })
  }) : null;
};
const borderStyleStyles = function (borderStyle) {
  let side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return borderStyle ? {
    [`border${Object(lodash__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(side)}Style`]: borderStyle
  } : {};
};
const borderWidthAttribute = () => ({
  type: "string",
  default: ""
});
const borderWidthControl = _ref2 => {
  let {
    props,
    attrName = "borderWidth",
    label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border width", "beer-blocks")
  } = _ref2;
  const {
    setAttributes,
    attributes: {
      [attrName]: borderWidth = undefined
    }
  } = props;
  return borderWidth !== undefined ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: label,
    value: borderWidth ? parseInt(borderWidth.replace(/px$/, "")) : "",
    onChange: value => setAttributes({
      [attrName]: value ? `${value}px` : ""
    }),
    min: 1,
    step: 1,
    allowReset: true,
    resetFallbackValue: ""
  })) : null;
};
const borderWidthStyles = function (borderWidth) {
  let side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return borderWidth ? {
    [`border${Object(lodash__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(side)}Width`]: borderWidth
  } : {};
};
const borderColorAttribute = () => ({
  type: "string",
  default: ""
});
const borderColorControl = _ref3 => {
  let {
    props,
    attrName = "borderColor",
    label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border color", "beer-blocks")
  } = _ref3;
  const {
    setAttributes,
    attributes: {
      [attrName]: borderColor = undefined
    }
  } = props;
  return borderColor !== undefined ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    label: label
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
    color: borderColor,
    onChangeComplete: value => setAttributes({
      [attrName]: value.hex
    }),
    disableAlpha: true,
    defaultValue: ""
  })) : null;
};
const borderColorStyles = function (borderColor) {
  let side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return borderColor ? {
    [`border${Object(lodash__WEBPACK_IMPORTED_MODULE_3__["capitalize"])(side)}Color`]: borderColor
  } : {};
};
const attributes = function () {
  let {
    attrPrefixName = "",
    side = ""
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-${side}-style`)]: {
      type: "string",
      default: ""
    },
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-${side}-width`)]: {
      type: "string",
      default: ""
    },
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-${side}-color`)]: {
      type: "string",
      default: ""
    }
  };
};
const innerControls = _ref4 => {
  let {
    props,
    attrPrefixName = "",
    side = "",
    title = undefined
  } = _ref4;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, title === undefined ? sectionTitle(side) : title, borderStyleControl({
    props,
    attrName: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-${side}-style`),
    label: label("style", side)
  }), borderWidthControl({
    props,
    attrName: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-${side}-width`),
    label: label("width", side)
  }), borderColorControl({
    props,
    attrName: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-${side}-color`),
    label: label("color", side)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "is-destructive",
    style: {
      display: "block",
      textAlign: "center",
      width: "100%"
    },
    onClick: () => props.setAttributes({
      [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-${side}-style`)]: "",
      [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-${side}-width`)]: "",
      [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-${side}-color`)]: ""
    })
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Clear fields", "beer-blocks"))));
};
const controls = _ref5 => {
  let {
    props,
    initialOpen = false,
    attrPrefixName = ""
  } = _ref5;
  const {
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-style`)]: borderStyle = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-top-style`)]: borderTopStyle = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-right-style`)]: borderRightStyle = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-bottom-style`)]: borderBottomStyle = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-left-style`)]: borderLeftStyle = undefined
  } = props.attributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border", "beer-blocks"),
    initialOpen: initialOpen
  }, borderStyle !== undefined && innerControls({
    props,
    attrPrefixName
  }), borderTopStyle !== undefined && innerControls({
    props,
    attrPrefixName,
    side: "top"
  }), borderRightStyle !== undefined && innerControls({
    props,
    attrPrefixName,
    side: "right"
  }), borderBottomStyle !== undefined && innerControls({
    props,
    attrPrefixName,
    side: "bottom"
  }), borderLeftStyle !== undefined && innerControls({
    props,
    attrPrefixName,
    side: "left"
  }));
};
const styles = function (attributes) {
  let attrPrefixName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  const {
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-style`)]: borderStyle = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-width`)]: borderWidth = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-color`)]: borderColor = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-top-style`)]: borderTopStyle = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-top-width`)]: borderTopWidth = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-top-color`)]: borderTopColor = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-right-style`)]: borderRightStyle = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-right-width`)]: borderRightWidth = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-right-color`)]: borderRightColor = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-bottom-style`)]: borderBottomStyle = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-bottom-width`)]: borderBottomWidth = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-bottom-color`)]: borderBottomColor = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-left-style`)]: borderLeftStyle = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-left-width`)]: borderLeftWidth = undefined,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_3__["camelCase"])(`${attrPrefixName}-border-left-color`)]: borderLeftColor = undefined
  } = attributes;
  return { ...borderStyleStyles(borderStyle),
    ...borderStyleStyles(borderTopStyle, "top"),
    ...borderStyleStyles(borderRightStyle, "right"),
    ...borderStyleStyles(borderBottomStyle, "bottom"),
    ...borderStyleStyles(borderLeftStyle, "left"),
    ...borderWidthStyles(borderWidth),
    ...borderWidthStyles(borderTopWidth, "top"),
    ...borderWidthStyles(borderRightWidth, "right"),
    ...borderWidthStyles(borderBottomWidth, "bottom"),
    ...borderWidthStyles(borderLeftWidth, "left"),
    ...borderColorStyles(borderColor),
    ...borderColorStyles(borderTopColor, "top"),
    ...borderColorStyles(borderRightColor, "right"),
    ...borderColorStyles(borderBottomColor, "bottom"),
    ...borderColorStyles(borderLeftColor, "left")
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  borderStyleAttribute,
  borderStyleControl,
  borderStyleStyles,
  borderWidthAttribute,
  borderWidthControl,
  borderWidthStyles,
  borderColorAttribute,
  borderColorControl,
  borderColorStyles,
  attributes,
  innerControls,
  controls,
  styles
});

/***/ }),

/***/ "./src/helpers/inner-border.js":
/*!*************************************!*\
  !*** ./src/helpers/inner-border.js ***!
  \*************************************/
/*! exports provided: attributes, controls, borderTopHtml, borderBottomHtml, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controls", function() { return controls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderTopHtml", function() { return borderTopHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderBottomHtml", function() { return borderBottomHtml; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _border__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./border */ "./src/helpers/border.js");






const sectionTitle = side => ({
  top: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalHeading"], {
    align: "center",
    level: "3"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("INNER BORDER TOP", "beer-blocks")),
  bottom: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalHeading"], {
    align: "center",
    level: "3"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("INNER BORDER BOTTOM", "beer-blocks"))
})[side];

const attributes = function () {
  let attrPrefixName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return {
    [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["camelCase"])(`${attrPrefixName}-inner-border-top-style`)]: {
      type: "string",
      default: ""
    },
    [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["camelCase"])(`${attrPrefixName}-inner-border-top-width`)]: {
      type: "string",
      default: ""
    },
    [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["camelCase"])(`${attrPrefixName}-inner-border-top-color`)]: {
      type: "string",
      default: ""
    },
    [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["camelCase"])(`${attrPrefixName}-inner-border-bottom-style`)]: {
      type: "string",
      default: ""
    },
    [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["camelCase"])(`${attrPrefixName}-inner-border-bottom-width`)]: {
      type: "string",
      default: ""
    },
    [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["camelCase"])(`${attrPrefixName}-inner-border-bottom-color`)]: {
      type: "string",
      default: ""
    }
  };
};
const controls = _ref => {
  let {
    props,
    initialOpen = false,
    attrPrefixName = ""
  } = _ref;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Inner Border", "beer-blocks"),
    initialOpen: initialOpen
  }, Object(_border__WEBPACK_IMPORTED_MODULE_4__["innerControls"])({
    props,
    attrPrefixName: `${attrPrefixName}-inner`,
    side: "top",
    sectionTitle: sectionTitle("top")
  }), Object(_border__WEBPACK_IMPORTED_MODULE_4__["innerControls"])({
    props,
    attrPrefixName: `${attrPrefixName}-inner`,
    side: "bottom",
    sectionTitle: sectionTitle("bottom")
  }));
};
const borderTopHtml = function (attributes) {
  let attrPrefixName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  const {
    [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["camelCase"])(`${attrPrefixName}-inner-border-top-style`)]: borderTopStyle,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["camelCase"])(`${attrPrefixName}-inner-border-top-width`)]: borderTopWidth,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["camelCase"])(`${attrPrefixName}-inner-border-top-color`)]: borderTopColor
  } = attributes;
  const styles = {
    display: "block",
    height: 0,
    width: "100%",
    ...Object(_border__WEBPACK_IMPORTED_MODULE_4__["borderStyleStyles"])(borderTopStyle, "top"),
    ...Object(_border__WEBPACK_IMPORTED_MODULE_4__["borderWidthStyles"])(borderTopWidth, "top"),
    ...Object(_border__WEBPACK_IMPORTED_MODULE_4__["borderColorStyles"])(borderTopColor, "top")
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: styles
  });
};
const borderBottomHtml = function (attributes) {
  let attrPrefixName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  const {
    [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["camelCase"])(`${attrPrefixName}-inner-border-bottom-style`)]: borderBottomStyle,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["camelCase"])(`${attrPrefixName}-inner-border-bottom-width`)]: borderBottomWidth,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["camelCase"])(`${attrPrefixName}-inner-border-bottom-color`)]: borderBottomColor
  } = attributes;
  const styles = {
    display: "block",
    height: 0,
    width: "100%",
    ...Object(_border__WEBPACK_IMPORTED_MODULE_4__["borderStyleStyles"])(borderBottomStyle, "top"),
    ...Object(_border__WEBPACK_IMPORTED_MODULE_4__["borderWidthStyles"])(borderBottomWidth, "top"),
    ...Object(_border__WEBPACK_IMPORTED_MODULE_4__["borderColorStyles"])(borderBottomColor, "top")
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: styles
  });
};
/* harmony default export */ __webpack_exports__["default"] = ({
  attributes,
  controls,
  borderTopHtml,
  borderBottomHtml
});

/***/ }),

/***/ "./src/helpers/sectioning-tags.js":
/*!****************************************!*\
  !*** ./src/helpers/sectioning-tags.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const tags = ["div", "header", "main", "section", "article", "aside", "footer"];
/* harmony default export */ __webpack_exports__["default"] = (tags);

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
      margin: nextValues
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
    padding = ["top", "right", "bottom", "left"],
    margin = ["top", "right", "bottom", "left"]
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let attrPrefixName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
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
    attrPrefixName = ""
  } = _ref2;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Spacing", "beer-blocks"),
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

/***/ "./src/icons/container.svg":
/*!*********************************!*\
  !*** ./src/icons/container.svg ***!
  \*********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _defs, _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgContainer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 103.47 58.37"
  }, props), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", null, ".container_svg__cls-1{fill:#efa126}"))), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "container_svg__Capa_2",
    "data-name": "Capa 2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "container_svg__Capa_1-2",
    "data-name": "Capa 1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M100.83 58.37H2.64A2.64 2.64 0 010 55.73V2.64A2.64 2.64 0 012.64 0h98.19a2.64 2.64 0 012.64 2.64v53.09a2.64 2.64 0 01-2.64 2.64zM4.27 54.1H99.2V4.27H4.27z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "container_svg__cls-1",
    d: "M20.09 46.82a2.63 2.63 0 01-2.63-2.63v-30a2.64 2.64 0 015.27 0v30a2.64 2.64 0 01-2.64 2.63zM41.19 46.82a2.64 2.64 0 01-2.64-2.63v-30a2.64 2.64 0 015.27 0v30a2.63 2.63 0 01-2.63 2.63zM62.28 46.82a2.64 2.64 0 01-2.64-2.63v-30a2.64 2.64 0 015.28 0v30a2.64 2.64 0 01-2.64 2.63zM83.37 46.82a2.63 2.63 0 01-2.63-2.63v-30a2.64 2.64 0 015.27 0v30a2.64 2.64 0 01-2.64 2.63z"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDMuNDcgNTguMzciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZWZhMTI2O308L3N0eWxlPjwvZGVmcz48ZyBpZD0iQ2FwYV8yIiBkYXRhLW5hbWU9IkNhcGEgMiI+PGcgaWQ9IkNhcGFfMS0yIiBkYXRhLW5hbWU9IkNhcGEgMSI+PHBhdGggZD0iTTEwMC44Myw1OC4zN0gyLjY0QTIuNjQsMi42NCwwLDAsMSwwLDU1LjczVjIuNjRBMi42NCwyLjY0LDAsMCwxLDIuNjQsMGg5OC4xOWEyLjY0LDIuNjQsMCwwLDEsMi42NCwyLjY0VjU1LjczYTIuNjQsMi42NCwwLDAsMS0yLjY0LDIuNjRaTTQuMjcsNTQuMUg5OS4yVjQuMjdINC4yN1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMC4wOSw0Ni44MmEyLjYzLDIuNjMsMCwwLDEtMi42My0yLjYzdi0zMGEyLjY0LDIuNjQsMCwwLDEsNS4yNywwdjMwYTIuNjQsMi42NCwwLDAsMS0yLjY0LDIuNjNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDEuMTksNDYuODJhMi42NCwyLjY0LDAsMCwxLTIuNjQtMi42M3YtMzBhMi42NCwyLjY0LDAsMCwxLDUuMjcsMHYzMGEyLjYzLDIuNjMsMCwwLDEtMi42MywyLjYzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTYyLjI4LDQ2LjgyYTIuNjQsMi42NCwwLDAsMS0yLjY0LTIuNjN2LTMwYTIuNjQsMi42NCwwLDAsMSw1LjI4LDB2MzBhMi42NCwyLjY0LDAsMCwxLTIuNjQsMi42M1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik04My4zNyw0Ni44MmEyLjYzLDIuNjMsMCwwLDEtMi42My0yLjYzdi0zMGEyLjY0LDIuNjQsMCwwLDEsNS4yNywwdjMwYTIuNjQsMi42NCwwLDAsMS0yLjY0LDIuNjNaIi8+PC9nPjwvZz48L3N2Zz4=");


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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

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