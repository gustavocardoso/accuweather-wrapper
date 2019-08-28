"use strict";

var cov_pkqxsynyu = function () {
  var path = "/home/gus/Development/js/accuweather-wrapper/src/weather.js";
  var hash = "86f01f9838a106ad2fc613078fa1e6d95c2acb34";
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
          line: 20,
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
          column: 8
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
          column: 8
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
            line: 21,
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
            column: 38
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
            column: 35
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
            column: 28
          },
          end: {
            line: 19,
            column: 30
          }
        },
        line: 19
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "86f01f9838a106ad2fc613078fa1e6d95c2acb34"
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
      cov_pkqxsynyu.f[1]++;
      var url = (cov_pkqxsynyu.s[1]++, "".concat(_this.apiURL, "/currentconditions/v1/").concat(locationKey, "?apikey=").concat(_this.token));
      cov_pkqxsynyu.s[2]++;
      return _this.request(url);
    },
    oneDayForecast: function oneDayForecast(locationKey) {
      cov_pkqxsynyu.f[2]++;
      var url = (cov_pkqxsynyu.s[3]++, "".concat(_this.apiURL, "/forecasts/v1/daily/1day/").concat(locationKey, "?apikey=").concat(_this.token));
      cov_pkqxsynyu.s[4]++;
      return _this.request(url);
    },
    fiveDaysForecast: function fiveDaysForecast() {
      cov_pkqxsynyu.f[3]++;
    }
  };
}