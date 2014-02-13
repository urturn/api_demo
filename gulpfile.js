var gulp = require('gulp');
var gutil = require('gulp-util');
var closureCompiler = require('gulp-closure-compiler');
var concat = require('gulp-concat');
var replace = require('gulp-replace');

gulp.task('build', function(){
 return gulp.src(['./urturn-api.js', './urturn-expression-widget.js'])
  .pipe(closureCompiler())
  .pipe(concat('urturn-expression-widget.min.js'))
  .pipe(replace('www.urturn.com', "staging-ut.urturn.com"))
  .pipe(concat('urturn-expression-widget.min.staging.js'))
  .pipe(gulp.dest('./build'));
});


gulp.task('default', function() {
  gulp.run('build');
});