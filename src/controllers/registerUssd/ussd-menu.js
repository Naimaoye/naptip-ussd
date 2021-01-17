import qs from 'qs';

import client from '../../utils/redis-config';
import Report from '../../models/db.report';
import {
GENDER_ARRAY_Q1,
INCIDENCE_ARRAY_Q2,
STATE_FIRST_LETTER_Q3,
STATE_ARRAY_1,
STATE_ARRAY_2,
STATE_ARRAY_3,
STATE_ARRAY_4,
STATE_ARRAY_5,
} from '../../utils/constants';

import {
    SUCCESS_MESSAGE,
    GENDER_SELECTION,
    INCIDENCE_SELECTION,
    STATE_ALPHABET_SELECTION,
    STATE_SELECTION_PAGE1,
    STATE_SELECTION_PAGE2,
    STATE_SELECTION_PAGE3,
    STATE_SELECTION_PAGE4,
    STATE_SELECTION_PAGE5,
    GENDER_SELECTION_INVALID,
    INCIDENCE_SELECTION_INVALID,
    STATE_ALPHABET_SELECTION_INVALID,
    metaValueTwo,
    metaValue16,
    genderConst,
    stateConst,
    incidenceConst,
} from './constants';
import { createClient } from './ussd-functions';

const username = 'test';
const password = 'test';
const baseURL = 'http://10.0.0.56:13150/cgi-bin/sendsms';

// const getUserOptions = (key) => {
        
//     };

