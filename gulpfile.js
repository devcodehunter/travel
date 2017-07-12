var gulp=require('gulp'),
gulp_watch=require('gulp-watch'),
gulp_postcss=require('gulp-postcss'),
gulp_autoprefixer=require('autoprefixer'),
gulp_postcss_simple_vars=require('postcss-simple-vars'),
gulp_postcss_nested=require('postcss-nested');


gulp.task("default", function(){
	console.log("Everything is ok");
});

gulp.task('html', function(){
	console.log("Html Found.");
});

gulp.task('styles', function(){
	gulp.src('./app/assets/styles/styles.css')
	.pipe(gulp_postcss([gulp_autoprefixer, gulp_postcss_simple_vars, gulp_postcss_nested]))
	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
	gulp_watch('./app/index.html', function(){
		gulp.start('html');
	});

	gulp_watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
});