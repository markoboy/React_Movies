import React from 'react';
import PropTypes from 'prop-types';

const ImageComponent = React.forwardRef(
  ({ src, srcSet, sizes, alt, onError, width, height }, ref) => (
    <img
      ref={ref}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      onError={onError}
    />
  )
);

ImageComponent.defaultProps = {
  src: undefined,
  srcSet: undefined,
  sizes: undefined,
  alt: undefined,
  width: undefined,
  height: undefined,
  onError: undefined,
};

ImageComponent.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  onError: PropTypes.func,
};

export default ImageComponent;
