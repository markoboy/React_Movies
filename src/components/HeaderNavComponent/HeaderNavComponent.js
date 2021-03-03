/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './HeaderNavComponent.scss';
import PropTypes from 'prop-types';

/**
 * @param {Object} props React props
 * @param {import('react').Component} props.brandLogo The header's logo
 * @param {import('react').Component} props.actionButton The header's action button
 * @param {Boolean} props.hasBackground If the header should have a background
 */
function HeaderNavComponent({ headerLogo, actionButton, hasBackground }) {
  return (
    <header
      className={`header-nav-container ${
        hasBackground ? 'header-nav-container--with-bg' : ''
      }`}
    >
      <div className="header-nav">
        <div className="header-nav__logo-container">{headerLogo}</div>
        <div className="header-nav__btn-container">{actionButton}</div>
      </div>
    </header>
  );
}

HeaderNavComponent.defaultProps = {
  hasBackground: false,
};

HeaderNavComponent.propTypes = {
  headerLogo: PropTypes.element.isRequired,
  actionButton: PropTypes.element.isRequired,
  hasBackground: PropTypes.bool,
};

export default HeaderNavComponent;
