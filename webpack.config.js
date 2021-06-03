const isProduction = process.env.NODE_ENV === 'production';

/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
module.exports = isProduction
  ? require('./configs/webpack.config.prod')
  : require('./configs/webpack.config.dev');
