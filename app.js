var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index'); // путь index
var s = require('./routes/s');// путь users
var a = require('./routes/a');// путь users

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // папака вьюшек
app.set('view engine', 'pug'); // шаблонизатор

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));//фавиконка
app.use(logger('dev'));// отладка в консольку
app.use(bodyParser.json()); // парсим запросик в JSON
app.use(bodyParser.urlencoded({ extended: false })); // экранируем ссылки там
app.use(cookieParser()); // парсим кукис
app.use(express.static(path.join(__dirname, 'public'))); // полключаем все статические ресурсы из /public

app.use('/', index); // присваиваем пути
app.use('/s', s); // присваиваем пути
app.use('/a', a); // присваиваем пути

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
