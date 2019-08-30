var express = require('express');
var router = express.Router();
var DB = require('./../modules/db.js');
var DBP = require('./../modules/dbPromise.js');

var moment = require('moment');

//添加文章
router.post('/add_art', function (req, res, next) {
  DB.findSort('myData', 'articleData', { id: -1 }, 1, function (err, docs) {
    if (err) {
      res.send({ code: 500, data: '数据查询失败' });
      return false;
    }
    const lastId = docs[0] ? docs[0].id : 0;
    const now = moment().format("YYYY-MM-DD HH:mm:ss");
    req.body.type = req.body.type * 1;
    req.body.user_id = req.body.user_id * 1;
    req.body.text = JSON.parse(req.body.text);

    const artData = {
      ...req.body,
      id: lastId * 1 + 1,
      create_time: now,
      upData_time: now
    }
    //插入数据
    DB.insertOne('myData', 'articleData', artData, function (err, result) {
      if (err) {
        res.send({ code: 500, data: '添加失败，请稍后重试' });
      } else {
        res.send({ code: 0, data: '添加成功' });
      }
    });
  });
});
//编辑文章
router.post('/edit_art', function (req, res, next) {
  const art_id = req.body.id * 1;
  const now = moment().format("YYYY-MM-DD HH:mm:ss");
  const pData = req.body;
  delete pData.id;
  pData.text = JSON.parse(pData.text);
  pData.upData_time = now;
  DB.updateOne('myData', 'articleData', { id: art_id }, pData, function (err, docs) {
    if (err) {
      res.send({ code: 500, data: '编辑失败，请稍后重试' });
    } else {
      res.send({ code: 0, data: '编辑成功' });
    }
  });

});

//删除文章
router.post('/detail_rm', function (req, res, next) {
  DB.remove('myData', 'articleData', { id: req.body.id * 1 }, function (err, docs) {
    if (err) {
      res.send({ code: 500, data: '删除失败，请稍后重试' });
    } else {
      res.send({ code: 0, data: docs });
    }
  });
});

module.exports = router;
