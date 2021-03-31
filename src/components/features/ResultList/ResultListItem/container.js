/* eslint-disable camelcase */
import { MOVIE_FALLBACK_IMAGE } from '@constants/Generic';
import { SharedMovieType } from '@constants/MovieTypes';
import useFallbackImage from '@hooks/UseFallbackImage';
import React from 'react';
import ResultListItemComponent from './component';

function ResultListItemContainer({
  id,
  poster_path,
  title,
  release_date,
  genres,
  children,
}) {
  const { imageSrc, setFallbackImageSrc } = useFallbackImage(
    poster_path,
    MOVIE_FALLBACK_IMAGE
  );

  return (
    <ResultListItemComponent
      id={id}
      title={title}
      release_date={release_date}
      genres={genres}
      poster_path={imageSrc}
      onError={setFallbackImageSrc}
    >
      {children}
    </ResultListItemComponent>
  );
}

ResultListItemContainer.propTypes = SharedMovieType;

export default ResultListItemContainer;
