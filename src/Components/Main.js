import React from "react";
import { useSelector } from 'react-redux';

import LinearProgress from '@material-ui/core/LinearProgress';

import SectionA from "./SectionA/SectionA";
import SectionB from "./SectionB/SectionB";
import SectionC from "./SectionC/SectionC";
import SectionD from "./SectionD/SectionD";

function Main(props) {

  const currentPoints = useSelector(state => state.counter.value)

  return (
    <div style={{display: 'flex'}}>
      <div id="currentScore">
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
      </div>
      <div id="entryChance">
        <div style={{ position: 'fixed', width: '50%' }}>
          <h3>Scores and chances</h3>
          <div style={{ padding: 40 }}>
            <h4>{`Current Score: ${currentPoints} / 1200 (Max)`}</h4>
            <LinearProgress
              color='secondary'
              variant="determinate"
              value={currentPoints / 1200 * 100} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
