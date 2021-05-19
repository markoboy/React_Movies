import React from 'react';
import { render } from '@testing-library/react';

import MovieDetail from './component';

describe('MovieDetail Component', () => {
  it('renders MovieDetail Component with provided props', () => {
    const onError = jest.fn();

    const { container } = render(
      <MovieDetail
        runtime={140}
        vote_average={8.7}
        overview="A great movie"
        poster_path="https://a-path.to/an/image.jpg"
        title="The best movie of all times"
        release_date={new Date()}
        genres={['Documentary']}
        onError={onError}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
