import { selectedMovieSelector } from '@store/selectors/moviesSelectors';
import { memo } from 'react';
import { connect } from 'react-redux';
import SiteContainerComponent from './component';

const mapStateToProps = (state) => ({
  selectedMovie: selectedMovieSelector(state),
});

export default connect(mapStateToProps)(memo(SiteContainerComponent));
