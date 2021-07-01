/* eslint-disable camelcase */
import ErrorBoundary from '@components/common/ErrorBoundary';
import Column from '@components/common/Grid/Column';
import Row from '@components/common/Grid/Row';
import Image from '@components/common/Image';
import withSection from '@components/hocs/WithSection';
import withWrapper from '@components/hocs/WithWrapper';
import { MOVIE_FALLBACK_IMAGE, MOVIE_POSTER_HEIGHT, MOVIE_POSTER_WIDTH } from '@constants/Generic';
import { MovieDetailType } from '@constants/MovieTypes';
import React, { memo } from 'react';
import './styles.scss';

const RowWithSectionWrapper = withSection(withWrapper(Row), {
  classes: 'section--large background--dark-black margin--bottom',
});

function MovieDetailComponent({
  runtime,
  vote_average,
  overview,
  poster_path,
  title,
  release_date,
  genres,
}) {
  return (
    <ErrorBoundary>
      <RowWithSectionWrapper>
        <Column classes="column--m-3">
          <Image
            src={poster_path}
            width={MOVIE_POSTER_WIDTH}
            height={MOVIE_POSTER_HEIGHT}
            alt={title}
            fallbackSrc={MOVIE_FALLBACK_IMAGE}
          />
        </Column>

        <Column classes="column--m-9">
          <div className="movie-detail">
            <div className="movie-detail__heading-container">
              <h1 className="movie-detail__heading">{title}</h1>
              {!!vote_average && (
                <p className="movie-detail__rating">{vote_average}</p>
              )}
            </div>

            <p className="movie-detail__genre">{genres.join(', ')}</p>

            <div className="movie-detail__year-container">
              {release_date && <p>{release_date.getFullYear()}</p>}
              {runtime && (
                <p className="movie-detail__duration">{`${runtime} min`}</p>
              )}
            </div>

            <p className="movie-detail__description">{overview}</p>
          </div>
        </Column>
      </RowWithSectionWrapper>
    </ErrorBoundary>
  );
}

MovieDetailComponent.propTypes = {
  ...MovieDetailType,
};

export default memo(MovieDetailComponent);
