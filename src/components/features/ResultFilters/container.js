import ResultFilterItem from '@components/features/ResultFilters/ResultFilterItem';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import ResultFiltersComponent from './component';
import { AvailableFilters, SortOptions } from './constant';

export default function ResultFiltersContainer({
  sortBy,
  filters,
  applyFilter,
  applySort,
}) {
  const handleResultFilterClick = useCallback((filter) => {
    applyFilter([filter.value]);
  }, []);

  const getResultFilterItem = useCallback(
    (filter) => (
      <ResultFilterItem
        key={`result-filter-${filter.value}`}
        isActive={filters.includes(filter.value)}
        filter={filter}
        onClick={handleResultFilterClick}
      >
        {filter.label}
      </ResultFilterItem>
    ),
    [filters]
  );

  return (
    <ResultFiltersComponent
      filters={AvailableFilters.map(getResultFilterItem)}
      sortOptions={SortOptions}
      sortBy={sortBy}
      applySort={applySort}
    />
  );
}

ResultFiltersContainer.propTypes = {
  sortBy: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  applyFilter: PropTypes.func.isRequired,
  applySort: PropTypes.func.isRequired,
};
