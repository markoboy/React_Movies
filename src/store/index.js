import isProduction from '@utils/isProduction';
import isSSR from '@utils/isSSR';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createReducer from './createReducer';
import rootReducerMap from './reducers';

const isReduxDevTools = !isSSR() && !!window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = isReduxDevTools && !isProduction()
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

/**
 *
 * @param {Object} preloadedState The state to load
 * @returns {import('redux').Store}
 */
export default function configureStore(preloadedState) {
  const rootReducer = createReducer(rootReducerMap, preloadedState);

  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}
