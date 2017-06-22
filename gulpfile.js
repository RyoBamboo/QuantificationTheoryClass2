var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');

gulp.task('browserify', function() {
    browserify('./app.jsx', { debug: true })
        .transform(babelify)
        .bundle()
        .on("error", function (err) { console.log("Error : " + err.message); })
        .pipe(fs.createWriteStream("bundle.js"));

});

gulp.task('default', ['browserify']);
