import {
  ADD_MOVIE,
  APPLY_FILTER,
  APPLY_SORT,
  DELETE_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAILURE,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILURE,
  UPDATE_MOVIE_SUCCESS,
  UPDATE_MOVIE_FAILURE,
  SELECT_MOVIE,
  SELECT_MOVIE_FAILURE,
  SELECT_MOVIE_SUCCESS,
  UPDATE_MOVIE,
  REMOVE_NOTIFICATION,
} from '@store/action-types/moviesActionTypes';

export const fetchMoviesCreator = () => ({
  type: FETCH_MOVIES,
});

export const fetchMoviesSuccessCreator = (response) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: response,
});

export const fetchMoviesFailureCreator = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  error,
});

export const addMovieCreator = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

export const addMovieSuccessCreator = (response) => ({
  type: ADD_MOVIE_SUCCESS,
  payload: response,
});

export const addMovieFailureCreator = (error) => ({
  type: ADD_MOVIE_FAILURE,
  error,
});

export const updateMovieCreator = (movie) => ({
  type: UPDATE_MOVIE,
  payload: movie,
});

export const updateMovieSuccessCreator = (response) => ({
  type: UPDATE_MOVIE_SUCCESS,
  payload: response,
});

export const updateMovieFailureCreator = (error) => ({
  type: UPDATE_MOVIE_FAILURE,
  error,
});

export const deleteMovieCreator = (movieId) => ({
  type: DELETE_MOVIE,
  payload: movieId,
});

export const deleteMovieSuccessCreator = (response) => ({
  type: DELETE_MOVIE_SUCCESS,
  payload: response,
});

export const deleteMovieFailureCreator = (error) => ({
  type: DELETE_MOVIE_FAILURE,
  error,
});

export const selectMovieCreator = () => ({
  type: SELECT_MOVIE,
});

export const selectMovieFailureCreator = (error) => ({
  type: SELECT_MOVIE_FAILURE,
  error,
});

export const selectMovieSuccessCreator = (movie) => ({
  type: SELECT_MOVIE_SUCCESS,
  payload: movie,
});

export const applySortCreator = (sortOption) => ({
  type: APPLY_SORT,
  payload: sortOption,
});

export const applyFilterCreator = (filterOption) => ({
  type: APPLY_FILTER,
  payload: filterOption,
});

export const removeNotificationCreator = () => ({
  type: REMOVE_NOTIFICATION,
});
