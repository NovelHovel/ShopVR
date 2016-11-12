var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../server/index.js');
var request = supertest.agent(server);
var mysql = require('mysql');
var req = require('request');

// var validator = require("../validate_schema.js").validator;

// var transformer = require("../transform.js").transformer;


//check if get request to server serves up index.html on client side
describe('Server', function() {
  describe('GET /', function() {
    it('should return the content of index.html', function(done) {
      request.get('/').expect(200, done);
    });
  });
});

//check we can write into DB for one user
describe('Persistant database', function() {
  var dbConnection;
  before(function(done) {
    dbConnection = mysql.createConnection({
      user: 'a',
      password: 'con',
      database: 'shopvr',
      port: '6664',
      multipleStatements: true
      // database: 'test'
    });
    dbConnection.connect(function(){
      done()
    });

    // dbConnection.query("create user root identified by 'con'");
    // dbConnection.query("GRANT ALL PRIVILEGES ON shopvr.* TO 'root'@'localhost'");
    // dbConnection.query("flush privileges");

    // var tablename = 'users';
    // dbConnection.query('truncate' + tablename, done);
  });

  after(function(done) {
    dbConnection.end(function(){
      done()
    });
  });

  it('Should insert new user into the database', function(done) {
    req({
      method: 'POST',
      uri: 'http://localhost:3000/login/facebook',
      json: {
        name: 'Bob George',
        email: 'bobby@geo.com',
        gender: 'male',
        price: 5,
        timezone: -8,
        location: 'San Francisco',
        profile_pic: 'nobody.png',
        friends: 100000,
        fb_id: 291838839393
      }, function() {
        var queryString = 'SELECT * FROM users';
        var queryArgs = [];
        dbConnection.query(queryString, queryArgs, function(err, results) {
          expect(results.length).to.equal(1);
          done();
        });
      }
    })
  });
});
//check we can write into DB for one item
//check we can write into DB for one category
//check we can get data out of DB for one user
//check we can get data out of DB for one item
//check we can get data out of DB for one category
//check when we do post request we get 201 status
//check when we do get request we get 200 status

//tests for FB api 


