
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
 var db=require('./dbconnector/connection');//this is the connection file
//  var createError=require('createError')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// const { create } = require('hbs');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'views')));
// server css as static
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

 db.connect((err)=>{
  if(err)
  console.log('\n unable to connect to database(Team vacctrac please check your internet connection is proper or not):)');//if error in connection
  else
  console.log('connected to db(team vacctrac ready to go:)');//if connection is established
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
const createError=()=>{
  console.log("")
}
app.use(function(req, res, next) {
  next(createError(404));
  
});

app.get('/404', function(req, res, next){
next();// trigger a 404 since no other middleware will match /404 after this one, and we're not responding here
});
app.get('/403', function(req, res, next){// trigger a 403 error
  var err = new Error('not allowed!');
  err.status = 403;
  next(err);
});
app.get('/500', function(req, res, next){// trigger a generic (500) error
  next(new Error('ERROR!'));
});


module.exports = app;
