const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
    }),
    new CopyWebpackPlugin({'patterns': [
        {from:'src/images', to:'images'}
    ]}),
    new CopyWebpackPlugin({'patterns': [
        {from:'src/styles', to:'styles'}
    ]}),
],

  module: {
    rules: [
        {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
            type: 'asset/resource'
         }
    ]
  }
};