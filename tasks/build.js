var gulp = require('gulp');
var webpack = require('webpack-stream');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var prettyError = require('gulp-prettyerror');

var webpackConfig = require('../webpack.config.js');

gulp.task('dev', ['webpack', 'sass', 'copy-html', 'server'], function() {
  gulp.watch(['src/ts/**/*.ts', 'src/ts/**/*.tsx'], ['webpack']);
  gulp.watch(['src/css/**/*.scss'], ['sass']);
  gulp.watch(['src/index.html'], ['copy-html']);
});

gulp.task('dev-no-reload', ['webpack', 'sass', 'copy-html', 'server-no-reload'], function() {
  gulp.watch(['src/ts/**/*.ts', 'src/ts/**/*.tsx'], ['webpack']);
  gulp.watch(['src/css/*.scss'], ['sass']);
  gulp.watch(['src/index.html'], ['copy-html']);
});

gulp.task('webpack', function() {
  return gulp.src(['src/ts/index.tsx'])
    .pipe(prettyError())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload());
});

gulp.task('sass', function() {
  gulp.src('src/css/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload());
});

gulp.task('copy-html', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload());
});

gulp.task('server', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('server-no-reload', function() {
  connect.server({
    root: 'build',
    livereload: false
  });
});
