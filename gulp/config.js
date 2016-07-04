var args = require('yargs').argv;

var config = {};
module.exports = config;

config.debug = args.debug;
config.prod = args.prod;

config.src = {
    base: 'src',
    css: 'css/**/*.css',
    js: 'js/**/*.js',
    html: 'index.html',
    deps: 'node_modules/**/*.js'
};

config.dist = {
    base: 'build',
    assets: 'assets',
    js: 'js',
    css: 'css'
};

config.bundle = {
    css: 'styles.css',
    js: 'index.js'
};

config.server = {
    port: '9000',
    livereload: true
};
