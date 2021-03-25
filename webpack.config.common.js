const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { resolve } = require('path');
const { mergeWithRules, CustomizeRule } = require('webpack-merge');
const { existsSync } = require('fs');
const dotenv = require('dotenv');

const NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * Get the environmental variables in a JSON object.
 * @param {string} environment The environment to get
 */
const getEnvVariables = (environment) => {
  // Base environmental path
  const basePath = resolve(__dirname, '.env');

  // Get the path of the environment file. ex. .env.development
  const envPath = `${basePath}.${environment}`;

  // Get the final path that will be used for loading the environmental variables
  const finalPath = existsSync(envPath) ? envPath : basePath;

  const envVariables = dotenv.config({ path: finalPath }).parsed;

  const stringifiedVariables = Object.keys(envVariables)
    .reduce((prev, key) => {
      prev[`process.env.${key}`] = JSON.stringify(envVariables[key]);
      return prev;
    }, {});

  return stringifiedVariables;
};

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
      '@services': resolve(__dirname, 'src', 'services'),
      '@utils': resolve(__dirname, 'src', 'utils'),
      '@constants': resolve(__dirname, 'src', 'constants'),
      '@hooks': resolve(__dirname, 'src', 'hooks'),
      '@store': resolve(__dirname, 'src', 'store'),
      '@resources': resolve(__dirname, 'resources'),
    },
  },

  module: {
    rules: [
      // Babel loader to transform JSX to JavaScript and transpile our code based on the .browserslistrc
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
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
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    new webpack.DefinePlugin(getEnvVariables(NODE_ENV))
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

exports.getEnvVariables = getEnvVariables;
