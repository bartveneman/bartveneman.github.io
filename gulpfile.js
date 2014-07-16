var gulp = require("gulp"),
	sass = require("gulp-ruby-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	minify = require("gulp-minify-css"),
	size = require("gulp-size"),
	cmq = require('gulp-combine-media-queries'),
	lr = require("tiny-lr"),
	server = lr();

/**
 * 1. Compile SASS into CSS
 * 2. Prefix all the things
 * 3. Report filesize
 * 4. Combine media queries
 * 5. Minify CSS
 * 6. Report optimized filesize
 * 7. Report gzipped filesize
 * 8. Save as...
 */
gulp.task("sass", function () {
	gulp.src("_assets/scss/master.scss")
		.pipe(sass({ // 1
			style: "compressed",
			noCache: true,
			precision: 2
		}))
		.pipe(autoprefixer('last 2 versions', 'ie 9', 'android 4', 'android 2', 'ios 6')) //2
		.pipe(size({ // 3
			title: "Uncompressed"
		}))
		.pipe(cmq({ // 4
			log: true
		}))
		.pipe(minify({ // 5
			keepSpecialComments: 0,
            keepBreaks: false
		}))
		.pipe(size({ // 6
			title: "Compressed"
		}))
		.pipe(size({ // 7
			title: "gzipped",
			gzip: true
		}))
		.pipe(gulp.dest("_includes")); // 8
});

/**
 * Watch task: to run tasks after files have changed
 */
gulp.task("watch", ["sass"], function () {
	server.listen(35729, function (err) {
        if (err) {
            return console.log(err);
        }

        gulp.watch("_assets/scss/**/*.scss", ["sass"]);
    });
});
