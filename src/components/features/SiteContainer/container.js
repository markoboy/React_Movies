import MovieDetail from '@components/features/MovieDetail';
import SearchBanner from '@components/features/SearchBanner';
import SearchResults from '@components/features/SearchResults';
import { MovieDetailType } from '@constants/MovieTypes';
import { shape } from 'prop-types';
import React from 'react';
import SiteContainerComponent from './component';

export default function SiteContainer({ selectedMovie }) {
  return (
    <SiteContainerComponent>
      {!selectedMovie && <SearchBanner />}
      {selectedMovie && <MovieDetail movie={selectedMovie} />}
      <SearchResults />
    </SiteContainerComponent>
  );
}

SiteContainer.defaultProps = {
  selectedMovie: null,
};

SiteContainer.propTypes = {
  selectedMovie: shape(MovieDetailType),
};
