import mysql from 'mysql';

export const con = mysql.createConnection({
    host: 'localhost',
    user: 'digitalpulse',
    password: 'digitalpulse@2021',
    database: 'report',
  });
