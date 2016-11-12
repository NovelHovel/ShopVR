var db = require('../db');

module.exports = {
  users: {
    get: function(callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    },
    getAndPost: function(user, callback) {
      var email = user[1];
      var queryStr = 'select * from users where email = users.email'
      db.query(queryStr, function(err, results) {
        if (err) {
          console.log(err);
        }
        callback(results);
      })
    },
    post: function(user, callback) {
      console.log('user', user);
      var newQueryStr = 'INSERT INTO users (name, email, gender, locale, timezone, friends, fb_id, profile_pic) \
                        VALUES ?';
      db.query(newQueryStr, [user], function(err, results) {
        console.log('insert', results);
        callback(err, results);
      });
    }
  }/*,
  items: {
    get: function(callback) {
      var queryStr = 'select * from items';
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    },
    post: function(params, callback) {
      var queryStr = 'insert into items(brand, item_name, price, pic, category_id, user_id) \
                      values(?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }*/
};