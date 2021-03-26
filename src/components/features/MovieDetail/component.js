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
  image,
  title,
  releaseDate,
  genres,
  onError,
}) {
  return (
    <RowWithSectionWrapper>
      <Column classes="column--m-3">
        <img src={image} alt={title} onError={onError} />
      </Column>

      <Column classes="column--m-9">
        <div className="movie-detail">
          <div className="movie-detail__heading-container">
            <h1 className="movie-detail__heading">{title}</h1>
            {!!rating && <p className="movie-detail__rating">{rating}</p>}
          </div>

          <p className="movie-detail__genre">{genres.join(', ')}</p>

          <div className="movie-detail__year-container">
            {releaseDate && <p>{releaseDate.getFullYear()}</p>}
            {runtime && (
              <p className="movie-detail__duration">{`${runtime} min`}</p>
            )}
          </div>

          <p className="movie-detail__description">{overview}</p>
        </div>
      </Column>
    </RowWithSectionWrapper>
  );
}

MovieDetailComponent.propTypes = {
  ...MovieDetailType,
  onError: PropTypes.func.isRequired,
};

export default memo(MovieDetailComponent);
