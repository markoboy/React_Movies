import { combineReducers } from 'redux';

/**
 * Inject a preloaded state to reducers
 * @param {Object} reducers A key-value pair map with reducers
 * @param {Object} preloadedState The preloaded state for each reducer mapped by their keys
 * @returns A value-pair map with final reducers using preloaded state
 */
function injectState(reducers, preloadedState = {}) {
  return Object.keys(reducers).reduce((finalReducers, key) => {
    if (typeof reducers[key] === 'function') {
      return {
        ...finalReducers,
        [key]: (state = preloadedState[key], action) => reducers[key](state, action),
      };
    }

    return finalReducers;
  }, {});
}

/**
 * Creates a root reducer combining multiple reducers with preloaded state
 * @param {Object} reducers A key-value pair map with reducers
 * @param {Object} preloadedState The preloaded state for each reducer mapped by their keys
 * @returns A rootReducer with the injected preloaded state
 */
export default function createReducer(reducers, preloadedState) {
  return combineReducers(injectState(reducers, preloadedState));
}
