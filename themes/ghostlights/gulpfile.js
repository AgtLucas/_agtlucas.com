const gulp = require('gulp')
const lost = require('lost')
const cssnano = require('cssnano')
const mqpacker = require('css-mqpacker')
const scss = require('postcss-scss')
const nested = require('postcss-nested')
const cssnext = require('postcss-cssnext')
const atImport = require('postcss-import')
const postcss = require('gulp-postcss')

gulp.task('css', () => {
  var processors = [
    atImport,
    cssnext({ browsers: ['last 2 versions'] }),
    lost,
    nested,
    mqpacker,
    cssnano({ autoprefixer: false })
  ]
  return gulp.src('source/css/main.css')
    .pipe(postcss(processors, { syntax: scss }))
    .pipe(gulp.dest('source/build/css'))
})

gulp.task('default', ['css'])
