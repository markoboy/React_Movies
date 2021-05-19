import React from 'react';
import { render } from '@testing-library/react';

import ResultNoFound from './component';

describe('ResultNoFound Component', () => {
  it('renders with No Movie Found text', () => {
    const { container } = render(<ResultNoFound />);

    expect(container).toMatchSnapshot();
  });
});
