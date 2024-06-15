const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("scssstyles/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(dest("css"));
}

// So initially I used "index.scss" and change it to *.scss. this is because i might have more than one scss file and i want gulp to be able to compile it.
function watchTask() {
  watch(["scssstyles/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
