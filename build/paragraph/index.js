(window["webpackJsonp_beer_blocks"] = window["webpackJsonp_beer_blocks"] || []).push([["style-paragraph/index"],{

/***/ "./src/block-types/paragraph/style.scss":
/*!**********************************************!*\
  !*** ./src/block-types/paragraph/style.scss ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"paragraph/index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp_beer_blocks"] = window["webpackJsonp_beer_blocks"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/block-types/paragraph/index.js","style-paragraph/index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

module.exports = _taggedTemplateLiteral;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/cache/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/dist/stylis.mjs");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js");





var last = function last(arr) {
  return arr.length ? arr[arr.length - 1] : null;
}; // based on https://github.com/thysultan/stylis.js/blob/e6843c373ebcbbfade25ebcc23f540ed8508da0a/src/Tokenizer.js#L239-L244


var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = Object(stylis__WEBPACK_IMPORTED_MODULE_1__["peek"])(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (Object(stylis__WEBPACK_IMPORTED_MODULE_1__["token"])(character)) {
      break;
    }

    Object(stylis__WEBPACK_IMPORTED_MODULE_1__["next"])();
  }

  return Object(stylis__WEBPACK_IMPORTED_MODULE_1__["slice"])(begin, stylis__WEBPACK_IMPORTED_MODULE_1__["position"]);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (Object(stylis__WEBPACK_IMPORTED_MODULE_1__["token"])(character)) {
      case 0:
        // &\f
        if (character === 38 && Object(stylis__WEBPACK_IMPORTED_MODULE_1__["peek"])() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(stylis__WEBPACK_IMPORTED_MODULE_1__["position"] - 1, points, index);
        break;

      case 2:
        parsed[index] += Object(stylis__WEBPACK_IMPORTED_MODULE_1__["delimit"])(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = Object(stylis__WEBPACK_IMPORTED_MODULE_1__["peek"])() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += Object(stylis__WEBPACK_IMPORTED_MODULE_1__["from"])(character);
    }
  } while (character = Object(stylis__WEBPACK_IMPORTED_MODULE_1__["next"])());

  return parsed;
};

var getRules = function getRules(value, points) {
  return Object(stylis__WEBPACK_IMPORTED_MODULE_1__["dealloc"])(toRules(Object(stylis__WEBPACK_IMPORTED_MODULE_1__["alloc"])(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
  !element.length) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return !!element && element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule') return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses && cache.compat !== true) {
      var prevElement = index > 0 ? children[index - 1] : null;

      if (prevElement && isIgnoringComment(last(prevElement.children))) {
        return;
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

var defaultStylisPlugins = [stylis__WEBPACK_IMPORTED_MODULE_1__["prefixer"]];

var createCache = function createCache(options) {
  var key = options.key;

  if ( true && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if ( key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (true) {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  {
    var currentSheet;
    var finalizingPlugins = [stylis__WEBPACK_IMPORTED_MODULE_1__["stringify"],  true ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== stylis__WEBPACK_IMPORTED_MODULE_1__["COMMENT"]) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } : undefined];
    var serializer = Object(stylis__WEBPACK_IMPORTED_MODULE_1__["middleware"])(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return Object(stylis__WEBPACK_IMPORTED_MODULE_1__["serialize"])(Object(stylis__WEBPACK_IMPORTED_MODULE_1__["compile"])(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if ( true && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/cache/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emotion/cache/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js ***!
  \***************************************************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (true) {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if ( true && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (true) {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__);


// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks

var hoistNonReactStatics = (function (targetComponent, sourceComponent) {
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default()(targetComponent, sourceComponent);
});

/* harmony default export */ __webpack_exports__["default"] = (hoistNonReactStatics);


/***/ }),

/***/ "./node_modules/@emotion/react/dist/emotion-element-1c22787f.browser.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-element-1c22787f.browser.esm.js ***!
  \**********************************************************************************/
/*! exports provided: C, E, T, _, a, b, c, h, u, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Emotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return __unsafe_useEmotionCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createEmotionProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return withEmotionCache; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var _isolated_hnrs_dist_emotion_react_isolated_hnrs_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js */ "./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/react/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/react/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");








var hasOwnProperty = {}.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_1__["default"])({
  key: 'css'
}) : null);

if (true) {
  EmotionCacheContext.displayName = 'EmotionCacheContext';
}

var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(EmotionCacheContext);
};

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
    // the cache will never be null in the browser
    var cache = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

if (true) {
  ThemeContext.displayName = 'EmotionThemeContext';
}

var useTheme = function useTheme() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ThemeContext);
};

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme))) {
      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
    }

    return mergedTheme;
  }

  if ( true && (theme == null || typeof theme !== 'object' || Array.isArray(theme))) {
    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */Object(_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (outerTheme) {
  return Object(_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
    return getTheme(outerTheme, theme);
  });
});
var ThemeProvider = function ThemeProvider(props) {
  var theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';

  var render = function render(props, ref) {
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ThemeContext);
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe


  var WithTheme = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return Object(_isolated_hnrs_dist_emotion_react_isolated_hnrs_browser_esm_js__WEBPACK_IMPORTED_MODULE_4__["default"])(WithTheme, Component);
}

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z0-9$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z0-9$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  return newProps;
};

var Noop = function Noop() {
  return null;
};

var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_5__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_6__["serializeStyles"])(registeredStyles, undefined, Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ThemeContext));

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_6__["serializeStyles"])([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_5__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(type, newProps);
  var possiblyStyleElement = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Noop, null);


  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, possiblyStyleElement, ele);
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
}




/***/ }),

/***/ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js ***!
  \***********************************************************************/
/*! exports provided: CacheProvider, ThemeContext, ThemeProvider, __unsafe_useEmotionCache, useTheme, withEmotionCache, withTheme, ClassNames, Global, createElement, css, jsx, keyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _emotion_element_1c22787f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emotion-element-1c22787f.browser.esm.js */ "./node_modules/@emotion/react/dist/emotion-element-1c22787f.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return _emotion_element_1c22787f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return _emotion_element_1c22787f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["T"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _emotion_element_1c22787f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__unsafe_useEmotionCache", function() { return _emotion_element_1c22787f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return _emotion_element_1c22787f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return _emotion_element_1c22787f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["w"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return _emotion_element_1c22787f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _isolated_hnrs_dist_emotion_react_isolated_hnrs_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js */ "./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/react/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/react/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/react/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js");












var pkg = {
	name: "@emotion/react",
	version: "11.6.0",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	browser: {
		"./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
	},
	types: "types/index.d.ts",
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"_isolated-hnrs",
		"types/*.d.ts",
		"macro.js",
		"macro.d.ts",
		"macro.js.flow"
	],
	sideEffects: false,
	author: "mitchellhamilton <mitchell@mitchellhamilton.me>",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.13.10",
		"@emotion/cache": "^11.6.0",
		"@emotion/serialize": "^1.0.2",
		"@emotion/sheet": "^1.1.0",
		"@emotion/utils": "^1.0.0",
		"@emotion/weak-memoize": "^0.2.5",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		"@babel/core": "^7.0.0",
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@babel/core": {
			optional: true
		},
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@babel/core": "^7.13.10",
		"@emotion/css": "11.5.0",
		"@emotion/css-prettifier": "1.0.0",
		"@emotion/server": "11.4.0",
		"@emotion/styled": "11.6.0",
		"@types/react": "^16.9.11",
		dtslint: "^0.3.0",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.js",
			"./jsx-runtime.js",
			"./jsx-dev-runtime.js",
			"./_isolated-hnrs.js"
		],
		umdName: "emotionReact"
	}
};

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !_emotion_element_1c22787f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["h"].call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"].apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_1c22787f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["E"];
  createElementArgArray[1] = Object(_emotion_element_1c22787f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["c"])(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */Object(_emotion_element_1c22787f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["w"])(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;
  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_8__["serializeStyles"])([styles], undefined, Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_emotion_element_1c22787f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["T"]));
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    var key = cache.key + "-global";
    var sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_9__["StyleSheet"]({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_7__["insertStyles"])(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (true) {
  Global.displayName = 'EmotionGlobal';
}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_8__["serializeStyles"])(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if ( true && arg.styles !== undefined && arg.name !== undefined) {
              console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
            }

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_7__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var Noop = function Noop() {
  return null;
};

var ClassNames = /* #__PURE__ */Object(_emotion_element_1c22787f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["w"])(function (props, cache) {
  var hasRendered = false;

  var css = function css() {
    if (hasRendered && "development" !== 'production') {
      throw new Error('css can only be used during render');
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_8__["serializeStyles"])(args, cache.registered);

    {
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_7__["insertStyles"])(cache, serialized, false);
    }

    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && "development" !== 'production') {
      throw new Error('cx can only be used during render');
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_emotion_element_1c22787f_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__["T"])
  };
  var ele = props.children(content);
  hasRendered = true;
  var possiblyStyleElement = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Noop, null);


  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, possiblyStyleElement, ele);
});

if (true) {
  ClassNames.displayName = 'EmotionClassNames';
}

if (true) {
  var isBrowser = "object" !== 'undefined'; // #1727 for some reason Jest evaluates modules twice if some consuming module gets mocked with jest.mock

  var isJest = typeof jest !== 'undefined';

  if (isBrowser && !isJest) {
    // globalThis has wide browser support - https://caniuse.com/?search=globalThis, Node.js 12 and later
    var globalContext = // $FlowIgnore
    typeof globalThis !== 'undefined' ? globalThis // eslint-disable-line no-undef
    : isBrowser ? window : global;
    var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";

    if (globalContext[globalKey]) {
      console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
    }

    globalContext[globalKey] = true;
  }
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@emotion/react/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@emotion/react/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js ***!
  \***********************************************************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.browser.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/react/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emotion/react/node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js ***!
  \***************************************************************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (true) {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if ( true && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (true) {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/react/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emotion/react/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js ***!
  \***************************************************************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-input-autosize/lib/AutosizeInput.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-input-autosize/lib/AutosizeInput.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	_createClass(AutosizeInput, null, [{
		key: 'getDerivedStateFromProps',
		value: function getDerivedStateFromProps(props, state) {
			var id = props.id;

			return id !== state.prevId ? { inputId: id || generateId(), prevId: id } : null;
		}
	}]);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId(),
			prevId: props.id
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(_react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;

/***/ }),

/***/ "./node_modules/react-select/dist/Select-dbb12e54.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-select/dist/Select-dbb12e54.esm.js ***!
  \***************************************************************/
/*! exports provided: S, a, b, c, d, g, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getOptionLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getOptionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return mergeStyles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-4bd03571.esm.js */ "./node_modules/react-select/dist/index-4bd03571.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");











function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref =  false ? undefined : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFJIiwiZmlsZSI6IkExMXlUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdHlwZSBFbGVtZW50Q29uZmlnIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG4vLyBBc3Npc3RpdmUgdGV4dCB0byBkZXNjcmliZSB2aXN1YWwgZWxlbWVudHMuIEhpZGRlbiBmb3Igc2lnaHRlZCB1c2Vycy5cbmNvbnN0IEExMXlUZXh0ID0gKHByb3BzOiBFbGVtZW50Q29uZmlnPCdzcGFuJz4pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var A11yText = function A11yText(props) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: _ref
  }, props));
};

var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable,
        isMulti = props.isMulti,
        isDisabled = props.isDisabled,
        tabSelectsValue = props.tabSelectsValue,
        context = props.context;

    switch (context) {
      case 'menu':
        return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu").concat(tabSelectsValue ? ', press Tab to select the option and exit the menu' : '', ".");

      case 'input':
        return "".concat(props['aria-label'] || 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');

      case 'value':
        return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';

      default:
        return '';
    }
  },
  onChange: function onChange(props) {
    var action = props.action,
        _props$label = props.label,
        label = _props$label === void 0 ? '' : _props$label,
        isDisabled = props.isDisabled;

    switch (action) {
      case 'deselect-option':
      case 'pop-value':
      case 'remove-value':
        return "option ".concat(label, ", deselected.");

      case 'select-option':
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");

      default:
        return '';
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context,
        _props$focused = props.focused,
        focused = _props$focused === void 0 ? {} : _props$focused,
        options = props.options,
        _props$label2 = props.label,
        label = _props$label2 === void 0 ? '' : _props$label2,
        selectValue = props.selectValue,
        isDisabled = props.isDisabled,
        isSelected = props.isSelected;

    var getArrayIndex = function getArrayIndex(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : '';
    };

    if (context === 'value' && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }

    if (context === 'menu') {
      var disabled = isDisabled ? ' disabled' : '';
      var status = "".concat(isSelected ? 'selected' : 'focused').concat(disabled);
      return "option ".concat(label, " ").concat(status, ", ").concat(getArrayIndex(options, focused), ".");
    }

    return '';
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue,
        resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
  }
};

var LiveRegion = function LiveRegion(props) {
  var ariaSelection = props.ariaSelection,
      focusedOption = props.focusedOption,
      focusedValue = props.focusedValue,
      focusableOptions = props.focusableOptions,
      isFocused = props.isFocused,
      selectValue = props.selectValue,
      selectProps = props.selectProps;
  var ariaLiveMessages = selectProps.ariaLiveMessages,
      getOptionLabel = selectProps.getOptionLabel,
      inputValue = selectProps.inputValue,
      isMulti = selectProps.isMulti,
      isOptionDisabled = selectProps.isOptionDisabled,
      isSearchable = selectProps.isSearchable,
      menuIsOpen = selectProps.menuIsOpen,
      options = selectProps.options,
      screenReaderStatus = selectProps.screenReaderStatus,
      tabSelectsValue = selectProps.tabSelectsValue;
  var ariaLabel = selectProps['aria-label'];
  var ariaLive = selectProps['aria-live']; // Update aria live message configuration when prop changes

  var messages = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
    return Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]); // Update aria live selected option when prop changes

  var ariaSelected = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
    var message = '';

    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option,
          removedValue = ariaSelection.removedValue,
          value = ariaSelection.value; // select-option when !isMulti does not return option so we assume selected option is value

      var asOption = function asOption(val) {
        return !Array.isArray(val) ? val : null;
      };

      var selected = removedValue || option || asOption(value);

      var onChangeProps = Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])({
        isDisabled: selected && isOptionDisabled(selected),
        label: selected ? getOptionLabel(selected) : ''
      }, ariaSelection);

      message = messages.onChange(onChangeProps);
    }

    return message;
  }, [ariaSelection, isOptionDisabled, getOptionLabel, messages]);
  var ariaFocused = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
    var focusMsg = '';
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));

    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused: focused,
        label: getOptionLabel(focused),
        isDisabled: isOptionDisabled(focused),
        isSelected: isSelected,
        options: options,
        context: focused === focusedOption ? 'menu' : 'value',
        selectValue: selectValue
      };
      focusMsg = messages.onFocus(onFocusProps);
    }

    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel, isOptionDisabled, messages, options, selectValue]);
  var ariaResults = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
    var resultsMsg = '';

    if (menuIsOpen && options.length && messages.onFilter) {
      var resultsMessage = screenReaderStatus({
        count: focusableOptions.length
      });
      resultsMsg = messages.onFilter({
        inputValue: inputValue,
        resultsMessage: resultsMessage
      });
    }

    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages, options, screenReaderStatus]);
  var ariaGuidance = Object(react__WEBPACK_IMPORTED_MODULE_6__["useMemo"])(function () {
    var guidanceMsg = '';

    if (messages.guidance) {
      var context = focusedValue ? 'value' : menuIsOpen ? 'menu' : 'input';
      guidanceMsg = messages.guidance({
        'aria-label': ariaLabel,
        context: context,
        isDisabled: focusedOption && isOptionDisabled(focusedOption),
        isMulti: isMulti,
        isSearchable: isSearchable,
        tabSelectsValue: tabSelectsValue
      });
    }

    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled, isSearchable, menuIsOpen, messages, tabSelectsValue]);
  var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(A11yText, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, isFocused && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", {
    id: "aria-selection"
  }, ariaSelected), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", {
    id: "aria-context"
  }, ariaContext)));
};

