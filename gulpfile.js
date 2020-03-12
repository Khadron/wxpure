// eslint-disable-next-line no-unused-vars
const { watch, src, dest, series, task, parallel } = require('gulp')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')
const imagemin = require('gulp-imagemin')
const cache = require('gulp-cache') // 使用缓存
const replace = require('gulp-replace')

const srcDir = './src'

function css() {
  return (
    src([`${srcDir}/**/*.css`, `!${srcDir}/**/_*.css`])
      .pipe(postcss().on('error', function(err) {
        console.error(err)
        this.emit('end') // 防止中断
      }))
      // 去掉编译出来的 :root{}
      .pipe(replace(/:root\s\{[^}]*\}?\s*/, ''))
      .pipe(rename(path => {
        path.extname = '.wxss'
      }))
      .pipe(dest(file => {
        return file.base // 原目录
      }))
  )
}

function img() {
  return src(`${srcDir}/**/*.{png,jpe?g,gif,svg}`)
    .pipe(cache(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeDimensions: true } // 如果有 viewbox 则不需要 width 和 height
        ]
      })
    ])))
    .pipe(dest(file => {
      return file.base // 压缩到原目录
    }))
}

function cleanCache(done) {
  return cache.clearAll(done)
}

function watchCSS() {
  watch(`${srcDir}/**/*.css`, css)
}

exports.watchCSS = watchCSS
exports.css = css
exports.img = img
exports.dev = series(css, watchCSS)
exports.default = css
exports.cleanCache = cleanCache
