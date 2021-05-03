import { waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '@utils/testUtils';
import React from 'react';
import SearchBanner from './container';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('SearchBanner Component', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('navigates to /search/:query when the search input is valid', async () => {
    const { getByText, getByPlaceholderText } = renderWithRouter(
      <SearchBanner />
    );

    const input = getByPlaceholderText(/What do you want to watch\?/i);
    userEvent.type(input, 'A film');

    const searchButton = getByText(/Search/i);
    userEvent.click(searchButton);

    await waitFor(() => {
      expect(mockHistoryPush).toHaveBeenCalledTimes(1);
      expect(mockHistoryPush).toHaveBeenCalledWith('/search/A film');
    });
  });
});
