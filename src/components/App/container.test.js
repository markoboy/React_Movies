import { COMPLETE_STATUS, LOADING_STATUS } from '@constants/StatusTypes';
import { renderWithStore } from '@utils/testUtils';
import React from 'react';
import App from './container';

describe('App Container', () => {
  let scrollToMock;

  beforeEach(() => {
    jest.clearAllMocks();

    scrollToMock = jest.fn();

    Element.prototype.scrollTo = scrollToMock;
  });

  it('renders a spinner when status is LOADING_STATUS', () => {
    const { container } = renderWithStore(
      <App status={LOADING_STATUS} modalIsOpened={false} />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders components when status is COMPLETE_STATUS', () => {
    const { container } = renderWithStore(
      <App status={COMPLETE_STATUS} modalIsOpened={false} />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders modal when status is COMPLETE_STATUS and modalIsOpened is true', () => {
    const { container } = renderWithStore(
      <App status={COMPLETE_STATUS} modalIsOpened={true} />
    );

    expect(container).toMatchSnapshot();
  });
});
