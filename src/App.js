import React from 'react';

import './App.css';
import SectionA from './SectionA'
import SectionB from './SectionB'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{marginBottom: '100px'}}>
          A PR Application to Canada (Comprehensive Ranking System)
        </h2>
      </header>
      <div id="currentScore">
        <SectionA/>
        <SectionB/>
      </div>
      <div id="entryChance">
        <h5>Scores and chances</h5>
      </div>
    </div>
  );
}

export default App;
