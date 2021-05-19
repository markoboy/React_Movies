import React from 'react';

import ResultListItem from './component';
import { renderWithRouter } from '@utils/testUtils';

describe('ResultListItem Component', () => {
  it('renders ResultListItem Component with provided props', () => {
    const onError = jest.fn();

    const { container } = renderWithRouter(
      <ResultListItem
        id={1}
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
