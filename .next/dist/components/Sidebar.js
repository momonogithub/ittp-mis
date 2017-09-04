'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Moo\\ittp\\ittp-mis\\components\\Sidebar.js';


var Sidebar = function Sidebar(_ref) {
  var pathname = _ref.pathname;
  return _react2.default.createElement('div', { className: 'sidebar', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('link', { href: '/static/style.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  })), _react2.default.createElement(_link2.default, { href: '/index', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('div', { className: pathname === '/index' ? 'sideItem is-active' : 'sideItem', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Portfolio')), _react2.default.createElement(_link2.default, { href: '/channel', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('div', { className: pathname === '/channel' ? 'sideItem is-active' : 'sideItem', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'Channel')), _react2.default.createElement(_link2.default, { href: '/demographic', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('div', { className: pathname === '/demographic' ? 'sideItem is-active' : 'sideItem', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'Demographic')), _react2.default.createElement(_link2.default, { href: '/netflow', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('div', { className: pathname === '/netflow' ? 'sideItem is-active' : 'sideItem', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'Netflow')));
};

exports.default = Sidebar;