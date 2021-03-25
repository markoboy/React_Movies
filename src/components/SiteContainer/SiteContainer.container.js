import { MovieDetailType } from '@constants/MovieTypes';
import SearchBanner from '@components/SearchBanner';
import MovieDetail from '@components/MovieDetail';
import SearchResults from '@components/SearchResults';
import { selectedMovieSelector } from '@store/selectors/moviesSelectors';
import { shape } from 'prop-types';
import React, { memo } from 'react';
import { connect } from 'react-redux';

function SiteContainer({ selectedMovie }) {
  return (
    <main className="site-container__main flex flex--column">
      {!selectedMovie && <SearchBanner />}
      {selectedMovie && <MovieDetail movie={selectedMovie} />}
      <SearchResults />
    </main>
  );
}

SiteContainer.defaultProps = {
  selectedMovie: null,
};

SiteContainer.propTypes = {
  selectedMovie: shape(MovieDetailType),
};

const mapStateToProps = (state) => ({
  selectedMovie: selectedMovieSelector(state),
});

export default connect(mapStateToProps)(memo(SiteContainer));