export default class Ussd {
    static async registerUssdDetails(res, req) {
        res.end();
        const queryString = req.getQuery();
        const parseUrl = qs.parse(queryString);
        const metaValue = parseUrl['meta-data'].split('=%')[1];
        const { msisdn, smsc, shortcode, text } = parseUrl;
        const questionNumber = 'questionNumber';
        if(msisdn == '2349154100054' || msisdn == '2347058793298' || msisdn == '2348055268896'){
            if(metaValue == '01&' || metaValue == '01' || metaValue == '1&' && text.includes('#')){
                createClient(baseURL, username, password, shortcode, smsc, msisdn, GENDER_SELECTION, metaValueTwo);
                client.setex('questionNumber', 120,'1');
            } else {
            client.get(questionNumber, async (err, ansExist) => {
                if (ansExist == '1') {
                    if (metaValue == '12&' && text == '1' || text == '2'){
                        const genderIndex = parseInt(text) - 1;
                        const gender = GENDER_ARRAY_Q1[genderIndex];
                        client.set("gender", gender);
                        createClient(baseURL, username, password, shortcode, smsc, msisdn, INCIDENCE_SELECTION, metaValueTwo);
                            client.setex('questionNumber', 120,'2');
                        } else { 
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, GENDER_SELECTION_INVALID, metaValueTwo);
                            // const genderIndex = parseInt(text) - 1;
                            // const gender = GENDER_ARRAY_Q1[genderIndex];
                            // client.set("gender", gender);
                            client.setex('questionNumber', 120,'1');
                        }
                }
              });
              client.get(questionNumber, async (err, ansExist) => {
                if (ansExist == '2') {
                        if (metaValue == '12&' && text == '1' || text == '2' || text == '3' || text == '4' || text == '5'){
                            const incidenceIndex = parseInt(text) - 1;
                            const incidenceType = INCIDENCE_ARRAY_Q2[incidenceIndex];
                            client.set("incidence", incidenceType, (err, reply) => {
                                if (err) throw err;
                                console.log("incidence",reply);
                            });
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_ALPHABET_SELECTION, metaValueTwo);
                            client.setex('questionNumber', 120,'3');
                        } else {
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, INCIDENCE_SELECTION_INVALID, metaValueTwo);
                            // const incidenceIndex = parseInt(text) - 1;
                            // const incidenceType = INCIDENCE_ARRAY_Q2[incidenceIndex];
                            // client.set("incidence", incidenceType);
                            client.setex('questionNumber', 120,'2');
                        }
                } 
              });
              client.get(questionNumber, async (err, ansExist) => {
                if (ansExist == '3') {
                        if (metaValue == '12&' && text === '1'){
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_SELECTION_PAGE1, metaValueTwo);
                            const stateIndex = parseInt(text) - 1;
                            const state = STATE_FIRST_LETTER_Q3[stateIndex];
                            client.set("firstLetter", state);
                            client.setex('questionNumber', 120, '4');
                     } else if (metaValue == '12&' && text == '2'){
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_SELECTION_PAGE2, metaValueTwo);
                            const stateIndex = parseInt(text) - 1;
                            const state = STATE_FIRST_LETTER_Q3[stateIndex];
                            client.set("firstLetter", state);
                            client.setex('questionNumber', 120, '4');
                    } else if (metaValue == '12&' && text == '3'){
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_SELECTION_PAGE3, metaValueTwo);
                            const stateIndex = parseInt(text) - 1;
                            const state = STATE_FIRST_LETTER_Q3[stateIndex];
                            client.set("firstLetter", state);
                            client.setex('questionNumber', 120, '4');
                    } else if (metaValue == '12&' && text == '4'){
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_SELECTION_PAGE4, metaValueTwo);
                            const stateIndex = parseInt(text) - 1;
                            const state = STATE_FIRST_LETTER_Q3[stateIndex];
                            client.set("firstLetter", state);
                            client.setex('questionNumber', 120,'4');
                    } else if (metaValue == '12&' && text == '5'){
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_SELECTION_PAGE5, metaValueTwo);
                            const stateIndex = parseInt(text) - 1;
                            const state = STATE_FIRST_LETTER_Q3[stateIndex];
                            client.set("firstLetter", state);
                            client.setex('questionNumber', 120,'4');
                    } else if (metaValue == '12&' && text == '0' && text !== '1' || text !== '2' || text !== '3' || text !== '4' || text !== '5') {
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_ALPHABET_SELECTION, metaValueTwo);
                            client.setex('questionNumber', 120,'3');
                        } 
                } 
              });
              client.get(questionNumber, async (err, ansExist) => {
                if (ansExist == '4') {
                    client.get("firstLetter", async (err, ansExist) => {
                        if(metaValue == '12&' && ansExist == 'A-B' && text == '1' || text == '2' || text == '3' || text == '4' || text == '5' || text == '6' || text == '7' || text == '8'){
                            const stateIndex = parseInt(text) - 1;
                            const state = STATE_ARRAY_1[stateIndex];
                            client.set("state", state);
                        } else if(metaValue == '12&' && ansExist == 'C-I' && text == '1' || text == '2' || text == '3' || text == '4' || text == '5' || text == '6' || text == '7' || text == '8'){
                            const stateIndex = parseInt(text) - 1;
                            const state = STATE_ARRAY_2[stateIndex];
                            client.set("state", state);
                        } else if(metaValue == '12&' && ansExist == 'J-L' && text == '1' || text == '2' || text == '3' || text == '4' || text == '5' || text == '6' || text == '7' || text == '8'){
                            const stateIndex = parseInt(text) - 1;
                            const state = STATE_ARRAY_3[stateIndex];
                            client.set("state", state);
                        } else if(metaValue == '12&' && ansExist == 'N-R' && text == '1' || text == '2' || text == '3' || text == '4' || text == '5' || text == '6' || text == '7' || text == '8'){
                            const stateIndex = parseInt(text) - 1;
                            const state = STATE_ARRAY_4[stateIndex];
                            client.set("state", state);
                        } else if(metaValue == '12&' && ansExist == 'S-Z' && text == '1' || text == '2' || text == '3' || text == '4' || text == '5'){
                            const stateIndex = parseInt(text) - 1;
                            const state = STATE_ARRAY_5[stateIndex];
                            client.set("state", state);
                        }
                    })
    
                   // retrieve values here...
                   const optionArr = [];
                   client.get(genderConst, async (err, ansExist) => {
                        if(ansExist){
                            optionArr.push(ansExist);
                            console.log('gender', ansExist);
                        }
                   });
                   client.get(incidenceConst, async (err, ansExist) => {
                    if(ansExist){
                        optionArr.push(ansExist);
                        console.log('incidence', ansExist);
                    }
                });
                client.get(stateConst, async (err, ansExist) => {
                    if(ansExist){
                        optionArr.push(ansExist);
                        console.log('state', ansExist);
                    }
                });
                console.log("options", optionArr);
            
                    createClient(baseURL, username, password, shortcode, smsc, msisdn, SUCCESS_MESSAGE, metaValue16);
                    
            } else if (metaValue == '21&' && text !== '0' && 
            text !== '1' || text !== '2' || 
            text !== '3' || text !== '4' || 
            text !== '5' || text !== '6' || 
             text !== '7' || text !== '8') {
                createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_ALPHABET_SELECTION_INVALID, metaValueTwo);
                client.setex('questionNumber', 120,'3');
                }
              });
            }   
        } else {
            const empty = "";
            createClient(baseURL, username, password, shortcode, smsc, msisdn, empty, metaValue16);
            }
    }
}


