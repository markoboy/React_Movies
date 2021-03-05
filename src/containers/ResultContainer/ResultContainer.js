import withWrapper from '@components/HigherOrder/WithWrapper';
import ErrorBoundary from '@containers/ErrorBoundary/ErrorBoundary';
import ResultFilterContainer from '@containers/ResultFilterContainer/ResultFilterContainer';
import ResultListContainer from '@containers/ResultListContainer/ResultListContainer';
import MovieService, { SortOptions } from '@services/MovieService';
import { moviesSelector } from '@store/selectors/moviesSelectors';
import PropTypes from 'prop-types';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { connect } from 'react-redux';

const ResultFilterContainerWithWrapper = withWrapper(ResultFilterContainer);
const ResultListContainerWithWrapper = withWrapper(ResultListContainer);

function ResultContainer({ movies }) {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const [sortOptions, setSortOptions] = useState(null);

  const [activeSortOption, setActiveSortOption] = useState(null);

  const getFilteredMovies = useCallback(() => {
    if (activeSortOption) {
      if (activeSortOption.sort === SortOptions.TITLE) {
        return MovieService.sortByTitle(movies);
      }

      if (activeSortOption.sort === SortOptions.RELEASE) {
        return MovieService.sortByDate(movies);
      }
    }

    return movies;
  }, [movies, activeSortOption]);

  useEffect(() => {
    const sortOptionsResponse = MovieService.getSortOptions();
    setSortOptions(sortOptionsResponse);
    setActiveSortOption(sortOptionsResponse[0]);
  }, []);

  useEffect(() => {
    setFilteredMovies(getFilteredMovies(movies));
  }, [movies, activeSortOption]);

  return useMemo(() => (
    <div className="background--black flex flex--column flex--grow">
      {sortOptions && (
        <ResultFilterContainerWithWrapper
          sortOptions={sortOptions}
          activeSortOption={activeSortOption}
          onSortOptionChange={setActiveSortOption}
        />
      )}
      <ErrorBoundary>
        <ResultListContainerWithWrapper movies={filteredMovies} />
      </ErrorBoundary>
    </div>
  ), [filteredMovies, activeSortOption]);
}

ResultContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  movies: moviesSelector(state),
});

export default connect(mapStateToProps)(ResultContainer);
