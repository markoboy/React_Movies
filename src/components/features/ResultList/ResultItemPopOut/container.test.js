import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ResultItemPopOut from './container';

describe('ResultItemPopOut Component', () => {
  it('triggers onClick event with the correct action and the provided movie', () => {
    const movie = {
      id: 1,
      title: 'A film title',
      poster_path: 'https://film.com/image.jpg',
      overview: 'A great film',
      runtime: 145,
      genres: ['Documentary'],
    };

    const actions = ['Edit'];

    const onClick = jest.fn();

    const { getByText } = render(
      <ResultItemPopOut actions={actions} movie={movie} onClick={onClick} />
    );

    const editAction = getByText(/Edit/i);

    expect(editAction).toBeDefined();

    userEvent.click(editAction);

    expect(onClick).toBeCalledTimes(1);
    expect(onClick).toBeCalledWith(actions[0], movie);
  });
});
