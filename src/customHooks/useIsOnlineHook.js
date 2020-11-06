import { useState, useEffect } from 'react';

export default function useIsOnline(isOnline) {
  const [status, setStatus] = useState(isOnline);
  useEffect(() => {
    const onOffline = function (e) {
      setStatus(false);
    };
    const onOnline = function (e) {
      setStatus(true);
    };
    window.addEventListener('offline', onOffline);
    window.addEventListener('online', onOnline);
    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, [status]);
  return status;
}
