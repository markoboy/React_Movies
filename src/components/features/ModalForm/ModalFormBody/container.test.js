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
  MODAL_FORM_DELETE_PARAGRAPH,
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

    const inputs = container.querySelectorAll('input');

    expect(inputs.length).toBeGreaterThanOrEqual(4);

    expect(setModalTitle).toHaveBeenCalledTimes(1);
    expect(setModalTitle).toHaveBeenCalledWith(MODAL_ADD_TITLE);
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

    const inputs = container.querySelectorAll('input');

    expect(inputs.length).toBeGreaterThanOrEqual(4);

    expect(setModalTitle).toHaveBeenCalledTimes(1);
    expect(setModalTitle).toHaveBeenCalledWith(MODAL_EDIT_TITLE);
  });

  it('renders a form with delete paragraph when action is Delete', () => {
    const { getByText } = render(
      <ModalFormBody
        action={MODAL_FORM_DELETE_ACTION}
        selectedMovie={null}
        setModalTitle={setModalTitle}
        onSubmit={onSubmit}
      />
    );

    const paragraph = getByText(MODAL_FORM_DELETE_PARAGRAPH);

    expect(paragraph).toBeDefined();

    expect(setModalTitle).toHaveBeenCalledTimes(1);
    expect(setModalTitle).toHaveBeenCalledWith(MODAL_DELETE_TITLE);
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
        expect.any(Object)
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

    const { getByText, getByLabelText, getByRole } = render(
      <ModalFormBody
        action={MODAL_FORM_EDIT_ACTION}
        selectedMovie={selectedMovie}
        setModalTitle={setModalTitle}
        onSubmit={onSubmit}
      />
    );

    const id = getByLabelText(/Movie ID/i);
    const title = getByLabelText(/title/i);
    const posterUrl = getByLabelText(/Movie Poster URL/i);
    const overview = getByLabelText(/Overview/i);
    const runtime = getByLabelText(/Runtime/i);

    userEvent.click(getByRole('button', { name: /reset/i }));

    // Documentary multi select uses span instead of DOM select element
    const documentary = getByText(/Documentary/i);

    expect(id.value).toBe('1');
    expect(title.value).toBe('A film title');
    expect(posterUrl.value).toBe('https://film.com/image.jpg');
    expect(overview.value).toBe('A great film');
    expect(runtime.value).toBe('145');
    expect(documentary).toBeDefined();
  });
});
