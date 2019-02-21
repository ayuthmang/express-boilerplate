const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('build:node', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('build'))
});

gulp.task('copy:views', () => {
  return gulp.src('src/views/**/*.pug')
    .pipe(gulp.dest('build/views'));
});

gulp.task('build', gulp.parallel('build:node', 'copy:views'));
