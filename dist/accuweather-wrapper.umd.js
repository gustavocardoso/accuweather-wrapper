(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["accuWeatherWrapper"] = factory();
	else
		root["accuWeatherWrapper"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main */ \"./src/main.js\").default\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2FjY3VXZWF0aGVyV3JhcHBlci8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NyYy9tYWluJykuZGVmYXVsdFxuIl0sIm1hcHBpbmdzIjoiQUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: apiURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiURL\", function() { return apiURL; });\nvar apiURL = 'http://dataservice.accuweather.com';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWNjdVdlYXRoZXJXcmFwcGVyLy4vc3JjL2NvbmZpZy5qcz9kYjQ5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhcGlVUkwgPSAnaHR0cDovL2RhdGFzZXJ2aWNlLmFjY3V3ZWF0aGVyLmNvbSdcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config.js\n");

/***/ }),

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getLocation; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction getLocation() {\n  var _this = this;\n\n  return {\n    byGeoposition: function () {\n      var _byGeoposition = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(latitude, longitude) {\n        var locationURL, location;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                locationURL = \"\".concat(_this.apiURL, \"/locations/v1/cities/geoposition/search?apikey=\").concat(_this.token, \"&q=\").concat(latitude, \"%2C\").concat(longitude);\n                _context.next = 3;\n                return _this.request(locationURL);\n\n              case 3:\n                location = _context.sent;\n                return _context.abrupt(\"return\", {\n                  key: location.Key\n                });\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function byGeoposition(_x, _x2) {\n        return _byGeoposition.apply(this, arguments);\n      }\n\n      return byGeoposition;\n    }()\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbG9jYXRpb24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY2N1V2VhdGhlcldyYXBwZXIvLi9zcmMvbG9jYXRpb24uanM/MDhhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRMb2NhdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgYnlHZW9wb3NpdGlvbjogYXN5bmMgKGxhdGl0dWRlLCBsb25naXR1ZGUpID0+IHtcbiAgICAgIGNvbnN0IGxvY2F0aW9uVVJMID0gYCR7dGhpcy5hcGlVUkx9L2xvY2F0aW9ucy92MS9jaXRpZXMvZ2VvcG9zaXRpb24vc2VhcmNoP2FwaWtleT0ke1xuICAgICAgICB0aGlzLnRva2VuXG4gICAgICB9JnE9JHtsYXRpdHVkZX0lMkMke2xvbmdpdHVkZX1gXG5cbiAgICAgIGNvbnN0IGxvY2F0aW9uID0gYXdhaXQgdGhpcy5yZXF1ZXN0KGxvY2F0aW9uVVJMKVxuXG4gICAgICByZXR1cm4geyBrZXk6IGxvY2F0aW9uLktleSB9XG4gICAgfVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBTEE7QUFPQTtBQUFBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFXQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/location.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AccuWeatherWrapper; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location */ \"./src/location.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar AccuWeatherWrapper =\n/*#__PURE__*/\nfunction () {\n  function AccuWeatherWrapper(options) {\n    _classCallCheck(this, AccuWeatherWrapper);\n\n    this.apiURL = options.apiURL || _config__WEBPACK_IMPORTED_MODULE_0__[\"apiURL\"];\n    this.token = options.token;\n    this.getLocation = _location__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind(this)();\n    this.getWeather = _weather__WEBPACK_IMPORTED_MODULE_2__[\"default\"].bind(this)();\n  }\n\n  _createClass(AccuWeatherWrapper, [{\n    key: \"request\",\n    value: function request(url) {\n      var headers = {\n        headers: {\n          'Accept-Encoding': 'gzip,deflate'\n        }\n      };\n      return fetch(url, headers).then(function (data) {\n        return data.json();\n      })[\"catch\"](function (err) {\n        return {\n          error: err.name\n        };\n      });\n    }\n  }]);\n\n  return AccuWeatherWrapper;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2FjY3VXZWF0aGVyV3JhcHBlci8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBpVVJMIH0gZnJvbSAnLi9jb25maWcnXG5cbmltcG9ydCBsb2NhdGlvbiBmcm9tICcuL2xvY2F0aW9uJ1xuaW1wb3J0IHdlYXRoZXIgZnJvbSAnLi93ZWF0aGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2N1V2VhdGhlcldyYXBwZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMuYXBpVVJMID0gb3B0aW9ucy5hcGlVUkwgfHwgYXBpVVJMXG4gICAgdGhpcy50b2tlbiA9IG9wdGlvbnMudG9rZW5cblxuICAgIHRoaXMuZ2V0TG9jYXRpb24gPSBsb2NhdGlvbi5iaW5kKHRoaXMpKClcbiAgICB0aGlzLmdldFdlYXRoZXIgPSB3ZWF0aGVyLmJpbmQodGhpcykoKVxuICB9XG5cbiAgcmVxdWVzdCAodXJsKSB7XG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdC1FbmNvZGluZyc6ICdnemlwLGRlZmxhdGUnXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoKHVybCwgaGVhZGVycylcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyID0+ICh7IGVycm9yOiBlcnIubmFtZSB9KSlcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return weather; });\nfunction weather() {\n  var _this = this;\n\n  return {\n    current: function current(locationKey) {\n      var url = \"\".concat(_this.apiURL, \"/currentconditions/v1/\").concat(locationKey, \"?apikey=\").concat(_this.token);\n      return _this.request(url);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2VhdGhlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2FjY3VXZWF0aGVyV3JhcHBlci8uL3NyYy93ZWF0aGVyLmpzPzhlYjIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2VhdGhlciAoKSB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudDogbG9jYXRpb25LZXkgPT4ge1xuICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5hcGlVUkx9L2N1cnJlbnRjb25kaXRpb25zL3YxLyR7bG9jYXRpb25LZXl9P2FwaWtleT0ke1xuICAgICAgICB0aGlzLnRva2VuXG4gICAgICB9YFxuXG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybClcbiAgICB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFQQTtBQVNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/weather.js\n");

/***/ })

/******/ });
});