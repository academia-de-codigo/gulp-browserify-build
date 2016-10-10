/**
 * Clean gulp task
 */
var gulp = require('gulp');
var tar = require('gulp-tar');
var gzip = require('gulp-gzip');
var path = require('path');
var config = require('../config');

module.exports = function() {
    return gulp.src(path.join(config.dist.base, '**/*'))
        .pipe(tar('build.tar'))
        .pipe(gzip())
        .pipe(gulp.dest(config.dist.target));
};
