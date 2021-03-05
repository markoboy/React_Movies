const generateMoviesActionType = (action) => `[MOVIES] ${action}`;

export const FETCH_MOVIES = generateMoviesActionType('FETCH_MOVIES');
export const FETCH_MOVIES_SUCCESS = generateMoviesActionType('FETCH_MOVIES_SUCCESS');
export const FETCH_MOVIES_FAILURE = generateMoviesActionType('MOVIES_FETCHED_FAILURE');

export const ADD_MOVIE = generateMoviesActionType('ADD_MOVIE');
export const ADD_MOVIE_SUCCESS = generateMoviesActionType('ADD_MOVIE_SUCCESS');
export const ADD_MOVIE_FAILURE = generateMoviesActionType('ADD_MOVIE_FAILURE');

export const DELETE_MOVIE = generateMoviesActionType('DELETE_MOVIE');
export const DELETE_MOVIE_SUCCESS = generateMoviesActionType('DELETE_MOVIE_SUCCESS');
export const DELETE_MOVIE_FAILURE = generateMoviesActionType('DELETE_MOVIE_FAILURE');

export const UPDATE_MOVIE = generateMoviesActionType('UPDATE_MOVIE');
export const UPDATE_MOVIE_SUCCESS = generateMoviesActionType('UPDATE_MOVIE_SUCCESS');
export const UPDATE_MOVIE_FAILURE = generateMoviesActionType('UPDATE_MOVIE_FAILURE');

export const APPLY_SORT = generateMoviesActionType('APPLY_SORT');

export const APPLY_FILTER = generateMoviesActionType('APPLY_FILTER');

export const SELECT_MOVIE = generateMoviesActionType('SELECT_MOVIE');
export const SELECT_MOVIE_SUCCESS = generateMoviesActionType('SELECT_MOVIE_SUCCESS');
export const SELECT_MOVIE_FAILURE = generateMoviesActionType('SELECT_MOVIE_FAILURE');
