'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _rootReducer = require('./reduxModules/rootReducer');

var _rootReducer2 = _interopRequireDefault(_rootReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = exports.store = (0, _redux.createStore)(_rootReducer2.default, (0, _reduxDevtoolsExtension.composeWithDevTools)());