/* eslint-disable react/forbid-prop-types */
import Modal from '@components/common/Modal';
import { COMPLETE_STATUS, ERROR_STATUS } from '@constants/StatusTypes';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import useNotification from '@hooks/UseNotification';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useMemo } from 'react';
import NotificationComponent from './component';
import { ERROR_TITLE, SUCCESS_TITLE } from './constants';

export default function NotificationContainer({ error, success, status }) {
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

  const icon = useMemo(
    () => (status === ERROR_STATUS ? faTimesCircle : faCheckCircle),
    [isOpened]
  );

  const closeTriggerHandler = useCallback(() => setIsOpened(false), []);

  return isOpened ? (
    <Modal
      onCloseTrigger={closeTriggerHandler}
      body={<NotificationComponent icon={icon} {...notification} />}
    />
  ) : null;
}

NotificationContainer.defaultProps = {
  error: null,
  success: null,
};

NotificationContainer.propTypes = {
  error: PropTypes.object,
  success: PropTypes.object,
  status: PropTypes.string.isRequired,
};
