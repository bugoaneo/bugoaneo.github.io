const gulp = require('gulp');
// const gulpPug = require('gulp-pug');
const gulpPlumber = require('gulp-plumber');
const gulpSass = require('gulp-sass');
const gulpAutoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const svgSprite = require('gulp-svg-sprite');
const replace = require('gulp-replace');
const gulpIf = require('gulp-if');
const browserSync = require('browser-sync').create();

let isBuild = false

// function pug2html() {
//   return gulp.src('parts/pug/pages/*.pug')
//     .pipe(gulpPlumber())
//     .pipe(gulpPug({
//       pretty: true
//     }))
//     .pipe(gulpPlumber.stop())
//     .pipe(gulp.dest('ready'));
// }
function sass2css() {
  return gulp.src('parts/styles/styles.scss')
    .pipe(gulpPlumber())
    .pipe(gulpSass())
    .pipe(gulpAutoprefixer())
    .pipe(cleanCSS({
      level: 2,
      format: 'beautify'
    }))

    .pipe(gulpPlumber.stop())
    .pipe(browserSync.stream())

    .pipe(gulp.dest('ready/css'));
}

function imageMin() {
  return gulp.src("parts/img/**/*.{jpg,png,svg}", "!parts/img/sprite/**/*")
    .pipe(gulpIf(isBuild, imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: false },
          { removeDimensions: true },
          { convertStyleToAttrs: true }
        ]
      })
    ]))
    )
    .pipe(gulp.dest('ready/img'))
}

function svgSpriteBuild() {
  return gulp.src("parts/img/sprite/*.svg")
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: "sprite.svg",
        }
      }
    }))
    .pipe(gulp.dest("ready/img"));
};

function buildMode(redyMode) {
  return cb => {
    isBuild = redyMode;
    cb()
  }
}

function watch() {
  browserSync.init({
    server: {
      baseDir: 'ready'
    }
  });
  // gulp.watch("parts/pug/**/*.pug", pug2html);
  gulp.watch("parts/styles/**/*.scss", sass2css);
  gulp.watch("[img/**/*.{jpg,png,svg}, !img/sprite/**/*]", imageMin);
  gulp.watch("img/sprite/**/*", svgSpriteBuild);
  gulp.watch("ready/*.html").on('change', browserSync.reload);
}

const dev = gulp.parallel(sass2css, imageMin, svgSpriteBuild)

exports.default = gulp.series(dev, watch);
exports.build = gulp.series(buildMode(true), dev);
