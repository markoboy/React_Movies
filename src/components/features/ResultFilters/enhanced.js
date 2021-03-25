import withWrapper from '@components/hocs/WithWrapper';
import {
  applyFilterCreator,
  applySortCreator,
} from '@store/action-creators/moviesActionCreators';
import {
  moviesFilterSelector,
  moviesSortBySelector,
} from '@store/selectors/moviesSelectors';
import { memo } from 'react';
import { connect } from 'react-redux';
import ResultFiltersContainer from './container';

const mapStateToProps = (state) => ({
  sortBy: moviesSortBySelector(state),
  filters: moviesFilterSelector(state),
});

const mapDispatchToProps = {
  applyFilter: applyFilterCreator,
  applySort: applySortCreator,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(withWrapper(ResultFiltersContainer)));
