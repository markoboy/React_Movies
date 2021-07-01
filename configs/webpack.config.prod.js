const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

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
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
    }),
  ],

  optimization: {
    minimize: true,
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new TerserPlugin({
        extractComments: 'all',
        terserOptions: {
          compress: {
            collapse_vars: false,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
    },
  },
};

module.exports = mergeWithPrependRules(
  getCommonConfig({ buildPath }),
  prodConfigs
);
