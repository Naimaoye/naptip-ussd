
import qs from 'qs';

import client from '../../utils/redis-config';
import { con } from '../../utils/configDB';
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
} from './constants';
import { createClient, stringifyData, parseData } from './ussd-functions';

const username = 'test';
const password = 'test';
const baseURL = 'http://10.0.0.70:9940/cgi-bin/sendsms';

export default class Ussd {
    static async registerUssdDetails(res, req) {
        res.end();
        console.log('request', req);
        const queryString = req.getQuery();
        console.log('string', queryString);
    try {
        if(queryString) {
            const parseUrl = qs.parse(queryString);
            const meta = parseUrl['meta-data']
            if(meta && parseUrl['meta-data'].includes('=%')){
                const metaValue = meta.split('=%')[1].split('&')[0];
                const { msisdn, smsc, shortcode, text, keyword, id } = parseUrl;
                const smsBoxUrl = parseUrl['smsbox-url'];
                if(metaValue && msisdn && smsc && shortcode && text && smsBoxUrl && keyword) {
                        if(metaValue == '01' && text.includes('#')){
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, GENDER_SELECTION, metaValueTwo, keyword, id, smsBoxUrl);
                            const data = { menu: '1', session: {msisdn: msisdn} };
                            client.setex(msisdn, 360, stringifyData(data));
                            //res.end();
                        } else if(metaValue == '12'){
                            client.get(msisdn, async (err, result) => {
                                const ansExist = parseData(result);
                                if (ansExist.menu == '1') {
                                if (text == '1' || text == '2'){
                                    const genderIndex = parseInt(text) - 1;
                                    const gender = GENDER_ARRAY_Q1[genderIndex];
                                    const raw = { menu: '2', session: {msisdn: msisdn ,gender: gender} };
                                    const data = stringifyData(raw);
                                    createClient(baseURL, username, password, shortcode, smsc, msisdn, INCIDENCE_SELECTION, metaValueTwo,keyword, id,smsBoxUrl);
                                    client.setex(msisdn, 360, data);
                                    //res.end();
                                    } else { 
                                        createClient(baseURL, username, password, shortcode, smsc, msisdn, GENDER_SELECTION_INVALID, metaValueTwo, keyword, id, smsBoxUrl);
                                        const data = { menu: '1', session: {msisdn: msisdn} };
                                        client.setex(msisdn, 360, stringifyData(data));
                                       // res.end();
                                    }
                            }
                            //res.end();
                          });
                          client.get(msisdn, async (err, result) => {
                            const ansExist = parseData(result)
                            if (ansExist.menu == '2') {
                                    if (text == '1' || text == '2' || text == '3' || text == '4' || text == '5'){
                                        const incidenceIndex = parseInt(text) - 1;
                                        const incidenceType = INCIDENCE_ARRAY_Q2[incidenceIndex];
                                        const gender = ansExist.session.gender;
                                        const raw = { menu: '3', session: {msisdn: msisdn, gender: gender, incidence: incidenceType} };
                                        const data = stringifyData(raw);
                                        createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_ALPHABET_SELECTION, metaValueTwo, keyword, id, smsBoxUrl);
                                        client.setex(msisdn, 360, data);
                                        //res.end();
                                    } else {
                                        const gender = ansExist.session.gender;
                                        const raw = { menu: '2', session: {msisdn: msisdn, gender: gender}}
                                        client.setex(msisdn, 360, stringifyData(raw));
                                        createClient(baseURL, username, password, shortcode, smsc, msisdn, INCIDENCE_SELECTION_INVALID, metaValueTwo, keyword, id, smsBoxUrl);
                                       // res.end();
                                    }
                            } 
                            //res.end();
                          });
                          client.get(msisdn, async (err, result) => {
                            const ansExist = parseData(result)
                            if (ansExist.menu == '3') {
                                    const gender = ansExist.session.gender;
                                    const incidence = ansExist.session.incidence;
                                    if (text === '1'){
                                        const raw = { menu: '4', session: {msisdn: msisdn, gender: gender, incidence: incidence, firstLetter: 'A-B'} };
                                        const data = stringifyData(raw);
                                        client.setex(msisdn, 360, data);
                                        createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_SELECTION_PAGE1, metaValueTwo, keyword, id, smsBoxUrl);
                                        //res.end();
                                    } else if (text == '2'){
                                        const raw = { menu: '4', session: {msisdn: msisdn, gender: gender, incidence: incidence, firstLetter: 'C-I'} };
                                        const data = stringifyData(raw);
                                        client.setex(msisdn, 360, data);
                                        createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_SELECTION_PAGE2, metaValueTwo, keyword, id, smsBoxUrl);
                                       // res.end();
                                    } else if (text == '3'){
                                        const raw = { menu: '4', session: {msisdn: msisdn, gender: gender, incidence: incidence, firstLetter: 'J-L'} };
                                        const data = stringifyData(raw);
                                        client.setex(msisdn, 360, data);
                                        createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_SELECTION_PAGE3, metaValueTwo, keyword, id, smsBoxUrl);
                                       // res.end();
                                    } else if (text == '4'){
                                        const raw = { menu: '4', session: {msisdn: msisdn, gender: gender, incidence: incidence, firstLetter: 'N-R'} };
                                        const data = stringifyData(raw);
                                        client.setex(msisdn, 360, data);
                                        createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_SELECTION_PAGE4, metaValueTwo, keyword, id, smsBoxUrl);
                                       // res.end();
                                    } else if (text == '5'){
                                        const raw = { menu: '4', session: {msisdn: msisdn, gender: gender, incidence: incidence, firstLetter: 'S-Z'} };
                                        const data = stringifyData(raw);
                                        client.setex(msisdn, 360, data);
                                        createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_SELECTION_PAGE5, metaValueTwo, keyword, id, smsBoxUrl);
                                       // res.end();
                                    } else if (text == '0' && text !== '1' || text !== '2' || text !== '3' || text !== '4' || text !== '5') {
                                        const raw = { menu: '3', session: {msisdn: msisdn, gender: gender, incidence: incidence}}
                                        client.setex(msisdn, 360, stringifyData(raw));
                                        createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_ALPHABET_SELECTION, metaValueTwo, keyword, id, smsBoxUrl);
                                        //res.end();
                                    } 
                            } 
                            //res.end();
                          });
                          client.get(msisdn, async (err, result) => {
                            const ansExist = parseData(result)
                            if (ansExist.menu == '4') {
                                if (text == '1' || text == '2' || text == '3' || text == '4' || text == '5' || text == '6' || text == '7' || text == '8'){
                                    const gender = ansExist.session.gender;
                                    const incidence = ansExist.session.incidence;
                                    if(ansExist.session.firstLetter == 'A-B'){
                                        const stateIndex = parseInt(text) - 1;
                                        const state = STATE_ARRAY_1[stateIndex];
                                        const raw = { menu: '4', session: {msisdn: msisdn, gender: gender, incidence: incidence, firstLetter: 'A-B', state: state} };
                                        const data = stringifyData(raw);
                                        client.setex(msisdn, 360, data);
                                       // res.end();
                                    } else if(ansExist.session.firstLetter == 'C-I'){
                                        const stateIndex = parseInt(text) - 1;
                                        const state = STATE_ARRAY_2[stateIndex];
                                        const raw = { menu: '4', session: {msisdn: msisdn, gender: gender, incidence: incidence, firstLetter: 'C-I', state: state} };
                                        const data = stringifyData(raw);
                                        client.setex(msisdn, 360, data);
                                        //res.end();
                                    } else if(ansExist.session.firstLetter == 'J-L'){
                                        const stateIndex = parseInt(text) - 1;
                                        const state = STATE_ARRAY_3[stateIndex];
                                        const raw = { menu: '4', session: {msisdn: msisdn, gender: gender, incidence: incidence, firstLetter: 'J-L', state: state} };
                                        const data = stringifyData(raw);
                                        client.setex(msisdn, 360, data);
                                        //res.end();
                                    } else if(ansExist.session.firstLetter == 'N-R'){
                                        const stateIndex = parseInt(text) - 1;
                                        const state = STATE_ARRAY_4[stateIndex];
                                        const raw = { menu: '4', session: {msisdn: msisdn, gender: gender, incidence: incidence, firstLetter: 'N-R', state: state} };
                                        const data = stringifyData(raw);
                                        client.setex(msisdn, 360, data);
                                        //res.end();
                                    } else {
                                        const stateIndex = parseInt(text) - 1;
                                        const state = STATE_ARRAY_5[stateIndex];
                                        const raw = { menu: '4', session: {msisdn: msisdn, gender: gender, incidence: incidence, firstLetter: 'S-Z', state: state} };
                                        const data = stringifyData(raw);
                                        client.setex(msisdn, 360, data);
                                       // res.end();
                                    }
                                    // retrieve values
                                    client.get(msisdn, async (err, result) => {
                                        const ansExist = parseData(result)
                                        const gender = ansExist.session.gender;
                                        const incidence = ansExist.session.incidence;
                                        const state = ansExist.session.state;
                                        const phoneNumber = ansExist.session.msisdn;
                                        const date = new Date().toISOString();
                                        const dateValue = date.split('T')[0];
                                        // Bulk insert into DB and clear cache
                                        let postData = {
                                            created_date: dateValue,
                                            gender: gender,
                                            phone_number: phoneNumber,
                                            reporter_state: state,
                                            type: incidence,
                                        }
                                        let sql = 'INSERT INTO incidence SET ?';
                                            con.query(sql, postData, function (err, result) {
                                                if (err) {
                                                    console.log("err", err);
                                                }else {
                                                console.log("1 record inserted, ID: " + result);
                                                }
                                            });
                                        });
                                        createClient(baseURL, username, password, shortcode, smsc, msisdn, SUCCESS_MESSAGE, metaValue16, keyword, id, smsBoxUrl);
                                       // res.end();
                                        client.DEL(msisdn);
                            } else if (text == '0') {
                                const gender = ansExist.session.gender;
                                const incidence = ansExist.session.incidence;
                                const raw = { menu: '3', session: {msisdn: msisdn, gender: gender, incidence: incidence}}
                                client.setex(msisdn, 360, stringifyData(raw));
                                createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_ALPHABET_SELECTION, metaValueTwo, keyword, id, smsBoxUrl);
                               // res.end();
                            } else if (text !== '0' || text !== '1' || text !== '2' || text !== '3' || text !== '4' || text !== '5' || text !== '6' || text !== '7' || text !== '8') {
                                const gender = ansExist.session.gender;
                                const incidence = ansExist.session.incidence;
                                const raw = { menu: '3', session: {msisdn: msisdn, gender: gender, incidence: incidence}}
                                client.setex(msisdn, 360, stringifyData(raw));
                                createClient(baseURL, username, password, shortcode, smsc, msisdn, STATE_ALPHABET_SELECTION_INVALID, metaValueTwo, keyword, id, smsBoxUrl);
                               // res.end();
                            }
                            } 
                            //res.end();
                        });
                        //res.end(); 
                    } else if (metaValue == '21' || metaValue == '13'){
                            const empty = "";
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, empty, metaValue16, keyword, id, smsBoxUrl);
                            //res.end();
                        } else {
                            const empty = "";
                            createClient(baseURL, username, password, shortcode, smsc, msisdn, empty, metaValue16, keyword, id, smsBoxUrl);
                            //res.end();
                        }
                       // res.end();  
                } else {
                    console.log('Incomplete query parameters received!');
                    //res.end();
                }
            } else {
                console.log('Invalid query string');
               // res.end();
            }
            
        } else {
            console.log('Invalid query string!');
           // res.end()
        }
       
    } catch(e){
        console.log("error", e);
       //  res.end();
    }

}
}


