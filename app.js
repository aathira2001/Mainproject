/* pending...module.exports = function(app) {

*Api function can n't be fixed
*frond-end integration is pending.....

*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db=require('./dbconnector/connection');//this is the connection file
// const axios = require('axios');
// var react=require('react');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app= express();
 
app.set('views', path.join(__dirname, 'views'));
// //hbs created by express-generator
app.set('view engine', 'hbs');
// app.set('view engine', 'react');


/*New connection creating for reactjs"Axios"*/
// axios.get('http://localhost:3001/')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
db.connect((err)=>{
  if(err)
  console.log('\n unable to connect to database(Team vacctrac please check your internet connection is proper or not):)');//if error in connection
  else
  console.log('connected to db(team vacctrac ready to go:)');//if connection is established
})
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //re
  res.render('error');

});

module.exports = app;
