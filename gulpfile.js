var gulp = require('gulp'),
  $ = require('gulp-load-plugins')({ camelize: true }),
  runSequence = require('run-sequence')

gulp.task('moveAssets', function() {
  return gulp.src('./app/assets/**/*')
    .pipe(gulp.dest('./dist/assets'))
})

gulp.task('build:revAssets', ['moveAssets'], function() {
  // var rev = new $.revAll()
  return gulp.src('./dist/**/*')
    // .pipe(rev.revision())
    .pipe(gulp.dest('./dist/public'))
    // .pipe(rev.manifestFile())
    // .pipe(gulp.dest('./dist'))
})

gulp.task('build:cpServer', function() {
  // return gulp.src('./app/**/*.{js,ejs}')
  return gulp.src('./app/**/*.*')
    .pipe(gulp.dest('./dist/server-build'))
})
gulp.task('build:revServer', ['build:cpServer'], function() {
  return;
  // var manifest = gulp.src('./dist/rev-manifest.json')
  // return gulp.src('./dist/server-build/{components,containers}/**/*')
  //   .pipe($.revReplace({ manifest: manifest }))
  //   .pipe(gulp.dest('./dist/server-build'))
})

gulp.task('build', function() {
  runSequence('build:revAssets', 'build:revServer');
})
