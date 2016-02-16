var gulp = require('gulp'),
    promisify = require('./utils/promisify'),
    ts = require('gulp-typescript'),
    path = require('path'),
    Q = require("q");



var Builder = function (pkg, cfg) {
    this.pkg = pkg;
    this.cfg = cfg;
    this.name = "Backend Language";
};

Builder.prototype._doLanguages = function() {
    var src = this.cfg.src.backendlang;
    console.log('languages');
    var destDir = path.join(this.cfg.dir.backend);
    return promisify(gulp.src(src)
        .pipe(gulp.dest(destDir)));
};

Builder.prototype.build = function(){
    var builder = this;
    return builder._doLanguages();
};

Builder.prototype.compile = function(){
    var builder = this;
    return builder._doLanguages();
};

Builder.prototype.watch = function() {
    var builder = this;
    gulp.watch(this.cfg.src.backendlang, function(){
        builder._doLanguages();
    });
};

module.exports = Builder;
