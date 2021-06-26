const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const GoogleFontsPlugin = require('../lib/google-fonts-webpack-plugin/src/index');
const devConfig = require('../configs/webpack.config.dev');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
  ],
  core: {
    builder: 'webpack5',
  },

  /**
   * @param {import('webpack').WebpackOptionsNormalized} config
   * @return {import('webpack').WebpackOptionsNormalized}
   */
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: devConfig.resolve.alias,
      },
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          devConfig.module.rules.find((rule) => rule.test.test('.sass')),
        ],
      },
      plugins: [
        devConfig.plugins.find((plugin) => plugin instanceof GoogleFontsPlugin),
        ...config.plugins,
        new HtmlWebpackTagsPlugin({
          tags: ['/assets/css/fonts.css'],
          append: true,
        }),
      ],
    };
  },
};
