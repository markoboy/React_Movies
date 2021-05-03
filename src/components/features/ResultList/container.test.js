import React from 'react';
import userEvent from '@testing-library/user-event';

import ResultList from './container';
import { renderWithRouter } from '@utils/testUtils';
import { MODAL_FORM_EDIT_ACTION } from '../ModalForm/constants';

const movies = [
  {
    id: 1,
    title: 'A film title',
    poster_path: 'https://film.com/image.jpg',
    overview: 'A great film',
    runtime: 145,
    genres: ['Documentary'],
    release_date: new Date(),
  },
];

const totalAmount = movies.length;

describe('ResultList Component', () => {
  let resultListRender;

  let setFormSelectedMovie;
  let setFormAction;
  let setIsOpenedModal;

  beforeEach(() => {
    setFormSelectedMovie = jest.fn();
    setFormAction = jest.fn();
    setIsOpenedModal = jest.fn();

    resultListRender = renderWithRouter(
      <ResultList
        movies={movies}
        totalAmount={totalAmount}
        setFormSelectedMovie={setFormSelectedMovie}
        setFormAction={setFormAction}
        setIsOpenedModal={setIsOpenedModal}
      />
    );
  });

  it('renders the correct amount of movies', () => {
    const { getAllByTestId } = resultListRender;

    const items = getAllByTestId(/result-list-item/i);

    expect(items.length).toBe(movies.length);
  });

  it('triggers setFormSelectedMovie, setFormAction and setIsOpenedModal when an action is clicked', () => {
    const { getAllByText } = resultListRender;

    const editActions = getAllByText(MODAL_FORM_EDIT_ACTION);

    expect(editActions.length).toBe(movies.length);

    userEvent.click(editActions[0]);

    expect(setFormSelectedMovie).toHaveBeenCalledTimes(1);
    expect(setFormAction).toHaveBeenCalledTimes(1);
    expect(setIsOpenedModal).toHaveBeenCalledTimes(1);

    expect(setFormSelectedMovie).toHaveBeenCalledWith(movies[0]);
    expect(setFormAction).toHaveBeenCalledWith(MODAL_FORM_EDIT_ACTION);
    expect(setIsOpenedModal).toHaveBeenCalledWith(true);
  });
});
