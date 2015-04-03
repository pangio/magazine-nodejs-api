var port = process.env.PORT || 8000;
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var magazinesRoute = require('./routes/magazines');
var articlesRoute = require('./routes/articles');
var tagsRoute = require('./routes/tags');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/magazines', magazinesRoute);
app.use('/articles', articlesRoute);
app.use('/tags', tagsRoute);

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

/**
 * Database config based on the environment
 */
var db = 'mongodb://localhost/magazine-db';

if ('development' == app.get('env')) {
    app.set('db', 'mongodb://localhost/magazines-db');
}
if ('test' == app.get('env')) {
      app.set('db', 'mongodb://localhost/magazine-db-test');
}
/**
 * Mongo Database connection
 */
mongoose.connect(app.get('db'), function(err) {
    if(err) {
        console.log('database connection error. ', err);
    } else {
        console.log('database connection successful. ' + app.get('db'));
    }
});

app.listen(port,  function(){
	console.log("Server running in port %d ", port);
});
