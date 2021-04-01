import { removeNotificationCreator } from '@store/action-creators/moviesActionCreators';
import {
  moviesErrorSelector,
  moviesStatusSelector,
  moviesSuccessSelector,
} from '@store/selectors/moviesSelectors';
import { memo } from 'react';
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

const Notification = connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(NotificationContainer));

export default Notification;
