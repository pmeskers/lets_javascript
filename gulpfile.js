var gulp = require('gulp');
var webpack = require('webpack-stream');
var eslint = require('gulp-eslint');
var jasmine = require('gulp-jasmine-browser');
var sass = require('gulp-sass');
var _ = require('lodash');

var webpackConfig = require('./webpack.config.js');

gulp.task('default', ['lint', 'jasmine-phantom']);

gulp.task('dev', ['webpack', 'sass', 'copy-html'], function() {
  gulp.watch(['src/js/**.js'], ['webpack']);
  gulp.watch(['src/css/*.scss'], ['sass']);
  gulp.watch(['src/index.html'], ['copy-html']);
});

gulp.task('webpack', function() {
  return gulp.src(['src/js/index.js'])
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/'));
});

gulp.task('sass', function() {
  gulp.src('src/css/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/'));
});

gulp.task('copy-html', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('build/'));
});

gulp.task('lint', function() {
  return gulp.src(['src/js/*.js', './*.js', 'spec/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('jasmine-phantom', function() {
  return gulp.src(['spec/js/*_spec.js'])
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

