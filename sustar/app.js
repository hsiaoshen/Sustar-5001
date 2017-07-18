var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
var search = require('./routes/search');
var zhong = require('./routes/zhong');
var quit = require('./routes/quit');
var find = require('./routes/find');
var reset = require('./routes/reset');
var findsussess = require('./routes/findsussess');
var info = require('./routes/info');
var tag = require('./routes/tag');
var question = require('./routes/question');
var answer = require('./routes/answer');
var questionsuccess = require('./routes/questionsuccess');
var toutiao = require('./routes/toutiao');
var tagQuestion = require('./routes/tagQuestion');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(session({
    resave: true,
    saveUninitalized: false,
    secret: 'adsjfasksdafjhsadkfhdirfkhvaskdf',
    cookie: {
        maxAge: 1000 * 60 * 30
    }
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/search', search);
app.use('/zhong', zhong);
app.use('/quit', quit);
app.use('/find', find);
app.use('/reset', reset);
app.use('/findsussess', findsussess);
app.use('/info', info);
app.use('/tag', tag);
app.use('/question', question);
app.use('/answer', answer);
app.use('/questionsuccess', questionsuccess);
app.use('/toutiao', toutiao);
app.use('/tagQuestion', tagQuestion);


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
