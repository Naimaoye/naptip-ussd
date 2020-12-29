import qs from 'qs';
import axios from 'axios';

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
        const queryString = req.getQuery();
        const parseUrl = qs.parse(queryString);
        console.log('incoming req', parseUrl);
        console.log('meta value',parseUrl['meta-data'].split('=%')[1]);
        const { msisdn, smsc, shortcode, keyword, text } = parseUrl;
        if(msisdn == '2349154100054' || msisdn == '2347058793298'){
            axios.get('http://10.0.0.56:13150/cgi-bin/sendsms', {
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
        } else {
            axios.get('http://10.0.0.56:13150/cgi-bin/sendsms', {
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


