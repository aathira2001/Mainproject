var express = require('express');
var router = express.Router();
// var mongo=require('mongoose')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Vaccine tracker' });
});

router.post('/send', function(req, res) {
  console.log(req.body)
  
})

module.exports = router;
