import SectionA from "./SectionA/SectionA";
import SectionB from "./SectionB/SectionB";
import SectionC from "./SectionC/SectionC";
import SectionD from "./SectionD/SectionD";
import React from "react";

export default class Main extends React.Component {

  static PARTNERED = false;
  static POINTS_JSON;

  constructor(props) {
    super(props);
    this.state = {
      totalPoints: 0,
    }
  }

  componentDidMount() {
    this.loadPointsList();
  }

  loadPointsList(){
    Main.POINTS_JSON = require('../points');
  }

  static returnPartneredStatus(){
    if (Main.PARTNERED)
      return "partnered";
    return "single";
  }

  static returnOppositePartneredStatus(){
    if (Main.PARTNERED)
      return "single";
    return "partnered";
  }

  updatePoints(pointsToAdd){
    this.setState({
      totalPoints: this.state.totalPoints + pointsToAdd
    });
  }

  render() {
    return (
      <div>
        <div id="currentScore">
          <SectionA updatePoints={(points) => this.updatePoints(points)}/>
          <SectionB updatePoints={(points) => this.updatePoints(points)}/>
          <SectionC/>
          <SectionD updatePoints={(points) => this.updatePoints(points)}/>
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
