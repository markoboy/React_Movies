/**
 * @type {import('@babel/core').TransformOptions}
 */
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['@babel/plugin-syntax-dynamic-import'],
};
