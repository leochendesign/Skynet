'use strict';

var MongoClient = require('mongodb').MongoClient;
var dbURL = 'mongodb://localhost:27017';

function connectDb(callback) {
    MongoClient.connect(dbURL, { useNewUrlParser: true }, function (err, db) {
        if (err) {
            console.log('数据库连接失败');
            return;
        }
        callback(db);
        db.close();
    })
}
//查询第一条
exports.findOne = function (dbname, collectionname, json, callback) {
    connectDb(function (db) {
        const DB = db.db(dbname);
        const collection = DB.collection(collectionname);
        var result = collection.findOne(json, null, callback);
    });
}
//查询全部
exports.find = function (dbname, collectionname, json, callback) {
    connectDb(function (db) {
        const DB = db.db(dbname);
        const collection = DB.collection(collectionname);
        var result = collection.find(json).toArray(callback);
    });
}
//查询某个字段排序的前若干条
exports.findSort = function (dbname, collectionname, json, number, callback) {
    connectDb(function (db) {
        const DB = db.db(dbname);
        const collection = DB.collection(collectionname);
        var result = collection.find().sort(json).limit(number).toArray(callback);
    });
}
//查询某个结果记录的条数
exports.findCount = function (dbname, collectionname, json, callback) {
    connectDb(function (db) {
        const DB = db.db(dbname);
        const collection = DB.collection(collectionname);
        collection.find(json).count(callback);
    });
}

//插入一条
exports.insertOne = function (dbname, collectionname, json, callback) {
    connectDb(function (db) {
        const DB = db.db(dbname);
        const collection = DB.collection(collectionname);
        collection.insertOne(json, callback)
    })
}

//删除数据
exports.remove = function (dbname, collectionname, json, callback) {
    connectDb(function (db) {
        const DB = db.db(dbname);
        const collection = DB.collection(collectionname);
        collection.remove(json, callback)
    })
}

//更新单条数据数据
exports.updateOne = function (dbname, collectionname, query, update, callback) {
    connectDb(function (db) {
        const DB = db.db(dbname);
        const collection = DB.collection(collectionname);
        collection.updateOne(query, { $set: update }, callback)
    })
}
