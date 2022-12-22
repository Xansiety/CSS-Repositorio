
const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done) {
    //compilar sass
    //Pasos: 1 identificar el archivo sass, 2 compilarlo, 3 guardar el css
    src('src/scss/app.scss') //1
        .pipe( sass() ) //2
        .pipe( dest('build/css') ); //3

        done();
}

exports.css = css;