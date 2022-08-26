const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");


// Директория с
const appPath = path.join(__dirname, ``);

const PATHS = {
    source: path.join(appPath, 'source'),
    build: path.join(appPath, 'build')
};
module.exports = {
    mode: "production",
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
    },
    entry: {
        main: PATHS.source + '/main.js'
    },
    output: {
        clean: true,
        path: PATHS.build,
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                include: PATHS.source,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        }
                    },
                    'sass-loader',
                ]
            },

        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
            }),
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};

