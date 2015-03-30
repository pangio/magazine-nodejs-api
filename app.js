var port = process.env.PORT || 8000;
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var magazine = require('./controllers/magazine');
var bodyParser = require('body-parser');

/**
var magazines = require('./routes/magazines.js');
var articles = require('./routes/articles.js');
var authors = require('./routes/authors.js');
app.use('/magazines', magazines);
app.use('/articles', articles);
app.use('/authors', authors);
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

var db = 'mongodb://localhost/magazine-db';
/**
 * Database config based on the environment
 */
if ('development' == app.get('env')) {
    app.set('db', 'mongodb://localhost/magazines-db');
}
if ('test' == app.get('env')) {
      app.set('db', 'mongodb://localhost/magazine-db');
}
/**
 * Mongo Database connection
 */
mongoose.connect(app.get('db'), function(err) {
    if(err) {
        console.log('database connection error', err);
    } else {
        console.log('database connection successful' + app.get('db'));
    }
});

app
.post('/magazines', magazine.save)
.get('/magazines', magazine.get);
// .delete('/magazines/:id')
// .get('/magazines/:id')
// .put('/magazines/:id');

app.listen(port,  function(){
	console.log("Server running in port %d", port);
});
