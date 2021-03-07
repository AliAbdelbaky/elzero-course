const gulp = require("gulp"),
    sass = require("gulp-sass"),
    notify = require("gulp-notify");
gulp.task("sass", () => {
    return gulp.src("./src/sass/**/*.sass")
        .pipe(sass({
            outputStyle: "compressed"
        })).on('error', sass.logError)
        .pipe(notify("Your Css Is Correct"))
})
gulp.task("watch", () => {
    gulp.watch("./src/sass/**/*.sass", gulp.series("sass"));
})