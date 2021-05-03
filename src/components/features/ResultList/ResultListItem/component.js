/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { SharedMovieType } from '@constants/MovieTypes';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function ResultListItemComponent({
  id,
  poster_path,
  title,
  release_date,
  genres,
  onError,
  children,
}) {
  return (
    <li className="result-list__item" data-testid="result-list-item">
      <Link className="result-item-container" to={`/film/${id}`}>
        <img src={poster_path} alt={title} onError={onError} />

        <div className="result-item__body flex flex--wrap">
          <h4 className="result-item__title">{title}</h4>
          <p className="result-item__release-date">
            {release_date.getFullYear()}
          </p>
          <p className="result-item__genre">{genres.join(', ')}</p>
        </div>
      </Link>

      {children}
    </li>
  );
}

ResultListItemComponent.propTypes = {
  ...SharedMovieType,
  onError: PropTypes.func.isRequired,
};

export default ResultListItemComponent;
