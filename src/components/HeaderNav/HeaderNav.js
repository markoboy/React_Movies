/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { memo, useMemo } from 'react';
import './HeaderNav.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

/**
 * @param {Object} props React props
 * @param {import('react').Component} props.brandLogo The header's logo
 * @param {import('react').Component} props.actionButton The header's action button
 * @param {Boolean} props.hasBackground If the header should have a background
 */
function Header({ headerLogo, actionButton, hasBackground }) {
  const className = useMemo(() => clsx('header-nav-container', { 'header-nav-container--with-bg': hasBackground }), [hasBackground]);

  return (
    <header
      className={className}
    >
      <div className="header-nav">
        <div className="header-nav__logo-container">{headerLogo}</div>
        <div className="header-nav__btn-container">{actionButton}</div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  hasBackground: false,
};

Header.propTypes = {
  headerLogo: PropTypes.element.isRequired,
  actionButton: PropTypes.element.isRequired,
  hasBackground: PropTypes.bool,
};

export default memo(Header);
