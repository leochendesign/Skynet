var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var logger = require('morgan');
var ejs = require('ejs');

//自定义模块引入
var validate = require('./modules/validate');

//引入路由文件--get
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');

//引入路由文件--post
var indexRouterPost = require('./routes/index-post');
var loginRouterPost = require('./routes/login-post');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//定义模版后缀名为html
app.engine('.html', ejs.__express);
//开启模版缓存
//app.set('view cache', true);
//设置使用模版的类型
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  name: 'chronicleRoad',
  keys: ['jgFGJHJKfgvUYluUT', 'QMklUrQWzVmlHddp'],
  maxAge: 60 * 1000 * 60 //过期时间 60 分钟
}));
app.use(express.static(path.join(__dirname, 'public')));

// 登陆页面验证状态反向绑定
app.use(['/login'], validate.valLogout);
//登录验证中间件绑定
app.get(['/'], validate.valLogin);

//定义get路由
app.use('/', indexRouter);
app.use('/login', loginRouter);
//定义post路由
app.use('/post', indexRouterPost);
app.use('/login-post', loginRouterPost);

/*
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('err/error', { title: '错误' });
});
*/

module.exports = app;
