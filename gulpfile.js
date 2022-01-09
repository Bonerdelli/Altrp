let gulp = require('gulp');
let zip = require('gulp-zip');
let notify = require("gulp-notify");
let gulpCopy = require("gulp-copy");
let path = require('path');
let fs = require('fs');

const excludes = [
  './**/*',
  './.htaccess',
  './**/.htaccess',
  '!./app/Http/Controllers/AltrpControllers/**',
  '!./app/Http/Requests/AltrpRequests/**',
  '!./app/Providers/AltrpProviders/AppServiceProvider.php',
  '!./app/AltrpPlugins/**',
  '!./app/Plugins/plugins.json',
  '!./bootstrap/cache/**',
  '!./Modules/**',
  '!./public/storage',
  '!./public/altrp-plugins',
  '!./public/favicon.ico',
  '!./out/**',
  '!./app/AltrpModels/**',
  '!./altrpnjs/**',
  '!./public/storage/**',
  '!./database/altrp_migrations/**',
  '!./resources/modules/**',
  '!./resources/sass/**',
  '!./resources/out/**',
  '!./.git/**',
  '!./.idea/**',
  '!./node_modules/**',
  '!./routes/AltrpRoutes.php',
  '!./routes/AltrpApiRoutes.php',
  '!./routes/AltrpCustomRoutes.php',
  '!./routes/page_routes.php',
  '!./storage/app/public/**',
  '!./storage/installed',
  '!./storage/logs/**',
  '!./storage/tmp/**',
  '!./storage/framework/cache/**',
  '!./storage/framework/sessions/**',
  '!./tests/**',
  '!./gulpfile.js',
  '!./webpack.admin.common.js',
  '!./webpack.admin.dev.js',
  '!./webpack.admin.prod.js',
  '!./webpack.editor.common.js',
  '!./webpack.editor.dev.js',
  '!./webpack.editor.prod.js',
  '!./webpack.front.common.js',
  '!./webpack.front.dev.js',
  '!./webpack.front.prod.js',
  '!./webpack.reports.common.js',
  '!./webpack.reports.dev.js',
  '!./webpack.reports.prod.js',
  '!./webpack.mix.js',
  '!./package-lock.json',
  '!./.env',
  '!./.babelrc',
  '!./.env',
  '!./.gitattributes',
  '!./.gitignore',
  '!./.editorconfig',
  '!./.styleci.yml',
  '!./.yarn.lock',
  '!./yarn.lock',
  '!./.composer.lock',
  '!./_ide_helper.php',
  '!./.phpstorm.meta.php',
  '!./s.sql',
  '!./WriteChunksToFrontBlade.js',
];

/**
 *
 * @param filename
 * @returns {*}
 */
function altrpZip(filename = 'altrp.zip') {
  return gulp.src(excludes).pipe(zip(filename))
      .pipe(gulp.dest('../'))
      .pipe(notify({
        message:'Архив готов',
        sound: true,
        title: 'Altrp'
      }));
}

async  function altrpJSZip(){
  let filename = 'altrp-js.zip'
  await gulp.src([
    './public/**/*',
    '!./public/storage/**',
    '!./public/altrp-plugins/**',
    '!./public/.htaccess',
    '!./public/*.php',
    '!./public/web.config',
    '!./public/mix-manifest.json',
  ]).pipe(gulpCopy('./altrpnjs/build/', {}))
    .pipe(gulp.dest('./'))
  return gulp.src([
    './altrpnjs/build/**/*'
  ]).pipe(zip(filename))
    .pipe(gulp.dest('../'))
    .pipe(notify({
      message:'Архив готов',
      sound: true,
      title: 'Altrp JS'
    }))
}
async function  clearJSBuild(){
  const _p = __dirname + `${path.sep}altrpnjs${path.sep}build`
  if(fs.existsSync(_p)){
    return fs.unlinkSync(_p)
  }
  return 0
}
exports.pack = ()=>{return altrpZip()};
exports.packJS = ()=>{return altrpJSZip()};
exports.packTest = ()=>{return altrpZip('altrp-test.zip')};
// exports.clearJSBuild = clearJSBuild
