var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'linked-sliders.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    externals: {
      react: 'react',
      'react-dom': 'ReactDOM'
    }
}
