var gulp = require('gulp'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    del = require('del'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css');


gulp.task('copy:html', function () {
  return gulp.src('src/tpl/**/*.html')
      .pipe(gulp.dest('dist'))
      .pipe(gulp.dest('demo/tos-popup-plugin'))
});

gulp.task('copy:config', function(){
  return gulp.src('src/js/config.json')
      .pipe(gulp.dest('dist/js'))
      .pipe(gulp.dest('demo/tos-popup-plugin'))
});

gulp.task('copy:dist', ['copy:config', 'copy:html'], function () {
  return gulp.src('dist/**')
      .pipe(gulp.dest('demo/tos-popup-plugin'))
});

gulp.task('sass', function () {
  return gulp.src('src/**/*.scss')
      .pipe(sass({outputStyle: 'compressed', outFile: 'dist/css/main.css', sourceMap: true}).on('error', sass.logError))
      .pipe(gulp.dest('src/css'));
});

gulp.task('concat:js', function () {
  return gulp.src('src/**/*.js')
      .pipe(uglify())
      .pipe(concat("index.min.js"))
      .pipe(gulp.dest('dist/js'))
      .pipe(gulp.dest('demo/tos-popup-plugin/js'));
});


gulp.task('concat:css', ['sass'], function () {
  return gulp.src('src/**/*.css')
      .pipe(minifyCSS())
      .pipe(concat('main.min.css'))
      .pipe(gulp.dest('dist/css'))
      .pipe(gulp.dest('demo/tos-popup-plugin/css'));
});

gulp.task('clean:dist', function () {
  return del.sync('dist');
});

gulp.task('watch', function () {
  gulp.watch('src/js/**/*.js', ['concat:js']);
  gulp.watch('src/js/**/*.js', browserSync.reload);
  gulp.watch('src/js/**/*.css', ['concat:css']);
  gulp.watch('src/js/**/*.css', browserSync.reload);
  gulp.watch('src/tpl/**/*.html', ['copy:html']);
  gulp.watch('src/tpl/**/*.html', browserSync.reload);
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'demo'
    },
    startPath: 'demo.html'
  })
});

gulp.task('build', [
  'clean:dist',
  'concat:js',
  'concat:css',
  'copy:dist'
]);

gulp.task('default', ['test']);

gulp.task('test', [
  'clean:dist',
  'concat:js',
  'concat:css',
  'copy:dist',
  'browserSync',
  'watch'
]);
