var createError = require('http-errors');
var express = require('express');
var cors = require('cors');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var authRoutes = require('./routes/authRoutes');
var pointRoutes = require('./routes/point');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', authRoutes);
app.use('/api',pointRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});


module.exports = app;
// import express from 'express';
// import bodyParser from 'body-parser';
// import authRoutes from './routes/authRoutes';
// import { config } from './config/config';

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(express.static('public'));

// // Routes
// app.use('/api', authRoutes);

// // Start server
// app.listen(config.port, () => {
//     console.log(`Server is running on port ${config.port}`);
// });
// export default app;
