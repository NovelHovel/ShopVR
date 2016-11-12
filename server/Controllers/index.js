var models = require('../models/model.js');

// module.exports = {
//   users: {
//     get: function(req, res) {
//       models.users.get(function(err, results) {
//         if (err) console.log(err);
//         res.send(results);
//       });
//     },
//     getAndPost: function(req, res) {
//       var params = [req.body.name, req.body.email, req.body.gender, 
//                     req.body.price, req.body.profile_pic];
//       models.users.post(params, function(err, results) {
//         if (err) console.log(err);
//         res.sendStatus(201);
//       });
//     }
//   },
//   items: {
//     get: function(req, res) {
//       models.items.get(function(err, results) {
//         if (err) console.log(err);
//         res.send(results);
//       });
//     },
//     post: function(req, res) {
//       var params = [req.body.brand, req.body.item_name, req.body.price, 
//                     req.body.pic, req.body.category_id, req.body.user_id];
//       models.users.post(params, function(err, results) {
//         if (err) console.log(err);
//         res.sendStatus(201);
//       });
//     }
//   }
// };

module.exports = {
  users: {
    get: function(req, res) {
      models.users.get(function(err, results) {
        if (err) console.log(err);
        res.send(results);
      });
    },
    getAndPost: function(req, res) {
      price = req.body.price ? req.body.price : 0;
      var params = [req.body.name, req.body.email, req.body.gender, price, req.body.locale, req.body.timezone, req.body.location, req.body.friends. req.body.id, req.body.picture];
      models.users.getAndPost(params, function(err, results) {
        if (err) console.log(err);
        res.sendStatus(201);
      });
    }
  }
}