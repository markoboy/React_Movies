import { MOVIE_FALLBACK_IMAGE } from '@constants/Generic';
import { MovieListItemType } from '@constants/MovieTypes';
import useFallbackImage from '@hooks/UseFallbackImage';
import React, { useCallback } from 'react';
import ResultListItemComponent from './component';

function ResultListItemContainer({
  id,
  poster_path: image,
  title,
  releaseDate,
  genres,
  onClick,
  children,
}) {
  const { imageSrc, setFallbackImageSrc } = useFallbackImage(
    image,
    MOVIE_FALLBACK_IMAGE
  );

  const handleClick = useCallback(() => onClick(id), [onClick]);

  return (
    <ResultListItemComponent
      title={title}
      releaseDate={releaseDate}
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
