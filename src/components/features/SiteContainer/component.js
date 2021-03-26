import MovieDetail from '@components/features/MovieDetail';
import SearchBanner from '@components/features/SearchBanner';
import SearchResults from '@components/features/SearchResults';
import { MovieDetailType } from '@constants/MovieTypes';
import PropTypes from 'prop-types';
import React from 'react';

function SiteContainerComponent({ selectedMovie }) {
  return (
    <main className="site-container__main flex flex--column">
      {!selectedMovie && <SearchBanner />}
      {selectedMovie && <MovieDetail movie={selectedMovie} />}
      <SearchResults />
    </main>
  );
}

SiteContainerComponent.defaultProps = {
  selectedMovie: null,
};

SiteContainerComponent.propTypes = {
  selectedMovie: PropTypes.shape(MovieDetailType),
};

export default SiteContainerComponent;
