"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.parseData = exports.stringifyData = exports.createClient = void 0;

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _axios = _interopRequireDefault(require("axios"));

var createClient = function createClient(baseURL, username, password, shortcode, smsc, msisdn, text, metaData, keyword, id, smsBoxURL) {
  _axios["default"].get(baseURL, {
    params: {
      'path': baseURL,
      'username': username,
      'id': id,
      'password': password,
      'from': shortcode,
      'shortcode': '346',
      'smsc': smsc,
      'to': msisdn,
      'msisdn': msisdn,
      'text': text,
      'keyword': keyword,
      'smsbox-url': smsBoxURL,
      'network': 'mtn',
      'meta-data': metaData
    }
  }).then(function (response) {
    console.log('resp', response);
  })["catch"](function (error) {
    console.log('err', error);
  });
};

exports.createClient = createClient;

var stringifyData = function stringifyData(data) {
  return (0, _stringify["default"])(data);
};

exports.stringifyData = stringifyData;

var parseData = function parseData(data) {
  return JSON.parse(data);
};

exports.parseData = parseData;
//# sourceMappingURL=ussd-functions.js.map