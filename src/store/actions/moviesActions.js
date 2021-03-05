/* eslint-disable import/prefer-default-export */
import MovieServiceAPI from '@services/MovieServiceAPI';

export const MOVIES_ACTIONS = {
  FETCH_MOVIES: 'FETCH_MOVIES',
  MOVIES_FETCHED: 'MOVIES_FETCHED',
  MOVIES_FETCHED_FAILURE: 'MOVIES_FETCHED_FAILURE',

  ADD_MOVIE: 'ADD_MOVIE',
  MOVIE_ADDED: 'MOVIE_ADDED',
  MOVIE_ADDED_FAILURE: 'MOVIE_ADDED_FAILURE',

  DELETE_MOVIE: 'DELETE_MOVIE',
  MOVIE_DELETED: 'MOVIE_DELETED',
  MOVIE_DELETED_FAILURE: 'MOVIE_DELETED_FAILURE',

  UPDATE_MOVIE: 'UPDATE_MOVIE',
  MOVIE_UPDATED: 'MOVIE_UPDATED',
  MOVIE_UPDATED_FAILURE: 'MOVIE_UPDATED_FAILURE',

  APPLY_SORT: 'APPLY_SORT',

  APPLY_FILTER: 'APPLY_FILTER',
};

function fetchMovies() {
  return {
    type: MOVIES_ACTIONS.FETCH_MOVIES,
  };
}

function moviesFetched(response) {
  return {
    type: MOVIES_ACTIONS.MOVIES_FETCHED,
    payload: response,
  };
}

function moviesFetchedFailure(error) {
  return {
    type: MOVIES_ACTIONS.MOVIES_FETCHED_FAILURE,
    error,
  };
}

function addMovie(movie) {
  return {
    type: MOVIES_ACTIONS.ADD_MOVIE,
    payload: movie,
  };
}

function movieAdded(response) {
  return {
    type: MOVIES_ACTIONS.MOVIE_ADDED,
    payload: response,
  };
}

function movieAddedFailure(error) {
  return {
    type: MOVIES_ACTIONS.MOVIE_ADDED_FAILURE,
    error,
  };
}

function updateMovie(movie) {
  return {
    type: MOVIES_ACTIONS.UPDATE_MOVIE,
    payload: movie,
  };
}

function movieUpdated(response) {
  return {
    type: MOVIES_ACTIONS.MOVIE_UPDATED,
    payload: response,
  };
}

function movieUpdatedFailure(error) {
  return {
    type: MOVIES_ACTIONS.MOVIE_UPDATED_FAILURE,
    error,
  };
}

function deleteMovie(movieId) {
  return {
    type: MOVIES_ACTIONS.DELETE_MOVIE,
    payload: movieId,
  };
}

function movieDeleted(response) {
  return {
    type: MOVIES_ACTIONS.MOVIE_DELETED,
    payload: response,
  };
}

function movieDeletedFailure(error) {
  return {
    type: MOVIES_ACTIONS.MOVIE_DELETED_FAILURE,
    error,
  };
}

export function getMovies() {
  return (dispatch, getState) => {
    dispatch(fetchMovies());

    const { movies: moviesState } = getState();

    return MovieServiceAPI.getAll({
      sortBy: moviesState.sortBy,
      sortOrder: moviesState.sortOrder,
      filter: moviesState.filter,
      offset: moviesState.offset,
      limit: moviesState.limit,
    })
      .then((response) => dispatch(moviesFetched(response)))
      .catch((error) => dispatch(moviesFetchedFailure(error)));
  };
}

export function addMovieAsync(movie) {
  return (dispatch) => {
    dispatch(addMovie(movie));

    return MovieServiceAPI.add(movie)
      .then((response) => dispatch(movieAdded(response)))
      .then(() => dispatch(getMovies()))
      .catch((error) => dispatch(movieAddedFailure(error)));
  };
}

export function updateMovieAsync(movie) {
  return (dispatch) => {
    dispatch(updateMovie(movie));

    return MovieServiceAPI.update(movie)
      .then((response) => dispatch(movieUpdated(response)))
      .catch((error) => dispatch(movieUpdatedFailure(error)));
  };
}

export function deleteMovieAsync(movieId) {
  return (dispatch) => {
    dispatch(deleteMovie(movieId));

    return MovieServiceAPI.delete(movieId)
      .then((response) => dispatch(movieDeleted(response)))
      .then(() => dispatch(getMovies()))
      .catch((error) => dispatch(movieDeletedFailure(error)));
  };
}

export function applySort(sortOption) {
  return {
    type: MOVIES_ACTIONS.APPLY_SORT,
    payload: sortOption,
  };
}

export function applyFilter(filterOption) {
  return {
    type: MOVIES_ACTIONS.APPLY_FILTER,
    payload: filterOption,
  };
}
