require('./config/gulp/images');
require('./config/gulp/uswds');
// require('./config/gulp/scripts');
require('./config/gulp/fontawesome');
var gulp = require("gulp");



// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// LOCATIONS

// All locations are relative to the project root
// Don't use a trailing `/` for path names, use `path/to/dir`

// USWDS source directory
const USWDS_SRC         = 'node_modules/uswds/dist';

// Project Sass source directory
const PROJECT_SASS_SRC  = './themes/digital.gov/src/uswds';

// Project JS source directory
const PROJECT_JS_SRC  = './themes/digital.gov/src/js';


// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// gulp.task('watch', gulp.series('build-sass', function (){
  // gulp.watch(`${PROJECT_SASS_SRC}/**/*.scss`, gulp.series('build-sass'))
  // gulp.watch(`${PROJECT_SASS_SRC}/scss/*.scss`, gulp.series('build-sass'))
  // gulp.watch(`${PROJECT_JS_SRC}/*.js`, gulp.series('compile'))
  // gulp.watch(`${USWDS_SRC}/scss/*.scss`, gulp.series('copy-uswds-assets','build-sass'));
// }));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Set watch as default task
// gulp.task('default', gulp.series('watch', 'copy-uswds-assets', 'copy-uswds-fonts', 'build-sass', 'fontawesome', 'compile'));
// gulp.task('default', gulp.series('watch', 'compile','build-sass'));


gulp.task('watch-sass', function () {
  gulp.watch(`${PROJECT_SASS_SRC}/**/*.scss`, gulp.series('build-sass'));
});

gulp.task('watch', gulp.series('build-sass', 'watch-sass'));

gulp.task('default', gulp.series('watch'));
