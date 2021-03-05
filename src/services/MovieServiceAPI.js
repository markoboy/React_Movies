import getHttpClient from '@utils/getHttpClient';

const MOVIE_SERVICE_URI = 'http://localhost:4000/movies';

const apiClient = getHttpClient(MOVIE_SERVICE_URI);

const MovieServiceAPI = {
  getAll(params) {
    return apiClient.get('/', params);
  },

  getOne(movieId) {
    if (!movieId) {
      throw new Error('[MovieServiceAPI]: getOne function requires movieId as an argument!');
    }
    return apiClient.get(`/${movieId}`);
  },

  add(movie) {
    if (!movie) {
      throw new Error('[MovieServiceAPI]: add function requires movie as an argument!');
    }
    return apiClient.post('/', movie);
  },

  delete(movieId) {
    if (!movieId) {
      throw new Error('[MovieServiceAPI]: delete function requires movieId as an argument!');
    }
    return apiClient.delete(`/${movieId}`);
  },

  update(movie) {
    if (!movie) {
      throw new Error('[MovieServiceAPI]: update function requires movie as an argument!');
    }
    return apiClient.put('/', movie);
  }
};

export default MovieServiceAPI;
