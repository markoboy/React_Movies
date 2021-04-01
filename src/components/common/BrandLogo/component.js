/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function BrandLogoComponent({ name, subName }) {
  return (
    <h1 className="brand-logo">
      <Link to="/">
        {name}<span className="font--regular">{subName}</span>
      </Link>
    </h1>
  );
}

BrandLogoComponent.defaultProps = {
  name: 'netflix',
  subName: 'roulette',
};

BrandLogoComponent.propTypes = {
  name: PropTypes.string,
  subName: PropTypes.string,
};

export default memo(BrandLogoComponent);
