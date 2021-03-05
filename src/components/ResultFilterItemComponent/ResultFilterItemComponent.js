/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './ResultFilterItemComponent.scss';

export default function ResultFilterItemComponent({
  children,
  isActive,
  classes,
  onClick,
}) {
  let computedClasses = `result-filter__item ${classes}`;

  if (isActive) {
    computedClasses += ' result-filter__item--active';
  }

  return (
    <li className={computedClasses} onClick={onClick}>
      {children}
    </li>
  );
}

ResultFilterItemComponent.defaultProps = {
  isActive: false,
  classes: '',
  onClick: () => {},
};

ResultFilterItemComponent.propTypes = {
  isActive: PropTypes.bool,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};
