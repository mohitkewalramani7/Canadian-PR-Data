import SectionA from "./SectionA/SectionA";
import SectionB from "./SectionB/SectionB";
import SectionC from "./SectionC/SectionC";
import SectionD from "./SectionD/SectionD";
import React from "react";

export default class Main extends React.Component {

  static PARTNERED = false;
  static POINTS_JSON;

  static PARTNERED_DEPENDENT_POINTS = {};

  constructor(props) {
    super(props);
    this.state = {
      totalPoints: 0,
    }
  }

  componentDidMount() {
    this.loadPointsList();
    this.setPartnerDependentFields();
  }

  loadPointsList(){
    Main.POINTS_JSON = require('../points');
  }

  setPartnerDependentFields(){
    Main.PARTNERED_DEPENDENT_POINTS["AGE"] = null;
    Main.PARTNERED_DEPENDENT_POINTS["EDUCATION_LEVEL"] = null;
    Main.PARTNERED_DEPENDENT_POINTS["FIRST_LANGUAGE"] = null;
    Main.PARTNERED_DEPENDENT_POINTS["SECOND_LANGUAGE"] = null;
    Main.PARTNERED_DEPENDENT_POINTS["CANADIAN_WORK_EXP"] = null;
  }

  static isPartnered(){
    if (Main.PARTNERED)
      return "partnered";
    return "single";
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
