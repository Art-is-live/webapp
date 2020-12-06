const gulp = require('gulp');

const sass = require('gulp-sass');

const browserSync = require('browser-sync').create();

gulp.task('styles', function(){
    return gulp.src('./www/styles/main.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('./www/styles'))
      .pipe(browserSync.reload({
        stream: true
      }))
});