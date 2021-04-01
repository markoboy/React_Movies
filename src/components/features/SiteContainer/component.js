import PropTypes from 'prop-types';
import React from 'react';

function SiteContainerComponent({ classes, children }) {
  return <main className={classes}>{children}</main>;
}

SiteContainerComponent.defaultProps = {
  classes: '',
};

SiteContainerComponent.propTypes = {
  classes: PropTypes.string,
};

export default SiteContainerComponent;
