var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'ui');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        include : APP_DIR,
        exclude: /node_modules/,
        loader : 'babel'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
    ],
    resolve: {
      extensions: ['', '.js', '.jsx', '.css']
    }
  }
};

module.exports = config;
