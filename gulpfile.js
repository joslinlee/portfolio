const gulp = require('gulp');
const pug = require('gulp-pug');

// Compile pug files
gulp.task("pug", async () => {
  return gulp.src("src/pug/*.pug")
  .pipe(pug())
  .pipe(gulp.dest("dist"))
});