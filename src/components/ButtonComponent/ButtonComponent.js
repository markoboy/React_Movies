import React from 'react';
import PropTypes from 'prop-types';
import './ButtonComponent.scss';

/**
 * @param {Object} props React props
 * @param {'button' | 'submit' | 'reset'} [props.type] The type of the button
 * @param {string} [props.classes] Any classes to be appended in the button as modifiers
 */
export default function ButtonComponent({ children, type, classes }) {
  return (
    <button type={type} className={`btn ${classes}`}>
      {children}
    </button>
  );
}

ButtonComponent.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  classes: PropTypes.string,
};

ButtonComponent.defaultProps = {
  type: 'button',
  classes: '',
};
