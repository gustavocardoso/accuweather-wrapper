"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getLocation;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getLocation() {
  var _this = this;

  return {
    byGeoposition: function () {
      var _byGeoposition = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(latitude, longitude) {
        var locationURL, location;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                locationURL = "".concat(_this.apiURL, "/locations/v1/cities/geoposition/search?apikey=").concat(_this.token, "&q=").concat(latitude, "%2C").concat(longitude);
                _context.next = 3;
                return _this.request(locationURL);

              case 3:
                location = _context.sent;
                return _context.abrupt("return", {
                  key: location.Key
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function byGeoposition(_x, _x2) {
        return _byGeoposition.apply(this, arguments);
      }

      return byGeoposition;
    }()
  };
}