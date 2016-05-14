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
    .pipe(gulp.dest('css'))
})

gulp.task('default')
