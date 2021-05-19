import React from 'react';
import { render } from '@testing-library/react';

import ErrorBoundaryContainer from './container';

const ErrorChild = () => {
  throw new Error('An error occurred!');
};

describe('ErrorBoundary container', () => {
  it(`renders the ErrorBoundary when an error occurs`, () => {
    const { getByText } = render(
      <ErrorBoundaryContainer>
        <ErrorChild />
      </ErrorBoundaryContainer>
    );

    const errorMessage = getByText(/No Movie Found/);
    expect(errorMessage).toBeDefined();
  });
});
