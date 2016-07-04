/**
 * Serve gulp task
 */
var config = require('../config');
var webserver = require('gulp-connect');
var gutil = require('gulp-util');

/**
 * Sping up a web server with live reload capabilities
 */
module.exports = function() {

    var serverConfig = {
        name: 'Gulp WebServer',
        root: config.dist.base,
        host: config.server.host,
        port: config.server.port,
        debug: config.debug,
        livereload: config.server.livereload,
    };

    if (config.debug) {
        serverConfig.middleware = function() {
            return [accessLog];
        };
    }

    return webserver.server(serverConfig);

};

function accessLog(req, res, next) {
    gutil.log(req.method, req.url, 'HTTP/' + req.httpVersion, res.statusCode);
    next();
}
