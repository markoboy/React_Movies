import { formatMovieData } from '@components/features/ModalForm/utils';
import {
  COMPLETE_STATUS,
  ERROR_STATUS,
  IDLE_STATUS,
  LOADING_STATUS
} from '@constants/StatusTypes';
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

export const ADD_MOVIE_SUCCESS_MESSAGE = 'The movie has been added to database successfully';
export const DELETE_MOVIE_SUCCESS_MESSAGE = 'The movie has been deleted from database successfully';
export const UPDATE_MOVIE_SUCCESS_MESSAGE = 'The movie has been updated to database successfully';

export const initialMoviesState = {
  status: IDLE_STATUS,
  items: [],
  limit: 12,
  offset: 0,
  totalAmount: 0,
  sortBy: 'release_date',
  // Default searchBy to title as there is no requirement as of what search should search on
  searchBy: 'title',
  sortOrder: 'desc',
  filter: [''],
  selectedMovie: null,
  error: null,
  success: null,

  // Used to invalidate the movies list in order to fetch a new list
  // By increasing it's value the SearchResults container will make a new fetch call
  invalidate: 0,
};

export default function moviesReducer(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIE:
    case DELETE_MOVIE:
    case UPDATE_MOVIE:
    case FETCH_MOVIES:
    case SELECT_MOVIE:
      return {
        ...state,
        status: LOADING_STATUS,
      };

    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        status: COMPLETE_STATUS,
        invalidate: state.invalidate + 1,
        success: {
          message: ADD_MOVIE_SUCCESS_MESSAGE,
        },
      };

    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        status: COMPLETE_STATUS,
        invalidate: state.invalidate + 1,
        success: {
          message: DELETE_MOVIE_SUCCESS_MESSAGE,
        },
      };

    case UPDATE_MOVIE_SUCCESS:
      return {
        ...state,
        status: COMPLETE_STATUS,
        items: state.items.map((movie) => {
          if (movie.id === action.payload.id) {
            return formatMovieData(action.payload);
          }

          return movie;
        }),
        success: {
          message: UPDATE_MOVIE_SUCCESS_MESSAGE,
        },
      };

    case ADD_MOVIE_FAILURE:
    case DELETE_MOVIE_FAILURE:
    case UPDATE_MOVIE_FAILURE:
    case FETCH_MOVIES_FAILURE:
    case SELECT_MOVIE_FAILURE:
      return {
        ...state,
        status: ERROR_STATUS,
        error: action.error,
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        status: COMPLETE_STATUS,
        items: action.payload.data.map(formatMovieData),
        totalAmount: action.payload.totalAmount,
      };

    case APPLY_SORT:
      return {
        ...state,
        sortBy: action.payload.value,
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
        status: COMPLETE_STATUS,
      };

    case REMOVE_NOTIFICATION:
      return {
        ...state,
        error: null,
        success: null,
      };

    default:
      return state;
  }
}
