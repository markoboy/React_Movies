import ResultFilterComponent from '@components/ResultFilterComponent/ResultFilterComponent';
import ResultFilterItemComponent from '@components/ResultFilterItemComponent/ResultFilterItemComponent';
import ResultFilterSortComponent from '@components/ResultFilterSortComponent/ResultFilterSortComponent';
import AvailableFilters from '@constants/AvailableFilters';
import SortOptions from '@constants/SortOptions';
import { applySortCreator } from '@store/action-creators/moviesActionCreators';
import { moviesFilterSelector, moviesSortBySelector } from '@store/selectors/moviesSelectors';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

function ResultFilterContainer({
  sortBy,
  filters,
  dispatch,
}) {
  return (
    <ResultFilterComponent>
      {AvailableFilters.map((filter) => (
        <ResultFilterItemComponent
          key={`result-filter-${filter.value}`}
          isActive={filters.includes(filter.value)}
        >
          {filter.label}
        </ResultFilterItemComponent>
      ))}

      <ResultFilterItemComponent classes="result-filter__item--last">
        <ResultFilterSortComponent
          options={SortOptions}
          value={sortBy}
          onChange={(option) => dispatch(applySortCreator(option))}
        />
      </ResultFilterItemComponent>
    </ResultFilterComponent>
  );
}

ResultFilterContainer.propTypes = {
  sortBy: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  sortBy: moviesSortBySelector(state),
  filters: moviesFilterSelector(state),
});

export default connect(mapStateToProps)(ResultFilterContainer);
