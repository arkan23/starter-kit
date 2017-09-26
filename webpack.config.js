const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports = [
    {
    entry: ['babel-polyfill', './server.js'],
    output: {
        path: __dirname + '/',
        filename: 'server.bundle.js',
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'es2017', 'stage-1']
            }
        }]
    },
    target: 'node',
    externals: [nodeExternals()]
    //If you want to minify your files uncomment this
    // ,
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false,
    //         },
    //         output: {
    //             comments: false,
    //         },
    //     }),
    // ]
    },
    {
        entry: './views/index.js',
        output: {
            path: __dirname + '/bin',
            filename: 'app.bundle.js',
        },
        module: {
            loaders: [{
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
            {
              test: /\.css$/,
              //loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
              loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use:'css-loader'})
            }

          ],
          /*  rules:[
              {  test: /\.css$/,
                 use: ExtractTextPlugin.extract({fallback:"style-loader",use: "css-loader"})
              }
            ]*/
        },
        plugins: [
              new ExtractTextPlugin({
                filename: "[name].css",
                disable: false,
                allChunks: true
              })
            ]
        //If you want to minify your files uncomment this
        // ,
        // plugins: [
        //     new webpack.optimize.UglifyJsPlugin({
        //         compress: {
        //             warnings: false,
        //         },
        //         output: {
        //             comments: false,
        //         },
        //     }),
        // ]
    }

]
