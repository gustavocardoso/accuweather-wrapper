"use strict";

var cov_1eu5v0eg8v = function () {
  var path = "/home/gus/Development/js/accuweather-wrapper/src/config.js";
  var hash = "00be770a27fa344f30a3638d275e93b675c790ca";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/gus/Development/js/accuweather-wrapper/src/config.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 22
        },
        end: {
          line: 1,
          column: 58
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "00be770a27fa344f30a3638d275e93b675c790ca"
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
exports.apiURL = void 0;
var apiURL = (cov_1eu5v0eg8v.s[0]++, 'http://dataservice.accuweather.com');
exports.apiURL = apiURL;