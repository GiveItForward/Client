
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use( function(req, res, next){
    app.locals.pretty = true
    next()
  });
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/index', function(req,res) { res.render("index")});
app.get('/signup', function(req,res) { res.render("layouts/signup")});
app.get('/request_feed', function(req,res) { res.render("layouts/request_feed")});
app.get('/orgs', function(req,res) { res.render("layouts/orgs")});
app.get('/my_profile', function(req,res) { res.render("layouts/my_profile")});
app.get('/edit_profile', function(req,res) { res.render("layouts/edit_profile")});
app.get('/new_request', function(req,res) { res.render("layouts/new_request")});
app.get('/paypal', function(req,res) { res.render("layouts/paypal")});

app.get('/org_home', function(req,res) { res.render("layouts/org_home")});
app.get('/admin_home', function(req,res) { res.render("layouts/admin_home")});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