var diacritics = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
  return d.letters;
}).join('') + ']', 'g');
var diacriticToBase = {};

for (var i = 0; i < diacritics.length; i++) {
  var diacritic = diacritics[i];

  for (var j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}

var stripDiacritics = function stripDiacritics(str) {
  return str.replace(anyDiacritic, function (match) {
    return diacriticToBase[match];
  });
};

var memoizedStripDiacriticsForInput = Object(memoize_one__WEBPACK_IMPORTED_MODULE_8__["default"])(stripDiacritics);

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

function DummyInput(_ref) {
  _ref.in;
      _ref.out;
      _ref.onExited;
      _ref.appear;
      _ref.enter;
      _ref.exit;
      var innerRef = _ref.innerRef;
      _ref.emotion;
      var props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: innerRef
  }, props, {
    css: /*#__PURE__*/Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["css"])({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      fontSize: 'inherit',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(0)'
    },  false ? undefined : ";label:DummyInput;",  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJNIiwiZmlsZSI6IkR1bW15SW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbjogaW5Qcm9wLFxuICBvdXQsXG4gIG9uRXhpdGVkLFxuICBhcHBlYXIsXG4gIGVudGVyLFxuICBleGl0LFxuICBpbm5lclJlZixcbiAgZW1vdGlvbixcbiAgLi4ucHJvcHNcbn06IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxpbnB1dFxuICAgICAgcmVmPXtpbm5lclJlZn1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */")
  }));
}

var cancelScroll = function cancelScroll(event) {
  event.preventDefault();
  event.stopPropagation();
};

function useScrollCapture(_ref) {
  var isEnabled = _ref.isEnabled,
      onBottomArrive = _ref.onBottomArrive,
      onBottomLeave = _ref.onBottomLeave,
      onTopArrive = _ref.onTopArrive,
      onTopLeave = _ref.onTopLeave;
  var isBottom = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(false);
  var isTop = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(false);
  var touchStart = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(0);
  var scrollTarget = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var handleEventDelta = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (event, delta) {
    // Reference should never be `null` at this point, but flow complains otherwise
    if (scrollTarget.current === null) return;
    var _scrollTarget$current = scrollTarget.current,
        scrollTop = _scrollTarget$current.scrollTop,
        scrollHeight = _scrollTarget$current.scrollHeight,
        clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false; // reset bottom/top flags

    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave) onBottomLeave(event);
      isBottom.current = false;
    }

    if (isDeltaPositive && isTop.current) {
      if (onTopLeave) onTopLeave(event);
      isTop.current = false;
    } // bottom limit


    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }

      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true; // top limit
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }

      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    } // cancel scroll


    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, []);
  var onWheel = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (event) {
    // set touch start so we can calculate touchmove delta
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (el) {
    // bail early if no element is available to attach to
    if (!el) return;
    var notPassive = _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["s"] ? {
      passive: false
    } : false; // all the if statements are to appease Flow 😢

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('wheel', onWheel, notPassive);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchstart', onTouchStart, notPassive);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchmove', onTouchMove, notPassive);
    }
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (el) {
    // bail early if no element is available to detach from
    if (!el) return; // all the if statements are to appease Flow 😢

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('wheel', onWheel, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchstart', onTouchStart, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchmove', onTouchMove, false);
    }
  }, [onTouchMove, onTouchStart, onWheel]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    startListening(element);
    return function () {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function (element) {
    scrollTarget.current = element;
  };
}

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}

function allowTouchMove(e) {
  e.stopPropagation();
}

function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface


function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref) {
  var isEnabled = _ref.isEnabled,
      _ref$accountForScroll = _ref.accountForScrollbars,
      accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])({});
  var scrollTarget = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var addScrollLock = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;

    if (accountForScrollbars) {
      // store any styles already applied to the body
      STYLE_KEYS.forEach(function (key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    } // apply the lock styles and padding if this is the first scroll lock


    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function (key) {
        var val = LOCK_STYLES[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });

      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    } // account for touch devices


    if (target && isTouchDevice()) {
      // Mobile Safari ignores { overflow: hidden } declaration on the body.
      target.addEventListener('touchmove', preventTouchMove, listenerOptions); // Allow scroll on provided target

      if (touchScrollTarget) {
        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    } // increment active scroll locks


    activeScrollLocks += 1;
  }, []);
  var removeScrollLock = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style; // safely decrement active scroll locks

    activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function (key) {
        var val = originalStyles.current[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    } // remove touch listeners


    if (target && isTouchDevice()) {
      target.removeEventListener('touchmove', preventTouchMove, listenerOptions);

      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function () {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function (element) {
    scrollTarget.current = element;
  };
}

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var blurSelectInput = function blurSelectInput() {
  return document.activeElement && document.activeElement.blur();
};

var _ref2 =  false ? undefined : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RVIiwiZmlsZSI6IlNjcm9sbE1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdHlwZSBFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVNjcm9sbENhcHR1cmUgZnJvbSAnLi91c2VTY3JvbGxDYXB0dXJlJztcbmltcG9ydCB1c2VTY3JvbGxMb2NrIGZyb20gJy4vdXNlU2Nyb2xsTG9jayc7XG5cbnR5cGUgUmVmQ2FsbGJhY2s8VD4gPSAoVCB8IG51bGwpID0+IHZvaWQ7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiAoUmVmQ2FsbGJhY2s8SFRNTEVsZW1lbnQ+KSA9PiBFbGVtZW50PCo+LFxuICBsb2NrRW5hYmxlZDogYm9vbGVhbixcbiAgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW4sXG4gIG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MRWxlbWVudD4pID0+IHZvaWQsXG4gIG9uQm90dG9tTGVhdmU/OiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PikgPT4gdm9pZCxcbiAgb25Ub3BBcnJpdmU/OiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PikgPT4gdm9pZCxcbiAgb25Ub3BMZWF2ZT86IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB2b2lkLFxufTtcblxuY29uc3QgYmx1clNlbGVjdElucHV0ID0gKCkgPT5cbiAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Nyb2xsTWFuYWdlcih7XG4gIGNoaWxkcmVuLFxuICBsb2NrRW5hYmxlZCxcbiAgY2FwdHVyZUVuYWJsZWQgPSB0cnVlLFxuICBvbkJvdHRvbUFycml2ZSxcbiAgb25Cb3R0b21MZWF2ZSxcbiAgb25Ub3BBcnJpdmUsXG4gIG9uVG9wTGVhdmUsXG59OiBQcm9wcykge1xuICBjb25zdCBzZXRTY3JvbGxDYXB0dXJlVGFyZ2V0ID0gdXNlU2Nyb2xsQ2FwdHVyZSh7XG4gICAgaXNFbmFibGVkOiBjYXB0dXJlRW5hYmxlZCxcbiAgICBvbkJvdHRvbUFycml2ZSxcbiAgICBvbkJvdHRvbUxlYXZlLFxuICAgIG9uVG9wQXJyaXZlLFxuICAgIG9uVG9wTGVhdmUsXG4gIH0pO1xuICBjb25zdCBzZXRTY3JvbGxMb2NrVGFyZ2V0ID0gdXNlU2Nyb2xsTG9jayh7IGlzRW5hYmxlZDogbG9ja0VuYWJsZWQgfSk7XG5cbiAgY29uc3QgdGFyZ2V0UmVmID0gZWxlbWVudCA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

function ScrollManager(_ref) {
  var children = _ref.children,
      lockEnabled = _ref.lockEnabled,
      _ref$captureEnabled = _ref.captureEnabled,
      captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled,
      onBottomArrive = _ref.onBottomArrive,
      onBottomLeave = _ref.onBottomLeave,
      onTopArrive = _ref.onTopArrive,
      onTopLeave = _ref.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive: onBottomArrive,
    onBottomLeave: onBottomLeave,
    onTopArrive: onTopArrive,
    onTopLeave: onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });

  var targetRef = function targetRef(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, lockEnabled && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    onClick: blurSelectInput,
    css: _ref2
  }), children(targetRef));
}

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

var defaultStyles = {
  clearIndicator: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["b"],
  container: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["d"],
  control: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["e"],
  dropdownIndicator: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["f"],
  group: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["g"],
  groupHeading: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["h"],
  indicatorsContainer: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["i"],
  indicatorSeparator: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["j"],
  input: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["k"],
  loadingIndicator: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["l"],
  loadingMessage: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["m"],
  menu: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["n"],
  menuList: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["o"],
  menuPortal: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["p"],
  multiValue: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["q"],
  multiValueLabel: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["r"],
  multiValueRemove: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["t"],
  noOptionsMessage: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["u"],
  option: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["v"],
  placeholder: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["w"],
  singleValue: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["x"],
  valueContainer: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["y"]
}; // Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // initialize with source styles
  var styles = Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, source); // massage in target styles


  Object.keys(target).forEach(function (key) {
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4; // Used to calculate consistent margin/padding on elements

var baseUnit = 4; // The minimum height of the control

var controlHeight = 38; // The amount of space between the control and menu */

var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

var defaultProps = {
  'aria-live': 'polite',
  backspaceRemovesValue: true,
  blurInputOnSelect: Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["z"])(),
  captureMenuScroll: !Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["z"])(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["A"])(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};

function toCategorizedOption(props, option, selectValue, index) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);

  var isSelected = _isOptionSelected(props, option, selectValue);

  var label = getOptionLabel$1(props, option);
  var value = getOptionValue$1(props, option);
  return {
    type: 'option',
    data: option,
    isDisabled: isDisabled,
    isSelected: isSelected,
    label: label,
    value: value,
    index: index
  };
}

function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function (groupOrOption, groupOrOptionIndex) {
    if (groupOrOption.options) {
      var categorizedOptions = groupOrOption.options.map(function (option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function (categorizedOption) {
        return isFocusable(props, categorizedOption);
      });
      return categorizedOptions.length > 0 ? {
        type: 'group',
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : undefined;
    }

    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : undefined;
  }) // Flow limitation (see https://github.com/facebook/flow/issues/1414)
  .filter(function (categorizedOption) {
    return !!categorizedOption;
  });
}

function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === 'group') {
      optionsAccumulator.push.apply(optionsAccumulator, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(categorizedOption.options.map(function (option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }

    return optionsAccumulator;
  }, []);
}

function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}

function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue,
      inputValue = _props$inputValue === void 0 ? '' : _props$inputValue;
  var data = categorizedOption.data,
      isSelected = categorizedOption.isSelected,
      label = categorizedOption.label,
      value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label: label,
    value: value,
    data: data
  }, inputValue);
}

function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue,
      lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

    if (nextFocusedIndex > -1) {
      // the focused value is still in the selectValue, return it
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      // the focusedValue is not present in the next selectValue array by
      // reference, so return the new value at the same index
      return nextSelectValue[lastFocusedIndex];
    }
  }

  return null;
}

function getNextFocusedOption(state, options) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
}

var getOptionLabel$1 = function getOptionLabel(props, data) {
  return props.getOptionLabel(data);
};

var getOptionValue$1 = function getOptionValue(props, data) {
  return props.getOptionValue(data);
};

function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === 'function' ? props.isOptionDisabled(option, selectValue) : false;
}

function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1) return true;

  if (typeof props.isOptionSelected === 'function') {
    return props.isOptionSelected(option, selectValue);
  }

  var candidate = getOptionValue$1(props, option);
  return selectValue.some(function (i) {
    return getOptionValue$1(props, i) === candidate;
  });
}

function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}

var shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
  var hideSelectedOptions = props.hideSelectedOptions,
      isMulti = props.isMulti;
  if (hideSelectedOptions === undefined) return isMulti;
  return hideSelectedOptions;
};

var instanceId = 1;

