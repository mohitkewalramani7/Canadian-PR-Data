import React, { useState, useEffect } from "react";

import SectionA from "./SectionA/SectionA";
import SectionB from "./SectionB/SectionB";
import SectionC from "./SectionC/SectionC";
import SectionD from "./SectionD/SectionD";

function Main(props) {

  var PARTNERED = false;
  var POINTS_JSON;

  const [totalPoints, setTotalPoints] = useState(0)

  useEffect(() => {
    loadPointsList()
  })

  const loadPointsList = () => {
    POINTS_JSON = require('../points');
  }

  const returnPartneredStatus = () => {
    if (PARTNERED)
      return "partnered";
    return "single";
  }

  const returnOppositePartneredStatus = () => {
    if (PARTNERED)
      return "single";
    return "partnered";
  }

  const updatePoints = (pointsToAdd) => {
    setTotalPoints(totalPoints + pointsToAdd)
  }

  return (
    <div>
      <div id="currentScore">
        <SectionA updatePoints={(points) => updatePoints(points)}/>
        <SectionB updatePoints={(points) => updatePoints(points)}/>
        <SectionC/>
        <SectionD updatePoints={(points) => updatePoints(points)}/>
      </div>
      <div id="entryChance">
        <h3>Scores and chances</h3>
        <div>
          <h4>{`Current Score: ${totalPoints}`}</h4>
        </div>
      </div>
    </div>
  )
}

export default Main
