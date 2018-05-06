'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pipe = require('gulp-plumber'),
    minify_css = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    minify_css = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    autoprefix = require('gulp-autoprefixer'),
    del = require('del');

gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});

// SASS
gulp.task('sass', function () {
    gulp.src('./src/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compact',
            sourceComments: true
        }))
        .pipe(minify_css())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./'));
});
