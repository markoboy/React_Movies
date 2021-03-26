import {
  moviesStatusSelector,
  moviesTotalAmountSelector,
} from '@store/selectors/moviesSelectors';
import { connect } from 'react-redux';
import SearchResultsComponent from './component';

const mapStateToProps = (state) => ({
  status: moviesStatusSelector(state),
  totalAmount: moviesTotalAmountSelector(state),
});

export default connect(mapStateToProps)(SearchResultsComponent);
