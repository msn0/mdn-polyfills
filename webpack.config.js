const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    "Object.assign": "./src/Object.assign/index.js",
    "Array.find": "./src/Array.find/index.js",
    "Array.from": "./src/Array.from/index.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name]/index.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module: {

    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]

  }
};