var Select = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Select, _Component);

  var _super = Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["_"])(Select);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Select);

    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      inputIsHiddenAfterUpdate: undefined,
      prevProps: undefined
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.instancePrefix = '';
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;

    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };

    _this.focusedOptionRef = null;

    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };

    _this.menuListRef = null;

    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };

    _this.inputRef = null;

    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };

    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;

    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      actionMeta.name = name;

      _this.ariaOnChange(newValue, actionMeta);

      onChange(newValue, actionMeta);
    };

    _this.setValue = function (newValue) {
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set-value';
      var option = arguments.length > 2 ? arguments[2] : undefined;
      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.setState({
        clearFocusValueOnUpdate: true
      });

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };

    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti,
          name = _this$props3.name;
      var selectValue = _this.state.selectValue;

      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);

      var isDisabled = _this.isOptionDisabled(newValue, selectValue);

      if (deselected) {
        var candidate = _this.getOptionValue(newValue);

        _this.setValue(selectValue.filter(function (i) {
          return _this.getOptionValue(i) !== candidate;
        }), 'deselect-option', newValue);
      } else if (!isDisabled) {
        // Select option if option is not disabled
        if (isMulti) {
          _this.setValue([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(selectValue), [newValue]), 'select-option', newValue);
        } else {
          _this.setValue(newValue, 'select-option');
        }
      } else {
        _this.ariaOnChange(newValue, {
          action: 'select-option',
          name: name
        });

        return;
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };

    _this.removeValue = function (removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      var newValueArray = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });
      var newValue = isMulti ? newValueArray : newValueArray[0] || null;

      _this.onChange(newValue, {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.focusInput();
    };

    _this.clearValue = function () {
      var selectValue = _this.state.selectValue;

      _this.onChange(_this.props.isMulti ? [] : null, {
        action: 'clear',
        removedValues: selectValue
      });
    };

    _this.popValue = function () {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = isMulti ? newValueArray : newValueArray[0] || null;

      _this.onChange(newValue, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    };

    _this.getValue = function () {
      return _this.state.selectValue;
    };

    _this.cx = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["B"].apply(void 0, [_this.props.classNamePrefix].concat(args));
    };

    _this.getOptionLabel = function (data) {
      return getOptionLabel$1(_this.props, data);
    };

    _this.getOptionValue = function (data) {
      return getOptionValue$1(_this.props, data);
    };

    _this.getStyles = function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };

    _this.getElementId = function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    };

    _this.getComponents = function () {
      return Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["C"])(_this.props);
    };

    _this.buildCategorizedOptions = function () {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };

    _this.getCategorizedOptions = function () {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };

    _this.buildFocusableOptions = function () {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };

    _this.getFocusableOptions = function () {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };

    _this.ariaOnChange = function (value, actionMeta) {
      _this.setState({
        ariaSelection: Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])({
          value: value
        }, actionMeta)
      });
    };

    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    };

    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };

    _this.onControlMouseDown = function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if ( // $FlowFixMe
        event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }

      if ( // $FlowFixMe
      event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };

    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    };

    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;

      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };

    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["D"])(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };

    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };

    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };

    _this.onTouchStart = function (_ref2) {
      var touches = _ref2.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };

    _this.onTouchMove = function (_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };

    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };

    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    };

    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    };

    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    };

    _this.handleInputChange = function (event) {
      var inputValue = event.currentTarget.value;

      _this.setState({
        inputIsHiddenAfterUpdate: false
      });

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };

    _this.onInputFocus = function (event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    };

    _this.onInputBlur = function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };

    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    };

    _this.shouldHideSelectedOptions = function () {
      return shouldHideSelectedOptions(_this.props);
    };

    _this.onKeyDown = function (event) {
      var _this$props5 = _this.props,
          isMulti = _this$props5.isMulti,
          backspaceRemovesValue = _this$props5.backspaceRemovesValue,
          escapeClearsValue = _this$props5.escapeClearsValue,
          inputValue = _this$props5.inputValue,
          isClearable = _this$props5.isClearable,
          isDisabled = _this$props5.isDisabled,
          menuIsOpen = _this$props5.menuIsOpen,
          onKeyDown = _this$props5.onKeyDown,
          tabSelectsValue = _this$props5.tabSelectsValue,
          openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state,
          focusedOption = _this$state.focusedOption,
          focusedValue = _this$state.focusedValue,
          selectValue = _this$state.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    };

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["E"])(_props.value);
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props,
          isDisabled = _this$props6.isDisabled,
          menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;

      if ( // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }

      if (isFocused && isDisabled && !prevProps.isDisabled) {
        // ensure select state gets blurred in case Select is programatically disabled while focused
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } // scroll the focused option into view if necessary


      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["F"])(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    } // ==============================
    // Consumer Handlers
    // ==============================

  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange('', {
        action: 'menu-close'
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    } // ==============================
    // Methods
    // ==============================

  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    } // aliased for consumers

  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;

      var _this$state2 = this.state,
          selectValue = _this$state2.selectValue,
          isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === 'first' ? 0 : focusableOptions.length - 1;

      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);

        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      } // only scroll if the menu isn't already open


      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex]
      }, function () {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state,
          selectValue = _this$state3.selectValue,
          focusedValue = _this$state3.focusedValue; // Only multiselects support value focusing

      if (!this.props.isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);

      if (!focusedValue) {
        focusedIndex = -1;
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }

          break;

        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }

          break;
      }

      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options = this.getFocusableOptions();
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'

      var focusedIndex = options.indexOf(focusedOption);

      if (!focusedOption) {
        focusedIndex = -1;
      }

      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
    }
  }, {
    key: "getTheme",
    value: // ==============================
    // Getters
    // ==============================
    function getTheme() {
      // Use the default theme if there are no customizations.
      if (!this.props.theme) {
        return defaultTheme;
      } // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.


      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      } // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.


      return Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, defaultTheme), this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
          cx = this.cx,
          getStyles = this.getStyles,
          getValue = this.getValue,
          selectOption = this.selectOption,
          setValue = this.setValue,
          props = this.props;
      var isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue: clearValue,
        cx: cx,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        selectProps: props,
        setValue: setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props,
          isClearable = _this$props7.isClearable,
          isMulti = _this$props7.isMulti; // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var inputValue = this.props.inputValue;
        var selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: inputValue,
          selectValue: selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel(data) {
      return this.props.formatGroupLabel(data);
    } // ==============================
    // Mouse Handlers
    // ==============================

  }, {
    key: "startListeningComposition",
    value: // ==============================
    // Composition Handlers
    // ==============================
    function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value: // ==============================
    // Touch Handlers
    // ==============================
    function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value: // ==============================
    // Renderers
    // ==============================
    function renderInput() {
      var _this$props8 = this.props,
          isDisabled = _this$props8.isDisabled,
          isSearchable = _this$props8.isSearchable,
          inputId = _this$props8.inputId,
          inputValue = _this$props8.inputValue,
          tabIndex = _this$props8.tabIndex,
          form = _this$props8.form;

      var _this$getComponents = this.getComponents(),
          Input = _this$getComponents.Input;

      var inputIsHidden = this.state.inputIsHidden;
      var commonProps = this.commonProps;
      var id = inputId || this.getElementId('input'); // aria attributes makes the JSX "noisy", separated for clarity

      var ariaAttributes = {
        'aria-autocomplete': 'list',
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby']
      };

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DummyInput, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["G"],
          onFocus: this.onInputFocus,
          readOnly: true,
          disabled: isDisabled,
          tabIndex: tabIndex,
          form: form,
          value: ""
        }, ariaAttributes));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Input, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        spellCheck: "false",
        tabIndex: tabIndex,
        form: form,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;

      var _this$getComponents2 = this.getComponents(),
          MultiValue = _this$getComponents2.MultiValue,
          MultiValueContainer = _this$getComponents2.MultiValueContainer,
          MultiValueLabel = _this$getComponents2.MultiValueLabel,
          MultiValueRemove = _this$getComponents2.MultiValueRemove,
          SingleValue = _this$getComponents2.SingleValue,
          Placeholder = _this$getComponents2.Placeholder;

      var commonProps = this.commonProps;
      var _this$props9 = this.props,
          controlShouldRenderValue = _this$props9.controlShouldRenderValue,
          isDisabled = _this$props9.isDisabled,
          isMulti = _this$props9.isMulti,
          inputValue = _this$props9.inputValue,
          placeholder = _this$props9.placeholder;
      var _this$state4 = this.state,
          selectValue = _this$state4.selectValue,
          focusedValue = _this$state4.focusedValue,
          isFocused = _this$state4.isFocused;

      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Placeholder, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused
        }), placeholder);
      }

      if (isMulti) {
        var selectValues = selectValue.map(function (opt, index) {
          var isOptionFocused = opt === focusedValue;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MultiValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: "".concat(_this3.getOptionValue(opt)).concat(index),
            index: index,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, 'value'));
        });
        return selectValues;
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SingleValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(),
          ClearIndicator = _this$getComponents3.ClearIndicator;

      var commonProps = this.commonProps;
      var _this$props10 = this.props,
          isDisabled = _this$props10.isDisabled,
          isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;

      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ClearIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(),
          LoadingIndicator = _this$getComponents4.LoadingIndicator;

      var commonProps = this.commonProps;
      var _this$props11 = this.props,
          isDisabled = _this$props11.isDisabled,
          isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(LoadingIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(),
          DropdownIndicator = _this$getComponents5.DropdownIndicator,
          IndicatorSeparator = _this$getComponents5.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator


      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IndicatorSeparator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(),
          DropdownIndicator = _this$getComponents6.DropdownIndicator;

      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DropdownIndicator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;

      var _this$getComponents7 = this.getComponents(),
          Group = _this$getComponents7.Group,
          GroupHeading = _this$getComponents7.GroupHeading,
          Menu = _this$getComponents7.Menu,
          MenuList = _this$getComponents7.MenuList,
          MenuPortal = _this$getComponents7.MenuPortal,
          LoadingMessage = _this$getComponents7.LoadingMessage,
          NoOptionsMessage = _this$getComponents7.NoOptionsMessage,
          Option = _this$getComponents7.Option;

      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props,
          captureMenuScroll = _this$props12.captureMenuScroll,
          inputValue = _this$props12.inputValue,
          isLoading = _this$props12.isLoading,
          loadingMessage = _this$props12.loadingMessage,
          minMenuHeight = _this$props12.minMenuHeight,
          maxMenuHeight = _this$props12.maxMenuHeight,
          menuIsOpen = _this$props12.menuIsOpen,
          menuPlacement = _this$props12.menuPlacement,
          menuPosition = _this$props12.menuPosition,
          menuPortalTarget = _this$props12.menuPortalTarget,
          menuShouldBlockScroll = _this$props12.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView,
          noOptionsMessage = _this$props12.noOptionsMessage,
          onMenuScrollToTop = _this$props12.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen) return null; // TODO: Internal Option Type here

      var render = function render(props, id) {
        var type = props.type,
            data = props.data,
            isDisabled = props.isDisabled,
            isSelected = props.isSelected,
            label = props.label,
            value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? undefined : function () {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId('option'), "-").concat(id);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1
        };
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Option, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
          innerProps: innerProps,
          data: data,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: type,
          value: value,
          isFocused: isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : undefined
        }), _this4.formatOptionLabel(props.data, 'menu'));
      };

      var menuUI;

      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function (item) {
          if (item.type === 'group') {
            var data = item.data,
                options = item.options,
                groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId('group'), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Group, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
              key: groupId,
              data: data,
              options: options,
              Heading: GroupHeading,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === 'option') {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(LoadingMessage, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });

        if (_message === null) return null;
        menuUI = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NoOptionsMessage, commonProps, _message);
      }

      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["M"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, menuPlacementProps), function (_ref4) {
        var ref = _ref4.ref,
            _ref4$placerProps = _ref4.placerProps,
            placement = _ref4$placerProps.placement,
            maxHeight = _ref4$placerProps.maxHeight;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Menu, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove
          },
          isLoading: isLoading,
          placement: placement
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function (scrollTargetRef) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MenuList, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);

              scrollTargetRef(instance);
            },
            isLoading: isLoading,
            maxHeight: maxHeight,
            focusedOption: focusedOption
          }), menuUI);
        }));
      }); // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`

      return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MenuPortal, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;

      var _this$props13 = this.props,
          delimiter = _this$props13.delimiter,
          isDisabled = _this$props13.isDisabled,
          isMulti = _this$props13.isMulti,
          name = _this$props13.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
            name: name,
            type: "hidden"
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
          name: name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state5 = this.state,
          ariaSelection = _this$state5.ariaSelection,
          focusedOption = _this$state5.focusedOption,
          focusedValue = _this$state5.focusedValue,
          isFocused = _this$state5.isFocused,
          selectValue = _this$state5.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(LiveRegion, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        ariaSelection: ariaSelection,
        focusedOption: focusedOption,
        focusedValue: focusedValue,
        isFocused: isFocused,
        selectValue: selectValue,
        focusableOptions: focusableOptions
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(),
          Control = _this$getComponents8.Control,
          IndicatorsContainer = _this$getComponents8.IndicatorsContainer,
          SelectContainer = _this$getComponents8.SelectContainer,
          ValueContainer = _this$getComponents8.ValueContainer;

      var _this$props14 = this.props,
          className = _this$props14.className,
          id = _this$props14.id,
          isDisabled = _this$props14.isDisabled,
          menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SelectContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Control, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ValueContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IndicatorsContainer, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps,
          clearFocusValueOnUpdate = state.clearFocusValueOnUpdate,
          inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate;
      var options = props.options,
          value = props.value,
          menuIsOpen = props.menuIsOpen,
          inputValue = props.inputValue;
      var newMenuOptionsState = {};

      if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var selectValue = Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["E"])(value);
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        newMenuOptionsState = {
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue,
          clearFocusValueOnUpdate: false
        };
      } // some updates should toggle the state of the input visibility


      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: undefined
      } : {};
      return Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props
      });
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Select.defaultProps = defaultProps;




/***/ }),

/***/ "./node_modules/react-select/dist/index-4bd03571.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-select/dist/index-4bd03571.esm.js ***!
  \**************************************************************/
/*! exports provided: A, B, C, D, E, F, G, H, M, _, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return isMobileDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return classNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return defaultComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return isDocumentElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return cleanValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return scrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return handleInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MenuPlacer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _createSuper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clearIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return containerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return dropdownIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return groupCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return groupHeadingCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return indicatorsContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return indicatorSeparatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return inputCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return loadingIndicatorCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return loadingMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return menuCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return menuListCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return menuPortalCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return multiValueCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return multiValueLabelCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return supportsPassiveEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return multiValueRemoveCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return noOptionsMessageCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return optionCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return placeholderCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return css$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return valueContainerCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return isTouchCapable; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);













function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, state, className) {
  var arr = [className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__["default"])(value) === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Clean Common Props
// ==============================

var cleanCommonProps = function cleanCommonProps(props) {
  //className
  props.className;
      props.clearValue;
      props.cx;
      props.getStyles;
      props.getValue;
      props.hasValue;
      props.isMulti;
      props.isRtl;
      props.options;
      props.selectOption;
      props.selectProps;
      props.setValue;
      props.theme;
      var innerProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["className", "clearValue", "cx", "getStyles", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"]);

  return _objectSpread2({}, innerProps);
}; // ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }

  return inputValue;
} // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
} // ==============================
// Passive Event Detector
// ==============================
// https://github.com/rafgraph/detect-it/blob/main/src/index.ts#L19-L36

var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }

}; // check for SSR

var w = typeof window !== 'undefined' ? window : {};

if (w.addEventListener && w.removeEventListener) {
  w.addEventListener('p', noop, options);
  w.removeEventListener('p', noop, false);
}

var supportsPassiveEvents = passiveOptionAccessed;

function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"".concat(placement, "\"."));
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, alignToControl(placement), '100%'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "backgroundColor", colors.neutral0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "borderRadius", borderRadius), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "boxShadow", '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "marginBottom", spacing.menuGutter), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "marginTop", spacing.menuGutter), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "position", 'absolute'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "width", '100%'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_ref3, "zIndex", 1), _ref3;
};
var PortalPlacementContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_10__["createContext"])({
  getPortalPlacement: null
}); // NOTE: internal only

var MenuPlacer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(MenuPlacer, _Component);

  var _super = _createSuper(MenuPlacer);

  function MenuPlacer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MenuPlacer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    };

    _this.getPlacement = function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    };

    _this.getUpdatedProps = function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _objectSpread2(_objectSpread2({}, _this.props), {}, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MenuPlacer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);

  return MenuPlacer;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);
MenuPlacer.contextType = PortalPlacementContext;

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('menu', props),
    className: cx({
      menu: true
    }, className),
    ref: innerRef
  }, innerProps), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      innerRef = props.innerRef,
      isMulti = props.isMulti;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('menuList', props),
    className: cx({
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, innerProps), children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px"),
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('noOptionsMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('loadingMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = /*#__PURE__*/function (_Component2) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(MenuPortal, _Component2);

  var _super2 = _createSuper(MenuPortal);

  function MenuPortal() {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MenuPortal);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _this2.state = {
      placement: null
    };

    _this2.getPortalPlacement = function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    };

    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(MenuPortal, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          appendTo = _this$props2.appendTo,
          children = _this$props2.children,
          className = _this$props2.className,
          controlElement = _this$props2.controlElement,
          cx = _this$props2.cx,
          innerProps = _this$props2.innerProps,
          menuPlacement = _this$props2.menuPlacement,
          position = _this$props2.menuPosition,
          getStyles = _this$props2.getStyles;
      var isFixed = position === 'fixed'; // bail early if required elements aren't present

      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset: offset,
        position: position,
        rect: rect
      }; // same wrapper element whether fixed or portalled

      var menuWrapper = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        css: getStyles('menuPortal', state),
        className: cx({
          'menu-portal': true
        }, className)
      }, innerProps), children);
      return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(PortalPlacementContext.Provider, {
        value: {
          getPortalPlacement: this.getPortalPlacement
        }
      }, appendTo ? /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_11__["createPortal"])(menuWrapper, appendTo) : menuWrapper);
    }
  }]);

  return MenuPortal;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('container', props),
    className: cx({
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px"),
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer = function ValueContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      innerProps = props.innerProps,
      isMulti = props.isMulti,
      getStyles = props.getStyles,
      hasValue = props.hasValue;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('valueContainer', props),
    className: cx({
      'value-container': true,
      'value-container--is-multi': isMulti,
      'value-container--has-value': hasValue
    }, className)
  }, innerProps), children);
}; // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      innerProps = props.innerProps,
      getStyles = props.getStyles;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('indicatorsContainer', props),
    className: cx({
      indicators: true
    }, className)
  }, innerProps), children);
};

