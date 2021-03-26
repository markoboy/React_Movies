import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function ColumnComponent({ children, classes }) {
  return <div className={classes}>{children}</div>;
}

ColumnComponent.defaultProps = {
  classes: '',
};

ColumnComponent.propTypes = {
  classes: PropTypes.string,
};

export default ColumnComponent;
