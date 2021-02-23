import axios from 'axios';

export const createClient = (baseURL, username, password, shortcode, smsc, msisdn, text, metaData) => {
    axios.get(baseURL, {
        params: {
        'username': username,
        'password': password,
        'from': shortcode,
        'shortcode': 'glo.55019-00',
        'smsc': smsc,
        'to': msisdn,
        'text': text,
        'keyword-num': 'glo.55019-00',
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
