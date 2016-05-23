/**
 * Serve gulp task
 */
var config = require('../config');
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var morgan = require('morgan');

/**
 * Sping up a web server with live reload capabilities
 */
module.exports = function() {

    var serverConfig = {
        port: config.server.port,
        livereload: config.server.livereload,
    };

    if (config.debug) {
        serverConfig.middleware = morgan('dev');
    }

    return gulp.src(config.dist.base)
        .pipe(webserver(serverConfig));

};
