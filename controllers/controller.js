
//===============================================================================
//controller.js is the routes

//I believe this is where routes go, export them to server.js
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('../models/User.js');
var orm = require('../config/orm.js');
var bcrypt = require('bcrypt-nodejs');

//Setting the strategy for Passport
passport.use(new LocalStrategy({passReqToCallback : true},
  function(req, username, password, done) {

  	//Searching the ORM for the user in the database
  	orm.findUser(username, function(err, user){
  		user = user[0];
  		if (err) { 
  			return done(err) 
  		}
      		if (!user) { 
      		return done(null, false) 
      		}
      		//comparing user passwords - return if not a match
      		if (bcrypt.compareSync(password, user.password) === false) { 
      		return done(null, false) 
     	 	}
      		return done(null, user);
  	});
  }
));

//These two methods are required to keep the user logged in via the session
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var orm = require('../config/orm.js');

module.exports = function(app){
	
	app.get('/login', function(req, res){
		res.render('login', {
			welcomeText: "Sign In",
			actionBtn: 'signin',
			message: req.flash('error')[0],
			otherAction: "Signup"
		});
	});

	app.get('/signin', function(req, res){
		res.redirect('/login')
	});

	app.get('/signup', function(req, res){
		res.render('login', {
			welcomeText: "Sign Up",
			actionBtn: 'signup',
			otherAction: "Signin"
		});
	});

	app.get('/authenticated', function(req,res){
		if (req.isAuthenticated()) {
			res.render('authenticated', {
				username: req.user.username
			})
		} else {
			res.redirect('/login')
		}
	});

	app.get('/logout', function(req, res){
	  req.logout();
	  res.redirect('/login');
	});

	//POST Routes

	app.post('/signin', passport.authenticate('local',{failureRedirect:'/login', failureFlash:'Wrong Username or Password'}), function(req, res){
		res.redirect('/authenticated');
	});

	app.post('/signup', function(req, res){
		var user = new UserModel(req.body);
		UserModel.saveUser(user, function(status){
			if(!status) {
				res.redirect('/signup')
				return false
			}
			res.redirect('/login');
		});
	});
//============================BASIC ROUTES=========================================================================	
	app.get('/', function(req, res) {

			res.render('index');
   	});

   	app.get('/apps', function(req, res) {
			res.render('applicant');
   	});

   	app.get('/admin', function(req, res) {
   		orm.viewAll('users').then(function(data){
   			console.log(data);
   			res.render('admin', data)
   		})
   	});

   	// /*This route is just grabbing the user info (Name and personal info)and the I chose to redirect
   	// to the home page. I assume we will work something out instead with the login page later.*/
   	// app.post('/createUser', function(req, res){
   	// 	orm.addUserToDB('users').then(function(data){
   	// 		console.log(data);
   	// 		res.redirect('/')
   	// 	})
   	// });

   	/*This route is just grabbing the actual user data (skills and culture quiz data)*/
   	app.post('/createSkills', function(req, res){
   			console.log("Hello " + req.body.CSS);
   		orm.addSkillsToDB('skills', req.body.first_name, req.body.last_name, req.body.email, req.body.address, req.body.phone_number, req.body.linkedin, req.body.github, req.body.CSS, req.body.HTML, req.body.Ruby_Rails, req.body.Java, req.body.Javascript, req.body.MySQL, req.body.React, req.body.PHP, req.body.Groovy_Grails, req.body.C_plus_plus, req.body.others).then(function(data){
   			console.log("Please not be undefined " + data);
   			//res.redirect('/apps')
   		})
   	});

   	//=======================Need app.post
	app.post('/score', function(req, res) {
    		console.log("YO YO BRO" + req.body.personality_type);
    	orm.addScoreToDB('scores', req.body.personality_type).then(function(data){
    		console.log(data);
    	})
        //if (err) throw err;
        //res.redirect('/');
    });
// });
//============================BASIC ROUTES=========================================================================	
//============================NOTES BELOW====================================
//need to display all applicant data for the recruiter
 //   	app.get('/admin', function(req, res) {
	// 	//orm.selectAll('users').then(function(data){
	// 		//console.log(data);
	// 		/* This is where we will eventually render the page for the recruiter to view 
	// 		aplicants */
	// 		res.render('admin');
	// 	//})
 //   	});

	// app.post('/appSkills', function(req,res){
	// 	orm.addUsers('users').then(function(data){
	// 		console.log(data);
	// 		//res.redirect('/');
	// 		res.render('applicant', {
	// 			user: data
	// 		})
	// 	})
	// })
/*
	app.put('/addSkill', function(req, res){
		orm.addSkills('').then(function(data){
			console.log(data);
			res.redirect('/');
		})
	})
	//This function will add all the company info
	app.put('addCompany', function(req, res){
		orm.addCompanyInfo('').then(function(data){
			console.log(data);
			/* we could render a modal or something here to say "Company Culture logged", or
			something to that affect ================================
			res.render();
		})
	})
	*/
};

