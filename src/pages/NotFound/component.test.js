import React from 'react';

import { renderWithRouter } from '@utils/testUtils';
import NotFound from './component';

describe('NotFound Page', () => {
  it('renders NotFound Page', () => {
    const { container } = renderWithRouter(<NotFound />);

    expect(container).toMatchSnapshot();
  });
});
