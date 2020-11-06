import React from 'react';
import './NoInternet.css';
import useIsOnline from '../../customHooks/useIsOnlineHook';

export default function NoInternet() {
  const isOnline = useIsOnline(navigator.onLine);
  if (isOnline) {
    return null;
  }

  return (
    <div className="no_internet_container">
      <div className="no_internet">No Internet</div>
      <div className="retry">Retry</div>
    </div>
  );
}
