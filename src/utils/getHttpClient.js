import isProduction from './isProduction';
import sleep from './sleep';

const cache = new Map();

function jsonFetchWrapper(uri, options) {
  const handleResponse = (response) => response.json().then((json) => json).catch(() => null);

  return sleep(isProduction() ? 0 : 500)
    .then(() => (
      fetch(uri, options).then((response) => handleResponse(response)
        .then((json) => {
          if (!response.ok) {
            throw json;
          }

          return json;
        }))
    ));
}

/**
 * Creates a general http client for AJAX requests
 * @param {string | Request} uri The base uri the client will make requests to
 */
export default function getHttpClient(uri) {
  const headers = {
    'Content-Type': 'application/json',
  };

  return {
    get(path, params = {}, options = {}) {
      const serializedParams = new URLSearchParams(params).toString();

      const key = `${path}=${serializedParams}`;

      // Naive cache storage to get some performance gains :)
      if (cache.has(key)) {
        return Promise.resolve(cache.get(key));
      }

      return jsonFetchWrapper(`${uri}${path}?${serializedParams}`, {
        method: 'GET',
        headers,
        ...options,
      }).then((response) => {
        cache.set(key, response);
        return response;
      });
    },

    post(path, body = {}, options = {}) {
      return jsonFetchWrapper(`${uri}${path}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers,
        ...options,
      });
    },

    put(path, body = {}, options = {}) {
      return jsonFetchWrapper(`${uri}${path}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(body),
        ...options,
      });
    },

    delete(path, options = {}) {
      return jsonFetchWrapper(`${uri}${path}`, {
        method: 'DELETE',
        headers,
        ...options,
      });
    },
  };
}
