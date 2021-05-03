import isFunction from '@utils/isFunction';
import isProduction from '@utils/isProduction';

/**
 * A logger service to be used by other components. Useful if we want
 * to implement some extra logic like send logs to a server or remove
 * logs from production
 */
export default class LoggerService {
  constructor(name = 'Logger') {
    const production = isProduction() || process.env.NODE_ENV === 'test';
    Object.keys(window.console).forEach((method) => {
      if (
        Object.hasOwnProperty.call(window.console, method)
        && isFunction(window.console[method])
      ) {
        // Enable logs only on development environment
        if (!production) {
          try {
            this[method] = window.console[method].bind(
              window.console,
              `[${name}] `
            );
          // eslint-disable-next-line no-empty
          } catch (err) { }
        } else {
          this[method] = () => { };
        }
      }
    });
  }
}
