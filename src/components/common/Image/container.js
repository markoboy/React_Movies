/* eslint-disable no-use-before-define */
import React, { useCallback, useState } from 'react';
import useFallbackImage from '@hooks/UseFallbackImage';
import useGlobalIntesectionObserver from '@hooks/UseGlobalIntersectionObserver';
import PropTypes from 'prop-types';
import ImageComponent from './component';

const Image = ({ src, srcSet, sizes, alt, width, height, lazy, fallbackSrc }) => {
  const { imageSrc, setImageSrc, setFallbackImageSrc } = useFallbackImage(
    lazy ? undefined : src,
    fallbackSrc
  );
  const [imageSrcSet, setImageSrcSet] = useState(lazy ? undefined : srcSet);

  const [imgElement, setImageElement] = useState();

  const intersectionCallback = useCallback(
    () => {
      setImageSrc(src);
      setImageSrcSet(srcSet);
    },
    [setImageSrc, src, srcSet]
  );

  useGlobalIntesectionObserver({
    target: imgElement,
    callback: intersectionCallback,
    once: true,
  });

  return (
    <ImageComponent
      ref={setImageElement}
      src={imageSrc}
      srcSet={imageSrcSet}
      width={width}
      height={height}
      sizes={sizes}
      alt={alt}
      onError={setFallbackImageSrc}
    />
  );
};

Image.defaultProps = {
  alt: undefined,
  width: undefined,
  height: undefined,
  lazy: true,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  lazy: PropTypes.bool,
};

export default Image;
