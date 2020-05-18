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
              let oldAge = PointsClass.SECTION_A_FIELDS[PointsClass.AGE_KEY];
              let newAgeValue = this.returnAgeValue(age);
              this.setAgeValue(newAgeValue);
              this.handleAgeChange(oldAge, newAgeValue);
            }
          }}
          value={PointsClass.SECTION_A_FIELDS[PointsClass.AGE_KEY]}
        />
      </div>
    )
  }

  returnAgeValue(ageString){
    if (ageString === ''){
      this.setAgeValue(0);
      return 0;
    }
    else{
      let ageValue = parseInt(ageString);
      this.setAgeValue(ageValue);
      return ageValue;
    }
  }
}
