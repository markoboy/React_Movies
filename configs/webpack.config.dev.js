const { resolve } = require('path');
const webpack = require('webpack');

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
const devConfigs = {
  mode: 'development',

  target: 'web',

  devtool: 'source-map',

  output: {
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/[id].js',
    publicPath: getParsedEnvVariables(process.env.NODE_ENV).PUBLIC_URL,
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
    contentBase: resolve(rootPath, 'src'),
    historyApiFallback: true,
  },
};

module.exports = mergeWithPrependRules(
  getCommonConfig({ buildPath }),
  devConfigs
);
