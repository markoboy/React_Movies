import React from 'react';
import { render } from '@testing-library/react';

import ModalFormFooter from './container';
import { MODAL_FORM_ADD_ACTION, MODAL_FORM_DELETE_ACTION, MODAL_FORM_EDIT_ACTION } from '../constants';

describe('ModalFormFooter Component', () => {
  it('renders Submit action button when action is Add', () => {
    const { container } = render(<ModalFormFooter action={MODAL_FORM_ADD_ACTION} />);

    expect(container).toMatchSnapshot();
  });

  it('renders Save action button when action is Edit', () => {
    const { container } = render(<ModalFormFooter action={MODAL_FORM_EDIT_ACTION} />);

    expect(container).toMatchSnapshot();
  });

  it('renders Confirm action button when action is Delete', () => {
    const { container } = render(<ModalFormFooter action={MODAL_FORM_DELETE_ACTION} />);

    expect(container).toMatchSnapshot();
  });

  it('renders Reset action button when action is Add', () => {
    const { container } = render(<ModalFormFooter action={MODAL_FORM_ADD_ACTION} />);

    expect(container).toMatchSnapshot();
  });

  it('renders Reset action button when action is Edit', () => {
    const { container } = render(<ModalFormFooter action={MODAL_FORM_EDIT_ACTION} />);

    expect(container).toMatchSnapshot();
  });

  it('doesnt render Reset action button when action is Delete', () => {
    const { container } = render(<ModalFormFooter action={MODAL_FORM_DELETE_ACTION} />);

    expect(container).toMatchSnapshot();
  });
});
