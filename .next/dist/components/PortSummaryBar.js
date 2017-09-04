'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DateBar = require('./DateBar');

var _DateBar2 = _interopRequireDefault(_DateBar);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Moo\\ittp\\ittp-mis\\components\\PortSummaryBar.js';


var byProduct = ['Total', 'Cash-Easy', 'Cash-Extra', 'Staff-Cash', 'Ploan - Install', 'Nano - Revolve', 'Nano - Install'];

var buildCheckbox = function buildCheckbox(data) {
  var arr = [];
  var count = 1;
  while (count <= data.length) {
    arr.push(_react2.default.createElement('div', { key: data[count - 1] + 'Div', __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, _react2.default.createElement('input', { type: 'checkbox', key: data[count - 1] + 'Box', name: data[count - 1], value: data[count - 1], __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }), data[count - 1]));
    count += 1;
  }
  return arr;
};

var PortSummaryBar = function PortSummaryBar() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('link', { href: '/static/style.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  })), _react2.default.createElement('div', { className: 'barContentList', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('div', { className: 'barContent', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement(_DateBar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  })), _react2.default.createElement('div', { className: 'barContent', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement('button', { className: 'submitButton', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, 'Submit'))), _react2.default.createElement('div', { className: 'barContentList', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('div', { className: 'barContent', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('label', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, 'ByProduct:'), _react2.default.createElement('form', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement('div', { className: 'inform', __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, buildCheckbox(byProduct)))), _react2.default.createElement('div', { className: 'barContent', __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement('button', { className: 'downloadButton', __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, 'Download Excel'))));
};

exports.default = PortSummaryBar;