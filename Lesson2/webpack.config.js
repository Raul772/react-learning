module.exports = {

// Indicando que o index.hmtl está na raiz.

    devServer: {
        static: './'
    },

    module: {

        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]

    }

};