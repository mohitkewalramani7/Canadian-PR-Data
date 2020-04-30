import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default class SubsidiaryLanguage extends React.Component {
  render() {
    return (
      <div className="inputFieldDivs">
        <FormControl variant="outlined" className="inputFields">
          <InputLabel>{this.props.title}</InputLabel>
          <Select
            // value={state.age}
            // onChange={handleChange}
            label={this.props.title}
          >
            <MenuItem value="" />
            <MenuItem value={1}>CLB 4 or less</MenuItem>
            <MenuItem value={2}>CLB 5 or 6</MenuItem>
            <MenuItem value={3}>CLB 7 or 8</MenuItem>
            <MenuItem value={4}>CLB 9 or more</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
  }
}
