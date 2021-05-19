import React from 'react';
import { renderWithRouter } from '@utils/testUtils';

import BrandLogo from './component';

describe('BrandLogo Component', () => {
  it('renders BrandLogo Component with provided text', () => {
    const { container, getByText } = renderWithRouter(<BrandLogo name="netflix" subName="roulette" />);

    const header = getByText(/netflix/);

    expect(header).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
