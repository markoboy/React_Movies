import { LOADING_STATUS } from '@constants/StatusTypes';
import { renderWithStore } from '@utils/testUtils';
import React from 'react';
import App from './container';
import * as routes from './routes';

describe('App Container', () => {
  let scrollToMock;

  beforeEach(() => {
    jest.clearAllMocks();

    scrollToMock = jest.fn();

    Element.prototype.scrollTo = scrollToMock;
  });

  it('renders a spinner when status is loading', () => {
    const { getAllByText } = renderWithStore(
      <App status={LOADING_STATUS} modalIsOpened={false} />
    );

    const spinner = getAllByText(/Loading.../);

    // The spinner element is rendered by Suspense as well
    expect(spinner).toBeDefined();
    expect(spinner.length).toBeGreaterThan(0);
  });

  it('renders a component using getRouteElement', () => {
    const mockRoutes = [
      {
        path: '/',
        component: () => <p>Some component</p>,
        exact: true,
      },
    ];

    const spyGetRouteElement = jest.spyOn(routes, 'getRouteElement');

    const { getByText } = renderWithStore(
      <App status={LOADING_STATUS} modalIsOpened={false} routes={mockRoutes} />
    );

    const component = getByText(/Some component/);

    expect(component).toBeDefined();

    expect(spyGetRouteElement).toHaveBeenCalledWith(
      expect.objectContaining({
        path: expect.stringMatching(/^\/$/),
      }),
      expect.any(Number),
      expect.any(Array),
    );
  });
});
