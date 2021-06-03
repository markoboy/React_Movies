/**
 * Check if we are on SSR or DOM rendering
 * @returns {boolean}
 */
export default function isSSR() {
  return typeof window === 'undefined';
}