var _templateObject;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref2 =  false ? undefined : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHR5cGUgeyBDb21tb25Qcm9wcywgVGhlbWUgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBJY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IFN2ZyA9ICh7IHNpemUsIC4uLnByb3BzIH06IHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk0xNC4zNDggMTQuODQ5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwbC0yLjY1MS0zLjAzMC0yLjY1MSAzLjAyOWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMC0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOSAwLTEuNjk3bDIuNzU4LTMuMTUtMi43NTktMy4xNTJjLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI4IDAtMS42OTdzMS4yMjgtMC40NjkgMS42OTcgMGwyLjY1MiAzLjAzMSAyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSAxLjIyOC0wLjQ2OSAxLjY5NyAwczAuNDY5IDEuMjI5IDAgMS42OTdsLTIuNzU4IDMuMTUyIDIuNzU4IDMuMTVjMC40NjkgMC40NjkgMC40NjkgMS4yMjkgMCAxLjY5OHpcIiAvPlxuICA8L1N2Zz5cbik7XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIEluZGljYXRvclByb3BzID0gQ29tbW9uUHJvcHMgJiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuOiBOb2RlLFxuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn07XG5cbmNvbnN0IGJhc2VDU1MgPSAoe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06IEluZGljYXRvclByb3BzKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG5cbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnY2xlYXJJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBTZXBhcmF0b3JTdGF0ZSA9IHsgaXNEaXNhYmxlZDogYm9vbGVhbiB9O1xuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gKHtcbiAgaXNEaXNhYmxlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogQ29tbW9uUHJvcHMgJiBTZXBhcmF0b3JTdGF0ZSkgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgd2lkdGg6IDEsXG59KTtcblxuZXhwb3J0IGNvbnN0IEluZGljYXRvclNlcGFyYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdpbmRpY2F0b3JTZXBhcmF0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KHsgJ2luZGljYXRvci1zZXBhcmF0b3InOiB0cnVlIH0sIGNsYXNzTmFtZSl9XG4gICAgLz5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9hZGluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IGxvYWRpbmdEb3RBbmltYXRpb25zID0ga2V5ZnJhbWVzYFxuICAwJSwgODAlLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxuICA0MCUgeyBvcGFjaXR5OiAxOyB9XG5gO1xuXG5leHBvcnQgY29uc3QgbG9hZGluZ0luZGljYXRvckNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgc2l6ZSxcbiAgdGhlbWU6IHtcbiAgICBjb2xvcnMsXG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICB9LFxufToge1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW4sXG4gIHNpemU6IG51bWJlcixcbiAgdGhlbWU6IFRoZW1lLFxufSkgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG50eXBlIERvdFByb3BzID0geyBkZWxheTogbnVtYmVyLCBvZmZzZXQ6IGJvb2xlYW4gfTtcbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IERvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiBudWxsLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgdHlwZSBMb2FkaW5nSWNvblByb3BzID0ge1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn0gJiBDb21tb25Qcm9wcyAmIHtcbiAgICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgICBzaXplOiBudW1iZXIsXG4gIH07XG5leHBvcnQgY29uc3QgTG9hZGluZ0luZGljYXRvciA9IChwcm9wczogTG9hZGluZ0ljb25Qcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2xvYWRpbmdJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["size"]);

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Svg, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    size: 20
  }, props), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Svg, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    size: 20
  }, props), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref3) {
  var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('dropdownIndicator', props),
    className: cx({
      indicator: true,
      'dropdown-indicator': true
    }, className)
  }, innerProps), children || Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('clearIndicator', props),
    className: cx({
      indicator: true,
      'clear-indicator': true
    }, className)
  }, innerProps), children || Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
  var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerProps, {
    css: getStyles('indicatorSeparator', props),
    className: cx({
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var loadingDotAnimations = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
  var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
      offset = _ref6.offset;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    css: /*#__PURE__*/Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["css"])({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  false ? undefined : ";label:LoadingDot;",  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0xJIiwiZmlsZSI6ImluZGljYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHR5cGUgeyBDb21tb25Qcm9wcywgVGhlbWUgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBJY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IFN2ZyA9ICh7IHNpemUsIC4uLnByb3BzIH06IHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxTdmcgc2l6ZT17MjB9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk0xNC4zNDggMTQuODQ5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwbC0yLjY1MS0zLjAzMC0yLjY1MSAzLjAyOWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMC0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOSAwLTEuNjk3bDIuNzU4LTMuMTUtMi43NTktMy4xNTJjLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI4IDAtMS42OTdzMS4yMjgtMC40NjkgMS42OTcgMGwyLjY1MiAzLjAzMSAyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSAxLjIyOC0wLjQ2OSAxLjY5NyAwczAuNDY5IDEuMjI5IDAgMS42OTdsLTIuNzU4IDMuMTUyIDIuNzU4IDMuMTVjMC40NjkgMC40NjkgMC40NjkgMS4yMjkgMCAxLjY5OHpcIiAvPlxuICA8L1N2Zz5cbik7XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIEluZGljYXRvclByb3BzID0gQ29tbW9uUHJvcHMgJiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuOiBOb2RlLFxuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn07XG5cbmNvbnN0IGJhc2VDU1MgPSAoe1xuICBpc0ZvY3VzZWQsXG4gIHRoZW1lOiB7XG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIGNvbG9ycyxcbiAgfSxcbn06IEluZGljYXRvclByb3BzKSA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG5cbiAgJzpob3Zlcic6IHtcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnZHJvcGRvd25JbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBjeCwgZ2V0U3R5bGVzLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e2dldFN0eWxlcygnY2xlYXJJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBTZXBhcmF0b3JTdGF0ZSA9IHsgaXNEaXNhYmxlZDogYm9vbGVhbiB9O1xuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gKHtcbiAgaXNEaXNhYmxlZCxcbiAgdGhlbWU6IHtcbiAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgY29sb3JzLFxuICB9LFxufTogQ29tbW9uUHJvcHMgJiBTZXBhcmF0b3JTdGF0ZSkgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgd2lkdGg6IDEsXG59KTtcblxuZXhwb3J0IGNvbnN0IEluZGljYXRvclNlcGFyYXRvciA9IChwcm9wczogSW5kaWNhdG9yUHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGN4LCBnZXRTdHlsZXMsIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIGNzcz17Z2V0U3R5bGVzKCdpbmRpY2F0b3JTZXBhcmF0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KHsgJ2luZGljYXRvci1zZXBhcmF0b3InOiB0cnVlIH0sIGNsYXNzTmFtZSl9XG4gICAgLz5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9hZGluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IGxvYWRpbmdEb3RBbmltYXRpb25zID0ga2V5ZnJhbWVzYFxuICAwJSwgODAlLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxuICA0MCUgeyBvcGFjaXR5OiAxOyB9XG5gO1xuXG5leHBvcnQgY29uc3QgbG9hZGluZ0luZGljYXRvckNTUyA9ICh7XG4gIGlzRm9jdXNlZCxcbiAgc2l6ZSxcbiAgdGhlbWU6IHtcbiAgICBjb2xvcnMsXG4gICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICB9LFxufToge1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW4sXG4gIHNpemU6IG51bWJlcixcbiAgdGhlbWU6IFRoZW1lLFxufSkgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgZm9udFNpemU6IHNpemUsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG1hcmdpblJpZ2h0OiBzaXplLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbn0pO1xuXG50eXBlIERvdFByb3BzID0geyBkZWxheTogbnVtYmVyLCBvZmZzZXQ6IGJvb2xlYW4gfTtcbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IERvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiBudWxsLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgdHlwZSBMb2FkaW5nSWNvblByb3BzID0ge1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IGFueSxcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbixcbiAgLyoqIFdoZXRoZXIgdGhlIHRleHQgaXMgcmlnaHQgdG8gbGVmdCAqL1xuICBpc1J0bDogYm9vbGVhbixcbn0gJiBDb21tb25Qcm9wcyAmIHtcbiAgICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgICBzaXplOiBudW1iZXIsXG4gIH07XG5leHBvcnQgY29uc3QgTG9hZGluZ0luZGljYXRvciA9IChwcm9wczogTG9hZGluZ0ljb25Qcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY3gsIGdldFN0eWxlcywgaW5uZXJQcm9wcywgaXNSdGwgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtnZXRTdHlsZXMoJ2xvYWRpbmdJbmRpY2F0b3InLCBwcm9wcyl9XG4gICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Mb2FkaW5nSW5kaWNhdG9yLmRlZmF1bHRQcm9wcyA9IHsgc2l6ZTogNCB9O1xuIl19 */")
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isRtl = props.isRtl;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('loadingIndicator', props),
    className: cx({
      indicator: true,
      'loading-indicator': true
    }, className)
  }, innerProps), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(LoadingDot, {
    delay: 160,
    offset: true
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

var css = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: innerRef,
    css: getStyles('control', props),
    className: cx({
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      innerProps = props.innerProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('group', props),
    className: cx({
      group: true
    }, className)
  }, innerProps), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Heading, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var getStyles = props.getStyles,
      cx = props.cx,
      className = props.className;

  var _cleanCommonProps = cleanCommonProps(props);
      _cleanCommonProps.data;
      var innerProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_cleanCommonProps, ["data"]);

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('groupHeading', props),
    className: cx({
      'group-heading': true
    }, className)
  }, innerProps));
};

var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    label: 'input',
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input = function Input(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;

  var _cleanCommonProps = cleanCommonProps(props),
      innerRef = _cleanCommonProps.innerRef,
      isDisabled = _cleanCommonProps.isDisabled,
      isHidden = _cleanCommonProps.isHidden,
      innerProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_cleanCommonProps, ["innerRef", "isDisabled", "isHidden"]);

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: getStyles('input', props)
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_input_autosize__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: cx({
      input: true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};

var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children,
      innerProps = _ref5.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", innerProps, children || Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(CrossIcon, {
    size: 14
  }));
}

var MultiValue = function MultiValue(props) {
  var children = props.children,
      className = props.className,
      components = props.components,
      cx = props.cx,
      data = props.data,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps = props.removeProps,
      selectProps = props.selectProps;
  var Container = components.Container,
      Label = components.Label,
      Remove = components.Remove;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["ClassNames"], null, function (_ref6) {
    var css = _ref6.css,
        emotionCx = _ref6.cx;
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Container, {
      data: data,
      innerProps: _objectSpread2({
        className: emotionCx(css(getStyles('multiValue', props)), cx({
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className))
      }, innerProps),
      selectProps: selectProps
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Label, {
      data: data,
      innerProps: {
        className: emotionCx(css(getStyles('multiValueLabel', props)), cx({
          'multi-value__label': true
        }, className))
      },
      selectProps: selectProps
    }, children), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Remove, {
      data: data,
      innerProps: _objectSpread2({
        className: emotionCx(css(getStyles('multiValueRemove', props)), cx({
          'multi-value__remove': true
        }, className))
      }, removeProps),
      selectProps: selectProps
    }));
  });
};

MultiValue.defaultProps = {
  cropWithEllipsis: true
};

var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('option', props),
    className: cx({
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className),
    ref: innerRef
  }, innerProps), children);
};

var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('placeholder', props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};

var css$1 = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - ".concat(spacing.baseUnit * 2, "px)"),
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: getStyles('singleValue', props),
    className: cx({
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _objectSpread2(_objectSpread2({}, components), props.components);
};




/***/ }),

/***/ "./node_modules/react-select/dist/react-select.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/react-select/dist/react-select.esm.js ***!
  \************************************************************/
/*! exports provided: createFilter, defaultTheme, mergeStyles, components, default, NonceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonceProvider", function() { return NonceProvider; });
/* harmony import */ var _Select_dbb12e54_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select-dbb12e54.esm.js */ "./node_modules/react-select/dist/Select-dbb12e54.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilter", function() { return _Select_dbb12e54_esm_js__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return _Select_dbb12e54_esm_js__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _Select_dbb12e54_esm_js__WEBPACK_IMPORTED_MODULE_0__["m"]; });

/* harmony import */ var _stateManager_845a3300_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateManager-845a3300.esm.js */ "./node_modules/react-select/dist/stateManager-845a3300.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-4bd03571.esm.js */ "./node_modules/react-select/dist/index-4bd03571.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_5__["c"]; });

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_17__);





















var NonceProvider = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NonceProvider, _Component);

  var _super = Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_5__["_"])(NonceProvider);

  function NonceProvider(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, NonceProvider);

    _this = _super.call(this, props);

    _this.createEmotionCache = function (nonce, key) {
      return Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_8__["default"])({
        nonce: nonce,
        key: key
      });
    };

    _this.createEmotionCache = Object(memoize_one__WEBPACK_IMPORTED_MODULE_9__["default"])(_this.createEmotionCache);
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(NonceProvider, [{
    key: "render",
    value: function render() {
      var emotionCache = this.createEmotionCache(this.props.nonce, this.props.cacheKey);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["CacheProvider"], {
        value: emotionCache
      }, this.props.children);
    }
  }]);

  return NonceProvider;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var index = Object(_stateManager_845a3300_esm_js__WEBPACK_IMPORTED_MODULE_1__["m"])(_Select_dbb12e54_esm_js__WEBPACK_IMPORTED_MODULE_0__["S"]);

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/react-select/dist/stateManager-845a3300.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-select/dist/stateManager-845a3300.esm.js ***!
  \*********************************************************************/
/*! exports provided: m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return manageState; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-4bd03571.esm.js */ "./node_modules/react-select/dist/index-4bd03571.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var defaultProps = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StateManager, _Component);

    var _super = Object(_index_4bd03571_esm_js__WEBPACK_IMPORTED_MODULE_5__["_"])(StateManager);

    function StateManager() {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, StateManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.select = void 0;
      _this.state = {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      };

      _this.onChange = function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      };

      _this.onInputChange = function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      };

      _this.onMenuOpen = function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      };

      _this.onMenuClose = function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      };

      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(StateManager, [{
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      } // FIXME: untyped flow code, return any

    }, {
      key: "getProp",
      value: function getProp(key) {
        return this.props[key] !== undefined ? this.props[key] : this.state[key];
      } // FIXME: untyped flow code, return any

    }, {
      key: "callProp",
      value: function callProp(name) {
        if (typeof this.props[name] === 'function') {
          var _this$props;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_this$props = this.props)[name].apply(_this$props, args);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props;
            _this$props2.defaultInputValue;
            _this$props2.defaultMenuIsOpen;
            _this$props2.defaultValue;
            var props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SelectComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          inputValue: this.getProp('inputValue'),
          menuIsOpen: this.getProp('menuIsOpen'),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp('value')
        }));
      }
    }]);

    return StateManager;
  }(react__WEBPACK_IMPORTED_MODULE_6__["Component"]), _class.defaultProps = defaultProps, _temp;
};




/***/ }),

/***/ "./node_modules/stylis/dist/stylis.mjs":
/*!*********************************************!*\
  !*** ./node_modules/stylis/dist/stylis.mjs ***!
  \*********************************************/
