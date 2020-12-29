import { App } from '@sifrr/server';
import qs from 'qs';
import axios from 'axios';
//import fetch from 'node-fetch';
// import Ussd from './controllers/registerUssd/ussd-menu'
import {
  SUCCESS_MESSAGE,
  ERROR_MESSAGE,
  INVALID_CODE,
  GENDER_SELECTION,
  INCIDENCE_SELECTION,
  STATE_ALPHABET_SELECTION,
  STATE_SELECTION_PAGE1,
  STATE_SELECTION_PAGE2,
  STATE_SELECTION_PAGE3,
  STATE_SELECTION_PAGE4,
  STATE_SELECTION_PAGE5,
} from './controllers/registerUssd/constants';

const username = 'test';
const password = 'test';

const app = new App();

const port = 3003;

// parse request url coming from kannel
// give it an empty reply once the user connects 
// parse the url params
// console.log something once the request is made

app.get('/', (res, req) => {
  const queryString = req.getQuery();
                const parseUrl = qs.parse(queryString);
                console.log('incoming req', parseUrl);
                const { msisdn, smsc, shortcode } = parseUrl;
  //const requestUrl = `http://10.0.0.56:13150/cgi-bin/sendsms?username=${username}&password=${password}&from=${shortcode}&smsc=${smsc}&to=${msisdn}&text=${GENDER_SELECTION}&meta-data=%3Fsmpp%3Fmeta-data%3D2`
  if(msisdn == '2349154100054' || msisdn == '2347058793298'){
  axios.get('http://10.0.0.56:13150/cgi-bin/sendsms', {
    params: {
      'username': username,
      'password': password,
      'from': shortcode,
      'smsc': smsc,
      'to': msisdn,
      'text': GENDER_SELECTION,
      'meta-data': '%3Fsmpp%3Fmeta-data%3D2'
    }
  })
  .then(function (response) {
    console.log("resp",response);
  })
  .catch(function (error) {
    console.log('err',error);
  });
} else {
  axios.get('http://10.0.0.56:13150/cgi-bin/sendsms', {
    params: {
      'username': username,
      'password': password,
      'from': shortcode,
      'smsc': smsc,
      'to': msisdn,
      'text': 'invalid code',
      'meta-data': '%3Fsmpp%3Fmeta-data%3D2'
    }
  })
  .then(function (response) {
    console.log("resp",response);
  })
  .catch(function (error) {
    console.log('err',error);
  });
}
  res.end();
}).listen(port, token => {
  token ?
  console.log(`Listening to port ${port}`) :
  console.log(`Failed to listen to port ${port}`);
});

