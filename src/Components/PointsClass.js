import React from 'react';

import Main from "./Main"

export default class PointsClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      age: 0,
      educationLevel: null,
      firstLanguage: null,
      subsidiaryLanguageScore: null,
      canadianWorkExperience: null,

      sibling_in_canada: false,
      nclc_7_or_higher_and_clb_4_or_lower: false,
      nclc_7_or_higher_and_clb_5_or_higher: false,
      post_secondary_education_in_canada_1_or_2_years: false,
      post_secondary_education_in_canada_3_years_longer: false,
      arranged_employment_noc_00: false,
      arranged_employment_noc_0_a_b: false,
      provincial_or_territorial_nomination: false
    }
  }

  handleAgeChange(oldAge, newAge){
    let oldAgePoints = this.getAgePointsValue(oldAge);
    let newAgePoints = this.getAgePointsValue(newAge);
    this.props.updatePoints(newAgePoints - oldAgePoints);
  }

  getAgePointsValue(age){
    let points;
    if (age <= 17){
      points = Main.POINTS_JSON['17 or less'][Main.isPartnered()];
    }
    else if (age >= 20 && age <= 29){
      points = Main.POINTS_JSON['20 to 29'][Main.isPartnered()];
    }
    else if (age >= 45){
      points = Main.POINTS_JSON['45 or more'][Main.isPartnered()];
    }
    else {
      points = Main.POINTS_JSON[age.toString()][Main.isPartnered()];
    }
    return points;
  }

  handleChange(event, child, statePointsId){
    let jsonPointsId = child.props.id;
    let newPoints = Main.POINTS_JSON[jsonPointsId][Main.isPartnered()];
    if (this.state[statePointsId] === null){
      this.props.updatePoints(newPoints);
    }
    else{
      let originalPoints = Main.POINTS_JSON
        [this.state[statePointsId]][Main.isPartnered()];
      this.props.updatePoints(newPoints - originalPoints);
    }
    this.setState({[statePointsId]: jsonPointsId});
  }

  sectionDHandleChange(key){
    let pointsValue = Main.POINTS_JSON[key];
    if (!this.state[key]){
      this.props.updatePoints(pointsValue);
    }
    else{
      this.props.updatePoints(-1 * pointsValue);
    }
    this.setState({[key]: !this.state[key]});
  }
}
