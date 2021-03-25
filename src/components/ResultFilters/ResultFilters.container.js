import withWrapper from '@components/hocs/WithWrapper';
import ResultFilterItem from '@components/ResultFilters/ResultFilterItem';
import ResultFilterSort from '@components/ResultFilters/ResultFilterSort';
import { applyFilterCreator, applySortCreator } from '@store/action-creators/moviesActionCreators';
import { moviesFilterSelector, moviesSortBySelector } from '@store/selectors/moviesSelectors';
import PropTypes from 'prop-types';
import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import { AvailableFilters, SortOptions } from './ResultFilters.constant';

function ResultFiltersContainer({
  sortBy,
  filters,
  dispatch,
}) {
  const handleResultFilterClick = useCallback((filter) => {
    dispatch(applyFilterCreator([filter.value]));
  }, []);

  const getResultFilterItem = useCallback((filter) => (
    <ResultFilterItem
      key={`result-filter-${filter.value}`}
      isActive={filters.includes(filter.value)}
      filter={filter}
      onClick={handleResultFilterClick}
    >
      {filter.label}
    </ResultFilterItem>
  ), [filters]);

  const handleSortOnChange = useCallback((option) => {
    dispatch(applySortCreator(option));
  }, []);

  return (
    <ul className="result-filter flex">
      {AvailableFilters.map(getResultFilterItem)}

      <ResultFilterItem classes="result-filter__item--last">
        <ResultFilterSort
          options={SortOptions}
          value={sortBy}
          onChange={handleSortOnChange}
        />
      </ResultFilterItem>
    </ul>
  );
}

ResultFiltersContainer.propTypes = {
  sortBy: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  sortBy: moviesSortBySelector(state),
  filters: moviesFilterSelector(state),
});

export default connect(mapStateToProps)(memo(withWrapper(ResultFiltersContainer)));
