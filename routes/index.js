var express = require('express');
const path=require('path')
var router = express.Router();
// var mongo=require('mongoose')

/* GET home page. */
router.get('/', function(req, res) {
res.sendFile(path.join(__dirname, '../public', '/login.html'))
 
});
router.post('/test',(req,res)=>{
  console.log(req.body)
 

})
