/* eslint-disable camelcase */
import ErrorBoundary from '@components/common/ErrorBoundary';
import Column from '@components/common/Grid/Column';
import Row from '@components/common/Grid/Row';
import withSection from '@components/hocs/WithSection';
import withWrapper from '@components/hocs/WithWrapper';
import { MovieDetailType } from '@constants/MovieTypes';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import './styles.scss';

const RowWithSectionWrapper = withSection(withWrapper(Row), {
  classes: 'section--large background--dark-black margin--bottom',
});

function MovieDetailComponent({
  runtime,
  vote_average: rating,
  overview,
  poster_path,
  title,
  release_date,
  genres,
  onError,
}) {
  return (
    <ErrorBoundary>
      <RowWithSectionWrapper>
        <Column classes="column--m-3">
          <img src={poster_path} alt={title} onError={onError} />
        </Column>

        <Column classes="column--m-9">
          <div className="movie-detail">
            <div className="movie-detail__heading-container">
              <h1 className="movie-detail__heading">{title}</h1>
              {!!rating && <p className="movie-detail__rating">{rating}</p>}
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
  onError: PropTypes.func.isRequired,
};

export default memo(MovieDetailComponent);
