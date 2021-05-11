import React from 'react';

import PageLayout from './component';
import { renderWithStore } from '@utils/testUtils';

jest.mock('@services/MovieServiceAPI', () => ({
  getAll: jest.fn(() => Promise.resolve([])),
  getOne: jest.fn(() => Promise.resolve({})),
  add: jest.fn(() => Promise.resolve({})),
  delete: jest.fn(() => Promise.resolve({})),
  update: jest.fn(() => Promise.resolve({})),
}));

describe('PageLayout Component', () => {
  afterAll(() => {
    jest.unmock('@services/MovieServiceAPI');
  });

  it('renders PageLayout Component with provided route', () => {
    const route = {
      routes: [
        {
          path: '/',
          exact: true,
          component: () => <p>Some component</p>,
        },
      ],
    };

    const { container } = renderWithStore(<PageLayout route={route} />);

    expect(container).toMatchSnapshot();
  });
});
