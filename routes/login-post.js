var express = require('express');
var router = express.Router();
var moment = require('moment');
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
//注册请求
router.post('/sign-in', function (req, res, next) {
    DB.find('myData', 'userData', { name: req.body.userName }, function (err, docs) {
        if (err) {
            res.send({ code: 500, data: '数据查询失败' });
            return false;
        }
        //检查重名
        if (docs.length > 0) {
            res.send({ code: 500, data: '用户名已存在' });
            return false;
        }
        //未重名获取最后一个ID,倒序第一条
        DB.findSort('myData', 'userData', { id: -1 }, 1, function (err, docs) {
            if (err) {
                res.send({ code: 500, data: '数据查询失败' });
                return false;
            }
            const lastId = docs[0] ? docs[0].id : 0;
            //插入数据
            const instertDoc = {
                id: parseInt(lastId) + 1,
                name: req.body.userName,
                pass: req.body.password,
                create_time: moment().format('YYYY-MM-DD HH:mm:ss'),
                upData_time: moment().format('YYYY-MM-DD HH:mm:ss'),
            }
            DB.insertOne('myData', 'userData', instertDoc, function (err, result) {
                res.send({ code: 0, data: '登陆成功' });
            });
        });
    });
});

module.exports = router;