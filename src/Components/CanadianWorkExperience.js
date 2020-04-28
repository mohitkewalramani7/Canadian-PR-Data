import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default class CanadianWorkExperience extends React.Component {
  render() {
    return (
      <div className="inputFieldDivs">
        <FormControl variant="outlined" className="inputFields">
          <InputLabel>Canadian work experience</InputLabel>
          <Select
            // value={state.age}
            // onChange={handleChange}
            label="Canadian work experience"
          >
            <MenuItem value="" />
            <MenuItem value={1}>None or less than a year</MenuItem>
            <MenuItem value={2}>1 year</MenuItem>
            <MenuItem value={3}>2 years</MenuItem>
            <MenuItem value={4}>3 years</MenuItem>
            <MenuItem value={5}>4 years</MenuItem>
            <MenuItem value={6}>5 years or more</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
  }
}
