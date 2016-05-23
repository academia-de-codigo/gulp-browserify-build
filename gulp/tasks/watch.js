/**
 * Watch javascript files gulp task
 */
var gulp = require('gulp');
var path = require('path');
var config = require('../config');

/**
 * Watch for code changes, build and reload
 */
module.exports = function() {

    return gulp.watch([
        path.join(config.src.base, config.src.js),
        path.join(config.src.base, config.src.css),
        path.join(config.src.base, config.src.html)
    ], ['build']);

};
