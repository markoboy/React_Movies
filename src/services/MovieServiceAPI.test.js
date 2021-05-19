import MovieServiceAPI from './MovieServiceAPI';

jest.mock('@utils/getHttpClient', () => ({
  default: () => {
    let movies = [
      {
        id: 1,
        title: 'A film title',
        poster_path: 'https://film.com/image.jpg',
        overview: 'A great film',
        runtime: 145,
        release_date: undefined,
        genres: ['Documentary'],
      },
    ];

    return {
      get: jest.fn((uri) => {
        if (uri === '/') {
          return movies;
        }

        const [, id] = uri.match(/\/(.*)/);

        return movies.find((m) => m.id === Number(id));
      }),
      post: jest.fn((uri, item) => {
        movies.push(item);

        return item;
      }),
      put: jest.fn((uri, item) => {
        movies = movies.map((movie) => {
          if (movie.id === item.id) {
            return { ...movie, ...item };
          }

          return movie;
        });

        return movies.find((m) => m.id === item.id);
      }),
      delete: jest.fn((movieUri) => {
        const [, id] = movieUri.match(/\/(.*)/);

        movies = movies.filter((movie) => movie.id !== Number(id));
        return Number(id);
      }),
    };
  },
  __esModule: true,
}));

describe('MovieServiceAPI', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('returns all movies when getAll is called', async () => {
    const expected = 1;

    const spy = jest.spyOn(MovieServiceAPI, 'getAll');

    const actual = await MovieServiceAPI.getAll();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(actual.length).toBe(expected);
  });

  it('returns one movie when getOne is called', async () => {
    const expected = 1;

    const spy = jest.spyOn(MovieServiceAPI, 'getOne');

    const actual = await MovieServiceAPI.getOne(1);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(actual.id).toBe(expected);
  });

  it('adds one movie when add is called', async () => {
    const expected = {
      id: 2,
      title: 'A film title',
      poster_path: 'https://film.com/image.jpg',
      overview: 'A great film',
      runtime: 145,
      release_date: undefined,
      genres: ['Documentary'],
    };

    const spy = jest.spyOn(MovieServiceAPI, 'add');

    const actual = await MovieServiceAPI.add(expected);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(actual.id).toBe(expected.id);
  });

  it('updates one movie when update is called', async () => {
    const expected = {
      id: 1,
      title: 'A new film title',
    };

    const spy = jest.spyOn(MovieServiceAPI, 'update');

    const actual = await MovieServiceAPI.update(expected);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(actual.title).toBe(expected.title);
  });

  it('deletes one movie when delete is called', async () => {
    const expected = {
      id: 1,
    };

    const spy = jest.spyOn(MovieServiceAPI, 'delete');

    const actual = await MovieServiceAPI.delete(expected.id);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(actual).toBe(expected.id);
  });

  it('throws an error when movieId has not been provided on getOne', async () => {
    const spy = jest.spyOn(MovieServiceAPI, 'getOne');

    try {
      await MovieServiceAPI.getOne();
    } catch (error) {
      expect(spy).toHaveBeenCalledTimes(1);
      expect(error).toBeInstanceOf(Error);
    }
  });

  it('throws an error when movie has not been provided on add', async () => {
    const spy = jest.spyOn(MovieServiceAPI, 'add');

    try {
      await MovieServiceAPI.add();
    } catch (error) {
      expect(spy).toHaveBeenCalledTimes(1);
      expect(error).toBeInstanceOf(Error);
    }
  });

  it('throws an error when movieId has not been provided on delete', async () => {
    const spy = jest.spyOn(MovieServiceAPI, 'delete');

    try {
      await MovieServiceAPI.delete();
    } catch (error) {
      expect(spy).toHaveBeenCalledTimes(1);
      expect(error).toBeInstanceOf(Error);
    }
  });

  it('throws an error when movie has not been provided on update', async () => {
    const spy = jest.spyOn(MovieServiceAPI, 'update');

    try {
      await MovieServiceAPI.update();
    } catch (error) {
      expect(spy).toHaveBeenCalledTimes(1);
      expect(error).toBeInstanceOf(Error);
    }
  });
});
