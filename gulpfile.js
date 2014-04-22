var gulp = require('gulp');
var gutil = require('gulp-util');
var closureCompiler = require('gulp-closure-compiler');
var concat = require('gulp-concat');
var replace = require('gulp-replace');

gulp.task('build', function(){
 return gulp.src(['./urturn-api.js', './urturn-expression-widget.js'])
  .pipe(closureCompiler({
      compilerPath: 'compiler.jar',
      fileName: 'build.js'
    }))
  .pipe(concat('expression-widget.min.js'))
  .pipe(gulp.dest('./build'));
});

gulp.task('staging', function(){
 return gulp.src(['./urturn-api.js', './urturn-expression-widget.js'])
  .pipe(replace('www.urturn.com', "staging-ut.urturn.com"))
  .pipe(concat('expression-widget.min.staging.js'))
  .pipe(gulp.dest('./build'));
});

gulp.task('local', function(){
 return gulp.src(['./urturn-api.js', './urturn-expression-widget.js'])
  .pipe(replace("'www.urturn.com'", 'document.location.hostname'))
//  .pipe(closureCompiler())
  .pipe(concat('expression-widget.min.local.js'))
  .pipe(gulp.dest('./build'));
});


gulp.task('buildAuthor', function(){
 return gulp.src(['./urturn-api.js', './urturn-author-widget.js'])
  .pipe(closureCompiler({
      compilerPath: 'compiler.jar',
      fileName: 'build2.js'
    }))
  .pipe(concat('author-widget.min.js'))
  .pipe(gulp.dest('./build'));
});

gulp.task('stagingAuthor', function(){
 return gulp.src(['./urturn-api.js', './urturn-author-widget.js'])
  .pipe(replace('www.urturn.com', "staging-ut.urturn.com"))
  .pipe(concat('author-widget.min.staging.js'))
  .pipe(gulp.dest('./build'));
});

gulp.task('localAuthor', function(){
 return gulp.src(['./urturn-api.js', './urturn-author-widget.js'])
  .pipe(replace("'www.urturn.com'", 'document.location.hostname'))
//  .pipe(closureCompiler())
  .pipe(concat('author-widget.min.local.js'))
  .pipe(gulp.dest('./build'));
});



gulp.task('default', function() {
  gulp.run('build');
  gulp.run('local');
  gulp.run('staging');
  gulp.run('buildAuthor');
  gulp.run('localAuthor');
  gulp.run('stagingAuthor');
});