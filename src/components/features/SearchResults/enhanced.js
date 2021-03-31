import {
  moviesFilterSelector,
  moviesInvalidateSelector,
  moviesSortBySelector,
  moviesStatusSelector,
  moviesTotalAmountSelector,
} from '@store/selectors/moviesSelectors';
import { fetchMovies } from '@store/thunks/moviesThunk';
import { memo } from 'react';
import { connect } from 'react-redux';
import SearchResultsContainer from './container';

const mapStateToProps = (state) => ({
  status: moviesStatusSelector(state),
  totalAmount: moviesTotalAmountSelector(state),
  sortBy: moviesSortBySelector(state),
  filter: moviesFilterSelector(state),
  invalidate: moviesInvalidateSelector(state),
});

const mapDispatchToProps = {
  fetchMovies,
};

const SearchResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(SearchResultsContainer));

export default SearchResults;
