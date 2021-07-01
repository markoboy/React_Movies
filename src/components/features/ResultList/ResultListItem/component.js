/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '@components/common/Image';
import { MOVIE_FALLBACK_IMAGE, MOVIE_POSTER_HEIGHT, MOVIE_POSTER_WIDTH } from '@constants/Generic';
import { SharedMovieType } from '@constants/MovieTypes';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function ResultListItemComponent({
  id,
  poster_path,
  title,
  release_date,
  genres,
  children,
}) {
  return (
    <li className="result-list__item" data-testid="result-list-item">
      <Link className="result-item-container" to={`/film/${id}`}>
        <Image
          src={poster_path}
          width={MOVIE_POSTER_WIDTH}
          height={MOVIE_POSTER_HEIGHT}
          alt={title}
          fallbackSrc={MOVIE_FALLBACK_IMAGE}
        />

        <div className="result-item__body flex flex--wrap">
          <h4 className="result-item__title">{title}</h4>
          <p className="result-item__release-date">
            {release_date?.getFullYear()}
          </p>
          <p className="result-item__genre">{genres?.join(', ')}</p>
        </div>
      </Link>

      {children}
    </li>
  );
}

ResultListItemComponent.propTypes = {
  ...SharedMovieType,
};

export default ResultListItemComponent;
