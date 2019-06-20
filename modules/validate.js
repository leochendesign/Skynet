'use strict';
//定义绝对目录
var path = require('path');
var PUBLIC = path.resolve(__dirname, '..');

//验证登录状态--同步请求
function valLogin(req, res, next) {
    var userName = req.session.userName, userId = req.session.userId;
    if (userName && userId) {
        //登陆状态
        next();
    } else {
        //未登陆状态        
        //跳转至登页面
        res.redirect('/login');
    }
}
//登陆页面反向验证--同步请求
function valLogout(req, res, next) {
    //获取登陆状态
    var userName = req.session.userName, userId = req.session.userId;
    if (userName && userId) {
        //登陆状态
        //跳转至首页
        res.redirect('/');
    } else {
        //未登陆状态
        next();
    }
}



//所有异步请求的登陆态验证写在这里--待完善


module.exports.valLogin = valLogin;
module.exports.valLogout = valLogout;