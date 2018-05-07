'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pipe = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    minify_css = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    autoprefix = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    browserSync.init({
        proxy: "dev.wp-boilerplate"
    });

    gulp.watch('./src/sass/**/*.scss', ['sass']);
    gulp.watch('./templates/**/*.twig', ['twig']);
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
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

gulp.task('twig', function () {
    browserSync.reload();
});