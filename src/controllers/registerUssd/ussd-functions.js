import axios from 'axios';


export const createClient = (baseURL, username, password, shortcode, smsc, msisdn, text, metaData, keyword, smsBoxURL) => {
    axios.get(baseURL, {
        params: {
        'path': baseURL,
        'username': username,
        'password': password,
        'from': shortcode,
        'shortcode': '346',
        'smsc': smsc,
        'to': msisdn,
        'msisdn': msisdn,
        'text': text,
        'keyword': keyword,
        'smsbox-url': smsBoxURL,
        'network': 'mtn',
        'meta-data': metaData
        }
    })
    .then(function (response) {
    console.log('resp', response);
    })
    .catch(function (error) {
    console.log('err', error);
    })
};

export const stringifyData = (data) => {
    return JSON.stringify(data);
};

export const parseData = (data) => {
    return JSON.parse(data);
};
