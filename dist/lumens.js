var Lumens =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/lumens.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/lumens.js":
/*!**********************!*\
  !*** ./js/lumens.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/from */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/parse-int */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-interval */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/set-interval.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/@babel/runtime-corejs3/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar Lumens =\n/*#__PURE__*/\nfunction () {\n  function Lumens(selector, options, showWarnings) {\n    _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Lumens);\n\n    this.slider = typeof selector === \"string\" ? document.querySelector(selector) : selector; //Prevent JS from breaking if there is no element found with the given selector\n\n    if (!this.slider) {\n      this.warn(\"No element found using the given selector: \" + selector);\n      return false;\n    }\n\n    this.showWarnings = showWarnings;\n    this.slideAmount = this.slider.children.length; //OPTIONS\n\n    this.setDefaultSettings();\n    this.updateSettings(options);\n    this.initialSettings = options;\n    this.currentBreakpointIndex = undefined;\n    this.oldBreakpointIndex = undefined;\n    this.updateSettingsByBreakpoint();\n    this.slider.style.overflow = \"hidden\";\n    this.slider.style.height = \"0px\"; //CALCULATIONS\n\n    this.calculateWidths(); //Create and fill track\n\n    this.createAndAddTrack();\n    this.enableTransition();\n    this.setupSlides();\n    this.initializeDragging();\n    this.addResizeEventListener();\n    this.preventClickOnDrag();\n    this.initAutoplay();\n    this.slider.style.height = \"auto\";\n  }\n  /**\r\n   * Creates the track element and formats it correctly\r\n   * @returns {void}\r\n   */\n\n\n  _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Lumens, [{\n    key: \"createAndAddTrack\",\n    value: function createAndAddTrack() {\n      this.track = document.createElement(\"div\");\n      this.track.className = \"lumens__track\";\n      this.track.style.width = this.sliderWidth + \"px\";\n      this.track.style.overflow = \"hidden\";\n      this.setTransform(this.startAtPage * this.slideWidth * -1);\n      this.currentPage = this.startAtPage;\n      this.slider.append(this.track);\n    }\n    /**\r\n     * Will set the resize event listener and set the\r\n     * widths for all elements again\r\n     * @returns {void}\r\n     */\n\n  }, {\n    key: \"addResizeEventListener\",\n    value: function addResizeEventListener() {\n      var _this = this;\n\n      window.addEventListener(\"resize\", function () {\n        _this.updateSettingsByBreakpoint();\n\n        _this.calculateWidths();\n\n        _this.reinitWidths();\n\n        if (_this.getCurrentPage() > _this.slideAmount - _this.slidesPerPage) {\n          _this.gotoPage(_this.slideAmount - _this.slidesPerPage, false);\n        }\n      });\n    }\n    /**\r\n     * Initializes an autoplay depending on the settings\r\n     * @returns {void}\r\n     */\n\n  }, {\n    key: \"initAutoplay\",\n    value: function initAutoplay() {\n      var _this2 = this;\n\n      clearInterval(this.autoplayFunction);\n      this.autoplayFunction = undefined;\n\n      if (!this.autoplay) {\n        return false;\n      }\n\n      this.autoplayFunction = _babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_4___default()(function () {\n        _this2.enableTransition();\n\n        _this2.gotoNext();\n      }, this.autoplay);\n    }\n    /**\r\n     * Will check for breakpoints set in the settings\r\n     * and update the settings accordingly\r\n     * @returns {void}\r\n     */\n\n  }, {\n    key: \"updateSettingsByBreakpoint\",\n    value: function updateSettingsByBreakpoint() {\n      this.currentBreakpointIndex = undefined;\n\n      for (var i = 0; i < this.responsive.length; i++) {\n        var breakpoint = this.responsive[i];\n\n        if (window.innerWidth < breakpoint.breakpoint) {\n          this.currentBreakpointIndex = i;\n        }\n      }\n\n      if (this.currentBreakpointIndex !== undefined) {\n        this.updateSettings(this.initialSettings);\n        this.updateSettings(this.responsive[this.currentBreakpointIndex].settings);\n      } else {\n        this.updateSettings(this.initialSettings);\n      }\n\n      if (this.currentBreakpointIndex != this.oldBreakpointIndex) {\n        this.oldBreakpointIndex = this.currentBreakpointIndex;\n        this.resizeCallback();\n        this.initAutoplay();\n      }\n    }\n    /**\r\n     * Initializes the events that allow the user\r\n     * to drag the carousel to change slides.\r\n     * @returns {void}\r\n     */\n\n  }, {\n    key: \"initializeDragging\",\n    value: function initializeDragging() {\n      var _this3 = this;\n\n      this.slider.addEventListener(\"mousedown\", function (e) {\n        if (!_this3.draggable) {\n          _this3.warn(\"Dragging is disabled\");\n\n          return false;\n        }\n\n        if (e.button !== _this3.mouseButton) {\n          _this3.warn(\"Dragging is not possible with this mouse-button\");\n\n          return false;\n        }\n\n        e.preventDefault();\n        clearInterval(_this3.autoplayFunction);\n        _this3.isDragging = true;\n        _this3.track.style.transition = \"all 0ms \".concat(_this3.easing);\n        _this3.xDragStart = e.pageX;\n      });\n      document.addEventListener(\"mouseup\", function () {\n        if (!_this3.isDragging) {\n          return false;\n        }\n\n        _this3.enableTransition();\n\n        _this3.xOffset += _this3.xDragDelta;\n        var currentPage = _this3.currentPage;\n\n        if (_this3.xOffset > 0) {\n          var changing = currentPage != 0;\n\n          _this3.gotoPage(0, changing);\n        } else if (Math.abs(_this3.xOffset) + _this3.slidesPerPage * (_this3.slideWidth + _this3.margin * 2) >= _this3.sliderWidth) {\n          var changing = currentPage < _this3.slideAmount - _this3.slidesPerPage;\n\n          _this3.gotoPage(_this3.slideAmount - _this3.slidesPerPage, changing);\n        } else {\n          _this3.gotoPage();\n        }\n\n        _this3.initAutoplay();\n\n        _this3.isDragging = false;\n      });\n      document.addEventListener(\"mousemove\", function (e) {\n        e.preventDefault();\n\n        if (!_this3.isDragging) {\n          return false;\n        }\n\n        _this3.xDragDelta = e.pageX - _this3.xDragStart;\n\n        _this3.setTransform(_this3.xOffset + _this3.xDragDelta);\n      });\n    }\n    /**\r\n     * Sets the translate3d-rule for the track to the given amount\r\n     * @param {number} value The amount in Pixel the transfrom should be set\r\n     * @returns {void}\r\n     */\n\n  }, {\n    key: \"setTransform\",\n    value: function setTransform(value) {\n      this.track.style.msTransform = \"translate3d(\".concat(value, \"px, 0, 0)\");\n      this.track.style.webkitTransform = \"translate3d(\".concat(value, \"px, 0, 0)\");\n      this.track.style.MozTransform = \"translate3d(\".concat(value, \"px, 0, 0)\");\n      this.track.style.OTransform = \"translate3d(\".concat(value, \"px, 0, 0)\");\n      this.track.style.transform = \"translate3d(\".concat(value, \"px, 0, 0)\");\n    }\n    /**\r\n     * Will configure the initial state of the slides\r\n     * and place them inside the track-element.\r\n     * @returns {void}\r\n     */\n\n  }, {\n    key: \"setupSlides\",\n    value: function setupSlides() {\n      for (var i = 0; i < this.slideAmount; i++) {\n        var slide = this.slider.children[0];\n        slide.className += \" lumens__slide\";\n        slide.style.width = this.slideWidth - this.margin * 2 + \"px\";\n        slide.style.margin = \"0 \" + this.margin + \"px\";\n        slide.style.float = \"left\";\n        this.track.append(slide);\n      }\n\n      this.slides = this.track.children;\n    }\n    /**\r\n     * Scrolls the slider to a certain page. If page is undefined\r\n     * it will scroll to the nearest page of the current offset.\r\n     * (This is what happens when you release the mouse button while dragging)\r\n     * @param {Number} page The page to which the slider should scroll\r\n     * @param {Boolean} triggerChange If set to false, the change-callback will not be called\r\n     */\n\n  }, {\n    key: \"gotoPage\",\n    value: function gotoPage(page, triggerChange) {\n      triggerChange = triggerChange === undefined ? true : triggerChange;\n      page = page === undefined ? this.getCurrentPage() : page;\n\n      if (page < 0 || page > this.slideAmount - this.slidesPerPage) {\n        triggerChange = false;\n      }\n\n      page = page > this.slideAmount - this.slidesPerPage ? this.slideAmount - this.slidesPerPage : page;\n      page = page < 0 ? 0 : page;\n      var offset = page * this.slideWidth * -1;\n      this.setTransform(offset);\n      this.xOffset = offset;\n      this.currentPage = page;\n\n      if (triggerChange) {\n        this.changeCallback();\n      }\n    }\n    /**\r\n     * Will go to the next page\r\n     * @returns {void}\r\n     */\n\n  }, {\n    key: \"gotoNext\",\n    value: function gotoNext() {\n      this.enableTransition();\n      var page = this.currentPage >= this.slideAmount - this.slidesPerPage ? 0 : this.currentPage + 1;\n      this.gotoPage(page);\n    }\n    /**\r\n     * Will go to the previous page\r\n     * @returns {void}\r\n     */\n\n  }, {\n    key: \"gotoPrev\",\n    value: function gotoPrev() {\n      this.enableTransition();\n      var page = this.currentPage <= 0 ? this.slideAmount : this.currentPage - 1;\n      this.gotoPage(page);\n    }\n    /**\r\n     * Sets the callback for changing slides\r\n     * @param {function} callback Will be called when the slides change\r\n     */\n\n  }, {\n    key: \"changed\",\n    value: function changed(callback) {\n      this.changeCallback = callback;\n    }\n    /**\r\n     * Sets the callback for changing breakpoints\r\n     * @param {function} callback This will be called, when another breakpoint is reached\r\n     */\n\n  }, {\n    key: \"resize\",\n    value: function resize(callback) {\n      this.resizeCallback = callback;\n    }\n    /**\r\n     * Returns the current page according to the offset.\r\n     * @returns {Number} The current page the slider is on\r\n     */\n\n  }, {\n    key: \"getCurrentPage\",\n    value: function getCurrentPage() {\n      return Math.abs(Math.round(this.xOffset / this.slideWidth));\n    }\n    /**\r\n     * Sets the settings to the default values. This is called\r\n     * on initialisation and can be used to reset all settings.\r\n     * @returns {void}\r\n     */\n\n  }, {\n    key: \"setDefaultSettings\",\n    value: function setDefaultSettings() {\n      this.slidesPerPage = 1;\n      this.margin = 0;\n      this.duration = 200;\n      this.easing = \"ease-out\";\n      this.startIndex = 0;\n      this.autoplay = false;\n      this.autoplayFunction = undefined;\n      this.draggable = true;\n      this.threshold = 20;\n      this.loop = false;\n      this.mouseButton = 0;\n      this.preventClickDistance = 100;\n      this.responsive = [];\n      this.noOuterMargin = false;\n      this.startAtPage = 0;\n\n      this.changeCallback = function () {};\n\n      this.resizeCallback = function () {};\n\n      this.isDragging = false;\n      this.xDragStart = 0;\n      this.xDragDelta = 0;\n      this.xOffset = 0;\n      this.currentPage = 0;\n    }\n    /**\r\n     * Overrites default settings with custom ones.\r\n     * @param {Object} options - Optional settings object.\r\n     * @returns {void}\r\n     */\n\n  }, {\n    key: \"updateSettings\",\n    value: function updateSettings(options) {\n      for (var key in options) {\n        if (options.hasOwnProperty(key)) {\n          this[key] = options[key];\n        }\n      }\n    }\n    /**\r\n     * Calculates the widths of Slides, Track and Container\r\n     * used on first init and resizing\r\n     * @returns {void}\r\n     */\n\n  }, {\n    key: \"calculateWidths\",\n    value: function calculateWidths() {\n      this.sliderPadding = _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(window.getComputedStyle(this.slider, null).getPropertyValue(\"padding-left\"));\n      this.sliderVisibleWidth = this.slider.offsetWidth - this.sliderPadding * 2;\n      this.slideWidth = this.sliderVisibleWidth / this.slidesPerPage;\n      this.sliderWidth = this.slideWidth * this.slideAmount;\n\n      if (this.noOuterMargin) {\n        this.sliderVisibleWidth += this.margin * 2;\n        this.slider.style.position = \"relative\";\n        this.slider.style.right = this.margin + \"px\";\n      }\n    }\n    /**\r\n     * Recalculates the width of slides and track and sets\r\n     * them again. This is used after changing the settings\r\n     * or resizing for example.\r\n     * @returns {void}\r\n     */\n\n  }, {\n    key: \"reinitWidths\",\n    value: function reinitWidths() {\n      var _context,\n          _this4 = this;\n\n      this.calculateWidths();\n      this.track.style.width = this.sliderWidth + \"px\";\n\n      _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context = _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_1___default()(this.slides)).call(_context, function (slide) {\n        slide.style.width = _this4.slideWidth - _this4.margin * 2 + \"px\";\n        slide.style.margin = \"0 \".concat(_this4.margin, \"px\");\n      });\n\n      this.disableTransition();\n      this.gotoPage(undefined, false);\n    }\n    /**\r\n     * Makes sure all click events on slides are being\r\n     * prevented if the user is dragging the carousel\r\n     * @returns {void}\r\n     */\n\n  }, {\n    key: \"preventClickOnDrag\",\n    value: function preventClickOnDrag() {\n      var _this5 = this;\n\n      document.addEventListener(\"click\", function (e) {\n        if (Math.abs(_this5.xDragDelta) > _this5.preventClickDistance) {\n          e.stopPropagation();\n          e.preventDefault();\n          _this5.xDragDelta = 0;\n        }\n      }, true);\n    }\n    /**\r\n     * Enables the transition on the track-element\r\n     * @returns {void}\r\n     */\n\n  }, {\n    key: \"enableTransition\",\n    value: function enableTransition() {\n      var _context2;\n\n      this.track.style.transition = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = \"all \".concat(this.duration, \"ms \")).call(_context2, this.easing);\n    }\n    /**\r\n     * Disables the transition on the track-element\r\n     * @returns {void}\r\n     */\n\n  }, {\n    key: \"disableTransition\",\n    value: function disableTransition() {\n      this.track.style.transition = \"all 0ms \".concat(this.easing);\n    }\n    /**\r\n     * Will output a warning in the console as long as\r\n     * warning messages are enabled manually.\r\n     * @param {String} warning The message the user should be warned about\r\n     * @returns {void}\r\n     */\n\n  }, {\n    key: \"warn\",\n    value: function warn(warning) {\n      if (this.showWarnings) {\n        console.warn(\"Lumens: \" + warning);\n      }\n    }\n  }]);\n\n  return Lumens;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lumens);\n\n//# sourceURL=webpack://Lumens/./js/lumens.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/array/from */ \"./node_modules/core-js-pure/stable/array/from.js\");\n\n//# sourceURL=webpack://Lumens/./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/concat */ \"./node_modules/core-js-pure/stable/instance/concat.js\");\n\n//# sourceURL=webpack://Lumens/./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/for-each */ \"./node_modules/core-js-pure/stable/instance/for-each.js\");\n\n//# sourceURL=webpack://Lumens/./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/parse-int */ \"./node_modules/core-js-pure/stable/parse-int.js\");\n\n//# sourceURL=webpack://Lumens/./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/set-interval.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/set-interval.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/set-interval */ \"./node_modules/core-js-pure/stable/set-interval.js\");\n\n//# sourceURL=webpack://Lumens/./node_modules/@babel/runtime-corejs3/core-js-stable/set-interval.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/define-property */ \"./node_modules/core-js-pure/features/object/define-property.js\");\n\n//# sourceURL=webpack://Lumens/./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://Lumens/./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n\n    _Object$defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack://Lumens/./node_modules/@babel/runtime-corejs3/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/from.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/from.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\n__webpack_require__(/*! ../../modules/es.array.from */ \"./node_modules/core-js-pure/modules/es.array.from.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Array.from;\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/es/array/from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/concat.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/concat.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.concat */ \"./node_modules/core-js-pure/modules/es.array.concat.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').concat;\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/es/array/virtual/concat.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/for-each.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/for-each.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.for-each */ \"./node_modules/core-js-pure/modules/es.array.for-each.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').forEach;\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/es/array/virtual/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var concat = __webpack_require__(/*! ../array/virtual/concat */ \"./node_modules/core-js-pure/es/array/virtual/concat.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.concat;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.concat) ? concat : own;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/es/instance/concat.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/define-property.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/define-property.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.define-property */ \"./node_modules/core-js-pure/modules/es.object.define-property.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nvar Object = path.Object;\n\nvar defineProperty = module.exports = function defineProperty(it, key, desc) {\n  return Object.defineProperty(it, key, desc);\n};\n\nif (Object.defineProperty.sham) defineProperty.sham = true;\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/es/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/parse-int.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js-pure/es/parse-int.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es.parse-int */ \"./node_modules/core-js-pure/modules/es.parse-int.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.parseInt;\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/es/parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/object/define-property */ \"./node_modules/core-js-pure/es/object/define-property.js\");\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/features/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-function.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-function.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/a-function.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-possible-prototype.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-possible-prototype.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it) && it !== null) {\n    throw TypeError(\"Can't set \" + String(it) + ' as a prototype');\n  } return it;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/a-possible-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/add-to-unscopables.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/add-to-unscopables.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-for-each.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-for-each.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js-pure/internals/array-iteration.js\").forEach;\nvar sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ \"./node_modules/core-js-pure/internals/sloppy-array-method.js\");\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\nmodule.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n} : [].forEach;\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/array-for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"./node_modules/core-js-pure/internals/bind-context.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ \"./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js-pure/internals/is-array-iterator-method.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js-pure/internals/create-property.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js-pure/internals/get-iterator-method.js\");\n\n// `Array.from` method implementation\n// https://tc39.github.io/ecma262/#sec-array.from\nmodule.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {\n  var O = toObject(arrayLike);\n  var C = typeof this == 'function' ? this : Array;\n  var argumentsLength = arguments.length;\n  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;\n  var mapping = mapfn !== undefined;\n  var index = 0;\n  var iteratorMethod = getIteratorMethod(O);\n  var length, result, step, iterator;\n  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);\n  // if the target is not iterable or it's an array with the default iterator - use a simple case\n  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {\n    iterator = iteratorMethod.call(O);\n    result = new C();\n    for (;!(step = iterator.next()).done; index++) {\n      createProperty(result, index, mapping\n        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)\n        : step.value\n      );\n    }\n  } else {\n    length = toLength(O.length);\n    result = new C(length);\n    for (;length > index; index++) {\n      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);\n    }\n  }\n  result.length = index;\n  return result;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/array-from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-includes.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-includes.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js-pure/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-iteration.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-iteration.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/bind-context */ \"./node_modules/core-js-pure/internals/bind-context.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js-pure/internals/array-species-create.js\");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else if (IS_EVERY) return false;  // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6)\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/array-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-method-has-species-support.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-has-species-support.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  return !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n    constructor[SPECIES] = function () {\n      return { foo: 1 };\n    };\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-species-create.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-species-create.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.github.io/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/bind-context.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/bind-context.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js-pure/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\n\n// call something on iterator step with safe closing on error\nmodule.exports = function (iterator, fn, value, ENTRIES) {\n  try {\n    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (error) {\n    var returnMethod = iterator['return'];\n    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));\n    throw error;\n  }\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/check-correctness-of-iteration.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/check-correctness-of-iteration.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var called = 0;\n  var iteratorWithReturn = {\n    next: function () {\n      return { done: !!called++ };\n    },\n    'return': function () {\n      SAFE_CLOSING = true;\n    }\n  };\n  iteratorWithReturn[ITERATOR] = function () {\n    return this;\n  };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(iteratorWithReturn, function () { throw 2; });\n} catch (error) { /* empty */ }\n\nmodule.exports = function (exec, SKIP_CLOSING) {\n  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;\n  var ITERATION_SUPPORT = false;\n  try {\n    var object = {};\n    object[ITERATOR] = function () {\n      return {\n        next: function () {\n          return { done: ITERATION_SUPPORT = true };\n        }\n      };\n    };\n    exec(object);\n  } catch (error) { /* empty */ }\n  return ITERATION_SUPPORT;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/check-correctness-of-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof-raw.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof-raw.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/classof.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/correct-prototype-getter.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/correct-prototype-getter.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() { /* empty */ }\n  F.prototype.constructor = null;\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-iterator-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-iterator-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js-pure/internals/iterators-core.js\").IteratorPrototype;\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js-pure/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (IteratorConstructor, NAME, next) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/create-iterator-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property-descriptor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPrimitive(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/create-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"./node_modules/core-js-pure/internals/create-iterator-constructor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js-pure/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js-pure/internals/hide.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js-pure/internals/redefine.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js-pure/internals/iterators-core.js\");\n\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];\n    switch (KIND) {\n      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };\n      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };\n      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };\n    } return function () { return new IteratorConstructor(this); };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR]\n    || IterablePrototype['@@iterator']\n    || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY;\n\n  // fix native\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {\n          hide(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      }\n      // Set @@toStringTag to native iterators\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  }\n\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    INCORRECT_VALUES_NAME = true;\n    defaultIterator = function values() { return nativeIterator.call(this); };\n  }\n\n  // define iterator\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    hide(IterablePrototype, ITERATOR, defaultIterator);\n  }\n  Iterators[NAME] = defaultIterator;\n\n  // export additional methods\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        redefine(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);\n  }\n\n  return methods;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/define-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/descriptors.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/descriptors.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/document-create-element.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-create-element.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/dom-iterables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/dom-iterables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/entry-virtual.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/entry-virtual.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = function (CONSTRUCTOR) {\n  return path[CONSTRUCTOR + 'Prototype'];\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/entry-virtual.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/enum-bug-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/enum-bug-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/export.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/export.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f;\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js-pure/internals/is-forced.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"./node_modules/core-js-pure/internals/bind-context.js\");\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js-pure/internals/hide.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\n\nvar wrapConstructor = function (NativeConstructor) {\n  var Wrapper = function (a, b, c) {\n    if (this instanceof NativeConstructor) {\n      switch (arguments.length) {\n        case 0: return new NativeConstructor();\n        case 1: return new NativeConstructor(a);\n        case 2: return new NativeConstructor(a, b);\n      } return new NativeConstructor(a, b, c);\n    } return NativeConstructor.apply(this, arguments);\n  };\n  Wrapper.prototype = NativeConstructor.prototype;\n  return Wrapper;\n};\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var PROTO = options.proto;\n\n  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;\n\n  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});\n  var targetPrototype = target.prototype;\n\n  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;\n  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;\n\n  for (key in source) {\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contains in native\n    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);\n\n    targetProperty = target[key];\n\n    if (USE_NATIVE) if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(nativeSource, key);\n      nativeProperty = descriptor && descriptor.value;\n    } else nativeProperty = nativeSource[key];\n\n    // export native or implementation\n    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];\n\n    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;\n\n    // bind timers to global for call from export context\n    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);\n    // wrap global constructors for prevent changs in this version\n    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);\n    // make static versions for prototype methods\n    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);\n    // default case\n    else resultProperty = sourceProperty;\n\n    // add a flag to not completely full polyfills\n    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {\n      hide(resultProperty, 'sham', true);\n    }\n\n    target[key] = resultProperty;\n\n    if (PROTO) {\n      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';\n      if (!has(path, VIRTUAL_PROTOTYPE)) hide(path, VIRTUAL_PROTOTYPE, {});\n      // export virtual prototype methods\n      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;\n      // export real prototype methods\n      if (options.real && targetPrototype && !targetPrototype[key]) hide(targetPrototype, key, sourceProperty);\n    }\n  }\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/fails.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/fails.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-to-string.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-to-string.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\n\nmodule.exports = shared('native-function-to-string', Function.toString);\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/function-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-built-in.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-built-in.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/global.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/global.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';\nvar check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == O && globalThis) ||\n  check(typeof window == O && window) ||\n  check(typeof self == O && self) ||\n  check(typeof global == O && global) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/has.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/has.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/has.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/hidden-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/hidden-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/hide.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/hide.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/hide.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/html.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/html.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/html.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/ie8-dom-define.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js-pure/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/indexed-object.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/indexed-object.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/internal-state.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/internal-state.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js-pure/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js-pure/internals/hide.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    hide(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-array-iterator-method.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array-iterator-method.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar ArrayPrototype = Array.prototype;\n\n// check on default Array iterator\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/is-array-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-array.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.github.io/ecma262/#sec-isarray\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-forced.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-forced.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-pure.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-pure.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterators-core.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators-core.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js-pure/internals/hide.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false;\n\nvar returnThis = function () { return this; };\n\n// `%IteratorPrototype%` object\n// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\nif ([].keys) {\n  arrayIterator = [].keys();\n  // Safari 8 has buggy iterators w/o `next`\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;\n  else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nif (IteratorPrototype == undefined) IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\nif (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/iterators-core.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterators.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/iterators.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/native-symbol.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-symbol.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/native-weak-map.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-weak-map.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ \"./node_modules/core-js-pure/internals/function-to-string.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js-pure/internals/object-define-properties.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js-pure/internals/enum-bug-keys.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js-pure/internals/html.js\");\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js-pure/internals/document-create-element.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar PROTOTYPE = 'prototype';\nvar Empty = function () { /* empty */ };\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var length = enumBugKeys.length;\n  var lt = '<';\n  var script = 'script';\n  var gt = '>';\n  var js = 'java' + script + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  iframe.src = String(js);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];\n  return createDict();\n};\n\n// `Object.create` method\n// https://tc39.github.io/ecma262/#sec-object.create\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : defineProperties(result, Properties);\n};\n\nhiddenKeys[IE_PROTO] = true;\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/object-create.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-properties.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-properties.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js-pure/internals/object-keys.js\");\n\n// `Object.defineProperties` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperties\nmodule.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);\n  return O;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/object-define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js-pure/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js-pure/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js-pure/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar ObjectPrototype = Object.prototype;\n\n// `Object.getPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.getprototypeof\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectPrototype : null;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys-internal.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys-internal.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js-pure/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js-pure/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js-pure/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.github.io/ecma262/#sec-object.keys\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-set-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-set-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"./node_modules/core-js-pure/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;\n    setter.call(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter.call(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-to-string.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-to-string.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\n// `Object.prototype.toString` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.tostring\nmodule.exports = String(test) !== '[object z]' ? function toString() {\n  return '[object ' + classof(this) + ']';\n} : test.toString;\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/object-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/parse-int.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/parse-int.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar trim = __webpack_require__(/*! ../internals/string-trim */ \"./node_modules/core-js-pure/internals/string-trim.js\").trim;\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js-pure/internals/whitespaces.js\");\n\nvar nativeParseInt = global.parseInt;\nvar hex = /^[+-]?0[Xx]/;\nvar FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;\n\n// `parseInt` method\n// https://tc39.github.io/ecma262/#sec-parseint-string-radix\nmodule.exports = FORCED ? function parseInt(string, radix) {\n  var S = trim(String(string));\n  return nativeParseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));\n} : nativeParseInt;\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/path.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/path.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/redefine.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/redefine.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js-pure/internals/hide.js\");\n\nmodule.exports = function (target, key, value, options) {\n  if (options && options.enumerable) target[key] = value;\n  else hide(target, key, value);\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/require-object-coercible.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-global.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-global.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js-pure/internals/hide.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    hide(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-to-string-tag.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-to-string-tag.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\").f;\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js-pure/internals/hide.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"./node_modules/core-js-pure/internals/object-to-string.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar METHOD_REQUIRED = toString !== ({}).toString;\n\nmodule.exports = function (it, TAG, STATIC, SET_METHOD) {\n  if (it) {\n    var target = STATIC ? it : it.prototype;\n    if (!has(target, TO_STRING_TAG)) {\n      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });\n    }\n    if (SET_METHOD && METHOD_REQUIRED) hide(target, 'toString', toString);\n  }\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-key.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js-pure/internals/set-global.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.1.3',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/sloppy-array-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/sloppy-array-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !method || !fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/sloppy-array-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/string-multibyte.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-multibyte.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js-pure/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\n// `String.prototype.{ codePointAt, at }` methods implementation\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = String(requireObjectCoercible($this));\n    var position = toInteger(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = S.charCodeAt(position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING ? S.charAt(position) : first\n        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/string-multibyte.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/string-trim.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-trim.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\nvar whitespaces = __webpack_require__(/*! ../internals/whitespaces */ \"./node_modules/core-js-pure/internals/whitespaces.js\");\n\nvar whitespace = '[' + whitespaces + ']';\nvar ltrim = RegExp('^' + whitespace + whitespace + '*');\nvar rtrim = RegExp(whitespace + whitespace + '*$');\n\n// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation\nvar createMethod = function (TYPE) {\n  return function ($this) {\n    var string = String(requireObjectCoercible($this));\n    if (TYPE & 1) string = string.replace(ltrim, '');\n    if (TYPE & 2) string = string.replace(rtrim, '');\n    return string;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.{ trimLeft, trimStart }` methods\n  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart\n  start: createMethod(1),\n  // `String.prototype.{ trimRight, trimEnd }` methods\n  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend\n  end: createMethod(2),\n  // `String.prototype.trim` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.trim\n  trim: createMethod(3)\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/string-trim.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-absolute-index.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-absolute-index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js-pure/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-indexed-object.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-integer.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-integer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-length.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-length.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js-pure/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.github.io/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-primitive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/uid.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/uid.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/user-agent.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/user-agent.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js-pure/internals/native-symbol.js\");\n\nvar Symbol = global.Symbol;\nvar store = shared('wks');\n\nmodule.exports = function (name) {\n  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]\n    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/whitespaces.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/whitespaces.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// a string of all valid unicode whitespaces\n// eslint-disable-next-line max-len\nmodule.exports = '\\u0009\\u000A\\u000B\\u000C\\u000D\\u0020\\u00A0\\u1680\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF';\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/internals/whitespaces.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.concat.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.concat.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js-pure/internals/create-property.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js-pure/internals/array-species-create.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js-pure/internals/array-method-has-species-support.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';\n\nvar IS_CONCAT_SPREADABLE_SUPPORT = !fails(function () {\n  var array = [];\n  array[IS_CONCAT_SPREADABLE] = false;\n  return array.concat()[0] !== array;\n});\n\nvar SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');\n\nvar isConcatSpreadable = function (O) {\n  if (!isObject(O)) return false;\n  var spreadable = O[IS_CONCAT_SPREADABLE];\n  return spreadable !== undefined ? !!spreadable : isArray(O);\n};\n\nvar FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;\n\n// `Array.prototype.concat` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.concat\n// with adding support of @@isConcatSpreadable and @@species\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  concat: function concat(arg) { // eslint-disable-line no-unused-vars\n    var O = toObject(this);\n    var A = arraySpeciesCreate(O, 0);\n    var n = 0;\n    var i, k, length, len, E;\n    for (i = -1, length = arguments.length; i < length; i++) {\n      E = i === -1 ? O : arguments[i];\n      if (isConcatSpreadable(E)) {\n        len = toLength(E.length);\n        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);\n      } else {\n        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        createProperty(A, n++, E);\n      }\n    }\n    A.length = n;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/modules/es.array.concat.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.for-each.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.for-each.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js-pure/internals/array-for-each.js\");\n\n// `Array.prototype.forEach` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {\n  forEach: forEach\n});\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/modules/es.array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.from.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.from.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar from = __webpack_require__(/*! ../internals/array-from */ \"./node_modules/core-js-pure/internals/array-from.js\");\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js-pure/internals/check-correctness-of-iteration.js\");\n\nvar INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {\n  Array.from(iterable);\n});\n\n// `Array.from` method\n// https://tc39.github.io/ecma262/#sec-array.from\n$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {\n  from: from\n});\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/modules/es.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js-pure/internals/add-to-unscopables.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js-pure/internals/define-iterator.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);\n\n// `Array.prototype.entries` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.github.io/ecma262/#sec-createarrayiterator\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated), // target\n    index: 0,                          // next index\n    kind: kind                         // kind\n  });\n// `%ArrayIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return { value: undefined, done: true };\n  }\n  if (kind == 'keys') return { value: index, done: false };\n  if (kind == 'values') return { value: target[index], done: false };\n  return { value: [index, target[index]], done: false };\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject\nIterators.Arguments = Iterators.Array;\n\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/modules/es.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.define-property.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.define-property.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\n$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {\n  defineProperty: objectDefinePropertyModile.f\n});\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/modules/es.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.parse-int.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.parse-int.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar parseIntImplementation = __webpack_require__(/*! ../internals/parse-int */ \"./node_modules/core-js-pure/internals/parse-int.js\");\n\n// `parseInt` method\n// https://tc39.github.io/ecma262/#sec-parseint-string-radix\n$({ global: true, forced: parseInt != parseIntImplementation }, {\n  parseInt: parseIntImplementation\n});\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/modules/es.parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.string.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar charAt = __webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js-pure/internals/string-multibyte.js\").charAt;\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js-pure/internals/define-iterator.js\");\n\nvar STRING_ITERATOR = 'String Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);\n\n// `String.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator\ndefineIterator(String, 'String', function (iterated) {\n  setInternalState(this, {\n    type: STRING_ITERATOR,\n    string: String(iterated),\n    index: 0\n  });\n// `%StringIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next\n}, function next() {\n  var state = getInternalState(this);\n  var string = state.string;\n  var index = state.index;\n  var point;\n  if (index >= string.length) return { value: undefined, done: true };\n  point = charAt(string, index);\n  state.index += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/modules/es.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.dom-collections.iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.dom-collections.iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./es.array.iterator */ \"./node_modules/core-js-pure/modules/es.array.iterator.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js-pure/internals/dom-iterables.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js-pure/internals/hide.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  if (CollectionPrototype && !CollectionPrototype[TO_STRING_TAG]) {\n    hide(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);\n  }\n  Iterators[COLLECTION_NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/modules/web.dom-collections.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.timers.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.timers.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/user-agent */ \"./node_modules/core-js-pure/internals/user-agent.js\");\n\nvar slice = [].slice;\nvar MSIE = /MSIE .\\./.test(userAgent); // <- dirty ie9- check\n\nvar wrap = function (scheduler) {\n  return function (handler, timeout /* , ...arguments */) {\n    var boundArgs = arguments.length > 2;\n    var args = boundArgs ? slice.call(arguments, 2) : undefined;\n    return scheduler(boundArgs ? function () {\n      // eslint-disable-next-line no-new-func\n      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);\n    } : handler, timeout);\n  };\n};\n\n// ie9- setTimeout & setInterval additional parameters fix\n// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers\n$({ global: true, bind: true, forced: MSIE }, {\n  // `setTimeout` method\n  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout\n  setTimeout: wrap(global.setTimeout),\n  // `setInterval` method\n  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval\n  setInterval: wrap(global.setInterval)\n});\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/modules/web.timers.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/array/from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/array/from */ \"./node_modules/core-js-pure/es/array/from.js\");\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/stable/array/from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/array/virtual/for-each.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/virtual/for-each.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../../es/array/virtual/for-each */ \"./node_modules/core-js-pure/es/array/virtual/for-each.js\");\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/stable/array/virtual/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/concat.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/concat.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../../es/instance/concat */ \"./node_modules/core-js-pure/es/instance/concat.js\");\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/stable/instance/concat.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/for-each.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/for-each.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\nvar forEach = __webpack_require__(/*! ../array/virtual/for-each */ \"./node_modules/core-js-pure/stable/array/virtual/for-each.js\");\nvar classof = __webpack_require__(/*! ../../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar ArrayPrototype = Array.prototype;\n\nvar DOMIterables = {\n  DOMTokenList: true,\n  NodeList: true\n};\n\nmodule.exports = function (it) {\n  var own = it.forEach;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.forEach)\n    // eslint-disable-next-line no-prototype-builtins\n    || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;\n};\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/stable/instance/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/stable/parse-int.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ../es/parse-int */ \"./node_modules/core-js-pure/es/parse-int.js\");\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/stable/parse-int.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/set-interval.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/set-interval.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.timers */ \"./node_modules/core-js-pure/modules/web.timers.js\");\n\nmodule.exports = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\").setInterval;\n\n\n//# sourceURL=webpack://Lumens/./node_modules/core-js-pure/stable/set-interval.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://Lumens/(webpack)/buildin/global.js?");

/***/ })

/******/ });