import React from 'react';
import { render } from '@testing-library/react';

import FormLabel from './component';

describe('FormLabel Component', () => {
  it('renders with provided label', () => {
    const { container } = render(<FormLabel label="My label" />);

    expect(container).toMatchSnapshot();
  });

  it('doesnt render when label is not provided', () => {
    const { container } = render(<FormLabel />);

    expect(container).toMatchSnapshot();
  });
});
