/* eslint-disable camelcase */
import { MOVIE_FALLBACK_IMAGE } from '@constants/Generic';
import { MovieListItemType } from '@constants/MovieTypes';
import useFallbackImage from '@hooks/UseFallbackImage';
import React, { useCallback } from 'react';
import ResultListItemComponent from './component';

function ResultListItemContainer({
  id,
  poster_path,
  title,
  release_date,
  genres,
  onClick,
  children,
}) {
  const { imageSrc, setFallbackImageSrc } = useFallbackImage(
    poster_path,
    MOVIE_FALLBACK_IMAGE
  );

  const handleClick = useCallback(() => onClick(id), [onClick]);

  return (
    <ResultListItemComponent
      title={title}
      release_date={release_date}
      genres={genres}
      poster_path={imageSrc}
      onClick={handleClick}
      onError={setFallbackImageSrc}
    >
      {children}
    </ResultListItemComponent>
  );
}

ResultListItemContainer.propTypes = MovieListItemType;

export default ResultListItemContainer;
