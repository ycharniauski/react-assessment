const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const environment = process.env.NODE_ENV;
const isDevelopment = environment === 'development';

const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);

const PATHS = {
  public: resolvePath('public'),
  dist: resolvePath('dist'),
};

module.exports = {
  entry: './src/index.jsx',
  mode: environment,
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@components': resolvePath('src/components'),
      '@containers': resolvePath('src/containers'),
      '@constants': resolvePath('src/constants'),
      '@services': resolvePath('src/services'),
      '@utils': resolvePath('src/utils'),
    },
  },
  output: {
    filename: 'main.js',
    path: PATHS.dist,
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js|es6)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          cache: false
        }
      },
      {
        test: /\.(jsx|js|es6)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              hot: isDevelopment,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
        },
      },
      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'raw-loader',
          },
        ],
        exclude: [/public/],
      },
    ],
  },
  devtool: isDevelopment ? 'inline-source-map' : 'source-map',
  plugins: [
    new ExtractCssChunks({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './public/index.html',
      filename: 'index.html',
      favicon: './public/favicon.ico',
      env: {
        environment,
      },
      chunksSortMode: 'none',
    }),
  ],
  devServer: {
    contentBase: PATHS.public,
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8082,
  },
};
