import SectionA from "./SectionA/SectionA";
import SectionB from "./SectionB/SectionB";
import SectionC from "./SectionC/SectionC";
import SectionD from "./SectionD/SectionD";
import React from "react";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPoints: 0
    }
  }

  render() {
    return (
      <div>
        <div id="currentScore">
          <SectionA/>
          <SectionB/>
          <SectionC/>
          <SectionD/>
        </div>
        <div id="entryChance">
          <h3>Scores and chances</h3>
          <div>
            <h4>{`Current Score: ${this.state.totalPoints}`}</h4>
          </div>
        </div>
      </div>
    )
  }
}
