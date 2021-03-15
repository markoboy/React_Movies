/* eslint-disable jsx-a11y/anchor-is-valid */
import { MOVIE_FALLBACK_IMAGE } from '@constants/Generic';
import { MovieListItemType } from '@constants/MovieTypes';
import useFallbackImage from '@hooks/UseFallbackImage';
import React from 'react';
import './ResultListItem.scss';

function ResultListItem({
  image,
  title,
  releaseDate,
  genres,
  onClick,
  fallbackImage,
  children,
}) {
  const { imageSrc, setFallbackImageSrc } = useFallbackImage(image, fallbackImage);

  return (
    <li className="result-list__item">
      <a className="result-item-container" href="#" onClick={onClick}>
        <img
          src={imageSrc}
          alt={title}
          onError={setFallbackImageSrc}
        />

        <div className="result-item__body flex flex--wrap">
          <h4 className="result-item__title">{title}</h4>
          <p className="result-item__release-date">
            {releaseDate.getFullYear()}
          </p>
          <p className="result-item__genre">{genres.join(', ')}</p>
        </div>
      </a>

      {children}
    </li>
  );
}

ResultListItem.defaultProps = {
  fallbackImage: MOVIE_FALLBACK_IMAGE,
};

ResultListItem.propTypes = MovieListItemType;

export default ResultListItem;
