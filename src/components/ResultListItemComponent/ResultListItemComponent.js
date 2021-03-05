/* eslint-disable jsx-a11y/anchor-is-valid */
import { MovieListItemType } from '@constants/MovieTypes';
import React, { useState } from 'react';
import DefaultImage from '../../../resources/pulp-fiction.JPG';
import './ResultListItemComponent.scss';

export default function ResultListItemComponent({
  image,
  title,
  releaseDate,
  genres,
  onClick,
  fallbackImage,
  children,
}) {
  const [imageSrc, setImageSrc] = useState(image);

  return (
    <li className="result-list__item">
      <a className="result-item-container" href="#" onClick={onClick}>
        <img
          src={imageSrc || DefaultImage}
          alt={title}
          onError={() => setImageSrc(fallbackImage)}
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

ResultListItemComponent.defaultProps = {
  fallbackImage: 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg',
};

ResultListItemComponent.propTypes = MovieListItemType;
