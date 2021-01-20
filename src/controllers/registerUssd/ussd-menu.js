import qs from 'qs';

import client from '../../utils/redis-config';
import Report from '../../models/db.report';
import {
GENDER_ARRAY_Q1,
INCIDENCE_ARRAY_Q2,
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
    // incidenceConst,
    // stateConst,
    // genderConst,
    // stateConst,
    // incidenceConst,
} from './constants';
import { createClient } from './ussd-functions';

const username = 'test';
const password = 'test';
const baseURL = 'http://10.0.0.46:13150/cgi-bin/sendsms';

// const getUserOptions = (key) => {
        
//     };

export default class Ussd {
    static async registerUssdDetails(res, req) {
        res.end();
    try {
        const queryString = req.getQuery();
        const parseUrl = qs.parse(queryString);
        const metaValue = parseUrl['meta-data'].split('=%')[1].split('&')[0];
        const { msisdn, smsc, shortcode, text } = parseUrl;
        if(msisdn == '2349154100054' || msisdn == '2347058793298' || msisdn == '2348055268896'){
            if(metaValue == '01' && text.includes('#')){
                createClient(baseURL, username, password, shortcode, smsc, msisdn, GENDER_SELECTION, metaValueTwo);
                client.hset(msisdn, "menu", "1");
            } else if(metaValue == '12'){
                client.hget(msisdn, async (err, ansExist) => {
                    if (ansExist.menu == '1') {
                    if (text == '1' || text == '2'){
                        const genderIndex = parseInt(text) - 1;
                        const gender = GENDER_ARRAY_Q1[genderIndex];
                        client.hset(msisdn, "data.gender", gender);
                        createClient(baseURL, username, password, shortcode, smsc, msisdn, INCIDENCE_SELECTION, metaValueTwo);
                        client.hset(msisdn, "menu", "2");
                        } else { 
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, GENDER_SELECTION_INVALID, metaValueTwo);
                            client.hset(msisdn, "menu", "1");
                        }
                }
              });
              client.hgetall(msisdn, async (err, ansExist) => {
                if (ansExist.menu == '2') {
                        if (text == '1' || text == '2' || text == '3' || text == '4' || text == '5'){
                            const incidenceIndex = parseInt(text) - 1;
                            const incidenceType = INCIDENCE_ARRAY_Q2[incidenceIndex];
                            client.hset(msisdn, "data.incidence", incidenceType);
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_ALPHABET_SELECTION, metaValueTwo);
                            client.hset(msisdn, "menu", "3");
                        } else {
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, INCIDENCE_SELECTION_INVALID, metaValueTwo);
                            client.hset(msisdn, "menu", "2");
                        }
                } 
              });
              client.hget(msisdn, async (err, ansExist) => {
                if (ansExist.menu == '3') {
                        if (text === '1'){
                            client.hset(msisdn, "data.firstLetter", 'A-B');
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_SELECTION_PAGE1, metaValueTwo);
                            client.hset(msisdn, "menu", "4");
                     } else if (text == '2'){
                            client.hset(msisdn, "data.firstLetter", 'C-I');
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_SELECTION_PAGE2, metaValueTwo);
                            client.hset(msisdn, "menu", "4");
                    } else if (text == '3'){
                            client.hset(msisdn, "data.firstLetter", 'J-L');
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_SELECTION_PAGE3, metaValueTwo);
                            client.hset(msisdn, "menu", "4");
                    } else if (text == '4'){
                            client.hset(msisdn, "data.firstLetter", 'N-R');
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_SELECTION_PAGE4, metaValueTwo);
                            client.hset(msisdn, "menu", "4");
                    } else if (text == '5'){
                            client.hset(msisdn, "data.firstLetter", 'S-Z');
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_SELECTION_PAGE5, metaValueTwo);
                            client.hset(msisdn, "menu", "4");
                    } else if (text == '0' && text !== '1' || text !== '2' || text !== '3' || text !== '4' || text !== '5') {
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_ALPHABET_SELECTION, metaValueTwo);
                            client.hset(msisdn, "menu", "4");
                        } 
                } 
              });
              client.hget(msisdn, async (err, ansExist) => {
                if (ansExist.menu == '4') {
                    if (text == '1' || text == '2' || text == '3' || text == '4' || text == '5' || text == '6' || text == '7' || text == '8'){
                        if(ansExist.data.firstLetter == 'A-B'){
                            const stateIndex = parseInt(text) - 1;
                            const state = STATE_ARRAY_1[stateIndex];
                            client.hset(msisdn, "data.state", state);
                        } else if(ansExist.data.firstLetter == 'C-I'){
                            const stateIndex = parseInt(text) - 1;
                            const state = STATE_ARRAY_2[stateIndex];
                            client.hset(msisdn, "data.state", state);
                        } else if(ansExist.data.firstLetter == 'J-L'){
                            const stateIndex = parseInt(text) - 1;
                            const state = STATE_ARRAY_3[stateIndex];
                            client.hset(msisdn, "data.state", state);
                        } else if(ansExist.data.firstLetter == 'N-R'){
                            const stateIndex = parseInt(text) - 1;
                            const state = STATE_ARRAY_4[stateIndex];
                            client.hset(msisdn, "data.state", state);
                        } else {
                            const stateIndex = parseInt(text) - 1;
                            const state = STATE_ARRAY_5[stateIndex];
                            client.hset(msisdn, "data.state", state);
                        }
                        // retrieve values
                        const gender = client.hget(msisdn, "data.gender");
                        const incidence = client.hget(msisdn, "data.incidence");
                        const state = client.hget(msisdn, "data.state");
                        console.log("options", gender, incidence, state);
                    createClient(baseURL, username, password, shortcode, smsc, msisdn, SUCCESS_MESSAGE, metaValue16);
                } else if (text !== '0' && text !== '1' || text !== '2' || text !== '3' || text !== '4' || text !== '5' || text !== '6' || text !== '7' || text !== '8') {
                    createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_ALPHABET_SELECTION_INVALID, metaValueTwo);
                    client.hset(msisdn, "menu", "3");
                    }
                } 
              });
            } else if (metaValue == '21' || metaValue == '13'){
                const empty = "";
                createClient(baseURL, username, password, shortcode, smsc, msisdn, empty, metaValue16);
            } else {
                const empty = "";
                createClient(baseURL, username, password, shortcode, smsc, msisdn, empty, metaValue16);
            }  
        } else {
            const empty = "";
            createClient(baseURL, username, password, shortcode, smsc, msisdn, empty, metaValue16);
            }
    } catch(e){
        console.log("error", e);
    }


}
}


