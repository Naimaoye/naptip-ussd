"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.con = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

var con = _mysql["default"].createConnection({
  host: 'localhost',
  user: 'digitalpulse',
  password: 'digitalpulse@2021',
  database: 'report'
});

exports.con = con;
//# sourceMappingURL=configDB.js.map