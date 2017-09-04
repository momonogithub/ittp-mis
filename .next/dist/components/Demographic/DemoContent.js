'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _DemoRow = require('./DemoRow');

var _DemoRow2 = _interopRequireDefault(_DemoRow);

var _utilize = require('../../utilize');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Moo\\ittp\\ittp-mis\\components\\Demographic\\DemoContent.js';


var date = (0, _utilize.monthToMonth)(2017, 8);
var gender = ['Female', 'Male'];

var DemoContent = function DemoContent() {
  return _react2.default.createElement('table', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('link', { href: '/static/style.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement('tbody', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('tr', { className: 'spanRow', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('td', { className: 'headTable', colSpan: '10', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Demographic: Total Account Profile as Augest 2017')), _react2.default.createElement('tr', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'New account'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'New account rate'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Loan size'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'Loan size rate'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'Average int rate'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'Average loan term'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, 'Outstanding balance'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, 'Delinquent rate'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'NPL rate'))), _react2.default.createElement(_DemoRow2.default, { rowHead: 'Month', option: date, __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), _react2.default.createElement(_DemoRow2.default, { rowHead: 'Gender', option: gender, __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }));
};

exports.default = DemoContent;