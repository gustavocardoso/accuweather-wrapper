"use strict";

var cov_2f99rj45dk = function () {
  var path = "/home/gus/Development/js/accuweather-wrapper/src/location.js";
  var hash = "e6174708d255b0088575509cbcf571d5e7bfc7df";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gus/Development/js/accuweather-wrapper/src/location.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 12,
          column: 3
        }
      },
      "1": {
        start: {
          line: 4,
          column: 26
        },
        end: {
          line: 6,
          column: 37
        }
      },
      "2": {
        start: {
          line: 8,
          column: 23
        },
        end: {
          line: 8,
          column: 54
        }
      },
      "3": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 21
        }
      }
    },
    fnMap: {
      "0": {
        name: "location",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 32
          }
        },
        loc: {
          start: {
            line: 1,
            column: 36
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 3,
            column: 19
          },
          end: {
            line: 3,
            column: 20
          }
        },
        loc: {
          start: {
            line: 3,
            column: 50
          },
          end: {
            line: 11,
            column: 5
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "e6174708d255b0088575509cbcf571d5e7bfc7df"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = location;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function location() {
  var _this = this;

  cov_2f99rj45dk.f[0]++;
  cov_2f99rj45dk.s[0]++;
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
                cov_2f99rj45dk.f[1]++;
                locationURL = (cov_2f99rj45dk.s[1]++, "".concat(_this.apiURL, "/locations/v1/cities/geoposition/search?apikey=").concat(_this.token, "&q=").concat(latitude, "%2C").concat(longitude));
                cov_2f99rj45dk.s[2]++;
                _context.next = 5;
                return _this.request(locationURL);

              case 5:
                location = _context.sent;
                cov_2f99rj45dk.s[3]++;
                return _context.abrupt("return", location);

              case 8:
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