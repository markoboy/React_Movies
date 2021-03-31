import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

export default function ButtonComponent({
  children,
  type,
  classes,
  tabIndex,
  onClick,
}) {
  return (
    <button type={type} className={classes} onClick={onClick} tabIndex={tabIndex}>
      {children}
    </button>
  );
}

ButtonComponent.defaultProps = {
  type: 'button',
  classes: '',
  onClick: null,
  tabIndex: undefined,
};

ButtonComponent.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  classes: PropTypes.string,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
};
