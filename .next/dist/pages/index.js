'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Wrapper = require('../components/Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _PortSummary = require('../components/PortSummary');

var _PortSummary2 = _interopRequireDefault(_PortSummary);

var _PortSummaryBar = require('../components/PortSummaryBar');

var _PortSummaryBar2 = _interopRequireDefault(_PortSummaryBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Moo\\ittp\\ittp-mis\\pages\\index.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement(_Wrapper2.default, {
    Content: _PortSummary2.default,
    SideContent: _PortSummaryBar2.default,
    title: 'Portfolio : Summary Page',
    pathname: props.url.pathname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  });
};

exports.default = Index;