'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _month = require('../../utilize/month');

var _createRow = require('../../utilize/createRow');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Moo\\ittp\\ittp-mis\\components\\Demographic\\Month.js';


var buildRow = function buildRow() {
  var date = (0, _month.monthToMonth)(2017, 8);
  return (0, _createRow.createRow)('month', date);
};

var Month = function Month() {
  return _react2.default.createElement('tbody', { className: '', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('link', { href: '/static/style.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), _react2.default.createElement('tr', { className: 'spanRow', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('td', { colSpan: '10', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'Month')), buildRow());
};

exports.default = Month;