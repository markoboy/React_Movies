import getHttpClient from '@utils/getHttpClient';
import { format } from 'date-fns/esm';

const MOVIE_SERVICE_URI = 'http://localhost:4000/movies';

const apiClient = getHttpClient(MOVIE_SERVICE_URI);

const getMovieDataBody = (movie) => {
  const newMovie = { ...movie };

  if (newMovie.release_date) {
    newMovie.release_date = format(newMovie.release_date, 'yyyy-MM-dd');
  }

  delete newMovie.releaseDate;
  delete newMovie.image;

  return newMovie;
};

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
    return apiClient.post('/', getMovieDataBody(movie));
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

    return apiClient.put('/', getMovieDataBody(movie));
  }
};

export default MovieServiceAPI;
