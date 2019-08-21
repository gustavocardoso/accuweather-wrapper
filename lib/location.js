"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getLocation;

function getLocation() {
  var _this = this;

  return {
    byGeoposition: function byGeoposition(latitude, longitude) {
      var locationURL = "".concat(_this.apiURL, "/locations/v1/cities/geoposition/search?apikey=").concat(_this.token, "&q=").concat(latitude, "%2C").concat(longitude);
      return _this.request(locationURL);
    }
  };
}