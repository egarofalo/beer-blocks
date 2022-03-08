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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/block-types/alert/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/block-types/alert/edit.js":
/*!***************************************!*\
  !*** ./src/block-types/alert/edit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_bootstrap_variants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../helpers/bootstrap-variants */ "./src/helpers/bootstrap-variants.js");
/* harmony import */ var _helpers_spacing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../helpers/spacing */ "./src/helpers/spacing.js");








const edit = props => {
  const {
    attributes: {
      alertType
    },
    setAttributes
  } = props;
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])({
    className: alertType,
    style: { ..._helpers_spacing__WEBPACK_IMPORTED_MODULE_6__["default"].styles(props.attributes)
    }
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Alert settings", "beer-blocks")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Select an alert type", "beer-blocks"),
    value: alertType,
    options: _helpers_bootstrap_variants__WEBPACK_IMPORTED_MODULE_5__["options"].map(option => ({ ...option,
      value: `alert alert-${option.value}`
    })),
    onChange: value => setAttributes({
      alertType: value
    }),
    style: {
      paddingBottom: 0,
      marginBottom: 0
    }
  })), _helpers_spacing__WEBPACK_IMPORTED_MODULE_6__["default"].controls({
    props
  })), _helpers_spacing__WEBPACK_IMPORTED_MODULE_6__["default"].visualizer(props, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
    role: "alert"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/block-types/alert/editor.scss":
/*!*******************************************!*\
  !*** ./src/block-types/alert/editor.scss ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-types/alert/index.js":
/*!****************************************!*\
  !*** ./src/block-types/alert/index.js ***!
  \****************************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/block-types/alert/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/block-types/alert/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/block-types/alert/save.js");
/* harmony import */ var _helpers_spacing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../helpers/spacing */ "./src/helpers/spacing.js");
/* harmony import */ var _icons_alert_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../icons/alert.svg */ "./src/icons/alert.svg");


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

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("beer-blocks/alert", {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Alert", "block title", "beer-blocks"),
  category: "beer-blocks",
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Represents Bootstrap Alerts that provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.", "block description", "beer-blocks"),
  textdomain: "beer-blocks",
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: _icons_alert_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    alt: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Alert", "block title", "beer-blocks")
  }),
  attributes: {
    contents: {
      type: "html"
    },
    alertType: {
      type: "string",
      default: "alert alert-light"
    },
    ..._helpers_spacing__WEBPACK_IMPORTED_MODULE_6__["default"].attributes()
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/block-types/alert/save.js":
/*!***************************************!*\
  !*** ./src/block-types/alert/save.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_spacing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../helpers/spacing */ "./src/helpers/spacing.js");





const save = props => {
  const {
    attributes: {
      alertType
    }
  } = props;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"].save({
    className: alertType,
    style: { ..._helpers_spacing__WEBPACK_IMPORTED_MODULE_3__["default"].styles(props.attributes)
    }
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
    role: "alert"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null));
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./src/helpers/bootstrap-variants.js":
/*!*******************************************!*\
  !*** ./src/helpers/bootstrap-variants.js ***!
  \*******************************************/
/*! exports provided: variants, variantsColorPallet, options, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variants", function() { return variants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variantsColorPallet", function() { return variantsColorPallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
const variants = {
  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
  info: "#17a2b8",
  warning: "#ffc107",
  danger: "#dc3545",
  light: "#f8f9fa",
  dark: "#343a40"
};
const variantsColorPallet = [...Object.entries(variants).map(value => ({
  name: value[0],
  color: value[1]
}))];
const options = [{
  value: "primary",
  label: "Primary"
}, {
  value: "secondary",
  label: "Secondary"
}, {
  value: "success",
  label: "Success"
}, {
  value: "danger",
  label: "Danger"
}, {
  value: "warning",
  label: "Warning"
}, {
  value: "info",
  label: "Info"
}, {
  value: "light",
  label: "Light"
}, {
  value: "dark",
  label: "Dark"
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  variants,
  variantsColorPallet,
  options
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

/***/ "./src/icons/alert.svg":
/*!*****************************!*\
  !*** ./src/icons/alert.svg ***!
  \*****************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgAlert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _defs, _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgAlert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 86.43 77.54"
  }, props), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", null, ".alert_svg__cls-2{fill:none;stroke:#010101;stroke-miterlimit:10;stroke-width:2px}"))), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "alert_svg__Capa_2",
    "data-name": "Capa 2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "alert_svg__Capa_1-2",
    "data-name": "Capa 1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M76.25 77.54H10.18a10.16 10.16 0 01-8.8-15.24l33-57.22a10.16 10.16 0 0117.6 0l33 57.22a10.16 10.16 0 01-8.8 15.24zm-33-72.48a5.05 5.05 0 00-4.45 2.55l-33 57.22a5.1 5.1 0 004.42 7.65h66.03a5.1 5.1 0 004.41-7.65l-33-57.22a5.06 5.06 0 00-4.45-2.55z",
    fill: "#efa126"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "alert_svg__cls-2",
    d: "M40.2 19.74h6.03v30.13H40.2zM43.21 63.93a4 4 0 114-4 4 4 0 01-4 4z"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4Ni40MyA3Ny41NCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNlZmExMjY7fS5jbHMtMntmaWxsOm5vbmU7c3Ryb2tlOiMwMTAxMDE7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjJweDt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkNhcGFfMiIgZGF0YS1uYW1lPSJDYXBhIDIiPjxnIGlkPSJDYXBhXzEtMiIgZGF0YS1uYW1lPSJDYXBhIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc2LjI1LDc3LjU0SDEwLjE4QTEwLjE2LDEwLjE2LDAsMCwxLDEuMzgsNjIuM2wzMy01Ny4yMmExMC4xNiwxMC4xNiwwLDAsMSwxNy42LDBsMzMsNTcuMjJhMTAuMTYsMTAuMTYsMCwwLDEtOC44LDE1LjI0Wm0tMzMtNzIuNDhBNS4wNSw1LjA1LDAsMCwwLDM4LjgsNy42MWwtMzMsNTcuMjJhNS4xLDUuMSwwLDAsMCw0LjQyLDcuNjVINzYuMjVhNS4xLDUuMSwwLDAsMCw0LjQxLTcuNjVsLTMzLTU3LjIyQTUuMDYsNS4wNiwwLDAsMCw0My4yMSw1LjA2WiIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iNDAuMiIgeT0iMTkuNzQiIHdpZHRoPSI2LjAzIiBoZWlnaHQ9IjMwLjEzIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDMuMjEsNjMuOTNhNCw0LDAsMSwxLDQtNEE0LDQsMCwwLDEsNDMuMjEsNjMuOTNaIi8+PC9nPjwvZz48L3N2Zz4=");


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