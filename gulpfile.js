var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require("gulp-util");
var eslint = require('eslint');

var webpackConfig = require('./webpack.config.js');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('webpack', function(callback) {
  var config = Object.create(webpackConfig);

  webpack(config,function(error, stats) {
    if(error) throw new gutil.PluginError("webpack", error);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('dev', ['webpack'], function() {
  gulp.watch(['src/js/**.js'], ['webpack']);
});
