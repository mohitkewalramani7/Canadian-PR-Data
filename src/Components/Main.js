import React from "react";
import { useSelector } from 'react-redux';

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
        <h3>Scores and chances</h3>
        <div>
          <h4>{`Current Score: ${currentPoints}`}</h4>
        </div>
      </div>
    </div>
  )
}

export default Main
