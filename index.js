import { App } from '@sifrr/server';

import { readJson } from './utils/readJson';
import menu from './controllers/ussd';

const app = new App();

const port = 3003;


app.post('/request', (res, req) => {

  let url = req.getUrl();

  
  readJson(res, (obj) => {
    console.log('obj', obj)
    menu.run(obj, (ussdResult) => {
      console.log(ussdResult);
       res.writeStatus("200 OK").end(ussdResult);
    });

  }, () => {
    /* Request was prematurely aborted or invalid or missing, stop reading */
    console.log('Invalid JSON or no data at all!');
  });

}).listen(port, token => {
  token ?
  console.log(`Listening to port ${port}`) :
  console.log(`Failed to listen to port ${port}`);
});

