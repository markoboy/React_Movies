import withMarginBottom from '@components/HigherOrder/WithMarginBottom';
import BannerContainer from '@containers/BannerContainer/BannerContainer';
import MovieDetailContainer from '@containers/MovieDetailContainer/MovieDetailContainer';
import ResultContainer from '@containers/ResultContainer/ResultContainer';
import PropTypes from 'prop-types';
import React from 'react';

const MovieDetailContainerWithMarginBottom = withMarginBottom(MovieDetailContainer);

export default function SiteContainer({ movies, selectedMovie }) {
  return (
    <main className="site-container__main flex flex--column">
      {!selectedMovie && <BannerContainer />}
      {selectedMovie && <MovieDetailContainerWithMarginBottom movie={selectedMovie} />}
      <ResultContainer movies={movies} />
    </main>
  );
}

SiteContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
