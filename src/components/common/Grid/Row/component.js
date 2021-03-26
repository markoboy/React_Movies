import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

function RowComponent({ children, classes }) {
  return <div className={classes}>{children}</div>;
}

RowComponent.defaultProps = {
  classes: '',
};

RowComponent.propTypes = {
  classes: PropTypes.string,
};

export default RowComponent;
