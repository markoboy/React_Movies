import ResultFilterComponent from '@components/ResultFilterComponent/ResultFilterComponent';
import ResultFilterItemComponent from '@components/ResultFilterItemComponent/ResultFilterItemComponent';
import ResultFilterSortComponent from '@components/ResultFilterSortComponent/ResultFilterSortComponent';
import MovieService from '@services/MovieService';
import React from 'react';
import PropTypes from 'prop-types';

export default function ResultFilterContainer({
  sortOptions,
  activeSortOption,
  onSortOptionChange,
}) {
  const availableFilters = MovieService.getAvailableFilters();
  const activeFilter = availableFilters[0];

  return (
    <ResultFilterComponent>
      {availableFilters.map((filter) => (
        <ResultFilterItemComponent
          key={filter.id}
          isActive={filter === activeFilter}
        >
          {filter.genre}
        </ResultFilterItemComponent>
      ))}

      <ResultFilterItemComponent classes="result-filter__item--last">
        <ResultFilterSortComponent
          options={sortOptions}
          selectedOption={activeSortOption}
          onChange={onSortOptionChange}
        />
      </ResultFilterItemComponent>
    </ResultFilterComponent>
  );
}

const sortOptionShape = PropTypes.shape({
  id: PropTypes.string,
  sort: PropTypes.string,
});

ResultFilterContainer.propTypes = {
  sortOptions: PropTypes.arrayOf(sortOptionShape).isRequired,
  activeSortOption: sortOptionShape.isRequired,
  onSortOptionChange: PropTypes.func.isRequired,
};
