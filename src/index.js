/* eslint-disable no-underscore-dangle */
import App from '@components/App';
import { loadableReady } from '@loadable/component';
import { fetchMoviesSuccessCreator } from '@store/action-creators/moviesActionCreators';
import configureStore from '@store/index';
import isProduction from '@utils/isProduction';
import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/application.scss';

const renderFun = typeof window.__SSR_STATE__ !== 'undefined' ? hydrate : render;

const store = configureStore(window.__SSR_STATE__);

// Call the movies success creator with the data from SSR to transform the data
// as if a fetch was done on client side
if (window.__SSR_STATE__?.movies?.items?.length) {
  store.dispatch(
    fetchMoviesSuccessCreator({
      data: window.__SSR_STATE__?.movies?.items,
      totalAmount: window.__SSR_STATE__?.movies?.totalAmount,
    })
  );
}

loadableReady(() => {
  const root = document.getElementById('root');

  renderFun(
    <React.StrictMode>
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>,
    root
  );
});

// Opt-in to Webpack hot module replacement
if (isProduction()) {
  if (module.hot) module.hot.accept();
}
