import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="header-icon">
        <img src={'https://jobs.vahan.co/icon_min.jpg'} alt="icon" />
      </div>
      <div className="heading">Job Finder</div>
    </div>
  );
}
