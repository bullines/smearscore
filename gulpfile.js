"use strict";

// Include gulp
var gulp = require('gulp');

// Include plugins
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');

// Test JS
gulp.task('specs', function () {
    return gulp.src('src/js/spec/core/*.js')
        .pipe(jasmine());
});

// JSHint
gulp.task('lint', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Default Task
gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('default', ['specs']);
// gulp.task('default', ['specs', 'lint']);