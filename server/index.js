var express = require('express');
var bodyParser = require('body-parser');
var router = require('express').Router();

// var db = require('./db');
var authController = require('./controllers/auth.js');

var server = express();


server.set('port', 3000)
server.listen(server.get('port'), function () {
  console.log('Server listening');
});

router.get('/login/facebook', authController.login);
router.get('/', function(req, res) {
  res.sendFile('/client/index.html', {root: __dirname + '/..'});
});


server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlenco
server.use(express.static(__dirname + '/../client'));
console.log(__dirname);

module.exports = server;
