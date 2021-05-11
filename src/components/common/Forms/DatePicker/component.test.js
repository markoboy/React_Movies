import React from 'react';
import { render } from '@testing-library/react';

import DatePicker from './component';

jest.mock('react-date-picker/dist/entry.nostyle', () => () => 'Mock Component');
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
