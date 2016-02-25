'use strict';

var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var uncss = require('gulp-uncss');
var angularFilesort = require('gulp-angular-filesort');
var inject = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');
var ngAnnotate = require('gulp-ng-annotate');
var karma = require("karma");
var gulpKarma = require("gulp-karma");
var Server = karma.Server;


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


gulp.task('unit-test', function (done) {
  Server.start({
    configFile: __dirname + '/test/karma.conf.js'
  }, done);
});


// watch
gulp.task('watch', function(){
  gulp.watch('src/assets/styles/styles.scss', ['css']);
  gulp.watch('src/index.html', ['html']);
});

// default
gulp.task('default', ['connect', 'html', 'css', 'watch']);