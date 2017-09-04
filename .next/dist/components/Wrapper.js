'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Sidebar = require('../components/Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _HeaderBar = require('../components/HeaderBar');

var _HeaderBar2 = _interopRequireDefault(_HeaderBar);

var _MainContent = require('../components/MainContent');

var _MainContent2 = _interopRequireDefault(_MainContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Moo\\ittp\\ittp-mis\\components\\Wrapper.js';


var Wrapper = function Wrapper(_ref) {
  var Content = _ref.Content,
      SideContent = _ref.SideContent,
      title = _ref.title,
      pathname = _ref.pathname;
  return _react2.default.createElement('div', { className: 'wrapper', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('link', { href: '/static/style.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), _react2.default.createElement(_HeaderBar2.default, { title: title, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement(_Sidebar2.default, { pathname: pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_MainContent2.default, { Content: Content, SideContent: SideContent, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
};

exports.default = Wrapper;