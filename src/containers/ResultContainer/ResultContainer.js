import withWrapper from '@components/HigherOrder/WithWrapper';
import ErrorBoundary from '@containers/ErrorBoundary/ErrorBoundary';
import ResultFilterContainer from '@containers/ResultFilterContainer/ResultFilterContainer';
import ResultListContainer from '@containers/ResultListContainer/ResultListContainer';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieService, { SortOptions } from '@services/MovieService';

const ResultFilterContainerWithWrapper = withWrapper(ResultFilterContainer);
const ResultListContainerWithWrapper = withWrapper(ResultListContainer);

export default class ResultContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: {
        options: null,
        activeOption: null,
      },
    };
  }

  componentDidMount() {
    const sortOptions = MovieService.getSortOptions();
    const activeSortOption = sortOptions[0];

    this.setState({
      sort: {
        options: sortOptions,
        activeOption: activeSortOption,
      },
    });
  }

  handleSortOptionChange(option) {
    this.setState((state) => ({
      sort: {
        ...state.sort,
        activeOption: option,
      },
    }));
  }

  getFilteredMovies(movies) {
    const { sort } = this.state;

    if (sort.activeOption) {
      if (sort.activeOption.sort === SortOptions.TITLE) {
        return MovieService.sortByTitle(movies);
      }

      if (sort.activeOption.sort === SortOptions.RELEASE) {
        return MovieService.sortByDate(movies);
      }
    }

    return movies;
  }

  render() {
    const { movies } = this.props;
    const { sort } = this.state;

    const filteredMovies = this.getFilteredMovies(movies);

    return (
      <div className="background--black flex flex--column flex--grow">
        {sort.options && (
          <ResultFilterContainerWithWrapper
            sortOptions={sort.options}
            activeSortOption={sort.activeOption}
            onSortOptionChange={(option) => this.handleSortOptionChange(option)}
          />
        )}
        <ErrorBoundary>
          <ResultListContainerWithWrapper movies={filteredMovies} />
        </ErrorBoundary>
      </div>
    );
  }
}

ResultContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
