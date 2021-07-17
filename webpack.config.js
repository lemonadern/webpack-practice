const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/app.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
    },
    resolve: {
        modules: ['node_modules'],
        extensions:[".js", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: [/\.ts$/, /\.tsx$/],
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                          presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
                        },
                    },
                    'ts-loader',
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
    },
}