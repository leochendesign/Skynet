'use strict';

var DB = require('./db.js');

//封装promise查询

//查询条数
exports.findCountPromise = function (dbname, collectionname, json) {
    let p = new Promise(function (resolve, reject) {
        //读取条数
        DB.findCount(dbname, collectionname, json, function (err, result) {
            if (err) {
                reject('数据读取失败');
            } else {
                resolve(result);
            }
        });
    });
    return p;
}

//查询全部数据
exports.findPromise = function (dbname, collectionname, json) {
    let p = new Promise(function (resolve, reject) {
        //读取条数
        DB.find(dbname, collectionname, json, function (err, result) {
            if (err) {
                reject('数据读取失败');
            } else {
                resolve(result);
            }
        });
    });
    return p;
}