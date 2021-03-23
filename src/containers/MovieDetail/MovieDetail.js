import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-named-default
import { default as MovieDetailComponent } from '@components/MovieDetail';
import { MovieDetailType } from '@constants/MovieTypes';
import withWrapper from '@components/HigherOrder/WithWrapper';
import withSection from '@components/HigherOrder/WithSection';
import ErrorBoundary from '@containers/ErrorBoundary';

const MovieDetailComponentWithWrapper = withWrapper(
  withSection(MovieDetailComponent, { classes: 'section--large' })
);

function MovieDetail({ movie }) {
  return (
    <ErrorBoundary>
      <div className="background--dark-black margin--bottom">
        <MovieDetailComponentWithWrapper {...movie} />
      </div>
    </ErrorBoundary>
  );
}

MovieDetail.propTypes = {
  movie: PropTypes.shape(MovieDetailType).isRequired,
};

export default MovieDetail;
