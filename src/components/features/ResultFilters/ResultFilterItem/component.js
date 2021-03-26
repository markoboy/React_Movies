/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function ResultFilterItemComponent({ children, classes, onClick }) {
  return (
    <li className={classes} onClick={onClick}>
      {children}
    </li>
  );
}

ResultFilterItemComponent.defaultProps = {
  classes: '',
  onClick: null,
};

ResultFilterItemComponent.propTypes = {
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

export default ResultFilterItemComponent;
