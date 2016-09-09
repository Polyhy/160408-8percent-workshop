var glob_entries = require('webpack-glob-entries')

module.exports = {
    module: {
        loaders: [
            {
                // jsx 파일 처리를 위해 필요
                test: /\.react.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["react"],
                    cacheDirectory: true
                }
            }
        ]
    }
};
