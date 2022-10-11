const gulp = require("gulp");
const nunjuckRender = require("gulp-nunjucks-render")
const browserSync = require("browser-sync").create();

gulp.task("html", function () {
    return gulp.src('./views/*.njk')
    .pipe(nunjuckRender({
        path: ['./views']
    }))
    .pipe(gulp.dest('./'))
});

gulp.task("watch", function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
    gulp.watch('./*.html').on("change", browserSync.reload);
    gulp.watch('./views/**/*.njk', gulp.series("html"));
})
