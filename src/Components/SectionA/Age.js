import React from "react";
import TextField from "@material-ui/core/TextField";

import PointsClass from "../PointsClass";

export default class Age extends PointsClass {
  render() {
    return (
      <div className="inputFieldDivs">
        <TextField
          className="inputFields"
          id="age"
          label="Age"
          variant="outlined"
          onChange={(e) => {
            const age = e.target.value;
            const re = /^[0-9]+$/;
            if (age === '' || re.test(age)){
              let oldAge = this.state.age;
              let newAgeValue = this.returnAgeValue(age);
              this.handleAgeChange(oldAge, newAgeValue);
            }
          }}
          value={this.state.age}
        />
      </div>
    )
  }

  returnAgeValue(ageString){
    if (ageString === ''){
      this.setState({age: 0});
      return 0;
    }
    else{
      let ageValue = parseInt(ageString);
      this.setState({age: ageValue});
      return ageValue;
    }
  }
}
