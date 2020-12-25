import { App } from '@sifrr/server';
import Ussd from './controllers/registerUssd/ussd-menu'

const app = new App();

const port = 3003;

// parse request url coming from kannel
// give it an empty reply once the user connects 
// parse the url params
// console.log something once the request is made

app.post('/', Ussd

// let ussdQuestionNumber = 0;
// let details = {};


// const responseArray = parseResponseString(text);
// console.log('respArray', responseArray);

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
// } else {
//   res.writeStatus("200 OK").end('invalid msisdn');
// }
).listen(port, token => {
  token ?
  console.log(`Listening to port ${port}`) :
  console.log(`Failed to listen to port ${port}`);
});

