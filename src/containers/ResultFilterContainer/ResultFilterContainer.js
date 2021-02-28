import ResultFilterComponent from '@components/ResultFilterComponent/ResultFilterComponent';
import ResultFilterItemComponent from '@components/ResultFilterItemComponent/ResultFilterItemComponent';
import ResultFilterSortComponent from '@components/ResultFilterSortComponent/ResultFilterSortComponent';
import MovieService from '@services/MovieService';
import React from 'react';

export default function ResultFilterContainer() {
  const availableFilters = MovieService.getAvailableFilters();
  const activeFilter = availableFilters[0];

  const sortOptions = MovieService.getSortOptions();
  const activeSortOption = sortOptions[0];

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
        <ResultFilterSortComponent options={sortOptions} selectedOption={activeSortOption} />
      </ResultFilterItemComponent>
    </ResultFilterComponent>
  );
}
