import { format } from 'date-fns';
import * as Yup from 'yup';

/**
 * Convert an option to a multi select option to be used
 * by the react-multi-select-component package to display
 * selected options.
 * @param {string} option The option to convert
 */
export function convertToMultiSelectOption(option) {
  // Only convert when the option is a string
  if (typeof option !== 'string') {
    return option;
  }

  return {
    value: option.toLowerCase(),
    label: option,
  };
}

/**
 * Convert a multi select option to a string in order to be serialized for the API request.
 *
 * @param {{ value: string, label: string}} option The option from MultiSelect to convert
 * @returns {string}
 */
export function convertMultiSelectToString(option) {
  if (typeof option === 'string') {
    return option;
  }

  return option.label;
}

/**
 * Formats a movie's data to be used by the application's form
 * @param {Object} movie
 * @returns {Object}
 */
export function formatMovieData(movie) {
  return {
    ...movie,
    // genres: movie.genres.map(convertToMultiSelectOption),
    release_date: movie.release_date ? new Date(movie.release_date) : undefined,
  };
}

/**
 * Serialize the movie's data to be used for the API calls
 * @param {Object} movie
 * @returns {Object}
 */
export function serializeMovieData(movie) {
  return {
    ...movie,
    genres: movie.genres.map(convertMultiSelectToString),
    release_date: movie.release_date ? format(movie.release_date, 'yyyy-MM-dd') : undefined,
    runtime: Number(movie.runtime),
    tagline: movie.tagline || undefined,
  };
}

const isRequired = (field) => `${field} is required`;

const atLeastOneRequired = (field) => `Select at least one ${field} to proceed`;

export const MovieSchemaYup = Yup.object().shape({
  title: Yup.string().required(isRequired('Title')),

  release_date: Yup.date('Input a valid Release Date to proceed').nullable(),

  poster_path: Yup.string()
    .url('Input a valid URL to proceed')
    .required(isRequired('Movie Poster URL')),

  genres: Yup.array()
    .min(1, atLeastOneRequired('genre'))
    .required(atLeastOneRequired('genre')),

  overview: Yup.string().required(isRequired('Overview')),

  runtime: Yup.number().typeError(isRequired('Runtime')).required(isRequired('Runtime')),
});