/*! exports provided: CHARSET, COMMENT, COUNTER_STYLE, DECLARATION, DOCUMENT, FONT_FACE, FONT_FEATURE_VALUES, IMPORT, KEYFRAMES, MEDIA, MOZ, MS, NAMESPACE, PAGE, RULESET, SUPPORTS, VIEWPORT, WEBKIT, abs, alloc, append, caret, char, character, characters, charat, column, combine, comment, commenter, compile, copy, dealloc, declaration, delimit, delimiter, escaping, from, hash, identifier, indexof, length, line, match, middleware, namespace, next, node, parse, peek, position, prefix, prefixer, prev, replace, ruleset, rulesheet, serialize, sizeof, slice, stringify, strlen, substr, token, tokenize, tokenizer, trim, whitespace */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHARSET", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENT", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTER_STYLE", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECLARATION", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_FACE", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_FEATURE_VALUES", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMPORT", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYFRAMES", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOZ", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MS", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAMESPACE", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RULESET", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORTS", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBKIT", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alloc", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caret", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "char", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "character", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "characters", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charat", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "column", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combine", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comment", function() { return te; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commenter", function() { return ee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealloc", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declaration", function() { return se; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delimit", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delimiter", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escaping", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identifier", function() { return re; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexof", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "line", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "middleware", function() { return oe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return he; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "node", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peek", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixer", function() { return ve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prev", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruleset", function() { return ne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rulesheet", function() { return le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return ie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeof", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return fe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strlen", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "substr", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "token", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenizer", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whitespace", function() { return X; });
var e="-ms-";var r="-moz-";var a="-webkit-";var c="comm";var n="rule";var t="decl";var s="@page";var u="@media";var i="@import";var f="@charset";var o="@viewport";var l="@supports";var v="@document";var h="@namespace";var p="@keyframes";var b="@font-face";var w="@counter-style";var $="@font-feature-values";var k=Math.abs;var d=String.fromCharCode;function m(e,r){return(((r<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3)}function g(e){return e.trim()}function x(e,r){return(e=r.exec(e))?e[0]:e}function y(e,r,a){return e.replace(r,a)}function j(e,r){return e.indexOf(r)}function z(e,r){return e.charCodeAt(r)|0}function C(e,r,a){return e.slice(r,a)}function A(e){return e.length}function M(e){return e.length}function O(e,r){return r.push(e),e}function S(e,r){return e.map(r).join("")}var q=1;var B=1;var D=0;var E=0;var F=0;var G="";function H(e,r,a,c,n,t,s){return{value:e,root:r,parent:a,type:c,props:n,children:t,line:q,column:B,length:s,return:""}}function I(e,r,a){return H(e,r.root,r.parent,a,r.props,r.children,0)}function J(){return F}function K(){F=E>0?z(G,--E):0;if(B--,F===10)B=1,q--;return F}function L(){F=E<D?z(G,E++):0;if(B++,F===10)B=1,q++;return F}function N(){return z(G,E)}function P(){return E}function Q(e,r){return C(G,e,r)}function R(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return q=B=1,D=A(G=e),E=0,[]}function U(e){return G="",e}function V(e){return g(Q(E-1,_(e===91?e+2:e===40?e+1:e)))}function W(e){return U(Y(T(e)))}function X(e){while(F=N())if(F<33)L();else break;return R(e)>2||R(F)>3?"":" "}function Y(e){while(L())switch(R(F)){case 0:O(re(E-1),e);break;case 2:O(V(F),e);break;default:O(d(F),e)}return e}function Z(e,r){while(--r&&L())if(F<48||F>102||F>57&&F<65||F>70&&F<97)break;return Q(e,P()+(r<6&&N()==32&&L()==32))}function _(e){while(L())switch(F){case e:return E;case 34:case 39:return _(e===34||e===39?e:F);case 40:if(e===41)_(e);break;case 92:L();break}return E}function ee(e,r){while(L())if(e+F===47+10)break;else if(e+F===42+42&&N()===47)break;return"/*"+Q(r,E-1)+"*"+d(e===47?e:L())}function re(e){while(!R(N()))L();return Q(e,E)}function ae(e){return U(ce("",null,null,null,[""],e=T(e),0,[0],e))}function ce(e,r,a,c,n,t,s,u,i){var f=0;var o=0;var l=s;var v=0;var h=0;var p=0;var b=1;var w=1;var $=1;var k=0;var m="";var g=n;var x=t;var j=c;var z=m;while(w)switch(p=k,k=L()){case 34:case 39:case 91:case 40:z+=V(k);break;case 9:case 10:case 13:case 32:z+=X(p);break;case 92:z+=Z(P()-1,7);continue;case 47:switch(N()){case 42:case 47:O(te(ee(L(),P()),r,a),i);break;default:z+="/"}break;case 123*b:u[f++]=A(z)*$;case 125*b:case 59:case 0:switch(k){case 0:case 125:w=0;case 59+o:if(h>0&&A(z)-l)O(h>32?se(z+";",c,a,l-1):se(y(z," ","")+";",c,a,l-2),i);break;case 59:z+=";";default:O(j=ne(z,r,a,f,o,n,u,m,g=[],x=[],l),t);if(k===123)if(o===0)ce(z,r,j,j,g,t,l,u,x);else switch(v){case 100:case 109:case 115:ce(e,j,j,c&&O(ne(e,j,j,0,0,n,u,m,n,g=[],l),x),n,x,l,u,c?g:x);break;default:ce(z,j,j,j,[""],x,l,u,x)}}f=o=h=0,b=$=1,m=z="",l=s;break;case 58:l=1+A(z),h=p;default:if(b<1)if(k==123)--b;else if(k==125&&b++==0&&K()==125)continue;switch(z+=d(k),k*b){case 38:$=o>0?1:(z+="\f",-1);break;case 44:u[f++]=(A(z)-1)*$,$=1;break;case 64:if(N()===45)z+=V(L());v=N(),o=A(m=z+=re(P())),k++;break;case 45:if(p===45&&A(z)==2)b=0}}return t}function ne(e,r,a,c,t,s,u,i,f,o,l){var v=t-1;var h=t===0?s:[""];var p=M(h);for(var b=0,w=0,$=0;b<c;++b)for(var d=0,m=C(e,v+1,v=k(w=u[b])),x=e;d<p;++d)if(x=g(w>0?h[d]+" "+m:y(m,/&\f/g,h[d])))f[$++]=x;return H(e,r,a,t===0?n:i,f,o,l)}function te(e,r,a){return H(e,r,a,c,d(J()),C(e,2,-2),0)}function se(e,r,a,c){return H(e,r,a,t,C(e,0,c),C(e,c+1,-1),c)}function ue(c,n){switch(m(c,n)){case 5103:return a+"print-"+c+c;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+c+c;case 5349:case 4246:case 4810:case 6968:case 2756:return a+c+r+c+e+c+c;case 6828:case 4268:return a+c+e+c+c;case 6165:return a+c+e+"flex-"+c+c;case 5187:return a+c+y(c,/(\w+).+(:[^]+)/,a+"box-$1$2"+e+"flex-$1$2")+c;case 5443:return a+c+e+"flex-item-"+y(c,/flex-|-self/,"")+c;case 4675:return a+c+e+"flex-line-pack"+y(c,/align-content|flex-|-self/,"")+c;case 5548:return a+c+e+y(c,"shrink","negative")+c;case 5292:return a+c+e+y(c,"basis","preferred-size")+c;case 6060:return a+"box-"+y(c,"-grow","")+a+c+e+y(c,"grow","positive")+c;case 4554:return a+y(c,/([^-])(transform)/g,"$1"+a+"$2")+c;case 6187:return y(y(y(c,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),c,"")+c;case 5495:case 3959:return y(c,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return y(y(c,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+c+c;case 4095:case 3583:case 4068:case 2532:return y(c,/(.+)-inline(.+)/,a+"$1$2")+c;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(c)-1-n>6)switch(z(c,n+1)){case 109:if(z(c,n+4)!==45)break;case 102:return y(c,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r+(z(c,n+3)==108?"$3":"$2-$3"))+c;case 115:return~j(c,"stretch")?ue(y(c,"stretch","fill-available"),n)+c:c}break;case 4949:if(z(c,n+1)!==115)break;case 6444:switch(z(c,A(c)-3-(~j(c,"!important")&&10))){case 107:return y(c,":",":"+a)+c;case 101:return y(c,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(z(c,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e+"$2box$3")+c}break;case 5936:switch(z(c,n+11)){case 114:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb")+c;case 108:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb-rl")+c;case 45:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"lr")+c}return a+c+e+c+c}return c}function ie(e,r){var a="";var c=M(e);for(var n=0;n<c;n++)a+=r(e[n],n,e,r)||"";return a}function fe(e,r,a,s){switch(e.type){case i:case t:return e.return=e.return||e.value;case c:return"";case n:e.value=e.props.join(",")}return A(a=ie(e.children,s))?e.return=e.value+"{"+a+"}":""}function oe(e){var r=M(e);return function(a,c,n,t){var s="";for(var u=0;u<r;u++)s+=e[u](a,c,n,t)||"";return s}}function le(e){return function(r){if(!r.root)if(r=r.return)e(r)}}function ve(c,s,u,i){if(!c.return)switch(c.type){case t:c.return=ue(c.value,c.length);break;case p:return ie([I(y(c.value,"@","@"+a),c,"")],i);case n:if(c.length)return S(c.props,(function(n){switch(x(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ie([I(y(n,/:(read-\w+)/,":"+r+"$1"),c,"")],i);case"::placeholder":return ie([I(y(n,/:(plac\w+)/,":"+a+"input-$1"),c,""),I(y(n,/:(plac\w+)/,":"+r+"$1"),c,""),I(y(n,/:(plac\w+)/,e+"input-$1"),c,"")],i)}return""}))}}function he(e){switch(e.type){case n:e.props=e.props.map((function(r){return S(W(r),(function(r,a,c){switch(z(r,0)){case 12:return C(r,1,A(r));case 0:case 40:case 43:case 62:case 126:return r;case 58:if(c[++a]==="global")c[a]="",c[++a]="\f"+C(c[a],a=1,-1);case 32:return a===1?"":r;default:switch(a){case 0:e=r;return M(c)>1?"":r;case a=M(c)-1:case 2:return a===2?r+e+e:r+e;default:return r}}}))}))}}
//# sourceMappingURL=stylis.mjs.map


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/block-types/paragraph/edit.js":
/*!*******************************************!*\
  !*** ./src/block-types/paragraph/edit.js ***!
  \*******************************************/
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
/* harmony import */ var _helpers_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../helpers/typography */ "./src/helpers/typography.js");





const {
  visualizer
} = _helpers_spacing__WEBPACK_IMPORTED_MODULE_3__["default"];

const edit = props => {
  const {
    attributes: {
      content,
      textAlign,
      placeholder
    },
    setAttributes
  } = props;
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])({
    className: `has-text-align-${textAlign}`,
    style: { ..._helpers_spacing__WEBPACK_IMPORTED_MODULE_3__["default"].styles(props.attributes),
      ..._helpers_typography__WEBPACK_IMPORTED_MODULE_4__["default"].styles(props.attributes)
    }
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, _helpers_typography__WEBPACK_IMPORTED_MODULE_4__["default"].controls({
    props,
    initialOpen: true
  }), _helpers_spacing__WEBPACK_IMPORTED_MODULE_3__["default"].controls({
    props
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["AlignmentToolbar"], {
    value: textAlign,
    onChange: textAlign => setAttributes({
      textAlign
    })
  })), visualizer(props, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
    placeholder: placeholder,
    tagName: "p",
    value: content,
    allowedFormats: ["core/bold", "core/italic", "core/link", "core/code", "core/mark", "core/strikethrough"],
    onChange: newContent => setAttributes({
      content: newContent
    })
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/block-types/paragraph/editor.scss":
/*!***********************************************!*\
  !*** ./src/block-types/paragraph/editor.scss ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-types/paragraph/index.js":
/*!********************************************!*\
  !*** ./src/block-types/paragraph/index.js ***!
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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/block-types/paragraph/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/block-types/paragraph/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/block-types/paragraph/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./src/block-types/paragraph/save.js");
/* harmony import */ var _helpers_spacing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../helpers/spacing */ "./src/helpers/spacing.js");
/* harmony import */ var _helpers_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../helpers/typography */ "./src/helpers/typography.js");
/* harmony import */ var _icons_paragraph_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../icons/paragraph.svg */ "./src/icons/paragraph.svg");


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

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("beer-blocks/paragraph", {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Paragraph", "block title", "beer-blocks"),
  category: "beer-blocks",
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Create paragraph with custom typography, margin and padding.", "block description", "beer-blocks"),
  textdomain: "beer-blocks",
  supports: {
    color: {
      background: true,
      gradients: true,
      text: true
    }
  },
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: _icons_paragraph_svg__WEBPACK_IMPORTED_MODULE_9__["default"],
    alt: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["_x"])("Paragraph", "block title", "beer-blocks")
  }),
  attributes: {
    content: {
      type: "html"
    },
    textAlign: {
      type: "string",
      default: "left"
    },
    placeholder: {
      type: "string",
      default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Write your paragraph here...", "beer-blocks")
    },
    ..._helpers_spacing__WEBPACK_IMPORTED_MODULE_7__["default"].attributes(),
    ..._helpers_typography__WEBPACK_IMPORTED_MODULE_8__["default"].attributes()
  },
  transforms: {
    from: [{
      type: "block",
      blocks: ["core/paragraph"],
      transform: attributes => Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["createBlock"])("beer-blocks/paragraph", { ...attributes
      })
    }]
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/block-types/paragraph/save.js":
/*!*******************************************!*\
  !*** ./src/block-types/paragraph/save.js ***!
  \*******************************************/
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
/* harmony import */ var _helpers_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../helpers/typography */ "./src/helpers/typography.js");






const save = props => {
  const {
    attributes: {
      content,
      textAlign
    }
  } = props;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"].save({
    className: `has-text-align-${textAlign}`,
    style: { ..._helpers_spacing__WEBPACK_IMPORTED_MODULE_3__["default"].styles(props.attributes),
      ..._helpers_typography__WEBPACK_IMPORTED_MODULE_4__["default"].styles(props.attributes)
    }
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
    tagName: "p",
    value: content
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./src/helpers/google-fonts.json":
/*!***************************************!*\
  !*** ./src/helpers/google-fonts.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"family\":\"ABeeZee\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Abel\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Abhaya Libre\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Abril Fatface\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Aclonica\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Acme\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Actor\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Adamina\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Advent Pro\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Aguafina Script\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Akaya Kanadaka\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Akaya Telivigala\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Akronim\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Aladin\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Alata\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Alatsi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Aldrich\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Alef\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Alegreya\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Alegreya SC\",\"variants\":[\"regular\",\"italic\",\"500\",\"500italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Alegreya Sans\",\"variants\":[\"100\",\"100italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Alegreya Sans SC\",\"variants\":[\"100\",\"100italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Aleo\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Alex Brush\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Alfa Slab One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Alice\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Alike\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Alike Angular\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Allan\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Allerta\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Allerta Stencil\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Allison\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Allura\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Almarai\",\"variants\":[\"300\",\"regular\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Almendra\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Almendra Display\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Almendra SC\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Alumni Sans\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Amarante\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Amaranth\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Amatic SC\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Amethysta\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Amiko\",\"variants\":[\"regular\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Amiri\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Amita\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Anaheim\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Andada Pro\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\"],\"is_safe\":false},{\"family\":\"Andika\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Andika New Basic\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Angkor\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Annie Use Your Telescope\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Anonymous Pro\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Antic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Antic Didone\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Antic Slab\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Anton\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Antonio\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Arapey\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Arbutus\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Arbutus Slab\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Architects Daughter\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Archivo\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Archivo Black\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Archivo Narrow\",\"variants\":[\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Are You Serious\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Aref Ruqaa\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Arima Madurai\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Arimo\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"italic\",\"500italic\",\"600italic\",\"700italic\"],\"is_safe\":false},{\"family\":\"Arizonia\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Armata\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Arsenal\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Artifika\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Arvo\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Arya\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Asap\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"italic\",\"500italic\",\"600italic\",\"700italic\"],\"is_safe\":false},{\"family\":\"Asap Condensed\",\"variants\":[\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Asar\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Asset\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Assistant\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Astloch\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Asul\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Athiti\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Atkinson Hyperlegible\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Atma\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Atomic Age\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Aubrey\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Audiowide\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Autour One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Average\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Average Sans\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Averia Gruesa Libre\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Averia Libre\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Averia Sans Libre\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Averia Serif Libre\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Azeret Mono\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"B612\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"B612 Mono\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Bad Script\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bahiana\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bahianita\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bai Jamjuree\",\"variants\":[\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Ballet\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Baloo 2\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Baloo Bhai 2\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Baloo Bhaina 2\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Baloo Chettan 2\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Baloo Da 2\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Baloo Paaji 2\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Baloo Tamma 2\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Baloo Tammudu 2\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Baloo Thambi 2\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Balsamiq Sans\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Balthazar\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bangers\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Barlow\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Barlow Condensed\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Barlow Semi Condensed\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Barriecito\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Barrio\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Basic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Baskervville\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Battambang\",\"variants\":[\"100\",\"300\",\"regular\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Baumans\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bayon\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Be Vietnam\",\"variants\":[\"100\",\"100italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\"],\"is_safe\":false},{\"family\":\"Be Vietnam Pro\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Bebas Neue\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Belgrano\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bellefair\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Belleza\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bellota\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Bellota Text\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"BenchNine\",\"variants\":[\"300\",\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Benne\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bentham\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Berkshire Swash\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Besley\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Beth Ellen\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bevan\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Big Shoulders Display\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Big Shoulders Inline Display\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Big Shoulders Inline Text\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Big Shoulders Stencil Display\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Big Shoulders Stencil Text\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Big Shoulders Text\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Bigelow Rules\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bigshot One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bilbo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bilbo Swash Caps\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"BioRhyme\",\"variants\":[\"200\",\"300\",\"regular\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"BioRhyme Expanded\",\"variants\":[\"200\",\"300\",\"regular\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Birthstone\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Birthstone Bounce\",\"variants\":[\"regular\",\"500\"],\"is_safe\":false},{\"family\":\"Biryani\",\"variants\":[\"200\",\"300\",\"regular\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Bitter\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Black And White Picture\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Black Han Sans\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Black Ops One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Blinker\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Bodoni Moda\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Bokor\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bona Nova\",\"variants\":[\"regular\",\"italic\",\"700\"],\"is_safe\":false},{\"family\":\"Bonbon\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bonheur Royale\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Boogaloo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bowlby One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bowlby One SC\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Brawler\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bree Serif\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Brygada 1918\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"italic\",\"500italic\",\"600italic\",\"700italic\"],\"is_safe\":false},{\"family\":\"Bubblegum Sans\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bubbler One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Buda\",\"variants\":[\"300\"],\"is_safe\":false},{\"family\":\"Buenard\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Bungee\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bungee Hairline\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bungee Inline\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bungee Outline\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Bungee Shade\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Butcherman\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Butterfly Kids\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Cabin\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"italic\",\"500italic\",\"600italic\",\"700italic\"],\"is_safe\":false},{\"family\":\"Cabin Condensed\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Cabin Sketch\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Caesar Dressing\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Cagliostro\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Cairo\",\"variants\":[\"200\",\"300\",\"regular\",\"600\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Caladea\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Calistoga\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Calligraffitti\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Cambay\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Cambo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Candal\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Cantarell\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Cantata One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Cantora One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Capriola\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Caramel\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Carattere\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Cardo\",\"variants\":[\"regular\",\"italic\",\"700\"],\"is_safe\":false},{\"family\":\"Carme\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Carrois Gothic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Carrois Gothic SC\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Carter One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Castoro\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Catamaran\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Caudex\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Caveat\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Caveat Brush\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Cedarville Cursive\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ceviche One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Chakra Petch\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Changa\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Changa One\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Chango\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Charm\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Charmonman\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Chathura\",\"variants\":[\"100\",\"300\",\"regular\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Chau Philomene One\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Chela One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Chelsea Market\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Chenla\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Cherish\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Cherry Cream Soda\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Cherry Swash\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Chewy\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Chicle\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Chilanka\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Chivo\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"700\",\"700italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Chonburi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Cinzel\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Cinzel Decorative\",\"variants\":[\"regular\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Clicker Script\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Coda\",\"variants\":[\"regular\",\"800\"],\"is_safe\":false},{\"family\":\"Coda Caption\",\"variants\":[\"800\"],\"is_safe\":false},{\"family\":\"Codystar\",\"variants\":[\"300\",\"regular\"],\"is_safe\":false},{\"family\":\"Coiny\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Combo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Comfortaa\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Comic Neue\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Coming Soon\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Commissioner\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Concert One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Condiment\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Content\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Contrail One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Convergence\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Cookie\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Copse\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Corben\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Cormorant\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Cormorant Garamond\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Cormorant Infant\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Cormorant SC\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Cormorant Unicase\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Cormorant Upright\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Courgette\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Courier Prime\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Cousine\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Coustard\",\"variants\":[\"regular\",\"900\"],\"is_safe\":false},{\"family\":\"Covered By Your Grace\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Crafty Girls\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Creepster\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Crete Round\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Crimson Pro\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Crimson Text\",\"variants\":[\"regular\",\"italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Croissant One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Crushed\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Cuprum\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"italic\",\"500italic\",\"600italic\",\"700italic\"],\"is_safe\":false},{\"family\":\"Cute Font\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Cutive\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Cutive Mono\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"DM Mono\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\"],\"is_safe\":false},{\"family\":\"DM Sans\",\"variants\":[\"regular\",\"italic\",\"500\",\"500italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"DM Serif Display\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"DM Serif Text\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Damion\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Dancing Script\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Dangrek\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Darker Grotesque\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"David Libre\",\"variants\":[\"regular\",\"500\",\"700\"],\"is_safe\":false},{\"family\":\"Dawning of a New Day\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Days One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Dekko\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Dela Gothic One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Delius\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Delius Swash Caps\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Delius Unicase\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Della Respira\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Denk One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Devonshire\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Dhurjati\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Didact Gothic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Diplomata\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Diplomata SC\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Do Hyeon\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Dokdo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Domine\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Donegal One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Doppio One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Dorsa\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Dosis\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"DotGothic16\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Dr Sugiyama\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Duru Sans\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Dynalight\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"EB Garamond\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\"],\"is_safe\":false},{\"family\":\"Eagle Lake\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"East Sea Dokdo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Eater\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Economica\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Eczar\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"El Messiri\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Electrolize\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Elsie\",\"variants\":[\"regular\",\"900\"],\"is_safe\":false},{\"family\":\"Elsie Swash Caps\",\"variants\":[\"regular\",\"900\"],\"is_safe\":false},{\"family\":\"Emblema One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Emilys Candy\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Encode Sans\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Encode Sans Condensed\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Encode Sans Expanded\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Encode Sans SC\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Encode Sans Semi Condensed\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Encode Sans Semi Expanded\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Engagement\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Englebert\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Enriqueta\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Ephesis\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Epilogue\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Erica One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Esteban\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Euphoria Script\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ewert\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Exo\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Exo 2\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Expletus Sans\",\"variants\":[\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Explora\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Fahkwang\",\"variants\":[\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Fanwood Text\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Farro\",\"variants\":[\"300\",\"regular\",\"500\",\"700\"],\"is_safe\":false},{\"family\":\"Farsan\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Fascinate\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Fascinate Inline\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Faster One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Fasthand\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Fauna One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Faustina\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"italic\",\"500italic\",\"600italic\",\"700italic\"],\"is_safe\":false},{\"family\":\"Federant\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Federo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Felipa\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Fenix\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Festive\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Finger Paint\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Fira Code\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Fira Mono\",\"variants\":[\"regular\",\"500\",\"700\"],\"is_safe\":false},{\"family\":\"Fira Sans\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Fira Sans Condensed\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Fira Sans Extra Condensed\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Fjalla One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Fjord One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Flamenco\",\"variants\":[\"300\",\"regular\"],\"is_safe\":false},{\"family\":\"Flavors\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Fleur De Leah\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Fondamento\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Fontdiner Swanky\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Forum\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Francois One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Frank Ruhl Libre\",\"variants\":[\"300\",\"regular\",\"500\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Fraunces\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Freckle Face\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Fredericka the Great\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Fredoka One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Freehand\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Fresca\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Frijole\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Fruktur\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Fugaz One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Fuggles\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"GFS Didot\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"GFS Neohellenic\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Gabriela\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Gaegu\",\"variants\":[\"300\",\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Gafata\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Galada\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Galdeano\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Galindo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Gamja Flower\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Gayathri\",\"variants\":[\"100\",\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Gelasio\",\"variants\":[\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Gemunu Libre\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Gentium Basic\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Gentium Book Basic\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Geo\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Georama\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Geostar\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Geostar Fill\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Germania One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Gideon Roman\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Gidugu\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Gilda Display\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Girassol\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Give You Glory\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Glass Antiqua\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Glegoo\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Gloria Hallelujah\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Glory\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\"],\"is_safe\":false},{\"family\":\"Gluten\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Goblin One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Gochi Hand\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Goldman\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Gorditas\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Gothic A1\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Gotu\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Goudy Bookletter 1911\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Gowun Batang\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Gowun Dodum\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Graduate\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Grand Hotel\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Grandstander\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Gravitas One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Great Vibes\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Grechen Fuemen\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Grenze\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Grenze Gotisch\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Grey Qo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Griffy\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Gruppo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Gudea\",\"variants\":[\"regular\",\"italic\",\"700\"],\"is_safe\":false},{\"family\":\"Gugi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Gupter\",\"variants\":[\"regular\",\"500\",\"700\"],\"is_safe\":false},{\"family\":\"Gurajada\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Habibi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Hachi Maru Pop\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Hahmlet\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Halant\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Hammersmith One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Hanalei\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Hanalei Fill\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Handlee\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Hanuman\",\"variants\":[\"100\",\"300\",\"regular\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Happy Monkey\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Harmattan\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Headland One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Heebo\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Henny Penny\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Hepta Slab\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Herr Von Muellerhoff\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Hi Melody\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Hina Mincho\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Hind\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Hind Guntur\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Hind Madurai\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Hind Siliguri\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Hind Vadodara\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Holtwood One SC\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Homemade Apple\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Homenaje\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"IBM Plex Mono\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"IBM Plex Sans\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"IBM Plex Sans Arabic\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"IBM Plex Sans Condensed\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"IBM Plex Sans Devanagari\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"IBM Plex Sans Hebrew\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"IBM Plex Sans KR\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"IBM Plex Sans Thai\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"IBM Plex Sans Thai Looped\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"IBM Plex Serif\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"IM Fell DW Pica\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"IM Fell DW Pica SC\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"IM Fell Double Pica\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"IM Fell Double Pica SC\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"IM Fell English\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"IM Fell English SC\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"IM Fell French Canon\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"IM Fell French Canon SC\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"IM Fell Great Primer\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"IM Fell Great Primer SC\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ibarra Real Nova\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"italic\",\"500italic\",\"600italic\",\"700italic\"],\"is_safe\":false},{\"family\":\"Iceberg\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Iceland\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Imbue\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Imprima\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Inconsolata\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Inder\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Indie Flower\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Inika\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Inknut Antiqua\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Inria Sans\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Inria Serif\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Inter\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Irish Grover\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Istok Web\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Italiana\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Italianno\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Itim\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Jacques Francois\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Jacques Francois Shadow\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Jaldi\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"JetBrains Mono\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\"],\"is_safe\":false},{\"family\":\"Jim Nightshade\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Jockey One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Jolly Lodger\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Jomhuria\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Jomolhari\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Josefin Sans\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\"],\"is_safe\":false},{\"family\":\"Josefin Slab\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\"],\"is_safe\":false},{\"family\":\"Jost\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Joti One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Jua\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Judson\",\"variants\":[\"regular\",\"italic\",\"700\"],\"is_safe\":false},{\"family\":\"Julee\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Julius Sans One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Junge\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Jura\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Just Another Hand\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Just Me Again Down Here\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"K2D\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\"],\"is_safe\":false},{\"family\":\"Kadwa\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Kaisei Decol\",\"variants\":[\"regular\",\"500\",\"700\"],\"is_safe\":false},{\"family\":\"Kaisei HarunoUmi\",\"variants\":[\"regular\",\"500\",\"700\"],\"is_safe\":false},{\"family\":\"Kaisei Opti\",\"variants\":[\"regular\",\"500\",\"700\"],\"is_safe\":false},{\"family\":\"Kaisei Tokumin\",\"variants\":[\"regular\",\"500\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Kalam\",\"variants\":[\"300\",\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Kameron\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Kanit\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Kantumruy\",\"variants\":[\"300\",\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Karantina\",\"variants\":[\"300\",\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Karla\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\"],\"is_safe\":false},{\"family\":\"Karma\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Katibeh\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Kaushan Script\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Kavivanar\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Kavoon\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Kdam Thmor\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Keania One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Kelly Slab\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Kenia\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Khand\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Khmer\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Khula\",\"variants\":[\"300\",\"regular\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Kirang Haerang\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Kite One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Kiwi Maru\",\"variants\":[\"300\",\"regular\",\"500\"],\"is_safe\":false},{\"family\":\"Klee One\",\"variants\":[\"regular\",\"600\"],\"is_safe\":false},{\"family\":\"Knewave\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"KoHo\",\"variants\":[\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Kodchasan\",\"variants\":[\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Koh Santepheap\",\"variants\":[\"100\",\"300\",\"regular\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Kosugi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Kosugi Maru\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Kotta One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Koulen\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Kranky\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Kreon\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Kristi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Krona One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Krub\",\"variants\":[\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Kufam\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Kulim Park\",\"variants\":[\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Kumar One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Kumar One Outline\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Kumbh Sans\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Kurale\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"La Belle Aurore\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Lacquer\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Laila\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Lakki Reddy\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Lalezar\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Lancelot\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Langar\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Lateef\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Lato\",\"variants\":[\"100\",\"100italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"700\",\"700italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"League Script\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Leckerli One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ledger\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Lekton\",\"variants\":[\"regular\",\"italic\",\"700\"],\"is_safe\":false},{\"family\":\"Lemon\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Lemonada\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Lexend\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Lexend Deca\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Lexend Exa\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Lexend Giga\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Lexend Mega\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Lexend Peta\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Lexend Tera\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Lexend Zetta\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Libre Barcode 128\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Libre Barcode 128 Text\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Libre Barcode 39\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Libre Barcode 39 Extended\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Libre Barcode 39 Extended Text\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Libre Barcode 39 Text\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Libre Barcode EAN13 Text\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Libre Baskerville\",\"variants\":[\"regular\",\"italic\",\"700\"],\"is_safe\":false},{\"family\":\"Libre Caslon Display\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Libre Caslon Text\",\"variants\":[\"regular\",\"italic\",\"700\"],\"is_safe\":false},{\"family\":\"Libre Franklin\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Life Savers\",\"variants\":[\"regular\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Lilita One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Lily Script One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Limelight\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Linden Hill\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Literata\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Liu Jian Mao Cao\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Livvic\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Lobster\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Lobster Two\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Londrina Outline\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Londrina Shadow\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Londrina Sketch\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Londrina Solid\",\"variants\":[\"100\",\"300\",\"regular\",\"900\"],\"is_safe\":false},{\"family\":\"Long Cang\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Lora\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"italic\",\"500italic\",\"600italic\",\"700italic\"],\"is_safe\":false},{\"family\":\"Love Ya Like A Sister\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Loved by the King\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Lovers Quarrel\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Luckiest Guy\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Lusitana\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Lustria\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"M PLUS 1p\",\"variants\":[\"100\",\"300\",\"regular\",\"500\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"M PLUS Rounded 1c\",\"variants\":[\"100\",\"300\",\"regular\",\"500\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Ma Shan Zheng\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Macondo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Macondo Swash Caps\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Mada\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Magra\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Maiden Orange\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Maitree\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Major Mono Display\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Mako\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Mali\",\"variants\":[\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Mallanna\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Mandali\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Manjari\",\"variants\":[\"100\",\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Manrope\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Mansalva\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Manuale\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\"],\"is_safe\":false},{\"family\":\"Marcellus\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Marcellus SC\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Marck Script\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Margarine\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Markazi Text\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Marko One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Marmelad\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Martel\",\"variants\":[\"200\",\"300\",\"regular\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Martel Sans\",\"variants\":[\"200\",\"300\",\"regular\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Marvel\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Mate\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Mate SC\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Maven Pro\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"McLaren\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Meddon\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"MedievalSharp\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Medula One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Meera Inimai\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Megrim\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Meie Script\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Merienda\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Merienda One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Merriweather\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"700\",\"700italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Merriweather Sans\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\"],\"is_safe\":false},{\"family\":\"Metal\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Metal Mania\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Metamorphous\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Metrophobic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Michroma\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Milonga\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Miltonian\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Miltonian Tattoo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Mina\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Miniver\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Miriam Libre\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Mirza\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Miss Fajardose\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Mitr\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Modak\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Modern Antiqua\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Mogra\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Molengo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Molle\",\"variants\":[\"italic\"],\"is_safe\":false},{\"family\":\"Monda\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Monofett\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Monoton\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Monsieur La Doulaise\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Montaga\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"MonteCarlo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Montez\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Montserrat\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Montserrat Alternates\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Montserrat Subrayada\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Moul\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Moulpali\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Mountains of Christmas\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Mouse Memoirs\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Mr Bedfort\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Mr Dafoe\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Mr De Haviland\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Mrs Saint Delafield\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Mrs Sheppards\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Mukta\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Mukta Mahee\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Mukta Malar\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Mukta Vaani\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Mulish\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"MuseoModerno\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Mystery Quest\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"NTR\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Nanum Brush Script\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Nanum Gothic\",\"variants\":[\"regular\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Nanum Gothic Coding\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Nanum Myeongjo\",\"variants\":[\"regular\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Nanum Pen Script\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Nerko One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Neucha\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Neuton\",\"variants\":[\"200\",\"300\",\"regular\",\"italic\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"New Rocker\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"New Tegomin\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"News Cycle\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Newsreader\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\"],\"is_safe\":false},{\"family\":\"Niconne\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Niramit\",\"variants\":[\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Nixie One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Nobile\",\"variants\":[\"regular\",\"italic\",\"500\",\"500italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Nokora\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Norican\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Nosifer\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Notable\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Nothing You Could Do\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noticia Text\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Noto Kufi Arabic\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Music\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Naskh Arabic\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Noto Nastaliq Urdu\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Noto Rashi Hebrew\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Noto Sans Adlam\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Noto Sans Adlam Unjoined\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Noto Sans Anatolian Hieroglyphs\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Arabic\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Armenian\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Avestan\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Balinese\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Noto Sans Bamum\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Noto Sans Bassa Vah\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Batak\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Bengali\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Bhaiksuki\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Brahmi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Buginese\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Buhid\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Canadian Aboriginal\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Carian\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Caucasian Albanian\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Chakma\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Cham\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Cherokee\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Coptic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Cuneiform\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Cypriot\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Deseret\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Devanagari\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Display\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Noto Sans Duployan\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Egyptian Hieroglyphs\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Elbasan\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Elymaic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Georgian\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Glagolitic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Gothic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Grantha\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Gujarati\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Gunjala Gondi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Gurmukhi\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans HK\",\"variants\":[\"100\",\"300\",\"regular\",\"500\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Hanifi Rohingya\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Noto Sans Hanunoo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Hatran\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Hebrew\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Imperial Aramaic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Indic Siyaq Numbers\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Inscriptional Pahlavi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Inscriptional Parthian\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans JP\",\"variants\":[\"100\",\"300\",\"regular\",\"500\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Javanese\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Noto Sans KR\",\"variants\":[\"100\",\"300\",\"regular\",\"500\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Kaithi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Kannada\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Kayah Li\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Noto Sans Kharoshthi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Khmer\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Khojki\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Khudawadi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Lao\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Lepcha\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Limbu\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Linear A\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Linear B\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Lisu\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Noto Sans Lycian\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Lydian\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Mahajani\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Malayalam\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Mandaic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Manichaean\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Marchen\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Masaram Gondi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Math\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Mayan Numerals\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Medefaidrin\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Noto Sans Meroitic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Miao\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Modi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Mongolian\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Mono\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Mro\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Multani\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Myanmar\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans N Ko\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Nabataean\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans New Tai Lue\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Newa\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Nushu\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Ogham\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Ol Chiki\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Noto Sans Old Hungarian\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Old Italic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Old North Arabian\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Old Permic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Old Persian\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Old Sogdian\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Old South Arabian\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Old Turkic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Oriya\",\"variants\":[\"100\",\"regular\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Osage\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Osmanya\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Pahawh Hmong\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Palmyrene\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Pau Cin Hau\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Phags Pa\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Phoenician\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Psalter Pahlavi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Rejang\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Runic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans SC\",\"variants\":[\"100\",\"300\",\"regular\",\"500\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Samaritan\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Saurashtra\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Sharada\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Shavian\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Siddham\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Sinhala\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Sogdian\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Sora Sompeng\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Noto Sans Soyombo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Sundanese\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Noto Sans Syloti Nagri\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Symbols\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Symbols 2\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Syriac\",\"variants\":[\"100\",\"regular\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans TC\",\"variants\":[\"100\",\"300\",\"regular\",\"500\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Tagalog\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Tagbanwa\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Tai Le\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Tai Tham\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Noto Sans Tai Viet\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Takri\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Tamil\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Tamil Supplement\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Telugu\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Thaana\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Thai\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Thai Looped\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Sans Tifinagh\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Tirhuta\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Ugaritic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Vai\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Wancho\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Warang Citi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Yi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Sans Zanabazar Square\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Serif\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Noto Serif Ahom\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Serif Armenian\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Balinese\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Serif Bengali\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Devanagari\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Display\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Noto Serif Dogra\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Serif Ethiopic\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Georgian\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Grantha\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Serif Gujarati\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Gurmukhi\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Hebrew\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif JP\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif KR\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Kannada\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Khmer\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Lao\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Malayalam\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Myanmar\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Nyiakeng Puachue Hmong\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Noto Serif SC\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Sinhala\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif TC\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Tamil\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Noto Serif Tangut\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Noto Serif Telugu\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Thai\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Tibetan\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Noto Serif Yezidi\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Noto Traditional Nushu\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Nova Cut\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Nova Flat\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Nova Mono\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Nova Oval\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Nova Round\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Nova Script\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Nova Slim\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Nova Square\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Numans\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Nunito\",\"variants\":[\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Nunito Sans\",\"variants\":[\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Odibee Sans\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Odor Mean Chey\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Offside\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Oi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Old Standard TT\",\"variants\":[\"regular\",\"italic\",\"700\"],\"is_safe\":false},{\"family\":\"Oldenburg\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Oleo Script\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Oleo Script Swash Caps\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Open Sans\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\"],\"is_safe\":false},{\"family\":\"Open Sans Condensed\",\"variants\":[\"300\",\"300italic\",\"700\"],\"is_safe\":false},{\"family\":\"Oranienbaum\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Orbitron\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Oregano\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Orelega One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Orienta\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Original Surfer\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Oswald\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Otomanopee One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Over the Rainbow\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Overlock\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Overlock SC\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Overpass\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Overpass Mono\",\"variants\":[\"300\",\"regular\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Ovo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Oxanium\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Oxygen\",\"variants\":[\"300\",\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Oxygen Mono\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"PT Mono\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"PT Sans\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"PT Sans Caption\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"PT Sans Narrow\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"PT Serif\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"PT Serif Caption\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Pacifico\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Padauk\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Palanquin\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Palanquin Dark\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Palette Mosaic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Pangolin\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Paprika\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Parisienne\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Passero One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Passion One\",\"variants\":[\"regular\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Pathway Gothic One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Patrick Hand\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Patrick Hand SC\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Pattaya\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Patua One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Pavanam\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Paytone One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Peddana\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Peralta\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Permanent Marker\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Petit Formal Script\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Petrona\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Philosopher\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Piazzolla\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Piedra\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Pinyon Script\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Pirata One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Plaster\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Play\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Playball\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Playfair Display\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Playfair Display SC\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Podkova\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Poiret One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Poller One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Poly\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Pompiere\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Pontano Sans\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Poor Story\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Poppins\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Port Lligat Sans\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Port Lligat Slab\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Potta One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Pragati Narrow\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Prata\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Preahvihear\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Press Start 2P\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Pridi\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Princess Sofia\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Prociono\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Prompt\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Prosto One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Proza Libre\",\"variants\":[\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\"],\"is_safe\":false},{\"family\":\"Public Sans\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Puritan\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Purple Purse\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Qahiri\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Quando\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Quantico\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Quattrocento\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Quattrocento Sans\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Questrial\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Quicksand\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Quintessential\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Qwigley\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Racing Sans One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Radley\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Rajdhani\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Rakkas\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Raleway\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Raleway Dots\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ramabhadra\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ramaraja\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Rambla\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Rammetto One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Rampart One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ranchers\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Rancho\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ranga\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Rasa\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\"],\"is_safe\":false},{\"family\":\"Rationale\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ravi Prakash\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Recursive\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Red Hat Display\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Red Hat Text\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\"],\"is_safe\":false},{\"family\":\"Red Rose\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Redressed\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Reem Kufi\",\"variants\":[\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Reenie Beanie\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Reggae One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Revalia\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Rhodium Libre\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ribeye\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ribeye Marrow\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Righteous\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Risque\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Roboto\",\"variants\":[\"100\",\"100italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"700\",\"700italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Roboto Condensed\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Roboto Mono\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\"],\"is_safe\":false},{\"family\":\"Roboto Slab\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Rochester\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Rock Salt\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"RocknRoll One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Rokkitt\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Romanesco\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ropa Sans\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Rosario\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\"],\"is_safe\":false},{\"family\":\"Rosarivo\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Rouge Script\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Rowdies\",\"variants\":[\"300\",\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Rozha One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Rubik\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Rubik Beastly\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Rubik Mono One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ruda\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Rufina\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Ruge Boogie\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ruluko\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Rum Raisin\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ruslan Display\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Russo One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ruthie\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Rye\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"STIX Two Text\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"italic\",\"500italic\",\"600italic\",\"700italic\"],\"is_safe\":false},{\"family\":\"Sacramento\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sahitya\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Sail\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Saira\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Saira Condensed\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Saira Extra Condensed\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Saira Semi Condensed\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Saira Stencil One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Salsa\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sanchez\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Sancreek\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sansita\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Sansita Swashed\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Sarabun\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\"],\"is_safe\":false},{\"family\":\"Sarala\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Sarina\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sarpanch\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Satisfy\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sawarabi Gothic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sawarabi Mincho\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Scada\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Scheherazade\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Scheherazade New\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Schoolbell\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Scope One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Seaweed Script\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Secular One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sedgwick Ave\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sedgwick Ave Display\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sen\",\"variants\":[\"regular\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Sevillana\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Seymour One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Shadows Into Light\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Shadows Into Light Two\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Shanti\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Share\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Share Tech\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Share Tech Mono\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Shippori Mincho\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Shippori Mincho B1\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Shojumaru\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Short Stack\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Shrikhand\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Siemreap\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sigmar One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Signika\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Signika Negative\",\"variants\":[\"300\",\"regular\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Simonetta\",\"variants\":[\"regular\",\"italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Single Day\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sintony\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Sirin Stencil\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Six Caps\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Skranji\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Slabo 13px\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Slabo 27px\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Slackey\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Smokum\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Smythe\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sniglet\",\"variants\":[\"regular\",\"800\"],\"is_safe\":false},{\"family\":\"Snippet\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Snowburst One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sofadi One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sofia\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Solway\",\"variants\":[\"300\",\"regular\",\"500\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Song Myung\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sonsie One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sora\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Sorts Mill Goudy\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Source Code Pro\",\"variants\":[\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Source Sans Pro\",\"variants\":[\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Source Serif Pro\",\"variants\":[\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Space Grotesk\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Space Mono\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Spartan\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Special Elite\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Spectral\",\"variants\":[\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\"],\"is_safe\":false},{\"family\":\"Spectral SC\",\"variants\":[\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\"],\"is_safe\":false},{\"family\":\"Spicy Rice\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Spinnaker\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Spirax\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Squada One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sree Krushnadevaraya\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sriracha\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Srisakdi\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Staatliches\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Stalemate\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Stalinist One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Stardos Stencil\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Stick\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Stick No Bills\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Stint Ultra Condensed\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Stint Ultra Expanded\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Stoke\",\"variants\":[\"300\",\"regular\"],\"is_safe\":false},{\"family\":\"Strait\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Style Script\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Stylish\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sue Ellen Francisco\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Suez One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sulphur Point\",\"variants\":[\"300\",\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Sumana\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Sunflower\",\"variants\":[\"300\",\"500\",\"700\"],\"is_safe\":false},{\"family\":\"Sunshiney\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Supermercado One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Sura\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Suranna\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Suravaram\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Suwannaphum\",\"variants\":[\"100\",\"300\",\"regular\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Swanky and Moo Moo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Syncopate\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Syne\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Syne Mono\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Syne Tactile\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Tajawal\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Tangerine\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Taprom\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Tauri\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Taviraj\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Teko\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Telex\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Tenali Ramakrishna\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Tenor Sans\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Text Me One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Texturina\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Thasadith\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"The Girl Next Door\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Tienne\",\"variants\":[\"regular\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Tillana\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Timmana\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Tinos\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Titan One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Titillium Web\",\"variants\":[\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"900\"],\"is_safe\":false},{\"family\":\"Tomorrow\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Tourney\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Trade Winds\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Train One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Trirong\",\"variants\":[\"100\",\"100italic\",\"200\",\"200italic\",\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\",\"800\",\"800italic\",\"900\",\"900italic\"],\"is_safe\":false},{\"family\":\"Trispace\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Trocchi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Trochut\",\"variants\":[\"regular\",\"italic\",\"700\"],\"is_safe\":false},{\"family\":\"Truculenta\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"is_safe\":false},{\"family\":\"Trykker\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Tulpen One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Turret Road\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"700\",\"800\"],\"is_safe\":false},{\"family\":\"Ubuntu\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Ubuntu Condensed\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ubuntu Mono\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Uchen\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Ultra\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Uncial Antiqua\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Underdog\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Unica One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"UnifrakturCook\",\"variants\":[\"700\"],\"is_safe\":false},{\"family\":\"UnifrakturMaguntia\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Unkempt\",\"variants\":[\"regular\",\"700\"],\"is_safe\":false},{\"family\":\"Unlock\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Unna\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Urbanist\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"VT323\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Vampiro One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Varela\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Varela Round\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Varta\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Vast Shadow\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Vesper Libre\",\"variants\":[\"regular\",\"500\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Viaoda Libre\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Vibes\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Vibur\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Vidaloka\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Viga\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Voces\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Volkhov\",\"variants\":[\"regular\",\"italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Vollkorn\",\"variants\":[\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Vollkorn SC\",\"variants\":[\"regular\",\"600\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Voltaire\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Waiting for the Sunrise\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Wallpoet\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Walter Turncoat\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Warnes\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Wellfleet\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Wendy One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"WindSong\",\"variants\":[\"regular\",\"500\"],\"is_safe\":false},{\"family\":\"Wire One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Work Sans\",\"variants\":[\"100\",\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\",\"800\",\"900\",\"100italic\",\"200italic\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\",\"800italic\",\"900italic\"],\"is_safe\":false},{\"family\":\"Xanh Mono\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Yaldevi\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Yanone Kaffeesatz\",\"variants\":[\"200\",\"300\",\"regular\",\"500\",\"600\",\"700\"],\"is_safe\":false},{\"family\":\"Yantramanav\",\"variants\":[\"100\",\"300\",\"regular\",\"500\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Yatra One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Yellowtail\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Yeon Sung\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Yeseva One\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Yesteryear\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Yomogi\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Yrsa\",\"variants\":[\"300\",\"regular\",\"500\",\"600\",\"700\",\"300italic\",\"italic\",\"500italic\",\"600italic\",\"700italic\"],\"is_safe\":false},{\"family\":\"Yusei Magic\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"ZCOOL KuaiLe\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"ZCOOL QingKe HuangYou\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"ZCOOL XiaoWei\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Zen Antique\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Zen Antique Soft\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Zen Dots\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Zen Kaku Gothic Antique\",\"variants\":[\"300\",\"regular\",\"500\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Zen Kaku Gothic New\",\"variants\":[\"300\",\"regular\",\"500\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Zen Kurenaido\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Zen Loop\",\"variants\":[\"regular\",\"italic\"],\"is_safe\":false},{\"family\":\"Zen Maru Gothic\",\"variants\":[\"300\",\"regular\",\"500\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Zen Old Mincho\",\"variants\":[\"regular\",\"700\",\"900\"],\"is_safe\":false},{\"family\":\"Zen Tokyo Zoo\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Zeyada\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Zhi Mang Xing\",\"variants\":[\"regular\"],\"is_safe\":false},{\"family\":\"Zilla Slab\",\"variants\":[\"300\",\"300italic\",\"regular\",\"italic\",\"500\",\"500italic\",\"600\",\"600italic\",\"700\",\"700italic\"],\"is_safe\":false},{\"family\":\"Zilla Slab Highlight\",\"variants\":[\"regular\",\"700\"]}]");

/***/ }),

/***/ "./src/helpers/safe-fonts.json":
/*!*************************************!*\
  !*** ./src/helpers/safe-fonts.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"family\":\"Arial\",\"value\":\"Arial, sans-serif\",\"is_safe\":true},{\"family\":\"Verdana\",\"value\":\"Verdana, sans-serif\",\"is_safe\":true},{\"family\":\"Helvetica\",\"value\":\"Helvetica, sans-serif\",\"is_safe\":true},{\"family\":\"Tahoma\",\"value\":\"Tahoma, sans-serif\",\"is_safe\":true},{\"family\":\"Trebuchet MS\",\"value\":\"\\\"Trebuchet MS\\\", sans-serif\",\"is_safe\":true},{\"family\":\"Times New Roman\",\"value\":\"\\\"Times New Roman\\\", serif\",\"is_safe\":true},{\"family\":\"Georgia\",\"value\":\"Georgia, serif\",\"is_safe\":true},{\"family\":\"Garamond\",\"value\":\"Garamond, serif\",\"is_safe\":true},{\"family\":\"Courier New\",\"value\":\"\\\"Courier New\\\", monospace\",\"is_safe\":true},{\"family\":\"Brush Script MT\",\"value\":\"\\\"Brush Script MT\\\", cursive\",\"is_safe\":true}]");

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

/***/ "./src/helpers/typography.js":
/*!***********************************!*\
  !*** ./src/helpers/typography.js ***!
  \***********************************/
/*! exports provided: fontFamilies, defaultUnits, fontSizeUnitAttribute, fontSizeAttribute, fontSizeControl, fontSizeStyles, fontFamilyAttribute, fontFamilyControl, fontFamilyStyles, fontWeightAttribute, fontWeightControl, fontWeightStyles, lineHeightAttribute, lineHeightControl, lineHeightStyles, attributes, innerControls, controls, styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamilies", function() { return fontFamilies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultUnits", function() { return defaultUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeUnitAttribute", function() { return fontSizeUnitAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeAttribute", function() { return fontSizeAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeControl", function() { return fontSizeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSizeStyles", function() { return fontSizeStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamilyAttribute", function() { return fontFamilyAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamilyControl", function() { return fontFamilyControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFamilyStyles", function() { return fontFamilyStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeightAttribute", function() { return fontWeightAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeightControl", function() { return fontWeightControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontWeightStyles", function() { return fontWeightStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeightAttribute", function() { return lineHeightAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeightControl", function() { return lineHeightControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineHeightStyles", function() { return lineHeightStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innerControls", function() { return innerControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controls", function() { return controls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _google_fonts_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./google-fonts.json */ "./src/helpers/google-fonts.json");
var _google_fonts_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./google-fonts.json */ "./src/helpers/google-fonts.json", 1);
/* harmony import */ var _safe_fonts_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./safe-fonts.json */ "./src/helpers/safe-fonts.json");
var _safe_fonts_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./safe-fonts.json */ "./src/helpers/safe-fonts.json", 1);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








