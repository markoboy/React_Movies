import React from 'react';
import PropTypes from 'prop-types';
import './BannerComponent.scss';

export default function BannerComponent({
  children, imgSrc, imgAlt, sources
}) {
  return (
    <section className="banner">
      <picture>
        {sources.map((src) => (
          <source key={src.id} media={src.media} srcSet={src.srcSet} />
        ))}
        <img src={imgSrc} alt={imgAlt} />
      </picture>
      <div className="banner__content">
        <div className="wrapper">
          {children}
        </div>
      </div>
    </section>
  );
}

BannerComponent.defaultProps = {
  sources: [],
};

BannerComponent.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      media: PropTypes.string.isRequired,
      srcSet: PropTypes.string.isRequired,
    })
  ),
};
