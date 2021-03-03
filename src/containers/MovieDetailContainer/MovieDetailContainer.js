import React from 'react';
import PropTypes from 'prop-types';
import MovieDetailComponent from '@components/MovieDetailComponent/MovieDetailComponent';
import { MovieDetailType } from '@constants/MovieTypes';
import withWrapper from '@components/HigherOrder/WithWrapper';
import withSection from '@components/HigherOrder/WithSection';
import ErrorBoundary from '@containers/ErrorBoundary/ErrorBoundary';

const MovieDetailComponentWithWrapper = withWrapper(
  withSection(MovieDetailComponent, { classes: 'section--large' })
);

function MovieDetailContainer({ movie }) {
  return (
    <ErrorBoundary>
      <div className="background--dark-black">
        <MovieDetailComponentWithWrapper {...movie} />
      </div>
    </ErrorBoundary>
  );
}

MovieDetailContainer.propTypes = {
  movie: PropTypes.shape(MovieDetailType).isRequired,
};

export default MovieDetailContainer;
