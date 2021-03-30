import { removeNotificationCreator } from '@store/action-creators/moviesActionCreators';
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

const mapDispatchToProps = {
  removeNotification: removeNotificationCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
