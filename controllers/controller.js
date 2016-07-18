
//===============================================================================
//controller.js is the routes

//I believe this is where routes go, export them to server.js
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var orm = require('../config/orm.js');

module.exports = function(app){

	app.get('/', function(req, res) {
		//orm.selectAll('users').then(function(data){
			//console.log(data);
			/* This is where we will eventually render the page for the recruiter to view 
			aplicants */
			res.render('index');
		//})
   	});

   	app.get('/apps', function(req, res) {
		//orm.selectAll('users').then(function(data){
			//console.log(data);
			/* This is where we will eventually render the page for the recruiter to view 
			aplicants */
			res.render('applicant');
		//})
   	});

   	app.get('/admin', function(req, res) {
		//orm.selectAll('users').then(function(data){
			//console.log(data);
			/* This is where we will eventually render the page for the recruiter to view 
			aplicants */
			res.render('admin');
		//})
   	});
/*
	app.put('/admin', function(req,res){
		orm.addUsers('users').then(function(data){
			console.log(data);
			//res.redirect('/');
			res.render('applicant', {
				user: data
			})
		})
	})

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

