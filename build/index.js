"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _server = require("@sifrr/server");

var _qs = _interopRequireDefault(require("qs"));

var _ussd = _interopRequireDefault(require("./controllers/ussd"));

var _parsedResponse = require("./utils/parsedResponse");

//import { readJson } from './utils/readJson';
// import {
// GENDER_ARRAY_Q1,
// INCIDENCE_ARRAY_Q2,
// //STATE_FIRST_LETTER_Q3,
// STATE_ARRAY_1,
// STATE_ARRAY_2,
// STATE_ARRAY_3,
// STATE_ARRAY_4,
// STATE_ARRAY_5,
// GENDER_ARRAY_PATTERN,
// INCIDENCE_ARRAY_PATTERN,
// STATE_FIRST_LETTER_PATTERN,
// STATE_ARRAY_PATTERN,
// } from './utils/constants';
//const app = new App();
var port = 3003; // parse request url coming from kannel
// give it an empty reply once the user connects 
// parse the url params
// send other request through fetch client
// console.log something once the request is made

var app = new _server.App(function (res, req) {
  // let ussdQuestionNumber = 0;
  // let details = {};
  console.log('request', req);

  var request = _qs["default"].parse(req.getQuery());

  console.log(request);
  console.log('res', res); //const responseArray = parseResponseString(text);
  //console.log('respArray', responseArray);
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
  // menu.run(query, (ussdResult) => {
  //    res.writeStatus("200 OK").end(ussdResult);
  // });

  res.end('done');
}).listen(port, function (token) {
  token ? console.log("Listening to port ".concat(port)) : console.log("Failed to listen to port ".concat(port));
});
console.log('app', app);
//# sourceMappingURL=index.js.map