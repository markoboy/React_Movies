import { useEffect } from 'react';

export default function useClickListener(el, callback) {
  useEffect(() => {
    el.addEventListener('click', callback, false);

    return () => {
      el.removeEventListener('click', callback, false);
    };
  }, []);
}
