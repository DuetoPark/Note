import gulp from "gulp";
import del from "delete";
import ws from 'gulp-webserver';
import minify from 'minify';
import pug from 'gulp-pug';
import autoprefixer from "gulp-autoprefixer";
import miniCSS from "gulp-csso";
import gimage from "gulp-image";
import bro from "gulp-bro";
import babelify from "babelify";

const routes = {
  pug: {
    watch: "src/**/*.pug",
    src: "src/**/*.pug",
    dest: "build"
  },
  css: {
    watch: "src/css/**/*.css",
    src: "src/css/**/*.css",
    dest: "build/css"
  },
  img: {
    watch: "src/assets/images/**/*",
    src: "src/assets/images/**/*",
    dest: "build/assets/images"
  },
  js: {
    watch: "src/assets/**/*.js",
    src: "src/assets/app/*.js",
    dest: "build/assets/app"
  }
};

const clean = () => del(["build/"]);

const webserver = () => 
    gulp
      .src("build")
      .pipe(ws({livereload: true, open: true}));

const html = () =>
  gulp
    .src("src/pages/**/*.html")
    .pipe(gulp.dest("build/pages"));

const gpug = () =>
  gulp
    .src(routes.pug.src)
    .pipe(pug())
    .pipe(gulp.dest(routes.pug.dest));

const styles = () =>
  gulp
    .src(routes.css.src)
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(miniCSS())
    .pipe(gulp.dest(routes.css.dest));

const img = () =>
  gulp
    .src(routes.img.src)
    .pipe(gimage())
    .pipe(gulp.dest(routes.img.dest));
    
const data = () =>
  gulp
    .src("src/assets/data.js")
    .pipe(
      bro({
        transform: [
          babelify.configure({ presets: ['@babel/preset-env'] }),
          [ 'uglifyify', { global: true } ]
        ]
      })
    )
    .pipe(gulp.dest("build/assets"));

const js = () =>
  gulp
    .src(routes.js.src)
    .pipe(
      bro({
        transform: [
          babelify.configure({ presets: ['@babel/preset-env'] }),
          [ 'uglifyify', { global: true } ]
        ]
      })
    )
    .pipe(gulp.dest(routes.js.dest));

const watch = () => {
  gulp.watch(routes.img.watch, img);
  gulp.watch("src/pages/**/*.html", html);
  gulp.watch(routes.pug.watch, gpug);
  gulp.watch(routes.css.watch, styles);
  gulp.watch(routes.js.watch, js);
}

const prepare = gulp.series([clean, img]);
const assets = gulp.series([html, gpug, styles, data, js]);
const live = gulp.series([webserver, watch]);

export const build = gulp.series([prepare, assets]);
export const dev = gulp.series([build, live]);