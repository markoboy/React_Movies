import PropTypes from 'prop-types';
import React from 'react';
import Image from '../Image';
import './styles.scss';

function BannerComponent({ children, src, srcSet, sizes, alt, width, height }) {
  return (
    <section className="banner">
      <Image
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        lazy={false}
      />
      <div className="banner__content">
        <div className="wrapper">{children}</div>
      </div>
    </section>
  );
}

BannerComponent.defaultProps = {
  srcSet: undefined,
  sizes: undefined,
  width: undefined,
  height: undefined,
};

BannerComponent.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default BannerComponent;