const fontFamilies = [..._safe_fonts_json__WEBPACK_IMPORTED_MODULE_6__, ..._google_fonts_json__WEBPACK_IMPORTED_MODULE_5__];
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
const fontSizeUnitAttribute = () => ({
  type: "string",
  default: "px"
});
const fontSizeAttribute = () => ({
  type: "string",
  default: ""
});
const fontSizeControl = function (props) {
  let fontSizeAttr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "fontSize";
  let fontSizeUnitAttr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "fontSizeUnit";
  const {
    setAttributes,
    attributes: {
      [fontSizeUnitAttr]: fontSizeUnit,
      [fontSizeAttr]: fontSize
    }
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalUnitControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Font Size (%s)", "beer-blocks"), fontSizeUnit),
    value: fontSize,
    onChange: fontSize => setAttributes({
      [fontSizeAttr]: fontSize
    }),
    onUnitChange: fontSizeUnit => setAttributes({
      [fontSizeUnitAttr]: fontSizeUnit,
      [fontSizeAttr]: ""
    }),
    units: defaultUnits
  }));
};
const fontSizeStyles = fontSize => fontSize ? {
  fontSize
} : {};
const fontFamilyAttribute = () => ({
  type: "string",
  default: ""
});

const addGoogleFontToHead = fontFamily => {
  if (!fontFamily) {
    return;
  }

  const fontFamilyObj = fontFamilies.find(fontObject => fontFamily === fontObject.family);

  if (!fontFamilyObj || fontFamilyObj.is_safe) {
    return;
  }

  const nameAttr = `beer-blocks-google-fonts-css-${Object(lodash__WEBPACK_IMPORTED_MODULE_7__["kebabCase"])(fontFamily)}`;
  let link = document.querySelector(`link[name=${nameAttr}]`);

  if (link) {
    return;
  }

  link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("name", nameAttr);
  link.setAttribute("media", "all");
  link.setAttribute("href", `https://fonts.googleapis.com/css?family=${fontFamily.replace(/\s+/g, "+") + (Object(lodash__WEBPACK_IMPORTED_MODULE_7__["has"])(fontFamilyObj, "variants") ? `:${fontFamilyObj.variants.join(",")}` : "")}`);
  document.head.appendChild(link);
};

