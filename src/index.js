import { App } from '@sifrr/server';
import mysql from 'mysql';

import Ussd from './controllers/registerUssd/ussd';
require('./utils/redis-config');
import { createIncidenceTable, createIndex } from './models/db.report';
import { con } from './utils/configDB';

const app = new App();

const port1 = 9970;
const port2 = 9971;
const port3 = 9972;
const port4 = 9973;
const port5 = 9974;
const testPort = 9975;

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  // create table
  con.query(createIncidenceTable, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log('');
    }
  });
  console.log('');
});


app.get('/proxy', Ussd.registerUssdDetails);
app.listen(9970, () => console.log('listening on 9970'));
app.listen(9971, () => console.log('listening on 9971'));
app.listen(9972, () => console.log('listening on 9972'));
app.listen(9973, () => console.log('listening on 9973'));
app.listen(9974, () => console.log('listening on 9974'));
// .listen(9975, token => {
//   token ?
//   console.log(`Listening : port 9975`) :
//   console.log(`Failed to listen to port ${testPort}`);
// });
// .listen(port2, token => {
//   token ?
//   console.log(`Listening : port ${port2}`) :
//   console.log(`Failed to listen to port ${port2}`);
// }).listen(port3, token => {
//   token ?
//   console.log(`Listening : port ${port3}`) :
//   console.log(`Failed to listen to port ${port3}`);
// }).listen(port4, token => {
//   token ?
//   console.log(`Listening : port ${port4}`) :
//   console.log(`Failed to listen to port ${port4}`);
// }).listen(port5, token => {
//   token ?
//   console.log(`Listening : port ${port5}`) :
//   console.log(`Failed to listen to port ${port5}`);
// });

