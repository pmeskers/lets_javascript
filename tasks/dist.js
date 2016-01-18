var gulp = require('gulp');
var webpack = require('webpack-stream');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');

var webpackConfig = require('../webpack.config.js');

gulp.task('dist', ['sass-dist', 'copy-html-dist', 'uglify-dist']);

gulp.task('sass-dist', function() {
  return gulp.src('src/css/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-html-dist', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
});

gulp.task('uglify-dist', ['webpack'], function() {
  return gulp.src('build/index.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});
