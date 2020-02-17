//npm init
//npm install gulp --save-dev
//npm install browser-sync --save-dev
//npm install gulp-sass --save-dev
//npm install gulp-rename --save-dev
//npm i gulp-sourcemaps
//npm i gulp-autoprefixer
//npm install gulp-tinypng-compress
var gulp=require('gulp');
var sass=require('gulp-sass');
var rename=require('gulp-rename');
var sourcemaps=require('gulp-sourcemaps');
var autoprefixer=require('gulp-autoprefixer');
var tinypng = require('gulp-tinypng-compress');
var browserSync = require('browser-sync').create();
function sass_(){
  return gulp.src('app/scss/style.scss')
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
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
}
function browserReload (){
    browserSync.reload();
}
function watch_(){
    gulp.watch('app/scss/**/*.scss', sass_);
    gulp.watch('app/*.html', browserReload);
    gulp.watch('app/**/*.php', browserReload);
    gulp.watch('app/**/*.js', browserReload);
}
function browserSync_(){
    browserSync.init({
       server:{
           baseDir: 'app/'
       },
        port: 3000
    });
}
gulp.task('default', gulp.parallel(browserSync_, watch_));
gulp.task('tinypng', function (done) {
    gulp.src('app/images/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'Nn7kY1VBppp1CwmKXKP8cXyhtbLKqHxC'
        }))
        .pipe(gulp.dest('app/img'));
    done();
});
