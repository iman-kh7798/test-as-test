const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base');

const ASSET_PATH = process.env.ASSET_PATH || '';

const config = {
    entry: './src/client/client.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public'),
        publicPath: ASSET_PATH,
    },
    plugins: [
        // This makes it possible for us to safely use env vars on our code
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
        }),
    ],
};

module.exports = merge([baseConfig, config]);
