"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.readJson = void 0;

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var readJson = function readJson(res, cb, err) {
  var buffer;
  /* Register data cb */

  res.onData(function (ab, isLast) {
    var chunk = Buffer.from(ab);

    if (isLast) {
      var json;

      if (buffer) {
        try {
          json = JSON.parse((0, _concat["default"])(Buffer).call(Buffer, [buffer, chunk]));
        } catch (e) {
          /* res.close calls onAborted */
          res.close();
          return;
        }

        cb(json);
      } else {
        try {
          json = JSON.parse(chunk);
        } catch (e) {
          /* res.close calls onAborted */
          res.close();
          return;
        }

        cb(json);
      }
    } else {
      if (buffer) {
        buffer = (0, _concat["default"])(Buffer).call(Buffer, [buffer, chunk]);
      } else {
        buffer = (0, _concat["default"])(Buffer).call(Buffer, [chunk]);
      }
    }
  });
  /* Register error cb */

  res.onAborted(err);
};

exports.readJson = readJson;
//# sourceMappingURL=readJson.js.map