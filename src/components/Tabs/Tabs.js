import React, { useState } from 'react';
import Tabbar from './Tabbar';
import './Tabs.css';

function getSelectedTabContent(selectedTab) {
  switch (selectedTab) {
    case 0:
      return <div className="tab_content">Chat</div>;
    case 1:
      return <div className="tab_content">My Jobs</div>;
    case 2:
      return <div className="tab_content">Profile</div>;
    default:
      return <div />;
  }
}

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="tabs">
      <Tabbar
        tabs={[
          { name: 'Chat', icon: 'chat' },
          { name: 'My Jobs', icon: 'card_travel' },
          { name: 'Profile', icon: 'account_circle' },
        ]}
        setSelectedTab={(tab) => setSelectedTab(tab)}
        selectedTab={selectedTab}
      />
      {getSelectedTabContent(selectedTab)}
    </div>
  );
}
