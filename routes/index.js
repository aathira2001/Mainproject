
var express = require('express');
const path=require('path')
var router = express.Router();
// var mongo=require('mongoose')

/* GET home page. */
router.get('/', function(req, res) {
res.sendFile(path.join(__dirname, '../public', 'm1/login.html'))
 
});

router.post('/login',function(req,res){
  console.log(req.body)


})

router.get('/home',function(req,res){
  res.sendFile(path.join(__dirname,'../public','m1/home.html'))
})

router.post('/home',function(req,res){

//no input fetch from the home page

})

router.get('/signup',function(req,res){
  res.sendFile(path.join(__dirname,'../public','test.html'))
})

router.post('/signup',function(req,res){
  console.log(req.body)
})








module.exports = router;
