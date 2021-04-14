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
    console.log("parameters", params);
    console.log("response", string);
    return string;
}

export const getAllUrlParams = (queryString) => {
  
    // we'll store the parameters here
    var obj = {};
  
    // if query string exists
    if (queryString) {
  
      // stuff after # is not part of query string, so get rid of it
      // split our query string into its component parts
    var arr = queryString.split('&');
    console.log("arr", arr);
    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();
      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {

        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string'){
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
}
  