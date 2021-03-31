import App from '@components/App';
import store from '@store/index';
import isProduction from '@utils/isProduction';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/application.scss';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  root
);

// Opt-in to Webpack hot module replacement
if (isProduction()) {
  if (module.hot) module.hot.accept();
}
