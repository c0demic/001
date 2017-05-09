/**
 * Created by lixin on 5/7/17.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/main/webapp/js/test001.js',
    output: {
        path: '/playground/MyWeb/IDEA/gradle001/src/main/webapp/jswebpack',
        filename: 'test001.bundle.js',
        publicPath: './jswebpack/'
    },

    module: {
        loaders: [
            {
                test: [/\.jsx?$/],
                exclude: /node_modules/,
                /*
                 loader: 'babel-loader',
                 query: {
                 stage: 0,
                 cacheDirectory: true,
                 plugins: [
                 'transform-decorators-legacy',
                 'transform-class-properties'
                 ]
                 },

                 options: {
                 presets: ["es2017", "react"]
                 }
                 */
                use: [
                    {
                        loader: 'babel-loader',
                        /*
                        query: {
                            plugins: [
                                "transform-decorators-legacy",
                                "transform-class-properties"
                            ]
                        },
                        */
                        options: {
                            presets: ["es2017", 'stage-0','react'],
                            plugins: [
                                "transform-es2015-classes",
                                "transform-decorators-legacy",
                                "transform-class-properties"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                /*
                 loader: 'file-loader?name=[name].[ext]',
                 //                include: '/playground/MyWeb/IDEA/gradle001/src/main/webapp/js/ui/material',
                 */
                use: [
                    {
                        loader: 'file-loader?name=[name].[ext]'
                    }
                ]

            }
        ],

    },
    /*
     resolve:{
     root: [
     path.resolve('./src/main/webapp/js')
     ]
     }
     */
}
;