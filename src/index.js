import { App } from '@sifrr/server';
import mysql from 'mysql';

import Ussd from './controllers/registerUssd/ussd-menu';
require('./utils/redis-config');
import { createIncidenceTable, createIndex } from './models/db.report';
import { con } from './utils/configDB';

const app = new App();

const port = 9970 || 9971 || 9972 || 9973 || 9974;
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


app.get('/proxy', Ussd.registerUssdDetails)
.listen(port, token => {
  token ?
  console.log(`Listening to port ${port}`) :
  console.log(`Failed to listen to port ${port}`);
});

