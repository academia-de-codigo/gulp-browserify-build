/**
 * Css gulp task
 */
var gulp = require('gulp');
var gulpif = require('gulp-if');
var minifycss = require('gulp-cssnano');
var concat = require('gulp-concat');
var path = require('path');
var config = require('../config');

/**
 * Minify and copy css files
 */
module.exports = function() {

    return gulp.src(path.join(config.src.base, config.src.css))
        .pipe(concat(path.join(config.bundle.css)))
        .pipe(gulpif(config.prod, minifycss({
            discardComments: {
                removeAll: true
            },
            zindex: false
        })))
        .pipe(gulp.dest(path.join(config.dist.base, config.dist.css)));

};
