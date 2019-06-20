var express = require('express');
var router = express.Router();

//登陆页面
router.get('/', function(req, res, next) {
  res.render('pages/login', { title: '纪路-登陆' });
});

module.exports = router;