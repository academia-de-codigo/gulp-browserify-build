/**
 * Gulp compile task
 */
var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var path = require('path');
var source = require('vinyl-source-stream');
var browserify = require('browserify');

var config = require('../config');
var packageJson = require('../../package.json');
var dependencies = Object.keys(packageJson && packageJson.dependencies || {});

/**
 * Compile angular templates, create browserify bundle and uglify
 */
module.exports = function() {

    var bundler = browserify({
        cache: {},
        packageCache: {},
        fullPaths: false,
        entries: packageJson.main,
        debug: !config.prod // enables source map support
    });

    var bundlee = function() {
        return bundler
            .external(dependencies)
            .bundle()
            .pipe(source(config.bundle.js))
            .pipe(gulpif(config.prod, streamify(uglify({
                outSourceMaps: false
            }))))
            .pipe(gulp.dest(path.join(config.dist.base,config.dist.js)));
    };

    return bundlee();

};
