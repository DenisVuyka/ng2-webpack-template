var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var path = require('path');
var fs = require('fs');

const rootPath = helpers.root('node_modules');

// resolves real paths (including symlinks created by `npm link`)
var libs = [
  helpers.root('node_modules', 'angular2-webpack-lib')
  // put external libs here
].map(entry => fs.realpathSync(entry));

console.dir(libs);

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js'],
    modules: [
      helpers.root('src'), 
      helpers.root('node_modules')
    ],
    root: rootPath,
    fallback: rootPath
  },

  resolveLoader: {
    fallback: rootPath
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
          ...libs
        ],
        loaders: ['angular2-template-loader', 'source-map-loader']
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
          helpers.root('src', 'app'),
          ...libs
        ],
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: [
          helpers.root('src', 'app'),
          ...libs
        ],
        loader: 'raw'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
