var gulp = require('gulp');
var webpack = require('webpack-stream');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var stripDebug = require('gulp-strip-debug');

gulp.task('default', function() {
  return gulp.src('./src/*.js')
    .pipe(webpack(require('./gulp-webpack.config.js')))
    // webpack에서 처리해도 무방
    .pipe(stripDebug())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
});
