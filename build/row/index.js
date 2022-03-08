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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/block-types/row/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/block-types/row/edit.js":
/*!*************************************!*\
  !*** ./src/block-types/row/edit.js ***!
  \*************************************/
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
/* harmony import */ var _helpers_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/grid */ "./src/helpers/grid.js");







const edit = props => {
  const {
    attributes: {
      justifyContent,
      alignItems
    },
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
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])();
  const innerBlocksPropsConfig = [{
    className: _helpers_grid__WEBPACK_IMPORTED_MODULE_5__["default"].getRowClass(justifyContent, alignItems)
  }, {
    allowedBlocks: ["beer-blocks/column"],
    renderAppender: false
  }];
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useInnerBlocksProps"] ? Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useInnerBlocksProps"])(...innerBlocksPropsConfig) : Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["__experimentalUseInnerBlocksProps"])(...innerBlocksPropsConfig);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Row settings", "beer-blocks")
  }, _helpers_grid__WEBPACK_IMPORTED_MODULE_5__["default"].getRowControls(props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", innerBlocksProps), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: `button-block-appender__container${hasChildBlocks ? " has-child-blocks" : ""}`
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].ButtonBlockAppender, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/block-types/row/editor.scss":
/*!*****************************************!*\
  !*** ./src/block-types/row/editor.scss ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-types/row/index.js":
/*!**************************************!*\
  !*** ./src/block-types/row/index.js ***!
  \**************************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/block-types/row/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/block-types/row/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/block-types/row/save.js");
/* harmony import */ var _helpers_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/grid */ "./src/helpers/grid.js");
/* harmony import */ var _icons_row_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/row.svg */ "./src/icons/row.svg");


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

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("beer-blocks/row", {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Row", "block title", "beer-blocks"),
  category: "beer-blocks",
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Create a Bootstrap row wich is part of the Bootstrap Grid system.", "block description", "beer-blocks"),
  textdomain: "beer-blocks",
  parent: ["beer-blocks/container"],
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: _icons_row_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Row", "block title", "beer-blocks")
  }),
  attributes: {
    justifyContent: {
      type: "object",
      default: _helpers_grid__WEBPACK_IMPORTED_MODULE_6__["default"].getJustifyContentAttributes()
    },
    alignItems: {
      type: "object",
      default: _helpers_grid__WEBPACK_IMPORTED_MODULE_6__["default"].getAlignItemsAttributes()
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/block-types/row/save.js":
/*!*************************************!*\
  !*** ./src/block-types/row/save.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/grid */ "./src/helpers/grid.js");




const save = props => {
  const {
    attributes: {
      justifyContent,
      alignItems
    }
  } = props;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save({
    className: _helpers_grid__WEBPACK_IMPORTED_MODULE_2__["default"].getRowClass(justifyContent, alignItems)
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./src/helpers/grid.js":
/*!*****************************!*\
  !*** ./src/helpers/grid.js ***!
  \*****************************/
/*! exports provided: autoSizingEqualWidth, autoSizingVariableWidthContent, manualSizing, colSizingTypeOptions, breakpoints, breakpointsOptions, justifyContentOptions, justifyContentControl, getJustifyContentClass, alignItemsOptions, alignItemsControl, getAlignItemsClass, getColSizingAttributes, getColClass, getColControls, getJustifyContentAttributes, getAlignItemsAttributes, getRowClass, getRowControls, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoSizingEqualWidth", function() { return autoSizingEqualWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoSizingVariableWidthContent", function() { return autoSizingVariableWidthContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manualSizing", function() { return manualSizing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colSizingTypeOptions", function() { return colSizingTypeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpointsOptions", function() { return breakpointsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyContentOptions", function() { return justifyContentOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "justifyContentControl", function() { return justifyContentControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJustifyContentClass", function() { return getJustifyContentClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignItemsOptions", function() { return alignItemsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignItemsControl", function() { return alignItemsControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignItemsClass", function() { return getAlignItemsClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColSizingAttributes", function() { return getColSizingAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColClass", function() { return getColClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColControls", function() { return getColControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJustifyContentAttributes", function() { return getJustifyContentAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignItemsAttributes", function() { return getAlignItemsAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRowClass", function() { return getRowClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRowControls", function() { return getRowControls; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const autoSizingEqualWidth = "auto-sizing-ew";
const autoSizingVariableWidthContent = "auto-sizing-vwc";
const manualSizing = "manual-sizing";
const colSizingTypeOptions = resolution => [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Manual sizing", "beer-blocks"),
  value: manualSizing
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Auto sizing: equal width", "beer-blocks"),
  value: autoSizingEqualWidth
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Auto sizing: variable width content", "beer-blocks"),
  value: autoSizingVariableWidthContent
}, ...(resolution !== "xs" ? [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Same as previous breakpoint", "beer-blocks"),
  value: ""
}] : [])];
const breakpoints = ["xs", "sm", "md", "lg", "xl"];
const breakpointsOptions = breakpoints.map(breakpoint => ({
  name: breakpoint,
  title: breakpoint.toLocaleUpperCase()
}));
const justifyContentOptions = [{
  value: "start",
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Start", "beer-blocks")
}, {
  value: "end",
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("End", "beer-blocks")
}, {
  value: "center",
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Center", "beer-blocks")
}, {
  value: "between",
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Space Between", "beer-blocks")
}, {
  value: "around",
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Space Around", "beer-blocks")
}];
const justifyContentControl = _ref => {
  let {
    props,
    attrName = "justifyContent",
    breakpoint = "xs"
  } = _ref;
  const {
    attributes: {
      [attrName]: justifyContent
    },
    setAttributes
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: sprintf(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Justify content (%s)", "beer-blocks"), breakpoint.toUpperCase()),
    value: justifyContent[breakpoint],
    options: justifyContentOptions,
    onChange: value => setAttributes({
      justifyContent: { ...justifyContent,
        [breakpoint]: value
      }
    }),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Select the CSS Flexbox justify-content property value.", "beer-blocks")
  });
};
const getJustifyContentClass = justifyContent => Object.entries(justifyContent).reduce((classes, _ref2) => {
  let [key, value] = _ref2;
  const breakpoint = key !== "xs" ? `-${key}` : "";
  return `${classes} justify-content${breakpoint}-${value}`;
}, "");
const alignItemsOptions = [{
  value: "start",
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Start", "beer-blocks")
}, {
  value: "end",
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("End", "beer-blocks")
}, {
  value: "center",
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Center", "beer-blocks")
}, {
  value: "baseline",
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Baseline", "beer-blocks")
}, {
  value: "stretch",
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Stretch", "beer-blocks")
}];
const alignItemsControl = _ref3 => {
  let {
    props,
    attrName = "alignItems",
    breakpoint = "xs"
  } = _ref3;
  const {
    attributes: {
      [attrName]: alignItems
    },
    setAttributes
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: sprintf(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Align items (%s)", "beer-blocks"), breakpoint.toUpperCase()),
    value: alignItems[breakpoint],
    options: alignItemsOptions,
    onChange: value => setAttributes({
      alignItems: { ...alignItems,
        [breakpoint]: value
      }
    }),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Select the CSS Flexbox align-items property value.", "beer-blocks")
  });
};
const getAlignItemsClass = alignItems => Object.entries(alignItems).reduce((classes, _ref4) => {
  let [key, value] = _ref4;
  const breakpoint = key !== "xs" ? `-${key}` : "";
  return `${classes} align-items${breakpoint}-${value}`;
}, "");
const getColSizingAttributes = _ref5 => {
  let {
    xsSizingType = manualSizing,
    xsSize = 12,
    smSizingType = "",
    smSize = 12,
    mdSizingType = "",
    mdSize = 12,
    lgSizingType = "",
    lgSize = 12,
    xlSizingType = "",
    xlSize = 12
  } = _ref5;
  return {
    xs: {
      sizingType: xsSizingType,
      size: xsSize
    },
    sm: {
      sizingType: smSizingType,
      size: smSize
    },
    md: {
      sizingType: mdSizingType,
      size: mdSize
    },
    lg: {
      sizingType: lgSizingType,
      size: lgSize
    },
    xl: {
      sizingType: xlSizingType,
      size: xlSize
    }
  };
};

const getBreakpointColClass = (breakpoint, resolution) => {
  if (resolution === "xs") {
    return `col${breakpoint.sizingType === autoSizingVariableWidthContent ? "-auto" : breakpoint.sizingType === manualSizing ? `-${breakpoint.size}` : ""}`;
  }

  switch (breakpoint.sizingType) {
    case autoSizingEqualWidth:
      return `col-${resolution}`;

    case autoSizingVariableWidthContent:
      return `col-${resolution}-auto`;

    case manualSizing:
      return `col-${resolution}-${breakpoint.size}`;

    default:
      return "";
  }
};

const getColClass = sizing => `${getBreakpointColClass(sizing.xs, "xs")} ${getBreakpointColClass(sizing.sm, "sm")} ${getBreakpointColClass(sizing.md, "md")} ${getBreakpointColClass(sizing.lg, "lg")} ${getBreakpointColClass(sizing.xl, "xl")}`;
const getColControls = function (props) {
  let extraContents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : breakpoint => null;
  const {
    attributes: {
      sizing
    },
    setAttributes
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    className: "beer-blocks-breakpoints-panel",
    activeClass: "active-tab",
    initialTabName: "xs",
    tabs: breakpointsOptions
  }, tab => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
    label: sprintf(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Column sizing type (%s)", "beer-blocks"), tab.name.toUpperCase()),
    help: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginTop: "5px"
      }
    }, sprintf(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Settings applied from %s resolution and up", "beer-blocks"), tab.name.toUpperCase())),
    selected: sizing[tab.name].sizingType,
    options: colSizingTypeOptions(tab.name),
    onChange: option => {
      setAttributes({
        sizing: { ...sizing,
          [tab.name]: { ...sizing[tab.name],
            sizingType: option
          }
        }
      });
    }
  }), sizing[tab.name].sizingType === manualSizing && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    label: sprintf(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Column sizing (%d)", "beer-blocks"), sizing[tab.name].size),
    value: sizing[tab.name].size,
    onChange: width => {
      setAttributes({
        sizing: { ...sizing,
          [tab.name]: { ...sizing[tab.name],
            size: width
          }
        }
      });
    },
    min: 1,
    max: 12,
    step: 1,
    style: {
      paddingBottom: 0,
      marginBottom: 0
    }
  }), extraContents(tab.name)));
};
const getJustifyContentAttributes = function () {
  let {
    xs = "start",
    sm = "start",
    md = "start",
    lg = "start",
    xl = "start"
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    xs,
    sm,
    md,
    lg,
    xl
  };
};
const getAlignItemsAttributes = function () {
  let {
    xs = "start",
    sm = "start",
    md = "start",
    lg = "start",
    xl = "start"
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    xs,
    sm,
    md,
    lg,
    xl
  };
};
const getRowClass = (justifyContent, alignItems) => `row ${getJustifyContentClass(justifyContent)} ${getAlignItemsClass(alignItems)}`;
const getRowControls = function (props) {
  let extraContents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : breakpoint => null;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
    className: "beer-blocks-breakpoints-panel",
    activeClass: "active-tab",
    initialTabName: "xs",
    tabs: [{
      name: "xs",
      title: "XS",
      className: "beer-blocks-breakpoint-tab"
    }, {
      name: "sm",
      title: "SM",
      className: "beer-blocks-breakpoint-tab"
    }, {
      name: "md",
      title: "MD",
      className: "beer-blocks-breakpoint-tab"
    }, {
      name: "lg",
      title: "LG",
      className: "beer-blocks-breakpoint-tab"
    }, {
      name: "xl",
      title: "XL",
      className: "beer-blocks-breakpoint-tab"
    }]
  }, tab => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, justifyContentControl({
    props,
    breakpoint: tab.name
  }), alignItemsControl({
    props,
    breakpoint: tab.name
  }), extraContents(tab.name)));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  manualSizing,
  autoSizingEqualWidth,
  autoSizingVariableWidthContent,
  colSizingTypeOptions,
  breakpoints,
  breakpointsOptions,
  justifyContentOptions,
  justifyContentControl,
  getJustifyContentClass,
  alignItemsOptions,
  alignItemsControl,
  getAlignItemsClass,
  getColSizingAttributes,
  getColClass,
  getColControls,
  getJustifyContentAttributes,
  getAlignItemsAttributes,
  getRowClass,
  getRowControls
});

/***/ }),

/***/ "./src/icons/row.svg":
/*!***************************!*\
  !*** ./src/icons/row.svg ***!
  \***************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgRow(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 70.99 85.38"
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    "data-name": "Capa 2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    "data-name": "Capa 1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M66.55 17.75H4.44A4.44 4.44 0 010 13.31V4.44A4.44 4.44 0 014.44 0h62.11A4.44 4.44 0 0171 4.44v8.87a4.44 4.44 0 01-4.44 4.44zM4.44 3A1.48 1.48 0 003 4.44v8.87a1.48 1.48 0 001.48 1.48h62.07A1.48 1.48 0 0068 13.31V4.44A1.48 1.48 0 0066.55 3zM66.55 62.84H4.44A4.44 4.44 0 010 58.4v-8.87a4.44 4.44 0 014.44-4.44h62.11A4.44 4.44 0 0171 49.53v8.87a4.44 4.44 0 01-4.44 4.44zM4.44 48.05A1.48 1.48 0 003 49.53v8.87a1.48 1.48 0 001.48 1.48h62.07A1.48 1.48 0 0068 58.4v-8.87a1.48 1.48 0 00-1.48-1.48z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M66.55 40.29H4.44A4.44 4.44 0 010 35.86V27a4.45 4.45 0 014.44-4.44h62.11A4.45 4.45 0 0171 27v8.88a4.44 4.44 0 01-4.44 4.43zM4.44 25.5A1.48 1.48 0 003 27v8.88a1.47 1.47 0 001.48 1.47h62.07A1.47 1.47 0 0068 35.86V27a1.48 1.48 0 00-1.48-1.48z",
    fill: "#efa126"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M66.55 85.38H4.44A4.44 4.44 0 010 81v-8.93a4.45 4.45 0 014.44-4.44h62.11A4.45 4.45 0 0171 72.07V81a4.44 4.44 0 01-4.44 4.43zM4.44 70.59A1.48 1.48 0 003 72.07V81a1.47 1.47 0 001.48 1.47h62.07A1.47 1.47 0 0068 81v-8.93a1.48 1.48 0 00-1.48-1.48z"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3MC45OSA4NS4zOCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNlZmExMjY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYXBhXzIiIGRhdGEtbmFtZT0iQ2FwYSAyIj48ZyBpZD0iQ2FwYV8xLTIiIGRhdGEtbmFtZT0iQ2FwYSAxIj48cGF0aCBkPSJNNjYuNTUsMTcuNzVINC40NEE0LjQ0LDQuNDQsMCwwLDEsMCwxMy4zMVY0LjQ0QTQuNDQsNC40NCwwLDAsMSw0LjQ0LDBINjYuNTVBNC40NCw0LjQ0LDAsMCwxLDcxLDQuNDR2OC44N2E0LjQ0LDQuNDQsMCwwLDEtNC40NCw0LjQ0Wk00LjQ0LDNBMS40OCwxLjQ4LDAsMCwwLDMsNC40NHY4Ljg3YTEuNDgsMS40OCwwLDAsMCwxLjQ4LDEuNDhINjYuNTVBMS40OCwxLjQ4LDAsMCwwLDY4LDEzLjMxVjQuNDRBMS40OCwxLjQ4LDAsMCwwLDY2LjU1LDNaIi8+PHBhdGggZD0iTTY2LjU1LDYyLjg0SDQuNDRBNC40NCw0LjQ0LDAsMCwxLDAsNTguNFY0OS41M2E0LjQ0LDQuNDQsMCwwLDEsNC40NC00LjQ0SDY2LjU1QTQuNDQsNC40NCwwLDAsMSw3MSw0OS41M1Y1OC40YTQuNDQsNC40NCwwLDAsMS00LjQ0LDQuNDRaTTQuNDQsNDguMDVBMS40OCwxLjQ4LDAsMCwwLDMsNDkuNTNWNTguNGExLjQ4LDEuNDgsMCwwLDAsMS40OCwxLjQ4SDY2LjU1QTEuNDgsMS40OCwwLDAsMCw2OCw1OC40VjQ5LjUzYTEuNDgsMS40OCwwLDAsMC0xLjQ4LTEuNDhaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjYuNTUsNDAuMjlINC40NEE0LjQ0LDQuNDQsMCwwLDEsMCwzNS44NlYyN2E0LjQ1LDQuNDUsMCwwLDEsNC40NC00LjQ0SDY2LjU1QTQuNDUsNC40NSwwLDAsMSw3MSwyN3Y4Ljg4YTQuNDQsNC40NCwwLDAsMS00LjQ0LDQuNDNaTTQuNDQsMjUuNUExLjQ4LDEuNDgsMCwwLDAsMywyN3Y4Ljg4YTEuNDcsMS40NywwLDAsMCwxLjQ4LDEuNDdINjYuNTVBMS40NywxLjQ3LDAsMCwwLDY4LDM1Ljg2VjI3YTEuNDgsMS40OCwwLDAsMC0xLjQ4LTEuNDhaIi8+PHBhdGggZD0iTTY2LjU1LDg1LjM4SDQuNDRBNC40NCw0LjQ0LDAsMCwxLDAsODFWNzIuMDdhNC40NSw0LjQ1LDAsMCwxLDQuNDQtNC40NEg2Ni41NUE0LjQ1LDQuNDUsMCwwLDEsNzEsNzIuMDdWODFhNC40NCw0LjQ0LDAsMCwxLTQuNDQsNC40M1pNNC40NCw3MC41OUExLjQ4LDEuNDgsMCwwLDAsMyw3Mi4wN1Y4MWExLjQ3LDEuNDcsMCwwLDAsMS40OCwxLjQ3SDY2LjU1QTEuNDcsMS40NywwLDAsMCw2OCw4MVY3Mi4wN2ExLjQ4LDEuNDgsMCwwLDAtMS40OC0xLjQ4WiIvPjwvZz48L2c+PC9zdmc+");


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