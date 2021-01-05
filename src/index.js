import { App } from '@sifrr/server';
//import mysql from 'mysql';

import Ussd from './controllers/registerUssd/ussd-menu';
//import { createIncidenceTable } from './models/db.report';

const app = new App();

const port = 3003;
// const con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'oyedoyin',
//   database: 'report',
// });

// con.connect((err) => {
//   if(err){
//     console.log('Error connecting to Db');
//     return;
//   }
//   // create table
//   con.query(createIncidenceTable, function (err, result) {
//     if (err) throw err;
//     console.log('table created', result);
//   });
//   console.log('Connection established');
// });


app.get('/', Ussd.registerUssdDetails)
.listen(port, token => {
  token ?
  console.log(`Listening to port ${port}`) :
  console.log(`Failed to listen to port ${port}`);
});

