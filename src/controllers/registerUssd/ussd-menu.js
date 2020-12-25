import qs from 'qs';
import fetch from 'node-fetch';

import Report from '../../models/report';
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

export default class Ussd {
    static async registerUssdDetails(res, req) {
        try {
                const queryString = req.getQuery();
                const parseUrl = qs.parse(queryString);
                console.log('incoming req', parseUrl);
                const { id, msisdn, smsc, shortcode, text } = parseUrl;

                // ussd question number
                let ussdQuestion = 1;

                //back option
                const isBackOption = '00' || '';
                // convert text value to float.

                // sessionId to identify user performing registration
                if(msisdn == '2349154100054' || msisdn == '2347058793298'){
                const ussdIdExist = await Report.findOne({ phoneNumber: msisdn,  ussdID: id });
                if (ussdIdExist) {
                    ussdQuestion = ussdIdExist.ussdQuestionNumber;
                }
                if (ussdQuestion === 1) {
                    // first state, before the user selects an option
                    if (text.includes('#')){
                        const requestUrl = `http://localhost:13150/cgi-bin/sendsms?username=${username}&password=${password}&from=${shortcode}&smsc=${smsc}&to=${msisdn}&text=${GENDER_SELECTION}&meta-data=?smpp?meta-data=2&`
                        fetch(requestUrl)
                        .then(res => res.json())
                        .then(json => console.log(json))
                        .catch(err => console.log(err));
                        const newReport = new Report({
                            ussdID: id,
                            phoneNumber: msisdn
                        });
                        await newReport.save();
                    }
            }
        } else {
            const requestUrl = `http://localhost:13150/cgi-bin/sendsms?username=${username}&password=${password}&from=${shortcode}&smsc=${smsc}&to=${msisdn}&text=${ERROR_MESSAGE}&meta-data=?smpp?meta-data=16&`
                        fetch(requestUrl)
                        .then(res => res.json())
                        .then(json => console.log(json))
                        .catch(err => console.log(err));
        }
        res.end('');
        } catch(error){
            res.send(ERROR_MESSAGE);
        }
    }
}


