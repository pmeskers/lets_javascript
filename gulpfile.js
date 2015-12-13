var requireDir = require('require-dir');
requireDir('./tasks');

var gulp = require('gulp');

gulp.task('default', ['lint', 'jasmine-phantom']);
