// const { model } = require('/server/models/usuario');

const { VueLoaderPlugin } = require('vue-loader');
const { LoaderOptionsPlugin } = require('webpack');

module.exports = {
    entry: '/app/index.js', //archivo de entrada a traducir
    output: { //cuando lo convierta que salga aquí en public
        path: __dirname + '/public',
        filename: 'bundle.js' //despues que lo convierta y lo tire en el public, va a guardar en este fichero
    },
    module: {
        rules: [{
                test: /\.js$/, //tiene que testear o leer todos los archivos que terminen en .js
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader' //traducir codigo moderno
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }

        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]
}