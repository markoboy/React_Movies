import PropTypes from 'prop-types';
import React from 'react';
import './Banner.component.scss';

const getPictureSources = (src) => (
  <source key={src.id} media={src.media} srcSet={src.srcSet} />
);

function BannerComponent({
  children, imgSrc, imgAlt, sources
}) {
  return (
    <section className="banner">
      <picture>
        {sources.map(getPictureSources)}
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

export default BannerComponent;
