
const { src, dest , watch, series, parallel } = require('gulp');
// CSS Y SASS
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');

// Imagenes
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

// En sass({ outputStyle: 'compressed' }) para que el css se minifique
function css(done) {
    //compilar sass
    //Pasos: 1 identificar el archivo sass, 2 compilarlo, 3 guardar el css
    src('src/scss/app.scss') //1
        .pipe( sourcemaps.init() ) //1 sourcemap
        .pipe( sass() ) //2
        .pipe( postcss([autoprefixer(), cssnano()]) ) //2
        .pipe( sourcemaps.write('.') ) //2 sourcemap
        .pipe( dest('build/css') ); //3 
        done();
}

function imagenes(done)
{
    src('src/img/**/*')
        .pipe( imagemin({
            optimizationLevel: 3
        }) )
        .pipe( dest('build/img') ); 
    done();
}

function versionWebp(done)
{
    src('src/img/**/*.{jpg,png}')
        .pipe( webp() )
        .pipe( dest('build/img') ); 
    done();
}


function versionAvif(done){
    const opciones = {
        quality: 50,  // 0 - 100
    }
    src('src/img/**/*.{jpg,png}')
        .pipe( avif(opciones) )
        .pipe( dest('build/img') ); 
    done();
}

function dev() {
    // watch revisar si hay cambios en el archivo, si hay cambios ejecutar la función css
    //watch('src/scss/header/_header.scss', css); //(archivo a vigilar, función a ejecutar)
    //watch('src/scss/app.scss', css); //(archivo a vigilar, función a ejecutar)
    watch('src/scss/**/*.scss', css); //(archivo a vigilar, función a ejecutar)
    watch('src/img/**/*', imagenes); //(archivo a vigilar, función a ejecutar)
}

// se llaman solo ejecutando desde la terminal "gulp"
function tareaDefault(done) {
    console.log('Soy la tarea por default');
    done();
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
// Default task
// exports.default = tareaDefault;
// Series -> Se inicia una tarea, cuando termina se inicia la siguiente
exports.default = series(imagenes, versionWebp, versionAvif, css, dev);
// Parallel -> Se inician las tareas al mismo tiempo
// exports.default = parallel(css, dev);