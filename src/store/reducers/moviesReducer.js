import StatusTypes from '@constants/StatusTypes';
import { MOVIES_ACTIONS } from '@store/actions/moviesActions';

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
};

export default function moviesReducer(
  state = initalMoviesState,
  action,
) {
  switch (action.type) {
    case MOVIES_ACTIONS.ADD_MOVIE:
    case MOVIES_ACTIONS.DELETE_MOVIE:
    case MOVIES_ACTIONS.UPDATE_MOVIE:
    case MOVIES_ACTIONS.FETCH_MOVIES:
      return {
        ...state,
        status: StatusTypes.LOADING,
      };

    case MOVIES_ACTIONS.MOVIE_ADDED:
    case MOVIES_ACTIONS.MOVIE_DELETED:
    case MOVIES_ACTIONS.MOVIE_UPDATED:
      return {
        ...state,
        status: StatusTypes.COMPLETE,
      };

    case MOVIES_ACTIONS.MOVIE_ADDED_FAILURE:
    case MOVIES_ACTIONS.MOVIE_DELETED_FAILURE:
    case MOVIES_ACTIONS.MOVIE_UPDATED_FAILURE:
    case MOVIES_ACTIONS.MOVIES_FETCHED_FAILURE:
      return {
        ...state,
        status: StatusTypes.ERROR,
        error: action.error,
      };

    case MOVIES_ACTIONS.MOVIES_FETCHED:
      return {
        ...state,
        status: StatusTypes.COMPLETE,
        movies: action.payload.data.map((m) => ({
          ...m,
          releaseDate: new Date(m.release_date),
          image: m.poster_path,
        })),
        totalAmount: action.payload.totalAmount,
      };

    case MOVIES_ACTIONS.APPLY_SORT:
      return {
        ...state,
        sortBy: action.payload.sortBy,
        sortOrder: action.payload.sortOrder,
      };

    case MOVIES_ACTIONS.APPLY_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
}