const fontFamilyControl = function (props) {
  let attrName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "fontFamily";
  const {
    attributes: {
      [attrName]: fontFamily
    },
    setAttributes
  } = props;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    addGoogleFontToHead(fontFamily);
  }, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Font Families:", "beer-blocks"),
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Choose a font family.", "beer-blocks")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
    options: fontFamilies.map(_ref => {
      let {
        family,
        variants
      } = _ref;
      return {
        value: {
          family,
          variants
        },
        label: family
      };
    }),
    isClearable: true,
    isMulti: false,
    noOptionsMessage: () => Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("No font family options", "beer-blocks"),
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Select...", "beer-blocks"),
    onChange: selectedOption => {
      if (selectedOption) {
        addGoogleFontToHead(selectedOption.value.family);
        setAttributes({
          [attrName]: selectedOption.value.family
        });
      } else {
        setAttributes({
          [attrName]: ""
        });
      }
    },
    value: fontFamily ? {
      label: fontFamily,
      value: fontFamilies.find(font => font.family === fontFamily)
    } : null
  })));
};
const fontFamilyStyles = fontFamily => fontFamily ? {
  fontFamily
} : {};
const fontWeightAttribute = () => ({
  type: "number",
  default: ""
});
const fontWeightControl = function (props) {
  let attrName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "fontWeight";
  const {
    setAttributes,
    attributes: {
      [attrName]: fontWeight
    }
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Font Weight", "beer-blocks")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    value: fontWeight,
    onChange: fontWeight => setAttributes({
      [attrName]: fontWeight
    }),
    min: 100,
    max: 900,
    step: 100,
    allowReset: true
  }));
};
const fontWeightStyles = fontWeight => fontWeight ? {
  fontWeight
} : {};
const lineHeightAttribute = () => ({
  type: "number",
  default: ""
});
const lineHeightControl = function (props) {
  let attrName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "lineHeight";
  const {
    setAttributes,
    attributes: {
      [attrName]: lineHeight
    }
  } = props;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Line Height", "beer-blocks")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    value: lineHeight,
    onChange: lineHeight => setAttributes({
      [attrName]: lineHeight
    }),
    min: 1,
    max: 10,
    step: 0.1,
    allowReset: true
  }));
};
const lineHeightStyles = lineHeight => lineHeight ? {
  lineHeight
} : {};
const attributes = function () {
  let {
    attrPrefixName = "",
    fontSizeUnit = "px",
    fontSize = "",
    fontFamily = "",
    fontWeight = "",
    lineHeight = ""
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    [Object(lodash__WEBPACK_IMPORTED_MODULE_7__["camelCase"])(`${attrPrefixName}-font-size-unit`)]: {
      type: "string",
      default: fontSizeUnit
    },
    [Object(lodash__WEBPACK_IMPORTED_MODULE_7__["camelCase"])(`${attrPrefixName}-font-size`)]: {
      type: "string",
      default: fontSize
    },
    [Object(lodash__WEBPACK_IMPORTED_MODULE_7__["camelCase"])(`${attrPrefixName}-font-family`)]: {
      type: "string",
      default: fontFamily
    },
    [Object(lodash__WEBPACK_IMPORTED_MODULE_7__["camelCase"])(`${attrPrefixName}-font-weight`)]: {
      type: "number",
      default: fontWeight
    },
    [Object(lodash__WEBPACK_IMPORTED_MODULE_7__["camelCase"])(`${attrPrefixName}-line-height`)]: {
      type: "number",
      default: lineHeight
    }
  };
};
const innerControls = function (props) {
  let attrPrefixName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, fontFamilyControl(props, Object(lodash__WEBPACK_IMPORTED_MODULE_7__["camelCase"])(`${attrPrefixName}-font-family`)), fontSizeControl(props, Object(lodash__WEBPACK_IMPORTED_MODULE_7__["camelCase"])(`${attrPrefixName}-font-size`), Object(lodash__WEBPACK_IMPORTED_MODULE_7__["camelCase"])(`${attrPrefixName}-font-size-unit`)), fontWeightControl(props, Object(lodash__WEBPACK_IMPORTED_MODULE_7__["camelCase"])(`${attrPrefixName}-font-weight`)), lineHeightControl(props, Object(lodash__WEBPACK_IMPORTED_MODULE_7__["camelCase"])(`${attrPrefixName}-line-height`)));
};
const controls = _ref2 => {
  let {
    props,
    initialOpen = false,
    attrPrefixName = "",
    title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Typography", "beer-blocks")
  } = _ref2;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: title,
    initialOpen: initialOpen
  }, innerControls(props, attrPrefixName));
};
const styles = function (attributes) {
  let attrPrefixName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  const {
    [Object(lodash__WEBPACK_IMPORTED_MODULE_7__["camelCase"])(`${attrPrefixName}-font-family`)]: fontFamily,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_7__["camelCase"])(`${attrPrefixName}-font-size`)]: fontSize,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_7__["camelCase"])(`${attrPrefixName}-font-weight`)]: fontWeight,
    [Object(lodash__WEBPACK_IMPORTED_MODULE_7__["camelCase"])(`${attrPrefixName}-line-height`)]: lineHeight
  } = attributes;
  return { ...fontSizeStyles(fontSize),
    ...fontFamilyStyles(fontFamily),
    ...fontWeightStyles(fontWeight),
    ...lineHeightStyles(lineHeight)
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  defaultUnits,
  fontFamilies,
  fontFamilyAttribute,
  fontFamilyControl,
  fontFamilyStyles,
  fontSizeUnitAttribute,
  fontSizeAttribute,
  fontSizeControl,
  fontSizeStyles,
  fontWeightAttribute,
  fontWeightControl,
  fontWeightStyles,
  lineHeightAttribute,
  lineHeightControl,
  lineHeightStyles,
  attributes,
  innerControls,
  controls,
  styles
});

