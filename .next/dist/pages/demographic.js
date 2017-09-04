'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Wrapper = require('../components/Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _store = require('../store');

var _DemoContent = require('../components/Demographic/DemoContent');

var _DemoContent2 = _interopRequireDefault(_DemoContent);

var _DemoBar = require('../components/Demographic/DemoBar');

var _DemoBar2 = _interopRequireDefault(_DemoBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Moo\\ittp\\ittp-mis\\pages\\demographic.js?entry';


var Demographic = function Demographic(props) {
  return _react2.default.createElement(_Wrapper2.default, {
    Content: _DemoContent2.default,
    SideContent: _DemoBar2.default,
    title: 'Demographic : Total Account Profile',
    pathname: props.url.pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  });
};

exports.default = Demographic;