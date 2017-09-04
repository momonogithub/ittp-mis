'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../components/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Title = require('../components/Title');

var _Title2 = _interopRequireDefault(_Title);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Moo\\ittp\\ittp-mis\\components\\HeaderBar.js';


var HeaderBar = function HeaderBar(_ref) {
  var title = _ref.title;
  return _react2.default.createElement('div', { className: 'headerBar', __source: {
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
  })), _react2.default.createElement(_Icon2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement(_Title2.default, { title: title, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }));
};

exports.default = HeaderBar;