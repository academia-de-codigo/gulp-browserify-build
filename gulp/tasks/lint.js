/**
 * Gulp lint task
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var config = require('../config');

/**
 * Check code for style and errors
 */
module.exports = function() {

    return gulp.src([config.src.base + '/**/*.js', '*.js', 'gulp/**/*.js'])
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jscs.reporter('fail'))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: config.debug
        }))
        .pipe(jshint.reporter('fail'));

};
