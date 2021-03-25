import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import './styles.scss';

/**
 * @param {Object} props React props
 * @param {'button' | 'submit' | 'reset'} [props.type] The type of the button
 * @param {string} [props.classes] Any classes to be appended in the button as modifiers
 */
export default function ButtonComponent({
  children,
  type,
  classes,
  onClick,
}) {
  const className = useMemo(() => clsx('btn', classes), [classes]);

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

ButtonComponent.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonComponent.defaultProps = {
  type: 'button',
  classes: '',
  onClick: null,
};
