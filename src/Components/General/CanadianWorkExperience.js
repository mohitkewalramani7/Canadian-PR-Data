import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import PointsClass from "../PointsClass";

const NONE_OR_LESS_THAN_A_YEAR = "None or less than a year";
const ONE_YEAR = "1 year";
const TWO_YEARS = "2 years";
const THREE_YEARS = "3 years";
const FOUR_YEARS = "4 years";
const FIVE_YEARS_OR_MORE = "5 years or more";

export default class CanadianWorkExperience extends PointsClass {

  handleCanadianWorkExperienceChange(event, child){
    super.handleChange(event, child, "canadianWorkExperience");
  }

  render() {
    return (
      <div className="inputFieldDivs">
        <FormControl variant="outlined" className="inputFields">
          <InputLabel>Canadian work experience</InputLabel>
          <Select
            onChange={this.handleCanadianWorkExperienceChange.bind(this)}
            label="Canadian work experience"
          >
            <MenuItem id="canadian_work_exp_none_or_less_than_1_year"
                      value={0}>{NONE_OR_LESS_THAN_A_YEAR}</MenuItem>
            <MenuItem id="canadian_work_exp_1_year"
                      value={1}>{ONE_YEAR}</MenuItem>
            <MenuItem id="canadian_work_exp_2_years"
                      value={2}>{TWO_YEARS}</MenuItem>
            <MenuItem id="canadian_work_exp_3_years"
                      value={3}>{THREE_YEARS}</MenuItem>
            <MenuItem id="canadian_work_exp_4_years"
                      value={4}>{FOUR_YEARS}</MenuItem>
            <MenuItem id="canadian_work_exp_5_years_or_more"
                      value={5}>{FIVE_YEARS_OR_MORE}</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
  }
}
