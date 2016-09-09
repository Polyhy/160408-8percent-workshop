var gulp = require('gulp');
var webpack = require('webpack-stream');
var babel = require('gulp-babel');

gulp.task('default', function() {
  return gulp.src('./src/*.js')
    .pipe(webpack(require('./webpack.config.js')))
    // webpack에서 처리해도 무방
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist/'));
});
