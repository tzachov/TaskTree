var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');

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

gulp.task('sass', function() {
    gulp.src('src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['sass', 'copy-templates'], function() {
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/**/*.html', ['copy-templates']);
})