"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = weather;

function weather() {
  var _this = this;

  return {
    current: function current(locationKey) {
      var url = "".concat(_this.apiURL, "/currentconditions/v1/").concat(locationKey, "?apikey=").concat(_this.token);
      return _this.request(url);
    },
    forecast: function forecast() {}
  };
}