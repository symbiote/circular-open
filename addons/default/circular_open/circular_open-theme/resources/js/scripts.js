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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/theme/initialize.js":
/*!******************************************!*\
  !*** ./resources/js/theme/initialize.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ "./resources/js/theme/navigation.js");


window.onload = function (event) {
  Object(_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

/***/ }),

/***/ "./resources/js/theme/navigation.js":
/*!******************************************!*\
  !*** ./resources/js/theme/navigation.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scrollLock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollLock */ "./resources/js/theme/scrollLock.js");
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewport */ "./resources/js/theme/viewport.js");
// This script handles the toggling of navigation drop down links, hamburger menu, scroll locking etc.

 // Added the following event listeners only once the DOM has loaded

function initMainNav() {
  var nav = document.querySelector('.nav');
  var navContainer = document.querySelector('.navigation');
  var dropDown = document.querySelector('.nav__drop-down-link__toggle');
  var dropDownList = document.querySelector('.nav__drop-down-list');
  var hamburgerNavToggleCheckbox = document.querySelector('.hamburger-nav-toggle-checkbox'); // Create darken overlay for adding to the DOM later

  var darkenOverlay = document.createElement('div');
  darkenOverlay.className = "darken-overlay"; // Listen for all clicks on the document

  document.addEventListener('click', function (event) {
    // Toggle drop down list visibility on drop down click
    if (dropDown && event.target === dropDown) {
      dropDown.classList.toggle('nav__drop-down-list--visible');
    } // Hide drop down list when click occurs outside of drop down or drop down list


    if (event.target !== dropDown && event.target !== dropDownList && dropDown) {
      dropDown.classList.remove('nav__drop-down-list--visible');
    } // If click occurs outside the hamburger menu then remove darken overlay from DOM, unlock the scrollability of body and hide the hamburger menu


    if (event.target === darkenOverlay || event.target === nav) {
      if (darkenOverlay && darkenOverlay.parentNode) {
        darkenOverlay.parentNode.removeChild(darkenOverlay);
      }

      _scrollLock__WEBPACK_IMPORTED_MODULE_0__["default"].disable(); // Un-check hamburger toggle checkbox

      hamburgerNavToggleCheckbox.checked = false;
    }
  }, false);

  if (hamburgerNavToggleCheckbox) {
    // Listen for when nav toggle checkbox changes
    hamburgerNavToggleCheckbox.addEventListener('change', function () {
      // If check occurs
      if (hamburgerNavToggleCheckbox.checked) {
        if (navContainer && navContainer.parentNode) {
          // Add darken overlay to DOM
          navContainer.parentNode.prepend(darkenOverlay); // Set visibility on darken overlay

          darkenOverlay.classList.add('darken-overlay--visible');
        } // Lock the scrollability of body


        _scrollLock__WEBPACK_IMPORTED_MODULE_0__["default"].enable();
      } else {
        // Remove darken overlay from DOM
        if (darkenOverlay && darkenOverlay.parentNode) {
          darkenOverlay.parentNode.removeChild(darkenOverlay);
        } // Unlock the scrollability of body


        _scrollLock__WEBPACK_IMPORTED_MODULE_0__["default"].disable();
      }
    });
  }

  window.addEventListener("resize", function () {
    // If screen is not small and the hamburger toggle checkbox is checked then remove darken overlay from DOM and unlock the scrollability of body
    if (!_viewport__WEBPACK_IMPORTED_MODULE_1__["default"].sScreen() && hamburgerNavToggleCheckbox.checked) {
      if (darkenOverlay && darkenOverlay.parentNode) {
        darkenOverlay.parentNode.removeChild(darkenOverlay);
      }

      _scrollLock__WEBPACK_IMPORTED_MODULE_0__["default"].disable(); // Un-check hamburger toggle checkbox

      hamburgerNavToggleCheckbox.checked = false;
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (initMainNav);

/***/ }),

/***/ "./resources/js/theme/scrollLock.js":
/*!******************************************!*\
  !*** ./resources/js/theme/scrollLock.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Helpful functions to enable and disable scrolling of body. Useful for when hamburger menu or modal pop up occurs.
var body = document.querySelector('body');
var scrollPosition = 0;
var scrollLock = {
  enable: function enable() {
    scrollPosition = window.pageYOffset;

    if (body) {
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.top = "-".concat(scrollPosition, "px");
      body.style.width = '100%';
    }
  },
  disable: function disable() {
    if (body) {
      body.style.removeProperty('overflow');
      body.style.removeProperty('position');
      body.style.removeProperty('top');
      body.style.removeProperty('width');
    }

    window.scrollTo(0, scrollPosition);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (scrollLock);

/***/ }),

/***/ "./resources/js/theme/slickCarousel.js":
/*!*********************************************!*\
  !*** ./resources/js/theme/slickCarousel.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (window, document) {
  $('.carousel-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: false,
    arrows: false
  });
  $('.featured-carousel-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: false,
    arrows: false
  });

  function featureSlideAction() {
    var links = document.querySelectorAll('.featured-slides__link');

    var _iterator = _createForOfIteratorHelper(links),
        _step;

    try {
      var _loop = function _loop() {
        var link = _step.value;
        link.addEventListener("click", function (e) {
          e.preventDefault();

          if (link) {
            var slideIndex = parseInt(link.getAttribute('data-slide-index') || "0");
            $('.featured-carousel-wrapper').slick('slickGoTo', slideIndex - 1);
          }
        });
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  featureSlideAction();
})(window, document);

/***/ }),

/***/ "./resources/js/theme/viewport.js":
/*!****************************************!*\
  !*** ./resources/js/theme/viewport.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Useful for checking current screen size, similar to media queries.
var viewport = {
  xsBreakpointWidth: 576,
  sBreakpointWidth: 768,
  mdsBreakpointWidth: 992,
  xsScreen: function xsScreen() {
    return window.innerWidth < this.xsBreakpointWidth;
  },
  sScreen: function sScreen() {
    return window.innerWidth < this.sBreakpointWidth;
  },
  mScreen: function mScreen() {
    return window.innerWidth < this.mdsBreakpointWidth;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (viewport);

/***/ }),

/***/ 2:
/*!*********************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/js/theme/initialize.js ./resources/js/theme/navigation.js ./resources/js/theme/scrollLock.js ./resources/js/theme/slickCarousel.js ./resources/js/theme/viewport.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/asarkis/repos/circular-open/addons/default/circular_open/circular_open-theme/resources/js/theme/initialize.js */"./resources/js/theme/initialize.js");
__webpack_require__(/*! /home/asarkis/repos/circular-open/addons/default/circular_open/circular_open-theme/resources/js/theme/navigation.js */"./resources/js/theme/navigation.js");
__webpack_require__(/*! /home/asarkis/repos/circular-open/addons/default/circular_open/circular_open-theme/resources/js/theme/scrollLock.js */"./resources/js/theme/scrollLock.js");
__webpack_require__(/*! /home/asarkis/repos/circular-open/addons/default/circular_open/circular_open-theme/resources/js/theme/slickCarousel.js */"./resources/js/theme/slickCarousel.js");
module.exports = __webpack_require__(/*! /home/asarkis/repos/circular-open/addons/default/circular_open/circular_open-theme/resources/js/theme/viewport.js */"./resources/js/theme/viewport.js");


/***/ })

/******/ });