var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');
var webserver = require('gulp-webserver');

// Task1: browserify（babelify）によるjsxからjsファイルへの変換
gulp.task('browserify', function() {
    browserify('./src/app.jsx', { debug: true })
        .transform(babelify)
        .bundle()
        .on("error", function (err) { console.log("Error : " + err.message); })
        .pipe(fs.createWriteStream("bundle.js"));

});


// Task2: jsxファイル変更時にTask1を実行する
gulp.task('watch', function() {
    gulp.watch('./src/*.jsx', ['browserify'])
});


// Task3: Webローカルサーバを起動し、ファイルが変更されるとリロード自動でリロードする
gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            host: '127.0.0.1',
            livereload: true
        })
    );
});


gulp.task('default', ['browserify', 'watch', 'webserver']);
