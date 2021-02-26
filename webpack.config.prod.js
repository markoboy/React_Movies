const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');

const {
  getCommonConfig,
  mergeWithPrependRules,
} = require('./webpack.config.common');

const buildPath = resolve(__dirname, 'build');

/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
const prodConfigs = {
  mode: 'production',

  output: {
    filename: './js/[name].[contenthash].js',
    chunkFilename: './js/[id].[contenthash].js',
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

  plugins: [new MiniCssExtractPlugin()],

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
};

module.exports = mergeWithPrependRules(
  getCommonConfig({ buildPath }),
  prodConfigs
);
