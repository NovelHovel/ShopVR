var mysql = require('mysql');

// Establish connection to mysql database
var connection = mysql.createConnection({
  user: 'root',
  password: 'con',
  database: 'shopvr'
});

connection.connect();

module.exports = connection;