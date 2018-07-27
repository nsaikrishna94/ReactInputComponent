var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require('gulp-concat');
var browserify = require('browserify');
var babelify = require('babelify');
var source =  require('vinyl-source-stream');

gulp.task("default", function () {

    browserify({
        entries: 'example/main.js',
        extensions: ['.js'],
        debug: true
    })
    .transform(babelify)
    .bundle()
    .on('error', err => {
        console.log('Browserify Error' + err);
    })
    .pipe(source('app.min.js'))
    .pipe(gulp.dest('./build'));

    // return gulp.src("src/sample.js")
    // .pipe(concat('app.min.js'))
    // .pipe(babel())
    // .pipe(gulp.dest("example"));
})