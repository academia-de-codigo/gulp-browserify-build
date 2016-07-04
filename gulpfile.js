/**
 * Rather than manage one giant configuration file responsible
 * for creating multiple tasks, each task has been broken out into
 * its own file in gulp/tasks. Any files in that directory get
 * automatically required.
 *
 * To add a new task, simply add a new task file into that directory.
 */
var gulp = require('gulp');
var gutil = require('gulp-util');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

// Require all tasks in gulp/tasks
var tasks = requireDir('gulp/tasks');

// Create gulp tasks from files in gulp directory
for (var task in tasks) {
    gulp.task(task, tasks[task]);
}

// Setup the build task running sequence
gulp.task('build', ['lint'], function(cb) {
    runSequence('assets', 'css', 'compile', 'html', function() {
        gutil.log(gutil.colors.green('Application Build finished!'));
        cb();
    });
});

gulp.task('livereload', ['watch', 'serve']);

// Setup the default task running sequence
gulp.task('default', ['build'], function() {
    gulp.start('livereload');
});
