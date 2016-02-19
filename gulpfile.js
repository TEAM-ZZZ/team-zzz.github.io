'use strict';

var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    uncss = require('gulp-uncss'),
    angularFilesort = require('gulp-angular-filesort'),
    inject = require('gulp-inject'),
    mainBowerFiles = require('main-bower-files'),
    ngAnnotate = require('gulp-ng-annotate');

// server connect
gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

// add angularjs dependency injection
gulp.task('ngAnnotate', function() {
  return gulp.src(['app/*.js','app/**/*.js'])
    .pipe(ngAnnotate())
    .pipe(gulp.dest('dist'));
});

// sort Angular JS app files and inject all files for development
gulp.task('sort_inject', function() {
  return gulp.src('src/index.html')
    .pipe(inject(
      gulp.src(mainBowerFiles({
          paths: {
            bowerDirectory: 'bower',
            bowerrc: '.bowerrc',
            bowerJson: 'bower.json'
          },
          includeDev: true
        }), {read: false}), {name: 'bower'}))
    .pipe(inject(
      gulp.src(['src/app/*.js','src/app/**/*.js'])
        .pipe(angularFilesort())
    ))
    .pipe(inject(
      gulp.src(['src/assets/styles/*.css'])
    ))
    .pipe(gulp.dest(''))
    .pipe(notify('sort and inject Done! :)'));
});

// compile scss into css
gulp.task('css', function() {
   return gulp.src('src/assets/styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['> 1%', 'IE 9'],
            cascade: false
        }))
    //.pipe(minifyCss({compatibility: 'ie9'}))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('src/assets/styles/'))
    .pipe(connect.reload())
    .pipe(notify('CSS Done! :)'));
});

// JavaScript
/*gulp.task('js', function() {
  return gulp.src('/*.js')
    .pipe(uglify())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('dist/'))
    .pipe(notify('JS Done! :)'));
});*/

// html
gulp.task('html', function(){
  return gulp.src('src/index.html')
  .pipe(inject(
    gulp.src(mainBowerFiles({
      paths: {
        bowerDirectory: 'bower',
        bowerrc: '.bowerrc',
        bowerJson: 'bower.json'
      },
          includeDev: true
    }), {read: false}), {name: 'bower'}))
  .pipe(inject(
    gulp.src(['src/app/*.js','src/app/**/*.js'])
      .pipe(angularFilesort())
  ))
  .pipe(inject(
    gulp.src(['src/assets/styles/*.css'])
  ))
  .pipe(gulp.dest(''))
  .pipe(notify('sort and inject Done! :)'))
  .pipe(connect.reload())
  .pipe(notify('HTML Done! :)'));
});

// watch
gulp.task('watch', function(){
  gulp.watch('src/assets/styles/styles.scss', ['css']);
  gulp.watch('src/index.html', ['html']);
});

// default
gulp.task('default', ['connect', 'html', 'css', 'watch']);