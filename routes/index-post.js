var express = require('express');
var router = express.Router();
var DB = require('./../modules/db.js');
var DBP = require('./../modules/dbPromise.js');

//删除文章
router.post('/detail_rm', function (req, res, next) {
  DB.remove('myData', 'articleData', { id: req.body.id * 1 }, function (err, docs) {
    res.send({ code: 0, data: docs });
  });
});

module.exports = router;
