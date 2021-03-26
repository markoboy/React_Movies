import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

export default function NotificationComponent({ title, message, icon }) {
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
};

NotificationComponent.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.object.isRequired,
};
