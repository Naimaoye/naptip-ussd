import axios from 'axios';

export const createClient = (baseURL, username, password, shortcode, smsc, msisdn, text, metaData, keywordNum) => {
    axios.get(baseURL, {
        params: {
        'username': username,
        'password': password,
        'from': shortcode,
        'shortcode': shortcode,
        'smsc': smsc,
        'to': msisdn,
        'text': text,
        'keyword-num': keywordNum,
        'smsbox-url': 'glo.55019-00',
        'network': 'glo',
        'meta-data': metaData
        }
    })
    .then(function (response) {
        console.log('resp', response);
    })
    .catch(function (error) {
        console.log('err', error);
    });
}

export const stringifyData = (data) => {
    return JSON.stringify(data);
};

export const parseData = (data) => {
    return JSON.parse(data);
};
