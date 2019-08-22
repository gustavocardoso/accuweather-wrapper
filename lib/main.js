"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = require("./config");

var _location = _interopRequireDefault(require("./location"));

var _weather = _interopRequireDefault(require("./weather"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AccuWeatherWrapper =
/*#__PURE__*/
function () {
  function AccuWeatherWrapper(options) {
    _classCallCheck(this, AccuWeatherWrapper);

    this.apiURL = options.apiURL || _config.apiURL;
    this.token = options.token;
    this.getLocation = _location["default"].bind(this)();
    this.getWeather = _weather["default"].bind(this)();
  }

  _createClass(AccuWeatherWrapper, [{
    key: "request",
    value: function request(url) {
      var headers = {
        headers: {
          'Accept-Encoding': 'gzip,deflate'
        }
      };
      return fetch(url, headers).then(function (data) {
        return data.json();
      })["catch"](function (err) {
        return {
          error: err.name
        };
      });
    }
  }]);

  return AccuWeatherWrapper;
}();

exports["default"] = AccuWeatherWrapper;