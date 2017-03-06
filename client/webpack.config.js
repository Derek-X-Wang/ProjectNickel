const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,

  entry: {
    dashboard: path.join(__dirname, './src/dashboard/main.js'),
    website: path.join(__dirname, './src/website/main.js'),
  },

  output: {
    path: path.resolve('./dist/'),
    publicPath: '/dist/',
    filename: './js/[name]-bundle.js',
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
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },

  plugins: [
    new BundleTracker({ filename: './webpack-stats.json' }),
    new HtmlWebpackPlugin({
      title: 'elevator-website',
      template: 'src/index.html',
      filename: 'templates/website/index.html',
      chunks: ['website'],
    }),
    new HtmlWebpackPlugin({
      title: 'elevator-dashboard',
      template: 'src/index.html',
      filename: 'templates/dashboard/index.html',
      chunks: ['dashboard'],
    }),
  ],

  devServer: {
    historyApiFallback: {
      index: './dist/templates/website/index.html',
    },
    noInfo: true,
  },
  devtool: '#eval-source-map',
};
