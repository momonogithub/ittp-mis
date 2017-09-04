'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Month = require('./Month');

var _Month2 = _interopRequireDefault(_Month);

var _Gender = require('./Gender');

var _Gender2 = _interopRequireDefault(_Gender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Moo\\ittp\\ittp-mis\\components\\Demographic\\DemoContent.js';


var DemoContent = function DemoContent() {
  return _react2.default.createElement('table', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('link', { href: '/static/style.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  })), _react2.default.createElement('tbody', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('tr', { className: 'spanRow', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('td', { className: 'headTable', colSpan: '10', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Demographic: Total Account Profile as Augest 2017')), _react2.default.createElement('tr', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'New account'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'New account rate'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Loan size'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'Loan size rate'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'Average int rate'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Average loan term'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'Outstanding balance'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'Delinquent rate'), _react2.default.createElement('th', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'NPL rate'))), _react2.default.createElement(_Month2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement(_Gender2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }));
};

exports.default = DemoContent;