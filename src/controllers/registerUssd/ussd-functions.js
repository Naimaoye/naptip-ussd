import axios from 'axios';
import client from '../../utils/redis-config';

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

export const getUserOptions = (key) => {
    client.get(key, async (err, ansExist) => {
        if (ansExist) {
            return ansExist;
        }
    })
}