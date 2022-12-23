
const { src, dest , watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// En sass({ outputStyle: 'compressed' }) para que el css se minifique
function css(done) {
    //compilar sass
    //Pasos: 1 identificar el archivo sass, 2 compilarlo, 3 guardar el css
    src('src/scss/app.scss') //1
        .pipe( sass() ) //2
        .pipe( postcss([autoprefixer()]) ) //2
        .pipe( dest('build/css') ); //3

        done();
}

function dev() {
    // watch revisar si hay cambios en el archivo, si hay cambios ejecutar la función css
    //watch('src/scss/header/_header.scss', css); //(archivo a vigilar, función a ejecutar)
    //watch('src/scss/app.scss', css); //(archivo a vigilar, función a ejecutar)
    watch('src/scss/**/*.scss', css); //(archivo a vigilar, función a ejecutar)
}

// se llaman solo ejecutando desde la terminal "gulp"
function tareaDefault(done) {
    console.log('Soy la tarea por default');
    done();
}

exports.css = css;
exports.dev = dev;
// Default task
// exports.default = tareaDefault;
// Series -> Se inicia una tarea, cuando termina se inicia la siguiente
exports.default = series(css, dev);
// Parallel -> Se inician las tareas al mismo tiempo
// exports.default = parallel(css, dev);