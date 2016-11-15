var mysql = require('mysql');
var request = require('request');
var supertest = require('supertest');
var should = require('should');

describe('Server', function() {
  var server = supertest.agent("http://localhost:3000");
  describe('Serving assets', function(done) {
    it('Should get /', function() {
      server
      .get('/')
      .expect(200, done);
    });
    it('Should get /profile', function() {
      server
      .get('/profile')
      .expect(200, done);
    });
    it('Should get /view', function() {
      server
      .get('/view')
      .expect(200, done);
    });
    it('Should get /vr', function() {
      server
      .get('/vr')
      .expect(200, done);
    });
    it('Should not get /shop', function() {
      server
      .get('/shop')
      .expect(404, done);
    });
  });
});

describe('Database', function() {
  describe('DB connection', function() {
    it('Should connect to the database', function(done) {
      var connection = mysql.createConnection({
        user: 'newuser',
        password: 'password',
        database: 'shopvr'
      });
      connection.connect(done);
      connection.end();
    });
    describe('Should post to database from endpoints', function(done) {
      var dbConnection;

      before(function(done) {
        dbConnection = mysql.createConnection({
          user: 'newuser',
          password: 'password',
          database: 'shopvr'
        });
        dbConnection.connect();

        var tablename = 'users';
        
        // dbConnection.query('truncate ' + tablename, done);
      });

      after(function() {
        console.log('ending connection');
        dbConnection.end();
      });
      
      it('Should post to users table from /login/facebook', function() {
        request({
          method: 'POST',
          uri: 'http://localhost:3000/login/facebook',
          json: {
            name: 'Bob Bob',
            email: 'bob@bob.com',
            gender: 'Male',
            locale: 'en_US',
            timezone: -8,
            friends: { summary: { total_count: 400 } },
            id: '1239281888',
            picture: { data: { url: 'bob.png' } }
          }
        }, function() {
          var queryString = 'SELECT * FROM users';
          var queryArgs = [];

          dbConnection.query(queryString, queryArgs, function(err, results) {
            console.log('result', results);
            expect(results.length).to.equal(1);
            // expect(results[0].name).to.equal('Bob Bob');
            done();
          });
        });
      });
    });
  });
});


// describe('Persistent Server', function() {

  // it('Should insert users into DB', function(done) {
  //   console.log('trying to insert here');
  // });
// });
