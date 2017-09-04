'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Moo\\ittp\\ittp-mis\\components\\DateBar.js';


var buildYear = function buildYear() {
  var arr = [];
  var start = 2016;
  var current = new Date().getFullYear();
  arr.push(_react2.default.createElement('option', { key: 'year', value: '0', disabled: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Choose Year'));
  while (start <= current) {
    arr.push(_react2.default.createElement('option', { key: start, value: start, __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, start));
    start += 1;
  }
  return arr;
};

var buildMonth = function buildMonth() {
  var arr = [];
  var month = _moment2.default.months();
  var count = 1;
  arr.push(_react2.default.createElement('option', { key: 'month', value: '0', disabled: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'Choose Month'));
  while (count <= month.length) {
    arr.push(_react2.default.createElement('option', { key: 'month' + count, value: count, __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, month[count - 1]));
    count += 1;
  }
  return arr;
};

var DateBar = function DateBar(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('link', { href: '/static/style.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  })), _react2.default.createElement('label', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'Year'), _react2.default.createElement('div', { className: 'infield', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement('select', { defaultValue: '0', __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, buildYear())), _react2.default.createElement('div', { className: 'inform', __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement('label', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, 'Month'), _react2.default.createElement('div', { className: 'infield', __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement('select', { defaultValue: '0', __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, buildMonth()))));
};

exports.default = DateBar;