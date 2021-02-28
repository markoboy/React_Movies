import React from 'react';
import PropTypes from 'prop-types';
import './RowComponent.scss';

export default function RowComponent({ children, classes }) {
  return <div className={`row ${classes}`}>{children}</div>;
}

RowComponent.defaultProps = {
  classes: '',
};

RowComponent.propTypes = {
  classes: PropTypes.string,
};
