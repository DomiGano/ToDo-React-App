const path = require("path");
const webpack = require("webpack");

const entryPath = "../toDo List";

module.exports = {
  mode: "none",
  entry: ["whatwg-fetch", `./${entryPath}/js/app.js`],
  devtool: "inline-source-map",
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`),
    clean: true,
  },
  devServer: {
    open: true,
    hot: true,
    static: [
      {
        directory: path.join(__dirname, entryPath),
        publicPath: "/",
        serveIndex: true,
      },
    ],
    devMiddleware: {
      writeToDisk: true,
    },
    compress: true,
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },      
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
