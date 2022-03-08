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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/block-types/instructions/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/block-types/instructions/edit.js":
/*!**********************************************!*\
  !*** ./src/block-types/instructions/edit.js ***!
  \**********************************************/
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/grid */ "./src/helpers/grid.js");







const edit = props => {
  const {
    clientId,
    setAttributes,
    attributes: {
      justifyContent,
      alignItems
    }
  } = props;
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])({
    className: "container-fluid"
  });
  const innerBlocksPropsConfig = [{
    className: `p-0 ${_helpers_grid__WEBPACK_IMPORTED_MODULE_5__["default"].getRowClass(justifyContent, alignItems)}`
  }, {
    allowedBlocks: ["beer-blocks/instruction"],
    renderAppender: false
  }];
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useInnerBlocksProps"] ? Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useInnerBlocksProps"])(...innerBlocksPropsConfig) : Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["__experimentalUseInnerBlocksProps"])(...innerBlocksPropsConfig);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => setAttributes({
    id: clientId
  }), [clientId]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Instructions settings", "beer-blocks")
  }, _helpers_grid__WEBPACK_IMPORTED_MODULE_5__["default"].getRowControls(props))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", innerBlocksProps), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "button-block-appender__container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].ButtonBlockAppender, null))));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/block-types/instructions/editor.scss":
/*!**************************************************!*\
  !*** ./src/block-types/instructions/editor.scss ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-types/instructions/index.js":
/*!***********************************************!*\
  !*** ./src/block-types/instructions/index.js ***!
  \***********************************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/block-types/instructions/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/block-types/instructions/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/block-types/instructions/save.js");
/* harmony import */ var _helpers_spacing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/spacing */ "./src/helpers/spacing.js");
/* harmony import */ var _icons_instructions_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/instructions.svg */ "./src/icons/instructions.svg");
/* harmony import */ var _helpers_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/grid */ "./src/helpers/grid.js");


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

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("beer-blocks/instructions", {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Instructions", "block title", "beer-blocks"),
  category: "beer-blocks",
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Create an instructions list.", "block description", "beer-blocks"),
  textdomain: "beer-blocks",
  supports: {
    color: {
      background: true,
      gradients: false,
      text: false
    }
  },
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: _icons_instructions_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Instructions", "block title", "beer-blocks")
  }),
  attributes: {
    id: {
      type: "string"
    },
    justifyContent: {
      type: "object",
      default: _helpers_grid__WEBPACK_IMPORTED_MODULE_8__["default"].getJustifyContentAttributes()
    },
    alignItems: {
      type: "object",
      default: _helpers_grid__WEBPACK_IMPORTED_MODULE_8__["default"].getAlignItemsAttributes()
    },
    ..._helpers_spacing__WEBPACK_IMPORTED_MODULE_6__["default"].attributes()
  },
  providesContext: {
    instructionsId: "id"
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/block-types/instructions/save.js":
/*!**********************************************!*\
  !*** ./src/block-types/instructions/save.js ***!
  \**********************************************/
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
    className: "container-fluid"
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: `p-0 ${_helpers_grid__WEBPACK_IMPORTED_MODULE_2__["default"].getRowClass(justifyContent, alignItems)}`
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null)));
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

