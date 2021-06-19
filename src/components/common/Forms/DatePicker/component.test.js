import React from 'react';
import { render } from '@testing-library/react';

import DatePicker from './component';

jest.mock('react-flatpickr');
const mockFn = jest.fn();

describe('DatePicker Component', () => {
  it('renders DatePicker Component with provided label', () => {
    const { container } = render(
      <DatePicker onChange={mockFn} label="Date picker" />
    );

    expect(container).toMatchSnapshot();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
