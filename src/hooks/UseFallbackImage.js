import { useCallback, useEffect, useState } from 'react';

export default function useFallbackImage(image, fallback) {
  const [imageSrc, setImageSrc] = useState(image);

  useEffect(() => {
    setImageSrc(image);
  }, [image]);

  const setFallbackImageSrc = useCallback(() => {
    setImageSrc(fallback);
  }, [fallback]);

  return { imageSrc, setImageSrc, setFallbackImageSrc };
}
