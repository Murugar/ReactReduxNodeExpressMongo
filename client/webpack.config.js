"use strict";

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');

let generateHtml = new HtmlWebpackPlugin({ title: 'React Node Mongo' });
let extractCSS = new ExtractTextPlugin({ filename: 'styles/[name].css', allChunks: true });

const config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module : {
    rules : [
      {
        test : /\.(js|jsx)?/,
        include : APP_DIR,
        use : 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: extractCSS.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader?modules', 'sass-loader']
        })
      },
      { 
          test: /\.css$/, 
          loader: "style-loader!css-loader" 
        },
        { 
          test: /\.png$/, 
          loader: "url-loader?limit=100000" 
        },
        { 
          test: /\.jpg$/, 
          loader: "file-loader" 
        },
        {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
          loader: 'url?limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
          loader: 'url?limit=10000&mimetype=application/octet-stream'
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
          loader: 'file'
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
          loader: 'url?limit=10000&mimetype=image/svg+xml'
        }
        
    ]
  },
  resolveLoader: {
      moduleExtensions: ['-loader']
    },
  plugins: [
    generateHtml,
    extractCSS
  ]
};

module.exports = config;