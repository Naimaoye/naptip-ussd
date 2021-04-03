"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _server = require("@sifrr/server");

var _mysql = _interopRequireDefault(require("mysql"));

var _ussdMenu = _interopRequireDefault(require("./controllers/registerUssd/ussd-menu"));

var _db = require("./models/db.report");

var _configDB = require("./utils/configDB");

require('./utils/redis-config');

var app = new _server.App();
var port = 9975;

_configDB.con.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  } // create table


  _configDB.con.query(_db.createIncidenceTable, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log('');
    }
  });

  console.log('');
});

app.get('/proxy', _ussdMenu["default"].registerUssdDetails).listen(port, function (token) {
  token ? console.log("Listening to port ".concat(port)) : console.log("Failed to listen to port ".concat(port));
});
//# sourceMappingURL=index.js.map