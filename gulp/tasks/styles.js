var gulp=require('gulp'),
gulp_postcss=require('gulp-postcss'),
gulp_autoprefixer=require('autoprefixer'),
gulp_postcss_simple_vars=require('postcss-simple-vars'),
gulp_postcss_nested=require('postcss-nested'),
gulp_postcss_import=require('postcss-import'),
mixins=require('postcss-mixins');


gulp.task('styles', function(){
	gulp.src('./app/assets/styles/styles.css')
	.pipe(gulp_postcss([gulp_postcss_import, mixins, gulp_autoprefixer, gulp_postcss_simple_vars, gulp_postcss_nested]))
	.on('error', function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles'));
});