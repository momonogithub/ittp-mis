'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.monthToMonth = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var monthToMonth = exports.monthToMonth = function monthToMonth(year, month) {
  var arr = [];
  var count = 0;
  while (count < 13) {
    arr.push((0, _moment2.default)('' + year + month, 'YYYYM').subtract(count, 'month').format('MMM YY'));
    count += 1;
  }
  return arr;
};