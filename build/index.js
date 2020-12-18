"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _server = require("@sifrr/server");

var _qs = _interopRequireDefault(require("qs"));

var _ussd = _interopRequireDefault(require("./controllers/ussd"));

var _parsedResponse = require("./utils/parsedResponse");

var _constants = require("./utils/constants");

//import { readJson } from './utils/readJson';
var app = new _server.App();
var port = 3003; // parse request url coming from kannel
// give it an empty reply once the user connects 
// parse the url params
// console.log something once the request is made

app.post('/request', function (res, req) {
  // let ussdQuestionNumber = 0;
  // let details = {};
  console.log('Hello, I am here!');

  var query = _qs["default"].parse(req.getQuery());

  var text = query.text,
      msisdn = query.msisdn;
  console.log(text);
  console.log(msisdn);
  var responseArray = (0, _parsedResponse.parseResponseString)(text);
  console.log('respArray', responseArray);

  if (msisdn == '+2347063982876' || msisdn == '+2347063328009') {
    // if(ussdQuestionNumber == 0){
    //   details.questionNumber = 1;
    // }
    // if (details.questionNumber == 1){
    //   if (GENDER_ARRAY_PATTERN.includes(responseArray[0])){
    //     const parseResponseText = parseInt(responseArray[1]);
    //     const genderValue = parseResponseText - 1;
    //     details.gender = GENDER_ARRAY_Q1[genderValue];
    //     details.questionNumber = 2;
    //   }
    // }
    // if(details.questionNumber == 2){
    //   if (INCIDENCE_ARRAY_PATTERN.test(responseArray[0])) {
    //     const parseResponseText = parseInt(responseArray[1]);
    //     const incidenceValue = parseResponseText - 1;
    //     details.incidenceType = INCIDENCE_ARRAY_Q2[incidenceValue];
    //     details.questionNumber = 3;
    // }
    // }
    // if(details.questionNumber == 3){
    //   if (STATE_FIRST_LETTER_PATTERN.test(responseArray[0])) {
    //     const parseResponseText = parseInt(responseArray[1]);
    //     details.stateFirstLetter = parseResponseText;
    //     details.questionNumber = 4;
    // } 
    // }
    // if(details.questionNumber == 4){
    //   if (STATE_ARRAY_PATTERN.test(responseArray[0])) {
    //     if(details.stateFirstLetter == 1){
    //       const parseResponseText = parseInt(responseArray[1]);
    //       const stateOption = parseResponseText - 1;
    //       const state = STATE_ARRAY_1[stateOption];
    //       details.state = state;
    //     } else if(details.stateFirstLetter == 2){
    //       const parseResponseText = parseInt(responseArray[1]);
    //       const stateOption = parseResponseText - 1;
    //       const state = STATE_ARRAY_2[stateOption];
    //       details.state = state;
    //     } else if(details.stateFirstLetter == 3){
    //       const parseResponseText = parseInt(responseArray[1]);
    //       const stateOption = parseResponseText - 1;
    //       const state = STATE_ARRAY_3[stateOption];
    //       details.state = state;
    //     } else if(details.stateFirstLetter == 4){
    //       const parseResponseText = parseInt(responseArray[1]);
    //       const stateOption = parseResponseText - 1;
    //       const state = STATE_ARRAY_4[stateOption];
    //       details.state = state;
    //     } else if(details.stateFirstLetter == 5){
    //       const parseResponseText = parseInt(responseArray[1]);
    //       const stateOption = parseResponseText - 1;
    //       const state = STATE_ARRAY_5[stateOption];
    //       details.state = state;
    //     }
    // }
    // }
    //console.log('details', details);
    _ussd["default"].run(query, function (ussdResult) {
      res.writeStatus("200 OK").end(ussdResult);
    });
  } else {
    res.writeStatus("200 OK").end('invalid msisdn');
  }
}).listen(port, function (token) {
  token ? console.log("Listening to port ".concat(port)) : console.log("Failed to listen to port ".concat(port));
});
//# sourceMappingURL=index.js.map