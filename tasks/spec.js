var gulp = require('gulp');
var webpack = require('webpack-stream');
var eslint = require('gulp-eslint');
var jasmine = require('gulp-jasmine-browser');
var _ = require('lodash');

var webpackConfig = require('../webpack.config.js');

var jasmineSrcFiles = ['spec/helpers/spec-helper.js', 'spec/**/*_spec.js'];

gulp.task('lint', function() {
  return gulp.src(['src/js/*.js', './*.js', 'spec/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
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
    .pipe(webpack(_.merge(webpackConfig, {
      watch: true,
      output: {filename: 'spec.js'},
      plugins: [plugin]})))
    .pipe(jasmine.specRunner())
    .pipe(jasmine.server({whenReady: plugin.whenReady}));
});

