'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _createRow = require('../../utilize/createRow');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Moo\\ittp\\ittp-mis\\components\\Demographic\\Gender.js';


var buildRow = function buildRow() {
  var gender = ['Female', 'Male'];
  return (0, _createRow.createRow)('gender', gender);
};

var Gender = function Gender() {
  return _react2.default.createElement('tbody', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('link', { href: '/static/style.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })), _react2.default.createElement('tr', { className: 'spanRow', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('td', { colSpan: '10', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Gender')), buildRow());
};

exports.default = Gender;