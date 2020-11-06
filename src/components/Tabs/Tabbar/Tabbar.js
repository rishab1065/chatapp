import React from 'react';
import './Tabbar.css';

export default function Tabbar(props) {
  const { tabs, selectedTab, setSelectedTab } = props;
  return (
    <div className="tab_bar">
      {tabs.map((tab, index) => {
        return (
          <div
            className={`tab ${selectedTab === index ? 'selected' : ''}`}
            onClick={() => setSelectedTab(index)}
            key={index}
          >
            <i className="material-icons">{tab.icon}</i>
            {tab.name}
          </div>
        );
      })}
    </div>
  );
}
