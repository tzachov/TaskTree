var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var clean = require('gulp-clean');

var requiredLibs = [
    'node_modules/@angular/**/*.js',
    'node_modules/es6-shim/**/*.js',
    'node_modules/zone.js/**/*.js',
    'node_modules/rxjs/**/*.js',
    'node_modules/reflect-metadata/**/*.js',
    'node_modules/systemjs/dist/**/*.js'
];

gulp.task('clean-templates', function () {
    return gulp.src('src/**/*.html')
        .pipe(clean());
});

gulp.task('clean-libraries', function () {
    return gulp.src('dist/lib', { read: false })
        .pipe(clean());
});

gulp.task('copy-templates', function () {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            caseSensitive: true,
            keepClosingSlash: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('copy-libraries', ['clean-libraries'], function () {
    return gulp.src(requiredLibs, { base: 'node_modules' })
        .pipe(gulp.dest('dist/lib/'));
});

gulp.task('sass', function () {
    return gulp.src('src/**/*.scss', { base: 'src/style' })
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['sass', 'copy-templates'], function () {
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html', ['copy-templates']);
})