import MovieServiceAPI from '@services/MovieServiceAPI';
import {
  addMovieCreator,
  deleteMovieCreator,
  fetchMoviesCreator,
  addMovieSuccessCreator,
  addMovieFailureCreator,
  deleteMovieSuccessCreator,
  deleteMovieFailureCreator,
  fetchMoviesSuccessCreator,
  fetchMoviesFailureCreator,
  updateMovieSuccessCreator,
  updateMovieFailureCreator,
  selectMovieCreator,
  selectMovieFailureCreator,
  selectMovieSuccessCreator,
  updateMovieCreator,
} from '@store/action-creators/moviesActionCreators';
import { moviesSelector } from '@store/selectors/moviesSelectors';

export const fetchMovies = () => (dispatch, getState) => {
  dispatch(fetchMoviesCreator());

  const { movies: moviesState } = getState();

  return MovieServiceAPI.getAll({
    sortBy: moviesState.sortBy,
    sortOrder: moviesState.sortOrder,
    filter: moviesState.filter,
    offset: moviesState.offset,
    limit: moviesState.limit,
  })
    .then((response) => dispatch(fetchMoviesSuccessCreator(response)))
    .catch((error) => dispatch(fetchMoviesFailureCreator(error)));
};

export const addMovie = (movie) => (dispatch) => {
  dispatch(addMovieCreator(movie));

  return MovieServiceAPI.add(movie)
    .then((response) => dispatch(addMovieSuccessCreator(response)))
    .then(() => dispatch(fetchMovies()))
    .catch((error) => dispatch(addMovieFailureCreator(error)));
};

export const updateMovie = (movie) => (dispatch) => {
  dispatch(updateMovieCreator(movie));

  return MovieServiceAPI.update(movie)
    .then((response) => dispatch(updateMovieSuccessCreator(response)))
    .catch((error) => dispatch(updateMovieFailureCreator(error)));
};

export const deleteMovie = (movieId) => (dispatch) => {
  dispatch(deleteMovieCreator(movieId));

  return MovieServiceAPI.delete(movieId)
    .then((response) => dispatch(deleteMovieSuccessCreator(response)))
    .then(() => dispatch(fetchMovies()))
    .catch((error) => dispatch(deleteMovieFailureCreator(error)));
};

export const selectMovie = (selectedMovieId) => (dispatch, getState) => {
  const moviesState = moviesSelector(getState());

  const movie = moviesState.movies.find((m) => m.id === selectedMovieId);

  if (movie) {
    return dispatch(selectMovieSuccessCreator(movie));
  }

  dispatch(selectMovieCreator());

  return MovieServiceAPI.getOne(selectedMovieId)
    .then((response) => dispatch(selectMovieSuccessCreator(response)))
    .catch((error) => dispatch(selectMovieFailureCreator(error)));
};
