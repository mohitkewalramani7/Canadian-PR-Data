import React from 'react'

import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"

function ForeignWorkExperience(props) {
  return (
    <div>
      <div className="inputFieldDivs">
        <h5>{props.title}</h5>
        <FormControl variant="outlined" className="inputFields">
          <InputLabel>Select One</InputLabel>
          <Select
            label="Education"
            onChange={(_, child) => props.onChange(child.props.id) }
          >
            <MenuItem id="none" value={0}>No foreign work experience</MenuItem>
            <MenuItem id="one_or_two" value={1}>1 or 2 years of foreign work experience</MenuItem>
            <MenuItem id="three_or_more" value={2}>3 years or more of foreign work experience</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default ForeignWorkExperience
