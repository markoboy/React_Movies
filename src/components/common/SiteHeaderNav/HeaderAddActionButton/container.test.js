import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import HeaderAddActionButton from './container';
import { MODAL_FORM_ADD_ACTION } from '@components/features/ModalForm/constants';

describe('HeaderAddActionButton container', () => {
  it('calls setFormAction and setIsOpenedModal prop when button is clicked', () => {
    const setFormActionMock = jest.fn();
    const setIsOpenedModalMock = jest.fn();

    const { getByText } = render(
      <HeaderAddActionButton
        setFormAction={setFormActionMock}
        setIsOpenedModal={setIsOpenedModalMock}
      />
    );

    const button = getByText(/Add Movie/);

    userEvent.click(button);

    expect(setFormActionMock).toHaveBeenCalledTimes(1);
    expect(setFormActionMock).toHaveBeenCalledWith(MODAL_FORM_ADD_ACTION);

    expect(setIsOpenedModalMock).toHaveBeenCalledTimes(1);
    expect(setIsOpenedModalMock).toHaveBeenCalledWith(true);
  });
});
