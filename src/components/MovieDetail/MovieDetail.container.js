import ErrorBoundary from '@components/ErrorBoundary';
import { MovieDetailType } from '@constants/MovieTypes';
import PropTypes from 'prop-types';
import React from 'react';
import MovieDetailComponent from './MovieDetail.component';

function MovieDetailContainer({ movie }) {
  return (
    <ErrorBoundary>
      <div className="background--dark-black margin--bottom">
        <MovieDetailComponent {...movie} />
      </div>
    </ErrorBoundary>
  );
}

MovieDetailContainer.propTypes = {
  movie: PropTypes.shape(MovieDetailType).isRequired,
};

export default MovieDetailContainer;
