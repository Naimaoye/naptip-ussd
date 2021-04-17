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
    response.end();
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
        'username': `${username}`,
        'id': `${id}`,
        'password': `${password}`,
        'from': `${shortcode}`,
        'shortcode': '627',
        'smsc': `${smsc}`,
        'to':`${msisdn}`,
        'msisdn':`${msisdn}`,
        'text': `${text}`,
        'keyword': `${keyword}`,
        'smsbox-url': `${smsBoxURL}`,
        'network': 'mtn',
        'meta-data': `${metaData}`
    };
    return params;
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}