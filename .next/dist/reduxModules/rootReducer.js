'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxForm = require('redux-form');

var _date = require('./date');

var _date2 = _interopRequireDefault(_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = {
  date: _date2.default,
  form: _reduxForm.reducer // <---- Mounted at 'form'
};
var rootReducer = (0, _redux.combineReducers)(reducers);

exports.default = rootReducer;