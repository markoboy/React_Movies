import PropTypes from 'prop-types';
import React from 'react';
import ResultFilterItem from './ResultFilterItem';
import ResultFilterSort from './ResultFilterSort';

export default function ResultFiltersComponent({
  filters,
  sortBy,
  applySort,
  sortOptions,
}) {
  return (
    <ul className="result-filter flex">
      {filters}

      <ResultFilterItem classes="result-filter__item--last">
        <ResultFilterSort
          options={sortOptions}
          value={sortBy}
          onChange={applySort}
        />
      </ResultFilterItem>
    </ul>
  );
}

ResultFiltersComponent.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.element).isRequired,
  sortBy: PropTypes.string.isRequired,
  applySort: PropTypes.func.isRequired,
  sortOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
