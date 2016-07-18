
//dependancies needed for server file
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var connection = require('./config/connection.js');
var path = require('path');

var app = express();


//============== NOTE: not sure if both of these are needed ===================
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));
//To access css
app.use(express.static('/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ 
	extended: false 
}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Our controller file as per the MVC standard
require('./controllers/controller.js')(app);


var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("Listening on %d", PORT);
});