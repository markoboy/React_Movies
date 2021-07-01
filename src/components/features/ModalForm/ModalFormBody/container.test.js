import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ModalFormBody from './container';
import {
  MODAL_ADD_TITLE,
  MODAL_DELETE_TITLE,
  MODAL_EDIT_TITLE,
  MODAL_FORM_ADD_ACTION,
  MODAL_FORM_DELETE_ACTION,
  MODAL_FORM_EDIT_ACTION,
} from '../constants';

describe('ModalFormBody Component', () => {
  let setModalTitle;
  let onSubmit;

  beforeEach(() => {
    setModalTitle = jest.fn();
    onSubmit = jest.fn();
  });

  it('renders a form with inputs when action is Add', () => {
    const { container } = render(
      <ModalFormBody
        action={MODAL_FORM_ADD_ACTION}
        selectedMovie={null}
        setModalTitle={setModalTitle}
        onSubmit={onSubmit}
      />
    );

    expect(setModalTitle).toHaveBeenCalledTimes(1);
    expect(setModalTitle).toHaveBeenCalledWith(MODAL_ADD_TITLE);

    expect(container).toMatchSnapshot();
  });

  it('renders a form with inputs when action is Edit', () => {
    const { container } = render(
      <ModalFormBody
        action={MODAL_FORM_EDIT_ACTION}
        selectedMovie={null}
        setModalTitle={setModalTitle}
        onSubmit={onSubmit}
      />
    );

    expect(setModalTitle).toHaveBeenCalledTimes(1);
    expect(setModalTitle).toHaveBeenCalledWith(MODAL_EDIT_TITLE);

    expect(container).toMatchSnapshot();
  });

  it('renders a form with delete paragraph when action is Delete', () => {
    const { container } = render(
      <ModalFormBody
        action={MODAL_FORM_DELETE_ACTION}
        selectedMovie={null}
        setModalTitle={setModalTitle}
        onSubmit={onSubmit}
      />
    );

    expect(setModalTitle).toHaveBeenCalledTimes(1);
    expect(setModalTitle).toHaveBeenCalledWith(MODAL_DELETE_TITLE);

    expect(container).toMatchSnapshot();
  });

  it('triggers onSubmit with values and formik instance when action is Add', async () => {
    const { getByText, getByLabelText, getByRole } = render(
      <ModalFormBody
        action={MODAL_FORM_ADD_ACTION}
        selectedMovie={null}
        setModalTitle={setModalTitle}
        onSubmit={onSubmit}
      />
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

    userEvent.click(getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          title: 'A film title',
          poster_path: 'https://film.com/image.jpg',
          overview: 'A great film',
          runtime: 145,
          genres: [{ label: 'Documentary', value: 'documentary' }],
        }),
        expect.anything(),
      );
    });
  });

  it('renders form with selectedMovie values when action is MODAL_FORM_EDIT_ACTION and form is reset', async () => {
    const selectedMovie = {
      id: 1,
      title: 'A film title',
      poster_path: 'https://film.com/image.jpg',
      overview: 'A great film',
      runtime: 145,
      genres: ['Documentary'],
    };

    const { container } = render(
      <ModalFormBody
        action={MODAL_FORM_EDIT_ACTION}
        selectedMovie={selectedMovie}
        setModalTitle={setModalTitle}
        onSubmit={onSubmit}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
