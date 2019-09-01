"use strict";

var cov_pkqxsynyu = function () {
  var path = "/home/gus/Development/js/accuweather-wrapper/src/weather.js";
  var hash = "3669b4f29c87bbf1c1f7343c06b972a8e3b8b6af";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gus/Development/js/accuweather-wrapper/src/weather.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "1": {
        start: {
          line: 4,
          column: 18
        },
        end: {
          line: 6,
          column: 39
        }
      },
      "2": {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 8,
          column: 30
        }
      },
      "3": {
        start: {
          line: 12,
          column: 18
        },
        end: {
          line: 14,
          column: 39
        }
      },
      "4": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 30
        }
      },
      "5": {
        start: {
          line: 20,
          column: 18
        },
        end: {
          line: 22,
          column: 39
        }
      },
      "6": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 30
        }
      }
    },
    fnMap: {
      "0": {
        name: "weather",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 31
          }
        },
        loc: {
          start: {
            line: 1,
            column: 35
          },
          end: {
            line: 27,
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
            column: 23
          },
          end: {
            line: 3,
            column: 24
          }
        },
        loc: {
          start: {
            line: 3,
            column: 56
          },
          end: {
            line: 9,
            column: 5
          }
        },
        line: 3
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 11,
            column: 20
          },
          end: {
            line: 11,
            column: 21
          }
        },
        loc: {
          start: {
            line: 11,
            column: 53
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 11
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 19,
            column: 22
          },
          end: {
            line: 19,
            column: 23
          }
        },
        loc: {
          start: {
            line: 19,
            column: 47
          },
          end: {
            line: 25,
            column: 5
          }
        },
        line: 19
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 3,
            column: 37
          },
          end: {
            line: 3,
            column: 51
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 3,
            column: 46
          },
          end: {
            line: 3,
            column: 51
          }
        }],
        line: 3
      },
      "1": {
        loc: {
          start: {
            line: 6,
            column: 9
          },
          end: {
            line: 6,
            column: 37
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 6,
            column: 18
          },
          end: {
            line: 6,
            column: 32
          }
        }, {
          start: {
            line: 6,
            column: 35
          },
          end: {
            line: 6,
            column: 37
          }
        }],
        line: 6
      },
      "2": {
        loc: {
          start: {
            line: 11,
            column: 34
          },
          end: {
            line: 11,
            column: 48
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 11,
            column: 43
          },
          end: {
            line: 11,
            column: 48
          }
        }],
        line: 11
      },
      "3": {
        loc: {
          start: {
            line: 14,
            column: 9
          },
          end: {
            line: 14,
            column: 37
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 14,
            column: 18
          },
          end: {
            line: 14,
            column: 32
          }
        }, {
          start: {
            line: 14,
            column: 35
          },
          end: {
            line: 14,
            column: 37
          }
        }],
        line: 14
      },
      "4": {
        loc: {
          start: {
            line: 22,
            column: 9
          },
          end: {
            line: 22,
            column: 37
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 22,
            column: 18
          },
          end: {
            line: 22,
            column: 32
          }
        }, {
          start: {
            line: 22,
            column: 35
          },
          end: {
            line: 22,
            column: 37
          }
        }],
        line: 22
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "3669b4f29c87bbf1c1f7343c06b972a8e3b8b6af"
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
exports["default"] = weather;

function weather() {
  var _this = this;

  cov_pkqxsynyu.f[0]++;
  cov_pkqxsynyu.s[0]++;
  return {
    currentConditions: function currentConditions(locationKey) {
      var metric = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_pkqxsynyu.b[0][0]++, false);
      cov_pkqxsynyu.f[1]++;
      var url = (cov_pkqxsynyu.s[1]++, "".concat(_this.apiURL, "/currentconditions/v1/").concat(locationKey, "?apikey=").concat(_this.token).concat(metric ? (cov_pkqxsynyu.b[1][0]++, '&metric=true') : (cov_pkqxsynyu.b[1][1]++, '')));
      cov_pkqxsynyu.s[2]++;
      return _this.request(url);
    },
    oneDayForecast: function oneDayForecast(locationKey) {
      var metric = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_pkqxsynyu.b[2][0]++, false);
      cov_pkqxsynyu.f[2]++;
      var url = (cov_pkqxsynyu.s[3]++, "".concat(_this.apiURL, "/forecasts/v1/daily/1day/").concat(locationKey, "?apikey=").concat(_this.token).concat(metric ? (cov_pkqxsynyu.b[3][0]++, '&metric=true') : (cov_pkqxsynyu.b[3][1]++, '')));
      cov_pkqxsynyu.s[4]++;
      return _this.request(url);
    },
    fiveDaysForecast: function fiveDaysForecast(locationKey, metric) {
      cov_pkqxsynyu.f[3]++;
      var url = (cov_pkqxsynyu.s[5]++, "".concat(_this.apiURL, "/forecasts/v1/daily/5day/").concat(locationKey, "?apikey=").concat(_this.token).concat(metric ? (cov_pkqxsynyu.b[4][0]++, '&metric=true') : (cov_pkqxsynyu.b[4][1]++, '')));
      cov_pkqxsynyu.s[6]++;
      return _this.request(url);
    }
  };
}