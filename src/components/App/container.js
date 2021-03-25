import { MovieDetailType } from '@constants/MovieTypes';
import { LOADING_STATUS } from '@constants/StatusTypes';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useMemo } from 'react';
import AppComponent from './component';

export default function AppContainer({
  sortBy,
  filter,
  selectedMovie,
  status,
  modalIsOpened,
  fetchMovies,
  selectMovie,
}) {
  useEffect(() => {
    fetchMovies();
  }, [sortBy, filter]);

  const handleOnSearch = useCallback(() => {
    selectMovie(null);
  }, []);

  const showSpinner = useMemo(() => status === LOADING_STATUS, [status]);

  return (
    <AppComponent
      selectedMovie={selectedMovie}
      onSearch={handleOnSearch}
      showSpinner={showSpinner}
      modalIsOpened={modalIsOpened}
    />
  );
}

AppContainer.defaultProps = {
  selectedMovie: null,
};

AppContainer.propTypes = {
  sortBy: PropTypes.string.isRequired,
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedMovie: PropTypes.shape(MovieDetailType),
  status: PropTypes.string.isRequired,
  modalIsOpened: PropTypes.bool.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  selectMovie: PropTypes.func.isRequired,
};
