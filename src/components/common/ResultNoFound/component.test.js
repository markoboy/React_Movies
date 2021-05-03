import React from 'react';
import { render } from '@testing-library/react';

import ResultNoFound from './component';

describe('ResultNoFound Component', () => {
  it('renders with No Movie Found text', () => {
    const { container, getByText } = render(<ResultNoFound />);

    const textContainer = getByText(/No Movie Found/);

    expect(textContainer).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
