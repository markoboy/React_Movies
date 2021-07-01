import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '@store/index';

import '../src/scss/application.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const RouterDecorator = (Story) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
);

const store = configureStore({
  modalForm: {
    action: '',
  },
});

const StoreDecorator = (Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
);

const WrapperDecorator = (Story) => (
  <div className="wrapper">
    <Story />
  </div>
);

export const decorators = [StoreDecorator, RouterDecorator, WrapperDecorator];
