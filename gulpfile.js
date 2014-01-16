var gulp = require('gulp');
var gutil = require('gulp-util');
var closureCompiler = require('gulp-closure-compiler');
var concat = require('gulp-concat');

gulp.task('build', function(){
 return gulp.src(['./urturn-api.js', './urturn-expression-widget.js'])
  .pipe(closureCompiler())
  .pipe(concat('urturn-expression-widget.min.js'))
  .pipe(gulp.dest('./build'));
});


gulp.task('default', function() {
  gulp.run('build');
});