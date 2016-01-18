var gulp = require('gulp');
var webpack = require('webpack-stream');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');

var webpackConfig = require('../webpack.config.js');

gulp.task('dist', ['sass-dist', 'html-dist', 'js-dist']);

gulp.task('sass-dist', function() {
  return gulp.src('src/css/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/'));
});

gulp.task('html-dist', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
});

gulp.task('js-dist', ['webpack-uglify-dist']);

gulp.task('webpack-uglify-dist', function() {
  return gulp.src(['src/js/index.js'])
    .pipe(webpack(webpackConfig))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'))
});
