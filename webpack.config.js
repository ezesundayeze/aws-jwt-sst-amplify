const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        signin: './src/signin.js',
        signup: './src/signup.js',
        confirm: './src/confirm.js',
        protected: './src/protected.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        overlay: true,
        hot: true
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: ['index.html', 'signup.html', 'signin.html', 'confirm.html', 'protected.html']
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};