/***/ "./src/icons/instructions.svg":
/*!************************************!*\
  !*** ./src/icons/instructions.svg ***!
  \************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgInstructions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _defs, _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgInstructions(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 72.66 88.37"
  }, props), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", null, ".instructions_svg__cls-1{fill:#efa126}"))), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "instructions_svg__Capa_2",
    "data-name": "Capa 2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "instructions_svg__Capa_1-2",
    "data-name": "Capa 1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "instructions_svg__cls-1",
    d: "M72.66 19.6v-.06a.57.57 0 000-.13c-.07-3.82-.55-5.29-3.79-8.81L63.2 4.44c-.32-.35-.61-.67-.87-1C60 .83 59 0 54.85 0H5.66A5.67 5.67 0 000 5.66V41a1.31 1.31 0 102.61 0V5.66a3.06 3.06 0 013.05-3.05h47.89v12.57a5.67 5.67 0 005.66 5.66h10.85V82.7a3.06 3.06 0 01-3 3.06H5.66a3.06 3.06 0 01-3.05-3.06V47A1.31 1.31 0 000 47v35.7a5.67 5.67 0 005.66 5.67H67a5.66 5.66 0 005.65-5.67V19.6zM59.2 18.23a3 3 0 01-3.05-3.05V2.64c2 .12 2.52.67 4.24 2.58l.89 1 5.66 6.15c2.34 2.54 2.92 3.57 3.07 5.87z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M37.87 17.44a5.45 5.45 0 00-5.1.11 4.86 4.86 0 00-1.71 1.75 4.21 4.21 0 00-.59 2.1 1.51 1.51 0 00.4 1 1.29 1.29 0 001 .48c.79 0 1.14-.56 1.23-1.31A5.16 5.16 0 0134 20a2 2 0 012.66 0 1.75 1.75 0 01.49 1.27 1.52 1.52 0 01-.16.72 2.51 2.51 0 01-.42.62c-.26.3-.56.58-.85.87s-.75.76-1.09 1.16a4.29 4.29 0 00-.63 1.13 4.47 4.47 0 00-.25 1.58 1.65 1.65 0 00.38 1.18 1.23 1.23 0 00.95.41 1.26 1.26 0 001.29-1.23c0-.23.09-.47.15-.71a1.55 1.55 0 01.13-.36 2 2 0 01.26-.42 5.17 5.17 0 01.5-.55c.53-.53 1.07-1.08 1.58-1.64a5 5 0 00.79-1.19 3.86 3.86 0 00.34-1.64 4.24 4.24 0 00-.59-2.2 4.16 4.16 0 00-1.66-1.59zM35.18 29.94a1.52 1.52 0 00-1.14.51 1.92 1.92 0 000 2.52 1.58 1.58 0 001.12.47 1.55 1.55 0 001.1-.48 1.76 1.76 0 00.47-1.28 1.84 1.84 0 00-.44-1.23 1.48 1.48 0 00-1.13-.51zM10.21 48v4.67a2.07 2.07 0 002.07 2.07h8a2.07 2.07 0 002.07-2.07V48a2.07 2.07 0 00-2.07-2.07h-8A2.07 2.07 0 0010.21 48zm2.61.54h6.93v3.56h-6.93zM10.21 65.09a2.07 2.07 0 002.07 2.07h8a2.07 2.07 0 002.07-2.07v-4.66a2.07 2.07 0 00-2.07-2.07h-8a2.07 2.07 0 00-2.07 2.07zM12.82 61h6.93v3.58h-6.93zM10.21 77.54a2.08 2.08 0 002.07 2.08h8a2.08 2.08 0 002.07-2.08v-4.66a2.07 2.07 0 00-2.07-2.06h-8a2.07 2.07 0 00-2.07 2.06zm2.61-4.12h6.93V77h-6.93zM62.35 49.15H28a1.31 1.31 0 100 2.61h34.35a1.31 1.31 0 000-2.61z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "instructions_svg__cls-1",
    d: "M62.35 61.45H48.22a1.31 1.31 0 000 2.61h14.13a1.31 1.31 0 000-2.61zM28 64.06h14.25a1.31 1.31 0 000-2.61H28a1.31 1.31 0 100 2.61z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M28 76.52h34.35a1.31 1.31 0 000-2.61H28a1.31 1.31 0 100 2.61zM35.29 9.1a16 16 0 1016 16 16.06 16.06 0 00-16-16zm0 29.48a13.44 13.44 0 1113.43-13.44 13.45 13.45 0 01-13.43 13.44z"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3Mi42NiA4OC4zNyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNlZmExMjY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYXBhXzIiIGRhdGEtbmFtZT0iQ2FwYSAyIj48ZyBpZD0iQ2FwYV8xLTIiIGRhdGEtbmFtZT0iQ2FwYSAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03Mi42NiwxOS42di0uMDZhLjU3LjU3LDAsMCwwLDAtLjEzYy0uMDctMy44Mi0uNTUtNS4yOS0zLjc5LTguODFMNjMuMiw0LjQ0Yy0uMzItLjM1LS42MS0uNjctLjg3LTFDNjAsLjgzLDU5LDAsNTQuODUsMEg1LjY2QTUuNjcsNS42NywwLDAsMCwwLDUuNjZWNDFhMS4zMSwxLjMxLDAsMSwwLDIuNjEsMFY1LjY2QTMuMDYsMy4wNiwwLDAsMSw1LjY2LDIuNjFINTMuNTVWMTUuMThhNS42Nyw1LjY3LDAsMCwwLDUuNjYsNS42Nkg3MC4wNlY4Mi43YTMuMDYsMy4wNiwwLDAsMS0zLDMuMDZINS42NkEzLjA2LDMuMDYsMCwwLDEsMi42MSw4Mi43VjQ3QTEuMzEsMS4zMSwwLDAsMCwwLDQ3VjgyLjdhNS42Nyw1LjY3LDAsMCwwLDUuNjYsNS42N0g2N2E1LjY2LDUuNjYsMCwwLDAsNS42NS01LjY3VjE5LjZaTTU5LjIsMTguMjNhMywzLDAsMCwxLTMuMDUtMy4wNVYyLjY0YzIsLjEyLDIuNTIuNjcsNC4yNCwyLjU4bC44OSwxLDUuNjYsNi4xNWMyLjM0LDIuNTQsMi45MiwzLjU3LDMuMDcsNS44N1oiLz48cGF0aCBkPSJNMzcuODcsMTcuNDRhNS40NSw1LjQ1LDAsMCwwLTUuMS4xMSw0Ljg2LDQuODYsMCwwLDAtMS43MSwxLjc1LDQuMjEsNC4yMSwwLDAsMC0uNTksMi4xLDEuNTEsMS41MSwwLDAsMCwuNCwxLDEuMjksMS4yOSwwLDAsMCwxLC40OGMuNzksMCwxLjE0LS41NiwxLjIzLTEuMzFBNS4xNiw1LjE2LDAsMCwxLDM0LDIwYTIsMiwwLDAsMSwyLjY2LDAsMS43NSwxLjc1LDAsMCwxLC40OSwxLjI3LDEuNTIsMS41MiwwLDAsMS0uMTYuNzIsMi41MSwyLjUxLDAsMCwxLS40Mi42MmMtLjI2LjMtLjU2LjU4LS44NS44N3MtLjc1Ljc2LTEuMDksMS4xNkE0LjI5LDQuMjksMCwwLDAsMzQsMjUuNzdhNC40Nyw0LjQ3LDAsMCwwLS4yNSwxLjU4LDEuNjUsMS42NSwwLDAsMCwuMzgsMS4xOCwxLjIzLDEuMjMsMCwwLDAsLjk1LjQxLDEuMjYsMS4yNiwwLDAsMCwxLjI5LTEuMjNjMC0uMjMuMDktLjQ3LjE1LS43MWExLjU1LDEuNTUsMCwwLDEsLjEzLS4zNiwyLDIsMCwwLDEsLjI2LS40Miw1LjE3LDUuMTcsMCwwLDEsLjUtLjU1Yy41My0uNTMsMS4wNy0xLjA4LDEuNTgtMS42NGE1LDUsMCwwLDAsLjc5LTEuMTksMy44NiwzLjg2LDAsMCwwLC4zNC0xLjY0QTQuMjQsNC4yNCwwLDAsMCwzOS41MywxOWE0LjE2LDQuMTYsMCwwLDAtMS42Ni0xLjU5WiIvPjxwYXRoIGQ9Ik0zNS4xOCwyOS45NGExLjUyLDEuNTIsMCwwLDAtMS4xNC41MSwxLjkyLDEuOTIsMCwwLDAsMCwyLjUyLDEuNTgsMS41OCwwLDAsMCwxLjEyLjQ3LDEuNTUsMS41NSwwLDAsMCwxLjEtLjQ4LDEuNzYsMS43NiwwLDAsMCwuNDctMS4yOCwxLjg0LDEuODQsMCwwLDAtLjQ0LTEuMjMsMS40OCwxLjQ4LDAsMCwwLTEuMTMtLjUxWiIvPjxwYXRoIGQ9Ik0xMC4yMSw0OHY0LjY3YTIuMDcsMi4wNywwLDAsMCwyLjA3LDIuMDdoOGEyLjA3LDIuMDcsMCwwLDAsMi4wNy0yLjA3VjQ4YTIuMDcsMi4wNywwLDAsMC0yLjA3LTIuMDdoLThBMi4wNywyLjA3LDAsMCwwLDEwLjIxLDQ4Wm0yLjYxLjU0aDYuOTNWNTIuMUgxMi44MloiLz48cGF0aCBkPSJNMTAuMjEsNjUuMDlhMi4wNywyLjA3LDAsMCwwLDIuMDcsMi4wN2g4YTIuMDcsMi4wNywwLDAsMCwyLjA3LTIuMDdWNjAuNDNhMi4wNywyLjA3LDAsMCwwLTIuMDctMi4wN2gtOGEyLjA3LDIuMDcsMCwwLDAtMi4wNywyLjA3Wk0xMi44Miw2MWg2LjkzdjMuNThIMTIuODJaIi8+PHBhdGggZD0iTTEwLjIxLDc3LjU0YTIuMDgsMi4wOCwwLDAsMCwyLjA3LDIuMDhoOGEyLjA4LDIuMDgsMCwwLDAsMi4wNy0yLjA4VjcyLjg4YTIuMDcsMi4wNywwLDAsMC0yLjA3LTIuMDZoLThhMi4wNywyLjA3LDAsMCwwLTIuMDcsMi4wNlptMi42MS00LjEyaDYuOTNWNzdIMTIuODJaIi8+PHBhdGggZD0iTTYyLjM1LDQ5LjE1SDI4YTEuMzEsMS4zMSwwLDEsMCwwLDIuNjFINjIuMzVhMS4zMSwxLjMxLDAsMCwwLDAtMi42MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02Mi4zNSw2MS40NUg0OC4yMmExLjMxLDEuMzEsMCwwLDAsMCwyLjYxSDYyLjM1YTEuMzEsMS4zMSwwLDAsMCwwLTIuNjFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjgsNjQuMDZINDIuMjVhMS4zMSwxLjMxLDAsMCwwLDAtMi42MUgyOGExLjMxLDEuMzEsMCwxLDAsMCwyLjYxWiIvPjxwYXRoIGQ9Ik0yOCw3Ni41Mkg2Mi4zNWExLjMxLDEuMzEsMCwwLDAsMC0yLjYxSDI4YTEuMzEsMS4zMSwwLDEsMCwwLDIuNjFaIi8+PHBhdGggZD0iTTM1LjI5LDkuMWExNiwxNiwwLDEsMCwxNiwxNiwxNi4wNiwxNi4wNiwwLDAsMC0xNi0xNlptMCwyOS40OEExMy40NCwxMy40NCwwLDEsMSw0OC43MiwyNS4xNCwxMy40NSwxMy40NSwwLDAsMSwzNS4yOSwzOC41OFoiLz48L2c+PC9nPjwvc3ZnPg==");


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