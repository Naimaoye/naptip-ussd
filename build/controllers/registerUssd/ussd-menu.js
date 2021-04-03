"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _qs = _interopRequireDefault(require("qs"));

var _redisConfig = _interopRequireDefault(require("../../utils/redis-config"));

var _configDB = require("../../utils/configDB");

var _constants = require("../../utils/constants");

var _constants2 = require("./constants");

var _ussdFunctions = require("./ussd-functions");

var username = 'test';
var password = 'test';
var baseURL = 'http://10.0.0.56:9940/cgi-bin/sendsms';

var Ussd = /*#__PURE__*/function () {
  function Ussd() {
    (0, _classCallCheck2["default"])(this, Ussd);
  }

  (0, _createClass2["default"])(Ussd, null, [{
    key: "registerUssdDetails",
    value: function () {
      var _registerUssdDetails = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(res, req) {
        var queryString, _context, parseUrl, meta, metaValue, msisdn, smsc, shortcode, text, keyword, id, smsBoxUrl, data, empty, _empty, _empty2;

        return _regenerator["default"].wrap(function _callee6$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                res.end(); //console.log('request', req);

                queryString = req.getQuery(); //console.log('string', queryString);

                _context7.prev = 2;

                if (!queryString) {
                  _context7.next = 20;
                  break;
                }

                parseUrl = _qs["default"].parse(queryString);
                meta = parseUrl['meta-data'];

                if (!(meta && (0, _includes["default"])(_context = parseUrl['meta-data']).call(_context, '=%'))) {
                  _context7.next = 17;
                  break;
                }

                metaValue = meta.split('=%')[1].split('&')[0];
                msisdn = parseUrl.msisdn, smsc = parseUrl.smsc, shortcode = parseUrl.shortcode, text = parseUrl.text, keyword = parseUrl.keyword, id = parseUrl.id;
                smsBoxUrl = parseUrl['smsbox-url'];

                if (!(metaValue && msisdn && smsc && shortcode && text && smsBoxUrl && keyword)) {
                  _context7.next = 14;
                  break;
                }

                if (msisdn == '2349154100054' || msisdn == '2347058793298' || msisdn == '2348055268896' || msisdn == '2347058793301') {
                  if (metaValue == '01' && (0, _includes["default"])(text).call(text, '#')) {
                    (0, _ussdFunctions.createClient)(baseURL, username, password, shortcode, smsc, msisdn, _constants2.GENDER_SELECTION, _constants2.metaValueTwo, keyword, id, smsBoxUrl);
                    data = {
                      menu: '1',
                      session: {
                        msisdn: msisdn
                      }
                    };

                    _redisConfig["default"].setex(msisdn, 360, (0, _ussdFunctions.stringifyData)(data));
                  } else if (metaValue == '12') {
                    _redisConfig["default"].get(msisdn, /*#__PURE__*/function () {
                      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, result) {
                        var ansExist, genderIndex, gender, raw, _data, _data2;

                        return _regenerator["default"].wrap(function _callee$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                ansExist = (0, _ussdFunctions.parseData)(result);

                                if (ansExist.menu == '1') {
                                  if (text == '1' || text == '2') {
                                    genderIndex = (0, _parseInt2["default"])(text) - 1;
                                    gender = _constants.GENDER_ARRAY_Q1[genderIndex];
                                    raw = {
                                      menu: '2',
                                      session: {
                                        msisdn: msisdn,
                                        gender: gender
                                      }
                                    };
                                    _data = (0, _ussdFunctions.stringifyData)(raw);
                                    (0, _ussdFunctions.createClient)(baseURL, username, password, shortcode, smsc, msisdn, _constants2.INCIDENCE_SELECTION, _constants2.metaValueTwo, keyword, id, smsBoxUrl);

                                    _redisConfig["default"].setex(msisdn, 360, _data);
                                  } else {
                                    (0, _ussdFunctions.createClient)(baseURL, username, password, shortcode, smsc, msisdn, _constants2.GENDER_SELECTION_INVALID, _constants2.metaValueTwo, keyword, id, smsBoxUrl);
                                    _data2 = {
                                      menu: '1',
                                      session: {
                                        msisdn: msisdn
                                      }
                                    };

                                    _redisConfig["default"].setex(msisdn, 360, (0, _ussdFunctions.stringifyData)(_data2));
                                  }
                                }

                              case 2:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee);
                      }));

                      return function (_x3, _x4) {
                        return _ref.apply(this, arguments);
                      };
                    }());

                    _redisConfig["default"].get(msisdn, /*#__PURE__*/function () {
                      var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(err, result) {
                        var ansExist, incidenceIndex, incidenceType, gender, raw, _data3, _gender, _raw;

                        return _regenerator["default"].wrap(function _callee2$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                ansExist = (0, _ussdFunctions.parseData)(result);

                                if (ansExist.menu == '2') {
                                  if (text == '1' || text == '2' || text == '3' || text == '4' || text == '5') {
                                    incidenceIndex = (0, _parseInt2["default"])(text) - 1;
                                    incidenceType = _constants.INCIDENCE_ARRAY_Q2[incidenceIndex];
                                    gender = ansExist.session.gender;
                                    raw = {
                                      menu: '3',
                                      session: {
                                        msisdn: msisdn,
                                        gender: gender,
                                        incidence: incidenceType
                                      }
                                    };
                                    _data3 = (0, _ussdFunctions.stringifyData)(raw);
                                    (0, _ussdFunctions.createClient)(baseURL, username, password, shortcode, smsc, msisdn, _constants2.STATE_ALPHABET_SELECTION, _constants2.metaValueTwo, keyword, id, smsBoxUrl);

                                    _redisConfig["default"].setex(msisdn, 360, _data3);
                                  } else {
                                    _gender = ansExist.session.gender;
                                    _raw = {
                                      menu: '2',
                                      session: {
                                        msisdn: msisdn,
                                        gender: _gender
                                      }
                                    };

                                    _redisConfig["default"].setex(msisdn, 360, (0, _ussdFunctions.stringifyData)(_raw));

                                    (0, _ussdFunctions.createClient)(baseURL, username, password, shortcode, smsc, msisdn, _constants2.INCIDENCE_SELECTION_INVALID, _constants2.metaValueTwo, keyword, id, smsBoxUrl);
                                  }
                                }

                              case 2:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee2);
                      }));

                      return function (_x5, _x6) {
                        return _ref2.apply(this, arguments);
                      };
                    }());

                    _redisConfig["default"].get(msisdn, /*#__PURE__*/function () {
                      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(err, result) {
                        var ansExist, gender, incidence, raw, _data4, _raw2, _data5, _raw3, _data6, _raw4, _data7, _raw5, _data8, _raw6;

                        return _regenerator["default"].wrap(function _callee3$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                ansExist = (0, _ussdFunctions.parseData)(result);

                                if (ansExist.menu == '3') {
                                  gender = ansExist.session.gender;
                                  incidence = ansExist.session.incidence;

                                  if (text === '1') {
                                    raw = {
                                      menu: '4',
                                      session: {
                                        msisdn: msisdn,
                                        gender: gender,
                                        incidence: incidence,
                                        firstLetter: 'A-B'
                                      }
                                    };
                                    _data4 = (0, _ussdFunctions.stringifyData)(raw);

                                    _redisConfig["default"].setex(msisdn, 360, _data4);

                                    (0, _ussdFunctions.createClient)(baseURL, username, password, shortcode, smsc, msisdn, _constants2.STATE_SELECTION_PAGE1, _constants2.metaValueTwo, keyword, id, smsBoxUrl);
                                  } else if (text == '2') {
                                    _raw2 = {
                                      menu: '4',
                                      session: {
                                        msisdn: msisdn,
                                        gender: gender,
                                        incidence: incidence,
                                        firstLetter: 'C-I'
                                      }
                                    };
                                    _data5 = (0, _ussdFunctions.stringifyData)(_raw2);

                                    _redisConfig["default"].setex(msisdn, 360, _data5);

                                    (0, _ussdFunctions.createClient)(baseURL, username, password, shortcode, smsc, msisdn, _constants2.STATE_SELECTION_PAGE2, _constants2.metaValueTwo, keyword, id, smsBoxUrl);
                                  } else if (text == '3') {
                                    _raw3 = {
                                      menu: '4',
                                      session: {
                                        msisdn: msisdn,
                                        gender: gender,
                                        incidence: incidence,
                                        firstLetter: 'J-L'
                                      }
                                    };
                                    _data6 = (0, _ussdFunctions.stringifyData)(_raw3);

                                    _redisConfig["default"].setex(msisdn, 360, _data6);

                                    (0, _ussdFunctions.createClient)(baseURL, username, password, shortcode, smsc, msisdn, _constants2.STATE_SELECTION_PAGE3, _constants2.metaValueTwo, keyword, id, smsBoxUrl);
                                  } else if (text == '4') {
                                    _raw4 = {
                                      menu: '4',
                                      session: {
                                        msisdn: msisdn,
                                        gender: gender,
                                        incidence: incidence,
                                        firstLetter: 'N-R'
                                      }
                                    };
                                    _data7 = (0, _ussdFunctions.stringifyData)(_raw4);

                                    _redisConfig["default"].setex(msisdn, 360, _data7);

                                    (0, _ussdFunctions.createClient)(baseURL, username, password, shortcode, smsc, msisdn, _constants2.STATE_SELECTION_PAGE4, _constants2.metaValueTwo, keyword, id, smsBoxUrl);
                                  } else if (text == '5') {
                                    _raw5 = {
                                      menu: '4',
                                      session: {
                                        msisdn: msisdn,
                                        gender: gender,
                                        incidence: incidence,
                                        firstLetter: 'S-Z'
                                      }
                                    };
                                    _data8 = (0, _ussdFunctions.stringifyData)(_raw5);

                                    _redisConfig["default"].setex(msisdn, 360, _data8);

                                    (0, _ussdFunctions.createClient)(baseURL, username, password, shortcode, smsc, msisdn, _constants2.STATE_SELECTION_PAGE5, _constants2.metaValueTwo, keyword, id, smsBoxUrl);
                                  } else if (text == '0' && text !== '1' || text !== '2' || text !== '3' || text !== '4' || text !== '5') {
                                    _raw6 = {
                                      menu: '3',
                                      session: {
                                        msisdn: msisdn,
                                        gender: gender,
                                        incidence: incidence
                                      }
                                    };

                                    _redisConfig["default"].setex(msisdn, 360, (0, _ussdFunctions.stringifyData)(_raw6));

                                    (0, _ussdFunctions.createClient)(baseURL, username, password, shortcode, smsc, msisdn, _constants2.STATE_ALPHABET_SELECTION, _constants2.metaValueTwo, keyword, id, smsBoxUrl);
                                  }
                                }

                              case 2:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee3);
                      }));

                      return function (_x7, _x8) {
                        return _ref3.apply(this, arguments);
                      };
                    }());

                    _redisConfig["default"].get(msisdn, /*#__PURE__*/function () {
                      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(err, result) {
                        var ansExist, gender, incidence, stateIndex, state, raw, _data9, _stateIndex, _state, _raw7, _data10, _stateIndex2, _state2, _raw8, _data11, _stateIndex3, _state3, _raw9, _data12, _stateIndex4, _state4, _raw10, _data13, _gender2, _incidence, _raw11, _gender3, _incidence2, _raw12;

                        return _regenerator["default"].wrap(function _callee5$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                ansExist = (0, _ussdFunctions.parseData)(result);

                                if (ansExist.menu == '4') {
                                  if (text == '1' || text == '2' || text == '3' || text == '4' || text == '5' || text == '6' || text == '7' || text == '8') {
                                    gender = ansExist.session.gender;
                                    incidence = ansExist.session.incidence;

                                    if (ansExist.session.firstLetter == 'A-B') {
                                      stateIndex = (0, _parseInt2["default"])(text) - 1;
                                      state = _constants.STATE_ARRAY_1[stateIndex];
                                      raw = {
                                        menu: '4',
                                        session: {
                                          msisdn: msisdn,
                                          gender: gender,
                                          incidence: incidence,
                                          firstLetter: 'A-B',
                                          state: state
                                        }
                                      };
                                      _data9 = (0, _ussdFunctions.stringifyData)(raw);

                                      _redisConfig["default"].setex(msisdn, 360, _data9);
                                    } else if (ansExist.session.firstLetter == 'C-I') {
                                      _stateIndex = (0, _parseInt2["default"])(text) - 1;
                                      _state = _constants.STATE_ARRAY_2[_stateIndex];
                                      _raw7 = {
                                        menu: '4',
                                        session: {
                                          msisdn: msisdn,
                                          gender: gender,
                                          incidence: incidence,
                                          firstLetter: 'C-I',
                                          state: _state
                                        }
                                      };
                                      _data10 = (0, _ussdFunctions.stringifyData)(_raw7);

                                      _redisConfig["default"].setex(msisdn, 360, _data10);
                                    } else if (ansExist.session.firstLetter == 'J-L') {
                                      _stateIndex2 = (0, _parseInt2["default"])(text) - 1;
                                      _state2 = _constants.STATE_ARRAY_3[_stateIndex2];
                                      _raw8 = {
                                        menu: '4',
                                        session: {
                                          msisdn: msisdn,
                                          gender: gender,
                                          incidence: incidence,
                                          firstLetter: 'J-L',
                                          state: _state2
                                        }
                                      };
                                      _data11 = (0, _ussdFunctions.stringifyData)(_raw8);

                                      _redisConfig["default"].setex(msisdn, 360, _data11);
                                    } else if (ansExist.session.firstLetter == 'N-R') {
                                      _stateIndex3 = (0, _parseInt2["default"])(text) - 1;
                                      _state3 = _constants.STATE_ARRAY_4[_stateIndex3];
                                      _raw9 = {
                                        menu: '4',
                                        session: {
                                          msisdn: msisdn,
                                          gender: gender,
                                          incidence: incidence,
                                          firstLetter: 'N-R',
                                          state: _state3
                                        }
                                      };
                                      _data12 = (0, _ussdFunctions.stringifyData)(_raw9);

                                      _redisConfig["default"].setex(msisdn, 360, _data12);
                                    } else {
                                      _stateIndex4 = (0, _parseInt2["default"])(text) - 1;
                                      _state4 = _constants.STATE_ARRAY_5[_stateIndex4];
                                      _raw10 = {
                                        menu: '4',
                                        session: {
                                          msisdn: msisdn,
                                          gender: gender,
                                          incidence: incidence,
                                          firstLetter: 'S-Z',
                                          state: _state4
                                        }
                                      };
                                      _data13 = (0, _ussdFunctions.stringifyData)(_raw10);

                                      _redisConfig["default"].setex(msisdn, 360, _data13);
                                    } // retrieve values


                                    _redisConfig["default"].get(msisdn, /*#__PURE__*/function () {
                                      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(err, result) {
                                        var ansExist, gender, incidence, state, phoneNumber, date, dateValue, postData, sql;
                                        return _regenerator["default"].wrap(function _callee4$(_context5) {
                                          while (1) {
                                            switch (_context5.prev = _context5.next) {
                                              case 0:
                                                ansExist = (0, _ussdFunctions.parseData)(result);
                                                gender = ansExist.session.gender;
                                                incidence = ansExist.session.incidence;
                                                state = ansExist.session.state;
                                                phoneNumber = ansExist.session.msisdn;
                                                date = new Date().toISOString();
                                                dateValue = date.split('T')[0]; // Bulk insert into DB and clear cache

                                                postData = {
                                                  created_date: dateValue,
                                                  gender: gender,
                                                  phone_number: phoneNumber,
                                                  reporter_state: state,
                                                  type: incidence
                                                };
                                                sql = 'INSERT INTO incidence SET ?';

                                                _configDB.con.query(sql, postData, function (err, result) {
                                                  if (err) {
                                                    console.log("err", err);
                                                  } else {
                                                    console.log("1 record inserted, ID: " + result);
                                                  }
                                                });

                                              case 10:
                                              case "end":
                                                return _context5.stop();
                                            }
                                          }
                                        }, _callee4);
                                      }));

                                      return function (_x11, _x12) {
                                        return _ref5.apply(this, arguments);
                                      };
                                    }());

                                    (0, _ussdFunctions.createClient)(baseURL, username, password, shortcode, smsc, msisdn, _constants2.SUCCESS_MESSAGE, _constants2.metaValue16, keyword, id, smsBoxUrl);

                                    _redisConfig["default"].DEL(msisdn);
                                  } else if (text == '0') {
                                    _gender2 = ansExist.session.gender;
                                    _incidence = ansExist.session.incidence;
                                    _raw11 = {
                                      menu: '3',
                                      session: {
                                        msisdn: msisdn,
                                        gender: _gender2,
                                        incidence: _incidence
                                      }
                                    };

                                    _redisConfig["default"].setex(msisdn, 360, (0, _ussdFunctions.stringifyData)(_raw11));

                                    (0, _ussdFunctions.createClient)(baseURL, username, password, shortcode, smsc, msisdn, _constants2.STATE_ALPHABET_SELECTION, _constants2.metaValueTwo, keyword, id, smsBoxUrl);
                                  } else if (text !== '0' || text !== '1' || text !== '2' || text !== '3' || text !== '4' || text !== '5' || text !== '6' || text !== '7' || text !== '8') {
                                    _gender3 = ansExist.session.gender;
                                    _incidence2 = ansExist.session.incidence;
                                    _raw12 = {
                                      menu: '3',
                                      session: {
                                        msisdn: msisdn,
                                        gender: _gender3,
                                        incidence: _incidence2
                                      }
                                    };

                                    _redisConfig["default"].setex(msisdn, 360, (0, _ussdFunctions.stringifyData)(_raw12));

                                    (0, _ussdFunctions.createClient)(baseURL, username, password, shortcode, smsc, msisdn, _constants2.STATE_ALPHABET_SELECTION_INVALID, _constants2.metaValueTwo, keyword, id, smsBoxUrl);
                                  }
                                }

                              case 2:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee5);
                      }));

                      return function (_x9, _x10) {
                        return _ref4.apply(this, arguments);
                      };
                    }());
                  } else if (metaValue == '21' || metaValue == '13') {
                    empty = "";
                    (0, _ussdFunctions.createClient)(baseURL, username, password, shortcode, smsc, msisdn, empty, _constants2.metaValue16, keyword, id, smsBoxUrl);
                  } else {
                    _empty = "";
                    (0, _ussdFunctions.createClient)(baseURL, username, password, shortcode, smsc, msisdn, _empty, _constants2.metaValue16, keyword, id, smsBoxUrl);
                  }
                } else {
                  _empty2 = "";
                  (0, _ussdFunctions.createClient)(baseURL, username, password, shortcode, smsc, msisdn, _empty2, _constants2.metaValue16, keyword, id, smsBoxUrl);
                }

                _context7.next = 15;
                break;

              case 14:
                throw new Error('Incomplete query parameters received!');

              case 15:
                _context7.next = 18;
                break;

              case 17:
                throw new Error('Invalid query string');

              case 18:
                _context7.next = 21;
                break;

              case 20:
                throw new Error('Invalid query string!');

              case 21:
                _context7.next = 26;
                break;

              case 23:
                _context7.prev = 23;
                _context7.t0 = _context7["catch"](2);
                console.log("error", _context7.t0);

              case 26:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee6, null, [[2, 23]]);
      }));

      function registerUssdDetails(_x, _x2) {
        return _registerUssdDetails.apply(this, arguments);
      }

      return registerUssdDetails;
    }()
  }]);
  return Ussd;
}();

exports["default"] = Ussd;
//# sourceMappingURL=ussd-menu.js.map