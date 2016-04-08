var gulp = require('gulp');

var sass = require('gulp-ruby-sass');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var rename = require('gulp-rename');

var path = {
    css: {
        src_scss: 'src/scss/*.scss',
        src_css: 'src/css',
        dist: 'dist/css'
    }
};

//scss 编译
gulp.task('css', function(){
    return sass(path.css.src_scss, { style: 'expanded',noCache: true, sourcemap: false})
        //.pipe(gulp.dest(path.css.sassDest))
        .pipe(rename({ suffix: '.min' }))
        //.pipe(minifycss())
        //.pipe(concat(''))
        .pipe(gulp.dest(path.css.dist))
        .pipe(notify({ message: 'Styles task complete' }));
});



//静态服务器
gulp.task('browser-sync', function() {
    browserSync({
        files:'**',
        server: {
            baseDir: './../'
        }
    })
});

gulp.task('default', ['browser-sync']);

gulp.task('watch', function() {
    gulp.watch(path.css.src_scss, ['css'])
});



