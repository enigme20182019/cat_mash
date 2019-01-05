const path = require('path');
const outputDir = path.join(__dirname, 'public/build/');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: __dirname + '/src/index.jsx',
  output: {
    path: outputDir,
    publicPath: outputDir,
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'template.html',
    inject: 'body',
    }),
    new CopyWebpackPlugin([ { from: path.join(__dirname, 'src/assets'), to: 'assets' } ])
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/react']
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'public/build/'),
    port: process.env.PORT || 8000,
    historyApiFallback: true
  }
};
