import React from 'react';
import Header from './components/Header';
import './App.css';
import Tabs from './components/Tabs';
import NoInternet from './components/NoInternet';

function App() {
  return (
    <div className="App">
      <Header />
      <NoInternet />
      <Tabs />
    </div>
  );
}

export default App;
