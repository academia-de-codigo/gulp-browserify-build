/**
 * Gulp assets task
 */
var gulp = require('gulp');
var path = require('path');
var findAssets = require('find-npm-assets');
var config = require('../config');

/**
 * Copy assets into build directory
 */
module.exports = function() {

    gulp.src(findAssets.load({
        debug: config.debug
    })).pipe(gulp.dest(path.join(config.dist.base, config.dist.assets)));

};
