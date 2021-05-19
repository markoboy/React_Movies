import React from 'react';
import { render } from '@testing-library/react';

import Button from './component';

describe('Button Component', () => {
  it('renders Button Component with provided text', () => {
    const { container } = render(<Button>Button component</Button>);

    expect(container).toMatchSnapshot();
  });
});
