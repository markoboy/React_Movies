import Modal from '@components/common/Modal';
import { COMPLETE_STATUS, ERROR_STATUS } from '@constants/StatusTypes';
import useNotification from '@hooks/UseNotification';
import {
  moviesErrorSelector,
  moviesStatusSelector,
  moviesSuccessSelector,
} from '@store/selectors/moviesSelectors';
import React, { useCallback, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import NotificationComponent from './Notification.component';

const SUCCESS_TITLE = 'Congratulations!';
const ERROR_TITLE = 'Oops an Error occurred!';

function NotificationContainer({ error, success, status }) {
  const {
    isOpened,
    setIsOpened,
    notification,
    setNotification,
  } = useNotification();

  useEffect(() => {
    if (status === ERROR_STATUS) {
      setNotification(error, ERROR_TITLE);
    } else if (status === COMPLETE_STATUS) {
      setNotification(success, SUCCESS_TITLE);
    }
  }, [success, error, status]);

  const isError = useMemo(() => status === ERROR_STATUS, [isOpened]);

  const closeTriggerHandler = useCallback(() => setIsOpened(false), []);

  return isOpened ? (
    <Modal
      onCloseTrigger={closeTriggerHandler}
      body={<NotificationComponent isError={isError} {...notification} />}
    />
  ) : null;
}

const mapStateToProps = (state) => ({
  error: moviesErrorSelector(state),
  success: moviesSuccessSelector(state),
  status: moviesStatusSelector(state),
});

export default connect(mapStateToProps)(NotificationContainer);
