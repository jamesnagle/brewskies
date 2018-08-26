var gulp = require('gulp');
var sass = require('gulp-dart-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssmin = require('gulp-cssnano');
var pump = require('pump');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var rollup = require('rollup-stream');
var jsx = require('rollup-plugin-jsx-js');
var babel_rollup = require('rollup-plugin-babel');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('rollup', function () {
    return rollup({
        input: 'client/src/js/index.js',
        format: 'iife',
        sourcemap: true,
        plugins: [
            babel_rollup(/*{externalHelpers: true}*/)
            //nodeResolve({ jsnext: true, main: true }),
            //commonjs({include: 'node_modules/**'})
        ],
        onwarn: function (data) {
            if (/external dependency/.test(data)) return;
            console.error(data.message);
        }
    })
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('client/public/js'));
});

gulp.task('clean:public', function() {
    return del.sync('public');
})

gulp.task('images', function() {
    return gulp.src('client/src/images/**/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin({
        interlaced: true
    })))
    .pipe(gulp.dest('client/src/images'))
});

gulp.task('useref', function() {
    return gulp.src('client/src/*.html')
      .pipe(useref())
      .pipe(gulpIf('*.js', uglify())) // minify only js files
      .pipe(gulpIf('*.css', cssmin())) // minify only css files
      .pipe(gulp.dest('public'))
});

gulp.task('debug', function (cb) {
    pump([
      gulp.src('client/**/*.js'),
      uglify(),
      gulp.dest('client/')
    ], cb);
});

gulp.task('browserSync', ['rollup'], function() {
    browserSync.init({
        server: {
            baseDir: 'client/public/index.html',
        },
        port: 3000,  // alternative port: 3000, 8000
    })
});

gulp.task('sass', function(){
    return gulp.src('client/src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('client/public/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function(){ // second argument is an array of tasks to be performed BEFORE executing watch
    gulp.watch('client/src/scss/**/*.scss', ['sass']); 
    gulp.watch('client/src/*.html', browserSync.reload);
    gulp.watch('client/src/js/**/*.js', browserSync.reload);
})

gulp.task('build', function (cb) {
    runSequence('clean:dist',
        ['sass', 'useref', 'images'],
        cb
    )
})

gulp.task('default', function(cb) {
    runSequence(['sass', 'browserSync', 'watch'],
        cb
    )
})
