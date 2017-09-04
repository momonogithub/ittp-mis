'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setYear = exports.setMonth = exports.SET_YEAR = exports.SET_MONTH = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_MONTH = exports.SET_MONTH = 'SET_MONTH';
var SET_YEAR = exports.SET_YEAR = 'SET_YEAR';

var initialState = {
  month: 0,
  year: 0
};

var setMonth = exports.setMonth = function setMonth(month) {
  return {
    type: SET_MONTH,
    payload: month
  };
};

var setYear = exports.setYear = function setYear(year) {
  return {
    type: SET_YEAR,
    payload: year
  };
};

var dateReducer = function dateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case SET_MONTH:
      {
        return (0, _extends3.default)({}, state, {
          month: action.payload
        });
      }
    case SET_YEAR:
      {
        return (0, _extends3.default)({}, state, {
          year: action.payload
        });
      }
    default:
      return state;
  }
};

exports.default = dateReducer;