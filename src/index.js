import store from '@store/index';
import isProduction from '@utils/isProduction';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './scss/application.scss';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root
);

// Opt-in to Webpack hot module replacement
if (isProduction()) {
  if (module.hot) module.hot.accept();
}
