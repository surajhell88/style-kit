// grab our gulp packages
var 	gulp  = require('gulp'),
    	gutil = require('gulp-util'),
    	liveServer = require('live-server'),
    	less = require('gulp-less'),
    	params = {
    		port: 8282,
    		watch: ['index.html','less/custom.css']
    	};

// create a default task and just log a message
gulp.task('default', ['compile-less', 'start-live-server', 'watch']);


gulp.task('start-live-server', function () {
	liveServer.start(params);
});

gulp.task('compile-less', function () {
	return gulp.src('./less/custom.less')
	.pipe(less({}))
	.pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
	gulp.watch('less/**/*.less', ['compile-less']);
});