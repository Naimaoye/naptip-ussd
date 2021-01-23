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
        'meta-data': metaData
        }
    })
    .then(function (response) {
    })
    .catch(function (error) {
    });
}

export const stringifyData = (data) => {
    return JSON.stringify(data);
};

export const parseData = (data) => {
    return JSON.parse(data);
};
