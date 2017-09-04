'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Moo\\ittp\\ittp-mis\\components\\Title.js';


var Title = function Title(_ref) {
  var title = _ref.title;
  return _react2.default.createElement('div', { className: 'headerTitle', __source: {
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
  })), _react2.default.createElement('div', { className: 'titleStyle', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, title)));
};

Title.propTypes = {
  title: _propTypes2.default.string.isRequired
};

Title.defaultProps = {
  title: 'Portfolio : Summary Page'
};

exports.default = Title;