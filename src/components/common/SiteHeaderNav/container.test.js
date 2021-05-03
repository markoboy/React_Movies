import { FILM_PATH, HOME_PATH } from '@components/App/routes';
import { renderWithStore } from '@utils/testUtils';
import React from 'react';
import SiteHeaderNav from './container';

describe('SiteHeaderNav Container', () => {
  it('renders add action button on home page', () => {
    const { getByText } = renderWithStore(<SiteHeaderNav />, {
      route: HOME_PATH[0],
    });

    const button = getByText(/Add Movie/);

    expect(button).toBeDefined();
  });

  it('renders search action button on movie detail page', () => {
    const { getByTitle } = renderWithStore(<SiteHeaderNav />, {
      route: FILM_PATH[0],
    });

    const button = getByTitle(/Search movies/);

    expect(button).toBeDefined();
  });
});
