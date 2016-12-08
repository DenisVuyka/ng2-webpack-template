var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

const rootPath = helpers.root('src');
const libPaths = [];

module.exports = {
  entry: {
    'module': './index.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js'],
    modules: [
      helpers.root('src'), 
      helpers.root('node_modules')
    ]
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        include: [
          ...libPaths
        ],
        loader: 'angular2-template-loader',
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: [
          rootPath,
          ...libPaths
        ],
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: [
          rootPath,
          ...libPaths
        ],
        loader: 'raw'
      }
    ]
  },

  plugins: []
};
