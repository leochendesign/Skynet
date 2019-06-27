var express = require('express');
var router = express.Router();
var DB = require('./../modules/db.js');

//首页
router.get('/', function (req, res, next) {
  // console.log(req.query);
  //查询条数
  DB.findCount('myData', 'articleData', {}, function (err, result) {
    console.log(result);
  });

  //测试promise
  let p = new Promise(function (resolve, reject) {
    //异步操作
    setTimeout(function () {
      console.log('promise执行完毕');
      resolve('返回数据');
    }, 2000);
  });
  p.then(data => {
    console.log(data);
  });

  res.render('pages/index', { title: '纪路' });
});

module.exports = router;
