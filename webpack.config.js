const isProduction = process.env.NODE_ENV === 'production';

/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
module.exports = isProduction ? require('./webpack.config.prod') : require('./webpack.config.dev');
