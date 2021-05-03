import React from 'react';
import { render } from '@testing-library/react';

import Button from './component';

describe('Button Component', () => {
  it('renders Button Component with provided text', () => {
    const { container, getByText } = render(<Button>Button component</Button>);

    const button = getByText(/Button component/);

    expect(button).toBeDefined();
    expect(container).toMatchSnapshot();
  });
});
