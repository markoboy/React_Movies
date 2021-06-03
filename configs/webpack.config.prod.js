const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');

const {
  getCommonConfig,
  mergeWithPrependRules,
  getParsedEnvVariables,
} = require('./webpack.config.common');

const rootPath = resolve(__dirname, '..');

const buildPath = resolve(rootPath, 'build');

/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
const prodConfigs = {
  mode: 'production',

  output: {
    filename: 'assets/js/[name].[contenthash].js',
    chunkFilename: 'assets/js/[id].[contenthash].js',
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
};

module.exports = mergeWithPrependRules(
  getCommonConfig({ buildPath }),
  prodConfigs
);
