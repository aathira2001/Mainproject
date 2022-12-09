/* pending...module.exports = function(app) {

*Api function can n't be fixed
*frond-end integration is pending.....
*sendgrid configuration is pending 

*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');//setting cookie-parser
var logger = require('morgan');
var db=require('./dbconnector/connection');//this is the connection file
// const axios = require('axios');
// var react=require('react');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app= express();
 
app.set('views', path.join(__dirname, 'index.html'));//may be fetch some errors bcz the html path is not set

  var cookie=function(req,res,next){
   
    next(create Error())
  secret: '@1akgd'//got an access from the session
   (callback)=>{
   //pending.........
   
   
   res.cookie-parser;
   
   
  }
    next.close();
    
    
    
   
}
  /*cookie session start*/
  let cookie=function(req,res,next)
  {
   next(req.cookie)
   return;
   
   
  }
  
  /*cookie session end...*/
// //hbs created by express-generator
//app.set('view engine', 'hbs');
// app.set('view engine', 'react');




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'index.html')));
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
