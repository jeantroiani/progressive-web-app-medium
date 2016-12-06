const config = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
     module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    }
};

module.exports = config;