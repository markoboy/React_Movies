import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Modal from './container';

describe('Modal Component', () => {
  let onCloseTrigger;
  let modal;
  let eventsMap = {};

  beforeEach(() => {
    onCloseTrigger = jest.fn();

    document.addEventListener = jest.fn((e, cb) => {
      eventsMap[e] = cb;
    });

    modal = render(
      <Modal
        title="Some title"
        body={<p>Some body</p>}
        footer={<p>Some footer</p>}
        onCloseTrigger={onCloseTrigger}
      />
    );
  });

  it('renders with provided slots', () => {
    const { getByText } = modal;

    const title = getByText(/Some title/);
    const body = getByText(/Some body/);
    const footer = getByText(/Some footer/);

    expect(title).toBeDefined();
    expect(body).toBeDefined();
    expect(footer).toBeDefined();
  });

  it('triggers onCloseTrigger event when its clicked outside', () => {
    const { getByTestId } = modal;
    const modalContainer = getByTestId('modal');

    eventsMap.click({ target: modalContainer });
    expect(onCloseTrigger).toHaveBeenCalledTimes(1);
  });

  it('triggers onCloseTrigger event when close button is clicked', () => {
    const { getByTestId } = modal;
    const modalContainer = getByTestId('modal-close-trigger');

    userEvent.click(modalContainer);
    expect(onCloseTrigger).toHaveBeenCalledTimes(1);
  });

  it('doesnt trigger onCloseTrigger event when clicked inside', () => {
    const { getByText } = modal;
    const modalTitle = getByText(/Some title/);

    userEvent.click(modalTitle);
    expect(onCloseTrigger).toHaveBeenCalledTimes(0);
  });
});
