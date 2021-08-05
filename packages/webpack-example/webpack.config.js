const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DevToolsPlugin = require("webpack-devtool-plugin");
const NyanProgressPlugin = require('nyan-progress-webpack-plugin')  
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const {  } = require('vite')

const resolve = (src) => path.resolve(__dirname, src);

module.exports = {
  stats: 'errors-only',
  entry: resolve("./src/index.jsx"),
  output: {
    filename: "[name].js",
    path: resolve("dist"),
  },
  devServer:DevToolsPlugin.devServerConfig(),
  mode:'development',
  module: {
    rules: [
      {
        test: /.jsx$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new FriendlyErrorsPlugin(),
    new NyanProgressPlugin(),
    new HtmlWebpackPlugin({
      template: resolve("../dev-platform/index.html"),
    }),
    new DevToolsPlugin({
      proxyArr: [
        { value: "http://a:2000" },
        { value: "http://b:2000" },
        { value: "http://c:2000" },
      ],
    }),
  ],
};
