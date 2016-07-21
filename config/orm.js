
//================================================================================
//The orm.js is the location of the queries
var connection = require('../config/connection.js');

var orm = {
	//can use this to select all data from any table
	/* SELECT <select_list>
FROM Table_A A
LEFT JOIN Table_B B
ON A.Key = B.Key */
    selectAll: function(table) {
    	return new Promise(function(resolve, reject) {
	        // var queryString = 'SELECT * FROM' + table + 'A LEFT JOIN skills B ON A.Key = B.Key';
          var queryString = 'SELECT * FROM ' + table;
    		//may need to do A.ID instead of A.Key format
	        var queryString = 'SELECT * FROM' + table + 'A LEFT JOIN skills B ON A.ID = B.ID';
	        connection.query(queryString, function(err, result) {
	            if (err) throw err;
              resolve(result);
	        });
    	});
    },
    addUserToDB: function (userObj, callback) {
    connection.query('INSERT INTO users_table SET ?', userObj, function(err, results) {
    if (err) return callback(false, err);
    callback(true, null);
    });
  },

  findUser: function(username, callback) {
    connection.query('SELECT * FROM users_table WHERE ?', {username: username}, function(err, user) {
    callback(err, user);
    })
  }

   /* For the next 2 functions below, I need to learn how to tie the User table with the skills table 
    together by id 
    addUsers: function(id){
    	return new Promise(function(resolve, reject){
    		var queryString = 'INSERT INTO users WHERE id = ?';
    		connection.query(queryString, function(err, result){
    			resolve(result);
    		})
    	})
    },*/
/*
    addSkills: function(id){
    	return new Promise(function(resolve, reject){
    		var queryString = 'INSERT INTO skills WHERE id = ?';
    		connection.query(queryString, function(err, result){
    			resolve(result);
    		})
    	})
    },
    
   	addCompanyInfo: function(score){
   		return new Promise(function(resolve, reject){
   			var queryString = 'INSERT INTO recruiter';
   			connection.query(queryString, function(err, result){
   				resolve(result);
   			})
   		})
   	},

   	*/

};

module.exports = orm;
