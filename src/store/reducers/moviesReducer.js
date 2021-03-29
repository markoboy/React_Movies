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

const initalMoviesState = {
  status: IDLE_STATUS,
  items: [],
  limit: 12,
  offset: 0,
  totalAmount: 0,
  sortBy: 'release_date',
  sortOrder: 'desc',
  filter: [''],
  selectedMovie: null,
  error: null,
  success: null,
};

export default function moviesReducer(state = initalMoviesState, action) {
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
        success: {
          message: 'The movie has been added to database successfully',
        },
      };

    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        status: COMPLETE_STATUS,
        success: {
          message: 'The movie has been deleted from database successfully',
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
          message: 'The movie has been updated to database successfully',
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
