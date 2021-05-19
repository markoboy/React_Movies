import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ResultFilterItem from './container';

describe('ResultFilterItem Component', () => {
  it('triggers onClick event with the provided filter', () => {
    const onClick = jest.fn();
    const filter = { vaue: '', label: 'All' };

    const { getByText } = render(
      <ResultFilterItem onClick={onClick} filter={filter}>
        {filter.label}
      </ResultFilterItem>
    );

    const filterItem = getByText(filter.label);

    expect(filterItem).toBeDefined();

    userEvent.click(filterItem);

    expect(onClick).toBeCalledTimes(1);
    expect(onClick).toBeCalledWith(filter);
  });
});
