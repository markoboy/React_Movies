import React from 'react';
import { render } from '@testing-library/react';

import ModalFormFooter from './container';
import { MODAL_FORM_ADD_ACTION, MODAL_FORM_DELETE_ACTION, MODAL_FORM_EDIT_ACTION } from '../constants';

describe('ModalFormFooter Component', () => {
  it('renders Submit action button when action is Add', () => {
    const { getByText } = render(<ModalFormFooter action={MODAL_FORM_ADD_ACTION} />);

    const submitButton = getByText(/Submit/);

    expect(submitButton).toBeDefined();
    expect(submitButton).toHaveProperty('type', 'submit');
  });

  it('renders Save action button when action is Edit', () => {
    const { getByText } = render(<ModalFormFooter action={MODAL_FORM_EDIT_ACTION} />);

    const submitButton = getByText(/Save/);

    expect(submitButton).toBeDefined();
    expect(submitButton).toHaveProperty('type', 'submit');
  });

  it('renders Confirm action button when action is Delete', () => {
    const { getByText } = render(<ModalFormFooter action={MODAL_FORM_DELETE_ACTION} />);

    const submitButton = getByText(/Confirm/);

    expect(submitButton).toBeDefined();
    expect(submitButton).toHaveProperty('type', 'submit');
  });

  it('renders Reset action button when action is Add', () => {
    const { getByText } = render(<ModalFormFooter action={MODAL_FORM_ADD_ACTION} />);

    const resetButton = getByText(/Reset/);

    expect(resetButton).toBeDefined();
    expect(resetButton).toHaveProperty('type', 'reset');
  });

  it('renders Reset action button when action is Edit', () => {
    const { getByText } = render(<ModalFormFooter action={MODAL_FORM_EDIT_ACTION} />);

    const resetButton = getByText(/Reset/);

    expect(resetButton).toBeDefined();
    expect(resetButton).toHaveProperty('type', 'reset');
  });

  it('doesnt render Reset action button when action is Delete', () => {
    const { queryByText } = render(<ModalFormFooter action={MODAL_FORM_DELETE_ACTION} />);

    const resetButton = queryByText(/Reset/);

    expect(resetButton).toBeNull();
  });
});
