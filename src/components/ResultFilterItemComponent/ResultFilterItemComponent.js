import React from 'react';
import PropTypes from 'prop-types';
import './ResultFilterItemComponent.scss';

export default function ResultFilterItemComponent({ children, isActive, classes }) {
  let computedClasses = `result-filter__item ${classes}`;

  if (isActive) {
    computedClasses += ' result-filter__item--active';
  }

  return (
    <li className={computedClasses}>
      {children}
    </li>
  );
}

ResultFilterItemComponent.defaultProps = {
  isActive: false,
  classes: '',
};

ResultFilterItemComponent.propTypes = {
  isActive: PropTypes.bool,
  classes: PropTypes.string,
};
