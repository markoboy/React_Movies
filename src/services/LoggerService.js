/* eslint-disable no-console */
import isFunction from '@utils/isFunction';
import isProduction from '@utils/isProduction';

/**
 * A logger service to be used by other components. Useful if we want
 * to implement some extra logic like send logs to a server or remove
 * logs from production
 */
export default class LoggerService {
  constructor(name = 'Logger') {
    const production = isProduction();
    Object.keys(console).forEach((method) => {
      if (
        Object.hasOwnProperty.call(console, method)
        && isFunction(console[method])
      ) {
        // Enable logs only on development environment
        if (!production) {
          try {
            this[method] = console[method].bind(console, `[${name}] `);
            // eslint-disable-next-line no-empty
          } catch (err) {}
        } else {
          this[method] = () => {};
        }
      }
    });
  }
}
