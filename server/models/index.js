var db = require('../db');

module.exports = {
  users: {
    get: function(callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    },
    post: function(params, callback) {
      var queryStr = 'insert into users(name, email, gender, price, profile_pic) \
                      values(?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },
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
  }
};