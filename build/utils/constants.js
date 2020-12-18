"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.STATE_ARRAY_PATTERN = exports.STATE_FIRST_LETTER_PATTERN = exports.INCIDENCE_ARRAY_PATTERN = exports.GENDER_ARRAY_PATTERN = exports.STATE_ARRAY_5 = exports.STATE_ARRAY_4 = exports.STATE_ARRAY_3 = exports.STATE_ARRAY_2 = exports.STATE_ARRAY_1 = exports.STATE_FIRST_LETTER_Q3 = exports.INCIDENCE_ARRAY_Q2 = exports.GENDER_ARRAY_Q1 = void 0;
var GENDER_ARRAY_Q1 = ['male', 'female'];
exports.GENDER_ARRAY_Q1 = GENDER_ARRAY_Q1;
var INCIDENCE_ARRAY_Q2 = ["rape", "violence", "humanTrafficking", "childLabour", "others"];
exports.INCIDENCE_ARRAY_Q2 = INCIDENCE_ARRAY_Q2;
var STATE_FIRST_LETTER_Q3 = ["A-B", "C-I", "J-L", "N-R", "S-Z"];
exports.STATE_FIRST_LETTER_Q3 = STATE_FIRST_LETTER_Q3;
var STATE_ARRAY_1 = ["abia", "adamawa", "akwaIbom", "anambra", "bauchi", "bayelsa", "benue", "borno"];
exports.STATE_ARRAY_1 = STATE_ARRAY_1;
var STATE_ARRAY_2 = ["crossRiver", "delta", "ebonyi", "edo", "ekiti", "enugu", "gombe", "imo"];
exports.STATE_ARRAY_2 = STATE_ARRAY_2;
var STATE_ARRAY_3 = ["jigawa", "kaduna", "kano", "katsina", "kebbi", "kogi", "kwara", "lagos"];
exports.STATE_ARRAY_3 = STATE_ARRAY_3;
var STATE_ARRAY_4 = ["nasarawa", "niger", "ogun", "ondo", "osun", "oyo", "plateau", "rivers"];
exports.STATE_ARRAY_4 = STATE_ARRAY_4;
var STATE_ARRAY_5 = ["sokoto", "taraba", "yobe", "zamfara"];
exports.STATE_ARRAY_5 = STATE_ARRAY_5;
var GENDER_ARRAY_PATTERN = ['1', '2'];
exports.GENDER_ARRAY_PATTERN = GENDER_ARRAY_PATTERN;
var INCIDENCE_ARRAY_PATTERN = /^[1-2]\*[1-5]$/; //i.e 3*2

exports.INCIDENCE_ARRAY_PATTERN = INCIDENCE_ARRAY_PATTERN;
var STATE_FIRST_LETTER_PATTERN = /^[1-2]\*[1-5]\*[1-5]$/; // 3*2*4

exports.STATE_FIRST_LETTER_PATTERN = STATE_FIRST_LETTER_PATTERN;
var STATE_ARRAY_PATTERN = /^[1-2]\*[1-5]\*[1-5]\*[1-8]$/; //i.e 3*2*3

exports.STATE_ARRAY_PATTERN = STATE_ARRAY_PATTERN;
//# sourceMappingURL=constants.js.map