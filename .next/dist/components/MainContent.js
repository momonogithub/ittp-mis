'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SideBarContent = require('./SideBarContent');

var _SideBarContent2 = _interopRequireDefault(_SideBarContent);

var _ContentWrapper = require('./ContentWrapper');

var _ContentWrapper2 = _interopRequireDefault(_ContentWrapper);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Moo\\ittp\\ittp-mis\\components\\MainContent.js';


var MainContent = function MainContent(_ref) {
  var Content = _ref.Content,
      SideContent = _ref.SideContent;
  return _react2.default.createElement('div', { className: 'content', __source: {
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
  })), _react2.default.createElement(_SideBarContent2.default, { SideContent: SideContent, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement(_ContentWrapper2.default, { Content: Content, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }));
};

exports.default = MainContent;