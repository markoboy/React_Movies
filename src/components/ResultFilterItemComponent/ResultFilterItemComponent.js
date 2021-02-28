import React from 'react';
import PropTypes from 'prop-types';
import './ResultFilterItemComponent.scss';

export default function ResultFilterItemComponent({ children, isActive, classes }) {
  return (
    <li className={`result-filter__item ${isActive && 'result-filter__item--active'} ${classes}`}>
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
