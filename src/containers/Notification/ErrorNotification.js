import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorNotification({
  title,
  message,
}) {
  return (
    <div className="text-align--center">
      <FontAwesomeIcon className="color--primary" size="3x" icon={faTimesCircle} />
      <h1 className="font--regular text-transform--uppercase">{title}</h1>
      <p>{message}</p>
    </div>
  );
}

ErrorNotification.defaultProps = {
  title: 'Oops an Error occurred!',
  message: '',
};

ErrorNotification.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};
