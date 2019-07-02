var express = require('express');
var router = express.Router();
var DB = require('./../modules/db.js');
var DBP = require('./../modules/dbPromise.js');

//首页
router.get('/', function (req, res, next) {
  const searchData = {};
  if (req.query.type) {
    searchData.type = req.query.type * 1;
  }
  if (req.query.keyword) {
    searchData.$or = [
      { title: new RegExp(req.query.keyword) }, //标题
      { user_name: new RegExp(req.query.keyword) }, //作者
      { general: new RegExp(req.query.keyword) }, //摘要
    ];
  }
  //查询条数
  Promise.all([
    DBP.findCountPromise('myData', 'articleData', {}),//总数
    DBP.findCountPromise('myData', 'articleData', { type: 1 }),//日志
    DBP.findCountPromise('myData', 'articleData', { type: 2 }),//笔记
    DBP.findCountPromise('myData', 'articleData', { type: 3 }),//随笔
    DBP.findCountPromise('myData', 'articleData', { type: 4 }),//杂谈
    DBP.findCountPromise('myData', 'articleData', { type: 5 }),//其他
    DBP.findPromise('myData', 'articleData', searchData),//文章列表
  ]).then(function (results) {
    res.render('pages/index', {
      title: '纪路',
      type00Num: results[0],
      type01Num: results[1],
      type02Num: results[2],
      type03Num: results[3],
      type04Num: results[4],
      type05Num: results[5],
      articleList: results[6],
      type: req.query.type,
      keyword: req.query.keyword,
      user_name: req.session.userName,
    });
  }, function (err) {
    res.render('err/error', { title: '错误' });
  });
});

//详情页面
router.get('/detail', function (req, res, next) {
  const thisId = req.query.id * 1;
  DB.find('myData', 'articleData', { id: thisId }, function (err, docs) {
    if (err) {
      res.render('err/error', { title: '错误' });
    } else {
      res.render('pages/detail', {
        title: '纪路',
        user_name: req.session.userName,
        data: docs[0],
      });
    }
  });
});

//退出登陆
router.get('/get_out', function (req, res, next) {
  if (req.session) {
    req.session = null;
  }
  res.redirect('/');
});

module.exports = router;
