var gulp  = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var autoPrefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
//var sourcemaps = require('gulp-sourcemaps');

//FilePaths
var DIST_PATH='public/dist';
var SCRIPTS_PATH='public/scripts/**/*.js';
var CSS_PATH = 'public/css/**/*.css';

//Handlebars plugins
var handlebars = require('gulp-handlebars');
var handlebarsLib = require('handlebars');
var declare = require('gulp-declare');
var wrap = require('gulp-wrap');

//Image compression


//Styles
gulp.task('styles',function(){
	console.log("Starting style tasks");
	return gulp.src(CSS_PATH)
		//.pipe(sourcemaps.init())
		.pipe(autoPrefixer())
		.pipe(concat('styles.css'))
		.pipe(minifyCss())
		//.pipe(sourcemaps.write())
		.pipe(gulp.dest(DIST_PATH))
		.pipe(livereload());
});

gulp.task('scripts',function(){
	console.log("Starting scripts tasks");
	return gulp.src('public/scripts/*.js')
		.pipe(babel({
			presets:['es2015']
		}))
		.pipe(uglify())
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(DIST_PATH))
		.pipe(livereload());
});

gulp.task('images',function(){ 
	console.log("Starting images tasks");
});

gulp.task('default',function(){
	console.log("Default task started");
});

gulp.task('watch',function(){
	console.log("Running the watch task...");
	require('./server.js');
	livereload.listen();
	gulp.watch(SCRIPTS_PATH,['scripts']);
	gulp.watch(CSS_PATH,['styles']);
});
