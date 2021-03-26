import {
  moviesErrorSelector,
  moviesStatusSelector,
  moviesSuccessSelector,
} from '@store/selectors/moviesSelectors';
import { connect } from 'react-redux';
import NotificationContainer from './container';

const mapStateToProps = (state) => ({
  error: moviesErrorSelector(state),
  success: moviesSuccessSelector(state),
  status: moviesStatusSelector(state),
});

export default connect(mapStateToProps)(NotificationContainer);
