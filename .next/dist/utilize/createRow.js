"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRow = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\Moo\\ittp\\ittp-mis\\utilize\\createRow.js";
var createRow = exports.createRow = function createRow(title, option) {
  var arr = [];
  var count = 0;
  while (count < option.length) {
    arr.push(_react2.default.createElement("tr", { key: option[count] + "row", __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }, _react2.default.createElement("td", { key: option[count] + "col", __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, option[count]), _react2.default.createElement("td", { key: option[count] + "data1", __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }), _react2.default.createElement("td", { key: option[count] + "data2", __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }), _react2.default.createElement("td", { key: option[count] + "data3", __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }), _react2.default.createElement("td", { key: option[count] + "data4", __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }), _react2.default.createElement("td", { key: option[count] + "data5", __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }), _react2.default.createElement("td", { key: option[count] + "data6", __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }), _react2.default.createElement("td", { key: option[count] + "data7", __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }), _react2.default.createElement("td", { key: option[count] + "data8", __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }), _react2.default.createElement("td", { key: option[count] + "data9", __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    })));
    count += 1;
  }
  arr.push(_react2.default.createElement("tr", { key: title + "TotalRow", __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement("td", { key: title + "TotalCol", __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Total"), _react2.default.createElement("td", { key: title + "TotalData1", __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement("td", { key: title + "TotalData2", __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement("td", { key: title + "TotalData3", __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement("td", { key: title + "TotalData4", __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement("td", { key: title + "TotalData5", __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), _react2.default.createElement("td", { key: title + "TotalData6", __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), _react2.default.createElement("td", { key: title + "TotalData7", __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement("td", { key: title + "TotalData8", __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement("td", { key: title + "TotalData9", __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  })));
  return arr;
};