/***/ }),

/***/ "./src/icons/paragraph.svg":
/*!*********************************!*\
  !*** ./src/icons/paragraph.svg ***!
  \*********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgParagraph; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _defs, _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgParagraph(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 96.41 64.27"
  }, props), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", null, ".paragraph_svg__cls-1{fill:#465b65}.paragraph_svg__cls-2{fill:#627e8b}.paragraph_svg__cls-3{fill:#010101}"))), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "paragraph_svg__Capa_2",
    "data-name": "Capa 2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "paragraph_svg__Capa_1-2",
    "data-name": "Capa 1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "paragraph_svg__cls-1",
    d: "M94.4 4H2a2 2 0 010-4h92.4a2 2 0 010 4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "paragraph_svg__cls-2",
    d: "M94.4 16.07H2a2 2 0 010-4h92.4a2 2 0 010 4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "paragraph_svg__cls-1",
    d: "M94.4 28.12H2a2 2 0 010-4h92.4a2 2 0 010 4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "paragraph_svg__cls-2",
    d: "M94.4 40.17H2a2 2 0 110-4h92.4a2 2 0 010 4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "paragraph_svg__cls-1",
    d: "M94.4 52.22H2a2 2 0 010-4h92.4a2 2 0 010 4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "paragraph_svg__cls-2",
    d: "M66.28 64.27H2a2 2 0 010-4h64.28a2 2 0 110 4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "paragraph_svg__cls-3",
    d: "M94.4 4H2a2 2 0 010-4h92.4a2 2 0 010 4zM94.4 16.07H2a2 2 0 010-4h92.4a2 2 0 010 4zM94.4 28.12H2a2 2 0 010-4h92.4a2 2 0 010 4zM94.4 40.17H2a2 2 0 110-4h92.4a2 2 0 010 4zM94.4 52.22H2a2 2 0 010-4h92.4a2 2 0 010 4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M66.28 64.27H2a2 2 0 010-4h64.28a2 2 0 110 4z",
    fill: "#efa126"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ni40MSA2NC4yNyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0NjViNjU7fS5jbHMtMntmaWxsOiM2MjdlOGI7fS5jbHMtM3tmaWxsOiMwMTAxMDE7fS5jbHMtNHtmaWxsOiNlZmExMjY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYXBhXzIiIGRhdGEtbmFtZT0iQ2FwYSAyIj48ZyBpZD0iQ2FwYV8xLTIiIGRhdGEtbmFtZT0iQ2FwYSAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05NC40LDRIMkEyLDIsMCwwLDEsMiwwSDk0LjRhMiwyLDAsMCwxLDAsNFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik05NC40LDE2LjA3SDJhMiwyLDAsMCwxLDAtNEg5NC40YTIsMiwwLDAsMSwwLDRaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNOTQuNCwyOC4xMkgyYTIsMiwwLDAsMSwwLTRIOTQuNGEyLDIsMCwwLDEsMCw0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTk0LjQsNDAuMTdIMmEyLDIsMCwxLDEsMC00SDk0LjRhMiwyLDAsMCwxLDAsNFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05NC40LDUyLjIySDJhMiwyLDAsMCwxLDAtNEg5NC40YTIsMiwwLDAsMSwwLDRaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNjYuMjgsNjQuMjdIMmEyLDIsMCwwLDEsMC00SDY2LjI4YTIsMiwwLDEsMSwwLDRaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNOTQuNCw0SDJBMiwyLDAsMCwxLDIsMEg5NC40YTIsMiwwLDAsMSwwLDRaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNOTQuNCwxNi4wN0gyYTIsMiwwLDAsMSwwLTRIOTQuNGEyLDIsMCwwLDEsMCw0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTk0LjQsMjguMTJIMmEyLDIsMCwwLDEsMC00SDk0LjRhMiwyLDAsMCwxLDAsNFoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik05NC40LDQwLjE3SDJhMiwyLDAsMSwxLDAtNEg5NC40YTIsMiwwLDAsMSwwLDRaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNOTQuNCw1Mi4yMkgyYTIsMiwwLDAsMSwwLTRIOTQuNGEyLDIsMCwwLDEsMCw0WiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTY2LjI4LDY0LjI3SDJhMiwyLDAsMCwxLDAtNEg2Ni4yOGEyLDIsMCwxLDEsMCw0WiIvPjwvZz48L2c+PC9zdmc+");


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

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map