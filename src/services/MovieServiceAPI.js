import getHttpClient from '@utils/getHttpClient';

const apiClient = getHttpClient(process.env.MOVIE_SERVICE_URI);

const MovieServiceAPI = {
  getAll(params) {
    return apiClient.get('/', params);
  },

  getOne(movieId) {
    if (!movieId) {
      return Promise.reject(new Error('[MovieServiceAPI]: getOne function requires movieId as an argument!'));
    }
    return apiClient.get(`/${movieId}`);
  },

  add(movie) {
    if (!movie) {
      return Promise.reject(new Error('[MovieServiceAPI]: add function requires movie as an argument!'));
    }
    return apiClient.post('/', movie);
  },

  delete(movieId) {
    if (!movieId) {
      return Promise.reject(new Error('[MovieServiceAPI]: delete function requires movieId as an argument!'));
    }
    return apiClient.delete(`/${movieId}`);
  },

  update(movie) {
    if (!movie) {
      return Promise.reject(new Error('[MovieServiceAPI]: update function requires movie as an argument!'));
    }

    return apiClient.put('/', movie);
  }
};

export default MovieServiceAPI;
