"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _redis = _interopRequireDefault(require("redis"));

var client = _redis["default"].createClient(6379);

client.on("connect", function () {// console.error("connected to redis...");
});
client.on("ready", function () {//console.error("connected to redis and ready to use");
});
client.on("error", function (error) {//console.error("redis error", error.message);
});
client.on("end", function () {//console.error("client disconnected");
});
client.on("ready", function () {//console.error("connected to redis and ready to use");
});
var _default = client;
exports["default"] = _default;
//# sourceMappingURL=redis-config.js.map