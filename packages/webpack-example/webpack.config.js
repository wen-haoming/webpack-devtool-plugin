const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DevToolsPlugin = require("../webpack-dev-tool");


const resolve = (src) => path.resolve(__dirname, src);
module.exports = {
  entry: resolve("./src/index.jsx"),
  output: {
    filename: "[name].js",
    path: resolve("dist"),
  },
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
    new HtmlWebpackPlugin({
      template: resolve("./assets/index.html"),
    }),
    new DevToolsPlugin({
      proxyArr: [
        { value: "http://a.com" },
        { value: "http://b.com" },
        { value: "http://c.com" },
      ],
    }),
  ],
};
