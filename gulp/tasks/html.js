/**
 * Html gulp task
 */
var gulp = require('gulp');
var gulpif = require('gulp-if');
var path = require('path');
var htmlmin = require('gulp-htmlmin');
var config = require('../config');

/**
 * Minify and copy html to the dist directory
 */
module.exports = function() {

    return gulp.src(path.join(config.src.base,config.src.html))
        .pipe(gulpif(config.prod, htmlmin({
            collapseWhitespace: true
        })))
        .pipe(gulp.dest(config.dist.base));

};
