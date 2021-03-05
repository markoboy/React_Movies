import withMarginBottom from '@components/HigherOrder/WithMarginBottom';
import { MovieDetailType } from '@constants/MovieTypes';
import BannerContainer from '@containers/BannerContainer/BannerContainer';
import MovieDetailContainer from '@containers/MovieDetailContainer/MovieDetailContainer';
import ResultContainer from '@containers/ResultContainer/ResultContainer';
import { selectedMovieSelector } from '@store/selectors/moviesSelectors';
import { shape } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const MovieDetailContainerWithMarginBottom = withMarginBottom(MovieDetailContainer);

function SiteContainer({ selectedMovie }) {
  return (
    <main className="site-container__main flex flex--column">
      {!selectedMovie && <BannerContainer />}
      {selectedMovie && <MovieDetailContainerWithMarginBottom movie={selectedMovie} />}
      <ResultContainer />
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

export default connect(mapStateToProps)(SiteContainer);
