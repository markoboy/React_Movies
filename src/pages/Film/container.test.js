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

    const { container } = renderWithRouter(
      <Film selectedMovie={selectedMovie} selectMovie={() => {}} />
    );

    expect(container).toMatchSnapshot();
  });

  it('doesnt render the MovieDetails if no selectedMovie is set', () => {
    const { container } = renderWithRouter(
      <Film selectMovie={() => {}} />
    );

    expect(container).toMatchSnapshot();
  });
});
