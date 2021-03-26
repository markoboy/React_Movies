import { modalIsOpenedSelector } from '@store/selectors/modalSelectors';
import {
  moviesFilterSelector,
  moviesSortBySelector,
  moviesStatusSelector,
  selectedMovieSelector,
} from '@store/selectors/moviesSelectors';
import { fetchMovies, selectMovie } from '@store/thunks/moviesThunk';
import { connect } from 'react-redux';
import AppContainer from './container';

const mapStateToProps = (state) => ({
  sortBy: moviesSortBySelector(state),
  filter: moviesFilterSelector(state),
  selectedMovie: selectedMovieSelector(state),
  status: moviesStatusSelector(state),
  modalIsOpened: modalIsOpenedSelector(state),
});

const mapDispatchToProps = {
  fetchMovies,
  selectMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
