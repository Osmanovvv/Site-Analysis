import React from 'react';
import './sass/styles.scss';
import TitleSite from './components/UI/title/titleSite';
import StatisticsPanel from './components/UI/StatisticsPanel/StatisticsPanel';

function App() {
  return (
    <div className="App">
      <TitleSite />
      <StatisticsPanel />
    </div>
  );
}

export default App;
