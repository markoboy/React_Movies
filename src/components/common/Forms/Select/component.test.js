import React from 'react';
import { render } from '@testing-library/react';

import SelectComponent from './component';

jest.mock('react-multi-select-component', () => () => 'Mock Component');
const mockFn = jest.fn();

describe('SelectComponent Component', () => {
  it('renders SelectComponent Component with provided label', () => {
    const { container } = render(
      <SelectComponent options={[]} onChange={mockFn} label="Select an element" />
    );

    expect(container).toMatchSnapshot();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
