import { useCallback, useState } from 'react';

export default function useNotification() {
  const [isOpened, setIsOpened] = useState(false);

  const [notification, setNotification] = useState({});

  const setNotificationFunc = useCallback((event, defaultTitle) => {
    setNotification({
      title: event?.title || defaultTitle,
      message: event?.message,
    });

    setIsOpened(!!event);
  }, []);

  return {
    isOpened,
    setIsOpened,
    notification,
    setNotification: setNotificationFunc,
  };
}
