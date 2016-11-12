const controller = require('./index.js');

module.exports = {
//login
  login: function(data, res) {
  	//put data.body in the DB IF user does not exist 
  	controller.users.get(data.body.email, function(response) {
  	  if (err) console.log(err);
  	  res.send(response);

  	});
  	//data.body
 	 

   } 
 }
 	
//logout