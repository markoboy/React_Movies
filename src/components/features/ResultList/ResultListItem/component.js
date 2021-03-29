/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { MovieListItemType } from '@constants/MovieTypes';
import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function ResultListItemComponent({
  poster_path,
  title,
  release_date,
  genres,
  onClick,
  onError,
  children,
}) {
  return (
    <li className="result-list__item">
      <a className="result-item-container" href="#" onClick={onClick}>
        <img src={poster_path} alt={title} onError={onError} />

        <div className="result-item__body flex flex--wrap">
          <h4 className="result-item__title">{title}</h4>
          <p className="result-item__release-date">
            {release_date.getFullYear()}
          </p>
          <p className="result-item__genre">{genres.join(', ')}</p>
        </div>
      </a>

      {children}
    </li>
  );
}

ResultListItemComponent.propTypes = {
  ...MovieListItemType,
  onError: PropTypes.func.isRequired,
};

export default ResultListItemComponent;
