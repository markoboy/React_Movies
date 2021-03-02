import BannerContainer from '@containers/BannerContainer/BannerContainer';
import ResultContainer from '@containers/ResultContainer/ResultContainer';
import React from 'react';
import PropTypes from 'prop-types';

export default function SiteContainer({ movies, onEditMovie, onDeleteMovie }) {
  return (
    <main className="site-container__main flex flex--column">
      <BannerContainer />
      <ResultContainer
        movies={movies}
        onEditMovie={onEditMovie}
        onDeleteMovie={onDeleteMovie}
      />
    </main>
  );
}

SiteContainer.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onEditMovie: PropTypes.func.isRequired,
  onDeleteMovie: PropTypes.func.isRequired,
};
