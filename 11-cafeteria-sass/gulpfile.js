
const { src, dest , watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done) {
    //compilar sass
    //Pasos: 1 identificar el archivo sass, 2 compilarlo, 3 guardar el css
    src('src/scss/app.scss') //1
        .pipe( sass() ) //2
        .pipe( dest('build/css') ); //3

        done();
}

function dev() {
    // watch revisar si hay cambios en el archivo, si hay cambios ejecutar la función css
    watch('src/scss/app.scss', css); //(archivo a vigilar, función a ejecutar)
}

exports.css = css;
exports.dev = dev;