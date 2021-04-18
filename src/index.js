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
app.listen(9975, () => console.log('listening on 9975'));
app.listen(9976, () => console.log('listening on 9976'));
app.listen(9977, () => console.log('listening on 9977'));
app.listen(9978, () => console.log('listening on 9978'));
app.listen(9979, () => console.log('listening on 9979'));

