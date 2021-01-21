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
        console.log('res', response);
    })
    .catch(function (error) {
        console.log('error', error);
    });
}

export const stringifyData = (data) => {
    return JSON.stringify(data);
};

export const parseData = (data) => {
    return JSON.parse(data);
};

export const newDate = () =>{
let dateArr = [];
let date_ob = new Date();

// adjust 0 before single digit date
let date = date_ob.getDate().slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();
dateArr.push(date, month, year);
// prints date in YYYY-MM-DD format
return dateArr.join('-');

}