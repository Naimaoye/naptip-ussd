"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.parseResponseString = void 0;

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

/**
 *
 * @param ussdResponse
 * @returns array with first index represent response without next or back number
 * and second index represents the last selected option
 */
var parseResponseString = function parseResponseString(ussdResponse) {
  if (ussdResponse === '0') {
    return ['', '0'];
  } else {
    var parsedResponse = ussdResponse.split('*');
    var lastSelectedOption = (0, _slice["default"])(parsedResponse).call(parsedResponse, -1)[0]; // remove 00 or 0 from the parsed response

    var updatedResponse = (0, _filter["default"])(parsedResponse).call(parsedResponse, function (item) {
      if (item == '0' || item == '00') {
        return false;
      } else {
        return true;
      }
    });
    /**
     * return empty string for empty array in case the array only consist of 0 and 00.
     * return string with *
     */

    var ussdText = updatedResponse.join('*');
    return [ussdText, lastSelectedOption];
  }
};

exports.parseResponseString = parseResponseString;
//# sourceMappingURL=parsedResponse.js.map