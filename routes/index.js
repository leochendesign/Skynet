var express = require('express');
var router = express.Router();
var DBP = require('./../modules/dbPromise.js');

//首页
router.get('/', function (req, res, next) {
  // console.log(req.query);
  //查询条数
  Promise.all([
    DBP.findCountPromise('myData', 'articleData', {}),//总数
    DBP.findCountPromise('myData', 'articleData', { type: 1 }),//日志
    DBP.findCountPromise('myData', 'articleData', { type: 2 }),//笔记
    DBP.findCountPromise('myData', 'articleData', { type: 3 }),//随笔
    DBP.findCountPromise('myData', 'articleData', { type: 4 }),//杂谈
    DBP.findCountPromise('myData', 'articleData', { type: 5 }),//其他
    DBP.findPromise('myData', 'articleData', {}),//其他
  ]).then(function (results) {
    console.log(results[6]);
    res.render('pages/index', {
      title: '纪路',
      type00Num: results[0],
      type01Num: results[1],
      type02Num: results[2],
      type03Num: results[3],
      type04Num: results[4],
      type05Num: results[5],
      articleList: results[6]
    });
  }, function (err) {
    res.render('err/error', { title: '错误' });
  });
});

module.exports = router;
