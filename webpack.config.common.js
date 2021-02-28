const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { resolve } = require('path');
const { mergeWithRules, CustomizeRule } = require('webpack-merge');

/**
 * @param {object} options Options to be used by prod and dev in order to share configs between environments
 * @param {string} options.buildPath The build path of the bundle
 * @return {import('webpack').WebpackOptionsNormalized}
 */
exports.getCommonConfig = ({ buildPath }) => ({
  entry: {
    bundle: resolve(__dirname, 'src', 'index.js'),
  },

  output: {
    path: buildPath,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    symlinks: false,
    alias: {
      '@components': resolve(__dirname, 'src', 'components'),
      '@containers': resolve(__dirname, 'src', 'containers'),
      '@services': resolve(__dirname, 'src', 'services'),
      '@utils': resolve(__dirname, 'src', 'utils'),
    },
  },

  module: {
    rules: [
      // Babel loader to transform JSX to JavaScript and transpile our code based on the .browserslistrc
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      // Sass loader to process scss files to css and minify when on production
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ['css-loader', 'postcss-loader', {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [resolve(__dirname, 'src', 'scss')]
            }
          }
        }],
      },

      // Asset loader for images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        exclude: /node_modules/,
      },

      // Asset loader for fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      filename: resolve(buildPath, 'index.html'),
      template: resolve(__dirname, 'src', 'index.html'),
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
    }),
  ],
});

/**
 * Merge common configs with dev configs using prepend method for the rules.
 * https://github.com/survivejs/webpack-merge/blob/develop/test/merge-with-rules.test.ts#L114
 *
 * @param {import('webpack').WebpackOptionsNormalized[]} configOptions The webpack configuration options to merge
 */
exports.mergeWithPrependRules = function (...configOptions) {
  return mergeWithRules({
    module: {
      rules: {
        test: CustomizeRule.Match,
        use: CustomizeRule.Prepend,
      },
    },
  })(...configOptions);
};
