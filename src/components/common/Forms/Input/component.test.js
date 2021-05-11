import React from 'react';
import { render } from '@testing-library/react';

import Input from './component';

const mockFn = jest.fn();

describe('Input Component', () => {
  it('renders with provided text', () => {
    const { container } = render(
      <Input onChange={mockFn}>Input component</Input>
    );

    expect(container).toMatchSnapshot();
  });
});
