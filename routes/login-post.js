var express = require('express');
var router = express.Router();
var DB = require('./../modules/db.js');


//登陆请求
router.post('/', function (req, res, next) {
    DB.find('myData', 'userData', { name: req.body.userName, pass: req.body.password }, function (err, docs) {
        if (docs.length === 1) {
            req.session['userName'] = docs[0].name;
            req.session['userId'] = docs[0].id;
            res.send({ code: 0, data: '登陆成功' });
        } else {
            res.send({ code: 500, data: '用户名或密码错误' });
        }
    });
});

module.exports = router;