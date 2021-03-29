import { MOVIE_FALLBACK_IMAGE } from '@constants/Generic';
import { MovieDetailType } from '@constants/MovieTypes';
import useFallbackImage from '@hooks/UseFallbackImage';
import PropTypes from 'prop-types';
import React from 'react';
import MovieDetailComponent from './component';

function MovieDetailContainer({ movie }) {
  const { imageSrc, setFallbackImageSrc } = useFallbackImage(
    movie.poster_path,
    MOVIE_FALLBACK_IMAGE
  );

  return (
    <MovieDetailComponent
      {...movie}
      onError={setFallbackImageSrc}
      poster_path={imageSrc}
    />
  );
}

MovieDetailContainer.propTypes = {
  movie: PropTypes.shape(MovieDetailType).isRequired,
};

export default MovieDetailContainer;
