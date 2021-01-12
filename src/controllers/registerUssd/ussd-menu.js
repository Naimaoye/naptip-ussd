import qs from 'qs';
import axios from 'axios';

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
GENDER_ARRAY_PATTERN,
INCIDENCE_ARRAY_PATTERN,
STATE_FIRST_LETTER_PATTERN,
STATE_ARRAY_PATTERN,
} from '../../utils/constants';

import {
    SUCCESS_MESSAGE,
    ERROR_MESSAGE,
    INVALID_CODE,
    GENDER_SELECTION,
    INCIDENCE_SELECTION,
    STATE_ALPHABET_SELECTION,
    STATE_SELECTION_PAGE1,
    STATE_SELECTION_PAGE2,
    STATE_SELECTION_PAGE3,
    STATE_SELECTION_PAGE4,
    STATE_SELECTION_PAGE5,
    GENDER_SELECTION_INVALID,
    INCIDENCE_SELECTION_INVALID
} from './constants';

const username = 'test';
const password = 'test';
const baseURL = 'http://10.0.0.56:13150/cgi-bin/sendsms';


// get the text coming back
// convert the text value to float
// check the answer
// increment question number
// store in an array
// write sql query to save the values in the db
// check if text is 00 and remove the previous option from the array

export default class Ussd {
    static async registerUssdDetails(res, req) {
        const queryString = req.getQuery();
        const parseUrl = qs.parse(queryString);
        console.log('incoming req', parseUrl);
        const metaValue = parseUrl['meta-data'].split('=%')[1];
        const { msisdn, smsc, shortcode, keyword, text } = parseUrl;
        const questionNumber = 'questionNumber';
        if(msisdn == '2349154100054' || msisdn == '2347058793298'){
            if(metaValue == '01&' || metaValue == '01' || metaValue == '1&' && text.includes('#')){
                axios.get(baseURL, {
                    params: {
                    'username': username,
                    'password': password,
                    'from': shortcode,
                    'smsc': smsc,
                    'to': msisdn,
                    'text': GENDER_SELECTION,
                    'meta-data': '?smpp?meta-data=2'
                    }
                })
                .then(function (response) {
                console.log("resp",response);
                })
                .catch(function (error) {
                console.log('err',error);
                });
                const genderIndex = parseInt(text) - 1;
                const gender = GENDER_ARRAY_Q1[genderIndex];
                client.setex("gender", 120,gender);
                client.setex('questionNumber', 120,'1');
            } else {
            client.get(questionNumber, async (err, ansExist) => {
                if (ansExist == '1') {
                    if (metaValue == '12&' && text == '1' || text == '2'){
                            axios.get(baseURL, {
                                params: {
                                'username': username,
                                'password': password,
                                'from': shortcode,
                                'smsc': smsc,
                                'to': msisdn,
                                'text': INCIDENCE_SELECTION,
                                'meta-data': '?smpp?meta-data=2'
                                }
                            })
                            .then(function (response) {
                            console.log("resp",response);
                            })
                            .catch(function (error) {
                            console.log('err',error);
                            });
                            const incidenceIndex = parseInt(text) - 1;
                            const incidenceType = INCIDENCE_ARRAY_Q2[incidenceIndex];
                            client.setex("incidence", 120,incidenceType);
                            client.setex('questionNumber', 120,'2');
                        } else { // When the data is not found in the cache then we can make request to the server
                            axios.get(baseURL, {
                                params: {
                                'username': username,
                                'password': password,
                                'from': shortcode,
                                'smsc': smsc,
                                'to': msisdn,
                                'text': GENDER_SELECTION_INVALID,
                                'meta-data': '?smpp?meta-data=2'
                                }
                            })
                            .then(function (response) {
                            console.log("resp",response);
                            })
                            .catch(function (error) {
                            console.log('err',error);
                            });
                            const genderIndex = parseInt(text) - 1;
                            const gender = GENDER_ARRAY_Q1[genderIndex];
                            client.setex("gender", 120,gender);
                            client.setex('questionNumber', 120,'1');
                        }
                } else {
                    console.log("from redis",err);
                }
              });
              client.get(questionNumber, async (err, ansExist) => {
                if (ansExist == '2') {
                    if (metaValue == '12&' && text == '1' || text == '2' || text == '3' || text == '4' || text == '5'){
                        axios.get(baseURL, {
                            params: {
                            'username': username,
                            'password': password,
                            'from': shortcode,
                            'smsc': smsc,
                            'to': msisdn,
                            'text': STATE_ALPHABET_SELECTION,
                            'meta-data': '?smpp?meta-data=2'
                            }
                        })
                        .then(function (response) {
                        console.log("resp",response);
                        })
                        .catch(function (error) {
                        console.log('err',error);
                        });
                        client.setex('questionNumber', 120,'3');
                        } else { // When the data is not found in the cache then we can make request to the server
                            axios.get(baseURL, {
                                params: {
                                'username': username,
                                'password': password,
                                'from': shortcode,
                                'smsc': smsc,
                                'to': msisdn,
                                'text': INCIDENCE_SELECTION_INVALID,
                                'meta-data': '?smpp?meta-data=2'
                                }
                            })
                            .then(function (response) {
                            console.log("resp",response);
                            })
                            .catch(function (error) {
                            console.log('err',error);
                            });
                            const incidenceIndex = parseInt(text) - 1;
                            const incidenceType = INCIDENCE_ARRAY_Q2[incidenceIndex];
                            client.setex("incidence", 120, incidenceType);
                            client.setex('questionNumber', 120,'2');
                        }
                } 
              });
              client.get(questionNumber, async (err, ansExist) => {
                if (ansExist == '3') {
                    if (metaValue == '12&' && text === '1'){
                        axios.get(baseURL, {
                            params: {
                            'username': username,
                            'password': password,
                            'from': shortcode,
                            'smsc': smsc,
                            'to': msisdn,
                            'text': STATE_SELECTION_PAGE1,
                            'meta-data': '?smpp?meta-data=2'
                            }
                        })
                        .then(function (response) {
                        console.log("resp",response);
                        })
                        .catch(function (error) {
                        console.log('err',error);
                        });
                        const stateIndex = parseInt(text) - 1;
                        const state = STATE_ARRAY_1[stateIndex];
                        client.setex("state", 120, state);
                        client.setex('questionNumber', 120, '4');
                     } else if (metaValue == '12&' && text == '2'){
                        axios.get(baseURL, {
                            params: {
                            'username': username,
                            'password': password,
                            'from': shortcode,
                            'smsc': smsc,
                            'to': msisdn,
                            'text': STATE_SELECTION_PAGE2,
                            'meta-data': '?smpp?meta-data=2'
                            }
                        })
                        .then(function (response) {
                        console.log("resp",response);
                        })
                        .catch(function (error) {
                        console.log('err',error);
                        });
                        const stateIndex = parseInt(text) - 1;
                        const state = STATE_ARRAY_2[stateIndex];
                        client.setex("state", 120, state);
                        client.setex('questionNumber', 120, '4');
                    } else if (metaValue == '12&' && text == '3'){
                        axios.get(baseURL, {
                            params: {
                            'username': username,
                            'password': password,
                            'from': shortcode,
                            'smsc': smsc,
                            'to': msisdn,
                            'text': STATE_SELECTION_PAGE3,
                            'meta-data': '?smpp?meta-data=2'
                            }
                        })
                        .then(function (response) {
                        console.log("resp",response);
                        })
                        .catch(function (error) {
                        console.log('err',error);
                        });
                        const stateIndex = parseInt(text) - 1;
                        const state = STATE_ARRAY_3[stateIndex];
                        client.setex("state", 120,state);
                        client.setex('questionNumber', 120, '4');
                        }else if (metaValue == '12&' && text == '4'){
                            axios.get(baseURL, {
                                params: {
                                'username': username,
                                'password': password,
                                'from': shortcode,
                                'smsc': smsc,
                                'to': msisdn,
                                'text': STATE_SELECTION_PAGE4,
                                'meta-data': '?smpp?meta-data=2'
                                }
                            })
                            .then(function (response) {
                            console.log("resp",response);
                            })
                            .catch(function (error) {
                            console.log('err',error);
                            });
                            const stateIndex = parseInt(text) - 1;
                            const state = STATE_ARRAY_4[stateIndex];
                            client.setex("state", 120, state);
                            client.setex('questionNumber', 120,'4');
                        }else if (metaValue == '12&' && text == '5'){
                            axios.get(baseURL, {
                                params: {
                                'username': username,
                                'password': password,
                                'from': shortcode,
                                'smsc': smsc,
                                'to': msisdn,
                                'text': STATE_SELECTION_PAGE5,
                                'meta-data': '?smpp?meta-data=2'
                                }
                            })
                            .then(function (response) {
                            console.log("resp",response);
                            })
                            .catch(function (error) {
                            console.log('err',error);
                            });
                            const stateIndex = parseInt(text) - 1;
                            const state = STATE_ARRAY_5[stateIndex];
                            client.setex("state", 120,state);
                            client.setex('questionNumber', 120,'4');
                        }else if (metaValue == '12&' && text == '0' && text !== '1' || text !== '2' || text !== '3' || text !== '4' || text !== '5') {
                            axios.get(baseURL, {
                                params: {
                                'username': username,
                                'password': password,
                                'from': shortcode,
                                'smsc': smsc,
                                'to': msisdn,
                                'text': STATE_ALPHABET_SELECTION,
                                'meta-data': '?smpp?meta-data=2'
                                }
                            })
                            .then(function (response) {
                            console.log("resp",response);
                            })
                            .catch(function (error) {
                            console.log('err',error);
                            });
                            client.setex('questionNumber', 120,'3');
                        } 
                } 
              });
              client.get(questionNumber, async (err, ansExist) => {
                if (ansExist == '4') {
                    if (metaValue == '12&'&& text == '1' || text == '2' || text == '3' || text == '4' || 
                text == '5' || text == '6' || text == '7' || text == '8'){
                axios.get(baseURL, {
                    params: {
                    'username': username,
                    'password': password,
                    'from': shortcode,
                    'smsc': smsc,
                    'to': msisdn,
                    'text': SUCCESS_MESSAGE,
                    'meta-data': '?smpp?meta-data=3'
                    }
                })
                .then(function (response) {
                console.log("resp",response);
                })
                .catch(function (error) {
                console.log('err',error);
                });
            } else if (metaValue == '12&' && text == '0' && 
            text !== '1' || text !== '2' || 
            text !== '3' || text !== '4' || 
            text !== '5' || text !== '6' || 
             text !== '7' || text !== '8') {
                axios.get(baseURL, {
                    params: {
                    'username': username,
                    'password': password,
                    'from': shortcode,
                    'smsc': smsc,
                    'to': msisdn,
                    'text':  '',
                    'meta-data': '?smpp?meta-data=21'
                    }
                })
                .then(function (response) {
                console.log("resp",response);
                })
                .catch(function (error) {
                console.log('err',error);
                });
                client.setex('questionNumber', 120,'3');
                }
                } 
              });
            }   
        } else {
            axios.get(baseURL, {
                params: {
                'username': username,
                'password': password,
                'from': shortcode,
                'smsc': smsc,
                'to': msisdn,
                'text': '',
                'meta-data': '?smpp?meta-data=16'
                }
            })
            .then(function (response) {
            console.log("resp",response);
            })
            .catch(function (error) {
            console.log('err',error);
            });
            }
        res.end();
    }
}


