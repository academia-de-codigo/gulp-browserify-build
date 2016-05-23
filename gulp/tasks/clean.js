/**
 * Clean gulp task
 */
var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var config = require('../config');

/**
 * Clean the dist directory
 */
module.exports = function() {
    return gulp.src(config.dist.base)
        .pipe(vinylPaths(del));
};
