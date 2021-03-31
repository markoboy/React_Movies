import BrandLogo from '@components/common/BrandLogo';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import './styles.scss';

/**
 * @param {Object} props React props
 * @param {import('react').Component} props.actionButton The header's action button
 * @param {Boolean} props.classes The classes to be applied on the header
 */
function SiteHeaderNavComponent({ actionButton, classes }) {
  return (
    <header className={classes}>
      <div className="header-nav">
        <div className="header-nav__logo-container">
          <BrandLogo />
        </div>
        {actionButton && (
          <div className="header-nav__btn-container">{actionButton}</div>
        )}
      </div>
    </header>
  );
}

SiteHeaderNavComponent.defaultProps = {
  classes: '',
  actionButton: undefined,
};

SiteHeaderNavComponent.propTypes = {
  actionButton: PropTypes.element,
  classes: PropTypes.string,
};

export default memo(SiteHeaderNavComponent);
