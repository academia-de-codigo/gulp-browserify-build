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

    gulp.watch(path.join(config.src.base, config.src.css), {
        interval: 500
    }, ['css']);
    gulp.watch(path.join(config.src.base, config.src.html), {
        interval: 500
    }, ['html']);

    gulp.watch([
        path.join(config.src.base, config.src.js),
        config.src.deps
    ], {
        interval: 1000
    }, ['lint', 'compile']);

};
