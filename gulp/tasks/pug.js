let plumber = require('gulp-plumber'),
    pug = require('gulp-pug'),
    pugInheritance = require('gulp-pug-inheritance'),
    changed = require('gulp-changed'),
    cached = require('gulp-cached'),
    gulpif = require('gulp-if'),
    filter = require('gulp-filter'),
    prettyHtml = require('gulp-pretty-html');

module.exports = function () {
    $.gulp.task('pug', () => {
        return $.gulp.src('./dev/pug/*.pug')
            .pipe(plumber())

            .pipe(gulpif(global.isWatching, cached('pug')))
            .pipe(pugInheritance({basedir: './dev/pug/', skip: 'node_modules'}))
            .pipe(filter(function (file) {
                return !/\/_/.test(file.path) && !/^_/.test(file.relative);
            }))
            .pipe(pug({
                pretty: true
            }))
            .pipe(prettyHtml())
            .pipe(plumber.stop())
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload);
    });
};
