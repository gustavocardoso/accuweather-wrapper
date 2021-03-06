"use strict";

var cov_19tk23hnxl = function () {
  var path = "/home/gus/Development/js/accuweather-wrapper/src/main.js";
  var hash = "1c70a0f9d18d292e761d0e08a1c73198fc7381ac";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gus/Development/js/accuweather-wrapper/src/main.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
          column: 15
        }
      },
      "1": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 24
        }
      },
      "2": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 58
        }
      },
      "3": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 44
        }
      },
      "4": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 42
        }
      },
      "5": {
        start: {
          line: 19,
          column: 20
        },
        end: {
          line: 23,
          column: 5
        }
      },
      "6": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 27,
          column: 42
        }
      },
      "7": {
        start: {
          line: 26,
          column: 20
        },
        end: {
          line: 26,
          column: 31
        }
      },
      "8": {
        start: {
          line: 27,
          column: 21
        },
        end: {
          line: 27,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 24
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 18,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        loc: {
          start: {
            line: 18,
            column: 16
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 18
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 26,
            column: 12
          },
          end: {
            line: 26,
            column: 13
          }
        },
        loc: {
          start: {
            line: 26,
            column: 20
          },
          end: {
            line: 26,
            column: 31
          }
        },
        line: 26
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 27,
            column: 13
          },
          end: {
            line: 27,
            column: 14
          }
        },
        loc: {
          start: {
            line: 27,
            column: 21
          },
          end: {
            line: 27,
            column: 40
          }
        },
        line: 27
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 17
          },
          end: {
            line: 12,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 12,
            column: 17
          },
          end: {
            line: 12,
            column: 30
          }
        }, {
          start: {
            line: 12,
            column: 34
          },
          end: {
            line: 12,
            column: 58
          }
        }],
        line: 12
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "1c70a0f9d18d292e761d0e08a1c73198fc7381ac"
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
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _config = require("./config");

var _location = _interopRequireDefault(require("./location"));

var _weather = _interopRequireDefault(require("./weather"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

cov_19tk23hnxl.s[0]++;

_dotenv["default"].config();

var AccuWeatherWrapper =
/*#__PURE__*/
function () {
  function AccuWeatherWrapper(options) {
    _classCallCheck(this, AccuWeatherWrapper);

    cov_19tk23hnxl.f[0]++;
    cov_19tk23hnxl.s[1]++;
    this.apiURL = _config.apiURL;
    cov_19tk23hnxl.s[2]++;
    this.token = (cov_19tk23hnxl.b[0][0]++, options.token) || (cov_19tk23hnxl.b[0][1]++, process.env.ACCESS_TOKEN);
    cov_19tk23hnxl.s[3]++;
    this.getLocation = _location["default"].bind(this)();
    cov_19tk23hnxl.s[4]++;
    this.getWeather = _weather["default"].bind(this)();
  }

  _createClass(AccuWeatherWrapper, [{
    key: "request",
    value: function request(url) {
      cov_19tk23hnxl.f[1]++;
      var headers = (cov_19tk23hnxl.s[5]++, {
        headers: {
          'Accept-Encoding': 'gzip,deflate'
        }
      });
      cov_19tk23hnxl.s[6]++;
      return fetch(url, headers).then(function (data) {
        cov_19tk23hnxl.f[2]++;
        cov_19tk23hnxl.s[7]++;
        return data.json();
      })["catch"](function (err) {
        cov_19tk23hnxl.f[3]++;
        cov_19tk23hnxl.s[8]++;
        return {
          error: err.name
        };
      });
    }
  }]);

  return AccuWeatherWrapper;
}();

exports["default"] = AccuWeatherWrapper;