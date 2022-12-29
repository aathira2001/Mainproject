/**
 * Waiting for front-end
 *Html Testing completed..
 */
var express = require('express');
var router = express.Router();
// var mongo=require('mongoose')

/* GET home page. */
router.get('/', function(req, res) {//req:request,res:response
  res.render('index', { title: 'Vaccine tracker' });
});




module.exports = router;
