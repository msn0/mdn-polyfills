const webpack = require('webpack');

module.exports = {
  entry: {
    "Object.assign": "./src/Object.assign/index.js",
    "Array.prototype.find": "./src/Array.prototype.find/index.js",
    "Array.prototype.from": "./src/Array.prototype.from/index.js",
    "Array.prototype.filter": "./src/Array.prototype.filter/index.js",
    "Array.prototype.forEach": "./src/Array.prototype.forEach/index.js"
  },
  output: {
    filename: "[name].js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
};
