var glob_entries = require('webpack-glob-entries')

module.exports = {
    watch: true,

    entry: glob_entries("./src/*.react.js"),

    output: {
        path: __dirname + "/dist-webpack",
        filename: "[name].js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["react", "es2015"],
                    cacheDirectory: true
                }
            }
        ]
    }
};
