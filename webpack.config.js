var webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path:__dirname + "./public/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline : true,
        contentBase : './public',
        port: 3000
    },
    module: {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets : ['env', 'react', 'stage-0']  
                }
            },
            {
                test : /\.css$/,
                loader : 'style-loader!css-loader!autoprefixer-loader'
            }
        ]
    }
}
