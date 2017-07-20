var gulp=require('gulp'),
gulp_watch=require('gulp-watch'),
browserSync=require('browser-sync').create();

gulp.task('html', function(){
	browserSync.reload();
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