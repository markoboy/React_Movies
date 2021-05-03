import MovieServiceAPI from '@services/MovieServiceAPI';
import {
  ADD_MOVIE,
  ADD_MOVIE_FAILURE,
  ADD_MOVIE_SUCCESS,
  DELETE_MOVIE,
  DELETE_MOVIE_FAILURE,
  DELETE_MOVIE_SUCCESS,
  FETCH_MOVIES,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS,
  SELECT_MOVIE,
  SELECT_MOVIE_FAILURE,
  SELECT_MOVIE_SUCCESS,
  UPDATE_MOVIE,
  UPDATE_MOVIE_FAILURE,
  UPDATE_MOVIE_SUCCESS,
} from '@store/action-types/moviesActionTypes';
import moviesReducer from '@store/reducers/moviesReducer';
import {
  addMovie,
  deleteMovie,
  fetchMovies,
  selectMovie,
  updateMovie,
} from './moviesThunk';

jest.mock('@services/MovieServiceAPI');

describe('Movies Thunk', () => {
  let dispatch;
  let defaultState;
  let getState;

  beforeEach(() => {
    dispatch = jest.fn();

    defaultState = moviesReducer(undefined, {});

    getState = jest.fn(() => ({
      movies: defaultState,
    }));
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('calls dispatch with correct initial, success and failure types when fetchMovies is called', async () => {
    jest
      .spyOn(MovieServiceAPI, 'getAll')
      .mockImplementation(() => Promise.resolve({ data: [] }));

    await fetchMovies({ search: '' })(dispatch, getState);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, { type: FETCH_MOVIES });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: FETCH_MOVIES_SUCCESS,
      payload: { data: [] },
    });

    dispatch.mockReset();

    jest
      .spyOn(MovieServiceAPI, 'getAll')
      .mockImplementation(() =>
        Promise.reject({ message: 'An error occurred' })
      );

    await fetchMovies({ search: '' })(dispatch, getState);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, { type: FETCH_MOVIES });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: FETCH_MOVIES_FAILURE,
      error: { message: 'An error occurred' },
    });
  });

  it('calls dispatch with correct initial, success and failure types when addMovie is called', async () => {
    const movie = { id: 1, title: 'A movie title' };
    jest
      .spyOn(MovieServiceAPI, 'add')
      .mockImplementation(() => Promise.resolve(movie));

    await addMovie(movie)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ADD_MOVIE,
      payload: movie,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: ADD_MOVIE_SUCCESS,
      payload: movie,
    });

    dispatch.mockReset();

    jest
      .spyOn(MovieServiceAPI, 'add')
      .mockImplementation(() =>
        Promise.reject({ message: 'An error occurred' })
      );

    await addMovie(movie)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ADD_MOVIE,
      payload: movie,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: ADD_MOVIE_FAILURE,
      error: { message: 'An error occurred' },
    });
  });

  it('calls dispatch with correct initial, success and failure types when updateMovie is called', async () => {
    const movie = { id: 1, title: 'A movie title' };
    jest
      .spyOn(MovieServiceAPI, 'update')
      .mockImplementation(() => Promise.resolve(movie));

    await updateMovie(movie)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: UPDATE_MOVIE,
      payload: movie,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: UPDATE_MOVIE_SUCCESS,
      payload: movie,
    });

    dispatch.mockReset();

    jest
      .spyOn(MovieServiceAPI, 'update')
      .mockImplementation(() =>
        Promise.reject({ message: 'An error occurred' })
      );

    await updateMovie(movie)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: UPDATE_MOVIE,
      payload: movie,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: UPDATE_MOVIE_FAILURE,
      error: { message: 'An error occurred' },
    });
  });

  it('calls dispatch with correct initial, success and failure types when deleteMovie is called', async () => {
    const movie = 1;
    jest
      .spyOn(MovieServiceAPI, 'delete')
      .mockImplementation(() => Promise.resolve(movie));

    await deleteMovie(movie)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: DELETE_MOVIE,
      payload: movie,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: DELETE_MOVIE_SUCCESS,
      payload: movie,
    });

    dispatch.mockReset();

    jest
      .spyOn(MovieServiceAPI, 'delete')
      .mockImplementation(() =>
        Promise.reject({ message: 'An error occurred' })
      );

    await deleteMovie(movie)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: DELETE_MOVIE,
      payload: movie,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: DELETE_MOVIE_FAILURE,
      error: { message: 'An error occurred' },
    });
  });

  it('calls dispatch with correct initial, success and failure types when selectMovie is called', async () => {
    const movie = { id: 1, title: 'A movie title' };
    jest
      .spyOn(MovieServiceAPI, 'getOne')
      .mockImplementation(() => Promise.resolve(movie));

    await selectMovie(movie.id)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: SELECT_MOVIE,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: SELECT_MOVIE_SUCCESS,
      payload: movie,
    });

    dispatch.mockReset();

    jest
      .spyOn(MovieServiceAPI, 'getOne')
      .mockImplementation(() =>
        Promise.reject({ message: 'An error occurred' })
      );

    await selectMovie(movie.id)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: SELECT_MOVIE,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: SELECT_MOVIE_FAILURE,
      error: { message: 'An error occurred' },
    });
  });
});
