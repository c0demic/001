/**
 * Created by lixin on 5/7/17.
 */
module.exports = {
    entry:'./src/main/webapp/js/test001.js',
    output: {
        path: '/playground/MyWeb/IDEA/gradle001/src/main/webapp/jswebpack',
        filename: 'test001.bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                loader: 'babel-loader',
                options:{
                    presets: ["es2015","react"]
                }
            }
        ]
    },
};