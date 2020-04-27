const autoPrefixer = require('autoprefixer')
const gulp = require('gulp')
const gutil = require('gulp-util')
const postCss = require('gulp-postcss')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const sassGlob = require('gulp-sass-glob')

const { version } = require('./package.json')

const regularOutput = 'yogurt-' + version + '_solidcore.css'
const minifiedOuput = 'yogurt-' + version + '_solidcore.min.css'


// ...minify/preprocess scss

// outputStyle: `expanded` for debugging,
// `compressed` for production.

const srcScssPath = 'src/yogurt.scss'
const distCssPath = 'dist'
gulp.task('sass-min', () => {
  return gulp.src(srcScssPath)
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
    .pipe(postCss([autoPrefixer()]))
    .pipe(rename(minifiedOuput))
    // .pipe(rename('yogurt.min.css'))
    .pipe(gulp.dest(distCssPath))
})


gulp.task('sass-raw', () => {
  return gulp.src(srcScssPath)
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'expanded' })
      .on('error', sass.logError))
    .pipe(rename(regularOutput))
    // .pipe(rename('yogurt.css'))
    .pipe(gulp.dest(distCssPath))
})


// ...watch
const watchSrcScssPath = 'src/**/**/**/**/*.scss'
gulp.task('watch', gulp.series([

    'sass-raw',
    'sass-min',

  ], () => {

    gulp.watch(watchSrcScssPath,
      gulp.series([
        'sass-raw',
        'sass-min'
      ])
    )

  })
)
