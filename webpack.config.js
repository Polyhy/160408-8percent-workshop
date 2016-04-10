module.exports = {
    entry: {
        javascript: "./src/app.react.js"
    },

    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
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
