var express = require('express');
var router = express.Router();

//登陆页面
router.get('/', function(req, res, next) {
  res.render('pages/login', { title: '纪路-登陆' });
});
//注册页面
router.get('/sign_in', function(req, res, next) {
  res.render('pages/sign_in', { title: '纪路-注册' });
});


module.exports = router;