/*Author:Akhil*/
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
 var db=require('./dbconnector/connection');//this is the connection file

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));
 db.connect((err)=>{
  if(err)
  console.log('\n unable to connect to database(Team vacctrac please check your internet connection is proper or not):)');//if error in connection
  else
  console.log('connected to db(team vacctrac ready to go:)');//if connection is established
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
