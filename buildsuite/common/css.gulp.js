var gulp = require('gulp'),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    sass = require('gulp-sass'),
    promisify = require('./utils/promisify'),
    path = require('path'),
    inject = require('gulp-inject'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer');

var Builder = function (pkg, cfg) {
    this.pkg = pkg;
    this.cfg = cfg;
    this.name = "CSS";
};

Builder.prototype._doLess = function(rename) {
    var destDir = path.join(this.cfg.dir.build, this.cfg.dir.assets, 'css'),

        commonLess = ['!src/frontend/assets/**/*', 'src/frontend/**/*.less'],

        stream = gulp.src('src/frontend/assets/main.less')
            .pipe(inject(gulp.src(commonLess, {read: false}), {
                starttag: '/* inject:imports */',
                endtag: '/* endinject */',
                transform: function (filepath) {
                    return '@import ".' + filepath + '";';
                }
            }))
        .pipe(less({
            cleancss: true,
            compress: true
        }).on('error',function(e){
            gutil.log(e);
        }))
        .pipe(autoprefixer('last 2 version'));
    if (rename) {
        stream = stream.pipe(rename({suffix: '.min.' + this.pkg.version + '-' + this.cfg.builddate}));
    }
    return stream.pipe(gulp.dest(destDir));
};

Builder.prototype._doSass = function(rename) {
    var destDir = path.join(this.cfg.dir.build, this.cfg.dir.assets, 'css'),

        commonLess = ['!src/frontend/css/main.scss', 'src/frontend/**/*.scss'],

        stream = gulp.src('src/frontend/css/main.scss')
            .pipe(inject(gulp.src(commonLess, {read: false}), {
                starttag: '/* inject:imports */',
                endtag: '/* endinject */',
                transform: function (filepath) {
                    return '@import ".' + filepath + '";';
                }
            }))
            .pipe(sass({
                cleancss: true,
                compress: true
            }).on('error',function(e){
                gutil.log(e);
            }))
            .pipe(autoprefixer({
                browsers: ['last 2 versions', 'ie 8', 'ie 9'],
                cascade: false
            }));
    if (rename) {
        stream = stream.pipe(rename({suffix: '.min.' + this.pkg.version + '-' + this.cfg.builddate}));
    }
    return stream.pipe(gulp.dest(destDir));
};

Builder.prototype.build = function(){
    return promisify(this._doSass(false));
};

Builder.prototype.compile = function(){
    return promisify(this._doSass(true));
};

Builder.prototype.watch = function() {
    var builder = this;
    gulp.watch(this.cfg.src.allless, function(){
        builder.build();
    });
    gulp.watch('src/frontend/**/*.scss', function(){
        builder.build();
    });
};

module.exports = Builder;
