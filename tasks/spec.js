var gulp = require('gulp');
var webpack = require('webpack-stream');
var tslint = require('gulp-tslint');
var jasmine = require('gulp-jasmine-browser');
var _ = require('lodash');

var webpackConfig = require('../webpack.config.js');

var jasmineSrcFiles = ['spec/helpers/spec-helper.ts', 'spec/**/*_spec.ts'];

gulp.task('lint', function() {
  return gulp.src(['src/js/**/*.ts', './*.ts', 'spec/**/*.ts'])
    .pipe(tslint({
      formatter: 'verbose'
    }))
    .pipe(tslint.report());
});

gulp.task('jasmine-phantom', function() {
  return gulp.src(jasmineSrcFiles)
    .pipe(webpack(webpackConfig))
    .pipe(jasmine.specRunner({console: true}))
    .pipe(jasmine.headless());
});

gulp.task('jasmine', function() {
  var JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');
  var plugin = new JasminePlugin();

  return gulp.src(jasmineSrcFiles)
    .pipe(webpack(_.merge({
      watch: true,
      plugins: [plugin]}, webpackConfig)))
    .pipe(jasmine.specRunner())
    .pipe(jasmine.server({whenReady: plugin.whenReady}));
});

