var gulp=require('gulp');
var sass=require('gulp-sass');
var rename=require('gulp-rename');
var sourcemaps=require('gulp-sourcemaps');
var autoprefixer=require('gulp-autoprefixer');
var ftp = require('gulp-ftp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();
function sass_(){
  return gulp.src('src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errorLogToConsole:true,
      outputStyle:'compressed'
  }))
    .on('error',console.error.bind(console))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
        }))
    .pipe(rename({suffix:'.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}
function watch_(){
    gulp.watch('src/scss/**/*.scss', sass_);
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/**/*.php').on('change', browserSync.reload);
    gulp.watch('src/**/*.js').on('change', browserSync.reload);
}
function browserSync_(){
    browserSync.init({
       server:{
           baseDir: 'src/'
       },
        port: 3000
    });
}
gulp.task('ftp_', function () {
    return gulp.src('src/**')
        .pipe(ftp({
            host: '136.243.147.150',
            user: 'burya128',
            pass: 'cXtR81eu5g',
            remotePath: 'www/buryattvoydrug.ru'
        }))
        .pipe(gutil.noop());
});
gulp.task('default', gulp.parallel(browserSync_, watch_));