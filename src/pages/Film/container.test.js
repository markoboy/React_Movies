import React from 'react';

import { renderWithRouter } from '@utils/testUtils';
import Film from './container';

describe('Film Page', () => {
  it('renders the selected movie when one is selected', () => {
    const selectedMovie = {
      id: 1,
      title: 'A film title',
      poster_path: 'https://film.com/image.jpg',
      overview: 'A great film',
      runtime: 145,
      genres: ['Documentary'],
    };

    const { getByText } = renderWithRouter(
      <Film selectedMovie={selectedMovie} selectMovie={() => {}} />
    );

    const title = getByText(/A film title/i);

    expect(title).toBeDefined();
  });

  it('doesnt render the MovieDetails if no selectedMovie is set', () => {
    const { queryByText } = renderWithRouter(
      <Film selectMovie={() => {}} />
    );

    const title = queryByText(/A film title/i);

    expect(title).toBeNull();
  });
});
