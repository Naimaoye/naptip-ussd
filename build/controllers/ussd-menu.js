"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _readJson = require("../utils/readJson");

var Ussd = /*#__PURE__*/function () {
  function Ussd() {
    (0, _classCallCheck2["default"])(this, Ussd);
  }

  (0, _createClass2["default"])(Ussd, null, [{
    key: "registerUssdDetails",
    value: function () {
      var _registerUssdDetails = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(res) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                (0, _readJson.readJson)(res, function (obj) {
                  var text = obj.text;

                  if (text == "" || text == "1*00" || text == "2*00") {
                    console.log('here', text);
                    var response = "CON This is the NAPTIP VAPP Reporter, kindly select your Gender. Enter 1 or 2 to proceed:\n                1. Male\n                2. Female\n                ";
                    res.writeStatus("200 OK").write(response);
                  } else if (text == "1" || text == "2" || text == "1*1*00" || text == "1*2*00" || text == "1*3*00" || text == "1*4*00" || text == "1*5*00" || text == "2*1*00" || text == "2*2*00" || text == "2*3*00" || text == "2*4*00" || text == "2*5*00") {
                    console.log('here', text);
                    var _response = "CON Kindly select the incidence you will like to report. Enter 1,2,3,4,5 to proceed:\n                1. Rape\n                2. Violence\n                3. Human Trafficking\n                4. Child labour\n                5. Others\n                00. Back\n                ";
                    res.writeStatus("200 OK").write(_response);
                  } else if (text == "1*1" || text == "1*2" || text == "1*3" || text == "1*4" || text == "1*5" || text == "2*1" || text == "2*2" || text == "2*3" || text == "2*4" || text == "2*5" || text == "1*1*1*00" || text == "1*2*1*00" || text == "1*3*1*00" || text == "1*4*1*00" || text == "1*5*1*00" || text == "2*1*1*00" || text == "2*2*1*00" || text == "2*3*1*00" || text == "2*4*1*00" || text == "2*5*1*00") {
                    var _response2 = "CON Please select the first letter of your resident state:\n                1. A-B\n                2. C-I\n                3. J-L\n                4. N-R\n                5. S-Z\n                00. Back\n                ";
                    res.cork(function () {
                      res.writeStatus("200 OK").write(_response2);
                    });
                  } else if (text == "1*1*1" || text == "1*2*1" || text == "1*3*1" || text == "1*4*1" || text == "1*5*1" || text == "2*1*1" || text == "2*2*1" || text == "2*3*1" || text == "2*4*1" || text == "2*5*1") {
                    var _response3 = "CON Please select your resident state:\n                1. Abia\n                2. Adamawa\n                3. Akwa Ibom\n                4. Anambra\n                5. Bauchi\n                6. Bayelsa\n                7. Benue\n                8. Borno\n                00. Back\n                ";
                    res.cork(function () {
                      res.writeStatus("200 OK").write(_response3);
                    });
                  } else if (text == "1*1*2" || text == "1*2*2" || text == "1*3*2" || text == "1*4*2" || text == "1*5*2" || text == "2*1*2" || text == "2*2*2" || text == "2*3*2" || text == "2*4*2" || text == "2*5*2") {
                    var _response4 = "CON Please select your resident state:\n                1. Cross River\n                2. Delta\n                3. Ebonyi\n                4. Edo\n                5. Ekiti\n                6. Enugu\n                7. Gombe\n                8. Imo\n                00. Back\n                ";
                    res.cork(function () {
                      res.writeStatus("200 OK").write(_response4);
                    });
                  } else if (text == "1*1*3" || text == "1*2*3" || text == "1*3*3" || text == "1*4*3" || text == "1*5*3" || text == "2*1*3" || text == "2*2*3" || text == "2*3*3" || text == "2*4*3" || text == "2*5*3") {
                    var _response5 = "CON Please select your resident state:\n                1. Jigawa\n                2. Kaduna\n                3. Kano\n                4. Katsina\n                5. Kebbi\n                6. Kogi\n                7. Kwara\n                8. Lagos\n                00. Back\n                ";
                    res.cork(function () {
                      res.writeStatus("200 OK").write(_response5);
                    });
                  } else if (text == "1*1*4" || text == "1*2*4" || text == "1*3*4" || text == "1*4*4" || text == "1*5*4" || text == "2*1*4" || text == "2*2*4" || text == "2*3*4" || text == "2*4*4" || text == "2*5*4") {
                    var _response6 = "CON Please select your resident state:\n                1. Nasarawa\n                2. Niger\n                3. Ogun\n                4. Ondo\n                5. Osun\n                6. Oyo\n                7. Plateau\n                8. Rivers\n                00. Back\n                ";
                    res.cork(function () {
                      res.writeStatus("200 OK").write(_response6);
                    });
                  } else if (text == "1*1*5" || text == "1*2*5" || text == "1*3*5" || text == "1*4*5" || text == "1*5*5" || text == "2*1*5" || text == "2*2*5" || text == "2*3*5" || text == "2*4*5" || text == "2*5*5") {
                    var _response7 = "CON Please select your resident state:\n                1. Sokoto\n                2. Taraba\n                3. Yobe\n                4. Zamfara\n                00. Back\n                ";
                    res.cork(function () {
                      res.writeStatus("200 OK").write(_response7);
                    });
                  }

                  res.end();
                }, function () {
                  /* Request was prematurely aborted or invalid or missing, stop reading */
                  console.log('Invalid JSON or no data at all!');
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function registerUssdDetails(_x) {
        return _registerUssdDetails.apply(this, arguments);
      }

      return registerUssdDetails;
    }()
  }]);
  return Ussd;
}();

exports["default"] = Ussd;
//# sourceMappingURL=ussd-menu.js.map