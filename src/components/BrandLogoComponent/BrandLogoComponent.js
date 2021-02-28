/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import React from 'react';
import './BrandLogoComponent.scss';

export default function BrandLogoComponent({ name, subName }) {
  return (
    <a href="/">
      <h1 className="brand-logo">
        {name}<span className="font--regular">{subName}</span>
      </h1>
    </a>
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
