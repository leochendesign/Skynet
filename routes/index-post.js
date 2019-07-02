var express = require('express');
var router = express.Router();
var DB = require('./../modules/db.js');
var DBP = require('./../modules/dbPromise.js');

//删除文章
router.post('/detail_rm', function (req, res, next) {
  res.send({ code: 0, data: '删除成功' });
});

module.exports = router;
