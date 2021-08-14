//- For Gulp
var gulp = require("gulp");

//- For Compile Pug To HTML
var pug = require("gulp-pug");

//- For Minify CSS
var cssMinify = require("gulp-clean-css");

//- For autoPrefixer CSS Files
var autoPrefixer = require("gulp-autoprefixer");

//- For Minify Javascript
var uglify = require("gulp-uglify");

//- For Concat Files
var concat = require("gulp-concat");

//- Tasks For HTML
gulp.task("html", function () {
	return gulp
		.src("pug/pages/*.pug")
		.pipe(pug({ pretty: true }))
		.pipe(gulp.dest("dist"));
});

//- Tasks For CSS
gulp.task("css", function () {
	return gulp
		.src([
			"css/bootstrap.css",
			"css/font-awesome.css",
			"css/swiper-bundle.css",
			"css/main.css",
		])
		.pipe(autoPrefixer("last 5 version"))
		.pipe(concat("all.min.css"))
		.pipe(cssMinify())
		.pipe(gulp.dest("dist/css"));
});

//- Tasks For JS
gulp.task("js", function () {
	return gulp
		.src([
			"js/jquery-3.5.1.js",
			"js/bootstrap.bundle.js",
			"js/swiper-bundle.js",
			"js/main.js",
		])
		.pipe(concat("all.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"));
});

// Tasks For Watch
gulp.task("watch", function () {
	// For Watch Pug
	gulp.watch("pug/**/*.pug", ["html"]);

	// For Watch css
	gulp.watch("css/*.css", ["css"]);

	// For Watch JS
	gulp.watch("js/*.js", ["js"]);
});

gulp.task("default", ["watch"]);
