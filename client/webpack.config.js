const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,

  entry: {
    dashboard: path.join(__dirname, './src/dashboard/main.js'),
  },

  output: {
    path: path.resolve('./dist/'),
    publicPath: '/dist/',
    filename: './bundles/[name]-bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          },
          // other vue-loader options go here
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new BundleTracker({ filename: './webpack-stats.json' }),
    new HtmlWebpackPlugin({
      title: 'elevator-dashboard',
      template: 'src/template/index.html',
      filename: 'templates/dashboard/index.html',
      chunks: ['dashboard'],
    }),
    new CopyWebpackPlugin([
      { from: 'src/website', to: 'templates/website/' },
      { from: 'src/dashboard/assets', to: 'assets/dashboard/' },
    ]),
  ],

  devServer: {
    historyApiFallback: {
      index: './dist/templates/dashboard/index.html',
    },
    noInfo: true,
  },
  devtool: '#eval-source-map',
};
