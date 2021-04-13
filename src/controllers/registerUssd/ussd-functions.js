import axios from 'axios';


export const createClient = (baseURL, username, password, shortcode, smsc, msisdn, text, metaData, keyword, id, smsBoxURL) => {
    axios.get(baseURL, {
        params: {
        'username': username,
        'id': id,
        'password': password,
        'from': shortcode,
        'shortcode': '627',
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

export const resParams = (username, password, shortcode, smsc, msisdn, text, metaData, keyword, id, smsBoxURL) => {
    const params = {
        'path': '/cgi-bin/sendsms/json',
        'username': username,
        'id': id,
        'password': password,
        'from': shortcode,
        'shortcode': '627',
        'smsc': smsc,
        'to': msisdn,
        'msisdn': msisdn,
        'text': text,
        'keyword': keyword,
        'smsbox-url': smsBoxURL,
        'network': 'mtn',
        'meta-data': metaData
    };
    const string = JSON.stringify(params);
    console.log("params", params);
    console.log("response", string);
    return string;
}