import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

export default function NotificationComponent({
  title,
  message,
  isError,
}) {
  const icon = useMemo(() => (isError ? faTimesCircle : faCheckCircle), [isError]);

  return (
    <div className="text-align--center">
      <FontAwesomeIcon className="color--primary" size="3x" icon={icon} />
      <h1 className="font--regular text-transform--uppercase">{title}</h1>
      <p>{message}</p>
    </div>
  );
}

NotificationComponent.defaultProps = {
  message: '',
  isError: false,
};

NotificationComponent.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  isError: PropTypes.bool,
};
