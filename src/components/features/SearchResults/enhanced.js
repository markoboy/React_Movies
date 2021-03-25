import {
  moviesStatusSelector,
  moviesTotalAmountSelector,
} from '@store/selectors/moviesSelectors';
import { connect } from 'react-redux';
import SearchResultsContainer from './container';

const mapStateToProps = (state) => ({
  status: moviesStatusSelector(state),
  totalAmount: moviesTotalAmountSelector(state),
});

export default connect(mapStateToProps)(SearchResultsContainer);
