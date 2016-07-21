var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var connection = require('./config/connection.js');
var path = require('path');
var passport = require('passport');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var app = express();

//============== NOTE: not sure if both of these are needed ===================
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// BodyParser interprets data sent to the server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// cookie parser for user authentication
app.use(cookieParser());
// session configuration
app.use(session({
	secret: 'devmatch',
	cookie: { maxAge: 100000 },
	resave: true,
	saveUninitialized: true
 } ));

//flash is used to show a message on an incorrect login
app.use(flash());

// use passport authentication middleware 
app.use(passport.initialize());
app.use(passport.session());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Require the controller file
require('./controllers/controller.js')(app);
//=======================Need app.post
app.post('/score', function(req, res) {
    connection.query('INSERT INTO skills (score) VALUES (?)', [req.body.score], function(err, result) {
        if (err) throw err;
        //res.redirect('/');
    });
});
var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
    console.log("Listening on %d", PORT);
});
