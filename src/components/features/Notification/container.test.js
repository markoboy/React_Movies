import React from 'react';
import { render } from '@testing-library/react';

import { COMPLETE_STATUS, ERROR_STATUS } from '@constants/StatusTypes';
import { ERROR_TITLE, SUCCESS_TITLE } from './constants';
import Notification from './container';

describe('Notification Component', () => {
  let removeNotification;

  beforeEach(() => {
    removeNotification = jest.fn();
  });

  it('renders success message when status is COMPLETE_STATUS', () => {
    const success = {
      message: 'Successful message',
    };
    const { container } = render(
      <Notification
        removeNotification={removeNotification}
        success={success}
        status={COMPLETE_STATUS}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders error message when status is ERROR_STATUS', () => {
    const error = {
      message: 'Error message',
    };
    const { container } = render(
      <Notification
        removeNotification={removeNotification}
        error={error}
        status={ERROR_STATUS}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
