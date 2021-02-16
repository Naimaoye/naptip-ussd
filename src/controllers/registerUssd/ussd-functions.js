import axios from 'axios';

export const createClient = (baseURL, username, password, shortcode, smsc, msisdn, text, metaData) => {
    axios.get(baseURL, {
        params: {
        'username': username,
        'password': password,
        'from': shortcode,
        'smsc': smsc,
        'to': msisdn,
        'text': text,
        'smsbox-url': 'glo.55019-00',
        'network': 'glo',
        'meta-data': metaData
        }
    })
    .then(function (response) {
        console.log('res', response);
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
