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



gulp.task('buildPepsi', function(){
 return gulp.src(['./urturn-api.js', './pepsi-widget.js'])
  .pipe(closureCompiler({
      compilerPath: 'compiler.jar',
      fileName: 'build2.js'
    }))
  .pipe(concat('pepsi-widget.min.js'))
  .pipe(gulp.dest('./build'));
});

gulp.task('stagingPepsi', function(){
 return gulp.src(['./urturn-api.js', './upepsi-widget.js'])
  .pipe(replace('www.urturn.com', "staging-ut.urturn.com"))
  .pipe(concat('pepsi-widget.min.staging.js'))
  .pipe(gulp.dest('./build'));
});

gulp.task('localPepsi', function(){
 return gulp.src(['./urturn-api.js', './pepsi-widget.js'])
  .pipe(replace("'www.urturn.com'", 'document.location.hostname'))
//  .pipe(closureCompiler())
  .pipe(concat('pepsi-widget.min.local.js'))
  .pipe(gulp.dest('./build'));
});


gulp.task('buildPharrell', function(){
 return gulp.src(['./urturn-api.js', './pharrell-widget.js'])
  .pipe(closureCompiler({
      compilerPath: 'compiler.jar',
      fileName: 'build2.js'
    }))
  .pipe(concat('pharrell-widget.min.js'))
  .pipe(gulp.dest('./build'));
});

gulp.task('stagingPharrell', function(){
 return gulp.src(['./urturn-api.js', './pharrell-widget.js'])
  .pipe(replace('www.urturn.com', "staging-ut.urturn.com"))
  .pipe(concat('pharrell-widget.min.staging.js'))
  .pipe(gulp.dest('./build'));
});

gulp.task('localPharrell', function(){
 return gulp.src(['./urturn-api.js', './pharrell-widget.js'])
  .pipe(replace("'www.urturn.com'", 'document.location.hostname'))
//  .pipe(closureCompiler())
  .pipe(concat('pharrell-widget.min.local.js'))
  .pipe(gulp.dest('./build'));
});

gulp.task('default', function() {
  gulp.run('build');
  gulp.run('local');
  gulp.run('staging');
  gulp.run('buildAuthor');
  gulp.run('localAuthor');
  gulp.run('stagingAuthor');

  gulp.run('buildPepsi');
  gulp.run('localPepsi');
  gulp.run('stagingPepsi');

  gulp.run('buildPharrell');
  gulp.run('localPharrell');
  gulp.run('stagingPharrell');
});