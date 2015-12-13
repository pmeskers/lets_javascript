var gulp = require('gulp');
var webpack = require('webpack-stream');
var eslint = require('gulp-eslint');
var jasmine = require('gulp-jasmine-browser');
var _ = require('lodash');

var webpackConfig = require('./webpack.config.js');

gulp.task('default', ['lint', 'jasmine-phantom']);

gulp.task('dev', ['webpack'], function() {
  return gulp.watch(['src/js/**.js'], ['webpack']);
});

gulp.task('webpack', function(callback) {
  return gulp.src(['src/js/index.js'])
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/'));
});

gulp.task('lint', function() {
  return gulp.src(['src/js/*.js', './*.js', 'spec/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('jasmine-phantom', function() {
  return gulp.src(['spec/js/app_spec.js'])
    .pipe(webpack(webpackConfig))
    .pipe(jasmine.specRunner({console: true}))
    .pipe(jasmine.headless());
});

gulp.task('jasmine', function() {
  var JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');
  var plugin = new JasminePlugin();

  return gulp.src(['spec/js/*_spec.js'])
    .pipe(webpack(_.merge(webpackConfig, {
      watch: true,
      output: {filename: 'spec.js'},
      plugins: [plugin]})))
    .pipe(jasmine.specRunner())
    .pipe(jasmine.server({whenReady: plugin.whenReady}));
});

