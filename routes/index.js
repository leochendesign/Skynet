var express = require('express');
var router = express.Router();

//首页
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: '纪路' });
});

module.exports = router;
