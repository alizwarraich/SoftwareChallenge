var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('./middlewares/cors');
var mongoose = require('mongoose');

var index = require('./routes/index');
var hello = require('./routes/hello');
var tweets = require('./routes/tweets');
var signup = require('./routes/signup');
var login = require('./routes/login');

var app = express();

app.use(logger('dev'));
app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/covfefe');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('~~~~~~~~~~~~~~~~~');
  console.log('connected!');
  console.log('~~~~~~~~~~~~~~~~~');
});

app.use('/', index);
app.use('/hello', hello);
app.use('/tweets', tweets);
app.use('/signup', signup);
app.use('/login', login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
