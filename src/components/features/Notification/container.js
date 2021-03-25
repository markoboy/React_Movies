/* eslint-disable react/forbid-prop-types */
import Modal from '@components/common/Modal';
import { COMPLETE_STATUS, ERROR_STATUS } from '@constants/StatusTypes';
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

  const isError = useMemo(() => status === ERROR_STATUS, [isOpened]);

  const closeTriggerHandler = useCallback(() => setIsOpened(false), []);

  return isOpened ? (
    <Modal
      onCloseTrigger={closeTriggerHandler}
      body={<NotificationComponent isError={isError} {...notification} />}
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
