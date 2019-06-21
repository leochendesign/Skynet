var express = require('express');
var router = express.Router();
var DB = require('./../modules/db.js');

//首页
router.get('/', function (req, res, next) {
  console.log(req.query);
  //查询条数
  DB.findCount('myData', 'articleData', {}, function (err, result) {
    console.log(result);
  });

  res.render('pages/index', { title: '纪路' });
});

module.exports = router;
