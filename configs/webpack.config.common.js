const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { resolve } = require('path');
const { mergeWithRules, CustomizeRule } = require('webpack-merge');
const { existsSync } = require('fs');
const dotenv = require('dotenv');
const LoadablePlugin = require('@loadable/webpack-plugin');
const GoogleFontsPlugin = require('../lib/google-fonts-webpack-plugin/src/index');

const NODE_ENV = process.env.NODE_ENV || 'development';

const rootPath = resolve(__dirname, '..');

/**
 * Get the parsed environment variables from dotenv based on the current environment
 * @param {string} environment The NODE_ENV environment
 */
const getParsedEnvVariables = (environment) => {
  // Base environmental path
  const basePath = resolve(rootPath, '.env');

  // Get the path of the environment file. ex. .env.development
  const envPath = `${basePath}.${environment}`;

  // Get the final path that will be used for loading the environmental variables
  const finalPath = existsSync(envPath) ? envPath : basePath;

  const envVariables = dotenv.config({ path: finalPath }).parsed;

  return envVariables;
};

/**
 * Get the environmental variables in a JSON object.
 * @param {string} environment The environment to get
 */
const getEnvVariables = (environment) => {
  const envVariables = getParsedEnvVariables(environment);

  const stringifiedVariables = Object.keys(envVariables).reduce((prev, key) => {
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
    bundle: resolve(rootPath, 'src', 'index.js'),
  },

  output: {
    path: buildPath,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    symlinks: false,
    alias: {
      '@components': resolve(rootPath, 'src', 'components'),
      '@services': resolve(rootPath, 'src', 'services'),
      '@utils': resolve(rootPath, 'src', 'utils'),
      '@constants': resolve(rootPath, 'src', 'constants'),
      '@hooks': resolve(rootPath, 'src', 'hooks'),
      '@pages': resolve(rootPath, 'src', 'pages'),
      '@store': resolve(rootPath, 'src', 'store'),
      '@resources': resolve(rootPath, 'public', 'resources'),
    },
    importsFields: ['jsnext:main', 'module', 'main'],
    fallback: {
      'react-hook-form': resolve(
        rootPath,
        'node_modules',
        'react-hook-form',
        'dist',
        'index.esm.js'
      ),
    },
  },

  module: {
    rules: [
      // Responsive loader for images
      {
        test: /\.(jpe?g|png|webp)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'responsive-loader',
          options: {
            adapter: require('responsive-loader/sharp'),
            format: 'webp',
            quality: 50,
            outputPath: 'assets/images',
            esModule: true,
          },
        },
      },

      // Babel loader to transform JSX to JavaScript and transpile our code based on the .browserslistrc
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        use: {
          loader: 'babel-loader',
        },
      },

      // Sass loader to process scss files to css and minify when on production
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [resolve(rootPath, 'src', 'scss')],
              },
            },
          },
        ],
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
    new LoadablePlugin(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new GoogleFontsPlugin({
      fonts: [
        {
          family: 'Montserrat',
          variants: ['400', '600', '800'],
          display: 'swap',
        },
      ],
      filename: 'assets/css/fonts.css',
      path: 'assets/fonts',
    }),
    new HtmlWebpackPlugin({
      filename: resolve(buildPath, 'index.html'),
      template: resolve(rootPath, 'public', 'index.ejs'),
      inject: NODE_ENV !== 'production',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    new webpack.DefinePlugin(getEnvVariables(NODE_ENV)),
    new CopyPlugin({
      patterns: [
        {
          from: resolve(rootPath, 'public', '404.html'),
          to: buildPath,
        },
      ],
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

exports.getEnvVariables = getEnvVariables;
exports.getParsedEnvVariables = getParsedEnvVariables;
