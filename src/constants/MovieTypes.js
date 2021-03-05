/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';

const SharedMovieType = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.instanceOf(Date).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const MovieDetailType = {
  ...SharedMovieType,
  duration: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export const MovieListItemType = {
  ...SharedMovieType,
  onClick: PropTypes.func.isRequired,
};
