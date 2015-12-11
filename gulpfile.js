var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gulp-util');
var eslint = require('gulp-eslint');

var webpackConfig = require('./webpack.config.js');

gulp.task('default', ['lint']);

gulp.task('webpack', function(callback) {
  var config = Object.create(webpackConfig);

  webpack(config,function(error, stats) {
    if(error) throw new gutil.PluginError('webpack', error);
    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('lint', function() {
  return gulp.src(['src/js/*.js', './*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('dev', ['webpack'], function() {
  return gulp.watch(['src/js/**.js'], ['webpack']);
});
