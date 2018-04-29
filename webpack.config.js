const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const sassLoaders = [
  'css-loader',
  'sass-loader?includePaths[]=' + path.resolve(__dirname, '/public')
]

module.exports = {

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 8080
  },

  context: __dirname,
  entry: './app/index.js',

  output: {
    path: __dirname + '/public/dist',
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    publicPath: '/public/',
    jsonpFunction:'webpackJsonp'
  },

  target:"web",

  module: {
    rules: [
     {
        test: /.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',         
            query: {
              presets: ['babel-preset-es2015', 'babel-preset-react', 'babel-preset-stage-2'].map(require.resolve)
            }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: sassLoaders
        })
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: sassLoaders
        })
      },
      {
        test: /\.svg$/,
        include: [
            path.resolve(__dirname, 'public', 'assets')
        ],
        use: [
          'svg-loader'
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        exclude: [
            path.resolve(__dirname, 'public', 'assets')
        ],
        loader: 'file-loader?name=/assets/[name].[ext]'
      },
    ]
  },

  plugins: [

    new ExtractTextPlugin({
      filename:"style.css",
      disable:false,
      allChunks: true
    }),
    
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),

    new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, 'public', 'index.html'),
        template: path.resolve(__dirname, 'templates', 'index.html'),
        inject : "body"
    })

  ]

}