const gulp = require('gulp');
const imagemin = require('gulp-imageMin');
const uglify = require('gulp-uglify');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

/*
	-- TOP LEVEL FUNCTIONS --
	gulp.task - Define tasks
	gulp.src - Point to files to use
	gulp.dest - Points to folder to output
	gulp.watch - Watch files and folders for changes
 */

 // Logs Message
 gulp.task('message', function(){
 	return console.log('Gulp is running...');
 });

// Optimize Images
gulp.task('imageMin', () =>
	gulp.src(['src/img/*', 'src/img/*/*', 'src/img/*/*/*'])
		.pipe(imagemin())
		.pipe(gulp.dest('assets/img'))
);

// Minify Scripts
gulp.task('scripts', () => {
	gulp.src(['src/js/*.js', '!src/js/*.min.js', 'src/js/*/*.js', '!src/js/*/*.min.js', '!src/js/app.js'])
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('assets/js'));
	gulp.src(['src/js/*.min.js', 'src/js/*/*.min.js', 'src/js/app.js'])
		.pipe(gulp.dest('assets/js'));
});

// Minify & Rename CSS
gulp.task('styles', () => {
	gulp.src(['src/css/*.css', '!src/css/*.min.css', '!src/css/app.css'])
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('assets/css'));
	gulp.src(['src/css/*.min.css', 'src/css/app.css'])
		.pipe(gulp.dest('assets/css'))
});

// Move Fonts
gulp.task('fonts', () => {
	gulp.src(['src/fonts/*', 'src/fonts/*/*'])
		.pipe(gulp.dest('assets/fonts'))
});

// Default & Watch
gulp.task('watch', () => {
	gulp.watch('src/img/*', ['imageMin']);
	gulp.watch('src/css/*.css', ['styles']);
	gulp.watch('src/js/*.js', ['scripts']);
	gulp.watch('src/fonts/*', ['fonts']);
});

gulp.task('default', ['message', 'imageMin', 'scripts', 'styles', 'fonts', 'watch']);
