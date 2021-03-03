/* eslint-disable jsx-a11y/anchor-is-valid */
import { MovieListItemType } from '@constants/MovieTypes';
import React from 'react';
import DefaultImage from '../../../resources/pulp-fiction.JPG';
import './ResultListItemComponent.scss';

export default function ResultListItemComponent({
  image,
  title,
  releaseDate,
  genre,
  children,
}) {
  return (
    <div className="result-list__item">
      <a href="#">
        <img src={image || DefaultImage} alt={title} />

        <div className="result-item__body flex flex--wrap">
          <h4 className="result-item__title">{title}</h4>
          <p className="result-item__release-date">
            {releaseDate.getFullYear()}
          </p>
          <p className="result-item__genre">{genre.join(', ')}</p>
        </div>
      </a>

      {children}
    </div>
  );
}

ResultListItemComponent.propTypes = MovieListItemType;
