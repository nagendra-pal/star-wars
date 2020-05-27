const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      components: path.resolve(__dirname, "./src/components/"),
    },
  },
  module: {
    rules: [
      //{test: /\.(js)$/, use: 'babel-loader'},
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      //{test: /\.(jpe?g|png|gif|svg)$/, use: 'file-loader'},
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
        exclude: /dist/,
      },
    ],
  },
  mode: "development",
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new ForkTsCheckerWebpackPlugin({ eslint: true }),
  ],
};
