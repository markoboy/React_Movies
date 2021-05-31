const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');
const {
  mergeWithPrependRules,
  getCommonConfig,
  getParsedEnvVariables,
} = require('./webpack.config.common');

const rootPath = resolve(__dirname, '..');

const buildPath = resolve(rootPath, 'build-server');

/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
const serverConfigs = {
  entry: {
    index: resolve(rootPath, 'server', 'index.js'),
  },

  target: 'node',

  devtool: 'source-map',

  output: {
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: getParsedEnvVariables(process.env.NODE_ENV).PUBLIC_URL,
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash].css',
    }),
  ],

  optimization: {
    minimize: true,
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  externals: [nodeExternals()],
};

module.exports = mergeWithPrependRules(
  getCommonConfig({ buildPath }),
  serverConfigs
);
