//import axios from 'axios';

export const sendRes = (baseURL, username, password, shortcode, smsc, msisdn, text, metaData, keyword, smsBoxURL) => {
        const jsonRes = {
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
        return jsonRes;
}

export const stringifyData = (data) => {
    return JSON.stringify(data);
};

export const parseData = (data) => {
    return JSON.parse(data);
};
