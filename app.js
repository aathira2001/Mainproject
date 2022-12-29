/*Author:Akhil*/
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
 





/*Html rendering start*/
/**Error: Failed to lookup view "error" in views directory "C:\Users\VICTUS\Desktop\Hdd backup\main project\public\index"
    at Function.render (C:\Users\VICTUS\Desktop\Hdd backup\main project\node_modules\express\lib\application.js:597:17)
    at ServerResponse.render (C:\Users\VICTUS\Desktop\Hdd backup\main project\node_modules\express\lib\response.js:1039:7)
    at C:\Users\VICTUS\Desktop\Hdd backup\main project\appup.js:84:7
    at Layer.handle_error (C:\Users\VICTUS\Desktop\Hdd backup\main project\node_modules\express\lib\router\layer.js:71:5)
    at trim_prefix (C:\Users\VICTUS\Desktop\Hdd backup\main project\node_modules\express\lib\router\index.js:326:13)
    at C:\Users\VICTUS\Desktop\Hdd backup\main project\node_modules\express\lib\router\index.js:286:9
    at Function.process_params (C:\Users\VICTUS\Desktop\Hdd backup\main project\node_modules\express\lib\router\index.js:346:12)
    at next (C:\Users\VICTUS\Desktop\Hdd backup\main project\node_modules\express\lib\router\index.js:280:10)
    at C:\Users\VICTUS\Desktop\Hdd backup\main project\appup.js:72:3
    at Layer.handle [as handle_request] (C:\Users\VICTUS\Desktop\Hdd backup\main project\node_modules\express\lib\router\layer.js:95:5)
    *rendering path is already specified in just below line no:60
    */
// let handleRequest=(req,res)=>{
//  res.writeHead(200,{
//     'content-Type':'text/html'
//   });

// }
// fs.readFile('/index.html',null,(error,data)=>{
//   if(error){
//     res.writeHead(404);//error forward to html
//    res.write('TeamVacctrac file is not found')
//   }
//   else
//   {
//    res.write(data);
//   }
//   res.end();
// })
//app.use(express.static(__dirname + '/views')); 
// app.use(express.static("views"))
/*error*/
app.set('views', path.join(__dirname, 'index.html'));//error fixed and html rendering is completed.. Actually i did provide two specified path for rendering the html file line no:60,70,71;
/*html rendering stop*/




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'index.html')));
app.set('view engine', 'html');
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
