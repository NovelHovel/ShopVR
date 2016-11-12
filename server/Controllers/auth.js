const controller = require('./index.js');

module.exports = {
//login
  login: function(data, res) {
  	//put data.body in the DB IF user does not exist 
  	controller.users.post(data.body, function(response) {
  	  if (err) {
        console.log(err);
      } else {
  	   res.send(response); 
      }
  	});
   } 
 }
 	
//logout