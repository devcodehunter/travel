var gulp=require('gulp'),
gulp_watch=require('gulp-watch'),
gulp_postcss=require('gulp-postcss'),
gulp_autoprefixer=require('autoprefixer'),
gulp_postcss_simple_vars=require('postcss-simple-vars'),
gulp_postcss_nested=require('postcss-nested'),
gulp_postcss_import=require('postcss-import'),
mixins=require('postcss-mixins');
browserSync=require('browser-sync').create();


gulp.task("default", function(){
	console.log("Everything is ok");
});

gulp.task('html', function(){
	browserSync.reload();
});

gulp.task('styles', function(){
	gulp.src('./app/assets/styles/styles.css')
	.pipe(gulp_postcss([gulp_postcss_import, mixins, gulp_autoprefixer, gulp_postcss_simple_vars, gulp_postcss_nested]))
	.on('error', function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles'));
});



gulp.task('watch', function(){

	browserSync.init({
		notify:false,
		server:{
			baseDir: "app"
		}
	});

	gulp_watch('./app/index.html', function(){
		gulp.start('html');
	});

	gulp_watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});
});

gulp.task('cssInject',['styles'], function(){
	gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});