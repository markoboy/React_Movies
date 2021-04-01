const { resolve } = require('path');
const webpack = require('webpack');

const {
  getCommonConfig,
  mergeWithPrependRules,
} = require('./webpack.config.common');

const buildPath = resolve(__dirname, 'dev');

/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
const devConfigs = {
  mode: 'development',

  target: 'web',

  devtool: 'eval-cheap-module-source-map',

  output: {
    filename: './js/[name].js',
    chunkFilename: './js/[id].js',
    publicPath: '/',
  },

  module: {
    rules: [
      // The rule will be prepended with the common webpack file use mergeWithRules
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ['style-loader'],
      },
    ],
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    port: 3000,
    hot: true,
    inline: true,
    contentBase: resolve(__dirname, 'src'),
    historyApiFallback: true,
  },
};

module.exports = mergeWithPrependRules(
  getCommonConfig({ buildPath }),
  devConfigs
);
