import StatusTypes from '@constants/StatusTypes';
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
} from '@store/action-types/moviesActionTypes';

const initalMoviesState = {
  status: StatusTypes.IDLE,
  movies: [],
  limit: 12,
  offset: 0,
  totalAmount: 0,
  error: null,
  sortBy: '',
  sortOrder: 'asc',
  filter: [],
  selectedMovie: null,
};

const formatMovie = (movie) => ({
  ...movie,
  releaseDate: new Date(movie.release_date),
  image: movie.poster_path,
});

export default function moviesReducer(state = initalMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIE:
    case DELETE_MOVIE:
    case UPDATE_MOVIE:
    case FETCH_MOVIES:
    case SELECT_MOVIE:
      return {
        ...state,
        status: StatusTypes.LOADING,
      };

    case ADD_MOVIE_SUCCESS:
    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        status: StatusTypes.COMPLETE,
      };

    case UPDATE_MOVIE_SUCCESS:
      return {
        ...state,
        status: StatusTypes.COMPLETE,
        movies: state.movies.map((movie) => {
          if (movie.id === action.payload.id) {
            return formatMovie(action.payload);
          }

          return movie;
        }),
      };

    case ADD_MOVIE_FAILURE:
    case DELETE_MOVIE_FAILURE:
    case UPDATE_MOVIE_FAILURE:
    case FETCH_MOVIES_FAILURE:
    case SELECT_MOVIE_FAILURE:
      return {
        ...state,
        status: StatusTypes.ERROR,
        error: action.error,
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        status: StatusTypes.COMPLETE,
        movies: action.payload.data.map(formatMovie),
        totalAmount: action.payload.totalAmount,
      };

    case APPLY_SORT:
      return {
        ...state,
        sortBy: action.payload.sortBy,
        sortOrder: action.payload.sortOrder,
      };

    case APPLY_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case SELECT_MOVIE_SUCCESS:
      return {
        ...state,
        selectedMovie: action.payload,
        status: StatusTypes.COMPLETE,
      };

    default:
      return state;
  }
}
