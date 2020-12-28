import { App } from '@sifrr/server';
import qs from 'qs';
import { Fetch } from '@sifrr/fetch';
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
  const requestUrl = 'http://10.0.0.56:13150/cgi-bin/sendsms'
  options.query = { 
    username: username,
    password: password,
    from: shortcode,
    smsc: smsc,
    to: msisdn,
    text: GENDER_SELECTION,
    'meta-data': '%3Fsmpp%3Fmeta-data%3D2'
  };
  Fetch.get(requestUrl, options)
    .then(response => {
      // This will send request to url?key=value
      // response is JSON if response has `content-type: application/json` header
      // else it is a Fetch API response object.
      console.log(response.json());
    })
    .catch(e => {
     console.log(e)
    });
  res.end();
}).listen(port, token => {
  token ?
  console.log(`Listening to port ${port}`) :
  console.log(`Failed to listen to port ${port}`);
});

