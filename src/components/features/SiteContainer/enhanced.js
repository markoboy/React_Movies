import { selectedMovieSelector } from '@store/selectors/moviesSelectors';
import { memo } from 'react';
import { connect } from 'react-redux';
import SiteContainer from './container';

const mapStateToProps = (state) => ({
  selectedMovie: selectedMovieSelector(state),
});

export default connect(mapStateToProps)(memo(SiteContainer));
