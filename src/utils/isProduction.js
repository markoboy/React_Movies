/**
 * Check if we are on production mode
 */
export default function isProduction() {
  return process.env.NODE_ENV === 'production';
}
