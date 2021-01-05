import qs from 'qs';
import axios from 'axios';

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
        if(msisdn == '2349154100054' || msisdn == '2347058793298'){
            let questionNumber = 0;
            const dataArray = [];
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
                questionNumber += 1;
                console.log('questionNumber', questionNumber);
            } else if (metaValue == '12&' || metaValue == '12'){
                if (text == '1' || text == '2' && questionNumber == 1){
                    const answerIndex = parseInt(text) - 1;
                    const answer = GENDER_ARRAY_Q1[answerIndex];
                    dataArray.push(answer);
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
                    questionNumber += 1;
                    console.log('questionNumber', questionNumber);
                } else if (metaValue == '12&' || metaValue == '12' && questionNumber == 2){
                    if (text == '1' || text == '2' || text == '3' || text == '4' || text == '5'){
                    const answerIndex = parseInt(text) - 1;
                    const answer =  INCIDENCE_ARRAY_Q2[answerIndex];
                    dataArray.push(answer);
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
                    questionNumber += 1;
                    console.log('arr', dataArray);
                } else {
                    dataArray.pop();
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
                    //questionNumber -= 1;
                }
                console.log('questionNumber', questionNumber);
            } else if (metaValue == '12&' || metaValue == '12'){
                if (text == '1'){
                    const answerIndex = parseInt(text) - 1;
                    const answer = STATE_FIRST_LETTER_Q3[answerIndex];
                    dataArray.push(answer);
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
                    questionNumber += 1;
                } else if (text == '2'){
                    const answerIndex = parseInt(text) - 1;
                    const answer = STATE_FIRST_LETTER_Q3[answerIndex];
                    dataArray.push(answer);
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
                    questionNumber += 1;
                } else if (text == '3'){
                    const answerIndex = parseInt(text) - 1;
                    const answer = STATE_FIRST_LETTER_Q3[answerIndex];
                    dataArray.push(answer);
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
                    questionNumber += 1;
                }else if (text == '4'){
                    const answerIndex = parseInt(text) - 1;
                    const answer = STATE_FIRST_LETTER_Q3[answerIndex];
                    dataArray.push(answer);
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
                    questionNumber += 1;
                }else if (text == '5'){
                    const answerIndex = parseInt(text) - 1;
                    const answer = STATE_FIRST_LETTER_Q3[answerIndex];
                    dataArray.push(answer);
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
                    questionNumber += 1;
                }else {
                    dataArray.pop();
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
                   // questionNumber -= 1;
                    console.log('arr', dataArray)
                }
            } else if (metaValue == '12&' || metaValue == '12'){
                if (text == '1' || text == '2' || text == '3' || text == '4' || 
                text == '5' || text == '6' || text == '7' || text == '8' && 
                dataArray[2] == 'A-B'){
                const answerIndex = parseInt(text) - 1;
                const answer =  STATE_ARRAY_1[answerIndex];
                dataArray.push(answer);
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
                questionNumber += 1;
                console.log('arr', dataArray)
            } else if (text == '1' || text == '2' || text == '3' || text == '4' || 
            text == '5' || text == '6' || text == '7' || text == '8' && 
            dataArray[2] == 'C-I'){
            const answerIndex = parseInt(text) - 1;
            const answer =  STATE_ARRAY_2[answerIndex];
            dataArray.push(answer);
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
            questionNumber += 1;
            console.log('arr', dataArray)
        } else if (text == '1' || text == '2' || text == '3' || text == '4' || 
        text == '5' || text == '6' || text == '7' || text == '8' && 
        dataArray[2] == 'J-L'){
        const answerIndex = parseInt(text) - 1;
        const answer =  STATE_ARRAY_3[answerIndex];
        dataArray.push(answer);
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
        questionNumber += 1;
        console.log('arr', dataArray)
    } else if (text == '1' || text == '2' || text == '3' || text == '4' || 
    text == '5' || text == '6' || text == '7' || text == '8' && 
    dataArray[2] == 'N-R'){
    const answerIndex = parseInt(text) - 1;
    const answer =  STATE_ARRAY_4[answerIndex];
    dataArray.push(answer);
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
    questionNumber += 1;
    console.log('arr', dataArray)
} else if (text == '1' || text == '2' || text == '3' || text == '4' && 
dataArray[2] == 'S-Z'){
const answerIndex = parseInt(text) - 1;
const answer =  STATE_ARRAY_5[answerIndex];
dataArray.push(answer);
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
questionNumber += 1;
console.log('arr', dataArray)
} else {
                dataArray.pop();
                axios.get(baseURL, {
                    params: {
                    'username': username,
                    'password': password,
                    'from': shortcode,
                    'smsc': smsc,
                    'to': msisdn,
                    'text':  STATE_ALPHABET_SELECTION,
                    'meta-data': '?smpp?meta-data=2'
                    }
                })
                .then(function (response) {
                console.log("resp",response);
                })
                .catch(function (error) {
                console.log('err',error);
                });
                questionNumber -= 1;
            }
        }
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


