// 1. add package.json to your project by npm init -y
// 2. then install webpack and webpack-cli by npm i -D(as dev dependency) webpack webpack-cli
// 3. in package.json, add "build": "webpack --mode production" to scripts
// 4. create webpack.config.js
// 5. run npm run build
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    // entery: defenition of entry file
    entry: {
        // __dirname: take to the current directory
        bundle: path.resolve(__dirname, 'src', 'index.js')
    },
    output: {
        // output path : defeniotion of output file path
        path: path.resolve(__dirname, 'dist'),

        // output file name : defenition of output file name, when you use [name] it will take the name of the entry file
        // it can be like filename: 'bundle.js' and entery ca be like entery: path.resolve(__dirname, 'src', 'index.js')
        // for make output file with hash, you can use [hash] or [contenthash]
        filename: '[name][contenthash].js',

        // clean output folder before build
        clean: true,
        assetModuleFilename: "assets/[hash][ext]"
    },
    // for useing loaders you need to install them by npm i -D sass style-loader css-loader sass-loader
    module: {
        rules: [

            // sass loader
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            // babel loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },

            // image loader
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    // for add html plugin you need to install it by npm i -D html-webpack-plugin
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Demo',
            filename: "index.html",
            template: "src/template.html"
        })
    ],
    // devtool for debugging
    devtool: 'source-map',
    // for dev server at first we add "dev": "webpack serve --mode development" to scripts in package.json

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        // Enable gzip compression for everything served
        compress: true,
        // When using the HTML5 History API, the index.html page will likely have to be served in place of any 404 responses.
        historyApiFallback: true
    }
}