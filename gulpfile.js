const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('minify-js', async function() {
    gulp.src(['s3/*.js'])
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('minified.js'))
        .pipe(gulp.dest('minified'))
})
