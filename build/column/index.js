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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/block-types/column/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/block-types/column/edit.js":
/*!****************************************!*\
  !*** ./src/block-types/column/edit.js ***!
  \****************************************/
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
/* harmony import */ var _helpers_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../helpers/grid */ "./src/helpers/grid.js");







const edit = props => {
  const {
    attributes: {
      sizing
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
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])({
    className: _helpers_grid__WEBPACK_IMPORTED_MODULE_5__["default"].getColClass(sizing)
  });
  const innerBlocksPropsConfig = [{ ...blockProps
  }, {
    renderAppender: !hasChildBlocks ? _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].ButtonBlockAppender : undefined
  }];
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useInnerBlocksProps"] ? Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useInnerBlocksProps"])(...innerBlocksPropsConfig) : Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["__experimentalUseInnerBlocksProps"])(...innerBlocksPropsConfig);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Responsive settings", "beer-blocks")
  }, _helpers_grid__WEBPACK_IMPORTED_MODULE_5__["default"].getColControls(props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", innerBlocksProps));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/block-types/column/editor.scss":
/*!********************************************!*\
  !*** ./src/block-types/column/editor.scss ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-types/column/index.js":
/*!*****************************************!*\
  !*** ./src/block-types/column/index.js ***!
  \*****************************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/block-types/column/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/block-types/column/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/block-types/column/save.js");
/* harmony import */ var _helpers_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../helpers/grid */ "./src/helpers/grid.js");
/* harmony import */ var _icons_column_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/column.svg */ "./src/icons/column.svg");


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

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("beer-blocks/column", {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Column", "block title", "beer-blocks"),
  category: "beer-blocks",
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Create a Bootstrap column wich is part of the Bootstrap Grid system.", "block description", "beer-blocks"),
  textdomain: "beer-blocks",
  supports: {
    color: {
      background: true,
      gradients: true,
      text: false
    }
  },
  parent: ["beer-blocks/row"],
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: _icons_column_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Column", "block title", "beer-blocks")
  }),
  attributes: {
    sizing: {
      type: "object",
      default: { ..._helpers_grid__WEBPACK_IMPORTED_MODULE_6__["default"].getColSizingAttributes({
          xsSizingType: _helpers_grid__WEBPACK_IMPORTED_MODULE_6__["default"].autoSizingEqualWidth
        })
      }
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/block-types/column/save.js":
/*!****************************************!*\
  !*** ./src/block-types/column/save.js ***!
  \****************************************/
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
      sizing
    }
  } = props;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save({
    className: _helpers_grid__WEBPACK_IMPORTED_MODULE_2__["default"].getColClass(sizing)
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

/***/ "./src/icons/column.svg":
/*!******************************!*\
  !*** ./src/icons/column.svg ***!
  \******************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgColumn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgColumn(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 82.76 84.58"
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    "data-name": "Capa 2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    "data-name": "Capa 1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M20.48 84.58H5.29A5.29 5.29 0 010 79.29v-74A5.29 5.29 0 015.29 0h15.19a5.3 5.3 0 015.29 5.29v74a5.3 5.3 0 01-5.29 5.29zM5.29 3.52a1.77 1.77 0 00-1.77 1.77v74a1.77 1.77 0 001.77 1.77h15.19a1.76 1.76 0 001.76-1.77v-74a1.76 1.76 0 00-1.76-1.77z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M49.15 84.58H34a5.29 5.29 0 01-5.28-5.29v-74A5.29 5.29 0 0134 0h15.2a5.29 5.29 0 015.28 5.29v74a5.29 5.29 0 01-5.28 5.29zM34 3.52a1.76 1.76 0 00-1.76 1.77v74A1.76 1.76 0 0034 81.06h15.2a1.76 1.76 0 001.76-1.77v-74a1.76 1.76 0 00-1.76-1.77z",
    fill: "#efa126"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M77.48 84.58H62.29A5.29 5.29 0 0157 79.29v-74A5.29 5.29 0 0162.29 0h15.19a5.29 5.29 0 015.28 5.29v74a5.29 5.29 0 01-5.28 5.29zM62.29 3.52a1.77 1.77 0 00-1.77 1.77v74a1.77 1.77 0 001.77 1.77h15.19a1.76 1.76 0 001.76-1.77v-74a1.76 1.76 0 00-1.76-1.77z"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4Mi43NiA4NC41OCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNlZmExMjY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYXBhXzIiIGRhdGEtbmFtZT0iQ2FwYSAyIj48ZyBpZD0iQ2FwYV8xLTIiIGRhdGEtbmFtZT0iQ2FwYSAxIj48cGF0aCBkPSJNMjAuNDgsODQuNThINS4yOUE1LjI5LDUuMjksMCwwLDEsMCw3OS4yOXYtNzRBNS4yOSw1LjI5LDAsMCwxLDUuMjksMEgyMC40OGE1LjMsNS4zLDAsMCwxLDUuMjksNS4yOXY3NGE1LjMsNS4zLDAsMCwxLTUuMjksNS4yOVpNNS4yOSwzLjUyQTEuNzcsMS43NywwLDAsMCwzLjUyLDUuMjl2NzRhMS43NywxLjc3LDAsMCwwLDEuNzcsMS43N0gyMC40OGExLjc2LDEuNzYsMCwwLDAsMS43Ni0xLjc3di03NGExLjc2LDEuNzYsMCwwLDAtMS43Ni0xLjc3WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ5LjE1LDg0LjU4SDM0YTUuMjksNS4yOSwwLDAsMS01LjI4LTUuMjl2LTc0QTUuMjksNS4yOSwwLDAsMSwzNCwwaDE1LjJhNS4yOSw1LjI5LDAsMCwxLDUuMjgsNS4yOXY3NGE1LjI5LDUuMjksMCwwLDEtNS4yOCw1LjI5Wk0zNCwzLjUyYTEuNzYsMS43NiwwLDAsMC0xLjc2LDEuNzd2NzRBMS43NiwxLjc2LDAsMCwwLDM0LDgxLjA2aDE1LjJhMS43NiwxLjc2LDAsMCwwLDEuNzYtMS43N3YtNzRhMS43NiwxLjc2LDAsMCwwLTEuNzYtMS43N1oiLz48cGF0aCBkPSJNNzcuNDgsODQuNThINjIuMjlBNS4yOSw1LjI5LDAsMCwxLDU3LDc5LjI5di03NEE1LjI5LDUuMjksMCwwLDEsNjIuMjksMEg3Ny40OGE1LjI5LDUuMjksMCwwLDEsNS4yOCw1LjI5djc0YTUuMjksNS4yOSwwLDAsMS01LjI4LDUuMjlaTTYyLjI5LDMuNTJhMS43NywxLjc3LDAsMCwwLTEuNzcsMS43N3Y3NGExLjc3LDEuNzcsMCwwLDAsMS43NywxLjc3SDc3LjQ4YTEuNzYsMS43NiwwLDAsMCwxLjc2LTEuNzd2LTc0YTEuNzYsMS43NiwwLDAsMC0xLjc2LTEuNzdaIi8+PC9nPjwvZz48L3N2Zz4=");


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