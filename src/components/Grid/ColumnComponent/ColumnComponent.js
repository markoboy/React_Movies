import React from 'react';
import PropTypes from 'prop-types';
import './ColumnComponent.scss';

export default function ColumnComponent({ children, classes }) {
  return <div className={`column ${classes}`}>{children}</div>;
}

ColumnComponent.defaultProps = {
  classes: '',
};

ColumnComponent.propTypes = {
  classes: PropTypes.string,
};
