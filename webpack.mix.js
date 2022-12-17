const mix = require('laravel-mix');
require("laravel-mix-tailwind");
const fs = require('fs');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.alias({
    '@': 'src'
});

if (mix.inProduction()) {
    mix.react().js("src/app.jsx", "public/js/app.es6.js");
    mix.react().js("src/quiz.jsx", "public/js/quiz.es6.js")
    mix.react().babel(['./public/js/app.es6.js'], './public/js/app.js');
    mix.react().babel(['./public/js/quiz.es6.js'], './public/js/quiz.js')
    mix.after(stats => {
        var contents = fs.readFileSync('public/js/app.js').toString().replace('import _regeneratorRuntime from"@babel/runtime/regenerator"', '');
        fs.writeFile('public/js/app.js', contents, function (err) {
            if (err) throw err;
            console.log('It\'s saved!');
        });
        contents = fs.readFileSync('public/js/quiz.js').toString().replace('import _regeneratorRuntime from"@babel/runtime/regenerator"', '');
        fs.writeFile('public/js/quiz.js', contents, function (err) {
            if (err) throw err;
            console.log('It\'s saved!');
        });
    });
    mix.tailwind("tailwind.config.js").sass("./scss/app.scss", "./public/css");
} else {
    mix.react().js("src/app.jsx", "public/js");
    mix.react().js("src/quiz.jsx", "public/js");
    mix.tailwind("tailwind.config.js").sass("scss/app.scss", "public/css");
}


///import _regeneratorRuntime from"@babel/runtime/regenerator"