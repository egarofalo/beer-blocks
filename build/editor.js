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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _icons_iso_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/iso.svg */ "./src/icons/iso.svg");




(function () {
  wp.blocks.updateCategory("beer-blocks", {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: _icons_iso_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
      alt: "Beer Blocks",
      style: {
        width: "25px",
        height: "auto"
      }
    })
  });
})();

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/icons/iso.svg":
/*!***************************!*\
  !*** ./src/icons/iso.svg ***!
  \***************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgIso; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _defs, _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgIso(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 79.01 97.97"
  }, props), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", null, ".iso_svg__cls-1{fill:#f6a328}.iso_svg__cls-3{fill:#1d1d1b}.iso_svg__cls-4{fill:#fff}.iso_svg__cls-5{fill:#f3f4d2}"))), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "iso_svg__Capa_2",
    "data-name": "Capa 2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    id: "iso_svg__Capa_1-2",
    "data-name": "Capa 1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "iso_svg__cls-1",
    d: "M18.3 98A10.18 10.18 0 018.13 87.8v-.36a10.18 10.18 0 017.73-9.87l.91-13.75A19.42 19.42 0 010 44.6 19.22 19.22 0 016.65 30a11.1 11.1 0 01-.28-2.51 11.51 11.51 0 016.25-10.23 14.05 14.05 0 01-.09-1.72 15.52 15.52 0 0129-7.78 11.11 11.11 0 011.83-.15 11.5 11.5 0 017.79 3.06 12.18 12.18 0 012.26-.21 11.89 11.89 0 0111.52 14.66l.46 6.88h3.45A10.18 10.18 0 0179 42.2v18.35a10.18 10.18 0 01-10.16 10.17H68l.46 6.92a10.19 10.19 0 017.45 9.8v.36A10.18 10.18 0 0165.7 98z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M68.84 37.12h-8.21l-.83-12.55a6.8 6.8 0 00-6.43-9 6.74 6.74 0 00-4 1.35 6.41 6.41 0 00-10.86-2 10.44 10.44 0 10-19.16 6.32 6.83 6.83 0 00-1.44-.16 6.4 6.4 0 00-4.76 10.69 14.3 14.3 0 006.25 27.14 13.74 13.74 0 002.81-.28v.28l-1.57 23.45H18.3a5.08 5.08 0 00-5.09 5.08v.36a5.09 5.09 0 005.09 5.09h47.4a5.09 5.09 0 005.09-5.09v-.36a5.08 5.08 0 00-5.09-5.08h-2.07l-1.11-16.72h6.32a5.08 5.08 0 005.08-5.09V42.2a5.07 5.07 0 00-5.08-5.08z",
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "iso_svg__cls-3",
    d: "M68.84 67.67H57.77V63.6h11.07a3.06 3.06 0 003-3.05V42.2a3.06 3.06 0 00-3-3.05H55.16v-4.07h13.68A7.14 7.14 0 0176 42.2v18.35a7.13 7.13 0 01-7.16 7.12z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "iso_svg__cls-3",
    d: "M63.63 82.36h-43l1.55-23.45a23 23 0 018.57-4.22 29.69 29.69 0 0111.35-.77c12.53 1.48 18.5-13.57 18.67-14z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "iso_svg__cls-1",
    d: "M60.82 39.88c-.17.45-6.14 15.5-18.67 14a29.69 29.69 0 00-11.35.77 23 23 0 00-8.57 4.22l2.52-37.84h34.81z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
    className: "iso_svg__cls-3",
    x: 13.21,
    y: 82.36,
    width: 57.57,
    height: 10.53,
    rx: 5.09
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "iso_svg__cls-4",
    d: "M33.71 44.6A14.31 14.31 0 1119.4 30.3a14.31 14.31 0 0114.31 14.3z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "iso_svg__cls-4",
    d: "M24.28 27.48a6.41 6.41 0 11-6.41-6.41 6.41 6.41 0 016.41 6.41zM49.73 19.1a6.41 6.41 0 11-6.41-6.41 6.41 6.41 0 016.41 6.41z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "iso_svg__cls-4",
    d: "M60.18 22.34a6.81 6.81 0 11-6.81-6.81 6.81 6.81 0 016.81 6.81z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "iso_svg__cls-4",
    d: "M47.54 26.65A7.55 7.55 0 1140 19.1a7.55 7.55 0 017.54 7.55z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "iso_svg__cls-4",
    d: "M35.25 30.3a7.19 7.19 0 11-7.19-7.19 7.19 7.19 0 017.19 7.19z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "iso_svg__cls-4",
    d: "M38.51 15.53A10.45 10.45 0 1128.06 5.09a10.45 10.45 0 0110.45 10.44z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    className: "iso_svg__cls-5",
    d: "M46.57 66.27a4 4 0 11-4-4 4 4 0 014 4zM53.73 52.32a3.1 3.1 0 11-3.1-3.09 3.1 3.1 0 013.1 3.09zM42.5 42.86a1.74 1.74 0 11-1.74-1.74 1.74 1.74 0 011.74 1.74z"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3OS4wMSA5Ny45NyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmNmEzMjg7fS5jbHMtMntmaWxsOm5vbmU7fS5jbHMtM3tmaWxsOiMxZDFkMWI7fS5jbHMtNHtmaWxsOiNmZmY7fS5jbHMtNXtmaWxsOiNmM2Y0ZDI7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJDYXBhXzIiIGRhdGEtbmFtZT0iQ2FwYSAyIj48ZyBpZD0iQ2FwYV8xLTIiIGRhdGEtbmFtZT0iQ2FwYSAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xOC4zLDk4QTEwLjE4LDEwLjE4LDAsMCwxLDguMTMsODcuOHYtLjM2YTEwLjE4LDEwLjE4LDAsMCwxLDcuNzMtOS44N2wuOTEtMTMuNzVBMTkuNDIsMTkuNDIsMCwwLDEsMCw0NC42LDE5LjIyLDE5LjIyLDAsMCwxLDYuNjUsMzBhMTEuMSwxMS4xLDAsMCwxLS4yOC0yLjUxLDExLjUxLDExLjUxLDAsMCwxLDYuMjUtMTAuMjMsMTQuMDUsMTQuMDUsMCwwLDEtLjA5LTEuNzIsMTUuNTIsMTUuNTIsMCwwLDEsMjktNy43OCwxMS4xMSwxMS4xMSwwLDAsMSwxLjgzLS4xNSwxMS41LDExLjUsMCwwLDEsNy43OSwzLjA2LDEyLjE4LDEyLjE4LDAsMCwxLDIuMjYtLjIxQTExLjg5LDExLjg5LDAsMCwxLDY0LjkzLDI1LjEyTDY1LjM5LDMyaDMuNDVBMTAuMTgsMTAuMTgsMCwwLDEsNzksNDIuMlY2MC41NUExMC4xOCwxMC4xOCwwLDAsMSw2OC44NCw3MC43Mkg2OGwuNDYsNi45MmExMC4xOSwxMC4xOSwwLDAsMSw3LjQ1LDkuOHYuMzZBMTAuMTgsMTAuMTgsMCwwLDEsNjUuNyw5OFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik02OC44NCwzNy4xMkg2MC42M0w1OS44LDI0LjU3YTYuOCw2LjgsMCwwLDAtNi40My05LDYuNzQsNi43NCwwLDAsMC00LDEuMzUsNi40MSw2LjQxLDAsMCwwLTEwLjg2LTIsMTAuNDQsMTAuNDQsMCwxLDAtMTkuMTYsNi4zMiw2LjgzLDYuODMsMCwwLDAtMS40NC0uMTYsNi40LDYuNCwwLDAsMC00Ljc2LDEwLjY5QTE0LjMsMTQuMywwLDAsMCwxOS40LDU4LjkxYTEzLjc0LDEzLjc0LDAsMCwwLDIuODEtLjI4bDAsLjI4TDIwLjY0LDgyLjM2SDE4LjNhNS4wOCw1LjA4LDAsMCwwLTUuMDksNS4wOHYuMzZhNS4wOSw1LjA5LDAsMCwwLDUuMDksNS4wOUg2NS43YTUuMDksNS4wOSwwLDAsMCw1LjA5LTUuMDl2LS4zNmE1LjA4LDUuMDgsMCwwLDAtNS4wOS01LjA4SDYzLjYzTDYyLjUyLDY1LjY0aDYuMzJhNS4wOCw1LjA4LDAsMCwwLDUuMDgtNS4wOVY0Mi4yQTUuMDcsNS4wNywwLDAsMCw2OC44NCwzNy4xMloiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik02OC44NCw2Ny42N0g1Ny43N1Y2My42SDY4Ljg0YTMuMDYsMy4wNiwwLDAsMCwzLTMuMDVWNDIuMmEzLjA2LDMuMDYsMCwwLDAtMy0zLjA1SDU1LjE2VjM1LjA4SDY4Ljg0QTcuMTQsNy4xNCwwLDAsMSw3Niw0Mi4yVjYwLjU1QTcuMTMsNy4xMywwLDAsMSw2OC44NCw2Ny42N1oiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik02My42Myw4Mi4zNmgtNDNsMS41NS0yMy40NWgwYTIzLDIzLDAsMCwxLDguNTctNC4yMiwyOS42OSwyOS42OSwwLDAsMSwxMS4zNS0uNzdjMTIuNTMsMS40OCwxOC41LTEzLjU3LDE4LjY3LTE0aDBaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjAuODIsMzkuODhoMGMtLjE3LjQ1LTYuMTQsMTUuNS0xOC42NywxNGEyOS42OSwyOS42OSwwLDAsMC0xMS4zNS43NywyMywyMywwLDAsMC04LjU3LDQuMjJoMGwyLjUyLTM3Ljg0SDU5LjU2WiIvPjxyZWN0IGNsYXNzPSJjbHMtMyIgeD0iMTMuMjEiIHk9IjgyLjM2IiB3aWR0aD0iNTcuNTciIGhlaWdodD0iMTAuNTMiIHJ4PSI1LjA5Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMzMuNzEsNDQuNkExNC4zMSwxNC4zMSwwLDEsMSwxOS40LDMwLjMsMTQuMzEsMTQuMzEsMCwwLDEsMzMuNzEsNDQuNloiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0yNC4yOCwyNy40OGE2LjQxLDYuNDEsMCwxLDEtNi40MS02LjQxQTYuNDEsNi40MSwwLDAsMSwyNC4yOCwyNy40OFoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik00OS43MywxOS4xYTYuNDEsNi40MSwwLDEsMS02LjQxLTYuNDFBNi40MSw2LjQxLDAsMCwxLDQ5LjczLDE5LjFaIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNjAuMTgsMjIuMzRhNi44MSw2LjgxLDAsMSwxLTYuODEtNi44MUE2LjgxLDYuODEsMCwwLDEsNjAuMTgsMjIuMzRaIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNNDcuNTQsMjYuNjVBNy41NSw3LjU1LDAsMSwxLDQwLDE5LjEsNy41NSw3LjU1LDAsMCwxLDQ3LjU0LDI2LjY1WiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTM1LjI1LDMwLjNhNy4xOSw3LjE5LDAsMSwxLTcuMTktNy4xOUE3LjE5LDcuMTksMCwwLDEsMzUuMjUsMzAuM1oiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0zOC41MSwxNS41M0ExMC40NSwxMC40NSwwLDEsMSwyOC4wNiw1LjA5LDEwLjQ1LDEwLjQ1LDAsMCwxLDM4LjUxLDE1LjUzWiIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTQ2LjU3LDY2LjI3YTQsNCwwLDEsMS00LTRBNCw0LDAsMCwxLDQ2LjU3LDY2LjI3WiIvPjxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTUzLjczLDUyLjMyYTMuMSwzLjEsMCwxLDEtMy4xLTMuMDlBMy4xLDMuMSwwLDAsMSw1My43Myw1Mi4zMloiLz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik00Mi41LDQyLjg2YTEuNzQsMS43NCwwLDEsMS0xLjc0LTEuNzRBMS43NCwxLjc0LDAsMCwxLDQyLjUsNDIuODZaIi8+PC9nPjwvZz48L3N2Zz4=");


/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

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
//# sourceMappingURL=editor.js.map