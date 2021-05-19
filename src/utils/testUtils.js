/* eslint-disable import/no-extraneous-dependencies */
import defaultStore from '@store/index';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

export function renderWithStore(
  ui,
  { store = defaultStore, route = '/', ...renderOptions } = {}
) {
  window.history.pushState({}, 'Test page', route);

  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }

  return render(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });
}

export function renderWithRouter(ui, { route = '/' } = {}) {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
}
