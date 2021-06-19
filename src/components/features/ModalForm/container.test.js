import React from 'react';
import { waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import ModalForm from './container';
import {
  MODAL_ADD_TITLE,
  MODAL_DELETE_TITLE,
  MODAL_EDIT_TITLE,
  MODAL_FORM_ADD_ACTION,
  MODAL_FORM_DELETE_ACTION,
  MODAL_FORM_EDIT_ACTION,
} from './constants';
import { renderWithStore } from '@utils/testUtils';
import { initialMoviesState } from '@store/reducers/moviesReducer';
import { initialModalState } from '@store/reducers/modalReducer';
import { initialModalFormState } from '@store/reducers/modalFormReducer';

const createStore = configureMockStore([thunk]);

describe('ModalForm Component', () => {
  let resetModalState;
  let resetModalFormState;
  let deleteMovie;
  let updateMovie;
  let addMovie;

  beforeEach(() => {
    resetModalState = jest.fn();
    resetModalFormState = jest.fn();
    deleteMovie = jest.fn();
    updateMovie = jest.fn();
    addMovie = jest.fn();
  });

  it('triggers addMovie with serialized data when action is MODAL_FORM_ADD_ACTION', async () => {
    const store = createStore({
      movies: initialMoviesState,
      modal: initialModalState,
      modalForm: { ...initialModalFormState, action: MODAL_FORM_ADD_ACTION },
    });

    const { getByText, getByLabelText, getByRole } = renderWithStore(
      <ModalForm
        title={MODAL_ADD_TITLE}
        formAction={MODAL_FORM_ADD_ACTION}
        selectedMovie={null}
        resetModalState={resetModalState}
        resetModalFormState={resetModalFormState}
        deleteMovie={deleteMovie}
        updateMovie={updateMovie}
        addMovie={addMovie}
      />,
      {
        store,
      }
    );

    userEvent.type(getByLabelText(/title/i), 'A film title');
    userEvent.type(
      getByLabelText(/Movie Poster URL/i),
      'https://film.com/image.jpg'
    );
    userEvent.type(getByLabelText(/Overview/i), 'A great film');
    userEvent.type(getByLabelText(/Runtime/i), '145');

    const selectElement = getByText(/Select Genres/i);

    userEvent.click(selectElement);

    const documentary = getByText(/Documentary/i);
    userEvent.click(documentary);

    fireEvent.submit(getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(addMovie).toHaveBeenCalledTimes(1);
      expect(addMovie).toHaveBeenCalledWith(
        expect.objectContaining({
          title: 'A film title',
          poster_path: 'https://film.com/image.jpg',
          overview: 'A great film',
          runtime: 145,
          genres: ['Documentary'],
        })
      );
    });
  });
  it('triggers updateMovie with serialized data when action is MODAL_FORM_EDIT_ACTION', async () => {
    const selectedMovie = {
      id: 1,
      title: 'A film title',
      poster_path: 'https://film.com/image.jpg',
      overview: 'A great film',
      runtime: 145,
      release_date: undefined,
      genres: ['Documentary'],
    };

    const store = createStore({
      movies: initialMoviesState,
      modal: initialModalState,
      modalForm: {
        ...initialModalFormState,
        action: MODAL_FORM_EDIT_ACTION,
        selectedMovie,
      },
    });

    const { getByText, getByLabelText, getByRole } = renderWithStore(
      <ModalForm
        title={MODAL_EDIT_TITLE}
        formAction={MODAL_FORM_EDIT_ACTION}
        selectedMovie={selectedMovie}
        resetModalState={resetModalState}
        resetModalFormState={resetModalFormState}
        deleteMovie={deleteMovie}
        updateMovie={updateMovie}
        addMovie={addMovie}
      />,
      {
        store,
      }
    );

    userEvent.type(getByLabelText(/title/i), ' updated');
    userEvent.type(getByLabelText(/Movie Poster URL/i), '?');
    userEvent.type(getByLabelText(/Overview/i), ' updated');
    userEvent.type(getByLabelText(/Runtime/i), '1');

    // We expect the select element to have genres separated by comma
    const selectElement = getByText(/Documentary/i);

    userEvent.click(selectElement);

    const comedy = getByText(/Comedy/i);
    userEvent.click(comedy);

    fireEvent.submit(getByRole('button', { name: /save/i }));

    await waitFor(() => {
      expect(updateMovie).toHaveBeenCalledTimes(1);
      expect(updateMovie).toHaveBeenCalledWith(
        expect.objectContaining({
          id: 1,
          title: 'A film title updated',
          poster_path: 'https://film.com/image.jpg?',
          overview: 'A great film updated',
          runtime: 1451,
          genres: ['Documentary', 'Comedy'],
        })
      );
    });
  });

  it('triggers deleteMovie with movie ID when action is MODAL_FORM_DELETE_ACTION', async () => {
    const selectedMovie = {
      id: 1,
      title: 'A film title',
      poster_path: 'https://film.com/image.jpg',
      overview: 'A great film updated',
      runtime: 145,
      release_date: '2017/04/26',
      genres: ['Documentary'],
    };

    const store = createStore({
      movies: initialMoviesState,
      modal: initialModalState,
      modalForm: {
        ...initialModalFormState,
        action: MODAL_FORM_DELETE_ACTION,
        selectedMovie,
      },
    });

    const { getByRole } = renderWithStore(
      <ModalForm
        title={MODAL_DELETE_TITLE}
        formAction={MODAL_FORM_DELETE_ACTION}
        selectedMovie={selectedMovie}
        resetModalState={resetModalState}
        resetModalFormState={resetModalFormState}
        deleteMovie={deleteMovie}
        updateMovie={updateMovie}
        addMovie={addMovie}
      />,
      {
        store,
      }
    );

    fireEvent.submit(getByRole('button', { name: /confirm/i }));

    await waitFor(() => {
      expect(deleteMovie).toHaveBeenCalledTimes(1);
      expect(deleteMovie).toHaveBeenCalledWith(selectedMovie.id);
    });
  });
});
