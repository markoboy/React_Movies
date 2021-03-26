import PropTypes from 'prop-types';
import React, { memo } from 'react';
import './styles.scss';

/**
 * @param {Object} props React props
 * @param {import('react').Component} props.brandLogo The header's logo
 * @param {import('react').Component} props.actionButton The header's action button
 * @param {Boolean} props.classes The classes to be applied on the header
 */
function SiteHeaderNavComponent({ headerLogo, actionButton, classes }) {
  return (
    <header className={classes}>
      <div className="header-nav">
        <div className="header-nav__logo-container">{headerLogo}</div>
        <div className="header-nav__btn-container">{actionButton}</div>
      </div>
    </header>
  );
}

SiteHeaderNavComponent.defaultProps = {
  classes: '',
};

SiteHeaderNavComponent.propTypes = {
  headerLogo: PropTypes.element.isRequired,
  actionButton: PropTypes.element.isRequired,
  classes: PropTypes.string,
};

export default memo(SiteHeaderNavComponent);
