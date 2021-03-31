/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';

export const SharedMovieType = {
  id: PropTypes.number,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.instanceOf(Date),
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const MovieDetailType = {
  ...SharedMovieType,
  runtime: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  vote_average: PropTypes.number,
  overview: PropTypes.string.isRequired,
};
