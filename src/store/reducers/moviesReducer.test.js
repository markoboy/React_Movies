import {
  COMPLETE_STATUS,
  ERROR_STATUS,
  LOADING_STATUS,
} from '@constants/StatusTypes';
import {
  addMovieCreator,
  addMovieFailureCreator,
  addMovieSuccessCreator,
  applySortCreator,
  deleteMovieCreator,
  deleteMovieFailureCreator,
  deleteMovieSuccessCreator,
  fetchMoviesCreator,
  fetchMoviesFailureCreator,
  fetchMoviesSuccessCreator,
  removeNotificationCreator,
  selectMovieCreator,
  selectMovieFailureCreator,
  updateMovieCreator,
  updateMovieFailureCreator,
  updateMovieSuccessCreator,
} from '@store/action-creators/moviesActionCreators';
import moviesReducer, {
  ADD_MOVIE_SUCCESS_MESSAGE,
  DELETE_MOVIE_SUCCESS_MESSAGE,
  UPDATE_MOVIE_SUCCESS_MESSAGE,
} from './moviesReducer';

describe('Movies Reducer', () => {
  let defaultState;

  beforeEach(() => {
    defaultState = moviesReducer(undefined, {});
  });

  it('updates status to LOADING_STATUS when action is ADD, DELETE, UPDATE, SELECT or FETCH', () => {
    const addState = moviesReducer(defaultState, addMovieCreator({}));
    expect(addState.status).toBe(LOADING_STATUS);

    const deleteState = moviesReducer(defaultState, deleteMovieCreator(1));
    expect(deleteState.status).toBe(LOADING_STATUS);

    const updateState = moviesReducer(defaultState, updateMovieCreator({}));
    expect(updateState.status).toBe(LOADING_STATUS);

    const selectState = moviesReducer(defaultState, selectMovieCreator());
    expect(selectState.status).toBe(LOADING_STATUS);

    const fetchState = moviesReducer(defaultState, fetchMoviesCreator());
    expect(fetchState.status).toBe(LOADING_STATUS);
  });

  it('updates status to ERROR_STATUS when action of ADD, DELETE, UPDATE, SELECT or FETCH fails', () => {
    const addState = moviesReducer(
      defaultState,
      addMovieFailureCreator({ message: 'Failed to add a movie' })
    );
    expect(addState.status).toBe(ERROR_STATUS);
    expect(addState.error.message).toBe('Failed to add a movie');

    const deleteState = moviesReducer(
      defaultState,
      deleteMovieFailureCreator({
        message: 'Failed to remove a movie',
      })
    );
    expect(deleteState.status).toBe(ERROR_STATUS);
    expect(deleteState.error.message).toBe('Failed to remove a movie');

    const updateState = moviesReducer(
      defaultState,
      updateMovieFailureCreator({
        message: 'Failed to update a movie',
      })
    );
    expect(updateState.status).toBe(ERROR_STATUS);
    expect(updateState.error.message).toBe('Failed to update a movie');

    const selectState = moviesReducer(
      defaultState,
      selectMovieFailureCreator({
        message: 'Failed to select a movie',
      })
    );
    expect(selectState.status).toBe(ERROR_STATUS);
    expect(selectState.error.message).toBe('Failed to select a movie');

    const fetchState = moviesReducer(
      defaultState,
      fetchMoviesFailureCreator({
        message: 'Failed to fetch movies',
      })
    );
    expect(fetchState.status).toBe(ERROR_STATUS);
    expect(fetchState.error.message).toBe('Failed to fetch movies');
  });

  it('updates state status, invalidate and success.message  when action is ADD_MOVIE_SUCCESS', () => {
    const addMovieSuccessState = moviesReducer(
      defaultState,
      addMovieSuccessCreator({})
    );

    expect(addMovieSuccessState).toMatchObject({
      ...defaultState,
      status: COMPLETE_STATUS,
      invalidate: defaultState.invalidate + 1,
      success: {
        message: ADD_MOVIE_SUCCESS_MESSAGE,
      },
    });
  });

  it('updates state status, invalidate and success.message  when action is DELETE_MOVIE_SUCCESS', () => {
    const deleteMoviesSuccess = moviesReducer(
      defaultState,
      deleteMovieSuccessCreator()
    );

    expect(deleteMoviesSuccess).toMatchObject({
      ...defaultState,
      status: COMPLETE_STATUS,
      invalidate: defaultState.invalidate + 1,
      success: {
        message: DELETE_MOVIE_SUCCESS_MESSAGE,
      },
    });
  });

  it('updates state status, items and success.message  when action is UPDATE_MOVIE_SUCCESS', () => {
    const prevMovies = [
      {
        id: 1,
        title: 'A movie title',
      },
      {
        id: 2,
        title: 'A different title',
      },
    ];

    const newMovie = {
      id: 1,
      title: 'An updated movie title',
    };

    const updateMovieSuccess = moviesReducer(
      { ...defaultState, items: prevMovies },
      updateMovieSuccessCreator(newMovie)
    );

    const expectedItems = prevMovies.slice(1);
    expectedItems.unshift(newMovie);

    expect(updateMovieSuccess).toMatchObject({
      ...defaultState,
      status: COMPLETE_STATUS,
      items: expectedItems,
      success: {
        message: UPDATE_MOVIE_SUCCESS_MESSAGE,
      },
    });
  });

  it('updates state status, items and totalAmount when action is FETCH_MOVIES_SUCCESS', () => {
    const fetchMoviesSuccess = moviesReducer(
      defaultState,
      fetchMoviesSuccessCreator({
        data: [
          {
            id: 1,
            title: 'A movie title',
          },
        ],
        totalAmount: 1,
      })
    );

    expect(fetchMoviesSuccess.items.length).toBe(1);
    expect(fetchMoviesSuccess.totalAmount).toBe(1);
    expect(fetchMoviesSuccess.status).toBe(COMPLETE_STATUS);
  });

  it('updates state sortBy and sortOrder when action is APPLY_SORT', () => {
    const applySort = moviesReducer(
      defaultState,
      applySortCreator({ value: 'title', sortOrder: 'asc' })
    );

    expect(applySort.sortOrder).toBe('asc');
    expect(applySort.sortBy).toBe('title');
  });

  it('nullifies error and success when action is REMOVE_NOTIFICATION', () => {
    const removeNotification = moviesReducer(
      {
        ...defaultState,
        error: { message: 'An error' },
        success: { message: 'A success' },
      },
      removeNotificationCreator()
    );

    expect(removeNotification).toMatchObject({
      ...defaultState,
      error: null,
      success: null,
    });
  });
});
