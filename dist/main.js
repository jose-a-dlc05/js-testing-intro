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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n\tgenerateText,\n\tcreateElement,\n\tvalidateInput,\n\tcheckAndGenerate,\n} = __webpack_require__(/*! ./util */ \"./util.js\");\n\nconst initApp = () => {\n\t// Initializes the app, registers the button click listener\n\tconst newUserButton = document.querySelector('#btnAddUser');\n\tnewUserButton.addEventListener('click', addUser);\n};\n\nconst addUser = () => {\n\t// Fetches the user input, creates a new HTML element based on it\n\t// and appends the element to the DOM\n\tconst newUserNameInput = document.querySelector('input#name');\n\tconst newUserAgeInput = document.querySelector('input#age');\n\n\tconst outputText = checkAndGenerate(\n\t\tnewUserNameInput.value,\n\t\tnewUserAgeInput.value\n\t);\n\n\tif (!outputText) {\n\t\treturn;\n\t}\n\n\tconst userList = document.querySelector('.user-list');\n\n\tconst element = createElement('li', outputText, 'user-item');\n\tuserList.appendChild(element);\n};\n\n// Start the app!\ninitApp();\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.generateText = (name, age) => {\n\t// Returns output text\n\treturn `${name} (${age} years old)`;\n};\n\nexports.createElement = (type, text, className) => {\n\t// Creates a new HTML element and returns it\n\tconst newElement = document.createElement(type);\n\tnewElement.classList.add(className);\n\tnewElement.textContent = text;\n\treturn newElement;\n};\n\nexports.validateInput = (text, notEmpty, isNumber) => {\n\t// Validate user input with two pre-defined rules\n\tif (!text) {\n\t\treturn false;\n\t}\n\tif (notEmpty && text.trim().length === 0) {\n\t\treturn false;\n\t}\n\tif (isNumber && +text === NaN) {\n\t\treturn false;\n\t}\n\treturn true;\n};\n\nexports.checkAndGenerate = (name, age) => {\n\tif (\n\t\t!this.validateInput(name, true, false) ||\n\t\t!this.validateInput(age, false, true)\n\t) {\n\t\treturn;\n\t}\n\n\treturn this.generateText(name, age);\n};\n\n\n//# sourceURL=webpack:///./util.js?");

/***/ })

/******/ });