/**
 * Check if a variable is a function
 * @param {any} fn The variable to check
 * @returns {boolean} If the variable is function or not.
 */
export default function isFunction(fn) {
  return typeof fn === 'function';
}
