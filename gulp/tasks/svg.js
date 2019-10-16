let svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    svgPath = {
        "input": "./dev/static/images/svg/*.svg",
        "output": "./build/images/svg/"
    };

module.exports = function () {
    $.gulp.task('svg', function () {
        return $.gulp.src(svgPath.input)
        // minify svg
            .pipe(svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            // remove all fill, style and stroke declarations in out shapes
            .pipe(cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: {xmlMode: true}
            }))
            // cheerio plugin create unnecessary string '&gt;', so replace it.
            .pipe(replace('&gt;', '>'))
            // build svg sprite
            .pipe(svgSprite({
                mode: {
                    symbol: {
                        sprite: "/svg/sprite.svg",
                    }
                }
            }))
            .pipe($.gulp.dest(svgPath.output));
    });
};
