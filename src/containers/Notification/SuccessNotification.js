import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

export default function SuccessNotification({
  title,
  message,
}) {
  return (
    <div className="text-align--center">
      <FontAwesomeIcon className="color--primary" size="3x" icon={faCheckCircle} />
      <h1 className="font--regular text-transform--uppercase">{title}</h1>
      <p>{message}</p>
    </div>
  );
}

SuccessNotification.defaultProps = {
  title: 'Congratulations!',
  message: '',
};

SuccessNotification.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};
