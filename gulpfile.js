const gulp = require('gulp')
const cssnano = require('cssnano')
const mqpacker = require('css-mqpacker')
const scss = require('postcss-scss')
const nested = require('postcss-nested')
const cssnext = require('postcss-cssnext')
const atImport = require('postcss-import')
const focus = require('postcss-focus')
const postcss = require('gulp-postcss')

gulp.task('css', () => {
  var processors = [
    atImport,
    cssnext({ browsers: ['last 2 versions'] }),
    focus,
    nested,
    mqpacker,
    cssnano({ autoprefixer: false })
  ]

  return gulp.src('src/css/main.css')
    .pipe(postcss(processors, { syntax: scss }))
    .pipe(gulp.dest('_includes/css'))
})

gulp.task('watch', () => gulp.watch('src/css/**/*.css', ['css']))

gulp.task('default', ['css', 'watch'])
