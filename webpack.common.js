const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: "./src/index.js",

    plugins: [
        
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/template.html",
        }),

        new HtmlWebpackPlugin({
            filename: "login.html",
            template: "./src/template.html",
        }),

    ],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
               
            },

            {
                test: /\.html$/,
                use: ["html-loader"]
            },

        ]
    },


}