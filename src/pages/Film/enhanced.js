import {
  moviesStatusSelector,
  selectedMovieSelector,
} from '@store/selectors/moviesSelectors';
import { selectMovie } from '@store/thunks/moviesThunk';
import { connect } from 'react-redux';
import FilmContainer from './container';

const mapStateToProps = (state) => ({
  selectedMovie: selectedMovieSelector(state),
  status: moviesStatusSelector(state),
});

const mapDispatchToProps = {
  selectMovie,
};

const Film = connect(mapStateToProps, mapDispatchToProps)(FilmContainer);

export default Film;
