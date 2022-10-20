/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/sidebar.js":
/*!**********************************!*\
  !*** ./src/functions/sidebar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dropMenu\": () => (/* binding */ dropMenu),\n/* harmony export */   \"setDefaultState\": () => (/* binding */ setDefaultState)\n/* harmony export */ });\n/* harmony import */ var _images_arrow_right_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/arrow_right.png */ \"./src/images/arrow_right.png\");\n/* harmony import */ var _images_arrow_down_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/arrow_down.png */ \"./src/images/arrow_down.png\");\n\r\n\r\n\r\nconst dropMenu = () => {\r\n\r\n    const settings = document.querySelector('#settings');\r\n    const projects = document.querySelector('#projects');\r\n\r\n    const arrowTurn = (e) => {\r\n\r\n        var parent = e.target;\r\n    \r\n        while (parent.className !== 'main-btn') {\r\n            parent = parent.parentElement;\r\n        };\r\n        \r\n        var arrow_img = parent.querySelector('img');\r\n    \r\n        if (parent.parentElement.slot === 'OFF') {\r\n            arrow_img.src = _images_arrow_down_png__WEBPACK_IMPORTED_MODULE_1__;\r\n        } else arrow_img.src = _images_arrow_right_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    \r\n        if (parent.value === 'settings') {\r\n            drop.showSettings();\r\n        };\r\n\r\n        if (parent.value === 'projects') {\r\n            drop.showProjects();\r\n        };\r\n    };\r\n\r\n    var settings_drop = document.createElement('div');\r\n    var option1 = document.createElement('button');\r\n    option1.textContent = 'Option 1';\r\n    settings_drop.appendChild(option1);\r\n\r\n    const showSettings = () => {\r\n        if (settings.slot === 'ON') {\r\n            settings.removeChild(settings_drop);\r\n            settings.slot = 'OFF';\r\n        } else {\r\n            settings.appendChild(settings_drop);\r\n            settings.slot = 'ON';\r\n        }\r\n    };\r\n\r\n    const showProjects = () => {\r\n\r\n    };\r\n\r\n    return {\r\n        arrowTurn,\r\n        showSettings,\r\n        showProjects\r\n    };\r\n};\r\n\r\nconst drop = dropMenu();\r\n\r\nconst setDefaultState = (() => {\r\n\r\n    const btn = document.querySelectorAll('.main-btn');\r\n    const settings = document.querySelector('#settings');\r\n    const projects = document.querySelector('#projects');\r\n\r\n    btn.forEach((e) => {\r\n        e.addEventListener('mousedown', (e) => {\r\n            drop.arrowTurn(e);\r\n        });\r\n        var arrow_div = e.querySelector('.arrow');\r\n        var arrow_img = new Image();\r\n        arrow_img.src = _images_arrow_right_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n        arrow_div.appendChild(arrow_img);\r\n\r\n        settings.slot = 'OFF';\r\n        projects.slot = 'OFF';\r\n    });\r\n})();\n\n//# sourceURL=webpack://to_do_list/./src/functions/sidebar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/sidebar */ \"./src/functions/sidebar.js\");\n\n\n//# sourceURL=webpack://to_do_list/./src/index.js?");

/***/ }),

/***/ "./src/images/arrow_down.png":
/*!***********************************!*\
  !*** ./src/images/arrow_down.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7f02838211aa34897f3a.png\";\n\n//# sourceURL=webpack://to_do_list/./src/images/arrow_down.png?");

/***/ }),

/***/ "./src/images/arrow_right.png":
/*!************************************!*\
  !*** ./src/images/arrow_right.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bd030cf92d3281723bfb.png\";\n\n//# sourceURL=webpack://to_do_list/./src/images/arrow_right.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;